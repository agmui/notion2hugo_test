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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVNXVOX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNBOtZSea%2BnjLHU6cfSF37hL6SmAfknlhtvDMrl9YiAAiALR%2FvUtjNju7TQrs%2BFqPlOkKvA%2BIxvpPPXQNLjhMJbrCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMbl9LF1dDEpcHvEOOKtwDbniuFE73AHgINktHAKt%2FvZ9%2BxaO1Ca%2FOM4n1Y2hSxVTobwLw5L8NFTXDhEI6kl3%2BP0oLOYdR%2BRGKD0nKxCSCu89QbR4E4y%2FC%2BkVsVnHV%2BdUoOedtEqcNk6omjiEGf2c7mqnKnqj6dO2pC3SCg1CrRotZ28lijA3MXr9Ul289l4ntL6rBQPJXwiWLwjstPj3ctpD8dvFfrGCQEU1kwY74sVgSnAqIHWg7WtX7PI1ffpe2jCSWJJzLOhvCoAwUEwvNHpnJ1uRo1w5ebNn4Ze0tvS%2BIeSuh7LES9LJbXHeTqAxXb%2BGdumsu%2Bw8zuBayXgmlGEzhB0rGbU3wH21QlLa3RxrncdABaVs7JNzzMUCl6cNqvtaMmemIrn3x9ShqBHifDSZtkMwaxC5clH0vmmu9iVJZWVgxbWpPcgfk1M5w25Arc1Y89nHB%2FFRcKcwpz6XQi2un4HdXW4JNigU0pvrLTS4P4UM7LnkadoHJ4LY3%2FJrppaM2kDmsqxdJ4XrQiaStDJyTWrSIc%2BrcYVdJpZS56zFH7R0bKoYqNGxg58Q2QINPNmimjBemSSJ7bNaBEYBSEZU7OPBibUEMZ3U1Hqj100eeyKRNa2lUMRI0oPEmbfmBecEAI%2BVTnl7NG9swsbaiwQY6pgGFix6%2FchvXMEJfE6fsBlUeQNmB%2B%2Bvk9UXEjXiSICGfYRWNM2bD7nOXaqH%2BPe6md0uZHkPP9CQTbW%2FhiTIcy6VY1xg421Dfv3zveDY9eoU5v0TR%2BNvqUWxrmjQCUSYZknQALRXgYC2OIH84HFrJQ9pfiBGXlrepIrrbGD7a3mu5Ee%2BEOGB9RsKUC2jsc5O%2FSK9TwvnYNNnrYg3XW%2Brk03MolNMklRyv&X-Amz-Signature=8e3821814e4873b85acaa4c488592772a6ac45e3867198dbbf290f87f554f0f6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UN6SRIF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgCMFCxIo8xEHE8S2cUNOvUxDExplIQaEXo8heT5UfhAiA9rRM%2BQrWQVOjiFS%2BL4iSJbkrJKemzVgp1ZaEzwbr7Oyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMpoM%2BbpZzsRunexjiKtwDwirCqttKvwlCdCZ1nsH6gZIWxBxO43VTOWmwWZiUpAGNi7cphtVuaDBlxb%2FAyfYyfVuLuzjSzxTsJmQh20dfZ8CivlKBJdANTfFCykQtxn5XQbXrl%2BRyg7pC5xZ5mKRFtKM6Mhu%2B%2BJMAB8unycdUaf55S6YUWz3Qke3CF6YAcITqYyCXIu5qhnhgg96Rm8jlLi8JA4m2K0s%2BojMAUvGpJB0McInEnprtt6HzXgf%2FA2bMNAgUwxJSvX5QYQ37%2B4V4J0%2BSvctmFhLet5YaH90Q4TwvFHZORSAt4N%2Bp%2FsHkxsU9p%2BcDzyKdtvxj7FDDGXQ2OvYJ%2FAOQUgIQBX24YspxDsRshWkevF3WKhuutcXkMl0DZC55YDSD6HGtXY%2BdNm%2B8XXyfq0IZ2IMBWsTWd5AkRE6Eoplqbq9x3uIGSfIOxJqDBqZZ%2F9SZt%2BEXcerrKxscY13u64NtFveSwYAUMikOHqNlra4ewOvvcqR6CwZ91L50JZJlAt2ExFRjW3hBzcX6GI7FXfRrjq%2BzKz%2F2oDoqNZDuX8Ms3rqFhPoNdJ3xriiTmzK5B6HKDLK0jkyys5nrb3RTxEexKM7zzut%2FUhaoFlweuwdiO4Ptxc%2B8aEyvqW%2FfrI7I5faknWJXHfEwxbaiwQY6pgEq1Nofc74nNNbci5SQ5cjgXj6v5DBdc%2B21nnyxcAmpuIJ1kvpusdTNQB9Nd%2B83COszpA1p6XW4VNcsc0NB9HynJYahBmETD9%2BZ4eLRzMEks5Qu20krC2SMo8hg57mLJzVgLqk%2FrUdipaG36oQ4ixHJ06h0%2BicCI%2BudpD0DsGf4xWG%2FH4vv%2FDGvG%2Bq%2BynNTvFb%2FsgEdLdxb9jKQaJZ3AjIuT3Hktn2I&X-Amz-Signature=d39c2ba7f69b50f7a4fefd6b5a6c0c63744dfc74568d08de4816640def86789e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
