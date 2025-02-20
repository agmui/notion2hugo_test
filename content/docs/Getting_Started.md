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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZEL3EK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVLMtWnDpT3%2Fo8JRXNPEHwybjhIXuSqN6qT20uZC1yKAiEAvZVDYnKYfgkGI8q3lCLGuDMiuDl%2BRRDWwzBqw3WsyX0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BDXZ2tpU1aaZ%2BthCrcA6ENVN%2BXePzmFCoUODuPmpHZOHeqvP%2Fy2jm%2BDBYH8%2BGP5IwIyGX8r%2FrByQEp2SugB48IkjM7%2FRerrRt6L9m4Dk6EN5k%2FtDHcJFtCqvnl6RHeuukRXzqoQ50MF1MtejJbTnTjBztrWMV6sHTdibjzwSYBOzVNRdKhWqfjcLkJPoTRV7VSzYT2fJhUYDi1OjeUUnm8dPd%2BUNZMOal%2FvJw9u63as1Cjlxn0GMrLWdXhvjHK3vLRwaD%2FGMu2plM2dHmWeYUdfsLc2NvuX8lfWPIcBiZ%2Bm3WCYTZKYHRg8AIbaZ%2F6EtGxP2Ngy2j0DiT0QBsmPB42S%2FXPCPpNeAvekLau2bOA7fZn4PPH8o5ZOW1KQpF6iMx9lR4tf34Soufw%2BFYJ6Ro9Ues9rBalxB7IKgKDdCWH%2BuuIeY%2FsYyft2uxZJ5TS0BmzZ3kVMeK0IYMEhFAIDQIsDDgf6UgEn28Kk%2F3UklsdSVCWvPQmLfATAd5bC0a07JTXK8gm3btk01%2F6%2FTnVrdLxmEdICHrBpCKAnW5eb%2F%2FtCgpaZjC%2FbtPPvvN0LvRy0vxh6KXw8HGBtXTPgRBUVs32epp7qnJeoF41qOYl8nup%2B2eWOdo3jrpnsUUGtfObWbVIjZVLuC6SC0OtMOWc270GOqUBwEqxGVhDAaYcbuWeUgZoAW5FmPYMvEeDyRRP0BkamTZSIjRctUQeArzOuNJxDgPncR87UOq8hh%2Bq7rId6Irl8G4grYQ6ifVVTt7hG%2BnAcLJu2eyqlJ1rPe58DZu2GxzvGuXUPWql9vlXm6Pg7qSHSECMotgL387MSOn0BRhU7m%2B%2BMtgB2QbKD4%2BTCGZePC9RtNvpvu0UORfqVFnFiXVXLKE69hDJ&X-Amz-Signature=a533458264c42fa35757c3bf601091a7a079865724bab61b4d26c828ce71eebe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZEL3EK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVLMtWnDpT3%2Fo8JRXNPEHwybjhIXuSqN6qT20uZC1yKAiEAvZVDYnKYfgkGI8q3lCLGuDMiuDl%2BRRDWwzBqw3WsyX0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BDXZ2tpU1aaZ%2BthCrcA6ENVN%2BXePzmFCoUODuPmpHZOHeqvP%2Fy2jm%2BDBYH8%2BGP5IwIyGX8r%2FrByQEp2SugB48IkjM7%2FRerrRt6L9m4Dk6EN5k%2FtDHcJFtCqvnl6RHeuukRXzqoQ50MF1MtejJbTnTjBztrWMV6sHTdibjzwSYBOzVNRdKhWqfjcLkJPoTRV7VSzYT2fJhUYDi1OjeUUnm8dPd%2BUNZMOal%2FvJw9u63as1Cjlxn0GMrLWdXhvjHK3vLRwaD%2FGMu2plM2dHmWeYUdfsLc2NvuX8lfWPIcBiZ%2Bm3WCYTZKYHRg8AIbaZ%2F6EtGxP2Ngy2j0DiT0QBsmPB42S%2FXPCPpNeAvekLau2bOA7fZn4PPH8o5ZOW1KQpF6iMx9lR4tf34Soufw%2BFYJ6Ro9Ues9rBalxB7IKgKDdCWH%2BuuIeY%2FsYyft2uxZJ5TS0BmzZ3kVMeK0IYMEhFAIDQIsDDgf6UgEn28Kk%2F3UklsdSVCWvPQmLfATAd5bC0a07JTXK8gm3btk01%2F6%2FTnVrdLxmEdICHrBpCKAnW5eb%2F%2FtCgpaZjC%2FbtPPvvN0LvRy0vxh6KXw8HGBtXTPgRBUVs32epp7qnJeoF41qOYl8nup%2B2eWOdo3jrpnsUUGtfObWbVIjZVLuC6SC0OtMOWc270GOqUBwEqxGVhDAaYcbuWeUgZoAW5FmPYMvEeDyRRP0BkamTZSIjRctUQeArzOuNJxDgPncR87UOq8hh%2Bq7rId6Irl8G4grYQ6ifVVTt7hG%2BnAcLJu2eyqlJ1rPe58DZu2GxzvGuXUPWql9vlXm6Pg7qSHSECMotgL387MSOn0BRhU7m%2B%2BMtgB2QbKD4%2BTCGZePC9RtNvpvu0UORfqVFnFiXVXLKE69hDJ&X-Amz-Signature=701e87c35d4f64ad8c7ea9e2329741284e367d1663a98cb3732d822c3016662e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYEH3QF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHcuTCPM8ysuigi%2BqRolEUiaen7bqbdVMatIOJuT9rbgIgOGIHNGfn2%2BRbkbS%2Fm5DAl9Q1lWJVmnb9f5lrEwwrkb8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpP5xBdWO3X%2Bho6ySrcA6HdTwISwYkGJkTldfYVSmxlnWQsm6EJ4TbKFU2rA2c9120o8aIfW%2BXdQmM8c4aQF8gnNDt%2FAWrBdW%2Bff%2F2xWG27c5qWG%2Bx9hJlceYo%2FoIksAjj%2Byp8gT9lRf5DWFEo3AduPqsdilH8pJuMRMJ9R%2FuykXptlSZgjpTHSCyuS0ANp%2BOWEwqTGDQ4ddAJD2SMvVoJJycx2YcD%2BfU1EscpRhscidTWmSyplSWJ7TAA6HXLp3kUlkXswqWeN%2BnuiEQ171KJe4zFvPeZfViq0O%2FRDJ11V2bmv%2FSagIues8PYpwQw9R7U3D91QV6Vp8DJlBkJ6pDE8iaF6Cls4XBDVQproIfGqQZg0Js34SjNc06jY7YAqV8a6ZjkVqX1nWTqWo%2BwEgJ4bsA1JcZWQtETymMRseoRyITAoXtTJGcr9tPijPFb5vIWPMKMDxeGNkOnmWUEH5%2F%2F%2FEO5pRm7EFNAZcue%2B3LzIh7gWnxWpWTDNgkI1W6x31zUW6TBQyybnCfb%2FEjmxMCraPxOKVc%2BepNW%2FZ%2FdYp77UDjpJ8rgMamG%2BxO54pTTkELSuxK7xk9Q2mrPsb8al%2FnU52%2B7DQgz5AKMSLr2X5JV1F3CmBsjh0d7s%2F4NkzEXCR687wBaAJ0HZVo82MN%2Bc270GOqUB6FkuBjutTusQQOi7voBbnzdQl6CYwGEIGDdxC%2FM3Nt6JDj5JCt%2BqHy%2FSqv3fWjdcvEFNlbJfP517IvgZh1JQAKqq6I0pU1q1h7FEWRwDn0TSNZXwbnL8IjA0rtA%2FTGkazERDSbtIuERPXp1JNteovg8ed6ZHA953Jg2s%2Fo9MqKOPQDAMK5WaMF1rhH5KO72o7l%2FuAHvZJf%2F%2FlL%2BSujMmbphDd7fF&X-Amz-Signature=bcd26a01f58fc0dd7bee19840b6af129fbe936178a5c4fadd219dff18cdbdaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDKDSM6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG6yYXPRyfbAdJH2SXSlJXlDVZXLSZRWjR5u1W9jLdLwIhAKR4h5w4BC%2BHvnBZ5QIEqesJfMjFjlowZDVGbKchKfeQKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG53IbVJbvtLDTKT8q3AObU3KhNyX1KxHj4n%2BLsAQuodk54VrPDKjxcrAi%2FcMHtvVmAiG4T7gKf5nGESIixqXrq4O8NoychGRpchNsIElHc2qucLE2MaVulSQFXuQc%2FidCW%2FN8uCDRw6cJn9fhf%2BQXHDyKCT5H7SyIpz2cO5%2B07gD9t293IukqPiORYCUG%2B3kmrWzGo3dHLDF74z0PUbHItCb9LUz%2BJWpDUPAUaAJHcWmyfvW2qyLBKDRaNe1TGDUX%2FgwJ12VR91T8Jj3ZeatgLFLuOoBYoBSp2LKr0cs7OnlPssbwoPKg710OZgIN5eT1P0YiuAmS7qN0NKxi9ILHsxiQw6X949yI6j9gH7BCTAF3FqrnupiDhugm7561CUi%2BN8hoxxK7j6Wc260njUAM%2FKgobwALf%2F7cHkT044RtL5g6tpYNlru00pY0cs8p%2BjYGfllZLTh6dz4VUAfYr0K64zMChYchp71xl6aBN7i9frC18TA%2FxBDxY%2FhyOHMz3DzhA784NOM6fZjVbEyVkfyUS4p5ady70%2BsDNYxUaBf%2Baf6dNYntI%2FSz53xMYQCr4c0F3OmkqQEhcUDIeMynLQA5DfiCD3ZAgt7%2Be32d54frzQnS9e7p3X5qdtRLPfa9D5xGTyU%2FaKXEsKCyujDfnNu9BjqkAUTtZETW1nIrLPUBCJYmKYdEypIZ4VLi22DaGkJquXoHvHGggZ5bybZEnvw99pwcIZr7UlGRU4KPYddEGhv4rAsNdCv3ZtJ%2BE21RGMTomdwNOICVe3yv7SUroWRFcJCWQD25dcT8n4HnWwbr9ZivfKMZ%2Fk5ZVvsYGSNgGdGMLWLyWtIcCjicl9jDutyytbBpZChK9TMcSXYeqkC1ChEqRoCJfgUE&X-Amz-Signature=eb9bda2fd2222e5481b36e464d08d8337c235407b146710b3eee7870119cd7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZEL3EK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVLMtWnDpT3%2Fo8JRXNPEHwybjhIXuSqN6qT20uZC1yKAiEAvZVDYnKYfgkGI8q3lCLGuDMiuDl%2BRRDWwzBqw3WsyX0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BDXZ2tpU1aaZ%2BthCrcA6ENVN%2BXePzmFCoUODuPmpHZOHeqvP%2Fy2jm%2BDBYH8%2BGP5IwIyGX8r%2FrByQEp2SugB48IkjM7%2FRerrRt6L9m4Dk6EN5k%2FtDHcJFtCqvnl6RHeuukRXzqoQ50MF1MtejJbTnTjBztrWMV6sHTdibjzwSYBOzVNRdKhWqfjcLkJPoTRV7VSzYT2fJhUYDi1OjeUUnm8dPd%2BUNZMOal%2FvJw9u63as1Cjlxn0GMrLWdXhvjHK3vLRwaD%2FGMu2plM2dHmWeYUdfsLc2NvuX8lfWPIcBiZ%2Bm3WCYTZKYHRg8AIbaZ%2F6EtGxP2Ngy2j0DiT0QBsmPB42S%2FXPCPpNeAvekLau2bOA7fZn4PPH8o5ZOW1KQpF6iMx9lR4tf34Soufw%2BFYJ6Ro9Ues9rBalxB7IKgKDdCWH%2BuuIeY%2FsYyft2uxZJ5TS0BmzZ3kVMeK0IYMEhFAIDQIsDDgf6UgEn28Kk%2F3UklsdSVCWvPQmLfATAd5bC0a07JTXK8gm3btk01%2F6%2FTnVrdLxmEdICHrBpCKAnW5eb%2F%2FtCgpaZjC%2FbtPPvvN0LvRy0vxh6KXw8HGBtXTPgRBUVs32epp7qnJeoF41qOYl8nup%2B2eWOdo3jrpnsUUGtfObWbVIjZVLuC6SC0OtMOWc270GOqUBwEqxGVhDAaYcbuWeUgZoAW5FmPYMvEeDyRRP0BkamTZSIjRctUQeArzOuNJxDgPncR87UOq8hh%2Bq7rId6Irl8G4grYQ6ifVVTt7hG%2BnAcLJu2eyqlJ1rPe58DZu2GxzvGuXUPWql9vlXm6Pg7qSHSECMotgL387MSOn0BRhU7m%2B%2BMtgB2QbKD4%2BTCGZePC9RtNvpvu0UORfqVFnFiXVXLKE69hDJ&X-Amz-Signature=0bf18363c84c7a991a9404c4763a39e1ff3fd806e6df5e90729e8aca547b8189&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
