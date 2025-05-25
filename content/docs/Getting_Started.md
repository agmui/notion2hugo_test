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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KUXXZS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDoszsKgsrQ5i8YdWlRjMnpXT7fPbmlpDnMBLPuBK%2BN9QIhAIcLlh%2BiSFfv4X6EMTC1mqh9YXvk%2BlIhAV80elqPP%2Fr%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgyxCcxPyTbEmITqUksq3APWY6MZH8NxrWngUwlcJTf0Qb16iqXE5pqSuLWs%2FPCoRHETHrO%2FtfpuTfZiTI2HJfu5koAyPTxzMLAIuKZLOqdMrP7wacd%2BJbcfOtUqdROABik5m5wKKTIw6eW65giiAmd80LYja98JknzOLIRNQHI26SUUsJTzNfX9FYV8pGpHNcFLAoJylBI1yZxxhHwnYdlFEp3jCQ1fY1W7%2B01%2FPTQOAeRVBCd%2FQHbstCszJKjZ4RGxj6CLjbCsoloaTwZZGHejCgliEGVSsmT21tlierxdvSzeUunc57%2BVixYVmmSFpElglzv6yYTra9pac1IwUtqUTIyKe5sA1%2Fv%2BHZq6hJjzE%2BcN8OnrGzcDKGwikv6T7iOSGinwE0cpFmNCKxnStkHjBMe1K6i%2FhTvEb8AzVYok4%2BEgHJNlX9pvwOzv4Kku5P%2FUd6yZvOtw0tmlE0f5C06DprAAbUFZ19HAyA6K7vkj%2FznqXzksCm409gW2szvqQI12MYijA9Jhuucstb7aL6Bcij6bu3%2F7ib4LRIvOFTfD8sTGTt2T%2BepNJs6C694mUhNwJBwmrFRZPBwy71HkJpYJVIeSkr8FfZA3EGyeOyZw41wUqiiNmMl6OjIx2WmSBSil5k%2BlZCtwHfkIRTDg%2FMvBBjqkAaRv2hxxWAZDQqGgHu%2BvHbHPUJtbMpV9dilvJtM1QI7AQZzcjVz4To2z9VOak5MOneYr59Ie2uesMvGq1oIqju3FZuOb96t%2BOAlUYkv%2F7JIZfgX4Amah9zZRoTTOMkyl2w8yhiJI0mLtXc4A%2FTKqvC7GqfCfqNH1iEK07fnKd1Vda09GkB759ZVpXLpi%2F27iTTMT6vBR%2Fsl0ALzQjhDJu83p9FTa&X-Amz-Signature=8aa67229192f9745b87f2a086afb8d0404de68f6710d88a76fdd4c1c28ed95de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KUXXZS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDoszsKgsrQ5i8YdWlRjMnpXT7fPbmlpDnMBLPuBK%2BN9QIhAIcLlh%2BiSFfv4X6EMTC1mqh9YXvk%2BlIhAV80elqPP%2Fr%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgyxCcxPyTbEmITqUksq3APWY6MZH8NxrWngUwlcJTf0Qb16iqXE5pqSuLWs%2FPCoRHETHrO%2FtfpuTfZiTI2HJfu5koAyPTxzMLAIuKZLOqdMrP7wacd%2BJbcfOtUqdROABik5m5wKKTIw6eW65giiAmd80LYja98JknzOLIRNQHI26SUUsJTzNfX9FYV8pGpHNcFLAoJylBI1yZxxhHwnYdlFEp3jCQ1fY1W7%2B01%2FPTQOAeRVBCd%2FQHbstCszJKjZ4RGxj6CLjbCsoloaTwZZGHejCgliEGVSsmT21tlierxdvSzeUunc57%2BVixYVmmSFpElglzv6yYTra9pac1IwUtqUTIyKe5sA1%2Fv%2BHZq6hJjzE%2BcN8OnrGzcDKGwikv6T7iOSGinwE0cpFmNCKxnStkHjBMe1K6i%2FhTvEb8AzVYok4%2BEgHJNlX9pvwOzv4Kku5P%2FUd6yZvOtw0tmlE0f5C06DprAAbUFZ19HAyA6K7vkj%2FznqXzksCm409gW2szvqQI12MYijA9Jhuucstb7aL6Bcij6bu3%2F7ib4LRIvOFTfD8sTGTt2T%2BepNJs6C694mUhNwJBwmrFRZPBwy71HkJpYJVIeSkr8FfZA3EGyeOyZw41wUqiiNmMl6OjIx2WmSBSil5k%2BlZCtwHfkIRTDg%2FMvBBjqkAaRv2hxxWAZDQqGgHu%2BvHbHPUJtbMpV9dilvJtM1QI7AQZzcjVz4To2z9VOak5MOneYr59Ie2uesMvGq1oIqju3FZuOb96t%2BOAlUYkv%2F7JIZfgX4Amah9zZRoTTOMkyl2w8yhiJI0mLtXc4A%2FTKqvC7GqfCfqNH1iEK07fnKd1Vda09GkB759ZVpXLpi%2F27iTTMT6vBR%2Fsl0ALzQjhDJu83p9FTa&X-Amz-Signature=5d97131ff02dbe3ac88c906368084153462f01d5bd4cc097ae883de9bf9f7fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KUXXZS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDoszsKgsrQ5i8YdWlRjMnpXT7fPbmlpDnMBLPuBK%2BN9QIhAIcLlh%2BiSFfv4X6EMTC1mqh9YXvk%2BlIhAV80elqPP%2Fr%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgyxCcxPyTbEmITqUksq3APWY6MZH8NxrWngUwlcJTf0Qb16iqXE5pqSuLWs%2FPCoRHETHrO%2FtfpuTfZiTI2HJfu5koAyPTxzMLAIuKZLOqdMrP7wacd%2BJbcfOtUqdROABik5m5wKKTIw6eW65giiAmd80LYja98JknzOLIRNQHI26SUUsJTzNfX9FYV8pGpHNcFLAoJylBI1yZxxhHwnYdlFEp3jCQ1fY1W7%2B01%2FPTQOAeRVBCd%2FQHbstCszJKjZ4RGxj6CLjbCsoloaTwZZGHejCgliEGVSsmT21tlierxdvSzeUunc57%2BVixYVmmSFpElglzv6yYTra9pac1IwUtqUTIyKe5sA1%2Fv%2BHZq6hJjzE%2BcN8OnrGzcDKGwikv6T7iOSGinwE0cpFmNCKxnStkHjBMe1K6i%2FhTvEb8AzVYok4%2BEgHJNlX9pvwOzv4Kku5P%2FUd6yZvOtw0tmlE0f5C06DprAAbUFZ19HAyA6K7vkj%2FznqXzksCm409gW2szvqQI12MYijA9Jhuucstb7aL6Bcij6bu3%2F7ib4LRIvOFTfD8sTGTt2T%2BepNJs6C694mUhNwJBwmrFRZPBwy71HkJpYJVIeSkr8FfZA3EGyeOyZw41wUqiiNmMl6OjIx2WmSBSil5k%2BlZCtwHfkIRTDg%2FMvBBjqkAaRv2hxxWAZDQqGgHu%2BvHbHPUJtbMpV9dilvJtM1QI7AQZzcjVz4To2z9VOak5MOneYr59Ie2uesMvGq1oIqju3FZuOb96t%2BOAlUYkv%2F7JIZfgX4Amah9zZRoTTOMkyl2w8yhiJI0mLtXc4A%2FTKqvC7GqfCfqNH1iEK07fnKd1Vda09GkB759ZVpXLpi%2F27iTTMT6vBR%2Fsl0ALzQjhDJu83p9FTa&X-Amz-Signature=3efad48f4a465afb47a02b3ae940c580938d249d5712694abee1ac51c9a1abcc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J74FBDZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDmdZpooelIGb%2F2U6J%2FUTE%2FWMY1mU7q8VOmo1Xw30SovAIgMKys0e8%2BrBcmhDic55f6Q60bEVr3NNA88RHyH4OERE4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIH6gggkjOf3mJR3dircAwH83cmcorlRxfAehAkQJAjKorUfI07%2B3Shr7HXWO45UIu4m8Uh39nS402lTSMs0YbLY1WyiBudi4iyRglyrWXcLSl3UqjEJCZOFoB3VuR%2FraQymvMWnx7zA82DzeWS3skUDdQrms2jhmBnju%2FZ17vYP2msXKgMgvAJEuQ5CrMfKK4QmQQ3o39AHJbQ2QXXKzcDXonDzUD9HBetdicM4V2qb6QHvJmPksTrROrpikpogrt7HvpInEnJ0mLHN0WGFv1YTsEzkodJWSaI3116MEYS1lOjFHekgBmEkKXrtZSmN9fuwA7ou7SPFs%2BbHBhp3tf3dh1%2B7HSfuzEakNBU7F2uzA2puJIk%2BFqzJYkIaJcTdnOy6F46UJGsnfVuMhHALi9oDpIDr4CmsGlgelgvb4YwJP%2Bv2xqL4Z55yg6q2guwewGvJONvJG%2BqExp1i0Z%2B2Zhd2ViXWQlPI5Ad6TPgzsj4pd34HMFuKWQMFepaQA9%2FaQHgBQcFc%2BF4c1Wkvg%2BOpaxNhJLRF8w33FLBXAy6D3iJsZ2mMrEkG1tf7PLY9kE8b6uH5s25vwR5LV4TcuBW9Sr0SQvoxntfr904a6Nl7bIDw3TJaRMloSvCb3Qy8ofLjNyaD04G3DP7MdRRiMJPby8EGOqUBDvpu%2Fnu5pG5hD7B2rVJqukRo89VslnsDNX3qs5wjcmrWRb6Y9qazza1XL2ywtFvJnuL2nQbkv6VW1Ukh0%2BbR%2Fk26sBQNQZ1gz72vPcz2LCV%2ByrV7a0l4AVTe3Nepgx78QMs56HlDDGM2FamSIB7MTb2gPQuSaROi9k4uGN%2B0Vh3H15h4IAwjJTRJEInVdgIIDBHM3uXboFCDGXCrlkW4F2Uhj9fu&X-Amz-Signature=8d86f4c2fb934baf3890c8aba516f9b87cf2a857fb3da2508f47daca19e9838d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLDUQO4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID%2FvocaL2RxFsmbH4w19LLvKvld6fOmCpenRhRdpjJ22AiEAoovnuzAcVvta2TA4M1TGQuvuZLOFQQNz%2FZoj9xcy4soq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEC9fJ8pqcKQtLy6QCrcA6%2FFITStz5Mdlm2Ex%2BZNS2dGFDR1Fm9Udn%2BjOjmPbthLAKts0uYNxFwPB1PBGS29q4mGHhpx%2BqgNe%2FIWspapLYRKzP0zmq%2FhLtpZJ6Alq%2FUY54Z4M0ztFoOVgOKhtXdw5DMDrPrnxBz1ShLDR3sKvX9XLqAUQcDth%2BD%2BzGKzfunU1AV7Y6u4gl50ktbvudRWxAvU2F0f%2BsheajGJYTGyQMZY8yi9JhvwH3mEJKFo%2FUXTQNArtelVIOza7wxdxpQqz9mFSeOqaZ4adymwtYxdrKVSzuXJgwpmjY2a1aNl7sEHzhK3peSYFrUVKNcxeB1qKr5i4yFVi8ssvmAAgOAPfLoM%2BQlNxmbpyGZA6A9rb1T8khY8%2FtS%2Fc81uZVvGQiJJpwtKwJWapBp8%2FLkjDY0F0Y6M8VYgmcGX%2BFtQrOztrfqzJCgMRNPIu49V7PSfqesYgd8E9J3hY%2F9JosyLpapnNJtXT04Llt7%2FTRKLHiKYMlVX%2FlKU3cingdcp6KZ0fYME3vb2vgtd2YESvquCRJNKkPyljBnOo2oeMxqIsyilgdWe69m%2F4jeZOXfzR75NDmKSho1xH%2BVH0W%2FfyC7m%2BJRZz%2Fs0Yfgv6PXmcYJQPD8TeRKIItEDL4fcQadUI0u3MJzey8EGOqUBh%2FdFVLpYVJSEaeYG2ZlqzksgY8ZEG0IdS0QReBjS5OS6z%2Fpx0GdjU4uzx%2BMQ8tFAjweA4XAHtLGE%2FApN44q60tq0XYTzRJwX1Pn6iCmgkBoz%2FpMf9oY4Tsov0JzrwSTlXaNwi7DQBTLIkExULRIEZ9eRifUuC4j62tnllSvqGceu4AwOXP1HYhIosMxYGnncljwl3WkqPnrB7j1B7%2BJJIkoN3L4C&X-Amz-Signature=959e66c06385dbc8af75a206d46c42d8fe1918fb913c95cf5fb5dc2ef7006d80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KUXXZS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDoszsKgsrQ5i8YdWlRjMnpXT7fPbmlpDnMBLPuBK%2BN9QIhAIcLlh%2BiSFfv4X6EMTC1mqh9YXvk%2BlIhAV80elqPP%2Fr%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgyxCcxPyTbEmITqUksq3APWY6MZH8NxrWngUwlcJTf0Qb16iqXE5pqSuLWs%2FPCoRHETHrO%2FtfpuTfZiTI2HJfu5koAyPTxzMLAIuKZLOqdMrP7wacd%2BJbcfOtUqdROABik5m5wKKTIw6eW65giiAmd80LYja98JknzOLIRNQHI26SUUsJTzNfX9FYV8pGpHNcFLAoJylBI1yZxxhHwnYdlFEp3jCQ1fY1W7%2B01%2FPTQOAeRVBCd%2FQHbstCszJKjZ4RGxj6CLjbCsoloaTwZZGHejCgliEGVSsmT21tlierxdvSzeUunc57%2BVixYVmmSFpElglzv6yYTra9pac1IwUtqUTIyKe5sA1%2Fv%2BHZq6hJjzE%2BcN8OnrGzcDKGwikv6T7iOSGinwE0cpFmNCKxnStkHjBMe1K6i%2FhTvEb8AzVYok4%2BEgHJNlX9pvwOzv4Kku5P%2FUd6yZvOtw0tmlE0f5C06DprAAbUFZ19HAyA6K7vkj%2FznqXzksCm409gW2szvqQI12MYijA9Jhuucstb7aL6Bcij6bu3%2F7ib4LRIvOFTfD8sTGTt2T%2BepNJs6C694mUhNwJBwmrFRZPBwy71HkJpYJVIeSkr8FfZA3EGyeOyZw41wUqiiNmMl6OjIx2WmSBSil5k%2BlZCtwHfkIRTDg%2FMvBBjqkAaRv2hxxWAZDQqGgHu%2BvHbHPUJtbMpV9dilvJtM1QI7AQZzcjVz4To2z9VOak5MOneYr59Ie2uesMvGq1oIqju3FZuOb96t%2BOAlUYkv%2F7JIZfgX4Amah9zZRoTTOMkyl2w8yhiJI0mLtXc4A%2FTKqvC7GqfCfqNH1iEK07fnKd1Vda09GkB759ZVpXLpi%2F27iTTMT6vBR%2Fsl0ALzQjhDJu83p9FTa&X-Amz-Signature=54e54f4f02b6e5fbc70abd04485e0475b3f9f51eedc0bab8638ae5a15d3b09c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
