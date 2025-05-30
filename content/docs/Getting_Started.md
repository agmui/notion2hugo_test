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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP7ULJQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F3fFNgitjLa9X9Otr3Qm1PzHP0nGaTpaWOEl%2FpQTEOAiEAxI%2BhUaSSjKqjAeo5SqoDWVOfuDowOd1ZmKa3VjEyEIMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO87SPlG0OsQb%2FL15SrcA1n%2Fcx717ndO0e3BrBqLpb7aaB788xEQKjx%2BfpLBhIW9K4iKWO7x7sSr%2BtdBD6MczMw9n1d%2F34RsJf0k%2B7oVTAm%2BmgTK3J4QWGahXCmfx%2FN84qqwLIgBJQr6hJanTMgFHovJVqQKCwQOwTW0i6w08D%2FfXcAMcl%2ByNk%2FJbR7nkfkrnZA1iZDcR6bNH%2Fom%2BcDVk72cUxCHo%2FQVGYBGjdDCTZsosQqu8SXcxr6Rg4q3qYYlK109tnfPHagLGqdp%2FuzD1y1L051GIaYEPLICcd5n4vo8qNhZZg5MnkiGVT8iAgBUdcPLKbvHbi%2BzxNd16Iv4%2F80ivxMjtzKxPkMGgZ0RYATg%2FkFObF39wUSwzFDScCN%2Bys9D%2F%2F%2Fpkae1nehrKmjkxyic58u4PlDaWe%2F2zzTmJKvyn3dFURtiTIss7mGftog%2FbxfxhAs8l4Olc%2FnNeiI839nZ87REqL%2FylqqnvCO6u%2FK%2FR79uy5eHzVJ%2FDzRrZDCiZwF7tu50gD2RuDr0fc4gAd7ci4bdyylpqRJxobcMM9AIaTsDJLln%2Bjd4ZlpmzMoRbRiNhwhhkFxscbfH3OmD7z9nwQRlk2rzjkhxzO56CHDKrMgcG%2FgokBB%2BmC3FCvefYpFx53LiQIIbdY9SMKbe48EGOqUBnG375AUKXCeLlmxiW6xbhVXd7rL1tCaNpuQSkRe8FPJH7pVJKWiUqH%2FfzPVJmknyOe6XVz7aMq%2FxfXjBkeFLqgs0i7YTtMI75K91zyZaYVwqVMI8iLR2tlcxk78qmDXMveo%2Bd9fS4A5y1pGxlnpwm9Zy7uldJdYQFyEhGZmQ1GwOzmnEhu0zdfwudExuLjgfSwwbIWrryqbgZdNPoOSyIwIgRd9n&X-Amz-Signature=f6d284497330a38e392c9cc7ab9f3d8744ccc8a7de437e43b30ad333b73872b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP7ULJQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F3fFNgitjLa9X9Otr3Qm1PzHP0nGaTpaWOEl%2FpQTEOAiEAxI%2BhUaSSjKqjAeo5SqoDWVOfuDowOd1ZmKa3VjEyEIMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO87SPlG0OsQb%2FL15SrcA1n%2Fcx717ndO0e3BrBqLpb7aaB788xEQKjx%2BfpLBhIW9K4iKWO7x7sSr%2BtdBD6MczMw9n1d%2F34RsJf0k%2B7oVTAm%2BmgTK3J4QWGahXCmfx%2FN84qqwLIgBJQr6hJanTMgFHovJVqQKCwQOwTW0i6w08D%2FfXcAMcl%2ByNk%2FJbR7nkfkrnZA1iZDcR6bNH%2Fom%2BcDVk72cUxCHo%2FQVGYBGjdDCTZsosQqu8SXcxr6Rg4q3qYYlK109tnfPHagLGqdp%2FuzD1y1L051GIaYEPLICcd5n4vo8qNhZZg5MnkiGVT8iAgBUdcPLKbvHbi%2BzxNd16Iv4%2F80ivxMjtzKxPkMGgZ0RYATg%2FkFObF39wUSwzFDScCN%2Bys9D%2F%2F%2Fpkae1nehrKmjkxyic58u4PlDaWe%2F2zzTmJKvyn3dFURtiTIss7mGftog%2FbxfxhAs8l4Olc%2FnNeiI839nZ87REqL%2FylqqnvCO6u%2FK%2FR79uy5eHzVJ%2FDzRrZDCiZwF7tu50gD2RuDr0fc4gAd7ci4bdyylpqRJxobcMM9AIaTsDJLln%2Bjd4ZlpmzMoRbRiNhwhhkFxscbfH3OmD7z9nwQRlk2rzjkhxzO56CHDKrMgcG%2FgokBB%2BmC3FCvefYpFx53LiQIIbdY9SMKbe48EGOqUBnG375AUKXCeLlmxiW6xbhVXd7rL1tCaNpuQSkRe8FPJH7pVJKWiUqH%2FfzPVJmknyOe6XVz7aMq%2FxfXjBkeFLqgs0i7YTtMI75K91zyZaYVwqVMI8iLR2tlcxk78qmDXMveo%2Bd9fS4A5y1pGxlnpwm9Zy7uldJdYQFyEhGZmQ1GwOzmnEhu0zdfwudExuLjgfSwwbIWrryqbgZdNPoOSyIwIgRd9n&X-Amz-Signature=16ad0f26ec792ed8acb8e7eaa0768133d84aba288fd8dd0f06beba8ff7a51e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP7ULJQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F3fFNgitjLa9X9Otr3Qm1PzHP0nGaTpaWOEl%2FpQTEOAiEAxI%2BhUaSSjKqjAeo5SqoDWVOfuDowOd1ZmKa3VjEyEIMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO87SPlG0OsQb%2FL15SrcA1n%2Fcx717ndO0e3BrBqLpb7aaB788xEQKjx%2BfpLBhIW9K4iKWO7x7sSr%2BtdBD6MczMw9n1d%2F34RsJf0k%2B7oVTAm%2BmgTK3J4QWGahXCmfx%2FN84qqwLIgBJQr6hJanTMgFHovJVqQKCwQOwTW0i6w08D%2FfXcAMcl%2ByNk%2FJbR7nkfkrnZA1iZDcR6bNH%2Fom%2BcDVk72cUxCHo%2FQVGYBGjdDCTZsosQqu8SXcxr6Rg4q3qYYlK109tnfPHagLGqdp%2FuzD1y1L051GIaYEPLICcd5n4vo8qNhZZg5MnkiGVT8iAgBUdcPLKbvHbi%2BzxNd16Iv4%2F80ivxMjtzKxPkMGgZ0RYATg%2FkFObF39wUSwzFDScCN%2Bys9D%2F%2F%2Fpkae1nehrKmjkxyic58u4PlDaWe%2F2zzTmJKvyn3dFURtiTIss7mGftog%2FbxfxhAs8l4Olc%2FnNeiI839nZ87REqL%2FylqqnvCO6u%2FK%2FR79uy5eHzVJ%2FDzRrZDCiZwF7tu50gD2RuDr0fc4gAd7ci4bdyylpqRJxobcMM9AIaTsDJLln%2Bjd4ZlpmzMoRbRiNhwhhkFxscbfH3OmD7z9nwQRlk2rzjkhxzO56CHDKrMgcG%2FgokBB%2BmC3FCvefYpFx53LiQIIbdY9SMKbe48EGOqUBnG375AUKXCeLlmxiW6xbhVXd7rL1tCaNpuQSkRe8FPJH7pVJKWiUqH%2FfzPVJmknyOe6XVz7aMq%2FxfXjBkeFLqgs0i7YTtMI75K91zyZaYVwqVMI8iLR2tlcxk78qmDXMveo%2Bd9fS4A5y1pGxlnpwm9Zy7uldJdYQFyEhGZmQ1GwOzmnEhu0zdfwudExuLjgfSwwbIWrryqbgZdNPoOSyIwIgRd9n&X-Amz-Signature=bd2015ac7ac0ea4b2002dd44970b4f24d41b5b74061b850042e8fc783d7dfbd7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMO3BG4X%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7RyIeo1A7%2BmVVlykxnTv2JK45s1ajRuRkrrS38LJiAiBYEhjhQfLDOhdBHAaUZ%2FBvGTNCUPcft3Fk9olh6SkszyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfkpXelXFl6Rm4VyKtwDam2w%2BhaWXscuvgq2C7qNmSMu41WTjYVeYL8vGritcmYVoIS5oT1SnH2to1WmqxAVhkyzqtmpU%2FFVFBKdHOzzlSQHT0iqM3xfRbeaWqlpICS1X8dfj9NOBJ6yiBnRqADFL%2BLmqshd7IqRYvV%2BwYoBql48NQgNIf8hP2kopWz4SOHS23737GKuGiizyqcUGuQG6EiytTGvnaEuR0Cy0gPZcCkXmbc0G9zVoccXfmvaCbGh%2BaOic44B3pH0fUHqGIJg9G%2BE8a4iMa8F1U0N48HalKMMQvwIe0oyiDMv%2FNuhcMe%2FRTIexaljnYaGdMcoUulagvgqBOSaCwM%2FScTklUDNQTjTaenxBk0aAtROmo3s%2B6sc4x0CXTk7GySMY%2Frgch8PvP8VPEOEycjQRl%2B1HPxz2LKWmtgjajEac6r6chMlnlKXOCAOBjVyLjiYh5LzoEm%2B%2BNSe6rkSewJiMKXarKOmTr8tuVLMZs21vBeDXOO6n2K71R6CnHfxp7G8V9ywTP6OYvpOwmjbXQvv6Y2j9Pylt0aei5eE5EVkMs6FOjjtY67RrcLPeezDvpOIRJoCaWq3Q32YsMTiFvBiMM5ys1YaGw2vhZVrW7iY7KP5z0X%2BVHZyJu3ASQDgOWlH2vowkd7jwQY6pgEYdsq1Ej4hwJWq9T0Q6btb6ljf0ygIfi10gUYe%2BoA6k%2FBOINGL1o4UzjUGV5gsEesuYpmOap2pOnbl27kOqzLMSBEZAvD7eJ08MJ55waa9KHlfSe9AUgQF2En%2BgPYQt0bU620no3isL0aO1rePGnmVwvbxx1p%2B%2F58KYuGSgUU%2FfHI6gSgiKENSV5IfkYjgy7y4PJdTuQekqZV6Ydp6BpTv9RRTjOjs&X-Amz-Signature=8a9abdf70299ff2d858e5b5dd938df084f630a527c673ccd8bc80964739fda43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PRG5KY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDB3ZISH9eNoMLDlV%2BNQcyvUwryR16MMBuwZvsbwWbw9AIfM2iCjhvOmY%2Fe790avTTYYYDWCY0Xrp1XnWVEHb%2FK6yqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3WrxkfxMC%2BjnH6xHKtwDAFhHoSLfYUekIOLigSD3fz07lgyEawaLoNjL0l3AZ%2FQ6CZDQOGS4DzjikUKwTIFyNzw%2B0Gjjej353gw5rMx0Jtv%2FdV4yW1ybhQbrtBvFA7UiLopd7MqFgoKjD8eICzQHxnhiirheyIsPHkGn8zd%2FYWDfrfqho0cfVHt8gAKClj%2BSfUiRE1Okv8bRDecF1%2FKTegq2XiGUF9s%2FacILyb8gFa1mrbCN2wpcjctkqiJWZAOTQPQenju4zPuaW2EPl5Nxdg8liFSYZAFyM1zKawQaLn9zwG4Xevxv2XoE65gR4nbuS7%2FbH09%2B3uDGh2pgbetKKWmoV1E%2F2Qyx8yA89wgGU9F8Op7Aoz%2BbnDcKb%2B2Fdf%2BzqQA%2BszBZjHirMG3JiS62M89nL3jdhG0a96egxG8WKwzE9p4fQJ7aEhO%2B2XasAhN3wfGeYBm9X5gzfqr8Z83H1BEloZQTuK7J2AUemqLmxzdLtNnMiq5SIC1DD7xh8cFhczok%2FLvXl0FHX%2BcujlhRc7ey3bsS%2Fe44E8qVKakqg6s43zeHrP2pOaLk9yOezkm2wBPuqkz2piYKQYFGdCl%2FmpMofCpN0KqEas6Y8r4DMOCKAxmhPJ5SgRxnXvsEzvVtpUUJ1qcQ2TpuYRYw%2Bd3jwQY6pgH%2FcGxcJM%2B8bMrV9OWlKKW6NJatwBvyyEtk%2BVnTqU187mInTEMhwNJ9hVTPTdXedkPsgTvXzuDl7fS2V9gt8B1wZq72A0cWzhNg%2FKVOqaOVeIbJwB6Y77fDU6EHoldmv6VuqYNU9voHbet4TyMPnckmqU0prJ5XxDSfYvHsro%2F9upcMJ%2FffCQK2OUzWo6ZNJmTBxQ%2BEFFtT0S2Yq2M%2BLMaQbInVfY6B&X-Amz-Signature=1fc06e9553fbf25e97029ef3bc8531620b8c074e2bcd78d89553b8e97e661bda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP7ULJQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F3fFNgitjLa9X9Otr3Qm1PzHP0nGaTpaWOEl%2FpQTEOAiEAxI%2BhUaSSjKqjAeo5SqoDWVOfuDowOd1ZmKa3VjEyEIMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO87SPlG0OsQb%2FL15SrcA1n%2Fcx717ndO0e3BrBqLpb7aaB788xEQKjx%2BfpLBhIW9K4iKWO7x7sSr%2BtdBD6MczMw9n1d%2F34RsJf0k%2B7oVTAm%2BmgTK3J4QWGahXCmfx%2FN84qqwLIgBJQr6hJanTMgFHovJVqQKCwQOwTW0i6w08D%2FfXcAMcl%2ByNk%2FJbR7nkfkrnZA1iZDcR6bNH%2Fom%2BcDVk72cUxCHo%2FQVGYBGjdDCTZsosQqu8SXcxr6Rg4q3qYYlK109tnfPHagLGqdp%2FuzD1y1L051GIaYEPLICcd5n4vo8qNhZZg5MnkiGVT8iAgBUdcPLKbvHbi%2BzxNd16Iv4%2F80ivxMjtzKxPkMGgZ0RYATg%2FkFObF39wUSwzFDScCN%2Bys9D%2F%2F%2Fpkae1nehrKmjkxyic58u4PlDaWe%2F2zzTmJKvyn3dFURtiTIss7mGftog%2FbxfxhAs8l4Olc%2FnNeiI839nZ87REqL%2FylqqnvCO6u%2FK%2FR79uy5eHzVJ%2FDzRrZDCiZwF7tu50gD2RuDr0fc4gAd7ci4bdyylpqRJxobcMM9AIaTsDJLln%2Bjd4ZlpmzMoRbRiNhwhhkFxscbfH3OmD7z9nwQRlk2rzjkhxzO56CHDKrMgcG%2FgokBB%2BmC3FCvefYpFx53LiQIIbdY9SMKbe48EGOqUBnG375AUKXCeLlmxiW6xbhVXd7rL1tCaNpuQSkRe8FPJH7pVJKWiUqH%2FfzPVJmknyOe6XVz7aMq%2FxfXjBkeFLqgs0i7YTtMI75K91zyZaYVwqVMI8iLR2tlcxk78qmDXMveo%2Bd9fS4A5y1pGxlnpwm9Zy7uldJdYQFyEhGZmQ1GwOzmnEhu0zdfwudExuLjgfSwwbIWrryqbgZdNPoOSyIwIgRd9n&X-Amz-Signature=28d1ecb138dbc46f7152757858a29413d7d72c244cef3050980ae3c241f78585&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
