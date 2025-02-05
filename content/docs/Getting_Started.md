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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3TVZO3E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCX9mWQt1PO%2FdrPBwAsFYp%2BX40601POZLug6vcLN85IywIgP54bgmzsyBSDznM%2Ba5BGWg0jzGexmYRB2ETLG7xJ7EEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDB6JWsZF5XyM2MhBhCrcA7DkzPDcGMUNFdKcXkQQZ3%2BIGv%2FbdcI7FdBTwXk%2FsToyX42usLeRo2J54KP0VdRy8FdP9CGMrikdqsxrrLdAOBsiPWwCfYgiEJxKMpy36hHRVZ%2F%2FQN2MYImsFsst5ccgG8RjDoGwjKQ0aYNSxNwmYB4rWl3wi9W%2FK2oeLl%2BxlBsXsvnjk%2F8UPFzylq8FiFibqFH%2FJFCvicH5QrtUEVFS%2B79E9etYR9LbZXLi8YL8ISZ5jZCAfIEeEtBvsxi1ogcCPa1daj1SjdcVVkqEhuN0Vcjn6LudpbCgplZLY0AsO9cjOhkPmNIWjr8WbfUK%2BOt9n0HWJ1C1qik%2FonuI613q%2FjPlKGoWT%2Ff39rkJCQQqDgeNwwQyKtR6XL0Qs7FpCHpOzvcGQ8MMZgdWZYqKYqkf3QagjCAX8E42jP1rcJgMA2zZT%2FVjFMaFyXPIQaKxV%2FqqSOXpaAVwhPyvNBQTkKd%2FYbzuxQxvAVLLuzdisST6INv%2FkPF09fCCXDGaHspbY0p5iaTDQFT5WHnea1oNb0KN6LUEjcAlppLqXTLMGR8nfUL2h9HVRt1ad6DYDC0vSLERuUm7p9M%2BzPTUWMpKVTi4bX3Cw0rEW1n%2FcttdGH2sUpZmoRR5ocxiIjrw0DppMJy8jr0GOqUBtbrGg%2BS%2Bm0Fjz30RHJ693iNKuiRDvzeheokY0PWWYs5%2BN87DBTpnQQwB11KpZLx8Wb%2F20TJQbRWhXOUae6YGz3h1U0r2XmZoklvvMgg3x%2B%2BX91QUA1UsXFi219C1Ccrw70T%2FyyDhgHiHlhwuS6mWt%2BJ5WpXURlbfZzzvYKOeW42yY9iFiNJvIKpfXMz9GQpjBsrPR8wCdlRt9iWvJgjofxHjU3Dl&X-Amz-Signature=f48f728b04a0698c201128362e4d11c5cceebcf0a0cc2a63ed611cfa2d2c4117&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3TVZO3E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCX9mWQt1PO%2FdrPBwAsFYp%2BX40601POZLug6vcLN85IywIgP54bgmzsyBSDznM%2Ba5BGWg0jzGexmYRB2ETLG7xJ7EEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDB6JWsZF5XyM2MhBhCrcA7DkzPDcGMUNFdKcXkQQZ3%2BIGv%2FbdcI7FdBTwXk%2FsToyX42usLeRo2J54KP0VdRy8FdP9CGMrikdqsxrrLdAOBsiPWwCfYgiEJxKMpy36hHRVZ%2F%2FQN2MYImsFsst5ccgG8RjDoGwjKQ0aYNSxNwmYB4rWl3wi9W%2FK2oeLl%2BxlBsXsvnjk%2F8UPFzylq8FiFibqFH%2FJFCvicH5QrtUEVFS%2B79E9etYR9LbZXLi8YL8ISZ5jZCAfIEeEtBvsxi1ogcCPa1daj1SjdcVVkqEhuN0Vcjn6LudpbCgplZLY0AsO9cjOhkPmNIWjr8WbfUK%2BOt9n0HWJ1C1qik%2FonuI613q%2FjPlKGoWT%2Ff39rkJCQQqDgeNwwQyKtR6XL0Qs7FpCHpOzvcGQ8MMZgdWZYqKYqkf3QagjCAX8E42jP1rcJgMA2zZT%2FVjFMaFyXPIQaKxV%2FqqSOXpaAVwhPyvNBQTkKd%2FYbzuxQxvAVLLuzdisST6INv%2FkPF09fCCXDGaHspbY0p5iaTDQFT5WHnea1oNb0KN6LUEjcAlppLqXTLMGR8nfUL2h9HVRt1ad6DYDC0vSLERuUm7p9M%2BzPTUWMpKVTi4bX3Cw0rEW1n%2FcttdGH2sUpZmoRR5ocxiIjrw0DppMJy8jr0GOqUBtbrGg%2BS%2Bm0Fjz30RHJ693iNKuiRDvzeheokY0PWWYs5%2BN87DBTpnQQwB11KpZLx8Wb%2F20TJQbRWhXOUae6YGz3h1U0r2XmZoklvvMgg3x%2B%2BX91QUA1UsXFi219C1Ccrw70T%2FyyDhgHiHlhwuS6mWt%2BJ5WpXURlbfZzzvYKOeW42yY9iFiNJvIKpfXMz9GQpjBsrPR8wCdlRt9iWvJgjofxHjU3Dl&X-Amz-Signature=5cc771661ca53e0c51bde412e7bfe53dea9fbef921dc1ab4a62f803af573c5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UPAXCS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC67i6loJORAt2E2bux%2B81w3DEljs2ajVUo2bGQ5%2FR2HQIhAKYj5NeYCs7ghCZo76d9yQ7Ciy4FIEIW0U1fbWwPkPmuKv8DCEoQABoMNjM3NDIzMTgzODA1Igyab7nmQwuZQ6lUK0gq3AMWdPCTGbdZQZ2R67qzT%2F%2BfG36DNCIv%2BpVHMiJbmPY%2BkS%2FXAXmztD8bkJ36auvxkZF9gfEK8D4QetqpIetow6wlUmAOrQs5kGiP6%2F%2F%2BXXwoPtFfMh3F5P9zVESOhGKuZrK0RpUqaCRnuCZ4bIiF6nM2pobC%2F37jaDdVpIIrUsIHRdh4X8SPUbgxYycXcjdO08f6eLOXKXKL10pPfO0kgiWHfVZqftPRJFBsaV22UVnjFxyNpKKG7kSDeOu1ieDX6G%2FwqiQjc%2FPG9i0t96I9cwe6aCwMDP%2FtO3IYyCDmywzP2DWAgGbpb3yDEQvNFnzZQBWfV2rMZ9HQ%2BePJ5hYaHHeAMAsOCXEHk6HKjYpAr0lfpOrlAR94XmK7MbIr3Wa4k%2BGK5Njd%2B5pw2upyTxi6Vo5TW3c6RCywGo%2BwtJTHWKG2Yvgh6nScJppsKG2Q4stLHVQzToXFlEGzf3qHOFqOj0CifTB2HYch3vNN0aOJZjFL71eCHmpKq9uAYrpt%2B%2BK4pnvswJQFo%2F4mKPn4e0YGa%2FSSwziFWjAL4h4HiYjwTmiwoUSLtQWhqlX2NsH%2B1rrUgQ1V24E0YkLuV9gxQo%2F8Z9rOtc7l%2FpfBXZP8s88HcmtHw6f3vAMh30SJ3tz9IjC%2Fu469BjqkAVms4Lw8kJq0BI3okcspeI7xnAooEpxGhoeRnxGCkF2otyAJSKA80UYSon1hs1CESVE8cF1%2Bfy9fx6ThkiAwIqwEAYtZS%2BcOzAWDd%2BlE1UWVhZE0kUGTYLx%2BNXWzgdkM%2FN1w6P7l04fD55BgFqX1VRttppTFmDGq%2FR6KwF%2Bf%2Bo7MLSnJyot8FGw11jADKEAlw6k6A6KERD7w6aFfwEjIU7znUJsj&X-Amz-Signature=88d82e7eadd900b9cb33a74a4eb4730b07698ad0587e8e74e72f622f2df4fddd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWVGKL6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBTaFTkrMAtXOuXW4ro9t1Ai3BHvnImHiVLx%2BK77t1C0AiEAyExrDtpZcdE84fIlZPdgCKTMXSFO%2FshoLuX26iyxshEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKhdryZ3ZbvH%2BM1GVCrcAyBuFeQ3AcPu9eg1suz%2Fj%2BI58qGJ37W91coroqfuh5Ls%2FpXTF4n1zsBU2CB3sjuHq4UstLwWZR18ih80pNyNZ5qKHTiyDuX5N0Gy%2FAD24dn0WrGbfqMOGg1snS0TO7myFNlnUwep14D0heHZdN8uaBrLuWJf0jIz3Q9eshky0AqZepYjifotxk51EiriGUUqPPdXEIZkjGodpimUhJ0Czq2A1JIeTNbZjnj2RHxu49MTiDY1V2iO6cljv2Z%2BUWtuc7EKAWLshBd8N6PRg4PYYW%2F1rSCAIkv1vyZcKbrAJ5DpzJxCccgYa5ElPCcvEUIubSiBbQEnJ3Bw652MYTVrH0U9szaH4epMaHNcW3nDXF%2BG%2Fx7PEzU2aau%2F%2BBxrsLgKVPTZxC5lVUVBXOTy5RewzGeIT9vEkvBo5pjiSpmwm0ua28BPb%2BLmYyGnpLDSs2BqB8fWpjISw89h1n2RrdIeKvaQ%2B6IJmmwl5fYTqxIDX1NYz5ER0R3t93sxGBisLDJzJkTr44SlR7vFtV70XiNtElW7IFyCZP%2BkP6MrY3TTRD4QkxnTuQPpGbAdN63y2HXGe%2B91thFfpJy0V0idAnZ35pMSZzZg1CwbrWULOlBpR53yHT%2F8Flyij7UgFFlmMJu8jr0GOqUBlI04aP%2FHdW%2B%2Bc43JDMO5nFuh26VSk90WMmCp4tteeMLeHrd8YBnwHVP7jDWg4uKmDOn2WRhsbvqayeKA2iYrUkQyir6e3r3WcY2Evn1LwVagQM65WslI7hLGfF%2FrkmvFucrNGEUMYWbZOnZXBnJudG2CGM%2B7e4mA138wrnK2NrKKI0jHcfd5nHVbdV7DAybF%2BC9uWGwTTrHWzCYlfa%2BujmOtsaJi&X-Amz-Signature=c03acc9df80f6aecac97ac79c55188df6e9eb201c741137bb4e4a1f74c041bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3TVZO3E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCX9mWQt1PO%2FdrPBwAsFYp%2BX40601POZLug6vcLN85IywIgP54bgmzsyBSDznM%2Ba5BGWg0jzGexmYRB2ETLG7xJ7EEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDB6JWsZF5XyM2MhBhCrcA7DkzPDcGMUNFdKcXkQQZ3%2BIGv%2FbdcI7FdBTwXk%2FsToyX42usLeRo2J54KP0VdRy8FdP9CGMrikdqsxrrLdAOBsiPWwCfYgiEJxKMpy36hHRVZ%2F%2FQN2MYImsFsst5ccgG8RjDoGwjKQ0aYNSxNwmYB4rWl3wi9W%2FK2oeLl%2BxlBsXsvnjk%2F8UPFzylq8FiFibqFH%2FJFCvicH5QrtUEVFS%2B79E9etYR9LbZXLi8YL8ISZ5jZCAfIEeEtBvsxi1ogcCPa1daj1SjdcVVkqEhuN0Vcjn6LudpbCgplZLY0AsO9cjOhkPmNIWjr8WbfUK%2BOt9n0HWJ1C1qik%2FonuI613q%2FjPlKGoWT%2Ff39rkJCQQqDgeNwwQyKtR6XL0Qs7FpCHpOzvcGQ8MMZgdWZYqKYqkf3QagjCAX8E42jP1rcJgMA2zZT%2FVjFMaFyXPIQaKxV%2FqqSOXpaAVwhPyvNBQTkKd%2FYbzuxQxvAVLLuzdisST6INv%2FkPF09fCCXDGaHspbY0p5iaTDQFT5WHnea1oNb0KN6LUEjcAlppLqXTLMGR8nfUL2h9HVRt1ad6DYDC0vSLERuUm7p9M%2BzPTUWMpKVTi4bX3Cw0rEW1n%2FcttdGH2sUpZmoRR5ocxiIjrw0DppMJy8jr0GOqUBtbrGg%2BS%2Bm0Fjz30RHJ693iNKuiRDvzeheokY0PWWYs5%2BN87DBTpnQQwB11KpZLx8Wb%2F20TJQbRWhXOUae6YGz3h1U0r2XmZoklvvMgg3x%2B%2BX91QUA1UsXFi219C1Ccrw70T%2FyyDhgHiHlhwuS6mWt%2BJ5WpXURlbfZzzvYKOeW42yY9iFiNJvIKpfXMz9GQpjBsrPR8wCdlRt9iWvJgjofxHjU3Dl&X-Amz-Signature=63d953722468927220ad5ee2e8467cca4d0bfd88c86de5f96673e8c7cd1fd2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
