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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDHRY2T%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD7bQoq5RhEhep4sCgxNQsyeX6PwvGVR2BwT0MEyW1CwgIgT9Xm%2BZXJj4WUaC4fHKbv0Llz4MfC9JOOTYmjOfnvVqkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKBLzGurHrRA8KnLyrcA7KlNT0j4SbFV72r2njRkeGJOhImhi0rYoMjRBqxbUiwcrsoIVz1%2FYVDlgmkMSvl%2B175QY1yWras0zsBCKMuLZS7AeZyVZ1n7VYeaCsIx1kLFVkIww3rduN7MvA1trZAoG1id4RqJAzX1kYelO155ZOkkK63ItDLBlsw0LnhnXNLr0hTjwozsYyAsTIbYHfa7gnHu1%2BREVz78%2BvnNpouwRsx5iP8rX6dnBUq1n4jAdNdxMjdu05RQFNPyh7DgsH9TzgyX4zCA3dPJBqNG%2BflIPgPwCw%2B3AcDCvBO92s4u4W5mF2%2BIWoKzwiH1UEfUdoYTIYBetfhjdZrpJXqwzZibisllN6RaIqLHkzBNlNALG9eBI2I7fXcy8LPPyjXowC4hEsjdph9y56Z8%2Bzyo4%2B9cAmbKq3zNnEgmR8rWiXJnIuGZVMnt4ZndDzLInICUV08DVDmuvx4szstaj41dQUYtxcI53uOP8600Q9NPbGzRvWqafRue5iVQ865ard5W3gvVcM5LAt0TziKczBSCjkEi4Ce%2FakgeIjluA3Ibwdz8YSBqzZ8T0hd2XLPlcggZ67P5jM0dZTbfxWHO0RQ0MAXxBSiZRD%2F%2FJyNun9qFjZXazuaHK9HCPHLUl7cG%2BvLMMqfoMQGOqUBeUhjacs166xYKjTBXXDpPB0f0XzGS1BSagLMMyZDj20btkvj2s5nHRJw4cPT9CoLXVdlJu3e%2B1c9iTdH79jhFiEGZVes6MHeY00TJJYfzYRvcXMcs5I8JWDuixHwSDpq6VCl2EOXPhNlAs9PsmoOLYHG1kIw8%2FCi45p67DUWf5VUAMlNFMakdZ2xWdGUIk6mrCHHVLAYwpdl6AY4OP3C5bcuEI0K&X-Amz-Signature=a0b993139668d404c87abbd52c2d05e54f7a1600393f4a061ea2a893338629c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDHRY2T%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD7bQoq5RhEhep4sCgxNQsyeX6PwvGVR2BwT0MEyW1CwgIgT9Xm%2BZXJj4WUaC4fHKbv0Llz4MfC9JOOTYmjOfnvVqkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKBLzGurHrRA8KnLyrcA7KlNT0j4SbFV72r2njRkeGJOhImhi0rYoMjRBqxbUiwcrsoIVz1%2FYVDlgmkMSvl%2B175QY1yWras0zsBCKMuLZS7AeZyVZ1n7VYeaCsIx1kLFVkIww3rduN7MvA1trZAoG1id4RqJAzX1kYelO155ZOkkK63ItDLBlsw0LnhnXNLr0hTjwozsYyAsTIbYHfa7gnHu1%2BREVz78%2BvnNpouwRsx5iP8rX6dnBUq1n4jAdNdxMjdu05RQFNPyh7DgsH9TzgyX4zCA3dPJBqNG%2BflIPgPwCw%2B3AcDCvBO92s4u4W5mF2%2BIWoKzwiH1UEfUdoYTIYBetfhjdZrpJXqwzZibisllN6RaIqLHkzBNlNALG9eBI2I7fXcy8LPPyjXowC4hEsjdph9y56Z8%2Bzyo4%2B9cAmbKq3zNnEgmR8rWiXJnIuGZVMnt4ZndDzLInICUV08DVDmuvx4szstaj41dQUYtxcI53uOP8600Q9NPbGzRvWqafRue5iVQ865ard5W3gvVcM5LAt0TziKczBSCjkEi4Ce%2FakgeIjluA3Ibwdz8YSBqzZ8T0hd2XLPlcggZ67P5jM0dZTbfxWHO0RQ0MAXxBSiZRD%2F%2FJyNun9qFjZXazuaHK9HCPHLUl7cG%2BvLMMqfoMQGOqUBeUhjacs166xYKjTBXXDpPB0f0XzGS1BSagLMMyZDj20btkvj2s5nHRJw4cPT9CoLXVdlJu3e%2B1c9iTdH79jhFiEGZVes6MHeY00TJJYfzYRvcXMcs5I8JWDuixHwSDpq6VCl2EOXPhNlAs9PsmoOLYHG1kIw8%2FCi45p67DUWf5VUAMlNFMakdZ2xWdGUIk6mrCHHVLAYwpdl6AY4OP3C5bcuEI0K&X-Amz-Signature=2b27c4b98099f00da4ab7e11b98891defe5ab2d3c388c16d112116c3c4cdd7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDHRY2T%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD7bQoq5RhEhep4sCgxNQsyeX6PwvGVR2BwT0MEyW1CwgIgT9Xm%2BZXJj4WUaC4fHKbv0Llz4MfC9JOOTYmjOfnvVqkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKBLzGurHrRA8KnLyrcA7KlNT0j4SbFV72r2njRkeGJOhImhi0rYoMjRBqxbUiwcrsoIVz1%2FYVDlgmkMSvl%2B175QY1yWras0zsBCKMuLZS7AeZyVZ1n7VYeaCsIx1kLFVkIww3rduN7MvA1trZAoG1id4RqJAzX1kYelO155ZOkkK63ItDLBlsw0LnhnXNLr0hTjwozsYyAsTIbYHfa7gnHu1%2BREVz78%2BvnNpouwRsx5iP8rX6dnBUq1n4jAdNdxMjdu05RQFNPyh7DgsH9TzgyX4zCA3dPJBqNG%2BflIPgPwCw%2B3AcDCvBO92s4u4W5mF2%2BIWoKzwiH1UEfUdoYTIYBetfhjdZrpJXqwzZibisllN6RaIqLHkzBNlNALG9eBI2I7fXcy8LPPyjXowC4hEsjdph9y56Z8%2Bzyo4%2B9cAmbKq3zNnEgmR8rWiXJnIuGZVMnt4ZndDzLInICUV08DVDmuvx4szstaj41dQUYtxcI53uOP8600Q9NPbGzRvWqafRue5iVQ865ard5W3gvVcM5LAt0TziKczBSCjkEi4Ce%2FakgeIjluA3Ibwdz8YSBqzZ8T0hd2XLPlcggZ67P5jM0dZTbfxWHO0RQ0MAXxBSiZRD%2F%2FJyNun9qFjZXazuaHK9HCPHLUl7cG%2BvLMMqfoMQGOqUBeUhjacs166xYKjTBXXDpPB0f0XzGS1BSagLMMyZDj20btkvj2s5nHRJw4cPT9CoLXVdlJu3e%2B1c9iTdH79jhFiEGZVes6MHeY00TJJYfzYRvcXMcs5I8JWDuixHwSDpq6VCl2EOXPhNlAs9PsmoOLYHG1kIw8%2FCi45p67DUWf5VUAMlNFMakdZ2xWdGUIk6mrCHHVLAYwpdl6AY4OP3C5bcuEI0K&X-Amz-Signature=4272e252230f1cd97e3ca0e8d717c5575958f403bd4d25317f83ffe1de056b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCKE72E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICGA1nsgWkKb9rEPTSGSz%2FN2OZvPDcFj6Gsws9La3IHmAiA9d%2B8OgBTrG78Y9keZW1Y7c3KstacdTsJVaWWle70X7iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0w%2B2Iq42O0szljFKtwDZAolw16l%2FU%2Br9I4Wu9dGcbfgSknEEdPcO0vicuzP3JiRwi9P79oVeFUfodfOe1t3lwiOPEEtQA1%2BRFGBTAdCPGgPCTYgg1w3ZFupGw0xiqhUzyoTj%2BcLAk%2FJq8o98rUEdMQA5S690uX2xZ28vFYpeLBH25KJdp3%2B8X2LEIPwTf9rb4gmSYTFWzpHyOiinSHuzOgCDstLbKw0vgL14CImTGkdqEJP9hx9t0L3WoC3b%2F5jUHG22L2k15LBdry%2FK%2BiP0Ok1gZZNOKHs9e3a4qo%2BcZ7SsRjV3YJUMTb62iIpVuZ0YEcQxU3M44EkCLgj%2F7AicjleKMVObPFG86W%2F9QQgf%2BRm1FzL3OezM%2FdUCfHspj0%2FbfauaZG%2FIvrsFJCS2acRnDQasR%2F9X2TW%2Fv%2B%2B%2F9g4t3tHVNH8lC36ZkPqh9%2B4PsjjZ8k85aiGEchY7AhAcvK2pLqv0dSr7FS81LodZMOcWuouO58WFq%2FPVmq7auVmknzgOsmEeJsH5l82F%2Fy2SuHhgCwGyrBjNMPki0BGrETHbY0iOMAxLeFOwOVWLe6VaI7SWBO8E0bvJmx9E4TNs%2Br6PLHkREHWLCy4P9r20UIwloO9Fx0nQyjbI6tgil0HRNMnvlAdfzwZ9kB9m1Uw0p%2BgxAY6pgHPRhs02vctBufvFfDda9Y2pDchu2%2FkUhNtUNxHkzqA3VjdCwacRYxgI4YRZW523Ixe0xmJVf3Q52mqcv1LsuvYeZ35xTiz4tY8zjddo9%2FmZJrNic6I1VaWc6Pmyb6OnbkoGiqbNpABQDuH6ecAu7HiyAJ201yeZLynlfrjSrKRgTmZ4sHtRNRuus%2BtX%2BeQ7MPKLMkU4ebAwFhpNwdizpggc6qJl%2B9V&X-Amz-Signature=c522afd213fe50ecd4f465e9641974f2e8720864f3730cdaaa76237baacd1671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FX7UXR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCYJWNPQfjPT17h1ZU91U%2BGkZSkGLkd07uzk0OgKFE01QIgLZIDT1gzqy6RgcuJRgKXiLheT6wsts0%2B3L4RLnZJvuIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtLwK0wcB%2BvAiWa9CrcA4aT7%2BHvSCmjzRfimC6PILetV3uWx8ERgIiQoK1zxo1%2BE5j3YVLaW9%2Bo5lIxSycN2kjK3%2Bckq3MAeoZwJbiBkcJLVJn3WPqBaZ%2F4MuyAaEZ8LBMrlgaDcfsDIMcWKKBy1uJzvqd0c2CI%2BDWw3QJumtIWzibEZg15l9LbyVpIbkVe3NYhzCXNz8jKfX19z%2FZJj49pzivLhNOOrrUKK3tPk%2FYgUCTJ3wCJyvZOttm278tAhmGPwD7aPIYX9Felnk8Zf7uK3ohkfAmgl%2FNEgW8seFGx%2BlmaxqAQheMp5ikIJr5SAtnVglXte%2BYRE4WdrREJUw2rhyzKCv0RiGai9IkBHg9ZjbgTKa0uLvX0GgJRxV4NvpbpWExbsgcLCYsACf0reWvVq%2FujjIuI9XPxCyiK6fx%2FeJDMfhddyA3gaGAVw%2BKEKraTMmLl2s84dmQpvJCBs76V1XGzr43eUBRlQCLp1wNv5viRnQGSfIpokPSfkkIabuZW931AhaDxNCiCD8ZOSFvmijKEddQYXFfgk0ijtdasNNG81i4V6Aeg1XLxmx189IozWgUAMjK27I1%2BLFppxOXcC1zJ4Shwo2Iz06geSAesu2GYexjmwvJS9LZ2FBS04FdqxpHb1OdKcVDnMLGfoMQGOqUBWMJF9MOjHC%2BmBs0hpKWIKUrf914qcdAx%2BTt55AkgaPP9kdGOGvVDbrBzDfl6GZxnGZQdMcPPZsIz0BgXfXETcFld3XT7qDEas2zbztkqmWniVuVASvW32RqdruONYiO8LDwlhNkdLjEk59CeNAk3GTzI%2FLRoTjj9QtRiNaMbCgVclutC714SXBtQolOG2aKzK5WHMoobPS8GYb%2BgHOJ4uuPQZ2at&X-Amz-Signature=33588d3569b9b128ef2bdfb21a368de69310bbee4549bacbac97093243cfab0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDHRY2T%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD7bQoq5RhEhep4sCgxNQsyeX6PwvGVR2BwT0MEyW1CwgIgT9Xm%2BZXJj4WUaC4fHKbv0Llz4MfC9JOOTYmjOfnvVqkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKBLzGurHrRA8KnLyrcA7KlNT0j4SbFV72r2njRkeGJOhImhi0rYoMjRBqxbUiwcrsoIVz1%2FYVDlgmkMSvl%2B175QY1yWras0zsBCKMuLZS7AeZyVZ1n7VYeaCsIx1kLFVkIww3rduN7MvA1trZAoG1id4RqJAzX1kYelO155ZOkkK63ItDLBlsw0LnhnXNLr0hTjwozsYyAsTIbYHfa7gnHu1%2BREVz78%2BvnNpouwRsx5iP8rX6dnBUq1n4jAdNdxMjdu05RQFNPyh7DgsH9TzgyX4zCA3dPJBqNG%2BflIPgPwCw%2B3AcDCvBO92s4u4W5mF2%2BIWoKzwiH1UEfUdoYTIYBetfhjdZrpJXqwzZibisllN6RaIqLHkzBNlNALG9eBI2I7fXcy8LPPyjXowC4hEsjdph9y56Z8%2Bzyo4%2B9cAmbKq3zNnEgmR8rWiXJnIuGZVMnt4ZndDzLInICUV08DVDmuvx4szstaj41dQUYtxcI53uOP8600Q9NPbGzRvWqafRue5iVQ865ard5W3gvVcM5LAt0TziKczBSCjkEi4Ce%2FakgeIjluA3Ibwdz8YSBqzZ8T0hd2XLPlcggZ67P5jM0dZTbfxWHO0RQ0MAXxBSiZRD%2F%2FJyNun9qFjZXazuaHK9HCPHLUl7cG%2BvLMMqfoMQGOqUBeUhjacs166xYKjTBXXDpPB0f0XzGS1BSagLMMyZDj20btkvj2s5nHRJw4cPT9CoLXVdlJu3e%2B1c9iTdH79jhFiEGZVes6MHeY00TJJYfzYRvcXMcs5I8JWDuixHwSDpq6VCl2EOXPhNlAs9PsmoOLYHG1kIw8%2FCi45p67DUWf5VUAMlNFMakdZ2xWdGUIk6mrCHHVLAYwpdl6AY4OP3C5bcuEI0K&X-Amz-Signature=636c02baf46882c4710e8e93d6a0592d3cfa798a81dcea780f58f9b118782206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
