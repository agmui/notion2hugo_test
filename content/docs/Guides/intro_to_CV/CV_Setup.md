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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISGFOYV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJCACyfiPl4K62XG9KVvYzi%2Fd%2ByWanz0zjBUfVSnq2ugIhAJTRT4LygrqBdfk%2FoDIayi1NdAUOi%2BngIfq8JOCtd0TQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyVVcicoTbYJH1WSqUq3AOE%2BMloty2q5WeoDyHGSaDrSjEatTF2eFp6kCLTrC3pmD1OXYCGIzMrrsUQwpoHttHK8ahcQxD3NYmSBrXb%2FFPrIIScmnBm2G%2FQ%2FfQL21b3hO4QNgun%2FlETB8yxUE1gkidLufBou0t6dBJxX9%2BsCWS87f8vC36q0RvcrWlqSXF07sH40lVyhy4280IoS1bInD3ymQ0r9MPG2rjmIPtU3Za1hRudx%2FKvnuyVnDtVapz%2BHVzQuXIkOf7jD4B2P1hTl47I13vREZiE9LVOl8IKZCXIpmULxlLobz75tty3O9SpCIMnWi8tAYqsGCF7ZcF8%2F3abl%2B2ggi%2B9ejGAsWNIZVJyiC0J6%2FykqdExMNxV%2BuKLdtc4yb9e0gbe7uTDcnJkqIUtYKkjg2Sl3ZS76i8AN8jHz3J8JLab6Jr%2BxqRr9V119vcqi9WimYBPoKcMOSe0ssDyD5s7ExeGvbEr9q4nTWcUMlwVrlSS3kzeae%2BalncQd9I7VELKhAYYfnH5brpJHmmeR98N0lO5pt1jTNXHqAlcflR7kp7W4nfUgbTQaIx2aacvogx%2BW%2FHTkbTeIpJ%2FtnnpAO3j252lrK24v%2Bn34MzIKIcRauzJK%2FTgCoNyYBv6mvknoR0CKKAwZUsWrDCPnrnEBjqkAR5a007SDGfqPV6TZzkbrQyA6bT1o8366Y90S2Nm2KUtet1MNShQNe1sBY5nehzf%2FZaU2f6f1QFfC0MINK%2Bta%2FszWj8j35oC1N3%2FWg9VQU%2BNjoB1mwqBEfqJ8KgMVvy7fg98t%2FMQVkneAgUWMKdLnzTs5%2BXMRnSdD2jF2K0HokGaBe%2B87aCW6z4dD4UtTEjPwtWPZsGA5TW3tsZymCPo1ih9dG5o&X-Amz-Signature=d53999b70146cbd5e69906824d503076abbc3b50ed049c5ef30639b820d74644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMI2ZKR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz7YdBRkML8WVXYkqdI%2BbDHjF6FJTMAldaYohMiUojnwIgVe5CiX33U%2BwV80k%2FGl08oRkuAMty2J%2B8gKblOvE%2BXacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCF%2F1d8hnabgYWrDCCrcAxmJLLgrZBozuu3e0tLhqJaj%2BGWYQhb339CbQ2568J53qpBZYvhr9XYS3lx7n8jRbQqmdjKCAk6lpNiS8m3zGD9Hgwdb9C3o3p5r%2BsICejwZ8in1MLguB1VL%2BQpVW%2FiF91Po1DvEjM29sw6T4%2FplMlBm6X%2BmN2it6qT0TUccZFpnEww9%2BvVxbLDLGIVPPzFFbYC1m9lk63hWPJKyhDzvDAz5dyqAud5L5dTfRB6ONqWbi%2Bl9hEV1giEchx5hX%2BmJQP5jHruQUAVXchFgAzVBp1vyPacMf412ZQnYmSfEF%2FIiJbbcjWmqrH3cJwzZdTh0M%2BSRvKUK1HDcc%2BkJBeVQqe9jLKArjR%2BdsA0WDPuh6x4KHIwrM1jPLKaAYk%2B0MKfDcW840dUhloz7l1T%2By2utjyUJQ3JPdfgsGzTDhhSg7cBa6OQZ4fstnQungN2HhNFhTl0ElGlyGnhu1CUegO3SwZHhaMeqJ7UvwNqnPrqCjS1iFQJHDoBX5XNk224uUo7VnO4O%2BAiuo%2FNneeN0hLxjb7CuzRoLgaMV9Un8zEkFCAhH5cMvpZ4ymbWwsOLhEZmn0xSaJXvfT7uBILUb4822wBlLBOOrKIjtm4lI08BXwtXnnd%2BLwB%2BbEU6anscUMIKeucQGOqUBx8VQFYvqRJE%2B349m%2BELoDTO0tbg9tKHRXTaJLTpscv%2B6%2FX%2FSNNlasw5vWJvAv72qgfDkO3rW4ysMWDOHTQyC0OoOGAE90VqYPjqZjnYyvBEphNfRcAMpAzbN8GhvwKi5O46g7TLgCfkvgbnrA0nkTxJmQfxWHhYMdTlhMqal2aUg357J7004E9Gzn25yGTYrudTWZ6U4kZ7%2FNvhd81%2FTYtRVieBs&X-Amz-Signature=fadea102a2f71f870235d2805bd7fff64f9549a78484122519603c5c369fd119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
