import markdown
import os
import glob
import shutil
# Additional HTML tags to be added at the top and bottom of the generated HTML files
HTML_TOP = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="author" content="harry min khant">
<meta name="keywords" content="harry, min, khant, blind, social, visually impaired, computer, pc, mobile, android">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="/endless-battle/css/style.css" rel="stylesheet" type="text/css">
<script src="/endless-battle/scripts/functions.js"></script>
<script src="/endless-battle/scripts/all.js"></script>
<script src="/endless-battle/scripts/nav.js"></script>
<script src="/endless-battle/scripts/footer.js"></script>
<script>sett("{title}");</script>
</head>
<body>
<script>navstart();</script>
<div id="mainc">
"""

HTML_BOTTOM = """
</div>
<script>addfooter();</script>
</body>
</html>"""
def convert_to_html(markdown_text):
	# Convert markdown with extensions for raw HTML
	html_text = markdown.markdown(markdown_text, extensions=["markdown.extensions.fenced_code"])
	return html_text

def get_title_from_markdown(markdown_text):
	"""Extracts the first level 1 heading from the markdown text to use as the title."""
	for line in markdown_text.splitlines():
		if line.startswith("# "):
			return line[2:].strip()
	return "Untitled"

def process_markdown_file(filepath, outdir, optional_relpath=""):
# optional_relpath parameter is mostly not necessary because this is only used in different filenames than index.md.
	"""Converts a markdown file to HTML and saves it."""
	with open(filepath, "r") as file:
		markdown_text = file.read()
	
	title = get_title_from_markdown(markdown_text)
	html_text = convert_to_html(markdown_text)
	complete_html = HTML_TOP.format(title=title) + html_text + HTML_BOTTOM
	fp=filepath
	if not optional_relpath=="":
		fp=optional_relpath
	relative_path = os.path.relpath(fp)
	html_filename = os.path.join(outdir, relative_path.replace(".md", ".html"))
	
	os.makedirs(os.path.dirname(html_filename), exist_ok=True)
	
	with open(html_filename, "w") as html_file:
		html_file.write(complete_html)
	
	print(f"Converted {fp} to {html_filename}")

def main():
	if os.path.exists("../docs"):
		shutil.rmtree("../docs")
		print("Docs directory has been deleted")
	"""Finds all markdown files in the directory and subdirectories, converts to HTML"""
	for filepath in glob.glob("**/*.md", recursive=True):
		process_markdown_file(filepath,"../docs")
# Convert the changes directory
	if os.path.exists("../changes"):
		shutil.rmtree("../changes")
		print("changes directory has been deleted")
	if os.path.exists("../changelog.md"):
		process_markdown_file("../changelog.md","../changes","index.md")
		print("Changes converted")
if __name__ == "__main__":
	main()
