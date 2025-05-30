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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXVR5JF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrrmAArulD%2FuxHf%2FXJKxXAv9BwksYKlp4HUdLdHYiwPwIgaorwTHlK8LIa2OlY8p4%2F%2FuMBs8rhB7k2s6gf%2FqQQ0C0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd24r%2BjBYkgK7hzCyrcA5SKiN0QchiCTRlyXLxyyH1iU1FtZArgzMJG9ILG5H%2F96NKc%2FFIABt8s7lLVLV1yeUvpTpbW%2BOo%2Bq0xZDZyhPchwxViFOtbBxCf%2FdtIDptvWsy6tzxkMY189lZLd6oyQn3qFuhjT%2Fhfc%2FKldyFdP1FkAGqGkAI%2FioDlZm6L%2BpELE3W7N4Mi4xcvrYasBd2CwiV3cTYa2YzBejvAp3O4SyBzerICZrCuYSN1U%2F%2Fjmi3%2Br3nKCCP8H%2BKZ4EUz%2BLhA7QNpBpqExXfdw7WF8qmo3CzLdx%2B1wbeejsMDS6Wu8Av56L9Npobx9R4jLYqtFbXY0gDFe6JxyDy3sXlSeX9%2BM6dFtl2qn5ngx6pJR3oFwLEF4skgD2hbCshvQDyLbY8xixGYWe5DKfI5Nb8vAbCyPQkVArSmEcxNcqKge4VfS9%2FRcJBqXhcSqe25P9tsAFShYDC6G7BYJnxiHbHGKDmIji%2BXQ5ssMkTbDKCKqZI6yXK4CTvUr1OsURRk3tatoTI4nPL5rcOUrLtm06W48vwpAlgGxXBqB%2Bjy5tZuoOH7PuF%2FmRvRZxrxTtXmmyuRBvvlDiwtWCOEYcyHmCHC35EuGQeulu70SzoQgXyrzFcj%2B1ErkrHoTzkRZTKaEbQneMJ%2F958EGOqUBIRTyIgVrApu%2BHqxIXjKfVfRiEz4bQM5O6NYrUKO7rRQaPOwyrJmRp116MFUqxi2yL3Val1vcK3X6fSla2sZAqRb9m5oRpmQOJgbzR0CWIYiv4Gd1YXHr3fH%2FZuduSvw6Iefuhs8nhcIo9GklPlzC4lc6Tqzbqs5qccLF44W5dJw%2BciWWQyQZuA2bJZL6Q8IsftQA0MN%2Fd6FNQUS7WI%2FJXc7Yw4XW&X-Amz-Signature=207a45dda51d678b917482a0110a2bb5fb8e591df64c800b3f322a242c06a6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXVR5JF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrrmAArulD%2FuxHf%2FXJKxXAv9BwksYKlp4HUdLdHYiwPwIgaorwTHlK8LIa2OlY8p4%2F%2FuMBs8rhB7k2s6gf%2FqQQ0C0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd24r%2BjBYkgK7hzCyrcA5SKiN0QchiCTRlyXLxyyH1iU1FtZArgzMJG9ILG5H%2F96NKc%2FFIABt8s7lLVLV1yeUvpTpbW%2BOo%2Bq0xZDZyhPchwxViFOtbBxCf%2FdtIDptvWsy6tzxkMY189lZLd6oyQn3qFuhjT%2Fhfc%2FKldyFdP1FkAGqGkAI%2FioDlZm6L%2BpELE3W7N4Mi4xcvrYasBd2CwiV3cTYa2YzBejvAp3O4SyBzerICZrCuYSN1U%2F%2Fjmi3%2Br3nKCCP8H%2BKZ4EUz%2BLhA7QNpBpqExXfdw7WF8qmo3CzLdx%2B1wbeejsMDS6Wu8Av56L9Npobx9R4jLYqtFbXY0gDFe6JxyDy3sXlSeX9%2BM6dFtl2qn5ngx6pJR3oFwLEF4skgD2hbCshvQDyLbY8xixGYWe5DKfI5Nb8vAbCyPQkVArSmEcxNcqKge4VfS9%2FRcJBqXhcSqe25P9tsAFShYDC6G7BYJnxiHbHGKDmIji%2BXQ5ssMkTbDKCKqZI6yXK4CTvUr1OsURRk3tatoTI4nPL5rcOUrLtm06W48vwpAlgGxXBqB%2Bjy5tZuoOH7PuF%2FmRvRZxrxTtXmmyuRBvvlDiwtWCOEYcyHmCHC35EuGQeulu70SzoQgXyrzFcj%2B1ErkrHoTzkRZTKaEbQneMJ%2F958EGOqUBIRTyIgVrApu%2BHqxIXjKfVfRiEz4bQM5O6NYrUKO7rRQaPOwyrJmRp116MFUqxi2yL3Val1vcK3X6fSla2sZAqRb9m5oRpmQOJgbzR0CWIYiv4Gd1YXHr3fH%2FZuduSvw6Iefuhs8nhcIo9GklPlzC4lc6Tqzbqs5qccLF44W5dJw%2BciWWQyQZuA2bJZL6Q8IsftQA0MN%2Fd6FNQUS7WI%2FJXc7Yw4XW&X-Amz-Signature=ad45427b21d64ce9394c712fdceafa27d19687f35396e26fd0af9b452a0a6c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXVR5JF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrrmAArulD%2FuxHf%2FXJKxXAv9BwksYKlp4HUdLdHYiwPwIgaorwTHlK8LIa2OlY8p4%2F%2FuMBs8rhB7k2s6gf%2FqQQ0C0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd24r%2BjBYkgK7hzCyrcA5SKiN0QchiCTRlyXLxyyH1iU1FtZArgzMJG9ILG5H%2F96NKc%2FFIABt8s7lLVLV1yeUvpTpbW%2BOo%2Bq0xZDZyhPchwxViFOtbBxCf%2FdtIDptvWsy6tzxkMY189lZLd6oyQn3qFuhjT%2Fhfc%2FKldyFdP1FkAGqGkAI%2FioDlZm6L%2BpELE3W7N4Mi4xcvrYasBd2CwiV3cTYa2YzBejvAp3O4SyBzerICZrCuYSN1U%2F%2Fjmi3%2Br3nKCCP8H%2BKZ4EUz%2BLhA7QNpBpqExXfdw7WF8qmo3CzLdx%2B1wbeejsMDS6Wu8Av56L9Npobx9R4jLYqtFbXY0gDFe6JxyDy3sXlSeX9%2BM6dFtl2qn5ngx6pJR3oFwLEF4skgD2hbCshvQDyLbY8xixGYWe5DKfI5Nb8vAbCyPQkVArSmEcxNcqKge4VfS9%2FRcJBqXhcSqe25P9tsAFShYDC6G7BYJnxiHbHGKDmIji%2BXQ5ssMkTbDKCKqZI6yXK4CTvUr1OsURRk3tatoTI4nPL5rcOUrLtm06W48vwpAlgGxXBqB%2Bjy5tZuoOH7PuF%2FmRvRZxrxTtXmmyuRBvvlDiwtWCOEYcyHmCHC35EuGQeulu70SzoQgXyrzFcj%2B1ErkrHoTzkRZTKaEbQneMJ%2F958EGOqUBIRTyIgVrApu%2BHqxIXjKfVfRiEz4bQM5O6NYrUKO7rRQaPOwyrJmRp116MFUqxi2yL3Val1vcK3X6fSla2sZAqRb9m5oRpmQOJgbzR0CWIYiv4Gd1YXHr3fH%2FZuduSvw6Iefuhs8nhcIo9GklPlzC4lc6Tqzbqs5qccLF44W5dJw%2BciWWQyQZuA2bJZL6Q8IsftQA0MN%2Fd6FNQUS7WI%2FJXc7Yw4XW&X-Amz-Signature=9254b9adc3502cc756ead384c290fca5208b3f2fc427a6a456b58417a173e77b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3X53MYT%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBJss7RpjexIIPafUkrBluC%2B5ZJdcyoIkdXRCryvU5NAiBMYCYV61VzVn8e6ov298WLZuZKp79xhae5ox%2FJX2Ah9iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGludhhLDyr1ddghcKtwDKXxRF3m5sfqSRfZdwwpzscdNcsdSaBrxnZAt55ZnYso4SJCg30dIFwJonFE884d7xdRsfNywysF3mb%2FmgZqy%2FaoJ0qeO7Kw5FVroHM%2BnEWKzuZ%2Ft%2BTPCEbqReSYJeHLs9AEAeSZPLWtcXTga6uz%2FrqydPySiFSyNwaPOUtWYSUNblaE%2BFV6AUuYWMneEmyhOzRwyc3JwFVAASdbVuB%2FAg51McW%2B6ExHOeN06JMVHoLgdSE2mQ5D16zz0cZF%2FZBLYmwgVwWvmqa1GrmKwonPuzRewZa6fPNkEzNG%2BG21qV7HZkHCge9eAQmSiS9NXmQp0ogbjsjDoeudIycXUxmoats7oNZ9jO8ig5ZO%2BTHNSoaL9%2BhmZUaeLdM5QPZWOqhSssZc2SYYedAr7BEOeuXzjitrSiqpGfqr%2BM%2Fa7cUtak4Q1Cee8Y1y5JSv2z0GDd5WdGgL1%2BPm4xROwCUPQ53YzMooillqkMYKtEwEtB4tbqC1y1%2Fw5oxLGTTwJzRUrf3JdaVznjlFBExSKRI9NGMrfkJ2V%2BvHENotljS7K4wy224x2WYNxN6rgSSzZSsSO0m8wov7nxkIIMkvnj%2FseLJNhInIV1nWnASYcNaZRt5LKZDWS2TMKWpxWiAGkNqUwlv3nwQY6pgGG4PtyTfpmvnEa1nFhbICDtJTNqBkvdglEiiw04hfFdRyJjZt4JBeqgoWYf%2FgVQniHbqxc8LFGeC9xQaefO6y3AKO06j93HNkEZ77nvHZ0G5DTdmtT7uQIO5IXz8RTnYSdWqkyMdvkFT6suESL7tZ136g4B5hfCus%2BYkwTl8nB%2F%2FrlYSIh7TXQc9fGr83qj0WugojiYXIedYYHJM%2FhS4jAMX5GXNT9&X-Amz-Signature=21680da45dd56b497d106ac2492b253f861b9239bf280483c61cc26dfe82ff8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWVAY25%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGrJEUsT29Ikjjd8XHSwxv%2BYfK%2FpmLjGniWTGefzBXrAiBJeYFmMNYOqLpzhT9vrJJz8z9yIKIAaNhL9H6aDbsqHSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDb9R5z9tmPh5wfd%2BKtwDmmpCTuQ26lcfSGpZFsXG2CLVfiNGZbxv1UJY1%2BtiH1aCz0zQ8VdtFX%2B0uNIRA6Sql8sUfwJhiLdGaW%2FySA64gXDOkW5CzI%2BWq7XY4E54f%2Bb6jmnUtWeaBnMlPx3KUT3dyhMkiFlmLu6JvXdMlyWLo9StYg6b83gZYbLMogJJO35vpYWLIYmbrREm1Hy3rJTLyG8ghfIIp3KqgXLQ%2FWgxvYOx5tQHtvvqjB2XAXjlV5QqwJ5tfUTzswrXe9emTIBNLRCDJe8pVIC%2BXdsA8p%2Bkm0c7eTiMt82o1jyP6nr%2BSEjzTxVzgQyYNV69fgrqKhGWw2mdIcJj4Sbag9sr88KK5rOjHBpHL%2BZ1%2F4%2B2V5%2BFiGPaJ2Fn3xzEQcALKRieBrcvc3VeT7I0hmQEhNHZbNQyh%2FhwRtEP9uGlvFfXzEr4XWWmar95PeC78ccugQNH6IrLMpMTi5ZXbysNRvUJwUfPiiVyv1lNchZtJ71pkUPeAFjiB4grR2yrFVj7G3yt3dL7Oh%2BEaeVAvufFFFjJs8XFThXwq55r1%2F3v5K9LYoiO%2B5YoZiSdR1pa4PVSN%2F7oQmhRUgs6S%2Fdb5oQ8wl2dZ271cV%2FPKAjtVWigmI3ZRUyq70sfc%2BEUEhlCitPq2mwwn%2F3nwQY6pgGDrPRxuZPI0Cz%2BOZccHIvFTZmD7IXDqKj9P7O686x670eQZ5G8Sab2QTghGXz7eefO5wa2pKjUdlGXiYfndkHju91L0dQ87G9SHKrS%2Fp8AkV4PfRYxDbXdtVMrZPtQzS7Y3ziA0koYkbyldfHaLDygw9S4wLFF9omFEd8s2xwUu9IFlDq8pZSecV1Z71P0LA%2FietYXnfJNfdx1eo6nTsSXkfhNhTOI&X-Amz-Signature=a727d78bb7f7d6ab3d482c6f8f89e8e1173661c594ade4dcabe2880e5f90004b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXVR5JF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrrmAArulD%2FuxHf%2FXJKxXAv9BwksYKlp4HUdLdHYiwPwIgaorwTHlK8LIa2OlY8p4%2F%2FuMBs8rhB7k2s6gf%2FqQQ0C0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKd24r%2BjBYkgK7hzCyrcA5SKiN0QchiCTRlyXLxyyH1iU1FtZArgzMJG9ILG5H%2F96NKc%2FFIABt8s7lLVLV1yeUvpTpbW%2BOo%2Bq0xZDZyhPchwxViFOtbBxCf%2FdtIDptvWsy6tzxkMY189lZLd6oyQn3qFuhjT%2Fhfc%2FKldyFdP1FkAGqGkAI%2FioDlZm6L%2BpELE3W7N4Mi4xcvrYasBd2CwiV3cTYa2YzBejvAp3O4SyBzerICZrCuYSN1U%2F%2Fjmi3%2Br3nKCCP8H%2BKZ4EUz%2BLhA7QNpBpqExXfdw7WF8qmo3CzLdx%2B1wbeejsMDS6Wu8Av56L9Npobx9R4jLYqtFbXY0gDFe6JxyDy3sXlSeX9%2BM6dFtl2qn5ngx6pJR3oFwLEF4skgD2hbCshvQDyLbY8xixGYWe5DKfI5Nb8vAbCyPQkVArSmEcxNcqKge4VfS9%2FRcJBqXhcSqe25P9tsAFShYDC6G7BYJnxiHbHGKDmIji%2BXQ5ssMkTbDKCKqZI6yXK4CTvUr1OsURRk3tatoTI4nPL5rcOUrLtm06W48vwpAlgGxXBqB%2Bjy5tZuoOH7PuF%2FmRvRZxrxTtXmmyuRBvvlDiwtWCOEYcyHmCHC35EuGQeulu70SzoQgXyrzFcj%2B1ErkrHoTzkRZTKaEbQneMJ%2F958EGOqUBIRTyIgVrApu%2BHqxIXjKfVfRiEz4bQM5O6NYrUKO7rRQaPOwyrJmRp116MFUqxi2yL3Val1vcK3X6fSla2sZAqRb9m5oRpmQOJgbzR0CWIYiv4Gd1YXHr3fH%2FZuduSvw6Iefuhs8nhcIo9GklPlzC4lc6Tqzbqs5qccLF44W5dJw%2BciWWQyQZuA2bJZL6Q8IsftQA0MN%2Fd6FNQUS7WI%2FJXc7Yw4XW&X-Amz-Signature=07591c302f55f8aae4e9463aa9b62d7b9147309318d8f5c31312595255f33524&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
