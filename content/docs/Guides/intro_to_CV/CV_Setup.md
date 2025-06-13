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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQPRB6Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDBZKGq5Ybww5ow95diHCOB7GsrcOVqdqFnPLXwiiv0NgIgB%2BDhfYeKB3%2BzzorBxk9%2Fh96hDAYwq5bCwsrhvQLCAHMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIWW0P8KPzWBy0Y%2FmCrcA7bQY%2FJ3iOjhj%2FD8CB5%2FTEn6LG2%2B73Smdr9Q%2BtYP3Asb5APP3Xy%2BbM8utuJoq0qB4HbP5HG%2FuoFZAaZCZMwP64IwkhJ6494zgc73LGbs5%2Fkip35wv6QARuOi8nTxtTUW4vRU7qWVa4Jv8mzrfjr1hTto9nJEs4VKN4mnzuBimd9JRb9tojIjshHiaqYMiauli6Q8gnYPhK%2B%2FkBJOdTHrRDXt162SXAO%2BsPJvoinIOtTvPhIkoyzcx1FIaYFClCRCaMShx6Yjgby2El2m9sD%2B%2Fbw3uzWDCqvfTQyknCUgolOI%2BvshPUKNVGG5DFHR0TV7IImXFf6XmQqD9Wt1seiSuKktDe3AKfiBqmdQctaD%2BnCWLocZUNUqk4lFt09QIaxBwnlXebK1vAI0lX3tYt2NWl%2FoFicREqWVDE9gcRwrI8DPNL8%2BnpMB8llkZ8NR1cKIUV8lS8vIXkPdLFOPyTa9I7gulFwaed7uHQLSc9WgVXM7JwstOyfR0UjmKG81XflK1FFg0iDXnOkWnU8ZIsM8WvoiCfqw%2Bvj2U1ly7kb923EIhnBw7ssS6MJQxYLb%2Bv7FVx5KnA3PX2sQiQT2jXD8UH6c2wRGY4pnRFe8xJZvFsP8xtKZkfNkS7OEu22zMN2SssIGOqUB%2BqXqSYgNOdIdUejsxDcjOqnnQT%2BEcMG9OilCU7XSmwIzDu804rdjz3wUk5aeRKG7EmKDKIoH3dsS15VAM5mygU0Ox7sutV8ze3DaqZ9hIrGpwvH8Rvbvt9p1qr9L6%2B4%2F%2BlnJmFJOK3hwbVOmQ4EGbg1Ss%2BATPQyNl00uoTbWvD5KTA3ru0J4bt9pT2cCASEqjoakb5bPueVgaej4ajvEFgAyQWQ6&X-Amz-Signature=7aeee639717c7e29e746f188fee4c3a5a1b18ac7a6675c99176a7d63e3313171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQD74CK%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC%2FD3Qf74z%2F90BC%2BRW2AKDKTMd%2BF05pWXNw4VVoj2m1ygIgGOtsHTkYkuqP4rzDFSjr%2FDkH2JLw%2Bt7xLHpkWDazhMEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOwfPGvxehVlUnyaaSrcAweeOOKVbaqq6fYt1%2BR%2BRXd5R5OYQxtdP%2B8JbP7i5baQPAsNfO6h%2FSXVzLXqRf7qiei2ovW3UBVodCg45FbCOS37wrFgYfLmhhH5iPM4FG7J8vji6sNQjzR75Rzxv%2Fi%2BRiZecWcd%2FX6%2FUpqxppXgmj88MDH%2BUg6%2FYQrFtYp7LERIyCIUUD6hCJsp8IqKk5asJaDd2hqDH3SiEQBJDWgbOv3HRzmUMtcVjfzz3K05fZZe%2B%2F%2BE8%2BdWEdqxRkjQRisGVYeXeleybnvKRopqfB8Cel3IUFs%2BYxtHuF%2Bb1f2pBaTOjStJAYoTZeEkx4zqK%2FGMJRge1uLLIRyAgklaWU%2Bxuakcg8Y2eIXK9m0Q2FbnF4IyGs%2FBXu89XecX8R3bm4XrPExgMmGV%2BBxmyUaPKdYb7NbiWHBuB8xyBsbDFN8JlAwxcOmME40kvsUNptdc5vJ1UPUG8%2B%2FCy03iRa9C9euLVg%2Bu7tNf9iOGkD2EMkv6QTyIZyMPYKmFJbEA%2FLtS8IFJ5iEtOTStNJSpOYX9cT7yaBY%2BHmEj2ZiuNxsqNvBCW4WtUMnWRxCZIT20hglF%2Fy%2BgFq4aXs3kLRrpuImiFqR%2Bns%2BlBQpx%2Fn%2Br23eTALBHQVtDN%2BTdnvreiza2k6nWML6SssIGOqUB7dbmH0DcjfWNPvElEap6rhduR2ZzKAHi8qfEBzwH%2Fvsz1yyCPgmTu7Nb%2Fsaan1rt5U53HGaPcwu8MWRNIg%2Bnh%2BX2V3H8u0UaMgcdLW2pl3a4vRaMVwxWSRKKYDuRHqcAe%2Fzw3Xb3ORySqkJaRzsEtjFgeM3fGqMXbRXAiZYnXPRsaZCRSeP0i3guZOa6yXfW7sxsodrM7bi4qaTu86bnvAWEfUdl&X-Amz-Signature=ded98fa26b5463e1e16164bafb7949d3911f53b65835d27cd2c54f5c30dc065e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
