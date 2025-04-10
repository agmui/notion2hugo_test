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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHG3MRD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGhBRekn8bwON5AMJpb3g0Ud5RtuRGXCAmK%2FzRwyaRxqAiEAi8DRcyZOqE3b3Yj2O3F8e6E5NoLziZZ8OnI6vupeTZ4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOao9CfBSJQ28Lp%2FSrcA7hBd%2BkUcIK9KEHp53iwllFxxNeSUqEOBjFHe6x23z%2B%2BcPnMZhI9G9%2Fsp1kPpStVndztXxo9zDhjxQHUA3cedkmss3m9vdhDA%2Fw1kMhR1Ar3T4Xd1z1NCm8cIYjfnApHTADCwVKdlnxpTQIdwpRB8SLC7j%2FOXDeHKcI5Vn1zl08OfDUdMugpTT%2FxBOopllwkaolLoOCW4IVge9tm9l8l%2F8jG4lKvhjqC2vuf3BWuVpROf1PeOqKItc3QBAFC%2F0fmkike%2FG6PeiSjY7dpKPBquhB29v1Y4BIeKD2cFr02djznxZXQj%2FIXEIbcok%2BvL7lOtj6ygHvjUmT6U7aZYbd4DTxDg9j2cxsC5slKZvbciQMvWC4AGrz7f8axVkeYbzYMA%2FbcSsb1KeqwXVuRZ4mH9J3HcsHLUcUMlsO%2F71a8jnaV710tLnT6Kay3FrmpqpwkZXMExT2jI63PHd2D3HH5arMPUAqOhokzqA6By6NCEd7xzyap%2BfpBbmJ62ix2xRARDzbxD6sib0qzLTFWWklbU1DSTqwzw7GkYZUt65wbyg1zNlIbkST0Gc1IPy%2FqYM%2B1Tr6PuIUxBxtor6fNsWgxs0unTAtsSY%2FyjI36sVlLDa5AevOF%2FWDPoDhL6Yq3MMjB3b8GOqUBnQR6mq%2F7CczgBmWyJBHApf0lJzGBNxPSNQDLD0HgXve38J8CxV8YmtYdxZdmR8mkNYQaOKw2SIxkEY6an4en%2F1tJJsDGSkzcOG0awCj6W6cUUhkCxBclTEsQTh9sIWyFw5vwsTcZ1QEaOIq6Arqtw2h4UL4QBSuFEwavdwPVTC9HynrxNGA5EfAeFvj0JHHBP0ULoFq1MxUdB9I717xitZUvzXy8&X-Amz-Signature=4e72069ffda3ce114c1a5c2a3843612acf86bda656dca31c74f5b5b97f88bbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHG3MRD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGhBRekn8bwON5AMJpb3g0Ud5RtuRGXCAmK%2FzRwyaRxqAiEAi8DRcyZOqE3b3Yj2O3F8e6E5NoLziZZ8OnI6vupeTZ4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOao9CfBSJQ28Lp%2FSrcA7hBd%2BkUcIK9KEHp53iwllFxxNeSUqEOBjFHe6x23z%2B%2BcPnMZhI9G9%2Fsp1kPpStVndztXxo9zDhjxQHUA3cedkmss3m9vdhDA%2Fw1kMhR1Ar3T4Xd1z1NCm8cIYjfnApHTADCwVKdlnxpTQIdwpRB8SLC7j%2FOXDeHKcI5Vn1zl08OfDUdMugpTT%2FxBOopllwkaolLoOCW4IVge9tm9l8l%2F8jG4lKvhjqC2vuf3BWuVpROf1PeOqKItc3QBAFC%2F0fmkike%2FG6PeiSjY7dpKPBquhB29v1Y4BIeKD2cFr02djznxZXQj%2FIXEIbcok%2BvL7lOtj6ygHvjUmT6U7aZYbd4DTxDg9j2cxsC5slKZvbciQMvWC4AGrz7f8axVkeYbzYMA%2FbcSsb1KeqwXVuRZ4mH9J3HcsHLUcUMlsO%2F71a8jnaV710tLnT6Kay3FrmpqpwkZXMExT2jI63PHd2D3HH5arMPUAqOhokzqA6By6NCEd7xzyap%2BfpBbmJ62ix2xRARDzbxD6sib0qzLTFWWklbU1DSTqwzw7GkYZUt65wbyg1zNlIbkST0Gc1IPy%2FqYM%2B1Tr6PuIUxBxtor6fNsWgxs0unTAtsSY%2FyjI36sVlLDa5AevOF%2FWDPoDhL6Yq3MMjB3b8GOqUBnQR6mq%2F7CczgBmWyJBHApf0lJzGBNxPSNQDLD0HgXve38J8CxV8YmtYdxZdmR8mkNYQaOKw2SIxkEY6an4en%2F1tJJsDGSkzcOG0awCj6W6cUUhkCxBclTEsQTh9sIWyFw5vwsTcZ1QEaOIq6Arqtw2h4UL4QBSuFEwavdwPVTC9HynrxNGA5EfAeFvj0JHHBP0ULoFq1MxUdB9I717xitZUvzXy8&X-Amz-Signature=6b8f408aebbe7631b35401b719d69fd8150518c018c1dca45469ed252f0ebb92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KLJUI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEvxswCwfCAw5pbTnerVyLI4PmlXo1WZJmBP1SDYwVt5AiEAqHZPSgFVe%2FAVxxsCI2T3WIITkkoPLsONyFTscIHXGOUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdaHh8sFtF%2BJ0bbAyrcA2m5ihH3SHGY8dvn7mJasp0gEFbXOcnh8w8GwvGuASKLpsa4c7uEUWCVvcXhNOHAoj%2BK3xlNMkiaSBNrFzIf9isf2pLwe4K3mwE1TL579MMI5zm1VsgAhLnQDdZalvhpf1Gl%2BjZm7cpyEwUmdlzfafeIag9aA%2BJW1gijg6TVKju62lmI2SySjKBUcOvS9UpAagNl74hr5JFOcGT6Hz01IRRYqi3eIHaRrhB45nHAjAWKxh%2FdUjFZPhlxPTnq%2BdmbjYnHehDI4IXkE2R4Ao9932ubaHyrakWn2XmRAlSScqB0Sc0eyrSyF0r8dj21KizmTYvTtu%2B0c%2BWUc0bQ5SCzZRHbPfM4xIAo1UW9pJSR70ZLAqySiGgB878G4GMJTnYMkchdbL8e8l0mysNYljrVXGyYFVGwjjk8HKJz2iwHuGA1M1KXp9YFnfYKydvxEk5tIuurDbAogM5xMeyUqTmFqafDiqzad7rOfeTmkEg2JwaFuvtHHcw%2FY39GEKQA2a9mGSLwXu%2BtnH7e17Kc%2FoTGt4ZcnN1ZmVrYzGHGoPySjycqgSDv%2F%2BRGaO5h6AHpq65IcJ5N5P6a%2FVZGvIjk80TJ3HGQbMruLU5u8i8dnS9TPLJCQllBHnkKZHyi%2BejiMLXB3b8GOqUBWpXm%2BwtT9QdYFZOiuKlTLMW0x9hz1OBFHFYXrIWjV7%2BJhbz1LdiANPkzw3wgA4%2F%2FxdIc0dlh%2B1HqneRRf5HKToJGERH1ZVAN7gT4FgxaHLRDkUGwySHcjbKCGU2nibJ%2FQsGMFurcnEmJe4SgiWw6DMjFtva%2FufXs4%2FMH4XT4IuPOoRf4zjUrxonsPxbQU3ORFum%2FkQurOqOFyPfpePBQlWQNnHQS&X-Amz-Signature=5a893854e559887d20f9a6fca60da11890e888ec2a7e28264f606d9b5df7e71e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQH7MKH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD5NvtETlrOf4A42gxpH5cFk8ucJZLXHWvx3gqvjx9u8gIgA4iwSbtkSr%2F8MT97I7d8M%2BSYX51FNBXYC%2BI46BVCkZ0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGkk5sKUoF8iTAR9ircA4Y3tlf255FlTnPC7ZRb0gClcVyFeKIgqOsqRdXV%2BJTCqjoFiI5RlD%2FG6dCorZJz0yayg4TitV0AJnu44zb0CDQxwaK5P4hN%2FCPywGzur5IM1lyhy6BwgbMbrMGfR0fCYN7fpr9%2F2QtoF3Nb2ndPbzfxNjpvejzQQwqpuM9Lvud3v4RNEyuqmxuEC5vkZ5ckZc5xQeQrtw8wuZOuiBrHSfNXlesAYNPy%2BxvaZnGD0%2BL%2BI9h0CpckqziwybP8gWBIGKAZOqGBxyV5HYcEvIIrmrwZI8QBKUrIWTlPPo%2FDM04btdsZI9KB%2B8iiT21GSiO4fYO2Y%2FJ%2FsoxfEh8woEBqqIkwvAtEdlNnj1um38OcTyxDmsRjPzp1aE8WJZ%2FILjLsn%2BQzu%2BKCO0J02UyruK2yrhh46ZYMPYnUIubl%2BJmBz32b4fRBIL8gFkOQpArpmBTD%2Fmg4Vi5uPMVKsaEgDY6EbArZIiAVtdXTiIdSYG7IR5BPY%2FtlyHoMC%2FqezFtZQ4%2Fm6jxMMAlKC3dQERwnIsGNvu0mgaoWSwXwJZYNNZcI9%2Fse7s1YIpup7hngPSDjf6YKbk5N6GZsiigRF7RepN%2B7tfjU%2FXWBFro%2FasB9l%2FitdQIdHGvgKGCVfJB328zBMJjB3b8GOqUB7tbKm1yVpOKehuZ6ggGTQdX4hhaB1r%2Bv9srEdRW8Ox8EAoiukiW50aqG9fR4cm5KT8dcw8mSbyLnxHVLoNu%2BwpH46XE50vmyz4uJNfHt1bYkxHvM%2BYNG4sZ6yOl0AgsA9tLYJZ%2Fj8bnrU9JQ3tt8AYYZxTfIQHp2d3moUTm9OxgugO7VpZmhpHy6p11VGLV5mwWKSakpSKk%2FgnrZpNwNq1OJ%2Fx%2Bi&X-Amz-Signature=1b39ea1612568bdbbf8cbacff9060f28426b187e873857d7e305aea1e587f2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHG3MRD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGhBRekn8bwON5AMJpb3g0Ud5RtuRGXCAmK%2FzRwyaRxqAiEAi8DRcyZOqE3b3Yj2O3F8e6E5NoLziZZ8OnI6vupeTZ4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOao9CfBSJQ28Lp%2FSrcA7hBd%2BkUcIK9KEHp53iwllFxxNeSUqEOBjFHe6x23z%2B%2BcPnMZhI9G9%2Fsp1kPpStVndztXxo9zDhjxQHUA3cedkmss3m9vdhDA%2Fw1kMhR1Ar3T4Xd1z1NCm8cIYjfnApHTADCwVKdlnxpTQIdwpRB8SLC7j%2FOXDeHKcI5Vn1zl08OfDUdMugpTT%2FxBOopllwkaolLoOCW4IVge9tm9l8l%2F8jG4lKvhjqC2vuf3BWuVpROf1PeOqKItc3QBAFC%2F0fmkike%2FG6PeiSjY7dpKPBquhB29v1Y4BIeKD2cFr02djznxZXQj%2FIXEIbcok%2BvL7lOtj6ygHvjUmT6U7aZYbd4DTxDg9j2cxsC5slKZvbciQMvWC4AGrz7f8axVkeYbzYMA%2FbcSsb1KeqwXVuRZ4mH9J3HcsHLUcUMlsO%2F71a8jnaV710tLnT6Kay3FrmpqpwkZXMExT2jI63PHd2D3HH5arMPUAqOhokzqA6By6NCEd7xzyap%2BfpBbmJ62ix2xRARDzbxD6sib0qzLTFWWklbU1DSTqwzw7GkYZUt65wbyg1zNlIbkST0Gc1IPy%2FqYM%2B1Tr6PuIUxBxtor6fNsWgxs0unTAtsSY%2FyjI36sVlLDa5AevOF%2FWDPoDhL6Yq3MMjB3b8GOqUBnQR6mq%2F7CczgBmWyJBHApf0lJzGBNxPSNQDLD0HgXve38J8CxV8YmtYdxZdmR8mkNYQaOKw2SIxkEY6an4en%2F1tJJsDGSkzcOG0awCj6W6cUUhkCxBclTEsQTh9sIWyFw5vwsTcZ1QEaOIq6Arqtw2h4UL4QBSuFEwavdwPVTC9HynrxNGA5EfAeFvj0JHHBP0ULoFq1MxUdB9I717xitZUvzXy8&X-Amz-Signature=1e34e6f165279c7c0361ad6891eb12eb2079e5532e3a897bade6e948376348fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
