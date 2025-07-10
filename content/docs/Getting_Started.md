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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D65NTQB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjSNHjY9xCgdaD3ztlxeMH1i5NF%2FM3ThSGnXFmd2EMpQIgUoCAWUpNMSxwvlRIn7cJNnZFZ2MiamUHhpcqNA49EN4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIlFCGx6xnNeO3v4CrcA08t0LYSYFTC8BVbhwE7NFwagExrvIZ2z7%2FyraHL6py3fTp0un9Mnm0QYY8hJwpqModIkynTPGZKYJpWgAXUcE%2B2vwrm%2BeaL8I9t7qaX7l%2FJ5SVlXGzPhfWvP9eT2f8HpoiFWiYwaG543Txt6EoI0HClvvDHCIdjF45ziNW3QI6J1Qh8e%2B6Xzi6jKlSxPAaMAR4T8thmks8uHC1qhWMnvmpmMhd3kpq4i1%2BeZq5XNd2m94AkLWbTxswEoDIle%2FCP6ry1m7fYKVmKo8VaeKAbegB48K%2FWmWHSEId%2BeiShOIyzAZttxB7nVKUiIS0s4k0%2B2p2T3jhKLxV65c393Brv5BGYjE3SoJQvUF16iFHyyHhR8zgQEbZHnxVNvEaQ9sNQKQIatzEGoq%2BgHnIC7MaGBnJ1V5GZcwDPAj9PoGeZiB3muPXDmyWPWCeK9NYuZsA%2F76y9Wts%2Foh2Vc47OXbrw2VzlSS7eM%2BX23wa%2FV81dAspT9R9d5wLWt0gRAj9tgX%2B98a0GupMEkA71FDFkNlxdjMMKkTccGad6nEAu3hTOox27j5Er9eRmZC%2BVfFPwDlZX3a6IAxBP9odCXwRDBAMPsGFVkp81nMy8de6dSzKhunSdQAXY8FG1a1O419xnMKr%2FvMMGOqUBe%2BEl7TYsTEReRf5iyb2LuVlsjH9T07PU%2FbyFt5C1J3yX5zxCyxFiQyBG4j5VQLpkL1B4cLrwr7beEIToeTG5eZLvU1WhRI4SByOa%2FOrNUwa6JJHEV4fdlBrXjn2Xui%2FJm2j17lAx04lujLqi1K5bGnMQj8WQC%2B6dzx5FecHGWaVH6X2SPFVrvyZ0TcMhoGK6nMs9PQR4tx%2BpbLGPDBEzAOAN8cv%2B&X-Amz-Signature=1dc846c6c3cabe43d6d3a0584a1f0bff2b49cb294448ea9adc81dd11b2481e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D65NTQB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjSNHjY9xCgdaD3ztlxeMH1i5NF%2FM3ThSGnXFmd2EMpQIgUoCAWUpNMSxwvlRIn7cJNnZFZ2MiamUHhpcqNA49EN4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIlFCGx6xnNeO3v4CrcA08t0LYSYFTC8BVbhwE7NFwagExrvIZ2z7%2FyraHL6py3fTp0un9Mnm0QYY8hJwpqModIkynTPGZKYJpWgAXUcE%2B2vwrm%2BeaL8I9t7qaX7l%2FJ5SVlXGzPhfWvP9eT2f8HpoiFWiYwaG543Txt6EoI0HClvvDHCIdjF45ziNW3QI6J1Qh8e%2B6Xzi6jKlSxPAaMAR4T8thmks8uHC1qhWMnvmpmMhd3kpq4i1%2BeZq5XNd2m94AkLWbTxswEoDIle%2FCP6ry1m7fYKVmKo8VaeKAbegB48K%2FWmWHSEId%2BeiShOIyzAZttxB7nVKUiIS0s4k0%2B2p2T3jhKLxV65c393Brv5BGYjE3SoJQvUF16iFHyyHhR8zgQEbZHnxVNvEaQ9sNQKQIatzEGoq%2BgHnIC7MaGBnJ1V5GZcwDPAj9PoGeZiB3muPXDmyWPWCeK9NYuZsA%2F76y9Wts%2Foh2Vc47OXbrw2VzlSS7eM%2BX23wa%2FV81dAspT9R9d5wLWt0gRAj9tgX%2B98a0GupMEkA71FDFkNlxdjMMKkTccGad6nEAu3hTOox27j5Er9eRmZC%2BVfFPwDlZX3a6IAxBP9odCXwRDBAMPsGFVkp81nMy8de6dSzKhunSdQAXY8FG1a1O419xnMKr%2FvMMGOqUBe%2BEl7TYsTEReRf5iyb2LuVlsjH9T07PU%2FbyFt5C1J3yX5zxCyxFiQyBG4j5VQLpkL1B4cLrwr7beEIToeTG5eZLvU1WhRI4SByOa%2FOrNUwa6JJHEV4fdlBrXjn2Xui%2FJm2j17lAx04lujLqi1K5bGnMQj8WQC%2B6dzx5FecHGWaVH6X2SPFVrvyZ0TcMhoGK6nMs9PQR4tx%2BpbLGPDBEzAOAN8cv%2B&X-Amz-Signature=cd130a28d92f67a707cc7fa661e30263001320a3041fdd063baa0943c7a78cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D65NTQB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjSNHjY9xCgdaD3ztlxeMH1i5NF%2FM3ThSGnXFmd2EMpQIgUoCAWUpNMSxwvlRIn7cJNnZFZ2MiamUHhpcqNA49EN4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIlFCGx6xnNeO3v4CrcA08t0LYSYFTC8BVbhwE7NFwagExrvIZ2z7%2FyraHL6py3fTp0un9Mnm0QYY8hJwpqModIkynTPGZKYJpWgAXUcE%2B2vwrm%2BeaL8I9t7qaX7l%2FJ5SVlXGzPhfWvP9eT2f8HpoiFWiYwaG543Txt6EoI0HClvvDHCIdjF45ziNW3QI6J1Qh8e%2B6Xzi6jKlSxPAaMAR4T8thmks8uHC1qhWMnvmpmMhd3kpq4i1%2BeZq5XNd2m94AkLWbTxswEoDIle%2FCP6ry1m7fYKVmKo8VaeKAbegB48K%2FWmWHSEId%2BeiShOIyzAZttxB7nVKUiIS0s4k0%2B2p2T3jhKLxV65c393Brv5BGYjE3SoJQvUF16iFHyyHhR8zgQEbZHnxVNvEaQ9sNQKQIatzEGoq%2BgHnIC7MaGBnJ1V5GZcwDPAj9PoGeZiB3muPXDmyWPWCeK9NYuZsA%2F76y9Wts%2Foh2Vc47OXbrw2VzlSS7eM%2BX23wa%2FV81dAspT9R9d5wLWt0gRAj9tgX%2B98a0GupMEkA71FDFkNlxdjMMKkTccGad6nEAu3hTOox27j5Er9eRmZC%2BVfFPwDlZX3a6IAxBP9odCXwRDBAMPsGFVkp81nMy8de6dSzKhunSdQAXY8FG1a1O419xnMKr%2FvMMGOqUBe%2BEl7TYsTEReRf5iyb2LuVlsjH9T07PU%2FbyFt5C1J3yX5zxCyxFiQyBG4j5VQLpkL1B4cLrwr7beEIToeTG5eZLvU1WhRI4SByOa%2FOrNUwa6JJHEV4fdlBrXjn2Xui%2FJm2j17lAx04lujLqi1K5bGnMQj8WQC%2B6dzx5FecHGWaVH6X2SPFVrvyZ0TcMhoGK6nMs9PQR4tx%2BpbLGPDBEzAOAN8cv%2B&X-Amz-Signature=a51601c0dd0369bce4856eac0210863e1ac839be160f5edde1a2efb20f9a79ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TA76QO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7lMHxAc9oPHcEWCZ9eP9bZ9IFXGEcbtYP5kclG80xbQIhAIagQLyxpZvsKq7fFeQ%2BSfG%2F%2FaWTquryg8VSJe0AvAnUKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtNfhNUbQhKyC%2Fu0Eq3AN5LM%2B2Zc2wbnsuSpudR6WPe58fdulrRmlVWTmtyJ%2Fl3yq3dVGXYPMCMa9bn%2B5fsDrXERGijU1j7TdLnUCdiqJEP2y1hnjqmulaNPnjmvHXB6D%2Bu%2BZWmC1uVi8JvA5z5yhYbmm0X%2FTlzjenGTktrPPIJ%2BBafKMx%2F5LyTVLQPlRO5wXaGoA3XITqWKZCC%2BQB%2FI5cJmwq0yNFnKvS9ZN%2FfYYK4IoHn0qnqyaX28hYjAGm%2FSU7EvGFhj2m67ItBSgY6xLtOlVSlNG2E1VN5TjOnKDk5ucm2hG2DEX924eL%2F4gd%2BqG4Hbnwneh5A9Fb1dZjpBpyW5NJRdpDxRsYY0qQnJB5%2FA4MJ0HS2Xwse%2F5HA8CrD6pFv8Q3SQT%2BTLzds4yQi9hyztBgP1QEfH2a5PdeYV24Dz4pTpDPCN0uP0QxweOxXaohZrO4DYP44ZBCe3JkvsAH9CYsU%2BoSW25U%2BxEHa6IKHfXnYrrFDSWNHE0EeNftoVYtdShmRyoxL%2FZNoQMgIXmiXZKuHrSzzyYCCMclXWPdJ37UOkkIZSVVUw2Q58grW3JGGoYCcoRADsV4q9N1i6NvCWcz%2BYkFXPlPNujigsSmRtVG5EPipHswwd3ZeKWIfKq%2BM4bCAN%2B8%2FWth6zDD%2F7zDBjqkAThqCQqvmTqoHADeT4m1yV0mxlehrZy9Bz00PZFE1uxit2X4g9ViX49EeBra5dYWiF5czcK%2FUeq4XXoEzrZeWhJC8S9OEMY8ElE2PhxrGhmqaeValhjKFhGykLEUHOBCpgxbwlJ%2Bzya%2FQ5VZYIFVMm%2F1J9KwZpq8sKw3ajgOm6Oc%2Fo%2BJZg28R3f%2BvRjtZ%2Fmo2d4xKiXL0tx1d91MOPCYz0h3x3wW&X-Amz-Signature=ecccd037b4f242296fa2d9fe6d15af7d2e8268e2fca30094e4bb0196701b6dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT6CNYP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXbGhUL1GoIb6uiNDFAwI9R9u0i7VDvMblRKAzCdL1ZAiEA8sB6cm9AZet0q7JlwiD6SopJxvrHEROtmV%2FL1IMDKwIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5ibWg3LDy4eDLAACrcA4mFkbXJXM6KtBbF2Pons4TlqQiwnLRE%2Ba8exNB2Jd%2BHfs8AdMhCAODjydj1sBhiTG%2FfRFvSdRBNU85CdAY1VcZYBAoLE%2FRMvNnimpisV6tG%2Fx5Qu%2FwfACevWlvaQvpjGGjD6Qd0Vdv4PdI0DKkezfBPxtcY4HQQxpLXR566ShdKFdPmeOWRIFsl0mAr5%2BjUd928k8sby65WzIhbbCjSQp7f%2F3b%2BbJ0s4wpYxqB%2Fht4FmFe3Vq2RjNmHeUjJYTjcrHK5ya1BR7MRNFTewlrEikqqDLAmEf6QY5LJNlRKtjgfUxMB5mo4xEIAjqQR844FvtIMVYJ5wTWVsT2MqQrgJ8lHy2dmO3dwsCrfZ7%2FuQq4MdSpMKvugVWnqZ72WaOr8joXs1vzFYEuUN02O5fkwpFsMpqiMto4S23P6VGKhLRqLFHbIQXeisildyXtZDnjFloES3v9lx3Pzt0nbedfhQ5Z8Cq2RyCirlWQX1fviEDaKrKiFoUH2CdC2U%2BtWjDIKKW%2BhKRpUolzQEnIsVasqxAqiIPPCiZRElQoqB3UPZKmAKK7r%2BfEL3%2F24IuckztWn5L98BoLuh%2BZ1tHY1rmp37IM0oPQDPHDPyyu61991c%2BT9gJLCAPrTSPrhKEOVMMP%2FvMMGOqUBD3otsTTlp0R1s12UUvGa1UmL%2FPL6PGk12dAQuXsag%2F3VQjgcDT86Ph7zNKP1FjvgTXraiLA%2BkpBoXQu5xW00ikNNgwrLBjGoflHFl58uMaJy8oFDUJ9oYUTCIvpUSiw%2B09Y7GKhXu52jlUhGVmSlL2CBjNV%2FBZ2eJHmB2xBaq5RacXezMdv9vIwmY0ETxAaDLlbRJpYaBuemBa4osyt0GjllAyxV&X-Amz-Signature=33db28ca79613a7ad72b0aa2b402d6ffab9c320f925def57552831fe0e2e6db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D65NTQB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjSNHjY9xCgdaD3ztlxeMH1i5NF%2FM3ThSGnXFmd2EMpQIgUoCAWUpNMSxwvlRIn7cJNnZFZ2MiamUHhpcqNA49EN4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIlFCGx6xnNeO3v4CrcA08t0LYSYFTC8BVbhwE7NFwagExrvIZ2z7%2FyraHL6py3fTp0un9Mnm0QYY8hJwpqModIkynTPGZKYJpWgAXUcE%2B2vwrm%2BeaL8I9t7qaX7l%2FJ5SVlXGzPhfWvP9eT2f8HpoiFWiYwaG543Txt6EoI0HClvvDHCIdjF45ziNW3QI6J1Qh8e%2B6Xzi6jKlSxPAaMAR4T8thmks8uHC1qhWMnvmpmMhd3kpq4i1%2BeZq5XNd2m94AkLWbTxswEoDIle%2FCP6ry1m7fYKVmKo8VaeKAbegB48K%2FWmWHSEId%2BeiShOIyzAZttxB7nVKUiIS0s4k0%2B2p2T3jhKLxV65c393Brv5BGYjE3SoJQvUF16iFHyyHhR8zgQEbZHnxVNvEaQ9sNQKQIatzEGoq%2BgHnIC7MaGBnJ1V5GZcwDPAj9PoGeZiB3muPXDmyWPWCeK9NYuZsA%2F76y9Wts%2Foh2Vc47OXbrw2VzlSS7eM%2BX23wa%2FV81dAspT9R9d5wLWt0gRAj9tgX%2B98a0GupMEkA71FDFkNlxdjMMKkTccGad6nEAu3hTOox27j5Er9eRmZC%2BVfFPwDlZX3a6IAxBP9odCXwRDBAMPsGFVkp81nMy8de6dSzKhunSdQAXY8FG1a1O419xnMKr%2FvMMGOqUBe%2BEl7TYsTEReRf5iyb2LuVlsjH9T07PU%2FbyFt5C1J3yX5zxCyxFiQyBG4j5VQLpkL1B4cLrwr7beEIToeTG5eZLvU1WhRI4SByOa%2FOrNUwa6JJHEV4fdlBrXjn2Xui%2FJm2j17lAx04lujLqi1K5bGnMQj8WQC%2B6dzx5FecHGWaVH6X2SPFVrvyZ0TcMhoGK6nMs9PQR4tx%2BpbLGPDBEzAOAN8cv%2B&X-Amz-Signature=2395f6642b25621757fc8eeca6e0cd4367523321bf38a87534541c9d8665ae51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
