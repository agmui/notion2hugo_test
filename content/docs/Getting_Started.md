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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCQMHMY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRABMunD%2BG2gyxySPUQuHEF1JWPJzuYKtOxs6RbFqi%2FAIhAOz83V5rpzFQNl2FPQ%2FmiW4Sp%2Bs%2FN5ZBZfpjjN4d04alKv8DCB8QABoMNjM3NDIzMTgzODA1IgwKBn0AJ%2BbeQNEds80q3ANR0Awaj9Z92ggJ0gxJB6%2BfBbI5HJRwQszdaX7IusK281T7q28ft84lT1hrwPp0u%2Bg2%2BUNtGo7IwUZOM8O%2F0nLLHMRKL10KxLvh8dNUM0ONM6g9kocqadCmB1tI%2B2HUbvVx8p94ATSwGfvxxPwsAs3TlAmVKTu%2BTlIUlBmCQ%2BglSt%2FzkBxfyGzCu9%2BqFRCBjLtH7DZcoYWfLuuISaDk%2FxFGIBE9usHqEMG%2FuxsDL3UtNojp6FRTOYs7A5MPJ0u%2F3TG5l%2F4vGxijKgqqodO6VAhWuPdlVwrShR0GfdDExR6rlyv9BUVlUzzUIQFF7PSQR7P5AvTeZfp4Sau1AXAy4mvwIdDakjYH9NDdnwgLn37SSQZ0nqgm1j7WSjTQrftrl9ZY1kHBXHCPUHmg%2FRDMeEtydkKhSnIwJL5UV04QDph0oQB8hJMCKJnzKsHLxJxs73U1NfnH6ORdZHJEtZz%2BPF4eevXzC9%2Fry%2FP8%2Fmb8jYatgE5LngDnAGaSvKVQxzeptLPrnTt3MRGNA0mW6pZFf%2BnTZJLKx0YNTeDfUwdyi8X1GrFkgun3Nls7uBisDMJRtVb7vcOvK6kb%2BwB2LPIiMcplW5tJdQ794rwFaq5XRwaNtsQuMV1W7JQjH4XKmzD84te%2BBjqkATYNpOxBUGDH5pJO0A9md83cQheWCXNZYcB4X0%2BP%2FC1srbHDjnSgkJNc5P8FHEgkDCo0CWRnJJRx4vTmgLk7PBkOdaStRiC8bRADbN7bwTQCKa3gPfr6TB7kcFVJaD0KdOyLE7dCHaKDKeApI%2BDbaRM1ba%2Fz3%2BY5SqkEH07uV4SyBPNSYrM1hzXAAyt%2F%2FefUXYkDqFntsGzccFFs0npUvu3hi4fN&X-Amz-Signature=2a82dea9cea6bff568c8f5d9f23189c657c231a2d859ea054ae0ad909e3991b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCQMHMY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRABMunD%2BG2gyxySPUQuHEF1JWPJzuYKtOxs6RbFqi%2FAIhAOz83V5rpzFQNl2FPQ%2FmiW4Sp%2Bs%2FN5ZBZfpjjN4d04alKv8DCB8QABoMNjM3NDIzMTgzODA1IgwKBn0AJ%2BbeQNEds80q3ANR0Awaj9Z92ggJ0gxJB6%2BfBbI5HJRwQszdaX7IusK281T7q28ft84lT1hrwPp0u%2Bg2%2BUNtGo7IwUZOM8O%2F0nLLHMRKL10KxLvh8dNUM0ONM6g9kocqadCmB1tI%2B2HUbvVx8p94ATSwGfvxxPwsAs3TlAmVKTu%2BTlIUlBmCQ%2BglSt%2FzkBxfyGzCu9%2BqFRCBjLtH7DZcoYWfLuuISaDk%2FxFGIBE9usHqEMG%2FuxsDL3UtNojp6FRTOYs7A5MPJ0u%2F3TG5l%2F4vGxijKgqqodO6VAhWuPdlVwrShR0GfdDExR6rlyv9BUVlUzzUIQFF7PSQR7P5AvTeZfp4Sau1AXAy4mvwIdDakjYH9NDdnwgLn37SSQZ0nqgm1j7WSjTQrftrl9ZY1kHBXHCPUHmg%2FRDMeEtydkKhSnIwJL5UV04QDph0oQB8hJMCKJnzKsHLxJxs73U1NfnH6ORdZHJEtZz%2BPF4eevXzC9%2Fry%2FP8%2Fmb8jYatgE5LngDnAGaSvKVQxzeptLPrnTt3MRGNA0mW6pZFf%2BnTZJLKx0YNTeDfUwdyi8X1GrFkgun3Nls7uBisDMJRtVb7vcOvK6kb%2BwB2LPIiMcplW5tJdQ794rwFaq5XRwaNtsQuMV1W7JQjH4XKmzD84te%2BBjqkATYNpOxBUGDH5pJO0A9md83cQheWCXNZYcB4X0%2BP%2FC1srbHDjnSgkJNc5P8FHEgkDCo0CWRnJJRx4vTmgLk7PBkOdaStRiC8bRADbN7bwTQCKa3gPfr6TB7kcFVJaD0KdOyLE7dCHaKDKeApI%2BDbaRM1ba%2Fz3%2BY5SqkEH07uV4SyBPNSYrM1hzXAAyt%2F%2FefUXYkDqFntsGzccFFs0npUvu3hi4fN&X-Amz-Signature=5896840772246fcb17b15477df39b18578b0a04b0fba8bc80c2b8aa01093532e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBU35S2C%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyFtDTVlA9w8Jm5O9VI7NsgSswkBg%2FSfhk6z0iIvq61AiAb6wD8xCW2a9LD61Favtydu2pZ6mFxvA%2FmTPt%2F1h9L%2FSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM7x%2BwS3HKq9JVM0cqKtwDYlNCVSHTvDCdobvKn9ip%2FrCOyRE5L0yDnAIy6n7Ggzl4X2ZufBTYJvbuueYDuGP7dQbANKH9xKIx4lg9w8xqVJCZeXtwbHHeZ3TzQeaCcvBQopl7B%2BWbw0nn2um8RCpJjFeV1o%2BRMlcHWVxBQZrL62KklzvMlwtMTWD7boH5up5AM90huUn%2FJc6M6mno9cR7MeRAvvKiUghEdzAxPL1cgk%2BCwpfUehCzVhCvjRMD%2BYbXrou%2BbnbANLV6GFMh1iVzG5uVZGVZ4AJZBiOv7EqQTeTT9U7jp9QZhjWGaWCeY18uMSPV%2FnamLfnCW3PQo5XevlFcSZeeBmUB3xbYkoz5LZ0eF%2BwydViVHbEilvdiLJl2HGWYCVv4pgCmUHvndubObK8xLq1DCjdhH3LR4uY9KYoKdG6w3v%2BE6e3CHEtNJstaDssJKQRN2II7wYt1PWTUAG9CBCRA3OzwY5IFeSJMAjr9PSEN6xp0WfqGXO44pLbvnMZLTP%2FTaJ6dSC6T5G0eXpifnM%2BU2B4pCRRP32XkNr8CtjJ0%2B8Cz8z3vcYjwpFuoOgeWW4ucERm5y%2FroY4z0PLu5sD5UkIs5zwmmEANJOkJVSpP9QafxY3vHzq123%2BqS0GYD2lWCYAmX1H8wvOPXvgY6pgGmhECk4vSqrqkA8SdJO0h2JBG4B9OOKvBl0aweqsaZhUH9SnkyKoMdHc%2BWMNe%2B55acOxaFa5TG4fNXQ3YBB1%2FBhzMBbD2IyNeUg9XcjQ1CiFu%2FqhOpdcvrX09frKkr7lmOJPM0L3YzqOhwU4Uz2sQdUiimkiMe6EWbxG3ecs4yRhSYkwnuQfnkdJJ4icz1Dz0vvVPmWisJsTCkXgStYghYlJLW%2FNoJ&X-Amz-Signature=7aece68ed568ea554062b635e47c42d7bb370d961a2d3e318d71ce20fcf580f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5HUIQL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8LRgS4MZH77ritLto1BC8I5f7KQAKEUVgfda0P1aDJAIhAKrvn3yFHcjkeStPGWFRoHUWi%2FzMRfOoRBas83jkJlzoKv8DCB8QABoMNjM3NDIzMTgzODA1IgwZdjrDqjX7KNMmCycq3ANm2zHXEQBy%2BXoA4jeiQsBjbwe0Ism%2Bk68H4SQneT7%2BA1qF3DFb8luF2Z%2FnnAJ%2Fgo8fXQl8TfqiR%2FbuB4b2%2BsbHRes81LmN46eat3WW0iPPCdx%2BqOXIRgMqxo2qCKnlncX1Owfdco0LU4ks7tWOrVHPgvrGw46rtYCYZBeUlY2dpgxUjPM4BWMBjYTf5vJD0z%2B2qcgxN9hwLOIWH%2FBslZGtGu2zuM8GejZDRszII5PEFBf%2BGLmVjA4GGjO5jMzbv6AFroVt102Qlg9loS42vzrYaEXB9H2RYen4wLEVYLbLO3aJWiF1D%2BTx7Lr7oPughlaGHQSf87NMM6sy%2FayJs7FjAULoahjFaaOMpvdjQwUdyS3lo6zZOBxptwuXHo0TcHm2ExSK4p8oUiqQp0abglKeMEcGCmygq42Ztb1F5%2FdJdGtMRhryssXSEaX2YwX1%2B1lHI1xWWJxl%2FwoQ19rltxheMPlmj2RAgW%2BT3ipDoxRqdW5zAqcJ%2F%2F7KM9XPoW3J9308tp%2BZTP4KEdgR3956ifLqp2mSw2OkVsHGFAp6mL8sG3bWHT%2FkPnpbos%2FmpG5wrfPaYdL3xzGYDEICN0JjLwxheiUth402%2FpecDfGgXnjtcNqEqoFLV0oFzcbxtTDU4te%2BBjqkAQDICTuKzUJ0ac296pNteMdxP3B49rGTBz%2FEagITpcpOC%2FqkMgdmDAtk70V2qIpaTtJJGPwGuCK6gyH9JD7MbMp86sgUJc%2F1ylTt3HE3SVh0K29U%2FW14RFPEk9UiCb%2F3HXwtBxVkjLCnEUL%2Bvpih2VWS5f87rx%2FdHkQMb6f7Yu03Qf8kNm91YpkR9PDzKVBC9ZZO7i3C%2FyIzWJJmN%2BYHJWVZIsSk&X-Amz-Signature=913e5c344540bb362dcc63a6e1de73d5b63ce2f5c27225e021a762ec278d6eee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCQMHMY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRABMunD%2BG2gyxySPUQuHEF1JWPJzuYKtOxs6RbFqi%2FAIhAOz83V5rpzFQNl2FPQ%2FmiW4Sp%2Bs%2FN5ZBZfpjjN4d04alKv8DCB8QABoMNjM3NDIzMTgzODA1IgwKBn0AJ%2BbeQNEds80q3ANR0Awaj9Z92ggJ0gxJB6%2BfBbI5HJRwQszdaX7IusK281T7q28ft84lT1hrwPp0u%2Bg2%2BUNtGo7IwUZOM8O%2F0nLLHMRKL10KxLvh8dNUM0ONM6g9kocqadCmB1tI%2B2HUbvVx8p94ATSwGfvxxPwsAs3TlAmVKTu%2BTlIUlBmCQ%2BglSt%2FzkBxfyGzCu9%2BqFRCBjLtH7DZcoYWfLuuISaDk%2FxFGIBE9usHqEMG%2FuxsDL3UtNojp6FRTOYs7A5MPJ0u%2F3TG5l%2F4vGxijKgqqodO6VAhWuPdlVwrShR0GfdDExR6rlyv9BUVlUzzUIQFF7PSQR7P5AvTeZfp4Sau1AXAy4mvwIdDakjYH9NDdnwgLn37SSQZ0nqgm1j7WSjTQrftrl9ZY1kHBXHCPUHmg%2FRDMeEtydkKhSnIwJL5UV04QDph0oQB8hJMCKJnzKsHLxJxs73U1NfnH6ORdZHJEtZz%2BPF4eevXzC9%2Fry%2FP8%2Fmb8jYatgE5LngDnAGaSvKVQxzeptLPrnTt3MRGNA0mW6pZFf%2BnTZJLKx0YNTeDfUwdyi8X1GrFkgun3Nls7uBisDMJRtVb7vcOvK6kb%2BwB2LPIiMcplW5tJdQ794rwFaq5XRwaNtsQuMV1W7JQjH4XKmzD84te%2BBjqkATYNpOxBUGDH5pJO0A9md83cQheWCXNZYcB4X0%2BP%2FC1srbHDjnSgkJNc5P8FHEgkDCo0CWRnJJRx4vTmgLk7PBkOdaStRiC8bRADbN7bwTQCKa3gPfr6TB7kcFVJaD0KdOyLE7dCHaKDKeApI%2BDbaRM1ba%2Fz3%2BY5SqkEH07uV4SyBPNSYrM1hzXAAyt%2F%2FefUXYkDqFntsGzccFFs0npUvu3hi4fN&X-Amz-Signature=ec10ebc4b55b0ec3afb521303057409a582a419c04a326aab1a403ec7e261147&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
