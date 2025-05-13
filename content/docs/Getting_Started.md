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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULOHZXI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGLCtFA0v%2FnzImMP%2FeYc%2BxW0MD4AqVtGzKNzMRB%2BEiyVAiEAn1ytUlhtF38xIT46j5lopAxtGhqY5H2nN20JuvFXVYoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPnck%2BAK63LWe%2FBsyrcA%2BiJHa1o9jbVGLYcwlq5JNgAEu8yz5z0gTaGD1vtcyb7p%2Bbgwd0vYI%2F7BaRMpd7CGcgFcUJgFPtpG%2Fuid4skwrp1ta%2B5rP7QyezsIQHEqjMhSPTO1kZXlg%2BVZUE0RJBm%2Fy9z4U9hZcMlLcT5%2FQ%2BVCqI4a5vsgJkTS%2FGxst2NckqP8f87LBUaJ88s3KvrYPid40lEZSfCXEqp2JwR1r3AFCbFK7I%2FQZey6iwy12l5znDTK28EOES2RZRcy4ZA1q8oJmTXNUMKZfPsnR%2BaAEQhD9G%2FWmGu0HI3JlxPXbSwSlahfy0gr7UmhJCkFN4M3yBq7dc7IIo%2FXD7wp557SvT%2B0XbXUY1tXwwoA6kOMYq%2BbLoMs%2BCa07LrZrYspTj8xN5bopa2x47%2FZ1bHmE3mXl2beYAyNCtZy3rNoekf1iP6MSLQMchnavItkbBO2PssvV%2F5QqXJxAiAbw23omzVsUWmFmIqvG0c2cXw4oz%2FReyo9PodXbvXIHBuzjUqFKaxclDOb%2B8PKVuP1ARdyxeAPo%2FPLfSGSr0otismvHe%2F3U9yFS4tcI%2Bu0NEDmtnb%2B8V99Nit9l%2FSHojxkeKvg%2FzDpIgtsvutXsBiW76vX5cEhsWE8yeLOnU2Gci%2B8pPvoyGrMJTZi8EGOqUBQSFGLBCChIkmgLpL4H1oSDydRQ7ZJx0wKWoYpVYbiNgc5gXK8cCv%2BFrMWmqaKeyrnPPSf5oM9m1qh%2BIgLsVxiqiIKHEUXTlQgclgAd7Tx6dv0zRvTFTFiuHYwYcbmncFhl7DoEiq3su4xGo3prDRqd2%2F%2FJMLVYohrUAbEW3Zcd47GmnDD5wl4m%2FLxT0oCT0BUIDUUHWg7YP3wYMM70m2kY6XZe9G&X-Amz-Signature=8d30dbc58d97affdf93edbd446a74f7054a2a7b5c191272b0620addc1f62fd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULOHZXI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGLCtFA0v%2FnzImMP%2FeYc%2BxW0MD4AqVtGzKNzMRB%2BEiyVAiEAn1ytUlhtF38xIT46j5lopAxtGhqY5H2nN20JuvFXVYoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPnck%2BAK63LWe%2FBsyrcA%2BiJHa1o9jbVGLYcwlq5JNgAEu8yz5z0gTaGD1vtcyb7p%2Bbgwd0vYI%2F7BaRMpd7CGcgFcUJgFPtpG%2Fuid4skwrp1ta%2B5rP7QyezsIQHEqjMhSPTO1kZXlg%2BVZUE0RJBm%2Fy9z4U9hZcMlLcT5%2FQ%2BVCqI4a5vsgJkTS%2FGxst2NckqP8f87LBUaJ88s3KvrYPid40lEZSfCXEqp2JwR1r3AFCbFK7I%2FQZey6iwy12l5znDTK28EOES2RZRcy4ZA1q8oJmTXNUMKZfPsnR%2BaAEQhD9G%2FWmGu0HI3JlxPXbSwSlahfy0gr7UmhJCkFN4M3yBq7dc7IIo%2FXD7wp557SvT%2B0XbXUY1tXwwoA6kOMYq%2BbLoMs%2BCa07LrZrYspTj8xN5bopa2x47%2FZ1bHmE3mXl2beYAyNCtZy3rNoekf1iP6MSLQMchnavItkbBO2PssvV%2F5QqXJxAiAbw23omzVsUWmFmIqvG0c2cXw4oz%2FReyo9PodXbvXIHBuzjUqFKaxclDOb%2B8PKVuP1ARdyxeAPo%2FPLfSGSr0otismvHe%2F3U9yFS4tcI%2Bu0NEDmtnb%2B8V99Nit9l%2FSHojxkeKvg%2FzDpIgtsvutXsBiW76vX5cEhsWE8yeLOnU2Gci%2B8pPvoyGrMJTZi8EGOqUBQSFGLBCChIkmgLpL4H1oSDydRQ7ZJx0wKWoYpVYbiNgc5gXK8cCv%2BFrMWmqaKeyrnPPSf5oM9m1qh%2BIgLsVxiqiIKHEUXTlQgclgAd7Tx6dv0zRvTFTFiuHYwYcbmncFhl7DoEiq3su4xGo3prDRqd2%2F%2FJMLVYohrUAbEW3Zcd47GmnDD5wl4m%2FLxT0oCT0BUIDUUHWg7YP3wYMM70m2kY6XZe9G&X-Amz-Signature=c46ac6dbe6266e82d1ce8f4c0ccca01a5640fb6b3e443a2325790ce8cf5bcb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULOHZXI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGLCtFA0v%2FnzImMP%2FeYc%2BxW0MD4AqVtGzKNzMRB%2BEiyVAiEAn1ytUlhtF38xIT46j5lopAxtGhqY5H2nN20JuvFXVYoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPnck%2BAK63LWe%2FBsyrcA%2BiJHa1o9jbVGLYcwlq5JNgAEu8yz5z0gTaGD1vtcyb7p%2Bbgwd0vYI%2F7BaRMpd7CGcgFcUJgFPtpG%2Fuid4skwrp1ta%2B5rP7QyezsIQHEqjMhSPTO1kZXlg%2BVZUE0RJBm%2Fy9z4U9hZcMlLcT5%2FQ%2BVCqI4a5vsgJkTS%2FGxst2NckqP8f87LBUaJ88s3KvrYPid40lEZSfCXEqp2JwR1r3AFCbFK7I%2FQZey6iwy12l5znDTK28EOES2RZRcy4ZA1q8oJmTXNUMKZfPsnR%2BaAEQhD9G%2FWmGu0HI3JlxPXbSwSlahfy0gr7UmhJCkFN4M3yBq7dc7IIo%2FXD7wp557SvT%2B0XbXUY1tXwwoA6kOMYq%2BbLoMs%2BCa07LrZrYspTj8xN5bopa2x47%2FZ1bHmE3mXl2beYAyNCtZy3rNoekf1iP6MSLQMchnavItkbBO2PssvV%2F5QqXJxAiAbw23omzVsUWmFmIqvG0c2cXw4oz%2FReyo9PodXbvXIHBuzjUqFKaxclDOb%2B8PKVuP1ARdyxeAPo%2FPLfSGSr0otismvHe%2F3U9yFS4tcI%2Bu0NEDmtnb%2B8V99Nit9l%2FSHojxkeKvg%2FzDpIgtsvutXsBiW76vX5cEhsWE8yeLOnU2Gci%2B8pPvoyGrMJTZi8EGOqUBQSFGLBCChIkmgLpL4H1oSDydRQ7ZJx0wKWoYpVYbiNgc5gXK8cCv%2BFrMWmqaKeyrnPPSf5oM9m1qh%2BIgLsVxiqiIKHEUXTlQgclgAd7Tx6dv0zRvTFTFiuHYwYcbmncFhl7DoEiq3su4xGo3prDRqd2%2F%2FJMLVYohrUAbEW3Zcd47GmnDD5wl4m%2FLxT0oCT0BUIDUUHWg7YP3wYMM70m2kY6XZe9G&X-Amz-Signature=d1abdc7b2245cf69911fa8a08ace0a679727030b64bd5d785c004e161057ba05&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MY472ZY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIA3mQEnG38H0FKZs%2FoaIiHZj6eiIrGjj4aoQDTGgzBHnAiAgctftrg5PDCsGIpwsk6KcreFKexXk9djyHiYJp72XECqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPICb3tVNNPboONTOKtwDqbWASCa23KuPYDU56OsdmLkDXrqlD%2FyA8eTgAQEKkWMPnHKTbLt4UC56a0%2FmMpGgiWrnfKYOulRlBVBmVDQZ%2BtMIrky4X%2Fv4rKHJi4OmNrA3iI3w1pq8%2BYTXQx0MEFATNvlamNATYQjp%2B%2BvsgYVqhBwXqozpqKq6b4OXBnRgkxrlsq1bpkdyjh16ywXMWkzcBCB%2BbUZYtDT%2FAcl4H1AXYruKZ0qBLqmR%2Fc3E3JlhgQe29Jpk%2BZIcoml9MznmT5eQ5AsVA%2Bt8t33rH%2FW%2F1r4OCuUvcGn93zivgjiJmPzRnKKaG6eZU3KFBS1TLWJt%2FosahxFV%2B2IMTijUeEUVXzd3QDuyquKPafjQ4nNspwO%2BNP9Rg1%2BC6Rj0VOfkz37rABtLQuWsHMCumbnbvbqQaiNk8afR5hFqKXRVr996g7nC2Uzq6NsbVUryAillMpVru26OfLeO1n3Esqvam4kdWELun1529wXcZ0alTjP%2FL%2BtopFNutBGW5Wc34YrP%2B9BrXu4KaLDaEpwLaRrA16aQDoNK2nODylXk1%2Fel6kBsIljIugB8kKM4Q4iP4o4F2t9fXazPjv8SeKi7foDiMJGuzpkZVKIArzwtZTx8NvP8vUx8SjA5jBJYjhQCCnPLqBAwk9qLwQY6pgHm2%2B1oR%2F8aktfZ8xb5nFQm16kMcTDZQdBsW%2BOk1jp4RINGLRT5NuTIMvFYtSzbKzLxIQsD4lOH1hfB5%2BIUtuq8Mz%2B%2FFN7AOTbfC2Z%2B28jwGNhMdf78alUUpAEJSgUp3OIA5jHZLsMfxb1C6k4H9LeDllHH01pe%2FZYQPUDiHwCgUiTGMjxhUG6ISeF43l%2BJYlTc0ZgIi4wWKjcaWJtqWhzQGGgwMYeJ&X-Amz-Signature=a0f01c33158f1d10162ac06b7a23198c9c2f104676f27ad63a462d3344a2ea54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IONYS6U%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEf%2F5ODEk%2FlG6zbkdCvf0xgDeio9d29O00wDobzemmKjAiBJknKformHrE%2Be2YkZ1OI6ELNqiWH%2FbKI8qkC0po%2F2aiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMidRGSTKQYYKB6%2BNfKtwDAeLqTk%2B4oDkBtVyxBE3Zsb1tIOMB1omSDtXXrqdFvpr9dafae9FJcBnz9%2BBMQ7YdfYNRuba3P3bsN76dWMFmVUeCyc4IKfze5zE%2F5S0fxDytmH5sbPihg0t%2BKJLRnHfmDjQVWbZ9Mq22SD4U4DPfFu3rR631Li47t24R5ygO4D10WRCFMn5LkWAv9x17WyjZl3Eb2jaKylpj5%2Bbbb61kJhU8hvCVzHcHQlGJcuCbmTyDI4HPDohVGzc0tKjaIEnJreM%2Bbwuw0VE1iFsdA3EKPqs2jpRjL6ubMg6q1d1jVO9RJ0ZhpUJ%2FPZ6KPXouenU9vBp4nuapdE6ddpLJGkrhaecTUWR2rMEhzJlWI4k7NVy0%2FjCBGOTehbgZAG8P8FH54yZD77iGW%2B%2BkkV%2B2mZXJCx%2BzYdt5gFvggF5Fxk13b0X9UlEHzV3vy6vCQ4tU%2B3bC%2F84WL%2BzJJxxncCBj9hRDvRrdeivXwBm2MjLCh7u4orEClU88x6PRT5uvHUrNME3e3wLBNewuKa0Vu7mQ2pRZTJPrjECfSLzAwC%2FYpDiWEXJbbxbGYgmJqSolx4iugGLiD22ELHm%2Fi7QG2iq%2BcPnOHCqFW4PpumGcZyWrP1mXWxS6R1GscN6ZuaHxCGIwjtmLwQY6pgF6m5HKhd0w7pPdbYmMs2NdSN1l73tbBkLTe0tvAm08gzKju0pdv67oO5jBktUCFXygGX1GaZf5RMuxPDAgefPIx4aHw5DITEpVNmzhdaKQY%2Fiif%2ByRDNb6nGj9vzRYOmA82oCdPht9sJBLUvPn%2Bi2LuPAwepVVR%2BbcoWYnuquxezTKb4TLIExNtAh%2BZQ2SwxcbM3PX6rCKV5%2BSatVBfibFaC%2BW3kZf&X-Amz-Signature=0cb1102763e92bb15fc4633dc73c225af0914aa0e30cd9985d6191ee034ca722&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULOHZXI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGLCtFA0v%2FnzImMP%2FeYc%2BxW0MD4AqVtGzKNzMRB%2BEiyVAiEAn1ytUlhtF38xIT46j5lopAxtGhqY5H2nN20JuvFXVYoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPnck%2BAK63LWe%2FBsyrcA%2BiJHa1o9jbVGLYcwlq5JNgAEu8yz5z0gTaGD1vtcyb7p%2Bbgwd0vYI%2F7BaRMpd7CGcgFcUJgFPtpG%2Fuid4skwrp1ta%2B5rP7QyezsIQHEqjMhSPTO1kZXlg%2BVZUE0RJBm%2Fy9z4U9hZcMlLcT5%2FQ%2BVCqI4a5vsgJkTS%2FGxst2NckqP8f87LBUaJ88s3KvrYPid40lEZSfCXEqp2JwR1r3AFCbFK7I%2FQZey6iwy12l5znDTK28EOES2RZRcy4ZA1q8oJmTXNUMKZfPsnR%2BaAEQhD9G%2FWmGu0HI3JlxPXbSwSlahfy0gr7UmhJCkFN4M3yBq7dc7IIo%2FXD7wp557SvT%2B0XbXUY1tXwwoA6kOMYq%2BbLoMs%2BCa07LrZrYspTj8xN5bopa2x47%2FZ1bHmE3mXl2beYAyNCtZy3rNoekf1iP6MSLQMchnavItkbBO2PssvV%2F5QqXJxAiAbw23omzVsUWmFmIqvG0c2cXw4oz%2FReyo9PodXbvXIHBuzjUqFKaxclDOb%2B8PKVuP1ARdyxeAPo%2FPLfSGSr0otismvHe%2F3U9yFS4tcI%2Bu0NEDmtnb%2B8V99Nit9l%2FSHojxkeKvg%2FzDpIgtsvutXsBiW76vX5cEhsWE8yeLOnU2Gci%2B8pPvoyGrMJTZi8EGOqUBQSFGLBCChIkmgLpL4H1oSDydRQ7ZJx0wKWoYpVYbiNgc5gXK8cCv%2BFrMWmqaKeyrnPPSf5oM9m1qh%2BIgLsVxiqiIKHEUXTlQgclgAd7Tx6dv0zRvTFTFiuHYwYcbmncFhl7DoEiq3su4xGo3prDRqd2%2F%2FJMLVYohrUAbEW3Zcd47GmnDD5wl4m%2FLxT0oCT0BUIDUUHWg7YP3wYMM70m2kY6XZe9G&X-Amz-Signature=e4a4d2e2db08be2dafa0d021313803cd392af3b0a83c4a2f599e1ce23aa8cdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
