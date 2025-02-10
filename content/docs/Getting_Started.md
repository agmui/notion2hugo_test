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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUC5JL6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKeLzaBKr0nXravalg2FaRQgl4ZlSBru6HeNT5ZoxawIhAJOxh8EbRP0P8WMWIWPCvlDl%2FBiZnexEjDipxPVoQswwKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymmiWSiN2%2Fv4D%2BdWAq3ANOlNwvIq0YGN8nFoNvcfSYYTSjL633X3FhMbcTOVaMqKNPS7BS1F%2FACHHMHMM6RJ%2BEcVhIzhcxF7l9D1SJDPbAhnbrAUtDD1n9P6eM6%2BT0abvRKxT%2F7ZOBsXvPUY744%2Fm52HnQNjxvYa4z6RskY%2Btf%2BdhbKwLHHSv1nqS3zjhaOfAR6w5IvSZxyJZhlvyJdAX1f6LRqohfj7hhOdFXRq%2BuYPuL7Eekxnv43FQiuhu6IUvBAiUdowbTbU%2FtIK%2BDatss%2BBa4CKP571jJf6cR7NvOwYBRre%2B46slemVO0PXALmr6bjwxq3FK8UJ7l3QcOZLdpzHg7goxgG8w5QWXcLIRDFWuAk1hNqyFpSKCr3pyouU3g%2BKOH%2F1pxmdgVa8oos9ok%2BAyxHhERg%2B%2BAzMuX3DKApPlsNhtPOi6VC67dWWZHmWyMYTmGWV9XFgQnxDqtlOkK7pmFsxOwB%2BgZJPRdKUMJMuYx%2Baj1BJ10Fdf%2B4%2FryseSwhu72hHz%2FrUACYui7P%2BM2B6C075CpKcL%2F4l4NdJaXBaecjXsuShYil1Blq7FMzx2cF3t54I5OIgIsodK0ANiMhgyyOlBVHpbdf%2FEh5O%2FInQuX4HmfgJ46Cwt%2FMZadBrKs4GQrRg818GR1ozDtl6m9BjqkAYUAVPa169ABn8w0o%2FrUtm2O5Sn3Q%2BOxT1kZDHuqktCsAZdDZ%2BGP17hJVGtU0wapAhbwfuFT0y0tnPsihOx20l0wy68obagvfbLtHfRXAoLzRCH2ynBAKw3x8xUQLbkmrlUEH2%2BpSvs529kUBI6MG%2FLGhWYHRKdmKHLwUU0bpGmFtmqVCNukvhsrulqRnDaIm7NyGsB0vGSUTT7ypCwpSxrLWjwo&X-Amz-Signature=5838216708f3b2802af42d17fb9ff2bf5ecbd2d9d6c3e7b78030fa01225287dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUC5JL6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKeLzaBKr0nXravalg2FaRQgl4ZlSBru6HeNT5ZoxawIhAJOxh8EbRP0P8WMWIWPCvlDl%2FBiZnexEjDipxPVoQswwKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymmiWSiN2%2Fv4D%2BdWAq3ANOlNwvIq0YGN8nFoNvcfSYYTSjL633X3FhMbcTOVaMqKNPS7BS1F%2FACHHMHMM6RJ%2BEcVhIzhcxF7l9D1SJDPbAhnbrAUtDD1n9P6eM6%2BT0abvRKxT%2F7ZOBsXvPUY744%2Fm52HnQNjxvYa4z6RskY%2Btf%2BdhbKwLHHSv1nqS3zjhaOfAR6w5IvSZxyJZhlvyJdAX1f6LRqohfj7hhOdFXRq%2BuYPuL7Eekxnv43FQiuhu6IUvBAiUdowbTbU%2FtIK%2BDatss%2BBa4CKP571jJf6cR7NvOwYBRre%2B46slemVO0PXALmr6bjwxq3FK8UJ7l3QcOZLdpzHg7goxgG8w5QWXcLIRDFWuAk1hNqyFpSKCr3pyouU3g%2BKOH%2F1pxmdgVa8oos9ok%2BAyxHhERg%2B%2BAzMuX3DKApPlsNhtPOi6VC67dWWZHmWyMYTmGWV9XFgQnxDqtlOkK7pmFsxOwB%2BgZJPRdKUMJMuYx%2Baj1BJ10Fdf%2B4%2FryseSwhu72hHz%2FrUACYui7P%2BM2B6C075CpKcL%2F4l4NdJaXBaecjXsuShYil1Blq7FMzx2cF3t54I5OIgIsodK0ANiMhgyyOlBVHpbdf%2FEh5O%2FInQuX4HmfgJ46Cwt%2FMZadBrKs4GQrRg818GR1ozDtl6m9BjqkAYUAVPa169ABn8w0o%2FrUtm2O5Sn3Q%2BOxT1kZDHuqktCsAZdDZ%2BGP17hJVGtU0wapAhbwfuFT0y0tnPsihOx20l0wy68obagvfbLtHfRXAoLzRCH2ynBAKw3x8xUQLbkmrlUEH2%2BpSvs529kUBI6MG%2FLGhWYHRKdmKHLwUU0bpGmFtmqVCNukvhsrulqRnDaIm7NyGsB0vGSUTT7ypCwpSxrLWjwo&X-Amz-Signature=efe212603888caa13284b6c955a1c47cf690c8a3ebbe10830d26f41d5a889c11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYSORET%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyTSzGZi3AVgCgqnN7prDaiDmwlfonpvGqBCcFLxFOEAiEA4AvzYvBeANUxTqGHoSzaoXHcB5UJiA3fzgs7f2QxPhwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2oJPDr18zijj1DWCrcAwMUt3wQQJA8qRoKdTEl0rIytO0C3WISkE1hx1qcB9psjpXbHzR1h8oYcn3XwDApml4lJjUbBMvxaKiWJ%2FiECgG24ZOGCUxGHrEhU6OSdCgDfWCg3iWh5a%2B5KuoLV1flTaeKjhBasGH%2BNU9aoL4kn5l892%2F5LHi4I3Mug6S2lDnbZ1%2FSvjhZPzrA0iIkefcDd6J7O90xNxT2RhM0jItbxuKVWS4rV5s51WnEmZUoVrJSA2PfLwRSO62eHtDFmbrAl6Ewj1IjI42%2B%2Fv3o5mpWdD6jxAcUU3khX58RdDxTcduUr1TadVQLLcFw7eojlUzLgRlW3kqxNuYSA0zAn%2F8%2B%2B7JxcRuJgnr3VPa6NIuTXQEoVOLWVxUm12EFyv3TOAsXRpbguvURvWuu00hu5nOmRUlPXq7JyNIaPyOAAW6%2FOINPrYPnsUFAaYA7gzWNgbWPs8wRyk2cdke9HVkjk%2FFji4us9RYXKc4IEgWva7BrZ6lwcaGfvaeyaTZEprFwutyHhjCfBAbvo9Jm4rWyB5Miy148p0DPBf15OJvyCgCI4br1nf5ztqpAxsyPDgxXDiqQsZQsqzIvA4fRkYEsn9fK7uPJWUQ62nOKqfayOgFWI8XqnZqM9lqJVMK3nEl9MJ6Yqb0GOqUBSWSw95D5w8mX5zgWz9xQp4H9B1FFdeOsCyN2xVTAyC5DkHk5slrur4PJCM%2FhjAGEAzu%2FD9lL6deoLvqxAoQ1ylHI8ODLXRYXKVz7rvqicHbscXfPMLv%2B8iaA7AmFvGPDvzNHPAv4f7WL3QAX4e4TJx1tY2btE4Mkj6R%2FLACYse4cT%2BO%2Fn6%2BUeq%2FGoUeKbERt0vZmEQpxN0J5tkDvh4L3%2FUMrL95E&X-Amz-Signature=3021b044b881b4704801cf15f9fc7bc7416446d03d1ed118d005196c41319fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDMMZYB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7SBNwN2PgT1pIvVXM3sG5GQa3fxblqg6L826j%2BHDlOAiEA4ANsGB5iKllDjBg4FdQ8LQh2Q86wsk86MwgbrOQOFgUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0tM5rfLVsTQhME%2FCrcA4SPWYgZ7OUI0S6owf9Zk7D67jIRbinNDg5RKYikZVNZA1ifn1VKhcbMmIpQchp1WS3zm6l%2BAwI9J1niWWi8Bk8uQfZHtKAVx%2BKiWEYSzzv8auJkfS6%2FEKT%2F1fKZVixxACMLcB6o7qNNJ3RushHJbECQNb38zpUaxJPCgs5ETQ4CrYX3Dxq8Kb5fDAJlpITbVM9JZ0wEraJ4U6zf6r1WhskFEA7rHlTI9AuBzZ1ICZ6SuBtp7%2FRThCAXmSGw2t%2BCCRWhFTIy4X53eSPHaKv65sjYNhUQFM0SL%2FoLJKx3V%2BV80xuj5UPzRRffv6qMLl6GCtijzDshAeuD865RtEjk5yLfXwXjN9poiJDFKNRiXWT4aPUPNj9kQXu%2BrcemlOcyqLyPQZJi1VmuQ5n82QbsvVPgq0BR5w5TbSDLTKeWUa3s5aHqQ5HNcSsuvE6ShkybNwt1h1A0W97uMsD%2FDGxM0vIU6XtvktMyO7lpd0nYG0drEXodIc9VQ8OO9FnDobAPdsknZjzXdY2awHD2DVKwp121XTM0uHL04zPTUezeEdc%2BPblGjBeOkWomQrS4PqcDXfZxNu05ACrvEVGLyqapnoYACPeKYUvdxr69SwDDd%2F6629mnsGBC3r90E7mWMImYqb0GOqUBfmoEKzulo%2FjQEqCjmW%2F4GJRA0jvV7wjPXcasBJetTAW%2BF5TF%2FJb6x9qE0Ib6bIRWLIT03WrNx3if%2BbPOU4vCpn0dqkW6qRLlDloUKEBz0CYnHlI7FuePNOzTzs8HjVWqmMYDnnQJxy%2Bu%2BA1Roudml8WbJsOXfqj9pjGhJAiBpXpqiaxi0WKk2Fiqrl0LRqlEH7qMtPC%2FxP2qME%2Fp24TbsKEDQmwc&X-Amz-Signature=d78d9a2ebea0c97f40efb1a4f53e0f38893392f02b02b363ad466756e7c3ce55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUC5JL6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKeLzaBKr0nXravalg2FaRQgl4ZlSBru6HeNT5ZoxawIhAJOxh8EbRP0P8WMWIWPCvlDl%2FBiZnexEjDipxPVoQswwKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymmiWSiN2%2Fv4D%2BdWAq3ANOlNwvIq0YGN8nFoNvcfSYYTSjL633X3FhMbcTOVaMqKNPS7BS1F%2FACHHMHMM6RJ%2BEcVhIzhcxF7l9D1SJDPbAhnbrAUtDD1n9P6eM6%2BT0abvRKxT%2F7ZOBsXvPUY744%2Fm52HnQNjxvYa4z6RskY%2Btf%2BdhbKwLHHSv1nqS3zjhaOfAR6w5IvSZxyJZhlvyJdAX1f6LRqohfj7hhOdFXRq%2BuYPuL7Eekxnv43FQiuhu6IUvBAiUdowbTbU%2FtIK%2BDatss%2BBa4CKP571jJf6cR7NvOwYBRre%2B46slemVO0PXALmr6bjwxq3FK8UJ7l3QcOZLdpzHg7goxgG8w5QWXcLIRDFWuAk1hNqyFpSKCr3pyouU3g%2BKOH%2F1pxmdgVa8oos9ok%2BAyxHhERg%2B%2BAzMuX3DKApPlsNhtPOi6VC67dWWZHmWyMYTmGWV9XFgQnxDqtlOkK7pmFsxOwB%2BgZJPRdKUMJMuYx%2Baj1BJ10Fdf%2B4%2FryseSwhu72hHz%2FrUACYui7P%2BM2B6C075CpKcL%2F4l4NdJaXBaecjXsuShYil1Blq7FMzx2cF3t54I5OIgIsodK0ANiMhgyyOlBVHpbdf%2FEh5O%2FInQuX4HmfgJ46Cwt%2FMZadBrKs4GQrRg818GR1ozDtl6m9BjqkAYUAVPa169ABn8w0o%2FrUtm2O5Sn3Q%2BOxT1kZDHuqktCsAZdDZ%2BGP17hJVGtU0wapAhbwfuFT0y0tnPsihOx20l0wy68obagvfbLtHfRXAoLzRCH2ynBAKw3x8xUQLbkmrlUEH2%2BpSvs529kUBI6MG%2FLGhWYHRKdmKHLwUU0bpGmFtmqVCNukvhsrulqRnDaIm7NyGsB0vGSUTT7ypCwpSxrLWjwo&X-Amz-Signature=836ce65fac2efe7dfafd9b35a4b12ad61a5032ad62145acfc56317e891b4863d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
