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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6MXSDR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bq5cBwpDIC9QKLV%2Buh8n5cydgEBwN%2BPwNYXbum9%2BLuAiEAyvoZiacUAUQ3KT1qTv7TZsJAVKiC%2FL3T6lV4x%2BOVwSQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN7Yf52EdG6Au0qvNyrcA61uVR6nTYWXtGkDe2vWgLcieE0y1qmJUssHXjYSBIEM9DtBlNYgLD5ghieSU3Z3RD7Y%2BW8dKs%2FpEy1vYMuiEk3iswQ68QKXfVaJHpC4gd238oEcdwnC9YcqoG%2BCazx0tn%2BGHwy2o0bsaryvSSC4D7m7L7f4xLWVKePMiOS4XLjZHUC6kQ69FgWW%2FkbeoPAZ01A9RecLNWX3W3%2F8Qq1e2g3RYsvfiZ3dhobDzGnlkuhxqHFDSycGm0UaDDgJ4ilikCJmei8%2Bu79sWovcZ7UHe83%2Fo3d9WuzWH08SN3K8CbP203Rc6UIYgRAEbcXnTTkHfoNxFXq5%2F6Jwd7UXAGcagOVlULWTq%2F8S%2BWA%2BszdPvJQkH2MBfTJd%2F5osoEQgD3FRgRL13jTY9SeMWy%2B1N3KE6%2FOsecPSq2VqEIfJ%2F%2Fxt8zRUvRSaf5eiAZDXg4SYbScAfHaNmM4CIM3%2B3PMLqe41eQdKWfaHwAeq1ss5AQQ%2FJu9JmUkfxlhPDTdkPZYQTmts3ImMNT%2FG9qUzEfUEb65724iNaRViZn4JVf0EF%2FcTVioCQimemOdmaT8TFsy00RxGMm9duPWoB6s5XtEVJ4YU6dxKXERFI7fEL3pxZjCAUIPTpReylnkahMCz1qdtMJy0xsIGOqUBAQklNIAMVNCRq07z4CKlo%2BAkIdbK810V996EhwSZY6Jk%2FQ66Oh7F85sxg2RI897A3%2BmbE9vKRvzy%2FNnnGafQkuXqT3dBHpMLds%2FvTRVy6pSKhMSp9fgJKgIvtbAnPRnb4di%2B%2BLLfzNYrcKQWU0w4NkDUsGwsm2mIK6795PMifIyVYO%2FiMhQUeFDmUyQHxrufD8wJiOsWH60dil5rboSFh8AdQWXF&X-Amz-Signature=ed239d636f7810766db4ee433e23b22a57fd22749fcfd50f8bd6aa7dd1f203c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBPRPJY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNs8AY7MhsAh0T9qwOdaLagA%2BbHxCyK7O2%2FjkR0oE2hAIhAMFbdMPxiL9nz3Wt9EYUWbaJcXky1kPQpdKqiP5efecQKv8DCHoQABoMNjM3NDIzMTgzODA1Igxx6awNrSWhB%2BydEM8q3ANY3QVtzt%2Bj2ToLLoDZ1rzft5MjBdsGFK5wxrbP0QgZ49uZH98Y1PUXhzukA7oV1yk%2B4VIKEAk3Y2KrmQSL5oo6Rqhqx%2Bx0Ow6syA1srNorJgQ0J%2BSShjDI2gvsL7UK9HXeLRCKovIuoxv0UWth51%2BowCBejecaymPYuXL2YYUYQC%2Fm%2BUVUyEs7Ma%2BsNra%2F4VI%2BKQnHn%2BrZVClYg7yoRXu4EdAoIFxwCt%2B3UgBcakElPryB1IM9nXML8BUgwBzAORLw0D7dn5ICq%2FPN%2BKCz2o0mETzG3cSIyUvuYwZVyj995gCOhzxakmW71CUHCe9wIN8iGCfRmho3C9ljujRf4dcfE%2FP9EZxrznpoNrdt0Gu6xv%2F7y5tWSYFjdEtVQh1pdINpElAR06Z0aaGBR2leY9HIJslAQvrfvlOVngDehcoeJX8eYlMwZAQq3tk5kzmuSpWjkkRIrs0lwkMj8kMfCcLXBISmkJ9p2tHEaJfA9QjEKX%2BsG1p0%2B8MmkucTUoF2cpbxN%2BF8pW6XrtNhbOtgqI7Jz1iKCUajqHOT0jMJ70yYT8lZxkvZ4PIY80RqOPmMPuBNfkOytvqSDqakOeS5MrI%2FQ%2Byfq7ZSPYGEYLtkNpmaooVeKsitiaHhjCOHGTCctMbCBjqkAa1fhJU9P9NqqXX9g2b%2FBIyqyZNDq30r0TeUTGE97UbzADD2lKIPcxsFKaqdeYPdFPVcBh%2BP8t5YS64IYn0j8iM1mb398MkWHz6O6y%2Bp%2Fb8KGe6syIPu1b1yncRttgkFcay37EBSF6WF9tP1GOhlHaDy%2FuiQZlt1PBQRsigW57%2B%2F0l9uXUu32IIGOMAaKh2DopO2Y8wITj6N2VRd%2FK0Tz6SL56ua&X-Amz-Signature=8812fae7d0dca808b552033e311978b8d5d5b18431dba9d2fd75f486d957e646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
