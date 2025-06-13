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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJR57KXH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDEzLTNkZhdgG%2Bm3mPB9h0on%2FctW7foJXkfGoaVDlR%2F2AiEA8Iz33j96fNOLc%2F3AJ9iWT3ObZvVU7oYZa%2Bf4DaJXlQUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKxt0h8F5a9mUnCBCyrcA9zsG9GzMuG%2BnAP8zVh9udRMBKVcmEW9SQUrjyBfKKxzuYsZlUvro%2FztfB3Z3LKtE14QDZczDJVbkEpQ4qXyHxG85Dm%2B8w7Vm3I5hiiRnmg9g2PExqtpOtMiIcbp9mekbPGNonPsP64di0u3dfKt7DFxqs2RY%2F9OFlyLim%2FqXmcPvo5sIV%2FLzEv3%2F18xXo24nE926%2BIEHwddUazuo9%2B4KTxeeDjeTLfe8Ko23hjTgDXcUE%2Fqu99sNoy4uLY%2F%2BaqRfR%2FunTc0Yrs4VkporiBmez0m%2FYisEGdCKlS6IGL2ywvOlWWpAQfZHPFKG6B3wPdojfE492ViEi%2Frt3ki4SAUgx5uJOoRPJ%2BTIB0ySGtYwiJdkvqNEMryHJFtFDzD7KFHWK10TY861DeMmgoOInhI8UW3msDCBGPzCGjv0TMvxKBtITemNYIXI0JMqcnF9gUh4P9d%2Fd%2Bs7dIs5A3zrDOMJx4v8iYlLHf9pNK%2FMp9jvY6jeiSlcrKuBIOuCyjFlBfUWn4KH68kzDYVEZfYvAD9Vd9Sg6y1KXImI79JP%2FINbJrXzZlykeNiamsYTzqDpiJhap6Tq4gAgm3VNuvK2H1Kcv3GT2LYWL1nJcORx31CVAF0%2F2PlY4AdrXGWL%2BQRMK6psMIGOqUBj9QqqgBQ2LqqKteBk4hUfJQ8wBlMQc0%2FBdZv%2BW6FR3plg9wb6V631GuhzT4ALeIXt2gh2b2AVyHuLCQeDh%2BfLHItcM%2BCb8h8TrlPz1mQaE9XNjLFjZhtWfZObxmoqzZUIbOhCJiis7GfghFElmvHuYP9YCgLRVPfHKRb3QSZIaO0MsLqFEAt7p1uuu1gFOqSFaeQhd2oRyDrK1S53cgUmWBpJeTG&X-Amz-Signature=0bc1c0ef97cea2c17a0d80d6b11257b0a59c07bf1fc13bf4b43aa0ddc0efe85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOQBOFJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZEUfmZ8ms7PgQGhZ%2BnpqmmydXiB4aUTNC5k4KnzU88AIhAKeH9y67SHYcpH0rhE0JUAha6SEXbNJVnBAUG8gjn233Kv8DCBcQABoMNjM3NDIzMTgzODA1Igx2w1dcTpqkj4g2b6oq3AOXWLeDUVk7iGzUv%2FLoji3PjBEnB5b%2B2QbMPE1QbgRb32MthN%2F6hoeKjZvRWa%2F4QJEFjfzMWp1xfaMVfKDP%2B%2FJn%2FJQad5J4GpT55s1Dyo2ysnolGfZ3OTz%2BcI2ipZE0EpiUb9dvT%2FFQenOBIREJ8kzes%2FIdph6yc9KCjmSL0pnAjX%2FaRfIpVcixbNokiLA9n4bX8XwjzvlYSkIveHuJYyqVnzq09n%2FCU3%2F5Vt%2BZPxyjfEs%2BLNgZniG4DJylCaS1ib1CEcg%2BDkn7D7mDvoSSaNK9ZmK%2BJnkY%2F%2BpjWONzTxfZo8ZOWIerSijCCUEX2CUch8asaxqBuzdDD0wVyFyZeoaVrOEyUgCNtsA1OmCFoht7rBkPs9fkss%2FaZZA2vDi5q8ats2bARji8QJb74afrZPrixOhc4VWdWeFogymkPByW1384%2FwggHz6doDzca7w3ASI%2FkXHE7ipUYvVraTV9sx8qxS3pgZAAtGuAG9wRUDzh1yn6lxgHZdTMDKTozDGWYfwyjpuOXQn4ZkKQZWY3%2FTvSp6lvGyvK5cqSI%2FhUkRB%2F9Ta7eQeDeTFHwb0U4i%2FjNHD7GWPTQy9%2BDWICzgRw3Rk6VAGuzJm8ja44Ja2b5WjM9H41jWwb504c8olL2TDH0rDCBjqkAWE1K2O%2FCRejXx6fYaPBIv%2BOghD9ZmWmRutj%2BRrFpyUZbT%2BWfkiwIN3tGUq0zW3wy3YA3t%2BKkvniJROdhlGBSCvDDGfvxWaY0jkU87LIXKyFtgknRTRs8K0iqYgIPJevsaQl6wgKwtL1pQpVyHwdvvxbgZYcYgYTK0u1lQ%2BVXned9KsV3cf%2B8m5J8Ne4qQAm5rdMoJ8CvUCPSqueDWuOo9zYCNLx&X-Amz-Signature=1c1f714bcac99abd619a11432ad87c7ddd12ac785ae8bced52f0890f6336ac03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
