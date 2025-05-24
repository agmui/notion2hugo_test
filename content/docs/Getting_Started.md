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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCXFZR3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCx3H0N55PB2kb5Lldd%2FEa7x%2FKlt1hyJZg9V8wSOR%2BxpwIhAPWbsakv5TqQulxkynWrhTEZRtZWEHF7e6e4C7cmQQndKv8DCBAQABoMNjM3NDIzMTgzODA1Igxu%2BCd1TqnFSCx7kkgq3AO3FZvUHO7tmXlfo6ibiVLTPqMavVQTQghZ0g4Ny0gyXvyVvZSFOUv9J%2Fch%2FrouxcGRGuvI1SxjzPg%2FruNNHnISC%2FD8qdW%2F0N34tYjPd0jJCqbS2xwVssXDmBEqXHMcv7KPodwEd4%2Bfq5YxkhdyZRzL3s8jtIrlonM%2F6EM2PF%2Fwic%2FPZRpCWXGYEbPEm%2FJi680sQ5CRtFDQHaRZkkPGf3seJ0oLU8RkfMMvHr8MQmz85vSWmzB1hyip5uPKsZfmnC0CvYWDf25ja8fyUZakqr66cqL0n%2FPJq1CJWtg3qVZAQ51fSdqcILLXxsHkdGfGBeiNfzgXj2wvLZTs9%2FuDxchuXASlA2cPF8VRI8R06M3S9rjM6nFiGD9eJYToWc2MpPKGHSuaVj3lPds5R4O6nMKwCir9WH0guNPRnV0eIPmKsajBg6tuk9LPKwX5yx9CJfF6M0%2BlVnxg%2FFYXUlRkNIYDiajsoujZBUeozo1kILcx3zZzc2hhSKKRj5Ih0No5M61O5gLasBS1gMeer4mLmNKWpc3f07NBaMncfHrAWwEmqLSSXUrM%2F2l2swGR0uqzBvsjd0xU7Xl3tcAQI78dCReUtZBNFCZS%2F6Y%2BAW4XsvinzjFgDCbJCS8H5CQ5LTDW0cXBBjqkAdS%2BVH0IW2KhoYZ0P2pF8y%2BB%2FxebOw7rkyS5IFNu3X%2B7zbo2DHNUSbQUNKBLaGKJzg8LMN8qB8xVeSGs%2FWVr%2BD1dZX6gnSTjinX4tXrMkm12hwoxZZSgBYRc9RevvNprBM9QAYR35QOlm%2BL1Qki1PkEfzCLkcWoAVmtaDOv2fbv4EkVRup1%2BfrjPMf4zljqUY2YKtRA%2FNBYiblcUfSHpg4F%2BO7%2B9&X-Amz-Signature=173fff66544cdf6525ad6df932b3368f0d6d8b2d0ae17da8d62c4d00b678f8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCXFZR3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCx3H0N55PB2kb5Lldd%2FEa7x%2FKlt1hyJZg9V8wSOR%2BxpwIhAPWbsakv5TqQulxkynWrhTEZRtZWEHF7e6e4C7cmQQndKv8DCBAQABoMNjM3NDIzMTgzODA1Igxu%2BCd1TqnFSCx7kkgq3AO3FZvUHO7tmXlfo6ibiVLTPqMavVQTQghZ0g4Ny0gyXvyVvZSFOUv9J%2Fch%2FrouxcGRGuvI1SxjzPg%2FruNNHnISC%2FD8qdW%2F0N34tYjPd0jJCqbS2xwVssXDmBEqXHMcv7KPodwEd4%2Bfq5YxkhdyZRzL3s8jtIrlonM%2F6EM2PF%2Fwic%2FPZRpCWXGYEbPEm%2FJi680sQ5CRtFDQHaRZkkPGf3seJ0oLU8RkfMMvHr8MQmz85vSWmzB1hyip5uPKsZfmnC0CvYWDf25ja8fyUZakqr66cqL0n%2FPJq1CJWtg3qVZAQ51fSdqcILLXxsHkdGfGBeiNfzgXj2wvLZTs9%2FuDxchuXASlA2cPF8VRI8R06M3S9rjM6nFiGD9eJYToWc2MpPKGHSuaVj3lPds5R4O6nMKwCir9WH0guNPRnV0eIPmKsajBg6tuk9LPKwX5yx9CJfF6M0%2BlVnxg%2FFYXUlRkNIYDiajsoujZBUeozo1kILcx3zZzc2hhSKKRj5Ih0No5M61O5gLasBS1gMeer4mLmNKWpc3f07NBaMncfHrAWwEmqLSSXUrM%2F2l2swGR0uqzBvsjd0xU7Xl3tcAQI78dCReUtZBNFCZS%2F6Y%2BAW4XsvinzjFgDCbJCS8H5CQ5LTDW0cXBBjqkAdS%2BVH0IW2KhoYZ0P2pF8y%2BB%2FxebOw7rkyS5IFNu3X%2B7zbo2DHNUSbQUNKBLaGKJzg8LMN8qB8xVeSGs%2FWVr%2BD1dZX6gnSTjinX4tXrMkm12hwoxZZSgBYRc9RevvNprBM9QAYR35QOlm%2BL1Qki1PkEfzCLkcWoAVmtaDOv2fbv4EkVRup1%2BfrjPMf4zljqUY2YKtRA%2FNBYiblcUfSHpg4F%2BO7%2B9&X-Amz-Signature=66f1fac9ed08474e386945431f6cbf49c93bce68fdb17c7a04ca84293facab27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCXFZR3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCx3H0N55PB2kb5Lldd%2FEa7x%2FKlt1hyJZg9V8wSOR%2BxpwIhAPWbsakv5TqQulxkynWrhTEZRtZWEHF7e6e4C7cmQQndKv8DCBAQABoMNjM3NDIzMTgzODA1Igxu%2BCd1TqnFSCx7kkgq3AO3FZvUHO7tmXlfo6ibiVLTPqMavVQTQghZ0g4Ny0gyXvyVvZSFOUv9J%2Fch%2FrouxcGRGuvI1SxjzPg%2FruNNHnISC%2FD8qdW%2F0N34tYjPd0jJCqbS2xwVssXDmBEqXHMcv7KPodwEd4%2Bfq5YxkhdyZRzL3s8jtIrlonM%2F6EM2PF%2Fwic%2FPZRpCWXGYEbPEm%2FJi680sQ5CRtFDQHaRZkkPGf3seJ0oLU8RkfMMvHr8MQmz85vSWmzB1hyip5uPKsZfmnC0CvYWDf25ja8fyUZakqr66cqL0n%2FPJq1CJWtg3qVZAQ51fSdqcILLXxsHkdGfGBeiNfzgXj2wvLZTs9%2FuDxchuXASlA2cPF8VRI8R06M3S9rjM6nFiGD9eJYToWc2MpPKGHSuaVj3lPds5R4O6nMKwCir9WH0guNPRnV0eIPmKsajBg6tuk9LPKwX5yx9CJfF6M0%2BlVnxg%2FFYXUlRkNIYDiajsoujZBUeozo1kILcx3zZzc2hhSKKRj5Ih0No5M61O5gLasBS1gMeer4mLmNKWpc3f07NBaMncfHrAWwEmqLSSXUrM%2F2l2swGR0uqzBvsjd0xU7Xl3tcAQI78dCReUtZBNFCZS%2F6Y%2BAW4XsvinzjFgDCbJCS8H5CQ5LTDW0cXBBjqkAdS%2BVH0IW2KhoYZ0P2pF8y%2BB%2FxebOw7rkyS5IFNu3X%2B7zbo2DHNUSbQUNKBLaGKJzg8LMN8qB8xVeSGs%2FWVr%2BD1dZX6gnSTjinX4tXrMkm12hwoxZZSgBYRc9RevvNprBM9QAYR35QOlm%2BL1Qki1PkEfzCLkcWoAVmtaDOv2fbv4EkVRup1%2BfrjPMf4zljqUY2YKtRA%2FNBYiblcUfSHpg4F%2BO7%2B9&X-Amz-Signature=6e89e580cffaa9f89b3d80815b22807c5f2237a71c803fa071bda93b0ea174bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YMEQXH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEH%2BSrdl3shCrI%2Bulvj7M0sPaHyPFQDfkTlwNQ5%2Flep2AiEAuG7CIrh%2FXvaYFHk3AK04eMcgpRiIKoUcz58sSzSR07cq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCzm8qGW5ygkwsLEXircAwu5iH3DC%2BOmkbwMZIfvTdcB3EUi9O%2FH5b7InxSuDDpd3sZwMMGyr%2FkcpCGJuexcoi40KRf4xHbM5BB59RVVttZvEVF0jt9yZs2RWtL7D3L7uYzToF3kU9KpI%2BMlw75kYnWhvaBPokjxhsJRUWEW6G4C%2F3YstMKO%2Fm61hhXbIgz74pv43oIwvHA8e%2Fnfj80zie94rsfQB7Xsx8f3bzWzUP0YsywF6eqH3ShobjNUKduvOQuMDp2toj6ZQMtzi0Y7pNMiqtnPWkmUXafYtsVQIyf7%2FLIgdXcrhPLfXGuGkE45QCP9yFTQMkt5bh%2BaKs1yupXNEtuWLzwlyJmZ5OzjXofHudsDfmefZ7JdK%2Bip7UOvrjA8VwRMNO%2Fcfvw4x9cj%2BMH45kaCKtzpiIl0IILSfJjo1CVUFIdk%2FOik5UuWtKCOHPrU7HYn21BopjOdsTxaH7XQAkBC6lPbwrFHVOvDUSnOFPyp8pNY23KzPUFeJm3VTcDjdPaWOPI2QUG8jjv32U0JDtfyfXAURv1GxPzgGEgq6ix%2BU0F0Zhl%2FY1yM%2B3St%2BJq1ta9QElVgpioGBDt7x1hy1hDKZzA3a9y62CHPgJvSL%2B5qe4GUSd8ktUSNKKDKVttQB29JavBoAgKHMNTRxcEGOqUBKwbn2FI7ZuaxS09VlHMwZZ%2B7Gk3nihhwpVOnQ75VqwQNbi8K7IldXzO10OnWfx7XW8%2FiU7ORyAil5uoZa%2FZVJsjEAdSXhG78Sck3i2cqW7nsc0FR%2BSHlqHXwUSQLdF%2FBayEd6OKfezkZmYk1RRHr8S2GlI6TMh5nZZGOcCnLgWq%2F2T7%2BO2jpRffno0hac%2BdDFC2zjCOrWDjD1AyuoiIPj2iaQVCG&X-Amz-Signature=b1cfae2fe76e9093227e3fa38f409bc777d840ceda78acc42a2f32e148ff1cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VED24AYT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDM4gM%2BYO7%2B03o9aNq5IKwY9qJVFcFJnFfZxTN7pUN%2FZgIgMae%2FiiCFpKeRQ7hDBT8FeyRtzkDyy3ulwcYcR9go2jcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGnihEAs7ZgDh27kcCrcAwK2Ds4lZmx2YuE8OqwLhWYiRrUTyMU1owXyhVOtvUYEyIk%2BLDyoTpdGg%2BSp8F2TvC%2B%2FgsLD3CVJjAH%2B2dbwsJA6poIbl2eCl5Q6YOdU6VXLcedhDhQUO6D83UxOBVnU0t1exaKOdbNReE1wxgSfP5uBDaSrzz3199fb2G7vECIR%2BLuJH90xZF18y3FjswIcFV%2FOB6WciQ74zLDE25W3NcPCIHRC1zuPQywB%2Bvu8kjFhaVRDNLEe%2FTDfMfmexJWABKWcQ9vjS9k%2BA7%2Fpy%2BPzIFO2GzDcqHoGLXMcq2R3xYUuq7mreqIv45kBoiOF5JNVUJJljhT6OZzkV5jdQ1WkCMJ1W292UOoVFTWO8zd4kySpnXjz2ZDye8%2FipKr1AolC%2BHBZdWQ2pPiLEx%2ByJoLUHj2h%2FhRKx%2FgBANmJbicw50slv7%2BJ%2Bc4MobJsjERvskcadSWBXZ9PIBVLjDPJVJv3P%2B49jE9861Qk4a0NFRW2DBCv6sk%2FeHvuxiBybh73Mlv2blXsD373qVOwGvnk08EqC1vViE510Uk1wdOCPLrvwsAsgG%2B%2FqWX0Y5XSRtPG050NEJzCiWWYC9MwqFNSyhMnSULt3gencyHipOfoFQJSO%2FzvNiMjhF%2FI36v50K9GMM7fxcEGOqUBsvtwuyglhxiXztfnvHw41TNT%2F%2FPK8C9HjtBetbxe4XV5%2Fl%2BQ8PcJu14AM9Qkb3jiGLvx2f8yBoI5VudDs4b4S01j7oGSX%2B7PCYJYPqUfiuP6RnuqZooclhpEi5n0tjHrO2jq0UIjU3PXLm93899Hmg39%2F96KXZsYTNWh7D7ZIH8LnDQduWWurVpBV4DwP%2FjX9gcAMYQIa4hTMnC1AJBvFfjvw2DI&X-Amz-Signature=d2b76ba48ffced04b454faa19af18d94d2cbd429e5c59fbfba68d5313e5ec7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCXFZR3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCx3H0N55PB2kb5Lldd%2FEa7x%2FKlt1hyJZg9V8wSOR%2BxpwIhAPWbsakv5TqQulxkynWrhTEZRtZWEHF7e6e4C7cmQQndKv8DCBAQABoMNjM3NDIzMTgzODA1Igxu%2BCd1TqnFSCx7kkgq3AO3FZvUHO7tmXlfo6ibiVLTPqMavVQTQghZ0g4Ny0gyXvyVvZSFOUv9J%2Fch%2FrouxcGRGuvI1SxjzPg%2FruNNHnISC%2FD8qdW%2F0N34tYjPd0jJCqbS2xwVssXDmBEqXHMcv7KPodwEd4%2Bfq5YxkhdyZRzL3s8jtIrlonM%2F6EM2PF%2Fwic%2FPZRpCWXGYEbPEm%2FJi680sQ5CRtFDQHaRZkkPGf3seJ0oLU8RkfMMvHr8MQmz85vSWmzB1hyip5uPKsZfmnC0CvYWDf25ja8fyUZakqr66cqL0n%2FPJq1CJWtg3qVZAQ51fSdqcILLXxsHkdGfGBeiNfzgXj2wvLZTs9%2FuDxchuXASlA2cPF8VRI8R06M3S9rjM6nFiGD9eJYToWc2MpPKGHSuaVj3lPds5R4O6nMKwCir9WH0guNPRnV0eIPmKsajBg6tuk9LPKwX5yx9CJfF6M0%2BlVnxg%2FFYXUlRkNIYDiajsoujZBUeozo1kILcx3zZzc2hhSKKRj5Ih0No5M61O5gLasBS1gMeer4mLmNKWpc3f07NBaMncfHrAWwEmqLSSXUrM%2F2l2swGR0uqzBvsjd0xU7Xl3tcAQI78dCReUtZBNFCZS%2F6Y%2BAW4XsvinzjFgDCbJCS8H5CQ5LTDW0cXBBjqkAdS%2BVH0IW2KhoYZ0P2pF8y%2BB%2FxebOw7rkyS5IFNu3X%2B7zbo2DHNUSbQUNKBLaGKJzg8LMN8qB8xVeSGs%2FWVr%2BD1dZX6gnSTjinX4tXrMkm12hwoxZZSgBYRc9RevvNprBM9QAYR35QOlm%2BL1Qki1PkEfzCLkcWoAVmtaDOv2fbv4EkVRup1%2BfrjPMf4zljqUY2YKtRA%2FNBYiblcUfSHpg4F%2BO7%2B9&X-Amz-Signature=3e07f0d3dbf2a667ee0d9e3de5b5e95fb507ed0f4c7de6327ca450ceb3aafe29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
