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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3YXCTR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDF8ZkW9Kj9k9X%2BxEQPT1nOPVoQzNZNOQnIV9LpfLvYLwIgINyPJWUBBJR5VmUqcx2Ht4BW4%2B%2BfOutoqPCYMhQJG2Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFDGavSWDDC214qqTircA6JRciO%2F944ZSa04jv8WvKWb5GrcjK87bWjIROm9AhIPEFbOAbRuI%2BNyY21Kh5IlRBew2qYpuZQz%2F%2FrIuhRM%2BplZizzeeGWVbY3Ul3rx8QmbyEtS0qhQ8726JURlufA2tvkYAzNmexlhL2lkFPoR0MomIlNxUyJ8IirT50fH8rAEaqZ6OQnbBYGZYfOpieb5biQYo8CPjieKuz8CwBj4meG2D7MF%2F6rGc%2F7m8vDmzwSC9MdEqhvxj7xW9so6rsuxVk3vT7G27tV4Qhu6E5kBYQud31JHTtgZdY6UNMVoetE9%2FNYwpThLNSxdWajHSl1fopYHwhs%2BpwvIMiooUPak0h8BJnTdKr%2BO%2FkvZIv1JVdxV0WEWkf%2B%2FklZYxxDQQiovxgH3lP1bVMQnLo0ZBkC04I9v20w5%2BQjuPCN%2B8kvP64rgSusZ8soGMtFAwx2k58kT%2FQntVFqi8%2BaqZDyxMUYeBmchVI0iU9EB3CBT40wRHQYP%2F08b8hV7a%2FbSI7Qpq6Fi%2FyThupIknNuutFcpUvpRmxK5NznN6Ajm7IgAbjC7NhUDav0C7xdOHJnwD4oWZS3bnPs12Zdin62iiiLFS2vldlAQo6WxmNG%2BUBumgOomqiD8%2FK8duBDqU1dRHoiWMJ67tsIGOqUBUDuMjbkQAOjkAXhiozA5SaqlDRipd3sKtMViXCLov%2BMYJj7nH%2F0kl3fVvfbo9ub4Ca005f7qbgygZsGgEG%2FY2mPGllU7v3X7WpkU42eSZCDupEi%2F%2FJnlgy9a6auFqp9qJ%2FAwPZ8RFspoYYRaK9LkveCRe%2Fdr4VVNu6Hn2QKyJpUcARFVUHhmT9lu5J3gfMX%2BkPcsXtWPbSdltTOm7A6lEvE%2B%2BAxl&X-Amz-Signature=890b5dc81651cfdc8bbf1e426056850439342ea185452be37f3a27b0d1c77ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPX4U2TM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFJhVi47cm6qmngGVpRKxGUJzU9GLStRFgRmW67jhlpiAiBEDoDa3Sw41OQWFi3tpxlKCrwHTK1AhPRVdsPjNRDrlir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMiZ6WQZHzbMaP%2FfVhKtwDxulkcxGuJmcaGaWSpaM5p%2F%2BNRWj6YxAq%2BXflRjt6hOQfcvimrHifNLhBrAazKQIJ10EOAyZCelAdeYPInFezgKBJ52LacXdlo03BbgX5wSS867wo0n5dkM6MR5mqxzOf8Gl0vVjw%2B1hn9q7dCoWvvzkxBrjqPHMffnTihCaVmQEtl8RIEPMNK%2FteND4QGrgPLVzausVisdyVTHAu9q10sP%2BOEms1G4CiJFU9PcvvJTqLC1kuMFsQ1GHTK4MCt%2F%2BsrSRNB6U9mh5bwjaCLgnPhIetzSOBpgJyXKGXLVBSnib1nhOHOik8qfWQuDDh5655hEw2W6X35LPgGZ%2B7pbwP%2F3HcHnEpO0leEPIqck%2Fl0pakD%2Bp7ApHXe37qeEinYWOW7HsYFw8b5z1LFlEiGPi07eyu%2Bs1rxkm9oCKsBuDevtxykGJ63%2BT%2BE507ZHeZPcNhSkpMJDnzB%2FMOzn6qMTiJyyP5mqFzRpTxyLZa6kKz%2BhqGH62Kli9F5va5HH6qSjZGpTA7NDn026tLHOuhVjpS1NCH8TmoWxH49a9ZUD3ReKk7UCSQvQFlfJqPL8%2Fz7VBTpzPiSebRLO4hXz3eXfSqp3sMol7FYKyPwO7XlRrz9UhC3H1QBjhVKAdObR4wx7q2wgY6pgGWr9EYtm%2BcsBtt3mawQCjTduDnPf9uA3JxBf1p6zONjSUvUuuSRO%2FraCA6d1T801lIe%2Bc2HLCiNMHxd64boshhrVhNUBKMw%2BA3wWyt%2F44pOcyNBJqwrYjpGSKRuvwkcxKpGqJeWOIH0%2BHq4mJIVJQoIHrv4vQ80I5ibc1jqvd5BRWK10lbW%2FTao%2Ft51DYFqMSG8Fu%2FH3n7lV%2FDwG6xJFKa3Gau%2FsOx&X-Amz-Signature=bf5158f7c065aa7822339230e482b7d45df7cb04113d2345af86191011f5e81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
