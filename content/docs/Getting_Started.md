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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL75EJLQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFQHnwo1D%2FFpNqpI7uWcP9Yxd9aRTxEpWUAvVn6yNjT6AiEAkAzLaAZSrNjJYjGhn7I%2B1SzH5OahTpEON5IhNZUFh5Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIgAeA3x5maeljoWXyrcA2FGIM5m5LPTzjKtWTnSlTEiiFfAgqlpqlPiR%2FaGZxr%2FqGlcuDLKS28LT0qS1NYSFp7A0EbJyiWMpLcQOGDzfK0I3ISJRMvq2kGtNs9lour259Zdn4TFC4mTImgduM9B4eb%2BOAFXDQM0RYBP181ZF1PmsYwKLNNLT1SWwkYTTqLNAIzmLhWgWtG%2FH3ZgE%2B%2FebXQTTWR15UXK17onlXrldiwDVsR%2BzEWvTeELY8O0NX1besHkf136%2FtthUjZEmTLl%2F1gD5CbBLX65D%2Fx9jCL%2BJ34y%2Br4enqYu8j%2FCt3TU%2Bq8Lu9gshhPJWYnrYH76gy%2BG0ZKcinU%2FjSWrP26CUorL8J5ZVy6wlFHDvIepTCUiWg%2B%2BnrdBfYOE60lC3S9tnsbGX1j7llIOsJbc44RTkbuCHWl3Tz6XgucV7sSVtyK4nc%2BgprfEBVyRZJJDZ7ABB0ex%2ByNq02wGmx2QbWrjrGCFH0AqsgDYCTGsu6%2BnMggK4aWaNBMqh%2FXQAXPjJGtXE%2FjbT8DCK28AX0%2BnVghRVhU%2Fj0812C3PsaFc30cRs2x8EDIBCaTOJFtkQdWsZM7Ybr88QLx48iGNMIBcNsb2vc9kxgi72hGdbLZYkbrujbCif0bIbJirk4sSd%2FyKV6uVMIrRj8QGOqUBSPOtWtGWoN3i8w4Yu8aOSUDJIsK6fTPhZOMJnJx8%2FAR3ZCEaHHut837jj6sBzVGsdioAXj6UuQ29R7%2FTl%2FFaN5mRuV9W0xmb0fqla4sMpjWE99x90F887Ryy0o7QR6uqzxhvaMqmwog89OtvVno47oushBVuDAKriKVMpzl4F1GA81dSTB6l%2FCSVjgkxHbMmGT%2FcUvsz%2BvnVMQJloKi9yqr3bDdJ&X-Amz-Signature=3a01486b9b0c889a11e981ac6088e99b6de96420af6f4b8ae3a26f307fc1f35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL75EJLQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFQHnwo1D%2FFpNqpI7uWcP9Yxd9aRTxEpWUAvVn6yNjT6AiEAkAzLaAZSrNjJYjGhn7I%2B1SzH5OahTpEON5IhNZUFh5Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIgAeA3x5maeljoWXyrcA2FGIM5m5LPTzjKtWTnSlTEiiFfAgqlpqlPiR%2FaGZxr%2FqGlcuDLKS28LT0qS1NYSFp7A0EbJyiWMpLcQOGDzfK0I3ISJRMvq2kGtNs9lour259Zdn4TFC4mTImgduM9B4eb%2BOAFXDQM0RYBP181ZF1PmsYwKLNNLT1SWwkYTTqLNAIzmLhWgWtG%2FH3ZgE%2B%2FebXQTTWR15UXK17onlXrldiwDVsR%2BzEWvTeELY8O0NX1besHkf136%2FtthUjZEmTLl%2F1gD5CbBLX65D%2Fx9jCL%2BJ34y%2Br4enqYu8j%2FCt3TU%2Bq8Lu9gshhPJWYnrYH76gy%2BG0ZKcinU%2FjSWrP26CUorL8J5ZVy6wlFHDvIepTCUiWg%2B%2BnrdBfYOE60lC3S9tnsbGX1j7llIOsJbc44RTkbuCHWl3Tz6XgucV7sSVtyK4nc%2BgprfEBVyRZJJDZ7ABB0ex%2ByNq02wGmx2QbWrjrGCFH0AqsgDYCTGsu6%2BnMggK4aWaNBMqh%2FXQAXPjJGtXE%2FjbT8DCK28AX0%2BnVghRVhU%2Fj0812C3PsaFc30cRs2x8EDIBCaTOJFtkQdWsZM7Ybr88QLx48iGNMIBcNsb2vc9kxgi72hGdbLZYkbrujbCif0bIbJirk4sSd%2FyKV6uVMIrRj8QGOqUBSPOtWtGWoN3i8w4Yu8aOSUDJIsK6fTPhZOMJnJx8%2FAR3ZCEaHHut837jj6sBzVGsdioAXj6UuQ29R7%2FTl%2FFaN5mRuV9W0xmb0fqla4sMpjWE99x90F887Ryy0o7QR6uqzxhvaMqmwog89OtvVno47oushBVuDAKriKVMpzl4F1GA81dSTB6l%2FCSVjgkxHbMmGT%2FcUvsz%2BvnVMQJloKi9yqr3bDdJ&X-Amz-Signature=9af9299ac858eb52d7e93e48321c643b54e298e5479744e7a1e3c2ac5256ee7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL75EJLQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFQHnwo1D%2FFpNqpI7uWcP9Yxd9aRTxEpWUAvVn6yNjT6AiEAkAzLaAZSrNjJYjGhn7I%2B1SzH5OahTpEON5IhNZUFh5Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIgAeA3x5maeljoWXyrcA2FGIM5m5LPTzjKtWTnSlTEiiFfAgqlpqlPiR%2FaGZxr%2FqGlcuDLKS28LT0qS1NYSFp7A0EbJyiWMpLcQOGDzfK0I3ISJRMvq2kGtNs9lour259Zdn4TFC4mTImgduM9B4eb%2BOAFXDQM0RYBP181ZF1PmsYwKLNNLT1SWwkYTTqLNAIzmLhWgWtG%2FH3ZgE%2B%2FebXQTTWR15UXK17onlXrldiwDVsR%2BzEWvTeELY8O0NX1besHkf136%2FtthUjZEmTLl%2F1gD5CbBLX65D%2Fx9jCL%2BJ34y%2Br4enqYu8j%2FCt3TU%2Bq8Lu9gshhPJWYnrYH76gy%2BG0ZKcinU%2FjSWrP26CUorL8J5ZVy6wlFHDvIepTCUiWg%2B%2BnrdBfYOE60lC3S9tnsbGX1j7llIOsJbc44RTkbuCHWl3Tz6XgucV7sSVtyK4nc%2BgprfEBVyRZJJDZ7ABB0ex%2ByNq02wGmx2QbWrjrGCFH0AqsgDYCTGsu6%2BnMggK4aWaNBMqh%2FXQAXPjJGtXE%2FjbT8DCK28AX0%2BnVghRVhU%2Fj0812C3PsaFc30cRs2x8EDIBCaTOJFtkQdWsZM7Ybr88QLx48iGNMIBcNsb2vc9kxgi72hGdbLZYkbrujbCif0bIbJirk4sSd%2FyKV6uVMIrRj8QGOqUBSPOtWtGWoN3i8w4Yu8aOSUDJIsK6fTPhZOMJnJx8%2FAR3ZCEaHHut837jj6sBzVGsdioAXj6UuQ29R7%2FTl%2FFaN5mRuV9W0xmb0fqla4sMpjWE99x90F887Ryy0o7QR6uqzxhvaMqmwog89OtvVno47oushBVuDAKriKVMpzl4F1GA81dSTB6l%2FCSVjgkxHbMmGT%2FcUvsz%2BvnVMQJloKi9yqr3bDdJ&X-Amz-Signature=1e5b8fab78c53949c2fb82adfe0ba26fb73601c70e0999222f96f5b26d41efa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMBCT7O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCtH7%2BNRP2A84EMB%2F9EW1w9zQUBEsCQYJf9NwEDixABLQIgXbhjtWMkWy6toaNkz5lRDjyLvaeJG3CxrhWcbubFDAsq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHgDLReZhOY1LhFXGSrcAzKCYNaU%2Feluxw6Wi6OJgkM94SEwciT%2B2FKpksOmqYpXbhqmOt9bksIg%2B5JR6RI7JSlNS8vbtF%2FYeZblEF9OOiFmN4bfygUJrHCm7pwUrqU0ESNoHGLlW2WVZw%2BFBKhpkbRG%2BBxae6AntMo45ubhjfVmdmre8fqBN53sy0J7TVa4dsejI8v81nCgpt3sUuNQ9nikguW5Z13TWcd6lTUxCLathrHqtsh7VuyR%2BFXGY03tDYGt0Q%2FxEw4LUc6sFa3eobmFFiV7iuYlSZ2HFIGQDnRLsjHfwKZRbr8ki71Uyfu%2By69EMtDJIVZZDVL9UJ9jLuIcQ35sSUJ2IZ8dagY%2FkLO7irjgbLifVQUYVRI%2BG5zD0Lo%2B9WaFC5sODrwG47W3qN0qGBawdzX2ufXC03H7kW0ps0EC2cuYY38TqQ7WCpP0fntUuYm5YQ%2BZeS7Yy53b9hc2e8CPPT1%2FVz2CONoK3mJuKB8qqSgmG%2B%2BPzHDYnv9tavEutQP5YddByUWVztlxWLREZ5kBEbcCcZxhmul9dkw9jqpwTDjMTe2x%2FHanQc2KkSxEb9DnjKIGHPoKpDXJK2sDIO%2BSEWLQ3GFCjMEZqOsvHYecaa9TRpzmVGh1MdIsgB1MhTnmNBwfaMWlMM3Rj8QGOqUBs8Tn6Uf3BOW30AmtdchkGmQR8s7xQS7TsZjPfE5pR2VhW3XhwS2q7mjgBiWTCGGXDm1A%2BEOXtb5zbL2Kj8GBZFSmXTCcUSuztrUWNZUqSd0dYfM4IfItfM8iUkmYsOFshfrFXnJx2yzeCyuDaR%2B8ym09vGmbeLoo96yRyWlV4d8SgFY4ub8Sua2l4EEmi1f8Udt%2B9nVedAEEnvoMK2MEaxLfpeVV&X-Amz-Signature=a05460134a5418761a93e8e48a14bb2bc8a8789c20f0d8b157c78969379f7c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM27RU7S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9sWxLllhRACXQ5%2Bi0QqvsabHFGiX2OWqY6E%2FMsLuqrwIgStVq49ctrY3AxrpuD%2Beey2blUSTSMKU0i0PAYPbrfFwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDEZdi4%2B9yeb1Nd9M8ircAy8qh%2FbxKfKnjCf%2FaGGWL7Sf6CoZAIHv4Fyas9y%2BRhowNuVizEpdAfn7P9B7WNnd7OMPvY%2BpqGqSa5yUe8CFYR%2Bl5g90e7tauJ6OMuse13TdtEagU77aY4h3o%2B6MU2xN7Ye8l0CYr2Q7%2FIoSQgn1vgXQQpn9Iset2MyUdUYc0oMA9nBs1shv1Hxb78kedaUABNG8fOIwEYoib7czLE4gmEGOMUGfxEAShKriCGFy8bp%2FIijCXq%2FZWOGege%2BZAuYBlOGZFfA0iO9i%2FYDYyFPx%2FJYLcq10MZE0kDoYsUZEV5QB0GZFQkHy3N7puVwt39awONggkEt%2BDpdzdVmZEwHx6%2B9Ht%2FCIUbX1dWD1KjPozOe2QwlX8fo1Q%2BUv%2BeZDrf1SRzERZdongsNKwRxd75fXDmLYBCAMRT8mtjyOXXnQJrRMwr2vKV18fLi%2BsR%2B40SMm29piotLVaMMm2Pub3enXkxQK8X1xfUNDKPpn4Sz9sOIYLe0V51dfmRpPhc3fIgIj38zpjqGGqH8JTHI4YwQC%2F3ZOraKR3UtSXIocycm1sfD44%2ByIHKybgsdtLgCK9EZNGTfFewCjULaFHFbwbXFNcqzNEfoIVfF9159VFOvYdBPQrOyKvS6vrnFuTePDMLLRj8QGOqUBlVHHkU9P5TjLvLi1QgXt22PFnbR21u3aQ8Hiau6BEBYvK47s%2F2lnVa%2FPOZRe76t7zRCoKNmE3CcM9%2FO8JmorbBBofCAT%2FM1gC1dhC%2FSLMbQY6Sy3%2FSIGznyrfkXwSXbYbDoI2d3rbTn28nCbblZfTItsA78HkO6Uo5RhLIhT%2FmLowY04CAPhLOko4FakZyrwfS8sCE3cO4cU2bx2Wcp9VuXm1gJJ&X-Amz-Signature=c79a592707c4ca2c9c825a16d33086df92bb2b88694078ee9315121bafe5de3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL75EJLQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFQHnwo1D%2FFpNqpI7uWcP9Yxd9aRTxEpWUAvVn6yNjT6AiEAkAzLaAZSrNjJYjGhn7I%2B1SzH5OahTpEON5IhNZUFh5Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIgAeA3x5maeljoWXyrcA2FGIM5m5LPTzjKtWTnSlTEiiFfAgqlpqlPiR%2FaGZxr%2FqGlcuDLKS28LT0qS1NYSFp7A0EbJyiWMpLcQOGDzfK0I3ISJRMvq2kGtNs9lour259Zdn4TFC4mTImgduM9B4eb%2BOAFXDQM0RYBP181ZF1PmsYwKLNNLT1SWwkYTTqLNAIzmLhWgWtG%2FH3ZgE%2B%2FebXQTTWR15UXK17onlXrldiwDVsR%2BzEWvTeELY8O0NX1besHkf136%2FtthUjZEmTLl%2F1gD5CbBLX65D%2Fx9jCL%2BJ34y%2Br4enqYu8j%2FCt3TU%2Bq8Lu9gshhPJWYnrYH76gy%2BG0ZKcinU%2FjSWrP26CUorL8J5ZVy6wlFHDvIepTCUiWg%2B%2BnrdBfYOE60lC3S9tnsbGX1j7llIOsJbc44RTkbuCHWl3Tz6XgucV7sSVtyK4nc%2BgprfEBVyRZJJDZ7ABB0ex%2ByNq02wGmx2QbWrjrGCFH0AqsgDYCTGsu6%2BnMggK4aWaNBMqh%2FXQAXPjJGtXE%2FjbT8DCK28AX0%2BnVghRVhU%2Fj0812C3PsaFc30cRs2x8EDIBCaTOJFtkQdWsZM7Ybr88QLx48iGNMIBcNsb2vc9kxgi72hGdbLZYkbrujbCif0bIbJirk4sSd%2FyKV6uVMIrRj8QGOqUBSPOtWtGWoN3i8w4Yu8aOSUDJIsK6fTPhZOMJnJx8%2FAR3ZCEaHHut837jj6sBzVGsdioAXj6UuQ29R7%2FTl%2FFaN5mRuV9W0xmb0fqla4sMpjWE99x90F887Ryy0o7QR6uqzxhvaMqmwog89OtvVno47oushBVuDAKriKVMpzl4F1GA81dSTB6l%2FCSVjgkxHbMmGT%2FcUvsz%2BvnVMQJloKi9yqr3bDdJ&X-Amz-Signature=33a8e3aaf288279f2626509452806c7815daa921b711c3537cdc2ca1943b3cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
