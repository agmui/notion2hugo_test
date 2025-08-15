---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOOPDDE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGllHglETazWaYx8QJTWS%2BxQaw9usFs5F%2FarO4euYEAfAiEA4s27niaVJISne84DE2C%2F21lU4l1yZPYmifCYYjNq20oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMu7YNaIGH1TcICs8SrcA9hmf5kaS84Dc7caSD0UKksShGQwGwkSZzNpO8gjpCjc6yRHy%2FSmq8mTG1%2F50siwy8oT5hydO%2Fa8esOfrtVZT1N5WM2I4BkmSe4OQlHGLckdmyh5PhshkHYuoIKMA5%2F5akBRDXnD72CKTw13dpA3D35gVBhetiDTYLC4C1G%2BZd5hk2DoX%2FbB0j7x69oTCUUvMehfAxWoSKitXpFKXB2vV%2B7bsWkRpO%2B6TcWgMFrCORGxRNRJCXGzOj%2F6YTCKMkTO0NGnpZRSiJ5vMwh0sTzp7ridwzf654%2BZMofSt9T7SLXYau0J6VlxRa2GVx9MeaL%2BV5T6N7Up8iYM47bvwp7TDcNdfIg8XMbVcBVGRLT06TnfyfQ1CzzCJL6upVQSfoDrhlsN%2F3RPgAGMHerryACvhoXSWPhGd0AnEWPvggF7yRB4lOFYKY8fbK3uBQNFcYFSgybOwXjYbREkB754Dpc5NqtsRMFuDNBzcCt%2FIgmyv3AFI3qdHDzJ27gKdx%2FByI1eNBqMFhjuNBRl%2BNmpfkrRgrqfnSrbIUtRZcxYVtR212Lx%2FHhjxwf86dx1PooKFDHy8YDjC6eO8r4k0T%2F9SHYavUneAS99MLuQMcabeZPH46VJC9eNeS9qxkLDyPlwMILv%2B8QGOqUBtQuyVb%2FWJyEF4smrCIYenZZsKGfoZgoYGRIj6K2DEiZavqgSsfKFPlIuCM3Su9GNPDeoAE7DBopRPwle4vLhP6TJFcpciWL7vmAubDMQsoQ9piUxRWmRHsMSVedLP2ixf6wiEF%2F6%2Fd%2F833a51qkZk%2F704qkgYvfddA6LpiqDvSdviZG7wWSZXGSIL%2FP8XBVIwmxQI0AqqSs%2FUNvYq7RByC5Lf26n&X-Amz-Signature=a40f9b1d54a163ddb5a59f3c3c1b34be3ab5e132f7d81feaf482c2c83b5305e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NJWXD7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDHcO8iZ7TaxOks389jHi7RFUVgrKnACCndxfZll%2BctAAIhAI2HHYngqgWRvBrPDxC2OdSMm7hxxzuJLtmNO3wDUL0xKv8DCFoQABoMNjM3NDIzMTgzODA1IgyP%2FMFhCcS66fPJfKcq3AN9JaOGRPZddWgiW8EdzoS4uKZjsL%2F575Uub17uSHyBkLCJBoLoLdzYzrcOAfw9URSCQ9jsEc4v8HKtJ1mdBTCFjCpTlFmqGSAl%2B2ypGziJ%2FAtOzgZ2f0l72TzTHV0GOpNiKz93T6v99f0uO%2BL%2FnrEltOnQkWJoqS%2FUeLmpc6s6gE1jhxZ%2FDy0Gr4fT5lfVABqdwZa8%2F0eMUk79Ldm%2BQ8Ces%2Bs5A0Jh5%2FYTE%2FN3VJ2Wqtcjw8d2JzquQJEnYmsVtEWthQfM3MxjRWZ%2FDOewyK%2BiAwEANVSp8G0WOeYQvdi6JzoJdZFvZWZfebOs1EQNYHDXcdoQZHLSNEwW5mNFjamEWNfF7v9dToMrsOoTCjqLYHq5bMh4%2FI9ErTD2VCHG7oC%2B1S%2B4h3%2FxmMjUAzvnIhfhyoV%2FrXPjI4K%2FSzfuFKkj57AQrcUe%2Fa%2FpGvL4ZQ0tjUJTqEpWL6Q%2FZqAr3SpgtEhuuqZIFlc7AjSEQHqtxqBCE%2B8yXxTUY%2F0yKsh3L7JAmTH%2Bpf21LDnqN1W1BkjK6ebCVYT6Ok3rzxLx8D%2Bm9Ebz0o7jquJrmHUZshaVARV1QsXl7dOuugD%2FTbHj95fd9e2SsEwUg6tZ4cYvmcWZyktXFvBFVVme1xdOROi1RjCa7%2FvEBjqkAeZJg3%2BogTzrNYFNyBFioBZN%2FsKJ3Htxx6V47zQ99h426pxJyIhGgRVRRANksiwC3uAp0VjoFf8wEPyQB2cxdUCX8%2B0FjLaF282HCt0PaXpjBU3alXDBhS7InYUqaY1BuI7wHSIrsnpDw%2FzvXYG6rAQywZ%2BEWtrdSMyuDe%2FxtybAbE3dNGNhcxG3AyEQK6jevjzsX9ikheHehe298pRP7LE4M3VT&X-Amz-Signature=1ae49a61b0d6165eba24b88f4085a6208d65f2322dd18b0dd9ffc952f99c52da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
