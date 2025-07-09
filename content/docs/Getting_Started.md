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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBAY6Q5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcF8Y1E0hoEfVreKVpnVUHQvCxcjFRs1X84xOtlHx1CAIhAOOIcaoUszNqvCGAyZDhZZZg4Q7fWkRSjYZMuJeF6kuXKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya%2Fj2TYJOc7iXay3oq3APaSaJ5ntuJ0xLqsnLOodO39s2wI6Brlurb3sIfjbYw0UVRmX%2F2nI7natqaJFYQrqdjiB8kwK9OFDby6icr5U61zLfeKBbfQAriZcfEcdw4aDbO0Sg2A68gI6FZIhgoHh8T320rV2NlDQwB%2BnmLSrzVatJM8u%2F3TXJ%2Fv2xfqYRGQJCI6OneIonPmBSsnc9oCIv7RAcouyEeNx%2B7vQzcTdofFtJT%2B5vNhMOwtiKg49TdIZqeCw2vTOJ6Cp7lVlLkaBAWSGTDY7Hn4HMda1sh48%2BKPx6GBeETaIwpHtAhWQvIIQOWaXmhWLriXraxCPaVqIp6fGwKFMvy8SbfZdccmzmTek1vtKSDOlN5T%2F%2F6mS06lqMhJs%2FxCV27vYGAbxsxo1P5MbDYrWEspexHhdTb6TLKHF6IuGI%2FQZ0BQktUiO9%2B02RfQInsYHj2anWEouipD7Q22q6wvP%2BT91fyOW%2FDEKzSmQ%2FZgl5VEGBFdu1RhBO3%2FT1dk4y4Vicn6FHO0PcEXiyCpzHSGEONn96RsWVaWuqy2bmeM8gO5A%2F%2FQ1Assny%2BefbO3%2B8UF8Zx6ocC6prtvTnYnE4qpulsGkooVDLLPF5%2FJjjFXH7nLGwxvJfR4MrsRlXFctPgLg72EqkrfDDC9LfDBjqkAcvi7xMIz%2BGC8DxdnCbVC7p0IMJe1HowBi2uqV%2BkEG3bgV6YZhW1rxCiTMwYGpEvaN9%2FSmb1qP%2BTA7bG7OewABaZyqulNaye0OXQJw%2FMgeZwMYMMuTFHwcNHx0GquZNvo7C0ypmLRnrOnzfm9w1AHY4YZZZo%2BR%2Fa38ryyRNSZLP26uqpUzlk5pY6zW%2BDgy9PCTNw55x9w4T6MHqEmLKPBa4%2BtqxF&X-Amz-Signature=f8a9f186511611a83f78afc7b7d87c0661dfa1e3753fdc0a9efbe657cce9a6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBAY6Q5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcF8Y1E0hoEfVreKVpnVUHQvCxcjFRs1X84xOtlHx1CAIhAOOIcaoUszNqvCGAyZDhZZZg4Q7fWkRSjYZMuJeF6kuXKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya%2Fj2TYJOc7iXay3oq3APaSaJ5ntuJ0xLqsnLOodO39s2wI6Brlurb3sIfjbYw0UVRmX%2F2nI7natqaJFYQrqdjiB8kwK9OFDby6icr5U61zLfeKBbfQAriZcfEcdw4aDbO0Sg2A68gI6FZIhgoHh8T320rV2NlDQwB%2BnmLSrzVatJM8u%2F3TXJ%2Fv2xfqYRGQJCI6OneIonPmBSsnc9oCIv7RAcouyEeNx%2B7vQzcTdofFtJT%2B5vNhMOwtiKg49TdIZqeCw2vTOJ6Cp7lVlLkaBAWSGTDY7Hn4HMda1sh48%2BKPx6GBeETaIwpHtAhWQvIIQOWaXmhWLriXraxCPaVqIp6fGwKFMvy8SbfZdccmzmTek1vtKSDOlN5T%2F%2F6mS06lqMhJs%2FxCV27vYGAbxsxo1P5MbDYrWEspexHhdTb6TLKHF6IuGI%2FQZ0BQktUiO9%2B02RfQInsYHj2anWEouipD7Q22q6wvP%2BT91fyOW%2FDEKzSmQ%2FZgl5VEGBFdu1RhBO3%2FT1dk4y4Vicn6FHO0PcEXiyCpzHSGEONn96RsWVaWuqy2bmeM8gO5A%2F%2FQ1Assny%2BefbO3%2B8UF8Zx6ocC6prtvTnYnE4qpulsGkooVDLLPF5%2FJjjFXH7nLGwxvJfR4MrsRlXFctPgLg72EqkrfDDC9LfDBjqkAcvi7xMIz%2BGC8DxdnCbVC7p0IMJe1HowBi2uqV%2BkEG3bgV6YZhW1rxCiTMwYGpEvaN9%2FSmb1qP%2BTA7bG7OewABaZyqulNaye0OXQJw%2FMgeZwMYMMuTFHwcNHx0GquZNvo7C0ypmLRnrOnzfm9w1AHY4YZZZo%2BR%2Fa38ryyRNSZLP26uqpUzlk5pY6zW%2BDgy9PCTNw55x9w4T6MHqEmLKPBa4%2BtqxF&X-Amz-Signature=c9186d3670ed9f49b1518959ce1ac0dfed54e02cf4e7efc9961338a2b78a381b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBAY6Q5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcF8Y1E0hoEfVreKVpnVUHQvCxcjFRs1X84xOtlHx1CAIhAOOIcaoUszNqvCGAyZDhZZZg4Q7fWkRSjYZMuJeF6kuXKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya%2Fj2TYJOc7iXay3oq3APaSaJ5ntuJ0xLqsnLOodO39s2wI6Brlurb3sIfjbYw0UVRmX%2F2nI7natqaJFYQrqdjiB8kwK9OFDby6icr5U61zLfeKBbfQAriZcfEcdw4aDbO0Sg2A68gI6FZIhgoHh8T320rV2NlDQwB%2BnmLSrzVatJM8u%2F3TXJ%2Fv2xfqYRGQJCI6OneIonPmBSsnc9oCIv7RAcouyEeNx%2B7vQzcTdofFtJT%2B5vNhMOwtiKg49TdIZqeCw2vTOJ6Cp7lVlLkaBAWSGTDY7Hn4HMda1sh48%2BKPx6GBeETaIwpHtAhWQvIIQOWaXmhWLriXraxCPaVqIp6fGwKFMvy8SbfZdccmzmTek1vtKSDOlN5T%2F%2F6mS06lqMhJs%2FxCV27vYGAbxsxo1P5MbDYrWEspexHhdTb6TLKHF6IuGI%2FQZ0BQktUiO9%2B02RfQInsYHj2anWEouipD7Q22q6wvP%2BT91fyOW%2FDEKzSmQ%2FZgl5VEGBFdu1RhBO3%2FT1dk4y4Vicn6FHO0PcEXiyCpzHSGEONn96RsWVaWuqy2bmeM8gO5A%2F%2FQ1Assny%2BefbO3%2B8UF8Zx6ocC6prtvTnYnE4qpulsGkooVDLLPF5%2FJjjFXH7nLGwxvJfR4MrsRlXFctPgLg72EqkrfDDC9LfDBjqkAcvi7xMIz%2BGC8DxdnCbVC7p0IMJe1HowBi2uqV%2BkEG3bgV6YZhW1rxCiTMwYGpEvaN9%2FSmb1qP%2BTA7bG7OewABaZyqulNaye0OXQJw%2FMgeZwMYMMuTFHwcNHx0GquZNvo7C0ypmLRnrOnzfm9w1AHY4YZZZo%2BR%2Fa38ryyRNSZLP26uqpUzlk5pY6zW%2BDgy9PCTNw55x9w4T6MHqEmLKPBa4%2BtqxF&X-Amz-Signature=803b30631183e68d28a0f195ffa08e5714c156534ac6b7135b095db3984f3266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IMPGJT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwI6e6UXtQCY48ColPwtsj%2FxZl4JlRSQ5ySokyY2lGBwIhAKx%2BLfHf%2FuE0VlGqsYQ8b2WkcGq%2FAsRJuXdBWBohJ746KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLB%2BdAQ5arcxc%2FgnEq3AOpM0cBVo4bPl%2BMY7qF%2BUCyZUszstdTNG%2FPQQrH%2BoT1k2lK6rFbHcy8ylXF0sLUoXIv2L2mlz5UUAXtjc4GkWq7tYo9Ftt5EJMkppZjQldRnL4OaPkUZpBVByIeo5uJRzoygG9kkDlCcMGGe8O0NIzULAwklIDFMCv3CKgMHetzUg3D6b%2F4WTLprTD38vo3JNCSwtqGjrCEH8C7WpDQbKFxqsCffzFrWPGFR9aDNYv1hkngVCJJyMszDs2bDc14vMaWKjSHmXSNsos6WwWqVqxLSEUg2C%2FFf5UM7Xl%2BbdU2Tt8cdnEpvvzF4%2BqZeQh61Q1yHmHYrtqNP%2BaKmsi3q3omnt3LJEtcx5VVFdAZxQtBapP9OUA6M3DQIWh1b38ZtlJxx9RCY4XjYhIHCzvaoy9UucoRnVwiEN%2Fa1u%2BknTgQHq91wQbVi4qOQzQ5BiEMKw%2FUc%2BSxTNwf0cQi7GEHxdIp0cHX6Mz7w%2FOXKQ4MjkU89lbUUM%2BbhYlaLNSoZgWaP2aJfpPisaBvJLg5jq3IgyLSRz2MGs9nscEv7uCjyxuLpQ%2BnTBq%2FX%2BUtfihlIzD7cvnkDpAjxtmKofqmJCbtsyydTOftKDHco%2BTcqqHgyCq1VHW%2BJDl95jjlf1AGPzDC9LfDBjqkAWNeLZvEUw9mRXuuEAE%2FMVrk5dmtOQfiTQbuoEGBJ%2BpEnl4%2ByZdICX9gjT6xZXlqSHCyU3neTxeIKxxo2eItnX9AAOnyV0xcs7pCEgjVUNMu%2F6mcIIvYkkWkUlterVghjQxpi6jhcx9qh9YYj8yiDNz6i%2Fvj474bjNgg6tPNXUqabDuYFfI2CUQbIyzMHulrrr7%2BGQBU2SK64f0Od2T1bE2LtrEP&X-Amz-Signature=83dc696d5ebb0af86a1904025e0541415076a46cf605cc1f0ba56cc53acd2e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ72RBXE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBF8D1j8nyTC7pS3A7kPkWlvjVFI927ykv0Mfja4Q%2FLAiEA8OsNc8PDZpcwwSPK6YOAfEmnffawI3AcSDY9t7wSMFMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzA%2BcEaY3K0EvlLlCrcA2RLaNOXBrAd0B6pD8jv7ZfpNJRXCLTE8Kn8k9rfe1BApxzUT4BHkBFQ7Sfjwjk89IV3clNyOlUU2zw2p3uI5A7yHlh2kdXiQCA2aOuHpbpbk4M0QgC3EyYOn1qsSnJ5AtRrLYnWaNYepwK26lUVJGzi90Flhltb1oDcET2VOUBW7QUG1jvZszjhuNym3KvE5nVZlZ039u1MINCfLLELAYWqgxvamPfHaxB0hyBkN5xJIhAoROmmHNOXWuvn6fNkTfmoAzij0vHt%2Beh4DLVqXQGqOwJWhodLcOcrYYWmHxEHh5HUFdhDglncnkNesXpwA7l7dBw3YtLiWp55j4m9sBF61hx0pnrWMej37EZaIVw6LB1ciO57pVfMfo%2BamdnRA03ZV6GfeT3RjUTEVggp%2BZ20KR%2BLWPf6pS%2FwmQN924x99tZHxQwewzvG1Lwl6rut2T5oyPtugNmi%2Bt7fD9y40BIO9cWD%2BJFAjaV4CkI8XKhmoMozeOM%2BamMltdW4L5EdTYP4f84MCvsVty5ARqgHaAWamykg4tTPnh2ZMVK%2BmkkkYv066V%2ByBcS4voeL7M1rLESnBmf8U4STFv%2Bx490XANJJd6xtfMMrVtJYf6H7E8ZRC3XFx0uYng8A8cuZMJXLt8MGOqUBoKH8L3vXr8C6Wz%2Bcu2DqFMGHD%2F9IGcFAM0tWG9durMbgAG0JUud3iUz40tqXk%2BZv0Nh7lM0A6bDzM9a4dAurbF058No5NQNaxwM%2B%2Fmy1o78B87gUN8UTt5gLUw1jbI8Vx6%2BfFPetyQGJcdy36luQICFCJCXe4YUUytWuklHB7LTmFlfciIiCgc3jI0U5O92WftUrw5qNhQ9%2BQJukw9hz8p49scI6&X-Amz-Signature=d4c6248372d55b2b9745bd63e694c0f3e43b6ac88bc16667544988a6b1940edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBAY6Q5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcF8Y1E0hoEfVreKVpnVUHQvCxcjFRs1X84xOtlHx1CAIhAOOIcaoUszNqvCGAyZDhZZZg4Q7fWkRSjYZMuJeF6kuXKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya%2Fj2TYJOc7iXay3oq3APaSaJ5ntuJ0xLqsnLOodO39s2wI6Brlurb3sIfjbYw0UVRmX%2F2nI7natqaJFYQrqdjiB8kwK9OFDby6icr5U61zLfeKBbfQAriZcfEcdw4aDbO0Sg2A68gI6FZIhgoHh8T320rV2NlDQwB%2BnmLSrzVatJM8u%2F3TXJ%2Fv2xfqYRGQJCI6OneIonPmBSsnc9oCIv7RAcouyEeNx%2B7vQzcTdofFtJT%2B5vNhMOwtiKg49TdIZqeCw2vTOJ6Cp7lVlLkaBAWSGTDY7Hn4HMda1sh48%2BKPx6GBeETaIwpHtAhWQvIIQOWaXmhWLriXraxCPaVqIp6fGwKFMvy8SbfZdccmzmTek1vtKSDOlN5T%2F%2F6mS06lqMhJs%2FxCV27vYGAbxsxo1P5MbDYrWEspexHhdTb6TLKHF6IuGI%2FQZ0BQktUiO9%2B02RfQInsYHj2anWEouipD7Q22q6wvP%2BT91fyOW%2FDEKzSmQ%2FZgl5VEGBFdu1RhBO3%2FT1dk4y4Vicn6FHO0PcEXiyCpzHSGEONn96RsWVaWuqy2bmeM8gO5A%2F%2FQ1Assny%2BefbO3%2B8UF8Zx6ocC6prtvTnYnE4qpulsGkooVDLLPF5%2FJjjFXH7nLGwxvJfR4MrsRlXFctPgLg72EqkrfDDC9LfDBjqkAcvi7xMIz%2BGC8DxdnCbVC7p0IMJe1HowBi2uqV%2BkEG3bgV6YZhW1rxCiTMwYGpEvaN9%2FSmb1qP%2BTA7bG7OewABaZyqulNaye0OXQJw%2FMgeZwMYMMuTFHwcNHx0GquZNvo7C0ypmLRnrOnzfm9w1AHY4YZZZo%2BR%2Fa38ryyRNSZLP26uqpUzlk5pY6zW%2BDgy9PCTNw55x9w4T6MHqEmLKPBa4%2BtqxF&X-Amz-Signature=83d4d31e8a11004e61c9f31c3fb18197535505b1e47602f7d0e0e6db09cc7242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
