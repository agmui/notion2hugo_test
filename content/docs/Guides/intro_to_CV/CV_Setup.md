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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHFF5NS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIC%2BjNKuaL5w%2FRNpwNmQqkahCL2e8wpCVYnynlWIpx7TcAiB2sNpaoSKsm4qMFdnrxPPKifULLP1ipIdXw6AUe%2FhXQSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZF7lbqkunPVpg1eqKtwD7BodV2Pu%2BNDTaye2yVWGhyfYG8AIozOBQFiPVm06vrWqaitUhFhoZDQr2QyvKgtq1CDZiDVvMVnTpmdwalV0XJoWI65AV93dRyFTOCMcHo6zUKmmV%2F%2FX%2FwchMpvD9hJNwd9lRnsv%2Bq4dIHpUAgf2%2FQgKsR6iqeS9VNYC1BcMybb2SeT1y%2B4HGwQBHnOrY1gP5xDBgADWjGqCd6%2BULNlvmrvl0Gm36544OA0XoFqqXupU2uhYdULv1U04%2FscTH%2FkR5C8uUhzAj4sAYhh7z1434ainlKHH3U5EirI0GIcuvIbLEJKSXYYzv4vNwxJPwbBjB9Sb%2FZvtNppPNNCqvXM%2Bscj%2B8uz4Gr%2FDF4EryJ5r5iZee54bdFp3PLqBK9tTGkQrXv3xTe%2Bq9K5KuvgdZf4YfOH0xaMsGaHiLgvQLgdRLI3QOQW1UV2rpk%2F%2FU5lYP6CmMLTluuT4E43LdoLeNSml13y7qILyeFUOdACBuTqwd4XQHSca%2BymivHSFpvzTQHNdFjfsRctqu41ep7bYv27xM2FhQ8G0998TpTxQBnw3u9qLqUjQxVLaNk%2Bt%2F5u4wRX4i8Pu0GfLAFNj9iQembdEfHs9P98bMLQ6Vv3lLLoNQ%2BUzES1tpsAYcBtoEVswttXmvwY6pgGLrcxAamSzfELNljeppZoR8hr9OpJqE%2FxfBCK1BplaSIkkqhsfZC%2FuLQ%2BzavFzj%2FUtqCK9996EiUpRvOifXtFauiMDrQTva1qoEleltR4ykX%2BGvCJ8c89fZ%2BI5l9AYwN6g8p%2FuqX6CJGsfwxj1gs3VLZAv0yypvVkWB41Ul%2FyJhAe3waQTD1RuYAaizJBS50ysbUmlNMic%2F8I0W7JBxP5tJdqm%2BzQm&X-Amz-Signature=0ab4f99b93163a24957a56f33d629a66cc3679cb082dfbb1e0d6f2d5efa1f542&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73BSJWN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCT%2FJ4jr2km%2F8VVDdYXz0PahA2VOvIDS75X1co767p0vAIgX8IvYGqNUpqGiv9VKjJOhSqakmVUp76NRPDS4GMvpWUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9Y4D7NDFn%2Fa9OaGSrcA6TbjQFKzRBP0eK2qj4OL%2BWOLK1vSPu1TfxQXKlGTq2sCsWPVcf20qjqj3eHPLRtCragNNq590huraLpKpdP22O%2B%2FFonhhfQpi8e3PGxvvHaTgDW21CgzS4fvyPFv%2BAyGEHCnPAN2J9RINTkI7FOPXDey8%2BnM3YyUxo2SXaqjhKia9B%2BTqrbSY757Ckumax0IsRuT%2Bh6XfbDgBbiOYgW%2B7AauPumMiZlkIb3i032D26pROew9Ycr%2B8NoD%2BHrr6TjGPUxW9FfZqH6HASj4ShB7%2BXoGpFO37tjORBUPH7iYFYnOePAXuhrOoWsgxT4CuenzTYT100Y7WyI%2BiPXdPT6ckiRZjbPmKIJ6dO%2BdgthugLvUghJ1yEzyOhCbuOWCmpp3o8BXpdF2znd%2B7A5dO%2FVyBtIGI%2BY2wlCXv%2BiKtyEDhEshBIF1ZSMFkTd0tYn0RPfWOFELUrW%2BKYGl68fa4RJpAsBFtuLIkfXc6nWblQSCuIdjd46FEIHwZvXIDIz09NPb4jK99TC%2BLlV4OTJspnSeKyYpA4w6p%2Fck7M1MlJUSPVGa9TniwT3UIqNh%2BT52OyyXV%2B0lJZo3hJAWrY%2BSzgUMzttEzXvpFVgT4w5%2FjwqLXvp2T425AIRDAw6%2Be5vMNXV5r8GOqUBDW%2F%2BTdFEHIx1m9mGmRfSogDdpUTwqL%2FO4Fm8DCJLgWgMieVtGAZMdYG2uMrXu%2BI%2FE5kRUlYFdZvTzrt%2FTnTVI4DM%2FYe5FEuzmpzz0oDMZivQOqroJWnx5klaY4iPK06LuiujM7tE5JuI3vOOLxOZnYQ53FxmH57qdXMkPQrK0lodmxGII672CFXxGBqiNw8Q521Ea5CHmSMTBEx7EAosi5zwbOam&X-Amz-Signature=a02cb88e5739ce913ddcb1ef480716ad73b9bc1e0fa5555caaab647926c2c3be&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
