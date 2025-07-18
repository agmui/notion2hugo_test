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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDM6MGR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDS2qY3%2FFQvvx%2Fkw2jIBFpt5uHlhsFPv5eRB7Rq62YDlAiEAxVTVKGOvH9723Aii6bmiSAnhYfq5EqHrMGnfmRp%2FwjgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcwPkUM5PmBWROPqSrcA95pD%2FJGlm7SAat2zKS%2BEIjV70hpU%2Bkb1qQ2u6LkCEdRIj60%2B%2BlDZYCDdjwZ87nsz%2FuA%2BDmQfx%2BMcE4DFkw5CgCHaoXnfktidK%2FopI1sNlOCDPoRwCyIKEuJUgc8MFMGg20Jkszu%2B8QEfcPaYuQw0ovvkJOoFoV7SYNkKxlWVJse7R6siB%2F7wK4kd2gUFxKDXYh0pi8gYq5NRsy%2BesuqVD4he%2B5rDtU7QTqeMHZTmu4Co2fs7DHsg4U1RnaKOFeuEOo17DzH2Pa%2FBW0n9uro1EyXaGM5%2FIsHsszUoA1SEimngia63hzkF5%2B%2By2rvHOTKU44DbNy6hOBNOSAtuclcO%2B%2FHr93mZ2h0O2KlDTl7Ig1QSJL5MyHcQTYWY3dCF0ehiKbUE5TBQnRa7sbfYeMHJUIo4QStBaer9IC6X3rhaxcWXm%2B8pkPq%2BpP3npKqLPl1JZbkS2JQaqwa8LCwOMMwO0N2bAEEhahGp1jsQcLOENKe39LvjP8zGqdKJb5Q6bksfpJPyMldGUSRsXqKJA499mMZseI6Z5GdVNzWoaFUhcdALhXrFFG6APV%2FTeLyocuwFztrGcWZ9eCFd246H9hIwuLYafRoSnMPbbV0buXM7WVbjKRqAqpK2V54N1rLMKbQ6MMGOqUBF8bS2KWtt4HMbwZxScMAQHwDZ2N4P7DAnWR8qbZmZvWWc6W0n1DP2oFc2EP20MYcJcS%2FbU81lnMW2DTuWRx5Uvg29g%2BahGgqE5zA99QWs%2BjGIGs383oC9Nanr2BcLOQf91SNDQ94cBQG37QLDM5gM0VygV1YA1I3PK%2BU6oajmAMDVNskRFLAkvHftiFgalQmS3pRwaxinX5YtfEsWAnUQ8sOyua8&X-Amz-Signature=33e355b6484b0fb9c367de8471c495d831243a6c38ee23023edaf436298f50f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675IFPQX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCo7x1hNEGdf5IRBviOqEfntiG4lOobz63%2BuPB%2F2Z%2FfSgIhANDnDujXRkqjQonHB6PZO6can041LdTO%2FFh%2Be4kkWlRqKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqWp2Y2JG7bw3%2FQR4q3AP%2FYGHcmmbU50zH%2BODDdezM1lxjoRf%2BCTY%2BO2qSlkN8Fbq5j0UHH6ehN%2B149JTUq%2BopNomGq57fn78OH%2F82aWF8KWsRLwhB0HOXIDYBcMrUkNZ0xFOIlTqA3%2FB%2BkNVjYfIms7Qwy%2B%2FH3Ay0tMBXw5cmliRsfY48jU4d3pXaLnVTOwq%2FCYtL93Jrf62ktsg2oeFlaWVimCkYp0r4EaqSDn%2BLYfVOt4%2Feao2ESwbqqGPwojm5r2rd86vVB8wabZmHNuwkYFCbl1wwB7F0NMu6I6OQmABrvW573eyzOYEO5TufSlkJb81%2BFJ%2F38saUcC3LftM2tK3phomKDWrzz6M1D%2FGyFwlmmHXeiSjkNJXslzydkw5Qjhp6pFi%2FscVuepK7vDl413a9gJO6QPINybnkhf1n7XlS99hwHWBP9tP%2FfXLlK5wMm8ysegGRNU%2BPtephwyZT%2BsMEGWzxVFRXhUFqRBce6xv77Nyj5L1dyfJROnTwkPy6PzkuIDzyh85xhZCmhfRVTeHO4M5%2FlbkriziZZ3uL7vTxGDSczGDAu9JUq9az6BSg8VFlgVEFxc6HmCVBKYZx1YSw7Fow3xL4No6%2BMoQrtyRzzU0KzShqlkTKgLssiSEZsZzU5OnN8iAi2jD1z%2BjDBjqkAVjO2qcXrrG%2BGAaBRIkepRxZsvnCi9LsEfBMXhcn0TaeGhykiOY2yGKTpWbfW69k6iaNqajdPIfMEUJ1LpU2ZWrFOYnbiYgw%2B9IU9nBCU4gd4SFtRbFY0QYr9ekQi6nN5rSb%2FAjvjKKCpVehk5U3JVcC%2FJVUEBXrUsSb51l%2F80FkuQQ6WzivzQ0mJxHq1DWFZWfZY7SawzeCjiSJR0DuGyUUxgVF&X-Amz-Signature=0688a5e02c648115b202c861dd39370015182ff9b2161bd225b6c9481881a683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
