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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOMMPFE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCDpwGdxTqY%2BOJGoEZG5tda1glviVFJlRZki92zHNYy1gIhAJhRC8HXMXfdF9RojasqDnHDkKXuNSLWnjXhR9yLyaBMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7lMAkAxr5QIFnBG0q3AM2cKQUEkTnbkkaZFQmq5JL96FpAEHpwoLzG4E05dlPuI%2BcHmvI3OTTOBqg2v5If94yywB6k%2FgvYKP9VRJKgTbOPpl8E0H9mD%2FTUwZpzo9yxj4%2F38THsOglNJgbnlBMJuPIozHkxZbYNkX%2FlLBs2q0OXmuFlWEDkY5LCzvsTCi8J7Re7CKAbgp%2B0WFAH3A1vz%2B5eJ49e9vZC3%2FTj9q277BLu89QtaS65jbSdwkmksJPxfHyBg%2FzLy7MkHLnsf%2Fa3OeB9TSVj5ekOue7LPGBS5phNucUbWl5dm38Kw7j9r4eB%2F2AGMh3JyZBYaJaZyZ6woXYtjMDKssFINL80X5n29QwpzSsQAsSRnTeqYOgUVJCTeS0ih4S%2BlchwfqjafQZ%2Fssb9ApJkg%2BNOeJIs%2BYXPL6pdIdPrDNmI4inXRHj2U0OlDI2D%2FAC8e0FsP6K%2F84WeEFSVLE0l4hH6lQ4JdLXrIsqvreW4dxVXb5%2F%2FkQpqhO909d0IknBXv4sNWKV6t9pp%2Fx%2BpopLdxfSu92%2B5m%2FjV0qRMcdMVWQt%2FjI3vfw4eaP0WFM08HKCpzddKhlQ%2Fco4E1pW0Lg2W6oBCN0%2B5ke3EIKFazlLfWgVwjrwQvFWg%2FkgkPU5RmNZ0E4oXeCz5DDLi7y%2BBjqkAanOgBl6W%2BHT5lQjNRaIDsGdml9IXKQ%2BDn%2BXHufCbIYAnqAGwKlUdmu79rg%2FLq%2BhkuwFumtk1%2FcVM3XziERtWUoGprB%2FjLWDKxCyQ9IJRPAq%2FMuU76YrCiHvJMbqbEW35o1Jlwp%2BfESuR7zFnwxWk3HmGFNGY6p8%2F3HLB6JZ6i3gl4YK4S4Em1FkoDv%2By37pPOcRcvZNBhu7lGRTW3g7odQjBgVd&X-Amz-Signature=bcd325ea78322e3270a925c2a988bf87f13a7e1bb49c72cc600f6061d93b43ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOMMPFE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCDpwGdxTqY%2BOJGoEZG5tda1glviVFJlRZki92zHNYy1gIhAJhRC8HXMXfdF9RojasqDnHDkKXuNSLWnjXhR9yLyaBMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7lMAkAxr5QIFnBG0q3AM2cKQUEkTnbkkaZFQmq5JL96FpAEHpwoLzG4E05dlPuI%2BcHmvI3OTTOBqg2v5If94yywB6k%2FgvYKP9VRJKgTbOPpl8E0H9mD%2FTUwZpzo9yxj4%2F38THsOglNJgbnlBMJuPIozHkxZbYNkX%2FlLBs2q0OXmuFlWEDkY5LCzvsTCi8J7Re7CKAbgp%2B0WFAH3A1vz%2B5eJ49e9vZC3%2FTj9q277BLu89QtaS65jbSdwkmksJPxfHyBg%2FzLy7MkHLnsf%2Fa3OeB9TSVj5ekOue7LPGBS5phNucUbWl5dm38Kw7j9r4eB%2F2AGMh3JyZBYaJaZyZ6woXYtjMDKssFINL80X5n29QwpzSsQAsSRnTeqYOgUVJCTeS0ih4S%2BlchwfqjafQZ%2Fssb9ApJkg%2BNOeJIs%2BYXPL6pdIdPrDNmI4inXRHj2U0OlDI2D%2FAC8e0FsP6K%2F84WeEFSVLE0l4hH6lQ4JdLXrIsqvreW4dxVXb5%2F%2FkQpqhO909d0IknBXv4sNWKV6t9pp%2Fx%2BpopLdxfSu92%2B5m%2FjV0qRMcdMVWQt%2FjI3vfw4eaP0WFM08HKCpzddKhlQ%2Fco4E1pW0Lg2W6oBCN0%2B5ke3EIKFazlLfWgVwjrwQvFWg%2FkgkPU5RmNZ0E4oXeCz5DDLi7y%2BBjqkAanOgBl6W%2BHT5lQjNRaIDsGdml9IXKQ%2BDn%2BXHufCbIYAnqAGwKlUdmu79rg%2FLq%2BhkuwFumtk1%2FcVM3XziERtWUoGprB%2FjLWDKxCyQ9IJRPAq%2FMuU76YrCiHvJMbqbEW35o1Jlwp%2BfESuR7zFnwxWk3HmGFNGY6p8%2F3HLB6JZ6i3gl4YK4S4Em1FkoDv%2By37pPOcRcvZNBhu7lGRTW3g7odQjBgVd&X-Amz-Signature=1a13c2261d6725de7ea68f12bbf4fa0fd5b0fc76f16acdb623d82f39a0e0a6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VEYWOZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCfBRdC8NbUutVPJ1h0WUx4%2FqBWThRYWFhX%2FLRlLgHOQQIhAITUE6ZrnHoqX6dL3RY8UEUhq7h6d%2BNZZ5vNhhyG8deUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzVJZ1CnIqnHvTQJ4q3AODxpCakI%2Bgtq%2BJ7C%2BwZa%2BJBoP5xhl%2FxMgWnayWQaPb3iKQVjQ6YzDN%2F2dmwy%2BbvtCt2vu4m3JedGqKhNGdlI64BF%2B6LQ4Pl0prGzfc2R5kH75BHcmrezHFUT8q5xHSs5MPtTG9ZhN%2BHjy1XB9N4Oi6LyWctUydjNyMwtypKOkvKkgpfQhi2F1E6k3V2fbgVK1XsoCNpx0sOZiljd4bXT6yg%2FdwRorIZHIMAiYYG%2BifXlb3r4zC2%2FUH7OPr7uqjPAlbDCwThnkZsvpiusAXSu4SaAJOgBRGh7Qc1RdWA1JbNFcc%2FqLoKEtDaWr8aAaYCvd0uf5HaiBph3BhcB0bIfDx5ZiY6lvr%2FmVnhz53pInQ0Ux7y%2FB2kIy9o6Ux7yZbD6EQcIp43f%2FJfbp5igR4WbXsBaycDTfJ3Q36fSicRA3q7VMXmQB70cjG0OHRsA2pM0kE6ocaoSpunJR4KEEu8lB17hM7ZGM1yykpQNiluGHVEiGrUigoAJxxM0rxXRs07pAawxeQJ8eeaH2nwTYwFEeLTUGPy%2BVmzHClwZhyROxdo%2FYsLPMMFKOjr6RDbYUFHXjs8Fvvn596e4YWDVEaUwfMGdIevQfezOY4NEG5laKNXw0zKV5LW%2BJE4ARUwzDci7y%2BBjqkAVhEVeJHLrgH%2B6M%2BlPVNuhkurDIj0NeOgnbjbi3PuafpDKouakDsPjxjSiAW3W8hE5wbImCqDr8GPmc6JJuN8VMB8UCsA5y6aLOcgcN9nuHPEzwjyTcyLLuzNThdyO1eUOdyAFjAbKu1k6v6hvufYyWHL5cxbFewcya2HqUpe70US5CEVQFePie9syPTx1v317N2MxcPxvkZL1v5xjjpH8TovXZ9&X-Amz-Signature=b7cda2040d9ddbc9b016744b0106e7eaee438fc82c155529c604be017a121eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIVP4L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFFAsaPe4yfBZ1Hbph%2BjVzK3iIvzR5mLe42r3ALV2eBdAiEAllCPKt16g6GtGPMoKSto4%2Fyxu9LJFLyE0OkWdA68y48qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5O93D5Nr7KWhQn6SrcAxyn3lDr%2BJ3he6QVjqbvUu0Oh1KX9kHS%2FuWNk5UOS8zbZ1EUyF0mOOELiT8vw%2BKq3TvzYby%2BvUhDr0bP5kiK%2BTeYPKg4oPy9OKNfZUASJbjEiKoOndTeehYTptamc9ZAT8x42x7rC3EUW0Z6mgalRSKSY9G5MDRe56T88cM0Q%2FxOFnkSWiJW2iLwO0P%2F%2BGGjxCPEKjk%2BnYOVyf9PNGbf1KGeAdpE9FVOt1swiK2E%2Fba8mubIWTXD65%2B%2FWh8Ce0lux0BXg05HRG2U7Gv1lFiPHi3ElbpWnO97GcfleK6dUd2R%2BL9U4SJe7u0F1wFzjJPsCmXfbRi5UM7o%2FQGAhgu3M6AgRmh2L%2FGdLsSM9HUwf6aiqLs%2BADgDwkXvcSpN0YClS%2FhqvGJEHv74T%2Bmx3OccmmNvvttRDmbhmfn1zO%2F6uJ5Y%2F8bivBQ2aUyhDd7j1%2FL9bdgOfFpbDMqwcgZOKn%2BdMLDVBJdY8GuNot54qqw7Y2oRVQyFaXcdH3KWhKBv2i7Ku5FP7K2qTvp1dVYgP2m1WJLPgdl9xdeLiqxyQwNSON7PMhwG8aOy%2BAJZFvdyAnWcXNQsCHKAPkiv%2F3ZBbA7LVesAcSWu%2FSAiT2CtoKkp6DtTMiW77BMf0H2xmoS6MMGLvL4GOqUBBZo4cPvFphf3RlsyQ%2BRuSkmCfD3XuDcHyHfrOCaa1YKu6G5DjSqH1wXOjlf68OYOoz8TpRzJiHTuYvXkIVm4eB0vVc6NSb94y5EQ0%2BLZR83xwBMINtZhouRUJz3eyUB5iSdFA2RPpwHlOg9U%2BbTD70NqtxfRK9RZi7KQD5ZZTRAifgU4h34kT55ArziPxlsWnF%2FplQeLtMJko%2FfWlDSp6Dhvv3nP&X-Amz-Signature=9a63b863ef2814836d70c9079fcb6b2644185ee2469a42d940b03851085f16d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOMMPFE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCDpwGdxTqY%2BOJGoEZG5tda1glviVFJlRZki92zHNYy1gIhAJhRC8HXMXfdF9RojasqDnHDkKXuNSLWnjXhR9yLyaBMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7lMAkAxr5QIFnBG0q3AM2cKQUEkTnbkkaZFQmq5JL96FpAEHpwoLzG4E05dlPuI%2BcHmvI3OTTOBqg2v5If94yywB6k%2FgvYKP9VRJKgTbOPpl8E0H9mD%2FTUwZpzo9yxj4%2F38THsOglNJgbnlBMJuPIozHkxZbYNkX%2FlLBs2q0OXmuFlWEDkY5LCzvsTCi8J7Re7CKAbgp%2B0WFAH3A1vz%2B5eJ49e9vZC3%2FTj9q277BLu89QtaS65jbSdwkmksJPxfHyBg%2FzLy7MkHLnsf%2Fa3OeB9TSVj5ekOue7LPGBS5phNucUbWl5dm38Kw7j9r4eB%2F2AGMh3JyZBYaJaZyZ6woXYtjMDKssFINL80X5n29QwpzSsQAsSRnTeqYOgUVJCTeS0ih4S%2BlchwfqjafQZ%2Fssb9ApJkg%2BNOeJIs%2BYXPL6pdIdPrDNmI4inXRHj2U0OlDI2D%2FAC8e0FsP6K%2F84WeEFSVLE0l4hH6lQ4JdLXrIsqvreW4dxVXb5%2F%2FkQpqhO909d0IknBXv4sNWKV6t9pp%2Fx%2BpopLdxfSu92%2B5m%2FjV0qRMcdMVWQt%2FjI3vfw4eaP0WFM08HKCpzddKhlQ%2Fco4E1pW0Lg2W6oBCN0%2B5ke3EIKFazlLfWgVwjrwQvFWg%2FkgkPU5RmNZ0E4oXeCz5DDLi7y%2BBjqkAanOgBl6W%2BHT5lQjNRaIDsGdml9IXKQ%2BDn%2BXHufCbIYAnqAGwKlUdmu79rg%2FLq%2BhkuwFumtk1%2FcVM3XziERtWUoGprB%2FjLWDKxCyQ9IJRPAq%2FMuU76YrCiHvJMbqbEW35o1Jlwp%2BfESuR7zFnwxWk3HmGFNGY6p8%2F3HLB6JZ6i3gl4YK4S4Em1FkoDv%2By37pPOcRcvZNBhu7lGRTW3g7odQjBgVd&X-Amz-Signature=a1a904ed1c41784dfa1cc8b1b734daff2faff126a5f4ee47fad8bb47d5c1f223&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
