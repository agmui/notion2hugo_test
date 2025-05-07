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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YG3WGW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAw33tAdEMANS%2FggZXO7Rqn4atl3JG%2Bqh2sXfrbFFM9gIgOsm5TAnaZetU2JaRQ4Df2gIyIcYY0hI91e9hKWfLHlAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIIUsAFt6qGFpyTTNCrcA93WH%2FMoR6G9RYbcGQfkHhVxeuFeoKg1CIM1aeBF8pWd8VUo3hgNp21SIlaej1%2FnNiARGoGH1cJYCIhh2hnSrhc1MtsPouUAmJ%2FdiinD14EW3xFY8D2Rs8v%2FR%2F1F9mLWjL2tc9YVrpYsvCfDWcdrjCcvKCOhBIDMX3a6njt0oJQGtyOus8kAcQ8T62zF4UMd3P%2FsP%2B7zlpD9wK5re4YJlcyxab1rcXt%2FgRZsl0y3f00YJIybCCxC%2FEVvo4CWuprRIvL%2BpRw5YjnPVZKSDNbC%2B9qQHlT9%2FnpH5rbkyyVQa%2FdMsv2wP8zU%2FYyen1je%2BxEYqEDO3Vm2MJABMclHvcPY%2FKfgMls3A2UNasTGGYg4Kk7rHlhZrgqwi7L1t3GR0nbrh35n8Y2LzPsCr4sz1tFjcG%2Fhk%2Bwr5bUtdMnA1A%2BdcYDYVz%2BYL2yiapA8ghxoamTzyT21qPHX95JPC9zY8LgBgtirTtZ%2FvbWjSstxtHfIf%2BGgjJghjQT3b5Ywk%2Bh8oAc%2Bt4klO7UP8N1JbIrsT%2FeCP%2BouY0JFnUXPPzDDcf1tfEBoz12YhrXcd4ofht6qgC8t6wL5JV9tZrD0ZBwsCdgsxy8jUmN4L4dVHHUOseL2bMkWCEJqdVFKDMjF8YidMI6c78AGOqUBx05DihutbQL%2BY9wjS5bFiuNMvXo%2Fl33XFGvnoXqVzbtO%2BuCDQ1c0bn9Qj7E56Ino22eH6%2FfLd5DS2ICf9IcaEFP65bDdup9fHaW25X4kDIhVe%2FDZxvkvAGbm0XqXzyTvOOg0G347to9WeDdrluiI10QHefu%2BKa4wgh95EXEez1wqpW8tz87km0xlVwEa8y4Re%2FwIZQvZarT38wC%2FD3L7g%2FWssK8t&X-Amz-Signature=cda0fb02697333c44f5483863c46b8ca19069d8b7901fbf3a30950694170e36e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YG3WGW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAw33tAdEMANS%2FggZXO7Rqn4atl3JG%2Bqh2sXfrbFFM9gIgOsm5TAnaZetU2JaRQ4Df2gIyIcYY0hI91e9hKWfLHlAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIIUsAFt6qGFpyTTNCrcA93WH%2FMoR6G9RYbcGQfkHhVxeuFeoKg1CIM1aeBF8pWd8VUo3hgNp21SIlaej1%2FnNiARGoGH1cJYCIhh2hnSrhc1MtsPouUAmJ%2FdiinD14EW3xFY8D2Rs8v%2FR%2F1F9mLWjL2tc9YVrpYsvCfDWcdrjCcvKCOhBIDMX3a6njt0oJQGtyOus8kAcQ8T62zF4UMd3P%2FsP%2B7zlpD9wK5re4YJlcyxab1rcXt%2FgRZsl0y3f00YJIybCCxC%2FEVvo4CWuprRIvL%2BpRw5YjnPVZKSDNbC%2B9qQHlT9%2FnpH5rbkyyVQa%2FdMsv2wP8zU%2FYyen1je%2BxEYqEDO3Vm2MJABMclHvcPY%2FKfgMls3A2UNasTGGYg4Kk7rHlhZrgqwi7L1t3GR0nbrh35n8Y2LzPsCr4sz1tFjcG%2Fhk%2Bwr5bUtdMnA1A%2BdcYDYVz%2BYL2yiapA8ghxoamTzyT21qPHX95JPC9zY8LgBgtirTtZ%2FvbWjSstxtHfIf%2BGgjJghjQT3b5Ywk%2Bh8oAc%2Bt4klO7UP8N1JbIrsT%2FeCP%2BouY0JFnUXPPzDDcf1tfEBoz12YhrXcd4ofht6qgC8t6wL5JV9tZrD0ZBwsCdgsxy8jUmN4L4dVHHUOseL2bMkWCEJqdVFKDMjF8YidMI6c78AGOqUBx05DihutbQL%2BY9wjS5bFiuNMvXo%2Fl33XFGvnoXqVzbtO%2BuCDQ1c0bn9Qj7E56Ino22eH6%2FfLd5DS2ICf9IcaEFP65bDdup9fHaW25X4kDIhVe%2FDZxvkvAGbm0XqXzyTvOOg0G347to9WeDdrluiI10QHefu%2BKa4wgh95EXEez1wqpW8tz87km0xlVwEa8y4Re%2FwIZQvZarT38wC%2FD3L7g%2FWssK8t&X-Amz-Signature=aba9b413566c88596df9c8e9a900fbb80fb76392036a616c96a54b68aa76f08a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YG3WGW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAw33tAdEMANS%2FggZXO7Rqn4atl3JG%2Bqh2sXfrbFFM9gIgOsm5TAnaZetU2JaRQ4Df2gIyIcYY0hI91e9hKWfLHlAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIIUsAFt6qGFpyTTNCrcA93WH%2FMoR6G9RYbcGQfkHhVxeuFeoKg1CIM1aeBF8pWd8VUo3hgNp21SIlaej1%2FnNiARGoGH1cJYCIhh2hnSrhc1MtsPouUAmJ%2FdiinD14EW3xFY8D2Rs8v%2FR%2F1F9mLWjL2tc9YVrpYsvCfDWcdrjCcvKCOhBIDMX3a6njt0oJQGtyOus8kAcQ8T62zF4UMd3P%2FsP%2B7zlpD9wK5re4YJlcyxab1rcXt%2FgRZsl0y3f00YJIybCCxC%2FEVvo4CWuprRIvL%2BpRw5YjnPVZKSDNbC%2B9qQHlT9%2FnpH5rbkyyVQa%2FdMsv2wP8zU%2FYyen1je%2BxEYqEDO3Vm2MJABMclHvcPY%2FKfgMls3A2UNasTGGYg4Kk7rHlhZrgqwi7L1t3GR0nbrh35n8Y2LzPsCr4sz1tFjcG%2Fhk%2Bwr5bUtdMnA1A%2BdcYDYVz%2BYL2yiapA8ghxoamTzyT21qPHX95JPC9zY8LgBgtirTtZ%2FvbWjSstxtHfIf%2BGgjJghjQT3b5Ywk%2Bh8oAc%2Bt4klO7UP8N1JbIrsT%2FeCP%2BouY0JFnUXPPzDDcf1tfEBoz12YhrXcd4ofht6qgC8t6wL5JV9tZrD0ZBwsCdgsxy8jUmN4L4dVHHUOseL2bMkWCEJqdVFKDMjF8YidMI6c78AGOqUBx05DihutbQL%2BY9wjS5bFiuNMvXo%2Fl33XFGvnoXqVzbtO%2BuCDQ1c0bn9Qj7E56Ino22eH6%2FfLd5DS2ICf9IcaEFP65bDdup9fHaW25X4kDIhVe%2FDZxvkvAGbm0XqXzyTvOOg0G347to9WeDdrluiI10QHefu%2BKa4wgh95EXEez1wqpW8tz87km0xlVwEa8y4Re%2FwIZQvZarT38wC%2FD3L7g%2FWssK8t&X-Amz-Signature=3ffb5a112a196d4d6c89da6cf653fee60bc3dd8c1b49dc2925245cd773b5f44d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXM6ETVO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1wGgQ2o8sTMkhpJ5yF%2Fz3oIvbe7Y%2BzaSDwr4F5XyCMCIEvWwKpYIV3JDP%2B9NqMVD6Wgt35viUkZ4WMADY32mBsqKv8DCGYQABoMNjM3NDIzMTgzODA1IgzAaRDkIsNwfiMTL60q3ANgru%2FGCbR7%2FHLWH2KzAwDApbFD55z%2Bm1zgaD856rcx1a8T9zT%2FYx%2FDHByJOEn17bIL%2FhcM%2F2ru%2Bg3%2FreMhlQ6VkPMGWxWzVv18wME0ebyEbrVDCqd8%2FHDVU71QNDBpAL93Ctqk%2FHH1Ooy8JlGDkEiSZ0WKsZSLNJcdQha5xk6Rk3yrhKx82b4Ij4pIrda3vLlmRck4nW6sLbF0yuEktZ9NQc7nUG4hfnEL8am64W%2Bxlx3%2FWb1bLQZLAER84gZniKTbA3VUToKAXHXwxJNyEu%2BXRf55AMvuk3rnHiKqXKgfitxQzqwg%2Ff3df0Ygm70QV38XqWfXMmcHI2yPYfgwB6yuBI76KHXg2EIT%2BzD0qGMgSf77SiVpZmHV5DN9RkdkrEdusF2nVL0sQThcmgnQgg9DmqB%2BnAikktf6tGALvWPYRYSwzuFgejx0H4Gy3aUQQczNTV%2BETPDuQgnnpFTwiHS%2BbqBPbcRx7bJRiE7F6iMxscE0g7O%2FU7i4t5vQJVmMq6ZjpE91FhVLFmyqnopy12bZplDfk5LbWLkQUhqRD2zUeXrgD23Gb6J%2FfE2i6YMnbwWUVOU%2ByQuifDzlyl4wb6aDy8oP%2B4iAWbgqat5IuFxBF3Pz%2BJLN%2FXXFo%2FPdXjDLnO%2FABjqnAZRPcVyQTpyhva6bnl3t29PrOo6z7fuEXAwajxnwRtx3SYNTSH0R9Whpeu0ey14JILgGfrdktPhVeMjVnD%2BkOfaRXzLbkS7vuflXWPgzWrLBZDjTdP%2BUPd4SfzxE92Tof%2BTQO0wCL%2FuHF%2BGMfx3Oee8hsWA0I5hMrEErAEyxV361Z7E67i50wxfazfs490LklNNiXwKgOtiP2rKh%2BtBJTdI4vCNGSYMJ&X-Amz-Signature=dddf2ed6dafa7a793aaef5f9abff37d60d0175ad3e77a133d23bca009a7a04a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637JYXZGU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt8KD8ztLpA6hUDiXPlEbvsZCZrDGjvvAu7bSPIUsGBAiAnc%2FX%2BoklIP2m3HKhnhF9ZwQisThT6Uu8T1tMzUfz51Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM74wrx7DAItSf%2BTonKtwDFH%2ByHRLdeJBtftjw%2FyvbHkZ%2FjVBnhOv%2F1Zb%2BkrXkuYNzF9cSYSBqEHT4HVsLqZkEfYHv7mKpnwl5SL9znmVzzmR2PIp4CfBoI1OKl6gTyUu7ZH9i09D6wNzfqmi6TD0Dr7Mawkkdmawa%2BPq6wEnOauNb8fL1pSnc9m%2BWJgtAmx1DRlwXZVzeWbYxHG5KIqfrQqbHank3UHAm10hXPSegMh7AME8BXuRHgJR8hSUf4gf9DDB6t1%2BufBRMZR4jYEKK3MyGP02smyuYvxlNA0hj83VDO%2FHyItya73otCAgYzR6V4tBf5%2F74rS%2BoxzuC%2Bj59mx4uMzVHB0HxtdjaJSiZvi8A1R4lm57kCglt4Xg2n0%2FDCriakMKWtwxdFks7oA%2B3xNFEmK20vuxY1X9GkZYrsXQdmqGfZfri2ailCUSMcxPyzNfvIeBAhvC7i9BAgbi%2B3EKUnO9GVmD%2BgXKMMgOiITuywtavRdfL%2Bbjzl0TkixZs74ST%2B2G3dEn8E7AuihOGR9scRysQxNNn%2BtuWus%2FAxyoBgvVZOWsIgVuqD5G51kCYObYzJuhCq1zmK59i4%2B9aEbqZF48zx%2FNvvRJg6JDgmTyluT1NtdmHZvlCQ9wtDBly%2BY8%2BIdTGn25%2Fclcw6ZzvwAY6pgFoLS%2BDxRZjybzKFdnnDIGbK6erHSFMRyPEgcHKczmsxs86ibZ97Nu60fVYA%2Bp2RU3d46QUqdUH%2FFkjo6S1Z40t0Zm%2FCoLB18xN53A3yggQtPHKfbmtihgEULAFuhCfZV6WrCXDdfysZo%2F0ZX%2Bev5flreBM52RUeyoEDxQLynG%2FnwFXDcHbmv1WpfNp%2B6hxiPxvD8WCCPE1cb9pDhFmYwf2opLZS%2FK2&X-Amz-Signature=cc7187e5579b36c5b1a43c70e6aa55541017424a226411826f5a936df43eab82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YG3WGW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAw33tAdEMANS%2FggZXO7Rqn4atl3JG%2Bqh2sXfrbFFM9gIgOsm5TAnaZetU2JaRQ4Df2gIyIcYY0hI91e9hKWfLHlAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIIUsAFt6qGFpyTTNCrcA93WH%2FMoR6G9RYbcGQfkHhVxeuFeoKg1CIM1aeBF8pWd8VUo3hgNp21SIlaej1%2FnNiARGoGH1cJYCIhh2hnSrhc1MtsPouUAmJ%2FdiinD14EW3xFY8D2Rs8v%2FR%2F1F9mLWjL2tc9YVrpYsvCfDWcdrjCcvKCOhBIDMX3a6njt0oJQGtyOus8kAcQ8T62zF4UMd3P%2FsP%2B7zlpD9wK5re4YJlcyxab1rcXt%2FgRZsl0y3f00YJIybCCxC%2FEVvo4CWuprRIvL%2BpRw5YjnPVZKSDNbC%2B9qQHlT9%2FnpH5rbkyyVQa%2FdMsv2wP8zU%2FYyen1je%2BxEYqEDO3Vm2MJABMclHvcPY%2FKfgMls3A2UNasTGGYg4Kk7rHlhZrgqwi7L1t3GR0nbrh35n8Y2LzPsCr4sz1tFjcG%2Fhk%2Bwr5bUtdMnA1A%2BdcYDYVz%2BYL2yiapA8ghxoamTzyT21qPHX95JPC9zY8LgBgtirTtZ%2FvbWjSstxtHfIf%2BGgjJghjQT3b5Ywk%2Bh8oAc%2Bt4klO7UP8N1JbIrsT%2FeCP%2BouY0JFnUXPPzDDcf1tfEBoz12YhrXcd4ofht6qgC8t6wL5JV9tZrD0ZBwsCdgsxy8jUmN4L4dVHHUOseL2bMkWCEJqdVFKDMjF8YidMI6c78AGOqUBx05DihutbQL%2BY9wjS5bFiuNMvXo%2Fl33XFGvnoXqVzbtO%2BuCDQ1c0bn9Qj7E56Ino22eH6%2FfLd5DS2ICf9IcaEFP65bDdup9fHaW25X4kDIhVe%2FDZxvkvAGbm0XqXzyTvOOg0G347to9WeDdrluiI10QHefu%2BKa4wgh95EXEez1wqpW8tz87km0xlVwEa8y4Re%2FwIZQvZarT38wC%2FD3L7g%2FWssK8t&X-Amz-Signature=52033e9eff1eb63724d88abefe02ae8dd302097a6e9778e6e3d0e43e1d4ce297&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
