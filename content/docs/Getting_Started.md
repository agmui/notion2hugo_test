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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZICQGGO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw%2Fvn8rOHSUPsaTYuo5nZkTmUEbcehtf5VSAyR52KrQIgFSgylDzpOlLfKYr39J3TrUZbYYQr5d2effBuTynjIywqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAqBihbZdr%2BhLPD1CrcA%2Fo7PK0MFapAKYIrmp5R4cThGjpuVMNchvvKhMaVPJ5TddN602JhmDHtSu%2BHnECrb%2BEdUR6sufIRovXwmZcD6XFjzh283YFyvv%2FKXXX3tQ7%2FPjd28k7JwFuHTKPuO1qs1WuB%2F48Q4xiZnkcy5C%2FJLsxrfNmIM8Rrtszo%2BLnHA1sS6j2BbW16VsOJlPgzvNeZoCbJMfZ%2F0ikuFwVI7M9mz%2BK8uuTWGi3ROhVz7r08iidaJhC6r7jPlNvhKgGri1EMA%2FpGeHK7IvS%2BZZiIFgx1HLYyzFFSpaku5bCQzUT6M1xf5FIYKmh9oqErHXp8DCgV%2BZcg5ivei%2BHbZJlQGSqzQ77yRFP6sXD%2B3YxCV3GHQ0TznS7GfZWwYqYxCOLr8smOGVY8tV9fjeCJPgGqMn7f7dR4PfCaoQsVuSiicv5VBU5dmIGfW3HEmkT8QpSFg4A4nls9%2B51nNWHRm1hs%2FpANMYnghskbB1Cx9XcZOt3m9IK4lG%2Fv7L%2BtnOktFo7utxau%2BADO8MEaG43MKeZ8bh%2Ba5c%2BW76f%2FYw0wVwtGL6zvP5JuebSIu%2BnWdGjKU7uApU1dIaUyD3R47jze2sESAkvxE4RLxwUMxl9kPYTjI7vxbPFjOntY4Pg85rH%2FdSO6MPuPhb8GOqUB0ZDrrZwzBbkuOHHYi%2Bil1wkt4MrDIuBnD%2BqpNBEihZFD94PwXQ1kkRwuB4ESFyhWtK3jje5Fl0dKMDMdNNyWsKGRxvyyXd3Obl9lzgZQz9VeRA1ADXE%2F%2Fj%2BENTstWKivx3avMifS2Zgz6Ly%2FpOaQ66%2FNi%2FWwbtaWBlGJczeHvmmN3wVd5offvjOJi3Vnj9UsNxfVAn%2Br3IjPjTnRBfT%2BFI6WdoDW&X-Amz-Signature=7ef211e856e328e8f4e10ce46932f461fc4fe2adbc53a3c032fc506e0d505bca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZICQGGO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw%2Fvn8rOHSUPsaTYuo5nZkTmUEbcehtf5VSAyR52KrQIgFSgylDzpOlLfKYr39J3TrUZbYYQr5d2effBuTynjIywqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAqBihbZdr%2BhLPD1CrcA%2Fo7PK0MFapAKYIrmp5R4cThGjpuVMNchvvKhMaVPJ5TddN602JhmDHtSu%2BHnECrb%2BEdUR6sufIRovXwmZcD6XFjzh283YFyvv%2FKXXX3tQ7%2FPjd28k7JwFuHTKPuO1qs1WuB%2F48Q4xiZnkcy5C%2FJLsxrfNmIM8Rrtszo%2BLnHA1sS6j2BbW16VsOJlPgzvNeZoCbJMfZ%2F0ikuFwVI7M9mz%2BK8uuTWGi3ROhVz7r08iidaJhC6r7jPlNvhKgGri1EMA%2FpGeHK7IvS%2BZZiIFgx1HLYyzFFSpaku5bCQzUT6M1xf5FIYKmh9oqErHXp8DCgV%2BZcg5ivei%2BHbZJlQGSqzQ77yRFP6sXD%2B3YxCV3GHQ0TznS7GfZWwYqYxCOLr8smOGVY8tV9fjeCJPgGqMn7f7dR4PfCaoQsVuSiicv5VBU5dmIGfW3HEmkT8QpSFg4A4nls9%2B51nNWHRm1hs%2FpANMYnghskbB1Cx9XcZOt3m9IK4lG%2Fv7L%2BtnOktFo7utxau%2BADO8MEaG43MKeZ8bh%2Ba5c%2BW76f%2FYw0wVwtGL6zvP5JuebSIu%2BnWdGjKU7uApU1dIaUyD3R47jze2sESAkvxE4RLxwUMxl9kPYTjI7vxbPFjOntY4Pg85rH%2FdSO6MPuPhb8GOqUB0ZDrrZwzBbkuOHHYi%2Bil1wkt4MrDIuBnD%2BqpNBEihZFD94PwXQ1kkRwuB4ESFyhWtK3jje5Fl0dKMDMdNNyWsKGRxvyyXd3Obl9lzgZQz9VeRA1ADXE%2F%2Fj%2BENTstWKivx3avMifS2Zgz6Ly%2FpOaQ66%2FNi%2FWwbtaWBlGJczeHvmmN3wVd5offvjOJi3Vnj9UsNxfVAn%2Br3IjPjTnRBfT%2BFI6WdoDW&X-Amz-Signature=fbb1d9705bcd264cf875332cdafaaa524b68099032fe2963017af4c6e5e5faba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QQZN337%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYlwIbjtbGkg7YqjI2Ps%2FVRNbAp1Q2DB7DJoMolnUYEAiEAkStqNP1G0HZ7ovLMS0HmkOLl6FSvob33D9CuShJCg2wqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdEDFmLccSDnS9DICrcAwC8NYfD0fGrG5BUYjAyCufm5dHhunN7FJ1iWfFfyAiaEfVT3WWm0ctj0lQFKeVT%2FEwq9qaTOXbz32KakmAmn3m1Th%2B8wekmZPjwSx60dJyFjLdesZR55bjtd%2FnS7JogaUqv0DgBDAtpNyJl8hEMLDxXPxQMaO5FcPBW2VceQAaOyGKypDRaUZT1b5nUxeZNkXNh2cJKAz0aXGMMI9jOa3tPnxTGa1ijyZZhJi1tBhALLYHBIilGPJrT8I4f5zccvqU5M4P4aQpBuPzznvWUXLNfbsRZF%2FFGYYE1TjwiSc4JoE%2FKCT6O4G1omYqZ6s2FwcXzBFDtPaz31U9uBaYGRsyjdh1LtvwaO3mRH0ct%2FSTtCeUjK%2FsEfUPawe%2BRLxswCXDumW0GK9K03B6m9xiAopFUfP3aSHorDyRzadY5YcjGfe1QeR689z%2FDJrFNSFClTU6fpqraFZg1dYyL3N1swiGlLCtDO13msw%2BpI%2FdyPaz92rGHxoH9ZWAsNeMMlXS0%2FoVNJYgJVJ910Y2Lu9i%2BrN2mdgkvVCQ2hKCzudLEJOa5o27WQ8Pd%2FEBCW8X8umzaR4P36wHHpK71yUR%2Bcc6DtLV2Wm%2B8sAyuTyLFrK950b8Lqp0SIbwh6lDwefFzMNCQhb8GOqUBEFxmbwsydjtv%2FQdW4ooMUAkawLIEMIm2k1CJj72Zae7IprWcHD42bT7ZE3f6QmXRk75BLlVZM0HQrZ8wuQNDZq%2BfJzCkT8nGOay%2Fo%2Btct6XNEGppTd5H9s%2FnDEvxGMcXPBZjBu2zPqhCmq4K35kDNSdumfg7uubTFpVUWPOywOjnoTDyamvd%2BP7qCcEEG30zYbblcApBhD8cWYD5spieEemwAHS8&X-Amz-Signature=28b3be1f6ec488f88c1ba13be727828720170c408c25394e83581070aa476d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNRHEBP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNbM2LNASsM%2FDKTPIb7%2Bl6bSnLOUQ7XL51GUA7Nq7wtgIgGedCSam6MB%2B%2F3ctjDMAv8EL1PpcZbbsn21WKlv1eeCAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fx2HrCp2mnYMdTSrcA1v1rEQNhRUmGrIfSuEB6peXcoSi6Ursb25Mw91%2FS2v4Dv7yAJpsC9KFwTuqUt3MLEYANltFAB7eItgFbKu2AcvVRKtsoa1EYXNTXMRMrTksaJCbS9N4%2BWdQ08t7rnIy9EBUjVwpELFNOCp8q3LusRLK5Pr77nvsBOsWjS1%2BOcWP1fgrvr%2F1%2BausYbuA7A5WZJVH5Cfx5sqvylRAUjWt7SN4Df8TAlPnzWn8rSLgFh5pysuppG51jxwIVBt1CqyjF%2FqtTQ3sncU%2BI%2Bm7mIx2c1GA4NA35B6iebfm3BIlLtLU%2ByoCMKnS%2Fws5fiwm%2BWMZW%2FQ95JjQcL3Yg92Vdq%2Bht7A1E0sw6AN85vMYmZ%2B4KsJ8gHcewCORCyOnKgoIChX2RnV%2BIObhUCfEaZR7XvcNJchUms6y0hAFDPx5k1cI3GBaijKqXfRLKQaVN78rPjPYr2oZrEghjGyGmf32FcRChsa4Qp3%2FGpm4PJkCGC8s8e0HYSiBtBEuoiDpkOFzVfvFq5lrIUnfeeDhq7AVy0pnFuObXkpCAm4pdQHDNJNJtIEEAN7C0%2BnjzGltOVVgWHcxa9WgKOYWkpsMmMPIBHYYAMOLNRdG3evTXOS%2BWu9kogfoEi5u0kgU%2FGWsiX6WMNGQhb8GOqUBhz1eZvnr6laoz7Ot%2F4HHVDl48v0DTgTKdlDcFVWCoHgG%2F4WKJaprSgHoCxLYtkvBFY93GL0eXaSG1jOj0g7j0c9LKAU5gVZHSpeiquGBZS8jC7UI%2BawVKlMAHFo9RdIwBccvtmmQ2qA%2BA9sl16IVMFbSrUvnczFLdyDnC4ySnaKfC873RR14%2FWX88i1WpXpHT5xWzzx3KIRRFDBlSg7aJFGnfwSs&X-Amz-Signature=36d80a64e923fd370a679bee0a3d1f95426f60a3f82105fb87c44654ef49e155&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZICQGGO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw%2Fvn8rOHSUPsaTYuo5nZkTmUEbcehtf5VSAyR52KrQIgFSgylDzpOlLfKYr39J3TrUZbYYQr5d2effBuTynjIywqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAqBihbZdr%2BhLPD1CrcA%2Fo7PK0MFapAKYIrmp5R4cThGjpuVMNchvvKhMaVPJ5TddN602JhmDHtSu%2BHnECrb%2BEdUR6sufIRovXwmZcD6XFjzh283YFyvv%2FKXXX3tQ7%2FPjd28k7JwFuHTKPuO1qs1WuB%2F48Q4xiZnkcy5C%2FJLsxrfNmIM8Rrtszo%2BLnHA1sS6j2BbW16VsOJlPgzvNeZoCbJMfZ%2F0ikuFwVI7M9mz%2BK8uuTWGi3ROhVz7r08iidaJhC6r7jPlNvhKgGri1EMA%2FpGeHK7IvS%2BZZiIFgx1HLYyzFFSpaku5bCQzUT6M1xf5FIYKmh9oqErHXp8DCgV%2BZcg5ivei%2BHbZJlQGSqzQ77yRFP6sXD%2B3YxCV3GHQ0TznS7GfZWwYqYxCOLr8smOGVY8tV9fjeCJPgGqMn7f7dR4PfCaoQsVuSiicv5VBU5dmIGfW3HEmkT8QpSFg4A4nls9%2B51nNWHRm1hs%2FpANMYnghskbB1Cx9XcZOt3m9IK4lG%2Fv7L%2BtnOktFo7utxau%2BADO8MEaG43MKeZ8bh%2Ba5c%2BW76f%2FYw0wVwtGL6zvP5JuebSIu%2BnWdGjKU7uApU1dIaUyD3R47jze2sESAkvxE4RLxwUMxl9kPYTjI7vxbPFjOntY4Pg85rH%2FdSO6MPuPhb8GOqUB0ZDrrZwzBbkuOHHYi%2Bil1wkt4MrDIuBnD%2BqpNBEihZFD94PwXQ1kkRwuB4ESFyhWtK3jje5Fl0dKMDMdNNyWsKGRxvyyXd3Obl9lzgZQz9VeRA1ADXE%2F%2Fj%2BENTstWKivx3avMifS2Zgz6Ly%2FpOaQ66%2FNi%2FWwbtaWBlGJczeHvmmN3wVd5offvjOJi3Vnj9UsNxfVAn%2Br3IjPjTnRBfT%2BFI6WdoDW&X-Amz-Signature=2eaa98bcf212f32b3f01f6b214d0c8681c31ed10390e1e3a56749f07d355d747&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
