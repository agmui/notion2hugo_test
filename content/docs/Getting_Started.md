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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJGODW7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNZAhEazvR6UkXXmeH4Mg3xjitbSl3UPXOObQegRf4AIgAbfcVvg7EIOdPW%2Bkrqb2mZIdRKvLgUXepbAEzxUO7t4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARzxbsfNI71Hl3WAyrcA9N6G4bNAb3Nj5BkjZHK6BvNpMZvLaNG21tjYp6rQnXFnQih8kgdyQf7gCTWWh3n0CCAYhXwsIWj0%2FAh4vLbj%2FQvf00E08dhvWi9k57UeDmTwjeLmw%2Fx6v5ckjRYNxef9HhimiY0qlq4RjLVqw26Q2wQzTz54olvCXcGZZv6qwuS1%2FaQFP0SQrTjsW%2BbNe9vZSsshzGJvivsvfknAIHeLstfiSjUEUWZlAm%2BpzjIjY5z3kJ0rsabANIP2FVHWac7DWcd1RvGGj%2BIMn1B3rbbKloYauzCqE8ig6rZcnrxy77%2FpNky0Kbr%2BsFG79XmXb366NS2JflbsGeqP4wPdp%2F9dU0B6F0Xu09p3emA8nzXWOhq62Xr30enXLI6OKSN2NvbRxLmoBJ632h6oGFo5EMjy%2FvcIWuW1Hdrw82DgytU2otLYaWchIkFMmcyD86rcMll3PQlkQafrHcrW4%2BunBzjYfT70yF6P9TB%2FwJK3vU1wXpIzEUW3xALjYwGK%2BWirhVBkjHtle%2FbdpN3L15%2FbaqnPboj2QuObVzD6sIk3CLATfO9C%2BmZNlD%2F8gbxe0UrtufUbcRYr5nExF6uoDMzyXWVANv2koJ%2FvgtdOayl%2BCmFgmAL2AVV5LYf699iP4qNMI%2F2q8QGOqUBWWs%2FRI2m%2B%2FedZhVk%2Frc1otzX1QpGyVqPU%2F2uobUs6R%2FtUqPRrcQ46zwnYhIJvjWeIVdBzsoHcuUsOXdRR2z983CnnwUVDOfj6%2BxMikxTem0W0CUWK3i5ZCOMBV%2Fg4Wv%2FBWDubtjafZWNOpq7Ja02GFb2w3mSaRT7P%2Bttd8ZWUViycWJVZhNETbL671lTi0Yfj4W7Zg%2FFs%2BNXQiohGtJ9SvNx%2Blvw&X-Amz-Signature=92189d0c52987dc29bbda948e4c5ec582dffb69f613052b097c76728ea6fbeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJGODW7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNZAhEazvR6UkXXmeH4Mg3xjitbSl3UPXOObQegRf4AIgAbfcVvg7EIOdPW%2Bkrqb2mZIdRKvLgUXepbAEzxUO7t4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARzxbsfNI71Hl3WAyrcA9N6G4bNAb3Nj5BkjZHK6BvNpMZvLaNG21tjYp6rQnXFnQih8kgdyQf7gCTWWh3n0CCAYhXwsIWj0%2FAh4vLbj%2FQvf00E08dhvWi9k57UeDmTwjeLmw%2Fx6v5ckjRYNxef9HhimiY0qlq4RjLVqw26Q2wQzTz54olvCXcGZZv6qwuS1%2FaQFP0SQrTjsW%2BbNe9vZSsshzGJvivsvfknAIHeLstfiSjUEUWZlAm%2BpzjIjY5z3kJ0rsabANIP2FVHWac7DWcd1RvGGj%2BIMn1B3rbbKloYauzCqE8ig6rZcnrxy77%2FpNky0Kbr%2BsFG79XmXb366NS2JflbsGeqP4wPdp%2F9dU0B6F0Xu09p3emA8nzXWOhq62Xr30enXLI6OKSN2NvbRxLmoBJ632h6oGFo5EMjy%2FvcIWuW1Hdrw82DgytU2otLYaWchIkFMmcyD86rcMll3PQlkQafrHcrW4%2BunBzjYfT70yF6P9TB%2FwJK3vU1wXpIzEUW3xALjYwGK%2BWirhVBkjHtle%2FbdpN3L15%2FbaqnPboj2QuObVzD6sIk3CLATfO9C%2BmZNlD%2F8gbxe0UrtufUbcRYr5nExF6uoDMzyXWVANv2koJ%2FvgtdOayl%2BCmFgmAL2AVV5LYf699iP4qNMI%2F2q8QGOqUBWWs%2FRI2m%2B%2FedZhVk%2Frc1otzX1QpGyVqPU%2F2uobUs6R%2FtUqPRrcQ46zwnYhIJvjWeIVdBzsoHcuUsOXdRR2z983CnnwUVDOfj6%2BxMikxTem0W0CUWK3i5ZCOMBV%2Fg4Wv%2FBWDubtjafZWNOpq7Ja02GFb2w3mSaRT7P%2Bttd8ZWUViycWJVZhNETbL671lTi0Yfj4W7Zg%2FFs%2BNXQiohGtJ9SvNx%2Blvw&X-Amz-Signature=f997e22b07a9851e6b1b55ac097de0b0f8ee51a013f87d9b72c35db4bde8205e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJGODW7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNZAhEazvR6UkXXmeH4Mg3xjitbSl3UPXOObQegRf4AIgAbfcVvg7EIOdPW%2Bkrqb2mZIdRKvLgUXepbAEzxUO7t4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARzxbsfNI71Hl3WAyrcA9N6G4bNAb3Nj5BkjZHK6BvNpMZvLaNG21tjYp6rQnXFnQih8kgdyQf7gCTWWh3n0CCAYhXwsIWj0%2FAh4vLbj%2FQvf00E08dhvWi9k57UeDmTwjeLmw%2Fx6v5ckjRYNxef9HhimiY0qlq4RjLVqw26Q2wQzTz54olvCXcGZZv6qwuS1%2FaQFP0SQrTjsW%2BbNe9vZSsshzGJvivsvfknAIHeLstfiSjUEUWZlAm%2BpzjIjY5z3kJ0rsabANIP2FVHWac7DWcd1RvGGj%2BIMn1B3rbbKloYauzCqE8ig6rZcnrxy77%2FpNky0Kbr%2BsFG79XmXb366NS2JflbsGeqP4wPdp%2F9dU0B6F0Xu09p3emA8nzXWOhq62Xr30enXLI6OKSN2NvbRxLmoBJ632h6oGFo5EMjy%2FvcIWuW1Hdrw82DgytU2otLYaWchIkFMmcyD86rcMll3PQlkQafrHcrW4%2BunBzjYfT70yF6P9TB%2FwJK3vU1wXpIzEUW3xALjYwGK%2BWirhVBkjHtle%2FbdpN3L15%2FbaqnPboj2QuObVzD6sIk3CLATfO9C%2BmZNlD%2F8gbxe0UrtufUbcRYr5nExF6uoDMzyXWVANv2koJ%2FvgtdOayl%2BCmFgmAL2AVV5LYf699iP4qNMI%2F2q8QGOqUBWWs%2FRI2m%2B%2FedZhVk%2Frc1otzX1QpGyVqPU%2F2uobUs6R%2FtUqPRrcQ46zwnYhIJvjWeIVdBzsoHcuUsOXdRR2z983CnnwUVDOfj6%2BxMikxTem0W0CUWK3i5ZCOMBV%2Fg4Wv%2FBWDubtjafZWNOpq7Ja02GFb2w3mSaRT7P%2Bttd8ZWUViycWJVZhNETbL671lTi0Yfj4W7Zg%2FFs%2BNXQiohGtJ9SvNx%2Blvw&X-Amz-Signature=dc074b3d60a71e67d4e5b6afec5b7a5080efa223857ce2f7f99ba603cea561d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKZD5GP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFHz135daoOHkqvr6ZPE54%2F5n3XB492xh4wz9hJOYy2AIhALFH%2B7b4Lkd0jobAcnGyqUFgslzXPfLZrFR43R4Py2XWKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14WDrzYryclXFz3sq3APv4afxVB4GlyeygKlngUksveIfPMKsSBLG406wUU2YKfb3S6VlaJsIuvuvEA3du6PoAPyR4vhb%2BaCfw44S3SsJQnfjcLdhh92Hm0TfizEkugDRFKkBEzy2ZaOAr3j0I3G1a90%2FKvTj7RprUm5U4Y13Lmjgo49pW0sj9j17i4LnEsHA%2FsGOXHlc13GF6sfpNtRT2uNUnBlMlbjJw%2BZGtISlaDWAfgiEWdJYzk8L4JJUs0XPwS90T1wGkdsmgPcTeoOWZ2B3KF5FHAO5aq37UX5M%2F0WVpJ9z5yhcImH5qgccCIFzvzbqsxtclxwECpf68PwaZAhusdZONPdcsIBCl%2Bz%2FtnfYHqlnz29VLnMcCaFTVcaunDZvRXihrXuAXZZAvvCXtVNvMyH4GYJ0XIIY2trfHSddVHn2SRnIW9DaXDAUeudJ8x1L%2BfwJwO6MOBUYMNLx83NpI7eJscuRP1FLsn%2BmIZdcGpqvFIvbMdu%2F7rlZcVxRp95d4GkoyV5oDX2viy%2FzuLwTksGUgnuVW6iNfYM7mVr%2BbZsr9NN9vWgVFa7IcOj6i0DsUTokEEbh3zXQa5E8JcCsJJZnqTULlfWiYCVxfMh8HZKyVXwFMbKzFUL9IZ2%2Fkk0OqAnclh38hzCk9qvEBjqkAWVDyRXNDRtDTJWMjli5TelEDBIzTrdEdW5RlrCjHuQC2pL9xEAtWJ99aL5UbcoE4wIVI4fM2BLAZld3vbwk4zlHR10MthIdc6ncNurcwA6h27m1sWclWsNoVDNUgGK%2Bm0DLqg0fMPr810BoXI24Ex%2FD78UJV1NP1ICTsMOjeEl4TvCodm7Nj14Vfu4Xfu8N%2FWl7jWM%2FyYWtsoUExWpi2xYm4jlc&X-Amz-Signature=02e45e2bc02a097b3deec3fe0482ef8b075b8d2534d8b03c5d2f65edf0b7d7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH734XYL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6vSL0%2FYhdl2Ac3RMsu7zLbePDoNTTHTBR1IHYVlrFSAiBw9%2BxdU6uC4c76dHuIlmgP2h9%2BOxM8Bfz4stVyNSfCYiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKn%2Bm6CarH0wzvO4LKtwDLTLKuRevKARp9sPOkiIuIuGkg3CCVGTUZ6erZKhK1Cx8ktvDGzksM%2FxS7Gm7HGuihFgMNhHgYB3Cyr9fiqu3WOseSBn3Vt8L4bpBtFArb7V7YbZNcXnuZCCFRwBFm8Fi3Wry3mdtylHlQ7%2BEwySg1CBg3u3c3%2FCTsCKt61CYOSMA1SIkTjLFs5SSIHZINJf6jzAfdnPAIHpAhOIsbBzlAjuRqUTvM5OTJxuFsiN98LQNDa%2BXiA3zFM2Aww2cgvZBBeYsibRHAjqowyRnirJZHz33JQC%2B4ND50XRvJGBpM0Ss8rlbAhMxsqFMH4sN0cN8wKLMZKhuJxmwzb9%2BHafSVmOVpF3RaqsppQNDphB8CEr9KvpB%2FxmwLqCgU2jOvQtlCSpd%2BwEcXpMnHK%2FQBfssH9KmoFpcSp3a0GY3VHHOqO2aCquwq3wIwXablSXoxkMtriNPBgs1szkKxw7CNpC8yrNaVXdlpqVtdELLHs0KX4IgKZjeyGLEGhEVfVOjvo3YExJ3qsnxKYLI%2F0Kl3PZ%2B4hihfztSLeOFwqWNepyIjPljzJsIKiFxodJARnyKQtZ47RDZmS5KtiJT5zETD9syTUaEif24UOz5ZoIhVrkypSW5j6x7ObvpOEGjvC4wkParxAY6pgHP4L8mYnPh1mvwGFCTh2F6prwBd3%2BZ8XeZeUp%2BHLjsUxd476Rgz4bnWwCEkMUJDSNWvGjHvYw19z73SkVbqoRb%2B2S9t%2BfKYI4NRe8jIJRPsfHp%2FnpZ8ixqcShCx8kkzSbQbI9gdMxvW9YZIss1zt8IXiuKG8vZJNXzYTndimiVxNPuQThR5Bl6eQFVsl%2Bi9xiP93W6Kj6CjwkngQ986mAZFhdezK83&X-Amz-Signature=5d1d6a17063de12f0d3c0f7e9132b91533b56532612a5f750580f6a709760c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJGODW7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNZAhEazvR6UkXXmeH4Mg3xjitbSl3UPXOObQegRf4AIgAbfcVvg7EIOdPW%2Bkrqb2mZIdRKvLgUXepbAEzxUO7t4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARzxbsfNI71Hl3WAyrcA9N6G4bNAb3Nj5BkjZHK6BvNpMZvLaNG21tjYp6rQnXFnQih8kgdyQf7gCTWWh3n0CCAYhXwsIWj0%2FAh4vLbj%2FQvf00E08dhvWi9k57UeDmTwjeLmw%2Fx6v5ckjRYNxef9HhimiY0qlq4RjLVqw26Q2wQzTz54olvCXcGZZv6qwuS1%2FaQFP0SQrTjsW%2BbNe9vZSsshzGJvivsvfknAIHeLstfiSjUEUWZlAm%2BpzjIjY5z3kJ0rsabANIP2FVHWac7DWcd1RvGGj%2BIMn1B3rbbKloYauzCqE8ig6rZcnrxy77%2FpNky0Kbr%2BsFG79XmXb366NS2JflbsGeqP4wPdp%2F9dU0B6F0Xu09p3emA8nzXWOhq62Xr30enXLI6OKSN2NvbRxLmoBJ632h6oGFo5EMjy%2FvcIWuW1Hdrw82DgytU2otLYaWchIkFMmcyD86rcMll3PQlkQafrHcrW4%2BunBzjYfT70yF6P9TB%2FwJK3vU1wXpIzEUW3xALjYwGK%2BWirhVBkjHtle%2FbdpN3L15%2FbaqnPboj2QuObVzD6sIk3CLATfO9C%2BmZNlD%2F8gbxe0UrtufUbcRYr5nExF6uoDMzyXWVANv2koJ%2FvgtdOayl%2BCmFgmAL2AVV5LYf699iP4qNMI%2F2q8QGOqUBWWs%2FRI2m%2B%2FedZhVk%2Frc1otzX1QpGyVqPU%2F2uobUs6R%2FtUqPRrcQ46zwnYhIJvjWeIVdBzsoHcuUsOXdRR2z983CnnwUVDOfj6%2BxMikxTem0W0CUWK3i5ZCOMBV%2Fg4Wv%2FBWDubtjafZWNOpq7Ja02GFb2w3mSaRT7P%2Bttd8ZWUViycWJVZhNETbL671lTi0Yfj4W7Zg%2FFs%2BNXQiohGtJ9SvNx%2Blvw&X-Amz-Signature=e5218c9292389f3cebe47ca0b2983e22b0ed20b77ece440348df00f7f232d0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
