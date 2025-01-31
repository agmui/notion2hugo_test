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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIO36NDJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTpanTSLMAnu1mLXv0N4pq5V7rr9j658%2FQokYibi6aqAiAQzTbj7H%2BzDgRZIcnicquROZ9HvCeHuvFH36NT6xOSkyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2B3jUoR%2BQDJ%2F%2BSS6KtwD9fElyE3gSf7QFo5WwgIMdpPNaADfG57Jp3eLTdcPK07epMMDfgRpdcZw2BA7V0APkGY%2BVl8EJbLWHqoUdZ6ITkyY6IUrbCJ3Ud0NyATDlI4d75feFSCud9YKEawiOfqyrdnsHaLnV0YuzvCLRSrH0%2B0nhRTr2hR%2Bq33tYWREOQXw0qpMvwfSPqaeeW57D716xzkXe8Ep%2FxV26sFftgXx6ZWgh%2FAkq0u%2FWBYJOpmofGmig1BER6o8nDK0crb6Ojvy2vZ7CTuVx5Umid75k3tSXjK%2BWTyn9fSTFecOraiBARZlZs3aiGysMVGlC%2BSx0%2FMQt8lIIs2QAmqC9P8qcIp7qpjjT0qpC8pWchQmvAW%2Bnu2hXLTDK7sYvbWlq6oTq%2FYkgrx6DihUNDQq00k6gBIt8B6UxArI7mdYeGKybCgTnSMZVaY6ge2rzW9cuIk2aj2UX2eI3oqsyYdD7XLMlSA%2BnnwrKnmDDhBpzRnM0beqaViRl9I83krTTZV3k%2BGbnp6tw6L7LhuETaSekPYzJWOW9yf7HUNc%2Fup7QrlbMG78iKmr9B63bxOIsvE9t1lpyHUrn4W3sApEWbDAsj4sj6YJE7Jq0cjQfaB1UgIbaw7SfCwkMs1Os5%2FQzUyTaOYw2q3zvAY6pgFMPof15KddLgFwYjXMJmNWdWKH4y8sopazBDjpilbqYojVq7sHzTzDeTDvhO9EojG%2BcBhQGh64OM8t7Z9FwCURoOXCgSDmDnvRVZ24CQfkz761q%2By78V7zXthCk7KiG0CYFBtFvzqkxALIBX8wHwv8qxmVqXP%2Fr7MGKoOoWSXiZExMa1t0YjIPmgrmJMtiZ5JMA%2Bp2l03UMwDcF2jluEtX%2FB1vgrDs&X-Amz-Signature=39a1fbe62a11d45e07503d528169bd1156a85f3399b2107f4eaed6efcde1c10f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIO36NDJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTpanTSLMAnu1mLXv0N4pq5V7rr9j658%2FQokYibi6aqAiAQzTbj7H%2BzDgRZIcnicquROZ9HvCeHuvFH36NT6xOSkyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2B3jUoR%2BQDJ%2F%2BSS6KtwD9fElyE3gSf7QFo5WwgIMdpPNaADfG57Jp3eLTdcPK07epMMDfgRpdcZw2BA7V0APkGY%2BVl8EJbLWHqoUdZ6ITkyY6IUrbCJ3Ud0NyATDlI4d75feFSCud9YKEawiOfqyrdnsHaLnV0YuzvCLRSrH0%2B0nhRTr2hR%2Bq33tYWREOQXw0qpMvwfSPqaeeW57D716xzkXe8Ep%2FxV26sFftgXx6ZWgh%2FAkq0u%2FWBYJOpmofGmig1BER6o8nDK0crb6Ojvy2vZ7CTuVx5Umid75k3tSXjK%2BWTyn9fSTFecOraiBARZlZs3aiGysMVGlC%2BSx0%2FMQt8lIIs2QAmqC9P8qcIp7qpjjT0qpC8pWchQmvAW%2Bnu2hXLTDK7sYvbWlq6oTq%2FYkgrx6DihUNDQq00k6gBIt8B6UxArI7mdYeGKybCgTnSMZVaY6ge2rzW9cuIk2aj2UX2eI3oqsyYdD7XLMlSA%2BnnwrKnmDDhBpzRnM0beqaViRl9I83krTTZV3k%2BGbnp6tw6L7LhuETaSekPYzJWOW9yf7HUNc%2Fup7QrlbMG78iKmr9B63bxOIsvE9t1lpyHUrn4W3sApEWbDAsj4sj6YJE7Jq0cjQfaB1UgIbaw7SfCwkMs1Os5%2FQzUyTaOYw2q3zvAY6pgFMPof15KddLgFwYjXMJmNWdWKH4y8sopazBDjpilbqYojVq7sHzTzDeTDvhO9EojG%2BcBhQGh64OM8t7Z9FwCURoOXCgSDmDnvRVZ24CQfkz761q%2By78V7zXthCk7KiG0CYFBtFvzqkxALIBX8wHwv8qxmVqXP%2Fr7MGKoOoWSXiZExMa1t0YjIPmgrmJMtiZ5JMA%2Bp2l03UMwDcF2jluEtX%2FB1vgrDs&X-Amz-Signature=94ab4e04655c21c4457b330a4a59910eeeac02c48879b6ef8fea62d643461a70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDF6O6J7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtQP3uu4%2FvpzVid2oaQPuV6NQHN4p6Q7K98KKJjz85DAiBr0AgtLmIVCa9Y8oUPE%2F2sd66avc5MOtnoZ5YLBLF%2FXSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRxamcWvxqOC2WdvWKtwDVldLS2iOYJO8CzCiJb4Iz3Ss7ZPZQTEA2Wym5kukBzDqZgDbi94FSHBD4vEi%2FoDz9f1fL9LDUjmg7FGl%2BI3HDg7I5i%2FTlWUhaKEb3l%2F9onG%2BIIHOyIWhSnGPfdfYaUl6FjL0YPFkXGJUQv5TagwN6jKIFqlm%2BCrpduBJop%2B25zWAV6TwFEWar4THDo2WIsyzv6hs7hRG5Y8GSMXQzCOU1FBGLb5U5J7f4w8vV7ozsn%2FJPwBMjJ7xUaiq7D0tNOWDypZkAqmsawooS7YYF25chfzRcDNpibtgW82xvIsFgpuZ0AeZ4NAIiEGy3FdB4WNN1aX7v7TJAMZSLl4qlEa00Ywt7UXHw4QxjXhjXAG26nLeG4ki%2BFp6B7%2BxC3EZb39iiQj4CsGbTxBeAcGNVFu6tOFf8KV2jq4q7g3g62UkDUSirz%2BPVp3QY7%2BkLGAqVSpwfcE5en%2Fqk3KfBFz7QsDtY5VjT%2BzZEkO7U%2FPglnrfhqaISNTsESzmIoAn%2BIxCr4vInPEKLR4z1hT2pj24MscCk2EFCaOG4PMSXcgjSI9b8VvRssc2EKHI2SIO5GUW1nI%2Fioma44XtorVN%2BE5f501x1UMO5GgJg9cGKMZZP1Wosr0Cb3liGykgi32t1y4w0a3zvAY6pgH%2FlcQHkOczpFYcGlE2qvEtKdB9G1lfYA%2FF121LcQ17rCCXZo46UiSIF3870TAgH%2FepL4qzzJ3O3S9fDCsDVRXbdW9aDE8BOtZb%2BxDxAM2SCRVRu7V04P0nimEqUpEj1MarrAUlZ3HmcwxwxzWDRITFafskF3f1q7EaRv6KaIF7t%2F6RXv2Og2z5W%2Bn6kQN57p8lVp4clQZsyCo0gZO5V3491qf7bjjz&X-Amz-Signature=a517a0c96d96c62916fb6add0433d0aba047de319a3fdbe336214236bee5a685&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJHOANV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KO74qCj0RLIzF8kxdK5gF8N8CspzoK1iGVC6uZ0EhAIhAJ9LjddkR7S1tKZzI92GiigWlNpjcqzQtxApERsCTAfYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeguiDXyiMMZji61Yq3AMjQahmEXcDLWGtJTRvlllbGWdwaxhwEyvdPrlyg4pLGoUbqPD5arE0wLpfMQ6NS1zB%2BbrxEPZG3pSP%2BJP8Kl36NN7djkSgkHgjr0vHIoWo%2FNDnENBzkWRPahIuYoVYrECYvpoatMzfqINDnDAx5HEcBZ3aHupP28xWzVXWRth0M2GRErd7Nj1tVHJy2fbZvAog8WGJzapC5JBv5EhnDl9LggyNFZsjn%2BKd3RAYKDVeQCDqqSgvToLx4jEg%2B%2FeHWMjEmjv6Mh%2FQSciyjyIX5EViRjs7qOjTT7XsGR77uTQwHNwKZ5rq5I0eZ6TRpIzluqy7p4Gfr%2FZFiB%2B4O3l0iT5vKlSrHzsVe1GJsIrS%2BdFX%2BPow8l16RaMqgmrGigyDwA53E%2B7HseAT0j1EWW%2BYPlcjJvcY4uNZ4GG%2BSbm1rRsy2kISZLg2C2wuzBVJ6czMeKf6uY%2FSxBgcGEBpZ4LgIaxaQs%2BMUURjPm1wbqEZ%2FZ7J7iIJ28rbaYlIauES8YMXr4bGjzgaZ6gmMCGXHDPRGcXpSKjcqjqiZiUoEt4D1%2FJ3mcXdsq5puMNHf%2BRZVaWHBX6J8unlebDY1UhDau3XLQK%2Fri5g%2BkvT8v%2BD3fDZZ7X2E4EF1C3nakrXw3qPEDCnr%2FO8BjqkAZTvhXVdz9MJY83QeeuW79JNDoVofRC9xNMAdzbUM6HjQIDiIAj8gdUVdfR66N8vE%2B3BKZ7BfopWuTOPEAldDYugCIusm6W5ext3V3NOjqWeA1R3p4B27gXGjlkZyKItj%2F5z15YUKrknRKs%2BnxvZcJKWvjVc7mGqu7IwmK71hLeOcKoXIK0Af8b7RXSuDbUEBzNQWNJPwEI4RxUtpq0OC6eqTXdF&X-Amz-Signature=9629c970aeda654bd298d1e99f41ae41f04b204b957bdeafc43b0153adf5394b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIO36NDJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTpanTSLMAnu1mLXv0N4pq5V7rr9j658%2FQokYibi6aqAiAQzTbj7H%2BzDgRZIcnicquROZ9HvCeHuvFH36NT6xOSkyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2B3jUoR%2BQDJ%2F%2BSS6KtwD9fElyE3gSf7QFo5WwgIMdpPNaADfG57Jp3eLTdcPK07epMMDfgRpdcZw2BA7V0APkGY%2BVl8EJbLWHqoUdZ6ITkyY6IUrbCJ3Ud0NyATDlI4d75feFSCud9YKEawiOfqyrdnsHaLnV0YuzvCLRSrH0%2B0nhRTr2hR%2Bq33tYWREOQXw0qpMvwfSPqaeeW57D716xzkXe8Ep%2FxV26sFftgXx6ZWgh%2FAkq0u%2FWBYJOpmofGmig1BER6o8nDK0crb6Ojvy2vZ7CTuVx5Umid75k3tSXjK%2BWTyn9fSTFecOraiBARZlZs3aiGysMVGlC%2BSx0%2FMQt8lIIs2QAmqC9P8qcIp7qpjjT0qpC8pWchQmvAW%2Bnu2hXLTDK7sYvbWlq6oTq%2FYkgrx6DihUNDQq00k6gBIt8B6UxArI7mdYeGKybCgTnSMZVaY6ge2rzW9cuIk2aj2UX2eI3oqsyYdD7XLMlSA%2BnnwrKnmDDhBpzRnM0beqaViRl9I83krTTZV3k%2BGbnp6tw6L7LhuETaSekPYzJWOW9yf7HUNc%2Fup7QrlbMG78iKmr9B63bxOIsvE9t1lpyHUrn4W3sApEWbDAsj4sj6YJE7Jq0cjQfaB1UgIbaw7SfCwkMs1Os5%2FQzUyTaOYw2q3zvAY6pgFMPof15KddLgFwYjXMJmNWdWKH4y8sopazBDjpilbqYojVq7sHzTzDeTDvhO9EojG%2BcBhQGh64OM8t7Z9FwCURoOXCgSDmDnvRVZ24CQfkz761q%2By78V7zXthCk7KiG0CYFBtFvzqkxALIBX8wHwv8qxmVqXP%2Fr7MGKoOoWSXiZExMa1t0YjIPmgrmJMtiZ5JMA%2Bp2l03UMwDcF2jluEtX%2FB1vgrDs&X-Amz-Signature=696941a32b84372d8f7d74cd75665ffd59dde3de6097910d6226ebe2182d7497&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
