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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NC7OTF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCZqDhT6lqM9%2FrBFBlHB50Lyr%2Fcs3CuU8yhZXMGnAAE2QIhAP4Htz57wIwBYLKMzYvbYVsltH6VZTWlJ%2BFwnhxbgQuXKv8DCEwQABoMNjM3NDIzMTgzODA1IgwAL%2FHuxVNbORB5rYsq3AMwD9mmxHcvK0jcQZnp992h3ap9GvfwultugtzAEhv0RZnkmP%2FVpnPJTReqgVw6LLaGdC%2BAiJMD4uSHCCFIZfTC9AxqYSi0ctRfB%2BBKMV7ZXjhav7R7Z%2F9gSlhwtcdMBdceoKgfgjsquZVAXv4xYNSVvAEDvLEGSu8JajPAtgunAb2UR7p2vQ1fxlj17YiAbIZFN3tkoeQ4UyYh1oowltcROCcLE6PM6%2FG1bp%2BH2%2BRtTaEdxL39DeNbSkcUI1g34kpjczzS%2FrG2l94SoGBYsbObd68lU5d2eV8rtmtr4xG1lM6OGUwL3hnZ8uXYcSAjopDhg2y4qPeXmGDiRR5CbnDTP%2FUjeWGXUVtwAvR1xLNH8M8k9NVfWB%2Fve7rwg7lvi9KoqiHEl%2FwpdObvbb7Pj4B4GOObJQEZSSXP2vC4PeM38cLrKn6v9t70YOD5Jv%2BZOCE9gWrbJfWdHr4h4LGHbqbXaJe0ep7pn8VL53pdgiSv%2FZL1b2pc0%2FYCJxuQepvpB2wS2xESDa1QmYqAKmuiJcy2op2BcIiESU6APDlaFoOl9ESwAZ7t6jgPgrPkExDQsOlcB5la4U4ekPZ%2Fw83F8AqYhNPV1vEIaU16Uk53n%2FWckgrTDuiJb%2B8G5HrRejCaqvi9BjqkAWbw6sEXjpEjFj2Gaa1U7Co5HADABh9ihFKPFU8McrM%2F%2BWUpdRoU5EodjBNNwpbZ5CjYiH91my2wVqHfio1qtNiDlCusOI8nPdAwDpd9qYW%2Ft4JJv7aZmdTMT0R6G8bd0NVe%2F8FqnrrxmUu1CCIOOMYybI9mkTyeE1nHSVXKxqnoCpukbZp%2Fje7txhrNX2KfxLvyQmX5UETUzUf148aaNrA9Xuvv&X-Amz-Signature=da818ec72f066a8f9d15406fb1fd0eea28ebb7c3c9344c3b070174dec4e4c64b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NC7OTF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCZqDhT6lqM9%2FrBFBlHB50Lyr%2Fcs3CuU8yhZXMGnAAE2QIhAP4Htz57wIwBYLKMzYvbYVsltH6VZTWlJ%2BFwnhxbgQuXKv8DCEwQABoMNjM3NDIzMTgzODA1IgwAL%2FHuxVNbORB5rYsq3AMwD9mmxHcvK0jcQZnp992h3ap9GvfwultugtzAEhv0RZnkmP%2FVpnPJTReqgVw6LLaGdC%2BAiJMD4uSHCCFIZfTC9AxqYSi0ctRfB%2BBKMV7ZXjhav7R7Z%2F9gSlhwtcdMBdceoKgfgjsquZVAXv4xYNSVvAEDvLEGSu8JajPAtgunAb2UR7p2vQ1fxlj17YiAbIZFN3tkoeQ4UyYh1oowltcROCcLE6PM6%2FG1bp%2BH2%2BRtTaEdxL39DeNbSkcUI1g34kpjczzS%2FrG2l94SoGBYsbObd68lU5d2eV8rtmtr4xG1lM6OGUwL3hnZ8uXYcSAjopDhg2y4qPeXmGDiRR5CbnDTP%2FUjeWGXUVtwAvR1xLNH8M8k9NVfWB%2Fve7rwg7lvi9KoqiHEl%2FwpdObvbb7Pj4B4GOObJQEZSSXP2vC4PeM38cLrKn6v9t70YOD5Jv%2BZOCE9gWrbJfWdHr4h4LGHbqbXaJe0ep7pn8VL53pdgiSv%2FZL1b2pc0%2FYCJxuQepvpB2wS2xESDa1QmYqAKmuiJcy2op2BcIiESU6APDlaFoOl9ESwAZ7t6jgPgrPkExDQsOlcB5la4U4ekPZ%2Fw83F8AqYhNPV1vEIaU16Uk53n%2FWckgrTDuiJb%2B8G5HrRejCaqvi9BjqkAWbw6sEXjpEjFj2Gaa1U7Co5HADABh9ihFKPFU8McrM%2F%2BWUpdRoU5EodjBNNwpbZ5CjYiH91my2wVqHfio1qtNiDlCusOI8nPdAwDpd9qYW%2Ft4JJv7aZmdTMT0R6G8bd0NVe%2F8FqnrrxmUu1CCIOOMYybI9mkTyeE1nHSVXKxqnoCpukbZp%2Fje7txhrNX2KfxLvyQmX5UETUzUf148aaNrA9Xuvv&X-Amz-Signature=fa333dfb57c9387a9fdba715400133f041f5410eb2b8bd9a579623b047946d70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONBLK3M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDz7VyaLm49PpS30wfsik3qR3v33GJtriWCbHufNgybsAIgQ8s4iWrp2M%2BbdmU23mn5PmQugHXEd9arLDDktu5Yg6Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNRbtIa63OV%2FGC6%2B%2BSrcA24dQ%2FgJRrAIZDwEz39OQmmG39zXGMq8e9OdJJtcMJx2PgprQ%2F2SKf1XZNtFoW2xObwXuWMOo2NbgDBOPC8ZhI6cvfnCl93R6S0stl66k5q2YfmXO%2BTsM1WS7z5Xn7AXbfKnK96My%2FMow%2Fe0%2Fflbvvmdx%2FHMoG9amtAAELlAMLc5np3yH2FLI2lvpE%2FyPq24uiL4ReWBzFFckBd26S1e23Lm5JndYvYjUyg6itqb0Kb95s0L9KaByALJyXI6Ytf4uRRAgisR02wKoHndfZsn%2FurB0le44SC6Coz4uZGcVazIzEf4NdsB8DQuz2SIHo2P5H4114TMiVupRLsDneS0wzivMgulqLoi2vRBUrncmCsKGbgs%2BTO%2FnB%2FEjK2KyJ4NjlmzBvgMLWDS5qHrlHgvslt8lY%2FT1y0Dse3z7ncHxSpPLg4sVWw1FgGkPb8c5BZ2DzjbjKLIAELEi3EE14uNcwMgpLVKkO11FNsFiGovlljjvZi08IyhhBvJ%2BiAZGhfk25VyomVzTCO%2BxYpaiM1qASlt4Led8Skvq1SFMZPNndtgcf8SgtOajFiMlIfm34TO9mwIUzx2j2hqrTlLuIfygXlvouDemg5n1PAmcEiwarBYlElgHcgafRYI2v5uMKOq%2BL0GOqUBpoNo5pgsNekbpfZoRqKIP5WS%2BnkXN6YhzeEOJ0RRV0QKC3MKVV%2Fzk4i1tnf%2FfXBzTYtlmPgw%2B543%2BlezL34Ys0wb11Z%2BF0ZDQRJDpY782hvQRBj351uyaawRbbFM5rlBnMgw7gLOWa%2Fm4kg3Xa7uSp1jKeea4aSYN7k2AWZMFYcpAaHuzzj5EGQOValcVner920DtoROzVk%2FCxZgu59p4HqwD1%2BF&X-Amz-Signature=b40db38095e8041e0ac8169a08429622ff23f2c2a0866a3e65451d3d53005f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIYAK54D%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGy5b2aainocU8nBsN%2FoKlgaZmm%2BO5YUBC4a5elX53IYAiBmpEvyFQmQWwp5gxFmH1KOJ%2F%2FQq5qsJY8EOfzWuWqB%2Fyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuA7XFIFAA9R7A4q5KtwDTSyh%2BAjxW%2B246FLr1VchDQsV6gQxw0jD%2BzrnDn%2FmpUUlQDJ2wPHLdnnzWJAy%2BuJbHNz%2BcY3L0dLo3mq1XRnUf%2B2I%2F1e25uE40tepOp6Z3qE0xLz59vHbmUQFUyckg17nOZg9FwxNxVjp%2FUaYcmLHpkKmq3obs1x2u0V%2BscO%2FAlbeMaPYM2Yu7%2FCsNeViejqQl3jWJpDXZiEfbA1tEMUj7e%2FsNQXLhMTmhoYyDoLZqTl7BZ3Upzao1BBKgY8UL%2FO8lISUHL0IVpUch93GVZc3bK3CUQfvMQul7Eiwn%2BWXslbWBxCZKgljVATSGJwks7pXNCMSFbkgbDa4AitsS0dYVeTHQ4bMU90crX5pApmkLrAK7yVYidNRqPzIhCaBtwvvhWJO8O90LuGQpnH9xqZB%2F%2FPAg9AxTJBWUWboxkEYWzqh4vDIIFG1ATFd8Xs5XZUCgWv%2BkL7qIjy5QkzPHxm2eT49yOtBEeSlo7i9NxNWcIMMluQzJ1MvKNPsgJbv7Yod6jZT82T339LCzwhCmKATysC%2F02n9w0S2Tb%2BuU%2BUNok95Z6wYQ7AyUk1sQbY3aSiOVOcI7KWifPiT3IB%2FWTY7BGumC5%2B11XNJ7497hYIciWLEgGwmhZ9TmhdNqhEwsKr4vQY6pgH5txddQo4J81wDGTrDHFKthr8J6fDjZGpjoRjNr3kI8KOgMwi9HwrVCFYRZE85AL9dvBzXoLsU%2BODp0sC2NQ0vyWuzo%2F7VDynUi8cp%2FEZuSYNWW8fBbBsI6rcwzodc0iq88DBUzVWACthEuqkuXtrmYtJeL2qRr437gtV4pogx8bbfNVfDPisBQ6MGzwA52nWaOzauF%2F9fjBOldwqkisj8SeK8vKDI&X-Amz-Signature=b052903785d4940c07979020fc8feb8d3c2cc1891c5e1c791d44faf4da20eacd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NC7OTF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCZqDhT6lqM9%2FrBFBlHB50Lyr%2Fcs3CuU8yhZXMGnAAE2QIhAP4Htz57wIwBYLKMzYvbYVsltH6VZTWlJ%2BFwnhxbgQuXKv8DCEwQABoMNjM3NDIzMTgzODA1IgwAL%2FHuxVNbORB5rYsq3AMwD9mmxHcvK0jcQZnp992h3ap9GvfwultugtzAEhv0RZnkmP%2FVpnPJTReqgVw6LLaGdC%2BAiJMD4uSHCCFIZfTC9AxqYSi0ctRfB%2BBKMV7ZXjhav7R7Z%2F9gSlhwtcdMBdceoKgfgjsquZVAXv4xYNSVvAEDvLEGSu8JajPAtgunAb2UR7p2vQ1fxlj17YiAbIZFN3tkoeQ4UyYh1oowltcROCcLE6PM6%2FG1bp%2BH2%2BRtTaEdxL39DeNbSkcUI1g34kpjczzS%2FrG2l94SoGBYsbObd68lU5d2eV8rtmtr4xG1lM6OGUwL3hnZ8uXYcSAjopDhg2y4qPeXmGDiRR5CbnDTP%2FUjeWGXUVtwAvR1xLNH8M8k9NVfWB%2Fve7rwg7lvi9KoqiHEl%2FwpdObvbb7Pj4B4GOObJQEZSSXP2vC4PeM38cLrKn6v9t70YOD5Jv%2BZOCE9gWrbJfWdHr4h4LGHbqbXaJe0ep7pn8VL53pdgiSv%2FZL1b2pc0%2FYCJxuQepvpB2wS2xESDa1QmYqAKmuiJcy2op2BcIiESU6APDlaFoOl9ESwAZ7t6jgPgrPkExDQsOlcB5la4U4ekPZ%2Fw83F8AqYhNPV1vEIaU16Uk53n%2FWckgrTDuiJb%2B8G5HrRejCaqvi9BjqkAWbw6sEXjpEjFj2Gaa1U7Co5HADABh9ihFKPFU8McrM%2F%2BWUpdRoU5EodjBNNwpbZ5CjYiH91my2wVqHfio1qtNiDlCusOI8nPdAwDpd9qYW%2Ft4JJv7aZmdTMT0R6G8bd0NVe%2F8FqnrrxmUu1CCIOOMYybI9mkTyeE1nHSVXKxqnoCpukbZp%2Fje7txhrNX2KfxLvyQmX5UETUzUf148aaNrA9Xuvv&X-Amz-Signature=d77593e91f50052d76e66eec31fdf59f0633dbe54fba6784d213329d63e13062&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
