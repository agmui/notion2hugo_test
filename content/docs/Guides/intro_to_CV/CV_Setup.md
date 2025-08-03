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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHAANW4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrkFZcnxaw6rtVp0DTc%2BHdwZ47ZHJnxWGuz%2BfBgi8cqAIgIPcmPCR39vDkL2drkm4aJsA0UvwzDwCdLEjGe2Gkisgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ9g289M4kaocwpu1CrcA%2Fz76jwHTRRFx0ybA2zKwFnVF0yemRodrH8jluy2OhX%2B8joArBQugQGlPAt4VNRw61PbPby0iJrDEk9CRz0C3QM3lkb2iPYN7W8NqvL85VKb%2FQbYvjO1GRzieg579t9Pebg4mnaxKSg1ShpSccOsOUqvOnFhLZXWFAyqWei4c2%2FAGm5t5B05jcu3Xvoa49jT3CO6cIqkg7J6QgFKnlMoXpczGB4AcZ0PSgekuQXj41gvCbMSwsORyVwDZ7tKaR6lJc9aV9htDLxPhrYIv0CGCMkXjsdNHuf1Ya34J%2BvKTHI6sHx0NnUV6wKwVCU8V6Ul9cupAW2kv6kYOEh9qSOnBAPmJOLiCheCPwJTKVvWo1WULQf8nqymyou7DxnmSc%2BwwCe5IBu2XOPdBcVHjRCgif5uSi0CcBdAmO27A3gCrraofTFi5V5g%2BqvDtXAYNLnPSJZlG4gCGzGIuFViSNlo7iM0UNgWqYlNjoGvgoz0K%2BlJkykT3SvbbMEUb6Q40FrIh1vVGScwq32rC2KZdvagx%2FDTqFWu9crGmcx%2BJdABUtS9vNVFUEgtX90XjFnqKFDznLWFiyktO9SOyirpIN0sSgEzAAXYZQ%2BDU2DbiwGnqbmyY2%2Ff9F%2BTN9zkoAZyMLnZvsQGOqUB7FqLBt2bYTlTyl8Qafvghk2gcrQV4b35nIiykknpi2Fs1Di0autdWbQhtzFQyGSRukAPpckt9IBPbZG400pIOgvOoCNuTzCwpZVMhvOX6vN%2BJd1Q8Afjd57MPevRF7WCbEsYCXIFE5cnkWP93qUEK4zBoQhpkbdsxxPXgjpbxCIZKKGA84XGzbU%2B2mW%2FeesRDcx5u8otDMvLjh66M4VwLG8mSNvS&X-Amz-Signature=032fe9e1d4bad29b079c31f12147d167d47f555d4fc72392096e93b38a90613b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRD6TSB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsFDwIfZc%2FXmYttNIr9Ar4lPCoHRfH1iA5xWlQrd6iAIhALDdJ174CBI2LvyLrwBOpp7lWyIPCj%2FFoIm8AtofYdl5Kv8DCDQQABoMNjM3NDIzMTgzODA1Igzm30HHfW0Pm%2FDPPDgq3APUrnE30ZZCxmvS46YwobQNQPlauUYafzNMn4NJX0StmknrhmRvn3176xeSvtflzvc8Ii0ssdz97VL2DnYwl8MjBaBoP8nPvgTMIsmISBt6fM7docY%2FjsflMgrcQ6yX2ZNaUhLgZgoV4QNTx0nr4JS9tmRcub%2BhqSG49vJTmkPsOPIS3tCB%2B2TYJpxNiCsIFUeqYQRlzA5tIhOvIHHrP%2FQY9Kr2SJTmQRf61rRhLk84Gk379mg%2BfxSFxf8j0yaKpk1x3u1d%2FMg%2BPfprFnBpygNwgxQcO75EDmvu6BDdzGApMdS1ciq137VK6CpbgjUn8oHST7xeyIYPR0JiQ197wCw5HPIheAgzeIDhfEXy%2Fsx7uHRNsbxptHLAqxtM1rMLlPfVvl9cy1BJUxsMbyouwnC9YS8hsefloD4exhLeglWMFYBXe%2Bqks%2FKL9t18FpUFAWCh9UZceIp9cfUjNOk%2FHwyfmjo64oVKZ3gyeKfXcyJX33GBkC3qq3zWfNRZk3MiSt%2Flk0vUZk2G9ZI9XN89GbI9dZFeKpJ0BvvllZmI%2BH4%2FQUqPObe5inDhlEZ9HvsI%2BeraOUYmXcmw9Jd2WcMwKJfTRwpRJJkO%2BW0lDbKdQ4UVwjt%2BglcRThFRwJi4qDDN2b7EBjqkAYC3FHpoaW%2FRFhL9oDT4XI913DSlxagotrggp%2Bl5bca%2BDg7LsNOl3Itj1OF9RHJLZNG6LqP7x9JvoN0zeINzk%2Bp4fkHc8ZmQ0bj%2ByMRVS86oOxXoLC3ZtK66BdjxZPNl4VC2OJEjIM%2Bpm%2FZolRqcMy4flXapyXu1IZOU%2Fo1WoQbU55NCMK4jU8LtmLIOJE36Ni90ZTvDzyjFUuxUBynNoC1Wjfoo&X-Amz-Signature=dfff6e7daf190ece69db53d7e672a7273c58ac8a08e95c2c4d16ff625d3ead35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
