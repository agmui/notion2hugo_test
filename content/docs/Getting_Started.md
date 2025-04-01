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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXULLHI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC3SiaITOlFnGU9dfGmo7aUTtSAOXlNKRnQ3425oLjhsAiAfrfbtHmemX3lUKj7F5U%2FbULbT20Kei4KWmtlLi9M9IyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2J5zWtqLYJAWl4gRKtwDplkIurfZgFhZWVERQvJ4XuARkH3HkG%2Bl3vbE3%2FmVsVklIcuYU%2BKlrPqzzKe3cbu4iWawc6%2FTKnwkw9j%2BvAmSMPtyyIaR%2FFKw9bUF2ABUHMMmH3m8xPrx6gimUP%2BMamqX2oUzvX0akXzTnJNg2cqkLoZT%2FKES9UFnFhUi4ZxMGGtZzegEJAaXWFMWiNOnmL8P0xUp%2BM5ZyHytmvIbb4u1oftMy6pOxfY4MxcmtHilpwY3BZpGRif9CXFEg19sDsl8xOv29rGzx3Tw2hW7NkMv5cU2xF0gicON9FmuOE0UJ739N%2Bi%2Fftlk6JdXzG6Tsd3Paqq9ovjVIOnXS4Uu4w5QfgeFl5d%2BdyBPWFgbDgRC4fyi3XQS6mPKxSW1Jm7Hd2mfhRbGypc0UdtPwokMRAQ7dIHVpsFDLWeJ5iMsNf2teHdztSsosVy0TBt%2BQWcOAh7BQ5CNpaCSAUC9XPqFTIYycVURCcjiZtycehSV%2FHDqu88Eq9OtyLJCxf0%2BTkUUtzHtSvW%2BZ4UaaU5Gaq7smpReOkigJ32t9kKLqFTqRTJP35mjlnDP65X1PkQ1S0qmPy75b8mB5R4nlCE3Kcfs6ZiLnVRxEcEke6eYDb%2FWxNuN%2FHfv6WPaUsU3jWSrJKYw%2BLuwvwY6pgEFtOqcwPaoc%2FC7qkyndPunODFByDcvRv6sS7Ibw47eK9Nd7w3aWnsxT7Ojl4p2M%2BaOq5MxVl0xgdb9JdLd1YT9slsJXQqtJAQ6%2B4Be0TchbBiGFbEtjJ%2F%2BFlwHaRHK7ftJI%2BxlHO4B0x3UCF6AzoDXYwfZo5qI2vnLrhk%2BLV5w4aY6uA9yCl7jBgbP7rG68CjhzR02bpHs79Ts14KqiPwZXbXgAX4j&X-Amz-Signature=958196b71309156a39ba38c54cbbf2a56fad592a1a88d4b423d2ddb473214be4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXULLHI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC3SiaITOlFnGU9dfGmo7aUTtSAOXlNKRnQ3425oLjhsAiAfrfbtHmemX3lUKj7F5U%2FbULbT20Kei4KWmtlLi9M9IyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2J5zWtqLYJAWl4gRKtwDplkIurfZgFhZWVERQvJ4XuARkH3HkG%2Bl3vbE3%2FmVsVklIcuYU%2BKlrPqzzKe3cbu4iWawc6%2FTKnwkw9j%2BvAmSMPtyyIaR%2FFKw9bUF2ABUHMMmH3m8xPrx6gimUP%2BMamqX2oUzvX0akXzTnJNg2cqkLoZT%2FKES9UFnFhUi4ZxMGGtZzegEJAaXWFMWiNOnmL8P0xUp%2BM5ZyHytmvIbb4u1oftMy6pOxfY4MxcmtHilpwY3BZpGRif9CXFEg19sDsl8xOv29rGzx3Tw2hW7NkMv5cU2xF0gicON9FmuOE0UJ739N%2Bi%2Fftlk6JdXzG6Tsd3Paqq9ovjVIOnXS4Uu4w5QfgeFl5d%2BdyBPWFgbDgRC4fyi3XQS6mPKxSW1Jm7Hd2mfhRbGypc0UdtPwokMRAQ7dIHVpsFDLWeJ5iMsNf2teHdztSsosVy0TBt%2BQWcOAh7BQ5CNpaCSAUC9XPqFTIYycVURCcjiZtycehSV%2FHDqu88Eq9OtyLJCxf0%2BTkUUtzHtSvW%2BZ4UaaU5Gaq7smpReOkigJ32t9kKLqFTqRTJP35mjlnDP65X1PkQ1S0qmPy75b8mB5R4nlCE3Kcfs6ZiLnVRxEcEke6eYDb%2FWxNuN%2FHfv6WPaUsU3jWSrJKYw%2BLuwvwY6pgEFtOqcwPaoc%2FC7qkyndPunODFByDcvRv6sS7Ibw47eK9Nd7w3aWnsxT7Ojl4p2M%2BaOq5MxVl0xgdb9JdLd1YT9slsJXQqtJAQ6%2B4Be0TchbBiGFbEtjJ%2F%2BFlwHaRHK7ftJI%2BxlHO4B0x3UCF6AzoDXYwfZo5qI2vnLrhk%2BLV5w4aY6uA9yCl7jBgbP7rG68CjhzR02bpHs79Ts14KqiPwZXbXgAX4j&X-Amz-Signature=9708a39cc7f43b15645c163110c3afcfeda117091d50007643b988625c5ed303&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTTTDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEfvNNgldqkym%2B2VfA3SHzM6iDeP1YHLnh1bbmnLyxEaAiBn4yxmpcyxvTfSBfKpp9BnlP7ZNNQbdbQutu%2FIYi84QiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsXl2rlJ%2BCypfZEb7KtwDULsCtt1rRIL%2ByK5wzzSAFccmfd5TSkvB7fHIh%2FweeTx2NPZdI35VTDREvWQ%2BwkjexR0JNkIKhY3YD8zNJYQzTtYTFe2Wv0eUEO1KqH%2FktXQzRQvqiIeDNxIV9Wi3YtKrxatCK%2BIP1%2BPBP8ae2vXIvWEQp7cC9UqIGIVEwA%2FIUqSl%2FQLIjDuFZfWrJ4wWFBg4qsFKj%2BzTo%2FZyZ7bzvi5UTVv%2BMErG9lGnFODH6bdp4l%2BhyUoc%2B3hNjnw3N2coZzXXBNDiWVgzyOxTLEYces9jmpekPb1ojJqjcRKNzARTKzT%2BcwrSj%2BFh8hfp0OvIWzWpr2vZGmmhLmVZPIsqWo4BY%2F0yqQmXoZXunNx7KLF2LaLyVGm4FOF1LflYQWsgSaKEN5a4zcd0GOZb8KZ39%2FnL8%2FfqRSlUAL8imY77Co8Hy%2FiwhOtgicXA%2F9R%2BUh24%2F3IjZFqJaIK5n0qU%2Fpv%2BwHxCCtJ3VMpF7hnTIVP%2FlkLG3ecjXmctHi3YCIxO7mO5MJvCXu6lvJPlFENmLVs9%2BbAoHNdGvDoz2rGSAV65x8SHXAO9V4ERu2kbmapm9ZaYk%2Fh06kkfbj%2B7RtMRUWbBDG9ZeCg7ufGb0mWB6ICg%2B3brNhmqyjjVj3f0kE0rW7IwrNewvwY6pgGgEulw04vThoJx1zEayC3lMrlPjxhCWYFmzMZDFN21zpEUSIFz2ebQiZFhcbjlow8cWyqH2j2qunv0W6AgsvqdqUM%2Fa36pm5HK4uF4yVla0t%2FnGDj6XogtFzKeqoS6dpWjYjTBXw5Rp%2B7W9QUoad8w761I%2FaHZpRIW%2FwACaaP4HqELrkE5jJZnrKvIreF%2FvU3F2gFpbMoNnZK9V%2B9hXNe0Mdo55Uet&X-Amz-Signature=f5f326f5e89283a9e8a158a2fc934e7eded73c5ebd707983f1d8f3e9f896f391&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZKTYO2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICP57nHQLRQ9L8YU4tQLFYwf3DBgK7pbnf8w8rlPAZPTAiAdyAo%2FWu%2Bez0ATSg9OCNgP37zK%2FTcOVhmBS3yVlpAiViqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnOQkq5a3oRi%2B04SeKtwDxLIP2UvH%2FkvKGcQdy3Mddbyylf12AZmQ4BdghWvnTHUyh%2Fu6aLaxL9%2Bzzv%2B6HDP2GaqEOstkP7r9jz9FZHOe%2BRPIKKtdm72yxKqKmxJwG3P40uTAOIiqwWFNbmJmLbqRVoeWmHCbt%2FCYLOB%2FUEabjueibZmMhEDh%2FWlnSNu3CEEgX%2FnyiobG963Jq03zRgnPnu6eIPPpaMIpGdhq7qffgF9NG8p64Evgnx%2FnuCoWcjZZhEDId9OUfj3xjRg%2BRYlaQUxmJNwfMlE0atNGzgdQhvo4Zu5FRMwO%2FH63%2BRxYbcBk6eFwrj5EYnbB6Y%2FpfTwZ3MADeWaVTjQbbtt%2Bm%2FoP49QUbzWEl6Ia6tqWXQR7bW%2B95WG5VTfImvvkM8Z64M%2BicoBlwmSVmxnPNqY%2BnSfSrx6U9miOgOaA9iE6VuCjekOXMejbTDFKlna0J7g3JkX0savBfgX61a%2FV%2FuMVS86eBJjStm23x4QERvHpOFpEz%2BeYuAaAkb5Qjk51%2FiXJyCrmKkTh3Vb7Dty6H4uQEqmg9n3wq2%2FCziLstAFHtSInMvhW8%2F%2BnNWg8TnsS0K1sN2z5CCxziM%2FGv1A9sROqHFuT7npg%2BT3PTduYoJGWH4W5mz2GQEu3noIgAypqwRkw%2FtawvwY6pgHF8l5mqAQbUAGmt9SXMyZurfv0O%2BRLEK1sjwHZbk2oDfR4XRcPXnTCfUIk2TosLt%2BRMirAaKcrQV0%2FKTr5VmPun0jzWErBK1htLtBEUAwp9m%2FOJNheHTRVWR5d49%2BUU4a5B16cG7v1SG2R%2FaCaQeln%2BLg9QECPEV8qeLxjnjzGvIrtCkkh7uqGrpDHB4lthq%2FVtxUYKX2wmKiCs9%2BurXPAQoofmsB3&X-Amz-Signature=f59938088bfb55b16c355d47a8329bf726570df9f16fff1fa5229feb1191a308&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXULLHI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC3SiaITOlFnGU9dfGmo7aUTtSAOXlNKRnQ3425oLjhsAiAfrfbtHmemX3lUKj7F5U%2FbULbT20Kei4KWmtlLi9M9IyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2J5zWtqLYJAWl4gRKtwDplkIurfZgFhZWVERQvJ4XuARkH3HkG%2Bl3vbE3%2FmVsVklIcuYU%2BKlrPqzzKe3cbu4iWawc6%2FTKnwkw9j%2BvAmSMPtyyIaR%2FFKw9bUF2ABUHMMmH3m8xPrx6gimUP%2BMamqX2oUzvX0akXzTnJNg2cqkLoZT%2FKES9UFnFhUi4ZxMGGtZzegEJAaXWFMWiNOnmL8P0xUp%2BM5ZyHytmvIbb4u1oftMy6pOxfY4MxcmtHilpwY3BZpGRif9CXFEg19sDsl8xOv29rGzx3Tw2hW7NkMv5cU2xF0gicON9FmuOE0UJ739N%2Bi%2Fftlk6JdXzG6Tsd3Paqq9ovjVIOnXS4Uu4w5QfgeFl5d%2BdyBPWFgbDgRC4fyi3XQS6mPKxSW1Jm7Hd2mfhRbGypc0UdtPwokMRAQ7dIHVpsFDLWeJ5iMsNf2teHdztSsosVy0TBt%2BQWcOAh7BQ5CNpaCSAUC9XPqFTIYycVURCcjiZtycehSV%2FHDqu88Eq9OtyLJCxf0%2BTkUUtzHtSvW%2BZ4UaaU5Gaq7smpReOkigJ32t9kKLqFTqRTJP35mjlnDP65X1PkQ1S0qmPy75b8mB5R4nlCE3Kcfs6ZiLnVRxEcEke6eYDb%2FWxNuN%2FHfv6WPaUsU3jWSrJKYw%2BLuwvwY6pgEFtOqcwPaoc%2FC7qkyndPunODFByDcvRv6sS7Ibw47eK9Nd7w3aWnsxT7Ojl4p2M%2BaOq5MxVl0xgdb9JdLd1YT9slsJXQqtJAQ6%2B4Be0TchbBiGFbEtjJ%2F%2BFlwHaRHK7ftJI%2BxlHO4B0x3UCF6AzoDXYwfZo5qI2vnLrhk%2BLV5w4aY6uA9yCl7jBgbP7rG68CjhzR02bpHs79Ts14KqiPwZXbXgAX4j&X-Amz-Signature=c226e09716345b70a1b5285830d6c064c915bc1bead947ef11c9bcb4b2bf7c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
