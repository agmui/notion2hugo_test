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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KFHEDJ7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzHV9PEVe6UdjAP07a53g8jY%2Bm90xUMyfzAtTk76ARnAiAxo%2FGmVjON6TmAYqU3U5UxpIA6IVRiThFfOFVVigGfAiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX5cSt957UFLodWLKtwDs6hviLJCsQRWZo%2B2Ifbu1wvbnqvm7fvom4N1TLTg8BbiE8LRdeL80Ex7PMmneX75%2FWHS7QGjQMau6%2Bt%2BqPA%2FBRwlpez3CSC%2F55CE9%2Fmoq42cjYUrZiKZw8ipQd%2BINZyUixhJ2BVDX7U4AjSEk1yaC9he2rnYrqrzLrkYbGjjI%2BUA5vqlT0uM2MRwyp%2BXrVAFe%2FsPnlHA9XjSzeRQ6XoVaTIioBFX5eg34wLQZq2aiGvl7%2BM5KsU6yUJjWdq7OUyrkG%2FHQ9U47Qk%2FNpqruTd%2BF0Bb58g%2B%2FPv1OY244IAWc0l9vBUchaUpA0QuiVD9F%2BxbbHzJzeQmfoQ%2F3r%2F8LMik5ImESHHM2zhpk83xgL7VhUt8Uu4UpGitKyDUb97oMGb2eitCZsqIgfIQxMNKZebQgFq4kSNh1%2FMLGKQscD%2FroMvClyKQwspWfskWNI1jakzTRRGJgzKCQHl2B9mce78gFV6P0Hzk1VJqdaIKMBdaQjmoe8UnW6ksLg081xRYtCCRcqi%2BG%2BmhI8VqtNVLy3qfNDkGM3wcUqTULGid4XPW4zZw7Z%2FUcZiaw6Jxlng3NFpPoQ2XZkjisBuAmB0oxd5ZkUvQmGGnCKhMBalGC2SGgKbJ%2F1PWcea16eeYkLcw9ozqwQY6pgEPV4sKBN2nh5Taq%2FigfoH5Ibyio8IVdtLndYS4welaKEiQUeVrSMKyzVRac0ZXV1fjtBo%2FHL%2BlxArgn5X96OhoGylavwyL7GjAeTu9PIunAsa8etJ2X0yfxhKUq%2BXPzoeqW%2FayfsdIOcMdzVpqM%2Bs4uqLijrB6vue1vZfGM6rGyYSD4dNwDs66duPNp6Y27LZoij4r80duot2PuGQHlNvJ0vFd%2Fbb5&X-Amz-Signature=a14ed0ba75028aa591ba42b097aa5582f5d9d121af161b0960239962f124ecd5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3KPHSZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3PAGlQz2S%2FPmwb8ikCxuJNgsijx0GSZx9a7bmVOQOvAiBAgq9zTvdJ1saiq9nGHyWN5UEOimYB7CYFEH7XG0hKkyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMrZiZ3JqK%2BSQZS3fKtwDYqB1fLpOohcy488yhMg8z4NNHcKVaZPO2iRPfSKsBJJ8VL0DO4N1UAYg4hjUuUtNNcFgXeJ3a2ErLRUb0VTyFLjTsfPBZee5kiuDMMgMo9tXefNXzXGClvVnwg0zxqYNFa7HSK%2BobPQ0q1e0Yx9uSi2Qafszep2AuyrqLP%2FESEi7ReBYQrXnAxl0AxYBYLkR6YKnMwZeSV7%2FzqtfjmsIgX2PIWyAVuPZjWn7hzSxXqmWNabzA8pzF5VKo39MuRdf3tXmujWPpWtfOkCbyIVwIt%2Fa4fsf%2B81gQziwm4QVONZ6Up6ntYwuUi3s%2Bia7OT%2BT7nQMWFvh6MGL9vzGggT7gRbEfKLKNWz9IJuPjiJYLwRioXoGr4s0Y23g%2FWfnlLx9%2F9vapKA%2BWGMdG62tOYT11UIa7GLhaEMA30sUAg7pctu4%2FwY4bE3cDyx2sbBMf634WibvM59TOD7Ft%2BKhbXvZSRMCH74qnkNy94tz2efwWzC4Zb8CaGet5wl8funlo7tE70e%2FNZFOJGYSovV2LrTQMBv7xQjRLxWt3Klo36dVGBpnf9qZPpADdV%2FAVc7tS2otNzmjWyDpRjluL%2F1OsfiZIhf3WF6TcBUL4iFdsjGgmrBON12YWGVYfI%2F9CqUw4pjqwQY6pgG1mj0eR3717NRhYQMI7m7VcoY2i%2FbiYT97xQJbAZyAXFSDBCyaYyRYOHF9TbVIA2mxCphnqFS9gWXnnrF2y7trYjupssbvJvS0EiNDt%2FJTbsgoYIXufb18HR4N55EIGspwkGpZRCXrx%2FpqkfHhszR7KNyW71M%2FhDZUd5XO9nLZBxTq2g2Vdihy1eAQoA%2FQPfirG0qvteqwJN%2Bm97aJ8W%2FycJ6zRn5r&X-Amz-Signature=e922ad7aeccc6bf6733164b818d73fd9340451cebef316b3cbf7b671be21bcc3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
