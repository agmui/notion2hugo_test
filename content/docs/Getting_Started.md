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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M47GLDK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYYFA97pKmRmZxyWTDY6mAfEoMwt4fsde6hSbALqVLRAiB7FzIRI9ibFbuJXePNerFZnylcAmIPCDB9l3wJrLkepir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM3hVJYtbsnyxirhriKtwDw1BDPfTcHbusMWjfHkrBVStp22iYdWIXnJ%2BCN9YhAL4kMeDeZAS0yHA%2Fb4iB%2F5jTom3RxYe7O8OEgoxgj3Qx%2BsRlDzVJGhvXVWya%2BUVkgqe3T3KZspugsJTcl1%2BNcpmd08rRVd%2Bf7gKv26pJW2I3l0vBKy5du9XK5mKjzknxwdgmwGdE6O4PjYku8SyCLvbmYG5uJL2WbiuLXaZiIuA4SfNBGDncdEiQIGl4VmrsiFEcIWYWdq798xTijFlrS1aTx6%2BJrxlOkJF8q23gdqTPviL28c4JbKTeGg5QOrVcSmdSy6DQbP710KmvSnAsFlqpsbOkaUa8wSZB6EOcpv%2FYC1mL69swFTZCkjCnxI5Qtd7GBIA%2BRFNIdzrKpUAYFo3zEPReIOmjbQOlz6EAl4ntzmiA3znXAmy%2BpWj7M%2BFum5h2coQq%2Ft%2FPYbtRJ5K4uHylgu0QHJSeTsLvDvtTXkEXFxu3we7O7UbuM%2BRkIK7BEd3CsDSXcQHOpniBXqKz4I9xaFfWspVOB4LnZyDUE72wG4CN65ziyjxdZW7D8n8St5MOjzBg%2BsFE85OKulgwQJAJq1k3iofd%2FEr6a5u%2BEQnjqzi%2FByKNLqEfqcrfrfYzdD5nw8vvNvPL7uCw7Y0w67HswAY6pgGqGi%2FzrLCEisAjVn1O9Ys7EiZPeTGsr3OFs2zmPmKwMGDihydaaXwDC5ERV6V9rmudDKv4hDK6yzJHxIfanU%2FSm5VMb6RxMHfhR%2F9rcruLeeEAeoE1K3LvudDgMLfYVWSz1PqVJhgUUnXij537AbRJZPWyqpp37JTotqNtbrLVRvMiA2Z3kjkdUlqslr9Et%2B1RZzSV22bOhr9TOlKDRHrmuLJTxYx%2F&X-Amz-Signature=f23455b7542ac1459e874810a83b1b88d85408d5a3acd758f08f84731450cd32&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M47GLDK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYYFA97pKmRmZxyWTDY6mAfEoMwt4fsde6hSbALqVLRAiB7FzIRI9ibFbuJXePNerFZnylcAmIPCDB9l3wJrLkepir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM3hVJYtbsnyxirhriKtwDw1BDPfTcHbusMWjfHkrBVStp22iYdWIXnJ%2BCN9YhAL4kMeDeZAS0yHA%2Fb4iB%2F5jTom3RxYe7O8OEgoxgj3Qx%2BsRlDzVJGhvXVWya%2BUVkgqe3T3KZspugsJTcl1%2BNcpmd08rRVd%2Bf7gKv26pJW2I3l0vBKy5du9XK5mKjzknxwdgmwGdE6O4PjYku8SyCLvbmYG5uJL2WbiuLXaZiIuA4SfNBGDncdEiQIGl4VmrsiFEcIWYWdq798xTijFlrS1aTx6%2BJrxlOkJF8q23gdqTPviL28c4JbKTeGg5QOrVcSmdSy6DQbP710KmvSnAsFlqpsbOkaUa8wSZB6EOcpv%2FYC1mL69swFTZCkjCnxI5Qtd7GBIA%2BRFNIdzrKpUAYFo3zEPReIOmjbQOlz6EAl4ntzmiA3znXAmy%2BpWj7M%2BFum5h2coQq%2Ft%2FPYbtRJ5K4uHylgu0QHJSeTsLvDvtTXkEXFxu3we7O7UbuM%2BRkIK7BEd3CsDSXcQHOpniBXqKz4I9xaFfWspVOB4LnZyDUE72wG4CN65ziyjxdZW7D8n8St5MOjzBg%2BsFE85OKulgwQJAJq1k3iofd%2FEr6a5u%2BEQnjqzi%2FByKNLqEfqcrfrfYzdD5nw8vvNvPL7uCw7Y0w67HswAY6pgGqGi%2FzrLCEisAjVn1O9Ys7EiZPeTGsr3OFs2zmPmKwMGDihydaaXwDC5ERV6V9rmudDKv4hDK6yzJHxIfanU%2FSm5VMb6RxMHfhR%2F9rcruLeeEAeoE1K3LvudDgMLfYVWSz1PqVJhgUUnXij537AbRJZPWyqpp37JTotqNtbrLVRvMiA2Z3kjkdUlqslr9Et%2B1RZzSV22bOhr9TOlKDRHrmuLJTxYx%2F&X-Amz-Signature=58030e93c8677417d35b7c87aa49be7c1171127cc95263d36058f784fc0445cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M47GLDK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYYFA97pKmRmZxyWTDY6mAfEoMwt4fsde6hSbALqVLRAiB7FzIRI9ibFbuJXePNerFZnylcAmIPCDB9l3wJrLkepir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM3hVJYtbsnyxirhriKtwDw1BDPfTcHbusMWjfHkrBVStp22iYdWIXnJ%2BCN9YhAL4kMeDeZAS0yHA%2Fb4iB%2F5jTom3RxYe7O8OEgoxgj3Qx%2BsRlDzVJGhvXVWya%2BUVkgqe3T3KZspugsJTcl1%2BNcpmd08rRVd%2Bf7gKv26pJW2I3l0vBKy5du9XK5mKjzknxwdgmwGdE6O4PjYku8SyCLvbmYG5uJL2WbiuLXaZiIuA4SfNBGDncdEiQIGl4VmrsiFEcIWYWdq798xTijFlrS1aTx6%2BJrxlOkJF8q23gdqTPviL28c4JbKTeGg5QOrVcSmdSy6DQbP710KmvSnAsFlqpsbOkaUa8wSZB6EOcpv%2FYC1mL69swFTZCkjCnxI5Qtd7GBIA%2BRFNIdzrKpUAYFo3zEPReIOmjbQOlz6EAl4ntzmiA3znXAmy%2BpWj7M%2BFum5h2coQq%2Ft%2FPYbtRJ5K4uHylgu0QHJSeTsLvDvtTXkEXFxu3we7O7UbuM%2BRkIK7BEd3CsDSXcQHOpniBXqKz4I9xaFfWspVOB4LnZyDUE72wG4CN65ziyjxdZW7D8n8St5MOjzBg%2BsFE85OKulgwQJAJq1k3iofd%2FEr6a5u%2BEQnjqzi%2FByKNLqEfqcrfrfYzdD5nw8vvNvPL7uCw7Y0w67HswAY6pgGqGi%2FzrLCEisAjVn1O9Ys7EiZPeTGsr3OFs2zmPmKwMGDihydaaXwDC5ERV6V9rmudDKv4hDK6yzJHxIfanU%2FSm5VMb6RxMHfhR%2F9rcruLeeEAeoE1K3LvudDgMLfYVWSz1PqVJhgUUnXij537AbRJZPWyqpp37JTotqNtbrLVRvMiA2Z3kjkdUlqslr9Et%2B1RZzSV22bOhr9TOlKDRHrmuLJTxYx%2F&X-Amz-Signature=60524c9b109443481f8d5a8c4c95351c7e71e40b015502b79d0911330b55fa4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIRHTBI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFM0jiRfFZyEXcejvp1nsX6gVdTmfNyVAC%2BZLg8OxtggIhANFe0DiGbvuk65poAS4EQJIjjnMcXhccYidxwjtiGGBsKv8DCFkQABoMNjM3NDIzMTgzODA1IgzNPxz52x%2BhRGMRyWEq3ANdfhGU3OWOkJ%2ByG60ZE66A3svlkdcj%2F81cy%2BDRBct6ti%2B5tplMxv8k26yxW6K%2B%2FPD50UCSwiHF6m2mE2dr7S513BCn14I41Ax5vRVJffTomHGqAFWJNgwfUVjzIjjYu2gIdPoSJKVWLRo8mx2u2NPHgU1bbJAo%2Fyv1ZXE15evFf3SbbiJEXp1rBh8aV%2B4gQosjX43VwTic8hMmhTp6HjhFLBhoBFXTI5BLIdqIkfk5ktihkO2huM7qx1u0CF1gfVgWYd3KAcqSdRoFoOQRxb%2FV1nc2dphZWi7tHreG8ttsKMh2j1Xz4i5qOAsxnB2DaFrhYdT%2F%2FPhKLQY4vkVfCUwFX%2BJ6RQvWhImZgVyOUxbQfxboiLeDGzU71Lw0NQg1Q5gcR0JPrsPruDjI5%2BRyHVnPtwBIlje8k4LH9GvuTA0DOex%2BA4B6dCOfwKu0LxcjGvT7ErOZCTmeNJR8tEpc14gdKtkde%2F0KIiFDF1ClfqxM6jJe4ZAlUW8AKCRzGMgiUBx404MvEPjNW4ZIfQyIt9iQBxjTVmzoNBMElFy3aOrXJvGpf6ICr309md4Zv%2B7Kcx%2FOpvmx8s7ggx7owr5yIJeBaRfddlJx0ZYZyNwU7y14yAnm8d6Syk4AhFB8sDDosOzABjqkAQsSiEGrzkOJ54b9A6DaxihZvb%2BscQoUzEA1vyky8hhNgyCZZpPx4LcCM079PksO1LFkQ91ussmPMe%2Fno%2FCTKNFWraY9uqQ%2FXEDn0J7qUBZ3wAiA1Wo0Io1x6J5obbNGQYG0k8CKSKmBmiaRrSj03D6xqZoQwDSznCQXI5EQRS16jH7TJBnNoWaBljmVqCDemypGbrQNEJrEgOjfxRMLQSdj1%2BRl&X-Amz-Signature=43f0e9a1c2f3cda99c569ca2739e82503a0e1a52c42c8fcc4d12bfa92814083b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2AMOQCA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgZOiQFz72ivpyvvkEJlKEY55B4HzKiMVRVNwd4fQHwAIgT1XT2e8umeqJUaUr%2FUCcZkV6QNuUcDZ573My6sYu2Fsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGLWHDvL9LHS4a6fXircA%2BaJohsUr0RiabR5SdIFd1%2BIZz%2FdQJ1O36c9QQK7RlfDbiATkpUDn9nuiGDzlSzkcvMVV3F41p%2F3CaJmCmw%2BYZD4NC1pgljAhYsb34V1aqIgWpyYIL8slz5JT2Ulm4fiat0OpJWuFisqCIdjzv3I1ktPh5LADhZy3GBa%2BP4MwxwDZZbJ13Q9H%2FFGtr0jAwDEJ4qki6wLcFVxltQf4mWD5Kkj%2FgG92DaloJPFGHHeov2cRYNer7TygNpoADq7TOO4wojXybKJM9eqpT1Bs4R5I0Msozy0v8BJhgODK55hNNRViZBCXdBvGrl9wGcOr9FjLIavHnqTlYsGk%2Fog4QArpqckJqxRc7eiN%2FcTkt2iHRP2j6PsxrAm2iQRhKuMuN99C5525jh3R2GX8emHxcEjqwVrMjEUdiOAKxd3cprio9FYNe88tNA7TA2A1s59gw4BKcQW%2BJmvARnII%2FLcR%2BO9pfsDJrDot0%2BS36kIV8GmX96lRlxK7YPUkF8b%2BuTTtjWJF6mDFdPFUH0E7dPM6hNfN%2FdsdCj%2FnY5G8jND5mTXGrEHvsUsTmHc4W9RRRDNFvDtplw1CcE1gbVIx3h2vyU1TVIGynkJBbN11K5hwDlmbuLrUgLobhGXJNR9pYI%2FMOaw7MAGOqUBR1qmeAHtHx5cP8V7l47oHm5UWsJJDQkwEALsVTlrmt8QVqp528ROS8H3A7vf7RMNXXQCPjzIKEzYvKp0d8ZHRq%2Fq43hKyiz7lsksrr8znwwF0L5uNGguQ%2FKke6NGCCZ5ScWfzlzDYlLR0Qjuk30jNk3IFf4x4QBQDPgXIQmIOrc2cZ1tE3oVJZ%2FA1siH8xJbIoUm90fjiyjSEHZyWSNRkYI9%2Btcl&X-Amz-Signature=1bdd34d7287e94ac70b14782fda75ae7f6d09e911767a3294424268b75c1c679&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M47GLDK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYYFA97pKmRmZxyWTDY6mAfEoMwt4fsde6hSbALqVLRAiB7FzIRI9ibFbuJXePNerFZnylcAmIPCDB9l3wJrLkepir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM3hVJYtbsnyxirhriKtwDw1BDPfTcHbusMWjfHkrBVStp22iYdWIXnJ%2BCN9YhAL4kMeDeZAS0yHA%2Fb4iB%2F5jTom3RxYe7O8OEgoxgj3Qx%2BsRlDzVJGhvXVWya%2BUVkgqe3T3KZspugsJTcl1%2BNcpmd08rRVd%2Bf7gKv26pJW2I3l0vBKy5du9XK5mKjzknxwdgmwGdE6O4PjYku8SyCLvbmYG5uJL2WbiuLXaZiIuA4SfNBGDncdEiQIGl4VmrsiFEcIWYWdq798xTijFlrS1aTx6%2BJrxlOkJF8q23gdqTPviL28c4JbKTeGg5QOrVcSmdSy6DQbP710KmvSnAsFlqpsbOkaUa8wSZB6EOcpv%2FYC1mL69swFTZCkjCnxI5Qtd7GBIA%2BRFNIdzrKpUAYFo3zEPReIOmjbQOlz6EAl4ntzmiA3znXAmy%2BpWj7M%2BFum5h2coQq%2Ft%2FPYbtRJ5K4uHylgu0QHJSeTsLvDvtTXkEXFxu3we7O7UbuM%2BRkIK7BEd3CsDSXcQHOpniBXqKz4I9xaFfWspVOB4LnZyDUE72wG4CN65ziyjxdZW7D8n8St5MOjzBg%2BsFE85OKulgwQJAJq1k3iofd%2FEr6a5u%2BEQnjqzi%2FByKNLqEfqcrfrfYzdD5nw8vvNvPL7uCw7Y0w67HswAY6pgGqGi%2FzrLCEisAjVn1O9Ys7EiZPeTGsr3OFs2zmPmKwMGDihydaaXwDC5ERV6V9rmudDKv4hDK6yzJHxIfanU%2FSm5VMb6RxMHfhR%2F9rcruLeeEAeoE1K3LvudDgMLfYVWSz1PqVJhgUUnXij537AbRJZPWyqpp37JTotqNtbrLVRvMiA2Z3kjkdUlqslr9Et%2B1RZzSV22bOhr9TOlKDRHrmuLJTxYx%2F&X-Amz-Signature=8b879eead3eab1e19df79cf98612b2d619a5254fae8885d5677f5e8e2fbf958c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
