---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUXR7V4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0ohIrRZVwoj6CIFDXrd5GEChogHWnLouwuQucQurR0AiAAkz1KStv3IHcEPtLA%2FLSNZ4DNijX9Nl10xydKl4WNHiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkrQYgSfd1RRCTfKlKtwDoTrCsaDwZ%2FHCUmb%2FXQJ4BIoO0f2vWop0RiPSmssS0rniADRdrXzd0gU2SLzliU7X2XnGYeBgnmuATAij3I5ewCkXkz7KlekhyGnyCs5WoN9iP61nBX%2B3ANz88n6GO1km644yuoL6ezoKseBCC9jl51SVxIezbUOkMG%2Fz7tmsYO6RV9nUTeR5u0CwrAXm64QI2G53oAAnDtp%2BUM5%2BsKc7YGlJWFhxAFBpy0fRSMEDSFYqM3TIIy7VsrHlMMryTHLnVYAd%2FzozGx%2BMsYXthO5C%2BuwdrGuv2T%2BYFEyXcVwfpscMxasXu9JrXfY9oah73Q%2Bgf9dM8OIMOa1n5q8OeYuXMirlNuf3JgoCnLiiNYOdrtBqpV0DrMwujEL%2Bp4VvafVINwFIVSHJz4taePJhJUFVK96YrX5bJ55pkBBwHFTa0i5%2B83YUnU2xwJVR3AyhysI4p%2FczqD33Tw2w9GVwcxpM63p2G2GDFN21lALKY%2FS%2B7cTmN6NFoWpI7Ldfz7jyI5SfxoDX7Hg6cjpwr5xDa7Zj65vNYM%2FZbUM50%2B%2FBfxT6yTbwJfu6BZxb7v7zHHtFLHcybDYzPFb9HxcrHZPTY1bohoEN43s6LOjIEQsjrJiSWwCy2%2BeaTMIgnhZezrww5MKtvQY6pgHL1MmrzHAd%2FDS08NPXJzQTVaAsaaW3g7uoqNcMJvpCCdSzYpZ%2BkSyxAkwEPpNB6NEfWr5ovSC40%2FDRKU1BfqTSVjUTykUJOwM45Or%2Ft1iP4fFc07IN83IO2aUGRMDT3nk9AzAZStFFpVAZJi%2BnLw1xn6w9fhOT%2BpuJufS3p7cgv7OUMx06T1jxI%2FzTFQJfsr7s6wHousgQCCeRzifnbMhEfl1SBepk&X-Amz-Signature=8c8090cd0f261db7f734ab195e6f293a8c2ca5a302d9aa8f916823ee75cf341a&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX4Y5GR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFkiVqSOSnQ4QJ412LQuVu6x9xSbvm1u7W7zjDIWwOzAiEA1nSO%2F0x6Ysx9l1K24c4BfvtRSCQgALTR7ST4VFdiEIAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7fj7cb%2Bv%2FYK638YCrcAypDOZ05ULk0ntTmP1L6vGKYnEATBVj2MQKJ%2FkcqGZVLKLWD9U6GvhMkFVMXo0JPNAOQFwixKVX4%2FkdrQquwxFFe%2BLqiYjbYQxcAP1zaMz41HX2d2EQyBTcshCUHycNVTzxy%2BuPbTEov5UMA%2B6rsQoDAy4BfjWr7EkQBd4bxLW7CLb0Wqfj5N6PsemBOjORiL4zhHk7YOEMk95%2BfaYm2gPLEEmfuoEvV1MfB8TIO%2BxBV2WaDZz3ZldqTY5t%2B%2FpNYRgXEdjlCzMCughoSTAXx%2B%2Fks%2FaRrrFPpbGzj1nwHZ3%2BSc%2Bbp%2B8JBHYKbFTlDYiVmFnwaiad4RPva7XlGG4g8lzZdkugzoIiCnOJ3eLT8ARIaKmHq0EpuXXm%2FWzy8ikG2vmqMv1RN%2B6OVgza%2FovR%2F4ucWn8Wpx7r7PIdV1cFBnBFmVAtdVTkT1O33PurUssjG5q6kC%2FFM2P5ziaARz%2F0Lrylg%2FFy98rf5Xu47K0hebiRcT7XuA7w9f0%2FfBzNF8MwYYcjEQi4S%2Bk2ORSXstlDBursTH573cTjKB40hEQZK8Zc4QauIfhFXWcQRWU1mYREIOECZV%2BWTBjjBBDWqnTgEghvE9rtJrC1xZiNPVsiVQZ3CttnCvAfaM9l%2F%2BkgFMKXBrb0GOqUB%2B9FuxunhkFUEyi00sb1w%2B%2BNAC2B6IPLq1yU6u1%2BdKGNddcp2GBun45tDWNySPP9i7CsK7PaoF4Wb%2BMk3givDJErM3VUJET6ng6uHpz%2F3Ons%2F%2FaKSxC9j%2Fvc83pS4bISoj9%2BCFKK1lcFxZDBl4IxJ%2F0LjUHzdQ1JGbP3diuqapHEtIn8lOgwZBt0nF1pmjV5Y5PlKnoNG3%2FPxDuPsjJcudMZfAyZa&X-Amz-Signature=fa163fcdad453fdbafcc5ed40757309504b60ad894773a7d2a415896b3a2b15e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
