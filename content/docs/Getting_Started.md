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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUAJVQ4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAhJuCg6cphZBcrkmeYQ6lck5k%2FmrNsXhdf5j3Gtt8PQIhAKYQcvIL0HkILmWw%2FJPXsSrwMQFO6nwM2JqdMgfY1CulKv8DCCoQABoMNjM3NDIzMTgzODA1IgxuPIUBj4oDsMB17ykq3AN6rnuO6HTen4vTke09sdswq%2BdOlw4KQEqomNJohNEuFxg0oqqGkhPnFKuCn2QwB7NzQfqDEQSQwfcfxyNLnJOltHnAuq7XdioDBCbmCtldRZ38woSEZb2YH0qR3xhorQiL%2FqS6AXHjqRA0TmXANqJR%2BFJHliX8WuIZV9znBlnDnea1UjOSKDffmLqsMtI8tzxzW1Y%2BhJYVOAM0DLnc1L2%2FA3r91uv5BtLcHwVM9IM%2B2iP23unGHcL3WmnhmDz0UIr6Xp8WNuElG%2FlyQqrYKjfkDoUByQ3tPhbz8hlGHcuqOKtIQYrFuWClp85FYTBH2tNpQQj41OdHApzYiNWS2%2FH81tIn88B%2BgZp3NsaZh6fIMowrt4xR39khEI9DB4JV2scmi0Er9%2B3RLGHvOmwr5R9pVkGZI62Yo2i3AEOrccsaYvisnTdLpgzxJx1aTMSv1jofziAHCg515euidpjaAWVpCMLo4SKgmkCr%2FmfYt6VhuGx7jLaXI4itoLq0wsrTyd75MXWxMXImbHb6q5ElCccWKQwFLnD9e0kjAUykD6Jl9wVa59BPMV3X8q4eBAhTUTf%2BxxVx4l%2FfbfOt7U%2B297bJETHtCazsSoQR1luSRcpCzI6tHmmyBQh5IrMoKDCx6%2FC9BjqkAQjrzNYLbNqYe4OGFroskFGrdElr0TNv8U0OrnyLppzIs3itW2etE1F5IjU6T%2BfpN1x55BRIR9KmDIzsLCMGEbkObxgjK03pKbCxaAYtcC6XqhxjgQ1QceL8hfTNgG7On5hUnG04xfjPaMgMyx%2BG8BoKbqSRGWNw9%2BojsalZnsl1ANY3SMvuo%2BNWCBA2NIHLKQqs5%2FsB5f3RJK9d9I1U2IAYl3Lw&X-Amz-Signature=cd5c65ff210e5618f0686ee6a99e398555e2dff0e71de7d72520113ded62b510&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUAJVQ4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAhJuCg6cphZBcrkmeYQ6lck5k%2FmrNsXhdf5j3Gtt8PQIhAKYQcvIL0HkILmWw%2FJPXsSrwMQFO6nwM2JqdMgfY1CulKv8DCCoQABoMNjM3NDIzMTgzODA1IgxuPIUBj4oDsMB17ykq3AN6rnuO6HTen4vTke09sdswq%2BdOlw4KQEqomNJohNEuFxg0oqqGkhPnFKuCn2QwB7NzQfqDEQSQwfcfxyNLnJOltHnAuq7XdioDBCbmCtldRZ38woSEZb2YH0qR3xhorQiL%2FqS6AXHjqRA0TmXANqJR%2BFJHliX8WuIZV9znBlnDnea1UjOSKDffmLqsMtI8tzxzW1Y%2BhJYVOAM0DLnc1L2%2FA3r91uv5BtLcHwVM9IM%2B2iP23unGHcL3WmnhmDz0UIr6Xp8WNuElG%2FlyQqrYKjfkDoUByQ3tPhbz8hlGHcuqOKtIQYrFuWClp85FYTBH2tNpQQj41OdHApzYiNWS2%2FH81tIn88B%2BgZp3NsaZh6fIMowrt4xR39khEI9DB4JV2scmi0Er9%2B3RLGHvOmwr5R9pVkGZI62Yo2i3AEOrccsaYvisnTdLpgzxJx1aTMSv1jofziAHCg515euidpjaAWVpCMLo4SKgmkCr%2FmfYt6VhuGx7jLaXI4itoLq0wsrTyd75MXWxMXImbHb6q5ElCccWKQwFLnD9e0kjAUykD6Jl9wVa59BPMV3X8q4eBAhTUTf%2BxxVx4l%2FfbfOt7U%2B297bJETHtCazsSoQR1luSRcpCzI6tHmmyBQh5IrMoKDCx6%2FC9BjqkAQjrzNYLbNqYe4OGFroskFGrdElr0TNv8U0OrnyLppzIs3itW2etE1F5IjU6T%2BfpN1x55BRIR9KmDIzsLCMGEbkObxgjK03pKbCxaAYtcC6XqhxjgQ1QceL8hfTNgG7On5hUnG04xfjPaMgMyx%2BG8BoKbqSRGWNw9%2BojsalZnsl1ANY3SMvuo%2BNWCBA2NIHLKQqs5%2FsB5f3RJK9d9I1U2IAYl3Lw&X-Amz-Signature=d0423600eb685542881fe9d8947b22772151266882f31e1dae752f7590545a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRB45US%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfprtL1d%2Fx%2BcDfk9NZ9runIeEZBGeTFjm4mixcfOPlwIgXbaSDQbJxQemrmWdIhG4ffdjGclelpqSyVMRj62AleYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDArNMUyMGO6kUnaohircA1NrfyCmdkCJ%2BztNxzoQpFZgVyojMfko%2BZmIX4jbaqKND6kc8cEDgc1SI4Yp%2F8P7zpDNuU4WNTk96pX4mNEMYZSx0yfcNcDAzJTrDYi14EnmL0AyhN%2BnQJh5KPRx3SmhO%2FHjRwnxO0Hz1WDDzEYam0pOOvcDaKuNmkn6I4QHODtQgqErPxU%2Fy1S4%2FO%2FUw%2Bzc%2BTwnrhDJmaMDUciuVVdVAanI3Spw6TVQpJuRhRwFcNW2iOCCkuXN0nDQZbyVAhXUQg2Ie5iCyb3aLgPCDFOcHVysgkzXzy6NF4t5TKELSLrfUHnPm%2F23NsgC1haP7G1vVrzF8H3f3xTis5vThJZgc52okTl3TxC3giEWBj60pfpWQo%2BLxOq3r%2Fkm6NCd2NhhypYiOKKakta8xL7GAANkq2Ml27W0x3pmGh81GuF9WnF4LqraEIXlGSl8vC%2FygUOjlHE%2B3fQPsNioP8vk%2BlB034%2BnBS0nOi8Z8ClXC0PiXqZgINrc%2F2mxNLkPIveeKcFYQSe%2BzHhM%2FwxfDpAlAxLNIel81Cx9xc3Xzoh8Y4XnFvM%2BEYcMNwKiY9Di%2B32KAAzzBjfa3e4ppzkxUPueb6eRl4k6WZlUShuztEsI1If135XvLcTtyngLPjqcyprVMITr8L0GOqUBHQivTrIYqONuSp1ghQC%2BwLbLHxlJ3jWEZ%2B84QfrMF0FneCAV6sA4klGFzCE4%2FAXZU8o%2F5atldi%2B94P6yXlXvICenP4FQKYjBnR5T8c0hinZQs7%2FjGqA1R651CkFvCr8KH0VwLsuMvrYI6TBlYoFZd6n8uLhBC%2Ba2SCGaKgxc4ebgATcvg35aYir4ImdX2udBMwbZMBQUKTzBO6%2BRgiGiuFV586Xv&X-Amz-Signature=372e96b8f61f734414c042ab3142a56d153defa182f6b13eb56c30cb614b23ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CT4RTQC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgjj2CxDUdMJEEHg8KhdIz%2BwGVdspsrFJTmfGfTNx3AIgOggZUpL6aWDkhbzOGDAj9fH7XZXESuyi1jhwzLjntuAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM%2BOATxF7Qoewihi3yrcA%2FARH4jz5BRoKznQmQ5Jrkm6BEQWooEhJUPCv5Ewv3H2J8UXP2uhgTzY%2Fx2XqNmw0VD2Udr3R4n%2BktgD2QIi3kTypTE39rC8VhyUXTmnphzIY9FFw7ne62AOAew8UWRsM94t%2BRnrAwWc9PsS8E2iO4gW2O0soY2jm9NgKZKjbR5YJfS0XiLl0x0DFiAdtnIAxiH6BQVkR0AR8UPVhe8rSYAbN5%2BsC0tbeH2ahKAtQMc0r22cZI1LkmeZ28955T7ZgXqDRLrwCqlI0VCfoia9viy0pIoDwkljQlWRk%2FVcI9HIqOqQMtZRTd2gCHHgdR1FtkKsQzIfO%2FM%2B6vgpYJ2jmfBRbMHb7vB0bCvIORbMEyzBnj5JYbI9Rsn1F5pOh%2FhhIMjd%2BBWRPfgcDLq9nbxgCL3%2F2n7l99iDyCX2WjF%2BZPG2lqds7qj1aa61sSS7Lm8%2BKrP0yyrEqizEgyHNQ2mQoXTuvyTR6uGaybwbB0ZxaHN%2Foi%2BigTKkGQN%2F1BxB37Q5EoiGqnYmcETwhciJMLVgERn5o86O1T3qEnT12AlfRTmUjCDLQcL5wdMXPSW3Rtw1lAyaYge9Ztqney7vgq0g8%2Bd3E6I9PGm4BXWPwG0Uvp8WoVk0F%2FTRA5sgomApMKTr8L0GOqUB0yS47Mb6TF5xrEupKJhRFt4lAZrUnNPJeudGP4zv8l2920aw098Tak%2BO6uETEpsE7tojwBttJyrTkadWvuzwtStPYmoHurkUbbK9xm0P5d5RGXG8PFKuOcWCLGL56bIr6DaEoeQ0CJWOob1iJfA6QOJ3pQV5f5j2KN15U4Gzyb%2FEMYkGMjgUhFdzdNWMwaBC2s9qJ%2FhfmPqp5E4qIanjMRx3XOTc&X-Amz-Signature=dcbad7e4fd4ab967fd858e7f0d4bf86aa7c3a2acfed06d6439d1d08b490b4424&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUAJVQ4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAhJuCg6cphZBcrkmeYQ6lck5k%2FmrNsXhdf5j3Gtt8PQIhAKYQcvIL0HkILmWw%2FJPXsSrwMQFO6nwM2JqdMgfY1CulKv8DCCoQABoMNjM3NDIzMTgzODA1IgxuPIUBj4oDsMB17ykq3AN6rnuO6HTen4vTke09sdswq%2BdOlw4KQEqomNJohNEuFxg0oqqGkhPnFKuCn2QwB7NzQfqDEQSQwfcfxyNLnJOltHnAuq7XdioDBCbmCtldRZ38woSEZb2YH0qR3xhorQiL%2FqS6AXHjqRA0TmXANqJR%2BFJHliX8WuIZV9znBlnDnea1UjOSKDffmLqsMtI8tzxzW1Y%2BhJYVOAM0DLnc1L2%2FA3r91uv5BtLcHwVM9IM%2B2iP23unGHcL3WmnhmDz0UIr6Xp8WNuElG%2FlyQqrYKjfkDoUByQ3tPhbz8hlGHcuqOKtIQYrFuWClp85FYTBH2tNpQQj41OdHApzYiNWS2%2FH81tIn88B%2BgZp3NsaZh6fIMowrt4xR39khEI9DB4JV2scmi0Er9%2B3RLGHvOmwr5R9pVkGZI62Yo2i3AEOrccsaYvisnTdLpgzxJx1aTMSv1jofziAHCg515euidpjaAWVpCMLo4SKgmkCr%2FmfYt6VhuGx7jLaXI4itoLq0wsrTyd75MXWxMXImbHb6q5ElCccWKQwFLnD9e0kjAUykD6Jl9wVa59BPMV3X8q4eBAhTUTf%2BxxVx4l%2FfbfOt7U%2B297bJETHtCazsSoQR1luSRcpCzI6tHmmyBQh5IrMoKDCx6%2FC9BjqkAQjrzNYLbNqYe4OGFroskFGrdElr0TNv8U0OrnyLppzIs3itW2etE1F5IjU6T%2BfpN1x55BRIR9KmDIzsLCMGEbkObxgjK03pKbCxaAYtcC6XqhxjgQ1QceL8hfTNgG7On5hUnG04xfjPaMgMyx%2BG8BoKbqSRGWNw9%2BojsalZnsl1ANY3SMvuo%2BNWCBA2NIHLKQqs5%2FsB5f3RJK9d9I1U2IAYl3Lw&X-Amz-Signature=b7decc26592e60a4c3f4921c692b3bdc24ecae918f1441405ace2e5cef4a9035&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
