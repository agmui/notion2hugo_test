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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF7N7GF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDZzuav%2FEfHzH%2Fdbl5cGGqF4LeTHu%2Fa3ooe7wRMcyRhrQIhAK1y4x1pCYR9oYXcCgSZboDEGpvKbHOb6D6BJmryPbpnKv8DCBoQABoMNjM3NDIzMTgzODA1IgxMcPJiPAT%2BwF1hh4Mq3AMqe0smAXDoiOr7H5kLsK197MYV6%2FvrfcEd9W5vYYGFvGmmNS4pXFtsUGqqycee2N3ljSQBK%2By4hH4cEnf2%2FAAbl2QSGadOs1JTUtqR78fbxaaeY423QoDFgOxmVGbe0cCm%2FrMX861dkzQD7R5T6R0mTDztxgUcWAQ9dMSYow93U7MWOT6aa4UGoDvnO%2B99DZ4CLhWnRkaTnoXb%2FZM%2FZUiV4xeekGcMoD8hJmdUQgDTj9IMO5ClNQW0oWGujxwIV4RVD0gpFfobaYlP1GwHhL3qs8QqUH5Jy8pLbqbu0XyOj4teml1q68mpUu6dal2FGtzv%2Bqn2IxNm5z%2B3VrRsJ%2FN4mXktAaEF%2BTfzbZgDOYW9wHla3NxMPR9DNXlRROa0NBuMuQ5c302Cf54NA5InAOHCq0NoQJuKX%2FQtsHht12CS%2Bw0eJ%2BustbjQraRlXTarjaKrDEwPG4A36aoSWJRYymBfN909u9zH3EQConbVGm6ZlMNjwEkyE7v49MBwUt8UgwkrZh6fkX5CSx9TfOadMq9U8d4UUCBA1%2B5Ffo5wNtRWXwI50ZXD3qPpcTo%2FA6B2qTiaNDTRw%2Bb8JT3AxPNyc4QuC3ZpvohAY9ShR0wc9RryRA%2FzOgSEzvb8XhzgEjCk0vzBBjqkAUYk8l6sHIcqrb4RFgixg6wq8ca%2F9PRJT4h6F2qnpYkAGu4A7Kh2bEfUwnV4p4Sqwxn2yuNOUT8WH37Y4FmtmqW7xHmx4SaHxXrmbmYtS%2FKZX9jxWSDw35V5Eoea4xomKUT6CQO4DBgKPNLjJl52ZtnDvxF9%2BTdJFEWdoffkN3jizEWQJl0P7uoQPTaV2w%2BW0uZ8f7Ldq6FBZvkqPBI7jvR7Y20n&X-Amz-Signature=7c1e3234227741928885dbbd12bef2b8da49800fe3189056a913412998c392ea&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHTR2HT5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAxwXuVKAbg993lknvfgBKsdLpAJ3VbOKGPMWvtHk9PJAiAO4wBwRRagblTY12FULOaOtVtlT%2F0BIK%2Fq1pWbIJl1xCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7yaaKGhAMUYmNl4DKtwDBjrRVl4XX7iYSFSvk9YhMtPNmSwcH9nvRqpTfwPe4IR9Ic3%2BTElciHugfsmVddC2STGyvj2abHqK4XX6iw7Klc50K%2FUE%2FInG8u8LBZKayOujt9dcWnG6wq7mhleQzy38y1m1u7ddXcva5d88ZIuHzk1hj33DQ5ZuBaBemKnINuGSMXrpMLlwfOqLtuWuC0aRzhvGivuCXfJ5vsw6u%2BTrrcJWSc3HSREFcqiynBgbBsZzQUWfTTx4UbiOHuaf22ODJg%2FiJYNwmljdTKLNti9VrtA6EKyhk6urlrkgqyh6DztESL4XLvhK4ydrHP2sO%2FRavIWruX%2BT78aqmVsgBZKNnkCZsp53fVat9OBcEmY0KrNAOQkpzIYSzFfGKZR%2BnWcVX%2Fntv2g5QM9Bi0qHK5rrvTqrmIdqARrq%2BplCO4fXFWyuQPR%2Fk9FXnUaUn2iiZYck2pB4C3hvfjeh5Fm4P6%2FqW8g%2FlBVZm9jDh6YDHHZj43hfsUE0DgLeIEEdqLLi0D786rnNTpxGIM31mYWWSo4hjXZ6A5ANKTCiXhrAzl23G7masjdcOoxXdV%2F9rcvzlIedWVfRwU%2FpcFTtRFulr74flHhk4Vx3mcosjuOMtoankv3MaMwoUnJszMKBqOAw1dL8wQY6pgGBakuwTNr8%2Fh6n%2FiPiVg6DsbYNvQqOvlRt5hIQ7EjOKy4TrExjWh4YQd3zxzJLSeee%2FTsIn6oa6ETPxjNCUVcsLmKobRgui0mcOPpgahIoMDAiF6d990Hb4eqkfd1U93gPCH8vWALgKM%2FRfb%2BXUUf1%2BtymcMKaSBQx7Aps0nbQwPVP2P5yZaICykG%2BpNDL9Gds2RFvMuKlHkEXosyIgjpyuLX%2FDM6A&X-Amz-Signature=924df87a3629ee87e2eb41990cb447b5f5ae83ba1a0c3ff0b68006af931b3c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
