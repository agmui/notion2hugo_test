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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DCVICF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTj2CLo%2Bv%2Bzp2ZGweTMdS74ZSLyWShxg5MBSSqO0cB4AiA2OjBjV%2FNiSXmW1fnsc0LgKq6HTjVW0gjka8S4dmBRcyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMDYLeTgfVoaKz99TkKtwD027tYCKTY0mboFHiIEXeY1H%2B0bMRSS3uYUlZsh1bgOJujX84xg%2Bl7ZQtyyAs2zfNrSj9oboX%2FH5hLSGpqot6OPGuQz5GcTP%2BAmfKFivAKRHI318ACD52KZrGTMsSLEBmkQ3ridiqhescO7TwD5ty4xl%2FrnKS0ZzN%2Falg4xpyM0mSCIY7p74oJ7iy5P6I5sMPhrYgrgFFU9Zv2OKvpZUIqZFMqlDnZE%2BKdFxZL6MMoOeOKUdlvzIuBlGIeY5IOGfYce1mPzVD%2BHTU9FnYRgciH0dAHZrmhHNgm2UOVCybqwuK1IH8r89o%2Bj2NYcIGpIasOLPPjH0zpRh89M3tZyhLquwxkYzD9VaJ%2BQKNiBoCzvC3YHPKjRavvNSkQBYmVLVWtB2LG3lI%2BbINXvksdG9etnx1YjD5HRh5wjcY708Csx3XbpWCl98odxf0TKrWYGBmcCybEmsxGOOX6DEWPWqovffPKBmvc65z6S0r7ut%2Fk00I4nc2lFiC2E4iye9xY0BT7M36q5MQndASg9S9zaSGdYoeKL5sQy%2Bx%2BMg%2FGzKjllutt3WfzlMQCwE%2F97PRa2YcmPOrV1kXPePJjHOmB32AuZi0FDDOhrjmziPvTYScBpoE2yIjlltDuDWyJkgwqL%2B1wAY6pgF7NTnAHPQxkMugYp3fb0%2FahORK0HGruyPR9GdBi9JaChLJzBzDD9XapDCklhdqhXGegc%2FFlb0PlYrxSd5jSmnbC10OxSGxD0d%2Fjshj4l6y5du%2F3uaNAd%2FoDM2IQXgVvyi7qvNnR8Yks88mxGNe%2FU7yBX7GNcT5%2F27j%2Fes2J1rJGCEP2nC2UFQHAdPf3SyiNTdnI6L6goGCE66uRiHz0PYbUFEVTauU&X-Amz-Signature=d266354f78583d847cd242ec8316c7aa9d4392a2988f6a2e73aa576d01926279&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DCVICF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTj2CLo%2Bv%2Bzp2ZGweTMdS74ZSLyWShxg5MBSSqO0cB4AiA2OjBjV%2FNiSXmW1fnsc0LgKq6HTjVW0gjka8S4dmBRcyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMDYLeTgfVoaKz99TkKtwD027tYCKTY0mboFHiIEXeY1H%2B0bMRSS3uYUlZsh1bgOJujX84xg%2Bl7ZQtyyAs2zfNrSj9oboX%2FH5hLSGpqot6OPGuQz5GcTP%2BAmfKFivAKRHI318ACD52KZrGTMsSLEBmkQ3ridiqhescO7TwD5ty4xl%2FrnKS0ZzN%2Falg4xpyM0mSCIY7p74oJ7iy5P6I5sMPhrYgrgFFU9Zv2OKvpZUIqZFMqlDnZE%2BKdFxZL6MMoOeOKUdlvzIuBlGIeY5IOGfYce1mPzVD%2BHTU9FnYRgciH0dAHZrmhHNgm2UOVCybqwuK1IH8r89o%2Bj2NYcIGpIasOLPPjH0zpRh89M3tZyhLquwxkYzD9VaJ%2BQKNiBoCzvC3YHPKjRavvNSkQBYmVLVWtB2LG3lI%2BbINXvksdG9etnx1YjD5HRh5wjcY708Csx3XbpWCl98odxf0TKrWYGBmcCybEmsxGOOX6DEWPWqovffPKBmvc65z6S0r7ut%2Fk00I4nc2lFiC2E4iye9xY0BT7M36q5MQndASg9S9zaSGdYoeKL5sQy%2Bx%2BMg%2FGzKjllutt3WfzlMQCwE%2F97PRa2YcmPOrV1kXPePJjHOmB32AuZi0FDDOhrjmziPvTYScBpoE2yIjlltDuDWyJkgwqL%2B1wAY6pgF7NTnAHPQxkMugYp3fb0%2FahORK0HGruyPR9GdBi9JaChLJzBzDD9XapDCklhdqhXGegc%2FFlb0PlYrxSd5jSmnbC10OxSGxD0d%2Fjshj4l6y5du%2F3uaNAd%2FoDM2IQXgVvyi7qvNnR8Yks88mxGNe%2FU7yBX7GNcT5%2F27j%2Fes2J1rJGCEP2nC2UFQHAdPf3SyiNTdnI6L6goGCE66uRiHz0PYbUFEVTauU&X-Amz-Signature=4133d6a94ea68cfdf92ad6fadf6c2dc255e2c6efce0ec8ceed741ddf582f4b17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VUKEQ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1l9Lp8TCu0C%2B2th1aegOtVyI8vx3pNisliPPrNeKuSAIgXx4S%2FiqVdYacmZmdTUCqFU5Dco7hNnhdI2h7N7409p8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDD3Mj49EP0AHe9I3%2FyrcA96a5YK3T8WO%2Bm3sjk6j8%2FXBtFVRFWqddj1zF5JxcRui9%2BXjWHfI2aPMa56yIlWcYh9ynheMEMoDno2py0vixIjX46pm4EYLTAxTHMLAGeuyvrIFHQQwqLrwWB4sHXHMu6NOt%2B8yGKLBfFtsYOuvLOoK3xp8jRxA698DDlWqhVNt%2BskSwfuCAVqKhcwsw%2BFLSprXGcFU432A%2BN8xduGDvx%2FGTpLS4V%2B2xm1WhChUBcNryDUFOQYfET6VQBqtNVfHZFm7xmBgqPE7VNgnd3GQBCCkDNySkYz50e6vVjcSoXZqb0ygKawvBZwp58N4VPbze0FN0fVry1Zl4KzfUh2%2BWVTeBY3CXVRLgMWMOfoyVqC1SBp9t15JpgZrbYKoHKYMrhguFMgGQDygksZOYEvrLFtaNMNm4bmS2ZTumDvfwZOAbRUbULu91RKiYtCYOA5MtZIu0inVjH6Fd9mEyNxFABZ2FkXrqhYawOXXfTTzvB60i7KmCDBBSDoaUluV0e7MGpyE2lscLEhbHZX8aaikqs%2Bcqq6lKu4h9IOVy2BRImTYED1ev81AS0MbNHeYH9pQs8sS8q64UHNYSEQtajc9%2BcxOao9d2BwKIFHGK4jNIQpUDeAYkMhXaiciTBSEMKi%2FtcAGOqUB7o6Ff3LFf8D3Zax%2BsPCU%2FTEgu21sOAmm%2FTXR5f274xwqHEuwh45WM%2FrUfJkGSwr09OCtboXR6Bl9Xwkrxy1CjTIExN0LNrH2qz24g6YbC8HoxB6fY4WlIGA7Rj5cweAOoPnimI2L8NqPX8%2BqAnOZhCp7DG%2F9GGIz4R2v5JSHflAaWt4ePaEhjed6Vua4eR4xJyI57vNC8krEbPOYVp1C%2BvoUQbp9&X-Amz-Signature=bfafd4f8a939fe2bbad57fb101ca7cbc14948b0f37c673a9d84d1a72a0504f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3Z6XTR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdtOyeRshSMvUO8mjX5j1ARcnHJ%2BTV26rwZlESv4uy7AiEAxq%2F305UmroclRv6Kb91lTagHjW2onE1sDbTmvDDs8xQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDEj%2FaPbmLr1I38BOjircA9Sch3I6llV%2BB0HUcYlYI2gpjHPFlMXDRyt2KSaAgZpLDhFt3cR0Tc%2BLh7pOei7jljPS74RBjnpIIXo7z5ClSpzStAlwyE8XFxJFEU98rNmXRUW3Koc%2BPDEqDT4KPm4vpb05MCzp1FrHwLa7AFk8ZzQpw1P35gWCv4OxQU494Ln0gnLRLFEm2C6Ey40qQwzsvDW6bK5fYpjQGsFMKSZ0imp99LekCf1eqZjjGM2VluzQpRmF7j6xJ0AJHdxEM7AReJ9AICGzCwc%2FflLWsTtiVhGiiua6scKI9vDtkIhbJcn5Q1z0rMdOVRnyZv%2By8sxb%2Be25jtCq0qPcVD%2FK%2FffUoeuCVaZWwQS%2BtQ8OUtdpse%2Ft2RJ0JFiryujhH%2Byqlk94aMi3KN%2F6ndHP%2BNqnMHyOqmZE7Vz3C5tunDAQ%2F%2FNgCDdByNcCg36P6gC5adBlEuyheMtJuiRHf6sn%2Bseq%2Flhaxkf2RHqJSFFQX9cDSNYpGtafoxRnHFfQouDV%2FKF7a%2F6O57YVPZMmDih%2B0%2Fqto9XIJ8gVltcaEjReGCde6A7z%2B7lfVZj8JRhJCtZcVs4vfUL%2F0Hir8xS49qO%2FO5ljDn7D5Yaa1azQLe63OUcWxxwL8R6KAgzcGn0i8L8KhwHiMKy%2FtcAGOqUBwqALncUGKl%2FM4eR1g86dz3qiXZKk3CNVgPdcmnT5EFrcus7tTIxAQVxsiTjrDOl66BlOELbrxeryRonq32qn5sGEy%2FrZmKk54lRPzHrGja1elr7Gj3%2BVxcaQK%2FUHrVFo2xdwv3suLHzC9hTwkybtPfwiUS5EBU7YmeHznWfygriNhZhGCNMgWOb8MXYZrkR2D%2FWV5t8KSkMYfE2wGs%2Fpw4eHS1Ez&X-Amz-Signature=7791b635feaf5033bd9cf3a07e75c55f4ffaf213cebd0314f9b74efd46e32ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DCVICF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTj2CLo%2Bv%2Bzp2ZGweTMdS74ZSLyWShxg5MBSSqO0cB4AiA2OjBjV%2FNiSXmW1fnsc0LgKq6HTjVW0gjka8S4dmBRcyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMDYLeTgfVoaKz99TkKtwD027tYCKTY0mboFHiIEXeY1H%2B0bMRSS3uYUlZsh1bgOJujX84xg%2Bl7ZQtyyAs2zfNrSj9oboX%2FH5hLSGpqot6OPGuQz5GcTP%2BAmfKFivAKRHI318ACD52KZrGTMsSLEBmkQ3ridiqhescO7TwD5ty4xl%2FrnKS0ZzN%2Falg4xpyM0mSCIY7p74oJ7iy5P6I5sMPhrYgrgFFU9Zv2OKvpZUIqZFMqlDnZE%2BKdFxZL6MMoOeOKUdlvzIuBlGIeY5IOGfYce1mPzVD%2BHTU9FnYRgciH0dAHZrmhHNgm2UOVCybqwuK1IH8r89o%2Bj2NYcIGpIasOLPPjH0zpRh89M3tZyhLquwxkYzD9VaJ%2BQKNiBoCzvC3YHPKjRavvNSkQBYmVLVWtB2LG3lI%2BbINXvksdG9etnx1YjD5HRh5wjcY708Csx3XbpWCl98odxf0TKrWYGBmcCybEmsxGOOX6DEWPWqovffPKBmvc65z6S0r7ut%2Fk00I4nc2lFiC2E4iye9xY0BT7M36q5MQndASg9S9zaSGdYoeKL5sQy%2Bx%2BMg%2FGzKjllutt3WfzlMQCwE%2F97PRa2YcmPOrV1kXPePJjHOmB32AuZi0FDDOhrjmziPvTYScBpoE2yIjlltDuDWyJkgwqL%2B1wAY6pgF7NTnAHPQxkMugYp3fb0%2FahORK0HGruyPR9GdBi9JaChLJzBzDD9XapDCklhdqhXGegc%2FFlb0PlYrxSd5jSmnbC10OxSGxD0d%2Fjshj4l6y5du%2F3uaNAd%2FoDM2IQXgVvyi7qvNnR8Yks88mxGNe%2FU7yBX7GNcT5%2F27j%2Fes2J1rJGCEP2nC2UFQHAdPf3SyiNTdnI6L6goGCE66uRiHz0PYbUFEVTauU&X-Amz-Signature=5e00d590f42aebda03aaa51040bcfd7460434c3f05f6aebc53ceb2d6c795fba3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
