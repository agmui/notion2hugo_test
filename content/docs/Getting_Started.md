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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FRK52QF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDK8xnjW3JNgqLmg2bwo3nIhBJi9tR28HKPyb0BOPVgeAiATFpxjt4zeBl3MBwr48sXlUhfi2fLZKYCa61d24JmksiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2pD2%2Bp1j1%2FzQ%2FLcKtwD9SIQhLGLLldj%2FnZz%2Fq8k3u1KB7WwuWZCce%2BiT9QdakLlhUNdAUF4rmP1cTOK0l%2BBsj7crbxqu2oPZFUjkRBcbdAi5BJExllbHgfIDq10d3QRGoH5mEX1dJP0ipkSXzYTqnl0bUxybAeBIqLmPlG49QIjR0Z3rPvn1%2BPVr7cNxOaFgKoVq%2FEQhij4j3iUjVeTV7zmlQLr1DTfleV4qiz71MKAat5pSvhNTnAdousY3CfB3dfvHc4SSSoBTCWVJ4uWg9eh%2BuCm2aFpdXefyKjqwiDLOLvYAXJI7oeBRd%2FVag%2F8B4Xs9NTaUvv7TWaDq4OFWuILL6I7jeK1Z8eGAAZPEa9bs26brNHvwTIzIcsjN7aFo25SfSMvXEpBcUjGYUHihvvDPMOlCxlUqpRkihEjHnbnTg%2BjTvtXHLIQZw6gW1PT9gMEhhM2fsA%2BtdCV9wIp8IP9ISl4YR5jcWLeS3vaZsBXeN0lNpgMo4QIMndsgr%2FqYTrSdWt8UI2DmwP%2FIX8mKNBW3Ahas1Z6no6h3py92jNMV23tc3KM3HTECHiX08w0YNh6pv%2BVAXw8u3iAArdv8gnuc5%2FL7Gaea%2BIcKad%2B1UHYuTXmwRU7Qn4O7r0%2FVUJVYGds9YMEpT7H9F0wxNrDvgY6pgFIRTG7dyjaIHqrpasx0M2sFFpTNT7zY%2BB5KeX3rqSFkw8i6aFir6sdkBn%2Ff6kAFd%2BaIOkEtaRmx%2Bmvw%2B%2FpYMQA2zKg5TPmK%2FZXhc6THinan1gAwdF%2FOnXqGpivHO%2B%2FuAzwCDJljHEX4iOVjCAiMxQ1bysBSB2k1Z88mX136zOFbINN008OlxaX%2FXIAhFeRH3hP%2FHE%2FAYzWmX55kTvibnlJm1nSbE23&X-Amz-Signature=693ce7b277daec45dced111140f9eba5447dcdfac022a874e890f9b573b77a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FRK52QF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDK8xnjW3JNgqLmg2bwo3nIhBJi9tR28HKPyb0BOPVgeAiATFpxjt4zeBl3MBwr48sXlUhfi2fLZKYCa61d24JmksiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2pD2%2Bp1j1%2FzQ%2FLcKtwD9SIQhLGLLldj%2FnZz%2Fq8k3u1KB7WwuWZCce%2BiT9QdakLlhUNdAUF4rmP1cTOK0l%2BBsj7crbxqu2oPZFUjkRBcbdAi5BJExllbHgfIDq10d3QRGoH5mEX1dJP0ipkSXzYTqnl0bUxybAeBIqLmPlG49QIjR0Z3rPvn1%2BPVr7cNxOaFgKoVq%2FEQhij4j3iUjVeTV7zmlQLr1DTfleV4qiz71MKAat5pSvhNTnAdousY3CfB3dfvHc4SSSoBTCWVJ4uWg9eh%2BuCm2aFpdXefyKjqwiDLOLvYAXJI7oeBRd%2FVag%2F8B4Xs9NTaUvv7TWaDq4OFWuILL6I7jeK1Z8eGAAZPEa9bs26brNHvwTIzIcsjN7aFo25SfSMvXEpBcUjGYUHihvvDPMOlCxlUqpRkihEjHnbnTg%2BjTvtXHLIQZw6gW1PT9gMEhhM2fsA%2BtdCV9wIp8IP9ISl4YR5jcWLeS3vaZsBXeN0lNpgMo4QIMndsgr%2FqYTrSdWt8UI2DmwP%2FIX8mKNBW3Ahas1Z6no6h3py92jNMV23tc3KM3HTECHiX08w0YNh6pv%2BVAXw8u3iAArdv8gnuc5%2FL7Gaea%2BIcKad%2B1UHYuTXmwRU7Qn4O7r0%2FVUJVYGds9YMEpT7H9F0wxNrDvgY6pgFIRTG7dyjaIHqrpasx0M2sFFpTNT7zY%2BB5KeX3rqSFkw8i6aFir6sdkBn%2Ff6kAFd%2BaIOkEtaRmx%2Bmvw%2B%2FpYMQA2zKg5TPmK%2FZXhc6THinan1gAwdF%2FOnXqGpivHO%2B%2FuAzwCDJljHEX4iOVjCAiMxQ1bysBSB2k1Z88mX136zOFbINN008OlxaX%2FXIAhFeRH3hP%2FHE%2FAYzWmX55kTvibnlJm1nSbE23&X-Amz-Signature=f709210a96fa872e0032f54e4fa3d03628a55d3fe861d17ec12a484c0aa1bd43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUHXU64%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCyiT5Om04MmJ1M5jLVot9VzAysGZa0bkDdRbzyL3bKtAIhANj3zwp2yoklXsvCql3ZG%2F7zCOnBwa8NTnvL%2Bv82%2BCvKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1KHuokBDzxz5DFgq3AOl4VdsXhsl67MKq2hk7vy8MdLbbPmb5iVGqX560FbQ28XFapnInGzIMuWkO48OagvRCXrpzN%2FhAn2fZSXS%2F2PI7Ktx%2Br9XfIP0s09YscHx6otU70mJnOs7JcDbQCZoqB3nPAOKK%2By%2FrdDn4wjrPi5mF2s0twRMqYX3uvNC43KX9jI2Bv3MJKVvFfvtEkqwtG2rTcLgjqJ9ntJ8FE0IPWlKy%2BwBcbQo%2FzjiXsgTMXVfdL%2BGycMnCKtXKB4rwoVQFea3FVJQ7ZHyamChzQDPsFBBeGYpARw6SLPnBT5nQ2%2FDP6DL5zxyhA8VT9MJbjEc2FJiCyzFaMZn8H5Kq8kHfiEymLStZR6AkHn6eltF5bDdIKdpg2Vv%2FJiFi3nbVft7Hajfk11i8vGamA5O9HJTzLHqgpbisRzrlVr4THl9CWYz3DHNjRJ0NX2ngiGzI23bTQ4SkBbduJHEEdJlKBy5kw857LM7SUrHATJSdG8IFFrKm8bgPZO5FfEEmTyNHea2iaMMYB1D9KC68OvaOVIbdZbtGcuGvtclwZwX0i23n2xH2Q8CsMsP6%2BXlZNyPR1HPlM8Gj70bC0Qb05putIOgs2SkvOJ2HXpJWw80q9cOr17qxqkgkf4tin7qacm7szDi2cO%2BBjqkAUe9ut4uFYeXyGPv7lLmC7swbAQQk9weDSFN6TJEqFKPUtpqu92Af5o%2F4AZuYMR2g0WtWk172Pa6A%2FhJHTFMOQK9H5bOXJbrSpoM1t0NA%2BuwNyQS3iyNknhp8uHc2dJHElH6u4YVeyFfgYpzHHEzO6XJqRYq0JyQq3Nl3C5bavdWBTilRMVtz6XbudeYLDKMEFivGysy3i8zERTNeJfgk4POXdPc&X-Amz-Signature=04e8d6bc5603139ffff39f6d93e094bcf45876f39a38beae5b0b12e5152d0c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WMIPTE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCvFA4zJ9bZBL2PKcSsMkEaB4GeKNoT%2FXGLLIUWxwj6rQIhANk25Bo026s3qsGQq56lZp8iU9Vrbk52erNtI12w14jjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPbucl9g%2BB0OUpkSIq3ANe6ZiKIMceFwrbhh4Ike31hrBSDZqvxGvN5FRi9f28MGuhCDbVSPXkOnbVNjpiqf%2F3nU4ju6B4MXTMj4WqY7uKuZyntA9zhxWjdKyWOiIFU6hDdsJAo1%2FxHZoLkfM1SZDyQklXv7y8tLc95wmML4F4jymeGYSdrXAEpVT1jFsoKBapqfPkShQxcrTbkS6aksPreVSExihL4VHW9D3RJiRss2SQAqrs74zOK5yydgujXDWHeIEyuhsw2ZsT6NNPoKddCU703s%2BWVIp43HdUdXXy4bSJ9GIoegfM8DUmnovitp3zGmkJ0YiehT7D29hT%2FnpgQaiFo0SaqzG%2F403CqYCoCff1GsznHubxSglbgKRN3OVkmS9wXhv9lvigr%2B3sOojmcy6Kz%2Bxzz01kvyjX5PYNAjV4lIWXvxq1IhIdYeUZB0tQDGbzbLsYVkTW8mZwPdKHrCKpqBiojp%2BP25wedrebJhJ3wGUnp7VxKfYIcj0dImpnLB7K7MOWLhNCNl6ojaq6WZjr3E%2BNBvo8aPspdk%2FXEJFry2T4jAJFKspuKoGiNcrpAiKhIU3IutqYWSkfLi7eDzPuVnf8E76hfLd9ZwOGOKHZrgyB3mhCTmW5orjB4iNFcLdmGrTBH4ZSqTCm2sO%2BBjqkAX%2BsK3zYDJAU5uyPqoFzPqhZ0q68Hakw%2Fj%2BtWn2EEb1rsNsZTvFp9iRsnjfa0Pm%2FTCCSL9oNXqY9tQDvUJWqaw%2B2Wasnq2p0m%2Fltu5LJNgG3jr0GH5efLXJxamu9zkZxpZU7yV8%2FUyBEgivJpIInnype729sl0U%2BEejwkjMmVjFqE4gRExJvOJAciV8lIYQPEWwQJ2W3BkY1Ar9tpxnvyGlYKtXs&X-Amz-Signature=f8ec2bd26023509cc64dcdf9d9799be9e1996863aa3ea8bea9f1d5a9770e1b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FRK52QF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDK8xnjW3JNgqLmg2bwo3nIhBJi9tR28HKPyb0BOPVgeAiATFpxjt4zeBl3MBwr48sXlUhfi2fLZKYCa61d24JmksiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2pD2%2Bp1j1%2FzQ%2FLcKtwD9SIQhLGLLldj%2FnZz%2Fq8k3u1KB7WwuWZCce%2BiT9QdakLlhUNdAUF4rmP1cTOK0l%2BBsj7crbxqu2oPZFUjkRBcbdAi5BJExllbHgfIDq10d3QRGoH5mEX1dJP0ipkSXzYTqnl0bUxybAeBIqLmPlG49QIjR0Z3rPvn1%2BPVr7cNxOaFgKoVq%2FEQhij4j3iUjVeTV7zmlQLr1DTfleV4qiz71MKAat5pSvhNTnAdousY3CfB3dfvHc4SSSoBTCWVJ4uWg9eh%2BuCm2aFpdXefyKjqwiDLOLvYAXJI7oeBRd%2FVag%2F8B4Xs9NTaUvv7TWaDq4OFWuILL6I7jeK1Z8eGAAZPEa9bs26brNHvwTIzIcsjN7aFo25SfSMvXEpBcUjGYUHihvvDPMOlCxlUqpRkihEjHnbnTg%2BjTvtXHLIQZw6gW1PT9gMEhhM2fsA%2BtdCV9wIp8IP9ISl4YR5jcWLeS3vaZsBXeN0lNpgMo4QIMndsgr%2FqYTrSdWt8UI2DmwP%2FIX8mKNBW3Ahas1Z6no6h3py92jNMV23tc3KM3HTECHiX08w0YNh6pv%2BVAXw8u3iAArdv8gnuc5%2FL7Gaea%2BIcKad%2B1UHYuTXmwRU7Qn4O7r0%2FVUJVYGds9YMEpT7H9F0wxNrDvgY6pgFIRTG7dyjaIHqrpasx0M2sFFpTNT7zY%2BB5KeX3rqSFkw8i6aFir6sdkBn%2Ff6kAFd%2BaIOkEtaRmx%2Bmvw%2B%2FpYMQA2zKg5TPmK%2FZXhc6THinan1gAwdF%2FOnXqGpivHO%2B%2FuAzwCDJljHEX4iOVjCAiMxQ1bysBSB2k1Z88mX136zOFbINN008OlxaX%2FXIAhFeRH3hP%2FHE%2FAYzWmX55kTvibnlJm1nSbE23&X-Amz-Signature=4e506eaed04a9ddc4211eabe1b9fc225ac7577502edc4ab914d485f98984c6df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
