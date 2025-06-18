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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SQHXM2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbs811pn9H4uJ3P9gXbdL4nBsKw8RA81bMlSLLrtlf7AiEAzLBhEuNB91rWjhU9RMlTfbs9eQMbflPpJva6A9b5ARYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxeuAeT2i5GIxlbRCrcA%2BI9%2FbvMHsjNe0GZvXyjbbWQYH3bH8WbovRDdz47pg83rQK510WpAFef0NZVlBMU%2B1ooSRKlTwreeHbw9XYUxUtb64EkWlx2XEd0Wf5IKOPeFXiRfBqZmvwH60OBskDw0szI0tPDzXvXy4ov8nCeuAv9byY4qEEEq%2B9oaQCC1%2F0clKMnjxgK2yXxImhFwqDB9f%2F4i8lOAlMQrQSDKP3GthLYbQDWiBVX3Bj4lK3qHA77EUb2jK%2F94W6ZmO3A1G7h8sxBVrj%2FY2P49nmtzO0%2BEw%2FI97gCYtnfpCW28%2F0H9%2FfqJlccwO%2ByADN3CT0CuGDLJba4da2IhxnmcHKnQIDj12q5wO75hWMr0VAGyF6seXHFu89UG85MrsrX6ptUOGcJHHeSvpBVLI2UqrXbnQUkbJ0YqxleNqYLqHEEfBV%2Btp1wF3p2K43Yd1FoMLM42b1FsVJfFfBy%2FUm%2BLjxRdsPacxKONTAjBOpn%2BLiJqbugNfKCthgdK5biMszGiggrQ1Y1vFZFE6%2FClGXP0vSvV30HXvNzmHwTFRZ7C7Z3fxXbTMtLSpB3v6MPggTdegtQsycSEMSRojoI7huysJM5Ha28eevfB6wv7SoODyMX28UH%2BeLPJnKJuhvsbWSEBM8DMLagyMIGOqUBfdbIMdjY9R%2FlhSUAoYq8TdIgiND9p7A15RWEGoEWTRQaf%2F6HMlbxbVuPhmn%2F3Z4IVfrm1GeqMNBP2SAUAO6AD0GWUAMz8vHgUyboCy7Jqf3wloA24nKiopqN7R5OSUvkUNEaTbPdAZi0100dSl%2BQPEyfGSINBUlywat5Kx5DxMEob1WgL4VRf%2FreQDp9ibFgsepnlGoc%2BeaNXw45cxYRq6oplr%2B3&X-Amz-Signature=14594891d46d6e0352f73a9f4434a894d97e46e7240efa601db2786deb80c108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SQHXM2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbs811pn9H4uJ3P9gXbdL4nBsKw8RA81bMlSLLrtlf7AiEAzLBhEuNB91rWjhU9RMlTfbs9eQMbflPpJva6A9b5ARYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxeuAeT2i5GIxlbRCrcA%2BI9%2FbvMHsjNe0GZvXyjbbWQYH3bH8WbovRDdz47pg83rQK510WpAFef0NZVlBMU%2B1ooSRKlTwreeHbw9XYUxUtb64EkWlx2XEd0Wf5IKOPeFXiRfBqZmvwH60OBskDw0szI0tPDzXvXy4ov8nCeuAv9byY4qEEEq%2B9oaQCC1%2F0clKMnjxgK2yXxImhFwqDB9f%2F4i8lOAlMQrQSDKP3GthLYbQDWiBVX3Bj4lK3qHA77EUb2jK%2F94W6ZmO3A1G7h8sxBVrj%2FY2P49nmtzO0%2BEw%2FI97gCYtnfpCW28%2F0H9%2FfqJlccwO%2ByADN3CT0CuGDLJba4da2IhxnmcHKnQIDj12q5wO75hWMr0VAGyF6seXHFu89UG85MrsrX6ptUOGcJHHeSvpBVLI2UqrXbnQUkbJ0YqxleNqYLqHEEfBV%2Btp1wF3p2K43Yd1FoMLM42b1FsVJfFfBy%2FUm%2BLjxRdsPacxKONTAjBOpn%2BLiJqbugNfKCthgdK5biMszGiggrQ1Y1vFZFE6%2FClGXP0vSvV30HXvNzmHwTFRZ7C7Z3fxXbTMtLSpB3v6MPggTdegtQsycSEMSRojoI7huysJM5Ha28eevfB6wv7SoODyMX28UH%2BeLPJnKJuhvsbWSEBM8DMLagyMIGOqUBfdbIMdjY9R%2FlhSUAoYq8TdIgiND9p7A15RWEGoEWTRQaf%2F6HMlbxbVuPhmn%2F3Z4IVfrm1GeqMNBP2SAUAO6AD0GWUAMz8vHgUyboCy7Jqf3wloA24nKiopqN7R5OSUvkUNEaTbPdAZi0100dSl%2BQPEyfGSINBUlywat5Kx5DxMEob1WgL4VRf%2FreQDp9ibFgsepnlGoc%2BeaNXw45cxYRq6oplr%2B3&X-Amz-Signature=63a58ce60866d04b773cb0b7c25cb7421868dafd80f8926be5b60a20f2a4d0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SQHXM2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbs811pn9H4uJ3P9gXbdL4nBsKw8RA81bMlSLLrtlf7AiEAzLBhEuNB91rWjhU9RMlTfbs9eQMbflPpJva6A9b5ARYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxeuAeT2i5GIxlbRCrcA%2BI9%2FbvMHsjNe0GZvXyjbbWQYH3bH8WbovRDdz47pg83rQK510WpAFef0NZVlBMU%2B1ooSRKlTwreeHbw9XYUxUtb64EkWlx2XEd0Wf5IKOPeFXiRfBqZmvwH60OBskDw0szI0tPDzXvXy4ov8nCeuAv9byY4qEEEq%2B9oaQCC1%2F0clKMnjxgK2yXxImhFwqDB9f%2F4i8lOAlMQrQSDKP3GthLYbQDWiBVX3Bj4lK3qHA77EUb2jK%2F94W6ZmO3A1G7h8sxBVrj%2FY2P49nmtzO0%2BEw%2FI97gCYtnfpCW28%2F0H9%2FfqJlccwO%2ByADN3CT0CuGDLJba4da2IhxnmcHKnQIDj12q5wO75hWMr0VAGyF6seXHFu89UG85MrsrX6ptUOGcJHHeSvpBVLI2UqrXbnQUkbJ0YqxleNqYLqHEEfBV%2Btp1wF3p2K43Yd1FoMLM42b1FsVJfFfBy%2FUm%2BLjxRdsPacxKONTAjBOpn%2BLiJqbugNfKCthgdK5biMszGiggrQ1Y1vFZFE6%2FClGXP0vSvV30HXvNzmHwTFRZ7C7Z3fxXbTMtLSpB3v6MPggTdegtQsycSEMSRojoI7huysJM5Ha28eevfB6wv7SoODyMX28UH%2BeLPJnKJuhvsbWSEBM8DMLagyMIGOqUBfdbIMdjY9R%2FlhSUAoYq8TdIgiND9p7A15RWEGoEWTRQaf%2F6HMlbxbVuPhmn%2F3Z4IVfrm1GeqMNBP2SAUAO6AD0GWUAMz8vHgUyboCy7Jqf3wloA24nKiopqN7R5OSUvkUNEaTbPdAZi0100dSl%2BQPEyfGSINBUlywat5Kx5DxMEob1WgL4VRf%2FreQDp9ibFgsepnlGoc%2BeaNXw45cxYRq6oplr%2B3&X-Amz-Signature=f1085e91d891e1d132115075a1a19d4d4ac3abbd906ecefdecfc328c6da71f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SY3QD4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgIwRVwJyONIITa3gKADC%2FxRniHkvpoEzcWUheZaBKEAiB0V7TtQNXFHGaCeGrfVlgeNuhvCW0MelS36v3PiFOQpSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bbq%2F2CW1ayrcjuvgKtwDrqKc07%2Fy7NRKuMWp3dl5ToVkWc7cHNLpD9YsAQ3OUoMvGinyaVP8JdOK6a5UZOy3nhDtG60XQTJK0H%2Fudi1oar6YNRUKlJCamhZlBpjFF8636i9rLKnfQ3YKQdNu%2FJR9kKnHK6NdiRKFtuF8KxS5i6GhNHAah0GjpXhf%2BWhO06%2FHVIo19Ohbo2oUlcAMkIp7FzuwQAc6U1eIQALL8%2BAjyAOIF%2BINyWjdVZmDu9Dx1cAIZkrHa486RGfa75x%2FiIbEJ4iLy9TMILRFiEs4ixovb2KMvKEPK6lg8vnuGbzadaue37KT%2BW%2FhkHveyGbnreAIfjVF%2BI%2FaJPrvx6BJzNk0jesFtQMR1djozgG7Ly88kE1rnSNip3br%2BVuxoclB2NJKZeBpQaOys2PtdcrcB65jR3jvepwFP1Fpn1QU%2FVgwZJOJUWCJGCrQhOX2hVI75OgPOuQ4J84XkjwtsS77FzF%2BehGe9m1cn6ziQWXOYJ7MeJI6t2Bx5jD%2FLKCDT69icNhgc0bsGuuJTSGaAeWrneyzIYIXk9dt7GKABdNY46AZpoaeqIfsnVkuLTXL2ZBYNmv0WH0iOmro9gQ2eBG%2BMbRpd1KTEDOruIRiDeCYzQcK%2BYLwYbc0k3FL%2FW176PowpqHIwgY6pgF20v3Cwd3YXlxBDuJEc%2Br%2FSiZEog%2BwCrve%2F71UTtmzYIKOCuo2Mt4pgdL53sqnRqougukR5acYsjd9OATCV5%2BY0xDtVINR5VIf8Ag1hLQSoLOdKUTuxHJPsmW9orHB3NW5Wm4W5uk17nxvFmssXgepIkc%2FEcpKxshIbY05CuExy4%2B9tSOxxSfQGMdpPLpenQCmYqeihnuJtNbx%2FbFgcTxtL%2BJ%2BGN3T&X-Amz-Signature=fea1f2efbe8e631589b2b70cc25397d55690b1df31a53ed7bf43238fac8df340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DXE6JVT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7tBxgaVg5FipY0MRLSuXX8aKe2rkVAVQUwsFD%2B4d2AwIgRc%2BiuWuR1A1JECuOjHi1POXqLqTFlTvsjvvcFdYn8I4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSMcNfT4UH0VKQIiircAwB%2F0N%2F3NL2sGYlCCPkvUHGPG2bTXXYT2GWLOh%2B7pgnGw98xvqochLwfEJzAlvn8I3XtihkC0Rcx3hdOHLWeXrV15f7nT%2BV9L5Go3XEA%2FpcPPb6XsARCPFFsXHTKRMHr3v44EK4qh6x%2FYirG3CIxSMfGWF18hEiPZeoWfQe3bHV8xUc5nzRFAnh%2FesNb9ivJs%2Bk9qCd1zCHZ4gOqzLmLjc5hUNyLQNLufVMefeqwlOPkOLP4xn%2FErmR2%2BRP76Zf0UXDK342qTt8Jj8ecncj13JQaiKdLOOggl1JXTUq7sxsNrvD%2B%2BbUTdRFE6TTAodyNBGYiV5Wy%2BrJgrD%2BWoRlZoejhHekjWFiHQm8dIQ0z4vY%2BQoaGvaSQvA0TfEccGyC8ORnVljvVUyZBtrEUdJ3E9TYhtOiwRpfQB6OEeeD5C2Cv5Edk%2Fr1O4dYx%2B7ldlVHAvCGAtg3DfFF%2F5OfAYiu%2B%2BKnWS%2BSgmtngEyU%2ByOvjsLXFAH3FbO4OfU7yPAa68MsXN4RnDMsRhkVuJeCFB1SpTT9HIsIagjHJVokjMSuKurXjseGN%2F1%2B4lgTCRW4L0kWso1eQvYifxgPkSXOigPt7k8YuPlVryHa7u1A8oehUTYFV3k8A%2BPf4EZfv9UPXMMKhyMIGOqUBA%2Fxr%2B%2BDoyPjoGV%2F4lCn0bHghCjbIJZ3wpUS3taC09gmmwRNxKn9fTeeu7%2FhKbWStBhgsKrDRfxDUyaIH2TAzwpuSagX1WLX6exT7RDmBdBsMp3Kc1iq2OFrxtTwGQHdr5MVefLrLL6Gm4qaZpyai%2BfLxVa3h7mSxfWQlpOlV8VYzOzL09AcrRmHbQcc27%2B8DgLNORNs9FCnqTc49KtKEHE3GTpbm&X-Amz-Signature=e6d484ccc76bcb3417917732ec0756349e71f1e5eb47050fb3bce634508b5f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7SQHXM2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbs811pn9H4uJ3P9gXbdL4nBsKw8RA81bMlSLLrtlf7AiEAzLBhEuNB91rWjhU9RMlTfbs9eQMbflPpJva6A9b5ARYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxeuAeT2i5GIxlbRCrcA%2BI9%2FbvMHsjNe0GZvXyjbbWQYH3bH8WbovRDdz47pg83rQK510WpAFef0NZVlBMU%2B1ooSRKlTwreeHbw9XYUxUtb64EkWlx2XEd0Wf5IKOPeFXiRfBqZmvwH60OBskDw0szI0tPDzXvXy4ov8nCeuAv9byY4qEEEq%2B9oaQCC1%2F0clKMnjxgK2yXxImhFwqDB9f%2F4i8lOAlMQrQSDKP3GthLYbQDWiBVX3Bj4lK3qHA77EUb2jK%2F94W6ZmO3A1G7h8sxBVrj%2FY2P49nmtzO0%2BEw%2FI97gCYtnfpCW28%2F0H9%2FfqJlccwO%2ByADN3CT0CuGDLJba4da2IhxnmcHKnQIDj12q5wO75hWMr0VAGyF6seXHFu89UG85MrsrX6ptUOGcJHHeSvpBVLI2UqrXbnQUkbJ0YqxleNqYLqHEEfBV%2Btp1wF3p2K43Yd1FoMLM42b1FsVJfFfBy%2FUm%2BLjxRdsPacxKONTAjBOpn%2BLiJqbugNfKCthgdK5biMszGiggrQ1Y1vFZFE6%2FClGXP0vSvV30HXvNzmHwTFRZ7C7Z3fxXbTMtLSpB3v6MPggTdegtQsycSEMSRojoI7huysJM5Ha28eevfB6wv7SoODyMX28UH%2BeLPJnKJuhvsbWSEBM8DMLagyMIGOqUBfdbIMdjY9R%2FlhSUAoYq8TdIgiND9p7A15RWEGoEWTRQaf%2F6HMlbxbVuPhmn%2F3Z4IVfrm1GeqMNBP2SAUAO6AD0GWUAMz8vHgUyboCy7Jqf3wloA24nKiopqN7R5OSUvkUNEaTbPdAZi0100dSl%2BQPEyfGSINBUlywat5Kx5DxMEob1WgL4VRf%2FreQDp9ibFgsepnlGoc%2BeaNXw45cxYRq6oplr%2B3&X-Amz-Signature=c2c2d5472a8b13b04d58decbf2105066943a2f26a409d1dbbd45e7932d1416d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
