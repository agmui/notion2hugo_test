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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPYW3V2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG1rUEZ%2FYjxdmgEzGE85%2F%2F8VyQmIh1z679OQYpPtUEi7AiAUF5CLkf%2B8tFZGHPyPIDxLAzve5vRR%2FR2nfOb0Anq1qSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMmfh5Ntrq%2FWfJlosgKtwDOrw8Gcf5sz5ru0lvpl5ubcr9hMyS00%2Bs7Ipl%2BDTIiy1vtFdhQyERfvUzI7ENUZG5YthPaCQBaIWfEww%2BpyJx8bdp2tgiOPXTrAyP2tvFcYj6fS5lTnP5DGnKR8JgA47NO9CEruL30MpmbqIQ%2Bm9AnRhRBRcJ5Rv%2BznhLdKVozuqtK087otDaJhgpx2yTM7JCaqMtUnzKWjALzchjpxHMrYDvhe468hOl%2Fa5sAbw%2FUeX9dA49oihb9pnnjQEQSmXwcU%2B%2BTgEhD9K5gzsdiS5D%2FpMGJtqqO8iT1lEBPoPVG1D9siLHIxpaa6xomlZVhcYz2%2BUYlckD%2BOJMYyUB7JpbYWW0yJ9BEWxN%2BUzRSPl9Px%2BB8Gb1zVUYGfTQkQYtUwdhCoPBQrEuEvFcsV3Ck8Dq9Ji63pLMvxia2Rt4I0q54979R%2FadfqCjkNVTZyMp51DVYZj6jbRslRbzzQDpN%2BQgszfeg0bUQhJYpsrHFvWYCPb6oyKKJrc17ruv4bkt6L5nDiwtyPfU5zm5NKsObzPvS%2BfBlwTUP2u3n%2BEPZbQyg3YZaMVH5%2F1rMxm2ujnrojx8bXX%2F921hdUzKhc29cUkee0rq18EMYZ8Q%2F0r%2BzDmje2AfptOomQGePgJIeKcwxfn2vQY6pgH%2B7rgNC6pYdlglfuXnjwFGmDGzJf8w80v%2B0qL1NCAA0iW9SFsDSdbrJSXHS0KDfLg%2FCwANCRjhJSc9n3ueCUAcdRfbTQDc6chscObZCWfKNc2bzJYJ2eRXJIBGS9gVrU7nzp1oQEwj9zgveHYYP081LOTHuYXFRHIc4cs568Ixp5PGqkQoW4oMEi2F%2FXrP4lUeD0mUcx6cW4OXDJ6CZUlhq6%2FgGSlc&X-Amz-Signature=e9be43fbcaf587bcae549072aa1c308bd2afd01575f6ef13fdcad7a463cb0444&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPYW3V2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG1rUEZ%2FYjxdmgEzGE85%2F%2F8VyQmIh1z679OQYpPtUEi7AiAUF5CLkf%2B8tFZGHPyPIDxLAzve5vRR%2FR2nfOb0Anq1qSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMmfh5Ntrq%2FWfJlosgKtwDOrw8Gcf5sz5ru0lvpl5ubcr9hMyS00%2Bs7Ipl%2BDTIiy1vtFdhQyERfvUzI7ENUZG5YthPaCQBaIWfEww%2BpyJx8bdp2tgiOPXTrAyP2tvFcYj6fS5lTnP5DGnKR8JgA47NO9CEruL30MpmbqIQ%2Bm9AnRhRBRcJ5Rv%2BznhLdKVozuqtK087otDaJhgpx2yTM7JCaqMtUnzKWjALzchjpxHMrYDvhe468hOl%2Fa5sAbw%2FUeX9dA49oihb9pnnjQEQSmXwcU%2B%2BTgEhD9K5gzsdiS5D%2FpMGJtqqO8iT1lEBPoPVG1D9siLHIxpaa6xomlZVhcYz2%2BUYlckD%2BOJMYyUB7JpbYWW0yJ9BEWxN%2BUzRSPl9Px%2BB8Gb1zVUYGfTQkQYtUwdhCoPBQrEuEvFcsV3Ck8Dq9Ji63pLMvxia2Rt4I0q54979R%2FadfqCjkNVTZyMp51DVYZj6jbRslRbzzQDpN%2BQgszfeg0bUQhJYpsrHFvWYCPb6oyKKJrc17ruv4bkt6L5nDiwtyPfU5zm5NKsObzPvS%2BfBlwTUP2u3n%2BEPZbQyg3YZaMVH5%2F1rMxm2ujnrojx8bXX%2F921hdUzKhc29cUkee0rq18EMYZ8Q%2F0r%2BzDmje2AfptOomQGePgJIeKcwxfn2vQY6pgH%2B7rgNC6pYdlglfuXnjwFGmDGzJf8w80v%2B0qL1NCAA0iW9SFsDSdbrJSXHS0KDfLg%2FCwANCRjhJSc9n3ueCUAcdRfbTQDc6chscObZCWfKNc2bzJYJ2eRXJIBGS9gVrU7nzp1oQEwj9zgveHYYP081LOTHuYXFRHIc4cs568Ixp5PGqkQoW4oMEi2F%2FXrP4lUeD0mUcx6cW4OXDJ6CZUlhq6%2FgGSlc&X-Amz-Signature=95ea9eff1dec45e3e067d864fc5e5fb435d9a14659d17a7ab817027d450aa3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHIEF6Z%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCgapajzdLwK7q1e72hkfd9Nm5fTdlxnDBapE2K%2BsaBTAIgEdbnB4l%2FToMWqvibQPyQki9MEJ2PZ6wXwr8RMBQ7YOEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPUNaILtP4mv5fnsRyrcAyor4Ww9fbN%2BxzO7lXZhWuPP%2F2opR3YMca4FzBJHBMhyflQkoHQihpNphKovVAGZboz9qfBHOKf%2BFPJoLf7LcQKFKotL0n%2FMtkvGoecpCTdbRqt1wWxkGKJfOQ6af7BQX%2Fkc7rX2IVsN0RvaXYxlwHCplwpX6SxPXuOUSVc5XxumzZjd0TXF8GuJBHMTodszjc539qxqMk%2BNl7yiSTZ3Nsh%2BMdNDLagsuVFREgKCAE6pBVSKN42b04X4KgTCiwIRdcyVv95ywdrG%2BnKscKRgeuNIA5cYXApAbsv%2FW8emsufc35gzZgDQygGUb5q9TX7J%2FzNNevUSyWXlBy%2BFWlOyhNoeOQDfjA96RLrvNiepkulhyZuFCzPp4f9XvVjbpv2ayD5PYivXQSE9RIGb2EIvTx%2BGvTf6rbM%2FAlbtQYI%2BBRXS9XtYd6IDumuAluL%2F0CJxRoDR0qwXo7Rv2d2rKzKQafHpMuawwsAFBke8vHH5hwK9dr1F1D1zmZ5NgC%2BzmP7Vr%2BjVtmVu3C3nbePAhp0dwwtgpkcDS79tYimTnsZMC4LjSKZOnEPIZrld%2BncRzs5g%2BGH17j8ipAJ3QM1EVyUa3Ai8ximk6qFplZk77ikl9wh%2BtZAmyJZPE3a2xR9OMIr59r0GOqUBKMTKxG1M0ow9mbwNE%2BW8hzB%2FJmY1HRtVm9WL%2BFIRs%2B4IxolUpAP2JGmKX1qex4U%2BRyXHZJsBqbiHEioyMZaQ3Hod6CfJOxrbI4v0Khweeo%2F15Pksc0SeoviyZUD4%2Bmk5FqnfDkAtYHYfEk5f9eUis9hwe72s%2Fagx%2FcsItZ6db%2F4kcBJKJ72NPwSLPKd2seHyxGWXv0zESoae1seDK%2BsxaXpaV3pY&X-Amz-Signature=0e2320185032975a4a54a1faa140fef77c906d186ed903307cf354982fa711d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHML77HT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCneuHZwkbFTd8Xc0ye9O3Q0ZNC2EiXRMmDx2FdcVSqxwIhAMtWLF5T5cIdvQ%2Fya9nbzzv%2BtKUddLlR5R3dFMlg58DWKv8DCEYQABoMNjM3NDIzMTgzODA1IgzfHCGmf4xEymt4aEsq3ANc6y8vgo3VBz4HiSjRfSqQzT%2BYHPmpUGl6ez5DoTROSLfUgNMmCGx5C6C7sHVLDF0d5QpxU4LhnxjszaUISRJ0nR0bJ52L2KzAgVkEgdXv%2BEpY%2Bn9feBkMRWoo2MFYKmnHO%2FbzFIXgpp1AgzC1Kz8gJCfr%2ByFqDKFfsx0FuTJDT60j21DhOevhy1zVo2ir4u1HgvRtWS8mnADK7Qd7aeQaYkSGJrRflVFKjwRUj9FdPy%2FhKJhP1hOBmv7jC1aHs0fG60ZM0UdHtQucQFOv5WVLpYSDgoJ2P3ferrskGVrZZtDmrwX8TP39bEprWFwU30xN%2BMVcd1smya5sKBewvrE5m4FavjuaAM5zGg4cnN6tEdNVwbyvVw%2FqUOgMiOHmBcVZ61qsyni01%2FfH4Qb938D%2FjYhfK0fQOHMDQTZvbU5AOKGcR%2Fm0jb0%2B9eXw705jPHxZb3oW6B7h22HKLJpoJLHQg%2FyPVDo9DLsOU3PY4hnAzCy1e%2Fq07hTKfKxJl8bgKpULqN3gmGDOGQ9k1Add2go7UqQOHWIcvBJBpu5exPPinGYy3awwtx5z8%2FLt1nXfN6ga%2FkL1zYvLBhHh2fCDSblTp4SGq%2BaIz%2FnGBOFPxtclIxUOaiRyoOWaOvZvAzDE%2Bfa9BjqkAV%2FFIL79re7z%2BFMKwNQY5vfRHmZ5SZ2wEaxinBM05I%2Bjo1W9pczUC9ZM3qfHkB%2FDUJeKovvAPTVM3k1EzzDwuzfa9GtqbMs9gTTqNmsWRRkMEbxHJaQW8MEwrWd4YqPq1wzhPKQ4e5%2BpEY3yQQK6OHCVujDqxLpQjMgj7gDAwMlDUkPskwvrWi0WKGZ2%2FFjzfr1yLZ%2Fy4kIy1hPBYITrtJB9o97F&X-Amz-Signature=b6918a871142b6613e7b8c5917c2bd2ff57a12298a1be188ca0e7895dc0345c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPYW3V2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG1rUEZ%2FYjxdmgEzGE85%2F%2F8VyQmIh1z679OQYpPtUEi7AiAUF5CLkf%2B8tFZGHPyPIDxLAzve5vRR%2FR2nfOb0Anq1qSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMmfh5Ntrq%2FWfJlosgKtwDOrw8Gcf5sz5ru0lvpl5ubcr9hMyS00%2Bs7Ipl%2BDTIiy1vtFdhQyERfvUzI7ENUZG5YthPaCQBaIWfEww%2BpyJx8bdp2tgiOPXTrAyP2tvFcYj6fS5lTnP5DGnKR8JgA47NO9CEruL30MpmbqIQ%2Bm9AnRhRBRcJ5Rv%2BznhLdKVozuqtK087otDaJhgpx2yTM7JCaqMtUnzKWjALzchjpxHMrYDvhe468hOl%2Fa5sAbw%2FUeX9dA49oihb9pnnjQEQSmXwcU%2B%2BTgEhD9K5gzsdiS5D%2FpMGJtqqO8iT1lEBPoPVG1D9siLHIxpaa6xomlZVhcYz2%2BUYlckD%2BOJMYyUB7JpbYWW0yJ9BEWxN%2BUzRSPl9Px%2BB8Gb1zVUYGfTQkQYtUwdhCoPBQrEuEvFcsV3Ck8Dq9Ji63pLMvxia2Rt4I0q54979R%2FadfqCjkNVTZyMp51DVYZj6jbRslRbzzQDpN%2BQgszfeg0bUQhJYpsrHFvWYCPb6oyKKJrc17ruv4bkt6L5nDiwtyPfU5zm5NKsObzPvS%2BfBlwTUP2u3n%2BEPZbQyg3YZaMVH5%2F1rMxm2ujnrojx8bXX%2F921hdUzKhc29cUkee0rq18EMYZ8Q%2F0r%2BzDmje2AfptOomQGePgJIeKcwxfn2vQY6pgH%2B7rgNC6pYdlglfuXnjwFGmDGzJf8w80v%2B0qL1NCAA0iW9SFsDSdbrJSXHS0KDfLg%2FCwANCRjhJSc9n3ueCUAcdRfbTQDc6chscObZCWfKNc2bzJYJ2eRXJIBGS9gVrU7nzp1oQEwj9zgveHYYP081LOTHuYXFRHIc4cs568Ixp5PGqkQoW4oMEi2F%2FXrP4lUeD0mUcx6cW4OXDJ6CZUlhq6%2FgGSlc&X-Amz-Signature=81b9627c1db5a5d5d7ea21fca42b7a32424bfa9cda2352fec2dc1fe02c0ae7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
