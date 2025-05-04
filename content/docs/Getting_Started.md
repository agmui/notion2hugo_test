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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=aacb71382e0bca705b89fcb9d3dc560c2c7edd9326f9de45550708e48bb88615&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=5f6ca10ba799a96deb459b4a42a6d5ccc0e9a93f3ea9aee1c6705e5169122958&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=c4ee86b9bb84f3776be531e219f56b73ae791510774b0d84d60ff57f98f365db&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLBTX42%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDpFKXFhMdvOwG16BZOv44rGpsxCmVwIbCYv6xZytuGQwIgAftnRc9WiWNfKNuIyZrRTrbOAOjsWUfOsJaghHixUrkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWQzbmeg3G0A46bCircA%2Fi3RZDlaApo%2B7TFQHd6Y8Za57sZXX%2F6WH7u9H6UOS0AcafJ%2BT4sbx5O%2BDI3kWbNGGcjJ3T%2FTbw6gd6HCprZbe5tIwF4ra%2BIDMpQeTEg0V83%2BAooUUi%2BdT8FmNrwxH7MkoJSMpWE6FRZTecw0A2PAk4Yoj5lK97jxTf9Y%2B9onWaH7I10udwKsJSqKPVq8o9w7klV7vrVuJDibyuCwSXg%2ByB8xcKZEwi8%2ByLpuFB%2Fv2Qu3tM3Jhd3HLMSUKdzfDefFyCQXUoWNgDxN454FSMGsUvkKMP3xsMHGwZTEMO8SM6JyLZwCD%2BqqtUWgQCBln0RJbCdi27oql%2BsgsCxEx2QFicWCzl2hfexZsHMIlkEiLSe3aeYSpGAFImGpTg9n%2BSRd1Obe579S2mJfjhYqmk01ED7%2BvzBqRK57WA9NQDiPKiYu0%2Fz2a741FeG5%2BTmy6exO8Uz6upuDeQMVs9W3A05CRqD%2F4eqVoSkZja7bjbr%2B8k9JgreAXcLYD%2B6cj55XmehpfAupKIL%2BZNBgLRTixwr09%2B3N6zbwHNGPqBhEF%2BUNqpYuZqwXG%2BaDilySneWebMsAsu7UbYg6BKRQKA8%2BrzxcND3b7zl4FT2%2BjLwYiCTD8r5EMx7WY8xM3sXVa25MMLr28AGOqUBTIH7c3m3BPjTMpYYfCvgKcgL%2BvuXsYUVpq9t%2F1O3y%2B11%2FvgeoxyKu59VC7hPh6cgXXrpaH5dWf2ASCAJZ%2B4ux7oFcNl9hnoCu%2FHWa9hYXoMgIvHlvSQBG1qEZ7TFw3wE5xvzCgLgosKSkHVlu3Ry6aexFeK5BvIN94LVeA1jWgDjHdeJQB6457yg2k2OZyksO%2F5XLSe4%2B0hCt6ALf8T%2BM2zxNbDg&X-Amz-Signature=b12d5242d750d63dc231e498646d01f003c1e767c6ced93edf671bd5ff91ecbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4MHRZE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDl1m7CPm0cuap%2BQaXFzEpf0qh0U1P6heM4MYREk2phSAiEAwwtjMT5kOnmIpy7IKVIyaoD7URYera8%2BDdkKHliUpDAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2vsFuOHjESb%2BeNSCrcA7J3E%2BDVpBtvhAOToPmWveqXM%2FepcovpXB%2B22wQVMGyoJFiqpGDK6vRQdHSFfL9EaSI8tT5h9KyhMia7OuDsPsAGYPFI1%2B%2FrxSuS9IGjN1F4yQBJuNBgN78VgDRFDVrLe1tGzkpPJoDv2aU8Obr8kVnPQZWXii2d963iDxzG%2B8ZyoF6hxVeXO3A6CxwnS4Y25dnuhfviy2o6B7DgDURSxfii9RkxfLzVF5riTWyPpCleInwV5ITl6a1ADwmGMRRjYN0HxQ1XISJJRnL1JkFIiL5MrJbT2fYAnM3lEmhLqjcjrd6xqZpS7JFW1ErFkJA76NhxceMnlf95FoZ1kqngvB1AarQnST6sIb%2FireZIa2oNv4pEs4kMozNyODfttHPRHERC3a%2BYj%2B%2BVwj759vbIGnz0vbEWi%2FB1z3u9Fd%2FsjwFU52yRZjZRD7kmAMLC%2BnKzAmh3xQJpDpG4nuA%2BNMslgH6zdrHsMDUYPSuXJEvvvb4tqDAD36TDpxrd17Wyf08zKl8xGliRuPW1IMMVoL47WQFcig55F7eMhzhs34g5SKxtv85hOIJ94bzfqMoL7AYnQGZiIScDAUbJR8EYnWu1xhZEh8mfh6DIPGHkuKfFyy194tNYCBn9ycVUTcylMKPr28AGOqUBrqw1YcnH2LZhhIhQ1sHq3DWLCiMXitNRKrHVB6rn7mMJP3wL3jzxbNbY8NY29Ft1ghys7AMdQz6Ed7PBlxkO%2BF2RrHS8M81NCBnRgdfkS5UCYUUies7v7hslb%2FcY0rJOj9jPcRjUuoHEr0gZBGt5L%2B95qSGWolcM2xMRhaL6vSPIyd80EO7FVNhIb%2BtIE6SULt2R%2BwsU%2FRUQOyx6W3xJEGmPrLRA&X-Amz-Signature=72f9e251c86d0a0d002a7449d98c39adaa57589daf416e7606a36c278b0d5daf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=eda00044e1bc3e7d9aed2a70745869b8c06fc95f46d9c114bfd1b1486cefc837&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
