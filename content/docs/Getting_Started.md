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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA2TOK7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDV9f0M9960Y6as2l8NSz2t6bJ7DNA6%2BPZ22OQnL2DaBAIgR%2BkH1OeLxUF9QQF6i2ILS3MRhKNR5uGYBKjvurNYJLoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMef4H1Kwn9ODjAc3SrcA3QrEXbLoqX0WqGHm5QKdutWSGj7tuG4A%2FJBLV6zWLNveQHT5gBV6twRk1KKch7Jqlwg%2BvwWVaFKwJ1lxNF3FYJBaFTB%2FuYA7ZjXdEUyOGSmIV5bOC1aLch%2BQIp3d2GvT%2BIvXQDmFvGoCZjjZxjYuPDPGYoep%2BxLNBS6xfY1%2BRvVpslBJyBXY907s20CjbhLDAnNjMH4ZE%2BqRltGLc71eFFLtLjQ6D4ugFQ2KUfAWKPN%2BkJXmSJgxCgqKFRShKKOwKL6H3yoQgF%2FpZ1fEhqgdugqwE7%2B0hFYicmcF%2Baig5VU0ENidDVLR5DXyxC3TWNOZmr5ohV8Frx%2FSYXHghGEYscOirvsAZ7Jb%2F1AfBjtfHSdUfZwbmN7AMRuMFYw57NpaB341XbFy1Q%2B0xMD%2FqPkdg604QVrSE3nVJFMnizKv%2FLwuJmRnYXVt%2B2Sv98u9RfjeBTOF4%2B7sQsRwbmtofR32uFhIkvIjlG2MkrlXiGxlDrJveKQmSwZ4pWEGgWAUQG31sJacCWBn8olAyotIHcwCZHvZ0oVgDdc2AJ0C5otchLhYaNDPAcpQ144o5cIgZDaae7KxKKasikDenQzzXB1p24q088XSH3I%2BKODjbRbTwyCebni8oLZ2J4GgDx5MKz6ksQGOqUBWNeSb8uA3xroL8xeTvdp%2B%2BEX9%2FMbtqZL9tWf5loejEFufzUPmS6O%2F1fTyiE8Lc0v6aMFo%2Fp%2B7NmE4rvFImaLG2QgiSZMS4KxyMJw93yLIYJ2%2FdKNMMGNlbsfL54%2BY1zB8di4A9RIi4m%2FGZJf9kvrwrinK1rn%2FQQzuIxBOUvAFzNWCGfI%2B2vClOj4sh0QshrRMmipJvLBa4fUOO3e48kcPFJ4Iz7E&X-Amz-Signature=9143ff69add67060b37e5927025371f0a15bdcdb914ec4cdd4b6557910dab1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA2TOK7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDV9f0M9960Y6as2l8NSz2t6bJ7DNA6%2BPZ22OQnL2DaBAIgR%2BkH1OeLxUF9QQF6i2ILS3MRhKNR5uGYBKjvurNYJLoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMef4H1Kwn9ODjAc3SrcA3QrEXbLoqX0WqGHm5QKdutWSGj7tuG4A%2FJBLV6zWLNveQHT5gBV6twRk1KKch7Jqlwg%2BvwWVaFKwJ1lxNF3FYJBaFTB%2FuYA7ZjXdEUyOGSmIV5bOC1aLch%2BQIp3d2GvT%2BIvXQDmFvGoCZjjZxjYuPDPGYoep%2BxLNBS6xfY1%2BRvVpslBJyBXY907s20CjbhLDAnNjMH4ZE%2BqRltGLc71eFFLtLjQ6D4ugFQ2KUfAWKPN%2BkJXmSJgxCgqKFRShKKOwKL6H3yoQgF%2FpZ1fEhqgdugqwE7%2B0hFYicmcF%2Baig5VU0ENidDVLR5DXyxC3TWNOZmr5ohV8Frx%2FSYXHghGEYscOirvsAZ7Jb%2F1AfBjtfHSdUfZwbmN7AMRuMFYw57NpaB341XbFy1Q%2B0xMD%2FqPkdg604QVrSE3nVJFMnizKv%2FLwuJmRnYXVt%2B2Sv98u9RfjeBTOF4%2B7sQsRwbmtofR32uFhIkvIjlG2MkrlXiGxlDrJveKQmSwZ4pWEGgWAUQG31sJacCWBn8olAyotIHcwCZHvZ0oVgDdc2AJ0C5otchLhYaNDPAcpQ144o5cIgZDaae7KxKKasikDenQzzXB1p24q088XSH3I%2BKODjbRbTwyCebni8oLZ2J4GgDx5MKz6ksQGOqUBWNeSb8uA3xroL8xeTvdp%2B%2BEX9%2FMbtqZL9tWf5loejEFufzUPmS6O%2F1fTyiE8Lc0v6aMFo%2Fp%2B7NmE4rvFImaLG2QgiSZMS4KxyMJw93yLIYJ2%2FdKNMMGNlbsfL54%2BY1zB8di4A9RIi4m%2FGZJf9kvrwrinK1rn%2FQQzuIxBOUvAFzNWCGfI%2B2vClOj4sh0QshrRMmipJvLBa4fUOO3e48kcPFJ4Iz7E&X-Amz-Signature=8b3478d7879378a99bf02d609c2652e4b1c22d20c3bf7a4e36a62484ef6940ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA2TOK7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDV9f0M9960Y6as2l8NSz2t6bJ7DNA6%2BPZ22OQnL2DaBAIgR%2BkH1OeLxUF9QQF6i2ILS3MRhKNR5uGYBKjvurNYJLoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMef4H1Kwn9ODjAc3SrcA3QrEXbLoqX0WqGHm5QKdutWSGj7tuG4A%2FJBLV6zWLNveQHT5gBV6twRk1KKch7Jqlwg%2BvwWVaFKwJ1lxNF3FYJBaFTB%2FuYA7ZjXdEUyOGSmIV5bOC1aLch%2BQIp3d2GvT%2BIvXQDmFvGoCZjjZxjYuPDPGYoep%2BxLNBS6xfY1%2BRvVpslBJyBXY907s20CjbhLDAnNjMH4ZE%2BqRltGLc71eFFLtLjQ6D4ugFQ2KUfAWKPN%2BkJXmSJgxCgqKFRShKKOwKL6H3yoQgF%2FpZ1fEhqgdugqwE7%2B0hFYicmcF%2Baig5VU0ENidDVLR5DXyxC3TWNOZmr5ohV8Frx%2FSYXHghGEYscOirvsAZ7Jb%2F1AfBjtfHSdUfZwbmN7AMRuMFYw57NpaB341XbFy1Q%2B0xMD%2FqPkdg604QVrSE3nVJFMnizKv%2FLwuJmRnYXVt%2B2Sv98u9RfjeBTOF4%2B7sQsRwbmtofR32uFhIkvIjlG2MkrlXiGxlDrJveKQmSwZ4pWEGgWAUQG31sJacCWBn8olAyotIHcwCZHvZ0oVgDdc2AJ0C5otchLhYaNDPAcpQ144o5cIgZDaae7KxKKasikDenQzzXB1p24q088XSH3I%2BKODjbRbTwyCebni8oLZ2J4GgDx5MKz6ksQGOqUBWNeSb8uA3xroL8xeTvdp%2B%2BEX9%2FMbtqZL9tWf5loejEFufzUPmS6O%2F1fTyiE8Lc0v6aMFo%2Fp%2B7NmE4rvFImaLG2QgiSZMS4KxyMJw93yLIYJ2%2FdKNMMGNlbsfL54%2BY1zB8di4A9RIi4m%2FGZJf9kvrwrinK1rn%2FQQzuIxBOUvAFzNWCGfI%2B2vClOj4sh0QshrRMmipJvLBa4fUOO3e48kcPFJ4Iz7E&X-Amz-Signature=3aaeb0c17c26ce8be0eead5cabde259ce810667fbe483f0db318fb883cf1bb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5F5BHDQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBbFqApHOGOneGZ2aPe3rU7O4yZ4%2FSqnwgchQUvER%2FzUAiEAkSe0I9AinYFLDFlQTQDhKNHdVYZ1zdyPQJAaYI6tjGUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJkbRoz6FxWzQzFLqircA39bNPuYrr1SwDOOTs7Vl6Ayb%2F0Kbt5ZiK%2BFqfVTjvOeLVBJWPUK6wo0DUkhLXI%2Bp3mP6KE1fPUSFnTXsm3xz0L1z8CFjAFNX1Rk62oEoCyjNVJcrPrXUsZumidHRMj1Wj5i7CFVeq%2BJFMoibXVyrRa3JIqI%2BO2c0oaEZaUbfFH1Zwp9%2FBdlgC%2FAaWRcEHOt2YMg7E%2B9tmaHLB%2BpeT4ilRldoaQwBo531EmcbKY5Q1nN5tVUfr2bp8rKCKa%2B727EhV5keXPGj6AQcmSND%2FcWbYqecnEF1B4q3KUaSubCFguVzk6Q1MqE9%2BKXJj%2FVmwcj8fUKWQ7j3pdEzJ5HM%2BytqvR0LD1QFRRFEqHl8etY1HUYnfELStQx7C6zQIB3OqOKOyIlGxRixzmcMtGH9UmZWDnENeXw6L16nKUC3gVNimZ27%2BK%2FMo4Lb7P29fqx%2FwEG6GF82e9YJ5QsOFji9R6mgTw%2FoJEfCtOt5gCdWoxB08R8PQ7mYkPEy%2FMtbqMEvt7EAhRLmbPDhAl176C8wG0RFL52FMO%2Fsbn6fOXiYcdeOZpSmncLHJMlP7KeB4GSlEBwYuUPdYmc5Q%2B9F68g4pc0kuggSk3O1hiABr0W5wSLByx%2B8%2FNp4sDHBzhn%2Fix4MJj6ksQGOqUBme8n5lkexem%2FyS2YOV2y2XGcDH801jQG278VPormMG8as0LmGt6HIe1OaNhWqpTQgioExRG%2F28lM%2Boql7JRXiBGX1vnwuoqVi2osXH3FP2Th%2F6uvFECX1fCUZqXAuIW2prBtGUh9DyQ0QOLWh4BLIMxIl6oopbO2k5quymev4t0uHYB7dGZOpkGeUtlvu8phjZB59qSMMO9ozXk8LmFS0IaGivmX&X-Amz-Signature=713fac64ea21b04300e33067661d12b7a077d7abf2326a151204e30c8be6bca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPK5XUON%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAHoXiO6mvpxeHSlfB%2BYGX7O%2FPeAOZUlJq30wc88iPN9AiEAgX0kS9dNHxIPQA3NJaHPa%2BoXmUmvDYPQweL2fHcC%2FOAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMWbzjmpE0yBEbun8yrcA4mO6cLOyIpll2KxoSRah8G3HvQB%2FBrEJnE5lHvBuh%2B%2Bw7AZdHgKcvPsefG3tynJ06jVGA0MJBBcgq02aMF4hciI4cX1fl%2FRC5uCsoslHE1n4OEY1K8wBXJGXIPIDEfq%2B6ckE8r4QlN9JjjmFUiH7217eJxM7Q6Bt8c0ipsvU50gr0gpZ%2FRzMkfMxlZUtrQZK7FfY%2B5j7pSyg2PQtqK2GzL82gaQ6FWoQxSLGPqwV8EN%2ByylSZaxiTswGJxvMoJN7jGDdpV5B6HK3cJbDrxVG2RvSrj5Op%2BVo6XsOog6JL9HmJwot1LxPaQVL96WXVl2%2FSba7Vvygvgcyk00MLLd3Cem%2FI1aefP%2FbDxEnTvK%2FB7rAuLWC587m2amtyQhqi6QUstLhZ2FKBRVmCSnbs7u%2BY%2Bh6lIR4bGv2o%2FZ8HZOtBcZX%2BFPthOsN50hCsgAE9J39UuX6H1RsOeqVXzgq3rJTIOkncn35t%2BSNN1ClRR%2BViaoxTh%2FBvS123BmilPF5qwBDnAHVPS61ZGFcoSiOE5BhjoTmuDPysvQTot62f8zr1liNal9vRjoGw%2FoXQ5YApWO5WBqSYNRmB%2BBdhy3IRViL6L%2BmXYggi9iIMDF46LXIXSy3wg3gZ%2FPgwsW56KXMPD5ksQGOqUBKUG1wrHR0Uu98dFTvlQ%2B9KzQJzB2PFnYbQDmgx34Avim4QfWvAQ%2BgCUcgjeI4%2FbEE8ZxnK6DV%2Bgq26AwAm%2BFx5C2I6N9O3tjGdSfC5AhwE5Li6nTSmDiq7a0NvE1PSv8EQAoNQ37euybpgj4qbM0IpnIk%2BBL5NqTNuZ9E1sF3wqMQYJdunsd4a31w%2F7hvR529fx%2Fp2NAuQvguqwwxR4uTPYTcU0B&X-Amz-Signature=b05e6dff2d7a1f2570c8434fe8bbc113ae1f571c3137786beaa4d79031bf433b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA2TOK7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDV9f0M9960Y6as2l8NSz2t6bJ7DNA6%2BPZ22OQnL2DaBAIgR%2BkH1OeLxUF9QQF6i2ILS3MRhKNR5uGYBKjvurNYJLoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMef4H1Kwn9ODjAc3SrcA3QrEXbLoqX0WqGHm5QKdutWSGj7tuG4A%2FJBLV6zWLNveQHT5gBV6twRk1KKch7Jqlwg%2BvwWVaFKwJ1lxNF3FYJBaFTB%2FuYA7ZjXdEUyOGSmIV5bOC1aLch%2BQIp3d2GvT%2BIvXQDmFvGoCZjjZxjYuPDPGYoep%2BxLNBS6xfY1%2BRvVpslBJyBXY907s20CjbhLDAnNjMH4ZE%2BqRltGLc71eFFLtLjQ6D4ugFQ2KUfAWKPN%2BkJXmSJgxCgqKFRShKKOwKL6H3yoQgF%2FpZ1fEhqgdugqwE7%2B0hFYicmcF%2Baig5VU0ENidDVLR5DXyxC3TWNOZmr5ohV8Frx%2FSYXHghGEYscOirvsAZ7Jb%2F1AfBjtfHSdUfZwbmN7AMRuMFYw57NpaB341XbFy1Q%2B0xMD%2FqPkdg604QVrSE3nVJFMnizKv%2FLwuJmRnYXVt%2B2Sv98u9RfjeBTOF4%2B7sQsRwbmtofR32uFhIkvIjlG2MkrlXiGxlDrJveKQmSwZ4pWEGgWAUQG31sJacCWBn8olAyotIHcwCZHvZ0oVgDdc2AJ0C5otchLhYaNDPAcpQ144o5cIgZDaae7KxKKasikDenQzzXB1p24q088XSH3I%2BKODjbRbTwyCebni8oLZ2J4GgDx5MKz6ksQGOqUBWNeSb8uA3xroL8xeTvdp%2B%2BEX9%2FMbtqZL9tWf5loejEFufzUPmS6O%2F1fTyiE8Lc0v6aMFo%2Fp%2B7NmE4rvFImaLG2QgiSZMS4KxyMJw93yLIYJ2%2FdKNMMGNlbsfL54%2BY1zB8di4A9RIi4m%2FGZJf9kvrwrinK1rn%2FQQzuIxBOUvAFzNWCGfI%2B2vClOj4sh0QshrRMmipJvLBa4fUOO3e48kcPFJ4Iz7E&X-Amz-Signature=750f5ca0d02f8236762480d3df1cf2a56f0a625b66e534af194c540b9970ffc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
