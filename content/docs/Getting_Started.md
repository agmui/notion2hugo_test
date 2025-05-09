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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBLCMRB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcMpcS8PTgQtuO8%2FurIBfHJSyNHnSMFG9BnqNFSn7PqAiEAw29YZmpq%2F7oYNlzLjPlyc%2BoPe6Q5yyRAeZeLQtwEdK4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5ym9MTL9RsmVJVXircA6PsRhxXO4K1d2aWQmK3LfwptMuEv6gRZBzxcVGML117S5pdW8Ju442RpOEBOAhZjBr1n0pccL1J0MdjKvbRegdCwsV63MlymRDlFYW9ahSFjUKEUQVykh8Vup7qQyaUaAnQGWcfH3nuSqCA9OaMU%2FTRrdNk3PkyWYs0s2M0UF48xODvNZjsE%2B44ZEQwM4f3p1LOapAs0Fx3AfqMWMaHw8w16sRksIxU9yWQhYWIFShE9C7PRABxfxlvpuM9LHIIhajeg15CiGQQ5oQ3PYSBDh4wy8d8QaPbHwJ%2FEFlu%2BkinVId4EXsTm5SCLZ9tj%2B7f2RR5sJ0idDjfP8YAsCMkkOiTTzavlcf7%2FD8oy8Onb2moORAFEu32GTMo3EImRixaz4nGKFVfraNjef925vdUJdQeobYKSn4FBVdtSZldppPpqa2ijpzNqEIEqlAjMbyMc7HuPsr30NvZNVEmlm9qRs5ALL6vPsbk3tImIH2J3Dev0ErMv2Ee%2BGu4gUsH0nHz7FgBwGU7mTzzfKCDJVRHLhxzR5TyLTRNs%2FHMoh7CyLcUcStqoBtRHnDTHrY6be5HcUKhX45wKeVbOhTecfFIEw3iTcbozaTz6TAXEAhieU%2BJQcOV9t2fvzdm53vmMPWa9sAGOqUBaHQoXfdAJl%2F0Aug5Tk2O%2B3zxcMUdqAM6ksETZ%2Fd8Flcv1USueEvpQz2%2BQuaIz4kAgssUdHd2sdWGfd4vELGVO5mX7X9YUoaFXjhq8VWDKlWeqP7yKxZsu56r81KSC7hVYX%2BAxoDB0sHGR6%2F3dQI4JN9fU0hedQfIVTH9nh8mYzjJXOvpW%2FAYevk%2Fem2hFqxo0dE5UrW3X6wYlowID7mqBXJXvQvJ&X-Amz-Signature=eb698d8f47f5535bd362ad1059f58096681aa591faf26ea1c659e5437ca0a56e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBLCMRB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcMpcS8PTgQtuO8%2FurIBfHJSyNHnSMFG9BnqNFSn7PqAiEAw29YZmpq%2F7oYNlzLjPlyc%2BoPe6Q5yyRAeZeLQtwEdK4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5ym9MTL9RsmVJVXircA6PsRhxXO4K1d2aWQmK3LfwptMuEv6gRZBzxcVGML117S5pdW8Ju442RpOEBOAhZjBr1n0pccL1J0MdjKvbRegdCwsV63MlymRDlFYW9ahSFjUKEUQVykh8Vup7qQyaUaAnQGWcfH3nuSqCA9OaMU%2FTRrdNk3PkyWYs0s2M0UF48xODvNZjsE%2B44ZEQwM4f3p1LOapAs0Fx3AfqMWMaHw8w16sRksIxU9yWQhYWIFShE9C7PRABxfxlvpuM9LHIIhajeg15CiGQQ5oQ3PYSBDh4wy8d8QaPbHwJ%2FEFlu%2BkinVId4EXsTm5SCLZ9tj%2B7f2RR5sJ0idDjfP8YAsCMkkOiTTzavlcf7%2FD8oy8Onb2moORAFEu32GTMo3EImRixaz4nGKFVfraNjef925vdUJdQeobYKSn4FBVdtSZldppPpqa2ijpzNqEIEqlAjMbyMc7HuPsr30NvZNVEmlm9qRs5ALL6vPsbk3tImIH2J3Dev0ErMv2Ee%2BGu4gUsH0nHz7FgBwGU7mTzzfKCDJVRHLhxzR5TyLTRNs%2FHMoh7CyLcUcStqoBtRHnDTHrY6be5HcUKhX45wKeVbOhTecfFIEw3iTcbozaTz6TAXEAhieU%2BJQcOV9t2fvzdm53vmMPWa9sAGOqUBaHQoXfdAJl%2F0Aug5Tk2O%2B3zxcMUdqAM6ksETZ%2Fd8Flcv1USueEvpQz2%2BQuaIz4kAgssUdHd2sdWGfd4vELGVO5mX7X9YUoaFXjhq8VWDKlWeqP7yKxZsu56r81KSC7hVYX%2BAxoDB0sHGR6%2F3dQI4JN9fU0hedQfIVTH9nh8mYzjJXOvpW%2FAYevk%2Fem2hFqxo0dE5UrW3X6wYlowID7mqBXJXvQvJ&X-Amz-Signature=a154d71f87d28a5f63acd1406778d55e3cff44f6e009c9902400b6ed58820e08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBLCMRB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcMpcS8PTgQtuO8%2FurIBfHJSyNHnSMFG9BnqNFSn7PqAiEAw29YZmpq%2F7oYNlzLjPlyc%2BoPe6Q5yyRAeZeLQtwEdK4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5ym9MTL9RsmVJVXircA6PsRhxXO4K1d2aWQmK3LfwptMuEv6gRZBzxcVGML117S5pdW8Ju442RpOEBOAhZjBr1n0pccL1J0MdjKvbRegdCwsV63MlymRDlFYW9ahSFjUKEUQVykh8Vup7qQyaUaAnQGWcfH3nuSqCA9OaMU%2FTRrdNk3PkyWYs0s2M0UF48xODvNZjsE%2B44ZEQwM4f3p1LOapAs0Fx3AfqMWMaHw8w16sRksIxU9yWQhYWIFShE9C7PRABxfxlvpuM9LHIIhajeg15CiGQQ5oQ3PYSBDh4wy8d8QaPbHwJ%2FEFlu%2BkinVId4EXsTm5SCLZ9tj%2B7f2RR5sJ0idDjfP8YAsCMkkOiTTzavlcf7%2FD8oy8Onb2moORAFEu32GTMo3EImRixaz4nGKFVfraNjef925vdUJdQeobYKSn4FBVdtSZldppPpqa2ijpzNqEIEqlAjMbyMc7HuPsr30NvZNVEmlm9qRs5ALL6vPsbk3tImIH2J3Dev0ErMv2Ee%2BGu4gUsH0nHz7FgBwGU7mTzzfKCDJVRHLhxzR5TyLTRNs%2FHMoh7CyLcUcStqoBtRHnDTHrY6be5HcUKhX45wKeVbOhTecfFIEw3iTcbozaTz6TAXEAhieU%2BJQcOV9t2fvzdm53vmMPWa9sAGOqUBaHQoXfdAJl%2F0Aug5Tk2O%2B3zxcMUdqAM6ksETZ%2Fd8Flcv1USueEvpQz2%2BQuaIz4kAgssUdHd2sdWGfd4vELGVO5mX7X9YUoaFXjhq8VWDKlWeqP7yKxZsu56r81KSC7hVYX%2BAxoDB0sHGR6%2F3dQI4JN9fU0hedQfIVTH9nh8mYzjJXOvpW%2FAYevk%2Fem2hFqxo0dE5UrW3X6wYlowID7mqBXJXvQvJ&X-Amz-Signature=ccead50d0133491b5a388d928aceb7023aef78bb40790a8266fa82cf9c1fab47&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQX3L2L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAeEPHc6Q5AB55vDxC7Ka7V4XySI6h5qOs0OYWTUq7AwIhAJh3e6Hjts6HbAT%2BtlShI%2Fc7LEZTFSMkMQIkYeRNoWTuKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHiVptuaHbJapTiqUq3AMgWLYtmim5Dgxgi98Ea57QYOxz2hvyGSnEepUkGP09TwRbfMckVmGxbSMZeoUt3NjZ67KeaUdem2Ki%2FOL3L2Kr%2B9q6bPd13VkDK1NeLOfizgAyoGmvX%2Bfns18U9qSP4%2F9SprJypjMeVMeeLEIvsEULu0T7cIxqJ8dz3wnOO2SJFhLeL3I0%2BIP2tkbUxwr7nX7FaIPlwrjbR6XCsSpvlPaNmL2yr%2FO6DglD1%2BiJAVWBo4xUCJIByskGXN8KzdkzTobCuglDrppKPENHoLCC%2BeWfZbJYjbMYcW0ojPGWvxBdLndXgw5OIGYq1huwoNSKDVhVN6SHkiZpWOFuLWxUK7jjg5FMmh87Zpzuc6KkMg4BhX4o9ZbfX5zHa9floi8rDHqfXtoRJZw4vjCUNARNUYDtcJyAU6WLkInvvWfbaFPgiukr1nG68B%2BLeqIgSELgIdbs8CrI%2Fv1T%2FdJ07ZA0ae7f6iDokQR%2BAmFE%2FdQbOpOJyjW6Rlf%2BteTvBtz%2BOwuEvIrBURF8OqNtgdmnG4kJQxGfB7oGECAmblbX8IhB7A1Arlc96p3GTFKmMccyR%2BjTDWAuy6DtfSObxstZbNmfVbGZZVQEg7uy6NKioLB01TW%2Fibi%2FE9tHgE%2FH%2Ff1wYzDslfbABjqkAU6%2FizFSQb%2BnnNLA7LSBJaXKKn9GKoQeWJdAapFxwHNmXeaiHoAGHc04Gyv2f7AyDNGqIW7pAfVNSUe8%2BWhqj2anyJYB1knLAnL%2B39oTXYZ3Sz8QsNVgNapWHBcbVy5AZv5AoNhlh7WPtpby%2BafTzAf%2B6TCAjoKDR0TDwro8VfMPuyhpVTn2ZO7vxMxbK0Emjf%2B%2FyGWDE%2FomSBH4I7nRk2bwzY3b&X-Amz-Signature=4bf83b9c6b7fba27e2dcac9cf4bc75ba72230fbc49020b205c5ec8f271bdf317&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMCTOF3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSC7atowDIPcPAHVk3oRnxC9aupt8eyfOX193nyWQ%2B6wIgdIvPZJ0gcN7G46CSNSKRAngLAVYjfNtJ%2FFVJCefXFtUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg2EUpm5jQa%2FPCf5yrcAxS8KdbO%2FDOf1lS4L1wX4rjOt86n11tvNCp9AvfPpBlI6I%2BvKGsSSZ8%2BMj%2FHBjdeDPY%2FUKuveTstXYd08LO6liX5egklqkXnIyrjwZsJ%2BUVZG6WT8BCmE5Jyrk0INfG45tf5PBXHMsUz7YnjfIFiOlVN9lQdhdu7AbeOZPn%2BuS4OSAFVlj7GMhwV9CGxyrkHqJ9pexctJWaMUiI2yN%2F%2FwUT18DYPo6YON8QLYFzMFSxTykslFR00HhTfqZ%2B7tHsT8Mj0ZZfpx29zyJDvuCCvkhyJzmOJibCaDU7zrAJZMSm1qpOBwWjo3Sc%2FcDKiH0lMYI4o26bM%2BrV8WOPfcrQit%2FSseeX3itVdR9QGHkSOvZ3%2BUgkDlRS9I6UO3fiBR779RFcLam65dkoN6e4ScvG6ZsF7dpHeskLLOVzwguCQL1xeTJ2OUr9YTqjxXLoXfFngqibhJGFnzjdfjs8j1Mq%2FRi36ZiDGry4Xbhn86869NAv%2FXuI1TL5vAqtsCjH9PxF0TTGfbEhC%2BV3xkhxPyUbKXbPVMq6pZ7Pe58oqVT3AKZHS4h0YguQJPAxnauDIddozIYzbI6DnHfPv5TRTLoUIjx8eM4RCFpL67IhKycCHd96dEeUC83hbpMZljpsaMPyV9sAGOqUB9rEKTNAC%2FTBtPvecvD7s%2FHfisxnRGW4CDJkKpvp70Mi85lYJwBPD2UzPAx3eLMY2G%2FEE2T71Ptk5CMVTZLGz6H%2BaqVkO7h1nXR141e71%2BNkRcrIwX9rAkO8tKh000PSq7Y%2FByPRal%2FihghP%2Fw4P23b8lumI%2Br1LmxRFd5TkCZOW%2FG3WuVYfs%2FO7Dv3Ml6xaxM9noD9A0ZuJ1VvNwf7aQ2bvRi0i6&X-Amz-Signature=9a6c70a9ba26c35145659d0d41d7387110bf9e49a1d82f472fe7344276241b38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBLCMRB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcMpcS8PTgQtuO8%2FurIBfHJSyNHnSMFG9BnqNFSn7PqAiEAw29YZmpq%2F7oYNlzLjPlyc%2BoPe6Q5yyRAeZeLQtwEdK4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5ym9MTL9RsmVJVXircA6PsRhxXO4K1d2aWQmK3LfwptMuEv6gRZBzxcVGML117S5pdW8Ju442RpOEBOAhZjBr1n0pccL1J0MdjKvbRegdCwsV63MlymRDlFYW9ahSFjUKEUQVykh8Vup7qQyaUaAnQGWcfH3nuSqCA9OaMU%2FTRrdNk3PkyWYs0s2M0UF48xODvNZjsE%2B44ZEQwM4f3p1LOapAs0Fx3AfqMWMaHw8w16sRksIxU9yWQhYWIFShE9C7PRABxfxlvpuM9LHIIhajeg15CiGQQ5oQ3PYSBDh4wy8d8QaPbHwJ%2FEFlu%2BkinVId4EXsTm5SCLZ9tj%2B7f2RR5sJ0idDjfP8YAsCMkkOiTTzavlcf7%2FD8oy8Onb2moORAFEu32GTMo3EImRixaz4nGKFVfraNjef925vdUJdQeobYKSn4FBVdtSZldppPpqa2ijpzNqEIEqlAjMbyMc7HuPsr30NvZNVEmlm9qRs5ALL6vPsbk3tImIH2J3Dev0ErMv2Ee%2BGu4gUsH0nHz7FgBwGU7mTzzfKCDJVRHLhxzR5TyLTRNs%2FHMoh7CyLcUcStqoBtRHnDTHrY6be5HcUKhX45wKeVbOhTecfFIEw3iTcbozaTz6TAXEAhieU%2BJQcOV9t2fvzdm53vmMPWa9sAGOqUBaHQoXfdAJl%2F0Aug5Tk2O%2B3zxcMUdqAM6ksETZ%2Fd8Flcv1USueEvpQz2%2BQuaIz4kAgssUdHd2sdWGfd4vELGVO5mX7X9YUoaFXjhq8VWDKlWeqP7yKxZsu56r81KSC7hVYX%2BAxoDB0sHGR6%2F3dQI4JN9fU0hedQfIVTH9nh8mYzjJXOvpW%2FAYevk%2Fem2hFqxo0dE5UrW3X6wYlowID7mqBXJXvQvJ&X-Amz-Signature=8a43d2d27a591e204fdc4ab955ee133f50c535d0536dcf4c90f1d489a804c5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
