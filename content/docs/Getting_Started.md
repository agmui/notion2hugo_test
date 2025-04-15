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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE6DMBJC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTEnPEQo1PJ3sS7f00UDw%2FbytKjwZpVwrZZTIl1V2xPQIhANImRHpZQuTvxdgUeLpMVebpw%2BO%2BbIfRD4oyib91OUJCKv8DCCoQABoMNjM3NDIzMTgzODA1Igz66NGMaIWmzf2tmKkq3AM1fY37e2Hy0M5%2FRo4YfL5iw2oyroHutvSjzSLexFZ4XeV%2BZvJafpxAYns%2FBbOWAZGV2C04PvJnbyJxqydGdMzMdH39BTSnxD98E5ICWoR%2BrowknCw%2FyLUv2CucoN%2Bgt7uvtkismn%2Fl7dJAiXLZ93aWRAuRwHWVPwDaiohw8f0kcIxWOcwjFHsEquNBuDlngOh8D%2BAsb5EL4Fcc9JMHpJg2XZKg5GqsXW1CaVT6ajhbqyxy1rEYKMmBSVxXIaVu1GcSMJOLClWJM9z%2BNaCfkwnylor8QjP%2FVxHBJ%2B7j%2F7L6%2BPAkVuJqK%2FRNYdQQhTUMr0m5urhKay1bD0vtVflweAps30llpe8CL8FQ1G9sTPCQu4t4DRqIyIm2jUhkOgaRJojvEZVl1y3J6SwVa6fnNNqbggYXlZhD0PCk7N7cqrJfK6QdQOMGakJfB%2B5oObanYWbcrVy8Kyn8P6vjsWPbKR9AYxrzkRwHneOryafnkfsMBGTujT6ijo63MymS1UUXZGdPKMXEksr7KIEfZ9pG9D%2BqnhR5EQEWnG%2FJlgWZ4GhWazfhppzNSxTS%2B%2BR8d3H7MOZkieB87i3WRFMYWKwdsNylnsps%2FzR09ZvmqEqAE50RMvv9PXvESSYj%2Bc%2FOeTDKtfi%2FBjqkATL91pqxVdYH24ejO%2FX%2Bs0uReJ8PdWPeYoVeIPuRsNM413kHNJXHAC%2FGV9n%2BqX8mrbeOIxNdoOQc23jFTDWDuAs0N759vvEbj1h0yyU0Tb%2B9CdFB5J2yUk0tczwFS2z7GJUBMgLryAM%2FcDWhLZINeJmbko2l1ctoyrEIlc6Mgn%2BuLAPjnwBBDn1XoMdKulOY5AaXGBAv4BR0AglGmDCWeKr6QrbZ&X-Amz-Signature=96b54617078420081147a0d10b8712543c46f91f36b87a933f737c22eb5b8d57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE6DMBJC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTEnPEQo1PJ3sS7f00UDw%2FbytKjwZpVwrZZTIl1V2xPQIhANImRHpZQuTvxdgUeLpMVebpw%2BO%2BbIfRD4oyib91OUJCKv8DCCoQABoMNjM3NDIzMTgzODA1Igz66NGMaIWmzf2tmKkq3AM1fY37e2Hy0M5%2FRo4YfL5iw2oyroHutvSjzSLexFZ4XeV%2BZvJafpxAYns%2FBbOWAZGV2C04PvJnbyJxqydGdMzMdH39BTSnxD98E5ICWoR%2BrowknCw%2FyLUv2CucoN%2Bgt7uvtkismn%2Fl7dJAiXLZ93aWRAuRwHWVPwDaiohw8f0kcIxWOcwjFHsEquNBuDlngOh8D%2BAsb5EL4Fcc9JMHpJg2XZKg5GqsXW1CaVT6ajhbqyxy1rEYKMmBSVxXIaVu1GcSMJOLClWJM9z%2BNaCfkwnylor8QjP%2FVxHBJ%2B7j%2F7L6%2BPAkVuJqK%2FRNYdQQhTUMr0m5urhKay1bD0vtVflweAps30llpe8CL8FQ1G9sTPCQu4t4DRqIyIm2jUhkOgaRJojvEZVl1y3J6SwVa6fnNNqbggYXlZhD0PCk7N7cqrJfK6QdQOMGakJfB%2B5oObanYWbcrVy8Kyn8P6vjsWPbKR9AYxrzkRwHneOryafnkfsMBGTujT6ijo63MymS1UUXZGdPKMXEksr7KIEfZ9pG9D%2BqnhR5EQEWnG%2FJlgWZ4GhWazfhppzNSxTS%2B%2BR8d3H7MOZkieB87i3WRFMYWKwdsNylnsps%2FzR09ZvmqEqAE50RMvv9PXvESSYj%2Bc%2FOeTDKtfi%2FBjqkATL91pqxVdYH24ejO%2FX%2Bs0uReJ8PdWPeYoVeIPuRsNM413kHNJXHAC%2FGV9n%2BqX8mrbeOIxNdoOQc23jFTDWDuAs0N759vvEbj1h0yyU0Tb%2B9CdFB5J2yUk0tczwFS2z7GJUBMgLryAM%2FcDWhLZINeJmbko2l1ctoyrEIlc6Mgn%2BuLAPjnwBBDn1XoMdKulOY5AaXGBAv4BR0AglGmDCWeKr6QrbZ&X-Amz-Signature=618dcdef51b3a9677b6ecbce629d51f7146b1ff05251f1369c9960ef211a28fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4TQOOQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIufrjATXVb5e3wRISGWMXdGdEyXuT%2BzpIvJVX7l4geAiAW%2BJG73Mg1dprw4olWUNyku2U2ZsZrwZAAd72SsguwMSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWKmUi3sVRscnyfqeKtwDTkloZODrZGTj%2B83%2FTYYU4rzFOlC6JnX00G8%2B%2FHAmV8k6Z9tzw98EtqMQpVeStvwUl4YYzn7Vp7d0uz9YgpjryNLL9ApYjiQ8UxKRSbAyp89tZBlIb9JQfpKBPUmKcrx3FNl9cVgUIOol2hAnKCUu6%2BkVdbOlcSThLmnWJDoil2Xm4FGP5o0vTnZb4KZgYEoraSzm6M%2FkBuoWBGyFe%2FO%2FFK9WIrMh%2F1MVz9%2BCLQzAYnuZ65xFv%2B6bhPfrYHGhX4YIxmD4%2Fcfbyy5Nr32Xu0yAXzE%2BxhorB85f2dhzs2Zbpj3OXP%2F2zpc%2FDG2SGOZcjD3Kl1o9uvNKiH8afS1MQDOCE%2FCfZRyNMBQsu4ZymhcKlPfhqzwA6Z2zk%2FkjFOwyszGw5uJHg8LiebXmHGkKLaFzhVAQNDZ%2BegD2q1L7%2ByKgc9gFwiYA9OGooTD%2BXvEKnHqo4mdhzDE7mszf8Q2b%2F%2B4HU6lYWL%2FRQpF%2FCeIjAEXt6FzSlYCzfRsY1MlIstVU2vwiPBlwlIi80xE8x6%2FZ2fPmDcV6Xln4oXEoXLu2XYQCRK2NjnKVBJHII39s9M5sgKnudtjC5RjJOrsoqIn8jb0XU%2FZAzeG1dJds5jlXTDX5ArwbvZHF3UnaI6OsGbEwhLX4vwY6pgGk7CJm1R2dS%2BFAVflZxIl5Bu41gr%2BVYEdBGMQT98e4Nz9mWU8v%2FRx%2FV1onG2RZ0nM6BzsVJ1Fvt4w75%2FF%2FrRxPwGO%2BZMGTdO0KFSrot6F2IK0rtSTNUiS8iYcpfu%2BYK3uqOX%2FYMc%2FEvqmjrVpUyWM7kWvCb3lGpAeT%2BZtUNSh1U1z9MFYS0Io9qigLO8qiA%2BrIhQa1UIQn8aIFi6nQUT9f%2FpccAKnF&X-Amz-Signature=61e1075cef570af0f02fe0082496e26264a660fe07cdf3638ee2459484594116&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A55IBBF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM0gGAoHSiFpJwRtNk%2Fa1XJR162Ke%2F3zqbDLqqDnMWOAiEAg4bHoiprmOd2rheISQf8vah7mH0PPjDuozGGUp2LkRwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFnrn4xKIn7rnnU4jSrcAxrlsgiea20nNAcLQnlk1wB9gZKth%2B0fzTy9jmDYlKaj5JgA2Ij5FNX5ue7C%2FyDjiBdo7MjliBZG7cRV5zDxYLkkE5EiRglWCmVzktPcLrzJpIaRs9yown7b0TF5b84GdrdFjSHtZhOR0HYgeYtbx3uhS96zsDsc69igdEhMJVtFTiNqk3rq5Wge50WdCqSn77ecF67t29mhNhM%2BcEdnKzCMfWByYxNMBVIJAJhNRaMDNt7op%2FhY7MCJJ5kstZz4alDo7JJuvLzm6Zw02cMP5YbmDPNxKJkpwfts45p6m%2BRvI51Ij0j%2BpexD%2FAqFy07HWIET%2F72fklwISvNAlEtvyXZEidBiBVJK6xBooPcVwwkNx2TZZJVkRBtUnky%2FYZk32%2Fpl7C8CIatEh5lhmHmDHUjj0ikhrDPobyPuAjuQ39cnuxOOzN8qp840pZsJcCRpNe2cB0XWX1WxpY5G0NXYPVlQxLrBNOpqS7M59yocXUuLHMb9WmsWO7SUEAkq4dhTZzVqufomMPoCGrqOMzhtr9WMM1XwSeSVf6nKVtaYHBB8V7pZ8Tq87bIFiLw2zdaOPwErOC6O5US7f34KrOSHNv7UUMQIBDnxpqmlIs9hcDob%2FwKMs09gsRgUYxXLMMa1%2BL8GOqUBeQg4xZyGK3lIcvEW8YDEbwmy7LGw3cC7f1LkH09dG6ootQx3dyWgn95VUE8mLsrdlR3KU8eCzyvXqbsEk2TPY8AZB%2FE1Q2l%2B%2BNdvRnk6jf%2FdYYmaQtyWiXDLdFnSO%2F3cqaJ0aeI3mvlHj4RYPWw2TsRR7TVBTv6eJDuwx10C%2F2Yk8AkYivo8CPDi6cgPQgOX%2BW7V0rP6JCncPO%2FTIVJR4kymozVs&X-Amz-Signature=68e0c90ec358b78b6082dbe2542df37ab7b369235426280e0162bd1fa77721f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE6DMBJC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTEnPEQo1PJ3sS7f00UDw%2FbytKjwZpVwrZZTIl1V2xPQIhANImRHpZQuTvxdgUeLpMVebpw%2BO%2BbIfRD4oyib91OUJCKv8DCCoQABoMNjM3NDIzMTgzODA1Igz66NGMaIWmzf2tmKkq3AM1fY37e2Hy0M5%2FRo4YfL5iw2oyroHutvSjzSLexFZ4XeV%2BZvJafpxAYns%2FBbOWAZGV2C04PvJnbyJxqydGdMzMdH39BTSnxD98E5ICWoR%2BrowknCw%2FyLUv2CucoN%2Bgt7uvtkismn%2Fl7dJAiXLZ93aWRAuRwHWVPwDaiohw8f0kcIxWOcwjFHsEquNBuDlngOh8D%2BAsb5EL4Fcc9JMHpJg2XZKg5GqsXW1CaVT6ajhbqyxy1rEYKMmBSVxXIaVu1GcSMJOLClWJM9z%2BNaCfkwnylor8QjP%2FVxHBJ%2B7j%2F7L6%2BPAkVuJqK%2FRNYdQQhTUMr0m5urhKay1bD0vtVflweAps30llpe8CL8FQ1G9sTPCQu4t4DRqIyIm2jUhkOgaRJojvEZVl1y3J6SwVa6fnNNqbggYXlZhD0PCk7N7cqrJfK6QdQOMGakJfB%2B5oObanYWbcrVy8Kyn8P6vjsWPbKR9AYxrzkRwHneOryafnkfsMBGTujT6ijo63MymS1UUXZGdPKMXEksr7KIEfZ9pG9D%2BqnhR5EQEWnG%2FJlgWZ4GhWazfhppzNSxTS%2B%2BR8d3H7MOZkieB87i3WRFMYWKwdsNylnsps%2FzR09ZvmqEqAE50RMvv9PXvESSYj%2Bc%2FOeTDKtfi%2FBjqkATL91pqxVdYH24ejO%2FX%2Bs0uReJ8PdWPeYoVeIPuRsNM413kHNJXHAC%2FGV9n%2BqX8mrbeOIxNdoOQc23jFTDWDuAs0N759vvEbj1h0yyU0Tb%2B9CdFB5J2yUk0tczwFS2z7GJUBMgLryAM%2FcDWhLZINeJmbko2l1ctoyrEIlc6Mgn%2BuLAPjnwBBDn1XoMdKulOY5AaXGBAv4BR0AglGmDCWeKr6QrbZ&X-Amz-Signature=8ed2834e6acadac04eac511757808531c6029b0761a9d8094b909aafba4d0ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
