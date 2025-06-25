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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7QI4FR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIARq4NOz37hLuXUVlS3OCHN3fHisMB6f0wBRQBXJKMAIAiAY4wfjMxAW%2BZzjXb0qICNjXSIiYZxc%2Bzi7NVykJTE2FCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMs486wfIeZ4xB%2F6FZKtwDILxJDhVHPFoocPF8bCiGeVsdA9BDxcVS9Xy427RYhu7Bk3mBv%2BY8MgPvmC2yt03Movycb1OgM1tVumvIOwhhY8G8%2FvuuDdECF%2BALWIQKhDaigJXVX8lXcw1V6lagAUAfHb4bGPmfNlj2sA44xwWUqv%2FONcqEhaiHwW6I4ytglDMDdmD41cHuCMusRrjk%2FemM8jK29d1NfHfe%2F85EHoiLvsBbqMQEu9MZUfo%2FwYXcrLRqqaBRCFMSZdmMKTfzIWHpTuJ3%2FYcxQfVJWbkjNXl4rDNU0OE6keVoAdvAykaHM4BOjqoMCTXd%2F%2B6wqRDRWuBGb%2FaVRR%2Bi4uAy8vaXWpVoU4MTH9DldNiQewQePVK6L8A6BYoDjzqYlLKEiL3cmOYlyQ8cQksjQuVHfBQB4OtxyjqU5Tb2rLhygBx8MFCPNc6miMg8xXDG6uZ3knlTWxgRRjjnqYkFlaW%2B9E4HS1VihvFqBgNFP%2Fxr696cdC04W8VoQF4iyQ9ynqbCC%2BaeAsfFL%2Bt9HOh3poHNqn1vTYrFMhHmfudU28o7TRGNRlJMGvl1Ad8oCRLoqRYmxfS1B1FYwwjXzOZYPQy%2F%2F3zx9qDye0qyLaalxv7wQIrQ4UflvqMInBVl0OtbjUQ6HS8w4bnxwgY6pgE9JmarU5CNVjwmrTEHAcekQr9hOiG1rz1rohWjBSYuY0vyr3biYvliZbAGhTe2sCvC4GsuA36IbZBc3lnZoAldPSrcL8wiQXvj6FPVkYSTYg1j9FL9nfq8nktqoXURbS1IB1GnJtlpsj8KfQCclppPIR7VYMcpB5sf1vmhBOIlzZ19MpYuegFd%2BZHJef6tgeWEEj42AwIiUO30oloo%2Bqq7x9oOidop&X-Amz-Signature=bab595a72ded6089f55058e6f93a05c32228e9ffb1c433381ed05f85c2a517da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7QI4FR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIARq4NOz37hLuXUVlS3OCHN3fHisMB6f0wBRQBXJKMAIAiAY4wfjMxAW%2BZzjXb0qICNjXSIiYZxc%2Bzi7NVykJTE2FCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMs486wfIeZ4xB%2F6FZKtwDILxJDhVHPFoocPF8bCiGeVsdA9BDxcVS9Xy427RYhu7Bk3mBv%2BY8MgPvmC2yt03Movycb1OgM1tVumvIOwhhY8G8%2FvuuDdECF%2BALWIQKhDaigJXVX8lXcw1V6lagAUAfHb4bGPmfNlj2sA44xwWUqv%2FONcqEhaiHwW6I4ytglDMDdmD41cHuCMusRrjk%2FemM8jK29d1NfHfe%2F85EHoiLvsBbqMQEu9MZUfo%2FwYXcrLRqqaBRCFMSZdmMKTfzIWHpTuJ3%2FYcxQfVJWbkjNXl4rDNU0OE6keVoAdvAykaHM4BOjqoMCTXd%2F%2B6wqRDRWuBGb%2FaVRR%2Bi4uAy8vaXWpVoU4MTH9DldNiQewQePVK6L8A6BYoDjzqYlLKEiL3cmOYlyQ8cQksjQuVHfBQB4OtxyjqU5Tb2rLhygBx8MFCPNc6miMg8xXDG6uZ3knlTWxgRRjjnqYkFlaW%2B9E4HS1VihvFqBgNFP%2Fxr696cdC04W8VoQF4iyQ9ynqbCC%2BaeAsfFL%2Bt9HOh3poHNqn1vTYrFMhHmfudU28o7TRGNRlJMGvl1Ad8oCRLoqRYmxfS1B1FYwwjXzOZYPQy%2F%2F3zx9qDye0qyLaalxv7wQIrQ4UflvqMInBVl0OtbjUQ6HS8w4bnxwgY6pgE9JmarU5CNVjwmrTEHAcekQr9hOiG1rz1rohWjBSYuY0vyr3biYvliZbAGhTe2sCvC4GsuA36IbZBc3lnZoAldPSrcL8wiQXvj6FPVkYSTYg1j9FL9nfq8nktqoXURbS1IB1GnJtlpsj8KfQCclppPIR7VYMcpB5sf1vmhBOIlzZ19MpYuegFd%2BZHJef6tgeWEEj42AwIiUO30oloo%2Bqq7x9oOidop&X-Amz-Signature=5c42525a5e10ec5811b83acb9665f9b1b8f2d2f23d66639c9cf1c401b1b4a61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7QI4FR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIARq4NOz37hLuXUVlS3OCHN3fHisMB6f0wBRQBXJKMAIAiAY4wfjMxAW%2BZzjXb0qICNjXSIiYZxc%2Bzi7NVykJTE2FCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMs486wfIeZ4xB%2F6FZKtwDILxJDhVHPFoocPF8bCiGeVsdA9BDxcVS9Xy427RYhu7Bk3mBv%2BY8MgPvmC2yt03Movycb1OgM1tVumvIOwhhY8G8%2FvuuDdECF%2BALWIQKhDaigJXVX8lXcw1V6lagAUAfHb4bGPmfNlj2sA44xwWUqv%2FONcqEhaiHwW6I4ytglDMDdmD41cHuCMusRrjk%2FemM8jK29d1NfHfe%2F85EHoiLvsBbqMQEu9MZUfo%2FwYXcrLRqqaBRCFMSZdmMKTfzIWHpTuJ3%2FYcxQfVJWbkjNXl4rDNU0OE6keVoAdvAykaHM4BOjqoMCTXd%2F%2B6wqRDRWuBGb%2FaVRR%2Bi4uAy8vaXWpVoU4MTH9DldNiQewQePVK6L8A6BYoDjzqYlLKEiL3cmOYlyQ8cQksjQuVHfBQB4OtxyjqU5Tb2rLhygBx8MFCPNc6miMg8xXDG6uZ3knlTWxgRRjjnqYkFlaW%2B9E4HS1VihvFqBgNFP%2Fxr696cdC04W8VoQF4iyQ9ynqbCC%2BaeAsfFL%2Bt9HOh3poHNqn1vTYrFMhHmfudU28o7TRGNRlJMGvl1Ad8oCRLoqRYmxfS1B1FYwwjXzOZYPQy%2F%2F3zx9qDye0qyLaalxv7wQIrQ4UflvqMInBVl0OtbjUQ6HS8w4bnxwgY6pgE9JmarU5CNVjwmrTEHAcekQr9hOiG1rz1rohWjBSYuY0vyr3biYvliZbAGhTe2sCvC4GsuA36IbZBc3lnZoAldPSrcL8wiQXvj6FPVkYSTYg1j9FL9nfq8nktqoXURbS1IB1GnJtlpsj8KfQCclppPIR7VYMcpB5sf1vmhBOIlzZ19MpYuegFd%2BZHJef6tgeWEEj42AwIiUO30oloo%2Bqq7x9oOidop&X-Amz-Signature=2bc76f6128d9c7ff31c8b056c97f0a692a5cafafa7242fe931aa816664e7cf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJMQZCDF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDIREwAnlHi1neCra8gNrxB37f%2F0q3HSmYeclA5MS9rSAIhAOvnPdlO6hE8h29CQfrwkLZBAgQ05o6j8xPtqwr4xWOWKv8DCE4QABoMNjM3NDIzMTgzODA1IgyuYHywUjCJxMbTPG0q3APY8Yhh77I6oPwzh1LhcmyrThYm2YlNe7JZG0BdTZcZkEYQWA8H%2FxHb1BoooxqAUP2uDg0C5n0WV0%2B9%2BQ417gnE5dnbZ4cB5iOyvLYw3rtvDsAwiH3CTUopl9Udg%2FOwn1KLsZL35f6nVixcT2aq4iXPnNRaCOxtnKJFVvgYYVHYOdkF4hf9Pjh9kixJbPT964tqn00ZqrsEF6QmNvRD%2BEz4FAwp7tK6QPYeAkDIPKLvtA5EXlBO%2B63NX2SNHoK%2BlSupVWUTFOdlskY0PENn1uUKO1MQBjh8js3chEp6kgti3At1Lba3vzhgZV5SM9pTpV69RJKcfLT2bIsany0ciEOsPLIR5NFTN6bD6RMdgjvjsJvJsjqLXb0bNYyKSja%2Fai%2BHPaEzbQ5KQyru%2BCKHo6UDRfKn3QMSzRuQ6fePn%2B%2FljPNr4z91OyYgJHI0bRadGPxcq0oBlLJ3uo%2BEEHspk0ofMpT%2FX3d9vxYftIv4PRYc%2FxziixfT41XSJ3d82CCwYbWJEXG5UNsTiIqMCBFzprrAKdkLKjgY6zmPNN%2BqV9ICcEva1MAR72%2Bie4wXCdIvip9JIlp9H1ZaXWFCMOjqtCQfvR2Cw9rK5w%2FPC8%2FDUc0QPYqmtt44STLsNSC4lzCxuvHCBjqkAcdPv58KYAgT5lYjNKGxGOX6PzhdzJR0CvqGzy65k1GpzFJkHXrPgxZsYJOu6fzXBfjsYpcHP3KORUyCFJbuBj2ib%2BkD5uTCsfAPUb3fcF%2FwjfcfB3dUstJ2k3yK%2B45bMgri%2Fb67YuDvgGneF7bt5Hl7fSlbSRmUvlyrgpNbOzlqtoOdEYpBqK%2B8PD9Xv1Pj0AsesbCrsb1G9cZVC6ZkDPvvmq4z&X-Amz-Signature=5ba7fe0b8415c6bd9d30c8532e5901237abc6248c707ef44b7e050cca41432cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HXDTCV2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIE8KbXrd9MMylHADiSLg7%2F6RUan7ZqcVIsIe8uVjQLiqAiBcy%2BEmkEBsN5YJruyg9OIEgoePHzc8%2BgZ%2FAplBOzpfqir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwcOZDbh1J8RFyn78KtwDEHw9UBsZDqdy6vS26qRc88G2QiUMZMLy%2BuigdKQvbBowRXXZDS6Lg%2F0IaaAXQt8zRavkXi1ibLICBrVmpntPhYyeAruEnfECn%2Bn2V7tRWSVjSk%2Fj839iBnT38G1L%2Fkv0Kb4g8Vir7urA%2FRht1K%2FuAFFWwdUbeUnO8miaVr4MuTGP1wFcCizCxz1skB24gmGRGXckHDtcGKctA%2Fp4vzl9%2BthxlSxKhW%2FuewrYj8U5r6jiZHCz3nlAaprVo2AySRms%2BC0piDWlo%2BEn7FBPvjmi43Trx2Yj0SREVTqT7AOnHhZ8VEeUsw3ZcVCTS2qesPKRItLw%2FcUgUk1tdw1jc%2FYO6ihp9NhjewoT7I8lRQLqxBfBGCHyYSYGNf8qj6halb%2BE5TUsrzAATiZPAEGlgUsusmEz6mvoIvPVticEUAW88CEyIyKgD%2B4%2BmzWgxFoSoTNRc4OB9Q%2Bw735PncNc%2F9MR5kURa0MyVvYxLx2PWKGrReSYrAhrO8%2BAPZI2JRgkuQHQ8YkqWIeq2PbGoi1fsAmpzVuqRd1OPBvodZm4MiFWCY4%2B0%2Fcw01QMg%2FDsauqbZXDq9BFfQURYab%2FPG4R1CUY6zsWhz4dfzBmJn7gtBMl98z%2FwCfNUDjhXVdyn1rYw1LrxwgY6pgG4w2H%2Beh2XSxjc0nu5HE2D9%2B2o4laHIpM%2FB%2BwKceTV%2Bg1m9LC6CMDgsbp%2FX%2F5eEurUxhUsoz4BFhM7Vp2SaM4Yb4hQAIedRHNLZSF5xipgV0pN3QmJonksJS%2FPaE%2BOLjyuV0CTnG%2FQqgFYQpOzduYZAqIEeC9p9Af8tIz9YSDWosdUIobKG4wucIS%2FiwoiIEpl549PwahclcePWBsIjiN9XNzb1UfV&X-Amz-Signature=cb7acc5bc28d691b535b2e8df54c500c0ea0194f138f474fbdc97581115293f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7QI4FR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIARq4NOz37hLuXUVlS3OCHN3fHisMB6f0wBRQBXJKMAIAiAY4wfjMxAW%2BZzjXb0qICNjXSIiYZxc%2Bzi7NVykJTE2FCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMs486wfIeZ4xB%2F6FZKtwDILxJDhVHPFoocPF8bCiGeVsdA9BDxcVS9Xy427RYhu7Bk3mBv%2BY8MgPvmC2yt03Movycb1OgM1tVumvIOwhhY8G8%2FvuuDdECF%2BALWIQKhDaigJXVX8lXcw1V6lagAUAfHb4bGPmfNlj2sA44xwWUqv%2FONcqEhaiHwW6I4ytglDMDdmD41cHuCMusRrjk%2FemM8jK29d1NfHfe%2F85EHoiLvsBbqMQEu9MZUfo%2FwYXcrLRqqaBRCFMSZdmMKTfzIWHpTuJ3%2FYcxQfVJWbkjNXl4rDNU0OE6keVoAdvAykaHM4BOjqoMCTXd%2F%2B6wqRDRWuBGb%2FaVRR%2Bi4uAy8vaXWpVoU4MTH9DldNiQewQePVK6L8A6BYoDjzqYlLKEiL3cmOYlyQ8cQksjQuVHfBQB4OtxyjqU5Tb2rLhygBx8MFCPNc6miMg8xXDG6uZ3knlTWxgRRjjnqYkFlaW%2B9E4HS1VihvFqBgNFP%2Fxr696cdC04W8VoQF4iyQ9ynqbCC%2BaeAsfFL%2Bt9HOh3poHNqn1vTYrFMhHmfudU28o7TRGNRlJMGvl1Ad8oCRLoqRYmxfS1B1FYwwjXzOZYPQy%2F%2F3zx9qDye0qyLaalxv7wQIrQ4UflvqMInBVl0OtbjUQ6HS8w4bnxwgY6pgE9JmarU5CNVjwmrTEHAcekQr9hOiG1rz1rohWjBSYuY0vyr3biYvliZbAGhTe2sCvC4GsuA36IbZBc3lnZoAldPSrcL8wiQXvj6FPVkYSTYg1j9FL9nfq8nktqoXURbS1IB1GnJtlpsj8KfQCclppPIR7VYMcpB5sf1vmhBOIlzZ19MpYuegFd%2BZHJef6tgeWEEj42AwIiUO30oloo%2Bqq7x9oOidop&X-Amz-Signature=8ee8152c950b1e46fcb938468463b6b68864c3299663234393557fbf1340597c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
