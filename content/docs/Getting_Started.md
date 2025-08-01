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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMNVLX2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKnRgxfNd9vDY8z6SKRNCUlyP5VXbCoGb2QawHe0H%2FwIgW3r%2FS49D0Ofanq2WAoJwGjZk7EcNR2fkunxHll4CHiMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTHb%2FreAkvX88OagircA5MZhYbgb2GlvEWud%2FyGM636yUijxzGGdYwTWLZ%2FfIfZHsh1WOATLlc7Rl%2Fl2ePPo7lyyvtsq9E21tmhBkSpxaUKtt0hsveZpNdyiExzhfysAQGndjZ79xc4ET%2F4OWN9SOUN7DWkbbj2qdPB7uxCxvg5cgplflJScBHd7osb5Yv%2FywdMANVAYkkBNHuVy1kY8LtGlu%2F5caYvo%2FR7zo2tfcoaD%2FGTF6AbY8ij%2BzFwuyxzUVlOo4IxgAyjASRL6%2FxvWNeyAz18txTcHu9Enyj1Xi%2BT6T1f8STxsDBvdqWrQtnXZhX8HRPPV%2F5jtrchw4bgl95iRocAvLc8BbWWYxmLvz%2FE9%2Fu7NAhPWeykvpMsT8%2FzXy%2FDtVxfRnnT3JN65ww6NJKOV73P7yZT7dr2bhKF5wu0yqLLTca82b0BOKLrnUPMS6gLfNPBXR1YP3XKz2ThuL%2B0ISHZNnM0LFpxernyYT7Cgsvo4if0lTctOgOCyThT%2B8CYJCp2Fdbw402UH8j6LYQ%2FfVirPsujwZ6w%2Btc4aazLdT5%2FBwuUmByuhnYn6tlpndkQwAu5tTtoi7gVYXLEgTae4S3%2FPdDHjieTU2VHmJTFyjxpWZ7rXfCZeSkC1pIWji8F8jYput%2FP0gVRMIT7s8QGOqUBMhAERUMeVyRMQHIZ6kOehVIPn%2FXvNTh13lArRkLIdCnnXBim4wUq4SBzIc2k7ga8mO3vKWFoCjQs9AeAfpN6kjl%2FbDDBqO2%2FTYg%2BIc0Fi9F6igXBUlIO%2B5PoakuxHU%2Byg9dAOaPIDryC07xi8TCnR3uouw63SIa9OxKCepVrmH3VVOD0Ao21G228%2FB3Rd4YKI4yb2t6EVnMMQgEdb1XgXTAYrgAN&X-Amz-Signature=442de1868a4509d041d8fc2ae35d32e16fce00511b6cf8c6a7ef5690754db27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMNVLX2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKnRgxfNd9vDY8z6SKRNCUlyP5VXbCoGb2QawHe0H%2FwIgW3r%2FS49D0Ofanq2WAoJwGjZk7EcNR2fkunxHll4CHiMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTHb%2FreAkvX88OagircA5MZhYbgb2GlvEWud%2FyGM636yUijxzGGdYwTWLZ%2FfIfZHsh1WOATLlc7Rl%2Fl2ePPo7lyyvtsq9E21tmhBkSpxaUKtt0hsveZpNdyiExzhfysAQGndjZ79xc4ET%2F4OWN9SOUN7DWkbbj2qdPB7uxCxvg5cgplflJScBHd7osb5Yv%2FywdMANVAYkkBNHuVy1kY8LtGlu%2F5caYvo%2FR7zo2tfcoaD%2FGTF6AbY8ij%2BzFwuyxzUVlOo4IxgAyjASRL6%2FxvWNeyAz18txTcHu9Enyj1Xi%2BT6T1f8STxsDBvdqWrQtnXZhX8HRPPV%2F5jtrchw4bgl95iRocAvLc8BbWWYxmLvz%2FE9%2Fu7NAhPWeykvpMsT8%2FzXy%2FDtVxfRnnT3JN65ww6NJKOV73P7yZT7dr2bhKF5wu0yqLLTca82b0BOKLrnUPMS6gLfNPBXR1YP3XKz2ThuL%2B0ISHZNnM0LFpxernyYT7Cgsvo4if0lTctOgOCyThT%2B8CYJCp2Fdbw402UH8j6LYQ%2FfVirPsujwZ6w%2Btc4aazLdT5%2FBwuUmByuhnYn6tlpndkQwAu5tTtoi7gVYXLEgTae4S3%2FPdDHjieTU2VHmJTFyjxpWZ7rXfCZeSkC1pIWji8F8jYput%2FP0gVRMIT7s8QGOqUBMhAERUMeVyRMQHIZ6kOehVIPn%2FXvNTh13lArRkLIdCnnXBim4wUq4SBzIc2k7ga8mO3vKWFoCjQs9AeAfpN6kjl%2FbDDBqO2%2FTYg%2BIc0Fi9F6igXBUlIO%2B5PoakuxHU%2Byg9dAOaPIDryC07xi8TCnR3uouw63SIa9OxKCepVrmH3VVOD0Ao21G228%2FB3Rd4YKI4yb2t6EVnMMQgEdb1XgXTAYrgAN&X-Amz-Signature=8e1c1255c6ed29313faf8ce42c31fc85dffc516b057cf46df3235e07291fdcc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMNVLX2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKnRgxfNd9vDY8z6SKRNCUlyP5VXbCoGb2QawHe0H%2FwIgW3r%2FS49D0Ofanq2WAoJwGjZk7EcNR2fkunxHll4CHiMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTHb%2FreAkvX88OagircA5MZhYbgb2GlvEWud%2FyGM636yUijxzGGdYwTWLZ%2FfIfZHsh1WOATLlc7Rl%2Fl2ePPo7lyyvtsq9E21tmhBkSpxaUKtt0hsveZpNdyiExzhfysAQGndjZ79xc4ET%2F4OWN9SOUN7DWkbbj2qdPB7uxCxvg5cgplflJScBHd7osb5Yv%2FywdMANVAYkkBNHuVy1kY8LtGlu%2F5caYvo%2FR7zo2tfcoaD%2FGTF6AbY8ij%2BzFwuyxzUVlOo4IxgAyjASRL6%2FxvWNeyAz18txTcHu9Enyj1Xi%2BT6T1f8STxsDBvdqWrQtnXZhX8HRPPV%2F5jtrchw4bgl95iRocAvLc8BbWWYxmLvz%2FE9%2Fu7NAhPWeykvpMsT8%2FzXy%2FDtVxfRnnT3JN65ww6NJKOV73P7yZT7dr2bhKF5wu0yqLLTca82b0BOKLrnUPMS6gLfNPBXR1YP3XKz2ThuL%2B0ISHZNnM0LFpxernyYT7Cgsvo4if0lTctOgOCyThT%2B8CYJCp2Fdbw402UH8j6LYQ%2FfVirPsujwZ6w%2Btc4aazLdT5%2FBwuUmByuhnYn6tlpndkQwAu5tTtoi7gVYXLEgTae4S3%2FPdDHjieTU2VHmJTFyjxpWZ7rXfCZeSkC1pIWji8F8jYput%2FP0gVRMIT7s8QGOqUBMhAERUMeVyRMQHIZ6kOehVIPn%2FXvNTh13lArRkLIdCnnXBim4wUq4SBzIc2k7ga8mO3vKWFoCjQs9AeAfpN6kjl%2FbDDBqO2%2FTYg%2BIc0Fi9F6igXBUlIO%2B5PoakuxHU%2Byg9dAOaPIDryC07xi8TCnR3uouw63SIa9OxKCepVrmH3VVOD0Ao21G228%2FB3Rd4YKI4yb2t6EVnMMQgEdb1XgXTAYrgAN&X-Amz-Signature=21b89765c4cc0d8859d3c6946aebfe1fbb1047d58c8102b446ab9fc8225f2f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGO4GJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKtVJJpIbmDvZiw7UMKsH6f%2FbV6AEVe3iAiubUJeGDfAiEA5PIMhyHMjBSNctIu1cftRZyhHyPkO8Q%2Bx3%2BxBp%2FDEX0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsNwtnTlnxHzHaVkCrcA8wc2CIMB%2BwULs1e8dR7Ax84mSV6NK2BcHPBmekVdO%2BO6e3YLIdupk0SN%2BeXh%2BeAL%2BPdHs6LLcuqio5GmBHlPcb1IG7uj04lg69D8Kj7U3vuroXxt3khTTDJc2hpWkZBbQNJ%2FsdD8ACeNvB%2F%2F2U679z2vUFgTbF5djNYrCA8VExwnwMAx6UoZG14QCeI1uW3%2FXrEofzhN7ImIqLUCLyUzc4wizSqUCqd5g%2BdeBjwXogN1ym0xCBUSmCEfat4xhVS42%2FwdpQPotOj4eQAuJExK8ITRf2A5tPyLlj%2BHGCIE8nkJt%2FJ6dDKfr1Wb9B%2FRNWXAPRoen7o1qtiZyXSFJYvMuFMgMjBsLID0yFR4lW8uc0D%2Bf4Llk%2FILMV3VsVORHk6pxTeMHszedvalL2BfmFQROYYD%2B%2FgZACAgzyh2%2F9cnxwPiMLg3hRBy1Q6g8DWoFOTI1rOs64Mq1Llus7o6jHfrMMLRWhxHCw2iWyUJdilxXVTvYxS8Sn9%2F5%2FTViSNhMtl2cJoxEvDOCw1Ol5IA9sFCONFzmHVD6RzGB1c1zvmtqKiIQu%2FDJNa2DNzWRk4H3lFNAtniBRqcwo86uIbFeoGDv5Yk9Q396zjfXc61mm1JOjRaKnEtmP6hN2FnOu3MPT6s8QGOqUByK%2BdjXrfs%2BbSdY4W2i6ZzlWfpBFXd9lHhcSubRdzRvbv878%2FNYZINV7jQdy1KXjBl5nZa22p12YwSKUf4umdrSew2iDujUlTXLzyTGzwtS7BFi0HDQpjvCmVdFu82TVikQ%2FJV0HZVmqO66yUeW1WsjVGnggSwtV9HkR7Do0GfS2%2BMydUdi4XBo4UUXx9SAbTw171UcCXn8QbgWxffYz2yEM5o5ox&X-Amz-Signature=cbeeaeac1fd467c96549c6b9c8d02a9f0800498419a054c51fa90b2b8d8a592f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56XIVEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaO4YItpxi00C%2BEvMoedfSCm5fURHntiYoEpMsuK8M6wIgdNAjda8ckTq2zAQGAhSu%2Bn9S%2FUyQX73OP37fUums9WQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7e2sx01JTYqb6XpyrcA%2FHj3xxje5JDxJc57wEjKs6n%2BQbpLj3anw7JmMBwt3C22ehTiqGN0XYeYDklsDQ4Y267yhs8L0ouihccqgRZH28TAlA%2BG8UNhQpF4qQH9aF9cxfJttvvHXCrggPnmliGVx13C%2FxBgo41Vst0A1IBazoacNRUac%2FGIH6h7xsBXOWh1lAoxT4fMdkxX5y5l6mw%2B%2FmEay8Pkloxns7Q6MRvP6Loy%2FCxWy3LS8TsaqN5%2BVnolewoFiJay7eMeQHWQ5LdifZpnLLakg6FwBXbP3X4413RPpFdSky7BCWlZASN6AHwjhwUc%2BwpCbYrAkkonJVIjmgB5yuVLau4mpn9JVOEY%2Bx3ER1wk0D64HXU%2BAhyNxCMmodS1p8wE0rEOcfZL%2FBfESQf%2FVWfURuBaApb7ru5dRUf8tr7B7dYcd2Zr%2B2uE%2FzSDVxX8NGiX20Eqfuh4g3gEzuX9cTlvD4Q%2BnUW7%2FzlfmKVqTm8qN17hm4PdgnycKBmzn0LUz7VRVM6oWMKLPPYb8Oirsv%2BeJbFGMvLucROQwi4ss1wuS2DGXX%2FEY7nj8grXuAm25yLWDEQPbYa4Br69WedK3tJdDwchyv0Npal2nAziuTPpuYXGBZvHQUssFE8sXXVWhDiPWe7%2Bl9lMPz6s8QGOqUBisSR8muZKWCBVj5bm5PTpEqqmeGwoUF5QicSOHLXgucnDUFbdSz%2B9vESQYO39mD0PZw4lJBXeuZMjXf31lXHrGfmj6uUFWfcVLpzWuNepz%2BPoDPIjiF1K5fsgcuFFfDjYPwJVV5QMXbc%2BiFTyt%2BeJxaiYXy2WUn4v6TqF95gFAw0TGjGJwIyNfNGuJ41jeOmbqS3L9Ya%2B0Tb6JPM2r%2B9xE1oscJt&X-Amz-Signature=fdd7138b1cecf96dec83a566cf031297fe6a63eeb5e4b78aa4f09855fa16f6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMNVLX2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKnRgxfNd9vDY8z6SKRNCUlyP5VXbCoGb2QawHe0H%2FwIgW3r%2FS49D0Ofanq2WAoJwGjZk7EcNR2fkunxHll4CHiMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTHb%2FreAkvX88OagircA5MZhYbgb2GlvEWud%2FyGM636yUijxzGGdYwTWLZ%2FfIfZHsh1WOATLlc7Rl%2Fl2ePPo7lyyvtsq9E21tmhBkSpxaUKtt0hsveZpNdyiExzhfysAQGndjZ79xc4ET%2F4OWN9SOUN7DWkbbj2qdPB7uxCxvg5cgplflJScBHd7osb5Yv%2FywdMANVAYkkBNHuVy1kY8LtGlu%2F5caYvo%2FR7zo2tfcoaD%2FGTF6AbY8ij%2BzFwuyxzUVlOo4IxgAyjASRL6%2FxvWNeyAz18txTcHu9Enyj1Xi%2BT6T1f8STxsDBvdqWrQtnXZhX8HRPPV%2F5jtrchw4bgl95iRocAvLc8BbWWYxmLvz%2FE9%2Fu7NAhPWeykvpMsT8%2FzXy%2FDtVxfRnnT3JN65ww6NJKOV73P7yZT7dr2bhKF5wu0yqLLTca82b0BOKLrnUPMS6gLfNPBXR1YP3XKz2ThuL%2B0ISHZNnM0LFpxernyYT7Cgsvo4if0lTctOgOCyThT%2B8CYJCp2Fdbw402UH8j6LYQ%2FfVirPsujwZ6w%2Btc4aazLdT5%2FBwuUmByuhnYn6tlpndkQwAu5tTtoi7gVYXLEgTae4S3%2FPdDHjieTU2VHmJTFyjxpWZ7rXfCZeSkC1pIWji8F8jYput%2FP0gVRMIT7s8QGOqUBMhAERUMeVyRMQHIZ6kOehVIPn%2FXvNTh13lArRkLIdCnnXBim4wUq4SBzIc2k7ga8mO3vKWFoCjQs9AeAfpN6kjl%2FbDDBqO2%2FTYg%2BIc0Fi9F6igXBUlIO%2B5PoakuxHU%2Byg9dAOaPIDryC07xi8TCnR3uouw63SIa9OxKCepVrmH3VVOD0Ao21G228%2FB3Rd4YKI4yb2t6EVnMMQgEdb1XgXTAYrgAN&X-Amz-Signature=b7d2d81ed57c501fe8c29ce5b4454bab6df26921f8b8a9bb438f496c7d47cf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
