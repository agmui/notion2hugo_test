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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUEDWZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG0kDxtCsGEdUJcNrDSAbQJRlL01fL5Dpekoy1WuqnFwIhAJSj2K8LN77dYETYVeUrUxShI%2BSpzN2Z11sYaNCgn8rKKv8DCFwQABoMNjM3NDIzMTgzODA1IgyukKfOZLJJjZxFSkgq3ANfTuZss0eHUz1naOd2Rqu2P0cJDbzncgBO8yUM1ofFd0MsEWDaVnUyb7%2BQ3X3rSC0I3N%2BrTUMNfdX4OYaGh%2BNa9koGY09PNRQnCv%2FlD2PqY1u1n%2FPO9YiykuDiGXe3TCKj05w%2FQkHCQdyQyInsM2SHgwHsX47vTbeg4sKywhVNLgsRDQNAP49Yr5%2BIa%2BpTX2M%2Fvvk7iVcyuT%2FqRrvB9TRH%2F52XV5jZ0Htell2Y5wlGItiuk8S0VnhX1RrEsrj43JwVxZMCgLPhgjBUndC0puBkf%2FCzLHTnGF1P%2BrQRh2x853xngzTCbuNxChAEdK%2FeXgtmBCUFYQkAm%2FEENx4uANAMr4pn9vXnli%2BR2alJcQtT4TzYizBbwTLzRtSB7GmJasoyFT4cN%2FARVfS04wUB%2Bc%2BtCRXK88ZbFbH9KOggiLBAhzQGU79Eebn3CUZzusqcqf7g7lCFVeaj7js6CmInPoCE14kYKuqjlityzZnaFX0SgW2kjOJmca%2FUuITBzbq7W5ulQnxXvzlIKE1E169JUEFAtomP%2F1Lm7UsPUcempMMkUoAHddQvPtGdsVdsGTr2OWX5%2BhtEq2D0G98inLRa2vOt1lzbLpRDFd2SQWfQmTxovw3GL8KeYKPmF0UXgjDg%2BJm%2FBjqkAWAbz6ZB%2FGd2xAALEoVEFVUlFvB8Z5uIuf6T2SUmwByZLAWfgusKYboDoambxcRgY6CsUT%2Fs3egydP5yxSblQIRcVEbygDsrOYBeKnoBsvWZ1gHrFdUY6gkWC%2Fe%2BQ6qYxtTlK8w0lKOHkaAE7IRv5so0cELLpxUct7skiQOBM4F7kLwLFPbwFFt%2Fn8QZrkGfFzGq1D%2BYslED4dSGuIUskSGUKz3z&X-Amz-Signature=a2bffa1d47f7bdc27b0cc579c32915df7cff10044ee74174a0dd1ea458fc5f74&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUEDWZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG0kDxtCsGEdUJcNrDSAbQJRlL01fL5Dpekoy1WuqnFwIhAJSj2K8LN77dYETYVeUrUxShI%2BSpzN2Z11sYaNCgn8rKKv8DCFwQABoMNjM3NDIzMTgzODA1IgyukKfOZLJJjZxFSkgq3ANfTuZss0eHUz1naOd2Rqu2P0cJDbzncgBO8yUM1ofFd0MsEWDaVnUyb7%2BQ3X3rSC0I3N%2BrTUMNfdX4OYaGh%2BNa9koGY09PNRQnCv%2FlD2PqY1u1n%2FPO9YiykuDiGXe3TCKj05w%2FQkHCQdyQyInsM2SHgwHsX47vTbeg4sKywhVNLgsRDQNAP49Yr5%2BIa%2BpTX2M%2Fvvk7iVcyuT%2FqRrvB9TRH%2F52XV5jZ0Htell2Y5wlGItiuk8S0VnhX1RrEsrj43JwVxZMCgLPhgjBUndC0puBkf%2FCzLHTnGF1P%2BrQRh2x853xngzTCbuNxChAEdK%2FeXgtmBCUFYQkAm%2FEENx4uANAMr4pn9vXnli%2BR2alJcQtT4TzYizBbwTLzRtSB7GmJasoyFT4cN%2FARVfS04wUB%2Bc%2BtCRXK88ZbFbH9KOggiLBAhzQGU79Eebn3CUZzusqcqf7g7lCFVeaj7js6CmInPoCE14kYKuqjlityzZnaFX0SgW2kjOJmca%2FUuITBzbq7W5ulQnxXvzlIKE1E169JUEFAtomP%2F1Lm7UsPUcempMMkUoAHddQvPtGdsVdsGTr2OWX5%2BhtEq2D0G98inLRa2vOt1lzbLpRDFd2SQWfQmTxovw3GL8KeYKPmF0UXgjDg%2BJm%2FBjqkAWAbz6ZB%2FGd2xAALEoVEFVUlFvB8Z5uIuf6T2SUmwByZLAWfgusKYboDoambxcRgY6CsUT%2Fs3egydP5yxSblQIRcVEbygDsrOYBeKnoBsvWZ1gHrFdUY6gkWC%2Fe%2BQ6qYxtTlK8w0lKOHkaAE7IRv5so0cELLpxUct7skiQOBM4F7kLwLFPbwFFt%2Fn8QZrkGfFzGq1D%2BYslED4dSGuIUskSGUKz3z&X-Amz-Signature=54bb089b94e7cf2ad47dc0eff77f6eb645516c4069e5cb42c29e298177f7e3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGQOOGP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDecBdMJkGDYL6jGvNEd4%2FU1YMcg3wgNzdh8WDDaspRsQIhAJLZJ6Uwo9zFTLGBz8gdSCBo%2Bn%2FGWQ9QM%2B4ZzCk1PkV4Kv8DCFwQABoMNjM3NDIzMTgzODA1IgyKEIe8WeJDPl%2FZC2Aq3AN79X2yckkXl1Tyd%2BzuIGQB%2F9gZf3dCtAYHKzhsHK0wxaLkQljZfXb7yffXVPKdnwVUf5ddU2YDUTliAXlRGeBOJzvhlDmaa8gNGUlJmAxw6yl%2Bu%2FwxneBB4nPmW5pshGfPyZxLFPkAGoZh9Gs0spo%2Fcac6yKVJ1ysil9htbRGwGecG7Zj%2F%2Blro9B4J3JzmdoJmcx0WwWnVknh7X4PDqOtFm0yGY5vvW%2Be389cpFkYkOTa2F1PXcwJwTl00J7SBOt3%2Fkb4n0oFPx1WSQaUvnmT07W%2BUTtj9EldPczDUmOBvGBnqONLa%2BHoPZ%2FtyxII3V3VgmkZjDyW5az1LlSPx7KF1B54U5p2Z%2BpkKTIVdUv2OLqu142wVZOyzfyCclkRsw65IttTanQH3ecPgRNahhM%2BhkzhV7qDy5lIenqwshZMoXDO%2BezdeCQRvlXru%2FW9WpbGqB7ib9RiC%2FCY01T%2Bdzj4z%2F%2FQiR1TXud4w7d3fkPZzg1NOAEB8PZtFWYNOCdj56xO5wp24wAsOMLYhgwIYlfUqOJDZtnnoj9vXWp4uqybsMX0kEvi1jx2%2FUR4tAaYUkTXzxtTArzAnki3E7C4b9OfgOcfmPhwotl7h%2Bk7uKZ1DNjlL2H64eqkuQhFmkjDD%2BJm%2FBjqkAWKbQaH3DF7OJb2nW01qLvBGwrhtuKCiwooTzFlyTDDrP3nEuVNkQ%2F%2FveJWd49yljnIggP7Pis3vNu4P4Bed%2Bm9UEARSp6ElZSdEXBidEBuwxE7izi5wvsdsTkGDQp1%2B8xy%2BEDdLRbPAuNDvqiPZcGyAirA3FHKo6o6GcsANXQ%2BR4YaPirK00eGC07F04hqcDQ5C5vgn5buZbwG47AqEbeuZqkQ1&X-Amz-Signature=f04ffb99999afa1dd94468573054172fee0a46e68c855329e378df454ec57ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI3ATHO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtQ6CJAib5umHkvScCrkAsqM1593vm2E16kv%2B9vMjRgwIgJOvhduqDYU5PQ%2FloE5GR3sneh60mjmEBDVPMQc9GM7Qq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMdiP%2BjTIvWNYvmSNyrcA9h8N16awOVzrAZ00VAfE2rrJbTuBa7RZ2MHsb0uy1dWAoGWaFOOqYHcKOZpCr%2FfPjLipDg1b%2BqGRcXxKAoV%2ByTdE97suBKW%2Bo8Fki7QQy0VBkj96W1NqNzTSDn4R%2FOhScyeL5A8Uf8H%2B3%2BZs5Dyt6rrMnjD5CN4tDotTwtX7WnYC9bkyYxPfbeNJLmpZkAuKLwK%2FSjHXW%2B0B06e7sUl4W5OJVKkIsDZUJGoGBCiVLoFb57bEOzCqtKsxsANolSnUBAIs9bj6dm4IbtpvBO2gE1IXzHnSiRCjJ8Za8r4RDzu1XXY1i6qRqzA5Fb8egLhLPKjbfIrblQAtB51Im6h5pbiy%2F%2BVApBZ9FrHVvWYN7yU4cQxM7eRo8TeZpLV3mF2aQu4VSSog0f1nAGOje6%2BM%2F0d4pixPuwUrSIVtxNdS7LKX5fO%2F588IA0AVS40pNXBHjjfy%2F3vNpJSdM6JBBKPicXp6aetOIbwN4jx4iPds7Ms%2BROSF4NZnfAkK5D0Hytr7XanfVutG0iP0RSFeHzxuzSkb0wr5Hn66ZcTY7a%2BndfNb%2Bf7USaPifBqxoR19RdN4B2EpIO8yhdjtX1LoZe01EnkxhNJYL89V7%2BSHjTMHfXoMNsUtc6TvkSrfNVwMN%2F4mb8GOqUBx%2BXBlDv8LmjOtYlGjAEU4xRiLPsY2OOl9t21rzKoYK7yPbh2MWLxbIwzmly8h6mDc7KtwMZVfgMnG8LkNKSC6ho2WAi4kyoy5slJF2j2hLleD6C2%2FA4%2BDdE1MXArkUR8pCSAgV0lLKgSLunXXTNbCHgQ%2FIOPdyU4lYC53lMr8cqd2Yv0j3L0iNeYIL80sS5lTrfO9uAOKjc9SbRZ77Z4DtY5I0xu&X-Amz-Signature=c21a008613f3743f8f89eada89b4c54ef1a7caf34974593434f69424cf405cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUEDWZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG0kDxtCsGEdUJcNrDSAbQJRlL01fL5Dpekoy1WuqnFwIhAJSj2K8LN77dYETYVeUrUxShI%2BSpzN2Z11sYaNCgn8rKKv8DCFwQABoMNjM3NDIzMTgzODA1IgyukKfOZLJJjZxFSkgq3ANfTuZss0eHUz1naOd2Rqu2P0cJDbzncgBO8yUM1ofFd0MsEWDaVnUyb7%2BQ3X3rSC0I3N%2BrTUMNfdX4OYaGh%2BNa9koGY09PNRQnCv%2FlD2PqY1u1n%2FPO9YiykuDiGXe3TCKj05w%2FQkHCQdyQyInsM2SHgwHsX47vTbeg4sKywhVNLgsRDQNAP49Yr5%2BIa%2BpTX2M%2Fvvk7iVcyuT%2FqRrvB9TRH%2F52XV5jZ0Htell2Y5wlGItiuk8S0VnhX1RrEsrj43JwVxZMCgLPhgjBUndC0puBkf%2FCzLHTnGF1P%2BrQRh2x853xngzTCbuNxChAEdK%2FeXgtmBCUFYQkAm%2FEENx4uANAMr4pn9vXnli%2BR2alJcQtT4TzYizBbwTLzRtSB7GmJasoyFT4cN%2FARVfS04wUB%2Bc%2BtCRXK88ZbFbH9KOggiLBAhzQGU79Eebn3CUZzusqcqf7g7lCFVeaj7js6CmInPoCE14kYKuqjlityzZnaFX0SgW2kjOJmca%2FUuITBzbq7W5ulQnxXvzlIKE1E169JUEFAtomP%2F1Lm7UsPUcempMMkUoAHddQvPtGdsVdsGTr2OWX5%2BhtEq2D0G98inLRa2vOt1lzbLpRDFd2SQWfQmTxovw3GL8KeYKPmF0UXgjDg%2BJm%2FBjqkAWAbz6ZB%2FGd2xAALEoVEFVUlFvB8Z5uIuf6T2SUmwByZLAWfgusKYboDoambxcRgY6CsUT%2Fs3egydP5yxSblQIRcVEbygDsrOYBeKnoBsvWZ1gHrFdUY6gkWC%2Fe%2BQ6qYxtTlK8w0lKOHkaAE7IRv5so0cELLpxUct7skiQOBM4F7kLwLFPbwFFt%2Fn8QZrkGfFzGq1D%2BYslED4dSGuIUskSGUKz3z&X-Amz-Signature=f707bee09f239f81f6c2a6c38b6f05ebdfee391e9b43a90974fb4ebbd58d45b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
