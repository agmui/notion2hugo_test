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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SHDZQE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDUdRH%2BCeVC1RmmAJIcyNuPCq5IKCLSpu0EXn4aMdwSDAiBtQFi%2BCXEb%2FFaitMmWS5%2F1gZaPYdlKge3woxBGGmL76yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWXDOmH5OybkCUUkcKtwD7isHxYA1N4aWozUEkhvvumC1FXyHOcwV6HE4YIt4%2FlA2VPiAtLLzdMGW0P85KGxvvV5udmRMmAytTpov1%2BNjayj64Rs8IzzgceaILaO6eRlVouXF7GS4s8RyLamLYTC3AXtsSCJNwmBYKEuP%2FyxqDrEgWlX6wIqxEF2XJuFWtF1ytdixQ5JVyDKUFyz6ba4jzz2CBh2hfRXbCWzowQjE6hopOfUCcjA5XaXK8%2FCAV9YKqWtAMZ%2B36F6yN4L2jJcmH55ckbw3Omr3K84gqqe9aP%2FedylJOBB8UjMNbxLhe%2FwBqhkv7ev1ROb7dD3ChBa0mwoG5r%2FPLck8Kw6gn%2BVDY4u9pHL0RJ9k2jW%2FQrn71H1pMFP%2BLbizH7ZoNkunWlpzGv2rIlt5yyt2bLrbo0b7ipBYhbk61tdbkyRgr%2FVAa3W6XqqLefHy3iomMtY%2F94iPxzb9Rw8Ktynftf4oTKH%2FdvG5RDSSIYK7LvBmv6%2BDY%2FLcmQ%2B5NQLguYAgBuE7aDH4z49XhZ%2F8ISIwysWqEtDAZSvFCIM6ahtLE0ixPwwcDGtCro80d66M4aa3IIf9yRZlYFe4hX9RSFg44WsZpg1SnnTXLWaOH%2BJvDKFplUtTRa9KOpk3sHuhsdJ33RYwmJyOwAY6pgEcf%2FqboKKrZ2tLdft9NnXagWuTqBbtoXdSIWmVWBX8kiPrxBojLT16t3c25vOMkBWrrZfOfoPQC5fhASK1FmLrcD4XKzn4%2BzFJ3MdO0%2FrcsU2OQhCAZNwa2Lml7xT7giwFk%2BuUMXfV4s4n80kJoL43tZ08awjMtU2cAEgmmUdYTnSh4zCDt56zi8kaidF2ecOkkQJtVD8pHCYUjVvUkJjHcI%2FjQyxJ&X-Amz-Signature=6f6c91e02bfd3ba82867904fdf802960d9e29f8e602139cb66b2a28ec457b47f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SHDZQE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDUdRH%2BCeVC1RmmAJIcyNuPCq5IKCLSpu0EXn4aMdwSDAiBtQFi%2BCXEb%2FFaitMmWS5%2F1gZaPYdlKge3woxBGGmL76yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWXDOmH5OybkCUUkcKtwD7isHxYA1N4aWozUEkhvvumC1FXyHOcwV6HE4YIt4%2FlA2VPiAtLLzdMGW0P85KGxvvV5udmRMmAytTpov1%2BNjayj64Rs8IzzgceaILaO6eRlVouXF7GS4s8RyLamLYTC3AXtsSCJNwmBYKEuP%2FyxqDrEgWlX6wIqxEF2XJuFWtF1ytdixQ5JVyDKUFyz6ba4jzz2CBh2hfRXbCWzowQjE6hopOfUCcjA5XaXK8%2FCAV9YKqWtAMZ%2B36F6yN4L2jJcmH55ckbw3Omr3K84gqqe9aP%2FedylJOBB8UjMNbxLhe%2FwBqhkv7ev1ROb7dD3ChBa0mwoG5r%2FPLck8Kw6gn%2BVDY4u9pHL0RJ9k2jW%2FQrn71H1pMFP%2BLbizH7ZoNkunWlpzGv2rIlt5yyt2bLrbo0b7ipBYhbk61tdbkyRgr%2FVAa3W6XqqLefHy3iomMtY%2F94iPxzb9Rw8Ktynftf4oTKH%2FdvG5RDSSIYK7LvBmv6%2BDY%2FLcmQ%2B5NQLguYAgBuE7aDH4z49XhZ%2F8ISIwysWqEtDAZSvFCIM6ahtLE0ixPwwcDGtCro80d66M4aa3IIf9yRZlYFe4hX9RSFg44WsZpg1SnnTXLWaOH%2BJvDKFplUtTRa9KOpk3sHuhsdJ33RYwmJyOwAY6pgEcf%2FqboKKrZ2tLdft9NnXagWuTqBbtoXdSIWmVWBX8kiPrxBojLT16t3c25vOMkBWrrZfOfoPQC5fhASK1FmLrcD4XKzn4%2BzFJ3MdO0%2FrcsU2OQhCAZNwa2Lml7xT7giwFk%2BuUMXfV4s4n80kJoL43tZ08awjMtU2cAEgmmUdYTnSh4zCDt56zi8kaidF2ecOkkQJtVD8pHCYUjVvUkJjHcI%2FjQyxJ&X-Amz-Signature=09a674fc048e83adf58aff65bf4232912d80d518cdc20d80ecc0d4f098e6509b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYPYXABC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC0Tyft6IDDVKe3mW1j7ZYAfHBqxGL6XacmNefYgX3ReAIhAN6yxTvU26XwBjq4kOpGj%2BZ8PlI7CHu53I3XxEJGbQr%2FKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsz%2ByFlcZ8wReqKCMq3APCHh9hfABZ40YHFDxpeRhAWZoqJyem2Nlr7Q5oiB85AODHEkUiwdQKY%2FXm4U7OAG56QsAkunB69zktd8xTGsIKJINskGIRSCxOgnHlwL6X1wk%2B7KZPDWQT63BY4YeArknVTQoM8E6E13C2ePKQvyw2D%2BhTW5LbXv2ujj0U%2Fn1vqIVgRkITKz0qgHQ1uvwvv50kImdu2z8YXF2e4Gry1TxXb1MpNFOpljXTz%2BJzOfEKCfRvXtoJ5sWZKEniGmgvSIPCDDvAcXy2VM3AoFk%2BgoE0Fg2UwMq4IX%2Bl4FpoOtjYa9v3q5LcsqS4V35%2BNJiLJmYSgtuUexrjmLM8Dq7DcoPkhyXr38DgHvKDTPU1Rj%2BJQHNyw%2FSkecFzoKXa7ALHQzuh4P7HhKMUv7Dnygh4mlGdiI2SuY9YKMM3wv6DwtehYrWWgBzZO97UYys96IuPv5FBuXHKNBaU8WvB9KEi3E%2FDF5IfBtr4qqmQwGOK1XK%2FMEJg1EmnEmeam7Uc9%2B3RSqSEioLzAZZiAvX3WTnYkcbYhjKO1gH2dI%2BtEEdzTrBFQx9%2B9ibvRIl4hzXKwSbkDsz5P9dq4NJPigaBjrJ4AaZXvERWEFWg41vV0yLvjcdMIBulfIsTX%2FdIJYPFozDZs43ABjqkAVWGCZWp07DVfu12BdFR%2BYOf5trX7HFls4PgbVPvQsHYiuzsvUNrvM9aMz%2FBzKUGN79ywQ%2B8lDIBOxHZxC1YB20cUNQnJaIHYIYhdupsALeLtsILddBrgGpH2LEzZONDgLEh%2FZpEYvkBIgwIDddi%2Fcr85CJppd2fv80q87WCHS8v8e%2FuU57q6AjrRBBcZ7meuTD8k4mWM15wEiFrhb6UKtRHHOay&X-Amz-Signature=16edbb101cf9505eb34eb55809a0b7814f82bf0d74b5a99af41bdbacb3d29a58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG3TICLC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQClm0oKVz92g%2BYxK1m1PzJ%2FPHnx6GE64RM94t6g9%2B%2FDAQIgdZEVnkvxoJbAwIcotZkab1LhlMdkf56aqPuBevT2KXoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMaQt8RU7iq7i%2F20yrcA0UjYBBUKMSLoUIfaA1ooUzkgYqfOAznxTej2P7ddqfPS59065DMYzfOoxb92vbLJZzG0OZ8fzBaqXJlYpAkjEcO2rncWwMNUgreEqQPD7GuP5CBwqS8Xd2%2BJEmor7CmTLkbzNjqpIx87qDfr2ea1lhytyUyRcfNr25iBT6xASSKBwrR6Xklr6%2BTC7oM1vsNuoCCBSrrOU%2BPdo84RPuNCfdqCxH1bcdlETDxr9GqyccE9r75R1IFlXcRKL8H5AZcE4%2BQ0Lw6KtzUPa6J0KeyrmG8Ilvsku%2FfDpblsrnBz04cbyNxzz73S51OPo8dBiIG090%2FlCSdkifFXux0V%2B%2BxnQcSiNXYcyqwiY0QXjDa2LciHu9Gl3WdZlRBI1iuWsPji4PtoTOwc0%2FIl2XzVo7gDBLtvnEy%2FrLRD7bCp3mTuzoP3gH5M7vQtxbyJVkE20A9mMgRpPDmaKINbfKdI%2BE8CnOoWicItEqUgE5AU%2B7XQJXOmbwtoSvQeLtNCqvQKmf95%2FRu%2Be4%2FY%2Fi%2B9RYoB5mDtTFRdScikOQAQQd7HpE8hnKC7%2FwJwJe4MV9XeV3a7wE23%2BUT2QGnRyvbPCV5JrFLbGvgbn0vj7ID%2F9OIUWdGMYQkBlIxEgrud38a3oswML%2BfjsAGOqUB6BsHA0t8QYsRC65URGFN3wVpb6pmsT8xS1qhZlQ8YuKp%2BR2jigUEm5dJI9pwlSYYn6LY2%2F7gBQvlkqPBcpy%2B3nr1DtSFyO4Q4Q5838tno8f3%2FDuQNYb%2BC7E8IRhzOYDbhxLi4DjKKB%2FY%2FqBQ2BW60iI85BjqX1v%2Bgc1XP5Jb9r0TakBi36AY0B3pDk9xAJ1VyyeFi%2BzmRVqy4RMg5TYZYTJNU%2BlA&X-Amz-Signature=64b16cf3b6777ae17da4b0830e254007b21fdc565588c20db2ca23caaa40b774&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SHDZQE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDUdRH%2BCeVC1RmmAJIcyNuPCq5IKCLSpu0EXn4aMdwSDAiBtQFi%2BCXEb%2FFaitMmWS5%2F1gZaPYdlKge3woxBGGmL76yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWXDOmH5OybkCUUkcKtwD7isHxYA1N4aWozUEkhvvumC1FXyHOcwV6HE4YIt4%2FlA2VPiAtLLzdMGW0P85KGxvvV5udmRMmAytTpov1%2BNjayj64Rs8IzzgceaILaO6eRlVouXF7GS4s8RyLamLYTC3AXtsSCJNwmBYKEuP%2FyxqDrEgWlX6wIqxEF2XJuFWtF1ytdixQ5JVyDKUFyz6ba4jzz2CBh2hfRXbCWzowQjE6hopOfUCcjA5XaXK8%2FCAV9YKqWtAMZ%2B36F6yN4L2jJcmH55ckbw3Omr3K84gqqe9aP%2FedylJOBB8UjMNbxLhe%2FwBqhkv7ev1ROb7dD3ChBa0mwoG5r%2FPLck8Kw6gn%2BVDY4u9pHL0RJ9k2jW%2FQrn71H1pMFP%2BLbizH7ZoNkunWlpzGv2rIlt5yyt2bLrbo0b7ipBYhbk61tdbkyRgr%2FVAa3W6XqqLefHy3iomMtY%2F94iPxzb9Rw8Ktynftf4oTKH%2FdvG5RDSSIYK7LvBmv6%2BDY%2FLcmQ%2B5NQLguYAgBuE7aDH4z49XhZ%2F8ISIwysWqEtDAZSvFCIM6ahtLE0ixPwwcDGtCro80d66M4aa3IIf9yRZlYFe4hX9RSFg44WsZpg1SnnTXLWaOH%2BJvDKFplUtTRa9KOpk3sHuhsdJ33RYwmJyOwAY6pgEcf%2FqboKKrZ2tLdft9NnXagWuTqBbtoXdSIWmVWBX8kiPrxBojLT16t3c25vOMkBWrrZfOfoPQC5fhASK1FmLrcD4XKzn4%2BzFJ3MdO0%2FrcsU2OQhCAZNwa2Lml7xT7giwFk%2BuUMXfV4s4n80kJoL43tZ08awjMtU2cAEgmmUdYTnSh4zCDt56zi8kaidF2ecOkkQJtVD8pHCYUjVvUkJjHcI%2FjQyxJ&X-Amz-Signature=3133d7423e66fe213a0f3334fb3d93cda81f957f9890e91dcac15bdc0184fc29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
