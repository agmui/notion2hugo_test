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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQWXT3I%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCHXX7mCXUcDulJNQ%2FJn3IAZFHvnvkgUkpfQ4ip8XQFjAIgJF6xNyOUkmu2MV7MhA8e34HYzjVyrhtt3wm3Yio0zXsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLnUU2gHsFFXxNl8yrcA66i2clSYpT32jJ1CJY%2F9XR8OuWx3mhPbYD3OWa3jbBCO4zi8tR3iQvQbtIq7hpqZ81uFtJHSb%2BBrTaK7oQqW1SbrdN%2BGRlXcrfhcy012Vv%2BcHUnMmxUXfV8ap8vgB2SESO8VE6MBCOUBiGsbFYcIt6lcufogX9ORRCEJp4K%2B%2FHR0leKbBZmdGe8C18FmOiUtgJYYWk%2BSR%2FLYoiRmMTo08AOD5uxfcqQ38hFmGwONJ4cA0NIRi1r7mv8Uz%2FwEmsgmO2GlizuTykaMBNAtimAdCk5Wi5po078ahEsoJXx3mZzjyEmjQHl8bHGKx3%2BVZPEWjhGB5utc%2BmY0AVCPK2iohT%2FHFFzuEBj0gy%2F%2B94ltFOpWny8sg4DlWIP0nI%2FF9UcNNbU9JBVvko9F8QXCLJkw3OoVKxeuGPlXKhGGMCtnIbwx5QuSwned4H8RxGe9Km3KQwMej9f2pHQiyMKZP6HCcMQk61s0l3bqd5er12xW9SigMh8pNlGSiVBITHKOI3t8z9v9WHzKB97YyiS%2Fyqu4hLtFE9o6pDzYoQFCD36SRnJaikf6Ipq1VLMPcHqjxdGxlZ00TsQyAuLAYRCXmtaJmgtddPtYm9v4D7y%2BNwNPu7X4sMWOqdz2tjEe%2BE6MKzegMEGOqUBi2IX%2BQ6sx%2FdyLYf73vzNujkohpqNuhxZBbaye8O9h5Y9lp1KUnZqBcJULybdXz80Yx01uzoNLYEzfiY8ls2CFmFUlBSM8hZa3lNzeNQgtK8WnMDvrgXh2ASY02oV8cScVaYTB3r4lySQf%2BeQmv9PdN0d3naDMy%2FStGVBBYQ11pR196%2FCaSM3Ep3EsRDU%2FPBhzuiEBoOe7Nh2rt7onDzGA4npbA%2Bp&X-Amz-Signature=a5e003ed337c54dbcc4d6aac40f89923954464e25ec71c7f9458e8c78d1cbb24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQWXT3I%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCHXX7mCXUcDulJNQ%2FJn3IAZFHvnvkgUkpfQ4ip8XQFjAIgJF6xNyOUkmu2MV7MhA8e34HYzjVyrhtt3wm3Yio0zXsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLnUU2gHsFFXxNl8yrcA66i2clSYpT32jJ1CJY%2F9XR8OuWx3mhPbYD3OWa3jbBCO4zi8tR3iQvQbtIq7hpqZ81uFtJHSb%2BBrTaK7oQqW1SbrdN%2BGRlXcrfhcy012Vv%2BcHUnMmxUXfV8ap8vgB2SESO8VE6MBCOUBiGsbFYcIt6lcufogX9ORRCEJp4K%2B%2FHR0leKbBZmdGe8C18FmOiUtgJYYWk%2BSR%2FLYoiRmMTo08AOD5uxfcqQ38hFmGwONJ4cA0NIRi1r7mv8Uz%2FwEmsgmO2GlizuTykaMBNAtimAdCk5Wi5po078ahEsoJXx3mZzjyEmjQHl8bHGKx3%2BVZPEWjhGB5utc%2BmY0AVCPK2iohT%2FHFFzuEBj0gy%2F%2B94ltFOpWny8sg4DlWIP0nI%2FF9UcNNbU9JBVvko9F8QXCLJkw3OoVKxeuGPlXKhGGMCtnIbwx5QuSwned4H8RxGe9Km3KQwMej9f2pHQiyMKZP6HCcMQk61s0l3bqd5er12xW9SigMh8pNlGSiVBITHKOI3t8z9v9WHzKB97YyiS%2Fyqu4hLtFE9o6pDzYoQFCD36SRnJaikf6Ipq1VLMPcHqjxdGxlZ00TsQyAuLAYRCXmtaJmgtddPtYm9v4D7y%2BNwNPu7X4sMWOqdz2tjEe%2BE6MKzegMEGOqUBi2IX%2BQ6sx%2FdyLYf73vzNujkohpqNuhxZBbaye8O9h5Y9lp1KUnZqBcJULybdXz80Yx01uzoNLYEzfiY8ls2CFmFUlBSM8hZa3lNzeNQgtK8WnMDvrgXh2ASY02oV8cScVaYTB3r4lySQf%2BeQmv9PdN0d3naDMy%2FStGVBBYQ11pR196%2FCaSM3Ep3EsRDU%2FPBhzuiEBoOe7Nh2rt7onDzGA4npbA%2Bp&X-Amz-Signature=40122d6a9580ca3b1882f73c2eae61f0f3de062654263c6b6edeba9405bbc449&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQWXT3I%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCHXX7mCXUcDulJNQ%2FJn3IAZFHvnvkgUkpfQ4ip8XQFjAIgJF6xNyOUkmu2MV7MhA8e34HYzjVyrhtt3wm3Yio0zXsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLnUU2gHsFFXxNl8yrcA66i2clSYpT32jJ1CJY%2F9XR8OuWx3mhPbYD3OWa3jbBCO4zi8tR3iQvQbtIq7hpqZ81uFtJHSb%2BBrTaK7oQqW1SbrdN%2BGRlXcrfhcy012Vv%2BcHUnMmxUXfV8ap8vgB2SESO8VE6MBCOUBiGsbFYcIt6lcufogX9ORRCEJp4K%2B%2FHR0leKbBZmdGe8C18FmOiUtgJYYWk%2BSR%2FLYoiRmMTo08AOD5uxfcqQ38hFmGwONJ4cA0NIRi1r7mv8Uz%2FwEmsgmO2GlizuTykaMBNAtimAdCk5Wi5po078ahEsoJXx3mZzjyEmjQHl8bHGKx3%2BVZPEWjhGB5utc%2BmY0AVCPK2iohT%2FHFFzuEBj0gy%2F%2B94ltFOpWny8sg4DlWIP0nI%2FF9UcNNbU9JBVvko9F8QXCLJkw3OoVKxeuGPlXKhGGMCtnIbwx5QuSwned4H8RxGe9Km3KQwMej9f2pHQiyMKZP6HCcMQk61s0l3bqd5er12xW9SigMh8pNlGSiVBITHKOI3t8z9v9WHzKB97YyiS%2Fyqu4hLtFE9o6pDzYoQFCD36SRnJaikf6Ipq1VLMPcHqjxdGxlZ00TsQyAuLAYRCXmtaJmgtddPtYm9v4D7y%2BNwNPu7X4sMWOqdz2tjEe%2BE6MKzegMEGOqUBi2IX%2BQ6sx%2FdyLYf73vzNujkohpqNuhxZBbaye8O9h5Y9lp1KUnZqBcJULybdXz80Yx01uzoNLYEzfiY8ls2CFmFUlBSM8hZa3lNzeNQgtK8WnMDvrgXh2ASY02oV8cScVaYTB3r4lySQf%2BeQmv9PdN0d3naDMy%2FStGVBBYQ11pR196%2FCaSM3Ep3EsRDU%2FPBhzuiEBoOe7Nh2rt7onDzGA4npbA%2Bp&X-Amz-Signature=9ad865b76649e5a2a2265a8ba52d4f56720a5bf9f8ac0d281253de15dc7bbe82&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTKVJ3P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD6eByZNUYyJ%2FuccBdpiXXlljV%2Fg5OuP%2FcsZElkPRYUWAIhAN83G4rRhfKEFyaX36psrNouoH57qBeFLLQIv254b6f8KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGvvOfk7214S9rcQEq3AN87%2FFXssRBLLDNvmOEyYK80slZS36NeR%2B3mYGWU2LQNZppudqgLUtS3Nf719LOqN6CwAFfCYS0EPAwyOSnGMtzzKVRnoxKTpADs9AxqgNXYC07iX6PF1nMrRir58nmBJcttZcHV4x7dbKFKvceFKsuy5hPGaYmlIpsWyI8MXtw4r%2FwXgM4hH3J4nULedMiuFTq5seqXk48ECJF3%2Fc0iLgZL55dUNym%2FS1M2No5RJGb9dxc6xosyJsHcs8tvwtllIiT5rSB9Tz32oHLR79yBlDptwQ0INmusek2Y4%2FZb3gyEsB6Uv5AWZolCf9Nkmm%2BNUilmRCHfdjDDG84XhMjJ3kPKXD17gxrU7S7YxH98Bj8lO95N8q%2B1XpDOTRrAKZS7kduJUk%2FxMXWncfa7GPQIbX7MT1YjyQoybiaCpvSikyje8y79dZ7WkI49kxTYqlXpuDYTuEa4HH4q2UXPDJxe%2B%2F00j%2Bu96tXiCw2aIIy0Yi%2FDThaa4trFYZzCUeMC4fmeZoxhWl7pRSyGj%2F0jKH%2BpeagxHjlHzm13loJNSEZzx1W4z0Tz7LFTK8hPZM2Vv3Ylcz%2BbmUPOilPfgoVkfNkGfugVNAOvSv6%2FhAGBJ11THw94sljvora1Qppq0KiJTCe6IDBBjqkAfF8sq9q%2B0qBkJEVpH5Tj4BXFXBMugsWWfnO9V7EF8JfoqhyfsQ2Tsmhq4C8fc2mj8eGKinfiecZRP0cVo0MNRbIOiEi7SiW8ihQ%2FJUncm2wQ8DEB5Hk5l7r4Y6QLnzEp7cKl6eB2XVQi7pYlM%2BzwGb6cIqe6YzFLanHVBPhW9LUeYp2mmGLojtRJmm%2BaIJaeROTe0MG9vPsDETFYj74ODClxhMj&X-Amz-Signature=f8e571c728ecd87ccc11031fdf8c838f09266459fe107871200de989372bd60b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICE5OR4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDzAg3hSWqbwr6b5xPATdOUhcAlGnmBD8AMHWOsi%2Bie9gIgVA8D3HCUhNEiRubyBADV20RLfR4nn0gFZQCSzIjCtFoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdrGlDk8JPlZSqVWCrcAySP8yuAV0A6nWqSkgoB6Nob2qYrML3Lb6aK3XiyEPolIso68XV0yoX3jYOawSjWKDoNdGhsjr7fW9soh5qhBzscLhTXppBvcW0PunyoY0P3Kc4zOGaupUQptqW0B%2B0IRdqfTHX7v9DBJlT9QEONKouuHMQA4WclOP9dNAysObyFn3hKbQATnH54N7AHx%2BnhIUIplqiXZEVrwAw6rzkFhzuKtdaRl%2FXB8KTMDguw9xeQi8P%2FNPmggLNKnYMgwOWPGninkXisM69gy2xsXt6Iz56W83Uz62e0ctuhq3svA26GydNQeVDMkA1Ox9Q3Pw78Nyiik6aS%2F6Oruu9HFSvZElCCi6wPQggCNxWB%2FqokMTSWERmeOwCHPOAmzbpTY6HlPkEDkr3GKzn65049s9bjm4JZ9aKpwsk7v%2FykoOn7ueYfZ3gvyJaa80R7rWpslIqdLTtUC1jh25ghKu9b1SZ05r98qzlavTmxY3Qf6Wx7Uq6W2m3NySnYTeNUvY155F3jSlit%2BR7gD9dggnPJlg0DLgVrf4Vbicb7%2Fq6Hhab%2Fxm34Ra8ixEXmzygrytPYpSxuMjU9b9ASvVSFIivVVSBRxpF2Q2DVxHeFa1hwC8osE3G8CcFtz5Nt%2BpKbkYs4MKregMEGOqUB0HTwINbxijmZ%2BOPqaQu6AhUkglo3eCCmCV9%2BgrySxwpPGEyIwa%2BL99g9qW4U12DyLT6fdnm3GNw%2BlOso281Edo1mo0FfUjNh%2FsbyhvTyUuZ%2FrFkrDRgx7tS%2FuNk0ZBKvhrGT%2F%2B6pj%2BlB6CLiRHYmYa6mMUi%2BltV7qjXKsfPNi8daLTemb7GzRphjIhGDo%2BbXzKub7WKiqb9FxX0yra1xm7UdlR6H&X-Amz-Signature=dcb4ae9361350191ef6e5c5bace8e7cf7b54f67ad844b4bf0f5424ec55a4b0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQWXT3I%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCHXX7mCXUcDulJNQ%2FJn3IAZFHvnvkgUkpfQ4ip8XQFjAIgJF6xNyOUkmu2MV7MhA8e34HYzjVyrhtt3wm3Yio0zXsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLnUU2gHsFFXxNl8yrcA66i2clSYpT32jJ1CJY%2F9XR8OuWx3mhPbYD3OWa3jbBCO4zi8tR3iQvQbtIq7hpqZ81uFtJHSb%2BBrTaK7oQqW1SbrdN%2BGRlXcrfhcy012Vv%2BcHUnMmxUXfV8ap8vgB2SESO8VE6MBCOUBiGsbFYcIt6lcufogX9ORRCEJp4K%2B%2FHR0leKbBZmdGe8C18FmOiUtgJYYWk%2BSR%2FLYoiRmMTo08AOD5uxfcqQ38hFmGwONJ4cA0NIRi1r7mv8Uz%2FwEmsgmO2GlizuTykaMBNAtimAdCk5Wi5po078ahEsoJXx3mZzjyEmjQHl8bHGKx3%2BVZPEWjhGB5utc%2BmY0AVCPK2iohT%2FHFFzuEBj0gy%2F%2B94ltFOpWny8sg4DlWIP0nI%2FF9UcNNbU9JBVvko9F8QXCLJkw3OoVKxeuGPlXKhGGMCtnIbwx5QuSwned4H8RxGe9Km3KQwMej9f2pHQiyMKZP6HCcMQk61s0l3bqd5er12xW9SigMh8pNlGSiVBITHKOI3t8z9v9WHzKB97YyiS%2Fyqu4hLtFE9o6pDzYoQFCD36SRnJaikf6Ipq1VLMPcHqjxdGxlZ00TsQyAuLAYRCXmtaJmgtddPtYm9v4D7y%2BNwNPu7X4sMWOqdz2tjEe%2BE6MKzegMEGOqUBi2IX%2BQ6sx%2FdyLYf73vzNujkohpqNuhxZBbaye8O9h5Y9lp1KUnZqBcJULybdXz80Yx01uzoNLYEzfiY8ls2CFmFUlBSM8hZa3lNzeNQgtK8WnMDvrgXh2ASY02oV8cScVaYTB3r4lySQf%2BeQmv9PdN0d3naDMy%2FStGVBBYQ11pR196%2FCaSM3Ep3EsRDU%2FPBhzuiEBoOe7Nh2rt7onDzGA4npbA%2Bp&X-Amz-Signature=a2c13107b707ce010213dc13fab150e6804e055e4ad99aa4d5ebb534705bc919&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
