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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFT4RT6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDaYgIuJrNTj9Zah6MPpZEYOnxvJBkMQbHYQsdoticJowIhALyckvRcnuA8l4wCDL0p4UMQvlAzI8dlGASb9ZIVB7YaKv8DCGwQABoMNjM3NDIzMTgzODA1Igzd6K%2F6UPZEjN%2FeKhcq3APGrl1DrDeGjXHocF3wmj%2B7qKJNe2llCuvOI8YDVcP6W3ZxilZVz%2BFxG2ez94w%2FnkDXYEoCuBAL3SBqKDPULOW%2FPH2YS6IpaOg6ud7cqUrfH7TCxWJaQUDNtsOGChjj04Cl588MgPl6OkxRT0Yt2uPuY2sTz9PI14%2BABOHmNou5dIpMxYjZf5EAyY9rGl1Y7nCNa5BKIMispel1%2BFQMYhUGFkwwPfx63FBFBpGxqZ04fkdcjYQ9HtVNdw92a3gC71a6YQn6uJB6Nt%2FBR%2B7o%2BNv2WKZABgvN08LVtHt4PfZcPjSEOOHGM0hgHLQVZExNaTFOPXbcApIQHInbu1bLzrbtYW2etKdQvZQH821sjTPF%2FTNbmby0tg%2FeCm742Y34FTKqfQk698BB%2F4y8C8KWQ42Yk%2FbtyNhtSI53BJQT4dh7MWsYhbweaDI9CZmHi%2F6gKEb4c6DDpWkHXwyNJP%2BQ430SAi%2FqusfG2vaumCNFOTo4a%2Bb8imkCUzBlO%2Ftyr2ZmZeM%2BLInncMXxyejsusPcZuqh8WL65BXnbrZwk%2BpYX%2Fdb1Ef70PwkrrR7efHZBTel3yEPhaaaZGNKYd2onSMkQVzRQkELG9pdxK%2FWD2Hx58BOoQZDjT3iQM9ODOrt%2FTCEyOHDBjqkAZ5U3ZLvxaCIHpYPSt4ZdBNTeYtXd1wW5yyVqOACYuN%2FXSjCkjzHHtkpKwlwVyxFqM5Eut5irKBsJSp%2F%2Bwa4olCCbNIMP9hz%2F%2FxG59tPD56RokT5udBfiEoYbHv5ZCLhptU9IjB1IznHNNgdonRAzg1QfAt1YAfKDuUzjgNz57R1kO5dVG6qY1%2F81xEOyQJkVESMmuv9bp4FX0%2Bnm9iXYlQfvXRx&X-Amz-Signature=bef8e3394e39fcc51c4c8d35dcb41541fe19691e582146ffc9bec317032160f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNORHV2A%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDcegY87xEUnZ1qfmv%2BZ3qjzd7EQTLlWqwwfCM2lrX%2FHgIhAKNmPxj6wV4LMW9p0gZoEjCHa5PkYRNoJmvmVQENC%2B9tKv8DCGoQABoMNjM3NDIzMTgzODA1Igzh0h9kPmDf3wlg7sEq3ANYpAHHnCdD5%2FwBXaChNC6SRalOv5335o37KJsXsEPdqo56vwiuSK2sBgPk6brXJcUJmWoB%2BVUaQDDhlVIjHbk1qSfINTApZcwJxpJNcgjLA0BEz6CvlBBcm4XFMCz13z7v9F9bdOLlzkobujavvZ1lo5qAyrF%2B%2FGn7cb%2BlveZ2KCboWOH%2FmO2xUyhlYvpyY7GWW6tAhL8sL2oRcKUF%2FMg3RWqtXasVwH2Ts0uckXxTJoFbraq9XRYxE3VOXe2nGQqh1gIil%2Fiat%2BKlcl2DpQPfeC0p9Gz3FWttgqUWNUR1BJobDs3WjEwfEKOJ332P7lRD7bbWCpUqBhcUsSOTCZNIb2%2FJwIhxbElokTdYXQD7i9SbwxVOptlvUXzz0r554FWqkpmNLJ%2FTi3r0tHh20ikKs3rIjk9gB%2Bm5ZHvesN9AxXon0l6lICaTQwZU49Nwy48rUiER1FgjRNvkg9D6tJCyEEf1SAhCyrqRe7FIy4sf%2BS%2FNzPsaz5FeajOj4ckBDXqZeWXjYyOkpjQXOmtNVr8J1HoIcnb3z%2BzZyjo8U4Bm8D%2BqYtfpsMX4Vypk4Bo8nVPPb%2BUCR%2FsR%2FGb66lr%2FjG6TLFvej3exzH2mvGqTaKpgFGptQv3kUxlKiBmePjC8n%2BHDBjqkAcnji8bHXF7o7EH8k2XpFY%2Bpcopeau8TGuYQGVuuGyYvCkSmbfGxFRV3d4G9VCbL8%2ByeT6pjJipHGSh9RvB8NQEhX%2F5FigTZcDJtI3sFfeSUteZk3x4HbuvUVGlPYjdfAZqmb4FPM1Y1lRmxZdTsrGosSDB3fyrDH6kYQyJYXQgDNH%2Fn6qyusVpCwE6oS5FBXrJthOxZn9oUsxJu80DWKaP7X3Uh&X-Amz-Signature=4089e5bf7db33df01d75c5e6af3306e2739a5c4cca8688a05afd56eb6863beca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
