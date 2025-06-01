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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LDDKZ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH7WySza0of1d%2FcVHQ4NjU2LvkUudwRLz%2BuawEC4p%2B9VAiAC0DYl6w3%2FIXo%2FqHLfyONgcHeEs5lzUpA1SF16MuBmKSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMokgtHQmAjZqwgDXrKtwDppJEE%2FkFPB4GXE6VJ6rP2zFD1gquWOkcfM970BGMrXx3ai%2FeWzuplj2aeoh3k9j7o5ynXLRxZuYpwEsp4K2NEE4%2FHkXGhbqOihoXvPupuPFTuyDWEM9V92UPOqPq81pIRdo2d5J9IXRCSEJvype0q%2BjJV6NG4bCztZAdfIv%2Fv3hLTbFloVG1IjrRs%2BeFovlOdf8JJj87nbhEo1hiUuFC8NzaDyjcZC2zwTv5mHUtmt3W1Lc26ueA3YxuFBysrXejiKUpd3FOttgLMA3EXWv%2FyWzn2c3Boz2VeVVtSpFw%2FkJNs2U2yZXZN4Ln2sO6b7oZ7TKak2J7jPtc4XfaPLAFkg3RoYJjx3FSjGlCzRSRirX3VLjXSeglsD6bervu%2BvH2zWxziJuyiOWksKLFSXeDcM0woZH5hTQmlv%2F8vyfhnrvVoQ4aiAeRbzaYO%2B55qUlNMqmflxXRYSlOMOalfECEGi%2FFOlXX6BFIX9Z4hgB5Yp18Ol9ipqHL04tSxURhGp7SiSR0Ke9ZrwFmgQd%2BNZnw61PQB3EqI5QQ8aGR%2B%2BJO%2F9WEnAoDjKxKeqv9nHAHgscMok2KkQ1nfu8y5uuvCCe1AlFwiYXFHkXx%2FaFYR6LYO3xYpjG3wgMm5kj4eEMwod%2FwwQY6pgFqHNG7KrCUvi6g0v2nfx%2Bn%2BtnhNCzPAMj1n8sLf3NQvqJkrnmESizWn4lPYi1F8TMSOUMZ8EYClljDDcziJv1DzceZyOzR0OsxPdncFDNebfI6fPoC2PGMbCE2rEKqcXejEvNxpWJlocyDWxQjUTUQg2mYLiWs2KeS2sur3z4bg7kIaOReD1yw6MbzUK24j8Y8JWDqsKG7JrTUnPbcQxr6VZGYUO9P&X-Amz-Signature=015e261d5f87103bc965b45ca0b1737fbe59235ef777e512e0eff978582987cd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R6S7LZ2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIATAiuvGqedPtC2BAA83VOYgw%2FPFQnJgdNOfk%2BhmpovTAiEA9lZWCC%2BoEmOt2bxz2zuWt0HWB7vjp2O%2BKaAaz9twdNMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3wG%2FDBaUGuVrWdICrcA1pqmkGdo%2F8rHzSw60ojQKtR8bBJOLPpNDElD20XD57rfsHxUg%2F6eXzixRpWZRdrCYVILW5lnAU%2BMBxFYFXBlgIZ7wjoxc3t97yOn4sedjejPB%2FEA5uGw1%2Fpk1XFUKL%2BO24MdqyPuDMSvDcPA0DPqWWAHg5CXJ1KMohN37lJd1uUuJBwcEuUpVw0d6IeasU3y4bzaW3k%2BkCS5UGwYneWGz0A7OVrw2fpUAqK9kiuMe2m59ZVoF%2Fiw%2FDdcjvBr7nbEltuQRhT23by7ILpuHAHjuRDN9ZLrd5kmsOywq1PHXU7EJx5wZRIViQ%2FJ2tjD4P6jjRKawUCyqVvOq39L%2B9M%2BvAIApri0CWApNgeaChBJelacv4nAJgkWUmJCz%2FDUELO5c2ITJ8JNC2lsT7qOTfEKXfN%2FYjzoFXXnFw3lJiFJFHr4vzLEhvgk00sKUJv%2BNeG%2FwgvLV4nviyUMFgPZ0r%2BgcSuBbjXRraOXhJffMIfJiEd3v6H34jtAmCKfb2kYw96WNnorEG4NmEJdQDZYCOgPdUOCQmmgwppP7ZZj8Pno7DkYz1Kwk%2BgV9p6jdP9rmffBCR4JkEbTPnxEFEdxOmmjQppbmtCILeF4gkJFB3anE%2BxIMsp8PYjKbuMihBcMNLf8MEGOqUBTVb8RT4HiuIf1l2pPKwtNkn1tnF99aGoZ%2BvdQOCzVmVSOcTAv%2FsqizhdKwbh6%2B4KEmLJQFRHEX6f6Ln1GyOubggcdBdnFW8NwM%2B1JdaJZf4qhQQIZSIrJyzrp20HH6wf2yI7t7rVs48pAFt3Fj5XwYRkkqY3ON1mNiqp7CE%2FyoHkBK0cAL%2Fikg30hJURsoRRZ9vEpDcbScWJkYafYkIzOpHXX6Ww&X-Amz-Signature=f9e24821930d369a4d33881f642bebfa1072144555fe1feeabb33958c9e76257&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
