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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBWFEEN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCwomjwW2QUuUoGciGvBxIHvqaLWjbo7wL6xynaFaE%2FnwIgNwyWhsZJh5Vay0q2vAwpIUyuWXS6BAN46ej8s0Ws%2FPsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNsbnTTWDPvKscDzYyrcAwAaWdIA%2FyTLh%2B2runLTnvLXB7wBn2pGHZEG%2Fj7xE%2BT6CFLORlMFHX5EqudGz4JbQa9%2Bvgcd%2FoqPrMBRgblU%2FNfYFJ58ZT%2BdEDuVpzqGvOD%2FnunewJI42%2BrCJq3XguPzUQe%2BnzRvnzhCpP%2BapeYTPmGtJiXSa9yYTJaf%2BAJNniSziTIRlTH1MUpsyu0ALEwdt%2FxKtvYZowCbrQ%2FZK%2BYUmO45fIIYLiWDm4yYfRBxYLl0BIUlbI9VfXlJsypoxG2TyCEbjxDyS%2BwkTVi7J4WwQVAXaGXtbnjiJM6gRoqnFGo3ZmWMAleaGovBHZvdYuFNZt7IEOfLJC%2BxGo9oIrs6LEySsVNXXkANirWgkxiANOe2mbG37Gzy4PKOIvlfy8NZ4H155aBF0dc2StJuQ0Gh444AF%2BOIgABcbv4LrPu%2FDBlxc%2FnMx3movgK%2Fd7ldQCpxjaE6Yy5TdDoEKei1rzSFmoXD2gj0vJj1g%2BPFMBBJwyoyO0L%2F7Py39D0OoPBRcwP0qmI2Z%2FIeGZXzf%2BYfCo5PgVjmZ4vFn2oyAhGsgqLbdoflHqtRkfOweMqMqBLPRnyCKsX0UoIZMawNgVdmLthyGZ7PH%2B8LHuUOCD4xlJpuKLq7LWGaUzkaRqmjZwnxMJuq0cEGOqUBUxACYowOwmnCRaH0RgDT%2Fd8gRZtGDhOINJYo%2FHgmc2vdtPO1GMOhGkMrKSBSaKa7nDPExZx0Kn6%2BmFGsaxb05HTOiiMEEHLe3UoAqX%2B5zJ6V%2FlDK2xVk7JIyYHhhX2Zh0WbeuRjGFKeoxdOi%2BTe6yVux2m73GwpL0oDhOQtWtzBcK3IGPvbAqLrvHqPLloXyYlwBvEOwFGdiM9%2Bma0Kdcv5i%2FMFm&X-Amz-Signature=b285af424680cbbb4899fd76dfaa007f1b398780bb8910fc37b57f4dddf345a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBWFEEN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCwomjwW2QUuUoGciGvBxIHvqaLWjbo7wL6xynaFaE%2FnwIgNwyWhsZJh5Vay0q2vAwpIUyuWXS6BAN46ej8s0Ws%2FPsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNsbnTTWDPvKscDzYyrcAwAaWdIA%2FyTLh%2B2runLTnvLXB7wBn2pGHZEG%2Fj7xE%2BT6CFLORlMFHX5EqudGz4JbQa9%2Bvgcd%2FoqPrMBRgblU%2FNfYFJ58ZT%2BdEDuVpzqGvOD%2FnunewJI42%2BrCJq3XguPzUQe%2BnzRvnzhCpP%2BapeYTPmGtJiXSa9yYTJaf%2BAJNniSziTIRlTH1MUpsyu0ALEwdt%2FxKtvYZowCbrQ%2FZK%2BYUmO45fIIYLiWDm4yYfRBxYLl0BIUlbI9VfXlJsypoxG2TyCEbjxDyS%2BwkTVi7J4WwQVAXaGXtbnjiJM6gRoqnFGo3ZmWMAleaGovBHZvdYuFNZt7IEOfLJC%2BxGo9oIrs6LEySsVNXXkANirWgkxiANOe2mbG37Gzy4PKOIvlfy8NZ4H155aBF0dc2StJuQ0Gh444AF%2BOIgABcbv4LrPu%2FDBlxc%2FnMx3movgK%2Fd7ldQCpxjaE6Yy5TdDoEKei1rzSFmoXD2gj0vJj1g%2BPFMBBJwyoyO0L%2F7Py39D0OoPBRcwP0qmI2Z%2FIeGZXzf%2BYfCo5PgVjmZ4vFn2oyAhGsgqLbdoflHqtRkfOweMqMqBLPRnyCKsX0UoIZMawNgVdmLthyGZ7PH%2B8LHuUOCD4xlJpuKLq7LWGaUzkaRqmjZwnxMJuq0cEGOqUBUxACYowOwmnCRaH0RgDT%2Fd8gRZtGDhOINJYo%2FHgmc2vdtPO1GMOhGkMrKSBSaKa7nDPExZx0Kn6%2BmFGsaxb05HTOiiMEEHLe3UoAqX%2B5zJ6V%2FlDK2xVk7JIyYHhhX2Zh0WbeuRjGFKeoxdOi%2BTe6yVux2m73GwpL0oDhOQtWtzBcK3IGPvbAqLrvHqPLloXyYlwBvEOwFGdiM9%2Bma0Kdcv5i%2FMFm&X-Amz-Signature=4f341cecc2f7d6da284609311795f1f1c2554047b27dc5b4f4236bc26dddbe53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBWFEEN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCwomjwW2QUuUoGciGvBxIHvqaLWjbo7wL6xynaFaE%2FnwIgNwyWhsZJh5Vay0q2vAwpIUyuWXS6BAN46ej8s0Ws%2FPsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNsbnTTWDPvKscDzYyrcAwAaWdIA%2FyTLh%2B2runLTnvLXB7wBn2pGHZEG%2Fj7xE%2BT6CFLORlMFHX5EqudGz4JbQa9%2Bvgcd%2FoqPrMBRgblU%2FNfYFJ58ZT%2BdEDuVpzqGvOD%2FnunewJI42%2BrCJq3XguPzUQe%2BnzRvnzhCpP%2BapeYTPmGtJiXSa9yYTJaf%2BAJNniSziTIRlTH1MUpsyu0ALEwdt%2FxKtvYZowCbrQ%2FZK%2BYUmO45fIIYLiWDm4yYfRBxYLl0BIUlbI9VfXlJsypoxG2TyCEbjxDyS%2BwkTVi7J4WwQVAXaGXtbnjiJM6gRoqnFGo3ZmWMAleaGovBHZvdYuFNZt7IEOfLJC%2BxGo9oIrs6LEySsVNXXkANirWgkxiANOe2mbG37Gzy4PKOIvlfy8NZ4H155aBF0dc2StJuQ0Gh444AF%2BOIgABcbv4LrPu%2FDBlxc%2FnMx3movgK%2Fd7ldQCpxjaE6Yy5TdDoEKei1rzSFmoXD2gj0vJj1g%2BPFMBBJwyoyO0L%2F7Py39D0OoPBRcwP0qmI2Z%2FIeGZXzf%2BYfCo5PgVjmZ4vFn2oyAhGsgqLbdoflHqtRkfOweMqMqBLPRnyCKsX0UoIZMawNgVdmLthyGZ7PH%2B8LHuUOCD4xlJpuKLq7LWGaUzkaRqmjZwnxMJuq0cEGOqUBUxACYowOwmnCRaH0RgDT%2Fd8gRZtGDhOINJYo%2FHgmc2vdtPO1GMOhGkMrKSBSaKa7nDPExZx0Kn6%2BmFGsaxb05HTOiiMEEHLe3UoAqX%2B5zJ6V%2FlDK2xVk7JIyYHhhX2Zh0WbeuRjGFKeoxdOi%2BTe6yVux2m73GwpL0oDhOQtWtzBcK3IGPvbAqLrvHqPLloXyYlwBvEOwFGdiM9%2Bma0Kdcv5i%2FMFm&X-Amz-Signature=9e5415d4e9a37776c80ccc7ea2314492658dd26fd88e538eb7038716573cb839&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTC5APPU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC7u0T9iUd4lMgRP1BXOYn%2FNwwyyxdUYjk4eXJIvGydEwIgVyMbpDCZSjAE4l9%2BKvLJcmiLjTjP9gR55EHmWLQoscMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB2haw7J9RX%2Fh08NxircAzJKjZsEQ4Yuqo89Tf3EAdBkxAr64D9eVk2QsHbv6l3iejVbHqoPb9qpCB0P5xUdbyUDEdXsJFrJc24pQAEJc2h%2BypT9QHYTBD0IQcbHpYSF9NqqA1Mh639HXx9NDs5%2BL%2BFlELutmzNgpvvCjld572Q6v6CfvjDNxM53Hvkpl3TgEwI2BEdivfPI%2BaEW7URkn9xHQHdyXC7diG3vDgJ1MdXQi2KNnbLwBOwSw8Ric5SwX2CGUWz7ZHGw2l9dZTVDiawLqaH1qZTPhim%2BkVK30ET%2Fu5RjcVMs%2F5g5iwwU9klUFz0R0LjLqHohXitWQ6vEENgZvf%2BvWlYxECBVWpok4REMYy%2BOhA%2FIbOQ9En1grBpy7uSt7pl4UHWV6T4gv7STmiDiJXGHajFn4Z3jSuPSnZh02Ysbf89Gnb1CdGtyUfSqEx7BPH8NYpgWW0kKbtffTodkLocTTYRY%2BqFvCmt49q5V7z6k1HA4jKJXkWKlJyNH09DnZsnt0KWJ3p%2FJDcc27FSDPCaumQM97f6IktDIwJ3Tjur7jaFZoK2MqsKM8Py7TxunJB0g%2BwePFcpD3iIXwtIOqHaDj6LW5E7aPrBxZxJfrZVL4aa3DwjNSZq1fgY1N2NI1SB8xWvGKilrMI2q0cEGOqUBv6cAUgdTicV8Yzn%2BaerUCH7uDPhMHAzMq2z0O8oZr0cD8GoJlFFC08UR03TnmkRgw5T7JUy3WeIoKneyX5ukronAyrSts%2BN4lSUSzABTkxPZnvZOaSoU%2FZYL5gL%2BYzVyCs0YlRp5WxRY4EvnaurR3o6Hm19DCBMQDNHMaNS4uNSf2gSMiKFgzuXr985%2FHPHVY8P1plAk%2B7sL3ZmexwGwhYoo1xSC&X-Amz-Signature=103c8ce50698fd6ce16bd162074a29b17a59210010c2f932522751396a646454&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7HGKWF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCTjNg9faT4RP3z6I4I5BI9xgmbvB4wGwPTF6zlw%2FOD%2BQIgU%2BGdpDF8eKas2qpM9WbMLUuU%2FK4HrvRUcA4m0MDqfSwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMl2eT6c4%2FJZ7zj3fCrcAwEo2LxoJtWjODD6ugtKYXHB3sbWs2eGpQRH1%2F0bVzeJixtLW90kYLPUnUuG6VP90C2ZlnrrwBNb3yfz6PWKeLrPst3eJbYITPmoQPSRc9HE4neMkAZwLwqaaEJKfT7IAQcvzH1vs3%2FY8TmH5mvSwXGiYqVptigIr9HsuB1fD7%2F%2Fo8oGonbpJUIsiKjt1xZF%2FI%2BlBrXYMNHkKLD6ErD4qlYeAhYh55kE%2BlaN6W8BqkHGJ%2FkPCgcFt4cG8AvNTuOgLa2wTPljULJVMbfxc0jRmIEdoAcuIPoLkl0c9XLYNpD0LLRz50KgS7KsSljs0Zz9PXp18fzgRcrZaUKl4mVGnKRVMb2da7rBGx1tJKWBv%2FQwXKJfcOh4v877vWtr%2F8La2g7T4UqxqPcAPEkmpHwo1p4YoNOkvZXypEjubS6hI6qCISGk6sEWB0X6IzNd8ukiYqxjs318%2BCiLlyACLnrrONYg2Q6mIm1RmdhTxAM02lrqoH2bU2D98W%2BISQJV59FzIt2%2BKedDp9vWY0iKvPH%2FDSKIZO7umI3HhSMYT0IQY1WOnocwfnrkhPY6qXkEMqxaIZ2nwCN9PfI5cnQ9%2Bf4RZVkg3Ail57rcivwYu4%2FxrF8m%2BE%2FhIE2h6XrDvj4xMKWq0cEGOqUBwN8BniZHiwFN0aqrj%2FL471Cesp7SHpxK%2F1Ewr2t8yj609IMkuQ7RoJ3wTWVwJzGcaazJ8vJGKQW3A9%2ByASL%2F%2Bx4kL2jwpPEfXjJWkUDMnjcmwzDuRtF5o%2BqgJz5zQNySsXwcbxG980Yr0tlnYydaKi9cdNEv4zcZJN5qd6U%2BhJRijjnxl2sSJBA51tPKiKxQFbTgyCWmVVMpKYeIm9tPqMBvW1fb&X-Amz-Signature=730353e7c7c9e9ec46a9cfbdf5ffd642dc9375e2ca7f4829c85fc3adbc54381d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBWFEEN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCwomjwW2QUuUoGciGvBxIHvqaLWjbo7wL6xynaFaE%2FnwIgNwyWhsZJh5Vay0q2vAwpIUyuWXS6BAN46ej8s0Ws%2FPsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNsbnTTWDPvKscDzYyrcAwAaWdIA%2FyTLh%2B2runLTnvLXB7wBn2pGHZEG%2Fj7xE%2BT6CFLORlMFHX5EqudGz4JbQa9%2Bvgcd%2FoqPrMBRgblU%2FNfYFJ58ZT%2BdEDuVpzqGvOD%2FnunewJI42%2BrCJq3XguPzUQe%2BnzRvnzhCpP%2BapeYTPmGtJiXSa9yYTJaf%2BAJNniSziTIRlTH1MUpsyu0ALEwdt%2FxKtvYZowCbrQ%2FZK%2BYUmO45fIIYLiWDm4yYfRBxYLl0BIUlbI9VfXlJsypoxG2TyCEbjxDyS%2BwkTVi7J4WwQVAXaGXtbnjiJM6gRoqnFGo3ZmWMAleaGovBHZvdYuFNZt7IEOfLJC%2BxGo9oIrs6LEySsVNXXkANirWgkxiANOe2mbG37Gzy4PKOIvlfy8NZ4H155aBF0dc2StJuQ0Gh444AF%2BOIgABcbv4LrPu%2FDBlxc%2FnMx3movgK%2Fd7ldQCpxjaE6Yy5TdDoEKei1rzSFmoXD2gj0vJj1g%2BPFMBBJwyoyO0L%2F7Py39D0OoPBRcwP0qmI2Z%2FIeGZXzf%2BYfCo5PgVjmZ4vFn2oyAhGsgqLbdoflHqtRkfOweMqMqBLPRnyCKsX0UoIZMawNgVdmLthyGZ7PH%2B8LHuUOCD4xlJpuKLq7LWGaUzkaRqmjZwnxMJuq0cEGOqUBUxACYowOwmnCRaH0RgDT%2Fd8gRZtGDhOINJYo%2FHgmc2vdtPO1GMOhGkMrKSBSaKa7nDPExZx0Kn6%2BmFGsaxb05HTOiiMEEHLe3UoAqX%2B5zJ6V%2FlDK2xVk7JIyYHhhX2Zh0WbeuRjGFKeoxdOi%2BTe6yVux2m73GwpL0oDhOQtWtzBcK3IGPvbAqLrvHqPLloXyYlwBvEOwFGdiM9%2Bma0Kdcv5i%2FMFm&X-Amz-Signature=6c0b388405f933ec5b00727945d34f09dea826fb17ab386de837ea0d1e1f7cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
