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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZKBQPL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFP2v7rAtNXygCc20TeafxvnxpTmFOOkcGdX9cxMetR6AiAxHZbqVlOcCBtiVJoQquH756hM2ldTu2O%2F%2FoE28ZGnVCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMktL79deQkv8%2FO15tKtwDFOu0mdoX3kNsTvV75b9YQaiHtk1f0p5JrprEqUqQ2fFnKFg1cDMK3RIxbsuoGfUy%2FawuPnkLCXJNRVUbAJh5E6dt%2BDtxftDMpy%2F0GgAXcxEt2QSGIYpJJ9yYRvNN4EBlUIMsrGbpQuI8HCabwb2Qbb%2BfvJOp0weUcxMBYVoCVdpdveEL5SzfCx%2BEJPL%2Bbel5UOwlCwp9Jn2232SfEql%2Fe5ZYIFg1xLY1IT6zj4NRnbHEOdmmyq%2FzYyLvWbsegOrG1P16Mv3FgCpPgHIE%2BumoVk8wE2IXxXggoLmhhuZnK6i4KIuU1GXMlmS2ZQuN1mK06zmUtEKTeYG687Hk7uxAnsVgwYK%2BDBIQTYqQsm9Vb5jb3oogaMef3OeBFolUQVLPXrMM%2Fl1FyTBH21HaWeLbk214FzAiZ3tGSxv2oXIu6oyOK2KssZCIuNLG9gZ4G3uM5pcN8xnqbw5oRYHLb0tpUNaV3mcik2bocNR990orJtYhI6PaS5E3tEKJsp65nIX5v9QDK05EvuzXX8BHvGDvXiZ8xXvWI2c5T3OKGUFRpPIyXvxjht9N01xlnc%2B3WBU1E48EGSXzd1KEIldrTzDne1OgKEM%2BglXUN432IHuYxjxtiX4kQTucaW%2FKhsMwgo34vQY6pgE9Y5sUpMVadHcDOYbmR05wdWlnINkFA9GYglJC5q4HXttGvb4AO6fUPysDAwtnqe9t3bNrw1CVjMgMOznWVxSDR4%2BtUeL5kkDJc570wCPKICp9%2FMxHKR%2FST%2FkzMeh21HpUa%2FlhVAB9x%2B%2FRYSfi6f1wdDglCBqBcZAmSNBe7bJzuWSfBgMxAI17tAbC%2BCVhUCAVq5j3%2FwMatlbLpxBRWBEoMNB41XD6&X-Amz-Signature=4f97396fb0ddb5aac7ee7139c4a3b18624ff0dd3ff1ef95302a00a01168afb25&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZKBQPL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFP2v7rAtNXygCc20TeafxvnxpTmFOOkcGdX9cxMetR6AiAxHZbqVlOcCBtiVJoQquH756hM2ldTu2O%2F%2FoE28ZGnVCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMktL79deQkv8%2FO15tKtwDFOu0mdoX3kNsTvV75b9YQaiHtk1f0p5JrprEqUqQ2fFnKFg1cDMK3RIxbsuoGfUy%2FawuPnkLCXJNRVUbAJh5E6dt%2BDtxftDMpy%2F0GgAXcxEt2QSGIYpJJ9yYRvNN4EBlUIMsrGbpQuI8HCabwb2Qbb%2BfvJOp0weUcxMBYVoCVdpdveEL5SzfCx%2BEJPL%2Bbel5UOwlCwp9Jn2232SfEql%2Fe5ZYIFg1xLY1IT6zj4NRnbHEOdmmyq%2FzYyLvWbsegOrG1P16Mv3FgCpPgHIE%2BumoVk8wE2IXxXggoLmhhuZnK6i4KIuU1GXMlmS2ZQuN1mK06zmUtEKTeYG687Hk7uxAnsVgwYK%2BDBIQTYqQsm9Vb5jb3oogaMef3OeBFolUQVLPXrMM%2Fl1FyTBH21HaWeLbk214FzAiZ3tGSxv2oXIu6oyOK2KssZCIuNLG9gZ4G3uM5pcN8xnqbw5oRYHLb0tpUNaV3mcik2bocNR990orJtYhI6PaS5E3tEKJsp65nIX5v9QDK05EvuzXX8BHvGDvXiZ8xXvWI2c5T3OKGUFRpPIyXvxjht9N01xlnc%2B3WBU1E48EGSXzd1KEIldrTzDne1OgKEM%2BglXUN432IHuYxjxtiX4kQTucaW%2FKhsMwgo34vQY6pgE9Y5sUpMVadHcDOYbmR05wdWlnINkFA9GYglJC5q4HXttGvb4AO6fUPysDAwtnqe9t3bNrw1CVjMgMOznWVxSDR4%2BtUeL5kkDJc570wCPKICp9%2FMxHKR%2FST%2FkzMeh21HpUa%2FlhVAB9x%2B%2FRYSfi6f1wdDglCBqBcZAmSNBe7bJzuWSfBgMxAI17tAbC%2BCVhUCAVq5j3%2FwMatlbLpxBRWBEoMNB41XD6&X-Amz-Signature=2722cc84eb2b3c9569428fb80a8a40702d74958fe719d02e6e7faa1c35242653&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OOKELGP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEa1ooQjUakgSfayIDIMpdhi%2Fygq1%2B9JzICuCMYd7vEXAiA3epe3xpngO05Hqlkr0h41riGJ9MUBUkffidi6te%2FJyyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2BvMfQ%2Bt3IBJ9B09AKtwDYRi2TzBpvbmPEDQaE4kfrL%2FjDtzlEeVjPJBfi49kPV4%2BAgq5TC7KlVCyjDgOUCJakzssGgaGUISdA2POpMbnmjHKDcIaR0bbr%2BQlvUBnFJWgnQUNo9OyBiB%2FDJYiQz%2FE5v4Ye2dm53GyBTCBpFKt68i1sGaFMMYclRxQp%2F1FvyOk8xZQru8MkTkE1tEpEmjepcYCHB4ZzIWSAGaVViR6UM0hWfqd56f9B0cncqAGdhmNjJhiXL7UHSbKaPnalrqS4VFb8%2Bzw8yzCdmwOzXTCdb5kwpeq0oWCzjSI31ZGiQ%2BZfCxRUsBd3VlJIBUSI%2Bz8iX7vd108vWI5g4u%2Bj2fGmeJRBg9uclcYP5fHxA1teFGX0aLDlYkAWFRZHA2dhBqiBFMWw7ArN7mYK6iEWlmtnxPitrZf9Kr%2FOP379P2issLKFVOX3m5OIsPBSgJ7plXzvi4ZmdwGA%2FDfivqYxu9pWJh8su1Eib6KfDi%2BKS3nN%2BTvdRBwlunRVm6cKFxt%2F%2BHrFsKOaDWnYnF1zgAbdWzzQrdpEFifmsDEe%2Bia8jBZy5TgwiRcXvORqmHN%2FiVmV62%2BzMriUJTyo0%2B6whgPmcx1mnJuY%2Br0TWsRUM%2BnQtppA6N8ywAruG8Xng0NVU8w5Iz4vQY6pgGFd7pLCqjUqqcnmm9W8CpiTtbOz48kxRfN4t20gf%2F7zniBfhWoYg4oSKjx9R1u1J2CmFu9BWO8LKI8s0T5w06DunRaAccf4CnXhJ6Ea0qO6fbUteT8LQo8UFMCNr2ePGwO%2Fgg1k5eQPt5e41DwlxK5AVAc97PEDAVVMeEpxbOemnJ7XoqnuvsQvQgN8MVsJpkDokRIUREP6D6z1B9NKYxMX%2B4%2FIoAm&X-Amz-Signature=577630afae579e0d3612116abf29888f13b1fcf8cd8d9ba105763f5320d2133a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUEM6GW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgZps2IUhcNXCCF0NhbkepukDbXBhmRC8BC5f7KdBxHAiA4DS4disjimiLZ8OMfPtafkAh9HpJgVYOMhOa24jXqmyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLoN47WGT7KE8hZugKtwDwgIOcqssJcXGZ28LyiM8RNIkjiVq%2FWr2lR5zHBuAVxpt5lllkLsXyAOWh53QTz2UcMY%2FUGqrPSA7G%2BqKxM4DK1%2Fzy%2BSBCYj%2Bxc8Aigj9N5qLMzokzc4ASvYbRDn8eZOJd6%2Fn8z%2BRlTNyBMsRF44I9Pr%2Bh6nlDngGj%2B5UHKPh1javPzpEliz41%2FoydsiKMwDp5mRBht83CUaSnFd8dGTEe9beYMQ62s5KKB8pZ2%2FJyWPkBA%2B0uTrl7jFEqkARzxfa0YLxcrAkIEotD5XAf5OXZzaVQMB%2BslkLh74ZnT1RULSFji3Ia52CLEcOuEuDeJXtSySbbGaxSKaV7xaeveFQ8ZbRHvwxzf0CppbYylKHTmmWAm1qcoaI3wnEYzmSCzFFbf1cMVL4CXEhthKjtenaeZSHmKE%2BnEPTQPEn15LUiFdealEj6qQp5%2F0DLv7TZ8RFCi2mKVkJFjNj3lau5Qyc4ic7IhzFvejhG9ofi0SrT8bl%2BHWBW2WP%2BBg4fVmiu27KNd8eJ88Kfkoc10GlgnKAVn5Tj169XtNk%2FCRwqaH5CRO9EPC9TUNacK7ZCnJB9EYX2x1Y15UfuMtKKAuFmWJNhDuupZgANeYI%2B21WpcZ1mgSayn%2Fox6s%2BMkXp4JQwu434vQY6pgG7%2BV8w3FrhRzKVngNtO2rh9SQ%2BwCndGTQDxv1b2HrKpa5L%2F7aQPxNw4ZKeaCVLF5GF0f3BRbnXHeUPsXH2K4m0ZkJuRdPioDuowBLJk%2FIVBUtJXRIj02rPedqYR%2BExC%2Bp9zBD4Jg8dV2wJ6Kgu1sZdfq0jzdKTz3s7Xoonn7Vvq5wuTt3capP3bNRikmLjMIAd8V1atPjoLN592n%2FwW5kWUEvnrMQt&X-Amz-Signature=eb9d9c325472b3b0d8dbc85bcb7d074c010ef26b2aa7066792b91808c546118c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZKBQPL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFP2v7rAtNXygCc20TeafxvnxpTmFOOkcGdX9cxMetR6AiAxHZbqVlOcCBtiVJoQquH756hM2ldTu2O%2F%2FoE28ZGnVCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMktL79deQkv8%2FO15tKtwDFOu0mdoX3kNsTvV75b9YQaiHtk1f0p5JrprEqUqQ2fFnKFg1cDMK3RIxbsuoGfUy%2FawuPnkLCXJNRVUbAJh5E6dt%2BDtxftDMpy%2F0GgAXcxEt2QSGIYpJJ9yYRvNN4EBlUIMsrGbpQuI8HCabwb2Qbb%2BfvJOp0weUcxMBYVoCVdpdveEL5SzfCx%2BEJPL%2Bbel5UOwlCwp9Jn2232SfEql%2Fe5ZYIFg1xLY1IT6zj4NRnbHEOdmmyq%2FzYyLvWbsegOrG1P16Mv3FgCpPgHIE%2BumoVk8wE2IXxXggoLmhhuZnK6i4KIuU1GXMlmS2ZQuN1mK06zmUtEKTeYG687Hk7uxAnsVgwYK%2BDBIQTYqQsm9Vb5jb3oogaMef3OeBFolUQVLPXrMM%2Fl1FyTBH21HaWeLbk214FzAiZ3tGSxv2oXIu6oyOK2KssZCIuNLG9gZ4G3uM5pcN8xnqbw5oRYHLb0tpUNaV3mcik2bocNR990orJtYhI6PaS5E3tEKJsp65nIX5v9QDK05EvuzXX8BHvGDvXiZ8xXvWI2c5T3OKGUFRpPIyXvxjht9N01xlnc%2B3WBU1E48EGSXzd1KEIldrTzDne1OgKEM%2BglXUN432IHuYxjxtiX4kQTucaW%2FKhsMwgo34vQY6pgE9Y5sUpMVadHcDOYbmR05wdWlnINkFA9GYglJC5q4HXttGvb4AO6fUPysDAwtnqe9t3bNrw1CVjMgMOznWVxSDR4%2BtUeL5kkDJc570wCPKICp9%2FMxHKR%2FST%2FkzMeh21HpUa%2FlhVAB9x%2B%2FRYSfi6f1wdDglCBqBcZAmSNBe7bJzuWSfBgMxAI17tAbC%2BCVhUCAVq5j3%2FwMatlbLpxBRWBEoMNB41XD6&X-Amz-Signature=d87efb3a0d3d03fb0978010cf1ee7118143c9b4472be07f53b757856151e14c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
