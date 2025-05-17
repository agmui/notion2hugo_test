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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAGW6PZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FrxwPuaBZOy06WyjfurW3ViLh%2F0s4TRWHowC3SFHlCAiAwSZp7ynZrePVJdD%2F3l6LfJJy7YnRIoI%2Fd5QpJKqdG4Sr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLN0sCnb06MIXv%2FUAKtwDTSnDC4X672K8I1VkMOGsOlFgrtMf827qSHoFdO%2BOV0jHowFVVQTFO23RM3CoGO5bFEHTQHRMvkFy15WH0q7t3XsKodpzuuK67mAkcBs3V%2B%2FGGpUodpsVGaaQtdR5ZVdrxUh71plgrgamuQKhmdiSz15gWiubSs6m6s6sJdM5QfOavRj0pEPeKZ27MkCqhK8s9yxZIPHkNsxE5Ya4k%2BKUNNiz%2FMIYxs7weGFKrJ7b%2FcfgCQ79%2FbRSCa6efmCirSC64hWxz8mbogScNK4sQ49SPCqAgfjah4aBwJjKheFYgldpzYJTNghsPrvQOcFoSV%2BnNuYQCgJ1U3jHQR5wzNhyy4Fb3P3KeKsUBFR1CQrgeay3e7y4fFR%2Bs0J%2FiZ5sSSspVuBJDA4jfE5sZSk%2F3R4Cs%2FIYIhMzqAtp6uL8Q10uodh3cerXwa1t6FazOc%2B2BGvlHGYmQ6QNnIAXH1aONYNUCyAry5ld19wnqr17iy%2FS0mpLq4vi2EcsjC6n9Crbbgr1ATIS0I%2BSp8BmBuDHvsDNucHHg05zX6l13XI4Ep8PCdIj7HWbkiE0XynpfWldKkfDWm4TuRvAQ6kFFZlEFrYYsurblrxM4Pe3ilM0OMbvXEX9%2FKe%2FOihQzHOFQcAwzqugwQY6pgESc2ksmn6ccwgmsOiLvYu%2FkhgaZFRllRehgsb6nkDu8g6BJBpplSyoFzbZfZIA%2FlOhY%2B878iIYHTSEOjYLIooDwZSKsGrjkpGFueygdH8SqZNfV8g%2FCiPiYOx3sYa67TJVZsD%2FND243Jcyjrw13aATIC4iuBvC6W8IrHwJAOsRqNkO5fELU5l9V9gcislzVm3urJeFckS0fyOX%2BO1%2FSOEKnD7Nurkl&X-Amz-Signature=212b5fe8dad42060431fc4e063facb043130b624b7265e614940cca3f4d54a24&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWYOWWO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjZ9ZY9938vcAESt2b929G6ewNlh%2F1UCTeEMh05CYF1gIgM4cQgu%2FZrzZiNP015A8DOiEmsrgn5ecHK%2BrBNjF5jYUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFSurY9mKN9EoSL1vyrcAx%2FYQ7%2BOb2OnCUsJZsJSOXBYAwOl%2BUfmTjFZMMjm6RKmkiX9Il3IlyNxuBvB7L%2B6BNQJEYJo9zyXbJeTbWSPAKinC%2FqKH%2BjFpKBAzsji9%2FLHpd1Zy%2F%2BtGxU1W%2BFPINw1wh31n7RABAsvZe2ZNGsO8fVVoEDb6XqAW67lfJX0xouKBEfuB%2FjQ4JwN6yI7Cj9rUVoc0Sz5ZVU2I1fEoGGqf0kZ5y5TCS2urSO2%2B055wEIIqtmSMkjMXlH7n1k7YoHTuXSDMSKN0%2FPM%2BBAQJFpxbzkDAj1jWUOPSZZpvwYiIElH3vsrXpMqkZ0Me4wCT47m0kP187n5lQ%2BD7fu%2Fl2nlRWRlGAjxCQ1gZun833%2FreJ6RNMPrkU%2BdoyNCjAxVydvckOVWWCaAPwiNWtVsG9KprFEiKwRQj0eA%2FpX5%2FD3qsOxFJZ61vtWuumMCl0QIrlM6IHUAa4p16s8MBSAu4HDuqrV7cuEMl5tAX6KecFNWaxajIPA7NB1AEMxKJGIlUAl8SqrxHCUrEShtcPAP1C%2BNOo2FAt%2BAUCadhRiMA4c80GXl%2B2Looc6bI%2FgVPoU%2FW%2BBxoL9IqhNNZDxGkoWuBkhrXPIbEe6YPwXXH8rgOts2BcZfbv%2FXJETLEZd1lTDDMI2roMEGOqUB9uz6k5m%2FrWm4CA2Vtl90DRlV%2BN4Z5tFRERRVKh6jMDe8CUB0ehBfRXPjsa0UEWIFgIK%2FaKBL%2BWSBDoEenood%2Fxr5s4qUorbpbLMw3zF6c%2FArhi6wUSxtC68BG51A3iQxsTaibPHVAbrDzkWiFr%2FzcXL2oyMoGVqUPo9jSHYjgVS1jOQtLFoh0IXKDtVNOtc11%2BOP3LcBkQKxUhnqCocoCdgPS%2FZH&X-Amz-Signature=ed376074ee97e0bfebe9ad48d1f2f21224e5c156cc5767ef86a2d3f135549d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
