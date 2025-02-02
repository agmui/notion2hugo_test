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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJYENBQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxbnbdgbcn1bD9Q22J62b7Pt6%2ByZrHZrPlc%2BYpbylZ7AiAWYQa7qk1fXZZr6gHcim2I%2BuiwgjrsNQhvZgbQCmW03yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71JEMnY1Wtrrx5s3KtwDNBZ3kuo3vOxywv1E56rN5TxodEL%2FaUIXML2Bt5DeUBXHe%2Fr%2FY5Y2ZnWU6fBluhzUSKKL%2BGVqcG%2FFk6lbS6zOJnNN%2B%2Bl2ntiYa1MTueXBdP4UNRY5Pco9%2F2uAfFBqcNo2qyG9yPLYuldG9cRWyopS9Vrz67G61eWsDyptw3wkAABYDLsNUu2XkpAm4sIHoDbBemH%2F6zl4ePFVl6zmh020WBpnZCYHoPBxaJAaHKgARqrIswOsPIxY2cznhUJuvuMJ7Nm4mD2Bg88Utv4grPXy1YUe0cKYiDBfQhMs8erF%2FeQYnLcuH5s7k8rhclqr9YAvWPnLFpyC5nzMzZe6cKd9ebpIjqjnl9VGibp3zSH4ZZYGBQ%2FZy48Me3P4HoXT4ipt9WldKK%2Fs0JaDV5aSz0cZwUSrR2rDdU%2FAv7dX4RBkhXpaBquWXcdBWrYivTIcYl6gsAPPPTP%2Bnhpj58pD6XILRPc7K3gUNuvunmrrP5E4JI6Qgfrdfta2OXPuLbDEgcTX3tisIOgWitHk7GavbJ%2BV99jcKbR%2FmDNV%2ByIMtN1VUyzem3XCtQmo8b0ga30u1ztrkoE%2B%2BoLz6kd1HNbMNQW4sxeX9SoLnu21fxP9fHETT4CHv1xJkT7eKug1Uc8w%2FJz8vAY6pgEKbYop0iry652DKZEIuY95p0GctVmVg1Ya4vyb1V7qlIkP%2BeK8YVrVqrRiz9CU50zp4aBOJEpVrmZL6gpecdCr046CVW%2FGMiA3IMke3uJpviKg4Fcf%2BWA8LkqojLkkiP7j0jdUHPq6Xh%2F%2BqnZHJ3F2hznuQ76lNZ5rA3uXSyDPnhRiAEZ3jlLn4gKG9jbvHVSpISFTjiR9sSLORRQhK367bmY8Or5X&X-Amz-Signature=576f2ce2990c11e3a6f4a869e27c3a4f2b6c8358f2d87a12e7f4d07029213c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJYENBQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxbnbdgbcn1bD9Q22J62b7Pt6%2ByZrHZrPlc%2BYpbylZ7AiAWYQa7qk1fXZZr6gHcim2I%2BuiwgjrsNQhvZgbQCmW03yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71JEMnY1Wtrrx5s3KtwDNBZ3kuo3vOxywv1E56rN5TxodEL%2FaUIXML2Bt5DeUBXHe%2Fr%2FY5Y2ZnWU6fBluhzUSKKL%2BGVqcG%2FFk6lbS6zOJnNN%2B%2Bl2ntiYa1MTueXBdP4UNRY5Pco9%2F2uAfFBqcNo2qyG9yPLYuldG9cRWyopS9Vrz67G61eWsDyptw3wkAABYDLsNUu2XkpAm4sIHoDbBemH%2F6zl4ePFVl6zmh020WBpnZCYHoPBxaJAaHKgARqrIswOsPIxY2cznhUJuvuMJ7Nm4mD2Bg88Utv4grPXy1YUe0cKYiDBfQhMs8erF%2FeQYnLcuH5s7k8rhclqr9YAvWPnLFpyC5nzMzZe6cKd9ebpIjqjnl9VGibp3zSH4ZZYGBQ%2FZy48Me3P4HoXT4ipt9WldKK%2Fs0JaDV5aSz0cZwUSrR2rDdU%2FAv7dX4RBkhXpaBquWXcdBWrYivTIcYl6gsAPPPTP%2Bnhpj58pD6XILRPc7K3gUNuvunmrrP5E4JI6Qgfrdfta2OXPuLbDEgcTX3tisIOgWitHk7GavbJ%2BV99jcKbR%2FmDNV%2ByIMtN1VUyzem3XCtQmo8b0ga30u1ztrkoE%2B%2BoLz6kd1HNbMNQW4sxeX9SoLnu21fxP9fHETT4CHv1xJkT7eKug1Uc8w%2FJz8vAY6pgEKbYop0iry652DKZEIuY95p0GctVmVg1Ya4vyb1V7qlIkP%2BeK8YVrVqrRiz9CU50zp4aBOJEpVrmZL6gpecdCr046CVW%2FGMiA3IMke3uJpviKg4Fcf%2BWA8LkqojLkkiP7j0jdUHPq6Xh%2F%2BqnZHJ3F2hznuQ76lNZ5rA3uXSyDPnhRiAEZ3jlLn4gKG9jbvHVSpISFTjiR9sSLORRQhK367bmY8Or5X&X-Amz-Signature=2d74b7658f34fc603a13a7ae1ef3775c72c0daae5713118b3b9237d2645c6939&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSDGV4ZR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq8kv%2Bv9dzhhK44NRp8E%2BPnHnme%2B6Ua58BfvtE6oPlnwIhALy4%2BmVjPTPTeJ5wm8l0RyDy2pH72EDwPyk4DIN08aDIKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLQAtIrF0cWETpVzMq3AOeYGk9OJwtPmCXMVJHvpcWQL2E%2Fq5yNCWXNaUu9BCw9npZL3ToyJZOFnZ8VExBVtTopMUMYI7Ak6y9iDVB9VNSQYECp7XFQ%2Fb%2Bd8FgKLK9PHBwfpc3mlcu0jEy5PGYkxVJ%2B%2BBIW5Psf7%2FnS5bmGW8n%2F9PxEFRHKDQUPfyYMSYIXHVAPCJx%2Fw0UiEM19%2Bw7QLxyBmYIi6UM23%2FMqlJoUXbRhowsmD39myyuZrl47meNN3RH7QpcNOfF24b1r1iUkgOYulE6jvMPXhKcyTum2A4KB2aDtaHTDF06oKKpGS85exmpxCt1k4YjbRdtHCgbPr%2F6gexgZXdAPV59eAfb4ZSKwbkF3DKQz8kaCiFuEBBxW17pZtDjmvA4OEb6GjDCMmr37AP5B9LFHd9hyDeMhqO%2FSgyLWlkOVQ1gw29xE7f6aWaRTWg5E%2F6unlE3uxdPoy7hBwYB%2BRmxXp3AXgu4HJfPvnOrDM7LYaJ05TmK5I8rVnbWcbB5l4%2FeWUW3cejfXjemHS39%2Baf4w4xMNj0Vl0HCaiam8SbzNhT52esWNfOZVy7F9ZTwj1eOODQxK64TH4IJnkNnOSXRB1FeKx60R2F2vPnp6H5l1gPNdWFi5eNAjUyooHoKoI5MXunfrzDrnfy8BjqkAdQf%2Bi94NAzimx2CbOjG1H9RxdwK0oEjxMvj4ac4j3YP8MOYvDWA5gOwpRwT00ew87dDWRu6wKyDN4H1BgP1j9Jc7XOGyQN%2FIXDlqXVtY4Fl4v6%2FVU5uCcUCkisMrO8gjMXs80ETQqowKalA%2BKLa3w4zclXMonMuYBYS6e86mT6A8FsWCo3saGeQRKvPd%2B0CzdPuWOURPdDZ19pDaGTCXTefdbum&X-Amz-Signature=279e884ad92a0ea5181c85c150645cfbec15737d8ed7d39d3223c33a392c3b36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2XA4K5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2oYKAtK8og6sfPzW2CXYoGiisLaNwfO6gcnvtoXM46AiAsWIijoy4APDHiQJkJLcuHZvdxc5jUJGpFi1sy1hGwYiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5va4GuNWlw1BHg9KtwDGwu4WtJkBz6RMyVaZzPc7QTuRFcgXONNoeOa3izFiAFU3rsbbwSsHG16oy2ENZAqjLpWgvlSSajkZPkU9RY%2F4WdFDFzsNWas90DNH4e0S%2B1QGVTMQx2W%2Fgt1kS5QB%2FYo3fsOsKFGPIYgx0YsEYBMMqdBgZXXS24TcacQMJD3BOtxvHSO5coed0p6b8DRX4797Y%2BbzHpIGmiwPjjHQ21g7AXPvCU4%2FWyhc5xoA2jYkDSbjBnKNTpt4q%2FRxadERLh%2BzRTtDKjxvUxGWKgO8GyxouGvcqZDQYwBEW%2BpUsCp5rUaEmSf0P6oEWV8BbHp91geqyV1QEwzqD7Y7p6%2F7YySPQzmYGLRdEceMS7xKwMVuOjdbeArXLfPTDcourM556U%2Fq3jL5o7FSBNWY95xoCSrxnrWNgJg1FD4kw8TyI8z%2FeOkiX%2F3%2FV2kfegkCkRj7o5exHE9TeOC53HPwyaF3%2BkBIeL4nnkW4y2MBMXyJnY6T%2B7u7AxLmLWX7Jqj%2FASgoWNqScUJmRRu49wZ9g4%2BQcQuiCd%2BlezN8QImMaLKDe5dsAZWqPEGXjPvPTOl2gEHyuvPTASve%2Fbi0sNIolpTeGgnqOGfD5s51g0FOrICzIYHHQvgGEl8f0wNFL4ussQw%2FZz8vAY6pgH4G3FNvY%2BRPqq1sk8KQIdOiBydzLPSka%2BCim10D4DA8PRa4BqXLBnCu7NQxqk%2FPUmXm8ArtH%2FVL2oHm9dyyuAnUq3F6IVGd5qUX7R%2FjNTfWzXtZFsprAisHvWjMXFDR4huP2jaNopMzXusRnMUgjBfT05nMIteEVn%2BRpzvvo2pVw2UBeVT1Nl6RmY1uMk7GcnxIynxFpJSKSFPvFXAVPP%2By6lvkWdI&X-Amz-Signature=29938543a022c0f8a6e7631a882edf387bcef55173a07d93cbe8f5fa4937ceac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJYENBQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxbnbdgbcn1bD9Q22J62b7Pt6%2ByZrHZrPlc%2BYpbylZ7AiAWYQa7qk1fXZZr6gHcim2I%2BuiwgjrsNQhvZgbQCmW03yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71JEMnY1Wtrrx5s3KtwDNBZ3kuo3vOxywv1E56rN5TxodEL%2FaUIXML2Bt5DeUBXHe%2Fr%2FY5Y2ZnWU6fBluhzUSKKL%2BGVqcG%2FFk6lbS6zOJnNN%2B%2Bl2ntiYa1MTueXBdP4UNRY5Pco9%2F2uAfFBqcNo2qyG9yPLYuldG9cRWyopS9Vrz67G61eWsDyptw3wkAABYDLsNUu2XkpAm4sIHoDbBemH%2F6zl4ePFVl6zmh020WBpnZCYHoPBxaJAaHKgARqrIswOsPIxY2cznhUJuvuMJ7Nm4mD2Bg88Utv4grPXy1YUe0cKYiDBfQhMs8erF%2FeQYnLcuH5s7k8rhclqr9YAvWPnLFpyC5nzMzZe6cKd9ebpIjqjnl9VGibp3zSH4ZZYGBQ%2FZy48Me3P4HoXT4ipt9WldKK%2Fs0JaDV5aSz0cZwUSrR2rDdU%2FAv7dX4RBkhXpaBquWXcdBWrYivTIcYl6gsAPPPTP%2Bnhpj58pD6XILRPc7K3gUNuvunmrrP5E4JI6Qgfrdfta2OXPuLbDEgcTX3tisIOgWitHk7GavbJ%2BV99jcKbR%2FmDNV%2ByIMtN1VUyzem3XCtQmo8b0ga30u1ztrkoE%2B%2BoLz6kd1HNbMNQW4sxeX9SoLnu21fxP9fHETT4CHv1xJkT7eKug1Uc8w%2FJz8vAY6pgEKbYop0iry652DKZEIuY95p0GctVmVg1Ya4vyb1V7qlIkP%2BeK8YVrVqrRiz9CU50zp4aBOJEpVrmZL6gpecdCr046CVW%2FGMiA3IMke3uJpviKg4Fcf%2BWA8LkqojLkkiP7j0jdUHPq6Xh%2F%2BqnZHJ3F2hznuQ76lNZ5rA3uXSyDPnhRiAEZ3jlLn4gKG9jbvHVSpISFTjiR9sSLORRQhK367bmY8Or5X&X-Amz-Signature=9ca7df09bfbe052c9776b9e2f3e5b653cf8c33301647faa705a0501559818151&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
