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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR2GGTC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHamksAgrRUH1q5Ta%2B8s%2BSZSXwlDZ6YytKhOdZotgFK5AiEAtIN5YPqA6QQezCIjE3%2BGY8%2BTYHDERwflyecdwtjFkM0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEp%2BcHRATRnYpmRErCrcA643veuq%2F0tuZ0J03rCgSJ3izXh%2FnOht4nJN7zR0RCWF1wey2%2F47azwPGpOHNmc5f9xe6xOONTI2czdRmUM%2F9YfWcqbl6%2BTsXHVIJMwLo%2FBTS0Eeu7mtcuz3EMV57Z7iQp1AW1ddZh%2FRj9hec2Al3%2FPrY3L929AsGdYg2QGziU2nSzASv9TIkd0snZUNBLSh529DmHk3meoFP9U1v58I%2F6Lo4hxDNcLxFhSp7JP7WbHNFaCQowgPL4q0lS3iK1P%2Fu7DG%2F1%2FMTXqC7R2BGzTTF2QcGCYzGb7Jn7OxSxOGS3Ca3qoog0LUoB5kAXHIMR9q5PrJjOBe9zh7070jSfN4wq3qGRotuBSxnnfuAIOb9n%2BoIsXYB0%2BvYGjPaBIsdO41ZbBDEW9lstDSQtRjz%2B%2BgJ50j8thT70VbpgFd0c%2FNLBghD1yoQ%2B0Do%2Bxgt1Y1cZK7gEdMfv3UwPdDeLjbvqtVs%2BUc9wyu4CxxHNbOFzHzh1faKj7ka4ohzYH2loTcJxoXyLoBuZ3ym%2BZpW99rr4gULuyVGD0vNNkHTXHydhegkK08P2ysZS7cZwydRpctFIWI2WYNrBmkoJCVTATBGbFh%2FMNjRDXtACJGVvHybcmrcpM8PkST7BUqhe9%2BgJEWMKiF%2FcEGOqUBS%2F78oQeWvSfRe%2Bj6gSOlvDVuelU3inZLMGajG1ovxHUR7fO7SDhadbpvS2PXcJhS6n3E4yxHIhz9Flv%2F0tEDHMcf3DW8OpU8vbBfvt0tdNlsdSRgyEyHHItUkkfrpFrD13Qg8mvaZzk5k4gt%2B0COtnTl8Ic3LW%2BCnfoqtWeHFRfdO8wEGB%2FkiVvurFZ%2BLUgS809ZJvfGYeERHAXGl9VuRG%2B0PKbf&X-Amz-Signature=08cea2b47385fd066c0ef689b312add359ce73ca536d63809214738099dc60dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR2GGTC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHamksAgrRUH1q5Ta%2B8s%2BSZSXwlDZ6YytKhOdZotgFK5AiEAtIN5YPqA6QQezCIjE3%2BGY8%2BTYHDERwflyecdwtjFkM0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEp%2BcHRATRnYpmRErCrcA643veuq%2F0tuZ0J03rCgSJ3izXh%2FnOht4nJN7zR0RCWF1wey2%2F47azwPGpOHNmc5f9xe6xOONTI2czdRmUM%2F9YfWcqbl6%2BTsXHVIJMwLo%2FBTS0Eeu7mtcuz3EMV57Z7iQp1AW1ddZh%2FRj9hec2Al3%2FPrY3L929AsGdYg2QGziU2nSzASv9TIkd0snZUNBLSh529DmHk3meoFP9U1v58I%2F6Lo4hxDNcLxFhSp7JP7WbHNFaCQowgPL4q0lS3iK1P%2Fu7DG%2F1%2FMTXqC7R2BGzTTF2QcGCYzGb7Jn7OxSxOGS3Ca3qoog0LUoB5kAXHIMR9q5PrJjOBe9zh7070jSfN4wq3qGRotuBSxnnfuAIOb9n%2BoIsXYB0%2BvYGjPaBIsdO41ZbBDEW9lstDSQtRjz%2B%2BgJ50j8thT70VbpgFd0c%2FNLBghD1yoQ%2B0Do%2Bxgt1Y1cZK7gEdMfv3UwPdDeLjbvqtVs%2BUc9wyu4CxxHNbOFzHzh1faKj7ka4ohzYH2loTcJxoXyLoBuZ3ym%2BZpW99rr4gULuyVGD0vNNkHTXHydhegkK08P2ysZS7cZwydRpctFIWI2WYNrBmkoJCVTATBGbFh%2FMNjRDXtACJGVvHybcmrcpM8PkST7BUqhe9%2BgJEWMKiF%2FcEGOqUBS%2F78oQeWvSfRe%2Bj6gSOlvDVuelU3inZLMGajG1ovxHUR7fO7SDhadbpvS2PXcJhS6n3E4yxHIhz9Flv%2F0tEDHMcf3DW8OpU8vbBfvt0tdNlsdSRgyEyHHItUkkfrpFrD13Qg8mvaZzk5k4gt%2B0COtnTl8Ic3LW%2BCnfoqtWeHFRfdO8wEGB%2FkiVvurFZ%2BLUgS809ZJvfGYeERHAXGl9VuRG%2B0PKbf&X-Amz-Signature=ca2c772468fc8d8f48464de063a07b3491f77dd3ce3314a199e5844927bfc072&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR2GGTC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHamksAgrRUH1q5Ta%2B8s%2BSZSXwlDZ6YytKhOdZotgFK5AiEAtIN5YPqA6QQezCIjE3%2BGY8%2BTYHDERwflyecdwtjFkM0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEp%2BcHRATRnYpmRErCrcA643veuq%2F0tuZ0J03rCgSJ3izXh%2FnOht4nJN7zR0RCWF1wey2%2F47azwPGpOHNmc5f9xe6xOONTI2czdRmUM%2F9YfWcqbl6%2BTsXHVIJMwLo%2FBTS0Eeu7mtcuz3EMV57Z7iQp1AW1ddZh%2FRj9hec2Al3%2FPrY3L929AsGdYg2QGziU2nSzASv9TIkd0snZUNBLSh529DmHk3meoFP9U1v58I%2F6Lo4hxDNcLxFhSp7JP7WbHNFaCQowgPL4q0lS3iK1P%2Fu7DG%2F1%2FMTXqC7R2BGzTTF2QcGCYzGb7Jn7OxSxOGS3Ca3qoog0LUoB5kAXHIMR9q5PrJjOBe9zh7070jSfN4wq3qGRotuBSxnnfuAIOb9n%2BoIsXYB0%2BvYGjPaBIsdO41ZbBDEW9lstDSQtRjz%2B%2BgJ50j8thT70VbpgFd0c%2FNLBghD1yoQ%2B0Do%2Bxgt1Y1cZK7gEdMfv3UwPdDeLjbvqtVs%2BUc9wyu4CxxHNbOFzHzh1faKj7ka4ohzYH2loTcJxoXyLoBuZ3ym%2BZpW99rr4gULuyVGD0vNNkHTXHydhegkK08P2ysZS7cZwydRpctFIWI2WYNrBmkoJCVTATBGbFh%2FMNjRDXtACJGVvHybcmrcpM8PkST7BUqhe9%2BgJEWMKiF%2FcEGOqUBS%2F78oQeWvSfRe%2Bj6gSOlvDVuelU3inZLMGajG1ovxHUR7fO7SDhadbpvS2PXcJhS6n3E4yxHIhz9Flv%2F0tEDHMcf3DW8OpU8vbBfvt0tdNlsdSRgyEyHHItUkkfrpFrD13Qg8mvaZzk5k4gt%2B0COtnTl8Ic3LW%2BCnfoqtWeHFRfdO8wEGB%2FkiVvurFZ%2BLUgS809ZJvfGYeERHAXGl9VuRG%2B0PKbf&X-Amz-Signature=22d71c9b345f69fd7e7556a671857d1745db5e210878788d89c99cb5c3491047&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPNVVKH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICeEte6O2GiUTDn7L3kinjluzh2n71AAQcCNxUqckuUYAiBnxFGwJKZRHYcb%2BlARf4I79gzopWxOeTrl0bfC3dzMOSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMuW%2Bphrj3110%2FnL3FKtwDsBLyCH%2FkAFRuDaAkbyNqpUYDzmdx4aJBL7LjLH%2Blk5c1I4G5yw1XPrwvD3WarnJh4eWNbI33OQAicdNZuKFLy7DN5I7DBR1S6nd4K9%2FBV5nSZmI2FYcxTt5%2Bpt2uc69MiE7LaQC9Ud7BLEoJvUWU7lD0rEhZqK0WikBQ7ISDthCS628eHcJWufGxhkwO8TiPuLmkzpwkAuM31TcEUWX6djMqdunYlc3I02IIJ2JMAd2k%2BJavQ5kxVNHB4Btlj6TEOQdEKekw4gbRKK4asQU3e3lkCi8u9NMO9AZBm2JQMV8TiP0A9FVYcAM70wjHtM3OTXfx6UYis0dNgyVBT3nuPf7836U7PupjcvYljXHUFByX52%2BM%2FMAOiX0BSd9u1KsNg%2B%2FcYmYi4cv7qQ48IaJDFqwua4k29pZFMSkh9mHWTcZef0CRO9VQLuEGrjwX2esMdKh%2BCZOumj7bYV5O4ti92EcPd6usqrFgA%2BfQ2ra2%2FMkSvFIGKWFbJmCXSBG04zTX1hD4eXs8%2B%2BuLdzVeU3yFSOrZyRzkyQ5YQzxqPd7%2FcIkw4Y7e%2BISqOdDNWzCzublG1xJpWEZfIRY7KfqGb67FdRCpvgPYy9U3jayWDSuAzfNss8JailLbnrLDQWgw2oX9wQY6pgH4zv2ufzstYFbHvzRwAcKCLBOHpknPHroIDSSkhDnMXWnn18K7rButzQPKY47aYezdl7ZmJ7Rfj3v3SdtMAbyBOaw%2Flsruy9%2FqVZtnLneu3jjnn3U%2BjyPjE9tgKQnFM0W81XpyM44SLicEkvyHxpaB6LhbV3nopJ6rheaAGNpumWvEpJcuAAbr0zBYkkHwgjAwoFuu2TCF6Vdqz6wMyvY%2F5TYVIruA&X-Amz-Signature=a639f752e2d6f3b34e461c878e8adcdd7c5175029d469a5422b11755b53a9c85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OY6SD74%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIFfxz9dwFk2SG1%2Bq5UWG06M8nqejZM8FQa0%2FbqCBTOuGAiEApVaeOoTqNsGKEZhGdkcbQeLDM7TkpeLhl3ErmvNjOeMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAtbuyRRnQpPO0m10ircA%2Fp%2BBc2hCujYMKQlTK3o0wBCbyjOF87PbkAgy7Rao%2FWd8qg%2FIfZvpVnBshGAQlbx8rH6DdFsHTckNwe05QPVGI1ZdWDJNsm9snUie1%2FViwqnHn0CfmHW4ao6t9I33b3ph2dPSoUUW9VxWVfl3SzpIHyt5mvJ%2Ff3UTd57wTJ94zFhXvFtpa96OkUSiZsNSa9CmwI15s4vUQ8eGrZ2DOKJ0bQZjcd4JhYz73oIaxH8jjLPz9qZ8J82IO8JL44TSAPkVCvBbCfxQ0to81j7gLub7xK5VTPywlWHalq0xRltj1vUeIPayADeoEREG%2FU%2FN9o%2F%2FWkMGyJhSCSrjWLEBdDeEWegqu84uDFDOLjCrJjVSslQ8HCkUuP5Op%2BGJooU4RnEEz5X8bQMbDGjS%2BGq9cE1VOa4fTG8H6sVrpY5%2BLoZiJj%2F%2FYPhxeix3CknuBj2mHpOm1MZowYEL2JkAbloTAjP7Uzv%2F8F6Qale0xvxrSfuf1zuAQV%2F%2BUYLAon%2BEwOvDvrRjEutX2WwEG1877YkahnL8O4xwkeBzfaBuYyfFeMeSrPmJBSdiSd9UCSsYdPaPWAzE%2BS%2FvCPjr8do9EkCZnWQvvy6yck3MgkVptX92QWv8ntjHQ0zJcSgztmYdaJBMOKF%2FcEGOqUBGoLAHdArUaEmB0PwkrrDddswU15IquiHFOOgjVPu4idpi4gvQS7pa4ZUKGYkrLw%2B8hzPA6qIIlo6wtbozOxIFAisol15UmV8Td2TStfhM5ybOwmpIfwUjkZxTs0XY4PmjQzl6lx%2BHTc5ZUNEkQFIURdA8ul2q5N5%2FS6LSgTZT%2FcqUqGY5LEc6VN4yWhJgdXiBD8tP60Hc9NGf8h714j0yAO%2FbvWp&X-Amz-Signature=fea95e88ef6887cbcf7de26feb070c5eb1a3f94c64ad514528cfb7f6162bd2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR2GGTC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHamksAgrRUH1q5Ta%2B8s%2BSZSXwlDZ6YytKhOdZotgFK5AiEAtIN5YPqA6QQezCIjE3%2BGY8%2BTYHDERwflyecdwtjFkM0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEp%2BcHRATRnYpmRErCrcA643veuq%2F0tuZ0J03rCgSJ3izXh%2FnOht4nJN7zR0RCWF1wey2%2F47azwPGpOHNmc5f9xe6xOONTI2czdRmUM%2F9YfWcqbl6%2BTsXHVIJMwLo%2FBTS0Eeu7mtcuz3EMV57Z7iQp1AW1ddZh%2FRj9hec2Al3%2FPrY3L929AsGdYg2QGziU2nSzASv9TIkd0snZUNBLSh529DmHk3meoFP9U1v58I%2F6Lo4hxDNcLxFhSp7JP7WbHNFaCQowgPL4q0lS3iK1P%2Fu7DG%2F1%2FMTXqC7R2BGzTTF2QcGCYzGb7Jn7OxSxOGS3Ca3qoog0LUoB5kAXHIMR9q5PrJjOBe9zh7070jSfN4wq3qGRotuBSxnnfuAIOb9n%2BoIsXYB0%2BvYGjPaBIsdO41ZbBDEW9lstDSQtRjz%2B%2BgJ50j8thT70VbpgFd0c%2FNLBghD1yoQ%2B0Do%2Bxgt1Y1cZK7gEdMfv3UwPdDeLjbvqtVs%2BUc9wyu4CxxHNbOFzHzh1faKj7ka4ohzYH2loTcJxoXyLoBuZ3ym%2BZpW99rr4gULuyVGD0vNNkHTXHydhegkK08P2ysZS7cZwydRpctFIWI2WYNrBmkoJCVTATBGbFh%2FMNjRDXtACJGVvHybcmrcpM8PkST7BUqhe9%2BgJEWMKiF%2FcEGOqUBS%2F78oQeWvSfRe%2Bj6gSOlvDVuelU3inZLMGajG1ovxHUR7fO7SDhadbpvS2PXcJhS6n3E4yxHIhz9Flv%2F0tEDHMcf3DW8OpU8vbBfvt0tdNlsdSRgyEyHHItUkkfrpFrD13Qg8mvaZzk5k4gt%2B0COtnTl8Ic3LW%2BCnfoqtWeHFRfdO8wEGB%2FkiVvurFZ%2BLUgS809ZJvfGYeERHAXGl9VuRG%2B0PKbf&X-Amz-Signature=fe47b32aadba7d6a19e054f7f002d0dc1a2457daf7d20f2741da06d54d7cf23f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
