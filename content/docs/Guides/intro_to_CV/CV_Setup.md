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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7YR5BC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLK9HNVcIZJkWYILoXHAsMfeknQ97%2Bblc%2BAI2soikUeAiBLe2Bt7a7aHRjUhBKUWJ7l7R8QE7igJbWWPwSRw9B2ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMFf4vwHv0aDnxKKDXKtwDrS6N68r5sNQnKGuyBxbH84nN%2BoKWRSCugQfOwIfhWQBfImRni7FOEXxdqNqowMG87LLOjsnxeRcb%2B7TBcaqiaWGjwhx7jXBPkPAzs0%2BjikCJDNoOqAMTJAeqTL1bbUF6qAOFERvbPhJ80CdAt97iaLAvZ0Kyf6e7%2F7jLABKqr45qKx74EpUVNLeKAZqCW%2FDSZZjEOmt6eqEpQ%2FoIaVucCmhohLbiNRue2a4vxdSgLYxl%2FHMiwfEDkQu4sPfn%2Fr34s0pDuCkZqKrxlzu%2B%2Fb8mwDb%2FB9DeD3czWllR2H%2Bn4WYc2eUe03HcXUXSyr7PhXKSuwdjNbxkwgr1APMU9PCUj5VldRFbzfhP%2FqipMLDbh%2F9z3nQEibzbYQtrZmIUNu9x5EhI9dvmjGFog9iS7c1HIVxLW9uxr2NQh3MBew2G4TZemYlp49oFmhLtzcaq578O%2FrY%2BRx7R6aVe%2Bzpi%2FQxPBOSl2f3vDHp%2F3KJ%2FtOO%2FmhvkqnKVrXDkQ4fkeanL%2Fk2CHYka%2FVpuETZTy0%2FAbU8QCVRQhPxSrm%2FnIdwutjC2fIiexLe0NC0dDMVBHOqWlX7PmHYY5PgPeAZLNQ8qMRgPbqhuFHVlVYIwjImIfWryrfRNikdtGTZcclBI2pwwptDSwQY6pgHuTrXtPiirEp2Go%2B2dcvF%2FsdRgRrTst2bMFPxV9wwG41jr4Ca2wIY9Z9d9s3tygRicfzpvFkJdWdqhoXT9CZnY2tEMhLdw0lZAUH%2B%2BmHDn9%2FuaVUhBrEuX1x1HWZiXzAc0nE8bdJoESLccD3a3Bpl5lHHNosxHUZE7N6zxK6ddL%2BKiDwGZms%2BFjXrOFMbF%2BOzVaRdq9NFhSmVMTzgll1UrEfq%2FZDV0&X-Amz-Signature=cf6920763685da1cbeada8838c1114d6baa90aa1a1f2720390b4198f2ca84359&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJFTW3UU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJOth2hB3bgANqferBBQBYUxxYahFs4CYnIknl%2FBdTUAiEAt0mzlecj%2F4gBvi5XCs7wR2p7mDLmZRmp%2BT6D28H9fPsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJteaMdVwr6k0zIu7yrcA8Px%2BBmFN6HzUsSWnxBJO5j%2FD4cmlk0IazDl8EJ1WYH04y5R5QMmtyD%2B%2Bqnj2kaPQwSupRxcPEvxGkkPKAxuuP5d4eQ3XyoCXsyZFtq8XooJ6GU2783DX7p%2BACQVBvcLaDlm72pTXiVN3u04Nec%2BRd5xK3D0zmixqn8hxz9agfRgaZYTbX7ixGGOv1Ie4dhX%2BKJu4JSSy1mqYHWDFeJ5G9ncYJwk%2FK8KFPz3d8AubTvW1PLnp%2F3cCgzinkXjGqHBW%2FQpGYqOBH8mi4zBrVAjnY4NJCLvMa%2FWtrS8gJx%2FV%2BlrGJfF4Cwh0oA%2BVThK9A7DVmsZtT8vtwRUowjqW6H316YgFYU8vkrqwPkEiCn5rIxrAuHNSFt9bhSj76B7xZ8VJuu6Uq33wPGrZUfz4TP9d8sbzUZMyUhysSUup7mEg31gUaUftw8XDNVTMcYFosESf8PgwEpltr%2BQjrjUO%2FDKLCQs17z9uyHcjn2PxNl3se83zICKls%2F%2B6Emy%2B4tUa92tT73M1Z3Q%2BX%2Bcm7c360wYye3THSiKVf89OTtMbQYRVf2pGZ7tx9mfftV67sdA951CX7%2BfWFaP7%2FXbvErwi%2FZ2aNsCyyYlee2OwK%2BmNvZ%2B6JX4VPs8LrEFKj7UJ4n%2FMMLP0sEGOqUB5mZXyrN4bnN60ohbNXDJlE0gnTrMHh0qiRzxBZkFpfpljzX%2B6J%2BMbYDnGjlI79qL568kkDX2UWJKOUkC2x5IeNtg%2B8MCTUfKVBhsPv1HvouOSCC70iS6Ifly3Xtsj3GSclUpzctqtTtRCYmQKzvZx8Z8zEBXoGIjnNmg8HsnBjv1txmNGIvqzy2ssPa7yuY0W9KIkOtwfT3ffw4jimFP29hEnb78&X-Amz-Signature=e98ad3e95ad50b3f3204b43ecdb001fe1523dbe0453bb90525660ca08b5519c5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
