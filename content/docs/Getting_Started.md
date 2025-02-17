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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NDJZIK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1%2BOgHsWil1h5EcC8msPjvjwmUHbH%2FyRFcSR4D9DZ%2BzQIgZxSaZMvk96Hky6jSsMwr0yQBrImOMuGWA6ClsfrAQs0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCgbSX93xtHLhYvrfyrcA5y4MeefqBLOzT3RgvaVVfjMtEZYFOUtc7iSYYJ9GADJvguOQe7bg2gOa6zGMxfXC39qDEHA9T92jGcylI6dMC4viSVcurSg5rR%2FbHSmIW%2BxbsSWef0yO8KNGUd1s%2F%2BVCALmYPD7pmHsfVV%2BWrfG0iG5UhQvB33IU52wk0m%2F81Pz9R87CQdkwtthS51cn0Jc0vKPa5zQnc7YSOC%2FtNhN6tNh1Bvyvui9k6lt7asVnzNvLziU42IdCp5DAT7FRPWiXUhtuxbiymPAyYvCYpCA%2FVfecP8uR0oCiza%2BdVUjrLBJ%2FEF08RLvFeNgBas9r8iufXHVrE%2BpWCo7MGMgIlHIquDPbkCs%2B5Oemt6lp5iBa0QTWQCJHmE3Omv5R8tND4%2BpZ93nkCUlhFg9IYV8%2FqUSbrThUVHzuQbkUtKlY7eN%2BfO37Uem2KY0Cq296%2Bc2aKIGYV5R%2BUmMpbz3DzluMHIniQTLiY6l5YrsS5BgeHHrGx2plEgpBHsANDe%2BzIact4Kbv%2BwMdVLPA3qjbsVNeMNxMe2t%2BEL62lz3uIyuOyAtiu%2FBU7sGN68aFb2t%2FTrHwz4zN2G6pWzZ4vBhmNGlKRzIHXeGu798y9MILaPwyafRHTxGHz3%2BlR2SvTWokPdiMOLpy70GOqUBNo3bBgS0SBXSjpkCOsVHJyQ%2FIfIf1d3IPKwoykcJaPxMhOQaY7yjSkSCOy%2BKFsriFRlNwk8VjCKhhr0ACk7VEn6lh0kjOwi6gsQZWmwfMe2N0AA3v4vhNZ9%2BymAIjd1RfJnHSQwczkFmQRDwGyn4KHeKfAu94cKYluksC8bx4eXkRxErIejGdJU89H2gvnUQ15uq%2FMI9PbxKjbc4XFk9nGTa5FsZ&X-Amz-Signature=34350a4baab69ede76289d108c5dab76506cbf5b035640f7be50c09963338c36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NDJZIK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1%2BOgHsWil1h5EcC8msPjvjwmUHbH%2FyRFcSR4D9DZ%2BzQIgZxSaZMvk96Hky6jSsMwr0yQBrImOMuGWA6ClsfrAQs0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCgbSX93xtHLhYvrfyrcA5y4MeefqBLOzT3RgvaVVfjMtEZYFOUtc7iSYYJ9GADJvguOQe7bg2gOa6zGMxfXC39qDEHA9T92jGcylI6dMC4viSVcurSg5rR%2FbHSmIW%2BxbsSWef0yO8KNGUd1s%2F%2BVCALmYPD7pmHsfVV%2BWrfG0iG5UhQvB33IU52wk0m%2F81Pz9R87CQdkwtthS51cn0Jc0vKPa5zQnc7YSOC%2FtNhN6tNh1Bvyvui9k6lt7asVnzNvLziU42IdCp5DAT7FRPWiXUhtuxbiymPAyYvCYpCA%2FVfecP8uR0oCiza%2BdVUjrLBJ%2FEF08RLvFeNgBas9r8iufXHVrE%2BpWCo7MGMgIlHIquDPbkCs%2B5Oemt6lp5iBa0QTWQCJHmE3Omv5R8tND4%2BpZ93nkCUlhFg9IYV8%2FqUSbrThUVHzuQbkUtKlY7eN%2BfO37Uem2KY0Cq296%2Bc2aKIGYV5R%2BUmMpbz3DzluMHIniQTLiY6l5YrsS5BgeHHrGx2plEgpBHsANDe%2BzIact4Kbv%2BwMdVLPA3qjbsVNeMNxMe2t%2BEL62lz3uIyuOyAtiu%2FBU7sGN68aFb2t%2FTrHwz4zN2G6pWzZ4vBhmNGlKRzIHXeGu798y9MILaPwyafRHTxGHz3%2BlR2SvTWokPdiMOLpy70GOqUBNo3bBgS0SBXSjpkCOsVHJyQ%2FIfIf1d3IPKwoykcJaPxMhOQaY7yjSkSCOy%2BKFsriFRlNwk8VjCKhhr0ACk7VEn6lh0kjOwi6gsQZWmwfMe2N0AA3v4vhNZ9%2BymAIjd1RfJnHSQwczkFmQRDwGyn4KHeKfAu94cKYluksC8bx4eXkRxErIejGdJU89H2gvnUQ15uq%2FMI9PbxKjbc4XFk9nGTa5FsZ&X-Amz-Signature=83951f80edbeb9e4cb5831f9fd09280163e6d51bcb66b2a372028b528cad0f62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJP3OQX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDBg%2BAIdoR1XSxbTfAm0rKX8zAJUp%2BPJniZ0bMrHQrjEwIhANUGXkSRtIPXj7DC22zLXc4Rc20lcseuElyvycTWbwjnKv8DCHIQABoMNjM3NDIzMTgzODA1Igw7OQGpACtpX7FZRtQq3ANx%2FY1544ediNRVunXNjK2rpXWBIQC4XBQ7a%2FPpHriAzHoFImEsDYh00gv8jOVPsDljIlLVDi9EdigfYpBr1KtCl2USw772q39yJdEU%2FdQKvmvOwfM0HL86T60IHflykjRj3nxUXfqnV7Rw7VU8n%2F78kemvlgmuMHPw9EVLlSiyd7ieZr2p%2BM%2BEm482%2BRM1U0YZ0SF08BHEKsB%2FtZ6Lkfjb8XMbuJYcSaeCBOulpN1nqB8tKMyGvfSti4CWnDnQlXMMW3qHKpCbu4o4mz7uCV9cuTq97mGFnI8FAvOD89P7LCYZLFOyTE0IWWzW6yzQJx799wu1okj22IlakY8wNPDvod%2FmKR2uIn76KVWiIrrFFDerlIASg7S%2FJfzxQ894AJR0MCiUQJrjhAQnXMUV6rGB6ZXbNT92TODRwttZCxz4Yq0iXsYe9q1T3fMVsz8%2BfDmLVEjn8jVZKNwvGIlxnTnQqWzlLuWpgFhpcQGcE9QbvMhIMKCTY85zedEh96EDAFD3g3KcZCs6g8R0r1HPQpYjaqt5Duas1YcFeAerQ5QJzljVaQyTY0JNCS%2BnIh2QSSU5dr1D%2FpKL5m7pKk4AhvpIK2aT%2BcsdIL%2BTRgO1cUekv2%2B0XvJ5RGDkZ1%2FGVTDG6su9BjqkAZwlTmSdUNwunqnLi69gpFi%2FjWKfWQtqeWqz3EYrq2yqfsa7Q%2F%2FJdeIan7RusGIfAo%2BBuLrDG1E%2Fv3rwpQyaypxSitNXx%2BFY6ej0jnWU15fcMOKBUP4axiFKhlW%2FwGlgbiTToN3%2F7BMs1yrrSAduk09bEqJypzWA%2B7Mj58ErO14B9QxyV%2Fhy9CgRHO5ahns99PRG%2B5QOGQX22uWXFmwCH5X3RhNE&X-Amz-Signature=8c9d47771dc8f6b87371c0cceadfe7ca2b3c421b8ec696468b0b52841ef521c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FREQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQClDUj7Rrtk%2FAHWxd6SFOO4UQ6Qxq2rBxKy9s8z3VWrkwIhAOVC%2B13lnov6jT%2BMRbyHrsBnHx4x%2BC2yiBoBcZLwgUJ%2BKv8DCHIQABoMNjM3NDIzMTgzODA1IgzOjEZmOOfb64es0rsq3AN9L7ei1QzlO1MLxq4rQw1LP4hJBR7BHilxEn5Rbc0rg%2FTyv3PlZAUqA2mmMSklAkXW8b1Fei8gFJW70WXR9%2FwIxz00LU3ITJTKp3OSECWQQowmQXwRkAJ2oYfOIOR43AxM1F0MI%2BMo2cFK6UmhT%2BHU%2BrZy4u1EMVNcJGLCXx8K%2FF3Fx5hbOZM%2BnU1JoQV8hpYXJROn6pPmcgvSuDGM79cvToY5kRyzPuF%2BgSn2otJv80mPVBPx64ILglENbW90y%2BMc8prouVyKC%2BtCMd2xrTMZ5W4Y1JIptED5VcP8SXIzuflHwZVnfYxtOzO08GlYNUcuqTkurM5VI3ltwNZoJRNl8kyVH4sFLbAEAXinGjvIeSZY7UhuHPEI9IYQhb8vQUDalvuh0W3u0mwujDr%2FaTx4f%2BPTwyXwRQYlCkbS3ocyGGFUW4ZjESRvdSJvUITcX6vVlX8ENpliMVaea2YxJHMzhmh0yYSTioEXmq2fnFky%2BaqR6rioQK6XCPluovd2cKkKPK05lGgFKPNaX0E6EuCoqbpRoTcFErQkeE8uxZt5gesAFkEHLSY%2BYBYACJ2y66lY0Bod82hH8b408LvQxBWgDcTvTh8PwhLwuTCUUGRNy%2BiKcwcwngEz9uG7fTCz6su9BjqkAQSXLf9C6ick%2B9Ecl98LzBGmvBkau4U%2FcOhzPbclIzzfIZlipyAfHZ6lOIHfcrGtfvmm8WX730nVQLjc%2BGX%2F4dLCO7HoqJxPKXNqfDzA3VQZTB6kWiUvbvPkcyDvMhJ7L5IN94AzYio0LZ0vwIlQ64jq4UI8Og07vBFDtrk%2FZN9WIrXuQp5vn6oYwttMwkzm6e5WpEswMOIuA7XTS60ir7WQm8Mt&X-Amz-Signature=b9b009ee03540bb2787d715b4affc968fed7afafc49c0aa95c69d91d4f3d730f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NDJZIK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1%2BOgHsWil1h5EcC8msPjvjwmUHbH%2FyRFcSR4D9DZ%2BzQIgZxSaZMvk96Hky6jSsMwr0yQBrImOMuGWA6ClsfrAQs0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCgbSX93xtHLhYvrfyrcA5y4MeefqBLOzT3RgvaVVfjMtEZYFOUtc7iSYYJ9GADJvguOQe7bg2gOa6zGMxfXC39qDEHA9T92jGcylI6dMC4viSVcurSg5rR%2FbHSmIW%2BxbsSWef0yO8KNGUd1s%2F%2BVCALmYPD7pmHsfVV%2BWrfG0iG5UhQvB33IU52wk0m%2F81Pz9R87CQdkwtthS51cn0Jc0vKPa5zQnc7YSOC%2FtNhN6tNh1Bvyvui9k6lt7asVnzNvLziU42IdCp5DAT7FRPWiXUhtuxbiymPAyYvCYpCA%2FVfecP8uR0oCiza%2BdVUjrLBJ%2FEF08RLvFeNgBas9r8iufXHVrE%2BpWCo7MGMgIlHIquDPbkCs%2B5Oemt6lp5iBa0QTWQCJHmE3Omv5R8tND4%2BpZ93nkCUlhFg9IYV8%2FqUSbrThUVHzuQbkUtKlY7eN%2BfO37Uem2KY0Cq296%2Bc2aKIGYV5R%2BUmMpbz3DzluMHIniQTLiY6l5YrsS5BgeHHrGx2plEgpBHsANDe%2BzIact4Kbv%2BwMdVLPA3qjbsVNeMNxMe2t%2BEL62lz3uIyuOyAtiu%2FBU7sGN68aFb2t%2FTrHwz4zN2G6pWzZ4vBhmNGlKRzIHXeGu798y9MILaPwyafRHTxGHz3%2BlR2SvTWokPdiMOLpy70GOqUBNo3bBgS0SBXSjpkCOsVHJyQ%2FIfIf1d3IPKwoykcJaPxMhOQaY7yjSkSCOy%2BKFsriFRlNwk8VjCKhhr0ACk7VEn6lh0kjOwi6gsQZWmwfMe2N0AA3v4vhNZ9%2BymAIjd1RfJnHSQwczkFmQRDwGyn4KHeKfAu94cKYluksC8bx4eXkRxErIejGdJU89H2gvnUQ15uq%2FMI9PbxKjbc4XFk9nGTa5FsZ&X-Amz-Signature=ab67c1a35c8118986e19f47e34f26f7de58073695f5e3ab3c6a3ee39b89944aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
