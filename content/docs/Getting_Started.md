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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STE5DQPR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbEbEi87vehREZ46N01PWHtk6D8TnhI1CNIa6HTPK5VAiEAqV%2FQn%2BZh27DbV14gb%2F%2BLrfgsGUEDrbdn%2Fb7yepBwekYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeC3GvBawPH%2B9sL%2FircAwOQwT6rTugP7%2FdSNfmjxEYx6f4%2BHcoAW8uAFIJ%2BYBMkXOGf0dPPG3DP%2BYb5xsSFTrSHw036wlT8kHESmrGmEp0tFG9IPMn3L5NFKVX6%2FnSH4%2B1hM%2FRTm7qu8uxSKXwb%2B3ZdI%2F8BpoyiAglRvwdxgYA3X5gY8L8AUmXIzbfjfZqeKN87ReD9qTLX7GBfzQaPtyyRzKygOS%2BAbAQqrKnpX%2BgHgzUhHIA2wtjijZ8eJjK2nAQwSGfCk4omDj2EED5E57LTRHrf3kDRjSIBUxs5z8PFTF8cFX2iov4a1jM%2FGzYRE%2BmIs9stGu9q9FiPRoQJaWCgYXDCVlO%2Fl3gk04%2FUX2%2FMn5BAh8xd%2F3qxE9DNL9%2FhAu0immGkK4lwaHv%2Fq69jihEAYPHnSsXS4B%2BK2EKxr3N1k8ZOgOg9xnT9iUGEIQJBfxNCoEFSrv7rHbJVeyVdV4lnv%2BvDSnSBZImj4s5eBZkRYM8og60odQmimnKxOEFFYvCSyM87qSAWchdFYfvNeDKjGNISi6WfviXF2%2BxiAbYqJezjLEGbk0PIhTMJTaWHqLYOdaHOipXnW2s97%2Bue%2BlFLxleua68uH8bRoznP4f6OX%2BftEFNVz57FX1JQpY20kUx3MIC9V8Be%2BIRgMPuKgMMGOqUBIRwjKAG%2BnwQqNyB9gSS8xBuUKoctZeBu41UDw6ZSTUchhu8W9EVBrQignI2RB6KfP2Tn45%2F9JZNiMxB1Pdo99zCKpLsF7m07K0B32RWNN1UxehlpdP9GCg5QVsGa6yM7WpxaRgUEafsLl226PJ9roDzDs1SloyP%2B4fwIaA9RDkWxnBGhXUKTSQSGi9RBMO9fJWvMl7TjKfVuBMonfukFUssFvpxU&X-Amz-Signature=b7f23ddddfe99b50f26f3d82773f5026e094bed98e5c0b376f89d49ff0702842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STE5DQPR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbEbEi87vehREZ46N01PWHtk6D8TnhI1CNIa6HTPK5VAiEAqV%2FQn%2BZh27DbV14gb%2F%2BLrfgsGUEDrbdn%2Fb7yepBwekYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeC3GvBawPH%2B9sL%2FircAwOQwT6rTugP7%2FdSNfmjxEYx6f4%2BHcoAW8uAFIJ%2BYBMkXOGf0dPPG3DP%2BYb5xsSFTrSHw036wlT8kHESmrGmEp0tFG9IPMn3L5NFKVX6%2FnSH4%2B1hM%2FRTm7qu8uxSKXwb%2B3ZdI%2F8BpoyiAglRvwdxgYA3X5gY8L8AUmXIzbfjfZqeKN87ReD9qTLX7GBfzQaPtyyRzKygOS%2BAbAQqrKnpX%2BgHgzUhHIA2wtjijZ8eJjK2nAQwSGfCk4omDj2EED5E57LTRHrf3kDRjSIBUxs5z8PFTF8cFX2iov4a1jM%2FGzYRE%2BmIs9stGu9q9FiPRoQJaWCgYXDCVlO%2Fl3gk04%2FUX2%2FMn5BAh8xd%2F3qxE9DNL9%2FhAu0immGkK4lwaHv%2Fq69jihEAYPHnSsXS4B%2BK2EKxr3N1k8ZOgOg9xnT9iUGEIQJBfxNCoEFSrv7rHbJVeyVdV4lnv%2BvDSnSBZImj4s5eBZkRYM8og60odQmimnKxOEFFYvCSyM87qSAWchdFYfvNeDKjGNISi6WfviXF2%2BxiAbYqJezjLEGbk0PIhTMJTaWHqLYOdaHOipXnW2s97%2Bue%2BlFLxleua68uH8bRoznP4f6OX%2BftEFNVz57FX1JQpY20kUx3MIC9V8Be%2BIRgMPuKgMMGOqUBIRwjKAG%2BnwQqNyB9gSS8xBuUKoctZeBu41UDw6ZSTUchhu8W9EVBrQignI2RB6KfP2Tn45%2F9JZNiMxB1Pdo99zCKpLsF7m07K0B32RWNN1UxehlpdP9GCg5QVsGa6yM7WpxaRgUEafsLl226PJ9roDzDs1SloyP%2B4fwIaA9RDkWxnBGhXUKTSQSGi9RBMO9fJWvMl7TjKfVuBMonfukFUssFvpxU&X-Amz-Signature=f94ff927066daceba85c8b58d5a9d367f34446223cad552160298ba7788897b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STE5DQPR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbEbEi87vehREZ46N01PWHtk6D8TnhI1CNIa6HTPK5VAiEAqV%2FQn%2BZh27DbV14gb%2F%2BLrfgsGUEDrbdn%2Fb7yepBwekYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeC3GvBawPH%2B9sL%2FircAwOQwT6rTugP7%2FdSNfmjxEYx6f4%2BHcoAW8uAFIJ%2BYBMkXOGf0dPPG3DP%2BYb5xsSFTrSHw036wlT8kHESmrGmEp0tFG9IPMn3L5NFKVX6%2FnSH4%2B1hM%2FRTm7qu8uxSKXwb%2B3ZdI%2F8BpoyiAglRvwdxgYA3X5gY8L8AUmXIzbfjfZqeKN87ReD9qTLX7GBfzQaPtyyRzKygOS%2BAbAQqrKnpX%2BgHgzUhHIA2wtjijZ8eJjK2nAQwSGfCk4omDj2EED5E57LTRHrf3kDRjSIBUxs5z8PFTF8cFX2iov4a1jM%2FGzYRE%2BmIs9stGu9q9FiPRoQJaWCgYXDCVlO%2Fl3gk04%2FUX2%2FMn5BAh8xd%2F3qxE9DNL9%2FhAu0immGkK4lwaHv%2Fq69jihEAYPHnSsXS4B%2BK2EKxr3N1k8ZOgOg9xnT9iUGEIQJBfxNCoEFSrv7rHbJVeyVdV4lnv%2BvDSnSBZImj4s5eBZkRYM8og60odQmimnKxOEFFYvCSyM87qSAWchdFYfvNeDKjGNISi6WfviXF2%2BxiAbYqJezjLEGbk0PIhTMJTaWHqLYOdaHOipXnW2s97%2Bue%2BlFLxleua68uH8bRoznP4f6OX%2BftEFNVz57FX1JQpY20kUx3MIC9V8Be%2BIRgMPuKgMMGOqUBIRwjKAG%2BnwQqNyB9gSS8xBuUKoctZeBu41UDw6ZSTUchhu8W9EVBrQignI2RB6KfP2Tn45%2F9JZNiMxB1Pdo99zCKpLsF7m07K0B32RWNN1UxehlpdP9GCg5QVsGa6yM7WpxaRgUEafsLl226PJ9roDzDs1SloyP%2B4fwIaA9RDkWxnBGhXUKTSQSGi9RBMO9fJWvMl7TjKfVuBMonfukFUssFvpxU&X-Amz-Signature=5ebd5b3e42ba854346e695f856ea06096a05cd16452cf6088f3baca9ed1c7dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFS2YHD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7BF0AYAZaUYSIEmLtkCixT0x8z0XOsr6iuytsM51RAIgfMMBZrRXmFXoIL1w9%2Bzy%2BiSGgQlijBf3Z90NzjalDwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQcPKFSEPKZxlYGpircA6STUhjWcEY4jmKpsfymHal%2FfMbpxXeGqCqmmZJZVpfDvkN8vvMguYMMjlhVfsXpClWKI9VXkG9tcIsYoBJo3agHGa3XMMeZm9G0w%2FXv8u78I%2F1kt0dH10PuLqA77TyG8EmZ2D4HyH8Mf6ngvtMT9G9moDmwhlqB3%2FqcEvp2VRoVHT7J%2Fyp2pX%2BYjwc%2BWSkWuGj6p%2FGcHO7CBbirjdXHVGxCgxHc9fVXC444ekxcFSJzDndtlzXCJ08bkX2C61sDPA8SdRmCf0LKuLjb%2F1u4%2F1qvJcBfLdVFm1PVNPu%2FMwRikIIhL3dX%2BbzXU7sZJbFoWhxhO4hdrzH%2BqScQqa1eQWiedgyswbAOPYtyzEodKDv6DxV84tBEb5pJAt80o9OhUAqZC5ACcOJnd%2BSPXluhB0tsTcsTiZEJBXN7B5zqifsjXGDxD7VMXNTGRkvuiD%2BInUcYkcys4Hu4ZmWFb8ktmLuDiFbDEU7enjvN%2BrrkXfvZPxsMJg1eVEouzoUIiLj6G0l25UH4SM2TMZcLhcJbLpVhm%2FQktYOsdxO6kwCrv%2Bl9O%2FKZOronyN85yQ6SBTZWCuxQDaF6svbQpEnPlV7SzQ8ROcZUaQVdUvm49zts%2FcRyzpBdAilIvcCzzYYmMJOLgMMGOqUBJiLqEEJwPnhUnIMqxqtd30M1D8JRc%2BH5hjrYbOwRR%2FhkkUujslvsub4jnoOL4OlUjqCX5vZ9IFz3wos0ma796MDh82NSgj3UjDEr4jUV%2Bh9KUMRxiCMUJFVfGg9fB48B1EIOYn9EDB%2FEmzeJh%2BW%2FzcLtsdy79hC3Jzn5giQsNMd7wNci3RP%2BuaU52xtX4I15ZbBwA5b%2BgHz0EwfKq5AJfWo1eXEF&X-Amz-Signature=8ee6ab870f0b056d7baa56ce0795e43506adbc0996daba3485548a1bd6c8e736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMBZTUUC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiIABpVAqfNAfgauJA%2BxKvYEcde0kqG4U6acOBNbBV%2BAiEA%2BLvNMkpoV6y3PTD8DYdzvTKTBL3Uu6f3z9kuqq%2Bjec0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnHl5wN19snsQOE7CrcA3jVTR1PVrz%2FCYerFxR8DyVrfm5EPS4mutPwcHDZEJL9RkGg%2Fm05T1F3fSKfzSlA5yflJ4skWyg2%2FKASDx76BQz%2B%2FAQ9wTvVKDn54vnacY%2FLYQM00M4P%2FyZZgJZOBIt0LZdPZAWW1oPmHDS59ruQYrzQMl8t8ZYKNtNWA7P3neJ03kyu%2B01iJATgRneLBWrBWgfT03WeJPRp6M6W0EsXP%2BMLOrkSxjhnBmm8jFRe7OZjg6EOz3rtYsjH7khHvBc%2BwZ9VeW88Tx%2BTezx1SD%2FBS%2Bf0EoJm2XDXrcZ%2BXwiU8IbUiYPjNVWTnHngfe%2FwUTCmU08fxglFTmz9TPUOUMHjbBSCTCw4n3kycUu%2B38vgDWpSF4uuECoBbMg2NvZJJMxo1iQnzV5bWZJcLEozIvbN8aJE743r41dVmzCE9p6IeDbZmFUxlOPMiy2e0m4x0WlgbLW4iEMFasLLh6YgA4uf3OYKdkr9WaKop59tVYLtvzGbno9DIbEXtkoX%2BSu1HXZrmAmSsFx1hhPRkHxe0OCMsszMq37Mos7g2q4gNBEniJOQKUHB9G0j2V9D1lgAfyabtBp9iMSG9ADfVuaMYKzHl4Ziol6qBzuWYR%2B4WH5Drpm1KCo4%2FVBjXM0RgThmMLCKgMMGOqUBYEY8sjSDvSzifNS6I%2F8VeL1SurufjyXNCtA2XhJzwJXpXe%2BiuWFz8ABGaoKPHVMNScjqLNVbTgs6OgnG9DzVLKOq%2FzUrjKEc5JftJX1AuEGqbxHAX96R9CnQ3hHByDvlFrn0mmKabCxVFvLCCf40khWCodjlmNeN30dmcx4wpWL2DrBKuWJ9fDUCAys9RIzu4Vm%2Bu01x8yZYWs57VDuXuIa9cRI7&X-Amz-Signature=94102ec2d6a04f393003480641531b6936e5b9d1cffbac3e2e5f79801a22e0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STE5DQPR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbEbEi87vehREZ46N01PWHtk6D8TnhI1CNIa6HTPK5VAiEAqV%2FQn%2BZh27DbV14gb%2F%2BLrfgsGUEDrbdn%2Fb7yepBwekYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeC3GvBawPH%2B9sL%2FircAwOQwT6rTugP7%2FdSNfmjxEYx6f4%2BHcoAW8uAFIJ%2BYBMkXOGf0dPPG3DP%2BYb5xsSFTrSHw036wlT8kHESmrGmEp0tFG9IPMn3L5NFKVX6%2FnSH4%2B1hM%2FRTm7qu8uxSKXwb%2B3ZdI%2F8BpoyiAglRvwdxgYA3X5gY8L8AUmXIzbfjfZqeKN87ReD9qTLX7GBfzQaPtyyRzKygOS%2BAbAQqrKnpX%2BgHgzUhHIA2wtjijZ8eJjK2nAQwSGfCk4omDj2EED5E57LTRHrf3kDRjSIBUxs5z8PFTF8cFX2iov4a1jM%2FGzYRE%2BmIs9stGu9q9FiPRoQJaWCgYXDCVlO%2Fl3gk04%2FUX2%2FMn5BAh8xd%2F3qxE9DNL9%2FhAu0immGkK4lwaHv%2Fq69jihEAYPHnSsXS4B%2BK2EKxr3N1k8ZOgOg9xnT9iUGEIQJBfxNCoEFSrv7rHbJVeyVdV4lnv%2BvDSnSBZImj4s5eBZkRYM8og60odQmimnKxOEFFYvCSyM87qSAWchdFYfvNeDKjGNISi6WfviXF2%2BxiAbYqJezjLEGbk0PIhTMJTaWHqLYOdaHOipXnW2s97%2Bue%2BlFLxleua68uH8bRoznP4f6OX%2BftEFNVz57FX1JQpY20kUx3MIC9V8Be%2BIRgMPuKgMMGOqUBIRwjKAG%2BnwQqNyB9gSS8xBuUKoctZeBu41UDw6ZSTUchhu8W9EVBrQignI2RB6KfP2Tn45%2F9JZNiMxB1Pdo99zCKpLsF7m07K0B32RWNN1UxehlpdP9GCg5QVsGa6yM7WpxaRgUEafsLl226PJ9roDzDs1SloyP%2B4fwIaA9RDkWxnBGhXUKTSQSGi9RBMO9fJWvMl7TjKfVuBMonfukFUssFvpxU&X-Amz-Signature=d18a9abf7d8188e468e5f487409d4857a595ba7e3bd1cf37716f10776eb038e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
