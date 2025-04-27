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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJMHVN2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1LokcHTEKtrYQ03g6wYP1k%2F6pJzxVWCxqFcieNR6G%2FgIhANOphrXGmlbxbOdilCgJDUIXmaZdVwW8zAaJc8NrCNXUKv8DCGUQABoMNjM3NDIzMTgzODA1Igy%2B8FTeNxotQx24l4Qq3AN%2Fq8K978%2F9sPHacmGrqz0fNgFtCZbJ%2FGadXX9LTZ1NlH8DXO8UuI1SUo6FZ6lVbKlABfoLLeM%2BxgsmpXX%2BkUIT3iTN7auNWaH%2FuWMk%2FVPekqcfTOYrYIzxvxkYETN%2Bb%2FM%2B0DwCbneLZK4ryy1%2BX35nBE83q%2BEZUB3Roujqmj8iVjCaUHWsnpN%2FKerBPx9OF40F0bdtODemEtIQpwZp6nKU%2BkQyYp2FTopYl8uxM4asUkwL%2FYP4eGj2Ph8dRygMvTcvYSRrIMi6Ft0JNA7mmu%2FPBbFGbKW3T%2Fl0xUvKik9yzyaacJ%2FhUe1am8PDYYNiIIwt3vaBCR9KRaJKfGLRgDQmA0%2BVkBTxciCtp1yV%2BEZgz62Red4ebpyFzWussPw1jP5F52M3XQ7%2Bo5%2Fe75a3rvI40kusRxKh%2BoMSoORQ2fGhcDL%2FDrtPcQKUNuifK0br16gqR4fs9XQO4FIIsx%2Ff7oNK%2FzAClGA39BJj3y2hWOVyfAd6uEqqDWh1TshLJjgZFCXTkwWQQKoGFzFBlISvh6Ec%2BTCdKgZWbfvTwzBV4OR23PChniQ933%2BXK3ZVZuakEqshLfL0yPFTNrxodP%2B5Tyi2yMTMGPe6rOWhl%2BfT8Hsn%2Fjd2KHFNz0k2TUv2fjDpirrABjqkARQvYAdciqtD9Smn9Sxws9pHN1rJ7xyStR0hBZKbp3h6Vq2TxypGGGw44bQaAZMa4WQvPHJmVZC%2BqiwwjBnqpDZox8M6MUA3DRHOdOECTe318l0kxGz40DwacB9MVDKxxsdesm5beuBH3Fmy1Tk0OeN9eSLKUDymB%2F%2FQ3UVkrMEyUr5JmeY6jCiWveMEwbtezGVJ9svEEJFeW77PC6E0lWPpyd%2B5&X-Amz-Signature=80ff72835fccb20ae1e2224084bcf724c512fcc4b54f714651840cd5e9f43487&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJMHVN2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1LokcHTEKtrYQ03g6wYP1k%2F6pJzxVWCxqFcieNR6G%2FgIhANOphrXGmlbxbOdilCgJDUIXmaZdVwW8zAaJc8NrCNXUKv8DCGUQABoMNjM3NDIzMTgzODA1Igy%2B8FTeNxotQx24l4Qq3AN%2Fq8K978%2F9sPHacmGrqz0fNgFtCZbJ%2FGadXX9LTZ1NlH8DXO8UuI1SUo6FZ6lVbKlABfoLLeM%2BxgsmpXX%2BkUIT3iTN7auNWaH%2FuWMk%2FVPekqcfTOYrYIzxvxkYETN%2Bb%2FM%2B0DwCbneLZK4ryy1%2BX35nBE83q%2BEZUB3Roujqmj8iVjCaUHWsnpN%2FKerBPx9OF40F0bdtODemEtIQpwZp6nKU%2BkQyYp2FTopYl8uxM4asUkwL%2FYP4eGj2Ph8dRygMvTcvYSRrIMi6Ft0JNA7mmu%2FPBbFGbKW3T%2Fl0xUvKik9yzyaacJ%2FhUe1am8PDYYNiIIwt3vaBCR9KRaJKfGLRgDQmA0%2BVkBTxciCtp1yV%2BEZgz62Red4ebpyFzWussPw1jP5F52M3XQ7%2Bo5%2Fe75a3rvI40kusRxKh%2BoMSoORQ2fGhcDL%2FDrtPcQKUNuifK0br16gqR4fs9XQO4FIIsx%2Ff7oNK%2FzAClGA39BJj3y2hWOVyfAd6uEqqDWh1TshLJjgZFCXTkwWQQKoGFzFBlISvh6Ec%2BTCdKgZWbfvTwzBV4OR23PChniQ933%2BXK3ZVZuakEqshLfL0yPFTNrxodP%2B5Tyi2yMTMGPe6rOWhl%2BfT8Hsn%2Fjd2KHFNz0k2TUv2fjDpirrABjqkARQvYAdciqtD9Smn9Sxws9pHN1rJ7xyStR0hBZKbp3h6Vq2TxypGGGw44bQaAZMa4WQvPHJmVZC%2BqiwwjBnqpDZox8M6MUA3DRHOdOECTe318l0kxGz40DwacB9MVDKxxsdesm5beuBH3Fmy1Tk0OeN9eSLKUDymB%2F%2FQ3UVkrMEyUr5JmeY6jCiWveMEwbtezGVJ9svEEJFeW77PC6E0lWPpyd%2B5&X-Amz-Signature=0edc162d92347aa5573c7051d144dc41f4e46362f339682f6ea9415b3266f761&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKC2QN4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC72kmsTrlJvc%2FR7DO%2BDvSxrlkrYgdVrPzipXFeFSKvNAiEApvF%2BwtfCq3lJvKcIgAb293DR4mKujzgbJN5%2FL%2FCq2Nwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDL7qYENLde8oqi1qHCrcAz3dE4%2FEAUQEfr5fDs3NDK5c4rEYJnLggZTBujb7Q2FIYtkvu%2BpGsIZhJjKxXU3r8b4zkrahmpl1UJYUhkkRoKuWvkwO2TBzJy%2FQEcFBIJUq%2BebyLRxpRAOJ53Y7ZMMBdQbf2BFoZK%2BXc6Pi%2B98mhEzc8%2BY%2F6hj2Euwcf8HlBmGgC9%2FW3sQXh9VxeSKwnWQpyKdFh5w4MujWezMON4gvglBBUhm6inrZ%2BojiEo8JwL0oieFqLjxQHZzEVia2Skuom6EQ0Qwxlm%2Ff6kmJt%2BPiJDtjiXNs1YIWNvLAJqea5G%2FMgpxkirmoVFY1ssNQa1mxV3uSwArCGcyPDVegrfB7uAJeWNOvoRGRK1vPMTdlQmNAdhgEeep%2FnQ6WqlQmZk%2BSmDuyiebCuvGvr2m6pie4fIdX72blWEdMLUc9bui5%2Fltlt204nso2skLk2hinkK5iH7crBNxMPnRkV8nOjGW6%2FupgDiUZ3vNkiXnW6HV5IEV0gy4iFi8uOIPSjyT%2BX1i5HJC%2F0sQR4gJY6KQ3mScWdofLcbpVlNM9ejibnbCwngtsvMhrKVuZszjKPOCo%2FW5SKyK54fJmqgobQbcuMWX%2FUvqnzseBX6BwYKSt83iy%2BiX6EoXOx%2FcoU2fj7IRYMM6KusAGOqUBGjDLUsBgMt7rN2X7ea7j7PL%2Fh85JTU5d%2FEYjzbeFjcuXi2Ym2%2Bcu7MVjtwVJ9O4R3qGGPz1Hmko4WmlDcB17AH1xN1ypPrsZwCe39hR8qM2LhuChR0MO93RwtuMb5k3ux2%2FfOlUppjgFpxjcHq0rkol8H8ohFD8p4kfeovewWyGBk53dgqS%2B%2Bzbe%2FbwmQt5pWqxI%2BgN2IIhTSxd2ds3nvX0U%2F99r&X-Amz-Signature=ddf4d30abc4afd12a41fadeb61dbfe9ef67551a11b9dec78863bfef5aeaae86e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VF2D6EJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJXygc9qrJ4ef0ajy40lGJ6YJR2BIc2CdEkg%2FOe3g1lAiBUbsmYbCRxnMZrJVke8IFlNjkOyJdeLVpWUZWpssVAFCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUIFGQrVqFUrZoHSZKtwDo%2FZ8feAzfzCltrcfwMk%2BSBENU0aAvO%2BAvnpmkRRiRk3BRyEb6ToF4HKDqWjIkFTNhIoBipJqeSXLzz02H%2F%2F%2BWhjBt84OFt%2BZMp5Yx8V%2BEHIIxr6vyVUImu6EsRj04hTR0usv7QLY9WkUVMrli2ej5t7OJHdtPBWCmjnPLqjWu3r2igvR%2FGdhEyy%2B7qlgHdUSgWvzgT0%2Fs9BCvyUEw3bcmy%2FpaJqFhyhhwPpGhKf3tNMPgVVwD8KM0Sc8Fxh5NHFxK9ih5dHQc%2Bn7JFIG4xkvEw%2BPuy%2BH%2BJgILFB9G%2BVKVfQHDPpE9IO5GJcSODtawZOZa04iiSMhxOEMVyJy1geqG0Nk1v2f2k1ru2YFSkeV1L%2B7%2FH1dVnR1TaD6IL%2BYBVZfg4HNV4CXpo6DiHyx3VOjWolx%2FDuA8iplaIBRrm%2BR7Qg9yQc72VZeZf3siEB5irZ7WqolU3%2FC9rzMvK2j6GHWh2wljLQ37bOzWWXPjvZOG93pe3J8bqrG0E7lbIfr%2FBNC%2FknlDozTaXCE8oBh0VgYD2OPEIObLdY9h%2FpUvXwssITEJzkvBEmDSmhPiApeYxSXeE3UvozPvgvLcEjZyqA0S7HHq1S4f%2FkLbHS4fGYF5jM3rBZ6goGCyZ%2FoWLgw54q6wAY6pgGB%2FmabyZMoPbO73Po7SNo7YbytLo6OFDsAYAKz0xbSwAcYywR8wYpiuHcDSmW8qXcvA%2FyKNOTDhBJ3A4%2F2%2FOGMDqrUBr1UEQb2KVWbYY%2B90tOfXYglXGfQcNvkDDJeDYkYXE9tzkqgF3q9RR3A1XEmi60uNP7tUAy1ZwJE2A8EkaZP%2Fp1Vis5DX7dBntomZvUTL5TaZpLm4d3vN5cX4ilEmuiwT7u7&X-Amz-Signature=ea91dc334c52c3c5aff90cfa0cea88845a6ed68fe9291894053234e08b722ced&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJMHVN2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1LokcHTEKtrYQ03g6wYP1k%2F6pJzxVWCxqFcieNR6G%2FgIhANOphrXGmlbxbOdilCgJDUIXmaZdVwW8zAaJc8NrCNXUKv8DCGUQABoMNjM3NDIzMTgzODA1Igy%2B8FTeNxotQx24l4Qq3AN%2Fq8K978%2F9sPHacmGrqz0fNgFtCZbJ%2FGadXX9LTZ1NlH8DXO8UuI1SUo6FZ6lVbKlABfoLLeM%2BxgsmpXX%2BkUIT3iTN7auNWaH%2FuWMk%2FVPekqcfTOYrYIzxvxkYETN%2Bb%2FM%2B0DwCbneLZK4ryy1%2BX35nBE83q%2BEZUB3Roujqmj8iVjCaUHWsnpN%2FKerBPx9OF40F0bdtODemEtIQpwZp6nKU%2BkQyYp2FTopYl8uxM4asUkwL%2FYP4eGj2Ph8dRygMvTcvYSRrIMi6Ft0JNA7mmu%2FPBbFGbKW3T%2Fl0xUvKik9yzyaacJ%2FhUe1am8PDYYNiIIwt3vaBCR9KRaJKfGLRgDQmA0%2BVkBTxciCtp1yV%2BEZgz62Red4ebpyFzWussPw1jP5F52M3XQ7%2Bo5%2Fe75a3rvI40kusRxKh%2BoMSoORQ2fGhcDL%2FDrtPcQKUNuifK0br16gqR4fs9XQO4FIIsx%2Ff7oNK%2FzAClGA39BJj3y2hWOVyfAd6uEqqDWh1TshLJjgZFCXTkwWQQKoGFzFBlISvh6Ec%2BTCdKgZWbfvTwzBV4OR23PChniQ933%2BXK3ZVZuakEqshLfL0yPFTNrxodP%2B5Tyi2yMTMGPe6rOWhl%2BfT8Hsn%2Fjd2KHFNz0k2TUv2fjDpirrABjqkARQvYAdciqtD9Smn9Sxws9pHN1rJ7xyStR0hBZKbp3h6Vq2TxypGGGw44bQaAZMa4WQvPHJmVZC%2BqiwwjBnqpDZox8M6MUA3DRHOdOECTe318l0kxGz40DwacB9MVDKxxsdesm5beuBH3Fmy1Tk0OeN9eSLKUDymB%2F%2FQ3UVkrMEyUr5JmeY6jCiWveMEwbtezGVJ9svEEJFeW77PC6E0lWPpyd%2B5&X-Amz-Signature=a7995667d107d145522341f309ac681def67bef323b9ff23b0460d33ce3152b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
