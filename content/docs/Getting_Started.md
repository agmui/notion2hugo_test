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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223C4CGA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCXjJAyKSu5AXsMDraVDiA4T2JgyEJGXWOYjklX5dq%2FmQIgYqWdkIv%2BfMorapEm6EDHtH6POgD33tJmW0Kujr2Jn%2BQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBLbmKJWu1ta6KVMOCrcA8sww3cZK%2BkDYVKEB%2BvTCKzM5waGPYCa69W9UVBpooYJnb4wmftWEmfRWrdVtOJMekEu8EWCB1yj7IhhxCcM49%2BMuSL0%2FBYzMwVM3xnOD2qY3wLwNM6bwZOSCf9IiZWkiDe13l3FgM6%2Bg%2BLV8fY%2B8t%2Fz1EXXd8XFPtP6RORO9gLEDyOG1e0JYZeiEjKiv4jng%2FQ3Kgpwxf%2F4M4ySMMMbvbskf9Mrmueyixi39C9q6y106LTKs5x3vSsy3Ny07PCqRBpFwObyZECb0VIHUmb3us%2BBzMh5H6CI3GO0VVqwAi4AR%2BZn5vKn6RFHp%2FIFnxgu3jCDXp7ldQGoJ2a9hMB4tBux8pMswAmUFtazgyOjQbXCogAXSPzNjb8GBOXdLvUq4TyFvXQ6G0B7qtd07EC1pOag7xOiW9JcipQkiJk8%2FVJeVBjJcGuGsac1FrA4bB3VecryGQ1tLta6jLqU5yLwRqSQNpQoGFoAXlrTxoetYZ1tfZ8%2FZSp6od6xFm62pxNaRcgjhQPpa3u3WWDBCy5%2BfX3VLUD%2FhGfAw55OGmDCe8S1oOldXbteRAyfOPMx%2F023QkjQb5XnzBFnE6u7XtE7p7JeTDWGnHUCH6U1uzzDq7ae3F%2BOblwuHBevyIJ4MLLTk70GOqUB2n1yDyB%2Fn7KUG6RPQkwsMr0DR5GuJVpzXv3B0ugs%2BSY5DkQtOQSswMPJc1%2BWTtCj9vndrSDI8hud88GpwsW1kX62xpK8d%2BbLZ3rC%2B2xyp7amjBWiXgrgglF5sh0Xm1RjRkyyDGmtBWyfh7RiJKZpPaFsjtrE0K9nEsuRecZIFobmwuAgvYvPvgsVgfEDwAd6KMX4mUyvJ%2BvlLnq%2F%2BUp7Ag4wslJR&X-Amz-Signature=65220a3450625aa3c363387106c617826eec3a8f29b3d8387263fbd86ccc2438&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223C4CGA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCXjJAyKSu5AXsMDraVDiA4T2JgyEJGXWOYjklX5dq%2FmQIgYqWdkIv%2BfMorapEm6EDHtH6POgD33tJmW0Kujr2Jn%2BQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBLbmKJWu1ta6KVMOCrcA8sww3cZK%2BkDYVKEB%2BvTCKzM5waGPYCa69W9UVBpooYJnb4wmftWEmfRWrdVtOJMekEu8EWCB1yj7IhhxCcM49%2BMuSL0%2FBYzMwVM3xnOD2qY3wLwNM6bwZOSCf9IiZWkiDe13l3FgM6%2Bg%2BLV8fY%2B8t%2Fz1EXXd8XFPtP6RORO9gLEDyOG1e0JYZeiEjKiv4jng%2FQ3Kgpwxf%2F4M4ySMMMbvbskf9Mrmueyixi39C9q6y106LTKs5x3vSsy3Ny07PCqRBpFwObyZECb0VIHUmb3us%2BBzMh5H6CI3GO0VVqwAi4AR%2BZn5vKn6RFHp%2FIFnxgu3jCDXp7ldQGoJ2a9hMB4tBux8pMswAmUFtazgyOjQbXCogAXSPzNjb8GBOXdLvUq4TyFvXQ6G0B7qtd07EC1pOag7xOiW9JcipQkiJk8%2FVJeVBjJcGuGsac1FrA4bB3VecryGQ1tLta6jLqU5yLwRqSQNpQoGFoAXlrTxoetYZ1tfZ8%2FZSp6od6xFm62pxNaRcgjhQPpa3u3WWDBCy5%2BfX3VLUD%2FhGfAw55OGmDCe8S1oOldXbteRAyfOPMx%2F023QkjQb5XnzBFnE6u7XtE7p7JeTDWGnHUCH6U1uzzDq7ae3F%2BOblwuHBevyIJ4MLLTk70GOqUB2n1yDyB%2Fn7KUG6RPQkwsMr0DR5GuJVpzXv3B0ugs%2BSY5DkQtOQSswMPJc1%2BWTtCj9vndrSDI8hud88GpwsW1kX62xpK8d%2BbLZ3rC%2B2xyp7amjBWiXgrgglF5sh0Xm1RjRkyyDGmtBWyfh7RiJKZpPaFsjtrE0K9nEsuRecZIFobmwuAgvYvPvgsVgfEDwAd6KMX4mUyvJ%2BvlLnq%2F%2BUp7Ag4wslJR&X-Amz-Signature=10b4df891402d6931c965781edc970376d00e6774c40401652bedad3468e738e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIP3R5Y%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQClk53Tws8CoQTl9hr2EAg5L7DrGnIrnJJOn9HZszqApQIhAPrIRCWBBnrIbhOAhMa5Ypx0TJnRULV9DdvBmC05SQ6jKv8DCGIQABoMNjM3NDIzMTgzODA1IgxR95PJQOAzETBsIUcq3ANHtTC6phQCGHfSVyTRDhnXhtaNQgmuBuRxrko2H7r6jQd195OctKtZmvGSXHi9Gjhfb13s4iEEvDWh%2Bp7IWJxZEfK%2FziditYgxURjEXA5lBafhVfmyHNyiPNXGs921cYMtwqlCmYDuIIYUUPmqivUiwZYa9sNQKUTzJrK0Ezhh5HbbpOX71vJHd51yDlFe0RrUhHtOH%2B7%2FzdiJ3uQ2eess2xnphZiuas%2B4ABTtAUkEictJckYrDwyDV%2FTjbCQU%2FvNin5wppA01s%2BYoT6Ma5yMwPfRE6JD5nbCLM3YxPz1F0wbh4cRXykR5et9p2dE%2Bx%2FbyHxiA1W0FaNiFTA4TKB1VjvyozRfEMcIkDuoFkqad2yzzg36HoX%2BqLjD1ouYrdhoWZcBQpClGZkF2zohGI6ewYmI5IAAmg0ICEfnuqpDHVS9FzaxDsGYO7uufJwrI6pEinywnCd1QhtQrRS6PhxJSISJ8LvrIzL%2FxofJAXLXYynd7JJiZvCHAkVM9KbqbS8TqJ9KuKa23rLf8REdy5F6xBGbznDPQHkJEjgG%2F4NomkpZT81xA8rU1RC3ilg0g6cqOL6DFbK%2BgbEfVJ3TaUt8VispfszsheN9qKGJQMsFdfdRWm57suMuZXahVrzDi0pO9BjqkAcwWxO2n8XTw6nCjoiXN%2B3lcb8hbtQ%2FfXBo3KUG6%2BZ0zY46OpZ8a9QpHKQasG55IcRfH3NMb%2FKNEDiyzJH26NMJQSiHORBPCc2%2FhcCcc4Yr5QUxETJhML5yVwZM3cAh9Xf2Sofx2yp7TCi2hH4%2BIg%2Fz4fFewkup27VZBp3qpK8yoX0LsATtCI27iU9xAEi6b3NsVynHEGv%2FuVmvBYhJ404FUfzd2&X-Amz-Signature=4dbdcb774831cb3f6b0641798493fc3710545ed87da60a5deeb645a8b362f95a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBENCKNV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEBdeqf9oSm1utqwLP14p4RCyPmSl%2BYtuj03mQ6j%2BmtiAiB%2Fs8Quq85cTAslIqMm7xzi3L4tvuUeRFM5SS%2BCUO9ACCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMETlIdjsyaDOZ%2F2teKtwDo%2BaQevMi0dVErcVISP4OXHb2HJ3z5H68DaCPieK9DkarDATmg1p92VyIwGgVGymdkGfemy0BCbn4WOP28SAWRF2nqs0Sm23ybRahVD264oohcqi7CBRW5JZkcwUv8ScibotjiC90oO%2F4jFOodRHzl0YKCEd43Eb45m18h4xFD6Fk92VDLLqT0SyUXQgnVsJrIchOvSRVf%2F52KcVGRB%2Fpl4LMNJ9gPCmd1%2B6aHyFjYZ%2FC2cLahC7F4Cbv%2Bfks7bNeHEnd7mXiDg%2Fkv%2FsRr0TT0cxAdsxSOnsbSXlmjT9SRTxrBpO5ryxpqI7lcpi5lT2oKnwIAZczQQR5NKKMGSN53fudWp524NfRRPAXjNvUn0UOL93PXMsApf0gojxh87lrk8EFw8m0x8i2k5UN96TimldPQ7%2BVKbeQ42iiHj%2BXwCYkWdl%2BL9zic1xX0Pxom0n%2FHIlJrbr7mELx2aT%2FlSPz104QhaTSUuIPT0X4JvxVB8%2FYUCdGqfm5fn%2BawhjHfl3STF1C1yI%2B%2FD4Kn%2Fqe6UKJzu0qgzWAA6C6UOyUFNidgFsfR78iOU8%2B1NQtNRihBYy4JNe9ShEVCoIqnWmmxUDtEM7SpU7UqMJ8BWpn9JPLVGfY88DobdYPgocqtD4wsdKTvQY6pgHT%2BoQtN8VbEX2fuHTlz8IfQ615aNM3ZUefJqAr%2BkRqdTkAkIZypaGqWqnk0uDT78m%2FgmGfYkz%2Fqu1WTN9g2Gti3L1EmhhEKiJbscuSy0z0d9gZHm6Qqpfdqagh06MBr8ItfeWn9jnxD0bFHLmdTmRJdk2LfKilKUTHDGby4MtPs4rgsRBCXLX3tZfZzoBcLOy9yqoGxtdz3gTJR2IzrnXpBjVGtWcT&X-Amz-Signature=d6d05663963d6f460e9f2be7bab55ec04c2b6fc984ba57e24c3c87b216366fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223C4CGA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCXjJAyKSu5AXsMDraVDiA4T2JgyEJGXWOYjklX5dq%2FmQIgYqWdkIv%2BfMorapEm6EDHtH6POgD33tJmW0Kujr2Jn%2BQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBLbmKJWu1ta6KVMOCrcA8sww3cZK%2BkDYVKEB%2BvTCKzM5waGPYCa69W9UVBpooYJnb4wmftWEmfRWrdVtOJMekEu8EWCB1yj7IhhxCcM49%2BMuSL0%2FBYzMwVM3xnOD2qY3wLwNM6bwZOSCf9IiZWkiDe13l3FgM6%2Bg%2BLV8fY%2B8t%2Fz1EXXd8XFPtP6RORO9gLEDyOG1e0JYZeiEjKiv4jng%2FQ3Kgpwxf%2F4M4ySMMMbvbskf9Mrmueyixi39C9q6y106LTKs5x3vSsy3Ny07PCqRBpFwObyZECb0VIHUmb3us%2BBzMh5H6CI3GO0VVqwAi4AR%2BZn5vKn6RFHp%2FIFnxgu3jCDXp7ldQGoJ2a9hMB4tBux8pMswAmUFtazgyOjQbXCogAXSPzNjb8GBOXdLvUq4TyFvXQ6G0B7qtd07EC1pOag7xOiW9JcipQkiJk8%2FVJeVBjJcGuGsac1FrA4bB3VecryGQ1tLta6jLqU5yLwRqSQNpQoGFoAXlrTxoetYZ1tfZ8%2FZSp6od6xFm62pxNaRcgjhQPpa3u3WWDBCy5%2BfX3VLUD%2FhGfAw55OGmDCe8S1oOldXbteRAyfOPMx%2F023QkjQb5XnzBFnE6u7XtE7p7JeTDWGnHUCH6U1uzzDq7ae3F%2BOblwuHBevyIJ4MLLTk70GOqUB2n1yDyB%2Fn7KUG6RPQkwsMr0DR5GuJVpzXv3B0ugs%2BSY5DkQtOQSswMPJc1%2BWTtCj9vndrSDI8hud88GpwsW1kX62xpK8d%2BbLZ3rC%2B2xyp7amjBWiXgrgglF5sh0Xm1RjRkyyDGmtBWyfh7RiJKZpPaFsjtrE0K9nEsuRecZIFobmwuAgvYvPvgsVgfEDwAd6KMX4mUyvJ%2BvlLnq%2F%2BUp7Ag4wslJR&X-Amz-Signature=55b24baec6597a61def0f04648c632f002fd277668ad85a4bacf76edd9c72e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
