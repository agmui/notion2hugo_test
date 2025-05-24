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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKVCPE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCID2abpUoTt%2FqgiFraelXFjgr4Tryl1v%2BkDNO3WCd5%2BddAiEAoyid1w08mQ3XdKERSPiZ%2FbPrxXDrue4VJYEgRKME9OsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGnCp%2FBoeq%2Bw3Z%2BfCrcA%2Fe3AgiQ%2BKRR%2FdxNGyRco5cSMzA%2BKOKiM59pF6Fr93Rlt%2FazZx8rX6SIjan%2BCE9V7PANoLxvw9MqztuxxlCxUbZv5keG%2FCe6LwjvbueXxgSltpiNoxVhdikPl5jFfHgj3kmWDYYE39P8SyHkBaGPC80R8gwdhEFr11zM9%2Bv%2BONvrTGvw%2FMIpH9ZBpt2G8ybvQBjhPmO5rgcpu6NQvtk6JXeZuYXFtw4NqCo5codKV67mwabQU5DIa7mWbGXd%2B55QVzVcCO5a%2FaZfZwM8Ya47RdUmNTkK5%2B3R8ANmT4h%2FpTupbALcxz5IR7kKItldfzvgeteiJebM9iPQulEupMSJanOOXQGPF%2BtEPn5T%2FusIDb22lHZjEwQ4338pzziEOs67FgraxGD7uR3CWUh8oYIQb5tLyV81y0Gpury3tB7rSNp6RYQYlKo08YSMNFMrMnBefLRk2EMeQla%2FA%2BMhKaNF%2FaZiPNEW%2FDtZf%2B4Z2hmfrwC%2B0%2FLvRpYUDPQwlvh3ZuqcCCLKy3KLqEe%2BMUIbzamkCZlrJv8Mk1rTBm8bWLhuAoxvXGmyz3zdYN9tYTBzdzq919QbjPu4d%2F%2B%2B6%2Bzh5BOS8HlZLI2OQOw1s%2F1PXbNrZMaYY%2BKb7VyT3IywOeM2MMr4xMEGOqUB%2FCbwPB9NUUYz%2FLTlYLxAUNW1no97QOhV5%2F2hn8TOApFTxxWsEARTjJBirkwERRoYA3SeMGRjSTR6%2Bu5hu4swHm7U%2BQg3MRl1yJKzhJGL%2Ftw2qWlVo0KslPAn9vQ3lGcXv9PAS9%2BDwWeip54pEko06vwgF9OoeYUL82GFUB5AGNTedq0UQOVaCVClYo0MK7wztlATc16%2F42FBnXOlmRCgzGIZwmIO&X-Amz-Signature=735ee3beb8d995eff8b922775b7f5dee573a797bef764e8237109bea18fd2b10&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKVCPE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCID2abpUoTt%2FqgiFraelXFjgr4Tryl1v%2BkDNO3WCd5%2BddAiEAoyid1w08mQ3XdKERSPiZ%2FbPrxXDrue4VJYEgRKME9OsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGnCp%2FBoeq%2Bw3Z%2BfCrcA%2Fe3AgiQ%2BKRR%2FdxNGyRco5cSMzA%2BKOKiM59pF6Fr93Rlt%2FazZx8rX6SIjan%2BCE9V7PANoLxvw9MqztuxxlCxUbZv5keG%2FCe6LwjvbueXxgSltpiNoxVhdikPl5jFfHgj3kmWDYYE39P8SyHkBaGPC80R8gwdhEFr11zM9%2Bv%2BONvrTGvw%2FMIpH9ZBpt2G8ybvQBjhPmO5rgcpu6NQvtk6JXeZuYXFtw4NqCo5codKV67mwabQU5DIa7mWbGXd%2B55QVzVcCO5a%2FaZfZwM8Ya47RdUmNTkK5%2B3R8ANmT4h%2FpTupbALcxz5IR7kKItldfzvgeteiJebM9iPQulEupMSJanOOXQGPF%2BtEPn5T%2FusIDb22lHZjEwQ4338pzziEOs67FgraxGD7uR3CWUh8oYIQb5tLyV81y0Gpury3tB7rSNp6RYQYlKo08YSMNFMrMnBefLRk2EMeQla%2FA%2BMhKaNF%2FaZiPNEW%2FDtZf%2B4Z2hmfrwC%2B0%2FLvRpYUDPQwlvh3ZuqcCCLKy3KLqEe%2BMUIbzamkCZlrJv8Mk1rTBm8bWLhuAoxvXGmyz3zdYN9tYTBzdzq919QbjPu4d%2F%2B%2B6%2Bzh5BOS8HlZLI2OQOw1s%2F1PXbNrZMaYY%2BKb7VyT3IywOeM2MMr4xMEGOqUB%2FCbwPB9NUUYz%2FLTlYLxAUNW1no97QOhV5%2F2hn8TOApFTxxWsEARTjJBirkwERRoYA3SeMGRjSTR6%2Bu5hu4swHm7U%2BQg3MRl1yJKzhJGL%2Ftw2qWlVo0KslPAn9vQ3lGcXv9PAS9%2BDwWeip54pEko06vwgF9OoeYUL82GFUB5AGNTedq0UQOVaCVClYo0MK7wztlATc16%2F42FBnXOlmRCgzGIZwmIO&X-Amz-Signature=f4c039c159d43f271ac5f33133b652adc03239b5363b4bcafa0114e5e3a55c51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKVCPE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCID2abpUoTt%2FqgiFraelXFjgr4Tryl1v%2BkDNO3WCd5%2BddAiEAoyid1w08mQ3XdKERSPiZ%2FbPrxXDrue4VJYEgRKME9OsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGnCp%2FBoeq%2Bw3Z%2BfCrcA%2Fe3AgiQ%2BKRR%2FdxNGyRco5cSMzA%2BKOKiM59pF6Fr93Rlt%2FazZx8rX6SIjan%2BCE9V7PANoLxvw9MqztuxxlCxUbZv5keG%2FCe6LwjvbueXxgSltpiNoxVhdikPl5jFfHgj3kmWDYYE39P8SyHkBaGPC80R8gwdhEFr11zM9%2Bv%2BONvrTGvw%2FMIpH9ZBpt2G8ybvQBjhPmO5rgcpu6NQvtk6JXeZuYXFtw4NqCo5codKV67mwabQU5DIa7mWbGXd%2B55QVzVcCO5a%2FaZfZwM8Ya47RdUmNTkK5%2B3R8ANmT4h%2FpTupbALcxz5IR7kKItldfzvgeteiJebM9iPQulEupMSJanOOXQGPF%2BtEPn5T%2FusIDb22lHZjEwQ4338pzziEOs67FgraxGD7uR3CWUh8oYIQb5tLyV81y0Gpury3tB7rSNp6RYQYlKo08YSMNFMrMnBefLRk2EMeQla%2FA%2BMhKaNF%2FaZiPNEW%2FDtZf%2B4Z2hmfrwC%2B0%2FLvRpYUDPQwlvh3ZuqcCCLKy3KLqEe%2BMUIbzamkCZlrJv8Mk1rTBm8bWLhuAoxvXGmyz3zdYN9tYTBzdzq919QbjPu4d%2F%2B%2B6%2Bzh5BOS8HlZLI2OQOw1s%2F1PXbNrZMaYY%2BKb7VyT3IywOeM2MMr4xMEGOqUB%2FCbwPB9NUUYz%2FLTlYLxAUNW1no97QOhV5%2F2hn8TOApFTxxWsEARTjJBirkwERRoYA3SeMGRjSTR6%2Bu5hu4swHm7U%2BQg3MRl1yJKzhJGL%2Ftw2qWlVo0KslPAn9vQ3lGcXv9PAS9%2BDwWeip54pEko06vwgF9OoeYUL82GFUB5AGNTedq0UQOVaCVClYo0MK7wztlATc16%2F42FBnXOlmRCgzGIZwmIO&X-Amz-Signature=d5d49995dea513a98fc8db96a75e96b07fcbad65e3588ea3cf26526e6ec0ff8a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZODC3T2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDI3%2BnTlYwiVApCcdHpnQJ6h3yvH3AF1bdI%2BnKM%2FmZ03AIhAPidWlgzEzBmXqZW0cNHBMpEzhi%2Bakd4SYzXM%2FfRRl94KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfZs47Ta4je5d3%2FLYq3APX3hb%2FthMRNmqrZ%2B1GDvmSKO2O%2BU51QVht3BzW%2BYd5dAT92X3Y%2FKDxmMXUh9PcS%2FmVjadTXpW%2BGtChfcLivmwX6KiwVZsIBapUm%2FIG9oWlFayoyzWOw3l2wVnDv%2FEMQmTYtZDl8ArJuGBNNGpdHTQvjlI%2FrHtWtFOCWYHtY0hbe%2BSCbNf9v9zSVF2DuLNHD7CCnESzXpAAX5iZpLCtjCOEOZhDwkRpK6928uv%2BFdnXyvw7ydCMiNhl0Isd4RvDl1aCD7g%2BiUBgaZriTWRe2XrjQ%2BP737TXQrJAWEP7uKa1CECfrGFzcq9Kkm4phSRbivyd2Yp6QlkBX6fFRSModPO%2Bc2T7VBAv1cm%2FJxwwvijwa28cE3cVeQRj3pBL5ZlGQZuK6KBJK6vgN9%2F2p2cFpRqhS5W5eb81nV3cq5Qp%2FdKtSaJZT907bGV69vvtvIPy%2FvbDVSiX2GobUa9UOcB63JJQTZ%2F6i8w4D4pNK9qzyt9d2XCXf46LrlY2XiYWalRl4oXBBb4%2Fl4N5d56czv8wGFF1cbKIJYEtwvOXjMNzy1Tts1XPOZQc9nSra8wFP3RYe9MIaFoChV6VVuFhdrWuEyYzBDNkP54BeL2pnkzSDPEPr1OCxWTTsHj12k6PzDCA%2BMTBBjqkAUv1MGf4%2FZ9JAEVeYWmaS%2Fmf%2BIZ0%2BZKoypVhHsFkRYrV4u0DW4dzJ4e3REH74HGaaHVl0VH60kJbSRpMAD2P5JZ8qlQoVS%2Bh88a%2BBZju8e3kTQ3KScSQpKEwH4qKg%2F8dXhSOtskC6rIzPSSd5QedWWZIxQbpJMV82fj3bfexT1KQ%2FSIU0ZNkfTVFrDMvR66aXbTfSLogWCw8oQLkeKJDMZmyPj6d&X-Amz-Signature=1487b571763184f2946df5f79208284f396d347eada7362a4ca202cafe88ff05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDPEBWR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCkAACXwQlzqZsxQ5I3Mj%2Fiv%2BBfyXT4TlqypXj%2F0VyBqwIgIMh85Anz5dhbwFue8rMAV8Zc3z4wn6pPQDzSagt0JokqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz%2ByEYxJ3ntMIUQSyrcA6cYPeoD7VYnpuX8gRSmGeIhtdKQvUrzdPmEgH3PsNvtAmbigHqUGjqa12ORSAkA%2BgyAda8dCPhLcE%2BN%2BlnmrRhOTTNy4kw7sZFBmCnOioIpOHwDWKPmsGkV%2BZiTfQCRF0q%2Bg5XI4RtGvhBpcjkWoyw0LFjBoPc3O3a45ajotsw7BQFx%2B1ERUslWE5vHF%2FeEns8a0Z0PR94maV3Jl0wRjJCrxHUWGHKVvZuCsdpoJcQcKnkUranUJ7wGQ9Elk2kMEYVpkTZDsP%2BJ6MM5ANbD88dl%2BhIPKq2mfS1BgaJDGPoUvZGdfog%2FW%2F840ar1B3zt6RIXrcb%2FNQmy77faXpsZx5Nof6WUFrqm4O8OopYm0pt6BPYXRf%2BYJ0h%2FK6VaML7M88H2TM6BAPlRmQXJfd3%2FvJhbudWl4NFACH%2FombzELgkciIBYmaCRP6oLadmEX3NfTF%2BLHWgjt%2FH3Wczo6z3Col3E%2B4hrUoObgpbz3imSp3ZBD2%2FBatpNrzYXX51z%2FjgDnWDNEJtU%2Fas%2BNMPoxnz5Asb0l4s%2FL3j%2F4Bm3iCq%2BShb1ejATtt8cfoRyQ4Jc4%2BfKyLO6ooNVQHPOafnjmxWtvbkjocdxcTwWPacUow4r1dpBUeU8wJHj1tKigkJPMLX4xMEGOqUBP7aDj92YxOcWCd%2B6u1ouiEXMB%2B7EKyHr63N3v7LlIpeYBbP5Ckk3jEiTNysAJ8EHUm8h7IZ6NxwWEa6AaD3YJOkrJa6ATu0UC50yBYJcOriS4kuMw6akwdEjnRwxvKyb7TR88Q2EjgoIa2%2FYu2jk1BPh%2Bwipg74VG3spdtXW16oH0BXRQLll4g024WLppFHaEpqBn7qsxQTPl3Zae6mSaBXT5e0G&X-Amz-Signature=d57d923a5af8be9f136cac48f96c6cacfc8ef968901ee69e8a1921a5da7fbad1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKVCPE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCID2abpUoTt%2FqgiFraelXFjgr4Tryl1v%2BkDNO3WCd5%2BddAiEAoyid1w08mQ3XdKERSPiZ%2FbPrxXDrue4VJYEgRKME9OsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGnCp%2FBoeq%2Bw3Z%2BfCrcA%2Fe3AgiQ%2BKRR%2FdxNGyRco5cSMzA%2BKOKiM59pF6Fr93Rlt%2FazZx8rX6SIjan%2BCE9V7PANoLxvw9MqztuxxlCxUbZv5keG%2FCe6LwjvbueXxgSltpiNoxVhdikPl5jFfHgj3kmWDYYE39P8SyHkBaGPC80R8gwdhEFr11zM9%2Bv%2BONvrTGvw%2FMIpH9ZBpt2G8ybvQBjhPmO5rgcpu6NQvtk6JXeZuYXFtw4NqCo5codKV67mwabQU5DIa7mWbGXd%2B55QVzVcCO5a%2FaZfZwM8Ya47RdUmNTkK5%2B3R8ANmT4h%2FpTupbALcxz5IR7kKItldfzvgeteiJebM9iPQulEupMSJanOOXQGPF%2BtEPn5T%2FusIDb22lHZjEwQ4338pzziEOs67FgraxGD7uR3CWUh8oYIQb5tLyV81y0Gpury3tB7rSNp6RYQYlKo08YSMNFMrMnBefLRk2EMeQla%2FA%2BMhKaNF%2FaZiPNEW%2FDtZf%2B4Z2hmfrwC%2B0%2FLvRpYUDPQwlvh3ZuqcCCLKy3KLqEe%2BMUIbzamkCZlrJv8Mk1rTBm8bWLhuAoxvXGmyz3zdYN9tYTBzdzq919QbjPu4d%2F%2B%2B6%2Bzh5BOS8HlZLI2OQOw1s%2F1PXbNrZMaYY%2BKb7VyT3IywOeM2MMr4xMEGOqUB%2FCbwPB9NUUYz%2FLTlYLxAUNW1no97QOhV5%2F2hn8TOApFTxxWsEARTjJBirkwERRoYA3SeMGRjSTR6%2Bu5hu4swHm7U%2BQg3MRl1yJKzhJGL%2Ftw2qWlVo0KslPAn9vQ3lGcXv9PAS9%2BDwWeip54pEko06vwgF9OoeYUL82GFUB5AGNTedq0UQOVaCVClYo0MK7wztlATc16%2F42FBnXOlmRCgzGIZwmIO&X-Amz-Signature=95edafbf1f4c6e4591291fd7fa961727aea05a7f3a01fa74ad72599bcf9dda0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
