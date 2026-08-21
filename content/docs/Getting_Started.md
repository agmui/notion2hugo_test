---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USXEPWV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6YKsz3AnkjtpOkPs5%2Bz43uihkSYCEyzMwWZuHbtVDhAiA3tXqBcNuMYtA0GKGm9%2F7ybecq2EIBKO7jGfPsspyIzCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BnPiXt3uzNZ8%2BdBUKtwDpaDdK2PWoRk7f%2BjQv9rzmrIJlIF8qa2BV%2F7c7SCXLp%2FTe0pZOpiGC%2BmQnHay1n7CjtStqL0xF86ucN%2BhiUSvDlDYbbEKnC7VHzImIjYEzpVfDRev0VF20PlvsnCgSGXqClAkMkGD3pCapzqKbVvuw3IaEoOYoRfHBGOG3h8RqLrdYW8siQ1i0b9YNIfYPwqdyTg4yaZD3MZKFq88Dt6wNG0qQynCyu3RzV6U5rpVnmEFMUBubaxOpC6HmU6do8s3RNJ72j2EqDSLkHu8Rt181l4Qg6z47TxMvXmBq0XUTU9X8WWlati2%2BuEiVeUgur1x0jzImWUMwnRLKuTVNjS57UysWm39GjS5mmSDgeRSvNrDES%2B%2BNGHSaHov1FuaMnWMCGOp%2FGedvzxzmm1PchXG8iPZbnMpdKwiw6VtjQ8Jx3QU8AzQUR%2F2gKcPfKhxg0HVqm0EhS4oR9zTxXKjYkTNVvrflfnhAopHjI4e%2BjWjOeS5lmMGKgKQc3JyRuTJImw4sl98mfcNfJy5m%2BXyFu4pT2TzhRgj51i8MDS74l9lwLvi%2FdolH1ph4gzZcFYuSwmHxITvZjYM7Fj1bHZEYycMxviJ6XRfeTjj3kxDDrwhL9D%2FGynx0LFushM21Cswza%2Be1AY6pgEAQmM6TyI6F9IWhip%2BzA9Legoa%2FyTSFcxUxWdIuOZ3yLqcTN8Gi3oGsYDhLfaGda5PppNG0LaJXrMuQE25uM0NSCnAPTgFESWFJkC6tn%2BmV4w%2FkgSA8MXmqq0FCMJne5KGkhCq3s2IWs1TltLqbGO6n7EokrZDJBgRVZRFVgiGW4sDGCB6%2BDNVT1dPpSfa03lX702qNYJHiscsscN%2FQuk%2BpuaoV8%2Fb&X-Amz-Signature=71aac8ff1aefbfff0c1bfe1c362bec82c78166d4d84d328b8e03f22c8b9598e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USXEPWV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6YKsz3AnkjtpOkPs5%2Bz43uihkSYCEyzMwWZuHbtVDhAiA3tXqBcNuMYtA0GKGm9%2F7ybecq2EIBKO7jGfPsspyIzCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BnPiXt3uzNZ8%2BdBUKtwDpaDdK2PWoRk7f%2BjQv9rzmrIJlIF8qa2BV%2F7c7SCXLp%2FTe0pZOpiGC%2BmQnHay1n7CjtStqL0xF86ucN%2BhiUSvDlDYbbEKnC7VHzImIjYEzpVfDRev0VF20PlvsnCgSGXqClAkMkGD3pCapzqKbVvuw3IaEoOYoRfHBGOG3h8RqLrdYW8siQ1i0b9YNIfYPwqdyTg4yaZD3MZKFq88Dt6wNG0qQynCyu3RzV6U5rpVnmEFMUBubaxOpC6HmU6do8s3RNJ72j2EqDSLkHu8Rt181l4Qg6z47TxMvXmBq0XUTU9X8WWlati2%2BuEiVeUgur1x0jzImWUMwnRLKuTVNjS57UysWm39GjS5mmSDgeRSvNrDES%2B%2BNGHSaHov1FuaMnWMCGOp%2FGedvzxzmm1PchXG8iPZbnMpdKwiw6VtjQ8Jx3QU8AzQUR%2F2gKcPfKhxg0HVqm0EhS4oR9zTxXKjYkTNVvrflfnhAopHjI4e%2BjWjOeS5lmMGKgKQc3JyRuTJImw4sl98mfcNfJy5m%2BXyFu4pT2TzhRgj51i8MDS74l9lwLvi%2FdolH1ph4gzZcFYuSwmHxITvZjYM7Fj1bHZEYycMxviJ6XRfeTjj3kxDDrwhL9D%2FGynx0LFushM21Cswza%2Be1AY6pgEAQmM6TyI6F9IWhip%2BzA9Legoa%2FyTSFcxUxWdIuOZ3yLqcTN8Gi3oGsYDhLfaGda5PppNG0LaJXrMuQE25uM0NSCnAPTgFESWFJkC6tn%2BmV4w%2FkgSA8MXmqq0FCMJne5KGkhCq3s2IWs1TltLqbGO6n7EokrZDJBgRVZRFVgiGW4sDGCB6%2BDNVT1dPpSfa03lX702qNYJHiscsscN%2FQuk%2BpuaoV8%2Fb&X-Amz-Signature=14b55ba3cde1bcef3ad2de5a9e98a067f2c440ce62ab3cb1d307d68042055895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USXEPWV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6YKsz3AnkjtpOkPs5%2Bz43uihkSYCEyzMwWZuHbtVDhAiA3tXqBcNuMYtA0GKGm9%2F7ybecq2EIBKO7jGfPsspyIzCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BnPiXt3uzNZ8%2BdBUKtwDpaDdK2PWoRk7f%2BjQv9rzmrIJlIF8qa2BV%2F7c7SCXLp%2FTe0pZOpiGC%2BmQnHay1n7CjtStqL0xF86ucN%2BhiUSvDlDYbbEKnC7VHzImIjYEzpVfDRev0VF20PlvsnCgSGXqClAkMkGD3pCapzqKbVvuw3IaEoOYoRfHBGOG3h8RqLrdYW8siQ1i0b9YNIfYPwqdyTg4yaZD3MZKFq88Dt6wNG0qQynCyu3RzV6U5rpVnmEFMUBubaxOpC6HmU6do8s3RNJ72j2EqDSLkHu8Rt181l4Qg6z47TxMvXmBq0XUTU9X8WWlati2%2BuEiVeUgur1x0jzImWUMwnRLKuTVNjS57UysWm39GjS5mmSDgeRSvNrDES%2B%2BNGHSaHov1FuaMnWMCGOp%2FGedvzxzmm1PchXG8iPZbnMpdKwiw6VtjQ8Jx3QU8AzQUR%2F2gKcPfKhxg0HVqm0EhS4oR9zTxXKjYkTNVvrflfnhAopHjI4e%2BjWjOeS5lmMGKgKQc3JyRuTJImw4sl98mfcNfJy5m%2BXyFu4pT2TzhRgj51i8MDS74l9lwLvi%2FdolH1ph4gzZcFYuSwmHxITvZjYM7Fj1bHZEYycMxviJ6XRfeTjj3kxDDrwhL9D%2FGynx0LFushM21Cswza%2Be1AY6pgEAQmM6TyI6F9IWhip%2BzA9Legoa%2FyTSFcxUxWdIuOZ3yLqcTN8Gi3oGsYDhLfaGda5PppNG0LaJXrMuQE25uM0NSCnAPTgFESWFJkC6tn%2BmV4w%2FkgSA8MXmqq0FCMJne5KGkhCq3s2IWs1TltLqbGO6n7EokrZDJBgRVZRFVgiGW4sDGCB6%2BDNVT1dPpSfa03lX702qNYJHiscsscN%2FQuk%2BpuaoV8%2Fb&X-Amz-Signature=448b5bcef17b6d37de4127fc85f69d2c22402323c2cc77e7984be762f57aa6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNFRCNR%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOJMIy9hBoRE0iiYo%2B8rTFK8N626bkU4%2BzcuOEtHuSWgIhAMreitSCNHXBxHzJ1JMsSlzYBMuCllLpT5XHT%2FT0zeD0KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8V0oCuR2BiL5tH1sq3AM9x9XpWoREwAsgox6dzx15l2DweJNtF2aTn%2FC0uLj7H7DltbyuG%2B32JYrM4DFR7G%2FdymFq%2FPbEDPIr9%2FPmYxnvfacoCmt2w8euj6WtcMxJUDbqHxKAoKGSG3%2B2tDecZYvZnxkh%2FI9fKJi2z3pALi5BlfKOYbj4TD4%2BAqKQfrQ8m0lb7VWWe16x%2F8yhX%2B30O9fjtZsSP4hoA%2Fz86zYBsZ2ZQJWaEdoo7u97cYNLrLkF25ZDQApn9s23kWs6Sx6XYbznDSwA4ilFZ7IdZF82hqmT%2B%2BUY3V9gQNKhTYKgNY8KELVf7gQG3iO5r1LS667nSiOuu1o0KYfZgGMRDyzcWIE6dm0tKRt%2FuDpJmrSI1Xs41O3JOUi%2BuC1%2F2Tm5PAWQxRynVpXaVmmvRlW1Dc6ivTciaitM53ziWuY2wboDTGll066K78xuzU0BVdj3BB9eBc0PyiMmSQqITvq37Y0kEvmKl4IxT%2Fu5AmukXxxzFaXrbUj%2F98Lx3%2BVOjLHc0J5%2FD9LDl3ALH%2B9OPn2NdxEeDMK07kvENHgxN%2BLvrSvP80MeXPh%2FYsiNXufVKyziMXB3OKxU66pBA5iB44kRV6ZB2obJQyUfFEhghWo9QcQf11Y5u1D%2B3Dd8zGuwHSbgMDCirJ7UBjqkAWcSeMrFveqYhbysiA5SvTPORnfbIJkrn%2BnoafS2SLVaIO9HKN4zAnOyutukvBBWXRwhFob7utUDAZPBHSp8%2BcCE3XwzXOY%2F6mWjQgDSM3Wyb5FAniYBqjW4zzuFqxDqkiOCxWRu%2FHTsIwLU1z%2BRdV6elgu%2F5ccSo0twUz%2FvjO4Xp4mWmOAOD6xPa8Lab6Dl2tTVszkA0WyktA4P1UqUgLS9DdKE&X-Amz-Signature=b1cb401cb0843fd5ace5f89bd82cf0db93bf79d85e8c0fc171f54f4553823c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4JZVGG%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgGh5R433ibI0cKA3sQecI0XJEuULzh8m9sp6Zp%2BpszAiAJ6TE5drT3wBchqsMiDPLT9s3ouQFthVSViggb63QgUCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQxJ2mBmbVdpg8QNIKtwDSZvQo6jM%2BRrBPuwLd4OFulegn3RNOfXwZT1f6uGL79O2Q9fqyGLKn%2F7%2B6ZoIPTJaI3Wb3HRPwerJaOG8ejs7dsvU7vaxjPRlijjcDIeZ75sZ87Y%2BZjkj2IUzaIVEba%2FZ2Pcb2NOFQREOYcNSWpiA8rszvIZ45OR1XuV%2BEIM1s2%2BACknLN9WaQx7DXiwMOWHZetV5GEh777M2CNdndE9%2Fx8RHU622L7XVi9%2B0Mfi9bjF%2Bg%2BQ4rXrZd8Adxz9BfOIQQl7ZfS83%2BOsCGkf1573YwrOaIw5M1lx5K7Zdcm8fq80JHdZunO6jQlTSV0%2BogLab7j0TflNJaM6jqkVebxW6ihz2AjS%2FMssc610wVW0VjthIScVyy3E5nHfTm61u%2FBV%2FyfzDxV%2Fn5UIi1%2BDCPMb2c4tyo0Y6yFXlngU09Z3OhGUnysAvHMR2HiszHReL0i2Td%2Ba67aQhuKZ2ipW8nspBFLw6ipGwwSsQsPJa5L6vHPokm63RP%2BIQv4m8KHJqWZ9%2FMJlJxVxlsn4b85HLUwNf%2BBXdkOmg4Jb7Vc0Q%2Fp8g%2B4OcyFwEIlMAsOzY7MEl9xUNH0OOCuO%2BvH7nm6OCGXpOewt6K3EzQlCpHSNbCH5NHKjygCq684D8O7ltWfww0qye1AY6pgFfwUXRzEQ5b0FCEMEwJxrQ%2Fef2lddZFcksK%2B%2FaA8wWeTXT54R6U4%2FVwwzcnaRSbP3mekryZ728%2F%2BUge6ulAc%2Boxscn2lYPI%2BdWT5%2FK1HwWd%2F4WiWEnu2s7X1BzUJLBcNCSNiZeMz3Uxv27at2l07VRhOnKbLbVW9qWXv%2BwTFl%2F4%2F3iylevdjXFKGvQAob5w7fs3YFjPeR66KyEAaIq2YmV%2FtfCxlt5&X-Amz-Signature=edea269624ce8b4dbe379cd86c798c01fc66d943a75f5e78b4b90842a021c81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USXEPWV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6YKsz3AnkjtpOkPs5%2Bz43uihkSYCEyzMwWZuHbtVDhAiA3tXqBcNuMYtA0GKGm9%2F7ybecq2EIBKO7jGfPsspyIzCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BnPiXt3uzNZ8%2BdBUKtwDpaDdK2PWoRk7f%2BjQv9rzmrIJlIF8qa2BV%2F7c7SCXLp%2FTe0pZOpiGC%2BmQnHay1n7CjtStqL0xF86ucN%2BhiUSvDlDYbbEKnC7VHzImIjYEzpVfDRev0VF20PlvsnCgSGXqClAkMkGD3pCapzqKbVvuw3IaEoOYoRfHBGOG3h8RqLrdYW8siQ1i0b9YNIfYPwqdyTg4yaZD3MZKFq88Dt6wNG0qQynCyu3RzV6U5rpVnmEFMUBubaxOpC6HmU6do8s3RNJ72j2EqDSLkHu8Rt181l4Qg6z47TxMvXmBq0XUTU9X8WWlati2%2BuEiVeUgur1x0jzImWUMwnRLKuTVNjS57UysWm39GjS5mmSDgeRSvNrDES%2B%2BNGHSaHov1FuaMnWMCGOp%2FGedvzxzmm1PchXG8iPZbnMpdKwiw6VtjQ8Jx3QU8AzQUR%2F2gKcPfKhxg0HVqm0EhS4oR9zTxXKjYkTNVvrflfnhAopHjI4e%2BjWjOeS5lmMGKgKQc3JyRuTJImw4sl98mfcNfJy5m%2BXyFu4pT2TzhRgj51i8MDS74l9lwLvi%2FdolH1ph4gzZcFYuSwmHxITvZjYM7Fj1bHZEYycMxviJ6XRfeTjj3kxDDrwhL9D%2FGynx0LFushM21Cswza%2Be1AY6pgEAQmM6TyI6F9IWhip%2BzA9Legoa%2FyTSFcxUxWdIuOZ3yLqcTN8Gi3oGsYDhLfaGda5PppNG0LaJXrMuQE25uM0NSCnAPTgFESWFJkC6tn%2BmV4w%2FkgSA8MXmqq0FCMJne5KGkhCq3s2IWs1TltLqbGO6n7EokrZDJBgRVZRFVgiGW4sDGCB6%2BDNVT1dPpSfa03lX702qNYJHiscsscN%2FQuk%2BpuaoV8%2Fb&X-Amz-Signature=170d18b495bd12087a71c22eeffd3847acebc85fac9317d666553c4ae23249e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
