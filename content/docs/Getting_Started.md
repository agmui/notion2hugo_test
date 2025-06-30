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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HVLPWC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALL8pFsamahu7hGJqy3LGFlYUDNHCxZ2eEXXpGRIfagIhAKzflX%2FSQMhmSGVhujdJKMSa96EJCZ7IOX81jCPueESyKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zMEo4NBQLnS4eHcq3AO0x5uTt%2B6lVfygnWMPjth0g2C9F639DLuiHYbDjGk8r1PCA8xj%2BiOFvqgYJkICaQDtx%2FYFhGdCWAb87aqnFXPKeSSdPLaX7FEKACHapDAz7mYUNQocXpgawH%2BmKxi%2BTg01vgTzpQESAKgA1rgSmXiyjVAWGXlN4Zt%2F3kL0s0nrGRKquasU6BFLwCi2w3jyX7PG%2F3VwpC98tP4wbE7%2FXghXnLXQ5tOVzxFTMtW0ychxKCCSJuSu1GDI4RrbatzOItjM%2B6GsZN8szBjD9ouHxIFo%2B4sv5wmGaB3xhrvZtzMz1%2BM5QwmqGJEZ4LX5ogWsYfBYwGAtuK69R8iMZ1cKVWSaHW2b75hh8wngxFBo6w0RKoRNgS9WpIW%2FZzcruW2OY%2BchKflcggcjNbOLNTVFltI22IcIDTsz2frH7yZhUTRJss4v%2FX%2BsCO6d3ANCbFYx3topWA60IiZRqeGe5hjCp3bxAJsK1Nu3UZsbQgjYI1bF%2F2BvbHaLhH4BjuxPyeh9cNUnfuB21AqTC1nQJ5VceMvxSV6zbF4eugJPh2HqzDLXTwlb7HGt5ryVUXhliE1XsVDJUl6v5OBjlVZKAlq8aNwTGwZmZKqoCHSu4bOKplZVrSxGPXkcTgpljxKCtTDczYnDBjqkAd4Z5TXZ6SOmiORhjH6B1N4Vi%2FRzegVZh5NX92vLZzco%2B%2FRY9O66IaeClBk9TtG26k5JIHp5IxVRNqr9ysrBvQazDFV8sIOxjYwr9SNwcf2BhYtaP6VDfxmxsRNInuiGVkvbhEFi1cSV0v03Gad3AGztVdn7ZZVhNPqLmaIKMi2GCABkOAhlrw1uE3GY6dWYmNhmsd%2F74%2FcXDCuMrgRJrjTxep2Z&X-Amz-Signature=73ae9bd32b40af361e698af6c66318c5b0dc3b56b6e1cc589b8006fbbfc70da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HVLPWC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALL8pFsamahu7hGJqy3LGFlYUDNHCxZ2eEXXpGRIfagIhAKzflX%2FSQMhmSGVhujdJKMSa96EJCZ7IOX81jCPueESyKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zMEo4NBQLnS4eHcq3AO0x5uTt%2B6lVfygnWMPjth0g2C9F639DLuiHYbDjGk8r1PCA8xj%2BiOFvqgYJkICaQDtx%2FYFhGdCWAb87aqnFXPKeSSdPLaX7FEKACHapDAz7mYUNQocXpgawH%2BmKxi%2BTg01vgTzpQESAKgA1rgSmXiyjVAWGXlN4Zt%2F3kL0s0nrGRKquasU6BFLwCi2w3jyX7PG%2F3VwpC98tP4wbE7%2FXghXnLXQ5tOVzxFTMtW0ychxKCCSJuSu1GDI4RrbatzOItjM%2B6GsZN8szBjD9ouHxIFo%2B4sv5wmGaB3xhrvZtzMz1%2BM5QwmqGJEZ4LX5ogWsYfBYwGAtuK69R8iMZ1cKVWSaHW2b75hh8wngxFBo6w0RKoRNgS9WpIW%2FZzcruW2OY%2BchKflcggcjNbOLNTVFltI22IcIDTsz2frH7yZhUTRJss4v%2FX%2BsCO6d3ANCbFYx3topWA60IiZRqeGe5hjCp3bxAJsK1Nu3UZsbQgjYI1bF%2F2BvbHaLhH4BjuxPyeh9cNUnfuB21AqTC1nQJ5VceMvxSV6zbF4eugJPh2HqzDLXTwlb7HGt5ryVUXhliE1XsVDJUl6v5OBjlVZKAlq8aNwTGwZmZKqoCHSu4bOKplZVrSxGPXkcTgpljxKCtTDczYnDBjqkAd4Z5TXZ6SOmiORhjH6B1N4Vi%2FRzegVZh5NX92vLZzco%2B%2FRY9O66IaeClBk9TtG26k5JIHp5IxVRNqr9ysrBvQazDFV8sIOxjYwr9SNwcf2BhYtaP6VDfxmxsRNInuiGVkvbhEFi1cSV0v03Gad3AGztVdn7ZZVhNPqLmaIKMi2GCABkOAhlrw1uE3GY6dWYmNhmsd%2F74%2FcXDCuMrgRJrjTxep2Z&X-Amz-Signature=1cea066c8c40ac9511d3fb9097b4ef37d5f744bf0d4d6c0afc4657d592888f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HVLPWC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALL8pFsamahu7hGJqy3LGFlYUDNHCxZ2eEXXpGRIfagIhAKzflX%2FSQMhmSGVhujdJKMSa96EJCZ7IOX81jCPueESyKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zMEo4NBQLnS4eHcq3AO0x5uTt%2B6lVfygnWMPjth0g2C9F639DLuiHYbDjGk8r1PCA8xj%2BiOFvqgYJkICaQDtx%2FYFhGdCWAb87aqnFXPKeSSdPLaX7FEKACHapDAz7mYUNQocXpgawH%2BmKxi%2BTg01vgTzpQESAKgA1rgSmXiyjVAWGXlN4Zt%2F3kL0s0nrGRKquasU6BFLwCi2w3jyX7PG%2F3VwpC98tP4wbE7%2FXghXnLXQ5tOVzxFTMtW0ychxKCCSJuSu1GDI4RrbatzOItjM%2B6GsZN8szBjD9ouHxIFo%2B4sv5wmGaB3xhrvZtzMz1%2BM5QwmqGJEZ4LX5ogWsYfBYwGAtuK69R8iMZ1cKVWSaHW2b75hh8wngxFBo6w0RKoRNgS9WpIW%2FZzcruW2OY%2BchKflcggcjNbOLNTVFltI22IcIDTsz2frH7yZhUTRJss4v%2FX%2BsCO6d3ANCbFYx3topWA60IiZRqeGe5hjCp3bxAJsK1Nu3UZsbQgjYI1bF%2F2BvbHaLhH4BjuxPyeh9cNUnfuB21AqTC1nQJ5VceMvxSV6zbF4eugJPh2HqzDLXTwlb7HGt5ryVUXhliE1XsVDJUl6v5OBjlVZKAlq8aNwTGwZmZKqoCHSu4bOKplZVrSxGPXkcTgpljxKCtTDczYnDBjqkAd4Z5TXZ6SOmiORhjH6B1N4Vi%2FRzegVZh5NX92vLZzco%2B%2FRY9O66IaeClBk9TtG26k5JIHp5IxVRNqr9ysrBvQazDFV8sIOxjYwr9SNwcf2BhYtaP6VDfxmxsRNInuiGVkvbhEFi1cSV0v03Gad3AGztVdn7ZZVhNPqLmaIKMi2GCABkOAhlrw1uE3GY6dWYmNhmsd%2F74%2FcXDCuMrgRJrjTxep2Z&X-Amz-Signature=6501a0c9a02235d296639c54024784329452615d370511b27f29e25464dc457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VCH7BV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXFoyc%2Bk%2Fitv7aWlgFmw3RiAELG%2BbsWRip9uiuz1zdKQIgQ36X86ZmaJlTATco5b5%2FhjT%2FDfzgt9gcRWz46DOc4sYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoQY%2Bn7noY7YaoxuCrcAz5NSd%2Fdv9rYLfUYjdlnpRTtpRFbk%2BeyaQLxKuLbLKMlcn1ayvzF3PZWDLaGc7hTW99tMndBZMR%2F1i%2BvcaeZ3RvUT6j%2BYx9rXMVgq%2BhKApCbXPt9oyBTm9czKccdgxRjwWRzO0OmyL4JyYD4gaxcf0OXIqvC00NHAOzu7KcThWn8om4xOn6QY65JtRqTXoa4w7Y1%2FnZCs32T0oXyu47X7nbIOD%2FaCXLKJ4z9Z5VjbBL1MPw8pZakIz4Nd1%2BMDrVMG8qt4dWuGMTRkzoyvI%2F0%2B1euzIEM6wrGU%2BSSBILpT8AUPDdfuLnQoq5qXts11lwr%2B3JdEVJiFU8ZznwFJYoYKN5gZ0mPuYFt8qNkAV8FecpTnLm%2BDED6zRjOvALT8qpiorK%2Fqadod2FsSk%2FSg2%2F4tZNloBR3ffOFIKdpSdgU7mFg6zyN2Rk5M5j%2Fet%2BmSOdyUMQAHjp7ZUxUcU6GpCa4MtgFDw7NR%2B0%2B%2FQRCF2uYvgHZF9rLRmt2fBr9EtfZ2MIW6nBK03IlQJlf5LSsHaDYY%2FV0w4L0p%2B%2BDTOZg7fB75PPjGqwinnGqy0G%2BQewBJI8l5G%2BC7QEDHfxMZPW3ankp7mnY68Nc7xDJUdG7ao1z1%2Bz9ITOUE%2BblvoBJcwlZMOzNicMGOqUB60NrTPFy4N%2BkbV4NXP0irJWcmFboFbbItpKoVb11Gq85dtZ6N%2B6E3iAiLdiatwbxCwyk5qNbkTo9PSxwBV%2FCbCYKI1qsl18VrCOW%2FihMlcyN9n25BHBqpeRSV9pR1pV%2FkSBJozyjI3bEftEVgq4mNKFh5peTRl1IghHdz5e%2BpyueQalgw9AxMKX9D0cAPKYpP5s779DFeuKcE3q8wcWMN5EEOX9d&X-Amz-Signature=f9aa97d76101a44c54e006acd4e8e85f7952f4048139f62f5c21fbe15cb36716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDMZNAY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5q7OCsOyBStVOMRXjxcDGr8M5cxNxFpij%2B4Y1L6aH8AiB%2B64JukGdQ4h%2Fz2sXTOpOO7VvuPbYOuaQo7Ja2GMz2mCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIE017PXHaoTSYJ1sKtwDUbryYGMl0lHZ9yQs7TmeRFAX75DnqVkNrDRW%2BXNLv3wWtI6WoAj3nAFdPxXcQGs16mWIDHGUOvQMHPTju0sSWQQDe6RIfTQ4WnrzT0UYe3qUyXIyf4ejenvzeP0wNnnV0Q8miNFLMA7Gyj9125SY7%2BE5%2BXMWCfpNbBiN5NVf5ivK%2BL7gerb0edmb7X9Xb3hk8JffVGno1g5XsYBAtQhkwspUqnvLscCn3Mz42Uiop2qkPNGlu%2FWttLxiQ1J4i1rToXZ5acQBj8Y5VRi4diFVj%2FuuH82WUm8JBpK%2BX23cBpfJc2ldwYMMYWB9MJf7I7cr1qIMQxTXBfq454Ml0tx30JqG9Kd5TWc%2FmBylM7Jb2WQ8TQhjlulCtTsuInBlLgLDKOsU0VBEZq177xCYNeS3jKpC%2BNlxcrQTnhowPaU5hc%2Fimlajy53CP7SlxwxrfddYjqqXD4Aa86I5lDfaInLr2dZYgtoNLXIMbDYiL3KsKpXp3YaKyqZg%2FbAaHexWMn%2FHFwYxsKOVU4wfIymrRv6f9u16XvIkqQZBZ4jkO5045lTiqSccO5p%2F%2BBMvuBJq5Jd0LF%2FONWHxHTLs5Bc3oPGmc79VeR6PHf8O%2Ba4pzh7Ag5KELVtDimZu5Lw2DiAwkc2JwwY6pgEJikIO5mQoQUb0YjLw8rQaJOQu9PnVn70I8peorjnUPWM4%2B%2FK6%2BUs%2BaY%2Fe6Oj%2F17MyZ2jdFB0AyckRgHtL4lO2JBLIG885bMDBeokklSfSiT39gPbVrPEOsuN%2FpIIpJLtVNRc5%2BzIeqUy%2B%2FBS0uY7G5gD3Jsxj84al28HnuMqgAlo9b69wOPkwOVEDxFg4mJyqwBD05Eo4fKNgcVQiUYxkOa3rBjlV&X-Amz-Signature=fd1c02293eda809085d37f6bfcd2a02ba493ec5a55163d44d759d0fc9a49efaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HVLPWC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALL8pFsamahu7hGJqy3LGFlYUDNHCxZ2eEXXpGRIfagIhAKzflX%2FSQMhmSGVhujdJKMSa96EJCZ7IOX81jCPueESyKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zMEo4NBQLnS4eHcq3AO0x5uTt%2B6lVfygnWMPjth0g2C9F639DLuiHYbDjGk8r1PCA8xj%2BiOFvqgYJkICaQDtx%2FYFhGdCWAb87aqnFXPKeSSdPLaX7FEKACHapDAz7mYUNQocXpgawH%2BmKxi%2BTg01vgTzpQESAKgA1rgSmXiyjVAWGXlN4Zt%2F3kL0s0nrGRKquasU6BFLwCi2w3jyX7PG%2F3VwpC98tP4wbE7%2FXghXnLXQ5tOVzxFTMtW0ychxKCCSJuSu1GDI4RrbatzOItjM%2B6GsZN8szBjD9ouHxIFo%2B4sv5wmGaB3xhrvZtzMz1%2BM5QwmqGJEZ4LX5ogWsYfBYwGAtuK69R8iMZ1cKVWSaHW2b75hh8wngxFBo6w0RKoRNgS9WpIW%2FZzcruW2OY%2BchKflcggcjNbOLNTVFltI22IcIDTsz2frH7yZhUTRJss4v%2FX%2BsCO6d3ANCbFYx3topWA60IiZRqeGe5hjCp3bxAJsK1Nu3UZsbQgjYI1bF%2F2BvbHaLhH4BjuxPyeh9cNUnfuB21AqTC1nQJ5VceMvxSV6zbF4eugJPh2HqzDLXTwlb7HGt5ryVUXhliE1XsVDJUl6v5OBjlVZKAlq8aNwTGwZmZKqoCHSu4bOKplZVrSxGPXkcTgpljxKCtTDczYnDBjqkAd4Z5TXZ6SOmiORhjH6B1N4Vi%2FRzegVZh5NX92vLZzco%2B%2FRY9O66IaeClBk9TtG26k5JIHp5IxVRNqr9ysrBvQazDFV8sIOxjYwr9SNwcf2BhYtaP6VDfxmxsRNInuiGVkvbhEFi1cSV0v03Gad3AGztVdn7ZZVhNPqLmaIKMi2GCABkOAhlrw1uE3GY6dWYmNhmsd%2F74%2FcXDCuMrgRJrjTxep2Z&X-Amz-Signature=21f9c39f6a98f33712f08bceb5e9f984f6cbd9b64255b6be94ac05ab7922b81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
