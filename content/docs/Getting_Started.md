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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUXASVN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFT6%2BrmueuxeZzjhq43XnZsYTYk4PvN0zhDIwQYFm%2BplAiAz1gWvELtpEmJluvjVuClHgkVgP5A1j1o1%2BUFUz5nEbyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpAdfUq6HMlMF84RvKtwDSCn3DZKyrm6xELNw%2F13%2FEUQPa14I7tYT2DqjNQcQLRU4%2BaD41QIf7mhTohfYCTo%2FPMh98qY2S6rbEC0RDcPQCag0KWaSVD7Vod0BV0x%2BYSBl0KXR5S0zX%2FaMzkpUDuunOzrr1hSO3QnuGdgW79G8EHso%2FJEbArMKh0eETmeDhJmp7Az9nQ7%2FE%2BiQvw8oLvub9m5mgCuSJ0O%2FVQtz2sT7Lu3hPDZur376HKFqgmpdlE%2BCw%2B3d%2FNdnsBhBpoOeXwcWFLg2O6K5p8IvCt9Zvn0bHu6%2BRZncTknNkCyaOuDcej2vCh8u24yWICmdO75%2BV4XF0C0adlp8A0iQYRlBYb0PpmJQp8x%2BYvuk8BsMAFSqWphyVinjcBOo51lw%2F4R7CiSQJ1bBSra1759DP03dTVh%2FWDUq8oZj8eHgvzSfAP5eQJI9qniY6hA3LjeisFsTjKirbuHJtLlCjMMDzNrMnLnZkKhATx4eukRmvLX6DD9FhjfR403BFxfkfffFnYwUpRUI2LkgeqyFDYIkJ8%2Bmv6ONimRNjG9T2%2Fmgq3b1nTJPbPxCKQXK9H3zowmzWsZzzGqTFVNz1OX1ML56NAQvXAl%2FmWKjBq1kqjhafo5W59y%2BCnNZpuDC%2FMx1AARMJkEwrru2wgY6pgF7hOW4PXI6gIbfTxSWZh4lzBS6dGCssQLAV75TuytvqZH8StZ7FXChRks69eUG%2B7lBYxS7KcIJJTo76SUzLaMfSeFwEPaWepVnc%2Fjtchzr4pUeg83OIovKcS1yjzwh5IsDxduykhREaJ7GVX0qLUCSU2nh5Eoj2tJ%2BubHK2DCQqt7tTuYLqXzrYYfxqNId8ljbbkVur5HFCg1gLuw7223%2BJzIKcDY6&X-Amz-Signature=aeb7ad59c10cdf1a9a57df4b770f56b502bf3fbf141c19e8b9ac060f5bf04ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUXASVN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFT6%2BrmueuxeZzjhq43XnZsYTYk4PvN0zhDIwQYFm%2BplAiAz1gWvELtpEmJluvjVuClHgkVgP5A1j1o1%2BUFUz5nEbyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpAdfUq6HMlMF84RvKtwDSCn3DZKyrm6xELNw%2F13%2FEUQPa14I7tYT2DqjNQcQLRU4%2BaD41QIf7mhTohfYCTo%2FPMh98qY2S6rbEC0RDcPQCag0KWaSVD7Vod0BV0x%2BYSBl0KXR5S0zX%2FaMzkpUDuunOzrr1hSO3QnuGdgW79G8EHso%2FJEbArMKh0eETmeDhJmp7Az9nQ7%2FE%2BiQvw8oLvub9m5mgCuSJ0O%2FVQtz2sT7Lu3hPDZur376HKFqgmpdlE%2BCw%2B3d%2FNdnsBhBpoOeXwcWFLg2O6K5p8IvCt9Zvn0bHu6%2BRZncTknNkCyaOuDcej2vCh8u24yWICmdO75%2BV4XF0C0adlp8A0iQYRlBYb0PpmJQp8x%2BYvuk8BsMAFSqWphyVinjcBOo51lw%2F4R7CiSQJ1bBSra1759DP03dTVh%2FWDUq8oZj8eHgvzSfAP5eQJI9qniY6hA3LjeisFsTjKirbuHJtLlCjMMDzNrMnLnZkKhATx4eukRmvLX6DD9FhjfR403BFxfkfffFnYwUpRUI2LkgeqyFDYIkJ8%2Bmv6ONimRNjG9T2%2Fmgq3b1nTJPbPxCKQXK9H3zowmzWsZzzGqTFVNz1OX1ML56NAQvXAl%2FmWKjBq1kqjhafo5W59y%2BCnNZpuDC%2FMx1AARMJkEwrru2wgY6pgF7hOW4PXI6gIbfTxSWZh4lzBS6dGCssQLAV75TuytvqZH8StZ7FXChRks69eUG%2B7lBYxS7KcIJJTo76SUzLaMfSeFwEPaWepVnc%2Fjtchzr4pUeg83OIovKcS1yjzwh5IsDxduykhREaJ7GVX0qLUCSU2nh5Eoj2tJ%2BubHK2DCQqt7tTuYLqXzrYYfxqNId8ljbbkVur5HFCg1gLuw7223%2BJzIKcDY6&X-Amz-Signature=3b25479481129618e2781d8a6c6f3b4524d32577dfba916e977bf5b1c6c6aee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUXASVN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFT6%2BrmueuxeZzjhq43XnZsYTYk4PvN0zhDIwQYFm%2BplAiAz1gWvELtpEmJluvjVuClHgkVgP5A1j1o1%2BUFUz5nEbyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpAdfUq6HMlMF84RvKtwDSCn3DZKyrm6xELNw%2F13%2FEUQPa14I7tYT2DqjNQcQLRU4%2BaD41QIf7mhTohfYCTo%2FPMh98qY2S6rbEC0RDcPQCag0KWaSVD7Vod0BV0x%2BYSBl0KXR5S0zX%2FaMzkpUDuunOzrr1hSO3QnuGdgW79G8EHso%2FJEbArMKh0eETmeDhJmp7Az9nQ7%2FE%2BiQvw8oLvub9m5mgCuSJ0O%2FVQtz2sT7Lu3hPDZur376HKFqgmpdlE%2BCw%2B3d%2FNdnsBhBpoOeXwcWFLg2O6K5p8IvCt9Zvn0bHu6%2BRZncTknNkCyaOuDcej2vCh8u24yWICmdO75%2BV4XF0C0adlp8A0iQYRlBYb0PpmJQp8x%2BYvuk8BsMAFSqWphyVinjcBOo51lw%2F4R7CiSQJ1bBSra1759DP03dTVh%2FWDUq8oZj8eHgvzSfAP5eQJI9qniY6hA3LjeisFsTjKirbuHJtLlCjMMDzNrMnLnZkKhATx4eukRmvLX6DD9FhjfR403BFxfkfffFnYwUpRUI2LkgeqyFDYIkJ8%2Bmv6ONimRNjG9T2%2Fmgq3b1nTJPbPxCKQXK9H3zowmzWsZzzGqTFVNz1OX1ML56NAQvXAl%2FmWKjBq1kqjhafo5W59y%2BCnNZpuDC%2FMx1AARMJkEwrru2wgY6pgF7hOW4PXI6gIbfTxSWZh4lzBS6dGCssQLAV75TuytvqZH8StZ7FXChRks69eUG%2B7lBYxS7KcIJJTo76SUzLaMfSeFwEPaWepVnc%2Fjtchzr4pUeg83OIovKcS1yjzwh5IsDxduykhREaJ7GVX0qLUCSU2nh5Eoj2tJ%2BubHK2DCQqt7tTuYLqXzrYYfxqNId8ljbbkVur5HFCg1gLuw7223%2BJzIKcDY6&X-Amz-Signature=1c2b47f81c0e256c2663be8ced7423d1b3a01595847828e2d40f8c54369e34bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCEMDR7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCsBMY7E92yE6as1rvPeqotCxsTc7QEdzZZBE%2F4we3swgIgQOuBCO08YwEsSSNT6UlGNM3PEvARNdVFkYRC74OxRj8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNkOK57BJyRK8SM5HSrcA%2BwW0xyfNc8S1iTUZZclBwn9MmJwokaYWdb7%2FuqaQMy%2BNJYArjPJ6H79c0dGp3A1%2FXOPviMdMQa9uerg3wj9qkNXaF8XQJyeVECrILkZp%2BvaIbZjavqwgdTbBCmJ3AmvHOK%2FwtNCIUFy%2FLkO9sYysJLg%2FpU0X1zQpYFPK19ulzzzG5UlUEMDxPvhA9ILNxhFYGkQ9Ydg5fT5o2cVrsW94mR3qva4lqiYwMuYLbB%2BjndRJC2sKeeyLkHbBznVLxEg5BTCrCFELk%2FfXHzbrRFoQQN4Dq8W1ql0%2FOSxow4UFFtrVuDRFZwlzZq8XrWyJqf0dDvJhCDRCLbMEoyjfCXESBy0jZRPKjUqmaY%2Fr9KlCdYWmYECexa88tEuT0aOfhHomSxzPHcOsIlYvJD4OJlQEig6z8tadWp6EFSXGg5kzmoobZnoy3EoOdlmI11Pb9yu1NnkgURMvKw5GMurgaAFH2o0KCjP5qBQbTmUOU%2BG51PIj2fhnvFu3%2BHkFBWXMWm9dBqYJPAR1ueLLLuLVowiuAd8BRYnWEBy6KGCYfAA%2BwFL0URakw9xdqo780et7nn%2BWVRGSSxMapHHNbik9n%2BQMZv7W2YqU7gHxutImskAlNm1Z3Uys332n73aRTh7MMW6tsIGOqUB71zU3ibHUgd5Xjjiuq2bIpsrQucdTF99jsm8Eqzgx34fo2KdbagI4JC9K8RvuUB%2BYkERBTACbYjODX0H6pp0pnRHVqedJU%2FF2Cpubzp4y4MvjNCQYTGhJojtnp7ihzLuJmn1Q82l1%2B6RkyMimPb0MR%2BMsxBMdSis4Ia95Micdn%2FqGXh5LGMwDq4C9UH1yXNtRX0oPmER9aXNY97aEsE22DV1gDus&X-Amz-Signature=7d477ffa1d2117a5d0cc4cc4416e191fdd4b9cb90a238b3761d843dcca112a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5RGSZM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDdrnDdINjCcLgAQ2ftB8kpKMPxlDihXeRALDgZ4sDJ0wIgN8E3GvRoUmIWBpHrtlUO0gvaPHy5ebuzYv09nlEYso8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAoGm8IodQCVofghbyrcA8lceWmKy8hVn0oBPa5Ny%2BG9M2F%2Fw1iI1JZ6JrB9GUVsiyNJukN2XRH%2BRgRExXbciqsHt5AL%2B3WqrLIi9SXLnLUC0PdNTzzUyVCTIQ41i782w31%2B9FEjedHFN%2Beq0OOaZ3w8rrZj%2BmxFxNUhuZLU8kEn6P7WTC3A5KtC5LQPoG%2FP0hxdRMj8efWJSkMxtv%2BQCeYNkUYzAU0aFHZj0kT6grHQBZD0CVcSWlamv7HTnXehQ7PRlipzK2LV8h1eaXvaKjgbcGUvX7rIag2KE9w9o0Cflal0iSrY%2BD0oHMSBfn%2FHY2iLF1k%2BeFm8F7WYLzgAY4MVnFY2DiviYWbIepAll46As5EuWwVVyXy88uH%2ByHfS0bmvXWYhFzFope9ci7fdWC9qmvxWRR2Rh18f9kfBRWCPFTx57ahDDjeO%2FpCU96C1tpx%2BMkGMuOEM4T31D%2FcXPXifcjY23wkzo3aLEXd0GOR5Y2ffLfgI%2FXGG4fvHJyghrt5wr1SPbqEwYeE%2FE5xazlKGpcpYINxEmF7lEsvzKn0aLpXkjmrCdsgTHXgemm7%2F8d7QZ%2FUBtrd7SYRaP9Ve60CCmnByHCiMVgHqceA%2F9z7%2FdC73M8HpAxIIoDNsqcKV47%2BaSoRyvW4KaBQ5MO26tsIGOqUBckJPWelpmRZ8C86wmpLOEsmNK%2BdwNFmfwrDG471atZj0Fm5zjPlcx5A2GjivfR182twXI497Gkp68viDNDOIWgMBQhJxVrVF7H7s74Yr6Z2DOCSrzdHNOIQbGis9c%2BsYgoL43SfDph5UQ31h%2BceXBsPSdkD%2FnaMHXmKipd6uJmSh4ZdFOvxSrdXwVtk3CX%2FPY11AnFVUFltZp8RXjKGBcnXWD95D&X-Amz-Signature=fcf532a762f3cb15fe3535889cb9febd593cf2380c81954008375e8a8bc8f582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUXASVN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFT6%2BrmueuxeZzjhq43XnZsYTYk4PvN0zhDIwQYFm%2BplAiAz1gWvELtpEmJluvjVuClHgkVgP5A1j1o1%2BUFUz5nEbyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpAdfUq6HMlMF84RvKtwDSCn3DZKyrm6xELNw%2F13%2FEUQPa14I7tYT2DqjNQcQLRU4%2BaD41QIf7mhTohfYCTo%2FPMh98qY2S6rbEC0RDcPQCag0KWaSVD7Vod0BV0x%2BYSBl0KXR5S0zX%2FaMzkpUDuunOzrr1hSO3QnuGdgW79G8EHso%2FJEbArMKh0eETmeDhJmp7Az9nQ7%2FE%2BiQvw8oLvub9m5mgCuSJ0O%2FVQtz2sT7Lu3hPDZur376HKFqgmpdlE%2BCw%2B3d%2FNdnsBhBpoOeXwcWFLg2O6K5p8IvCt9Zvn0bHu6%2BRZncTknNkCyaOuDcej2vCh8u24yWICmdO75%2BV4XF0C0adlp8A0iQYRlBYb0PpmJQp8x%2BYvuk8BsMAFSqWphyVinjcBOo51lw%2F4R7CiSQJ1bBSra1759DP03dTVh%2FWDUq8oZj8eHgvzSfAP5eQJI9qniY6hA3LjeisFsTjKirbuHJtLlCjMMDzNrMnLnZkKhATx4eukRmvLX6DD9FhjfR403BFxfkfffFnYwUpRUI2LkgeqyFDYIkJ8%2Bmv6ONimRNjG9T2%2Fmgq3b1nTJPbPxCKQXK9H3zowmzWsZzzGqTFVNz1OX1ML56NAQvXAl%2FmWKjBq1kqjhafo5W59y%2BCnNZpuDC%2FMx1AARMJkEwrru2wgY6pgF7hOW4PXI6gIbfTxSWZh4lzBS6dGCssQLAV75TuytvqZH8StZ7FXChRks69eUG%2B7lBYxS7KcIJJTo76SUzLaMfSeFwEPaWepVnc%2Fjtchzr4pUeg83OIovKcS1yjzwh5IsDxduykhREaJ7GVX0qLUCSU2nh5Eoj2tJ%2BubHK2DCQqt7tTuYLqXzrYYfxqNId8ljbbkVur5HFCg1gLuw7223%2BJzIKcDY6&X-Amz-Signature=74e2835817e32dd438c2d398fbfede18b21b34d325714cb0c659f814be9f4159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
