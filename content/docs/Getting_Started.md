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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYI7JBD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDN2k8sqk8MqU%2Fulns%2ByMtlM%2F9X4Ye5PKyrCYFuCJPWZwIgK31CcLLQdYJFL9zz7%2BIxFyMDQNKdkvoICegsZEdUC2wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw%2BTYLRkLZEO5wk3CrcA7hW6X8xHn6yvK2bWGfStzt5MsnXFotpAgfxcKCP3YoEQlDLuLETaxO0cnGzI5Ek9HQ0Du%2BxtzjdgnJpDUZyI7Z35EPvDGDO3iNgUCt0nPw3clRBAcQ3sCy89O7PxBtzcfkxqYk503TcyN0lA1ibdbuGgEFbaNWfnR1ni6Z1SbmuMmne7d%2BLasIkO5MEqzgu%2FATvxpGqvEKV3XY5CZdU%2FZJoK%2F2Se4O7lRn4%2BlyvzyQfZxYd%2BkI5F5IlxeOoCvFza5PWtI3e5hZCQp2bVZuzVnVKvj2J4yX79aWu9pRzI7RRQfR57Xjy0kV0CtmGSjhzEcFvGF9CB5ELOLz92G2DsIwmjHu56jmdct9EwL3mhYBQIkZn5wv6wUdNMRqSxrTC%2Fr7hIdMkCxUAAr7e%2FrProqF2Y5%2FZFhMm4V%2FCUO5sRS7zJtKH3sMuy%2F0udTPXwYxxz8d3Jo%2FyD9PLgvHL1%2FAR%2FAqTxeAHYmGFMJF2UW3mwhjhUQR%2FDHVic6WKNdgLrx2k3WCXVWSghOH2ybCT9zvLqJVMmIv2Lx5cfunRjTiNf9DVISczgLSnljrrcIpwCujlsG8LdZVz0od3Pr0whnpAvroV1OchikL%2FzOrTgaoodG66OmFT4Of7YYhFe2NhMOju%2B74GOqUBGps4OetgLNbDgFaDcoMZFIFro%2BV0LLeVTU3tsZ2CrhA6YBBeUdHTXMlf%2BHkGocIoUgK7SjrHlMQkc6RzIimiPIfNOqmmd1iUYBhIlNysO1pmE3G6NyMdwIeWezsS%2F9zoD8FFdxP3W5tgNT0l8RXvQmFbmYpTG3t3Wy8FxzixbVPbmWE95PMtpoj1R2PasECKt3qy5Eov%2Fq9DFYSlQV63EEPd8M34&X-Amz-Signature=9856d634b22cd53107dc6a11bacae3d91f0a58b18613df90092c2cbac1d0d051&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYI7JBD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDN2k8sqk8MqU%2Fulns%2ByMtlM%2F9X4Ye5PKyrCYFuCJPWZwIgK31CcLLQdYJFL9zz7%2BIxFyMDQNKdkvoICegsZEdUC2wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw%2BTYLRkLZEO5wk3CrcA7hW6X8xHn6yvK2bWGfStzt5MsnXFotpAgfxcKCP3YoEQlDLuLETaxO0cnGzI5Ek9HQ0Du%2BxtzjdgnJpDUZyI7Z35EPvDGDO3iNgUCt0nPw3clRBAcQ3sCy89O7PxBtzcfkxqYk503TcyN0lA1ibdbuGgEFbaNWfnR1ni6Z1SbmuMmne7d%2BLasIkO5MEqzgu%2FATvxpGqvEKV3XY5CZdU%2FZJoK%2F2Se4O7lRn4%2BlyvzyQfZxYd%2BkI5F5IlxeOoCvFza5PWtI3e5hZCQp2bVZuzVnVKvj2J4yX79aWu9pRzI7RRQfR57Xjy0kV0CtmGSjhzEcFvGF9CB5ELOLz92G2DsIwmjHu56jmdct9EwL3mhYBQIkZn5wv6wUdNMRqSxrTC%2Fr7hIdMkCxUAAr7e%2FrProqF2Y5%2FZFhMm4V%2FCUO5sRS7zJtKH3sMuy%2F0udTPXwYxxz8d3Jo%2FyD9PLgvHL1%2FAR%2FAqTxeAHYmGFMJF2UW3mwhjhUQR%2FDHVic6WKNdgLrx2k3WCXVWSghOH2ybCT9zvLqJVMmIv2Lx5cfunRjTiNf9DVISczgLSnljrrcIpwCujlsG8LdZVz0od3Pr0whnpAvroV1OchikL%2FzOrTgaoodG66OmFT4Of7YYhFe2NhMOju%2B74GOqUBGps4OetgLNbDgFaDcoMZFIFro%2BV0LLeVTU3tsZ2CrhA6YBBeUdHTXMlf%2BHkGocIoUgK7SjrHlMQkc6RzIimiPIfNOqmmd1iUYBhIlNysO1pmE3G6NyMdwIeWezsS%2F9zoD8FFdxP3W5tgNT0l8RXvQmFbmYpTG3t3Wy8FxzixbVPbmWE95PMtpoj1R2PasECKt3qy5Eov%2Fq9DFYSlQV63EEPd8M34&X-Amz-Signature=a429d3b941721050d16c14868abcfe4cf8d14b768d3e187d45edc113cdb28b55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXO4XEN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDisLXCgiBw%2BndqxJyE0y%2F%2BYDEk7%2FL0JnkqnZ6gtJ%2BHqAiAEogOhG0%2B%2FzUbrSpBCFIefSNGihGc1QLGreSdyKtYFTCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWugcq9iXexr5hCEsKtwDTmei4j3vJEZTNEEUO%2Fe6rjsw3WA7tCYrHlqQffRkdiMBIU3uMUTrddm6gcX8aRn%2FyYl9VKN7UuBL6PIpzOWhqks85WSjAeF%2FaJJ%2B769KTIaezqidycYYPMt4TCVlvsR9giNLC0lPdPSalHQcyKxxuK0UF3OoscO58wSsoEjwvJkfqECmvZNMvn2jGn3xm5eLDGxGoa3tONpoZAT5mFm3dN7WU%2BYlpajaKJCcLTbkIBecwSKPjyHl2NSrQ9etadheSOXZ7armVezhgdPaNpTbKrnE2E6RdS7OZGMvASgEzufidgLVrPYRIuRtzj8x4ydiLQMDq7MTZ4eTC9ltGXnF%2FAcNOCe2zvJzx04N3uYr3v%2F6DyE7JgUKZuOOpKw5QEIE%2BHJmGyjn%2B7HGdfePvorCrnhETbDFrNHaPR9uYDihaLDfGt4p%2FTJjCEToZVNh1wcasGPlQ4Zf6jo1K04CZBfrK9BkLv3wvUZ3nwWom9ZF0c9SEoZ3SNJdIhcWxX9xIyNwwDrVIFkGZSSiF9Dmyy8A8CQ9cAJisgJYmgFLJbvDzK2GXzGUOEDVwp9NsDrvMlqM%2FYlSk37Nq4Q9bC2MD%2BRamNvkQ%2FbSc9gM3vh5pHDjmeEsoEgvZxrXWoRisAswme%2F7vgY6pgGowjkDRajXEB60X3OgsdfT4%2Ft5SwbQYqIiqii0ikCsWGeacm6cc82TGPWwz2VuM8qXyLh5iOqTqygSNdEQzvNkLYDoFySjnxwCzIgPKQTU%2B5XYBYOp2cjDzZa2z7Xg3q4fa6ufYlm6UskF5U%2Fsm1UBvbq3x7E0T%2Fw5YGyjfXDLP2c%2BwTDxRaCocCzjwCHNkv3OIC2fVGKl06AIy4ZopCoSGCOqAvqa&X-Amz-Signature=eaed5b66d0a06b604348a87085e1a36e578f23f5419ba7c8db31b391de0dad9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTTGBO4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMjhrAAcasprtcI4Re%2Bkjw4O68DzE%2BAGs9fT1UH4DCaQIhAJtAJO%2BBV%2BumRuyX1TAAZMxW66Kd5%2FUBU92lSFhjJs4iKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycN%2BSqJVkl625f6gQq3ANo6HCP3cTy%2Fpt65v37V6Mr6wqWK2fJwUsB0GmUCvPYf4ztyvrV4cpxDVCFOfOnkXdyduXK2VqUkgPcVbvpDCtU67Okk24nTvwI%2BYCUWUgqDQ8%2Fr%2FaT%2FzjupFCKKQNjbjcoXVxyjCOofXTSiqfX2GHZRe6oZe3o7XrDNbw9kyhlvSzF5YoA4jRfX2nhVatYC0tcFx%2FS5nKzEuYjyAmLZs5KD%2Fmz%2FKC8oUIvUMhzhjOBx8L8bJoWdzditNIM8iLWpBtEAohXYdOpZEVTdy2LwKEfsa8IeIjYyk7wjIQCldDKO4TPKvynkDLnC5rBwQESUzoMCxKkRbF7yl6a8OfGdT6xf9wCR0nslhqcn1hwn9n0sn9SpMt4szZ0VoGkNn%2BlFxXuwYsblOaSfCS62vvkp2epHtAFylDd4mi9zQdV64mY%2BRzsjENTlWBj48dawC4zjhZ1y%2F7%2FRzYvgkxCKURX5A%2BjDPEBf5WP6xQwnVugGdvjJSYMZiu6gDFgjOHsmNWFKcOac%2B7%2FIdDg3P7VXphv9vPX9mWuppR9XkILGzNOwX3ptUswZxOqrhi6l1872lXNIvIQ2XpgeK0vbsn9yO5V%2B9gWarxG9eUnYrpuqaJ5DslsvmknCLQ3wYM%2BcZuncjCr7%2Fu%2BBjqkAfJiWgUBUeBy528hgG46Fy4DUxdVnTc3tkCjr1auHQNl2fsNfd1REuGC4w5tX9FZdbywKemcb2rgKm9l9J7NMw7on%2FUKsA4vWIKSgvlYlwEyzJvyY8Fa3%2FpkrzbYdm5L29dsVA2cwmR1jWHzC%2FTsClfOU8hQm%2B1hZoIIGCMkCkbR6a7l5OYEnnD969sknrXCTAlGTU3hIpr73eXhPmiMaXxFoQti&X-Amz-Signature=7b6075ce0b215333519d929b32cc1ea25233e0c5149c39a11cc26f55f2c7bfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYI7JBD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDN2k8sqk8MqU%2Fulns%2ByMtlM%2F9X4Ye5PKyrCYFuCJPWZwIgK31CcLLQdYJFL9zz7%2BIxFyMDQNKdkvoICegsZEdUC2wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw%2BTYLRkLZEO5wk3CrcA7hW6X8xHn6yvK2bWGfStzt5MsnXFotpAgfxcKCP3YoEQlDLuLETaxO0cnGzI5Ek9HQ0Du%2BxtzjdgnJpDUZyI7Z35EPvDGDO3iNgUCt0nPw3clRBAcQ3sCy89O7PxBtzcfkxqYk503TcyN0lA1ibdbuGgEFbaNWfnR1ni6Z1SbmuMmne7d%2BLasIkO5MEqzgu%2FATvxpGqvEKV3XY5CZdU%2FZJoK%2F2Se4O7lRn4%2BlyvzyQfZxYd%2BkI5F5IlxeOoCvFza5PWtI3e5hZCQp2bVZuzVnVKvj2J4yX79aWu9pRzI7RRQfR57Xjy0kV0CtmGSjhzEcFvGF9CB5ELOLz92G2DsIwmjHu56jmdct9EwL3mhYBQIkZn5wv6wUdNMRqSxrTC%2Fr7hIdMkCxUAAr7e%2FrProqF2Y5%2FZFhMm4V%2FCUO5sRS7zJtKH3sMuy%2F0udTPXwYxxz8d3Jo%2FyD9PLgvHL1%2FAR%2FAqTxeAHYmGFMJF2UW3mwhjhUQR%2FDHVic6WKNdgLrx2k3WCXVWSghOH2ybCT9zvLqJVMmIv2Lx5cfunRjTiNf9DVISczgLSnljrrcIpwCujlsG8LdZVz0od3Pr0whnpAvroV1OchikL%2FzOrTgaoodG66OmFT4Of7YYhFe2NhMOju%2B74GOqUBGps4OetgLNbDgFaDcoMZFIFro%2BV0LLeVTU3tsZ2CrhA6YBBeUdHTXMlf%2BHkGocIoUgK7SjrHlMQkc6RzIimiPIfNOqmmd1iUYBhIlNysO1pmE3G6NyMdwIeWezsS%2F9zoD8FFdxP3W5tgNT0l8RXvQmFbmYpTG3t3Wy8FxzixbVPbmWE95PMtpoj1R2PasECKt3qy5Eov%2Fq9DFYSlQV63EEPd8M34&X-Amz-Signature=fc0cad1eb78cc61da89f831a4774aa55e23b2f3969ff4e9df223574ae921cb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
