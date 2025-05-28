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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6DBPUD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu8fChIVJuCFC8mSCywkJHkh%2BYwQMJpf2ZnlhcJxhFNAiA2%2BjzgaUlEUuIVOcV7a34oxSoLuvVnrd9wc5hi%2FZAg0ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM3eDKZx08cTOVZqkSKtwDJW27C9mEC0x3DKzPVmfUcG%2BpmO2xnyxQ50mTtrCKSQwCYBglBUMm5YYsFXPSvLT%2BiBV%2FlS4yhAXl9TqG0wfsRcH8hqGBG5jhPZyxvKgm81Nu9XX%2FmF1oNAI2ff7fMkVpTS%2BJvBsh3l8z2PFqAuYgnGAiG8OKhJ7a2vbz5RZ%2BWSH3CgKhslTFxseD2Y0cu5QqAmks5mk93XUv8r9XDMqbsmW%2BeXpcVrkei6jpnB%2Bmp7Lo3Y7ie4tP8knHMRAeSNDEVIED5i7AonFzX3vfhfYnPm1zCSyxX%2Bdx4BYHHOb2MPOUVonbXg46Sk4qXm%2BFEvjPKAGSnzhzGt6ftqiiq2wVvE8kIrRYRznMoaNQcZsRo%2FCV6yC5cf6ID41I0R5%2BcgOe5Sh%2FrRuOemo6mJBb8iic47c0zymiRSlfE6IsSKFj1sxEfFwV5W%2FEci66Mz1v8zimTcZ%2BPbC0bI5VMxrBFrvT12UfZmir3V4GnCuDAReVdIkTh8T6pAZS9wbiX3Gn1umZyQI0t%2Ba%2Fb9NXUvMCZk2MUq4YWuozD%2FzQ8h%2B3swkZ1Jbef0PdNXSZnhqPB2cZQhsQTjqW%2BoYiMUWzwKN0VUNPLPBO2EzBe3H%2FWZ95eSECWBB8O2EvNcbVw3FjDC4wwvjcwQY6pgGBx%2BZkXGzyGjyHeR%2FI5lbjuEk%2BRlwdrAdenVqVuNCbmtzNzd9YM0ctQLSewXuF8iUv3%2FFxYvuEAtDwGkB0jn8TdRHRJLgS3gz54Al%2BLfVKlTzSTmb5zSQ5eI6k2Zfkdd66W3sBEgaW5NxQ5oHS%2B%2B3GikarUMqijCSCqT6PuqpJutzhCC5jEbDYK1%2FO%2B9JMUfq8C9JqLiN6rtuOSo46mPfffLUrC0oD&X-Amz-Signature=857089462fa96c8ec4960be978ea2e435a2b1fc1fd707f9527bd16532c49ec02&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6DBPUD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu8fChIVJuCFC8mSCywkJHkh%2BYwQMJpf2ZnlhcJxhFNAiA2%2BjzgaUlEUuIVOcV7a34oxSoLuvVnrd9wc5hi%2FZAg0ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM3eDKZx08cTOVZqkSKtwDJW27C9mEC0x3DKzPVmfUcG%2BpmO2xnyxQ50mTtrCKSQwCYBglBUMm5YYsFXPSvLT%2BiBV%2FlS4yhAXl9TqG0wfsRcH8hqGBG5jhPZyxvKgm81Nu9XX%2FmF1oNAI2ff7fMkVpTS%2BJvBsh3l8z2PFqAuYgnGAiG8OKhJ7a2vbz5RZ%2BWSH3CgKhslTFxseD2Y0cu5QqAmks5mk93XUv8r9XDMqbsmW%2BeXpcVrkei6jpnB%2Bmp7Lo3Y7ie4tP8knHMRAeSNDEVIED5i7AonFzX3vfhfYnPm1zCSyxX%2Bdx4BYHHOb2MPOUVonbXg46Sk4qXm%2BFEvjPKAGSnzhzGt6ftqiiq2wVvE8kIrRYRznMoaNQcZsRo%2FCV6yC5cf6ID41I0R5%2BcgOe5Sh%2FrRuOemo6mJBb8iic47c0zymiRSlfE6IsSKFj1sxEfFwV5W%2FEci66Mz1v8zimTcZ%2BPbC0bI5VMxrBFrvT12UfZmir3V4GnCuDAReVdIkTh8T6pAZS9wbiX3Gn1umZyQI0t%2Ba%2Fb9NXUvMCZk2MUq4YWuozD%2FzQ8h%2B3swkZ1Jbef0PdNXSZnhqPB2cZQhsQTjqW%2BoYiMUWzwKN0VUNPLPBO2EzBe3H%2FWZ95eSECWBB8O2EvNcbVw3FjDC4wwvjcwQY6pgGBx%2BZkXGzyGjyHeR%2FI5lbjuEk%2BRlwdrAdenVqVuNCbmtzNzd9YM0ctQLSewXuF8iUv3%2FFxYvuEAtDwGkB0jn8TdRHRJLgS3gz54Al%2BLfVKlTzSTmb5zSQ5eI6k2Zfkdd66W3sBEgaW5NxQ5oHS%2B%2B3GikarUMqijCSCqT6PuqpJutzhCC5jEbDYK1%2FO%2B9JMUfq8C9JqLiN6rtuOSo46mPfffLUrC0oD&X-Amz-Signature=3678cf10d462cf461a7309f31a99625c8234ee40367d7b40b2f40cfbbd6dc4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6DBPUD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu8fChIVJuCFC8mSCywkJHkh%2BYwQMJpf2ZnlhcJxhFNAiA2%2BjzgaUlEUuIVOcV7a34oxSoLuvVnrd9wc5hi%2FZAg0ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM3eDKZx08cTOVZqkSKtwDJW27C9mEC0x3DKzPVmfUcG%2BpmO2xnyxQ50mTtrCKSQwCYBglBUMm5YYsFXPSvLT%2BiBV%2FlS4yhAXl9TqG0wfsRcH8hqGBG5jhPZyxvKgm81Nu9XX%2FmF1oNAI2ff7fMkVpTS%2BJvBsh3l8z2PFqAuYgnGAiG8OKhJ7a2vbz5RZ%2BWSH3CgKhslTFxseD2Y0cu5QqAmks5mk93XUv8r9XDMqbsmW%2BeXpcVrkei6jpnB%2Bmp7Lo3Y7ie4tP8knHMRAeSNDEVIED5i7AonFzX3vfhfYnPm1zCSyxX%2Bdx4BYHHOb2MPOUVonbXg46Sk4qXm%2BFEvjPKAGSnzhzGt6ftqiiq2wVvE8kIrRYRznMoaNQcZsRo%2FCV6yC5cf6ID41I0R5%2BcgOe5Sh%2FrRuOemo6mJBb8iic47c0zymiRSlfE6IsSKFj1sxEfFwV5W%2FEci66Mz1v8zimTcZ%2BPbC0bI5VMxrBFrvT12UfZmir3V4GnCuDAReVdIkTh8T6pAZS9wbiX3Gn1umZyQI0t%2Ba%2Fb9NXUvMCZk2MUq4YWuozD%2FzQ8h%2B3swkZ1Jbef0PdNXSZnhqPB2cZQhsQTjqW%2BoYiMUWzwKN0VUNPLPBO2EzBe3H%2FWZ95eSECWBB8O2EvNcbVw3FjDC4wwvjcwQY6pgGBx%2BZkXGzyGjyHeR%2FI5lbjuEk%2BRlwdrAdenVqVuNCbmtzNzd9YM0ctQLSewXuF8iUv3%2FFxYvuEAtDwGkB0jn8TdRHRJLgS3gz54Al%2BLfVKlTzSTmb5zSQ5eI6k2Zfkdd66W3sBEgaW5NxQ5oHS%2B%2B3GikarUMqijCSCqT6PuqpJutzhCC5jEbDYK1%2FO%2B9JMUfq8C9JqLiN6rtuOSo46mPfffLUrC0oD&X-Amz-Signature=c2a035e0f3821091b8d1593190f4b6b41ce185978dadfb3ba1b3f9a8dbfe899d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7SA4UJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9CmziHPPP2rDqMgoLvnw%2BiveEdNhmfelD8gwbHGCGyQIgQajJgN7IY0Uo1QchGVD8c4Hb%2Felbl%2BrcKEyq2Hm%2FY4kq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHPznyYMaS6UYwi%2FmSrcA8RzNDUlJsr7PmMHQZf6DVPv9hbS9O6dJYZ9pbnntH713jN5k5dYGEHT4H92mHOJRRbgvoZx7bbgJM%2Bzy4XqdGzqcOo%2Bufm%2FXRpywXI%2FPr2Zm4B29SOflCmMfe16gtsLIpfZPHuB5eqoKPrHRH5gZj3wZQUp1DocMf8C%2BA4uc8bxQKeSTpfG12goY2yGaPSvA5L1fy%2BkDatoWCiQcuHCa38sb2%2FqvbPtvFHACDX%2FSKlTyzcD6e8pxmCl6fSl1GDgyYGkIcSXCPLpixRcUupLJziVHZldDDbkRJltreAn%2FGDIFnHhlKu%2BbuTLU3tU%2BSoPB9zl2byXBhVcU4rUU%2F7AFAFrPakghJrb69vz%2BxBO8ri6g39ghxElhlFB8YoMgOzglc3MqY0hsZwCPSrxiBEUIKDw1fH3hjuJCBspgyRlrboLf1oLVJzdq4pj40uSLRsHs4EIltVBw5G%2FBK7u2wfeXkIBTwFXEwGqdraSqEXJrbIE2V5T3ig4SOLUKQWHULVQ54VifH0zD4Ffjy0NQumjCFMFMyG4ghgj00%2FnTtfuPzGV%2FklPUsqXJfs5x9Q25UxPJ7q5qoyDCkVyadCDSTaXUqoWmnRgWeBkFwzqnxCLK9h9s%2BuZRPGy7Mc50Yx%2FMJG13cEGOqUBYfrLBDzo13mvJI1xu2QBn5BtxCEJdqIga4g%2BdWVVO7cVHb4Q%2BdmcwfEa9CxTZ83uA4vO3YwQv4bPfZ8O%2FqquTB97CcEowWxHoggnmpTfGTcpql99DJH8cdxoQ1EhIC4HG7vgoPbFhJGkbPBLqX5upau5EyNOLhA00z01YY%2F1WTVzxTqGnxdUhhni6RfDRO%2BJ%2FJUfMDLqxLCQzN6vgk1YSf%2FNiGKp&X-Amz-Signature=4d755829aada7f99c81dbe53a1b3416bb87b440fd7b085c72356f973cd111271&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665454XEAA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECxs6AGUmq4yI33VQH%2FwxKYwLs2dP5rwp0BPiYV3867AiADlLlCsoHyv0q7bIXJn5kyZGCVFKi7cEAdRss08OkbNyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMCnWTlumMw7UyT5ySKtwD%2FZ5l9qPLuoqUsiSH%2FVHrH2Pt4Cnwgf6WaueGFZpnvMJk3tEt4iUHgsE8lF4jG%2FR6MeNi6sZKvDgp6PJpZfMb0uNepEBj4SqYJmSYwQv4hHhhnTBDS8Rp4RDo%2BwiO52etC6E7WFaolBvRgZWkAaaIhOQ%2BxJ5u3Gi%2F71xC0GiFwmTy6GeO12MEc%2BuU%2Fm0g0zh3AdxUoR7ACHn6uIvmY6Dveqey7bkKaoZG5hKXwXcEohFWZLJLdoQNAd%2B3l5AyHqhdMTE9XRX9ZdluDUifbdy6IoJOOkalMgP8I27ZxHK1TXoZsE3742VEKS3rNe8tNrOS6w6X2MIUobxy%2Bz4M0DD8x1lndSquu3GMEQfqS2NE2yZhJhP9wxMh5NuLOb4DZYjgmVNj86IzvdX9pA4Gc%2BSy1pNlKORZTSp78kocIGiQ%2F4tZVHuRnyMnaWTWzGke%2F00JDdwaUauF1bryltgbhAxJERhKLIsAorkJvW77LQFIxeyt24fS%2F2Vp4Wabl1imemTX9hJutt4rJCoxxAST6Znb36bK1wbJybc1MNr6Ebck4Bk%2F74aNYF1bsrws3IjYhHiC9awoCcae2TiEJTqn7USyO9GiDMiSbABFEXTwNJ1EIvzxaeTaTwBJMO2eOBkwpPjcwQY6pgHVSg1vEt4IMw5KvMzuKHlbAy2KAmd3aSQPgl9kx3ilyKLgAwa8oBvlYtqp7KZaLFJ6Glil8eaMsIG8ewM0YYb9wlOc0UN8J4eFA%2Fwr01kwbpNKdmo3YoQoQaE2g4HU4Dxha4bYb9FOQFaopS78V%2F2uYuZKdRA90xXH8xgT%2F9paI1Xea2S17zRbNd4AiTSDK6tjQvnTxDXDuzETHfZ2tc0X78d5bZCW&X-Amz-Signature=36024d2b0cec3da1f2a39a15d285998b6bf5e7645a87ffdd27acc9519a6d45d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6DBPUD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu8fChIVJuCFC8mSCywkJHkh%2BYwQMJpf2ZnlhcJxhFNAiA2%2BjzgaUlEUuIVOcV7a34oxSoLuvVnrd9wc5hi%2FZAg0ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM3eDKZx08cTOVZqkSKtwDJW27C9mEC0x3DKzPVmfUcG%2BpmO2xnyxQ50mTtrCKSQwCYBglBUMm5YYsFXPSvLT%2BiBV%2FlS4yhAXl9TqG0wfsRcH8hqGBG5jhPZyxvKgm81Nu9XX%2FmF1oNAI2ff7fMkVpTS%2BJvBsh3l8z2PFqAuYgnGAiG8OKhJ7a2vbz5RZ%2BWSH3CgKhslTFxseD2Y0cu5QqAmks5mk93XUv8r9XDMqbsmW%2BeXpcVrkei6jpnB%2Bmp7Lo3Y7ie4tP8knHMRAeSNDEVIED5i7AonFzX3vfhfYnPm1zCSyxX%2Bdx4BYHHOb2MPOUVonbXg46Sk4qXm%2BFEvjPKAGSnzhzGt6ftqiiq2wVvE8kIrRYRznMoaNQcZsRo%2FCV6yC5cf6ID41I0R5%2BcgOe5Sh%2FrRuOemo6mJBb8iic47c0zymiRSlfE6IsSKFj1sxEfFwV5W%2FEci66Mz1v8zimTcZ%2BPbC0bI5VMxrBFrvT12UfZmir3V4GnCuDAReVdIkTh8T6pAZS9wbiX3Gn1umZyQI0t%2Ba%2Fb9NXUvMCZk2MUq4YWuozD%2FzQ8h%2B3swkZ1Jbef0PdNXSZnhqPB2cZQhsQTjqW%2BoYiMUWzwKN0VUNPLPBO2EzBe3H%2FWZ95eSECWBB8O2EvNcbVw3FjDC4wwvjcwQY6pgGBx%2BZkXGzyGjyHeR%2FI5lbjuEk%2BRlwdrAdenVqVuNCbmtzNzd9YM0ctQLSewXuF8iUv3%2FFxYvuEAtDwGkB0jn8TdRHRJLgS3gz54Al%2BLfVKlTzSTmb5zSQ5eI6k2Zfkdd66W3sBEgaW5NxQ5oHS%2B%2B3GikarUMqijCSCqT6PuqpJutzhCC5jEbDYK1%2FO%2B9JMUfq8C9JqLiN6rtuOSo46mPfffLUrC0oD&X-Amz-Signature=f57e79e05cee41fdb74e704c6a9cdd954933a56350dbbdd7d0f989b0967236c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
