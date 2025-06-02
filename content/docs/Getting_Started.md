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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXFAKDU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDFkKaQP2mvTwMXuCBLYTM6o1UqS5Qyy0DTbjKMqXQzogIhAJs3%2F8KxjcLrRVrcTY4CIUyOjIHWM9qk45M29gVDEGaqKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7DSw7zco4jY43BYq3AMQcEA2Cs8GcxNA9IM5eS86ddB%2FLkcAQoxLvUN11tTyLMr0ldtsCzpIfzrBJxjCEN%2BlTeeUWYQAKNlOKUbEhOp6uRxw%2BW5TcpCaShVXVYfuctm1w5IvTj7pr06k5dmAx9gPWltzx%2BwJvpKbeW26URE8IIip2ZPOlNjX4nfSCjTkHRGvUO0Chiy4J9IF3SU4Dt75eYvYdErhiphc44Ydc9WA145bJA%2BNPZE8DnV7n3XIwscjvCgmKRKHbuzDyScsMoSGenDjISBWIuYSxxGEiMtDgSJr8ltRg3nN%2B42940dm8uWf5H1JD85lj9V12mXD%2FQnMH5%2F6xf7gaj4rxKHZnLf%2BX8W%2FRBn4YJ8zvyDYNWYY2TlnDq8PbSjiLYC2d4eh25AqDtpkucS%2F%2F4v6DabVKrmGDqLHeuzQMpDQBdyHJGQYU1TSXEdZs%2F8ovQ3Wt8uW5XqDoIB5FqU%2FlsJAM2kVjYFBn77CVgHWJw3MDDtLnOiG2CvWIMr%2BrUbCVogSkfmwIOuhMc%2BMkdFFwFzBggaQpnj51ApGs%2BndW6%2BaxuHgR2SMeoUQiOxLm8y8Ji73o5JtSw%2BFyVjOw22O38ZnkSy5EJvy5uROJppRe03DsAKdN8M4bUqLySUXflqj8Tn4WTCiw%2FXBBjqkAY4VxUmotdAh7C2jEgDe%2FQ7FPGVR03hUS1wafgxQH%2FHYbGLfr3nhrYiV%2F2ny0U7kbZi5zibfhDJDLGmAGKWQtIJqR1BvSTed6v117OP3ONvNTrqe7N32bsFNBMH9Fj%2BTj540piqpqBqhpjc44Gjtqdlb73P1mKgr1CUY3SBhd0FoTuA8MEFVBEztpgzx6iqdrwLGakszDI9c3Hidd3tzgeEz0VeQ&X-Amz-Signature=f62a232c088f6601d154b84d831fb19646f70ebc9a81734bd512496042960cce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXFAKDU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDFkKaQP2mvTwMXuCBLYTM6o1UqS5Qyy0DTbjKMqXQzogIhAJs3%2F8KxjcLrRVrcTY4CIUyOjIHWM9qk45M29gVDEGaqKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7DSw7zco4jY43BYq3AMQcEA2Cs8GcxNA9IM5eS86ddB%2FLkcAQoxLvUN11tTyLMr0ldtsCzpIfzrBJxjCEN%2BlTeeUWYQAKNlOKUbEhOp6uRxw%2BW5TcpCaShVXVYfuctm1w5IvTj7pr06k5dmAx9gPWltzx%2BwJvpKbeW26URE8IIip2ZPOlNjX4nfSCjTkHRGvUO0Chiy4J9IF3SU4Dt75eYvYdErhiphc44Ydc9WA145bJA%2BNPZE8DnV7n3XIwscjvCgmKRKHbuzDyScsMoSGenDjISBWIuYSxxGEiMtDgSJr8ltRg3nN%2B42940dm8uWf5H1JD85lj9V12mXD%2FQnMH5%2F6xf7gaj4rxKHZnLf%2BX8W%2FRBn4YJ8zvyDYNWYY2TlnDq8PbSjiLYC2d4eh25AqDtpkucS%2F%2F4v6DabVKrmGDqLHeuzQMpDQBdyHJGQYU1TSXEdZs%2F8ovQ3Wt8uW5XqDoIB5FqU%2FlsJAM2kVjYFBn77CVgHWJw3MDDtLnOiG2CvWIMr%2BrUbCVogSkfmwIOuhMc%2BMkdFFwFzBggaQpnj51ApGs%2BndW6%2BaxuHgR2SMeoUQiOxLm8y8Ji73o5JtSw%2BFyVjOw22O38ZnkSy5EJvy5uROJppRe03DsAKdN8M4bUqLySUXflqj8Tn4WTCiw%2FXBBjqkAY4VxUmotdAh7C2jEgDe%2FQ7FPGVR03hUS1wafgxQH%2FHYbGLfr3nhrYiV%2F2ny0U7kbZi5zibfhDJDLGmAGKWQtIJqR1BvSTed6v117OP3ONvNTrqe7N32bsFNBMH9Fj%2BTj540piqpqBqhpjc44Gjtqdlb73P1mKgr1CUY3SBhd0FoTuA8MEFVBEztpgzx6iqdrwLGakszDI9c3Hidd3tzgeEz0VeQ&X-Amz-Signature=b90f85c0a17385125481791a70820cbe81301a630e28528c049ebf8b488d516b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXFAKDU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDFkKaQP2mvTwMXuCBLYTM6o1UqS5Qyy0DTbjKMqXQzogIhAJs3%2F8KxjcLrRVrcTY4CIUyOjIHWM9qk45M29gVDEGaqKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7DSw7zco4jY43BYq3AMQcEA2Cs8GcxNA9IM5eS86ddB%2FLkcAQoxLvUN11tTyLMr0ldtsCzpIfzrBJxjCEN%2BlTeeUWYQAKNlOKUbEhOp6uRxw%2BW5TcpCaShVXVYfuctm1w5IvTj7pr06k5dmAx9gPWltzx%2BwJvpKbeW26URE8IIip2ZPOlNjX4nfSCjTkHRGvUO0Chiy4J9IF3SU4Dt75eYvYdErhiphc44Ydc9WA145bJA%2BNPZE8DnV7n3XIwscjvCgmKRKHbuzDyScsMoSGenDjISBWIuYSxxGEiMtDgSJr8ltRg3nN%2B42940dm8uWf5H1JD85lj9V12mXD%2FQnMH5%2F6xf7gaj4rxKHZnLf%2BX8W%2FRBn4YJ8zvyDYNWYY2TlnDq8PbSjiLYC2d4eh25AqDtpkucS%2F%2F4v6DabVKrmGDqLHeuzQMpDQBdyHJGQYU1TSXEdZs%2F8ovQ3Wt8uW5XqDoIB5FqU%2FlsJAM2kVjYFBn77CVgHWJw3MDDtLnOiG2CvWIMr%2BrUbCVogSkfmwIOuhMc%2BMkdFFwFzBggaQpnj51ApGs%2BndW6%2BaxuHgR2SMeoUQiOxLm8y8Ji73o5JtSw%2BFyVjOw22O38ZnkSy5EJvy5uROJppRe03DsAKdN8M4bUqLySUXflqj8Tn4WTCiw%2FXBBjqkAY4VxUmotdAh7C2jEgDe%2FQ7FPGVR03hUS1wafgxQH%2FHYbGLfr3nhrYiV%2F2ny0U7kbZi5zibfhDJDLGmAGKWQtIJqR1BvSTed6v117OP3ONvNTrqe7N32bsFNBMH9Fj%2BTj540piqpqBqhpjc44Gjtqdlb73P1mKgr1CUY3SBhd0FoTuA8MEFVBEztpgzx6iqdrwLGakszDI9c3Hidd3tzgeEz0VeQ&X-Amz-Signature=d2dd9cac5e74587ed5644535a280dcd14073197ac96626c2e3a40dde31d52ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXGHBZO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEaKHrcLR6scoVMy4Sl43ByacqVOnW1EimPWuFqB8YRaAiBeLIVWsvibgNZzHNBezlvaxA4Q8gRE1cSDcx0diUxdTCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCa1jEpLGKBKITBrKtwD%2B9tZTE%2BWOI%2FAq0R2P8kwgY0dmnL5hNpYRQ998vZIwX3sAIdwOe1Lpg40HsqIYRPWRVbmVLSZ1AENEQ0PoQ0Kfs0sDcAHXHLCkfvCsSPuQdX6J5q9Q1L0NJ0TLYrWnaG3xLbHgA3eKWpuNhITNtqI2boOY1RksaWpE2B7hOhWTaBycFnLLuqWoIKHeCx4Zd7OKg8k4NHJJdc3sUwpa5JGCuoI5g0vd3xiN3YZoM3ZmdjEp4uju23H5J3npGn6TqVP3HlX6nacn%2FQ7z%2B9oyTJQ8Xruafayfa1VT4KM86ijLlRyCys8EbJJpuqzrFCN29lQpOatgZuvpz%2BJtpcyMvGzLbwwN0gKE15GeWTp784O2kxQCIfhvhEyuuvKO%2BMY%2F4A0CzYglpouro4XCMN0ScK4dzyW0RSPE4846TWsZrbCkLhgL87py3LsXTkwABeZicNtbKZvmICOCjFq4q5dTq09TAM%2FFDs1tBll5oHe1sX%2BDVq%2F7WfxhTOAiSbQOs8BuoLBDv%2BS4xS4NRVbFu9zGZ5U5oNRcbh7Mh73l%2BoIbsClINNQrFOGUNVEzsEsJ32MIitD3JiXqAN6%2BEh0u73Pubu9QJmrSfoHM5CEEyIBIEISKK%2FQbvALOhFNBsWmVwcwycL1wQY6pgH23EpLzZIopVbcZGRB1i928mpclM6fZ6CyC5%2FtjUaDbho9OmLiFl5fsALlB9rui1%2F01172wGgEyO%2BLXlqWFlc3aHIk8LWMsKnA9Vt7sbtK7udEZrou5qI9JKf7GGPiOzJkRRifN1kCZfSkqZcwneQ3%2FJW8doN7NRn%2B%2BKJNThb8uXNnyWu5Yf7EQelw72caNlwFVtlAHu%2F%2FQq9c3%2FQn3CDrN6erFg%2Bq&X-Amz-Signature=b8c963d825592b62233767e30c2b502a8ffa292efe67f6cbac113b5241d93eec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7H475GX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCHzwEUUS4hIzFGVtNJxA%2FRbElgO%2BBt3RPisZ0du%2BG0G8CIQCXTAKEED6MgFG%2BCsq%2B2UUn5GwkM9qUZmoRFpDhFTKQ6SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldk77inqd58pRyt1KtwDyG1kmLAlB1ChoOoMpmL3zBnucDGvMh0bDyo3H%2Bpay5t9bS3%2FeutyixLdThXDoCEWWLIJtYZp2ITGeWz9gRKLQ6YRbilcKzfmONHqSp8boTsWcEM4tCedsphsI1P6RX5iRQToytAoonfCNewZXMuVKIDlSiq6kRvcdLbGaqcEz4UK%2FieuNejvFm4IhuaLLQt8cPcNChn203RiotAsq0XR5jifNayC%2FsRGeNnZC6sh5OhFUz%2BVSg0ophl9SS1N5KUJ8GITbT3Ytnz9iih9vjaVGyB9gj0wM6nmmS20g5fzyQACBwyHzfgypksi7o8qb23T7D2xnwc3siFCcZkoRD%2Fh4ZB6pAyr%2BFEzfvlKTTHJklSwztDaAIWnNXFRk00B8Bw1X7qlNreWi6SSNQBXG7mnWgGFGRTUsuNZNBVqWkZInnUO8QNK6H3kltrQtzGSL61i06fA1O%2FDIKHbaOdbbxsMj1e8%2Bu0H98jYNtSpVY68aD57eeYz5XjWpiLHEuk%2Fl3oG7EmZ1JSov4zpTBfD5hVbkerMu0ZwJiD5VJCsrKa%2Fapdplt4YxkJ2LgRNId%2Bl%2FPO3B%2FBDNzJHEZB8bJ%2BZYE1u6NjV4f1eP8NOd45fwaEr5Sf5bS37BHHKKYrYg9kwr8L1wQY6pgHdekXeZp6yxF4frpSPTGMVWSwSQc%2BvNjj1wmjoMhyups6QTbfAhIT7ArxjELtAwAdfNRl1es1M2DkrLnet%2BzRP3Nn5KafyT6LW%2BLkYTKBHVzlStLQQG0wiP2OPb31THysLuXOWP%2FehxnE%2F8tAlN0XWRkbpZK8MXbGPxhfgRI6qKFzYRn6ap0BvFThDasNJ6vmLLMgLVg6ZgEQBqnmnZzUdYNcoBUQ%2F&X-Amz-Signature=a5e31f9f8ac3647fde8c9ebad9df1b1a2ea809799ce3ba280f52d04c018cb54f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXFAKDU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDFkKaQP2mvTwMXuCBLYTM6o1UqS5Qyy0DTbjKMqXQzogIhAJs3%2F8KxjcLrRVrcTY4CIUyOjIHWM9qk45M29gVDEGaqKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7DSw7zco4jY43BYq3AMQcEA2Cs8GcxNA9IM5eS86ddB%2FLkcAQoxLvUN11tTyLMr0ldtsCzpIfzrBJxjCEN%2BlTeeUWYQAKNlOKUbEhOp6uRxw%2BW5TcpCaShVXVYfuctm1w5IvTj7pr06k5dmAx9gPWltzx%2BwJvpKbeW26URE8IIip2ZPOlNjX4nfSCjTkHRGvUO0Chiy4J9IF3SU4Dt75eYvYdErhiphc44Ydc9WA145bJA%2BNPZE8DnV7n3XIwscjvCgmKRKHbuzDyScsMoSGenDjISBWIuYSxxGEiMtDgSJr8ltRg3nN%2B42940dm8uWf5H1JD85lj9V12mXD%2FQnMH5%2F6xf7gaj4rxKHZnLf%2BX8W%2FRBn4YJ8zvyDYNWYY2TlnDq8PbSjiLYC2d4eh25AqDtpkucS%2F%2F4v6DabVKrmGDqLHeuzQMpDQBdyHJGQYU1TSXEdZs%2F8ovQ3Wt8uW5XqDoIB5FqU%2FlsJAM2kVjYFBn77CVgHWJw3MDDtLnOiG2CvWIMr%2BrUbCVogSkfmwIOuhMc%2BMkdFFwFzBggaQpnj51ApGs%2BndW6%2BaxuHgR2SMeoUQiOxLm8y8Ji73o5JtSw%2BFyVjOw22O38ZnkSy5EJvy5uROJppRe03DsAKdN8M4bUqLySUXflqj8Tn4WTCiw%2FXBBjqkAY4VxUmotdAh7C2jEgDe%2FQ7FPGVR03hUS1wafgxQH%2FHYbGLfr3nhrYiV%2F2ny0U7kbZi5zibfhDJDLGmAGKWQtIJqR1BvSTed6v117OP3ONvNTrqe7N32bsFNBMH9Fj%2BTj540piqpqBqhpjc44Gjtqdlb73P1mKgr1CUY3SBhd0FoTuA8MEFVBEztpgzx6iqdrwLGakszDI9c3Hidd3tzgeEz0VeQ&X-Amz-Signature=23c8b4497d58708c8bc13788ebde62253b85c9ec967cf57d36311b6172303cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
