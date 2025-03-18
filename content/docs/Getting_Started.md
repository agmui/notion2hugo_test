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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGRDFUG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICDItx81Tp0tNfbZWn%2BUnqUK%2Fbk07mYea9cI2HcInq7XAiBjSh1HPg4YHr8bH5zfiSovBtb4yo0GQea2nIaOtXb1Hir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2RHwZ2Hpd1leG0zBKtwDz6Dpn4X4K1lwWJ%2BjSEzXQf9d%2FxQ%2BoiZVGv%2FnOiQDczEzHWO%2FRP7eLaYFNl1EDHpVHGs3hQ7C%2FlioWkLFY9u756ZHlVGPQBpvvT4eBBje4okz3LgRGFpLlhHDYjU6pMygzjvafwCSZEMTAKDsK8EQKqPp7Wna%2B7qH7bdRRcIZlsMCU7jz%2F%2B4XjlpX3ClsIr4nszLd0QD3sdIb3tiv3PV2TE56g%2F69XnyY3yTHkEqVbas%2Beiij%2FsXfeEjdndVQjyRFuScUAXvEC9qylebjxuZXrFWrF34b3wr6tQLLLuazHflsz%2B3hLgAMQOZgswY23miiDNPBm5gBOLt50P57akDvgWb7iFne%2B9PHSbmvF5bfxNB1qinCIGPeVHaZsCPR%2BAnhshE8StzgGNQr43AKsGgXOhZjaCWej14mUcLpW%2FNrJEin78wcgk7zWR3Xej3YyTCQCqaaJoP8wdWoCY6ySayJuT2CQs9VcrQS7xfafpH%2BwRwx5fzTFP67lvLgXFbiW7K5HoTXW%2BtPb3t1eaw363ZSi%2FMcskn4tDN7aS1KSiWA7IPtXXpjhPOggnHNwl9ljZwZChmnqPT540eyhuGpM%2BfyxIfxCxp3gdimyhNyjfo41rhNnFx%2Bf%2Fz0zVpuOacw07TlvgY6pgGQKnQgOy9xqWJvy0dGgANM7t8JmfKRAOCb92D3ZjUdvX4jf%2FHlx9xMy7VTdbZz%2BkK48XRggYB0eeeL5tClZ8k5dLCGwayUsgmtkxoNKTkitqMisfnujLcnKGMftRbfYYXdiPHoPf2xUyGnHpSySaPYw8Z00IDIrc3KlsuDj7vlS3NpHwY24Fmen8%2FPMMWhGKH41LuvyXyQ5OmUEJVvd7DZBR1AMlFR&X-Amz-Signature=166e6138dfac275b67a9962f1f231b56e681e21c6ff231b43312b825e68870a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGRDFUG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICDItx81Tp0tNfbZWn%2BUnqUK%2Fbk07mYea9cI2HcInq7XAiBjSh1HPg4YHr8bH5zfiSovBtb4yo0GQea2nIaOtXb1Hir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2RHwZ2Hpd1leG0zBKtwDz6Dpn4X4K1lwWJ%2BjSEzXQf9d%2FxQ%2BoiZVGv%2FnOiQDczEzHWO%2FRP7eLaYFNl1EDHpVHGs3hQ7C%2FlioWkLFY9u756ZHlVGPQBpvvT4eBBje4okz3LgRGFpLlhHDYjU6pMygzjvafwCSZEMTAKDsK8EQKqPp7Wna%2B7qH7bdRRcIZlsMCU7jz%2F%2B4XjlpX3ClsIr4nszLd0QD3sdIb3tiv3PV2TE56g%2F69XnyY3yTHkEqVbas%2Beiij%2FsXfeEjdndVQjyRFuScUAXvEC9qylebjxuZXrFWrF34b3wr6tQLLLuazHflsz%2B3hLgAMQOZgswY23miiDNPBm5gBOLt50P57akDvgWb7iFne%2B9PHSbmvF5bfxNB1qinCIGPeVHaZsCPR%2BAnhshE8StzgGNQr43AKsGgXOhZjaCWej14mUcLpW%2FNrJEin78wcgk7zWR3Xej3YyTCQCqaaJoP8wdWoCY6ySayJuT2CQs9VcrQS7xfafpH%2BwRwx5fzTFP67lvLgXFbiW7K5HoTXW%2BtPb3t1eaw363ZSi%2FMcskn4tDN7aS1KSiWA7IPtXXpjhPOggnHNwl9ljZwZChmnqPT540eyhuGpM%2BfyxIfxCxp3gdimyhNyjfo41rhNnFx%2Bf%2Fz0zVpuOacw07TlvgY6pgGQKnQgOy9xqWJvy0dGgANM7t8JmfKRAOCb92D3ZjUdvX4jf%2FHlx9xMy7VTdbZz%2BkK48XRggYB0eeeL5tClZ8k5dLCGwayUsgmtkxoNKTkitqMisfnujLcnKGMftRbfYYXdiPHoPf2xUyGnHpSySaPYw8Z00IDIrc3KlsuDj7vlS3NpHwY24Fmen8%2FPMMWhGKH41LuvyXyQ5OmUEJVvd7DZBR1AMlFR&X-Amz-Signature=643663d63ceafe5ed1125abdf2c0b9fad6a8f86090686be42870ef3b2311f33a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIMTF65%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCGfdGmKvPtJgVA%2FQxCDDqee2ofr%2FpPNI9%2B8X7MdhCBmAIgI9EqSKdMWEOOZk8JpD%2BwRyS70mIrO7czrzEmFy6UwmAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPMdkucBQlFPQHXleircA8SpwfJmsG5TKXnCe2DOvFVRxzUwmZgl0rLQaauK1LkwoHf5dcENEZSvhApzi%2FxdmuU60pSQuK9tPLJvpiWiLkDvC8oeSoc3TmLyaFw6h2DCKk%2BTbmB9zg9%2BsV0jkF3k6fELVH1QITxGXBMKCBv240E2B7JxNmwaXoDCGRbACIXwLWVg3qm6DE3g8PTTI%2Bt1M1%2B6vAIUakMeg2cKLeBiFe1CWrI3XvCfrnOt3imd07J18asoVHTEu3qvgARJMNOGshyoZ6xQ22YgrwAm6QVm4Y%2FCipEaGWD24WGnvpWIQfSq318AYSiseuSc7kDFPtSZz3tXkjUk2fNMq8bJQcb8pwhiLF3nXApMykS2%2BXsKNCr6DN1NwzNsky654UWBNNyCr%2F7uOO24g8iOmmadSOJO1WPTkSuUJCb%2BL7v8pWuxThrqVakFHve3lSJLrbgYTML3WYEPW%2Bml%2F0Ty0WDhMOr5fPkUeRUcXPJI9oifNfLFJnibBpep%2FBID%2F5Z4WggzmilkZ4VoMHMvNv74A5HbQk0w5lhOjwlXrWYXzKIBiVMFpgSghKEqubc1RUuRGTVhqEVAXmT%2B8NKT8I65i8T%2FTMce%2FQbm9LnyQKyr89B2FlylPUm5j%2B3JPeEyfNCp7lZyMPW05b4GOqUBX8w6jcibAy5F%2FTC8bebYH6CC5vpUkrG5HDb%2BGKY04D0WvqvcL5UT%2Fus3k9y42xye9DGFa%2FXkVOJY3bJua4mqxZElNg1vWP1S4HCc0sukvApIlJtBzEqgQXvrrjBLd3eUstKps%2FqDWTTAs0Fv%2F3rQt7JCk%2FEA9AaD4fcLXujkZZuHl1Wg9erTF1t9aAJRUBaEWhbW9Y3oa6VNiydGvKkX2FZbRu7Z&X-Amz-Signature=68fe169a13c40ac33ba551cf918b74adccd518301aee60947a667c525aa7384b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQL6A2D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEk%2FDWARAljmUCrttsT1S1XDQFLJ71duIxUlredrudctAiEAxPLCRUlQNeZkj1wFar1XxHQVy3%2FEWEK9oHurhmBqZZsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCZf0M1N%2FyoXu5yNiCrcA3bEz1UVm3tYm3X1iL1zEP2VPdYGBOhV%2FIv0iCm6G8x1EW7E9szwOeVsG0KUXvs40vP0ydXBzRytxM1UOjrDkDwgrvgp1Px%2BBl0MFORvTjzizNrZpsvB%2By5QXNaxDQeEftmfmHF1TwwzEGBFgfJX%2FaqAp0N%2BDREMWX2Lis1Rbhx07ejSd1qto92P7A3nYzHeNC6lAPZqRk%2B7n1PpIBQWcZeIKGRFH%2Ft7CyyH93kBgBhyoydePD4ygcsP%2BGA5T0nlVaLxeLURfbDmKB65vs9YiLvUssml64cMuFMZTI06qAfWiwLm6BjZIS%2BniFhszCKlZAcz7tH2nJBScujNfJoe6XcgbTZMIXkHQOv7rzG1CRf2BdEbl74CvfoVrOCkvSDFsgnXV6PNj2a4OqbIV502u99TypvdbPKudZW6bBiQ1rCXKHPGNkrpgbWU4rury3xUfPEqDgZY%2FHTfKokqX614jz%2FmSukGCisdnYx6otgs0QSPW%2FmSfDsSCp4e%2B7axywYbUQTguINoB7uKUaxhFctn5dilHPvH3ZEH1XxIDnPkaa57uZpbCWV515o7bJ0ostkQZ4Fejwmx85EwKykqsgemI8vj1Db9nCkgrIEuHqESLGNHMPHVM55KvzM80%2BH8MOy05b4GOqUBnhs8h97vPksTSZ2%2FR%2BOUAXzMJZpRmkzxXrHDkb3ur3vblbZlwRbS9Q2ewzvc4iFMmAvgdLMcKb8wn5Ogoot%2Fvgn7ijIxjEsdCEszv2%2FHrr3AG0hmEA251s25EBbm0Kok%2Bkd5ZNfV221dzyogvZoguXhaFb7d%2BkYUr6cGPkbcnwmLRG4H7NJ2RaZ9COklCUTKUHLvmkLmdhg6J6%2FIP8d6K6K3FJT9&X-Amz-Signature=e2948ac978475f23e8b7898ad2df78b3733131170ccdf87f9028ea3f914d67b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGRDFUG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICDItx81Tp0tNfbZWn%2BUnqUK%2Fbk07mYea9cI2HcInq7XAiBjSh1HPg4YHr8bH5zfiSovBtb4yo0GQea2nIaOtXb1Hir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2RHwZ2Hpd1leG0zBKtwDz6Dpn4X4K1lwWJ%2BjSEzXQf9d%2FxQ%2BoiZVGv%2FnOiQDczEzHWO%2FRP7eLaYFNl1EDHpVHGs3hQ7C%2FlioWkLFY9u756ZHlVGPQBpvvT4eBBje4okz3LgRGFpLlhHDYjU6pMygzjvafwCSZEMTAKDsK8EQKqPp7Wna%2B7qH7bdRRcIZlsMCU7jz%2F%2B4XjlpX3ClsIr4nszLd0QD3sdIb3tiv3PV2TE56g%2F69XnyY3yTHkEqVbas%2Beiij%2FsXfeEjdndVQjyRFuScUAXvEC9qylebjxuZXrFWrF34b3wr6tQLLLuazHflsz%2B3hLgAMQOZgswY23miiDNPBm5gBOLt50P57akDvgWb7iFne%2B9PHSbmvF5bfxNB1qinCIGPeVHaZsCPR%2BAnhshE8StzgGNQr43AKsGgXOhZjaCWej14mUcLpW%2FNrJEin78wcgk7zWR3Xej3YyTCQCqaaJoP8wdWoCY6ySayJuT2CQs9VcrQS7xfafpH%2BwRwx5fzTFP67lvLgXFbiW7K5HoTXW%2BtPb3t1eaw363ZSi%2FMcskn4tDN7aS1KSiWA7IPtXXpjhPOggnHNwl9ljZwZChmnqPT540eyhuGpM%2BfyxIfxCxp3gdimyhNyjfo41rhNnFx%2Bf%2Fz0zVpuOacw07TlvgY6pgGQKnQgOy9xqWJvy0dGgANM7t8JmfKRAOCb92D3ZjUdvX4jf%2FHlx9xMy7VTdbZz%2BkK48XRggYB0eeeL5tClZ8k5dLCGwayUsgmtkxoNKTkitqMisfnujLcnKGMftRbfYYXdiPHoPf2xUyGnHpSySaPYw8Z00IDIrc3KlsuDj7vlS3NpHwY24Fmen8%2FPMMWhGKH41LuvyXyQ5OmUEJVvd7DZBR1AMlFR&X-Amz-Signature=910a6a271d1b89932b08eb54467b50a7e12977f1b6135834f7af4fe657c52bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
