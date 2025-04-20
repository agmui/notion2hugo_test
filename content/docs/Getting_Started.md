---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GEZCOC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDj1t6ZOBnxgGCCNV3z7LM5Xj0XgwB1F3EF3KHAQGIInQIgL%2FlyaqLMAHYLDhgPmpYz4AFUnSTZbhAgZB5k4EpN4hMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEnTH4yKqBlFJ4L3yrcAzHgn6sAkDkp9yB46p5i5AnAZFHVCtbeLuq2NFm4B22liId0od%2Fusepda%2Fd2yZWb%2F%2BZLA9EXmj48RkOvIxU8HFRLgviEis1MkDLZojFHBvkugWMUATOhxieqoAdxJZ2Gl9P7Y3HnH1wbuautPxsJ4pcJgdXhr7vuUdRXg1AqhVvjrxFYX1X3cl5oPsi4vUnuL1y4cUuTT3IofF3f2ZkPT5d%2FKAo%2FPsk3XOnyM%2Fj%2FU2fOnBxZbLM9e8X5DASrRF%2FY%2BQamq9zy3GwfXZ4Wt6AB77FVaWg9gydP2OPNHcSfYlhA7ZTkE5s0US1XLeO2LsFeYTiOLbnU14UzTa3N%2BNUNLU7GzSF1tsmlu3WKCyUKsNrBOthLpjrRvgI2XCHHG8ixv7dmZkBndLciPCYznwczClKWnDp8Xh2lhEp%2FQhLRS8OMYvdN8CrI5b12Amx2yOWjIrwidytXD7Y2RahiAtgJrHEbzLLgU8PypiH68wNDAsk9qMv0iyFJ3asZq%2B40EqCnngvihvt57GSgearUxV64QQBRiKxpG5%2FcaWDy0Lop0%2BNoUBVhY0%2BYKx%2FyzvVvdzyBKIyvUEpRWvdhbXoj7lYJKaZfzwFRtoUFAr9I4Xgx1izYhkE%2FEnAD9siICAKfMN%2FllMAGOqUBg7BZ358CmvW7uojJtzoMYG5HtW55QTI57Z3ehSh85C82vO8QbBeM4XNyaAe%2FOhS1niEWRbMcG0%2FhETwlvqLd4MPWm36RsPsezVKHJYFmKzu%2FDFc6hbF5PvODVcerYvcv49BL8aI54zKksOPgv7syBjzuho2007Zhwn3K051ny3CkaIwS0zHjKpXb2LTc4uFCEt6ZZuHhsaq0jNMUrBtXimOcTdSV&X-Amz-Signature=88e354139231dcc01ff72e4fb7f4ed4e471a2536c670f879f15ddead2d75a0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GEZCOC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDj1t6ZOBnxgGCCNV3z7LM5Xj0XgwB1F3EF3KHAQGIInQIgL%2FlyaqLMAHYLDhgPmpYz4AFUnSTZbhAgZB5k4EpN4hMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEnTH4yKqBlFJ4L3yrcAzHgn6sAkDkp9yB46p5i5AnAZFHVCtbeLuq2NFm4B22liId0od%2Fusepda%2Fd2yZWb%2F%2BZLA9EXmj48RkOvIxU8HFRLgviEis1MkDLZojFHBvkugWMUATOhxieqoAdxJZ2Gl9P7Y3HnH1wbuautPxsJ4pcJgdXhr7vuUdRXg1AqhVvjrxFYX1X3cl5oPsi4vUnuL1y4cUuTT3IofF3f2ZkPT5d%2FKAo%2FPsk3XOnyM%2Fj%2FU2fOnBxZbLM9e8X5DASrRF%2FY%2BQamq9zy3GwfXZ4Wt6AB77FVaWg9gydP2OPNHcSfYlhA7ZTkE5s0US1XLeO2LsFeYTiOLbnU14UzTa3N%2BNUNLU7GzSF1tsmlu3WKCyUKsNrBOthLpjrRvgI2XCHHG8ixv7dmZkBndLciPCYznwczClKWnDp8Xh2lhEp%2FQhLRS8OMYvdN8CrI5b12Amx2yOWjIrwidytXD7Y2RahiAtgJrHEbzLLgU8PypiH68wNDAsk9qMv0iyFJ3asZq%2B40EqCnngvihvt57GSgearUxV64QQBRiKxpG5%2FcaWDy0Lop0%2BNoUBVhY0%2BYKx%2FyzvVvdzyBKIyvUEpRWvdhbXoj7lYJKaZfzwFRtoUFAr9I4Xgx1izYhkE%2FEnAD9siICAKfMN%2FllMAGOqUBg7BZ358CmvW7uojJtzoMYG5HtW55QTI57Z3ehSh85C82vO8QbBeM4XNyaAe%2FOhS1niEWRbMcG0%2FhETwlvqLd4MPWm36RsPsezVKHJYFmKzu%2FDFc6hbF5PvODVcerYvcv49BL8aI54zKksOPgv7syBjzuho2007Zhwn3K051ny3CkaIwS0zHjKpXb2LTc4uFCEt6ZZuHhsaq0jNMUrBtXimOcTdSV&X-Amz-Signature=3c42cf8521f5c8edfdc035b314dd66608ad4ef78ecc83a9b6b982cee82dc31b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYZCM6K%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCbC0UySMvLCkgnIP5EDfJOJjhzNpFG87GVEH%2FrScKu2gIhAM7roB9YfSEGSOjqZEu7L39gWoZ%2F0kpLsifKQpVfq9I%2FKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynlXICWF574duAKjkq3APJ4htZSlmp%2BSZtaW2aIWuY%2FC5wolEMYvAyG%2FLU8%2BCJhLnNcD3gCtvk1aWH%2BpVb1VZVfgOnQebR9qx54yFKs4D0V1z7NI8hTJReI0tENh6duAkBD1kBXkBlA4BaTSIsCPgJhq1sDsZW2wv6q6pDiYtnetNEIbcGsVQwVyJT4QOqlLvTFoyQs2ZPElpXkRtD7C2CuKgGvBJ7n8KC2iEV5ajfolrdgSkuy1jq%2BzMY6Onf2IuL3U2D9qEVo%2BAxWGkECMxpgAmizC0XAMCQZa9H344wW5aTEPmDrhni1cFhgxXlfH3ORAYoBxV%2F4ETxGUyRn3aGC8Y93LK%2FyFSAKiuv7Jf5OGTSBtfLYTAnDk4r5keaGhhLbKK1e8t76R291%2FV%2BsAHawunFu6MWsQ%2FhWcy3IeSMiVW%2FUTwhZN3b4WWeEzj5%2Fa9faXgOXlbay7wGwZtnXWJqR0ghUDV%2B6PAuuZC85tyG5u5xAkZ1u8ys3%2B4lHUz5GXOxKHu7yBbyoVrIUTPAqN7CdiWiuHiOqOISgNPruSjmVGBvgZ1nCv4x%2BYEqgZ6C2MMJiMJZF3NRGXwSw2CJgOSJq7sQu%2B%2FRHMjSRinXuv2mtei2JGIo0glDJ%2F9RwG6mNN6dhnbZpZraQ7WlSTDZtZTABjqkAcFc4LuehO%2FHJBysff1jhmMhs%2FAeQ1UMW2Z9BWY5Va4ytWid%2FJd216o9RzuZIQcHAHCl5EWa%2BiPlMpRR6tHJjcI7B0%2FietrAfdQ4WyZ6iiprFOGn8hA%2BU%2F3fj3iTHTp9zbpsqmBOXI0ZM2ljYwpd2PlELcE5hGKy7FS%2FOaNIhLuaa3UH8%2FH1caGZ9x91UF%2FSW0KthCVTE0oi1Z2LC%2F%2BEhqGiKpUl&X-Amz-Signature=3fe1089f6b1f48b7bd8db9581459b7f90f449433115475d8705642bcb0fcbdac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RF7E6U%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCd1JHZ6DRVq9P0YpDCk0W7%2BDoOc0BnoBoktTV1Mkct2gIgPKsM%2FaM5PpLto80ZG8xb02A7BJRoik8yG0QrjlEKv0kqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrsaZYk7pGQEqV%2FkCrcA5i7UpzWMpnNB5KRrEPkIW3ZnH5Q6iBFqV3TWYWC%2BLDkldT3cJxWTh3T0i8xf2cLdsSSJ2NXDNz6YpLFibEykazYzKmKyw8dhxYc5e25pXE%2Fg7C4EbhO5UVtTF1x1RNAiYwDNjfxLo3HyEGKi9nmHbAghCs6%2BbcVXp%2BkTg9G0pQFqLCYHHXVjejohGM%2B3GTaDQjUODWHiALKa1%2FQWJRW%2F0R%2Bp4Eat361YrzKa2a78X9kMXsuuXXmXT0rVA2MYwc40ouHAuscmjUn98UvUM0B4qhixSTA%2BKAe9ORgLZW1eooDY7GAjozMCUbR4VSBJxVQ6YbkOQ52MdPuZd3b6N9J%2FUQgpqJ98CivJFjabszZH%2FQAF8k3x6ZvIZya1OjWgghGHw2CeDhb7gF0qgxaT%2FzZ3wL%2BJJar375DRX8A5UHTpJ%2BXu83G96R%2F%2FgI12nl8WyDkSFjKN14b%2FEy1n%2F3qNQEEmkZ14yN6rAbWrsWJtYNstbqzOWxeykEpgYS835PSL9T3VnLTyKMsuBYIkdO5x0kfua7P4c%2FeFk6WmeKlVFyAl6mDiZUvi5wSy1GSWnaPdKFU8UHOiQPL6VwCTDnZhb6RAeh1c4%2Fi0NA57emZI003oY4uSYUhKwda4GbJVrpyMPb6lMAGOqUBS6pTxD85E%2BoJpGM%2BbVcldGzKwr3lZStP8aTgR6JVKmq0hIJTYP%2BUbsxL0Qz90jcqHefVEKlxXwKvVR2jIWXAEcIJmWVmy3z3HF%2BHc%2Bz4rkuIBAAn2wn13ny%2BhuGlWr6tqfYx1ZhcnN%2Fs%2FtNuhj4HJsKtIEtSCRk2FuSkIE1soRV1sToce4qn09PtOZSHozwR5mAjWnkCY3jKLO6LE58q3Z1bGbHE&X-Amz-Signature=b0bd32ea773f276daf632b9866ee374fa703e948f1511c8a596f75107b0e586d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GEZCOC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDj1t6ZOBnxgGCCNV3z7LM5Xj0XgwB1F3EF3KHAQGIInQIgL%2FlyaqLMAHYLDhgPmpYz4AFUnSTZbhAgZB5k4EpN4hMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEnTH4yKqBlFJ4L3yrcAzHgn6sAkDkp9yB46p5i5AnAZFHVCtbeLuq2NFm4B22liId0od%2Fusepda%2Fd2yZWb%2F%2BZLA9EXmj48RkOvIxU8HFRLgviEis1MkDLZojFHBvkugWMUATOhxieqoAdxJZ2Gl9P7Y3HnH1wbuautPxsJ4pcJgdXhr7vuUdRXg1AqhVvjrxFYX1X3cl5oPsi4vUnuL1y4cUuTT3IofF3f2ZkPT5d%2FKAo%2FPsk3XOnyM%2Fj%2FU2fOnBxZbLM9e8X5DASrRF%2FY%2BQamq9zy3GwfXZ4Wt6AB77FVaWg9gydP2OPNHcSfYlhA7ZTkE5s0US1XLeO2LsFeYTiOLbnU14UzTa3N%2BNUNLU7GzSF1tsmlu3WKCyUKsNrBOthLpjrRvgI2XCHHG8ixv7dmZkBndLciPCYznwczClKWnDp8Xh2lhEp%2FQhLRS8OMYvdN8CrI5b12Amx2yOWjIrwidytXD7Y2RahiAtgJrHEbzLLgU8PypiH68wNDAsk9qMv0iyFJ3asZq%2B40EqCnngvihvt57GSgearUxV64QQBRiKxpG5%2FcaWDy0Lop0%2BNoUBVhY0%2BYKx%2FyzvVvdzyBKIyvUEpRWvdhbXoj7lYJKaZfzwFRtoUFAr9I4Xgx1izYhkE%2FEnAD9siICAKfMN%2FllMAGOqUBg7BZ358CmvW7uojJtzoMYG5HtW55QTI57Z3ehSh85C82vO8QbBeM4XNyaAe%2FOhS1niEWRbMcG0%2FhETwlvqLd4MPWm36RsPsezVKHJYFmKzu%2FDFc6hbF5PvODVcerYvcv49BL8aI54zKksOPgv7syBjzuho2007Zhwn3K051ny3CkaIwS0zHjKpXb2LTc4uFCEt6ZZuHhsaq0jNMUrBtXimOcTdSV&X-Amz-Signature=b6046ba85d36b836feba9f76eb590021494722b67d92a03114ecda0681b259db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
