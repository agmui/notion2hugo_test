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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUCWSRF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BlA4KgsDFRVzn%2Fu5J7Xf7Ds2lpbeglvOiv4hUC51agIgNcnpeHpAJr4JqDUQuRNESgrHVbknEa7IVTui6SlZ6P4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN0Wo%2FH6zNjm8VliyrcAx8lM6BJzMXfaY0gzTMk33EnBeQ3KgrzyB21U9TiUf%2Bbw5KqKr558K0LnEVY7ExcERPWZb7AltCp8Dbsl7O9N9JJ0bJpE9CMFp5D5R6RZxoSyB40w58jlxFKftnMcSKxGZwbC2%2BjtUFwZseQb7bZhbNBPhVTz909jbVgTZgAJcVw72lOswHjrYF0LVqiHQya6yXWoi9O1tYep9L1lDpJEi9jLaxVakOYubneNd5v3m7mfFgP4UFqi3hmrJDTZT2eIUrxHipGQA7GLoFthrKr5KvE%2FNKwODZg%2BLIhI5lE%2FR0466kntOR6ki5EhxWGsLSea3ZFDv2Gpj7YCAVlOSZDx0mkFrK42sizArZV9u2nyixeDLT0ZlX%2FhVl5AIEsdkHYTrnLyJ%2FuEUM6907nFqHRoOeV0I%2BnENcJL%2FZBwIsUBTVSN8T%2BtBGo1hkbr7eTNEY8UJzg5HVmCEiA2dDwvFW4%2FAuhgCBav3HkHalqHzJa9fblhXiIntBlCfiU8VBLHDPuA8XA9cfVDjD9Tc%2FdDCK%2BPMptJQ1ltZnfh2X%2BWqi5PBM6CvZ7i%2BZ2HCE523wCD5M2jn5e4A%2FKPDVdMZfj1%2B3rP1W6a2nGrUcs385NhZh%2FiU5KeOinet06eyrVgN60MPGZrMQGOqUBOSdztFmj92ZeCHpKCIKX5e96FfHQQHrYj7KxAGP9GgsNQQbwYiUknKgH5vwuz7632M%2F6ibersgfuFi2L4C3vpPBZoti4i2j1%2BLUXuBF9k2%2BlQhczrY8S8eduYevaUgfLU%2BIdv5TOKqp6AHd4wNzudxMRWRI9paZ%2BmrH%2B8hflgsBMF3TihPD4BjCNxjG6Tdtcrv79c2oSjJ221zlzWXUrmEylIVnI&X-Amz-Signature=a286deafc193781cd901d1b405a247b55d24fd13a81c3608ef498948ca703694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UGILSX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsukbrO9wp3FgvnwGuNitsSdy5fxvXow9gRmkKko6g8AiAlA3ug0SVmUyDbzyYVHEAYhUf5fzFqa64EZrFLuGTdJCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMToU7rClUmTBHhh4zKtwDzNovn5f48aR4LxoYvI17C9899FvJCJq%2BNAadcldqvbjj1j05bshflz%2Fk9sZAH4EyL6%2BsSKVT7kx7O0LgP4tbRYFCxSSSPYYIqqMf5Yczy3gD0I%2FmB7nh16F%2BEdu93RVINp10u2AVfpmoNTOAii0fXJvOcqxrxgqbrcChDSAKqgSfsd7%2F97x84fcE1HPpSeiijA13FCWygilyOvkqw5uy41n9U%2BjiMfyh%2F%2F%2FsELvI5ctrS%2Bdi1P4t%2FdntA0xRkvgYeGGkT2MXfhfp1oRcablH6DJawLZMdkwRRi8TNn3xJMhkiSpCaYbYKG50awKgFswKdvZGT0pRaSjOVyROOnv3HYUdH78aYz22htMBvv94QT3yet%2FGfecncOy%2FD6htAxK2fLPQ1c7rPAHI7P6SRjALCAw6GlzVx6dZFcHNfnYGhpg9RLF9hMycTkQnvcazJL8dZ4v2Oqecz1ZlU4bUXO%2FnXwmirnfWdLJR1bWifhwBDJhn2zSDitBIQyqqQxpXKKBEQ87HoSQocoNjs%2F1T0nh64zj2ePdPY%2F7CIHOgd3DwpBK%2BqgCZH%2Fk%2FT6%2BKtEeIxoeGwpmpDXLyCl0uSO9qKE%2F2bDFUsfwn8B4w0S5W3Q99Eaybv52v0vW5j%2Ferk8MwkJqsxAY6pgEqD1U5fiwyjxPAIgLt06wfr7suqq3XUGRPA9%2Fmfr8wQClLmpTN%2FWuFNe49KGXRUnk8NUSNyvZGe3H6kp7nrTb0wdUovaac43140bHrWHMDGRoLqbOPWKuz7%2BiJWzCwIddrrp%2FLmqvcJ1zlZuIXnFXnTDMw8JCkT81ExFj4swCp0QWergaLvHr66XE3evs4onTHTrHGan7eboOjASgoRmadsbiG1aaB&X-Amz-Signature=7762841d336bee3b70bc9b1c046eec3379fcdcab8d26a5e69eb158eb06876f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
