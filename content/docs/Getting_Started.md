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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRU3X7W%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBWpUyPR0D9Sv8MwUS6vOa5YH%2Bxct8MdeyER9quSgkN8AiA%2FJxsVBLJ7rMuPM3M8CJD3WjnTsCuEjmPlkTMS6QmrGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1aLog6clgnc%2BE5sUKtwDvexQbnKCcdYqjLxpcCq89dJ7ROcJcz3NQiekfTPMfpZxE3t0dZjScFtmmkR5NsOrgIz%2FZekAKCYS9XPkpyHBUXLBjjUda%2Flv55mfoTmfVAmU9gqJ2tVLw%2BMMKvu6e4H7E%2B6phkVy9QiMteBeVmhWH%2BjSmj9lnEkLFxdojWg0RBEeZbXS4USZzPqu%2BTBpVoYgONbR16J94eYR2kDyCvJoTZbu47TQK62LCBo7jcfOxkl%2B17WQbOSnoft%2Be8VY8n73T2NNeL7zxSN1WTHwOEv%2BDf8I9VdDp7IHkeqE0aepd0HUJIUJbLJl5xVh36VKajUDJAi1qAobeU%2BIrzCc0Dx6IVWmFqRA0kUkC97jm2Z8psLrA3dAUP3fa9KUcru5RWo4CcN%2F5pNTyB4cJOvnRChUKf8Fyl69lB%2Bn%2BAsoujjId8A5ICpdfo9RY9KTHY851B97Flye%2BtKxOtlMhUjIcDU4HRbe3LQ5AO38d8batddrTOX2Lak0xwJT2b7hlEkL1oY3IH52UYmamJL2EAiM9CbWw%2F%2FPEzv3ecJNueRvC0FffF7daY8GKshRtzqVfy3WJZ5oOIJv%2FscjAadETZKol4a2SGBE5TeKGBYKjePa9SjWWg9G7o%2FSHUnolA62yg0w19P5wgY6pgHzaE09pNdifUrjZTYdx5p%2FJYIn5m9TMrpcWSVsOpe98gB5GeozcPk8qOVsSsgYviQG6TUBDCepF0rVXsF%2BL%2BVade1DiW9OeV%2FrBHlQVvXB6YyMDsHTm2t96MoOV7sbJrfUzht%2BChOwDMhJ1%2FTPLBcAFWlI2caAPtinF3Gezo6NNWI%2F0%2FGj1S5%2BVCqWb2s3yF4XunXDFEJm5N8grtca%2FWBoAyIj%2FGTR&X-Amz-Signature=7c98f214f7fed7c3c7b73f718c77d83cc1a24b597ebf875a88581d53d3e4851f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRU3X7W%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBWpUyPR0D9Sv8MwUS6vOa5YH%2Bxct8MdeyER9quSgkN8AiA%2FJxsVBLJ7rMuPM3M8CJD3WjnTsCuEjmPlkTMS6QmrGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1aLog6clgnc%2BE5sUKtwDvexQbnKCcdYqjLxpcCq89dJ7ROcJcz3NQiekfTPMfpZxE3t0dZjScFtmmkR5NsOrgIz%2FZekAKCYS9XPkpyHBUXLBjjUda%2Flv55mfoTmfVAmU9gqJ2tVLw%2BMMKvu6e4H7E%2B6phkVy9QiMteBeVmhWH%2BjSmj9lnEkLFxdojWg0RBEeZbXS4USZzPqu%2BTBpVoYgONbR16J94eYR2kDyCvJoTZbu47TQK62LCBo7jcfOxkl%2B17WQbOSnoft%2Be8VY8n73T2NNeL7zxSN1WTHwOEv%2BDf8I9VdDp7IHkeqE0aepd0HUJIUJbLJl5xVh36VKajUDJAi1qAobeU%2BIrzCc0Dx6IVWmFqRA0kUkC97jm2Z8psLrA3dAUP3fa9KUcru5RWo4CcN%2F5pNTyB4cJOvnRChUKf8Fyl69lB%2Bn%2BAsoujjId8A5ICpdfo9RY9KTHY851B97Flye%2BtKxOtlMhUjIcDU4HRbe3LQ5AO38d8batddrTOX2Lak0xwJT2b7hlEkL1oY3IH52UYmamJL2EAiM9CbWw%2F%2FPEzv3ecJNueRvC0FffF7daY8GKshRtzqVfy3WJZ5oOIJv%2FscjAadETZKol4a2SGBE5TeKGBYKjePa9SjWWg9G7o%2FSHUnolA62yg0w19P5wgY6pgHzaE09pNdifUrjZTYdx5p%2FJYIn5m9TMrpcWSVsOpe98gB5GeozcPk8qOVsSsgYviQG6TUBDCepF0rVXsF%2BL%2BVade1DiW9OeV%2FrBHlQVvXB6YyMDsHTm2t96MoOV7sbJrfUzht%2BChOwDMhJ1%2FTPLBcAFWlI2caAPtinF3Gezo6NNWI%2F0%2FGj1S5%2BVCqWb2s3yF4XunXDFEJm5N8grtca%2FWBoAyIj%2FGTR&X-Amz-Signature=d699ade111d35559c0d18f82510752751d54e48c353f736c13b3355d5b8b9726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRU3X7W%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBWpUyPR0D9Sv8MwUS6vOa5YH%2Bxct8MdeyER9quSgkN8AiA%2FJxsVBLJ7rMuPM3M8CJD3WjnTsCuEjmPlkTMS6QmrGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1aLog6clgnc%2BE5sUKtwDvexQbnKCcdYqjLxpcCq89dJ7ROcJcz3NQiekfTPMfpZxE3t0dZjScFtmmkR5NsOrgIz%2FZekAKCYS9XPkpyHBUXLBjjUda%2Flv55mfoTmfVAmU9gqJ2tVLw%2BMMKvu6e4H7E%2B6phkVy9QiMteBeVmhWH%2BjSmj9lnEkLFxdojWg0RBEeZbXS4USZzPqu%2BTBpVoYgONbR16J94eYR2kDyCvJoTZbu47TQK62LCBo7jcfOxkl%2B17WQbOSnoft%2Be8VY8n73T2NNeL7zxSN1WTHwOEv%2BDf8I9VdDp7IHkeqE0aepd0HUJIUJbLJl5xVh36VKajUDJAi1qAobeU%2BIrzCc0Dx6IVWmFqRA0kUkC97jm2Z8psLrA3dAUP3fa9KUcru5RWo4CcN%2F5pNTyB4cJOvnRChUKf8Fyl69lB%2Bn%2BAsoujjId8A5ICpdfo9RY9KTHY851B97Flye%2BtKxOtlMhUjIcDU4HRbe3LQ5AO38d8batddrTOX2Lak0xwJT2b7hlEkL1oY3IH52UYmamJL2EAiM9CbWw%2F%2FPEzv3ecJNueRvC0FffF7daY8GKshRtzqVfy3WJZ5oOIJv%2FscjAadETZKol4a2SGBE5TeKGBYKjePa9SjWWg9G7o%2FSHUnolA62yg0w19P5wgY6pgHzaE09pNdifUrjZTYdx5p%2FJYIn5m9TMrpcWSVsOpe98gB5GeozcPk8qOVsSsgYviQG6TUBDCepF0rVXsF%2BL%2BVade1DiW9OeV%2FrBHlQVvXB6YyMDsHTm2t96MoOV7sbJrfUzht%2BChOwDMhJ1%2FTPLBcAFWlI2caAPtinF3Gezo6NNWI%2F0%2FGj1S5%2BVCqWb2s3yF4XunXDFEJm5N8grtca%2FWBoAyIj%2FGTR&X-Amz-Signature=3f097b1d787af5d9c25deedd73e8a71fb001f8d76cbcfee0671563721107a2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK63EOIJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBOVlvfew%2BfDANU4jrrOlFzLV8VZxJayl5w9MUarEAN9AiBCu3gIkBLNkr8AKD0hVW0s%2BW41HQ60IOlhRpiLdsZ8DCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BFj0nNhEXEvJFiKLKtwD81hiFBbCj6XeR9%2FpDxoaQXtJt5F7cAzIdsaV%2B0n8up4mBJS7GbT%2BiWGN0Q68YyQE3KVI8yrBDEySrifUFuOzHUb4frXwyYerz2jabbZgAo8GflLJAud6OcO7JKB7B16yMArVEp0PeKAHAl%2B7KJIQKD25RF2yfc%2BdviHk7uoQMaI7T3WZJLemzZ6TAsXb6bv8Wr1rJIbuBYBfR9WBpABuaooo%2BKGuamalCt5Rorkjw4A34%2FyD7MQbrJLDobiXJvi23lIaYrv8GVINa3QjUnADO3F5KMS3XziCUj4JP4HO3vUE5R32kRhhomlok2t60%2BjpujQ1ar261duWl9blmGOyExyH8R6XMig9iRR7i%2F3f7U4zk9mvAnTTfQpGX0grWFe97GLT1I4ecxrgnzFqDCUX3ApWExwA0HxV03dBeIvqTqo68hTsFrk6NxQJqzEfk7Qg1TGvMZY%2FgOZimljva4QD0%2F9n3vyr6gfVF%2Fh%2BE%2FRGGwXmBpFm1pztmJ8svATPyYu4O%2F%2FNz%2FGhVsB4LphqjWSLcQ7Ia3f0nOosm4HNSir%2BYDHRDwvCEc1jYCle6MNwWsLMSXdkOCQS69Xtz8C46gaPQ906FCAaUrkG7rwNDZj7e3mICNqHPSSlehrv6zgwmtT5wgY6pgFX7cL0sl7nvhBKeQ%2BfklbXOs2fl9GHUmhHD0xTZI4cMUKkn%2BubfVUEiEIcwV9L8ms6jiEjXNZauoShInaHh9Gl%2Bc%2FFDju%2BdbCsFurP9Av1RBO5Q78iixsoll%2BGxb5BHK85e9JoD72Je116R6uOnmeBHSZhlFq9tYgioq42zdTI09ASay4ExS1bxUtHJxqZvC8syWebO%2Fbzkt9zl6QswrNNtPYtadGr&X-Amz-Signature=7eb70b2bc991a469afd2a89e7fcce2bcddba704f94635169148f99194d945647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKXNGG7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICPa%2BdcXbYiHSN%2BX9Tpgj1Cv7Zv%2BSZUPkvPd7HYoqULBAiAr6yp5SD41xJi1hZI%2Bu3EKTUyIJ01V%2FrT1gV4keZLObir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQbNGqMVefuU4nwC1KtwDMEJtbmznqVBtPtdKvbJMDyAn12I2gZ98mIrXrzaof03HGWSLEAUxU46%2F94efsqtTHiYpXDlZR4%2FRPE2z95K5j5FLCAs2B8U1g1rotDkLCTO3d%2Bz6Oa7ccE%2FKuySBGotZCGw2ibLU5TMRSt9Gp6JR%2Be8Hu3%2Bd4TQgN3nBl9vI4Dm%2BGIEVxNbMhZNrKNp%2BViVlW5XUcgDkn%2FrPRvEH1Osotao4rBrsevEff8qB2cOLLb2%2BtbrmSNWXBh9G8JSnts%2BBX5pAxMnYpCBAh1bM7bqOg6ygBpADh%2Fyx72HthMsn2sW%2BS4NVf%2BzfdQN6uKEP2SViTkrQ%2FBQWzHIqPKO1%2F4sKgDWb7HOyBhMJBCTRYm1LsiaLKTD9xGJffIMp9pjmVVPRpU4WHlmpWvj8cf0PRkFD3sDSCGvZcGHX%2BpvloiOwUNX0YEn1b7Oj07SZZyTQp7lnC2c9lKi5BThfNjMESrWd9FP3ND%2B3qNyOeE39KYDhXSwf9mAwwBQKtbOdOZaHfc14VHT8pwFvTyJilEBlUi%2BgbbkGtqNvR16Lq5ZBgC%2FDiMR4aVUUBzv3F%2BR0IOBJHrslwM3J99Ljfbl25pLQUn6xURzTKmcVvrCDy0ndmOiPFRACH8%2FqlvweG7ogqOQwvdP5wgY6pgEzsv2qPqIabY5GYh9fTcNzSQcdLjiiIldZZM5ABIwvuBiQ0o49B3o2vdYzcKZUCKwhvp1XD176ZoxUW%2FDkvSQke2HzFP8%2BKAu3k9Y3hOMwfOaOBXhJwX8FRs0MSRewbxdn5fdM6dR7rFINbEW3EdjNZUULnl976uXlTkFIpuA7bmlRKTMi9QFZ5bRoFGNJ6a%2BmgDtYz5dQ0G5V%2ByxUt1H%2FuB5ro%2FZZ&X-Amz-Signature=5e69c613bdfb8520e3d88ce1a01b9374975845fa1891888b44344770bd9692bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRU3X7W%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBWpUyPR0D9Sv8MwUS6vOa5YH%2Bxct8MdeyER9quSgkN8AiA%2FJxsVBLJ7rMuPM3M8CJD3WjnTsCuEjmPlkTMS6QmrGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1aLog6clgnc%2BE5sUKtwDvexQbnKCcdYqjLxpcCq89dJ7ROcJcz3NQiekfTPMfpZxE3t0dZjScFtmmkR5NsOrgIz%2FZekAKCYS9XPkpyHBUXLBjjUda%2Flv55mfoTmfVAmU9gqJ2tVLw%2BMMKvu6e4H7E%2B6phkVy9QiMteBeVmhWH%2BjSmj9lnEkLFxdojWg0RBEeZbXS4USZzPqu%2BTBpVoYgONbR16J94eYR2kDyCvJoTZbu47TQK62LCBo7jcfOxkl%2B17WQbOSnoft%2Be8VY8n73T2NNeL7zxSN1WTHwOEv%2BDf8I9VdDp7IHkeqE0aepd0HUJIUJbLJl5xVh36VKajUDJAi1qAobeU%2BIrzCc0Dx6IVWmFqRA0kUkC97jm2Z8psLrA3dAUP3fa9KUcru5RWo4CcN%2F5pNTyB4cJOvnRChUKf8Fyl69lB%2Bn%2BAsoujjId8A5ICpdfo9RY9KTHY851B97Flye%2BtKxOtlMhUjIcDU4HRbe3LQ5AO38d8batddrTOX2Lak0xwJT2b7hlEkL1oY3IH52UYmamJL2EAiM9CbWw%2F%2FPEzv3ecJNueRvC0FffF7daY8GKshRtzqVfy3WJZ5oOIJv%2FscjAadETZKol4a2SGBE5TeKGBYKjePa9SjWWg9G7o%2FSHUnolA62yg0w19P5wgY6pgHzaE09pNdifUrjZTYdx5p%2FJYIn5m9TMrpcWSVsOpe98gB5GeozcPk8qOVsSsgYviQG6TUBDCepF0rVXsF%2BL%2BVade1DiW9OeV%2FrBHlQVvXB6YyMDsHTm2t96MoOV7sbJrfUzht%2BChOwDMhJ1%2FTPLBcAFWlI2caAPtinF3Gezo6NNWI%2F0%2FGj1S5%2BVCqWb2s3yF4XunXDFEJm5N8grtca%2FWBoAyIj%2FGTR&X-Amz-Signature=d22d893ff7efec3c3af7c2f9dc9d972d491dfd36fcc8c7317bedf451ae6c7b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
