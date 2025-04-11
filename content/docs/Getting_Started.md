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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMN3KQF2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDp2js5DNuZpj7Vdkp7RCsJUSli54Hs2uAy6obpLlmV3gIhAOeaIGJQkZ01OfI6GEXQNuZwBFzBRZ9kyxf390%2FYttyXKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWOsLzWvdYfqo1zRkq3AMqBHjSjNjhk9G0J%2Fq%2Fjf9zx%2F3j5ZHmx6XGx7jMWY3J2VInIUO2AW8Kn%2FUMk6q0Qnr8ChG0zV6CNwh0fq5RrOt5SEX3DdNyebDdyUHdm9HrfGW%2FMmqbZo%2BI66Fo4F7i7GxAsZ0pdpZUGeYHiR%2F2Hj8z%2FTOu3IGBxOwBVxt6CBrE4hDFFiGf9a8Fg7NjHYopDJIIQKI9obFIT4rEnCNCJimaEFn9abyTZK5B5SzfuFEw2qUUFDXReWnChQ%2Feyd7cyXtpQbEYk1%2BnhadZdRD%2BS0hRXLnqKDReEDwfpifbGF9yGp%2Bv2Wyp8MFhFqjjYO5xL3V79lm6%2BXEmeBP5gf4oACrpS5QTUyQAVndVOf7MafLfGo31dQbTQhlNrrK2xKIPbeUQLfGgcmPSVtdOs54miRDbY4LC4v3NxQOlxDExqYZJVMangpJPEkB0S2ZLA6PcCtSEU%2BTZR9AVV4MSX%2BkCuq9kN%2BWSoJH7p4kQhBQGRCojdK248ExrUHqvOGnwRQ1HKGIFWT8XFKSRcCANxwnDWmAHLnDG0oOdxJQf8rh%2FUQBTMxgqyl479oeARnbok%2FUvz1coV25rM%2F0PqzVCW5EzFYb36OfFJeE57jsfq%2BUiyw8J6qkWI%2B%2Bw1uW3jHu%2FzDD58OW%2FBjqkAY9v%2FSMfQ%2BpMadGfLKuutjQL32K6%2BEkNaELc16NxraxU8E3ZbzwtHUBnxfsNZ%2FjSV%2FuoJR9Md2UV362yQSuOhQRWIgXEom63HR48Fn8i3mk%2F8oC51iV2g329oVTb64uTsYTBJZd4KNXmXSHyIWpkmovTzi7XBeGsWy0Q9beWRfj%2F77SYaiyi1YO9tYueas1uGEnyDQX0r%2FDKTA6SSHDq9h2PThaC&X-Amz-Signature=733b972b41f2791f9b0b6ea1466a68bdc65d740dc82811a52ba327c3fd2615c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMN3KQF2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDp2js5DNuZpj7Vdkp7RCsJUSli54Hs2uAy6obpLlmV3gIhAOeaIGJQkZ01OfI6GEXQNuZwBFzBRZ9kyxf390%2FYttyXKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWOsLzWvdYfqo1zRkq3AMqBHjSjNjhk9G0J%2Fq%2Fjf9zx%2F3j5ZHmx6XGx7jMWY3J2VInIUO2AW8Kn%2FUMk6q0Qnr8ChG0zV6CNwh0fq5RrOt5SEX3DdNyebDdyUHdm9HrfGW%2FMmqbZo%2BI66Fo4F7i7GxAsZ0pdpZUGeYHiR%2F2Hj8z%2FTOu3IGBxOwBVxt6CBrE4hDFFiGf9a8Fg7NjHYopDJIIQKI9obFIT4rEnCNCJimaEFn9abyTZK5B5SzfuFEw2qUUFDXReWnChQ%2Feyd7cyXtpQbEYk1%2BnhadZdRD%2BS0hRXLnqKDReEDwfpifbGF9yGp%2Bv2Wyp8MFhFqjjYO5xL3V79lm6%2BXEmeBP5gf4oACrpS5QTUyQAVndVOf7MafLfGo31dQbTQhlNrrK2xKIPbeUQLfGgcmPSVtdOs54miRDbY4LC4v3NxQOlxDExqYZJVMangpJPEkB0S2ZLA6PcCtSEU%2BTZR9AVV4MSX%2BkCuq9kN%2BWSoJH7p4kQhBQGRCojdK248ExrUHqvOGnwRQ1HKGIFWT8XFKSRcCANxwnDWmAHLnDG0oOdxJQf8rh%2FUQBTMxgqyl479oeARnbok%2FUvz1coV25rM%2F0PqzVCW5EzFYb36OfFJeE57jsfq%2BUiyw8J6qkWI%2B%2Bw1uW3jHu%2FzDD58OW%2FBjqkAY9v%2FSMfQ%2BpMadGfLKuutjQL32K6%2BEkNaELc16NxraxU8E3ZbzwtHUBnxfsNZ%2FjSV%2FuoJR9Md2UV362yQSuOhQRWIgXEom63HR48Fn8i3mk%2F8oC51iV2g329oVTb64uTsYTBJZd4KNXmXSHyIWpkmovTzi7XBeGsWy0Q9beWRfj%2F77SYaiyi1YO9tYueas1uGEnyDQX0r%2FDKTA6SSHDq9h2PThaC&X-Amz-Signature=fa0ce43d7a0c95a3a8c207d7a496857d2763f9853cc54e6c00dd6b7feeaff730&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVQN33P%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEMwJCdY5HdFJd6n9KEsvqKzFrcLetLQu8dWVXk7IPlhAiAk4auQvT3PWLPyB6c0TbPfvFMl7V%2B%2B6swZokEIc2lMvyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsW3XfwSmgI%2B17RAwKtwDHMgTJru5afwzeKprCj4F%2F814xqSg7rRsnaFbpLeeRrc7DAMAN8FAeOnzpB731CX%2B9BO7e39SNmcsBtZGODPZLZFgxGJtg78Cg6EKfSts%2BXxqB8sYN0dgJST86PzktllTm9%2B7gDn9TjCwuTp2M17GjyocQJzE0JdSp0ixeevzJ%2B7N8fOrCHkoj%2F50pfQeucoT7rcn9fMFzmwPrl49XuVa4LdTmxJGLczemsOPlVhdws%2FYJTNDrt%2FlTpObaf%2FT%2FWAa%2BOac8b4XR2IgjJrmDZYIdFUK8fYAuqyD%2BI1WIYXJK3JB6DNfW5YIa%2FHZMTxKM3Lhc%2FD%2F8z4b5Hp5owJoYrpWweN2ilBf6%2B%2BOzTBH0%2BHbiyUzzc2uZwUfImMyy4zPtuaiabufWCMvkHRu9KQ6C1dADdXiFgnNhKsVQupR4wqfSi0S5VeoU7Cx8Efkjmzv46W0Us0hFCKnRkl8U1qERVljcB66NTTPBax3HsxzENlGoCRGJqmHYrAc6C9uDjhrYJpeyuwpr0qbE0FVGn92PxNOLZHUFS95Glb%2Fj3QwFhDfRn9%2FgOEvnUXIo5QjzaT0FWlqUuSgHvn2yHP2L5xPH%2BemlBi6LgtNMXrG2MO5a%2B6JqRZ9gDZKt%2BA30rRxD%2B0w%2B%2FDlvwY6pgEuqrksC1Mbo13atv0egJiWQwxluGMfqW2uMZcUrT2cC%2BaO%2FFR41MsShrceUO3Yv1i9e878GvvVQDOxYMQAw9WuC56UxnJJITIBfO%2FUnCFe%2BZUtdxuhnJAOR7670vlllC7byXKvCN0ALhx1lPVO%2FUxK5pBgd%2BYReZVYk%2FFazj8PbVLIBsNo3OL8Zw%2FlYHRX7iCQRObKUBxvz2VHl2GNScgykmNyX%2Fj5&X-Amz-Signature=dd9dedda5cd0c36e5cc3362824b6bbe489fea1dec34e95cde39dfc0879a0ae88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQ5FWZW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDV6Lqnw%2Bal%2BhQSdKNShzclwtEZyXGi56iP05NyXcFDSgIgefS9e%2FMRF%2B7TmoW7Fz4M7i2JbGqDZAfksEccWzLcnc8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSVV0Z1N8O99b9q1ircA2rmsrMWh%2BLEmC9SMkPvDyAQFc2e4R9ZBLnB2N59eKFnJltySJa%2Bvr4eFyekMatRrQowGzZXBIhCfrQaeX%2F9LhG%2BSlQQ%2B3xj1cSa93r9FuZN0XZ2Z82hmxhmG4kbjkKJZ9qYd3jnj1k%2BTUY%2BEoyBPP4%2F0ErlJFoe%2BWFLjfCy6EMCG%2B2F6kFqTssPqDnw8cuEjEcagmYFJ3g1gmOTsTp8lk9%2FPizzB%2FkRQoQk6sD1ctOtHcVpPtaRUAlwS98bjSevX6pnaZLqtAVQl%2FtTjyHIXN0QjnZlUWwjTeghril2f%2F7IQMXx1NuPTMpvI4wshO%2FgYxhree6K2yuviSFSJ5lXVzrekE06fEnMU%2B8Uf9FE1kmIlsKTg2jvFiUh4PXf%2B3JlyXU7PSbcLDi%2BStpH5ap%2FgUgZ1ay19hFzshR610USMqzxumXdNX6%2BQ67ZGc1JOCiJhaJb8HOd%2F%2F%2FV2MKAmDdt7sdwHAvlqvxXePy4J27DtFfHKYSdphb6ullBr1XnfF88jjvGLVcbSLXXklUyiiNQ19ySZw%2BWoI7TdXr77wQkjVUIECC8Jr7TIrOd4QMWq%2FFcdFx7rnnyrvVvG8DYySFpldTI4CDDV5fS%2BUdYKMPwQfS0DguALDV6Vl%2FOK3YPMPrw5b8GOqUBI2PA4ytKLXZ9H8l5ym2AEOqvglhtbH5KAOh3L9zdDHaTtLFB8WIYHZIw3UisqCW4nIS8HnlYYDSG%2BoNnPoS46KSYFo2qfKe%2Fa6mFC00j0v4FwI49s0Obf%2FPadVoOffsj0JItpOxsyolgpbOTl1kvOirpeJss2P2EJ0BCoePKcoaMsGtpOzQp%2FHFKkMzauzjJoecMgOlpYvpNah6qx5WyllMzqW%2BY&X-Amz-Signature=32a642a3cc995c03035acc982872b2b7356514a89b2d76626af8903dc80f0b15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMN3KQF2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDp2js5DNuZpj7Vdkp7RCsJUSli54Hs2uAy6obpLlmV3gIhAOeaIGJQkZ01OfI6GEXQNuZwBFzBRZ9kyxf390%2FYttyXKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWOsLzWvdYfqo1zRkq3AMqBHjSjNjhk9G0J%2Fq%2Fjf9zx%2F3j5ZHmx6XGx7jMWY3J2VInIUO2AW8Kn%2FUMk6q0Qnr8ChG0zV6CNwh0fq5RrOt5SEX3DdNyebDdyUHdm9HrfGW%2FMmqbZo%2BI66Fo4F7i7GxAsZ0pdpZUGeYHiR%2F2Hj8z%2FTOu3IGBxOwBVxt6CBrE4hDFFiGf9a8Fg7NjHYopDJIIQKI9obFIT4rEnCNCJimaEFn9abyTZK5B5SzfuFEw2qUUFDXReWnChQ%2Feyd7cyXtpQbEYk1%2BnhadZdRD%2BS0hRXLnqKDReEDwfpifbGF9yGp%2Bv2Wyp8MFhFqjjYO5xL3V79lm6%2BXEmeBP5gf4oACrpS5QTUyQAVndVOf7MafLfGo31dQbTQhlNrrK2xKIPbeUQLfGgcmPSVtdOs54miRDbY4LC4v3NxQOlxDExqYZJVMangpJPEkB0S2ZLA6PcCtSEU%2BTZR9AVV4MSX%2BkCuq9kN%2BWSoJH7p4kQhBQGRCojdK248ExrUHqvOGnwRQ1HKGIFWT8XFKSRcCANxwnDWmAHLnDG0oOdxJQf8rh%2FUQBTMxgqyl479oeARnbok%2FUvz1coV25rM%2F0PqzVCW5EzFYb36OfFJeE57jsfq%2BUiyw8J6qkWI%2B%2Bw1uW3jHu%2FzDD58OW%2FBjqkAY9v%2FSMfQ%2BpMadGfLKuutjQL32K6%2BEkNaELc16NxraxU8E3ZbzwtHUBnxfsNZ%2FjSV%2FuoJR9Md2UV362yQSuOhQRWIgXEom63HR48Fn8i3mk%2F8oC51iV2g329oVTb64uTsYTBJZd4KNXmXSHyIWpkmovTzi7XBeGsWy0Q9beWRfj%2F77SYaiyi1YO9tYueas1uGEnyDQX0r%2FDKTA6SSHDq9h2PThaC&X-Amz-Signature=e4ff44fae8287c59e0b128f7084662f21356d3a5458f97668b3c3058f05c8645&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
