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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAN4GXC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF3KUU0gY5nB61cPUO0j9inO%2Fv3FdEtMocfgXkL8c05nAiEA%2FJbEVbpKvOP0a9hmS06PWEkxwJ2mdYx%2FEaSheIaz%2BGoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOOwGPBKAHYnSF2%2FCrcA3CBzecBWET3wbZ6QLcMZYLDiqFAdP6wyxQT7gx%2FUBFliGmSOUigKX6FFj6IaHDIE%2BpbC8mjldevDAxDSMWHtN%2B2LWRsNKLheV5hJg6K5ww5TL3l5DW5AbtHxCBxvv%2BqM5P46c%2FCW5bvgBK5xTspbnhuNih7NWlzfHh1YnDkyf0Y13Dy2aW5x0WIHeUquQAKEmovPvZ6YKQyrBt9UyNcwTw4TnynTCOXYIsDuGpBfUyU6CM1Clp1k2vFA%2BY0KJ3RloxX6aDVn6IBgyKCAGB%2BHLKHYenprG9rjLv2F6MnfqG3TEtWPl4FBpScOV%2BpjDLRGbVgvTmSqdeyehbd9KEXfI50jrEVrbSNNkXm11U5xffcZ%2F55GNR3GM0bhz%2BGrx6NqI7K5ZJduIAyQtbe01TxcH0%2Bv73yaCetIsBAoz6YD7q%2BH4993TbNGn%2BfsaPXjUEh%2B4ssfXWSNrD1VMM%2Bg6cxIyGOxiVIZmm79VnipFvnJAWgoimu0QQ8cqR1vf6Ck2Phq%2B5PCQCIkkoIZEWcnL9cMMEfq76IFee7EqUIYlSxYG84kUSeRJpExdue92gzZ8j4CZp6WiaC8Pf65xAZbQqd%2BNSZA%2FQsQM4PT7KHfPe3sw2dZ3upIpNCNuX3sv2NMOC4q78GOqUBOSMwwLSEdXNbjKpZQ7yFxru5jGsxpE185D79Kaqe4G%2FKgfAox2JkJWivzaL%2F6P39gjE9WJA2cN1qG%2FKvua0K05wNth6sue6IscOmOfz%2BR9C9lgzI2tl574WTrtGudXWJKYHx4OSHHeoj3OhuwEnnUFl3osQsPEwPpQtAs0i8JDm%2FH1bR4G9s0R5jmumq6wRGRvLSkJPzEYoTlyUfYPEJWdyzWb9P&X-Amz-Signature=0bc1e73ef96fc455aa1be8edaf85cfee5f9136ccd49e6817af87bcf6d41bac53&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAN4GXC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF3KUU0gY5nB61cPUO0j9inO%2Fv3FdEtMocfgXkL8c05nAiEA%2FJbEVbpKvOP0a9hmS06PWEkxwJ2mdYx%2FEaSheIaz%2BGoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOOwGPBKAHYnSF2%2FCrcA3CBzecBWET3wbZ6QLcMZYLDiqFAdP6wyxQT7gx%2FUBFliGmSOUigKX6FFj6IaHDIE%2BpbC8mjldevDAxDSMWHtN%2B2LWRsNKLheV5hJg6K5ww5TL3l5DW5AbtHxCBxvv%2BqM5P46c%2FCW5bvgBK5xTspbnhuNih7NWlzfHh1YnDkyf0Y13Dy2aW5x0WIHeUquQAKEmovPvZ6YKQyrBt9UyNcwTw4TnynTCOXYIsDuGpBfUyU6CM1Clp1k2vFA%2BY0KJ3RloxX6aDVn6IBgyKCAGB%2BHLKHYenprG9rjLv2F6MnfqG3TEtWPl4FBpScOV%2BpjDLRGbVgvTmSqdeyehbd9KEXfI50jrEVrbSNNkXm11U5xffcZ%2F55GNR3GM0bhz%2BGrx6NqI7K5ZJduIAyQtbe01TxcH0%2Bv73yaCetIsBAoz6YD7q%2BH4993TbNGn%2BfsaPXjUEh%2B4ssfXWSNrD1VMM%2Bg6cxIyGOxiVIZmm79VnipFvnJAWgoimu0QQ8cqR1vf6Ck2Phq%2B5PCQCIkkoIZEWcnL9cMMEfq76IFee7EqUIYlSxYG84kUSeRJpExdue92gzZ8j4CZp6WiaC8Pf65xAZbQqd%2BNSZA%2FQsQM4PT7KHfPe3sw2dZ3upIpNCNuX3sv2NMOC4q78GOqUBOSMwwLSEdXNbjKpZQ7yFxru5jGsxpE185D79Kaqe4G%2FKgfAox2JkJWivzaL%2F6P39gjE9WJA2cN1qG%2FKvua0K05wNth6sue6IscOmOfz%2BR9C9lgzI2tl574WTrtGudXWJKYHx4OSHHeoj3OhuwEnnUFl3osQsPEwPpQtAs0i8JDm%2FH1bR4G9s0R5jmumq6wRGRvLSkJPzEYoTlyUfYPEJWdyzWb9P&X-Amz-Signature=384000c8645f2bb2bca1d5e231a06e897b7330004f8f8a6d577cfe02d5e27dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ74MAF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDHkkeDaaznb7v9Yx9XqsqBKHLEf8gzzNc40i27acHiCAiAdj9ounCT1lgs6kHH1Py4FAGwGBe91ImjHtx4s%2F67bDiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzKvYVxt9kRKMmBG8KtwD3ujhcVZiijchwxzLGEoSLdHFxnnC0grLtEBELgdVN6HH%2FntXGUQR6dnVaF46X%2FjuqNja%2FWhij13x67YabZQzK%2FQeG37Fd5RZsWsB7jSp%2B44vYGPYsbgslpUaQSeIVNzGjh5aT87%2FYWEWkGQZ%2FIg7sbiwzinpxp%2FwhjvWcV56weWCEHju2JkJgBEibcUifCVR4NZZcPyF5AbBcqBITy%2BrMeMnL10pUtrlF1pXe9dazeCipszPe3T5BFtkZXr5TK8dt6t2%2FZDa8vzuSjaAXjsoFqQ9g%2Fbe0XzOWOjFRX4ZZI57U2gYSsBNGjMSBP4WEfTFeMf1TmEYL%2B0KNKTuKXn16px0MTSzCUQ%2FJ1bQPmoiLuM8hBNXWmV2WHxD4%2FY7YxPnXu%2BaSjNW5G1z8Gjz26hRNEqvjOPu26yxGIPYoEcxRCjI6K7wp8g1P3ZxyOZmeNNH%2B9iYg5SOFqhq5yaMTjkxN0VQPS9MIquiMd0MSHmV9h1s7ISfabxecqH5HP8quqqNjNp6OjpvUKMiPmK%2Fm3dwT6rzoeYH5rHY293Z9AXvGhW3%2Fx26aKnSbThznsSyF4jHksGmZUI5ROUMwi0gLNLwFYAMYldB6A%2F98E%2FTIWELDRlQNSGnrs9ujcLvdjEw6rirvwY6pgHW7S5CR%2BkWbJOIXL2cdKejRVarlHn45THZTF9x9rtGGOrjma2u85tjFjBoIrJ%2FRtJA1qzayJR0N68lBcdMTMgFUsf9iFhD8rZ9VCYOX9eCXyOCMHzTAdrEf1RswN%2FVxUNbVXs7TRLSVuiUT3YquSEBh0yCp6%2FXFOjoRWgsVjAOD8%2FJeRf8%2FSqp9ia7DUTwpKE8wap3lKdPLCqStpRcsE7haQumZFI9&X-Amz-Signature=bf983fdaeecdfd1bf674145087c20e1acf4fa4482c3bed8f7cebe019467904e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3AK6WX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDxSKF2juOT1QpVii4VmAaaR%2F7HxC77wurvbVhgyi08QwIgNBfb%2BBjRAmOpi28Nmc7wLE3I4UA0yiw%2BBolUJA3tNIAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBd%2B6l1na%2B%2FDGxjvSrcA%2BzLMrMvNNt1MZY7%2FdWPbVrAMXnMP9oFQbbgjPZnknjBs%2FOOxzlvATJYk1Xxdi8RWAn3UKOMRpeWHv9Skkz5X4BmLcFT4F5OUotR5UBO9YKYHAIdRknYTT%2FLtayCGdcOBKPF2Gh5Z3xDqHJHbyOurGpj158aRi26L26O%2Fb%2FqWjC4ppFF7u%2FszY%2FZrPl2n%2F%2B7LD0l5K8OACeEleEAn61zFReiuOLWh%2BTuc03vLUGN0eydAyWqEzPFk66CICHBkIPQ4Hy4ppHXipe%2B2BQe1JN6br5bmQvSn%2BnBmwQewSwVGiIMLYU%2FXhhUcVbYIyc%2F2uc9Isz3%2BAAhqAw2MfFmWvOjO8dZHxfT3dsrl%2FLTsdzSU6p%2FjIX02w3d7kEYJ96PQdV76GZn0WrO7nnvha88OlbM5D52QFrU0I4gWblKHaf%2FStDGMA3Hjv%2FbyUrmyvxbCItXp%2BPysSnXzXOFiFChauzx6coaBf%2Flw3buqZYF1m2Hm0Ll%2FkeXciuc38BHbsySXmH%2Ffi0Os%2Ff%2B7Pxrzk0XU3fMMPTGmy4a0er2tKolVGvTeYJ1ek1hVjoZ%2BI33pr0NOY7d4UUassdoNu5gzaIWA97rsIvDGYtbVvszvCbawfQN4ySgOObWC%2FdrsGB9hSzGMMC4q78GOqUBSekW%2FwYUmotKiayShV3pyJ%2Brwz%2Be7ENLmmXAHUtyffnsWGh0q5avXNJPx9ye1gixM4j2%2Fd7JWbybYRhX3ki6rRuZENwQINEwLywlhgkmCBUDOakUVYUiGrPAQRPaxG8Pfq5BbN%2Bb6RhVVCRsMshyJNu1EXrFIYgjsVvJ2Q%2F4FCbTwUSNVbrUp%2FHprD6M3tVLwJ3mThR8Mz7Jeo5rb97qqGfLoSs3&X-Amz-Signature=13ccd9ac8e04c121d0121665a5166154c6d058cf3e1b877a973abf691f59ce6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAN4GXC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF3KUU0gY5nB61cPUO0j9inO%2Fv3FdEtMocfgXkL8c05nAiEA%2FJbEVbpKvOP0a9hmS06PWEkxwJ2mdYx%2FEaSheIaz%2BGoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOOwGPBKAHYnSF2%2FCrcA3CBzecBWET3wbZ6QLcMZYLDiqFAdP6wyxQT7gx%2FUBFliGmSOUigKX6FFj6IaHDIE%2BpbC8mjldevDAxDSMWHtN%2B2LWRsNKLheV5hJg6K5ww5TL3l5DW5AbtHxCBxvv%2BqM5P46c%2FCW5bvgBK5xTspbnhuNih7NWlzfHh1YnDkyf0Y13Dy2aW5x0WIHeUquQAKEmovPvZ6YKQyrBt9UyNcwTw4TnynTCOXYIsDuGpBfUyU6CM1Clp1k2vFA%2BY0KJ3RloxX6aDVn6IBgyKCAGB%2BHLKHYenprG9rjLv2F6MnfqG3TEtWPl4FBpScOV%2BpjDLRGbVgvTmSqdeyehbd9KEXfI50jrEVrbSNNkXm11U5xffcZ%2F55GNR3GM0bhz%2BGrx6NqI7K5ZJduIAyQtbe01TxcH0%2Bv73yaCetIsBAoz6YD7q%2BH4993TbNGn%2BfsaPXjUEh%2B4ssfXWSNrD1VMM%2Bg6cxIyGOxiVIZmm79VnipFvnJAWgoimu0QQ8cqR1vf6Ck2Phq%2B5PCQCIkkoIZEWcnL9cMMEfq76IFee7EqUIYlSxYG84kUSeRJpExdue92gzZ8j4CZp6WiaC8Pf65xAZbQqd%2BNSZA%2FQsQM4PT7KHfPe3sw2dZ3upIpNCNuX3sv2NMOC4q78GOqUBOSMwwLSEdXNbjKpZQ7yFxru5jGsxpE185D79Kaqe4G%2FKgfAox2JkJWivzaL%2F6P39gjE9WJA2cN1qG%2FKvua0K05wNth6sue6IscOmOfz%2BR9C9lgzI2tl574WTrtGudXWJKYHx4OSHHeoj3OhuwEnnUFl3osQsPEwPpQtAs0i8JDm%2FH1bR4G9s0R5jmumq6wRGRvLSkJPzEYoTlyUfYPEJWdyzWb9P&X-Amz-Signature=c827b558c11a1b017a20dd94fc01f7a0abc98e0783c8404a422491adaa8c92a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
