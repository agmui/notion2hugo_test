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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWWXSUB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBSjwqF5Uwg4ba5CmbshhlFLfc6nL6Xnfq8Il0O7TpcAiB8lq65fyVrOqKH%2FqZF4WRJUnmo%2Bma0CJd9f%2BBhGUHjJiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5ZZRiJYH8Q%2BNeYDKtwDx8cuoFRH6Wv1C3x92BJi9yMSbY97qq8OJmOtpEJMl%2BPNRRYHVcJ6krqEa%2FMDW%2BDR47dJLg1A62Hwz6tcNT%2BdtysQNa2udAy8SWpu5LY7EUx%2Bv%2FMaL1IIL3TMkCTpl7R9wtCoXsYv1ZyFq18kzGYg%2FwKIjnUrYrldVByDjmTiTz6k%2FDaK6BbpusGhHqxULEiqUhqIcGO8IM94oGhf3gAPXwEYQV5ORnDuwi6tWwS13Yvs2V3nfWfHGmvc9PXCoOrbGFnR1l7KuaYNGPi0gvae9GKXRd%2FVsFGRyHxMViRYMPqRsSohHP2IhMakP2Rp7is3l1%2BQhz9LaYxOj7l9yO5lFucTTb4G5Jp%2BANJ9ou3N4jhhh1VjySVHlht10c10QeSOy4lzbX9uNeDG5%2F7PUAvzY99uXtI2jtsWT%2BJG3zTsd8fq89%2F3mJD%2FP0Mbq77dnzZsdys%2BiYowYrXPuAjfg1OwsQFQnNip%2FLbkgImKLleSthZ0Xk2QoYoCShISlbrENnPxi%2BMjCJeGcQbs5PxEp2EWAccAm2yzP55qQFsyjS5p0Wxv6depup18ciZH40FngZScyFuMwv1T5NsnDf1sgxax%2Fl8IY9UOoTjc5m8BLGcgrUiakJwK3yrCRiOua1ow5cuNwwY6pgEdIATMMmphQmomJRqN9KeT%2F%2FfHXbkJMn2Tddb3JKfz19uqS1qMUBdnkrT6fbhID%2BBt4jKSeHkizx74H%2FYEZ8IMguIRfBxosuUJoe8nsb3tK45TTrC0faKNGbE%2F2dQs7mDyAhD72VdjSypQ%2BEaTjuYjAkEiu9TK%2FI5DcU%2FYyUwQ4HIZQC0JcPGB%2BD9EPjjlBglyYRgNZm9yB2uWDRBuhCDXGi625aaC&X-Amz-Signature=8bf4d788d88899c8ac648890964dbe75cc013ceec466bc1b3d26f8d377e2f892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWWXSUB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBSjwqF5Uwg4ba5CmbshhlFLfc6nL6Xnfq8Il0O7TpcAiB8lq65fyVrOqKH%2FqZF4WRJUnmo%2Bma0CJd9f%2BBhGUHjJiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5ZZRiJYH8Q%2BNeYDKtwDx8cuoFRH6Wv1C3x92BJi9yMSbY97qq8OJmOtpEJMl%2BPNRRYHVcJ6krqEa%2FMDW%2BDR47dJLg1A62Hwz6tcNT%2BdtysQNa2udAy8SWpu5LY7EUx%2Bv%2FMaL1IIL3TMkCTpl7R9wtCoXsYv1ZyFq18kzGYg%2FwKIjnUrYrldVByDjmTiTz6k%2FDaK6BbpusGhHqxULEiqUhqIcGO8IM94oGhf3gAPXwEYQV5ORnDuwi6tWwS13Yvs2V3nfWfHGmvc9PXCoOrbGFnR1l7KuaYNGPi0gvae9GKXRd%2FVsFGRyHxMViRYMPqRsSohHP2IhMakP2Rp7is3l1%2BQhz9LaYxOj7l9yO5lFucTTb4G5Jp%2BANJ9ou3N4jhhh1VjySVHlht10c10QeSOy4lzbX9uNeDG5%2F7PUAvzY99uXtI2jtsWT%2BJG3zTsd8fq89%2F3mJD%2FP0Mbq77dnzZsdys%2BiYowYrXPuAjfg1OwsQFQnNip%2FLbkgImKLleSthZ0Xk2QoYoCShISlbrENnPxi%2BMjCJeGcQbs5PxEp2EWAccAm2yzP55qQFsyjS5p0Wxv6depup18ciZH40FngZScyFuMwv1T5NsnDf1sgxax%2Fl8IY9UOoTjc5m8BLGcgrUiakJwK3yrCRiOua1ow5cuNwwY6pgEdIATMMmphQmomJRqN9KeT%2F%2FfHXbkJMn2Tddb3JKfz19uqS1qMUBdnkrT6fbhID%2BBt4jKSeHkizx74H%2FYEZ8IMguIRfBxosuUJoe8nsb3tK45TTrC0faKNGbE%2F2dQs7mDyAhD72VdjSypQ%2BEaTjuYjAkEiu9TK%2FI5DcU%2FYyUwQ4HIZQC0JcPGB%2BD9EPjjlBglyYRgNZm9yB2uWDRBuhCDXGi625aaC&X-Amz-Signature=d79a4f35099ac08548e4673048f0f5ed6b88ad20c882cdec316bcea081bc0f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWWXSUB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBSjwqF5Uwg4ba5CmbshhlFLfc6nL6Xnfq8Il0O7TpcAiB8lq65fyVrOqKH%2FqZF4WRJUnmo%2Bma0CJd9f%2BBhGUHjJiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5ZZRiJYH8Q%2BNeYDKtwDx8cuoFRH6Wv1C3x92BJi9yMSbY97qq8OJmOtpEJMl%2BPNRRYHVcJ6krqEa%2FMDW%2BDR47dJLg1A62Hwz6tcNT%2BdtysQNa2udAy8SWpu5LY7EUx%2Bv%2FMaL1IIL3TMkCTpl7R9wtCoXsYv1ZyFq18kzGYg%2FwKIjnUrYrldVByDjmTiTz6k%2FDaK6BbpusGhHqxULEiqUhqIcGO8IM94oGhf3gAPXwEYQV5ORnDuwi6tWwS13Yvs2V3nfWfHGmvc9PXCoOrbGFnR1l7KuaYNGPi0gvae9GKXRd%2FVsFGRyHxMViRYMPqRsSohHP2IhMakP2Rp7is3l1%2BQhz9LaYxOj7l9yO5lFucTTb4G5Jp%2BANJ9ou3N4jhhh1VjySVHlht10c10QeSOy4lzbX9uNeDG5%2F7PUAvzY99uXtI2jtsWT%2BJG3zTsd8fq89%2F3mJD%2FP0Mbq77dnzZsdys%2BiYowYrXPuAjfg1OwsQFQnNip%2FLbkgImKLleSthZ0Xk2QoYoCShISlbrENnPxi%2BMjCJeGcQbs5PxEp2EWAccAm2yzP55qQFsyjS5p0Wxv6depup18ciZH40FngZScyFuMwv1T5NsnDf1sgxax%2Fl8IY9UOoTjc5m8BLGcgrUiakJwK3yrCRiOua1ow5cuNwwY6pgEdIATMMmphQmomJRqN9KeT%2F%2FfHXbkJMn2Tddb3JKfz19uqS1qMUBdnkrT6fbhID%2BBt4jKSeHkizx74H%2FYEZ8IMguIRfBxosuUJoe8nsb3tK45TTrC0faKNGbE%2F2dQs7mDyAhD72VdjSypQ%2BEaTjuYjAkEiu9TK%2FI5DcU%2FYyUwQ4HIZQC0JcPGB%2BD9EPjjlBglyYRgNZm9yB2uWDRBuhCDXGi625aaC&X-Amz-Signature=7d554b413e642944dd27114492c98837dcfba91d6d1875567031b44642a9715c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYNU5IB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSxj1vKvZJOoOBPCdRJV2nMJjvRgS9ErJJZcCxyEHwoAiEA8Bb3pA159L2QOy9Tz8bzdr6wWr1YOUfKfjtaHPGKOu8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9kKfufG%2F9vOxUJAircA9lTfWOrGriYMHjKlHU%2FyxDd7llMc%2Bm5QRboStsE9em6mXoVpYTFMhM6MpEs8oYgcjf8ZURtrt2ogWs28IjEvFUrF39uxwcxjO4pyozhv08XfFzcN91wvuJClgY%2FEYupI%2FghGIoMr416EAXTFpF55uFc9G9slel%2BYJ4qWaPAHi5cQYDSzkoihi4%2BBsOhvjdjT85EGWQt%2B0M9SyXsOsyD3lcOS7LCJll6JNMRKe3AGyg%2B9DTrJPfIm9mXuGJY9PJix1fAUTunIXn%2Fn%2BFM5McQKo9K7a4w2lxM7qo%2FahREjVRh1nL3TBKjIB0C8mpwsuMEszAoV5JfLH3aQ0rQWT0Dx%2Basv%2BW71BkhcvuT5c1aIeTr%2FUiIa378kekq5%2Bf%2BJvHkyAoBnL6Y3Nd7PjMvC6o9rip6p0ZzQqP4ezgp1tt%2Bq6QfRzUhvVMYrmm3RWBt8OcYrJpqC3NNS2Ev%2BWBzyqK6J4vExGvHhj1uwAd0XBHbGwvu56Z55cFIpvWkkQ1U1d9z%2BHGxhn3onykRVebrflFTBnY1DSjjuPtpwdRmq%2BkO7GRkJLvGcaRM2TloQYwSmQR12mwPR86ntf8sjAVEOsabO%2FBOlxZtC%2FdD6MZvFk%2FK6FJjL6lv5oZ25HoR3WWrMJvMjcMGOqUBl60R0bw7EVBTQ12mT5rnUtBb1OXLabHeC%2Bocn%2BzEK6l9pOAWDRW5DGWkaSZ%2FGr58nWGpf%2BzvKtALAwa5VFu%2BMew3NlKFB1EkPlMrNcNLq5IUCKbCKnt8vEAvtmd94V%2B2xD%2BhbxjCLhhc0iIlY4ncCIO1tVnx4W%2Bu4yuUkeT6KG3pWjAaFg9%2BMWyfHJiYPaH35CuGB4Nj0SXbZlEtN5mmKL832lB%2B&X-Amz-Signature=ab0ad49840275ee44b530218db4082c2112f9c48b9b832e7340b8a715e07e84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YWTM4Y%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEla8wJ%2F6OWS54lEDoExfCPWMoHD9sqma2NEs9SVagrmAiEA9Nbm1jrdIKzuAqpKMucY860kV1PC%2BOBscfKu14AwMCcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwXubfLwGVOEYNWeCrcAzKJpuXSgNXJHm%2BU9XYn3PIrogO%2FZjJYTcYiyUNp8Ajd5UEpoQtv%2BOvXeD4UmFX2Z7BLhEPWnabOdMTHJUekLcdUWT6LB0Xs3ehcLmhazGNtcVFwgma%2FD%2BgWQgGjfnEWXGAUs8p96cpn66qGXSsflQtYLMa1%2FZ8E1iHp9RHuGqotftN%2B%2BveXEEORu1j30l6XQvVwUw0xQDxaX0uT9p7ycBeZlEXOEg7NmkB9Pnd0FXWhnPb4IDHzlkZx9tOcMUPDhuwmqMUdtItxZNBMSG9HqzRwuube05wDJ4qBlf429jNYfJm0u49yjQ0FM3%2FhlojVa8AcyzKwVou5Z%2F2NVJsnSAei8iFXexj2A9VCntjNiXYhHvRfB%2Bmgi8ZUmTZ%2F6Ncwob8q%2BsgcJDETE81LjK7RMXo%2Bu9P90k8bO%2B0JVFKYy6sQWl1YJkwxtd1rhytpkpcBe4MmLOeH8AyyWlCTgl93du94GtDHH3yEC3On7LajcLaPdj%2BN%2F1fbXmWwgTLBYwFZnKuHMoiIulk8CZkL8jc6A7pBXml4fO8iBvb0ZKyLdG8Io6Rs9Ev%2FiDMS7taeKKah5n95RHReSFnB%2FUXsF7%2BskpM3ou162PuXJO3kSSaUizIfn9igflDMseOpD7WcMNzLjcMGOqUBq%2Bg36tnruteiESYTYMxUzOA5xbOXfGDe%2Fxbs5X689NkcjsRjX7Ak3bjuMgCFTUl9yBpHCazuHxTvvh%2FI2vGsBGdnUqXI1zijwoSdXthWEazyn0QUm3G72WyiPoziBsEnL14ZgLA6y6782I5siTNX0mEF1ibhg43oT7QMTwhL6wHrUh0IVYwG%2FO6PrlVYG35lhrAxrushEDqujQAk2nj8KL64GoYl&X-Amz-Signature=0dfeeb82bb33dcfed398b28096f78a291dfb3b6d9e2d3343af8488aa74089334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWWXSUB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBSjwqF5Uwg4ba5CmbshhlFLfc6nL6Xnfq8Il0O7TpcAiB8lq65fyVrOqKH%2FqZF4WRJUnmo%2Bma0CJd9f%2BBhGUHjJiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5ZZRiJYH8Q%2BNeYDKtwDx8cuoFRH6Wv1C3x92BJi9yMSbY97qq8OJmOtpEJMl%2BPNRRYHVcJ6krqEa%2FMDW%2BDR47dJLg1A62Hwz6tcNT%2BdtysQNa2udAy8SWpu5LY7EUx%2Bv%2FMaL1IIL3TMkCTpl7R9wtCoXsYv1ZyFq18kzGYg%2FwKIjnUrYrldVByDjmTiTz6k%2FDaK6BbpusGhHqxULEiqUhqIcGO8IM94oGhf3gAPXwEYQV5ORnDuwi6tWwS13Yvs2V3nfWfHGmvc9PXCoOrbGFnR1l7KuaYNGPi0gvae9GKXRd%2FVsFGRyHxMViRYMPqRsSohHP2IhMakP2Rp7is3l1%2BQhz9LaYxOj7l9yO5lFucTTb4G5Jp%2BANJ9ou3N4jhhh1VjySVHlht10c10QeSOy4lzbX9uNeDG5%2F7PUAvzY99uXtI2jtsWT%2BJG3zTsd8fq89%2F3mJD%2FP0Mbq77dnzZsdys%2BiYowYrXPuAjfg1OwsQFQnNip%2FLbkgImKLleSthZ0Xk2QoYoCShISlbrENnPxi%2BMjCJeGcQbs5PxEp2EWAccAm2yzP55qQFsyjS5p0Wxv6depup18ciZH40FngZScyFuMwv1T5NsnDf1sgxax%2Fl8IY9UOoTjc5m8BLGcgrUiakJwK3yrCRiOua1ow5cuNwwY6pgEdIATMMmphQmomJRqN9KeT%2F%2FfHXbkJMn2Tddb3JKfz19uqS1qMUBdnkrT6fbhID%2BBt4jKSeHkizx74H%2FYEZ8IMguIRfBxosuUJoe8nsb3tK45TTrC0faKNGbE%2F2dQs7mDyAhD72VdjSypQ%2BEaTjuYjAkEiu9TK%2FI5DcU%2FYyUwQ4HIZQC0JcPGB%2BD9EPjjlBglyYRgNZm9yB2uWDRBuhCDXGi625aaC&X-Amz-Signature=9270f75cc5533137eb408bca0d4cb3ce216e92b540159e95663aa13ce4b3f963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
