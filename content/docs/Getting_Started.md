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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWOYB6N%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY9cj4I3tuxcVcPrhGFgCf9cBRNxEw6nHGM5K%2BXDDj6QIhAL3UnDtToMSjWHKzBFpQAeEDpBa6gy5sFi7Yc3xj9m%2FsKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqQsx04PJ9hQ2OqfIq3AMBkte2M7fMT7%2FA%2FBO0L9TLf4nax1RXY%2B5Hl8EUbgrCbT4ARfI3JCQ4ltvUXit%2BGsgJWefTWD1zZVSHF3SOv6fRpJYyOBJ8iT%2FkLBfNvIqZ9sEhKwhBGZTU9tXk07LrQbBvZKwCIBBRCvgplpOv56%2FsbsYaYSTumV0CA24kS6zzgB8jeieeVmcltq31NF1cTz%2BumiU33%2B81ji6XpfdZEov5r4%2FHBnicNfAbhrahMjbIGe3ZyOO0lDKywW8%2BThFqVmtXSmicSHOZ3tx9Ypng4HFtSNNyFsnMrAJe8kziyu%2F0i1wSnS5JUlQjz4B1kmQs%2FYy%2FOUsr4yHH8q8Lr1J5wpAvbwGUpvaNCiKoHmf5wOLWlMyvc0EKX8sbmBNMCGHTnJk%2Fg91VsCiKPy81YAm%2FqecveIaF5daTwOj%2FbqFHua8Ws3eXP5m7ZNQ9GL28q0IpQPsV5Is2kVGuctS43OU4SlHCUvh4cB%2Ba77QH2pPISxzz9HXQ5TZ1%2BqIuMoydhPokYkfwI2v9T2mOFFoRZt75vGHpa2aDlqEP9USh99%2B%2BXOEBXp9PONIY6QItfz4z5lO4TN%2BPPSvqNNvQrXPLVS0Ew1NoZD91UCVacqV9%2FUhQWpLrGsP2Q9H9h9CaENQJlTCokNvCBjqkAaEMWMvyUibCx0A2srxz67ahhCrJDLzfBagIn7JHwIpiBAm5QreO2RqY%2BCFr0LNVzUgPBKtghRv1me65q%2B%2Fke66Aipw%2Bv%2B%2FXSqIJ6tO9KI1f4ZhZgVrEZ1nNwVobb2hwfIswjA2%2FtegqmKPSDKVEv76coNtbaRU5x8UymLjZ4ekFCDbwGP44BWur9Y0ITFME2iK94I0RB3eeq7MuNOkIfZmVSEaL&X-Amz-Signature=1d9b81bc35b0eb861d977575b2a34818f9ec244d6db6530797a2ef8e18a6c744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWOYB6N%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY9cj4I3tuxcVcPrhGFgCf9cBRNxEw6nHGM5K%2BXDDj6QIhAL3UnDtToMSjWHKzBFpQAeEDpBa6gy5sFi7Yc3xj9m%2FsKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqQsx04PJ9hQ2OqfIq3AMBkte2M7fMT7%2FA%2FBO0L9TLf4nax1RXY%2B5Hl8EUbgrCbT4ARfI3JCQ4ltvUXit%2BGsgJWefTWD1zZVSHF3SOv6fRpJYyOBJ8iT%2FkLBfNvIqZ9sEhKwhBGZTU9tXk07LrQbBvZKwCIBBRCvgplpOv56%2FsbsYaYSTumV0CA24kS6zzgB8jeieeVmcltq31NF1cTz%2BumiU33%2B81ji6XpfdZEov5r4%2FHBnicNfAbhrahMjbIGe3ZyOO0lDKywW8%2BThFqVmtXSmicSHOZ3tx9Ypng4HFtSNNyFsnMrAJe8kziyu%2F0i1wSnS5JUlQjz4B1kmQs%2FYy%2FOUsr4yHH8q8Lr1J5wpAvbwGUpvaNCiKoHmf5wOLWlMyvc0EKX8sbmBNMCGHTnJk%2Fg91VsCiKPy81YAm%2FqecveIaF5daTwOj%2FbqFHua8Ws3eXP5m7ZNQ9GL28q0IpQPsV5Is2kVGuctS43OU4SlHCUvh4cB%2Ba77QH2pPISxzz9HXQ5TZ1%2BqIuMoydhPokYkfwI2v9T2mOFFoRZt75vGHpa2aDlqEP9USh99%2B%2BXOEBXp9PONIY6QItfz4z5lO4TN%2BPPSvqNNvQrXPLVS0Ew1NoZD91UCVacqV9%2FUhQWpLrGsP2Q9H9h9CaENQJlTCokNvCBjqkAaEMWMvyUibCx0A2srxz67ahhCrJDLzfBagIn7JHwIpiBAm5QreO2RqY%2BCFr0LNVzUgPBKtghRv1me65q%2B%2Fke66Aipw%2Bv%2B%2FXSqIJ6tO9KI1f4ZhZgVrEZ1nNwVobb2hwfIswjA2%2FtegqmKPSDKVEv76coNtbaRU5x8UymLjZ4ekFCDbwGP44BWur9Y0ITFME2iK94I0RB3eeq7MuNOkIfZmVSEaL&X-Amz-Signature=2ac36313382a6a90c6759d69f1773ea26f9b589f24eca147001feee107f297c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWOYB6N%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY9cj4I3tuxcVcPrhGFgCf9cBRNxEw6nHGM5K%2BXDDj6QIhAL3UnDtToMSjWHKzBFpQAeEDpBa6gy5sFi7Yc3xj9m%2FsKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqQsx04PJ9hQ2OqfIq3AMBkte2M7fMT7%2FA%2FBO0L9TLf4nax1RXY%2B5Hl8EUbgrCbT4ARfI3JCQ4ltvUXit%2BGsgJWefTWD1zZVSHF3SOv6fRpJYyOBJ8iT%2FkLBfNvIqZ9sEhKwhBGZTU9tXk07LrQbBvZKwCIBBRCvgplpOv56%2FsbsYaYSTumV0CA24kS6zzgB8jeieeVmcltq31NF1cTz%2BumiU33%2B81ji6XpfdZEov5r4%2FHBnicNfAbhrahMjbIGe3ZyOO0lDKywW8%2BThFqVmtXSmicSHOZ3tx9Ypng4HFtSNNyFsnMrAJe8kziyu%2F0i1wSnS5JUlQjz4B1kmQs%2FYy%2FOUsr4yHH8q8Lr1J5wpAvbwGUpvaNCiKoHmf5wOLWlMyvc0EKX8sbmBNMCGHTnJk%2Fg91VsCiKPy81YAm%2FqecveIaF5daTwOj%2FbqFHua8Ws3eXP5m7ZNQ9GL28q0IpQPsV5Is2kVGuctS43OU4SlHCUvh4cB%2Ba77QH2pPISxzz9HXQ5TZ1%2BqIuMoydhPokYkfwI2v9T2mOFFoRZt75vGHpa2aDlqEP9USh99%2B%2BXOEBXp9PONIY6QItfz4z5lO4TN%2BPPSvqNNvQrXPLVS0Ew1NoZD91UCVacqV9%2FUhQWpLrGsP2Q9H9h9CaENQJlTCokNvCBjqkAaEMWMvyUibCx0A2srxz67ahhCrJDLzfBagIn7JHwIpiBAm5QreO2RqY%2BCFr0LNVzUgPBKtghRv1me65q%2B%2Fke66Aipw%2Bv%2B%2FXSqIJ6tO9KI1f4ZhZgVrEZ1nNwVobb2hwfIswjA2%2FtegqmKPSDKVEv76coNtbaRU5x8UymLjZ4ekFCDbwGP44BWur9Y0ITFME2iK94I0RB3eeq7MuNOkIfZmVSEaL&X-Amz-Signature=77e54e5f4622ef306854855d5e6488664ed000d4852ab492cc81ca556905ac78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IRQYTD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1rUxMcSboeMqyV1GcklxwBTJdaHRFlvhzTGTEjt%2BAdAiEAikyT3buz3BG%2BAnQ6%2BqBeo58ivFSvTLSSZndmBU0ndS0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO894ak%2BuJzT9noBDCrcAwzhB67uqNio%2Bp24YjjhId%2BnX4Bj8YcUWcCDs8flD4%2Bg%2ByyWmRVv45DnIx9REBxSVw17NbTqvgzHGwgKvJd5zcxGZK67SxWCuDO7jMQn5m2lghzibXf9YUcm4qr7trYXHF%2FwGCu1uFSq8A84byTUDGAuMdTnfjmhmOAN%2B%2BV49Au9B5SXLmYTguQQWPelY%2FKjYZc6pjc%2F9TcONkgQQxdXjAcIIcSiLPnVBh54Dh1dFVVVRO4m1PC714BqIPY60mh4SCpZNuuH6PA6mPTZx8uliP0JSXSSNXkuNXW347%2BBJoNY3rXgExg8RXyoiGwokjWQPUJFojxFjaYwaVVPT9acjTQnQLK0LsOmZN3WLEX2oSvI6E0AgOfTI1UFU1Uh8PYRnRArr2Zq%2F3pLbMKrTk75D%2Fbn81wdkItCJg6wOHFnPVaDYfIpM1FvK0BarZI%2B0ESdaOTmBUjYk1XEDZ%2F10%2F7JTxFiTjaAPNEevXYZGUJcY6%2F1P5gEHYv86D0848LMGSX19YvX3dDGZBKD%2FYXsvQQdlUbb7N4K0CkfgjTPPsU%2BOvpeZ0FNQ2k9jZotFR5F%2F3yiM2Ba7SVl2nNDxlcfKoCHejbR2W%2BFy0pPRSBPiTMDKG1JBWa6deFB7NlUZu8%2BMMqP28IGOqUBIoPn%2FSaQmyB1VQ70XFOKmDdNzMcO6X7oYNQkGglpklmxVNhIy92iuoo853iwIlLXDk%2Bakoqgw229FqDn%2FwF5nhnOT4NMRuYiv0p88Fmat881QS1AztLM%2Bkim7sA0ist6B9s54JMaycWA1OwXIwHa443sUuCv6VehTMxFmY936lDWMmOc5y6yF5PcTBl4K9utI2b2zwWDq7Vpm1jc3H9Gg1BrfhyP&X-Amz-Signature=4b9b3e608488d68ff7b42274380068165dafefc585b5cb80b36c127766b1398d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536LFNPZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKN3%2FdHqsSdFftf1KxSF5qcsfN0WjcpJwrzxSLUC7cOQIgFJYkaEyHIPOMxinLAtI916ocyIZNfUx6IuthvZ82KDsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHIeJ6PzVEE%2FTbMSSrcA8pyRae5FaP62AiY2aAH%2BTTU%2FdRM5LG499egi%2BSNFvO%2B7j0oZvMpuO006sErkxanQ6Z%2F3W5jH8JnxSOmuYNA5Do9ynyvG%2BLJ5BwyNNmhqI8emPmoJw%2FxRpsSY2TFcmJ8bKrqLej0h9XnHEyR%2FnSEnPvaZ9%2FTW9n%2BhO6jgq3rNNb78tLirfJc3ikW0XPRJ8520MSVrzKx3aKSVnFXN6cRU1be8yEnxMJjaia78weuYVV6qXQhvksU5FxfTP4T07sZx52F4rehaewiik7qpa%2B0Ftil7Rq9eqWnctiHvLkhjxz9B3b2am0LAPMsx4RqsV30haAFeumyfrSpFYu7hg0phiRtTjUGDz1fyzdlKrRRblw98T8qyhnUad533dEjvJxoZj0cw3ILp2zeAG0TTAX5CouHY1r1UysV%2B25Jr68xbygvHCrHCsnx8GPqX5yWroRcMgluoUxscpcNvZdnKkQjgbgJn4GykhWKNWrd7KA9MvAihf83nTfJhAPi28tkr3t4GSx0c3rvL2IYhzfPHpHQi%2F100BHZsLWYPaCHLPJRynhu18DoGww2YGtCT2lM0mc315Z8QRSnCqJNe1nI6lugy0EzdXuJn87sWN4kMwZ9yFCt26AIDowqA1wQm87TMOaP28IGOqUBy%2FHuwQMNFsfvkuZRQESSiGHqtP4Mx580JTQfErWNmEU%2BrVZa2U8%2FX0WR%2BtTIiG4sSTLLxO7B8maFxuDcVhul%2FTL6S7POS%2Bh3RfGmKnGCtrBNdkPXt7FQ7WC74BEP7Ioyxl3vIScmrugEZ62B4fklch4pJqKNtxMw1PaLJhDjk6h1YrPOldO7Gp3eeuXDIkRleysz1oRPYyuoN8XlAcd0UFVbKGqT&X-Amz-Signature=ce87b559e7397fd4bb5ba0bec366e261f2ad901b8384b1d3ba2742b4a8b5f4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWOYB6N%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY9cj4I3tuxcVcPrhGFgCf9cBRNxEw6nHGM5K%2BXDDj6QIhAL3UnDtToMSjWHKzBFpQAeEDpBa6gy5sFi7Yc3xj9m%2FsKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqQsx04PJ9hQ2OqfIq3AMBkte2M7fMT7%2FA%2FBO0L9TLf4nax1RXY%2B5Hl8EUbgrCbT4ARfI3JCQ4ltvUXit%2BGsgJWefTWD1zZVSHF3SOv6fRpJYyOBJ8iT%2FkLBfNvIqZ9sEhKwhBGZTU9tXk07LrQbBvZKwCIBBRCvgplpOv56%2FsbsYaYSTumV0CA24kS6zzgB8jeieeVmcltq31NF1cTz%2BumiU33%2B81ji6XpfdZEov5r4%2FHBnicNfAbhrahMjbIGe3ZyOO0lDKywW8%2BThFqVmtXSmicSHOZ3tx9Ypng4HFtSNNyFsnMrAJe8kziyu%2F0i1wSnS5JUlQjz4B1kmQs%2FYy%2FOUsr4yHH8q8Lr1J5wpAvbwGUpvaNCiKoHmf5wOLWlMyvc0EKX8sbmBNMCGHTnJk%2Fg91VsCiKPy81YAm%2FqecveIaF5daTwOj%2FbqFHua8Ws3eXP5m7ZNQ9GL28q0IpQPsV5Is2kVGuctS43OU4SlHCUvh4cB%2Ba77QH2pPISxzz9HXQ5TZ1%2BqIuMoydhPokYkfwI2v9T2mOFFoRZt75vGHpa2aDlqEP9USh99%2B%2BXOEBXp9PONIY6QItfz4z5lO4TN%2BPPSvqNNvQrXPLVS0Ew1NoZD91UCVacqV9%2FUhQWpLrGsP2Q9H9h9CaENQJlTCokNvCBjqkAaEMWMvyUibCx0A2srxz67ahhCrJDLzfBagIn7JHwIpiBAm5QreO2RqY%2BCFr0LNVzUgPBKtghRv1me65q%2B%2Fke66Aipw%2Bv%2B%2FXSqIJ6tO9KI1f4ZhZgVrEZ1nNwVobb2hwfIswjA2%2FtegqmKPSDKVEv76coNtbaRU5x8UymLjZ4ekFCDbwGP44BWur9Y0ITFME2iK94I0RB3eeq7MuNOkIfZmVSEaL&X-Amz-Signature=d117e677eac07057ab766862b11be3e0ace21bc75cb97410d16af1affa16fa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
