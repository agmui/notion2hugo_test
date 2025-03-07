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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGY67MR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6joNg6pzcfPNESfG7U3kuUx5EyzboOTLbPUzoOKi2cAIhAMjTTiP0VHReH7PxYGf4PFG8NUR%2Fj4e0XQdWLYCaZf0FKv8DCD0QABoMNjM3NDIzMTgzODA1IgwDRrO72FDaHOQhEK8q3AMlxn3ltjwT0c%2FjasX5Y0hpQX4TXLe7yjkCaliirgMM8KichpSKKbx0a4WvdviCL5MahS%2BJC6ifE11wvxnjC338ZDmKDwXe3S6PbZSydj5pucbb4xytX2fW1lmGgStSKm2LjTlQOj6c16ooPPWNrqtltFB6zVmG%2FetaQXJIf65obdrRkYjawn2ippbafoklwq7fHslZRnfF4v%2Fzxy7T0mO1THYZz2xFbsfiy5pzpbTzb4K31hEK4GjNmjoCqJSEi2t5EOuibqv96EonTQ3ba6Q3EPYHknxnlAYs5MNTEr7ffr%2FxRSSGNdf%2FafRznmLBo87W1gSGaxIAQnn8PchBA96RI2d2PcR5aVtWg72BMOaBaVRYHHJ1F1QXxc3YmDvVRMwSeqG2Qfe0SKgjermFEPXoeGFJAVNpyUme4UbpaDXWzW7fUOtsvLECCPn3EX6ijiCmSVHoz%2BXZe8jYCi6Gsv8t%2Bg8%2FySyLWotjMM3a2TwB%2FICKz295%2FBfAY0TrJAuXdvqw%2BcOh%2FxaYEmX1ricxuxB%2BLcebP4GXp8Z%2FH5wkOHuV8R95dFBLwN4Voq1IqYruOwWf04UTZiyXWQx63qbHFrB2DzkIwPPOrX9q%2Fob84rYDCJ%2Bo3YYUy6NsNn6FATDc5qm%2BBjqkAYpWO1vv3hMgqgLe87SS0DnEA0sGSmF9ZsNaN7b6U48jrtNCq1TVJSozYbyDmovDPF4X%2B1clkg02LOroe3r5wOvHLg%2FL16F4UOZey61eDgI2QJGIyLSXEUHY3YgKRgmo2FqeUCL%2B3ITeD5FFT%2FddvxMTmR8wACTXJ8OjhG4ulDe7ztykzOoUYUbUux6xt0bn47mmHU20MmOctWGN%2BFIehtLJBjbM&X-Amz-Signature=6e1d5959b7f065c41ef8ee06f93faa7901e8030d02ed981d3d4478270ac7d31c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGY67MR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6joNg6pzcfPNESfG7U3kuUx5EyzboOTLbPUzoOKi2cAIhAMjTTiP0VHReH7PxYGf4PFG8NUR%2Fj4e0XQdWLYCaZf0FKv8DCD0QABoMNjM3NDIzMTgzODA1IgwDRrO72FDaHOQhEK8q3AMlxn3ltjwT0c%2FjasX5Y0hpQX4TXLe7yjkCaliirgMM8KichpSKKbx0a4WvdviCL5MahS%2BJC6ifE11wvxnjC338ZDmKDwXe3S6PbZSydj5pucbb4xytX2fW1lmGgStSKm2LjTlQOj6c16ooPPWNrqtltFB6zVmG%2FetaQXJIf65obdrRkYjawn2ippbafoklwq7fHslZRnfF4v%2Fzxy7T0mO1THYZz2xFbsfiy5pzpbTzb4K31hEK4GjNmjoCqJSEi2t5EOuibqv96EonTQ3ba6Q3EPYHknxnlAYs5MNTEr7ffr%2FxRSSGNdf%2FafRznmLBo87W1gSGaxIAQnn8PchBA96RI2d2PcR5aVtWg72BMOaBaVRYHHJ1F1QXxc3YmDvVRMwSeqG2Qfe0SKgjermFEPXoeGFJAVNpyUme4UbpaDXWzW7fUOtsvLECCPn3EX6ijiCmSVHoz%2BXZe8jYCi6Gsv8t%2Bg8%2FySyLWotjMM3a2TwB%2FICKz295%2FBfAY0TrJAuXdvqw%2BcOh%2FxaYEmX1ricxuxB%2BLcebP4GXp8Z%2FH5wkOHuV8R95dFBLwN4Voq1IqYruOwWf04UTZiyXWQx63qbHFrB2DzkIwPPOrX9q%2Fob84rYDCJ%2Bo3YYUy6NsNn6FATDc5qm%2BBjqkAYpWO1vv3hMgqgLe87SS0DnEA0sGSmF9ZsNaN7b6U48jrtNCq1TVJSozYbyDmovDPF4X%2B1clkg02LOroe3r5wOvHLg%2FL16F4UOZey61eDgI2QJGIyLSXEUHY3YgKRgmo2FqeUCL%2B3ITeD5FFT%2FddvxMTmR8wACTXJ8OjhG4ulDe7ztykzOoUYUbUux6xt0bn47mmHU20MmOctWGN%2BFIehtLJBjbM&X-Amz-Signature=7ccbed899194480a29c6d5bc4bbe06a3c120e6b9c2059ed81d3f873f1bff58e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSTO5J3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXmppGXk7a%2BtNUa3gmOGCwBrbdT63UcKFtXL%2Bni9jamwIgC9LaN8TgPU%2F2m7iPEmRKy77aMfqV0hav4gWHDkWhSkoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDN1FyVlwy4mBvrYZqyrcA4bZ0bM7aB%2B9T8fII6ODwBvSnAOA0wdI2YnRGRkTajfWcZvxVNc%2FeUbTN6eVjdKj%2B3pMgrSG%2BOGKc3KzbMxjFAhp38TpbM6FwwSFsb2b25xGVPBiVVaZSrsK0u4QFRgMeMnWd0Kfb2O%2F72oxwvFVMYEJzTd5IxkC8piVwbmWaSbp%2Fp1YRtoDgIozro88uVwY7Eitxxn85QRcT4xd1%2Bx9rmx1KPh7%2Bj62EKRTwMO0dlJKyUujBqlI%2BojJX7%2Fs1QGc%2BV3TL5AwngRgkraj4X5Yq3Rg07E%2Br6qxo5f1npT7TpP9LpN3GJKy%2BhYipddWU57ewnICa%2BmeAjzWzgiSorHQANJ0%2FGt6VbOZ9YlrvsDmCNn1u9DH5ntBVcT1CjGQAGE%2BeWKFEtV2%2BYl3TinLpHlVSDGh4kFPh5pc1E%2F96Z36Rf6UpfPj1vZgNddvq%2BmudyA%2BPCsmqmoHbpQXCbkkR63sQw%2B6swouiwTlbOg5Ww%2Fkg7H%2FYfHTuouUXXVcDTjZ4CfCB7t%2B6g7UoBo8NPhGJ9CN%2BwY8ET%2FLPSgTrBzkTt9oghaF012uMAmAlEMX9oEWWSdo78lo8A6jmmRdinXAspSMNcEJweJNaJ0wFxRqYUgGi8iW%2FADV879RoX7S26RqMPnnqb4GOqUBpxMg%2FisoSU%2FqVf41wVvOqpziNyCg2hCXx%2Bq%2Bh5Oj2W7%2BXzq72fGk5ccheVdy%2BfUvl3dPkpEy0r%2FhXo%2BNcuvAWqVHqcVvgdB4x8kKhCtS3v%2BdvgBlXnUxwTNzChO3eOpYH9DIiGJziVJ1j2fmXO0vHREnqFQSADNEYipKeTay9%2BZ5YKUx3DjDLYYsLz8aU9FrLEbCpwYMrRvokPsCwigxCwnBHE1k&X-Amz-Signature=5dd49748f9fff3cd3220346475c716b40ca418b60bc9071612fb7af2989285ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLYETRA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4SUh9MUHYWGTtlH7LGaFPDCQvaNQZGCUTNvlUEZ56AAiAvWKTBgSv86qdZuV1QivLbaps4KA1uWmP3mW5oCXBvtir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMHXYNfXAVePIFROvuKtwD86ho4hHEmAc9Xawilnkd8tJ9HJFzmfCicKposnXwwqQCJMbN47ZEl0m57qCoy7DF3UVxkEngPn4QIAqLze1rQqpySS3Xg0Cw2S3ymy3IXbNB%2F4TOlejrenz3YEX82ZC61tTFSV%2B%2FPbJTFFx2SWi4F20kGhQfRqyIyxJglxNnuRUngq5%2B6x05IpbhpamWK7IYjs1iE2cJ5xZ%2FudNHr%2BrM6gmt1XBNm9Tvm9v%2F%2BHiQFw4XBGhCGUSDcFjXI49trJLlbZwkXxwHfpdNA0skCjLrJXWa0rGC71uiDmKaZwD14i4%2F9raLYlcg9TwlSoj8eAXIl6RYzh1Jo947inDGcEu7m2mqqJQHHBR%2FX4U9wAnVxeEdNt%2FAawK%2Fg1qhjSFTBkk%2BBOkS6nuyR1h6W7vgU0VcNTiKhffrWeKTJLTAgAXWpv37xbOYwgrifHuvruQcPLUKGHiGfdXZGwPBcw5CoV5rKvWTzdbffsQAmbG%2FjbpvAKjLq3FYETJ5AOFXRUYK%2FfnA8gLhuAQbC%2B%2B0fdS1aU340bpk%2FISdr3%2FFbXSj0kvtI9uygTT%2BPXAUJmZV58PUVw34q%2FihAUbWlkeSbdrFnf7x6LgA8lcPcqpiMlCslDheD5G1xu9g1byC%2F%2B5Yiaow2eapvgY6pgGiHQr0bz%2B0pCUKFuoWEoG2eoIDFI7yw9hWSftEWQfVe6X9h%2BVZXTOP5I8l82h8nyGoQJfR%2BfP%2FyReokogeKfAw%2FO0obUYqRjnBYlFdcZQJod67it3ntSX%2FKZMAa9Uhx63pRg0R85ewGytNE64zr0CSYEu5uqHIeiq39Nrr2MZcX2b%2FEnDO1TXLLOgNsD46cGJ0E7DMcAjtv7R%2FPuenFoZIafPsrsJp&X-Amz-Signature=8df51a79948eed39857152d5cbd06077f9498566513f1fb64d63456c0671c743&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGY67MR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6joNg6pzcfPNESfG7U3kuUx5EyzboOTLbPUzoOKi2cAIhAMjTTiP0VHReH7PxYGf4PFG8NUR%2Fj4e0XQdWLYCaZf0FKv8DCD0QABoMNjM3NDIzMTgzODA1IgwDRrO72FDaHOQhEK8q3AMlxn3ltjwT0c%2FjasX5Y0hpQX4TXLe7yjkCaliirgMM8KichpSKKbx0a4WvdviCL5MahS%2BJC6ifE11wvxnjC338ZDmKDwXe3S6PbZSydj5pucbb4xytX2fW1lmGgStSKm2LjTlQOj6c16ooPPWNrqtltFB6zVmG%2FetaQXJIf65obdrRkYjawn2ippbafoklwq7fHslZRnfF4v%2Fzxy7T0mO1THYZz2xFbsfiy5pzpbTzb4K31hEK4GjNmjoCqJSEi2t5EOuibqv96EonTQ3ba6Q3EPYHknxnlAYs5MNTEr7ffr%2FxRSSGNdf%2FafRznmLBo87W1gSGaxIAQnn8PchBA96RI2d2PcR5aVtWg72BMOaBaVRYHHJ1F1QXxc3YmDvVRMwSeqG2Qfe0SKgjermFEPXoeGFJAVNpyUme4UbpaDXWzW7fUOtsvLECCPn3EX6ijiCmSVHoz%2BXZe8jYCi6Gsv8t%2Bg8%2FySyLWotjMM3a2TwB%2FICKz295%2FBfAY0TrJAuXdvqw%2BcOh%2FxaYEmX1ricxuxB%2BLcebP4GXp8Z%2FH5wkOHuV8R95dFBLwN4Voq1IqYruOwWf04UTZiyXWQx63qbHFrB2DzkIwPPOrX9q%2Fob84rYDCJ%2Bo3YYUy6NsNn6FATDc5qm%2BBjqkAYpWO1vv3hMgqgLe87SS0DnEA0sGSmF9ZsNaN7b6U48jrtNCq1TVJSozYbyDmovDPF4X%2B1clkg02LOroe3r5wOvHLg%2FL16F4UOZey61eDgI2QJGIyLSXEUHY3YgKRgmo2FqeUCL%2B3ITeD5FFT%2FddvxMTmR8wACTXJ8OjhG4ulDe7ztykzOoUYUbUux6xt0bn47mmHU20MmOctWGN%2BFIehtLJBjbM&X-Amz-Signature=01ce13a539dc74cf128e7fb7948bd86f6abee019554544c07030a9f376f648a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
