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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKE5X3YB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzhIvHMqpVkLMNmfOMchUsjTwC8OgYVoUC1uikiCF8SAiB3r4AIWancYbE1RUIO9TtTNSWjglzNAREu%2F9jC27OhgCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJt2xReil8Hr2aJOkKtwD1RUuYrQ8QWGFfSm7%2FqbcZKMkkojCwSzBMXC8or4huKvdoDMc%2FUjehiRTTLvJXVvvX7EdJXQbsLt%2F3vkx%2Bqq5SmB3tOzWJXnelsZDuUi5DPkXtVFb4jEcZkTFYVQo6W9Wf8eHCyDtKI0vnooF4HPZDaCtxTXzrP%2ByswEJct%2F7CXEtODK2iVyYddQHdFZf8bT0sG1Rfl8sS%2F9Wi5gULNnCzhrvmajMngOsCGxPFyMnJWbPZd4wvHysJ2vNpM16qQrQeM7lko1PHTYsIjnH4xwN2uIcJbMi1yIceygJCy3%2BzQEvrSkUEBMYjy2MdUyI0lu%2BNnB5ugCSWb6ZJv8sJNNe%2FioeV8pvZo0PuQNVGk5IybgcKoC8%2BnBxRYNCKXepkz%2FFYuZL232crryaU52cB2pJlejIL2Sh%2FVVN0o4tD1KbyMKyPgPxuFbkxhytHhZPpc6Z9FxwiEy22AXLhCcjYJ%2BNTnWNAApdcIbjvaoJDel84tR%2BhMJ6IEt4OnoAQ0m94udRyI2cQp5rYBLfysO9Q8W08Porzc4%2B3dTLmoQdy7pWnOz7scnH0ZE1vkbipHtCOPiE8KBd9L16WBiS2yCYJ3LFeIGxMmS%2FL0YxKYHMP4ognhUnE7ePXxSK0EzH41Yw2ZbPwwY6pgHAdRYAsDKJOSEy9cnVYnSOgtxJQ9HsgMqGmPLlnxrrMuTUkD1Dl8LIJK8pdhgDOYchlC%2B9wZ4yQ%2FS36J1nUvPwBxYMEN82kqPKb6K9rBIt%2FJXJXxHLcgJiKcxIaAOp1cmMlAGI%2FY5FAqqauAWfmjapsHEIhVd7FIjvh9RMOHTPML4h8LWvjsB5WKxZaSfWb0aKFNNaptSmKUx%2BYpLkLSDu5re6MMFz&X-Amz-Signature=4aa265935673b7d12200dbade676cc564b95e71bc75a08866b8db33f22702f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STP4QCKL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BdeMNp2Qlo%2B728E7JSYLHhwUz2sITZ5rJnEtc7UFmwAiEAsCrIfGpCzgwR36CwIvrWfNQLq4l52X26xapdFNPoM6oq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLIweekDtSp%2BPG5x5SrcA7BPQGcB%2BBYQjoTPutkeVKLzgnM8iPyPwMUljR%2Fd9A1zDluLKXYPi5ulHEXMWQ%2Bkdtf%2BGu3QYfm5e0AxX1y1nOJhEsZ2tJKVe%2Fp%2F4pBtlwihKyOul7G4vNfMrL8NdI4lXk98fikHRaxvQ436PWFJIJrWb%2BVa9b3Id4xOIqLbYKQyyvLYtKHnR0Sfb5lF%2FGHQVd06UfFmg3PH4CNNye6PTrNUvU3okNnjKj6sKpQneG3qHsrnm1yTHp77TmFwIxOzSnhIZ7FVmFVBULk5v4oY9et7Ewr6OBT%2FQvYsMt6%2FeUMClQ3heUAcnFFYw0zP4ljXB7mmjdp1gtfrmGz1DzqMp52vTQrLcLilyT26wJDLCmkCToQiB7RATeNtQRd43efg4f6aeLKB7o4KzUUWme8zjCHDZmsnkVeM2%2BR6BK%2BWCQfnAmMMJ%2BjUrnvHfLD1P7d4UDqIQz4RPE66oIYmEaW64RkgK%2BFkthWk3abG4HEFoYz5OUFM8ceIoH81vsB%2BNU7ayZjc1zoBS1Ug2QoPTWUaqft12K5QfCr1RycYkU7T9urB8ML6mWW7J37bB2WZcZlENT0bq0BwXa6BJ4VkmvTGO5co1La%2FJpCh0gC4RwEmYnSMmViyKEY96zojZZZPMJWWz8MGOqUB7W92jQqd4AWEa%2FgaT4UNgnrVN0uCoGtO%2FwJtohVvrQpEWqFBx%2BL%2BF7Qf6fcGHmK2AWgbOIk%2FiryJiJrK6%2BP9%2B3u75OncB%2BHVeVwuX1t3WheyT6Tdp%2Bb%2FHSp%2FHbL%2BuZy1CAxXsSwqObHPeqoAlWtrUXmeCVuQkmqygYMhJTdQb2EFjwFAOGp9Uf4HJK3%2FpElHsJlyXMnFXQ0%2FYmNHZJbcP6UYAfAn&X-Amz-Signature=1acf87c46079abfef445466c27a90e2e992f778e51179d4711eb2b560ee149f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
