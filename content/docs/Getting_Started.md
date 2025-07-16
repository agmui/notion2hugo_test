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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZCOCRB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFoeSM1NogLYiMPKfEOi6opKQlP1DpkhJJ9by9Xfw0XTAiEA5yLChFlhI29TTehtIR6c0cepErjkTIn94n7OQW56TAoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFbykLHDW40NWSDcXSrcAwQ3ZG0GfSWROTO6s3sUxSg59MhajhQVIH15cZ9V9fED3HvuCS%2BjSNtNisyYLIroEWEHTvKlRY3Nb8N3zpLmxQmuHUol9axexCVe0ykPg9oy0Epk9iPBQPqtRoqAckPqyZOlKMj9z2WM0ErfswhnAG0AsNPBOBCdjYyaATQXOo%2F8T%2B%2Fgqam6kRxMw%2FZiklwWLNGtCPPpv57Bc8pArl%2BGoWuRgXy%2BMr3RjOBgEb55fhT6z%2BjeByy%2FPHWBFkFKS%2B7wEAsWUDpqbPlG8PlFXUTmHISAeWGuCLMG8NJHsARTrK723fergjR9oGiiG4Wgabej3QHORwnPHzIiTSiKCMX7N50AYApHbK8jVl2SM5kE2OwhgzrIjVVEuQEHNofbNWV775OGS19UxTXSteJN30zgyrDdwj0igei38CrwsAqSq4wu%2FSdulMPSqOyvPmRCGZnVif5fR98P%2FWHeOuoPjL8tnRsyrdQWvvDgcr%2Brx4Y1nuatppklA%2BCoAKA2YK5dv4HOqwU4ZLKceBc7Mo6LXigDr%2FriZ%2FqJGjTIBJtDD75hFEJ6FyO7LqWymI56ZlywOvYL%2Fmroujeq%2BxafUMz4QCt%2BEEnmEMSISFPSHhDjKal4lJKtJY3fOVATgl8KkHTSMKnn3cMGOqUBccwgBg1PkgMufy1hNK9xfySJRgfc6s8TKhIoqsEI%2B8SR3XgsgHBNsMc2S2w5Fm3E%2B9zMtUlqNKt0L9Z%2F49TjB4FwXAnMRTKtsyhDbRxT8Ocdy46s0JuXVBFDzg8CHHimbCurNiJqJiXu25GW36magfredWHgZKFjzg3kqg1bMSQPq3PQ9%2FX1ec2AX3UepvCkt8KxIzu7VNm9Jg9%2BXX3UzccT09Cd&X-Amz-Signature=c28fc79c4e76b12b38e62140346a68c607653f6b4aaaf50039e4c0284d9912f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZCOCRB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFoeSM1NogLYiMPKfEOi6opKQlP1DpkhJJ9by9Xfw0XTAiEA5yLChFlhI29TTehtIR6c0cepErjkTIn94n7OQW56TAoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFbykLHDW40NWSDcXSrcAwQ3ZG0GfSWROTO6s3sUxSg59MhajhQVIH15cZ9V9fED3HvuCS%2BjSNtNisyYLIroEWEHTvKlRY3Nb8N3zpLmxQmuHUol9axexCVe0ykPg9oy0Epk9iPBQPqtRoqAckPqyZOlKMj9z2WM0ErfswhnAG0AsNPBOBCdjYyaATQXOo%2F8T%2B%2Fgqam6kRxMw%2FZiklwWLNGtCPPpv57Bc8pArl%2BGoWuRgXy%2BMr3RjOBgEb55fhT6z%2BjeByy%2FPHWBFkFKS%2B7wEAsWUDpqbPlG8PlFXUTmHISAeWGuCLMG8NJHsARTrK723fergjR9oGiiG4Wgabej3QHORwnPHzIiTSiKCMX7N50AYApHbK8jVl2SM5kE2OwhgzrIjVVEuQEHNofbNWV775OGS19UxTXSteJN30zgyrDdwj0igei38CrwsAqSq4wu%2FSdulMPSqOyvPmRCGZnVif5fR98P%2FWHeOuoPjL8tnRsyrdQWvvDgcr%2Brx4Y1nuatppklA%2BCoAKA2YK5dv4HOqwU4ZLKceBc7Mo6LXigDr%2FriZ%2FqJGjTIBJtDD75hFEJ6FyO7LqWymI56ZlywOvYL%2Fmroujeq%2BxafUMz4QCt%2BEEnmEMSISFPSHhDjKal4lJKtJY3fOVATgl8KkHTSMKnn3cMGOqUBccwgBg1PkgMufy1hNK9xfySJRgfc6s8TKhIoqsEI%2B8SR3XgsgHBNsMc2S2w5Fm3E%2B9zMtUlqNKt0L9Z%2F49TjB4FwXAnMRTKtsyhDbRxT8Ocdy46s0JuXVBFDzg8CHHimbCurNiJqJiXu25GW36magfredWHgZKFjzg3kqg1bMSQPq3PQ9%2FX1ec2AX3UepvCkt8KxIzu7VNm9Jg9%2BXX3UzccT09Cd&X-Amz-Signature=c8c69910ca3299dac7572b68ba766cc07410478fd7e5aa36467f7754df81dc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZCOCRB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFoeSM1NogLYiMPKfEOi6opKQlP1DpkhJJ9by9Xfw0XTAiEA5yLChFlhI29TTehtIR6c0cepErjkTIn94n7OQW56TAoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFbykLHDW40NWSDcXSrcAwQ3ZG0GfSWROTO6s3sUxSg59MhajhQVIH15cZ9V9fED3HvuCS%2BjSNtNisyYLIroEWEHTvKlRY3Nb8N3zpLmxQmuHUol9axexCVe0ykPg9oy0Epk9iPBQPqtRoqAckPqyZOlKMj9z2WM0ErfswhnAG0AsNPBOBCdjYyaATQXOo%2F8T%2B%2Fgqam6kRxMw%2FZiklwWLNGtCPPpv57Bc8pArl%2BGoWuRgXy%2BMr3RjOBgEb55fhT6z%2BjeByy%2FPHWBFkFKS%2B7wEAsWUDpqbPlG8PlFXUTmHISAeWGuCLMG8NJHsARTrK723fergjR9oGiiG4Wgabej3QHORwnPHzIiTSiKCMX7N50AYApHbK8jVl2SM5kE2OwhgzrIjVVEuQEHNofbNWV775OGS19UxTXSteJN30zgyrDdwj0igei38CrwsAqSq4wu%2FSdulMPSqOyvPmRCGZnVif5fR98P%2FWHeOuoPjL8tnRsyrdQWvvDgcr%2Brx4Y1nuatppklA%2BCoAKA2YK5dv4HOqwU4ZLKceBc7Mo6LXigDr%2FriZ%2FqJGjTIBJtDD75hFEJ6FyO7LqWymI56ZlywOvYL%2Fmroujeq%2BxafUMz4QCt%2BEEnmEMSISFPSHhDjKal4lJKtJY3fOVATgl8KkHTSMKnn3cMGOqUBccwgBg1PkgMufy1hNK9xfySJRgfc6s8TKhIoqsEI%2B8SR3XgsgHBNsMc2S2w5Fm3E%2B9zMtUlqNKt0L9Z%2F49TjB4FwXAnMRTKtsyhDbRxT8Ocdy46s0JuXVBFDzg8CHHimbCurNiJqJiXu25GW36magfredWHgZKFjzg3kqg1bMSQPq3PQ9%2FX1ec2AX3UepvCkt8KxIzu7VNm9Jg9%2BXX3UzccT09Cd&X-Amz-Signature=4ab0d132197e0ba80cdd7e1839037f2ae4b1167fe57261f96a60ec61284255a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGSLMDV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHf2zT5BkoxK1t6RsbZc2R6NKcPFYW6zGoHHSdX%2FOBT5AiEA8dn9w68CZhlXYFLQZKKPoHvosTpS9tTqcqVe6eu6%2FQ0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2wKHFs0ciJP72CvircA4u6JgmS6ZWh2k%2FUBckD0BLFoab8IDajGgHwYfmt5uyquy7WVSInMu00jbE320Fvuj806dCJIv3NknHhSTjNUBfQIpyt3iTRNWT7hGjnCHUk%2Fatjaq6dfd%2BA3thK58uHAc8dE7t5xAUnoaqH4ba2rUB27jPjW%2BAmXsEJCCU3aqwv%2BDJFu878J2xf2wDo7ZtSGEqu1dIK9E9nniCvEtW4rOjY6JBFiMLYDgkGX9Nim2iifqyEm8gURotknCAbnSKVShCHjzgcgKaeRR8O1hJBA7vNxKzbASl9u7evVbHIyB6TMmuP1OLG0dkbFA6j4hvta5%2BloOQA2PM67PNzfshzf2NGrJPcxckZvPxg4Cbk1hE0xSrjw1yQiTWTpKH4iPQexYjhH8xo5UGgBaXZMNS%2B7NASCktuz5IZlATtxf9vvipBbNDa%2BG5eFE3nmZx0EoaXGMKi%2Fc9OoBR%2F5X%2FAwn9Ab1JG3OBrVciTSEAgojfPL1QzWdFDlEdqmobvgeHawxxlIeKUuz5I7LbzXZ92zdKbgAHNvmhMxGX%2FgVMJjK9HK2p7Pfo9tB663afwfd175rZT7OUyEreHewrQajL2gMx%2B20dLg1IrX%2BjKZ%2F3CkAQpKbLSq3Pl7I95zEyZgCU1MPrn3cMGOqUB3WiFDiWLnHtrLsTZZHt8g6TBl66%2BoDedUmkzIj%2Fi4hljOJ4tCkYZ5I3PpQCTcNT6GIK1oGBcKjOAyWQYXq5LeVcW2NsvAhp5Xvbyc3sP4unOI%2BagZ4Bfl0lfMmdtJddwsyFzrPyrr24tJRdtGLXMuam6YwGAqHZW5V8nlGODmNvg0iUk4dupGKMwCt5O9krKdVbocyCJ%2F67fiDOaTtHdr%2BPWLYTL&X-Amz-Signature=0bb25eef6db7e6fada6d745466935c7226cf4454cc6877c0c8087e0b04664754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYE76OP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHdYx7aVkxiz3rAB2nm%2BDHAsuIFnVeon9x2HCG9M2LR5AiEA%2F1pzE6esaqifVQNl1kuHeYAJ0%2BFq4hk0FIXLFpZ25Dkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDExeVbay7G8UmM2AaCrcAxkgupzO5fHXqgn6lgVPFO8eH9cg7nMIvz1iYgwMJOrOlvZtIx0V7MIN%2FCISBgWcp1%2Fz7CxxpJvvxnZpatf90kJGRuLk8iaFkucG7Ja%2BtZK88tIm3w1BfGyJAAZx6dmHv3Dh5w%2FoFBzx%2FmlyNAO0dw1ghlnSeM2dV881pm0ZExKkno4fbQ8Pd3YmXsEu8%2BU6mYSWuSrOuKO6q6peJXYPRmsKW0DERB1O7HDCKFFT6fp1qDC8zhRoF%2Bx3Mr8REoPBaYEMNy%2BomnqdviVt8xZxM%2Bhd6hFQhnXx4Rd26wZVEyWsaoFkJ85fAbZdc50dTPyB%2F7gZZ%2BLFDbny8s71TVEAh8Xhys9Nq%2Ff8GKbqFxo7et2PsjKxyiH8mIQlV9bdfS5qCex9vUTlLeAKbvmhECeczEvqeHeUgrPklEA%2Bc77f964zuA2%2FROSw8Mmrp%2F1tfcADVzh52VtNMPklN5x%2Fgbi7%2FYr8Yqm80yRh6J1SkJRJyY%2BzkHZ1YTLGiNoy21aYer9bL0ZG1Z1vkpsMhWbyn04enLoeDuOs45ho9qb8hsHXrpx%2B%2FHthQM3VQ8rTud1z8rqvQU0NBA6UmeTB%2F2mkAxfCTpLx5g0PTMCKHlqr%2BN%2FPXJ2u8Kzm7AFq%2FIPvh1bJMIzo3cMGOqUBcSgk%2BH3yh6bGHz7rVKe6wgHYzUiDfj4bqCVT2cfpU2MKEb1egCFwXueiJPtCoZ9psTt7AliJ8Plv6h15p5qB%2FUunARXv2wgY04szKVX%2F8CEvMf2HuvaqaR%2FTZPW0lvdbSLLv%2BHkwnh5fwKAnMbx%2FmRPJP3UHQW4AflvGShNVaEUveOz1nvO9LEwtlCn2c3U%2BN9zeS9OQtJQJHVJpeUL5hLuooYMM&X-Amz-Signature=ac5c7b0092ef9ffb4a7678401d7f185d8afb80c79303c87f5bba2136eab518b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZCOCRB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFoeSM1NogLYiMPKfEOi6opKQlP1DpkhJJ9by9Xfw0XTAiEA5yLChFlhI29TTehtIR6c0cepErjkTIn94n7OQW56TAoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFbykLHDW40NWSDcXSrcAwQ3ZG0GfSWROTO6s3sUxSg59MhajhQVIH15cZ9V9fED3HvuCS%2BjSNtNisyYLIroEWEHTvKlRY3Nb8N3zpLmxQmuHUol9axexCVe0ykPg9oy0Epk9iPBQPqtRoqAckPqyZOlKMj9z2WM0ErfswhnAG0AsNPBOBCdjYyaATQXOo%2F8T%2B%2Fgqam6kRxMw%2FZiklwWLNGtCPPpv57Bc8pArl%2BGoWuRgXy%2BMr3RjOBgEb55fhT6z%2BjeByy%2FPHWBFkFKS%2B7wEAsWUDpqbPlG8PlFXUTmHISAeWGuCLMG8NJHsARTrK723fergjR9oGiiG4Wgabej3QHORwnPHzIiTSiKCMX7N50AYApHbK8jVl2SM5kE2OwhgzrIjVVEuQEHNofbNWV775OGS19UxTXSteJN30zgyrDdwj0igei38CrwsAqSq4wu%2FSdulMPSqOyvPmRCGZnVif5fR98P%2FWHeOuoPjL8tnRsyrdQWvvDgcr%2Brx4Y1nuatppklA%2BCoAKA2YK5dv4HOqwU4ZLKceBc7Mo6LXigDr%2FriZ%2FqJGjTIBJtDD75hFEJ6FyO7LqWymI56ZlywOvYL%2Fmroujeq%2BxafUMz4QCt%2BEEnmEMSISFPSHhDjKal4lJKtJY3fOVATgl8KkHTSMKnn3cMGOqUBccwgBg1PkgMufy1hNK9xfySJRgfc6s8TKhIoqsEI%2B8SR3XgsgHBNsMc2S2w5Fm3E%2B9zMtUlqNKt0L9Z%2F49TjB4FwXAnMRTKtsyhDbRxT8Ocdy46s0JuXVBFDzg8CHHimbCurNiJqJiXu25GW36magfredWHgZKFjzg3kqg1bMSQPq3PQ9%2FX1ec2AX3UepvCkt8KxIzu7VNm9Jg9%2BXX3UzccT09Cd&X-Amz-Signature=94d0d3be4b251cb89d6ce1cfc97f2212cde0325e2d7ead33f91c16c8b5de0c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
