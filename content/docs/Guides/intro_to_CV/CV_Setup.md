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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDXMFTW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT6xIrKbEnj8pBvS042D4V4PeEE%2FWvTnbqgLSW7PUG4gIhAIbPBJb8vGV3Lh06qSlyKN8Hx%2BXpn%2Fb4A6gI2Hoi84YIKv8DCFAQABoMNjM3NDIzMTgzODA1Igz7zNIWSnGhLYqhYigq3AMNkyK62fcPxQW0vBgKbcSIkRxHqW0gAHLjv19Bfr%2FSRr0zyHBmz6poC2kJRvuF392sHfVw8ucl8GRo9guCCvfqaO7GOoZLzlfKzLrM6DSw1lfj4I87NI34FHtcrP8mmAJ8K2beHTYKz9O9X9kTvHrSQSmrR03lDsPXPeSvqfdLQFR8vVxas%2B8ioMU0wybdXEWE1O4TwQ5TtfU0hU%2BJQXrR9SqRTvqre%2F14O8xwFZ2rpp10AlDdrE%2FXexlOpSvKfH7w5Zcb0vj6G1InUbtGy11KdW%2F4BFpHSiJ7YcouWsqKjTe2OIW9VgR9Zxp%2BFSyF4clmoSvPTWKAkPX%2Fh2HBAi6NJIEfKukJGtYkhW0%2B2U4UPJWy5xwWeZw6Qxa17BdPkabW7eXowyN1aVZGGtrlCTLKNScJY4ROws%2B5gM%2FbtSLE6toI2wk688UJt1DJmHvf7ybwitr3qBJg1kMa3t1PjRbGZPD6FcXtMF%2BGxRjYHTZwqYSxUUHbrsq2lCR%2FrnxscwTZdmyA%2Fuy6tQ4ELiUEV%2BVBJaySb4JK9W8kFlVKDfEVWPrkT%2BM9%2FtQGmm51jTWx90L4a0B0BnKea5TEwJwUQiQccGdeECzAl0BfeHhsf7XoI71Kmm3D4KNUWskZ7DDfv7XABjqkAcsaijmIrplv15YinL8PjW1Cqy9N2kMXsz5RfY7vNwlJMIQoHPbZISIbEvOHY4vX9ajAW0J1P4xMzSlBW6BszXW9Bhoxv7uuJcA%2FxPrjwJb85itHQPPlFHAxcB9ZOOs2aujdjavz17hj5z8GDdTe0oiiW%2Bz8oXQ6fL8XvDvJxLcQ64cl%2BmyXOuUQ%2F2eNhPnijfyV%2BMud7669AdJlD4Ta%2BsVTE2bo&X-Amz-Signature=3417a863d1648fd58f6393b673a5e2881f35fc20c45faa8c9bc0041df3023b93&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDAK6GD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUCbWMliMjeumzlEjWa%2BLqq6Vk4VyUyR62%2B3Bh1370QQIhAMa1u8i30sA7QHNOUle7BOKN%2BhMgKKlo53WNyCreebxOKv8DCFAQABoMNjM3NDIzMTgzODA1IgyZOdFB%2BhL0ZuPKj6wq3AM3jJi7zHsXaqG69AkDRGHjY%2BkFzRn4baeyR0L4akTPmT3f3ZuVtyhHrz%2BlMcHBiI2EVFVav0hN15UILGBko1dZ3Hm5rHe3Mms7D4akVvXKKtOI8bboqo8h2JtMjVej%2F40rPa0t2zj5Uci7jPOCbDqL7v2BV8yVJaLl2L6JyTuuMzffLHjUvT%2FkxAyBitzAJgeifTHr7mAoPLaK6SWZ1PI1CVeLOOvvw9iRou5jNDIDUx58R576L%2FHLNbpZ%2B4vuvxCP1gITA3k%2FS0jw064W3lfQxXBy9tzheUMJgibCw0I9vkZIH1lfwePa2NxCO%2FJrfg9coCsD6JQWF1D3QVMNaRospyccL8L5nt6toIAcOeVdWQWuJ1lo%2BrZDtIMowjHQj01yMkxd6OAN7KRpFA8pzGG5MmmX%2FeKIxA%2F%2FX2rzdJ309KKbgqmSUNQW08YpVxcmOC4IjrKNJ6hKJiFp9TgtlwB2GKKjm9NXrLV8SK2B3Dw2CbIri3MrY0nETDIfs7%2BkyUWXqMWdejScTL8RIqquBTnNJIZUx%2BXnCcqLCMT2TDE6pmTK1ei9uXjvp9WtjcoQmHEPKY1wfJDFsxA4BVnYwZuUUwWyZGOzLocHa3BuIFftR6Qr2jceGxzJdubU8TDVv7XABjqkAYLAfXjXscZamliFvJ02dkzR8eoR2QJORx7qvs2AltdIitofYCWbT6YDJIipQpnjFEYEWdAlqVZcXSEZkZfOs%2Bn8lUJmDDGCMlqWakJzJ5Lld13RwDgqyG%2FkwkGV%2BMkZewRNuE4HMtPzDiseGGvck3Kpjd1Rg9EnM%2Bo2PjnrYGN9E8IFwv8gCjIjc6WBft%2Bl5qYMAN5HjqSHpTglytds4TDYKvWh&X-Amz-Signature=6270481d8f1739e9ca2c711a62e0eda56c770d4e413cb2a44a647e97d7a933e0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
