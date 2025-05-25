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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR6WJ5D6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDgto%2FsJrYCDn8JIiDIcl4%2FzUznpkmxw%2F2v%2FYDHmwmxiQIgHK%2B8dTdkl6%2Ft1rpps5%2FtJtMAQGpsKubeCreh0IPFyScq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKTbC%2Fy23eNY9g%2F%2BMSrcA5FgtZkxU2F0FF7Z9u6afCIrXs%2F0N9HQhtxaP774pmvpYlL%2B4CDDvbb5%2B9vTwiuKX3sMbb6724l5g10i9p7PiBWQ1edwZIIbvx4XdcPpCdDTjKY%2F2xG0szNKxmPPovE5GulCP27H2aHJ2Yl4bNTrCJHmC3PgLVPdCEpfhyYxYm1odx%2B%2F4tdHmSl%2B8HiTM%2F5kHs8KQnHBubAnKxzQL1RR6t76R%2BHnz6j295Z8lefPYaxERVtx4RwGzHG3hnG3VHTEssaN5qE%2FzQIyTO2MNfqSDNGwkhtwPNi6JmfZnNNLvoGwHQ%2FP8htCqNoq7S%2F2yxBdUDZmxDdTPr%2Fvgzf1%2Fj9XXPcf3WcHh0rSIW1sJQb7gbVyOH5jjsA4ZNIrTM7nGy4G7ZdxXaXyJuOplhL4%2Ft%2BP9M5g3IqwW2Gz1uK8XaqfrtfWEoTikUDmldFP%2B8%2F0ucmA7eqtTUtf8y3CqjjUtk4JB1V06E%2BXg%2FTxjW32kSvmzSd0Uggxut7TCEeWq2HNCwGhbaBEqmGg3H8e7mwiYfGA165B7Mu%2F5QFol0bYI1McK01fgBByeaWs2t03%2B3CibybNAVRga97ovnN9S9Df9X3xpew%2FcfBlPGt2gumzOVdQSZmeyo0sO%2BOmzG0C3tM4MLbay8EGOqUBB5ukNUYqbXtiB6ltdN6SJF2ST8ldzIZdBrhobADLTymFg2%2F00afMLkcLngoDHSTAo041Lj01pjobB62JCRMU3pre8UKyDCzf%2BexLYxXugaiFuUBVK05%2B6WFds7AoSIAJkhbqEVUh3BR7IVVt5v6JFJdZeBZpu7UYOSwn4xtaDzkd%2BOFK68LKpe2LclngQu%2F0nej3zQrsU9Tqhi9ac7TSKC6CpQB%2B&X-Amz-Signature=ad7f8491dbdc059e760ca5883c02d46bf327818975e2278589722470d6c89271&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V2SNO6Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH%2FAVFtVsv8%2BTl0rDr1DqpEDKNmivDXPzIYiX%2FbOE%2FnNAiA7FCioUzM9tgVu6DQ07dA2lMApD0BsX2kuHcW7g0P5MSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMU%2F7Y1PK5aFkVtG1xKtwDxk2iqgR%2BGe2UtvUY6AF56irYbnnG1IyF6yl1Atm5vrwmWX6jk1PQAd3iDHTp8keL3OHSPmiVj0J3Fghbuu%2FyRdR2fYlkZUWa7X6cDzxdVCKeXOjOU36AGoKUVd69IZJHMMxbMTNNb74BZGPXRjLWONkJBjid6F05C1vqwph3UY6hwXPv2beK%2B9W2eTSvq%2FfqOyKc0%2BcZYM%2FRXLmq0f9eb9bQ75HsCvc26uzr9f7JQWv8Ca0QmBMh5IUMDUrqxgkj8cVNyPtbnOHla8L2xCqutHSkHpYY0It40B75hlG6c%2FvjffczNTUD%2F9tnnSf7%2BWSp6p1IwL6ufkaW7J%2FkL7kYk8S8sWaGmZjTnjmh18qehs8HCRERksMKKTadecVf1EiTVbUi1ncgW%2FWFWracNpi4oeXmRBpoN%2BJJxUA3u%2BVY5V5aaSCG8pQVmW21k1KRY64R8AoaN%2BYycST5%2FDQJVYWyHFGV4Yu9kj%2BMkv%2BVNn0tpZHOb5AAnMSNwuyfUvwfIcRtzuqO8ETiBlXFGZZmEuPvehx%2BHsWNY%2BLPXs1bKe6q6iBUkomDv%2FSlgvtXqzQNbuhNtPZxxwSqoqx2HS%2BIj2oDQGSAOsYThTKjcj4ZgkpwEV8jZRmrq0elZMq8RtswqMLMwQY6pgFYTt9KuNNcRGNyeRdw7Y3qqASziElYlJa%2Bt%2FeffdfU7Q7UGoks3upgSXFfQ3I%2F0OjzVhk3BtO4mPPqpbD7TpcN41RbbhDHguDZ5BJrfPAPku4qA2wGegeOtsLlKadFdOJ%2Fq76KarrJnIYBIDzGAioU7y%2FjscOzMe15wjUbClkWoBDRQPrtqI9i7XMTUUogSibeiwAMvTRGNe815Uf194DbNmPGcHnn&X-Amz-Signature=704d96496edd5d1dd666d67727bc8f91228c4d5b2933a3f4ea5558842846cb09&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
