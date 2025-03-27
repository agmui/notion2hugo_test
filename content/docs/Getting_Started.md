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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWCEVWL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctuOf9npiYcrUodB2t8mn1q1U8ZtyN3MVrd5dEnLQmQIgIpzPUfvRNTWb%2FpwX%2BOCUcatJzl%2BC7NHx3DQmSwKm72Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDZRBIFZRCm39ZhShSrcA%2B9gfgIhm5EwDP%2BqK%2Bc8xCuyrd09uN8ZR9C0TRAfH87EmsVCvo9qmVphUvWT5sgnSzkCPPJgmhAgfuNYlusRlDKuoboyQSRgFCQTKp%2B6A7uPrK%2F5BtkIkkAPdB9pIaCA%2BafvhEFnjWSHuX39jfssxolX6V59vZ2kGmzICIsLlsVUqI28b9Gpkif1%2B%2FCUaxi0MSZcJO5DcjUsQ0gHZwUtf90JAmvQGx5gVrsivGzx%2FQbOa42i1AJ8uAuHknaXmSAVYru%2BHywa3Y7ThuAQKULwO3iWShrOzce3gB7hofYgV3Uf21wDC40uosBcAQEkKOlx1svCFSy%2FNGN77gn0BlDs80sETbLSfN1lQ5PeH4Wj7754ykLiVxk04zL8el3xR2xaKK9pOPUG0g4oveLCyaMH8F8MicS%2BsFkWlPC64vWgKwF9lJzs2UOG2qIjYf%2FVi7wFP3AUR1nJaYLtoXJeOX72QtwVI%2Bwg5wTO1Y5UotBZjhLDKwVQ6Ek2gurq8L5RMYIvdNVZYb8cZ6pHIf7cFqxKF%2FcZHah%2FFO8WOUBNtq8Su2qv7xCTXQQCBMjdT6zwTTxP7mzQstaRc3UlLacgHi%2BQHWwUrB1PnR6Sk1updHKRd20ijutprMH7SNssnenVMIqhlL8GOqUBFeyjUfcEKkMMFd%2FLtL%2BmvFzi9ZJlnzWxPNuMJqLx0NAO6t3gnVCaZ7y%2Fn2PxCAmIOOyza3mBxLW6QM2%2FiExww51CbNDXMPNQoyML6UDF8QQb%2F%2BKi02Ebdc6bOFirm3ZaPgrX5hFoFb7yEAEq%2BWREueV%2BA2uGdo5MNVA8wmzizofJj1H6G3iOcyxrhPlRjvTXsrG7OPspaEbXO%2BzTV8QX0UqpFOsv&X-Amz-Signature=1751280e18ea678beb3b511640d09c78aa5f9634906fe7ff71632fa2f74ffcb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWCEVWL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctuOf9npiYcrUodB2t8mn1q1U8ZtyN3MVrd5dEnLQmQIgIpzPUfvRNTWb%2FpwX%2BOCUcatJzl%2BC7NHx3DQmSwKm72Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDZRBIFZRCm39ZhShSrcA%2B9gfgIhm5EwDP%2BqK%2Bc8xCuyrd09uN8ZR9C0TRAfH87EmsVCvo9qmVphUvWT5sgnSzkCPPJgmhAgfuNYlusRlDKuoboyQSRgFCQTKp%2B6A7uPrK%2F5BtkIkkAPdB9pIaCA%2BafvhEFnjWSHuX39jfssxolX6V59vZ2kGmzICIsLlsVUqI28b9Gpkif1%2B%2FCUaxi0MSZcJO5DcjUsQ0gHZwUtf90JAmvQGx5gVrsivGzx%2FQbOa42i1AJ8uAuHknaXmSAVYru%2BHywa3Y7ThuAQKULwO3iWShrOzce3gB7hofYgV3Uf21wDC40uosBcAQEkKOlx1svCFSy%2FNGN77gn0BlDs80sETbLSfN1lQ5PeH4Wj7754ykLiVxk04zL8el3xR2xaKK9pOPUG0g4oveLCyaMH8F8MicS%2BsFkWlPC64vWgKwF9lJzs2UOG2qIjYf%2FVi7wFP3AUR1nJaYLtoXJeOX72QtwVI%2Bwg5wTO1Y5UotBZjhLDKwVQ6Ek2gurq8L5RMYIvdNVZYb8cZ6pHIf7cFqxKF%2FcZHah%2FFO8WOUBNtq8Su2qv7xCTXQQCBMjdT6zwTTxP7mzQstaRc3UlLacgHi%2BQHWwUrB1PnR6Sk1updHKRd20ijutprMH7SNssnenVMIqhlL8GOqUBFeyjUfcEKkMMFd%2FLtL%2BmvFzi9ZJlnzWxPNuMJqLx0NAO6t3gnVCaZ7y%2Fn2PxCAmIOOyza3mBxLW6QM2%2FiExww51CbNDXMPNQoyML6UDF8QQb%2F%2BKi02Ebdc6bOFirm3ZaPgrX5hFoFb7yEAEq%2BWREueV%2BA2uGdo5MNVA8wmzizofJj1H6G3iOcyxrhPlRjvTXsrG7OPspaEbXO%2BzTV8QX0UqpFOsv&X-Amz-Signature=aef32e222d02b8e21505326a636b72b8960939662f78e416845fc5eacd40350c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LIOIX7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCidZ17GAbhyLOibquZivbp%2B7vvsL9cijbXK5%2BnGYV1igIhAJ26QfQI8CxGKPyR%2FA3PjIh07J6MGd%2BiUYMNpuIEnDwUKv8DCEIQABoMNjM3NDIzMTgzODA1IgzVbGqgrQUAqK0H8Qgq3ANf1ss%2F6q04hcXee7E0hdITuAh3l%2B3VKBSsVryjI9%2FFkFojVTX9879M0YRc3PcR7zXg7urX%2BW4mbETELMC0MNX5nVMBHFAvPqBYfb%2FyNsl8MjnZMAEb5iYA2wv3eE5HXWXq49kb0qdhq94QXkCM%2FZXr5%2FfJ2SyxpE5C9onCao81ixsKNyjfD7uIK1CDecTnseiq2RBQ5%2FZwfhMwiQuvKd4rPgVQoeF8fupdyVzA5azt33fUjT7wqpsBlhFLUKgilYUnWa9NAFzCVl3cGdVh35eiB4mPMuPaxUlzCIeqRhlhQYjDH3sRdrjiE7IsPa1QdB6F%2FP%2FIJjsPr%2FqksWBZmzVDbDRajOxcIBeEehO3f6SC1o%2FBEdvlTDiiPB0SZQQdeD%2ByEM8%2F%2FkoMycqOWYTa2B9K4vA5K06wT4dLiKTr%2FTqcemJwsMcO6KWmyZXfQGCXeNECU4PpuWBE8ec1zCGvOll9RqemwfRpbOy8sReIsyKlbTXChUgEvhnwVSvqSrNMk7Z%2F5qEH%2BNfzf9WRTGEfUG%2B%2BZmqrWAVAO45vcLwzq%2FXh%2BE0bJ6B97eauIBhdeCxN9%2FcvyTtSelx2PTVU2i%2BKy0qgIt92IDqRjTXNTsZiHh849EZygDyvpUxBASvUyTCBoZS%2FBjqkAc8slw%2BbVUN3SCVQp6tNl1QBIrEHbdcKP6F4x%2BqTcZwT6rH1jilai%2FvgdIDYt1GvgU6uLl2ZABLzEyXx9eAymPjkh2dIJH519ZAPirdF2CG%2BpPZV1%2FvrFyuev6w8ifZHX%2F%2FRiFLTRzA%2BgiNJ%2FfNHyeE7hiTnhxZokE88FQ1YElphRHCJSDG960Xcu%2FVmsPgLkgOSuGPe4pMf4ZvnjVRUN9QeWYll&X-Amz-Signature=cc7e2d5973c8c8259f694b456e113bbf5a1d525481262818f9ef491f757a0c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUET2QO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwFlH%2BPv%2Fnbso0c%2B5x0HxKYY2b0roxHjaeBPGvEKJAYAiEAj210mXSlYrylTV1HjzM3BdpRCVbwIlTgxHNIhy9fsgEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGrbAC0DBZobbZWW6ircA3ZWp3nEK1Es0T0xWjYP0x6Ev75T7OWrM1B3b2NxV50YQ6SU6hL%2BLAPS2mota%2BfRgbYxeWzLuPf5DxMvvCP7LyQ02r92TA%2FF5btPUft8sueZey215z0H7Cdtyw5y1IKjHUVyoukvHNh0JCO0mvimk6emFHErHskVzJ3iAQaJNjC5wQme%2Fk4hQkcAdRFs%2B60LNnfueTVPGeZ2OSpLv3aGBMnUyco7NMpI3QNlLBkTn2kt5SKiox2f6iAhu7mhEdp6VCftnIyJtlO%2BVHU6UuVLW47%2FIF%2BmKF5dpnYbn%2BhJg3Fv7smZoWquzzDsbAQybbDQH9tOqlh3ljMxEM7INqVXP6GQBfytpxRCa5TbFIsknOTkPy%2FrPKz%2FWKA7S1uK1FH0%2FlxWU2F0FCR0ljgTmJ6AKm0v3wzBp3lY9kmWWDxVJPiz3NCOe7SkGTjG558pbUzbXN%2BuOwpOpvN%2Fv8rEBWtigcUUbBxmJruKmUMlFxOdSNK7ZLsCEerJLoDIsJbjiPhP31Z79IXohG%2FcgOlO5fUO2KzudRsT%2BlKHMq0BOwJWyzNYqgwLiXdrIgrHhhfcUkr%2FVJxwP8ffMXa0VqpnBIeO73Cq9QulUfEm6OlhNYRBEM1%2F9bjK6ml%2BOTBZdcbKMJehlL8GOqUBJmpj2MADYhnGDHGfNvsXXikdAUB%2BXBWTOktWSsBwTDWt8kwneXQ2lHwNPfQfeyr2dedZ5DTQYQvhtQ0kR0GuclKrKi%2Frj7j3Omx%2FHvW4ZWBNpDEQb1UPx51aA%2BsM1cjjd1bVpZuNdNhvYaj016QdXpNhlsndT6MJunxU4A9WF2DIniBZWAUDXkLM91L7hmYW9BDHUcEf5Rd0v6wujo7tcmhkC4g%2F&X-Amz-Signature=92f96154baf9a8fecb5323c0bfe96c3cdbf5021407384d92380ea9b673e9f66c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWCEVWL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctuOf9npiYcrUodB2t8mn1q1U8ZtyN3MVrd5dEnLQmQIgIpzPUfvRNTWb%2FpwX%2BOCUcatJzl%2BC7NHx3DQmSwKm72Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDZRBIFZRCm39ZhShSrcA%2B9gfgIhm5EwDP%2BqK%2Bc8xCuyrd09uN8ZR9C0TRAfH87EmsVCvo9qmVphUvWT5sgnSzkCPPJgmhAgfuNYlusRlDKuoboyQSRgFCQTKp%2B6A7uPrK%2F5BtkIkkAPdB9pIaCA%2BafvhEFnjWSHuX39jfssxolX6V59vZ2kGmzICIsLlsVUqI28b9Gpkif1%2B%2FCUaxi0MSZcJO5DcjUsQ0gHZwUtf90JAmvQGx5gVrsivGzx%2FQbOa42i1AJ8uAuHknaXmSAVYru%2BHywa3Y7ThuAQKULwO3iWShrOzce3gB7hofYgV3Uf21wDC40uosBcAQEkKOlx1svCFSy%2FNGN77gn0BlDs80sETbLSfN1lQ5PeH4Wj7754ykLiVxk04zL8el3xR2xaKK9pOPUG0g4oveLCyaMH8F8MicS%2BsFkWlPC64vWgKwF9lJzs2UOG2qIjYf%2FVi7wFP3AUR1nJaYLtoXJeOX72QtwVI%2Bwg5wTO1Y5UotBZjhLDKwVQ6Ek2gurq8L5RMYIvdNVZYb8cZ6pHIf7cFqxKF%2FcZHah%2FFO8WOUBNtq8Su2qv7xCTXQQCBMjdT6zwTTxP7mzQstaRc3UlLacgHi%2BQHWwUrB1PnR6Sk1updHKRd20ijutprMH7SNssnenVMIqhlL8GOqUBFeyjUfcEKkMMFd%2FLtL%2BmvFzi9ZJlnzWxPNuMJqLx0NAO6t3gnVCaZ7y%2Fn2PxCAmIOOyza3mBxLW6QM2%2FiExww51CbNDXMPNQoyML6UDF8QQb%2F%2BKi02Ebdc6bOFirm3ZaPgrX5hFoFb7yEAEq%2BWREueV%2BA2uGdo5MNVA8wmzizofJj1H6G3iOcyxrhPlRjvTXsrG7OPspaEbXO%2BzTV8QX0UqpFOsv&X-Amz-Signature=f57920ce46f05ab1ca55d84b350f9a1a680840b303c2d8ea3e4f0b22967f9830&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
