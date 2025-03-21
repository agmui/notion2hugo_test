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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMM6PFM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCpZx6qwS%2BR7GZ7LzAZkKkFrpabOEltPpO60vYX3boMUwIhAIGSyAXN9vjYmt08Jjsz4hH0adzUGiYlHW2VloPDT9gJKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhrN4xDYYJdvxxBb0q3APknooeasPmbdn2nCfqEjFK2rqaYx%2B6XMcVTx7FJkRJkmomC4FQ6vK2XTw38F7F78lV034Iv0X6qR89yvQTs%2BNckAso4N8TpYe%2BarDzGy7hWXeXnbPJ%2Fc0fEbz6SzMtTjUpGTg%2B9DX0jmYvIBtpyv8XzN16ENwGGBd8u6yQtVuYdoFIpkezEUvhl6r5yCvXDy2gDUmuSm2lHnrA6jXNCDhH8YQn8xL9jIsVvRk%2BjZ04e4GA2RIqnu0GyMndGVU3USX33bq0tEBW19PbA8PavPzX2%2FY%2Bi9eKGX2Objl0ngKeA9nI9yJ3MYSPdzUV5DTe5wN7vA4NO5BhRAXqP833SVtlukPS58oO2kZtlepGPjQ8dWD0ZlzEi5WyJRIm1AexggUTZ4yxVYWbk0LCYjXQgGjXM3D9BqAGk2J9eQnWIKsrH5xlng4vi8gMcmi2juEheHa%2BswYmaWJRnLJqs9FEFbILvr4SlCGVGUj1vVVPQFjwzhE3i7ypDmaA7o5NR23P4BBorvTFCWIPJXu7klFD1%2BhMyH16IUpNd7iYVEsEq62SeR3jx5EevH5vfhBWWIR2FxDC6fJ4XdpvYrvazJ7%2F7HPuYLc%2BL6DDIuQaoXjJqbB%2B%2Fr4QcTceC7WeCE%2F4DTDT%2B%2FW%2BBjqkAXI7pNNgQW9IoAh%2FPNocg31rDGLzsZGYlMAKHRfyhkxzCwa3J5rKp8lkZqPddPavOWVWLGgE7btc9ZhFSM8m2Cz%2BlCBCjxln0wLRyea90O4ltg%2FaiHeWKWWqto1zcl8t%2Fz3VrJZ%2F2J3MaazULtKDsv67viIE%2F6SV6MWBM4IPQ1b4OMhcPkaNKi%2Bu9HBk%2FSprbnbsRpHbO5N%2Fe7sSgVRcbkrCgZD2&X-Amz-Signature=f709b204e43a8240aa5a3f76c5613f891b07e29b6671d1aff474281770a5663d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3CFWLN%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBs48SvDrNGzrQj8ejv%2BA2WZS933XnBaouINiNjSEelvAiA2GVtG4L7BQZLIPIm6ksfzg4WNCmMybWdhgXkPu5ff7yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4eErrsWs%2FZ2N0IMKtwDQZ5VGKejQcrO7FkAov2h%2BYKoCZugMcXIsFUHpsLsQ4EMw6jBQSyx1%2Fg1J7sSXrv3Nr750RY6i6HYCm6v03tHnY5o99PQnFNt%2BnhvH2AzxZNp8dW1rMK5Iz%2Fl%2BXS4I6OqAOTA2NRs2ApsZ8hisdw%2F%2FGx7%2By2SRVP5mNMZ%2F1j3L9qkJOFQdnkKgZawkmlrsb86j5jP8nOYjzknhxVEBPL7j4DHqF9VQTb3RTmk23LuHx9E3OCrj92U9SKW%2FpryVDP9CgTYNdUqSbQaGcq1zRPUk%2FJr6fFrgF6GsWBuIasIkasBsV6JALrU6cV7eHO%2BvMda9eBZk50OD9RZJLreCEfu%2By2JvU2ChYbiAHFZs0Lq0LIB8i4bJDPsqjLdBh6Di2UU9T%2BIfmFuQe%2BAZTGPy4swzd9Nwdydqw%2Bwo5xusI%2BRKrj1hV%2FRUubQJNdoZAgq53l%2FnhqY2a7t5ERRpX0r6BSyHiv960DNcGFOd7QJnKdqN8V87i%2BoYsQxnZtYtpF1ScLCPcO%2F9FLZPd75eeK0oNB%2F34VTvvWxfHrAWIc4ktEgljjKRbfn2W7Yu4a0E27K1L9KXlRMMiB1nyfm94FMsgaaxXBMOK73pdYVsvRPp73zH%2FP2QXBzr0ja2sm94Okwt%2Fv1vgY6pgHkOyEiVS5hnoTvrdPxfsJ3gkLNDoZWnDj46FuAtMXgRyFysvWgjKWxBaLbmQgU7sxyCf7Zbo%2BD5XGcQDK5oiFBwt4coIhhCOaappCCkrPPHQci%2BYZn6aqfFLdh3r77hs5S2sY5QRr42PdfWV3nXSdqlyv12qgrQsfBllD2eknNYsT%2Fq9p3m0Lrs9Yg7TcYqVYaIyZhBWXCpHwN9pINibSMwK3eBnXv&X-Amz-Signature=787d7ec99100a4fe88ca6ce6e9d885c927365100d57d3a8d1bfcbd422e595c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
