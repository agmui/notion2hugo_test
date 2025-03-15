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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PKK7UH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6l8A6c6%2FlgSAqiS%2FwCwXJBzzhwogQ0iu2x7I0TY6CAiEAxFOpO5If2HlO0IiKoVVJQRZvzaXygYnnGtPMzPCvu9oq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC9Fy2s4UpfZ4%2FIIoircAyBpH8w8ATXMX6Ney0qLGnt3fhrx8E%2BJZs1opSxIh3NSgYcoxaXu5XzdNPxzD2BjYMU2unY7SEF%2FaAtUCampq%2F29Hs3%2FAgoA6PwekX4gsKmSSL%2FHn0UJnlTEyW3JARejFfqQ7QSMYAR8xzc0A%2BSVi06zMoS56A2Zd0GhYyShRJyIEwMgDMvNzhZQEjHHvtVatr4CbtfSsZy8gjIOzx4FcfauWUpGfGhX%2BAQr22ArmOcualLhrnhwAbOCwTocoY%2BdI9VR5mkj8fN4TVFvG3KPYBA8v5Yqe4jjzq2IpuCj1%2B%2BsklKZyGQR%2BGY%2BmykINhnhVunIFtQb3y3UIX%2FflZQBEQyDRJlWFzi%2BQIPGX2Nq5GleDILgRwsoA99wXxDuGcoPYVdits1G1tNbu9qfVpNCQyLeqfe1hLIk1o9JyYm7E4cNsxTCgnUdyy2Z%2Fq079nZiVQ9viveqQ4GDhahd4ozS15pofRvln7VY%2BqITHpUQWo3SbcWahKS6PxZlQalybYO6QJqu4iyE8%2FY1cVAKZBmDDixIne205EntGxN%2Fi3P7r%2FuVt93piBdbo0sKjpp8kI1bppLhfB5029zbTz0JOhMAD7hoQ6KlV%2Frsqvb8fWAyKSaJM4pqHt%2FEqMqcJOvBMKLE1L4GOqUBYS%2FHBIW6mPCjl59BawyfeAPKUHRTa40mX6%2FtPwGEtCiSN2720cHOPu8CNQsFq3t7HFHS2Wj8FwCje%2FQPPqku5lUesyJ8g%2Bf3BLkV5mkZDoRUIh4NEWxBX%2FPYI99kqi5LZQ9%2B%2Bn52f2dfpANHvWeofmH1JDaFAjxD5DnGy2144frPrT%2BQ6rMaNiD4gJrQaX4oIhjRQSyvugW3uFkH89qVedYNRMxH&X-Amz-Signature=32e720bd0ce47cb5342f58b5a1100aa60d0cc425cb7e7bb43ea77c7f1803facd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PKK7UH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6l8A6c6%2FlgSAqiS%2FwCwXJBzzhwogQ0iu2x7I0TY6CAiEAxFOpO5If2HlO0IiKoVVJQRZvzaXygYnnGtPMzPCvu9oq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC9Fy2s4UpfZ4%2FIIoircAyBpH8w8ATXMX6Ney0qLGnt3fhrx8E%2BJZs1opSxIh3NSgYcoxaXu5XzdNPxzD2BjYMU2unY7SEF%2FaAtUCampq%2F29Hs3%2FAgoA6PwekX4gsKmSSL%2FHn0UJnlTEyW3JARejFfqQ7QSMYAR8xzc0A%2BSVi06zMoS56A2Zd0GhYyShRJyIEwMgDMvNzhZQEjHHvtVatr4CbtfSsZy8gjIOzx4FcfauWUpGfGhX%2BAQr22ArmOcualLhrnhwAbOCwTocoY%2BdI9VR5mkj8fN4TVFvG3KPYBA8v5Yqe4jjzq2IpuCj1%2B%2BsklKZyGQR%2BGY%2BmykINhnhVunIFtQb3y3UIX%2FflZQBEQyDRJlWFzi%2BQIPGX2Nq5GleDILgRwsoA99wXxDuGcoPYVdits1G1tNbu9qfVpNCQyLeqfe1hLIk1o9JyYm7E4cNsxTCgnUdyy2Z%2Fq079nZiVQ9viveqQ4GDhahd4ozS15pofRvln7VY%2BqITHpUQWo3SbcWahKS6PxZlQalybYO6QJqu4iyE8%2FY1cVAKZBmDDixIne205EntGxN%2Fi3P7r%2FuVt93piBdbo0sKjpp8kI1bppLhfB5029zbTz0JOhMAD7hoQ6KlV%2Frsqvb8fWAyKSaJM4pqHt%2FEqMqcJOvBMKLE1L4GOqUBYS%2FHBIW6mPCjl59BawyfeAPKUHRTa40mX6%2FtPwGEtCiSN2720cHOPu8CNQsFq3t7HFHS2Wj8FwCje%2FQPPqku5lUesyJ8g%2Bf3BLkV5mkZDoRUIh4NEWxBX%2FPYI99kqi5LZQ9%2B%2Bn52f2dfpANHvWeofmH1JDaFAjxD5DnGy2144frPrT%2BQ6rMaNiD4gJrQaX4oIhjRQSyvugW3uFkH89qVedYNRMxH&X-Amz-Signature=a37a5d65647337fccf75cb4152a6292e1749482c5aabed665afda87438d8669a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRJDPHG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3%2FrdyAZriSQ%2Flu71%2B8J5I5myIhd4wWapzeaWhAd4WHAiEAtUxaqnPaogdpr7KtW30DfcUy0OkuGYMu%2F9Tq55GhpY4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIORKwPImIDgqS65hCrcA8MF0TPCRuHt4dVntMNyLV%2FsZ8hg0uaRD5DxRoc4sMhQk7fekirPXxLtS4RLSKoO6yXklcF%2F%2F02niap9XwoxcsdBC7NJ1hp7qn%2FsO2fQO19kymUBtlNWZvn9BAxa8szbPcdVi%2FasXpRpvt5GJtwGgZS4tk0HkudVa3HynXaoN37FB22txq9iiNQ9VmoHB50DHUWXXNASAteegg%2Fglcv%2Bl8COt%2BAP%2FJHOsB19OkgZgDPkhQ7rN1IKD8E%2FBlvmI%2BoNrz0Pss7gCUpsbW6ytyKlGzJo4ogkEvHA%2BEZKO2Umhg5h8cwjRv9b8Zdm2A7YDJq2ZY4LjlTpBONXeeRJGHXslbP1l%2FST%2Fya%2F5xfrTV5z5pnYAKjQkRVPQ8W5Gp4FA2InwOx046rxmRFnoOYUwDR7IQK8M%2Fisp78vQlDQ2UtpsVTsXqKst00MiA8oap8VJ946PI%2BVFOrUYtGE%2FVNKEzvgomJRawS1hZYeLIwnfaxTLpx0rPY3zUqu4rGORmorQ5XCh868VfuPkn%2FycUd1dfRij321I1EZRCCakfurBWz9X3H0cu%2BIRPyY7T%2F9K%2Ft9kz5tXN%2FpEwcY4JK8PBh3O3mss51LylRb4iAoIsUp26Xy3ala91nizXi%2F%2FxoCvLC4MInE1L4GOqUB9ZG7PNAd57CV%2FaOe1VSqGwJYb1BI9uKZN%2F2wyRJxUel0DPAdozSPmIRraXCcEfP3buudZ2ZExaPkxWxMB8uGP0FrDzDPkvJlZyrXeLyJ%2F4w4bvzeLRCzrIukVFIVKS2wzqlpNFr%2FYGhkQcdUoVN2AH%2BoqxGNKC6gHRv0F6PtD8KRiZMs%2FJMAdyZMMczmo76PxvUQvjXUPfFhmPFk6CbYybSiLOrA&X-Amz-Signature=9466edcf5918d8c24fa78b0b8397a7b1c208f60970988da46c606c9c37a183f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQUNBEZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiE7xDIMAe%2F2O%2BD%2BI%2F5MrFwmzlpMEXIvg4mYDhLjZYNAiBeIVDIgIZDlJd77uvX5XSs1aIsLBFcRJCiJxYg5xEe0yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMopppC0KiZcyWojqEKtwDzB8%2F8cxMuBzyz4RWLd1jw18UKiLbGsq8cfbms4PXg1qs9BOH0ilKsam2NV4VrQH8caZVswfIQNYzUHH84sjY3SzAJ1j9XW45AvQVjJrf2G7LHvFMfbi0CiuUWOU1vWjBD7Upgn576aBGWPPHRwIIQHDaHIJQEfkonuMXNwmaWUPfz4L4YCQlHcoiJRmap1WTismIUcci9q3312bdEa9xCiyerOIYlKWwOJsrCuvkyTZYIaAw1cmvID5rWzHxyh0QXuPiYeccoCLDen5odUvlz4FhyQfwY8JbZ4uIjKcavKFx6RaBcLM3W%2BBbjp9kVTG%2FTOE%2BjjbVrQTRW54%2FHABu0ovGHHBE6vEQiG601mAeP3dlJTwSqh66ekwu8quC8NPzpdtoyrtQQ%2F6J%2FiWotpo9aVaQUExiVS3GZSvdLu%2BXP5TqeHTeujQjl9hKYOvCG6IFCgnVg59wLRSRNassXRyJkUb78MJrOrNLCSP%2FIW%2BD%2FFJow7Q6SQEf08hPCpNC4UMIVdxB4S7LLTWXEGpEMgpsDTmb4gf65RA7tohVJjPhWUC62Doil3ftDZOpUL7ZidKo7a47uDQBVob9i1U0PFIT4Pu9H0qDw2gjLtNeMKcjyzpLkWLu%2B%2FTm1bsmatAwzcTUvgY6pgFQQfA4DIqHlNRoVbnpYikMmoEG8YSx1on9YJrOya7W7QyRaqRU3fdQ%2BBbIR1hziR855lez8SpYENo%2BVgtj2VDwL4yeqbRJ3KUgDhALzXyd%2BI66kQD5oalgTWunFskQhPQ%2FUyccRKhd6ot%2FIlEq%2Btm0FpqYLBhAgkqQXs1uZ%2BqNsRmIJGdEIAzGX8R%2BqNggib7gpOYkKpUCVuMozmEkkes3K99rGHDP&X-Amz-Signature=df3ae284dab6842dfc401095cec2bce5cec3e9f61561ee55e8ead76be741540d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PKK7UH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6l8A6c6%2FlgSAqiS%2FwCwXJBzzhwogQ0iu2x7I0TY6CAiEAxFOpO5If2HlO0IiKoVVJQRZvzaXygYnnGtPMzPCvu9oq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC9Fy2s4UpfZ4%2FIIoircAyBpH8w8ATXMX6Ney0qLGnt3fhrx8E%2BJZs1opSxIh3NSgYcoxaXu5XzdNPxzD2BjYMU2unY7SEF%2FaAtUCampq%2F29Hs3%2FAgoA6PwekX4gsKmSSL%2FHn0UJnlTEyW3JARejFfqQ7QSMYAR8xzc0A%2BSVi06zMoS56A2Zd0GhYyShRJyIEwMgDMvNzhZQEjHHvtVatr4CbtfSsZy8gjIOzx4FcfauWUpGfGhX%2BAQr22ArmOcualLhrnhwAbOCwTocoY%2BdI9VR5mkj8fN4TVFvG3KPYBA8v5Yqe4jjzq2IpuCj1%2B%2BsklKZyGQR%2BGY%2BmykINhnhVunIFtQb3y3UIX%2FflZQBEQyDRJlWFzi%2BQIPGX2Nq5GleDILgRwsoA99wXxDuGcoPYVdits1G1tNbu9qfVpNCQyLeqfe1hLIk1o9JyYm7E4cNsxTCgnUdyy2Z%2Fq079nZiVQ9viveqQ4GDhahd4ozS15pofRvln7VY%2BqITHpUQWo3SbcWahKS6PxZlQalybYO6QJqu4iyE8%2FY1cVAKZBmDDixIne205EntGxN%2Fi3P7r%2FuVt93piBdbo0sKjpp8kI1bppLhfB5029zbTz0JOhMAD7hoQ6KlV%2Frsqvb8fWAyKSaJM4pqHt%2FEqMqcJOvBMKLE1L4GOqUBYS%2FHBIW6mPCjl59BawyfeAPKUHRTa40mX6%2FtPwGEtCiSN2720cHOPu8CNQsFq3t7HFHS2Wj8FwCje%2FQPPqku5lUesyJ8g%2Bf3BLkV5mkZDoRUIh4NEWxBX%2FPYI99kqi5LZQ9%2B%2Bn52f2dfpANHvWeofmH1JDaFAjxD5DnGy2144frPrT%2BQ6rMaNiD4gJrQaX4oIhjRQSyvugW3uFkH89qVedYNRMxH&X-Amz-Signature=fe4a775f1cbea9d0696a353909ca27d4fc9e2565129c7bf228cfc8507d9f37c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
