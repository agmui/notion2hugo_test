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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRBPJXX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHN0Fx%2BAJ2%2Fxr4Z2jtgtKJ4NPcoGCqwOHqcxgW34w%2BwIgexEO0tZMGyDZ2p3RDb4QiN%2FWF4gmxEOgaq0QinPDHeoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPw48dQ66yUnNQjFOCrcA9MGYPKelpHc1g2Gzk7pcD0EjmGzXKMOkjojNRveGEYgySU0H%2B1zmGOhY%2BNzcv7M3AqcOXBeakZ1g73wjXH%2FhW%2Bd%2BWLlGJ2lFTcxjZ4DDsLkXjy4vmyHqg2GPtNARY9YjmKf64TVfFEyZkq7bOjGQzbjaAWa%2BFXwASAq9lP2qewBNIVI72Lw5MkXkRyueCFGTiFOoBs3UH17L96e949jtZ9GZ2VRaqHV77KZYYMWg%2BrTDK%2BLdNL5ssy7de1%2B55tRdL3gJHAHsYS0W7mIFPrMewMwzTMgZh38SfTqULjJ0BoSh2pPgpZzaG2ta9e7U2CWVIVkxcH6nxeitzkT7VZc3aKsCyu6x5LWMGHolZyPdSwA6hvhDBa4l2xs1BSAwdRPBNo0qhzgrd1r5vRmZRctty5lT16ThvPIcGw1u1oFCl05rLyKvwYLd1CJgiP64ntZ8eWabgJyoPvfZ%2Fr1ZpXghBpQEdv4QdV0GGguKu9BnfrdJ2ormWoNBdkHQ5mLGjd56thcYo3BOOn0DCCtJtTseLS1trZAzJA6Fo8f3YQMD%2BMSOAKX0AUVnD5MDxHJq%2FnKe4qqRNMvf3qF2hQWM%2FERi0Z5PrlydklYdSPLps1Mz78MoGAWZTjTVP7g3WBUMPrf8cAGOqUBPm9mQLbF%2FT%2BrqICQ5Q8BP%2B7V2SECGzW7P9WNwvPSCiiMK1jSFw%2B%2FZX1VbvUVDGUUL%2FQWIwqfH%2BcgyKa4V5w%2BzWYEP3uJB%2FvU49flqZRxOkQ3C1byeFUIh4eRM7Mja6okrxgxSfHQRATRCLcoxJWIiDBMIfQdPe7XJdRJxuYrC5zi76fG0skrVgbNTsaAbisN6I%2FrkGZX6HvYZ0Zr5yT0eaZ6XEyN&X-Amz-Signature=993eda60e0493afd9d791f1b94f3fcc897ee62b8662e25d20fbef99d3cb7ddbc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRBPJXX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHN0Fx%2BAJ2%2Fxr4Z2jtgtKJ4NPcoGCqwOHqcxgW34w%2BwIgexEO0tZMGyDZ2p3RDb4QiN%2FWF4gmxEOgaq0QinPDHeoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPw48dQ66yUnNQjFOCrcA9MGYPKelpHc1g2Gzk7pcD0EjmGzXKMOkjojNRveGEYgySU0H%2B1zmGOhY%2BNzcv7M3AqcOXBeakZ1g73wjXH%2FhW%2Bd%2BWLlGJ2lFTcxjZ4DDsLkXjy4vmyHqg2GPtNARY9YjmKf64TVfFEyZkq7bOjGQzbjaAWa%2BFXwASAq9lP2qewBNIVI72Lw5MkXkRyueCFGTiFOoBs3UH17L96e949jtZ9GZ2VRaqHV77KZYYMWg%2BrTDK%2BLdNL5ssy7de1%2B55tRdL3gJHAHsYS0W7mIFPrMewMwzTMgZh38SfTqULjJ0BoSh2pPgpZzaG2ta9e7U2CWVIVkxcH6nxeitzkT7VZc3aKsCyu6x5LWMGHolZyPdSwA6hvhDBa4l2xs1BSAwdRPBNo0qhzgrd1r5vRmZRctty5lT16ThvPIcGw1u1oFCl05rLyKvwYLd1CJgiP64ntZ8eWabgJyoPvfZ%2Fr1ZpXghBpQEdv4QdV0GGguKu9BnfrdJ2ormWoNBdkHQ5mLGjd56thcYo3BOOn0DCCtJtTseLS1trZAzJA6Fo8f3YQMD%2BMSOAKX0AUVnD5MDxHJq%2FnKe4qqRNMvf3qF2hQWM%2FERi0Z5PrlydklYdSPLps1Mz78MoGAWZTjTVP7g3WBUMPrf8cAGOqUBPm9mQLbF%2FT%2BrqICQ5Q8BP%2B7V2SECGzW7P9WNwvPSCiiMK1jSFw%2B%2FZX1VbvUVDGUUL%2FQWIwqfH%2BcgyKa4V5w%2BzWYEP3uJB%2FvU49flqZRxOkQ3C1byeFUIh4eRM7Mja6okrxgxSfHQRATRCLcoxJWIiDBMIfQdPe7XJdRJxuYrC5zi76fG0skrVgbNTsaAbisN6I%2FrkGZX6HvYZ0Zr5yT0eaZ6XEyN&X-Amz-Signature=0f17da32dcd28d862f374ca8df201b2b7f5e8c09f88b1d2c7703bfd48e5c22c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRBPJXX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHN0Fx%2BAJ2%2Fxr4Z2jtgtKJ4NPcoGCqwOHqcxgW34w%2BwIgexEO0tZMGyDZ2p3RDb4QiN%2FWF4gmxEOgaq0QinPDHeoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPw48dQ66yUnNQjFOCrcA9MGYPKelpHc1g2Gzk7pcD0EjmGzXKMOkjojNRveGEYgySU0H%2B1zmGOhY%2BNzcv7M3AqcOXBeakZ1g73wjXH%2FhW%2Bd%2BWLlGJ2lFTcxjZ4DDsLkXjy4vmyHqg2GPtNARY9YjmKf64TVfFEyZkq7bOjGQzbjaAWa%2BFXwASAq9lP2qewBNIVI72Lw5MkXkRyueCFGTiFOoBs3UH17L96e949jtZ9GZ2VRaqHV77KZYYMWg%2BrTDK%2BLdNL5ssy7de1%2B55tRdL3gJHAHsYS0W7mIFPrMewMwzTMgZh38SfTqULjJ0BoSh2pPgpZzaG2ta9e7U2CWVIVkxcH6nxeitzkT7VZc3aKsCyu6x5LWMGHolZyPdSwA6hvhDBa4l2xs1BSAwdRPBNo0qhzgrd1r5vRmZRctty5lT16ThvPIcGw1u1oFCl05rLyKvwYLd1CJgiP64ntZ8eWabgJyoPvfZ%2Fr1ZpXghBpQEdv4QdV0GGguKu9BnfrdJ2ormWoNBdkHQ5mLGjd56thcYo3BOOn0DCCtJtTseLS1trZAzJA6Fo8f3YQMD%2BMSOAKX0AUVnD5MDxHJq%2FnKe4qqRNMvf3qF2hQWM%2FERi0Z5PrlydklYdSPLps1Mz78MoGAWZTjTVP7g3WBUMPrf8cAGOqUBPm9mQLbF%2FT%2BrqICQ5Q8BP%2B7V2SECGzW7P9WNwvPSCiiMK1jSFw%2B%2FZX1VbvUVDGUUL%2FQWIwqfH%2BcgyKa4V5w%2BzWYEP3uJB%2FvU49flqZRxOkQ3C1byeFUIh4eRM7Mja6okrxgxSfHQRATRCLcoxJWIiDBMIfQdPe7XJdRJxuYrC5zi76fG0skrVgbNTsaAbisN6I%2FrkGZX6HvYZ0Zr5yT0eaZ6XEyN&X-Amz-Signature=f555d7f7153e705c75e86797e1e4f4c5673d4bb01b9d9a2922a9752e43828e39&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY77EYCR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBEzovpYO4k6yWqDdfTjUOT7vpZ817b3EXmbMNwsHjEgIgOr2Bp%2BGpMowxsunEVPR4vt708kceeFIylyV7Js1hMwkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGzweciyRzAuVCYn0CrcA3o%2BZoY8bZOoW2VKbyE9DZ4A9gQBDFdu7UtUjzggi6x2X%2B7GnGgJ%2BrlHzPlp%2B42c8lJ%2FSoo7kbPCDL7JWYa2LDLukSVmaK9aMlsylQqANWXZPSaS6wFdGScwuqPSbnEUkiuVGb2OELL7bAftX8YdLpxziTBJi7cxYdsOFp4u7OnlqYmekkkZ8ljcQs8E%2B5bCkuatD4%2F%2FteytwXV7pwGT7rhqoGTgOYoZSe34EBTM2uZzXSsQGgrrWDaPpd4KEIrnLxKWEcXOtPckD5vM69jqQNqtNkrecMMN3BpG%2F0rAtHnITaPfqXTOvDUAJf0yf9sWkMlsGElAWOxI9uZDXXdCtGQc3mXQZjZxiYKAvfKTvzSnEmY%2B3z%2BhXF%2BF9BXR1kOqTWiLyd9PsLpdspet7qFaw0RYRadT8FtK%2FYWIxBu1mKHfyjbcC3uLC9OUKA1bUDQ2aSdowbq3YEUT8R5BJGjShP9EwwaylrqV86yJRPU%2FYrXYyT1Alhw%2B5j%2BC712O0hamgJwDZwBhDYjHn%2FCQAukHmbcghubSfQGydT00zrF8elEhu7NpaE6xdlY43Bq6aVsYsvhsd9PICnuoPu4EJCu7ueggrd27NKhPgZrPUGKDd%2Bs%2FboXMk9xzv9qt%2FU1sMKPg8cAGOqUBwFbprACgQS7qoktLob%2B14gVTTeOczzvYwjCiYZNp8alsuncwAl%2BThZg2exaxCoYth7hlqdqaiuUgG6q7dxVxyhHN7y3Vv9mQ2sUl907bq5Yp3AEbV7MTi7FUY8xA%2F3kj7LqinYNRzDfgO3mK8lR%2B6nFsW%2FcUs2VgSbXmFUzTzWlZfF7WKrDBtXBdqhCmPlKZys2NkfbyNsYVrUHgu1RPAvUYK6nX&X-Amz-Signature=76213f4af8e647cb30ad650fba210e276a7fb3cb767f1d1116c58342838312c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJJ3AWQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBffmjqaz%2BQkE3qjr%2FIwacwB%2FCu8VetkahCiNCjAzD0bAiAMiIa%2FBYI32jGdEt33iOJse3nyeGAhHByChNnFvXG4ISr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQB8GwCBYon0Kj4rWKtwDMExVwAkEY8JmPuWCR35SZ3e41PvNjOLDinZqTqm%2FsdQWx08W8DRP6eX%2BiNdD5pmSFfBCRz%2FqYLhkucNRFZ78AjYXXc25s82raj4rEToJi%2FIxdNImvn8X%2B4%2FTQP2GcEbjkUDAhptqBMzrtcUaToqWlf%2BjOLm10Bms0LMQicRKDq7VUupPW%2BYM2v1tu9c%2FbWRk4P6qceOUQTmd9fr3LiQWgsBCyFiZnFFbeRD4LFUumaTVS2%2FC2F6cVUu6DFikivC7v1%2B%2BIX%2F4AJzzNn0qMB9Rl5dWZmaOia3h8jI716Ji0aJ2tUnhhjR7ssG0OLxfRQwyxj8ShKYLj8dmjh8pmS9fcsr6DFKFS4LicQu97dD9oFtUlRJQA2XpjGepAu0PHjapK9qGso7EPyB1arIr3Uewqnc%2FBzvZJwtqF%2F73syNiRxUVPdtcJekuMZMimQYeaBDF9kbUak46VLF7EI06o6RmCNOjx49pFvkM%2B0W4ya8B%2ByiIkSE6jPEccAC8Urly0Ug3uTGqAg4qZGYYmVywIkqCG7GKTeBco2XSYC6CSe%2FUxki5XXTE%2FfQUcn5hkKi%2ByCQe9XPXoEzhEf2rdT60qfqcKKWomvC3smmbZ%2FRTIF0nTu81n2uzMUJOU7x%2BvXsw%2BZzywAY6pgHJugNaea8O%2Fk3W28e%2BAFgecqAx3J46nMT8d04L7EtQgty4Mq2ng5OJwqhGz%2F8PcnmApaRI%2BpLMWk%2Bd6pIe%2FT2glkIIQnfxwcnzp7u8hbt%2FM%2BNZBurSpE6I4ywtJe81HVLIznx%2FveHWvr9xXgqu4CkDt5e1psGN3va%2BxVI8QENaNe0hABze0YCWAIsui0ifjAf3ZPEmCMGaqClP8q7udUxjBcD5ZxXl&X-Amz-Signature=d49430178d26a1f273871702e1d895f82fad28e31fcdc92920d816960375423a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRBPJXX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHN0Fx%2BAJ2%2Fxr4Z2jtgtKJ4NPcoGCqwOHqcxgW34w%2BwIgexEO0tZMGyDZ2p3RDb4QiN%2FWF4gmxEOgaq0QinPDHeoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPw48dQ66yUnNQjFOCrcA9MGYPKelpHc1g2Gzk7pcD0EjmGzXKMOkjojNRveGEYgySU0H%2B1zmGOhY%2BNzcv7M3AqcOXBeakZ1g73wjXH%2FhW%2Bd%2BWLlGJ2lFTcxjZ4DDsLkXjy4vmyHqg2GPtNARY9YjmKf64TVfFEyZkq7bOjGQzbjaAWa%2BFXwASAq9lP2qewBNIVI72Lw5MkXkRyueCFGTiFOoBs3UH17L96e949jtZ9GZ2VRaqHV77KZYYMWg%2BrTDK%2BLdNL5ssy7de1%2B55tRdL3gJHAHsYS0W7mIFPrMewMwzTMgZh38SfTqULjJ0BoSh2pPgpZzaG2ta9e7U2CWVIVkxcH6nxeitzkT7VZc3aKsCyu6x5LWMGHolZyPdSwA6hvhDBa4l2xs1BSAwdRPBNo0qhzgrd1r5vRmZRctty5lT16ThvPIcGw1u1oFCl05rLyKvwYLd1CJgiP64ntZ8eWabgJyoPvfZ%2Fr1ZpXghBpQEdv4QdV0GGguKu9BnfrdJ2ormWoNBdkHQ5mLGjd56thcYo3BOOn0DCCtJtTseLS1trZAzJA6Fo8f3YQMD%2BMSOAKX0AUVnD5MDxHJq%2FnKe4qqRNMvf3qF2hQWM%2FERi0Z5PrlydklYdSPLps1Mz78MoGAWZTjTVP7g3WBUMPrf8cAGOqUBPm9mQLbF%2FT%2BrqICQ5Q8BP%2B7V2SECGzW7P9WNwvPSCiiMK1jSFw%2B%2FZX1VbvUVDGUUL%2FQWIwqfH%2BcgyKa4V5w%2BzWYEP3uJB%2FvU49flqZRxOkQ3C1byeFUIh4eRM7Mja6okrxgxSfHQRATRCLcoxJWIiDBMIfQdPe7XJdRJxuYrC5zi76fG0skrVgbNTsaAbisN6I%2FrkGZX6HvYZ0Zr5yT0eaZ6XEyN&X-Amz-Signature=9a2e17d9d3985bc15073a3adaf1bd1e0b4c2819614c3b6e8ceeb5a8b15f452c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
