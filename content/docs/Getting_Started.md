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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUHTYTOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Fw7VAuOLdvibLVtIdBaUuuH9IikE%2BACUZCwAdavSf7AiEA%2BajG1er739p66gwAtiiynLxyCBrZW4yJJjj1XT4ITSsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtJYtqIXDFp5GCcNSrcA%2FaDQ%2BekFRUkYQK5CGS2oi2XyPburFnmse7ECFKx2ASnFkQgBs%2FiZkpqNqJL8HOKhHpLYi3mfHfcIVyroaHNgRX8cKtjmduqVtMdnQFuqmVquDskaZt8T3Ex%2BMvMbQ5wsjt86JMgD4nk%2ByU0unn87EANGw8X7ZF%2F%2BYJSZaWYGCt0tEfDGLXuvN6b8KC71E0vHNEOkW7hcuTD19g8Z4%2B%2FRiDlkHS4j62qNbaqgU%2FyOAdv%2FDQCeET8LZhw8JMIOevJ%2FbEinJlezZ4vUjh8WAQpHZS1Vs3vYaIDQ4vhN%2B9aRhXgU6dxDg4Issd0naiVWNHOu8IjTtqcCvqHJh3RQ7sTzcHcSVPyCCkcg4R67mliUZRUZJ1ENYKLIQNhF7vTmzDqlSlzO%2FaHRdQ0AlPLMmFsR9Kp7kMrOCcfkXDyxywV%2FZyTbJPNSI%2BxBTxXElQBNhxxQ828m8sLkSzsxRuEj2j6uz7p5IxmnoHSEDEXiam3OY0QZzhfIDRZtvE4x%2FQZ67kdXtDyeyckaIvmn1jnTYPiGg3y766DFQ7Tj19n%2BDdGw0muk7rzBstQsx57CFoPIM8foAMaDAsXlhrcjbR7Ofhj%2BU7RDgp14pwySe2hjznraieeoa6Fy1ON7WXafVh6MNXL6r0GOqUB8yNCnQf727EV5fpA%2BsXkOL9xNz0ny27j4RuSHwwQTJl3prmLuO5ujB2O1qF%2F1bz83JsqIGUiNtvhWb1r9KV5XaNsA5G%2BfK%2FdeMVJ8rWSUslzi%2Fog60cPvN5qfBmKXnbHLc%2BBKkHzPqfB5UrVWL%2BB5ma4iV9XrKiQVkrqsOCz9ml1DOnjegtLsY%2FjOFE1HJaXCGblEN3UFTsEXk8oZEhNmpfpRKvl&X-Amz-Signature=9e1f1689ba1bc649c509b468d769c010fd1ddefd47b7c0dd8484e686ea85ff24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUHTYTOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Fw7VAuOLdvibLVtIdBaUuuH9IikE%2BACUZCwAdavSf7AiEA%2BajG1er739p66gwAtiiynLxyCBrZW4yJJjj1XT4ITSsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtJYtqIXDFp5GCcNSrcA%2FaDQ%2BekFRUkYQK5CGS2oi2XyPburFnmse7ECFKx2ASnFkQgBs%2FiZkpqNqJL8HOKhHpLYi3mfHfcIVyroaHNgRX8cKtjmduqVtMdnQFuqmVquDskaZt8T3Ex%2BMvMbQ5wsjt86JMgD4nk%2ByU0unn87EANGw8X7ZF%2F%2BYJSZaWYGCt0tEfDGLXuvN6b8KC71E0vHNEOkW7hcuTD19g8Z4%2B%2FRiDlkHS4j62qNbaqgU%2FyOAdv%2FDQCeET8LZhw8JMIOevJ%2FbEinJlezZ4vUjh8WAQpHZS1Vs3vYaIDQ4vhN%2B9aRhXgU6dxDg4Issd0naiVWNHOu8IjTtqcCvqHJh3RQ7sTzcHcSVPyCCkcg4R67mliUZRUZJ1ENYKLIQNhF7vTmzDqlSlzO%2FaHRdQ0AlPLMmFsR9Kp7kMrOCcfkXDyxywV%2FZyTbJPNSI%2BxBTxXElQBNhxxQ828m8sLkSzsxRuEj2j6uz7p5IxmnoHSEDEXiam3OY0QZzhfIDRZtvE4x%2FQZ67kdXtDyeyckaIvmn1jnTYPiGg3y766DFQ7Tj19n%2BDdGw0muk7rzBstQsx57CFoPIM8foAMaDAsXlhrcjbR7Ofhj%2BU7RDgp14pwySe2hjznraieeoa6Fy1ON7WXafVh6MNXL6r0GOqUB8yNCnQf727EV5fpA%2BsXkOL9xNz0ny27j4RuSHwwQTJl3prmLuO5ujB2O1qF%2F1bz83JsqIGUiNtvhWb1r9KV5XaNsA5G%2BfK%2FdeMVJ8rWSUslzi%2Fog60cPvN5qfBmKXnbHLc%2BBKkHzPqfB5UrVWL%2BB5ma4iV9XrKiQVkrqsOCz9ml1DOnjegtLsY%2FjOFE1HJaXCGblEN3UFTsEXk8oZEhNmpfpRKvl&X-Amz-Signature=3ee69d2f201ef1d53bd58c885a0a4c7b7783e97ddc996a0a6c993f945f846d78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG5TCAX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlkgHGVW10LzK5qxtpIm6FHnebEGHIRX2eIzJTe%2FSL9QIhANzEONMHcrfX5FKudsWO%2F1yN6zVrc2Q%2F8aogxTu78Z7tKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsi0T%2BRyrEv6ztCFIq3AP3sZyHo6awhID%2BGv0JSkrpN3bMAy0pCZejoZ4BbpTUIttYLeO%2Bdb5BgB81fU6KZU%2Fyji7N5bVaKtEeb4fdRZijYpDLY6jDaZxiO%2BOqPV0CFincNrkpWgqJcvyIuZrR6LMi1z4VJJZvF55uu2bpFLAIny7N3YcovUgx1JuaOyj3a8xO79BY6Nliz5Kl%2B6MHv494DTkh4u9zmyR6UngqebdTROeyjUms2hbOyT8ce6SGpYsOjcgObSt6L10BVnDUMqgFoKKm7k3Qq0WVknH0Lg0feQATlv7gcOsQLBFEWf9U78fMLavyRnYJ%2FkgrPGoicVMYtastSwexjkoaRS03PzPf4x8i%2F2MA2Cw9HkspWlBPXmKhq80EjTOhroaDzkck%2BoY5jcvkDr5ZJ9llC5PYQARj8WHgjObuoEoMiprnOlx1p4ocqltKaMDLZXYdQtbeux0Or8n9CI9ysoeahc3gOu9kdbRFlpuAi4h1rXk0kz2kMOrlnKkpA5N4LKKbWKOJ4o8twXBdTFFLv2m%2BKxEOKlJSLdd1k6kx%2BUGHoexZJrkGlctcDOyTiSYWq38nPnXvZxw8KB89wVyQThy61jqzMaGcr8gRdpeC8VsUzy1eikvWwuOnU0Ighj2xu9VrmjDhyOq9BjqkATzuViPFOXh%2FkSNeK%2FUjSzLJBNRf3957DsP9n29etQa7ZZSXgRuQRvBkBCbCKAmhx5VLemWWSrJ5gbHVHPBWkOj3o7iyHC6ArOVlN3ZYmmi4nrTKBQR4Me5Jv8TSYqfkPZM9%2FX0bpGmXZWtXAQIhBHBfzTdQgchZ%2FI7vIbnGLwlqda0noDTzfXuzFfrXiLxZBmm7HdkEVDy5NA3SS6H7Piw0MBlV&X-Amz-Signature=49bdfd281cd64a64b0a371c723d312f26368ebe93ed9c2f2300423350df3361f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=f82e19232275f82185b7524d67fd67ed5444380e53179bd57700c6d6eefafc46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUHTYTOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Fw7VAuOLdvibLVtIdBaUuuH9IikE%2BACUZCwAdavSf7AiEA%2BajG1er739p66gwAtiiynLxyCBrZW4yJJjj1XT4ITSsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtJYtqIXDFp5GCcNSrcA%2FaDQ%2BekFRUkYQK5CGS2oi2XyPburFnmse7ECFKx2ASnFkQgBs%2FiZkpqNqJL8HOKhHpLYi3mfHfcIVyroaHNgRX8cKtjmduqVtMdnQFuqmVquDskaZt8T3Ex%2BMvMbQ5wsjt86JMgD4nk%2ByU0unn87EANGw8X7ZF%2F%2BYJSZaWYGCt0tEfDGLXuvN6b8KC71E0vHNEOkW7hcuTD19g8Z4%2B%2FRiDlkHS4j62qNbaqgU%2FyOAdv%2FDQCeET8LZhw8JMIOevJ%2FbEinJlezZ4vUjh8WAQpHZS1Vs3vYaIDQ4vhN%2B9aRhXgU6dxDg4Issd0naiVWNHOu8IjTtqcCvqHJh3RQ7sTzcHcSVPyCCkcg4R67mliUZRUZJ1ENYKLIQNhF7vTmzDqlSlzO%2FaHRdQ0AlPLMmFsR9Kp7kMrOCcfkXDyxywV%2FZyTbJPNSI%2BxBTxXElQBNhxxQ828m8sLkSzsxRuEj2j6uz7p5IxmnoHSEDEXiam3OY0QZzhfIDRZtvE4x%2FQZ67kdXtDyeyckaIvmn1jnTYPiGg3y766DFQ7Tj19n%2BDdGw0muk7rzBstQsx57CFoPIM8foAMaDAsXlhrcjbR7Ofhj%2BU7RDgp14pwySe2hjznraieeoa6Fy1ON7WXafVh6MNXL6r0GOqUB8yNCnQf727EV5fpA%2BsXkOL9xNz0ny27j4RuSHwwQTJl3prmLuO5ujB2O1qF%2F1bz83JsqIGUiNtvhWb1r9KV5XaNsA5G%2BfK%2FdeMVJ8rWSUslzi%2Fog60cPvN5qfBmKXnbHLc%2BBKkHzPqfB5UrVWL%2BB5ma4iV9XrKiQVkrqsOCz9ml1DOnjegtLsY%2FjOFE1HJaXCGblEN3UFTsEXk8oZEhNmpfpRKvl&X-Amz-Signature=99addc01b3056a9aaf4b251d52265761d95087d1b4ac254516e4699f2d83507a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
