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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANLQCH3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0vjPdRmOSjA%2Bomb85xIhBzsIsnKA61g%2FwZbSo7My9igIgYahZlahVpnQtPnb8vD5VRVb8fcS3s4GQmjHd%2B8Sri3QqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3CnGApofwdQydd6SrcA%2FPhZU%2FR5MWjSURDkXDgnpXXapFE5Kgw9sr3cY%2BZHE2Y%2FMNuHbds%2FsraKqTT7qgisW05Htf84%2BpaMHYLB26a1Fn2iH9w56ly1%2BKO4sQa9EfQIB4G4R7Y%2FBx5mj4KbP8y2shi5wtjZD7cLHlYrNKzS4rIWXXA4XL%2F%2Fus5mk8GR2ngp%2BPUVpK%2FgeaRjpJscANDPqbxlZC3VL%2F39n50HcdTo%2FnlXLT8ywtm59R3jhaogsSAGz7bCBEdct5IsiIJaL8pzsXpz1b5iKdPLGc7Tm0RHy5b9Ysay0nxBxx9PpFTmLb8M3N9hCXDtuNz3E8GouPM%2BOGmuBl0Hc0YVpNkYn3%2FxAyQ4tVVM2TQjhOqnNoqZdmuRWRlNuDm1hIOsFlMA5jMW%2FNRq%2B9ifM0DFp%2BXlqtEnDrhJCeMlb0FvTObjrTeZcGOwMIvoxP5swrGhq4FQ24fhaMYkGNc1SM8XFBMpxeiF12HrJEYV78xWMYmdwvDyizJTYl5tTgNVvPPJ5rf7L5GAQzpvnZV1hbvtAG255sHkZ4naJgnfQBc8cr5Dtb7yDgy65FR9cJIGfXghLkMbL0Hnz2wBr2ZbR5WhzJW%2BIgmbCrtiysx0gXpzJ55hb9QnbyElBulP%2B5xsPJGAKw%2BMMPE%2BcEGOqUBU4bDT6wMFCkzLdJsb3%2BYDcyjiVdKEYF8LUrylMKkC%2BI%2B1X8zK0Jrfy%2Fa0DFj7kDmWdpQVoL04%2FE0W2sVWpygl6k1Kc9TmULbVOqd2tgGw0LxLApeD%2FDh6Cm78OGXMLXrC8QavDtARGI6ype5mKR5HjxBikTMbngQ4eDc9ph2I9mq7PJZvSP62UNQ8Oj0VRBcSeJVIF42bHj5EPZ9Sv3NJEn9TzM0&X-Amz-Signature=b09dfb05f384743d1b8893011a061298325dda4e410b37c5c04a6de431021150&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANLQCH3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0vjPdRmOSjA%2Bomb85xIhBzsIsnKA61g%2FwZbSo7My9igIgYahZlahVpnQtPnb8vD5VRVb8fcS3s4GQmjHd%2B8Sri3QqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3CnGApofwdQydd6SrcA%2FPhZU%2FR5MWjSURDkXDgnpXXapFE5Kgw9sr3cY%2BZHE2Y%2FMNuHbds%2FsraKqTT7qgisW05Htf84%2BpaMHYLB26a1Fn2iH9w56ly1%2BKO4sQa9EfQIB4G4R7Y%2FBx5mj4KbP8y2shi5wtjZD7cLHlYrNKzS4rIWXXA4XL%2F%2Fus5mk8GR2ngp%2BPUVpK%2FgeaRjpJscANDPqbxlZC3VL%2F39n50HcdTo%2FnlXLT8ywtm59R3jhaogsSAGz7bCBEdct5IsiIJaL8pzsXpz1b5iKdPLGc7Tm0RHy5b9Ysay0nxBxx9PpFTmLb8M3N9hCXDtuNz3E8GouPM%2BOGmuBl0Hc0YVpNkYn3%2FxAyQ4tVVM2TQjhOqnNoqZdmuRWRlNuDm1hIOsFlMA5jMW%2FNRq%2B9ifM0DFp%2BXlqtEnDrhJCeMlb0FvTObjrTeZcGOwMIvoxP5swrGhq4FQ24fhaMYkGNc1SM8XFBMpxeiF12HrJEYV78xWMYmdwvDyizJTYl5tTgNVvPPJ5rf7L5GAQzpvnZV1hbvtAG255sHkZ4naJgnfQBc8cr5Dtb7yDgy65FR9cJIGfXghLkMbL0Hnz2wBr2ZbR5WhzJW%2BIgmbCrtiysx0gXpzJ55hb9QnbyElBulP%2B5xsPJGAKw%2BMMPE%2BcEGOqUBU4bDT6wMFCkzLdJsb3%2BYDcyjiVdKEYF8LUrylMKkC%2BI%2B1X8zK0Jrfy%2Fa0DFj7kDmWdpQVoL04%2FE0W2sVWpygl6k1Kc9TmULbVOqd2tgGw0LxLApeD%2FDh6Cm78OGXMLXrC8QavDtARGI6ype5mKR5HjxBikTMbngQ4eDc9ph2I9mq7PJZvSP62UNQ8Oj0VRBcSeJVIF42bHj5EPZ9Sv3NJEn9TzM0&X-Amz-Signature=2098b8f833ccea653a4ad942d2d5af1f63e1d1c40ccb29f05319500b5ebe60ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANLQCH3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0vjPdRmOSjA%2Bomb85xIhBzsIsnKA61g%2FwZbSo7My9igIgYahZlahVpnQtPnb8vD5VRVb8fcS3s4GQmjHd%2B8Sri3QqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3CnGApofwdQydd6SrcA%2FPhZU%2FR5MWjSURDkXDgnpXXapFE5Kgw9sr3cY%2BZHE2Y%2FMNuHbds%2FsraKqTT7qgisW05Htf84%2BpaMHYLB26a1Fn2iH9w56ly1%2BKO4sQa9EfQIB4G4R7Y%2FBx5mj4KbP8y2shi5wtjZD7cLHlYrNKzS4rIWXXA4XL%2F%2Fus5mk8GR2ngp%2BPUVpK%2FgeaRjpJscANDPqbxlZC3VL%2F39n50HcdTo%2FnlXLT8ywtm59R3jhaogsSAGz7bCBEdct5IsiIJaL8pzsXpz1b5iKdPLGc7Tm0RHy5b9Ysay0nxBxx9PpFTmLb8M3N9hCXDtuNz3E8GouPM%2BOGmuBl0Hc0YVpNkYn3%2FxAyQ4tVVM2TQjhOqnNoqZdmuRWRlNuDm1hIOsFlMA5jMW%2FNRq%2B9ifM0DFp%2BXlqtEnDrhJCeMlb0FvTObjrTeZcGOwMIvoxP5swrGhq4FQ24fhaMYkGNc1SM8XFBMpxeiF12HrJEYV78xWMYmdwvDyizJTYl5tTgNVvPPJ5rf7L5GAQzpvnZV1hbvtAG255sHkZ4naJgnfQBc8cr5Dtb7yDgy65FR9cJIGfXghLkMbL0Hnz2wBr2ZbR5WhzJW%2BIgmbCrtiysx0gXpzJ55hb9QnbyElBulP%2B5xsPJGAKw%2BMMPE%2BcEGOqUBU4bDT6wMFCkzLdJsb3%2BYDcyjiVdKEYF8LUrylMKkC%2BI%2B1X8zK0Jrfy%2Fa0DFj7kDmWdpQVoL04%2FE0W2sVWpygl6k1Kc9TmULbVOqd2tgGw0LxLApeD%2FDh6Cm78OGXMLXrC8QavDtARGI6ype5mKR5HjxBikTMbngQ4eDc9ph2I9mq7PJZvSP62UNQ8Oj0VRBcSeJVIF42bHj5EPZ9Sv3NJEn9TzM0&X-Amz-Signature=17533654b40ae61cbdff8df530e8da8fa946b2a1ead55707cd968b7967b6d9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RLDUR4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCHkgSIqc08LStmLuCKqn9C%2BhJXoMxWweN54nYll1cRdwIhAKsp73b%2FMoRuKBOjF0Gxbzaag7KBzHMKQ5g8Xeo8JSKjKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwChJKeX3vE1b7E0Jkq3AOKQsYmuWh5QZEGAx197SHwJ1hraeai9tMY0pL7SdSz3fdiOslfeFrKxFf8XxLJ3hTSyq1leJHqiU%2BryG%2BhCBv2p0D5xiujdd4nqAvc8lsBvb%2FJpjyEo2haVtV2MXVh4fKGjk%2BMDcYyMJEiCOpSuQ%2Fz075LvIZVeIGRQz9R%2BKct2t8nwB9TaYh%2F3moGHVcJQ7XeoS4l7HZeNWdFKqjJDFtYwuQe2PXUE4B5pYf8jS%2FGNj21ogBAftzKINn857qPhltjGYtR1YtdItYCeZ4F44bScDU%2FVBTDUK2gL6m%2FS2tbPXAEOVDdHnDI82EtU%2B4w9bOiJTiJ4h5MBcImY%2FHh55lwOI1qnJohP1Pm6wAIS1kDak26MefZhwzOEm4I8KCix1HWkUhkIJpNx3vBQZRBDSHIqtbTI9zMd5GDb5gXUzULhi%2FFOaxqQSrgLfHl5Ku2nYy0S6fl6DH8BJsV7b%2FCEio4HaWiq%2FaDKrqPc2xIrQXm0AdlWPvl%2BqC6yq8lR4W%2BunB5BvAVoMhrQEog4%2FkQ7INtrjbPaKE3pfvHHyUtHbnJIPqT9Qkf2VtbHkD7pluOp%2FLumULeVl7D4uSSYEFh4ywb1mZLuEHmOLRZnnpi1ic0VwNXey7SzyJcvhKEGDDOxfnBBjqkAdnx6J1oMsAHRf3nuB%2FFgrs3KyxT7NQG4BXT9qRQrB2yvug1YKN0dl9gw6vxvsZXZse6fQDwP41Wrh8VjAfLrbTEfPRXLwqsuKOfg%2Bs%2Fbb3kDYaLbn%2B9vv9SJvdeBL5e5H4YOHQ2qCk47id0A%2BlBK5rM%2Bu9YItPFgAHmFQNgw3PjQ5o1zjamOkXKqZ%2FbKivVIK4RY12MHE%2Fz02e%2ByFdFXYe0pvEn&X-Amz-Signature=2caabffad5e73379c8a2a686b39d022c165c8b021c7e184326a0a400358fa483&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6J5DRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDzd4Xv3k9dOD9GGHP18oatjFFPITIJptrYEW%2BfgotmrAiEA5iRLh7XccBQilqdJMvHhrM0ngmHWJO4Bl4BqSYBo%2BnUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsLBbaE%2BLeEqwdNlyrcA6dCUcdVXelQiu9OyEKfhD7NntDev%2FLLkkG9zphwxGlHxDnXZMeXUNYcfKllZ7l5GccQmqM6ccNIAOkcgV036i%2Bs%2Fl3Liom9FyhYiCHb1ysvDmICqi8pnUVr4iCChiTDTCxIpz4w7k8LSXq5W1G9D2%2F%2F54oAg%2BSqiw9ZjVPuufhzNoMl618%2FxoONKZOlcCIJG%2FrUG06NOuiqW%2FO5aJZVIfhXdGKym3HyFoUEotBduipNzn7c3dkrkHtsjDOy5jsX7P9NtEr9SYQCGZ3P8kJ%2BQ%2Bdrow3nmwy7sJGwS1LloYNXmMqXPfCcs9CEuyx0i19ssb9a2HDnmMa3vHXwCdn%2FZ23OJFBJRUYR3mgA9L2RY4GtBRwM7FLsJG0rJhHnlchFg42jCmq1%2Fuwq%2FDG9W8fhqM%2BL3Q0fcwsbZ5BqHNHAOrt%2B4FvT220qkpvDIwp5P2TthfvzwLYsDY9fwjDX9AH87CLQBp%2FY%2Fnw47mosJT7a9tUBair9O3ykzxllg4aN74EgXdh3j%2Fbu%2FfofnkiPjX3hD3puGVsOUN8UB58xA8CN1QxVyWUHbjiPAzJcJL65mYFAeOhnmVVYwz5OF%2BELB3p%2FkDvAxx5NU8xwhwR6VIv7vpJjeGGb0ij6Vt1M%2F6zcMMPE%2BcEGOqUBscVvsZgsVVD9AcTyEebON7CVjiFJt3VCkJwyq6ZPFx51gfF48RyNNYXfM%2F%2BUD6c1p5k2gLz4p6xIOrqAUiCESTnoatE3Z%2FUV2vlTFG3BufulKWQwft39V%2BEhdB9bqHGDmT3bVXGFqUqlnyraIN13kNeIn6Rk3R9XjrKdaja9gBokZVYDB5UIeQ5wiAlHIdy2RA41%2BB%2BFEdiaftc2mcAY%2Fd3LCE7O&X-Amz-Signature=aebd208002da6d2163af1e97ef7fa665cd89a3ac384cb4093627a20cc11892e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANLQCH3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0vjPdRmOSjA%2Bomb85xIhBzsIsnKA61g%2FwZbSo7My9igIgYahZlahVpnQtPnb8vD5VRVb8fcS3s4GQmjHd%2B8Sri3QqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3CnGApofwdQydd6SrcA%2FPhZU%2FR5MWjSURDkXDgnpXXapFE5Kgw9sr3cY%2BZHE2Y%2FMNuHbds%2FsraKqTT7qgisW05Htf84%2BpaMHYLB26a1Fn2iH9w56ly1%2BKO4sQa9EfQIB4G4R7Y%2FBx5mj4KbP8y2shi5wtjZD7cLHlYrNKzS4rIWXXA4XL%2F%2Fus5mk8GR2ngp%2BPUVpK%2FgeaRjpJscANDPqbxlZC3VL%2F39n50HcdTo%2FnlXLT8ywtm59R3jhaogsSAGz7bCBEdct5IsiIJaL8pzsXpz1b5iKdPLGc7Tm0RHy5b9Ysay0nxBxx9PpFTmLb8M3N9hCXDtuNz3E8GouPM%2BOGmuBl0Hc0YVpNkYn3%2FxAyQ4tVVM2TQjhOqnNoqZdmuRWRlNuDm1hIOsFlMA5jMW%2FNRq%2B9ifM0DFp%2BXlqtEnDrhJCeMlb0FvTObjrTeZcGOwMIvoxP5swrGhq4FQ24fhaMYkGNc1SM8XFBMpxeiF12HrJEYV78xWMYmdwvDyizJTYl5tTgNVvPPJ5rf7L5GAQzpvnZV1hbvtAG255sHkZ4naJgnfQBc8cr5Dtb7yDgy65FR9cJIGfXghLkMbL0Hnz2wBr2ZbR5WhzJW%2BIgmbCrtiysx0gXpzJ55hb9QnbyElBulP%2B5xsPJGAKw%2BMMPE%2BcEGOqUBU4bDT6wMFCkzLdJsb3%2BYDcyjiVdKEYF8LUrylMKkC%2BI%2B1X8zK0Jrfy%2Fa0DFj7kDmWdpQVoL04%2FE0W2sVWpygl6k1Kc9TmULbVOqd2tgGw0LxLApeD%2FDh6Cm78OGXMLXrC8QavDtARGI6ype5mKR5HjxBikTMbngQ4eDc9ph2I9mq7PJZvSP62UNQ8Oj0VRBcSeJVIF42bHj5EPZ9Sv3NJEn9TzM0&X-Amz-Signature=d4d466a2dc530c69841947a77a8ba9fef4a0f6d0df8574922c53291190edb3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
