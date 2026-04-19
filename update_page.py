import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

# Add import
import_stmt = 'import { Testimonials } from "@/../components/sections/Testimonials";'
content = content.replace('import { CTA } from "@/../components/sections/CTA";', 
                         'import { CTA } from "@/../components/sections/CTA";\n' + import_stmt)

# Add component
content = content.replace('<Pricing />\n      <CTA />',
                         '<Pricing />\n      <Testimonials />\n      <CTA />')

with open(page_path, "w") as f:
    f.write(content)
