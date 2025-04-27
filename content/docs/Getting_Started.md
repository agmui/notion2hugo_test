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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MVJHHE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgD5zq78igSIKfinXdz8luvOdTaM%2Bs80fXHNnkF5dZ0gIhAOpwostsWKtWi%2FqZf33uxuQCSWWfNjjGDCbtDZYWpKfeKv8DCFYQABoMNjM3NDIzMTgzODA1IgyECa9Er5SXx12nbS0q3AOgv%2Fyt4vDGD3R7m8nptVugnNVkVouRC3ApDVMLn2sF4vc%2BSvUtxN3kzZoYvBcZYr26khhUWJMS86WATfrNHaXP2n2Ydoa%2Bbl7CoWe6BVYXDgk6GwZ9kwvszeJkjVWpiKzMVSsxOgtZaqJMnPOZAovzEAX0guNp%2F57YXBWre%2BHTruG3Ho%2F7UoCF6DEJfs4tU1RCfpPiiWYgPRcWlXZMh6%2FtTjZQwViYxiseQiK3LgvoLZpMd2z8NvHllfj%2FfXUUY4ElNIifevYFZiLOa18QNQf6LNGqfhZiYh7hB%2BC1PfcQ0cFaKdizPZd5IXqZ77nrg0N7hEAUHWu807NukV4Dvf4PzRAOL9SRkT03%2BFsIKMSHjNyXYP0uDmXedv4BmR238ODAkonxPNhLPMQMJe3iOt1KPCImvDdyU7tXZ%2BBJ5U%2FX8%2FtAn0tsFCZMTqLCE09h7TTL5NRHblL%2B6RvJSfLDQmOOg0DVBD0HxscSBhf1%2BRXSKGVSzSMCkDO4xb7Vt%2BPN5rEWEzDAcs3geYTtdNZTRz8rF8f6WlYQnHYvamrnpolDMsCs8S3%2BaW9Ldn3%2BRQG3Tf5olyz%2FDO3LaQ9Mz2EsMPuOBF47LOdH9EytBrxcSHx87UEAq24q2j%2BQ8x574DCX7bbABjqkAYJx%2FpORxw2CZeJ2RmpY1nyDfB0eSLkw3hTNsQd9HWGjeiiP42jiC1wLxYO9ZoKXnUuHyr0KXC20xkaqhhu1RTcjMxWkQsB9hb5C57qGZsIIpTD7Zjj%2BUriZQcMCfyr%2FNiEcaLnoh%2BV1EQtUzzGtw9AoIMwz7vKZOy2pcg9v3ukMDACBLENXutYXw1B6PcaNX8qJQoxXbBTTJjpsj%2FwEmgE8yLqg&X-Amz-Signature=50f9b1357f9816119b57c57d0cc0722ce28c85f0cd47bb7c15f1e518d360e6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MVJHHE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgD5zq78igSIKfinXdz8luvOdTaM%2Bs80fXHNnkF5dZ0gIhAOpwostsWKtWi%2FqZf33uxuQCSWWfNjjGDCbtDZYWpKfeKv8DCFYQABoMNjM3NDIzMTgzODA1IgyECa9Er5SXx12nbS0q3AOgv%2Fyt4vDGD3R7m8nptVugnNVkVouRC3ApDVMLn2sF4vc%2BSvUtxN3kzZoYvBcZYr26khhUWJMS86WATfrNHaXP2n2Ydoa%2Bbl7CoWe6BVYXDgk6GwZ9kwvszeJkjVWpiKzMVSsxOgtZaqJMnPOZAovzEAX0guNp%2F57YXBWre%2BHTruG3Ho%2F7UoCF6DEJfs4tU1RCfpPiiWYgPRcWlXZMh6%2FtTjZQwViYxiseQiK3LgvoLZpMd2z8NvHllfj%2FfXUUY4ElNIifevYFZiLOa18QNQf6LNGqfhZiYh7hB%2BC1PfcQ0cFaKdizPZd5IXqZ77nrg0N7hEAUHWu807NukV4Dvf4PzRAOL9SRkT03%2BFsIKMSHjNyXYP0uDmXedv4BmR238ODAkonxPNhLPMQMJe3iOt1KPCImvDdyU7tXZ%2BBJ5U%2FX8%2FtAn0tsFCZMTqLCE09h7TTL5NRHblL%2B6RvJSfLDQmOOg0DVBD0HxscSBhf1%2BRXSKGVSzSMCkDO4xb7Vt%2BPN5rEWEzDAcs3geYTtdNZTRz8rF8f6WlYQnHYvamrnpolDMsCs8S3%2BaW9Ldn3%2BRQG3Tf5olyz%2FDO3LaQ9Mz2EsMPuOBF47LOdH9EytBrxcSHx87UEAq24q2j%2BQ8x574DCX7bbABjqkAYJx%2FpORxw2CZeJ2RmpY1nyDfB0eSLkw3hTNsQd9HWGjeiiP42jiC1wLxYO9ZoKXnUuHyr0KXC20xkaqhhu1RTcjMxWkQsB9hb5C57qGZsIIpTD7Zjj%2BUriZQcMCfyr%2FNiEcaLnoh%2BV1EQtUzzGtw9AoIMwz7vKZOy2pcg9v3ukMDACBLENXutYXw1B6PcaNX8qJQoxXbBTTJjpsj%2FwEmgE8yLqg&X-Amz-Signature=61a82c5e12dac53cba5d58c751dbdc29dd361c9a7afda7dbf02b932e1c84ff59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7FNSO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbJMJuoX8O%2BlCgzRKH%2BNMeb8IOeePbDKxTLq6wrCsTwAiEA2HLI5rBFd5YWyUcgItNW1530CPc07QK42uN%2ByO4gf1wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGp80PWpwL7F0xRX4SrcAx7%2BtJ2OPKqV53gs%2F%2BPES2bEyGQfAC%2FqXL8%2FLaUmkSp1wF58QtxoT4x2akjdkfJ3TKLwrXdX8Qlpm4VbRr5YBk4IXQjsPpoV5BQWX4LM3NrDzPqCMajWo9DNWihx7409w9ir1dFhP0gKrESmTmnHRULzMmDdzjSFxdTBVnjIywkXIirV74PU6EHSMAUmi4OltrfkR8bewo4D%2F6dk7%2BbrZAC%2Fi1k9y%2BHtGYe9vou11gHM%2FPd%2FCIq95MSWjlexRU61fFyO%2BoiJKPzQzBSIdQqhbcORaCBuObkHbKWio%2FaBulFRcTTx9RiSqZc63dvlPxcDJzeBOJXi6AK6xqguat0UU%2F%2BzRb%2FqTmueFk6Z8ziwaTSwys2iU7mb13tBtVC4y%2FnsWp0dmJnArM9E8NU6nw5PckNdtDdlEoUsZxFlaqrWflwnT8WAwSb0bIWXHK11%2FaRoNIzhwULIg7vh5SQl23flP3oywrV%2Fw%2FRC4Ufl2If0y89iAcvYFG%2FYWYm1PTDefqvDjpBRsZZ6dLH46Ahtv5dIvFapT1czfugI8X3GkU5xAaj%2FUDvNHxZWxvCRsRabddl5MHl3dzO2I7hqlccpY%2B28pjSwS0UYaA%2BuHM%2FSnV6iFdxCSQhm2KfyZTp1aR8PMPvstsAGOqUB6RfI%2FtwrJHEHRy7UUIUxNus6ImCh%2Bqz1S2rFEdTpVfohrdgKAJrqkEC%2BkxX%2F6KkVY%2Ftb9gHJBPS%2BZrYR4TRJSOvUJZ%2FQ6QLWYKX23elzT0nlAPCGHXRgSRPkOOt%2B5BgER7XPB4%2F6%2BtyF7mGW5TX15hZ4tpFIlJUb4GhEiPDW60NxlpNzLzBchyj5ClMRsZMnDRQ%2BqnNgDNJP%2BgQlbsdVcy%2Bh5kBD&X-Amz-Signature=ea9340e1c045d6d75f925bed12bb1e4bcfae47208db5964cdf94af8fc8d05afd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VZFR3C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1nmkybXFZUzTX36IZ%2BnlNgsX%2FVCX4RsLe%2FM4gfb7j1AIgCG5GBYKfCMgKgYzSubqDmEq1NosLdZ%2B9%2B%2BD2JejEpoUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDA2WiG8neCIArN564yrcA4WglHRrAqbc7pqhimVh2p9bOJBu%2Fwl9xCN%2Bl%2FTZdSOydhlxGAOUVlTovsplLIkQj%2FWnjzmguj1q8oWc07ypL48HvRdeABjfLc6K5wETTuQIY%2Bms3UU78z7OF9UMbIU4itwJ%2ButuZ%2B0YfrNd3mB8AmIUblDpOdEW0N5HxOGG8J5uGL8eh1BFDOWzUSuuNxNWRXdvdqMvTqLfBQ%2BT%2Fj95l%2BRoQz72eFSMcDEQo5ZfVaGJH%2Bh3cuqD7WNksrOHHFUCvlFCprrxVV5wFVv83wMSxTPSVpqVZy9ys7G%2FJGjcTzzORDM38ed%2BzavJ1jKreUk6tfSsTj6mTuNVUvqSEyNIgN%2BZEr3Tfxkkr6YZcyo5rGakBrBaxtE2H0X4I27idoS0f0N9LbJKvmn8EwQy615b5zijH84jjedHEp8xl1r%2B0zRegG3lnGbXrniP8kx8dvZkGC%2BqEMUMOAk7SYZo3Fr6sXyjZ%2FT4K%2BbhGDQJCUQHnjGARxK7GvK5z8ppLjQU7LStsF%2BEVlU5uk4M16YvwzEB4JBf3t%2F5hKocJnBxjf8TDxEX37YxUCMfS%2FwvbdnImqGiidWMhedM%2BXAGu%2B4Cpk%2BLMOz2egJwqAT8r3IXDVKZw4PXUxsKUKu15wpMFURxMPrstsAGOqUBB7kl9QJixg75Qa2WYmDPngJjYUnUMAvFbQHgguFWEqZ5BT8truWKTnRRND83yPF%2BCfXsgt3JL%2FPZ%2F0R6c9H20DV0I%2BDAhIMAv%2B5SgGJKk6WveUjickZUFmV5FbyGHKA1inHtnHihS084OKxrukbPeSrRazTg065ZKYCjbI%2FlX1FtovutbNvKw88%2FBOxxrqIwYdYp8XZrqZhm9UDMb7cQe%2FIy7RJw&X-Amz-Signature=cf22b405ec333458aa7dacbc487bcba0b7b9107a8b7854af590f1682003a3a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MVJHHE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgD5zq78igSIKfinXdz8luvOdTaM%2Bs80fXHNnkF5dZ0gIhAOpwostsWKtWi%2FqZf33uxuQCSWWfNjjGDCbtDZYWpKfeKv8DCFYQABoMNjM3NDIzMTgzODA1IgyECa9Er5SXx12nbS0q3AOgv%2Fyt4vDGD3R7m8nptVugnNVkVouRC3ApDVMLn2sF4vc%2BSvUtxN3kzZoYvBcZYr26khhUWJMS86WATfrNHaXP2n2Ydoa%2Bbl7CoWe6BVYXDgk6GwZ9kwvszeJkjVWpiKzMVSsxOgtZaqJMnPOZAovzEAX0guNp%2F57YXBWre%2BHTruG3Ho%2F7UoCF6DEJfs4tU1RCfpPiiWYgPRcWlXZMh6%2FtTjZQwViYxiseQiK3LgvoLZpMd2z8NvHllfj%2FfXUUY4ElNIifevYFZiLOa18QNQf6LNGqfhZiYh7hB%2BC1PfcQ0cFaKdizPZd5IXqZ77nrg0N7hEAUHWu807NukV4Dvf4PzRAOL9SRkT03%2BFsIKMSHjNyXYP0uDmXedv4BmR238ODAkonxPNhLPMQMJe3iOt1KPCImvDdyU7tXZ%2BBJ5U%2FX8%2FtAn0tsFCZMTqLCE09h7TTL5NRHblL%2B6RvJSfLDQmOOg0DVBD0HxscSBhf1%2BRXSKGVSzSMCkDO4xb7Vt%2BPN5rEWEzDAcs3geYTtdNZTRz8rF8f6WlYQnHYvamrnpolDMsCs8S3%2BaW9Ldn3%2BRQG3Tf5olyz%2FDO3LaQ9Mz2EsMPuOBF47LOdH9EytBrxcSHx87UEAq24q2j%2BQ8x574DCX7bbABjqkAYJx%2FpORxw2CZeJ2RmpY1nyDfB0eSLkw3hTNsQd9HWGjeiiP42jiC1wLxYO9ZoKXnUuHyr0KXC20xkaqhhu1RTcjMxWkQsB9hb5C57qGZsIIpTD7Zjj%2BUriZQcMCfyr%2FNiEcaLnoh%2BV1EQtUzzGtw9AoIMwz7vKZOy2pcg9v3ukMDACBLENXutYXw1B6PcaNX8qJQoxXbBTTJjpsj%2FwEmgE8yLqg&X-Amz-Signature=783cccdcdc241d64c3d6dd1373463de29dc06882e2a8d4f726014298c1fc6f41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
