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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIKPGFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAYIGIcc%2BNL%2BKh3LnV0NN89iq%2FREy17Y4SUjsgmrBOFlAiAyoF3%2BW5vfdxct44SL8qOl%2BBjIIdnK8IsFDpJ7vxzs7ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMk9JX5wqnbsGfVgLxKtwDJCcEHSaIOgOiAUk8JLPr9IMk85mM%2FZSsKqUhWGqCYpHCr8wcn8bnVIwyD7thrzZVyNitVAQBISXiBbIEvmEOKSJ1zc7rmnxu0ynj5lgs57M7DHofk3koMud3YFVppvSrqvhp52y3zovgcvff8FvC6cW1Lf%2BCf%2Fii%2F0slFb28naIwBvTZggT7U4SqZ%2BfkZ9RgtUCVQihJ2BKJhcyj4d6T6mA%2Bwb0OO2aYUu4Bi%2BQ3E29ueted5VAtf5U5u8gi8Iikf2wAsdpILloapxXiRpp5lfedgK2TpgkYvHvRbVenrcAq7VRSF5%2F%2B%2Fw8uX2m21yXAQqq%2FDBeEOLumF%2FGCImXq0uVVFwZC6QNxOy64Ptptas5A90KIgHzgWnTt5yFCNzrhXZK%2BjmuKad%2B47%2BGEogogP4bROvkoysRUVoO3gL%2BnihTKXoyAgk4WY4aSWu9%2BwupRbeLVxI5AdwA2wY891mi5YjJHPUAZa0PAWJYMdOjb4vzYkkWCKwoPVT%2FJal7R2lEPLs5%2BxAwFBJXU9AXJWiv9UEu%2F%2FZSzhRuTzaD7Kz5N%2Byp9BYbYxtG3rFRG9uJksLoP8Dxafnftlxmw9vfKHsfymc9Ya4O%2FLvUnsA47FbnHY23iPNvPC2wdSAztdIIwl5W%2FvQY6pgF7lc1wyk%2BuNypwWwXrIdF65eIoDtL3N%2FAxU5kSQZwRTPJ8q%2F%2BfSRjuj3mMsnNwNz2MFNpri5kpcxU8QEYWEIk4j4Yb%2FIGT2sUK8JljsI8uYOzDfnwR3znha78932mFwKgf84wpc26%2Fo6tqpAa7rUpLOx9gorCbpYdJALGpp%2FZNoT2w6JOTpN4TcA16SO95SD5gABxQeQ%2BjfmqLpPEyGhzLgtYp3AAu&X-Amz-Signature=f7c31f3c1ca8ee819333c0bdf6e66f143d767f81ad5602d2a270092ac5650e78&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIKPGFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAYIGIcc%2BNL%2BKh3LnV0NN89iq%2FREy17Y4SUjsgmrBOFlAiAyoF3%2BW5vfdxct44SL8qOl%2BBjIIdnK8IsFDpJ7vxzs7ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMk9JX5wqnbsGfVgLxKtwDJCcEHSaIOgOiAUk8JLPr9IMk85mM%2FZSsKqUhWGqCYpHCr8wcn8bnVIwyD7thrzZVyNitVAQBISXiBbIEvmEOKSJ1zc7rmnxu0ynj5lgs57M7DHofk3koMud3YFVppvSrqvhp52y3zovgcvff8FvC6cW1Lf%2BCf%2Fii%2F0slFb28naIwBvTZggT7U4SqZ%2BfkZ9RgtUCVQihJ2BKJhcyj4d6T6mA%2Bwb0OO2aYUu4Bi%2BQ3E29ueted5VAtf5U5u8gi8Iikf2wAsdpILloapxXiRpp5lfedgK2TpgkYvHvRbVenrcAq7VRSF5%2F%2B%2Fw8uX2m21yXAQqq%2FDBeEOLumF%2FGCImXq0uVVFwZC6QNxOy64Ptptas5A90KIgHzgWnTt5yFCNzrhXZK%2BjmuKad%2B47%2BGEogogP4bROvkoysRUVoO3gL%2BnihTKXoyAgk4WY4aSWu9%2BwupRbeLVxI5AdwA2wY891mi5YjJHPUAZa0PAWJYMdOjb4vzYkkWCKwoPVT%2FJal7R2lEPLs5%2BxAwFBJXU9AXJWiv9UEu%2F%2FZSzhRuTzaD7Kz5N%2Byp9BYbYxtG3rFRG9uJksLoP8Dxafnftlxmw9vfKHsfymc9Ya4O%2FLvUnsA47FbnHY23iPNvPC2wdSAztdIIwl5W%2FvQY6pgF7lc1wyk%2BuNypwWwXrIdF65eIoDtL3N%2FAxU5kSQZwRTPJ8q%2F%2BfSRjuj3mMsnNwNz2MFNpri5kpcxU8QEYWEIk4j4Yb%2FIGT2sUK8JljsI8uYOzDfnwR3znha78932mFwKgf84wpc26%2Fo6tqpAa7rUpLOx9gorCbpYdJALGpp%2FZNoT2w6JOTpN4TcA16SO95SD5gABxQeQ%2BjfmqLpPEyGhzLgtYp3AAu&X-Amz-Signature=4031ca209e26360dc825d209579bf828e77caecdf0266799b259a4fb26026757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFZQPBI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCGgQe5m%2FDqQXXMa%2Boy64agaRqEky9gewhhtYdSYymO7QIhAId7W%2F1Yq9qsT8hEkL9SjN%2FLUB9FP6y%2FGOlqnF6WZadOKv8DCDgQABoMNjM3NDIzMTgzODA1IgzYu6feDN%2BG3AO9ewoq3AMKcX%2F1H5PbdJecsmb%2F7ot%2BI0Zd4kh0yBJSU%2FYY0iTmqbM523QSe%2BOeG85P9PDTxrjrR2gXpusNsT%2BtNDEb9x5V7zTnEPzX6pgpSBaQKDnjewEJxM2gd8RT5LdQnjLAwnxYrJ9PXHEdFrnhe8%2FSiRTUY%2BxmB8fJ8ScpOUcOiJtsEWjTnnkCDlNWlZE978KD5iCzNhnewfsRn7UxUJbzF87XYc8k9%2BuiK%2BIwea9InfZvsq8D71uNM2DCreoEum3mSHeCOE6OLOmYa4jPpeMAMBA8kCRI4%2FT7aIZYcGZlzIohvLo2pIpmQ2DXhUH1E2VjtgobUjd3XEljGOrDPuTz07cKjETlfNzgbIl9zB0kl%2B0aE4ee%2FnxxQsgAVYUO%2F052GszbLg2ZKuK3dgAAANyYosCf6a0XTo0SKv1%2FnBa7VowVgmGC%2FVcOTrxAqYyQvKYZoXbSWVfdfmWGFMxQucY7Jp7Wt2yCGR6Q%2FNUIzTTTlPekBD0%2FOrMj%2FG7Z59zDmaNAMXx%2FMshsWnzVpxQ22U2E9HH42u3rTaJ834%2F%2Fp51LFVG8m4L2qOOUuXp29EWrm6Ui60IEjJ%2FAI0cwQBI8HMZEYYc4KyPsE6DMyYEF0JoAvzXbdVuwxalXBddENi2BjzCUlb%2B9BjqkAXzC%2BoCRdDB%2BwtZF185VsRENkuqWzr4mxCuwVl42XstJqSfmhYODpm4JJHg7NbgP1XK88zzqaXkPEMImDQZuJbqdEBzkGeeh%2F%2FKbXhUAb2IUhMq1ILdn7vnJNzEA1u2dQuBnBIi0mzXEh8W5SzJWSFYGH%2B05tfgKH0W7A7jGlkQiPC3HpOfoKpy5PnG04OAHvRxw3qNnzkyQcQohI2DtQxZJs%2BHe&X-Amz-Signature=365a685e3463ac437a470449802b90ec0bb5d2aa33b7caa12fe2230edeba8181&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTV3GWAW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAsRomYoQIgHlYo39i5z3JTnwRv%2FPNwZSEQFsi6G9TBYAiEAsnWJVN6MXXwK093bC2BDE4V9OsPgCjdDKcohKCA9HpMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTu78Qft1EbfCZVSircA5vKCjtttV0bQ%2FbumeRMXc5IqyGc3UmLF%2BoOYN2eiCrnSFznQfhZox%2FY4BvtE%2BVePfDR8ih%2BNorTLTv90He0%2FvHV28DoX58PPSWLxOvbfC6buZ%2BhY2%2FxVXKaCjPVWEp701uC1lgDsd0pJwlXaMKOZnZ5ANC7YUBHqi6cbifAfuhDbZ4KICCY1WwdtcSQie20Sb%2FJ0G14cAj1mFxYRiZRcVkWVrJiSHg3Rrp8DCywRg1vUwx4WnbOJ00hgxxoT1DemjpbPmDDVnO9%2BOUBIifKNQq8brS3lWFLbKcHWkU9XuZJTmq7YGbtU8DYlfvf10X9Qf65cn26l6p%2FmTfdSoCM4UgEzH%2BVQjlmw4pOJkF3pgaSgMeYwEW%2FRmgjV5yZrM%2Bzh%2FbkhKlpEMQDSIGkfjAmxdm94H7vV1gB1epmrwIG2nRffgRCdfVY61tZNPzXGg0dzuKZfKcY92COQ%2BsNBrn1eHZgMXFFgwo5JWUe2w5ZC0vNWrGlZRk7wJrade%2FObVzmjHBRx8G9zwjdGj4GvvK3uV7WM73tBmdgWm6MpxCws9A6pyj4BtIICq3VVZsB76aJsZc5x23z8MRL6S2k2jLp%2Bq%2FJbXjjq4pJmxhsf%2BJsK4lpmFeUDdl1P%2FV2kgCLMKKVv70GOqUBlMYWuP0SXQgv2yuzSJrSj0L5XQZ%2FMvyHu0yVKQXu9s84iuimEcTOAzfxLVSNPt8TLiWPArRhTmEhZkX1BQy%2FIoFGj9PohlFZyeYVS7jVER7I0B%2B4Q5JBCn%2BJkeXMkRJIp2fBBDTfZ72Wfl2V26uOnPGFcgvzySyxsDBuVh6DuJqjK8nceJofbc85ng0q5kjFlZdCFubDcrZdkn0p7IfnWTSWmkFX&X-Amz-Signature=a1a690a6a7ea3536008d65aaf2604c3e099edbc2e99a63b6dc1df2203644d060&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIKPGFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAYIGIcc%2BNL%2BKh3LnV0NN89iq%2FREy17Y4SUjsgmrBOFlAiAyoF3%2BW5vfdxct44SL8qOl%2BBjIIdnK8IsFDpJ7vxzs7ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMk9JX5wqnbsGfVgLxKtwDJCcEHSaIOgOiAUk8JLPr9IMk85mM%2FZSsKqUhWGqCYpHCr8wcn8bnVIwyD7thrzZVyNitVAQBISXiBbIEvmEOKSJ1zc7rmnxu0ynj5lgs57M7DHofk3koMud3YFVppvSrqvhp52y3zovgcvff8FvC6cW1Lf%2BCf%2Fii%2F0slFb28naIwBvTZggT7U4SqZ%2BfkZ9RgtUCVQihJ2BKJhcyj4d6T6mA%2Bwb0OO2aYUu4Bi%2BQ3E29ueted5VAtf5U5u8gi8Iikf2wAsdpILloapxXiRpp5lfedgK2TpgkYvHvRbVenrcAq7VRSF5%2F%2B%2Fw8uX2m21yXAQqq%2FDBeEOLumF%2FGCImXq0uVVFwZC6QNxOy64Ptptas5A90KIgHzgWnTt5yFCNzrhXZK%2BjmuKad%2B47%2BGEogogP4bROvkoysRUVoO3gL%2BnihTKXoyAgk4WY4aSWu9%2BwupRbeLVxI5AdwA2wY891mi5YjJHPUAZa0PAWJYMdOjb4vzYkkWCKwoPVT%2FJal7R2lEPLs5%2BxAwFBJXU9AXJWiv9UEu%2F%2FZSzhRuTzaD7Kz5N%2Byp9BYbYxtG3rFRG9uJksLoP8Dxafnftlxmw9vfKHsfymc9Ya4O%2FLvUnsA47FbnHY23iPNvPC2wdSAztdIIwl5W%2FvQY6pgF7lc1wyk%2BuNypwWwXrIdF65eIoDtL3N%2FAxU5kSQZwRTPJ8q%2F%2BfSRjuj3mMsnNwNz2MFNpri5kpcxU8QEYWEIk4j4Yb%2FIGT2sUK8JljsI8uYOzDfnwR3znha78932mFwKgf84wpc26%2Fo6tqpAa7rUpLOx9gorCbpYdJALGpp%2FZNoT2w6JOTpN4TcA16SO95SD5gABxQeQ%2BjfmqLpPEyGhzLgtYp3AAu&X-Amz-Signature=0258284c3d4f5dbbc9e61be853ec64a53e5a736930fc07d3fef8a23654ef2056&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
