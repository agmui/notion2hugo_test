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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VX6BKHE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD29knj7TKgl%2FNF9GZB1Ts%2BM%2BqEw4OmqKC1GYRJHHOIhwIhAOLUuetQ71kDCp2pEbTkNrPgIHuSB5%2BFyeGPKSGfzi7xKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDvh39JRGl25dwI34q3ANqZV8qfcgbF%2FBZeYaYy0vlCYnyD4Us3x0mEsMpXwHafFSMmuIlEgBttWVDMHPbudpMtskDv0TK%2Fjv9TxbfNCsadyC33%2BZFAj8SWGPias%2BNnwhg5AgvNGafS5DGTZidkNGfrCzgjJUifoIoBnLVPfSSGjOH1jCCFO%2FNP4zLj6UH7UTZB91h52%2BRJbRc09VcUdzHiYWAwVwNQlBT2GEnMovniQx6hfTfwCvtxk9Ygda3XtPCPwQ58c%2BqvJ9cH16R59PWciLqlow9jYKoHOhWNizAHq%2FzC8FoWbS6oyP1AmMXob2ltpJw5vuU%2BwgG8l9M3W%2BZVV0BD6x5wwvxZy07gss073GkhCJLkE8TsBFprAma9nRQsHRgSGpphbpIGus1T1vLZ%2FFF1rkg2XkTNBjGXsZvjkJ5eQy%2BNqdlgEMq5WnWV5HzO3pwSUXD4A4KitUjC44hZqoIlPmCyNpMQcOGFPtv7X1EbKkkCbQLzSYu8Y87KO%2BRtpHxQAzPRENqKXDX0lQQqwZfgG9vOI8wXhfwmUZmmf4xUKweuQB7UTStixBehPg9j1f36NVVG3k7Zi29F96NIKpYQ4fGHyBHLIoD%2FFEk5H%2FmQUlyle5qpd32R9PfRWSdpVi%2B8ravp2tqNTDLs4vABjqkAb%2FyIXDKKYF1qPTfzrgbkZZo95H%2FbVCzpnVcEUv9mjlN0f9eQwQ2XhuPaVBjs26nXfUXBge5%2Faq%2FpY9aV00UUpQ3tRGYxGdFokfaVvJzuss0Hrl9s8RObjDdjs60pbPU7bKOocawZsUIH5q2xdG0GW%2BE%2FTlZ811JcnVNHDUcX0IXH7DXaCBaTs1IeivYLsZ3af1rMYiCUECY4O4D32qSz559HacJ&X-Amz-Signature=4dbcdd48968479df5fe1d5514cfbae1441ca7a2485c5881d6ababe653beeb57b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VX6BKHE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD29knj7TKgl%2FNF9GZB1Ts%2BM%2BqEw4OmqKC1GYRJHHOIhwIhAOLUuetQ71kDCp2pEbTkNrPgIHuSB5%2BFyeGPKSGfzi7xKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDvh39JRGl25dwI34q3ANqZV8qfcgbF%2FBZeYaYy0vlCYnyD4Us3x0mEsMpXwHafFSMmuIlEgBttWVDMHPbudpMtskDv0TK%2Fjv9TxbfNCsadyC33%2BZFAj8SWGPias%2BNnwhg5AgvNGafS5DGTZidkNGfrCzgjJUifoIoBnLVPfSSGjOH1jCCFO%2FNP4zLj6UH7UTZB91h52%2BRJbRc09VcUdzHiYWAwVwNQlBT2GEnMovniQx6hfTfwCvtxk9Ygda3XtPCPwQ58c%2BqvJ9cH16R59PWciLqlow9jYKoHOhWNizAHq%2FzC8FoWbS6oyP1AmMXob2ltpJw5vuU%2BwgG8l9M3W%2BZVV0BD6x5wwvxZy07gss073GkhCJLkE8TsBFprAma9nRQsHRgSGpphbpIGus1T1vLZ%2FFF1rkg2XkTNBjGXsZvjkJ5eQy%2BNqdlgEMq5WnWV5HzO3pwSUXD4A4KitUjC44hZqoIlPmCyNpMQcOGFPtv7X1EbKkkCbQLzSYu8Y87KO%2BRtpHxQAzPRENqKXDX0lQQqwZfgG9vOI8wXhfwmUZmmf4xUKweuQB7UTStixBehPg9j1f36NVVG3k7Zi29F96NIKpYQ4fGHyBHLIoD%2FFEk5H%2FmQUlyle5qpd32R9PfRWSdpVi%2B8ravp2tqNTDLs4vABjqkAb%2FyIXDKKYF1qPTfzrgbkZZo95H%2FbVCzpnVcEUv9mjlN0f9eQwQ2XhuPaVBjs26nXfUXBge5%2Faq%2FpY9aV00UUpQ3tRGYxGdFokfaVvJzuss0Hrl9s8RObjDdjs60pbPU7bKOocawZsUIH5q2xdG0GW%2BE%2FTlZ811JcnVNHDUcX0IXH7DXaCBaTs1IeivYLsZ3af1rMYiCUECY4O4D32qSz559HacJ&X-Amz-Signature=de32292abc2b1ea39d5c0a678d7b22f521d7f8ca58b60980ca37d4a2386b430b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG3GG4UH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmy2L8JzcMDpdgXjk6DwBwiNVu13PCk2ygEZCR2BL%2BPAiEA549YCgp7FDe%2B0WDmdHiYP0%2FXL6uu6354zDcWWle0FmgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYttyV8gT08nETDJSrcA5Ep5kb6vt%2Bq8G%2B8NZRqapCsQY6zRGLzziPKYT3dutVKYJEhcxhpGwmF7vM1GOyX6Hcj5vafRL2AJeFCthn%2Fq9dehZrNaABgwoJZC9zb1h96JqFySCxKG7pfXy24qyFDm5E5xwr6E3y35DcCGz4vR6eonC3JGhYInVIhWIndjB6eNEel2vIkShcYJzNJMWFQlcF15dThwxfKLev1Cb4Nc5wiusBCQgHztYfcHNd7%2Brf8y4DGZNC%2FlBWUYwuHNSm0qPukEQpEuWH93C1%2BItFZ5s7WDCPF3ODNATdr1t%2B01CSAO1DUj4UaaQvyL6N9BXvfbgcCd%2Bm0RLBdJxZPdxiDKlSVQogEnDbBtT%2B7bBuCOZQ%2FDStT4iqLBaVDRZZ65AZ67OO0rMDF5UEPYOKEw1wDio%2F0KL81n6Sahnbw8P9t8188tCBDFrPRwbqrH8xmxyZh%2BO81sBr7dwscUzNyrjjCBR5xhaL0HrpdIjQsaVUmPrecumWhPe1KEFDZ%2FE0ZnSB4SZX%2BRiAHMBHKy2T3Q3ro4a%2FYXo1%2FZyWl%2B6UFh7E5CmhQ3O1VwwsIYr%2BLwM52sN4wkXPT2aNHJ03omLIMAPcUWSBgFBkQiZ%2Fyc0DOXEBqAAPsxkmLCPG304GLMrqPMOKzi8AGOqUBuDsAI%2FIYxmfsbfnSKFbYZ8fdoKpmlS%2BHjA9cqZFAIDGmqa1s5BErzgeTIGoOQAKnWsIW8n4aSO8GcwrPuRdWn3%2FhWdejpo%2BRfjvpNU4hf8HOgA9a5G9aG%2Fwqzmg8k42ug0YkoBzqM6dekv7xWlmM22Z1Z7QydVBXAmkMdXyknshUzkFwnZyG2aDGO4h6BYc%2B%2FGyTGD2gt1LjZ%2Bo%2FUNGnjuEohz7q&X-Amz-Signature=46212619f38adcf770d21b50410750415edccdedcdd1321c866e71ceb9b7e126&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQUNZ7RQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjq3oIEj8%2B4%2F8crFUIrpysYfkncZQ7bfbXA%2FnkRD5aXwIhAOEGF%2FI09gwMgkpD9nbO7qQT5%2FQ%2Bxr8j4Rf16vQx461BKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp7BbI5JRN2Dn4OP4q3AMCGah%2FAnZfAJ4UkMpfIdKAOmdLTSy6T29iGT20ECQTNMoQeEj4Ouj4Bc%2BGVgdVZBCFAvFuDOgJXQ7pw6yYbwppChrh8mFiV7NXWM8RDx%2FSVHTkwg9LnyNwsJ%2B58oKnDDtZdSicBKlXIvqqPjihoyZS6JuItaQzAfaQM72fhxph%2Flprd5EF1rEQ2KxLv4o9prjo0uPbxNlsgvo6z2WA1Efu3GI%2FT6SxcUtWZVaZzGEhvQ39fmIF3F1Xy%2B2sNI9RJCT%2B%2Bz87kdHtC%2FECmLjTbMmedeqdQ7LK%2BhLGsTFZdOzCUXRIuLn5aFRgHA%2F4naiE5BvvLY28BZApgrJyNPw7wKnLwgat2%2BS36X1%2BXyOOyS3Ry3R1wyMbNfLoYzP8i7MSXQROfE2KnEmKRycjCRCOe%2Fa68BFVwCpDVZ93odYx%2FVhqA3Tak8UZISEdpFBTOmzaTf5RmqVS8ZEFPHR6A8yfTwKrY%2FlkAjyxMoOpI67hvwJQxJzCrsVI9EZ1Uv%2Br892XKMsuOZireDime1eTvxDdRAgKcgUEUFootw3qJWpCM0M9vZREuq1iONi6PoUfhZIhdJ2EHlB2Y1Bni47udi41Q3P7CmRBL%2F0Z49nfX0gKDyPH6y378tqgVMxcqI4oVzCfs4vABjqkAaUBkRSr4%2FNYkqt2UPVXADqqaZQoClz2yHeDJaMM2G9BeTrJOpS5%2BxFgud9VAwYxbPIZ55joKCHyvw0a5oO6WDu9INxhSYehR%2BJhurvAC%2BYAfP3ghmddHgw0R50Ba%2BfEdSrW7gxCs3B0W4O4oFKhpxDYDKFVa8Th5oyiAdsIGE1%2FD1kuA2eeYxUXefjZlsZUEdm9oo54xXplFO0W1DUoSOgXv2HP&X-Amz-Signature=58e1b2960d71de41ff562c0911962bad7b563d58e8b1f6609707810eb2ab57a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VX6BKHE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD29knj7TKgl%2FNF9GZB1Ts%2BM%2BqEw4OmqKC1GYRJHHOIhwIhAOLUuetQ71kDCp2pEbTkNrPgIHuSB5%2BFyeGPKSGfzi7xKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDvh39JRGl25dwI34q3ANqZV8qfcgbF%2FBZeYaYy0vlCYnyD4Us3x0mEsMpXwHafFSMmuIlEgBttWVDMHPbudpMtskDv0TK%2Fjv9TxbfNCsadyC33%2BZFAj8SWGPias%2BNnwhg5AgvNGafS5DGTZidkNGfrCzgjJUifoIoBnLVPfSSGjOH1jCCFO%2FNP4zLj6UH7UTZB91h52%2BRJbRc09VcUdzHiYWAwVwNQlBT2GEnMovniQx6hfTfwCvtxk9Ygda3XtPCPwQ58c%2BqvJ9cH16R59PWciLqlow9jYKoHOhWNizAHq%2FzC8FoWbS6oyP1AmMXob2ltpJw5vuU%2BwgG8l9M3W%2BZVV0BD6x5wwvxZy07gss073GkhCJLkE8TsBFprAma9nRQsHRgSGpphbpIGus1T1vLZ%2FFF1rkg2XkTNBjGXsZvjkJ5eQy%2BNqdlgEMq5WnWV5HzO3pwSUXD4A4KitUjC44hZqoIlPmCyNpMQcOGFPtv7X1EbKkkCbQLzSYu8Y87KO%2BRtpHxQAzPRENqKXDX0lQQqwZfgG9vOI8wXhfwmUZmmf4xUKweuQB7UTStixBehPg9j1f36NVVG3k7Zi29F96NIKpYQ4fGHyBHLIoD%2FFEk5H%2FmQUlyle5qpd32R9PfRWSdpVi%2B8ravp2tqNTDLs4vABjqkAb%2FyIXDKKYF1qPTfzrgbkZZo95H%2FbVCzpnVcEUv9mjlN0f9eQwQ2XhuPaVBjs26nXfUXBge5%2Faq%2FpY9aV00UUpQ3tRGYxGdFokfaVvJzuss0Hrl9s8RObjDdjs60pbPU7bKOocawZsUIH5q2xdG0GW%2BE%2FTlZ811JcnVNHDUcX0IXH7DXaCBaTs1IeivYLsZ3af1rMYiCUECY4O4D32qSz559HacJ&X-Amz-Signature=b56336d9aedbf73153d9a1526241a6ea957f8cd3a76c633354ffd11d0bad6dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
