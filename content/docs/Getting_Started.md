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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODMX7IA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWfZhUcrIxiBBbjIKA0Bx9%2BUTMyT6U9pAIhmSLz9LG2wIhANzS2R9RGEpHILGYHbYOpCwBpEZ2ftJEYA1ghU3MSD71Kv8DCEEQABoMNjM3NDIzMTgzODA1Igzq2oH99Sie0%2FZHJhgq3AP6WpwgAN1zZwTbsEglFYQf8s%2BnD0eWOvmnYJzK8IZzQp5n00LbQN0KxuiMdjVI6nfmXhOlpxnsUVkio52E4R0fAJaWiqX8o4NzOYdng7s0wczJXFH4OVvtkfVRTRsSh2WrEDE4rHs5GD%2FjoBxpr%2BT2qHr7ID7ZJc0uHz%2B3GNv4jyyJcC91Sc1zpOsV3i%2BqeemID%2BIVdx8WnIDGgLzUDuXDZDFbIdryWDodrupqwvrfekfrDSZOCzmmMFtOqC5Y6oHgyax5%2F5j01FBCNjt9BKHMQNAxM7uBQ81SxUSPw4XXcUrcA9RMziC55i7VSMF1Z82CxgC2rLCXGyc7tVvU98266%2BD0KulHLq2L1JwNwHjeMJyMr%2B8GxH9j2OLvqQggiaJ%2FE5sGF86omZhCLr0fmUtYz%2FDsIjTspzFdOtvRHCWhTDJVA7%2BCG%2FcHCxEvcvsYAOo83T4d8Q2%2BtQxaAsY78Y4fVo1YhxjF3Rq6JShBDn%2FpfImeYoad%2FPBOlw%2Bi%2BrQRLYx5n6I842Ns8%2BIXMoPgga1wyATAjS0Xvigj8U6N0EUJCK43c4k6UWbdlZKaZHRFNYQeRvcqicJaS9hswo5%2BJoVkk1u4LjA0VZAHf8k5WxyPlrb32N40L43ELJ8MIDDYxqq%2BBjqkAQ0hy7xxvL3UJQ6zI4k1u0eEY2bwV9CwUTK58qzwhBAhA6ZsvHJWI3xMCgsPTW0Z0QOEKFKjK%2BQU1Kn8f%2BOVe5hO4lcI%2BcYcr2ApZ%2BHh5QDixPZzd1TRR8TSZpcUn22UgjuACyRqWajVxE9aQZbxFSjs9eSwhJXnHAkpmdpxV7gAIFSR9uZIHIjIP24fbpySMOVZgqwR9jjn1OOHsJlNl0LSzao0&X-Amz-Signature=8a5f3a1bc8dd9e24616fd25e69c8367fd042ddcb87e11ef2cceae3e902a2b454&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODMX7IA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWfZhUcrIxiBBbjIKA0Bx9%2BUTMyT6U9pAIhmSLz9LG2wIhANzS2R9RGEpHILGYHbYOpCwBpEZ2ftJEYA1ghU3MSD71Kv8DCEEQABoMNjM3NDIzMTgzODA1Igzq2oH99Sie0%2FZHJhgq3AP6WpwgAN1zZwTbsEglFYQf8s%2BnD0eWOvmnYJzK8IZzQp5n00LbQN0KxuiMdjVI6nfmXhOlpxnsUVkio52E4R0fAJaWiqX8o4NzOYdng7s0wczJXFH4OVvtkfVRTRsSh2WrEDE4rHs5GD%2FjoBxpr%2BT2qHr7ID7ZJc0uHz%2B3GNv4jyyJcC91Sc1zpOsV3i%2BqeemID%2BIVdx8WnIDGgLzUDuXDZDFbIdryWDodrupqwvrfekfrDSZOCzmmMFtOqC5Y6oHgyax5%2F5j01FBCNjt9BKHMQNAxM7uBQ81SxUSPw4XXcUrcA9RMziC55i7VSMF1Z82CxgC2rLCXGyc7tVvU98266%2BD0KulHLq2L1JwNwHjeMJyMr%2B8GxH9j2OLvqQggiaJ%2FE5sGF86omZhCLr0fmUtYz%2FDsIjTspzFdOtvRHCWhTDJVA7%2BCG%2FcHCxEvcvsYAOo83T4d8Q2%2BtQxaAsY78Y4fVo1YhxjF3Rq6JShBDn%2FpfImeYoad%2FPBOlw%2Bi%2BrQRLYx5n6I842Ns8%2BIXMoPgga1wyATAjS0Xvigj8U6N0EUJCK43c4k6UWbdlZKaZHRFNYQeRvcqicJaS9hswo5%2BJoVkk1u4LjA0VZAHf8k5WxyPlrb32N40L43ELJ8MIDDYxqq%2BBjqkAQ0hy7xxvL3UJQ6zI4k1u0eEY2bwV9CwUTK58qzwhBAhA6ZsvHJWI3xMCgsPTW0Z0QOEKFKjK%2BQU1Kn8f%2BOVe5hO4lcI%2BcYcr2ApZ%2BHh5QDixPZzd1TRR8TSZpcUn22UgjuACyRqWajVxE9aQZbxFSjs9eSwhJXnHAkpmdpxV7gAIFSR9uZIHIjIP24fbpySMOVZgqwR9jjn1OOHsJlNl0LSzao0&X-Amz-Signature=b94a2d12841fb0fdfa4734c3b0bad0b6c90558667ec2d948da05563388a754db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKOVKR7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbmE%2FlU2tdO8hvBLEfKPp%2FBZ1%2Fo3F9TNmtcNfajEZdIAiB0AtXZG9jJhi3Ts6qNoGvWlYjyuMhtWXFSPPXb7ygngir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUmOHbBb7kdVRzlC6KtwD6mxgyzganqRhiVcroK%2F%2BIjU3uU%2BClsw0dtwGOVKvz6FMZqgClTFTTuZWHDINg0HdtdxNhcTGDGbKEmAyh5%2Bz1XS9eLAsyx6I1wuEgTsB5N%2FTLWvqvA9AVpAVWP1CjVUzzvhx9rRojJVa0qQhJbZ6j1WAFXTJ72h5n6pEWD1qmBUuELOcmvIYSaCTitTnzRPSlxKo6bU%2FFMISMzlDBLvxQwtltdrm%2BLiwsG0oiEJT%2Ba8a6y5lN9GakwIN7rJ%2BgbOmjh0L8jn405oRsgK3PSVapw0WYklSz%2BWlOpZJyTpPg%2FDnxDn9YzBQLYtPIKWdXJjMGaJfDavt%2B%2BhTLeIIYT50DzjD%2B4OiiOPLIGokaNekMtRu69JR%2Bnm1sb%2FeUYzlmN9ulUXwBwqfrvpTu%2FZTtcCt423vzm8SdLNyDCStDcB6GJW%2FFmbaU4cfsSKJq%2BGr2MTZfIxcn25bVU18US2FRaDAPnR8EmHf6CdC%2BMZl5BZn65cDOLiqTsK2k3FOqCFn0N4Vuhha%2BwX5qX2tWEHT9JcFKJV0nQC7VqW65hhnr8Sr%2BaSBi4yMPGAPJfiNIZ0v1Pnkc2rtRg7XasRXz6OYHJhlnGs7B%2BOaRs%2BmoM1hjCv3%2FTmpYO%2FyVBghrIOmxpswpMiqvgY6pgGW8nSgJ4vvNxxRdQpkJ44G7M5LDsGA65pkgG2rmYY7TzrB1QdWOlNDhoTRCGBINQJ5f5NNPd%2B4b4dCO01LGzsoC%2BdVXUBdOAxUhfjJh3I%2F7eh2HckAQOwpKNH3UcNCDm7Oy9dawpdr4wUPHuTwBh5R4vJjMvAuO1jvu%2BZCm%2F9hieJUeU0fg9EtUtJvIkTMkocUG71tiYW%2FS5zvD%2BsW1LWJGrp2jJOv&X-Amz-Signature=6a4edc5eea13cffd7e3f5f83f6cb3179e00df0535ac984a294342d0084423704&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWI5QSOL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupnYL4Vj6HonfQxI14FMSCgB%2B94mmXOtB2Wgb%2BBvbOQIhAOvKSRtzvXV6JfsFMsi2kpISDajCAsTYN2Gp4RA2DyoKKv8DCEEQABoMNjM3NDIzMTgzODA1IgzO%2BQ4z0t8pcU6v1vUq3AOhRHjdocHEBl2ZLGQAuhteAzbOYBeCiQnihAIHXSLJSWyXi%2Be82VV8KZNA8E1NjBPfLpXgsTZO9CLBSDJHPsspgBeGgG4BI0jwzw0smEdxoyEocIOegg%2BWle4sFjP5yPEU%2BAPk95ZqoZc7GoAmuBgjXxXRaUvegVLMitVjseLUtvH5MocD1ylRr1zVYSTySRx7WQy2j98eumFfhD2NwPP3uEpyPYua33%2FrebrKm6h2h5tHJVXzTWCO2Rnk9%2FMPjGx4ZEKIVCAZ5y%2BhBxkxRCmdDx7x%2FnTTwaQNeGkWFf5njkoIlL%2BAXQBRT5Hjh2NsBPaJ2VCIZstQO01N%2FZETZ5xtUVXGPNqKCnZA8CATmH7YozD5pVg73si8%2BcqXnfAbVbK0%2BptwEm4MvbCvYngwg92J%2F10rlLDV%2BTg7IwTUJE%2B%2B23ndCj9PY%2Fkk3RfLDDCShtD8etqNPAW46mkGhP75Z5wO6ALiv10sbDVZEBR6SXmwT0COQEtBeCZc9XE8QRslG92RRPBqM5QmXydBj9J7O7p%2F2JLyhM6Vb0n%2FpJITZ8Ahrc3tuz5MyHsuNLT%2BDwxAWBv5qlyoXIclPyJMwOObLpFcGpwpLmNKCWcjJIX47x4NLgAyjF2F5Pwue3GTnDC0x6q%2BBjqkAZlqcONsMHLq2Sxn%2FgruSm7KeQToJ3tFhz2%2Bg5GmYdEvD16idO%2BKjPFb8Rd%2FvUB6n5zgQWm2tdT4hownG114n%2F8PrUL2an2BBZ81pvz9pztQeBEUBiA0UsdYyc1rC3z%2BrT6%2BSfP5qbPa9DlImVJQ8Q81a6IUFNpSSBx%2BJIYfbkGzS%2Bf1HCaaj8bhvfTkhdJCHp%2BzbtDDfBwVjxHI6UpbMUSMmMdq&X-Amz-Signature=4e21c4577472071a4100e2ca6cf42d74ac5b2c56afe4fb110106e4e1013ee99a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODMX7IA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWfZhUcrIxiBBbjIKA0Bx9%2BUTMyT6U9pAIhmSLz9LG2wIhANzS2R9RGEpHILGYHbYOpCwBpEZ2ftJEYA1ghU3MSD71Kv8DCEEQABoMNjM3NDIzMTgzODA1Igzq2oH99Sie0%2FZHJhgq3AP6WpwgAN1zZwTbsEglFYQf8s%2BnD0eWOvmnYJzK8IZzQp5n00LbQN0KxuiMdjVI6nfmXhOlpxnsUVkio52E4R0fAJaWiqX8o4NzOYdng7s0wczJXFH4OVvtkfVRTRsSh2WrEDE4rHs5GD%2FjoBxpr%2BT2qHr7ID7ZJc0uHz%2B3GNv4jyyJcC91Sc1zpOsV3i%2BqeemID%2BIVdx8WnIDGgLzUDuXDZDFbIdryWDodrupqwvrfekfrDSZOCzmmMFtOqC5Y6oHgyax5%2F5j01FBCNjt9BKHMQNAxM7uBQ81SxUSPw4XXcUrcA9RMziC55i7VSMF1Z82CxgC2rLCXGyc7tVvU98266%2BD0KulHLq2L1JwNwHjeMJyMr%2B8GxH9j2OLvqQggiaJ%2FE5sGF86omZhCLr0fmUtYz%2FDsIjTspzFdOtvRHCWhTDJVA7%2BCG%2FcHCxEvcvsYAOo83T4d8Q2%2BtQxaAsY78Y4fVo1YhxjF3Rq6JShBDn%2FpfImeYoad%2FPBOlw%2Bi%2BrQRLYx5n6I842Ns8%2BIXMoPgga1wyATAjS0Xvigj8U6N0EUJCK43c4k6UWbdlZKaZHRFNYQeRvcqicJaS9hswo5%2BJoVkk1u4LjA0VZAHf8k5WxyPlrb32N40L43ELJ8MIDDYxqq%2BBjqkAQ0hy7xxvL3UJQ6zI4k1u0eEY2bwV9CwUTK58qzwhBAhA6ZsvHJWI3xMCgsPTW0Z0QOEKFKjK%2BQU1Kn8f%2BOVe5hO4lcI%2BcYcr2ApZ%2BHh5QDixPZzd1TRR8TSZpcUn22UgjuACyRqWajVxE9aQZbxFSjs9eSwhJXnHAkpmdpxV7gAIFSR9uZIHIjIP24fbpySMOVZgqwR9jjn1OOHsJlNl0LSzao0&X-Amz-Signature=e1deef6166e11c52e357d4a162ac6ed8f600d3972eba85d3e4a4702f2b148ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
