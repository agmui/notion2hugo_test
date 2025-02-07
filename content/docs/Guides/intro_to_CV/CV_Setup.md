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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=86b03638d5e9cd76772577249532bd8800e84a0e90edea80c1ab2b82b12c047a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMB5I3VW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBTbi%2FGZu%2BKXfkiwEDGQwvW65wcWfZmD0CSnfdTqVgwVAiEAw9mrgVCgrX%2FpAk5SG8jtORPbY0T%2FKOoWgppK8frMDggq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKGUpaojLlexj9CcZCrcA7uoTxSZ%2FClj%2Fc1hMsgnwZY77FGs4PKSYhQ%2Bl7LDTT%2FIc%2BH4n8JphkvtTNPeIrk%2FB80gLoUek0YPVJfig1fK%2BRLH%2BdBJWz0Mb7ZTQWsCC8zVAl7m2MiVeW6r4qxMW92jApaSDDGgAemRrgylXy6jGmTX3%2FWRWNA8iu9a58aPRTx0bV7snsRl8GfbeZD1Jsj99G6IaHppWF3%2BOhysYOTbJNv0UxW9BeGoXvcS8h7kS8U0vswBmhhIZ0NQ37BdsruCtBL6WkOVwPXG%2FXGrTEArCjnOaIS1WeCl8YLW33U4RwBEg0E4VnJ27B7CcIQE9L4zsXp2Ftoka0pMyV7EkZv3XTL7v9fYP1ZEH0AJssoGu6IW3utxohnOYyaC43ZvjM%2BXex1A7Zy49kk88s7WEYDaYIfhxFnriYwTZI1E9MfX7o%2F73iaWxUs81vePaNd1d1G0d2ZKSkm0O7N%2Fzt6bLwI4XxPDaVkc9Kv%2BtZ%2BxikOzy6ocrBZMKOL%2FcBI1Z4FOFCrSArrdCUK6hNEVi077PZV%2Fcl33zRnd6ZQyBGUULtkGIjkOwtpU7XoqzGvzUyjjr%2BHzxH%2FAJ9GyxAs0MuPn4WTX06kPU5OZ7kXx9oRFDNqelBQGfJNKPtqMWZjE7CSMMJHUmb0GOqUBRs%2Fb3Q8%2FqJJm5wTVpeSNqmh4G4HeTUljjYa4%2FLe7bvykw0QSpFgDE%2Be%2BvGSFBw0ezXS5l3NyBajj%2Ba09dV5wR0cQOcls50pf2q8SQDrDH1hjFh%2B8njbCT%2BBgYC88RueqSCXNpKA3k703RxP3Afu%2Ff8GSU5bgcK9HUd9JAsE0AbTrKzvV%2FZaNNlWfYvzMR%2FLTIPeBoz8X9Nk4QvxLNfv1EwvhyDYz&X-Amz-Signature=92c093a98f89c0d62ccb6a40651c243f799c3928d0dbff6cf32e6de5b80d1f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
