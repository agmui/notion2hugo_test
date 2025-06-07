---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WONBT3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFzJPI2hMbg7qnsJjNDze6kizh%2B1fiXxh9PKia7mWeQAiEArZhvtQKcUrGesdPDmJnj%2FK2W%2B0%2BPJTx1WV9YZZRPVPsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMwzwyC6CoopSQc87ircA6zR94HEhCT2AvCaXu8OrUk1c9vhhzsJoBRYrJfraG8PtGy6sCmLEMgM4JE9poymNPjBNjEDzx6GW9tyXbXzxrvJNaz7mnG9B7BXXksqee1BSprhH9l2RmeepamSMlNkrER7jUdvcbuTOVPq7KPaJvwxiY7SPcqiW6ZebT6BwoKbkFohj8wkbFiGrLBccD1ZD6NkfdV7elzsAescIqBlKu8dzJay4mjAfPk7OKM4yA7kZuFhQbeSvCQgT3%2FJsV9wny2dwGdXeuESnh7B%2BS1Ha2TqCQunrALEDb%2BeFCcCOeWwupaIiyQ%2B96SKqqSw7uOXzC8gIEPZbhcCAdGpB9PVE9RxdX%2Bf%2BDp5OaQYXeYLwUmA2eE0%2BVWLdasIFoH5e8Ask5eAq%2BSHhxMtNIal1iATls3CGPaiZS4IOG5MjN0og%2B8EVNQn5GSgWkeqIgTXjKdbjyLmMAYgTUyiJ2Wsjw6ujbuvZpY1jMIoO134mzsgBb9lsqFC30ey77HTD%2BA%2BCPu%2Blj5uQoG10gWk0dMhpELkVePAgsmr3oXtzxXqJsezunP74NlQz0vVKMXkcej48b7prq612RZG10oPqmxbnZGj%2Fd1NZiXRuOrdck2h83J4k2cAvmFRhlrMHbZpzHz9MPqAkcIGOqUB9C5%2BPz4fShP5%2FiRQKB0usMmJyhX7o9ZMO5ydPF5X%2BZ0taqvr3xaxmtcTVaPEII%2BfU09%2BmdlLdRYz4uDk9hikraenjySwLZdtq83zLOa9SiOY%2B0VU%2FYTx5wICD7VWqStopLmfEhM%2Bmo12k%2Bcs%2FRsKrBZ4XH3KqSSyYPRhbLL2I8zOKnu81Fa8tsOW9AZHBkJRK8tbUHKt%2Frb2doR3o%2Fe%2BaLykE9Ce&X-Amz-Signature=834411ba8e8a442b8496b5226a845056eb091831c9054e0906c49dba0811c414&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WONBT3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFzJPI2hMbg7qnsJjNDze6kizh%2B1fiXxh9PKia7mWeQAiEArZhvtQKcUrGesdPDmJnj%2FK2W%2B0%2BPJTx1WV9YZZRPVPsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMwzwyC6CoopSQc87ircA6zR94HEhCT2AvCaXu8OrUk1c9vhhzsJoBRYrJfraG8PtGy6sCmLEMgM4JE9poymNPjBNjEDzx6GW9tyXbXzxrvJNaz7mnG9B7BXXksqee1BSprhH9l2RmeepamSMlNkrER7jUdvcbuTOVPq7KPaJvwxiY7SPcqiW6ZebT6BwoKbkFohj8wkbFiGrLBccD1ZD6NkfdV7elzsAescIqBlKu8dzJay4mjAfPk7OKM4yA7kZuFhQbeSvCQgT3%2FJsV9wny2dwGdXeuESnh7B%2BS1Ha2TqCQunrALEDb%2BeFCcCOeWwupaIiyQ%2B96SKqqSw7uOXzC8gIEPZbhcCAdGpB9PVE9RxdX%2Bf%2BDp5OaQYXeYLwUmA2eE0%2BVWLdasIFoH5e8Ask5eAq%2BSHhxMtNIal1iATls3CGPaiZS4IOG5MjN0og%2B8EVNQn5GSgWkeqIgTXjKdbjyLmMAYgTUyiJ2Wsjw6ujbuvZpY1jMIoO134mzsgBb9lsqFC30ey77HTD%2BA%2BCPu%2Blj5uQoG10gWk0dMhpELkVePAgsmr3oXtzxXqJsezunP74NlQz0vVKMXkcej48b7prq612RZG10oPqmxbnZGj%2Fd1NZiXRuOrdck2h83J4k2cAvmFRhlrMHbZpzHz9MPqAkcIGOqUB9C5%2BPz4fShP5%2FiRQKB0usMmJyhX7o9ZMO5ydPF5X%2BZ0taqvr3xaxmtcTVaPEII%2BfU09%2BmdlLdRYz4uDk9hikraenjySwLZdtq83zLOa9SiOY%2B0VU%2FYTx5wICD7VWqStopLmfEhM%2Bmo12k%2Bcs%2FRsKrBZ4XH3KqSSyYPRhbLL2I8zOKnu81Fa8tsOW9AZHBkJRK8tbUHKt%2Frb2doR3o%2Fe%2BaLykE9Ce&X-Amz-Signature=175754bea3c56ebeedbb408529038966172937fe46b78d54aa3d21bd7b118e45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WONBT3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFzJPI2hMbg7qnsJjNDze6kizh%2B1fiXxh9PKia7mWeQAiEArZhvtQKcUrGesdPDmJnj%2FK2W%2B0%2BPJTx1WV9YZZRPVPsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMwzwyC6CoopSQc87ircA6zR94HEhCT2AvCaXu8OrUk1c9vhhzsJoBRYrJfraG8PtGy6sCmLEMgM4JE9poymNPjBNjEDzx6GW9tyXbXzxrvJNaz7mnG9B7BXXksqee1BSprhH9l2RmeepamSMlNkrER7jUdvcbuTOVPq7KPaJvwxiY7SPcqiW6ZebT6BwoKbkFohj8wkbFiGrLBccD1ZD6NkfdV7elzsAescIqBlKu8dzJay4mjAfPk7OKM4yA7kZuFhQbeSvCQgT3%2FJsV9wny2dwGdXeuESnh7B%2BS1Ha2TqCQunrALEDb%2BeFCcCOeWwupaIiyQ%2B96SKqqSw7uOXzC8gIEPZbhcCAdGpB9PVE9RxdX%2Bf%2BDp5OaQYXeYLwUmA2eE0%2BVWLdasIFoH5e8Ask5eAq%2BSHhxMtNIal1iATls3CGPaiZS4IOG5MjN0og%2B8EVNQn5GSgWkeqIgTXjKdbjyLmMAYgTUyiJ2Wsjw6ujbuvZpY1jMIoO134mzsgBb9lsqFC30ey77HTD%2BA%2BCPu%2Blj5uQoG10gWk0dMhpELkVePAgsmr3oXtzxXqJsezunP74NlQz0vVKMXkcej48b7prq612RZG10oPqmxbnZGj%2Fd1NZiXRuOrdck2h83J4k2cAvmFRhlrMHbZpzHz9MPqAkcIGOqUB9C5%2BPz4fShP5%2FiRQKB0usMmJyhX7o9ZMO5ydPF5X%2BZ0taqvr3xaxmtcTVaPEII%2BfU09%2BmdlLdRYz4uDk9hikraenjySwLZdtq83zLOa9SiOY%2B0VU%2FYTx5wICD7VWqStopLmfEhM%2Bmo12k%2Bcs%2FRsKrBZ4XH3KqSSyYPRhbLL2I8zOKnu81Fa8tsOW9AZHBkJRK8tbUHKt%2Frb2doR3o%2Fe%2BaLykE9Ce&X-Amz-Signature=4dddca61b8e7a8fbe4a92c5ccabbe4e148dda05a78d2766efeaee179d355f971&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6GKAUF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7Y%2BGozPbxNm3Dfttcp02nwUl7lI5ntZfS2c5gnKrayAiBJI7q%2BhAfGwvVwufCYakLOZ7UEdN9KJaLsMrcUFdQ%2B0ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMC0pBip9gHqi%2BJnUNKtwD4MfYLGOaVoFjLKCoakaJO4yifgfxoBNW9zoTlM5PAMW1bwkYx3GyzOOPEBxdYWz6LQwNp%2BCTL7dhc7MEaLcbSjsO5RJRnBtpHMkv3AHaVOBOWBsNgLdkIatACaH6bXefNLZao1G%2FdLObknz2Xt0M2SZS%2BHu5BuHh58FD6CCLu7hPRwz3H76eaKEanUU40lYOqWb6h2WZC6bQESutICoIKPck8G6R9B%2BXvGNXrh%2Bj7HkGHkgDPlWylEVjhptLkxkMqbrP0d%2FDbSc1wmC01CLv3HZcaFS7q5bY8i6Lf9sikfBXbXAxCrTAxxrNPqJxkdJtCiOqwO7z7JUF1hX7eR6XfQoqL6ZE%2F7ZtA8PDF%2F89tboUneDrvgGgt0x96iVmUox9pOWpLGnC66QaQju5aY54fS73FfSWuVEJVQOgD3gb0Xrj3nfGuteN0iUCA6XDyV6DaVMrBX6LOW3cK7umkU4y0RwiYWAKf2mqQ4ZpfxGwLxrdE61M6nmcJX1rMPUSzGq4ulxvGHOWHJsnjm8ZAezVsdhcVUXfThYDm2hUoPFmH1fiI9CSGTC2kWufuU3fYzV6yh26BoWvU7FxQz7WLGw4d4cOO8E%2Fs1t7gAxMTdF7YOi2Wb6zJ5KXOGllXQIw0YGRwgY6pgEHNR1keDRZ26CRVQZurljXLMm7pTVBwHV0ykke%2BtnkxpcvgwjzabaCFicJrk2T%2FBu3XFpC9ZzBxRHLNLmgncFyqaCOC6RKjKNxsFWrI01URFCAW6SoBnYMWkfAdQmljmTgX1Sg9vvAH2St%2BGHga7hH%2BXGd9%2FgTY5g55FjiUwS8VJAJv%2BwSAr%2BsliZ%2FcoTN50qWiCIRk%2F4bnxnJ4fNVePewweheQeu0&X-Amz-Signature=800cd8b87da7943c38b1e12feda9fd8c5b8708ee15a8eef7209b6abb8adec59b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDSEAI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuYxwWntEU3PrxU%2FBjy1J%2BU0b9GesSNi5tI2bj7e25PAiBuoOZGdPl3GfA%2FijvLjG1R2Zc9URv5L6xkGdBCjGuSXSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMN9v0D3wOTTxMwvuRKtwDmKCG9c98d15SbrLlooIqPIUc3yWytHXTsHzJ%2BUYKeZS%2FEJ2bg7B59cojpR69321Id0a5VMA%2FOfzptUV%2BG3JnpvxlhqHUqxCkyDUe3jW00BlNSNSDiE5uAjC3kb83z8xc07ISZHtghRFQEhtpz%2BlUx0%2F6LpR2LZBOXOC0cwCj9hn2EB4iBoi%2FvIENKkyzapnIsSuGavgnLWbKLNpvacw%2Bk3UpH29RfZFb6w%2BmgSIYphFPfr3k60fYjf%2BL3WLinq5lqukuzARh8h%2FVTVOoCGmwK7BARx5qYR8d7zb3nnRClhbbFB30kaocm9V5qSLwuCbI3GHWWlUE%2Bpds1kEgV0sJvEXsU79jkWqRHP4zu369YJj0NFdRPfs8EA7qEDCGOASt5jNV3o%2Bh0IEEeADOTurrpRdNs2u360M9R5tCfdKyoeI5cXHbwsMVqlMzKkvIquivn3iGMGdReUvO1zM5QsQTd72KjwI677YFMROCVeELy7LXMAxSrtP9gk3%2BThvcsyswBnomTtRBwgby7uZz%2Ff%2Bad2Ok57GsySCETELJcQa8wbULscqdZ8e3N48ifsgBadwxd1fuB3BZvATVbKC0pBa7urNWO8DYNjwJt2YxF5tgrek0X0AhnJB00j71hSQwwIGRwgY6pgG0rUoHnN%2BLHWN6kj9LrVvaa1plh3g%2FcZH7BIOXn9L6q0NPPiolweE4i5JT3bhMya%2BLh%2BgGbbR8rE%2FvgvHljDS47aZv1LOSWWy74iqWOHAnTA8f4uga7Act6fF0VwoJmD3cMDWANAn%2F6KChm5wd4%2F0OaaVmWhHFSycP1s4Xo2z4ftBFu3cIrtUmSskZKme2I6ftL8zp6G7dFmyplIyLnuvSE98aRxpg&X-Amz-Signature=3dce1ec66184509d058225e88b43dd6d5563e8064b2e5ffd13cab107a1b32b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WONBT3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFzJPI2hMbg7qnsJjNDze6kizh%2B1fiXxh9PKia7mWeQAiEArZhvtQKcUrGesdPDmJnj%2FK2W%2B0%2BPJTx1WV9YZZRPVPsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMwzwyC6CoopSQc87ircA6zR94HEhCT2AvCaXu8OrUk1c9vhhzsJoBRYrJfraG8PtGy6sCmLEMgM4JE9poymNPjBNjEDzx6GW9tyXbXzxrvJNaz7mnG9B7BXXksqee1BSprhH9l2RmeepamSMlNkrER7jUdvcbuTOVPq7KPaJvwxiY7SPcqiW6ZebT6BwoKbkFohj8wkbFiGrLBccD1ZD6NkfdV7elzsAescIqBlKu8dzJay4mjAfPk7OKM4yA7kZuFhQbeSvCQgT3%2FJsV9wny2dwGdXeuESnh7B%2BS1Ha2TqCQunrALEDb%2BeFCcCOeWwupaIiyQ%2B96SKqqSw7uOXzC8gIEPZbhcCAdGpB9PVE9RxdX%2Bf%2BDp5OaQYXeYLwUmA2eE0%2BVWLdasIFoH5e8Ask5eAq%2BSHhxMtNIal1iATls3CGPaiZS4IOG5MjN0og%2B8EVNQn5GSgWkeqIgTXjKdbjyLmMAYgTUyiJ2Wsjw6ujbuvZpY1jMIoO134mzsgBb9lsqFC30ey77HTD%2BA%2BCPu%2Blj5uQoG10gWk0dMhpELkVePAgsmr3oXtzxXqJsezunP74NlQz0vVKMXkcej48b7prq612RZG10oPqmxbnZGj%2Fd1NZiXRuOrdck2h83J4k2cAvmFRhlrMHbZpzHz9MPqAkcIGOqUB9C5%2BPz4fShP5%2FiRQKB0usMmJyhX7o9ZMO5ydPF5X%2BZ0taqvr3xaxmtcTVaPEII%2BfU09%2BmdlLdRYz4uDk9hikraenjySwLZdtq83zLOa9SiOY%2B0VU%2FYTx5wICD7VWqStopLmfEhM%2Bmo12k%2Bcs%2FRsKrBZ4XH3KqSSyYPRhbLL2I8zOKnu81Fa8tsOW9AZHBkJRK8tbUHKt%2Frb2doR3o%2Fe%2BaLykE9Ce&X-Amz-Signature=401fc4ee40c8dffaa301879bf83d29dc6b20b72a241e78ee247e02756fa2bc03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
