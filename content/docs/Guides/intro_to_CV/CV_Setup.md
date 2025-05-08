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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6DGADY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BZ15ZrIc7HPseJTGW03JbeiaRyAxkOekkKvYYcZi8gIhAO1O9A6p8YnvJ8aqAPyWR3UF%2FX7HyS0tqqbumH5yoQtqKv8DCHIQABoMNjM3NDIzMTgzODA1Igwt3obBzZlW8CGqlpMq3ANCwNkw7OY5xx%2F4xhQVyUoae2TtGCpQsB%2B%2F8LAmL%2Bv8MOfXgOqMZnfXIOhiTtVgIucufzgNOfbIlBNWtUcTZuN6A5CbIhiS1GcbkKMbNJv69WJ09i3Zy31IHBirRt8xDleuR5TccSEfc5O2BVlLhb6YzX7e7FyBfBZCZXNU%2BznyX1rR6QynbYnEo1coYPiMlUCnj4jyHucGjIOvpz86PuYQ6dSl%2BEc5MABmOwlagkF7oanHe6dJUrn86bm%2FFtMEEzMFdb8rfzoX8nbnlGSfreS1bFtPT2I1swbM6oCNq%2BY5XsjiwdHz74GAC%2B0upkHgqz803nuRvXnrhDr68o98bkaGvAtzUjWagdK%2FOyeRyC096rHyoe4XgxRTMOf6aCxE0Q9ixPjiGi%2F%2B%2BELzTsafMfm%2BMVws2DjQE0RYL57ioxfYR2t2SKlPoL6Km6acRHSHBECQmh3JbKbW8dBJ3ZjCCXNAbjv94LXyXX%2Be2e63ka9tOW4lc9ksdMdpmglUxMyMc6YYftlN%2BUyix9oGJCqaOUT6uFVwI93sChp%2B5TFk7CxB1TC%2FksicJ%2FDZCTaGjniYPfb8a%2BBbK5%2Fug892uAac2v%2FQiH93M3g8EK89V7ZzvqRNHjo%2FKaNxHGn6TkfcMTDo3%2FHABjqkARCWXbsjhzUguuiDUj%2FDiXiSjZiftgZRrftDFfOGqUFyOj7dj1TR8p%2FJwC89P95v7KrgyPRUZ18VyFkLKSzHEZ9rStpMqOjObWkm6%2FresKA8IuvcaFgAPToGBfgJ%2Bwjow98VSugthkrxa%2Fzbj1rCgpP0pg3qBPZ5aQTPuMdnS81YDdIKVJUO7ndSjx9sgpXTtHs%2Fc35eJh6KkjqavHKR%2FXtvEX3x&X-Amz-Signature=af87c82e736619ed82e7214cc636997683a423d040409b67edde6698579fec7f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7W6FUOG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFmEp5CddKxEVELB9PQp1siLVK8vwxfYFxltLJwt5LLAiEA%2FidnU9qGpEuJKferQHg6MaL%2FyvYy5fzG0aNlgNW%2FzREq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCYjvSklkMZPtR%2FzWSrcA6tlXYtLD2TCokAn8Lly3iyqjxUoq%2F5kVywCMxCqtkEaSm6LDdMdJHFK42aQUNth5hqQ6%2Besr0Bf%2BJ2%2Fhh%2FhFPCZ3kfSwdMHUKJWlTM7FzNSgkHhpfRDPGxkk%2FCFkRnjxKLaA7Co2byg6423od6JtzDOM6jNhB74e71QzxHnvq1XWI4pz18hwRr5fV6gFOhkpJSR6Vxx0qReZ%2BRQAxnq4yP4miqWYoSr963OwfnjUucTfk2OHJSL3Si69JPvek19UvNEBrptaqZoTJEOHrbYwbSrGuB4AvPQmEpPaSxT3d2U3MelJ5a8ZM0nwrST0u%2BpDHDmunpcjtgMGS8z6WtxpmiEIAwMhK6DeQiDCEwWJ39dslIPZH2UuVITmvZRbZwOlkuPi2O41bRcarfpo4E5tt%2B1tnCRAKOH3UWOyfiPjNH3T02bEOTVHIYYT%2FjNfY4AHhEV46fFxiF1rRGqE8lUDjnMOF0OE%2F1q3lpnqh9RxKCTVIk21JI8%2B5JleEOfqbNN%2FSQmGRPQlHBhD1qtW2N35lZ6QGGROZTYaBpK53fUb03WwwKdv7HPaJpOPiaM%2FaMT5g9pzBFc4jesDfrPYoSn8PK9dzVWschPHXhn9Dv9nL3x1lzwl3wBzmUbgCk8MKbg8cAGOqUBBEpiHAJ8%2FOtisoL95q36aqBSWWOpskH3My22xTYpitoet3G4vlltL1HTYsXHzvamLiPyRjgqReupQvtM9FF1TH86LugwZZ4AlJKCQRo1w2QqCvADn5d3qnVDZa8cuCDHibHsWJ1UztUxlyjcLBAqmzeYNfY9lGqqkaoxqO4k%2BUDQMMD1VRtM5n9GwkJ4FMYkOaBKuK%2F00UwVLljHGJdTI5zyiq6T&X-Amz-Signature=aded5b958b78befa577ad4aff1c31c9b44ad13523a388669ac15042151723ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
