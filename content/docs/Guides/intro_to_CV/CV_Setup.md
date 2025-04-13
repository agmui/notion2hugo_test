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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWR6CRH5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH%2FleAfmkIlBN2rktJJDmahg3sQeO8hNvhYA4MHfCa4aAiBbh22nnIICVGLjwNHN2PHfP%2FjC1ml%2BFmlbbv35B5le7iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLRQg4u0TcMlVlmDuKtwDU8Y%2F%2FDKK6kt4CR%2BU%2B9XRckS5%2FIg0jrLbej2OZXgZ5st0jn0ehjbdMQruhSHV7fzKdzJ7pJq%2B5iii2GH8Nt1ep%2FScsKeNAKZxVRgg6zfFRz6Lc6v2vbvaZYIgbuY7UUZLqUiNbtEYt1Dze4KUViAHnsaBb6V1%2FugXRcIMI%2BQP4mq1RjdtlR8HtsxhXLWfOKi5E3ceR3ZYLOGGzLHsFik1qSZ4HSIsdOGFpBNMrLSL%2FQJNu0OBnNex4ftUMoRZrJexXbrR4n2CIC9FS0Gl%2B6uunrhSQ6jVhN8SFIXWoM0FXp0hNQ51IXDYDt6MBCnBya6%2B6CRvhte1tdpQ%2Fph7Eh9VtRHeJq4Sfj5YTDTR4Cq5oNDWFupD7HxeDBO8BFMg98qFTTp7j4fYkHD%2B4N5QS%2FXzOpLTsZ36pO9jiZO2%2F%2FLAo89iCTBR%2Fs5yBJjn5Z1QYjitK%2B0LSGRY6NLeThXNj8SHiYa%2FpMfuz46ypscg7TienPCX7185Q0FCFcmXg%2F3I%2F%2Fmal%2FV5kdFTSLEGLd33QfpAXADCToQkOyjq3NgnuhISl6oCW4SjRK3JV8fCUJ2%2BN41NbHFIT5sdWjxaq53QSGGyuZdvcYQRhiOKdAD8dmgoKEO0Q5MDtbh9aA1rq64wibDwvwY6pgFYHaxDR8skeif8xFFlgzfGOSOwNSGI1Z9%2BGh9LwvX3EBvGD%2BKOdO52MZ3EXRRcJsGl1bZZ8Ihn8vKsjtFh1HPjGX34KUmhaQpSHgJgwnJLtdWt4kgQLVfg993H1jNQZxEObhC3bBgHC3ahN4llgWt%2FwZkgXPjzkkgBLP7%2FDBnbhrcEQuDkf%2BfKiqHhiefrlEkuvgwNOxVY4teYyDzCGVDggkX0d2o0&X-Amz-Signature=1d3ef8be46e3cee9f934ed57d82a5651c2bf0df245838eec286deadd25b8ac09&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOO2AVXS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDBWkNyKPcEUDiI3xOC4210WSJ0AWpbHALEXs3iwDLsowIgJMI5w0z4JmLj8XCBIhCGwmZxdHVJRRrzu8%2Biqha1xWQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK669sZpAjYxbs7XCrcA7eEiQ5WUa25pICVCLWg6CMGXHwX%2BVpX9aCBnTY67ZD1HBA4SVxKVfo28jqUUBH3TtgqKdWMrs6F6NhzT5JD8hHnVJPNIlH%2FUldsu4vmKUP7kVWlOOQBX4f1X%2BntB69tG8bdi6ZsS1JWbcdyhibhBx7dgbCoWY3AKUqWHdKhgLGjfg4jC2mHlwAZA5%2BJruMVUvXgrXTKA1GvrLdOxwzA3jjrlQWWI9dqejutQj%2FGD4%2F%2FBXq%2F10rvVeeilPFu%2FZ12hTk5RNcMFLnB%2FkoMwKWILaIBv9DNvOn6si8IT3wW4La7s14XyMYT70Z2ENeJ6Zsc37jEfeL%2FxPkHm%2FIBP6nY6u1BkR9gQbNT9O5OTXmnlbG9qTnHDch0qT%2Fw839zZ8XVrb1Bnr%2FTUCTYRjxDJrcTWxY8lHBENWeUn2%2FgEMKs3JpPttx8Uf%2F%2F0fz5%2F5Sh731ADrYEna6yYThwMr2%2Bp9j%2B6oTcWzpwHKdmvu1lkcQbo0Qb3qxg5%2BhCs6RlzOGFq3Io2Bqk34%2B%2FxH6IY51wqw%2BLJDlhIFRhyBpdIIwiYolfNwZF7tT6HN%2F4IcRJi8OnyNR9kSfNdwnUlqzD3TpbCxlA0R8qeKawuerKznonYLFka6GvOzGmUpHKRkwjZbOeMNyv8L8GOqUBdHY1aGHLXSi5uYX%2B8jRqCrS3sIEy%2BwgvTJiJeMHNc0qDkfQBKbSIHL%2FNAlaeN3avK6Wcfh92evrV2OU7ibtDJh3%2BH573ATrZ9QLJwMi85UAcI52mKgl8YGsjZPViO8bEEdxI1u5XZnlq1xw%2FdIRYbDdonnpu5akVSNU2fU8zSvrH25%2Bh4iP8ueZ7PKBn2yhVfweWQ0LpQoSJYQTejz%2BocQp4EkId&X-Amz-Signature=227dcecbb6456746283d7be3674ca10171ebb01a34412f7715abece390c4bb61&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
