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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABZB5KA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpEJovxVA3chdWJ7NQl%2FvDaGcA5oRg%2FweviUzbnHrPUQIhAMkumq4n5YpOqVtg9YhgNh%2ByDVh30e4dWcvn36cKevd7Kv8DCDcQABoMNjM3NDIzMTgzODA1IgznCLEQ%2BoVyHbY6T%2BQq3AMgUoo3TVMih%2FGyzOFNCOUAM6JhkatR2SWZOFqwwev0RBGYg0vYq0YyKsUzPbdhUHGo2e1SefFtlBpZotH7otBuP5O%2FN4iecHA5YsahLip8MWOKbZhuRwEgPNLI2qNEceN00PkLrmcJyqYWYD34ITzzQ%2F5%2BsMil5J2oiIBSU%2BPzPZ3hIRBsUv6ZdMmA50js5Rug3IiAKFOk7eOeibJePc2btOmZBBz2DLZnic8Yv8VsOqeIvhUvXTopnwDRzl7FBvo%2FeJ6Gn%2F2D1dWEvjp5a3AuJEQYHl0b308IecjrDzyKPOdpN5%2BMjyrHavAeXhg5JUazrQuliBzZXgC%2Boz9ztj3JxnCKQKXNiD3Iviu5gPvvsUV0pdU2KLRKFb%2FpqOpy%2F7AJZ%2BaV2D7xSi2gvWrpfa36AbSfR7eAgEliTiZAlKSOAjgS8Zkqo0bVtwOXkBAtsxileiIHk73wvzhxb48QHXfXmVTjjkwXA4CrbamsQI7lW0v0vkeclQq15wVg%2Fc8YcLgrwMsupNGAolO6bqsveTxmfHwoP%2BEkkLlB4vQCesgc2jISN50L2S1j76HV%2FwAQaS1wQ0gnJzQBZCVJJrqQGbXXDfnNHaSRHRofUflS3DdfNTffPGxLcUKbRzyWsDCYw8a%2FBjqkAbKJtwVP7qcSUWt1quFYg6qYeO3PpcU9gEtQO2HLY9cKKSM1ytGjGUbNkaa%2BCI%2BSkkfpWjjFfNgWZWJ9WaKJTTrPrA1L31duweZIcKKBxonJ8MkaE57bCP9n1CJvn4WdbZIhqJ1D4iPC4ovjqqJ8Bw1qRbqx09LReFVmmGFYw8ruB8q3aTwUrcfjQNxSklLiZfpINW9tsbAX0O8ETcUA7JEgEK9M&X-Amz-Signature=363458aac8fc96227c6aa8c4b3bcd8574217fa1dd6101e46d9a263b4bd87e720&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABZB5KA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpEJovxVA3chdWJ7NQl%2FvDaGcA5oRg%2FweviUzbnHrPUQIhAMkumq4n5YpOqVtg9YhgNh%2ByDVh30e4dWcvn36cKevd7Kv8DCDcQABoMNjM3NDIzMTgzODA1IgznCLEQ%2BoVyHbY6T%2BQq3AMgUoo3TVMih%2FGyzOFNCOUAM6JhkatR2SWZOFqwwev0RBGYg0vYq0YyKsUzPbdhUHGo2e1SefFtlBpZotH7otBuP5O%2FN4iecHA5YsahLip8MWOKbZhuRwEgPNLI2qNEceN00PkLrmcJyqYWYD34ITzzQ%2F5%2BsMil5J2oiIBSU%2BPzPZ3hIRBsUv6ZdMmA50js5Rug3IiAKFOk7eOeibJePc2btOmZBBz2DLZnic8Yv8VsOqeIvhUvXTopnwDRzl7FBvo%2FeJ6Gn%2F2D1dWEvjp5a3AuJEQYHl0b308IecjrDzyKPOdpN5%2BMjyrHavAeXhg5JUazrQuliBzZXgC%2Boz9ztj3JxnCKQKXNiD3Iviu5gPvvsUV0pdU2KLRKFb%2FpqOpy%2F7AJZ%2BaV2D7xSi2gvWrpfa36AbSfR7eAgEliTiZAlKSOAjgS8Zkqo0bVtwOXkBAtsxileiIHk73wvzhxb48QHXfXmVTjjkwXA4CrbamsQI7lW0v0vkeclQq15wVg%2Fc8YcLgrwMsupNGAolO6bqsveTxmfHwoP%2BEkkLlB4vQCesgc2jISN50L2S1j76HV%2FwAQaS1wQ0gnJzQBZCVJJrqQGbXXDfnNHaSRHRofUflS3DdfNTffPGxLcUKbRzyWsDCYw8a%2FBjqkAbKJtwVP7qcSUWt1quFYg6qYeO3PpcU9gEtQO2HLY9cKKSM1ytGjGUbNkaa%2BCI%2BSkkfpWjjFfNgWZWJ9WaKJTTrPrA1L31duweZIcKKBxonJ8MkaE57bCP9n1CJvn4WdbZIhqJ1D4iPC4ovjqqJ8Bw1qRbqx09LReFVmmGFYw8ruB8q3aTwUrcfjQNxSklLiZfpINW9tsbAX0O8ETcUA7JEgEK9M&X-Amz-Signature=8980f6532397b44ab6a9b39c8013c2bd2988e1e92bc430ee3ea01ff4413b0307&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXAZD72%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05wIQv9VE1D325iNuTqVULBLG7OmVkhKcrwpPrhEwfAiEAsainT9EKW09l%2B3G8T%2Ble6E9eisygM523n5TWbN0FShoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDatuiSxlk%2FEteVQiSrcA8t9a3MGSTH27%2FJx%2F74txt3KYz3nxtDFM13KuPBH%2FvewnSRUlbNWDb0N9Lz2iZ%2B0lQdlBiQpujvtOR87GBTOPabPzwXgvKBBjC1SjxBBDZHi4hv8FvRl8%2BsRwUgpBsr8uGN%2FX8Wt9iN05Vs58fcCopLesJPBEP4zvQ7j65ZEnG7KFQAG3DkbJD2m1yMwGiGlpBwdRf0C8MKmKXx3FRLSQcza8paXI0trlraBCgEIeieP4cAF8IZ84GSObfI4wgIIPtI4oh1IMqju%2FxHURCIW3Cu0In%2FT2x%2FvXVfaatKqw6yzl8pJK0d7mafChzi4eb55XfO%2BtoB6%2FrqLk7AtzLdsZ8WkSWgYmL%2FiKI1YZ9qvVcTUaZwdbLilDzTW1oXTb35fP5DIGWoYeUQgGqcKqZ%2B7HJg79s1laCu0A26%2Bj3EpnwWtH9aCbBjrDf2LBgEpXKFFf3H4tGDNCEKJ1WMrMD2Mg%2BsHa4WXulamFOzv2n1ULC10X2Lnn4eRXoN6fsN0Z35zng01BaD2HZqSbS9jcZ67Vk4aG8EDIxDjgzT1QDP%2BssOfKz9XcLyZfteKGxss7YdYnfQQ22tYIJJbvtuxhqWFK3Yl1RHRttvd6tUKCyvgyVS%2Bi10bImBkfga588AJMMHDxr8GOqUBUyzxCCFRwR7qkBF2%2Fu%2BUt8xNCzcTB8XUdtSUkBVMeTZUAzSkefz20HJYJy0JKT4i9V%2FWAmo0hjh4TJRo9seUOLHd7TxWgKIDNXiGf8QcASzU1mwcybMM%2FFPLdCEufg7G3L%2FOFvDpwcSivKKX%2FFwvAUCI3RZEHFU8O%2FQetiSGBtrzCLtKbKTCbRJliFPX9StO6V2Cdkuj%2B3hmyBiEpADOVqSevuyl&X-Amz-Signature=c283dd3f81f34a912d9c8ea380ec169a04996299902a15e22fbb70fda877b119&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J7RKGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOB1Qg2twe6HL%2FQUejF3OvwUD%2FxZz96rAsRqSa5gnGlgIgHjdnK3dJWR31KNlwyeLZuM3j6UdPZ9zClomlwgd8xYcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEK0CedeA4obQWZCOCrcA6VeYzuHpcWyruv5GLhWxLsyHqrs3nE6MHFifquvJpQ%2FtCMrrCnar8shBgUg6N%2FJKvjeRoi9MjsIux%2BrK4qkynK4DMbDR8Mcw66tEhSeTHz3bw9osF5OqT%2FvZlxesgg7NZqgRq6gSVqUSUKAgVRjGqbUu%2FoTU15b73cAbLg5ybqLvtM7PIPhPImPGzwMt1F8iv1S8fzsNpmSw8h0JB%2BESDmzbHxPo2IQlpDAbNCPDFPQKMdCyomCl5t4ifYCldfbzkPbhIsviqXySrkFS%2FUJ3P%2Bbq%2FxHoFsFQAdv1vilj1V5NoxHp%2FgYfYDXu3Bx3IKsF9l5iQ54xyXgl26absUUK9h6IbGYsBXqDKGTe7BG2SjsUA1MwvqUCdmMoWFxKoP8QygSRJdvOr%2F1wowIvTqgnGcK8acXPwGIhkqjPRHkKMTsTh3MTQTz%2Bp1VUjlAlumdMLlAO2U1uGBzwmk%2F5X%2FpB8wbAFH5aMK0OJ9eg2csvOq1yrEq7rh4TspesTCT76IApOnAxFYpJyNdCSjmySyEUhx2dtlyEl%2FQ2r8LeMuIPQSFGtHhU9VI9fuICF1E%2B4itnvDgsKLdnlyblPfeK%2BKTJnGS8ytfKzvi6UrZdv2yKAwOmBoTiLdThiEjWb5AMNLCxr8GOqUBjgljwuPhKiciiQB%2FMxMv1hHNX8zdeIhFJhKnk4wtIbgWg3jy7NwBJkjZb7PzqGrbQ7OpDQ%2BUtyD%2Bc6AqDzzVpwQ1Sw%2BznKCkQkmhO892GiDZtacb401aUK1cRyn6ao%2F9dTkrV06OjHMASnjAa5oj7ZxRidnuhPX2w5zGxvu3fVmGydJY9u%2FoNYUMqzEXWbKZBgm%2FByUrLa0Tnn7zI1fl4gczIpQA&X-Amz-Signature=3541d31ec7e467c40ecbc2d80827573fa81fb3796c4b95bab9cc62217ea32048&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABZB5KA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpEJovxVA3chdWJ7NQl%2FvDaGcA5oRg%2FweviUzbnHrPUQIhAMkumq4n5YpOqVtg9YhgNh%2ByDVh30e4dWcvn36cKevd7Kv8DCDcQABoMNjM3NDIzMTgzODA1IgznCLEQ%2BoVyHbY6T%2BQq3AMgUoo3TVMih%2FGyzOFNCOUAM6JhkatR2SWZOFqwwev0RBGYg0vYq0YyKsUzPbdhUHGo2e1SefFtlBpZotH7otBuP5O%2FN4iecHA5YsahLip8MWOKbZhuRwEgPNLI2qNEceN00PkLrmcJyqYWYD34ITzzQ%2F5%2BsMil5J2oiIBSU%2BPzPZ3hIRBsUv6ZdMmA50js5Rug3IiAKFOk7eOeibJePc2btOmZBBz2DLZnic8Yv8VsOqeIvhUvXTopnwDRzl7FBvo%2FeJ6Gn%2F2D1dWEvjp5a3AuJEQYHl0b308IecjrDzyKPOdpN5%2BMjyrHavAeXhg5JUazrQuliBzZXgC%2Boz9ztj3JxnCKQKXNiD3Iviu5gPvvsUV0pdU2KLRKFb%2FpqOpy%2F7AJZ%2BaV2D7xSi2gvWrpfa36AbSfR7eAgEliTiZAlKSOAjgS8Zkqo0bVtwOXkBAtsxileiIHk73wvzhxb48QHXfXmVTjjkwXA4CrbamsQI7lW0v0vkeclQq15wVg%2Fc8YcLgrwMsupNGAolO6bqsveTxmfHwoP%2BEkkLlB4vQCesgc2jISN50L2S1j76HV%2FwAQaS1wQ0gnJzQBZCVJJrqQGbXXDfnNHaSRHRofUflS3DdfNTffPGxLcUKbRzyWsDCYw8a%2FBjqkAbKJtwVP7qcSUWt1quFYg6qYeO3PpcU9gEtQO2HLY9cKKSM1ytGjGUbNkaa%2BCI%2BSkkfpWjjFfNgWZWJ9WaKJTTrPrA1L31duweZIcKKBxonJ8MkaE57bCP9n1CJvn4WdbZIhqJ1D4iPC4ovjqqJ8Bw1qRbqx09LReFVmmGFYw8ruB8q3aTwUrcfjQNxSklLiZfpINW9tsbAX0O8ETcUA7JEgEK9M&X-Amz-Signature=964516682f6c65ce7b08db40f797e464b6d01145a56ead5888eac55c479a5404&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
