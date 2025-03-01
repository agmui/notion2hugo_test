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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTCE55K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2BdHbVzjgpinmfYZrRr0h8YhJ%2FfpzK%2FqhStOToQM5HWwIhALYgS7BlqwTT8mnhCVL6ugY1CJp6GvB%2BaVjtQEhhl1HXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8iXkiHl9RkHQDR%2F8q3AM6T%2FxlNy694CFTIrPfRUlJmfWc9g8Ry577W%2FJ6ZVzLIisE8wpZoo5C113esju3zp6jDQqXIC8%2FDfJo3DKqSHteEJgMpafoyfU2ZcvdVmIztHSYiIY1LwYwJ7NMFN%2FGRC6HasbdFUCJKw8J6XsTuHhn7%2Bw9NQbiMH8o138f8rZe0y%2FTnl7NNf6SDGDxn9h8Dvln2%2F51goAnR%2Bcc%2BWySyH%2BYDsMFbs0MV2eNb9wPE9Xwh4PLVnHG%2B8Y4UzJfWZsutYuPPN%2BPDdHhvKI5IAV0rJ73ks4ULcKyFji0h%2FYV1XWEtfEokiQzxMY10r26aduz7n09yYr6XYeaZViyu5FEvJFBugoSY510sqNBjobKsLhvHU9v5IbZ0anEDQySIWNhcEGWQzKsB543vzexdgo7Mi%2BoeEPSsDAUWbzoljHSQMpLcXvIMwWOKLZEtBLO%2Fjo4LGCuZibLjpyYkIkLCLiD%2Byof8rJHqwkxL7BwI9z4fTNLMIlwISS94TjnQD10%2FiXfFVNtmUwlmv7rsXFcIAwFAGVUOFNNVF9%2FrjB0zJW%2FIBvWk5%2FrNskcQ9%2B6gDdYZijIz26rEqAyXLOhKccidIELybVyFhsjjKZggovIP%2B9hiFdRwA%2BG%2F530mfcuD28b%2BjCt8om%2BBjqkAa8hoL%2FcLxEA3W8J%2Bm0gq%2FJGlhCC2jbZTjEvYu%2BRoTS4Hfm4WXnXq16FQi5LN1%2Bmhfco3WYQPiPAdmSsKGvJ4pNv1E0ZMa4MSpI9ivEbOONdwhNjDAqZzhlBDXIFzVU0bMXsaOIouLTq8%2B0LwAStSg%2FIgiO%2Fw%2BPY7GMKbB384DeJGmwEmEKX493MX43gjdgtFf5Hm4%2FzG9Hb64Vd8TgNhQ0AA%2FEj&X-Amz-Signature=f15bd5398b8073c32324fac057c1c0f0d506a591fa18a3f9a30c06d0d27d38ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTCE55K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2BdHbVzjgpinmfYZrRr0h8YhJ%2FfpzK%2FqhStOToQM5HWwIhALYgS7BlqwTT8mnhCVL6ugY1CJp6GvB%2BaVjtQEhhl1HXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8iXkiHl9RkHQDR%2F8q3AM6T%2FxlNy694CFTIrPfRUlJmfWc9g8Ry577W%2FJ6ZVzLIisE8wpZoo5C113esju3zp6jDQqXIC8%2FDfJo3DKqSHteEJgMpafoyfU2ZcvdVmIztHSYiIY1LwYwJ7NMFN%2FGRC6HasbdFUCJKw8J6XsTuHhn7%2Bw9NQbiMH8o138f8rZe0y%2FTnl7NNf6SDGDxn9h8Dvln2%2F51goAnR%2Bcc%2BWySyH%2BYDsMFbs0MV2eNb9wPE9Xwh4PLVnHG%2B8Y4UzJfWZsutYuPPN%2BPDdHhvKI5IAV0rJ73ks4ULcKyFji0h%2FYV1XWEtfEokiQzxMY10r26aduz7n09yYr6XYeaZViyu5FEvJFBugoSY510sqNBjobKsLhvHU9v5IbZ0anEDQySIWNhcEGWQzKsB543vzexdgo7Mi%2BoeEPSsDAUWbzoljHSQMpLcXvIMwWOKLZEtBLO%2Fjo4LGCuZibLjpyYkIkLCLiD%2Byof8rJHqwkxL7BwI9z4fTNLMIlwISS94TjnQD10%2FiXfFVNtmUwlmv7rsXFcIAwFAGVUOFNNVF9%2FrjB0zJW%2FIBvWk5%2FrNskcQ9%2B6gDdYZijIz26rEqAyXLOhKccidIELybVyFhsjjKZggovIP%2B9hiFdRwA%2BG%2F530mfcuD28b%2BjCt8om%2BBjqkAa8hoL%2FcLxEA3W8J%2Bm0gq%2FJGlhCC2jbZTjEvYu%2BRoTS4Hfm4WXnXq16FQi5LN1%2Bmhfco3WYQPiPAdmSsKGvJ4pNv1E0ZMa4MSpI9ivEbOONdwhNjDAqZzhlBDXIFzVU0bMXsaOIouLTq8%2B0LwAStSg%2FIgiO%2Fw%2BPY7GMKbB384DeJGmwEmEKX493MX43gjdgtFf5Hm4%2FzG9Hb64Vd8TgNhQ0AA%2FEj&X-Amz-Signature=f42755f3e45d0e752cd012f5380a9cb41ecbba035e667eb6acdd16dae77222da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMVXHIC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCQOlAd1lIbVjze9SLxREeGgfuhMLc%2F4NEdL5cSuMUMjgIgQYtx%2BhGDZgHF3mTCYschdJ%2F2uzYX6vLflmrKhcNsSZ0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1B4BxJbgYzoDOGTyrcA58FtYH1Rg7LeDMpFE1rcpBcLes3C3KYpHcXQbNtt0zI4%2FIyAdwH1iFknvn2zGbEV26YAqLexYBrsYoMxUojchlAbh87Ew26Nw8uOkZuNfKdokZnX%2FafzUVaYbw8tTbXXi3bmwr68t8ukU6ey7RX2QKpZ0ezab7zsmr9EUY1jx8M1tpU8l2hl%2FgtJ1amcBBZ7rcmaHBGMX1AYOARj9nBQrxR9cmN70uEuvl200xLbRbhYgVBAshO7Vo%2F2P6H%2FCFy5BtaA3RkSeFEJOg9B8DEr9Y3qomZ2NK3BH4p5%2FV6wBVjHAKcwVWs1BtnLq1klnWFhE%2BCUQZqUzFO83CM5r4pJPlr7dbmGJo843SLGF3z1Gomwxub3Ag2Jq45vdvIvei1HzWZQqNIx7bUDoI7QySSXMom1p5mkbha0HFGfSCn4V9B%2BMNxPJ6nx3cpGohfgVs7x7eUkKTJVi1tTOXbZnB7LvSb%2BVqZARrxqVN%2BkFztmqF4UPV9p8xIgoNADA2EUmeHf6uFP0U7mm264zqRVU9eO8cR146YuZtgNvdnk%2FzSENL89JhxTm5paw623L9kayKl9I2Hkyp9zkZ%2FZZEGdcmNY2j2kQkj3LpfjIqBLmZFGRpc3r8d8m75M1Y4LcpqMPHxib4GOqUB0RsS6EHip7VjsAjfk1qmtk4bqW5Knq0yVzn2tNNfhN8dYpBJVnitxpcdmyo0vMYQv7zfmKMdeHBhhL3DgpC3o2EKMM4hmvNr9fQHbQv%2F2g17yMvZ69lVbmr8d5MXe5Eqsn6HncZtnrNo5yg7ylDi%2Bry52W%2BRFqAUFxT5Vmqu3WalwSOswm%2FTD1ZBLB4Uy8SE3cTfVeSDE8bdKUrc5bjZKXXStWcA&X-Amz-Signature=35a3b47b60827e9cd88055c3ce6cee74bef708a5d1e31f8c34ef919f29a6ea90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675VMIVQF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICvOf9EsfwofeXLrxaaQKmwxRNQtTzQxyYm%2FPgu2jlZgAiEAlPP2HeWZ2MxmNsQSn%2FRwM%2FEwFYZVk%2BvRK7lvPYUsQFMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGABEPxGehekNO1SSrcAziIGYlRdTOYCx%2FQFBH%2FPoGAzTFsOOHJDkVSyAXtnRiQIkprGDerCYY4hRnT4MggC1r6hnyaLhNvlWPr1%2BWABetG7%2Blv8xCrZuRhtkCq2znPS45mtnbG%2BME9b6gcqHexf7NvTBDyDo1JdxWhAAIBrcrDaOHNyCEuLkSrb1gauN%2Fxt8ywWsqAu6QJMNJJS5rhlOCIIEtbKelf%2Bp8z4Mhxdbgcl4t6qmifhJV7QwgzCCLlulBuZjWYdwaLLEeXKYksp6ARQtR11fg2jRzcby%2BJzjpQa6yFQ2MGCXidqJ2tQ3g9iszZOfPcv3QLjKz6M4xUCI6eMeSWm7FWRHEP00fYlehHFs6gTUHkmGGFt0AQJPk6nXssWW9Wayb2GAIEqGrUH61M9l97ASrQPjT%2BFPfQPaanx0eZGM3ocdMTjjGe7sN6%2FEA99jNTkCW%2F9ZhcVuthobW7CQSgXMN0%2BaCCBqdajrNcefSo95uQo1b7%2B2jvmOR6uu%2FRFD%2Fpn0a81cogeqRqpV30yntVlYFad%2B%2FODiJfsVQ2vVkSnxJ2mxUX22jBpkFAcqg1gYrvtBdxtZuFXa0YWJnuE5h%2B3bbdUEcjlgO3ojBePR2NOTCam8hOjTzqlzy4tPxYSVq1CFJLsUtAMKvyib4GOqUBfsAgVOutCHg2fAuY3eV5J6Oww8WuhU7lvVNzcpVDdTfiB6Ju2O0z6Qvd7Au84K6X9iujf7nM77O%2FBWCkP7TAV9dpqHtUpuRkZMEjkIx37WQYu1pbP97fZOvCVbdH9k5gGmS%2B%2FI44FZk8pG3VUt8VyFvyTZUDWLqpNqG13UN%2Fp2NDJbywBWSloEWD%2B9U2%2F9ouoG%2BwVZxXYSXMUO3JRbYlwHpGFCbI&X-Amz-Signature=73cad9beca4369d5f7313a3ee69b8b4d5f2be5ab29d81b02085f4e6d0ac48e35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTCE55K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2BdHbVzjgpinmfYZrRr0h8YhJ%2FfpzK%2FqhStOToQM5HWwIhALYgS7BlqwTT8mnhCVL6ugY1CJp6GvB%2BaVjtQEhhl1HXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8iXkiHl9RkHQDR%2F8q3AM6T%2FxlNy694CFTIrPfRUlJmfWc9g8Ry577W%2FJ6ZVzLIisE8wpZoo5C113esju3zp6jDQqXIC8%2FDfJo3DKqSHteEJgMpafoyfU2ZcvdVmIztHSYiIY1LwYwJ7NMFN%2FGRC6HasbdFUCJKw8J6XsTuHhn7%2Bw9NQbiMH8o138f8rZe0y%2FTnl7NNf6SDGDxn9h8Dvln2%2F51goAnR%2Bcc%2BWySyH%2BYDsMFbs0MV2eNb9wPE9Xwh4PLVnHG%2B8Y4UzJfWZsutYuPPN%2BPDdHhvKI5IAV0rJ73ks4ULcKyFji0h%2FYV1XWEtfEokiQzxMY10r26aduz7n09yYr6XYeaZViyu5FEvJFBugoSY510sqNBjobKsLhvHU9v5IbZ0anEDQySIWNhcEGWQzKsB543vzexdgo7Mi%2BoeEPSsDAUWbzoljHSQMpLcXvIMwWOKLZEtBLO%2Fjo4LGCuZibLjpyYkIkLCLiD%2Byof8rJHqwkxL7BwI9z4fTNLMIlwISS94TjnQD10%2FiXfFVNtmUwlmv7rsXFcIAwFAGVUOFNNVF9%2FrjB0zJW%2FIBvWk5%2FrNskcQ9%2B6gDdYZijIz26rEqAyXLOhKccidIELybVyFhsjjKZggovIP%2B9hiFdRwA%2BG%2F530mfcuD28b%2BjCt8om%2BBjqkAa8hoL%2FcLxEA3W8J%2Bm0gq%2FJGlhCC2jbZTjEvYu%2BRoTS4Hfm4WXnXq16FQi5LN1%2Bmhfco3WYQPiPAdmSsKGvJ4pNv1E0ZMa4MSpI9ivEbOONdwhNjDAqZzhlBDXIFzVU0bMXsaOIouLTq8%2B0LwAStSg%2FIgiO%2Fw%2BPY7GMKbB384DeJGmwEmEKX493MX43gjdgtFf5Hm4%2FzG9Hb64Vd8TgNhQ0AA%2FEj&X-Amz-Signature=aaa1e25fcd2bc259085532c56f93bafa85745cc5a77a3b275039b4703725f9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
