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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ7JUEL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCh1LZT9VttmyRzLJAYTTv4%2B97%2FyJRRyLKRbgXu%2B2FvtAIhAMZKt0dz%2FDa6BAmxFEJ5aQXv4OFwyQ3gbiKCTZsxR%2Fo4Kv8DCEQQABoMNjM3NDIzMTgzODA1IgylJUS9yd5PRZGfgfUq3AMK6FJZT25jAICQpcW9zotqRi%2BN%2Bwg%2BYQkKGw52DwlQAV%2FmjPEIJV58mibG3vmLUFAe75V8bgf%2F1OHEjXMNi3dLuCsEKJiWWkiJGR%2FD7%2FxBRxpEg8fbo0Tr6RvI4p46zaM9WWZHvBs%2FpcKofazhR48Fxcje8iM5iAB8RzuFJsiuKZ%2FxNyZF7xvUYwo86%2FOAIW42Cve2%2Bw47%2BAgYl9L93%2F%2BsW70%2FS5uNnk8F9zo9UPqovNaJizfT0hp%2BiNii0xQI1RAIY4pdO5oP6kodQnsvzxe5foSF9613VZtccViSCFqjuHBao1Fz0gr4%2BfhH0xIS0wuIzL5Tnk8aMKQ%2B4dfznGIPO3Q4MR6umOyuwmsviBzImAFyo9kMy0eiOlNpLlyRGQZKZ8JXQGxsmuwY5RutKM0sTBjZsYP3AoN5BbKyqgR99UcJl3%2FGKHRLqaFOGBBHGe2COjo5IiHGBndOcWbp9v6%2F%2F21HfmSuYofqfr9VFqiX8HxqmD9Y%2F%2Fnsipvn2o3YdYGafLeJnD%2F%2F1m354wMRBLoS%2B0JdTl2ZCbTpzivY9lO3HhwWWrnhBa76oufX3pIRXwp7PXPu5w2MIUsOF4d6Rve54i21qjA%2BvzPChYE6GnWSCZnpR18hYQp6qvXgmTDJx7rCBjqkAS6MxtWzl62V6sKJ%2FsiNuNNfphWP9NuQAiHPaCs5M7NeKzJEga83Nh%2Fgv1KaLGM75UkIupt6O8YaXFOIw5m%2FatV7DBEnQRdHlwjiyGmG5JjQePlYR%2BFF2j62Y90aNy7ixdIJHTgrNcZSZVdlUUDH7qwfUSgArLejUUy6VAhSiQcp4O82HynqK901QphRysAopB2WiU6fkULPsfVAH5x%2B%2Fh%2FWkRdp&X-Amz-Signature=cb45624e0186aaa0156b0867b1e34c0d9c560a398024d1d3f7492eb605208215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ7JUEL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCh1LZT9VttmyRzLJAYTTv4%2B97%2FyJRRyLKRbgXu%2B2FvtAIhAMZKt0dz%2FDa6BAmxFEJ5aQXv4OFwyQ3gbiKCTZsxR%2Fo4Kv8DCEQQABoMNjM3NDIzMTgzODA1IgylJUS9yd5PRZGfgfUq3AMK6FJZT25jAICQpcW9zotqRi%2BN%2Bwg%2BYQkKGw52DwlQAV%2FmjPEIJV58mibG3vmLUFAe75V8bgf%2F1OHEjXMNi3dLuCsEKJiWWkiJGR%2FD7%2FxBRxpEg8fbo0Tr6RvI4p46zaM9WWZHvBs%2FpcKofazhR48Fxcje8iM5iAB8RzuFJsiuKZ%2FxNyZF7xvUYwo86%2FOAIW42Cve2%2Bw47%2BAgYl9L93%2F%2BsW70%2FS5uNnk8F9zo9UPqovNaJizfT0hp%2BiNii0xQI1RAIY4pdO5oP6kodQnsvzxe5foSF9613VZtccViSCFqjuHBao1Fz0gr4%2BfhH0xIS0wuIzL5Tnk8aMKQ%2B4dfznGIPO3Q4MR6umOyuwmsviBzImAFyo9kMy0eiOlNpLlyRGQZKZ8JXQGxsmuwY5RutKM0sTBjZsYP3AoN5BbKyqgR99UcJl3%2FGKHRLqaFOGBBHGe2COjo5IiHGBndOcWbp9v6%2F%2F21HfmSuYofqfr9VFqiX8HxqmD9Y%2F%2Fnsipvn2o3YdYGafLeJnD%2F%2F1m354wMRBLoS%2B0JdTl2ZCbTpzivY9lO3HhwWWrnhBa76oufX3pIRXwp7PXPu5w2MIUsOF4d6Rve54i21qjA%2BvzPChYE6GnWSCZnpR18hYQp6qvXgmTDJx7rCBjqkAS6MxtWzl62V6sKJ%2FsiNuNNfphWP9NuQAiHPaCs5M7NeKzJEga83Nh%2Fgv1KaLGM75UkIupt6O8YaXFOIw5m%2FatV7DBEnQRdHlwjiyGmG5JjQePlYR%2BFF2j62Y90aNy7ixdIJHTgrNcZSZVdlUUDH7qwfUSgArLejUUy6VAhSiQcp4O82HynqK901QphRysAopB2WiU6fkULPsfVAH5x%2B%2Fh%2FWkRdp&X-Amz-Signature=f5151132da8794df18918881feb31503e046e81997740f9b99af4cac862b00a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ7JUEL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCh1LZT9VttmyRzLJAYTTv4%2B97%2FyJRRyLKRbgXu%2B2FvtAIhAMZKt0dz%2FDa6BAmxFEJ5aQXv4OFwyQ3gbiKCTZsxR%2Fo4Kv8DCEQQABoMNjM3NDIzMTgzODA1IgylJUS9yd5PRZGfgfUq3AMK6FJZT25jAICQpcW9zotqRi%2BN%2Bwg%2BYQkKGw52DwlQAV%2FmjPEIJV58mibG3vmLUFAe75V8bgf%2F1OHEjXMNi3dLuCsEKJiWWkiJGR%2FD7%2FxBRxpEg8fbo0Tr6RvI4p46zaM9WWZHvBs%2FpcKofazhR48Fxcje8iM5iAB8RzuFJsiuKZ%2FxNyZF7xvUYwo86%2FOAIW42Cve2%2Bw47%2BAgYl9L93%2F%2BsW70%2FS5uNnk8F9zo9UPqovNaJizfT0hp%2BiNii0xQI1RAIY4pdO5oP6kodQnsvzxe5foSF9613VZtccViSCFqjuHBao1Fz0gr4%2BfhH0xIS0wuIzL5Tnk8aMKQ%2B4dfznGIPO3Q4MR6umOyuwmsviBzImAFyo9kMy0eiOlNpLlyRGQZKZ8JXQGxsmuwY5RutKM0sTBjZsYP3AoN5BbKyqgR99UcJl3%2FGKHRLqaFOGBBHGe2COjo5IiHGBndOcWbp9v6%2F%2F21HfmSuYofqfr9VFqiX8HxqmD9Y%2F%2Fnsipvn2o3YdYGafLeJnD%2F%2F1m354wMRBLoS%2B0JdTl2ZCbTpzivY9lO3HhwWWrnhBa76oufX3pIRXwp7PXPu5w2MIUsOF4d6Rve54i21qjA%2BvzPChYE6GnWSCZnpR18hYQp6qvXgmTDJx7rCBjqkAS6MxtWzl62V6sKJ%2FsiNuNNfphWP9NuQAiHPaCs5M7NeKzJEga83Nh%2Fgv1KaLGM75UkIupt6O8YaXFOIw5m%2FatV7DBEnQRdHlwjiyGmG5JjQePlYR%2BFF2j62Y90aNy7ixdIJHTgrNcZSZVdlUUDH7qwfUSgArLejUUy6VAhSiQcp4O82HynqK901QphRysAopB2WiU6fkULPsfVAH5x%2B%2Fh%2FWkRdp&X-Amz-Signature=6d4b5b8b71175958d488ff7a953b8aec9e27079792416a0cf8cf350ba29a4aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6XSQWE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIALRpy67wD%2BGRXdW55McoM0wHr%2BTK%2FVhyZdMobxT9GHoAiB5RVs0Y4SQV2IPIAuaO0CVnYDxTWp8yjvA4J6XMup35ir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLKaNWHquufRsoPFEKtwDXfmqEBpgPB43IAxiEkqGYuJUzW1VDN4fb1uHEl4%2FWSkXAqEi6REWIf6Vf%2FYF0LVyV8pB8mvv1lNHk4o5yoTbI6sbgmfov8fznO2fhmrk%2BxJ1HP29ZgfJvI8WauAQOFewIXfu6Kyyl8QEQ6JEOZ8u%2BEgUX9Nh2e5Xo7x4aGudeTA%2FGBkwHFY78pqj%2FkuUajS1WfjpVejKpobK9OKekdCnHg2isLZvrz6nEEYf7bNzT9KfzDP%2FBAwx2NzMBg33QEkdJiCPhWtWTI1W1QBlhDy3aUJphNz25PJXZQdWlbc%2B3tK4StXYAGizi2JKuCAPgNHz%2B6Rq9BGxH4edO3Ns7ODKBlnrXuxBCiJq5pcwwAsVpmdcyAqXFwhkpE67faZW%2F3A53GyOrEVaj7bT8sdowKDZXN%2Bvc3Ka2wmU9Uq2BExd%2BmfplMu9jcHG%2Fe1T4KJExdsmyyowkUW09ptxU2Wae%2BjuQWyVrMulRTKd2ulH4MkQz1gkvoAhAcXFunsLuSJrFgWMWBHQL%2FW8XQymy2ROtHC%2B0q10UFMgwLeH8X0vd%2FzP0ZRXyEGFFjU7OhsQVXiwcweB3cxPNKbbBaAHZDGTFfUO%2FKfYeTWsOOrOfnir1WsB1w%2FwyNiFFn4jeG83AxMwrJu7wgY6pgHykNIpBOv0ITynby93IHgqUv4yG0F2TUKeuLPfWntoEwwl5IfodgyremC6lABPwX4KlsBnM84Myfe3v0x9V%2BvtVk6zEVB%2BNDdCyk18z2jnoQiPBX6vFg79efHAqBU5eX275ThTlmdiGtRg9CTAw5tLVkvmo0Y%2BYUd2mhX80ZCg3W57P9wT%2FUaUv68uCsfIWDmQ7pInVprkE8JCQz5W%2BlKmFhaC74Bi&X-Amz-Signature=2c079ad6958e77f526ec0c49b693f53fdce1da2e71468697131bacbb2978af18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77GHES5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD%2B%2Fiol8mwkOBIPI%2FuW5%2BQrycoVMNC8tMp02f7P0OBsIwIgaG2khAyPG0Z4cMA75%2BP%2BkT79EkXoIm0cC%2FAZ5LSWd5cq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDB2SyqsR8bkOYvdQDSrcA4mYF1dYY68miK5YeF81eOxDI6NeO3utv8y0RxaLK5%2FNJ2Nj6SjMrt9CTw43CLfs38i6ijD7ZP7tbzTOExBTWjFB%2BTH5CfXG7F11DpxmTnHLhH1MXNPpvLW4wWL%2FmXwOOES%2BIn4sgxdDhtXB52izM2U5RPz3saTW8OAmA6LihLY07JXiFa0lKOKqdHigqUxjQTXlJy%2FYvvkbse%2FpDt70g7n9Bbk0FgqEJeYsI1xRRpVYYnp9tTv6w1dhjaV2ct3%2BAKSmxLhRU2Orp0tD0o%2Fn6sqo6pkh6EIv2BNFvXDJcnQKy%2F7mr1D5U6b4dOGW6XWcIjvssOBrpli23p4oFqf%2BrXZkph0KXv2o49t9gBb7wO561vbr4VY3ae%2FdHuBpRY4oMwhirxqESRBtt%2FpvstvnCyS13kEwmKP1crb782jPH9YvNdTOCSHDbXmuXs3tdlCWaEusXP7jG0M%2BKBNOfR9xvXB2%2BDZ3n9M0J3XncKM3BLJZ9kfR7Td1vHGSl3x8C5H1tcrEH9tM9ksoSmQHSqLYH8gI6jV2QGNgb1Yb4l2AqxaRANw6m9op5CS1WtHrYRcKVMTJ4xFFcfpuC4EZMXw8wjQd8lrPVtZY9jsxXqJFscm50KNA6NvSu%2FgSNxKwMPyiusIGOqUBEix6eVJcRQqEwnPDYczGVNzw%2FPHLLMsmuVhqM6vgr8G8dkKJbOirFwkALkoTIL1a%2FbOwgegWsk%2Bk3RrufE03z%2B9%2FtwnJ2hgWGSe7AfunL28W93fZQ3cyYbWEVClQWjsFfjsy0G4YD%2B3vRrUBbIBXcEvMC3WZj87b9PDHwOW%2BTdfaKqA3cuD1StUHMl1ZcPmGqfLY4dNChI3BfsqzStgTFQxDNPhG&X-Amz-Signature=f4437643ecd77be04af21f6713a409b5f0fe6c1db41f5f844612c3191a022d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ7JUEL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCh1LZT9VttmyRzLJAYTTv4%2B97%2FyJRRyLKRbgXu%2B2FvtAIhAMZKt0dz%2FDa6BAmxFEJ5aQXv4OFwyQ3gbiKCTZsxR%2Fo4Kv8DCEQQABoMNjM3NDIzMTgzODA1IgylJUS9yd5PRZGfgfUq3AMK6FJZT25jAICQpcW9zotqRi%2BN%2Bwg%2BYQkKGw52DwlQAV%2FmjPEIJV58mibG3vmLUFAe75V8bgf%2F1OHEjXMNi3dLuCsEKJiWWkiJGR%2FD7%2FxBRxpEg8fbo0Tr6RvI4p46zaM9WWZHvBs%2FpcKofazhR48Fxcje8iM5iAB8RzuFJsiuKZ%2FxNyZF7xvUYwo86%2FOAIW42Cve2%2Bw47%2BAgYl9L93%2F%2BsW70%2FS5uNnk8F9zo9UPqovNaJizfT0hp%2BiNii0xQI1RAIY4pdO5oP6kodQnsvzxe5foSF9613VZtccViSCFqjuHBao1Fz0gr4%2BfhH0xIS0wuIzL5Tnk8aMKQ%2B4dfznGIPO3Q4MR6umOyuwmsviBzImAFyo9kMy0eiOlNpLlyRGQZKZ8JXQGxsmuwY5RutKM0sTBjZsYP3AoN5BbKyqgR99UcJl3%2FGKHRLqaFOGBBHGe2COjo5IiHGBndOcWbp9v6%2F%2F21HfmSuYofqfr9VFqiX8HxqmD9Y%2F%2Fnsipvn2o3YdYGafLeJnD%2F%2F1m354wMRBLoS%2B0JdTl2ZCbTpzivY9lO3HhwWWrnhBa76oufX3pIRXwp7PXPu5w2MIUsOF4d6Rve54i21qjA%2BvzPChYE6GnWSCZnpR18hYQp6qvXgmTDJx7rCBjqkAS6MxtWzl62V6sKJ%2FsiNuNNfphWP9NuQAiHPaCs5M7NeKzJEga83Nh%2Fgv1KaLGM75UkIupt6O8YaXFOIw5m%2FatV7DBEnQRdHlwjiyGmG5JjQePlYR%2BFF2j62Y90aNy7ixdIJHTgrNcZSZVdlUUDH7qwfUSgArLejUUy6VAhSiQcp4O82HynqK901QphRysAopB2WiU6fkULPsfVAH5x%2B%2Fh%2FWkRdp&X-Amz-Signature=512ea0ed8bc0ba975f3012e005959a06d3901a5bd85f2f0fd670ef12c26bfce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
