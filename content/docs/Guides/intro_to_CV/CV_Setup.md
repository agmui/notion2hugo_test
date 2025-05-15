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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5CYX66%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDE%2Btx7%2BfLzLQfxCXX%2FdwcKKdrIe6%2BPURYXlJI3uSkfDwIgBWeeE1jJxlLViHm1TYOLvXVlOxJwkhTIqzvji0UDTvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAzhpK7HrBaN05RzBCrcA5YpwXkfBZB2qd8FPqKqpepHKLUdxIHp%2BsJadqmQt%2BzMZ83XF8J3libzP1n0zVdh5Kgve48BmgGkMVIVfzeIdfS4eonad91NGxXOpwZUxPCAg41HsaWPIKC126JuJLKMEZMps42deszD78WyXfW%2FPcbhcimn3907NG%2BgNnwBY8G9aQ84hb48Zhw%2BsJtoDY%2BArM848uKZULCepSr4R1udWZOoF3tSXi2o4GtByFl7i2StiqjXcU83IcAfOQ1YwTXNTCTbuzwrRE%2FIQyrb%2FWzkor9CBrGezTri6pt2DmSA1Aq%2BtD9Cc9%2FwBmdtMnxyeNCrzpQcKnerie3PETkR07KZGcioYPfVfLT%2FYIbPhQ2t3vwNGcjSxphbJ21%2FURYJ7bnfG4X5Z3VnaGmAiG2yLvWnfk7pGBTFwu2OBltrrVTqZuqmaENo9ZN%2FFrNUf8vpW5r0b7MJps9i6AVTuorScNSiA3SuTS%2BdJWo%2BqvoYPu1DQUZ71hECtK2Rp0F68wiI5vrlTvvaH3iif%2BhETk7%2BlF%2FIqLtOYLYbLmXsxRzJ5Z44eZvwy4CM8BnPie5%2Bx3bUdl9DOuUs7CW9MzboFul6kjruUU8imy%2F%2FvnoujxT%2FnqHfCEWpkmbjW%2Buk11SzpaLAMPWQmMEGOqUB3BrEhu41vXDLve2KjefgLW8ikDe70fuI5J7AzCjMmk8MhlklUSoBBVrnvejuhoHgLtUr4jsEJfq%2BBWkhFkQb5p3dd9c0jdTpitWy6kNJB9MXt7M%2BDfBE4rRa8CP%2FlsvLgBidx5F9B5TSTI%2BoEl0SCMmZ2E5Mxx9%2BPYy9fLv1YG%2FOOsUHI%2Bf1mzYkoA3Ejgsa2qIZyDjSqa3RS6zU0TtA5dx7blyc&X-Amz-Signature=09087dcf830ae1910f5a2fb7183dfdadbd4688c31291875400c3d9f326139ff4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XG2CL2B%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCzDFi219qVl0LeRxxP6W06G69L7I8rm2ett%2FLD6%2BvEbQIhAKUwX6vTwi8q0j%2B2n2v1ZTFzYEhKDE57MoT%2Fa0VILhF0Kv8DCDEQABoMNjM3NDIzMTgzODA1IgwexPBJ3ArPn6smiE4q3APQjyXQILDvuQSccPh9uDcj9dk4xPO0D%2B6CZeBcWFxram%2FGlj2VljccWlL4iwN5nWsScA12%2BeuCDb06j7vp1MulDlVKqEx2eykzt%2F2I8Zhl%2B2qTELtHoQ7Ko4vG0qotWuGO0YYnNjpy0CX%2FyMDXAB%2B1XxifaqcQQ0SJRx3Ljf0orNB4mJeRr6jjzU2HmKHgVcLxQsqlXgRggj5f0C%2BQ4SMY%2B%2F4Pjx9C0L%2BrSdD8dFBXDVxVvBGhyCmcR5%2BcfZrrb01YuaXgGRGzBbZFWbTdr3UBF8X1HmKng9M9RA%2F0MNGIsTxBQzXvK9%2B8Ex8Yj2zufm%2FJsYuMvWWmnuLKnTeZqPsxLAdr%2FO91k%2Fhf4Aaqd%2BCmhxyBgX5clZIzH68rQIkJk9T6UoV5S7hL21elovjLIhcBQbYNoxC4gUi5dKgetNM6ZdWNZlh4KsHy62%2BKLS%2FH74vzVt0NNNIILNbCw7EzUuEymUY7dh4sbiDgoLt6N6m40JILzGCDWxGqWAOj%2Fnc8nbc243pGSAxvVK6HVuVFSNMGpCyw66KWjJfV7u6yuf3hLYBWcLdPAIiR3hbK351Av07h86JBfcz5Yta6WohLAUdZV3CYiuTm5WCpTyszIXGvTlFq7vWFRL8YtdcknzCAkpjBBjqkAeu1dJKt8gSQ6FWMNVC8R4f7wzxHoZWijmOaNZ5JZ1lifrkKlIJHpyLAycwXtWPet7b4%2BvI%2BMRNJCKpud%2B1gp1NCaCOvje2nS2uD0A8wUo0n6QquAVWQil64WWF%2Fd%2BbToGDeM85g9hayvVpBYa%2Ft%2FVEzJfKzVzaReWFW47fidG7QvOqjZU36%2F%2BP4kzpUV7p%2F2uYUnS0wvdFR5lGwpCYo3%2BmEVUyr&X-Amz-Signature=e760cb2fd80c3a64a244dc25d36a82b7bce689632d4d0ae4ebbdbf67bd442af9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
