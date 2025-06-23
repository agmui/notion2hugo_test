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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITJ7ZW2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGqIL2NIBE8TVqoEGtjlPWeI6e4hnJ7Rb20v4BQekRq1AiEAkSz7P8fc2NPlNV2Gi9zwWdhbrc0Aiyxml2HJ%2BtqzNKAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM7kiwSHnx%2FS7pGD8SrcA0c6sYsi3TluUIuLxf2hkZiavqnKjTtExJsXD9NZuJSTunhr5rlfc10JbiIB5scrzFep%2Fx%2BbfGv%2B3NNsJwVMCiqpQw9a5F3wglwAeP6NaR5DWJGFRkPY7o476rqNxqr5hVpRwbsCQFWt%2FLXM%2FIIDeRRw%2Fxlbh1YsbGDiwno101CbgY0hb9Ka4ty13h1%2FEOarpYm49iC6fBX7DBD882BZPAoVvwUro7Y3LgKtqF%2FLudaXw3Se7Jp%2BmpI2Bag5RpuGWerMBJBPFxBU2kAhxPb9lQZ73DCaeEls7O3UKosQs75%2ByKzjpxsNOocQObp%2Fc7jXMM4MvzA9wzWQ9eoPBpfyJY7RLPX3q5BCOjKxbeDFdYoDK%2FInfVMjKpaUIWaP2Ru73nKuYCWwND%2FSxtUviC%2FZf78P%2BVw%2BF%2BxiSiCfs2cBysq5fTuscejV6kwKiOa18k6vvvyVUAE%2FDdfVdN6%2BPBX7lfqoI6FKj5CjEDBd01eJdjMbsqPNlrrvkOhZzNMHZVjLXrTXF%2FGNfwpD8nNWUT9oH0tBc2N6y%2FSEsbI5QJuQUrtUNhXnbVpNJOv34ee72R3U7zXMa86%2FD4tqWA%2FgNUhJUYrjZgbYP%2FejsMD0qHU5OVVVZrQklC7uWmDNCm95MOzt5sIGOqUBYZg%2Bz2psSjTJQKvcWVukqBOQZv99T8XZRI0PEZYorD3pb8OXuBMqqLU6AhXkiQTFbDhsPPkcgbpCnarthPOEkyy7NGUm9CzA3g%2FpRKplEn%2FSGfZErsXdbcftetZaFyhnY9voodRe7ppxZ9orfpD1J7nIi4t%2BGVH%2F9uj6DUFlG6T3vD6QgdikoV86d3uuNS1Z5le1kJHS8lnJ3iI%2FjP7ZTP%2FGLYC6&X-Amz-Signature=9b82e586354daa1dd9afef6f6db764405123bcc9af79f16d7fa9a5f3c853df71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITJ7ZW2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGqIL2NIBE8TVqoEGtjlPWeI6e4hnJ7Rb20v4BQekRq1AiEAkSz7P8fc2NPlNV2Gi9zwWdhbrc0Aiyxml2HJ%2BtqzNKAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM7kiwSHnx%2FS7pGD8SrcA0c6sYsi3TluUIuLxf2hkZiavqnKjTtExJsXD9NZuJSTunhr5rlfc10JbiIB5scrzFep%2Fx%2BbfGv%2B3NNsJwVMCiqpQw9a5F3wglwAeP6NaR5DWJGFRkPY7o476rqNxqr5hVpRwbsCQFWt%2FLXM%2FIIDeRRw%2Fxlbh1YsbGDiwno101CbgY0hb9Ka4ty13h1%2FEOarpYm49iC6fBX7DBD882BZPAoVvwUro7Y3LgKtqF%2FLudaXw3Se7Jp%2BmpI2Bag5RpuGWerMBJBPFxBU2kAhxPb9lQZ73DCaeEls7O3UKosQs75%2ByKzjpxsNOocQObp%2Fc7jXMM4MvzA9wzWQ9eoPBpfyJY7RLPX3q5BCOjKxbeDFdYoDK%2FInfVMjKpaUIWaP2Ru73nKuYCWwND%2FSxtUviC%2FZf78P%2BVw%2BF%2BxiSiCfs2cBysq5fTuscejV6kwKiOa18k6vvvyVUAE%2FDdfVdN6%2BPBX7lfqoI6FKj5CjEDBd01eJdjMbsqPNlrrvkOhZzNMHZVjLXrTXF%2FGNfwpD8nNWUT9oH0tBc2N6y%2FSEsbI5QJuQUrtUNhXnbVpNJOv34ee72R3U7zXMa86%2FD4tqWA%2FgNUhJUYrjZgbYP%2FejsMD0qHU5OVVVZrQklC7uWmDNCm95MOzt5sIGOqUBYZg%2Bz2psSjTJQKvcWVukqBOQZv99T8XZRI0PEZYorD3pb8OXuBMqqLU6AhXkiQTFbDhsPPkcgbpCnarthPOEkyy7NGUm9CzA3g%2FpRKplEn%2FSGfZErsXdbcftetZaFyhnY9voodRe7ppxZ9orfpD1J7nIi4t%2BGVH%2F9uj6DUFlG6T3vD6QgdikoV86d3uuNS1Z5le1kJHS8lnJ3iI%2FjP7ZTP%2FGLYC6&X-Amz-Signature=fefc2ae120af96d0bbd49527b9504f419a013abd3baaf13337ea22508682c0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITJ7ZW2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGqIL2NIBE8TVqoEGtjlPWeI6e4hnJ7Rb20v4BQekRq1AiEAkSz7P8fc2NPlNV2Gi9zwWdhbrc0Aiyxml2HJ%2BtqzNKAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM7kiwSHnx%2FS7pGD8SrcA0c6sYsi3TluUIuLxf2hkZiavqnKjTtExJsXD9NZuJSTunhr5rlfc10JbiIB5scrzFep%2Fx%2BbfGv%2B3NNsJwVMCiqpQw9a5F3wglwAeP6NaR5DWJGFRkPY7o476rqNxqr5hVpRwbsCQFWt%2FLXM%2FIIDeRRw%2Fxlbh1YsbGDiwno101CbgY0hb9Ka4ty13h1%2FEOarpYm49iC6fBX7DBD882BZPAoVvwUro7Y3LgKtqF%2FLudaXw3Se7Jp%2BmpI2Bag5RpuGWerMBJBPFxBU2kAhxPb9lQZ73DCaeEls7O3UKosQs75%2ByKzjpxsNOocQObp%2Fc7jXMM4MvzA9wzWQ9eoPBpfyJY7RLPX3q5BCOjKxbeDFdYoDK%2FInfVMjKpaUIWaP2Ru73nKuYCWwND%2FSxtUviC%2FZf78P%2BVw%2BF%2BxiSiCfs2cBysq5fTuscejV6kwKiOa18k6vvvyVUAE%2FDdfVdN6%2BPBX7lfqoI6FKj5CjEDBd01eJdjMbsqPNlrrvkOhZzNMHZVjLXrTXF%2FGNfwpD8nNWUT9oH0tBc2N6y%2FSEsbI5QJuQUrtUNhXnbVpNJOv34ee72R3U7zXMa86%2FD4tqWA%2FgNUhJUYrjZgbYP%2FejsMD0qHU5OVVVZrQklC7uWmDNCm95MOzt5sIGOqUBYZg%2Bz2psSjTJQKvcWVukqBOQZv99T8XZRI0PEZYorD3pb8OXuBMqqLU6AhXkiQTFbDhsPPkcgbpCnarthPOEkyy7NGUm9CzA3g%2FpRKplEn%2FSGfZErsXdbcftetZaFyhnY9voodRe7ppxZ9orfpD1J7nIi4t%2BGVH%2F9uj6DUFlG6T3vD6QgdikoV86d3uuNS1Z5le1kJHS8lnJ3iI%2FjP7ZTP%2FGLYC6&X-Amz-Signature=f568c0e2d3d5d1045e7c03f8a56efe60b3780d64c30ab2eff5de8281b96afcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSFLQDL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCT6hs7LrhSLaUm89KWq5FdUgdELcRjB3LsZtweiSnMWgIhAMM2YYnCpF89g7KTLkLDSV%2Bd6kBoXCKFnzTkVxeyw3YGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyaOPg8Xof%2Fn3GSn%2Fcq3AO9OJmXkgKNQ3DA1DsKPN7sIOA6c941Ck7JAx%2BGf2k8jcQnQGJwZYFtuPujykjK85RKSlt%2FqLVBZpIoIfIf2zBIsm9IyNIp%2FdSZ97V5myjA8kQt3oKN3PfHZ%2BIt2dsR6edc61YnvWzxPls%2BChml4%2FXcSAXqStgLMZJ5%2BhK%2FXIqg0wfBlTDsZwgJUf0H%2B0QYqcju5ZUQl5RZNIwJ%2FOKgEAXEy4tWDFPZ7T637VCCts4%2Fh3OtOM7Ytr2OOjGVnpr%2BDE5FemJqzcGYHfyB4pnZ8hdVCOpWx7bydlhYUgQ3%2BVYQ9CDMj51cs7mGDS8MFPymYHe%2Bg%2FbgkoBnjTnAPPWty2RhUJiej0ryAIMJ1ISi07460Mq499xDLZM%2BE2103Ai%2BG9n4nDtYe9cW2G8REy10oiqVUXcysvtKRdeVMLJp43YeULuxzRRx1KLw5BKc88NMyd9comEaJbBpqZZocgSgjStkCsHP%2F%2FPmLFy7v5COzTLq77LE%2BaRnV3Glpkeib5%2FZKHCfBorJ6%2FpwV7jfZeYgLY1ObP2mmU9cHkHEtlJLBTyjoghueqQU3yjUnZv1PZKtkMUKfrs4wM8COshlKpAHh0kOQQXYYkH2ONpxGPQIH0Fz%2FiqlEYCZIBmAKKE8kzCL7ebCBjqkAaaXpPLQflIVu%2F3RiFUPrORswR4%2FHOPR6vXOQ9eRi2s1jtQ2tEGOH9IbHzzd2nA9NXWFWKRZctFlvpiCO%2FVbLgB7FAPt3ECt8AAz044fp0s39hf31TmSM8XRywJUwDHuDp5zjoVUi7F%2BOLRoO8cjRNHsmUhQf0ipiXsowoJ9yl%2BysYM5CUyK8%2BPB7ht8hZCna9iXsIhgyuqKO3W%2FkTHgp7HuauIR&X-Amz-Signature=ce339b6dcdb25c5946d35ee4c48acb932f19fc2ea8aef314b249aec613d7eb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMYO3CJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5XYUkNA6BP%2FCnHjt3OiKViunj%2B1NJJT54Ck%2BcFB8AJAiEA2GmSdb9MZIS4ky28m%2FThha125CtaiLD7xffi%2F6iW9AAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDn%2BmDcViD3bEM7j3ircAwHq%2FFSaFtGyrdDqoxfED3NP1LU4C1qaJec1WDZXPKbpc73K8nckU245JrfkecpY5bjsWM2eMemxqiuQZKYDJBBCVK6h2TkwAGePVk%2BhZtMeKKXAC1ICSrvP7Q%2BhiOMGvhBeUvMvJdcQTUbBA9kJniprdGDWGyZxj2eTIPZGn14rXb4SLKblfl6R3e8JeZfi0Bul0SsNFdv8bvdd2d3KeMdKyv%2FOB5OSb8PI4bSxi0XZ6fTp3d8p1iogkez6aO%2BWtS1Gm3uU7N1Xr%2FJC%2FGpwdlHcrKiv1qiwd%2FQVgltTDEOH1XayvJ%2BCUuABWXzHMNElEmiCYpzG4XyoDxYtDzGfSJnW86w4Rat4QK9E9HNnt4gt143%2FIna1YBvIv5IPvd%2FAlVraJZIvG33YW%2BsQwRz%2BiQGOvyORd3bUC5xUF47K70lUX1JNQIPwNgSdhggvan4MZXGEEmnSJ3GawFUhJ5eewnmxnubpPLstwdR0UJGModqcZnHU1q0HxRdL8YKnmEebz3O0KK%2BEPH6zs%2FMN9cvsAXNpntsIvvDCrZBHmqpoIch5Vum8DGLbhzVLVnhms2fnAxsZ7fLs30p2zpnopxaRnr1ghvll3dn%2B6io%2BrJ%2BZilbpKl%2B%2FSimMuV3D%2BhLjMP%2Ft5sIGOqUBk5Cbz2mEuuLJ4jzdAs8DtQ1%2B%2Bndhhk07ZNBqIJzx9gXfj8Y77lyYoAreCKuVVR%2FjcO97XLo7LM7diUza8X6vz66rlZjdOmDdSSpnPgV7pPMWAa34fN6jb0K44pfeMiK8hmhAsqeoTEflpbsHVfDo2lLl8Xs9fiJBRaPeG%2Bg34qerAmAaRiCl97yG%2FIb9gB4aLa2TpjZ8Bwif4qDfaglfZxR0goMN&X-Amz-Signature=6fd14361c47307ebaec407a5aa2653d85d528e38a18ea5393b953c677eaff8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITJ7ZW2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGqIL2NIBE8TVqoEGtjlPWeI6e4hnJ7Rb20v4BQekRq1AiEAkSz7P8fc2NPlNV2Gi9zwWdhbrc0Aiyxml2HJ%2BtqzNKAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM7kiwSHnx%2FS7pGD8SrcA0c6sYsi3TluUIuLxf2hkZiavqnKjTtExJsXD9NZuJSTunhr5rlfc10JbiIB5scrzFep%2Fx%2BbfGv%2B3NNsJwVMCiqpQw9a5F3wglwAeP6NaR5DWJGFRkPY7o476rqNxqr5hVpRwbsCQFWt%2FLXM%2FIIDeRRw%2Fxlbh1YsbGDiwno101CbgY0hb9Ka4ty13h1%2FEOarpYm49iC6fBX7DBD882BZPAoVvwUro7Y3LgKtqF%2FLudaXw3Se7Jp%2BmpI2Bag5RpuGWerMBJBPFxBU2kAhxPb9lQZ73DCaeEls7O3UKosQs75%2ByKzjpxsNOocQObp%2Fc7jXMM4MvzA9wzWQ9eoPBpfyJY7RLPX3q5BCOjKxbeDFdYoDK%2FInfVMjKpaUIWaP2Ru73nKuYCWwND%2FSxtUviC%2FZf78P%2BVw%2BF%2BxiSiCfs2cBysq5fTuscejV6kwKiOa18k6vvvyVUAE%2FDdfVdN6%2BPBX7lfqoI6FKj5CjEDBd01eJdjMbsqPNlrrvkOhZzNMHZVjLXrTXF%2FGNfwpD8nNWUT9oH0tBc2N6y%2FSEsbI5QJuQUrtUNhXnbVpNJOv34ee72R3U7zXMa86%2FD4tqWA%2FgNUhJUYrjZgbYP%2FejsMD0qHU5OVVVZrQklC7uWmDNCm95MOzt5sIGOqUBYZg%2Bz2psSjTJQKvcWVukqBOQZv99T8XZRI0PEZYorD3pb8OXuBMqqLU6AhXkiQTFbDhsPPkcgbpCnarthPOEkyy7NGUm9CzA3g%2FpRKplEn%2FSGfZErsXdbcftetZaFyhnY9voodRe7ppxZ9orfpD1J7nIi4t%2BGVH%2F9uj6DUFlG6T3vD6QgdikoV86d3uuNS1Z5le1kJHS8lnJ3iI%2FjP7ZTP%2FGLYC6&X-Amz-Signature=5f04d835eb4705ccc4c1c058602270b8cdf774911e300b43088ba3566b7495a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
