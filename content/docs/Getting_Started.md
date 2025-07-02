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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSLNOH3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG32y8VAHHTtK%2BPLPUS0A9ZnPQtmsexA5tij6s3b5x81AiBo4DWDV7FELBc4T3w6Gjx56a85eByKMYu6IDwisw5zTiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nmNCZHFvaiZaFX3KtwDLLWDDY6jFKLfd9YQQ%2BGd%2FY87gtFmNGRZTy3ByHHMmP11WzWZGVZVZktKPYcPU%2BVc2mFHZD7cVdGFrYDRSqQoabTxBAz5Ox0k1LizFwSp%2BD16VONCJcngebRHDopZ0IaYX7%2FBQaGVnW9FCAJReE9nbcLnV4vzdNoMT7UA031rrQX7hOwyhDOesUgNVBVJCheVgPHQH3oiJNgz1L2foSFQRUFWjgb%2BJTvNlDtzUbnsR76JwYD%2F5DYsXoetxhIterne0d0ZFhk%2F2PhqgMVMgjeAZMN0kl%2FGZxHCBN6vGe16zGlj5IHCHTWHOmfu6Epyzzq%2F3nyeGcXVWLYnT4pB%2Fbf%2F%2FDqwRzY92eZzRKbP3HOq4QN0I4r2XwuHOf269PR7DhL%2FJ6AqJg%2BTcHvcbW2DiWa3ngiYsKnp5XjKdrbyJQp6y9MXnM%2BVHodImgSo9Eg926%2BwGXXVakqKXcJGqrtJGBlsZrUGTlX7lYPsTwECQvCGXZN5BT2hiZw1VrvAaUSMGp4Z13FnOwlDowIzMyI%2FQi4qH6dke1zEXq9XvMby2v0P8%2B33Lko8mHCRM1Ohhd2wnr8PuV5qSBOZoMg4oGp2BcOSkpuzvVkJxvChi8Jc9eQ%2BgNd7ohuyHzJMkG7gu6QwmeKTwwY6pgFmX5wBc7bPCx%2F26bKO0LWA3Wpz6BoYstQq9nQQTA787UtpiH%2B9HAJVz304NYZ7GREG01nEhcjFz4%2FZucCva3I33NUUXW9kFgBg5NNwcCCcvOjOc112nZMQPOGaznHeYi%2FxlWkXkb5ZNRcS0w1BTU8nidVV16DSAKhTeuWCRy13rgLHxWZWrfHsIOjNk0mpZVzV0x6sdiEXICqxn%2BBM8kCvAnb%2FuRX6&X-Amz-Signature=c2483fabb621819e1836ef6898dec7a838fa59d45c3271f8d1e6b00972daafd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSLNOH3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG32y8VAHHTtK%2BPLPUS0A9ZnPQtmsexA5tij6s3b5x81AiBo4DWDV7FELBc4T3w6Gjx56a85eByKMYu6IDwisw5zTiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nmNCZHFvaiZaFX3KtwDLLWDDY6jFKLfd9YQQ%2BGd%2FY87gtFmNGRZTy3ByHHMmP11WzWZGVZVZktKPYcPU%2BVc2mFHZD7cVdGFrYDRSqQoabTxBAz5Ox0k1LizFwSp%2BD16VONCJcngebRHDopZ0IaYX7%2FBQaGVnW9FCAJReE9nbcLnV4vzdNoMT7UA031rrQX7hOwyhDOesUgNVBVJCheVgPHQH3oiJNgz1L2foSFQRUFWjgb%2BJTvNlDtzUbnsR76JwYD%2F5DYsXoetxhIterne0d0ZFhk%2F2PhqgMVMgjeAZMN0kl%2FGZxHCBN6vGe16zGlj5IHCHTWHOmfu6Epyzzq%2F3nyeGcXVWLYnT4pB%2Fbf%2F%2FDqwRzY92eZzRKbP3HOq4QN0I4r2XwuHOf269PR7DhL%2FJ6AqJg%2BTcHvcbW2DiWa3ngiYsKnp5XjKdrbyJQp6y9MXnM%2BVHodImgSo9Eg926%2BwGXXVakqKXcJGqrtJGBlsZrUGTlX7lYPsTwECQvCGXZN5BT2hiZw1VrvAaUSMGp4Z13FnOwlDowIzMyI%2FQi4qH6dke1zEXq9XvMby2v0P8%2B33Lko8mHCRM1Ohhd2wnr8PuV5qSBOZoMg4oGp2BcOSkpuzvVkJxvChi8Jc9eQ%2BgNd7ohuyHzJMkG7gu6QwmeKTwwY6pgFmX5wBc7bPCx%2F26bKO0LWA3Wpz6BoYstQq9nQQTA787UtpiH%2B9HAJVz304NYZ7GREG01nEhcjFz4%2FZucCva3I33NUUXW9kFgBg5NNwcCCcvOjOc112nZMQPOGaznHeYi%2FxlWkXkb5ZNRcS0w1BTU8nidVV16DSAKhTeuWCRy13rgLHxWZWrfHsIOjNk0mpZVzV0x6sdiEXICqxn%2BBM8kCvAnb%2FuRX6&X-Amz-Signature=a17a6081f2932c91f9a54cffb9739e2290b723798c4d02c6f8071bc2f16e075e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSLNOH3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG32y8VAHHTtK%2BPLPUS0A9ZnPQtmsexA5tij6s3b5x81AiBo4DWDV7FELBc4T3w6Gjx56a85eByKMYu6IDwisw5zTiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nmNCZHFvaiZaFX3KtwDLLWDDY6jFKLfd9YQQ%2BGd%2FY87gtFmNGRZTy3ByHHMmP11WzWZGVZVZktKPYcPU%2BVc2mFHZD7cVdGFrYDRSqQoabTxBAz5Ox0k1LizFwSp%2BD16VONCJcngebRHDopZ0IaYX7%2FBQaGVnW9FCAJReE9nbcLnV4vzdNoMT7UA031rrQX7hOwyhDOesUgNVBVJCheVgPHQH3oiJNgz1L2foSFQRUFWjgb%2BJTvNlDtzUbnsR76JwYD%2F5DYsXoetxhIterne0d0ZFhk%2F2PhqgMVMgjeAZMN0kl%2FGZxHCBN6vGe16zGlj5IHCHTWHOmfu6Epyzzq%2F3nyeGcXVWLYnT4pB%2Fbf%2F%2FDqwRzY92eZzRKbP3HOq4QN0I4r2XwuHOf269PR7DhL%2FJ6AqJg%2BTcHvcbW2DiWa3ngiYsKnp5XjKdrbyJQp6y9MXnM%2BVHodImgSo9Eg926%2BwGXXVakqKXcJGqrtJGBlsZrUGTlX7lYPsTwECQvCGXZN5BT2hiZw1VrvAaUSMGp4Z13FnOwlDowIzMyI%2FQi4qH6dke1zEXq9XvMby2v0P8%2B33Lko8mHCRM1Ohhd2wnr8PuV5qSBOZoMg4oGp2BcOSkpuzvVkJxvChi8Jc9eQ%2BgNd7ohuyHzJMkG7gu6QwmeKTwwY6pgFmX5wBc7bPCx%2F26bKO0LWA3Wpz6BoYstQq9nQQTA787UtpiH%2B9HAJVz304NYZ7GREG01nEhcjFz4%2FZucCva3I33NUUXW9kFgBg5NNwcCCcvOjOc112nZMQPOGaznHeYi%2FxlWkXkb5ZNRcS0w1BTU8nidVV16DSAKhTeuWCRy13rgLHxWZWrfHsIOjNk0mpZVzV0x6sdiEXICqxn%2BBM8kCvAnb%2FuRX6&X-Amz-Signature=76cfc48e05e1b184c270305f93efa442631848571c1f678878b800e7e526b3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCMFNQ6N%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvaGpzZrST4WRr0V7L4OIxKp76XN%2FrUgwir1PMXK1FRAiBEi7hM%2BOa88K7aYmDBihTrovgWK682%2BQr61%2FQx5YgLkSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIJptG2VJbK%2FZOGNKtwD3pA5Da2WoyNsltiz%2FpBQhpg7KRHC1BZdZxv82mB15%2BPHqvkR3AM2NH9wZuO108VoJZRl4oDrBtVAbTggmuRvl%2BJZJx5p7ZyyNVX%2B4fiiXfOSIsmactzMy%2Fbt7%2BBQkkyaTDup4bQtkaRUJ2YiF6gQjbEyhBnW8gBiyOPupQRr2v0Z3biV63bgB8MPL8zBv%2BRYXupT%2ByaC1EDo6KXVAFYVpuM0fsT9lawHHhbnbZVOi0dIAqttAmiT3VUwBo4CKizENzu2DvWtCs2trSnYKZ2%2Fhh%2BZXzwZX4%2BmR5L3RiI5Mq2kP8bP8kcIokrZQcaocFgqtQC0G31LvhXKYevHPunBI2kVABTZz6tdHP8dqUQ2S9nkjOIR76xFkdwDO5P9hnI1gIXVpmkbfPE0oXpx1VPvdnJFbgvbsRI2oEFc0iOAeNhZC13HpGQq1ffH55gx2t5WyVOppmNbMogLQCLJZPxQUHkTyL6ySKo0bYH13M38fslxOiZBNwar5608cT5EcQKG3euFrBMsXA0dIhljq3r6TF9hZosB%2F47OHBZBb1UIXjIYrF9O%2Fp%2BnTeHjKNnmbEcSiavP2IQX5ZF4RhpI%2FPtj8lFMKnbVtYK0NSJpo8hytA4AQQgd0jueFhCdZ4cw9uGTwwY6pgFUfBaKvkx%2Bn9rylz8pjI0mBl%2Fg5QiDn9uCM5Njm7%2FrEU8mul2C86JQLF1LC1qrs53YN1EsJ3%2BKiL%2FdYNVBvUppCgZsH9lBswCd9B13jtmJw5okTVdViH24y07M3FaBpVOsjzVPJEbH8kuCbjRToRErqdBJo0n9DpxMEWrQhb0T5ILBnSfXG4mh1xpqpr6z5ygfBfjYerkPCzUhDMRSlSy%2BH%2BVJZjZU&X-Amz-Signature=c7daa56b4fb42e7c8c7e7b57e907b627c2416eb7fcf2db26b8be93ee3eaea20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLCG6OO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3Nnfgyppk8ijLUw%2BrbJXuarpgvV4Eh1%2BQjVWzqGiHxAiBDmAY%2BiivnZft0hoA%2Bw2XLi1X8txAm5egAGFqUbxdwKyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4HjNB4yo9ot9r68KtwDpQ3B52W%2F65P3jA0XItyt%2BEqF1wAt8UXNmlXYviqWF5VwapB3LNUC2jEZL3XptJ2LxwT0gnleWLb%2FymBeOXX4xkbw4SlOgndY%2FZ4XoVX8pA1HXF9U5i%2BZ7bQl4r9WurxRwe8XeJ5awtM9GNQVdeBzBMA6uqMk4FYaS%2FMcRvjKqFCVMPSFhyYajY8e7TlFJGdhkGyMol%2BCyh28SEJrdaqxBRl2Z%2BgBdDIapVrouYO%2FzHcA5Iel7qKC%2FEKC3RIeXJovL8zCCGhXxpi4NtRzCtTvFFNALUzjNliPbpoNGL73fq%2FXQNPa%2FTpSsbPFo3QN3YwB4caULCtF51%2Fu6W2d5ZUbEyc0zhseBmIbnqVyjuSeAcxDkneoJGPve7hUvKWM9jnMGw1gHiP7eSirNH3%2BYwBfO4TfSgHpsKG6%2BGXEyehbUMZH4S%2FM09JSbt7MPJJYdG8TxuimllI3s7wexVkW99NMnIlLGjuk84%2Bvl5RtL9kLxi1uiQhaWJSAeFNujbiobrgjj4vKgBnAH%2B%2FHd0bNMWauQXoa4s%2FlyZH3%2F1dZKZ%2BFjd95%2BxJ3xLQlFo46uhLY2I9PAx%2FxQ2IQ5AIHJJJ7JMl1mqQLnSxDGQTGLArG3q6mwZB3qLhqhJscvUgPUEgwreKTwwY6pgHuamqTDhRTVlBJGKnCTjVE%2BgnnceOG6G3P592LDfjQMc%2FxaqAye3p0zwkIGc1T9vEDS2IwWjXUyUVXJAEdhxDoDl9zB2IxkZyQO%2BByxOEEon8gEMGCcCTr8VdYOSUQt%2F75PlQ0sYH9nDmHRh%2BwZZZEJxxvxH%2B2fJmJLtjCHN%2FTFLkU6NRGbOg5k4WrgNsWF6JhcVDfbO2zzgeogUyqzf8S0y2nJY9W&X-Amz-Signature=8a7196be25e085d6f12dd3a88ba15dedfc7129e96d109ae2ce9efc94c01742ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSLNOH3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG32y8VAHHTtK%2BPLPUS0A9ZnPQtmsexA5tij6s3b5x81AiBo4DWDV7FELBc4T3w6Gjx56a85eByKMYu6IDwisw5zTiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nmNCZHFvaiZaFX3KtwDLLWDDY6jFKLfd9YQQ%2BGd%2FY87gtFmNGRZTy3ByHHMmP11WzWZGVZVZktKPYcPU%2BVc2mFHZD7cVdGFrYDRSqQoabTxBAz5Ox0k1LizFwSp%2BD16VONCJcngebRHDopZ0IaYX7%2FBQaGVnW9FCAJReE9nbcLnV4vzdNoMT7UA031rrQX7hOwyhDOesUgNVBVJCheVgPHQH3oiJNgz1L2foSFQRUFWjgb%2BJTvNlDtzUbnsR76JwYD%2F5DYsXoetxhIterne0d0ZFhk%2F2PhqgMVMgjeAZMN0kl%2FGZxHCBN6vGe16zGlj5IHCHTWHOmfu6Epyzzq%2F3nyeGcXVWLYnT4pB%2Fbf%2F%2FDqwRzY92eZzRKbP3HOq4QN0I4r2XwuHOf269PR7DhL%2FJ6AqJg%2BTcHvcbW2DiWa3ngiYsKnp5XjKdrbyJQp6y9MXnM%2BVHodImgSo9Eg926%2BwGXXVakqKXcJGqrtJGBlsZrUGTlX7lYPsTwECQvCGXZN5BT2hiZw1VrvAaUSMGp4Z13FnOwlDowIzMyI%2FQi4qH6dke1zEXq9XvMby2v0P8%2B33Lko8mHCRM1Ohhd2wnr8PuV5qSBOZoMg4oGp2BcOSkpuzvVkJxvChi8Jc9eQ%2BgNd7ohuyHzJMkG7gu6QwmeKTwwY6pgFmX5wBc7bPCx%2F26bKO0LWA3Wpz6BoYstQq9nQQTA787UtpiH%2B9HAJVz304NYZ7GREG01nEhcjFz4%2FZucCva3I33NUUXW9kFgBg5NNwcCCcvOjOc112nZMQPOGaznHeYi%2FxlWkXkb5ZNRcS0w1BTU8nidVV16DSAKhTeuWCRy13rgLHxWZWrfHsIOjNk0mpZVzV0x6sdiEXICqxn%2BBM8kCvAnb%2FuRX6&X-Amz-Signature=f0b98679c27eb8a76097d5c6619a0072cf4fe8a66a47e181b35620f4c4684853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
