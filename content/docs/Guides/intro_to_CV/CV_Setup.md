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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODSJQZU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDE%2BFEJNgR8JMmhoFYjM0%2FSoNGAUqQLyR4rYiTuBCu0YwIhAPcZFwWKhQmm0m8kZ0t7dtZTZVfTx7gLxgL%2FUaP6CB2IKv8DCDEQABoMNjM3NDIzMTgzODA1Igz95VXy6G7Syt2Vzr0q3AOhyDys8OY%2F8rN%2BcCPQCedfqKiqRL1shk6b6zMsoYrrO%2FGZVG7JzYDA%2BSY26pNwq4KYXL9rhb%2FbxSdi2T9GkCMHTgSqRT12%2BNNhaAdvmzg%2BXg9v1GhEiuuMCjDPeXaR4rYXcrpLiUSwmhh1irzhECaOIVw7vLNbOu7bkuuHb1K6Pe2j9ibnxdIhlDfhAohR9cxzHEsHgEzsbfo3azocTtY7OfoM1Hp3Sgq0o%2BvAp08i2pTje9VBFmxd%2FXML3j8fYAjm%2Fn0xnqfJVNlWodkX6ym%2FNawrpVzTvxiNGsT%2Fk4%2BwCb4L5IO5e7WCEBzFsL0Qtxqy45dpA2vit%2BbskrgJdgoECWf8aOqMh2if%2FLqdsmjS0OUln3ReNASjP1zYRAOZdXHDPDx4R%2F8olpVEd%2FZi2%2F%2BCaQ1ylRFcjcXgGKVWprJBOAH9Ef4vtzancyAAPc%2BazSspEBNsjZvri8I7BNmTQSgTSBjLndA24JI62%2BrluPNysiFXf%2ByLpku6SacxfALVH6Hy9ZDf8eGmgzj7fksEIEL1cXMCPpa%2B2FA9OggG9Aplvum77MLX33QkDxhGgQibS4HhDNRC20ZryNqQadYTAmzED4TsKls3ByXxY%2FW%2F5BbJmSZ4bsIQ6H0BoMtLHTDk%2F8zBBjqkATSM9fLu%2B%2FyqFYSVkf17fqwiAGOtW3f3SDnxWvcgWKUlGCQ5c5pWwMq0Se%2FKEDbXaO4nn6Pl%2FHCk0WInALbD3d0tBEfog5lKRTUQWlo4JKK9v1xFqjVCN9SJaa%2FBaf8JngeLN53rc7q4372unYJU1eN%2F3riFSV9nTGmqd0lZNhhmBKrfe7frFJmy71VfoFDU5yY7I5LjfxskkHRCsvYulMjiJd7K&X-Amz-Signature=b973248499647ea9503c986e1c33d90793a3154de9025b9faa3a6572c5f2d4b1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFXX4ZS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDzDCG3WLGPYy9lMX3v8xw27YbUP9zH6x2Cu0Zyxj78iQIhANPENgs2lxk5RJxaZLl4mYnyEOcitbzCFNEc6HJoFlkFKv8DCDEQABoMNjM3NDIzMTgzODA1IgxCBWfJwgt0PaUgR3oq3ANYma8m40TrDuXNXSLZwlejcShm%2BRwQrrsOSRp3%2F8BrlaMdCLvHx%2FsNt4DR9GFQaMJWIZrc6j8r4%2FcpXb4Vc3LSFu%2Bj1neZRiRD%2BSY270opv5QU5l12km9VZUoC9lg3kzr7tNQXX5zB1AJi2%2BgK011PzX9ORbXWqjsuuAh8yBdRhBCASo%2FKb%2BwrkmvR9swe773U8hgStJboFYfkzVqU9m%2BFRpKcTwmsZP0csFSFho2ip2jYkP%2FXKFoX9ZXkxbrhD8gvPBvhRh28ouQlMv5uGmT5KLj0LfdDpXsI99BulUUJSv%2FpmzcP0DnVq1XFnLKqZ1KWbGU0iZCekAWeiB6LjVwVTfYCR3Lobmlf%2F39dMAa8U2yKkdKfQOHxDwKK8HXHvPEe8kdb%2BzR3aPCH6u4cMw96m99%2BjFaAbwVyHC2GK%2Fd%2BKApTIMjMQ%2FCaVE8MFh4%2FFBgPGMC8VefUsuFiCwu44hR5Z116pUaNllKV3UBkgtSL5fHgqjYEnvJd0%2BymWQHN0ox3aFqASWHhYIYRuw3iUckbsCwic8k0CkvZDLJjf2TKlZi5ZnuTmL90g%2FBl3OB%2F1rKm4TDxZvuK8ub5h4NbpYZI73dnRUH%2BZf4Ue%2FNNIj9t9jNzGZyIlJLhoIHlvjCL%2F8zBBjqkAQH%2F6hhX8AAVZb2ZRThxKE0TZ1P7arYPCx7%2FSfeRto%2FZXvgkCtIISIjL9s3ImHk7L1RiQWzovEOseOwiV6UVkkaTI03Yw3SvIej8TymRdtLxlZ0KoXEeOCwFacuE7DDjZrc1r67rmnl1EzpVVQdxt1dX%2FSfurLAE%2Fiw9jY%2BhgaAJCmDzGQG7mk4tKRS4E5htOtm%2FoPpkYxlza2%2FaeeqqEUmTpH8l&X-Amz-Signature=327ff815729643ca8ccec0fc3309bb10e3a977442d13837f126d3c67e1afdfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
