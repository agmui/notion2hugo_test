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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT73KKS5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArv68AYp%2BSHJMaw%2FLMz9YfZXt5xvLTd58ihZJ3jsN8CAiAs7OI7KJhznFwl%2Fpxi6WJEwp9o52DIMwx4o%2Brzo%2FtpWSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8exGRYfFXzJHmJ0KtwDfBIQRH58%2BOTVaBXG6CX3GstkBFLtIPZgltFpJI4XVLtLrN%2Fc7vB9PmB9XH136Fs8q3d1D4TAqjZJN0AFm5s2MCRbGWIWHDFSHj6HqIlQeVJdp9GUKoIHJuMmLeXgfb4pjXnsLWY2xm08emMOZblv7EnvL%2FwsItqVCvhSyE4NMBGRMpoIePteGvqxbM05yKu3IHD9ZchPLOr%2B7qnp%2F%2FXiTpruh%2BCiSrccyztpNWvGXxLe3yS7SPZTx%2B8lPBLLyvxdvqUmfoKAEcMzJ5iIsiCyfWu%2FxP2ZCMitmlnamoblCJtgG3R2qSRWVhIiSeVGLOghPid7A2w7wXo4DBxgnAK6jsD%2BLPKEESXsNDBweh%2F1jbCWKbfKvVcEeCOg04ZUKbf1U6qc0Dz7kbsY4MrcU%2BfoY8LAW4jmn1IawHpnV2LK%2F3CkL2MODQ2NIMZUrvgoGOTMojqTTeoPj21yg7jkAzB6Edh6Y4vL%2F%2F3ocGLIP2OYokasM9AaEkYFKzqE5aTkY4Wu%2BfwyFuqgfBYbneU6mKFeyOJvp%2BapPH%2Bu8sbp3EbGhgtrOBzZ9tUQ6olT%2FEZmnYBFMGWIU8%2FVZmQxFd1hn8HwnSFvt1bb%2F2uOj%2BftGGcuXoCPCGXu3RNk9uCwy3gw1YD1wwY6pgHhkwC1uMQ0e68yixa%2Bry024Ac4ToLaDUgkTeWgI87yZp5mjYR0joX2RPNFyIMCWyh0RQKz0kXF6GE4nZDZ8eT4uIMKtpSGcoMijLu9NFy05xsW0dCVKfK2eqoVvxjgFggSTFlyabJmogM%2BrstrPJiQWZhWKVqmtNSbMG%2FQvOoynMxtPS%2BgDAqq2mEUwRGAFSyB2aoKQqWE5k1d4XYljJyQgH9gNOnC&X-Amz-Signature=d7baa3f37e42aef2201ca0a2e8a447c8570640f7bb376355ff26a782aab61da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT73KKS5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArv68AYp%2BSHJMaw%2FLMz9YfZXt5xvLTd58ihZJ3jsN8CAiAs7OI7KJhznFwl%2Fpxi6WJEwp9o52DIMwx4o%2Brzo%2FtpWSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8exGRYfFXzJHmJ0KtwDfBIQRH58%2BOTVaBXG6CX3GstkBFLtIPZgltFpJI4XVLtLrN%2Fc7vB9PmB9XH136Fs8q3d1D4TAqjZJN0AFm5s2MCRbGWIWHDFSHj6HqIlQeVJdp9GUKoIHJuMmLeXgfb4pjXnsLWY2xm08emMOZblv7EnvL%2FwsItqVCvhSyE4NMBGRMpoIePteGvqxbM05yKu3IHD9ZchPLOr%2B7qnp%2F%2FXiTpruh%2BCiSrccyztpNWvGXxLe3yS7SPZTx%2B8lPBLLyvxdvqUmfoKAEcMzJ5iIsiCyfWu%2FxP2ZCMitmlnamoblCJtgG3R2qSRWVhIiSeVGLOghPid7A2w7wXo4DBxgnAK6jsD%2BLPKEESXsNDBweh%2F1jbCWKbfKvVcEeCOg04ZUKbf1U6qc0Dz7kbsY4MrcU%2BfoY8LAW4jmn1IawHpnV2LK%2F3CkL2MODQ2NIMZUrvgoGOTMojqTTeoPj21yg7jkAzB6Edh6Y4vL%2F%2F3ocGLIP2OYokasM9AaEkYFKzqE5aTkY4Wu%2BfwyFuqgfBYbneU6mKFeyOJvp%2BapPH%2Bu8sbp3EbGhgtrOBzZ9tUQ6olT%2FEZmnYBFMGWIU8%2FVZmQxFd1hn8HwnSFvt1bb%2F2uOj%2BftGGcuXoCPCGXu3RNk9uCwy3gw1YD1wwY6pgHhkwC1uMQ0e68yixa%2Bry024Ac4ToLaDUgkTeWgI87yZp5mjYR0joX2RPNFyIMCWyh0RQKz0kXF6GE4nZDZ8eT4uIMKtpSGcoMijLu9NFy05xsW0dCVKfK2eqoVvxjgFggSTFlyabJmogM%2BrstrPJiQWZhWKVqmtNSbMG%2FQvOoynMxtPS%2BgDAqq2mEUwRGAFSyB2aoKQqWE5k1d4XYljJyQgH9gNOnC&X-Amz-Signature=91842cfbe255527b7987357ce379f845b829f499f9fe5476affc144b1c3c8e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT73KKS5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArv68AYp%2BSHJMaw%2FLMz9YfZXt5xvLTd58ihZJ3jsN8CAiAs7OI7KJhznFwl%2Fpxi6WJEwp9o52DIMwx4o%2Brzo%2FtpWSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8exGRYfFXzJHmJ0KtwDfBIQRH58%2BOTVaBXG6CX3GstkBFLtIPZgltFpJI4XVLtLrN%2Fc7vB9PmB9XH136Fs8q3d1D4TAqjZJN0AFm5s2MCRbGWIWHDFSHj6HqIlQeVJdp9GUKoIHJuMmLeXgfb4pjXnsLWY2xm08emMOZblv7EnvL%2FwsItqVCvhSyE4NMBGRMpoIePteGvqxbM05yKu3IHD9ZchPLOr%2B7qnp%2F%2FXiTpruh%2BCiSrccyztpNWvGXxLe3yS7SPZTx%2B8lPBLLyvxdvqUmfoKAEcMzJ5iIsiCyfWu%2FxP2ZCMitmlnamoblCJtgG3R2qSRWVhIiSeVGLOghPid7A2w7wXo4DBxgnAK6jsD%2BLPKEESXsNDBweh%2F1jbCWKbfKvVcEeCOg04ZUKbf1U6qc0Dz7kbsY4MrcU%2BfoY8LAW4jmn1IawHpnV2LK%2F3CkL2MODQ2NIMZUrvgoGOTMojqTTeoPj21yg7jkAzB6Edh6Y4vL%2F%2F3ocGLIP2OYokasM9AaEkYFKzqE5aTkY4Wu%2BfwyFuqgfBYbneU6mKFeyOJvp%2BapPH%2Bu8sbp3EbGhgtrOBzZ9tUQ6olT%2FEZmnYBFMGWIU8%2FVZmQxFd1hn8HwnSFvt1bb%2F2uOj%2BftGGcuXoCPCGXu3RNk9uCwy3gw1YD1wwY6pgHhkwC1uMQ0e68yixa%2Bry024Ac4ToLaDUgkTeWgI87yZp5mjYR0joX2RPNFyIMCWyh0RQKz0kXF6GE4nZDZ8eT4uIMKtpSGcoMijLu9NFy05xsW0dCVKfK2eqoVvxjgFggSTFlyabJmogM%2BrstrPJiQWZhWKVqmtNSbMG%2FQvOoynMxtPS%2BgDAqq2mEUwRGAFSyB2aoKQqWE5k1d4XYljJyQgH9gNOnC&X-Amz-Signature=09433350bbad9535844036e532faa7bbb966936e981414356b505273358466b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMA6EIC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgnN6xF%2BYPQ9SeUCnFBmuJnr8YVyKLQAZd9aG7qnvWKQIhAMIreaEf7aSsE%2Boa67mFeifa%2BYUgAWMBeLIIaMtrpqtQKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLlK1M0JOsE97OihIq3ANxmxfsuumFwuzscM59v9UP3fbN5%2BYlxZQu56F3Ga2SPEaTF9nWPiaiBCgm948MgqrEKe7JRXKGU0QY4wdvdSR0BI22BjhMKKhFJxL1LpV%2BeAzsSX42vKMewL9wfvqrfu9ZSVGD1BuLMl29U4GAemENatMkoQixw6cswrUHDzjWqwKP334jd%2B%2BTDReFiT%2FY1smWgfYvpS3KozsiTGUNzY1ohxvnQWkm52sEPkccHnit%2BmaZbYN9NjMF1wASJLC4%2FUPR3VheG6Fd1hUA%2F3dz8hdF8aH9pZBrR4S2AMMGqsRRuNqrOKwJATR%2FTbDx%2FvU7jl4fA1zB%2BJt957fBV6mOTpGYLR4QgHUFpSFTtePnnLG88rl0UfmzfioAYSFlqlfATLgENTJFEbo2OIecOJ6BEYBRmKMXXJyo25vQdCQlgRJDwPQmJhrXCe%2FoCD824j2IoRZJTfxlY2fW12Ith%2F%2FcenocoPA1j2NeR5hg4zsRJ2xmjg5B4IitqgYPnkCz4UDsvu50NYO09PuOqQTU32V2GkG%2BlX7RdEBVzNk5R%2Bg5KKtctrCpCNXQEatUa2B6gLhI4QC502Y1hfopYuufYBdRsI0mhz9Yx1JxfXIv70SjluTnHLsmyc5vjAKpFM9g5DCd%2FfTDBjqkAR72iNlagtVuPjI0lJiMptW9bf4I7kULMFht6PjmMkfyHZpJ56po7pgE4%2BjNy%2BRifrptkeisUu6NGk9bl8eHxgEFCdlHnQo1W3AEpEfY1F0ald5qZoAT7rgsL0Qw2%2F2S4D3syOUTD5DNz0q006Y40tsAo%2BIfaI0dyOGqigxHySu7aAGGPKBSHZCQTWUifq3CUTcRIGoZS5jYbgeh1zH5UpKffoVG&X-Amz-Signature=8bdeae395405ac51d0dd29e02eb1cf3772b6bcefe970b2388a1c9b4eb04910c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHG3ME5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdjmk%2B0yVxgEmRrbmPQszwLPQFLsUwkrWdcqaHFy5QYAIgZMsiq%2FsxMGn7k0U4XplZVxYSF%2FPMLwXVrybrIuVp5gYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkcxl8BcksrRij2kSrcA5MBVpf32SGrcS97IpxkJWrubr5Js6cxy9jC2dtraaga%2FTQMbNZnguHejYzzn3DpwDRHOjERBPHkeCBZ5%2FKgrnN03aAQWz7SY%2Bo%2FBeMGGQK8JhEkGgVd%2BBs238ibn0e9QT9M8R5JTJuAT1zHKZ9LVnL1Z0Wcq9Y7yk7Utem%2FoMjFskQMeg5tyR%2BKVFqwjojfwGXT8k8y0uNsldvxWdSSdOHJ%2FAhQ9YrqSxCcSQwv90ITtcJL9gbnuFsJqVUrosTwj5EcNilR9BxS%2B5LP%2Fqp%2BNjjY9aiQleR7rm6Pidttvh%2BO46uRyv5t3L2EYQkj6LSzxvPIJ38eAHBwY0g348ABRnU1j%2FeeYdlK9Uxupkxml8LeUJF9w1IXLlc4UJ0z5NycrvRkcUwEaVeWcQxBY9UpQp9WN2S%2BxgaNNWTMn%2BO73krP9%2FOGDruLUk%2FkM%2FHYxF%2BRzSYsacHN44UnBqqWBoiXTmXpjXEwBLwVahfsTvwkzwXMskTT42YSIZBK4pKVB9SC2874iwKUC4PDRBWqzrP2SjwlPc2dSR0B8mE1K2z0msm3CDGuzIDpL60xpAGS1%2F0M2oGo09Xs79%2FCmyvKhv4HQNO87HVB%2BxZmwImEU%2FaT3FH5ucAIeFNaPcVhNT3EMNf49MMGOqUBfEFQ%2F2MWe%2FY5t0eIbXVprR8nbKQ6I8ifVUD3diXHHU1Du%2BOvt4kJqJ2bCGvXdzE89Z9TNdWxTDVcE9pmh0lA7D5eadJWTFfjuAy93TwzChSNVLwnCt8oYRl78JrbBtBP62l8ZQT8V9FV9eJUddkcUOlP4Tac3a7hPqfrEiZhzCv607bWvzy6TD%2FgTdi%2FnPYFn%2Bu7ydMdj%2Ftqxgnn4N5ZpE%2Btm9Tl&X-Amz-Signature=f8a4724e1c667c1e3837e5cf6d208a3312101c372c47a283e5adace3d0522450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT73KKS5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArv68AYp%2BSHJMaw%2FLMz9YfZXt5xvLTd58ihZJ3jsN8CAiAs7OI7KJhznFwl%2Fpxi6WJEwp9o52DIMwx4o%2Brzo%2FtpWSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8exGRYfFXzJHmJ0KtwDfBIQRH58%2BOTVaBXG6CX3GstkBFLtIPZgltFpJI4XVLtLrN%2Fc7vB9PmB9XH136Fs8q3d1D4TAqjZJN0AFm5s2MCRbGWIWHDFSHj6HqIlQeVJdp9GUKoIHJuMmLeXgfb4pjXnsLWY2xm08emMOZblv7EnvL%2FwsItqVCvhSyE4NMBGRMpoIePteGvqxbM05yKu3IHD9ZchPLOr%2B7qnp%2F%2FXiTpruh%2BCiSrccyztpNWvGXxLe3yS7SPZTx%2B8lPBLLyvxdvqUmfoKAEcMzJ5iIsiCyfWu%2FxP2ZCMitmlnamoblCJtgG3R2qSRWVhIiSeVGLOghPid7A2w7wXo4DBxgnAK6jsD%2BLPKEESXsNDBweh%2F1jbCWKbfKvVcEeCOg04ZUKbf1U6qc0Dz7kbsY4MrcU%2BfoY8LAW4jmn1IawHpnV2LK%2F3CkL2MODQ2NIMZUrvgoGOTMojqTTeoPj21yg7jkAzB6Edh6Y4vL%2F%2F3ocGLIP2OYokasM9AaEkYFKzqE5aTkY4Wu%2BfwyFuqgfBYbneU6mKFeyOJvp%2BapPH%2Bu8sbp3EbGhgtrOBzZ9tUQ6olT%2FEZmnYBFMGWIU8%2FVZmQxFd1hn8HwnSFvt1bb%2F2uOj%2BftGGcuXoCPCGXu3RNk9uCwy3gw1YD1wwY6pgHhkwC1uMQ0e68yixa%2Bry024Ac4ToLaDUgkTeWgI87yZp5mjYR0joX2RPNFyIMCWyh0RQKz0kXF6GE4nZDZ8eT4uIMKtpSGcoMijLu9NFy05xsW0dCVKfK2eqoVvxjgFggSTFlyabJmogM%2BrstrPJiQWZhWKVqmtNSbMG%2FQvOoynMxtPS%2BgDAqq2mEUwRGAFSyB2aoKQqWE5k1d4XYljJyQgH9gNOnC&X-Amz-Signature=cc0f49bf26722b809f91b0f2f9075b46a4f58181c80d7dd33b60b910b6df30bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
