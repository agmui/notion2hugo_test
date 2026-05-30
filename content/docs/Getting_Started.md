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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYKW46W%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDe896Cr5POGKIt0SoTBMU%2BsOr124vuS2YwDyxX7RNeOwIgZb5rdKCLLAev%2F7lR3Luv0Q%2FnECC4Tc2dIu5%2BJIH4IOEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh%2BwALXMycok%2FQm7CrcA6yakHHNogUici1jYiQLScFCeswbisC7rp%2F6t21rJ9hjSWh%2F3EHcwxjUnSMinP13OJukF%2FSMPWxRZkknu%2Bbx7YSzHEF3Fa1xkp6bLsARNL%2By0OdJoG61LiG6TTq6bTCrZgkzIMrlX81rATAQQi2VLzJlzs7E3OQHdWYYz1uvwFPu6vOnd3OJPL2iDugKsT%2FQuOuSUPuzyG01DHYH6919NQUPtBdkWlEmXbiJ5l9WRcM6hPG%2FdjwZEWe4hQFYo%2FHrdytwBlHK1eUO9ckCi0wrRbOWVePOaSCx58VKKEt%2BGfa1wOjCpMNTHdoZkxAzvOOqaFGOJ%2FwZWfhjst%2FktmPJdg6OL8TlQztmLQgcaq4nSiR%2FTSV6uB630uU2jICcscgrbZIjWkB%2FxP3J7Hd%2BhYi0q5TNmhs%2FSaoEwwu9We9VVaiCqDNdtrZ5tjKOHCfXrisZuZjdFcLO3CljIKVgJCDKsU5IGxMos6dWmda1v77lZ4YYEWTXfIeejlW7sUVw8R0Zq7TL%2BqxN152WohA1Ald85lGSKuUZmBe%2FV1y%2BXrLJ4k0eY58x8jfptIhqx4e2x0XRoMiVQPSrY4rckZ9rHy4ysNVCu0OcnCDVL6Uj7Jn2BAgEojQjfzbsUnZcdqT6MMil6dAGOqUBQlwoAFf%2F1%2B7lVD5q%2FTxtfsTDGFwjELFXswgsoNOJGb86e%2FwiI4jDCEQVeWL2LN0NBguRQTFqCUlicK6bpXDAUMImc0CDCIF4jo8i6KupxhYWQyQqf9gRGPhR0MAs7u%2FI2njyTiw4ryioe1CHJUJ1OzwUWB4PvKDOW1nIQbEkNT0REGD4MjzAyItMtfjaow8KMc3DwcqhbuCEnZy7%2BE69J4HuPG%2Bn&X-Amz-Signature=43ca1cba4762ea312c2a6b0976c45a622d13c78ae0e78512a993d43f13e077e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYKW46W%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDe896Cr5POGKIt0SoTBMU%2BsOr124vuS2YwDyxX7RNeOwIgZb5rdKCLLAev%2F7lR3Luv0Q%2FnECC4Tc2dIu5%2BJIH4IOEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh%2BwALXMycok%2FQm7CrcA6yakHHNogUici1jYiQLScFCeswbisC7rp%2F6t21rJ9hjSWh%2F3EHcwxjUnSMinP13OJukF%2FSMPWxRZkknu%2Bbx7YSzHEF3Fa1xkp6bLsARNL%2By0OdJoG61LiG6TTq6bTCrZgkzIMrlX81rATAQQi2VLzJlzs7E3OQHdWYYz1uvwFPu6vOnd3OJPL2iDugKsT%2FQuOuSUPuzyG01DHYH6919NQUPtBdkWlEmXbiJ5l9WRcM6hPG%2FdjwZEWe4hQFYo%2FHrdytwBlHK1eUO9ckCi0wrRbOWVePOaSCx58VKKEt%2BGfa1wOjCpMNTHdoZkxAzvOOqaFGOJ%2FwZWfhjst%2FktmPJdg6OL8TlQztmLQgcaq4nSiR%2FTSV6uB630uU2jICcscgrbZIjWkB%2FxP3J7Hd%2BhYi0q5TNmhs%2FSaoEwwu9We9VVaiCqDNdtrZ5tjKOHCfXrisZuZjdFcLO3CljIKVgJCDKsU5IGxMos6dWmda1v77lZ4YYEWTXfIeejlW7sUVw8R0Zq7TL%2BqxN152WohA1Ald85lGSKuUZmBe%2FV1y%2BXrLJ4k0eY58x8jfptIhqx4e2x0XRoMiVQPSrY4rckZ9rHy4ysNVCu0OcnCDVL6Uj7Jn2BAgEojQjfzbsUnZcdqT6MMil6dAGOqUBQlwoAFf%2F1%2B7lVD5q%2FTxtfsTDGFwjELFXswgsoNOJGb86e%2FwiI4jDCEQVeWL2LN0NBguRQTFqCUlicK6bpXDAUMImc0CDCIF4jo8i6KupxhYWQyQqf9gRGPhR0MAs7u%2FI2njyTiw4ryioe1CHJUJ1OzwUWB4PvKDOW1nIQbEkNT0REGD4MjzAyItMtfjaow8KMc3DwcqhbuCEnZy7%2BE69J4HuPG%2Bn&X-Amz-Signature=4a55c3c6a64276e3880f081503679e8d419801d05c2b58d8f7a1e711a0b2f272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYKW46W%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDe896Cr5POGKIt0SoTBMU%2BsOr124vuS2YwDyxX7RNeOwIgZb5rdKCLLAev%2F7lR3Luv0Q%2FnECC4Tc2dIu5%2BJIH4IOEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh%2BwALXMycok%2FQm7CrcA6yakHHNogUici1jYiQLScFCeswbisC7rp%2F6t21rJ9hjSWh%2F3EHcwxjUnSMinP13OJukF%2FSMPWxRZkknu%2Bbx7YSzHEF3Fa1xkp6bLsARNL%2By0OdJoG61LiG6TTq6bTCrZgkzIMrlX81rATAQQi2VLzJlzs7E3OQHdWYYz1uvwFPu6vOnd3OJPL2iDugKsT%2FQuOuSUPuzyG01DHYH6919NQUPtBdkWlEmXbiJ5l9WRcM6hPG%2FdjwZEWe4hQFYo%2FHrdytwBlHK1eUO9ckCi0wrRbOWVePOaSCx58VKKEt%2BGfa1wOjCpMNTHdoZkxAzvOOqaFGOJ%2FwZWfhjst%2FktmPJdg6OL8TlQztmLQgcaq4nSiR%2FTSV6uB630uU2jICcscgrbZIjWkB%2FxP3J7Hd%2BhYi0q5TNmhs%2FSaoEwwu9We9VVaiCqDNdtrZ5tjKOHCfXrisZuZjdFcLO3CljIKVgJCDKsU5IGxMos6dWmda1v77lZ4YYEWTXfIeejlW7sUVw8R0Zq7TL%2BqxN152WohA1Ald85lGSKuUZmBe%2FV1y%2BXrLJ4k0eY58x8jfptIhqx4e2x0XRoMiVQPSrY4rckZ9rHy4ysNVCu0OcnCDVL6Uj7Jn2BAgEojQjfzbsUnZcdqT6MMil6dAGOqUBQlwoAFf%2F1%2B7lVD5q%2FTxtfsTDGFwjELFXswgsoNOJGb86e%2FwiI4jDCEQVeWL2LN0NBguRQTFqCUlicK6bpXDAUMImc0CDCIF4jo8i6KupxhYWQyQqf9gRGPhR0MAs7u%2FI2njyTiw4ryioe1CHJUJ1OzwUWB4PvKDOW1nIQbEkNT0REGD4MjzAyItMtfjaow8KMc3DwcqhbuCEnZy7%2BE69J4HuPG%2Bn&X-Amz-Signature=439edda973caf6e3a94e0f2cb36fa75a3ab80f2576a9dfb6d9d4484f418c33cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQJB2C6%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICyRbpX2LVaUH%2ByDCPLqurQ3CLCHS6O0FrAJjQfj5wKXAiB4xKbITSDxkotnRa45eshhzqepJr%2F0rUyc8YxNeOwJTiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYoAObPnQ7LNPWoqkKtwD1TEODNjMgg8CD8LoFARC4kEwvHQyeqeJeZdrNRzmbgVTSM578IyL3Rl7MM%2FU1nq4WLet%2Fc8vgv1Ft%2B6cGcI3YTbFNZvJ0oXGeo%2Fgq3rCYPWD9HZxOwSEhhs99lk%2BjExH%2FYGudNxxy7KqqAvgbpjUPnBDe5iJcnsiDyy9B%2BloWztzC3xON4jJyeDyzxky0C9XMGdeHZU3RQ2YMcb0P7lxm81luuXGS16xkTf3igHa75MVs%2FWupV4uxzAzbtIuFyUgl4tWUwOc0tdDBSSW1UsBGBwHGUI7ANEFtQ7masE1p%2ByawO%2By1EVy7h7rBsKUnFrugvo4ucbQAHt%2B5fH1N2A0vdb1zuo3fxMpoYfiOJaw83ORyN45qhAy22k77ro5HSXwOQomCJgnAEIh3jtrCXo1umfYVK36hHLR0epLwS%2FdwsPTJIfu%2Bjvb4vyVKBLynM2%2BsRAzO%2BJ3E3OTaio%2BSjVKckNYYhydA96ZFt5YRGOPKx06nn5%2FYwj0xr32XRWeMvjEydqTZ6MCuboq5g%2BYae2f72EJSzmWm7pqWZ1PYhyoSvg1HqDTkyRzeV4kBrW7mfIruzfbigQGlKMXQtCpOKgF3CQysC3RclFuLqhLr0RyPM7dtklruaoI5NvShBEwyKXp0AY6pgFg02DIhkKFMrPkQAIeSt8l8EFak%2FrlYH3w6cRhwb5p%2BuAK845B1xo3JfUbDBFelftD73mPVQFfBMwS%2F239rUYh6lCoDKDDn2Jl4fDSQouxbDoNy5nC9jVy709dj50Jq6u9I8JwJ%2BTAmRHTNV6XmlCaP1Qb9Uh2qirnLlT7vECEuIm3faiOnvdkOIc0pkGS2kYyLdp%2BLFImNIAoZTEPZCtmgWT0FP2I&X-Amz-Signature=12e6cf9949f7c21da4a54d91ca20b7b8467b4edb48d03e3cde90d063d4c5b793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOIQT4QM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC23JMV442KMQuuO%2B%2FMBPrTPSVFyg3a84jl%2B6gzZh%2BRxwIgK%2BwLfWaNTMtfa%2Bgh%2FcKdwOlgzxARnt8bpQ8NdXZiW%2BAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0QhX2eiYZylTB5yCrcA5yvL3%2FITVkLgNXgJ4WR3PZ0cmuEt0ymmJumFVgo%2FkvdYQvZWVasms5JyLYtWN1EPWTieoChEzvs0T3mzbY6ca9X1lfQkK8HOaefPPnvh0Lu4bvLeyU%2B0NPotKetP5PKoWfJF5xWqt8w1XKJ9P5keuKRyEvOmdxXzyVXHRBtCXe7O4PNzxWGqNX9glJK%2BEbmejkarxyex%2FLw1iI%2Fybi8RvfrKA9N5kbknJtIUp%2FVBB32RGAgm6f2ButrYt9z8sH812f6857vqb8CWxNUkNtAehg56qWyTNBCKolGBKFjkzX1eLJzFLo9ETK5aBwWc7JqqbCxAtOBQMclCIa4PbRHNJy7BAsrntvI%2FIyM3oKOHOIqqJCIoBpfLhaZs9rOcuO%2BTdLS0r1zFRS0h7PTn%2B6%2FA2lD%2FOYwmCvEdvBJDJGEbaqREfR3Fwm8ZEc2sE1jUMLSuu0J3MyczTxGs3kjqaMilXnGCnDLhg6hjqFiBSsGwFwsP6sdGaW30IHCV0dy%2FuNXUpfEnywnokTqeSnI2%2BertNS%2BFy%2BSI3ji950myckHfnsZtGJ7%2BfyKJs%2BiKw2giOa5V%2FS5Uu8rIUh39idUTSjMau8H2oP0JdbHK3aXMBdlxOpntcFr01Zl7vfLRqBrMN2l6dAGOqUBR8wfuSOxwLVmMfNtyaanQTgcv8h5ovLAkigoLwinTneXhb%2FKxwedgqOLUjvaQW3K%2BlNGlRJDIfim8YAvQj9V93xcmtqaPqT%2Fh6BLlQKTy9RqV3LM9hdFfVK0rFYQREJ2lkNCevB4m7qD2xfB3dk0%2F1S1p8Zmausqj2bYYL9iePwXrXKE7VZURJFdA0mrAQmIXtCp7LvaExkwc6sqRJu6CcocWmc8&X-Amz-Signature=45b41569959186667c4f360480393edd4b0039b6c8e488f7176fc730ca67436e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYKW46W%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDe896Cr5POGKIt0SoTBMU%2BsOr124vuS2YwDyxX7RNeOwIgZb5rdKCLLAev%2F7lR3Luv0Q%2FnECC4Tc2dIu5%2BJIH4IOEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh%2BwALXMycok%2FQm7CrcA6yakHHNogUici1jYiQLScFCeswbisC7rp%2F6t21rJ9hjSWh%2F3EHcwxjUnSMinP13OJukF%2FSMPWxRZkknu%2Bbx7YSzHEF3Fa1xkp6bLsARNL%2By0OdJoG61LiG6TTq6bTCrZgkzIMrlX81rATAQQi2VLzJlzs7E3OQHdWYYz1uvwFPu6vOnd3OJPL2iDugKsT%2FQuOuSUPuzyG01DHYH6919NQUPtBdkWlEmXbiJ5l9WRcM6hPG%2FdjwZEWe4hQFYo%2FHrdytwBlHK1eUO9ckCi0wrRbOWVePOaSCx58VKKEt%2BGfa1wOjCpMNTHdoZkxAzvOOqaFGOJ%2FwZWfhjst%2FktmPJdg6OL8TlQztmLQgcaq4nSiR%2FTSV6uB630uU2jICcscgrbZIjWkB%2FxP3J7Hd%2BhYi0q5TNmhs%2FSaoEwwu9We9VVaiCqDNdtrZ5tjKOHCfXrisZuZjdFcLO3CljIKVgJCDKsU5IGxMos6dWmda1v77lZ4YYEWTXfIeejlW7sUVw8R0Zq7TL%2BqxN152WohA1Ald85lGSKuUZmBe%2FV1y%2BXrLJ4k0eY58x8jfptIhqx4e2x0XRoMiVQPSrY4rckZ9rHy4ysNVCu0OcnCDVL6Uj7Jn2BAgEojQjfzbsUnZcdqT6MMil6dAGOqUBQlwoAFf%2F1%2B7lVD5q%2FTxtfsTDGFwjELFXswgsoNOJGb86e%2FwiI4jDCEQVeWL2LN0NBguRQTFqCUlicK6bpXDAUMImc0CDCIF4jo8i6KupxhYWQyQqf9gRGPhR0MAs7u%2FI2njyTiw4ryioe1CHJUJ1OzwUWB4PvKDOW1nIQbEkNT0REGD4MjzAyItMtfjaow8KMc3DwcqhbuCEnZy7%2BE69J4HuPG%2Bn&X-Amz-Signature=41380d1e1bace3891343cd0822af8686668d0cfc1380b270411359ea70f3a230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
