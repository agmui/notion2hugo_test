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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCCF35R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BgRfiitCoCo42JDEAQoybAmLHBJG8ouyBIGHNBlzDlAiEAnD47AuXaQPdjacvVxk3vS2mJfcBo2VcsEBi%2BRQcEolwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKD4irk2kV0vdG6GSyrcA8jb3IKQRCPuFAfyR69A%2FzFBy3zoRmQjQUkL3%2B3hhwJhjv1eq6bvpeD0kzuqHrWWYATwRkE5l75Do%2Fh6LjOWvMn90AMwvkmL9WHUxD7jFcF39t9JAjW8%2BHKrBhMEKmN4LFl1SUIHuIuwnVeWGq3eV1LCW3bOaqb7hd49pF5tMfepq3v7aGjutMU%2BUQbBpeoMi2sEYtf2y5OBG%2F8utDwDUalHE0h%2BP4ChHIUDKmuxyLHJxf0N%2FPgjVOZvwwpaoyQty1jTEStrcoOze4d7LNOXVrxRE5sXvUNcfcrvMOb99EsMnbJq7%2F%2F1uXuZE8PjdmtPID%2B45EWcjKll7fD8ONosnoQeZxoHuc0HlzYCmB3thmBEb0WS7TZ%2B%2F33F5%2B%2BNwIA%2FAqSC0RDrp4Lq8kspYx2owr4RBHyxnPJx%2FkQIJq%2BEaGoNEW9NPKybxWFuVljPLnWz3pzzboBu9g54Ti%2BMrkua8%2BDpryl8WoJObKD%2FGBc1BlXZ%2B1BnTPDUDUC%2BXaezhM%2BYVMHQ5RCAPojiw5EZpPFBe79s3YHulVxZQEwWXWZeGgZ23EH9mjZvwm7fFolLn8kEWISnBGAj5NsXn%2BJJHYrzTlyYI4LSmE2%2F%2FpdAdG3kBnSar0rhpdw8r2MRxGZNMIuSjcIGOqUBcIdWZumpetlaNH9mYroyWi84gXfthizq15pzy5r%2BJgOheJE%2FBcRNhZwIozOBtdtHkDMdqpbpkGzJlgQzlKqQQQOYzKL7YhiXqs231aiJZOAyO2O6SVGeWynuECDgqFHEXEy7mmV0a49znnz%2BIQqw58SH5sHyBEGvyPnHI5c2xp8coXgHOn4AFJBThwsryV%2B4zz9C5DQXFop72xzvlZpNBEZmaCz3&X-Amz-Signature=1971ccdd0edc502646fde2be0a5e43486f8a21885ac0e167abc35ceb35eda8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCCF35R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BgRfiitCoCo42JDEAQoybAmLHBJG8ouyBIGHNBlzDlAiEAnD47AuXaQPdjacvVxk3vS2mJfcBo2VcsEBi%2BRQcEolwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKD4irk2kV0vdG6GSyrcA8jb3IKQRCPuFAfyR69A%2FzFBy3zoRmQjQUkL3%2B3hhwJhjv1eq6bvpeD0kzuqHrWWYATwRkE5l75Do%2Fh6LjOWvMn90AMwvkmL9WHUxD7jFcF39t9JAjW8%2BHKrBhMEKmN4LFl1SUIHuIuwnVeWGq3eV1LCW3bOaqb7hd49pF5tMfepq3v7aGjutMU%2BUQbBpeoMi2sEYtf2y5OBG%2F8utDwDUalHE0h%2BP4ChHIUDKmuxyLHJxf0N%2FPgjVOZvwwpaoyQty1jTEStrcoOze4d7LNOXVrxRE5sXvUNcfcrvMOb99EsMnbJq7%2F%2F1uXuZE8PjdmtPID%2B45EWcjKll7fD8ONosnoQeZxoHuc0HlzYCmB3thmBEb0WS7TZ%2B%2F33F5%2B%2BNwIA%2FAqSC0RDrp4Lq8kspYx2owr4RBHyxnPJx%2FkQIJq%2BEaGoNEW9NPKybxWFuVljPLnWz3pzzboBu9g54Ti%2BMrkua8%2BDpryl8WoJObKD%2FGBc1BlXZ%2B1BnTPDUDUC%2BXaezhM%2BYVMHQ5RCAPojiw5EZpPFBe79s3YHulVxZQEwWXWZeGgZ23EH9mjZvwm7fFolLn8kEWISnBGAj5NsXn%2BJJHYrzTlyYI4LSmE2%2F%2FpdAdG3kBnSar0rhpdw8r2MRxGZNMIuSjcIGOqUBcIdWZumpetlaNH9mYroyWi84gXfthizq15pzy5r%2BJgOheJE%2FBcRNhZwIozOBtdtHkDMdqpbpkGzJlgQzlKqQQQOYzKL7YhiXqs231aiJZOAyO2O6SVGeWynuECDgqFHEXEy7mmV0a49znnz%2BIQqw58SH5sHyBEGvyPnHI5c2xp8coXgHOn4AFJBThwsryV%2B4zz9C5DQXFop72xzvlZpNBEZmaCz3&X-Amz-Signature=b456eeeee43bbed3c2e274ba6374e756e6688e0064772ccf16bff5eb24c9039a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCCF35R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BgRfiitCoCo42JDEAQoybAmLHBJG8ouyBIGHNBlzDlAiEAnD47AuXaQPdjacvVxk3vS2mJfcBo2VcsEBi%2BRQcEolwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKD4irk2kV0vdG6GSyrcA8jb3IKQRCPuFAfyR69A%2FzFBy3zoRmQjQUkL3%2B3hhwJhjv1eq6bvpeD0kzuqHrWWYATwRkE5l75Do%2Fh6LjOWvMn90AMwvkmL9WHUxD7jFcF39t9JAjW8%2BHKrBhMEKmN4LFl1SUIHuIuwnVeWGq3eV1LCW3bOaqb7hd49pF5tMfepq3v7aGjutMU%2BUQbBpeoMi2sEYtf2y5OBG%2F8utDwDUalHE0h%2BP4ChHIUDKmuxyLHJxf0N%2FPgjVOZvwwpaoyQty1jTEStrcoOze4d7LNOXVrxRE5sXvUNcfcrvMOb99EsMnbJq7%2F%2F1uXuZE8PjdmtPID%2B45EWcjKll7fD8ONosnoQeZxoHuc0HlzYCmB3thmBEb0WS7TZ%2B%2F33F5%2B%2BNwIA%2FAqSC0RDrp4Lq8kspYx2owr4RBHyxnPJx%2FkQIJq%2BEaGoNEW9NPKybxWFuVljPLnWz3pzzboBu9g54Ti%2BMrkua8%2BDpryl8WoJObKD%2FGBc1BlXZ%2B1BnTPDUDUC%2BXaezhM%2BYVMHQ5RCAPojiw5EZpPFBe79s3YHulVxZQEwWXWZeGgZ23EH9mjZvwm7fFolLn8kEWISnBGAj5NsXn%2BJJHYrzTlyYI4LSmE2%2F%2FpdAdG3kBnSar0rhpdw8r2MRxGZNMIuSjcIGOqUBcIdWZumpetlaNH9mYroyWi84gXfthizq15pzy5r%2BJgOheJE%2FBcRNhZwIozOBtdtHkDMdqpbpkGzJlgQzlKqQQQOYzKL7YhiXqs231aiJZOAyO2O6SVGeWynuECDgqFHEXEy7mmV0a49znnz%2BIQqw58SH5sHyBEGvyPnHI5c2xp8coXgHOn4AFJBThwsryV%2B4zz9C5DQXFop72xzvlZpNBEZmaCz3&X-Amz-Signature=03724ba24470cd1a1f4217ae7fd12590ebe795b9b9b26ab1882d7e8761cb65d3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2PDJGC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErvqxLuLUiBooH96%2BAgdO03XzX%2BeEZpTwPh7jdnozyaAiAocq22nOoPHt0Q3i0eIqd5YAX6MTvt%2B2b1eFl1uk1NQSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMETcdZeDhZOv5WRIuKtwDkSBEdPM0LNV4NQtL%2FUVBqvxZjMm6Qyk%2FdwlozA%2FW7FLLlKuhX9Bh5fBbVuqCfO4Un37Av02OjTzpO4VW3N%2FHQeHqfjyAjdJLDSJO3jVdqHnIMJx2r9Ulhbs3u21AIMiSP0%2FIJr82FG9fhfxOrEesaHtGLQ1HVvZDpq72eMxvNSPwN2fAHue3hT8ZfwIIEIyPjw%2FPAWU16G4L8mXKE%2BJp0H7XPlvhwS3ijFC72HcD83ZHZbHaWTnXZKbaOogfBjf%2F3ySDE6piNCNl8Gnq1U6sAX2t5aain10oz3Dxb%2FIUC%2FdH3v37cIsMCDNvAE6L37WtmCaYMZR3T5ixvPE4J%2BojIi8%2FwUQizP%2FasltzpImzYOdnd7I6g0SQenaqnw7mPvGJK%2BwYBikDl%2FhT5oy87ffxOcDFFXDBHin9gLpAOrAT2KjBa7nf7lGzxCQCzaD3Ay%2FYcIA9ONrnRr5Q%2FuEmKO5ep51xo5U%2F%2BCDWY37laTVmSrVZ751ATkEbvutAgJAG6s3h6Nb7BX2bnfmDS7qW6AtZoIhSLPqDWCvRRvGU1hBMv9ku6TVdAXGpOGeRoraQJkWpM06O1c%2FmkznkNH7JI99zLgUv4Lb3EL2xY8q%2FZyvR%2B5C1s9pQe04g3koqhxEw2pGNwgY6pgHAnukUrJrQym7XhaVLWtPUGXNFAKEhGptQfw0PUTKUXqNYGyhv3CnyBVK3HcexmCOXu%2FOlRLheq3I8kYk%2BQg%2FPk3P2jeHn5xOGHVfcS2PxVsUOoimG6wXTDcdpClcWjPROS7TrJn%2BN9mo8mb6%2BeNygeD4ZARN3SZombJvvJtSpjl6GEbC6wZrho%2BiySBD4G1MRH7yq%2FshRXPYJPtjY7hUeYaoUl5Yn&X-Amz-Signature=afa3011e8cf7530235ba7241cbfb016196f555b9012e39336b998909e9f6de08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUMRSGI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOGvIYKbaSF44jXNwN7XwEB4M9Q2UcFBwISOOp920t9QIhANDhwgRmVbfVQa4rYBRdiVDeWn5DPZbTF7NvuoQZ1IB4Kv8DCGUQABoMNjM3NDIzMTgzODA1IgzpCl68jx%2BEWvEPl1Yq3AP%2BN%2FNurwr4ghDNmEmL6daQg015Vcc8mBjhJhtvdcxS11%2FvRpbZ%2Fwafo3iofi7%2FSbwpNl%2BeH8e6rG%2BDIE2urhFmvyQh266uWYUmYEDPw3a8FNYzkXBlO5RxH%2FZoBzr9NUjxxhl3e9Fl8OohcJnEQCB2qpcK8jVaAl4jbbVtMYl2%2BQ3fJuFghiXxtRcrS6%2Fg3Dz5fl3aziujIyNkrOVEw0HdMfVbtCByhinajG9m0ACNy7cQYzgsxiEW%2B8kf6XI9Ah3fCDS8SMlRdbJN2GpGfaWp0oTmKIsxLddlJdJQ%2B79fA1IEhw8%2F2cxpWS%2BQOSCu8KcF%2Br7RMQdFU21ZSsaajWpLyURfOdCviUMj06oX0k2nBcwJms4AC8FE9OvzkvL6nk9vQdwINosYbXP%2FLVUpbtcj7c%2BGWovG9fm7SwyeHOiMjnYbuMU49jL1Qh0OPU8O1a0l4jKibHQTR6zF%2BuaOdw8iqUModnU5IkV6mhwYUZ67RVAemxvEh3ivTQP%2F0cW5L36mmOfd40m7PTDQfp2FW2na6YBdvKh147LxgHT1mPVaL7huSBW2poGUh6VVwMW99X1aeKQPS4U7f8JF2yJH%2Ber5IBEOD4DYReS7MQLaKBFkJpo1iw6dM%2BSNSNo4cDCjkY3CBjqkAeSp0qbjD3todGOSocVczWvYm4bpMyspXXzUYzeugFofTbuJWMzaiEJUlj4jcsEZ0NFA%2B7bb4oeaux9QJbyBZRP1ID1zrC6yXAripsJ4UByc7k4rSQo013dh3F2x%2FZ%2B7rkfwV%2BeXg2EjjmHr0CkFBBXG0%2B%2B3R%2Bwe%2F3NKWZGs%2FIoY1ITV9K7YgVcFGhwxmb99f1fGGLpF8SZJ5SWRw434VI8%2BT4mh&X-Amz-Signature=45b010b3be5ed652d1567303e8561f2c2583986dfa7946168ec1ee4e4b617e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCCF35R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BgRfiitCoCo42JDEAQoybAmLHBJG8ouyBIGHNBlzDlAiEAnD47AuXaQPdjacvVxk3vS2mJfcBo2VcsEBi%2BRQcEolwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKD4irk2kV0vdG6GSyrcA8jb3IKQRCPuFAfyR69A%2FzFBy3zoRmQjQUkL3%2B3hhwJhjv1eq6bvpeD0kzuqHrWWYATwRkE5l75Do%2Fh6LjOWvMn90AMwvkmL9WHUxD7jFcF39t9JAjW8%2BHKrBhMEKmN4LFl1SUIHuIuwnVeWGq3eV1LCW3bOaqb7hd49pF5tMfepq3v7aGjutMU%2BUQbBpeoMi2sEYtf2y5OBG%2F8utDwDUalHE0h%2BP4ChHIUDKmuxyLHJxf0N%2FPgjVOZvwwpaoyQty1jTEStrcoOze4d7LNOXVrxRE5sXvUNcfcrvMOb99EsMnbJq7%2F%2F1uXuZE8PjdmtPID%2B45EWcjKll7fD8ONosnoQeZxoHuc0HlzYCmB3thmBEb0WS7TZ%2B%2F33F5%2B%2BNwIA%2FAqSC0RDrp4Lq8kspYx2owr4RBHyxnPJx%2FkQIJq%2BEaGoNEW9NPKybxWFuVljPLnWz3pzzboBu9g54Ti%2BMrkua8%2BDpryl8WoJObKD%2FGBc1BlXZ%2B1BnTPDUDUC%2BXaezhM%2BYVMHQ5RCAPojiw5EZpPFBe79s3YHulVxZQEwWXWZeGgZ23EH9mjZvwm7fFolLn8kEWISnBGAj5NsXn%2BJJHYrzTlyYI4LSmE2%2F%2FpdAdG3kBnSar0rhpdw8r2MRxGZNMIuSjcIGOqUBcIdWZumpetlaNH9mYroyWi84gXfthizq15pzy5r%2BJgOheJE%2FBcRNhZwIozOBtdtHkDMdqpbpkGzJlgQzlKqQQQOYzKL7YhiXqs231aiJZOAyO2O6SVGeWynuECDgqFHEXEy7mmV0a49znnz%2BIQqw58SH5sHyBEGvyPnHI5c2xp8coXgHOn4AFJBThwsryV%2B4zz9C5DQXFop72xzvlZpNBEZmaCz3&X-Amz-Signature=38680e7a61baa696c1a5528ab34855661a15d42c1abdc6d451290a8e67b606fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
