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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77D4NHY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXYOO5NCcCEnNLourJ8FLhhcMTLmkPUdaUG1llpXju2AIhAK%2BcMlaGvfOGxVUL4IaxjuaSNzpOJM14ouhCSCqH1TqsKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq6p1EnXm0YeRNpCcq3ANEsUw%2Fl5CXwvAngjGw0RA4GDGKZhd7yUf4m7jtZynVHzrwbMtJLn4O69iGuGqua2zM3VsXVJ4RJ3qveF8N%2FjrPq2XqJMkSZP2uAG2UqAD0VY61yalBZQlubakCvMxArHi8C2LMh53QEdYPQGt5yuhEZhnry6KPIge7g1YsiOOsQT465B%2By7%2BYJKAkuLzYnqUi0U4dyV2a2pfpUE9qc9coZBpajQes9rk6JPkpdKBl3ynbW%2F8FmT%2Fgq8B%2BVsirDw643Bt%2F8wFgyU6jrfkNqgmD1KOHXoVsJaNFVf6koW8u1qBrsjNKiHGuh9YGpeB0DqDkizS1RTE8ARHAejyN0ejh%2BYRCVqBZDO%2B6%2BbdwSnKvvpX4fCXV0RTJ57runLk%2F3Ux4qcnJWwzZ%2BEcIx3FPvNK77RirjC2mxIcGji4L8BCRa%2BQpaL84yyKo7D4lCGyKXDV%2B%2ByrFnObHGtVomWGzntAXzpdQlv4AcYyk9AerGBLHd%2BrX5s7YCrmIS2OX%2F5oyxg4BoSFhe3HVJlmUvMrSHLjLKNK04xuGUf4pbLMLxq81xw%2FKJcJ52BC1weLJ31B8cwwm68ptPyyGETXGTONDzCAoDe8A%2Bnhe11%2FfJ1IAtzWfr3IKJ740VdTIBNkRlsTDT9uO9BjqkAVIir9D2w8SqtDc6wSQ7ksJ%2BMSLlnED4KPlQiBMPyQB1yTmzQDDlxW45gY31CP3M%2Bj2KdBcK6sdNaGR8ffj76NdsB2CjO%2Fj1IM2rKKO1rlSAqTDGsGhC2t3JoSZYdAodOac8f4ilw%2B1hk62X4dpa8BEfKJuxKVCjvgEqCTlmloPtT6oa4KhCEdf8OKtgg0meu4pRzH%2FKHl3XuUJAU2ogfytxyr%2Fx&X-Amz-Signature=f38c5f3644424d6dad9dc93ab77d4d1b3676318ea5a2b7fc20c18d54022556eb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77D4NHY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXYOO5NCcCEnNLourJ8FLhhcMTLmkPUdaUG1llpXju2AIhAK%2BcMlaGvfOGxVUL4IaxjuaSNzpOJM14ouhCSCqH1TqsKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq6p1EnXm0YeRNpCcq3ANEsUw%2Fl5CXwvAngjGw0RA4GDGKZhd7yUf4m7jtZynVHzrwbMtJLn4O69iGuGqua2zM3VsXVJ4RJ3qveF8N%2FjrPq2XqJMkSZP2uAG2UqAD0VY61yalBZQlubakCvMxArHi8C2LMh53QEdYPQGt5yuhEZhnry6KPIge7g1YsiOOsQT465B%2By7%2BYJKAkuLzYnqUi0U4dyV2a2pfpUE9qc9coZBpajQes9rk6JPkpdKBl3ynbW%2F8FmT%2Fgq8B%2BVsirDw643Bt%2F8wFgyU6jrfkNqgmD1KOHXoVsJaNFVf6koW8u1qBrsjNKiHGuh9YGpeB0DqDkizS1RTE8ARHAejyN0ejh%2BYRCVqBZDO%2B6%2BbdwSnKvvpX4fCXV0RTJ57runLk%2F3Ux4qcnJWwzZ%2BEcIx3FPvNK77RirjC2mxIcGji4L8BCRa%2BQpaL84yyKo7D4lCGyKXDV%2B%2ByrFnObHGtVomWGzntAXzpdQlv4AcYyk9AerGBLHd%2BrX5s7YCrmIS2OX%2F5oyxg4BoSFhe3HVJlmUvMrSHLjLKNK04xuGUf4pbLMLxq81xw%2FKJcJ52BC1weLJ31B8cwwm68ptPyyGETXGTONDzCAoDe8A%2Bnhe11%2FfJ1IAtzWfr3IKJ740VdTIBNkRlsTDT9uO9BjqkAVIir9D2w8SqtDc6wSQ7ksJ%2BMSLlnED4KPlQiBMPyQB1yTmzQDDlxW45gY31CP3M%2Bj2KdBcK6sdNaGR8ffj76NdsB2CjO%2Fj1IM2rKKO1rlSAqTDGsGhC2t3JoSZYdAodOac8f4ilw%2B1hk62X4dpa8BEfKJuxKVCjvgEqCTlmloPtT6oa4KhCEdf8OKtgg0meu4pRzH%2FKHl3XuUJAU2ogfytxyr%2Fx&X-Amz-Signature=e44d1d0b12bdcf24653954ca9ecea2057831e6d5a459d5dc104c2e1cfcdf726e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYPP6FN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiq6QtOYlh91nip0EshgwVYoVqHpECMGlcXZxMWmIeOAiEA7BoUjj8qg0awqN%2Ft1S8%2FC5ylV7C2d8cKr9UcsAqcqY8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDqAABSSPP7EkEPDyrcA6G4NPc9WuQd4QkDpyOTewNh6rL9o3eF2SVdHmELWSNb0iyuQHeqUlE1ZFMYB7Kjg2wzv2AceGpNIDBKAfHruaqbfod2FWI2ZyWPxZSLvXohupSjse%2FJ2tcdZPfUTG0xSq%2FhLwYF81DW6gNSCvGV5djtRLSKJ2iFgytqmJdIbOF6%2FpwmSpb5NdaGoFQ%2BIKgHNQFsgMx8LjzTwQLWbadETuF5OspNshFhqrBdeS4wx3Vp%2F3QAQh09mh0cA5c19ZL2dUgbrBd4qL2OBfopE3LQ1MfExoPGCiTa1YGuLHeuZKahdX%2B1FqeBtlggcdTFqnk4usw7YzX8oC%2Bo2%2BwRzK4U5xWd0IRhCryjLO58sfsrQn%2BtKhcUcsC0iREWtiB7Lgikvw2DVRy%2BmtQg7Rz1FN5se%2BBR7M5YMOrbVdZ%2F15%2B4ikwP8WCLNaIToHE5SJgX4i4Ib39C1CqZtRcvohVT7JINyB%2FfCfKwwj4eKAczKkcOSqWx8tf6a5En%2BZN%2FmLt8HTHp0QnS7uA1sS6ZOcu8SPE5CYNYQF768CvYBSuL63Lt16PWyuVK8CQq0XCHrALR4eZiypZ3AHcN5dHFLzF6dV%2B%2Fg%2BCEtpELdvL3bP400pRDK9ylo%2FKEzvgRTPzwdVk3MLX2470GOqUBAxGfnwT94OmDFsUu73DbsA2Y6ugtqpaRYTJ49LgMhVlzf3Me%2FOlTcPrk%2BouYcrSC6SBe99DtR6T4ZNeCEPJBEnTj2PHKFlByvHxdIJRNJtBs7olYQ%2BeR23vGvBed3nnV0gMGajWWEu9725frim0wK5L8YOsnLqahcwFn3U8Hw1Pu11fm5FXWKAuLTA8tCcIN6RlZFgoEhn531Z6%2Footd%2FBUttdTi&X-Amz-Signature=9ead8da2fa8d4688f7cc096a4861d81977d28749f4c73471fc6be00b65c4aa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSDIXTI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZe7dhX%2BaBMUUPlWc0lE6EoXpTtaU8lUC0YNrM4zhESAiAf4tD4oBxbHLMaxNjceLEEdcjz63PCoSOesMxwe0TOXCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbuYc2USmlv7wXiiMKtwDR3YSgchV%2FmcArMY4Ji0DTBYjnS2ZGY4nFhF0pIChLpDGqjwJ9E1GizsnORFWJKCKUfpVm6HnvAx%2FCsX6%2BAFEyugyNpQLEPF0nAh%2B4uHoCqoCFGYnk6Ty%2FPTp7S0nbd0iB98ku2HW9RAb9k%2F12d85u3D9PlBuMk%2BK0S%2BKlA3YryR2S4czd52oiRxLudkdDE7avB%2BN3B6QcsdOwyfk4JWerX2JWg%2BEYw8Jm2tlz93poAx0F%2Fuul2TjprN69srSkBR0cEBp9Rm04ImzclzKBIZuh5Qt7Z3XBTR4SGyCPmSkcc%2BRWtO7lH6yeXArrUZ2SkNUe756FWWGtqN%2Fg2mgpJYHZ%2Bbz61JP15cgX5m3gbsqr2F8TEn9aWTSMOzokYqT4B0N%2FaW8kuRNgEJoZdfN4jGU2Xa4d3EvscYE%2BLwqxhfDCy7WqEjJt2vKJlaSoxpEBfh%2B%2BmzyTH1AOfbEsSZL0KUsa5RF7zv0qbhoobvLPofB0%2Bpjs1%2Bb%2FFLQVj%2FaDM7AVIM4wep%2BzCgth5x4hd5RIS55wj%2F1XhSuTvccyDwY9ww8%2By3%2FfJHSZo%2BeOb2t7Dj7fVdEv%2BVFpma81Y2LIHvCYtquFBUuUQcf2mKn09DB%2BUutyayQ4QfFPqzvd3f6Lw0w3PXjvQY6pgHVnzx2lEStfcGS%2FgqLwMa0P66Uum4lwXfgZ5NtotKMGKAy0V7vND9MHW%2BrOJQz48pIUIQtTDYj3kyOgWkWiDDi2r3wv1RwMo64MX1ZjCXB%2BYEtP6uE9eCHNseUbwDbB8xPU78JmuJN4AOTwS7liurogjV2AyNEz5vh58HJWWtj1UqSazZ4gK0kGUHh7bhbHUsKFX0M%2Bq1eb1VH1Cccl7DkVl46bPOp&X-Amz-Signature=509e2f8b69b70b9c63ad4be7751b9689dcecd5eafc3454cf9d70520422a805ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77D4NHY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXYOO5NCcCEnNLourJ8FLhhcMTLmkPUdaUG1llpXju2AIhAK%2BcMlaGvfOGxVUL4IaxjuaSNzpOJM14ouhCSCqH1TqsKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq6p1EnXm0YeRNpCcq3ANEsUw%2Fl5CXwvAngjGw0RA4GDGKZhd7yUf4m7jtZynVHzrwbMtJLn4O69iGuGqua2zM3VsXVJ4RJ3qveF8N%2FjrPq2XqJMkSZP2uAG2UqAD0VY61yalBZQlubakCvMxArHi8C2LMh53QEdYPQGt5yuhEZhnry6KPIge7g1YsiOOsQT465B%2By7%2BYJKAkuLzYnqUi0U4dyV2a2pfpUE9qc9coZBpajQes9rk6JPkpdKBl3ynbW%2F8FmT%2Fgq8B%2BVsirDw643Bt%2F8wFgyU6jrfkNqgmD1KOHXoVsJaNFVf6koW8u1qBrsjNKiHGuh9YGpeB0DqDkizS1RTE8ARHAejyN0ejh%2BYRCVqBZDO%2B6%2BbdwSnKvvpX4fCXV0RTJ57runLk%2F3Ux4qcnJWwzZ%2BEcIx3FPvNK77RirjC2mxIcGji4L8BCRa%2BQpaL84yyKo7D4lCGyKXDV%2B%2ByrFnObHGtVomWGzntAXzpdQlv4AcYyk9AerGBLHd%2BrX5s7YCrmIS2OX%2F5oyxg4BoSFhe3HVJlmUvMrSHLjLKNK04xuGUf4pbLMLxq81xw%2FKJcJ52BC1weLJ31B8cwwm68ptPyyGETXGTONDzCAoDe8A%2Bnhe11%2FfJ1IAtzWfr3IKJ740VdTIBNkRlsTDT9uO9BjqkAVIir9D2w8SqtDc6wSQ7ksJ%2BMSLlnED4KPlQiBMPyQB1yTmzQDDlxW45gY31CP3M%2Bj2KdBcK6sdNaGR8ffj76NdsB2CjO%2Fj1IM2rKKO1rlSAqTDGsGhC2t3JoSZYdAodOac8f4ilw%2B1hk62X4dpa8BEfKJuxKVCjvgEqCTlmloPtT6oa4KhCEdf8OKtgg0meu4pRzH%2FKHl3XuUJAU2ogfytxyr%2Fx&X-Amz-Signature=85cc0c4e895f286af8a75871c93e94a23ed5437fae89991b1cc984ab30b5a4be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
