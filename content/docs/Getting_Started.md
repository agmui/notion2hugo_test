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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6S5MFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCizUtsHmeGMCBsIjAJVtmdKRBbIIICa%2Bgpzs1jW9BbjQIhAMs5L%2BCFWQj80vNvveNIhmJiBm0PGW2%2FqGFBG31L8GT2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxKmF8RyWBI0P21EdIq3AMOqRsU0D8KLAWGLRI1z4PVERVg7V%2BYEcWmgeD3g5j3MJDnhkWtnhNGIdzrZ8cggp6nB0krk403p8MMrVjrClmkUQz6byO70yIGLQOP%2FIplmU5YzWdf0WB0471IwLQSQ%2B%2FUiZN0%2BD5jYPX1SELhf5RCPcREc7hBIsBTJ6MN3zftj%2BSNahKGpSgD9vq1Enn2EfU%2B0mTbb27u0WlkG3mhH5eL5nqlkO5EcwLA0viBSNRJ8AJ5%2BYdoeOgRMm5cR9poznpNU1tGtXpa%2Bj%2BwU7XFCeCeap8GJHOxqmnrzUbzCXxH7LB0eJK2H0aFKrse2oktOC2w%2FUvmdi518pNETRF%2FchV0FjcC2MIEk7gnw7cbZayWsieiwiudzGfUw6o7%2BOLYPX9BRRKhxohHR9Wzsl1kDy6k%2Fnt8CRhIoZ9wJHKZj%2Fwe7%2BC7wXyX8AeeARmPdPqzhtdl1S6aVcmz1eCFrLvLQQBDirhQyLgYHTe2pn2lE5AIRj3pc3JzXUfWt38sqRo6WE5jNulIwNx8pWJNGK09EzyUsbiyKp9AFw%2F1qP1QWbfkn7uVkW2HZSMDE8BwbuassQToQNM7jONDLsxIfP5gdIEZp78HaVt9jIehXI6aUgy86aK4JXtoAZRZLinm6DDO5tHBBjqkAU9lUEUAZY83Woyd9%2FyRISOROQuNpwOFysvk6GSlS5v91cT2mMa5Rqdl6EnjAf8TkjXPtbojaeBKfCIh4zFjzVXkLGro6tRufUwpWqxDgg7iuJDyaN7sFpFN9UDRb7GmmY6smZFUqsGnYBAB7X5jPn1yDm0JA9FyY1O52i20ZqhxoNo9eNqnA24Z%2BSCYh%2FNmMxiHu0sGrZIiPeZhk2lIKlPvnQYD&X-Amz-Signature=c26a6363e4d954cc7edc6c956750bb2118cf4bf8d6dbd3f2b9d1b94af60c8b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6S5MFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCizUtsHmeGMCBsIjAJVtmdKRBbIIICa%2Bgpzs1jW9BbjQIhAMs5L%2BCFWQj80vNvveNIhmJiBm0PGW2%2FqGFBG31L8GT2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxKmF8RyWBI0P21EdIq3AMOqRsU0D8KLAWGLRI1z4PVERVg7V%2BYEcWmgeD3g5j3MJDnhkWtnhNGIdzrZ8cggp6nB0krk403p8MMrVjrClmkUQz6byO70yIGLQOP%2FIplmU5YzWdf0WB0471IwLQSQ%2B%2FUiZN0%2BD5jYPX1SELhf5RCPcREc7hBIsBTJ6MN3zftj%2BSNahKGpSgD9vq1Enn2EfU%2B0mTbb27u0WlkG3mhH5eL5nqlkO5EcwLA0viBSNRJ8AJ5%2BYdoeOgRMm5cR9poznpNU1tGtXpa%2Bj%2BwU7XFCeCeap8GJHOxqmnrzUbzCXxH7LB0eJK2H0aFKrse2oktOC2w%2FUvmdi518pNETRF%2FchV0FjcC2MIEk7gnw7cbZayWsieiwiudzGfUw6o7%2BOLYPX9BRRKhxohHR9Wzsl1kDy6k%2Fnt8CRhIoZ9wJHKZj%2Fwe7%2BC7wXyX8AeeARmPdPqzhtdl1S6aVcmz1eCFrLvLQQBDirhQyLgYHTe2pn2lE5AIRj3pc3JzXUfWt38sqRo6WE5jNulIwNx8pWJNGK09EzyUsbiyKp9AFw%2F1qP1QWbfkn7uVkW2HZSMDE8BwbuassQToQNM7jONDLsxIfP5gdIEZp78HaVt9jIehXI6aUgy86aK4JXtoAZRZLinm6DDO5tHBBjqkAU9lUEUAZY83Woyd9%2FyRISOROQuNpwOFysvk6GSlS5v91cT2mMa5Rqdl6EnjAf8TkjXPtbojaeBKfCIh4zFjzVXkLGro6tRufUwpWqxDgg7iuJDyaN7sFpFN9UDRb7GmmY6smZFUqsGnYBAB7X5jPn1yDm0JA9FyY1O52i20ZqhxoNo9eNqnA24Z%2BSCYh%2FNmMxiHu0sGrZIiPeZhk2lIKlPvnQYD&X-Amz-Signature=9f9a90d2c7baa3372f42e463c2c6b4a43510e72cc400520e0aa6d4b66587e863&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6S5MFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCizUtsHmeGMCBsIjAJVtmdKRBbIIICa%2Bgpzs1jW9BbjQIhAMs5L%2BCFWQj80vNvveNIhmJiBm0PGW2%2FqGFBG31L8GT2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxKmF8RyWBI0P21EdIq3AMOqRsU0D8KLAWGLRI1z4PVERVg7V%2BYEcWmgeD3g5j3MJDnhkWtnhNGIdzrZ8cggp6nB0krk403p8MMrVjrClmkUQz6byO70yIGLQOP%2FIplmU5YzWdf0WB0471IwLQSQ%2B%2FUiZN0%2BD5jYPX1SELhf5RCPcREc7hBIsBTJ6MN3zftj%2BSNahKGpSgD9vq1Enn2EfU%2B0mTbb27u0WlkG3mhH5eL5nqlkO5EcwLA0viBSNRJ8AJ5%2BYdoeOgRMm5cR9poznpNU1tGtXpa%2Bj%2BwU7XFCeCeap8GJHOxqmnrzUbzCXxH7LB0eJK2H0aFKrse2oktOC2w%2FUvmdi518pNETRF%2FchV0FjcC2MIEk7gnw7cbZayWsieiwiudzGfUw6o7%2BOLYPX9BRRKhxohHR9Wzsl1kDy6k%2Fnt8CRhIoZ9wJHKZj%2Fwe7%2BC7wXyX8AeeARmPdPqzhtdl1S6aVcmz1eCFrLvLQQBDirhQyLgYHTe2pn2lE5AIRj3pc3JzXUfWt38sqRo6WE5jNulIwNx8pWJNGK09EzyUsbiyKp9AFw%2F1qP1QWbfkn7uVkW2HZSMDE8BwbuassQToQNM7jONDLsxIfP5gdIEZp78HaVt9jIehXI6aUgy86aK4JXtoAZRZLinm6DDO5tHBBjqkAU9lUEUAZY83Woyd9%2FyRISOROQuNpwOFysvk6GSlS5v91cT2mMa5Rqdl6EnjAf8TkjXPtbojaeBKfCIh4zFjzVXkLGro6tRufUwpWqxDgg7iuJDyaN7sFpFN9UDRb7GmmY6smZFUqsGnYBAB7X5jPn1yDm0JA9FyY1O52i20ZqhxoNo9eNqnA24Z%2BSCYh%2FNmMxiHu0sGrZIiPeZhk2lIKlPvnQYD&X-Amz-Signature=1e7f7c576ec53c53403f3cec32f7e2ee002d60d7dada9417a3b50ef6801020bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OY6PKPX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH%2BmUi8%2FUCnQ0zVrX2mrKD7Iiiwj%2BWfZTC0jnsy6THDhAiEAiSOHm0cFsD18QJC4kfIwJavytWMr4PgzIvI16Mpe2hcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMJTyH9T7t6FYqdP0SrcA0sjSVJ1urmd%2F40Bn88YAXeNnie6bDHdJ6L9wLKG3bRdPLGw7gMrVSm2%2Fuok3dv7Zf1r%2FX0gx3g4WwjZLtXZYDvJiu%2BRfogtiE%2F9TzC42N9a7g7%2B%2FEwgLmWV8UE4zO2bYENz8%2F1VD8TesCDyAdw95%2FNAcrdOLnl8Af1SuZvzJFIjMRw42q3nUv58dBnyE7%2FzzPQ9bMIIgGWMZrHxDlviErs19%2BLcNwDhLhi1J0bswYnvdHFhI4rSn6wECmayxL%2Fb6wTxMRGFjW%2BvMXSyCOPhaSycgVSVGMiS%2Fp6NL%2FYEhIhaewQO2R%2FE3cojXkGv5N3SRX0WOIM28p%2BYTIRE0v3os8fPDSZRa%2BrjmAdoNkWHCPAbaTTJxtalwIPbt2tg0g1yDFB2ZNth4Ig3iPg5sBTgVQKd3PtoC15TO3TofUL4UFWv0J1NXZdHijqlbEwihg5r5xoyO%2F6o5DUKjSXxhadVfZS2uR8bgDJDlI0XlZWNEm2lqbcpq8Tez%2BJOwI%2B1e5kXkgGyXUpCDzPnmUVj5uNqmUUXsyQjtMKhA6W5RFhBzAiGgE5SA31JFMm%2BsLaWhJ3uT55Zor%2FuZXHhn%2BD4sV9srzA3YED2WZnCxpHWhoXZei4ZffI0KsTKJeSfxwcgMIrm0cEGOqUBvuZAJkmG5lv5p5Iry1PGv7dmyNlJh%2FYGb6MnU2NwcMC8vB%2FQNqHxot0jjjxNEATYDAtYQQ6XeNIsgNBC3uWsYBUocoIpTx%2FSWtrsOQsG8VAC0d%2B44GEPgSQs7N13iNNUR6ztXk9%2FYr9SAIarDT1eV6Kewi4t4%2FuQJsvF4qr0%2FRqMQp1qT2CYpZRgnuuj%2BCdfsQyUrWmCOBNzECidI%2FUa4j1GounG&X-Amz-Signature=6195aa52e6712b6c383fee23e3ed2ecb180707096a654031db8aa0083eca8981&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMOHHED%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC0PjVLGAuIXyz6eHaJfdBADT%2BMz52gXkV6VxyVtEOKSQIhAJDOcGgLrZ3MMHQoaZVSHsG0rLGSCU8Tx%2BRmYNIJZUBuKv8DCEcQABoMNjM3NDIzMTgzODA1Igxir9EEyhProJ%2Fuk8sq3AMqFO4nBM1QkHLeym25Fftr4%2Bbn90mYNU71KeKETQIKHW%2FjomRnKoK1NlDIpG2oQYl1R1eK2XgiPCWloFr6kxo7KHI8AKLfaTKZMYhLc5ofFuyWyG4NhoAQufB0IHWqaLmqvoYfaAAgoW6HhmIXgubCRYYzsHV5PFLBFETtqCxJZjMTg%2FVPKIbbGOc4Ssfu6Jd%2FPtv1mltFSJX7DnBuOl9QHm1aV%2BlHJmBQk40%2FPafavkE3mP4T6mKJnhx8GE7SEeS2cxVh0lVA4QeXfyVaB8%2BHVhYv67eQB3iFURoW7M8M4itqBmkYQYWIWodxk0rQyk4E0YejfjMawPDQ3sYyhv3khL9coy4RVrwPuCNmimP8fEepY4YG6BN7aQWiNaSRlsfPIV%2F1Nf%2BMlqbhqtwKsjtjpomNKbh0glHGHbKpki7oG%2BCCOAk59hG9G83Tktf0rLtNE0F9u9JjfO%2Bs1%2Fl33DLCCV0zz%2B592KghMT5P%2FyxP8HJpkrj%2FlOI%2F6mBZj7FeVmGO7TrhvoCwFE4mJ54hdPR3myaUjVOV6DC%2BCbzaXQV8VqBln0h%2BFw3XtuHp2L72ES93eQJDY40mufiILtLaGj1b88hRefV%2BTSFsAQswo4cEtPIn1v0tBexOQR9qtjDl5tHBBjqkATtIBnjhbUnHB1%2BB0FWgDZVMmFNE%2FojkTW3XHjMKMKFHY%2FzmBJded%2BP8pfiQsIAhZjGEq6kE9%2Fzf7gcBKFri7FWTO6yu0Lyqa3BNQTgpg1SZGDTOi%2BZ%2FeNrDAU5iPv9h6qqk9U0aiqwJYrhkfPu6pzssptYNRKRGKPHJpqKhznc82JLzCVFJVkKWlhukrtdgCEMa5JWZ7HFDnZ4Bugo4rQdpKMAc&X-Amz-Signature=054373a1b92d02dfa7fdcb9172fd86e8eea7a2d295b83d72f25bc1b9dbd81921&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6S5MFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCizUtsHmeGMCBsIjAJVtmdKRBbIIICa%2Bgpzs1jW9BbjQIhAMs5L%2BCFWQj80vNvveNIhmJiBm0PGW2%2FqGFBG31L8GT2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxKmF8RyWBI0P21EdIq3AMOqRsU0D8KLAWGLRI1z4PVERVg7V%2BYEcWmgeD3g5j3MJDnhkWtnhNGIdzrZ8cggp6nB0krk403p8MMrVjrClmkUQz6byO70yIGLQOP%2FIplmU5YzWdf0WB0471IwLQSQ%2B%2FUiZN0%2BD5jYPX1SELhf5RCPcREc7hBIsBTJ6MN3zftj%2BSNahKGpSgD9vq1Enn2EfU%2B0mTbb27u0WlkG3mhH5eL5nqlkO5EcwLA0viBSNRJ8AJ5%2BYdoeOgRMm5cR9poznpNU1tGtXpa%2Bj%2BwU7XFCeCeap8GJHOxqmnrzUbzCXxH7LB0eJK2H0aFKrse2oktOC2w%2FUvmdi518pNETRF%2FchV0FjcC2MIEk7gnw7cbZayWsieiwiudzGfUw6o7%2BOLYPX9BRRKhxohHR9Wzsl1kDy6k%2Fnt8CRhIoZ9wJHKZj%2Fwe7%2BC7wXyX8AeeARmPdPqzhtdl1S6aVcmz1eCFrLvLQQBDirhQyLgYHTe2pn2lE5AIRj3pc3JzXUfWt38sqRo6WE5jNulIwNx8pWJNGK09EzyUsbiyKp9AFw%2F1qP1QWbfkn7uVkW2HZSMDE8BwbuassQToQNM7jONDLsxIfP5gdIEZp78HaVt9jIehXI6aUgy86aK4JXtoAZRZLinm6DDO5tHBBjqkAU9lUEUAZY83Woyd9%2FyRISOROQuNpwOFysvk6GSlS5v91cT2mMa5Rqdl6EnjAf8TkjXPtbojaeBKfCIh4zFjzVXkLGro6tRufUwpWqxDgg7iuJDyaN7sFpFN9UDRb7GmmY6smZFUqsGnYBAB7X5jPn1yDm0JA9FyY1O52i20ZqhxoNo9eNqnA24Z%2BSCYh%2FNmMxiHu0sGrZIiPeZhk2lIKlPvnQYD&X-Amz-Signature=e20af19b9c4d02f0f2dfb9e68acd38f2376ab9985965eb66f167db67a71bc668&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
