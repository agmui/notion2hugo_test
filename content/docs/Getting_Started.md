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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUDBLEJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHaidYJaBpqWuUSIxa1jJTdtAbqokkcyLMkflNdCwhI8AiBOR1WRub%2FrrzKUkL8wZ5lvnoQcgInTyvBtg%2F2dub1ouSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQT9OA73Pf4qaq9%2FdKtwD3VqS9W39lyHd6eTbQwK6NLB4JZNbWXCSCjX1rvmMfW1bvETf959R%2Bqx1Sx8Z3XGM15N7%2BgmiG1%2FIUTLvEZ%2F0SBEMX5i5kmznAc45gwwfJpDGlpKeYIRZkYNntafXuae0xUAUcYj90fyl5bRc6UWsJujejYCfEWDiaJP%2BVNOXx7e81T6I4wbGSjKR%2BnF1Jb78rK2CsCPmBkO3p6vvkEk%2FVwyAEEK7FSXC50yxfBdWnojGzXcWcT%2BhycaPYSczGhA00pbzkNBFnB0l0Z7kf6vZh%2BpXuJaqpq53bf0mqyJjgwuYWNjSYRVXqjgEIlTNooU2%2B0Ry4%2B7JAKGm6usgZKLzcLV%2BmYk9VQwX0nv9wcGxtaUgwfpgDMe8mttTCg4atMxg4Z67ySwz6roycm9DNKkTV%2FW%2FPupeXN7O9HRpu4sgJSdL8HrV3vOxPOYPvk%2BQwmDSGzez3hQhcndUizM3%2Bhjr0jFC7GKWIMWcp0cSgzRmxBYfTunp0TpPz1WABIFQDupkKdU%2FHPDgCnAEXvBFKsz8OVj35Wp4CqXpqRB4VdarZva9A48FE1f2Q3D%2BpQ86C7Q7xEGXkBIBFIQIUUKwnTA7kZOCiK4%2BiU5e5TSudsNzaY4uHTnezs6PHupbBl4wgaCjwAY6pgHuCbhabvRJDfx5bbVYsEg4z%2B4Z2eAOHzuGTxIQmGlPAfu2TUwDsi1IKCT9YtJo%2FsQgMz3mtRB%2BAO0OLrHv4xybKQsaG%2BONaDxO3g1NEwshmZ6n68z3sqdjDm1Wp63DxQzIqkQjSMgzh9YpE3VdpGh1gGNTbHNoWeRPCJp6lBZzW%2BZAB9A0Y8pVFdG0RjhSGs2V3vu3un2%2BJchzBp9AwwoRAg45F7su&X-Amz-Signature=b39e39d56037ec921539430168eeb8b06810e2b38a8eb759d20bc90f6e917f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUDBLEJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHaidYJaBpqWuUSIxa1jJTdtAbqokkcyLMkflNdCwhI8AiBOR1WRub%2FrrzKUkL8wZ5lvnoQcgInTyvBtg%2F2dub1ouSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQT9OA73Pf4qaq9%2FdKtwD3VqS9W39lyHd6eTbQwK6NLB4JZNbWXCSCjX1rvmMfW1bvETf959R%2Bqx1Sx8Z3XGM15N7%2BgmiG1%2FIUTLvEZ%2F0SBEMX5i5kmznAc45gwwfJpDGlpKeYIRZkYNntafXuae0xUAUcYj90fyl5bRc6UWsJujejYCfEWDiaJP%2BVNOXx7e81T6I4wbGSjKR%2BnF1Jb78rK2CsCPmBkO3p6vvkEk%2FVwyAEEK7FSXC50yxfBdWnojGzXcWcT%2BhycaPYSczGhA00pbzkNBFnB0l0Z7kf6vZh%2BpXuJaqpq53bf0mqyJjgwuYWNjSYRVXqjgEIlTNooU2%2B0Ry4%2B7JAKGm6usgZKLzcLV%2BmYk9VQwX0nv9wcGxtaUgwfpgDMe8mttTCg4atMxg4Z67ySwz6roycm9DNKkTV%2FW%2FPupeXN7O9HRpu4sgJSdL8HrV3vOxPOYPvk%2BQwmDSGzez3hQhcndUizM3%2Bhjr0jFC7GKWIMWcp0cSgzRmxBYfTunp0TpPz1WABIFQDupkKdU%2FHPDgCnAEXvBFKsz8OVj35Wp4CqXpqRB4VdarZva9A48FE1f2Q3D%2BpQ86C7Q7xEGXkBIBFIQIUUKwnTA7kZOCiK4%2BiU5e5TSudsNzaY4uHTnezs6PHupbBl4wgaCjwAY6pgHuCbhabvRJDfx5bbVYsEg4z%2B4Z2eAOHzuGTxIQmGlPAfu2TUwDsi1IKCT9YtJo%2FsQgMz3mtRB%2BAO0OLrHv4xybKQsaG%2BONaDxO3g1NEwshmZ6n68z3sqdjDm1Wp63DxQzIqkQjSMgzh9YpE3VdpGh1gGNTbHNoWeRPCJp6lBZzW%2BZAB9A0Y8pVFdG0RjhSGs2V3vu3un2%2BJchzBp9AwwoRAg45F7su&X-Amz-Signature=66f250ea19db0de0c6312b12b9790b57ee47bfb3e22be423dcea1e2e12ad4a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWK2YDVX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCUkMh4%2BZkYl9nXmCJgZs4Tw8UnUwJEG8ZEnlvBqj4rjgIhAPVrPrkS%2FriHGeqwGIC3tTGATfr0N2pjKN93elxuhkEGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYlTepsHZIu3FE7tgq3APXRYLzxPQYbO0aPcsJlEzHutFYbLQXBchQFnhQ%2BPQSoqUbR0WlY6ZCrY3XJi40gBiTp2bVIddaJGbdnhxhuNLtzfOUs9Dpt%2FAzyxUAwCsBbIhn%2FpZN6HOExp%2FxjfYwQ24mqpmRxc7wQV1GGcwT9jAHOnMqeoFcA1tRmaKxDLzcnFn0iF7%2BvK5iwydSHyCOvg1c03BmWr8g%2BibDGlB%2BFURI21PisOazhkIwivzsqg3UwYTLzJnURNIod9F%2FUZPx4ePRLcEoW4kjMcPXaPPnFFKSVdzLEEhKXUg%2BKcZgQX8KP8eE6nmdkrLn2punhi%2FRmznjij6BSV9qgnHkd2DXdZzGoE1aZwggdoqc7xCtHflnBpTiaRmCqHqS0MSDk7qpiqoW70UAjy6dAsQql2u%2BXdyGAhNP8QyrdJqD07bwiABKntbnfagcZWMtoEFEcb5mnKr6dxfC8xvDuL6w2jeOG%2FPDBKDXsgmn3lbKzRGZWQqvccrDhG81PJyUj5kIgIKNJM2LMSZnluDtkpqqyQbScjWWn%2BJ%2FMc0bPMUsWItFwKUusMFtBaR2ZgLS7ojGhPUaWccaUv%2BreL6yJTS3XCiZ0pFh4iD5DnRmbcB0Af%2FdHutbjEanyKO9HtpHo6ysOzDSn6PABjqkAelDxUmTui7iksPPmyPrPlTICgC7RObFOMctAXLhGjOPmG6tl2KYqaPiejVHMPFQnaHldIAML46WzAPpja%2FSvQ8uze%2BQ1mjYDbSsyx1BFEZNdgCsiGBqXJ1O26B%2FYZ4aXzDNhH1dSpQev1zrA4%2FscZiAJNLdc5Q5pjqb8eZd4psmN7%2BuSfjzdaN%2B3n8lFDS8MPSEIvFPVzxhL8y19pv5oR1fJayM&X-Amz-Signature=09faaeae096de41553fc028aa0b70c05765d7b8c86cba336c8310059d4d94555&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6RUGFV%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC%2Bf1Ig10MuUzM9aotjJPIhmJ5bA3DYfBPs53z323U2tQIgYwWRc%2FV%2FyP%2FCuLFUic0MaKuWDpnc5il0oZ7pA0q0dQ8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcnN2jQ0tNmK%2FipHCrcAzH4q%2FW6QI883Uzvcpg8ejvKHNcmAsRC9o0mTzKKhc7ftqzIo5Csy5k0T8XdHF0ebTIYfmEetmmjDXqDR1qKqeyrJMLLLiypow7H%2B0dDqaRxwTdpIqiXQcd3AjUXlI6xGGe5C2kkfpMIdcj3ZzpuEd1iFfU4muA4k0enZ0REngNqMwfYCKjBoyOEEowa%2FPD1HiUtzdvMa%2FNBAjTFIFQCdD%2Fe3qKbO%2BzrvGG255AlT%2FSrHoa1MVUD%2FjteyCDlbDAXFFX8OPY8x7gD3zbtgBSam%2BlRiF1LE7UVTWFcxT5tbClrpSmYcc4M%2F7WHqqzo015FF8dIOpIapcfaIIMhE10xaoAwnwqJRAUO9%2Bv%2FnzQZ8Hgh1GQg12GqU8B%2BZJ17hH9sSqBVSKb4%2F%2B7ld741x%2FB6xphnwe2lrWNudyoJHD3FYOgc%2Bj5zXXkUXvhX1WyIzOdre9lSfv7tv8fBHt2HSMxBmCofL4EI41bO39vfgRKhXMzeun%2FdgbMTw14QajqKT0k2V39%2BZTCn0xkKHTDSgCahiM8EWSA2H1Xy7cmGec24CkM7vm9WtcxihZbNrN5Ju%2BzniIhqY%2BvLVHJxkL9CIT07ypUhLMFnwzNUGX84VuhaWR%2BKgHQmDevKkfOCOGhWMMCfo8AGOqUBkLn6HkO%2BhhGs6S6kDw%2FiLRUhS0eIJE59ULW6mr2FJykhFDaP1lYxSLrOv5WlokWrxdREKT%2BDdILbwq3PIVD3PShvYdBKvxFjLgN6ZEae%2F1ZdHg01ioEhrCLaK8nu%2BUsxpEwJuKmrj8N4inF2%2B%2BbjEuotRSUN8BoLz1Lv86hd9rOopiM6nPeHuJADIS6sfUz7MtsmtjUgmc6jdKXB4BIZ5R88mpQT&X-Amz-Signature=16ef29d14cc02aef53ee12420fd776c481c256760d4007aa948d2d3ae6dc96b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUDBLEJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHaidYJaBpqWuUSIxa1jJTdtAbqokkcyLMkflNdCwhI8AiBOR1WRub%2FrrzKUkL8wZ5lvnoQcgInTyvBtg%2F2dub1ouSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQT9OA73Pf4qaq9%2FdKtwD3VqS9W39lyHd6eTbQwK6NLB4JZNbWXCSCjX1rvmMfW1bvETf959R%2Bqx1Sx8Z3XGM15N7%2BgmiG1%2FIUTLvEZ%2F0SBEMX5i5kmznAc45gwwfJpDGlpKeYIRZkYNntafXuae0xUAUcYj90fyl5bRc6UWsJujejYCfEWDiaJP%2BVNOXx7e81T6I4wbGSjKR%2BnF1Jb78rK2CsCPmBkO3p6vvkEk%2FVwyAEEK7FSXC50yxfBdWnojGzXcWcT%2BhycaPYSczGhA00pbzkNBFnB0l0Z7kf6vZh%2BpXuJaqpq53bf0mqyJjgwuYWNjSYRVXqjgEIlTNooU2%2B0Ry4%2B7JAKGm6usgZKLzcLV%2BmYk9VQwX0nv9wcGxtaUgwfpgDMe8mttTCg4atMxg4Z67ySwz6roycm9DNKkTV%2FW%2FPupeXN7O9HRpu4sgJSdL8HrV3vOxPOYPvk%2BQwmDSGzez3hQhcndUizM3%2Bhjr0jFC7GKWIMWcp0cSgzRmxBYfTunp0TpPz1WABIFQDupkKdU%2FHPDgCnAEXvBFKsz8OVj35Wp4CqXpqRB4VdarZva9A48FE1f2Q3D%2BpQ86C7Q7xEGXkBIBFIQIUUKwnTA7kZOCiK4%2BiU5e5TSudsNzaY4uHTnezs6PHupbBl4wgaCjwAY6pgHuCbhabvRJDfx5bbVYsEg4z%2B4Z2eAOHzuGTxIQmGlPAfu2TUwDsi1IKCT9YtJo%2FsQgMz3mtRB%2BAO0OLrHv4xybKQsaG%2BONaDxO3g1NEwshmZ6n68z3sqdjDm1Wp63DxQzIqkQjSMgzh9YpE3VdpGh1gGNTbHNoWeRPCJp6lBZzW%2BZAB9A0Y8pVFdG0RjhSGs2V3vu3un2%2BJchzBp9AwwoRAg45F7su&X-Amz-Signature=daf70e680153e8d1477ae510dc1736ebe9afd9474b50414fc79f3ba4f3caece6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
