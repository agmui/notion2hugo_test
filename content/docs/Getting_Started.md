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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C7FM4LY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAYj6xa63XbuhK9owfMoykK6tbMzkDqFpkfP16%2BHfBkAIhAKwawL3ZIcevzM0AEAfJqzXlqdp38m2gh8u%2BFt7yJbojKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fki7arb2cIgVWMysq3AOtTQ7sD3MqCvWg%2BDyG%2FQFPNMW8aYnkTRJPieIoOuNfsytrmXWqk%2FpxdZUrN%2BketHc7k2puCuMeBzcQoYKOz8kgbFgKukl6g5fmNzK3vcJcBcCuXstlR5M25oUC5a27wWl%2BiBiBTXQXvohVlRNVEgKcW3rILycIrcbwJpCCpsc5oca2e59AaM6EqoS%2FcBWtKteD%2BWcatiMvaOxd1ets7xjosJU7ksHaXJSS7W8s2f7d2SuiholPjxB2zN5G27cr1oLWh4mnibqpfQAJaVKfDjvDPxbzyIzckaQ9%2B4Zc6o17wJTwonRrYNequAvNgnZ1oc%2BpJIrdc8SKnEOGlLw%2FBGow2GqsUhY7vWK9pPWvsPoDVJXQ8iVnXv%2BVR1OEFZ04BYpLKhAMzp0h%2FCx8kEqVGT1pHmGJyMlX9THr0Cwq9Ui7%2FVJUYTlDoZa4FNauGEyuffdiuohM97HhvzFXxw9RvgBjBJ3yF8UJDoKTa7cwUyg4MjgVmIWuZDfP9caJdA%2BkLf9vjygPdPT0SzUmqtd495RsLJ90w6hvC2GO7NJTLagIHjrK20HuK0yxf9kal82N460aaVp3StjKDcEFRsawcNDC1%2B7Q1e71Gp8Ir9qbylTZZw6D5jCH2BBvHg4lWDCIyvO8BjqkAQudxwbCXPy8AfQPsySmZeTJoS2htSI3IPu6ziEPISy0xxLs5npEynJQLTEdw5VU4e7mplggjy4YxttoKjwvX%2BwCotvvWgsG7t8FsTynxQHZ52EnXTeVgLzd08jLLElvJ1aA8qmMxAcQL8p7d61kcPlEVJ8MBhHakMAFQbD7rxQuJo4FPFIi9AlB7UHSBnj8rJvcx96vrppPVBR9X%2FrycZucVx3O&X-Amz-Signature=70f95e2bfcb40e595a1b6636374927e7edbbf54dd967cede47982fab0381555e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C7FM4LY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAYj6xa63XbuhK9owfMoykK6tbMzkDqFpkfP16%2BHfBkAIhAKwawL3ZIcevzM0AEAfJqzXlqdp38m2gh8u%2BFt7yJbojKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fki7arb2cIgVWMysq3AOtTQ7sD3MqCvWg%2BDyG%2FQFPNMW8aYnkTRJPieIoOuNfsytrmXWqk%2FpxdZUrN%2BketHc7k2puCuMeBzcQoYKOz8kgbFgKukl6g5fmNzK3vcJcBcCuXstlR5M25oUC5a27wWl%2BiBiBTXQXvohVlRNVEgKcW3rILycIrcbwJpCCpsc5oca2e59AaM6EqoS%2FcBWtKteD%2BWcatiMvaOxd1ets7xjosJU7ksHaXJSS7W8s2f7d2SuiholPjxB2zN5G27cr1oLWh4mnibqpfQAJaVKfDjvDPxbzyIzckaQ9%2B4Zc6o17wJTwonRrYNequAvNgnZ1oc%2BpJIrdc8SKnEOGlLw%2FBGow2GqsUhY7vWK9pPWvsPoDVJXQ8iVnXv%2BVR1OEFZ04BYpLKhAMzp0h%2FCx8kEqVGT1pHmGJyMlX9THr0Cwq9Ui7%2FVJUYTlDoZa4FNauGEyuffdiuohM97HhvzFXxw9RvgBjBJ3yF8UJDoKTa7cwUyg4MjgVmIWuZDfP9caJdA%2BkLf9vjygPdPT0SzUmqtd495RsLJ90w6hvC2GO7NJTLagIHjrK20HuK0yxf9kal82N460aaVp3StjKDcEFRsawcNDC1%2B7Q1e71Gp8Ir9qbylTZZw6D5jCH2BBvHg4lWDCIyvO8BjqkAQudxwbCXPy8AfQPsySmZeTJoS2htSI3IPu6ziEPISy0xxLs5npEynJQLTEdw5VU4e7mplggjy4YxttoKjwvX%2BwCotvvWgsG7t8FsTynxQHZ52EnXTeVgLzd08jLLElvJ1aA8qmMxAcQL8p7d61kcPlEVJ8MBhHakMAFQbD7rxQuJo4FPFIi9AlB7UHSBnj8rJvcx96vrppPVBR9X%2FrycZucVx3O&X-Amz-Signature=a99795aee5cd63f146f007d014f5fcd5eae7c9abf9a2dbe86dc564acb8308a28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LPTBEW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTtaVln%2BHjZzgfbfn%2BR9VA6bGNSNHY3eabouApvWB8ewIhAPRYhvy0h3UiH8WRlCVtjfT83ptjp0tiP4YGAzJ%2BHjLiKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYbWqdUtn5WU4gv74q3APXJpfRzGcpNiU0XXTI4H3xFkS4CnV7McJ9%2FbFpMX7%2FQKJQcJ4wW0WqdjxfkKpIYXUVEiKgQ4bhMpmESPWTqKQfHO8qGcg2JAiIANAsjhyYwQBHG4tWZdxEBWdGPLNh2DMiHpn3Ow4hCG%2BN3gppTZ%2BdNZqMP%2BT9BsOnvkWRJoUaghKhFMiNiNxOtwS479crwCHTX4Ni7dSc1NhN9Ieo5%2BErB7nrhZkHfKIGtGgf35xutKn4cPevjXURnjs92ScOxMdESVkMWRQqvqj6BqI6mKQXkcuMF8yNDPwDDspaZJduvDP6V%2B%2F8ziY77gaI334SrrJiZbkuhJPFMykPfnXdfVptW3bTrFAEjwSXkWW5bqmKj%2BaUHALX3Osz4XaTXfB17oR2vLRPukyGfTS6JS7rcfHZmr0oVhBReL9mX%2BxD4xAZIbaR9Qq4zavNk1Udt9gdGQXkcSsq2TP9ndo%2BBrAsnoidpDfKs0QKD6Qtw5Ieo%2F56aTxpeJFsQ4%2BjU9jAJdYQMxhbd3BtwSvpEWy6JlSv%2FvIyuk5aMpxwb6oDDN1iRUtkK4ssyO3ysJ5uQJgCAfuRdobNG4NoRQSFjZc5ex7VFiRdScz8sseBiC1bKtQ9le4sOrkXpjQG7U%2ByVk6btzCxyfO8BjqkAQWZEVTcw3O%2BPwTU%2F69U8W6jMPyZxzVDs3ctHe2vLZ5LtpJ%2B3guNS6rIL%2BeueNJhI4ASgafiT0BTbvZal7v6omFPPYyudqIPRFfOVig%2BvTnWfQSko6Ky7QrNOwGzFOxus7XIueodvjqtZfK22hUAE%2BAg5le5O%2F1LHJ9LQAPBGkKtkliXFqqkNYCsG1oS%2FUhITx8VT%2BZPVFsW8ca9nNMOA2klBCqI&X-Amz-Signature=2919a105ff6ad81ee4bf898aaa9c85226617ea0b712057c80c5265f255a9ef7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MZDIHK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWVPqr6ar0%2F8okMK7vRBuA3dKX8x31h6V9Ko7NgKdbRQIgFwbx4fxBsE9RlvdLVkcfi2bWFYdr9nxR7jfLQzR%2FNu0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA36mz7k3y9h7iObsyrcA%2BO6uG02b6zzgzdByZ0SQsecQXBs3X%2FrNEUFdwtnlacYTjQjvgJD%2FAi4z%2FqUBQ0QqnoOt5pPuMySPxVZ9xiHoDFx5lzAkZnfv%2BhO4%2B83ybZy0d3x2lTA2nSC%2FL%2FadPJ5JFLQz5i%2FXKCxurMtrRZYHf4eSDIfFhQrHrAsQTA1PkYiVmJFklP6D6zWzNqd2qupiyaZB7teZ4Pt5x9%2BS9No0p6EVhN1soic9wkc8oaetD8KQXbmZXTxrzTJcCFF%2FBffVUKY5zHvWnv1DwcEXeNqjjq3N06I7PC%2BJJxKUJ9tM6b9fNImv%2FtKVVCw3yz%2Fnh6aFstZ%2FUocyS7R0lozELYwwQ23ncI%2FcxQ3e5raeTpW9IKNwrDUAlrgA4I2Qn2dlaWrXrpAyzad%2BUCGOyV%2B9mUG5FfBrsj5UNFJN31nosOawu4Gt6%2FsWWflqGrd5AdjLqE%2FJ8s10HNbrv6vW3kg8mWhMa%2B%2FpUzoBTNbEnZZwLzrXzaQhBXXtE1k0LxOPKrSMRL6hwonbmlRU%2FbbGS84gZ%2BwraurwTKhoRxHRGsyaabNeoFHYx2ns%2Fp9PuvwBHIqK%2FULzXrJBrSLp8C43EyBsPMZ66OQiTJqdFVsKLtakssxtWUrQkk84foCMOYJx3WOMJbJ87wGOqUBLz15EvaGOMueffwpIYW3oRxJ33HDVZWQn9R5pP64lu%2FrSapSPjAmrsL393KWOhT%2BDg%2FsKDRedbr0o2XoO3oibi9p5aaajpKSi%2FK3RGOL94fLqgFlqdhB3jRT4t4BOif18oyDmKVnyBbw9yX%2BiHWLy0FoHU5m35M9Cp9yecvRhIMWh%2FHtuds4LT1snyYQsAFk7tsdntTjR7UCE6dx9iwlA7BhVA6x&X-Amz-Signature=d120f03c90cd6c84f1d10b2db14f2aeb981ce8c5a6e784c065e3785e6423b3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C7FM4LY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAYj6xa63XbuhK9owfMoykK6tbMzkDqFpkfP16%2BHfBkAIhAKwawL3ZIcevzM0AEAfJqzXlqdp38m2gh8u%2BFt7yJbojKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fki7arb2cIgVWMysq3AOtTQ7sD3MqCvWg%2BDyG%2FQFPNMW8aYnkTRJPieIoOuNfsytrmXWqk%2FpxdZUrN%2BketHc7k2puCuMeBzcQoYKOz8kgbFgKukl6g5fmNzK3vcJcBcCuXstlR5M25oUC5a27wWl%2BiBiBTXQXvohVlRNVEgKcW3rILycIrcbwJpCCpsc5oca2e59AaM6EqoS%2FcBWtKteD%2BWcatiMvaOxd1ets7xjosJU7ksHaXJSS7W8s2f7d2SuiholPjxB2zN5G27cr1oLWh4mnibqpfQAJaVKfDjvDPxbzyIzckaQ9%2B4Zc6o17wJTwonRrYNequAvNgnZ1oc%2BpJIrdc8SKnEOGlLw%2FBGow2GqsUhY7vWK9pPWvsPoDVJXQ8iVnXv%2BVR1OEFZ04BYpLKhAMzp0h%2FCx8kEqVGT1pHmGJyMlX9THr0Cwq9Ui7%2FVJUYTlDoZa4FNauGEyuffdiuohM97HhvzFXxw9RvgBjBJ3yF8UJDoKTa7cwUyg4MjgVmIWuZDfP9caJdA%2BkLf9vjygPdPT0SzUmqtd495RsLJ90w6hvC2GO7NJTLagIHjrK20HuK0yxf9kal82N460aaVp3StjKDcEFRsawcNDC1%2B7Q1e71Gp8Ir9qbylTZZw6D5jCH2BBvHg4lWDCIyvO8BjqkAQudxwbCXPy8AfQPsySmZeTJoS2htSI3IPu6ziEPISy0xxLs5npEynJQLTEdw5VU4e7mplggjy4YxttoKjwvX%2BwCotvvWgsG7t8FsTynxQHZ52EnXTeVgLzd08jLLElvJ1aA8qmMxAcQL8p7d61kcPlEVJ8MBhHakMAFQbD7rxQuJo4FPFIi9AlB7UHSBnj8rJvcx96vrppPVBR9X%2FrycZucVx3O&X-Amz-Signature=7f298376b51281a83f2912a1037c7b1a0ede6dd937000c67d70e69af4f614749&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
