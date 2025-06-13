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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRO27V46%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICIvPQgo9%2FXAB2AIVUMUMuhcRuCm6iXsQghyqQqXkM%2BPAiA281K8Xdf4LNN0Wig4UK1xIhjKAWgMvoudV0Xuvbn9eSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIeUJAG303b3H%2FgdKtwDi79pW3OwuW%2BiTtgh%2BjTVITBScBEZxs1pLqhitQY6qEESIw93p8VA3YvCdn1wUlR2muX8IhCcxjxfvD%2BuWthnZXXi2AC1T%2FPfsMaEB5uiuugz1FEny%2FnSHX8OoJd2BWZdYgqgyKPvqgkctFAd23H0DqlNvxDx%2FffczVtfBgrpkFXNByaDNT%2BoxzM67ooWZKY9L7ab3FasKuE%2FnBqiroRddBsX8zoNOKonvA1DIvc1SCELFILr5kFftHCdxWR7KrzNdP4zDqBUVN8J3x%2FOuT1tbhSQjTD4Msd%2BxM7%2Bv8OVCnlXd%2FSxh2jyLhGEW7C3jypYkiAH3%2FVSssC40RB1VTVKDsoboCLeK74yQyCgFOeZ6NWVhDAVc5wxasq%2BnrCwjhHSkIXGGOO%2BuPbkJGUV7b49x3ie9Q2%2BnR%2BbXSrtfveLyn2P3GGGmx85BVm3p0PMeEde0JBKCJn8xQhGL%2B1ORIn0KxlPMFoVP6YgdaB%2BqpH79yt8LflHZo2WygjhwEdZI4LlOToYZ%2FmuhhpgvJVXTj%2Frd3OfHAj5dMET6OFp5K60G0Nzj5l%2BnvSOOhN7FkhQZDGhJ1zISnv2am4nJg0On5lK7XuUiyCbVSdSXTXs9hqCjp1Y0cU1XKW2D25%2FZ9kw6NeuwgY6pgG0f5%2F2wsT2mWY9J2nseKKV5zs8baC7M%2F0XslmjlaZrcpt%2FqGVVWs7fRjTMHwhGz5bbVz%2B55XUYEzRZ6cRDXi0Xmpae0gZjuVKqKs7onlMjUDKkoYvj8EAEZwAolZEsg%2F1%2FDionOLqpJ%2BNahLqQuIErQWOaMXrIZVJtwZrlF2ppPYvnbeUte%2Fkar4mpdpUa9AFbhEhV%2FVvFyCe60Xk1pW07efySECBQ&X-Amz-Signature=1776c17457fdb3248db38390240b198d822f5c608c953f7f34acc29831a82be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRO27V46%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICIvPQgo9%2FXAB2AIVUMUMuhcRuCm6iXsQghyqQqXkM%2BPAiA281K8Xdf4LNN0Wig4UK1xIhjKAWgMvoudV0Xuvbn9eSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIeUJAG303b3H%2FgdKtwDi79pW3OwuW%2BiTtgh%2BjTVITBScBEZxs1pLqhitQY6qEESIw93p8VA3YvCdn1wUlR2muX8IhCcxjxfvD%2BuWthnZXXi2AC1T%2FPfsMaEB5uiuugz1FEny%2FnSHX8OoJd2BWZdYgqgyKPvqgkctFAd23H0DqlNvxDx%2FffczVtfBgrpkFXNByaDNT%2BoxzM67ooWZKY9L7ab3FasKuE%2FnBqiroRddBsX8zoNOKonvA1DIvc1SCELFILr5kFftHCdxWR7KrzNdP4zDqBUVN8J3x%2FOuT1tbhSQjTD4Msd%2BxM7%2Bv8OVCnlXd%2FSxh2jyLhGEW7C3jypYkiAH3%2FVSssC40RB1VTVKDsoboCLeK74yQyCgFOeZ6NWVhDAVc5wxasq%2BnrCwjhHSkIXGGOO%2BuPbkJGUV7b49x3ie9Q2%2BnR%2BbXSrtfveLyn2P3GGGmx85BVm3p0PMeEde0JBKCJn8xQhGL%2B1ORIn0KxlPMFoVP6YgdaB%2BqpH79yt8LflHZo2WygjhwEdZI4LlOToYZ%2FmuhhpgvJVXTj%2Frd3OfHAj5dMET6OFp5K60G0Nzj5l%2BnvSOOhN7FkhQZDGhJ1zISnv2am4nJg0On5lK7XuUiyCbVSdSXTXs9hqCjp1Y0cU1XKW2D25%2FZ9kw6NeuwgY6pgG0f5%2F2wsT2mWY9J2nseKKV5zs8baC7M%2F0XslmjlaZrcpt%2FqGVVWs7fRjTMHwhGz5bbVz%2B55XUYEzRZ6cRDXi0Xmpae0gZjuVKqKs7onlMjUDKkoYvj8EAEZwAolZEsg%2F1%2FDionOLqpJ%2BNahLqQuIErQWOaMXrIZVJtwZrlF2ppPYvnbeUte%2Fkar4mpdpUa9AFbhEhV%2FVvFyCe60Xk1pW07efySECBQ&X-Amz-Signature=4f5025d77b3ff743c128802a6e58170d0d47295338ce521117faf141450f0b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRO27V46%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICIvPQgo9%2FXAB2AIVUMUMuhcRuCm6iXsQghyqQqXkM%2BPAiA281K8Xdf4LNN0Wig4UK1xIhjKAWgMvoudV0Xuvbn9eSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIeUJAG303b3H%2FgdKtwDi79pW3OwuW%2BiTtgh%2BjTVITBScBEZxs1pLqhitQY6qEESIw93p8VA3YvCdn1wUlR2muX8IhCcxjxfvD%2BuWthnZXXi2AC1T%2FPfsMaEB5uiuugz1FEny%2FnSHX8OoJd2BWZdYgqgyKPvqgkctFAd23H0DqlNvxDx%2FffczVtfBgrpkFXNByaDNT%2BoxzM67ooWZKY9L7ab3FasKuE%2FnBqiroRddBsX8zoNOKonvA1DIvc1SCELFILr5kFftHCdxWR7KrzNdP4zDqBUVN8J3x%2FOuT1tbhSQjTD4Msd%2BxM7%2Bv8OVCnlXd%2FSxh2jyLhGEW7C3jypYkiAH3%2FVSssC40RB1VTVKDsoboCLeK74yQyCgFOeZ6NWVhDAVc5wxasq%2BnrCwjhHSkIXGGOO%2BuPbkJGUV7b49x3ie9Q2%2BnR%2BbXSrtfveLyn2P3GGGmx85BVm3p0PMeEde0JBKCJn8xQhGL%2B1ORIn0KxlPMFoVP6YgdaB%2BqpH79yt8LflHZo2WygjhwEdZI4LlOToYZ%2FmuhhpgvJVXTj%2Frd3OfHAj5dMET6OFp5K60G0Nzj5l%2BnvSOOhN7FkhQZDGhJ1zISnv2am4nJg0On5lK7XuUiyCbVSdSXTXs9hqCjp1Y0cU1XKW2D25%2FZ9kw6NeuwgY6pgG0f5%2F2wsT2mWY9J2nseKKV5zs8baC7M%2F0XslmjlaZrcpt%2FqGVVWs7fRjTMHwhGz5bbVz%2B55XUYEzRZ6cRDXi0Xmpae0gZjuVKqKs7onlMjUDKkoYvj8EAEZwAolZEsg%2F1%2FDionOLqpJ%2BNahLqQuIErQWOaMXrIZVJtwZrlF2ppPYvnbeUte%2Fkar4mpdpUa9AFbhEhV%2FVvFyCe60Xk1pW07efySECBQ&X-Amz-Signature=8a464160ee34b5b81c432a3d705a8828222d891fca9aa15a516a4de603824c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFIK7WM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC7S96sXSPj5BrZR3DKdeYJrJHjgJ9kHAhhzUKSK8ifDwIgMG%2FbAKEoUWYHUt0r8Umlq6dxX4bEmr9%2FkYfhFYzohRQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkGRwA1ZxtuBNCBIircA5kioX9%2BdjysRqJfeVVtAHbvKZtVIVI5sJ5LhQDPQqnfO79X1n81pndD0UFsoJYfXVpZSEjlt9XazGJ%2B2OBQaQJhXzToOckFq%2FaDo4YWU%2FUJ1qabdG8AbXE7tr2GpWdpqS7Xb0Xx%2BMhwNv8c5IgEeu2wtVGSWcKZ4pp43ELt40NvFIgGPjFBC8%2FFkz03sSjLR4CNXWUQrJYT7IMuPn8O2yqEnoBv3guLrl%2BuEP1eVv%2BozAUl1jfwvZg0VlWm8IbMjJR1UegwYVoPu7fLpoDpxkgHB9%2BF%2FGBT%2BRUEqLmHq%2Bz%2FWiClugjfY2rmpvwexctuETKJBhPPfDlXb6zIqM3wSsmZLHyWYwatMNUXgtdKdHEaAax62R24bf%2BMNhNw%2B%2F6ELIGI9fXjcSzFKKB%2FP4g9TMUmTY6hpIktm3VBQigvdHcLFRCAc3YLDgv6MSyp3yEZKVnUNOsE5o1Gq6WbgcWUQb7Bqho9cq7fXdPc%2Fdz52izSVvKwU6n1fpIyn3vOIKCaVAu9MMpJhM2hD7Bjg%2BGDlLa%2FlgyzV9m0kdenpXIwG0lfbUkIG5HEouFEXNIIWKN37DlgNFgOp7Lp6DjrGa%2FtTixgrYL8Yv9BL8cBv5wGghkuaWzWAbZPddeL5NK0MMLVrsIGOqUBLn7GzrXCgEqZHruC9fepC58LTzBWCWU5gZW%2B8wlHeHNLtPoGdxIMlYiWebSTCwYgBZ5IZNgEyfsAJwBi7jn%2BBOBaZnEixVDOMamivJq4UViQg%2BzrmhR5twRrPZscQXS2IAUIXDT7qiyoPLuFjJaTLQbqDAy1wXKOhSwGkrxcisjRdZOJlfCu3QSJ9VUiiLnHX%2BYZzopKxuTXAkKkbmDPgRzBkpNW&X-Amz-Signature=b27aed42976a460504fbdde14253ba4d4b5bb5186f40f95bf2c096ee13f07105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3HXJBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCRBs%2FAv2St3iELtT%2BEVVYIVuU7mx2kzmFV0Qf5et8%2FYwIhAL%2BpvN3fMuCfY2SKfBhUICPXu840C6%2FdLMWj%2FxXEtMbzKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxadwjT2Kx5PMPXW%2BQq3AP9myObcUzpRWswQkg5pHHRvwm9ziaeEJWMBhS2TG06qxjrZ3ncoqpX%2FOwdMagOmTydfcl4Tw1rdrndI70t24JkuMDt65WQ1RNaNLMamsysOdKgDHuAJFTARDJHPY9z5nkmCXgwRuF0zahCdqV%2FyEU3PUp3Zy8mxIxyZGjtsz2LCppJ3AthvYiyKNCUOFeUwlN%2BR2pRIi0VpP87Lp6XIRVkz5OVnBrb8rhho1mMcO9tywOPgkNAsRCwV6IAE0zLQofJji0fUzWVFbw9bk4p9%2ByYnLvtDG%2F4h%2BRM505irlsnXxf%2Boxwe63zKPMFMSnFMZqurCgMRO4mlE3hNH35QYxqzAN%2F9hVUBRuYIQWVVDJN92iyd5nDJ7Gda5ueXax00zNVhLf45T4JjV8igKnwP429x86OpK40U1hydnmE2QfOH5UfzwaEKaw3UannnuOVREfdrWizEBHgx0JgDErTt9jRr3fayVO9QafZV%2BWvQtm%2BenLSxx0jVf9S%2BSgOCooSgjyRyvMPebuc5ygPO6%2BifQOnrSNuVzuQ04mOFMm%2BL001Asdf5L1mizPgIzrUF9Z4WnmQFEH1ww7%2FeLKoZ%2BNfo0StGoO0K6zDS773sJ9zsAV5dGCeK6%2BmEEqMcrjcdFTD0067CBjqkAbpzUnIYqhAeH%2F8vAiESiBsULRRcZJSY7%2Ftz3hdRMsdTbm72zgcGkwFDz1hEnIRpPr7pmZMQHqmG8xMMdHaW%2FcEFsHdtvC9yet3PU%2Bfq4pRYVhpmYpbXNTI9ZRgh%2BZtfZJYCRUX0nJWU%2Bgd8KhKtVnaiIIWdG53P6c5y2PyR8n0FQnFALF1%2FBhBHshyvojM8FL8hx3i6zKJNZ64SY9rSSR%2B0CR5C&X-Amz-Signature=da60105ea40dd2b5dcb44ac2be39db6d710ec3ea664b4d49ebb81acad855b47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRO27V46%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICIvPQgo9%2FXAB2AIVUMUMuhcRuCm6iXsQghyqQqXkM%2BPAiA281K8Xdf4LNN0Wig4UK1xIhjKAWgMvoudV0Xuvbn9eSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIeUJAG303b3H%2FgdKtwDi79pW3OwuW%2BiTtgh%2BjTVITBScBEZxs1pLqhitQY6qEESIw93p8VA3YvCdn1wUlR2muX8IhCcxjxfvD%2BuWthnZXXi2AC1T%2FPfsMaEB5uiuugz1FEny%2FnSHX8OoJd2BWZdYgqgyKPvqgkctFAd23H0DqlNvxDx%2FffczVtfBgrpkFXNByaDNT%2BoxzM67ooWZKY9L7ab3FasKuE%2FnBqiroRddBsX8zoNOKonvA1DIvc1SCELFILr5kFftHCdxWR7KrzNdP4zDqBUVN8J3x%2FOuT1tbhSQjTD4Msd%2BxM7%2Bv8OVCnlXd%2FSxh2jyLhGEW7C3jypYkiAH3%2FVSssC40RB1VTVKDsoboCLeK74yQyCgFOeZ6NWVhDAVc5wxasq%2BnrCwjhHSkIXGGOO%2BuPbkJGUV7b49x3ie9Q2%2BnR%2BbXSrtfveLyn2P3GGGmx85BVm3p0PMeEde0JBKCJn8xQhGL%2B1ORIn0KxlPMFoVP6YgdaB%2BqpH79yt8LflHZo2WygjhwEdZI4LlOToYZ%2FmuhhpgvJVXTj%2Frd3OfHAj5dMET6OFp5K60G0Nzj5l%2BnvSOOhN7FkhQZDGhJ1zISnv2am4nJg0On5lK7XuUiyCbVSdSXTXs9hqCjp1Y0cU1XKW2D25%2FZ9kw6NeuwgY6pgG0f5%2F2wsT2mWY9J2nseKKV5zs8baC7M%2F0XslmjlaZrcpt%2FqGVVWs7fRjTMHwhGz5bbVz%2B55XUYEzRZ6cRDXi0Xmpae0gZjuVKqKs7onlMjUDKkoYvj8EAEZwAolZEsg%2F1%2FDionOLqpJ%2BNahLqQuIErQWOaMXrIZVJtwZrlF2ppPYvnbeUte%2Fkar4mpdpUa9AFbhEhV%2FVvFyCe60Xk1pW07efySECBQ&X-Amz-Signature=f9b937fb961bf85fabd4f0e4aca67118f2bac928dedf50f94ef948abb71956f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
