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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HT3GTXV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCrvCS1iAHqduvd9lpFpayWbMJQV1qVi5o6tn3nNN6ySQIhAMqfXXYqtT5ztgYCN2Rxi3WuQoZunuYg2dY6bQVNpJS0KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshZyrrDKfxGeZc6wq3AOMwkbionX9YmzaFmOXLMJKIODKwKWY5dh0DVY1PHYkCRKeXbsTnAZiOzjq5cW0Y4ei1YT3noj6gTsTWwaUebeaAmU%2FCSdE6u5GrH8yAf9asWv8eKpX2SkJEDNNR0mW1SrCFaIswMdjkwDGTYg0KjQZCbKJ1xxC7KHkMolzHbPAsR8YXhFt1bRe%2BNKRtC183bOLKLuircK1A%2FmWmoOBITNPGDSDs0%2FYhzEYox2E0FRPXB9x2J280BupfdNJ6ZYXs390Ntu9%2BRbmt%2B5Z0YZW7uzAUdVQUhf9xtoQFj25Uwuvh2%2FiG4UWuQBaiCGg2qfR9UEnX3mTEayj9%2FwuB%2FIFqaosn0VP9jMAewOW0ZCZxKjBkGRZbGUwGLZTZLdAX3I54lOY%2FVYuniQx1X0CM8d9mGCAUME0ryqTfoN8Kk7LHp9l7eC5%2BQjK0iCoPsQ8dBP3k1SQySUhlcj8BwX92oeyanSTD85zBCB6drPjUZsH6W5T6AYETYhJd%2Fgb4i%2FXG0n10Aaoiynn4pTaZxmYgH9%2BXS6Za%2FbgWAGHAUQH2zWscha%2F8%2F2T3aL9ieRWCzMsbaZKO%2F%2FkfHF44hPc7ZJjdqwB2yNiM5b7i%2FndsrwskNGU4QRg2mmifcBUYw%2BhAUWD4TDehIDBBjqkAYg1y%2F57koD1tyg2%2F2M1cG46tfBu9Ebi1kxO%2BVw%2BFbGap6A1INiFQ%2BFyEWxaAmLHHp6EtBiEh%2FYY%2Fu9VMhxf%2Bn6kwxzob0U7mqMl23f6be9ra4sT5yojK%2B9D3g%2B01TsGTnL1dXkmw91YzRql0bsLZOkm%2FJp36UmcKyrVr32ugCyxkJ98mr88Ed0apDeg5lddpNQDti7Mm1WpojEqoXvNZC3cVhfg&X-Amz-Signature=5e8ea67374ccfa633591ad44b4543acb76f015055b73d6be50fc3487b6a45241&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OFSDLWF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCn6kXtN8qoXPValvH5pQKden1AsD%2FfhBzvSzP1u3iQLQIger4aiVv3%2FISfBFv8Lb%2BLc0qLPB3eMPgwH5KyuSRNawkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKTruu%2BqPm60Z%2BBpircA52%2FN1WlVh7bF7k4ZqnZZ65MOFs7U%2FZNQCbIbCArbG4Sb1Mio01q1U6TlSPkQS26PlqdSoH7q%2BcLXd%2Bwzwku4zivhDTI4Y0gSMV7q2KWrVMhoiXAsvmi%2FnIpkCKdZFRfAJELBffTc73DgdOTl5J6ou0hEksj%2F8rPANfz4Hyf5coU90bfS02KI%2ByW%2BbMBFV20MfqIt45S%2BwTguBZ6%2FkS8sKv%2FR%2Bk9RUtBFCnhgXXUVShzca73H9yuckyFeVddTaD5pWUSVhl7ouvVa%2FNGDJxdkpelKpnOipPOPutS06QO6KW6h0zoeIilKCA3zETo1kJhRgkNmT0AR5XoYJ%2Fz6gL6Gn574OZDvICpJgKH2yVPhQ16sMTJ%2FDLAnInQJOkLkFEVCfl%2F0cZ2qKsYCRS%2F9j7N3ZGgpRwWPg3K68k1aSIG%2Bh%2B90oJWX7MrQDExVkAzDklNyuKHoJVcCrt9aKTu%2FbKGYqruCxz36Uj1E1P2AbJS4ZGCFju97MS1cEv7Xl5kVSsxX%2BSAy0xZeSGrktEpzopaIuwEv%2FysNoBbaLoZfzp6JNw7PT26p4twiIhMUfFpaJsFywvvOW1G0%2BBzVb%2Bo4yonr6CB86WEGzThNGu2PVU4smLSnls19qoZWfLb6zS2MOSEgMEGOqUBQ6Z5F%2FEWL%2F6jxoRmwGLL0c0tT%2FbRif%2FnxnHfbRpoehvCxqaBh6WuyR6Ii4GZCJwN5y4Pa%2Fyi2AEfrEsKOEyiVJFvUE%2BI%2FH0zlHzJlxDw7l1BRMOS6ZxtyqpKqx2woIXj703kNfSZfrhyKoAVXRbFi3d1%2FcobgQgcmvvncj2MXeAch3LX8wNqgqiJnhRIWgJQTOL5AUmHFbAe0WaeE%2B2dCFduVF%2Fn&X-Amz-Signature=67bb990cff303407af34325de377a2643b3088ecf3b886f6ac0061364d9f08a7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
