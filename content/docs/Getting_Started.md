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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4IOX4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAlB6Tsxo7Qfs0VCrexKwWGdEL6qmxWnNEn5R8WvbVuiAiBNsDOapV%2BEisYIzj6M6VebGo25R5CsaC87t8UK1XBDVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM98hPa0AOtbQGXlwVKtwD9zBKFgAXzclhw%2BXKK%2BDXRo22CyZmSo1F6bxyJIPcmZQErLGvbR%2B1aQGr%2BgPLVOUN8oVehLrysEjDEMJx7zlhIWxoPKOY49YOYEJissVAXq6BziB8f7qnltJi2NIUdmowTiuKFHaGr3uWpTF2zwXKZ7hkAus83WkCCfBkrI0B0tQYd2ABDIDVOw4L468UXeGUQ4x5M92ixpQ3l9YAlpdRXHmUlJlBYiy3YhlmPxAsfv46Bz7A5OorHWqYOoqflGloUarS5zX58Y3ZI2CMgqRjFFt7SWMmq5wNqB9dY74wOsf0WcnLcLpi%2BznUwXc4ky00Zs%2FdK7dgyVb3t1hDacwaURGUs2R3lj8ZAUdR7yUFDfcm7Zs%2FX1TO%2FAY9pqiiuleuOSDCzKdcE%2FDOLa0aPqKbwo5QW7wlf8ms3WYcwM1%2BP66r%2F3f2wygEbNKilTm0u3%2BM64aj2TlVCbYjnQ7bDBfU5s6cEMSYJobLt44AMsp3i%2FJluWlozGoq3X4XE9U66vVVMwdu%2B5DX1EojtIdOG2suY1RGJwx5Se3WFpnbueLqMv8lFL6Yp5GJiO8%2FO7y6D1Nu%2FytuWIwQeOWxipW649n2pISjQOZv00kj62A9L9J%2FEnQCtfxmiMbSUnFbcf8wpIeOxAY6pgHwjebOGT36JHB3n03QMfqm4O2upIwto00HvOn1fikU%2F5E1pnboqPetFsXDEw%2FSSt6TVBNK9A0Mh1yDNyX%2F%2Bn1Q3Wi%2FNw6nM6YidNRhz2w7%2Fz1fe0S4BmN8UMvu12x%2BE9OZF2Awgy3D4ZvRpDxyMdjhEKEWIaUku%2F5%2FxtDPVldoGMuww2daRkS%2FIHQNyks1cDRjhg0vf7tdUERs%2BSqTcDAl0XPfZzMb&X-Amz-Signature=65a061f18b8c3e007b00c31d9be89a7bd83a5393f309f8c81abdd045d01f9d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4IOX4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAlB6Tsxo7Qfs0VCrexKwWGdEL6qmxWnNEn5R8WvbVuiAiBNsDOapV%2BEisYIzj6M6VebGo25R5CsaC87t8UK1XBDVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM98hPa0AOtbQGXlwVKtwD9zBKFgAXzclhw%2BXKK%2BDXRo22CyZmSo1F6bxyJIPcmZQErLGvbR%2B1aQGr%2BgPLVOUN8oVehLrysEjDEMJx7zlhIWxoPKOY49YOYEJissVAXq6BziB8f7qnltJi2NIUdmowTiuKFHaGr3uWpTF2zwXKZ7hkAus83WkCCfBkrI0B0tQYd2ABDIDVOw4L468UXeGUQ4x5M92ixpQ3l9YAlpdRXHmUlJlBYiy3YhlmPxAsfv46Bz7A5OorHWqYOoqflGloUarS5zX58Y3ZI2CMgqRjFFt7SWMmq5wNqB9dY74wOsf0WcnLcLpi%2BznUwXc4ky00Zs%2FdK7dgyVb3t1hDacwaURGUs2R3lj8ZAUdR7yUFDfcm7Zs%2FX1TO%2FAY9pqiiuleuOSDCzKdcE%2FDOLa0aPqKbwo5QW7wlf8ms3WYcwM1%2BP66r%2F3f2wygEbNKilTm0u3%2BM64aj2TlVCbYjnQ7bDBfU5s6cEMSYJobLt44AMsp3i%2FJluWlozGoq3X4XE9U66vVVMwdu%2B5DX1EojtIdOG2suY1RGJwx5Se3WFpnbueLqMv8lFL6Yp5GJiO8%2FO7y6D1Nu%2FytuWIwQeOWxipW649n2pISjQOZv00kj62A9L9J%2FEnQCtfxmiMbSUnFbcf8wpIeOxAY6pgHwjebOGT36JHB3n03QMfqm4O2upIwto00HvOn1fikU%2F5E1pnboqPetFsXDEw%2FSSt6TVBNK9A0Mh1yDNyX%2F%2Bn1Q3Wi%2FNw6nM6YidNRhz2w7%2Fz1fe0S4BmN8UMvu12x%2BE9OZF2Awgy3D4ZvRpDxyMdjhEKEWIaUku%2F5%2FxtDPVldoGMuww2daRkS%2FIHQNyks1cDRjhg0vf7tdUERs%2BSqTcDAl0XPfZzMb&X-Amz-Signature=28bdceb72bbde3b3aef38ca5e1b0bc282696064edddf25b39de9bd445043c1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4IOX4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAlB6Tsxo7Qfs0VCrexKwWGdEL6qmxWnNEn5R8WvbVuiAiBNsDOapV%2BEisYIzj6M6VebGo25R5CsaC87t8UK1XBDVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM98hPa0AOtbQGXlwVKtwD9zBKFgAXzclhw%2BXKK%2BDXRo22CyZmSo1F6bxyJIPcmZQErLGvbR%2B1aQGr%2BgPLVOUN8oVehLrysEjDEMJx7zlhIWxoPKOY49YOYEJissVAXq6BziB8f7qnltJi2NIUdmowTiuKFHaGr3uWpTF2zwXKZ7hkAus83WkCCfBkrI0B0tQYd2ABDIDVOw4L468UXeGUQ4x5M92ixpQ3l9YAlpdRXHmUlJlBYiy3YhlmPxAsfv46Bz7A5OorHWqYOoqflGloUarS5zX58Y3ZI2CMgqRjFFt7SWMmq5wNqB9dY74wOsf0WcnLcLpi%2BznUwXc4ky00Zs%2FdK7dgyVb3t1hDacwaURGUs2R3lj8ZAUdR7yUFDfcm7Zs%2FX1TO%2FAY9pqiiuleuOSDCzKdcE%2FDOLa0aPqKbwo5QW7wlf8ms3WYcwM1%2BP66r%2F3f2wygEbNKilTm0u3%2BM64aj2TlVCbYjnQ7bDBfU5s6cEMSYJobLt44AMsp3i%2FJluWlozGoq3X4XE9U66vVVMwdu%2B5DX1EojtIdOG2suY1RGJwx5Se3WFpnbueLqMv8lFL6Yp5GJiO8%2FO7y6D1Nu%2FytuWIwQeOWxipW649n2pISjQOZv00kj62A9L9J%2FEnQCtfxmiMbSUnFbcf8wpIeOxAY6pgHwjebOGT36JHB3n03QMfqm4O2upIwto00HvOn1fikU%2F5E1pnboqPetFsXDEw%2FSSt6TVBNK9A0Mh1yDNyX%2F%2Bn1Q3Wi%2FNw6nM6YidNRhz2w7%2Fz1fe0S4BmN8UMvu12x%2BE9OZF2Awgy3D4ZvRpDxyMdjhEKEWIaUku%2F5%2FxtDPVldoGMuww2daRkS%2FIHQNyks1cDRjhg0vf7tdUERs%2BSqTcDAl0XPfZzMb&X-Amz-Signature=b43c1225c50fadf72942b059a67228a4f591c808bdc5ae89dccedf7ed5ef57df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62X6SG3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICH%2BfsfKkA4nMpRikybsI7ECPKwKU7tPjed%2BE4B9UM44AiAaQ%2BsbvDItShFzANi6SVTbBQiRNPTXFnAyWLjfLfVnYyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMKFVTRwDWof4qWjOQKtwDrswa9qSY6zE6h0CifnwGKyNq925rxmPCOUI8EE%2Ff7LSaZNmL9AddhhfHVrioUbCMpTc0NCX4yDD%2BoEL6EHfSK70lNxB7mEU23Y8csaAaGvc3seUfmPwhGByqXx96dA3tAVAYWRGA9WKm2ipj%2FwIWO%2Be4JCVAguXsfF0tl%2FB8gndJ6OCHT2d21cnQiUrfhQbcD%2FXf8%2Fsv5G0rp5tI7NPs5wV7MaFsPKe8bvbHAzewYWrf%2BRswrd5pooZmQlCHnpOoFtxILETTyNqVLuOfSOyaW0jcc17CPr652KcYhBfThMYAoTsKLMWHGnx9%2Bcj91%2Bt9%2FsVOiCTAAqiY6bsF4TV%2Fa8prJqn6SmGIxz%2Fqv2mZc4IEM0T2S5HuSnuK47cqpHU0Gdxg7HNzYdiEKq8NfWLLEL%2BrpLE7rJMX9EG%2BmOb32kCAzPs9EKLRrDeSpcWMn5CIVwTYcgBLtdnO8Atpm1dlgjvLqJ6xD3lqpWmM%2BrlzBGn73dUI9ooOm06mD77DNxKMJ0O%2FNi0lcSHWZI3lhZjcKWwBmPcZOXIeC5Sa2aW2GDDHzBsKgInAsJSJCeTE0467P2JYawWYTH1Gy3SeJLKYI%2BhxfmQioK8ZCDG5QNGJa51ttdPEzhXtJ3AcbV8wioeOxAY6pgHRv%2FRN%2FuMzcPxJQvQXP3%2BjSVXVN1GjX8qywNL5dDl%2B5GRTeho5gDwyC3vpDTy5oCcTwHvLz7LPUgaQrin80i59LAB2aKQBsdrKMIeMdPYDO6UlTrVPW5pRSSTpAa%2BUIHKKMEDvw%2B%2F3P3xektXvZgIYY5CMU%2FDNMucPxNDC9%2B0Ohv0X5VvkUbwbtb0GUlG8vkpO%2Fy3X5oQAB2VuyfqMhloYbwY0tk9a&X-Amz-Signature=992d05dbffacebe5fae2cc04cb475a468c999de6ec1b6ffd37712cd512ed5022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GX7LI7U%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD7b9btOUQw%2BWcTohNWa6RbBlEvqA4Hr1K%2FgQRke5Y4mwIgWSVzefNT1FnFbY1JIPAXPDU3dhXcBo8bRqrtP0FREVIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDH2ckCRryXJ2CoLOiyrcA23HZpqNZmfq5HQOMREVUHW%2BX53AQimTddz9uGyW1wh46UUFAd7ickL8ig3r0BIdbEzSJNbYtesl%2BFH38iEPElaqVLiVL0GE9AHDv49vgBe764acYVsxU%2BlSg3Us0ip%2FL37pTSSSh1Mqg5rZomG4Q%2BEyvv86%2BhZAaKGqWioi4xbbO3QEq1U1bXH2u%2BMWrV4uCT%2F0OLvVZMs2CoPB3IT5YWOaVQ4dVWNtCJL6FlWWAqxbv%2BP3de2vikyd1P4pJ47b3i0xf%2BT%2FC4kkZCNeaujk7uuHXHnLALH2UkUEaEknsBXH7jLvTWSYkcEew3vr4QS70O%2Bk%2BUGxzBQUr3als%2FitBKOMn64KtJi8sDYYMDg9ojjh65yFWPFZxIOabJeToNNsVkRflz3X3CKgNaq1Yusl%2BxTJY%2FtFdLJAr9jckvQiBchr9iIQAyCuY5O6QS4QB7lS9t9JcS%2Fv8hYgmUu13JTH2hh7tl3dxs8CSxKWov2sbsbop1m%2FCy3ca7Tfi%2FFJPbUazks3LE%2BKjPl4%2F9pSe5L%2FzZsa%2B1X%2FRdMI4lWJwTWlGlmCZRuQJ1ah8dNP4GRW7sFfRu6W%2BcSkgq2JEosXXECBJu7MKAgqkhJHli%2FnvIuwz2C50SkI%2F0XgsjkfvUoIMPyGjsQGOqUBAx5pdBY98KTN2fV%2BWJCtahA%2FlLQ%2Fl9S1Q4ssdwkaNAa2gVi5zto6nzif6MPZvviacnQAOl65nNI2wf1pWBOF0CcuyLGKcOCmC7q0kYkUJe9CHTmeo6DnCkgyTge8ryk2YV8UYLzrhNoAa142rTtIGAusArcprpTiRf4JBhLLPcLPocYzCoBJbSih7d%2BbNF9J3ZIDCuOjBkffbXhvSgQG%2FXOh0TI%2F&X-Amz-Signature=9e114a9c742c421b68fd77ba0a256610731a70fbceb90d0db56a71a2f844e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4IOX4Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAlB6Tsxo7Qfs0VCrexKwWGdEL6qmxWnNEn5R8WvbVuiAiBNsDOapV%2BEisYIzj6M6VebGo25R5CsaC87t8UK1XBDVyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM98hPa0AOtbQGXlwVKtwD9zBKFgAXzclhw%2BXKK%2BDXRo22CyZmSo1F6bxyJIPcmZQErLGvbR%2B1aQGr%2BgPLVOUN8oVehLrysEjDEMJx7zlhIWxoPKOY49YOYEJissVAXq6BziB8f7qnltJi2NIUdmowTiuKFHaGr3uWpTF2zwXKZ7hkAus83WkCCfBkrI0B0tQYd2ABDIDVOw4L468UXeGUQ4x5M92ixpQ3l9YAlpdRXHmUlJlBYiy3YhlmPxAsfv46Bz7A5OorHWqYOoqflGloUarS5zX58Y3ZI2CMgqRjFFt7SWMmq5wNqB9dY74wOsf0WcnLcLpi%2BznUwXc4ky00Zs%2FdK7dgyVb3t1hDacwaURGUs2R3lj8ZAUdR7yUFDfcm7Zs%2FX1TO%2FAY9pqiiuleuOSDCzKdcE%2FDOLa0aPqKbwo5QW7wlf8ms3WYcwM1%2BP66r%2F3f2wygEbNKilTm0u3%2BM64aj2TlVCbYjnQ7bDBfU5s6cEMSYJobLt44AMsp3i%2FJluWlozGoq3X4XE9U66vVVMwdu%2B5DX1EojtIdOG2suY1RGJwx5Se3WFpnbueLqMv8lFL6Yp5GJiO8%2FO7y6D1Nu%2FytuWIwQeOWxipW649n2pISjQOZv00kj62A9L9J%2FEnQCtfxmiMbSUnFbcf8wpIeOxAY6pgHwjebOGT36JHB3n03QMfqm4O2upIwto00HvOn1fikU%2F5E1pnboqPetFsXDEw%2FSSt6TVBNK9A0Mh1yDNyX%2F%2Bn1Q3Wi%2FNw6nM6YidNRhz2w7%2Fz1fe0S4BmN8UMvu12x%2BE9OZF2Awgy3D4ZvRpDxyMdjhEKEWIaUku%2F5%2FxtDPVldoGMuww2daRkS%2FIHQNyks1cDRjhg0vf7tdUERs%2BSqTcDAl0XPfZzMb&X-Amz-Signature=ed01d0a3a31bf4759c5ef625389f6f6cd00eff1578314773496b0753e370b6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
