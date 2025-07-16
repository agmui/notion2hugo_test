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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4W4LX4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFw21LHD0PXxZOAGxtOjV4tfXEhnZ%2BAHCfi%2Bzy7zAxUwAiEAkAt7FekubJmm%2BBCbRSKd93JskTQ3r4Za2PSajTv7PaYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO%2F45i7pBGITTZK1LSrcA5a54lnzLyGbbgELumXYiCubLEWcrMjytUb7wWQZWS02mKSiLjeJk44RsZv16zTJ9ebPjF00kOU59QVX8fSSQs%2B7dUW4NN%2FBdSDy1ZZeabYDVa43oPWW3DqxaLWWUHdf2XORLkiLUa%2B1shS%2BrfQZdOhCTWEbpj%2B1c7Ji0YxCLlai%2B36lsuA6L6ii2zQW5yXgszQf8Q0NklnvqfpqzgyCmoQKuBdtcNW8LSNnHpwSem4yYPA7QG1QzL5rNRp53PcTLYiAf2DBJsFD5dI3njMhq1yuSjE%2F4GMH%2BERYsUHBEVQHLETb02IhdHLV8gOemPgwyffs52%2FftR3Zach%2FIV%2FoIqQbcmd00pxNTd3K5cZS%2BqOR86KGMkMCOEZaOUbZa8wzWvNEoIJcV40bEDtaZqO2P5dATjkUG6d5eOwfexqL2BLnibdgH9dzHwrSG3rrTEzF3QhqiSYRsXUCymAtzZ%2FzAeXsjIy0wZJJyQtIfHDD4UM4Qf5Uo5mxIiIp4LrRBLdT%2FU%2B5vAYJjavOoLrS6w2tchq9cwo8fLd%2Bq2pNIpRrCAAyjVHl1OnW8Dj5naXsm3fwEIYsusCaRif4rMpbmwL45Mn9yoyam4ZvOeQSlmsXiSkQX7ro5zM6i3%2FWTEOfMMHm38MGOqUBIqbC20g9eUVzw%2FC4gJniFYPFhq8N4cgiau0rJ9d3JxrZKXXBNMnlQy4me7pqy%2BHNXPQsJl%2Fm7C05MYaR0m6n7f8OnnHysjZ%2Byc2pfWXNlSwXH18D3w7Hggn7T7VXoGLSklpdFFMk8pEhXWt1FkPzEBcx879uJMC%2BgV2kN3KHu8QSPRl75ep56DpD1ZquqxgYw6XGIlEvTtQfLNnI3J1LRhJtiBE%2B&X-Amz-Signature=70076f629b81f399a161e4c282412605ec758dc04d107c9b90408a2565b3b8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5STN6PP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDL7fZqKHCbsCEZZpygs5EuwyZiUnjS%2FpJENvPJNPwJ8wIhAMhOw4l6ObonFMVsGdcV2UtdqcuRUCor6fgXo12yxy7mKv8DCGQQABoMNjM3NDIzMTgzODA1IgwhwkLyh1Mxu%2FMktv4q3ANKl2bkW6DfN1UKqlFDMqO9nUWF8u9%2FJ9JXBvsQEryrTGojGKdGGnALwbKofqh%2BBEruvmmJa9qMCymt3LHaDCpoD4jN5zIR67x7iwVnyQfshmRVZoxUi06nivT5y9%2BElOubxr5hXormE7AYc9WNLUXxmBP86XphSpb5hJ8T%2F%2FEOLI05qJEouTqZ0%2B9GooXU2IyawJ19E0s3VwBohMjAtn34pjhV61IRFyomDUSfcft5T3teZ6JX7BdJYeqbif%2F496GA6DNBX779oNOtcnCo9y5Q4JPZizaJLLgJtblozPyfYYPZB9VtcPV2MuCXqgJPLrpD7%2FvFgsPKPAjFMNE2lJpB3TtTLZ6hGt1zMbwh2GRoypF3NiljgOr%2B8xAwcIqqM8Sd6CtGWV5INFepXlMHdQIOUXDekcOKb1y00KO5Lqa%2BGVrgoJhiPCrZ3khO2rDOvbd4t9A40OrtQyI6TmMyNTzZG5cJ1ZKgxgFrRLNEaZVW1kIxG%2Bcj0OguFD%2FdopVOtL%2F6bQWtKQ9kcew5zowO3S66JD8GI80WM8u4ffBAES5Rbl04fVoNKxTEdHEZIVZ6DDB2q%2BRNG2U4BLMP%2BkWB%2FQijDhRob7Vs5aFkk4LaY%2BV6%2BBHEOmDA8M3v5dhZJzCY4N%2FDBjqkARcbSwK5fzx6hGux7pxKMVd%2FS9OYTD%2FnQOHnEo7tCYv3eFCLkcdPL6vCqLKr2YK4oI%2BQj3xThKOIQcaLLBzQ6VaPYPaebnxYHY%2FGIPOljn%2BMH1IXjKTT%2FPKAOD99gJD8lozqC9XFiwPwanrTpAJfzizV%2BB8hZ6jftJ3u3org7XLYMKeasJ88N3H05ccXDMqq3PE2LzE8le%2FZ93mgUhRGX8MuEnCV&X-Amz-Signature=6d71fd2df0deeb2cb16afc8fc454573b167b6202491562ad39377cbec23f489f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
