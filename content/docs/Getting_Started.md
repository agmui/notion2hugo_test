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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3SZVB3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWQSWkYShUZw5iGLhpgE1Obh0jQwb0vojzVVgVTbaG9AiA3xZiNC7jlwbA8ozbH0Z7F6ll37iM0HABF4rQwvBDcBCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMnqe7%2Fquqi7nJggAhKtwDN9e6nEKSUC%2B5jmazeGfFNo4%2BzHEgdyZmsyvGvmoxZ1g5OVd%2BLtDHDEqc4W97L%2BYxbtq8HyuP4eYDQ5NZsqegcP5aL7ST1q%2FAZw%2FmlPFIrEgWthJPrRbeSMEVZbkStM388PamWd2EgO9VmnrQGASWdHVPVd0YyYBKvzxPRxbtkaOQpaXKX%2FUyNUWHYMjQ0bm80shwhlIyOMdERSYa29Ed6YftPquw2ssr7dLqupr3bVZiNY7TNgwFkBTBGhocg73cyFfgipoQanAJdHtkTnxkIi997%2F%2FzRvLXVtliKmS37g7sN1uy0YGPnWTp0zFlcK6w%2B6ep9w6VDsXyeJZlvTxgFApBJsVMKKLHQHrQ4F7mzv1FU%2FTyB5RzA0FKGZa04OlbvcovWZHIyzJu2Kd%2F8ILVoDOgYwDPmrP%2F7WGM12z99mL7o0sCJot6qJd20JZXaWzcn1gdb5KhviSdKmKvtWqtSgFTzcoLlNec8ezcdQzOG1C2FMF8CuZENlVa%2B4zqtWiVTzWX0y%2FYrNr5SybBYYPXCFVX883w%2FfZARyWp1rLN6D653bjUwRe3lunoIDnuHo8y90x0uhZNSlCWbRdABm7sZbWyQUyGiaatNy7DWjqv4yyIS%2BI%2FxAia8UENyNwworywwAY6pgGjyZh89wMvTYL896l0E4JhRhzZfIR%2BAfcZC7UiMeonBrqF9wz9OMA2GsQ9g%2FP%2BRqKQuR06jTm8IcrUHnuPMwI6bqmuHuuPd4wtbzsAYRpAg5%2FL3vce7tdxGkEKfs%2B2c3PNzlTV2Jt6%2BbeAVyAI9zOU0plZ3C0vEfe7%2FKBNzt0qXrK11F99bNvAeEl4mtCjDSffwB6eAjjqyq9RKd%2FmSVn%2Fy29x%2BCzG&X-Amz-Signature=3f471ade1ad21af448d7ebb7014ec63dcc7abce60576d8b356ec43dbd276c2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3SZVB3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWQSWkYShUZw5iGLhpgE1Obh0jQwb0vojzVVgVTbaG9AiA3xZiNC7jlwbA8ozbH0Z7F6ll37iM0HABF4rQwvBDcBCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMnqe7%2Fquqi7nJggAhKtwDN9e6nEKSUC%2B5jmazeGfFNo4%2BzHEgdyZmsyvGvmoxZ1g5OVd%2BLtDHDEqc4W97L%2BYxbtq8HyuP4eYDQ5NZsqegcP5aL7ST1q%2FAZw%2FmlPFIrEgWthJPrRbeSMEVZbkStM388PamWd2EgO9VmnrQGASWdHVPVd0YyYBKvzxPRxbtkaOQpaXKX%2FUyNUWHYMjQ0bm80shwhlIyOMdERSYa29Ed6YftPquw2ssr7dLqupr3bVZiNY7TNgwFkBTBGhocg73cyFfgipoQanAJdHtkTnxkIi997%2F%2FzRvLXVtliKmS37g7sN1uy0YGPnWTp0zFlcK6w%2B6ep9w6VDsXyeJZlvTxgFApBJsVMKKLHQHrQ4F7mzv1FU%2FTyB5RzA0FKGZa04OlbvcovWZHIyzJu2Kd%2F8ILVoDOgYwDPmrP%2F7WGM12z99mL7o0sCJot6qJd20JZXaWzcn1gdb5KhviSdKmKvtWqtSgFTzcoLlNec8ezcdQzOG1C2FMF8CuZENlVa%2B4zqtWiVTzWX0y%2FYrNr5SybBYYPXCFVX883w%2FfZARyWp1rLN6D653bjUwRe3lunoIDnuHo8y90x0uhZNSlCWbRdABm7sZbWyQUyGiaatNy7DWjqv4yyIS%2BI%2FxAia8UENyNwworywwAY6pgGjyZh89wMvTYL896l0E4JhRhzZfIR%2BAfcZC7UiMeonBrqF9wz9OMA2GsQ9g%2FP%2BRqKQuR06jTm8IcrUHnuPMwI6bqmuHuuPd4wtbzsAYRpAg5%2FL3vce7tdxGkEKfs%2B2c3PNzlTV2Jt6%2BbeAVyAI9zOU0plZ3C0vEfe7%2FKBNzt0qXrK11F99bNvAeEl4mtCjDSffwB6eAjjqyq9RKd%2FmSVn%2Fy29x%2BCzG&X-Amz-Signature=248eb43ea73c1275844a6d88bf5fcb9412acc44bc46f83cd37320dd3aa15cce3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONWPI5K%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCwXUQl2qBJZwUzQSayFHSpydfaTp%2Fppc%2FOjSM5MbvAAiEAjWU7bAX8y5IEWJnR%2BZ6K%2BrbmZj%2BW%2FdHipWome%2B%2Bvlmgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDI8kWZdmZW8HTtwOsyrcA7h%2F%2Fcsho%2B7cxgS%2B2VIKl2TQ0NIsn2Di94fubbqzVAph%2BNKfOO4PBp6w7cXVrh7MlWIFeXecRQGXdms5CNv6AMBrvTzRAHljd8VgcD0j8fZu2miYud8u7cnL%2FOlf4zi0Zt99Y0cytj3W%2BS1yibkgnF8oYjvlQ5Wg9HQkITyNBvjsX8ExMwOrAi8vwTIBVXBSqR2qa1Dymww2gouUCSqXae8zDVmshzPvJcZ72LFlEDIvpwGGtNw3v9faG3wENfXUO6vRO24s9n303JTJyni6iv4c7lH3G%2BHbh0K4Cd78cg9vI0Pkpfv5cZ6v7OXRdM%2F%2FYkjkzQn25xYzXiOi1Ne61UJeBrVStNLg0Bt1VrMoibHvNsFaWW0AFbHNuTO9t%2FtzjaRaJ8DoEPwZ5xmTWXLt1NHlEHBgi0xuEBw%2FikFBKtE46aZO96colL8cql9jJeksPXiqZ1bCKdIEb36IXVDiZbKU1j7Yw%2BPf74vE%2BDvySzN%2B2RR9ntUh42r5HbrhNr9e7PmMSnUsr2a7WFkoWzo4QMO747Cvj5DffsVEjnXVq1fBduICxK%2BGG%2BgozQMbfPA6QpilDvMbMdGzJwK11J7OBZFr6AWeRLkaBrploi2Y086nn1gnancFuq9WMWfXMKC8sMAGOqUBrvWSS6pIE7Z3CXQSXRG4PQ6T%2Bi4ToMPXLljwxr%2BG2sNLteh%2FTn3N5Ziy1Oh7hBLHZ48r648r8AVPxeYofVfviOcXx9G8aAHRslpZHzt5IAQwiVlaMMuhVl0UbAl4HpZRHK%2B446upMd2nfCdzmfBRrcV4ZXjCvCmJYvj9HchqQD7oPqc5RwIJxasAdTXAJePDOWuGjkst7Li3i7H9Jj7AqRNXfxFF&X-Amz-Signature=bbd678cf8190b058d11b90550eb6b2aa34e8a1f32a788c6435c367e14576dcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQT2SS6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKc1hdXH380IxCsITtWeqxAmVAHDmS26nKUR5mHYoCTAiAVNOohDPTgEGTZLGX0D%2FHNC5h0K00201DvGDAW4Xo%2FvCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMWVQV2ciVz0wunzOIKtwDaSD%2BwoOZwqti%2Bp2MrGyrZQBH3q8WuI5tw0EwDYmYLWarBBCSErdl2wPmjbTUbKDViShNvNJ7duTihsqpE%2Br09EvfXPaIusRiYsJ%2Feq2iYv3H%2B%2FfGF9DcdtbI%2BRoKg3GBBjEtII6xP2l7c3sdlYQF%2BxuXJQYHPFw7ObYfsswzEN2RpCZA2j44n0Mb%2FeTMEIPhffKrP1mN2g%2FKw%2BxMPftJPGzTGf6CGxC7LhjKTVbZDef9Ed9eLyKyBRtIypR%2BcbLPl62Gs5wTh8EHwEge1c2M66bJhak8CfS4l6Nv7sgSX1%2FaVaRrxcdlk4eQkXdlQ2oLJM9LTQuOo5GQHl6AIC25nygIBhyBflwOLqvEnlEdaevps96VV62aY5I0LBqY3%2BV29RFIY%2B1uffjJbJzO74oGLIEUqq0iWfDsa%2FSl10D08tRWh%2ByS8qMjruQGAdzJUy0nsqMGaVoPCBgf%2FJyYKMW1xeUg0JGsHrU0rz4DSkGv7Of9FqHYV5eJPK%2Bik0Aasi5O59rkLce1syEMENPm3LmjEGKm3pxKH43j3tyHYgax7SnVacYX9mLdauNcUBvfvKQGWjuUDgYsfHEnMYAliw3OSjhFMW2KPpJTi8fbhwiHhYqJ%2BhtyClqZvp7%2BLgow68%2BwwAY6pgHNElc7yWMQVjTzXs3%2Bj%2FMemgcEXCNEYfky8if3YgYcnEBCkNdzHiVrFUnjGZ16hdrG2ZPRnP2KWQtfgfw9IkbVz9I2lThTu5ccv8G10QNGD2cpu5i%2B%2FLC7mcMvxXQvIc%2FtlIfpFR2v4MlAeK5IzH4jwldbDbbFtc9PcpBsxPwIPgVu1ZQ9Ru0VVov%2Fm6xiAYjd1wfKOC5bKwYxm7FKAW%2FNP%2FyaUwi%2B&X-Amz-Signature=9dc226d2b3ca586990bb15f54b19eafee7ec42bde4aea00f3da2155538af0004&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3SZVB3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWQSWkYShUZw5iGLhpgE1Obh0jQwb0vojzVVgVTbaG9AiA3xZiNC7jlwbA8ozbH0Z7F6ll37iM0HABF4rQwvBDcBCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMnqe7%2Fquqi7nJggAhKtwDN9e6nEKSUC%2B5jmazeGfFNo4%2BzHEgdyZmsyvGvmoxZ1g5OVd%2BLtDHDEqc4W97L%2BYxbtq8HyuP4eYDQ5NZsqegcP5aL7ST1q%2FAZw%2FmlPFIrEgWthJPrRbeSMEVZbkStM388PamWd2EgO9VmnrQGASWdHVPVd0YyYBKvzxPRxbtkaOQpaXKX%2FUyNUWHYMjQ0bm80shwhlIyOMdERSYa29Ed6YftPquw2ssr7dLqupr3bVZiNY7TNgwFkBTBGhocg73cyFfgipoQanAJdHtkTnxkIi997%2F%2FzRvLXVtliKmS37g7sN1uy0YGPnWTp0zFlcK6w%2B6ep9w6VDsXyeJZlvTxgFApBJsVMKKLHQHrQ4F7mzv1FU%2FTyB5RzA0FKGZa04OlbvcovWZHIyzJu2Kd%2F8ILVoDOgYwDPmrP%2F7WGM12z99mL7o0sCJot6qJd20JZXaWzcn1gdb5KhviSdKmKvtWqtSgFTzcoLlNec8ezcdQzOG1C2FMF8CuZENlVa%2B4zqtWiVTzWX0y%2FYrNr5SybBYYPXCFVX883w%2FfZARyWp1rLN6D653bjUwRe3lunoIDnuHo8y90x0uhZNSlCWbRdABm7sZbWyQUyGiaatNy7DWjqv4yyIS%2BI%2FxAia8UENyNwworywwAY6pgGjyZh89wMvTYL896l0E4JhRhzZfIR%2BAfcZC7UiMeonBrqF9wz9OMA2GsQ9g%2FP%2BRqKQuR06jTm8IcrUHnuPMwI6bqmuHuuPd4wtbzsAYRpAg5%2FL3vce7tdxGkEKfs%2B2c3PNzlTV2Jt6%2BbeAVyAI9zOU0plZ3C0vEfe7%2FKBNzt0qXrK11F99bNvAeEl4mtCjDSffwB6eAjjqyq9RKd%2FmSVn%2Fy29x%2BCzG&X-Amz-Signature=8b3a07b419ae042ffc986fe90b4fb5a4454938a484f232445df71a5bff511b34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
