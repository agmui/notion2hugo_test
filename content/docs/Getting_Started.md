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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJ4RFQ2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAgxTJVRbkHEU46hE5o92RvPTlUclTxsHIH3%2F02uKSAIgdJg9GRtexnTcjJb11%2F7Je9MErTtCXVKlQU31WkSZqVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM7%2BPhQqpo52SVVziyrcA9fyQea2oDI%2FWgwADhznSOYjb6GXdGsf2xVfi%2FUrYePwjKTN0Fm4x0Jal715xEZjTquHPFKAB3lFvvivAvnB5LDoUyijtka%2Bs3FNt9R7bmnaAxeNb16hx55I5Roi3knnthJD0SFJ5SkL5oSxDoTnJsI07D%2FFhyRDo3%2B5kSPkxd%2FcDPSfnoWwKEjeCvuK%2Blr7u8rr3zrSAX9H0sb%2FesIyRn%2BR8KXdX0L6AV69KCB9L1W3a3l%2FNNaYrRe2KVwg%2BJeUIBLcqdi7h9HO1R%2BGkIuPI0xnV80k23DVhwugVm%2FDcDgXSBSw64HugQRKbX3MV8%2FtqP3QqW3jGJZJ%2B%2FXzXLUsPGVqGlE5gu1v7To1OGYk0o4QfVV8z3vihbFEK7TuoBoGE%2FKgDMhmgVakbuIe3f%2BMvk%2FV7ckwILHpvCnlDdIqd%2Fm%2B%2BwIm4OZ3orngSo33rOIZepKUGy4HfayYGK8KsJBvo%2FKW5lC9xtyTnSR5%2BNUI%2FpWhxLJH1HMR3lV0h8IV4B0rEh4KUPb8Bf7aJpuQBqq4txXooZLabyjPl8vcPI3t6k7zcpW7xXNcCYrZGoO5gDlLoP8Ckqdx%2FPFBTuY%2FDxp8QgSmE59F4hEsflb%2FNd0oUsEDl2dDzPkzNodmmhNDMMzZvsQGOqUBKgqqBpsIB2yOa7srz%2BitWB9LI9X2GZl3AQOsPVUVn8VnoEx8szAqF15Ntvc6xiyqKoWfwCfIXdwux0ZPyc%2FMrGRiU1tXcOisidPcNK4RJUN4bB4%2Fxi3p0xhM3QYPrhixifI%2FvpAdKlbQaYD%2FKIjonvrOExFkKjHEfZjBFOSQuIf%2ByEOmT4v7g9EpBfVtB4KMBtAwyUbiuUlUkfAeA6ALoigLQSsN&X-Amz-Signature=fa4a58d86a898871264ed6c78327fd35f3f156bd61de4baf4973e581cebb6b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJ4RFQ2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAgxTJVRbkHEU46hE5o92RvPTlUclTxsHIH3%2F02uKSAIgdJg9GRtexnTcjJb11%2F7Je9MErTtCXVKlQU31WkSZqVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM7%2BPhQqpo52SVVziyrcA9fyQea2oDI%2FWgwADhznSOYjb6GXdGsf2xVfi%2FUrYePwjKTN0Fm4x0Jal715xEZjTquHPFKAB3lFvvivAvnB5LDoUyijtka%2Bs3FNt9R7bmnaAxeNb16hx55I5Roi3knnthJD0SFJ5SkL5oSxDoTnJsI07D%2FFhyRDo3%2B5kSPkxd%2FcDPSfnoWwKEjeCvuK%2Blr7u8rr3zrSAX9H0sb%2FesIyRn%2BR8KXdX0L6AV69KCB9L1W3a3l%2FNNaYrRe2KVwg%2BJeUIBLcqdi7h9HO1R%2BGkIuPI0xnV80k23DVhwugVm%2FDcDgXSBSw64HugQRKbX3MV8%2FtqP3QqW3jGJZJ%2B%2FXzXLUsPGVqGlE5gu1v7To1OGYk0o4QfVV8z3vihbFEK7TuoBoGE%2FKgDMhmgVakbuIe3f%2BMvk%2FV7ckwILHpvCnlDdIqd%2Fm%2B%2BwIm4OZ3orngSo33rOIZepKUGy4HfayYGK8KsJBvo%2FKW5lC9xtyTnSR5%2BNUI%2FpWhxLJH1HMR3lV0h8IV4B0rEh4KUPb8Bf7aJpuQBqq4txXooZLabyjPl8vcPI3t6k7zcpW7xXNcCYrZGoO5gDlLoP8Ckqdx%2FPFBTuY%2FDxp8QgSmE59F4hEsflb%2FNd0oUsEDl2dDzPkzNodmmhNDMMzZvsQGOqUBKgqqBpsIB2yOa7srz%2BitWB9LI9X2GZl3AQOsPVUVn8VnoEx8szAqF15Ntvc6xiyqKoWfwCfIXdwux0ZPyc%2FMrGRiU1tXcOisidPcNK4RJUN4bB4%2Fxi3p0xhM3QYPrhixifI%2FvpAdKlbQaYD%2FKIjonvrOExFkKjHEfZjBFOSQuIf%2ByEOmT4v7g9EpBfVtB4KMBtAwyUbiuUlUkfAeA6ALoigLQSsN&X-Amz-Signature=1c91c8d0c945e7bd0f4c009f62136039d8af9ca8d73cfa80d9abc57ac4b68673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJ4RFQ2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAgxTJVRbkHEU46hE5o92RvPTlUclTxsHIH3%2F02uKSAIgdJg9GRtexnTcjJb11%2F7Je9MErTtCXVKlQU31WkSZqVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM7%2BPhQqpo52SVVziyrcA9fyQea2oDI%2FWgwADhznSOYjb6GXdGsf2xVfi%2FUrYePwjKTN0Fm4x0Jal715xEZjTquHPFKAB3lFvvivAvnB5LDoUyijtka%2Bs3FNt9R7bmnaAxeNb16hx55I5Roi3knnthJD0SFJ5SkL5oSxDoTnJsI07D%2FFhyRDo3%2B5kSPkxd%2FcDPSfnoWwKEjeCvuK%2Blr7u8rr3zrSAX9H0sb%2FesIyRn%2BR8KXdX0L6AV69KCB9L1W3a3l%2FNNaYrRe2KVwg%2BJeUIBLcqdi7h9HO1R%2BGkIuPI0xnV80k23DVhwugVm%2FDcDgXSBSw64HugQRKbX3MV8%2FtqP3QqW3jGJZJ%2B%2FXzXLUsPGVqGlE5gu1v7To1OGYk0o4QfVV8z3vihbFEK7TuoBoGE%2FKgDMhmgVakbuIe3f%2BMvk%2FV7ckwILHpvCnlDdIqd%2Fm%2B%2BwIm4OZ3orngSo33rOIZepKUGy4HfayYGK8KsJBvo%2FKW5lC9xtyTnSR5%2BNUI%2FpWhxLJH1HMR3lV0h8IV4B0rEh4KUPb8Bf7aJpuQBqq4txXooZLabyjPl8vcPI3t6k7zcpW7xXNcCYrZGoO5gDlLoP8Ckqdx%2FPFBTuY%2FDxp8QgSmE59F4hEsflb%2FNd0oUsEDl2dDzPkzNodmmhNDMMzZvsQGOqUBKgqqBpsIB2yOa7srz%2BitWB9LI9X2GZl3AQOsPVUVn8VnoEx8szAqF15Ntvc6xiyqKoWfwCfIXdwux0ZPyc%2FMrGRiU1tXcOisidPcNK4RJUN4bB4%2Fxi3p0xhM3QYPrhixifI%2FvpAdKlbQaYD%2FKIjonvrOExFkKjHEfZjBFOSQuIf%2ByEOmT4v7g9EpBfVtB4KMBtAwyUbiuUlUkfAeA6ALoigLQSsN&X-Amz-Signature=9ff9c90dd98e278dbde06df2e71d5d83d8eb708ad95f53f15277d10271b5377c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZJCBTO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDGpaay85u7QqqkMs%2B1G54FQ1nvLqX4LC0BoAMy0IukAiEA0IduiARtxk53RudT1XyIyhJAlb56Fkfx%2FGQZxDeSIUIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDN8nGSi1g7HmLs5XDyrcAy95IgXa9wRmYW7ff9I5bG%2BWUdvKg7%2B4WVDNrcupdN7baFtX0%2BWQHBp522qCmAxGOKaeIy8vDx8n45y%2BDOg1KS4CpY9YDnIbrtdq2BMGfZUCE1Pozlkb06ESW0dF%2FxUBCdO1SoS1z1Xehw0BxXegkLJ8asJfr3v099Wq3HPP6W0uHpmsAgDZfXyKz7wqIz9reWJNrhSKXu9I1eW4OSGpJAZhBf8itCR9TQgSNK%2BRLvuCUDAuRWBt%2Fash8wMaKsAeRMqsKCV0jDpRRyiJewjFHjQmvwNBg2UcsCB9dCoBBEd3zKba8UIGQ0N65yx%2B40aM4uYJy78BGVVVmfuL7ySCVIyPbfuYjk8NExm7lD2xEqB%2Bf1tGXueQ7Do5nuSDqAEAR7CGfaWEgQcHM3kX23uKNyu55OOk4m78K8BWKF1DKu02QQz6fUzt0lwku2LNCwAa0UAJO9Dg8ELmmDkE20fbfxMQ2j%2Fn6o3sHxkrHl5Dvo2w6664y4kErtlWuEzcdg%2F3UhFycXu8z2SwA0SgDPJ2bBPSP4ei3KvjkjYvjNqskPXbRONOEsog7EkUTo0ocXSQVfPxjEo%2FKhc3PcZW%2FoCu9wE69XkOMCXLmeoY0cpv7Mv5G6hpCtHpwZ1GVvdpMOnZvsQGOqUBokYs6ekOFmEN62QHU5y%2FRKQ5ZyJs%2Fb2%2FmM21vDFb%2Fut2YHuGJ0hUCpOPljJe1lpMj4u2k9L5DE%2BSfRbpta6NQlRSk3M0oxwwoRkAbEXKzyk6SJm6G8Qk89WG9OPeIdsgydqp4RW5P%2FWjtWvyMsZ4x122cKTCcXL9l8UXR7Ne7dMd2L%2BxMJxdb2WPC%2B4oAQ0j64w9EgSBpOF3lSvqw%2FNKQlSHQWHr&X-Amz-Signature=a4488ae63e42eb2900a6c317441d62c3f6c20e12df43a608de0d1aa3598810d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R225EHXH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9cD3%2FsMfO0epklBahb6wZu%2BO9eIyPrdQOP8hHSDYcAIhAJRckmmHrTlh58KAOXp7n4wUiEsQ3kFhGJ1VLo%2BmL1PFKv8DCDQQABoMNjM3NDIzMTgzODA1IgzrvkKRcnYUyeX3tNIq3ANQkZxgNc%2F7Y6iKbfNMpeCpadz%2Bm3C5u8EnFiNBkwxyTJ7ItY5qi1tVteySqaOsr4xiUIAYU3VTnwILPqyJZgfXLpYOmWapAEhtb9jt%2B%2Bg4BUy9%2BfH2Gfv3xPzhS9c87rU7qeBsfEpFz01lZe7tphCwM675cuHY2nkdRvqBkHxZwD3XIp1Xq%2FlGEZ4gbgZoFVFYKkTaluFgV5ldIdNFMQ%2Fj8HPGn2LsGfwKE3D14lIg13gmJpKgMU%2BfMRHQ5xaGn2bB%2BasXxFysF1tb2UpHgZew6WT5XnizECGGHILdQeX89CSty1zhfLrwZi0JFdhtnt9osuwUBcb83kVX4gojISay8qVblRQHXO0VPAXcf2U%2FyL97WBwKTZPTtGg%2FtVAdd7hDO2n%2F1WFQY54WUMq2ys0aqbiEPE1DZRg69kR0G%2BIQhrmsVq4AP%2B%2FUovPDR8tH%2BbEhu1dgpV3bWP6OMCeKVR5rWkebvbtNMUxuf%2B4zjkoxfFqKBub3qb0yVdU5gjxNmD5YH7OcS%2Fv7%2FEjd%2BTIHDH5F3TzGPb1nv91z7JDFwya2DCxUoPEdekIjGcBUQ5cKQn5AaCDGoNYcjyigZNENpAFG4GqJfQRc0Scp3vSy8FdajUJo2IwzT6UoJYZHbzCG2b7EBjqkAc8w8jPxiwqv32BXY8rQEo7YTCKOsBCabl8PISNvu%2FZXAmBS35kKumM9ZWh4NPgI3Agzv8Rfi4cYgloM3Y7c2dTRJCrS90jEqzU%2BabEzj8TbFlpXD2I%2BFmCm5dh9PCMt%2FxxybVSiMxvDkb7xxTT4ncUvVB8iLUfbkUrTnhLwiq%2B1DUOtUeU3DUFoinRbqRvbOcKldtbERwMexvSJViX3yOw9qX82&X-Amz-Signature=2c297335dccb10bf000a07c4330220d6e00d08af215670bd82bce77bd382a1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJ4RFQ2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAgxTJVRbkHEU46hE5o92RvPTlUclTxsHIH3%2F02uKSAIgdJg9GRtexnTcjJb11%2F7Je9MErTtCXVKlQU31WkSZqVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM7%2BPhQqpo52SVVziyrcA9fyQea2oDI%2FWgwADhznSOYjb6GXdGsf2xVfi%2FUrYePwjKTN0Fm4x0Jal715xEZjTquHPFKAB3lFvvivAvnB5LDoUyijtka%2Bs3FNt9R7bmnaAxeNb16hx55I5Roi3knnthJD0SFJ5SkL5oSxDoTnJsI07D%2FFhyRDo3%2B5kSPkxd%2FcDPSfnoWwKEjeCvuK%2Blr7u8rr3zrSAX9H0sb%2FesIyRn%2BR8KXdX0L6AV69KCB9L1W3a3l%2FNNaYrRe2KVwg%2BJeUIBLcqdi7h9HO1R%2BGkIuPI0xnV80k23DVhwugVm%2FDcDgXSBSw64HugQRKbX3MV8%2FtqP3QqW3jGJZJ%2B%2FXzXLUsPGVqGlE5gu1v7To1OGYk0o4QfVV8z3vihbFEK7TuoBoGE%2FKgDMhmgVakbuIe3f%2BMvk%2FV7ckwILHpvCnlDdIqd%2Fm%2B%2BwIm4OZ3orngSo33rOIZepKUGy4HfayYGK8KsJBvo%2FKW5lC9xtyTnSR5%2BNUI%2FpWhxLJH1HMR3lV0h8IV4B0rEh4KUPb8Bf7aJpuQBqq4txXooZLabyjPl8vcPI3t6k7zcpW7xXNcCYrZGoO5gDlLoP8Ckqdx%2FPFBTuY%2FDxp8QgSmE59F4hEsflb%2FNd0oUsEDl2dDzPkzNodmmhNDMMzZvsQGOqUBKgqqBpsIB2yOa7srz%2BitWB9LI9X2GZl3AQOsPVUVn8VnoEx8szAqF15Ntvc6xiyqKoWfwCfIXdwux0ZPyc%2FMrGRiU1tXcOisidPcNK4RJUN4bB4%2Fxi3p0xhM3QYPrhixifI%2FvpAdKlbQaYD%2FKIjonvrOExFkKjHEfZjBFOSQuIf%2ByEOmT4v7g9EpBfVtB4KMBtAwyUbiuUlUkfAeA6ALoigLQSsN&X-Amz-Signature=62359e3e0a2246507bd4c7dfc5cba1f2565a1c62e4054ad77878639160ff5d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
