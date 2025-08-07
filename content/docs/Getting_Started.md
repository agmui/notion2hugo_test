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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOAPOL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDUdG5f%2FRPOn0lOZVwWJ0OUSAmct6XzCzOd3jgJqGySwQIhALVea%2FMs%2BO9j4oOHMj1X%2BfIeyXpHHRLRbYcsKcGbQu2jKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXcTiZYSPZc4yJrkq3AN7YUlYAPkWfaVAlKQx7%2FVm%2FN%2F80EHMMoTImvI71OLPRI0DQjUyUTCAmG5UA01wytdWSCwpy2%2F2j4eYCVy8y7czQcoj46hip6zjyCxFANmgd1lfc66wx6CB5lR65CSmexZfCAWNDvME8xJPaJ9Z2wY7RtuGjTeCrtmPdyw0AmLrR5MQRkwKWbJO5V0p3Xa%2BWaKMrVd2Fr54LmmvfuT9soZmhjy9Q%2BXMHodJuB0%2Fiyw6jQQ3ISG%2FA9fInI2NZkpsYsvwuHEAP%2FAln2XEYTLm38oDwXWKGZPtYqytgpmCxAlAsOIC%2B04%2BoYyB3OFzoYGuAc0SfLpYVmZXggTv%2Frnt5c91ePYAys5ojrRIBDIyMdjoMEIznSlFcWXJxyrKSW5TRB87dKQrrXtGtHqjEmQERjJTzObXY5RPsvXWlZxs0ovd6JFMui0ttpvme5Gbo3yDZ%2BaSJFm9UTykKj6VOeOruylTb3KEgylmcLqT40qqn5IxadrEkHkjdJNvZd2BycCYCv4wASctWFqhhMgFqpy44m%2BchR8o4p3wr1nlybgwv5ulqsUz6sIlHI92GZT4XF0KrK02%2Fm7EYMYakM1lJK0OGl1OuNCm%2F8MUcufkYHmNFemco7MpSgpBMI8GIgtS5TCIyNDEBjqkAdV5vsPPq06c6DRWujrtiyuRKUgEGiOMjIpltXM5ihOTH2YSZFf5aWStRjYp2pFPzhm3LAiTwSXhYmc0k8%2BuItknnYCn5%2FIhvQMXEkQaozl%2BBMx46fS%2BJtx4FYcIrbUDjJRTd11JKtouDwh24%2Fg%2Bwx5gnBzb1PydoDjhThl4vdzChkadVZBYWiNzMfWRu%2B9d8erRnB1iZXwfZpsGA%2BvCHTzV2Y3e&X-Amz-Signature=9cce65818ade166b5042cafa36ec4eeab71c952197f3712b0e2fad4a84bb9d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOAPOL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDUdG5f%2FRPOn0lOZVwWJ0OUSAmct6XzCzOd3jgJqGySwQIhALVea%2FMs%2BO9j4oOHMj1X%2BfIeyXpHHRLRbYcsKcGbQu2jKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXcTiZYSPZc4yJrkq3AN7YUlYAPkWfaVAlKQx7%2FVm%2FN%2F80EHMMoTImvI71OLPRI0DQjUyUTCAmG5UA01wytdWSCwpy2%2F2j4eYCVy8y7czQcoj46hip6zjyCxFANmgd1lfc66wx6CB5lR65CSmexZfCAWNDvME8xJPaJ9Z2wY7RtuGjTeCrtmPdyw0AmLrR5MQRkwKWbJO5V0p3Xa%2BWaKMrVd2Fr54LmmvfuT9soZmhjy9Q%2BXMHodJuB0%2Fiyw6jQQ3ISG%2FA9fInI2NZkpsYsvwuHEAP%2FAln2XEYTLm38oDwXWKGZPtYqytgpmCxAlAsOIC%2B04%2BoYyB3OFzoYGuAc0SfLpYVmZXggTv%2Frnt5c91ePYAys5ojrRIBDIyMdjoMEIznSlFcWXJxyrKSW5TRB87dKQrrXtGtHqjEmQERjJTzObXY5RPsvXWlZxs0ovd6JFMui0ttpvme5Gbo3yDZ%2BaSJFm9UTykKj6VOeOruylTb3KEgylmcLqT40qqn5IxadrEkHkjdJNvZd2BycCYCv4wASctWFqhhMgFqpy44m%2BchR8o4p3wr1nlybgwv5ulqsUz6sIlHI92GZT4XF0KrK02%2Fm7EYMYakM1lJK0OGl1OuNCm%2F8MUcufkYHmNFemco7MpSgpBMI8GIgtS5TCIyNDEBjqkAdV5vsPPq06c6DRWujrtiyuRKUgEGiOMjIpltXM5ihOTH2YSZFf5aWStRjYp2pFPzhm3LAiTwSXhYmc0k8%2BuItknnYCn5%2FIhvQMXEkQaozl%2BBMx46fS%2BJtx4FYcIrbUDjJRTd11JKtouDwh24%2Fg%2Bwx5gnBzb1PydoDjhThl4vdzChkadVZBYWiNzMfWRu%2B9d8erRnB1iZXwfZpsGA%2BvCHTzV2Y3e&X-Amz-Signature=331850ee2d04f708ffda3dd55c3aa6e65477727a8cb013910e28c2feb2d476e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOAPOL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDUdG5f%2FRPOn0lOZVwWJ0OUSAmct6XzCzOd3jgJqGySwQIhALVea%2FMs%2BO9j4oOHMj1X%2BfIeyXpHHRLRbYcsKcGbQu2jKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXcTiZYSPZc4yJrkq3AN7YUlYAPkWfaVAlKQx7%2FVm%2FN%2F80EHMMoTImvI71OLPRI0DQjUyUTCAmG5UA01wytdWSCwpy2%2F2j4eYCVy8y7czQcoj46hip6zjyCxFANmgd1lfc66wx6CB5lR65CSmexZfCAWNDvME8xJPaJ9Z2wY7RtuGjTeCrtmPdyw0AmLrR5MQRkwKWbJO5V0p3Xa%2BWaKMrVd2Fr54LmmvfuT9soZmhjy9Q%2BXMHodJuB0%2Fiyw6jQQ3ISG%2FA9fInI2NZkpsYsvwuHEAP%2FAln2XEYTLm38oDwXWKGZPtYqytgpmCxAlAsOIC%2B04%2BoYyB3OFzoYGuAc0SfLpYVmZXggTv%2Frnt5c91ePYAys5ojrRIBDIyMdjoMEIznSlFcWXJxyrKSW5TRB87dKQrrXtGtHqjEmQERjJTzObXY5RPsvXWlZxs0ovd6JFMui0ttpvme5Gbo3yDZ%2BaSJFm9UTykKj6VOeOruylTb3KEgylmcLqT40qqn5IxadrEkHkjdJNvZd2BycCYCv4wASctWFqhhMgFqpy44m%2BchR8o4p3wr1nlybgwv5ulqsUz6sIlHI92GZT4XF0KrK02%2Fm7EYMYakM1lJK0OGl1OuNCm%2F8MUcufkYHmNFemco7MpSgpBMI8GIgtS5TCIyNDEBjqkAdV5vsPPq06c6DRWujrtiyuRKUgEGiOMjIpltXM5ihOTH2YSZFf5aWStRjYp2pFPzhm3LAiTwSXhYmc0k8%2BuItknnYCn5%2FIhvQMXEkQaozl%2BBMx46fS%2BJtx4FYcIrbUDjJRTd11JKtouDwh24%2Fg%2Bwx5gnBzb1PydoDjhThl4vdzChkadVZBYWiNzMfWRu%2B9d8erRnB1iZXwfZpsGA%2BvCHTzV2Y3e&X-Amz-Signature=1810e0f2f0ada7ef0f3dedd6c45fd6910df05f86ee5282825aa84d243885db74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQCNCIP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG7zWTJD1kLuQwUbuztsjpdgpYqNYLDsbZ2oxZT%2FvS9vAiEAudTdUWIo5Q71FRZ8U0wluoKeC6QsD4pKVRsWCjDzo3oqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfYrYv1EskSUvyL6yrcAxXGjt4WorQc%2FumDS%2FMjCPDMte5nOrxcDrUh6uLBVHEw9eGIKXMN7ABpE7P3pzafOAbmt8sxdahqji1r7IHgQIUhh2ew8optB02gArt68Rlgl8%2FlJpw25BIzZ7L8mCgpXSogRD68tAnmfHtrPwrCU0Moak2Z%2Fj%2BTLtrSpgo4D9qrxwgyIED06CGgWuCrVuSMbqfqia5jjq9WKxbbu9Zdr9pYqOGMvBBDZIhPuyzOtBiT80fldfx2vPprGZybvKzwqCSApDwYEgJ3zYsw0xWEVAgK1xLNF4SaGv09yPQbe7CewOVOx2NGbz%2F9Ow2qr1aQDIIRcBMSmyzZDEbQCVkvA4SCSBSoRkSAUtHNWyUP%2BU1D32gbsRHn4A1Xzz6AtIs9JytjXFEc7k57x8wlIGOux3exTtpB4PrhpALZv0XWZYTAgHic%2B2MxRjfkmpJgPSJe4U3cn7%2Fwssor3%2FOyjIDmv7TBiOoAZXnk7opwH5u4unc74gSOnC8iITUpHL05i8suRzsQo%2BB2h6IXqMjLMyQ%2FDicx9Kjo5f63TaB1zYuQFDRXGPPG2nsy%2B6YhIad65Dmhv%2BQgr5RdiHSc%2BfpTal2rjpMUMqrCJfylF5%2F9wN9qWYMyCjiCUGvHIz8O%2FWHBMOrI0MQGOqUBtr2u0q%2B%2Fa8gRiOunJ8Bdanhvh0xMjaJDBVxRCPmLaxK7%2BmH4Hqi28SRCR8cbBWCWErZH8rBYnOA6QxkiUmDv0hQ1lW8bHt4iQ%2BIXs%2BNtDD0%2F8TLPLwnS0%2F9g%2BAKSxtOXtCjw%2B2Lesti%2B%2B7Tm3VxuNDZn3w%2FegDeR1gHPvd0dCEiVFa4b3bDXYQRcQ77Jv11PM61D6V5wcGXMsJ%2FFabIBIEs5ovO0&X-Amz-Signature=95c3f47bed0eca527a31e6ff202740ba2bb54a731983df62181d6c789cdcbb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPA2UXRQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDStQ0kbiEVKzTeTmVmW4g9%2Bel%2FqB%2BK2yURMuQUPea7hgIgIObp2wQgZTYD9OqF0gyN%2BtY%2BjBg2eHx6IYOyFRJdGnQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiSgh6LRu%2BKfVOfhircA1gTdqosIvESi%2BxWvogw1xkx6bGbtQC%2FV%2FaOZmy18SYX8mBvDl7aWKHLFOaM0ARIfA10Rj%2FloiFm%2BCp6kgTAOhTS2EF7BrFLiCs0Rk7gvH4jUWgei5h%2BeQnzoGgS8b6gYQ4pj9av8hFPNopeiLejOlSN4xjcCA3Gad0Qb9ZJ%2F8MxD%2FSqmjvtHdn9xAA%2BQ9Bx4fEbGuED17fvNFdjUGKuQIuf%2FMHBeFt5G8SQc9z%2FPIHDcTAuZmPlQDRHeCoOQeIZR6zgCLfTV7q4AOuXUpqlJkrTsLJH7X4xyAiXM7VLZQMu7yKS26GA2dFmI%2Bm7zh8%2F5ammQwYpFAkUeYfM%2FzPrRgfRaVEC4PzYhwSUS6NTQjqrQOvJdcEjwKpSPg%2Fv5mfxHnJd%2BVktB6HNakSQeM4JaaIhAPXzN6lPc3Ev2uC9RX5HYSw2GZ%2F3dLC9kB0nxu9ROTMreNJe8mwnu6YyzL1FJW9RI5Wq2ZpuiUOfwWbw5L0sOOWc8ZPxw51XZP%2B5weLyx1OLHGVBBII9K7z1bTUAeUWmimUBx6nVLFXKMoEIee1RiYq9zEAeq426X%2FCC6axRP8kmrY8SzV8roQ4p5%2F9%2Ffbw3ylOLJhTIk6YJKc15P5CSBC6arQIJ5m0WtiLNMOvI0MQGOqUBsg1zQAmD8DF8Z%2FpsoZvk0FyIF0VzpxFgfxzXfpQ%2BEDxe7nlCocLz5cOZwjg8lkLL2FIIngDKkICEFoypQKJXrfU4%2BY44BMPiryAuA%2FWlDJAC6RRqkT8MULQaMwEQPKQXMj0j9Q3gq%2F%2BuSOx3wyFvFEbXnROPmcOSbGCfrnT5Qi1VMYHFcCtXD%2B%2FB53OM4QAmPOnYL0S93fHb2zPEcbIAoaGr0%2F2M&X-Amz-Signature=1a8f0df39b75a9650d55384491541deb56014b33d3c8714e58fe86c78260421f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOAPOL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDUdG5f%2FRPOn0lOZVwWJ0OUSAmct6XzCzOd3jgJqGySwQIhALVea%2FMs%2BO9j4oOHMj1X%2BfIeyXpHHRLRbYcsKcGbQu2jKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUXcTiZYSPZc4yJrkq3AN7YUlYAPkWfaVAlKQx7%2FVm%2FN%2F80EHMMoTImvI71OLPRI0DQjUyUTCAmG5UA01wytdWSCwpy2%2F2j4eYCVy8y7czQcoj46hip6zjyCxFANmgd1lfc66wx6CB5lR65CSmexZfCAWNDvME8xJPaJ9Z2wY7RtuGjTeCrtmPdyw0AmLrR5MQRkwKWbJO5V0p3Xa%2BWaKMrVd2Fr54LmmvfuT9soZmhjy9Q%2BXMHodJuB0%2Fiyw6jQQ3ISG%2FA9fInI2NZkpsYsvwuHEAP%2FAln2XEYTLm38oDwXWKGZPtYqytgpmCxAlAsOIC%2B04%2BoYyB3OFzoYGuAc0SfLpYVmZXggTv%2Frnt5c91ePYAys5ojrRIBDIyMdjoMEIznSlFcWXJxyrKSW5TRB87dKQrrXtGtHqjEmQERjJTzObXY5RPsvXWlZxs0ovd6JFMui0ttpvme5Gbo3yDZ%2BaSJFm9UTykKj6VOeOruylTb3KEgylmcLqT40qqn5IxadrEkHkjdJNvZd2BycCYCv4wASctWFqhhMgFqpy44m%2BchR8o4p3wr1nlybgwv5ulqsUz6sIlHI92GZT4XF0KrK02%2Fm7EYMYakM1lJK0OGl1OuNCm%2F8MUcufkYHmNFemco7MpSgpBMI8GIgtS5TCIyNDEBjqkAdV5vsPPq06c6DRWujrtiyuRKUgEGiOMjIpltXM5ihOTH2YSZFf5aWStRjYp2pFPzhm3LAiTwSXhYmc0k8%2BuItknnYCn5%2FIhvQMXEkQaozl%2BBMx46fS%2BJtx4FYcIrbUDjJRTd11JKtouDwh24%2Fg%2Bwx5gnBzb1PydoDjhThl4vdzChkadVZBYWiNzMfWRu%2B9d8erRnB1iZXwfZpsGA%2BvCHTzV2Y3e&X-Amz-Signature=3da932e8d7ecbe2784ac074f4a81f3635ff47d71e3ec2c13bc09f38789650e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
