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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4OL5RI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcvVRcL8oIO8YSNfdd91%2BnIlQpAkqFdItZbUfNO81wvAiBzIezvV%2Fgo4KGmOA%2FrtMHLKEBdGLK9oOxZtsO%2BmDbpIir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIR20VPZIWQPCHhYBKtwDIXDHttgFHSHUPsRYcGYP%2BEAlQ4nS1olDPvgPl5UMKqAE2MMXWj2t%2FAtmNE55Gecop3NhB%2BuckUBrdCgdh%2BwA6iEzN4N5kV9UQsszq1cOnJQ%2F6gdWXpw90zzMzFV3FwfrwhL8vaeCXWsWl0CpmQtXldLbnrc%2FRZCKr%2FUiRfz%2BSGrQB8Vp7qIo8KD9OZrMkx0X1onjYrDPyFDQlpJSNoO2pYpW2ZCBMOm8i%2BNOvFDt3YqzbegjXc8G5u6ryviVpXvS%2Fc5v4gGGOrNU2w6kqHr4y3odpD%2B0Aik2ittMS1HZjwCQOMFaP19MA8lyggpquiv8OAybN%2FyhjZUCOr5f48YWzOVV8p58zcQgEcnanYOhYjcubGZOALmMBy8vYlhhRYeF2gdDiKJ0j9nWbGnhwDw2249lXm8XE3J4rOBkYKI%2F85lYgiiO0bXvgx7Rzu8ptLLvBQ5iELYxXcPaOyY6u4C1I6Gl7WNJI2iHjVIy%2F1SIYKPxsvlMBukwCLSfR8m7CHrLMUzkaRB622ieFLnV%2FNcUsh9hlap5VsUg5SyIG0EOy7H%2BYuATjqwoNAHph%2BEMtP2PTaLLB%2F%2F%2F2ojDe2ME603EIhCJB%2FLMgsYY5cftLcnvE%2Fn5VzUO2HXLsyflE5Uw0bfkwgY6pgEpPDIOXn7qQzXI5F%2F1wekUJvncf%2FkvfnYu150ePQKczNlWln2bEY1DcjHceJ8965ZppOgKio99T%2Bg0DHQWq%2B6cCy%2Bmg1RiX43wO2926c%2Bly32s7wR4DRZfSACuoT1ZPGI6P7bkqTACiMvVFd3omIn5WlRujrGnHAD886alSFccR%2BjdOSmjkBWLRaWc3ONKVPmjWFLTdNjdAToWVpIc5QPqKE%2B6KRD6&X-Amz-Signature=8d58eeef68718795f08786698fbf43ffdb7f15ac294510c25a6e1bfd11aa239f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4OL5RI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcvVRcL8oIO8YSNfdd91%2BnIlQpAkqFdItZbUfNO81wvAiBzIezvV%2Fgo4KGmOA%2FrtMHLKEBdGLK9oOxZtsO%2BmDbpIir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIR20VPZIWQPCHhYBKtwDIXDHttgFHSHUPsRYcGYP%2BEAlQ4nS1olDPvgPl5UMKqAE2MMXWj2t%2FAtmNE55Gecop3NhB%2BuckUBrdCgdh%2BwA6iEzN4N5kV9UQsszq1cOnJQ%2F6gdWXpw90zzMzFV3FwfrwhL8vaeCXWsWl0CpmQtXldLbnrc%2FRZCKr%2FUiRfz%2BSGrQB8Vp7qIo8KD9OZrMkx0X1onjYrDPyFDQlpJSNoO2pYpW2ZCBMOm8i%2BNOvFDt3YqzbegjXc8G5u6ryviVpXvS%2Fc5v4gGGOrNU2w6kqHr4y3odpD%2B0Aik2ittMS1HZjwCQOMFaP19MA8lyggpquiv8OAybN%2FyhjZUCOr5f48YWzOVV8p58zcQgEcnanYOhYjcubGZOALmMBy8vYlhhRYeF2gdDiKJ0j9nWbGnhwDw2249lXm8XE3J4rOBkYKI%2F85lYgiiO0bXvgx7Rzu8ptLLvBQ5iELYxXcPaOyY6u4C1I6Gl7WNJI2iHjVIy%2F1SIYKPxsvlMBukwCLSfR8m7CHrLMUzkaRB622ieFLnV%2FNcUsh9hlap5VsUg5SyIG0EOy7H%2BYuATjqwoNAHph%2BEMtP2PTaLLB%2F%2F%2F2ojDe2ME603EIhCJB%2FLMgsYY5cftLcnvE%2Fn5VzUO2HXLsyflE5Uw0bfkwgY6pgEpPDIOXn7qQzXI5F%2F1wekUJvncf%2FkvfnYu150ePQKczNlWln2bEY1DcjHceJ8965ZppOgKio99T%2Bg0DHQWq%2B6cCy%2Bmg1RiX43wO2926c%2Bly32s7wR4DRZfSACuoT1ZPGI6P7bkqTACiMvVFd3omIn5WlRujrGnHAD886alSFccR%2BjdOSmjkBWLRaWc3ONKVPmjWFLTdNjdAToWVpIc5QPqKE%2B6KRD6&X-Amz-Signature=5f8f01f16b69b941bc83ebd4ceff23cc885d62da48409b8a7d2b36a04952c553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4OL5RI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcvVRcL8oIO8YSNfdd91%2BnIlQpAkqFdItZbUfNO81wvAiBzIezvV%2Fgo4KGmOA%2FrtMHLKEBdGLK9oOxZtsO%2BmDbpIir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIR20VPZIWQPCHhYBKtwDIXDHttgFHSHUPsRYcGYP%2BEAlQ4nS1olDPvgPl5UMKqAE2MMXWj2t%2FAtmNE55Gecop3NhB%2BuckUBrdCgdh%2BwA6iEzN4N5kV9UQsszq1cOnJQ%2F6gdWXpw90zzMzFV3FwfrwhL8vaeCXWsWl0CpmQtXldLbnrc%2FRZCKr%2FUiRfz%2BSGrQB8Vp7qIo8KD9OZrMkx0X1onjYrDPyFDQlpJSNoO2pYpW2ZCBMOm8i%2BNOvFDt3YqzbegjXc8G5u6ryviVpXvS%2Fc5v4gGGOrNU2w6kqHr4y3odpD%2B0Aik2ittMS1HZjwCQOMFaP19MA8lyggpquiv8OAybN%2FyhjZUCOr5f48YWzOVV8p58zcQgEcnanYOhYjcubGZOALmMBy8vYlhhRYeF2gdDiKJ0j9nWbGnhwDw2249lXm8XE3J4rOBkYKI%2F85lYgiiO0bXvgx7Rzu8ptLLvBQ5iELYxXcPaOyY6u4C1I6Gl7WNJI2iHjVIy%2F1SIYKPxsvlMBukwCLSfR8m7CHrLMUzkaRB622ieFLnV%2FNcUsh9hlap5VsUg5SyIG0EOy7H%2BYuATjqwoNAHph%2BEMtP2PTaLLB%2F%2F%2F2ojDe2ME603EIhCJB%2FLMgsYY5cftLcnvE%2Fn5VzUO2HXLsyflE5Uw0bfkwgY6pgEpPDIOXn7qQzXI5F%2F1wekUJvncf%2FkvfnYu150ePQKczNlWln2bEY1DcjHceJ8965ZppOgKio99T%2Bg0DHQWq%2B6cCy%2Bmg1RiX43wO2926c%2Bly32s7wR4DRZfSACuoT1ZPGI6P7bkqTACiMvVFd3omIn5WlRujrGnHAD886alSFccR%2BjdOSmjkBWLRaWc3ONKVPmjWFLTdNjdAToWVpIc5QPqKE%2B6KRD6&X-Amz-Signature=58bdbb67260b9a22a93e0c1b5cc9264499b5fe72097d62684203b5c240025e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVAKWLWU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEb8obEGjN847ktwmPE6%2Bm18pl4ZV3ye5c%2BkwymCA9pxAiEA9uUXAwHaYfsu7iwGZ44ry11%2BoEMaSxxak8OV%2BOkaYY0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDApMuTpnmlwPYEav8yrcA3TjqmwN7vUEzNAOlu32m8clZJmTgaLD5mc8Cm8LVcyz8p1nrQYZ0UgWUVeWrsoOrhfJSkdTpcu5GM6Uoxmi6KgKJ4B3FZdGMP5u1TZjqMh7mb3WvHgwYb3MnH%2FaNVySG3F50PQ4wr%2FA%2FFRLv8UFFahWsRIVAVifZ8buAMqarB%2F7N9NzTNbQpCCQzvFR8tGqUjwti1NjoMqjVE4I%2BzsIAwlZfyclqz%2F8wZsg2GohkvtOJTvSLj4NfAjxyw1g1uAEJu62w2V48HSv%2BcOdNQh%2FGDXRP%2Bv7tRC5ildZT5IMSQ6mIgw1jM9ulLzQ2W%2B6WLvaIRB%2FCG7bOtl9v3IGP6wVztui8sUpYdoKh44kctm3uHN3%2FANZBpZaldyMCYKLtjI5kOuheswWzLED3L8V6NnLXj10CJCyGVGCUrcrhwfBvyWvQ2xGLlSRmihNdTnqs9zWhpltUGrHRwr655McgwfGUI4e3fB5vthm7aQfvH%2BihWOpkM6WmLaDiE%2FVTYWy0OZ6Km5vNm72cs3IvZ72om%2FybSMjhJSkusenWETrDJlvoSnCw3Sxj7%2FQFchi0iDBjamlvurnuiYi6ETbpW2b8eVxkLa1F%2FMDPr%2BAXMfM1SEi0Y81rVt7Ygy7%2BHZH4qo%2BMPCP5MIGOqUB27Xh8HWfJn3l4IABV2qGmUt4AXAt%2Bx5og36koKnUoI5KXLMA7KUZTYfUuNGmXCd61%2FUY4nJs3SXnDEo%2FawXePnlPY%2FMiIqA8a%2B1ZWXOibX2pT%2F6Y%2Fpxp7rv1VV8BLZ%2BrljD0PqHNRy3YbNAmEDJtKM6fAFFDE9mbzOm9NMKBQlFoWxIVfhATkS3zH%2BhiOaNTwwo4WeFNSWFX2s1hc9%2B39ZjgpREB&X-Amz-Signature=1ebdaaf3c80e031912082ff04e02c5641438a0ceae9f3bd530c262c5a44eb346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ77IL73%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIG7mhBooKRJBXM7kIyP9Y%2FIOF9rJ7kU88FzRAA6s4%2FTvAiEA5bTsJtX64nhudBS1X2oegRV9RqBDGJ0j1vXpaUjpnBIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDElyHIVS64P495H7lSrcA8qVqsF7mpJIuD%2BAp%2Bnl4NcTze3WvFsUpGXdx8GKkXGtroplLlAQANuOu15sQ1Zr%2FxH37F2X9o3MkTzb1a8ZXTM7I8F2NFCBmv7lnRHt0vR0DR13Bpmosz0%2FxkEzgkHRKZYLGJTLt8LNOS1Qu%2B4qTh8r21LOsyhQtO4h0lvpqLxhXABj%2BPeQ8aw5AYkpAVrgXafOzXc%2BfMH2S%2FCpbw072F4VcbBQFSAsC2dff%2FcA9%2B2y%2FyEEY5GnltNTX66cywq7e9qzAQfqTTVfpT%2BMNrvAhFc276IpdNPx9MU1w0HjqsIfgnpWK2H9gaPxQnm3VTjqMdktLFXLTD4nJpvhDcV9z3yNmIIAHtESlXxfplRypbNNMwvt%2BtSc1GcnLkYFROpVTvgxdTxssgM7ZC4GJ5LuX3Y0LBxBzZQFRwbU5%2FziSMdZxIgAON3U7cJbTqZiPumiBfazAA1sxiTT8bADq%2FADJpa9FHRSQE%2B8pXMZ1GAMErSYTljxpMAsk2tvAXeVETZFfNCSrDSwXUYGiua1DgEgiqVRX%2F9lKBtxOx%2FFgOddvnqSX6mLodTv8OwATb1UaoqPgv4Am65hsqPbN90XeL1kCzwcInFKr4IsHu3VjEDjxmgldxnAPuY6oiqg6LdJMLye5MIGOqUBpgzodxbmY1L80nSqckdjyaWl0PDrNszorHifW2mLDCrayE5%2Fj%2FwEVb2eulXNsFDDZsNucU775RjnuJ%2BxrgTkq4WBWoQEBr7GpwJi8WrIenXYbKeH7Cd86eG5NTUMS9F4iUI7BecB8fyVHdpsxBQ8zufiHCSSf%2F0%2BTMkmLx%2Byoz4yuRTdzkDUKjNmCnyJ%2BudOVdKx6XzPAKUMOaXm7OcA3RoIDakA&X-Amz-Signature=822b958faa300b2380d35bf5b72b00d68634eb7a5c4b6070aad629afb2ad9bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4OL5RI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHcvVRcL8oIO8YSNfdd91%2BnIlQpAkqFdItZbUfNO81wvAiBzIezvV%2Fgo4KGmOA%2FrtMHLKEBdGLK9oOxZtsO%2BmDbpIir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMIR20VPZIWQPCHhYBKtwDIXDHttgFHSHUPsRYcGYP%2BEAlQ4nS1olDPvgPl5UMKqAE2MMXWj2t%2FAtmNE55Gecop3NhB%2BuckUBrdCgdh%2BwA6iEzN4N5kV9UQsszq1cOnJQ%2F6gdWXpw90zzMzFV3FwfrwhL8vaeCXWsWl0CpmQtXldLbnrc%2FRZCKr%2FUiRfz%2BSGrQB8Vp7qIo8KD9OZrMkx0X1onjYrDPyFDQlpJSNoO2pYpW2ZCBMOm8i%2BNOvFDt3YqzbegjXc8G5u6ryviVpXvS%2Fc5v4gGGOrNU2w6kqHr4y3odpD%2B0Aik2ittMS1HZjwCQOMFaP19MA8lyggpquiv8OAybN%2FyhjZUCOr5f48YWzOVV8p58zcQgEcnanYOhYjcubGZOALmMBy8vYlhhRYeF2gdDiKJ0j9nWbGnhwDw2249lXm8XE3J4rOBkYKI%2F85lYgiiO0bXvgx7Rzu8ptLLvBQ5iELYxXcPaOyY6u4C1I6Gl7WNJI2iHjVIy%2F1SIYKPxsvlMBukwCLSfR8m7CHrLMUzkaRB622ieFLnV%2FNcUsh9hlap5VsUg5SyIG0EOy7H%2BYuATjqwoNAHph%2BEMtP2PTaLLB%2F%2F%2F2ojDe2ME603EIhCJB%2FLMgsYY5cftLcnvE%2Fn5VzUO2HXLsyflE5Uw0bfkwgY6pgEpPDIOXn7qQzXI5F%2F1wekUJvncf%2FkvfnYu150ePQKczNlWln2bEY1DcjHceJ8965ZppOgKio99T%2Bg0DHQWq%2B6cCy%2Bmg1RiX43wO2926c%2Bly32s7wR4DRZfSACuoT1ZPGI6P7bkqTACiMvVFd3omIn5WlRujrGnHAD886alSFccR%2BjdOSmjkBWLRaWc3ONKVPmjWFLTdNjdAToWVpIc5QPqKE%2B6KRD6&X-Amz-Signature=09a4989a003df11194d130d6f2a266eec6835106eb0e69d2b53bcd3d51d1e40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
