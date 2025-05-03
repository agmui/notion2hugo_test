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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOYVRSE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB1sj%2FPO0i8VUO7YLTFASv%2BsCrC7dnnJhCIuI4qFe5D4AiBdVTxSW0pmBE7GDkjpNG3orx7m7KVgQGdLeC3xIhJ4qyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Xp7miwFFT7aPCWvKtwDw5eq%2Fg3AxsuS%2B005Y9QbCMsiZeuhecOUpJSoAPzRvJA9SDyGlsy%2FUvWarQTU57mxjP5K%2Fwz2ScK2kmBKBRP4OMcGNsc%2FdZZc8WjNRkrBTfsB2yKOk3lewSiW1m%2F6bluAHF1d%2FWki1Cho8gmOQ1e42vdnWbZ05Xsfbucmb7gbx0xtDzQ92BSVEM2CoNikEP%2FA5InthW3RPdq%2Bc2WBYgoDcXeqJmwl8UDAgmZQ7T3ydcYIqJBIotVH4StZ5pNHmbIApJz1pfDRTsT3iakbR1eFoszam5KZM7OTNxZqnNdpMTZnvWPPe%2FpPtbPsScRslcKH9ctupXwt%2BT4bxNTpeAKpxKFWvQoUd%2FvKU003tDOtOcO3Ob86oRRZh2jwLyZRwCHHezp9w6tfu6SRA2Yp8ssGbcqcsKdM4Uf7q68NwxZG4xrumGrwGGJeJ6NeBazLUJr0Db49L23bRblg0tuMHXjflDF%2BvXv7suQcYys%2Fc8MyfLpYVDA6n76Oey%2Ff5C6jNgQ%2BmIQQsSScmQ0D0hCp5IXpHg%2Bf2pPKvUIDQthLS0kG5SxeUdCGojmtwx89%2BusPe1bc37yySLDeHIDQ0GWECoLxmoY%2B2yao9igyQ8WN4yN9jzakN0MZuQn%2FKGWIRkgw597XwAY6pgHVEQIeu3MQHI7Nq6iPRDjZHr7k6Mi%2FGU3Qx4COTCazgpIowFFQSkklCnl5gWi58ZLUC1koL9pA8O%2Fskr6j%2FLc8jgAUA9lP2cpornNwZv1ceZdDS%2BiWCLRrr4c%2B8Be0JkSfIH0ay%2FSxuxZIWp9Dp1vI%2FAn06%2FBn%2ByRe00QWPmnjh3Lre5gBq2clHP7z5oMwQJV9HJFjeHVnBMP4Y5LJRniPNGOtKOT6&X-Amz-Signature=41fea54d68d50b0593a5815f56a02bbbed9da794f8ad6f72fd68e1bad949950f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOYVRSE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB1sj%2FPO0i8VUO7YLTFASv%2BsCrC7dnnJhCIuI4qFe5D4AiBdVTxSW0pmBE7GDkjpNG3orx7m7KVgQGdLeC3xIhJ4qyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Xp7miwFFT7aPCWvKtwDw5eq%2Fg3AxsuS%2B005Y9QbCMsiZeuhecOUpJSoAPzRvJA9SDyGlsy%2FUvWarQTU57mxjP5K%2Fwz2ScK2kmBKBRP4OMcGNsc%2FdZZc8WjNRkrBTfsB2yKOk3lewSiW1m%2F6bluAHF1d%2FWki1Cho8gmOQ1e42vdnWbZ05Xsfbucmb7gbx0xtDzQ92BSVEM2CoNikEP%2FA5InthW3RPdq%2Bc2WBYgoDcXeqJmwl8UDAgmZQ7T3ydcYIqJBIotVH4StZ5pNHmbIApJz1pfDRTsT3iakbR1eFoszam5KZM7OTNxZqnNdpMTZnvWPPe%2FpPtbPsScRslcKH9ctupXwt%2BT4bxNTpeAKpxKFWvQoUd%2FvKU003tDOtOcO3Ob86oRRZh2jwLyZRwCHHezp9w6tfu6SRA2Yp8ssGbcqcsKdM4Uf7q68NwxZG4xrumGrwGGJeJ6NeBazLUJr0Db49L23bRblg0tuMHXjflDF%2BvXv7suQcYys%2Fc8MyfLpYVDA6n76Oey%2Ff5C6jNgQ%2BmIQQsSScmQ0D0hCp5IXpHg%2Bf2pPKvUIDQthLS0kG5SxeUdCGojmtwx89%2BusPe1bc37yySLDeHIDQ0GWECoLxmoY%2B2yao9igyQ8WN4yN9jzakN0MZuQn%2FKGWIRkgw597XwAY6pgHVEQIeu3MQHI7Nq6iPRDjZHr7k6Mi%2FGU3Qx4COTCazgpIowFFQSkklCnl5gWi58ZLUC1koL9pA8O%2Fskr6j%2FLc8jgAUA9lP2cpornNwZv1ceZdDS%2BiWCLRrr4c%2B8Be0JkSfIH0ay%2FSxuxZIWp9Dp1vI%2FAn06%2FBn%2ByRe00QWPmnjh3Lre5gBq2clHP7z5oMwQJV9HJFjeHVnBMP4Y5LJRniPNGOtKOT6&X-Amz-Signature=f2ade997337b0f0a56820369ca838663b016d92a0a3245ae6b27f92a0035803b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOYVRSE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB1sj%2FPO0i8VUO7YLTFASv%2BsCrC7dnnJhCIuI4qFe5D4AiBdVTxSW0pmBE7GDkjpNG3orx7m7KVgQGdLeC3xIhJ4qyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Xp7miwFFT7aPCWvKtwDw5eq%2Fg3AxsuS%2B005Y9QbCMsiZeuhecOUpJSoAPzRvJA9SDyGlsy%2FUvWarQTU57mxjP5K%2Fwz2ScK2kmBKBRP4OMcGNsc%2FdZZc8WjNRkrBTfsB2yKOk3lewSiW1m%2F6bluAHF1d%2FWki1Cho8gmOQ1e42vdnWbZ05Xsfbucmb7gbx0xtDzQ92BSVEM2CoNikEP%2FA5InthW3RPdq%2Bc2WBYgoDcXeqJmwl8UDAgmZQ7T3ydcYIqJBIotVH4StZ5pNHmbIApJz1pfDRTsT3iakbR1eFoszam5KZM7OTNxZqnNdpMTZnvWPPe%2FpPtbPsScRslcKH9ctupXwt%2BT4bxNTpeAKpxKFWvQoUd%2FvKU003tDOtOcO3Ob86oRRZh2jwLyZRwCHHezp9w6tfu6SRA2Yp8ssGbcqcsKdM4Uf7q68NwxZG4xrumGrwGGJeJ6NeBazLUJr0Db49L23bRblg0tuMHXjflDF%2BvXv7suQcYys%2Fc8MyfLpYVDA6n76Oey%2Ff5C6jNgQ%2BmIQQsSScmQ0D0hCp5IXpHg%2Bf2pPKvUIDQthLS0kG5SxeUdCGojmtwx89%2BusPe1bc37yySLDeHIDQ0GWECoLxmoY%2B2yao9igyQ8WN4yN9jzakN0MZuQn%2FKGWIRkgw597XwAY6pgHVEQIeu3MQHI7Nq6iPRDjZHr7k6Mi%2FGU3Qx4COTCazgpIowFFQSkklCnl5gWi58ZLUC1koL9pA8O%2Fskr6j%2FLc8jgAUA9lP2cpornNwZv1ceZdDS%2BiWCLRrr4c%2B8Be0JkSfIH0ay%2FSxuxZIWp9Dp1vI%2FAn06%2FBn%2ByRe00QWPmnjh3Lre5gBq2clHP7z5oMwQJV9HJFjeHVnBMP4Y5LJRniPNGOtKOT6&X-Amz-Signature=5b469b993853a765591b617e7685910510b93d2271b960aa7cedcbfe3f2b5a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP5GLMCB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBXeSBaKtqn%2BrBEpgHzMviROOGsU8rDsx29gM%2FUfxNheAiEA7hslpH6TQBJv9npgJq%2B5XcFzNqYdL14T5VZ69GeFn3gqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEo2x%2Bv%2BUVME0irpSrcA%2BQ1w3o%2Fe7aAkgZF5QHxzeFV7bOiT2pD6jUYFTrkpXqHInR7%2FGanGYSJdZQ8jRIT9oZBv55jUcfPWTZFOGmauwCErQkBMmr9dug%2BnYAhkEOS9ZmfOsvLsgp7oSL4SwcE1tk4QaTpqMcqW2wextDMqlXoyvSt8twllYHAjYmvnkQAocpALXsPssBx1USoeyiVdmSQ7mqQHMrCsJxzNhCF1M440xDI4ZJMIJQaAMnC%2FJB3u8P0XYY4oIvXYk4pH%2FaKha%2B%2BTjStTB2PYfvr1QfQWppRrS6U2EBgau2lnsG2JUM7KU%2Fykhf9OJo4LFay7sdO88eOMYLubjYPYgqbKrIWTz87bxk4edbr7m8QpaVIKzVmqm57%2BN0E0r8yhvMkZ%2Br20TiuPbaotdR2v%2BRVInmXU2ulV8gsl1%2F72bKokgA5TCTYIbq7HRBBmJmLY0KH74X4ve01yDTKIdOtxx8GB39m%2Fei7LdeGU6wbduChrYm%2FTWDbZacuFTtycTK7XnYd0dEslpcRHvHa1gIoPYI2PUycJuwFUwjH2JR%2BfxO4b9pSlt5zAJcF4ksGq5gUjQY4wBXeodN6OdOEtRdJTCSvFTFpFzDRkl6wv8EUJ7HGvAHPUHLBJAYLeH49ETZA0MbgMOXe18AGOqUBA0gMyZR4qovzs7E2rDUPAoV9InHOG4uFW%2B4aL65vPZyAblJnCfMm1JO0NzST3NY60UZeIVP8M%2FIGJUeW3mw7%2BvGCOfSdCz3JKikp5biJ2Z2bsNTsRnqwp90T4Ns%2FD5bvbtSd%2FoH0NIRviUPbCifriFd5zLtWuP%2BvH5JOy3LJcxQYBBK2TvY6m6pE5942RQI2eIVSNX0h6UqENfx8x2QaaRBd0TtK&X-Amz-Signature=7da627193182384f12fcbc3f82e49b72d219d712348d1030cb3a11ba424fb996&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ56OLLI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDjsWB2DuL6r%2FX2Z8PmGlUGPTuEaTd7orzVkOOORKbzSwIhALQdDNdeJL3HWSlZIidYyhW2CzA6Twb3ayXQbZunQ%2BCxKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGaraPwbu1379i%2BmQq3AMdaUfpXa4WZv1XIYtx1NBxUDtUJ8ujBnW4jsnSN%2BEfvnz060pyZg3IZBOyZtps1x5JyEs3v9hSJsc6amZFLeJF3HdXHmuwQXcxFbo0BTZ4RaIrbau0R70BFz8l%2Fp0d0WUKLqfh5VMjyTs6aokl2GpocmW6Q7pKL2hazDzZXLdCn7c5kdtO0Y9t%2BcsK5lhuk%2Fl40jvhmYspavFKE%2FXf4Fsv3b40pY0PQBqBhDpkqi3p0PQicHzzgI5P6eLxyl4zda8rpYQQzSdW3VsA%2B8SXz0%2FOAChYJ4mEo56qZXGZoC9ujsLYzaOA%2F7C%2FsXDAVyivOWKtpQkBTOe%2F9PX8937U%2F9mn2KLuLm0UhaIi1OIu0uYRI3PvOH6yNo7BycE%2Fjw6NXKudVYhCnLa1hVT8fGXXOMebuKAk3ZIoPD5ytkAN0ECS2n0cdacp8RC72aWDaxqtvP%2BlumpARkik1O9KMSUWWG%2BYxxF6UzyYWlwrG4s6BmWmqYmPXdwCHGpwEK0KwCjGM8P4mY6XL2GW%2BHaB%2BDX6maSYjBvUCfDX%2FyVryd90w1aP%2Bf9a%2FmjFod06PFJqWgN6I7aOoZSMP5WBMIAG8uXPc%2F8wd8kAskH%2BIzf26XJ0RiYpBC%2BNaZntkBEC4z0T6jCcv9jABjqkARdvV%2BF8sZUzlO82aih%2B0ci2aOS7n10Yj8d7jDFqBtO649bWTsTlg527jDaUFJgXmAtl%2Fpu5FA4VAG2L5%2BrcmI2l2OLmaCVzla2OkIFJ1nGlQIic%2BBfVo78jj3TdK6VQibUIQVn%2Fs9vRMKnVGwNNPVcID7cibFG%2BKkk5cYYdhEpE1QQcnKDg%2FOvfzIYZIjQ2tgyHoH1%2BstQzkjM%2F%2FrKRkRjTylIk&X-Amz-Signature=912b4eb5a314607c86abedf79312e57cb669747a92028809bb3ea645c54003c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOYVRSE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB1sj%2FPO0i8VUO7YLTFASv%2BsCrC7dnnJhCIuI4qFe5D4AiBdVTxSW0pmBE7GDkjpNG3orx7m7KVgQGdLeC3xIhJ4qyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Xp7miwFFT7aPCWvKtwDw5eq%2Fg3AxsuS%2B005Y9QbCMsiZeuhecOUpJSoAPzRvJA9SDyGlsy%2FUvWarQTU57mxjP5K%2Fwz2ScK2kmBKBRP4OMcGNsc%2FdZZc8WjNRkrBTfsB2yKOk3lewSiW1m%2F6bluAHF1d%2FWki1Cho8gmOQ1e42vdnWbZ05Xsfbucmb7gbx0xtDzQ92BSVEM2CoNikEP%2FA5InthW3RPdq%2Bc2WBYgoDcXeqJmwl8UDAgmZQ7T3ydcYIqJBIotVH4StZ5pNHmbIApJz1pfDRTsT3iakbR1eFoszam5KZM7OTNxZqnNdpMTZnvWPPe%2FpPtbPsScRslcKH9ctupXwt%2BT4bxNTpeAKpxKFWvQoUd%2FvKU003tDOtOcO3Ob86oRRZh2jwLyZRwCHHezp9w6tfu6SRA2Yp8ssGbcqcsKdM4Uf7q68NwxZG4xrumGrwGGJeJ6NeBazLUJr0Db49L23bRblg0tuMHXjflDF%2BvXv7suQcYys%2Fc8MyfLpYVDA6n76Oey%2Ff5C6jNgQ%2BmIQQsSScmQ0D0hCp5IXpHg%2Bf2pPKvUIDQthLS0kG5SxeUdCGojmtwx89%2BusPe1bc37yySLDeHIDQ0GWECoLxmoY%2B2yao9igyQ8WN4yN9jzakN0MZuQn%2FKGWIRkgw597XwAY6pgHVEQIeu3MQHI7Nq6iPRDjZHr7k6Mi%2FGU3Qx4COTCazgpIowFFQSkklCnl5gWi58ZLUC1koL9pA8O%2Fskr6j%2FLc8jgAUA9lP2cpornNwZv1ceZdDS%2BiWCLRrr4c%2B8Be0JkSfIH0ay%2FSxuxZIWp9Dp1vI%2FAn06%2FBn%2ByRe00QWPmnjh3Lre5gBq2clHP7z5oMwQJV9HJFjeHVnBMP4Y5LJRniPNGOtKOT6&X-Amz-Signature=eb4c52cdf418c131ad7afb0789f91fe2dfac407d75f70cd308c156d0975add32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
