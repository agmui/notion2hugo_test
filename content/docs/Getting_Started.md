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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627C76343%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvu6caoHlilvllCCRAC0l45GZ0tgFeUEpRNeRJL6VtDAiAy37ulb%2F%2Fm8kxoZ7CjMWYVa6wG7HnQW30xHCRHERioMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMwddY0lGhpVAo9v9rKtwDIjHxBUZtjFvvXcjYp4qcovfQb1CiBbg9rK8HNLKsQJNFRRMbKsD94J%2F2g7743CwUlHQAxpjMcy%2BW1O9rfVNoo2az5x3FD%2FLBqZU3F9z21n0fl95qKl2vgAuLoQQdA5BaQwpdfIOaCKEdP2TJ%2BZ3APdDI50kARBG8OGa%2BZIULnIH7j%2BPp9V%2FzOJFPvnzT%2FHNX7cj0xsbeemgMcLNPj8R%2FhT7jWw6Sgfp%2FDDdY%2BklUGDFUcsHIayC7hqIslfdJawJwALs6mhcN7C0JZkZqvN%2BF%2Bt39%2B3z1UFWWEGxpuM0ZVTS4APy2LsfpsaCQQux%2Fl5F0HUe6B8yodB9Ks4svaW3NMKHFdV1rjuJpjTuyfz6y%2FMN%2BW9U39qoVYU9y3NiysloNkvzU3CuT8oYMypbvIf8qA4qeukPx76ZN3H2TUktN8sKLV9Wr%2FdYmN%2Fkhim%2FED86qUvcPXhkonBpIxdSjkNNB2h%2Bma0tUB0ZnyLOY%2FzhsWHEK%2Fk3hjCdx7Jisd8%2FQ36gBfRkX0aH9qMr2GhqrqGSjzxpNgHLkzkr6oD50qlrF3B7%2FPElA6NqiUpdecjMjSCx42qeQvezJSK4mA8UV7auTSh9n9kUv2KDO5PutIRD7ZsoU1kuQMfM9PrZUoKIwmIPuwAY6pgFOFsz2tA4LOsJF7RsqWT0nNfEWeZIJP%2F2lsfd035ih7n5nrRHTbl3aWQF6LU4Zh4nHuZK%2FXRLhOE9lWCCdKg0yCRucoCiqjz9y3YN3AhtERKUNw3uCIUecS7EucSdI%2BBeIWlzWgGpoJJU4%2B55dBcc8S%2BSyJEotwejjlMWb4JbivMFgk2r%2Fe9%2BlXwa3r43UM%2B4ANizv52zrWzqRoCQcS%2BmZUmOVA816&X-Amz-Signature=3076c15e8a9d41a230ca57ecbbc59ec1afda375b1249b4c3e5d7e68b21a4d29c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627C76343%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvu6caoHlilvllCCRAC0l45GZ0tgFeUEpRNeRJL6VtDAiAy37ulb%2F%2Fm8kxoZ7CjMWYVa6wG7HnQW30xHCRHERioMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMwddY0lGhpVAo9v9rKtwDIjHxBUZtjFvvXcjYp4qcovfQb1CiBbg9rK8HNLKsQJNFRRMbKsD94J%2F2g7743CwUlHQAxpjMcy%2BW1O9rfVNoo2az5x3FD%2FLBqZU3F9z21n0fl95qKl2vgAuLoQQdA5BaQwpdfIOaCKEdP2TJ%2BZ3APdDI50kARBG8OGa%2BZIULnIH7j%2BPp9V%2FzOJFPvnzT%2FHNX7cj0xsbeemgMcLNPj8R%2FhT7jWw6Sgfp%2FDDdY%2BklUGDFUcsHIayC7hqIslfdJawJwALs6mhcN7C0JZkZqvN%2BF%2Bt39%2B3z1UFWWEGxpuM0ZVTS4APy2LsfpsaCQQux%2Fl5F0HUe6B8yodB9Ks4svaW3NMKHFdV1rjuJpjTuyfz6y%2FMN%2BW9U39qoVYU9y3NiysloNkvzU3CuT8oYMypbvIf8qA4qeukPx76ZN3H2TUktN8sKLV9Wr%2FdYmN%2Fkhim%2FED86qUvcPXhkonBpIxdSjkNNB2h%2Bma0tUB0ZnyLOY%2FzhsWHEK%2Fk3hjCdx7Jisd8%2FQ36gBfRkX0aH9qMr2GhqrqGSjzxpNgHLkzkr6oD50qlrF3B7%2FPElA6NqiUpdecjMjSCx42qeQvezJSK4mA8UV7auTSh9n9kUv2KDO5PutIRD7ZsoU1kuQMfM9PrZUoKIwmIPuwAY6pgFOFsz2tA4LOsJF7RsqWT0nNfEWeZIJP%2F2lsfd035ih7n5nrRHTbl3aWQF6LU4Zh4nHuZK%2FXRLhOE9lWCCdKg0yCRucoCiqjz9y3YN3AhtERKUNw3uCIUecS7EucSdI%2BBeIWlzWgGpoJJU4%2B55dBcc8S%2BSyJEotwejjlMWb4JbivMFgk2r%2Fe9%2BlXwa3r43UM%2B4ANizv52zrWzqRoCQcS%2BmZUmOVA816&X-Amz-Signature=a70914063e6e5070409494171c088263dd90806816d2ac2838828e4428a8c318&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627C76343%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvu6caoHlilvllCCRAC0l45GZ0tgFeUEpRNeRJL6VtDAiAy37ulb%2F%2Fm8kxoZ7CjMWYVa6wG7HnQW30xHCRHERioMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMwddY0lGhpVAo9v9rKtwDIjHxBUZtjFvvXcjYp4qcovfQb1CiBbg9rK8HNLKsQJNFRRMbKsD94J%2F2g7743CwUlHQAxpjMcy%2BW1O9rfVNoo2az5x3FD%2FLBqZU3F9z21n0fl95qKl2vgAuLoQQdA5BaQwpdfIOaCKEdP2TJ%2BZ3APdDI50kARBG8OGa%2BZIULnIH7j%2BPp9V%2FzOJFPvnzT%2FHNX7cj0xsbeemgMcLNPj8R%2FhT7jWw6Sgfp%2FDDdY%2BklUGDFUcsHIayC7hqIslfdJawJwALs6mhcN7C0JZkZqvN%2BF%2Bt39%2B3z1UFWWEGxpuM0ZVTS4APy2LsfpsaCQQux%2Fl5F0HUe6B8yodB9Ks4svaW3NMKHFdV1rjuJpjTuyfz6y%2FMN%2BW9U39qoVYU9y3NiysloNkvzU3CuT8oYMypbvIf8qA4qeukPx76ZN3H2TUktN8sKLV9Wr%2FdYmN%2Fkhim%2FED86qUvcPXhkonBpIxdSjkNNB2h%2Bma0tUB0ZnyLOY%2FzhsWHEK%2Fk3hjCdx7Jisd8%2FQ36gBfRkX0aH9qMr2GhqrqGSjzxpNgHLkzkr6oD50qlrF3B7%2FPElA6NqiUpdecjMjSCx42qeQvezJSK4mA8UV7auTSh9n9kUv2KDO5PutIRD7ZsoU1kuQMfM9PrZUoKIwmIPuwAY6pgFOFsz2tA4LOsJF7RsqWT0nNfEWeZIJP%2F2lsfd035ih7n5nrRHTbl3aWQF6LU4Zh4nHuZK%2FXRLhOE9lWCCdKg0yCRucoCiqjz9y3YN3AhtERKUNw3uCIUecS7EucSdI%2BBeIWlzWgGpoJJU4%2B55dBcc8S%2BSyJEotwejjlMWb4JbivMFgk2r%2Fe9%2BlXwa3r43UM%2B4ANizv52zrWzqRoCQcS%2BmZUmOVA816&X-Amz-Signature=cf9a8fdb6b885fea5f241f770ad6ef687749830461bd8bc045576590b97dd825&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQTDHKD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEsrJt1WOh02sPc9MCJN1umpyvRGRqTFwZvYVsyXNYXwIgA%2BcTOkWBaDH8FmOgq5k1imG5GCEsb8PRm0WJnOT7%2FOIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHRuVeNwNhBm9AQs1CrcA4WjIujDATCKTPp2GgX3AqX1szt3ccFuomqOIlYkFOoIins9fzJqXWOkz93Umkqg2Ge37mdxkDoIC4Fr0KZAW5%2Fh%2FuNudCkxqTeshvjjzgHypd12CNeW1MOdXlHe0oeXMWS8SK2TaGMUUATeAtYMvTlipo5JgfXlGSQWA2qBXCD6KAYqmIvFR0po59GgpdzpfDFrwQ%2B0lKCk8%2FENKjqNDRi%2F814JbmLrkmrIEtbkzM%2F6ijsG0aGt6vFU92DqKUWfIxynhcOtAfLH1LnUTDNK7wfeDY6SjmSisVxupudQ6v5jlZW6pLShLtuLU8u5quwF4TrTfGCv46P6UV1dGpGdKmkLkG%2Bwf2pQnh3eLdCpZ76F8no7YdGCpwvGrMHjgnxA6hKRTCdghjYm4vaifLnJKb6KDluZlfiy9BrSrVp18mXH7JJr2zyZ%2FK%2BWCMHQ82f0%2B2tmAOMtDbB9BqM5yvuZFVBpT55NHo6Vv5mlyaKM0rs1tuIHRt0DUqaF3qAbESWUaaiLj%2BXpQ578uWE3BgHPORHMl4AqNQF1%2By%2FH3vjFdk0qedKlZs1MBXQCXTBo5UY6OUcZGJi%2BLDnC%2Fsujy55xlSGntOtoH6bCsjkpQFuyNYPSuZVz%2F2JEUb%2BEWNNZMOqC7sAGOqUBUjVrNbtv8b%2FCs3STXP3tWDjXoMmzA9NxaPTLm4lL54gRxP%2Bm9vLTc8TttE%2Bk7WYGrr7FMblN16AmzXTOPhbmqKreWh87P42kGwJcDGhYI8A5cL7uoZBbZsrU2k2npGbuLorE1OFpAEmBr%2BK2dhmNbTQPwK339po6yP0m5JxzddIyoMNm9ko5SOU6OB7dEMG4sTg2DbOdD83cznHvoPN97gM8x%2Bne&X-Amz-Signature=0aad2ca70a56aaadd02953a4066b13e0cc773beba7e11e917e5fe525b994455f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632IQ5F4X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3IfXvxuRViY70l1S2WLfoxpW%2BdpOLBu%2BzxFRv9ZES3AiEAnYjnXCprgUqdbzkBk4hb9%2FVmrxpTUYpGtEaeOR0ULTYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMLxTBBrcOU3BsRd3SrcAxIUFwtNvPfeEvbIp3kY6ZdpNnOKVb64VhPsz3ptjf8CzUmjCYwmL3o2cykmNvrkHA69RWpC2fm9b7DqEfEOfRL9%2B0lriG91K%2FxALpdgZQ29LoGBfdxZc5p%2B5rFAqDHXd1calnDCuWGYfNwKwQXrVwzR1%2BNAu3xKT%2F%2BGXkGm22OARWknrkzpAccI1cjYgG%2FwKOtchR3T1SkrCVJ1V5ovyvsioazolWGuHPYQ0JjWIGmO5Zm5M7djsmETdG%2B5mdtpZAYMBKdlNEo3iTOQWareOwAtfPqlGRLcOdCSrN73x5Oj4RgQKFsQmYJ01V1HmtoW6fGXY0ReYhdd0WVF2fS%2BbTSD3L1qF5S5akPOIjI6HxzBgJu3vA353ZTwbphka0bP8H5uI69rtEvjAQbdDwET2FVMvcGERlCnFlePM9iSsalV7m3BLoAexC7OCWHZEoZ8TiCJLRPbefVTVDObbyjupgbWn9q8YIKfn12iK6guWQmFl3qu8GYEc7yyrSqBwpbIOV3YlvL5G7wouB8rcbXV1PNJ3rvv%2B9RAGgBp4wphN%2Bu04AezX6kshdwCWXymycQ8lEbzDvTFZkt%2FdcnxMIBrladgC9xVbXMXLiUk8D0SrgPBgf8VafcM5pQolxszMPeC7sAGOqUB38xr7s%2Fti3akO8wXmyt7r9seV3jbTAGBMjwRe8yrhcKbbEd8WPGB3gOPUzOTWAplAfRLIZRoIrs9eSryak7u4y8D6mS9zfdjWp0T50jhX1g8g%2FS8gFSV%2FFiEzevaFeOFH3LeA2nkQxxUUMjqeFOgpjoQc4NmyqZx7LYXEEg9McKKffY2iqTE%2F5OzvK2xaJztVkLhbZtxTd0e7X06mPneYZv1fK5t&X-Amz-Signature=360ee2f02d89d08cfe428ff52bb121ae56ac1ef15e6898db20afa6a4d2cd6bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627C76343%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvu6caoHlilvllCCRAC0l45GZ0tgFeUEpRNeRJL6VtDAiAy37ulb%2F%2Fm8kxoZ7CjMWYVa6wG7HnQW30xHCRHERioMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMwddY0lGhpVAo9v9rKtwDIjHxBUZtjFvvXcjYp4qcovfQb1CiBbg9rK8HNLKsQJNFRRMbKsD94J%2F2g7743CwUlHQAxpjMcy%2BW1O9rfVNoo2az5x3FD%2FLBqZU3F9z21n0fl95qKl2vgAuLoQQdA5BaQwpdfIOaCKEdP2TJ%2BZ3APdDI50kARBG8OGa%2BZIULnIH7j%2BPp9V%2FzOJFPvnzT%2FHNX7cj0xsbeemgMcLNPj8R%2FhT7jWw6Sgfp%2FDDdY%2BklUGDFUcsHIayC7hqIslfdJawJwALs6mhcN7C0JZkZqvN%2BF%2Bt39%2B3z1UFWWEGxpuM0ZVTS4APy2LsfpsaCQQux%2Fl5F0HUe6B8yodB9Ks4svaW3NMKHFdV1rjuJpjTuyfz6y%2FMN%2BW9U39qoVYU9y3NiysloNkvzU3CuT8oYMypbvIf8qA4qeukPx76ZN3H2TUktN8sKLV9Wr%2FdYmN%2Fkhim%2FED86qUvcPXhkonBpIxdSjkNNB2h%2Bma0tUB0ZnyLOY%2FzhsWHEK%2Fk3hjCdx7Jisd8%2FQ36gBfRkX0aH9qMr2GhqrqGSjzxpNgHLkzkr6oD50qlrF3B7%2FPElA6NqiUpdecjMjSCx42qeQvezJSK4mA8UV7auTSh9n9kUv2KDO5PutIRD7ZsoU1kuQMfM9PrZUoKIwmIPuwAY6pgFOFsz2tA4LOsJF7RsqWT0nNfEWeZIJP%2F2lsfd035ih7n5nrRHTbl3aWQF6LU4Zh4nHuZK%2FXRLhOE9lWCCdKg0yCRucoCiqjz9y3YN3AhtERKUNw3uCIUecS7EucSdI%2BBeIWlzWgGpoJJU4%2B55dBcc8S%2BSyJEotwejjlMWb4JbivMFgk2r%2Fe9%2BlXwa3r43UM%2B4ANizv52zrWzqRoCQcS%2BmZUmOVA816&X-Amz-Signature=3395dfe37c055672fae317f7f80d2fed7ffde96143cf5429be89486ff0716c37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
