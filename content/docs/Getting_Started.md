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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQPB7UE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcj3IFTzMxcJYVd9ABeRkxKi37qtXSd%2BsmEco3qseShQIgaEKCdcYC%2F6Nc68HdHdCdECQ7SJ2GDJzC98Boy30r03sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwuXLRghPg10aZzRyrcA9E1O8lJR%2F575s2VlgsU6koJoQAg9jVPizWsD7XagUY4WCYhKmQTlxePBlzMU0btmRWI2NWge1yO6vLnWYgfZT%2FqVpYIY3jLc19mGW%2ByUTXTyWoboln3BnS1Ds8xwy5v4xisPB89u%2BO8KxnQIKFAZEjdNEdVD8R5avQvf07HyD2NCwWcPSyFJCfC0a0PHF0kn8ZhG%2BTvw9YVCzZPz6qtIILC18Uqh73ALed8UJ73GsdS3hnEiJwRJcPrIF3TaLAS48IsbN9kIqV%2FVouVL9SNVsizBK%2FYcQeAPNdlm52B%2FPGazL%2BnYv%2BV8lWtgJC5mgkvWfSNlwXR6s7wyRBGNvWZ%2B7YNU2FPrmVfyOY826FYzq2MxJt3McjfQte8prLclHyhmBV0BTF33QXzLK2C%2BPnu%2B5qH1x8YyYo6dd4UT1XVHzQ%2BE295sex6eOIJ5AOdDB2LEDeROXSk69t%2FKSnRdqCNBiGhGtY2KUiKT%2BvQT0oufINoAJW6us7ILK2yJkAhK5SlsqRiuipiOjMMryS356rPuTDmzyLoQ6AqUQ6l9YTiUn5jTlcGe7p%2F0kKkbkqv9m3SjwGVSgk6DoLGnWboEd5fPqhRmfM6x4xmb5AezYt%2FEY6tkG9EVkQiYwW4afKtMOqXusMGOqUBYFOYeoXY%2Be3De2n%2Fzj72%2BGkcONDzC5QKqxvUawrMJBl6if2XWizLt2LmesB4dpYVbz0pGo9mKnjefQaSe%2Fr370Qn%2B4h9a4FwLnJjsB7N0SOUS7opieP2TChabzH2Y2OzDy5ROOJcBjv0HrtWun2uxd2Atr7QGkMuYR4zMobdovCXdC%2BvSDRwijbmFPijSqyYyso6alebGzNYSJb4M5s8NXcxGFz0&X-Amz-Signature=f44179e3f4e95621ec598d5d72e2ba7de685f3ca23a4d9416b7bbb001287a0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQPB7UE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcj3IFTzMxcJYVd9ABeRkxKi37qtXSd%2BsmEco3qseShQIgaEKCdcYC%2F6Nc68HdHdCdECQ7SJ2GDJzC98Boy30r03sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwuXLRghPg10aZzRyrcA9E1O8lJR%2F575s2VlgsU6koJoQAg9jVPizWsD7XagUY4WCYhKmQTlxePBlzMU0btmRWI2NWge1yO6vLnWYgfZT%2FqVpYIY3jLc19mGW%2ByUTXTyWoboln3BnS1Ds8xwy5v4xisPB89u%2BO8KxnQIKFAZEjdNEdVD8R5avQvf07HyD2NCwWcPSyFJCfC0a0PHF0kn8ZhG%2BTvw9YVCzZPz6qtIILC18Uqh73ALed8UJ73GsdS3hnEiJwRJcPrIF3TaLAS48IsbN9kIqV%2FVouVL9SNVsizBK%2FYcQeAPNdlm52B%2FPGazL%2BnYv%2BV8lWtgJC5mgkvWfSNlwXR6s7wyRBGNvWZ%2B7YNU2FPrmVfyOY826FYzq2MxJt3McjfQte8prLclHyhmBV0BTF33QXzLK2C%2BPnu%2B5qH1x8YyYo6dd4UT1XVHzQ%2BE295sex6eOIJ5AOdDB2LEDeROXSk69t%2FKSnRdqCNBiGhGtY2KUiKT%2BvQT0oufINoAJW6us7ILK2yJkAhK5SlsqRiuipiOjMMryS356rPuTDmzyLoQ6AqUQ6l9YTiUn5jTlcGe7p%2F0kKkbkqv9m3SjwGVSgk6DoLGnWboEd5fPqhRmfM6x4xmb5AezYt%2FEY6tkG9EVkQiYwW4afKtMOqXusMGOqUBYFOYeoXY%2Be3De2n%2Fzj72%2BGkcONDzC5QKqxvUawrMJBl6if2XWizLt2LmesB4dpYVbz0pGo9mKnjefQaSe%2Fr370Qn%2B4h9a4FwLnJjsB7N0SOUS7opieP2TChabzH2Y2OzDy5ROOJcBjv0HrtWun2uxd2Atr7QGkMuYR4zMobdovCXdC%2BvSDRwijbmFPijSqyYyso6alebGzNYSJb4M5s8NXcxGFz0&X-Amz-Signature=f0b1a8e1d5da55d16aa816461aaca589f78f3d82dbfb30152ba129a1f707296b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQPB7UE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcj3IFTzMxcJYVd9ABeRkxKi37qtXSd%2BsmEco3qseShQIgaEKCdcYC%2F6Nc68HdHdCdECQ7SJ2GDJzC98Boy30r03sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwuXLRghPg10aZzRyrcA9E1O8lJR%2F575s2VlgsU6koJoQAg9jVPizWsD7XagUY4WCYhKmQTlxePBlzMU0btmRWI2NWge1yO6vLnWYgfZT%2FqVpYIY3jLc19mGW%2ByUTXTyWoboln3BnS1Ds8xwy5v4xisPB89u%2BO8KxnQIKFAZEjdNEdVD8R5avQvf07HyD2NCwWcPSyFJCfC0a0PHF0kn8ZhG%2BTvw9YVCzZPz6qtIILC18Uqh73ALed8UJ73GsdS3hnEiJwRJcPrIF3TaLAS48IsbN9kIqV%2FVouVL9SNVsizBK%2FYcQeAPNdlm52B%2FPGazL%2BnYv%2BV8lWtgJC5mgkvWfSNlwXR6s7wyRBGNvWZ%2B7YNU2FPrmVfyOY826FYzq2MxJt3McjfQte8prLclHyhmBV0BTF33QXzLK2C%2BPnu%2B5qH1x8YyYo6dd4UT1XVHzQ%2BE295sex6eOIJ5AOdDB2LEDeROXSk69t%2FKSnRdqCNBiGhGtY2KUiKT%2BvQT0oufINoAJW6us7ILK2yJkAhK5SlsqRiuipiOjMMryS356rPuTDmzyLoQ6AqUQ6l9YTiUn5jTlcGe7p%2F0kKkbkqv9m3SjwGVSgk6DoLGnWboEd5fPqhRmfM6x4xmb5AezYt%2FEY6tkG9EVkQiYwW4afKtMOqXusMGOqUBYFOYeoXY%2Be3De2n%2Fzj72%2BGkcONDzC5QKqxvUawrMJBl6if2XWizLt2LmesB4dpYVbz0pGo9mKnjefQaSe%2Fr370Qn%2B4h9a4FwLnJjsB7N0SOUS7opieP2TChabzH2Y2OzDy5ROOJcBjv0HrtWun2uxd2Atr7QGkMuYR4zMobdovCXdC%2BvSDRwijbmFPijSqyYyso6alebGzNYSJb4M5s8NXcxGFz0&X-Amz-Signature=cd909783b25c3d16a31e389e6ec238f29bdc0dcdf7e4481d5ec2a135d4ded70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYAFEOIH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsyv6WFprKwHca5pnb3xus9P50UcUX3DrsimVNsTbcyQIhAOuionDgS7VRcb9oYXIzbSoK0swvR3n8CS8XxKyBoCI%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg4zUnGp3f0QxZr8Eq3ANwyvrRotSYa68WCPKg5doFhBiJVWN%2B9dOuvA6smgdH4B3f99oncr5i1qeMxWTcnQ9C1o4vA1I54dzMiuQHjCsmeHLHHMlas%2F2Wa3CPR3R8wGW44AsI79GVly%2FoYC64jfpYuOewHRnMa0QROUryHDiPsvULNWi3%2B67rCz%2F9zy2NOtpVQ4l4HEwdnjNxQVjd3QAs9VCeWaVZCywDPTxYIMGGd8X621s9eqiheHDnpX70b6gSX6WCl0JLHWTpVOKB1WFeYS8VAzG6xDvsMtvAt8JorWK4CQ1RQvWpxnlPG5hnhsJZTKEezKJCYAuTfpwHoAvdf9tbK%2FSc4dhE2VDJMULAPXxs%2FOMbctzGmQ8P6nCMkC4ExgkEHWmjjXl737QbbkfeA1VjyQPN5aTCGSAJerSiwqkOWI4b%2F54my3OXqo%2Fe8hLqHkuQTOEiFu24P8nWPboOraK1bP399ucaJP%2BO3CVpphZpQafV5ATxpF%2BKim1zSe7XzEjqlaMA2Yx0C5jfslLyHoMAtFeb5kQDAfmuUEy%2BW%2BzWYBx5JFbS5ZfRflO78bW42iOIa2z0drDWVjZxdJQgg%2BmwiUuVpjZF%2FGXO%2FwNNRVKbs43cLbitDGnsW%2B%2FK6Ud2t9R%2B2hX%2FZ37x%2FDCkmbrDBjqkARDDhig1J6D4XLbumnFkDaz00o1RvXeOIZgag8ZtmzIUTMU5mWniI4eJPSzDQOigUNP5OxiRZJWvW8XlnJavlSm4Eu6Tud3Za2CNK6ZS%2Bti9DSmlB26NpLNSGFdU8IyteIkuyFEBNok2RKnXR0lVUwKmyI%2FH4j7yN5zKQ8dq993lBtWNPAIGMV2TneTC67xZWxAi06pFfQW%2BxzGbPL%2BIoed1Qwgi&X-Amz-Signature=499d65b37478c71e315f6b2f1095a98ab428455c98eb51f6f9bbe080cb990803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSH3GQY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7EjYyl9NHCjAQ67tYvdmK6XBFqr4hNClx6tLc%2FxiunwIhALZbTS4xtNK6XfrY2Y1dKvIY%2F%2FTwnjN6hs2xJn0CtLD6KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBlWOLmx21H9XRIKMq3AOjxF7J7tVymsK7hIKEh9KAeWvSIdZ7wU2vDxUb9kQZeH1eryHNAZ%2Byb3sxyGntuA87X0UQtb6s3OOAcwKnDTXh78wRND71VmVijhPv2bLK5nlnH7N9YKchn3Ps%2BYfOpjhV8u5vMZRq0hfH04xZQW0%2Bv1%2BS2K2vsN3BuVguiJyS9WFR7vhQSTEf9AKUnZDpSxlJXfPLHVjSR7wvmoqgdX%2FoGdfFpqWulUyvEeNtMHCvhR%2BJwbnBOnC3vI%2BW7EGDIOTcRuqEXPyigCbX%2FttKZuYbDcYhMBoEakOxK%2BD%2BdnASCP604C8Kpx3sRV2eiresocVhSvBMn3s0Mad0V8BZyJaYMiUvovKPFUn%2FoivFVqQCx9WpWEBOPB2Mo4GctgDCO4oUrOPuuDYDY7%2FJhQzhlu3bw8qeSkG5runMTZ76aP5QZDZgVL8PjlAjrc0vlyxJPqaJWJGiS6DkpKZ9NnXs7r33yLbaVLa2r6V4Q86FlQk263CQk9nJQyz01gl6Nv3JqlUDFPKJhVnrMBRwqVNVAlcsqpGfKQfRS2NsQSuWcLeL9CO%2FvZ2Oo%2B8a5XEHvg4pwd5AtY1qtsN8o82pAMa7dD1MzJak7hZi%2FKPZeHBx4CkHf%2BCAURNYFRhylXl2HjDnl7rDBjqkAZvXMdAvx1%2Fss7Ym4OQnfwOrb1R2YEakFstP23lhtYq4Cib87U03vVDdv5BwKxtsDKTJEF4B7gUx2QomOBh1CRDO3jqOwZ5aKH9LA20zJWKcY1PvxVqYK49B0A8NSsKihV1rk%2FcRn037Lhec%2FVImp%2FhulXHEmjzBT0NAkGHTfbc8TOrV84KcSXMiKm3BjOe571JcxPsOqNW1OVWQeiXxZmmeCTWD&X-Amz-Signature=b25c9de08e29eeea5e3d810f868f3818f31eea5ae593a66c0d33412bb1b2186e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQPB7UE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcj3IFTzMxcJYVd9ABeRkxKi37qtXSd%2BsmEco3qseShQIgaEKCdcYC%2F6Nc68HdHdCdECQ7SJ2GDJzC98Boy30r03sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwuXLRghPg10aZzRyrcA9E1O8lJR%2F575s2VlgsU6koJoQAg9jVPizWsD7XagUY4WCYhKmQTlxePBlzMU0btmRWI2NWge1yO6vLnWYgfZT%2FqVpYIY3jLc19mGW%2ByUTXTyWoboln3BnS1Ds8xwy5v4xisPB89u%2BO8KxnQIKFAZEjdNEdVD8R5avQvf07HyD2NCwWcPSyFJCfC0a0PHF0kn8ZhG%2BTvw9YVCzZPz6qtIILC18Uqh73ALed8UJ73GsdS3hnEiJwRJcPrIF3TaLAS48IsbN9kIqV%2FVouVL9SNVsizBK%2FYcQeAPNdlm52B%2FPGazL%2BnYv%2BV8lWtgJC5mgkvWfSNlwXR6s7wyRBGNvWZ%2B7YNU2FPrmVfyOY826FYzq2MxJt3McjfQte8prLclHyhmBV0BTF33QXzLK2C%2BPnu%2B5qH1x8YyYo6dd4UT1XVHzQ%2BE295sex6eOIJ5AOdDB2LEDeROXSk69t%2FKSnRdqCNBiGhGtY2KUiKT%2BvQT0oufINoAJW6us7ILK2yJkAhK5SlsqRiuipiOjMMryS356rPuTDmzyLoQ6AqUQ6l9YTiUn5jTlcGe7p%2F0kKkbkqv9m3SjwGVSgk6DoLGnWboEd5fPqhRmfM6x4xmb5AezYt%2FEY6tkG9EVkQiYwW4afKtMOqXusMGOqUBYFOYeoXY%2Be3De2n%2Fzj72%2BGkcONDzC5QKqxvUawrMJBl6if2XWizLt2LmesB4dpYVbz0pGo9mKnjefQaSe%2Fr370Qn%2B4h9a4FwLnJjsB7N0SOUS7opieP2TChabzH2Y2OzDy5ROOJcBjv0HrtWun2uxd2Atr7QGkMuYR4zMobdovCXdC%2BvSDRwijbmFPijSqyYyso6alebGzNYSJb4M5s8NXcxGFz0&X-Amz-Signature=62415e91d5302349ca3500cf2f390fdaa3cf332c764c22b64868bd36c50d25ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
