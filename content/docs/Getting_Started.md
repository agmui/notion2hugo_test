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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5J24FO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICKEqxYfmHrQy%2Bxh6XcV8SGp7FFzESIw1r%2Fu%2FZDbRQqDAiBIbdNG5X16zblNEU9lbv7z2mGUnE4l2m3rLl4fr%2FjpUSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM6FSvdupojbrAekZqKtwD5wJGj2dLc2I81dOnhfCaeVJQnPgsc9%2FG6K4UpSFQVldiELMSmWj1YPCAbkByHoXVUGIBV%2BPWFM1fHDLh2h%2B4TYE0seFTnuXrDqLBGdnS4RrzM0DfIov85SoV5Mk%2B%2FUHRpsmm0zZSoZ08lKR2GF7w2lMKGEYiIcnkzlzBYV5OoSa5233Xtyqg9W%2BDTBgI%2FFrl7VXWvGa5RkStmZnfVBzQyLVKcrBxW8Uk6sraYHmCnEJ%2BxfOmStBnNKQ5kJIYmirkMC4gGr47vuptLdW7Se8F%2BsiZrCKgLi8zsf04%2BjDC5M3GjURdwxqxnbb2tM424cj9UyiBlCpEFt4bQpIafrK4TLgRJ91%2F4YeMZe8GAZDbqmMe1RzlK3a0utUyKCbWq%2FZaViiPBySJ4MSKon7AkvmW8mYkQygkfAZ%2BL9gbAhi5hZPJcdPlnVT1pQPsM0Gm2RzKc4jWE0E%2Bbc8yxSnlG2UTbZBN3EECvr7PuNaVtPukSZ6q5WKtqF85jfw3HVHl%2BDadgvzMfmGZGQllDvGDDhebvpYguLfqFrEjAfSzxPRN%2BnDNI6xt0fS1DXEWqKE%2BbQ6I36idfnwQgCguFymlCfhVF2oFQuxxyDcDqN5qhRrkQ7Aly7i6XWr4BpTr%2FFEwnpWgwwY6pgFZgCJPL%2FH8%2BitxQag3oO2mvlsP6qFzaAEojiEnSHnmaCdXA%2FawmWGkJIcMRW%2FPTJCZm1lhv%2BWH%2Bh5e0Ygj8%2FzZ7q02wtT4phqkFlwmMYOUkaBzWNJsIVBUI4y%2F3yPFkkqaNGU634Y2m%2FlIxp28c1NTRibi%2BRzdtMo%2FKv3jx730LaiIZohbpDqlukE4%2B4s%2FSkNSDZU6myrFu9XwmX1sT%2F%2FL1CDIQwfh&X-Amz-Signature=730168a89c69d16c73f79991f8833692503965fb8436744deda47fafc9e04b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5J24FO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICKEqxYfmHrQy%2Bxh6XcV8SGp7FFzESIw1r%2Fu%2FZDbRQqDAiBIbdNG5X16zblNEU9lbv7z2mGUnE4l2m3rLl4fr%2FjpUSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM6FSvdupojbrAekZqKtwD5wJGj2dLc2I81dOnhfCaeVJQnPgsc9%2FG6K4UpSFQVldiELMSmWj1YPCAbkByHoXVUGIBV%2BPWFM1fHDLh2h%2B4TYE0seFTnuXrDqLBGdnS4RrzM0DfIov85SoV5Mk%2B%2FUHRpsmm0zZSoZ08lKR2GF7w2lMKGEYiIcnkzlzBYV5OoSa5233Xtyqg9W%2BDTBgI%2FFrl7VXWvGa5RkStmZnfVBzQyLVKcrBxW8Uk6sraYHmCnEJ%2BxfOmStBnNKQ5kJIYmirkMC4gGr47vuptLdW7Se8F%2BsiZrCKgLi8zsf04%2BjDC5M3GjURdwxqxnbb2tM424cj9UyiBlCpEFt4bQpIafrK4TLgRJ91%2F4YeMZe8GAZDbqmMe1RzlK3a0utUyKCbWq%2FZaViiPBySJ4MSKon7AkvmW8mYkQygkfAZ%2BL9gbAhi5hZPJcdPlnVT1pQPsM0Gm2RzKc4jWE0E%2Bbc8yxSnlG2UTbZBN3EECvr7PuNaVtPukSZ6q5WKtqF85jfw3HVHl%2BDadgvzMfmGZGQllDvGDDhebvpYguLfqFrEjAfSzxPRN%2BnDNI6xt0fS1DXEWqKE%2BbQ6I36idfnwQgCguFymlCfhVF2oFQuxxyDcDqN5qhRrkQ7Aly7i6XWr4BpTr%2FFEwnpWgwwY6pgFZgCJPL%2FH8%2BitxQag3oO2mvlsP6qFzaAEojiEnSHnmaCdXA%2FawmWGkJIcMRW%2FPTJCZm1lhv%2BWH%2Bh5e0Ygj8%2FzZ7q02wtT4phqkFlwmMYOUkaBzWNJsIVBUI4y%2F3yPFkkqaNGU634Y2m%2FlIxp28c1NTRibi%2BRzdtMo%2FKv3jx730LaiIZohbpDqlukE4%2B4s%2FSkNSDZU6myrFu9XwmX1sT%2F%2FL1CDIQwfh&X-Amz-Signature=fab6af5ece9629abac0069e617a60dc0aadd2a85b4fbc19f462cbd5f27244344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5J24FO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICKEqxYfmHrQy%2Bxh6XcV8SGp7FFzESIw1r%2Fu%2FZDbRQqDAiBIbdNG5X16zblNEU9lbv7z2mGUnE4l2m3rLl4fr%2FjpUSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM6FSvdupojbrAekZqKtwD5wJGj2dLc2I81dOnhfCaeVJQnPgsc9%2FG6K4UpSFQVldiELMSmWj1YPCAbkByHoXVUGIBV%2BPWFM1fHDLh2h%2B4TYE0seFTnuXrDqLBGdnS4RrzM0DfIov85SoV5Mk%2B%2FUHRpsmm0zZSoZ08lKR2GF7w2lMKGEYiIcnkzlzBYV5OoSa5233Xtyqg9W%2BDTBgI%2FFrl7VXWvGa5RkStmZnfVBzQyLVKcrBxW8Uk6sraYHmCnEJ%2BxfOmStBnNKQ5kJIYmirkMC4gGr47vuptLdW7Se8F%2BsiZrCKgLi8zsf04%2BjDC5M3GjURdwxqxnbb2tM424cj9UyiBlCpEFt4bQpIafrK4TLgRJ91%2F4YeMZe8GAZDbqmMe1RzlK3a0utUyKCbWq%2FZaViiPBySJ4MSKon7AkvmW8mYkQygkfAZ%2BL9gbAhi5hZPJcdPlnVT1pQPsM0Gm2RzKc4jWE0E%2Bbc8yxSnlG2UTbZBN3EECvr7PuNaVtPukSZ6q5WKtqF85jfw3HVHl%2BDadgvzMfmGZGQllDvGDDhebvpYguLfqFrEjAfSzxPRN%2BnDNI6xt0fS1DXEWqKE%2BbQ6I36idfnwQgCguFymlCfhVF2oFQuxxyDcDqN5qhRrkQ7Aly7i6XWr4BpTr%2FFEwnpWgwwY6pgFZgCJPL%2FH8%2BitxQag3oO2mvlsP6qFzaAEojiEnSHnmaCdXA%2FawmWGkJIcMRW%2FPTJCZm1lhv%2BWH%2Bh5e0Ygj8%2FzZ7q02wtT4phqkFlwmMYOUkaBzWNJsIVBUI4y%2F3yPFkkqaNGU634Y2m%2FlIxp28c1NTRibi%2BRzdtMo%2FKv3jx730LaiIZohbpDqlukE4%2B4s%2FSkNSDZU6myrFu9XwmX1sT%2F%2FL1CDIQwfh&X-Amz-Signature=ea4a495431db38d2e73dca626306d091ee3d9c983d8fb4048190416797593ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSABATJ5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBjJ%2F7m%2Bio2t2%2B8ym3qGMS9wf1JQRaSgHycM22oLNzLNAiAiuDuKarKZs%2BHKxdm9tXloc0ECzPT5KQKmTN73tRJHdyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM1IQWY%2Bs%2FwUFTxcOiKtwD%2FOP6urr8ovI9lmTDYx7Z3tJgqdPmC3ojofzfyS53nQnYGPpqskB4nosVtDvkP9CvucCtTQ9%2FLSXIbXUqGjZDgeJscvyJ981Mfh3Xg30ygRlf%2BEekSdCZPPNJ%2B1oOcIev4eDATXB%2BwNIlHBBjX1TsIa0Kk2KIz%2FGyc32zv45VPacJ9YWyxUN3QbqQ%2FPxZ8PYqmZKVq8LEWGSOQ5wS%2FEV0iVrB%2FrCEwPgKYKIUzI8ebpRRFxR9L2rCiwcLHqDahmAugWe%2FEfa1A6jXW8Rl9BhYlZ9kGOKtGVZa%2FoX1ncK8rfj%2B5uTHXW0Yc8XrFTNQjs4wu%2Fw8ltYMSVJLL3kvTHp83qJKA6h0usXCoCcbZUmD%2B3u%2BD5y8vTHtPiXXhCGvodaPhsjv%2BgSX1yNcBccXkmtvnpG%2FvZqoY9M0bKuF53vK8JUSlPDYcO1PvkafgLb05sTKe1AtxlQoeBzzjMDzF6BSvAbbAkkdlbu2ocHJaxrPfloak5RCkWvGuTCWZDrPq8Yrlpp53pMi3nMdoCe3dlrk6xMKKDC6A64i0ULDbqwXcWkungVMLV6I1MosfweZpnDfXNnJETz0bpcUUOfMLlnX6Rw4WyFtGZN8AuPnDULW50JnncKt7P9NQcn0k0Uw6ZWgwwY6pgFDQVUlTPFiWkpM3AsujDhY0YALN7CNa091ZQGXtwTrnd4DYj45fCvM4GB893LKOJCoeyqdRixY8tDkTZUt5N0QKorBqs8PKXlRejgDvOeH0CNKaraEkAo%2FG0O6NGIsPsjgvD815carX2K6STwxb9dzImEeQowIGMPjp8BEwdOIMwy1aUhk4aqqPfqUCu97g5MRn%2FWVIwR%2FAoAbex6NbMNoSmZSlGD7&X-Amz-Signature=6adec30103356bd8287f84fbba8f609eb80fcd5132380c6774bab318381e31c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZPNMT4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCpJcAez%2Bb%2BndIrQuMG9bJ8IDLCq1O6dm9uMpnzoUC1rQIhAN4mzCWp3CjVxwogtDiPI%2BqidAyAOPhhgJEnUc1yUAYQKv8DCDIQABoMNjM3NDIzMTgzODA1IgyvdLxJTQHUODvxj1Iq3AMR9O%2F1HvvrTrNLnuOvDTdtP6WcPR8dKlHF%2FglkoAnB83M8UjtR3dddagvof7WXu6URU0HE2robyGW6zBczPhYmTB2Rf4dLL0NgXw%2FapX%2BocgP0GZpd1gBjeCbVUE9Eq1caIkKTQy%2FW03I%2FMSY8xuor6dtYg3kpAcoDO8nmkJDmLcua%2FPCOZg6wzVAv83Aw621AquOmmInD8eENqCzM67MnpNZk4VBHZ01WsvBmhMmwu%2FjuyjWtCfpmHXHzrGiHpqIfYywmSXSMLCZyqDuSP6oUjjPEmOpTCWlRjbSKhjdnTNA3L%2BSXFBjIvoG1jsts%2FtajCFNd7IHlcQbyra12tO2ri474v%2Fz4gvwk%2FKTw%2FlYZsz3gH%2BPUscZoaZlJsXufTVf0Fkfh11EEQfN2eU%2Ftyk%2BnT5Vsy7eUSaFedZJsEpCGmm1gRdMroCKM31fR9mZ%2FjrUFJjx6V753Y16zGvhTbf3YWS3da1fzgl%2F1%2FIDXk2K3HtqbGyyseZ1vukw8jUbNXbKxm338nHzExNqI6Mf2HdRjr82%2FboQ1zk3Aiqu4cOCzNtZH3gB6c4Skk7dzdWtE4NqXw6ibyJCRoxFbYHjB54ybpOYpFyKhbQX9Q7n3fNM%2B%2BlJOi8ctOs9ycIq%2BuDCtlaDDBjqkARsQkSSrzvkVaMncFYl81bh0UOOP%2B7iDIXcUiB3z4zfA5wqjyJdLZH1FNrdPqEjCF4OneS8TKpO3b1NOqPy2xXleLwyLNMKfbAeUeCjfZph0Rd0X5t27P1TG9jQs2Chgy%2FQ6x1y9pKSjzywdPxrnletex04wLsM%2B4btAx%2B7efN39vMhMBvvxwTAVPSyx%2FAPTj9OjchXzAT2SBX2Y%2FjmPBMhTEZbt&X-Amz-Signature=8be06e9c401c31465c252b3513d2b693bbb9a71249a243e1160789a8b42d4d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5J24FO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICKEqxYfmHrQy%2Bxh6XcV8SGp7FFzESIw1r%2Fu%2FZDbRQqDAiBIbdNG5X16zblNEU9lbv7z2mGUnE4l2m3rLl4fr%2FjpUSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM6FSvdupojbrAekZqKtwD5wJGj2dLc2I81dOnhfCaeVJQnPgsc9%2FG6K4UpSFQVldiELMSmWj1YPCAbkByHoXVUGIBV%2BPWFM1fHDLh2h%2B4TYE0seFTnuXrDqLBGdnS4RrzM0DfIov85SoV5Mk%2B%2FUHRpsmm0zZSoZ08lKR2GF7w2lMKGEYiIcnkzlzBYV5OoSa5233Xtyqg9W%2BDTBgI%2FFrl7VXWvGa5RkStmZnfVBzQyLVKcrBxW8Uk6sraYHmCnEJ%2BxfOmStBnNKQ5kJIYmirkMC4gGr47vuptLdW7Se8F%2BsiZrCKgLi8zsf04%2BjDC5M3GjURdwxqxnbb2tM424cj9UyiBlCpEFt4bQpIafrK4TLgRJ91%2F4YeMZe8GAZDbqmMe1RzlK3a0utUyKCbWq%2FZaViiPBySJ4MSKon7AkvmW8mYkQygkfAZ%2BL9gbAhi5hZPJcdPlnVT1pQPsM0Gm2RzKc4jWE0E%2Bbc8yxSnlG2UTbZBN3EECvr7PuNaVtPukSZ6q5WKtqF85jfw3HVHl%2BDadgvzMfmGZGQllDvGDDhebvpYguLfqFrEjAfSzxPRN%2BnDNI6xt0fS1DXEWqKE%2BbQ6I36idfnwQgCguFymlCfhVF2oFQuxxyDcDqN5qhRrkQ7Aly7i6XWr4BpTr%2FFEwnpWgwwY6pgFZgCJPL%2FH8%2BitxQag3oO2mvlsP6qFzaAEojiEnSHnmaCdXA%2FawmWGkJIcMRW%2FPTJCZm1lhv%2BWH%2Bh5e0Ygj8%2FzZ7q02wtT4phqkFlwmMYOUkaBzWNJsIVBUI4y%2F3yPFkkqaNGU634Y2m%2FlIxp28c1NTRibi%2BRzdtMo%2FKv3jx730LaiIZohbpDqlukE4%2B4s%2FSkNSDZU6myrFu9XwmX1sT%2F%2FL1CDIQwfh&X-Amz-Signature=507d3f247c0f57a7b75c1874b001c5566a6e12c4e1baf496e6c3bdf5aa1001f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
