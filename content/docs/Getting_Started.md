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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDYYV27%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm9n05Kk5qfd9E2emMz5dwrlMFrcDyVLvKLakqCY%2BTDAIhAO9yUYTIfAurfgQ1FEfnQ%2F3ibXfMnjYHXLAWjwDoihREKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq4dGFtFhBwgWYHUYq3APZxeqOeDxqOP2LGYSNd1mnEBXo8bNyT0%2F7wEWJP7PRGu5y%2F4AYyskVZyxxELFQJFGSPJLFWVwiKowSkH2bgldxlY51lDlfr4s6wP%2By%2FWiCk298t0d7acACuHn7%2FVWqjco17%2Bh3vzIlyNBp1BSHAosU%2FD1O8XDBopa3BkxfJtp55TIgF6vk9bToIOVBGWfo%2F0wPMHmeaNHm7oHc340%2BXMasZYkhWpdSNpLsOSdRikZDb2XyN32zIT2jjcLqsjxl%2Bwn5vKC6d14%2BwVqNa0NiGRzQ7th0zRhsK3N7IYCEvNqdei3yOAks7v90IgnH530qsuM42Tb1J4RkvdKvJg4RM79BGGqdkboYPbykIbTTr7BT7M0OnoH%2BlaFjQ5fMRovH3obof%2FdlGF3JHLwy%2BTsnEYsLMfGjxsrnq99O0z%2F2HuVVzfQgmZlBTobr3X1Bqsu%2Fk2CvxnhBzy%2FdNiv5sz4BAVEOwGBWccFb%2B65LaMwd5NNkT7zWYwwxQ8F4W%2BnbeACds673y7BkjVXJNAxmO8TFXZYTevUdZLWPwDhK%2BJ8pB%2F4L0mynsyWa4VW5N6aBiS6DhgtcQZfYT7ERigcnyU6GlyoF0JU%2BEK%2Fc6%2Bs0whaLZjwfm8NbR8cLF%2BtoHrbrPTCisuPBBjqkAb6egfCTGEfBjvLyNQhWfrk%2BqmH72w9cW0AxqcV9rqvG60qGmqvBJ%2Br2ycTSzRJXWcBxA3F%2FNGT%2FLMTARAVOCyrnHCvAFfzARgqxnrEqtdccOyhB0EN62%2BGqEiZ7KWu3tBvibYm9mDTlAYTYEf%2FN20sDWKHLiPcfGA0VJYgqfaunO1BYhHNyR4%2B0U8Qg%2FBKq4kHoN0LQ7LuLplSj%2FN2yBkufS%2FxW&X-Amz-Signature=d329f2e94787119488604e75160f213cc0ff3ee9e6568605184aa39a2fe0d008&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDYYV27%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm9n05Kk5qfd9E2emMz5dwrlMFrcDyVLvKLakqCY%2BTDAIhAO9yUYTIfAurfgQ1FEfnQ%2F3ibXfMnjYHXLAWjwDoihREKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq4dGFtFhBwgWYHUYq3APZxeqOeDxqOP2LGYSNd1mnEBXo8bNyT0%2F7wEWJP7PRGu5y%2F4AYyskVZyxxELFQJFGSPJLFWVwiKowSkH2bgldxlY51lDlfr4s6wP%2By%2FWiCk298t0d7acACuHn7%2FVWqjco17%2Bh3vzIlyNBp1BSHAosU%2FD1O8XDBopa3BkxfJtp55TIgF6vk9bToIOVBGWfo%2F0wPMHmeaNHm7oHc340%2BXMasZYkhWpdSNpLsOSdRikZDb2XyN32zIT2jjcLqsjxl%2Bwn5vKC6d14%2BwVqNa0NiGRzQ7th0zRhsK3N7IYCEvNqdei3yOAks7v90IgnH530qsuM42Tb1J4RkvdKvJg4RM79BGGqdkboYPbykIbTTr7BT7M0OnoH%2BlaFjQ5fMRovH3obof%2FdlGF3JHLwy%2BTsnEYsLMfGjxsrnq99O0z%2F2HuVVzfQgmZlBTobr3X1Bqsu%2Fk2CvxnhBzy%2FdNiv5sz4BAVEOwGBWccFb%2B65LaMwd5NNkT7zWYwwxQ8F4W%2BnbeACds673y7BkjVXJNAxmO8TFXZYTevUdZLWPwDhK%2BJ8pB%2F4L0mynsyWa4VW5N6aBiS6DhgtcQZfYT7ERigcnyU6GlyoF0JU%2BEK%2Fc6%2Bs0whaLZjwfm8NbR8cLF%2BtoHrbrPTCisuPBBjqkAb6egfCTGEfBjvLyNQhWfrk%2BqmH72w9cW0AxqcV9rqvG60qGmqvBJ%2Br2ycTSzRJXWcBxA3F%2FNGT%2FLMTARAVOCyrnHCvAFfzARgqxnrEqtdccOyhB0EN62%2BGqEiZ7KWu3tBvibYm9mDTlAYTYEf%2FN20sDWKHLiPcfGA0VJYgqfaunO1BYhHNyR4%2B0U8Qg%2FBKq4kHoN0LQ7LuLplSj%2FN2yBkufS%2FxW&X-Amz-Signature=7176f2e352a3fca6bdd5c8d434f6b384f81c083e322b1cd3d967b9b75a4caa53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDYYV27%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm9n05Kk5qfd9E2emMz5dwrlMFrcDyVLvKLakqCY%2BTDAIhAO9yUYTIfAurfgQ1FEfnQ%2F3ibXfMnjYHXLAWjwDoihREKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq4dGFtFhBwgWYHUYq3APZxeqOeDxqOP2LGYSNd1mnEBXo8bNyT0%2F7wEWJP7PRGu5y%2F4AYyskVZyxxELFQJFGSPJLFWVwiKowSkH2bgldxlY51lDlfr4s6wP%2By%2FWiCk298t0d7acACuHn7%2FVWqjco17%2Bh3vzIlyNBp1BSHAosU%2FD1O8XDBopa3BkxfJtp55TIgF6vk9bToIOVBGWfo%2F0wPMHmeaNHm7oHc340%2BXMasZYkhWpdSNpLsOSdRikZDb2XyN32zIT2jjcLqsjxl%2Bwn5vKC6d14%2BwVqNa0NiGRzQ7th0zRhsK3N7IYCEvNqdei3yOAks7v90IgnH530qsuM42Tb1J4RkvdKvJg4RM79BGGqdkboYPbykIbTTr7BT7M0OnoH%2BlaFjQ5fMRovH3obof%2FdlGF3JHLwy%2BTsnEYsLMfGjxsrnq99O0z%2F2HuVVzfQgmZlBTobr3X1Bqsu%2Fk2CvxnhBzy%2FdNiv5sz4BAVEOwGBWccFb%2B65LaMwd5NNkT7zWYwwxQ8F4W%2BnbeACds673y7BkjVXJNAxmO8TFXZYTevUdZLWPwDhK%2BJ8pB%2F4L0mynsyWa4VW5N6aBiS6DhgtcQZfYT7ERigcnyU6GlyoF0JU%2BEK%2Fc6%2Bs0whaLZjwfm8NbR8cLF%2BtoHrbrPTCisuPBBjqkAb6egfCTGEfBjvLyNQhWfrk%2BqmH72w9cW0AxqcV9rqvG60qGmqvBJ%2Br2ycTSzRJXWcBxA3F%2FNGT%2FLMTARAVOCyrnHCvAFfzARgqxnrEqtdccOyhB0EN62%2BGqEiZ7KWu3tBvibYm9mDTlAYTYEf%2FN20sDWKHLiPcfGA0VJYgqfaunO1BYhHNyR4%2B0U8Qg%2FBKq4kHoN0LQ7LuLplSj%2FN2yBkufS%2FxW&X-Amz-Signature=76baec4a286b7f2c5b984efa5fbfb8b8f92a42e7dfed86df1231c05484a2a341&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOAXLHR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOfSOSZ6rFzSJB6x4cGivW%2BHr7X%2FxIHGLmnzotGefzkgIhAI8mqZypeEElLnKsgER4leWM5L5I%2FO%2FuMhLek4lqEda2KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIX7WdiO2TyqP81MIq3AOPIRDt4gpJoY20Kk2QDV7MHMDzIwmGTxUJgh1XpGHPziWAPlOzoUD%2FJzhUVAgqCiRVxzMYV8zrWtD2j7IB9XGkeV6lqNvJZ4zVMrHCGlgWWJWt5bpF9DrnreoP%2BK%2Bic3TyPPWOTAhVdJo6ayFqGgYQ3qkyALCBzmYMpRyuTEkD8UD8fqFAy8LalWuKWrSxPEHD8yeqDFUvZou53sccqLVrDGc9tOp%2FGop%2Bp147diYD2VdYxCZ5JpswAcNsrRzSRvIzGjmuWXFZ7EjzaYVCFTHsL25tXiMPzgBES1ELUbG6JLZVWYDLlps4MoNwd5xNrzcH7%2FAfEUHqGfYMZ%2FVFSqmzG2Wzo%2Fh5rU9Poj%2Fq%2B49cAmAqDDecD9n9d0bTErBaTdx8TqS%2Fdd62PCKctNEOeZtfpVK8BlIDp7QjIDVCj4%2BlROeYmmQL6J2NDTR7WBKyRTs%2Btg%2FGNU3E6FtfhBKh7k3V88CcE0jG2YeB7INSpBPZ8LHgkPEmiB5izsjgMHmZbLgiDqK2u7o0UpvEBepLhVeSJe7TYO06Rds%2F96hxajNaHDtql3O0FLkvtoFx1UEdz7U%2Fr0Cod8GdLN5WBfsPnMCpF%2FkXLeGWNfxIbBgnFJ3MMhhcODwkT%2BvkUk9trzDpsuPBBjqkAb0CLaZsJ0Q9uilUlk6G2%2FqBMoglhCrMPWA8G0d3%2BeRjRFyBfbuaSVVR87X76qw7SNBDb1yN39syL3YVI1YNQiMO7ABJX2bsryNcthbfhVBd9jUwef9DgOTu2LCmHxghzzHMYyb2rv9ekMhZiOxmi%2BpzYEnt8PqsAWnaRJCs%2BDr63m%2FGTbicyNANlRYpzzCpVA34uzz5Eo8pCvmeLbnz4R%2BaKXsW&X-Amz-Signature=e0a4baadd3fedbdfb2c0fcd0d61a5c0d3284191746034bc12e02b25184bea098&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QHOEMA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV7lAxTGhNe1X4EdgnwRmeAjMFYUZxDcksbVLmMvak2AIgAQBr1JZbv8dwoJ%2FU%2FGc9GIlXyBHOoY2nnwUdGx1oDUoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8QsKoGzqJpMoRulCrcA6CRecog%2BaM%2BsUSP4rbGutc07mo4Op4yOUXAJxtSnIigxFLD4jwPtYlO%2BvusyzWIlZEjJQixBFbKsgMEZk3YmNlXJo0sDv55psKn1SdAQ3V2jprCC5iEC36OK775v7Aq%2BKMFROnAJWBkA9WolXihwGFjBpHs7L5HNxN3tinGy87IiuV8Vmz%2BFnADvSqxihmuMEFLb6Vwil1m7RhRWnXsM07vBujzN7rdIGfE0Gg996QqRqEogqc4KrkiXfJfieAaLuv9ZBWTZDPr6bMuqJlznWKgJ7zoAUEvMicj7nbgt4mWRqITU3dp1jwvYTaScQ7kKACUIh8eaAZlXpj0pn3XXDj3vAGkrVHtI8ggY7%2FC%2Fqim7wtEOQmUFoYgSdpGw7sdNwwVibO7FmBhEbbfW%2FaieHve%2FpuLpoLaMAeQPNvlENfkgxWjB9CnRX5JuM1pQi62z4xeek8l%2BD187s4GwRonOl6CRH6supDl1mmwZFNoBAFj%2Bod2Pt%2BVDEPXRNbD5hK%2BvCigunbiPdsQ2ju3hpZ4EPQx8eR3QgqPmpVZRs1VC7AaJEwn35uR%2Fp8fhmH9YBm55fSbskGVroh3dnePmk0NCsG4NvUHqxZe6IDJY45Di%2B0dyHcWawyH74h6AjRVMMCz48EGOqUBi8Xbt9mMqx3O8s2nhpPoSuud5P8%2FIVgbzBDh6i10uGefZPmbIkwfXX7DqNgS1KNuhDwNhTKx%2FH5v3%2FvRSE5fFSTSEbta5kck6LOPwn4pav45PfM5oDmjHIV0HPag3tY4eQQQQJTADTUcNzr3iKqKjjcfbyPxJEMQ0JjYtZD3CeBXmnjFwTcKN7sZWKTuyXMXE4kXblgLFBm9fWjsGjHVy90MTkUZ&X-Amz-Signature=c6edd7787a495390139fa8f94ffa8128bff9a5b9d6cbc734cd5204aa8e317dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDYYV27%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm9n05Kk5qfd9E2emMz5dwrlMFrcDyVLvKLakqCY%2BTDAIhAO9yUYTIfAurfgQ1FEfnQ%2F3ibXfMnjYHXLAWjwDoihREKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq4dGFtFhBwgWYHUYq3APZxeqOeDxqOP2LGYSNd1mnEBXo8bNyT0%2F7wEWJP7PRGu5y%2F4AYyskVZyxxELFQJFGSPJLFWVwiKowSkH2bgldxlY51lDlfr4s6wP%2By%2FWiCk298t0d7acACuHn7%2FVWqjco17%2Bh3vzIlyNBp1BSHAosU%2FD1O8XDBopa3BkxfJtp55TIgF6vk9bToIOVBGWfo%2F0wPMHmeaNHm7oHc340%2BXMasZYkhWpdSNpLsOSdRikZDb2XyN32zIT2jjcLqsjxl%2Bwn5vKC6d14%2BwVqNa0NiGRzQ7th0zRhsK3N7IYCEvNqdei3yOAks7v90IgnH530qsuM42Tb1J4RkvdKvJg4RM79BGGqdkboYPbykIbTTr7BT7M0OnoH%2BlaFjQ5fMRovH3obof%2FdlGF3JHLwy%2BTsnEYsLMfGjxsrnq99O0z%2F2HuVVzfQgmZlBTobr3X1Bqsu%2Fk2CvxnhBzy%2FdNiv5sz4BAVEOwGBWccFb%2B65LaMwd5NNkT7zWYwwxQ8F4W%2BnbeACds673y7BkjVXJNAxmO8TFXZYTevUdZLWPwDhK%2BJ8pB%2F4L0mynsyWa4VW5N6aBiS6DhgtcQZfYT7ERigcnyU6GlyoF0JU%2BEK%2Fc6%2Bs0whaLZjwfm8NbR8cLF%2BtoHrbrPTCisuPBBjqkAb6egfCTGEfBjvLyNQhWfrk%2BqmH72w9cW0AxqcV9rqvG60qGmqvBJ%2Br2ycTSzRJXWcBxA3F%2FNGT%2FLMTARAVOCyrnHCvAFfzARgqxnrEqtdccOyhB0EN62%2BGqEiZ7KWu3tBvibYm9mDTlAYTYEf%2FN20sDWKHLiPcfGA0VJYgqfaunO1BYhHNyR4%2B0U8Qg%2FBKq4kHoN0LQ7LuLplSj%2FN2yBkufS%2FxW&X-Amz-Signature=04d1d9a9cbad397e8e3d8574020e27ea610e96cfba6a1eeb0598097bd5350f45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
