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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGLXV2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIH6amsprVwRA8zUtt45%2FYG5ma3eQa%2F2VNjhZ%2F43KSEUtAiEA%2BcIrOoS5VUmDrBA32vMQPY2WzXo2vwEw18mbPhYKqnsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP3CIScFa2qD4LYV6CrcA9AtmYb3ydICqG4jbJY%2F5CXZJppiGYxD7vlIGCjoV9XYC4cCF8f%2BDwgt3tk2W9UnexN%2FlLeL%2F%2FRDTXHxdDKyh0jn6%2BVJNoiYvYnwo8qPoAtjSphX55KI2WeGqoaMvuMeFKnZl%2BcPih8NI8Dqtwt9zB9srqpcS6Le2ZXPVM5g6A%2BL8IRHly5VTR7kATy66Oro3PyojfaNenV1Ln9pbGjiSfn7nsf6DnDPd8Ymc6c8fKOVtnWltGWt3aNYl3IW4LnVTY1retQyPZr4N%2BhRGlqdJySV1FysbFWk72Ml5oqs6AvThAuD571ho8HHOiuNSEjH1L1WLb5m8QBhZAkMy5Rykl8PCwt%2FZngZpsbfz8%2F%2FU%2FRoX3jPo5DemEiqzT7NepCKYiLSKRCW6p3ItN0oTvNrwRKWh9Tj8AhzMN%2FKDrkTLaFHmypbNaR8%2FqMJ00Ir3ilJNvj9YSu426wvKZiS5RTQoV%2FOzz23Hc9YyNYOwOtMnlGXtCGQ%2FGtnc4c5tKzZRShxJgJStOP8%2BynlQ1zBKQMdWunV7BQrOAnM93ADEwmpW1RibVeTPmS4aiFNWCZzSwf7AmTMUZ%2Byn2H8CtA%2FJVrHpAI1Ej0c6QFO%2BEblNvjY0GwkqjKN209VkSRF52RNMPOg98IGOqUB2tA%2FAqfKOUUaDjxm1vOFfvew9PwZ0i%2BV83A7iarvSRDPgtNxxzJ%2Fa40n9%2B1Lcs0P9BBm2uZS7J%2B8ChXJJBOsaIBmt0UI3zbdqA%2FnZJ%2FmweVWzx1Q%2FKc32b17vMNJtA%2F4I1PqeYh%2BbpBOHQOhfiXrLhXtDD95SHDfNpivNW5Mq2caSQWE%2B7UgCvAzKlkEcx7UBi2V3lsJTEI0beZqd5U2XCHwxRWN&X-Amz-Signature=cb9a11fb9b518f0284d69fdd07cacbfe5dee0645619de29a7b3530cf25e80145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGLXV2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIH6amsprVwRA8zUtt45%2FYG5ma3eQa%2F2VNjhZ%2F43KSEUtAiEA%2BcIrOoS5VUmDrBA32vMQPY2WzXo2vwEw18mbPhYKqnsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP3CIScFa2qD4LYV6CrcA9AtmYb3ydICqG4jbJY%2F5CXZJppiGYxD7vlIGCjoV9XYC4cCF8f%2BDwgt3tk2W9UnexN%2FlLeL%2F%2FRDTXHxdDKyh0jn6%2BVJNoiYvYnwo8qPoAtjSphX55KI2WeGqoaMvuMeFKnZl%2BcPih8NI8Dqtwt9zB9srqpcS6Le2ZXPVM5g6A%2BL8IRHly5VTR7kATy66Oro3PyojfaNenV1Ln9pbGjiSfn7nsf6DnDPd8Ymc6c8fKOVtnWltGWt3aNYl3IW4LnVTY1retQyPZr4N%2BhRGlqdJySV1FysbFWk72Ml5oqs6AvThAuD571ho8HHOiuNSEjH1L1WLb5m8QBhZAkMy5Rykl8PCwt%2FZngZpsbfz8%2F%2FU%2FRoX3jPo5DemEiqzT7NepCKYiLSKRCW6p3ItN0oTvNrwRKWh9Tj8AhzMN%2FKDrkTLaFHmypbNaR8%2FqMJ00Ir3ilJNvj9YSu426wvKZiS5RTQoV%2FOzz23Hc9YyNYOwOtMnlGXtCGQ%2FGtnc4c5tKzZRShxJgJStOP8%2BynlQ1zBKQMdWunV7BQrOAnM93ADEwmpW1RibVeTPmS4aiFNWCZzSwf7AmTMUZ%2Byn2H8CtA%2FJVrHpAI1Ej0c6QFO%2BEblNvjY0GwkqjKN209VkSRF52RNMPOg98IGOqUB2tA%2FAqfKOUUaDjxm1vOFfvew9PwZ0i%2BV83A7iarvSRDPgtNxxzJ%2Fa40n9%2B1Lcs0P9BBm2uZS7J%2B8ChXJJBOsaIBmt0UI3zbdqA%2FnZJ%2FmweVWzx1Q%2FKc32b17vMNJtA%2F4I1PqeYh%2BbpBOHQOhfiXrLhXtDD95SHDfNpivNW5Mq2caSQWE%2B7UgCvAzKlkEcx7UBi2V3lsJTEI0beZqd5U2XCHwxRWN&X-Amz-Signature=6742a4453923b9635d78688ed44649d63e6d0f5a4141656d3f65887d64fac918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGLXV2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIH6amsprVwRA8zUtt45%2FYG5ma3eQa%2F2VNjhZ%2F43KSEUtAiEA%2BcIrOoS5VUmDrBA32vMQPY2WzXo2vwEw18mbPhYKqnsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP3CIScFa2qD4LYV6CrcA9AtmYb3ydICqG4jbJY%2F5CXZJppiGYxD7vlIGCjoV9XYC4cCF8f%2BDwgt3tk2W9UnexN%2FlLeL%2F%2FRDTXHxdDKyh0jn6%2BVJNoiYvYnwo8qPoAtjSphX55KI2WeGqoaMvuMeFKnZl%2BcPih8NI8Dqtwt9zB9srqpcS6Le2ZXPVM5g6A%2BL8IRHly5VTR7kATy66Oro3PyojfaNenV1Ln9pbGjiSfn7nsf6DnDPd8Ymc6c8fKOVtnWltGWt3aNYl3IW4LnVTY1retQyPZr4N%2BhRGlqdJySV1FysbFWk72Ml5oqs6AvThAuD571ho8HHOiuNSEjH1L1WLb5m8QBhZAkMy5Rykl8PCwt%2FZngZpsbfz8%2F%2FU%2FRoX3jPo5DemEiqzT7NepCKYiLSKRCW6p3ItN0oTvNrwRKWh9Tj8AhzMN%2FKDrkTLaFHmypbNaR8%2FqMJ00Ir3ilJNvj9YSu426wvKZiS5RTQoV%2FOzz23Hc9YyNYOwOtMnlGXtCGQ%2FGtnc4c5tKzZRShxJgJStOP8%2BynlQ1zBKQMdWunV7BQrOAnM93ADEwmpW1RibVeTPmS4aiFNWCZzSwf7AmTMUZ%2Byn2H8CtA%2FJVrHpAI1Ej0c6QFO%2BEblNvjY0GwkqjKN209VkSRF52RNMPOg98IGOqUB2tA%2FAqfKOUUaDjxm1vOFfvew9PwZ0i%2BV83A7iarvSRDPgtNxxzJ%2Fa40n9%2B1Lcs0P9BBm2uZS7J%2B8ChXJJBOsaIBmt0UI3zbdqA%2FnZJ%2FmweVWzx1Q%2FKc32b17vMNJtA%2F4I1PqeYh%2BbpBOHQOhfiXrLhXtDD95SHDfNpivNW5Mq2caSQWE%2B7UgCvAzKlkEcx7UBi2V3lsJTEI0beZqd5U2XCHwxRWN&X-Amz-Signature=0d680bb634e9ed11949d0529ca5951a32bcb888af5b04f417179865ee456e4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFC4RQT%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDsMlvgaCsbkaXjthsChhbQ3mf7gJk%2BCRp0YAvzVaGyUgIgSU8rz7yJCpFPiolPP9SfAE92%2FkqpDvtST7y%2Fh5WG8Kwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMENW44q3ThfVLvzpyrcA0onCC3LshRyLnrCHbpRDs89Jn4tfRAIjudpP%2BVVu3rpRs7p8yoR3l1GcI0UY8X0ZQI%2B6py6DHut0g9GGtoXh8XgjvbAn6qn7gPhvOy2NAWEswaLEHTpB0lkjNVSmEMS9tTTAspa6M14xckMnmbSVvIyrj7vGpkwaa8x4UEdoe%2FSX4LSMFa3tnAS7SshmoMcSThVZQOfPXA4jIuxBBJD9slKTQvWIRtGMUAiiAVh3uFaOXp%2BfvAW6286N1COhl1Bzdmj0qybbx4LA0ayXeaRLEaE9SnjoJMAlSzLMgtzwwmb9A41BQrL3qcwS7Vx1b%2FXupn6cCvVFe9QNYs6W%2Fd11EcmjgGDYygaPHbSenOLkvPhcBo85FQM8byCG%2BzrvcA9p3hDVVXWHQJ%2Fghogyd3MErucf8lM3slV2yxL1xFeOn6vPvTj4Kl4VdIUcpecsvpTbAjbxWlnF1g0IDa9QClMsrY79yQuwQbcR5MgIzXjsOO8hx0T9wqtzi5V9p7eM0WAYmXECp7nu9AQ3DFqGsIYjoDEzX76kFSrI%2FAfB044iJOV4%2BijtW1LHfAn7Odv42sVfqfI6ZKHdOUaYZha%2BJ9t5ka6NMi%2Fww8mLSX9zR1T5QdyGmR5MNBPcah%2FJrOuMNyh98IGOqUB9vru7pDqV06m3m5VU1MLFMkFo2mPB77amISzAoCcxOn8pTVBDLs4aExWhQ9EJLxNYLoe7NwXYp9L7Flj7EceVTXI6q8siGpnX8ZVt%2BEpny6N1lDoCqxQ07slL0p1asDaoNA4Fy0nsHjmMvRfGWpb%2BENDMlfvtj4n5N30mG08ZrVPYE2SixK7%2B0uiBji%2BNTQqAnTr4m%2BRZxEyruxseQFu02c0QdoW&X-Amz-Signature=830c36fc9a3587d9bfd6fc7373891d102846191820da8d30c90b7a7b58359a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4M6PXG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDbSBI0pzaFY64SzRUWgWnnK6CNrT0WvGe6soaqfwu2mAIgObeDSrpq%2FnZaCVZTYI%2B6skMx8uCpou5loPCCgHAs%2BYYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCVqPm6cM%2BHhY3LelyrcA8URPXpDjPA%2FCtfbdz4vRl9w7JSmx2qEpbW5c4kYVxD9duMB6y5VdpUWvT4x1%2BKc5oc7sGT3iRYivH%2B%2FbSDXPWv9P2p77ZuC8DCCHgfQn2sjn9MWP2eiISmJu2RxgFH5iMWqgCMsRNuWdn9HYJfSh9%2BoW5xZNdf3ZY%2FVtpJgZDmXRmV1mPTI5Nuje6I64Tix3iMarIPiU7ra36kAU54vmStpGWNZOtYZShNorMK1h654vCIoaWzS%2FsgZbS3w4vEI0HU9ZtR0hKW0ZYFFTLo5Z7GOKYh4FubvlmGtASRpXq24o3ceQ7QSi9fb%2Bb16wjk2tzPFSHtkj2aWYFhEkfU5g9RNuKJge9AfSXY5R7bO2ACZwnLY0tU4li8FPG7qvKEJvv%2FEwiMYNA2j%2BkuVkOMs%2BbEIHYZg%2FuelHUmSpzAb9JBycyCFtSYcFy1LgaKav2e%2FnT%2BvuA6Yo5CtZ8%2BfNWNMDdi7BJAeF0ymdLc%2FRn3l5rM%2Br4e71nI5sXrihBdzQwNOPVR1ROAUpgf1JkQ1Ocag7uSUVs4QD73J3oOwAH0oGjefnt3vFOD%2BtoZsRkuifHny5prqg3%2FWVlX3di0U%2F3DeVNWMdRXrggHghrVTJ%2Fm2G5MyIAiVwjl1mLsgWoA2MMyh98IGOqUBkLuEjOU5liQ%2BOPYc1nDaIQQUpINvaK3wJ%2BatVRf1YB4428B0S6ioRvSv1LoOZ%2F0nLMt3xRh4hw0kd4SFV2oVHsFn2ZDKqCaTa3sUN7NcCUyOMKgSSH0ZZwbJR094Rcej11JrSI0L%2FuLfY1brUKGZHYx9OSalyqLGWMCZcpkoyvqpkIP11GCB%2FAxvSXmOhJ67Y%2BZIhZA9ssZWXAlATn%2FSrsBdng5%2B&X-Amz-Signature=95173c8b876bec8c9fa8105eba95c4b97e8ce49fe88cc66978278c36eb5be06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGLXV2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIH6amsprVwRA8zUtt45%2FYG5ma3eQa%2F2VNjhZ%2F43KSEUtAiEA%2BcIrOoS5VUmDrBA32vMQPY2WzXo2vwEw18mbPhYKqnsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP3CIScFa2qD4LYV6CrcA9AtmYb3ydICqG4jbJY%2F5CXZJppiGYxD7vlIGCjoV9XYC4cCF8f%2BDwgt3tk2W9UnexN%2FlLeL%2F%2FRDTXHxdDKyh0jn6%2BVJNoiYvYnwo8qPoAtjSphX55KI2WeGqoaMvuMeFKnZl%2BcPih8NI8Dqtwt9zB9srqpcS6Le2ZXPVM5g6A%2BL8IRHly5VTR7kATy66Oro3PyojfaNenV1Ln9pbGjiSfn7nsf6DnDPd8Ymc6c8fKOVtnWltGWt3aNYl3IW4LnVTY1retQyPZr4N%2BhRGlqdJySV1FysbFWk72Ml5oqs6AvThAuD571ho8HHOiuNSEjH1L1WLb5m8QBhZAkMy5Rykl8PCwt%2FZngZpsbfz8%2F%2FU%2FRoX3jPo5DemEiqzT7NepCKYiLSKRCW6p3ItN0oTvNrwRKWh9Tj8AhzMN%2FKDrkTLaFHmypbNaR8%2FqMJ00Ir3ilJNvj9YSu426wvKZiS5RTQoV%2FOzz23Hc9YyNYOwOtMnlGXtCGQ%2FGtnc4c5tKzZRShxJgJStOP8%2BynlQ1zBKQMdWunV7BQrOAnM93ADEwmpW1RibVeTPmS4aiFNWCZzSwf7AmTMUZ%2Byn2H8CtA%2FJVrHpAI1Ej0c6QFO%2BEblNvjY0GwkqjKN209VkSRF52RNMPOg98IGOqUB2tA%2FAqfKOUUaDjxm1vOFfvew9PwZ0i%2BV83A7iarvSRDPgtNxxzJ%2Fa40n9%2B1Lcs0P9BBm2uZS7J%2B8ChXJJBOsaIBmt0UI3zbdqA%2FnZJ%2FmweVWzx1Q%2FKc32b17vMNJtA%2F4I1PqeYh%2BbpBOHQOhfiXrLhXtDD95SHDfNpivNW5Mq2caSQWE%2B7UgCvAzKlkEcx7UBi2V3lsJTEI0beZqd5U2XCHwxRWN&X-Amz-Signature=8dd80d68e8a4b93d43faabbe7d59a67d05ae33a6a476511a7fca0e451ff34a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
