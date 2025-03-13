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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKUQLPF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwwCzqh3qClU0ap6qYqFVyGuGMYSVEJwifqYm2XD59wIhAIwuZGBgBKAGZTlgqDfznknE4yiXCZ%2Fz3cL%2Fj1ZMApZ2KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHY5njZY6aQ8QLIa4q3AM%2FTVSRg37sd7mZx%2BmO2d0Tyg1wPfHVH7DoZdyCuK8VwW0gj%2FgAB0RGnDhGXginSyHnBzJnZ0o0oeLjzYLpo6fJjcJCN0lP8on%2BuNWbQ5RRkdOt5afHLcfRRXDzN9UhQAwQjnKGPPcjiTfHFkO3yu4bFESfs9Gl9wn%2FBKTHaF%2BsSjMEq1ynr06Sj8KEWAw2HznzHskV9JdEOG9jk2N1HSa3qhUOZg5h19Qeg%2BrhRFGujIpIkpVUPDNphCosXM3rT2i6Qmz%2FAeGfL8%2F9Ekpi9CxYz3sxPU8RD0X3lYRUIu8aexzkpEyUBIu07Fz8HGOaPz%2FhjzfFFM%2FPujpjPchf9DLLaoCQ61fM6BPer2g7ILXLR9uiPire%2FVFLZSYB7praszUu4%2ByqWZV4ySFXvwPg95EbKSadYFpet50hTJ1uzdd5T%2F2tISUsl50Tfz5CuxhZRwcQFD2e3ar7n1fIg8ZWad48u2hKMgWivbxPpyqt29upGs%2BERVEI%2BYu4bV2frKoluxAPCFFshmy7jVwujzVQazOCmC6Q7pV6ILqL2b%2Bi20%2BC9WmcpG9kX%2FSRz5ZireulIXsc2gcCho%2B5SECU1vvafBW%2BDxqCvpR8kxJOX4Y84TxDn1tveKORM3vqcK0tQjDfhMq%2BBjqkAUESBEFMedrRJf60pPeizutY0R%2F1uxwFm94kRF3bmTTjlfS4zXMJtsu3Q4qptcH2DCil1xv8qaXeZ%2BklmtJMzs9SG1Roysy%2BHyptSg0cpDv%2FTDDXZG55LysxDWwdmm4iUixN1X9WW77%2FS7FSfiGGAbaEm0SouAWFY2fB1%2BiQOvX353003vEkRcr%2BEwYNr1g7XAu8l2mLP%2BmGUc7xiingA7or7jeg&X-Amz-Signature=57fcdfe130f80db48c1a8a37e3d89fd61af511726b1155ba9416be1b5c00de0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKUQLPF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwwCzqh3qClU0ap6qYqFVyGuGMYSVEJwifqYm2XD59wIhAIwuZGBgBKAGZTlgqDfznknE4yiXCZ%2Fz3cL%2Fj1ZMApZ2KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHY5njZY6aQ8QLIa4q3AM%2FTVSRg37sd7mZx%2BmO2d0Tyg1wPfHVH7DoZdyCuK8VwW0gj%2FgAB0RGnDhGXginSyHnBzJnZ0o0oeLjzYLpo6fJjcJCN0lP8on%2BuNWbQ5RRkdOt5afHLcfRRXDzN9UhQAwQjnKGPPcjiTfHFkO3yu4bFESfs9Gl9wn%2FBKTHaF%2BsSjMEq1ynr06Sj8KEWAw2HznzHskV9JdEOG9jk2N1HSa3qhUOZg5h19Qeg%2BrhRFGujIpIkpVUPDNphCosXM3rT2i6Qmz%2FAeGfL8%2F9Ekpi9CxYz3sxPU8RD0X3lYRUIu8aexzkpEyUBIu07Fz8HGOaPz%2FhjzfFFM%2FPujpjPchf9DLLaoCQ61fM6BPer2g7ILXLR9uiPire%2FVFLZSYB7praszUu4%2ByqWZV4ySFXvwPg95EbKSadYFpet50hTJ1uzdd5T%2F2tISUsl50Tfz5CuxhZRwcQFD2e3ar7n1fIg8ZWad48u2hKMgWivbxPpyqt29upGs%2BERVEI%2BYu4bV2frKoluxAPCFFshmy7jVwujzVQazOCmC6Q7pV6ILqL2b%2Bi20%2BC9WmcpG9kX%2FSRz5ZireulIXsc2gcCho%2B5SECU1vvafBW%2BDxqCvpR8kxJOX4Y84TxDn1tveKORM3vqcK0tQjDfhMq%2BBjqkAUESBEFMedrRJf60pPeizutY0R%2F1uxwFm94kRF3bmTTjlfS4zXMJtsu3Q4qptcH2DCil1xv8qaXeZ%2BklmtJMzs9SG1Roysy%2BHyptSg0cpDv%2FTDDXZG55LysxDWwdmm4iUixN1X9WW77%2FS7FSfiGGAbaEm0SouAWFY2fB1%2BiQOvX353003vEkRcr%2BEwYNr1g7XAu8l2mLP%2BmGUc7xiingA7or7jeg&X-Amz-Signature=351096bfd4870d3268da98719e1f5a8e84422093d3bf1d6234a924d4c9176d06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHFWCKS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6%2F6EY8Rpphw2MBa%2FQmvLapskwWzwcwJ%2BB%2BdCjO53FwIhAIQ6kAMWOpywpKShY5jnl%2BrxBOdaNiiYFo0dTE5SlzIFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd3gN1yFR0Bf4SDS4q3APUR616pQ6qkeZ65vlQDNuf8AsaGNfRKxAWi2mrVSfJ8CGdZ02kkTsplQaS1IkZOa1XA5MWWY3mhgvpA02%2B0owYKgH0yK4kCQGDAr5PbVB8voOOgiE4BUepwaBAukgIZOV3UFjSuDHuEA8YLezcFwDzsa78uB%2Bc4qK4j7UBXaR3keVWOb3aoP1AiIhAHhrV4Q2AQ8wKx%2BikrXTxJVYCgwCsXaPFuBMaKcp1b08bQrocWCpuBqmuX%2FF7uAsqig%2BOknEQWAm4AIIWccRrPlfImA30J4sFOPYb7caGnET8usLQhtXhMfHEIfPuPltnK2NGo2BkhGSza3P2CpDs%2FG7lmTA%2BI3PlNaTUITDvBapvz3o7VeNWFs7iYQzzTXihuFG8h7yOT9sKmrzuIAqBkMY4hbl91x623qe5Qe3YPkVcO1nJaoq%2B4tTmQ2aCAp83rTpyUSIErX8KJl4rrljz1sNTSXevY%2Bqm7CyWY4xXUaRvLYCQ%2BiimNANVC5WWkYZorrinm7V7IXZvY9OOtx84UPEuAfpmMm8deRClcdNFxNrCrBVusZQ4W24E1St0JOx280dTIRyrrVsCaJafDjV1y2I9GAEw29seTnB6o5%2FDIzUyJ%2FJfvcoDZDD9SVVioTRgVjCUhMq%2BBjqkAZ4gjmXlco%2B1ySmRJ%2FBnLgqgONyKTqG%2FEMAisGd7pA6zI9gR8sI%2B3eTHO8Mmdi%2F%2B4UA1qK9hkTTJbQIw0Icm96dG518jqc%2F%2BNkPUrpqwIlRlRWgrJQ7JIbulHTmMBmtiGzBc6TyazSNmniRijc7kIwkMPTaR0KLCtGGwJFwGV9EkflmeDQ7W81Rwq3me2RXnaIx2ImQYk9cVw%2B4yHznUSWtYv8wu&X-Amz-Signature=eb2daec45bea7a683204c3e7cc59968f8b148646bff5dc0e395fb4190eff4a40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUVLEHR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrDkgpJZAhaujRmHAyOQ4vbAdn1UvNcAkZTihN9FmnBAIgQvc8nLmYRkuFVMYY8eLu2m24vbqGLR757qTONq5JPgsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArJfDObYXIX6pDehSrcAwkisxbqUYPvQf%2F48V4iXZvP%2Fwl42yAIOh9R26QLB4uWBzj4NcN1qPral02FtcwZPUP3QJKnHrP2qNIMjfihWS2iAkLeqkOeN6k4G9gTLHLsZtS8gWzbrAS7UV5s0ZADW%2FMbAaSqJzWjth%2FJ5BoenshjZoOHe7lwTf2EPN6%2BlCtTdZfJREMvCu60WwaLS2NZwbnZExOtsvvztQKwvgVPTDMf6r0j1T2SQsQklSORXV7cl0OOt7sPL%2FWzF1jdrodT8h43noR1jykOLd8b%2BQpAq7AnIF2Jsh0HpKWenayMp74RBQJZClreZYQttkm4%2B9PcZ5ACMlQ72ljVgwOg59ChELfzSfmmThgGQWVfkNoTNh7ocoP9LPEkXc3iC75NEAe1aAF%2BnJXL%2BBqpG7gDs8xCQXSHGX79LNQRhkMXA6uYacj%2BGxyilCCnSDKU0vujVnpee7StJCamw6WLAE0rTzrkwe%2FmIc%2FAedHhyFfPVVV7g395a7g5ZPguoU9dZacBIiNzsgLNVpOOS6AIlP%2FDZXIjXBW8rOHwSWQ6G8VyLFXEO5p4HcfAW%2F%2Fz01kfrBHQrchkVE%2FUfIyEL%2BXBS4q4YnGDrE2hJpkCqQd%2FrE%2Bmc0wCb0JPZ1hMbz2TCrt%2BXuE1MISFyr4GOqUB1mT8iXOMoSVIBJOoqGhpoW%2Bm%2FWXaTPkpZajHdq5mVCaVcpqYOXC21ni7XjHJn%2BUQ%2FanksnKxBfCL2V3hLiRl5AyqcKFvpzIxQh6wCiVFDnjIvsmTf35ixZVcGtD3X02RfXUvwjCqtoM2G7nrf9nanqviuknDpLfpvkBpEs1AfFKHhxrraJL2H7mXiIYFmZ5xssB5endTjFq0CUYXfDMrVu1GQF7q&X-Amz-Signature=8e7631a1aa7828156de4b2797745c74f2b22e228132d4c9f2f9f36e6e3a21f75&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKUQLPF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwwCzqh3qClU0ap6qYqFVyGuGMYSVEJwifqYm2XD59wIhAIwuZGBgBKAGZTlgqDfznknE4yiXCZ%2Fz3cL%2Fj1ZMApZ2KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHY5njZY6aQ8QLIa4q3AM%2FTVSRg37sd7mZx%2BmO2d0Tyg1wPfHVH7DoZdyCuK8VwW0gj%2FgAB0RGnDhGXginSyHnBzJnZ0o0oeLjzYLpo6fJjcJCN0lP8on%2BuNWbQ5RRkdOt5afHLcfRRXDzN9UhQAwQjnKGPPcjiTfHFkO3yu4bFESfs9Gl9wn%2FBKTHaF%2BsSjMEq1ynr06Sj8KEWAw2HznzHskV9JdEOG9jk2N1HSa3qhUOZg5h19Qeg%2BrhRFGujIpIkpVUPDNphCosXM3rT2i6Qmz%2FAeGfL8%2F9Ekpi9CxYz3sxPU8RD0X3lYRUIu8aexzkpEyUBIu07Fz8HGOaPz%2FhjzfFFM%2FPujpjPchf9DLLaoCQ61fM6BPer2g7ILXLR9uiPire%2FVFLZSYB7praszUu4%2ByqWZV4ySFXvwPg95EbKSadYFpet50hTJ1uzdd5T%2F2tISUsl50Tfz5CuxhZRwcQFD2e3ar7n1fIg8ZWad48u2hKMgWivbxPpyqt29upGs%2BERVEI%2BYu4bV2frKoluxAPCFFshmy7jVwujzVQazOCmC6Q7pV6ILqL2b%2Bi20%2BC9WmcpG9kX%2FSRz5ZireulIXsc2gcCho%2B5SECU1vvafBW%2BDxqCvpR8kxJOX4Y84TxDn1tveKORM3vqcK0tQjDfhMq%2BBjqkAUESBEFMedrRJf60pPeizutY0R%2F1uxwFm94kRF3bmTTjlfS4zXMJtsu3Q4qptcH2DCil1xv8qaXeZ%2BklmtJMzs9SG1Roysy%2BHyptSg0cpDv%2FTDDXZG55LysxDWwdmm4iUixN1X9WW77%2FS7FSfiGGAbaEm0SouAWFY2fB1%2BiQOvX353003vEkRcr%2BEwYNr1g7XAu8l2mLP%2BmGUc7xiingA7or7jeg&X-Amz-Signature=5cb63acb38afecd8f25c53fb7be0afdb4c6735086fce79691aaa94159e43dbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
