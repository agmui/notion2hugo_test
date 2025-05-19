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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHEVV2T%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcA%2Fe1aXODmiWOTVv%2FTm6kIurtjaiifNRUmz9VdILZlAiBSxO4Xk7AzfxghJGstNY6ndnFhWZXV4I1omk5prPkTByqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMtUqEQaay49LobUTKtwDcMQVRN%2FkqgK9fI0L5SIHlpOf%2FuGpC6NK50Wx7lNMaTjxHTgnCAkt9tfjTnxrY95s6ciF1XFNIKENLjzDC%2BU2ac%2FY9cldrT8BAMHKuhKAOtflleMKbzyXNpuyt8SRWmXCzsVU8CoYX5ZzPzlp0c9FWyzlU8QViZtpnPYD1M5%2FCcKn934LjNQGZsHeOymauaXTsqlM50rMnpfdyrCWY%2F0zZnPWMqt04phjd%2BFStE%2FGIM1fSxG1KW%2Br9jZ88TkBd9CyqkJKaFZcXQ6q4ub0vuYaA6e5JD9K4mgjMA7YcR7F3OiC65ijwrxTsQfQFhqfpMfWcAOrG5uSWfafdmPpYCrygMQPKSkNasjjLcrvXHHvvIohFoYOTEjJIq%2BNcUsZpVvyPMLbrPVzKMJphqADo6xCYvTjgNodhin%2FjuIWOMJYaZGN6u6R8WbxHvgDkQBZx306AEbSPxCeRPAvPY4WRq4K9SRMR9hRtgfG5NtsvPF6m0Q4rTNZGRmF69g2bdfKnaZogdmhmnPgwsdWMcKMmfcV0H5eLU0BqsEtT4CpFfcU4TSNNY%2FGtZFaH6DdUjnYPtmz%2FcNP7P8SObRO5I9gppXLyckOWXsRl7rsAgjirExGzk0vMQQRQTrkI08XGXow2eGtwQY6pgFNRU84gwOYP9XnS6mQfpmLiwfgovNGmUzrWHLLRscQDwwkWMJmiTRyZxra2w%2BsrKmoMnWlHUPFw6r%2BP%2Bml4KAv2zNDSUEBriLHvWhuWU%2Fm5oyRENj90msTqZqLsoB1EjAeTIxl2KIBO5nSAV%2BxWXgtdcuIZIwkye8JTwlAh5e2utL19SJlPXFmjHi5XaVQTq42Wm8KFg%2FBa7lAycrP5d3wKjoghWtP&X-Amz-Signature=ec35b91ae830b10af4a201a2305dd64ff2a181c62a8ca45cfd00b266955005cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHEVV2T%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcA%2Fe1aXODmiWOTVv%2FTm6kIurtjaiifNRUmz9VdILZlAiBSxO4Xk7AzfxghJGstNY6ndnFhWZXV4I1omk5prPkTByqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMtUqEQaay49LobUTKtwDcMQVRN%2FkqgK9fI0L5SIHlpOf%2FuGpC6NK50Wx7lNMaTjxHTgnCAkt9tfjTnxrY95s6ciF1XFNIKENLjzDC%2BU2ac%2FY9cldrT8BAMHKuhKAOtflleMKbzyXNpuyt8SRWmXCzsVU8CoYX5ZzPzlp0c9FWyzlU8QViZtpnPYD1M5%2FCcKn934LjNQGZsHeOymauaXTsqlM50rMnpfdyrCWY%2F0zZnPWMqt04phjd%2BFStE%2FGIM1fSxG1KW%2Br9jZ88TkBd9CyqkJKaFZcXQ6q4ub0vuYaA6e5JD9K4mgjMA7YcR7F3OiC65ijwrxTsQfQFhqfpMfWcAOrG5uSWfafdmPpYCrygMQPKSkNasjjLcrvXHHvvIohFoYOTEjJIq%2BNcUsZpVvyPMLbrPVzKMJphqADo6xCYvTjgNodhin%2FjuIWOMJYaZGN6u6R8WbxHvgDkQBZx306AEbSPxCeRPAvPY4WRq4K9SRMR9hRtgfG5NtsvPF6m0Q4rTNZGRmF69g2bdfKnaZogdmhmnPgwsdWMcKMmfcV0H5eLU0BqsEtT4CpFfcU4TSNNY%2FGtZFaH6DdUjnYPtmz%2FcNP7P8SObRO5I9gppXLyckOWXsRl7rsAgjirExGzk0vMQQRQTrkI08XGXow2eGtwQY6pgFNRU84gwOYP9XnS6mQfpmLiwfgovNGmUzrWHLLRscQDwwkWMJmiTRyZxra2w%2BsrKmoMnWlHUPFw6r%2BP%2Bml4KAv2zNDSUEBriLHvWhuWU%2Fm5oyRENj90msTqZqLsoB1EjAeTIxl2KIBO5nSAV%2BxWXgtdcuIZIwkye8JTwlAh5e2utL19SJlPXFmjHi5XaVQTq42Wm8KFg%2FBa7lAycrP5d3wKjoghWtP&X-Amz-Signature=b110e519ae16b7d95da80a74e08bd655ddeb04ed3505cc9ee07632b4b1f4ff21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHEVV2T%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcA%2Fe1aXODmiWOTVv%2FTm6kIurtjaiifNRUmz9VdILZlAiBSxO4Xk7AzfxghJGstNY6ndnFhWZXV4I1omk5prPkTByqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMtUqEQaay49LobUTKtwDcMQVRN%2FkqgK9fI0L5SIHlpOf%2FuGpC6NK50Wx7lNMaTjxHTgnCAkt9tfjTnxrY95s6ciF1XFNIKENLjzDC%2BU2ac%2FY9cldrT8BAMHKuhKAOtflleMKbzyXNpuyt8SRWmXCzsVU8CoYX5ZzPzlp0c9FWyzlU8QViZtpnPYD1M5%2FCcKn934LjNQGZsHeOymauaXTsqlM50rMnpfdyrCWY%2F0zZnPWMqt04phjd%2BFStE%2FGIM1fSxG1KW%2Br9jZ88TkBd9CyqkJKaFZcXQ6q4ub0vuYaA6e5JD9K4mgjMA7YcR7F3OiC65ijwrxTsQfQFhqfpMfWcAOrG5uSWfafdmPpYCrygMQPKSkNasjjLcrvXHHvvIohFoYOTEjJIq%2BNcUsZpVvyPMLbrPVzKMJphqADo6xCYvTjgNodhin%2FjuIWOMJYaZGN6u6R8WbxHvgDkQBZx306AEbSPxCeRPAvPY4WRq4K9SRMR9hRtgfG5NtsvPF6m0Q4rTNZGRmF69g2bdfKnaZogdmhmnPgwsdWMcKMmfcV0H5eLU0BqsEtT4CpFfcU4TSNNY%2FGtZFaH6DdUjnYPtmz%2FcNP7P8SObRO5I9gppXLyckOWXsRl7rsAgjirExGzk0vMQQRQTrkI08XGXow2eGtwQY6pgFNRU84gwOYP9XnS6mQfpmLiwfgovNGmUzrWHLLRscQDwwkWMJmiTRyZxra2w%2BsrKmoMnWlHUPFw6r%2BP%2Bml4KAv2zNDSUEBriLHvWhuWU%2Fm5oyRENj90msTqZqLsoB1EjAeTIxl2KIBO5nSAV%2BxWXgtdcuIZIwkye8JTwlAh5e2utL19SJlPXFmjHi5XaVQTq42Wm8KFg%2FBa7lAycrP5d3wKjoghWtP&X-Amz-Signature=5d88b0b3091e39b49a941c3dda16f377b0e56d5af161ce3fc2c0570d6888b330&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUNATN3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy2YrQcDBkSFcSHAg2r4ibbjsyDMVlT%2F9mUpfCbAr5UQIhANttTtL097YRALRGBWGioYlQ9ZUXcQKN5wW%2BfxIuXpm0KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QbGjP8slEhzYCogq3APoYbiu5Vxo%2F1L%2FWti7j%2FNEm0O%2FNwj6weIUY90aQTrifRXy9glYAJrbYk%2FS2w8tKsRINhDrgBk8U05ZM1lLqBwJ%2BpBBeMWbB5i%2BMiXToXiGyF4v5d%2BHf8MNZKjUK6oP3HNUYP6Fi0gYAaK1tZf3GR7u3YZ0TZ0agcGJ6zQ1vupU%2BmrLNwaie6GAtn16%2F0zeYoLgNW2BOSGB%2FqkzPUMuxzFcKfjNDegKWYirINGd85xhM7MeKBf%2Bby8M%2FDp0I26BTztGvoymuWz5opVovLlwXnGXJSEzcTJGFZ6d5IQXudnJh7p8HnBqoz8gjPxDacffn4ehcTFjf%2FAR6thb9crspjMwmIrmQNh9n%2FxQaa0HUlnwu8bO2Jrz6YcMlvQECuyob0D9%2F7KETTcNtBMPAz9FmXwUTCZZsroURtpgSDOOv2tETEjG5Ko3LLDs20LDWVj2HJl2%2BJCg2N1eDw4ih5Dab86OuIRjGC2Fyfu3gbwEKvOfFVEIGPH0xELxYWh6%2FUfclo5RNingGmGACPKnkcQ73sC%2F%2BoMuF3ecZ%2BN9XUdA13mu5VhaCWNn2W1poRZDO7WaoIb6AH2JQe2BUXJH97ZGYnOPOcyCBd4Uw8%2FRYDxscPi6xj2V6zg5I5Nna4wajjDS4a3BBjqkAabFA%2FWclTg652mTDtJtjA0jVavZWQ5SDZI2YFHey%2FQybdK2GdcgWkJKRkbVCAPBLoiwowF1pIzHr%2BzoPO6wWDguVhjVD3fhGAHWK78NSxfwQqIggbyr80dA5SxHI21MX0udcrpencUAdx7gBbsWpMoqzTLGnkpoEBciZPmwnypl5Jkie5%2BsUcNIAUdgZHQqxF7fHbUppH%2FwMSke1DSAndHBQ8TW&X-Amz-Signature=1f879dbc261596150c1c7cfbbb464b23f7cc9fa41c1920fb9d825f5987c9e63f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBOX4DX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsMyYC5tRFNgqj2XZ9sEX1sncFuj5fZRUzZY21RPkBSAiAx5mCURCLbDddD9pTKos8dhPhRckpo1xqugKCPO%2F5gViqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2F64AkxluDCrgENSKtwDMVCkJbVGjbrq5dLNeBVshYYvAXvt13VsBeGIPX9hKlQOrpLcv%2Flxaavu4%2B0OLCpM87SCUAhX%2BOalqqa0BFxe9nnWcVeZo69qblKJ%2FpusK7qJ7TBgSyMZRc0pw%2BqbNJNdJQcwtNlS9Q%2BEYhCImSC%2FGjgHtj5FataNyxTpydnmVWaB5yGJOU%2FIItcxyuqRvGkAlF9tNaoSLmzi9hmZ0A3n1a8fAyW%2FW0lPZvGiJNXXnfJrIDEIUixfG7bM18idoOcNL%2Bv7ybOm5RsBVeuW4iEuMw%2BdtxQIOoCCxMSTbV5UMJHVzSfBI9KmZ5iXsIEFroIj3GUMSE8DuewiGndAb7eDxfWiFf0iYHwW2BYePnSC8Px78BsNmooDf%2FEntstrvqeyTLQ9gb86CPGSeVNr7MboPoubxgk4Q9mWoSHApz8ElRyjHop27d90NvRvJAVR%2F%2FiTzp1p%2BRWNmWxOZS6cIxgqPq3JRqfy0dKzPrcz8dgTVInyLKMxErFMgj%2FVONCMYRIuQsCpc1NjBwczKyQA%2FU900VEvzpG0tR1bP6GpX%2BgLuxN0KYG8%2BA02nJTSQj01doI%2F6oxAeJmai7i0GwEtB8d64%2Frewa3RmtJ1D7Jj2Tq9vpepKykiE9bLby%2Fuatww5OGtwQY6pgFIb8OG4w7oKnjQfx6B9OWSQyvcN0%2FC8xBNjPc%2FyJnkI8QUsTo71DGaoAIMU8kAVR0Gajkm28ttCVFBwz%2BQesU6DWAUf5QcwF7YM96OcL4wPA7MbHltY4YsJYyh1gMnbXgnmB6JynDhzHosFFdbDfAzfIAr2CefnLvWFC4KYTCl5HDmeCfC3C64oaD3ltlxqdMCCqaNDnjdqhtOeweYX1vSkbdxEkTG&X-Amz-Signature=c1a7b42159c18516e8d408001dddf5121856bc7c5597cc9b30bfb105e840b40b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHEVV2T%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcA%2Fe1aXODmiWOTVv%2FTm6kIurtjaiifNRUmz9VdILZlAiBSxO4Xk7AzfxghJGstNY6ndnFhWZXV4I1omk5prPkTByqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMtUqEQaay49LobUTKtwDcMQVRN%2FkqgK9fI0L5SIHlpOf%2FuGpC6NK50Wx7lNMaTjxHTgnCAkt9tfjTnxrY95s6ciF1XFNIKENLjzDC%2BU2ac%2FY9cldrT8BAMHKuhKAOtflleMKbzyXNpuyt8SRWmXCzsVU8CoYX5ZzPzlp0c9FWyzlU8QViZtpnPYD1M5%2FCcKn934LjNQGZsHeOymauaXTsqlM50rMnpfdyrCWY%2F0zZnPWMqt04phjd%2BFStE%2FGIM1fSxG1KW%2Br9jZ88TkBd9CyqkJKaFZcXQ6q4ub0vuYaA6e5JD9K4mgjMA7YcR7F3OiC65ijwrxTsQfQFhqfpMfWcAOrG5uSWfafdmPpYCrygMQPKSkNasjjLcrvXHHvvIohFoYOTEjJIq%2BNcUsZpVvyPMLbrPVzKMJphqADo6xCYvTjgNodhin%2FjuIWOMJYaZGN6u6R8WbxHvgDkQBZx306AEbSPxCeRPAvPY4WRq4K9SRMR9hRtgfG5NtsvPF6m0Q4rTNZGRmF69g2bdfKnaZogdmhmnPgwsdWMcKMmfcV0H5eLU0BqsEtT4CpFfcU4TSNNY%2FGtZFaH6DdUjnYPtmz%2FcNP7P8SObRO5I9gppXLyckOWXsRl7rsAgjirExGzk0vMQQRQTrkI08XGXow2eGtwQY6pgFNRU84gwOYP9XnS6mQfpmLiwfgovNGmUzrWHLLRscQDwwkWMJmiTRyZxra2w%2BsrKmoMnWlHUPFw6r%2BP%2Bml4KAv2zNDSUEBriLHvWhuWU%2Fm5oyRENj90msTqZqLsoB1EjAeTIxl2KIBO5nSAV%2BxWXgtdcuIZIwkye8JTwlAh5e2utL19SJlPXFmjHi5XaVQTq42Wm8KFg%2FBa7lAycrP5d3wKjoghWtP&X-Amz-Signature=d3623eb97e8ec5cf4133196c446c82f5815402c17ffdc38d46bf7e4942df1bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
