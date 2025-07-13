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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5ZZFJX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk4ftfa8dfBI80gzr%2FING%2FT0WL1kZ6EBeYKn4rjRyEgQIgBcY58S42gq8uKYadsaDWNFe9bHufuhA6yoTpS4fECjYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhZq8JSpANkd%2FW0yCrcA5GzjjiK7qbXFJny2AT0sfg3QsZQoMuikjjId6PUCwxJfxDHGSXNYe5fblW9fdCAF8x271ZT4xdjF6S589rvhX9%2Bj3LfDG4KmAylDfW%2BIvLso%2FmETXSn628dzLm0ALth3JNQwAjzB%2Bgd%2BKQFw8lRN2My8gWSMfXHfy72QvdSxNDOuwLb%2FvGaVDXbkwHLjwwTQ4IwFcvRxUdxuTvnS2m4bs8IkD9CLWsUcL5uVSEAGYrt%2BkgerToIQPhrJBwLeBQAvKlbFItQmDHZQ%2FRsfLxUroM2%2B2ME8YwHI9hmgReiynlM4NyXN3fA8bNnwZdI15DAnSBk9P1po1eCefviVURJGAT1tB0ikXYzWLSVybmPA59%2FHZM0zkAT8f8eRNyksKMkHk2qTjWWrU3XS0CmijQ2QqErQ5ewS3ue6udfGcot3gsv%2BEzIShwhwmFVneMCLyzhs9%2BSfLlFb15prF8dSkcQcYKF80a1YkkAslHpYXikoSVWErSWrfL2F7yJsS4RBbCO5SLH%2B8cXtUNzDF6XRZDoDoHevjF3nVr%2FU4CbqY6P4Oi4AiY7VRgWBmCdujn2YXRiRPR7en0iOpATFyzsFIT51DT218jvqWI2rIJeYrs9uP3fTxkATwuD5Q4WVUFYMM7YzMMGOqUB4sjyJ41PQ6LN3UybTCgVQAG%2FCaEUK4FTvoCK2i%2FR%2BwUJeY8VwPNy6uMh0SVnIxkJw5NKG9P3CqV4aYLv4jkCBFWSduDocFIzufvi8123Gz5aprBPA%2Bper7q2U8cEhaVSZYqlqnM3gkY1oNr4LABTiPLcEIHRLj5FijbW5MXe0oSUolgHJ6o6xzL9AZnNkJueZy%2FWG7tQqHX9XY%2Fv6IoYY8lqGmq2&X-Amz-Signature=dd9c00063ad8d4d25f4228743f8f5b993af3ae568fd4bb21cdd90d5ecedf1711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4PKII5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwKiyO1YOkAfKr7Kydf7mnXms8zy4cMRN1XILLUSVODAiEAuNvTBDfvQsFSqUjoasCr35PBAtIYezuq6stb5LDMY%2B4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcxSXyvV2K%2FBhmVUyrcA8GgUJHi82JUZOwx5%2BZFJljJ4uR8%2BobaHvr05gHX3V9inD%2BACdimwzjzoiVcrABL2WgIGBa%2BZ4xmSuaoOJJ4emEYdFcedBZrrvRfZedBVFojpeO%2B4aeG36%2BJzYU%2BO9XTKiFKSxXufzKdTp34r7MNtaJsei4djj05D%2F4SNF7ubtJS1FuJw8Z5%2FHGI7O%2BnmwreSxah4vKJGaH9BL3h847friXLykWYRjV2cElzJTfCINpdj5n7Z8TUln29Un7XMMzEkFV1tpKvhlwZYNApXX%2FN9PKhlanUUC%2BeIRH4SmOGidM6BUf9C4WV1kNYVptD32%2F4KhvZ0F2m8UOnnlrLo1PFNHFCfDzIvkOYR7IC4Lg6nThrdCsiWowvBhY6Se0DfYuHGfi4TVNoOq2aYm1vIiLKdmKhJGqcjM0ZKe65049zkuI0JU155WRpwInzLRhlMHAH0C2AD6vCQNphWWUymq2Y5Zrk5s9qVJV7F8Z92ICmXBHsswcKx4o4SqE9%2B06m28xEKKPQltmLcvNWz9Hr7eYwRQHCereLbovqaXYnY%2F7SggXdj%2FKMxWe8pBY%2Bdzqf4iqgUfLjZKFoGvwiWuKpKZCBtElGFmiW6JPETDVNebqUmVJ5plARDLl8tePOLhelMLbYzMMGOqUBlxqDw1VMVyfNrpyK8DAN2gQfYFXbSv4%2BFIngXYbEo3nTWKNwdt6Sy1Gwi52ame%2F6zFCwmy6qbde2dE3Et1ZyGBwqwY9v9w5gLGGmhY5ofbV9ApvGPXvZdM%2FGBy4OZOM%2FLzhu1DKj8lZJfiJLiWwmrW%2FB4xyjiWIXsmIYJo6QcIX1YId2tcX1bWaL%2Bc0UsmqhYQ11YZlMf0b89w7LSsGYxCLiuq7u&X-Amz-Signature=edb74d0ffe271337f2af657ae6bc878781b4a6d61ffa92db3f99855953a7734f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
