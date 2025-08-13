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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVW3C2D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T041959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKLDoAjLhaGZ5SD1mWCeIiy59K1Da%2Bld%2B18IMzOuP28AiAafd%2BOfKCzqfCSyYz71BbjH3SInpuRvGX8GYW%2FpXSBOCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMvnA78gNEhpXpPMEgKtwD0ekI1dCaufkPy953jJqJovjwSZekpmC2CWeiny14szRGhsgcIlHH%2BCQa6iXMs9%2BLm%2FVrWpod4TilQhdUMyFhHjcyN4G91e7BmJk8%2FNyaUB6FH4irfLws57XRE3lXer4OOzUeYooZg5%2BnyQrrofxYTBNCnYXE3jL%2FSL%2B6z%2FBJSrvwGAIK34ZGkUJW7F8%2BenNWECLQK0fAjnjLE8cpTJFbVaEdqYNuLgMcyNjD0XZHg4zIDpJz6e4s4hhIAqSjzCtVQ5A6mkj%2FsvdlBDT08uEcXaiLR9y%2FyRW3OVsqfZDYbUGPodU8XStPQLLOEg8K38FvrbMdEwXEfDy8x59ayL2RFLVKfgJsrUozG5t4UeApyIVvh3kAfNmazurdKMc3RakBZqnaj49ovb1%2B%2BZaBLj2xSEjDqdINpTvERwNAkWYQRX4ghzeNoijjdAqE7%2Fi0CgfdxmNEDIfs%2FJn1U3rzCIYQ%2FRK6cPYqVu9iMy6ADDLPzhLe8e2Mu6wWXSp7pcj8WO9myg3NxpRqXl9IA8SsyS2f8Ygw%2F%2FV6RTuWQ5LDjlnIuVF1Swt00%2FFUtboPkjPCsiN5hRhUotENPs797Erdl1du9gsAUu1SzvancHDLz8Q%2FI6NH3lEwfqHJCnYhO6IwzYbwxAY6pgHcKZYoOE7tMMVtMRtFJyf97nSwLI3rPivQiTO1iTnO4gbvYROEJH1P94jXADuoiCj03o2eoCNVsBs94xnyNCZrbE3Xba04FMZGE0PLtDTkKROtA%2FF5G6EGe6%2BNj1apz9xdiKxs1qSxa5vFnw930Pd1nhBrtacCXs1XymYXsrKjs7gjsRuyLsaMleJRun9G%2F6AxQ%2FSC5GJoyA000CgUQICC1XnORFn%2B&X-Amz-Signature=311ac0310795a461ff6fdde82a9df61fe298b5a28ff43da80d83b2d72880d500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVW3C2D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T041959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKLDoAjLhaGZ5SD1mWCeIiy59K1Da%2Bld%2B18IMzOuP28AiAafd%2BOfKCzqfCSyYz71BbjH3SInpuRvGX8GYW%2FpXSBOCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMvnA78gNEhpXpPMEgKtwD0ekI1dCaufkPy953jJqJovjwSZekpmC2CWeiny14szRGhsgcIlHH%2BCQa6iXMs9%2BLm%2FVrWpod4TilQhdUMyFhHjcyN4G91e7BmJk8%2FNyaUB6FH4irfLws57XRE3lXer4OOzUeYooZg5%2BnyQrrofxYTBNCnYXE3jL%2FSL%2B6z%2FBJSrvwGAIK34ZGkUJW7F8%2BenNWECLQK0fAjnjLE8cpTJFbVaEdqYNuLgMcyNjD0XZHg4zIDpJz6e4s4hhIAqSjzCtVQ5A6mkj%2FsvdlBDT08uEcXaiLR9y%2FyRW3OVsqfZDYbUGPodU8XStPQLLOEg8K38FvrbMdEwXEfDy8x59ayL2RFLVKfgJsrUozG5t4UeApyIVvh3kAfNmazurdKMc3RakBZqnaj49ovb1%2B%2BZaBLj2xSEjDqdINpTvERwNAkWYQRX4ghzeNoijjdAqE7%2Fi0CgfdxmNEDIfs%2FJn1U3rzCIYQ%2FRK6cPYqVu9iMy6ADDLPzhLe8e2Mu6wWXSp7pcj8WO9myg3NxpRqXl9IA8SsyS2f8Ygw%2F%2FV6RTuWQ5LDjlnIuVF1Swt00%2FFUtboPkjPCsiN5hRhUotENPs797Erdl1du9gsAUu1SzvancHDLz8Q%2FI6NH3lEwfqHJCnYhO6IwzYbwxAY6pgHcKZYoOE7tMMVtMRtFJyf97nSwLI3rPivQiTO1iTnO4gbvYROEJH1P94jXADuoiCj03o2eoCNVsBs94xnyNCZrbE3Xba04FMZGE0PLtDTkKROtA%2FF5G6EGe6%2BNj1apz9xdiKxs1qSxa5vFnw930Pd1nhBrtacCXs1XymYXsrKjs7gjsRuyLsaMleJRun9G%2F6AxQ%2FSC5GJoyA000CgUQICC1XnORFn%2B&X-Amz-Signature=8d0507dae9654bf464edacbc16ad7a9a4dee388d7971cbe99bdc879dc7fe406d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVW3C2D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T041959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKLDoAjLhaGZ5SD1mWCeIiy59K1Da%2Bld%2B18IMzOuP28AiAafd%2BOfKCzqfCSyYz71BbjH3SInpuRvGX8GYW%2FpXSBOCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMvnA78gNEhpXpPMEgKtwD0ekI1dCaufkPy953jJqJovjwSZekpmC2CWeiny14szRGhsgcIlHH%2BCQa6iXMs9%2BLm%2FVrWpod4TilQhdUMyFhHjcyN4G91e7BmJk8%2FNyaUB6FH4irfLws57XRE3lXer4OOzUeYooZg5%2BnyQrrofxYTBNCnYXE3jL%2FSL%2B6z%2FBJSrvwGAIK34ZGkUJW7F8%2BenNWECLQK0fAjnjLE8cpTJFbVaEdqYNuLgMcyNjD0XZHg4zIDpJz6e4s4hhIAqSjzCtVQ5A6mkj%2FsvdlBDT08uEcXaiLR9y%2FyRW3OVsqfZDYbUGPodU8XStPQLLOEg8K38FvrbMdEwXEfDy8x59ayL2RFLVKfgJsrUozG5t4UeApyIVvh3kAfNmazurdKMc3RakBZqnaj49ovb1%2B%2BZaBLj2xSEjDqdINpTvERwNAkWYQRX4ghzeNoijjdAqE7%2Fi0CgfdxmNEDIfs%2FJn1U3rzCIYQ%2FRK6cPYqVu9iMy6ADDLPzhLe8e2Mu6wWXSp7pcj8WO9myg3NxpRqXl9IA8SsyS2f8Ygw%2F%2FV6RTuWQ5LDjlnIuVF1Swt00%2FFUtboPkjPCsiN5hRhUotENPs797Erdl1du9gsAUu1SzvancHDLz8Q%2FI6NH3lEwfqHJCnYhO6IwzYbwxAY6pgHcKZYoOE7tMMVtMRtFJyf97nSwLI3rPivQiTO1iTnO4gbvYROEJH1P94jXADuoiCj03o2eoCNVsBs94xnyNCZrbE3Xba04FMZGE0PLtDTkKROtA%2FF5G6EGe6%2BNj1apz9xdiKxs1qSxa5vFnw930Pd1nhBrtacCXs1XymYXsrKjs7gjsRuyLsaMleJRun9G%2F6AxQ%2FSC5GJoyA000CgUQICC1XnORFn%2B&X-Amz-Signature=d257c9f14330f67053ab621b663660fe777c3abf6eb1ab682de1e59d44ae5410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2SEYTN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR2w7LeKSv6Kym%2B0K91iLkQeJSJk95CY3093b4oKScRAIhAOXQ4wKmQpzlMTdJ7%2BRPvV1Vkop%2BEeDH8G1uyPEsUoSYKv8DCCQQABoMNjM3NDIzMTgzODA1Igw2QXwIpxsyHJwOBQEq3ANVQC5oA8jwbvS2Uo74GKoyG51XNwIE874Dql3vMvrH00xGfDWpPi59ko9tHqQ8%2B7qa%2BZlpqJQ%2B6ZVScct%2FkG%2BwdXbGwXBc6MTjyYrR74VumkqfCFqpiQI0nQsThyOsCV4OECvVDEepx1YMN%2B7TOUlv8BjCkrvnn1kzTA0QJ%2FqYJjMkB2ABvkMigu7yIt9rA%2B8hdeoV49qdazH6oyRC1gEWLZNjoYSkC0WPqxm8dbJqslIz9vBHPueROvmwxcXAGkOnUV7Fm6ek%2BpXFAuEfRKC7w365zG2VoVt1yPEFgBgDGeyDlCc0Kpr7rWJvnpCysbFzbCj21jzTekPkA9GCOMCP%2BB9H5gXfonbyJx7MKs9i4dAhsNSFoKumK0Zw56k%2B7zmMGvCYxfgbSHGepIR0bRwlWkZVgAJ6yDKLmF7YBxcFHCbfPL2hsQGi2yTp2SBlM779WtUnD1eKWgtVAHrHL8eIaAmxonWTOiGH9w5TLiaGST5t4bxD1T6FJf48KDGZZ%2BQA9y2osMjVUB6LCzDUhgIVJKWSF2KHEFwLVG6cZNm3cX6xbB%2Bu%2BPX43%2F8yfeB8gR2U3d0tWbTkwXEI5VGg6vgv9k56xVF61Vrisyr0wErFSyxJ1fLdo2MsAKuAiTDihfDEBjqkAVtCviyYfVt8rRyqL%2BATRaMcH7hDD02lSA4kXkwdm0nhWTgtfGVHbwLbBNwVKsuvFCREYIvVK%2BazMnppMRuxm1U74731FBqd43L4MNt92ttLXlZ5bBdSToBDpYCUsT5nwDiZbs8iGklAUiFAorKq%2FJqOo%2FLuPzl%2BOMUoKiBCkenYsENm5jut%2BUYdpz99s9Jfp1%2FHyzN2zaJpmGo1F5pmObFLdyjE&X-Amz-Signature=b8f15b7cd6c020129ecbca4a4036ff7034a5a08bc8f8865f2a0ccb1fefd8e441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB245ZVU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJztS%2FtnctRtLLAfRTGXp%2BcuABnHa%2FVoMAP0RSLt0zSAiB67vNbknvaGBfy3sm8OgXdkuKZOkFkhnrb87Uszq25Wyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMTAYyXsq6HYt5L%2BxvKtwDDg%2FHdNUi1xsgAdgyu0ZkIRYE6yrAM%2FQtmvqEH56VdKT0rZ%2FYW3Epgydie%2Bd5FsapyhEp0jpbsibb9IHJvwLN8tTkhlw7NsKLRCRkFP8tlhqiJZA2XRDbvNzwr0kBleIbrT1QK15iLAMGLwVuuiAiBKEO0yPpcdfgLqE9y8esjoNDb%2Bh9CDyyRUhnqZ%2BhXz6JFoymlaVcfKZvnbvx%2BJgWvb8EBnrwem3tDyXTHzHKrZzIPpw%2FlLeSR2FEgBnr%2F1fIoqiNcXCPlr%2BNDV46fYuIRWjDPuUWubcV5lkgGnZekBrTbZ1bqF%2BMeNf8Rmc3q83I%2FlL65aRyPjZFAXyeogIWut2SHKsM%2Be7gzEhqk2x3xAn7zY1FVNh1LLIWeFSgHR8mpN%2BL9zH2J0E1K4HmGvNLRKlC9qJEXfGGTC2AzNTh9AgX8fqWzWpuQ1nOJMZVbl5WCNTKmqUqCTVwbanD%2BSGQmIcGcgthFVdiaqST3l5POFolz4RfBLuEw5B5vexmrmZUuUIZ9%2F8XRHhRtczSNeFFHvPxD1KG%2BIhtLltWhrLq9s1WOTO7PkdtjGTBXdTxFu2EJy6DdebZPp4GL%2BeLBlw8g6RfHBUybWkDuzCh2wltMVcrXq4Y4Q2jt%2BuqWy4w7YXwxAY6pgFj2%2F8ST7yuNfw8d6%2BaT%2FKdmrCjf2kvwnjirMfTtOWpQoHLiwKs5Vrp5AltPP4PPASHJ9ux1xdcZkRtUZB8fQnZGj4QhwgNMyOYsUuygNX4CXXybGZrAN4BtErPtf9eqzoUf3IvOsex%2BoiNq9%2Bxb7yZh5BLzzdr%2F%2FDed0iqLY2z3lLnbPqeOldGsPYG%2FLY6hlR%2Fm%2BSCOUl5uvGbA8bU25yexwxg75iT&X-Amz-Signature=d73d8ff5862433fedf073f498367f4130b3b5a9ec070714ef1cd8c642ed8d38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVW3C2D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T041959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKLDoAjLhaGZ5SD1mWCeIiy59K1Da%2Bld%2B18IMzOuP28AiAafd%2BOfKCzqfCSyYz71BbjH3SInpuRvGX8GYW%2FpXSBOCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMvnA78gNEhpXpPMEgKtwD0ekI1dCaufkPy953jJqJovjwSZekpmC2CWeiny14szRGhsgcIlHH%2BCQa6iXMs9%2BLm%2FVrWpod4TilQhdUMyFhHjcyN4G91e7BmJk8%2FNyaUB6FH4irfLws57XRE3lXer4OOzUeYooZg5%2BnyQrrofxYTBNCnYXE3jL%2FSL%2B6z%2FBJSrvwGAIK34ZGkUJW7F8%2BenNWECLQK0fAjnjLE8cpTJFbVaEdqYNuLgMcyNjD0XZHg4zIDpJz6e4s4hhIAqSjzCtVQ5A6mkj%2FsvdlBDT08uEcXaiLR9y%2FyRW3OVsqfZDYbUGPodU8XStPQLLOEg8K38FvrbMdEwXEfDy8x59ayL2RFLVKfgJsrUozG5t4UeApyIVvh3kAfNmazurdKMc3RakBZqnaj49ovb1%2B%2BZaBLj2xSEjDqdINpTvERwNAkWYQRX4ghzeNoijjdAqE7%2Fi0CgfdxmNEDIfs%2FJn1U3rzCIYQ%2FRK6cPYqVu9iMy6ADDLPzhLe8e2Mu6wWXSp7pcj8WO9myg3NxpRqXl9IA8SsyS2f8Ygw%2F%2FV6RTuWQ5LDjlnIuVF1Swt00%2FFUtboPkjPCsiN5hRhUotENPs797Erdl1du9gsAUu1SzvancHDLz8Q%2FI6NH3lEwfqHJCnYhO6IwzYbwxAY6pgHcKZYoOE7tMMVtMRtFJyf97nSwLI3rPivQiTO1iTnO4gbvYROEJH1P94jXADuoiCj03o2eoCNVsBs94xnyNCZrbE3Xba04FMZGE0PLtDTkKROtA%2FF5G6EGe6%2BNj1apz9xdiKxs1qSxa5vFnw930Pd1nhBrtacCXs1XymYXsrKjs7gjsRuyLsaMleJRun9G%2F6AxQ%2FSC5GJoyA000CgUQICC1XnORFn%2B&X-Amz-Signature=3e19509619597f28147e64cfde4f8a473bd69521ad931b50bc2cd339d80c2b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
