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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZDDLU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDUiKZ4eKjRC5M24yzeLpe%2BE34kRvabeGk%2Fgyn%2FpFBvfwIgAwxgmB9rVPc5VQcIR2Ssr9u3w9DsNJnHuNYRTcGFfRsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUG8hZG8GcOUFUs8ircA53FI4SLGGPjKDFgGHMgAw95EeA93vgeJoLBuJcXjdUwiHeSXu9eabo2Dfj8BFA58vceZLPglftjyp9WO42aJUGlbki0ac9jA2k0%2FwFdrnbvjdcC4FEzy0ecZPQuglVUfoh%2Fz4psxBY1WtPkHvrwm8PX0vk1Hk1UZlIjrQfw%2FYTVkkTQqstkNZi9UQx4WUAN1gjRhedDEtl1RT%2FFYY23i%2B%2FducE7Eim6Ckaj8TXmsD54Gw8H9q4HUBJT7kNVR9w8QkK9NbfIUQ7fxENYaOT5ht4dCFPJ7E%2FVvX9MNdMRUhfmqQF0bSlljETsrPV5XLU7OVF0Yoox0vC5Nyy7Oc43pb2Plf5iYj0nrLTaHZpWsx%2FgUFAintYaEkSCpZhTBsuASwUhb%2Bk997WPLYsNB2y7f3gaLUI%2BzOTKVY1ivlejZKwNCm9yiIzPmkpuTf6Cft8kBRzRexLNJAxQV4Z52MSN%2Fyif9WAztkKY36v07SpPfl6JK%2FlqaIP892FsGtAaUBud6zU3mY60VPSGhbhFYDDzQ5IosOipJfY8qDa8yixQ7M7B0%2BpZw8oxNj07vNHqbLqsSN9RML2p%2B2vHLlVDvfkp%2BLuJBaB3k4sKDKJH81lO1OnMt0d%2BR94NLX5%2B4h6BMJv19cEGOqUBdY3na08%2F5ySiac0Dp0ke70l8xF2L1S1Z1iAxlM9tKWNscv5QujTVZSmoLmeaj%2BmqpzCopFREuF%2Fnzr4CDS8c67rKOjX5hSxtq8Zk5unGxRUwoavbtJrlzAfahD0Dpfoh3uT%2F5B6O1hYPucu0BVtF5ZN7MhiplxFrLZi8Qth1t9pq41OZbP%2F9ZdDD%2Bzkq7T2nSFyKA2PaRON%2FH5tjIFZdI3Zzid03&X-Amz-Signature=d21979a77701194315db2621bf14dce403e077e995bac6135b48226809b1103d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZDDLU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDUiKZ4eKjRC5M24yzeLpe%2BE34kRvabeGk%2Fgyn%2FpFBvfwIgAwxgmB9rVPc5VQcIR2Ssr9u3w9DsNJnHuNYRTcGFfRsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUG8hZG8GcOUFUs8ircA53FI4SLGGPjKDFgGHMgAw95EeA93vgeJoLBuJcXjdUwiHeSXu9eabo2Dfj8BFA58vceZLPglftjyp9WO42aJUGlbki0ac9jA2k0%2FwFdrnbvjdcC4FEzy0ecZPQuglVUfoh%2Fz4psxBY1WtPkHvrwm8PX0vk1Hk1UZlIjrQfw%2FYTVkkTQqstkNZi9UQx4WUAN1gjRhedDEtl1RT%2FFYY23i%2B%2FducE7Eim6Ckaj8TXmsD54Gw8H9q4HUBJT7kNVR9w8QkK9NbfIUQ7fxENYaOT5ht4dCFPJ7E%2FVvX9MNdMRUhfmqQF0bSlljETsrPV5XLU7OVF0Yoox0vC5Nyy7Oc43pb2Plf5iYj0nrLTaHZpWsx%2FgUFAintYaEkSCpZhTBsuASwUhb%2Bk997WPLYsNB2y7f3gaLUI%2BzOTKVY1ivlejZKwNCm9yiIzPmkpuTf6Cft8kBRzRexLNJAxQV4Z52MSN%2Fyif9WAztkKY36v07SpPfl6JK%2FlqaIP892FsGtAaUBud6zU3mY60VPSGhbhFYDDzQ5IosOipJfY8qDa8yixQ7M7B0%2BpZw8oxNj07vNHqbLqsSN9RML2p%2B2vHLlVDvfkp%2BLuJBaB3k4sKDKJH81lO1OnMt0d%2BR94NLX5%2B4h6BMJv19cEGOqUBdY3na08%2F5ySiac0Dp0ke70l8xF2L1S1Z1iAxlM9tKWNscv5QujTVZSmoLmeaj%2BmqpzCopFREuF%2Fnzr4CDS8c67rKOjX5hSxtq8Zk5unGxRUwoavbtJrlzAfahD0Dpfoh3uT%2F5B6O1hYPucu0BVtF5ZN7MhiplxFrLZi8Qth1t9pq41OZbP%2F9ZdDD%2Bzkq7T2nSFyKA2PaRON%2FH5tjIFZdI3Zzid03&X-Amz-Signature=09ad22351f9f550bdb468e713845a0decac80ccd514729fe49a61046cd76d36f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZDDLU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDUiKZ4eKjRC5M24yzeLpe%2BE34kRvabeGk%2Fgyn%2FpFBvfwIgAwxgmB9rVPc5VQcIR2Ssr9u3w9DsNJnHuNYRTcGFfRsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUG8hZG8GcOUFUs8ircA53FI4SLGGPjKDFgGHMgAw95EeA93vgeJoLBuJcXjdUwiHeSXu9eabo2Dfj8BFA58vceZLPglftjyp9WO42aJUGlbki0ac9jA2k0%2FwFdrnbvjdcC4FEzy0ecZPQuglVUfoh%2Fz4psxBY1WtPkHvrwm8PX0vk1Hk1UZlIjrQfw%2FYTVkkTQqstkNZi9UQx4WUAN1gjRhedDEtl1RT%2FFYY23i%2B%2FducE7Eim6Ckaj8TXmsD54Gw8H9q4HUBJT7kNVR9w8QkK9NbfIUQ7fxENYaOT5ht4dCFPJ7E%2FVvX9MNdMRUhfmqQF0bSlljETsrPV5XLU7OVF0Yoox0vC5Nyy7Oc43pb2Plf5iYj0nrLTaHZpWsx%2FgUFAintYaEkSCpZhTBsuASwUhb%2Bk997WPLYsNB2y7f3gaLUI%2BzOTKVY1ivlejZKwNCm9yiIzPmkpuTf6Cft8kBRzRexLNJAxQV4Z52MSN%2Fyif9WAztkKY36v07SpPfl6JK%2FlqaIP892FsGtAaUBud6zU3mY60VPSGhbhFYDDzQ5IosOipJfY8qDa8yixQ7M7B0%2BpZw8oxNj07vNHqbLqsSN9RML2p%2B2vHLlVDvfkp%2BLuJBaB3k4sKDKJH81lO1OnMt0d%2BR94NLX5%2B4h6BMJv19cEGOqUBdY3na08%2F5ySiac0Dp0ke70l8xF2L1S1Z1iAxlM9tKWNscv5QujTVZSmoLmeaj%2BmqpzCopFREuF%2Fnzr4CDS8c67rKOjX5hSxtq8Zk5unGxRUwoavbtJrlzAfahD0Dpfoh3uT%2F5B6O1hYPucu0BVtF5ZN7MhiplxFrLZi8Qth1t9pq41OZbP%2F9ZdDD%2Bzkq7T2nSFyKA2PaRON%2FH5tjIFZdI3Zzid03&X-Amz-Signature=0b1d322a1fdf10017af793fdc367a01b8a5fbf5cb11ff218d739e9476ac03eac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZBBYRT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDVsD8dgVWi%2Bu%2Fx0IY4VirZ%2FMEVskXQzW4%2FeWaUlU%2B71AiB2T9SFa81X4V7oIyqNb%2BUFXzgdnMavvwE5skfMy%2F89oSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZxDxKnmUd4WCthVKtwDS26rs4NBXp9SZaZpQkwvKh4i5EjCEt1iyLxRRy0f4Tz0T%2B%2B9AuVmSreig8Nrr%2FFHCmTUyLI0%2FqasM2eBX0UweuWMMQF7WwlQRJCnHmKe2yGd1qq5Rfwip4hTYIaFSHO6uZY31sBao98rjQw9ICMH%2FFprN%2BPZTy7ucPQtEI85Umzx27fixesbKMpo4Qh%2FIwTuIIgiAk9TqR3rQnDNfoNVZHXkAQb3XJQrSBMXnbdHHjU3stw91M77ta69XjpHbWMny6ilwyampzOtrCiuFyAGkiBa9ivcfXnPqwy9p7a06shpt0j4m3pNWhIHwXe%2BlLjqO1eo8sK2E9egzssdfzmF9cbJCY%2BOKXLc4IRjHUqHDxVsfb%2Fo%2BXIqMGyB4L4pq0t2CJ2muRJaQfEJJdKY5TiQ1jSwy%2FpNJaRq%2Bo5m2QirPAbRzgYYmJtZ9A%2FzpPfQiaRPBQYUfMDKicW9%2BqVak1pgtQOKhPT%2FX1i8y80Fafzrv2z0NK33ZATVj0ngtDeCwLCbnGJ8diwf1IjSR8Z%2B5O6tQqRCIbMw6VT1l89EFkeK2xsvmGXda9emTlK5uZsfsNkL7v3cgf5rPETMayo0GB%2BrWycE9za6TKjK7mriiaB1PWrVtpFTTnM3mwCBzngwpfX1wQY6pgHkm9yNLOeknOfRcUGT2RnmF2ACls4j2HVtsMzpGVij%2Fh58XLSaOs8VOlZtn9uFkSyaxSZ1Pi01rxgvKxUI%2FUNDSbtrSp3nd4brN0Eq1MeJ7Q%2FaVAeMKaS3ClhezrLTU1tlWmwuNBmXli1ot6oETPsA7rnWfHUrtjY%2B7zQWe43NxaNq2xGrDTaUbVTHG41c2Hqxv2iROzRNUuf6dUx2X2cB97yAIzmb&X-Amz-Signature=2a988f5df31452ac854a6903fbbce367863520a81059db39593b3dbaa1f628c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOQI2MT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBD7KIORqoOrEHwqfUvzeFu24ayl3xXvNwVpgKmafBmmAiEAnsK9or2LT8wo1JK5CHofVxWnk8QWdO9NiqaxSJG94zsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXLrySjxyaKYtjaiSrcA0xyDXrjX0uBV83xePTo%2BJDFDpqlsMt9acmajGlM28C19HPqzwczNntck6empql7J4zVHOWYkUdi5fhr4OVNx9wQ0Bhye7cQsN%2FYwNiTocO7%2Fjj%2FYpai8B5S6IAUxxZI%2FDePa5m0LBFWkFKlnuT29tH6wyUaANiNYYEZoiWxH219MYshEFLz4fa1DObCdXqnj49SPxBTE%2BSDMAlIXe29THPaSxcgiQgrDcqKft%2BjAYJMSpkvV6gcwGq4R%2Bm1iBNpJY0Zl4J8RnCty%2F2ZCXfp8nDC4qUO%2BLqY8zZaePkMsYFn06CAJ1OATYgxufmVDZD%2BhINM8ldldvh0jhlgaGYw6oBZsC6dkzl%2F9t1QYq2T4mjmhSCYNkx6HXK7XL2T13pUiBtB0hVaCxHQM%2FGK0arqc7XYWW8RtPL%2BACa0%2Fft%2F4Sa2eDYyP1CJtJHS1%2BAe1stVe4CqBDJHILo1soFHFZMqTs%2BfbenMU1%2BbdsMHTUKSFqiwwBLSlTeY0EgEbO7P9A5gtlg3Fl6KSCVS%2FN8LIKUH4SYRlyq2gEJ7e%2BbWlejPpvtx50eSfhNHrxVogJIzv0OJHxLJ9wNHE2HGqbclZzxl46ZOy5LNbYrSfK8c8vB8tnucVEeVQwdrR3138RUNMKX19cEGOqUBUS0ceG5Fobr9EogQTvGsDI32KizJeKJQ66h7arH3pWiM82g96TsnKkGSix0EzPj6qW1O7Di3XAZ1y707Aq%2Fqw8W3p9xXIl%2FIHXCMMaoTkwgbQ3wgH2TvHIKasG73w8B3WlkpWB0WutlhoJai3T84pCaDNw37CSOzKuJtTOUY7PD75dUbQtSYiyN1WLESQ%2BcC529abZq2JKxJEsxt48d2qK7lBsbl&X-Amz-Signature=619645ed7dfcdc5d26649bb52581570aa0c05ea2c4d0d944b63f94bf41e6c3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLZDDLU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDUiKZ4eKjRC5M24yzeLpe%2BE34kRvabeGk%2Fgyn%2FpFBvfwIgAwxgmB9rVPc5VQcIR2Ssr9u3w9DsNJnHuNYRTcGFfRsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUG8hZG8GcOUFUs8ircA53FI4SLGGPjKDFgGHMgAw95EeA93vgeJoLBuJcXjdUwiHeSXu9eabo2Dfj8BFA58vceZLPglftjyp9WO42aJUGlbki0ac9jA2k0%2FwFdrnbvjdcC4FEzy0ecZPQuglVUfoh%2Fz4psxBY1WtPkHvrwm8PX0vk1Hk1UZlIjrQfw%2FYTVkkTQqstkNZi9UQx4WUAN1gjRhedDEtl1RT%2FFYY23i%2B%2FducE7Eim6Ckaj8TXmsD54Gw8H9q4HUBJT7kNVR9w8QkK9NbfIUQ7fxENYaOT5ht4dCFPJ7E%2FVvX9MNdMRUhfmqQF0bSlljETsrPV5XLU7OVF0Yoox0vC5Nyy7Oc43pb2Plf5iYj0nrLTaHZpWsx%2FgUFAintYaEkSCpZhTBsuASwUhb%2Bk997WPLYsNB2y7f3gaLUI%2BzOTKVY1ivlejZKwNCm9yiIzPmkpuTf6Cft8kBRzRexLNJAxQV4Z52MSN%2Fyif9WAztkKY36v07SpPfl6JK%2FlqaIP892FsGtAaUBud6zU3mY60VPSGhbhFYDDzQ5IosOipJfY8qDa8yixQ7M7B0%2BpZw8oxNj07vNHqbLqsSN9RML2p%2B2vHLlVDvfkp%2BLuJBaB3k4sKDKJH81lO1OnMt0d%2BR94NLX5%2B4h6BMJv19cEGOqUBdY3na08%2F5ySiac0Dp0ke70l8xF2L1S1Z1iAxlM9tKWNscv5QujTVZSmoLmeaj%2BmqpzCopFREuF%2Fnzr4CDS8c67rKOjX5hSxtq8Zk5unGxRUwoavbtJrlzAfahD0Dpfoh3uT%2F5B6O1hYPucu0BVtF5ZN7MhiplxFrLZi8Qth1t9pq41OZbP%2F9ZdDD%2Bzkq7T2nSFyKA2PaRON%2FH5tjIFZdI3Zzid03&X-Amz-Signature=bd1319c672be93080c7e29cfa3329b819d05d439803fc81b6d672a5a7320eab4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
