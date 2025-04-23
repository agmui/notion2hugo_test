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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYI52QWJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDsXvQX22H3Aq3q1bnRrYkshOPB3zumRvSPtLPVZiusQwIgS%2Bdkdpoo2mAEB9BIGFsAGocKpCNVfenyPvc5xRhqtSUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAo3vuzujhukv7%2FgsSrcA1F1jkmuJktNOGaWi%2BaNbZawy0jsetCzSkB28AI9Eq%2BgsgxqAP7JSnaRGIzN3SLlHAJicrctClM73kycytU87R5w0IZwKET3uDkDadaE4NIuMrKHO1sj67I4EsaLBLUIAR62yfpKjdWbymm%2Fl9f9bK5cBZSLKuQM6pZdlWXne7vhC1Lr3X1SFKURAHb0B1IWu9nXzSkcoIr9bbsnODMvcJWPmYSaIxOH%2FloLh15qXTH%2B0az5q9I5kVZlpgw5wKi9pbGAz%2FQNTRbMWHQlpeHIIIv6y0y5lNYuVel6P18oJmKvh%2By9veI%2FPSBou%2BOi0CgxszI6T6MpaKZbRhO218tMID4%2B1CxMRfear0vvbht%2B5IkrRwUtpRCuIQrhbnu8MUnXZTg0w5T%2F6pkDJVORvXH0qcQgz4Ypu7Ct7sE4lmC1F%2BwfZzqIecrHk3J7CQBvCZoPHq1PPsxz2wGyYtrZ16m89QebXv%2BIdhlVULaFhpKI5a%2FmQK39433Gaw468OT7v2UlmUR9ojx79Kh1iTDeruDB9MxnbdsAGhXft4%2BVNCTyjFJeoPiwMdIlGDJJ%2F6VSLku0wZDVxcgzqVThnkVK6%2F3nf3lR7BgcCCTfjuN8lc89vJBH9Ys3SmB47BOnd1EOMNHHosAGOqUBgSLnvw5Oj7MQxG5it3FSLdDXWgCBHFW%2BlEcGH%2FcXjddAefRd3pCdQ0omf44maA7uy%2BK0AorInWoiIp6D5VVPIM%2BNjb598zsooVEhauqlW4Lo7LfTYQOUU1Kn6k9leS%2BzjIZDNLsj%2FqN%2FLxH6uWRQVDd3ln8rBtmVwOkj921Vpg1GaNXYDw4AXdpBfy0rXwTEKc9wxML5ugZY6JsXkX6VvCdcCdg2&X-Amz-Signature=99b63b638d1eff6b69e0479a510ee936250064904af3e263f8963b7379c182b7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGOB7P2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDJJlWUJpNERh%2BvGHtx%2FM7YVWzH7OzuAMv8XmBzGMxPUAIgQ3lh%2BMtuSc7QXEaQxLNOQXzbk7wl2ay0JN9CDp1B%2BSYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR1YbQQFNiJi8exuyrcA9IElwocDWD%2Bq%2FL4%2BY6uhZFidbsmqlTmV6UxCftMeCfoOvvkK7ngzaBfPykCtZsCoHp5KW7omLChvPhqf8w1bXG6zjTO3gTVoL69HXCM6EKST0RjmPsGR5TJXcraiXPY11%2BZxPRutkg4XHjYzVBMV%2F0IsLORS1Jv4jYJLlWyYMiFBjCV%2FNrxH6XFAMy3ncbHfvJSrCx9WaVC83XCGTIxg%2BAexDeiTzmoXFd3P4Z9UT36YLYPFoce%2FFMMJNlOrhA1RqpLolck5okdBfGMcdw5Nxfi3W2NMyUYatfCbyLJnqX9doqj%2FYJEIyHIH2aSfYqXggUQdB2P%2FEHv06RXqQ0VwQYIERh1FpACjlS%2FaFw9GQs6aRyc6cvEFBvQZinrlIj18m0hFLEguPvMLIBI9mEw5c7c14QwFEfAwGv%2BmlPEFypYSu0vsHRlPBF0eMlddl8RdXS2P9iuQ4R1gkw%2FRErc%2FX7c4YzzyyfZbBjAbtQf42%2Bt3ErgyhqZnMl4gjW0Qq6bNkVblSoDQdb8I3%2FtoeSS0m7ijL0EUsM7FryLJR2QLFaHIEilM6mSGMkvtjm6FvOj0Yvt49iBl4db5I9h16T7k7XgIGoDagY0%2ByEswnx%2FLKaJf79LrpSfJRH7g2BMMNHSosAGOqUBQh1Q5ArLDTilYq0pTf7aoCBWU8LpeuCPHbBc66XslXL7bBi5MOxQuxVqTXrhoi%2BCzBxuxlSJPozjKJbnTr6Yc5FSeyR4RtGUtfG6lVMExHQO8cBV%2Blh1ZGnJSlTShF1MK%2BFrRz01MgNSpFaQrH0XUcOyGOto3676c%2BM%2BjcfyNvTCyQ%2BR0FfwrOmOEoyY%2BPXB1BXH6%2BL%2Bj9GBsNB%2F%2FSN40ScLsfEC&X-Amz-Signature=8e5dccd995c22ba17aa59bedfd05b95504b82a8facdbf580d2f199fe94effcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
