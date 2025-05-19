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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLVVGCX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDswywoyNzWznpwnfxaGhSGoDv8wlNeA6dobXWZLXPfygIgN0cpPId0GMW8%2FnLAdm1uDQ%2BdCb6EzqX5ptRcNcgr3DMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkM%2FY39kpc2HGVDiSrcA9vSmd%2B7ZGoHr4nQvJmnZkV3W%2B%2Fb1%2FXgnkR0ATQMq%2B3xctClLtdpWAUiR%2Fissj3He1%2B9YsCDMNsgWgQBE9pytLaqI4BpY%2FGVXqGBm%2FNOUAQDON9YzNJ6FpystUmmqNzGEZldGtmmYhg5DQUnbn9cTaf%2B%2FznZIs9qv1VN%2BTsqcsZye5UAuOWm2clemmmyWms%2BWtu0UhyB8H6xiZP1X9K3NPbwcnmIqV2czbnRbx7NkGChqdZuI%2FTT9ErWCYN74SuaYLG9GvfS0jgGTdbjKM%2BFAa9D6LL3B9wmLt4oapDT7NUI0YT%2FfF6jGx1QvfDN66rYX5XxQ1wWvBv7BQaMBsdbOKMZ5V9t4EmdpsQgQz0A3DZXbRrqoojND71WjtJ721Efmvs6oltj%2FarukT%2FyatLQD8MaqWz%2FCkGGxGVFMFak6DiesJiBL4v7HHY2ypFwmDjekEhWI9052MAXf91FMbo%2FQi4coDaoyoDFS%2BeSkM6%2Fx8mnTBDckl0IuMFzx%2FeWDh2S8ETSH1xhOO40bM3j5g%2Bf6xJDaPzJdsI1dbLfKvnqPqCRG2V%2FdQx2gsTuYe%2F1clDnIp0gneQWXu9YLrmIYC75xTCyqggsS64g%2FbQ7gmw0QvgNgZuXO%2F%2FUAI1jLZmDMNfsqcEGOqUBi6K%2FYy9hV7kPY1yauoXh%2Bj8c%2BU854U0y%2BLcxyKXjbn8F60%2BfQB4s5LoRjIJjT3Jv5C2%2F5jTR7Cc9NYfTtT%2FDZLs2iTkg7Hf8t1dsKj2dXSgL1HshSCfl2Yy0t54Off4k1b1BjvfbP%2Bjo%2BkYaQdpkBjJq1unUiWUYQkgiVAbHIhhHkSslUrGv637rGbgfyH5g8X%2BsL0qoEL6fxtIYttadQo57HlyG&X-Amz-Signature=9983edd2a74cce89db790e1a12e5bb92d7ab953159b0832500626096de385f85&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLVVGCX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDswywoyNzWznpwnfxaGhSGoDv8wlNeA6dobXWZLXPfygIgN0cpPId0GMW8%2FnLAdm1uDQ%2BdCb6EzqX5ptRcNcgr3DMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkM%2FY39kpc2HGVDiSrcA9vSmd%2B7ZGoHr4nQvJmnZkV3W%2B%2Fb1%2FXgnkR0ATQMq%2B3xctClLtdpWAUiR%2Fissj3He1%2B9YsCDMNsgWgQBE9pytLaqI4BpY%2FGVXqGBm%2FNOUAQDON9YzNJ6FpystUmmqNzGEZldGtmmYhg5DQUnbn9cTaf%2B%2FznZIs9qv1VN%2BTsqcsZye5UAuOWm2clemmmyWms%2BWtu0UhyB8H6xiZP1X9K3NPbwcnmIqV2czbnRbx7NkGChqdZuI%2FTT9ErWCYN74SuaYLG9GvfS0jgGTdbjKM%2BFAa9D6LL3B9wmLt4oapDT7NUI0YT%2FfF6jGx1QvfDN66rYX5XxQ1wWvBv7BQaMBsdbOKMZ5V9t4EmdpsQgQz0A3DZXbRrqoojND71WjtJ721Efmvs6oltj%2FarukT%2FyatLQD8MaqWz%2FCkGGxGVFMFak6DiesJiBL4v7HHY2ypFwmDjekEhWI9052MAXf91FMbo%2FQi4coDaoyoDFS%2BeSkM6%2Fx8mnTBDckl0IuMFzx%2FeWDh2S8ETSH1xhOO40bM3j5g%2Bf6xJDaPzJdsI1dbLfKvnqPqCRG2V%2FdQx2gsTuYe%2F1clDnIp0gneQWXu9YLrmIYC75xTCyqggsS64g%2FbQ7gmw0QvgNgZuXO%2F%2FUAI1jLZmDMNfsqcEGOqUBi6K%2FYy9hV7kPY1yauoXh%2Bj8c%2BU854U0y%2BLcxyKXjbn8F60%2BfQB4s5LoRjIJjT3Jv5C2%2F5jTR7Cc9NYfTtT%2FDZLs2iTkg7Hf8t1dsKj2dXSgL1HshSCfl2Yy0t54Off4k1b1BjvfbP%2Bjo%2BkYaQdpkBjJq1unUiWUYQkgiVAbHIhhHkSslUrGv637rGbgfyH5g8X%2BsL0qoEL6fxtIYttadQo57HlyG&X-Amz-Signature=c89e9c10de80d0e16c5549c64fa658671bbc5f27bd0b4b741f222db0981b2b19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLVVGCX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDswywoyNzWznpwnfxaGhSGoDv8wlNeA6dobXWZLXPfygIgN0cpPId0GMW8%2FnLAdm1uDQ%2BdCb6EzqX5ptRcNcgr3DMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkM%2FY39kpc2HGVDiSrcA9vSmd%2B7ZGoHr4nQvJmnZkV3W%2B%2Fb1%2FXgnkR0ATQMq%2B3xctClLtdpWAUiR%2Fissj3He1%2B9YsCDMNsgWgQBE9pytLaqI4BpY%2FGVXqGBm%2FNOUAQDON9YzNJ6FpystUmmqNzGEZldGtmmYhg5DQUnbn9cTaf%2B%2FznZIs9qv1VN%2BTsqcsZye5UAuOWm2clemmmyWms%2BWtu0UhyB8H6xiZP1X9K3NPbwcnmIqV2czbnRbx7NkGChqdZuI%2FTT9ErWCYN74SuaYLG9GvfS0jgGTdbjKM%2BFAa9D6LL3B9wmLt4oapDT7NUI0YT%2FfF6jGx1QvfDN66rYX5XxQ1wWvBv7BQaMBsdbOKMZ5V9t4EmdpsQgQz0A3DZXbRrqoojND71WjtJ721Efmvs6oltj%2FarukT%2FyatLQD8MaqWz%2FCkGGxGVFMFak6DiesJiBL4v7HHY2ypFwmDjekEhWI9052MAXf91FMbo%2FQi4coDaoyoDFS%2BeSkM6%2Fx8mnTBDckl0IuMFzx%2FeWDh2S8ETSH1xhOO40bM3j5g%2Bf6xJDaPzJdsI1dbLfKvnqPqCRG2V%2FdQx2gsTuYe%2F1clDnIp0gneQWXu9YLrmIYC75xTCyqggsS64g%2FbQ7gmw0QvgNgZuXO%2F%2FUAI1jLZmDMNfsqcEGOqUBi6K%2FYy9hV7kPY1yauoXh%2Bj8c%2BU854U0y%2BLcxyKXjbn8F60%2BfQB4s5LoRjIJjT3Jv5C2%2F5jTR7Cc9NYfTtT%2FDZLs2iTkg7Hf8t1dsKj2dXSgL1HshSCfl2Yy0t54Off4k1b1BjvfbP%2Bjo%2BkYaQdpkBjJq1unUiWUYQkgiVAbHIhhHkSslUrGv637rGbgfyH5g8X%2BsL0qoEL6fxtIYttadQo57HlyG&X-Amz-Signature=88434abd8c285a4fa7f0e1679ac750949b019062a84d846100d54750216f491c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMPIACL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjfIhSrAqbpUa5M9F9Q4YDQIqqp%2FrFnFZ1YdDva276DAIgRA1CY3WivDfnDMhItNF8T5mdT10HArKKjCzfZTs5NKcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOThKgDGje%2FQeoE0xircAxgBoGnuqUTe7kwD4xJQaE8jPq1ahtfHm%2BxgIHH4rx7vp4edkByEe9CHV%2BcIhV0YFTPm4atxJ1IaIKyPHUNaRG%2FS0w5frAPa0sI3%2BHEWAF7FdPsU4JJwRW3f9hhYiIdKUKGLOjDUlCoLN21ZyIThn3Whi7potYla4q0K9yXu1Af9OtFTf0bw9ypuCi5s1giGreRtIRbkcLrNJz3%2FxcllHr6Cw8fX1Y6mzFhqfx5G4DW4JJMeGO%2BrH523aMTb5OrM0ldZzTIIUEX8nbJrACttNWGYVaIuuho5jp58d4jpm5RpuCyL5ZamP%2B7xNsJVVv%2FsQTR6Zj4H%2FgafItX9L%2B6jd9n3ya%2BrlU8yjm86qVYUcLBEE7YnBHTPeZsn0%2BCr2Yy4RrwmIhTELROOGC6JkNJuIPatYhYVBKvuHqGZ4ca1tG7MEOzWc43maBYSgD4a%2Ba0WDmsON3z07Yv0Dt2mlObcsVA9Jk%2FVPZId%2BsS7GrrxJcqogACTmJpRCuus8U1iSarMrPZRz%2BfFUfAoyXA%2FId20hIk40d7WT9M2GpwIgcgJ9A0L63gqcsyJ2RUFGC7QnqzsZx1oPx1AusdDXcwAceiTEeIUjLvi%2FLt3cbIUvVS4jLWq8qhZKNdpay0A2tbZMMDsqcEGOqUBLnHAT5lYYkj%2Bk946HWw31UjxPR7YiDkOujq8sloGY1lfyaVu7VT89luera9dMZYtvgV4uEahHhYqhz4HqIiGMYbC%2Fb42CH8C834Le5merhHT%2FVwtcloD50AoQyZtK1H%2ByDwQoARGSJUgsOZBcnFwWab7YFwbjhW9%2BUGphRU%2BV%2FzxvfSsPtklUcEtUNdLA0hdZ89TSwqt4qwL8lIP6UC45PdghaEv&X-Amz-Signature=1c94d82b44158316d1f64e147c0bc15035ad8f8e3d98414bbe6f1be471ac423d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEDF52K4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuy7CqYbhXTIuk7UMqUQtG5fQ7CKPrt2zCILBYhwx2lgIhAMdFsYCXldMqp7IlqGrP0szDSCWo55AjpTBjdTv%2Bc5MLKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwro6ACdcbbtLgQsE0q3AM71Qddqi12ft6akRpBUr5%2BH8IX2%2FNpNHkBFA79MZWn5C95CfdnHvAb2zkzgNGoZeT%2BVRLvjIQjzq%2FImuzsiSKTRgf0Uect5ZXMb%2BGlBeVH4hZGH2Q7B3BnvaoxXCZ4j7X0iyYuUiNgWYM8sV70jlH8TwGsgZFunEEqrBrfk1IJj2dRRokjAR3gS5eefdkVXIT6%2B%2B4DOfe7PVqlfPWmFtyBuWOMZs5uGvz%2FWWskacm%2FqwfaO4sLOFR7ftlvQrRYtsbi5XHfXeQGEF7aaHrdYVsjgoXPL%2BH1bSkzTaNH50TfmWuS6eUYfOHrhuAZBS69%2BUUF4Lg6LZaufX0g%2BaYgiVDE7BzgRfLkC8yGp4r9YFhoAIVBpO9uWHn8VaIU2L0uD4AT0Dzeo9Dd3D85SMKw3a9BwwCvNj9iWSwPEUIAHkxEwGwGKaegUYKsHlrAhjeXIHV7%2BIvyJcBA5MXs9MqX4X%2F6QSxXr3JiMmctCbQPJ4RxQhXaZtvEahtL47sZsiEa35E66gJ9OJowIko3QeHU7JUy4XyPml%2FICU2HYqtdyEBvxBdCVDpf7xv7vUUKE0W%2F63RBqRAyFS2VThX5YCeQ%2BlgemV4ugnpifmtJ7V6YJ%2F6nzdOgDPfjEm4JBQyhUzCSgqrBBjqkAdEjRUU20PEJaCEfcpFkvBEvhog9fijQllSHB0xCXdqkKxG1rNP9OoPHfJo7KQWP3e73hLZW0ho3UHyHxFJaszeawYcdZQpQIpnWHrpnAdxo3pQPZhbxgxmqzDNL196YxhrpU7NDJ%2FPUpZ%2BgImy5128h%2FI4hDSmsw10Y%2FzvDW4JpuZ4WVjiI3sXZz1Rg4pdMn8rQ4BIyusC3KJVsIY152zd7DZwh&X-Amz-Signature=e9569539ffd0cdabfe2d7cbc989d12ea82cea097c15212804ee82483e96c1727&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLVVGCX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDswywoyNzWznpwnfxaGhSGoDv8wlNeA6dobXWZLXPfygIgN0cpPId0GMW8%2FnLAdm1uDQ%2BdCb6EzqX5ptRcNcgr3DMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkM%2FY39kpc2HGVDiSrcA9vSmd%2B7ZGoHr4nQvJmnZkV3W%2B%2Fb1%2FXgnkR0ATQMq%2B3xctClLtdpWAUiR%2Fissj3He1%2B9YsCDMNsgWgQBE9pytLaqI4BpY%2FGVXqGBm%2FNOUAQDON9YzNJ6FpystUmmqNzGEZldGtmmYhg5DQUnbn9cTaf%2B%2FznZIs9qv1VN%2BTsqcsZye5UAuOWm2clemmmyWms%2BWtu0UhyB8H6xiZP1X9K3NPbwcnmIqV2czbnRbx7NkGChqdZuI%2FTT9ErWCYN74SuaYLG9GvfS0jgGTdbjKM%2BFAa9D6LL3B9wmLt4oapDT7NUI0YT%2FfF6jGx1QvfDN66rYX5XxQ1wWvBv7BQaMBsdbOKMZ5V9t4EmdpsQgQz0A3DZXbRrqoojND71WjtJ721Efmvs6oltj%2FarukT%2FyatLQD8MaqWz%2FCkGGxGVFMFak6DiesJiBL4v7HHY2ypFwmDjekEhWI9052MAXf91FMbo%2FQi4coDaoyoDFS%2BeSkM6%2Fx8mnTBDckl0IuMFzx%2FeWDh2S8ETSH1xhOO40bM3j5g%2Bf6xJDaPzJdsI1dbLfKvnqPqCRG2V%2FdQx2gsTuYe%2F1clDnIp0gneQWXu9YLrmIYC75xTCyqggsS64g%2FbQ7gmw0QvgNgZuXO%2F%2FUAI1jLZmDMNfsqcEGOqUBi6K%2FYy9hV7kPY1yauoXh%2Bj8c%2BU854U0y%2BLcxyKXjbn8F60%2BfQB4s5LoRjIJjT3Jv5C2%2F5jTR7Cc9NYfTtT%2FDZLs2iTkg7Hf8t1dsKj2dXSgL1HshSCfl2Yy0t54Off4k1b1BjvfbP%2Bjo%2BkYaQdpkBjJq1unUiWUYQkgiVAbHIhhHkSslUrGv637rGbgfyH5g8X%2BsL0qoEL6fxtIYttadQo57HlyG&X-Amz-Signature=fc4ec6a9517c94a4efe8b42d83fbd07505db718985ecfbcb66209c08aeaf7b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
