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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU26CM6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCTII8VHGx2vtSJc%2Fmqvlq4aUjt0fdUV5YO7A3GIYOy9wIhANaQOM6Sr1aOob23AGYQWrx%2F2HPoL78dvOolZtLqyf%2FhKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyr9rhg0dfmRDoqDwq3AOBZX7hOkwSFVht9H2y%2FcPiO3JPotTpXwInVdIT%2Fu%2FbRZmQPOnBiv04mohR50isQMOzHil31nEmu0rubwelLdGc2FWVXX9%2Bt8Ppo9ZXFQOB%2Bnb50czMgOQch6%2FQrijRzvUnVfJaR8mNvzwJ86Lt%2FuWzd8%2B8anhgrRi0gX%2BjM31PJ3cUSFxtlTJo20D92cUrn0vpoQS7yfzW4zSKO0OEvRjhCIvpT5otxpVeWSd4aVCndy7BfpVaaOytChGjZPJFi2qkt%2BHccSE5Nnep71egsqo0Zn%2FEcuwDFjAuR%2B2jz3eJtuXwqGy7v7AgKzzkmBG5zYg%2BeH5YxUuWUGSeruVviuYjT%2B0EkMio3jv6UKn2%2F7MFBvlBv23QuRzGVOm1TeCS1dYb1k3JTojtBpJjHKJsBIz4u1TAVNXywEk1ZIOw2XeCmjewXdSMvjalpwKhkBTj4os3uJaVfP1TaQuzDoSolFZM26cZrK%2BFSsXMfvR25uRiDdCBbrlckTxOGRI0O2PGbNE54X4icAH1KmBz7vDl4BKtd%2FCXfD6mYEjdqoVPheDSGj16wVMw3rVkr%2BMuosovwsU6%2B%2F1IS0GaoqFj8ELHvyFCIdbCoagPXTCVm%2BNCE2JXDRAzjvVLStTC6gsOMzDNwdnABjqkAX27c3Sk5DblR4Fn9CQsJvJ8XKqlLH7lNESHteQEM8Jsiz6AyJVQr7CDi1ZXUUq0YsdaVl6wnkEd2xd%2BPQ7dnVFtQ2gA0MJBW72w5QIQ2o7ikKUWBHsK0CORoSb2CKX%2ByD7merm4h4HmBEiBQfM7zATdxt%2BgUohkzO4mVWNabKXEuePm%2F64LiXfp%2BVEo6V9n5oeXlPKpCd52qpIue%2FIiTt%2F4m0Qu&X-Amz-Signature=26cd2a4784d00aceecbb45730804f66a515bb050916bb0649f5b77af6c8bf029&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU26CM6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCTII8VHGx2vtSJc%2Fmqvlq4aUjt0fdUV5YO7A3GIYOy9wIhANaQOM6Sr1aOob23AGYQWrx%2F2HPoL78dvOolZtLqyf%2FhKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyr9rhg0dfmRDoqDwq3AOBZX7hOkwSFVht9H2y%2FcPiO3JPotTpXwInVdIT%2Fu%2FbRZmQPOnBiv04mohR50isQMOzHil31nEmu0rubwelLdGc2FWVXX9%2Bt8Ppo9ZXFQOB%2Bnb50czMgOQch6%2FQrijRzvUnVfJaR8mNvzwJ86Lt%2FuWzd8%2B8anhgrRi0gX%2BjM31PJ3cUSFxtlTJo20D92cUrn0vpoQS7yfzW4zSKO0OEvRjhCIvpT5otxpVeWSd4aVCndy7BfpVaaOytChGjZPJFi2qkt%2BHccSE5Nnep71egsqo0Zn%2FEcuwDFjAuR%2B2jz3eJtuXwqGy7v7AgKzzkmBG5zYg%2BeH5YxUuWUGSeruVviuYjT%2B0EkMio3jv6UKn2%2F7MFBvlBv23QuRzGVOm1TeCS1dYb1k3JTojtBpJjHKJsBIz4u1TAVNXywEk1ZIOw2XeCmjewXdSMvjalpwKhkBTj4os3uJaVfP1TaQuzDoSolFZM26cZrK%2BFSsXMfvR25uRiDdCBbrlckTxOGRI0O2PGbNE54X4icAH1KmBz7vDl4BKtd%2FCXfD6mYEjdqoVPheDSGj16wVMw3rVkr%2BMuosovwsU6%2B%2F1IS0GaoqFj8ELHvyFCIdbCoagPXTCVm%2BNCE2JXDRAzjvVLStTC6gsOMzDNwdnABjqkAX27c3Sk5DblR4Fn9CQsJvJ8XKqlLH7lNESHteQEM8Jsiz6AyJVQr7CDi1ZXUUq0YsdaVl6wnkEd2xd%2BPQ7dnVFtQ2gA0MJBW72w5QIQ2o7ikKUWBHsK0CORoSb2CKX%2ByD7merm4h4HmBEiBQfM7zATdxt%2BgUohkzO4mVWNabKXEuePm%2F64LiXfp%2BVEo6V9n5oeXlPKpCd52qpIue%2FIiTt%2F4m0Qu&X-Amz-Signature=fbf81fd1c9f8039f7740a1572e13f636a6107ab2cfc68df58af6783d8ca04ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU26CM6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCTII8VHGx2vtSJc%2Fmqvlq4aUjt0fdUV5YO7A3GIYOy9wIhANaQOM6Sr1aOob23AGYQWrx%2F2HPoL78dvOolZtLqyf%2FhKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyr9rhg0dfmRDoqDwq3AOBZX7hOkwSFVht9H2y%2FcPiO3JPotTpXwInVdIT%2Fu%2FbRZmQPOnBiv04mohR50isQMOzHil31nEmu0rubwelLdGc2FWVXX9%2Bt8Ppo9ZXFQOB%2Bnb50czMgOQch6%2FQrijRzvUnVfJaR8mNvzwJ86Lt%2FuWzd8%2B8anhgrRi0gX%2BjM31PJ3cUSFxtlTJo20D92cUrn0vpoQS7yfzW4zSKO0OEvRjhCIvpT5otxpVeWSd4aVCndy7BfpVaaOytChGjZPJFi2qkt%2BHccSE5Nnep71egsqo0Zn%2FEcuwDFjAuR%2B2jz3eJtuXwqGy7v7AgKzzkmBG5zYg%2BeH5YxUuWUGSeruVviuYjT%2B0EkMio3jv6UKn2%2F7MFBvlBv23QuRzGVOm1TeCS1dYb1k3JTojtBpJjHKJsBIz4u1TAVNXywEk1ZIOw2XeCmjewXdSMvjalpwKhkBTj4os3uJaVfP1TaQuzDoSolFZM26cZrK%2BFSsXMfvR25uRiDdCBbrlckTxOGRI0O2PGbNE54X4icAH1KmBz7vDl4BKtd%2FCXfD6mYEjdqoVPheDSGj16wVMw3rVkr%2BMuosovwsU6%2B%2F1IS0GaoqFj8ELHvyFCIdbCoagPXTCVm%2BNCE2JXDRAzjvVLStTC6gsOMzDNwdnABjqkAX27c3Sk5DblR4Fn9CQsJvJ8XKqlLH7lNESHteQEM8Jsiz6AyJVQr7CDi1ZXUUq0YsdaVl6wnkEd2xd%2BPQ7dnVFtQ2gA0MJBW72w5QIQ2o7ikKUWBHsK0CORoSb2CKX%2ByD7merm4h4HmBEiBQfM7zATdxt%2BgUohkzO4mVWNabKXEuePm%2F64LiXfp%2BVEo6V9n5oeXlPKpCd52qpIue%2FIiTt%2F4m0Qu&X-Amz-Signature=bc169f38f51f09a00a55a466ec3acc1bf355837b006de7c0900f963a593ab9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAIY7RE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDdBEQoP6HMCR38TSkwy6RoqvpTxaudsYIkoBEZSgJ%2FnAiBGxiNu5%2FYKQBv7Ug91pA04HrbYij4v%2FEo9JBrnNySUdSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQprUy1ek6PJKdBf%2BKtwDwH%2FEPz2okPlDZDS2nxyeCYFMjcVxPgX2%2FyvKQ6xqR%2BK64JbKbUBfIXmjVOKl6dGxUk7%2BaghwC4tT9Nbi5xDsSLyl9ophmuZUuDl6bLp0GZLLIRevv3ZKFLh5G98gxICX9f%2BqCCsScT5KVpYAb1CKp9B%2BWnNrsppuMGMFX8POc%2BkUqPQ0dtREnwPF9VX4ScIQDbyCsWIe1y0Y71pMNmEqFcpOsUnkn3BdrAIbw6OByY24pk%2F1CiF2Htsz67iLdRmZm90Lkm7%2B%2FZ3L%2FJAHfJvDdcoqyqUIXUMn2REwS3cHX2FTkGG82sQaeaXE%2B1mLLyborV1P6qZ3xf1kspHY0aZRMi9k9Jo0yy25g7iIHUAreqDJCHf4ewDHLt5sMOcxmr080VitO0KG%2BIJjk5R%2B6%2BPCyNgpqVPMhRUyr6%2BIE0%2FCrJgJxLB9bb2%2BDW0BI6x%2FQFd0nw9A6laKlM%2FB9xXlNKr2lrUu%2Bwffot21as1sVkoFifUEJGZ1VdeZR02YqsH8whQWp7FNz2vcZccE5xp2ggmIX%2Fcgp%2F40vkKS8X63b2DU5YnbvEOrn1C86UbLTeVHHwAKtGHk00DZZdTtSNurtkOOm7axzrJ%2F0RHh1SBXw3KVEODC6GFsCKOdPdAYEEMwgMLZwAY6pgGISzhwZxXJNZLfvvQ7n04qU8v5hkxVePDjA8BQlg%2Beizf74ceLbVo3JgybKFmxqmDvmipLPfXzvmapeJ3874g5PwFuS1kthMe4VA%2FdDAyrp0mnFiWRz9HVwHC4pvvb084sDTszIT66wl3DhULklqs77catKbfU9DuT2Wq1I%2BY1Zl01jSnrbwlRjFIhKhK%2FOPYp1%2FCqVXU06Y9yhk7ICFLijgpTUufC&X-Amz-Signature=aafed1c5841a1f247094aa6dcc27fd643d3440c9d776ffa06dc91f69756b4f55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJOW65LB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIG%2Bz0XWr7BMNUegU26YkewHXadodtGnEzYkNateqz0rzAiB42UM90eiFLBZrfJD8cLXgVfxQahItGnURKWuPmzN2diqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfOTuIPN42rAcniGRKtwDbBM1VK8Mg7rxMrf4v1rw3n7pUBuuKAUyroMVDxIdm1NBsdB17F8eFy2YDXPeQAngiykctX4NhbEhejBmPGoKqOLHJ8n6eu6tIPIJlJ%2F9CGo3dq%2Fm%2B5CW92Xx0TF4y2e9lM%2Bl3nRvVAykOzR08uQKj4YI7RxpEkgmNJBiieeaj7taLIh3Q3aeUsCndqOFqhVwr9KuMlt1p2p5sUg%2BoslkAXultI4iAqL%2FIlzp7ijLbemlmBANKPohrn79%2FencjlTmj3%2FPAJXqx%2BcHZycm%2F%2FQTwrl4xmNzedskMWUJhwbpoLJGhRsgjbFAkXbrKsEDJoYa7h2hn6gfjx6eVRWSYP8Aa0aHKFUzbdMcFlyFGlOxor3HWjKKtSHUZC1qnZIBJw7ldnlRwHzdOWXZtguywoIKPg5%2BpC83eBoAopCHRsc%2ByErZKFxr7R4TOWfhhfgNo6Xz6GEGyf8FTLyrOGjBx9df0zrgfeF1DBD38bXMHa50Hevws2JrMGmSSDTLYQwOf0%2BZQ0HdM3r7oSQuqlsOwhU%2Bg%2FGer5OiDFlx%2BBBqvxTkvG2xEAJOH8g1rm%2BqzH1DGkPO%2FEGje4C9fKwj5jVeuf68a0MjhLdVLLwiyT2dZJ2itzeW615OKSUICEFelNsw9sHZwAY6pgFbckP3HbYKSB8Fntg%2FBfMZNRZB7cI7dwZ6aeYaEVwabtdQhd2xFjdvgwsJSUvUyCpNa1CXmSlUoWtirDHI4l7n9FiqE0HsHVVTho9urJb2%2Bf%2FP%2FZqhFIuk8lgucGi%2FePPrBgjiPCUwkrOS1L025%2B5AHnmRPB6wsez7o6AdGFtAKI99VdDIcONtVB%2B421C%2FV%2Bk5j%2BswqfG9TDy%2Fu7vx9mHpmG4xUHxo&X-Amz-Signature=8f66835b5dbfb23b252fd04b7ffaa17e21ede5b6ae1fea1bc1fa11f02c6d37bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU26CM6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCTII8VHGx2vtSJc%2Fmqvlq4aUjt0fdUV5YO7A3GIYOy9wIhANaQOM6Sr1aOob23AGYQWrx%2F2HPoL78dvOolZtLqyf%2FhKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyr9rhg0dfmRDoqDwq3AOBZX7hOkwSFVht9H2y%2FcPiO3JPotTpXwInVdIT%2Fu%2FbRZmQPOnBiv04mohR50isQMOzHil31nEmu0rubwelLdGc2FWVXX9%2Bt8Ppo9ZXFQOB%2Bnb50czMgOQch6%2FQrijRzvUnVfJaR8mNvzwJ86Lt%2FuWzd8%2B8anhgrRi0gX%2BjM31PJ3cUSFxtlTJo20D92cUrn0vpoQS7yfzW4zSKO0OEvRjhCIvpT5otxpVeWSd4aVCndy7BfpVaaOytChGjZPJFi2qkt%2BHccSE5Nnep71egsqo0Zn%2FEcuwDFjAuR%2B2jz3eJtuXwqGy7v7AgKzzkmBG5zYg%2BeH5YxUuWUGSeruVviuYjT%2B0EkMio3jv6UKn2%2F7MFBvlBv23QuRzGVOm1TeCS1dYb1k3JTojtBpJjHKJsBIz4u1TAVNXywEk1ZIOw2XeCmjewXdSMvjalpwKhkBTj4os3uJaVfP1TaQuzDoSolFZM26cZrK%2BFSsXMfvR25uRiDdCBbrlckTxOGRI0O2PGbNE54X4icAH1KmBz7vDl4BKtd%2FCXfD6mYEjdqoVPheDSGj16wVMw3rVkr%2BMuosovwsU6%2B%2F1IS0GaoqFj8ELHvyFCIdbCoagPXTCVm%2BNCE2JXDRAzjvVLStTC6gsOMzDNwdnABjqkAX27c3Sk5DblR4Fn9CQsJvJ8XKqlLH7lNESHteQEM8Jsiz6AyJVQr7CDi1ZXUUq0YsdaVl6wnkEd2xd%2BPQ7dnVFtQ2gA0MJBW72w5QIQ2o7ikKUWBHsK0CORoSb2CKX%2ByD7merm4h4HmBEiBQfM7zATdxt%2BgUohkzO4mVWNabKXEuePm%2F64LiXfp%2BVEo6V9n5oeXlPKpCd52qpIue%2FIiTt%2F4m0Qu&X-Amz-Signature=c4b8c1356beb5c7eed69a5eef3f80cd79177be2f978a4df73856d076008ee063&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
