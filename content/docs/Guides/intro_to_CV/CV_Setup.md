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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQJEVEDU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAKiog%2BMV%2B%2BHNl%2BuE304dPRhAnVdqPttLGKb2pmyc6gcAiBGVGsFsl4tSujn%2Bz%2BZIyBxQxBPSU%2BgprUu4qiJiH2IYiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXKOCjZ0CSXKwoablKtwDt8jWj4sHJlQbUTYSTfZnPVHz0%2BArT%2BwVPj220nDC%2FEL9ewwtg7WkT5IadN6r3jKIUF9fTBo%2BwCZtrv0GsbNL9T6as2Qq3nE3tIfwK1JwzNGl0tp26uzqd5dtfXPavPxwlBAXPZfy%2B1E1bYXx8bxe48F7K3aOlm8prlGt%2BlO99yShOTKH8jjLdByhuALFRuxaptfeAryFMHu30%2BDVKfk8y03Ezssgu2%2Fwl0wIcyzU2cJLpKU%2F%2B%2B94npeMJHnlXvAz3xQxE7etfaXpMgm6sDQs6MH83adliZ%2BpZttamtsSYlpFbu8STGSdW6MQl0X%2BWI69vU%2BJzo3eN1Le3DcZTjv36bwrhLRxwZ1SKmpe6UI5iOl5EIghGixQXRW8BvIu%2FNMTrLgp%2Fj%2BKA5bFikWIVS7NDnLMVKW8GQvQtaSsMuaW6SUvCmPaqa21VDWXv98r%2F5hI0gLs6GHgtW%2F2xo9%2FCFzcXdDsCFTfcrqtWppqF%2FRbt%2BzXrUFZFmwoDftHmXliWQ2g%2BNVh7%2BlRfMlSzCSo1A2pJQbxB61kiqzJiMIdPfkgmhcB%2Bd%2F62Ui%2BIhkn0LS8a5LRKuB4qh3O3c8bR0kibeYtwTFLXd5YuvDkv2X1RFH6QHDqRl1t6x6NDffG6G4wyKe%2FwQY6pgF%2BdUV1XqhUuh6Qhl2jq3lM3Qac5BYpmSPoZJNWYk3pTkqAriNyVZZU34nDmwRECXKmjJnMAs1cX3lNFZqJDlh%2BUOTa%2FQzf07TKdycTMsHNZeo%2BjsTeNbETrOz9xG5DDdHMtQZiSzc%2FgUZeL%2BLUwrmjjTv2eeTd0Bkmn81Vrsd0omkC9JExcD2H4V7%2BqtC5xXLRq0zTpQLFh13WWMR9hfuRc0Ju8ODI&X-Amz-Signature=f58db4727186bdc8f68ae597bda1df621175505fb195d8b32ccb6e517548d60a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEVOHCL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCMzMwA9k1LzDUkRHqmpoX002IrMvwcmgM5qJ8k7QEDbQIhAMA4OgaPK0qAdp5Hric2J2wun6N4BgqgyKc0%2F4psFxeKKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX9i3bd3ZtFUfEm5wq3AMgWNP%2B%2F318x6Beq%2B92gL62YNFkMeNDP1zFG9q4bGqcp56Xe1hC%2BnAIMft1G9EpYIFdwa8snoCivY2FPplL6RuBTfLWJk%2FO0Hr72mEpFScRjvc5%2FfSyah2oIDtpHHt4GPrdAgvsBZMjEcwE%2Fr3NZvGAg3Zl4wi%2B%2FXjTJop%2FtyU9Qqojow0m7BiVndC%2FS3zWB2tCGVZ%2BLbN57U7zfOOXH1kUzeudio6KLD3cDk%2FwiyF5%2BgOZQKDYofKC1tvIcsA9Qlz3cKxY0p1iFKYaqw9oV%2BYaDkkLdXIcc3dOdMjUa2BZpORxqGbSpaSc6Ifab60%2FOkrtdJiydH%2Bq%2BqViZqoY8WWDAZKj73SdUX2m69BDUqNvQS9O%2F5lhl70hCl9GsVTx5tsNwxuoN4kAZGe%2BW4tePDk5QSK4vDqENw0nvMcU5rx%2FAAlrwYrxwost2mzRHl2ftArsXrbBLlB%2Bknq8yNM5uMgcVwB0AZCCpJ5BXO8T6XXxpfENgVDVYXY%2BVSd5HSSb14YXmVi1C6PiMnKwZwPopGeth20G1UbS6%2B46GrhYKWnriIlPTzGMQ4EjEX5kogIxFcokooBbjgueo%2FOBdz3W%2B%2F2NzcDnz9QQDHvIW7lw1RwCApYJQNZhbxZmohYpkTDqqL%2FBBjqkAdm1riNokzLgtcjoSVw4%2FRjHbni0g7JprSuK%2BZIhtNoumpY4oXEP2Ka9WF4oHRemTR9UehJWcdhC2SBpyZ9adC21zuQm14J02kBKXd01FQOuuKaAvMAl6Ns%2BqgnsAUXirUQ%2Bo192j2Uv9%2BppXL91PITa0%2BfXbbqJrOK6Benij3Be9Q2Hb%2B8mc4WSHr%2FBi32i1nJiLj%2FwV3nhY%2BxF1FSV8T4KtebG&X-Amz-Signature=018a14571bdecf6d8325fd688bae42f8d8274ddca8bb830420da6a710f9dc915&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
