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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJXSSOJY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD2rLxWPzOUJOrGD4VAkNzwkZK39%2BlR%2BqckbRSBJYx2QQIhAIV0yCiWpbL4QSxgFNvw0wSPC9B7LE49nLFd8rvZ5VqgKv8DCEIQABoMNjM3NDIzMTgzODA1IgxtoV%2BMfUOYeF0p1Y8q3AOZ1lBmd%2BjEeNjXpx3lu65nPkJ3GJ47kX7oZmfLc4TvgdcMqkA35TqyMbKAVNqIaD7YNMORE%2BIywPsQ1wFD3W8%2BzKYjHU1yY1KFaXwc%2BvDqY8nqKUmR7hYDdHfWYwzO5ecFscJpK690LHw9QyR%2F5BqsDmn0jiJ6d68shUU4pbnLtoIww7WTiGMJ3uSwaBnDBbH5G3C5IAYF2jEQHq4U5cf63ZHMkMoMPT7zHe1YWccpJGLY5A77hRM5q6WgeBqwLCuXJV1VeNI%2FTRnL4FoygdOcIBHTR78weiYOgOHsWCeylHB4Kmdlc5b%2FQsAVDM3sueyC5THxtQROhLHbaMRqFkWW9w8ZGeUWjjhkAzRcxjcspazztQnn%2Bx4uMaCnDJ%2BTne%2BctZqivTcfl%2BPRhkYnfdA6CIDZoUS3RYXzeD9HrPtYttk7U9tZI7DgP67nloShHXSxVyZ7qjVurgbDO357ZoBlW3FPlpIYJLmCVdLo3Qy7yuF7ZNzHz%2BKgWNyqLCztfTtI%2FvT9vy1ovXGyKgFF9zCKkqjBXae4Ji1ZUjcqPI4mkrOeEiatS5KdA%2BGZ8C8vK4HSAOceXyKx4ETXYB2cDqTbTtYN8BDiKSBvRCht%2F3wZPUHAVas0FUYERTHLrTDCroXCBjqkAQ9hIMfbqFV%2Feumwws%2FByH5DRh4OtMr5JtUqwbHg5MTCFJXaZy5ix0ogjiU8jeillb3Gt8xnRFIWh%2Bw5K2hurVPinBR9%2BY1Og1Clva7ascetKQpXMyiMgdm7%2BW3VfEumS17F%2BkrCFxlnJ8FV9oyjN6IAmorhsoxjbo%2FZiIe7dKuMiP0h12rv%2ByR2FUTxCy5rPN6A7SEcQtjNJQcXHlCPuN09ix%2FB&X-Amz-Signature=5b71979274f86b8aab44b947adb2fe8893fa1014332bd730e2fc046ad3369622&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNN3XG4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDH8xY5w8rQNV717vSOJIxDx84D%2BxdroATI0R8qDExorwIgNt8NyxW6Y4nrQMf3uQhNdKLsengvH9eNwTqQGpZxWKgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMLW3lk58pmsCkvgpircA%2BHKoX7cucN71KTBX0ZKUMoGelaHN%2F7g1R6ner1QviYt0T6dZb4hf8bB4TGiC4djiLTa301HIIDQDDhI4Kl01%2FRTGr5HMY4HQY63T4TrGegcEH3DwmiwBcG3H2DAmzSkO1700%2BFl3VlVnM0JAW3yWhPaz%2BrFv8Cj3SC8fa047laPk%2FHYifUZIAkoOuJADMiE5MG%2BnmgU942VezSaUPhbs3TrjzqX47YO89gTe9PA8pR4KAuNDkFEdV2dgKnZUKuHV%2F%2Bfjxiqnd0Bj%2BgTJgvAEmGlQAYloLG16qdNVElZWsv862wd%2BR2iS9eRBhnJLJgj3X%2BmOTPlpDQ7N1KbzYrPJJ%2F8cSuOT%2BK8r71oPwCJhZlzlO2DjSXr5rfpsj8%2F6wPtdwJZG71M%2Fm82GInFfBtaWgMy%2F%2FWJNVKtglTqOS95X%2BmjpHw3mUSbOd2WNb4CbscMMFH5G2yUi%2FWiJUz%2FdDtdh%2BtG82qgKPoSelPXKQ6lfV2wwpVoiaDbfJ7SRea7%2BrjxHH%2FjV7pCdlj%2Fv725clVN5ZHbE5uZ%2BPQ%2BvGJtXoZ6%2BtrO43F0H9OdM8oHV2EXelWVqRAlwl4XAaG8ffvLO0%2Bo9Uz6BhLsKndO0k%2FLaZDDZ2ua2UOpxtlxtPy4z%2FBwMIu8hcIGOqUB8hSK4Dhj37RWQeo04Jhw9lA5NimxoBiOwzRMM8hAFkn%2F%2B8HrjqKUwkt%2F%2F0Aml7deNfqn%2B%2FylbGg%2BnHml54dwBwY2Wz4GpISrTe4s%2F7fBZqCF4lTrQICJ0fUfBNVzeFN7h9uztDriBWyCCtJWsvKHH8H5scQCHBIeguM3nsPq9HRHZvWeaCjfzTprDIfPaVIuIr%2F1LK37GYsrhPZ2IVKiDHmUSEwr&X-Amz-Signature=708799077168ccde05d115f1197ff74f8d525b9afeac1b242d6dba48944472aa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
