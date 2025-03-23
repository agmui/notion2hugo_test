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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TC2WAEM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAcaHhUqO2b9YCuZn6TRPSKd7vcAfha5bP7kuSKoL4GaAiEAgK%2FhbzLoActsDxAkoy8ib%2BKFQIWMkuKBdm%2BnavjjmnUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwrYPEpvNtpl9AiOircA6jLcKTSFGIvkaYD3uZcDYgd7ffjji3yHJkpM7IIMCIhREdqWtVO7IIUhTKeRDzI9bI5VB0bcOxTXY5nWzkasrzJmWZn1%2B8kBq8BLw9g%2F0XaLW4h60Z1XCYTuFxkOvbHPjhrjMw%2BkEljx20K23lcQd5jWwaZm%2ByUUut1D6g5DVCMexzxer1kpO%2B90uM2DfU9CaHCdYCpXxDbHXVFK9ct25DOJtN7AkqBUl1hVoqSOBqtjakOvudsSLhs9W6fj5%2FUSl7mWopSKd6e4AAVKIYApXlitrCjQm3fyyLk6s5Hn%2Bw%2FtNyyJAS6DALB1rr09vxWOkYVW9i%2F4T%2BDOm6pnRvzaHbFjwNtNHyf0Yck7qYc9nXx17ia9%2BksSE398qqulFJgZVPS92frPpdgQn%2BMLDbgLI%2FJ1pXoKKMFrKBWbXDQnWCHSJpVuDSKLPYlL377e9XrxGcN6Nl6TjKDXDpd9Pj%2BUY1aqCli%2BhTEKQHl%2F2vT7DXaeCWBMosrHVqmZW9TQ9f%2F8FRpBxRVhkRUAT%2BwsitkWMnsDKzO%2BQEQvIRZ%2FtCKxAEVJ5Cbf%2FrtCjqkxhzkESr3J1ZxoPMI5VyYgjsouurRcHqifRVZbh%2BAdOkaZA5mieQOUiVC%2BooX47vHAovFMInN%2F74GOqUBWf2oVWjVQiWDrCHLPaPYMcN2O7NXykOu7Owy%2F5GXSH7tonbGV0B%2FXbIguK9%2F0uz1k4y4V2tpEX3wngGeNkfAi2NDPSRCe5O3ZSlFNfRkUNDxELy0Qwur5Zft36KkdV%2BmJ4anWyH8IHwj3K0VSMEh1vNx6LNU5R0IxTvGG8T05uQxz9c3oWoXfPS4%2BZqGWY20MvQ%2F2wXLPSw%2FkIocFiXaCzITWJl4&X-Amz-Signature=70938e34dc6e4eb3234ffc7c254da224d9e0fc8cd9419ca44a9ee59c66d173b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TC2WAEM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAcaHhUqO2b9YCuZn6TRPSKd7vcAfha5bP7kuSKoL4GaAiEAgK%2FhbzLoActsDxAkoy8ib%2BKFQIWMkuKBdm%2BnavjjmnUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwrYPEpvNtpl9AiOircA6jLcKTSFGIvkaYD3uZcDYgd7ffjji3yHJkpM7IIMCIhREdqWtVO7IIUhTKeRDzI9bI5VB0bcOxTXY5nWzkasrzJmWZn1%2B8kBq8BLw9g%2F0XaLW4h60Z1XCYTuFxkOvbHPjhrjMw%2BkEljx20K23lcQd5jWwaZm%2ByUUut1D6g5DVCMexzxer1kpO%2B90uM2DfU9CaHCdYCpXxDbHXVFK9ct25DOJtN7AkqBUl1hVoqSOBqtjakOvudsSLhs9W6fj5%2FUSl7mWopSKd6e4AAVKIYApXlitrCjQm3fyyLk6s5Hn%2Bw%2FtNyyJAS6DALB1rr09vxWOkYVW9i%2F4T%2BDOm6pnRvzaHbFjwNtNHyf0Yck7qYc9nXx17ia9%2BksSE398qqulFJgZVPS92frPpdgQn%2BMLDbgLI%2FJ1pXoKKMFrKBWbXDQnWCHSJpVuDSKLPYlL377e9XrxGcN6Nl6TjKDXDpd9Pj%2BUY1aqCli%2BhTEKQHl%2F2vT7DXaeCWBMosrHVqmZW9TQ9f%2F8FRpBxRVhkRUAT%2BwsitkWMnsDKzO%2BQEQvIRZ%2FtCKxAEVJ5Cbf%2FrtCjqkxhzkESr3J1ZxoPMI5VyYgjsouurRcHqifRVZbh%2BAdOkaZA5mieQOUiVC%2BooX47vHAovFMInN%2F74GOqUBWf2oVWjVQiWDrCHLPaPYMcN2O7NXykOu7Owy%2F5GXSH7tonbGV0B%2FXbIguK9%2F0uz1k4y4V2tpEX3wngGeNkfAi2NDPSRCe5O3ZSlFNfRkUNDxELy0Qwur5Zft36KkdV%2BmJ4anWyH8IHwj3K0VSMEh1vNx6LNU5R0IxTvGG8T05uQxz9c3oWoXfPS4%2BZqGWY20MvQ%2F2wXLPSw%2FkIocFiXaCzITWJl4&X-Amz-Signature=b8ba7ff47ea0a19f479e5fece823800322a80b33b6eaad83c814e72a513f7883&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZS375D%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDysvzYFyhPh09SPVkGSTXFN6kGhVbg8rUMVy4OmQ96ZwIgU%2Fvq%2BjibqY2f1hafIQrRL1KgEL4s15juVl6BoZ9FC0gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX79oKDFy4AKlNVWCrcA2G7jFFvxTtkcw%2F0AXadAXsbqVs4QY2UncJnYzhkqw86CJKyNK0y%2BQcZLOnlTh%2F8daMhYON47S1RZWW8IeuceKBdK%2FmNFhy3b5wHXRpXUBrttH5swUjxpXNu%2FmMvBiOfuwXGqSLk0tzr8igAT1%2BuKFw%2BlP%2BDfuGujBnSKlhB2h4lWmeEe7IVc8tNdhUbcCJdpM0tCvT6%2F9DzY%2Fc6G5yIXlOjDyhxnZVMpcJ2vj9yVmU%2FB31UMRrRhYyCEuGsnmljQR29rY3jUuK3BdS3Tv5jvYEK78j0Tqd1t3d7QaCFh7YI%2Bp%2BQ58IW%2FNL6axTQ0Lc4LguDAVmVr9f1VdvtXrZpgsf17CHAMZsUIGSRPJyy%2BsCfBX0nkHonxvnm2ViUOOdfRXSv%2BugkxSnEO9fax6KkMgmhRrh7bx41AI425n8YeTV%2Fbzb9p8fKsMkMzcds3CFBjazm7ZZ7xdKxlwKR0WEghzsSvqAQuPeSnk1uph0HHmKAbmV%2BGNs6wCK0VlK7YUOssVlq7iEbgw5ucyVH6mxpFTUs52GuXryf%2FI%2BaUxYCaXoJ61WGSQ3bl4zSy2L436BRVc1u8q2j81lW93y8b68JK%2BeHSh5gO9kYmNmh244316QXSHjGtA%2BI6ms6w4juMMzM%2F74GOqUBIlRjga4bQ2veaZ9w0bDqym4y4bu7nqmKGzTn3qmPY1vqw82zzW4Hbebh6t8sACw1br9beU%2F7PDJISZfR7UGQ9D3M67rSy3OeTfhae7BX%2B0sakEPS1JITQiDLLgME%2B2j%2FifrkYaeBtPaf8EFCqDQdl0hvIIhWKjt2HbtHAKvblWSTgDJKIY%2BTfam6h8v6Ea%2FaeVA%2Ful4wUjUr7tOdicPQ1n4RoTXO&X-Amz-Signature=ec402898c7f8e6fef4250a099d4109ef762783b4ac95aa575bf9f7832fb65c48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU4SQ7B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDstS4fGVDe48LPJw23edgZ%2Fhzv%2Fu%2FPTBRbjZrf6TXleAIgeWrWul%2Bq9raF69TFBfkuMpAUNBuN9kblm91yPg7vXaIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5%2B7slelxMCaDQUyrcA9mOiQRIqp4gfure6boi7mpSzwQ9HnTLPwcArSMfZfnmhSsqsrt6UVpvKG4z02YSu%2BzbPSuETWBzMZc%2FfxGly4IYMMH03KGR4yz01yhAE2YiHGXjeRjDtNFbx5M6JItWYGn7IqrhXA4Gv5R2ogPXEhURv0xTAcLDp7JdsCZ684vI0Q8iiMOs4ANnrZi3eOxkJYoFgLzSlBjm7l1N3UcikLc3hJTBUp7vgEN%2B9gz17f4HX3Y8zVixSoTnEtdthpBGBuSQ30ZTpjLC0zue3nwtkBTIEqXkSoHcZq7f5v2EvhOI912tN0ESORenLlqe1j83cqMm7ui98Y8LkJV3T%2B1E3njlZq9qfhxtlXp1j8nMAMdQN87eg%2FsIozlCUBY2PiueJVizCCacx1Bap6SePlzjm7kLMnjIeoepj2p7jZ5uyUNssnb5dd0QElOp3IZatNSrSeY8VBZJsh%2B32%2BoJQIBa1urfp0S919YfUdgoET%2BVN41F%2FakdWw1AGBorpXOl0rO6BU9v8CFitDJgHMfCRXSPpqZWA3iOQPoB3ikjlgAfQUc1TMIRKFlKEjC%2F6wLHYi6P4ISIfEJ1C0Ma7JOH5yX1pTrtsv1P7O%2BDpoqbrU5cMxpOSx93ROvSshz%2F5fuKMPvM%2F74GOqUBHzJNxw7GpxhtpLU9YxxQ4ZWzcWGVm%2B4ZaZWQKODrz1PkyYNqpcNc%2FV4qgRvulj5TzKcA5ENRgkUbznFUqwwzbfRIHJVf9ft3nmgvcps8N1EYH9vAfMI%2BQ8yXB%2BUcVXTcg8LdFKk3PlEugiavosWUWvvVRg3pMz%2FCaUgIobtHMXJNWEbdCIKdNz9WXZvHhXCBjo2Q4%2FLHOb0RpvzZ1eqpW0JM6DiR&X-Amz-Signature=9a5035617c045e90f07fde1258b9bb6512faa10c6b41a0fb1edafd559a8b8e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TC2WAEM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAcaHhUqO2b9YCuZn6TRPSKd7vcAfha5bP7kuSKoL4GaAiEAgK%2FhbzLoActsDxAkoy8ib%2BKFQIWMkuKBdm%2BnavjjmnUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwrYPEpvNtpl9AiOircA6jLcKTSFGIvkaYD3uZcDYgd7ffjji3yHJkpM7IIMCIhREdqWtVO7IIUhTKeRDzI9bI5VB0bcOxTXY5nWzkasrzJmWZn1%2B8kBq8BLw9g%2F0XaLW4h60Z1XCYTuFxkOvbHPjhrjMw%2BkEljx20K23lcQd5jWwaZm%2ByUUut1D6g5DVCMexzxer1kpO%2B90uM2DfU9CaHCdYCpXxDbHXVFK9ct25DOJtN7AkqBUl1hVoqSOBqtjakOvudsSLhs9W6fj5%2FUSl7mWopSKd6e4AAVKIYApXlitrCjQm3fyyLk6s5Hn%2Bw%2FtNyyJAS6DALB1rr09vxWOkYVW9i%2F4T%2BDOm6pnRvzaHbFjwNtNHyf0Yck7qYc9nXx17ia9%2BksSE398qqulFJgZVPS92frPpdgQn%2BMLDbgLI%2FJ1pXoKKMFrKBWbXDQnWCHSJpVuDSKLPYlL377e9XrxGcN6Nl6TjKDXDpd9Pj%2BUY1aqCli%2BhTEKQHl%2F2vT7DXaeCWBMosrHVqmZW9TQ9f%2F8FRpBxRVhkRUAT%2BwsitkWMnsDKzO%2BQEQvIRZ%2FtCKxAEVJ5Cbf%2FrtCjqkxhzkESr3J1ZxoPMI5VyYgjsouurRcHqifRVZbh%2BAdOkaZA5mieQOUiVC%2BooX47vHAovFMInN%2F74GOqUBWf2oVWjVQiWDrCHLPaPYMcN2O7NXykOu7Owy%2F5GXSH7tonbGV0B%2FXbIguK9%2F0uz1k4y4V2tpEX3wngGeNkfAi2NDPSRCe5O3ZSlFNfRkUNDxELy0Qwur5Zft36KkdV%2BmJ4anWyH8IHwj3K0VSMEh1vNx6LNU5R0IxTvGG8T05uQxz9c3oWoXfPS4%2BZqGWY20MvQ%2F2wXLPSw%2FkIocFiXaCzITWJl4&X-Amz-Signature=98ffa9972ff7c3335e6e7584b582c228f9baa7985d417568516a0a1685fe526b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
