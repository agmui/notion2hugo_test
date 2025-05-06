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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5FUNW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlM48QXhCjTdBR0tgQvfcpAV%2FJFrX%2B%2FVYhZJK%2FYPxcKAiAxGf0EJYIuKFXFJJAYsdOeRLEHLLzoMdq27SGcfPvqdCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBWmdGtsBokQdrmzVKtwDUSgL8rE73Teg9drDOPFFlXSqndDpIBcm6XBYMhN8tZOFVVugDONzasLwMB8RjqYKRvvRc5eJph4mOCWtZbD4bT8RdGo4NqaszjQjpeAVcVwLd6Nyq7Gk12Vc6Rp%2BMaVk5i0CCkKMUC8y97Y0OKm6zYz%2BWzbOoiyquQlFdL5ReTE50GA1Yfii3QLzAdXBfjOhm9Vft21piNmM2B0xw18sEHbxjMW%2BEyhkNYpyo3gU9ycjC0%2FOJpnxiqgiQHhgr720nXYCF9Hc18414Lu4D8bdr3Bx1MTHOXREa%2B9hJu2BBOWjoon2bguluYbg8yI88T6SW%2Fml88zi3%2BcrADi80J0a%2F0Ty%2FJ5W54mxnHDM4RXyo%2FVsNgmPwgMH%2F8i1ApInHGalmnBiHj7JDH5ESF95Dx9g%2FOsweYlbw9HS18jhXea4oA1%2FV%2B8aKWAuL43KCwIC3iDnWsSqmUzGxpSnYUHSJVbSmT%2FTso6qY%2FZxILMMpqF5qh%2F%2Bu7a93on6G3nbIjuzNjaejmbnyOmuWjVlAf5Z3aYHgLY4qns8mIvHTgXZ%2Fbwl4kaZpRouhgLl1aqlv0Ag2edB7zdGGO2PPch%2Boi9rKeWuu4jZWWsQRFLUzwnzTr%2F4mnWoO9tgBPR5zCTxYx0w5crlwAY6pgFSHh4KYvghyJvJYvGBHDU5J9nqAeUOZV40zp9psCc%2BFhSKPm6Tpoi4OToai1bkmVfAvmhHJeAegqHfpyzvzjtyITv%2FlZVMBoYvtjD7kKu5pjtMcv7k3yIDgp9kS2UM6yVZY7NJ0AR3TK4RYvwL23k2vCDLy6ngcz66M3fU3u%2B8m1Lp4Yq9O6bBUw9vyqs7%2FdSZ1Umalt2gsXrujSYLLBJNK%2F7O3vK0&X-Amz-Signature=6b81b4c45a50f62f503b5d6ebdba60d33b945d48939debfb396fe8c2d12fff7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5FUNW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlM48QXhCjTdBR0tgQvfcpAV%2FJFrX%2B%2FVYhZJK%2FYPxcKAiAxGf0EJYIuKFXFJJAYsdOeRLEHLLzoMdq27SGcfPvqdCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBWmdGtsBokQdrmzVKtwDUSgL8rE73Teg9drDOPFFlXSqndDpIBcm6XBYMhN8tZOFVVugDONzasLwMB8RjqYKRvvRc5eJph4mOCWtZbD4bT8RdGo4NqaszjQjpeAVcVwLd6Nyq7Gk12Vc6Rp%2BMaVk5i0CCkKMUC8y97Y0OKm6zYz%2BWzbOoiyquQlFdL5ReTE50GA1Yfii3QLzAdXBfjOhm9Vft21piNmM2B0xw18sEHbxjMW%2BEyhkNYpyo3gU9ycjC0%2FOJpnxiqgiQHhgr720nXYCF9Hc18414Lu4D8bdr3Bx1MTHOXREa%2B9hJu2BBOWjoon2bguluYbg8yI88T6SW%2Fml88zi3%2BcrADi80J0a%2F0Ty%2FJ5W54mxnHDM4RXyo%2FVsNgmPwgMH%2F8i1ApInHGalmnBiHj7JDH5ESF95Dx9g%2FOsweYlbw9HS18jhXea4oA1%2FV%2B8aKWAuL43KCwIC3iDnWsSqmUzGxpSnYUHSJVbSmT%2FTso6qY%2FZxILMMpqF5qh%2F%2Bu7a93on6G3nbIjuzNjaejmbnyOmuWjVlAf5Z3aYHgLY4qns8mIvHTgXZ%2Fbwl4kaZpRouhgLl1aqlv0Ag2edB7zdGGO2PPch%2Boi9rKeWuu4jZWWsQRFLUzwnzTr%2F4mnWoO9tgBPR5zCTxYx0w5crlwAY6pgFSHh4KYvghyJvJYvGBHDU5J9nqAeUOZV40zp9psCc%2BFhSKPm6Tpoi4OToai1bkmVfAvmhHJeAegqHfpyzvzjtyITv%2FlZVMBoYvtjD7kKu5pjtMcv7k3yIDgp9kS2UM6yVZY7NJ0AR3TK4RYvwL23k2vCDLy6ngcz66M3fU3u%2B8m1Lp4Yq9O6bBUw9vyqs7%2FdSZ1Umalt2gsXrujSYLLBJNK%2F7O3vK0&X-Amz-Signature=bb8438fc4caf221ee13a1edc96086bb6b1bd9292f8837b9b32f1239e742b10c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5FUNW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlM48QXhCjTdBR0tgQvfcpAV%2FJFrX%2B%2FVYhZJK%2FYPxcKAiAxGf0EJYIuKFXFJJAYsdOeRLEHLLzoMdq27SGcfPvqdCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBWmdGtsBokQdrmzVKtwDUSgL8rE73Teg9drDOPFFlXSqndDpIBcm6XBYMhN8tZOFVVugDONzasLwMB8RjqYKRvvRc5eJph4mOCWtZbD4bT8RdGo4NqaszjQjpeAVcVwLd6Nyq7Gk12Vc6Rp%2BMaVk5i0CCkKMUC8y97Y0OKm6zYz%2BWzbOoiyquQlFdL5ReTE50GA1Yfii3QLzAdXBfjOhm9Vft21piNmM2B0xw18sEHbxjMW%2BEyhkNYpyo3gU9ycjC0%2FOJpnxiqgiQHhgr720nXYCF9Hc18414Lu4D8bdr3Bx1MTHOXREa%2B9hJu2BBOWjoon2bguluYbg8yI88T6SW%2Fml88zi3%2BcrADi80J0a%2F0Ty%2FJ5W54mxnHDM4RXyo%2FVsNgmPwgMH%2F8i1ApInHGalmnBiHj7JDH5ESF95Dx9g%2FOsweYlbw9HS18jhXea4oA1%2FV%2B8aKWAuL43KCwIC3iDnWsSqmUzGxpSnYUHSJVbSmT%2FTso6qY%2FZxILMMpqF5qh%2F%2Bu7a93on6G3nbIjuzNjaejmbnyOmuWjVlAf5Z3aYHgLY4qns8mIvHTgXZ%2Fbwl4kaZpRouhgLl1aqlv0Ag2edB7zdGGO2PPch%2Boi9rKeWuu4jZWWsQRFLUzwnzTr%2F4mnWoO9tgBPR5zCTxYx0w5crlwAY6pgFSHh4KYvghyJvJYvGBHDU5J9nqAeUOZV40zp9psCc%2BFhSKPm6Tpoi4OToai1bkmVfAvmhHJeAegqHfpyzvzjtyITv%2FlZVMBoYvtjD7kKu5pjtMcv7k3yIDgp9kS2UM6yVZY7NJ0AR3TK4RYvwL23k2vCDLy6ngcz66M3fU3u%2B8m1Lp4Yq9O6bBUw9vyqs7%2FdSZ1Umalt2gsXrujSYLLBJNK%2F7O3vK0&X-Amz-Signature=78c9180d4b462c2e04142ec4a34498d2cef4bd733561467b3e89c5758916c79d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AYDW2R%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO0Q5rx0GY%2BzP0wg3fH%2FvMCKGPrN2pTih0bPoYW9pSkQIgUYGqlzVJ%2FQuvSoTaBkpVk%2F5fm5C2ma0hnNL6aoSzJjwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDH3cLufdhuPpX7%2BIlCrcAzkXzo22IH6jV1wrQu2QsZ%2BBMEVdDfIwNRamjHtG5c5cQ6996gy%2Byg2wmZ8%2FDwmhfc92BolKv86HARinFSPKQMEUagqlrOfLZeyIaEz%2FGYE5hvW0Pa%2F3%2BDejYPp2Kf5Drtbw4ofhnmdM50T4GXnYvYjRa4BDIGlcXeYTcGVC%2BeMMmnohBhcg6pSHBa%2BRDbljRX1%2BG7r3ejMHDH6r4mlnuZ6XSsqAMrHjMXvufcD9DzE5bifIiR%2Fz%2FE3zH1B2lSm354UZKLbYMhBsMds02T0qCVVtvjgpa7SBTnUd%2F8HWvt9b6srRqM%2FpNOAeXnELyqS0nVRI8tIW2te%2FLAa9i9%2FlJNavKCT547cDK17z0h%2Bu3p8GbSr9Iu82eca5ldL%2F13AEFKSjuXsP9OtyYU4z1kee5UanfKN2aoZIlz%2BLT8eQgTr%2BTJObcv%2BuwQ8%2BLULiDBo25uejJ1TIDCtQ3%2BOrWZtT%2FxR3gq1eqdAvFVn5Grh%2F7KJwlbv5LnX8vOFkB4rBlHYik1QHNULu3a2JWnSOmkIFj8Thoj1RZxf5SrwdlrE0y0SXPwwBCqYUP%2Fqah6zOUf8EB%2BetuQJyXKnvBjbWg95Blcte3OOG68QYGADykMkc9mwCO4OhVYw82l1z2oTnMOPK5cAGOqUBlVQKXM2X0Usqs10tEAK5JBIUjFvkaoC%2Bq4UeoiHhN8kzxHeJl%2FAG%2Fj%2BV9U8I7kcymeNKTM8sslABG%2FT2f9tf16wmKU8v1ZOReKfgdgWLzfIDHBREHVLbRpS%2FeU5QdTVDbMo5Z7keleU%2F3GozMtGs6g8aexulKVRnxc6RHh7Flxden89F%2BAprDHUanlplBV9%2FRNflhICqceRek9mpkkBi11KTumNu&X-Amz-Signature=e1984fbce73808f37975215e145cc646c815c8026150d47c5058cb20c1eed80d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L76A5TS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQW%2FuP9g0Dz9fnxj4UBrjZpKKQe2mMDWIN%2BthxJJK66AiEA0YYm8gVUAbKtCJ%2BKTv0gJ2RPWXUTCbfP2hoXKOZ1Y9Uq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBEfMg7KgqFeQRCCAyrcAyIFwMP%2BlE3S0JsbVqeZ%2BvSoO8YzxmZ3hKogQ0ZwksxXGzrHS9hqOZ2qep47G2PympME25GGv9Pmfff16DA79dk2DqpYnXsfQzpEOfq1umM96rH6AAZreLchYD%2BnUnIE4aBoYilTDIlxVIKlh5udcBvRzp2vUynOYc14WXLjYPxh0NWuhwqpzyGhCveMUD1rwlQnMgl32dc9wGgDSlppiLFBsJ%2BJYJph%2Fu3y2G9UetF%2FdkBVl%2FggpTEyvr%2BwLEJfxSWibfRhQCzNbq14I5uo6Ud8zuqoEHUcS4RwaAXh5q4BLGn8hLvF3kUCuKQgWYS166c%2FuImcqM6GSkVwGUk3n4uvQXT210g3ZFhVy6tPcyIyKaUhzwgaApH6F2Vq%2FB5e1Hpo17yFPRCpK0ZP9qzeejGjV61FjC1BnKGIjkUzNyWdBQa%2BqO9J%2B8t6q3l3XB5i9BpR8xlhduPcsaXi%2BoV6ijqHVXjPJj%2B%2BgEPLPQ45mhmxzz3HpCx1N9LWQVoKwIJ9vChOKCqGH3B8EbmxBxm80Qd1QS5S8Sp7g3XZw1dGyFGKU9hO2aJ%2FNbE0Rs9lDPDfOisaBds6JqLVzF%2B%2BerLdWQ2xNlt35HsClD2fCIKNNf4wRorK%2BwaoXul%2B%2FMkaMOPK5cAGOqUBvujS8PhZimNNqN%2B7HU6FA%2FvxExqo%2BjnrBcqjXd0mQP6IVgFGyyHeXDBm17rCZrfCznprDW7EoZWu1zd90t8WMPEIGkDBLTUe8LsLQzOfzr23iEHVtWgtpX37%2FqyZ4b6e105nxeYkKHSwEAimgP0pyE5RsxRDq4ixyWnPJ2WbMklVM17CR9ADLLD0G0gT%2FpnUPtp4KzJQ49qocomHLzqxdnTl7Wwj&X-Amz-Signature=fd623c297ebf6f467dd5d3922ef3c27d06497a1b2b8ad555d80b35a22f245f47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNP5FUNW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlM48QXhCjTdBR0tgQvfcpAV%2FJFrX%2B%2FVYhZJK%2FYPxcKAiAxGf0EJYIuKFXFJJAYsdOeRLEHLLzoMdq27SGcfPvqdCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBWmdGtsBokQdrmzVKtwDUSgL8rE73Teg9drDOPFFlXSqndDpIBcm6XBYMhN8tZOFVVugDONzasLwMB8RjqYKRvvRc5eJph4mOCWtZbD4bT8RdGo4NqaszjQjpeAVcVwLd6Nyq7Gk12Vc6Rp%2BMaVk5i0CCkKMUC8y97Y0OKm6zYz%2BWzbOoiyquQlFdL5ReTE50GA1Yfii3QLzAdXBfjOhm9Vft21piNmM2B0xw18sEHbxjMW%2BEyhkNYpyo3gU9ycjC0%2FOJpnxiqgiQHhgr720nXYCF9Hc18414Lu4D8bdr3Bx1MTHOXREa%2B9hJu2BBOWjoon2bguluYbg8yI88T6SW%2Fml88zi3%2BcrADi80J0a%2F0Ty%2FJ5W54mxnHDM4RXyo%2FVsNgmPwgMH%2F8i1ApInHGalmnBiHj7JDH5ESF95Dx9g%2FOsweYlbw9HS18jhXea4oA1%2FV%2B8aKWAuL43KCwIC3iDnWsSqmUzGxpSnYUHSJVbSmT%2FTso6qY%2FZxILMMpqF5qh%2F%2Bu7a93on6G3nbIjuzNjaejmbnyOmuWjVlAf5Z3aYHgLY4qns8mIvHTgXZ%2Fbwl4kaZpRouhgLl1aqlv0Ag2edB7zdGGO2PPch%2Boi9rKeWuu4jZWWsQRFLUzwnzTr%2F4mnWoO9tgBPR5zCTxYx0w5crlwAY6pgFSHh4KYvghyJvJYvGBHDU5J9nqAeUOZV40zp9psCc%2BFhSKPm6Tpoi4OToai1bkmVfAvmhHJeAegqHfpyzvzjtyITv%2FlZVMBoYvtjD7kKu5pjtMcv7k3yIDgp9kS2UM6yVZY7NJ0AR3TK4RYvwL23k2vCDLy6ngcz66M3fU3u%2B8m1Lp4Yq9O6bBUw9vyqs7%2FdSZ1Umalt2gsXrujSYLLBJNK%2F7O3vK0&X-Amz-Signature=26d5b8155c580b23318c36ce9374c6add5f789abd181044ba6aff2ee2768a77d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
