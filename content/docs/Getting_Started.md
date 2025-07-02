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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXLHIRZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hjcvZz7eti3VgOXDNxljCqq5uZ3Kp8GMaYO3KFg%2BBAiEAlVl6ACt9TX%2FgPmfnFWA63%2FoQlvmGMt%2BEmCNTf2d2B4YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBPGb0sYa5G6vM1%2FSrcA8EpCQVhCTeiWEI0YzFkNd5TwF%2BZiKmRoLk93xLslQerXh8jttryB5ojXOeh9xcT3jyIZCevUnUnTgXo%2BtZAikVB3EHStJRgKtXKDzo%2BikPv%2F0nVblZkatmmMxWCypSrCCbZC5dZzEzc%2Ftg6bEnluui2fy4ZPVAgp3ouKWj4ieRff2jxT8%2B4TGfcBUaHFMjBG4fDA9HYyos6SK9r6yV5LgthKE2jmFU7920bYC1mlU1pW%2Bqfjb%2Bt5dMXh3chDt0siVfXs5PWdI6TGhScJn0APvbDQjBIeZfRlAYcMXz4%2Fb8cedzvJiSRC5Kh3hd%2Fr%2FdGRkIhHTfLWqaB8A1gF%2BsbQ1twTTmDaTqS0zwFUGTobwALGoYw3789rTtD5psvsj3tYsznB9c1GpcARv1vKuHhE%2BxHyE34M2Y%2Bc3pb4SG9x2csNUyuhHi4Cj7UqJi%2BFnyel5a9dUwaaw4VLmZ5ycGzMZAlpsqmzYbq3GOiGZnCkiQ4DrozYpkhxKuvobBHuRMVAilgyRG9U%2F5SocGkvsbFXYdvkYFHqllaVj5H%2F18crYOyw1pEUiPg3cKh2fYmC78KixZfxSoCcZFLp14Bp3%2F3WzyK%2FC6%2FJlCG4cUD8Kk%2Fj1%2F4oLZXgOjZXuPICDTIMLLaksMGOqUBJMkr%2FdKABJ44mGutxoCphhmtZWji11CMz2Y3k1ZRtLZKZZlGue9eQKQ%2FU5OoacEK3HlnlKgHXG0dv4pGJWID1c1vWXXPv5%2FqMAT7Q3NQ7ruG3ss59NZUUzusSBCymj7451hjgIWJxnNw5gVITdF8IN%2FHmin8N5%2F2cSlRo9nHO6Il%2BiR8tGTJYou1SdEagswIy0MfGLdAhysLbNRMUT1V5lIkmWLS&X-Amz-Signature=31e38cc61df85a34b9b1923990b5cc2de197c74a859f0579a35d6253fb4d364e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXLHIRZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hjcvZz7eti3VgOXDNxljCqq5uZ3Kp8GMaYO3KFg%2BBAiEAlVl6ACt9TX%2FgPmfnFWA63%2FoQlvmGMt%2BEmCNTf2d2B4YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBPGb0sYa5G6vM1%2FSrcA8EpCQVhCTeiWEI0YzFkNd5TwF%2BZiKmRoLk93xLslQerXh8jttryB5ojXOeh9xcT3jyIZCevUnUnTgXo%2BtZAikVB3EHStJRgKtXKDzo%2BikPv%2F0nVblZkatmmMxWCypSrCCbZC5dZzEzc%2Ftg6bEnluui2fy4ZPVAgp3ouKWj4ieRff2jxT8%2B4TGfcBUaHFMjBG4fDA9HYyos6SK9r6yV5LgthKE2jmFU7920bYC1mlU1pW%2Bqfjb%2Bt5dMXh3chDt0siVfXs5PWdI6TGhScJn0APvbDQjBIeZfRlAYcMXz4%2Fb8cedzvJiSRC5Kh3hd%2Fr%2FdGRkIhHTfLWqaB8A1gF%2BsbQ1twTTmDaTqS0zwFUGTobwALGoYw3789rTtD5psvsj3tYsznB9c1GpcARv1vKuHhE%2BxHyE34M2Y%2Bc3pb4SG9x2csNUyuhHi4Cj7UqJi%2BFnyel5a9dUwaaw4VLmZ5ycGzMZAlpsqmzYbq3GOiGZnCkiQ4DrozYpkhxKuvobBHuRMVAilgyRG9U%2F5SocGkvsbFXYdvkYFHqllaVj5H%2F18crYOyw1pEUiPg3cKh2fYmC78KixZfxSoCcZFLp14Bp3%2F3WzyK%2FC6%2FJlCG4cUD8Kk%2Fj1%2F4oLZXgOjZXuPICDTIMLLaksMGOqUBJMkr%2FdKABJ44mGutxoCphhmtZWji11CMz2Y3k1ZRtLZKZZlGue9eQKQ%2FU5OoacEK3HlnlKgHXG0dv4pGJWID1c1vWXXPv5%2FqMAT7Q3NQ7ruG3ss59NZUUzusSBCymj7451hjgIWJxnNw5gVITdF8IN%2FHmin8N5%2F2cSlRo9nHO6Il%2BiR8tGTJYou1SdEagswIy0MfGLdAhysLbNRMUT1V5lIkmWLS&X-Amz-Signature=d6a6bae814ebfc3ec7b54a1b5c8878740f969a69e470d7ddd77a5046ce9a55a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXLHIRZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hjcvZz7eti3VgOXDNxljCqq5uZ3Kp8GMaYO3KFg%2BBAiEAlVl6ACt9TX%2FgPmfnFWA63%2FoQlvmGMt%2BEmCNTf2d2B4YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBPGb0sYa5G6vM1%2FSrcA8EpCQVhCTeiWEI0YzFkNd5TwF%2BZiKmRoLk93xLslQerXh8jttryB5ojXOeh9xcT3jyIZCevUnUnTgXo%2BtZAikVB3EHStJRgKtXKDzo%2BikPv%2F0nVblZkatmmMxWCypSrCCbZC5dZzEzc%2Ftg6bEnluui2fy4ZPVAgp3ouKWj4ieRff2jxT8%2B4TGfcBUaHFMjBG4fDA9HYyos6SK9r6yV5LgthKE2jmFU7920bYC1mlU1pW%2Bqfjb%2Bt5dMXh3chDt0siVfXs5PWdI6TGhScJn0APvbDQjBIeZfRlAYcMXz4%2Fb8cedzvJiSRC5Kh3hd%2Fr%2FdGRkIhHTfLWqaB8A1gF%2BsbQ1twTTmDaTqS0zwFUGTobwALGoYw3789rTtD5psvsj3tYsznB9c1GpcARv1vKuHhE%2BxHyE34M2Y%2Bc3pb4SG9x2csNUyuhHi4Cj7UqJi%2BFnyel5a9dUwaaw4VLmZ5ycGzMZAlpsqmzYbq3GOiGZnCkiQ4DrozYpkhxKuvobBHuRMVAilgyRG9U%2F5SocGkvsbFXYdvkYFHqllaVj5H%2F18crYOyw1pEUiPg3cKh2fYmC78KixZfxSoCcZFLp14Bp3%2F3WzyK%2FC6%2FJlCG4cUD8Kk%2Fj1%2F4oLZXgOjZXuPICDTIMLLaksMGOqUBJMkr%2FdKABJ44mGutxoCphhmtZWji11CMz2Y3k1ZRtLZKZZlGue9eQKQ%2FU5OoacEK3HlnlKgHXG0dv4pGJWID1c1vWXXPv5%2FqMAT7Q3NQ7ruG3ss59NZUUzusSBCymj7451hjgIWJxnNw5gVITdF8IN%2FHmin8N5%2F2cSlRo9nHO6Il%2BiR8tGTJYou1SdEagswIy0MfGLdAhysLbNRMUT1V5lIkmWLS&X-Amz-Signature=e431174ca476f56215b949933c607f89ead278a192880e99eb8c671787388169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BMFXT3X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw2zaYud5Rv3E6%2FutJmlkjIjKA33irLT7jkXt3ZZUH3AiAFi3Nwlvu5KJK8IlAo%2BqbBfHbW%2B1HL4abDyoBFqx%2BDQSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjZwShQOFG%2FuN%2FoeKKtwDa41ETVXvcxMuqYTdrtpM8tHh2zMLH6lKR6ehVF8wzAz1MtsPVmB%2FwLAkU0sct25J5TzHvCjRG%2BSE7c1QDMp%2FZNNquuglm8W6LWDnJIc0wlb9r%2BgEkAebq3003CgbAeQYdT7qRM4y4Sf%2F3gQKOvJoq4K%2FmMF4nTwEXYbqGRibQGOHHI7gz0tOh0%2Fo6CPp9kSzUExebdca7O42Uc9OXY7xi5izuru3sBfXr69eLi4YBKFMoK1rdGeX4wQNVO8rl3eSl37xwaunxuRIgBkr%2FUvzmqMqLs0T%2F4jmOQfhAiZJPAbHb%2BSeg6lbCim8uLdfQ3n%2BMGZ5c%2BQTciwtgAa6SNHbCR7O5KRjeYGuNwRYQ2A8L7uK39R0QMAUw8NscpihxK91P82gnLATlInaDPUpuY3snHzyaJYF3a7IpO5rfVqrXUOgH1ISpPck%2Fp8TfU6uw8bXzCA%2BbiVzUrcm8p07S7tShvfnDYIjmdRSc2g9VIEqgSeJNZrIcr29mEZTHz7cPS9hiVEtUNVwucfxNiuNS7qypLW%2FuiLSATmJXcVEDmjAEOw0eBsqxUvQnkIXNgG7wfGZUTcKODMzWuG8GUQVE8E%2FWd6AgIWtv9ycarCaccXNFGaLwqPbrd1PKQNTZTcwo9qSwwY6pgGspptNgQH06OSQNONcGpPABiTIxaDSiVzPYEFqizd5APh%2F1n%2BMbjZricI44N7JpEpspy7eIIb3Mp2UKz9xc7C7PIQ0GW%2Ba5l5X%2FPhv85gL0ByT2sE%2FI3JzbHD20aDQzukE%2BfCDnhKrp55B%2F7qyFmhc5QA8taEGW2997yE%2BaTcqhPrhYsC4mSeh0jFj9W6%2Fgrsgiq85Np2Hgw%2F5wOtLkNqytxDN0s%2FT&X-Amz-Signature=f0356a15b3c8e43172f19720a727ebcb5f1509b30f2e3b5bee2baf7f477e8125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVQF4NI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQqdhkihvPOwuAddI5x6OyJhwKoE5xNrwq5TGMjywSgAIhAMTnN%2FhhqAjgt%2FamDsBmCywaT%2FKacnpv%2BybGsslaKgU%2BKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweSFWNKRAXYVhg11Mq3ANcNfzwpco3KrgPnJdr0yTlJt%2Bcnsfwf7je%2Bz%2Bbj%2FwdEmc%2Bespkecu6nsNzReYV5kByLPULIkZDqZKry4c0%2FiDFAZnuNILvOyrudGio8lb4w7d38v39FqOqRHwuMlGnNuftajnwiar%2FmMlnXgwApGpG4iE888A4yxfQGhJwQongOxWuxRdm5vL1k%2BFftjaWgoOUE5F6XDJXWjr2KSkhUuKgYkk4Lw53LbaOKZkX6kdWh1cxlCmZUZ4Rt1Mlm0phAISbaNz%2Fpnn5PoXWqw35Vqo%2FmzB%2FG2zHJ5EspmWVf%2FqvZehLvdBidH1MFxcfE2uwz41yuadNcgehQE8VOq1hGLXkLhPBDV6IWGULvrR5wNsKBZpIqrrOKtSI6TsS2kuj7XFk%2FqCR5xQG5Mcj5dQyn56Tdl3aqbLWXjSQ9bds8dJyeG8vK3kCWCKmbhr8lQo0PQOT75px7biZDvwGAEJwJwUYX%2BEGHC46eStrIbSGaRwIM4UsYQiaBEGtpm4U5x50NFRNx9e3k2u1LTwJpwEw3wasR8AdIhSD%2BTtwTcgzAVhVSQH1%2BhFjaJs2%2B6DMFFdfvBn7U2H7hvG%2BHZWrjsWpsoYXcT5Bf8Au3IHwtTFDftItj%2FymYwZ%2BEQAz%2BzTghDCM2pLDBjqkAQcTbwYYtb%2BvHbbH0fnrvRWbVrDYSIyrPH619KWCG5DLOVbRdYDyxr%2BNjtohMftzdc0AXaDrSSDwH8gD74JjtODfHD8AtQuNQ7aheniNjFoy0b0SR%2FsyFHrK7JTIry%2BkvVElwjEXsx4pb3YR4sUExuaaxctJeam3u%2B529H010I9cUfknk4DBosYmYiVthuO9D4QIcqB5SurPbv70WkCSEl3toOG%2F&X-Amz-Signature=d35c9b4017b6f0b7de17d1fa5f7c8b08066bdb38d6132fee4e019285461fd9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXLHIRZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hjcvZz7eti3VgOXDNxljCqq5uZ3Kp8GMaYO3KFg%2BBAiEAlVl6ACt9TX%2FgPmfnFWA63%2FoQlvmGMt%2BEmCNTf2d2B4YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBPGb0sYa5G6vM1%2FSrcA8EpCQVhCTeiWEI0YzFkNd5TwF%2BZiKmRoLk93xLslQerXh8jttryB5ojXOeh9xcT3jyIZCevUnUnTgXo%2BtZAikVB3EHStJRgKtXKDzo%2BikPv%2F0nVblZkatmmMxWCypSrCCbZC5dZzEzc%2Ftg6bEnluui2fy4ZPVAgp3ouKWj4ieRff2jxT8%2B4TGfcBUaHFMjBG4fDA9HYyos6SK9r6yV5LgthKE2jmFU7920bYC1mlU1pW%2Bqfjb%2Bt5dMXh3chDt0siVfXs5PWdI6TGhScJn0APvbDQjBIeZfRlAYcMXz4%2Fb8cedzvJiSRC5Kh3hd%2Fr%2FdGRkIhHTfLWqaB8A1gF%2BsbQ1twTTmDaTqS0zwFUGTobwALGoYw3789rTtD5psvsj3tYsznB9c1GpcARv1vKuHhE%2BxHyE34M2Y%2Bc3pb4SG9x2csNUyuhHi4Cj7UqJi%2BFnyel5a9dUwaaw4VLmZ5ycGzMZAlpsqmzYbq3GOiGZnCkiQ4DrozYpkhxKuvobBHuRMVAilgyRG9U%2F5SocGkvsbFXYdvkYFHqllaVj5H%2F18crYOyw1pEUiPg3cKh2fYmC78KixZfxSoCcZFLp14Bp3%2F3WzyK%2FC6%2FJlCG4cUD8Kk%2Fj1%2F4oLZXgOjZXuPICDTIMLLaksMGOqUBJMkr%2FdKABJ44mGutxoCphhmtZWji11CMz2Y3k1ZRtLZKZZlGue9eQKQ%2FU5OoacEK3HlnlKgHXG0dv4pGJWID1c1vWXXPv5%2FqMAT7Q3NQ7ruG3ss59NZUUzusSBCymj7451hjgIWJxnNw5gVITdF8IN%2FHmin8N5%2F2cSlRo9nHO6Il%2BiR8tGTJYou1SdEagswIy0MfGLdAhysLbNRMUT1V5lIkmWLS&X-Amz-Signature=bd58a306f7be78bfbf0bf20c2d401517dcf53e0ad96caab98837358d644993ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
