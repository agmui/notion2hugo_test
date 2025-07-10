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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2USOHYI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsxsrXrvmmrCqkngsENXknOOUOWB8D3MXIbFKuMIAIugIgAodMFc%2FYL3f7Wbpl%2FfuhHUITJO81X25mSVqeg3tz%2FOQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN63CcfHTTU7oFGsyrcA%2FRfp2cFZ2%2FXbHVd6b8QMdQC8r33h3N02iJPDL6ttQf4EJttFVW0WOzeLyxCLXTSfcc%2FRO8D1UPxCrZsLrIBhooNl27CvncOatG06I0TOdCVqJEOI63G%2BR1XKXKaPritp4USny%2Boj%2BJOVR5bCQLiFDCv599m57gwgqebVfke6Lon68hvDFUQF3RNwFkRnIuFJTIU7FXM4Iel1wDF7NZomV28oW%2FfBD%2BRr%2BCqqu8opN30JLCkI0T9E7ttJSjkDWu1QBINUIlRb36Kh4CIzKQfcjdDko8SyQBrpGAbGny%2FHkokAsSrTzjHAkchylVHFxeq6%2FUPTeAsVygAvQzjDolY7Wdq8no5h8H3iHcjHVfjehpSLLOm45WU8z%2Flsjj9rwVx58a1T%2FmfCmt%2FINXRibRN3OpVdKYxxNIWGOz7a2Z8O3s46I42qWglbzLQyEd%2FmQNuLrSoC9aoAPYgI3MZVV9pgNQdJq6%2FxIo63mRmO3WAmm8mU3rbIzc29te%2Ft8B4%2BB2YXS71s6fAFmWQJvf2VCSXmisdMkbuyut97zqXapSznD5heGEgENQjng8RxrQKuCpoE0gGJIR%2FBzI7wil6eebvRsy6WkrEeRcwdOvAVVp8dqdgYMTTCaEJYd%2FDLgzQMOOpvcMGOqUBZ%2BnE8TSYVrQlV6z3CcVdDFjs2%2BSaUJ5iwOHLU%2Fkb8LTlln1EF0%2Bk0r%2BqWyTqa7QtJAR9XIxNXSeNzyqxYSAusrf3cVycnnFOYz3QBdyo5b7%2FqqcIMLJEAF%2BAzms4n0R9Nr7gAyinfxgDub7bqkX5XllpkNT36Jk94F5GVefx0cz90HSjkvXmj%2FB29GlZPMKr%2BEfojI6O5%2FjwpIu67AP%2Fmih2URY2&X-Amz-Signature=3900abfee59ccfd38011b5982217afdef46e64ae875ca30c853ce3402aa8b677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4EU2QNJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb3s6wAZjIOpeT4VXSLGqIcqsg2lK3z2U4u0Lj4xUVjAIhALzOUCsTmxRbOwzHyLWNMJ9WhPoLv9mX%2BBgK2NVGU91SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwFW7E4OSLHQSb%2BsIq3AN0SEn8qWMiWlC8chloqF3LMkR5UotlbVrePNFVsq%2FOJoEdsd%2BO25Fr9DrYA%2B0kSGETWgXf1KZt62hkHz2gSmnMY3ebLHVtxKzi57IiMqsazuUPjaXQFh0NneuT8spHEsIoWcQyT%2F%2Bx9VNOikP9ysHqgFx2lPT373792Q7wrnYXvGFnwRNn6nRhRckEp4r2PHpF7TaFYaUwNLahfu9u0ZjD08JbrRFjc6qHtjndFPhBw7IqPvQc8reaRarXrL9joUnt3TujAH76L%2BDimcNkpdWlJUr08YqLNdJ0zNlEJuWB50%2FkKzS8pfqfVx3UUYkBpqF5mi%2BXVmEjiGgAzNXowuaiiN9yYcAOPUr4j8Vfko3Lpvcs4nNMvP6tvG%2BrQ4BOlc810o8FDNKYYCpgHlqwgo%2BBlPS2p3jsIFHg6ECIyYkQc7yTlu6o6x1m6JF5fjegD3FmajABOdOHvNpQGBa2fmKETgWh%2FBixkgNV3qSu3Zx9wi7KTeICBOve1KZdoqTFqfdLXa3f9ZCzF5ramwqaoskiNJWhTvvfYTibbrr3TfuvQgDoi5O6TbBoqS9q9gp6eTbqpR5CjOJ1%2F%2FgGhHYrv05hC2kHvNhIBGvff4eITw1IFGWWuTiicN3qMtTwPjCrqb3DBjqkAQUAOtWdrvKA2EB83Gi8A7LjsOHD6WUc7YAKNJ%2BqdazItQjoU%2FT6sTckgWZcuy0QpobVfxus6ZensjEZ%2FWEt7%2BBSbTDjO3mEpjPkh1lbWslZFQ98LXGEXvxdUOH7gb5NoLvoCbYMRE%2Bnq0eeehl7A5F3EmNSBmt42CnW0%2FfUSIoK53WB3a%2BU05cA74aEG9vnC7On65ClGB95NWUpqixVgn1pX2sN&X-Amz-Signature=c89cfc9ec9ec714cbda0038a79d3c2e2b2a1e3b5268d5eefb0eca0caf4b7c122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
