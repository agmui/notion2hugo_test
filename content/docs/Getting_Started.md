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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCV7LBYU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEY2htXoIN2EWWRi3%2Bp9fOU4vNL8ISC%2FmgvRkT3rlLikAiEA5meBRV8j4NJ3fN9geM%2FMOC5ZD3qlTGbW%2BYMswkCXK6Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNTEKfO3HGAPTyBRSCrcA7P3w9xKmq6tHNNKmCpTq3KSCe9R853N7D7%2BbkF0NsUDOakyNOP098LUItbhX0iFMRoi83cSi7XYiJZs4LuPMr1LgBATJG0vwS22GAy8p8J5P%2FV7FAMwGFuwfaPN0a%2B1Z9lcNDeTxe%2FtTOq8VqXeZ%2F34Y744s3VUZme6hhm5IZ0wqUpYsLZ0o6xcp1vXeQdTuw%2FJTh4YIY%2Fc84FOqye6FucvuwMGOhMQRrpPk7MYJ6XE51kOEmE2VB42hlSc6hSEEK7%2FzeT275AB2GgeFPeShFmsYOcEIurmzd%2FnaI3mQtLRaB7kf1lobstvwV8ulkn7bmiJA30TaPOFvk10nZs7%2FBM8h4uH93slW6xN4GrzVC5RM%2FxNTNjQ83oxkT8%2FsCd661xvOmeJjTSatwavHMHbJggBqLCK7drDdm9MIbsiOTu3qyFfw1Hf13x03F0473DqXV%2Fz2QTa%2BQ4jKfeXsjcSBv3aGXIfPIElh52S5YU949kBPRP9RCHZp%2Fwa67H1rO8IP10TbpKdhQ%2BtupakmoiBjbluSpat2xosTBGC1XQ5CGhtB7LEwu9yNVG2ffb3X8T9%2BpnIlzMJASbbrWGDIOa%2F1fbJU9JN4hK82Bxd0%2FLhaujl2Uzg5rhSjYJIcyxKMOv5zL0GOqUBYPbUsc08rq8NH67L3080Z7SNqyJ32%2Bpa8ceRMcu5qb4Yj%2Fd8fxwnr3lx62m3s%2FlHOpMpJhwoNFstCOrmlH8kc3xeh5Rh5nbbWZnLpCwdRQOLI%2FIQx7skXV0pEbOlGh%2BmjslHnxvEGvYobeaCHTtJagvhiHM2u60EAk%2B9NI6meTfljyEnDfhh28XDowqxfUg8uhG67CgNzmHFYdt8MoT2fTE1e9na&X-Amz-Signature=2ac7c19c06c10d413be7b0430b265f9952fce0fb9f2a75971ecf256935ff2b16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCV7LBYU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEY2htXoIN2EWWRi3%2Bp9fOU4vNL8ISC%2FmgvRkT3rlLikAiEA5meBRV8j4NJ3fN9geM%2FMOC5ZD3qlTGbW%2BYMswkCXK6Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNTEKfO3HGAPTyBRSCrcA7P3w9xKmq6tHNNKmCpTq3KSCe9R853N7D7%2BbkF0NsUDOakyNOP098LUItbhX0iFMRoi83cSi7XYiJZs4LuPMr1LgBATJG0vwS22GAy8p8J5P%2FV7FAMwGFuwfaPN0a%2B1Z9lcNDeTxe%2FtTOq8VqXeZ%2F34Y744s3VUZme6hhm5IZ0wqUpYsLZ0o6xcp1vXeQdTuw%2FJTh4YIY%2Fc84FOqye6FucvuwMGOhMQRrpPk7MYJ6XE51kOEmE2VB42hlSc6hSEEK7%2FzeT275AB2GgeFPeShFmsYOcEIurmzd%2FnaI3mQtLRaB7kf1lobstvwV8ulkn7bmiJA30TaPOFvk10nZs7%2FBM8h4uH93slW6xN4GrzVC5RM%2FxNTNjQ83oxkT8%2FsCd661xvOmeJjTSatwavHMHbJggBqLCK7drDdm9MIbsiOTu3qyFfw1Hf13x03F0473DqXV%2Fz2QTa%2BQ4jKfeXsjcSBv3aGXIfPIElh52S5YU949kBPRP9RCHZp%2Fwa67H1rO8IP10TbpKdhQ%2BtupakmoiBjbluSpat2xosTBGC1XQ5CGhtB7LEwu9yNVG2ffb3X8T9%2BpnIlzMJASbbrWGDIOa%2F1fbJU9JN4hK82Bxd0%2FLhaujl2Uzg5rhSjYJIcyxKMOv5zL0GOqUBYPbUsc08rq8NH67L3080Z7SNqyJ32%2Bpa8ceRMcu5qb4Yj%2Fd8fxwnr3lx62m3s%2FlHOpMpJhwoNFstCOrmlH8kc3xeh5Rh5nbbWZnLpCwdRQOLI%2FIQx7skXV0pEbOlGh%2BmjslHnxvEGvYobeaCHTtJagvhiHM2u60EAk%2B9NI6meTfljyEnDfhh28XDowqxfUg8uhG67CgNzmHFYdt8MoT2fTE1e9na&X-Amz-Signature=42622a3737b0f25801c1f339d9bbbb842d42c0d8713f2b4d85cd323438274884&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKTMCZV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC0CC456g8jyiC1HVngsxnVd7oHC2AETzLdzWBZZCYlMAIhAJjWvgQNXfTPZbXCze0sCwXh8XOP30uwZn8GL0c11pxfKv8DCHcQABoMNjM3NDIzMTgzODA1IgzXVSBb8koZ%2FB7ydNAq3APw1m75YsE1KlrAL%2FX3zas0T8Sxsi3ijnElQJMS3hLumHrt25J%2FPqWD7iqmV7DZdFfsTOuSTuvwdzNO79raD3MttWQ9wj1Lgma0c7JN0dDUfc26ETfxCItHjITEGX2SZdvXht8H2hu0hiBgXTUxrDrL1bSnOruerV6JAg581%2BaMkK1xGsVtlCakzKDNYREYfla23G7GQhfvOct%2BzVBsle1lXy%2B1Rn9z5k9J6itrOh3VIqOGEA0gHwSKMDfpk5AvMaVZiJr6ZIUK6isX7HJPbs%2B5ouYtMpGzwLgigl%2FMMEKIo8nWmaJ4WG4xMdLRgERZ0lMX7y99tQBeUtSt96G1LjoQRpOoxyUYAjdq%2FwbP1YOV4fa44FWYidUE0vKzCAfDLt%2Fw446NC%2Bl9DuuitPolOkTVrsfjt%2BksM5IHipEYoZdF8LHzY72mCAOLZRB9bl8FAQ1VFSKIYWmNVMlaMsbeZHnAOPdNmSmh8pctW0LNuOM7RrS3DV%2B2IYvd7OdTZ6rIe4XoOmV87iwECJrAKv8gkC2mPm%2F2WuUHTv%2B%2FrfcK29hruPmDFgUpz9E%2F6oojgKBkOtdASLXi206UGtwabWpyk6DYmwUZzWHMums9BNh3aqUsDWWXX1beEyyc1YFn5jDp%2Bcy9BjqkAXlUiXlbWwdZi25WZkWf%2FHaFgaFAP8cxWOBNvkKVcdTIcCsB82ahj7%2FuSaBzo8IiDNAWVIMLGurUaz5vVC055lIpmD%2FOqYJuVvnFrZ0LQohMlYVbOE%2Fom9QxjDEAcTu2Mx35tbHo9O1JN5RO%2FV4ZfFvbUJzu0i6mzNdB2ZP5v5FBCGQ1HUOuU8%2B4khfSfTgWJacFAyw7EtwNyDYMYVrsCMUPubGv&X-Amz-Signature=81c3b4815bdd898e9cdd1d836b501d972f27e39e88110f892b3b84903e520117&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKYP22Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCDTytaKk3xh3MZhEN84%2BqE0loisbvj7R1MTVGOeG0uHAIhAOjuSaigVm0j0o2T3vzbTwEx9kIzqm02iBMYnL%2FzQtbhKv8DCHcQABoMNjM3NDIzMTgzODA1Igwh5uaqZm9mbfxtUSIq3AM4%2FlYOXzCVeDYuGZ0jMdoQnjQzPpK%2BL2cu4KEo29%2FmNAJgkdjeOPH1dA2KyOqaKMgFRIDJAR%2FefRXBoikWtqouqxW7hKvCkx%2BkhAec7OsgQytP4QxeFeNJlsjHll4lP27oABWB5j4aeCEiGSQn7YoNcJ7svokTHXSYSF2T9wBoPQJiwR6LOsFa07ubjBMk127odQ6bzx69YBl4201Vt6Ld%2FRijwg35lLVVmZdPcsqstWfvgFDFvzWM5Z9sUMq78XrirnlPfkB8f%2FtckNkp9TEP38ji5%2Bj9cmpTn4z3dpRqMISHdCC6%2BuR8TbW54k8RBhDlG4uwpxZDfra0uzvW9zLWGybYnqlfql7Ag5vsCzAhYMDR%2BiupTBIjm5QQO152innIs8UosyhEbnnQdVWFsLwb4ImfiMlJWjPZG0fpW7lGrthIb3B0nsuXwIbvFpcQdwkF5%2B6I0FY4SgY29dVqvmlOt6D7d650ds%2FhC%2FFcu08YEj0WKj%2BdBAjfd%2FCYy54XJID0MC9YNkXWomBJ2KiW%2F8ulfpDQPi3a54bk0GkMo1eKWuaAxXoxt%2FWXfISGFaAiiY78KfUqmo4bK%2Fa0YQij%2BdWCG4hJb8TN1BCXTR8YMQA8ogfg3OJxOACM%2BRCcqTDU%2Bcy9BjqkARLPjeBhrM7qpuHInj9tdcxPFhqAXxza0f0e6SKGf3PoASX85SEM1NyuWZ0dB7WywZEvsjDxuswCfEVWI4WyeYM4oq9b1OPpDu2Ht6%2By%2FiJxShUeEcVAS5HOUMivEjayxWiAjJf0WOS%2BdkJwVzolTyCoDvnX9kGoUmWYWa%2Bgofcwl%2FtHLFnt9MSFuvQSTeTkJAqgHnRkWjXl7zLhVh5t0MuJ%2F04V&X-Amz-Signature=9117691234ad336d980a36a67e12368c0d5d8cfb38a39f7d3166e68b59dd799c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCV7LBYU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEY2htXoIN2EWWRi3%2Bp9fOU4vNL8ISC%2FmgvRkT3rlLikAiEA5meBRV8j4NJ3fN9geM%2FMOC5ZD3qlTGbW%2BYMswkCXK6Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNTEKfO3HGAPTyBRSCrcA7P3w9xKmq6tHNNKmCpTq3KSCe9R853N7D7%2BbkF0NsUDOakyNOP098LUItbhX0iFMRoi83cSi7XYiJZs4LuPMr1LgBATJG0vwS22GAy8p8J5P%2FV7FAMwGFuwfaPN0a%2B1Z9lcNDeTxe%2FtTOq8VqXeZ%2F34Y744s3VUZme6hhm5IZ0wqUpYsLZ0o6xcp1vXeQdTuw%2FJTh4YIY%2Fc84FOqye6FucvuwMGOhMQRrpPk7MYJ6XE51kOEmE2VB42hlSc6hSEEK7%2FzeT275AB2GgeFPeShFmsYOcEIurmzd%2FnaI3mQtLRaB7kf1lobstvwV8ulkn7bmiJA30TaPOFvk10nZs7%2FBM8h4uH93slW6xN4GrzVC5RM%2FxNTNjQ83oxkT8%2FsCd661xvOmeJjTSatwavHMHbJggBqLCK7drDdm9MIbsiOTu3qyFfw1Hf13x03F0473DqXV%2Fz2QTa%2BQ4jKfeXsjcSBv3aGXIfPIElh52S5YU949kBPRP9RCHZp%2Fwa67H1rO8IP10TbpKdhQ%2BtupakmoiBjbluSpat2xosTBGC1XQ5CGhtB7LEwu9yNVG2ffb3X8T9%2BpnIlzMJASbbrWGDIOa%2F1fbJU9JN4hK82Bxd0%2FLhaujl2Uzg5rhSjYJIcyxKMOv5zL0GOqUBYPbUsc08rq8NH67L3080Z7SNqyJ32%2Bpa8ceRMcu5qb4Yj%2Fd8fxwnr3lx62m3s%2FlHOpMpJhwoNFstCOrmlH8kc3xeh5Rh5nbbWZnLpCwdRQOLI%2FIQx7skXV0pEbOlGh%2BmjslHnxvEGvYobeaCHTtJagvhiHM2u60EAk%2B9NI6meTfljyEnDfhh28XDowqxfUg8uhG67CgNzmHFYdt8MoT2fTE1e9na&X-Amz-Signature=cb7b8cd4e4b3826c7ee994697e32bad139784b818526341b4f4017c4671c7c96&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
