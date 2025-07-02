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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAX4KFZF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNrVzr1j9%2BnLwYpEmndpfZUuU7Zj7w5IABq4kiagJQ%2BwIgAzm2Q%2FeXPNWxvRg7cqUe2VO9MWmY%2FXsewC%2FdIBgTiIYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2LfP7r5hVcFiNFKCrcA3Zosxcn%2F5MFf%2FA7iVVJiByg1QKvZmn%2BYM3f2adwis5x6Heb6kp9vSekB4sbczoEIypprIGCUeXPUgLEBTVheOPETtLFWInhS2H5ZSrvf0%2BLwrfxc7GZlt5nHK7YCfxucaobqVIRaFHJfazWk%2FL6L8JuG2YctE1jIBFbYJglDI75KZKX%2Fz136B2X5gKyIZ709rvj1e9GGeQZFwQuUFuH1VsUd%2B5NFbagerqBSj%2BqUqF%2B8bfr9NljhL3ORtiz0QZORUdXw%2B2ik3%2Fs6NEuD2m9JcWjn%2BPrVH4IA3NJdfNtQosh1hkjgo55wgmWWv51mk53h9vtZF1suM8QiXGdEwsXgcSF%2FXhQ%2F6FF4X6cI3LJ9BdHo7AGOVAdMpnviHxtbk8%2FCc5RMqquS8p5AVn93MI0vUiJQ6iRo%2B6gyWDTKFrg%2F%2B2VOdPNX0UM7WfGxglrF3rhSD96aoU5Pk2datq00tsiRo70jl3TTa8ztMOAwplUbBJjhTasIf2VbVTiGQslpsJ3Vno%2F4c1cUiIEDvK4T5Fc5FH1uY0z9dDZJqyWkmraDa38gw9dPiz%2BjCiQHkNk7Yj%2BCn1Z1sPi95g5XKqdzdOiVjB3TlpCY2C8FbvyTh8wy90JQERFnMcx4I7oLSVJMPSTlMMGOqUBfuMxgr6vtdsy%2BoXSc238KvmUokSgUbuZJeER0mfC8RTR1%2BT1qQ59eBJBGmxSm7%2FATsKmiJxBSJyOz4PvW9hvqrOGegag1CmxGXRZGciCbpJwuSdVQVDGaOaqCU7n%2BeQEw0y9hx%2BcktsOEb8RAay7wDz2J4chl%2Ff6N4fm7JNv%2ByK4w2bqZx0oRdA1K%2Bxr4MopbZaKOg5h5YW6VmlLqGvoL27CrjRy&X-Amz-Signature=3f1412986bb1b5a30cb5736eb61bad7c9a9889f25403eaf0161036534c04d994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAX4KFZF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNrVzr1j9%2BnLwYpEmndpfZUuU7Zj7w5IABq4kiagJQ%2BwIgAzm2Q%2FeXPNWxvRg7cqUe2VO9MWmY%2FXsewC%2FdIBgTiIYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2LfP7r5hVcFiNFKCrcA3Zosxcn%2F5MFf%2FA7iVVJiByg1QKvZmn%2BYM3f2adwis5x6Heb6kp9vSekB4sbczoEIypprIGCUeXPUgLEBTVheOPETtLFWInhS2H5ZSrvf0%2BLwrfxc7GZlt5nHK7YCfxucaobqVIRaFHJfazWk%2FL6L8JuG2YctE1jIBFbYJglDI75KZKX%2Fz136B2X5gKyIZ709rvj1e9GGeQZFwQuUFuH1VsUd%2B5NFbagerqBSj%2BqUqF%2B8bfr9NljhL3ORtiz0QZORUdXw%2B2ik3%2Fs6NEuD2m9JcWjn%2BPrVH4IA3NJdfNtQosh1hkjgo55wgmWWv51mk53h9vtZF1suM8QiXGdEwsXgcSF%2FXhQ%2F6FF4X6cI3LJ9BdHo7AGOVAdMpnviHxtbk8%2FCc5RMqquS8p5AVn93MI0vUiJQ6iRo%2B6gyWDTKFrg%2F%2B2VOdPNX0UM7WfGxglrF3rhSD96aoU5Pk2datq00tsiRo70jl3TTa8ztMOAwplUbBJjhTasIf2VbVTiGQslpsJ3Vno%2F4c1cUiIEDvK4T5Fc5FH1uY0z9dDZJqyWkmraDa38gw9dPiz%2BjCiQHkNk7Yj%2BCn1Z1sPi95g5XKqdzdOiVjB3TlpCY2C8FbvyTh8wy90JQERFnMcx4I7oLSVJMPSTlMMGOqUBfuMxgr6vtdsy%2BoXSc238KvmUokSgUbuZJeER0mfC8RTR1%2BT1qQ59eBJBGmxSm7%2FATsKmiJxBSJyOz4PvW9hvqrOGegag1CmxGXRZGciCbpJwuSdVQVDGaOaqCU7n%2BeQEw0y9hx%2BcktsOEb8RAay7wDz2J4chl%2Ff6N4fm7JNv%2ByK4w2bqZx0oRdA1K%2Bxr4MopbZaKOg5h5YW6VmlLqGvoL27CrjRy&X-Amz-Signature=a4ca446c8cb84a5b6697f83b3ef7770ad09fa7cc78a1ab3a013adb8b9edac8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAX4KFZF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNrVzr1j9%2BnLwYpEmndpfZUuU7Zj7w5IABq4kiagJQ%2BwIgAzm2Q%2FeXPNWxvRg7cqUe2VO9MWmY%2FXsewC%2FdIBgTiIYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2LfP7r5hVcFiNFKCrcA3Zosxcn%2F5MFf%2FA7iVVJiByg1QKvZmn%2BYM3f2adwis5x6Heb6kp9vSekB4sbczoEIypprIGCUeXPUgLEBTVheOPETtLFWInhS2H5ZSrvf0%2BLwrfxc7GZlt5nHK7YCfxucaobqVIRaFHJfazWk%2FL6L8JuG2YctE1jIBFbYJglDI75KZKX%2Fz136B2X5gKyIZ709rvj1e9GGeQZFwQuUFuH1VsUd%2B5NFbagerqBSj%2BqUqF%2B8bfr9NljhL3ORtiz0QZORUdXw%2B2ik3%2Fs6NEuD2m9JcWjn%2BPrVH4IA3NJdfNtQosh1hkjgo55wgmWWv51mk53h9vtZF1suM8QiXGdEwsXgcSF%2FXhQ%2F6FF4X6cI3LJ9BdHo7AGOVAdMpnviHxtbk8%2FCc5RMqquS8p5AVn93MI0vUiJQ6iRo%2B6gyWDTKFrg%2F%2B2VOdPNX0UM7WfGxglrF3rhSD96aoU5Pk2datq00tsiRo70jl3TTa8ztMOAwplUbBJjhTasIf2VbVTiGQslpsJ3Vno%2F4c1cUiIEDvK4T5Fc5FH1uY0z9dDZJqyWkmraDa38gw9dPiz%2BjCiQHkNk7Yj%2BCn1Z1sPi95g5XKqdzdOiVjB3TlpCY2C8FbvyTh8wy90JQERFnMcx4I7oLSVJMPSTlMMGOqUBfuMxgr6vtdsy%2BoXSc238KvmUokSgUbuZJeER0mfC8RTR1%2BT1qQ59eBJBGmxSm7%2FATsKmiJxBSJyOz4PvW9hvqrOGegag1CmxGXRZGciCbpJwuSdVQVDGaOaqCU7n%2BeQEw0y9hx%2BcktsOEb8RAay7wDz2J4chl%2Ff6N4fm7JNv%2ByK4w2bqZx0oRdA1K%2Bxr4MopbZaKOg5h5YW6VmlLqGvoL27CrjRy&X-Amz-Signature=2f2906061e0ccd3afe431c2a00f81723e67ebfda72422083277a4d18f4ae9fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJQG4PU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxAFW2MlgQS%2FmZBGPrEAXJftQnG3SFiVfWGE0wULjzUwIgFB%2BoCm4%2B5wqLzVX62Hz56F9PSMDrU%2Fc0Wt%2FjTLMW3EIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEC6JRzeBfiFbuQYSrcA4QzaShvKvolL9ct8QZgCtAt7qA9D8PV4CLfag80VUKfaaK8DvqXic23OQrZ1b1InAcTK0jBwgA5RahbELoMmhheXqqCMtvWHJ%2FX37loG9ZMZfOfdOiaycl18ag1ZEVwgbptME7Ij0SeGufX%2FK%2BiNz%2FeqRSw5Yf6Pz0JH5DDdtpXBQX2LraxbTe5pNphKH2XppnUGvyI8cuYmRPcKLEKPyjoAgoq8OslAjjdOPZzZxCvq%2BLOK6o1ajhQIHun%2B8UIIluLNWscRlDkF4au9lk0ZgZYIk4h7clbNtwTslGG6D0ZNLKnAEIpBfFlextSX7KM0wjoYV0ZOMm2l%2FWKq6z82gFXqRGYIhJqphlHN6uXY8OEdhHK6%2FFtUEk4RyS4KWOWlI1fcapR8r1zyruVI%2BWfvuKu4LhwsYXgf3Db6g6F9qAkG70vDS%2FjT%2BeFIiIIaRNfeqecQ%2BPipYcPuf2jvK36IjnoravzQcFOcTKwYOBAB5q0B96tIW4D9c1piaEdX8BHElXiAXONJdvEjvsbxJ6Sx6EjkTPWYyKLRiel3Z2VGm2HnWs6OL79uSg%2Bw1SW6%2B6zqBFEsaJ4N7pUvUtjaXKCUwT7SvnD0XH36H7gpIpSQ9%2BNf91XBJ4INIXJsdmyMPyTlMMGOqUBKhx2EV8ep7Fn97hpDp1PW4BJ7JBOk7zImvN2V4sRZ0LBv0MeXKzl%2BMCzQpUKV5OtoNBQzcLAH83%2BkTahaVLA1DJevZvH9NqOn%2B9pibza1Qb%2B6ti7Uwh7hlHnVigYO1rlF5wPmA9vRHO%2F56KmPoNbyRJhB%2FKyV%2BqkNb2Cq7DqIi8I%2FiPl0eePllDUbywNPxcJOJCOYzESBfXO1lwwgrdxuUNrrKzv&X-Amz-Signature=fe48c5cc8f1a9e0032131735f8d2c529a85622ac87f54e7e48b854f1325e446c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIMD2WZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl5rf%2BzXJ6K3ebW6T2USGybnGhoYTn%2FmBubumwbDFqwAiEA%2BxsvzfxAqfh%2FFNTs1fzDrLCgZ8nPyMTFWpWLtAXaOXYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOf8AkrybUfkqi14SrcA%2Fj5uJrO%2FuPA668PxTlRp4E2STv170ZrSSi33XEbtDLlmMyrzo4bm2SV71NJo%2BE44oemsLwgscI8otyGb%2FWa7y9jlkfrznEv%2Fc7cS8iTcl98I3vAyuFL5ryjw3WZIRR68WQ1av1wP%2F6UJr4Yf9gt7zakqal3AjFa2EMEhROfX1LbKgRYp00MzjzCaGylng0Xdg4nK7TYDwx7g3ZOzIUlGYBL4g50Ke58Y38qDKyDffwZbplkPosx1%2Fdw9yI1VkegUjJa6eb%2FEOufkLPKN7nBNdZy58HVOzoI%2FnDwZ6wkXMarZ4ri4f4OXwAPKy1YJjg0vJRkvWyQvtQQlFKPuobui4S1wNkgy98Tglf4fSC93tS98%2F%2FBMCOkdT5MHIsgPZpdZxLgPycVmYQdBtcSSpgn5721CUjy1Ms2tKQskj3KChIglD4IJlSz%2BVKtKlIW9S1mPNWzC9UipMtqY%2BoztTxUWlUH4f9c9Y2mGYWKkhL6YsL%2BSW%2BygdTqIA%2B%2BuvUt8Bk6nRQQfIbpLtksk2DqSptNfw2Qo3mdYnre6IwDVlfROmLCMOAnmKYJj6olzv%2BvpV5n9SGreHfKd3GyBoq%2BMcXAKeuOOF%2F0lGZjOI%2Ft6hyW95cjG0ssNPX4lL0gd0FgMJOTlMMGOqUB4iYCNxVkzMG%2B7nQSoZyLQBe6CwjgWydaTtG14DV8LqDswEH3%2FWc1ERJs06OSDtKORm0VCSKUnaA3ZO2LlWT8%2FxtZw7Twn1TIAbfmXwBSQFbSU291QeEzh5N2Hh6LWl2ISPfmfSjwPK6LiyfoqehANRTbEZeKeFMY1dpi4UM2MwlRwHFQDHnJXK99cTxG9EGMvxAW4Zeq3DaoyVRwTKsgFxm4ZdBk&X-Amz-Signature=a0f4a1322b30b5dbca30ba82bdf52cfbdebd4eeb6dc282abcddbfd7f39dbf3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAX4KFZF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNrVzr1j9%2BnLwYpEmndpfZUuU7Zj7w5IABq4kiagJQ%2BwIgAzm2Q%2FeXPNWxvRg7cqUe2VO9MWmY%2FXsewC%2FdIBgTiIYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2LfP7r5hVcFiNFKCrcA3Zosxcn%2F5MFf%2FA7iVVJiByg1QKvZmn%2BYM3f2adwis5x6Heb6kp9vSekB4sbczoEIypprIGCUeXPUgLEBTVheOPETtLFWInhS2H5ZSrvf0%2BLwrfxc7GZlt5nHK7YCfxucaobqVIRaFHJfazWk%2FL6L8JuG2YctE1jIBFbYJglDI75KZKX%2Fz136B2X5gKyIZ709rvj1e9GGeQZFwQuUFuH1VsUd%2B5NFbagerqBSj%2BqUqF%2B8bfr9NljhL3ORtiz0QZORUdXw%2B2ik3%2Fs6NEuD2m9JcWjn%2BPrVH4IA3NJdfNtQosh1hkjgo55wgmWWv51mk53h9vtZF1suM8QiXGdEwsXgcSF%2FXhQ%2F6FF4X6cI3LJ9BdHo7AGOVAdMpnviHxtbk8%2FCc5RMqquS8p5AVn93MI0vUiJQ6iRo%2B6gyWDTKFrg%2F%2B2VOdPNX0UM7WfGxglrF3rhSD96aoU5Pk2datq00tsiRo70jl3TTa8ztMOAwplUbBJjhTasIf2VbVTiGQslpsJ3Vno%2F4c1cUiIEDvK4T5Fc5FH1uY0z9dDZJqyWkmraDa38gw9dPiz%2BjCiQHkNk7Yj%2BCn1Z1sPi95g5XKqdzdOiVjB3TlpCY2C8FbvyTh8wy90JQERFnMcx4I7oLSVJMPSTlMMGOqUBfuMxgr6vtdsy%2BoXSc238KvmUokSgUbuZJeER0mfC8RTR1%2BT1qQ59eBJBGmxSm7%2FATsKmiJxBSJyOz4PvW9hvqrOGegag1CmxGXRZGciCbpJwuSdVQVDGaOaqCU7n%2BeQEw0y9hx%2BcktsOEb8RAay7wDz2J4chl%2Ff6N4fm7JNv%2ByK4w2bqZx0oRdA1K%2Bxr4MopbZaKOg5h5YW6VmlLqGvoL27CrjRy&X-Amz-Signature=8fe8913706df31de204362be2c05b23cf0cb296348fb1ab9c89958575d9bc2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
