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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMH6TN6D%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCB%2F6gNKHIr4knQbzHEJamDnuaqv8IwvauQ%2FNuaUVWYbQIgdKJ3lqv2HWIomTIg4cOGAe8w3GDf17jMF2j16080GXAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHytzDP941HekngclSrcA44hp2e7ID4yG%2FYjFKM9UIMfC3TkWEawIy0ZukRxggNVJgyARSbP%2BlzXBfgrQBOlzmSjLcge84z2DMWndH%2FsAvp8Ej9Wc%2BZQXdwkaMtAoZTPf8G9zMoEGSwQi%2BX1bcClKito2Bz88ov6lVluJ8RBi%2BzB0XZndjTBl2mTR50z0MC6trCKh9k2xcqnEC2eKJ4ESuvLsxji5tyww25IuVS7u%2B4zZ3QGFks0eAuj1wucLIDKwaRuTB%2FEk9msLxnAafrbHzE5Z9Bt6QZu%2BkzydrwzU%2BWXJ3TUDh1yINKmp6PSNGg0sIQFxPEbEeU%2F1f7cqB22VOd4igzQ5IfGx5tyaWdvINuX5kNNLiscRd5QQx9K5Q5%2F%2BL4HV%2BD9g20QLJgY7WLN77FJxCDRKLda7fQ0yZG4mItBNq%2BjaNjG2lL%2FSpbhYU5Biy1Sl4wJ2ulkzjK19hxYxA447KgquEgtQu1%2FP%2B8rYSGFTRq8XeLvrb19L2bvM2LIHY6KbvLyinYsLSutXd5YFUfhC6kvbwhwBFOhInFAyBHL8DT3%2FezVAOcW%2Ffrw9UyawhiPooeR%2FbmZN9%2FtEyu0Wdi5zpU3M53yca0ax1TIbw2aZaQtVTpqv07i1j8m3LDombnNfCN6YyMqFrpoMJDM0cMGOqUBW3CBJMQYTMOqFj8cfzVqSFj9Ce0y8Rh0gS04nbtI3IH%2BqL9EXQqNrvIf%2BwTjMTWiJcoKmV6YRU5Xdr8IitQ9LhC3Bxq5mGEAIUjYn%2FzvhARBrT9VLpV%2FxcTUQAiUWdbzn6KJBf6RfCYgBj85IFtRkVw17BaOVAkXEVtYFbxRcdpdUTmJ3zK17htLqTfLl8NHc8bQMg8MV04O73f5Yc1Y0uGnsQyw&X-Amz-Signature=1289a984b6c2f1426a8fbbe01b350b9737ce4b3db4676aaac573263fbf88adcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665263UMZ3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZEUjPe5ONGttHQCa4ypRFy5WPXwC4AISygQekbejwxAIgUSxo%2BmonSPJwZP1kGv%2FmfmtIO%2FkWvcuOuouRf%2BtCE24q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKOsIyUGoyEb5BWNTyrcA1M1OuIHoAbozgN%2F1k2tlqcvTgwUzNcrh4OBvZWN7M8IIFTyx%2BIy%2FC8bDDdD7OiPeT7UjYtZQSs4OpVhz2RFNGdLn%2FrvrpN4Yr%2BLopkusTmLP5jXgQvtOzlSZcCUXd8URcagbGF71lM9xnlGRD8SDcFALl2pGntiU4nHTp%2BYKx2L7b5rkgdH6lhoO5mSlsGmmWxnWysJgqkPGFcyTLRP1jOD0WcaBNu1zO0NkoPp3JnLdHWW74YmfqIV0z5iFEpP8YMvO%2BjqKp0bvCQKlHwGPp7mKiHJHNrfPC5SP0RUVGFjQ%2Bhkgk96esV6jNWtoUKIW9wDFjCF2enXJdrfZzQ1v%2BGOs4xDVKIwRRYPrO%2F9ral976Mqn056nWuPuoHmdpO%2F8HEkBv6qDxrYze9WMr341K3vOvryrVXTzPDnTdvC%2BPrGqRZFgbVa2cVbQfk1E5yUObaXEBvV42p%2FLR5M3awy%2Fm9tZJIDQNhA%2FiVwn8O83aaHQsKtvcf%2B5OP3OKcVnVfmoVggKhoykggL2jhF4EXn7ehAosxf97hK8VIc6FaLjCpgJXC326KZfN7Vloi88iBiE8QViUmG%2BBBxv%2Ffb9eOgCNjpUZQXENKa2MFlD04Qz0jZpYC5qM0bXk3bGDx5MIPN0cMGOqUBXLr7YDXa0quVGfheKmmezWgy1pDu6%2FoG4Hju9Itaag87szrdUBmbOcmA6V9n23L6tYNvLB3V4g1yQ7dIYOD1SoROfHPqHHTBZBH2cFbaCM7Y%2F2eA6nSzq5Vt%2FRX0LydKixl8Cz942klvt8zAn1B%2BvIGONcY49xwbkG7NxuA4bNC9ZHekNWVOLN5RhgaEWrmhX3Q0vGeVofX8XV%2BkJS6FXf%2F0V6rf&X-Amz-Signature=1c5b9e2c5c6097ed7b20277dbca6dffe9dc9289f6b72975420e3f27196bf88a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
