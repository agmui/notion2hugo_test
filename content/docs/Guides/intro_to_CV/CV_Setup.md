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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNATIOZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyWpg7dnwhFlNKlwPrFZe0Ea0lp%2FvGNgUq8RHtDkA1QIgJH37t1Sl7p0oX2B0dyBs733HRr3w2Ozh79EnP6ycF9Uq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBWSSZmW9aifPiAqgyrcAw4j4KCoft7LwS%2BvP%2BlhBWUr0MSBHjtRzZP1Kqwwk4xtkTW7%2FgpqT%2F9JF7n9yjFDlnv7eEWnAUmPYWa68B9PlZD0aiVCEiifT0%2BkwrcJau6ydFUaPw%2ByYiQdwHJS1K2VR4mUaoi1lkOREQ7AfqzbQxtjAuqgE%2BQLamGLDLbpA5Cb9pGIchP6GtQ0q4sqicnfa96D2x0z1uD7V6Vv1t3YUAz7B9cidY2d4qeTTK%2FthTK3djDEnrU74oVxsgMJ2nf4NImuoR7ImJgnwloKwAIkxo6zYeSgqbuiMR9KI6%2FWdDBJkj%2BGUNA012iOFcn7u97Mp%2BMPjb8bVsaXVeKO%2FCaDjSRFKcKPS5qoDuwIzyLDluh2CETV4SWmPUnj2twom3TB7lUXV9%2Fu2hLMkJIv%2F1SRJNUGYMS9EB4BhOLZhcA2T3jEXojCF1Itei3nuH1Tb62a3jcgZd1VLwE8%2BBcVjxOLTgMWxw%2Bmktqf0enpjYtpONUb1C4rpfmwTmdodgaUfVg5%2BqUKRBqCj0NSXLE7E2rtzyQUPTryY0YUB9yr5Qw56eaGo3mA%2BBtDhTrfQW3qByZnvB3gzyBg%2BBV1AG%2Fb5HePyyXqWWjoS0zViCwn0ylidChHAgqkYxcaQ4kdTgKiMPr81sEGOqUBygavnn3ksxV7LcgAHWFLhXfO8tHwFiBUY6z04GS4QBKD3rsFYsBVSOlY95aetVu7C%2BPoCd5MnzN157ytxFsusZRzxDyeaCvaCqCN6t6JuDwOExoIP%2BZJ92UizLbvrQ4txUMUqCeJ%2BZI2r9YmZCHmdQGSDCM4GUBzn4Mb2lecPG1%2F1TozpPE%2Bb3uY5hCMt1PBZFtzFwtIKCUdwpd2S3MIb46dvBvV&X-Amz-Signature=335a870b309e3dc1dd7032e2489ecf82fdd4780eeed537f58714f8fb4fee1581&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZPAARO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT2WjNEUQZC5XGUceFmbzsh89xAY4cvGJV7k%2BI%2Fta6%2FAiAVg5lRePazaU2olJ%2Fu%2FsZGreJZrZ4rhnBMX0FPIPfXISr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3g0OwzZ2P%2BZwR2OKKtwDIDF41t8x0q4BvEXMYXTp9HjvYuhbiBs1Ooza2Jz62EevtFGtEhHTj4Iie8uYYUNw1nGtcUhZP54ZeXgegViRYJqG5D%2Byi1CohDvi5xc3P7b6udcispeuJH8%2BEbqTPP5YpZNvLtXTC9ippGMF37o4RY1ed0c73UyT19j5Lctrqgp%2F1sWwKo6SgOBquThn3P%2FQETLT0Zy6TmMA2RB6tfwJhvTLIqBe1Q6ALpjdAyrj9Ci2jZfH2%2F4cGt8P7Lj%2BG99WnRq5FGPbwRbpCz6w2JHRLfH%2F2%2FLElhIh8Ftks7%2FNtTDt8xMbOs6FZ4CM7JrkWWSTKhDX8o1jUPmHhdhOPlYjjd%2Bp4E85%2FxJ%2FGOyruJ9GjsZxOvZe4yAAxw65eZ5G8mZsYfD78mD4Qcah9AL6z2bTJyh8FGEo6rXsgG7DXIcj%2BHoPGEsk%2BKQBTc4B5fzolg70GlpMHVqLeJiFX1msJTki8TbbAw9Z%2BeW8V%2BomdBk8cz46Df35hJuWuznhQT2iEBGL3ZkunZPwUSDwqd68Sgl%2BQYw8%2BPIzSzBQ1RH03YgS8jRKrH469qStE%2FufLCmLyPiOZIc6CpxgXPUtFKAq1%2BtaT5Hb1CrG3VLDNzuz3pp2lGkKuINPR%2B5lfzVPBt0w%2FfzWwQY6pgGf0TvP1a%2FlFR7QEyA7uPTiR%2F7nWi7wdVabu6Or7bUAppLhpg1v8LmXKFV%2Fx%2BKlJmrJoCXQsq5dGMVkEzU%2Fm8B7ZDN23kQrhiKi9Dvtqt%2FpEUoNWMDqsbKgkhbIFr%2FFDC3Bolq5ga1SL4JqbL1hMg2Jp6aYxnz7uyZYsiyt2O9v5qg9MMOMOPfwViLfweJ3MgpVI34qzuIMXJjqgaoqp9o2sRHyeamE&X-Amz-Signature=151060006b6a073d4d56c0f7e2717d31cd447d345057f0c546ca69f2f2da93ef&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
