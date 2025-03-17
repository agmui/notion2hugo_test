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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGKEKBN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FAkO4pCTe%2F3azfFW8purzCbTsK9ZsaOaFZ3Xpps6cAiBe4%2F4b0XwMLn0SWEnCFrPPDGS4enpI4FgvDxbbFrLG9Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM2c2dtn2F11FXvdZWKtwDX1UHqZmnye%2FiuKjj%2FJo%2BKy9c94Lh61PrDNBxXsLYUPQEQVQ%2BSeZLkbx%2FaF617Rd8zPe%2Fp6vn0phoQqAefpvZfiEvSo6NDD1tfVjIiyzDVYnGXLPB0ubnUw%2BRfE%2FpCmPHsEb3We3%2B%2B%2Ba4KLgmW2gTZ9DeT05XzQWM1jh4zZ3pUUW2iscmorvO9nSYwLZd7ac5XOeXduG76s9HrqMY%2BWL9szwIt%2BaKSGfqObul9ROssgkb5ZE5f4PFUSEtBGEJG2RmWR8kIKNUl2i52A%2F%2FB9MFWzeyUMyMbHRvpyotIUAp%2BMiNSoJr%2FwB2pZZLXsHWdkWcB9WQAmowqLkKWDMZoUfQk1pVH9EcZlK%2BZGeY4HFssOSpLjSyxDYtWsU5rn1K0j%2B%2FE7rQHGEs5LURLDtBOMRAXugVDs1aRo%2B0OQGjv%2Bz8w6jNdpBOieOSh2hl%2FMP%2FrDIZVxNmrHVQU2WwygQEcZQRILhUp2Yny%2BKPBtxLcjkZrlPWsfB%2BJWF2dPqIVyIm7lOggTxRqsq4u56sYTbbyJF9gtd%2Fsc2knZV4MzMG6aYU75VaLkNDVG5y0xSuPplXz6hhPHfpONkjVeVsF2%2F7U30J3bAda7Hdw0tO70yUz5WbCHTQB7Jy08FMClzMU04wzYjhvgY6pgEc4JbkQ4ihpCf%2BEXGxPRhQ9l0UDURBdsOzl5CxFla0pp1TDcMUTGdIVi83Geo0EL68DF8pOjfX3ePt4GXdhMnea9yVPPtbW76MbN5gxyKam0CyghV4PVGrJUDh4R8GrKlykadUyVioKPNpH%2Bv5PzThuYl%2BACfxrUQrpASOLQDScjZrj2kpQW0VOQ7DkAOizZy96tsZmVHu2%2BqADVOf7Mu%2FIhWH3wYI&X-Amz-Signature=a2c59109303eb470d8a6012246015c07b8bf90a51a740755eab60fd18447ac68&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGKEKBN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FAkO4pCTe%2F3azfFW8purzCbTsK9ZsaOaFZ3Xpps6cAiBe4%2F4b0XwMLn0SWEnCFrPPDGS4enpI4FgvDxbbFrLG9Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM2c2dtn2F11FXvdZWKtwDX1UHqZmnye%2FiuKjj%2FJo%2BKy9c94Lh61PrDNBxXsLYUPQEQVQ%2BSeZLkbx%2FaF617Rd8zPe%2Fp6vn0phoQqAefpvZfiEvSo6NDD1tfVjIiyzDVYnGXLPB0ubnUw%2BRfE%2FpCmPHsEb3We3%2B%2B%2Ba4KLgmW2gTZ9DeT05XzQWM1jh4zZ3pUUW2iscmorvO9nSYwLZd7ac5XOeXduG76s9HrqMY%2BWL9szwIt%2BaKSGfqObul9ROssgkb5ZE5f4PFUSEtBGEJG2RmWR8kIKNUl2i52A%2F%2FB9MFWzeyUMyMbHRvpyotIUAp%2BMiNSoJr%2FwB2pZZLXsHWdkWcB9WQAmowqLkKWDMZoUfQk1pVH9EcZlK%2BZGeY4HFssOSpLjSyxDYtWsU5rn1K0j%2B%2FE7rQHGEs5LURLDtBOMRAXugVDs1aRo%2B0OQGjv%2Bz8w6jNdpBOieOSh2hl%2FMP%2FrDIZVxNmrHVQU2WwygQEcZQRILhUp2Yny%2BKPBtxLcjkZrlPWsfB%2BJWF2dPqIVyIm7lOggTxRqsq4u56sYTbbyJF9gtd%2Fsc2knZV4MzMG6aYU75VaLkNDVG5y0xSuPplXz6hhPHfpONkjVeVsF2%2F7U30J3bAda7Hdw0tO70yUz5WbCHTQB7Jy08FMClzMU04wzYjhvgY6pgEc4JbkQ4ihpCf%2BEXGxPRhQ9l0UDURBdsOzl5CxFla0pp1TDcMUTGdIVi83Geo0EL68DF8pOjfX3ePt4GXdhMnea9yVPPtbW76MbN5gxyKam0CyghV4PVGrJUDh4R8GrKlykadUyVioKPNpH%2Bv5PzThuYl%2BACfxrUQrpASOLQDScjZrj2kpQW0VOQ7DkAOizZy96tsZmVHu2%2BqADVOf7Mu%2FIhWH3wYI&X-Amz-Signature=cefefd46522efd1238f275dafb5d11e5e6eee88079e39561cd918603b1ffcea8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2L6HXOS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTSliAT0lFaCBe2ejUg6eV4C%2Fx3e%2FYlon61c9%2BhIbGWAiEApWXc8exzo6%2B6%2B9A%2FuVTBuY9TNFoNkifG8R12Y79YJecq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM2uBIiSZS6iSl%2F2SyrcA9PYTHAdoYIBCTJjsFzkfYGcYUuG9Q96D8IEU250bTnpjS8tvIBpmRSxq1mY62m43KGLD4wlOfL9Q50nXU%2BcaypRH9YQzffvh2gmhtgVkSN%2FTIWu%2F0ZU7Fh2Ko75cgEXyyX8nmg3OkocD4k%2Bnw6AcDLf8l9VFPvDeK0iqE%2F%2B1NkUdQxDXHYRMCw1ovUkkMmbrU63FrN4U7pRRcaqdxNro4TrOOctMqqsOOSrhfiace2EYxI0hmRvSWMxZjRHYZTq9iR2ESG0ut%2BoXT9D%2BOB8QI8JxJQ3H28m9UIB%2Bh3CzbwCsubQx4R0TaL8UcVItFaNmO5Ty1iB1R2jYCBN%2FMPfDrlDHflAhCPGFBkPNZTe6622ZQr7s0NnFYj6WwIaJa1guYKuCJafvYGfGvClrAcWWNoXYAx3jn%2Fl%2BbgyUgvI1Sl%2BPQsizYRPeSJQNRv6TmDFKTWhGQzs9sfBZX1xS4Q43TzlJJBubhqjigph29T3rBhgooub%2FXcW9KhOGNukwGOGKdRCah76XA1h09m0qqmSgJqLIiPElCT0lr4e%2Fr7PoEeEMqEkkUL7LGPP8FVSoKQe5WWMF5tppne1I%2BMnJ1OK7iPNTsMQgPHXVpQVA6rDxeLsNjVAqoYw6bvMyFhgMO2I4b4GOqUBoNfJnHEfNV%2B5ySm2X6RxTtGRE1zXFV6xTKi1Oy5lxYbEIfmnx%2BMudr07IXdpGvd%2BJQdpT2z3W2S0s1DfwXAKR5pxPZJOQ27k3GGhwVpgAhiWe6B5i21OtifwD9yhSTlFoECAUEfW%2BP7En9xE7i3G5JzHEdAGagbtbrk52PRHyLj%2BlAk%2FeNmKxTm5CfSc6Zz3mljEt%2B6h17aA9WKqoXPvmyGIuXK9&X-Amz-Signature=d23cd7c1a26822518397c3080a9e6cef08bbc823da960848fc03a37053ddbbd2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EFALHH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BgENyt9NJ5OsrKIk0ev6wNu9jsyednIL7OUJRc08ZQIgQTDItrMnIGOgsBmB8S8z3n0PELzAWDIqBP4vubWe%2F54q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJI497bnXcciIcUSyCrcAwd7wH%2BIuB1A8tWxJK0koAMU3%2FRmtKkLcWhryVv%2FkqbZE53cDkjbw0vcoCj7OVr%2F%2Bn%2BGqff2dv29d1CgybwCOwXBwS8a%2Bmvu4F6yYMw2W4u0kdwpjdrW6K70P3IHO899SJTP6OtfpLF2sMJtWxZRGtnKTM804XXfKXZGXFfnxqBACTehwg1Y%2B0NybqfGXWyhszbXqMplcR00xYYJdeCKKBm9uknOggIw6P%2B%2BdnXe3DZzvFtRFnRKTNFNJKqJgmBUhivm8Wh5cYd5liYRApyqxoFWvVLSJuAm12G4VYBkRgXonhwbveZ6HKZdRRsFTOgqhiy%2BS2XDJe1Z%2BJOPpW%2BbnA%2FrV9nl8JQ%2Fui9GrpLVsBgaD86jKKkkWphRdxu3%2BjCkedqzu4n6L9EgoosaGdih9L0PXmrDDNue7SICEwI78pqo5PP7GhhXSR6ZeooS4Oo6YO58Qz9A6WAuBPATGJxpMjgUCBLbvZnMeizKY%2FzbdP8ZT%2BpXpvHlAohr2DhDQqqRVLqk9C2GQwN%2BfFrdEvnxsL8o1k2%2FmVVoDvesTJHFr55x1XkpLiM5h%2F7GvRk8zXp5hCparLTLvolVuGZeruiLvJIG%2BzJZNeoka8vFerX5wLyi0t1NBqACGRvhCJiPMKuI4b4GOqUBSHWx%2BnMzF1v3HtgsXjtiIyBNDQ3mIp5TxPz8MO0FkKTj7MQ9jpZhtApsAL9Chu2oiiqPpUAKSEnIWgMxXSTCmZS1%2FxS02CbeckzEpXhuTuBD5IqJRdZL7uN21ygSm3Melja5UTG8TBdQ5JAzZglKzFu88sUU9DXQ7SyAZnYbj6WHezW9MseN6IvLz5D8QXYJTtTEdWI%2FL8AbsoEy1OoVzT7qUM7E&X-Amz-Signature=ec42cddf7235cb0029462734542c83ef9f32405319fbc8234fcb9fbbf14e386c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGKEKBN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FAkO4pCTe%2F3azfFW8purzCbTsK9ZsaOaFZ3Xpps6cAiBe4%2F4b0XwMLn0SWEnCFrPPDGS4enpI4FgvDxbbFrLG9Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM2c2dtn2F11FXvdZWKtwDX1UHqZmnye%2FiuKjj%2FJo%2BKy9c94Lh61PrDNBxXsLYUPQEQVQ%2BSeZLkbx%2FaF617Rd8zPe%2Fp6vn0phoQqAefpvZfiEvSo6NDD1tfVjIiyzDVYnGXLPB0ubnUw%2BRfE%2FpCmPHsEb3We3%2B%2B%2Ba4KLgmW2gTZ9DeT05XzQWM1jh4zZ3pUUW2iscmorvO9nSYwLZd7ac5XOeXduG76s9HrqMY%2BWL9szwIt%2BaKSGfqObul9ROssgkb5ZE5f4PFUSEtBGEJG2RmWR8kIKNUl2i52A%2F%2FB9MFWzeyUMyMbHRvpyotIUAp%2BMiNSoJr%2FwB2pZZLXsHWdkWcB9WQAmowqLkKWDMZoUfQk1pVH9EcZlK%2BZGeY4HFssOSpLjSyxDYtWsU5rn1K0j%2B%2FE7rQHGEs5LURLDtBOMRAXugVDs1aRo%2B0OQGjv%2Bz8w6jNdpBOieOSh2hl%2FMP%2FrDIZVxNmrHVQU2WwygQEcZQRILhUp2Yny%2BKPBtxLcjkZrlPWsfB%2BJWF2dPqIVyIm7lOggTxRqsq4u56sYTbbyJF9gtd%2Fsc2knZV4MzMG6aYU75VaLkNDVG5y0xSuPplXz6hhPHfpONkjVeVsF2%2F7U30J3bAda7Hdw0tO70yUz5WbCHTQB7Jy08FMClzMU04wzYjhvgY6pgEc4JbkQ4ihpCf%2BEXGxPRhQ9l0UDURBdsOzl5CxFla0pp1TDcMUTGdIVi83Geo0EL68DF8pOjfX3ePt4GXdhMnea9yVPPtbW76MbN5gxyKam0CyghV4PVGrJUDh4R8GrKlykadUyVioKPNpH%2Bv5PzThuYl%2BACfxrUQrpASOLQDScjZrj2kpQW0VOQ7DkAOizZy96tsZmVHu2%2BqADVOf7Mu%2FIhWH3wYI&X-Amz-Signature=31d41a7234014b3e3d64eadb89e162645681bbfa9fabd67cd84bf41e8b6b7829&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
