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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJFOWSV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6VdHq3b7PYtzm6AkyQf5ZnIAMdW23jEuEYBOaJg5kLAiApE0WtDgZmY4i3iI0psBH4rtgC37XoH2%2BmF%2FhPNQkWUiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0g6cC2iwMIPmx%2F0KtwD0sfql3M4KAaB47Hw8ZUQe7uKYYjjijJU2rzUd2ybiESGQ2V5dlMZDaLD1mgtOrw2r%2BiMfMuLvQgMzYu7MfIgl%2BGZEatUWnaSMBPypDm26iieKHEan80XlQ%2FDZTDfs94NrCm51AYr8oFaZBsGlNYlJFwEEw7fieJS7gQhtY6P7DFoAtVSqI%2B0YOY9GbV1QhdFUcPZoRIlcYe4dBKLwA9hPjpyjDFjoawEXyYlSXQUa5wgRFApzlHADrH1JG1loPNTtH74rff9ncL%2ByasWv5jBeRp%2BZHQnS4IvD56h337aOjvXfLwjj2vW7Gw2Yc09SqgKkw2AwsuNHYnSjc3rw2J4NHtv6K0LC0MgUAoOkuJMU1mCCknZ9YwOOcWiqqt%2BgTb1VFEVpx01aiaCggxxq4czsetmoIQCHapfY%2BLF2uSRbXKfTrwyl2i1Gm%2B4ZOPFd%2Brgriu2bjLQitLN9oLIPaYOfMy29aoBYeEgSqZLKUgix3FxYmFrtlLgF8cwZ17vlic6W5dqoL6CSP1XRhY%2BKCP3N2egpmRzgwR4mrFewyV2V8vMBYTaHhigMD8KRo42MmWzzOFUnXLKdw9PKnw3LGT2%2BsrMe51mH0Ghkhfh616wP0wt5oBGHyVBMGHedZwwlPnHwwY6pgF8cYqBa60%2B04f3TkEFznQhnWqcmXh0yO6XyVbnqyaOf8mAgKKZVKq9jl8utHQesQBgf1Ee6W5cnqRchaD0mNrpF6ukudBcKqcRfta9qpDcHWtcHyk4pQ7xeKwPdUmYzG%2BOiDN%2BeBKZ9O5NnR%2BDZlAkoKD5A1jjRpK2niDvD%2BEEBy68kK8s6YF%2FBsdozeMxE0c%2F%2BEFJv50EfI%2BH7tr8nGyNSz8isAwL&X-Amz-Signature=f4e01f24c58a4539648515cdee063eddf8dd0d9130df6c02597e9b090871c408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJFOWSV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6VdHq3b7PYtzm6AkyQf5ZnIAMdW23jEuEYBOaJg5kLAiApE0WtDgZmY4i3iI0psBH4rtgC37XoH2%2BmF%2FhPNQkWUiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0g6cC2iwMIPmx%2F0KtwD0sfql3M4KAaB47Hw8ZUQe7uKYYjjijJU2rzUd2ybiESGQ2V5dlMZDaLD1mgtOrw2r%2BiMfMuLvQgMzYu7MfIgl%2BGZEatUWnaSMBPypDm26iieKHEan80XlQ%2FDZTDfs94NrCm51AYr8oFaZBsGlNYlJFwEEw7fieJS7gQhtY6P7DFoAtVSqI%2B0YOY9GbV1QhdFUcPZoRIlcYe4dBKLwA9hPjpyjDFjoawEXyYlSXQUa5wgRFApzlHADrH1JG1loPNTtH74rff9ncL%2ByasWv5jBeRp%2BZHQnS4IvD56h337aOjvXfLwjj2vW7Gw2Yc09SqgKkw2AwsuNHYnSjc3rw2J4NHtv6K0LC0MgUAoOkuJMU1mCCknZ9YwOOcWiqqt%2BgTb1VFEVpx01aiaCggxxq4czsetmoIQCHapfY%2BLF2uSRbXKfTrwyl2i1Gm%2B4ZOPFd%2Brgriu2bjLQitLN9oLIPaYOfMy29aoBYeEgSqZLKUgix3FxYmFrtlLgF8cwZ17vlic6W5dqoL6CSP1XRhY%2BKCP3N2egpmRzgwR4mrFewyV2V8vMBYTaHhigMD8KRo42MmWzzOFUnXLKdw9PKnw3LGT2%2BsrMe51mH0Ghkhfh616wP0wt5oBGHyVBMGHedZwwlPnHwwY6pgF8cYqBa60%2B04f3TkEFznQhnWqcmXh0yO6XyVbnqyaOf8mAgKKZVKq9jl8utHQesQBgf1Ee6W5cnqRchaD0mNrpF6ukudBcKqcRfta9qpDcHWtcHyk4pQ7xeKwPdUmYzG%2BOiDN%2BeBKZ9O5NnR%2BDZlAkoKD5A1jjRpK2niDvD%2BEEBy68kK8s6YF%2FBsdozeMxE0c%2F%2BEFJv50EfI%2BH7tr8nGyNSz8isAwL&X-Amz-Signature=a1dd307d8bd48cb7515463240a4420998d400ebe329371b96267aabea3d6cda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJFOWSV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6VdHq3b7PYtzm6AkyQf5ZnIAMdW23jEuEYBOaJg5kLAiApE0WtDgZmY4i3iI0psBH4rtgC37XoH2%2BmF%2FhPNQkWUiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0g6cC2iwMIPmx%2F0KtwD0sfql3M4KAaB47Hw8ZUQe7uKYYjjijJU2rzUd2ybiESGQ2V5dlMZDaLD1mgtOrw2r%2BiMfMuLvQgMzYu7MfIgl%2BGZEatUWnaSMBPypDm26iieKHEan80XlQ%2FDZTDfs94NrCm51AYr8oFaZBsGlNYlJFwEEw7fieJS7gQhtY6P7DFoAtVSqI%2B0YOY9GbV1QhdFUcPZoRIlcYe4dBKLwA9hPjpyjDFjoawEXyYlSXQUa5wgRFApzlHADrH1JG1loPNTtH74rff9ncL%2ByasWv5jBeRp%2BZHQnS4IvD56h337aOjvXfLwjj2vW7Gw2Yc09SqgKkw2AwsuNHYnSjc3rw2J4NHtv6K0LC0MgUAoOkuJMU1mCCknZ9YwOOcWiqqt%2BgTb1VFEVpx01aiaCggxxq4czsetmoIQCHapfY%2BLF2uSRbXKfTrwyl2i1Gm%2B4ZOPFd%2Brgriu2bjLQitLN9oLIPaYOfMy29aoBYeEgSqZLKUgix3FxYmFrtlLgF8cwZ17vlic6W5dqoL6CSP1XRhY%2BKCP3N2egpmRzgwR4mrFewyV2V8vMBYTaHhigMD8KRo42MmWzzOFUnXLKdw9PKnw3LGT2%2BsrMe51mH0Ghkhfh616wP0wt5oBGHyVBMGHedZwwlPnHwwY6pgF8cYqBa60%2B04f3TkEFznQhnWqcmXh0yO6XyVbnqyaOf8mAgKKZVKq9jl8utHQesQBgf1Ee6W5cnqRchaD0mNrpF6ukudBcKqcRfta9qpDcHWtcHyk4pQ7xeKwPdUmYzG%2BOiDN%2BeBKZ9O5NnR%2BDZlAkoKD5A1jjRpK2niDvD%2BEEBy68kK8s6YF%2FBsdozeMxE0c%2F%2BEFJv50EfI%2BH7tr8nGyNSz8isAwL&X-Amz-Signature=652b3abfdee8758b1f26ab208446ffb3b3f9d99e8393aeb633cd3cd65e38256b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDFHR25%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2N%2FqAq3eR3CFRGnU%2F6lAiADKiWNOygJzuugKYv3E2KAiEAwAGT%2Bez6S27cOvBWVjyZdt1Ogukw16Z598K%2B32yVR0UqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0M3rxC4q9xRHxqUSrcA12MZv6XXgdtDeGOm7vRsJjyA2N0r4LvPqTZwrl8234aom%2FvphpVLGdYnuEcMhWpEUbVb%2FE4Ux9%2FFZCZNcb1Y0oUZMgIxvfQurZLnBSS54vOhtC2ZUdHayDcyURPLnyzBqut3atrZbxA%2BvxrN1KHIK5jNjs2Z5u%2B6SYgF7OWdox%2F6of%2FWoONe0sC81dVLV6lV53mi9KiEtTByG%2BQlIANtJK1yY7j8KEmPnalVm1mVVZeR8XcjDABdlY9DYXNenUTw7YP4lPiL5FgQXGGYHypzp4WPhOquniozmaE7GcIZ4HwgZTuKHIp5cJ9GP4jcQckXCXnMq5C16RjdAPkB9eyVDWlgxrXyrmiJouwE66g8fF1FW4p3DoJlhSnLesD3LkbUmqIaL9jPsPVKp8Aq9zkVN4nu07CqhVR9T7yCEtZzoku5XpKW9s360HcNbuNwQJAFUOqrtvw2wmEboC2OOXUVY8iPuAEK07KFX5jxHLrFAWkkpme%2F6rCB4riE17aEmDMOwmXX%2Fwj%2Fchr2yBpk%2BljuC4GQ5k%2F%2Fd8xhM8typzpK86dyIoIdamxpNIAL%2BbJhEp1%2Bxy7GsXBqJ9uR8jEcreHWhpD9B%2BC3rlyjdiBGPDl53lYlp4YaFC0ZOfTU3jDMPf4x8MGOqUBvwgF9nC3QbGSxmrinaesd2Qzz0NRi0mk%2BH4woePuarIzNA73yPXAaj%2BXxrsdQNsaHLpBgKaXCj8cy83YxszBnFAUT%2FagYleXuZ%2Bwm4kF%2FKjiqTiOq%2BJm6kGTb%2BOCmqun8zpPpvq4xn9SqLvlHGH22ASQyMIBecEB9LXv0xFpqyiQY3O6S%2BHEANu806UE3OvY%2FKTOSLL2LkGiMPIifpNIOK1DJQCJ&X-Amz-Signature=19bef7f31a7819ee92fa7e12e6f8af98781c0813ce25f94f10828823126404ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FO2XGIC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5Edp5%2FeU5k4siyg50u7idHkplfjysa7RQVmqamd075AiBLl8kavnnypjZ6IrRBAMT12y6KyYqSTqmwde0kiip0uyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTxTBTuHNqHft%2B4qCKtwDLTNzFzur4i4exUd43KKX37XEGTQ9qHU0QCp0kOMOCUdtI0holgystuKxZbT8nS57CGhayqUEiZx6NTuVvVBdFKDblY1Xp5LM0Em9bToPvnPsNiEZXfDKhNVh3rgdsFKfda32x12Etpy5GGvKlzV0OhjooPXAAZhvZDV5izg0OSnMf%2FlQ%2BKIyTnRrgQPFJ13IWu%2FETG3xKC0NGhpR4GGEuez2PP9qMUN%2BbSuwASHIWyHw4K6hk0DWDcXeZn9yop4Ny3zKfJUA%2FDXAb3AFI6xdkfPkOVh%2BHzhDm3YwQcdt%2F8jIJFGLMkXTMiCCuh0GFWB7DoHH4jb8yXcUH4Q5E9rrRuzlPFN1DG6ZlX53M2Hsv1fCYdbvls6YlE2X4EGs8SCN8Yf4X0%2BHdlh5qfQJ1czkHtZJw5GbRbpH7OtpGO2Y4H%2BMXEIKmHW4F5zBQOaaOIve0CJgB7liHsRtx5oFrYlwq1%2B8rDxKNHMBHi0kp3p5Cxp51kUGmQ%2Biuxyt4RnxjyYaI8lgVtII0aMyBau2sdG7YCtEh0EWSF92nTDWTUq0jxJRJz4mcz0o9gPtyTqNSB5o6ciH6czMNxOBjADjQY5XOIachB5uciL5RCLSgmrdSW6uvQQygjNNdLBZJOAw4vjHwwY6pgH6J9VpKAqazOEmoC%2F2xswc2bw7b0mpgg1y2MuSRUkHW8uLFF1AEa%2Fb1uOWx36qCgCN4Mi90G7PuUzA9kHJ8H9o1RrP65uew1UzdXEVtss0A%2FIVXk16V%2BMDLuzWvyLad6oULrlU56GY1NKX3OAHITGzRMc70RJSIVrQ0ITPs8CmDsT0c41mMrJRFD03ufCw%2FZJv%2FQm4d6LO7qOAAaFdAh0Shc6ak6hi&X-Amz-Signature=10c931f97851bba3cc37ef05505886f71b0b723c02ece812f05eaa3a2d1f82c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJFOWSV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6VdHq3b7PYtzm6AkyQf5ZnIAMdW23jEuEYBOaJg5kLAiApE0WtDgZmY4i3iI0psBH4rtgC37XoH2%2BmF%2FhPNQkWUiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0g6cC2iwMIPmx%2F0KtwD0sfql3M4KAaB47Hw8ZUQe7uKYYjjijJU2rzUd2ybiESGQ2V5dlMZDaLD1mgtOrw2r%2BiMfMuLvQgMzYu7MfIgl%2BGZEatUWnaSMBPypDm26iieKHEan80XlQ%2FDZTDfs94NrCm51AYr8oFaZBsGlNYlJFwEEw7fieJS7gQhtY6P7DFoAtVSqI%2B0YOY9GbV1QhdFUcPZoRIlcYe4dBKLwA9hPjpyjDFjoawEXyYlSXQUa5wgRFApzlHADrH1JG1loPNTtH74rff9ncL%2ByasWv5jBeRp%2BZHQnS4IvD56h337aOjvXfLwjj2vW7Gw2Yc09SqgKkw2AwsuNHYnSjc3rw2J4NHtv6K0LC0MgUAoOkuJMU1mCCknZ9YwOOcWiqqt%2BgTb1VFEVpx01aiaCggxxq4czsetmoIQCHapfY%2BLF2uSRbXKfTrwyl2i1Gm%2B4ZOPFd%2Brgriu2bjLQitLN9oLIPaYOfMy29aoBYeEgSqZLKUgix3FxYmFrtlLgF8cwZ17vlic6W5dqoL6CSP1XRhY%2BKCP3N2egpmRzgwR4mrFewyV2V8vMBYTaHhigMD8KRo42MmWzzOFUnXLKdw9PKnw3LGT2%2BsrMe51mH0Ghkhfh616wP0wt5oBGHyVBMGHedZwwlPnHwwY6pgF8cYqBa60%2B04f3TkEFznQhnWqcmXh0yO6XyVbnqyaOf8mAgKKZVKq9jl8utHQesQBgf1Ee6W5cnqRchaD0mNrpF6ukudBcKqcRfta9qpDcHWtcHyk4pQ7xeKwPdUmYzG%2BOiDN%2BeBKZ9O5NnR%2BDZlAkoKD5A1jjRpK2niDvD%2BEEBy68kK8s6YF%2FBsdozeMxE0c%2F%2BEFJv50EfI%2BH7tr8nGyNSz8isAwL&X-Amz-Signature=d891cf4279d8c56d5c40f1381891293fb9f469639b396b0c6b48301fd11b843f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
