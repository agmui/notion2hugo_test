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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUBSXXJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe8IEhUbNif0ral2FU6dI6yHxT0bnPtq7t3H90yV9oTwIgaNmEEtIzYi21h%2BlgbPAKEFyAvHijd88xKmnDKrtXaOoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLYlAa9Zu1caHSm5ESrcA4vw2Xe2svXEVoxFlEDWQR4gSlxpgQ4LSvaGn%2Fr6nySS6FDYLSezWW55D2RmMMBwJUVdhM8d8frMSMPBY1taF0N5eg6KukmoIe%2Fyq0XfomsfOqQyLnA6g0z4FZhiK6dHA%2F3pk8gj2bHB6V863g3%2FmqG8iPB%2Febct5moLVnBXhnOiAYqavYmxjzomcr%2BHYHs57nbAfDjO7ZEU6epGEEHs8GP2YdEHgRLjaMJMu5URSqp3rjnY8d9LetfpcPUfS81emw4c1vQ9GI%2BDFmgBTrnCO%2BdpskGGK9g7mmsM1yvkaJwPaXHINm%2BspKK4P4NwyWemPBVaxE%2FZV%2B%2FbLd6nEWt70O9jW42veWZ0PFuBoT1d4k2Yu4Ap%2F6gPg%2B3Pr5qbYTY%2BLhuU8czh7s894jEeLZKQpiLPFCGpuU0rVYsV2yOTNqkpV6t5IRiU%2F197j9W0tT4RidcvzkPpWfzzPO6%2FF7xgFSUjX3z8nA8k080I3RgFUEyI7eVsjoZ1UqkOoBh3AL%2BbS3J0wEyQvzBBKOT0j5bnT9fLRAGAyPyvnuOrxUp6GKL9VLI6PXN7NFClHlqJGqIQ6tnvoxUpa2zPnmSC4pgdOE%2BIALmPQszpNEaFEzRCiQveENkztXpkoEd6DReoMLe3hcAGOqUBIOsbWxImaEpd3lLRAx0A5%2Bzv7CohsDrjTBfBGzr%2B4ACMTmfy8%2FwELNz66lUuve559X1BQH%2Ff3MdPNWF3TTp%2BGk%2Bup0kVr8TXtDREz%2Bel11uQDM0T4jLnys%2FFzSPSGj1%2BP6HIRhIsy6DY1%2F5ZVQGuKciAQ6KvmcJ0Dac9u8vvDlf5L4dKHXq%2FsfadNOEzITC1x1oqKNlU%2BABhLHUTM0lp2hSf%2BN3Q&X-Amz-Signature=b3c372eadc7fb3dac2f2d06f11e66d1a4e7dd796440e83ae08ae60fcd157f535&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUBSXXJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe8IEhUbNif0ral2FU6dI6yHxT0bnPtq7t3H90yV9oTwIgaNmEEtIzYi21h%2BlgbPAKEFyAvHijd88xKmnDKrtXaOoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLYlAa9Zu1caHSm5ESrcA4vw2Xe2svXEVoxFlEDWQR4gSlxpgQ4LSvaGn%2Fr6nySS6FDYLSezWW55D2RmMMBwJUVdhM8d8frMSMPBY1taF0N5eg6KukmoIe%2Fyq0XfomsfOqQyLnA6g0z4FZhiK6dHA%2F3pk8gj2bHB6V863g3%2FmqG8iPB%2Febct5moLVnBXhnOiAYqavYmxjzomcr%2BHYHs57nbAfDjO7ZEU6epGEEHs8GP2YdEHgRLjaMJMu5URSqp3rjnY8d9LetfpcPUfS81emw4c1vQ9GI%2BDFmgBTrnCO%2BdpskGGK9g7mmsM1yvkaJwPaXHINm%2BspKK4P4NwyWemPBVaxE%2FZV%2B%2FbLd6nEWt70O9jW42veWZ0PFuBoT1d4k2Yu4Ap%2F6gPg%2B3Pr5qbYTY%2BLhuU8czh7s894jEeLZKQpiLPFCGpuU0rVYsV2yOTNqkpV6t5IRiU%2F197j9W0tT4RidcvzkPpWfzzPO6%2FF7xgFSUjX3z8nA8k080I3RgFUEyI7eVsjoZ1UqkOoBh3AL%2BbS3J0wEyQvzBBKOT0j5bnT9fLRAGAyPyvnuOrxUp6GKL9VLI6PXN7NFClHlqJGqIQ6tnvoxUpa2zPnmSC4pgdOE%2BIALmPQszpNEaFEzRCiQveENkztXpkoEd6DReoMLe3hcAGOqUBIOsbWxImaEpd3lLRAx0A5%2Bzv7CohsDrjTBfBGzr%2B4ACMTmfy8%2FwELNz66lUuve559X1BQH%2Ff3MdPNWF3TTp%2BGk%2Bup0kVr8TXtDREz%2Bel11uQDM0T4jLnys%2FFzSPSGj1%2BP6HIRhIsy6DY1%2F5ZVQGuKciAQ6KvmcJ0Dac9u8vvDlf5L4dKHXq%2FsfadNOEzITC1x1oqKNlU%2BABhLHUTM0lp2hSf%2BN3Q&X-Amz-Signature=946c18ac649ab8de8c339a489bc996bf76d820a3e59d39ee314d1dad0a584d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RB4SCPZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmznMzh8P4gdvi6MxW1P5t8F2nbcEf0Oxt7bJujFfKwIgbhrI8bxtXY2XUAN0xcLuBYRaYtM24GM5wRFepqYK1Gcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHWBJo8fvZofIZWneSrcAy8SnO1DcqC9hyDN1Vl8iZlFkcE%2BUqTBONd7ffaaIS8ouP1r%2BQj%2FHOTjJS%2F9vxy96nrwEMh7TWuDn4mtOHvk3XMFvm0HMyrQYLhOXFSJ8P4HB4mUqxmzLSR3fFjhhdk%2FNQxhiP39%2FNI0LMkzr%2BUup6rKtBw8YWPo9%2BwQFqMVLTYUmPYTDwSFVu1RO3rbHD8VnnUuGvFKQuSi2fjgNhksMVaSaOjnM2IjozDYJtVlzYqNqtoNkL7FD21Yv4zV93B89asxI3KNhjKdC1cmKwnG6TypC1ldrbLLr99zCvXFqhvTL9u4LpzGNReurCjfn756oiVFXmmebRPu1n4%2BwSRejGZYJO02DmgglQxW%2BJFxypK4mKirbNDBCt34Ep2ERuqiQhyvehjUTsrrZWf3S5WnZO6z%2F5F7UuohuNDtPFv6WFuYHidzb4xWoTH2yFk%2BrGeQgts0t9WVDdOt9Ne6%2FRROnVRnhcYabaCRDjgLJ8ayJUgtVArctFRHQ6i%2F83Q1AXHyzhR6WcFlHeObgmix4CNoj9Szv%2BymphWWmtvJVrM71e1VmPksQuMcbYYFMKy4Qsn0Zsi7OpTnXxtfSUbXZLGKBJk4X8fHUNcoGmCif8OcG4BFR%2F%2FHH355GUjV9g6NMLa3hcAGOqUBi2Vq2VEBORyAj1N4JJ8MgqvILXvONVTXLTK0bS93%2FiPbYSrPjMkmv2Jy0DtRb9AHB8aknFhhPeDE4aVF8vKuNReLjipOxshFVtDjqBSYb6qt8P2lq9HDvtT3MSMVeRx%2FIAWcJytUtp1qjQ6zm3n%2BOedNCjEf1cT7RcwKkWeNFnDXHsX%2F9I1%2FrSxUZwiJN%2BZytD20fqfnFS5g%2BBM%2B5zD9jpTljJbH&X-Amz-Signature=7a122f97bd4701f5c6ddc62375b790fab6b3380bee23e7c61b617072bf1d1d78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEGLCHV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXxrJiEWFgUr4FRel6lPYbb%2BXTxbjfzP%2Fo0XuLRor0AiBW%2F1NUo7kYz%2FizN2kEwmtIyfiUtnsOEKECJjLT%2BGyV%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMOphKj7AE7dJYyGXvKtwDeIGLcOksVmdozfVXVxLI%2Bwer9gUbyMoPUNyI9Xl4lxt%2BDewbisFgN6W43DIvB8BvVkC85KT7kRbL6hUBrG2rMzyZnV75cHeI5fupnTE0xJIJsTJ73sZOhGOmL3sEgV2o85kTCNazD%2FktLhUQE4WVlR9Ctv9AOJL8xMZ5EGN6g9X8wvGrxv33hw8AuYU71cW%2BU1seo4HBmUAI3a%2Fnnzsqr9DG7yJlc03DnkmwSXSDmMknxFe5lA8btGPWY2xhiFrWcCLGXKAdko2BJW53Dq2a7QcxgYJW5xuZYK7WQdp%2Fl%2BZT5BE3nv1cyDzF1Jsb7fHVp2isf0iDU1uH916MpJDpvUfZkgoIrQE1dB4D8hZnTdZ4osmTb5RDooADPr845pNIRsUzxJl4y9HgTGiiGcCzv7GBO%2BeWydTVOw%2B9DDcVGdMkToRulPrWPP1OaMCjrnIWEPMqnop5IJoQfKA7%2FA8gmaPYT0icXWNzp%2FZ2S87jmgEWtPz0zuDJF5l0eZ3BkKR3huzzZU5nP3r%2Bb8AoOSF18xnULdyPKcAVnpLKlpp9ztF21rq4VnmHso4M1hv2sy08j1lJHMcgv0gwbEwZDo%2F5esSSNy73OoMh3WSO1Q6xjyQRQIJo%2BDecDgAVsEww3LaFwAY6pgGzE0QKOyqcjWz%2FzHGWbcsv2H%2BkbH6Jf42PwsC9h%2Fcb%2FWM0%2F00wZUDOsVSuj9F1heA%2F5oKpS9GXYm1F1mLwppodYv7dOQwaGZhfUs1OhlVXPBjoau098y3Zop827Vu1ZjQAzbu60r4pX0q4kX19fFWdOOLXXAf5xaCbWrQU%2F4Pzm8r%2FDkv3O7ryJcyeAdbNf4ZaPEnp8BqBzAtkeqDfiH8lCgng7xdk&X-Amz-Signature=1a4a66075cb39f21b9c26005d7789a15701114a6e36bc6078e12fb7e6df00bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUBSXXJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe8IEhUbNif0ral2FU6dI6yHxT0bnPtq7t3H90yV9oTwIgaNmEEtIzYi21h%2BlgbPAKEFyAvHijd88xKmnDKrtXaOoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLYlAa9Zu1caHSm5ESrcA4vw2Xe2svXEVoxFlEDWQR4gSlxpgQ4LSvaGn%2Fr6nySS6FDYLSezWW55D2RmMMBwJUVdhM8d8frMSMPBY1taF0N5eg6KukmoIe%2Fyq0XfomsfOqQyLnA6g0z4FZhiK6dHA%2F3pk8gj2bHB6V863g3%2FmqG8iPB%2Febct5moLVnBXhnOiAYqavYmxjzomcr%2BHYHs57nbAfDjO7ZEU6epGEEHs8GP2YdEHgRLjaMJMu5URSqp3rjnY8d9LetfpcPUfS81emw4c1vQ9GI%2BDFmgBTrnCO%2BdpskGGK9g7mmsM1yvkaJwPaXHINm%2BspKK4P4NwyWemPBVaxE%2FZV%2B%2FbLd6nEWt70O9jW42veWZ0PFuBoT1d4k2Yu4Ap%2F6gPg%2B3Pr5qbYTY%2BLhuU8czh7s894jEeLZKQpiLPFCGpuU0rVYsV2yOTNqkpV6t5IRiU%2F197j9W0tT4RidcvzkPpWfzzPO6%2FF7xgFSUjX3z8nA8k080I3RgFUEyI7eVsjoZ1UqkOoBh3AL%2BbS3J0wEyQvzBBKOT0j5bnT9fLRAGAyPyvnuOrxUp6GKL9VLI6PXN7NFClHlqJGqIQ6tnvoxUpa2zPnmSC4pgdOE%2BIALmPQszpNEaFEzRCiQveENkztXpkoEd6DReoMLe3hcAGOqUBIOsbWxImaEpd3lLRAx0A5%2Bzv7CohsDrjTBfBGzr%2B4ACMTmfy8%2FwELNz66lUuve559X1BQH%2Ff3MdPNWF3TTp%2BGk%2Bup0kVr8TXtDREz%2Bel11uQDM0T4jLnys%2FFzSPSGj1%2BP6HIRhIsy6DY1%2F5ZVQGuKciAQ6KvmcJ0Dac9u8vvDlf5L4dKHXq%2FsfadNOEzITC1x1oqKNlU%2BABhLHUTM0lp2hSf%2BN3Q&X-Amz-Signature=2745bedc0512ada9150b5b21c305b3c0ee47776e6ca07c6429ed4cd0a9ac5968&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
