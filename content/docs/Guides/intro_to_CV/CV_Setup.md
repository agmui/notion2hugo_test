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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGUMEKT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDkad6i01%2B%2BzWw28CsIgWkNHR%2B3XXiQy6Er%2B4ZuOnX9dAiADgCxXxd%2FUhpaQJwetY8fwRiCxismw60E0QR7QZqME4yr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMiDzS%2B0xPFg3KU1r%2BKtwD4bmg5LcLuVLMxCgjeIXDeRiYeNRipCAmX4JEKQ2f6u3FU78jUtRTVVW2tn7YLhqCMoBvjwiEDyi054%2Fz5Rs4m1l9vbxS83MXCnYzlFbQ9BElkYxaBX4XHgQASNx5aMDv6uztU59CciyFYA3DdSbDPCu2gGQJPUy6LRO3nMpFEV0y%2BWNG03nc5qkIcTSNBMhFyCzQqoKbBV5DuEBnf8fT6CY%2F8ycKzoYjA2qpS3LfN3rXPVRabreVsmYmzPFdNYCi5h788Vgz9Qyx4D2CTQV1bH2kdEd%2Bw46z6kUpVzF0D4gsRaGhc1c%2BCR12NNyJQcbs%2FfxbEAfmOm5uNEZewmTwRscvt%2BYnmALRzEXGUpvbiCYpOXg88MBT8pL01%2BdHPm3Z81K5jgJbhSgI5wIaWvv7XkqB30h6gfRF%2FrPOegyDnkh7rzlqoJqxjS7v39gK%2BHCiI2jJ7RhEIpBr8LyoPy8JDBdtnfyV7yP1ME8HlvqJy%2BDE%2Fp%2BaPlUtdf1nPGVSq7nHFk0cvehysDCgF%2BP%2By1QQH07%2Bvzt3QrAP%2FCV8b2u%2BUyKk7AYoMGJqb%2FZPUoqOeoPoM0UGq5kMWCUSlmmBkwIYs5x2PyQie4jRqBeyjY7COxFPQ3vsECFg78wY1Ogw34iZwwY6pgHNd60sCpqpqZQilKivfP689kUfq9kvSE%2F1wgtDm6FeF9EyUc0cg4PVGRIJ5seSK%2FlsdXTRM0A%2F%2Btw%2BOJzxtEkod2FCWerFRCtCVAzZ4WUE7CubB1j1Fj1sxomWK2203zDPGFW9SCgCz8klneIG0N8lpEpzPwdUiUpXTSjubT5R%2BSjILB1v5c%2B1F%2FfIYmtquGLEi3dh4aM9NdK0xYdpbM1uEu4SIYza&X-Amz-Signature=3bf37ca8a12b3141a1fe8238c88a83ac64ed3c51879aa42b3945ef75852e420f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYX565A3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCULgYhmoM6H2fmHBwaEyPz4af3W3GnH7b2t508yZxe4gIgXFbx4LRuyHr%2FrpfmGcDzRKJ3SpBjzX%2F7GTV%2FHeUsx8kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJ2KypBuJ%2FcpU1qL1ircAwk46YG5QgH7FUeg8G4jouPmyHCTlN1W1V3ZSQIaRJeIwwDXNlk7vxj90yxkpVKymGXrfML46hhFtfSrzq1GwQjhVw7e%2FoLveRXakwWfpyYwCdqdcL2odN7%2F0Y0bFp56a04Xxhbws94rOPABFaBA%2B5UmaTcwSebUdWkd1netAC%2BbSFF9WOMgEIHJJW5LhAKasy1VGc3XDufTOXmvJpy5wDxMtW4fXAvkzqvHBj0533gs5ky56Z48OAZ63PjBBUfTfXYjZ%2Bi3%2BChTzc%2FfV2LNH17sjTU4RXyCWcW7UsiMXL5HZu95VTAA9%2FFQQstx%2FOTo%2FoVT0qSY9eHMryt2GXWguwyqOkIynsdCqhsopw0AEmYiSXaEp8SGRNOzw9ToNeY%2BV0Aq6iFRcEMXGmTzTVKgpkR5ki%2FZtqPt41xHk9LydjmDM2h4VA26Geaxzkv9BUvre9Jm7WQwCdaGIH9iUbeQTn597oWiUH7BwaQh%2BC9IfGkz6ySdE3Xd1pOgXFWSjrPfBA2IieCfYTorbdieaoP4KxGXAeqeVu19BADGNC%2BW58pmRpJJ6549c2u3yA1%2F0N0UAb%2B9FvSBf9OvrOICNPl9OkUF54USyRQkJpK%2Bx5E8gQVTMA4YUtg0mOFGcM%2F3MKuImcMGOqUBo3KBJgIXigX%2FfKR52yq428%2FTTU4qAuDUrJ4hsOT73539%2BksoBSu2rRQgaWnnO5n6tT7s709lCNSm60bso2SI5whRzwozUN7uYVy5H0VgKLzUjUkPMi8UEuD9JUZ8GOH0iYzdHsFg%2B3bPGaW3J7Rnv8yflILyMi89BvwWQechE%2FxbXMo9yRNoz1%2FdygG11uXNWrnk0R64X2TDqpjsBV1o3kLXYWVz&X-Amz-Signature=0578e4ebd2b8c386e11146f69f25239a61d4d478aa4faa1631db3f006d5a84e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
