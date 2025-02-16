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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BLME6W%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIF4HGLQZ7NNlptVyJar8KhYJuZQEq%2FXdFFdDdk06GGWPAiEAmOoVmHpVHp%2F5WjTkH7UPbWVT1LVDMV98L%2BbTKVTqXt4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJS%2FOIcts26h9tVavircA79646j2hEdV6MyWpzAdNC6yiwhyHhI8zNq%2FOS4vl6qq7AUlqHHFBBs%2F9dA1t6b9wnr%2F5TsgdR%2BUFgZ4nYaQcq0kYFSD58A1c%2BTq462Y4M1tNpyTxJSVtS5LsBMm3AemDjnvew3yByYW2a%2BJFjDJTneXeF5qyykGenw6qEzbQr9%2BfeAfDamY8HuwiQd39xJBcxfkvZYcX654MkJCqYu8avLq9NnEVGk6UiAMNECJ6kunecUMY3LjQFrIRu10%2BjAPxtLRArQYRU911waNPCi36Lfvfy684r7yyGnqqHwERwInVJwUzniRN8KvlnV74VOhFOtiYJSQjhZ0W9RQGihhTpeDcQpKbs9GzP266J2k66zSgbnw8ZpW3wl2Evkn6Cp4PWDW14S1YOA4tdLt4KnUP%2BMyWS2G7nrf4%2FOKW3Ci9OoSx05QyfOlWOUftt%2FEOorDcozRkjyEjN8%2BmQd5u%2FbXs%2Bt1itQ%2FfeiVQbQ0p8VfkOX2S%2Bl2mFYiph3zUW3JLQMrjJCSFnIr1O4AHEV5SXPbpAJF79Lksy3OYAcJih6BbXvRxUwa2kfOkxltNI0JXEmyc%2BFTK8tHtuHsF5p2nD9HeHidngyvKNBCKaV8QIOZESHzWoy5A%2B9Ea%2FdMY9B0MJLmxL0GOqUB%2BXkz8ZDnq99Mckxbk81k4py%2BbelBx9jq4VKKWOJ88E%2B3dqp3Ofl9kzoX1AyslT%2BDqBgf6EoCE5wY36AggqAihoE%2BzuV7GsLm%2BBCtKG03OFIqc3TXsu5rPUhRhapBcvhvgog6gjEcS5vwvZi8nHQUW3y8jahq3pLpmi30cvTj8gDsMFJAtas5qfZxzkFEeKMB3E7TbfY1dMIbpjBPQZj%2Bn20wI6dt&X-Amz-Signature=d098e2026aa53eeefcc0c4394ae15fcbfda60aea3253a6fb12a9a853e87dd644&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN6JIAT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCJG8RqwjMzbanwxzoURGUPrN6KQoILnk%2F53h0lGO3qgAIgFNZ2TOcOzMNwsmgabTdCYe%2F3W0T6FlTfX1pOM4bV%2FPEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhkzKUtheB%2Fk7XPVSrcAw2D6Bh47tbugUcZ4BViy1RpcwjUbZkqF5bxC2%2B4%2FVVnosOENeWlnCbYMkoxKLxeZn1TtKCgrfXqEXCueTFv7LUMtwWfQUQYeRD4T9tEKWnu2OL4h2r2bljbu5tN1IJmRVrI2%2Bd4fnqDELTem%2FTIH%2F%2BWrhiLiP8Ahqzwaq5IRSaQZ26dCBO%2FYX0nU3p%2FVdwnJcjlJPTIX7yOcNNdExcUI70Wu%2FbLWBuCTOuBAm0ryeoarHb6KGneqNC69h7Oc5EX7cczG312d3FzDPYHyLUpGW6SWNrf0W8fQf89sqrsrVz3lTIl6nR1ZC75uIlaDFJXihM8meU%2FrI7Uwj0BtcnPxK4usbHntxbgGzRet26ylWFDAy9gj%2BAgtO1rMHD3Z8P%2FPkPDsxU8P%2FJLUUY5mySsI4YLX8LCkPtmTp2TQGasEdZRDRLzXL%2FT3v%2BO%2F1uuqbwBAvq8UtFLObys%2BJJB5oGnCi7q%2FXDclzRrcBucwXsbajG9CuB%2Fl8IzS3qn7NUXikcvAoDJXQaldJ2A2HmbAZZXMfpdiKa4R2H77OJqPBH21lCAG1OI7PiGoZPALvZc6UsHl7EDJb0KMY7Ydva5Vc%2FlDWqJd%2FZQGlR0Z%2FZSq%2FsixMdttmLwk0%2FlUahEuoY6MJrKxL0GOqUBJeKOQPGnG3UoAyKqSUOJLoWsUUk4pT8laUBKGrjsxbWetrqLwpFR%2BCBv5pTAQNBBjCkYaQuUc60TWmMqOU%2BdSyLQHbluv%2BNQpYyq1ucsI8gNyukbT1qlvd0daWjzvmGs6r5SncngGBPv8N33a8jec2DSr6uPDuPVY45G8JrtWoum8lq5s5hf4wdLvtxiXQEIMw1ksaBfmG1q6yjK6XV658OjVpX%2F&X-Amz-Signature=e7327a8358f3e86613f9657e6c56dcd7246962dbd619fb8c7c939403b7063d83&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
