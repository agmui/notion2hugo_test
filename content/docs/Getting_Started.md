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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6LAF6C%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0pkx6WSKWzuj869A75pESlromPzzcfdUCyBl%2FxdSWlAiAMcDsOkF4xSMTBrcnINgrCdrbW7KqSaXlwhrhJ7an1HSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLewRIk3I5oKEeN6KtwDTuUtikoLmpU%2FyXKIb8RtBd%2BmLb1L22rHaRYK90v6M9%2FFCD4om9DmjrfTNsF3dX2zSVZsADPYtnn7EDps2J620VlPclpm%2FY3VDYDnFqUtAEUayryAEjm98UTwu%2Fj7J8v4i8FxiXplJuE4DYxgnoTpC9Txj5qbubGjTttjkz%2F%2BVd88O6Uy946%2FuwBy9cY0Zyt4pa8SVlWJoy39UhrLKSLYf2FkxlHfdPZcKeRuBv8P8JV3q5CBSgVAoHIA4cYd7VPb0HvuKA98xeh8lessClGG%2FC3KsIrC0klZLjk8R5MsynZ3mRKiGhAbfYUIMrk5nOfdKwVNizrYyYavOypMx9DLLjPzVqW7GMKd38XX6GYrtU2RiThGYAS5HhrhlqPeihapO9kQ5b0oyQkjJaOQ6z5Xwq3HhsJDHjSBW6rlEa67blrubE4BLMtmguzzqcwBDb5W5q5ImfTcTbAriltDLwvCxw4w1wK5G1mfAHTUqPXmtSSYt1svW31EATb5%2FtLKmeD9RyWOJvHI5s4ZvklVfpq5G4Nj%2Bi9v6P0CbYu5COCZn06mTO%2Bha5ZfEzqeU9neUTVrTUoBIRFuHBRRgHuMaYtUecGYAvOXr7FQLJPdadkIMYazsf7KK4x7r1%2Fo8u8wuJjuvAY6pgGATy0WWMm4D0P4%2FLfiHxE%2FwFYN897jSd0NnfqF%2FPNQrQTa18v67WNKlkK%2FMCw06aSmv44bFtoZewRTa%2BjQE5mhwe10jOnVajCGbL36q4ulXPMvY%2FTuY0J%2BTR4iv6HXY9ZcEJ7aZM%2FKbG%2FnYuigFrxtgU8McSe%2B5VyL%2Bp5F6Vh5ejgRzEGn%2Be4Hud4EeIvN7gUClUveRnm%2FwD4tIhmPQYElr5S4CAZU&X-Amz-Signature=184f2764531c58b0ef572991abd459dd68ecf053fd4739b7b20e2ce8d7b2efd0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6LAF6C%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0pkx6WSKWzuj869A75pESlromPzzcfdUCyBl%2FxdSWlAiAMcDsOkF4xSMTBrcnINgrCdrbW7KqSaXlwhrhJ7an1HSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLewRIk3I5oKEeN6KtwDTuUtikoLmpU%2FyXKIb8RtBd%2BmLb1L22rHaRYK90v6M9%2FFCD4om9DmjrfTNsF3dX2zSVZsADPYtnn7EDps2J620VlPclpm%2FY3VDYDnFqUtAEUayryAEjm98UTwu%2Fj7J8v4i8FxiXplJuE4DYxgnoTpC9Txj5qbubGjTttjkz%2F%2BVd88O6Uy946%2FuwBy9cY0Zyt4pa8SVlWJoy39UhrLKSLYf2FkxlHfdPZcKeRuBv8P8JV3q5CBSgVAoHIA4cYd7VPb0HvuKA98xeh8lessClGG%2FC3KsIrC0klZLjk8R5MsynZ3mRKiGhAbfYUIMrk5nOfdKwVNizrYyYavOypMx9DLLjPzVqW7GMKd38XX6GYrtU2RiThGYAS5HhrhlqPeihapO9kQ5b0oyQkjJaOQ6z5Xwq3HhsJDHjSBW6rlEa67blrubE4BLMtmguzzqcwBDb5W5q5ImfTcTbAriltDLwvCxw4w1wK5G1mfAHTUqPXmtSSYt1svW31EATb5%2FtLKmeD9RyWOJvHI5s4ZvklVfpq5G4Nj%2Bi9v6P0CbYu5COCZn06mTO%2Bha5ZfEzqeU9neUTVrTUoBIRFuHBRRgHuMaYtUecGYAvOXr7FQLJPdadkIMYazsf7KK4x7r1%2Fo8u8wuJjuvAY6pgGATy0WWMm4D0P4%2FLfiHxE%2FwFYN897jSd0NnfqF%2FPNQrQTa18v67WNKlkK%2FMCw06aSmv44bFtoZewRTa%2BjQE5mhwe10jOnVajCGbL36q4ulXPMvY%2FTuY0J%2BTR4iv6HXY9ZcEJ7aZM%2FKbG%2FnYuigFrxtgU8McSe%2B5VyL%2Bp5F6Vh5ejgRzEGn%2Be4Hud4EeIvN7gUClUveRnm%2FwD4tIhmPQYElr5S4CAZU&X-Amz-Signature=71e480b92e6de947cc17cdfbaf34995a94025fdcc0219a0cc964670464344767&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG66QYFY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA0If6Agbq0F3r8jGTG1Kt11nJ507ER%2Btatv09P4Fb2gIgCWrqDBXA0ZG4Ms3Sg1Gd3F2hwxuMwoBX%2FLDsGCj2JbQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjyKFjxSRXbEPIIjircA0jFcWWmrUTzL0gQqMtR3hWo2obziPAnnU6%2FhveU%2BxpJ3LqrdWNbxYC4N3cmwnCFHB8ba6%2BrSTtcIJoWtLyjhFAmA6ltZX3kgxeA2JyGA3Jk8VSQe3IoQB3c5DCGInQMlSGE73nIKFdV5ntEAVNSGVrDox59e4E6FAsl6IaVa3t8YAY80BMCqcnQEBDjsaXklMM9%2Bc4VWWzusOx8kqOkA1CfQBnWGI%2F1tuwmBLhA%2FBoUY%2B%2F57RF56IWzUCvM%2FFDEPa6bMQi3wZyoQhoD5JBg61p5c0gU8ek8ABIMAEzfKT%2Fv%2Fe0O6spD%2FFgqf3di6lw4O782wtKmSVFir8d1XtMEoTuuOl5hL3AwXM2Z4SDFwx8K4e0XoWz%2Blomu%2BaUP9qAlppCogmJOWHmTnjSoaGiYr7PCxP9P%2FOdTQoYudJYSaplklNpWJvdJl%2FKvKuO%2FUhMN78hkyqi8Kb5ObVOGS%2BRlMesrEF%2F8SpJZHLLpjGsyO4wJMGJZvc6DYFvmD7J6sTBOGhBrArsxZqsF6QLLtZ9sUg26B7nlHiDnneOej34EYHQ%2BURIfbmr%2BW4K1IHrYopubJ5FSkcgS1ORk9sxaNkGasEQAMYAteYaBXlxmHVoRwrwZ4xs%2FJutLjLgCjcaiMJia7rwGOqUBmT0scJObvrr2QKt%2BXYk49WAjgPW0ENyuzIxr7DBC0UDJnaGOvKRgE9s2Op9lFlTNrJXJ8Mkqkw4fjqjlrBmkd5BV63jfRPW%2B%2FGhsp7CFcluWsg1UiDj6EjKtzTN4Qx1aVuVgXE7ioOlUKaQ2GsFxNXG1yCfzf%2FworzJ4RGqYW8hnMJa1JPhivJIgLl0RlcKeo8vcaUmX%2BbZk2sp6epNKQa7Pfil1&X-Amz-Signature=e0f15fa81ac5a5ca3436a5f8f3363e2aa7d289f02519ddf1011b42f43f86b70f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6ZMLUX%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmRz9JF8dTBEadxqXqdRZRCWth58hrUI9XsYBfiV2X1AiBoGgEL2eGaRmALGgmx6jzqNWk48OTd3bghPWFzHy%2FhmSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDFMzfxCkz3So55nKtwD0YdZF5iKQLqFf53u5xXd2%2FmEhG4hp48amSrjQg%2FPraI0R75U2R02%2FbM9UB5EOgsIHGwt4VhVoGGyYZp0NzpZkJWo2LhjPg1J%2BVy3VRV2xjtp81wg10cTz1KLmYzi0VTCDm6jf1qtB%2BCfCHGn0XliK5x2NeLN1h7QVzz%2BbQ02TzddZFS%2Fi8OvQMMd7EB8ZyIxEb7QJzZUNqoTblfnr%2FE5vSiqAeVthRqM6mGZM4x7CSJF8pmVVCo%2Fk6Sod20zjfSKX6wyta8ZAtZWVDnSvEK0hUvphPSKX57gwkXpEqMbFz9BIElnJowLvl1KX4sazSgWQ0Sp4Ofg42ixBzgHh1FparCgjSNG%2BMuuWiKauGoJYxe5a7bHDLXQKoCQvw91wznQ23iIVATNXYH7m28%2FaNSRwg0HGjdxyOdwEcfJCF%2BxgKIdvtC%2BqXuEOc8Qh3z63l3iycVrei8T%2BYVi3vTPcryxBlgz%2Bsd4OcADeYhE6i%2BL%2FiXrQxTNsBNbPTHJ%2FUZchaTdQs0bod4QHtZ3n9try%2BQDnOVAmnl02oowhjqLzBZThmRmY2J7Xsz4PwbGiOwssAOPwwXwRXmFE9DdAKisWpdJK%2FsgrRsCwyYJdBRHLDWChDSF4265%2BZwvWOInNyYw0ZnuvAY6pgGoQiha%2BlxASwEXZZsZ%2F4vXC5lG5iKQB9K3jjvuTPaEVHiEmIDTuSgqCU7aNXY4Y77hKI%2FKuU6gaRi3ykTLYIwj%2FHkJ1L6ZzoDnTjIbinJdkqotuAVw2bibS69GF8DY85O%2FN%2BkydDJSW001SxbV70jeth0Y2c9VczfoJDVTBde1GPqQidnL4AJfuxVDwgZ75%2FG954tszr%2FvdqOLQ%2BBISv8y6nsfz8%2Bo&X-Amz-Signature=ecc98465901bb931777558008abb174650059d9a794872bed2bc603da2e40492&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6LAF6C%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0pkx6WSKWzuj869A75pESlromPzzcfdUCyBl%2FxdSWlAiAMcDsOkF4xSMTBrcnINgrCdrbW7KqSaXlwhrhJ7an1HSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLewRIk3I5oKEeN6KtwDTuUtikoLmpU%2FyXKIb8RtBd%2BmLb1L22rHaRYK90v6M9%2FFCD4om9DmjrfTNsF3dX2zSVZsADPYtnn7EDps2J620VlPclpm%2FY3VDYDnFqUtAEUayryAEjm98UTwu%2Fj7J8v4i8FxiXplJuE4DYxgnoTpC9Txj5qbubGjTttjkz%2F%2BVd88O6Uy946%2FuwBy9cY0Zyt4pa8SVlWJoy39UhrLKSLYf2FkxlHfdPZcKeRuBv8P8JV3q5CBSgVAoHIA4cYd7VPb0HvuKA98xeh8lessClGG%2FC3KsIrC0klZLjk8R5MsynZ3mRKiGhAbfYUIMrk5nOfdKwVNizrYyYavOypMx9DLLjPzVqW7GMKd38XX6GYrtU2RiThGYAS5HhrhlqPeihapO9kQ5b0oyQkjJaOQ6z5Xwq3HhsJDHjSBW6rlEa67blrubE4BLMtmguzzqcwBDb5W5q5ImfTcTbAriltDLwvCxw4w1wK5G1mfAHTUqPXmtSSYt1svW31EATb5%2FtLKmeD9RyWOJvHI5s4ZvklVfpq5G4Nj%2Bi9v6P0CbYu5COCZn06mTO%2Bha5ZfEzqeU9neUTVrTUoBIRFuHBRRgHuMaYtUecGYAvOXr7FQLJPdadkIMYazsf7KK4x7r1%2Fo8u8wuJjuvAY6pgGATy0WWMm4D0P4%2FLfiHxE%2FwFYN897jSd0NnfqF%2FPNQrQTa18v67WNKlkK%2FMCw06aSmv44bFtoZewRTa%2BjQE5mhwe10jOnVajCGbL36q4ulXPMvY%2FTuY0J%2BTR4iv6HXY9ZcEJ7aZM%2FKbG%2FnYuigFrxtgU8McSe%2B5VyL%2Bp5F6Vh5ejgRzEGn%2Be4Hud4EeIvN7gUClUveRnm%2FwD4tIhmPQYElr5S4CAZU&X-Amz-Signature=cf4844c023cbca96b59bdbf486fec20b6fd6c21fc57bff7f7f60f9606295db24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
