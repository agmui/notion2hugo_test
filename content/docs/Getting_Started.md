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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HI2JMNJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuGXMyrOyyuFGcxxKzbkzc591gEyaEm48tdHc363sTxgIgH9ijFv%2FD15OiuW67iQrimxi6gw8IgbLNzsd3SAvrlaMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBdsAaSrEBpmCtvDJircA%2FK4pgjZirSwWP7QhxnOj4h0puCOecS0iXuaHx7mSbh6wyhB1ftBbgDfDb%2BJCKTvEZ29SvBVpKcU5k9huLNpAmBMYbvpx%2BjNEEJY%2FK4vRXskjyhyx0Wt6lAqaZ9I6KIz4fjjHT0bAqA%2FOObb5DFrC%2FN6IrSWt67BDVuJ5ccUtI46AljYAQgT0Ss1IBnlWv1%2Beqf2hvlqloH2JHAMH19m0xG65H4d%2B6o4SlKUBmLti8XH9UCytyQFlNJqitOFmm9aZgl%2FcxhnBAXBQGnTAPJZwlIqv2q6XUisIH7E4d9%2F7ZpIyy9vuNoRf%2FYhE6jElzYy3JaTL5z%2FYQmaxnEaRWohLA6ZAgpBWvoQgtoOHOC3Itt6204mxgXDjfqcE7LTAnUE6TmNvgEZ1NV51nuhLKFwIDiyq%2FNcE78G9cOoBae%2BoE2lVfdgjMw3L%2BS%2BCSXB7P81QTM3kCpv7GNh28MEkiGEUMebZEjA%2BY2Xw4x6yIu8oMjxK82bRkZ3qs6YB1rYeE3BH3LZs75oK%2FnSCYZlg7q5uyWYjfTozd8SvyFYVc%2FlmU%2B4q%2BxUfoHsG3UEdiRssFM2qFOSKUi0aoUKiWL%2BrnQB%2B0oBiPq0s5EfCO87DBjesyX7VEWKXeSFT7a9KAbSMJWX4MMGOqUB9X6dm8kumysa188YY2mwD0t4WIjAXgwYi%2BBgCEYVGU7CAkqa3vEswwcy84RW2aIx3vLe%2FpKH4WoN6cd5VmYK7H2gsXxlLPr4q7SBfSsUiVzq1rJ46BjJuTBXd2RddsCJaWwYGvz%2BUCKQxuKsUNthk3ZKHaTIIEnPkOK2dBsiMHaZsP4iuJeKRJzyC8Z35ZKUU4feK%2FONoi0EkEHXZy4lKRYbO3Pe&X-Amz-Signature=f9185be484b26989af3ed77f5f5459e1c05696b63752aa184612154055d3a27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HI2JMNJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuGXMyrOyyuFGcxxKzbkzc591gEyaEm48tdHc363sTxgIgH9ijFv%2FD15OiuW67iQrimxi6gw8IgbLNzsd3SAvrlaMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBdsAaSrEBpmCtvDJircA%2FK4pgjZirSwWP7QhxnOj4h0puCOecS0iXuaHx7mSbh6wyhB1ftBbgDfDb%2BJCKTvEZ29SvBVpKcU5k9huLNpAmBMYbvpx%2BjNEEJY%2FK4vRXskjyhyx0Wt6lAqaZ9I6KIz4fjjHT0bAqA%2FOObb5DFrC%2FN6IrSWt67BDVuJ5ccUtI46AljYAQgT0Ss1IBnlWv1%2Beqf2hvlqloH2JHAMH19m0xG65H4d%2B6o4SlKUBmLti8XH9UCytyQFlNJqitOFmm9aZgl%2FcxhnBAXBQGnTAPJZwlIqv2q6XUisIH7E4d9%2F7ZpIyy9vuNoRf%2FYhE6jElzYy3JaTL5z%2FYQmaxnEaRWohLA6ZAgpBWvoQgtoOHOC3Itt6204mxgXDjfqcE7LTAnUE6TmNvgEZ1NV51nuhLKFwIDiyq%2FNcE78G9cOoBae%2BoE2lVfdgjMw3L%2BS%2BCSXB7P81QTM3kCpv7GNh28MEkiGEUMebZEjA%2BY2Xw4x6yIu8oMjxK82bRkZ3qs6YB1rYeE3BH3LZs75oK%2FnSCYZlg7q5uyWYjfTozd8SvyFYVc%2FlmU%2B4q%2BxUfoHsG3UEdiRssFM2qFOSKUi0aoUKiWL%2BrnQB%2B0oBiPq0s5EfCO87DBjesyX7VEWKXeSFT7a9KAbSMJWX4MMGOqUB9X6dm8kumysa188YY2mwD0t4WIjAXgwYi%2BBgCEYVGU7CAkqa3vEswwcy84RW2aIx3vLe%2FpKH4WoN6cd5VmYK7H2gsXxlLPr4q7SBfSsUiVzq1rJ46BjJuTBXd2RddsCJaWwYGvz%2BUCKQxuKsUNthk3ZKHaTIIEnPkOK2dBsiMHaZsP4iuJeKRJzyC8Z35ZKUU4feK%2FONoi0EkEHXZy4lKRYbO3Pe&X-Amz-Signature=8b92676978d6cea0fb099aa72b38f69658b7c30c1dbbe067328ed21d9f645793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HI2JMNJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuGXMyrOyyuFGcxxKzbkzc591gEyaEm48tdHc363sTxgIgH9ijFv%2FD15OiuW67iQrimxi6gw8IgbLNzsd3SAvrlaMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBdsAaSrEBpmCtvDJircA%2FK4pgjZirSwWP7QhxnOj4h0puCOecS0iXuaHx7mSbh6wyhB1ftBbgDfDb%2BJCKTvEZ29SvBVpKcU5k9huLNpAmBMYbvpx%2BjNEEJY%2FK4vRXskjyhyx0Wt6lAqaZ9I6KIz4fjjHT0bAqA%2FOObb5DFrC%2FN6IrSWt67BDVuJ5ccUtI46AljYAQgT0Ss1IBnlWv1%2Beqf2hvlqloH2JHAMH19m0xG65H4d%2B6o4SlKUBmLti8XH9UCytyQFlNJqitOFmm9aZgl%2FcxhnBAXBQGnTAPJZwlIqv2q6XUisIH7E4d9%2F7ZpIyy9vuNoRf%2FYhE6jElzYy3JaTL5z%2FYQmaxnEaRWohLA6ZAgpBWvoQgtoOHOC3Itt6204mxgXDjfqcE7LTAnUE6TmNvgEZ1NV51nuhLKFwIDiyq%2FNcE78G9cOoBae%2BoE2lVfdgjMw3L%2BS%2BCSXB7P81QTM3kCpv7GNh28MEkiGEUMebZEjA%2BY2Xw4x6yIu8oMjxK82bRkZ3qs6YB1rYeE3BH3LZs75oK%2FnSCYZlg7q5uyWYjfTozd8SvyFYVc%2FlmU%2B4q%2BxUfoHsG3UEdiRssFM2qFOSKUi0aoUKiWL%2BrnQB%2B0oBiPq0s5EfCO87DBjesyX7VEWKXeSFT7a9KAbSMJWX4MMGOqUB9X6dm8kumysa188YY2mwD0t4WIjAXgwYi%2BBgCEYVGU7CAkqa3vEswwcy84RW2aIx3vLe%2FpKH4WoN6cd5VmYK7H2gsXxlLPr4q7SBfSsUiVzq1rJ46BjJuTBXd2RddsCJaWwYGvz%2BUCKQxuKsUNthk3ZKHaTIIEnPkOK2dBsiMHaZsP4iuJeKRJzyC8Z35ZKUU4feK%2FONoi0EkEHXZy4lKRYbO3Pe&X-Amz-Signature=095610b88d3fb253cc615738ed9e3a8fbf17a8fd129ebe51858b3b245130d05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRK6NSN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCB%2BsZBt%2BP4RUo70lhjRfx4V41%2BE68hu54zZmSag1w5ZwIgQAPxBnVfzE%2F9YZjwGTXaDkxQJtIIN73i%2Fz11p1FGE1Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDA49z7TiHir8VTPoZCrcA5BkowhowK1zgNXA1O397%2BPhLxBgsD8j2D%2BN46mbph93h4YUJNZXqOiUu4nH2TLY%2F8KpCp%2FYtHZIbpk2nIyBurGSthf4RUs2kRRm0cx5tHOWckfHx17gLW%2Fr8QIZeWMBtoB9qBZDVjziwP9fdMCILi0Fu9pGXhzFM6nyWXxb8Yuxqo94T7%2BlVd9INNZUlWohCziuvajZD8nNWobNu%2FPqL%2BIcz2sZt8NU2hRGTVUimRS9C5zj%2BF%2FI%2FBHfNdLJ0lVydEuBavTM%2BF2KC1fqAbrFHJjUiYasjsekiCeteKuwtE6T1kBMYqlL9FVHnacPl%2BZHCV8uYW%2BIoRGzRbQwQ%2Fd9jEpWdL8srB8Yx8hYcXRmkUjXl6sTep%2B1trQWj00ApArd7HxbJSoUVMvMNpgUH95N9Nf1FQWPoxaU29sNrHiYC4JpEuvnHRbsy6KBIzd9%2BkMGRNPs2GisJ1s453dMfmKrNdW2QsGySDxcvdi%2BwkaZVbcuXL37moVwxwODKTLQVaXannSnRsR8Jy8zzaFy2ey086tYJoed2tltDfv4x31owqR2qm0NUIHIy%2FNf%2FSUWdAUXw67bTgOkOZEgXq7OiEe298yjLGb2obDaonvuIMRNFOK4O3%2BsUsR9otV2vcwCMJuX4MMGOqUBKEIwn0wa5LKmjg4%2F8L5c7pLy9h3%2BJ63c3ml89HHVfE64l0hBD0bERNYv9iihYDJ6SIZo%2F8mcyW%2FU1h4bRmMKJuteOcDiCV3Sn2fV4H9N7KYXTX3%2FP6gcHQZXMmXniPKvt%2FZWCMJ5mfyCgxBR4TRk%2FpEPhCKW9sho2XAD%2BVUav9BwyrE3hWlRAHFjTD2Mq48C1HeIyPDqcRU7AUvlYtN2joZm0TH0&X-Amz-Signature=06bcb8fa318f48725238ab7871e67e5e0552283791b09da0bddda50584d96023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHR54PXD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC%2F2mrbp9GrRRWWOcf%2B%2BEnOMKOtGnRw115CiR1wEBNWqQIgIKK2AgA337xtILTdm%2BVeZgZ9wEYvNM41XcRhS53fJikq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIF5hS0moUI5HmpgKSrcA0QOGb7uHIJ0IVeRiBoxcUoYs6VbxOy%2F%2FkN9l6RAJ%2B5AGjt9I5MSeptmfikLd7iLI%2F%2B6NFUBg996dcTfTTijHLf74m4w6s%2BfsRPAX1sJ1%2B0%2FwaabGKfIz%2FsNVxsib1Rp6YK7bDsxpasmi9yZ%2F1cUs6dNcKODnjy6UO6pCxnIL6JpS2pkWXGMMOPJyzdlz6d13QioJ143iiWYxSakPvvCLXFIYbsb46wtwkj9ClPC10RLRJIGM83rAhUbWs3a0FPtRLMVm7Q5LFcxA7kpiR4z4CtrkFudfNCvAwGdcYCWQWpTpYVYksgGp0Gu11GvYi0%2BYMXMEHWfw6Q%2FEpBJM443xaz7u8tZFIRVcNkHHapvWw6SMLNkCH6bzeS62RAUWNdUIRTuCcblMtrcHN3yq7VEKoUpXVu3DuLp7Vj8zHRWeEYepigWkjeWdp0uFjaYXADyS6H30tfEnvaDAqqyVhXqADK11bY%2FGz36s%2FMDYggzsxz5pp2%2BBn19iOEebaClsyY4xUi2Iik7F1%2BMK6w0oiJFQsp2zHIYPt3puB7BwgEu1QHILJPLzZDbGLw%2B6F4Im0qtOw7CWdsQcDrP%2FrvG0vRhZBSH3Ybi8lAKP7RFqQKkNf1AaQCeKDhOd4aB4b89MIeX4MMGOqUBd9FW4Wx1SAOqF15rE0QOyXqRMP03g5orPDJ9RgQO7zz%2B0J6kp53YLD7j78DeC2jTZNa1MFEzxfkTTOCQSk0BzRdvb09aLWKxRNK6%2BqO9MdocfJO%2F8%2FnmfpdX%2BA2g8y64DoWIW060DhDvMvBUUbSV%2BuruNfHMza%2FMwcwPwWBd6YYF6tpGaC6u6haNaiDAYNcvL%2BfdzipZFUvV5DLqs27B%2BpMzUBn1&X-Amz-Signature=98cd5f33e305e825752488f946b00a6c9a91193f518cbdeac1ae5fdf0ab14e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HI2JMNJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuGXMyrOyyuFGcxxKzbkzc591gEyaEm48tdHc363sTxgIgH9ijFv%2FD15OiuW67iQrimxi6gw8IgbLNzsd3SAvrlaMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBdsAaSrEBpmCtvDJircA%2FK4pgjZirSwWP7QhxnOj4h0puCOecS0iXuaHx7mSbh6wyhB1ftBbgDfDb%2BJCKTvEZ29SvBVpKcU5k9huLNpAmBMYbvpx%2BjNEEJY%2FK4vRXskjyhyx0Wt6lAqaZ9I6KIz4fjjHT0bAqA%2FOObb5DFrC%2FN6IrSWt67BDVuJ5ccUtI46AljYAQgT0Ss1IBnlWv1%2Beqf2hvlqloH2JHAMH19m0xG65H4d%2B6o4SlKUBmLti8XH9UCytyQFlNJqitOFmm9aZgl%2FcxhnBAXBQGnTAPJZwlIqv2q6XUisIH7E4d9%2F7ZpIyy9vuNoRf%2FYhE6jElzYy3JaTL5z%2FYQmaxnEaRWohLA6ZAgpBWvoQgtoOHOC3Itt6204mxgXDjfqcE7LTAnUE6TmNvgEZ1NV51nuhLKFwIDiyq%2FNcE78G9cOoBae%2BoE2lVfdgjMw3L%2BS%2BCSXB7P81QTM3kCpv7GNh28MEkiGEUMebZEjA%2BY2Xw4x6yIu8oMjxK82bRkZ3qs6YB1rYeE3BH3LZs75oK%2FnSCYZlg7q5uyWYjfTozd8SvyFYVc%2FlmU%2B4q%2BxUfoHsG3UEdiRssFM2qFOSKUi0aoUKiWL%2BrnQB%2B0oBiPq0s5EfCO87DBjesyX7VEWKXeSFT7a9KAbSMJWX4MMGOqUB9X6dm8kumysa188YY2mwD0t4WIjAXgwYi%2BBgCEYVGU7CAkqa3vEswwcy84RW2aIx3vLe%2FpKH4WoN6cd5VmYK7H2gsXxlLPr4q7SBfSsUiVzq1rJ46BjJuTBXd2RddsCJaWwYGvz%2BUCKQxuKsUNthk3ZKHaTIIEnPkOK2dBsiMHaZsP4iuJeKRJzyC8Z35ZKUU4feK%2FONoi0EkEHXZy4lKRYbO3Pe&X-Amz-Signature=e1b04a24734d23485649c869f3dd46504d4d5faebafbd0d4b2dd4767799a0d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
