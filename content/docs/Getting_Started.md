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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEABX5R3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJZJpQ%2BOi8FdG4cy2JTJv0QFw7NqPlJDh4FAWl9eySPwIhAL%2B8XazgL0RfqOv4rJbulPW5oHMJazh%2Fnr%2FWorUecP9jKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyteZ930Nh9SxbSuBoq3AN4Ibu1ZeGpehzxlvMQUFE%2BJmM47%2F%2Fws%2FaxgEKo8rlKGwVTLJQA6MQS7mAGHsPpkjQMg9f2CX6ryy83bChXhJrDDkxMiQ064aW16kNMsAjlcWY5SuZhnEwjOkN581eZXPJpfsLUK%2BTj7qAuzXeahtxEwngHcwSNWzymvCAoHnAJwxuWPZqUXn2w8uICMMYZb0gQ0SOhSAl4F4bSBo0wkXaiKIb9dV2v8auzfkF%2BVmmhN55IKkep3Xyspc0Q4cQ9CAAsc8zrNbBjM1FkeZWVghd4RjOhy9mYGpPmj0i0tzCNdBpdFI5954r5Dx6NkDwVk3Hl0Ut0gF1eR%2BwcLs5SYlu3XaM9DL9DcrpMOvq8jJWMDQLTU7iI2ytScjWO6ITSLCeEpQD6KZ1vRaYPyRyihIJhTrm9Hf8pFe7xrHbO6An1XOXnunTNzWlXBV0Xc6yFxPN%2B%2B6rtI%2BMBJgpAzCp31G16Dlpx65yk4cD1w6aOJ4Xndd9z92AhAKcJF9sYhbDePMVbLl2oiRjS%2FJxIGUQJW0a%2BIVa%2B3YJv8KmdPONsqu8olwsUWeGHABwpnpBWHuZkwd9kMtcXwyut3sbTb5YU%2BoraF7eCzz6MY98z2uDgOe35OGbOpaczP5XJmSzK9TDJ2pXABjqkAcKaCgExM2%2BLfkjaTImXIBTb5dM2Zo9ROpRbankpAvfzmsQxRm30%2FqRrjFD13hUa6b9Qx3eqYZkvjGGg1FXITAo9gHKUcGPlzVMrGnbzFViFBo3zfzHVS33n15p9Uat8rCTClRD5ynffpCC96LGEQV2DTFiG%2BTwsU8UPOo1coYSRBmSlI%2Bbf8fRP7zCmGfo7h5kqaQu5323%2Bd8v%2FzCn16pnOH0oI&X-Amz-Signature=3282403fb3f2ec62a420164620ddca881c2efcacd70f4ee2b3199c1ec6eba705&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEABX5R3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJZJpQ%2BOi8FdG4cy2JTJv0QFw7NqPlJDh4FAWl9eySPwIhAL%2B8XazgL0RfqOv4rJbulPW5oHMJazh%2Fnr%2FWorUecP9jKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyteZ930Nh9SxbSuBoq3AN4Ibu1ZeGpehzxlvMQUFE%2BJmM47%2F%2Fws%2FaxgEKo8rlKGwVTLJQA6MQS7mAGHsPpkjQMg9f2CX6ryy83bChXhJrDDkxMiQ064aW16kNMsAjlcWY5SuZhnEwjOkN581eZXPJpfsLUK%2BTj7qAuzXeahtxEwngHcwSNWzymvCAoHnAJwxuWPZqUXn2w8uICMMYZb0gQ0SOhSAl4F4bSBo0wkXaiKIb9dV2v8auzfkF%2BVmmhN55IKkep3Xyspc0Q4cQ9CAAsc8zrNbBjM1FkeZWVghd4RjOhy9mYGpPmj0i0tzCNdBpdFI5954r5Dx6NkDwVk3Hl0Ut0gF1eR%2BwcLs5SYlu3XaM9DL9DcrpMOvq8jJWMDQLTU7iI2ytScjWO6ITSLCeEpQD6KZ1vRaYPyRyihIJhTrm9Hf8pFe7xrHbO6An1XOXnunTNzWlXBV0Xc6yFxPN%2B%2B6rtI%2BMBJgpAzCp31G16Dlpx65yk4cD1w6aOJ4Xndd9z92AhAKcJF9sYhbDePMVbLl2oiRjS%2FJxIGUQJW0a%2BIVa%2B3YJv8KmdPONsqu8olwsUWeGHABwpnpBWHuZkwd9kMtcXwyut3sbTb5YU%2BoraF7eCzz6MY98z2uDgOe35OGbOpaczP5XJmSzK9TDJ2pXABjqkAcKaCgExM2%2BLfkjaTImXIBTb5dM2Zo9ROpRbankpAvfzmsQxRm30%2FqRrjFD13hUa6b9Qx3eqYZkvjGGg1FXITAo9gHKUcGPlzVMrGnbzFViFBo3zfzHVS33n15p9Uat8rCTClRD5ynffpCC96LGEQV2DTFiG%2BTwsU8UPOo1coYSRBmSlI%2Bbf8fRP7zCmGfo7h5kqaQu5323%2Bd8v%2FzCn16pnOH0oI&X-Amz-Signature=dc782f675da8a5eb5254fa1e3976d17e78d75fc45987ba84b4c85d11551bf039&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXR3POFK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHYGAT6QETEz6LzWCiW290PqkD1jVO5873AK07SDqMTkAiEAo8v15Yw%2FyhY%2BF7ayQFmuGPSsupIKtPCpsuT56YV5xAIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpcGAmOYGbdHu1%2BnSrcAx7iCSjwutr6Kh6GWcmxzEJj9s8rWLoSranuyWP3qAC5%2BIE82KLpUCAwDGbI03sTiAD62FJVkDMNCs3cEdEtQwbSCXI7ftYC6vXylHs9PyapgAAeagBDkV1yXTU2Ud6Bt5DQrGnhCxXf5DHR5HXcYB8iz5B0DUhMDmuBVhGB7mCGmQBb5SC4ldq9tUY17iBgkwXlTSiRfnV7VJ5iFGVMK3vN%2FamheVidJPew3Hll4rB17m1DklCi9EKvXuoDrncjyEyCZRSBQGpCjO9yAJBIHjnKqSjChQhSc7Ipa%2FvG%2FbDOzr1ugD5ubyDbmro8Ebp22shWXDPUxUDubBXByXmQMaJkMZaq2xGwKc5D4X2f42YCRR5kSBMYcV%2FNUzQXM8JnmSajECDN6d0Di5OCGr1ebgDyj989tuAwLn2BD9GdMMTUdQZTIcPIL5t4FAZb0VsU27ClnMoGf7CsaKIrdfcyQ%2Bh53RStcBRKeDGnQexm54IKgT419sghy14Q4xnJyJbH8WwG29zUOPTNv5uDWuA8e7ahPtJ6X5XSsg%2F8ZxfRcbhOvEKQgfPEvDMyuNfA9TYtnm3hLcEaFuJ%2FnaC%2FmZJA6JC6t%2F5enrMMkxgX3YIwPRlazZoaPvWoeOhmt%2FFbMIDblcAGOqUBTMLW6tRfBAFkhB4SvSbKbemdmmEezLbcTc0hn75ZTKolf9TTbtRPLGuqu4%2FB6xw6SXGoOD6wy1nDpbyVjQf7gd0x63G7rSkFYocyHWlFQ200qhymQlo3nrt4pAUEc3d9elJ7%2Fid3ufLnobZVwEZOik4IVR75aGSMzCDM7Up%2BILtkFmEHcEb1hus%2B57AZVedy3aKfczs2ZWJhhEfCBwoLff%2FHX5Mb&X-Amz-Signature=fe3113378f98d91b07a0ef2d704e9deec1389a71532be451d4fac451e0e9f0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBPMFNY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIC7EcF10pW4Nch6kNSCA0XbXAJFtkwZg7FR7%2Fgy4HESNAiArxoELvxCBpSj899tOlBt13Y6EVU3aPSXWXEworD3gIyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM443kyEfMF9zGV%2B8qKtwD8z2iN4p4de3x79p6BO5%2BiUgPTywV44tecWCETdClhPllrUNDju0cJA7mN%2BVTYnXsY3vtvWcUFc5qil7D%2FAqDlg3i3nlhqblKFmHvm%2B3MZEMdo1xAQG6kANoM1NnG9%2F%2B7ld3sn4mnFAPd6hhBu0DLCwd5qdFdycxmX5GwJC10EzZBedePHKHfsYq9jso7y6zaR6LEsqM3H1d3JJijn7bPauQBG7rjefB4zS4s2sO4HW6R7qtp86oOsSP7DhyX4UAGBjkjFALCBZjR%2BKUh7sBQYf1WD1zDeus5kO0inVi6fB5lFojXa1PqEFPrAkbv52X4AaIb7LhzGv9ZJCzPYY7O71mGuJIUoo1iv3jNt%2F5hM14STF4%2BGDw%2Fw6tOB9SIyPWXNlbCv1WxnS1J5halI1nA8x5xJyu8VK4ydqa4vCJgdCf%2FvUL3r9Hs0HxeekGLImOyUpzCo5uTPnp0v23J0tz8f72IpKGL%2FuS6hbPnVrJiBenCiwnMAMthFKDnVCsHlGw8U9a7KtQI6QuSLAp4FUCWI8m9a2yK0KCQ14YWTliIWNfGV6Pl7KgYMtgGmLf4wFEIC2PpPXz4hJ%2BuwivzNzJ91FYBL05IfStgLLnXhvZTycE5xiV9%2BSupLv%2BO%2BLgwz9uVwAY6pgEocbWBqHFb3V8KvyWLbIFvZv23UYIskIlbd%2Fp9w7W%2FLVjsKosyruZ8TV2XiTAdLTiTsaLtAjystxEKZDmlAXWOTpFYArHn%2B488U6JW%2BEQrr6xbpWNb5HP%2FEzLDPmkjeEXDhq7vb9v6yUszcnu%2Bk6P08%2Bxb7hmdqzRotMEUJZ4xCa5ewjg%2FNJqLJFdFFqeq2xxbW72E1O9O9ZcT%2B7qn0kNN4P9XXLHn&X-Amz-Signature=136eb3e398a2b50edfbff5ad75efccd0f45595b8f72e4aff8fd9396a2d096f13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEABX5R3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJZJpQ%2BOi8FdG4cy2JTJv0QFw7NqPlJDh4FAWl9eySPwIhAL%2B8XazgL0RfqOv4rJbulPW5oHMJazh%2Fnr%2FWorUecP9jKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyteZ930Nh9SxbSuBoq3AN4Ibu1ZeGpehzxlvMQUFE%2BJmM47%2F%2Fws%2FaxgEKo8rlKGwVTLJQA6MQS7mAGHsPpkjQMg9f2CX6ryy83bChXhJrDDkxMiQ064aW16kNMsAjlcWY5SuZhnEwjOkN581eZXPJpfsLUK%2BTj7qAuzXeahtxEwngHcwSNWzymvCAoHnAJwxuWPZqUXn2w8uICMMYZb0gQ0SOhSAl4F4bSBo0wkXaiKIb9dV2v8auzfkF%2BVmmhN55IKkep3Xyspc0Q4cQ9CAAsc8zrNbBjM1FkeZWVghd4RjOhy9mYGpPmj0i0tzCNdBpdFI5954r5Dx6NkDwVk3Hl0Ut0gF1eR%2BwcLs5SYlu3XaM9DL9DcrpMOvq8jJWMDQLTU7iI2ytScjWO6ITSLCeEpQD6KZ1vRaYPyRyihIJhTrm9Hf8pFe7xrHbO6An1XOXnunTNzWlXBV0Xc6yFxPN%2B%2B6rtI%2BMBJgpAzCp31G16Dlpx65yk4cD1w6aOJ4Xndd9z92AhAKcJF9sYhbDePMVbLl2oiRjS%2FJxIGUQJW0a%2BIVa%2B3YJv8KmdPONsqu8olwsUWeGHABwpnpBWHuZkwd9kMtcXwyut3sbTb5YU%2BoraF7eCzz6MY98z2uDgOe35OGbOpaczP5XJmSzK9TDJ2pXABjqkAcKaCgExM2%2BLfkjaTImXIBTb5dM2Zo9ROpRbankpAvfzmsQxRm30%2FqRrjFD13hUa6b9Qx3eqYZkvjGGg1FXITAo9gHKUcGPlzVMrGnbzFViFBo3zfzHVS33n15p9Uat8rCTClRD5ynffpCC96LGEQV2DTFiG%2BTwsU8UPOo1coYSRBmSlI%2Bbf8fRP7zCmGfo7h5kqaQu5323%2Bd8v%2FzCn16pnOH0oI&X-Amz-Signature=b99ac9d8d54fcc26cf8103f125beea7ead32c032626a792ad0f05986a6b84f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
