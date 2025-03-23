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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXYYVYA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIE%2FPIk9x2LZHz3Jl%2FdtBVMGjaZyf%2Fo3ogGZFu5TNyLxAAiEA%2FzPw21NO%2Bg9V%2BgCvVy7Q4nHVRHz%2BIB4wwZ60E0C3%2BHEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKy090S1PW16oJrdyrcAyHZ%2FNTW8Zt4fGKkbnVpyZj52od61iERA9Gvfryks%2BzhTNnEfZZ7bfVD9SeHmQIv1NeeZU1atk8JXQcaJIUkOLVDUusphxZY82g%2BznOVfuUZv5JyZraK4tFo9eQJBBIZoM%2F%2BkWOAhh60G1u%2BJX5mv8c%2FCbsgDFFdLd3MDCBEVao2AdYWoZJykGRDTWWYP73tPwuRWFnYlmmXKCkDtTB9qwgkKkl%2FaDUKrDgOLnJ6QHF3IsEv8g6oPUy3IOFwJPIx8n45HkD%2BC5IaFFFddztiV1USTFbsUwFB7HYpXDSK2O3kDcRyO%2B46YcN8SBjPajCGRpR6bRstCu8wLgKbKRv5Nq3IaXfM7k4hxMSiVKNoHa3cq%2BE9qLBTXx77gl3f9wEPLKZfLNYMPq%2BL2AiiR9Nm5jo%2FazjF61nlaw2z2hUUuKq5oc596BlMgBSlGQzvOOhxld9wXzvcDOe3Li1jssVitZz6ERNWfVJuaVg9RgKV42CzC2RtfFDCkzXEoNmhzwSHibfa8SVLjQ8TGArkkg0JGdfiWfWMt6WwkUfpxACvEbn0GORWlXGusrPIgzomg4KATw1B5lm2I8IC8ZJc8wFkOiOvKMMiTSILkJ1lIFX6Zt51wBzcvGL3o4%2FBdd2OMJrj%2Fb4GOqUBC%2BUU6w%2FcU9GlIBRS%2BQVMI2tlgMPeVeGMSjarAqY0EJkNeVQDVXyiI6%2BbSWpSSWaRF8hwa0%2F4kHCrr5vk%2FPRSgtC6%2BfnHfyySvQTHIEO3xRDJFdpQpOvR75zF891yp%2B9pPL6ZERoXUgs6pkO871ypjxQPYWouGMKjbVNDZzb6D2lBceNPk%2FbshMcKrC%2Fyvve4RrHT%2BzjOGU%2FSC%2FtxHp%2Bb0zERzkJZ&X-Amz-Signature=e68b600fc3680ff596532d7c9e894af3899cce5503913481f7390609f9e2d9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXYYVYA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIE%2FPIk9x2LZHz3Jl%2FdtBVMGjaZyf%2Fo3ogGZFu5TNyLxAAiEA%2FzPw21NO%2Bg9V%2BgCvVy7Q4nHVRHz%2BIB4wwZ60E0C3%2BHEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKy090S1PW16oJrdyrcAyHZ%2FNTW8Zt4fGKkbnVpyZj52od61iERA9Gvfryks%2BzhTNnEfZZ7bfVD9SeHmQIv1NeeZU1atk8JXQcaJIUkOLVDUusphxZY82g%2BznOVfuUZv5JyZraK4tFo9eQJBBIZoM%2F%2BkWOAhh60G1u%2BJX5mv8c%2FCbsgDFFdLd3MDCBEVao2AdYWoZJykGRDTWWYP73tPwuRWFnYlmmXKCkDtTB9qwgkKkl%2FaDUKrDgOLnJ6QHF3IsEv8g6oPUy3IOFwJPIx8n45HkD%2BC5IaFFFddztiV1USTFbsUwFB7HYpXDSK2O3kDcRyO%2B46YcN8SBjPajCGRpR6bRstCu8wLgKbKRv5Nq3IaXfM7k4hxMSiVKNoHa3cq%2BE9qLBTXx77gl3f9wEPLKZfLNYMPq%2BL2AiiR9Nm5jo%2FazjF61nlaw2z2hUUuKq5oc596BlMgBSlGQzvOOhxld9wXzvcDOe3Li1jssVitZz6ERNWfVJuaVg9RgKV42CzC2RtfFDCkzXEoNmhzwSHibfa8SVLjQ8TGArkkg0JGdfiWfWMt6WwkUfpxACvEbn0GORWlXGusrPIgzomg4KATw1B5lm2I8IC8ZJc8wFkOiOvKMMiTSILkJ1lIFX6Zt51wBzcvGL3o4%2FBdd2OMJrj%2Fb4GOqUBC%2BUU6w%2FcU9GlIBRS%2BQVMI2tlgMPeVeGMSjarAqY0EJkNeVQDVXyiI6%2BbSWpSSWaRF8hwa0%2F4kHCrr5vk%2FPRSgtC6%2BfnHfyySvQTHIEO3xRDJFdpQpOvR75zF891yp%2B9pPL6ZERoXUgs6pkO871ypjxQPYWouGMKjbVNDZzb6D2lBceNPk%2FbshMcKrC%2Fyvve4RrHT%2BzjOGU%2FSC%2FtxHp%2Bb0zERzkJZ&X-Amz-Signature=81157878b9d7b48d93baebe2290c500aa992813421c3bd6203f55bf5720e057c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPEZB7T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIESwVIJ4kkdJGkRDWiugGgxSpWvQnFftZnc%2BKotpVZHAAiEApbF6uxCkesVn0MCbjDmHm4ay6W2tqFENXjyVb1J0GS0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLQhpUNZewrBOYojyrcA%2BNqpuEODv3lZnRlank3UR4p9X5IJAyWDeW%2BbBfMuCHVjBRr3s7pXb21vQ3ySi7RizcImrmxP%2FRBtUspMZVKTzEhUnZFqJV12pE2GMK7%2FlYp4w1Tqjqja9g5tD0GF%2BMQ9Mh8wl6fzXo%2BOrZ0FlPpVxtDNunCktM%2F8gLPou2RJYMDcGRHm%2FEj7wAtghz7DspeQryg%2BjRl1O65Hx1wnmmgv3lTu%2BNm%2BZndxKDcnFw3aifL%2BW9%2Fj9Z0CR1aiSVOEaT1VFL2yekheKentgKa8zjwrXmh75U1hV9znE8XubI6kIwnJa0O1qLJ29MbyFs3BH0rQCZTD655rJQM9zv4JRPrFMmPArDphOnHwHpEfTJR1XO7wBI5aNwL8J5f6raBSeQ929p7F74mcbdDxf78dXaJduFwYmd14zK%2BKjk8oYJgp7m3R6KaBj5fD7H3W1wKORW49WR4VnI6sQXX88dtYnNNO2IkYCWU3mnbUB1z8iFpFEjpLk04lw2AHltt%2F8t9MWon48tg8mneTy0O%2Bf1qd8VvAO8vbjr8bIM3qJjzzqqFYZYqUp05BU7ZSELN1s47LOo6wOxj%2FSRUW%2FafRAB9xcbIda5iJh7LbcRguBew9%2By6YTlFPBa0JB%2FPgB0ieo9JMJPj%2Fb4GOqUBETsyi%2FZp87RuaSfsfV8R59g53AbqLAOH5ijph8tmObJ4W9fj8Dbj%2BXcsmTrO24JNQCo3xT4M7GLe%2F9X%2FmP3xLE1KT2Tr1o48FNVsIVE7URVJIDoS%2F8QzlRZaZUDOWSNoO%2BVdp%2BifXISpwlFxkktk%2FtCQXM3AXrBxD1Qvj4FThKMhEjS1cLzYg4SkT9ClY4YDC9DBxtiwmxP4P5K0KBwN8VBkwWa0&X-Amz-Signature=5db983cb91231afe32cf50507d59e67c39585d44281b7c094298c9f9cc2bc8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDQ6EBP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDHsL0wTFAuAbnSAB7ZQtAu0Jf4SvwVGlU%2BsnDibksPpgIhAMl2pBicXM63r6SU8bPGeOBbOziB4rGPejYL7SpPaI5iKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFg4VCZZ8A%2BL10lhYq3APCzifgUu9bAdc3vhkZfds%2FXIgy%2F0GVXMFWZ36KBM%2FHEisX62VxrsP5s0qO9MTwJylekoxU3E00Kzhh5e1DH%2BLXpKhK5X95VOPkRUzNsncw0KWVECzDtPyRLFJyfjiNkwZRymyL2pSDZRrRWCjRBvJRgDrl3UzM2cUxOruNIEbTzy4JbjurZx7fZiIzlc3HrMKnHAAo%2BDihaR7iXZgHhms2j34nzdNVVfbk6l706INFIx1qKSWimHycoRGf692E%2B%2FumPBWirX3umva188bGJUG9TLykbFnMDITyFxeZbP8GC55RpjGxQ462%2BZj7ZJkA1HN98koVd5DxZjQ5idFDOKtWKTUfjS301wr9sW30XA3%2BJTBfL70ILdkz8WYsAWlCnvSpS46mz5KEuqo46dWswQr8C5EEIMFDtAN932nh5QAt3E%2FjC9eoPDnAfh2CBhBqjQdS2vGDOLPWWzozrEXPNisFVfG%2BkRSXUrmaaqbrpY%2FKqUpu2QGe7%2F1KYo1jtR8EJIfkiJ2ztRyfBxQ3Zoq%2BaLEwKjVgrCakQ0fUeasrU%2BEfLyU3c%2FYpSIAv1XIe6nh%2F1jJIwr2A5piScivaeAskJ46enHEKYMyGlHA%2FngWe1ZemsOxKm55U4F90%2BcDBxDDC4%2F2%2BBjqkAbCIFeWqsOcwJ2Dw5kvXIbwF8jnkHp0u1fpKhg2Zl%2FBjYyd3mgP7D2WQBcLhpJpDc4lq16TYJmVeTyZrb7ZA7rwu0hETRrysvweQhHIichla3y6R%2F4Herw46WnDxqmRWNM9cuVp7SfZZ8Y1tUS9Var2wgZWw%2FzGTGf5E8%2FGbpm6HT2O16AwUdzbbazgO0yukib23mH5NQCYZfUrdVTC7ZNDWn7Pd&X-Amz-Signature=94c0a3a540850dc11507c06b48a8af8d36e3be1c0fbd8add479f5cf3fd70c4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXYYVYA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIE%2FPIk9x2LZHz3Jl%2FdtBVMGjaZyf%2Fo3ogGZFu5TNyLxAAiEA%2FzPw21NO%2Bg9V%2BgCvVy7Q4nHVRHz%2BIB4wwZ60E0C3%2BHEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKy090S1PW16oJrdyrcAyHZ%2FNTW8Zt4fGKkbnVpyZj52od61iERA9Gvfryks%2BzhTNnEfZZ7bfVD9SeHmQIv1NeeZU1atk8JXQcaJIUkOLVDUusphxZY82g%2BznOVfuUZv5JyZraK4tFo9eQJBBIZoM%2F%2BkWOAhh60G1u%2BJX5mv8c%2FCbsgDFFdLd3MDCBEVao2AdYWoZJykGRDTWWYP73tPwuRWFnYlmmXKCkDtTB9qwgkKkl%2FaDUKrDgOLnJ6QHF3IsEv8g6oPUy3IOFwJPIx8n45HkD%2BC5IaFFFddztiV1USTFbsUwFB7HYpXDSK2O3kDcRyO%2B46YcN8SBjPajCGRpR6bRstCu8wLgKbKRv5Nq3IaXfM7k4hxMSiVKNoHa3cq%2BE9qLBTXx77gl3f9wEPLKZfLNYMPq%2BL2AiiR9Nm5jo%2FazjF61nlaw2z2hUUuKq5oc596BlMgBSlGQzvOOhxld9wXzvcDOe3Li1jssVitZz6ERNWfVJuaVg9RgKV42CzC2RtfFDCkzXEoNmhzwSHibfa8SVLjQ8TGArkkg0JGdfiWfWMt6WwkUfpxACvEbn0GORWlXGusrPIgzomg4KATw1B5lm2I8IC8ZJc8wFkOiOvKMMiTSILkJ1lIFX6Zt51wBzcvGL3o4%2FBdd2OMJrj%2Fb4GOqUBC%2BUU6w%2FcU9GlIBRS%2BQVMI2tlgMPeVeGMSjarAqY0EJkNeVQDVXyiI6%2BbSWpSSWaRF8hwa0%2F4kHCrr5vk%2FPRSgtC6%2BfnHfyySvQTHIEO3xRDJFdpQpOvR75zF891yp%2B9pPL6ZERoXUgs6pkO871ypjxQPYWouGMKjbVNDZzb6D2lBceNPk%2FbshMcKrC%2Fyvve4RrHT%2BzjOGU%2FSC%2FtxHp%2Bb0zERzkJZ&X-Amz-Signature=1a757ff69c72a6892316ee7315d559c2c60eb0fca476c7d46e67afdd23ce0052&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
