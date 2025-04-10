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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QNEM64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIF5Df9H51Y6ejr0IJA6mylPMJVgQ6YNUSxsv2D8fuelsAiEAlIvFq4hLLLA56pGjCFTn0TWm7FAkAOlj1LI8PMN7gTQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIishr%2FE5eHQdWbsvyrcA9STEOCWqL%2BkMic%2BJWTjlai2kl1L2kYFzk%2F66%2F2AmZhD47HKkx9IpbgVmZkMSN9TrUCApwYsIOC0xSTFtLtxbEODvF7DTtRlJfPL5wXdSQEDtM2N1ynF6dV6IKTM032rIW0lI2P9KSSXMsowZyYkFlJx2F7Pfb%2FJe31JjLAHIxLUljcj8L5eUtTINGYYIrxv412%2BhHgLJOfW8rhpF1Yx0oExV95ou9ltpORPrGaqFu%2FDu9nf5xwlOTCufBpF8YWpxNzLvp9Okkon57NqZRa3YO6tAsrS4BrjYmOzqiqLizmhbXBJZ1pepQ44LQQ7A6EvVAzLQ4J5qgA%2FfFCNcBo7xJGP%2BOPlL7%2BX5J%2FLqvsaIJ0RG1HqdH%2BVBIgzq5gb%2F%2BY2ZCOoC09AEWL6yGXo3x9tlYKBs7IXPfUTL4iEsnj9Y%2F7FgwWiPbSqq7SlZvzIe9EgTYGY4cyOhY1DSPqleeW9AWO4ne4ckUu337p8TjonFWPIYWBJC1WFdcuMctl30nKlSGBRAg7YMnu8Dkr3UD454rdsCEbduBKcGIX7OFFN5zssb6Ps%2BeQbLvW0D187LmEuhCVqhXnu4Q8YNgMYNamx01KlQJXb2qPmKEVx5DslTMD5Al7bEwn2KLzwLrGDMJrU378GOqUBOhXf7WErojl9HOSNPdLmXUbuXgzcBs4B7oEEThKKgf%2FzQVfYcFm0uNhvFRT%2F8Yu6CLAJU90A7WSBq8i1NoKZLCjy4SGjDm96m063LAVmqX3O4jABiPleWRB5QLIrdpahaGxEVKurMACPdjUJX28ybxdqEAG1kqpkbFNmClDoRDI9lzj1wJRQMQzQRihQInpv9LArQ5CcpPeWEszgd%2BNk6lNmJUMe&X-Amz-Signature=314ba39b4d99a06a0aa313b3f30d2cf1bf52422c21cf22336b29e8a4f4572efa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QNEM64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIF5Df9H51Y6ejr0IJA6mylPMJVgQ6YNUSxsv2D8fuelsAiEAlIvFq4hLLLA56pGjCFTn0TWm7FAkAOlj1LI8PMN7gTQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIishr%2FE5eHQdWbsvyrcA9STEOCWqL%2BkMic%2BJWTjlai2kl1L2kYFzk%2F66%2F2AmZhD47HKkx9IpbgVmZkMSN9TrUCApwYsIOC0xSTFtLtxbEODvF7DTtRlJfPL5wXdSQEDtM2N1ynF6dV6IKTM032rIW0lI2P9KSSXMsowZyYkFlJx2F7Pfb%2FJe31JjLAHIxLUljcj8L5eUtTINGYYIrxv412%2BhHgLJOfW8rhpF1Yx0oExV95ou9ltpORPrGaqFu%2FDu9nf5xwlOTCufBpF8YWpxNzLvp9Okkon57NqZRa3YO6tAsrS4BrjYmOzqiqLizmhbXBJZ1pepQ44LQQ7A6EvVAzLQ4J5qgA%2FfFCNcBo7xJGP%2BOPlL7%2BX5J%2FLqvsaIJ0RG1HqdH%2BVBIgzq5gb%2F%2BY2ZCOoC09AEWL6yGXo3x9tlYKBs7IXPfUTL4iEsnj9Y%2F7FgwWiPbSqq7SlZvzIe9EgTYGY4cyOhY1DSPqleeW9AWO4ne4ckUu337p8TjonFWPIYWBJC1WFdcuMctl30nKlSGBRAg7YMnu8Dkr3UD454rdsCEbduBKcGIX7OFFN5zssb6Ps%2BeQbLvW0D187LmEuhCVqhXnu4Q8YNgMYNamx01KlQJXb2qPmKEVx5DslTMD5Al7bEwn2KLzwLrGDMJrU378GOqUBOhXf7WErojl9HOSNPdLmXUbuXgzcBs4B7oEEThKKgf%2FzQVfYcFm0uNhvFRT%2F8Yu6CLAJU90A7WSBq8i1NoKZLCjy4SGjDm96m063LAVmqX3O4jABiPleWRB5QLIrdpahaGxEVKurMACPdjUJX28ybxdqEAG1kqpkbFNmClDoRDI9lzj1wJRQMQzQRihQInpv9LArQ5CcpPeWEszgd%2BNk6lNmJUMe&X-Amz-Signature=06f2d60122d4b8750d56251024cb48c41237c03128deffdad315b0c0f18757d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQOH34G%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDPkGF7Z9VMEv8w8KD8oRCbwVIirJ5IlV7Fnxivj9F57AiEAo5CMMg5NVykj6jKqkHuybCzFlbkmPl6DXThPBFa%2BcV8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtmnz2zPu4BzoqbDCrcA%2BZCYCpTgzNGWdPRFzDODvIvJcPskASIWpoSZQ%2BhjBJI1k4hNOvXOhwTRWqVZwrDbBReFX3se8vY9xIhJC2m1c8MW3rEnsKgq9ERznaC8u8SCKCpdApcB78hEIjXeqFoLkBRsCBKH8q4CRhLtnnzbP%2BSW%2FTghirZmqJAwWBbHYEdgspJCSFEadPxwwh8YSs2qsUFltOqRUYYD0sLav5i2PHtVi1Sx%2BKDFD7B4dJ%2BD%2FtAV7IuUte8D58%2Bp47hcRQ0Qb6fyTm%2Bh3KKabYoPaiPAucPlpXmGFOqB0qaOO4%2B1rE%2BneV7piIz9PcdPEB1eKUX4Aj0RUvjeirzSIST17d%2B5RVlUpSTlR%2F4UvNyv73cCwDGS5C2jgldc%2F%2Bzjw8K8YJqLSwYiPQH71PX%2BSqSUCi1J70EfdtMhNrShu54RNgttq3v5q%2Fd8uSgIQ3bdbrqDvs7MCEHpqhAU3mZ1eblPqIYS7BYIi7Rds2x%2BPa8tZYrD8hXVWmzNcRSHK2SpOyBxNFqYuwv2hPel98GPNqpEPL459fx%2FOilHOQgQ6OcbJDIV1k9N4ifm6jtkxDlRswlbzKjJp8Cn3ucN9SZvudRCAQvyoo3FUwr1mVYyirQHhXRJ9gfNBVI7iiTQVC5mWK5MMXU378GOqUBy%2Fe6Tw6qKgUiMmjj%2FPFeVcUEzok4kTotIJfVVvSLOsnuruc258hDK%2B2W9k24Gj9AJM3vYD8Bf52n%2FFY7VlmyOMjkfykc4fWI9ZkKdlsKDpQjAFu2SAnhZarAxVd0nokz5on653Ei6lIcjIZpJZ01eo%2BwDBg6bnNNS6ALpmGYzZVsRtJxMexWC3GJ%2Fxovk7D6T74JSLTRJ6ZyRftEA7f9D2V%2FJjTW&X-Amz-Signature=cc29a3158c9501f88bcd26f65d65c061befe43170c532917666d9a5288836bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2SEYGW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBK1na0SsUJq25k7lPHwqyr0tMeWdB5avm5YTub9FTNAAiBsYZ2NWRyFc0OhxWHeZxUktwZA%2BLPgk06RfXcQjBRjUCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJuzggeyvP5hdatq9KtwDqH94UKsmkWU%2BFDsalQ6%2BCmkJcaJlBhb5aBwWr6rHjGwdba%2BIjgqHFDzihRh2WnVYix4sWOwXTRaHF24Gi%2FvmIK6%2F7aegWDVWO7qmHorJstHO%2B7abr4g9q9YUQqt8SMgaUNub%2BsWr9pkV90EMpZIRow6q2okHanqG%2BASgs%2BqhhjEJ5vkClE0AjqcSvKjTXp2aRxVCpq5O2qbrlPfCnih2WZrppZjnvAnU8WITwLSwiqm2EvhfpERNcPHR1ozxxyjAU%2FQ%2BLvMHJI6cnkk17PRePIAAijohxbE9O%2BhBvQSLlHgl9Lw1lFTzmsA8wZib%2BKw2dVp3PrSB2tDQTLXhAS43V4mAyuHBm7sLB08ZNzfQAG2zZgb6AfavvCSR2M1bPpgNexX7Lq8%2BQ%2FF4QnsIlVziLJ15YGfPNoPbYzPBakSuTZXKNg63%2BLE9uIOn4L1PgKVv4UK3huK6CjhxQP%2F20An8%2Bh1QfsHugWQlQbQXiEQ7mJFQbiRbWmpYDU4xv3hXUCXql%2F%2BJkX0fUhRibP9Kc1gSE%2B%2Bvcy3LPflOpBaIFPlAU%2BsNYhN8tZEyRW7BzQtLdbquMSBGbbk2a63mIYlyi9MRUG7SsQxb0bcU8Bv%2BI5KTDQV%2BqxPu1e%2BHCviqpIoww9TfvwY6pgE%2FFPvt2Nn66mMy6Ivrv%2BkSQRJ8f5V8tbqvT1mLuLITMc4Yt2Cecu%2FjAUEQ80Eqn4ttQuqKyCfoFegGHDjKTR%2B9HsoSacDgVCXC1jdVlBjlcBd8bpjr29llcQdOd7rnYYDSeqSKjIvtN4Ny6LW%2FSTUnQbY4eTJLIz56H7%2Fa61r2ANt6UI0YYLjneyoa%2Bq%2BroZASsLKxNrU36mHw%2Fcv%2BNKCAfa6BRmVP&X-Amz-Signature=5896b9bb026411fe23f310e251095b2d7207ecbaf85afcd5d0101e0b23799712&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QNEM64%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIF5Df9H51Y6ejr0IJA6mylPMJVgQ6YNUSxsv2D8fuelsAiEAlIvFq4hLLLA56pGjCFTn0TWm7FAkAOlj1LI8PMN7gTQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIishr%2FE5eHQdWbsvyrcA9STEOCWqL%2BkMic%2BJWTjlai2kl1L2kYFzk%2F66%2F2AmZhD47HKkx9IpbgVmZkMSN9TrUCApwYsIOC0xSTFtLtxbEODvF7DTtRlJfPL5wXdSQEDtM2N1ynF6dV6IKTM032rIW0lI2P9KSSXMsowZyYkFlJx2F7Pfb%2FJe31JjLAHIxLUljcj8L5eUtTINGYYIrxv412%2BhHgLJOfW8rhpF1Yx0oExV95ou9ltpORPrGaqFu%2FDu9nf5xwlOTCufBpF8YWpxNzLvp9Okkon57NqZRa3YO6tAsrS4BrjYmOzqiqLizmhbXBJZ1pepQ44LQQ7A6EvVAzLQ4J5qgA%2FfFCNcBo7xJGP%2BOPlL7%2BX5J%2FLqvsaIJ0RG1HqdH%2BVBIgzq5gb%2F%2BY2ZCOoC09AEWL6yGXo3x9tlYKBs7IXPfUTL4iEsnj9Y%2F7FgwWiPbSqq7SlZvzIe9EgTYGY4cyOhY1DSPqleeW9AWO4ne4ckUu337p8TjonFWPIYWBJC1WFdcuMctl30nKlSGBRAg7YMnu8Dkr3UD454rdsCEbduBKcGIX7OFFN5zssb6Ps%2BeQbLvW0D187LmEuhCVqhXnu4Q8YNgMYNamx01KlQJXb2qPmKEVx5DslTMD5Al7bEwn2KLzwLrGDMJrU378GOqUBOhXf7WErojl9HOSNPdLmXUbuXgzcBs4B7oEEThKKgf%2FzQVfYcFm0uNhvFRT%2F8Yu6CLAJU90A7WSBq8i1NoKZLCjy4SGjDm96m063LAVmqX3O4jABiPleWRB5QLIrdpahaGxEVKurMACPdjUJX28ybxdqEAG1kqpkbFNmClDoRDI9lzj1wJRQMQzQRihQInpv9LArQ5CcpPeWEszgd%2BNk6lNmJUMe&X-Amz-Signature=44989fe3293c0117af346feb2177c10c8a503815067320f60ce64ede6f869003&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
