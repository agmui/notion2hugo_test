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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIFXB2NF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDMC%2FQFAQhQ85qM3%2FzWRBQOiDu11i%2BMocwMKXZ8RNOdWAIgEyRl2l1%2FM5b%2BtijuIsHW4tuR0ieudpL7FYH%2B9zEp%2FmsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTwjA00GYBDJek3OSrcA5VBk53tNt8y33VGbc6uA3CAzuBAUNvaznywI6O03QCPPVwoOuvBtd4vlvhP2x5RHPFc9IgKx9XBuzyzzMjNsPTSNprcF51kCGa3Iucc6bZlp7%2BfHUisErlRc81CZiceBBeprv713mHUst6C5TJv4RU1CE2LluYPdIa5%2BwX6ECeO3568loTX1fXBdW1V3jiF5DLfQp11D7kwPlhBamx469iPs98GXwCkquQGo55wS1KuDIcV7SroEvpehzsHO0I3BFzJnbgkfYkw3y9%2Bq%2FE%2F1wcAsogBt5zypzEH2gDtTYK2krcLl0gdDoZUcm9rpfQedsfjKJG2VF7L2a%2FB4EM%2BRWWl5PLNdNiAdPxdCDeuN9nRtXn0sTs1G8Ptaol7wBHv29c8xkVJSedGXiV1jFXO6hkwsSfDtwjPtDoxpaE7m9x%2FDZkGE2CR1L%2FyFXp8cBaHcA2wYp8yW2Q9mxHvouSjk%2FBsRNpPqjHwFF5gy5TgyU4y%2FE3N3egPO08WBZr4TaJanVLYCggdcCIvyLwkik9MCjv9yTt5xJgmwIwwxo4sWpu9XNr4HXD8m%2FTLQdEQB9cmwWZSD3pCe81IlghaGgSZp5zdto%2B5CHgucKAWbvqms2BIWYN0Dq4JXm%2BpkbivMKafkMAGOqUBiGgr9DBQ0DNMIQrf2%2FbE4oOG40qW2Olzwk3QvJ2TrssqJshG%2F0tpCK%2FMz3hjXHFZ9jouaXrYBQSmUEN4HFUidPhYvrB8N5BEPalhkWqWP5IFJl%2BfGMKmBo6UWqcRTKlnyU5zjT6NkPBI2ssj%2FoUCFR12ckRuHnet%2BlDw6qTy8XIiumnT8OynQMGqbz%2FdzWk54XPgxPSkW4TRuWz6Zq10S4zYogWo&X-Amz-Signature=2617bf51c390e6bbaa83ec939a3819289426d9c4385400a5ce7d999522256aa9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMBNBU4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD5U1WSW9Chz1X9PXH7y4BHm4ONL3UzNc59TOZs07UWsAIgMyR4CUQPoBRdt96prJJ6CVF7Xouk4si8ogm2x7eRJvMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAeq6q101Om8fkVKircA8TgfHqZicUT8Lpx%2FSkazfbyLJj7d%2B2iHfxn3x7z4Q%2ByZClQdn3P6uR3OKKPhP4AD7D3YJqp0Ny1GgK%2B8eea%2Fju7pFrsJZEy6aY5GOpLhQqHkQs7o%2BTzZpse%2BbpmziRWwartQ8dV7FOQ2A5IPpmgD70Ha8mZChvMXWCMvzJ2d5Xt7c9nw%2FkEbxD%2FuNitYjAS6tEfCRrdVXgfjRwZ0%2F6kGtIDImRplbPM2ZPm0UHfIsy4MgFiQrCGFPpxnv%2BKQ9XBxtp5E51UYRoat8n7RGBx0vdOtwHbxkYR1HP5l%2BqJNmlkjlpdk3ZCUw%2FK%2FKTT9FbezFiZBqEAZwiSKbP00Phtzt6vJB0uS6cCA%2FVyeFAmNdv8ISQiT6ISjaEejen4aeYLgFcHM6ygeQ0DkK4p6yJstYHCD1hefSEzR9R6f8Yxjue3TRjMXT5wvl90%2ByeloW8sDpqzXeqQS9kw29eOnoS%2FjncQ7YLd16oXyYXpluhjRCYn0FMiD6m14QvuhhJQeg8o8DJsJKdFVI6J5GtzyG3TyrC61%2BJmjS1RqyAwyEbbXhpZca9OyPYRgB3Fxz6DSLCP%2F5lIMlIG75PDnoMJigf%2B4j1%2FHIxa8zcDNmREFDNTCd%2Fu5vbTD0t1Znmn0ErZMIyfkMAGOqUBqky%2Fv6UO5WjebYAEWLoKam0%2BdoLpOonKB2BLMwq0SiMDlSWghlB6Ad%2BXPEtWyUXTHJmLsTLz9QMWgRbwdrCYm2%2BWK14qmZVam%2F855aYtjRNStsTTfKfEUauCGvLHQZGhlC4NYyI1Dv2Kke%2BeN5VwwMwofeM%2BWi51q%2FDRdens96l5PD4c%2Bb63z94Q%2BMJnNi6UgpoWXt0nAL4jjjpoPehNqORJjLwX&X-Amz-Signature=1a27606d02354d0ee7dbb53af2583b45358f761fc449ab35d384bc793b97c0ab&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
