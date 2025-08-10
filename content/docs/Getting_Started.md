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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUUVYET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2D4z0eJbQZP7D%2FC7G9eWMHQM4F0Vgoxjvx4HXi1M2LAiEAlaMf80uAvGoFGMxEgXzXpE%2FPg0nv4xWv7E2itiu7bDEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz2%2BLHcxYxwMmhixyrcAwey7q%2B7GoSVwiA7gGZMv%2BXq0%2F3Ce8XsvpWpo6Jj7nnMmTe39NWczZCW9FhNakc3cWaSwwOwB2qCJDZFh4ZB%2FaTA676KSgZptYDBmah6wap2Fs2YlF0dEHKZp0JixGh1fpoL016xW8dlUHSRmd8dQiNLrtjxm3h5HzdlnCeNuVzwriNQMDb6vqDd8WdVm0dxNuizVFi6KbqlEMv%2BLpEqNH02E9oDhFlHN0KTS48ANDdCIqoEDSrTvJn8DAcN9F1mfQFc9U0k2pxHSHOoF2trA4QIQE86T6Gv9X1BQmVixh%2B1UaRzZPOMFadRouguWDsNQ9dV9qMtYhLCm2FtiYvzanAicOnG3YDbrQBq1SH5pPz0IGIaXTyn1Z6KbVhSyVCUqhl4QDIBwpCZnJNZbsqRWm%2FXYBjoT97n%2B1mUKoM%2BK6DYDgdpWxlVVCc1OddVlS2eId3r5iRYBQ3Bb2RPCOBfEjfuAp%2B0GSLJL2LKJgDZ88GiNVA%2FFs3Q29M3B2jvcP1uQ33KEBUh30RHjvfBpPQxajRl%2FLo6ejil5%2FaF43jJ915XzO691aqGqglvrYt4TA09huF45HWii7gvMFCBMYgIYgqXwh3Stp4iRcF%2FsIMmXD3kVx5sCC2OMfF9Mip5MOT14MQGOqUBv%2FoVbNX9Bcfn1g%2FWGZZAtEhZQbbHltIXwUpFwbuSSNYCprkZT8RUdBFxDQYtQPTtjWSnt%2BdCshbNZXiB0FENp%2FL1m6WunXXUOTTSqSQRgn7woXogMPiI1oWLZ58EgphfgwNWxmNttDeXmJg8ergVztBAcb7ePeZZWAIrOVwSUtJq7ceif37RqzKtz95ty1sRNZqrvCApkbmRVpLu1dLKyVlOxfSs&X-Amz-Signature=b8f89b45ee7ffea75db339efcd2d04f0a4819b49cb1b900b5cac1c230ab174fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUUVYET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2D4z0eJbQZP7D%2FC7G9eWMHQM4F0Vgoxjvx4HXi1M2LAiEAlaMf80uAvGoFGMxEgXzXpE%2FPg0nv4xWv7E2itiu7bDEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz2%2BLHcxYxwMmhixyrcAwey7q%2B7GoSVwiA7gGZMv%2BXq0%2F3Ce8XsvpWpo6Jj7nnMmTe39NWczZCW9FhNakc3cWaSwwOwB2qCJDZFh4ZB%2FaTA676KSgZptYDBmah6wap2Fs2YlF0dEHKZp0JixGh1fpoL016xW8dlUHSRmd8dQiNLrtjxm3h5HzdlnCeNuVzwriNQMDb6vqDd8WdVm0dxNuizVFi6KbqlEMv%2BLpEqNH02E9oDhFlHN0KTS48ANDdCIqoEDSrTvJn8DAcN9F1mfQFc9U0k2pxHSHOoF2trA4QIQE86T6Gv9X1BQmVixh%2B1UaRzZPOMFadRouguWDsNQ9dV9qMtYhLCm2FtiYvzanAicOnG3YDbrQBq1SH5pPz0IGIaXTyn1Z6KbVhSyVCUqhl4QDIBwpCZnJNZbsqRWm%2FXYBjoT97n%2B1mUKoM%2BK6DYDgdpWxlVVCc1OddVlS2eId3r5iRYBQ3Bb2RPCOBfEjfuAp%2B0GSLJL2LKJgDZ88GiNVA%2FFs3Q29M3B2jvcP1uQ33KEBUh30RHjvfBpPQxajRl%2FLo6ejil5%2FaF43jJ915XzO691aqGqglvrYt4TA09huF45HWii7gvMFCBMYgIYgqXwh3Stp4iRcF%2FsIMmXD3kVx5sCC2OMfF9Mip5MOT14MQGOqUBv%2FoVbNX9Bcfn1g%2FWGZZAtEhZQbbHltIXwUpFwbuSSNYCprkZT8RUdBFxDQYtQPTtjWSnt%2BdCshbNZXiB0FENp%2FL1m6WunXXUOTTSqSQRgn7woXogMPiI1oWLZ58EgphfgwNWxmNttDeXmJg8ergVztBAcb7ePeZZWAIrOVwSUtJq7ceif37RqzKtz95ty1sRNZqrvCApkbmRVpLu1dLKyVlOxfSs&X-Amz-Signature=f0227aba7ffa678dc80f59c0e430f1f0481595eb5a2325cfff5a5862df4b3e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUUVYET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2D4z0eJbQZP7D%2FC7G9eWMHQM4F0Vgoxjvx4HXi1M2LAiEAlaMf80uAvGoFGMxEgXzXpE%2FPg0nv4xWv7E2itiu7bDEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz2%2BLHcxYxwMmhixyrcAwey7q%2B7GoSVwiA7gGZMv%2BXq0%2F3Ce8XsvpWpo6Jj7nnMmTe39NWczZCW9FhNakc3cWaSwwOwB2qCJDZFh4ZB%2FaTA676KSgZptYDBmah6wap2Fs2YlF0dEHKZp0JixGh1fpoL016xW8dlUHSRmd8dQiNLrtjxm3h5HzdlnCeNuVzwriNQMDb6vqDd8WdVm0dxNuizVFi6KbqlEMv%2BLpEqNH02E9oDhFlHN0KTS48ANDdCIqoEDSrTvJn8DAcN9F1mfQFc9U0k2pxHSHOoF2trA4QIQE86T6Gv9X1BQmVixh%2B1UaRzZPOMFadRouguWDsNQ9dV9qMtYhLCm2FtiYvzanAicOnG3YDbrQBq1SH5pPz0IGIaXTyn1Z6KbVhSyVCUqhl4QDIBwpCZnJNZbsqRWm%2FXYBjoT97n%2B1mUKoM%2BK6DYDgdpWxlVVCc1OddVlS2eId3r5iRYBQ3Bb2RPCOBfEjfuAp%2B0GSLJL2LKJgDZ88GiNVA%2FFs3Q29M3B2jvcP1uQ33KEBUh30RHjvfBpPQxajRl%2FLo6ejil5%2FaF43jJ915XzO691aqGqglvrYt4TA09huF45HWii7gvMFCBMYgIYgqXwh3Stp4iRcF%2FsIMmXD3kVx5sCC2OMfF9Mip5MOT14MQGOqUBv%2FoVbNX9Bcfn1g%2FWGZZAtEhZQbbHltIXwUpFwbuSSNYCprkZT8RUdBFxDQYtQPTtjWSnt%2BdCshbNZXiB0FENp%2FL1m6WunXXUOTTSqSQRgn7woXogMPiI1oWLZ58EgphfgwNWxmNttDeXmJg8ergVztBAcb7ePeZZWAIrOVwSUtJq7ceif37RqzKtz95ty1sRNZqrvCApkbmRVpLu1dLKyVlOxfSs&X-Amz-Signature=b3262aec8ef4a5c23bfed9dee56bead6607992bc7e0467506694150c2fa3a2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN45BV3Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mg0eh%2FE6aAPOeplzre5QrZiZqQeDpB3ItwC%2F2bxxNgIhAJ1yBtIwrwUTiSaa%2F0HNbMhyySNdmgOjrfVjWRXB0xLhKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbaApUpxtp3bPKjvsq3APQg6qSfp1VVBlKHkDfffHYoU9Bai2i5l98LhvUdMpDxj%2FKIYdfuAYxD25WBiuZFVH%2FbiWcd4sI9GJKm%2BYaOYmhekjUNzjlw%2BWg57PTErOaAKFdNtEtUDSHS8E4OCTi%2Fg5cx4GZIVIVKxosMblW9QqY4ZOlGNPFlutCNzq4piN%2F07bdZ4WrDUhMrmU4kP0U0GVrP5j0YeTjRuETTLBU2bmf0FsVY8fzLHN3dB%2BViv%2FcuXEcQsiBKS8pIBkaQZeGiWUH3L6tzt1%2BX7y8Uz6JYCFp%2FhjC2ed4ulMn5teADL1CQjqU9btQsQtNOaSNUrW2dWz%2Fi0VhWWp1fOcdD2R2hv%2FnrDDFScvAJlGZerjBGQEaAxRaYd%2Fe1tciEf1OvDgXhyajq%2FE9Y9OqaFqrupjI%2BLhb46ipPTITxEdBghNlGsSOcK9%2FapBbMMCwz%2Fvn%2F8Gd6JGT5u%2B4opZbXUEnbejT9TEvytBgjioGYkk6cXBf%2BYgPZnCrIXT%2Fh1TpWAqnE90fCSgm%2B8E%2FYSX%2FgQGUGQmEbmsH0I2LY5mi5T74VIK1yCnTmIzyURozQ5HXGzr9py0KL%2FnAUxVfvHZfMo4i3HL%2F2zSKCrK%2F2765Fbv4odMZFpJtkFw1tsPakPPPqbWMbTDs9eDEBjqkAaoAq4LQ0voaJl9o61mU3c5SxE2lUZB19tquR0%2BL4CVVnRLXzyEajWvScDspebP5Lw1YQDQy6kLPoaLpiTQZE2Rw7PTSKcOcLX2ZRD0liMxOOfATZDKzpFjNkZXNC7DkjmRDK2RgZYU7pUnVjWcDIrJX%2BheesJXdWGDSnAEM9YMTZOFrwjEzZpnW0szFoWEWragG%2Ft11ebNt%2FhVhqmpzB2vR0a9x&X-Amz-Signature=22053c61f1ed9b69e9c6dcc1d668629a9d519854090d349e1a756d583bbef989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J27NM7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzWSED7R%2B1iG%2F9QAQ%2FUvFFvLKWK4IqleH04HvhqxEErgIhAJIY%2BcGjKfBMfOiEBd5cn9b4ZhLerhFOnulxUD8vB%2BQ7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwl0iROdouviG%2BO28q3APwws2b%2F%2Fp%2BUzIHvaNNiJSxJDWIVszi8ST0Ij2KESv1BzZrhMwvW3ZFzOICK6YlV%2BxennpE1A7izbt93qzFiJZqLrYwglQCkLw7gg2FmvqGRvOeGFua%2FRoDd7QhJXy%2FWMtVvmbUW3yWKWISFcZJjZSD8QJ9iZGuUcNtvdVN6pRqlcTrR%2F6gfBrnZOUniFwrynSnPh9rBB%2F7BaCOQtrUwkxW5otQMs%2FYgD1lnS9E3rBtWGwWBzcbpkYOTa1tPFhsNMOXymc0Il%2B4%2BRYvNHVzakvhtbge7tJY%2FZ9gGvioIMerojcbh9CjoQWwZsul3FU0XDeOo1qC0F1DEdwJ6OLLu8H1Cghp03lhvngWy5PwC8vkw4wfJdhWewyFQvG9NmNaZ64woVlb3jfHMCkY7vBhq8WuYRYEIZQh5QoE7S55M7ry86pJS%2FcOKLoZ2OQxcVGR23H%2BDfFugmhb3A4sDr4%2FuV2o0rV1gIylHrjBW2FpVjtnxADrJq0HJ2fU5ER%2FEKMer%2FfHgu1V287nw4nUFWBL6nmVETQQKdQ9F6QsPb3q0TRsAE2a0ZSOvZnwNkraS6vkXQ5Vz6xjSk5%2Fa04bZA1Feet62LBVxZRYxybwiRio3BM4CXgxlUDM%2BReR7qPJ9TD89ODEBjqkATU6xMJ%2FzcQ8Bw7xHizx8BNvfsA%2Bo%2BC30bm0VZlDXask9UcYJmaLMB4fxcVEn5cGkJ3rBm47e42M51RdUpf6Ql9O3df5NaC%2FZGK0Tg0iPfUgXjTwBeNG2oQ%2Frt0kx%2FsK6EPapL0E8n3m7bj4p%2FjQrYJy%2FyCjJic%2B5LLQS%2Bhlxna7FVIZ52xAGZozxu18Zs3AsNjoS0cLMPsgOLR%2FYT5H2jWpwFxE&X-Amz-Signature=bc93fa2ee99835f3196f3a51a0a0b7a779ad90a1a320d1d2de6727c871511fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUUVYET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2D4z0eJbQZP7D%2FC7G9eWMHQM4F0Vgoxjvx4HXi1M2LAiEAlaMf80uAvGoFGMxEgXzXpE%2FPg0nv4xWv7E2itiu7bDEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz2%2BLHcxYxwMmhixyrcAwey7q%2B7GoSVwiA7gGZMv%2BXq0%2F3Ce8XsvpWpo6Jj7nnMmTe39NWczZCW9FhNakc3cWaSwwOwB2qCJDZFh4ZB%2FaTA676KSgZptYDBmah6wap2Fs2YlF0dEHKZp0JixGh1fpoL016xW8dlUHSRmd8dQiNLrtjxm3h5HzdlnCeNuVzwriNQMDb6vqDd8WdVm0dxNuizVFi6KbqlEMv%2BLpEqNH02E9oDhFlHN0KTS48ANDdCIqoEDSrTvJn8DAcN9F1mfQFc9U0k2pxHSHOoF2trA4QIQE86T6Gv9X1BQmVixh%2B1UaRzZPOMFadRouguWDsNQ9dV9qMtYhLCm2FtiYvzanAicOnG3YDbrQBq1SH5pPz0IGIaXTyn1Z6KbVhSyVCUqhl4QDIBwpCZnJNZbsqRWm%2FXYBjoT97n%2B1mUKoM%2BK6DYDgdpWxlVVCc1OddVlS2eId3r5iRYBQ3Bb2RPCOBfEjfuAp%2B0GSLJL2LKJgDZ88GiNVA%2FFs3Q29M3B2jvcP1uQ33KEBUh30RHjvfBpPQxajRl%2FLo6ejil5%2FaF43jJ915XzO691aqGqglvrYt4TA09huF45HWii7gvMFCBMYgIYgqXwh3Stp4iRcF%2FsIMmXD3kVx5sCC2OMfF9Mip5MOT14MQGOqUBv%2FoVbNX9Bcfn1g%2FWGZZAtEhZQbbHltIXwUpFwbuSSNYCprkZT8RUdBFxDQYtQPTtjWSnt%2BdCshbNZXiB0FENp%2FL1m6WunXXUOTTSqSQRgn7woXogMPiI1oWLZ58EgphfgwNWxmNttDeXmJg8ergVztBAcb7ePeZZWAIrOVwSUtJq7ceif37RqzKtz95ty1sRNZqrvCApkbmRVpLu1dLKyVlOxfSs&X-Amz-Signature=a2f8f7991d68302bbe9c4336852f877b97229e8711c3494061ad862383f506a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
