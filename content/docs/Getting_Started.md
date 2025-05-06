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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZX5WWSA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4JR6YK37AC8N%2BTAd0tQhImK1q%2F7FPRDNSSvRIXBLUNAiBKwXjs08qG1fPfghoki2%2BPnUFUlJB2z6s8WbAlQ%2FwwwCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMk4GJcuPEUe7lF3b8KtwDt0k4jUzu0U7SYC54yUBObzNikEbbhn1sTQkWWUSH7mrq8fXPmCgAjm7mC8IIhVey6pkrYWs2q4%2FIm8O2asAHvUnsLIaEF0PM1jA57WTYXELGnDKTX%2BBss7GmA36xJzkxC1OD21rO4z4TG39qz6cw3RnkU%2BWeRZqN%2BaysPHU3NBagromZ1tu8Vt1wk8IqfX3Bxkvz50sQWNFwEwWRwpWGhLoxrzjqpREASPDTrF9KcJ6xW%2BTRJXZlvhdnL%2B4ANY5XdAYybMGzQihZGSmUEAtuJsmKaVxTKh2woFvTSvdfVltlxZS0UxaoI9KYIN4qlueed4CiP6PA6fWSCeLda%2Fsq%2F5X2ZjM%2FVVfzevrWUE9BzzsOPYFfsLDxypLqiPufBdYN7rvkBQ2JmfAmHIYKkGSdtiR66Ai6LFbEeFRwMKKTljQxoAMSyFwxKGd%2FoGI6h4pSguimw9xV7681jZumxZBwBmBHby4hy0IzXekTpnNqyoj9iabCQFPUS8Vp0XMw4S%2FL852lYQr%2B9znW%2BZy9zgzf9XEyv%2FT7Aq%2Binw6dAm%2BYI0DwtlqVu1Q3MRhwd1etYz5WkWKI6Z1itazjZg63ueX4pUQqLZUwMDFpNI%2BWqJ5YA2d%2F8qcZJ1tWaeuUf7ww%2BpfowAY6pgGA2KddH16%2BD0A1gOvQ5jZMb9eKRsX57mPkujjzAU5ZYvmVVEfe8wfhDGNE%2FN5TVTSLZbUwx%2FXAeybbwKAgiKp1nQKGOuABeRr4L%2B9MxazBpPm22KEfv%2BDwNLZKKeJEmKEj28vWjaf3s6ZHF3ws7u240hlwZY7KPSW%2Biv85gWUsbkc1uQazK5hPljjnaVcYbD7Mb7EYmRCfip1kEtzby04wlLq21fMw&X-Amz-Signature=dad1773e0637460d43038a2d5e79ab469eb2270a600e9d1aa76467fea60d6901&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZX5WWSA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4JR6YK37AC8N%2BTAd0tQhImK1q%2F7FPRDNSSvRIXBLUNAiBKwXjs08qG1fPfghoki2%2BPnUFUlJB2z6s8WbAlQ%2FwwwCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMk4GJcuPEUe7lF3b8KtwDt0k4jUzu0U7SYC54yUBObzNikEbbhn1sTQkWWUSH7mrq8fXPmCgAjm7mC8IIhVey6pkrYWs2q4%2FIm8O2asAHvUnsLIaEF0PM1jA57WTYXELGnDKTX%2BBss7GmA36xJzkxC1OD21rO4z4TG39qz6cw3RnkU%2BWeRZqN%2BaysPHU3NBagromZ1tu8Vt1wk8IqfX3Bxkvz50sQWNFwEwWRwpWGhLoxrzjqpREASPDTrF9KcJ6xW%2BTRJXZlvhdnL%2B4ANY5XdAYybMGzQihZGSmUEAtuJsmKaVxTKh2woFvTSvdfVltlxZS0UxaoI9KYIN4qlueed4CiP6PA6fWSCeLda%2Fsq%2F5X2ZjM%2FVVfzevrWUE9BzzsOPYFfsLDxypLqiPufBdYN7rvkBQ2JmfAmHIYKkGSdtiR66Ai6LFbEeFRwMKKTljQxoAMSyFwxKGd%2FoGI6h4pSguimw9xV7681jZumxZBwBmBHby4hy0IzXekTpnNqyoj9iabCQFPUS8Vp0XMw4S%2FL852lYQr%2B9znW%2BZy9zgzf9XEyv%2FT7Aq%2Binw6dAm%2BYI0DwtlqVu1Q3MRhwd1etYz5WkWKI6Z1itazjZg63ueX4pUQqLZUwMDFpNI%2BWqJ5YA2d%2F8qcZJ1tWaeuUf7ww%2BpfowAY6pgGA2KddH16%2BD0A1gOvQ5jZMb9eKRsX57mPkujjzAU5ZYvmVVEfe8wfhDGNE%2FN5TVTSLZbUwx%2FXAeybbwKAgiKp1nQKGOuABeRr4L%2B9MxazBpPm22KEfv%2BDwNLZKKeJEmKEj28vWjaf3s6ZHF3ws7u240hlwZY7KPSW%2Biv85gWUsbkc1uQazK5hPljjnaVcYbD7Mb7EYmRCfip1kEtzby04wlLq21fMw&X-Amz-Signature=53631ac767c91d1568a1ea0c31bc62168afe10cfb4af6a928f52ef3e841b9796&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZX5WWSA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4JR6YK37AC8N%2BTAd0tQhImK1q%2F7FPRDNSSvRIXBLUNAiBKwXjs08qG1fPfghoki2%2BPnUFUlJB2z6s8WbAlQ%2FwwwCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMk4GJcuPEUe7lF3b8KtwDt0k4jUzu0U7SYC54yUBObzNikEbbhn1sTQkWWUSH7mrq8fXPmCgAjm7mC8IIhVey6pkrYWs2q4%2FIm8O2asAHvUnsLIaEF0PM1jA57WTYXELGnDKTX%2BBss7GmA36xJzkxC1OD21rO4z4TG39qz6cw3RnkU%2BWeRZqN%2BaysPHU3NBagromZ1tu8Vt1wk8IqfX3Bxkvz50sQWNFwEwWRwpWGhLoxrzjqpREASPDTrF9KcJ6xW%2BTRJXZlvhdnL%2B4ANY5XdAYybMGzQihZGSmUEAtuJsmKaVxTKh2woFvTSvdfVltlxZS0UxaoI9KYIN4qlueed4CiP6PA6fWSCeLda%2Fsq%2F5X2ZjM%2FVVfzevrWUE9BzzsOPYFfsLDxypLqiPufBdYN7rvkBQ2JmfAmHIYKkGSdtiR66Ai6LFbEeFRwMKKTljQxoAMSyFwxKGd%2FoGI6h4pSguimw9xV7681jZumxZBwBmBHby4hy0IzXekTpnNqyoj9iabCQFPUS8Vp0XMw4S%2FL852lYQr%2B9znW%2BZy9zgzf9XEyv%2FT7Aq%2Binw6dAm%2BYI0DwtlqVu1Q3MRhwd1etYz5WkWKI6Z1itazjZg63ueX4pUQqLZUwMDFpNI%2BWqJ5YA2d%2F8qcZJ1tWaeuUf7ww%2BpfowAY6pgGA2KddH16%2BD0A1gOvQ5jZMb9eKRsX57mPkujjzAU5ZYvmVVEfe8wfhDGNE%2FN5TVTSLZbUwx%2FXAeybbwKAgiKp1nQKGOuABeRr4L%2B9MxazBpPm22KEfv%2BDwNLZKKeJEmKEj28vWjaf3s6ZHF3ws7u240hlwZY7KPSW%2Biv85gWUsbkc1uQazK5hPljjnaVcYbD7Mb7EYmRCfip1kEtzby04wlLq21fMw&X-Amz-Signature=a12463bc375c0e27cd7829a3fe445935179b562bda8ceb922a71c0e8161b1cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77JKWPO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIaZkD%2B%2F4TJDKHth7bWfbgB9tNiX1Ny6jj3b4uwspUHQIgV0M1Om940yUzvx8Iag2uHGC%2FcFFwp%2F3Y2HJhHZjm%2FeIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCoALu5FuW7zHSxZrSrcA%2BMedfhFE%2FiXBHoKVo0Uq6uplptYc7KmvhipDo81a6vUF5fZGRrR8QZ9RapI5bnaXuDk3b6xikfhhJXqYA4NU1bAEZz21XZ6PJwpBNkxazfRo0svGyasn%2BthYSCFWMWc4340DlEZVxVC5pxe7K%2BXqcYVpzYjRGm9FB1OYm28HNvigSK0rIjLriwMFb6qCjNn5Zi2c%2BnpBMlF4W4KOSmqfYRRq1cgkMVOlMsi3Omp2urS4NHn3xlsLrOGBkCzaE6usOGUyNbuZKKx6Pn%2BWelc3sQy5YE4vJiOMw%2BWbaYklp8xG7wjYOX6C5dXVikIL63mBqw8d7o23lmxqafpVi98NRGqN%2FVBA4P2OlYwHyaZAKBZe5y4aVKDr1Wo%2BZXhIk2SdTgJ5cF9RvEAm0vwslHwI1UZfYtKnzmUrqgO9klegMcnpKYuJ%2Fc2qdxREiWNCCDFMKinM%2F8Sp326IUm0CXDZpAs7yWWCLq0wVTpxRGxyUVC0mRT%2Fz4iI9grN7MuemZRSV5fqYZ3zBiAEjRTrixlAoRFPORgbuSsAzVXzLtP5maTTFEsIWqIa4p8VqMfJjDA0sgkGXG66zQGn%2BlwhXoBh%2F8WnPN2Yn%2FcTa1SEnRvpPbCxttOq0sXOTI1m5vBKMLiY6MAGOqUBmVXJ0hd4wCVGJiQR4jI8AVMKOuKznn3CmxbHhvuFtvCm0nNyZpiDp3OLieF8c8oNzGCuWhjMHB2nnSOP6PzQgT5Tf9A0K%2FRZkj9VWaRfJlECgk3NLLXirm%2BIJ3PPs1waxOA7I4TbaqJg3%2FE9CHSBvRbsd64yOQtRIiM4vDMAGCHuWIbMSJqKrDMjSCu6aA4BPTIZ3s%2F2quLU5Srtjq1zOCekTH18&X-Amz-Signature=4b9aba1da2e77054bfea743ca7d0f4c413d266abdcbf37f3c828671aa0614c83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADW4BL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNuwe44JpvxmGb6AFMwiTvook%2Bb%2BW3MuvaYF5xwx6FeAiEAo9AOH0l1pUPQ7U%2FuCx0hYRqfijGz3ZWNtLgzKlQgUfkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLXbr9FAOYHCOkzhBSrcAzOL%2FJ7r004kzBAQ9pycMeHW95fMi8BVbgwn7kmaO0YToVRHt%2F4%2FKTN6p2IWwLcZ%2FoHMoWCXcMFrFMWPqyTjywDSvTJ4P0HnyvmNF5j15P34F5DapaeA7Z8%2BARCfTJ2MefHnZLLWAbHUDn9Obu9bJo%2Fks1gMctRYF52lDeKg461fR7WL4%2FgrEbjcODiEkGo1%2FGw6LEMYtwKHXqYFCBtDwyI3zzgq53Map7WbYSKt1NVuBpZeP3jETHlCEt%2F7i6KJdUq49OzY5wsm7iAL4juWtcInEywzer8f5MZV2Ron1et0vIc%2Bsc82tNmSs0WgeeZ4wzEFbQEGk%2Fl0sWgLDkgdOzK36EpwKaE%2B5Ut0GvxulpbVp6bY0JRc6CKK7AtOfB1hASDVl4Yz7GFc5lJYkmKPoM33aVdPjD%2FBgTjFBna%2FKcjg59%2Bf7C%2FOqimT4ibvpYoHoy%2ByQ%2Bt%2BPcNDO4f3OLwXz3XqCEMGFVlNIKllkTlTd895v8etItcxSs6rlW85rSn3gQ%2BIwZN163wKG05y0c4TIJnzRi2hK5zzE4J0QMwVn5xYutQ4qib6QbjCKA67HDvp8f9b1YXI3v7fkaiaGdZhvXKhhpEpDfgN7P86XARQ0hGh38Qxv28KbM6%2F0taBMNCY6MAGOqUBql5CmtS33gHZKLU2dQrFVfb5GWY1DqZXo2Yca4LZFdEvbTbDCbIRhLPRo8j83OJ%2B3bmblL69RR0OqAipqVQ4u7Oaz4sx0bOc8yvPZLUIKp%2BpiEpMTsZWFeeo3ThtmOmkzf0v05yqOWYlZgCYaAozuqs0dXx6r1nryyI%2Brr2p7VkLEMJELtgpMS%2Fp%2Bn8%2FJgXr0ZB0rPtZcxMLyqfAn7xDoq6PhwA7&X-Amz-Signature=2d58907c0b8131f789cb0c4b0e851f9ea3d7860a56e72d3c225194d6cdf8b8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZX5WWSA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4JR6YK37AC8N%2BTAd0tQhImK1q%2F7FPRDNSSvRIXBLUNAiBKwXjs08qG1fPfghoki2%2BPnUFUlJB2z6s8WbAlQ%2FwwwCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMk4GJcuPEUe7lF3b8KtwDt0k4jUzu0U7SYC54yUBObzNikEbbhn1sTQkWWUSH7mrq8fXPmCgAjm7mC8IIhVey6pkrYWs2q4%2FIm8O2asAHvUnsLIaEF0PM1jA57WTYXELGnDKTX%2BBss7GmA36xJzkxC1OD21rO4z4TG39qz6cw3RnkU%2BWeRZqN%2BaysPHU3NBagromZ1tu8Vt1wk8IqfX3Bxkvz50sQWNFwEwWRwpWGhLoxrzjqpREASPDTrF9KcJ6xW%2BTRJXZlvhdnL%2B4ANY5XdAYybMGzQihZGSmUEAtuJsmKaVxTKh2woFvTSvdfVltlxZS0UxaoI9KYIN4qlueed4CiP6PA6fWSCeLda%2Fsq%2F5X2ZjM%2FVVfzevrWUE9BzzsOPYFfsLDxypLqiPufBdYN7rvkBQ2JmfAmHIYKkGSdtiR66Ai6LFbEeFRwMKKTljQxoAMSyFwxKGd%2FoGI6h4pSguimw9xV7681jZumxZBwBmBHby4hy0IzXekTpnNqyoj9iabCQFPUS8Vp0XMw4S%2FL852lYQr%2B9znW%2BZy9zgzf9XEyv%2FT7Aq%2Binw6dAm%2BYI0DwtlqVu1Q3MRhwd1etYz5WkWKI6Z1itazjZg63ueX4pUQqLZUwMDFpNI%2BWqJ5YA2d%2F8qcZJ1tWaeuUf7ww%2BpfowAY6pgGA2KddH16%2BD0A1gOvQ5jZMb9eKRsX57mPkujjzAU5ZYvmVVEfe8wfhDGNE%2FN5TVTSLZbUwx%2FXAeybbwKAgiKp1nQKGOuABeRr4L%2B9MxazBpPm22KEfv%2BDwNLZKKeJEmKEj28vWjaf3s6ZHF3ws7u240hlwZY7KPSW%2Biv85gWUsbkc1uQazK5hPljjnaVcYbD7Mb7EYmRCfip1kEtzby04wlLq21fMw&X-Amz-Signature=0d3970f5d35b58f232ffb76e1da668bf1e497d871d6eb8525f0f7fbf5e327b42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
