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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJNKH7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD7YORcxW2RJN0HtMURv8cBR0TLqkQDydvO1wjQo0yXdwIhAOiSUtnzf8%2BQq4oryYMDasXKAYIpZhN01C404qFiaj4%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz1LDu2G5b91G09JEq3ANsTyGjq81UPv20Pkp7StHWxqdM8Zs%2B3SInw46%2BvSWdH1B9nuafGUAKECa%2Bz6MXf25zIjvKaAbwbdbfqrDewXmXErelB0T83iPF7l7UsfTptxS91N2MaPsTUihfBHcSgEFFM6DvFKTXlDjVQWJnbn9fM9W%2FfBE%2FP%2B1Yk0AMkIN0OMOEqcf5S7ds4zZrGsmeiwcKq0qpSDp7yNQVziJFvxbgJP2jYrbgrQnoSI8GWhL8feHbbw08M8AnL%2FjQsM%2FoTSeor%2FpBVjuA2dQs9RVCaNPEAA4T%2B8yuDFgmaW9N3QfH6SAnobw%2BOe%2FBY7OIKlcSpTiOBS4rS3qJKz4WozgpkJCCPXkea3y%2BrPDc04E91LEZml067Y5xUJQJCtkHQv8f5%2Fbu54gBGjmK0NxX2xZ%2FZJR6mJveZD0nImP0WaEMq2A0I2JgSXMZpdxNZrfcyqMNJ7TsWIZxCdXMEIWzBhhvXD20wCLSOMoQUL7MS0qv9f0zCQsCbgPozGT0TzncgrU7ACNjBGr2JvDvr1W2uSYC1PowNVLn4bv7fpakYILIfU8vo2pH9xBA6MnjnPnsBZb0J%2BJlo51LeEfkCXHMoVZWvgcRs5CjUuC%2BDRKOI5App66SuYYIiEyBjpdkcfkIlTCtyKfCBjqkAcWGotuGNFdHLDSnuIU18HWvG2yu35cjKLnalvu8reqTfo2Dwf61ka4Lco6zqb3SpR9GBwtPtgD%2BJHuvZg0TJxPxyxc9eb54g0Oss4p0WwNi7jn2xGzpRFt1FPfotxLb%2B6MGsjaWJIKWqLquz6MbsZw7pZMKwcX6DH6F0z%2FkrseHqaG0YuN%2Fe3%2BydrLvgFAH%2BepjS1SwZrxdHlhHsmUPwCSy6VwX&X-Amz-Signature=f725bb42bd8a0396a02d39d9f117107e58dc0a155d7135245b45b68b70e52107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJNKH7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD7YORcxW2RJN0HtMURv8cBR0TLqkQDydvO1wjQo0yXdwIhAOiSUtnzf8%2BQq4oryYMDasXKAYIpZhN01C404qFiaj4%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz1LDu2G5b91G09JEq3ANsTyGjq81UPv20Pkp7StHWxqdM8Zs%2B3SInw46%2BvSWdH1B9nuafGUAKECa%2Bz6MXf25zIjvKaAbwbdbfqrDewXmXErelB0T83iPF7l7UsfTptxS91N2MaPsTUihfBHcSgEFFM6DvFKTXlDjVQWJnbn9fM9W%2FfBE%2FP%2B1Yk0AMkIN0OMOEqcf5S7ds4zZrGsmeiwcKq0qpSDp7yNQVziJFvxbgJP2jYrbgrQnoSI8GWhL8feHbbw08M8AnL%2FjQsM%2FoTSeor%2FpBVjuA2dQs9RVCaNPEAA4T%2B8yuDFgmaW9N3QfH6SAnobw%2BOe%2FBY7OIKlcSpTiOBS4rS3qJKz4WozgpkJCCPXkea3y%2BrPDc04E91LEZml067Y5xUJQJCtkHQv8f5%2Fbu54gBGjmK0NxX2xZ%2FZJR6mJveZD0nImP0WaEMq2A0I2JgSXMZpdxNZrfcyqMNJ7TsWIZxCdXMEIWzBhhvXD20wCLSOMoQUL7MS0qv9f0zCQsCbgPozGT0TzncgrU7ACNjBGr2JvDvr1W2uSYC1PowNVLn4bv7fpakYILIfU8vo2pH9xBA6MnjnPnsBZb0J%2BJlo51LeEfkCXHMoVZWvgcRs5CjUuC%2BDRKOI5App66SuYYIiEyBjpdkcfkIlTCtyKfCBjqkAcWGotuGNFdHLDSnuIU18HWvG2yu35cjKLnalvu8reqTfo2Dwf61ka4Lco6zqb3SpR9GBwtPtgD%2BJHuvZg0TJxPxyxc9eb54g0Oss4p0WwNi7jn2xGzpRFt1FPfotxLb%2B6MGsjaWJIKWqLquz6MbsZw7pZMKwcX6DH6F0z%2FkrseHqaG0YuN%2Fe3%2BydrLvgFAH%2BepjS1SwZrxdHlhHsmUPwCSy6VwX&X-Amz-Signature=e153aea9bcc774eb8ef8856a191e91396f3612130a6afae0f86ab33dd65ee2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJNKH7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD7YORcxW2RJN0HtMURv8cBR0TLqkQDydvO1wjQo0yXdwIhAOiSUtnzf8%2BQq4oryYMDasXKAYIpZhN01C404qFiaj4%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz1LDu2G5b91G09JEq3ANsTyGjq81UPv20Pkp7StHWxqdM8Zs%2B3SInw46%2BvSWdH1B9nuafGUAKECa%2Bz6MXf25zIjvKaAbwbdbfqrDewXmXErelB0T83iPF7l7UsfTptxS91N2MaPsTUihfBHcSgEFFM6DvFKTXlDjVQWJnbn9fM9W%2FfBE%2FP%2B1Yk0AMkIN0OMOEqcf5S7ds4zZrGsmeiwcKq0qpSDp7yNQVziJFvxbgJP2jYrbgrQnoSI8GWhL8feHbbw08M8AnL%2FjQsM%2FoTSeor%2FpBVjuA2dQs9RVCaNPEAA4T%2B8yuDFgmaW9N3QfH6SAnobw%2BOe%2FBY7OIKlcSpTiOBS4rS3qJKz4WozgpkJCCPXkea3y%2BrPDc04E91LEZml067Y5xUJQJCtkHQv8f5%2Fbu54gBGjmK0NxX2xZ%2FZJR6mJveZD0nImP0WaEMq2A0I2JgSXMZpdxNZrfcyqMNJ7TsWIZxCdXMEIWzBhhvXD20wCLSOMoQUL7MS0qv9f0zCQsCbgPozGT0TzncgrU7ACNjBGr2JvDvr1W2uSYC1PowNVLn4bv7fpakYILIfU8vo2pH9xBA6MnjnPnsBZb0J%2BJlo51LeEfkCXHMoVZWvgcRs5CjUuC%2BDRKOI5App66SuYYIiEyBjpdkcfkIlTCtyKfCBjqkAcWGotuGNFdHLDSnuIU18HWvG2yu35cjKLnalvu8reqTfo2Dwf61ka4Lco6zqb3SpR9GBwtPtgD%2BJHuvZg0TJxPxyxc9eb54g0Oss4p0WwNi7jn2xGzpRFt1FPfotxLb%2B6MGsjaWJIKWqLquz6MbsZw7pZMKwcX6DH6F0z%2FkrseHqaG0YuN%2Fe3%2BydrLvgFAH%2BepjS1SwZrxdHlhHsmUPwCSy6VwX&X-Amz-Signature=a1674109118a8606599907d4a5e14a38bdc83fd28e3ac242378e6e86233625a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW33DUZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqmg6a%2BsZpahuV0wKaj2i6Udr%2BJlwlCok%2FrwrDdhgy4gIhAMGcy24%2FEX6xeIfYM2YzewNVCocbx3j31BLTQRMCWLDdKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylZ9hs8E%2FNIT9QSpwq3ANbB4c6i0yRXLTI57lQw%2BVlyr7L%2B3oBaP3fFqFAMjAEFoAYlkwDmX3lKhz%2FJ5jtjcPy0jPgKN9AMRHM6bssKcm98bknoODkqNpbaO%2B7BnGtgtQ7D2JOV7dqAO8lkG80S7slmk9vqdGe%2F80La5X5v5ZOttS8ZPXJM2PEtkueCgIh09iofX1cevqcmnBe9TYQVntTuJA4BXgtOJEpGze6%2FYKbC7ORkXbwVHPHQTEY%2FlU%2BKOBhyZBrvF3gEehUqbu3m9UeTk2FVGuPgyOz%2BMTkRjrkeoezXxBKykcSlxXp8VnDOHg5nLjNSngTa41vEHDlR9%2FPivSh2rIaQ3YPTQeNjLk6pOKSch3XIzAU3oVvyBYlz8DpQuWmXfxyK3YIMmYP3Pb3tEiZI8hdkYZXoSiQqh8aqnIBqljc4Ha60xSQYFOvAh6V1SReVCNCYDL0fF64IqHprVwwtW4wtCvQqEo3Bs1FZtzD6%2BrahU%2FZB6xlyfCLOm%2F%2B3OBdTLeQ5iAfK0g%2FyoplhgrZ%2Bz9Dxkfsy0Uv%2Fy8l3hSzUIpEFLhuTxRMjPJXEE1%2B7fJxLKFDfcZVuw0W3EPJE0gnJPMIEp%2Fp3Got1gOH0uerEBjDhB4wh2P17jdY%2B2UAkAy26r8F7sIA8jDLyafCBjqkAYwUePFxnoeqEhu%2BscHtw41pZ%2FD%2BZ%2BsWEpsOkq5tImA5Gm6yf0X33dh4MJF77ENpR60TXF2ZF2JECus5mtxxKnkBkmgCw5bufGR9QdvA1vZC3oWHwtAs6Bhm1tuQpQMsdZVQsD%2F2KPNTrzVp5sqt7PrgnLyFkusrnZnxE3Kp2g1wVLqXS4TvfeX01LfC1kwUaorMnTwmFvfvM7figvpzsGeFBwFx&X-Amz-Signature=622dc18d21e771960f3f54a35d995c1f73fed5ec9ff378a4945fb3aa5b2b0c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLKK7POX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIH3PuQLK21DeoRg0g0wocaorTSNWTKudFnqAXH6Kq0lfAiAno6J1sV%2B7xVFYT8loTKjOCstG3y58LB3EdjKsvE%2B6fSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2FKJqazYykVP7FXKtwDW%2Ft%2F1URT9llM1zO86lAz5tm7mzBzMpUONa5AvMLx3%2F%2F7TFjKud%2Bk1rdK1mC0NSj7fcosH2VrFK7Gx%2F7FyiiYTnRT1zwgPW%2Ff2xJAltaTSI7VTQe2GRRVTEQ4BiRpxpxmgGVgXRyujquyjZhOdkbWOiuS11eZyEUCbr0V7ddkXlSdnTv9FfN%2FiQ%2BuDEXUOCMLVRFwBGfUThVnPPXHcJgxE7VMVgiN9H52CW5vxV482OJ2zLnUEyw5APtdBShqPTTWfu7h6s5ZeRMDKE7tygWe%2BvCr5Y6diXNxczsEA1K1gOs45RrbNntFvSzkvHfibg819SQspVr2D%2BQ4Jj1XbvMlmQXh%2F9remj6oDBJK4LECKH42ow3JBZvRA8Grl%2F647lItpZD37qoZmSufuugpAHMc8Gzv9x%2FXL4GaPOvXkl%2FLnjgpnJ27lE0sFA%2BdisiTfSBrZBiIImCi3Cu9iWW%2F4NGyMkhFsNwJqiW2P5ukredSL6rrBFd7y%2FVQdSd9s7YZWve5vPkD9WFULEz%2BHOZpzULPHOAWDJVUiEqaHyA8AfOWkc2z%2FO8sOalcLBquJ9Dnfu7YWkpen6fng3L4FHGBWtX%2FT3Q%2B8yNKmK8GoM%2FjwiTDoqqJbgOZ947JzJ4o6bkwwMinwgY6pgF0jEWM9aV4nPA8tPbE%2B9DIYpazn1kxkel%2BQ4yaEgT55uGCaqnlK7Igl20bti0eVpMNuZhumo6zS2tqJYY1xWcFv1SkhUiao2Nv0mAhKGirUKsUZCLvx7TzA6ScuvLPzZldk3FnGUHa6flVSjmAkUvRAr9bTZcS6V8sPUoQnMtE24RPo6WVNMO1enfX7DGbq4fJhdiOzRpk%2BBvUPihNKfw%2BI5NCobJn&X-Amz-Signature=d82d160737853ac91d540927ab1c210f7879e0c5c6597ff415d2f7c8f391542d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJNKH7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD7YORcxW2RJN0HtMURv8cBR0TLqkQDydvO1wjQo0yXdwIhAOiSUtnzf8%2BQq4oryYMDasXKAYIpZhN01C404qFiaj4%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz1LDu2G5b91G09JEq3ANsTyGjq81UPv20Pkp7StHWxqdM8Zs%2B3SInw46%2BvSWdH1B9nuafGUAKECa%2Bz6MXf25zIjvKaAbwbdbfqrDewXmXErelB0T83iPF7l7UsfTptxS91N2MaPsTUihfBHcSgEFFM6DvFKTXlDjVQWJnbn9fM9W%2FfBE%2FP%2B1Yk0AMkIN0OMOEqcf5S7ds4zZrGsmeiwcKq0qpSDp7yNQVziJFvxbgJP2jYrbgrQnoSI8GWhL8feHbbw08M8AnL%2FjQsM%2FoTSeor%2FpBVjuA2dQs9RVCaNPEAA4T%2B8yuDFgmaW9N3QfH6SAnobw%2BOe%2FBY7OIKlcSpTiOBS4rS3qJKz4WozgpkJCCPXkea3y%2BrPDc04E91LEZml067Y5xUJQJCtkHQv8f5%2Fbu54gBGjmK0NxX2xZ%2FZJR6mJveZD0nImP0WaEMq2A0I2JgSXMZpdxNZrfcyqMNJ7TsWIZxCdXMEIWzBhhvXD20wCLSOMoQUL7MS0qv9f0zCQsCbgPozGT0TzncgrU7ACNjBGr2JvDvr1W2uSYC1PowNVLn4bv7fpakYILIfU8vo2pH9xBA6MnjnPnsBZb0J%2BJlo51LeEfkCXHMoVZWvgcRs5CjUuC%2BDRKOI5App66SuYYIiEyBjpdkcfkIlTCtyKfCBjqkAcWGotuGNFdHLDSnuIU18HWvG2yu35cjKLnalvu8reqTfo2Dwf61ka4Lco6zqb3SpR9GBwtPtgD%2BJHuvZg0TJxPxyxc9eb54g0Oss4p0WwNi7jn2xGzpRFt1FPfotxLb%2B6MGsjaWJIKWqLquz6MbsZw7pZMKwcX6DH6F0z%2FkrseHqaG0YuN%2Fe3%2BydrLvgFAH%2BepjS1SwZrxdHlhHsmUPwCSy6VwX&X-Amz-Signature=0557d48032aff14ee3d61051b8684e9be734c3c3b9e1aa6d9058573f399cf901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
