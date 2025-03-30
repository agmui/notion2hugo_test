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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466355T5F2Y%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFKeXXIKXyGiSIyOJHZSp5a77vtbJXeJv2VWlIg9fYvwIhAIR2yOg4ajjWXTZbvepVCR0yI%2FRoaYRAo4QjFZ0HQQmdKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzttlN0M2%2FFiq0rEVwq3AObQgijPxoY3f168XLrfkn%2FK6iKWUlUS15skejcPZrISpDpMQcsbtZDJTH6qhGG9o9lEUmw6ogUx9QibVwahsYaHfzIyWviqcSM5WPfwQIG2AKx9EsV07y0t7ZUyDIDjuQ7AORR6FmCKWnv4gar8sRn0vVos%2FtRKTSV3si5XYAqmcpFZ6yhZQCaLIKSi9BPVmjWePDzRNU08Lrgku0Cz%2FYRNnx%2B0cbeKyqeTg1nzavBXgglSs7P91ThwUH0hC4Q%2F2yJ%2BJBbI2UNxRAui1Thvp5wSsUMgu9z9ZMxTYj32vZt8CQQ%2Bw7hgwgLJOtaQ2YOQ6ywqwosTmoc1L1MvidZN0%2F5k2a1ON4m4plYiXaq4u5APO%2FNh2SntsfQr1nvnUgjIB4XOQsTXTMX1JgKQ%2BPd47FSp2nRG9IucP9%2BoRXGNKIuE6oMmHdsUeauY9xJS7uJZl9byLwLSE%2BVIHYmsHHGBYTnYHn4Zs0GEWbjWGYJN5eSdm6UdSLdA8xkB6WF4MrBqe%2FgVcCnete39Ua4SggcvLh6ARhnxu0oKIS6z2CPA499sNEiApe7xSikvkzoc3SvC6J9uwl3RMZoXrtMsi%2BSScOSZeOR8K07I68yv3UHmnW7ddU83PiipJwOBS4URzD806W%2FBjqkAV0RtlnOi3PfK63KPZ2vAyM5A2la7zNHNEOIpYkPfvRkuohTNdQ173JO5SAQKIci9EZZHEHmsEeYotFEUEXxPR5azfgyZQaL0PG84TLOZfKdL7DPNBR9hmNBhNyBd7Tzxdy8%2Bnmilkyww6G%2FSXgdJIRQIW34kgaaOvaHNipSWx%2BOhkPLoy3BZyQ5xlWIJHlfoR%2B41zD9j0wOOMAfgWSSuCkMBHyn&X-Amz-Signature=18f768a6a9ff75d46393763f86ee0837d808cfadf3ffa2a1d24fab6cf0e37ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466355T5F2Y%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFKeXXIKXyGiSIyOJHZSp5a77vtbJXeJv2VWlIg9fYvwIhAIR2yOg4ajjWXTZbvepVCR0yI%2FRoaYRAo4QjFZ0HQQmdKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzttlN0M2%2FFiq0rEVwq3AObQgijPxoY3f168XLrfkn%2FK6iKWUlUS15skejcPZrISpDpMQcsbtZDJTH6qhGG9o9lEUmw6ogUx9QibVwahsYaHfzIyWviqcSM5WPfwQIG2AKx9EsV07y0t7ZUyDIDjuQ7AORR6FmCKWnv4gar8sRn0vVos%2FtRKTSV3si5XYAqmcpFZ6yhZQCaLIKSi9BPVmjWePDzRNU08Lrgku0Cz%2FYRNnx%2B0cbeKyqeTg1nzavBXgglSs7P91ThwUH0hC4Q%2F2yJ%2BJBbI2UNxRAui1Thvp5wSsUMgu9z9ZMxTYj32vZt8CQQ%2Bw7hgwgLJOtaQ2YOQ6ywqwosTmoc1L1MvidZN0%2F5k2a1ON4m4plYiXaq4u5APO%2FNh2SntsfQr1nvnUgjIB4XOQsTXTMX1JgKQ%2BPd47FSp2nRG9IucP9%2BoRXGNKIuE6oMmHdsUeauY9xJS7uJZl9byLwLSE%2BVIHYmsHHGBYTnYHn4Zs0GEWbjWGYJN5eSdm6UdSLdA8xkB6WF4MrBqe%2FgVcCnete39Ua4SggcvLh6ARhnxu0oKIS6z2CPA499sNEiApe7xSikvkzoc3SvC6J9uwl3RMZoXrtMsi%2BSScOSZeOR8K07I68yv3UHmnW7ddU83PiipJwOBS4URzD806W%2FBjqkAV0RtlnOi3PfK63KPZ2vAyM5A2la7zNHNEOIpYkPfvRkuohTNdQ173JO5SAQKIci9EZZHEHmsEeYotFEUEXxPR5azfgyZQaL0PG84TLOZfKdL7DPNBR9hmNBhNyBd7Tzxdy8%2Bnmilkyww6G%2FSXgdJIRQIW34kgaaOvaHNipSWx%2BOhkPLoy3BZyQ5xlWIJHlfoR%2B41zD9j0wOOMAfgWSSuCkMBHyn&X-Amz-Signature=5be12b04fd5fb16e98e152f0eedd51388dc8e609355ab12f3e35f0ac94a28478&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJ752PR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF9XT%2BXjWLMpVM1br4m4OTcjLlsA54sQzNUzHjiTr%2B4VAiB7o4ifzSG%2BhNEM49dh7zrODHQqULOBj2klnaf0uUedfyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn9A1Tc0uQzc6PGB5KtwDN0ZGL0yxCjVpEPV6pG5yXuTq3EIYR95cAeepln5BH%2FvLF%2BSgrXgL9p5V%2FplKqN3akDS8OInAxa3MsaksYm0JwcQ71ZR7NOSDxYFbyZG4PZYzTHqniXo4CzEEOC70Hl%2FUgDBQWmG3Lysdfj%2FDLjncQHdpRekhuDOpCq5g0acA5HEUJoyxaF0bTRyEB1%2FmYPb6iPNCtK78U32kpbemzuXXykICbk9b9YVJSoDV7WitGNm6gPiMvqPFiAqu5%2BB0VAlkcQEN11tQH%2Br7NNSTRYLAO1h7bZTl%2FT0bQEd4SSkptJPmmYUFfMAiYBeaAQP3XyBHi4VTOtUYUUgygZPSj5B%2Bq66tPZXROX8nqm7a9zMQvH5iA4rrm45E2CJBusPHH3R0vvkSzyg0TS%2FzQT9GtDWH1dpdGalOcfeev2YbGHzAIgslMs3GIkDWXZmntU%2BNzJXvgqv4kAokr534Zt7GWMrCMXqPoooBpOTqpK3uTyOHWOLynCbtviJZmKvjIoILsAhr4Nrih3i7pqmTlIcP%2BXQoqcSFS3%2Fzg98DybsWxyWs0lOxKyFmvxp7ye%2FnKQGmZ2iVvSfuBXojzJ7ZJFK%2F3e4r41c9oY21xmyDzTdnzk4xlSGKSQg5RPA47J3rAW0w09OlvwY6pgGtXiJAKqWUwOb1lINlVmR4iIdVmbIViIp8W%2FlpSM%2FZnpnJ%2FOArbHZm1CMalaavaiLuMSoZcJSS5Aqv9GOxgT0WCnXmL8Wg0C9FE%2B%2Fx849pWizxcpWy9sg4p5chZrC8xyqA4NWEEK53DQN5vKJPJFsYzGFD1%2F9cARLsimd1FD9OR7Hw0ZS3mjbKHl%2BEHnXpi87TO4EKZORxpNaVI93tAczBnaA174Rh&X-Amz-Signature=4e6167407b5e571cf25166c270d241c2d5ead88ff16f7e4495cc556460f2e767&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUVELDK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC35VC%2FEuv%2BKdPPulIlHw3iQV0Pv3dil2bO9STX8iwR%2FQIgBB%2FCXNC9xPzaVWVTi6CZdMp2kJ7xwEj%2B2GriJU7qdEIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsziaMj1pJDIwWPHCrcAzeLcdcfhhWE5S3TAnLvTxC246jK1f3fdtN7mrJuBXXaOzctlWmb4wKjqL7RmVPSUVG1hzjXsHFF46Wy35xvdLHJu3M%2B%2BnUrqyWnqLZD5HaSTzb76mW5o0v%2FGqec7l2SznPpYeFpFQlVvFPgkiJP1es0Wj1YFu3gfXw1ImmPgCc6aDymqWP13F7pm%2B1gBZu0kQ6tqqyXKioICSe%2BxEaf21HrnKQrtfMmxg26ToBOZySTEy5ZunJqr16B%2Bc3fUf8WmSUsTqWXOjRbkDN3zIHc7DcyJQ2zydGIySehBUWDj0megAS6vaL2tjfWJHYQl1ShKDflMzD5k3LaC8rAVak2%2BhntFgbTEcxtbh7rsYTC8u21qbpVXzrqQwTptxUPx5EzySiUIhnqUjBTZxqVmZVtbLNo22%2BbAn8zCRi%2BFmGP3KI4KF6MBAqilplTeOO288Djp3sKaHk1mt%2FZSDu5ZDm4hN4ieajIOKwj0Gpr%2BgNHORUiwkdHF4CQxFTw7lcijnxCeTNq3M2ND3B%2BKiAXjdLzzVFLnGBuH7FRCMcfxWF5a2f7MupQChAAqsOGCU4AbquHr6YzdUuig05Dgqq37Ir8%2B%2FHGZAmd4Lm6Tc7piY0ZG56BoLpV3Q%2FYY5x9xg5hMKrTpb8GOqUB7xwcocLWbhE3EmIoZ56KUfEKoj5D9BuBJWkVL0TjKmEE1StFcGYyOoqm2AHei1eKMN9nVgoEetk1oHCUMT15qqEFSUS9073BgkGaDGka%2FMHrpcK0z71kpqbar%2F0UnqTCoXQ2K9bnUkxBWrc4oCAGKUFRZN2AnYCbtN9%2BCcQKnI8LBMI5yxgOrM9WFm6QKi3NTZ6ejA6fSECeYBlNgtdwFqsWRtfk&X-Amz-Signature=11ab74e29563caaa5db193c79b81d54b212d5fbd4cd352c6022a4e67ea9db09c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466355T5F2Y%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFKeXXIKXyGiSIyOJHZSp5a77vtbJXeJv2VWlIg9fYvwIhAIR2yOg4ajjWXTZbvepVCR0yI%2FRoaYRAo4QjFZ0HQQmdKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzttlN0M2%2FFiq0rEVwq3AObQgijPxoY3f168XLrfkn%2FK6iKWUlUS15skejcPZrISpDpMQcsbtZDJTH6qhGG9o9lEUmw6ogUx9QibVwahsYaHfzIyWviqcSM5WPfwQIG2AKx9EsV07y0t7ZUyDIDjuQ7AORR6FmCKWnv4gar8sRn0vVos%2FtRKTSV3si5XYAqmcpFZ6yhZQCaLIKSi9BPVmjWePDzRNU08Lrgku0Cz%2FYRNnx%2B0cbeKyqeTg1nzavBXgglSs7P91ThwUH0hC4Q%2F2yJ%2BJBbI2UNxRAui1Thvp5wSsUMgu9z9ZMxTYj32vZt8CQQ%2Bw7hgwgLJOtaQ2YOQ6ywqwosTmoc1L1MvidZN0%2F5k2a1ON4m4plYiXaq4u5APO%2FNh2SntsfQr1nvnUgjIB4XOQsTXTMX1JgKQ%2BPd47FSp2nRG9IucP9%2BoRXGNKIuE6oMmHdsUeauY9xJS7uJZl9byLwLSE%2BVIHYmsHHGBYTnYHn4Zs0GEWbjWGYJN5eSdm6UdSLdA8xkB6WF4MrBqe%2FgVcCnete39Ua4SggcvLh6ARhnxu0oKIS6z2CPA499sNEiApe7xSikvkzoc3SvC6J9uwl3RMZoXrtMsi%2BSScOSZeOR8K07I68yv3UHmnW7ddU83PiipJwOBS4URzD806W%2FBjqkAV0RtlnOi3PfK63KPZ2vAyM5A2la7zNHNEOIpYkPfvRkuohTNdQ173JO5SAQKIci9EZZHEHmsEeYotFEUEXxPR5azfgyZQaL0PG84TLOZfKdL7DPNBR9hmNBhNyBd7Tzxdy8%2Bnmilkyww6G%2FSXgdJIRQIW34kgaaOvaHNipSWx%2BOhkPLoy3BZyQ5xlWIJHlfoR%2B41zD9j0wOOMAfgWSSuCkMBHyn&X-Amz-Signature=a0767df931a2e44f08a1ba5ab35b5efc6022854592896a0da6cf9d1f8bd2d7b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
