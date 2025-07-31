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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUL4LZR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCG4OFa5NNU5lsYdrl2EaC9AdbHmlwYrsi1xtBOehKkgIhAM4EnqzsTzTGLZQtsgYnmsbPaqJjdTL52Hor%2BGKHmMr4KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWIR2mkzONrM0J9Yq3AODNcEvtzAdjM6Ha4pJGf8vz%2BBH13vY%2BXTwHoYruAdEFnLQw7t%2Fv6Jm5mU6rcygLxFROUOn9xfRVZrqcVKRjegzTH9y3Gj%2BIeFmZY3gdqzfeCycP5ryaqCo%2Fi1Ws%2BrayAWa7DSph4peosIr6QfszXSxvQjBksO60wYSjX9x8p2oW%2FO11G8pgsBUOcZQOjLfxzhYNRftpnsvO1kUPcbiVvyeA%2FLxbvr8EM0W0Cm9lVPdD81WTB4qF5yafBnHzpiegr7QQEPS5OI2zEG8AyULvShd2izsyOd14JiT33K56nEvpE%2BXyIVfce3HiD5ND9sH4OVlLWFaqcHP6r9MKawKc4hGv5KH6WlT%2Fffs0pHP49iK6Qh9DhHe0wpQarhEqqrrwZ1Y9J464xRoCcXoT3dw%2FOuML79fplLjAYUatztotFxXim5GnNN8Klb5ANd0qH%2Fn%2Fo%2BInMomGEQRLdfYIIArkuY92DmaeuJXHV1x8sU6zfc8iY36H%2B7XYnxR3jfgxPr9Lt0zHlX4IuFFCcPeOud0bEzE9aRfcBwXvLDfIxI1RVQ%2BVvdNt4LZu91TjSSHXXuH42dYJTtK9xk1OvUpOy5SOOY7%2FbJPzttRQ7ANx%2FUvc8wM9XA4jRd0uLBXO4RpVDDOzK%2FEBjqkAYNYRJtnMJFj1y9Zz66ZQ3RQorcyWO4B4hIxUmGS%2BPx7XLU8olESs6w8Wfdvo91NjfgoFZPqMRYZfYnm9vaLDez8Ei9GVjXTbiGW%2Be94GU8nvTHKwftacgOSNrROmhUvbTcjhXNE69GOBt0GNdPyLM0TZlWWMu9H5ND0WmfY1oxQmGEYXutxxdwnUTm5Hb9Hw%2Bz6suiQS7J3yHndkWYKUlekkakp&X-Amz-Signature=b38e7607e3babbd623aa4431c7e24aeadf9da1d1fd894b8749b0a897a20a607f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QKIGKT4%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeuH9gQoPPWll9Mt4RbU2qVlgeUcz6ddvFaN0v50ytHgIhAJBg6oc3jir%2Fm9o35LmtH3G1yBmmURVQWW9%2Fv01wOaXZKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVDsS06nWbcj821r4q3AO6PUk474BsGkZuvaKdXTn3vwe73UZtJoxx6UrrsSuei%2FgHkYbiValO7y7rVzhtdWjj5oUUxfReSfu0Oa0nZfI11yED0DhiOriA3Aktvfb206FO0iGSEqQhAFuODdPTEisUwj5OBZX2YWdQP0nssN0QcLQEb5gtcOpLyjs%2F3hFc4nWD67%2F6Xol3Dtut%2BgnPp0jPaV%2FQLnVFDhCfyyGKi5lwjspbLCi0Bt%2BxgEPEIJxuzHmAJB%2Bn1sOUE7PybzziAjeL0wcElqkrebZ0MWh9mJaOL31dF1zNQjFJibGzAsXa9Q1YTxdRUAvqUZDMtyN23oR%2BFTwA2fupWkVsCSTOCsB0dZEyen0%2FQ6Br88iFPHzif0Kc%2B6uM61cJqf%2F8j4zoZpQBkzO9WP62lh2GYRJpsJxWpr%2FmDSQFEpK%2Bo3hjZ8TL%2BxhsLk1i6rM%2FKm8TBz%2BRjVrrtAMX5s%2FaS6ARMIBPS3K79TUOyNbz3iXz1BSXtOCzAZAH0Gk6kjzc8yJn25dwKbehB8t9HUwBgP3BsKdL2tOf4gtZtYB4I2ujeJ7uZd8t4ckexN3bIH8tfaOIeZXjYHhXz%2Fv4bvqnh%2BzYwKlh2mzId1vw7btyaaUeEXIkfcXQy33LAdHaoozwZAq3fzCYza%2FEBjqkAeWgeWnY02AnXVq%2FhrNbKKZoWEaT9qSFGh0n6vpYfBQvTIaJ64cdznbeF5823juPAOQyEUHC%2BMq77f%2Fs9%2BVTs4mC9ap7nqk2n8IBh5Xbmp0KfeFcrz9Sv%2FiJM2%2FSSJE4SbQdABvjE%2FAp2PS0iNMyttN%2BCPskCcUCS%2BDpZBg8lhT8OI2i%2BvMy%2F3OnowvId4mQAnHayGZTtqlVeMXSqfs2Vr%2FRIFXb&X-Amz-Signature=2fcf106c33ab78885fbeb2aad38a14da0a6973cbda5ca5c36d83436446af89d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
