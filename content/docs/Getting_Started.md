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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4AGOWZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDceJx8jwrDgEeSgm%2FmC8Xkbl%2FH8%2FQ5R1VpZxjMM2jN7QIgCorxai6Gmoz9FIfjxg%2FhI%2BnfPdZgJKBMbpxXuJgNKNsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDsk2zQqSeD3y95D1ircA8MkeAAVDj8j%2FK3r8hGTyZB2KfHLgp8L%2FuCFxliXmXjjsiXwfoq7reVE7Ly8t%2FX7o7bjZgVDJ2gp0yfI%2Fy3wez0dhjeBpNnRjAliTvsaMmJbGgyM0qP5zXsIMC1EACPCJXSOSPp5T9lVoTX8yC%2BJ2koEBCPnPWZVCXONi85UKPnlic947UXhtNzzgQxm1ko2s3nbGTSzvf9cz3kEK2BnFLw3jj%2BRO17hi1A20WKrSC6p7afmKg%2BROQZVhAiVfFi0v5dcENdC7a5NPIar3KN8C5NstmPzVYhX7%2B07DIPGvrAsp98D5BiZo1yjeydSXJR%2FpTD53IgmRIX15uiMsozbEEPCisULV%2BHC1ayirb8%2F4BHv6kpPJC8k1DkaRJpAOopnb3iCBex%2BQVYVLhdAu7J24xm8Qfum2B3BKQOdMBvc4pxVjHvJl3JBazThPBBa4EIk8PiShiamO%2Fl1FttuWT9XagecigFWWvA9%2BBta758quU2SaIRIesNTji7WmpEL9Dy95mas3oGkFZgOEpKJn04At23L39GgjqO46CA2czvDpAH4gL0zI%2BsJ0Aueq40GYEobZH2CFKPBVdACrm9gcStcse6aaO1VC77p6xscAUFNKgJ%2FJdIXL8YMJU07ULwYMK2q8sIGOqUBbmu0ATftwo%2BMVNCAjJX%2FDnokrFwtuYaM132Z1qphsmgbSFIe4FB5fHWqdnpxC9YruB9Oel17YP%2BufCjR%2FVhKuBYIbvxSwBzsw%2BOEHW6xyJegpgcru5HcHA%2F8sGadggCzcujP%2B33qOJEN6wyUN6zjcYZOxWghbnnM6x%2BK8IurcboehI3Kl1Xa1Teap5TsUd34hdKM6jPXOvTOkCsqoR2t7zo0%2FnAs&X-Amz-Signature=60235f67b939515982c74b2d66630e689c2aa0515298676cc4fc5eefc8170780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4AGOWZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDceJx8jwrDgEeSgm%2FmC8Xkbl%2FH8%2FQ5R1VpZxjMM2jN7QIgCorxai6Gmoz9FIfjxg%2FhI%2BnfPdZgJKBMbpxXuJgNKNsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDsk2zQqSeD3y95D1ircA8MkeAAVDj8j%2FK3r8hGTyZB2KfHLgp8L%2FuCFxliXmXjjsiXwfoq7reVE7Ly8t%2FX7o7bjZgVDJ2gp0yfI%2Fy3wez0dhjeBpNnRjAliTvsaMmJbGgyM0qP5zXsIMC1EACPCJXSOSPp5T9lVoTX8yC%2BJ2koEBCPnPWZVCXONi85UKPnlic947UXhtNzzgQxm1ko2s3nbGTSzvf9cz3kEK2BnFLw3jj%2BRO17hi1A20WKrSC6p7afmKg%2BROQZVhAiVfFi0v5dcENdC7a5NPIar3KN8C5NstmPzVYhX7%2B07DIPGvrAsp98D5BiZo1yjeydSXJR%2FpTD53IgmRIX15uiMsozbEEPCisULV%2BHC1ayirb8%2F4BHv6kpPJC8k1DkaRJpAOopnb3iCBex%2BQVYVLhdAu7J24xm8Qfum2B3BKQOdMBvc4pxVjHvJl3JBazThPBBa4EIk8PiShiamO%2Fl1FttuWT9XagecigFWWvA9%2BBta758quU2SaIRIesNTji7WmpEL9Dy95mas3oGkFZgOEpKJn04At23L39GgjqO46CA2czvDpAH4gL0zI%2BsJ0Aueq40GYEobZH2CFKPBVdACrm9gcStcse6aaO1VC77p6xscAUFNKgJ%2FJdIXL8YMJU07ULwYMK2q8sIGOqUBbmu0ATftwo%2BMVNCAjJX%2FDnokrFwtuYaM132Z1qphsmgbSFIe4FB5fHWqdnpxC9YruB9Oel17YP%2BufCjR%2FVhKuBYIbvxSwBzsw%2BOEHW6xyJegpgcru5HcHA%2F8sGadggCzcujP%2B33qOJEN6wyUN6zjcYZOxWghbnnM6x%2BK8IurcboehI3Kl1Xa1Teap5TsUd34hdKM6jPXOvTOkCsqoR2t7zo0%2FnAs&X-Amz-Signature=0ef9a15e21ab2b9c3a2338fb6d30d13c7fd3404c685ed40cb171080980319bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4AGOWZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDceJx8jwrDgEeSgm%2FmC8Xkbl%2FH8%2FQ5R1VpZxjMM2jN7QIgCorxai6Gmoz9FIfjxg%2FhI%2BnfPdZgJKBMbpxXuJgNKNsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDsk2zQqSeD3y95D1ircA8MkeAAVDj8j%2FK3r8hGTyZB2KfHLgp8L%2FuCFxliXmXjjsiXwfoq7reVE7Ly8t%2FX7o7bjZgVDJ2gp0yfI%2Fy3wez0dhjeBpNnRjAliTvsaMmJbGgyM0qP5zXsIMC1EACPCJXSOSPp5T9lVoTX8yC%2BJ2koEBCPnPWZVCXONi85UKPnlic947UXhtNzzgQxm1ko2s3nbGTSzvf9cz3kEK2BnFLw3jj%2BRO17hi1A20WKrSC6p7afmKg%2BROQZVhAiVfFi0v5dcENdC7a5NPIar3KN8C5NstmPzVYhX7%2B07DIPGvrAsp98D5BiZo1yjeydSXJR%2FpTD53IgmRIX15uiMsozbEEPCisULV%2BHC1ayirb8%2F4BHv6kpPJC8k1DkaRJpAOopnb3iCBex%2BQVYVLhdAu7J24xm8Qfum2B3BKQOdMBvc4pxVjHvJl3JBazThPBBa4EIk8PiShiamO%2Fl1FttuWT9XagecigFWWvA9%2BBta758quU2SaIRIesNTji7WmpEL9Dy95mas3oGkFZgOEpKJn04At23L39GgjqO46CA2czvDpAH4gL0zI%2BsJ0Aueq40GYEobZH2CFKPBVdACrm9gcStcse6aaO1VC77p6xscAUFNKgJ%2FJdIXL8YMJU07ULwYMK2q8sIGOqUBbmu0ATftwo%2BMVNCAjJX%2FDnokrFwtuYaM132Z1qphsmgbSFIe4FB5fHWqdnpxC9YruB9Oel17YP%2BufCjR%2FVhKuBYIbvxSwBzsw%2BOEHW6xyJegpgcru5HcHA%2F8sGadggCzcujP%2B33qOJEN6wyUN6zjcYZOxWghbnnM6x%2BK8IurcboehI3Kl1Xa1Teap5TsUd34hdKM6jPXOvTOkCsqoR2t7zo0%2FnAs&X-Amz-Signature=f30af8f56598e87770bff0de81c15265cf74efb16b7cdab03b167e456f58ee7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUPKXWW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDEZGZS22EM2G8fMuXa0yeWsGYDI1PKG9SfW7ClUN3hIgIgSNcr3pyNVt7FQ4joosou%2F7lBf3fZV%2BhP7PkapBSTQtIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDrNRSrJzm7x2w2wRSrcA0SvBWt4rmubCsrZIbazQjQVeOJcRrh4VRcOFkpi5AjAPxGiWckLRC3ddSVlD9M6z8h0jX41YVJPCTBshWVtbcaKjIcgXHdOCxyokT359MEbtMmhRS6WBEvZgjY%2Fe8VQZPyOMKaS0Z0qiIc3FBlQhh%2Fa3iMZPyxZDZqQLyWE2yBn3vQOqanwt%2FNROJOwLhLd7N6pYhqL9KkCt8KcbRQdkhGiT9QT4OgDaeC0MHeA8Qzckf8eiHpZfQajyj6VQs5yJCIZLP%2BV1mEw9e%2FutHu%2BkvmgEbPlO%2BPJXewPDnaNMsKRc5IKkrPlGVTJi03jPIxkdpS1pY7vWmi97G8sQHKKkd9TGLosCZJ48BPfx2NEUyqZAhKQ4L6LA7PeZ1gw3KY3XwEtsHaAeFZjvZWUnF5%2B18qwmEvyb2p9PT%2FTDAadD9fnBn3TbKIXIqh763tmJ%2BkKkyXcRee2ZJ1vfEtv353ha56ahBKNuaH7p7WyqkhpJ1%2F6CRg1v1kCQw4MGJgjuZjqnhD1pdswXG0lyAOv8eKyyNFhotJs4MVsBFuw8ojw01vP6LCb64Oim0iO9sLxho1wH%2BhqGYFoPrD7XTaX7kO%2FNBuzwLL6IWEuizlZMSOj5FWTt3weS9nAGC9jkj32MJyq8sIGOqUBpdEAACaJqnFtbUTViba0qaZB%2F5ktF6zKYmsgXh79P7pnV7XNY5UP5LoyFLVr6tc2BW8tgN8ssIRt49IpaC1aU0aE9GxzlrDFKRiPXk95GzfV6JbAGf7vGwseeXa%2FZDPcHc5Ygt1dBPZiEzKTosv%2BmDhVEnNKSE%2By2E0QZPcKMOPSn9rCnwxWIKFNPrFDwMpphY57Y4YqAoT91s0nOr%2FMBB6KmSf4&X-Amz-Signature=9573f6d0f5175f47313f8f284cf5f7a54878656f92895dee23c3d8c5dc83ca0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5LWOPR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDEtKFBl4A7WxmUReS%2FOPAVuJ%2F3frrWu3Vkzc%2BnI%2FF5eQIhAOL37pBrdLDUaAGKSci788DOeFJppVvVf7%2BduWd3uk6RKv8DCFIQABoMNjM3NDIzMTgzODA1IgxC68V0AMlxatVlqB8q3APhfhHBJaa321csCSRQjkBJCrO2L%2Fl4aJImN6eDYYhbJYM%2FqGnGKyTmpPtovcDctbVnhJTpkT%2B6doCB%2F1geYlPupKdXbe6AgLFh9I6BXwPUlB7a70QNJ6w3CCN4f3OfY9mt7NSf6cQFerDuqhn7HRVuyYriKx84rfw9sQVW94ubuWbTA9wR0UvIexxY9Akd6jEdwOmlXt1lFPAhUuqo8%2B6fko5BRhXZUOEfUfugeHuXBF9qViiulGc8yKlVoPVu0GL5SR3K13Llm0%2F1eSvIbUJEuD%2FbOjtNM2JfDtpMl2xM7QOSxNHP%2BTpi1Sl6neoK9WCl2aXgU37HJCQQqmDrB7FB6rg023zl5uf7VtUgMJrMUaBi5fn9Gi8TB9%2BLwsgNVbRXCIjHYT7obNiVTbfnVNvlKR7dWLGyBD8CfkAYTLdfVhg%2FmAiYpHB%2F%2BV%2FV0RFacr521W9waVcdsQjO5SLVmWjSD%2Byy5yLHPEm%2BfDF1dzCZhe2Mx%2FkjU3%2Fy%2Fs6zG3JQ4C6dFPfEHNVFUO4Y7b5Jnq3vG9PREQsjN8X8%2FdDZuXt0RyAStWIJwPts41OXPLWy%2F8Dqu2qQHUEpf6%2FNlRVtSV%2FuGRWNUrug9WrN6AZzNjxYBgJzrJJ7ZCgKsvr%2BfzC5qfLCBjqkAarctMhxsSJNREXP7qsDepYiblpz6xlXFs4HmTMwW4z4CJNuGtTU%2B4L4b14LmDsDeAH1jU2jn8uBcXz%2FUNhfz5fXnJseTINpXhu%2B2dzX0JPwSZcoQ3m8bjMJG3T4UW1mYjbTDiYM%2FcH%2FxzPIsA0rfBqQT1juLABvhTm%2Fw3m1Kf59HYSWnqvPsFA2j01gpCZpCkfPxt%2B2o04hgskhY0TWPFUOZIU3&X-Amz-Signature=ef90e8ca68a66a30445e8ba5b5588ac550e777db963fa9bac49fbf92b3641663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4AGOWZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDceJx8jwrDgEeSgm%2FmC8Xkbl%2FH8%2FQ5R1VpZxjMM2jN7QIgCorxai6Gmoz9FIfjxg%2FhI%2BnfPdZgJKBMbpxXuJgNKNsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDsk2zQqSeD3y95D1ircA8MkeAAVDj8j%2FK3r8hGTyZB2KfHLgp8L%2FuCFxliXmXjjsiXwfoq7reVE7Ly8t%2FX7o7bjZgVDJ2gp0yfI%2Fy3wez0dhjeBpNnRjAliTvsaMmJbGgyM0qP5zXsIMC1EACPCJXSOSPp5T9lVoTX8yC%2BJ2koEBCPnPWZVCXONi85UKPnlic947UXhtNzzgQxm1ko2s3nbGTSzvf9cz3kEK2BnFLw3jj%2BRO17hi1A20WKrSC6p7afmKg%2BROQZVhAiVfFi0v5dcENdC7a5NPIar3KN8C5NstmPzVYhX7%2B07DIPGvrAsp98D5BiZo1yjeydSXJR%2FpTD53IgmRIX15uiMsozbEEPCisULV%2BHC1ayirb8%2F4BHv6kpPJC8k1DkaRJpAOopnb3iCBex%2BQVYVLhdAu7J24xm8Qfum2B3BKQOdMBvc4pxVjHvJl3JBazThPBBa4EIk8PiShiamO%2Fl1FttuWT9XagecigFWWvA9%2BBta758quU2SaIRIesNTji7WmpEL9Dy95mas3oGkFZgOEpKJn04At23L39GgjqO46CA2czvDpAH4gL0zI%2BsJ0Aueq40GYEobZH2CFKPBVdACrm9gcStcse6aaO1VC77p6xscAUFNKgJ%2FJdIXL8YMJU07ULwYMK2q8sIGOqUBbmu0ATftwo%2BMVNCAjJX%2FDnokrFwtuYaM132Z1qphsmgbSFIe4FB5fHWqdnpxC9YruB9Oel17YP%2BufCjR%2FVhKuBYIbvxSwBzsw%2BOEHW6xyJegpgcru5HcHA%2F8sGadggCzcujP%2B33qOJEN6wyUN6zjcYZOxWghbnnM6x%2BK8IurcboehI3Kl1Xa1Teap5TsUd34hdKM6jPXOvTOkCsqoR2t7zo0%2FnAs&X-Amz-Signature=2c4eed8a1246bdb9ac31d0fe6d9bd3221e5bc0726be573bffe6f662f97f2226c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
