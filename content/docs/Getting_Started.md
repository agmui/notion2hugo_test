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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVV2XHN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnoIgWbqwddqiCd59qRLllzbibZwPk%2BZmj7oCOpC0O4AiEAjmN7q%2Bl3PN1SUcydw55yGNNpldo3RQ%2Fm1djs78hD32oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqCHTKZiGNgyUyJwSrcA4S1dw%2FFX3h2Xaa5cDmUgI%2FZz0l4OgiwA%2FMVgwomhQfcrgBqKsrPteh9tqOSOlrhnIk3Qp9lgDWimQBGURBZaBhWItbcm2wB5eHOvjow8WS453%2ForlvFKofuTOKIE%2Flwevch6Cng1MCCK7%2B7W6KhnwdDUm6j3fDVvhN211oXl0JOEgEP7CtWhPZNppR4VEFygaSK%2FFVbbktYYobGhw7Fg5eog1tUdi5Tl3BknumqSJr4pppe%2FF6k%2FUgkJn8LnDa3mFLC5qZxvBKyG%2F0PhAwOixT1PS9L8vh3Aps5%2BX4bDp0W9npI0m9XFPUgl94Wm8Y7eGvV77Z8Fyi14pDv1iuKmJd0dJvP3ip1mNdwkJ3a9bhhs3f2RFKJAJHUK3fZhXfnvtIEjHkZYW9j6aEihKRG7IcP7AGE%2FxoVJ1MVMU3LaZbwhYST4H90mCUrp5eQ31kEOYK2x0E8xFCjQGA7W6dPNJSiTzQyx63zrA%2Fj%2Bb3b1Z7Ram6i2eyVzweCKUXa3syHmdScFrpL3EPNeKGYhYME%2BIz9rDgHeyKkLuelVBZibeo%2F1Y7N7PP2fabAr1KNOqDLBzarw6wjV5uMTBMlGlZAnOpZ6NxpKNe8VPJcgtX%2BI6QafQU7LcuzIyG6wMVkMP%2FKub8GOqUBkdxS1g3FLMaioc4Ftt79ws1sLFKvZSYMu8s%2Bu%2Fp8x4xcnGaunhqpWImUmMlUuQBPMmWcrzDBDudhBvKRUvwNKBB9HR3rU6CKPo3anIkKJZbzXppdPNcnTo%2FLGWrUVE4p1ql6Mb%2F1go%2BuC24gBIofgrScIr36ximXKrTIDH76BPmeVnLi4JD6rNuxuiTRE9RNxrdGWcOkOQEcvB7geYmPOk%2BGjbrr&X-Amz-Signature=4aff8e88ce4c7db7591bf2e9a0d63f81b57b7bc6242e1ea27e59563ba4cee8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVV2XHN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnoIgWbqwddqiCd59qRLllzbibZwPk%2BZmj7oCOpC0O4AiEAjmN7q%2Bl3PN1SUcydw55yGNNpldo3RQ%2Fm1djs78hD32oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqCHTKZiGNgyUyJwSrcA4S1dw%2FFX3h2Xaa5cDmUgI%2FZz0l4OgiwA%2FMVgwomhQfcrgBqKsrPteh9tqOSOlrhnIk3Qp9lgDWimQBGURBZaBhWItbcm2wB5eHOvjow8WS453%2ForlvFKofuTOKIE%2Flwevch6Cng1MCCK7%2B7W6KhnwdDUm6j3fDVvhN211oXl0JOEgEP7CtWhPZNppR4VEFygaSK%2FFVbbktYYobGhw7Fg5eog1tUdi5Tl3BknumqSJr4pppe%2FF6k%2FUgkJn8LnDa3mFLC5qZxvBKyG%2F0PhAwOixT1PS9L8vh3Aps5%2BX4bDp0W9npI0m9XFPUgl94Wm8Y7eGvV77Z8Fyi14pDv1iuKmJd0dJvP3ip1mNdwkJ3a9bhhs3f2RFKJAJHUK3fZhXfnvtIEjHkZYW9j6aEihKRG7IcP7AGE%2FxoVJ1MVMU3LaZbwhYST4H90mCUrp5eQ31kEOYK2x0E8xFCjQGA7W6dPNJSiTzQyx63zrA%2Fj%2Bb3b1Z7Ram6i2eyVzweCKUXa3syHmdScFrpL3EPNeKGYhYME%2BIz9rDgHeyKkLuelVBZibeo%2F1Y7N7PP2fabAr1KNOqDLBzarw6wjV5uMTBMlGlZAnOpZ6NxpKNe8VPJcgtX%2BI6QafQU7LcuzIyG6wMVkMP%2FKub8GOqUBkdxS1g3FLMaioc4Ftt79ws1sLFKvZSYMu8s%2Bu%2Fp8x4xcnGaunhqpWImUmMlUuQBPMmWcrzDBDudhBvKRUvwNKBB9HR3rU6CKPo3anIkKJZbzXppdPNcnTo%2FLGWrUVE4p1ql6Mb%2F1go%2BuC24gBIofgrScIr36ximXKrTIDH76BPmeVnLi4JD6rNuxuiTRE9RNxrdGWcOkOQEcvB7geYmPOk%2BGjbrr&X-Amz-Signature=84720721803049a0e831c4ccd58e65de1c716359bfdc0b800c6deb8c8911301a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZTUTUL5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxLOSH0ttre3FOEUtjO9rGzuFeVqX4Of7cKKlc7g9ANAiEA2t0A%2Bryi1xDi9SfBLixbdYmYzLD7WXAuMlABfSEnoxEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6PsSl4EVG%2B9z4rxircA1LteYtlac4loIu2bsCDsFS99PQLucMi8EBOtpbta7Wjt7Mt3U3WQmp1YPs3PIeOkPCIoAueGTJsCg%2F79ueQHlRM9tNmy5Tv5QR1%2B59fSH01BluvpSc97F1EfmTR%2FZ9ENtg38ZeeT4m6PB%2BMqeZRAkDRynJbToLqneEWoxEw35zKJmO0pA6Dpn0wGdiv5jpZ92R04nISvJ53mSekpdHZwzL9hOO2uAB8UTyF2Da8m4%2Fyx5qCsmgfYbnAwyrDPB8rkl%2B10b22rba7oE80MdYLS%2BUbEexCh0rOD5EN7egZVf8wbzcX%2BupsOC7v0pl94cJ%2FPuMfTIiGpj7p%2BeAI0XWEBJ4ybR%2F0%2FS4YLFD2D%2BXtJxB%2Bte64hv9JL6uEL%2F1NXsdKoLs26pBwp7cKivxgtNbWkmssldOiUs6bXrly56a2wy982p94SjhVBUlNCuTQoA3vyKIRx1oICyVe0nx1LPykXLeox1fTWGvMrwbi1C3ct1Ug%2BonqLkXE1aybk%2Bxb6ONIhQUBMgw4Y2PMl4jEUU3ld8iKM2Muz3MHTGpS20T5mTn104uIeFqlom77%2FuFLlnjqTUGja6qM6Zst8k3ZFQv4u%2BlmdJ4vJXB4nhBNtlOp5qPAgeMOxTR4Oe5xjWqEMNjKub8GOqUBqKAMj6Pk2MryD3WMthhnm5GPtAThYmpwSmb01U4OnyznNequhsvJVnxYZa41Akq9PmIcGDSc65M0QACMfzv7CQSTM0f1x0kWDSXKOh4%2Bg4e6XS%2B07%2BGmiYLnSXdcbhQIPHL6P5WRyqSpmM%2BWpIngxs%2B7zwrKAIAU1zFtnaPX67sv4R%2BrDguwwumYMGNl97W3%2BmvjR%2Ff58jWAWGz4tURUtTreAgDl&X-Amz-Signature=34f55d207423400649868fd4bd560b40e54ac2289086cf15270afa740746e517&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LOBRTO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoE32Rl9lutbjoCBNfCT3efYWQ7ivUxMfhAXVXUqBf7AiEAiaPd6hBYNlId9%2FM6EBoAVJKLVIURyaVMJYjN5o7BthoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Z8nTDadKwQBJPGyrcA5mJonUFI2bXAejXQCCoDHgb3BmeseOgJ4ftyUAl2GFnlw9bF9eECz8Qnz8x8fisb2hzHhcUeZbc9c0R4c%2FKp0IBY9buBz0TXP4ASmUEHM8BWLbzBSD8EDvJLQqtXWDjLKaOg9ZbimRFDBWgWyPigGDvDDAqFamJvCqEXvFQYX1jHaJRKND0g4N60%2Bw8JnvcyYewH0PPJWX6qpAVN66hPcqshqFRe604icfcDfnxl04ogEOJKbVlU9oAmFx3AymB2Fn8iemT3oXbmIAagZdPqeuO56svG2oOKSD64tvFg%2BoygaeFMTllnJjcjWOC5XmrDg6dkmbsWys5c6907E8O%2FS6VtNOP86zAFVMXwBAZ9hcOEmp49X0HASIZScYNLWTgmCOqQC%2BSTxPOkr9udEcGJXrFl1XmlvbqLVG5baan4zwf%2BD1kYM0WZkhL57pj5R1ZSmTnsFKMmq5XjAe%2BK0WSL3OTjLV9ecxdPNJA5h3Ea3wmDnaUJDw06%2BPxtPCqZj3qtG1ir89gDD6zYIdsNT5qvwzn%2BBFNwEmGbaMsk7v3xvhEuh6ulKyViVHXBXV3LZ01xnrGNYMNL0Utgs4kxQMftnNIWoua7l4ymKGsezIOHWDLzIRMqlJIwm%2BJwymSMI7Lub8GOqUByUAPM8F9Yy2X0FF6NiLJEmwwwP%2B14PZjo%2FvGMPYfhlThAJPOznt7y2sIia2Z3V96JaznlZrytggk%2FUpRuKL2jwed8Wd2uHneCtZCWCSdniXPYlaQz0H0EiKX4lDYNPZrbmTQknzW8IrXXxd42Z5tuu%2FIguwYyFROg%2FdHroUGx7hIrCbKuhVbOfIvfK9PXWLgN4dYh9VuIyaIBaauLEfbO8rJ%2FckX&X-Amz-Signature=0849de74ac4f9aaf13ea641c597e7df74770aa23c9bd8e302a64360169642c15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVV2XHN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnoIgWbqwddqiCd59qRLllzbibZwPk%2BZmj7oCOpC0O4AiEAjmN7q%2Bl3PN1SUcydw55yGNNpldo3RQ%2Fm1djs78hD32oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqCHTKZiGNgyUyJwSrcA4S1dw%2FFX3h2Xaa5cDmUgI%2FZz0l4OgiwA%2FMVgwomhQfcrgBqKsrPteh9tqOSOlrhnIk3Qp9lgDWimQBGURBZaBhWItbcm2wB5eHOvjow8WS453%2ForlvFKofuTOKIE%2Flwevch6Cng1MCCK7%2B7W6KhnwdDUm6j3fDVvhN211oXl0JOEgEP7CtWhPZNppR4VEFygaSK%2FFVbbktYYobGhw7Fg5eog1tUdi5Tl3BknumqSJr4pppe%2FF6k%2FUgkJn8LnDa3mFLC5qZxvBKyG%2F0PhAwOixT1PS9L8vh3Aps5%2BX4bDp0W9npI0m9XFPUgl94Wm8Y7eGvV77Z8Fyi14pDv1iuKmJd0dJvP3ip1mNdwkJ3a9bhhs3f2RFKJAJHUK3fZhXfnvtIEjHkZYW9j6aEihKRG7IcP7AGE%2FxoVJ1MVMU3LaZbwhYST4H90mCUrp5eQ31kEOYK2x0E8xFCjQGA7W6dPNJSiTzQyx63zrA%2Fj%2Bb3b1Z7Ram6i2eyVzweCKUXa3syHmdScFrpL3EPNeKGYhYME%2BIz9rDgHeyKkLuelVBZibeo%2F1Y7N7PP2fabAr1KNOqDLBzarw6wjV5uMTBMlGlZAnOpZ6NxpKNe8VPJcgtX%2BI6QafQU7LcuzIyG6wMVkMP%2FKub8GOqUBkdxS1g3FLMaioc4Ftt79ws1sLFKvZSYMu8s%2Bu%2Fp8x4xcnGaunhqpWImUmMlUuQBPMmWcrzDBDudhBvKRUvwNKBB9HR3rU6CKPo3anIkKJZbzXppdPNcnTo%2FLGWrUVE4p1ql6Mb%2F1go%2BuC24gBIofgrScIr36ximXKrTIDH76BPmeVnLi4JD6rNuxuiTRE9RNxrdGWcOkOQEcvB7geYmPOk%2BGjbrr&X-Amz-Signature=af1a9126ac6130d3f8d35a1109ccf153af264237921b9b43a3d1c5b01df349ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
