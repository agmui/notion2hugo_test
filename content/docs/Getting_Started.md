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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOFDHLB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFtvbEFP5M9DifnQUA6Tm6lYfOhrBm6ESqBkwhoalZFZAiAwb2yf%2BJPqIvEzH46w1vN76OmD76EFlmTtI2jMuVFyVyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwgg0bNOanRNO2ifJKtwDm%2B0qWkMoMp4t0l1C7eUITLExqDNWWdfUPVwYp0yESnQN2eTMFWVNzT7v18fPjWng%2FgtblI0ZldO7l1aGZPZObxSzXYyM9jiV2Dj35ioVKpDzoUEx48sy%2F04TJ5i32JsGfT6jaQPw%2FF2%2FDoILswXj7cL1f2NIC759Q1WRHbRMJ6NurOehP2c2HquIVToIZH8Koa0p73z5CPLG6lR%2BMNOlz%2BXMduODxrb4yujPMA6m1uZCZmkpdtwm6iWE4BOUreE8fj5RwZen37kBCwfj8LuhHShLR1KG%2BBN3xNn0VSqGnBID0kwJWZt25kTviLi8IgrbO0TdZfgEeV1oqnhpmkF2xGGw4GtvmDEfdIv734L1t9NZIstxSC9WF9b5wb%2FrqP6tzsDvhh3Q55YPs0XKFWzy5uKC%2FJMD1COO6GOmKittYh9wCV343tHnjxm7452Bp8AY3y2gJgW6%2FK%2FD7UVfO%2FOhLxwibNbxP%2FqTTI0mTpjdkV90Hx6jDv%2FJFtOnG%2FjwJd2TYAu9lh%2Fj7Klu7hccIWbZYovKTeAD%2FBRYa7wxFMutiCzVaAIauD0hFrRco4m%2BS3MhETbeD62xPXJxMMQF%2FVpuCtgjrcqPs2K%2FuOIEP4PbwXxJo3Hu2UtwVvAEE%2BwwvKbOvQY6pgHeE7GJCYWXtlXLisigODaNNXkbE3TEgnersv%2Bm6LqBdX2ewXGc06tJ%2FpObRYUeYiq1QfUa2BDwWTvCfqQQLRchbEdvk2LUZX%2BQ%2B9afe01GN%2B9TDpQWxOwEDMMzZ31XVtZiXwZbVrzxmufwhjxaTB3XU64ZwbbvWMNrPpGAQsQBA1TAUeCD6rXVp0eJlspaI4IWocv7%2BBB462JqqAHUXmpQhbr7wrN8&X-Amz-Signature=d14056081415ac75b23e61269c9b62e7caf6a189c52582000ee43af5ddeb6bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOFDHLB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFtvbEFP5M9DifnQUA6Tm6lYfOhrBm6ESqBkwhoalZFZAiAwb2yf%2BJPqIvEzH46w1vN76OmD76EFlmTtI2jMuVFyVyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwgg0bNOanRNO2ifJKtwDm%2B0qWkMoMp4t0l1C7eUITLExqDNWWdfUPVwYp0yESnQN2eTMFWVNzT7v18fPjWng%2FgtblI0ZldO7l1aGZPZObxSzXYyM9jiV2Dj35ioVKpDzoUEx48sy%2F04TJ5i32JsGfT6jaQPw%2FF2%2FDoILswXj7cL1f2NIC759Q1WRHbRMJ6NurOehP2c2HquIVToIZH8Koa0p73z5CPLG6lR%2BMNOlz%2BXMduODxrb4yujPMA6m1uZCZmkpdtwm6iWE4BOUreE8fj5RwZen37kBCwfj8LuhHShLR1KG%2BBN3xNn0VSqGnBID0kwJWZt25kTviLi8IgrbO0TdZfgEeV1oqnhpmkF2xGGw4GtvmDEfdIv734L1t9NZIstxSC9WF9b5wb%2FrqP6tzsDvhh3Q55YPs0XKFWzy5uKC%2FJMD1COO6GOmKittYh9wCV343tHnjxm7452Bp8AY3y2gJgW6%2FK%2FD7UVfO%2FOhLxwibNbxP%2FqTTI0mTpjdkV90Hx6jDv%2FJFtOnG%2FjwJd2TYAu9lh%2Fj7Klu7hccIWbZYovKTeAD%2FBRYa7wxFMutiCzVaAIauD0hFrRco4m%2BS3MhETbeD62xPXJxMMQF%2FVpuCtgjrcqPs2K%2FuOIEP4PbwXxJo3Hu2UtwVvAEE%2BwwvKbOvQY6pgHeE7GJCYWXtlXLisigODaNNXkbE3TEgnersv%2Bm6LqBdX2ewXGc06tJ%2FpObRYUeYiq1QfUa2BDwWTvCfqQQLRchbEdvk2LUZX%2BQ%2B9afe01GN%2B9TDpQWxOwEDMMzZ31XVtZiXwZbVrzxmufwhjxaTB3XU64ZwbbvWMNrPpGAQsQBA1TAUeCD6rXVp0eJlspaI4IWocv7%2BBB462JqqAHUXmpQhbr7wrN8&X-Amz-Signature=3459e4617d8a46a0d9a75bd85b8832eb7ba924ed1c02831b1d7bc52e2fd3140d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMS3E76O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCcdPrzuRF3S21%2FBGpgQNFjj1V0%2BqCex1kh8y9n4CmjxwIgfhvN3Rcld3JAJGFik1%2FEAuUcdTeLrJhv7DX7sWhpGcoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDELWVgkzGBirOK89QyrcAx569HRsdk32Um1ywDSgyHho%2FYHoK%2F3EKoZe92zzixsXSQnK8NJ4gE0QIuQ%2BxaxxdJVaviy%2FbEWMwEYywxxnT66e23ePGqr7SML4WKppzWbLvvG1k12fqDTk0rEWHY6dHS9EuIRSCa5Mr6T1BWUMURN1r3TXAmmKeUuFSmixZ2p6rHs9cMWSZq4oHOQYKJYMI0a1MESWW4E04UJWXxlbW2gbYkEKq2Az%2BbmVMsbfT%2Fhbvh8unat4zN0mlR1HC40mY7Ghir00jNPTdYzk%2BOUrFsdCT%2Bntyqk1wWeojDzh1EuLYA%2FTAAfWk7O6lhCgoMiDqsw8%2FOKWl3GlO9tmU0f3vk%2BQRlk9epJLtQB27isRb%2FJ%2FByxEfHDMPIY0YK%2Bl1q00V9%2BdNupLg%2BLVITJ1eEX2%2B18SFaq3rRQIuxAk3oYWXZ%2FnJIO%2FmszSSCjbb0Y7ISPKWuwUhUxhHPPzWcJUGO1cEx0wmFXBVoYNM7%2FgOjWoQGJusTkSEgohk9GnDt5%2BahL1dg3enefVinRNB0votaqCww9WUsFMpd0t8r1JY6ekrE2a9aK8k1Xo9Ff3Y8GkN%2F1%2FMDZMy9VtpnMbKXIDhVnSxHjr7zdoJcTU389wvH3suV42QVVq%2BAZa6uI9%2But%2FMJ2mzr0GOqUBIFCcH5Lp0InCblKXQueMw8E%2B72jTBRr5ih7UIIC2ueI2GFXcq5QjPQpEdEuBlKXXii5DEWLEdHeGIj84BIabPw4jP0zLW0gyXw7VHgwNcoV0l8t8ZRcYSu54DwcTyhpr0Xa0ZnpZk5KEY7PVfL%2FryXB505lbLoCEUek2%2BHcAcLZfg2Tf3Y7%2FjZ3TxJ29xTYMxUYymwkP%2BKc5J%2B0Gy2irQqvaVB1T&X-Amz-Signature=ea76cb4b6c95988be00c4e2faefd26c1de7a5be98227488b7edd0bd384e2b6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HT7HAPJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF2rz1eFH%2FD7Dlt%2FY3i06gmyvcAYqRilNRqYS66LcognAiAFK6SK9R%2Bi9Und9%2BSPo3NJ4vq0YVLXgVXdRMHXnbhqGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMhULDb7O89wXxNyRQKtwDQdks2ClVpTBiAbIKRVPYGSUomgfV4u16HHC3M4TpHBiHXRxO5Umvi3X6Zop8nHnwhwX9O2Y%2B7c1bDLoucVntdKVg8GT%2B3Hez%2F2%2FS%2B6WChRuV3CCGEfq7aSh%2FpEeW2gXWuBibsNf99%2BvHOtHjpWg6BWPyLgtqapPsX4mH0KqDrsopmcwKRsqZtlXAHx0fhOTYnqWjFHbHG2%2FS0iyZVoJ9ACCQyu5qzuECdPmGLzFjSF3MIU1k6J9e0LbfOSFZMPAQlYYu0%2F5r8BD8h8lRFEg%2F6JICLninBIoCAz4D8Qf48xCPMb5NbI0GDYPaOjyuiJLazVTXcHvc%2FUrxDdvecXs4X0NWvUz1AGtZubmKYhENMBlb93H6MgLo0Ww%2FoLhbPxBPa9tgOOCNRXRjvJnsdkRVux2mdRmfrA6XO7vouMmsi5%2Bunbo6x5OEaxFNC6nAqlmNFMMTqFMlqDII1ribqdWoWG8AHfxw%2FD%2FsnEbvSZm%2BupiL%2BzYejY3yO2F%2BjR9bFuJIWmKrxKo00VDt3PDsmepzPJPDLwQSQm3u5SIfG0pHeIG%2BWK35lnFx8B4QMz5S5qz8Y1ye4r2F30XS5w7qVJLZT0rni9CZK0mTyORwVewiHLwXqPbpNK0Q8gNt%2Fu8wrKbOvQY6pgEmrYYsNNwc7d79k0xfLVBNnAaYiDvmdv0ghfMbmIWZBCHIIw26XduivMmgaHJC%2F94GnX4e3%2F6nbnmeo7YuwoEv2d1u6T9sOFyiyFU1UPJaG1J4XBUSUm2NZmW4Gda%2Bw79YZG0zhwMIU7ANIzN78onFOsh22ujuMj0PCRRZpS8rSua8vcajU5HlygHFO%2BUpGEfm48ZdolISsXXFstupIs7BC8rsv7uS&X-Amz-Signature=882320544b24cf939d0da926b5d06028dfbe12ff3c6e6b42d24f2b4a08fa1f81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOFDHLB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFtvbEFP5M9DifnQUA6Tm6lYfOhrBm6ESqBkwhoalZFZAiAwb2yf%2BJPqIvEzH46w1vN76OmD76EFlmTtI2jMuVFyVyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwgg0bNOanRNO2ifJKtwDm%2B0qWkMoMp4t0l1C7eUITLExqDNWWdfUPVwYp0yESnQN2eTMFWVNzT7v18fPjWng%2FgtblI0ZldO7l1aGZPZObxSzXYyM9jiV2Dj35ioVKpDzoUEx48sy%2F04TJ5i32JsGfT6jaQPw%2FF2%2FDoILswXj7cL1f2NIC759Q1WRHbRMJ6NurOehP2c2HquIVToIZH8Koa0p73z5CPLG6lR%2BMNOlz%2BXMduODxrb4yujPMA6m1uZCZmkpdtwm6iWE4BOUreE8fj5RwZen37kBCwfj8LuhHShLR1KG%2BBN3xNn0VSqGnBID0kwJWZt25kTviLi8IgrbO0TdZfgEeV1oqnhpmkF2xGGw4GtvmDEfdIv734L1t9NZIstxSC9WF9b5wb%2FrqP6tzsDvhh3Q55YPs0XKFWzy5uKC%2FJMD1COO6GOmKittYh9wCV343tHnjxm7452Bp8AY3y2gJgW6%2FK%2FD7UVfO%2FOhLxwibNbxP%2FqTTI0mTpjdkV90Hx6jDv%2FJFtOnG%2FjwJd2TYAu9lh%2Fj7Klu7hccIWbZYovKTeAD%2FBRYa7wxFMutiCzVaAIauD0hFrRco4m%2BS3MhETbeD62xPXJxMMQF%2FVpuCtgjrcqPs2K%2FuOIEP4PbwXxJo3Hu2UtwVvAEE%2BwwvKbOvQY6pgHeE7GJCYWXtlXLisigODaNNXkbE3TEgnersv%2Bm6LqBdX2ewXGc06tJ%2FpObRYUeYiq1QfUa2BDwWTvCfqQQLRchbEdvk2LUZX%2BQ%2B9afe01GN%2B9TDpQWxOwEDMMzZ31XVtZiXwZbVrzxmufwhjxaTB3XU64ZwbbvWMNrPpGAQsQBA1TAUeCD6rXVp0eJlspaI4IWocv7%2BBB462JqqAHUXmpQhbr7wrN8&X-Amz-Signature=28b8dbf04cd98b8be49db226a597edae908fed0739b7f43915daa6ab3bcd778c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
