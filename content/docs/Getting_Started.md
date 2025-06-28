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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECLJROJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMUpzuZkfugw3nl4S5LJIQzUL5fNLIP3hLMJb84hly%2FgIhAJyx%2FAvOtqCoTKWkZQNEoMj4tPxTHdlmruniZ31KotkCKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhylg7hAilGRMrHbUq3ANng0qoymq8fHmm2gaLv0WM1gAzicgGJxqaZLSf15JXeir%2BCl1UnMXUwwx0W6j%2FKIK7qSsSMGfC2WaqA0XkwmI7NoWg3LoMpdiI9L8JPFVPKOReqESD%2FFuGl0Bj0wjdcEeNruznJgIpxc3QAtQcJTxzPE18iHDurdLhY9jl27U6bcY%2BoVjeAN0eAG7zrfZinETjg0R54%2BPrC7ySKwZN1Pf5FxBwMjSkA%2F4OMOAw5ekbbHj4oiU7c3vfmqGC3xv7hNai%2FQot4q8%2FWG6vyBjNISciSXMcq4mIgSxctKSIOwaWd8lXM6hq%2FPz6o09SamAk7xK775uiCYuCGoscsG415cL0WOXqL7vQrqmdHRWC6iGggAyE5BcXFUyIwhGCLwA5lEGe%2BV9GPKy6A3NiWAGoMoXZcZBcisGnr4xo38shH3CwkSDbk5ioWAOqdDB0zxkwurIwNKJvvxDLRFOaHh91OwqQGtu%2FiYFsGEt5Wl2aYB1nqw%2F82TfbFwWAa%2FAykG%2Fl0Nwg%2FHkgauX%2F44Br1YK4dRsSCFBvgdvEi4naPj4TqbDKxXm6S%2FLQ%2FMawPJIEYerPhcM7m%2BOm6%2BoR%2Fxxis%2BBOaFgKeIRSMZ8H2BhAqco%2BTDJu9phid1CpK2uEdftlhDDw%2F%2FzCBjqkAaqEZmNX65pCpqEL5nEEJjqhpwx5saJdxCus050GE3VUbw1IjZsR1U%2BjSqZRQ0gTHHTV%2BlQL7ek7TCtcwXNQsVoNZyFjSS4fbBw5eobUQtk4hMPxTCvAEZEP6NQizNThe4GEuPstbeirfGB9eVkcICwGZ9Bo2%2FyFGj6VIiDKXO20cMdTo590LZEjhtodN4iKOSW6myn3tYrShFNIrvgHMChITkN%2B&X-Amz-Signature=3901eda46351c33b5e1ad3487ab4565b873d53e78bbbf375b8a8bcc7025d3e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECLJROJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMUpzuZkfugw3nl4S5LJIQzUL5fNLIP3hLMJb84hly%2FgIhAJyx%2FAvOtqCoTKWkZQNEoMj4tPxTHdlmruniZ31KotkCKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhylg7hAilGRMrHbUq3ANng0qoymq8fHmm2gaLv0WM1gAzicgGJxqaZLSf15JXeir%2BCl1UnMXUwwx0W6j%2FKIK7qSsSMGfC2WaqA0XkwmI7NoWg3LoMpdiI9L8JPFVPKOReqESD%2FFuGl0Bj0wjdcEeNruznJgIpxc3QAtQcJTxzPE18iHDurdLhY9jl27U6bcY%2BoVjeAN0eAG7zrfZinETjg0R54%2BPrC7ySKwZN1Pf5FxBwMjSkA%2F4OMOAw5ekbbHj4oiU7c3vfmqGC3xv7hNai%2FQot4q8%2FWG6vyBjNISciSXMcq4mIgSxctKSIOwaWd8lXM6hq%2FPz6o09SamAk7xK775uiCYuCGoscsG415cL0WOXqL7vQrqmdHRWC6iGggAyE5BcXFUyIwhGCLwA5lEGe%2BV9GPKy6A3NiWAGoMoXZcZBcisGnr4xo38shH3CwkSDbk5ioWAOqdDB0zxkwurIwNKJvvxDLRFOaHh91OwqQGtu%2FiYFsGEt5Wl2aYB1nqw%2F82TfbFwWAa%2FAykG%2Fl0Nwg%2FHkgauX%2F44Br1YK4dRsSCFBvgdvEi4naPj4TqbDKxXm6S%2FLQ%2FMawPJIEYerPhcM7m%2BOm6%2BoR%2Fxxis%2BBOaFgKeIRSMZ8H2BhAqco%2BTDJu9phid1CpK2uEdftlhDDw%2F%2FzCBjqkAaqEZmNX65pCpqEL5nEEJjqhpwx5saJdxCus050GE3VUbw1IjZsR1U%2BjSqZRQ0gTHHTV%2BlQL7ek7TCtcwXNQsVoNZyFjSS4fbBw5eobUQtk4hMPxTCvAEZEP6NQizNThe4GEuPstbeirfGB9eVkcICwGZ9Bo2%2FyFGj6VIiDKXO20cMdTo590LZEjhtodN4iKOSW6myn3tYrShFNIrvgHMChITkN%2B&X-Amz-Signature=6354b6838fc52b47331b105a656aa2ac66f2cd55d1c033fef58314b9ea959bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECLJROJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMUpzuZkfugw3nl4S5LJIQzUL5fNLIP3hLMJb84hly%2FgIhAJyx%2FAvOtqCoTKWkZQNEoMj4tPxTHdlmruniZ31KotkCKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhylg7hAilGRMrHbUq3ANng0qoymq8fHmm2gaLv0WM1gAzicgGJxqaZLSf15JXeir%2BCl1UnMXUwwx0W6j%2FKIK7qSsSMGfC2WaqA0XkwmI7NoWg3LoMpdiI9L8JPFVPKOReqESD%2FFuGl0Bj0wjdcEeNruznJgIpxc3QAtQcJTxzPE18iHDurdLhY9jl27U6bcY%2BoVjeAN0eAG7zrfZinETjg0R54%2BPrC7ySKwZN1Pf5FxBwMjSkA%2F4OMOAw5ekbbHj4oiU7c3vfmqGC3xv7hNai%2FQot4q8%2FWG6vyBjNISciSXMcq4mIgSxctKSIOwaWd8lXM6hq%2FPz6o09SamAk7xK775uiCYuCGoscsG415cL0WOXqL7vQrqmdHRWC6iGggAyE5BcXFUyIwhGCLwA5lEGe%2BV9GPKy6A3NiWAGoMoXZcZBcisGnr4xo38shH3CwkSDbk5ioWAOqdDB0zxkwurIwNKJvvxDLRFOaHh91OwqQGtu%2FiYFsGEt5Wl2aYB1nqw%2F82TfbFwWAa%2FAykG%2Fl0Nwg%2FHkgauX%2F44Br1YK4dRsSCFBvgdvEi4naPj4TqbDKxXm6S%2FLQ%2FMawPJIEYerPhcM7m%2BOm6%2BoR%2Fxxis%2BBOaFgKeIRSMZ8H2BhAqco%2BTDJu9phid1CpK2uEdftlhDDw%2F%2FzCBjqkAaqEZmNX65pCpqEL5nEEJjqhpwx5saJdxCus050GE3VUbw1IjZsR1U%2BjSqZRQ0gTHHTV%2BlQL7ek7TCtcwXNQsVoNZyFjSS4fbBw5eobUQtk4hMPxTCvAEZEP6NQizNThe4GEuPstbeirfGB9eVkcICwGZ9Bo2%2FyFGj6VIiDKXO20cMdTo590LZEjhtodN4iKOSW6myn3tYrShFNIrvgHMChITkN%2B&X-Amz-Signature=3d414d602ff13584423b7457fb73340b37488576c29d5b48982b8338508a09a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYYPWZB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzU6%2FBSG7Gvi7BarjmzsKC1b1lBBdyosUYoFdhU7CV7QIgPeKpBJIDAuTj2hVKxQ%2FYbZFEZSmu8pw8OPoxfdhTJFwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD97wc%2BUieeMGEmGkCrcAylDPgSOrl%2FfKJQR8RTnb1WCJuetV0RjWJZdliWqBlxeTjYgb9hfFZvPpfLGWKPqVP1hxoiZMnn3oSiJUFK%2BLwMqcvAbgCPsivL2VRaMijR6AK39zWuvUXyMg9F9y%2FwVLz2m%2BRgxEsEKd84iQovKF%2F7Z4j1XD4%2BccOFALasbJALIr051iJRqFOtEIivNSpavGNYgE46jWy5utowAiAw5I3ZK%2F2DWM3ohkjJZqID%2BzSpi2hH5YVaMJ1Z8JVDzELBBDaNLZylNhs8zSke3W2fHkFiCmkFyi9HM1hOyEjAxgxWjN4%2BJHWBBZVzrMhkoqUrp3D5LRPqmotgZoae%2FveHIPkfb1sgKKbbXYKuwE1TgC1QCCdM3L7fvHZtbD6I769W2Q2KsLBtRMof8HOBHwXrhWNyLkVlsXeWdgQfJQJbruazX8KC95%2FmxjCbGyjrjpzV3BLYRMm0WbLUALLgD9f28iktwJBmL%2BUNem0zC3bpJ5jwF5EIWqjWH%2BNYFuTurrDSoYcEOkexPUGC0Xf8YcULdl%2FbkiMDmkl9rr75FOvPWx%2FXR1tjzB5%2FqX24sgOouPROLVhrJVkfpvXdRgxqv3ZJTpQew2uIlDBgoZBAxOl4dYkh0YURpt9UHzuTuiEgiMN3%2F%2FMIGOqUBsQ7rSSUBnKliMIOOL3VmLBr3sLlDRDL7wn4DHLZz1C%2FbUPBINWu%2FozPEFD32TKFd5YTScOets4z79WjRs69lsIcRnSn%2FGt2qu3%2BF%2FHpEkTvKfOvfusjkh2r8LsKAcK%2FHbSpENfehfAUUGmp%2Bwwz%2FihsulCqNvT9d6sl6frJehJutdqp8I2ScLYZmCfj1H0IB%2BawbWNxWLtlKFkY1VNnSH3fOWarg&X-Amz-Signature=cf69ce1abd280e13a888f2b1d7856ab986b428a2b3e68ba435a617f112414196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVBJDUT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfSa2%2BfvKStOxo68%2B4TXGahINQ4XuW2bC9QiEv2w3aqAiEAqFz%2BacHormpebrWMJkAyR8382OO%2FgtKJij8y7LFPCKIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxdTzQGJV6q70NOpircA97%2Bj1tOwasn7lubKRjeiIuxYn%2FiQ0jcDo3rPOFn3odwk9OlKt86vl1ZXCFZ6Zt6CV9MCzEE%2FpfwKOpkdK5USWvGveREzd6bQj6glDZx3dg7eTJ8yffkSXxHSMmcagjHpzG3xP1mDBVzBq8FfhyYfcAr3qQ%2B4MIbARLG7Ci06VgCZtCCiAzS7AKyYXEwQlF%2BTo9cQ9kjTIE7Ltn0WnGuFzT2Vg%2B%2FRAS4SCYYP67XamQZ5tpiec1aGj5LkWPxCz1DYIy%2F9AHOxQtoSTjywZv%2FFkU7wcyE1Xt0Z3wrCIbjMkLSK%2BMzuBTJm3OkrnW2z24KwL0p51ptjHMif3mB5Md1xyaIEIQamU8cpN9aJunF6F5MwgjxGgNdjFUedoK61b0rfeW17PTZMjGyK7LFvDlryWWqCQEshiqdfSdJ8zuKELgVC%2FY56a%2BQvTgTjcx0PLWR3Ucd6J0FdPmOWuzBdCT4mVKQEsEeq7Ll%2F%2F7N8HMk8hO%2BNcDKvhSlX%2FxDPRDRIvguA%2FIdqwdZCZ56Iem3NY15B8FyxML%2BHI5K74ARioAxgtuG0pJ3CSGmrZ%2F948Hi6wAxWePYpjecHQgemZWLtff7KlSraVV7agtM384CKEznWJCWmegljiU2UGxh7XqsMI3%2F%2FMIGOqUBuKQLqAHiKpaj4TeLLJxsOhsPLFj6pso6Jl8lH3l4M3jEmCi15go91EJG1RK4SKiHc6TEpZgXwZXmvKSEce0MX6GIwhV%2FKYLG2%2BImMB1w7WDYyaG8hPnBnmIBsSquifV%2FJz4kiZTRdTtA2nuO6x9Q3LAvQRM6Rj3g5llkoxXUSUYZ6ACxH13vV%2B0m1P%2FsBFzDbIkXlXwJF2k3P78RyjWaMpQKSvfs&X-Amz-Signature=3b4ead44de0a5894a3b6c18bd2c06664bb977d4c6d068328ee75509e9c22a89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECLJROJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMUpzuZkfugw3nl4S5LJIQzUL5fNLIP3hLMJb84hly%2FgIhAJyx%2FAvOtqCoTKWkZQNEoMj4tPxTHdlmruniZ31KotkCKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhylg7hAilGRMrHbUq3ANng0qoymq8fHmm2gaLv0WM1gAzicgGJxqaZLSf15JXeir%2BCl1UnMXUwwx0W6j%2FKIK7qSsSMGfC2WaqA0XkwmI7NoWg3LoMpdiI9L8JPFVPKOReqESD%2FFuGl0Bj0wjdcEeNruznJgIpxc3QAtQcJTxzPE18iHDurdLhY9jl27U6bcY%2BoVjeAN0eAG7zrfZinETjg0R54%2BPrC7ySKwZN1Pf5FxBwMjSkA%2F4OMOAw5ekbbHj4oiU7c3vfmqGC3xv7hNai%2FQot4q8%2FWG6vyBjNISciSXMcq4mIgSxctKSIOwaWd8lXM6hq%2FPz6o09SamAk7xK775uiCYuCGoscsG415cL0WOXqL7vQrqmdHRWC6iGggAyE5BcXFUyIwhGCLwA5lEGe%2BV9GPKy6A3NiWAGoMoXZcZBcisGnr4xo38shH3CwkSDbk5ioWAOqdDB0zxkwurIwNKJvvxDLRFOaHh91OwqQGtu%2FiYFsGEt5Wl2aYB1nqw%2F82TfbFwWAa%2FAykG%2Fl0Nwg%2FHkgauX%2F44Br1YK4dRsSCFBvgdvEi4naPj4TqbDKxXm6S%2FLQ%2FMawPJIEYerPhcM7m%2BOm6%2BoR%2Fxxis%2BBOaFgKeIRSMZ8H2BhAqco%2BTDJu9phid1CpK2uEdftlhDDw%2F%2FzCBjqkAaqEZmNX65pCpqEL5nEEJjqhpwx5saJdxCus050GE3VUbw1IjZsR1U%2BjSqZRQ0gTHHTV%2BlQL7ek7TCtcwXNQsVoNZyFjSS4fbBw5eobUQtk4hMPxTCvAEZEP6NQizNThe4GEuPstbeirfGB9eVkcICwGZ9Bo2%2FyFGj6VIiDKXO20cMdTo590LZEjhtodN4iKOSW6myn3tYrShFNIrvgHMChITkN%2B&X-Amz-Signature=b22eeb4a0f88d5bce379c3b5bd8978c3fd85e3c78d15b4f806a90e6db52a58e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
