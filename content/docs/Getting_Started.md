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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MBLKOG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYdAcdsPUt3STXvgIrxnQ8Py3YeVpW9koY4q%2Bo6tUY2AiB0j5D6rCkWgqCjWSp%2BtY0hBhqlZTDV%2BjbrF6sAa2e2sSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLVE5MrMeUjogDZYkKtwDlTBw%2BD9iHEAhJEBid5oNJSPZo%2Bhk4EuDf4Tt5F2GfaSfaaS7iNBB1b3MoIMJ6i4sK5g%2F9WIbfXDOrProH6T7jW7mAIB3gP9IVD0Sbh8wa6UgXBc1J2nuQM1KoDG2RHvlika0Ct2wmVJmYq7%2BTDU7hWG7kOaKck%2BHv6f7Hs6SI6nE9Udm2XuoyQrSXs4ElBN2c%2BryxTyDKiW2eQ5JyheM6SJ6IJwmT6RJEN78%2FGmTURPGEAlk12AApQuk%2BizaY01w9GTBTYfyZ9xwPAQo9Ve17R%2F7wrMT8D4dp5unwCr%2BUfe5N7Bu9PvDVD7h0onXEybXcvapVXyPXIdVpFBymPmVz1Bcr0FGS%2Fs8KJ9zbrAi%2BKgeIVKr1mHD%2F2BJ4RTdSJYr76bTst5VXtr3dU8YaEdhlZWH20JuFaZJ1mc9APTG41NMoubjA9tPMO65v2S20fYRdx%2F9vZ9AlpNC0rXPO%2FV%2FS87%2BDQH1U%2F60rEEnfcu4l%2FwpVag2UbItljHq%2Bjn917L%2FQ4Qd%2FhhfcPA4%2BganAWDGPJxTpBSTBuX6jcviCeK4QKRSHHcUOV20Wv%2FNa71xWknhKgR0aQ5AM4spFZc4OXZfruYM%2BetJMJ7W2uNP2aQPLw8cchzUp8R%2FVpq4hyUwgcPexAY6pgGnvZhpNJd5DdCO3CzP711DzVrF2g20kFTksSBBbxe0WK5MZpw0SDKKdVDwt0xJltH0jlaTfAU1NPajFaGTzkYrueNjYV2YmBlNRmW1Qqlm3G32OxuVFkJT05M2ZnONkKJolpl%2FIiwq5vEPnfoSLdGIPr19fGVhkk%2Bx1fEgTYgYzOLLTIdIbXyxvZ3n%2BK14nhni3F%2BJUs4vOc99q4H5xKqTh3SWXwep&X-Amz-Signature=933ad2fa8273754a0fa07391831d979f36fc4de73e910035cbd4298af616f05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MBLKOG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYdAcdsPUt3STXvgIrxnQ8Py3YeVpW9koY4q%2Bo6tUY2AiB0j5D6rCkWgqCjWSp%2BtY0hBhqlZTDV%2BjbrF6sAa2e2sSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLVE5MrMeUjogDZYkKtwDlTBw%2BD9iHEAhJEBid5oNJSPZo%2Bhk4EuDf4Tt5F2GfaSfaaS7iNBB1b3MoIMJ6i4sK5g%2F9WIbfXDOrProH6T7jW7mAIB3gP9IVD0Sbh8wa6UgXBc1J2nuQM1KoDG2RHvlika0Ct2wmVJmYq7%2BTDU7hWG7kOaKck%2BHv6f7Hs6SI6nE9Udm2XuoyQrSXs4ElBN2c%2BryxTyDKiW2eQ5JyheM6SJ6IJwmT6RJEN78%2FGmTURPGEAlk12AApQuk%2BizaY01w9GTBTYfyZ9xwPAQo9Ve17R%2F7wrMT8D4dp5unwCr%2BUfe5N7Bu9PvDVD7h0onXEybXcvapVXyPXIdVpFBymPmVz1Bcr0FGS%2Fs8KJ9zbrAi%2BKgeIVKr1mHD%2F2BJ4RTdSJYr76bTst5VXtr3dU8YaEdhlZWH20JuFaZJ1mc9APTG41NMoubjA9tPMO65v2S20fYRdx%2F9vZ9AlpNC0rXPO%2FV%2FS87%2BDQH1U%2F60rEEnfcu4l%2FwpVag2UbItljHq%2Bjn917L%2FQ4Qd%2FhhfcPA4%2BganAWDGPJxTpBSTBuX6jcviCeK4QKRSHHcUOV20Wv%2FNa71xWknhKgR0aQ5AM4spFZc4OXZfruYM%2BetJMJ7W2uNP2aQPLw8cchzUp8R%2FVpq4hyUwgcPexAY6pgGnvZhpNJd5DdCO3CzP711DzVrF2g20kFTksSBBbxe0WK5MZpw0SDKKdVDwt0xJltH0jlaTfAU1NPajFaGTzkYrueNjYV2YmBlNRmW1Qqlm3G32OxuVFkJT05M2ZnONkKJolpl%2FIiwq5vEPnfoSLdGIPr19fGVhkk%2Bx1fEgTYgYzOLLTIdIbXyxvZ3n%2BK14nhni3F%2BJUs4vOc99q4H5xKqTh3SWXwep&X-Amz-Signature=a240ff72dfb0e9f2dce62cd4b2ab172941a2fd55bab17d2391dcada9273b6716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MBLKOG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYdAcdsPUt3STXvgIrxnQ8Py3YeVpW9koY4q%2Bo6tUY2AiB0j5D6rCkWgqCjWSp%2BtY0hBhqlZTDV%2BjbrF6sAa2e2sSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLVE5MrMeUjogDZYkKtwDlTBw%2BD9iHEAhJEBid5oNJSPZo%2Bhk4EuDf4Tt5F2GfaSfaaS7iNBB1b3MoIMJ6i4sK5g%2F9WIbfXDOrProH6T7jW7mAIB3gP9IVD0Sbh8wa6UgXBc1J2nuQM1KoDG2RHvlika0Ct2wmVJmYq7%2BTDU7hWG7kOaKck%2BHv6f7Hs6SI6nE9Udm2XuoyQrSXs4ElBN2c%2BryxTyDKiW2eQ5JyheM6SJ6IJwmT6RJEN78%2FGmTURPGEAlk12AApQuk%2BizaY01w9GTBTYfyZ9xwPAQo9Ve17R%2F7wrMT8D4dp5unwCr%2BUfe5N7Bu9PvDVD7h0onXEybXcvapVXyPXIdVpFBymPmVz1Bcr0FGS%2Fs8KJ9zbrAi%2BKgeIVKr1mHD%2F2BJ4RTdSJYr76bTst5VXtr3dU8YaEdhlZWH20JuFaZJ1mc9APTG41NMoubjA9tPMO65v2S20fYRdx%2F9vZ9AlpNC0rXPO%2FV%2FS87%2BDQH1U%2F60rEEnfcu4l%2FwpVag2UbItljHq%2Bjn917L%2FQ4Qd%2FhhfcPA4%2BganAWDGPJxTpBSTBuX6jcviCeK4QKRSHHcUOV20Wv%2FNa71xWknhKgR0aQ5AM4spFZc4OXZfruYM%2BetJMJ7W2uNP2aQPLw8cchzUp8R%2FVpq4hyUwgcPexAY6pgGnvZhpNJd5DdCO3CzP711DzVrF2g20kFTksSBBbxe0WK5MZpw0SDKKdVDwt0xJltH0jlaTfAU1NPajFaGTzkYrueNjYV2YmBlNRmW1Qqlm3G32OxuVFkJT05M2ZnONkKJolpl%2FIiwq5vEPnfoSLdGIPr19fGVhkk%2Bx1fEgTYgYzOLLTIdIbXyxvZ3n%2BK14nhni3F%2BJUs4vOc99q4H5xKqTh3SWXwep&X-Amz-Signature=921f9c274b7d4f49227981311cdf924a8cef1ba8f2429b3f751cebbaedcc9d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XEB5QRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT3khV9qR7JRiRRsl885G51hQ6gx1nQsdiRJy4vQxF8wIhAM%2Bd6z4mv%2FUOgIfpSOZAzyj99OKscpNZFNzui%2BIAN1hHKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRo2zeND5GIQhv34Aq3AMt7NIHxafghEatVCH6DzJYLmx4wVXYpJDuB6TFORcP7Go6meEDqQkr%2BRCYLpdACzqlhSOKrc3YJmt15OhoChoSfnwveWMFLDNnD1%2FbXjGhF6bjaL7x0eCT2SE3i9Ew5TjYwEmzcCxPdeg2uJW5AR5xAf%2B129ey8mTNRuirWYHREl8uY8oluMcQ0m%2Fbc%2BveFYOsQGDswHdenMbkaDnnZkk4xluTXJBT1GgDutrLtcpxv97%2BlTPzr442baUU4H%2B7%2BfNES0MIXfrCzT%2FiHYU7d2kVpEx5K91A2Wum4Dhl5DrYaJNQoI8Knc8uJhVreewH7gPQDnmIhfkAL8TSzFgHrxqmlCd3u0Y9lQwCDCh4SsKN8OHGW9qVg0l099jov1ZoLWFlpII7NLR3oV0R4nSPh79%2B5lqudHt28x4BKy%2F%2BWvRFE2u%2BZPrx9WDw5q%2Bjx6fVwGpL%2BjzpO3qEE6TBL4TnTURBkffN5BMw8BUn0TXHamBSpLMTbI8fvi2AsLGCUkDMOAbxd6BGhXFNLCqEK9HWRVzzkfEP0IlI2LRkd6nUgQtFPicALRJ%2BjIVpMi8Ms64C6EMhd%2FvE2SFrjTSfVdTx05ZPYDiM9wjqPX5aAxgoz7RGAEg02psl22lJU8wagzCNwt7EBjqkAYaokZFbt6m5Kf3O%2B9STcajjM7iU2XMKMsmgwrh9R%2FFFZ%2FWzHstCpeb%2FlAdv4Uw3C3WkgcJ5uJU1JPWaiBeAGJrUuXaSVQV%2FA09TkvBOTlEEAetuNzdX7qoEGl7EyHFWsRT%2B0Jl3zIutR0dahYazpWyaq%2BQKtJhMnL7vM%2BYqI2PdjVWT3t0mVCYE9FO0PgZxnq9dBBpHGrdD7FWuxJqFztZdq9ey&X-Amz-Signature=c24c77661d088867e52aa871e2c595f5f7117ae1d1bde46632373101fcbfccaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQZ2TOH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2WGyx%2B8%2FRa3e55PMSUsgA2JyzESi4xUOPMKf128k72AIhALG91nmbX8BGMxK%2B0%2FfYPkDzYHNtWRszPaJHqplCiVQ%2BKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylgGtFd2zZFO8W%2BRwq3AOd37sliBksGAts62hQteguBiq92uB7HBRE%2FA%2Fg0gFclgLxvYoejG%2Fes3fK5iVZfoaJtuwFsDkilBYoWZ%2Bt%2BCfuK4DiwYTGNYzat9F8BGvpgJFsJCGx9JaOBw0LcLPkLOx%2FtTzqMgaT1L1xaiE%2Fp2u5f0cXK21ejOuA0%2BMmwBqw24rtzFWKlafQNnW22gtz9oudkTOit3kI%2BMMoOBweQY4Ds%2FMWzmTpKDNenIPrVTsk74%2BhlbG3rzC6QbPjDElOzcIKxN6oXER0pt9%2FjlJO4PvRWN8F8%2FZqpDMvxIcstq30%2FGT0uXLdd7M0QFgHX8CFLO9vV0h%2FYAr2TcWIcyWaxapaap1FdF6h1goxaxWhr7y8tT6%2BDGeHUOAs0KHVWp6HJriif04yjmfh0%2Fois%2FUX0tE1Pohyyh74sr6SMeZpjYLhnp4L2NThBp0In75oe7FmnNkZWmLjVApUFAue7aJKGOMvwl4NpzPmJJHYwX3RohaKevQT1J6qiUXG019K%2BU2U5PgWtIwan2VOmdh4pC%2BDZSPupU4BFx8V4KOZa5lNPArCwnd7mVKMMZfgkqzucJmlkjj6qyjXdztVTjaIBJovAq89RDepXt8gc6i9%2FbUOOVwXfycar05HkMww3NEd9zCZw97EBjqkAWJ3uTbF0OBjN5LXvfsHcT9JsLYM%2FbHkndogEq3%2BuMDeMFb4N%2Bpj352Uc1Me6NF96W7Ur11o1JV47MbK332HkcU7UNmt20F0wqmIiNE1vl1LN2URJ1gmplFyyoMl2iTYOwa0Ckix5zQv8WJ3748g1zzdx0fo9UL7h11Ssd7C3AG0etogTIrS5A%2B8G4Eo7lsot%2BDtHBZbFKuArUjren5%2BdKRhCbam&X-Amz-Signature=d3891a531737ab26fb6e21e408dd44a06ed76d4ac66e3c4c68e431fd6b373bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MBLKOG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYdAcdsPUt3STXvgIrxnQ8Py3YeVpW9koY4q%2Bo6tUY2AiB0j5D6rCkWgqCjWSp%2BtY0hBhqlZTDV%2BjbrF6sAa2e2sSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLVE5MrMeUjogDZYkKtwDlTBw%2BD9iHEAhJEBid5oNJSPZo%2Bhk4EuDf4Tt5F2GfaSfaaS7iNBB1b3MoIMJ6i4sK5g%2F9WIbfXDOrProH6T7jW7mAIB3gP9IVD0Sbh8wa6UgXBc1J2nuQM1KoDG2RHvlika0Ct2wmVJmYq7%2BTDU7hWG7kOaKck%2BHv6f7Hs6SI6nE9Udm2XuoyQrSXs4ElBN2c%2BryxTyDKiW2eQ5JyheM6SJ6IJwmT6RJEN78%2FGmTURPGEAlk12AApQuk%2BizaY01w9GTBTYfyZ9xwPAQo9Ve17R%2F7wrMT8D4dp5unwCr%2BUfe5N7Bu9PvDVD7h0onXEybXcvapVXyPXIdVpFBymPmVz1Bcr0FGS%2Fs8KJ9zbrAi%2BKgeIVKr1mHD%2F2BJ4RTdSJYr76bTst5VXtr3dU8YaEdhlZWH20JuFaZJ1mc9APTG41NMoubjA9tPMO65v2S20fYRdx%2F9vZ9AlpNC0rXPO%2FV%2FS87%2BDQH1U%2F60rEEnfcu4l%2FwpVag2UbItljHq%2Bjn917L%2FQ4Qd%2FhhfcPA4%2BganAWDGPJxTpBSTBuX6jcviCeK4QKRSHHcUOV20Wv%2FNa71xWknhKgR0aQ5AM4spFZc4OXZfruYM%2BetJMJ7W2uNP2aQPLw8cchzUp8R%2FVpq4hyUwgcPexAY6pgGnvZhpNJd5DdCO3CzP711DzVrF2g20kFTksSBBbxe0WK5MZpw0SDKKdVDwt0xJltH0jlaTfAU1NPajFaGTzkYrueNjYV2YmBlNRmW1Qqlm3G32OxuVFkJT05M2ZnONkKJolpl%2FIiwq5vEPnfoSLdGIPr19fGVhkk%2Bx1fEgTYgYzOLLTIdIbXyxvZ3n%2BK14nhni3F%2BJUs4vOc99q4H5xKqTh3SWXwep&X-Amz-Signature=cb54c41c8c5ff5bd3d2a713b60d799ccce8e212bbe6a39b52ccded2811037816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
