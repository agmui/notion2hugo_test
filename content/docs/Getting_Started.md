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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDNPGYH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsCRSuAFAd62WY2%2FvodiJ5K3DVwT9S4Un6WtI0qtJzDAiBOGJEDF5bfnXnh0j7%2B85ZvNKfRzJnThKGqmalaruIf6yr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMevxR4nizHbOdLnngKtwD%2Bs2LKEVyafPf9HqADPYDKS%2BsnLairVQQhMRTif9ySOlO31CqlDIbMRK8V1xM1PE3%2B%2BMemdp231fkIWS4KfDkoIow3IFShFdGWEIGiWS4YOiteMH5bjSfkTmr4cIA%2BYHmCtRM%2B0XzrGYgiGfUV%2BkgPVfX2wdsYDbKvr%2FMVCXi5%2BksRPj7z82mx4yhjA%2FHcbHhIcBMZ1yJ8x0gsutHjTAhFE0VABIUYb%2FUD5BWF2RESOFtbAHhwAEkkifT3r7BcB%2FRrVF7pA1bcjC7xErTgM9H3W2dfzoknEibO4WtCQx31FUf3uOgzerVWvTgUzCgKWms9BwSuE9lA4rInGJTNwOI7YPiFahY%2B1dpzZQAdixS0RStqKsqf99atO7SeOqlPT8kCTQW0Lj%2BnIpyGJjQO0q7YpLE17d1xP002UYV8Gb606fsDy3b2UfGatikgYs9p1PbpFhKWps6CW8rj6RFSi6SI8XpA105eh9Q%2FaMfUqPiYM76XVRATmhPuSp74E0Eb5%2FnIXoVrltIl3TfjrZMiykLthhdVkwvbrQhTq2OpwSxHYpGzs3DSfegTrjqUN%2BMT7PK34Nupaym6sHAtcAiBBAcyoWl3oILFiPD6pNnRyBO2wpGQ3xTw5LZCDboI%2BUwpeGivgY6pgGnCaukMMgsdGBJw7gqhrj9aLTfaiFAfQdD28VIM3CvNxu6h%2BxjmTVcO6MreRKXDqwIDuiW2kgob3daWy9k%2F7jIVLPdmA963OCoJ%2FnCZsLgqEk8eyTaCbh9fF7Q3sCo%2BzeHOmao714MFM28n3i2MDTlTT7Ykup4CPlylSBh3n2N4iar6lwgqSlN3I34CCXRJi4BafNVp5urY94yZMKbHjAgzEcIN6No&X-Amz-Signature=359f35c224fd6a3a636134ad0ad3ee2d0e9dcacb95987906e80c96f9f03e14fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDNPGYH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsCRSuAFAd62WY2%2FvodiJ5K3DVwT9S4Un6WtI0qtJzDAiBOGJEDF5bfnXnh0j7%2B85ZvNKfRzJnThKGqmalaruIf6yr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMevxR4nizHbOdLnngKtwD%2Bs2LKEVyafPf9HqADPYDKS%2BsnLairVQQhMRTif9ySOlO31CqlDIbMRK8V1xM1PE3%2B%2BMemdp231fkIWS4KfDkoIow3IFShFdGWEIGiWS4YOiteMH5bjSfkTmr4cIA%2BYHmCtRM%2B0XzrGYgiGfUV%2BkgPVfX2wdsYDbKvr%2FMVCXi5%2BksRPj7z82mx4yhjA%2FHcbHhIcBMZ1yJ8x0gsutHjTAhFE0VABIUYb%2FUD5BWF2RESOFtbAHhwAEkkifT3r7BcB%2FRrVF7pA1bcjC7xErTgM9H3W2dfzoknEibO4WtCQx31FUf3uOgzerVWvTgUzCgKWms9BwSuE9lA4rInGJTNwOI7YPiFahY%2B1dpzZQAdixS0RStqKsqf99atO7SeOqlPT8kCTQW0Lj%2BnIpyGJjQO0q7YpLE17d1xP002UYV8Gb606fsDy3b2UfGatikgYs9p1PbpFhKWps6CW8rj6RFSi6SI8XpA105eh9Q%2FaMfUqPiYM76XVRATmhPuSp74E0Eb5%2FnIXoVrltIl3TfjrZMiykLthhdVkwvbrQhTq2OpwSxHYpGzs3DSfegTrjqUN%2BMT7PK34Nupaym6sHAtcAiBBAcyoWl3oILFiPD6pNnRyBO2wpGQ3xTw5LZCDboI%2BUwpeGivgY6pgGnCaukMMgsdGBJw7gqhrj9aLTfaiFAfQdD28VIM3CvNxu6h%2BxjmTVcO6MreRKXDqwIDuiW2kgob3daWy9k%2F7jIVLPdmA963OCoJ%2FnCZsLgqEk8eyTaCbh9fF7Q3sCo%2BzeHOmao714MFM28n3i2MDTlTT7Ykup4CPlylSBh3n2N4iar6lwgqSlN3I34CCXRJi4BafNVp5urY94yZMKbHjAgzEcIN6No&X-Amz-Signature=dd69760f9834b6a62b1bf16d29155218b5ed72849739eb1071b264abf73f608b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPYO6RA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4GDGiSNA73A4TdRQY4f8ZZYU%2BsXE3RiQ0jiHrkcAXPwIgISA8ffYftO9ybrixI6TkbRg6KW4M0ypOasLRxb94t8wq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIEHY0u5trS3NtyxTCrcA%2BURqx6CyrCkvtUsTdCXAwYXV0KfuabqLhVqzUvLvXXhkWDQTrJ7L4zJX8FhNtcK4E0poM5ciez%2Br8iGk7y8f5kZyzsWRHgynb2aJsh5KKWRRGyGgiNRnymDmP9D65I1ziYz9DItD0u16c0kduWYdYFpf2y40N1ZT7z5FZMQr4ui%2Fv6emrNiNf8ppdikSYoSfusV%2Bbb60Rtzt34PwStGIJ4KHd98MdUantOT5QjcTBFbS7rm2slbBOwB2Vkz4QN5mzkwX3pHO9k%2BVhVZSqyYkxMVxse%2BHvwUytA8n6WIG2qzs%2B7llX9TnaNrx3x6jKUYriznhLUNR003U4Qd3IH507XblIZw6UxN1lh7LRW8bi7e1CVEotOjpw3kGRGyeHzfpUkS4GsFi4AF8418K9uOXKDv1sanJvzldcoI5Hb%2BCaUxTQ9GrZG2ICft85BRfl%2FBP35A628polset8WClan2fXzFPK8S3i3uP6yFm0WvANL53R8I3KoICTdaEQZACjMjLx1ve%2B3XTMk8o7FPhxJfVnMePKSpFRIsMQ%2BNtDsq3VdAONGLixvUfI4xvqvihCfHqZC9i5bhJmBVGLbUNTv8TlFKfN5SL6g4uU1m3vaSrWo9fXsGTVtZUw41VF9uMOTgor4GOqUB3Y4Ti3HRbUtEIZFUFhMJFImuibbdQBZp1mTJf%2FBRamADGa%2BTO7KDoYfheqwnpbpI37PpBtOWN8q3NeeXt3E1SoRVPoV9Mcg843FhFujJmN8TmTlAb9QFBzDsmu9LoLf%2Fdo0x%2FdL%2FaPdcNfvrf6wrGavqvif23tNrLgi9Nrp1oXRH1aznZhMaKQxAgdSNYn8yrBYI%2FX1gj%2B1KycA%2FPL%2Fq45GVSC8p&X-Amz-Signature=cac110ff7b36602c4510029a3a34f15439658b87c7a8ee5faa99cd16c9b3f53d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP33PKM2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIdUybBT5az9J7bbLQzte8LUTokoR5DJKxw0v0tWQaagIgIYT%2F%2Fw5DTwb1os2ATjLy4eUAQNXL94KIV0gs9qciIMMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAVMUs1nVwctRcw2CyrcA9YALMj54XYSvJ3%2FvpbecaJrKc05Ry5wlq5p4F9Aq1F4vtlo5XwYhyT2u0xzkHvn72ayfdqqVVxxlXhu2%2FnNraU8f%2B%2BNQvp1oAJ6zIhUuLkxvsbiwKT7YUZOKO%2B5dLkgJyQl0D0jg3tI1eBZN0EtEfuQScbmN7rbBj%2Bc01SLl8xHGcDpB845U8ABvMyg%2FwSBuZ%2BVOSu85zlh55nF%2FN9bP51HKQcx5ekp3dC0AixEnlmSJW4yMYSpqzLanczSftJAKjlE3q%2BQz%2FFU%2Ffacj%2FCD7BC4gsnLwUHk4QYDPysdQt7AHTUzp6Wpej6ap%2FOV%2FMn%2Btuk%2BXFZPTLdLo7kxSebQwFwvQt18Bw%2BIaS%2BTsLaGcxlUe4zVr7lxmSRo%2Fk8skxQcfEMkjJcNbFs8pDNeItTHBa7aEXfELURwt1PgzlE6yeqsP0j1Iwwtu%2Fkb3mj0bDm9mpHAANP5eNmD7eJMxwTekA1YB86XuNB6bAli37m8yCa0XxJL81gkNfMXwtfhxWmjL%2FGfVERxcc3F9o%2FHD9o7eAJfMbG25ys%2FGU0DruNT6QJ1Uapn2dDMSxAMXBVv4lUF2kyQiIcl%2B3NQUdbz2bBLw9Vbj1mnBADv%2F%2BVX43%2BJLq6BOjCnYTsuPyuRi8hRMK7hor4GOqUBJJEPjIQjfQVnarhiPE9CNgor9c%2B%2FwtWJ7p14ts3R%2FT8RzeywGVLdA5osUJP%2BgtA4I3LPgZK3rOjdiUdmNcb9WiNMjSTPKVIoJg8AgdCEOYabKGoduYwChDxE%2FD%2FOmHhBFMIU95Cr15lMzx7ztt7fhXXan226WrZ9gNvxuQC%2Br9eRdfeXDIZqytXIcADh2Y%2FLhu3qRgMbL3CTaZC4U%2BM9SZtj5JNV&X-Amz-Signature=4d7d3537bc996f2c383aa3493a6a2731a7e636d41891baa854092274ba78d1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDNPGYH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsCRSuAFAd62WY2%2FvodiJ5K3DVwT9S4Un6WtI0qtJzDAiBOGJEDF5bfnXnh0j7%2B85ZvNKfRzJnThKGqmalaruIf6yr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMevxR4nizHbOdLnngKtwD%2Bs2LKEVyafPf9HqADPYDKS%2BsnLairVQQhMRTif9ySOlO31CqlDIbMRK8V1xM1PE3%2B%2BMemdp231fkIWS4KfDkoIow3IFShFdGWEIGiWS4YOiteMH5bjSfkTmr4cIA%2BYHmCtRM%2B0XzrGYgiGfUV%2BkgPVfX2wdsYDbKvr%2FMVCXi5%2BksRPj7z82mx4yhjA%2FHcbHhIcBMZ1yJ8x0gsutHjTAhFE0VABIUYb%2FUD5BWF2RESOFtbAHhwAEkkifT3r7BcB%2FRrVF7pA1bcjC7xErTgM9H3W2dfzoknEibO4WtCQx31FUf3uOgzerVWvTgUzCgKWms9BwSuE9lA4rInGJTNwOI7YPiFahY%2B1dpzZQAdixS0RStqKsqf99atO7SeOqlPT8kCTQW0Lj%2BnIpyGJjQO0q7YpLE17d1xP002UYV8Gb606fsDy3b2UfGatikgYs9p1PbpFhKWps6CW8rj6RFSi6SI8XpA105eh9Q%2FaMfUqPiYM76XVRATmhPuSp74E0Eb5%2FnIXoVrltIl3TfjrZMiykLthhdVkwvbrQhTq2OpwSxHYpGzs3DSfegTrjqUN%2BMT7PK34Nupaym6sHAtcAiBBAcyoWl3oILFiPD6pNnRyBO2wpGQ3xTw5LZCDboI%2BUwpeGivgY6pgGnCaukMMgsdGBJw7gqhrj9aLTfaiFAfQdD28VIM3CvNxu6h%2BxjmTVcO6MreRKXDqwIDuiW2kgob3daWy9k%2F7jIVLPdmA963OCoJ%2FnCZsLgqEk8eyTaCbh9fF7Q3sCo%2BzeHOmao714MFM28n3i2MDTlTT7Ykup4CPlylSBh3n2N4iar6lwgqSlN3I34CCXRJi4BafNVp5urY94yZMKbHjAgzEcIN6No&X-Amz-Signature=283bd850ee5730377e8b6e73af3afd1ed70de2d97e4c16f8d68186cfd6882156&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
