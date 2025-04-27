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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE5UVJX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKN8y9YEFsyDjjwso4AQf7p8PZzOiJ6urrsnJ6ZM60AiA1%2BLkQvCQl3wFTjt25h954ZZ%2B50OowspvRGB1jQ2kKRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2skKUKd2zb4A%2BbPFKtwDYunXHMnXzZM%2FyKbm9W%2FkmnUWOG2vzFy2RduFkZC2WbjgOVAhi9w86A7sfDdU1KnMBUGDRVDosaiBYbx3fMUev7gWGT9NimXI8UOtetxgkOHIQth%2B%2FW%2ByVnvtmvSZK9%2BV0R4%2FbD0b7We4s8Fjrfl7dvP7%2BIh5X7%2BvXY14PaS%2Bv9D3nB6VG%2FYtDarCevgaO%2BpPFDqyU%2FFb4yfZft1Rr8IRGpdaXGIFay2Fo64SoFgSr%2Fx7losyYvBRBj6mEJA3rCYHOG%2FdQvaw%2FhxYc8%2BlihIxwekhYTy4cMORS7pBdojYFpeBOW5O5Ut6vvIEOl11l2NR5Z%2BsTEWPmsFaxjnXIU41SlgyXHC%2FiIcf5UFQ60NAZyv0f3MLh0Xpf3UIJN%2BZVQofI2d3Fc70I688FGS96rr43MIMf96lwqCN4M9YSqp6Mdrj9QrEmC0vF2V%2Bsa5l8DM2k24%2FzyN2Jw4%2BGGyiggfjqeFMWqPmkgLY%2BKnQL0%2BIwCblEXVqnLv%2BApx%2FQRWBMjBLY8URHEJyyhcmgxPkQQ%2BKJ%2F3nWpAAM%2BzXkNWRkPKn2BvCZeC%2BaB5AyJKJ0iSm5jrc6dZDQupb69uJmw7PL9pXkk9dz3XGdJ2DYMD8xeu3Xy5TTiU276sv49ee0BUwy7%2B1wAY6pgFebPNMhmZLbmPE8r9OGnpnyrHV7K4kMDvZoKNPs33z%2BuKalfsWboBfiKigQSuBoSEM61pkPu1eC2q4soXhlA3HCiAzFLEZ1jcdn1dEDWsnRIXf6Bi9sEnIbLoVJwWMbPlqwRW0ygQFDORrd%2BKFfMxhzXioo6z1Ayvyf7lSC8I%2B0gpo0cEPyXUXS4z%2BGF4iK%2BTSLxqEhOC0XVvvdYmoA7jpSTh2oWwN&X-Amz-Signature=132f5ea809af65f28de1b5b888c5603b411c0d6de6b5256c00802e0172be10e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE5UVJX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKN8y9YEFsyDjjwso4AQf7p8PZzOiJ6urrsnJ6ZM60AiA1%2BLkQvCQl3wFTjt25h954ZZ%2B50OowspvRGB1jQ2kKRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2skKUKd2zb4A%2BbPFKtwDYunXHMnXzZM%2FyKbm9W%2FkmnUWOG2vzFy2RduFkZC2WbjgOVAhi9w86A7sfDdU1KnMBUGDRVDosaiBYbx3fMUev7gWGT9NimXI8UOtetxgkOHIQth%2B%2FW%2ByVnvtmvSZK9%2BV0R4%2FbD0b7We4s8Fjrfl7dvP7%2BIh5X7%2BvXY14PaS%2Bv9D3nB6VG%2FYtDarCevgaO%2BpPFDqyU%2FFb4yfZft1Rr8IRGpdaXGIFay2Fo64SoFgSr%2Fx7losyYvBRBj6mEJA3rCYHOG%2FdQvaw%2FhxYc8%2BlihIxwekhYTy4cMORS7pBdojYFpeBOW5O5Ut6vvIEOl11l2NR5Z%2BsTEWPmsFaxjnXIU41SlgyXHC%2FiIcf5UFQ60NAZyv0f3MLh0Xpf3UIJN%2BZVQofI2d3Fc70I688FGS96rr43MIMf96lwqCN4M9YSqp6Mdrj9QrEmC0vF2V%2Bsa5l8DM2k24%2FzyN2Jw4%2BGGyiggfjqeFMWqPmkgLY%2BKnQL0%2BIwCblEXVqnLv%2BApx%2FQRWBMjBLY8URHEJyyhcmgxPkQQ%2BKJ%2F3nWpAAM%2BzXkNWRkPKn2BvCZeC%2BaB5AyJKJ0iSm5jrc6dZDQupb69uJmw7PL9pXkk9dz3XGdJ2DYMD8xeu3Xy5TTiU276sv49ee0BUwy7%2B1wAY6pgFebPNMhmZLbmPE8r9OGnpnyrHV7K4kMDvZoKNPs33z%2BuKalfsWboBfiKigQSuBoSEM61pkPu1eC2q4soXhlA3HCiAzFLEZ1jcdn1dEDWsnRIXf6Bi9sEnIbLoVJwWMbPlqwRW0ygQFDORrd%2BKFfMxhzXioo6z1Ayvyf7lSC8I%2B0gpo0cEPyXUXS4z%2BGF4iK%2BTSLxqEhOC0XVvvdYmoA7jpSTh2oWwN&X-Amz-Signature=9aa8eaee03d09f2498ccbe80c6c0447f6256cf873b3d3f52c8522d105234dc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5D5C6K%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq85BoeZqooTncCNEP5i9J54JQwiYvkF0mtJ7%2Bk6gozAiEA%2BJncxl3DDCLMXMy2kFSYoMvikLVWBRhvs1u4vEb0Xewq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNFroxwfiZYABXN6bircA1gGfeTQqADaFZ%2BogSISpXZEblAFPTJDmxKPYdtDfwj9eInZN3opHGMlrodtqve5ajy0O9AxH7iOH8%2FNg1c6x5ebuIk3dpGKZsGD6CEOKadXBy9UreS8aRktoVHuW1Pnr4XeIAygR4M25%2Fkf4BYpg%2BcIRHffnFDPH2WZqFf5VJ9wnMHK%2BniEAYs%2FQDSVYmPlCrQ3BAw6svqkf2rFdYFOIACXJYV9yGHf7bJlOrPf65XOAp9UDy0xNfsHNTlSKRKj%2FmO7MKLfteSsUHyHDx7zxop3T%2Blhp3QPPaN4tYMsST2vh2h3jf7o4rCi6nVRD9sVqERIZVmkd6q3GaCN0krA3wLZO0JEWJCYzg03pilkMRF1kIep1q1MFunmtydV9RpiznupRQrblQsTh76deY%2BJOtZi6eXmBsSS7xoZA%2B%2BVcyCp0emfWKzvVNZZbU9gxmbmdZjmXposgVdexYe5spNvtlXJX5IXrCA%2BU%2FcUGIfPf0TrydPosNEI7Sl2YaWETqVLfvJ8YnfztIBXdTQJDcX6uQjNI1Wmc%2B%2B574JhCWtVNBgL7ZniFWDDga7YuZF0aHXXhHWtBF7Nj7thw%2F1hJ8mIpMlNOm24Og9a5OCOJdj%2FYHzhsjYXJfOXDWP0%2FdhOMLm%2FtcAGOqUB6rOSsjn2wn9D34N56RPmWt61VBovGrZAPLFcduBh%2FBHHCuX6OAXrTQPeBSN6q8jabKW0hhEHignNg938tq00cTc5kk5ytcpPdZDhtap%2B4H9H5xcpyeOETW7DeWgbcXixQO3QM64vcxIRLmSySB1MqIe8zqBKb1Z59yiLnve7K2NVmiFL%2BAcoKZTm4Th5INAb1NAt0pFNXXgHIkC5JzeZzffHw9nP&X-Amz-Signature=8a2ad73765135b1466e0408fa20ca627f86cbfa447f1ac302e49b784d0450844&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZCXV7H%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNb0rJd3BIG%2B9IAbmH8VH%2F%2FNOl6yl6lwGGtvVNbIHMKQIhAJ1GHER51TReuTsvm4b8riCPxkAsMrWt1Av3Hcey0XtnKv8DCFAQABoMNjM3NDIzMTgzODA1IgyiA15BkV7CgIaZC%2FMq3AN2PHw%2BSy1ClrrXbHRjBbXXGTnYXXaN0TbGa3O4QhOd%2FYUJc%2F%2FTZZKfjIBCWePOWnMSaYLc9pcJt50Jqbod8v5dbQf1cMPKMxq0rblN5DPKmVkdhzutstoike7WHrqi9XM%2BpZEB%2FPVIG0ksE1fULwGpyGGWM4YvBZPsUhJsgAkq%2Ba%2BidPRhmaDdXooV%2BvnIgzkS0uFhMCnM%2BXnSx2IUpTpFyWLaR9DAWWoKtVhklCbwfnML4m3mVytv%2FMO2kG21ib36C7%2F3WqtR4p9sBnBdkfexWk5b%2BiIAibihZHHA8O1AOkxR1maAHl%2BhAQb8jE6JqZKwF3b2Jb9QT3DZvEOJgws1Xb2%2FyHJmHCE3JSswY0BhlGermqE0hUPadatdY5y0mDXBMt6P93PcH6w5LiPa0DKi8NRHPiknao73PnqI4pwPL4P9wki%2BU%2Fi9BKppj%2BZgsIa31mPjr1cs7UpivawxHOEMILumoXAb5fW%2F7CdU5vAaYhZFNI6BeOkVAGid8mmQ0771F9usLQPoLdJnkSeqrQ4WrNflpwO8nBEk9irWbhpp544qEPtOth%2FpWfSxNVrWc7g%2BkHonKLKSGdpKTsd7GWTpWfSKJifBw1IIkeuLAa%2BlIGSRXziz7KDfuQHMizCAwLXABjqkAfAFDmdmr%2FZEaxI%2BE%2FNRCk%2F%2BxRLkUtI%2Bk1iHfThQSncGqNWt1eCXxrdeQqBPrsefoVVpSxOd6GjxaNq41Iyziy9gyv3ZBo92VqUxb4HZU7fUmsOjEnriXInZf3QW6iEyrRhc%2B3JTt34wMSt%2FWQCf5BE13p%2Bilg7p0%2BlPBzN8I9P2ZmGb8mgKTAtv5ZIckZyNuFX%2FsyGn%2FyAx%2FaYQE%2F7anYpkmuey&X-Amz-Signature=b6a8f46ee1d573718699ba45f5f129940ccd9a37ccacb091682ae3e13079833d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE5UVJX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKN8y9YEFsyDjjwso4AQf7p8PZzOiJ6urrsnJ6ZM60AiA1%2BLkQvCQl3wFTjt25h954ZZ%2B50OowspvRGB1jQ2kKRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2skKUKd2zb4A%2BbPFKtwDYunXHMnXzZM%2FyKbm9W%2FkmnUWOG2vzFy2RduFkZC2WbjgOVAhi9w86A7sfDdU1KnMBUGDRVDosaiBYbx3fMUev7gWGT9NimXI8UOtetxgkOHIQth%2B%2FW%2ByVnvtmvSZK9%2BV0R4%2FbD0b7We4s8Fjrfl7dvP7%2BIh5X7%2BvXY14PaS%2Bv9D3nB6VG%2FYtDarCevgaO%2BpPFDqyU%2FFb4yfZft1Rr8IRGpdaXGIFay2Fo64SoFgSr%2Fx7losyYvBRBj6mEJA3rCYHOG%2FdQvaw%2FhxYc8%2BlihIxwekhYTy4cMORS7pBdojYFpeBOW5O5Ut6vvIEOl11l2NR5Z%2BsTEWPmsFaxjnXIU41SlgyXHC%2FiIcf5UFQ60NAZyv0f3MLh0Xpf3UIJN%2BZVQofI2d3Fc70I688FGS96rr43MIMf96lwqCN4M9YSqp6Mdrj9QrEmC0vF2V%2Bsa5l8DM2k24%2FzyN2Jw4%2BGGyiggfjqeFMWqPmkgLY%2BKnQL0%2BIwCblEXVqnLv%2BApx%2FQRWBMjBLY8URHEJyyhcmgxPkQQ%2BKJ%2F3nWpAAM%2BzXkNWRkPKn2BvCZeC%2BaB5AyJKJ0iSm5jrc6dZDQupb69uJmw7PL9pXkk9dz3XGdJ2DYMD8xeu3Xy5TTiU276sv49ee0BUwy7%2B1wAY6pgFebPNMhmZLbmPE8r9OGnpnyrHV7K4kMDvZoKNPs33z%2BuKalfsWboBfiKigQSuBoSEM61pkPu1eC2q4soXhlA3HCiAzFLEZ1jcdn1dEDWsnRIXf6Bi9sEnIbLoVJwWMbPlqwRW0ygQFDORrd%2BKFfMxhzXioo6z1Ayvyf7lSC8I%2B0gpo0cEPyXUXS4z%2BGF4iK%2BTSLxqEhOC0XVvvdYmoA7jpSTh2oWwN&X-Amz-Signature=532b023892aa6d91d7af3e926d0bbcc2e96f434f12be021e82a75a46267e1dde&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
