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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MDGWOT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICKUzStm1DY%2FVYtomoEeD8KHDtlRGtf%2BCl29W9pPQ15BAiB1PaQS2o8NPZPqzmfDbhik6J1kJvSmPBrPo9sIq0qqRyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMQ9taBPGpcD0pCxxsKtwDW3rI2%2FeDbOJO%2Fxmv%2B%2BPx7OQzAG50dLNkjad3PvXBx7AM87L5ASZBiPGe87tXsESJtdn737npV2Ue2RFXWGCU1NQuZdEA0mdopKZmU1V%2BoFgJXGL30xbKWAJv%2B2zRAQG4bDI3sdJUHNvo9ZD5IHe6kruu%2BX2JQAjTg%2BD8oFspsRSJXi8HbV2d2HhwxGX4FfTesxZIbECDAC0okcTmeoaYJ%2BEMFi9PwZNVRhlNrUoaP2P7p0zEcpDTy%2BN%2BU%2B8WLhAwF4ZPqASur8j4SuiRg%2B1kJatO3xPKkoX6RimP3nJ5UwOMa%2B5WlXk1NOqgjxTrP%2F63N76YG2wOWlUhHuj9uRrrkna%2Bh0R8VXkl7TQohPtO%2BqEdHjs68RR8OErhObfF3%2BW26AxsqKBrMTU%2BaAv41i%2FkD27PPQ7gCLuSSoQ0R9%2FdqgGsqmmU7VfNDJidCbPmUwQIcJs06yrL9ceBSyNWzOtvYrCUl6KTSJys7CcRxG5VIR5%2FlJvT3nOQ%2B04%2B%2FpDjHwNyYk%2BepPd%2BmzZGu%2BmYTfFhFmzWRAMFwgOFH7n565z%2FOAN9FGZQvhHoGYiY2wwILeO1%2Fb2ChpF5D1dWGhK7LGdUnQ4RZysyOfKKhtOXD6bGzh4OOylTC1OJGTDvbiEwq8f4vQY6pgFaDI7p2WeYpcrQk5W9wHmb%2F%2BfTLi6sbTPDUi1XTU0yHWxTMsnxY%2B6ugNGLzseJh9TuDbn2n1bQgaSBixTQBrK7EtGsNj08ZXyLOd85ROfpqOr2xmvHtrmMTbBxrzEPMTmDbMyGcS6oM2m6GDkG26Xe3%2Bb8I9075yJrV54iI9dFn6ZWfvgmvl8MQHAgpPfhAgG5asB914IflXtPMlR4PRS%2BYXmploxu&X-Amz-Signature=01828f71de3c7f5e65b66c09e7ca6ff8d30f1fbcfbcc1bf65ba57a1423093ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MDGWOT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICKUzStm1DY%2FVYtomoEeD8KHDtlRGtf%2BCl29W9pPQ15BAiB1PaQS2o8NPZPqzmfDbhik6J1kJvSmPBrPo9sIq0qqRyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMQ9taBPGpcD0pCxxsKtwDW3rI2%2FeDbOJO%2Fxmv%2B%2BPx7OQzAG50dLNkjad3PvXBx7AM87L5ASZBiPGe87tXsESJtdn737npV2Ue2RFXWGCU1NQuZdEA0mdopKZmU1V%2BoFgJXGL30xbKWAJv%2B2zRAQG4bDI3sdJUHNvo9ZD5IHe6kruu%2BX2JQAjTg%2BD8oFspsRSJXi8HbV2d2HhwxGX4FfTesxZIbECDAC0okcTmeoaYJ%2BEMFi9PwZNVRhlNrUoaP2P7p0zEcpDTy%2BN%2BU%2B8WLhAwF4ZPqASur8j4SuiRg%2B1kJatO3xPKkoX6RimP3nJ5UwOMa%2B5WlXk1NOqgjxTrP%2F63N76YG2wOWlUhHuj9uRrrkna%2Bh0R8VXkl7TQohPtO%2BqEdHjs68RR8OErhObfF3%2BW26AxsqKBrMTU%2BaAv41i%2FkD27PPQ7gCLuSSoQ0R9%2FdqgGsqmmU7VfNDJidCbPmUwQIcJs06yrL9ceBSyNWzOtvYrCUl6KTSJys7CcRxG5VIR5%2FlJvT3nOQ%2B04%2B%2FpDjHwNyYk%2BepPd%2BmzZGu%2BmYTfFhFmzWRAMFwgOFH7n565z%2FOAN9FGZQvhHoGYiY2wwILeO1%2Fb2ChpF5D1dWGhK7LGdUnQ4RZysyOfKKhtOXD6bGzh4OOylTC1OJGTDvbiEwq8f4vQY6pgFaDI7p2WeYpcrQk5W9wHmb%2F%2BfTLi6sbTPDUi1XTU0yHWxTMsnxY%2B6ugNGLzseJh9TuDbn2n1bQgaSBixTQBrK7EtGsNj08ZXyLOd85ROfpqOr2xmvHtrmMTbBxrzEPMTmDbMyGcS6oM2m6GDkG26Xe3%2Bb8I9075yJrV54iI9dFn6ZWfvgmvl8MQHAgpPfhAgG5asB914IflXtPMlR4PRS%2BYXmploxu&X-Amz-Signature=2ce96b889404d8666411aa17f84740444b3ffa5c6aa4df900542c5d210126c94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLU7C6FB%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCW%2BPNgg285ubmMHTtdyOP93w%2BaLYuzb9bbrfyw5hlKNwIgL8Kx%2BafVPtX8Xux2lztHATvRZf%2BdE8%2BcxNR2dTd0zwMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJsbqut%2FR9cHeSWIqCrcA146AwWpvHN1iUk2Z%2FaAv4JzGVGRYAI3%2F00L0bFgBNDb3EajfteCZ9vXxDjuui6hzDnebE9pJaKPksikHODW1NwzJ17yKQYBaTawlTJLruzY%2F7fCKI%2F%2BPiaZDQtBbj0pXH63SLvpfY7fjxuestyMUCq1qr8W5kINvL4XoixBsmB8RR8CJD%2BESFrejrKXCdDVclTQm3dbm22FUSsK3zzIxC%2Bo9Rp5NCcH2FGKAZQulNiRo0LOOET3tdkY9Cg5d8vkqLqktQvu5eEpzp8D6iv7TuC4VsosGS4fAMDtN%2B5PAhgImymLjC9jeJ82GxhgZl%2F448d1erxyxSRVy8fABvTHvh4%2FLUinrytELD58zqq7YPm%2Bq0KIwL6UUSS%2B%2BuTVaXqaQeHk6GA7fLnGxTiamWN6RJHxVDj5O%2FIey%2FQwkAIpaxfcVMz%2B%2FcIEBtzTA0JxTGVOxAJbFf9efjMb3wB3pEaCbi%2BQ6IfcvXE6OhFOzOnr9QCRI23k80XBfZ%2BHRK6xa3Qj5cJt4iQVRsLMc7SyOo5Xwir44U7equTnNU8M7B2zMppqJht7op21gQK37DTrcPeaymje23fYuJiLeqx9UkUuVuDqg45gKOdkBxPei1YoZ%2By8sUOZJlbwSK%2FavDstMITI%2BL0GOqUBeFyUbIHLwoGNXpG1eGSwRGTDt4GkPdexiDx%2BA1b2qRFM8cHFeA3N1NQMq1hOc4sBZF%2BY%2BLNUIXYJFcn%2F7UgPv%2FBHLN4y8mxsfEf9Ttv4nGEMZzXiAHE4%2FVfmjcuS21s%2B6z1v1dJBIhKA3n0jipF52Hw9awGsJyxGavzAr2zPqOkVRjBTtOJQRBQEfcW7h89LlbQ6J5nh4yu1WwSwLGZWc32Cnt0A&X-Amz-Signature=6804d989e28a09a2367a1828b41857adc53eb83f10925cee0f229ebbebd806b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFKGUNY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCCgQs39f4Sl6i%2FWLDyBPJ%2Fqz75eLSsROz5DfMUf0igsAIgYFNJv2%2B%2FSVruQXxC%2F79CB3QSyPEEMdsoksawfGmDh4wq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMoy3OcL5vBSfpNcvircA3s1BrvhHF7plrt8xEexThArSX%2BLrDshS41flJgJlGwB2HKhaUfOM0bwteWwHItOTKqF0RPasM%2Fc7PvTI2UoEQawmsRNrwdas%2BkVw9DefTIUMFmIu%2F760kmIRMOA7Phi1%2BIBiRWoIj7c%2FZjBO6FudZ7PvGeZAL8OXEBBaKGxIsa0g9oFLPEPWI3OOu0X84rFkmdTWUutweiKCk1lQOZmWsQid0CXAYjF2Zuy35tgza1hRn6RSXgqvkIqYd0sJBlHceIgdP5ItVO5UwhJwo%2Bc9y%2Bhz9gaNVNqsc2sV5SLqEn5Jx%2B9voLe6dmjsYn%2BtZMt41o5H2ps33uffW3kyH39J3BpOsDzco7G42YM5G%2BkB2sii%2Fvu3gukHqODIj2Y8GbKYF%2FCSQP%2FQsHNvJ0E%2B%2F7g3SOy%2B1ao2YXwnxpxLwE0DJSNdgOX9Vd0AIy%2FySaHUHwcgpkeqrCNET92VexVC%2FHs0%2FtZN4JSscd8duLG2MBKDp%2FzJu3K6seEqs2Q38UGp1J7RKe7Sm5CNcfXQnJcgkDDe88fsPI%2FYhOrM9AHDxy4YwSR097Rcqv53S%2F8y%2FUKRRgKxwqdCEjJFiAW8v8y4k8cSzw%2Bz2tPUkLAqbUu2DKE2pzVFfNtG%2FDXPi3nOL47MJ7H%2BL0GOqUBpcFBS805mC8IuO8br%2Bl0z8g4fP6Kuq7XYP%2FDMjWEAOibASVCKBZ2RxqkbcGUgMcvOM0TLzG6dAC1tWW9XILANyHCrfs1MQBrqUPyvpFVrgAxyqQiY4g1JADzs3zIUWLZTgNxw4zFjLdwwhsYAnOOKOtudpDaX0GvvDpTaXVC1ZU4QMaUajlGKOg0M54W1J9nkyGiQg5WkNHFkCXmZ8dn%2FtDmHvD0&X-Amz-Signature=f13b12a7e49dba4649c4bf6e7cc5c4cf97b4b046a2ec5b46db14b32c2651d0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MDGWOT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICKUzStm1DY%2FVYtomoEeD8KHDtlRGtf%2BCl29W9pPQ15BAiB1PaQS2o8NPZPqzmfDbhik6J1kJvSmPBrPo9sIq0qqRyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMQ9taBPGpcD0pCxxsKtwDW3rI2%2FeDbOJO%2Fxmv%2B%2BPx7OQzAG50dLNkjad3PvXBx7AM87L5ASZBiPGe87tXsESJtdn737npV2Ue2RFXWGCU1NQuZdEA0mdopKZmU1V%2BoFgJXGL30xbKWAJv%2B2zRAQG4bDI3sdJUHNvo9ZD5IHe6kruu%2BX2JQAjTg%2BD8oFspsRSJXi8HbV2d2HhwxGX4FfTesxZIbECDAC0okcTmeoaYJ%2BEMFi9PwZNVRhlNrUoaP2P7p0zEcpDTy%2BN%2BU%2B8WLhAwF4ZPqASur8j4SuiRg%2B1kJatO3xPKkoX6RimP3nJ5UwOMa%2B5WlXk1NOqgjxTrP%2F63N76YG2wOWlUhHuj9uRrrkna%2Bh0R8VXkl7TQohPtO%2BqEdHjs68RR8OErhObfF3%2BW26AxsqKBrMTU%2BaAv41i%2FkD27PPQ7gCLuSSoQ0R9%2FdqgGsqmmU7VfNDJidCbPmUwQIcJs06yrL9ceBSyNWzOtvYrCUl6KTSJys7CcRxG5VIR5%2FlJvT3nOQ%2B04%2B%2FpDjHwNyYk%2BepPd%2BmzZGu%2BmYTfFhFmzWRAMFwgOFH7n565z%2FOAN9FGZQvhHoGYiY2wwILeO1%2Fb2ChpF5D1dWGhK7LGdUnQ4RZysyOfKKhtOXD6bGzh4OOylTC1OJGTDvbiEwq8f4vQY6pgFaDI7p2WeYpcrQk5W9wHmb%2F%2BfTLi6sbTPDUi1XTU0yHWxTMsnxY%2B6ugNGLzseJh9TuDbn2n1bQgaSBixTQBrK7EtGsNj08ZXyLOd85ROfpqOr2xmvHtrmMTbBxrzEPMTmDbMyGcS6oM2m6GDkG26Xe3%2Bb8I9075yJrV54iI9dFn6ZWfvgmvl8MQHAgpPfhAgG5asB914IflXtPMlR4PRS%2BYXmploxu&X-Amz-Signature=f3abd2366481abdd3ecc85686c4f693fbab6938687dc9d97eb1684a5064c83a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
