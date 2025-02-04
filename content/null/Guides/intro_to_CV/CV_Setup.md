---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "null/Guides/intro_to_CV/CV_Setup.md"
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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7XNOW4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDMVjVKe9dGxCg9rxdeELlLoHYFuPsuQLZUHRonbhFdQwIgMWVu6RfkGU8RMdAomzkYt9rwb%2FyVTpKb%2BMWJpP1v22wq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCxbpJp1mpM30yDNxSrcA8SXUozSApEeHRZspCi0F7rVmPMg33mpebgSTcYlefo3l4wRQoyIJq6paj7%2BOpRrNFvQko4FKHOBZI9eQIjFGbMrTth3J4SgHAw%2F9%2FCwN4%2FoySWna3X%2BKVF1jpXtpplZmxP3%2FOfDESL31tqAp6JhiJcpWTr6imVtCsxOWOFXo%2BzzMLjtYZ09B4G3kCUNP%2Fo%2FwjOC5mLSMaUeLqG%2Ba2TbyhCFKavC9c6KNZpE2PZkYHLf33Mz9z0wHu98Pa3WDz9HrC11jmfEJ6rcQjWo8L0joDT5QtkhIwhWFvzXMljZ5QWgMzBQo8IazStwtP%2BUiFpIWuSkIIV3CTxwhs0SjTWZvQOWzg67TsYk%2Fa%2FxsAP50uB4LFD%2FoZAYdMD%2BcHIYI3iavAOvd3O0A2Ee4hMtdF5qOtfx1Fog4Ocm%2BbtqiIShwklhbop8bCP8pP8JHv7QbbzTq42aNCmYGBPTSrcpN1nzKPvaoJvIxCellds2j8WnGSXqma5aDdJmc1LMljFnVvOQiy0330owYjK98sCS59cFBscTTu0PZ%2BDmxNkdafJ7Xr6hUs%2BhP9s7pRY%2FlmoYk9QrKmGPV5wRIHZrf3giLvM0vrFi1rG0hbqETnpXuypZpGdxHdWytcKsY6XE%2B%2BEtMPGVir0GOqUBnYPip6ZIcM1FrJyWx576vRDzVUbsxpKw1p5EUBTX9E9tWFYcjfmFW4Qp2YqxcX2LY4bk5UmruAArlmqrFuZLwzRU9TxjdD2KmUUGU%2F7AqXMVn6rSaVb5gxoyhMZ8rXTNbkfvb9P3h5KnhMSdsYi9RxzNf0dDDb3O9Qb5dr8O61ToJ1VRRo%2BdF%2F5Uv0cWopQEvF%2Bn2w%2FQiZx6E5ibPp66iq4xG0f2&X-Amz-Signature=2ab8225cbfb5c5fce4c7a6a594fee78fadd895a930e67d6155f90d7921f9dace&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA5BGA4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDrNe1Av3ZakabC%2FfVLgrVYv8WRRmGolmXaYOdTttVTxAIgTJlqwaIkKw447%2BpD3%2BUtsYcN1AkvKAiMMITXvQJ4ArUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDN0hG6Oeq62ybU1KWircA2s5u2ScGxKjSYGcKt9NRfZzRWhuzwnEdNi0JLIkv%2F5FaPVSi0fkjOzvc%2FEjdkwuAQ58z3LmWpwD7nj8wLJOgjXO2Gdv71D8CKesXx08EY7kUwyp3RuOfYedd%2Fcqh7cUC9fPoPzT1h7xEMYBUXt%2FNoyHzMm7i3jtx5LsbB1iKPmkbJLHjZ0Me0qXv7v%2BFAHTD2TVRrN5wUo2C6qEB4B4KwN6g1Cg4IeSsyi5ddZLRHlDYvhkrk4I0WOFZsHziqWpiaFtjNKRGI2a8T2m%2BaY6I61V2UkQUgT7825r%2B4wmC1%2BvNZ5GTYvcyqrxhJF1cxrMdv%2FZDcUKUzcpRGkwgbQNZqLGBoRIes5xkF%2F2L3FWHGYFoc9m%2F98nxaOS6QMX%2FiZy5ajdDobojRE0AH%2BDaKpuesxEX73Q7Q5X6FmjGZxWzsrz%2BMRok9BiDUSHS8WXBJpUJKsy2CMytiDSizz6SL%2BujFS85KPX80adC%2F9qjUw4E54ebrsUx0uTsGHLJPNgpTzgkiHMLVNSwa6pTCfH3FXrfODK1Fkjy48VUJclfSG5xPe4HWRxsg3NYHEKg10ciB0y7QVhY8MtxFMbL6f8cB3CdxsNgIG6HD0Iq6OMaQUTi4KhP65UhGT9%2FJLSWGiqMLKVir0GOqUBeNpn6JNo5yiFjByAD6DQ61nUwjDclV%2BlfAbsevPhWbijElfHmKWwAORU%2Fs%2Fe2ANbMsz%2FDwbZwsjJl4q8EgmxNNhOZfxq6qnsTUqKStOHJSQpv5zLOmXhXEooMYNDc2VkEz74Brp3cOonqu00hy6eNxHFNhNr5rjcv4%2Bo1KPqiA92hKy3n%2Bws6N0ZJTwwZ6j6IBx69Hrnb0IkNHKQPsfDYDfMjnxL&X-Amz-Signature=1f6400387ad8dc020fb2cddb1acf23a3987fdb7b391309f7af4600dbde8b3e14&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
