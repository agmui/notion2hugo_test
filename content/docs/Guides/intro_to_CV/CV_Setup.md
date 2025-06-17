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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6V2D6XQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3GpoT%2BUrB8vWiY1dIOPiV6PtjdWoyUtMdyWTFBDJo2AiBA1asiUDZuIcDqlM35xHuklrFkfRLQ4PrPoxILU%2BkIQyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKySoLVRIVKE6IlwxKtwDbRKMh3wOAa%2FUQ%2Bpb7oSNV%2BSqnv1IjOKlQVu5smlYfg6si13rI5J7DZV6%2Bzehv8WK%2BXzYeGbALKFKO67CidjEDR2ej1KUNaEJOmq2%2Bq0slANWVG5GtoSbTvmxqFlHTwa2VWZMnW2tl%2BJqIIxXIHtN9jiGbaeiunnBUJfQYGjPmQSjm%2BmQ16UZ5eU%2B3MllpcDe8aKTTDg4aB90os0NLLQ3Kx7jL8J1ZYmiXYGbv9MMB5ifZn0L4Mz0FYViyRru7sYdGSIQCldFvzTalZ%2BnbVnBl6yy106dtX%2FhPVmai1V8cqrqtFvcWM28%2BkPzJSalszL2Ksy2mDffcZerGakzflOt1LOyyMSRfIYJnc%2ByMNeDYp2afc3LnG9w7355S7Wd%2B4yzczGw80RtRnw1qCCLilOrBt7w8O5jUYK6oVTymmiPxvFaNKxxFolB7whyYFOTxL9P2V4k0n1pw06QyV%2Fz2UaJgtacT54QgCBjPmVv0nAwGzIdtX1CFLhH4SJra1TnGNPSDi5NuPasDVvUD%2FRSYz%2FQAXaTpAxx6DNLYB2noQBm3XnnUSFOU2zGFT3pM8QMUHBr0a483Y5Fv7REfF3CXA8IWRza0XO2SoWKQ5%2Bk2TaGH3w%2B4gY0aNLHO7EmTBwwzqbFwgY6pgHtIXMyHBjcNGaYSbynjepFn7gd9YJSdd4RTZjyNDjcb%2FJNQZPp%2B4ftdJXRx62nx%2BHQsS5kCoJo9Ai%2FABGU%2FuR1r9rL8namfRR%2BTNQeW0Ce9mO1xqJ3kdHMpZRwYiOnHqblmlOApUXSTpBsiVWgvXDGZ6Xrmc4sFv2o9i9A91BdKLeIuJsg%2F7qN%2BBXXD3%2BXJk9igzH4RO0%2Fpt%2FsMtXsDyQKh3xw65Vu&X-Amz-Signature=26087cec4a2e958ff7f5224632fac47c68632ee558534c3983e8948a142a109b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UX2BEXD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2mYauzJ4FHp8V1Uv1oBcBnOwifT9m56PXC68lV98%2B1AiEAtt2J3BGYhoY4Nasow9a8LTXanMbdUFydltNZ6wyYlK0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2BfA78nFAmCySLVCCrcA7h0IfU3NIMgbEZ%2BnaRehEB4jtHb07pFRqppAHGcSUM3ELaS1BOnQ5EpMHBYcc%2FsjNnCepcQvbzZxpqEVxshyABlmLqKNnujM11z0aK31lIU4lFBOH4Tzza5OnjJ0q224oL%2F6Dj5RfgLVB%2FB9PYPGK9vgzi%2Fu89Ucswj6Omd%2F66k9br53X2HwsLBcGAEjVoFmpq%2F4ipJae3KRaprqI5CH%2FYFBz0a362krqKbAye22stBSot2SaMS2GabyJ5OVsDg3l1lUca6UM2JIp14aG%2FsUoV9ISYr0zy8qhk1kUq7sKxavTbiDAhJiMKVYRXsKsvw%2BYY%2F%2FK8ccr%2BnkhczSX4zottbgBNv%2Bp%2BDw3wLOXcINC1dFAY3aai4lTt9uLiGOHqg%2BFJ5Fq5TGE9aYIBv1MdjkmAeB3WnZGg3WvhG3PqwJPoVdNfQVZt8XdssaHZ01%2FkbdvGqIRNjgrs0LVtTRNNzxk3BCX%2B%2BTm15GBVmJRy6ydPaLKx6v%2FTkldQ8bkVPazjk%2B%2FDstVVkvEudpX5JzSpg3%2FF960Fl3oCvnKnnTxu42x%2FC6jztapBKftQILJLSZQ2iLza%2Fzd%2BkkC8dnU04vFP%2BSVzuipkevVuJ%2BoyuU09WYSvTiSkGUrsLy9EX8mSaMNymxcIGOqUBLpyYlQ37%2FXGIzLG1HUf7L4PTC3BsVYDZfkrLAztsBixgrfToWVbjeT2JmHA61%2B3DvLq5L88MdvHBhXBNB2%2BRmqEYeJufrPjbTYdVkRQjlkFPFbTjOHfWToP%2FIlHYXMaiwX1aB4jBVYL7ozt6QScYH7ddhll5j5B3ZSJWO9NM3oMCCdD5VlgLjITtl7X9YAUsUIeRdH4FR7UStxhduM6aYdpD8L9v&X-Amz-Signature=f4be7861af341842835f8d9a75ca7e025b2b508b9f46097cdcb8fe17622f2df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
