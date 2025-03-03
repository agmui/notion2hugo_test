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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VKYUP4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbpe2vDTDgsQyCVdTkFIOYP%2FQPe4pkEfcCoshPdYjbmAiEA%2FC619dNaYm3gJeMx%2Ff1EX51aHo%2FKKD54LcdOjQe8WO0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMecM3zASJjGSbKVByrcA8VO2thMlXid32KBN5BpEK9HzhNr77WPHoj79Y7irw6MMjVuZD%2Bgtov%2Fahe8NQl0WKP4eC%2B2BjBuKEEHTWHgrHAOu%2BbYl8R2Lc88T3ppVFg%2B2PP4J1DB03pIpTazEzJlf9uk0Sx5oIII7KueR3XeBZ4APhBHi0FzN2OrevMU0nIGneV%2F5Xo3J%2FUpuSfxSi70tbK2IhHXeK%2BY17QV3Tu9sOmLvfhriP89mf7w2LRehUapHkldx6ljU9gQ4uIs1PVtXfLhuYqYcG1OXDvY0ewZj8nRtGn8I2dJbQlqgCmirV6NkTm%2FvTFCewj7WiKMlvOyiOOhCpIMUyQS91nFfBxTYPps810Y0OU9F0BVzlC6n06Q2fnj1NGfhoX%2F%2BurG1dlnzWCCY5FzE9mbyJ8aWi2gmarSaBmgsSuZb19bUgH41A2UZ3CtnSHbEX6VpvaOv0JUEP3tYdJlCyTDlswCKVQgIscy2P7ezdyJ8sMwnlT7AicnZPVaUXQiCKfIg2VbjxCD6kmybHaVv69ujCJ2aC86OnFMNxQm8RUIM%2F28Zu8yg9hKok0Nh%2Bin2eWWcCDYu8RIzuR4gWG2BGpngi4svN6mvL9gaVrUFNWrHxl8U%2BEwcDqrlqw2KJVLAVVsx3%2FNMIq7lr4GOqUBpEj1rbpH%2Bq%2FIVj7cHPdmbB4H2Q6GOJEH2zy5x7jeJI6MUXIBouhpIjZw%2F1RzgSmJ059cPMA2%2BIRewdsaHund1%2FOiFojTaY%2Fnw2pNWTOqMDrxlm9AtQbPAP3EGPc%2BEsHjEBMGUCZPedylQ3oOgyv0lQgLjuwwVVKbhI8%2B063usBPIYkpoYf9MEPkMIhg%2FkA4ek01UUgq6yD5L3KldLoixJnWnnfp8&X-Amz-Signature=576a9320828d54bdb36b58d8c36235bb9ebcdfbe15009033e84a098a0bf7ab1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VKYUP4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbpe2vDTDgsQyCVdTkFIOYP%2FQPe4pkEfcCoshPdYjbmAiEA%2FC619dNaYm3gJeMx%2Ff1EX51aHo%2FKKD54LcdOjQe8WO0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMecM3zASJjGSbKVByrcA8VO2thMlXid32KBN5BpEK9HzhNr77WPHoj79Y7irw6MMjVuZD%2Bgtov%2Fahe8NQl0WKP4eC%2B2BjBuKEEHTWHgrHAOu%2BbYl8R2Lc88T3ppVFg%2B2PP4J1DB03pIpTazEzJlf9uk0Sx5oIII7KueR3XeBZ4APhBHi0FzN2OrevMU0nIGneV%2F5Xo3J%2FUpuSfxSi70tbK2IhHXeK%2BY17QV3Tu9sOmLvfhriP89mf7w2LRehUapHkldx6ljU9gQ4uIs1PVtXfLhuYqYcG1OXDvY0ewZj8nRtGn8I2dJbQlqgCmirV6NkTm%2FvTFCewj7WiKMlvOyiOOhCpIMUyQS91nFfBxTYPps810Y0OU9F0BVzlC6n06Q2fnj1NGfhoX%2F%2BurG1dlnzWCCY5FzE9mbyJ8aWi2gmarSaBmgsSuZb19bUgH41A2UZ3CtnSHbEX6VpvaOv0JUEP3tYdJlCyTDlswCKVQgIscy2P7ezdyJ8sMwnlT7AicnZPVaUXQiCKfIg2VbjxCD6kmybHaVv69ujCJ2aC86OnFMNxQm8RUIM%2F28Zu8yg9hKok0Nh%2Bin2eWWcCDYu8RIzuR4gWG2BGpngi4svN6mvL9gaVrUFNWrHxl8U%2BEwcDqrlqw2KJVLAVVsx3%2FNMIq7lr4GOqUBpEj1rbpH%2Bq%2FIVj7cHPdmbB4H2Q6GOJEH2zy5x7jeJI6MUXIBouhpIjZw%2F1RzgSmJ059cPMA2%2BIRewdsaHund1%2FOiFojTaY%2Fnw2pNWTOqMDrxlm9AtQbPAP3EGPc%2BEsHjEBMGUCZPedylQ3oOgyv0lQgLjuwwVVKbhI8%2B063usBPIYkpoYf9MEPkMIhg%2FkA4ek01UUgq6yD5L3KldLoixJnWnnfp8&X-Amz-Signature=79f597a24939ba699659f6858539377eb65ee358eb8d4a353cca10d90e037fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSHT7QU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhbN45CVWI4PflWMKmakpBRg6vnRQAoN4BYUzTFqYvTQIhAKo2dBOAwkgcaPCl59D02o583nPsX5FKv%2FkGIwbfxeCZKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC5lD7kltlDQODwXAq3AMzoQnJtlVgY4Z2mHrMOlJ1qEpqHblaT3RILbXXu8rQcc6lihpvv9hclysEImFxuMp4i8UxWdDrmXrEWML1xz7lOenRG8Be6epZZQ%2FpHndD%2BXBdqO%2BnnvlAhsR4RvBsEMM7UzolAe2fusGBdoEq32NODMhzf1zsnsKEfiq8RtIujX4iKlnlyjQP0jx6QfRlnKtMN3YlCBLVhAOkbakWQdke7UU4aY3oPR9hGX9LZajueFh4tyARt8J8hVFNXCO%2F%2FWaemp2NjdYJb1EjU4NaPHB5gvSqRtChceCo1HM3XjFo43ajo%2B9ZBHcia9deDnNtuuzGmgdPPgFWRP0GGO4ZvNXmQyzE%2FUit%2Fn9MVwyTRbpZ%2FBzfUCsxnVz0m7HPi4HKD%2BlFR0g%2B8tmKmrbwR3tMiWkc1%2F%2BPMtAkYJSc4VmxIqaPqme27I9I73zNkPdZK4famJEMows6sVNWmtfXaqGRlSmmkkWKxJdZbBlNagt2Jummna8iuMNquTBczYoE7QuakmF6CaU%2BpHuIEm3VaHFaZp10szbxxOk3B22y9gM7%2Ft5qg2i6L4ypMFeaYj36NxhmyAJN3V7dgxe9uCivxWvhRSckuNVnv1zs9SeMmuInkGuDEWoxkpPE0lK58G9XsDCWu5a%2BBjqkARCrQ6d%2F%2B1kWUn1vRm7YsVzPXmFuK8wnn4pCVdu1e9BTsRJ7oNldTtHIxG0cuGytI6kGnrXpsmvIE7uO0c07IDDORj93tPCGZsKe2ZrIg4oUdlL6aFG6X%2BrsI2ZAnUmEUMZkxyv6kHgZopnIpwDZUhOigdDVKHeH%2FN4JhfOKBZhJsZCs%2FGK7%2By2LOdXCU7Kl7wBjEAI1zBnPiFWRnlfTGtAiGvBZ&X-Amz-Signature=0f0404f3c51567d93c93109bd734cb9d066fdb125c9fd501681ff1289f0cf336&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674EDHAFT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIsvGiZmSSBcAqCrhIKwJ6yvFvbCvnTuOPoL%2BdVq3uXAiEA%2B5fokgPFfW7R52x1HaK3HRW0ftaaZT0tkfsNUUGcvRkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeko9eM2ks34nnilCrcA%2FfPWJKZdLwuXdSzJxhsBsNT2JBEIdcZfijafCpzoNDalO%2BxoGtglgi6A0CdJrbOmTd8guckUhlx4C%2Bq6fJ3p%2FDn1TW0XdSvfsACG4T5WooY66duxPndhF1PSGq60SMsbuzeVGn8hJcuJifmAVwCCeHqBaVhJSEY%2F0LI4t30Ici4hE5upfX2p7cw56BcCYgUC%2FCLiDLw01%2BlGskLd1eQ8WFwrxqP8HJbw0QnYImcJh4OlnXebeeG3WHHjJQxo5WsLsqkbjtd%2BhWdJGzqOkIYEYHBIaxtfMuPxN6Q5GsYPxME0ApvpWYtiRsjjabqW4u%2BZxFh4zJTQ5DVjnKCmx92mty1uoAmcRSKJaj2wbqlLTYye23LOgfpyzEG3%2FQeb8kJQJJ7Jv2iYM%2FckQu5RfMk8%2FIWQrwdOZAhlXx46j3ap8ZEYyYEGUjgv1js5OrZx2SUuFmw0%2BOLDnkgHBgIhi3xCaKruaxIvMAE3pOuuqzJVBPsKyYO%2B9goYhNyeXoP83FjETumS9N7OgyQg%2B0ruG0FLEsJTRJOA5mz%2FJFcPyPyy8n1Ob5qMI4wCm3bUAlxVwZOuZF96NwgHgIx0TMdSZv0ZZgE94llvkkUIAVk%2F8eR2TnSgGZ3TEHb1nbBRzHlMKy7lr4GOqUBe5zWfbw8KLPb5T8ipUA5Gu5jquVI6kStAkZTL5DdZKU%2FOGs%2BUNMpbkKzHh87cpDctOLJFb4Sbz2os37VcEqle3D1mJZNF1Jluu6F47Dmw1%2BlwIAV56qgsQ%2BIKUS0JvDlH7uOByoUH8WtHS6bwfXqS8mn2LHExlJSicKmRvA9oOr%2BP6ZoTmGyeOUUlC8DggdvHD27RTvOLH450mH1oFsJ9DWcRvSi&X-Amz-Signature=32fb57f1b0762459cac497e7043f3907ebd298e68c44c6f980c908db56b06bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VKYUP4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbpe2vDTDgsQyCVdTkFIOYP%2FQPe4pkEfcCoshPdYjbmAiEA%2FC619dNaYm3gJeMx%2Ff1EX51aHo%2FKKD54LcdOjQe8WO0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMecM3zASJjGSbKVByrcA8VO2thMlXid32KBN5BpEK9HzhNr77WPHoj79Y7irw6MMjVuZD%2Bgtov%2Fahe8NQl0WKP4eC%2B2BjBuKEEHTWHgrHAOu%2BbYl8R2Lc88T3ppVFg%2B2PP4J1DB03pIpTazEzJlf9uk0Sx5oIII7KueR3XeBZ4APhBHi0FzN2OrevMU0nIGneV%2F5Xo3J%2FUpuSfxSi70tbK2IhHXeK%2BY17QV3Tu9sOmLvfhriP89mf7w2LRehUapHkldx6ljU9gQ4uIs1PVtXfLhuYqYcG1OXDvY0ewZj8nRtGn8I2dJbQlqgCmirV6NkTm%2FvTFCewj7WiKMlvOyiOOhCpIMUyQS91nFfBxTYPps810Y0OU9F0BVzlC6n06Q2fnj1NGfhoX%2F%2BurG1dlnzWCCY5FzE9mbyJ8aWi2gmarSaBmgsSuZb19bUgH41A2UZ3CtnSHbEX6VpvaOv0JUEP3tYdJlCyTDlswCKVQgIscy2P7ezdyJ8sMwnlT7AicnZPVaUXQiCKfIg2VbjxCD6kmybHaVv69ujCJ2aC86OnFMNxQm8RUIM%2F28Zu8yg9hKok0Nh%2Bin2eWWcCDYu8RIzuR4gWG2BGpngi4svN6mvL9gaVrUFNWrHxl8U%2BEwcDqrlqw2KJVLAVVsx3%2FNMIq7lr4GOqUBpEj1rbpH%2Bq%2FIVj7cHPdmbB4H2Q6GOJEH2zy5x7jeJI6MUXIBouhpIjZw%2F1RzgSmJ059cPMA2%2BIRewdsaHund1%2FOiFojTaY%2Fnw2pNWTOqMDrxlm9AtQbPAP3EGPc%2BEsHjEBMGUCZPedylQ3oOgyv0lQgLjuwwVVKbhI8%2B063usBPIYkpoYf9MEPkMIhg%2FkA4ek01UUgq6yD5L3KldLoixJnWnnfp8&X-Amz-Signature=3d8af878f469791f0f76c12606a66fcac53726ba6175718f4787ba60a34cb97e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
