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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JH2SNJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDG%2BpKr0CKrGJEWqY%2Ba3LnYpZFeA6%2BBoI%2BWJwbyJMwIAiAIMeOFV%2Fv4Efj8Cbdlg1HJYYfWZMngeYV9EYQZv7n88yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAW5FQSyALD2IZPRCKtwDXL3VD8n520BGS%2FbtIDXw0n82eVLEjKBt4BvMqTAntjP8%2FiZ55%2BmIdZ3VKVno1JLY2stlVMqOAreB82yHbMugF%2F6fagpd86J1yEJRNSU%2F9wbGq3%2BI6Y7uay%2BuObK5m5zx8iLVM58vOIqhuLjuHK6vlQOFpLpU4Ke6AGSbiPRXspEKbisDiP%2B46W1i9kRjqN48osyQslOe2ULqh%2B7eDm9dQlTpl5W03iPCj4JKpC6%2FuPpHETMXMb%2FXJ5SDkB6xw5r7bilDFN3YrwDS9n6W9yEExBIDjLnZ0U1Dz0KPrOmBaXuvbd8MHSDYD1CXJ5P6xJfU%2BDtY6Q965bl8nAXscpFziE5OkC9oIEO6CCymEZQ%2F8VzL3CiTgkgw49SMVn0ksvKL4yr%2FyudCJtvwUZhWzwO0WMeuv9Wtlh2Sc2PuOd3A%2FxCRzchb8rE0J367edyJku6J2beRdE2uLMO54Q2C%2BKXn%2F8PwWI3dcNbbk1vezgVhdUth8KjRZwJWpGEoy1Z9AYXg0BXs8bhJVMCvSvSDVyCS87NCU4%2FFatL%2FdcHqqErWaw30Dwi8vsHIbRVAQkG5Mw5kcqrY7WwK3h%2FPAKmKcTWt7F6IJRkv0TWjS%2BWLvO%2FaMqr1TZUgRFjFQq7ITOYw65WSwgY6pgG0TyVmtQ1p2Wh2I9TLw%2F8y04hvqCNzcB0gfjwv2mDVSOI%2BpnJVCB3%2B6NScWoCN%2B0FRu5GQafUOEy4pc2X5gReltncakbYtcpuIHGTG2hXm02EgXmt%2Fc0%2BCsj5S8kKGbSr4q28oyiIALa%2FfY4I5KoiGB78afs3GuR0EbJEnSA1jwNuT9FGN1YBTJSw6vlKuh%2F6dbJBhuYXakKhfuqTMDCQTZ2vVF766&X-Amz-Signature=8928d402f63dabbc09563ba6598d431cb8c3bc2f52f911c3d5781c39a1bc677e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JH2SNJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDG%2BpKr0CKrGJEWqY%2Ba3LnYpZFeA6%2BBoI%2BWJwbyJMwIAiAIMeOFV%2Fv4Efj8Cbdlg1HJYYfWZMngeYV9EYQZv7n88yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAW5FQSyALD2IZPRCKtwDXL3VD8n520BGS%2FbtIDXw0n82eVLEjKBt4BvMqTAntjP8%2FiZ55%2BmIdZ3VKVno1JLY2stlVMqOAreB82yHbMugF%2F6fagpd86J1yEJRNSU%2F9wbGq3%2BI6Y7uay%2BuObK5m5zx8iLVM58vOIqhuLjuHK6vlQOFpLpU4Ke6AGSbiPRXspEKbisDiP%2B46W1i9kRjqN48osyQslOe2ULqh%2B7eDm9dQlTpl5W03iPCj4JKpC6%2FuPpHETMXMb%2FXJ5SDkB6xw5r7bilDFN3YrwDS9n6W9yEExBIDjLnZ0U1Dz0KPrOmBaXuvbd8MHSDYD1CXJ5P6xJfU%2BDtY6Q965bl8nAXscpFziE5OkC9oIEO6CCymEZQ%2F8VzL3CiTgkgw49SMVn0ksvKL4yr%2FyudCJtvwUZhWzwO0WMeuv9Wtlh2Sc2PuOd3A%2FxCRzchb8rE0J367edyJku6J2beRdE2uLMO54Q2C%2BKXn%2F8PwWI3dcNbbk1vezgVhdUth8KjRZwJWpGEoy1Z9AYXg0BXs8bhJVMCvSvSDVyCS87NCU4%2FFatL%2FdcHqqErWaw30Dwi8vsHIbRVAQkG5Mw5kcqrY7WwK3h%2FPAKmKcTWt7F6IJRkv0TWjS%2BWLvO%2FaMqr1TZUgRFjFQq7ITOYw65WSwgY6pgG0TyVmtQ1p2Wh2I9TLw%2F8y04hvqCNzcB0gfjwv2mDVSOI%2BpnJVCB3%2B6NScWoCN%2B0FRu5GQafUOEy4pc2X5gReltncakbYtcpuIHGTG2hXm02EgXmt%2Fc0%2BCsj5S8kKGbSr4q28oyiIALa%2FfY4I5KoiGB78afs3GuR0EbJEnSA1jwNuT9FGN1YBTJSw6vlKuh%2F6dbJBhuYXakKhfuqTMDCQTZ2vVF766&X-Amz-Signature=f1c6900f3944cc85b3b22f82a2906d9be473dc9167b8020b7ad1e2b2c2cde526&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JH2SNJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDG%2BpKr0CKrGJEWqY%2Ba3LnYpZFeA6%2BBoI%2BWJwbyJMwIAiAIMeOFV%2Fv4Efj8Cbdlg1HJYYfWZMngeYV9EYQZv7n88yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAW5FQSyALD2IZPRCKtwDXL3VD8n520BGS%2FbtIDXw0n82eVLEjKBt4BvMqTAntjP8%2FiZ55%2BmIdZ3VKVno1JLY2stlVMqOAreB82yHbMugF%2F6fagpd86J1yEJRNSU%2F9wbGq3%2BI6Y7uay%2BuObK5m5zx8iLVM58vOIqhuLjuHK6vlQOFpLpU4Ke6AGSbiPRXspEKbisDiP%2B46W1i9kRjqN48osyQslOe2ULqh%2B7eDm9dQlTpl5W03iPCj4JKpC6%2FuPpHETMXMb%2FXJ5SDkB6xw5r7bilDFN3YrwDS9n6W9yEExBIDjLnZ0U1Dz0KPrOmBaXuvbd8MHSDYD1CXJ5P6xJfU%2BDtY6Q965bl8nAXscpFziE5OkC9oIEO6CCymEZQ%2F8VzL3CiTgkgw49SMVn0ksvKL4yr%2FyudCJtvwUZhWzwO0WMeuv9Wtlh2Sc2PuOd3A%2FxCRzchb8rE0J367edyJku6J2beRdE2uLMO54Q2C%2BKXn%2F8PwWI3dcNbbk1vezgVhdUth8KjRZwJWpGEoy1Z9AYXg0BXs8bhJVMCvSvSDVyCS87NCU4%2FFatL%2FdcHqqErWaw30Dwi8vsHIbRVAQkG5Mw5kcqrY7WwK3h%2FPAKmKcTWt7F6IJRkv0TWjS%2BWLvO%2FaMqr1TZUgRFjFQq7ITOYw65WSwgY6pgG0TyVmtQ1p2Wh2I9TLw%2F8y04hvqCNzcB0gfjwv2mDVSOI%2BpnJVCB3%2B6NScWoCN%2B0FRu5GQafUOEy4pc2X5gReltncakbYtcpuIHGTG2hXm02EgXmt%2Fc0%2BCsj5S8kKGbSr4q28oyiIALa%2FfY4I5KoiGB78afs3GuR0EbJEnSA1jwNuT9FGN1YBTJSw6vlKuh%2F6dbJBhuYXakKhfuqTMDCQTZ2vVF766&X-Amz-Signature=8065d14b2dea047a2d301d519e9596ae04c51f98427c7ba190af48d3f1c18859&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIG6ACIT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCSio2K4z3lu%2FInu6NMxeMT3dF1%2FHkxFabzbmxj4DQvAiB2Yp4hZFIvTneWvEvPq6ARUbQx5inwLCOEKDiA7fYY1Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMI5hSpg7KjnEQy2C7KtwDL2bakVxIuS9FYBgHSpfIWsWWkRHfo8Swxb1eNmnX1klPngh4B%2F2P0GrUdb8tn4weyy3TbJ5cOWHRIUDp3J6t0AicdTlAVDq8kQA%2FcaKhKSJUcpW1e5SVszrALMVYExVcPQ3jPUxl97KJLc%2B8TRAMGHEv4IDt02W%2FJKfye6qWLdxD2dHpOZ9YkovmpNEf6O8k9NSdfFcGUp1Ju0hsoOoEccYbrOnKSZCCWG95C%2FZfpFbr8HXWKf17iNUFivT%2By9McNJx8G%2BkeYlSgeyggKEmd7uEvcuErlQ6i2svw39H6t%2FK%2FCRrJmDwZyRNDsAyj09yyKFVCmTcUZufe9u3a0TepB51d%2FYyg1GuZVj0JYn%2BiwpZatfOwlCNe0tYoCdU4h%2FPc8KN60%2BEI6aMro4Ij6p3%2BPZux1T8RX66ZVuRD9DmbVkRsHhb8X1HprdjA87b3aihpFkjAlhsvFdVwJ0FYk1r5f07fukJVemLlLwgpAHb0d%2B5yXUJpMlv0iMDHXLsP%2BSDnOU7F%2BDeIGv7TJ5D9AC0vsUVGTss6ajo8INcaqMDeqjGlogFmSETgW5TmIyF4O9piGDH%2F0VZ9fCsoJSIwWhQAMh2Y1RdaK09bEBEI7zc7at%2Ftn8G32t2xgNhasnIwmJaSwgY6pgG0539b%2BsLHEVVq1iJgjo4SXiowSIWaNNIzH9%2B2nFfWASc9%2BMMZ1s33u5N%2FHr%2BSXV%2FpxVLzt%2BRlDw08LJv3nmdwJtHFzLil8FN9VbCDtLefBJYWUaFnhjPSjgIw5xdirv6%2BKKcy03rTpuwynue422f0yrqn9KY7HPjHQy9Y9TbLgV%2BjB%2FezMpyrEnF4VNkE1Ijoi%2FalISVLQnf6kn3cbSrJINvHLE07&X-Amz-Signature=684c8f08128614622e45112a36424e6a391a0f1e71a58cd226d9bce35d215a85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHIWC24P%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCau1Euwf%2Bz5%2BHYCgtDrQ%2F%2FBQlxHuDHREUySA%2FKQn3OwIgKl%2BcOFvHWj7xbmefx3Jf8is0dHc7s3%2F%2FkABQeZdOGMcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKpF4Wk0169wZSuJZCrcAyxeKLVjO7h5kQbXKu5a3Rj4mTX77reFVcyxPiPfc4OOgriVqBkD%2FDi1fNNwmBt3azz9rDBnUjEGnf8fv4GWyXXGuv7WBpZgtfI%2FR4o4EKmHvb%2BZX11wMfGPWlRc127PD5YH35WAC1aRuOV2GRQvtjXZ52c7OPxpz4wu0C2lOGAizWpUYXFtuZwN%2FIxlq0FESiFoYCkRq5aJXJyx84yjclzqejMCrBOtdkCLFxLxM7nLXb3jSTgV4zrg88B2cPq%2BKIst25SeJdSy9pJUcQajGG8vK6g5Z1taAISgCuK5hQ6El7oaKAFuFxhf17Yt7WaydhjuqTvEsReRr8GNAS9DrVAlfV%2FwbMM2QwzekM7%2BJSkdxpLlgIQRJXmXYN5FZU%2F5rr%2Bh%2FCRZ7foAA7mrDUFJfePgyqJaFE4aWcRct2L1Ha1vjhePpp3v%2BHR3Xf%2Byw9NCx%2FIq6SxadaDQp1POrSxz1DYQSTryqjh469RCc9zvyCyJ%2B%2Bu3mXhtvuRCB3qOmIsjsWkL0yBgz6s8ctYyIlvZ1OyzcA0Mf7vgSWqfN9JjDMxYxhDdDec%2FKBLMm0u7z8Rpurz4KsLFo2uUb4IpPKdNeVmNKY8dhvT17i8%2Bl4AhMIpFZOTpuA15FR6LN3tZMLiVksIGOqUBuO70Mu08z00%2FG43PwsOSBYOdLJPVlZ1grRA93q3KjXzBxUvh5Q5U1p3WH4NZAHk5XSDKsbbHk52Lw4zuem9RT%2FCQb8iplD%2B8Wc0qRK3RNysSuMOuTeMoxeC6%2F3I1YH2L3whsUgC%2BU0o2%2FKfXutjoZyzZYrM9CDZuNhu73Or1wV4ngUkC7UUYv1QrRKO4WURD9%2B4%2FbXGdf4%2F7ljI6X7%2Be7RC5sAv2&X-Amz-Signature=3053fa46a664eb1395fbc3a90db70392b6c37d61077d639a20f735115e1e749b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JH2SNJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDG%2BpKr0CKrGJEWqY%2Ba3LnYpZFeA6%2BBoI%2BWJwbyJMwIAiAIMeOFV%2Fv4Efj8Cbdlg1HJYYfWZMngeYV9EYQZv7n88yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAW5FQSyALD2IZPRCKtwDXL3VD8n520BGS%2FbtIDXw0n82eVLEjKBt4BvMqTAntjP8%2FiZ55%2BmIdZ3VKVno1JLY2stlVMqOAreB82yHbMugF%2F6fagpd86J1yEJRNSU%2F9wbGq3%2BI6Y7uay%2BuObK5m5zx8iLVM58vOIqhuLjuHK6vlQOFpLpU4Ke6AGSbiPRXspEKbisDiP%2B46W1i9kRjqN48osyQslOe2ULqh%2B7eDm9dQlTpl5W03iPCj4JKpC6%2FuPpHETMXMb%2FXJ5SDkB6xw5r7bilDFN3YrwDS9n6W9yEExBIDjLnZ0U1Dz0KPrOmBaXuvbd8MHSDYD1CXJ5P6xJfU%2BDtY6Q965bl8nAXscpFziE5OkC9oIEO6CCymEZQ%2F8VzL3CiTgkgw49SMVn0ksvKL4yr%2FyudCJtvwUZhWzwO0WMeuv9Wtlh2Sc2PuOd3A%2FxCRzchb8rE0J367edyJku6J2beRdE2uLMO54Q2C%2BKXn%2F8PwWI3dcNbbk1vezgVhdUth8KjRZwJWpGEoy1Z9AYXg0BXs8bhJVMCvSvSDVyCS87NCU4%2FFatL%2FdcHqqErWaw30Dwi8vsHIbRVAQkG5Mw5kcqrY7WwK3h%2FPAKmKcTWt7F6IJRkv0TWjS%2BWLvO%2FaMqr1TZUgRFjFQq7ITOYw65WSwgY6pgG0TyVmtQ1p2Wh2I9TLw%2F8y04hvqCNzcB0gfjwv2mDVSOI%2BpnJVCB3%2B6NScWoCN%2B0FRu5GQafUOEy4pc2X5gReltncakbYtcpuIHGTG2hXm02EgXmt%2Fc0%2BCsj5S8kKGbSr4q28oyiIALa%2FfY4I5KoiGB78afs3GuR0EbJEnSA1jwNuT9FGN1YBTJSw6vlKuh%2F6dbJBhuYXakKhfuqTMDCQTZ2vVF766&X-Amz-Signature=964b046541806a67a02f854ad06a135c628db0ff3ee2fb2dd833c4fd43144f23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
