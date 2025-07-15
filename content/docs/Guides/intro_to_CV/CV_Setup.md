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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6IJ644%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDue2YIB3VhHmPiiQWZHpIwiUr3GrG7nHM5INoyEpBarAIgCwICspi2BFacKpKeIkoeOsLFB7bBzzKQgEtT14Rvt6Aq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPX0%2Bov%2BsFjkkYi1dircA8PKh%2BFgv1IK89LXE1OIsSqXWxr4JiENsIj7B%2FsPCnzUjQ%2B3Kz6799Oq%2BQddC%2BSROezuMoXHjEn45seFtZB%2FJjZbkMAWSO0zcdOhS%2BZJEkVvXpxZPUk29ZV5s2cenpeE%2FRttkqHOXxKPLTYui6yYK5jT1L0lRi%2Bz4g4yMTMY71tS%2BsQ7Xs6yGDP418EBORwluw8fiFh%2BrZymEXT0Nr9F9G1t9EnO7qncYyUSbX9fJlLPYnbngygiRmeXBynAt7bnVn1jhcVps2uOnW329R%2BX3MDq6wWqPlpsJkFKCUaIgPXNBJMDwqnuDFvtVNMIzPBClnOrg8dCHchPGe%2Fg%2Fku1EHn8oiwslRMNBZuZ3fygg8pRi037AEAKWcEsW0bjUf0W0J8C3ThnrmnmgmM%2BW1Sjhy68sACHD1BBV0dYR%2Feo%2F1agS%2B5JKUsCzRL0eOevncPhFxugW3chDQNlKGv%2BuFCUQgDEiMXRWed9aRy0DYHhQs2XAlR7zk33n27wzIC6JmDWkweWvfZO0TPDa5ETcQj%2B4GWkZe9bOQJIkaPM47p0O%2F0cVw4jMuyY3xMtEWvVDORvptEf2eOgQNjn2ShId7f6ibKnd9ZTL%2BpMZLdbFLpe3U1COOh5O0nOZHE5pLVKMLKu2cMGOqUB%2BXavC0LwvWWQX4u5oQ%2Fu1vRTlr0iJD646LkKJm04mPIGUAlNL3aQyql4EOm220iB9G%2FUm%2BMpIYoGsFKzqO%2FHqse5mgVvsC4QXu3pJVdn6utv7%2BQ36KULghsiOiFzMw1JDWZn5bynOTvJZoGqJJJnL9HoONskAaxWLEG%2BMCvnKoTva%2F4O8qxsOkK3lYHPZa%2FEjlGyBAMQyl9dFJKlZb2wfvdrmW55&X-Amz-Signature=0dd363a6ca92ee3bda436a505f70decb38c1403efea79b93b05c500597da1f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667DSGWNY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDVCHXfxQTVF7blIyb2UlYd6lMtIlxQZgNVaI8OOq4O7QIgcv71kKTWeMOgkNbpXB8IH3smhRaVLmbwbB6FweN%2BWZQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDB4V%2B3HWlzcEGfhCRyrcA26i%2B1%2FsiDx52cpFTXEjih%2BBF4JQUCuGzQ%2FHPVrIWv9vLABd6Rk3IP1qyXwHIWUZ9XZE9B8rXBvM9gubs2n853JRQ9T%2Fnx4NiSK3LmPgfUOPv9ja1nuBjEb67ndGA8a1rJlyUOLCSJSdt1WcDGP5WNA2D9cldq%2B1O718IRa7nvbJEVCmctE82ngoa8%2BetklJySeXVZZo1F0uduk9HAuscv19W1E2COo%2F1egsKlTW%2BknmeZj7C70cuKr9aIogGiaJXXOxaGbZiAYOsij9F5MDWuJS4KKv5lfLm47%2FDHAkfSS0M8A8c6jYTosojYCf%2FZXhjFSN4h4n1sd%2BtBuOw4ka%2BDs%2B5UG68aCFITjb94oMOe6SxbQVPC7rJi1p%2FvNnZZpsqlVGAUTiw54XDkICjUGM4tfxHoZa1AgAFaJhSz3N3nvuFV9BA6LxBc7QZAFI%2FZqt1RKgEExBoF%2BUjq%2BmQxnBfjxEMMAJLW%2BAaRXKvl%2FVhU9JW2q%2Bj0Yt98uY6vF0bODwj1%2BYZ61plRqspvIeONi4mmymD%2BnddAe5lUSNZ4RawmpC9sxFWVHIjRAPFYskAlAelXyEzvru3hKbWPp%2BjiMpWH2eC0TF5KvMM7PdoFjA5BZ9BpzgyeRTaIzdOAugMLKu2cMGOqUBQ6K8mnjpFCyKJoC%2FmM8J2t9e6yfwmZ5iSkIhcMN1RM1u9Xg3PGa%2FN1QZxQB03aUsrrLz7EB1jKhyzxyIX63ZJFYK3Fmq1Ajh7W2X1v6clruO9gZ70A2jeZRnLIBazfdYw42bxtcGt8Uh1vmavu19Q%2FyfSaWLQlhm2kKbDUmKeoq%2BMag09rgrFHfEYpXKjT1Ib5LQ2ujG7BMlZBj2ESglu2OInu%2BH&X-Amz-Signature=b53ee4808a1204a99417da158e8047d3e717c7d49ecd6f3b59ca0e862efdc338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
