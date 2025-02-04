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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJT5MYC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFFnEDnGs%2FTtvGe6EQjE0rdpnrDL1YbjjSfvS5uiIglwIgdLng5O7Q2tHsr6lGxdDmsVpQnPuyRauY46Z2la4swPAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJgHqwD0hXkxCmXMUCrcAy1kgD5eRq6c0nCTltlIVgMLFgErvdFFZiQbImFTXRSq620%2FkEQODS5%2BRvVbYvF0ELi94VSH8YgmR06RWaaQ%2Flbykb6NLoFIdEQutKWT1nRw9cALIru%2BccUzzA2llEwo%2FGtHR30VE532ytgJFJXD235Foy%2BSBbv3NJL6Wz3d8gAWnRgi3LolPUde3Wjs%2Ff4hIHOsJSURziFkro9ELIwoXFfDVEdZnrn4078LVApgLCtYP7MroTFJO2oqXEMa8WeY8crEgaSQUYu1no4f5sik1pMEQugnBsWbOEt9IQVPzikmWUuxZmhcWLSav%2FcPBp0rqStkY%2BmRIO%2B3Pk3YvKYy2H378MtY77KYBRrWIzk2SV2o0D6CeXZ9y5kuCpIEFMHHwZsc5zXLkkVN1lmprcim008REyNI5qq3dbLmmNvBPA3KoXCb7k70i2OR1mFplBh993nVr600pISlkr70ZrfEVk%2FUIHZ8T%2FlGbVk2sm3Zs5zAn4NSa5QtRV1kxzHjf%2BplecOh8LB%2BHdgEtNrhAGKTEOSGf2Be7HWMgaBNdV8OrZhorJnmWJEyWCbmvZ3c14PDJYU%2BofZt%2F1d0ByEn1mQSFmk6VEMNq7GpEzA8a2ElVsXtaEIILTsb48YyCTtUMJi%2FiL0GOqUBoGqeIYywwvjASleO5wBct9r4AXmk1%2BxCvszPt0W%2FSJ37C6%2F3RqPl292UaYG6fEDZKKOWMAogs4QUM2rYqBG%2B5On8ExABe%2F1uK1q6oMcNnkZKM9CYJWrV%2FEwqw5QoFZsr2kOz9anAK5WF5SIMLz5FARXuOS6OkdaAcPUcwmyXuPvD7%2FAOlkGChLbn8V%2FAyUA8Zrn83kkb9qGSsQ4HzYaJse9RPOop&X-Amz-Signature=827f5e1c1b9cdc14952bb92bc37a4afad1652ccfcd5811901d87c09ff30af567&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJT5MYC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFFnEDnGs%2FTtvGe6EQjE0rdpnrDL1YbjjSfvS5uiIglwIgdLng5O7Q2tHsr6lGxdDmsVpQnPuyRauY46Z2la4swPAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJgHqwD0hXkxCmXMUCrcAy1kgD5eRq6c0nCTltlIVgMLFgErvdFFZiQbImFTXRSq620%2FkEQODS5%2BRvVbYvF0ELi94VSH8YgmR06RWaaQ%2Flbykb6NLoFIdEQutKWT1nRw9cALIru%2BccUzzA2llEwo%2FGtHR30VE532ytgJFJXD235Foy%2BSBbv3NJL6Wz3d8gAWnRgi3LolPUde3Wjs%2Ff4hIHOsJSURziFkro9ELIwoXFfDVEdZnrn4078LVApgLCtYP7MroTFJO2oqXEMa8WeY8crEgaSQUYu1no4f5sik1pMEQugnBsWbOEt9IQVPzikmWUuxZmhcWLSav%2FcPBp0rqStkY%2BmRIO%2B3Pk3YvKYy2H378MtY77KYBRrWIzk2SV2o0D6CeXZ9y5kuCpIEFMHHwZsc5zXLkkVN1lmprcim008REyNI5qq3dbLmmNvBPA3KoXCb7k70i2OR1mFplBh993nVr600pISlkr70ZrfEVk%2FUIHZ8T%2FlGbVk2sm3Zs5zAn4NSa5QtRV1kxzHjf%2BplecOh8LB%2BHdgEtNrhAGKTEOSGf2Be7HWMgaBNdV8OrZhorJnmWJEyWCbmvZ3c14PDJYU%2BofZt%2F1d0ByEn1mQSFmk6VEMNq7GpEzA8a2ElVsXtaEIILTsb48YyCTtUMJi%2FiL0GOqUBoGqeIYywwvjASleO5wBct9r4AXmk1%2BxCvszPt0W%2FSJ37C6%2F3RqPl292UaYG6fEDZKKOWMAogs4QUM2rYqBG%2B5On8ExABe%2F1uK1q6oMcNnkZKM9CYJWrV%2FEwqw5QoFZsr2kOz9anAK5WF5SIMLz5FARXuOS6OkdaAcPUcwmyXuPvD7%2FAOlkGChLbn8V%2FAyUA8Zrn83kkb9qGSsQ4HzYaJse9RPOop&X-Amz-Signature=a02cb6c0b9c13ddc37d4ccaf6ab8b3088a72812c7e2b135ef766960f15b8cc83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRBB4FY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDdXwbXuYlvRjrCjkMU8Xbi8%2FaLoIGxLV0UyiOCSqbRjAiAjb%2FzyxMlOO4%2BFVPVHtq3rdcy0wMPjNadHpUR191zhgSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM8Aikf21I13y%2BO06OKtwDrDvVhhEhVDEXgpyyqyCosxvbjC14SGxcVxRkhfHYIJ2u%2FPQ9K%2F%2FABqI5ZzCuCj2O%2FLuosswJDfDt%2B49QTTsPxFareAzxciEurZKejBZE%2B3mDpgdXwLStZWGPR7KMO3%2BDMG4jS4nNCjchZdOkcUmUFLve7QPsLMHUf7go9yctRVwjBUMc%2FN%2BzeJGfeetmSRhdRhjItelqpw15vfmW2qbS0QJtZSys6dQaliGucjoyQQE0%2BsaN7ayKquzbV8w18bAsM4qaqaLpKUOrZ%2FlCIpO%2F0G5wZxxMYuXVSbjGbQMKJ1HT%2Brr13m0xEPRrwV%2Fwtx61xTMgHGgIPvWtsv22jF3Qm0SS5qLxRFD1Ne5UK%2BQ9lgYK%2FvazQ0xRnlTB63fmDGXacSzphkBTzYE4q2J3uwT%2B0fPZ6b98ZUAbjaGpUxIFWsZWAoJTwNis5suSq4YGYN3O82oW3Oi2vMH5HpDyPRIfNt%2BcBQg1ROqzLVY8WMZsvB67l36zR%2B35I8ZfLHJuLAgUnb0HbU8dsxWhe7vNDE5Be5OkFDofFAnmmJUod6QfEUElbF0UgLukkk0moBGJa16QX8xSlJaH14f%2B4lkoG648lAJi885y3C9SDTCrs2O8FdzCJumFYsFKmO87tVowiMCIvQY6pgGxA5zy7QOFiofhiKWtb8yeKw7AaHtznBGEfMnS1Tvt80%2FJKHqbKC62u%2ByTpGbPB1kFF%2BcPmXHFhlwe2lU4RohB4n9fzRXepobayBp1VCWO%2Bs0Z%2FoOM3fzhzzOmZrVUfbL1W1CZnl3pbCecdGHCJtwfGjSEJ%2F0ketcWeqYvq2Pt%2BHlc%2FVZbNlY08ZaEGbtPhhD665J7gb0DYqvbN8WRTzdm0Sv4QpMy&X-Amz-Signature=13e5a9d988b96f560ee1c09bc38d3b30aac826839a3937c19ef197adcadee1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKYQMFDP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAfrllqmIuXyxbhkvpoFYKYT1hRLdBafNJ0JIbxA%2FdCFAiEAng4w7Y9gFsoclLdfZCBrz6rZzW8CAYwkfRhJEAJtyRMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDD9ZAM4DyZKQxbWibyrcA4j%2BwmGhvU%2BuaIx%2FsFBbmFA2%2B44dyXFl1WI9pzlp5KjTwgAfj22iZJOz%2FUjZmV8TASR37XqHiOyr76UX6oOTOkYoYduG35eGvsLsQLbLitpQDstYhtjk7H0G2EKt%2FmUPWGWb6kM2bdIl8KPC5%2FvVHsE43b3tioEJ7obZ0HSw%2FYdJQ4SJ3cbacE4H6ZqO%2FGwgm2T%2BUm6QymPJL7TcmoipJRIx2bghJDYH5NLehHE6CyfqDBzfB9DXYLM2cT5Mfwze8ewKdgJ%2FsM4jPYtYTySzAr5Jp4groF1m%2FklmQsHVS1TSPdLR72Csgh3rm6P1WFpujsJzcdegN%2BYcCrzec32%2B4Vg4GGdFEL9BbP%2FbsXrt8y%2FIaFnVZZUB6CF7lQkcZJXG9Z8zaMB4q3oXH4PXACg4EgHizv5LyXXldwxp2IjkclQhL2NOBlvECQp41uFO5wd0yBGAFE%2F8CWgNUgufGx08LoFcsmzGRqjZEpwcP5LrBreGKU2EUyYr6qXoDP4%2Fb1ZB3EDiHaUmRJIarxeCsEiNaa8ycIv%2FCBAYU20VxdqHBwTW5UQm%2FOxsRQKeNfHYHTvXiTIpnyiC%2B5nrRYtENmQdBXINylvzCygcDJOvH3WAY4YYNf%2F8hPK17%2FJcVUTnMPO%2BiL0GOqUBvE9Zt9s%2Fmzr3hhESQ5gO1UXAEbV68Fpdz%2Bkh4GRW3tMNjF5PV8%2FeLyy%2BRHbk3k9%2F5SK%2FuaCukA70ll2WnKsGmCeMeW1G5ABT55qgGZ14oG7kWHfXcvjQzoK8N1mP7lpfVHxnvaPi03owup2anfgNXhqwbkPUCOqk9%2FmHQCzmpPit2Bb3a5RdARjLyDdh2NPWgnEPeUHu8TgxtrA22rghqsUGMw0c&X-Amz-Signature=c874a02ab2cee4194fc497ca01ccfc55967f3a986b4004f5893b5239c37acae4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJT5MYC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFFnEDnGs%2FTtvGe6EQjE0rdpnrDL1YbjjSfvS5uiIglwIgdLng5O7Q2tHsr6lGxdDmsVpQnPuyRauY46Z2la4swPAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJgHqwD0hXkxCmXMUCrcAy1kgD5eRq6c0nCTltlIVgMLFgErvdFFZiQbImFTXRSq620%2FkEQODS5%2BRvVbYvF0ELi94VSH8YgmR06RWaaQ%2Flbykb6NLoFIdEQutKWT1nRw9cALIru%2BccUzzA2llEwo%2FGtHR30VE532ytgJFJXD235Foy%2BSBbv3NJL6Wz3d8gAWnRgi3LolPUde3Wjs%2Ff4hIHOsJSURziFkro9ELIwoXFfDVEdZnrn4078LVApgLCtYP7MroTFJO2oqXEMa8WeY8crEgaSQUYu1no4f5sik1pMEQugnBsWbOEt9IQVPzikmWUuxZmhcWLSav%2FcPBp0rqStkY%2BmRIO%2B3Pk3YvKYy2H378MtY77KYBRrWIzk2SV2o0D6CeXZ9y5kuCpIEFMHHwZsc5zXLkkVN1lmprcim008REyNI5qq3dbLmmNvBPA3KoXCb7k70i2OR1mFplBh993nVr600pISlkr70ZrfEVk%2FUIHZ8T%2FlGbVk2sm3Zs5zAn4NSa5QtRV1kxzHjf%2BplecOh8LB%2BHdgEtNrhAGKTEOSGf2Be7HWMgaBNdV8OrZhorJnmWJEyWCbmvZ3c14PDJYU%2BofZt%2F1d0ByEn1mQSFmk6VEMNq7GpEzA8a2ElVsXtaEIILTsb48YyCTtUMJi%2FiL0GOqUBoGqeIYywwvjASleO5wBct9r4AXmk1%2BxCvszPt0W%2FSJ37C6%2F3RqPl292UaYG6fEDZKKOWMAogs4QUM2rYqBG%2B5On8ExABe%2F1uK1q6oMcNnkZKM9CYJWrV%2FEwqw5QoFZsr2kOz9anAK5WF5SIMLz5FARXuOS6OkdaAcPUcwmyXuPvD7%2FAOlkGChLbn8V%2FAyUA8Zrn83kkb9qGSsQ4HzYaJse9RPOop&X-Amz-Signature=37a3f5ff4b3499e83bc44e0d69a30f3cff5784878726671a89ac4a46966f8255&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
