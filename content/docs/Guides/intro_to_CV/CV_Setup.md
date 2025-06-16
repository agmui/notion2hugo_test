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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6SYYYL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEkpuQCYhZ0c%2FR%2BqfBsyAXngCt9tt7fjooW5XO67rEWJAiAUZe%2BsfqNN6rtPOXPQMZfEvmc9HLsmyNA5Bw6iiHGi9Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMzZiR6Du6nm0Ufe%2BKtwDW7yKYiP%2FAUi43JPU0yJNsoxO0KKuuiMCUIPjGou8MesSnRPeZEumd%2FELWrPKhGiex%2BmbHjpsM3vhJllyznDbGTL5mImv8qcplPdmHYgHV8kCGFPzA6iXldt36GMvdMOV%2BWz%2B80CF4bZUjRXbAcLWpzdr6jxfaoROQWOIrNY35VyK3pwb0ymdtnchT867ECVdOROGDxJJbilmByms4%2BiHxk2241feD2ZJrFeVVxOxO7sLH8aQsqqbjwD%2FunSgLyKW1UdwHHHpPuAv295Ji0Z5C0VSDrgyqmUWWqG7qHxA1pCaANBgoHbsvf2CSSA4bNBHAVpXskCiheO0oIhlECqOz6vW025tdVXKFwoEpU8FuoPavT0AnGobC3RR3ZEw9UL9%2BTbLY7O0oiu3qqRQPpjQ1HAe4bms1E1HVODXUSNPwirj%2FLRPx1lVBetnz7KxSqeSoUAB1LcfcY79rUr%2B1t8trwqWrwWBVfuRSt299Yj%2Be7GMpEY2ecozemWMN9%2BSp0qV44FsE0yDcMW8PXM9ciuyZghnD8kZlnKfjpDojetuWjMPqyJq3%2F3XyvOu8CVJB%2B6mu3p1tGYYO2BMTP5HM%2B4cKGTEMAlDt0dbKx%2FuWXymZ0siapbi0mGuP6eYXAMwmf69wgY6pgHJJ9UKjsLaeyD3q%2B3aVCVrfz67MSnFaMr%2Bd8i404Gci1yIbsCLjpdP88PJOyaylkCpuo2E3MkyDmrod3vTF9TcyuRuJSG3Kv2sagu0GvjjVS9q0N9UCTlQtSEcd8X5yQ3q6Shq6mP49ukuRqzUDvN47Wv1d5sp0q0iA%2Fn8IEG8UE%2FbAGea8I70ADBSCGI4jWGxz3ve3fPip3%2FFAOW%2FBRuP1QNIj5MO&X-Amz-Signature=4dade55a29128c7c3b50467c05d9db88a4a0ec26d25819acdfa097ba01c1c04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4DGKFL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICS5kkn4N82JW6WQx9WQFmmCawSxtB4dMjunYcwSyGW6AiEAroOeeFA9ks5GZQgBdxvQZJ5OP1dFOHX6xrt6h2MI0rkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJ8HU6vZ9iapgazxbircA0OS9xPY1iIIr5rmwDAsoRXb9IJZ%2F0qaEP2piF3b4bJkBrCB8r7SlUSRWVSFP93rhkGpKwUUchYDhZeDYSPBbkkl4mGSLf0tMBleFrMU90uhnAEn8XXgaY2kgUYA2nd8804HOoHTR%2BqUF8vDw6VuGe%2Bd7zKnqb2CSELtN4g1QaRPpxuTQT%2BI5%2BBbVX%2BUIygHpRVnMMg%2BDp1ltQLuB9SiuMyk4AI8HHgLBT44zCK%2BBgm0Sd3KsxoeS6b6gbayZwGn27ZkebbPgY3Ga%2Ftk0eO%2BZFfK1GiYFpz7NlxHlkscfYsy%2Fd8TJOWW9eNBW8BiHE8DtQpdKev0qcm0irHt%2FJ%2Fqt0lB4PAFuQA28KQzbc%2BkC%2FNpgOrPgfDr7ndUnABTCBkAVvly8u03n8U2L%2FFu6FkQqcY7YNLTlUhG0tM2oWE1SGCVy340XQywgWhZqZt%2BkT49mOEK7QLazlfcULuPiAPTIjS9pqLYvcZ%2F%2BmoE92hfW1xxvkRCTDRMLKXvCbgOUF%2BNPZKIG93X9ppmtFE%2FbtZLGUsgqJyVjPh3QgqpALSUeCkMfXceOOMsPAJ8%2F23jzvb1QERk6JiwNDW1VAoXKW44KO9rm9s2IAZqddaPBnf4luRDzmj9sla73U2t1V9RMPj%2BvcIGOqUBWun%2B02efEwiRDiiVHdx1voeDx7qZOF%2BSreWerGpmMMjPUg3VIXmTmcDjZkoEP9ZiwKF9UGto%2Fl4HAyLubbEe7ssBamyOTpn2kdQNxEYqFsNc7cO3mydsKcllbUYrog8rqsZgqTglDEPisAg1Fc4u9iMNR23oFGpnWYlMnO1wYzKlqeLVV%2BIBuIfUeWIwrBgF2IEDND9HbBnvf0j4VODWECYx08HK&X-Amz-Signature=17b159b06992f22e1ba5988651f0013e904ad64cd70fbf5d0644b71e4801244a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
