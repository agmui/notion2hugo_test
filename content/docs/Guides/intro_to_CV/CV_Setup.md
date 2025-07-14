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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662373ADBU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCF%2Bep%2FT1vOnwplQtJrCujHOv0l7zLIxQ21E7s2sLT%2FHQIhALTpQFGkPLYO9RHg43lkBhT8KfGtjNLGLHzSRU5tS3InKv8DCC4QABoMNjM3NDIzMTgzODA1IgxBzgxRQ1uyIbRYAq0q3APQH7UYieemqhylP9XhxZnx1enLLolT8kpmve26bcuaIU8Dd2pzBBIoKAF%2ByZoRVDaptsdZH24ASrWnl9%2BBFrXJ5ys6TaDShq5HPn7sekTgxjBPUJicBSNCN2PGOmIXsNP8lWuNzAumRRBFzZd8o%2FS0WNm18EAotgoJ1gg8VVEj7It4tYJTPLXoDSbMwcd9e9%2F%2BmrLErPU9gAHcsJVC8ndab9kxWOODzQ81JPitm%2B3cydIJfI9w35tGTFaKs%2FYEeZvalACtVNotYNElM5JgGfyGmjyQZBzu6O7Hbh4qT9HUReQwlapwMLxkH9BhRF8vwz9SdYkuARfmnSCqaHfCOjx8TW5GlW5X7OocHbUCScqOVCDhJ9ghC5iKJBXQlhv3QVNUPvl8zc0kCqE6bjKGsZ6P3bE9FTb3KrcFxtND4jcb7HvH2Jgx67ScFDpil%2B1SV%2FkTEgyBkj00agS1KXwiNJUdMCC10OSBpLiqJUotXGS4hGi6LG4cfHsP9xo8NKb0SFkGNKrqC6TTIpq9PSVPMMV5R2lfbQIeZ1YBT1S9XCl3xU2C42vfZDZAamU2k8YMF30f%2FKE4l4JG90OZnh%2Bwv9ex4NpF4GwC5Wsa7LZs7tVVJt5xmw9q6NZWu97iITCqhNTDBjqkAT9lcT%2FprSetYo5d2%2BwgpYuP3f%2F1jWcN4vqBjEw4qy4XJ3tX%2FcdmcAiHHdLRN6fVTOMB4b2kKmjPoNUC8AZvD7W5rGr69cVuqrEDUSHR%2BI9UJLnbN2iVV4s7EmUNur61AA%2FYUQnqp9MPCTwfQ%2FmsGDwpRhi%2Bz93GAG0Nr2D1NYdlVX447yKMf6TYlrearDlZUZNrjRy5inOgmE4kYLuWdQeMyXh6&X-Amz-Signature=39069b2c3cc5b0fdc8f8a71b438d35c9ddd25791ec617bbdb8e3e923381e9dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPMDX4G%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAGlyf98diX7i%2FB37SsZw6MGcfyeZkh4CAmxnP9Ujgp%2BAiEA0eT3R8OsMpMgpVpnArUPbpgAKqNIRO9M8cWYsoVo1Noq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDN20nAyX0w7ieIRLsyrcA2ajOVm2VgUhtp3wjLu0qVCzFabtDKEmrh9HH9nuh3PzeCSBmLcNmK34reKPmg8NYCqScJZGZ7EUENW9AgAsT4aS%2FUDRtfbkyY%2BePoTkjevUCnV6vQoyFSjrQiyzpk7WaSXrK%2FFqxwedcscST8RjbFXU%2BFiBjoHH4VlhkP138DvrEPNqaXeP%2FBL4pc0A6vKKB0c4TQ5PU%2Bmdy8ktQTcx2sAXunOih7wJipQY6%2BYV4d5M9Nx96JBsLERrEXkZqSdlfyE1vrtYHudtbBCAqrMp9zerMaKyP1TwoTt0c%2FbGFv1QihzPTcwsmXR6JZHKiByDqPI6OfhP%2FEUYioJJI4iyjqqXyKEFHYrZZSW5D3pd3XwV%2FWe8B3MA7owKvaJVd4bdXB97nPvvjYoC5g3HmqE6ZmsaPUtQsndq0YKANf6if%2FqeLnjkLnilO6RDcqHaz2BN6QfXIrwByhS66CqYTHkInrwW5so099%2BoyuYT6dU3Bncfk5ecum1pNndZd%2B3mDsVrsll4ULt9VyFat%2FZpcVmN8gBpIXZL%2Fw9FNu1PjSfKTXiQh8xJkyhID9bknDYfywH7Ck4ypnfvtMAAKpATlnSxk2%2BVxslPSESkUmO%2B6fjPb%2F9JZFk5YU0V9l9%2BWjEvMJyF1MMGOqUBp0ojGM25MSZOJA6BwOYdKT%2BPyBEtyxvasZFwk%2FcZnzA%2BK%2FI118rnMM869EhlBKmW5ZPAEjfGaPD05nWz5q6rR4TwQaKmzLEin9HluoWOWKTsZu3LU5R8OOG0eu0HZUm9u4tptJalwqnGCnrLh49i5xUl4zHCeey3ah4Q%2BOIL2xqyGkczDJ5gy8DWNv1WH4fmjuil%2Fr%2FW87EdHaXuC7YilxbV4eZ1&X-Amz-Signature=80be489619eae428e802c1e7360572cce23f217dbc3a132ee009bb84be2bc896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
