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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3LZHPA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvi8G4flZl%2F2yrMfUfjyShlhpOYjzhKDaWu1whx1CGkwIhAOoEcLz3szS%2BWWC492lQ2KulyYQQxpD4FWnrlt2TdWj7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgxLPMj1g94UopsZc3oq3ANe3LUDN%2Bxt0nsoY%2FfKhuf4EKJ0SmkzVmnQFRC5SEvSJoIvyTpFdFwGTJH6Yr6yeeIf7ALZTWn%2Balj5pFtat8ht9sR7otRlscx3tE9f17ZyKUsabGhJ%2FWPo3cV06mjl8rPJwew9%2FHDBllQM0U8u66caCwQSuh09fPoXImJTGOJuOFtEFiMDDArOcFmiDhr5sL5IPMpNEO3NCUc3W5DeQRMyYTyh0AfLVqEfQvceWsuLQtDhI5qwyUMsNfo%2BG%2FHbzvp7JkvbJVV2yTHb%2B2GU5OkMTMZmQ9rX7QpXN5N6a35Csahnb12hMmALBL3nMtavALjGbplNfwo6Y0K1nq41EYY3amMi2r7oaRLoSPpWzd6DtWSPWFgKWBe%2FvZymRQosPbegfh3Nd8grd6DOF71bOrpLiGKl2JiPOltCeKAq2GZ1mWTXUY4x2mfoFaH%2Fwv6Tr5naFi1va%2FlTaoZkRAfLXhPmSAgxQo5MRET8nA1MaAKsDIaSP03NaxBEeY09jEP%2B7xnGVk64r0RvDxuuLCrIlYLucmxanFQ8RRN1LlMnIJFaYw9RWrGYbiDaTAe%2B2r0o3FXFoLxh4a6nINvJAYiHCJrRZmD0pTFDvw2CgIqc98Tq3O405KUh7dO9OUp%2FJjDksKa%2BBjqkAXl6AcxUJ%2FNH%2BXnSWm13%2BXAXkjNa1pZ61ZY%2BzVxFXUBx1R9mk4i%2BxlfFzBuZTB%2BFVmoFAwG8dbizDvZOV3xA%2FPfodosrT2x8ouzZjtMB9zgEI4lu0U1z7XzaVSfHjcqJPE2ovy0X37sQcCsMAnD0g3HDuXylPpUWZMejJMf1%2F7mdniukpKMTYCmN%2Fg7xw0YD1Pe8IiAGG2pe5FDoG3FiCCu4J42r&X-Amz-Signature=c69e29b33b83297d06a416b7fce5fb6e97851c55981f869a3f720bbd7c905ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3LZHPA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvi8G4flZl%2F2yrMfUfjyShlhpOYjzhKDaWu1whx1CGkwIhAOoEcLz3szS%2BWWC492lQ2KulyYQQxpD4FWnrlt2TdWj7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgxLPMj1g94UopsZc3oq3ANe3LUDN%2Bxt0nsoY%2FfKhuf4EKJ0SmkzVmnQFRC5SEvSJoIvyTpFdFwGTJH6Yr6yeeIf7ALZTWn%2Balj5pFtat8ht9sR7otRlscx3tE9f17ZyKUsabGhJ%2FWPo3cV06mjl8rPJwew9%2FHDBllQM0U8u66caCwQSuh09fPoXImJTGOJuOFtEFiMDDArOcFmiDhr5sL5IPMpNEO3NCUc3W5DeQRMyYTyh0AfLVqEfQvceWsuLQtDhI5qwyUMsNfo%2BG%2FHbzvp7JkvbJVV2yTHb%2B2GU5OkMTMZmQ9rX7QpXN5N6a35Csahnb12hMmALBL3nMtavALjGbplNfwo6Y0K1nq41EYY3amMi2r7oaRLoSPpWzd6DtWSPWFgKWBe%2FvZymRQosPbegfh3Nd8grd6DOF71bOrpLiGKl2JiPOltCeKAq2GZ1mWTXUY4x2mfoFaH%2Fwv6Tr5naFi1va%2FlTaoZkRAfLXhPmSAgxQo5MRET8nA1MaAKsDIaSP03NaxBEeY09jEP%2B7xnGVk64r0RvDxuuLCrIlYLucmxanFQ8RRN1LlMnIJFaYw9RWrGYbiDaTAe%2B2r0o3FXFoLxh4a6nINvJAYiHCJrRZmD0pTFDvw2CgIqc98Tq3O405KUh7dO9OUp%2FJjDksKa%2BBjqkAXl6AcxUJ%2FNH%2BXnSWm13%2BXAXkjNa1pZ61ZY%2BzVxFXUBx1R9mk4i%2BxlfFzBuZTB%2BFVmoFAwG8dbizDvZOV3xA%2FPfodosrT2x8ouzZjtMB9zgEI4lu0U1z7XzaVSfHjcqJPE2ovy0X37sQcCsMAnD0g3HDuXylPpUWZMejJMf1%2F7mdniukpKMTYCmN%2Fg7xw0YD1Pe8IiAGG2pe5FDoG3FiCCu4J42r&X-Amz-Signature=63db28ea60eb70fa223bede940533a4211911f5c4b9285cecf5ceb0cc525d7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFCK3X7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3Miy5ladPXBBKVLzleziCpziNknfKXBHQr%2F5eeeTtfAiAsQmxHhxhgWwDpDRkane1NyzrAG0Z4C%2B7N%2Bcinr6ayjir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BeC50k3AVquCFtVYKtwDgTVH6pR0I7S3jtb%2FUmMQJUgsWDNmFGPDBDsltNbdBrJIvpXfRUPS65G7cajW0Wb5gRH8DI%2BF6lDvyUhVhIkUnMPToi5MwrdCIYfWCdGx2rdFtEU1mFgQWR0OhxG%2BbwabfECSjuIYeCvfj7HHWq2XQ3utNj42sby2mWpJiq223l8fTzhH5B3L7o97Odg7CzVUYFcFAtFGJFJCMqx2pyZACK6TR%2FyHGRJzLl2tjRPU8kyjHJbNT3OODOE28iA8kc5farcBC1846UmjaUQT3kWyPYbtKc4vvM7mRr7J8LC2JtXym42PalBrTAcYK%2FKTt%2Fv5AF6kZbpwTA20w63CZwGGRJLxz6ucH6DIPZKQwVPhOh9cvVqlM5c2jJRUTunG6X7lFDN%2BPObJLF5c5RJBu8j5xhZgCLbNCJXftjawq36fqeXxkP36A9NPxIqn6WnyjPD%2FbyqRagFCJhsD2J68KWuQu6gOut%2FDwpT9LL5v%2F5O7cYyAbrFLyBaayK2YB456qPaNRO0fsH%2BJfszrFne2jV0hu%2FPd74JZb%2FZfb10Q9O9C469BPWFrGBwWCqTQ05qekFSwRnkSGszOlOM0GgN9ap2T9%2FT73vUZ4tzCIFmuwtpIrV4MykR1Gz3AC%2FO0clkwnrGmvgY6pgG4S4Tteaw1iMkiL6EDLDNPbs9WpdnwEgJ%2BkSrUWd7Tuz2pmD823sI7qcOAEk0TZuInpfZMAh3TqfDclA72XeYJ7a9KmZbmVqIrK%2FVYmmxP3wbj%2Fi9gW5b0hzcoKjkwZkdsEf4GHb39q7xN3Q4lJ9NP1tYlkf9eHrt4%2BKzIognuwb3bffWyGCt54PqD72y%2FYB8d74Iclr73QQI8kBzUgYDlZZpD84%2FT&X-Amz-Signature=32a601d700ee82aa4a51cb0e15484d6b401ef34577e25a9e5a11d86f4e2045d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF64RCDC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsAIZJ%2Bjl%2FTRh%2FpsmUbr7CtnziRnfcI8oEC0fvf4djpgIhAPwl9cPVhxZF3GhBLfB6YZEMSaxzd5RrVg25XofCsN0KKv8DCC4QABoMNjM3NDIzMTgzODA1Igwg92KPSfPtuTRoyYMq3ANVbmQf7oJBuOjYpN37vonnatgiw%2FrkDgDykGkZneufzQd8dI75LbBH%2FiUt%2Fcse%2FB3evwa0uufUROcf4EzeSgavDW6Ymd2cD3%2F3JrsajohKVIXAunOLhog8g%2F4Z6IyqkGD9Ylz%2BWrm2cZ3Tmr7AC0GU0SfLV%2BOVZ4xKTbY%2F%2FmE5Nyrz7O4FDvM1HTdLSdzvvd%2BcScOOSYF9wIyxzd%2FE3q4v42eGiQ4gQH%2FSuQuiSDXYPlFaaz0tQmVS%2BDu8tiIyAT2oxkm12kiVLiVEmY0%2BqicW8A3m8iFy4LdObAkFG7FOuQPT3NIwTSJWfgiF9uwz7GqDfJLlmc%2FjpRkuSR6JtUN9TQKLUV6BdqmW9p5KjFHTNGIjiGoNLh87X36sq8R05CFTtQhwm57zXqdgeSDwN3JWZmdAvBDgG853hFzNKaGpD6Zffo2MmmHcO%2B5t0H4u7kvq8NtfoPk2fVooCcMctzgIaw0qlykg46ftNqo%2FRt0zqemTdvMRyzs9P4SJ9OXXE7AB44EFX0SEgr8JSQAff2YEpXmSf63S%2FuFMdPNPd1n%2BwjRg0rch5hCEhFz6V%2F3fVL58bQ23cDq7AyqI9YeS51z1PVIPJ9wDjhM0JZR99xgeGkTohEFkI2DxGHOUeTCcsaa%2BBjqkAdORUFv8mdDguUBfGIS8X5NEwYOvbzTLCQj4642lNMbwzfCB%2BAodugd2DSlA9k62F9cURhf50R6fvu1rb2ern0eoyLQQfb%2BfHdzc7%2FDoNIvOoUf85mKGfvy%2Fefa48YVKZV3KKkagWBk%2BE3pm1BMYvKr09Mq4Gb19uIXkcn0fNx65dxZAqpJfYrkl7b1bby8p2K9%2BN8kNxZbpfYrIZHnt%2F6EMFp0A&X-Amz-Signature=3cf9f2e525a4118ce90e66229469b68c4f6cef358d242a6bb0349adef3316b26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3LZHPA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvi8G4flZl%2F2yrMfUfjyShlhpOYjzhKDaWu1whx1CGkwIhAOoEcLz3szS%2BWWC492lQ2KulyYQQxpD4FWnrlt2TdWj7Kv8DCC4QABoMNjM3NDIzMTgzODA1IgxLPMj1g94UopsZc3oq3ANe3LUDN%2Bxt0nsoY%2FfKhuf4EKJ0SmkzVmnQFRC5SEvSJoIvyTpFdFwGTJH6Yr6yeeIf7ALZTWn%2Balj5pFtat8ht9sR7otRlscx3tE9f17ZyKUsabGhJ%2FWPo3cV06mjl8rPJwew9%2FHDBllQM0U8u66caCwQSuh09fPoXImJTGOJuOFtEFiMDDArOcFmiDhr5sL5IPMpNEO3NCUc3W5DeQRMyYTyh0AfLVqEfQvceWsuLQtDhI5qwyUMsNfo%2BG%2FHbzvp7JkvbJVV2yTHb%2B2GU5OkMTMZmQ9rX7QpXN5N6a35Csahnb12hMmALBL3nMtavALjGbplNfwo6Y0K1nq41EYY3amMi2r7oaRLoSPpWzd6DtWSPWFgKWBe%2FvZymRQosPbegfh3Nd8grd6DOF71bOrpLiGKl2JiPOltCeKAq2GZ1mWTXUY4x2mfoFaH%2Fwv6Tr5naFi1va%2FlTaoZkRAfLXhPmSAgxQo5MRET8nA1MaAKsDIaSP03NaxBEeY09jEP%2B7xnGVk64r0RvDxuuLCrIlYLucmxanFQ8RRN1LlMnIJFaYw9RWrGYbiDaTAe%2B2r0o3FXFoLxh4a6nINvJAYiHCJrRZmD0pTFDvw2CgIqc98Tq3O405KUh7dO9OUp%2FJjDksKa%2BBjqkAXl6AcxUJ%2FNH%2BXnSWm13%2BXAXkjNa1pZ61ZY%2BzVxFXUBx1R9mk4i%2BxlfFzBuZTB%2BFVmoFAwG8dbizDvZOV3xA%2FPfodosrT2x8ouzZjtMB9zgEI4lu0U1z7XzaVSfHjcqJPE2ovy0X37sQcCsMAnD0g3HDuXylPpUWZMejJMf1%2F7mdniukpKMTYCmN%2Fg7xw0YD1Pe8IiAGG2pe5FDoG3FiCCu4J42r&X-Amz-Signature=ddd6702dd8e65abcb949890f0b548458c1d3d26d7c7e0644d01bffbbb44155b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
