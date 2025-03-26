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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJRIWOUI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjcKU1LxTC2Pwx1sCpclrRNSWkGNaJ86dBJc0TYosK%2BgIgTaBmwszVOT7PkSn8CV9t2IWvIVAm%2BBZca4XqACcfRxAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJHkNGu%2BLaRwkby70ircA8eEdVjUhy7ovIqOr63wNB2Yco5SKdjcrw0Rkl1vRvfGn2IDfQ7P%2BNp7oAGXaQ2uPGhiTS%2F82pR2qwaTyrcfmBmud1U1waIVFgJ8Xtq1ZxvDkU74gZB1Xc8VcmUpHpmL%2FhxWMzQwoJfgLkJ5whJK9tz29XSqHWn%2FyHjUqpeKHKGVrPEIUwifVfviuuF97tCPmjQT3HJuyHcHN0O74I4VKVbLidsUK0hXxJuyH2cVLLNGU1IDzUvaDQg5gQ9UCM45gDr2vBTDnicjUqh3%2BxMOmxudXe%2F1Xz%2BR%2BLV%2BU0T6J75B5ygVXn2Yu8kXrwgTpDLsBSp7ofWcySe%2Frfdy%2F6mZrkbuLU6A19yTGP%2Bh4cfSQeHqHXz%2FvwAtrK2G%2FDJWi2s72GSxLiIT468gjlRgjt7qYAp7OOgp8UKPGdBMnFdjBiXtdhLZSUMpp1PYY9MaTSFASTU1yt0MBm%2BeT8GHry%2BkkqOitGPQg%2BBhIj650qXotzlVnFu28952HDx7eVLwSBS%2FAYl1q%2BE3xxMW%2FmtQyYF8ERtjne4Sth8fYTwbJUt%2BqF6ssLI5BpaZHtnDJWR8nyD7BF4QglVVj0edDq6GArT%2BsKReZEYRFgvtX3Rg5O26Ki%2FOzWmkF9hy%2Fu2vHb9iMM3XkL8GOqUBQj2m2z7WEDfDRf8jlPax7YlMh5tVDW27ZoYo8fQzfbshHlEgYADPXkgIQcB0uNvBYg19lveI0Otzemwx%2B4QIExge8wM7zI8uNLt86c53BiTEUrdYvee%2F%2BUY6y0FeM91Cck3%2BiT9epq3LBF4YZp351UCTtKf7ggeX%2BxjKNHCAQwnnHlQER7QTBaVkUYdXjmJETGunVC9p%2FBsZ4zRZ68uRYcEC08WE&X-Amz-Signature=4d097f872783eea14894daf123a3db53c689f715f4d9768c738e5f3f18e8430b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRO566T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BVitVZStP6vP6O8unRqZmBweJZ%2F6T9%2Bf1ubLvfHKqzQIhAJC61JyHyKsECeapTGA0nVJd6jTDrv5ul9tZNwCbfjdQKv8DCDIQABoMNjM3NDIzMTgzODA1IgyxcxorZvKG3CSSM%2FMq3ANKzO3fSRGkNcZSEOI7gv22i4YA%2BBsBEbM8i8R6bzwXZA7QPDnza1Ps7u94fcBtyvBf%2FVgsjBq5RBeEU2ycI1NA5OXv5XpBzej83TWxEiM6zWCmNntpN1rWlGn6ZPEtOPLkEFnaCxiGb2ygVJk3vI94eXgQXIF%2FrGgPaJ6WQ9fdIbkhYXdRMCg8rS1DWkuA0xM7oBiqok0kB%2FmBMkyhY34mIDOQY2UJC5dxBbRn%2FXxwgTSZitBlsVGlxfChsgQUYWRXiHE8rk%2BAxU9cFffUqec8AXg8dozPyu%2B1DMYUcrkkJBPTng6CTJolsRrlotbTmlwnIJ7oUOtfSbPxwJrKCSRW8uZY9UWK9cLB2rMG3gd7e56s%2FmN7FZAd62eXm6r%2FTmgdfOCAaGnvuyQXZQM4S9UoOZy1brGj%2Ft2hVRlcJYHpM1UdrvyQ7XWhNRfeRSeJsaed0OzqGzc7JFRQkxLTvLD2DUG1oGBa5xG9v2v4H3CsHLDrA0FNYYdi5BZl2x0pOFboZmNHj6K6F3kWH4JKw44KKz0C%2FQ82T8rzagcwdMpNdxJX300AkbK0Or%2FZl0CdIA%2BSExBs6gtpJukyzgCT3S1EcgziBW0aLHccvLQ7m3MargcQ%2Bynu0jIh5WaCljDM15C%2FBjqkATvmQscWSp4VQgbOpaVtTZAfFl6pofyfJiGKsurIDNouhdxiDjzvs9Jtadp1C%2BhSH0ACLdVMxwTdJBn7cTBjJ1Mg7y5ZqqG66H00k4IwJnRGHQRdOqn3xcxB1ZqSblyOecxYtZ%2B3cal33pKwAtmk%2Bt4%2FtvB5jR0jkmPO4DDMrAX53Y8nYeVT2h7jECaJGTmEPou%2Babj6%2F2AlqWPxtnhFBzw7RSzH&X-Amz-Signature=9f07bf9b0c1dc9dc1f8d28bd032194a374ada65da80e5ca76d1da5f85759ba6f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
