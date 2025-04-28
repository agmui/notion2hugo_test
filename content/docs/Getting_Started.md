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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEGFKWR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZmxCWzuaZTqSYQOFMMeuyQ6GmweVN6xVaDB32ycG8SgIgF2JrpHXSYgJwD4nQjfdL%2BVOCqUngtwo0A1hIDV%2FjmiYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ%2BHnjNwdJHZqR8tdyrcAzTmoFJHyaPZ%2BMKbAezfpuW6MJc41oPdPqpsx5UU5pUrMZT2%2FoapvAuUDLXz%2F5Afsb12bJ7%2FH3XlCTTtOctpittpEmprNj5xC5dYr7G35Bc2hBUSl8ZCmOYMsdD8CWg08JFt8SLEuLsdh%2FukEpd3Xwb893Tq1MNuAZVscGd9INqNvBG%2FQMiJ6JsIlqG2Fm0k0OqHMhZWb0KPMz0ZpkXIK22fNaxSwk3cAbCG%2BSyJIWFF89H3CUZdlKrJfDnxGnxOXVZXfKaCsER6rV%2FOtcoqA3Se74qW5gpDUkiHc13B8gjsCoWA2BMWvZZrXk8aJXpuGZRDnocQHwNFIjsIVPrQZFtPp3VMcoyws4JWdxbxNF%2FFL8A3BT1qy8BAX6k%2FgoMybeG7Js6Ds2lQ9lScyvFt9I6ZerzAT6J25Vgjnp1VMAd3kBDgV0KpHDtCHGFgle8rzl7WZQ8euHhVprE135T7cZGg1r%2BdT762ZA%2FcF%2BYMynEn1RajAzNZYI6iygd4ZCoJqcgKbFAN10XeSkB4sZGXPUTfIvYUiSys%2FTfkcyej%2BGuTzx1B37NJsgDjhfnD2OtU0D%2Flvnyam1j9Hs93ZLXUPCNzfGdJmjFw3jG1utdv%2FiGAEbq0ePSQAbPh8iWEMPuCvsAGOqUBm8nU6VHwTKx4f0551S8lp0%2FULLv3n7mbj7DmJSXoV277RmFluPp2tGdMuGtX4C%2Fgm7%2FdMf4z2DRlpeS45o3Mbz1yw6ahuWdIduZ2zao%2F9kZqnaeoZm3QGBPoIgr83ONyEM1r%2F1lQf%2FpV6TXfc0CslCt7XffRZJFiACGAIfuUTs1liqcTkTGVAo5AL5w47QOIjQ%2FRP5VmjjZbv6MEFIFsZKTESfit&X-Amz-Signature=510e85d3c46ea37fb1ebc7bb620d48867802109ebd1e00eaf2423ccad5cac719&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEGFKWR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZmxCWzuaZTqSYQOFMMeuyQ6GmweVN6xVaDB32ycG8SgIgF2JrpHXSYgJwD4nQjfdL%2BVOCqUngtwo0A1hIDV%2FjmiYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ%2BHnjNwdJHZqR8tdyrcAzTmoFJHyaPZ%2BMKbAezfpuW6MJc41oPdPqpsx5UU5pUrMZT2%2FoapvAuUDLXz%2F5Afsb12bJ7%2FH3XlCTTtOctpittpEmprNj5xC5dYr7G35Bc2hBUSl8ZCmOYMsdD8CWg08JFt8SLEuLsdh%2FukEpd3Xwb893Tq1MNuAZVscGd9INqNvBG%2FQMiJ6JsIlqG2Fm0k0OqHMhZWb0KPMz0ZpkXIK22fNaxSwk3cAbCG%2BSyJIWFF89H3CUZdlKrJfDnxGnxOXVZXfKaCsER6rV%2FOtcoqA3Se74qW5gpDUkiHc13B8gjsCoWA2BMWvZZrXk8aJXpuGZRDnocQHwNFIjsIVPrQZFtPp3VMcoyws4JWdxbxNF%2FFL8A3BT1qy8BAX6k%2FgoMybeG7Js6Ds2lQ9lScyvFt9I6ZerzAT6J25Vgjnp1VMAd3kBDgV0KpHDtCHGFgle8rzl7WZQ8euHhVprE135T7cZGg1r%2BdT762ZA%2FcF%2BYMynEn1RajAzNZYI6iygd4ZCoJqcgKbFAN10XeSkB4sZGXPUTfIvYUiSys%2FTfkcyej%2BGuTzx1B37NJsgDjhfnD2OtU0D%2Flvnyam1j9Hs93ZLXUPCNzfGdJmjFw3jG1utdv%2FiGAEbq0ePSQAbPh8iWEMPuCvsAGOqUBm8nU6VHwTKx4f0551S8lp0%2FULLv3n7mbj7DmJSXoV277RmFluPp2tGdMuGtX4C%2Fgm7%2FdMf4z2DRlpeS45o3Mbz1yw6ahuWdIduZ2zao%2F9kZqnaeoZm3QGBPoIgr83ONyEM1r%2F1lQf%2FpV6TXfc0CslCt7XffRZJFiACGAIfuUTs1liqcTkTGVAo5AL5w47QOIjQ%2FRP5VmjjZbv6MEFIFsZKTESfit&X-Amz-Signature=5e9289b28010331c7908a3f6b3fe4fccb2c9e5c90266a3003dc6fc3ef73298d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WFSX6IU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0nJyKXLSwYJQMy5%2FcK0ZQBAFhvEcvqJHEkUTHxxx7gAiA2fQpJ%2F3WwsL%2BkesmjnuyHkI%2BLi6nRqWK2paLH9V3hQir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM0U7MY4aIzQ%2BlqR64KtwD%2FiLNwHUdoUtDGOLgYD9aRcJEaXHKt8FXWYgWuo6zj6Od5l962jlE12108Xz5ZAYrX5Z22duX12PmPt4WZHTeyAmwT4ITI1P%2FQx2f1SxCgiMv%2FzglvXYqA6wHGBaGyQm3%2BRDj6p4FEDtaf70nCyZmEeVCJMyma170FeVgDZ88xY4YZtnIr%2Be7DgYdd3LOgQ3eGf6mHiakZZUKhGRU3AhC%2BB1Rn1ZOqTESs03G3NHKY2n0GnRs9Twik5lp6IbeGhCBn11Ml0iFiil4V2TwMDm9hANiOAgRx1M5V9Q58aEuuhmIARH7S%2F5uso2ulau1wta4MnGxF%2FT2JC%2FPRLYrCffl40CXih2NvWgCdpqxEPXrff%2BQN%2BGNdmK6jnqOFAYpD75nY4Pi9dGGEvoXll9lMsLXu1EU8V%2BEkDQo1xAhiqJGDzow749EqvuKFVGXKck0Hfg6kGgnEEXl4DVctRDxnbuyPTmMQfyx3LTssdtc%2FTAuxE3nxtmzvu89PXPPjwKGKWfegegGBs3eOKUlHlD1RCbbo9vR2sgaWI0hzObK7rDhMy552W%2BLL2dzRSmfGeOe1uat49VK6WzyDFWoFf9I%2Fr8Kiug8F7zrQsQanh5e%2FGYTW0XMJ5z5DA4e2uhpZxAwjoO%2BwAY6pgHEUFhLcKXt8rT5Tj2ZQbG8yCEbwBot%2FsQh6zcMmIC8BYKltcWxeUQSbzEOOtYTteC3h0xuI%2BPGhI3VBHJA%2F6vfVBoQadp2nAnJO0tm6u27vtQCLX8inFaRHp20JvuQRT4Fmv%2BqyFZXM9Va%2FNyC%2BEOKSpf4qYQAIQzmAFFvNp08zRdvOMIrXcE3XQBCdejoxbmeoJS1dh9d0B%2FB0KmHOGlOw8wpb8UQ&X-Amz-Signature=d8ca0ed388b36559743ee74a5534e6fe5e1cb904baebf7e63b7723f51da15901&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWFC3V7A%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBk5VdHe%2FNWnjgxIeVHA%2FQdHlo6a7SnY67mH4ZH%2F7zpJAiEAkB02JL5oqSxym8SBIG3N%2BMwJHt9raROBhaRlSF%2BlHwYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEU6BXfvL6g0zvMT1SrcA%2BoPjUHFOxkVWBIA4%2FB%2FBis%2B6Wd5MhDJbmmDLe8S1D1Cpe4rWxPni2XZ%2Fj5V5L3n5peWzG%2FSwIpgow2FSOXQwEvdu8X3nS7CcXwSoM95nqbIhAgI9GSISKDIWNJhGx4iSD1hz7YLIqOtWJ9gcRsBWwlO03WapXNXumJfp6PXq1Fn5GgwwMLBam3T8hmqsg6vggXa%2BrtdyHOVKkccKmP0%2F4sraaL7yz0mkDsLOy9Rp3BghtkPYAr1xX7JzWTzv7qW%2Ff9cXK%2FzB5AZNjsWV3e0fQyoYVXEJjRh3FGnBEIjE%2BdYMje6Ii7NqTILXOuf1fCQviqneiiRln9SIbeV4JJnpq%2FmsJaf9WyWUCIb4GQFpphQeKH9GTYEMF8m7ebaHxi7ah%2Bu0xHAmScYCaAeolzFg6G%2BRjunm3lIBbOgA2Te%2BCZIq1Yaa%2BXT7ZhLuUAGlnlc6bOdq9iqOKmI21s%2B%2Bs8qfcJ2dwT8GS9tr%2BcbX20l82twV1NRgUhYlTbW57lEJ5WQ9wwvK6PRPEy%2FW%2FqJcacxC5jai%2B6UIeoupaYRqmmFHfQ%2B7jMFeoV2l0uJxsmHt5vWrbHvdrc4cWPThSLkNUlwT02iJjGEw479UbOe6K5mFg%2Bh%2BjNIiPMbRce86q6WMKKDvsAGOqUBEwZQJ5NKlzvKZIXb%2F6YjX4R3bDln6iFuydCc1TWaUfvhNkYMIN3%2Fu%2BHGSelcL%2Fk%2Bf219nkjaEV8vuKIEfY3slaXQoygw1gZI09nqedOv3K44UXVHuOXBuyqShUsXqxtnmi2P0zrvW%2FfZwSVpnstdir6%2FPk80%2BEg2D1tswF5jbcgoV1mtvQvAZAoMTjXg8DH3Lmq3uQaZdA9nPO5Jp8QqHeQHHB%2Fz&X-Amz-Signature=7f4930c1828c2a4d46f6cfa869c86e8c0473c73237c99143df9a084a69b63333&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEGFKWR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZmxCWzuaZTqSYQOFMMeuyQ6GmweVN6xVaDB32ycG8SgIgF2JrpHXSYgJwD4nQjfdL%2BVOCqUngtwo0A1hIDV%2FjmiYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ%2BHnjNwdJHZqR8tdyrcAzTmoFJHyaPZ%2BMKbAezfpuW6MJc41oPdPqpsx5UU5pUrMZT2%2FoapvAuUDLXz%2F5Afsb12bJ7%2FH3XlCTTtOctpittpEmprNj5xC5dYr7G35Bc2hBUSl8ZCmOYMsdD8CWg08JFt8SLEuLsdh%2FukEpd3Xwb893Tq1MNuAZVscGd9INqNvBG%2FQMiJ6JsIlqG2Fm0k0OqHMhZWb0KPMz0ZpkXIK22fNaxSwk3cAbCG%2BSyJIWFF89H3CUZdlKrJfDnxGnxOXVZXfKaCsER6rV%2FOtcoqA3Se74qW5gpDUkiHc13B8gjsCoWA2BMWvZZrXk8aJXpuGZRDnocQHwNFIjsIVPrQZFtPp3VMcoyws4JWdxbxNF%2FFL8A3BT1qy8BAX6k%2FgoMybeG7Js6Ds2lQ9lScyvFt9I6ZerzAT6J25Vgjnp1VMAd3kBDgV0KpHDtCHGFgle8rzl7WZQ8euHhVprE135T7cZGg1r%2BdT762ZA%2FcF%2BYMynEn1RajAzNZYI6iygd4ZCoJqcgKbFAN10XeSkB4sZGXPUTfIvYUiSys%2FTfkcyej%2BGuTzx1B37NJsgDjhfnD2OtU0D%2Flvnyam1j9Hs93ZLXUPCNzfGdJmjFw3jG1utdv%2FiGAEbq0ePSQAbPh8iWEMPuCvsAGOqUBm8nU6VHwTKx4f0551S8lp0%2FULLv3n7mbj7DmJSXoV277RmFluPp2tGdMuGtX4C%2Fgm7%2FdMf4z2DRlpeS45o3Mbz1yw6ahuWdIduZ2zao%2F9kZqnaeoZm3QGBPoIgr83ONyEM1r%2F1lQf%2FpV6TXfc0CslCt7XffRZJFiACGAIfuUTs1liqcTkTGVAo5AL5w47QOIjQ%2FRP5VmjjZbv6MEFIFsZKTESfit&X-Amz-Signature=059b16e71288b93764382519ef05e43ccbf3d8cdfee5f6fb11de7697cf6d925d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
