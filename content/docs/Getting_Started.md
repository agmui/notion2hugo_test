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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2I6NLU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD91%2BTnwvOHW5CDpPo7Hs54cUVzqoTHil479IxXz7IdcwIgfsEkOaAjBN7M03n2DYDcXPc8q3TnmywwWVJKddfwwL4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItuGwnE%2B2CdIoEecSrcA9ZW5YiGzVIYs8cjBBa%2BlwxEtgEUX6J5owirDXIhzqpQTtIdnHJkYpPuDElKSsEU8%2BC4gx%2FZ%2FCwifWgZEPxe4zi3fxR42sNR%2FWwNR3x8wKrPVDCdtP8NOIEhrXQdKrpUqeSQ64c7CvpULvns%2FmWOmSMB5cMcuowp4dHYteQtRFCW9U19S0sGdW9KFqOFivSTSUBK1gRHagSP%2FCH3gUvnFBTsNx0KDC39SrU6qZhX%2B6lsY0xjn54k9NKcqgLqTXgdD0rOzlDb%2Bg0pq7piJEeknj5h%2FFL6OOVLVibGddTz5cr6w70XAbDrQ5CwiYGrA8iSkpaDv4bnnu64LMdNqMoeB%2FgNc5szquYWjzTccIMWr0PeVM9hE0plj4QuZwzv1TEbj2ri3PNkuiR6bE5dGOQQk7%2F9ejMF2VIscfuhQDqm8myxV7UuT6hxhTMxNCwez3EPGHOztnlsh68A9%2Bvxd8S2sq6zDxrZNb60qAYC60kfHn4nIlMzj2nxViOr%2BOhJHRVauL9TuZfJroFC3wE2sEDGXmfU%2BGdzJWYEmsUU6%2FLzqKJStE5FsKg34jiHQLR4Lqhfecuc4wPUBk9xwE5bf8Unl4HyuzIdr5ZOO1RgBMoWBQ7E7XP2QwF4owQNSGRDMOLk8L4GOqUB4UZD9DOfc%2BPZ3ufIUYKHG0q9AUIn4cuS4diVWfM2bC%2BrfqCke6kiEyEoKg4ycWLwpQwa1LNIT8g0JAKh%2F%2B6GpZ9%2FF69IQRaMpNdGamgsjHpEfxF6OAeiSMOuNqN6omlIQLj%2F7PYWoEbBiR1eO%2FYG61mNLmRcIrYJ2IQszphpCkBV9wVQfxTPJ8KlHWnJy7INPS4U4JwEaqwgucfhNKsiF%2FNYWk1p&X-Amz-Signature=16569c2687e2ed5459a1c096980426d7511cfaf0aa7f9dd09d60f9750da77c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2I6NLU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD91%2BTnwvOHW5CDpPo7Hs54cUVzqoTHil479IxXz7IdcwIgfsEkOaAjBN7M03n2DYDcXPc8q3TnmywwWVJKddfwwL4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItuGwnE%2B2CdIoEecSrcA9ZW5YiGzVIYs8cjBBa%2BlwxEtgEUX6J5owirDXIhzqpQTtIdnHJkYpPuDElKSsEU8%2BC4gx%2FZ%2FCwifWgZEPxe4zi3fxR42sNR%2FWwNR3x8wKrPVDCdtP8NOIEhrXQdKrpUqeSQ64c7CvpULvns%2FmWOmSMB5cMcuowp4dHYteQtRFCW9U19S0sGdW9KFqOFivSTSUBK1gRHagSP%2FCH3gUvnFBTsNx0KDC39SrU6qZhX%2B6lsY0xjn54k9NKcqgLqTXgdD0rOzlDb%2Bg0pq7piJEeknj5h%2FFL6OOVLVibGddTz5cr6w70XAbDrQ5CwiYGrA8iSkpaDv4bnnu64LMdNqMoeB%2FgNc5szquYWjzTccIMWr0PeVM9hE0plj4QuZwzv1TEbj2ri3PNkuiR6bE5dGOQQk7%2F9ejMF2VIscfuhQDqm8myxV7UuT6hxhTMxNCwez3EPGHOztnlsh68A9%2Bvxd8S2sq6zDxrZNb60qAYC60kfHn4nIlMzj2nxViOr%2BOhJHRVauL9TuZfJroFC3wE2sEDGXmfU%2BGdzJWYEmsUU6%2FLzqKJStE5FsKg34jiHQLR4Lqhfecuc4wPUBk9xwE5bf8Unl4HyuzIdr5ZOO1RgBMoWBQ7E7XP2QwF4owQNSGRDMOLk8L4GOqUB4UZD9DOfc%2BPZ3ufIUYKHG0q9AUIn4cuS4diVWfM2bC%2BrfqCke6kiEyEoKg4ycWLwpQwa1LNIT8g0JAKh%2F%2B6GpZ9%2FF69IQRaMpNdGamgsjHpEfxF6OAeiSMOuNqN6omlIQLj%2F7PYWoEbBiR1eO%2FYG61mNLmRcIrYJ2IQszphpCkBV9wVQfxTPJ8KlHWnJy7INPS4U4JwEaqwgucfhNKsiF%2FNYWk1p&X-Amz-Signature=51a1ff81620176c146cb79fcb1cd00a3b0fd1da1e4a23e425b114dc77e52d3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652OVSD7M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDr9smv5GIoto451i4mnYTlNQyajViI5qNGWWHYQcTtHAiBFIwiYwTqpKD5oeHDxiQ9C8QNbvg6agUJSnG591BtbOCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5zMEpCYEYEEV1CLKtwDT8qKqDm7GX%2FVf5EwfCKA0ARITgAapIlXZY%2FcUbzmWy8grHu%2B3Jub50Aa%2BeQyALafvKX6IMRZS1ydcHr6hRRzAima4dPCl58tEQiNXYdvQnluDebttM7pk8wJdinnxlgoX1nyA8hnKhdQTVQ%2FVmQL4gkPecdc8%2FJ%2FM%2BWOTec7DR9ouv%2BO6gXCb6Au9NzmGhkeSIlX3Em%2BFCWztKcyhch4aTURh%2BZSARSYNr3FwW3UoEpn6o0uekibQ%2FTWB%2F0Eoue8Ihx%2BcXL5yOywSw35i1wPKDWpuH8HAPd5p5BBKJYc1rBILief0AXzLTJ3o5gfJlnAskdVG4AKfCDrdhDbGRQgebwhom9YyQHMhYNAeUa6t0Ha4dbEha1emUpbWu9MoP%2BekaBCIjqDhBJP5YuVBux7qI941wF4MHa8U8kOkadFUf9koPBAHpFijY4K9LzUnk8%2FFnei6CeyCW1xmU6Jvu2jKcwxRvxXwmvzIs%2BCly%2FLoCq65JsoC4sjTnnHAuByANr5d%2FbV0P39aOGebl4HKXOUcMXC2J5Q32SGZ3WcbhKT5A01V3e%2Fzncxeozm2S56Phkbb3SXR2JmzYPsQcd%2BKOFrYvZRxlB1V0DcT61m5TDBzacS%2BYp0xPGoKq6ANFwwo%2BXwvgY6pgEyYw7cZG6jWsZ9Xaj6Fo3njTNJTDJqRyE4qCda5iBPW5IyBtn12I%2FWEPxk%2BAWx4p%2BZczw8DcSA2mNyKho2wvzz3ISQr8mVDvmd6FRqqfrJBfy7TsLr%2Fs0EcRJZgUeP7HAmOtD1xphl9bt7tqLOz7S6lGU%2FXejBaEyo3u5zfZ2W2UMY0Fb%2B%2BVg4dLsWs84FDirtRN8%2B0icodS4UXW2u%2FYBci6ssMvmJ&X-Amz-Signature=df057acd6cb0005bbf039c574a385eb826834b194a5c9c0f9e6ff6b244debddd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q3LW2B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBa0g8J9UrNSRh1qqipdIpAUzQvfeETg37P3QdVclRb7AiEA3ZN10poQ%2BRU6zjoLmtLjhyNFQ3cxgKIglpVoWi6qWi8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFw7DAfiRIbA1PPuAyrcAyY0MIIuv%2FuaRPwkwB17IMlAt5CmnJVwEgVI4StGr7sgzlNMsG7HBgXOnOAZfUSeOuMA8U5e%2BxcNH0%2FjRzbafcY5FYhNSFbu4AaQ8IKR8VdwK01rsolNt3u9IsweF%2BvsU01mBnhv%2FDRuponIpuAKNHvBRvi%2Florf7tvMhHKcv6sl4V6s97xHk2bBRX4IvNa%2BoDMbOV8RHFPAODrR7KFZgZXzfd%2FbgZHB6WTi2DFhP%2B%2B5VxGaEsXyDx0%2B3oJDiQKN8y%2FhKrpqMeP2CSFRIC53rcADYjtCj60bofnQcsS%2BlwGKxbwgraS0aJ32k6jRVzU3%2BraZ0IqFGwlQl%2BOVT7vWOEuWG6nViwOueTuYSGyAsoS%2FBLs%2FJGfJSm7Pq5E9ChQNZAuZ2pMd5RG%2BV0aZB78w5t05T2AnX2RkAuBPn5VfVgaiKQqFkKOY9w4%2FZL4x8NmkxYUXbbP72dfS5Tfm3ZhFQhXJ5nzlIuAeh3w%2BzeS%2F1SXaIC7ETFDgaffiTcplolGNURONwxmPCog53UHaEDU9%2FBqPqBZ05yGSWCAT0f79hqp4SfHF3GU8FEELzQtVfikf1cWCUAqQPW1YPLV3hFo%2B0ODgFGLxWw3c%2Fn84dLX5UG7OLnlG75sb%2FUCiO%2F%2FHMMPk8L4GOqUBIo7YH5Vpsh7IyURBuGNNgZ9vBuBIQlVsHYs%2BEDlVO1ideXd6J%2BwpJI2Y2xEArRKni4CSOhgZZmP%2FG0ES49fhQ3cSey6od4Dtep32IOoxRu1c%2BOVkON3YOpuao6v5djBO%2FFUROZg4q26RtqyiRV8i7JUw%2BRtLEl9J1G94E1FL4Q%2B47HTeZhreE7g9kwylsCoK7W28PPhUceddk4b7QRj9UVC1sNYy&X-Amz-Signature=078b29f1cf7b94185a8b75a53ba30a8c8e48d9e1246cb32fe6f3a72be2870ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2I6NLU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD91%2BTnwvOHW5CDpPo7Hs54cUVzqoTHil479IxXz7IdcwIgfsEkOaAjBN7M03n2DYDcXPc8q3TnmywwWVJKddfwwL4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItuGwnE%2B2CdIoEecSrcA9ZW5YiGzVIYs8cjBBa%2BlwxEtgEUX6J5owirDXIhzqpQTtIdnHJkYpPuDElKSsEU8%2BC4gx%2FZ%2FCwifWgZEPxe4zi3fxR42sNR%2FWwNR3x8wKrPVDCdtP8NOIEhrXQdKrpUqeSQ64c7CvpULvns%2FmWOmSMB5cMcuowp4dHYteQtRFCW9U19S0sGdW9KFqOFivSTSUBK1gRHagSP%2FCH3gUvnFBTsNx0KDC39SrU6qZhX%2B6lsY0xjn54k9NKcqgLqTXgdD0rOzlDb%2Bg0pq7piJEeknj5h%2FFL6OOVLVibGddTz5cr6w70XAbDrQ5CwiYGrA8iSkpaDv4bnnu64LMdNqMoeB%2FgNc5szquYWjzTccIMWr0PeVM9hE0plj4QuZwzv1TEbj2ri3PNkuiR6bE5dGOQQk7%2F9ejMF2VIscfuhQDqm8myxV7UuT6hxhTMxNCwez3EPGHOztnlsh68A9%2Bvxd8S2sq6zDxrZNb60qAYC60kfHn4nIlMzj2nxViOr%2BOhJHRVauL9TuZfJroFC3wE2sEDGXmfU%2BGdzJWYEmsUU6%2FLzqKJStE5FsKg34jiHQLR4Lqhfecuc4wPUBk9xwE5bf8Unl4HyuzIdr5ZOO1RgBMoWBQ7E7XP2QwF4owQNSGRDMOLk8L4GOqUB4UZD9DOfc%2BPZ3ufIUYKHG0q9AUIn4cuS4diVWfM2bC%2BrfqCke6kiEyEoKg4ycWLwpQwa1LNIT8g0JAKh%2F%2B6GpZ9%2FF69IQRaMpNdGamgsjHpEfxF6OAeiSMOuNqN6omlIQLj%2F7PYWoEbBiR1eO%2FYG61mNLmRcIrYJ2IQszphpCkBV9wVQfxTPJ8KlHWnJy7INPS4U4JwEaqwgucfhNKsiF%2FNYWk1p&X-Amz-Signature=9575b105c1aa9bf2d934dc560d7501689bd07cb6e08e0bd601577180a31e00b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
