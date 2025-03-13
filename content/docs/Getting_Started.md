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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASIVULO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL%2BBLnt1VEvCLtv4vNGtx7M8p%2Bilj0WHQZP94cDQR3zgIgZckRFuh6o1XU8Jg9mnMdK%2FqhjLUEXm78m%2Br9NrOD03QqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4OQSv3LCFvrO94HCrcA6gqI7HzBNISIyHzoMtlsdtAmujsUdbPC2W5CYNhMMSHeUbffz4Xyogkc500WE3obzYph7mbOzTAOhg52s2YuxayNsEb0QYklzinsipB%2F2JxXh5z7MCoXJJ0ojdtGwmbnH4Szsu8QMWi8XbW7xXToxSHlZHRzi47X1L8B5F2ZUgH9BBzkOhLjL44kRG71AcPNudHR4VejE3EiS93I7PA09BYm0mpz%2B%2FiONAkcJRbYBcF3RUZgPQRkberMOOYxynAxZGjpmB%2BeZi%2Fm%2Ff83lHXO1X2QOZ52zqFfDE2%2FCBPTEBgRHTYeNLioS%2BmcU46P7MpN%2FJKnKXP2Z2rd3ZCY5S%2FuR9eKdNe%2FAvTlYv2P1FnjQvFgaNwGaxx7GR%2BnHG3RXI5hC3rf0lvYc28zDuUWrhjBSCsCav7bPGNK8wFKV3X87om8Fpp8ccNROEivvh3G%2FUgk6LLpoN1n2io0YC4NXnXNO6RiMSQ6Rvt5grhDyClRzhTm0Q%2F%2B9jZF5K4sWuK1twcGwaoAInp%2BLQaffLuByp6EdhdwpYtLYhhL7mXEDAdhp2%2FghPJwO5D6p7PnkT%2Bs0MaYjphsBz4QPo%2Fr9artZhfU6zZUb0qRzRZO9B1x%2BqDpbu4SYln8IiKq3d7Xa8AMJPhyL4GOqUB6Sgg0m9umM76uAJO4%2Ft%2F0XGe0W4y2nBF0oGXi9rtofs3cZ%2FxHCjWHu489EfP8xhqMMz%2B2HV0NlqvphQ3RE3he8AXVAjB6ALvVsNjAAXr5IZr9ljHt4MI%2BCuc8nUfaxwURIXhIwOso1LzWFeNQw0RNRchfBAZXsMx3LeCVOO%2F401%2Bus1TezETCSaQanUFzdXL%2BVPMxvhankpS2bCD8EtDcwwv%2BQ4B&X-Amz-Signature=50777a5cd23e0a0fe40e36425d3ae8d9b653ecbb1c71d60fda4f1a85267bdfb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASIVULO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL%2BBLnt1VEvCLtv4vNGtx7M8p%2Bilj0WHQZP94cDQR3zgIgZckRFuh6o1XU8Jg9mnMdK%2FqhjLUEXm78m%2Br9NrOD03QqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4OQSv3LCFvrO94HCrcA6gqI7HzBNISIyHzoMtlsdtAmujsUdbPC2W5CYNhMMSHeUbffz4Xyogkc500WE3obzYph7mbOzTAOhg52s2YuxayNsEb0QYklzinsipB%2F2JxXh5z7MCoXJJ0ojdtGwmbnH4Szsu8QMWi8XbW7xXToxSHlZHRzi47X1L8B5F2ZUgH9BBzkOhLjL44kRG71AcPNudHR4VejE3EiS93I7PA09BYm0mpz%2B%2FiONAkcJRbYBcF3RUZgPQRkberMOOYxynAxZGjpmB%2BeZi%2Fm%2Ff83lHXO1X2QOZ52zqFfDE2%2FCBPTEBgRHTYeNLioS%2BmcU46P7MpN%2FJKnKXP2Z2rd3ZCY5S%2FuR9eKdNe%2FAvTlYv2P1FnjQvFgaNwGaxx7GR%2BnHG3RXI5hC3rf0lvYc28zDuUWrhjBSCsCav7bPGNK8wFKV3X87om8Fpp8ccNROEivvh3G%2FUgk6LLpoN1n2io0YC4NXnXNO6RiMSQ6Rvt5grhDyClRzhTm0Q%2F%2B9jZF5K4sWuK1twcGwaoAInp%2BLQaffLuByp6EdhdwpYtLYhhL7mXEDAdhp2%2FghPJwO5D6p7PnkT%2Bs0MaYjphsBz4QPo%2Fr9artZhfU6zZUb0qRzRZO9B1x%2BqDpbu4SYln8IiKq3d7Xa8AMJPhyL4GOqUB6Sgg0m9umM76uAJO4%2Ft%2F0XGe0W4y2nBF0oGXi9rtofs3cZ%2FxHCjWHu489EfP8xhqMMz%2B2HV0NlqvphQ3RE3he8AXVAjB6ALvVsNjAAXr5IZr9ljHt4MI%2BCuc8nUfaxwURIXhIwOso1LzWFeNQw0RNRchfBAZXsMx3LeCVOO%2F401%2Bus1TezETCSaQanUFzdXL%2BVPMxvhankpS2bCD8EtDcwwv%2BQ4B&X-Amz-Signature=06a28bad182eddb8534bcc79767b131d510d894628dd2277283e13f092657a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3R5EZU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK2qbdSvAAsxP5YG4VBAJaCSAiSRrdWwDXMUXR40yi4AiEAyj%2Fcn2CS4MFB%2FQEl6wFU5eWMQ6h7z0shUA2dt9CO%2FGoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO31JUiNuZLLjdw2JCrcA0uewopdUYol%2FCSfJTW6MRPFZF02KmfhcpI%2BGJAhPDYXu1f2tp2QPkPkupLGIRUn9QUCP8g0rvzZIL2GS2m%2BG3smn%2FlZvzlKGpr%2Bh57O6toWYPhJTppH1pKuVZc2U4yKn8Sw8IlDve85qnunKeb5Ynoc68gQYkR%2BqTm8HxUop%2B8RzVsguk1CFbhOfSdMuWUtHoClU122CQ8pcqCDPmWtv59KFYaIiHMQoWScvCk1P1rmvD%2FL%2BkpvlMhlVQqWQNwC9PGAB7fp89wADi%2B%2FQc%2BMwsYPdErfXLJRqz55Zt%2BNu3RPEfSX62t53R3HvbL%2F8VTL%2FPpvOgwEamhStTLh2bM5CzcOM7aDV%2Bjko%2BWPkxuVrTd0riqcKblDEYYlP9Alpj6GtqlbNhbGXqIlkkZbm14zj3UCaGSbjCOL2HApaDKEg8ZerSjur1NNytxgRcDi1I3PiBuJbJkcrGAhwe1UTxs8pXPiBnA40ebW3vVfWlK%2FsNhTSVS2%2FThmsXcU38tQGMBVrTArUElRvRW7GyXjMTSY9aIEckkkDEAO6rsN0VCF1kZPxkSKTUz396BKHUx01SsOTKI8rgBfPGp7%2FnKJWPgQ39Y6s45eNXlM0yoeJZCoZ9lV9zPYEWuWrZ3nEnXLMKnhyL4GOqUBSgOePyc1P3FHieQ0dpiCI1LPWx1yZQCQWWM7SDZw6jCGYd7osK5RjJ6A6YoTrWqVlrdTWyWPGeNbsNo0ckQAjYHSORgA2CLId536jg6MPSgL%2FUtJeKlu0htzbA553pCee9xyXBkSAhZLZuz991H81y3dgGmvhfJefAvYYKkejbTK69eRhB0czC71ncAc4mGFF36ugMcYOKD%2BA%2F9Ms%2Fxsr%2B1TGgso&X-Amz-Signature=c9158d463f01a6b5b226a18e58878ba560812005aea52d6e06f30f7c64ddbb17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMOPUD3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA28yAsbgkbaNFqTPTKn%2BPPG56Q4v3jT%2FBjV%2FVXUg5M5AiEA8YWaY5NXaWfMFYrrozeyGkgodDBNCfdkEnSLVRlRJOMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcbhfjrBxZQpwoF4yrcA3ulgZ2Pd72yf4RQhRumoG4FVuvqlRMwtueS6lvpgjCGY6qp2gnTWCQoHPdSpbteyN4K%2FZkLbZA2cpivSZoeZHcof5jZnDyJRRkDBhzLFy%2FKXENixGAuccoyrRhC9CcZ7KWnEKKfUmnBLvfSGjvCGmqUfBys6idfcBQBOONrfBrMkZyVxqdcta%2FAnkaUGZ0PlAXvHPibqL1JccPQH7dFMZQ0gSN89kw3XQkRRVRyE8fRa%2F7LZa15r4cOFCYtLLys5ls1j7qVzIq0SCheY9bvM68yyfWRSuBCGrYT53Vj6eaCMVo2jtSQQuspApt2FeW5NtG0Zx8IEiGTraSIC6cnrovFPHDJhgzAqBpkJDKfEyhucEp7xcCxz6Rx1K9kkIMknLOqYAbI1aNNhPnsYmJM8V6SOfaW1SwcRiUsoplO7F766OQK09fjdOoYSNF6fBcEOVmiMXCL4FZgrzVC8OiffGSu20CbvDLIr0iuHqdSE1IyFanS6eXXLrQZ38i6eiMJLcv9tsySYRVDgORIhwk%2FjQDPx%2FN1UMZjnZ6SgQz8hZeHePIy2Dk6zhoO%2FYAPyb5f6aWJNAOTnrkgNlU7qoPpjUmU33XTQDxUPFpqJ9CU5i2iuqn0M7EatjaqlI%2BjMLTgyL4GOqUBZQommRVcviVOpxbDQoWJJGg4j6AfO%2FZldejo35y3pca%2FnU%2FREaBBFz%2By5NFEOPou84fyFLogiW12fFd3v%2B%2BbCqYnRWEEfvdEzcbk4SXCLrzoVTcwzsCYc9l706ZX31iOzFVNsT6c5dI9kGjG8yugKcsZnn1MAyxRHZGEOB2Y1HRR3HL%2BmM%2BYwG%2FKJDFy4ubxrSOAn1dwbGyhiE5TRFccmC%2Ft7BNQ&X-Amz-Signature=39ed11a3f07c0eecdc4e07108120e10e689951e8724f1a815d96d900cf002f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASIVULO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL%2BBLnt1VEvCLtv4vNGtx7M8p%2Bilj0WHQZP94cDQR3zgIgZckRFuh6o1XU8Jg9mnMdK%2FqhjLUEXm78m%2Br9NrOD03QqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4OQSv3LCFvrO94HCrcA6gqI7HzBNISIyHzoMtlsdtAmujsUdbPC2W5CYNhMMSHeUbffz4Xyogkc500WE3obzYph7mbOzTAOhg52s2YuxayNsEb0QYklzinsipB%2F2JxXh5z7MCoXJJ0ojdtGwmbnH4Szsu8QMWi8XbW7xXToxSHlZHRzi47X1L8B5F2ZUgH9BBzkOhLjL44kRG71AcPNudHR4VejE3EiS93I7PA09BYm0mpz%2B%2FiONAkcJRbYBcF3RUZgPQRkberMOOYxynAxZGjpmB%2BeZi%2Fm%2Ff83lHXO1X2QOZ52zqFfDE2%2FCBPTEBgRHTYeNLioS%2BmcU46P7MpN%2FJKnKXP2Z2rd3ZCY5S%2FuR9eKdNe%2FAvTlYv2P1FnjQvFgaNwGaxx7GR%2BnHG3RXI5hC3rf0lvYc28zDuUWrhjBSCsCav7bPGNK8wFKV3X87om8Fpp8ccNROEivvh3G%2FUgk6LLpoN1n2io0YC4NXnXNO6RiMSQ6Rvt5grhDyClRzhTm0Q%2F%2B9jZF5K4sWuK1twcGwaoAInp%2BLQaffLuByp6EdhdwpYtLYhhL7mXEDAdhp2%2FghPJwO5D6p7PnkT%2Bs0MaYjphsBz4QPo%2Fr9artZhfU6zZUb0qRzRZO9B1x%2BqDpbu4SYln8IiKq3d7Xa8AMJPhyL4GOqUB6Sgg0m9umM76uAJO4%2Ft%2F0XGe0W4y2nBF0oGXi9rtofs3cZ%2FxHCjWHu489EfP8xhqMMz%2B2HV0NlqvphQ3RE3he8AXVAjB6ALvVsNjAAXr5IZr9ljHt4MI%2BCuc8nUfaxwURIXhIwOso1LzWFeNQw0RNRchfBAZXsMx3LeCVOO%2F401%2Bus1TezETCSaQanUFzdXL%2BVPMxvhankpS2bCD8EtDcwwv%2BQ4B&X-Amz-Signature=dff1bd79d3a277b2d14fbfc91a3c571cd91688fab8e4726ec56df5a22ca1fc46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
