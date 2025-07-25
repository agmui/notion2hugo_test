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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AYQCDMP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCDUi0iP5wJzx%2F9F459gh5hdSPsg36HXmBt4Qz8MgRE7AIgDrkVFzX3QVsYeYHz2UklmVm%2FipT5NepYN6EUB7sVsc0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNl6NWxq5RYJRI2DOCrcA5KmosOTqvTjoiwAzzxB4Sw4sTdxrjlgXQjnvqsYMydjymbUF4FkPVJziK8nQxiZ%2FkSXRGRJdAMwXVrAThTvlpS%2F5ZW%2FmRmGTfrzo1aOu%2BfqRACheiFL%2BATn2eO8owyTXYJjJc17gsfPgrAd3VXibItiFaRGQTiReeT7IRiW4vO9HRojlKvgjDvNiZ7kvxH%2F2PROWdd1ZmxOsW9TTC%2BGaG9yRglBbWlMXmDnMAsnJRxsnPptuzf9A81xucAa97AyZIR%2B1ZnJNeq3s3ucfZgRhTXcsLUO3N6Lahzs7gDfqec8A%2BtNZJSC2ZOhofHFnmFQG6ecgej%2Fc5q%2Bj3mk%2BD9nw5GIvY6hXBw8IUTnahmE%2FivAo%2BFHvds8Hjmk61ZAMRf%2BroziPBhcNInVSm8aTjMn8QVhhh7EkaMj1wpo93YMzERUNAH3YKbe5LQpOuoNyM1LcOHBiIJBHc6PuLCpXo4ZveEHXbTjoV8Ef9ntDB0lVgp%2B75wg3xRayXA3xLCA%2FcbRZncToIsdt0cz0FlYC%2BH6vFLuR4TznRGBdF68Q%2FlDBdUGwDkYdv4uUvIiMP8scZFqumMPGUyGZ2vS0mTxRGNwr1DbM3pKxwEthw9vsGv6S7Kfv9cWQXjzvnUUJjfnML2MjcQGOqUBmhg7GtcLFRAYsZ7ro1olB7Pl9V%2FWlvuQzkmg5SDHTbZ1sUIwNYMNw%2B9H9DM0Zn3nY6a7li4vuU19%2FIPkA63frGvtXMW9v8EtQGpZMDC7POM4cmGItVH%2F5xbKOxI6UYxjjUnvMDmmNSY5iD9z%2Fd34wnReXPOqHyqxa2mOznnEaKEqi4xGqPteWAy7b59aCKr%2FY0WPDtl8ms6JKg2feow4GIOjpKv3&X-Amz-Signature=1dc7d2ec8714e86ad17316390195edc33370b568140551bc4429a31f79d69346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AYQCDMP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCDUi0iP5wJzx%2F9F459gh5hdSPsg36HXmBt4Qz8MgRE7AIgDrkVFzX3QVsYeYHz2UklmVm%2FipT5NepYN6EUB7sVsc0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNl6NWxq5RYJRI2DOCrcA5KmosOTqvTjoiwAzzxB4Sw4sTdxrjlgXQjnvqsYMydjymbUF4FkPVJziK8nQxiZ%2FkSXRGRJdAMwXVrAThTvlpS%2F5ZW%2FmRmGTfrzo1aOu%2BfqRACheiFL%2BATn2eO8owyTXYJjJc17gsfPgrAd3VXibItiFaRGQTiReeT7IRiW4vO9HRojlKvgjDvNiZ7kvxH%2F2PROWdd1ZmxOsW9TTC%2BGaG9yRglBbWlMXmDnMAsnJRxsnPptuzf9A81xucAa97AyZIR%2B1ZnJNeq3s3ucfZgRhTXcsLUO3N6Lahzs7gDfqec8A%2BtNZJSC2ZOhofHFnmFQG6ecgej%2Fc5q%2Bj3mk%2BD9nw5GIvY6hXBw8IUTnahmE%2FivAo%2BFHvds8Hjmk61ZAMRf%2BroziPBhcNInVSm8aTjMn8QVhhh7EkaMj1wpo93YMzERUNAH3YKbe5LQpOuoNyM1LcOHBiIJBHc6PuLCpXo4ZveEHXbTjoV8Ef9ntDB0lVgp%2B75wg3xRayXA3xLCA%2FcbRZncToIsdt0cz0FlYC%2BH6vFLuR4TznRGBdF68Q%2FlDBdUGwDkYdv4uUvIiMP8scZFqumMPGUyGZ2vS0mTxRGNwr1DbM3pKxwEthw9vsGv6S7Kfv9cWQXjzvnUUJjfnML2MjcQGOqUBmhg7GtcLFRAYsZ7ro1olB7Pl9V%2FWlvuQzkmg5SDHTbZ1sUIwNYMNw%2B9H9DM0Zn3nY6a7li4vuU19%2FIPkA63frGvtXMW9v8EtQGpZMDC7POM4cmGItVH%2F5xbKOxI6UYxjjUnvMDmmNSY5iD9z%2Fd34wnReXPOqHyqxa2mOznnEaKEqi4xGqPteWAy7b59aCKr%2FY0WPDtl8ms6JKg2feow4GIOjpKv3&X-Amz-Signature=875daf74e27c215066ccf6745b658161930f4f2a28497dae6f7281785ce6ae19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AYQCDMP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCDUi0iP5wJzx%2F9F459gh5hdSPsg36HXmBt4Qz8MgRE7AIgDrkVFzX3QVsYeYHz2UklmVm%2FipT5NepYN6EUB7sVsc0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNl6NWxq5RYJRI2DOCrcA5KmosOTqvTjoiwAzzxB4Sw4sTdxrjlgXQjnvqsYMydjymbUF4FkPVJziK8nQxiZ%2FkSXRGRJdAMwXVrAThTvlpS%2F5ZW%2FmRmGTfrzo1aOu%2BfqRACheiFL%2BATn2eO8owyTXYJjJc17gsfPgrAd3VXibItiFaRGQTiReeT7IRiW4vO9HRojlKvgjDvNiZ7kvxH%2F2PROWdd1ZmxOsW9TTC%2BGaG9yRglBbWlMXmDnMAsnJRxsnPptuzf9A81xucAa97AyZIR%2B1ZnJNeq3s3ucfZgRhTXcsLUO3N6Lahzs7gDfqec8A%2BtNZJSC2ZOhofHFnmFQG6ecgej%2Fc5q%2Bj3mk%2BD9nw5GIvY6hXBw8IUTnahmE%2FivAo%2BFHvds8Hjmk61ZAMRf%2BroziPBhcNInVSm8aTjMn8QVhhh7EkaMj1wpo93YMzERUNAH3YKbe5LQpOuoNyM1LcOHBiIJBHc6PuLCpXo4ZveEHXbTjoV8Ef9ntDB0lVgp%2B75wg3xRayXA3xLCA%2FcbRZncToIsdt0cz0FlYC%2BH6vFLuR4TznRGBdF68Q%2FlDBdUGwDkYdv4uUvIiMP8scZFqumMPGUyGZ2vS0mTxRGNwr1DbM3pKxwEthw9vsGv6S7Kfv9cWQXjzvnUUJjfnML2MjcQGOqUBmhg7GtcLFRAYsZ7ro1olB7Pl9V%2FWlvuQzkmg5SDHTbZ1sUIwNYMNw%2B9H9DM0Zn3nY6a7li4vuU19%2FIPkA63frGvtXMW9v8EtQGpZMDC7POM4cmGItVH%2F5xbKOxI6UYxjjUnvMDmmNSY5iD9z%2Fd34wnReXPOqHyqxa2mOznnEaKEqi4xGqPteWAy7b59aCKr%2FY0WPDtl8ms6JKg2feow4GIOjpKv3&X-Amz-Signature=19599b1eb5e47dc27513f55d2376fb74e5915387b62e74b519ce741fca2e128b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARZYH6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCWHlj5zhMvzWagXKLRd4LZ%2FGPXAyKZ3Gi2%2BnRlJy1dvQIhAPGp7A%2BVs%2B7zbjPZzJeTvGyrlQn5T1uyasOw%2Buq49lWRKv8DCEIQABoMNjM3NDIzMTgzODA1IgzSdlxIiJuzZAI1U9sq3ANLFp40v%2BMgvc4EkoEp7is1ltS8H9HTgOWkOrzbvhVsW2kVf6lGWAzk3ts4UVZGjitVVTngr%2BUTK2GsRRXlP%2F73ciFJzuvyC64wN58h%2Btp78171xjTicLuUmQwiwtG6xzMe3H7oJNn98q%2BDUFZCmjngSvrcLrNFc%2FM8ar5T59rF4IoNh3Tnt%2BMDB1Woj%2BJTocX9894T8A6PHax1XfziEM81XvLCptMXeLYSi9xCSSwxo2PWgPlyCeQvjzK9ch2t3OZKw32lxANCFPPWKz86xYXW09tsz56zDlxCwo7P%2By36t%2B6Cwyawxc9%2FomQ%2FNClSGm0MIpvtWirnMmvELRDGxdFH%2FMoELpsfzC0amgxmG8EhZd2UbjLJT4pAZMj%2BWV7CbB9uhpsplDJhAlYTHAnrGrfVecbHWoiSUUgEe1QqqCYUZkUAU%2FbwOri0k1F1mbdkiEDvvws6tyc4onTiSutT%2B7ND0W1bl8KoCjXHna7e6wmJa1JpJpZBGT5pBxr7bsPhfapeaqCrvWSUHelySJw1noW4wck1GwXtLmqMfGxUmqwTgmLkzjm0rhv%2FbTkm20S%2B73B%2BS8h0CpaCFNyyRE6ovBoS%2B4h%2B4qnWhtugXo3jmVEexGRqw%2FQ6dS7TwPtlJDC1jI3EBjqkAdOFH9DC9y2A9jmEN4P7lFIv9gzA54wCNN0ksM%2Bsckbie49ncXjKxafvrv5bAHV9QSCnnpws8XkuxZY%2FxtWbNnbFbCICd6IbiFk7q5kuhp4eOBZ%2FzmbXN9Lghf4PkjXNABNWzLvecUv8qXysYKVgSasf%2Bjq%2Bm6N%2BV%2F3LU9J1cTNGfm6K%2F%2BI2xSZWV2iwdrWWMu%2BWhVPpmKlZAhlhDSwvVvCQ%2FQq1&X-Amz-Signature=69f1e9b1bf9055f3796d8cbf47fa3752da54902fd6edaf8e94dc1c7417362cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBYB7LV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCEgFDJ0DigAP9Fu%2FXt%2F5mxh%2Fm%2BQwzoMulbIYXXcmdwtQIgdJLlEpCTUuJhSB9X3qpt%2B8uPMekZdJWVy8HUjW5zaAkq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIOLdz%2BxDrb7AUS86ircAz5QAA6pzaPLzQi9ZegW9zLMWh%2BOxZNPESJmrZXg%2FQDQAAiRFtYLzO9zMJvBD8M9i68ec8J4VZV6jM5YVyiDwmU3i2lMhGWh4QUBOePHb4YumHI76WFPHOQCVfBQlDDisGe%2B2a%2Fuds9ACMm7sxKPaB5OhhUw3IV6X8drqTRsQIBBCAjha3fLMoRqp6nsmcX56uuASXMzJt2wh%2B4kHyhEwijXBI9I0noaZl5Qia0guPG%2FwyBG%2Fit%2BgJ%2F3aEhhnsRXafg8jvW9LJ10BY6K1dFgmIYUdOwOZQY%2BHqzaxrX8oqaP6SVyngurtXpTNjhTw5wt2cSL2QwG%2FsuVnEDWCnNcV9mAHGGkAPgBDkZc86vjJOhsBcu%2B5ecJF6uBrI3hsxjUKY%2F7NFMYeG9nSca2Pze2u9hdLtzubrfl5psrPfYhxb4hrrx5PvhWE8GtydexCjOPMsysS7cGiiRGaW1YZ86sxRcIx4wyCepS0xdPdOMgdLHogwHR7MnbdYgHr9%2FD4zID6bbuUGaLZqSH0DZCWWGEjaAKgZ1Tyg0tzitX23XIS9prYKN40VP21zsP%2BslpomY8Ud%2B3Kdu%2BVGWfArDbQgse8wGyry5gldkF1qmU7hpu2BhWYyA5lAeQS5X2vssDMKONjcQGOqUB363jd2nWxD2rrnewP4XMAzsvmYC9GdWAjZIcSZqSQGTeECvv3WOenW%2Bm5stGFHnLWOhhByA%2BZwlFzp60E4r%2Fj4a5pd8sDNPkLl5tA6k0Kb9MJ1FCD%2BpYRu1E0%2BdWG2SuHc7cxmPgHMCs6Dv2ttwT671o9PLJ8OkC8kREphOZS%2BhIVY9Dm973d5VoVPQVpDJSJkFhO%2BXGQWli%2Buia9xEmR%2Ftj5xI9&X-Amz-Signature=9ecde2da791ec0eb3ff85cbe88270a81fbb85f0e43c7fc98143443e4ea628c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AYQCDMP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCDUi0iP5wJzx%2F9F459gh5hdSPsg36HXmBt4Qz8MgRE7AIgDrkVFzX3QVsYeYHz2UklmVm%2FipT5NepYN6EUB7sVsc0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNl6NWxq5RYJRI2DOCrcA5KmosOTqvTjoiwAzzxB4Sw4sTdxrjlgXQjnvqsYMydjymbUF4FkPVJziK8nQxiZ%2FkSXRGRJdAMwXVrAThTvlpS%2F5ZW%2FmRmGTfrzo1aOu%2BfqRACheiFL%2BATn2eO8owyTXYJjJc17gsfPgrAd3VXibItiFaRGQTiReeT7IRiW4vO9HRojlKvgjDvNiZ7kvxH%2F2PROWdd1ZmxOsW9TTC%2BGaG9yRglBbWlMXmDnMAsnJRxsnPptuzf9A81xucAa97AyZIR%2B1ZnJNeq3s3ucfZgRhTXcsLUO3N6Lahzs7gDfqec8A%2BtNZJSC2ZOhofHFnmFQG6ecgej%2Fc5q%2Bj3mk%2BD9nw5GIvY6hXBw8IUTnahmE%2FivAo%2BFHvds8Hjmk61ZAMRf%2BroziPBhcNInVSm8aTjMn8QVhhh7EkaMj1wpo93YMzERUNAH3YKbe5LQpOuoNyM1LcOHBiIJBHc6PuLCpXo4ZveEHXbTjoV8Ef9ntDB0lVgp%2B75wg3xRayXA3xLCA%2FcbRZncToIsdt0cz0FlYC%2BH6vFLuR4TznRGBdF68Q%2FlDBdUGwDkYdv4uUvIiMP8scZFqumMPGUyGZ2vS0mTxRGNwr1DbM3pKxwEthw9vsGv6S7Kfv9cWQXjzvnUUJjfnML2MjcQGOqUBmhg7GtcLFRAYsZ7ro1olB7Pl9V%2FWlvuQzkmg5SDHTbZ1sUIwNYMNw%2B9H9DM0Zn3nY6a7li4vuU19%2FIPkA63frGvtXMW9v8EtQGpZMDC7POM4cmGItVH%2F5xbKOxI6UYxjjUnvMDmmNSY5iD9z%2Fd34wnReXPOqHyqxa2mOznnEaKEqi4xGqPteWAy7b59aCKr%2FY0WPDtl8ms6JKg2feow4GIOjpKv3&X-Amz-Signature=07a1b3117528d402c2dab47e23172b7c9ad589e33c875f70f9e0611edc9c4a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
