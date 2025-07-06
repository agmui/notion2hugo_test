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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRIAE6HZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIG8sXVXLd9%2BZpUUOekK%2F3%2BZiUCisOtoQiybcszavWhKmAiEAi7phg2vtTAZ6mvh8ub7B%2F5rFK0xWbRr1Yi9dWhQ5mj0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHfhIv2tZ9%2BCbFxlbCrcA9Gt6zSdIF1izadys9Qx9MhfgoDLWKMPXQpWgHFs37w9C%2Bf1UFfv6S%2BdMpAaot%2BhLSq5yGY54pmoMjmqRnjDOq6ZEfAiWugUatQKnEHBIDjDblqZRx6WY9zVdzPxibHnlBxzA8acdzekbjczvzCBjbzqtWd6uvXS%2FyvI4Rfam0BDYYhNXETQ1pVpNv81e9W01FL2YsOj5LtyGransYs%2Fv7LzefGntnZr2haOU13LIuOxGrL36OZ5Zf%2FqAvZ7vkik8NsLYVejPF8QMFwMn1Mp9WMBf8zNuoUEKe7CNVgaPwl6uEXrAZbFQvz70OrJvXCBjzBtznB404R01W4G0mIAlApMR3qIUwsnm6CMBPzANd2hgwJtTTa%2FfOlk0%2F70xtmL%2BJ01Kd7HCxgITEASKnQOBR%2FVAo%2Fm%2F0yEu09GV9P4h4DWjezn1c9vWiM1dBaE1MhvPnPme51clkPsJDO%2FRzOd8HkbEzxfsbaQMDIUTGVFUNtGlurI0eZPIE3yPCkN%2B5QyU03qMssGEc%2B2zWpqDdvZJa%2FUVj4fU%2BaIFY%2Bgw0gBU9bN3MpfmbWAHYdBjjDR8DfvdapQQLIU63usAwJkjFN9wryfn0xvWKxZjDOuSAC%2FAYpywo29RtUrbDMhP5cAMInTqcMGOqUBk5NJAZS%2BY57yW4fmXLezHmLSxwTXjPb1c15EQgSexiEhLo3WiYW4QX7hsi4AnqLPVjWwpvLaB0fiSc%2BPFoQAso1qHmeC45BhQjdh0PUiIla6tlPDc7JJT3mXljAZ7Yb7iJ1Qpm4jsdEumGhqi39Vh1Khh8k4bgGrU8VkEY7rteP4LFGMjUYUrWuKvaKp4cqs9qV0BDlRXMWaQi%2FM%2BK53nX9Efcs8&X-Amz-Signature=25a0224fa6170e082f52228e5ab1c2f74918b362e71f4dbc6c9bbc0a2a668168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELXITLZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDZ9LH%2Bky8LBalA2llPHfO6ceTUacIEZ9Yz0YH0l3B3VgIhAJPXK22QtvFPxT0Pfn%2FIumonzObbgQAUWTbeWysiEjyTKv8DCF0QABoMNjM3NDIzMTgzODA1IgxycqAjQqCbR%2BagfDsq3ANvQ057qNPgzhlpUjgaaGXKM57Nm61qLfgmDf824HFAHg06KeuZZYOtSIYETmv63AjsHcEi7FOb9Gm%2Bhfpt3Y%2BF%2BABNfVhiAd4d4lQTiybRdVlrJ3QF9OCmQazD0%2FueEWIaLEFnUvQmns5AqdesjBFWkW1tMJR5EfG7G%2BeuSEeEaLzGdq3DXE4SzAM9Q3RXLXWQM%2BIfOuKGT30pHPMeGqpeH9hILNCYYu91w2%2FPi5ljLg68Hq7HTP3JWBMaWlUVAhIOontCQLxGpkOYsIY4y5o9dMz0bjdRCeeBEtd4cr8irAuw%2BADjUMBcQYA%2B4Owuj%2FWBPntq%2B6q4g1HJLD8qKA4SQtEHE4kakYDaRpSLjJVuxBgSS4Y7ii2%2BQ7Kk8YZ3UMwbeYEAUA%2BQnghMcZmLLfThmdxRfyBtV0LG1eW0KfgTW%2FnjfzkDo1Amn%2FW0TZrzwANoh90VmcUfCSVf9UMrE%2B9MZP9ekAFE7UZa4WC3wPpDFuSh573O5EddhAkcWW3RSomvUWrRuzsNyScrffNsVP43gYmidoYpeL%2BCD4F7n5BJHcoNU2tlnc0PhhOHvusTe%2BV6%2BwiFGgdtk961t1XMxbhi1IiaCyhAe4gjj9mKCjQpnNwvRiYxfMefSbw6bTCLxqnDBjqkAdqTzbfizzB4eSA%2BV2LNX3uYny4gaayMGXoxzP%2FM8nx67q82UgKNNNl3EAhbp146xfXC5KJXf%2Bf70Cuxan4qzU6XkdKCa3JiLltMWPsKHTqggFh6kJyDrB88%2FVSO3z20hShLPq%2BRrkYN%2BP4RO2%2BCEQFStGr1DF0VoJ%2BMrfbATKglZBOS6JD94LDph9ZiUMbwNTM0MG5sky8QceSS78HSNNkit6Rt&X-Amz-Signature=e3afa616e8dab74ad3e9c881b9d2a1bef32f125469d5057654816998b59e521f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
