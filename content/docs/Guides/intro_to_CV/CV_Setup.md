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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNHOPAV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICZoZtx0vyiNEld%2Bx9Nr2Pd%2BjUFQoU7RCPxVvsSZ6LtFAiB9D0Z6PZFJpehm2i%2B%2BpS241fOD08inJCZO%2B2Ar%2BjKeGCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpdnLPFu%2FllCKdDIAKtwD4jFqswUyq%2BjAtEBpwEM%2FpJl9IZKZvq9dD6TYS03g7RVDXmIuzU0qtYRGUDcJcnrGPePfki%2BXxm4%2FCCld11HvRSg%2BE9xbIjoq7%2B0zRnkADxBC2rqRUh%2BVDq4JeWmVnAGZOxvMzUCAOa4X2pyewGkvU1hWru%2FeEeL%2B1EtL1uwvznTDqOwnO%2FDcyVRo2KSKMLMUDjJoAMOaUuVDjylnFJYYA0nybMF1W%2B6pQLFjJkZojgCgxbieYGild6rpogLdQ6YoUK4OFo1nQc8rYvBqC80UOZx0%2FsZo4A8e2oev3mC20uMyIHdt%2Bu0jCcqieM1T3B742Fz7dBF%2F3sHnq71JnVdbJD8XTI747LG6leukP0L5SKAgv%2B0z0fEKnN4OUdVNKwNqaLpachuH91XNwmcQQHNKMntHp417x9tpdb9EKov0vVRJAcS0mPA429iFMtiXVoWzxi3y0Gx7Mmy4YfySuebufqYC0G2%2BDI14MCD27TqJ4mS7KbkS%2F%2BZuRDSeXZNwCKmwtFK9xQdPaF%2Fzfh0zVPBFn3vwOWLi44zIRN7OC4XO7M8eaupGtEdqkwpSCrSiNr9dp%2Fg4Ty%2BYcxYfzq4aYWnNfH2FoHmI93RoKgla9DDXSiOAgx7jwsmdfxTsW10wt4advQY6pgHxTzeWu1%2FCgL788jpogvsZwVnaXxei6JgcrzI77gI2NB4MUcxpFRpiCz%2B850Kp4C1T9hNeAmXzSxMwm9vCSb21%2FKtxm7RV6ZrqylM%2FwX8iD%2FqUGizR3DCKIu8LnnwmnP8W%2BUhps%2Bvz9MKhvWfoK4wICQtkGf%2BMubWF1ObmBr7innMdd%2BNUjB%2Fbs5KuY1hq1pLhaBchnE%2FwjGt8H365RXha6GmBl45c&X-Amz-Signature=7ab4b1cb1a829b602d00d2a677e288dfb7135e6432af5f9c18a64161bae7d25b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NA2HNJT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCZiMJcrqgxhXgc%2BmIwDGLfgiEwmpWZ93OE%2BZ9rEOmAEAIhAMh0aOGZ8Kph0CFupgxBBBpNzS9mvsUbto%2F4iwtz1pAqKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj8HGjABa1RTqwYR0q3AO6IRBJfrcZcWZRzZ%2B%2FUA6ejiPH4a53p7AiRMVnQsWFLzXp5pQGUD9l3OGln0FY41nEQbp4zCzszZzzwQWvD5sCPOnjPx5ZZb%2FbRgMCWL68Q2Q1Daa2160ZBrd3%2BNtrrCMiNwvbZEEyExD7%2B1ONG52vZEgmwRSWvVZhz4r2OclIGvNB7uEsIgbKBWv91IP85pMADazs5ApHA3x8pfhUxfoj%2BwYfga8N5i8gV%2BYSZq4JVGa%2FeH4hiFThK5DOOXStbuhVfiXxXDZ9tFCWEsT4H%2FO1MWrgzKmeHbLSoalJDD4ZAaFNO10I5d8NBsUYHt3kkEPXcnyM2KA2rPMufVzMLxJwUq6HssMgsgssbPcyFkmzBDakviVsdMpqvl6RB7Rvy0EoLzf3iekcsbWHJjpUmvysyjexLokWDgHORZvh6AYZSdZb2Vv4F2vpDxp%2B6dTZKYb8xms9yZ1q2%2BVJMncr%2Br7Ed%2F1q18Pux%2BTWtiLl0WaxqQBz37pOdrtnEDHbbW0aSO38je%2FTUL6s4Aah5jUgNWv4TmERgrgA%2BzXruuTI9qEUNweJgaMjKhmPPz%2FGaGmwun4PMQxGmSgyyMPruE62cffXjQZ2g9ZVxBjuw4P2WC79wEPaJsDgc%2BuKJ%2F7ZVjCWh529BjqkAfs5V4feJf4S8Te%2FZ9fd9sYKHIvFS4o3ECResfL%2FQEcxg55T0MWVIwpORAGPHEtSh%2BJw57GFjWmAm8jDgVuca4XyPX42HPkTjW8s0NaF%2B4CpYWwXtvPT%2BISP8Sn0osXuZx7gIBE%2B%2BZr0yvWED2z0UjKqhfQQJXrAYogBLo5BEIibweWTgULUPqD9zan6LG%2FuGVovKuJAaOZ0GApq0yhq20mmtWfC&X-Amz-Signature=c9913838cdfd59a540f67bc8dbef5d3b94cdc634bf23c8bdc896a2b13a4a6f18&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
