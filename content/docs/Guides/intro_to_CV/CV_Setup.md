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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75U63ME%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEWJmyYOaLleioEnrI08uoquATlvDtjaOQ5ybQf0kD8gIhANkGmu6UgEMkVDCxjBmtQNbp1KxhCwhCR%2BLnIdBrnl0tKv8DCH0QABoMNjM3NDIzMTgzODA1Igze0cfbA97Cf%2BQwCSoq3AP74a%2F0JG0J5Q1SB%2FQwolDebzZLH4Yam%2BkzLtojP3OWHElu2TBVJivTEf6b74pbOfAi%2FjkfjOGgRnrra%2FbXkdNtajrFOmTWuMguLbO%2FCOypZvo%2Fif5vsDkL0inm6QoOt8e1LTz3%2FsN7529NZrc4AM%2B0e56SOUZ8HAKU91WQLiMlwF3SNZwhv3J5X1mc5FSFjcqNHTx4d%2BWcWNsLHrUXPLdJTr9z9uBwFsLYCec7yIeXI%2B%2BMYlBwkVooK16hwOkMeNpOB6ihnU8Zl8Y9d%2BO8oc8RYjVUk1yk%2FjKdr3xLbXDcW1d8Gzxg6Zqv%2BQbrhBsYRKLFkvS8mf5kxYncY9JczEFUVBnP9tO7JTjQEqb3QVme9AWE8WhGAZh2tOdK0NQO6kkU4nbW3U295jZ9xX63NZkky1tMdb7pmL29bKKxd0%2BRtZD6sx7%2FHymlmyluIVZ2TgHnLxd%2BN97jTqClvcpoC6PPTSjbJKaJopiUeNrRMVyjheodzF2CB10GamVAJvLzEZXzQ2%2FErdr%2BQBC11B8uoesCGKUgt0iKzj0g0aNk6NW1j4H8SPhrKhzHSIjcXGFWSVxlpCzu6%2BVoYLtqy%2BjeoQ1ByXI4PNf30idZUmbO3wedmmp1wwohl1YW%2BTHn6jDoiMfCBjqkAZNMSQY6qXWuHpo4di%2FN35AtYoiJucTNs3hY9haUh%2FfnPwMIXt6jL1OBvny2rHI%2Fjf52zP8o2D2h2%2BL9miKpvjGfMKEu%2Fxr4bN3IWdjsiGHh1NhKmAitB90WXMIMXVUNeaqhyG1vyrjODL99qd2xq6fyk5GoySng66SM%2BnPf%2Fov8r8oElWdyuTYvHJdvORAT2xVBE6KpXE4645LgUSzHI6YMc7%2FN&X-Amz-Signature=b78ec6ee348dd75a3f583526632cd9aa56dcb01d6f23e67da0c7d649ca596d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6CYAI3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5l%2Bt2%2BRf%2Bau752qUdOpC17e1qJQvPlC5%2FL6sBva2isAiEAzAqTHFILzEsRWdrQVld5at5mz5H0RbAuqGuM1jDo8CMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOxFgnyp4VFHTMK4sSrcAwaxc8Aujoom%2ByHeIGJDrYeTbFRflFi4k5OtkEhQNiJGARkFfJ%2BuAQY8AD1x%2BakH5Q5ZfEevlnnQv6TdCZBRxEEjevSFzSupiQQTQaLrMssajReXuXO%2BkqLkGlpV7xJ0yPr70YSNQ8O1wXJ4Zfg62TJAfGwsYay0RUrEo96g4F%2BwXnc4%2FsFVT4mKENeApgCS8i1KpucGeqGTpbL2auTQU4u%2F4Ih0GGitFcvy%2FkszYwjO3VBLpKeG6W1wGBB6VrY4OHceVgyeoQirTi2csPEW3l5TThKJK4Ju8Iyth3Q3oWnZWBLJ8gvnG7IlEJ%2Bv3epPByO1n6Ibr859G2JdO3MCHh4FoZ1DK0peE8xr12fLpO7wB9BB1NVhVEZluDqAwa4hxRKUGD3O%2FjfnDwfFjk3JXZE6hzLPKCo5gAez9LExH0DuzxwuI5M2a%2F4LzL6WstFeVxs37k%2F%2BiihDQh1qa%2B0Bb3Zq2IEGaujSzR28QsGSJ43XGYKEIda0W1PrEDHGgHb%2FOuqWP0JM3V0fRkk2%2FmLwzohuhYQQZZLEolsQBxvXzRN9zynScUuPgAPbEt4qO9tIspOZeTFa25kv%2Fi%2Ftb6i%2FNY%2BELEsqyHLdEHHM12Ch9rOUcSfCFXHHuhU70SuxMP%2BIx8IGOqUBxX4R13z8Txg3k58Ihc9kfE1Gvgzf%2BobP%2F%2Bcgt2p%2B6p%2Bt8zrDFvVuZ8k3dMzzCBjv9VJOoUAIGK0kaiadIQdV0s%2B9tDlFAUgYefj0iC9lZ5lVKHmMHsl4hAzzMbllcyHE0LgAIH3mQXzNlxlceE3NmmZUpOxxHlKAYP%2FiCbuEtKZLdP%2FVD%2BXsmor0UAWUIcIBdwylXuVUMltmU2%2FMPkjoxuUNt6hz&X-Amz-Signature=b036f19c98f915bf09bed81ce2a8a8b659ab58c3dbedc6a5027abb7ac72c386b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
