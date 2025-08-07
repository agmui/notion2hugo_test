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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BBLT3E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbYA2lljArur2dFw5UDO8%2FqAOF%2BPyminoX4HwiteGYCQIhAP3%2Bx05C4LRCJe8FMbDDBl%2B9uqQWHQoRgf%2BRaTd9xRthKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB0M7v7KbImgXK9Ooq3AMEdXfSDkcMQ83ePqx3XjrJD25fn%2BgTPuVcLARuwZxfsdLnjp1FVxMpRJsQk6TCsKP9V5fumQdWYfY6CM2GPL1P9fmOakdFFcPDrrF0ZLS6C3hiZO%2Bop%2Bd2lzZaY839h1AeNry62M9pa4RG8edbe%2FgIhC7NBsHyqd5yTEK4c3onLpx8dEv0A0JMBMtcaD87Ys7VhwTJUEjYrSFjlrFm5pzSX4wsVsPieaT1Xgt8mVUju%2BtZQFo%2Boz5UBn5zejgIBbd%2FgPgdLHActFz97ZeqPgQPwMa442UDgOXh5v0eOiDij2DvBLve8LFHAjDpzL4smZGuzLc8FGfKKYQhJg4nCM%2BCfFt%2B9zlVln36UAzRzbsTnMluzhQ2adbcm4wqchkcQqp9jrVfVZEzlnYDgQy5pwVze9sIc7sTbZ2B7od0%2F5%2FqyUOfCcPu%2F%2BQdgNbJDLJrnBiP0oyNN3nXdQEMPM86qVMC7McLH2Q7vszf%2ByZeD%2BpBuzqdYfW%2FRCdlikmE5zuhFRP7Bb25YebCX8o5XToSYmkfNjLZRmL2md0PiLDI8YYMU12hXRNeZ1gjWDBTeUsQ1AVLo9vJFdXfSenxUoZWDbQJ7tPlAJt3ilKDkzznsA2zA21pEdZDEVUDp7N4dzDg7tPEBjqkAYZguLaSMh3atfvmKuel0lXLVWraGNGN7D29Mti88cT6%2F%2FmLyUxCT19lLumeIvSiT%2BTZYxGXgkg5ldUunTu%2BK15prFOUaBOjB%2BW974dpurTOydxN3PSdqCjVyGBfnsiUEHDAbvbiy6RAcVDZRIkWPeF6qo81mX29GRIDPZmJXGS8gNGbgOQ0aZ5LYpoxrWQYhDCxyPb%2BjLGH9Dq6%2FzZBftKn4O6v&X-Amz-Signature=5f5b5f3df3574a6764ba67ea70fe4c6571c2c1261126666f5ddce25ff3c2f505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYZZ4OF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD%2FbiQeShmICnmK64aFQjF6Fw0TFRhPK1A8jXddatuyDQIhAMSvS8PRbDhfqy%2F%2BjAsqNqxa08xut%2FA6Mth2oeDFJl7aKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB64zbYOaTNYM500Aq3AMEBB92c37jpjUcd%2BMQXDoMOism4vRYxqkY8nMnGGv0CPWqy9aHuv86lh3MughjX2G5KL4W1tUlocJIlC7ouMkeXI5Wjy4vKqOyTEU8JeXO37%2FV3fUZ2d50TqJONQu1BzT9Mmmx80oZv1BfVDHmzeePCzrWRtppp6mtVsNvJfRRrNScWQ63DbgoWBBlmhXEdAaUeKAHfQYcOUGDGLPEgDwhcn18IX20TIPJB4VO%2FeFOygjLlNuuE1jWIGaPMfTsu04myhhXhCNTps0g23V3MjhBJl1C0j6VPigiWjw1pm7l%2FnZzqsWxTlVc5YDYsO%2Fz8%2Beyu7hOQmc2TcraYAVUpuv4SDw4zolGeWqVUjv5hgDz4kUv%2Fv9l4aYetZet686JcHfTaKrZAvJEiQ2xd7t0EpXwCJArDV3kPkB93NFWKhAkCpifOcI8nM50mmzQTkDx6UmHXW448jpqD%2Fd3sbfA6hBpQRXgoKPGMVUr6jN%2F4v1RY%2FDqsD9YX3VluhD5joW7LLLvodWqA6ojH0%2Fz26kECQt4ClroAAJF2aBlXxAuhjqZ79YH%2FEqCDuWSu%2Bv001BSGqvSDTTg%2FtPuqT7s3hXj1P%2BHf8CU7OQdJd9E0QlO%2BLW24l%2BIdfAXX%2FXbokEnejCc7tPEBjqkAY%2BidWzp7aam3AnkGz84FvA%2FueeJ%2BlJCYsPl22SLnC%2FfQBTgzqNZHveVHGczqkhk2fipqEUATSycQrBQ2b3Y10ni3FRWwZ4Nff6cHUzR9xlGit5Bn73yaBv5wfsuiZ19d8%2BGKp7uXSnNksazq6t51MS7gYKEcp9%2FQyy02HcdwrUPB4UU5KxG1wIvf3Ohscfe%2FF2lLONs4KMgvqNsRKnbZEqnliTH&X-Amz-Signature=56528433f208b022cd07e02e60c8f61436d75c51826c097f75fc13c1e8af09c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
