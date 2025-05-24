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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TZGRC2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFMyVASOeyv%2FqYKV7h%2Feuv5Y0l1QMn93QLosX9gvq%2BgDAiBaXvWlW6PJWO7m2MWJzXGlJfG8DbMHnKDgg93Tb78eyyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsr9UXwxZlB%2FFrADzKtwD34BzC2mXOODRZfaFU6Hg1cHmXylF2aNKdrgnfDWmFGb%2Bfp7KTvgsIsX6Nx8fvrfZIK6F8SGTSIhhl3PUxzmQTqK8BPiHxAglbid%2BQNGQho6RM7%2FDhfAVU9LZ1%2FDQkt2Ara3%2FS3JodxQNfxk%2BDzwJ4a4c%2FkE4Mcz3YGJ7bIpI6Ne9r2AweKC14411YpDleiyBkmLBooIcdmVLTNfTM29mP6TZXvITKOWxlbA035oDdaMs%2BrFTTY4EU9BwUf15auy5RgZAIOl68m%2FihxPB0sRNhNXasIydLKpKAMVoYHkVfLre1olgR35Z1eYW%2FsqKSe19f3lRgXyOCkiA8l%2FQQxAZstC4bVXmv%2BPEw%2Fvtt5HmNAR6Jb5CZ8fDkuyKuJUcmoxfyLDM%2FlkLD89glHsXAhiUuGupasi3cIDdKwycmLJP51c6dVOGZa7YsIwaxtL6c9k%2Bc1FavFKv%2FOQAGswqEFWcEmyDybjHs3rtcudwPj4K86CgQAhESk4rgJXb7gb%2B7x8sU6gqPqOX6%2BGGzZ%2BcsF%2BYtYMVCTrMWUWAp5RpZDDkrQ5AKw%2B7e%2BczldHiZ18qmexIn4VII01j%2FNUcTas%2B1izI5K4M3HuVe%2BrVFzD2G7H1MTyfImZsAH1XDjJP8VkwqpDHwQY6pgFt0Yu9ZyeLTHBq%2FXQDA8qc3ygs%2F6wM9HunyJ182SEny3VIsSOdYRZPCnRkEfW1UJQFSd0tZpHiHuICc6jfQGtwoeAQlqZkSn9QxX0IJycIFb1Rwki%2FArPU5m3h0Zzgbhy8lTQJnouL7HIFYOLLujue8igPmX1Qg3qwautVJeKIhcLHiKqTbDxsGBh%2FrdGY9wCKA6MU9bSYgqY8GOx72p9zFkkoujvU&X-Amz-Signature=5933dcdee3b119e2d2d7d5999ab678bc3b7d99a96dc1a4ea9e8615bc2c6a109a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TZGRC2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFMyVASOeyv%2FqYKV7h%2Feuv5Y0l1QMn93QLosX9gvq%2BgDAiBaXvWlW6PJWO7m2MWJzXGlJfG8DbMHnKDgg93Tb78eyyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsr9UXwxZlB%2FFrADzKtwD34BzC2mXOODRZfaFU6Hg1cHmXylF2aNKdrgnfDWmFGb%2Bfp7KTvgsIsX6Nx8fvrfZIK6F8SGTSIhhl3PUxzmQTqK8BPiHxAglbid%2BQNGQho6RM7%2FDhfAVU9LZ1%2FDQkt2Ara3%2FS3JodxQNfxk%2BDzwJ4a4c%2FkE4Mcz3YGJ7bIpI6Ne9r2AweKC14411YpDleiyBkmLBooIcdmVLTNfTM29mP6TZXvITKOWxlbA035oDdaMs%2BrFTTY4EU9BwUf15auy5RgZAIOl68m%2FihxPB0sRNhNXasIydLKpKAMVoYHkVfLre1olgR35Z1eYW%2FsqKSe19f3lRgXyOCkiA8l%2FQQxAZstC4bVXmv%2BPEw%2Fvtt5HmNAR6Jb5CZ8fDkuyKuJUcmoxfyLDM%2FlkLD89glHsXAhiUuGupasi3cIDdKwycmLJP51c6dVOGZa7YsIwaxtL6c9k%2Bc1FavFKv%2FOQAGswqEFWcEmyDybjHs3rtcudwPj4K86CgQAhESk4rgJXb7gb%2B7x8sU6gqPqOX6%2BGGzZ%2BcsF%2BYtYMVCTrMWUWAp5RpZDDkrQ5AKw%2B7e%2BczldHiZ18qmexIn4VII01j%2FNUcTas%2B1izI5K4M3HuVe%2BrVFzD2G7H1MTyfImZsAH1XDjJP8VkwqpDHwQY6pgFt0Yu9ZyeLTHBq%2FXQDA8qc3ygs%2F6wM9HunyJ182SEny3VIsSOdYRZPCnRkEfW1UJQFSd0tZpHiHuICc6jfQGtwoeAQlqZkSn9QxX0IJycIFb1Rwki%2FArPU5m3h0Zzgbhy8lTQJnouL7HIFYOLLujue8igPmX1Qg3qwautVJeKIhcLHiKqTbDxsGBh%2FrdGY9wCKA6MU9bSYgqY8GOx72p9zFkkoujvU&X-Amz-Signature=5daeb30920ef6765b47b14e2d0b227eb4b27a69699bea7cadea2e9166908caba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TZGRC2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFMyVASOeyv%2FqYKV7h%2Feuv5Y0l1QMn93QLosX9gvq%2BgDAiBaXvWlW6PJWO7m2MWJzXGlJfG8DbMHnKDgg93Tb78eyyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsr9UXwxZlB%2FFrADzKtwD34BzC2mXOODRZfaFU6Hg1cHmXylF2aNKdrgnfDWmFGb%2Bfp7KTvgsIsX6Nx8fvrfZIK6F8SGTSIhhl3PUxzmQTqK8BPiHxAglbid%2BQNGQho6RM7%2FDhfAVU9LZ1%2FDQkt2Ara3%2FS3JodxQNfxk%2BDzwJ4a4c%2FkE4Mcz3YGJ7bIpI6Ne9r2AweKC14411YpDleiyBkmLBooIcdmVLTNfTM29mP6TZXvITKOWxlbA035oDdaMs%2BrFTTY4EU9BwUf15auy5RgZAIOl68m%2FihxPB0sRNhNXasIydLKpKAMVoYHkVfLre1olgR35Z1eYW%2FsqKSe19f3lRgXyOCkiA8l%2FQQxAZstC4bVXmv%2BPEw%2Fvtt5HmNAR6Jb5CZ8fDkuyKuJUcmoxfyLDM%2FlkLD89glHsXAhiUuGupasi3cIDdKwycmLJP51c6dVOGZa7YsIwaxtL6c9k%2Bc1FavFKv%2FOQAGswqEFWcEmyDybjHs3rtcudwPj4K86CgQAhESk4rgJXb7gb%2B7x8sU6gqPqOX6%2BGGzZ%2BcsF%2BYtYMVCTrMWUWAp5RpZDDkrQ5AKw%2B7e%2BczldHiZ18qmexIn4VII01j%2FNUcTas%2B1izI5K4M3HuVe%2BrVFzD2G7H1MTyfImZsAH1XDjJP8VkwqpDHwQY6pgFt0Yu9ZyeLTHBq%2FXQDA8qc3ygs%2F6wM9HunyJ182SEny3VIsSOdYRZPCnRkEfW1UJQFSd0tZpHiHuICc6jfQGtwoeAQlqZkSn9QxX0IJycIFb1Rwki%2FArPU5m3h0Zzgbhy8lTQJnouL7HIFYOLLujue8igPmX1Qg3qwautVJeKIhcLHiKqTbDxsGBh%2FrdGY9wCKA6MU9bSYgqY8GOx72p9zFkkoujvU&X-Amz-Signature=851491c0ec885a48e3a0aa55d705d0f32e7a73d3ed08abbec298f3f5ffc62e94&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6F4GNC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAJPmEjFYt0d2gJQFPT4FXX8ipMhRTHc%2FKPzOZegCcekAiEAhNThV%2F39NIkujg5aqE8E%2BHQbBmtokSoQeHjZQYa6eN8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJyzj8%2F7bROmY96MUyrcAxuwiG2jpK2H5ibkQPxMslyWgo5cTZldFkCZuUsAcCQwE%2FKL1TIhXpnxOnZQDuxtFuWaieT%2Fs52SU5NRPp2e4lM1o7mGAZrdJARTTkNlXCEaxHX3je6G1Qc9OIeq%2BIDRdNBUaqQfdQmHu6ed6Eny3zspwGbsTnpH2S0SuFX3VxogylcGYWmpgeh5JotJYWNqbpY6SM1v704jl0B06XQjix6Zi%2FvfoHPe73VCSIfNa0NOt7IJq2ozWOGZPSf5F4JfECXvN6l8NP%2FL%2B5FiUXZsTehq9%2FsqGkVWdJTCfO0ZYU6cJk81Nsa3CrqtFz5coK7hUD1ppxIz%2Big818DgnkroPQDhPO9IHFp6ZbRAN7HJb42gGx3GdeWWKCTb6FweZby13oZwevNZCzeT1Pmyyp8ogqF5pJZvksLjCDebzh3ismgCFI7NPQRTILSAPp0nI%2BVoeUnNy9JVpZPD6AMYy6cAebeQK%2FAyClik3qj8v2%2Bl4W5EqpgLWU8%2FShn5C8AzREPM0bihCqLZsd9NSrN%2FR0WgIc%2F9mm9bYFqW6Pc3RX6xZ%2F%2Bufu28IlWpoQNt9CGChOE7sZuDrPajKUaB65EUTj1q%2BMBE183qOm0CeqhiJd1%2B%2BpXFHgRiWe%2FGkdrIWPojMN%2BRxsEGOqUB37%2B9EcHvwHZqJTu7eCQHNyLQTQaF1GE%2FlRyu792M%2Fe0312O1g%2F7IUbeY8%2B1rSDFl4HMTHxixa5Du85F6jGBXFlc%2FlIxF1SktdblcFg4k2qU8OUT9NVFgfWyWbhsqhM1P9uCe7%2BewTdpq9kInYXz3Qm%2F%2Bh%2BdX2LM0KbdYRAhkzkKppif9YOtzZjiv6S%2FzeylvxLLBDFL06j1fuj8hg%2F7ndjj2S7uD&X-Amz-Signature=22781492caed90bc3787a9290bfa7e612895d967fa953e6223c818a9c81f3e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKBXRM7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDvVTTl7F%2Bt8JLlAJipamCkE6p3pFfgRDu07PRtnPm1hwIhALRjY1wkaCRz7eFldfvRN4VSuXH2iqSYDJ29lWGISX6aKv8DCBEQABoMNjM3NDIzMTgzODA1IgwgnzDsDbBvYXXMwfEq3APlAfFr7UjDq0ALvwQhdEdZFZ%2FK8iDTktmtk2EKL8eJao%2BsNqfg6Yb1dyw4xeZnkP6tj0LljFSl1QTykfZ4U8cs4m4PvxR%2F385LfEfPLJLiJQBXKIhrfgFzY9bSjdDOklugCwCAOy0h0DLn%2Bk%2FgDstZ6Cm3oTRiKxH8A2jvwV2tE8z94Hhe6PKhFLO4TAGGUSARgO%2BAGGRc06weQP3m%2BZF7yA6IprubrWIU2dXUmFu%2BnpcNg6GH2RGNCuoa2X638b%2FT%2BLBDUIdBFX%2BRQ0QYQjyNOCTA4Hxpvze9sLigvr5nNONNUrRQv9JVVrhwvUAP%2Brp%2BHkwSp3olqLEOUWyA7eB2W%2BnLUvO16kbbBqisec5gGZKy1xx1VvxxeKnTYOfRdpjL%2FikBCAffVMuffm%2FsG3lIZibswcuYfNHqUYa98BAv8QFE%2Fuugl8AGWMn1BuXhHD3%2Fx%2B8aFiyDKK7oSSuy0fIymjFdVvXjj4KWDPg6g3qnOaE8YvZs0dsZExS2jjajiVvUmEtZQzAZ8Lpwr5vMfHvp4OK58svYj86FOCaQES3KpMfCVRrLmZvZXtxhBrVIdRT7u9V8NmGkpIXlRTuKj65uBrqsl9qADIQPLSLjt9Vi8ghMpu7H20uW7BSq1TChgMbBBjqkAfIOyWQcEmpOoyygnpWa%2FX2idaGzH3hDRAcLIuKP6mnLSrmd%2B04%2ByOPfiO86HdETTQsSyNO11PyAe%2B7t50K38MYz9uRTICrIqaXFCgWtzvJgVIo8QR8m5p8qF5kD75yusgfE9QPL1qtD9RaHnTkQZRAKv9Pxmo7ay4mzBKe8DQC%2FU5zHdJ5g3luaxv%2FtezaxSqTTrtuMRr4%2FDjQzm55AL68JC3cQ&X-Amz-Signature=882fe79b514155e1d7066de62dca815c475dff2004b175b123969701ffdbec77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TZGRC2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFMyVASOeyv%2FqYKV7h%2Feuv5Y0l1QMn93QLosX9gvq%2BgDAiBaXvWlW6PJWO7m2MWJzXGlJfG8DbMHnKDgg93Tb78eyyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMsr9UXwxZlB%2FFrADzKtwD34BzC2mXOODRZfaFU6Hg1cHmXylF2aNKdrgnfDWmFGb%2Bfp7KTvgsIsX6Nx8fvrfZIK6F8SGTSIhhl3PUxzmQTqK8BPiHxAglbid%2BQNGQho6RM7%2FDhfAVU9LZ1%2FDQkt2Ara3%2FS3JodxQNfxk%2BDzwJ4a4c%2FkE4Mcz3YGJ7bIpI6Ne9r2AweKC14411YpDleiyBkmLBooIcdmVLTNfTM29mP6TZXvITKOWxlbA035oDdaMs%2BrFTTY4EU9BwUf15auy5RgZAIOl68m%2FihxPB0sRNhNXasIydLKpKAMVoYHkVfLre1olgR35Z1eYW%2FsqKSe19f3lRgXyOCkiA8l%2FQQxAZstC4bVXmv%2BPEw%2Fvtt5HmNAR6Jb5CZ8fDkuyKuJUcmoxfyLDM%2FlkLD89glHsXAhiUuGupasi3cIDdKwycmLJP51c6dVOGZa7YsIwaxtL6c9k%2Bc1FavFKv%2FOQAGswqEFWcEmyDybjHs3rtcudwPj4K86CgQAhESk4rgJXb7gb%2B7x8sU6gqPqOX6%2BGGzZ%2BcsF%2BYtYMVCTrMWUWAp5RpZDDkrQ5AKw%2B7e%2BczldHiZ18qmexIn4VII01j%2FNUcTas%2B1izI5K4M3HuVe%2BrVFzD2G7H1MTyfImZsAH1XDjJP8VkwqpDHwQY6pgFt0Yu9ZyeLTHBq%2FXQDA8qc3ygs%2F6wM9HunyJ182SEny3VIsSOdYRZPCnRkEfW1UJQFSd0tZpHiHuICc6jfQGtwoeAQlqZkSn9QxX0IJycIFb1Rwki%2FArPU5m3h0Zzgbhy8lTQJnouL7HIFYOLLujue8igPmX1Qg3qwautVJeKIhcLHiKqTbDxsGBh%2FrdGY9wCKA6MU9bSYgqY8GOx72p9zFkkoujvU&X-Amz-Signature=c80c38dab8c88775772179bb1bb58fc2772a4ce4584feb8818f5e1401353ec52&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
