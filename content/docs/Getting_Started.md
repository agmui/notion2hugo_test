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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQ56VQM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJheg%2F5WgeLfFJQw9BYOSM8%2FaCqlTZho8dUd9WqX47xQIga7NNQCrUEt0ZHUZ6Jcg9%2Fn4kVCmkSWFskDdjt6tZj90qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0QE1zr2D3YD%2Btr6CrcA9pHEfcmv0n7OeFdsL6mobGLAufMYd4lVeqB%2BH39oVb35v4jcQQQ8msftM7TdPIm9RTZeMaxAQxdfUgvefVHnE1EYjEq8k2JvxCoIEHVS0VcSGywPTZ9%2BYzzzPIgcjMFWK5s6vDcgiOaoU%2B%2BVwR3Z7cNv%2BE%2Fff0MEG0%2F6vbgW95DFlNLmickYgu33Cj2%2B8ZUBHjviKejR%2BrHEtrBP3wwmxb8ppmUlfTrc2p3VA4BgFNmFd4ToLwHJthCqNsXe3WA9J56joUN11hNn0ch%2BMR%2B%2FcgE7Lb2p0g4c00E9JXcWgJ%2BPfdIi5CFDgJtcr%2FcYFylRMeYgqM3j3wXmt5NbCZ37%2B14asaQ6ZNGEMhIAzEGDDW%2Bhxw5gAhNeWQ%2BcTHhsfHDeWHEhqcNjCx6s6KRRoDnFrf3wVd3EptxXEiOyYpC4JpIonUQSSGWJL%2BhQrMGsd41TRK%2FK9qCWJYJan4eii336bbe9n24mjPti85Af00%2Fv3gJDzdEAH4JjmFYj1W%2F9qUHuNMTIxjuEGwIxqPxXlcvpMgnMlFbVIsBx%2F0dWksPZUvklbG4fhnEjQOte3gZcxBWW%2FMj%2BVexxnhypww2jnpuPSxWdbOWz9lOYtELUpiKqcr%2BJ4xA8VPN508%2BFrpqMN3nr70GOqUBUyCyXgzwVpPHOFXiUqHWr5DsvgPtP47BJRLANxbQ44xM4ZGpCiHk7S4jPUs8HIVsgmnC0P5tzNgxmb%2F4snSXrlqXX9JM9hVdOZwPHwBdsRLG36gyAjtIyHfyfYygAqw1tvWJQZzBw1z74k2FT7%2Bj778dRjLR0wNumSAEdHjInFeyf%2FnuuOVg0QKOwWA6I35f97azbP3flB%2FtioFHbTBT%2BHf3hvPY&X-Amz-Signature=2af01aa88271b437380e833328ff126805a72a77cd54b602d5559ef1358fcf69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQ56VQM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJheg%2F5WgeLfFJQw9BYOSM8%2FaCqlTZho8dUd9WqX47xQIga7NNQCrUEt0ZHUZ6Jcg9%2Fn4kVCmkSWFskDdjt6tZj90qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0QE1zr2D3YD%2Btr6CrcA9pHEfcmv0n7OeFdsL6mobGLAufMYd4lVeqB%2BH39oVb35v4jcQQQ8msftM7TdPIm9RTZeMaxAQxdfUgvefVHnE1EYjEq8k2JvxCoIEHVS0VcSGywPTZ9%2BYzzzPIgcjMFWK5s6vDcgiOaoU%2B%2BVwR3Z7cNv%2BE%2Fff0MEG0%2F6vbgW95DFlNLmickYgu33Cj2%2B8ZUBHjviKejR%2BrHEtrBP3wwmxb8ppmUlfTrc2p3VA4BgFNmFd4ToLwHJthCqNsXe3WA9J56joUN11hNn0ch%2BMR%2B%2FcgE7Lb2p0g4c00E9JXcWgJ%2BPfdIi5CFDgJtcr%2FcYFylRMeYgqM3j3wXmt5NbCZ37%2B14asaQ6ZNGEMhIAzEGDDW%2Bhxw5gAhNeWQ%2BcTHhsfHDeWHEhqcNjCx6s6KRRoDnFrf3wVd3EptxXEiOyYpC4JpIonUQSSGWJL%2BhQrMGsd41TRK%2FK9qCWJYJan4eii336bbe9n24mjPti85Af00%2Fv3gJDzdEAH4JjmFYj1W%2F9qUHuNMTIxjuEGwIxqPxXlcvpMgnMlFbVIsBx%2F0dWksPZUvklbG4fhnEjQOte3gZcxBWW%2FMj%2BVexxnhypww2jnpuPSxWdbOWz9lOYtELUpiKqcr%2BJ4xA8VPN508%2BFrpqMN3nr70GOqUBUyCyXgzwVpPHOFXiUqHWr5DsvgPtP47BJRLANxbQ44xM4ZGpCiHk7S4jPUs8HIVsgmnC0P5tzNgxmb%2F4snSXrlqXX9JM9hVdOZwPHwBdsRLG36gyAjtIyHfyfYygAqw1tvWJQZzBw1z74k2FT7%2Bj778dRjLR0wNumSAEdHjInFeyf%2FnuuOVg0QKOwWA6I35f97azbP3flB%2FtioFHbTBT%2BHf3hvPY&X-Amz-Signature=fd56e5a2993b012c5555d210eebb5ce26a9a800e83072c8287527a03367a8548&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALBXJLP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLVCLCp2KQfz1XfscKgZCUHAqjvMuyLwLVaP6%2BH7r2nQIgD7PAHO%2FjHFxo%2FKZuQgfz9vni0y6uIxMs%2FXk4xAoLEH0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfUCpsSMGUBLxuNkyrcA9zuyZeYxX1SoQ4CfoQ1GHx7WESCPWA5fyaY4OOdYWGYc33T9k1%2FJdDwgW5ig28tLfC1G0z%2BoERHH6gAPxVeje8E64sauqjUwQfMRAnnNp0%2FWj0xP6dSfEtuSLygKQzUCbzy6wBkbpx6K7HJtzKPkMwb8NJPd06p5dVSnmnsiPZep3CRZ%2F6S0JLL71yt3oa7cPsjUQktjzzAYnZFXwCtUz4PInA3ZWuPX2PIx08PldjrRhPyP0m9B7ZfU5U5GI%2FLgc6RvGE5r5K3hfj3cKDjKa%2BEzAZbQo9FX5R2gCfmoEPajKiS3OOUyIh8SPdEslsMLHjffsIByEEj%2FZp85VUBVSnIDO5YEwnjnpVowMFxykafMdEj%2B%2Fm8FP2ApRwN3THLHWBshEGu2kWbBXdw5OoV%2Fv%2FcOV9xxDPadXXCYri%2BpfSZPnELZNnaxFsck4JBG76WLKR%2FWUFLxJOwhdzrZ9XJ%2BWCDrm7%2BLg0f7VucWgDctZuNVsRQuocls53Q3sBtc2Jx6FduGYg6vL%2FgiJ1cTQzZMFYXYaSseC4z810xgBgJy6Rw9piRrULfsiEKNjSqvtnUkIbPkKOlt9cmuNfBEHtUy7qiGYRQsxvrpauzzlWfVNc88pHOvlQIox4DvB2TMOfpr70GOqUBOH318r0zlP5MpJDqOL51ZKNRFpqmE%2FToFM1Yi%2FCiU9nG%2FHjcckH7kpARCzmrVV7%2FGUfgbhv7eqsFNxRfKtLZ7K1prMSQC9sFGdxpaA8axTOcW0Uv5s5i%2FtGGtZpBR4dBY%2FCf8d%2BiSMBCkB7%2BhIRcmfr%2F%2BYmC7q91d4rL4nKdxWkuKwAsstgqkddfd2acSMleVGZYdpBsz6tA8%2Bxyq10n3EmYfBod&X-Amz-Signature=0fda75577e7e08c17622598172b3be3eb711533ca742cfcd8fc1e04f6baf04f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI37BR6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMmyowk%2FKtwnKQqnxznYLUIkWCBuXJNtAyIquhOYqdIAiAl1b4ex3Uk00RnMT9Z9bpZDNWrT02%2Fzle5jUQnIv419yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7a3h1hrMIn25Df6KtwDol05ie0ngzhhSlqsly9BleMJwkKBJFS3GLAuSfCY%2FcED4e4jd%2FOqMgKHHhSHCc3%2F270k%2F1iHQVTFJOpETGNhvLech77sqndXPOstGZYTAUxy9krLGaMYfZQdC%2FUtISO0SSfByCTmx5T1SQWhzdydZuymaQc2fOn8be35xuNLkDC29DoXNTu9ZgS0Z3ehVdFpEKT%2B7VPz4G%2BqlVik5VWJqIsnFv7tGBOBu58hOS%2FcfCS4KXEqbUNA4jhGpSa%2FtYaonUEDeCKlblWZRF8hRRCIM6ATnQWyHUWEV3a4oM%2FJerQN5ctSbeOBI0WLWzDWFNxHxX9dTIWnv53shpMbYiMwaWdtJUbdULTf3KUmkDRRnYScUY3YM4UZhMzoaKs4%2FboXl056VF4AcPqDCZOUjA7jM9njmS5JhNMC4V7IrmzmJI5LGLLvQOyidbv%2F27FrUEh9N2PMH2dv%2FnSQfY8QB1WB0lOR08Rrot5X1L9ZVwdPmt4PU43gPgbknJUtcr3GL13srCXq0t6HBRCJJ2Qr1VCtOGDlFhaLHTfp%2FCx25g4GJ%2B8fXXjnwsAMLYej97%2BYu6%2F0GFPzCvYnPgMJiCVCtLcuVATqasy0pIpNKwn4iXIZfW0wU3oMi7CovGvumGAw0%2BWvvQY6pgGMnbvxLNrinMMZdN5DVSP%2FOs3oXVXMkknCEcNe8x16F4G1lqG2CE%2BcWyr26MAi5LGMLjsuYpUBXNM0uywLayVo2RVsrWEt6x5D%2Bz9lbMYkNAXssuHy2po882YWHXsBTO36FJr6G1EaxrCgEgESyRUF7KVRDhRyL6GSEQ6oN8yZJeQXgOgID68aI9LLFgK6jIDFGZ8%2FqSsK2aaRHTMfBBM8f11r%2BwCS&X-Amz-Signature=d6cad27adc27a5f52cc5127c1e67f7a425ad88ad7e21c0db880309c07285a624&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQ56VQM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJheg%2F5WgeLfFJQw9BYOSM8%2FaCqlTZho8dUd9WqX47xQIga7NNQCrUEt0ZHUZ6Jcg9%2Fn4kVCmkSWFskDdjt6tZj90qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0QE1zr2D3YD%2Btr6CrcA9pHEfcmv0n7OeFdsL6mobGLAufMYd4lVeqB%2BH39oVb35v4jcQQQ8msftM7TdPIm9RTZeMaxAQxdfUgvefVHnE1EYjEq8k2JvxCoIEHVS0VcSGywPTZ9%2BYzzzPIgcjMFWK5s6vDcgiOaoU%2B%2BVwR3Z7cNv%2BE%2Fff0MEG0%2F6vbgW95DFlNLmickYgu33Cj2%2B8ZUBHjviKejR%2BrHEtrBP3wwmxb8ppmUlfTrc2p3VA4BgFNmFd4ToLwHJthCqNsXe3WA9J56joUN11hNn0ch%2BMR%2B%2FcgE7Lb2p0g4c00E9JXcWgJ%2BPfdIi5CFDgJtcr%2FcYFylRMeYgqM3j3wXmt5NbCZ37%2B14asaQ6ZNGEMhIAzEGDDW%2Bhxw5gAhNeWQ%2BcTHhsfHDeWHEhqcNjCx6s6KRRoDnFrf3wVd3EptxXEiOyYpC4JpIonUQSSGWJL%2BhQrMGsd41TRK%2FK9qCWJYJan4eii336bbe9n24mjPti85Af00%2Fv3gJDzdEAH4JjmFYj1W%2F9qUHuNMTIxjuEGwIxqPxXlcvpMgnMlFbVIsBx%2F0dWksPZUvklbG4fhnEjQOte3gZcxBWW%2FMj%2BVexxnhypww2jnpuPSxWdbOWz9lOYtELUpiKqcr%2BJ4xA8VPN508%2BFrpqMN3nr70GOqUBUyCyXgzwVpPHOFXiUqHWr5DsvgPtP47BJRLANxbQ44xM4ZGpCiHk7S4jPUs8HIVsgmnC0P5tzNgxmb%2F4snSXrlqXX9JM9hVdOZwPHwBdsRLG36gyAjtIyHfyfYygAqw1tvWJQZzBw1z74k2FT7%2Bj778dRjLR0wNumSAEdHjInFeyf%2FnuuOVg0QKOwWA6I35f97azbP3flB%2FtioFHbTBT%2BHf3hvPY&X-Amz-Signature=3fc2c5661aab3ed5f510d4e2850e5d7838362399b52ddd16471fb0219fc89e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
