---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O33LYAA%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1IbL3fNp9NGIWKWFRvdK5RnVedoRBC1s0r%2FdApJbv%2FAiEAzZ%2BEDGEWlHUFNrfHZ3Ju3TyaBD7hcGB9vMDNROPLTysq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFxu49Dw%2BwOXUAPWircAy8GTjbr%2Fvtdmxb1yny%2F2dz%2FxB%2F0AWs%2FAVI3%2BzDlUCeoTv%2FEZWSLie8WVg%2F7iURkm2XH9zXqL4wwbASAxe9RuRWlR8laYtYmYV6wDrT5kn2%2B8I9b6kYrm%2BPCNTXCyU2m39k1Culz%2FGAD%2FxoAOmju6iH6gag5VUSBUcs%2FN6RCdS1kt0nGe6l%2FaIwsgao0BuYoiqyI034N65qfxhYMSDXDpP5SpjM9CP8VyBrrkXSpCyg6detbKOjR4Rm8fuJ09cI3g3BhGXF%2B4YbhSpK5Tb43AZzPO8QucRdCln8Xh9ZCqce7VDnoRyoVrOKGBB5AUlNlEhswAmlm9ZLqd2xDIaLnSXs9b%2FJQ7k6MYrYG%2BeFTKakEtkIuZrUTyC4oFRMdxiWK3PSXFE4K1z1pCkQgk%2BjTPO1AVYBy34hQ7yzw9DKH9YqQkxIXJsEWSzUwgJCcau%2BUOptuosN3eoq61NNYYl2nJFBevClufRpzQ8FRDqd1mCYcZT4MuWD0hYvmWyxFz8sVtBV0RMPJbXIfx3EQEu4NdsKY9cSmWE%2FobRD7rwYua01IcCh5LPwIZGD91AG8%2FcbW0MSEC5kXPowcMo9%2FLf%2BsszYKrUozNoMCZxg2eyv6x2rS%2BO1mf%2FSNWNeFssdTMIPMztQGOqUB9u%2FPmEEbDYt58ocRNguLbA4nHpK7ZWT0gJ14yABLOhSsy1P8lPTXxM5wdxIoHOv%2BI4B8dyVCTkslaJZzt38UdQpDaiIbxFmZPvVUZq%2FWe3cZSASu3%2FxjztIqWhJKue2p1DnQJEm2aEM%2Bz1fDklg2on5L%2BGnRLrooXZI%2FDyWvcv5fwUqYuJWElKZPeZQmOvIlw3huYOSRtXcGUhC3QkhSADBgJdWn&X-Amz-Signature=ce1625b09d4f323f8a376e3851c6064a2b17c6d015dec51c84fbd4992fac4a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O33LYAA%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1IbL3fNp9NGIWKWFRvdK5RnVedoRBC1s0r%2FdApJbv%2FAiEAzZ%2BEDGEWlHUFNrfHZ3Ju3TyaBD7hcGB9vMDNROPLTysq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFxu49Dw%2BwOXUAPWircAy8GTjbr%2Fvtdmxb1yny%2F2dz%2FxB%2F0AWs%2FAVI3%2BzDlUCeoTv%2FEZWSLie8WVg%2F7iURkm2XH9zXqL4wwbASAxe9RuRWlR8laYtYmYV6wDrT5kn2%2B8I9b6kYrm%2BPCNTXCyU2m39k1Culz%2FGAD%2FxoAOmju6iH6gag5VUSBUcs%2FN6RCdS1kt0nGe6l%2FaIwsgao0BuYoiqyI034N65qfxhYMSDXDpP5SpjM9CP8VyBrrkXSpCyg6detbKOjR4Rm8fuJ09cI3g3BhGXF%2B4YbhSpK5Tb43AZzPO8QucRdCln8Xh9ZCqce7VDnoRyoVrOKGBB5AUlNlEhswAmlm9ZLqd2xDIaLnSXs9b%2FJQ7k6MYrYG%2BeFTKakEtkIuZrUTyC4oFRMdxiWK3PSXFE4K1z1pCkQgk%2BjTPO1AVYBy34hQ7yzw9DKH9YqQkxIXJsEWSzUwgJCcau%2BUOptuosN3eoq61NNYYl2nJFBevClufRpzQ8FRDqd1mCYcZT4MuWD0hYvmWyxFz8sVtBV0RMPJbXIfx3EQEu4NdsKY9cSmWE%2FobRD7rwYua01IcCh5LPwIZGD91AG8%2FcbW0MSEC5kXPowcMo9%2FLf%2BsszYKrUozNoMCZxg2eyv6x2rS%2BO1mf%2FSNWNeFssdTMIPMztQGOqUB9u%2FPmEEbDYt58ocRNguLbA4nHpK7ZWT0gJ14yABLOhSsy1P8lPTXxM5wdxIoHOv%2BI4B8dyVCTkslaJZzt38UdQpDaiIbxFmZPvVUZq%2FWe3cZSASu3%2FxjztIqWhJKue2p1DnQJEm2aEM%2Bz1fDklg2on5L%2BGnRLrooXZI%2FDyWvcv5fwUqYuJWElKZPeZQmOvIlw3huYOSRtXcGUhC3QkhSADBgJdWn&X-Amz-Signature=db362b9faae3becdb80a0ee225eab01cddf16bf1d04ecb09c21bcbf5fb8e7301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O33LYAA%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1IbL3fNp9NGIWKWFRvdK5RnVedoRBC1s0r%2FdApJbv%2FAiEAzZ%2BEDGEWlHUFNrfHZ3Ju3TyaBD7hcGB9vMDNROPLTysq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFxu49Dw%2BwOXUAPWircAy8GTjbr%2Fvtdmxb1yny%2F2dz%2FxB%2F0AWs%2FAVI3%2BzDlUCeoTv%2FEZWSLie8WVg%2F7iURkm2XH9zXqL4wwbASAxe9RuRWlR8laYtYmYV6wDrT5kn2%2B8I9b6kYrm%2BPCNTXCyU2m39k1Culz%2FGAD%2FxoAOmju6iH6gag5VUSBUcs%2FN6RCdS1kt0nGe6l%2FaIwsgao0BuYoiqyI034N65qfxhYMSDXDpP5SpjM9CP8VyBrrkXSpCyg6detbKOjR4Rm8fuJ09cI3g3BhGXF%2B4YbhSpK5Tb43AZzPO8QucRdCln8Xh9ZCqce7VDnoRyoVrOKGBB5AUlNlEhswAmlm9ZLqd2xDIaLnSXs9b%2FJQ7k6MYrYG%2BeFTKakEtkIuZrUTyC4oFRMdxiWK3PSXFE4K1z1pCkQgk%2BjTPO1AVYBy34hQ7yzw9DKH9YqQkxIXJsEWSzUwgJCcau%2BUOptuosN3eoq61NNYYl2nJFBevClufRpzQ8FRDqd1mCYcZT4MuWD0hYvmWyxFz8sVtBV0RMPJbXIfx3EQEu4NdsKY9cSmWE%2FobRD7rwYua01IcCh5LPwIZGD91AG8%2FcbW0MSEC5kXPowcMo9%2FLf%2BsszYKrUozNoMCZxg2eyv6x2rS%2BO1mf%2FSNWNeFssdTMIPMztQGOqUB9u%2FPmEEbDYt58ocRNguLbA4nHpK7ZWT0gJ14yABLOhSsy1P8lPTXxM5wdxIoHOv%2BI4B8dyVCTkslaJZzt38UdQpDaiIbxFmZPvVUZq%2FWe3cZSASu3%2FxjztIqWhJKue2p1DnQJEm2aEM%2Bz1fDklg2on5L%2BGnRLrooXZI%2FDyWvcv5fwUqYuJWElKZPeZQmOvIlw3huYOSRtXcGUhC3QkhSADBgJdWn&X-Amz-Signature=32b302e77dbd2e290c089c157b0d587c0f2413a052d926cc5d0b6e45e5b03538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXE7X7Y%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiMyf1xpdSGqpE7TTxFJjBAhihZTaLHCst69RLGbIIAiBNDxNDEeMiTEc0X5QtQOL2tDuFvy9LD0NczcLdtoQtbSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHBMZYb6lzra6F2HfKtwDyCYmtO%2BUNFamo5PN8WDH66iKBuX3BF420zFyJ%2FeqJ1PbjIZiAofj%2By0%2Fn1gxeUcL7zoDDr%2FoojK15b84H1sfgOlT%2BLMo0lNEQR%2FOZHjXgStuQbRtQw%2BPcxm1v8TOUlbElEMG8185gT0jDkgAvRRA9A8Ry4hofy%2FZzXvii2dpHh015twjcbbfID0oK6K4Coy43ZjAsm5HFtPC4%2FhuKJnDeuW1nMMPfEpnUUM0ePgL45VvEfIabpqCQ7L37%2BUP%2Bg4mRTS9vCNjfU58spcrehyj2bmnINbojOcLHe2Ex3aiHPonr5EaEIRC6Mn86KVTk6duto%2Bz9Jk1iuxTCJe6zqbQ8sYU%2FthWxJB82ptfgAHYgjsfBVcX0NwtNtJz577d8pqoBFFFoJvZHAbWg8spWf5EYxg4CP5n0UYk8rIF3PHlUJ33MZP7o1dJ%2BIKevYe3GW0TQOeXdjBUbUjvyf922ZaID1N4B69r2N8F8ZA%2BzFb2oh7dTHzNI9HS0cqmgqI1Zg%2BuVJpgneK8GVGL%2FVFKUXd4ZUHkwyJD1%2FKSgbwTACjn2ILj3eXplAUVwXWmqLds4r4mJE4mbe2UKVMb%2BRdVaIJaGMLUHZllsm7qGHe33t0np95wbfEc0mPc7Yg%2B220wx8zO1AY6pgHgIGZOmPFyGXED0BntRegZwvS%2B6Z%2F5ERv7wAOljBy2vb4BV43MqgEn3JWQNKM9CBWGLcOI8QmVCopJxF%2BqnfX6btBQYYthLb8rpOJd1Yv9wdufXej8T1IkfW2JBSDoAuFemjX%2BQdIn6nfVgKZDp3UQtCs1md7Ui8A6MwUuBsKa5GmVbwPcCGsGqGOqSK4XR%2BKifUarj6VWCS9XL8yMi%2B5DGmWqn7sx&X-Amz-Signature=00f20ea26d9bbdbfca33fb610b10984f75c080908ac2c3859be5d1b236b80cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXVYPPH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA44mP7sqH%2F4ZRiIlOcddmVRLlsVb2JkBvOgo26OeEAXAiBR%2FJ0hG4Q8r7LB%2Bnbmu%2Fd71EqRcNYHwDaSVoJvnsHCKyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKH6aYZg7PXMwRRDIKtwDvEPNBuV4o0Aamj3SSfrXP8FkwlixNc0S6dVyk%2FgdRvz6wUl3jjB9NnfOAjWMwLXBW5TlVSdMd5WwyikePkNuK6lOpw4IfYwABaP0AuZlQbxZCaY24f0HYByXwADusLEPrqLcL51AoI3IerKqzUIMpzE6%2F2%2FDm2W1MKrSu%2FFIsnw%2FC0EUH61BY%2FvVHjA7fC7T%2FJcbFMvqu0VM7j1KwaAH9DynyfOLmOk52PiqMVi%2F3c3BIGaqAvL3fwNU6PrMs8CR6vCsKEGC%2F5kjSlXvVfeg2jvkhmgSaahJTGasJaHsomVckUiUz2C8FTEfmdAHms9Rlr7Cx3zPIBSb87HtWk8Ovt%2BlIvlKNiS1s7UooMSl22BSYMgMS%2BJ2RJOWqe9g5w%2BrxmxgoEYyAYycqjFAWv5OQuaUIa8mFWY7FauMyISE0GMxNHZFRe2DtRvx74XrHB5PFORvwvjgLHIES%2B8VdhBxg2WQ%2BkWyaSQOTfYhzXoH8DCRw2rWxiNGKgH2nGr%2FX8x0u7EQAbWM%2BF3wGU0VsB8ez9tH7q02xrFyyDPlNXX%2Fppt0OS35g2ddDUpnsaYjOhg0Yi5GHeyHPg0zFV1XPD9dy%2BfDrLCAbjw911n5mZkj%2B60TpM%2FiY2TQubtgiDkw08vO1AY6pgHFw9UPgt2nX0v99l%2BauwDCgUJPDyeESyf1gWRzLksXzL4LfAsKf5xp88BSy7fMf2DAC%2FkDqdskbg%2BU0k%2Bf%2Fx1CL0GZ6EGF9IKk%2FdOg7fheUgCY4KxsXfpMKI3vQOnTjBN84rbZtXbWWM9g84mw7p%2Fd8TUpHpNeZXuootewmcbB6wggdgwEERQdF0Jhw4yT30URweGnIzTvMmlDCaBDOkruBNovpsSS&X-Amz-Signature=214fd6bb5680fec257bc4c9fef637763c9084c27c56ab0ef930c4a442ee81c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O33LYAA%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1IbL3fNp9NGIWKWFRvdK5RnVedoRBC1s0r%2FdApJbv%2FAiEAzZ%2BEDGEWlHUFNrfHZ3Ju3TyaBD7hcGB9vMDNROPLTysq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFxu49Dw%2BwOXUAPWircAy8GTjbr%2Fvtdmxb1yny%2F2dz%2FxB%2F0AWs%2FAVI3%2BzDlUCeoTv%2FEZWSLie8WVg%2F7iURkm2XH9zXqL4wwbASAxe9RuRWlR8laYtYmYV6wDrT5kn2%2B8I9b6kYrm%2BPCNTXCyU2m39k1Culz%2FGAD%2FxoAOmju6iH6gag5VUSBUcs%2FN6RCdS1kt0nGe6l%2FaIwsgao0BuYoiqyI034N65qfxhYMSDXDpP5SpjM9CP8VyBrrkXSpCyg6detbKOjR4Rm8fuJ09cI3g3BhGXF%2B4YbhSpK5Tb43AZzPO8QucRdCln8Xh9ZCqce7VDnoRyoVrOKGBB5AUlNlEhswAmlm9ZLqd2xDIaLnSXs9b%2FJQ7k6MYrYG%2BeFTKakEtkIuZrUTyC4oFRMdxiWK3PSXFE4K1z1pCkQgk%2BjTPO1AVYBy34hQ7yzw9DKH9YqQkxIXJsEWSzUwgJCcau%2BUOptuosN3eoq61NNYYl2nJFBevClufRpzQ8FRDqd1mCYcZT4MuWD0hYvmWyxFz8sVtBV0RMPJbXIfx3EQEu4NdsKY9cSmWE%2FobRD7rwYua01IcCh5LPwIZGD91AG8%2FcbW0MSEC5kXPowcMo9%2FLf%2BsszYKrUozNoMCZxg2eyv6x2rS%2BO1mf%2FSNWNeFssdTMIPMztQGOqUB9u%2FPmEEbDYt58ocRNguLbA4nHpK7ZWT0gJ14yABLOhSsy1P8lPTXxM5wdxIoHOv%2BI4B8dyVCTkslaJZzt38UdQpDaiIbxFmZPvVUZq%2FWe3cZSASu3%2FxjztIqWhJKue2p1DnQJEm2aEM%2Bz1fDklg2on5L%2BGnRLrooXZI%2FDyWvcv5fwUqYuJWElKZPeZQmOvIlw3huYOSRtXcGUhC3QkhSADBgJdWn&X-Amz-Signature=d32872b26c239debd9564662b4354d26eb0c0291574440132dbd96ccd969d671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
