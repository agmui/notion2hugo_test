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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMXGPJ4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2w6j%2B%2F9q%2FIIkDwnux%2FATYbGkvYF95gGw420UwVUPfgIhAJBC5QjAWR3ok0D5JoNsIb9diG359GEYEsa4MR6esXFiKv8DCCMQABoMNjM3NDIzMTgzODA1Igx8pDrmD3ScOMzXVy0q3ANh18C7HtlRpiCZyCuVlPk5QjtVYuW3qwxaN0jd1hGnLO45HmS%2Bf%2F37o5XYVk7Gn8c3%2B9ahGSkTa2J8Z%2FxMdDkByGP%2FknIgJIbKXv5jrT%2BHD0f9a2hFgDmkymV2reU73CMEDJoP8O4sPhvAlr94z%2B1ZMD2Q%2BYhWj0Lsyp%2Fgv5VOLXG1LHijVaHaaBg6e4dyIAAnmbsipwSztiROxg6nlVQaYh%2FXwtB%2B3TEtzrfeMYvMTNv9alZrBFCF8W4%2B%2F09Rvw4MykY%2Fz7HJMhJ5ScHbPkyUGVj6dnJt1Hh07%2FOvizkDKic6WB09%2FW04%2F8ZZbtgEwe5Px5h5p0AGkGKuVgjzbmFpOFSAsxhppGT6Q4CZP%2FrWlPyJB%2FbfWdaKCf55YlYYtbzcht2fHc4lFScnMtq3e1p3Q5q2BNGdcdVEchn3CUWa3jf8PSnI8pVfIIOkHPik3Z69Ep8TorBunDtOLNlQC%2FrLzWycuEwjeMYN%2BEhBFOKJp4BalfYJI5QSQL7Q4TaBpp9U6VHDeAn7%2FOvCfBHRW%2FGLCklBO9relYfkQkwHCO4FEgB%2BmesPdvYehzeN72OEd1No4mR%2FxPPVhe0Cnh9QQv3L04%2FUIjFe%2BCAf5QlupAEHYFwG%2Bjzbhd0w8CBmcTCq4KvABjqkAXGP%2B54UbxNbi7k87albXgotyVsyRFo9uUykSKzgGAs8RZsX9WQ7UbOFqvkLva%2F6SBfV1gJeT3O5BVFurJZ%2BF1U4qQohZnleMBt1%2Ffyh98R3w8a6xzVslZSaCeUB%2F1T3fiB%2B%2BQtV1xuZEJq6Cemrd1vleY9r%2FJRE4rUXauokQb3jbBFdfKzFmnmf%2BAMLMIQt7WP8cd8D6Eo0mO2VEJ8TuO5TFEsW&X-Amz-Signature=9b5a5717a1602b233a6349902781e45ad4c4d1aa7131bafe19af44b79e735a95&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMXGPJ4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2w6j%2B%2F9q%2FIIkDwnux%2FATYbGkvYF95gGw420UwVUPfgIhAJBC5QjAWR3ok0D5JoNsIb9diG359GEYEsa4MR6esXFiKv8DCCMQABoMNjM3NDIzMTgzODA1Igx8pDrmD3ScOMzXVy0q3ANh18C7HtlRpiCZyCuVlPk5QjtVYuW3qwxaN0jd1hGnLO45HmS%2Bf%2F37o5XYVk7Gn8c3%2B9ahGSkTa2J8Z%2FxMdDkByGP%2FknIgJIbKXv5jrT%2BHD0f9a2hFgDmkymV2reU73CMEDJoP8O4sPhvAlr94z%2B1ZMD2Q%2BYhWj0Lsyp%2Fgv5VOLXG1LHijVaHaaBg6e4dyIAAnmbsipwSztiROxg6nlVQaYh%2FXwtB%2B3TEtzrfeMYvMTNv9alZrBFCF8W4%2B%2F09Rvw4MykY%2Fz7HJMhJ5ScHbPkyUGVj6dnJt1Hh07%2FOvizkDKic6WB09%2FW04%2F8ZZbtgEwe5Px5h5p0AGkGKuVgjzbmFpOFSAsxhppGT6Q4CZP%2FrWlPyJB%2FbfWdaKCf55YlYYtbzcht2fHc4lFScnMtq3e1p3Q5q2BNGdcdVEchn3CUWa3jf8PSnI8pVfIIOkHPik3Z69Ep8TorBunDtOLNlQC%2FrLzWycuEwjeMYN%2BEhBFOKJp4BalfYJI5QSQL7Q4TaBpp9U6VHDeAn7%2FOvCfBHRW%2FGLCklBO9relYfkQkwHCO4FEgB%2BmesPdvYehzeN72OEd1No4mR%2FxPPVhe0Cnh9QQv3L04%2FUIjFe%2BCAf5QlupAEHYFwG%2Bjzbhd0w8CBmcTCq4KvABjqkAXGP%2B54UbxNbi7k87albXgotyVsyRFo9uUykSKzgGAs8RZsX9WQ7UbOFqvkLva%2F6SBfV1gJeT3O5BVFurJZ%2BF1U4qQohZnleMBt1%2Ffyh98R3w8a6xzVslZSaCeUB%2F1T3fiB%2B%2BQtV1xuZEJq6Cemrd1vleY9r%2FJRE4rUXauokQb3jbBFdfKzFmnmf%2BAMLMIQt7WP8cd8D6Eo0mO2VEJ8TuO5TFEsW&X-Amz-Signature=5ec638a14ac95b001d5602d8edb54c03c927f2d8973423cb3f83def6969a61d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBSG3VK7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUoHfiYr52U%2FiIumtzm%2F9pkMvlFAHweU%2FxAYSw%2B39y9AiBw9UHRKFrjQrsWxmPKPnsLPumycnZCKdMy6H%2FbCxizGCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMsq42bfPC1RcAs%2FuBKtwDJXIAqB8EV2DVcPhn0zuIe3s2rwlbkJ8ALnfEESvSLouFrcMfUHm0qLZnlH2LFnWdsrjL9jdvquDuV6gdUGcbVGk32kLS4pvwORgYzES%2Fxp%2FjTW%2B%2FTUPErWFRswMCPFSgiqNQOcxUI7xx1a70k%2Bwtrc5wZ%2BF53DTLJ3z3ns02P%2BpdY14ppC4I0UwXmlK%2F3sHg3X6Oa7dnqjiA1Tz0AAzE3JTBcywIE1Xg8qJ%2BTiGVxq2R1TpCcL%2FmAkCWtPdczOd1StgqNBOlj%2FS479OhIP1F%2F248Y02QuSFFcW6s8xD%2B6lLRrzCe9vN2PEY0d%2Btkb0u%2F97s8KSe8dwxHVO869pmT7prcvFVesd6OiP7H0rHJeEZUL%2FeQzNeXZ6reQujmt%2B8Cknt8TYEPSf8S6qo8rJMcq2zp%2F8D35B8MlvaBapySnBREj%2BB9E8pGTOs9NLjhA0o6bYBkDW0N%2BYob3CJGt45JyVLFpb0guuYs9HrZICU3ccUifUGuJ38if8fD8zaZjvip5%2Bgt%2BlK%2FPnB%2F9ST2sT7X5UDnyCk9ySHd%2FpN3w1K%2FApw%2FA5LarZ8azSdvUaaJoVVdbVb0Fb8BXVblwC5MNT9DS4YGjVom2WFOFtNUuFsDgcpv6kaiQl9f0fY%2FaDAw2d%2BrwAY6pgGOyK7ZP1FAMKQZ7C9z4MUSdWi8VHurF3udJQ35lS7EnufS4Vb%2BWqq6YI4oSjVv2I7x8VZ4lhKkTTPkI6Blpy3%2F7FbfOcNobszEe00MJ9i1HtElLlk7enNJF37Dmpag2ftguisS2W4Zfqxxe4iTlUtjGeQWQpcjPiwu%2B%2BPZzYLCN9bZ3iGtygJqYdwu0%2FJNFxk07LOGJ0dxZ99DIFvQnmufONsMqZe%2B&X-Amz-Signature=3faf9eb566385faa485c66b3123e423a4c4f7b2ad003a0d92d3caf93eaf65333&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CUSHU2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh0xzrg923FhR%2B3LXEr31GP0ymu3%2BtoazUNaNEWPEf%2FAiEA44FyuBTehIqXfHUi5jcyuXYKWvdNZ%2Bdpr7M9QavNS2Iq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGMFF1llS%2Fuei4fY8ircA0UVuLMBQR7cvsa2Mqvxx0R5hbyGQUJFjPUSOft3WIObOidZIaRPTcjg9dZWTnvYDR2IG6e7Jr2uC7FF%2FV0Q5CX6gldxHHninytoy3BPVCSNt1SkBZ4JafXb%2FX%2FwBIkeAZyyXimt2p92TXEbi81L7svU4EJ0%2FiDVF%2FJtQnU7G0cdIR8Fr%2Fgj2yrICbB%2FmwN%2FwooKhiQCgzh4IWAOtWrCnC%2FgNcObHpmbXeMlwtZA1z7HKSP4eDq%2FfWTwR%2Fb9IH20PsZa8weE6Bhsleb4PtpwRZrPY19kDh%2FMt2upNdueOJA4oyorFRFxOy0bztXn649KqJv1F99etL5tUjsspynvTCI%2B1eK5XcGBFR2sTL2xe4MSHI35g5chwmhKiE9%2BXrbMMgjuDC10ZG6ORXKUjfEXAtoFN70dzAQbdmHlWCe0YtFsMXGgyQM6344DsNJ%2BTbctVGFp3RKoTlSXUx50RznWTr7ar9FDdasmfzr3JtBjovDPWBUi1PniIcfMVe4IykqW0f1ikoEK2fsML5H8GXp5adCJTYOBZKQwnzRiE6mr9Rif1fPromD%2FhV%2BuyyT%2ByRNkQ%2FA1Nsp06Fj37XCBKJu4CXIyexrbcT7v%2FNQ%2F1eFAxNdOuGk639RCFaCWRfx1MK3gq8AGOqUBTySkK%2BUADx3mPTmj5oKPEx%2FiI0GfJtmdNpOMwQJx8TPuYBY%2Bv%2BSvu38oEHB2WOjxZAT101UClbIDIR3OEw1AL3QlNXHmTouswMVP2FaUHWkSPFZKZCIx8%2F79a3yX0az%2FzvHQ%2FSqdFXgxfUHqR8L7S7202%2BkrQIPFiXbwbXqjeVgoflvD6J6lzdnw6mn%2B0%2BPJgmKVyU612agwvSHRP90Sv8T%2FgEe2&X-Amz-Signature=f330b63bbe22aaae552f09c13ce9876f264cade958b820bd133b19aa84ac1e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMXGPJ4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2w6j%2B%2F9q%2FIIkDwnux%2FATYbGkvYF95gGw420UwVUPfgIhAJBC5QjAWR3ok0D5JoNsIb9diG359GEYEsa4MR6esXFiKv8DCCMQABoMNjM3NDIzMTgzODA1Igx8pDrmD3ScOMzXVy0q3ANh18C7HtlRpiCZyCuVlPk5QjtVYuW3qwxaN0jd1hGnLO45HmS%2Bf%2F37o5XYVk7Gn8c3%2B9ahGSkTa2J8Z%2FxMdDkByGP%2FknIgJIbKXv5jrT%2BHD0f9a2hFgDmkymV2reU73CMEDJoP8O4sPhvAlr94z%2B1ZMD2Q%2BYhWj0Lsyp%2Fgv5VOLXG1LHijVaHaaBg6e4dyIAAnmbsipwSztiROxg6nlVQaYh%2FXwtB%2B3TEtzrfeMYvMTNv9alZrBFCF8W4%2B%2F09Rvw4MykY%2Fz7HJMhJ5ScHbPkyUGVj6dnJt1Hh07%2FOvizkDKic6WB09%2FW04%2F8ZZbtgEwe5Px5h5p0AGkGKuVgjzbmFpOFSAsxhppGT6Q4CZP%2FrWlPyJB%2FbfWdaKCf55YlYYtbzcht2fHc4lFScnMtq3e1p3Q5q2BNGdcdVEchn3CUWa3jf8PSnI8pVfIIOkHPik3Z69Ep8TorBunDtOLNlQC%2FrLzWycuEwjeMYN%2BEhBFOKJp4BalfYJI5QSQL7Q4TaBpp9U6VHDeAn7%2FOvCfBHRW%2FGLCklBO9relYfkQkwHCO4FEgB%2BmesPdvYehzeN72OEd1No4mR%2FxPPVhe0Cnh9QQv3L04%2FUIjFe%2BCAf5QlupAEHYFwG%2Bjzbhd0w8CBmcTCq4KvABjqkAXGP%2B54UbxNbi7k87albXgotyVsyRFo9uUykSKzgGAs8RZsX9WQ7UbOFqvkLva%2F6SBfV1gJeT3O5BVFurJZ%2BF1U4qQohZnleMBt1%2Ffyh98R3w8a6xzVslZSaCeUB%2F1T3fiB%2B%2BQtV1xuZEJq6Cemrd1vleY9r%2FJRE4rUXauokQb3jbBFdfKzFmnmf%2BAMLMIQt7WP8cd8D6Eo0mO2VEJ8TuO5TFEsW&X-Amz-Signature=0c603907bf54029a5260083fa9b5eeee2b57d62681cc848603d2202e4be3f7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
