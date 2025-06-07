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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQWJEAE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6PbIjY88a1B0XQw3rSXmfOeCLrpTg7g5oQMU2Q72lQAiEA%2FZVBZRmIAdq2jrttzVoT3AYD1l6B30cVdlH9pNpsRu4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEte0aJdSXiINfzKGCrcA9qFyAvdNglu4kDyO7YcquSzHJaWxjYamqpoMh6EmfzCBo1hR8dfTbM26zkaAjtxs4i1vUJkdZ2SutR%2FkUBQ%2FtPOVltICYU5d%2FcbbekKjAApq3Km4%2BVAFAyJzJT14iPwa5yG55czU1kXgetUQtgcoMU8vPigBCu3h9sx0NQ3HyxpHC0JBWavpY%2BPJ6LYmWNxrY7IN5LlXWdnU5SlEdHvy5s3wr4UwEeYftDvo57mOIiqXAe%2BHpvbhY%2FxrB33%2BNX3mZiGHm4inD5neVzIydqvXacXm7cuWisYmmyrjF%2BAt0PIi1%2BRX9hvtn5bV3qNGWkgV%2BFALbsqVseDVSnpTaUNq1oP3QqLDFa7F8P%2Fz8gZZiUwE4VWOkEvzzGQxD8kjtoX5gL9fOO62S7sAx3UJzoqFbSvOweYBnFedIt5Ja4mp15tDNHNj08%2FzRP49Xc6TMio7a2Z0ByqLgyb%2BLIab0U81FzTE8GrcszNYr2CNLHPOfu7CcMJa4rd1tbLOhyVN8yrN%2BcxYU0IoSmQXDiv2addJqAVTdPS8tbtLMFI1UFZ5R2050FHNXH8yosYiGzzG50iV%2BiN7qPKR%2B9G0a5u9bs1%2BSLWlci1dL3kMizhNzpXQOwidHszn6ISz4zbZsXTMJjTksIGOqUB%2Fr8mbUlZiqVxfNiREbonPEu67YrW%2BZhFE5xeNv9LDlxgu1dOv6ObYtnQDp57iO7wnnecxOKxj3kV2Y3qwMw5qHSMtjFroPGEPJL7SQmfKKtuhnZAfDhSJJky03X8J4XfAAzH4zN8JLoVpNDbKsFprdfGSaGoJS8QSw%2BS4ICodnlN64NyyYb9OQB5NJjcUsF7MKuIvyp8QYbQ3%2FBwrFZB73jBtKxO&X-Amz-Signature=481b68b304a2cc1cf5b6f993d2b9077b43acd01a31de5fa7c463b0444b17599e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQWJEAE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6PbIjY88a1B0XQw3rSXmfOeCLrpTg7g5oQMU2Q72lQAiEA%2FZVBZRmIAdq2jrttzVoT3AYD1l6B30cVdlH9pNpsRu4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEte0aJdSXiINfzKGCrcA9qFyAvdNglu4kDyO7YcquSzHJaWxjYamqpoMh6EmfzCBo1hR8dfTbM26zkaAjtxs4i1vUJkdZ2SutR%2FkUBQ%2FtPOVltICYU5d%2FcbbekKjAApq3Km4%2BVAFAyJzJT14iPwa5yG55czU1kXgetUQtgcoMU8vPigBCu3h9sx0NQ3HyxpHC0JBWavpY%2BPJ6LYmWNxrY7IN5LlXWdnU5SlEdHvy5s3wr4UwEeYftDvo57mOIiqXAe%2BHpvbhY%2FxrB33%2BNX3mZiGHm4inD5neVzIydqvXacXm7cuWisYmmyrjF%2BAt0PIi1%2BRX9hvtn5bV3qNGWkgV%2BFALbsqVseDVSnpTaUNq1oP3QqLDFa7F8P%2Fz8gZZiUwE4VWOkEvzzGQxD8kjtoX5gL9fOO62S7sAx3UJzoqFbSvOweYBnFedIt5Ja4mp15tDNHNj08%2FzRP49Xc6TMio7a2Z0ByqLgyb%2BLIab0U81FzTE8GrcszNYr2CNLHPOfu7CcMJa4rd1tbLOhyVN8yrN%2BcxYU0IoSmQXDiv2addJqAVTdPS8tbtLMFI1UFZ5R2050FHNXH8yosYiGzzG50iV%2BiN7qPKR%2B9G0a5u9bs1%2BSLWlci1dL3kMizhNzpXQOwidHszn6ISz4zbZsXTMJjTksIGOqUB%2Fr8mbUlZiqVxfNiREbonPEu67YrW%2BZhFE5xeNv9LDlxgu1dOv6ObYtnQDp57iO7wnnecxOKxj3kV2Y3qwMw5qHSMtjFroPGEPJL7SQmfKKtuhnZAfDhSJJky03X8J4XfAAzH4zN8JLoVpNDbKsFprdfGSaGoJS8QSw%2BS4ICodnlN64NyyYb9OQB5NJjcUsF7MKuIvyp8QYbQ3%2FBwrFZB73jBtKxO&X-Amz-Signature=1bb7e0a894d9c464ce7fddced080f6768cbb31c208c3defccda8a3922887f8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQWJEAE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6PbIjY88a1B0XQw3rSXmfOeCLrpTg7g5oQMU2Q72lQAiEA%2FZVBZRmIAdq2jrttzVoT3AYD1l6B30cVdlH9pNpsRu4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEte0aJdSXiINfzKGCrcA9qFyAvdNglu4kDyO7YcquSzHJaWxjYamqpoMh6EmfzCBo1hR8dfTbM26zkaAjtxs4i1vUJkdZ2SutR%2FkUBQ%2FtPOVltICYU5d%2FcbbekKjAApq3Km4%2BVAFAyJzJT14iPwa5yG55czU1kXgetUQtgcoMU8vPigBCu3h9sx0NQ3HyxpHC0JBWavpY%2BPJ6LYmWNxrY7IN5LlXWdnU5SlEdHvy5s3wr4UwEeYftDvo57mOIiqXAe%2BHpvbhY%2FxrB33%2BNX3mZiGHm4inD5neVzIydqvXacXm7cuWisYmmyrjF%2BAt0PIi1%2BRX9hvtn5bV3qNGWkgV%2BFALbsqVseDVSnpTaUNq1oP3QqLDFa7F8P%2Fz8gZZiUwE4VWOkEvzzGQxD8kjtoX5gL9fOO62S7sAx3UJzoqFbSvOweYBnFedIt5Ja4mp15tDNHNj08%2FzRP49Xc6TMio7a2Z0ByqLgyb%2BLIab0U81FzTE8GrcszNYr2CNLHPOfu7CcMJa4rd1tbLOhyVN8yrN%2BcxYU0IoSmQXDiv2addJqAVTdPS8tbtLMFI1UFZ5R2050FHNXH8yosYiGzzG50iV%2BiN7qPKR%2B9G0a5u9bs1%2BSLWlci1dL3kMizhNzpXQOwidHszn6ISz4zbZsXTMJjTksIGOqUB%2Fr8mbUlZiqVxfNiREbonPEu67YrW%2BZhFE5xeNv9LDlxgu1dOv6ObYtnQDp57iO7wnnecxOKxj3kV2Y3qwMw5qHSMtjFroPGEPJL7SQmfKKtuhnZAfDhSJJky03X8J4XfAAzH4zN8JLoVpNDbKsFprdfGSaGoJS8QSw%2BS4ICodnlN64NyyYb9OQB5NJjcUsF7MKuIvyp8QYbQ3%2FBwrFZB73jBtKxO&X-Amz-Signature=5e28efbe98d8a7a96bd1647e8e395a0932b4a8ea4f064d82c4709677d2bdca35&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBK3TUA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOghcHg2umMLavuzjF4HBuQj0WkLaYAAaDmGT4GQM4vAiEA2%2B%2BgvUe1%2FNd0QEMbG2sItR6MZAEtkvRC0jCAyfPh5AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAPE9aU7bMJo7WIKKCrcA3uT7UhYRSJH6ELXQiFHAdTyx0igvY7sLCzE6VcFk6%2BxRM1XeENjBfUPZm7yEOUWmVKt0KkL0Dm8quZ6s3c5EzUyB2wXG4lhgmQAxbIxeM658JHn3tZUyKcB0l1p0%2FOhR%2FzHlxB6xJ1cEtinrfMmUlpU5EUf%2FZEWs31zog5upyI69%2F6c5Dxr1P%2BKQ%2F%2FCblHrjNu960PJ8v7lSF%2BkGCb6sztTcaCuY2xw2XVBxQv2oYlzEIPF8mIx%2Fp3F1yvUDOZFPCEZ1JuUcXcl9PtClZ5KlRaXD3R9ZhWqgZLSWX4MG1BqigPg3f1DU1bCV2b9zgUY93DdLQnQqfwlsi7iC7NynRG60zkiEjLYu8zw3%2BvC8KnaVS0HzZg1E9ypgB7JnAsu5El3cbjpsry81kolcleLQSPrIeaWYkjmlTJDCnSnSIeCWjHz25IeuV2pnqNzPZKY2h0PDVviDjqPa4F3OuTYR6G8beRzZHZfWLLAqiPi4q1uwPX1yV%2BhFnQHmDGaFG%2FWZCa7%2Bm6WCct5rMakRifKqQmho0ma83hAfjTgePH3AF9KjEapyNEqJ3ujg3w8T11%2FwZvpyw8CTbDYlSDtwumUY4lqQPP1bwf33suXCuNPKNdZkkP8mN8unOhb2ctGMJnTksIGOqUB1PXrA4HIy0nzjf0qa7IsJcnvqLw2wpIA3W5NMFIHRq5zqRvnlKcqxGyNOV8KiW6TUQvLR6vERToA6bvQhMt5AmpPmrSeHTYprdFJwYCjs0V0RE04TJHl0pliH5QrL7i9lb%2BknjZKcuGh0lSuph0h1CFDyOIMSn3Vkhxa1HuNMmuyrINVGkr1nQekesmP6puRL1htqZ4inhNqD9RpnWWkzHbVnWS8&X-Amz-Signature=2275272d6fb1da1890e36b3175ba07aacd198b49df8e7edcac045315aff0dbad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOMLC5S%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRNEnA4AzP12mqbx5j9DQV%2F8RPy2R5GGc50jFWUol4pAiAcRREnsoYt46GB79Ul3yshYAdMKNBFfTgeVNHDyBoLUir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMOtJK6ypvlBBILmlPKtwDIyx64J6dACxdmMHW6budCoZ%2BffIIPwWk%2FoVBezmsk2nLdwdc52gu%2F%2Fnbt5WXz7RsxL%2BTLFt6Mge5SCGUVFyWDjbuu3aYo2bPcdslEGbu5OKE8BXbD20t9zSLdq%2FWObIiuDHTTFbY548dCbVT53mtxcR%2BWZ4XuXxBC%2FgByZifK3s2Hh6ki%2FGJao%2FziZGgKwFKA59XIQBgPe05WCpDO%2B40kpNk6A3UDbM17DxyYySFxmbQ5M%2F6xCZma9eYADhX2USzAGgmMZEbQlxxWS7o3Z8crGmxczKu1rF6BjGPBSzaSjc289p4GO%2BYX2IViVwQ6D6nA0EHVyjPRajWT7jdRu2ikDMEEiS%2Fo%2Bg9SniBsNLauJYBlk4XLcbZQwxJ96%2B%2FsQCv%2F2ZGpJ5RXHIrKgbDxJZea4W6YXyp0UbSk3o7JB%2Bn8r1b5VSM%2BdTySelyibrNHF9uz%2FkApKhw2xsEikYDSloIr96VNjSEEgLAhrHen9%2FsOT%2BGFU4CuNjkuJq1b5Gtf6GY8d8SWdvE%2F8HiQh0LL2bz%2BWLbHChXFnzKv%2B5%2Fh3KUuPo608hnPFsad18oiycBWyezlbVpYZutIzEsbbPIYR7weuf47bvfBzWcv1C374kkDfrPODhI3UsUyhkfds4w2NOSwgY6pgEoltieL%2BzDGaeA2eKe%2BDj2DKIaB1jPtRzgz6VWk6X1Ev3GXsN8hf6e1iuExdB8lk7b3q5dTJN74Fy8FYM0M8yto5jE0KaFFrFW1P%2FTkJBLv6j2wgaV8Flibh8C8mzle%2BMAdcXLDEXZl4AOxmiEZXcVTuFpd6ui%2FvTIdFukpYZYuaX5QkvjAl9fopmLfRFeUdsPPNEsoGU0VD2WTK0X8bsxovVQUeyx&X-Amz-Signature=0e6e5116a2ae30f3bce99c43cb545641582dc1b66853cb96718e565c7bd20d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQWJEAE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6PbIjY88a1B0XQw3rSXmfOeCLrpTg7g5oQMU2Q72lQAiEA%2FZVBZRmIAdq2jrttzVoT3AYD1l6B30cVdlH9pNpsRu4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEte0aJdSXiINfzKGCrcA9qFyAvdNglu4kDyO7YcquSzHJaWxjYamqpoMh6EmfzCBo1hR8dfTbM26zkaAjtxs4i1vUJkdZ2SutR%2FkUBQ%2FtPOVltICYU5d%2FcbbekKjAApq3Km4%2BVAFAyJzJT14iPwa5yG55czU1kXgetUQtgcoMU8vPigBCu3h9sx0NQ3HyxpHC0JBWavpY%2BPJ6LYmWNxrY7IN5LlXWdnU5SlEdHvy5s3wr4UwEeYftDvo57mOIiqXAe%2BHpvbhY%2FxrB33%2BNX3mZiGHm4inD5neVzIydqvXacXm7cuWisYmmyrjF%2BAt0PIi1%2BRX9hvtn5bV3qNGWkgV%2BFALbsqVseDVSnpTaUNq1oP3QqLDFa7F8P%2Fz8gZZiUwE4VWOkEvzzGQxD8kjtoX5gL9fOO62S7sAx3UJzoqFbSvOweYBnFedIt5Ja4mp15tDNHNj08%2FzRP49Xc6TMio7a2Z0ByqLgyb%2BLIab0U81FzTE8GrcszNYr2CNLHPOfu7CcMJa4rd1tbLOhyVN8yrN%2BcxYU0IoSmQXDiv2addJqAVTdPS8tbtLMFI1UFZ5R2050FHNXH8yosYiGzzG50iV%2BiN7qPKR%2B9G0a5u9bs1%2BSLWlci1dL3kMizhNzpXQOwidHszn6ISz4zbZsXTMJjTksIGOqUB%2Fr8mbUlZiqVxfNiREbonPEu67YrW%2BZhFE5xeNv9LDlxgu1dOv6ObYtnQDp57iO7wnnecxOKxj3kV2Y3qwMw5qHSMtjFroPGEPJL7SQmfKKtuhnZAfDhSJJky03X8J4XfAAzH4zN8JLoVpNDbKsFprdfGSaGoJS8QSw%2BS4ICodnlN64NyyYb9OQB5NJjcUsF7MKuIvyp8QYbQ3%2FBwrFZB73jBtKxO&X-Amz-Signature=712a730909f8e30eb1f1d9411dfc8d67a456f285f3b373e134bc19fb807ba4d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
