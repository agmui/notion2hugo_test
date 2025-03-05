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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4KDGIZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnODNJq9iyHu1%2F4GAGbBqRPhosvH1tSlc%2FUx2UkdlJgIgbOJyqPuTteD4VhTBMiQhtnnILw%2FHPy4CYeE1tlz6bdwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLGPAjKhc%2BgI061yNSrcA1FxTwgTIzFPdByOXYXFb40R%2BoewnwG2qcDNZkcb0fHbhMQ7wr1vPsJ%2FQxB%2B3DWNjeltCTGgKu0TkkpgeaHfOajQreBAceukAbp%2F0Nu43HPebm3A7pKtgRYWqVbfNm99wOaJe3sYgBhadYj%2FE2YpZHO1BtISRkA5NTNfKU44F5MgyjepA7DWrLzXvZ3oesZPHkunl8391%2Bq0DBKaLksOdER9agRuBAvSWGeXIqA5SOcbSZH3N967B9ojVEY2PjasjxN3rvO8cKGULotj25ztIZ6oGSm1bEbNdO0H%2Fy8eAzLukbd1HrgJhvJ61YKfqnltQfOF3h2CtJtHJTf8Q%2FLnqduKt04%2FLZgmPYUvPfYUrCItWQSjjm2zsqrJbm8IMPNrvEIGC9IKe5VqfxDX%2FEWd%2Fkp3ekRKHtjg%2BaVaGG2r1xjiMrvBlLV4H%2FcnmmwFEgTrp%2BMujCjUbgZcDnLi5G7FuC8wx%2FGbUMCTUPFSoNkGide2xo0qMupuIXhC0gVXNs%2FtzBQ8jbRP9oUzqwtfx7ep%2BWLJvFSCwScud%2FuI8EBgYuJ%2FIkD336wT6FO25oQi%2BBnjXwpSl%2F%2B2WU8Y04uya8yhp5QDH0Zdd6kK3SZ8s7LdIVUqR4WDzbJibpv6s27nMIyWob4GOqUBc3GdWJlb3ZSQikDeGVEHa%2FR7QpHKwb5umtkCGsPSltgVoVHJ1sr3gOVm7AkhACXzgPPCeXsHm3H7tRaTX8DvSF2stMu0SbC5l6n4jl7gQFlXnTZEKdyFymXXPVGdH8X8XLhSbs%2FSkqk04Jh%2FQ7s8UI0ojBENRj6STQmGh6XVbgxWj%2F4ydlnIqFtjqlCbFwIfPRBauPNqQvKaWi5rOTcsjbvbcu32&X-Amz-Signature=0dbe260eb49681527b2303f133312e369d1d69e25021de4bfc3cb4f465f335cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4KDGIZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnODNJq9iyHu1%2F4GAGbBqRPhosvH1tSlc%2FUx2UkdlJgIgbOJyqPuTteD4VhTBMiQhtnnILw%2FHPy4CYeE1tlz6bdwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLGPAjKhc%2BgI061yNSrcA1FxTwgTIzFPdByOXYXFb40R%2BoewnwG2qcDNZkcb0fHbhMQ7wr1vPsJ%2FQxB%2B3DWNjeltCTGgKu0TkkpgeaHfOajQreBAceukAbp%2F0Nu43HPebm3A7pKtgRYWqVbfNm99wOaJe3sYgBhadYj%2FE2YpZHO1BtISRkA5NTNfKU44F5MgyjepA7DWrLzXvZ3oesZPHkunl8391%2Bq0DBKaLksOdER9agRuBAvSWGeXIqA5SOcbSZH3N967B9ojVEY2PjasjxN3rvO8cKGULotj25ztIZ6oGSm1bEbNdO0H%2Fy8eAzLukbd1HrgJhvJ61YKfqnltQfOF3h2CtJtHJTf8Q%2FLnqduKt04%2FLZgmPYUvPfYUrCItWQSjjm2zsqrJbm8IMPNrvEIGC9IKe5VqfxDX%2FEWd%2Fkp3ekRKHtjg%2BaVaGG2r1xjiMrvBlLV4H%2FcnmmwFEgTrp%2BMujCjUbgZcDnLi5G7FuC8wx%2FGbUMCTUPFSoNkGide2xo0qMupuIXhC0gVXNs%2FtzBQ8jbRP9oUzqwtfx7ep%2BWLJvFSCwScud%2FuI8EBgYuJ%2FIkD336wT6FO25oQi%2BBnjXwpSl%2F%2B2WU8Y04uya8yhp5QDH0Zdd6kK3SZ8s7LdIVUqR4WDzbJibpv6s27nMIyWob4GOqUBc3GdWJlb3ZSQikDeGVEHa%2FR7QpHKwb5umtkCGsPSltgVoVHJ1sr3gOVm7AkhACXzgPPCeXsHm3H7tRaTX8DvSF2stMu0SbC5l6n4jl7gQFlXnTZEKdyFymXXPVGdH8X8XLhSbs%2FSkqk04Jh%2FQ7s8UI0ojBENRj6STQmGh6XVbgxWj%2F4ydlnIqFtjqlCbFwIfPRBauPNqQvKaWi5rOTcsjbvbcu32&X-Amz-Signature=d99aa5bf4a09d7947f0c7864b248e0fc6ba8a1a0222710d3e52924a1a6bc6451&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUFONF6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA34rtgtrvEXJ4khwp%2F%2B%2ByV%2B5iHatVAcTetM07%2F1fZtAAiEA%2B3Co4E2eRlk5opjzf3F%2FL6zY7GVdbf595LKaJ0LD96sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDD9zx0o0LkjWIvB8jyrcA8ns6GPuru8VHwJir4QBAxuYjRgoudeZJXUflu94RQu6XoE2rKyQ5oLF2ce5RHBZyZEXjmXYuXFBLjrOSFKJFNQBlUgMJYL7zFKlEXpwVbJpLpSwmfJoWmAgXnrT42antyO4f5ZUeGPSOVwFwrbOoPsR3WszEKoE5y91M0pJMw4usb8jFTnd6G5oLE1SaAVLY6En2MTuOjRtJZQs4vq4C17SM28Sn%2B2XPlCHMDoysuyIcuDXl4xYjqk79pp9up9phkExXTEy3GWoj4UL9nvd3%2BCYWakQekLWQRw8bjL1QOwAYepQTR4acvaKivtr4JlslwKgAk9oTPoej%2FFcwlUvTpuKun6MdeOp%2BAAWlp6v4Fu40b1HHek2h7y0Crij%2BmfMpbm9TxEtFUvT7Fia5NuhUFmSaFtyP%2FOgfDgoMOWpJqAt5yazWsJj%2B6vVG%2FjkUTvBLHwMT5YGWv%2F7Qb8kGTx8BpavAcpaIEYNkZmqI5USwmZPylNoW8gBX9ZndafFDhHfMjCeV057J1qw4dj%2FL%2BJvF2J9rMLxCPbvFPdAgmmjnf4Uda9WPmIhMStUsiAmOaKNeQ0KsFwfG1qXQCFXi6D6SJLbRKeir4sAxqTD1MLuGa8dSnWdRk0Zuj5jlM81MIqWob4GOqUBfC95IbuYM4F1HhTPqsUiNFJxzoJDmfqyVP2xZqowMRka3HfzhCryXgkEMh8iwLGZRMofr%2FoQut35W1pYzZShCB8Z5bq9%2FHsC6qub0tsMx5iDJVUn3MrtTkxaoWfbcHmD3Oh%2FdfrRJcghaREfNXitqOzpylwJOiu0%2BpxTR8pW4g3eN6qiVMW6UljNNRq03gHjP4NMc0oBEWL9KMTr1GZqTqPRV%2FLI&X-Amz-Signature=2564ad9f19122d0b0ff7706a8659a1aa1b8f2e039a4a96ddcaa7ea61b995973d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32TITSL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0WOkCnb2jdccER5exXXolLUOQZxxW6KcdxvygbsZzqAiEA27A6pGMV%2FCUq2QhtlcRnSHn4Kb3P8eGMIxn9oRWupp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNMtyYuV6L8tJwkSKSrcA6WTeF5sehVHyVMAxjg1nEskguTyDlnaPuNcvoG4BH0bie7YI6VUbjh1WlQcki4dWidjPYIYyKqqeQp4zSmq%2BwYT4uBqUPK6c91pD3ynnSiIuMl2Z8iXWczRADMygt9WB9kX1a7Ugw5ByNIm4h5zYLdwqMZWOZgU0PKu1OoCNo84DyOlwk6uJ%2F%2BoyAvcHDdfq0l5Uvosv6Q9Lmi36NYE0YDe3P1GHdEQ0UAvNiMc5tC5XecpB7hAztOZL%2BNpa9xg7XJJ2uD%2FPCVQ5CmT9QLO6kx6OP9SwiG5R3kRZ%2FwkU%2FEZaQSJKrjbHx8S1rnFylkBGz1WvO6txGDYHqSEse30KRJn47jarW9iGlBVTy0AGdvfRymthtieCjH%2FtrlVvz2IUXrfMFU9W8ijtYlP6lc06NYZ%2Fv5ITdJ9wvuh5MlYY0VOTJx6lFzVuMmIk4fWUIRwfiR3LfaEXsnMd7wW%2Bo22QREHBTzGRxOZjRL%2BnB%2B2J5Bl0kvRh7GRjoyeje6hVCdJywYFIeqC5WquNur8o7AjSBCIcTO3aleFF6dZj5l9CRWXutS33LsvNknv1Xq2nCY6ozfbmUVyiCdSntSw55Y6BKmBjI5L2pYsK8cGbn91BDWJB6WDagS%2Fq%2FP3SosQMNiWob4GOqUBr0m3fzMgOVF2r4v2HRtbMW2ysCribDh8MteN8nGBIEqxKtsdlYA1TILO4ZgY0fEUzf8IQ5MIx5%2BVL9srS%2BoxXtInboQQUGuAokhgn4NWQwUMR7NATjCwO3643jvibyda%2B3bHJ01zHTb0Ik1urlcd%2FLzMe1mT6Xf3uttlRFYf4wknhbv9GzdXdCGcVY4mDK2G2rtte0ZUYYIZlrcsyD0QWh2nZ9Va&X-Amz-Signature=3376e14607513da0a4ff88c27f675c9ff6840bbd08980b32c92475bdb599e8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4KDGIZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPnODNJq9iyHu1%2F4GAGbBqRPhosvH1tSlc%2FUx2UkdlJgIgbOJyqPuTteD4VhTBMiQhtnnILw%2FHPy4CYeE1tlz6bdwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLGPAjKhc%2BgI061yNSrcA1FxTwgTIzFPdByOXYXFb40R%2BoewnwG2qcDNZkcb0fHbhMQ7wr1vPsJ%2FQxB%2B3DWNjeltCTGgKu0TkkpgeaHfOajQreBAceukAbp%2F0Nu43HPebm3A7pKtgRYWqVbfNm99wOaJe3sYgBhadYj%2FE2YpZHO1BtISRkA5NTNfKU44F5MgyjepA7DWrLzXvZ3oesZPHkunl8391%2Bq0DBKaLksOdER9agRuBAvSWGeXIqA5SOcbSZH3N967B9ojVEY2PjasjxN3rvO8cKGULotj25ztIZ6oGSm1bEbNdO0H%2Fy8eAzLukbd1HrgJhvJ61YKfqnltQfOF3h2CtJtHJTf8Q%2FLnqduKt04%2FLZgmPYUvPfYUrCItWQSjjm2zsqrJbm8IMPNrvEIGC9IKe5VqfxDX%2FEWd%2Fkp3ekRKHtjg%2BaVaGG2r1xjiMrvBlLV4H%2FcnmmwFEgTrp%2BMujCjUbgZcDnLi5G7FuC8wx%2FGbUMCTUPFSoNkGide2xo0qMupuIXhC0gVXNs%2FtzBQ8jbRP9oUzqwtfx7ep%2BWLJvFSCwScud%2FuI8EBgYuJ%2FIkD336wT6FO25oQi%2BBnjXwpSl%2F%2B2WU8Y04uya8yhp5QDH0Zdd6kK3SZ8s7LdIVUqR4WDzbJibpv6s27nMIyWob4GOqUBc3GdWJlb3ZSQikDeGVEHa%2FR7QpHKwb5umtkCGsPSltgVoVHJ1sr3gOVm7AkhACXzgPPCeXsHm3H7tRaTX8DvSF2stMu0SbC5l6n4jl7gQFlXnTZEKdyFymXXPVGdH8X8XLhSbs%2FSkqk04Jh%2FQ7s8UI0ojBENRj6STQmGh6XVbgxWj%2F4ydlnIqFtjqlCbFwIfPRBauPNqQvKaWi5rOTcsjbvbcu32&X-Amz-Signature=e6fd91e8505995651966d3ca5d40c55762892e1b7e537ac6eb14be85f86a4fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
