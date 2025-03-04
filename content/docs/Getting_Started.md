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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A3GBA5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOtGWGj9Mxp5EbPkGwya32gjID2MOc6LS6JNM4MkZVNAiBqFMxXSKHzi%2FSnhh5IyFARocAVN4bvT16Vo1oOLvXhkiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLfYL4Nf1w84GXotKtwDosWfVd9j8dduapAVS4X42pV%2BTxi36%2BrIbStaTa6yMcUKD%2FhdUMcqdXkTRkSA901TEV7kSZZUc%2BdQp7%2FW%2FL2b4Q65KksV2TjMLVp8acxfKhu4vtSmVTx2uh2m2eEp9SbUp9%2F8i34xn7RPJ19M2Rma4jrCgz3MWQ%2Bdu0SKXsqi1Ph8JOZcerL6ulGpSTbOQUvTPN9Oi1hKp5JAK7yaAVaBPZ0pGrReqmx5J7NRaTtNtlMIZ9KFIcOLJ1WeXK6pv0%2BtpaRbF3xTQhNfTqJmLdFRnCv7aSyzwcH8tZnKvO3CwnHR2oOUsNHMn7lkRR0XBFm5N4wJHeWwh8xXvHuMCiLbsjtQJQRmGHobGngUHwKtOBxPttTZrhuMS7Rba26dxKqhw2vs9o2vhRjYgBJCrUeDhy8SPeUV6Vq2YgHVYt79SEOfo%2BPuu8Oy1BZQZKKgs1YFow75t4j%2BOl2rCaFPIignjvnCKS%2BP88wMfAr7iXJCn9WT%2FW3hNwFAKfYcb2yLkUOw4WdLWOTlIJSPZv3YOQuv0Gr0Mc1cTjPwCtCX9k7dLNrw1%2Bt%2F09F4Ayfsybz43lx8e%2Bt1TKB5vdXBrHeG5YSrRx0gQIAYEic5CT7QjSz1KUGUtQsPoeqCNkLEO%2B8w3oqcvgY6pgFuaN1xKTIuRjnukSZDPwI3LRrRNY6oZuh4cWXyEEfuwCRJo50C2THdpYaJ6nWRtI5%2BH16jBgmEAiHCKyduTY0fdHoj39HC%2BirExLGHnRgf3T451UDWW5VAmOeYbq9ZAq2IfbTOYNMxr7DYSVngcejiokuwIvrrPuNSfsAhAlQa%2FlRlnQPtLh4YuyC5YLMSFTf8lIHefv8mTbzd%2BR2ntAcLjy%2BDjH4i&X-Amz-Signature=187b2fb676109d53856bb0fc1ef284987051326bc6c6e471f3ca0970a292fe48&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A3GBA5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOtGWGj9Mxp5EbPkGwya32gjID2MOc6LS6JNM4MkZVNAiBqFMxXSKHzi%2FSnhh5IyFARocAVN4bvT16Vo1oOLvXhkiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLfYL4Nf1w84GXotKtwDosWfVd9j8dduapAVS4X42pV%2BTxi36%2BrIbStaTa6yMcUKD%2FhdUMcqdXkTRkSA901TEV7kSZZUc%2BdQp7%2FW%2FL2b4Q65KksV2TjMLVp8acxfKhu4vtSmVTx2uh2m2eEp9SbUp9%2F8i34xn7RPJ19M2Rma4jrCgz3MWQ%2Bdu0SKXsqi1Ph8JOZcerL6ulGpSTbOQUvTPN9Oi1hKp5JAK7yaAVaBPZ0pGrReqmx5J7NRaTtNtlMIZ9KFIcOLJ1WeXK6pv0%2BtpaRbF3xTQhNfTqJmLdFRnCv7aSyzwcH8tZnKvO3CwnHR2oOUsNHMn7lkRR0XBFm5N4wJHeWwh8xXvHuMCiLbsjtQJQRmGHobGngUHwKtOBxPttTZrhuMS7Rba26dxKqhw2vs9o2vhRjYgBJCrUeDhy8SPeUV6Vq2YgHVYt79SEOfo%2BPuu8Oy1BZQZKKgs1YFow75t4j%2BOl2rCaFPIignjvnCKS%2BP88wMfAr7iXJCn9WT%2FW3hNwFAKfYcb2yLkUOw4WdLWOTlIJSPZv3YOQuv0Gr0Mc1cTjPwCtCX9k7dLNrw1%2Bt%2F09F4Ayfsybz43lx8e%2Bt1TKB5vdXBrHeG5YSrRx0gQIAYEic5CT7QjSz1KUGUtQsPoeqCNkLEO%2B8w3oqcvgY6pgFuaN1xKTIuRjnukSZDPwI3LRrRNY6oZuh4cWXyEEfuwCRJo50C2THdpYaJ6nWRtI5%2BH16jBgmEAiHCKyduTY0fdHoj39HC%2BirExLGHnRgf3T451UDWW5VAmOeYbq9ZAq2IfbTOYNMxr7DYSVngcejiokuwIvrrPuNSfsAhAlQa%2FlRlnQPtLh4YuyC5YLMSFTf8lIHefv8mTbzd%2BR2ntAcLjy%2BDjH4i&X-Amz-Signature=19b9dca532ed348ae585810b17f7bf78133689c038a7084a653de38f3812d8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXPLM7V%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBkm34ezVQfMAx6kUOqSAEHyjsEs%2BOvsD4hVfEPTpAAIgAw3%2F3FvlJJNGCTsGDYZfQWtsBWzBBcSniCs%2F8mt1CwMqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUHy3YteK%2FWPzhMYircA%2FwmZ2gkbM9ZIBU4nlSHfKmDSR%2BJeOlq1PL3YwLG6o1jIWQyg1vkfc3uoHDvV6VwqUxlgBUIm9n4ndhFdb7xMEdKkBjatQFlZUqe7ExcSNzgqPRd75H6AloUcyX6mMZZUIQ8EEa5eP64UC8V9vihY8BGGwZqTiqSzvPgYg2XJcLfGXA60DAK0vgqxK8sGs6MHkokl6d5DMEaL88nUDeB5ed%2BCfDXvOCSOyhEVZl4BhiDCg%2BKKt4QJ%2Bpb4jRLs1HKxOfFJ8zNZOfnoQnRLlA%2F8W0aUoNR3BHB43nCvPkQ6jz3ThQp9T%2BAYl1T46FXIypjVxjAxA7x1ZGTKzt0l9ai6HO%2FG4pSfhSPkyoGwE6P2YFIMvRogVc69suQmxf2VZUn08%2FaPI5qoryR%2F284wt3m6ixyk3MbwYNQWoYwWL9dLYvpLwI3WSZKxroGdRSAAHAC4fwNSi93ErnyR7imRPKT7WiQDQcB%2FLWbzEQFrKYXuvWvgltsq7%2FU4qLPPnpyUC1EPwaU48tyLb8chaLk%2F8MKxbE7Nb2M8STEF5%2B2jgFhlZc6jjGXFbcR7yK0tGoU1qkosxr19cKjvzXp5HBxTokW%2Fd3xlTD5SDrbI%2BNfo4iMgStHoSZBhR44L5Vmxml6MOmKnL4GOqUB%2F6uH1slC%2BBEmxCAWIUiV%2Fw%2FCptMIkrIIJ7%2FottI4zHtdtLPHXUBul4GJorWjRVkRVOSY4HMuWCId17SUSiKut8obB9EB2%2BopgrNYwLodrr0JsakZQx5olX4QjzeRL62tJypmINwe2ZtCqhVrx6fDpMSJZPyPGQdwfDC%2Bpb8skWP9sGC96bxbDItv%2FVQlaxP5x9kW5h6zIQZwqTH7%2Ft4AEqr6kfJM&X-Amz-Signature=c763f32c59230c8a4784c926f51b5574b355bec482aae212ff429d7087941ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MNJNVWU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDteMh48GjsIh0Eiyi%2BeBU%2FkgwDlfNLsQbAqTzRZfab9AiAmlv2geMDgWfsHRysHF%2F4EILDtLmy6aprwWOkYKwQqYiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHinbhuHXQ1rBf0S9KtwDnVPjZRYUHnU7ohDPPyh9MqnLWAlFzsEMFkV2jPi7LxluzB9Hj8Pxq2dPwzv2%2FRQbFWl8zT4LlEx3TGcdMT%2F%2BG5VMIdvlaVfrprn1ZNZ0I0HJs%2BjIo8OgAyXwBV%2BrU%2F3VN6BdLs76w5YUn23oEn%2BqfcagwatRJqYehJdPG6%2BAVV7LPxwxbsdyuCfm%2FSY7lvXKyUxFdKJqustVaIqq053Xx5%2B7Rz9PWHQJH2svC%2F3JoT2Rv7mDyGqj%2FQb1cZMV5%2B1f%2FDHCzT%2Fm%2Bc29WbAaUtORPXRie3RUMuuq2VDNvF9ZxVI5ZHxHpcMXdGO0SWhO%2FKRBBaugCYulW4JXNYNh%2FuMSzei9rC4ruwzN%2BL08VqQalFyB4L171og4ojk0me%2FIR7kaCwNZ%2FZbte2T75F%2BqvqJWzo08hTyY09JO8VfNsrc6sTm0Q%2BruYqTc3C9Sb60l5qtzGUW8cLT9%2FQ9XjVM1j4po6Sih3L2M0%2BVExauvd3ZKXPsz%2BXm2D8Oqg9Ww453kqbFZK542C5LJzScmeg2GAYVNZ8YJIxL%2FzNJk1yIxxSoSjy7nB%2BX9tTu5LxfndPKNURaOcYpuJFM87cjfzotX81Ppz803C8%2FqeusTQbFf61ki%2FI79uwSeWIf63Mm8DlcwqYucvgY6pgFg%2B1bc6%2BauwLpnz5Lyl088qPZPYIE%2FSkXRZgeh2gBXGwfhDbZpwIu%2FyD6Knu9WXNzfYmhsRgDI0RT4Kb9oiAr3ZgGgYKt74%2B1mjIbrunvDC%2F0goF%2BpMKuVvEyFLsvH6ELCTZctn7TPFLvbuHa4kRgHLdP0UbpoipXgbxTY%2F20eKyZIZ43epaNF%2FY3dOICGMFLtrfENmic1t%2Fw5tfBV3Uc8xNKOvHQX&X-Amz-Signature=58c3b7b0414f3ab1b4bc4a80f038eca0e2e14d4bfcdadf460a5de6d042f7e24c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A3GBA5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOtGWGj9Mxp5EbPkGwya32gjID2MOc6LS6JNM4MkZVNAiBqFMxXSKHzi%2FSnhh5IyFARocAVN4bvT16Vo1oOLvXhkiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLfYL4Nf1w84GXotKtwDosWfVd9j8dduapAVS4X42pV%2BTxi36%2BrIbStaTa6yMcUKD%2FhdUMcqdXkTRkSA901TEV7kSZZUc%2BdQp7%2FW%2FL2b4Q65KksV2TjMLVp8acxfKhu4vtSmVTx2uh2m2eEp9SbUp9%2F8i34xn7RPJ19M2Rma4jrCgz3MWQ%2Bdu0SKXsqi1Ph8JOZcerL6ulGpSTbOQUvTPN9Oi1hKp5JAK7yaAVaBPZ0pGrReqmx5J7NRaTtNtlMIZ9KFIcOLJ1WeXK6pv0%2BtpaRbF3xTQhNfTqJmLdFRnCv7aSyzwcH8tZnKvO3CwnHR2oOUsNHMn7lkRR0XBFm5N4wJHeWwh8xXvHuMCiLbsjtQJQRmGHobGngUHwKtOBxPttTZrhuMS7Rba26dxKqhw2vs9o2vhRjYgBJCrUeDhy8SPeUV6Vq2YgHVYt79SEOfo%2BPuu8Oy1BZQZKKgs1YFow75t4j%2BOl2rCaFPIignjvnCKS%2BP88wMfAr7iXJCn9WT%2FW3hNwFAKfYcb2yLkUOw4WdLWOTlIJSPZv3YOQuv0Gr0Mc1cTjPwCtCX9k7dLNrw1%2Bt%2F09F4Ayfsybz43lx8e%2Bt1TKB5vdXBrHeG5YSrRx0gQIAYEic5CT7QjSz1KUGUtQsPoeqCNkLEO%2B8w3oqcvgY6pgFuaN1xKTIuRjnukSZDPwI3LRrRNY6oZuh4cWXyEEfuwCRJo50C2THdpYaJ6nWRtI5%2BH16jBgmEAiHCKyduTY0fdHoj39HC%2BirExLGHnRgf3T451UDWW5VAmOeYbq9ZAq2IfbTOYNMxr7DYSVngcejiokuwIvrrPuNSfsAhAlQa%2FlRlnQPtLh4YuyC5YLMSFTf8lIHefv8mTbzd%2BR2ntAcLjy%2BDjH4i&X-Amz-Signature=a458cb92bd320227c1cde91ad025da20721b07df2638ee61dbd9886ac27813c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
