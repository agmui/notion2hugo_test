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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMRJGAV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxXUS5eOskvRMZ5nKvffMmiKP5u6C4Qu3xw8lRwGQK9AIhAL%2B46D7QOjQDWaSUxjDRDVA6qkN5blnlTY7PhNsUxsvgKv8DCDEQABoMNjM3NDIzMTgzODA1IgxzIV%2BzloaHl62LU94q3APL5%2FPoUXeWKJ30Bxxa9HmFWrO45hIeDY6qUmXQO8VKuaq%2FvVgijqMO7pqPwdp4%2BtOqhrfGRNRMsCQGeCo8KG5dy7xAu5SBjOyYQmjW%2FoM0%2BRTZ1TkgXDlOe8yjNIJ8YpyqMVBG4tzCTXmexH8lfvnCyPyxVjvI5WtJbJPDvHb9C7YBNwNGa4g75sRkqHZQO1vf9oENEwT1ii3hhJgQXzVvqTlcNARlSN%2BBAtEx2Hn5R6dSR7VQKDWHTarVnoFVqx6noDrTHuSkJiPsCGvF0IIqrta%2BKE%2BVX2QJ9zWc6OYNAZOaJcFOVKZ1It4iB4b2%2F%2FgEpt9gJVcRBlJVoPxpx2dHN6D%2Fjc9bEOdK%2F1y3NgqRPPWREIPp6kYyT0KRBA%2FUiFLVl3pS%2BQaSM3CKH%2B7kVrA%2BDBfkAv9lYNQA4VB5vOfna5M%2F0ADMnZD%2Bi5XSse15M8PSaTelkN8viYo03PkssCr6UUml4rgkqeMrVTPh0UEsnYwJJjXZfZzEZBjPCuCIp2ow2D7DqM7SlaLf1keqjwGoksEEaxWZfZXtKNDQx89RZInw8S%2BQx%2FNvPI6xcJWdhVGQto2x9q6MG7n8TCTBTZLu1DBpgejasGSGBRN3GHZMPwNls6cncVOQLtI6rDDpo8W%2FBjqkAfrw%2FmC0P1EAU37LypbgR1wuGWD9v35cqh4uztzvy%2BmUDAsjGtanWsnTlc%2FWW%2FPRs3l4mmM8k9yxVK7P%2FjBHCWm9W0k%2FDfUQ7APoZpCCDaL2T5SILyheV2eOh1kg885%2BSBbEW9z2pY0dbw42xlhPXj7rmRq1C%2FzGXoaS%2BwmgbCfF4lD94PEi%2FAPKkb6xnwlzGQ9p7i56aLoYy4kVf0qusyPBkoCt&X-Amz-Signature=18f528f8722f0fcf9e29c1ee067fe139530d17ee8d75ebc93549c7070db3004c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMRJGAV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxXUS5eOskvRMZ5nKvffMmiKP5u6C4Qu3xw8lRwGQK9AIhAL%2B46D7QOjQDWaSUxjDRDVA6qkN5blnlTY7PhNsUxsvgKv8DCDEQABoMNjM3NDIzMTgzODA1IgxzIV%2BzloaHl62LU94q3APL5%2FPoUXeWKJ30Bxxa9HmFWrO45hIeDY6qUmXQO8VKuaq%2FvVgijqMO7pqPwdp4%2BtOqhrfGRNRMsCQGeCo8KG5dy7xAu5SBjOyYQmjW%2FoM0%2BRTZ1TkgXDlOe8yjNIJ8YpyqMVBG4tzCTXmexH8lfvnCyPyxVjvI5WtJbJPDvHb9C7YBNwNGa4g75sRkqHZQO1vf9oENEwT1ii3hhJgQXzVvqTlcNARlSN%2BBAtEx2Hn5R6dSR7VQKDWHTarVnoFVqx6noDrTHuSkJiPsCGvF0IIqrta%2BKE%2BVX2QJ9zWc6OYNAZOaJcFOVKZ1It4iB4b2%2F%2FgEpt9gJVcRBlJVoPxpx2dHN6D%2Fjc9bEOdK%2F1y3NgqRPPWREIPp6kYyT0KRBA%2FUiFLVl3pS%2BQaSM3CKH%2B7kVrA%2BDBfkAv9lYNQA4VB5vOfna5M%2F0ADMnZD%2Bi5XSse15M8PSaTelkN8viYo03PkssCr6UUml4rgkqeMrVTPh0UEsnYwJJjXZfZzEZBjPCuCIp2ow2D7DqM7SlaLf1keqjwGoksEEaxWZfZXtKNDQx89RZInw8S%2BQx%2FNvPI6xcJWdhVGQto2x9q6MG7n8TCTBTZLu1DBpgejasGSGBRN3GHZMPwNls6cncVOQLtI6rDDpo8W%2FBjqkAfrw%2FmC0P1EAU37LypbgR1wuGWD9v35cqh4uztzvy%2BmUDAsjGtanWsnTlc%2FWW%2FPRs3l4mmM8k9yxVK7P%2FjBHCWm9W0k%2FDfUQ7APoZpCCDaL2T5SILyheV2eOh1kg885%2BSBbEW9z2pY0dbw42xlhPXj7rmRq1C%2FzGXoaS%2BwmgbCfF4lD94PEi%2FAPKkb6xnwlzGQ9p7i56aLoYy4kVf0qusyPBkoCt&X-Amz-Signature=381b6c6a0a328ea1269e4093457d83ea19ee7d0ff67a7638b5cf9250bf941ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PO7JRRP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArFAuyCjdHE1GKcO0f3uExjBkpDsHQ%2BA0YJ9Roc%2F7v0AiEAy3iu8wT7yslPsCovtvAD9Z6XN%2ByQA3yRtqVH1NaoxSIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDG1a6itONObmKgavyrcA8z2B5mfmPJ%2BooQ%2F43Ni9YKyecQIJitrKs8FxruscmgmRKzZ8NDBSSDTJrpkU0m5Jj70%2FRbLxSMlEbTHeE%2FKNMz%2F%2BXp1dwMomas0jZDf4BfjxDOAmqKlh1xLWLnOHO0pGzuv5qcfmRPnFYZ9Lb3Ax59fodJlwbUlHAfu8SkqH7DvM%2F8iQs7gkrQjGZrU38F2GFTdTag3y1ref5hR8BdzkIakTX4nU5gD%2F8ra2Io1edo3Y0fyLXlZY5j3CRJe%2BGfBKNFWsBf1tZuJlh%2FkFO0L9lwu%2B9bykBQxu3QzYbQ0l7WWyLAmOSnqRLsie9RjcF5HgxtrBxUQkjQ01XZuIlHUr%2FbN9wlrlub6JVB6ptL6lHLOfz49%2B29aoBgAklC3yFYrfki8iX5UwokGNm%2BLXkW3xYfIFjqSRKKe47gR5hQzJpFbLi5piSf5l9plpXdQ5aabk5qiztZT%2BoOCT06JO6%2BlPaLEyIriNcuri59bkyrukdRqTLUzPyJ2Sc5yDgkD0pPicGJ%2BAUyCA%2BQh%2BiwJ%2FNAJmRvyVneBXnQwQD2FCPAy4Lir20EJRGHyTQfo625WNmfPIoOJHgCDKSsdeO30FiRdQ9tmVyjxTm2oM%2B6YEnn6bnNEZwC0PKxk3%2FrH00yIMIOkxb8GOqUB%2FRs3ubWMLnaThr8pqQU86kQolhepuwEfI%2BqDZFeJ99KDTde6%2BfCfEBABZ0aZzjaSmwzV%2FgZnj3Pe5a6H961AHv7iWSVSMiMh9FBoAf9IG6aJOyAirkNiPh2GVlraU2a2y%2F1MgL85J8lziELCZX62xyBvpN2hT1%2FpJAPD8kAiwR3MQhRkF997JHG993rh%2B1hoLnL76NaVFDnXhQ2YIiLmwAUPgisT&X-Amz-Signature=bb2bfb9e57735124fa4816815af3fbe31f845a515a8a118f8bae902750711243&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSDL4LG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuNyrxxvN6ORD%2FUOJlBCp6AAD3uOFo6Rt1FZYYEOUvGgIgJei4Jm5x9BWSUvOIUL3ocsmTZL2TsoFBaeu5GX7m8gcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAf19YA%2BhsF5LPtM4ircA0SDouFBOWJUL4wVdmrE5B%2BxAZ2dr3OkYQQZvUCkm3O7GQMp%2BjIq%2FsRBLggtRYKn5yOj6E2WOzrZWJcjIWDdevUJ72FtfPbWs8TJc0p5SoGH1bUp5Q2U8dmjinMmV84W2GQ8VXZmAnh8%2Fp5%2FgVOUnTfXd0OPGIS5Z7onTfj0o5TyyClzlBZJLTRMn2luc2CttH%2F8%2BUayvJO63RRS2NTTSMbXr1rY%2F%2Fy27Uj0GqjGpKc9RrUZCtg8xuiwKJe53ApP0FzJGuWUqMAOEX8IOlwj%2FrKjRWwUwgKUU8PKX7QEVlV1ZIWinxKrGVujJG1MiMyANYzo6YBZChYS4DVARjBWg1urGKhpRqjE82VnUnq5MAtA5%2FETkhY2DpwsxO%2BTDF28%2BLZ1ocmLCOX%2BLDIf102UjAEoWZaGJfMRMI5c2OUaaqapENKggfbrOA4kgp7%2FNCVxZ%2BrqiCKhJjzwgccXHmU0v6gKEDbJT44JwpGnCpn%2F3WnRLUVtSg4D%2BXNBTEtN%2BuiiT2vW%2BfWaRFNh%2Bnfcfnp0qUWryRV2nPOQiaOs0BEFOs%2BDUrbzUHIPokGtu3Yd2V5MypMSB%2BC3O2FuXU6MPMV2J7EKQcHOjqjdFRuIPWrVhYtoUYu5RxUss%2FAGahgGMKOkxb8GOqUBvXUfe3kAqxua8FgW82WGiSyMXkK6uk5WS4Ed7w5Tr35LVBd94ah9YiKmaY566mLMSXPw26%2F7g62D81bS%2BKdzC%2FWPU%2B2XbxDTu527foErGf05CCjw39a12G1AIaZP9EtzedrYJaq8dxism%2BD%2FNzX9XYNzE2q31Sn1LeZb1sNBDYDItG8N0z6ZF2I0y9hlyogOgn9hlNH9PZDJhj%2Buz6HoVizl2bCa&X-Amz-Signature=1de503ba2e23b9a88b0a25263bf1b5e16e79105bcfbbc7191dda364db936d373&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMRJGAV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxXUS5eOskvRMZ5nKvffMmiKP5u6C4Qu3xw8lRwGQK9AIhAL%2B46D7QOjQDWaSUxjDRDVA6qkN5blnlTY7PhNsUxsvgKv8DCDEQABoMNjM3NDIzMTgzODA1IgxzIV%2BzloaHl62LU94q3APL5%2FPoUXeWKJ30Bxxa9HmFWrO45hIeDY6qUmXQO8VKuaq%2FvVgijqMO7pqPwdp4%2BtOqhrfGRNRMsCQGeCo8KG5dy7xAu5SBjOyYQmjW%2FoM0%2BRTZ1TkgXDlOe8yjNIJ8YpyqMVBG4tzCTXmexH8lfvnCyPyxVjvI5WtJbJPDvHb9C7YBNwNGa4g75sRkqHZQO1vf9oENEwT1ii3hhJgQXzVvqTlcNARlSN%2BBAtEx2Hn5R6dSR7VQKDWHTarVnoFVqx6noDrTHuSkJiPsCGvF0IIqrta%2BKE%2BVX2QJ9zWc6OYNAZOaJcFOVKZ1It4iB4b2%2F%2FgEpt9gJVcRBlJVoPxpx2dHN6D%2Fjc9bEOdK%2F1y3NgqRPPWREIPp6kYyT0KRBA%2FUiFLVl3pS%2BQaSM3CKH%2B7kVrA%2BDBfkAv9lYNQA4VB5vOfna5M%2F0ADMnZD%2Bi5XSse15M8PSaTelkN8viYo03PkssCr6UUml4rgkqeMrVTPh0UEsnYwJJjXZfZzEZBjPCuCIp2ow2D7DqM7SlaLf1keqjwGoksEEaxWZfZXtKNDQx89RZInw8S%2BQx%2FNvPI6xcJWdhVGQto2x9q6MG7n8TCTBTZLu1DBpgejasGSGBRN3GHZMPwNls6cncVOQLtI6rDDpo8W%2FBjqkAfrw%2FmC0P1EAU37LypbgR1wuGWD9v35cqh4uztzvy%2BmUDAsjGtanWsnTlc%2FWW%2FPRs3l4mmM8k9yxVK7P%2FjBHCWm9W0k%2FDfUQ7APoZpCCDaL2T5SILyheV2eOh1kg885%2BSBbEW9z2pY0dbw42xlhPXj7rmRq1C%2FzGXoaS%2BwmgbCfF4lD94PEi%2FAPKkb6xnwlzGQ9p7i56aLoYy4kVf0qusyPBkoCt&X-Amz-Signature=ff2315ce82f30d95b9612ca942d082e4e35b00d1596a3203c844f6a759cbd456&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
