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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBICZFEK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BMWZHUWGwlOjEaSLKwXpQ53gIgNBPnzIArOFuq7EbYAiEAiRPhLYmXF0Dn8l0wxIZrnSkvKJNnr0XBFhuctxeRhA8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDCVEVwHgARX0cnzCrcA8czw71eDDhj7kciThkhJ3sNw2q%2BDibzvS6B7WZXqgbjDNDTutX30cDecQ4sMOtgg%2Bm9mvA%2FzzqWVtwPRiz4IaD9mkOVyaINMbNcT6bCzHmWmdulHqiWVNuUKm%2FzOzbvD4hDqj%2BBkaiGdi%2Fq6f0wY68GXS03%2BSzm61Q%2FJYAhnwaFdtKUpQRZ685gFgSdEFbn4JU1emFEjmuWIAcAB0MtuqcKdpEljZBa99gNfW2KpbPfso4Z%2Fhl593ag91v5sWfnRXu%2BhFHbpUzBzC6haByqJts7i99RkwnCd0%2Fcrv3l0j8mas3TNFIxlOt6hYH94EpAihbJ5IN2kGgylTUm%2BWjQSaj7DETBG4YX9vvfijhVwtaJNBtU5IxUyjbKZw72szqOrYJ7iQ0YvSd7IC1aVMD6VR8TCfV%2Bv7uGfRXn%2BGi0dPlwRwDth9mv4VFh3qa2u4wSfr%2BHNa%2F%2BqK8oKFyFZZjRb%2FQdwPQjhSNVoWV6W7nHRavotnjXdGTDqd4uc%2FzoNbj5g74lULgxQFFxhrhgBn6w55vNZhkWlbLxlQzt9EMQAwPJFypKmqg02Q8muwNaoxej1IV8Xs8fhG7BVntcDHYcrZRb5VVozQWWnnvAYdjVIGqTflY26GGy%2F6WNTWDDML2P%2FMAGOqUBehrAY2cJMHBS%2FRUfislY9g791jiAFn8LlIoG1EKZTuGO%2FlGFkGG0B87vXuk%2F3TOlGNehGgyoBnJyvGWgDntqRNxdAOUAX6EqvN7JRJnn1L2XgEXi8G2L3D6Wvv%2FMCuIrOjjeSRF91w1RIcGRoSj97U2dAPDmzU9bonNu%2FqodTnd8CReKm7xBhAcPgwsmWigwPzul%2BYytNnOTNOr10cIgmM0Q2XOw&X-Amz-Signature=b1677bf599234b5d9183667b35aa9dc390f981df236d4fe1ea099181a4438c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBICZFEK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BMWZHUWGwlOjEaSLKwXpQ53gIgNBPnzIArOFuq7EbYAiEAiRPhLYmXF0Dn8l0wxIZrnSkvKJNnr0XBFhuctxeRhA8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDCVEVwHgARX0cnzCrcA8czw71eDDhj7kciThkhJ3sNw2q%2BDibzvS6B7WZXqgbjDNDTutX30cDecQ4sMOtgg%2Bm9mvA%2FzzqWVtwPRiz4IaD9mkOVyaINMbNcT6bCzHmWmdulHqiWVNuUKm%2FzOzbvD4hDqj%2BBkaiGdi%2Fq6f0wY68GXS03%2BSzm61Q%2FJYAhnwaFdtKUpQRZ685gFgSdEFbn4JU1emFEjmuWIAcAB0MtuqcKdpEljZBa99gNfW2KpbPfso4Z%2Fhl593ag91v5sWfnRXu%2BhFHbpUzBzC6haByqJts7i99RkwnCd0%2Fcrv3l0j8mas3TNFIxlOt6hYH94EpAihbJ5IN2kGgylTUm%2BWjQSaj7DETBG4YX9vvfijhVwtaJNBtU5IxUyjbKZw72szqOrYJ7iQ0YvSd7IC1aVMD6VR8TCfV%2Bv7uGfRXn%2BGi0dPlwRwDth9mv4VFh3qa2u4wSfr%2BHNa%2F%2BqK8oKFyFZZjRb%2FQdwPQjhSNVoWV6W7nHRavotnjXdGTDqd4uc%2FzoNbj5g74lULgxQFFxhrhgBn6w55vNZhkWlbLxlQzt9EMQAwPJFypKmqg02Q8muwNaoxej1IV8Xs8fhG7BVntcDHYcrZRb5VVozQWWnnvAYdjVIGqTflY26GGy%2F6WNTWDDML2P%2FMAGOqUBehrAY2cJMHBS%2FRUfislY9g791jiAFn8LlIoG1EKZTuGO%2FlGFkGG0B87vXuk%2F3TOlGNehGgyoBnJyvGWgDntqRNxdAOUAX6EqvN7JRJnn1L2XgEXi8G2L3D6Wvv%2FMCuIrOjjeSRF91w1RIcGRoSj97U2dAPDmzU9bonNu%2FqodTnd8CReKm7xBhAcPgwsmWigwPzul%2BYytNnOTNOr10cIgmM0Q2XOw&X-Amz-Signature=4b024afb58bc29f44dd32f337f7805326bbc85ab5a37d2d36f74d7b81c6f2864&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBICZFEK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BMWZHUWGwlOjEaSLKwXpQ53gIgNBPnzIArOFuq7EbYAiEAiRPhLYmXF0Dn8l0wxIZrnSkvKJNnr0XBFhuctxeRhA8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDCVEVwHgARX0cnzCrcA8czw71eDDhj7kciThkhJ3sNw2q%2BDibzvS6B7WZXqgbjDNDTutX30cDecQ4sMOtgg%2Bm9mvA%2FzzqWVtwPRiz4IaD9mkOVyaINMbNcT6bCzHmWmdulHqiWVNuUKm%2FzOzbvD4hDqj%2BBkaiGdi%2Fq6f0wY68GXS03%2BSzm61Q%2FJYAhnwaFdtKUpQRZ685gFgSdEFbn4JU1emFEjmuWIAcAB0MtuqcKdpEljZBa99gNfW2KpbPfso4Z%2Fhl593ag91v5sWfnRXu%2BhFHbpUzBzC6haByqJts7i99RkwnCd0%2Fcrv3l0j8mas3TNFIxlOt6hYH94EpAihbJ5IN2kGgylTUm%2BWjQSaj7DETBG4YX9vvfijhVwtaJNBtU5IxUyjbKZw72szqOrYJ7iQ0YvSd7IC1aVMD6VR8TCfV%2Bv7uGfRXn%2BGi0dPlwRwDth9mv4VFh3qa2u4wSfr%2BHNa%2F%2BqK8oKFyFZZjRb%2FQdwPQjhSNVoWV6W7nHRavotnjXdGTDqd4uc%2FzoNbj5g74lULgxQFFxhrhgBn6w55vNZhkWlbLxlQzt9EMQAwPJFypKmqg02Q8muwNaoxej1IV8Xs8fhG7BVntcDHYcrZRb5VVozQWWnnvAYdjVIGqTflY26GGy%2F6WNTWDDML2P%2FMAGOqUBehrAY2cJMHBS%2FRUfislY9g791jiAFn8LlIoG1EKZTuGO%2FlGFkGG0B87vXuk%2F3TOlGNehGgyoBnJyvGWgDntqRNxdAOUAX6EqvN7JRJnn1L2XgEXi8G2L3D6Wvv%2FMCuIrOjjeSRF91w1RIcGRoSj97U2dAPDmzU9bonNu%2FqodTnd8CReKm7xBhAcPgwsmWigwPzul%2BYytNnOTNOr10cIgmM0Q2XOw&X-Amz-Signature=2a364f976112ac20badbc93fbc6af8da9778990c6f8167720fec9d5e4967ec80&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTJZJKF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ysHzmqdhZw908sm5jw3bmqpb%2F7URFqwNdAtoSZ%2BDBQIhANztbhzoF59FOTTAgzAAEJ9nb1p3LwYKdvd%2BH6XtgssfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxKyiFNBtri5yM2aUq3AOsIBv6rtRLbdnfUd21ZrG7eUvGEQxZuKAEh8nu39KVTqazqcTJ9UXzmLGX1%2BUz5jBd5V40atUX%2FuCuLd085M5eJ20Etp5FIWh7BKDkiA6cygNe8WQ%2FBNQVtPb6gmZMXjHDBPuOccwfHIbcoPeWSrYmDxjbkzQIMPa529lI9sGOJlGlCJ6A%2BdCcme2l3Zq7mzcLfG9ykzXwIrAC3KUqKbQjpYm8Yb6wXIhSKPTLr3DecRrMkqefJZYUnVSCqOj3MONEDNleMLAw9nqnUl3%2BOlIdf4uqDXLqt21%2BkHQfG9YKkcfhAn9ut0nnbNoyU8%2BT5wmd0qtzA%2Bl8VxlGifnWvacETV0wOs9J2%2BvhgRZYdgvVkivMzYlFaI4scAlhtH0cchCecnbQO8kH3sGi4S2fZmQX2XFet8Aa34VRaa%2B6OybCFhYE9XnT4mBrMbv7PORtGO0ZIGEoVkBxlttf6%2FDRePCWC3MTaClUvo8YpYtKNPbTvcLUFHmv2wudq6eUm3Sj6lp2i880bmsdH1%2Bcc6R7zKJRmOq84iZgQ63pHB0elMq7aTtVkPa79OAj1h32OGfXiwkM5C6qq9j6zweIVSRdnA33Xlsw8HN9owj%2BsaqbcCBO%2BQR8JTLOZ9Vu4KNi4DC1j%2FzABjqkAfdbYq6cZuO4FwuxZu1EWoO5x2XpCsxdO513C1fRwHsaaWexyZKt8lGPQdiBF2vlaMtl7qzP8TbhXbvZkmCq1RF3A6OSGgv6j0uFzu0gkxuxAPGdRagqJhqrkDATu3dhtUCJIC7ezzEglkGdbHgLDEiuqZBzjTlOTOSnqjSrYizOV0cJzjWandFkBkMoP6AH3N2wubUxymNg6qsaC4wJzyqvBQKE&X-Amz-Signature=fe3bcea142f0b390d5660fdead87e5679d0046dd04bb70da854da08adcea8788&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEUZNQ7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfmgxxzTyCyAWyN00uqDR%2BaIAH0CdJt%2BmER0%2BefNgniAiEAmUEHMOUfFfE0OScuuRdXMakZ8YYPYYn%2BDJzGGK%2FvbasqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPN7woZdELbm3%2FUaircA6t8nSSlWDIRxbVWWFxzU%2B3d6D4jWB1e5I1Uzy4w0B8u%2B%2BcfhNVf0rk2A1w%2B9yoqyiQwHKjd6LxOUSSLU1PQb4aVTC9OytSPQFPaeZOwxuaFh2ymsSq2%2BryDvqx2B8OF85CLEWy8HJhT6wydkTxJ0YeDnzJJJimEtvBrIOBpSqvwjzk3g8vTWf00txG0UabuieABDzORPjkpqOmf%2FXYQwRfXzjJDImg%2B2%2Bazvuw2r29D2%2FHNb0zsEi%2Bjiz10R%2F2bJ3E5b0pswXfoBespFRVa5TB4x%2FpCDRDKQoEuPGXUCvBcfv1D%2F%2BndzzsWifGSTDlb4l2mUvPsy6C6y5dBq69o8jjq8K5f4LrfcuYdk8GPtxo4wLpeBJt58LGgVZ74zepBwZQZZ88skxoK7HQZqBIPxE6c7SY5OGIvVvld0ujSAwvxGhSc3gkSYcNm4AAoHVXmMa8qbfFTcdAzUFsZwoB%2BBah9ZcSYtBWqO4jof294e74utTwvUdDK8Nkw6Df7ERxUcE4ZWN7oXL2PIFc0k1ZtdvIKD1vcJfTWKSrMKFJzqUkxWRDm9Veq9BeLJwW3a5cpRJqEvtGSstXBI3M8RU%2Fd5mXmhmeW5e%2B3Xsdko1xswd0tw4DYvbjMRg5k0IuYMMeP%2FMAGOqUBoBsgo%2FfSIczyiM267UthLsMGvU1cAVfSZUXoIwOSvE%2Fb0VneUhDds9ecGlnN5cJz2HDC5FY6yYcH0jWvlmNlL7d%2BSGzGcaTuvBwAz%2FRJvSah%2BsS1JKfqyP9eiS5llt%2FaiBdOQGL%2FF9QRMIoCoq0vrQn3PUIDbR9XIFJjD1iLp9l3tJV8O83CLV0lu7yfQmCDHkGjfNOW%2BQGY7Pj7XQyaRkhXrAFP&X-Amz-Signature=47c4466346d34aa1b0dde5fda2ee97da481131519b049f14371f66b5637071c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBICZFEK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BMWZHUWGwlOjEaSLKwXpQ53gIgNBPnzIArOFuq7EbYAiEAiRPhLYmXF0Dn8l0wxIZrnSkvKJNnr0XBFhuctxeRhA8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDCVEVwHgARX0cnzCrcA8czw71eDDhj7kciThkhJ3sNw2q%2BDibzvS6B7WZXqgbjDNDTutX30cDecQ4sMOtgg%2Bm9mvA%2FzzqWVtwPRiz4IaD9mkOVyaINMbNcT6bCzHmWmdulHqiWVNuUKm%2FzOzbvD4hDqj%2BBkaiGdi%2Fq6f0wY68GXS03%2BSzm61Q%2FJYAhnwaFdtKUpQRZ685gFgSdEFbn4JU1emFEjmuWIAcAB0MtuqcKdpEljZBa99gNfW2KpbPfso4Z%2Fhl593ag91v5sWfnRXu%2BhFHbpUzBzC6haByqJts7i99RkwnCd0%2Fcrv3l0j8mas3TNFIxlOt6hYH94EpAihbJ5IN2kGgylTUm%2BWjQSaj7DETBG4YX9vvfijhVwtaJNBtU5IxUyjbKZw72szqOrYJ7iQ0YvSd7IC1aVMD6VR8TCfV%2Bv7uGfRXn%2BGi0dPlwRwDth9mv4VFh3qa2u4wSfr%2BHNa%2F%2BqK8oKFyFZZjRb%2FQdwPQjhSNVoWV6W7nHRavotnjXdGTDqd4uc%2FzoNbj5g74lULgxQFFxhrhgBn6w55vNZhkWlbLxlQzt9EMQAwPJFypKmqg02Q8muwNaoxej1IV8Xs8fhG7BVntcDHYcrZRb5VVozQWWnnvAYdjVIGqTflY26GGy%2F6WNTWDDML2P%2FMAGOqUBehrAY2cJMHBS%2FRUfislY9g791jiAFn8LlIoG1EKZTuGO%2FlGFkGG0B87vXuk%2F3TOlGNehGgyoBnJyvGWgDntqRNxdAOUAX6EqvN7JRJnn1L2XgEXi8G2L3D6Wvv%2FMCuIrOjjeSRF91w1RIcGRoSj97U2dAPDmzU9bonNu%2FqodTnd8CReKm7xBhAcPgwsmWigwPzul%2BYytNnOTNOr10cIgmM0Q2XOw&X-Amz-Signature=d2c171c5b69ff35fc601caa77391cac401f89124daf6059b2c19adb2663aa58c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
