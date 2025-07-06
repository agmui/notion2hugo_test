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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRCBMG5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEqFi6QGPlXk8lzTzYZ5p4DmbQlMEJ%2BGO5FoK49iQ8p5AiEA6qBwQ94bY%2BAoqa1f0gkyMCV0rrRgrX6X3XT3HZ5%2B%2Bngq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCuaICrGOFxQplhsuCrcA4TpH6hEzI4ltm0cJGvLhqt2bZoqn9JwXyeQ%2FvtTuFRECRtuZAcWEcAtHoN7xF6aQP4mlRN3p5Txbm5mw8EUYmzHEsthDIzP3BvhjoPAOmFFN2ZiWJKbrs%2FYjOmRPYE4qkwESapA3BW2IyinRLgWvr%2FPE17GFR80wFtB%2FiyLPcqNaZGIDARQ9ucUpucaIesDwp%2Bou1KnWsqyIquq9%2BJSkZi9DBbtclDSyh5IVdl3644%2Big0jtTGkeEcnAlufD8b1RRns6X4gNF6gJ84C%2FKmlJ0L96JWojFLihYy50iJQlZcAZS0oollAE%2FS28UsJ0tWG%2ByyiYDdjVJQzeizIXmqk3Vdicgfusl97nNHUjS7TapS8K%2FwR7ThfV0VdGr4S1sukH5emFNuq9IpN3Euqiq8dWwAyDyTLexQ6mzeUug3ZXiOqkPxfj5sjWz9HlsRa8qU8KPsedS2hBI9c5abEPGoii3ZrGlEX7pkO4AvwvdagXL9rm1ZIdUaXfJXjq19QrMx%2BW6WtNsnrJGXNUU%2BFN7aacIERyGXY9DLgq7xXmpDHGqftm3wjKmZLJ0Ho1sgs1Czro9LyZ8JWR7tqNkqq%2BUQlakHu%2FyHThRjjgWaH28o6pPC%2BHadQQfuoIYZgijZsMNTbqcMGOqUBQ6VXcbgFLjuuaWKI6NbeAYS0CqcD9AkBRbQRzxVlZBTig277Da%2FPKtvcLy4BZWuxRCDVUIhAPVN05w3ozNaMjWDX4RnV48BzCIPsrEXm5f0fdsCKm9pPI2%2Fs%2B6A4xg7Pm3sjUTkPr4nV9%2F0zf%2BlN0KZcJyqVX32%2BZoW8w46lxK6ZTqugZSn7lcrQ%2BhLxUIO7Ii3vZb6h3WTYLGyZ2IubzfSTpMQ7&X-Amz-Signature=06a3cc59756a6c66f7a09feb16904819ac18cd7b08f7e0d7e588af3f6292791e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637RUWTUM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDZ7YqKVPj3i93HSU7TipJrGBT64Kasx80dlmMGn7BGQQIhAIZJAGO9KAJTBuRvsWU1PaSxFwAh%2F2HdYUZclKc9TTntKv8DCF0QABoMNjM3NDIzMTgzODA1IgyBuaxY4KlGuAVuVucq3AP7ASHF6O9iaaMek6lZg%2B1n%2BVKoFIpwzNjhVZZ164NuujKod2QWZtjkg9FXBDoNwO16FUB15061lrcsBEvZw3rPWCpAvgTmNW%2FaxZNIkkoIkzVTsATZTA8NJIlSiJEmz5IqoTONR%2FwIjtpCpVfPGxOHOSq%2FJHRr0vU%2BYE0U57QD8Waab5eiW4fWjphi8Wrawb5WE9F584z8B71lJ07HpYqcIvA39UjJS%2F3xK1b0pG%2FOJe0d%2Fn95kbKf2Xmdasx%2FbN9JEXKsDEwhZNPAVzTPFpGFNpt%2BIubzz5UfH3JjiyYy19oJfwLXk2XUTRafn%2BiwrF8NFGZbeWhX0wpPJIxXNlDLLrX4fJlezBK1DtQUNMg0pXfyv%2BOPV%2FpEEx3bEX43dsoQ2gUgXPdUyuXCrTrC4K24JX02QTrUIIf3P9utrXJUDcmDI%2FLOp31QG1ge%2FFp8Fu26R7qsBCyZyYSpbiE%2FmFq4xbPx1NMsZPmtHy5eShyVHztLaag3KE%2BMwdyu5l0PQ1Uxah98QiMeweIV942%2F%2F0%2FSJa78%2FP5qfMHysVGrll9Yl11yzNDW1hO%2F6fFahzsbThbecAzu%2Fz5ZTTONaEtnZeMMskGd88gxSz3QBnX6zGRHR8IjNJZVZ7PvHH%2FTwDDpyqnDBjqkAfP6qo%2BarhY8A0h1F6IWl%2BZcZGFGV2txBbooWUrzJjOR0cK0I7EXgM%2FgxWW3Db5BBBLS%2F8271gwS0Uo4sIYAe4vdnrGQy%2Bm6J2XKBz93eTgHk2NviQdgh4t8DCHpn5TVo4Nenar4dwv2o8mkaS7cPys9HNW9Lw0r6qiEXPaX4wQjcdpVHBM7n3h19IOkRAr8pHtGB%2FJEhv0LdRb3w%2FgJPr4KBstP&X-Amz-Signature=f73ad1d08ffbde5590e76cfc9c4de059f95920e204a6f97579c230919c0fc2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
