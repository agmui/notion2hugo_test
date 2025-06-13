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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM46EG2Z%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIG2iEA2wie2M7RNksH2sPePEuIypr%2FqQBsNytVw%2BhvkUAiAlPRH0ApaPpoviGhyjqZr1hMRz8s9dH1e%2BbMUbbKu2zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMWy3EstdbuU9CS7ilKtwDTWAbVuy8bOwNfA4L8YuNJpVb%2BA6wubHpnop5lWRBDHRwNU5V3HUNJR3%2BCvS5nwUyV0D0JyHkGDcIDwcBubimNO%2BZnSlM%2BL2ILjUvu0kUQb%2Be4s3nZ18gmtXD8gzgj9h7De1d%2FHUhdWLX6VY5J7rMn%2FywsqGFKecckZS69NyWPDAnrKbk9Mdwu12q%2F0Scweass2IGCdG1AC8aIyEHt%2BWyeYsuL9AWWsCqAWidRiXXzCqxAsbHV3ic3Fa7HGJ3b7DqkFFiADcIkcOqwWx9vdKjcMCjEE3UkpKkI25uAAWMHBt6dhGUVFdje0C0KejQMHEL0N5CouNKjZXJnLvEPozBysbZPhpbapj7vlU9ahhQWVMZryc8VWxt%2BL%2BEK2lqrToki%2F%2Fjt23kHU1534Jvju4hEUo3hE0w5%2B%2FcMS%2BRTB2%2BSS1M7MRrcVHXi%2FLP3JHoQRoxIk9QKPlmlCQ1ayAPrrhovTmD7bsO7S206yu4G6QqUHQkOKww4MwMNYCHZPA3iCPfm8d6X5x6j2oFfrTGI1imQaVbcuRtq7wqd14uUmFv8o61Qd9PieDpR9g3lJCDXmDO8AGvuNw%2BINbXKe0kRgGI1%2F7W5q7bRgawVbT6GzowHLeEtWXyFL3MyKkLA6Aw0NKxwgY6pgFzJ9EE6hl2cly5i1trMEUp7ptE0Ge9RL5wFiUx5ejVahSf4Ytp0IMbjeyyaTavqR11u21owS%2Fecs59fnoVSM7sEqqwEvV7VG0%2BJsCuNvH9hQ3p5Yfwntmt4%2BlKVahLI6XP33Dj2AzJSM9bV2IRid%2Bde4TYfn3zqS7prYpiuMGfHG8r3vlT%2FeC3IvpqKOIwDEiiPgTwDk0RknOpV4J1xp0gtzT6Yagy&X-Amz-Signature=73c605d4ce287e016c962cbe9d7e052f457a90d150ef56cec4f9ad64febe758a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVK6QCU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDvIJvwign%2BHt1LO3d0egiNMqJdSlkHz4JyoCbtd9RrxwIhAIZzn6mKgbEiCzz6YZHlrahAQHUdogBi2vxx5qNbrVf7Kv8DCBsQABoMNjM3NDIzMTgzODA1IgxbD98p10Q%2Bo2s3fUsq3APFlvO9P0kyk4oQrrDJwnV0YRO5OVhNDltol%2FlqIFUu9Mz6M3lSwj7SgPOc7RXNquw3rHEtKY90XRbhXcw3niYYbEDcKVVEluoDhQr0X%2FZV6CKMbxG4O7Y6Ol7g1MmBj9vXk0SweEsfW9SKlhx7%2F4%2BAsXCa%2FkjCXtUoYv4omLFYiApTIV1njGw%2BBp81fjXjPHaLPOgw63pMoA4Ui0j38ZbG9grbdDPPV3wLVpuBUwcrVKvmPjOp4uCDw93ld6HJovpLgcbBmkF61zqM10El0QB1WwpiqdKrTjZdxET1dXzY8I3EH4RPDV3bdSWKyktQGkW8Q2GuK00iZQ%2FrtyiSukqSA8UAYbLlus1ufjcC0Xwd1oZ2lNt0LKrdxZbi0%2B%2Fpvfum1ylp4dP3I5bINizfS69JQDRqPZYZazX7mrVjRfa95I9uTzCf5MK8fr%2BEJZQkpj%2F%2FHghcufxudFjb8Xnit2%2BINqcSGViXUpdSKflhskGfzdPnWhfr36KuPlvjLTwUVrZ3mPCVkvJt5mQYao%2Bn7eYyGCepj%2FrdRjC%2B18HkeYZiZw5iLFwOhmHOyi6ItC7zu8kOBMG4nCwv%2BODKPGCO0B1Lx2TnUYytnOQ5keNJTQoza7Q%2BbbAqZzs9bpcClDDp0rHCBjqkAcq19wSvIZRM%2FDz0vnOyvuK3NIU6Z6Xktu09LQobkCeGdm0ukrnnXjeUGT0kIBE2EaIFnYzjhrvvx1gYebd1wuOHKs7wiiTr%2BnhNrh8k3W1dEk4fYAyyz7dCsy8oSbi9qvA1R1a2GiLwStM9R%2F2ny8qotR8Bu2%2FBhRs8deeh%2BYoZbke4TVBCDzKQtzYBzaqmrN8Y30J19QOTTZgHeTSi1AP16bsd&X-Amz-Signature=3b42eb9c1a9b5970305b7257e23bb83b1d97914d8476c6a351de568421e38da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
