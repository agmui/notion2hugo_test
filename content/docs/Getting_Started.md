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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWVG36Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDzdk%2BbeP6ISSw7gtWzO59THKrgTV235Cuj3OZenyxCxQIgewJVCAsf7AD%2FdZZVyUEzGEEzjD4fsbV1g9NDcn3LA00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDD3dDKe%2BXTdxRQ%2FcUSrcA2C8BifT2EykBksoyld28pQnx6puh56QmO2AD2earsQaFa0lIujhPi3bdP5KXNAhX1DKzVylE12BWB1pz4X8uT0SCxgy4M8nL%2B6GNrIFZ%2FhuWAh65umV8jFe%2BeQN37a0lMFwoMQfZ0tnbj1T0xtk%2FfB84Vb6jW%2Fn4s1o1W7wNi9YklIy6n7xks77KyGGCtFLNIB1dv%2FJj9bR%2FqioeOZ%2BTaJBmNLxFCf2V2J8OZevcUlvQlCZUWxvByFmZsC3Ab8LjbWCiYAlpQDux6HAYCZV%2FB2k7FvKchOuw5OpAlEGC7uQZKSEYrwcKImxqUkejX3Q5R39HNZzqLE%2FD577V7ZF5pTgNEPHVHSzlGYwjWN5xmZQ78DA5KLHBR6Mp3Z00sPBYBfihU3SYtYmhF206RXYFDQqKW4jgnmbQqFCzmz5iMRJZjc66ti1wa5oJl20WHzfyOaPWFXUZZ45fxdjSyT7z6VJcmg7%2Fd5FojLrLRm9vmg3ntCRS9sQrYz%2BGZZQ%2FYULeLGeaIoVSyFKA5AFkpkrIZCudczWKb%2FpE2cfn8Px04D4XTVTpe%2B3rh633PZvkPE%2F7qH3ZjJAQRVgu8aMDKIwjIaOoVCeNGJIr2PVEcI9bGHH8z%2BXgaFIic2xT4HhMO%2F8%2BcQGOqUBzeqR8stelMVWEkGd87sY2Y5XncBtwOjQ8%2BLMr%2FugAlaqPCoAPOUsA8M1K0Uo0Tj7qcVudz1MrXPDoPK03IywRh%2Bivkc34Q37S64RNqxHbnKT9RJz1bTDmai8mIenOWiAh247qoHs4wZEaB%2Be9%2BDePrxgSjnNkcXRrb6NZC%2FEKQ7c9dw0ryHiSA5AA1HOz3RkG1TXe%2FZ2FTjI519juDCpYZyy8riw&X-Amz-Signature=4dfe0d5e2a87e050ffb4f8e9d61bb8455634dec21bba429b328afa0e1abbfad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWVG36Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDzdk%2BbeP6ISSw7gtWzO59THKrgTV235Cuj3OZenyxCxQIgewJVCAsf7AD%2FdZZVyUEzGEEzjD4fsbV1g9NDcn3LA00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDD3dDKe%2BXTdxRQ%2FcUSrcA2C8BifT2EykBksoyld28pQnx6puh56QmO2AD2earsQaFa0lIujhPi3bdP5KXNAhX1DKzVylE12BWB1pz4X8uT0SCxgy4M8nL%2B6GNrIFZ%2FhuWAh65umV8jFe%2BeQN37a0lMFwoMQfZ0tnbj1T0xtk%2FfB84Vb6jW%2Fn4s1o1W7wNi9YklIy6n7xks77KyGGCtFLNIB1dv%2FJj9bR%2FqioeOZ%2BTaJBmNLxFCf2V2J8OZevcUlvQlCZUWxvByFmZsC3Ab8LjbWCiYAlpQDux6HAYCZV%2FB2k7FvKchOuw5OpAlEGC7uQZKSEYrwcKImxqUkejX3Q5R39HNZzqLE%2FD577V7ZF5pTgNEPHVHSzlGYwjWN5xmZQ78DA5KLHBR6Mp3Z00sPBYBfihU3SYtYmhF206RXYFDQqKW4jgnmbQqFCzmz5iMRJZjc66ti1wa5oJl20WHzfyOaPWFXUZZ45fxdjSyT7z6VJcmg7%2Fd5FojLrLRm9vmg3ntCRS9sQrYz%2BGZZQ%2FYULeLGeaIoVSyFKA5AFkpkrIZCudczWKb%2FpE2cfn8Px04D4XTVTpe%2B3rh633PZvkPE%2F7qH3ZjJAQRVgu8aMDKIwjIaOoVCeNGJIr2PVEcI9bGHH8z%2BXgaFIic2xT4HhMO%2F8%2BcQGOqUBzeqR8stelMVWEkGd87sY2Y5XncBtwOjQ8%2BLMr%2FugAlaqPCoAPOUsA8M1K0Uo0Tj7qcVudz1MrXPDoPK03IywRh%2Bivkc34Q37S64RNqxHbnKT9RJz1bTDmai8mIenOWiAh247qoHs4wZEaB%2Be9%2BDePrxgSjnNkcXRrb6NZC%2FEKQ7c9dw0ryHiSA5AA1HOz3RkG1TXe%2FZ2FTjI519juDCpYZyy8riw&X-Amz-Signature=c992b71ee9691f7eca209fea4cba6d291e596d6e8455bfbcf21f6714fa5827f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWVG36Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDzdk%2BbeP6ISSw7gtWzO59THKrgTV235Cuj3OZenyxCxQIgewJVCAsf7AD%2FdZZVyUEzGEEzjD4fsbV1g9NDcn3LA00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDD3dDKe%2BXTdxRQ%2FcUSrcA2C8BifT2EykBksoyld28pQnx6puh56QmO2AD2earsQaFa0lIujhPi3bdP5KXNAhX1DKzVylE12BWB1pz4X8uT0SCxgy4M8nL%2B6GNrIFZ%2FhuWAh65umV8jFe%2BeQN37a0lMFwoMQfZ0tnbj1T0xtk%2FfB84Vb6jW%2Fn4s1o1W7wNi9YklIy6n7xks77KyGGCtFLNIB1dv%2FJj9bR%2FqioeOZ%2BTaJBmNLxFCf2V2J8OZevcUlvQlCZUWxvByFmZsC3Ab8LjbWCiYAlpQDux6HAYCZV%2FB2k7FvKchOuw5OpAlEGC7uQZKSEYrwcKImxqUkejX3Q5R39HNZzqLE%2FD577V7ZF5pTgNEPHVHSzlGYwjWN5xmZQ78DA5KLHBR6Mp3Z00sPBYBfihU3SYtYmhF206RXYFDQqKW4jgnmbQqFCzmz5iMRJZjc66ti1wa5oJl20WHzfyOaPWFXUZZ45fxdjSyT7z6VJcmg7%2Fd5FojLrLRm9vmg3ntCRS9sQrYz%2BGZZQ%2FYULeLGeaIoVSyFKA5AFkpkrIZCudczWKb%2FpE2cfn8Px04D4XTVTpe%2B3rh633PZvkPE%2F7qH3ZjJAQRVgu8aMDKIwjIaOoVCeNGJIr2PVEcI9bGHH8z%2BXgaFIic2xT4HhMO%2F8%2BcQGOqUBzeqR8stelMVWEkGd87sY2Y5XncBtwOjQ8%2BLMr%2FugAlaqPCoAPOUsA8M1K0Uo0Tj7qcVudz1MrXPDoPK03IywRh%2Bivkc34Q37S64RNqxHbnKT9RJz1bTDmai8mIenOWiAh247qoHs4wZEaB%2Be9%2BDePrxgSjnNkcXRrb6NZC%2FEKQ7c9dw0ryHiSA5AA1HOz3RkG1TXe%2FZ2FTjI519juDCpYZyy8riw&X-Amz-Signature=f6cadc45d7d0299dc1e9e879f791430e12d5fd36f5bd79b36bebf3753aa11351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCUWFBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCfKaphhtqwR2AgprzQQJNluIGKj4zkBFKpy75HD8ElCAIhAK0GqKfZ%2FlRMwW9XFUQfOrGsSaetUgwnLCWmuoB8nfywKv8DCFEQABoMNjM3NDIzMTgzODA1IgxulEhG6luof9hjxaIq3AOeQKt5s8VzLjbCIRnGD24zxygNjVsxgGuDWz6rGSUmRzFSjEqZxpoe3oYOueqDNYqPDzedWqoHINxc%2BCIstS22tcWLrI%2BvZ5MPMPZcEzW7Vy%2FI7Yazjb43vI4WPIQocpxw1pVLtsIokQ%2F2Xe7TuCTWXuUhMpbWNfACsVwxKsgiyZXbab3NvsKD1gYPZeplbOGHT5eFrT1EfbblD2eH7rBqLqBGIvDJHGsCc1o90l0Jguz%2BOzM1fiSJlPJznPNbdRh1RlThJ2u%2F715X%2Fca0e0VLAD7jrASmhKM2GT6z1wP786L%2BqgLZxzo75KUWFokxjCahuPtLrMBr4AqoJEtmEZxAPldL8%2FGJlmiXfg95VQQkeCAiMJBJuC9pgMJe9R5d7LKz%2B13lUMHQj0Y90%2B%2FjgCzQdRQGD%2FzR1kT%2B1o%2F7KoJgehX%2FJ6%2FFaiZrn35hUr1KzXhlYc0stW8OhwlF9MYLq6%2Buj7N7eJ%2BumGKIIoeQVDlApnG0iHxtbuJnGA13Dcj53bk8XlOGb%2BKWowSmcpj%2FDZeKAxEH2qmT0jGH2STsdrJ3tA0tSGGfW0RhmWy8L%2BqLnwNBjiHcqQHF5XpJ7x8SkcO8pAF1DepOi6jNJSoKGpaSp3M%2BPt2upg4f6HcSwzDA%2FPnEBjqkAUNsxTI6IfzuXcCwZa2rvFZczQ%2F4EoKCg9O3w4wf2Crzy8osfaT62gnh2E3eOyi2uBS39m2CVH0Sm4t2I2WEgTiYINtquZ0TOQNthrIjPXNCqvJtmXuFquMoxt4g3wzWT2vmbFvOFXLIRFktMOevSQUVOVgPptocLLz6fLlOrl5nMgdG9gXVpYhMFmo2C4i5Veqw6w7QQtd7XhNNt0P99wtr2YGL&X-Amz-Signature=47800cf14d263696091868549cb3355bafdf8e868a05e8d1f36d75553f034cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXINOTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDMEyq%2BN2jkVDlXB2huljbWnHGroUxdMSz1%2BqJVQVX6kgIgCT5U8Corbbzki%2Fu6yS5jFmf9WhbT116LK7NbAgeSig4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIkqWN%2BldpuQC62wWircA2BeKWh8SOH66VYZDpGeIYxVR1el8qua0nVfWPicqJ7Z3UjwDpumenQR3TH0mIezQYfOVtiNi3PvgWhSEyOploEzQJ9DiG%2Fj4qlbxJunE8UH5rqjK8UpBSEeFhJ%2FFZH4%2BHL%2BvRpwGp8GIPT%2Buvjzukc4W4Hwu0%2FGwPf0i1EwTnJ9gAtdjOggAAmX1v1e6dTZj7ax6lgK7BKuTlwOn0d5c3OlIbKIq7Ex9yudaZGkcJxnd0Xs2pgitAceOqLcxA3TdPvVUVXRBdw5iEFVrn8oxOVxUtDUwcuL3LMqyv40kU4IZ1ZUlEYnL6mzFZ0xScVTHZraV1NJlpnfGVlk%2F6tJ9v%2BhNYEaGuv8Z%2FksUaWxPp%2BWmJmeqJ9Xk732GFhiIPKm%2FnM%2B5Vd749FFih%2FFrDswiWYamUHXZgE%2FpWaXiu3MoOha%2BFVzVHu6Dkqd%2Bz0ufiMxYds0rqByKf%2FOTPORcljGfSAmQ%2B1%2FcTLHujy2DxcOcRSRv4u8QAdhpVxZ6IGUDlWUfpjVYXB0ZYGcQakRUJcnmv%2BvXc5F9IZdfYNtCVGQU0o7Uey9ih8Do4Q9HH%2BdVbfPbDN5vi1KZiuXOCXpSG0NUXILCEFEvmMRoy%2B%2B4BDrWzoo%2FbVP3mRMxMD8GAdMMJj8%2BcQGOqUB%2BA89O4umV%2BmWzR2hvbklgGA%2Fy1Jp7zY6NEPJemvq3cxsfQAN%2BcGugqkV1sX5KSGuASStqZk8kaC0jP6uFp5HS15huK8asrFSnqXzRqkH09OncHNE6X4BFc55OP31HTnGYLNTE3A5sAIGvVt1HCTx%2B4cOtmOjKTAxHxF4W%2FUrtrozu3rjf87xapAuTSl0XIG5SaCqIaNUWh6kX4Ehq0V9NqBIZBZf&X-Amz-Signature=7e756096743ba3fb1e56071cc5ff235458dee17a9d8649fbbe4cec891bea0da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWVG36Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDzdk%2BbeP6ISSw7gtWzO59THKrgTV235Cuj3OZenyxCxQIgewJVCAsf7AD%2FdZZVyUEzGEEzjD4fsbV1g9NDcn3LA00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDD3dDKe%2BXTdxRQ%2FcUSrcA2C8BifT2EykBksoyld28pQnx6puh56QmO2AD2earsQaFa0lIujhPi3bdP5KXNAhX1DKzVylE12BWB1pz4X8uT0SCxgy4M8nL%2B6GNrIFZ%2FhuWAh65umV8jFe%2BeQN37a0lMFwoMQfZ0tnbj1T0xtk%2FfB84Vb6jW%2Fn4s1o1W7wNi9YklIy6n7xks77KyGGCtFLNIB1dv%2FJj9bR%2FqioeOZ%2BTaJBmNLxFCf2V2J8OZevcUlvQlCZUWxvByFmZsC3Ab8LjbWCiYAlpQDux6HAYCZV%2FB2k7FvKchOuw5OpAlEGC7uQZKSEYrwcKImxqUkejX3Q5R39HNZzqLE%2FD577V7ZF5pTgNEPHVHSzlGYwjWN5xmZQ78DA5KLHBR6Mp3Z00sPBYBfihU3SYtYmhF206RXYFDQqKW4jgnmbQqFCzmz5iMRJZjc66ti1wa5oJl20WHzfyOaPWFXUZZ45fxdjSyT7z6VJcmg7%2Fd5FojLrLRm9vmg3ntCRS9sQrYz%2BGZZQ%2FYULeLGeaIoVSyFKA5AFkpkrIZCudczWKb%2FpE2cfn8Px04D4XTVTpe%2B3rh633PZvkPE%2F7qH3ZjJAQRVgu8aMDKIwjIaOoVCeNGJIr2PVEcI9bGHH8z%2BXgaFIic2xT4HhMO%2F8%2BcQGOqUBzeqR8stelMVWEkGd87sY2Y5XncBtwOjQ8%2BLMr%2FugAlaqPCoAPOUsA8M1K0Uo0Tj7qcVudz1MrXPDoPK03IywRh%2Bivkc34Q37S64RNqxHbnKT9RJz1bTDmai8mIenOWiAh247qoHs4wZEaB%2Be9%2BDePrxgSjnNkcXRrb6NZC%2FEKQ7c9dw0ryHiSA5AA1HOz3RkG1TXe%2FZ2FTjI519juDCpYZyy8riw&X-Amz-Signature=d2f9b870329aaa56830c3ba67a21a1ae5c25a1ceabe94235025bbfd591f6f589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
