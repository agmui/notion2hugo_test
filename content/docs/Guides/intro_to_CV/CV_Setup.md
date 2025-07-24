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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPANELM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICNLAIijO0udfVIt10aCdR60RsohgKn7eed5ueFQT28UAiEA%2FF80tWYHbk%2B88frpckZRL1hsDGWROMVdaEArA4NdNC0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDO8Ja3ndWoB9rVItBCrcA9cmGK3WWRk0LF5j45QDov1OD44HX7v%2F65OngOEU2wFVI50SMbtD%2FCaXPTc%2FmaqapGMfFXGTjfLtLco9BKFB1fCfs2n1%2BaUQt5sZp4yS8V0xKDBy9X802c84GxWKDkhlldxgc3tg973%2FGIm59%2B8nW8QHMeKLydbDeVs57eyCCn3uFFxvJ7L7niFkwtJxgf9SFch8%2BrKjy7fg%2FCGYSWXplXdgOFoHjvgKzZn%2FJtDsc0og3ewunpuUecFQqFD4qJdCPWLoFsx7LgBSm04LlMCji6E33LuBr8mTjlAm4jO3feSb%2FZ5qQHnaCPOBhPJk25NeJnFreRBigsNJOFA8m%2BOQXSFblyK%2BDe9YmI7s4asoDCyxUj%2BZ5TiUU5kAPB0DxN04Sl30Ddhel8OBrGRgnW02yI9YBkf1JMbayWzS7yAXDm5mvMJvNYWEwh7XENIRv8pZrXK9%2FHFF3mnjDiM81dvrC82Vvfvknu7711Ox4ZoY2ezcXQM5coka22Vqrb%2FpMaOFAtSOP6BrzzoRDaHLqjT6FelvubyWn1xoFNZ7lAHKIq7w4SdL58%2FPux1BwmLoaudP%2BCcMmFAze9JdCAjxN59CjGnnth9pDpxm90fNS9GTcVFzf%2BDDs6z%2FguNFz93WMP%2B1iMQGOqUBUVaMz8oDzDv9Zjy1CViPiP7yErOU9igzi79e2vlS4%2BahNXTw%2FWULrfCnUk1kbsEUnUjUAmqNUHG6WVOUs5E%2BdurbcTRecCzLp4Er9KhbtHFPzjl8bubL4m9DN63Dc%2F3tRXbmwiKqM3WVT8rUUiESzOdG5LukTpL%2BY2gN7oMGrxReYaSKYJFg5hFEALfErsjA0WcedYPs6PTLDUIzIiTmlPQdg%2Fmr&X-Amz-Signature=694a5983c07aaca2ce91e615eac8648ae213d3ef5c5f1954b877b1dbd1eaaa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYYC3K7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCp2G%2BNsb%2BUtBcPI1TvvYIIkr8lFE45PXQ2kY1L8on47QIhAMl6IJXdhlN36nZRdDzzz%2BwKTA3vCXNjqrbUyUUPcJDpKv8DCC0QABoMNjM3NDIzMTgzODA1Igzi3gPaeDJGVscZn7kq3AME1zTqeE2x8uJIPvZe%2BOZcsf3hjg2CviKVgH9okVlB4az8sodHxqU5WvKDOU%2FAGLFEMMoAgbKg7ZeiK9dlB0y8cs2OEDBEH%2F1UrytToBjW%2BFQf67hgrZSxRiWfWVMDUUq8%2FhlajFEZ88DV3L1VpWP3T5JBCS17PNHafbbgGG6lvBI4tRsMp9jPiFOxcBUXJlJ3uXv%2Fb%2FJDh%2F%2FU%2FJBh%2F51A0CZAKdWP2PrYp%2FsH4zdzEfRo0wURyoghejvyP%2FqG6YTSALwkkBzMBU4xfHfdLoEZK2TRHIj5k1bmEheYI2xUYGBHK8N8l9zlgstxdZaLJkh8Nn9%2BewfIeG25aSUa%2BFDMhUYzaDCJaSi51857ze3Bb3IGGqdiYnpT5WTbu3AUKAr2ngXNeI2QqpFLn6mg9Ox%2BBMMPkxhxWsjWeLhaYQH4J9KkdnVEfRfIswjwhsz4tmWXsHIebwnU7V6hLczxsUyumLJbK1RaBb%2BQDj9vDSJOo3D3hzG3%2FSuZcapv1pv20Yh3d7ZttEiieIvzI5gHLlr6DggLm%2BBtabU%2FfNT83RiB2TlZs2Y%2BDj%2Bdh%2FfRjCyArHfwg2VRQw38vcA9wU%2BAj7ZzVj7ax6%2B5Nlqw6uje20peligRPDcSgWVCsxv5JzCltojEBjqkAVDKOPzBk5yY6Mu9uZlLYM08639OVs%2Br8XmYLfqQW6GelljAM9lUA6KoItz7VhwK%2BMjKc7CF09YkBkSiLWJ8RjvKLA6TkG%2BJQ%2BKBSNvNrzjJx5niMMtlcfFW81btBgBWdM%2Bi9BYVkqbjijqswxWER3ZDxL7jKT4w4SDofPKaCYBiuStIrJiXciQd5QQsZ%2FEbtL4FFyEvbUVaku7uSQTCNMBBymfG&X-Amz-Signature=1fd056b908f5b45a3cc10220ddf95495bf117b6a2e5592d26dbf2ca6b22e1681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
