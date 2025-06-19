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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LGVYAL4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV5YtQfDqnQmNtEVcZpvt8wTRV7pwh6e0gkzXH1UJKMgIgJUDnqKFxXF%2F78nZKic4kJEVPlLSM70fJmlAhxHycs8EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCkyfAyZCrHOjb4eyrcA0HzqLHuwdwD12SY3sMMIrMRHnWHJpnzJgiU9rp32y3vuPruAcQ7WHzxHFGsGgkOhQxYyhjJcicNOBJjUQmiwx3nwf%2FMpwsenB%2FoNUPkJHqHa89GesFJpjZXIoDLQMKZzOdgOufNnUm0PvWd9%2FKTwNCCFNFKuGHvez0rwC0KksVfjIazDB1Oeh5OgshlWrNzvFuBtwub7gI091EEJ9bWX8eveUeuNLhBh2KwjhmD2nbmqFrtR97JVq5yOIhU%2FfMQdM8HbPBKorMfSu18g2rCwxYQZB0zg1CSU8AW120dCcQoS0tcak65K92fUFOqzzKbqhxVFY554c3GNzyH5HkI0rp8a%2FQRYDaebufes%2BHvLi1r63Ftzj%2F%2BT1X%2FxxmEnfz8c4sR%2B1qey%2FQB%2Bxun0YhoJuSGu7GyrC3GopQ62mc0UfGOPWccY7%2F4IQm0q2fvSczP8KqC8n8ClFTYrae3zQflNP%2Fhh8UElxVOmr1OSmun0OuG2Q2ioEaA2Jz2h7uftIHErUO4rlskdh3%2BViBqJJdYqPMBr24i0zr4SvONWoDmSjdJQoM6BPsu5v1JZ4fQ40U23USDHbxmTrejGa2BiPrYNj9rPGDq2F7h7q0R1%2BLeHxDbnHv8OYkbFnK0lxoyMLGJ0MIGOqUBHyvCJA1ISpG9I7syeHxA%2BLOyehEzBEBm06ZKz59dBM%2BCbbgA%2FjKZpPaBg7roYFc2r3trYPgl5KWcPOqv1aEtC050nblYZC%2FYXYG15%2B1phYBibzGPG7K2WlnUADLV%2BFz60XXVXVZdKhNEPt6tjQrTXi8nEkaaB%2FZS61EQStkXmOVYNRXrkJeJ9cGnx7qJIQnFarT84RtCZrUeWFZ4lkB4CVMhrEJO&X-Amz-Signature=b3ff8e2ee1746ab62f93fc2e10bbb9174371f99963a63ff0050dce80b797a732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42SEGHU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FOhenWo%2BRYwzpei6v8%2FxGJUHGsPWergbqJKocF%2FglyAiEA0QssnUCrJ8goqPJsqqMt1RaNM7fZku%2BgTRj80X7eeUUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVIeIgwdEdGrnTx8CrcAzGizLNVMM%2BiLMgdw7auZs2KS22fYo%2B7%2BexWQmjX7Tz4tqbB2OfJa3rmLdHj1BDCpFn6XtUsFPZ4Z%2FnwXgob5a8COEo%2FxGO%2FyWicPFZOxEi6TM3vPd05v9frhgvmvG1BAZD8sFPJrsMUqJxqSm0xHceNDx4WrjeP4eqbk1nJryYKCBhwR8iiLdTcQcQ%2FhiW1RXj66s8tguFX1JJzYfkqoZnO4%2BpUF%2FHEwUaUtYeRjKO9WPMFFXwdUfLkSnq1oUeaBEy8ujcBDNNKNiSczLnEK6iAv98LYwBT3GEbSgVcaoRQUqkjWsLnDovJUjsOHzMu4oC4l4jXsSk9bqVUVId6jIh5IVbo%2FpUW%2Byc6ioxXjaDKltHeq4d7DHrgxlujUj%2FstKynXJ00GSSw6m6pc2zO9nMdQT5dtvuVtkprffCfYKQcTyg37gaKE%2FnB%2FP8m14zFIGK%2BKyLjYOTqjZN4YIQbx6NIT7%2BthVStqU8ariPVzzhpWLwBVLVXnaucf9OeUZ35EZGeX1tDhXwI9PQhDq2ybIUa7U%2FPuTFVoKefu8HyH9OMsWMcE2EFjcU0OzHbfZzX1nhmfHJYvwisJksUHdGEKDb6ACanbOX57MAX8WFaz3Bci55ztpPC6OYPnk5cMIOJ0MIGOqUBxabMQ8OBXNZzhTiMZAKpWxf%2BE6wmD9WqrjJOkZtGoXMkOgz3B6TJXzZQeWZA%2F%2FP7w5io7fF8YKFik%2FPrqDxdbhmDeAhX%2FkUBi15A7lG9h%2Bf4jeKeJy0p3xR3rY8IJUxfRDyEFvFUohAVL6tAKT2IjbmYBlxdUoOE9NMCfTGkIWlKRrTxSxdpaJAb51T%2BgAkKYpUkz0PKhw8lowSb2FRHry%2FUm66e&X-Amz-Signature=3b47aa9bde009f55b6e964840e6af5f5dc992e538473793eec3c3d8aba004115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
