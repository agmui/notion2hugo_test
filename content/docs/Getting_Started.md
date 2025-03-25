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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JUOP5ZH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFecga0gFTNW09gqdUQ4kB6hRWzdr%2BKCQEPMmEf2RgxQIgEJOGekBa3YkREWz4096M1gyrW12ea9y1i6RMbvPan%2B4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMrCiqxVoExlGWmRsSrcA6jae6p%2BqH9uCecbdpfkunkFDmmYiOGAyNL5rK0RZihCZ8owigOGC%2B3Mdfyq27SRjyQZog9WNTEaTaj8FAl%2FRVKOvaiMrcSzjrux2WjAHAXr1cXkMuYSlfQ4ApKuxesW899Hw2C8qHC2xO50hKf7hlvzvm3xdvCWCoMfA1LKEIK%2BU6Xp1rVr2R12jjlls3kWTkMSV6GFM61oTUwJRYV7VMXJFDQba5pWMlBaVZz4%2FaA6NlRF1TBhdFRBMkfIH%2FoPckvU0EH4ICBBxKTsMuDv5%2B0BT5hstmjCrQLVWyE3GimlTWhtyuAO2iDYG6jrubQ5Npa5ZvwtmWp1e4Uf2led%2F935LSkFd7bbv%2BxCnAw0%2B2Y%2F4dKmoKx7AV4csq%2BtIg3H1ipIvnpRayovLHWRH20YzZ1ztvkHv5dbyaETM8oRSEYWYYbqTRGA2%2BjgWvRGCnIRHc%2B9JepAW8vEgvnEuUh4eB83cYx0w6K7Ct6EOi9tvUL%2B8kMHCIvejQqlbv4DmgWnmNPIsYYoiMu3YjXRwo8YK0Zh8qcNO010U6yCV9yEiHiLyvTLXE9W2F2%2Bg7DqgF21dOQPeI28OcPbNVmrZVm0YHW33uYckMBzGEHtSKU7Q%2BaP4vDARcxVoBFMSVfAMOeji78GOqUBz11oEugU5V4dpSzDl9TDUY1z1ZhjLIugGnaTmaa3eAPU5wHKVYvFIa219U4G873%2BMgowGgLUU6Rkp3a0L5jZcKvFKcInN3lpdSc%2BordnM6C7mW48nxq7PKa1Nlv%2FepSyM42hdXjbENrf8eN4O2JXsLxuRXqcj3QxZjN24fz4A8NihfKaWBHjUwW2bGpUfz%2FLjsh%2Br8l9XIUA95WrKyCdk%2BVUyehF&X-Amz-Signature=c65b2fcf48753e9734935791bf1281afefced450c0ca7bf1825d9c36bcc348e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JUOP5ZH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFecga0gFTNW09gqdUQ4kB6hRWzdr%2BKCQEPMmEf2RgxQIgEJOGekBa3YkREWz4096M1gyrW12ea9y1i6RMbvPan%2B4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMrCiqxVoExlGWmRsSrcA6jae6p%2BqH9uCecbdpfkunkFDmmYiOGAyNL5rK0RZihCZ8owigOGC%2B3Mdfyq27SRjyQZog9WNTEaTaj8FAl%2FRVKOvaiMrcSzjrux2WjAHAXr1cXkMuYSlfQ4ApKuxesW899Hw2C8qHC2xO50hKf7hlvzvm3xdvCWCoMfA1LKEIK%2BU6Xp1rVr2R12jjlls3kWTkMSV6GFM61oTUwJRYV7VMXJFDQba5pWMlBaVZz4%2FaA6NlRF1TBhdFRBMkfIH%2FoPckvU0EH4ICBBxKTsMuDv5%2B0BT5hstmjCrQLVWyE3GimlTWhtyuAO2iDYG6jrubQ5Npa5ZvwtmWp1e4Uf2led%2F935LSkFd7bbv%2BxCnAw0%2B2Y%2F4dKmoKx7AV4csq%2BtIg3H1ipIvnpRayovLHWRH20YzZ1ztvkHv5dbyaETM8oRSEYWYYbqTRGA2%2BjgWvRGCnIRHc%2B9JepAW8vEgvnEuUh4eB83cYx0w6K7Ct6EOi9tvUL%2B8kMHCIvejQqlbv4DmgWnmNPIsYYoiMu3YjXRwo8YK0Zh8qcNO010U6yCV9yEiHiLyvTLXE9W2F2%2Bg7DqgF21dOQPeI28OcPbNVmrZVm0YHW33uYckMBzGEHtSKU7Q%2BaP4vDARcxVoBFMSVfAMOeji78GOqUBz11oEugU5V4dpSzDl9TDUY1z1ZhjLIugGnaTmaa3eAPU5wHKVYvFIa219U4G873%2BMgowGgLUU6Rkp3a0L5jZcKvFKcInN3lpdSc%2BordnM6C7mW48nxq7PKa1Nlv%2FepSyM42hdXjbENrf8eN4O2JXsLxuRXqcj3QxZjN24fz4A8NihfKaWBHjUwW2bGpUfz%2FLjsh%2Br8l9XIUA95WrKyCdk%2BVUyehF&X-Amz-Signature=99877fbd3e5e4c340ef02456494ac34a01254db8b80ae34d54f00e09230c7ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U56DYSK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxNXbMxGlL6PCBDgBHpXs%2BKi%2B%2BeLqGAot7oQFKGorTZgIgOL%2FGIUDc3kFR1FmM9Bx0Sa4R%2FJExIwPpzc8EZupOWo0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDC172LFt57tbyp4JYCrcA7kUuNsGjCsArEPvhpv2OP7kdGIK1lylsZPHE6SRGzRUs55TXdBPDQsMEaQKeyi2b%2FQLXLRHlpZKVwkLZf70siAGH4MKHGSkSTupkaOF8OlPmfCXKPInfg%2BbbDkKUKYZV4fbQsLjlfsM4Ot6lZWzv2%2F3hdpjyHbf504ZP%2BDk9%2Fj%2FSRDOA2pRBIPFRcxGqLXNyo0wB7Iap3OQ1r7frU%2B1V1b3r%2FxCaHjRliZN4iBPN7jv2Qqy%2Fcf9IDmeu2Z43PFdOXOLaBV%2FBRYciP6JXrHy33fzVl1DOgIjdb3Bnt8WTHfZpu694AnzVaiMgjtfyxWH2yZTXLYjQAj%2BOeDHfm9RU7%2FPdRavXh4zdyrdtO%2FKajraM3xhSn31QLVVZMUJQgUKyPGeUrMw20gO8s03t%2FwrPTq%2FEAF6tsgrN09Gko5u6dSm2E3%2FQI2VEQndH%2BQc6vllW4TVvobdV4UAFHACqvHBCbS1i8EHIHyCzDZa7TdhPJPoBJS%2B6aOOKLDMoMr3DDQj8yPnV%2FD42MmdMYKQq7iBSqaLakNvKMYrfastoMZs42AMB70Y%2B7UuA%2B8HfPKxW%2BPetAkj3w62ECGVrCt4EIyWx8THXLIHEizAz2j9KKKC4R0Sr0a7LY4BC%2FvmMtLzMPmji78GOqUBlkG6uFTAAWI%2B%2FNmC1egz6eFYyhRsUkdvOfldVBxNy40X8PUZeR7%2FcyjqerTOud%2BLQPw10B2w61VboSzF%2FlZcXJ3xFNiQwC64ffHeh7Pl2h%2BPF79ecGczzO0u90795weGHMnMk0py0f3eDwjmuM8KpS3B0i3FlQFnbzXvpqxji%2F0wWNXWQtKMWyzaltm2A%2F3iWGekHLXEHxFJQafcifkeArPjszu2&X-Amz-Signature=673359903d737814cfe97121df7f04b2083bad00c88470efae4792830694b0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T74SU2JN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAimyjytQ9VnjpUuVTQdGyUyyvh%2BSxm0oTsD%2FQeywGrlAiEAnaWlSf6xwsR1CAtXcDvmUsOKmomNZraJQCptZ%2BT7UeAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJBsajbpeROuSwooMircA%2Fhtip1XmQkv5iebHrSvl56D%2Bn8EtfX1ApquOFC6uqwLlcj2vC8rGk06VXO5%2FJA75FQ%2F%2FL7fZ3Ei0e9C1IwVt6I2a7evwy%2BujsPd22KKQMtRXe4gZ8qxgFC5rCcc3E7AjjHOX0kIZAXD9T3YGH58e1YULwlPsql9DwgNYStN4DBjlL5MhHJVnDkYNlpwejYb9wTzke7byvAg70Vf7Wr2TNwPmdqVkn8fz%2F%2BxeCJknpVfce7SnOnVDntJkvyxijB0gFjy7OQxcBifXg3XERJcy8fdNjd%2BQgBsXdFf41HmbB5EN80ZprOYaVKh0W%2FTe5%2BDbdXK2vvAXIveQXBp1BV87H9lsIxkccfgx3Nn9%2FvbRSu3qBilQgLcWwNd3djbiQSFLVl5m12Qd4rwMQ6HTcs98GcSKhhYNlIWQpcXauRQk7PJoH1DAk8xVtuO6nOP00Fosorif4fV23yrs2CHjpeosdur1Q3uuWKy0mKMIqmetjCaOJE8I0VqJhHyzjpbfm%2FnDuIIgMHSWEnck8OmM%2B%2BdrNPbinCLLep%2FO093rvo216yGEhuY%2FFBknZAqR5tLQ1McWW4m4K%2F2T2QCBEvVdmm3rvnUug%2BmQUMBikt6enyuT9eBHCa5TLb628rWFniPMMCji78GOqUBqHshDfw6bRgQdesIW5im10dZ53zaWJGYpOu4OZ4qUCgsxlG4V7romNASvsQ9QyajEpTtLjBMscIMGLoa1FzhUo1Tuo2r7NNemtGvKiqrb%2FxiXgnRo6oTgUTI9QTcwu7YNj6sbkTrTzSEfqLfoKPmJd7xS59st1JcVeh6cHeklxmPZUGoUn72QcE2h1YYebkrptnzunLcbLFkoK%2FckYTXViEHBtdA&X-Amz-Signature=63c1f9a51b8d5537c5564df6b6d1b81d1cc222c9356b46e124dbf4bd88d04a89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JUOP5ZH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFecga0gFTNW09gqdUQ4kB6hRWzdr%2BKCQEPMmEf2RgxQIgEJOGekBa3YkREWz4096M1gyrW12ea9y1i6RMbvPan%2B4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMrCiqxVoExlGWmRsSrcA6jae6p%2BqH9uCecbdpfkunkFDmmYiOGAyNL5rK0RZihCZ8owigOGC%2B3Mdfyq27SRjyQZog9WNTEaTaj8FAl%2FRVKOvaiMrcSzjrux2WjAHAXr1cXkMuYSlfQ4ApKuxesW899Hw2C8qHC2xO50hKf7hlvzvm3xdvCWCoMfA1LKEIK%2BU6Xp1rVr2R12jjlls3kWTkMSV6GFM61oTUwJRYV7VMXJFDQba5pWMlBaVZz4%2FaA6NlRF1TBhdFRBMkfIH%2FoPckvU0EH4ICBBxKTsMuDv5%2B0BT5hstmjCrQLVWyE3GimlTWhtyuAO2iDYG6jrubQ5Npa5ZvwtmWp1e4Uf2led%2F935LSkFd7bbv%2BxCnAw0%2B2Y%2F4dKmoKx7AV4csq%2BtIg3H1ipIvnpRayovLHWRH20YzZ1ztvkHv5dbyaETM8oRSEYWYYbqTRGA2%2BjgWvRGCnIRHc%2B9JepAW8vEgvnEuUh4eB83cYx0w6K7Ct6EOi9tvUL%2B8kMHCIvejQqlbv4DmgWnmNPIsYYoiMu3YjXRwo8YK0Zh8qcNO010U6yCV9yEiHiLyvTLXE9W2F2%2Bg7DqgF21dOQPeI28OcPbNVmrZVm0YHW33uYckMBzGEHtSKU7Q%2BaP4vDARcxVoBFMSVfAMOeji78GOqUBz11oEugU5V4dpSzDl9TDUY1z1ZhjLIugGnaTmaa3eAPU5wHKVYvFIa219U4G873%2BMgowGgLUU6Rkp3a0L5jZcKvFKcInN3lpdSc%2BordnM6C7mW48nxq7PKa1Nlv%2FepSyM42hdXjbENrf8eN4O2JXsLxuRXqcj3QxZjN24fz4A8NihfKaWBHjUwW2bGpUfz%2FLjsh%2Br8l9XIUA95WrKyCdk%2BVUyehF&X-Amz-Signature=05c7de49fd0017f2302a8adde5e9a67ae66ab86d7b67294e96617c3d17b6f55c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
