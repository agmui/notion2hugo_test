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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYMJJ4L%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCGy5viABhujitSYruPZKiSsFl9ya%2FiJHq0gb7PQ4G99gIgcOZ%2BW%2FZ4xDDGsCDZ33BOE4AsrTls%2BdOCREqOC0MQGBkq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNNWgYKBtTygsSxBdyrcA1YKslADpbNqU8m8%2FJK7fITtyMACbcIO4N8R4S377J%2BKTcylhVuETpz1k43155m%2B7jIfwbCQeeZOpRa1LuNXJ2WFXEMp%2BLmvqj5ykUn3ZpogMhwtcCyqzQLbxbBBAq0gtcAcvpOIzgveA73TFnh3CNKTO%2BHOGMnzmR8B09fyyBoy4SBSHaNAhHuZeapGaHXRe%2B4oiw0I3u2R1ZFjI5mY4LumJypofudEkhKuT4VqQNgIDMaU6uNSVrjpCbf2G5j4hvgXYiJLlkkLvxLfExfB4EHrksiCOluZ6MaHilX%2B9dbh3rJfbn21bwdvImLWH%2B%2BHXwRWLZLMuproN6VE2kCrAfMQvL%2FCdK5oFih9K5a2%2Bg4I6%2FhByQVo19fgOpEgEEIc8ow84zeTg2ZKD4gQBE3cg5GSKReXAzdM85w3kSE%2BHtndvfkoftLaVYfs%2F7mmyrVUKLEU8ejLkT87ZSbFm8ykIKz42ENgZ153UYHtUSA45MvzQwI3UzN67N1nCYSohOkL3wtWsY2e5JW%2Bpv2u5BE%2BLk1u%2ByqNsJJghFqWAddUoPBzVC4NeJOw8V3lqi89f%2FVjWYdg1k9rWG9YdKs1Z36p1AyNPCtJF4bVXU0%2BL0dkTCyCRjsKeUCu2B%2F48ZqRMIS5msMGOqUBphua%2BuePRmHOLt%2FMHmQBLwOqQhL4dFHK188%2FSAzyB7UA1TwWQ0xR0HAv3kVfyBBJ6j8NY23jV0drKhieDhJTJIF2Y6bcaqxuwbrKSU93GO9OySYAMoUoYfnJeeI0RXdO16LmfBZF9nXBFRPWQFKFpoN8MAI5Lfi54xCuoFLhEboZRmPMhtOj86ddKs%2FjKgLNuB69585sJogmGxM6hneG8vCKenhm&X-Amz-Signature=4dddf4a02cd3935940637248256e2548f36502ff5bd7df305191c16ad109c6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC3ON7LX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCp%2FvpjFbyVchJa7u%2F%2F1nKmMe85vtqcAfcZ3MgtLPjPjgIhALuyxrTy%2B5ZgF2hnhyuH0NLzOliUV5ecdq5GVED8omJCKv8DCBgQABoMNjM3NDIzMTgzODA1IgzHarlpZyB7vcDxd18q3AMJrhssAVvD0d8a0YLSWUN9qRYykWctIkNPesjPHlSNULu%2BDkw1BZ4W2OAa666ZCCnD6TYZb%2BeMpscI7p7iSOxwqHo3P9nW%2FiqFCG16f1EJi%2FxMbz8wvZNRyuM2EbpBXh02%2FNywZcrWKSGqRZwSHXUX1NPxLzgznbx%2FzYElFdkUTc%2B0Jq9CB44HaZVl7MCeWyqrJxx8LOa%2F9umUAZgx7M2Ly3Eyf0RfF%2BZrb3mSdFGTj%2F%2BZigxzQHZiHHP0C8%2BvT4GKEie5B5UcMG1P%2FOiHOT1XjyqV9Bm6S6c1sfK%2F3snUwyHjzuwIEr8MGo2emm%2FmuroNoU%2BXu%2BhoE1WXJwdwKNfDMvd7Wp5YtMjGAHUVbYm0MUFxEaWOd%2BwHchS0BsGrHMHHV3rxsLtcU%2BR1fZMzD1hRJFcMfoYTTDGOKrpTHg8g0BN2Yqc8QZLljGmrarQZd2heMn8QYgFewA1Yqpf88t1KDyVsZWpMOADkPKurKgWm8ZzeaVvEQIXNZZmVZ%2BbdsAOyGyWJOr79k%2BXkCPF%2FUiOdWTbIAq0y9CDfaeh59yFbn%2BfUOztvpaWbzmdE5Q%2BeU1vkM6ETPdTXm0qqM3xcv4fcPJTO19VMntpHP5rr4cGj1JUuCz0XjJi%2FE5dxUDDtuJrDBjqkAQpLjvRccNG1SZIKAD4FtZ7AQXuoi%2FxWh8rKkTYazR1EZZ6GmEjqA3g%2F5WHSHJpqKrAYub%2FywhiKLdIM2Pc0XywaAOlphFKwMXKm7ml%2B1oaH5ek2z6hlMaMQWoyTArCm6KaZVifWHV3RpORpxlggxtBW36paph%2F3255o6hH%2F8HuXKSgYEGcBleo2Ome%2BTB%2F4F%2FHKs6s40h5YX7zP%2FnY7RO38s%2B5f&X-Amz-Signature=12a53ccb48576fca97005a3f64dc3687d599284f606257e23ca22acc5c07595c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
