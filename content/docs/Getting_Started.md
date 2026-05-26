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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFJHH33%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjepiEFfyWZWvgd%2BJwqJzI6BuDVRXCP82xfwFBSlX0tAiEAx31RNSVndN5M%2FWxSAB%2FQOKo4AzrJOeu0ZkF1jxSLgaYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO7Uilsn62ypB6rM5SrcAxgumR7GcZb53vZg6PCuQC1EsF43hdAsgxGF3TXJV0wIAZSXJFEmdUhMEoEmh4ATVx%2BxoA%2FXAX%2B%2Bkero%2FTXl6zETtW5jJgdwMzIyKNmO3Ba6BkyaU18mZime7HE8Ml5jzyXYA9J4S5fjN7TulG4ar8zqaxWHESMTvQ7qHEo8W8fPAuJLLxzYTLK8oOj4a4U%2BYjS8xluMQ6vvxHBAIun%2Fp14mHnUvNVSUEOxcIjDbyriQHYPaw5xeVkpQfR%2BdRvRCN6RRC74kH%2BJiNW6DbzzAjpXmG7fnPwjduYk5nQ4A4IphEX1WBTDx3mzQCdde7EE%2F0Y7soxR1ao%2FU4id9TvT32Q%2BUgFq3fiOYDS6sIRfv0YJ0NcOP98scYeyh%2FpjPXBOXxNng16zgb0i3xrOmgniCFrlLAC9%2FGnu4fmCmB0T28d%2BYRXe%2FHkOwt4SdPA93Jo5IwoduZ7CC6p2oc%2BxsaNZMc7TF3cciQMCFr%2BQmNgYG3knwvc%2B7KEcWNVJAFpODqvh%2FrBZviMWT1ScsGyrVSOyc99%2Bzi%2FbdII0Qy4MIO5QxR5evbJ4IQGOpW%2FRJ7M7bvDPrrdoPTtQjzqyKALJytfPC5y0N8cyc%2FmyFsAB7dgJHCP0hHY5aXjLE6umnCg9VMPj509AGOqUBzOfGJJdzwM66rhgoTnX15Fn8%2FqMLgUmWxLFGDWs3NZGDoayrrxGd0isX7x67ySddVS8rw24uk1BqpNDVKAPQVnzwALZ%2BxrabDwpN8s6dz%2BMdw6nBrFGzx65T62Mu%2FyQZsE5C1nCBPTCA7gx%2BfbZUA6UNmZ6TBtXdT7Q2OQGz1xMjlD2cVRVms3RxS4JGNcwlQVCPygPG6kF1qO%2B%2FijqiEOLNrf8h&X-Amz-Signature=d724733a25545753f6dbd54f31a7a954a0c80bcd83c462ec87b91d5617306dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFJHH33%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjepiEFfyWZWvgd%2BJwqJzI6BuDVRXCP82xfwFBSlX0tAiEAx31RNSVndN5M%2FWxSAB%2FQOKo4AzrJOeu0ZkF1jxSLgaYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO7Uilsn62ypB6rM5SrcAxgumR7GcZb53vZg6PCuQC1EsF43hdAsgxGF3TXJV0wIAZSXJFEmdUhMEoEmh4ATVx%2BxoA%2FXAX%2B%2Bkero%2FTXl6zETtW5jJgdwMzIyKNmO3Ba6BkyaU18mZime7HE8Ml5jzyXYA9J4S5fjN7TulG4ar8zqaxWHESMTvQ7qHEo8W8fPAuJLLxzYTLK8oOj4a4U%2BYjS8xluMQ6vvxHBAIun%2Fp14mHnUvNVSUEOxcIjDbyriQHYPaw5xeVkpQfR%2BdRvRCN6RRC74kH%2BJiNW6DbzzAjpXmG7fnPwjduYk5nQ4A4IphEX1WBTDx3mzQCdde7EE%2F0Y7soxR1ao%2FU4id9TvT32Q%2BUgFq3fiOYDS6sIRfv0YJ0NcOP98scYeyh%2FpjPXBOXxNng16zgb0i3xrOmgniCFrlLAC9%2FGnu4fmCmB0T28d%2BYRXe%2FHkOwt4SdPA93Jo5IwoduZ7CC6p2oc%2BxsaNZMc7TF3cciQMCFr%2BQmNgYG3knwvc%2B7KEcWNVJAFpODqvh%2FrBZviMWT1ScsGyrVSOyc99%2Bzi%2FbdII0Qy4MIO5QxR5evbJ4IQGOpW%2FRJ7M7bvDPrrdoPTtQjzqyKALJytfPC5y0N8cyc%2FmyFsAB7dgJHCP0hHY5aXjLE6umnCg9VMPj509AGOqUBzOfGJJdzwM66rhgoTnX15Fn8%2FqMLgUmWxLFGDWs3NZGDoayrrxGd0isX7x67ySddVS8rw24uk1BqpNDVKAPQVnzwALZ%2BxrabDwpN8s6dz%2BMdw6nBrFGzx65T62Mu%2FyQZsE5C1nCBPTCA7gx%2BfbZUA6UNmZ6TBtXdT7Q2OQGz1xMjlD2cVRVms3RxS4JGNcwlQVCPygPG6kF1qO%2B%2FijqiEOLNrf8h&X-Amz-Signature=0db9d12818ff7a6cc66c192c7b93e9a41ba431ea16ce5535c573d0dad791fdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFJHH33%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjepiEFfyWZWvgd%2BJwqJzI6BuDVRXCP82xfwFBSlX0tAiEAx31RNSVndN5M%2FWxSAB%2FQOKo4AzrJOeu0ZkF1jxSLgaYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO7Uilsn62ypB6rM5SrcAxgumR7GcZb53vZg6PCuQC1EsF43hdAsgxGF3TXJV0wIAZSXJFEmdUhMEoEmh4ATVx%2BxoA%2FXAX%2B%2Bkero%2FTXl6zETtW5jJgdwMzIyKNmO3Ba6BkyaU18mZime7HE8Ml5jzyXYA9J4S5fjN7TulG4ar8zqaxWHESMTvQ7qHEo8W8fPAuJLLxzYTLK8oOj4a4U%2BYjS8xluMQ6vvxHBAIun%2Fp14mHnUvNVSUEOxcIjDbyriQHYPaw5xeVkpQfR%2BdRvRCN6RRC74kH%2BJiNW6DbzzAjpXmG7fnPwjduYk5nQ4A4IphEX1WBTDx3mzQCdde7EE%2F0Y7soxR1ao%2FU4id9TvT32Q%2BUgFq3fiOYDS6sIRfv0YJ0NcOP98scYeyh%2FpjPXBOXxNng16zgb0i3xrOmgniCFrlLAC9%2FGnu4fmCmB0T28d%2BYRXe%2FHkOwt4SdPA93Jo5IwoduZ7CC6p2oc%2BxsaNZMc7TF3cciQMCFr%2BQmNgYG3knwvc%2B7KEcWNVJAFpODqvh%2FrBZviMWT1ScsGyrVSOyc99%2Bzi%2FbdII0Qy4MIO5QxR5evbJ4IQGOpW%2FRJ7M7bvDPrrdoPTtQjzqyKALJytfPC5y0N8cyc%2FmyFsAB7dgJHCP0hHY5aXjLE6umnCg9VMPj509AGOqUBzOfGJJdzwM66rhgoTnX15Fn8%2FqMLgUmWxLFGDWs3NZGDoayrrxGd0isX7x67ySddVS8rw24uk1BqpNDVKAPQVnzwALZ%2BxrabDwpN8s6dz%2BMdw6nBrFGzx65T62Mu%2FyQZsE5C1nCBPTCA7gx%2BfbZUA6UNmZ6TBtXdT7Q2OQGz1xMjlD2cVRVms3RxS4JGNcwlQVCPygPG6kF1qO%2B%2FijqiEOLNrf8h&X-Amz-Signature=6507df772348bb7d160da406f7609ad4edbf3cfe50579debfd59c9668f4c216e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657RRCRUY%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKxzuQV1nt6o91IHUVisi%2BLB8YqL6Vom7z%2BQaLC%2FOZPgIgEmnkOLgpYmUlLf55EtSfUND93A5VjqGc8HTzNgVFejUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGlFulkjGmclN2VedCrcA0RmIx72tVpBNQT%2FRls%2BLCXbcy1NndtbCEqd%2ByUWzYa4YGRRPvTUDIs441ZwcDbLKNMtk2MSUbMdKzdC93N4RV4gqFhQsPZnN65GI6yx7Iew9cdHdjdQvsaN1%2BvpBsJbHUii2p87N0z07xjMrGTpK4fznOJm0O%2B8l%2FqBzpxIZQh8yR2xaaPYqjKeilxE3h7PFnXiEGsgpx0eeqw5bh%2Bv94Hg1yDoOVThkhrcls0HGl%2FQ0XgBpfxC03yrclkAJE7TWcHWxo3UbTRzJgVXl5CuBndBSHZr0rR7N4LMfGXbdIzwA6F2Oat76u55KuK5BqgNvyR6dgT8pxlY8C8m1gH%2Bb4gZ%2FOVlMAAyWMVdd%2FdXyuBuEVcO45IPfKqZrvocx%2BH3EHSUii8Ox%2FpRS2vUv5JO6anGxHiVBddbqnNCKtmHP446ypyYa1ZFwfgRFRVNMAmfFODeVBvbOG7jSo08U%2Bne%2F%2FA39ahtulB1mcmFb6h0HUNSLa75oOKjNMoNH1jzyD4KwfE7DPVyVedRuR9IweHW4ZCWuzwFT%2FX8oxaWQLO5MJr8zVANbSlYfEP%2FbWo7baJ10lgKdnCekyO5J6uyAbgYrBeNHuwBaJ3colI8Yha6LMjE8gi1bOXfFtnnSoIBMMH409AGOqUBCB62ifbDbCWWstj%2BOqeOQaoiq%2ByvAWc6r0l2eWPExgLL6b1rZAT45AUHMAu4xIQm8ng6nDIIAjfnnPzc%2B2oMxcu1I3aSPuKaa%2FDVZpiQJ7j8awhD314635mnS%2FE7G%2FhkSdEDLVJ%2B0fuZ64Zn8vag0%2FFV8O4YtPmmZU7idJMIUvwy6VOKjdryqrIIYWujtNEG4ffWkWf6QpZ2p9CMILwISeChOyBd&X-Amz-Signature=3deedb5efea1bec05d27a7e45809ffe0b92ad4ac499ab56fd7db1e9b90837c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=3ebc550670768fe51a7cba62212b84bff644f327aad740b8aac4a3b2be41954d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFJHH33%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjepiEFfyWZWvgd%2BJwqJzI6BuDVRXCP82xfwFBSlX0tAiEAx31RNSVndN5M%2FWxSAB%2FQOKo4AzrJOeu0ZkF1jxSLgaYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO7Uilsn62ypB6rM5SrcAxgumR7GcZb53vZg6PCuQC1EsF43hdAsgxGF3TXJV0wIAZSXJFEmdUhMEoEmh4ATVx%2BxoA%2FXAX%2B%2Bkero%2FTXl6zETtW5jJgdwMzIyKNmO3Ba6BkyaU18mZime7HE8Ml5jzyXYA9J4S5fjN7TulG4ar8zqaxWHESMTvQ7qHEo8W8fPAuJLLxzYTLK8oOj4a4U%2BYjS8xluMQ6vvxHBAIun%2Fp14mHnUvNVSUEOxcIjDbyriQHYPaw5xeVkpQfR%2BdRvRCN6RRC74kH%2BJiNW6DbzzAjpXmG7fnPwjduYk5nQ4A4IphEX1WBTDx3mzQCdde7EE%2F0Y7soxR1ao%2FU4id9TvT32Q%2BUgFq3fiOYDS6sIRfv0YJ0NcOP98scYeyh%2FpjPXBOXxNng16zgb0i3xrOmgniCFrlLAC9%2FGnu4fmCmB0T28d%2BYRXe%2FHkOwt4SdPA93Jo5IwoduZ7CC6p2oc%2BxsaNZMc7TF3cciQMCFr%2BQmNgYG3knwvc%2B7KEcWNVJAFpODqvh%2FrBZviMWT1ScsGyrVSOyc99%2Bzi%2FbdII0Qy4MIO5QxR5evbJ4IQGOpW%2FRJ7M7bvDPrrdoPTtQjzqyKALJytfPC5y0N8cyc%2FmyFsAB7dgJHCP0hHY5aXjLE6umnCg9VMPj509AGOqUBzOfGJJdzwM66rhgoTnX15Fn8%2FqMLgUmWxLFGDWs3NZGDoayrrxGd0isX7x67ySddVS8rw24uk1BqpNDVKAPQVnzwALZ%2BxrabDwpN8s6dz%2BMdw6nBrFGzx65T62Mu%2FyQZsE5C1nCBPTCA7gx%2BfbZUA6UNmZ6TBtXdT7Q2OQGz1xMjlD2cVRVms3RxS4JGNcwlQVCPygPG6kF1qO%2B%2FijqiEOLNrf8h&X-Amz-Signature=fcbce4684be53a1f811c77e3af184a8d7f2cf6495d8a0a62567b40287f77984b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
