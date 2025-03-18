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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6UOMPJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClXHwQ%2FQ%2FGtAGLw19LmZKeG1cO5u6gReOO%2B3bGzQ%2B%2BTQIgE4OGKC1qWhZ7sHTVy9M5wZVW0f0wd7HqoqL%2BfL8ECjoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBZ2n%2BHbYFDHiAaSzSrcAyfN1rmeGomG6GTeYgnqnUnIa3lH0lnnjvYdOrnsA0Mlet%2FohWRu8h3RQtuLUXGQH5A8uSNLblnehwNnKm0ohv45pW9bxxztcAX2%2FmJNbzEhIcnvvNw15L8OftYuhpDgcrpOQoAfpN6fCKdS38lhLF7mxECOzYU3X24PoobV0LV%2FDeh0s5w%2BNvZq2fuSTuZXOZsZ3vGrbnfQ13GNUCGdV2KBhOMMpaL09mHPyTZtcUJRlaYbo9Cq8dCbKPmtdLEnmGmmv90l5cVN4RKtcLmNdftpK%2BHpzQahSKI565G9DvbaEiWgg2xkxB5%2FcCkjaoLtEG2nerFDZFa3WylmmnuDuMIJOTVyRqVkA8IS7Lld%2B1EyOuNp%2BUnBVsqdMyLy4ahY6SsDhR5wmAuF9TCtmCwx02xykMrky9Bv2fvPvAjVm9G3PVutwkuJZzC08HKYx%2FTP%2BdP5bJ%2FTraOnHBtH6gdfrHYrb4bw6Dajj2ER3Hfg6r8S%2F6SHmM%2F%2BC2wZ%2FE5kVW%2FoDq4FGv9ZApVBWK4KW36KWAj9aPBYoWiJea9AFXhxxL3yOH0s8pxsFwcAu0omGIJVaGlncUHJfqZaPMNZ8shPhQbeiQynp7abI2BcD3wHbqIKlkqDtvWQC49GcIOiMM235L4GOqUBzG2OKn80bWf8%2BK%2FQsWa0xTJRe8ELDMadAX8UGph0ke2X0yAxYkwps8zSyKQaAUyVxWYx%2F01QpuuHi1t387N2gNoDzF%2BjfZT%2FK7Q968xp0nkxR3d1PTVBSYeaClkGC8vRhuHCJkLgU51QHl02%2Fc919VKvbzlFpx0qa6AW3D4j%2BrcWsQncWxfsLCmG0He5smH1LcxL1utpGO8GHLFPRbXMO4f4DPJe&X-Amz-Signature=0b5c5eb7b31d866ee1b69d3eff7570996f7ec6ef5068de21f76f153d3f8c93c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6UOMPJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClXHwQ%2FQ%2FGtAGLw19LmZKeG1cO5u6gReOO%2B3bGzQ%2B%2BTQIgE4OGKC1qWhZ7sHTVy9M5wZVW0f0wd7HqoqL%2BfL8ECjoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBZ2n%2BHbYFDHiAaSzSrcAyfN1rmeGomG6GTeYgnqnUnIa3lH0lnnjvYdOrnsA0Mlet%2FohWRu8h3RQtuLUXGQH5A8uSNLblnehwNnKm0ohv45pW9bxxztcAX2%2FmJNbzEhIcnvvNw15L8OftYuhpDgcrpOQoAfpN6fCKdS38lhLF7mxECOzYU3X24PoobV0LV%2FDeh0s5w%2BNvZq2fuSTuZXOZsZ3vGrbnfQ13GNUCGdV2KBhOMMpaL09mHPyTZtcUJRlaYbo9Cq8dCbKPmtdLEnmGmmv90l5cVN4RKtcLmNdftpK%2BHpzQahSKI565G9DvbaEiWgg2xkxB5%2FcCkjaoLtEG2nerFDZFa3WylmmnuDuMIJOTVyRqVkA8IS7Lld%2B1EyOuNp%2BUnBVsqdMyLy4ahY6SsDhR5wmAuF9TCtmCwx02xykMrky9Bv2fvPvAjVm9G3PVutwkuJZzC08HKYx%2FTP%2BdP5bJ%2FTraOnHBtH6gdfrHYrb4bw6Dajj2ER3Hfg6r8S%2F6SHmM%2F%2BC2wZ%2FE5kVW%2FoDq4FGv9ZApVBWK4KW36KWAj9aPBYoWiJea9AFXhxxL3yOH0s8pxsFwcAu0omGIJVaGlncUHJfqZaPMNZ8shPhQbeiQynp7abI2BcD3wHbqIKlkqDtvWQC49GcIOiMM235L4GOqUBzG2OKn80bWf8%2BK%2FQsWa0xTJRe8ELDMadAX8UGph0ke2X0yAxYkwps8zSyKQaAUyVxWYx%2F01QpuuHi1t387N2gNoDzF%2BjfZT%2FK7Q968xp0nkxR3d1PTVBSYeaClkGC8vRhuHCJkLgU51QHl02%2Fc919VKvbzlFpx0qa6AW3D4j%2BrcWsQncWxfsLCmG0He5smH1LcxL1utpGO8GHLFPRbXMO4f4DPJe&X-Amz-Signature=854ac083ba320847da15001020b3ee3012ed88617a041ae0ea9ada6001537b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRCTVXG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDkRm3MZ3i0ZChgCB3RolskTKsvMJJFAn7SeFILlvOfgIgLfr72%2F7EcJPaIsGDcaxhrmmndacbxIkuQcUkIyAlNUAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCyILUni24zi%2FZcHvyrcAyKn6BqRWArxRcjWA%2BDVGxJwfd6oAxUI9uuONsvyLI4QNBtstCuQLntuFGrEPGxK7US1yILsLoEN2PVaeO66re2EbtP%2ForMofVe3P6JVIfuMN%2BpS8r%2FA9ULcvOtPLKCONRN8HuKvkxBWCGG0gY%2FM%2Fc3oXGzim53tp%2BdlbjTcfaTsanUwU0opy18CjbVQxxwd3L8Aw0Nr%2FiQ4WMRX0%2FE%2BFgSh7TmsbEEUmZwnBHcApAl%2BYaMlfkPRCyXVeSOZUy1WnyihJ6XOSeKqsf7FM32JfR4Zyy7ukXEPesKEvx5gtl0L%2BdrdD3drsZzTyOLUoDnF3FOy73w5gixaI%2B60GgfgSOsYYunuogJbkeaiRehNduSrJ2GECS%2B2DCO5C%2B3UvF2Rof%2FLFFmWoJgCUTV1d09NzsP3BIQeeB5pkWZs%2B9JCTWwF9hUgR1FsLKzlJddy3oz0S6Y3lae0qt9%2BZUjF9HXoDORnU3wl%2FWkg0UGyp3k2jOyYuYe7lmkAp%2B2lUL8nmocCy%2FsINzy3%2BvK4BFA0eRsuVFzbmeOk9Voqr6OAOjmvqHG%2BCLNkg8Kv%2FZBXvVxQMNO7ZF8hEEk6Ph2mcBo77PECJVvYLwCrwD96vkvS9p%2B8HbfFGqxqIcSiH65V7J%2B4MJ625L4GOqUBK4Mb7HShyeLIdVC4kb3Hejfzqs6XzNiBhzlH5AZOobXRtZSHDI4OhNAKJsU0%2BJu1ZFEQOXkn0x1BRWERtc0bhySLhSor94WHQsagCFEiSNps4GRQcgaWo7Ik2keWs2XZpdVbR%2F0pCRCbNyPHw1KhOMLngCj%2BQhP6MyAnoDIEcdbuj7abWkOPTE8%2B3ut4B7kAprydBx%2BFUbLS6GwGtfbeJNpnCQDW&X-Amz-Signature=f429435eb6eb3927d57758a53a1cbcbd23684aa842b236d1f567dae1c5ae2ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEZKWOYO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRUw%2FU%2BUxJOEenRwjgK4XHyeQoqIAlGvNkUxP30ubdsAiEAnwUNzz1vHX8fH3kownUdgjX00A3k8VMBVtzIo5DALDYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMPm0o3t4VhYxR2u%2FircAzCu8cewLl3PyApHbcjiw310Wc8ia%2Fa8mRoFzER7w5snKctNUkeFQGfgK%2Fsk02fv5XpDQiR7HTrPNNcMXVjfg%2Fye4qjEfmwFY46s3j80lwICgj%2FHq8NoshvDRssNq%2Fe50nvjim7%2FwuXS7XNTh6MyK9jmxOsZiPpaD7H6byaTXMGGZ%2BAYwpk1LDBbrIM8mqEQVVcXcE2FPg6Zh6QINI28rt%2FjSGPhdesWnd9TOD8BS1Xwd%2BP2Aa8VzsMdLab7T6AREVpvVh%2FXZv0g265Iv6qikCBCd%2BzMrOD11Fg2SwgE6sRGPJ0BVaw5yH%2FM3YXxPS3rf4DVGGFZgwpjL3GL8TqhxcNPaKwhI%2Fbm8MFKspHy5KM0kD36IYiGIe%2Fn0DPi3UVryAg7o037ZzP3lA26v4V9bB6GdWE6ljORRK3H4nayLE5RvUMcuXy%2B74UB8cLfqYRWWAOvVsHs1INi2v73U2d4NGCGZ3M%2FWkVVlaalswjsrn0cS7QUYTbm8tk4ubLsP9e17nFrgRb%2FvMXmF%2FJOmMsYbeGV8B6I0UMX7Pxrb5Tjygx%2B4Q4Vbt6c6GAituS6oLrrD0HOw1CVA6V3iCYQB6jPy3HEGaPam3JecYWHly5ndsH%2BQXggeN6H%2FDIpGY2YMKa35L4GOqUBkKsNlMBzaCqLzzRJNBpFEpxfTy0yT2l9ZyiHeYxN9fPc4Naq29Ayiw%2Ff2fVX0kMvJ498ohRyz4fKaPrcEHimBWW4pB0%2BuHPg%2BgunbmQI13%2BlGwb4GdICzMYNDrBxQGL4vmzjbZLyKUo4dX877TJJNtOr5XGLATeaVh9ER%2FJ8EcCpFuMYrBmAduI9D3t%2BOQOpszKf5u9BCddRK4U4RV0n4x%2B5B96F&X-Amz-Signature=e0a86fd240cbd6d9393c8aa1e03af915f076ddef712d6a7bec83f3123a21b0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6UOMPJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClXHwQ%2FQ%2FGtAGLw19LmZKeG1cO5u6gReOO%2B3bGzQ%2B%2BTQIgE4OGKC1qWhZ7sHTVy9M5wZVW0f0wd7HqoqL%2BfL8ECjoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBZ2n%2BHbYFDHiAaSzSrcAyfN1rmeGomG6GTeYgnqnUnIa3lH0lnnjvYdOrnsA0Mlet%2FohWRu8h3RQtuLUXGQH5A8uSNLblnehwNnKm0ohv45pW9bxxztcAX2%2FmJNbzEhIcnvvNw15L8OftYuhpDgcrpOQoAfpN6fCKdS38lhLF7mxECOzYU3X24PoobV0LV%2FDeh0s5w%2BNvZq2fuSTuZXOZsZ3vGrbnfQ13GNUCGdV2KBhOMMpaL09mHPyTZtcUJRlaYbo9Cq8dCbKPmtdLEnmGmmv90l5cVN4RKtcLmNdftpK%2BHpzQahSKI565G9DvbaEiWgg2xkxB5%2FcCkjaoLtEG2nerFDZFa3WylmmnuDuMIJOTVyRqVkA8IS7Lld%2B1EyOuNp%2BUnBVsqdMyLy4ahY6SsDhR5wmAuF9TCtmCwx02xykMrky9Bv2fvPvAjVm9G3PVutwkuJZzC08HKYx%2FTP%2BdP5bJ%2FTraOnHBtH6gdfrHYrb4bw6Dajj2ER3Hfg6r8S%2F6SHmM%2F%2BC2wZ%2FE5kVW%2FoDq4FGv9ZApVBWK4KW36KWAj9aPBYoWiJea9AFXhxxL3yOH0s8pxsFwcAu0omGIJVaGlncUHJfqZaPMNZ8shPhQbeiQynp7abI2BcD3wHbqIKlkqDtvWQC49GcIOiMM235L4GOqUBzG2OKn80bWf8%2BK%2FQsWa0xTJRe8ELDMadAX8UGph0ke2X0yAxYkwps8zSyKQaAUyVxWYx%2F01QpuuHi1t387N2gNoDzF%2BjfZT%2FK7Q968xp0nkxR3d1PTVBSYeaClkGC8vRhuHCJkLgU51QHl02%2Fc919VKvbzlFpx0qa6AW3D4j%2BrcWsQncWxfsLCmG0He5smH1LcxL1utpGO8GHLFPRbXMO4f4DPJe&X-Amz-Signature=72d4270a26244d64402c7b6037f5ca703099c485ed9630798a8f355575935574&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
