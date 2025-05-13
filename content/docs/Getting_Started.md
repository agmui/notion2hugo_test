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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDHIZDF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDrCl2iv7kmXFyGa%2B1RRy8gEoq5p6rPKnLW%2F47BfPjmmgIhAIAVuTyqCg8OXkz7%2FLVTfnDfxKZy9L3DOcEQdkDFSx0jKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1VWpyGYVpBccAIIEq3AMBHydzlFz2hJrr1rk0mW93PMfDsM%2FfTx5fMEREJY4Exc90Jm0zxJSBprRS1K3z02FRuYDNPHxQPI4IxPNpDuYqcHf3%2BU3aOoiHjohqzFrNga%2Fg%2BgrQLKfW3DKm%2Bq5H%2Bm8JkP62DI3AZs9IwbbmuswEVVQItQuADe8cQvZuO5dKn8Ka9tTt%2BPWet8LiattdAqy1YAmCY0QuVp6Fa9IddWDXDN0CWSzTXAb0wD9mmH8DM6Nfr7DTEcqR1U5ZeLzXrMN91sm%2BZslRcfViPnaPfJKkY6uWqw%2FB9cs%2Bg0vOHfp9ztvDk4EDfEi76%2BntPbNb9HB0y3F7Y3sjLFxH6h0QZwUZt5hN2QzgK7ssLkxjDaT0xtJEoOHLburqkGoMsweOltSbBy2tE2NBCaHtkvZLmukMiZpLcE8uZhfwPHp5n9z%2Fl1MIUSyMSxgQTMPmFGAYFc0Jju3f%2BHVtcd%2BEMsWkQo0WN2ajpvidTZn%2FVUTttn6nF2MqAjivY%2F580W3hWr6%2FD%2BsgC5FVBzHo7zIk2kv2D%2Bmhsp%2F7vv9kILj2vfFj8%2B%2BqqEs1ULIIStjZ6V%2F6DZze2ln9T3%2FBBpx8TkykHeIQAJPF5%2BZ3vd4Ak%2F6%2Bhbmy%2BWV9ZQ2VFMVDyl3BLuEEDjDmxo7BBjqkAQBcDqHAKxb%2F9rsNE60X9KR2Xcwh0ivaqmXpCp0bb1skXLLiTgywly3WC9Ah01GzHFXRvhZ7Y%2FjjYpIh1jd1qM4BFBagcaAz17d4gof%2FEmBwaNMMzroDNwwPuSKxD7JZpsJA8MePa5O9sVQN7abOJE2ptdyIdBbaT%2Fdvx4GtWPslcBl42adZifG2l3DevWzDhP1E6F9NiUIakcVR5UYviAUq268Z&X-Amz-Signature=4de703c29a100bea8c9f454c690353a2a28fa2a75ea83c3fd8496e5e3b5ee044&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDHIZDF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDrCl2iv7kmXFyGa%2B1RRy8gEoq5p6rPKnLW%2F47BfPjmmgIhAIAVuTyqCg8OXkz7%2FLVTfnDfxKZy9L3DOcEQdkDFSx0jKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1VWpyGYVpBccAIIEq3AMBHydzlFz2hJrr1rk0mW93PMfDsM%2FfTx5fMEREJY4Exc90Jm0zxJSBprRS1K3z02FRuYDNPHxQPI4IxPNpDuYqcHf3%2BU3aOoiHjohqzFrNga%2Fg%2BgrQLKfW3DKm%2Bq5H%2Bm8JkP62DI3AZs9IwbbmuswEVVQItQuADe8cQvZuO5dKn8Ka9tTt%2BPWet8LiattdAqy1YAmCY0QuVp6Fa9IddWDXDN0CWSzTXAb0wD9mmH8DM6Nfr7DTEcqR1U5ZeLzXrMN91sm%2BZslRcfViPnaPfJKkY6uWqw%2FB9cs%2Bg0vOHfp9ztvDk4EDfEi76%2BntPbNb9HB0y3F7Y3sjLFxH6h0QZwUZt5hN2QzgK7ssLkxjDaT0xtJEoOHLburqkGoMsweOltSbBy2tE2NBCaHtkvZLmukMiZpLcE8uZhfwPHp5n9z%2Fl1MIUSyMSxgQTMPmFGAYFc0Jju3f%2BHVtcd%2BEMsWkQo0WN2ajpvidTZn%2FVUTttn6nF2MqAjivY%2F580W3hWr6%2FD%2BsgC5FVBzHo7zIk2kv2D%2Bmhsp%2F7vv9kILj2vfFj8%2B%2BqqEs1ULIIStjZ6V%2F6DZze2ln9T3%2FBBpx8TkykHeIQAJPF5%2BZ3vd4Ak%2F6%2Bhbmy%2BWV9ZQ2VFMVDyl3BLuEEDjDmxo7BBjqkAQBcDqHAKxb%2F9rsNE60X9KR2Xcwh0ivaqmXpCp0bb1skXLLiTgywly3WC9Ah01GzHFXRvhZ7Y%2FjjYpIh1jd1qM4BFBagcaAz17d4gof%2FEmBwaNMMzroDNwwPuSKxD7JZpsJA8MePa5O9sVQN7abOJE2ptdyIdBbaT%2Fdvx4GtWPslcBl42adZifG2l3DevWzDhP1E6F9NiUIakcVR5UYviAUq268Z&X-Amz-Signature=0634b3f0ec6d4c27ae1ab77930262be745549f53a0771ee5c21a901a2496e713&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDHIZDF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDrCl2iv7kmXFyGa%2B1RRy8gEoq5p6rPKnLW%2F47BfPjmmgIhAIAVuTyqCg8OXkz7%2FLVTfnDfxKZy9L3DOcEQdkDFSx0jKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1VWpyGYVpBccAIIEq3AMBHydzlFz2hJrr1rk0mW93PMfDsM%2FfTx5fMEREJY4Exc90Jm0zxJSBprRS1K3z02FRuYDNPHxQPI4IxPNpDuYqcHf3%2BU3aOoiHjohqzFrNga%2Fg%2BgrQLKfW3DKm%2Bq5H%2Bm8JkP62DI3AZs9IwbbmuswEVVQItQuADe8cQvZuO5dKn8Ka9tTt%2BPWet8LiattdAqy1YAmCY0QuVp6Fa9IddWDXDN0CWSzTXAb0wD9mmH8DM6Nfr7DTEcqR1U5ZeLzXrMN91sm%2BZslRcfViPnaPfJKkY6uWqw%2FB9cs%2Bg0vOHfp9ztvDk4EDfEi76%2BntPbNb9HB0y3F7Y3sjLFxH6h0QZwUZt5hN2QzgK7ssLkxjDaT0xtJEoOHLburqkGoMsweOltSbBy2tE2NBCaHtkvZLmukMiZpLcE8uZhfwPHp5n9z%2Fl1MIUSyMSxgQTMPmFGAYFc0Jju3f%2BHVtcd%2BEMsWkQo0WN2ajpvidTZn%2FVUTttn6nF2MqAjivY%2F580W3hWr6%2FD%2BsgC5FVBzHo7zIk2kv2D%2Bmhsp%2F7vv9kILj2vfFj8%2B%2BqqEs1ULIIStjZ6V%2F6DZze2ln9T3%2FBBpx8TkykHeIQAJPF5%2BZ3vd4Ak%2F6%2Bhbmy%2BWV9ZQ2VFMVDyl3BLuEEDjDmxo7BBjqkAQBcDqHAKxb%2F9rsNE60X9KR2Xcwh0ivaqmXpCp0bb1skXLLiTgywly3WC9Ah01GzHFXRvhZ7Y%2FjjYpIh1jd1qM4BFBagcaAz17d4gof%2FEmBwaNMMzroDNwwPuSKxD7JZpsJA8MePa5O9sVQN7abOJE2ptdyIdBbaT%2Fdvx4GtWPslcBl42adZifG2l3DevWzDhP1E6F9NiUIakcVR5UYviAUq268Z&X-Amz-Signature=fc2d5007f82cf62ab25e0ab99f6b5d669cd9cf7c149bca99d22d2662845b521d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IMDPAM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCjpABw7b2Yd2F79CwcGrwwCyPz0AFFZfLd1aYuXqer8AIgFUT8teTYtvkPi9NUS53lOoWU1%2FuIb0Qep5U%2FSMDY71wqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfJo9PWIygIeIeAASrcA%2BKTSE1HggXvsq9CnIs9I7a%2FdPxjtmX7snTqY8Xrv4wWlhn4bM1AcZVO7HdHdEBpnSXtEJsplz6Y24O3B5OoFlhEgfsFXWLoneZc6kP8td87EaXCQ1Nxj4NLR%2BJ7CaKimaSGOyvfip7HV6TaRtvuE7pqsCgmwSe1c%2B9e%2FD5C%2FHijM7XbbqvDNJllPTok8ZUmom%2BSSYNirxxtActuCihfO0SKLhTps5zi%2Bg2aThoDC1dz4WDQxDJsowOBead2YqUu%2B4Qd7vpGemSJvMmvnzpKaOuwymD9nnbnLyJC9mVYb%2B2jmyCofYKPnXObVN9fNsY3CeKpXEMrb8Zv%2FSF7zHD%2F3l4%2FNu3qweBEScLrmY8SyU1jqPs%2BStUjlJYY4W%2BUASlk3Et1mhWRsc2rGYtrxKRxijmcOfR%2Fd3w0sIy%2Bd5IePsrY8C3lhnnLNNVTcnzaltT2elTxK3u0O%2BwtCrWAkZXdJzxNlC2mJkcu4XWBFPnTl8DbMm4jdyxF%2ByAzD5A%2BzBpgTPq9C7peGDMbpGYPJSqlvjT0c4s1QMlIR28Uo%2FXlLoZPrhRbuDDcKDpbZGpjEOA8gsQj1X8ACtbIW8Xb2XnUTbguIotB%2FN%2FgvW1SoXRHf6iaom1SYpf9sTtf1XIoMLjGjsEGOqUBOfrkTVD%2FdAvB5d%2FmOHe3kyC2S3b%2BH78ioJJtZ00vFlGl9REva0UEQBG6fLtMZrkMDwrxDBrI0V8UbFi1046%2BabOYNDlFHrFxVxN5rpfn8vyYMLNWVMJLQ3W9MyUIKXyb1rEF4Y0GJdzTdQPe3k38%2BYFjYc7qbb0lgeI3SWjxUUX7y1cc60v7vyonDtG92BAUGN1cxGHtof5%2BfmNxn8z2igdIWYeQ&X-Amz-Signature=f5eb0e49c0a6023d163a8d0f9534d74058eaa1d2b4b558beb07e58f027772186&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IN7PI6I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCQkh3whkFszJTCvRh%2FsxhFI1Q%2BrLHRIFLRsalGvCUQHgIhAJ7itesoRh4TGvx1s2H9IGbjjlgXlEg%2BT7kY0r4k1R3QKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw683dP%2BsFt0%2FCCYv4q3AMJLKDLCSBRY%2Fjz%2BmGsTmKBwT3lBjtslzBvjlQwnDouOZIlSwDm72AtZjZ0bEB%2B2KIYN1I8sNx8%2BY%2FUt0KlhwODZe%2FMy44ZozncgB5wYAHFVpQQipIZP2%2FY9MgIu5GUWhe%2BLzbaDIGZRMGM5FTTXq8fy4BjEqbeqGO5DRa%2BSlgdZqQQsorf6oHdAn8i0Hxtu6BKESJDuFjy5A%2BTTQ1voXUnM23qVEYdIGSWp8f3I4z9va9GirybAn6v%2BebpnubqLcK5nwUFTgSSIOGM1yTd7ytAc0eltlMer00YqAzUZRTOYW2kKsIKzUsz6T4IKwQ28jTbkw6rLrhb68%2BqJPpqIqcqcEjllib0fnjotiEeCQVmn5jUbRhc6QNSibZxjuGVyoKiCXDu2GDFy%2FMcLWooyV%2F1AUq3bGfKS4OMlDB3Jp8f9aHJCykXsHto5yZT90f%2B6UJODdKS%2BGGxp2OTiCBQMlFu07fnS8pOET9t57xIZ6F4hUNkzgKQqGKYiNHyle8cbcYwjEbtpxQK0rsZKWirmmVOXw73d6%2BdYw0J%2FR9LCIMkCMuBFRMzOPj8zKtrfjQthVEJj%2FqGBD22vjrVbSVQMN694sPEpw7LU5uc41zWzcUiT4S2A8FCwOAKaVhbiTDtxo7BBjqkAQAGdccefJzbsT%2Bfr7iBvz83AtElmz7qBQ77JM1o8%2B9u8tX5adj7zJ0HO%2F23gApT7JGuezO62%2F2IimYtUxAUa8T4qP9dAPq2y%2FufVgywufDVfhDw2T6S8nEXsU%2F6gs6CB677HWzL8wlnSViw6VGzG2%2F%2FHlc%2BBmegEesGpjaMm02M8q8K47RwYFOndz9GbzMnISvDOBY%2Bzzh2lGEynCyaKTGkJi7x&X-Amz-Signature=61f5b52d0a6d8e7fa9f751184a527f4d61296f05f2dccf9e9cf5461f9cfb8e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDHIZDF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDrCl2iv7kmXFyGa%2B1RRy8gEoq5p6rPKnLW%2F47BfPjmmgIhAIAVuTyqCg8OXkz7%2FLVTfnDfxKZy9L3DOcEQdkDFSx0jKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1VWpyGYVpBccAIIEq3AMBHydzlFz2hJrr1rk0mW93PMfDsM%2FfTx5fMEREJY4Exc90Jm0zxJSBprRS1K3z02FRuYDNPHxQPI4IxPNpDuYqcHf3%2BU3aOoiHjohqzFrNga%2Fg%2BgrQLKfW3DKm%2Bq5H%2Bm8JkP62DI3AZs9IwbbmuswEVVQItQuADe8cQvZuO5dKn8Ka9tTt%2BPWet8LiattdAqy1YAmCY0QuVp6Fa9IddWDXDN0CWSzTXAb0wD9mmH8DM6Nfr7DTEcqR1U5ZeLzXrMN91sm%2BZslRcfViPnaPfJKkY6uWqw%2FB9cs%2Bg0vOHfp9ztvDk4EDfEi76%2BntPbNb9HB0y3F7Y3sjLFxH6h0QZwUZt5hN2QzgK7ssLkxjDaT0xtJEoOHLburqkGoMsweOltSbBy2tE2NBCaHtkvZLmukMiZpLcE8uZhfwPHp5n9z%2Fl1MIUSyMSxgQTMPmFGAYFc0Jju3f%2BHVtcd%2BEMsWkQo0WN2ajpvidTZn%2FVUTttn6nF2MqAjivY%2F580W3hWr6%2FD%2BsgC5FVBzHo7zIk2kv2D%2Bmhsp%2F7vv9kILj2vfFj8%2B%2BqqEs1ULIIStjZ6V%2F6DZze2ln9T3%2FBBpx8TkykHeIQAJPF5%2BZ3vd4Ak%2F6%2Bhbmy%2BWV9ZQ2VFMVDyl3BLuEEDjDmxo7BBjqkAQBcDqHAKxb%2F9rsNE60X9KR2Xcwh0ivaqmXpCp0bb1skXLLiTgywly3WC9Ah01GzHFXRvhZ7Y%2FjjYpIh1jd1qM4BFBagcaAz17d4gof%2FEmBwaNMMzroDNwwPuSKxD7JZpsJA8MePa5O9sVQN7abOJE2ptdyIdBbaT%2Fdvx4GtWPslcBl42adZifG2l3DevWzDhP1E6F9NiUIakcVR5UYviAUq268Z&X-Amz-Signature=7c5198fbbe5ef6ab48f2f658b95e86fbb511e44d56ae955d908dae6805192e94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
