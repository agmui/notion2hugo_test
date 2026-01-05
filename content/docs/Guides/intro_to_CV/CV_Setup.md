---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3QGGX7Q%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDzK0NZ1UK0uxNrICHcAczcNcy8D0M02%2BwnqZtk7CVMHQIhAIZH6nIXlPseOxyAkuucs2iiNvGTuTJNjHLlbo1AYmF%2FKv8DCDkQABoMNjM3NDIzMTgzODA1Igyt4ZKUAEYSxgECdjkq3ANLksetQdcHtkemEpR0tAd%2Fk5JBq0%2FSWk9Cf7942%2BUfYK4SfpXQiFtViuvBrNnVpAv6YKu4jA3bLLir1DqqoaeExuACzM2QaIYmr1KBRfeo4VJEU9LwPx7lujn6shaKsjXB0VmjkwJepmBdcc7dYa%2BkcLqtuTz%2BE7o5zwktMT%2BA2TOAAu3m9N3h6v4a%2Brae%2BntQMtSylAHZ3Q%2BSl7cWMN2faRbNu4mvfqOuLi9kxkqcHjHV1AaemhjYgUCIJhjyNt6EbxhVktxYTNCpe3lL2MbLw13iG%2F9zBvLCJssL4qTtIfEU9VIJQKr%2Ba%2BfIDLS7JK4MERGrZgxKW79Y8oexnTuP9cVVtmbD%2FJnEF5CCN5yicLSxbcEp%2BX3HjL6Xl8wMnt5KurcIy36pwp0mW71U09gMa3kfkKjJbKpO1j9p8bii%2BykfiCEghkzS6QP1kJ4MDnSDXKXKa4FPHyuBxz%2F6l3U0A1zshnxlWTRmZHHmiziACDlLaWOSOfzbpM3XJ7WMNNVBX9YZMlvPEikV4zXa0zQry3KgSk1XLb4%2BM%2BZ4lFC00FZQKgpdd4rEV67ZuYxQJayqBX%2FJL2NQ1aFrYKuIsyIhRzFWNZdEz27g6XTbdppgKN2ajesYkTxuNUGuPDCKhuzKBjqkAU%2BR3L%2BJ7kfT%2FdzMgj1bexq9HLRr%2B0EAgSKfOpFbbBu%2BTJpY7T%2B0ODQz5du9bQZKYIRLtTit5B1kHbZFftXqv6LkgXDOGGbJNtAGZ1FQVbAKWyC1YsaqKNCt0Km1y3C2NZ%2FTLijsCcwQGq5epQ6qL3suYfWyfSVAtveNvsryIOb76cn47pe0pAlGEUVTiTmvbt8sLmpw5Z%2Fdha5Cd3%2FuKes8RH9%2F&X-Amz-Signature=57fcff171ca530d42283b250e3f71f2bc49b3d59460c63eda904ed70933146af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6EU7BE%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC354rSA%2BRCMKs%2FhGEu0euqe3uON2LCprkuCtVv1hh4DAIhAO%2FAEEWwfgj3WAfPZ%2BYroV5sJJ9%2FNhNUPesHUk2hQOzJKv8DCDkQABoMNjM3NDIzMTgzODA1IgwG2OAhmDF2oZlHpIEq3AOlOGBNhv7RKlev%2F7fhLHhFjXFwyFv%2BZDezgViq9Stm5ucm4h%2Br%2Bc70ndfRW7zR%2BtTVRtfEmlR1TMDaAPlxG3%2FZHdbLsYDqp0M%2FONpCBhhsp9bd4JqO6EsYN1AkrMHAXbTetnHSytmHZsLSjQb9WLSlQQbOxwMK2BN4kanBMewXhmqf2b5Kw72LQum2BF9AMm6VpwdZMLu7BRvoAjG3LMmL9pl0ol36THDAWK%2Fb6OyVivw0sv16lf3Mn6AuQWiQrA6V5b5w3O8IW3W%2B0MsEwT9t2vWo%2FdfJ6nRoH88JGnaG8EZtJa6mQn6VAdxXE4mpo8gcTxfuMp575OOsMDlN4eWHYWbeigYyv%2F6wHD2TVb1TpKSmYPLndTI9RQMff0fF0T2WQyMMwiR110UY%2FUFP0SOG%2FwT9CKcviC3FPa49CnD6PbEEK%2FTqDHknSd%2BAgvnBkETRhtcSpDLZmdARM0xZalU%2B5aFNAz0Afhs7jH%2FbslYJOPJIoegQmW3SPYvV7o4pw3wRIFcpIAuLKb66tlvD5csQNFYmb2Brus3UbAFG4uZDjXCrGwyztV%2F1k2g5xgl3QSb9MqCVmfUbkQ7Rz0Pq1fVrnUpmTMyIl%2FBx6KSt8k26O%2F0pTyxr3ZyOv2HC%2BjDa%2BOvKBjqkAaX0b%2BAB%2BwlX3b2JW4dWVSGgcYPbHLJ8l33H8UrADC%2F%2B3e52dSvgIovJfUyJuWmRYUUcd6VuQ0YNfyTbe0ijD4etm47A4R6BZM29rr%2BT%2Bd%2BvpsHnMoQyuR9rIN6%2F4zxltkIyQTlPgUmtQUcION0Mkz9ZIRayr%2F%2Fno0fyZire9TKaBNxL8S5iVlSBSYBXMkJ1YICpV6nYxXTICfCeBV7aNY2mE4yY&X-Amz-Signature=4aaf31e9673df8ebcc72577187a9f4305a50b5058aaa9b793c0a1dedfa9694c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
