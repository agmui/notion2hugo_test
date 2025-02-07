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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAHHK7I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGsLuGOAVOaa65THwtlwkactaz9tHuqK2zDPAxZ%2Fxk46AiAmOhqZj5hUTSW8EFME8hxabwCcWmUzZ0uB3pCvXkKiwir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGcuz2uCqPTHO1D22KtwDGg3W32Pkzxv04%2FXZFwLN85iFt%2BMOGpiqYLgi5GTEcGv4AOHpoe0BmaAzBfIKqJ2Rlypkxu7lTWRQ3ZEP82hxcCIHZii07Pb%2BbtNfxuoYctzVUsHrqjl8mNuA0YPz71B7rTzou5%2BVnH19ezj0hcZ5D1RzSjeu1vUX3nP7DlFxANsFdGhU3OLJkDbeDayj8%2FOVl%2F24WBVgrMaumH4qiBm4ocgCEn11CYA43YW1Z9aBrnKZdqXT0hbNSuRDgXPhaf93%2FWtYM%2FkGOyBp9MCtxMosTlvPlvT6APn173S0%2FFmMerJxNqsfQqBFvmsPdxw89VyU49MMmuh0%2FUfTeEOgEF6D4mGhvaenFapMVyobAbc2DcefrxYU4WgNJyMmuY8Ole37kejf3PX0m0q8UqzaEZmHLnXk6xOwRMrVEST%2FLv2ayx1t9iyIfY2ME6ag5OvFUBlwVY6sP1eiPeHeZMmvQ%2BCw7%2BGCMPwQcKU14hOZuFk6iHFoZhDFMcDFYLGIg5W2BYQTuDsAWqdNbhelfdKKIqVYLSGyw2bngnq7tJJgsxW4VNrbBThdmYoNoKeAATmjjcxxwXorEtuk9UzER4yFkB%2Bxw7SQOgmHIL4DqSvPoLCuV0XALZ3WesqDMbPBTCIw3fCXvQY6pgETD%2BKXbkWQBGpCipS55ysAaid4cP%2BxzVD8o8wDA69ZcaZo7LHqjsDgCe35hubAn01PCEwe6q0IlyGyFP3q6hnWi4T3t%2FX%2F%2Bb3I7HYJ6Ud4UEA1gBajdx4Ut2c2%2FJx4obfl%2BHAFbvJ5goyj1b3MQ1XVTjqc1cds56SYQUYPqoxWmXoQzkwTLVPl1SP7ECFdJ4j2dSVrnB4S181wqZSIhQ72Hrc%2FHEQR&X-Amz-Signature=c17cd9289d59085193d4e860f60c7b830fe33c91ee3a1b6e0b5dadf6c3518f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAHHK7I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGsLuGOAVOaa65THwtlwkactaz9tHuqK2zDPAxZ%2Fxk46AiAmOhqZj5hUTSW8EFME8hxabwCcWmUzZ0uB3pCvXkKiwir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGcuz2uCqPTHO1D22KtwDGg3W32Pkzxv04%2FXZFwLN85iFt%2BMOGpiqYLgi5GTEcGv4AOHpoe0BmaAzBfIKqJ2Rlypkxu7lTWRQ3ZEP82hxcCIHZii07Pb%2BbtNfxuoYctzVUsHrqjl8mNuA0YPz71B7rTzou5%2BVnH19ezj0hcZ5D1RzSjeu1vUX3nP7DlFxANsFdGhU3OLJkDbeDayj8%2FOVl%2F24WBVgrMaumH4qiBm4ocgCEn11CYA43YW1Z9aBrnKZdqXT0hbNSuRDgXPhaf93%2FWtYM%2FkGOyBp9MCtxMosTlvPlvT6APn173S0%2FFmMerJxNqsfQqBFvmsPdxw89VyU49MMmuh0%2FUfTeEOgEF6D4mGhvaenFapMVyobAbc2DcefrxYU4WgNJyMmuY8Ole37kejf3PX0m0q8UqzaEZmHLnXk6xOwRMrVEST%2FLv2ayx1t9iyIfY2ME6ag5OvFUBlwVY6sP1eiPeHeZMmvQ%2BCw7%2BGCMPwQcKU14hOZuFk6iHFoZhDFMcDFYLGIg5W2BYQTuDsAWqdNbhelfdKKIqVYLSGyw2bngnq7tJJgsxW4VNrbBThdmYoNoKeAATmjjcxxwXorEtuk9UzER4yFkB%2Bxw7SQOgmHIL4DqSvPoLCuV0XALZ3WesqDMbPBTCIw3fCXvQY6pgETD%2BKXbkWQBGpCipS55ysAaid4cP%2BxzVD8o8wDA69ZcaZo7LHqjsDgCe35hubAn01PCEwe6q0IlyGyFP3q6hnWi4T3t%2FX%2F%2Bb3I7HYJ6Ud4UEA1gBajdx4Ut2c2%2FJx4obfl%2BHAFbvJ5goyj1b3MQ1XVTjqc1cds56SYQUYPqoxWmXoQzkwTLVPl1SP7ECFdJ4j2dSVrnB4S181wqZSIhQ72Hrc%2FHEQR&X-Amz-Signature=2029b1cc84caa0239e842fb5e166235800382e2abfd368d5a3406700ac3251cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRPWOH7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDBtIykwb8AZ8fwbBUEXkcCMNyoy7HGTv1AjlQw0FMWfAiEAyYHAcnSpYhFxf5yfX9NKPJGdbf%2FGxNQ2NAZOAqgtiu8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOS%2F9mcjbg6DXMXt3CrcAx74FzQbfMWVaqdY5GuxFdE%2FqTMcC9%2BGc23WrB66DJ8z1KsimJ3OX3mGpQPfVHCSApJDwLYVP3ONJp0F5VOD9RIsAoxsoz9Wie4k4eVzUhXrWARtfoGethr6ED%2FfperQb%2BD4cx%2Bq4is1%2Bbx%2F67UgbIuQk8AE3EPCmkmFfnRm7ED8tI%2B032%2BDyIxnC2xy33iI1CKfotvgyhg51%2Fe8o2xHiESsrakXw6moxJX2T%2FX7VIohYwFTMi%2BKRMANeatSGzG9WATo9HfpcTmblc%2BjJ67joVaSoJRfisGfVFgIrpMmUIMzPejGFM2HIDxs9y%2BHy1YxJtgobm3R09AVdCVSDzT8cYj25jXs7iBJOTWdR1DjVSgWRPFwY2q3F7Vytw2nzBzVesxAt3yctLTUmG5ICWixXcbDkQSERaR3414blYmydFaeKgYYVkoRit4q3qMSz03qUMwgR9hkGLLkCZK8Q6Ile41RgVwLNIA7cqasasb23jpkwgozu76Qbc4qVkgglhZZ%2BsTK3Ru8vbd6%2FZyRPzBPa17u4jiKG8RBvFSdmobl3t2o8m44E5YWl5akoh4cdwuxSa9uMykSkcmxn0xKCuxbIgQjp4znP0j1d5kKzoPykR371%2FkgfW%2Fn65WfMFArMKfwl70GOqUBDDXC%2F7%2Fw5oG75psUu4dKccy8aUZwVwsRJ9yJ5t0gsH2%2BteT10F5FvkF%2BWZi%2FUHk%2Fl0EOPqnqVWumIh%2FRZ1KreyQPVRES0v8hTsQMLtx%2F%2BUyEr6GwvjmF7%2B%2BImtLXyb9UKp%2FK2v9XeLJ3XdFJnbJtuweoArZ6LVe75emBnNChl0W7bfkRILeX7UrUykCVi5gN19%2Fns9fxc%2FmKhH25qf8WSs5G6cPr&X-Amz-Signature=a42ebdbf8c2ae4ba88c0e53c1212fd8cd2811804f09729e69f9575b14b0c3ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDFMVLK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDqeaadCsscQAIgBQdRj31%2BIxS07tOlFZjRYB8g2qDz4gIgN32S6mcSXAhB9HriryaPtzQEiCjkqqoJDxWXiCw315oq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEXpUuoG9KS4bqPR7CrcA6BJBIzc1qIZJMUTVDJQHoY1N3kXt1NeXl6Ta4UcbdUhdaONMP2mbTp1cs%2F6JVhH%2FF5rvoUTGZH6VSfaB4bvEUCHrmUnPPw7ezLjYm%2FsNZf%2BAGh1fjcpcwAjQRCm17BQIQSrH5mzvRNzcR%2B7VxAun5UdfpHp6HlhfEt3vDd0A%2Fb59m9DM6SLnRpX8i2oBl03tq0vROxkwmIO93Chm6fKAcb9vlQ8lebFsB2841EERlL7FxQMFx1lCdM%2BrnAOq406b%2FR4EQ2OVNNI6PmgYJZSDnRp8sMIKb6vDjHutMkSnBDSZaYskvr%2FbaYUhwKNpkEe5yfl9zjjJ3Qngtf9bP5KRDJSSVWN47g%2BTx9%2FCh3lqGqJ56%2BnhEPuSxNi%2BYesujkmym3ukZWDaeuJsPkosGKpIiJXfV0dQN4vmDwEJ5Me%2F%2F6Fz%2FQShIELgjIOiEXAurXmb72e39S2eIBthep7B2gbzCT166WPcRIfbnl%2F3JEsfxJToTAjwm1bRDczKf1hX9KTi4GS%2B7%2B9c1WxWBipwiiFK3FK39d7eg9IwYVdQMYP7lOQ5IEJyg030RrZsyRwr9L9W%2FTurejE1sykViXICd3tll127nnOb4b0TVjSO4ODBwiVepEkIU6wbtR%2B0cpjMJ37lr0GOqUBD72SzJn4oiwNeoPrM1TUPSRL8Qqrt9GkS5yrLy5GbW5X4B3eU37KuDs4FROLzBl43ySrCjK8lfc37kG%2FqLgj2OBBazezjbZFUCb9GhLqMCCRyphCx2Fl28iLtH3eUggUIE2pWgwjmP6qLnl0LEycm%2Baek5APAbr9okYH5LaqHlJcifVOVJFU41t3oKKtvCqgswRZTXSqtHX07gSj4hOVkCk%2BBrN6&X-Amz-Signature=db537bac3cebd21aea8f94a9ee7667bcaea25bed6b354050e3fe5200f284dab0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAHHK7I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGsLuGOAVOaa65THwtlwkactaz9tHuqK2zDPAxZ%2Fxk46AiAmOhqZj5hUTSW8EFME8hxabwCcWmUzZ0uB3pCvXkKiwir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGcuz2uCqPTHO1D22KtwDGg3W32Pkzxv04%2FXZFwLN85iFt%2BMOGpiqYLgi5GTEcGv4AOHpoe0BmaAzBfIKqJ2Rlypkxu7lTWRQ3ZEP82hxcCIHZii07Pb%2BbtNfxuoYctzVUsHrqjl8mNuA0YPz71B7rTzou5%2BVnH19ezj0hcZ5D1RzSjeu1vUX3nP7DlFxANsFdGhU3OLJkDbeDayj8%2FOVl%2F24WBVgrMaumH4qiBm4ocgCEn11CYA43YW1Z9aBrnKZdqXT0hbNSuRDgXPhaf93%2FWtYM%2FkGOyBp9MCtxMosTlvPlvT6APn173S0%2FFmMerJxNqsfQqBFvmsPdxw89VyU49MMmuh0%2FUfTeEOgEF6D4mGhvaenFapMVyobAbc2DcefrxYU4WgNJyMmuY8Ole37kejf3PX0m0q8UqzaEZmHLnXk6xOwRMrVEST%2FLv2ayx1t9iyIfY2ME6ag5OvFUBlwVY6sP1eiPeHeZMmvQ%2BCw7%2BGCMPwQcKU14hOZuFk6iHFoZhDFMcDFYLGIg5W2BYQTuDsAWqdNbhelfdKKIqVYLSGyw2bngnq7tJJgsxW4VNrbBThdmYoNoKeAATmjjcxxwXorEtuk9UzER4yFkB%2Bxw7SQOgmHIL4DqSvPoLCuV0XALZ3WesqDMbPBTCIw3fCXvQY6pgETD%2BKXbkWQBGpCipS55ysAaid4cP%2BxzVD8o8wDA69ZcaZo7LHqjsDgCe35hubAn01PCEwe6q0IlyGyFP3q6hnWi4T3t%2FX%2F%2Bb3I7HYJ6Ud4UEA1gBajdx4Ut2c2%2FJx4obfl%2BHAFbvJ5goyj1b3MQ1XVTjqc1cds56SYQUYPqoxWmXoQzkwTLVPl1SP7ECFdJ4j2dSVrnB4S181wqZSIhQ72Hrc%2FHEQR&X-Amz-Signature=c57c351a9be8fa6e9553887b32dad975b46cc6cea835268ee5ff01feab92f681&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
