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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DVKZ7L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBakF%2Bbi4QKgvJrUJ24Bc%2FSi5oOS92v1BdEDWELVWAF2AiBr8rjMXhlPx1HmuA%2BKvnQR9E%2BIF5aXbBakbkEL1qSc3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMZLYO9keupXBcBf%2BhKtwDRPaEKywl1kghubtl%2FAjR97I1pro269CmB35AhvIO%2F4K7xuc3bBATX3cC%2BetrXeW0QISdumDk3jFfL0C5DAzgjwBXJO2elq8hdFeOjYCa5wUsDDfHWfo0hM%2BuIb4aCSnxFYfoGo6QHpw3fX64Auuypr7Ufs0t5fkErG%2B54E8hzDZa2fA4kFjqgF%2FYTbj5sMoodl0MwnfrjGEXdeASyC8lnTVeifq%2F%2BLWMTJZJm5w6KD0CL2Ve8HuqoeyE08kWKErgSt3C%2FcJ7AfZHIXXYqXsmfcOPFF4YeMoEQYyf3M9bLA5c%2BPTt3zERTbPe3BF7zRVgVYFrTCMAdSKcvLx5j0oOXZrQtOcw9EJ02%2FqGU6IlCGDJcjBRwAyDvMKGhAqUqDuYRRVBuntfFuD04L5IEkOc%2BQhBWhIr%2BbzOABLu%2FEGDaJh7RbbEWkVc1QeFu%2FUh0tp5xDehWPWiwW0ljfSxdLcNdwBexf%2BaoI%2Fj5KsGYfhfVLOVJNEhcOlPHruLgGAKGbVbpw1sUnZef%2BuNpgM8HTVybRdzQiZEVxy1ESqMnSQReoGRyB%2F4oc3McJjqxvbPj3oPDCILyvb0SE%2BFTZlO3epF5XtVTfcW5uf6wByvbhpktlooHipVFW5uWZqWzpgwuMLtwgY6pgHROOHMOZFky13wyBMeZMUpEw3mmCfpCOx3soki6jR%2F9wt%2F9jQsMMMJ43EnGhkyhUVT4uiRDsqLCQzslSvY6fAmpD9MDk3%2FzbwMQiVl7JdgGI0UsCs8vzY%2FGLmBttQ1rGJc2g421heVaLJCnOgCqmJ8vhXWkcqkliL5fom%2F5JKw6DezoZR7IajzFUOT0KCE8r%2F2zGMpIWGLEEbxN8MLJ9P0oy3uoi60&X-Amz-Signature=ef74564311259c257f456b0fb70cc757366ef124a1d07c6f9080e151e3a404e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J665YC3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHA0vcCxf3cS7XwFuOu8yYJX73I%2BXRyrE%2F4%2F9W3ro2ljAiBuaeknEdAd2cJomwLVLsdu5gjSeQ7G%2FQfkSmhEY9Ewqyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM8%2BWdlLiyopOQKmP8KtwDj4kjz9cGk%2FFjw5o895ig1sVO1xEWc857kTLPyBPcqotadQASlJmhtoaTcQoz6Y4dWeO4nFf9QhuC%2FJ4O%2BT8KqKEwZrzsLNauhofzTYcQxneotZvI9sm5Z3C%2FPr6HIl3lQlFXiiJ5h2gbkw5tRzl%2F7F09Q6SgeIu8ZCJiFuvPVrRvlszHHsrqaDf2YA%2BXsc6qHp%2Br5ycYAJHhiwcJaLyq2glrrTmkSGpLOP4z%2BT8dnwn0b%2BMXrKDE6rcFhvmtppebWwyFD3ugLU46xGKgUw9NRg363CZjTPFs%2F4oi2GNcTJvi0e4wT4FllsBvVT%2Ft5Z9yvkHUih7YjW9KRY1Z%2BX5UCsTLumxshyPdlC%2BlU%2FsFIS37aNcQOdCghBj6W7CoVq%2FIdMZayonVVXDDqsZ2phW3JsJsrF8RjMWygukO1NVN%2FcVB9aBKnltsJg5YmRK%2FEwj7cclQQsLzp%2Fj1HRzyH%2F7guuXYrqLoToYQVcES7GtLt8u9oV%2BhX%2BRcC8f9pggsZh2BE8inZR9PIdKSdLYYOgZtw%2FZBLdUKCEf0alEnusTGcWCqpE%2BI%2Be1NTTiqcWbxpmn2dbCB3IPu6RFjgQ1Jjx3uMMOuPfEk3npKx24zUTTjMITCwktbnVZ31gI0HUYwj8LtwgY6pgFsQKcCNckykvDgV0z5s0sm8BVsIp%2BOgd%2B2dYRjQoUt94dgVv7M6eobngqLcEhOjRSe2%2BiQO%2B6exchxfsuTD9CdXrrdRluBVDvM7OMfOKlrSylGlP1FQvPQQSDUParXjqRf2eeSNlVRWCbmD2TYGC3%2B1xj9AZuvJZL0txBXoT9pstWYGyNLOEULN12wyCljA8l5AuqC9c8DayVNqX4VYj9cqQzllB8O&X-Amz-Signature=ccf5876adbdb7747a7f089eaffde388595276124d260c3d8b3ceeb2d041e2553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
