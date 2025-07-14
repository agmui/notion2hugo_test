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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=154ee2779e55ff8fd7dc51020637daac7e8c277bea02e2eafa26531e2582b415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=f5e43acbc7366fd9f41b662d2985b1b094de8256a7ca103db0da028185ff145f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=ab636283dbb8a0cd2f68202b4410faa3af43b4e60f0c497960e22bf1eb955f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTKFIPZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDclCfdWbaTpnApZ1WazymTik5p%2BDnfXNu8f3YB4KER6AiBuoEodnrJAvNrYmYzqXZVufeevWbHAQ97uDuyg449VrCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMAzpDasdnIkIalzjvKtwDP4R72yX7bDCiwSf86IEjmJ4bvM6iCpLL4bxV3pYxAsjl3Q7BHh8y98SoX%2F9xIYk0O7WaIQVueKMzjH4%2FfJFb9Ctm58Cp57GrIPevxftwk202FfdOm7FaHh0Slpe6xcvJCPCCotdBgpKRjDcsSpLrTAx3ve1oQILBwUzPUzNymoc4E5yBILcHQt24aZNy%2BVT7D%2BYNIUFSpPowVKhNBh63mP0e1MGQA7yavu%2F1IpDHbnU7pPTUR9MU9vL1yatqLDM%2BcwopYJ24AVwrZX0%2BTl1iWem9%2Fg6fBKuqPic7qdNvXZ0EWmx3tI6NR1XIuXaTNwUikkBPVaqLNz%2FPC8m7VPQ3qPiukedxpBbyzUMD2bq5yTt%2BhpgI7kNU2hVgTf2ZzOSJ4wTBILl42ZkRLmj47RC28Mh%2F0QuFeEflo3sGATezQvhezIMKgJNN6DTuZ3%2Bi3cHsn95WeQfy0C%2FWto8T5%2B8luldaFysAxzXcZcB%2BzpC0PCMCnD0VznBvPYo%2Fu5sfs5vF6wDJP5Qnp7XvKykRon%2F8zRwZoVP%2FLfEe291%2Fi6V3TESRE8YzN%2FOwiLBL6QT9xe3R3k2cHZlcTlAaUY4e2ZL%2BSMBscJRHa%2BoHa9s%2FbDODpmTyPLVqrBtP80dHf48wlIXUwwY6pgF4M2P4AG6T%2BkwXJKxJd8Ou4Fztx%2FgUFIfSaCJeFFK0hdWlMdu9%2FiwwdgvFIsHQrgxNIt1scxxphoF9YK%2BoU9EdapUkO1Y6alMui3Ftw1LGSPJxPy9ZV27rQew%2F4AXr3rC7M7APamRyq9BBRm9ZAdZMbPs5BoGf43okvfdqsuIMJFQUGYSyMAH26aNGjgj3wWeRsAlNyDwOd0%2BAlwT%2BcoB6MrPnANse&X-Amz-Signature=64e7dd15608c304d4307440c105a32bafab84769f36affbcda494591e45a3f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWDCXBJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDCfIJ3sR%2BKayI444gInCvunSQv1WZQcwe0dRsuFzZ51AIhAO3Oh2jy9BVZDiTbZ5MiYEYG2CRWteeQbFRQEnKv0SPuKv8DCC4QABoMNjM3NDIzMTgzODA1Igz5yOSDVekiEZrrzSUq3APQRKzk%2Bn2Dh6ijSkOZ9OUaDbBVqXyMh5ss%2FIQzSh%2BfDYJqwm%2FikkL2jNNcRCVXPf4kuXnagHq7BkZXJ6vjv73eMEQJ1A1fC7tiKk9MCtH1LR%2Bf3nCzDxjxzj7DSNG%2F3FL64VmIZ15mcakcop9lOzi9WTRMgFyC4XD%2BIOZ9hAV5FRSPOuOL8w2q01kAy5ztZfKwwgCCgXgyZWLGueVHGOPvyJ9zG2SJFTM9M7X8Qgw0DkpGmXbQIi%2FdyeVLuRN4APGsSAFRNJb9beQGQwn0bvBDoEYVHJbKqDwgTehNVP3y%2B%2Ba41xBTddYGEoFUe9UAmriiS055llmaG9LIWoJH9MkDYdJn5S1IV92wvZMpioTpxZi3TfpjA%2BwuWfEzDQ6gWy%2BcAV8ZY2czrqHCnWVTYzp2qrCDpjA91fRwJlBCTGHjwqMLG7ti80g1NqSo%2F7atg99ULhU137UrbB%2FIcdxYe69eZh8YBWUe1GtZyV3by9lffkIevrmbR7p9WY3Xrr3y3jqiz2sshKLNzRmIbpEpQPngWZ47VpLCjls3WfIpMI3WwX4FBCykoaAkrHA2KDOJimuHehLpoJX2%2BBoGF1JhV7sFrpt3b0UQDFlCpOOqEUczu5pDUEGkcJSnOoRWQjCqhNTDBjqkARrRicV6IdJ%2FRFJ655o5DLoAF3FmgAQQFozjA%2F9x%2BEnU64YCMyQa2j3KC9rOHcIop8Jrp13pMz0s6C%2BJap%2ByaTFXcMaVkVchDRXjV369sxrJONmq%2FJVwfpHYK5URriGB2BLe7FDN8eSbiFoC%2FnrDruaMBs%2FQFWhKPACjwgRVn5GrEf9yIS1Uk4VwvS9vDr1V4ICDC%2BgJl4Bsib8TMvitZvQng2po&X-Amz-Signature=e1783420831a38fb39669fbd806b1e5ccf7b2bc84707bba81bdb14c38b770299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=ec816532b60b0e039b1d3c19b7542ee5e1096a5453411cbfb6ae329f43c6632b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
