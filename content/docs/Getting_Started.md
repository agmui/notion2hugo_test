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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZYMLZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGsnuVDGoiTZfBbUU7FTzFkk2zz0%2BAwg564S0wIvKxltAiBr4tPMzk1FnCMXTJwHVTfkFpj9ucxDqecZJeYxFUJ2DCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMzlOhDgYzy6dpDCtTKtwD7oWB%2F%2Bf4k0tMTkVdaIxxeB5uH7k1u6sIpjo%2FSVKqVebjqdyZ0uhwCDk74V3G034qXDWWtSopNsiAhv9OYyHgdHoYQuj13weHV40ujQNI9NVJfgg9k%2BwD93SgsKPmRSdrUg6KwAMTkW4I2z0jpAjOTWNiE%2Bb1Pd5gGP3vBgCmchJKw5bBHLXGciBT8beA5zObG4LL59HUt6UGtbLUHx3u3z69J4A%2B9tznuY7bpU6ed994AbZq5nUwS5yXPbpLUF9r6u%2BKozRF0qXHuBURtA0gJ%2Bm5ZLoH%2BPt8Mly5dna7E14lUCn0UHYEQdrsTzm5T00VTKl0vQX7%2F0OeEJIgKu3yhnW8lXZhpIqrwu41QzBU5XzfYd5mQql4XtGfwSUn3JHLteMgNWw51Gw5gmC%2Fe0qm1tCckj097UJ%2BACwLe2ZoKLWP86IruKau0jJlleoGG4wJhduQvviYWNwfLd83gBq17yXyCD2XR2fnZR0%2FnKBQ7D2o472vEHa4DSefHOo7Jg5r9THkwSphVR0asM3Zib3kj4ECIWiponpA5IVVQli9VNeORd5Vj9pUQvH%2BW00Z83zOBjYtXb0q39%2FetN%2FeAELCF2Qb%2Byd0%2BoB2aL%2F%2FZ9DoX6AqFLLY2XQH1agx3kEwj6qjwwY6pgFFZfDUdcH087HZlANmB5OBvDuLx%2BpLHIrdk69PRy1G8xVDlCb0dKRDSDcYEPkhkllTf%2BkDWqSaaaD6SdibFsSagNKAeyOj%2Fz11rjWFgzxc6gavBICb5S%2Fy7fDrxk5QQLR0Qn9NY17Ya1j7YpqqF32DVmyi2oc0AlUBA7Zyalg9dMYSZkaJOp%2FI5BLbVGnCuzzGsiSjiV5AVWThY7S7q%2BAwpa3vw7pX&X-Amz-Signature=5b1a770ed47e447b64f878a6ef216a8d0397e18cd7ddc58277be198c6a2affe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZYMLZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGsnuVDGoiTZfBbUU7FTzFkk2zz0%2BAwg564S0wIvKxltAiBr4tPMzk1FnCMXTJwHVTfkFpj9ucxDqecZJeYxFUJ2DCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMzlOhDgYzy6dpDCtTKtwD7oWB%2F%2Bf4k0tMTkVdaIxxeB5uH7k1u6sIpjo%2FSVKqVebjqdyZ0uhwCDk74V3G034qXDWWtSopNsiAhv9OYyHgdHoYQuj13weHV40ujQNI9NVJfgg9k%2BwD93SgsKPmRSdrUg6KwAMTkW4I2z0jpAjOTWNiE%2Bb1Pd5gGP3vBgCmchJKw5bBHLXGciBT8beA5zObG4LL59HUt6UGtbLUHx3u3z69J4A%2B9tznuY7bpU6ed994AbZq5nUwS5yXPbpLUF9r6u%2BKozRF0qXHuBURtA0gJ%2Bm5ZLoH%2BPt8Mly5dna7E14lUCn0UHYEQdrsTzm5T00VTKl0vQX7%2F0OeEJIgKu3yhnW8lXZhpIqrwu41QzBU5XzfYd5mQql4XtGfwSUn3JHLteMgNWw51Gw5gmC%2Fe0qm1tCckj097UJ%2BACwLe2ZoKLWP86IruKau0jJlleoGG4wJhduQvviYWNwfLd83gBq17yXyCD2XR2fnZR0%2FnKBQ7D2o472vEHa4DSefHOo7Jg5r9THkwSphVR0asM3Zib3kj4ECIWiponpA5IVVQli9VNeORd5Vj9pUQvH%2BW00Z83zOBjYtXb0q39%2FetN%2FeAELCF2Qb%2Byd0%2BoB2aL%2F%2FZ9DoX6AqFLLY2XQH1agx3kEwj6qjwwY6pgFFZfDUdcH087HZlANmB5OBvDuLx%2BpLHIrdk69PRy1G8xVDlCb0dKRDSDcYEPkhkllTf%2BkDWqSaaaD6SdibFsSagNKAeyOj%2Fz11rjWFgzxc6gavBICb5S%2Fy7fDrxk5QQLR0Qn9NY17Ya1j7YpqqF32DVmyi2oc0AlUBA7Zyalg9dMYSZkaJOp%2FI5BLbVGnCuzzGsiSjiV5AVWThY7S7q%2BAwpa3vw7pX&X-Amz-Signature=52d2f10913a03a7f018c8bc99a841e1a7febf430009510c2c5fff9e2ebac0bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZYMLZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGsnuVDGoiTZfBbUU7FTzFkk2zz0%2BAwg564S0wIvKxltAiBr4tPMzk1FnCMXTJwHVTfkFpj9ucxDqecZJeYxFUJ2DCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMzlOhDgYzy6dpDCtTKtwD7oWB%2F%2Bf4k0tMTkVdaIxxeB5uH7k1u6sIpjo%2FSVKqVebjqdyZ0uhwCDk74V3G034qXDWWtSopNsiAhv9OYyHgdHoYQuj13weHV40ujQNI9NVJfgg9k%2BwD93SgsKPmRSdrUg6KwAMTkW4I2z0jpAjOTWNiE%2Bb1Pd5gGP3vBgCmchJKw5bBHLXGciBT8beA5zObG4LL59HUt6UGtbLUHx3u3z69J4A%2B9tznuY7bpU6ed994AbZq5nUwS5yXPbpLUF9r6u%2BKozRF0qXHuBURtA0gJ%2Bm5ZLoH%2BPt8Mly5dna7E14lUCn0UHYEQdrsTzm5T00VTKl0vQX7%2F0OeEJIgKu3yhnW8lXZhpIqrwu41QzBU5XzfYd5mQql4XtGfwSUn3JHLteMgNWw51Gw5gmC%2Fe0qm1tCckj097UJ%2BACwLe2ZoKLWP86IruKau0jJlleoGG4wJhduQvviYWNwfLd83gBq17yXyCD2XR2fnZR0%2FnKBQ7D2o472vEHa4DSefHOo7Jg5r9THkwSphVR0asM3Zib3kj4ECIWiponpA5IVVQli9VNeORd5Vj9pUQvH%2BW00Z83zOBjYtXb0q39%2FetN%2FeAELCF2Qb%2Byd0%2BoB2aL%2F%2FZ9DoX6AqFLLY2XQH1agx3kEwj6qjwwY6pgFFZfDUdcH087HZlANmB5OBvDuLx%2BpLHIrdk69PRy1G8xVDlCb0dKRDSDcYEPkhkllTf%2BkDWqSaaaD6SdibFsSagNKAeyOj%2Fz11rjWFgzxc6gavBICb5S%2Fy7fDrxk5QQLR0Qn9NY17Ya1j7YpqqF32DVmyi2oc0AlUBA7Zyalg9dMYSZkaJOp%2FI5BLbVGnCuzzGsiSjiV5AVWThY7S7q%2BAwpa3vw7pX&X-Amz-Signature=0685b9512110ba0b98d230d46ed2d8a7ec4ba7c5d3801f01e3d828a16e264095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCSMHE6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEyOnD68tbEPzPjqGgrUPp%2FAD%2FTn5hmRz1ji5qmBpU3gAiEAxaUwK1YB0Dbdyg0oHa57LB5t2XMkTWKsYVMYuGYKZ9Qq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGWPf9JmXUyvPCG%2BYyrcA7hKTxega7n5AYeRgTfYFbJeEfF97BOojjEIzlFLNw7pV6%2BMKrk2VriROuvwhuUtfKxQA1a6JqtYzj%2FRX4%2FXA5N9Tz6WXoy2%2Bz7xPdDlGVTN0GHRUV%2BB49MQtgo2PLTVeqwiItizuYMfdcII1Si69Ip4%2B3xnmFhdjsH94%2FpKhx60AHy1Mnyop%2F5hG0cIkppKa3pzbFQ0CZkg99OuzpLrBrIRPLrlCNqvMg0XZnu1iN8iN7onRVpas8OlJhwKmMEB7WH2FzCfsGl%2FJyF6Wsf4AWElDzKSfIM0wu%2FN6EKI5QCCs3joqnalp%2Bsfqmu9kQKpHDS40L4cXSFg9UBxs8O14lI9RlbVF2ejv7JwQcN7FLYzFjQc4cl5oolssD7t0EUGEv1WAibfB0nYCayenO%2FwV9O%2BmodgR8PZbE7ihsW29Q%2BTNa%2FKHlSWgfdAZK6cOfvgvpeZodsJRV9FOnCCrS%2BVQ2zuBwsvztgdeRoea8UZact5FFUOpasFFNmLWLsmRUWdGn%2FdtTsgsIcNlkI2KpikNBBgGhQEFEoqX%2Fsu2wYA9uSwHS2IufH6nMRvst4bAoTSRAS4XtL7PEqfIqdNGU%2F3CJDGnUWb5KWiwEsvpYYWl4w29K0g0WwW58v%2FcnBiMIjJpMMGOqUB4uISrseHJiw%2FNsO2zt8lShM%2B6PLUuXmPHmPt7ZJYZr%2F3k0u%2B0oM1%2BLvXuIUFVKVJqGPLzNGvG7JSJG74LkEbtBxIJuFM%2FOrdp5Xr0dfNTosIFbjHoUx%2BheO87LTofL3C2gnw3iIsdLRSZbiHYSVWHnAw6pnaFEhmeRoRVa10hieN5aaGIZKRKrKRTbHJFJqgB%2FMHHOfvO6Im8fcWiz3a1p7B00XJ&X-Amz-Signature=150842b45757da969cf1cb96ab886f0e6f3fd90b25e92daa494f3950dba4b858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IIGU3T%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFURfFsNmnjYuVUIcWx44EZ4VnuQdVGWXkxrEk5CiJzCAiBHMI7oValaKOXjLhziRChM0ADYcdOl5b1%2FS7jBgop73Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMANNes4dCXpIgxFnnKtwDulFZ8%2FHh1edmrN2GnjTAizvF5CgFhMuwUq38BXxGcvhdCmq3JrfweIm8oS6j2NgwVVdU0aPpzyK0Qt6JoIv%2FsDnF8zj3VGwBhyLSgYvpshh2h9wsBn5FLyWlpoBgbyUMPxf%2BuiazgdlFgrh%2Fdg9TcA2kbyCJsg80kWNBLrWJiaXyBW1AVE9FUv7c4CPHa91VxkxbPcJzjhq3FGi9kNKPNJHasSZZjJs6MvnpW87SywsOwbpZBh2mDvEHfVXGmru2e87tZ5rpXTLWx7VEWnEQ50MPcuzYFABXsMNQn0bfwN3JXpsCUr9xFM6xtrSL%2FEqsxFrHcOtudITolfibLACjgEUjJvB3NGjBbwUsIYO7063N3X%2Fc8z26l41pAsfWLLbN1a0vdKc9t9rTmo1e17mYPPtAJQ86BfWWn00yN8vDpUDXaC7nMTtclMpJsndYY7loaZ2SIjR7Cmm2eaD%2FWWM%2B5R3xd5ifs%2F9tO2ES7%2BZhjUecJn0hvK7EL0HamQqeU73eHBgnCNGZvi2gR0hgrI1lBjrSDB44jRDWja%2BsgxSgR%2F89y9BBnMDzKSXu1KQnKp2gGl%2FLjvEeWpmMMF5tcpZ%2F7scWyYOGSBhUZe%2BgFt6gsYDf9Gz7lUPVmLFHLfkw%2FqyjwwY6pgE0Z8tGMFLEvsRILbZvvhMljn1NoSts21aS9jv9CReEloQo3hOPA3bIES%2FLj6vFolr%2F5ZVy1Rq35CexrLGbMrcYaTddKEiIFSsbB3ESmD7baoauXSzTkZ%2FVsYhjoN2bMXL7lugXTli1SPbscsUHatToHfzmOOAXmcukLz9nINaz%2FZh509nIDFCvDzAZyyHj3I06n7Y9ReH6HqMMsyWvDLWmb7XCIk1J&X-Amz-Signature=df98a00163af9c228d7b8099fd2b3955b3f3af2e9192e59b765f453acff104a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZYMLZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGsnuVDGoiTZfBbUU7FTzFkk2zz0%2BAwg564S0wIvKxltAiBr4tPMzk1FnCMXTJwHVTfkFpj9ucxDqecZJeYxFUJ2DCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMzlOhDgYzy6dpDCtTKtwD7oWB%2F%2Bf4k0tMTkVdaIxxeB5uH7k1u6sIpjo%2FSVKqVebjqdyZ0uhwCDk74V3G034qXDWWtSopNsiAhv9OYyHgdHoYQuj13weHV40ujQNI9NVJfgg9k%2BwD93SgsKPmRSdrUg6KwAMTkW4I2z0jpAjOTWNiE%2Bb1Pd5gGP3vBgCmchJKw5bBHLXGciBT8beA5zObG4LL59HUt6UGtbLUHx3u3z69J4A%2B9tznuY7bpU6ed994AbZq5nUwS5yXPbpLUF9r6u%2BKozRF0qXHuBURtA0gJ%2Bm5ZLoH%2BPt8Mly5dna7E14lUCn0UHYEQdrsTzm5T00VTKl0vQX7%2F0OeEJIgKu3yhnW8lXZhpIqrwu41QzBU5XzfYd5mQql4XtGfwSUn3JHLteMgNWw51Gw5gmC%2Fe0qm1tCckj097UJ%2BACwLe2ZoKLWP86IruKau0jJlleoGG4wJhduQvviYWNwfLd83gBq17yXyCD2XR2fnZR0%2FnKBQ7D2o472vEHa4DSefHOo7Jg5r9THkwSphVR0asM3Zib3kj4ECIWiponpA5IVVQli9VNeORd5Vj9pUQvH%2BW00Z83zOBjYtXb0q39%2FetN%2FeAELCF2Qb%2Byd0%2BoB2aL%2F%2FZ9DoX6AqFLLY2XQH1agx3kEwj6qjwwY6pgFFZfDUdcH087HZlANmB5OBvDuLx%2BpLHIrdk69PRy1G8xVDlCb0dKRDSDcYEPkhkllTf%2BkDWqSaaaD6SdibFsSagNKAeyOj%2Fz11rjWFgzxc6gavBICb5S%2Fy7fDrxk5QQLR0Qn9NY17Ya1j7YpqqF32DVmyi2oc0AlUBA7Zyalg9dMYSZkaJOp%2FI5BLbVGnCuzzGsiSjiV5AVWThY7S7q%2BAwpa3vw7pX&X-Amz-Signature=c78b1f4aad23c29b7c7a052080692156b06f340ec8eb75c32ec4d22d59d0978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
