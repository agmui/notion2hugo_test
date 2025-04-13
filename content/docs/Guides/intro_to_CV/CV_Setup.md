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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXGQHMY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDc25bL6bN8%2BbEmrrnQSETqfWR3kAYVVWPB3sW0Peq5kwIgaPOAFSJ5pBctpOm%2BfNI78ZAu6z8x5lAXihD3JBwM8K4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrKbovoKKUZ0LDd4ircAxEfz%2BEIVxSx8Vtxb9IxjcwDXAPqGTMX3Ir6nq0fqfW6FXP9SNeCMgWrRSVvWq7KChGNtydapuZt0%2FmUqGoZrYsxMmtm7%2BplSoU2vXp4v8Op3XEJ0%2BQWPCCl0xGbD%2BXv77Lr6JmsEdh8b86lJxBqro1azqoOKbyAGTbpEHiLXgQ%2FbFrgfgaQC6fyIesoW%2FqPe7VNLn9g8DZRQsKgWfBRtHW1P%2BpsN1BP5PY7WCiS74prYVnR%2BfGQ7BGlq4wFEt%2B6WT6x535uXH7hm4ATQMdoPeI3k%2FG2cjm7rFWQ3al0PlFZI2A8IQGh%2BVHdwTUg6UPPezVNTfjIH1dOIKKqDzm3snDxy9F5SktA4cipguKEgUcoVMtRn6X4ST6%2BX9i6Hb0PW01BBTKIRC8rsCgJTn5Dlg%2B9NdZKwTXObzbgCi8D5ya7bFK%2F9btPMWHLq0ZFcgXznPVqurQB61XhMSXXwCJY%2Fwv%2B469OP9E%2B9taEa4tGtp8jLidwb2Y85LtF5HvEBzGwQDJz9EDxL47OBgGqCrxrOQVZlbw6RUC05HOLNA4zgatMcQR3kzY2WojM6x%2BCwtuGF%2BI6WZp1twIUvTrDHRWZP1GXDwTgH4QdoG0KexbHKmjlKI8BQxJMK%2Bpc3iYPMI2K7r8GOqUB6yuWWzBLUXEYJQY1PpuMbmB1J9%2B6WE0j0DJLHL5USg9ZgFn1DL%2F93zXNe4FwdmgABmHU47MRjDGwzOfM0AqimbX%2F%2BuzX%2FMoeXqgS%2FmQIoQJQOssm1YjvFrU7DMvfvPv%2FdNSeq1QqRhSwVsY8YoguaJlrVAhg%2FDpBwYYbl2pCkT5bp3nmb4RMBZ%2Bkd306FF1srv7ddyx9Tl7%2BIxqiWQXkxESi%2BYgy&X-Amz-Signature=f025839396e6e61dc236cbb4aeecf938d3212049e65e5494e0d839a13d5d5849&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IRRUI2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDJHIxiqewWgn2NQr2zmSL5C5KX559gh7w0mnGFvpHMdgIhANMPof0Z6IZhdlemLfS%2FL%2BOnkX574Mng2zFnUYacq2H5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB0cU3ZqTpEqFqoUkq3AN5hUfFmRGGXQTbZujgNu0JDfuqZa0EiTFIhMdSu9WqgKC2HIyZcQcKI3EtMB%2F9oflbApjEnt09NJh4N0QIb%2BntQIHWSV4qeetnv7%2FWP3qk29sOPYgHhTEqnd%2F17b4wfCA8U4mfn%2BQ7mvf3wOw%2FTiOMddcV%2BO6%2BEm7qXdApiUZgZReMSUfFYzeH2D82%2BFvblQvYbk0rLHCS6xJoUevfg6zTQzDlO2Ck3vJ3vpZK7Le9wI54TzFYdL40PBzKxbHTt0rJN2562gAB0BF7zipvwAWXVrk5V4ev6AobguFlPnNefN%2FJWisYnoNaipWcxRvBBW4BWvtRRIhuKTzSr9R0P%2BSwhd9SpOeFQCP5eXR6qxvKsGH7z89%2FkvrDP4fRqVOuu6LbC3mDHaSFA2zPXZn0sSPrLth5zAV3IhgGZ6GmXBh4OhbUvRqdCbY0HpVg43AfPCdq5Tuczx1BIjR1%2B5IGvtu%2FE%2BTXlgdM08K%2B1nPxHxA0nhe6XnUoy7p0BP0jNHZFly4gQhAtAcSIIbUxEeM5LPhbA6LvzGfDuADp6c7%2FN1s1YNnTQcsHDGRN5HbWgRprRFjT549ElGJG2vd5gpWDgJ%2FGrsGcAtAzIib%2FXH5bAclPI2b6x6CJKKfoyUATazDliO6%2FBjqkAVwA71iouzdieWuRtqVzXRuqOkpa4W59TWoGXLXGPXnPazqbVPVVg2c2KfYSt%2BBisFC81ZdDqta%2FcM6C%2BLaAP%2F4yZFiymTFt52vcZptJ8ScbuJ6vcMJ%2BgkXYdBNZb7mcSUBAvb5MamgciRkWDuo1mGqMKlD0cJkIFmV0DV%2Bkq0x3zPzkcgaN3bbjJhVK4RvT%2FwPh0SJ20pUlfu0uQwB8VV%2Bi0Ybw&X-Amz-Signature=feb9d7ddbaa95ccc2ba045125e47f580128dec964490f3b9dcd7071d14f42144&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
