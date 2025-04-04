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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYS6VFT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSBN78HLez95aB7OBFXtaJvAfRFqdnZeTZYwKwzA9vbAiANCG0PjaRQZIQkRcmfgiJVPdsG6%2Fyfnp7DRAqG4FRXCyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMN%2F%2BTjvWcAtVNPTaMKtwDVojBk%2BLG82HtAMNUFkrM6RUCp9Vk2gMi16r6C%2Fcj5o2tuobY10Jar79t58K3m0cy0oeBco32OmoqedXHOOyo9lrLx5k9RbVOyoyAjv5GO5Sbn1TY7Diam4j4vyJC9d34nU5c%2F%2BgxaHwiADcBSG6uhzwTWaOGdXYD%2F%2FDaCyRizAHO8yO2%2FZSP%2BiNLpXUVphAcaFxswdy7ZkORES60evM%2BzMnzY8YZUn1NgwJqSBueRK%2FiLH%2BGQVtiW%2FvhoRp0PHo0jQ%2FctVygE%2BZl3%2FIv2SKcw6DLg%2FJDL0TskLMwemDugdZ5v4Yy5QxxrRGB%2BPwRAk%2Bb%2ByeS4TUMJVqcs6qvOPOa7E%2BMf5qg2yshInU1VMUo%2Fl7w5Qqkr37CnA6Gk%2BDHgzrM2%2BqTNlSKMwAWgBvFgRV662fsqvnPK3EJ1UcguesA9b0m28blKoxn2iHIrXdwTMD8A309BsmkAkNjjh0A3CZZFuJ7oEp2TDgsitJFRx1nSpFKh%2B01vvHHui7dcVQMTC9K4SLTzexeMqCqPEMFxKEbu8zejP9tauy3BkU7PK%2F0qTLPXzf4J3b0REshkHKJnSMs94NsynbYbDbaOUBCkAM2z0%2BJby%2BM1G%2BwDmtmhNaz6gYipDbyYobSmQKTfXwwvJK%2BvwY6pgG6Uzc2KxVNVcYOUMOXRh%2FFhJYgNMgtjRo9XUAxdBRVnUWIY1oAUBE2etfALjHAatS3KWDy3G%2BHA4QIuOYgBmAyQt5mvKbcpB9McqQSddH6SB3c9TiJsxiGFI%2FgAQL%2BG%2Fd8dL1LOE8UFcYp%2FJAvhaZqN6wxhHJ9CRaeb2ARXPEITvLQe3rbvnCWUl%2FX0bjTNb4Cg1sVugnha6XVYzTJhKOT7UVnVow5&X-Amz-Signature=6307d1fb21d4786920c6774f6453568ccae8a5bb86b712cd15db33bac207bddb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDE4DH6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzKB3TjQNj%2FVapU3QtwTs%2F%2FUnpk%2FkX5PfdYYweuBmFNgIhAMnllJON56ckqRU%2BTCxMYECPxD5hY48wh6WY1te5xukXKv8DCBEQABoMNjM3NDIzMTgzODA1Igz8ePgZHSrcfWaN%2FhYq3ANjyhdU6WeB7fn7h8m%2F7Jj5pqSE5vFY9dNzYLp67f6x4TarP9vBZazkUai4%2BRjHdDGa%2BTf95qwiBxgzVYvHsmB8FeVsbErFW6GMaRk8oNkCSMNs3lupFVlFmTkfLXvxQHIDBO39vJlTbI49uzothikwY17Ic1lC6dWnqtrYAUyoqGSROpvR%2BUanEp9ohcph3BBhsLYTOc%2FZph23hyYJk5yQM4pxbsO%2BMjDb7h1ZQfB8dm9CM0RResvXc81aoEy5Rw6tvlJr9NFvhsLvaQlDbYxDxWT1y1p1uApAusqdXPeFISO688IzLfdRunTDOne2hUO6IP8S6u9z%2BjflmFBWk2UvulUaQ5UMGf9kj4o6NYnCTDfuSMe2W7bDPjJBq3SOkj1UvMecX1J%2FMB0Jcu92YyniK8S4mX2oAJR%2BRBx3rY619XARhXTt%2FWhUHaYpUM%2FLQvxIEZfbKtoVV%2FDRnJ%2B32kx%2FvmroEPdg2xEsA5%2FXRC2QiiA9ybwfzzBbU7AcRd8NtSJT63Kp8GIzEyHZpWAc1qjhDcp0VQckzh6%2FJqtopgLESlS09nz0K2W4yBljpvKdX5pLmxaN%2BlrJFzj2w%2FTDw55XCy0Z%2Bsu8yqKnhJfbH23Im3e%2BhOC69boA1%2BOUUDDskr6%2FBjqkAU7I%2FBrjQYs6Hn%2FrGgznz%2B5%2FWA9lOxQGb55NnD%2Bz%2F43Olfcg9ZBIj7j1eng8715fQQMDIUVH1bBbD7G%2FlMPMaRgFBTI8LFlDDnhYVOxVhF4rZS3jFo6DfqC2O5OgS6Bgp54BDcWPk1vPSxHoE4Lq7qrRtQcMq9SAKOmLsJ%2BwfDhwprBfmXDPU4fTjVIsqAbAn7aCsfBgzFP2IE4D5JqkCKEZlIYL&X-Amz-Signature=a244aeb47a285247c6c1812be3dca0472108259dc8a08933cd17379641639216&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
