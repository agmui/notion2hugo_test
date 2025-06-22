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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYENCXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBn2sn6y09Nn590oGI3P472w%2FkbHyBJZbJBxwTWza%2B2iAiBE6UkCHHtEeEnVrxe6sYy94fTwrSJfK38yVxM17lHGQCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrG0U9O32X1dJnzOqKtwDnC5DoPc4zLX6iK9B1q5ERiNueYmIaVICmAXEOz%2FluOv26iGjnbiE3rQH7xyKpMzKDllPvkXQYdBz3JdO7jqgvuMp%2F%2F5FTx7LwavwcQXa%2B5gytatVKTvpmh3YALtQTdKKiU3NvHL%2F28WoBF0lNHgXQxd0gQ6F%2Fz8KDNqY1abp0AbnDJatV3cclS%2BjfRd2EkWo9inxEJV21mtrVOR8I5okI3vO0M78KqNXg6tmyhjhq6RVrO5KO0ClCLkCwEJZpEuGV7rXNZQ8eyEYCUGWgC14ZzJHBn5u9ntHIO37ksfY1TWeIsskbibMz4%2FBNmAg4XW%2F7BROxOKfAp8isfxVv3RSYS7%2FNH1TQOMZIGCWvN7kEBMFhpb5rwfrnYhN5HHfddqwSleyP00pF74Dasqupn6d3EWT%2FjIGM%2F3RMjo5tcOuEOZVmRxcBsMG8zH%2Fbz%2FRMyNCBoUjf1nd32XJ9QjS3iaQhMZjprS5Df2cSc9BKA9zae%2FJ88lAUizM9qUW4xpYA4DPlkM9AZtmnu%2Fve1JrE5iq6I2jknugUZ7QT7NqtaDh51jgzp%2Bg%2Bz9KiBAbP3ip2vQdVe1MoMG%2B08nEFvrmhTh3nUiL367TkrVf%2FNZTJJtuUG8H76P%2FTmHyyD8lKFwwgpThwgY6pgF3rYMAZ1y9M7QoHKmOqDN7g0VgjzkPhZonZ8uEcvkTDTGe%2FNinUGRR1zP%2BTO50U9knCy2qpKmf2a4UK%2BI%2F4D1gjLNGkSeNm1i5xAesFIVcB5UZHzF9aYgH8NyLv9euL41Hw%2BDKQ1lgnPF%2FkEpY0VQ%2FPWAy2elRtD6n7ujEfJ1ZwPQOQNEjfBdsV9ghopX3VqDKUnJZCq%2FLuebvDo9bB6D8VI3jaXrS&X-Amz-Signature=c7a702516d2e91271dbf69a731cb464e66efaf19c280de09cdf70ffa2205359e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYENCXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBn2sn6y09Nn590oGI3P472w%2FkbHyBJZbJBxwTWza%2B2iAiBE6UkCHHtEeEnVrxe6sYy94fTwrSJfK38yVxM17lHGQCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrG0U9O32X1dJnzOqKtwDnC5DoPc4zLX6iK9B1q5ERiNueYmIaVICmAXEOz%2FluOv26iGjnbiE3rQH7xyKpMzKDllPvkXQYdBz3JdO7jqgvuMp%2F%2F5FTx7LwavwcQXa%2B5gytatVKTvpmh3YALtQTdKKiU3NvHL%2F28WoBF0lNHgXQxd0gQ6F%2Fz8KDNqY1abp0AbnDJatV3cclS%2BjfRd2EkWo9inxEJV21mtrVOR8I5okI3vO0M78KqNXg6tmyhjhq6RVrO5KO0ClCLkCwEJZpEuGV7rXNZQ8eyEYCUGWgC14ZzJHBn5u9ntHIO37ksfY1TWeIsskbibMz4%2FBNmAg4XW%2F7BROxOKfAp8isfxVv3RSYS7%2FNH1TQOMZIGCWvN7kEBMFhpb5rwfrnYhN5HHfddqwSleyP00pF74Dasqupn6d3EWT%2FjIGM%2F3RMjo5tcOuEOZVmRxcBsMG8zH%2Fbz%2FRMyNCBoUjf1nd32XJ9QjS3iaQhMZjprS5Df2cSc9BKA9zae%2FJ88lAUizM9qUW4xpYA4DPlkM9AZtmnu%2Fve1JrE5iq6I2jknugUZ7QT7NqtaDh51jgzp%2Bg%2Bz9KiBAbP3ip2vQdVe1MoMG%2B08nEFvrmhTh3nUiL367TkrVf%2FNZTJJtuUG8H76P%2FTmHyyD8lKFwwgpThwgY6pgF3rYMAZ1y9M7QoHKmOqDN7g0VgjzkPhZonZ8uEcvkTDTGe%2FNinUGRR1zP%2BTO50U9knCy2qpKmf2a4UK%2BI%2F4D1gjLNGkSeNm1i5xAesFIVcB5UZHzF9aYgH8NyLv9euL41Hw%2BDKQ1lgnPF%2FkEpY0VQ%2FPWAy2elRtD6n7ujEfJ1ZwPQOQNEjfBdsV9ghopX3VqDKUnJZCq%2FLuebvDo9bB6D8VI3jaXrS&X-Amz-Signature=daceb6fe2d4730db8bba74520454c3e0b927f9d45f8114d00f8d8b860b6dd92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYENCXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBn2sn6y09Nn590oGI3P472w%2FkbHyBJZbJBxwTWza%2B2iAiBE6UkCHHtEeEnVrxe6sYy94fTwrSJfK38yVxM17lHGQCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrG0U9O32X1dJnzOqKtwDnC5DoPc4zLX6iK9B1q5ERiNueYmIaVICmAXEOz%2FluOv26iGjnbiE3rQH7xyKpMzKDllPvkXQYdBz3JdO7jqgvuMp%2F%2F5FTx7LwavwcQXa%2B5gytatVKTvpmh3YALtQTdKKiU3NvHL%2F28WoBF0lNHgXQxd0gQ6F%2Fz8KDNqY1abp0AbnDJatV3cclS%2BjfRd2EkWo9inxEJV21mtrVOR8I5okI3vO0M78KqNXg6tmyhjhq6RVrO5KO0ClCLkCwEJZpEuGV7rXNZQ8eyEYCUGWgC14ZzJHBn5u9ntHIO37ksfY1TWeIsskbibMz4%2FBNmAg4XW%2F7BROxOKfAp8isfxVv3RSYS7%2FNH1TQOMZIGCWvN7kEBMFhpb5rwfrnYhN5HHfddqwSleyP00pF74Dasqupn6d3EWT%2FjIGM%2F3RMjo5tcOuEOZVmRxcBsMG8zH%2Fbz%2FRMyNCBoUjf1nd32XJ9QjS3iaQhMZjprS5Df2cSc9BKA9zae%2FJ88lAUizM9qUW4xpYA4DPlkM9AZtmnu%2Fve1JrE5iq6I2jknugUZ7QT7NqtaDh51jgzp%2Bg%2Bz9KiBAbP3ip2vQdVe1MoMG%2B08nEFvrmhTh3nUiL367TkrVf%2FNZTJJtuUG8H76P%2FTmHyyD8lKFwwgpThwgY6pgF3rYMAZ1y9M7QoHKmOqDN7g0VgjzkPhZonZ8uEcvkTDTGe%2FNinUGRR1zP%2BTO50U9knCy2qpKmf2a4UK%2BI%2F4D1gjLNGkSeNm1i5xAesFIVcB5UZHzF9aYgH8NyLv9euL41Hw%2BDKQ1lgnPF%2FkEpY0VQ%2FPWAy2elRtD6n7ujEfJ1ZwPQOQNEjfBdsV9ghopX3VqDKUnJZCq%2FLuebvDo9bB6D8VI3jaXrS&X-Amz-Signature=bae1ccc02be9ccc3a0f93859f97ab4c04eabcb0a4bc9acd274fd2e0c2a8e96ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YYFWOC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvgbOzomhKgb3reopuAKNSLpB9HbIB6jqZWPIOYoCFbAiEA4FZ03WAYQY49AFj2LxgaJJRH0R9ViNebmNucdNqXm1sqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTu9bsnf2vC0cwJ3CrcAz1hJrDEHI0kT9kxBmpW4FxqeuNgK6Pt2CNY1BVimWe13VxXPZiIXPeYA0BINYld%2Bog5tyVG6EINnqYgJqJ4hiz5T7ZvPacUm7iznCr1U8YEhxw30LmCyVOlk%2BdNLPfCZExSQzJ60mItIDtzFi75lspBbnIlovy8tZ%2B2DPayG33Y3KG6CpEYghjU%2BXZPtE5g37r7uNbley7cN99E186UaQVPyJniSlDUiDw2P0YYsTE2nHUyE2uOOn%2FXpi9rgQFZirNwjRptRwBQPqb2A3det0Z3nUutOX0npzOk11FlxYglVyZCSLdus1HlBqW9UFp5Qrv%2BxY2%2FyKgR32oPAmzhTehSxzcI9MO06TLBPHdyKV8cWzqLtOAuEeHd1n9icyvy1WvMGu6OidgXxnxvlNeEje3q2MeP1SjjwOLlU002zWmT2ZHbITAHyrURjINVQ7g3dO4JBkz1rOdY33nIr83jOvHM3I%2BILXXq1EnOUElNeWDMDwOxzOdcZXo5NVTFebAx3FjDhI4C4%2F58kvRw5CuxYyNBKkDZ%2B6GjrELZt3x2l1Cr4lIaJQgHS8fv8RfjKQwpKG5PQP%2Ff7N9DdEQIIxFcC7UtHWHLMpLTFF2IgE4do7GCUQ7HOAM5y5u7Z7d0MPOS4cIGOqUBwK88%2FEoceNazd8YzcFV3FG2AI%2FdiFczhRxnjy%2FAbkRiw82GsLUfKhffKyXT402QOklj5IHzEaJwJSxg60nwGpWnUFR%2FcqTWF5%2FS00ZNX8KueTjVTZ2TlR5oTfzZ8IKemwsASUKTHcE%2F6qXraTh8HmG%2FkwlI0gjCNXn3EWQA356%2FwtA%2Fgc4IonwG9hUJdEih291hMdM5%2FDys7iJk3RlJtQfrnw8KO&X-Amz-Signature=f3039188d03ef5ec3c9ef1c0371cb29d10d73fd2c524229af8114d9f257c1ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EOV5KWJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDLCEFNLKw9l5wpvb5ABw%2B9qYmoaEN5s1DBN48l97qmDgIgRCUWkBEZAe31X6CdsH%2FWbjSzDQKXaOw%2Bs6NSFIIyeyIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBd%2FCBrfHxvCcJFGyrcA2pJcZcUPTJfREOJl8ymLuxFDwCsj0VkBPrEtLOtwpMdKfD9%2FzXpSGWLIjBmpE%2FYxiGo6Sc2hgUWfnOAYHzyovMoQD2%2FElXjea2E5bkZWMJFq4nDxX%2BPMXeXRdVjyIhWOiOR8G4N1GOCtr1YjnvZUIMV04A%2BFqsQ%2FkZBAnStEhkFzOQSKFt%2B6vYsarBvqaPgAEuRPC5WIFW3GrGh7EAEdTdDKTmrIRjdxDFQbXzHtPIicmAtnGDuFStowLK51oIy4s%2F8fsnP2oD7FU8%2FwTg44dZazTs7ORsCSru%2BAWvBXajpq11kzrM8A9WgqoJyK7eLrN2a7FAN2jQMbupcnknVqEvI1w%2Fu3F9JcQFCvcuARMYxY%2BEBzXIZeQJJxl9vaMkie7p7gmUvo6U4cRg6jV%2FBWhOSqKGxD04Cq1sJz%2FIqMn1DE%2B0ht5l2zVSp4SusDLiHZjBkydh8EwvRtR4zKomN3tK3ncf6aIUsoINWKDEK%2BirDmfv98KIYkbHGLA%2FDTZWKegq3zuSP22WcA36fs71NL1XfR2eYgbPOmY1svovJvwY59vrz7D2BxaLLUSaA7KaX05y7PX5%2FKefZJlSuB%2F0uQ49oAT%2FMwyDgeEUBp3LMRPI8fuYmb08J6Z9uh7%2FpMI%2BU4cIGOqUBKz0Z5XDhwIUOKrFWkOr2mdD8dI2zbCwxPGMB5BDN14eKtwQqToTHztwQNg6I9Y3II%2F2dFRXWYh%2Fpa%2FMfj5qZEdUDR3oUs0yfDZp26m5AuH3P91pjVkbWgqvr%2FuqV12rk%2FxcbCJ0j9%2BnR680roUt2LN9gpviJt3JzM86cZS5HTvwLzuB0pwUvrUHeGz1SSr6nktHSE9CMvXmMaECyEJUEF8ArU7lg&X-Amz-Signature=8cfc093ec1e028bc6b75b8db85f065ed110c9d83fb8676bf3cb47e3f2744a986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYENCXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBn2sn6y09Nn590oGI3P472w%2FkbHyBJZbJBxwTWza%2B2iAiBE6UkCHHtEeEnVrxe6sYy94fTwrSJfK38yVxM17lHGQCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrG0U9O32X1dJnzOqKtwDnC5DoPc4zLX6iK9B1q5ERiNueYmIaVICmAXEOz%2FluOv26iGjnbiE3rQH7xyKpMzKDllPvkXQYdBz3JdO7jqgvuMp%2F%2F5FTx7LwavwcQXa%2B5gytatVKTvpmh3YALtQTdKKiU3NvHL%2F28WoBF0lNHgXQxd0gQ6F%2Fz8KDNqY1abp0AbnDJatV3cclS%2BjfRd2EkWo9inxEJV21mtrVOR8I5okI3vO0M78KqNXg6tmyhjhq6RVrO5KO0ClCLkCwEJZpEuGV7rXNZQ8eyEYCUGWgC14ZzJHBn5u9ntHIO37ksfY1TWeIsskbibMz4%2FBNmAg4XW%2F7BROxOKfAp8isfxVv3RSYS7%2FNH1TQOMZIGCWvN7kEBMFhpb5rwfrnYhN5HHfddqwSleyP00pF74Dasqupn6d3EWT%2FjIGM%2F3RMjo5tcOuEOZVmRxcBsMG8zH%2Fbz%2FRMyNCBoUjf1nd32XJ9QjS3iaQhMZjprS5Df2cSc9BKA9zae%2FJ88lAUizM9qUW4xpYA4DPlkM9AZtmnu%2Fve1JrE5iq6I2jknugUZ7QT7NqtaDh51jgzp%2Bg%2Bz9KiBAbP3ip2vQdVe1MoMG%2B08nEFvrmhTh3nUiL367TkrVf%2FNZTJJtuUG8H76P%2FTmHyyD8lKFwwgpThwgY6pgF3rYMAZ1y9M7QoHKmOqDN7g0VgjzkPhZonZ8uEcvkTDTGe%2FNinUGRR1zP%2BTO50U9knCy2qpKmf2a4UK%2BI%2F4D1gjLNGkSeNm1i5xAesFIVcB5UZHzF9aYgH8NyLv9euL41Hw%2BDKQ1lgnPF%2FkEpY0VQ%2FPWAy2elRtD6n7ujEfJ1ZwPQOQNEjfBdsV9ghopX3VqDKUnJZCq%2FLuebvDo9bB6D8VI3jaXrS&X-Amz-Signature=8d20740bb0c9c3a4d68edde7e2d0659f95f0da357b7e12987e52ca7c5870ba4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
