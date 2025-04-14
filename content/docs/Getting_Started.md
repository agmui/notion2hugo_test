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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQEDUFJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkC8u9ufWBoDPtpRIA%2BLlg1IXoLadognmBvEu8SU7NZwIgN3iwD7rqfuhKIW68cc5i67OWpvDMZ04N4HHjzNIopswq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDPjBWQM%2FI3TZYGWsircA1doHE9I8Ywb%2FIW8N6kFuvxisdZKvA%2BsDGwFyeDhwAZhMuFYqkeE%2BQfbsz0GFTGmMxbOF%2BAoOozUtdulg%2F5VSREG4J6NUUfCbduE7i8I9h3maZTQWju6Hvi8Ts9aq0ESLhHTjm0ifCfdbEalp4oDn2huc9NCaiLYBg2cbKl%2Bfk7Ur1W5wUeIyT4su0kwL%2BQP%2BJEzPDhfPA2aIuaLsfpexQ0lpMpY2rGJn37PFRdXdt3xrs%2BYpASgnMlNZ5hlJXi89AidOiuUdeERzDg%2FE8KhbDD13SvUY2Wpbf9kOAaeQvNVrpQQBoANWW9x8C%2BtXcrCfcru9m2M04yFJXLy1UoYwT1OhGvLEdg%2FgKJ6f68biSjygMercmDlq7BTXvoo1Kj8LiBNxrnWWzie00aLLUyjbSEKgvUngKsovOx6ntnLkpzBqBowVgYqGpFDSI2f1Zw83910VniHJ8MbrcaJ8dnaxm3nTCnj81k2JQxE%2F5Z%2BNk6He4BgJNE8vKQJ3R9cgMovDqJnIc45dvLAHcLbkyXiNx9G2cdmgSi7rY4t2QE%2F25geOGD%2BvvsaWLkH0HiMqCuUC1PPauWTPcfKsB0d%2B6FF3UJ7ZWtCUL89BTshy3C%2BmQaHi8IvMjp5t52T5WIJML%2BV9b8GOqUBXy1hAsy1Z5BhH%2BLmM18Yg8P7qMHYSRTgDddbzPTAUg%2FHDCFHIAs7fFsP2SvA7QXqr8jQ6IDZk%2BwkZ99%2B5%2FWevlptk94NL1kH7bQz9acKvROuxwHUB6cfKpvoGha%2BBDEpGa8PsoPGBuhXYnzhXaABZitfsOSuRaB%2FF5uo%2FqnCXmoyr0GdaX1KQXLSgh%2FBsh5sUBlEXCIf3mhoJwz7RzYJN1NQT2BQ&X-Amz-Signature=46685e6277ece892db79430f826540f266e4dc61e4e74487cc7704454747f08b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQEDUFJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkC8u9ufWBoDPtpRIA%2BLlg1IXoLadognmBvEu8SU7NZwIgN3iwD7rqfuhKIW68cc5i67OWpvDMZ04N4HHjzNIopswq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDPjBWQM%2FI3TZYGWsircA1doHE9I8Ywb%2FIW8N6kFuvxisdZKvA%2BsDGwFyeDhwAZhMuFYqkeE%2BQfbsz0GFTGmMxbOF%2BAoOozUtdulg%2F5VSREG4J6NUUfCbduE7i8I9h3maZTQWju6Hvi8Ts9aq0ESLhHTjm0ifCfdbEalp4oDn2huc9NCaiLYBg2cbKl%2Bfk7Ur1W5wUeIyT4su0kwL%2BQP%2BJEzPDhfPA2aIuaLsfpexQ0lpMpY2rGJn37PFRdXdt3xrs%2BYpASgnMlNZ5hlJXi89AidOiuUdeERzDg%2FE8KhbDD13SvUY2Wpbf9kOAaeQvNVrpQQBoANWW9x8C%2BtXcrCfcru9m2M04yFJXLy1UoYwT1OhGvLEdg%2FgKJ6f68biSjygMercmDlq7BTXvoo1Kj8LiBNxrnWWzie00aLLUyjbSEKgvUngKsovOx6ntnLkpzBqBowVgYqGpFDSI2f1Zw83910VniHJ8MbrcaJ8dnaxm3nTCnj81k2JQxE%2F5Z%2BNk6He4BgJNE8vKQJ3R9cgMovDqJnIc45dvLAHcLbkyXiNx9G2cdmgSi7rY4t2QE%2F25geOGD%2BvvsaWLkH0HiMqCuUC1PPauWTPcfKsB0d%2B6FF3UJ7ZWtCUL89BTshy3C%2BmQaHi8IvMjp5t52T5WIJML%2BV9b8GOqUBXy1hAsy1Z5BhH%2BLmM18Yg8P7qMHYSRTgDddbzPTAUg%2FHDCFHIAs7fFsP2SvA7QXqr8jQ6IDZk%2BwkZ99%2B5%2FWevlptk94NL1kH7bQz9acKvROuxwHUB6cfKpvoGha%2BBDEpGa8PsoPGBuhXYnzhXaABZitfsOSuRaB%2FF5uo%2FqnCXmoyr0GdaX1KQXLSgh%2FBsh5sUBlEXCIf3mhoJwz7RzYJN1NQT2BQ&X-Amz-Signature=94e79ae5f1ed92fa628d4dc2d485cf9730323c3e4570647ff4bd70fabade7637&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIRPU3M%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAz9zOh3wW8eMs7ir7fXVp58aHRfGWodDn1ge%2FvDiA6AiEA5P2pkieScd7nK6oxgO2vF1g5Ew00eha7VA8%2BhfbAyCoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMzNwXJba3ZORNVmdyrcA%2FEandzE%2BWF2xereYqWAQ9RGeVQuuxkujYlVcLiZiVm4m2HARQ4uHDpJUzB1XhuEXhwQuEKnvMNVioMsLacTWUtkBoF485bCmU54rtJW8ZCPx8TRr6GfUFzcrwj4CD2LQ9F5pmsLPIjySsFHDDGojRmRN0LMo6UES2hqYM%2BZHgBI9E%2BIe5ApYge8ki22F5VUU85ly3Vjrlj%2BGhFv3QlAbcjIa%2Fo2gu1dldUpV6sWfdJL%2FaBVIuu8Ky0VIUicFI3AD6i%2BU83bkclA%2FYwXtzf5fimBh%2F2Z1Mh6gQ%2Bx7n2SSTzYBPOp%2BszZAhrZIXGugccuBhdbDdHQWGdt%2B5M4S4VXBxySMoEfU5LV0a%2BigHOf2iCOSp6l2qt1L%2Ft5X5uhLzLyI8p41%2Fo6pIwuP2OCLyMZzikGopUh66hAFOvc4NBM%2FNkEP%2FfPLZWi3oALrkDkd%2Bal%2BitJFcZ%2FvdMvivZGkoTp9z7sEqVGjc9YlRYBa9SqUAZXXkr9LmkM5bjbviaXIAnJIB%2FrUo4GC73mgYbuBSjWWOsnBu211u5a5waxGxCuBpp%2FbMsGD22%2Fa%2F1eSLSBAnkOvNz2n0jZz%2BCF6I8AbMZSH1mrV4vraH9NxyLjFmz%2BnhZ9SgNR%2FORJoH5G7bIlMJiU9b8GOqUBwK5L2kP8gZgLiaE8wyKxZk3Go9CdohyC9N%2FsGdh0z77%2FPXIzw32IoOiN2cgK3pzX8jU4dazqBcbVJyhq1jCaLQhIe8K9HZUpkRpWP%2BoUEtby6G5BEZzoOYpb1Jaf3lk4FV0VgRAtKr9EEwWIN6vFVSC%2FEe6nXynytWBivwFvbISCNE7dYUIYs2vvl8KmKbxS3LaWrEliZf%2FQV1pCvzpMNv6OGcBB&X-Amz-Signature=4075b334e7fbccb81101ee2e9c576f96a763960cc0d71fb293b46b53cfb07903&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3M4WQ3J%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXtqSVZcMjX7v%2BtuHA7VwTImqyWrvpDdY25xGAZZRrZQIgDk7gnrDb2Skhd0LXczsWR4nzfulmul9lkMt1TzxImdYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA6FoccZnfoaRptLRyrcA0fb6h02YYv7PW5Ia2Iu7%2Bp35ltiqboubbbownDCo%2Fe6fjgj7z05wxHOfUBmSkWuN8%2FwuctN3lQeRuxBl31jBLHN4qvSAcerKAT47iW763a4yq03On5a%2BE3m8X%2BN%2B9%2FFBrdM68s1%2F%2FyvTANA3lDy%2FhNgX2IGlciutTz5WEwq7xIxvc%2BVV6l%2F1N5hBlluwaffB2KoE6mL%2F5TQA24ooyGpWKK%2Fg1Qynq%2FEEAyyxIArMvOWjkB2lantzGPdAvmzb0SZp4gOCdfxo%2BsIcQvQdtwDpr12mSdiuMKQx4ZbUvXhG%2FsdRrmWc9HV4INat6Q9PfoVIJmKzDpoBlvVZjwAhR9nXsJ7YKuOaRq0WHMVBELX%2FjIHMYwu6zxtSq9sPbndpwyKtTSj6tG%2BcbHoCQZS0VW5COfP7%2BApy0ioXIHauG7hZPmxjNc3o2cChUEUIHVc5XbSmK7yOam3MtfeUU%2FMJSNs6atUzOfkfx1xUb0zpZ%2Fukedz780t9VGqePCjfIASP0JNhklx34qZi6T918XyM78ihuTRrWUjUmjE1sznKfrsOiZRqKn0vOVgE8MSUGb8TZ3ETh4qzIYoqzEp79ZdwWa2WTFPiWDDj5mJKVamleDU%2FAWapUSEtmLuegOc0NUQMJ2V9b8GOqUB5U1ivMV3NmkVA089zgbRmqUGNeLiMtguFwJqWLB6ZLDn7JXwy2yucnevq1G3o15pGN89p1Fc68c5YgR3lgOLj3KiOPKjGSa%2ByM3AOsNvwCJU3GRexNyusDFnA8Q%2Bs9aEFOJGTlNAFJJSuJx69ofJhFYUNo5IuOGQIyNEiW6bZkOksUK%2BscqV4Z2muF%2B78KhquqCOc3wTJzrVk%2FT6XXRyYZy72sL4&X-Amz-Signature=9948cf8105f0d99e0d135f3997ff21355fb2ffbb1ff40f64556104913f228111&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQEDUFJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkC8u9ufWBoDPtpRIA%2BLlg1IXoLadognmBvEu8SU7NZwIgN3iwD7rqfuhKIW68cc5i67OWpvDMZ04N4HHjzNIopswq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDPjBWQM%2FI3TZYGWsircA1doHE9I8Ywb%2FIW8N6kFuvxisdZKvA%2BsDGwFyeDhwAZhMuFYqkeE%2BQfbsz0GFTGmMxbOF%2BAoOozUtdulg%2F5VSREG4J6NUUfCbduE7i8I9h3maZTQWju6Hvi8Ts9aq0ESLhHTjm0ifCfdbEalp4oDn2huc9NCaiLYBg2cbKl%2Bfk7Ur1W5wUeIyT4su0kwL%2BQP%2BJEzPDhfPA2aIuaLsfpexQ0lpMpY2rGJn37PFRdXdt3xrs%2BYpASgnMlNZ5hlJXi89AidOiuUdeERzDg%2FE8KhbDD13SvUY2Wpbf9kOAaeQvNVrpQQBoANWW9x8C%2BtXcrCfcru9m2M04yFJXLy1UoYwT1OhGvLEdg%2FgKJ6f68biSjygMercmDlq7BTXvoo1Kj8LiBNxrnWWzie00aLLUyjbSEKgvUngKsovOx6ntnLkpzBqBowVgYqGpFDSI2f1Zw83910VniHJ8MbrcaJ8dnaxm3nTCnj81k2JQxE%2F5Z%2BNk6He4BgJNE8vKQJ3R9cgMovDqJnIc45dvLAHcLbkyXiNx9G2cdmgSi7rY4t2QE%2F25geOGD%2BvvsaWLkH0HiMqCuUC1PPauWTPcfKsB0d%2B6FF3UJ7ZWtCUL89BTshy3C%2BmQaHi8IvMjp5t52T5WIJML%2BV9b8GOqUBXy1hAsy1Z5BhH%2BLmM18Yg8P7qMHYSRTgDddbzPTAUg%2FHDCFHIAs7fFsP2SvA7QXqr8jQ6IDZk%2BwkZ99%2B5%2FWevlptk94NL1kH7bQz9acKvROuxwHUB6cfKpvoGha%2BBDEpGa8PsoPGBuhXYnzhXaABZitfsOSuRaB%2FF5uo%2FqnCXmoyr0GdaX1KQXLSgh%2FBsh5sUBlEXCIf3mhoJwz7RzYJN1NQT2BQ&X-Amz-Signature=9a0d44b8c3f623876ea6f9301091a31bddf952bd6de5c8e09f339fa7b34aebf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
