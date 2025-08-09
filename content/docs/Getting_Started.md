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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZNXDEN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyzg03%2BFiT59SK%2BAwCN96eX27vQSaMOw%2B3beoEXJTVWgIhAMrzxFFhjCqW6u%2Fqu0jriD2YFANB4mpHZHRfHeW48%2By5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd0CorzYu0%2B1JWTVAq3AMUSwIjB0OA5vKA4W%2F%2FhHgmvAc70qA%2BcNt03VU%2BfFWVcCZJxdqdWBmiZYoJUUVSSQunPs%2Bvu2y2dva56czmEfEB5mbCHn%2FdmvwKKBbS4UugCCRLx2wOY5tR2YZXk5GnQSR7rNh12YpyL75mh7DT5Wc5fLcCoRrELTXbhfipBGgvizMSlKzOhDInXoXjlBjYfpdoUMc4YgCMiloMNGfoTasq7rEzcYMaeg%2FmIBudZNPdNvZ69PRD1RqJRtQWz5zYpZJE9ngi5U5AMU4TIGrltNEHFDBvHr%2BCEXo40LTO%2Fuqfo3qwtHvf11dE65e6REAkEUz%2F3oT0scH5iOwO%2Bzz%2BNjIEh%2FpiFFMeDBzwWYG6B2lWQ0QYTLM%2BGwh8r8I3VZYzehtJ4qakDyHQXC%2B3DpA67aPbKujYHw8tX%2B2YCX8fSNV6lUummAYQctmDmSiJXcY8KeTkn08VAtCv%2BJPz9OMPDxrd1NBRWMbyaHT3paoxdlmP3Jt1FpTQNDMtFB3jeGSeLgjMN7wlUHgWnD83UZqesVssvUadIKR%2Fl4%2FCZEOuXRUCcbtzxAZgDVQAu4BKn3fF%2FGUQbC92ErD469OLp4pkFn9SJGM1WFr2gRg771mlkAThhYzUKAFksjgvxSVlITCYxdvEBjqkAW4VCZkaX%2Fy3evz%2BxlHtTVi6gVnIDIhyf2K84Q3rbFrPaBmqwUvCa%2FVbf%2F3TROVi7NtlKW%2FRE4kKVt%2FrivnxxJoAG2ue2HIGGnyktZVzUrkc1XfFCh1XQCVFPQYzz6XO7b8OA4TBNfFFVWM%2BmjsnEsuzubg1vrnqg6eR7qJhmK04r%2BIzNG%2BBobEH23KSp1jQPmghOHmICGBvhkB6oTs7DmjibU4l&X-Amz-Signature=0f2c9b7968de03b63e4f6ecb3bce6abbd453e58fbbd370ae9b366a49f8875772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZNXDEN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyzg03%2BFiT59SK%2BAwCN96eX27vQSaMOw%2B3beoEXJTVWgIhAMrzxFFhjCqW6u%2Fqu0jriD2YFANB4mpHZHRfHeW48%2By5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd0CorzYu0%2B1JWTVAq3AMUSwIjB0OA5vKA4W%2F%2FhHgmvAc70qA%2BcNt03VU%2BfFWVcCZJxdqdWBmiZYoJUUVSSQunPs%2Bvu2y2dva56czmEfEB5mbCHn%2FdmvwKKBbS4UugCCRLx2wOY5tR2YZXk5GnQSR7rNh12YpyL75mh7DT5Wc5fLcCoRrELTXbhfipBGgvizMSlKzOhDInXoXjlBjYfpdoUMc4YgCMiloMNGfoTasq7rEzcYMaeg%2FmIBudZNPdNvZ69PRD1RqJRtQWz5zYpZJE9ngi5U5AMU4TIGrltNEHFDBvHr%2BCEXo40LTO%2Fuqfo3qwtHvf11dE65e6REAkEUz%2F3oT0scH5iOwO%2Bzz%2BNjIEh%2FpiFFMeDBzwWYG6B2lWQ0QYTLM%2BGwh8r8I3VZYzehtJ4qakDyHQXC%2B3DpA67aPbKujYHw8tX%2B2YCX8fSNV6lUummAYQctmDmSiJXcY8KeTkn08VAtCv%2BJPz9OMPDxrd1NBRWMbyaHT3paoxdlmP3Jt1FpTQNDMtFB3jeGSeLgjMN7wlUHgWnD83UZqesVssvUadIKR%2Fl4%2FCZEOuXRUCcbtzxAZgDVQAu4BKn3fF%2FGUQbC92ErD469OLp4pkFn9SJGM1WFr2gRg771mlkAThhYzUKAFksjgvxSVlITCYxdvEBjqkAW4VCZkaX%2Fy3evz%2BxlHtTVi6gVnIDIhyf2K84Q3rbFrPaBmqwUvCa%2FVbf%2F3TROVi7NtlKW%2FRE4kKVt%2FrivnxxJoAG2ue2HIGGnyktZVzUrkc1XfFCh1XQCVFPQYzz6XO7b8OA4TBNfFFVWM%2BmjsnEsuzubg1vrnqg6eR7qJhmK04r%2BIzNG%2BBobEH23KSp1jQPmghOHmICGBvhkB6oTs7DmjibU4l&X-Amz-Signature=a58ddd928cee841370dd39da7d630124a9ec52e92b820e5eedbf94c16cd80d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZNXDEN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyzg03%2BFiT59SK%2BAwCN96eX27vQSaMOw%2B3beoEXJTVWgIhAMrzxFFhjCqW6u%2Fqu0jriD2YFANB4mpHZHRfHeW48%2By5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd0CorzYu0%2B1JWTVAq3AMUSwIjB0OA5vKA4W%2F%2FhHgmvAc70qA%2BcNt03VU%2BfFWVcCZJxdqdWBmiZYoJUUVSSQunPs%2Bvu2y2dva56czmEfEB5mbCHn%2FdmvwKKBbS4UugCCRLx2wOY5tR2YZXk5GnQSR7rNh12YpyL75mh7DT5Wc5fLcCoRrELTXbhfipBGgvizMSlKzOhDInXoXjlBjYfpdoUMc4YgCMiloMNGfoTasq7rEzcYMaeg%2FmIBudZNPdNvZ69PRD1RqJRtQWz5zYpZJE9ngi5U5AMU4TIGrltNEHFDBvHr%2BCEXo40LTO%2Fuqfo3qwtHvf11dE65e6REAkEUz%2F3oT0scH5iOwO%2Bzz%2BNjIEh%2FpiFFMeDBzwWYG6B2lWQ0QYTLM%2BGwh8r8I3VZYzehtJ4qakDyHQXC%2B3DpA67aPbKujYHw8tX%2B2YCX8fSNV6lUummAYQctmDmSiJXcY8KeTkn08VAtCv%2BJPz9OMPDxrd1NBRWMbyaHT3paoxdlmP3Jt1FpTQNDMtFB3jeGSeLgjMN7wlUHgWnD83UZqesVssvUadIKR%2Fl4%2FCZEOuXRUCcbtzxAZgDVQAu4BKn3fF%2FGUQbC92ErD469OLp4pkFn9SJGM1WFr2gRg771mlkAThhYzUKAFksjgvxSVlITCYxdvEBjqkAW4VCZkaX%2Fy3evz%2BxlHtTVi6gVnIDIhyf2K84Q3rbFrPaBmqwUvCa%2FVbf%2F3TROVi7NtlKW%2FRE4kKVt%2FrivnxxJoAG2ue2HIGGnyktZVzUrkc1XfFCh1XQCVFPQYzz6XO7b8OA4TBNfFFVWM%2BmjsnEsuzubg1vrnqg6eR7qJhmK04r%2BIzNG%2BBobEH23KSp1jQPmghOHmICGBvhkB6oTs7DmjibU4l&X-Amz-Signature=8ca3189f32f1b8c21bf119679272c10efb5b313a2388682713aefd531d737a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75JSFHM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCO94DJEAocuo%2FOdubA0B0ivsZOx8%2BvZd1ziIKgpJr0fQIgUVCZ9sSY1RYiZARYi9V3LMnEP8ofv8U8jbwGJdvgd3YqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPTTMnEozn0JbmLsCrcAw%2FdT8d9FPqDyNuvVixGDYZTT6QIX1oluSb%2BhFwHjYzSk8Qoqs5tKlIFYERW316Jun3axzOwXojEqBjtAb3ARaW5R4XtR1njszhvmDnILlWWCA%2FNPIX1p7uF8x5xJf%2Bkg3qrRZrhXQRH2pvvmb9Cnkm2%2B7xiLO%2FChpsvIhwhcmSUptW7zdTkTnFkptldW1SMAsS4Q68VJgwpnSV3GaqwINPN8EhYks0McqIdX1%2B8RXiGKfITAstBgQx7FXyVHg1vZZ4yXiLbm%2B%2BfbZFrsNItkeZQHPTl50nJ5BlbdBt5T04bn%2BHx%2FHDVQJGBDNCRPjf3EIRLmrw4Rqy6jdBfv1AHvmc4%2F0s5y89bSGhyRY3%2FWbP6bvViZjdi%2Bn6jp8Aw9ri7JCjkn8ILK3t0q%2FK2zplve1OGOY7RQk%2BcvWS8%2B5noz4t0AEPNwyG0yRmbvnlHcTj956kFlFBQmujGZItQeHb%2Bmk5V7CvIS09BRhc0jptNFUSCaLgp37dI2UdpfDDpd6rszlzr0C8jPmmCMchsi8O7zWwwBkx7CjZU%2F%2Bai6RMkO7fX0VQ30X%2F8JiZSC3NNvobNWTqvRFCbdsuK0pb2Dup%2F6a982m19WlnwJqwyQtXNDKLwy1K0kSFBmO1QCIx1MMHE28QGOqUB2Krvee%2Frw9xyhXKeC3NXfrRMjQvH1x5yF7Gr1JXZVTa0AnWUaPTJdBEu0ViIoVCkRPBhnyqtjnCy8LzEkiuno%2FWRe21DejUdLJU4UdOIvIBoOavUNyXGFg%2FuGgIqqzu0USWlvsnKard6BtKFhxZ2sLLRBiDExMmU27yOCBx8dZfokJKWH6d803ZQu%2F%2BuZF0xG7FOzmFW2B63dDqDmm2HAOoW4EyK&X-Amz-Signature=8b4e755363b6459c0dc95058e3ee0c4ac6016903622055f158687496899063d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZH7ZYDD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDVN7DhPiqnVu42GODZSFo6TJrw0m1RNB1wetYZnmKrhQIhAJqGopLIymMGR8BF68Gyjim6h4X0as19ro4IMrUl9cOMKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0acbj6hBLRR0FsTgq3AMyurgO5vCwaeOyKSIxgmcR2C0EpOymKPUEeGwhThMlaQLFm3aPbgbXB9BOidCxEOn7JiJF4OhRh7lzsB1NdbKchCmJaW0eOQbU2BhfCOaaiQi3%2B99Uf9y8H1cjHWh5uf4xA6FzCiCri%2BooJFEGfNSeAHaXl62eKH%2F3wQiSX5KDRl4FLn0P%2Fxj3Q%2FH2qj%2BPk3UlY1BZHcvOEFx0T8C59XAxj%2Bk8UzbQitKPntqrx1hL2hLaSRIKB91yttGyVacsCMXZObH8DnTHynDKIdh%2FGCOBE4XKttDRl8YE3u6%2BYc0cevZhnG9R48JCeMS476fWsXblNsWahMyMS9QbRplem4kHWikZVBwU2GqAQwVSIwQeNkMi9h8BFQrBGWAAw19nWbSjBePAFFgc5OxPyA%2FDGTt4Ai7J9Pe%2FeN87Gd1BNoCE%2F%2BRPIvTL3NMDc%2Fg%2Be4rAHRkquCU5e9oj6VeAqDDoDuDzuWIcZgMlAp13DsBlDuKGzgU951MlUxW4db81xp59nHpjqNrd062LO%2FSgyvyFiWWtV92Ayop43IJjngmDoQlFvg4iQ6XvTt1mGweMjGKGVyom0Valz0GQhqeGpearMaShm%2BY8AQQXS88pktgRVZ4q%2B2jidGyqsJXAuGpTuDDHxNvEBjqkAa8dFlUe74QqyN5biNNO2u74vsKwFWhLaTfjzeWZLOHT4xUMQVFuhkK4mSnNnTyFY%2ByCpNhNksnx%2FcNQ8PH%2F1oLOjqiKghf6tGzgfEwr33lOTkYgRs%2Fxf6tOYN6m1kHnlQxsQXLfipPRVzdqcfNGgBrkiG4Bzo%2BRqbYTAoj5sEUOLw1b5Ra6P01GYFuuJFChPf0ZrkwFzww8BM9iD8mjwKhSaNrq&X-Amz-Signature=0d5601b543abc307bb547f61fc80f84c2278ab02ad0a03f7fb522952287be347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZNXDEN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyzg03%2BFiT59SK%2BAwCN96eX27vQSaMOw%2B3beoEXJTVWgIhAMrzxFFhjCqW6u%2Fqu0jriD2YFANB4mpHZHRfHeW48%2By5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd0CorzYu0%2B1JWTVAq3AMUSwIjB0OA5vKA4W%2F%2FhHgmvAc70qA%2BcNt03VU%2BfFWVcCZJxdqdWBmiZYoJUUVSSQunPs%2Bvu2y2dva56czmEfEB5mbCHn%2FdmvwKKBbS4UugCCRLx2wOY5tR2YZXk5GnQSR7rNh12YpyL75mh7DT5Wc5fLcCoRrELTXbhfipBGgvizMSlKzOhDInXoXjlBjYfpdoUMc4YgCMiloMNGfoTasq7rEzcYMaeg%2FmIBudZNPdNvZ69PRD1RqJRtQWz5zYpZJE9ngi5U5AMU4TIGrltNEHFDBvHr%2BCEXo40LTO%2Fuqfo3qwtHvf11dE65e6REAkEUz%2F3oT0scH5iOwO%2Bzz%2BNjIEh%2FpiFFMeDBzwWYG6B2lWQ0QYTLM%2BGwh8r8I3VZYzehtJ4qakDyHQXC%2B3DpA67aPbKujYHw8tX%2B2YCX8fSNV6lUummAYQctmDmSiJXcY8KeTkn08VAtCv%2BJPz9OMPDxrd1NBRWMbyaHT3paoxdlmP3Jt1FpTQNDMtFB3jeGSeLgjMN7wlUHgWnD83UZqesVssvUadIKR%2Fl4%2FCZEOuXRUCcbtzxAZgDVQAu4BKn3fF%2FGUQbC92ErD469OLp4pkFn9SJGM1WFr2gRg771mlkAThhYzUKAFksjgvxSVlITCYxdvEBjqkAW4VCZkaX%2Fy3evz%2BxlHtTVi6gVnIDIhyf2K84Q3rbFrPaBmqwUvCa%2FVbf%2F3TROVi7NtlKW%2FRE4kKVt%2FrivnxxJoAG2ue2HIGGnyktZVzUrkc1XfFCh1XQCVFPQYzz6XO7b8OA4TBNfFFVWM%2BmjsnEsuzubg1vrnqg6eR7qJhmK04r%2BIzNG%2BBobEH23KSp1jQPmghOHmICGBvhkB6oTs7DmjibU4l&X-Amz-Signature=10123a43638f408a460c46b29c35b24ee01f0bca63171277b2e4fb8098ed125f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
