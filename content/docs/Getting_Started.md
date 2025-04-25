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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSYY35P%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQqeI%2FVwhA%2BkwmIX2Pq4Wdz1FSuy9J3ROtULdkYvZL6gIhANQUl36O84Bbl%2BM9SvDU3A4ucoMfnX6GAz6Dlv7LifRDKv8DCDUQABoMNjM3NDIzMTgzODA1IgxY4o5SxCtfAHI8IKoq3AOt2vUY1LnFTvOhplWBKXxVxkgnEu8NOa5WV3Y%2FBerCDDqFLoLNPULeTgg5duxaxBA4vlQb0PP6N65gNC7ax7ZvEaLeLWoAQBZGv50ZSDqzpFch7QHhEMEwZe0uYEtdfHZkVzQkCPLlxtXGwuMtaVqEBrb81Zj532kztF%2F3ximTyLLiP5U4EYqjlWHDyq%2FX2UIC7HDpBWWw9LMKvCBo68sPrb6tJx%2BdCzuEOGs2kpRXuQVj977vxhMHB2nFnQJZ5JiI4rNBZt8e1LTsgoX%2BBCiuiXd1rzpii%2B8eBny%2B9SHLjzB%2FafWbqis%2BHrd36Aqsx6%2FrrhhbW1B2BcrBmf3Bh8j8LqDHqFSPG9BMZFfx%2Fr%2BOkiZKLHrjDExLrGjKuxDsVocIOJ1n8wr60PC6pPwLFlWQ1OMXDHzqeaiwgozvHy3VNLhVQbXrVvtABVlgeNtg2yiQPzvMq4OL%2FaYY0lnJtRRPtyXfUZjoSlnPcLTV%2FkXmQIAhso4GLYJXy1RcdL1fWr5cSKy0rv6QF3lVggEIHf%2F10EEs1trDAa3%2FDHnIPhsw%2FO3ORlu1SlvA8FHSn1MZQzXcJ7VZDG%2BglDP4LOsbbkO%2BWIom1zEo4l9F%2F6byE5lWJ6PltbCWP5QJNoXzBTDF0q%2FABjqkAfXvRtVF5J3W1HBnTznwLOEOKiU9dMpYJmgz2ieP9b19g6k6ZZtOmWXz32ltAfKg1bASJPAz7egAQ%2BF7ch333RNRNJ5bKkDQ2m%2BwmWsKHerI63gZ7LxqYmYYjOuaEmJX8kAF7eahPnckMU0tfnA9G6Yt7n3y%2Bv2iOfPaI3EKQpY8yF9j1lQfg0ZiB6iAoSu%2BRSS52jd97J2xeSxEgBwoShqq2yM9&X-Amz-Signature=be0bc21908b4fa0cae2d001097dff78f7c2e4f7a97f364529189afef202a2ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSYY35P%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQqeI%2FVwhA%2BkwmIX2Pq4Wdz1FSuy9J3ROtULdkYvZL6gIhANQUl36O84Bbl%2BM9SvDU3A4ucoMfnX6GAz6Dlv7LifRDKv8DCDUQABoMNjM3NDIzMTgzODA1IgxY4o5SxCtfAHI8IKoq3AOt2vUY1LnFTvOhplWBKXxVxkgnEu8NOa5WV3Y%2FBerCDDqFLoLNPULeTgg5duxaxBA4vlQb0PP6N65gNC7ax7ZvEaLeLWoAQBZGv50ZSDqzpFch7QHhEMEwZe0uYEtdfHZkVzQkCPLlxtXGwuMtaVqEBrb81Zj532kztF%2F3ximTyLLiP5U4EYqjlWHDyq%2FX2UIC7HDpBWWw9LMKvCBo68sPrb6tJx%2BdCzuEOGs2kpRXuQVj977vxhMHB2nFnQJZ5JiI4rNBZt8e1LTsgoX%2BBCiuiXd1rzpii%2B8eBny%2B9SHLjzB%2FafWbqis%2BHrd36Aqsx6%2FrrhhbW1B2BcrBmf3Bh8j8LqDHqFSPG9BMZFfx%2Fr%2BOkiZKLHrjDExLrGjKuxDsVocIOJ1n8wr60PC6pPwLFlWQ1OMXDHzqeaiwgozvHy3VNLhVQbXrVvtABVlgeNtg2yiQPzvMq4OL%2FaYY0lnJtRRPtyXfUZjoSlnPcLTV%2FkXmQIAhso4GLYJXy1RcdL1fWr5cSKy0rv6QF3lVggEIHf%2F10EEs1trDAa3%2FDHnIPhsw%2FO3ORlu1SlvA8FHSn1MZQzXcJ7VZDG%2BglDP4LOsbbkO%2BWIom1zEo4l9F%2F6byE5lWJ6PltbCWP5QJNoXzBTDF0q%2FABjqkAfXvRtVF5J3W1HBnTznwLOEOKiU9dMpYJmgz2ieP9b19g6k6ZZtOmWXz32ltAfKg1bASJPAz7egAQ%2BF7ch333RNRNJ5bKkDQ2m%2BwmWsKHerI63gZ7LxqYmYYjOuaEmJX8kAF7eahPnckMU0tfnA9G6Yt7n3y%2Bv2iOfPaI3EKQpY8yF9j1lQfg0ZiB6iAoSu%2BRSS52jd97J2xeSxEgBwoShqq2yM9&X-Amz-Signature=67e7d5929aa021451cc4d6d96da6b3726d6e760678a9ba0a42f5c269575cfaae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655B7S3IA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE%2BqGcVbuttv%2FlYM6%2BrKnagtdFsWqMA5O2dRY6kL%2Bh6AiEAzNZwZGwfVlYY6sIx9X6%2F1OUggqCH0uSMLKdXm4yFZgAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIKk%2BqgIROGEXLipPyrcA7EzZxulfkA2HrdH%2BdFexyAqzr4LpP8hQL0uhjEeMZ4VB4%2B8jNPw32fvAq60g4ucuj4%2BAHiWitjdOCtUaRCw9pCTMpku4novoVlPRfN2Bu91T6Kx8DWTXMuCM2XUt7RBC8SGrNSf4s3rLAS%2B7AJEGI0W1UCjc9LlzqjjnXdh55wpC4OlbTm904Hk0iPMA7tLx4Uatdt4hJK0IEFtPHtx%2FhhPmldRCtlx0lqNFUpK7KNnRP0kINDy%2FjS2YouEXjSHeiXG2l7uEK4bE6TzkzR8WYX6XnkRyOw4B7dYd1Q9GBIOrnytEvHP1kYGaBZ6nPiTXLY99gXPhgUJuhoLWiVHlkFFkegQnLlcB7t6qk%2FRMrpeLoVkTqzy%2FS6LW00sNIqSA83nqO9H%2BNxDMbsz4jzvtGewuXt4XgHwjoUR06WMlT0JPLwumSNyuNgRUHIavK0CSX3o4kDPz4g6tmCUvc6%2FzK0YEcP8WF5fZ2lKXROmK1i9INFjct%2BAOUZPjEEgpgVD7H%2BQYsyL2nWXqNPe7mnNf1YA9k6b1dZ1m56VULonrfPLZL4fOyDjCZBfTCLFRtsMceHXs1tutzvaiXi%2FL8JmHBrBUilopm5vqyt6%2FQX9KWPR8h0itW0p4NQyxM2qMJXSr8AGOqUBHfBC65Xc1%2BQJ4j%2BKVT38pc0qZMo5GeJjH4ETMZxAQE2sSbEUn%2F0QtAHoMWoI3Nc7PB%2FJkjiXOPoPmvgBDhqd7T4Rj5uk3UVWfzSqh%2BZOIkqlG70cRboNnWxO9N7zFWc%2BxzOIKZpFyBlPVRMHXr%2F3440RDaRyekW3KYUdtL6OB1i9T1tQIN4Xb%2BhY1w%2Fgoedk70tnn6UFfRvuDH%2F7DSaUwzbvK4f9&X-Amz-Signature=3097d2c91f42b4bb3ee1d60bd96bdf4ec7e6f099585db77015437f58a49457b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3DBEPYI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzxMAfLcRtXiz%2FRg94%2FKD9d5D5tkdLRMaIP6OGwuRYbAiEA4icR4hwuF7Z3EVNGl2eKgQNFYlY3LcLtq%2F7kvWg0FjQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHBVebNQc6RHtufQPCrcAwuetdxjVjshVsNraKEoVab7FJ0gaX6lxMnj2A3h2t%2BXkomjmP6HsHRCJMcboAEvUIRCn%2BGDozBaMqvcMaOB8IRlZiXZFI2cPZbKD4uSZUWR0Nae8bwpLI4xGDMkp8tG4OxmzaXOlq8pzH0%2B4KMXZZOcW5Bo4asT8luz2TwYVaIbx%2BZup4%2F%2F7pVZfdnlM5ts%2Fih4zA1utO81U8eV%2Bgs%2FlZYIyEHtjukCoOr9FhygYtteACGryJqMARLSAF0evn1fhf%2FRWDN%2BL8c9EHOWyGrrEGFsyirkoA8xKlooH6BTLiC43enBclcykDdr0oE2LzIlCwARyQD1aX0VwwGFZIcrXvquOHelk8wSpe5LrQnRp6zjanfWGu8drtJtmS7YWY2gLmXzHPicC6OlGBLO2Iq7thFEq3Ob3etj2elTHo84TBmTZBWyHcuPx4Ua8HZIAU9GBinXG%2FTvIvfR6pcBuGWeUb7bpulgiz54w4fP47MS0yRfqFRYCAd5xcBDks3dM766LgC7xGO%2BglN0NfltiCCWJPCGpzoxK%2BmfcuITBHUS8JRwX8n3DrvyCX%2Bum4NEBY3eBp4AZspEP88to4S%2F1nPHtrXKP%2BjEGMBDotixe1HRlriKb3nSil3JS1seuzILMK%2FSr8AGOqUB8a6CoLiOuOBQZtt3sPTozeysuXer%2FGF78dy2CA3wm%2FegSvnfD%2Fe2FMypw8MvDZJgEpLX6NX2smT3BcLNBXROwxLI1cikz1VMK14geEGOTa5GVeNr1if9vz0HRAr72HFJLV2cIIrS3c2xhhcnZ2PFW2c27dWArVjmg6Ue7RR2BadrTzq%2BQYb9s%2FVlD4py1RJ6cPASTRMKQQYGeDYDgsY5jEUEwcxj&X-Amz-Signature=a24b74b919d0a86682437a4c03de50f4b71d9bbf77f5a37013398ca4bc5a1e34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSYY35P%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQqeI%2FVwhA%2BkwmIX2Pq4Wdz1FSuy9J3ROtULdkYvZL6gIhANQUl36O84Bbl%2BM9SvDU3A4ucoMfnX6GAz6Dlv7LifRDKv8DCDUQABoMNjM3NDIzMTgzODA1IgxY4o5SxCtfAHI8IKoq3AOt2vUY1LnFTvOhplWBKXxVxkgnEu8NOa5WV3Y%2FBerCDDqFLoLNPULeTgg5duxaxBA4vlQb0PP6N65gNC7ax7ZvEaLeLWoAQBZGv50ZSDqzpFch7QHhEMEwZe0uYEtdfHZkVzQkCPLlxtXGwuMtaVqEBrb81Zj532kztF%2F3ximTyLLiP5U4EYqjlWHDyq%2FX2UIC7HDpBWWw9LMKvCBo68sPrb6tJx%2BdCzuEOGs2kpRXuQVj977vxhMHB2nFnQJZ5JiI4rNBZt8e1LTsgoX%2BBCiuiXd1rzpii%2B8eBny%2B9SHLjzB%2FafWbqis%2BHrd36Aqsx6%2FrrhhbW1B2BcrBmf3Bh8j8LqDHqFSPG9BMZFfx%2Fr%2BOkiZKLHrjDExLrGjKuxDsVocIOJ1n8wr60PC6pPwLFlWQ1OMXDHzqeaiwgozvHy3VNLhVQbXrVvtABVlgeNtg2yiQPzvMq4OL%2FaYY0lnJtRRPtyXfUZjoSlnPcLTV%2FkXmQIAhso4GLYJXy1RcdL1fWr5cSKy0rv6QF3lVggEIHf%2F10EEs1trDAa3%2FDHnIPhsw%2FO3ORlu1SlvA8FHSn1MZQzXcJ7VZDG%2BglDP4LOsbbkO%2BWIom1zEo4l9F%2F6byE5lWJ6PltbCWP5QJNoXzBTDF0q%2FABjqkAfXvRtVF5J3W1HBnTznwLOEOKiU9dMpYJmgz2ieP9b19g6k6ZZtOmWXz32ltAfKg1bASJPAz7egAQ%2BF7ch333RNRNJ5bKkDQ2m%2BwmWsKHerI63gZ7LxqYmYYjOuaEmJX8kAF7eahPnckMU0tfnA9G6Yt7n3y%2Bv2iOfPaI3EKQpY8yF9j1lQfg0ZiB6iAoSu%2BRSS52jd97J2xeSxEgBwoShqq2yM9&X-Amz-Signature=4a0bb486018475358732815f749459528deb6f8607dfb648ba426c545298b97e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
