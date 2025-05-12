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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLXNNE23%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD3%2FOqly%2FQczPKUZrYorijpt5UQNJ231gTDnbRPHfaWxQIhALH8X8%2B9VeOpprms5TLTBe3bkQ56643qUpgEprOmofyoKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJARXPLOisIPwRIvYq3APJLkza14FufI7KDB%2BH%2Fv1lgacrJB0AIPo32gk5C5FccyYOXp7GsBg8zi%2B8ms07vU3RCuceX4rDk%2BYxxr%2FJD4OaJ%2BrYAFMMK1r%2B8iRPAHbtK6tnjS3E4l3vfiOQ%2F8DdV6vq55Dm4iQQ7iFxskiXADoCkhvHvsxlvb%2FonHbQdw6IsQmxRP%2BncVRyh463LfulRwWGVXbx6cRXXzkEvZw3a3TJCloJY7kSJyy2k7PYXimHJdjQSWP%2BYgr09jvpkYyhl7oyOyC7kOnlLk%2B210RQkouBCmUQuzk39oVTU%2Bv0cMe5196CWs5nIsLHyoNSPpVYbT%2BJMCOmInzDG%2B9lAYNcLYWe91ywODMk80dhLtaoMgCQYLXl3iFGT%2BfFjA5odnKkQ9kbpCnoteo5JYfgH9Wd5mbTW8Siaqu6o4LY6%2FwknoEe%2F4xxBlClKTzCt579ErejQEaQonF06xvMEQXudJnn3Qzt6mbEcmIS%2BT5DrM4JKWyr9iT9H8EpUK1sZawX%2BEMrYOK9VqZIoDGUWPMVFeVATMumZx2HXbWrGtA6yQHe1Ac%2Bd%2FwLb6GAGoHKO2jMJpDWxi8ozTeUZ6XT4%2FSOEsvd3sy5xiUXrgqnDYq6lW%2BWep2K%2B8k8IsYbZ%2B773mrdAjClqYnBBjqkAY79MwHw4DQA8zJ%2Fc%2FSmktweU8moMPoNnV31dnIyGQPzm1cBMWo51IOFlwdVl76384qoSDc1V8zgeaHNw0i%2FcHnU6Sbh9ymYMrR4u2VkIn8uL6WOB6yOecKY%2B4RWHei5IilXpw9OhU57%2FJOK%2FzQei0dVb99iazPebHAiYM3DD3OHwpzOs2nEOOrZQuhuQARvyL4uZ6oufsJDYJFTsbFHlmibuz%2FO&X-Amz-Signature=8f94215f828db078d9a9a01d418044b97a3f3c65e59849f7fbb1874c046d8fac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCQHWKEL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFEzR2qv%2FX%2BLig9fzVKjdCzBu2K2OBl%2FrU%2Bxy5cjeENJAiEAt67zpzuaM8l%2BfzM3HrxF2ijJfa%2F9o4tjLjBjm0RcHhMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIbZ3pSPw2QcISiJircA0cqyWNzQKqMwTbljOvqfVwNp5EF1YoVAweMq9uHBsyuXyt1NC8dNivPkBTZ0FE97MqtJfd9MlrxU3LKw%2Blp1e4Sej0O23nbT84BfvCEA1oaL55bNdW%2B67B35jkiIDfhg38UURLH4GyCD3zF9OQjLsyunkTbYAEjOnP5xUBbHzeOKHE5qww0rD2YOYxqE%2BdJyqn1uIOz6HHXcC9smBaERADnzDfKTSEUM7lts8eFI%2BAoux2OssXimHJzbBfTr54KngS2K%2F%2FI4ZbejJNaFOVqU30JW3C%2BHL3%2FksYumSc91TKaNWw5Cmd1Np6v%2FLcTc5us9ZE1vBriFGiZxML%2FV%2FgtGGgKv90tt0Gd6OnNqzPV%2FPuSLqpcM2zZrAzuvxuFxCd1WkpjqFOLvEiKceSZHTlzMONeysYepyX359nso7HSGpGisFKKlRfo%2B9ap64aw5OQYTyultozdNT2C%2Be6t0S43CGXI4%2FZqbHy6zFhXIV1UnNIBkr317kJlpon56%2BbzKxEk9nDEABl515WHWvswQ%2FqnpfzIsgprzvf5ip2sHyt%2BRqvSNw83UUaMg0%2BXEqE3AXn6GDf6bQOmT%2FLW2OebFwjAef%2FB%2BCE8T3aS2OPH6DwDeXDgnOl2ZsPsaK%2BCs9C2MI2qicEGOqUBl96AO2fAQBfV42fYANvr7wUGlDvoxOOOgUq6Vg2UP8Yq1Shqpmsp1SEmn%2FGJZiKrHunGOaxxnquPXJhUNij2FruEZrCcqIYXWx2xMaKVD%2F%2BbzYrTtm6DFsYz2X1cVL9klIWVEwLeJHJ8TvU9pIq5eJEgyA3bkwq34IHReHU%2Bms3MhOYSmJqtiasSJpMyKmM8FdfA9FpbrbJt%2Bn2LK4dD6t4qGUGU&X-Amz-Signature=cd4b1e04fde4ece774950cb0b7b745877233a20f7300d03487071e1a7fd07961&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
