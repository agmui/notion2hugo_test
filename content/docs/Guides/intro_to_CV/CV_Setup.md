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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673M2MWOK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEXvsMSDcW%2ByxLjPuGqmie%2B66WSqWRim9Q2DMWo%2BmQFLAiEAoRNgnMufU260R7Cw40zAgERafpKrRt%2FCa66sRO0NuvUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEWNueLlfazCYNAfjircA7K9CIzT%2BkQMrZP8WCU1Zo83s4%2BLYaEGzFWGVkhh74wGlkVF8F13xkfuP9tHLq9QmwbUv8lOUY58wohNtvlMsZ5%2ByP4jabOuTTudl1menGDwleBRKbNxsksHzeuvzRlEw3z%2B02S6BYHYzOfO0E373mmTq10mCPRHoIQcj0nNONvW23fOtoTQs8rUEFw2w%2F9QqTJqmULALg3eQxhENO2J9FH8%2FTm4ZZ%2FaK3ruYlVpaKd7b6D5Prc9IuC5aaPzWnMgxNc3mHYIbQqrsKb5YTfDTYsGLLlxcDxujeEsMHdjxnd0L6cKTTV8QRbU9M5nc%2BTz05afpIEFhhb%2FBvlUleCnSUp8zpSLdDd%2FFlUyX2JrNtxQm32guVMuTQYefvPawn%2BrMvTiw5HgW6YC3F%2B8m812Zn0XDRyt%2Bb79K76ny3YuSy5Ub4axQPVWDXurPAFaOurOJ4ktD5tcia9DkwhQ8qLpGzOzFW2a8FrUlwC39IS3sLd7lOadwC6dXi%2F1xWql5UzOBGJABmRoLg3sVyxNXr9ljPhTT7%2F7cb5KVUQeLtm5JG5JRiaL8ZVE4cgkrUvzbBZrWK%2FnhAWbx2vu%2BEe%2FOSr3mbS4kwinsIu9ymPzLUFzKKwSCcndfS7QtJgdgA68MN3M9L0GOqUB41MFr9pKNWTm8iekcmiNg8uak5CzQlQVV4RjkDgTvj6vcNdwF2R0b1MTg4xlfA0flmILCuKtDJFBjG5Dr3xr4HinShe%2Bczs9XB14QL5%2B7LhMgGRP0LKrgjdoaf1IfRtkrgHAlqGw4d6SDw5dAp%2Fl3VfyR0Gu5x%2FfQxWzhsi3BaQGMfCujQiqTjQ2jbPeAAjW%2BQhOwbo9xWYLwIrOXM8oTzU2wCzh&X-Amz-Signature=018af632e0ede146627c9b0b81c00294037635727ffba86d0ffb25ced6a9584d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4N5SZV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCnrvoYdgxFetFeKokZgYP78IVWD2YTyfXqe199Q%2FaS9QIgSzS%2FrqfSVJxELVEJJSUPd9%2FdBST4g5GKX5AJp6MF0cwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLNLyYuX6OJuDJs3NircA4qvxaY7sLCV2PmQ0LwIqmHTYtzwVUYfPXeKbMgOwMWI8xzOqDJ3gXcolNF46087zuWrwxFqedVrIfQctsWpylt0H%2BH5k%2FdwLFDsShH7wakFqpxhlz6fzydUghJFEl%2B3zMJ6hkDcTY0RmAfrHEPPDpxd8G6HWoWNh56uKBBcvgQskW7QTz50VXrzYVmqQ2U%2B6ZhCkXaCXT9jn2N91wi4J6lOHBYZj8DbCSMTtbYl5sFFqknGMi3BhmS5ulpUn88DqwW1%2F1mcZkJzpd5P7rNbGUrMkmSLbdjqK2D2f%2FGdjSgrnLsjPKA9OQVqwyYcuYPUfwwk5ejj1DbQSqUw5uiCw2TJ4%2BNkDTUELZpIz3R9Dox9IvsDD0zeUoAksCw23nnVxmg3g8IJGR2zeLDca2%2BnaagyMWvRBt3REl9FM6ZpBNypuhbzqrS9TMjUKn8LEnI2mteMR8yPCwRkYElaUC4P45Z6ZtqC%2B%2B5%2Bo1mUYda69ml9UU%2BJmmgT%2BH6cI8XQk9AScpLWsfv2pVX5FvuxNPLnlc%2BxFxtP5W8g9sKfvA0QmcmeYgC0M9fG%2FFY0RHdaTz21BLPFPJ8Y3RrQmoJ%2B7sK5neAZFP36YVjkt0FXZSu38jQqnmfkr8EHil7ngU%2BeMOqC9L0GOqUB8oOeZ%2FOCKsRX4aGqagMbteTy0T8Aq5cufaO%2BBNRJCsEiQh53Y3cZ10IDQN9bLvWv2zt9S1swjUDGJg6iiebEweJciGFQ01AcvnU2Y7%2Brm31Voj00udLKjZ9oEpisflehKelH1Lba0dn0d6FhdiTO6XgHr%2F6IPp3TrLORbRlyGyPerS4DWRgg%2BBfxXgrsfdr5bddxfTlwqD70vRYKArPBRAbvNDMi&X-Amz-Signature=43cd08f55d279df5665a3ff18a43bb4eeff633c688596628176b7c367e34e219&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
