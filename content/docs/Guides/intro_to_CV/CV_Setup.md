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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUURZRCK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BY3I8HljWVcsVjpwDd9eXV1U4%2FsjNXioe8nR6j9Pq5AiAJHOxslWpOS2JpH3LqhwboBWibUdi%2FsdqxdbwoLPC00yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMdMgQu%2FBk%2BkXcrDZfKtwDEBkdSebbO%2F24wrD8uEil%2BTl2AC%2Bs%2FhZIIua2jlG9WlYsYyBujVyfxFDm1%2BoCuUYKxXzl%2BCJ54awCWkDy%2Fy24srMjECyddpOLCZYyJNbBaEQZGBLIHatR88F0nnnz37FZzzUCyLe1nHMMcJVDGqi2%2FZn24%2FyfA%2Bwv5f93MiQLZHx7QMHBhTE8GjWoYsjMvVKoYbQtAcc%2BDCYUHJSPaQP5f9QKnSRyueO0D1C%2BJaYkLc6niIK321XGn8cQLU%2BxfURyXDCBZJ2q%2BCuZdptkFLaXU7COIrPTtqQ2bqCxuP75avD1tqtUVzPlduRHdlD%2F%2BzcJO2BxlgOK510btMfQnumuJwgv9S8fdQjJRceReFkI%2BEIDIXDbqy%2BzKGtBtrt7FcuO%2FEXVejXunuLKgq3ouhzXe4vEG8dGNZ0aCdT7d2E%2FXZCE7k52VjKe862mFpLwOgc6GcvRnXKA5XjC6lieMYfQLRcK8mtzPjpWR8e98jJ%2FQuAjQJ%2BgjP2z1TZoPJH9TIY37OxjH6c%2FOye%2FFRGqDF1AA7lb8TXB1rsfW5PmIyczlEIGom9Pl65UeUmnkM6mCJhG%2FY7Kci6AFZSmEDW4UEWO8zxn2VD0K9s015EEsyAOgR3sIBOu6GVjS9BtlJgwxeyOvwY6pgHHBEQ8H7E212iLmAq8rAZ1hnHHKKxXh0mqM4TW4mtODETORXZpz6GuZpo6exZgGa3eHLdoacExQQ%2FtgzEN5NTUY2nURAmAeKzVeaGzvaxsYj2s6%2B35%2FIFWJnq%2FpWSBJ4MUYlNhK%2BdY3a%2Fap3Nqv%2F2CG%2B3zUqW5YsIBL0%2FdqwKWzen8zznkMUEwCrPibGYBbm9ioDnTRnLtuE5e2%2BRa2G91PZHlxLPC&X-Amz-Signature=e6a49e4b88f3fa5cd3a6e8a4e8dc4ef76d18cf12156e6923b60cd584ef9a2782&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMJOPLS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3VWEX3z5prz4CaVuCZ8J%2BBTfuUCIw%2FjeO7GQLuMLNYAiBY%2Fy25qDCiPMagaw7GY%2BQeS8bbFLTyEWDVXrwE3FNyoyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMpZHDaksDRoFLt%2FtQKtwD92z0JaSkwOAxLTMGVTLKk4xVFKHtxybXQglH7snrIm81%2F9SbgxhfD7A0BxHjHRhbKeKZaAhAjiSWUgcd5Pfi890QC%2BJiudOiEyC0x3jeLJkA%2BgW%2Bd2poNx8WYCjicQfdcq%2Bk3K%2FWmrUJkgE8xUBkoXq2dOYLam7OEiJq%2BkZ%2BzOsIALILvQjXaEu9iMdQGFJguO0T35OZQPrnA%2FIjduNkgspdfs2S1xHp3bT%2BvwF4zoZ33gS%2F34FUu4lG9AdL3BRdjGrHByLJ5WjWo%2Fe%2FW0nAeurYRAFFumDxOpQBycJM7J30vro0AWqibsnFh1f%2FGb0mR0uCXKeXlcy5sc3G9oUf%2FwbaA7KTvtDhIt3SSIU9DN04olsDKQOMwzANjS9nMNytfW3wRNUXMoODewznWE285h9t8wqKOn47V9Qo5c1BUCouo07lMip2Xe6rGgGowfBP3ROhRBNLzfJKdSHVSTILSevRNZtEQA0VuswvXH2wP%2Bpe3ZH%2FSwmRG7ML9hFj9RMV%2BUAqsmtzQzOQbDKTO7WFIb3z6FKRWyW33bYvZKNNMDAaytJcy6%2FIy3%2BN87tjGXgkTqYul1BTNOSKnIgR8KO8sunFupRLWLSG1iAGLbFaOHjTu%2FL%2FcMt16HRCnj0wjOuOvwY6pgHbMN5yiW6f%2BwEorPr2FEVahdte8K1ebzKuUTAUcXs2ovDRGnpcO24rlxcyFLS%2FUc7h41Oau5gVgU1sye2ddzDQ%2Fs02U%2FhHBugdwNyTkd0ndaWVuqh%2FjoSFPBqH4%2BLUIGbBMtl%2BJhm4Ydv9OA9shyeGOmmLaqhRT4p7uKgPnlMbxezcnvxa0eVXuAfVKxe%2F%2F5bbOIEKNcxgwMMW8%2BHDOu2OWB07uZ4c&X-Amz-Signature=bd2f5af7c45ccdf57c5b4b0b1b91b3a85545c12f3d0a844028a1722b3ca12c33&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
