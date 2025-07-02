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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFU4BUXW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI251bL%2FRlQXRliqbPd%2B6A5bXSIeve5mONTusDIa8FMAiEArbTFC6jwnC4PIJLhU9CirsZ%2F5%2BIrbQbrI47HVW6iyagqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP34fdKj%2Bq%2BMKV%2BwCrcA3hMX0hQlwFUtJCvvZpvFhJRVYLrU14GsZMcGbN%2Br7nnJw2vpXbvsT8rLwa%2BKkOVkcDs6yonUHpsfi4M32lTIxqn%2FH3XGbE90H3tygSXwbln%2FHrBMpar8%2BgJ7rIkeihF%2B9hO%2BjNggLymPBuO1ZrKBxHvrqxoJvKHS0jm%2BOLJMHj9X7TyJmTyh5wrvmqsE%2FS4Bg4je3qKPLS8isOhfFLlXf94NbueY8xAHag8HQOAlQjHzVRbNBv4UdzgsnG%2BFzkflYX8fr6mcMoeIiRRGUu%2FSZOaWooXZaxHIl3GpUHnrMioEfUe48rdQzNFVdRb%2FBWsUtJKgenxXbvxUks9CeKzgc%2FjyQiMSXKE37gRQJPezof9yCjygq6qRTEfW2tmo9Meuhrji%2FPfhISbbpji%2FWKHOSG5xTChF3NT2kjuNtwSZrwZG%2BNv6Jl5GeSvZ4hLVl%2BXK4zTVBYSDo7zgTr%2FDQxvrVygHMcgx8EsFiLg8pY7hEC8pveWaS9J12%2B9jUkBIh%2Fs7or68lqjHNHFTPd6x58pRssZm0p03t0Yt3zqH8EVWIUjVaCmKnZAzr1O%2BVmrPiuC3CrOSu7On5IzwwXdRVibG60Klwmu6oMsVJWYk9QJtm3EXGpbwlY29SJantifMLK0k8MGOqUB90Z5QXWDvQKEl2bSrVGMleRMD21eoHqAWstu0LWCnUFeIRUigYZvTjVs0nRy4zvioFxa0Dw%2FBTe4%2FBWStPkXbAttUvZOOYx6Gv4c%2FmJRHmGgaemrf%2FK3UAaOy7CtDJbNc%2BUxt6%2FxnrAOU5%2BxdqBiDAcSC4AnXvmxAguvGLS5D%2BZDUcHEShFPM%2BMsVskF1DUIxuaU4oa7fnqV5bVg6KhcCn0%2B7oLZ&X-Amz-Signature=f3c7f75dff8490d1ff252f07db4910cbbe9c1614d782b793b1e344439a5d2fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFU4BUXW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI251bL%2FRlQXRliqbPd%2B6A5bXSIeve5mONTusDIa8FMAiEArbTFC6jwnC4PIJLhU9CirsZ%2F5%2BIrbQbrI47HVW6iyagqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP34fdKj%2Bq%2BMKV%2BwCrcA3hMX0hQlwFUtJCvvZpvFhJRVYLrU14GsZMcGbN%2Br7nnJw2vpXbvsT8rLwa%2BKkOVkcDs6yonUHpsfi4M32lTIxqn%2FH3XGbE90H3tygSXwbln%2FHrBMpar8%2BgJ7rIkeihF%2B9hO%2BjNggLymPBuO1ZrKBxHvrqxoJvKHS0jm%2BOLJMHj9X7TyJmTyh5wrvmqsE%2FS4Bg4je3qKPLS8isOhfFLlXf94NbueY8xAHag8HQOAlQjHzVRbNBv4UdzgsnG%2BFzkflYX8fr6mcMoeIiRRGUu%2FSZOaWooXZaxHIl3GpUHnrMioEfUe48rdQzNFVdRb%2FBWsUtJKgenxXbvxUks9CeKzgc%2FjyQiMSXKE37gRQJPezof9yCjygq6qRTEfW2tmo9Meuhrji%2FPfhISbbpji%2FWKHOSG5xTChF3NT2kjuNtwSZrwZG%2BNv6Jl5GeSvZ4hLVl%2BXK4zTVBYSDo7zgTr%2FDQxvrVygHMcgx8EsFiLg8pY7hEC8pveWaS9J12%2B9jUkBIh%2Fs7or68lqjHNHFTPd6x58pRssZm0p03t0Yt3zqH8EVWIUjVaCmKnZAzr1O%2BVmrPiuC3CrOSu7On5IzwwXdRVibG60Klwmu6oMsVJWYk9QJtm3EXGpbwlY29SJantifMLK0k8MGOqUB90Z5QXWDvQKEl2bSrVGMleRMD21eoHqAWstu0LWCnUFeIRUigYZvTjVs0nRy4zvioFxa0Dw%2FBTe4%2FBWStPkXbAttUvZOOYx6Gv4c%2FmJRHmGgaemrf%2FK3UAaOy7CtDJbNc%2BUxt6%2FxnrAOU5%2BxdqBiDAcSC4AnXvmxAguvGLS5D%2BZDUcHEShFPM%2BMsVskF1DUIxuaU4oa7fnqV5bVg6KhcCn0%2B7oLZ&X-Amz-Signature=089f7646b9c4996f06700c2f5b01642be183b9b99138fcd377d08cef06c04981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFU4BUXW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI251bL%2FRlQXRliqbPd%2B6A5bXSIeve5mONTusDIa8FMAiEArbTFC6jwnC4PIJLhU9CirsZ%2F5%2BIrbQbrI47HVW6iyagqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP34fdKj%2Bq%2BMKV%2BwCrcA3hMX0hQlwFUtJCvvZpvFhJRVYLrU14GsZMcGbN%2Br7nnJw2vpXbvsT8rLwa%2BKkOVkcDs6yonUHpsfi4M32lTIxqn%2FH3XGbE90H3tygSXwbln%2FHrBMpar8%2BgJ7rIkeihF%2B9hO%2BjNggLymPBuO1ZrKBxHvrqxoJvKHS0jm%2BOLJMHj9X7TyJmTyh5wrvmqsE%2FS4Bg4je3qKPLS8isOhfFLlXf94NbueY8xAHag8HQOAlQjHzVRbNBv4UdzgsnG%2BFzkflYX8fr6mcMoeIiRRGUu%2FSZOaWooXZaxHIl3GpUHnrMioEfUe48rdQzNFVdRb%2FBWsUtJKgenxXbvxUks9CeKzgc%2FjyQiMSXKE37gRQJPezof9yCjygq6qRTEfW2tmo9Meuhrji%2FPfhISbbpji%2FWKHOSG5xTChF3NT2kjuNtwSZrwZG%2BNv6Jl5GeSvZ4hLVl%2BXK4zTVBYSDo7zgTr%2FDQxvrVygHMcgx8EsFiLg8pY7hEC8pveWaS9J12%2B9jUkBIh%2Fs7or68lqjHNHFTPd6x58pRssZm0p03t0Yt3zqH8EVWIUjVaCmKnZAzr1O%2BVmrPiuC3CrOSu7On5IzwwXdRVibG60Klwmu6oMsVJWYk9QJtm3EXGpbwlY29SJantifMLK0k8MGOqUB90Z5QXWDvQKEl2bSrVGMleRMD21eoHqAWstu0LWCnUFeIRUigYZvTjVs0nRy4zvioFxa0Dw%2FBTe4%2FBWStPkXbAttUvZOOYx6Gv4c%2FmJRHmGgaemrf%2FK3UAaOy7CtDJbNc%2BUxt6%2FxnrAOU5%2BxdqBiDAcSC4AnXvmxAguvGLS5D%2BZDUcHEShFPM%2BMsVskF1DUIxuaU4oa7fnqV5bVg6KhcCn0%2B7oLZ&X-Amz-Signature=73eb141f473a1e7cfc8eec22f2f6c68dedefa08128c21221d4c0fe1d2c9e3152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIID7GC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXtO3uHRUEZf5M8AYNkVCMEc1fiHhi9X%2Ba3R1WnhPTYAiEAtaCqVNowvZR6i2UsfhK6QLtf2OZ6KLRO2fFnVu1V11MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFS4woae7LdAsP4kSrcA7VhuZWLV%2BKhQziHL4q8gHSKsANFXABw7r%2FN0OJxO0ZgqenyfKRgEcrxICxRGPe641wHsGnxgprgBbexHiIf2HjvvL87fJE7vMsikdy%2BbHL2BfeUY6gZwNj0WU3GvqoQesCluhSFnMyMFb%2F99mkvOodqdFitsoPHWgTEvsSEVQZymd2Xwa8FnZBT2Dkc%2BOTyfLeJ1M9Aik0%2F5pBIvr1NzmNBmtP6wyA90tko9dGTE10k0Hl9XFOqhHyY5ZMSaGZeSCiyTvA6Mm9dtK6onj0hThucObgRYnGKCvfkeAuoAAZJBBe0%2ButSYhy53n3SarqXZm3gkHI%2FnIki58j3paAGFV%2BEI4fzb6y01yobkKpARdpdzbs8WIrYvctl535NW78%2Fj8QMVfgNADcWKmhI21EEHfTK4t60T34Ytsr86%2F4T0r2gufZxwWSRwkWgwFhNkA4kHxUx3VEnWMzQh1gvzH9eK3DX8JxOyMFnqwQpRSPbPVh79W7ilM7UgXM8nrGzHKKKddlAV%2Bu%2BpbR%2FWyaadkLhcnUIO%2FF7GHhwLH6LNIEHMrZxtfDUUSJCLlL97CktKNpmIidQow1IKLTUhpazT2%2B%2BbJYs3ZehHfeUXR2MyofalBb0FCWGo3PmnYuyonJdMJy1k8MGOqUB4fOqxpGCr17LK4x1oLNRRMSFel3DFdNZs6EqHiVQ9GmNBtQlwxXRSTt%2BcKFuGx%2Br2eTG3vqDmG%2F4syuZax4rZr3MRETNl3s0IcXgBTsyyCfG%2B%2BiMAihbab9bxe85jQXBbrAfQIYxXE6%2FU0mTuGCQLvcNnQlyuqCUppWAN3a4iIHPAQzCNPVvopQARmi%2BXg6YYKBCWvo8It2%2FQSWX9mUwn3tL9TJE&X-Amz-Signature=dfcd43a4fe56cfb45dadcd8644a15bac9778fddcaecf62926f85aad2f6e9eb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TP3QEJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAbfG7FTEsbt7W2tD1MA0p7i4f2jEjwduUQF8FNvtbxAiEAhG2sFT3pqQnXJ4Cc0vsnoUxcxhRUzKQTKwMIvRNWE9cqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMKh0sNQWDX66F%2F5ircAxA3Y9T9swJZVLDxW2mlooX%2FHK0Ej7L4aI6SHZQVMgSvhcdegiUjgcIUdpbqF33Z6jnFAy8Lw84oB%2BZY11Te%2FFr6yWo4zgRcpbXHOAqDwbL7yOTI8i5z8XIkmlRBZiZDat3lfYdSauYHlJwIaqUOv5%2Bva2Gsj8U6UcNaxWvPpJFvbhWcKhK7J6jtib94f0DSBXsxJ569sWSCfPVUrDAI8cX9xuA1aC5kCJpMisNj2qz6m%2FJ1BcMRHTZjgb5j2dNPWGGaXQDZiiI76z87cW5KOa3i0AlPAnO%2BNh%2Fs%2B5oWvcytRPtO4s5VIKogwkrtGIfgq4wYbADPcVVMbeomj2gJ8v0uTmG6zU375pO8HWvx81zZwBSTtm8g%2B2SWSt3dRmy%2F6f5itBqexWzEsiMtESKAjCi27XSwHGYtiiF58UW6Ek%2F%2BT95nVQt%2BqrTMv3yNDuXV0QNTiaE7%2BLij%2FFi4ZPM9tgP1etPJZlvhW%2F8rTUGXjLZtCZ2eyuIxjwOr%2BVSD4s0xb5ig0ZOcXRSoyl%2Fthcbm8ilIC74oISWw2d%2FEau32%2BXDxmpPlUnj2%2FS%2FiUPoxflUm3Iy4TLKjqYAMVfYfHLE027zlreeoRlP1IuaPKjDfsLtQtzp00ck7y3tTYE2qMKe1k8MGOqUBMq%2FRyETGP081n4GHAIvBbYZqmXm2rKxUt2TFKs346QU%2FSYDvPvcCgdXre%2F8xgCDv1goZYYfuw74qX67yo4F12Xg%2BztyZN%2FTXqNKtMiX8sQwRpEfJNrtavOvXnnGo7rSgFY5QkIcV7hSjYrGq0KMraA6KETfKI8rYd1ANQpxOWh0q9rl8Dtev8xN%2FBOz8Q97uBA8rryfS6DE8NdCRPAvZ7BxerPXL&X-Amz-Signature=5266fa6b2eaa43632d9c75de93a2016ebbbeef5c3ab0d753ab453b45aeae3d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFU4BUXW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI251bL%2FRlQXRliqbPd%2B6A5bXSIeve5mONTusDIa8FMAiEArbTFC6jwnC4PIJLhU9CirsZ%2F5%2BIrbQbrI47HVW6iyagqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP34fdKj%2Bq%2BMKV%2BwCrcA3hMX0hQlwFUtJCvvZpvFhJRVYLrU14GsZMcGbN%2Br7nnJw2vpXbvsT8rLwa%2BKkOVkcDs6yonUHpsfi4M32lTIxqn%2FH3XGbE90H3tygSXwbln%2FHrBMpar8%2BgJ7rIkeihF%2B9hO%2BjNggLymPBuO1ZrKBxHvrqxoJvKHS0jm%2BOLJMHj9X7TyJmTyh5wrvmqsE%2FS4Bg4je3qKPLS8isOhfFLlXf94NbueY8xAHag8HQOAlQjHzVRbNBv4UdzgsnG%2BFzkflYX8fr6mcMoeIiRRGUu%2FSZOaWooXZaxHIl3GpUHnrMioEfUe48rdQzNFVdRb%2FBWsUtJKgenxXbvxUks9CeKzgc%2FjyQiMSXKE37gRQJPezof9yCjygq6qRTEfW2tmo9Meuhrji%2FPfhISbbpji%2FWKHOSG5xTChF3NT2kjuNtwSZrwZG%2BNv6Jl5GeSvZ4hLVl%2BXK4zTVBYSDo7zgTr%2FDQxvrVygHMcgx8EsFiLg8pY7hEC8pveWaS9J12%2B9jUkBIh%2Fs7or68lqjHNHFTPd6x58pRssZm0p03t0Yt3zqH8EVWIUjVaCmKnZAzr1O%2BVmrPiuC3CrOSu7On5IzwwXdRVibG60Klwmu6oMsVJWYk9QJtm3EXGpbwlY29SJantifMLK0k8MGOqUB90Z5QXWDvQKEl2bSrVGMleRMD21eoHqAWstu0LWCnUFeIRUigYZvTjVs0nRy4zvioFxa0Dw%2FBTe4%2FBWStPkXbAttUvZOOYx6Gv4c%2FmJRHmGgaemrf%2FK3UAaOy7CtDJbNc%2BUxt6%2FxnrAOU5%2BxdqBiDAcSC4AnXvmxAguvGLS5D%2BZDUcHEShFPM%2BMsVskF1DUIxuaU4oa7fnqV5bVg6KhcCn0%2B7oLZ&X-Amz-Signature=188a4c9e7690e94fe2ebebffbe6656ea451a9833f4d1f3deda2172798d50fb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
