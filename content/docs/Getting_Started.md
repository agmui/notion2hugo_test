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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667337GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJMd5rreEGHlXPJXKRpAY%2F1NNXHZdrY7ALV4UrB7I%2FIAIhAOYkpQqpseZjnjThSCuC1hm2euKtZCpVnh%2BZe0v7yE2dKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyoh3%2BdxFoNZrC17cgq3APvDJshV8x%2FtVYW448O0r7EJEy9G%2FKXB5Bh44Y57F1SdPRsTNcDkPyFgnyu5NZ8ZfijmvjfDWtreKN26bWeP6m6OZrGGvqEd2Ep0WEUqVxM77N%2B7Vllh8z%2Buk8PPmPfYlfhf7YCxfcdzJdjQAfSJdrjLvrEk4KnW7odvDXF3gdcMRzayRTOpBCakkCN8gm7Sk%2FE%2Bo6MLZw%2FP%2BeAMw1O5%2FjEEYEXF3eqKFd4dKve1UN2CTbqsDgXU6djn35Zrmq4Bu0smczZcDTT6YtxQE6iyWOuoJL9URgE5g84BbrfCauxoxiZvyZNBnEOQ60DfX9EPtthRVC0umy%2Btxmpw7sWWVjfotmjzVKA9CqRjCy59swPpKlOZhOSkRDmPq3qhbAHMOphqi9iZBC36JIckm%2FjsGx8Xp%2BkvW8AmIQHzjYTKoRm0Ne%2BKkvB%2B1nBw5MBuf21QmBIimfOSNKi3pxp5HmAjheDZTKidnTMahtLiWVw2QqnIxPNieD9HI1C3ZPaoUvG34gJpJkA0Af4%2Bh43cN6HPDZXo8IpT9XgmNAFvnMve9v4%2BCTXC9rqoXrqT9Pvz4KJPiFZ4a0FnuCGfrlcXHa6irUQySv9gWlPcbxkbAhmjQTCtu65Nc2SxADfFDmsOzDCmOLEBjqkAbgPQ1LoFLHFvWpU2%2F4lme74mY%2BcSdwr88KyRGi%2BhbA04koUq4hkK5TmPd2GuVJaiARoD3GZT6qCkD5eALjhSwPgM2z7IoxcNRD5OIbHHQIYtJ7LlYxMdZeWoUSmfJUDuLe5ojQ8eSxCZOuCVLzIo6kcJX4pMXKR2wEQPhTHr9NIGVqGPq50sfdbrtkUslaoPZDV1b%2FMDsMOSlXF3GSBFrlnOASN&X-Amz-Signature=1c75a8a2445fb0154143854665b733d6fad31139e97a22b9ba0ce55cdcfeccd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667337GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJMd5rreEGHlXPJXKRpAY%2F1NNXHZdrY7ALV4UrB7I%2FIAIhAOYkpQqpseZjnjThSCuC1hm2euKtZCpVnh%2BZe0v7yE2dKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyoh3%2BdxFoNZrC17cgq3APvDJshV8x%2FtVYW448O0r7EJEy9G%2FKXB5Bh44Y57F1SdPRsTNcDkPyFgnyu5NZ8ZfijmvjfDWtreKN26bWeP6m6OZrGGvqEd2Ep0WEUqVxM77N%2B7Vllh8z%2Buk8PPmPfYlfhf7YCxfcdzJdjQAfSJdrjLvrEk4KnW7odvDXF3gdcMRzayRTOpBCakkCN8gm7Sk%2FE%2Bo6MLZw%2FP%2BeAMw1O5%2FjEEYEXF3eqKFd4dKve1UN2CTbqsDgXU6djn35Zrmq4Bu0smczZcDTT6YtxQE6iyWOuoJL9URgE5g84BbrfCauxoxiZvyZNBnEOQ60DfX9EPtthRVC0umy%2Btxmpw7sWWVjfotmjzVKA9CqRjCy59swPpKlOZhOSkRDmPq3qhbAHMOphqi9iZBC36JIckm%2FjsGx8Xp%2BkvW8AmIQHzjYTKoRm0Ne%2BKkvB%2B1nBw5MBuf21QmBIimfOSNKi3pxp5HmAjheDZTKidnTMahtLiWVw2QqnIxPNieD9HI1C3ZPaoUvG34gJpJkA0Af4%2Bh43cN6HPDZXo8IpT9XgmNAFvnMve9v4%2BCTXC9rqoXrqT9Pvz4KJPiFZ4a0FnuCGfrlcXHa6irUQySv9gWlPcbxkbAhmjQTCtu65Nc2SxADfFDmsOzDCmOLEBjqkAbgPQ1LoFLHFvWpU2%2F4lme74mY%2BcSdwr88KyRGi%2BhbA04koUq4hkK5TmPd2GuVJaiARoD3GZT6qCkD5eALjhSwPgM2z7IoxcNRD5OIbHHQIYtJ7LlYxMdZeWoUSmfJUDuLe5ojQ8eSxCZOuCVLzIo6kcJX4pMXKR2wEQPhTHr9NIGVqGPq50sfdbrtkUslaoPZDV1b%2FMDsMOSlXF3GSBFrlnOASN&X-Amz-Signature=355cd691720a5cbe16a06215d342145a2fafa9e2fee072c73f3472e3cc62c452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667337GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJMd5rreEGHlXPJXKRpAY%2F1NNXHZdrY7ALV4UrB7I%2FIAIhAOYkpQqpseZjnjThSCuC1hm2euKtZCpVnh%2BZe0v7yE2dKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyoh3%2BdxFoNZrC17cgq3APvDJshV8x%2FtVYW448O0r7EJEy9G%2FKXB5Bh44Y57F1SdPRsTNcDkPyFgnyu5NZ8ZfijmvjfDWtreKN26bWeP6m6OZrGGvqEd2Ep0WEUqVxM77N%2B7Vllh8z%2Buk8PPmPfYlfhf7YCxfcdzJdjQAfSJdrjLvrEk4KnW7odvDXF3gdcMRzayRTOpBCakkCN8gm7Sk%2FE%2Bo6MLZw%2FP%2BeAMw1O5%2FjEEYEXF3eqKFd4dKve1UN2CTbqsDgXU6djn35Zrmq4Bu0smczZcDTT6YtxQE6iyWOuoJL9URgE5g84BbrfCauxoxiZvyZNBnEOQ60DfX9EPtthRVC0umy%2Btxmpw7sWWVjfotmjzVKA9CqRjCy59swPpKlOZhOSkRDmPq3qhbAHMOphqi9iZBC36JIckm%2FjsGx8Xp%2BkvW8AmIQHzjYTKoRm0Ne%2BKkvB%2B1nBw5MBuf21QmBIimfOSNKi3pxp5HmAjheDZTKidnTMahtLiWVw2QqnIxPNieD9HI1C3ZPaoUvG34gJpJkA0Af4%2Bh43cN6HPDZXo8IpT9XgmNAFvnMve9v4%2BCTXC9rqoXrqT9Pvz4KJPiFZ4a0FnuCGfrlcXHa6irUQySv9gWlPcbxkbAhmjQTCtu65Nc2SxADfFDmsOzDCmOLEBjqkAbgPQ1LoFLHFvWpU2%2F4lme74mY%2BcSdwr88KyRGi%2BhbA04koUq4hkK5TmPd2GuVJaiARoD3GZT6qCkD5eALjhSwPgM2z7IoxcNRD5OIbHHQIYtJ7LlYxMdZeWoUSmfJUDuLe5ojQ8eSxCZOuCVLzIo6kcJX4pMXKR2wEQPhTHr9NIGVqGPq50sfdbrtkUslaoPZDV1b%2FMDsMOSlXF3GSBFrlnOASN&X-Amz-Signature=9255cc2882d39a89e41644e480849317b7ecc702db90d3c89fd4ab696ed0fa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTY3FGZJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9C32yNbcWByE%2BKSKnh%2BI3HKheffq5L15htQ4w1XBjEAiEAo8o%2FPuxjXpBgju3OzCX5Q8UYaGA3mEUXnPyKEPGU24MqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOqNwVbdmM%2BcwCxEircA9fvBLpoykFb5cDtdnnddwCBKxEhostkNujJLqS8FbLpUhJyFHNjBKQ99BEc%2BVhnriz9RjalHWloLRqfC6cWmKgTlvQNpeFG6nqR02aXctf28pU6kt1LOViXws%2FKQHpgtv4GDafrjnI8Exn3tgpFs0aare8yn0cMtaOY2EoPQ9xzVIPjW27BFWwoNb0c28DnGND8Jpm%2B%2FtoYdtYUbnWMSHGpXZpNm9hD7gKbpqPiri70Af8yFsB6QQ%2Ff3ZGIwQLJzmdk4nvLBuHOioYD5yIJ4cIrTdfPKVg5%2Fg3qid8%2FQa9kiJOBRcHjDvegZO1dFbNokpOEgmfQ9v67fRE0jdB3Usgd43OLQproIvQhOKC%2B%2BxF2Y0Wh5%2BfuZYoDhMGnkA%2FkIjJn7s5QvQZ6QDzVDsF0eBluU6jCl8mRyrXz9Z2MkULeV%2Fe64dpEtX20LW5siA4xXQfqQGnCNCAFdfGzdEu0z2usfEShzH7ug%2BKHUPVEt7i2F5TzBF2eovJ4KENB8utX5bfUp7%2FRcdiy1aUxeaqT%2FxbzL79p8b6ioWjaln8ZEHK42JG8foommPo15EqvwkahzkMClSWxv10eYFkatHPkHlEaCYadfkZyH94M8n1pWYS9bkp8UNUBUtntd0TMMKSY4sQGOqUBF8781xIe2%2BWmGVLkzjdKPbS11rPH76UTibkajbo2eDQnkLg5aa3gEPW5bJ0BA6NR6UeGFtTJzDa9cGkFKhFVr3%2BLzI%2Fz%2B3m23pnRzDHSWHsWpmvkBgtCupwFvqxBYXw3PvGtaFBCUwy9BJCf%2FP86Il1jjax6MeE0qdEIm2OOpt8P5%2F03AyWS7VoVuZ2J9G3G6f5nGR6bW%2B8aMV3C%2F0PBMfXRM0nv&X-Amz-Signature=19fd25ab596202993b2c1419a23de1efbce5b2fcd97236acd609ac9b742e533e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEJCNSY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDshk%2BdBxP%2FTaCsmc0M%2BuJubU9o5Mk8jW1OfA7NtAZiTwIhAN6V6BnazMaDFNSkuxYbU7I6znzBYnOHt7Z6uQIGaf1uKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTlL9QYuDS285Oexkq3APyxKC%2FLylhFueqlmYrs1O5ZQZC6on9%2F3JUfvPWBZwYMv8m0jpeG5ex5yYOgNZw9Sx0pJ%2FZ3DYOMnhSOA%2FGOfHSp7mHpQOXvmK5GNTMH747kd2GPtaxE%2Ft0Ty14vFJiOsXao9MpRtz%2BF7Hq2upSGL5QSThA9eYrFxHg%2Fe3zpVOxH0HXDZNJNkgfnVeofH3A0DRl8enzt6pKdEq5ZRIS%2B%2FOorh0YbqcpaOqWKY1guByrb5v8YIpFd5ZyXO3gGll9bBD08WhHqmAGDDBzRLn7DuV0Gdyc3QbuLImG2cKxue4AEob8bb1iMEziGGWsWSEaRtcLQni%2BGlCmIaI53GYBScs%2BHhrFkINHnkI9uI8Zic4EPJOv6AtesvI%2FlNgtuevk7kGlv3si2f6yzZDHAdFnrDeKVDxfAebZFYr1YcG9x%2BwEsV5UitN%2F9Mm0IYO3Gx6oa3R23Q3tRW2%2BTswt0QgulmCy0M%2FHZvev6ccBedSU8k0b3h4uesRTjQrKKzWZ3LCqIHrlQeCb%2B6K4DVRXPLxwNkomNsry55O7TOmcfXLN37KX%2FeP1Uh%2F%2FqWVrHoB0MQJUakwwJbcJBZpvvkw8xKLmIke9ufIhtv4zKga3SJgRxxmUQqMTwCvMtXJjFy8iBDCQmOLEBjqkAbEeI0oY1ECPqrTsHAInscyXD9eFuHKvxQbwiLsP9m0MdNgPKtgE3vH%2Fk40WeMePTaRBA5q6qIwhRdazZqiw4Idwqo5EXwVeKjcmeyi6WNKbnLiZk1%2BO4uhUg%2BlWXyfTyTet%2BfY1dnKZx4fsieRsVcEgsn0vslA9cd8OTyNRb9l951NpMAwziidIczWaSyxgXx4MvqPw%2FRfxhuvjGgu3cLtwOwIi&X-Amz-Signature=893fb9065b4502d2f9b91441327c36b1890548fac155a202b5e8b5913499ce55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667337GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJMd5rreEGHlXPJXKRpAY%2F1NNXHZdrY7ALV4UrB7I%2FIAIhAOYkpQqpseZjnjThSCuC1hm2euKtZCpVnh%2BZe0v7yE2dKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyoh3%2BdxFoNZrC17cgq3APvDJshV8x%2FtVYW448O0r7EJEy9G%2FKXB5Bh44Y57F1SdPRsTNcDkPyFgnyu5NZ8ZfijmvjfDWtreKN26bWeP6m6OZrGGvqEd2Ep0WEUqVxM77N%2B7Vllh8z%2Buk8PPmPfYlfhf7YCxfcdzJdjQAfSJdrjLvrEk4KnW7odvDXF3gdcMRzayRTOpBCakkCN8gm7Sk%2FE%2Bo6MLZw%2FP%2BeAMw1O5%2FjEEYEXF3eqKFd4dKve1UN2CTbqsDgXU6djn35Zrmq4Bu0smczZcDTT6YtxQE6iyWOuoJL9URgE5g84BbrfCauxoxiZvyZNBnEOQ60DfX9EPtthRVC0umy%2Btxmpw7sWWVjfotmjzVKA9CqRjCy59swPpKlOZhOSkRDmPq3qhbAHMOphqi9iZBC36JIckm%2FjsGx8Xp%2BkvW8AmIQHzjYTKoRm0Ne%2BKkvB%2B1nBw5MBuf21QmBIimfOSNKi3pxp5HmAjheDZTKidnTMahtLiWVw2QqnIxPNieD9HI1C3ZPaoUvG34gJpJkA0Af4%2Bh43cN6HPDZXo8IpT9XgmNAFvnMve9v4%2BCTXC9rqoXrqT9Pvz4KJPiFZ4a0FnuCGfrlcXHa6irUQySv9gWlPcbxkbAhmjQTCtu65Nc2SxADfFDmsOzDCmOLEBjqkAbgPQ1LoFLHFvWpU2%2F4lme74mY%2BcSdwr88KyRGi%2BhbA04koUq4hkK5TmPd2GuVJaiARoD3GZT6qCkD5eALjhSwPgM2z7IoxcNRD5OIbHHQIYtJ7LlYxMdZeWoUSmfJUDuLe5ojQ8eSxCZOuCVLzIo6kcJX4pMXKR2wEQPhTHr9NIGVqGPq50sfdbrtkUslaoPZDV1b%2FMDsMOSlXF3GSBFrlnOASN&X-Amz-Signature=af8f6d34d4d6b6b94b8ada6f20058641f392c3b1039fdd84fceab2c6821aab1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
