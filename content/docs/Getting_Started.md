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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJC2EXU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwf4BhScGIxjxqFv0mnKVkpNshQhgjnlcg8jqOeAGocAiAl5jWq9tWtVaXf603frsy53iTKFBOzh2sh2uvEykEDsir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMPMIprpIQB7Pa1ORiKtwDB8DTFMdsRV9GXVvgGxngt2D%2FT%2BzsLoYi4XhqlG5NxxcyQR0WplWdlQlddlk32SjBfXBxuDeKkHhjp5OeinEQ8fok2ngyOoesQzUmvambuVSWnug3F8RVbJQtZiVuSeOTKgfrmzPJQHa4DuL%2BJjFqDHyI4BUCHM4Gs4L6MJmgj2UZ4wf%2BwSD20u12%2FwXeQboAdHVZbTmJfPYOGxYmweky6W1DTupyben0ornnjWJ4HuXUwXbfqAWJkJsi9ZPszCQ69D4rva1IZj6vrX3XM51dz2Jf5uCGWfl8k8%2Fy3yg3dTB4y99wuDfTtKNvEGhldRBmOWbsuvg2Fm9E3Try%2FPaBBGE6CHk5lscLlxvQ4HQ8SF9%2BpDJiyMo0xgvde%2B7Onvio2JMsyaooNTbAF4nnAxCzvMPw9TR%2BHItcRemQtCymFtapWX684JCtwSeYTx2DhuFoz1WFsdUwnO1DPtQtxt2USwpbgS9yNim41KOga3%2F7EuyF0Wc1V558kd1D6J%2B4Lp11gD2KqTmql62%2BE3orRB11dDxgKwpI7tYNo8uePJ5M4AGlrGbS59InpY%2F3crNQHEB%2BCUREENOjsPHPKKDsL6Vonh73qFZqx%2F%2FevMbSofnoB4Rc0Jpji2zB5gyR7WAwyOaEwAY6pgEe4nkJasFpFxFuXE6hmfTlPEb%2BTy3BE9ECLvTGpcOwNGtNv%2BSZ5%2B7MJk914q%2F%2B06Ybs0WZ8MKfGoVr203i1DDHfrblEtC%2FPFZkqMO5nGRGjji0%2BLhNOfnwI%2FsOpgsO9HQdGMGqwTiFfdVv1gaKb5qc4oHPuvXfKWUrSuVlfEA595SNIPrObWXrmg%2BxCRgvOmaOmoIVRf5xXTqlVfNXmLnm%2FEJwInKc&X-Amz-Signature=218a50e0383678c0bf1887535108ac85ebbfa23464dfdda27673572501e7c905&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJC2EXU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwf4BhScGIxjxqFv0mnKVkpNshQhgjnlcg8jqOeAGocAiAl5jWq9tWtVaXf603frsy53iTKFBOzh2sh2uvEykEDsir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMPMIprpIQB7Pa1ORiKtwDB8DTFMdsRV9GXVvgGxngt2D%2FT%2BzsLoYi4XhqlG5NxxcyQR0WplWdlQlddlk32SjBfXBxuDeKkHhjp5OeinEQ8fok2ngyOoesQzUmvambuVSWnug3F8RVbJQtZiVuSeOTKgfrmzPJQHa4DuL%2BJjFqDHyI4BUCHM4Gs4L6MJmgj2UZ4wf%2BwSD20u12%2FwXeQboAdHVZbTmJfPYOGxYmweky6W1DTupyben0ornnjWJ4HuXUwXbfqAWJkJsi9ZPszCQ69D4rva1IZj6vrX3XM51dz2Jf5uCGWfl8k8%2Fy3yg3dTB4y99wuDfTtKNvEGhldRBmOWbsuvg2Fm9E3Try%2FPaBBGE6CHk5lscLlxvQ4HQ8SF9%2BpDJiyMo0xgvde%2B7Onvio2JMsyaooNTbAF4nnAxCzvMPw9TR%2BHItcRemQtCymFtapWX684JCtwSeYTx2DhuFoz1WFsdUwnO1DPtQtxt2USwpbgS9yNim41KOga3%2F7EuyF0Wc1V558kd1D6J%2B4Lp11gD2KqTmql62%2BE3orRB11dDxgKwpI7tYNo8uePJ5M4AGlrGbS59InpY%2F3crNQHEB%2BCUREENOjsPHPKKDsL6Vonh73qFZqx%2F%2FevMbSofnoB4Rc0Jpji2zB5gyR7WAwyOaEwAY6pgEe4nkJasFpFxFuXE6hmfTlPEb%2BTy3BE9ECLvTGpcOwNGtNv%2BSZ5%2B7MJk914q%2F%2B06Ybs0WZ8MKfGoVr203i1DDHfrblEtC%2FPFZkqMO5nGRGjji0%2BLhNOfnwI%2FsOpgsO9HQdGMGqwTiFfdVv1gaKb5qc4oHPuvXfKWUrSuVlfEA595SNIPrObWXrmg%2BxCRgvOmaOmoIVRf5xXTqlVfNXmLnm%2FEJwInKc&X-Amz-Signature=78f55957d383b671621d5118ccaaa332a05d818d532f25fcd9b7f0b35021db87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STXZG5IR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwR2pOESMA88Lud8v6TRq2oE%2Fm%2FngTx5jz4TfNAaI%2BgAiEA1cHEHgEXmFJkU%2FIGWqsR98%2BjYeLlEyN8UgNZx%2BPuS84q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAUqy4xNkvhUvMhEMircA3n4tR%2BxrBVO1d5P1QmKYN9QUwh5TFX%2BKanQqE0HxhSHN6FLsa8Vr53ET4Vdxv%2BZIGan0PveNGdnirGmB8KI48n1pi83p7xpRpSxSHtukJek7F56x0G5a8pg3TT6VPOph03hZas2TIa6HjmKUuhuuVZ%2BwHv0adEoUS%2FnNCn8LrwR7XjqLroi6xd768vV7wAhJ2qjzoWminEsH0sHTjOSUDE71IlHqiewtLjaWJAD5NERKo%2FLRmmygzgcXT0t8vekKk8LICYXq0%2F9DjOaItirmOI6BeXusMcJBoknaWwtFpsTF5zr73NPTpJGgHPjZFxleNQZy97c0w%2Bhykae%2Brsl1BYTo1ZdWpuEz96RfER9%2BtHutuct5awYStOSjXjKQsqRh6HifZnRsjMnGHWBfTtlsE%2FKXYHoESHkspkSvm7Fghy9LoKt3Awvo%2BbOcKi%2Fifrn8C2vXyE0gXYh1NIfayyteRvjRLndsEU%2BA5Q259Gb%2BtFYWRpn%2FD%2Bf56zPpa6y14mw8j56uE6OmSOft83xM2e5fPrKN%2FAS0%2BtYXS48%2Fb%2FnEtFFcvTyG965MzTkhbLFnVTg89zrlrq3kSF71PJWMeiXBKeK15FhJzcnjelF4mmmdV32cJerts%2FlGrtt5GyzMNDmhMAGOqUB4XF2h3fFnCCXTd9S4OxazCcxOh8z6HbB41iVp7OxueW8sssvNZDCoCI2A0abvCl6wNoBV1V8WfvKEwoAsvh6V%2FmhNeNfK77nyg5ImdDv%2F23vrOHUwkE1iGRQ4sMhmKNoo3M3MgN7KR4ZX5IBmuNQkockWNx0V7TBIFU%2BWGB%2F1o5GCUbnWyJxpU5ANvqBJu%2BE6M3G0zf5eqbbgQSGTjBXDzULVX6u&X-Amz-Signature=0300977ebca1cafd27ca06d00d161d973c713bc1ea9dcc6ff4e950d392b97b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIY4CTY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJcFHqrFUSrbxurs9QWg9wnSccHNttE4ni6KvtXkmZAQIhAJfA6NTCVwChuzmHqSREDLPDx898XQkVv2tqmGgbcmkxKv8DCGIQABoMNjM3NDIzMTgzODA1IgxCQDixrZHC3rNfQskq3AOVkymsP%2FtzPZ3pxy0xZa6T%2FBNqJgmA3%2BUcmduwSDp3WQJLXVAsaA9%2FbJaxA%2FZNzWCTtwaE4p2Cc9BpCWfQ0OPi44k0MsU6omVB6tDEuPAqmnttG%2BjNi4aLJapnF9Abmje2F3BHlvi%2FIH7MECFMubpuxyrV%2FHOUu9h2PR997WCM9yfqQpGY9E5t4Q45u%2FjctwMS0GOGdcrnp5riuSgnnt046nADnRvKaM2Tw9aZv9Oi5nLXw425S8orkDb7K9dt50vgNjQkWvPkb9HT3EoIT%2BVPcnTuFPo5QIeWcAbCnF6uWZ9iWXtF7ABZKP3sT69S11RUIih4Den3imifr82M4cLNbw7JZA8rjGDSeVvHw9NA7C8uiVb5WCAVTsCsrMaalT7fcqB9oBgCnVunk0kITR7iSi4yVvJClyvaRPnY6I6VYyOj2WojWakl8BXATsVzJHgqDyDgb3zcwAHnF8K%2B%2FzWP6OkF2NJe4oZafpGQ1XbzUAnH3ps09j0Ht9WAj5aHxB9%2BOUsd0XxfVihjQ60r%2BulIeUFK86vxjkYlsbvFEEA1QjDA8Tn%2Bxq2hwcIzKBAUCAjp4%2BU%2ByfBjoTbdel7%2FFfllFLoe4FHRWcVJGf5nDGErIcUT4WqWeF7beJZTyDCt54TABjqkAXU6O8ZOOa3y4UvndIQyn8NHBval8tJ3lT7e4nzs3mmb6e4u%2Fh1r%2B0BYqepW0RAmvDcyJ4J7BBVmq9B4t4uuW8EBCO98LCjg5fgGiy3TIX69dR%2FhLfwPC9igvrtRF%2B5%2FzZ%2F2C%2FrbWNkR3FnLLD16K8KUDuMPsiBkjPqDPud1PWlWDD7ElJ0p%2F2NI7HL2k5BVvuBB6oEQzVWE8jrHucFcbPW%2FtIsw&X-Amz-Signature=2633fe68420a90fda27e44027c44731fa8bc6f2e9e32c033ba38b019954352ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJC2EXU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwf4BhScGIxjxqFv0mnKVkpNshQhgjnlcg8jqOeAGocAiAl5jWq9tWtVaXf603frsy53iTKFBOzh2sh2uvEykEDsir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMPMIprpIQB7Pa1ORiKtwDB8DTFMdsRV9GXVvgGxngt2D%2FT%2BzsLoYi4XhqlG5NxxcyQR0WplWdlQlddlk32SjBfXBxuDeKkHhjp5OeinEQ8fok2ngyOoesQzUmvambuVSWnug3F8RVbJQtZiVuSeOTKgfrmzPJQHa4DuL%2BJjFqDHyI4BUCHM4Gs4L6MJmgj2UZ4wf%2BwSD20u12%2FwXeQboAdHVZbTmJfPYOGxYmweky6W1DTupyben0ornnjWJ4HuXUwXbfqAWJkJsi9ZPszCQ69D4rva1IZj6vrX3XM51dz2Jf5uCGWfl8k8%2Fy3yg3dTB4y99wuDfTtKNvEGhldRBmOWbsuvg2Fm9E3Try%2FPaBBGE6CHk5lscLlxvQ4HQ8SF9%2BpDJiyMo0xgvde%2B7Onvio2JMsyaooNTbAF4nnAxCzvMPw9TR%2BHItcRemQtCymFtapWX684JCtwSeYTx2DhuFoz1WFsdUwnO1DPtQtxt2USwpbgS9yNim41KOga3%2F7EuyF0Wc1V558kd1D6J%2B4Lp11gD2KqTmql62%2BE3orRB11dDxgKwpI7tYNo8uePJ5M4AGlrGbS59InpY%2F3crNQHEB%2BCUREENOjsPHPKKDsL6Vonh73qFZqx%2F%2FevMbSofnoB4Rc0Jpji2zB5gyR7WAwyOaEwAY6pgEe4nkJasFpFxFuXE6hmfTlPEb%2BTy3BE9ECLvTGpcOwNGtNv%2BSZ5%2B7MJk914q%2F%2B06Ybs0WZ8MKfGoVr203i1DDHfrblEtC%2FPFZkqMO5nGRGjji0%2BLhNOfnwI%2FsOpgsO9HQdGMGqwTiFfdVv1gaKb5qc4oHPuvXfKWUrSuVlfEA595SNIPrObWXrmg%2BxCRgvOmaOmoIVRf5xXTqlVfNXmLnm%2FEJwInKc&X-Amz-Signature=0190b131cb80e957ab2a2c9b03eecefe81002fcead97fa03985f769a05723851&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
