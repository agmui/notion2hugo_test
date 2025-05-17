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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJT7M5I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXMVLMncaJCPCxxOTpi7vrR1QEGfg%2BCQer916WuW3YwgIhAKhLxdYfoJUIGUq6KwDx7cBFgZCGH3YvVnQVDtjW6sDiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwq%2FVVsUaKDusL5Lxkq3ANBNPEhhxmrxKro4IZXicuPDKt2KA2TbBhRKobNTB6quZ8hbZ%2Be33%2BnTK0f5saXCEoy%2FpvFy43U6jqbtNE%2FzE0iVgTAyWptRDYqFfXSSN3x2xfY522aEt943IJDxjQhnos0hLxsjVbLK1AWDOJO%2F8F3G5RQB%2FqafH0D5%2F6sHYiQPIrjHHmSXM3UcUXRiQd%2Fzl44lwjtt9ZtJMSHR%2F8KW%2FtazWPxLoEcGv7x40Wj2YD04k9O2P3oLiY8bpBG1DCesCJDVP9gAmBkN9ZKBv9EKl0B9DOVV%2FZdJLGQRPbv5tRceF%2FSilrhtSlbeUI2wRHOnk9NkQl04OzHGxXMt5464XI7lsMps3W5MLw8eKWMPB8X8jPHA8jhMW%2F7BmREZJmSvZcTgPz5u5kJXgRXIyF%2Bgc7l1KckX84nEt%2BSDGso9KHYWk7BIjrAATbGmLbVDb%2F3WYHN4pFdOzINh6WTqk%2B6ZAhlrh%2B7aYX6WsS9L1wGgqETlipeeehEsRBqaWiVgE6aJmzcABoa7%2FgXSPLKXiX%2BWq%2BIltezHktFBsa8Em0N1BFlE4stGL2tHRhkR3uvckUTZZL6goobno3auqblB4yxMpfNlFBWwxvoHFLL8QEMvn%2Bi6BeLeddIpVYCVjwJlzCytqLBBjqkAaQdFLZ3ks9clwd2OvpYlxfyRNZJkC2I8p6hb7wXhUhAIzVaI%2Fz8kNtScfWs8RKZCnim13%2BXKJ%2Bq5WcWWiGtXhCcY0EcDYIzaitPS2EKqXuwj4tKX4fKQi%2BFCGpygqwr%2BrqK0WKCxwC3c86pjCZa%2FA4jkl5HhF76qzqlnyt7bbkdtQl90q%2FtGIAeun%2FY9bQIScC1zf3%2BmMMRceEjkmXhnbcwH3d%2B&X-Amz-Signature=00e75ac222e5daef379059b2f9fcf1ea6d228fab38b994bd99d01fd2b92e62be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJT7M5I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXMVLMncaJCPCxxOTpi7vrR1QEGfg%2BCQer916WuW3YwgIhAKhLxdYfoJUIGUq6KwDx7cBFgZCGH3YvVnQVDtjW6sDiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwq%2FVVsUaKDusL5Lxkq3ANBNPEhhxmrxKro4IZXicuPDKt2KA2TbBhRKobNTB6quZ8hbZ%2Be33%2BnTK0f5saXCEoy%2FpvFy43U6jqbtNE%2FzE0iVgTAyWptRDYqFfXSSN3x2xfY522aEt943IJDxjQhnos0hLxsjVbLK1AWDOJO%2F8F3G5RQB%2FqafH0D5%2F6sHYiQPIrjHHmSXM3UcUXRiQd%2Fzl44lwjtt9ZtJMSHR%2F8KW%2FtazWPxLoEcGv7x40Wj2YD04k9O2P3oLiY8bpBG1DCesCJDVP9gAmBkN9ZKBv9EKl0B9DOVV%2FZdJLGQRPbv5tRceF%2FSilrhtSlbeUI2wRHOnk9NkQl04OzHGxXMt5464XI7lsMps3W5MLw8eKWMPB8X8jPHA8jhMW%2F7BmREZJmSvZcTgPz5u5kJXgRXIyF%2Bgc7l1KckX84nEt%2BSDGso9KHYWk7BIjrAATbGmLbVDb%2F3WYHN4pFdOzINh6WTqk%2B6ZAhlrh%2B7aYX6WsS9L1wGgqETlipeeehEsRBqaWiVgE6aJmzcABoa7%2FgXSPLKXiX%2BWq%2BIltezHktFBsa8Em0N1BFlE4stGL2tHRhkR3uvckUTZZL6goobno3auqblB4yxMpfNlFBWwxvoHFLL8QEMvn%2Bi6BeLeddIpVYCVjwJlzCytqLBBjqkAaQdFLZ3ks9clwd2OvpYlxfyRNZJkC2I8p6hb7wXhUhAIzVaI%2Fz8kNtScfWs8RKZCnim13%2BXKJ%2Bq5WcWWiGtXhCcY0EcDYIzaitPS2EKqXuwj4tKX4fKQi%2BFCGpygqwr%2BrqK0WKCxwC3c86pjCZa%2FA4jkl5HhF76qzqlnyt7bbkdtQl90q%2FtGIAeun%2FY9bQIScC1zf3%2BmMMRceEjkmXhnbcwH3d%2B&X-Amz-Signature=061909fa62626a4f5c3c72709c5e91f209e9d098130faf54a836f7b108eee726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJT7M5I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXMVLMncaJCPCxxOTpi7vrR1QEGfg%2BCQer916WuW3YwgIhAKhLxdYfoJUIGUq6KwDx7cBFgZCGH3YvVnQVDtjW6sDiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwq%2FVVsUaKDusL5Lxkq3ANBNPEhhxmrxKro4IZXicuPDKt2KA2TbBhRKobNTB6quZ8hbZ%2Be33%2BnTK0f5saXCEoy%2FpvFy43U6jqbtNE%2FzE0iVgTAyWptRDYqFfXSSN3x2xfY522aEt943IJDxjQhnos0hLxsjVbLK1AWDOJO%2F8F3G5RQB%2FqafH0D5%2F6sHYiQPIrjHHmSXM3UcUXRiQd%2Fzl44lwjtt9ZtJMSHR%2F8KW%2FtazWPxLoEcGv7x40Wj2YD04k9O2P3oLiY8bpBG1DCesCJDVP9gAmBkN9ZKBv9EKl0B9DOVV%2FZdJLGQRPbv5tRceF%2FSilrhtSlbeUI2wRHOnk9NkQl04OzHGxXMt5464XI7lsMps3W5MLw8eKWMPB8X8jPHA8jhMW%2F7BmREZJmSvZcTgPz5u5kJXgRXIyF%2Bgc7l1KckX84nEt%2BSDGso9KHYWk7BIjrAATbGmLbVDb%2F3WYHN4pFdOzINh6WTqk%2B6ZAhlrh%2B7aYX6WsS9L1wGgqETlipeeehEsRBqaWiVgE6aJmzcABoa7%2FgXSPLKXiX%2BWq%2BIltezHktFBsa8Em0N1BFlE4stGL2tHRhkR3uvckUTZZL6goobno3auqblB4yxMpfNlFBWwxvoHFLL8QEMvn%2Bi6BeLeddIpVYCVjwJlzCytqLBBjqkAaQdFLZ3ks9clwd2OvpYlxfyRNZJkC2I8p6hb7wXhUhAIzVaI%2Fz8kNtScfWs8RKZCnim13%2BXKJ%2Bq5WcWWiGtXhCcY0EcDYIzaitPS2EKqXuwj4tKX4fKQi%2BFCGpygqwr%2BrqK0WKCxwC3c86pjCZa%2FA4jkl5HhF76qzqlnyt7bbkdtQl90q%2FtGIAeun%2FY9bQIScC1zf3%2BmMMRceEjkmXhnbcwH3d%2B&X-Amz-Signature=2543dc5e0490d747454f766bb9b6e810ba8116fa1123d4f0fe79d89cc9d16c36&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPFNRAY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSms%2Fbrxl7RJzaXpr%2BoqlUPO6RjYaqOWDK0Apvn%2BrwmAiAdlLBvmcv8dmnk1fUSD4QrinS2PfhJlJjfr0fxzGGviyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMaCdmc8XSnri%2Bkkk1KtwDddmaiIkIlS%2BJo1IMX6Uc8%2BOqJs9IMWKssWb8drPSpVVWISVXhAlKUzj5DBTASxKNvPZ8tk6cduM7phSTb%2F%2BcfIGC4AGTBaVvdyRHhMasA%2FkmXUuMpXUpvHQIrK%2Ba0TpjUpLjSUtr9cPfWUrqUY0BKIMJ4xcNIPsPIWWf6SyC9QG1MK%2BkmnE7k7URRqOD3bqO2ai10Y1erd41LLwKm7hT6nTdPaD1r4rK9NIrnQraOfW61GtJhfy%2Fblyng3v0hMVBeOAYWgevMFhjXp6DY0ynTpSmWr%2BdRBsTFdrjdd6p4QyvuopEgkwooDqRQzA0EOW2O4M%2B0C1NqPhzJbmXXkndVbPxC0zpZ66fOyoRaHWK4u3dDPEhlPl7QbVO9IlBGAw5%2Fbv5puuDv7o773sCHxy%2Bd2yHKpAIs%2Fm2qDSdS6WMS73XdmrbY934cUdpOgLl5rCff67w8Te3Q6A17gAgaudE%2B24ErUZhHNx5zDKNahGl3l3aBqtFKYK377gSvuDdUQKhnHsylpbjumEaJP4o2rM8nPrjq%2FSQldj7EBiVzJnbofpCVVCLa0ly50YgkTGpBmrmLmJRYHtg1gLQqUW5QqqIx%2Fyqx0BvR0T68vtFV5C1w4%2BI8I%2B11l4fVE1s84cw2baiwQY6pgHFDm7x9Y1sE3BtJV3F6ML65I7%2FFLe9N8MZQegYkWUaF%2FHEYfot%2BvOlxEj%2B5XbxCWEAvhaP3kDIL%2B2B8SUlEsBrJIQTUl5I4lEQkddbuoXr0BZQ1AMjc%2B%2F4u9rY69ZwbVb6VSwqnVhVi%2BU6GetACNpPcEmLGYiZ8Npfc%2FSZ%2FOLQOY7zW4Ob4fiy3nPPg%2BKOSF%2BTgfGffcZ%2F7whEW94KuevtM%2B5hBk%2Fi&X-Amz-Signature=916bca3ab2fc8b7905bc7dd85322279f9da04991d89da0599e7b0b1dea93aa26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AH5VV4A%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJQdAbwcNYSCKpPHGIWuBVdMOcxq76a5NxFxVxq394BAiBNspV34bjOB41rCum0T%2Bn1dcBwaEYOpeqHC9fZiDxioSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMz%2FKH28TrsfM4QfngKtwDqj%2FTJCSnaBaPzu15gH6Ab9EQIQQp0GTT%2B%2FjvKYcJtDeBnNCYs8960FGzSwhCbaOSh2lG%2F7pI6DNpIxZutsmhBTR4wybpOqRjD3UhHMamdGyrBIUzp4186hXZZX7gRNn45KW3kKtuGLZxEMBC%2BghH92YfK0xmIXXLv6Nu0qD9m8XpPEtwi7yQt9xSeaCM321acYnssu58JKeGjUNWHnzLaa8eUuQ280xhMoZQ8FpNMY%2FhZqToHjnBJAcRMxbidcJKvZTlcstjmsH08UQ0EE2YM%2F21eThXAwUVxn%2FFvyappqJf8Qs8u4QG%2BcL9CUdACzLwlSkFivFJFpGgVagP7%2BWtmRogSKW5YMO3rNt2OSTX3cZnSZ4eNpI%2BMXZsqZ%2BrsadRidorvC77A6tyf1fa1hwcSv%2BBH6Q6ML0A0nC8UTLV55m7UvUUa3UmLujEs%2BlDGOUfUDQNmDWjueZP%2Bm1OgCMVXTvug8YRM1g3vM1N08gEYdW5v9%2FY1tPgL9Ac6zJOBwxj10TJNxoIEVpywVb3mQ3LaAOdEk6bfmCPLV1DeZTcGtb9dpGv%2Fiq5VLNXYeFl4zZauQfWoy27ebWMEut8CU2IOXEPcseBKAyySnssOfC2b9I6Jj%2FNGoNjXamHwv8w6bWiwQY6pgGul01lXiNJMW1TCIG4ENUeUjw1BjDBiucNmHppbyjYhZcLRlbObkK9VnVwFc565FkJICRWmdHRpnYEPS%2BYiftBqhZD462sNcDOmyS%2FWSMd9tZi2A85U5whFkYMjyMuGrUsPejHWfq3Y0m6jMbf9A7lEsxf%2FSrDkl2cck3iM%2FYBtQYmmM9JK8ppjz4WzrOswJeasjZyOSazjOc1NeD783FNotYB2uO1&X-Amz-Signature=4295eb19727155e6a7686b6e47f7187679673e5f60b9d97a7cb2f24767efe4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJT7M5I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXMVLMncaJCPCxxOTpi7vrR1QEGfg%2BCQer916WuW3YwgIhAKhLxdYfoJUIGUq6KwDx7cBFgZCGH3YvVnQVDtjW6sDiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwq%2FVVsUaKDusL5Lxkq3ANBNPEhhxmrxKro4IZXicuPDKt2KA2TbBhRKobNTB6quZ8hbZ%2Be33%2BnTK0f5saXCEoy%2FpvFy43U6jqbtNE%2FzE0iVgTAyWptRDYqFfXSSN3x2xfY522aEt943IJDxjQhnos0hLxsjVbLK1AWDOJO%2F8F3G5RQB%2FqafH0D5%2F6sHYiQPIrjHHmSXM3UcUXRiQd%2Fzl44lwjtt9ZtJMSHR%2F8KW%2FtazWPxLoEcGv7x40Wj2YD04k9O2P3oLiY8bpBG1DCesCJDVP9gAmBkN9ZKBv9EKl0B9DOVV%2FZdJLGQRPbv5tRceF%2FSilrhtSlbeUI2wRHOnk9NkQl04OzHGxXMt5464XI7lsMps3W5MLw8eKWMPB8X8jPHA8jhMW%2F7BmREZJmSvZcTgPz5u5kJXgRXIyF%2Bgc7l1KckX84nEt%2BSDGso9KHYWk7BIjrAATbGmLbVDb%2F3WYHN4pFdOzINh6WTqk%2B6ZAhlrh%2B7aYX6WsS9L1wGgqETlipeeehEsRBqaWiVgE6aJmzcABoa7%2FgXSPLKXiX%2BWq%2BIltezHktFBsa8Em0N1BFlE4stGL2tHRhkR3uvckUTZZL6goobno3auqblB4yxMpfNlFBWwxvoHFLL8QEMvn%2Bi6BeLeddIpVYCVjwJlzCytqLBBjqkAaQdFLZ3ks9clwd2OvpYlxfyRNZJkC2I8p6hb7wXhUhAIzVaI%2Fz8kNtScfWs8RKZCnim13%2BXKJ%2Bq5WcWWiGtXhCcY0EcDYIzaitPS2EKqXuwj4tKX4fKQi%2BFCGpygqwr%2BrqK0WKCxwC3c86pjCZa%2FA4jkl5HhF76qzqlnyt7bbkdtQl90q%2FtGIAeun%2FY9bQIScC1zf3%2BmMMRceEjkmXhnbcwH3d%2B&X-Amz-Signature=4962790f550821ad01a9e538e353c6adb5bdeb6e8d949a4cfe8522df27de5394&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
