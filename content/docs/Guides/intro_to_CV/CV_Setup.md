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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HYOOY3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEDBBi379TklvnY281sU0oQjgBi0j8RGKT5Y4ZWJnixeAiAYwfBjyRJe16PnPEQcz8EXUsbEIQKXmVrBMBXyTIkB5CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FmvgyqK1vr8zuWn5KtwDIkSJQNCR0LIhQb9qvH0qYoxU0PrFTNmdg%2FC4zxZgwyhfq6ISZh9hXphKRF%2FuIwijHY496%2FPf9nE4aQQjLyQIbDAFJSjrXLR92jP0NoS%2BZXiIEc2e3%2BhM9Kj8BsD9PfYraSXlWgDRKF6ijyOcDcYje2u69uCL1Qb8Q0V8Rlx5CT%2FEP3CC%2BJLVWM87iJ5h3fnHO3mzs2lmQ2FdZqMyotGP8sjCxMPW%2FkcmnVD0BKctLfYD%2BqfvH1hXEw4DUWab0PdqXAHnqrEVKTy1JAmUttAnn%2FfvwuMvNcfetiViLaKiW4xbshbt8RHVfYiIhI3UmuVzdL8ggfTVh%2FqkG1vWfPVpIsorug5fFaDaQru8YvkiOJwNWi5W9rzbw0GBoqlmN5gsRjgV98SibFg6r5ENqcyrm%2B49uG95C08H2KRTyqT463CnJf142qbohAWJDJ4pyL1%2FfD%2BZTUM%2B9hIKVULn%2BmiO%2FOF1sOMqV6bNQU4UfyYtMLCh%2FmbVOUhq7u3NFPrWFk6bIn4QmSP3CRBa6HOqUmd4RgNVoc1IOuI4kQw9DXVo8koNgbh2qapeZfnLHXpa7a3PJRWeM%2B98pZmRrSV37rnC9L6PyoNqmUJNiKjee%2FJVYiCYZeqnB9i8f908qpsw0cGMwQY6pgGJMQXKIj12a16I0A%2FG%2Fjp7YIPwuYHgwU1rRwUH%2Fb2UF26rZuCxox4GWv7l0trzSiMBkdQyZ3odAthR0ZOpds5WSerxftyxKR8Apr4r8OzSdYXoAy8WfzHNyYNU3TTdneK5Vr48piF0rDFfAYaWX3IkAEk3SCVX3NO6p1FL%2BqOJZz16z62qnl1JFOKfniuBtE4noODZYATiKttKrtAxOnjnHJhEUnp9&X-Amz-Signature=325eb77b03e5ab6ace130fc709df34aa402dc97e8783da5d4976bfb89636137f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYA5UTR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDcsWjIYKb10QQYv6qIxN59k1tsnCs%2B%2BrgCkQdyI1M9ggIgexKdoIwRQfDyFkV9e83CDailKJofKvfROeAq4wKea5wqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4jU7289Bv0zk2tuyrcAzTHvt1Ur1%2BBRTOl%2BsfU5u6sVpv1O6GUSNmkpEPovT0%2Fxv50USa9J2OgZM1fKKxE44ByePvOzo54pFRDOk9H8M0FKjrRCQTFojhcPZU2W2Do6Own0wf4WhKrXPljxdwGblMJ9J2lbfmh1uqFAFzfkUBmZ5jNohaM%2BQR8NutpDjPnyXoin%2B2Q2FJ1wgpl%2BMdu2UjjEjSiK5BaL0wo0xHHysYJJF4t%2BsIUZs7lWuIjop7pD0N7o0JUB1yrMfCXNcF0JghyKDc7Q1RbTyQW1jnY5l0Y0Yyz%2BrNWOljLbkUFlCB6YotA5L4b3F9cPTPIWe2B8iTT5NkayWrEWQc%2Bh4viAaThAbWCSXTPVZf%2B7hlnSiZpo%2BIic9fSWGDHvMxBC1nLKYlBn%2Fa3intPwPUq36Sd2eJY2JqQ8eNxjxdQjGiwBmVDG2BJ%2FKjUH8ilYvQdNAcY0RowtsjGITjurBofpMGt3ImoQQqbmOhB9Zf1lhe7midFUqp1qghiAJXvxJb5e8moVmEAlvR4mMPYOllihaTM1al8b5JnZl3wd49apI0c3qSp1bEJxsxM%2BlDwj5rWbF%2FIXzPoKiDcNlTGr8jClHcvfXn%2Fuk6pLn7uNn3l0Ubk5YuEcXrVmP6D0IMbYsw7MInCjMEGOqUBXf8yqjriguxBprqVlvfueGMTgevbh%2FJKl6xLI4uOV2gYkHppXiy4P1Lt9U96byNv3TvDQu%2B0d6CxjMDIHvA8EIZaJ%2FVFb797U05VgmVR3oeTRFec3FjkY39EouEAjZw%2Bp82yHF773aP7NPyPVAHQAgvqaT8KR1Bh2KHocgZ0YoPKrKDDGjVyzfckKoLs7xJlOejl7kJZzKSivzns6c11dIRA1%2Fiw&X-Amz-Signature=eaeafb411975cab8acd3df16ab291eaa0de00373f855ddd4224aad478c400c29&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
