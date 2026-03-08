---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZH2XRO%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC7Irh5BGUyMhqDRoJS5xa8QUSafk5DUHI6uNfI87y1HgIhAKTZFe0lr6bO0Ic0T%2Btzu7Jt%2BLgYHcxfI4NH3Y64O33%2BKv8DCAoQABoMNjM3NDIzMTgzODA1Igyn3s7Im53AFcPML3Qq3ANqyEVWj7%2F%2Bb2PwZreeuNqTGNky4ai2z6dO9zQoqRlFZFgWBjzX6Er3OWMhClZgwVZNaCCggVKXDciw5txr9NbpmUlXDe%2FL3nY35tKsYEQb4hT4lwKY3%2FGUCpyXfIdVhV%2BuyM%2BuBx%2FLtYEbpJLBkTNu5bl3YfbwQao9o15W8MlQy%2BoAHNJYvmIqHkaOt0ZttY6ccT2Lggzym9toAw5bVi86kopaG9Kjdnmfp1fFTJ4xoWIQYgxRL6jTZEIAfCLrPAsm9jj6NzpZKOXUtDdSvPZfizRL3vLv8x%2BXVkhtBsQ%2BOQIzGE8EBXqtg5jfgu9iHStBzXTrG1xsLPZiJQPfEoVl7utsOXR1jVKa6bl6yGl1O9BgiNagEUo6nEaZ8XrPUldSfKW66vfmn4xt4nso4FVZwYimo5bT5o2Y2Fa50HG%2BkSZzAXeUdpZ63VasVnR9gp1UjO%2BtFOm3cYC156r57ueAcPJXQACKWMtRAHSuVa0kzPaWq0BcNzepOSWNlZFxEq6rJ%2FkUfgoUG5E87xxnCbCQA8nNmK%2FNNIAryUJb3WSph4iiYjxoIwlA0Uukd3dJlIKvYiamtgxQkNLNTFB%2FJFgdkdb8pYsbjiynRFc3vWcacrjadDePux7HqlpkmTD8nLPNBjqkAWZURTHcFqAIpCJrWEgMx%2FC7tvefWeZDfeCIerem5d9TCPHq30Ml9pQ4zrmcXMBL2TiFG4CvXy0sfV6PbhbIEveXhVIrQysnBShmp8%2BLPYIlroLh9ki1JIeCboPgDzZbLptsqOE%2FipyTlx9lKC4hSwEpveCzxBH5SwYNanpoI8a9Ucu7X%2BhfenSopy4dWku9X4QAGCGVth07KXtuRFnTJl4GnzyP&X-Amz-Signature=04bb6cffbde4971e1516d198c8ee3e49bcd0174df239351a161371b8f403ca33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZH2XRO%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC7Irh5BGUyMhqDRoJS5xa8QUSafk5DUHI6uNfI87y1HgIhAKTZFe0lr6bO0Ic0T%2Btzu7Jt%2BLgYHcxfI4NH3Y64O33%2BKv8DCAoQABoMNjM3NDIzMTgzODA1Igyn3s7Im53AFcPML3Qq3ANqyEVWj7%2F%2Bb2PwZreeuNqTGNky4ai2z6dO9zQoqRlFZFgWBjzX6Er3OWMhClZgwVZNaCCggVKXDciw5txr9NbpmUlXDe%2FL3nY35tKsYEQb4hT4lwKY3%2FGUCpyXfIdVhV%2BuyM%2BuBx%2FLtYEbpJLBkTNu5bl3YfbwQao9o15W8MlQy%2BoAHNJYvmIqHkaOt0ZttY6ccT2Lggzym9toAw5bVi86kopaG9Kjdnmfp1fFTJ4xoWIQYgxRL6jTZEIAfCLrPAsm9jj6NzpZKOXUtDdSvPZfizRL3vLv8x%2BXVkhtBsQ%2BOQIzGE8EBXqtg5jfgu9iHStBzXTrG1xsLPZiJQPfEoVl7utsOXR1jVKa6bl6yGl1O9BgiNagEUo6nEaZ8XrPUldSfKW66vfmn4xt4nso4FVZwYimo5bT5o2Y2Fa50HG%2BkSZzAXeUdpZ63VasVnR9gp1UjO%2BtFOm3cYC156r57ueAcPJXQACKWMtRAHSuVa0kzPaWq0BcNzepOSWNlZFxEq6rJ%2FkUfgoUG5E87xxnCbCQA8nNmK%2FNNIAryUJb3WSph4iiYjxoIwlA0Uukd3dJlIKvYiamtgxQkNLNTFB%2FJFgdkdb8pYsbjiynRFc3vWcacrjadDePux7HqlpkmTD8nLPNBjqkAWZURTHcFqAIpCJrWEgMx%2FC7tvefWeZDfeCIerem5d9TCPHq30Ml9pQ4zrmcXMBL2TiFG4CvXy0sfV6PbhbIEveXhVIrQysnBShmp8%2BLPYIlroLh9ki1JIeCboPgDzZbLptsqOE%2FipyTlx9lKC4hSwEpveCzxBH5SwYNanpoI8a9Ucu7X%2BhfenSopy4dWku9X4QAGCGVth07KXtuRFnTJl4GnzyP&X-Amz-Signature=aa42cdb9db5ec97f68038f1028e7ea5e72bbe0f5975725da99cc00ed5915fbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZH2XRO%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC7Irh5BGUyMhqDRoJS5xa8QUSafk5DUHI6uNfI87y1HgIhAKTZFe0lr6bO0Ic0T%2Btzu7Jt%2BLgYHcxfI4NH3Y64O33%2BKv8DCAoQABoMNjM3NDIzMTgzODA1Igyn3s7Im53AFcPML3Qq3ANqyEVWj7%2F%2Bb2PwZreeuNqTGNky4ai2z6dO9zQoqRlFZFgWBjzX6Er3OWMhClZgwVZNaCCggVKXDciw5txr9NbpmUlXDe%2FL3nY35tKsYEQb4hT4lwKY3%2FGUCpyXfIdVhV%2BuyM%2BuBx%2FLtYEbpJLBkTNu5bl3YfbwQao9o15W8MlQy%2BoAHNJYvmIqHkaOt0ZttY6ccT2Lggzym9toAw5bVi86kopaG9Kjdnmfp1fFTJ4xoWIQYgxRL6jTZEIAfCLrPAsm9jj6NzpZKOXUtDdSvPZfizRL3vLv8x%2BXVkhtBsQ%2BOQIzGE8EBXqtg5jfgu9iHStBzXTrG1xsLPZiJQPfEoVl7utsOXR1jVKa6bl6yGl1O9BgiNagEUo6nEaZ8XrPUldSfKW66vfmn4xt4nso4FVZwYimo5bT5o2Y2Fa50HG%2BkSZzAXeUdpZ63VasVnR9gp1UjO%2BtFOm3cYC156r57ueAcPJXQACKWMtRAHSuVa0kzPaWq0BcNzepOSWNlZFxEq6rJ%2FkUfgoUG5E87xxnCbCQA8nNmK%2FNNIAryUJb3WSph4iiYjxoIwlA0Uukd3dJlIKvYiamtgxQkNLNTFB%2FJFgdkdb8pYsbjiynRFc3vWcacrjadDePux7HqlpkmTD8nLPNBjqkAWZURTHcFqAIpCJrWEgMx%2FC7tvefWeZDfeCIerem5d9TCPHq30Ml9pQ4zrmcXMBL2TiFG4CvXy0sfV6PbhbIEveXhVIrQysnBShmp8%2BLPYIlroLh9ki1JIeCboPgDzZbLptsqOE%2FipyTlx9lKC4hSwEpveCzxBH5SwYNanpoI8a9Ucu7X%2BhfenSopy4dWku9X4QAGCGVth07KXtuRFnTJl4GnzyP&X-Amz-Signature=fee2f503891cd678181efde621357037e4bd349956c1582f3a14bf947b0d5feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6DFUGN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCC3GFkAX%2F9XfF7PvGKqF0fj1C6Zk%2B4pMmXKnXl3S5dCAIhALzXE2I9wlpCh6FNlN%2BjlY%2FwAH%2BKFybSx4liXjXEhtZBKv8DCAoQABoMNjM3NDIzMTgzODA1Igw86q%2BLakQtDsaALAMq3AP0MXE7%2Bz%2FcGheb5Re7R0fOG%2FdcJCzVt0%2B%2Bp%2F4aVHTOmKmaSJ5p5R2ErHO1625tJdRQilPrAg%2FxIQLldlV%2BT8EHko8TGskhz3gntNFDUV7q5lvKfedKu5IgDCPGLLTdUZ%2FT5AT8VD1CE4AxDvtrMkLTBM4j%2F0fdcCgXN5%2FI1qIp%2Fky4DiT76kBgCRKqCVPAp0FVIlIVzpooMmdsB5%2FirtsexcHEOvg2jeM9I3UfdeOWkAMaFrco55EIbo2zvAemsZT3ZEVTIU2gHUa03Kn0LWWO0w6K85MPL932Rp5NH9%2Fhm8h%2FPI6I%2FuBaNQmNiIBbbJ1Dl3c21Nz%2FIjBmLUXZVQ31FVtVLEZ5iv18njUtFqVsNJrp9GXjM259t8seBGEWzdJOX0UNIWqSnC1ILTLSp1%2FA8YchNp7f42up7DChEjtlnCxM6xYMO32PLHjB45mZUH0LabSj8rLEqLXk79u7fsirgBbfT0JLdfIL1VjAjKX2xtWyK%2BYAUx6W7Bh5fxsGMroz6fVNoyJf2Xw7wDSM0ArdBbqaEOhGwKMZR8rknDWUAhZLfjKRskOHxdc45uauGh1FTIu%2BV0K6WI0ZJfiythM3poJBl7%2FGbFaienTycNDoI8tuaC5idyzYEuzYPjDwnbPNBjqkAdtXBdPgyE83oxysle%2FSHrZ%2BdUzuOY59GXw9buMZbAcAidg35nxYtd3f6fmVxEYapsvKlMftnb%2FnxJRehlr4%2F8FDQ7Qs5q5AB%2BOqpsch8lxAP7ccZf76bO41d0INcbnI%2BHxnQOXEpYhwa7%2FBPsdtHPQBbCUzQ4mBIolHjAwNLa9C3ckb2Q7uRnKjHEzHTepAOnFeseB3SEImY%2FpcEfx6HHUol2um&X-Amz-Signature=e11a155cb98bd7ccadac3d379089cd99299f2b1956ae9c3683e13625d343fe5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQLSI33%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICSDxESZa%2FHUukk%2F5vGwCZ6S2%2F9avg7aKZaq2%2FFTqPt%2FAiEA8LkeU7huF%2B89vryhm9Y4XgZv1Ke8NUWfTbf9C38G82Aq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDFQkJ5ygLg%2FkcdrhZircAxvXnB6%2BxCb9g1UDgXWScoaD9Tlh2bPCuXg0KTPQfEQbzqdNIu0njMELdgtCTQSYRNgikjLFvh1K3DolYlUi0xIZD4ccmywDunNkWbLuAVUiiZgkU9hFB7ZmsMumMLopqwqv8VF6Qm8YZg77b0hygwIaUyr1bCETHYMtUOiFGfOQVmmbDJ8ZOSqg4YqkOgLyZ%2BIkLRli0O3%2F4tDHfbu8H4VH4nrS0ktOZSOiNv2IRezcfo%2BFkjbh93a2fwojbgf1W%2B0fgL2t54SXorhH%2BwoWLL44ZetA5sjGUCj5GCF1xfxAANGuZFVATVWg9cegXGp%2FGDOC2UY56O4LbCxSIcd14ngyMCFJWTkIwnSIfFG70%2F0gphzUlN5XrRVW7UC%2BE%2BW9mqKc00oB%2Fb%2BRNBLuuL7aA3Z5eywn%2BPdz%2FjyUfnHb%2FxykakHnNWASmFX9ON1hzVoCgTs5cO2vayIPv9rWi3Vwo8zmTHKknAwra3SGHHJ4y%2BaO2%2FWx6Mkgm8PoQn0udpzax%2BwmW8P%2B1GxjWJdxPK1aoLGsIx3ZrIgtp8%2FVJLXKEzLZ%2BN5FkA1gmSE1I5ZGnsvbiSazPKWXqN2ZNOBU9BB4vyGUtsWekMqoTIEjivtiLrT9v9r8HMkD%2BYyobgeIMLeds80GOqUB%2FhSDMMJ6CqspI5l%2FvUJPnXpUXwM431fGgA38Ams0F1xpFLbBQjc3dtQBWoS87qfx7JDjp4f%2BridOOAATxUAyyWxQsCEGCyXL3VxHJNR435Qxn4BKNpLK8iFdu7NHkW7YHeiXWtTsD%2BL9lMyjeTouICw6LrnUkBD8BDgx7sPslAeIMEq3YtzondHWpJGwvug%2FZCKuIMxnK%2BDWSn%2F5TYMFn502q2zA&X-Amz-Signature=1b70ef18e1c1fd29e252b52b5f81ddadd16ef3d22f833f6d8ab6153baead33e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZH2XRO%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC7Irh5BGUyMhqDRoJS5xa8QUSafk5DUHI6uNfI87y1HgIhAKTZFe0lr6bO0Ic0T%2Btzu7Jt%2BLgYHcxfI4NH3Y64O33%2BKv8DCAoQABoMNjM3NDIzMTgzODA1Igyn3s7Im53AFcPML3Qq3ANqyEVWj7%2F%2Bb2PwZreeuNqTGNky4ai2z6dO9zQoqRlFZFgWBjzX6Er3OWMhClZgwVZNaCCggVKXDciw5txr9NbpmUlXDe%2FL3nY35tKsYEQb4hT4lwKY3%2FGUCpyXfIdVhV%2BuyM%2BuBx%2FLtYEbpJLBkTNu5bl3YfbwQao9o15W8MlQy%2BoAHNJYvmIqHkaOt0ZttY6ccT2Lggzym9toAw5bVi86kopaG9Kjdnmfp1fFTJ4xoWIQYgxRL6jTZEIAfCLrPAsm9jj6NzpZKOXUtDdSvPZfizRL3vLv8x%2BXVkhtBsQ%2BOQIzGE8EBXqtg5jfgu9iHStBzXTrG1xsLPZiJQPfEoVl7utsOXR1jVKa6bl6yGl1O9BgiNagEUo6nEaZ8XrPUldSfKW66vfmn4xt4nso4FVZwYimo5bT5o2Y2Fa50HG%2BkSZzAXeUdpZ63VasVnR9gp1UjO%2BtFOm3cYC156r57ueAcPJXQACKWMtRAHSuVa0kzPaWq0BcNzepOSWNlZFxEq6rJ%2FkUfgoUG5E87xxnCbCQA8nNmK%2FNNIAryUJb3WSph4iiYjxoIwlA0Uukd3dJlIKvYiamtgxQkNLNTFB%2FJFgdkdb8pYsbjiynRFc3vWcacrjadDePux7HqlpkmTD8nLPNBjqkAWZURTHcFqAIpCJrWEgMx%2FC7tvefWeZDfeCIerem5d9TCPHq30Ml9pQ4zrmcXMBL2TiFG4CvXy0sfV6PbhbIEveXhVIrQysnBShmp8%2BLPYIlroLh9ki1JIeCboPgDzZbLptsqOE%2FipyTlx9lKC4hSwEpveCzxBH5SwYNanpoI8a9Ucu7X%2BhfenSopy4dWku9X4QAGCGVth07KXtuRFnTJl4GnzyP&X-Amz-Signature=f9b18985e501f1beb556c02419e6ad3b37d0b2cd925b122c21252b8c9f8b2705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
