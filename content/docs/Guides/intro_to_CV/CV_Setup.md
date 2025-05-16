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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MBRH7VU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9rvQh%2F6vCLI0OoEQhOTYccoFVflaxXJ0qkz7LC%2FHYfAiB22%2FsVA8eht2gazc4gUNIcEoj2dZRs0TYRqmBgflM4myr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLDMUXgp%2FHf0TbC8kKtwDcVnef6GydPBcQfia08zdRMGoFg8%2BcyS9y9zdfP%2BXFywvvBfE%2B6%2BQnyYo0HGmY0mz3rdiJh2Mqobby2goLl2kvSJCe2esXxT3dGIIz%2BeLnnoxeU%2FyMzKp9vcg1dD471WdWvY%2FG0fQKGroTaaxVmVcTuY5Lz4UIyhFlkqb36izrK%2FcvfcQlRMisW9qEH2%2B%2F4WPKHm5bkRaMx4oCopW5KIJKecg9t1zEj7WYEwu5RD%2Bn%2FTGmwX3kJPMPub8c0Ws5D0K6C0Hb%2BbipH2fJ55zh3UcyB2cYJvI9%2Bc1ty3mQaQxHHwcrX0FyShd%2B6b5XWQ75xC%2FHdDoRuhZ592R0VCtSuQnISGxdgDAXy1VzHWOhQlBO9yASWMY7snt0f5NOBDGIxXVjGLpUdIHknL9iKtIVDk0%2Bgae5D5MiIY317b7JSty3krKmS05FOhb0EsvaD41yX6UMmzEosamRMVQTaAvcEC%2BBllvx34UGriZwcebBVqf0JihLGe2iIS%2BMA3utxuMYNXQhUshhZsvFH5wWI8tBqA7OjgrO%2B%2F0nn3dJ7T4laAWL2wZUROsnsNk3D59rlCLYbtTMm06EW3ddt%2BHs5XPDqHeozo6Pfye6dYoMH30TSd7zhfUv9u9uxkKS69o1JIwlNSawQY6pgFrzUgh7VzrvFOlfScIMXZhu%2Btjee6pYB2MkmthG4gReNZZAN0KHbZN22z2p5B07bFWQEYgbeZqAd9iKHD3OlSPuSpml02dDwsi8ovuJ3zYck%2BDfbR38q7GB5vm56fXOfs7%2FiwyRHNwd3IssOA%2FkzEE6%2FlBjbNfP0yZLiywWuxhgthKlLkX4TT00l%2F8CK2dByhfUg45NZmwwe2meYvM0n%2BHJEZbMkL1&X-Amz-Signature=32cf935cea88c930ae71f6f1d825f522bfd6264f46543a989ad759b388f80b9b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKOODT2Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy%2B6ARasYBAMOyLtHtnQzyyOp93wsoA%2BN8sBZkD%2BuzPAiEAw9QD5Dj4%2Fey8pDoQ4xfHjqgEQnspemkRN5lprDZp8sAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP%2FjMKJbZsko8DiFbSrcA%2FOucJq2XO2hTcWbz5KeK7iSmej1qpZ7LXXBnpPC2MDcq9HRT%2BnWfQkkhLcetgtaNUuOD6j7tqIRv9q7VmzO12S63vJbA4AdcW57moIh07PxDb36Vtzm3X3x5tkr%2FkOI3kXbvBhKaKcUUD37rw0oO6jfoSlh2ormCM%2BUbXeet4gWB5raYfzZVSQ0lounvmUW1c0lW96FIPo%2Fac4zmSmZjM06b%2BYR%2FvuMEXgae4pJBGYjrXYpvzB%2FOGkwRE%2FGqfenEWHaSNgnomEPMhRPDLLAi1QFBYU07i2OOBvQ%2FXDHh3%2F0Wii8LWqxeTOJEm%2BoVgPR8W%2Bn%2F4iHAZxvUPLhi4VjFvZb7YW%2F%2FumLOswUYmAPE9EDBjDGaltwohyA836fYLCNTqzCmo%2BrxnbWNFBgBLX%2BkOiY3%2FCFyIEBP%2FmG6V2GXo7C1CKTdc%2F08TJP1ZLOz4I8GRj8QlNp8u8Tf3Qx5k0KGFTZO89wuJ0WoycdQyY9W6uTkyR7MemO5YTZnOztxvrXzXfurQHGa721G1oongw5t61nODeM5DZk%2BdSbWZ%2BHgTczner2rhkOqzmcSVGewTSpvqZtdcToevAqKr%2BV2Ffd1KW7N0r2zeURNsWnSgK7TQhTKBVWi76IPovUhbqlMKjTmsEGOqUBrNrbRT23%2BMdAmB5Tt8tGEnDJ4BhXWdOthIvq8dddent8nOg5u9HMAPH93dGVahQkAce4r25wdgZ%2FS8Abw6jqprGKwYg6rGmgXEg6E%2B%2FN6qH0ObFwbLsRbEYzSn4W1xIcol2tmqzk%2F%2FOz2OWcISsfusDcmInmztRwSJQps1iUj%2F7pizmU8ZK0TX5naRmksfHKyMUpUj52aiRtn2CrufWw0360KB%2Fh&X-Amz-Signature=acba28bb8cd48dc349f3d085ec9d1e558473d2812b105b591876d5978e891fde&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
