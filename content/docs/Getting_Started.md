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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRJ7V6K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFFB1lzfpohmYvvXtlZ5iRnzo6j%2F4oSzOv4A1v4uFkAiEA7CPWXRSO76UdWtzRpWYFpFYaCjNn0MDkj5Fpna5gLjAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq%2FWhRhGYsEaeigBircA%2BUKXtxkmdORd892Se81Vj0PRJUttxlyVEmmtF%2BxyfcXt0YTlt96FKPKXqsOtAMj5G2F%2B8yz9G3dCBvoDl63QOylidvL%2FdpBiMJi21pgHPcaopkQ3oVPB0bpwZ2KKDI1L8%2FCYB64sx5t35Gr14WE4yJ1K4BqtWPZ8zfz0q3VOtrCbpS5G2AlkQN7%2B66H48DNECPVpaa1RolHXw%2BkGRckB8phsGWNL%2Fe%2FVWHJdm56qPuSU08sTgvfF2ynCEzp3gtrrs4jolvrOV6itlfHt0sPgKaNXqdYGleVaiUgLPdXxpbHjsr7L8Szb9qTve5k1QnqqRw9phHxFQ93YCBleHVX9HjHFOoGGUB7knFIDHfJfIfXctnpDm5%2FgaHydBKvM51fLs6yg4K%2FqdlSF8d9lojkEXIHX5FthxfQI3FmKmfbhdbF8E6v6DV%2BVzKXHUg5q9j8zR40aytC08gHLUjZ7KKjxfN0J4NThyzaO7hxYHwu6AqLPBq0cQ%2BPx%2FJlTWPCDF2Y2cjb2X36ICONFBAZ6YVn8KtO5IJrZ1m1nvyfl8scAqIapzt%2BWFV%2FyxN1Ltrm7lfVx5xRtvQZm%2F1zUiCaV9aM1OsdT5y%2BXP0LKbenNqOyEXOMV4aajfE0Be%2Bg2NbSMJLJ8r8GOqUB8xILt4bMsXNjsXVwi6GLe7cN1Yti35Z3zeYOb753FwZKZmXpY3rVOtEMZ%2FCISpb%2BNY9hPHKVOXLQsB9WmUmPZejF0ENPNKfwbBEuR0WcHznYW9IVLt9g%2Fdm6rcOJMx43g3iu%2FPZqjb9HjuSGKBp76EY2wDgYRrIgQzVlqMSRyHyrsf6Jdr1bjHUy6fEVSEM7EmUh11jtF%2BLdpTXsTCcAo8kvaRuP&X-Amz-Signature=98a104495b660d4bc8e908bc80650b5da2a1547b6ca2f813522683893ab6d8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRJ7V6K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFFB1lzfpohmYvvXtlZ5iRnzo6j%2F4oSzOv4A1v4uFkAiEA7CPWXRSO76UdWtzRpWYFpFYaCjNn0MDkj5Fpna5gLjAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq%2FWhRhGYsEaeigBircA%2BUKXtxkmdORd892Se81Vj0PRJUttxlyVEmmtF%2BxyfcXt0YTlt96FKPKXqsOtAMj5G2F%2B8yz9G3dCBvoDl63QOylidvL%2FdpBiMJi21pgHPcaopkQ3oVPB0bpwZ2KKDI1L8%2FCYB64sx5t35Gr14WE4yJ1K4BqtWPZ8zfz0q3VOtrCbpS5G2AlkQN7%2B66H48DNECPVpaa1RolHXw%2BkGRckB8phsGWNL%2Fe%2FVWHJdm56qPuSU08sTgvfF2ynCEzp3gtrrs4jolvrOV6itlfHt0sPgKaNXqdYGleVaiUgLPdXxpbHjsr7L8Szb9qTve5k1QnqqRw9phHxFQ93YCBleHVX9HjHFOoGGUB7knFIDHfJfIfXctnpDm5%2FgaHydBKvM51fLs6yg4K%2FqdlSF8d9lojkEXIHX5FthxfQI3FmKmfbhdbF8E6v6DV%2BVzKXHUg5q9j8zR40aytC08gHLUjZ7KKjxfN0J4NThyzaO7hxYHwu6AqLPBq0cQ%2BPx%2FJlTWPCDF2Y2cjb2X36ICONFBAZ6YVn8KtO5IJrZ1m1nvyfl8scAqIapzt%2BWFV%2FyxN1Ltrm7lfVx5xRtvQZm%2F1zUiCaV9aM1OsdT5y%2BXP0LKbenNqOyEXOMV4aajfE0Be%2Bg2NbSMJLJ8r8GOqUB8xILt4bMsXNjsXVwi6GLe7cN1Yti35Z3zeYOb753FwZKZmXpY3rVOtEMZ%2FCISpb%2BNY9hPHKVOXLQsB9WmUmPZejF0ENPNKfwbBEuR0WcHznYW9IVLt9g%2Fdm6rcOJMx43g3iu%2FPZqjb9HjuSGKBp76EY2wDgYRrIgQzVlqMSRyHyrsf6Jdr1bjHUy6fEVSEM7EmUh11jtF%2BLdpTXsTCcAo8kvaRuP&X-Amz-Signature=a5c93d8dd90405387a2896a112076eb2a454ce34e179b509e2daa64fdf1a7f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY5D5LM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgyprGdKZCYE7pQBF6LSvwyq4HmQ5OOj2BVz504RCevgIhAOHOWUyEgbIF2zetrPO61I8rOy6dmfN1WEE%2Fc7s9jgLvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9XMrUkdNZImNA%2Bf0q3APNdvs3c%2FiS45YEgEKM66sQm2livFCyDvrGF%2Fhh418t0ftShUDW9kOGx6Nhyzfa%2F8FJ%2BQJ3T5bKwTzpeKxDSvffmXiv%2BvFluPnStM6r9OF43gU1g3c%2Flc9Xxu8HQuY%2BaYB8nkkmkz5rz99iX7grJ%2FiUdxX2WXFkV39TDtVab%2F4tbzD7RmQXUl%2F%2FCGlvvK2tlDZpKAtKOCgX3bS0M6I4fwIBaKRa0dnsJ5UP%2FNTirV%2Bx5GFgVQi236bfOyK8fIb3NLdP906L8cEjNS0IkQ%2FXypRFPGcAR%2BKpuDNa4MJBAPW9WAX8DjSSzQ8JmeY5KqbkQ91hKcPOjhNBEUxtI89X8H%2BqMzvFZSDFjteA8E3EfLnus0oAB1Ud2%2FiCygoZ2tXJRLRc4dSLAGDD1D%2BXyHY8eedVy4oFSfNd7mToWT%2BkRCl9fy6o31cHXeVUuBy9TLn79xghAJD4jVAsvWfjgwbuZ8Cgg4f7zF9QwUd62BQMHw1%2BSsj5YITwoWjmbfPPDtY2U0tAunOghILHXmC8nHd61WoL2thBv3lOo2xNTEHoWGsLI%2FaX2EUL5kIJG5SQQ5YxKcylwDW2Sy1yjLiIEQ6nsxZoJ4kJp6m937vMo%2FILBXrF4x%2By8HUkI%2Fh%2F1%2FmCvjC%2FyfK%2FBjqkAVpgiXRfYxjMcOiebocnFlSx6SQiHXhmbecAZSvemvz%2BjnVyyv77nXsinBgaXfhusRdzsEQ6Np1s3WmMbIkiid2kIuBY1zZAhHezYy4cPc%2Bxlesn7kPin%2F34UStME1gVhHWOwp4TRgB0%2BHnR4I23%2FghwjpOhdtpfYGX7IjcyB3pdvRYailgmUV5NY%2FFMIPT%2B5SIF88UvTirOmGMlCQMe8uDygko0&X-Amz-Signature=8cc58a52f2f5df52dab1c9caf955e76b5cc548f72aaf37fe3d2a443d9127dfce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGEJYBMJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqQdldEGofmPxKTUqx2W96GQr9Y8vMedVP6SZ2DiNTbAiEAoJRCaFEdkSBkA6DFw1rY5huehOVNLj8drFVs71IF6PwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDo7taZmC%2BuPWTIdsCrcA5izwlgzV9uTwhJ7xgcqFocrVr8Uo7Fzrn4YiJ9qNgOUrTY91oDcAuUwzZJWakAeLC2ZLzIFi6xAtZK4aROzvMVSwGx8LdibhIcIy9k%2BaoVuRL5IsfpDGJevTP4EDEDCLxjBTloNVEQrPWzHQm3sWdBNBB5dlLn0SEfIaPVUsEpYs5C8U%2FWbtUQUo9%2B4lVgylJsj2VL73WATVGq5HzH2vWPJWMGxFmrQvKR8fB%2B5HbqAHOQYEct8A44XEzlxBRTAXXUGXlpnxu3L%2BXOcf7I0I2Es1hAj0zhWocToxmSG5ORXbrnMo%2BxHBBJFmBaKlzcYUw9wbNHuAMDsBkpoHHwm1Isyx68Ed8wqz2q1sSn4H9hyP0q%2BD1Jlj0zaQwRbbL9A1o2Giwugz9CXU%2BpDSTjke3mIfQMQOCcMaTtx3NjnQ6tcy%2BqHT6O%2Fc3H9oEiZZjQQmYd%2FRVcE7jvTVqFf2isGzygzl8el%2FYJ%2BZo4dJu3CurjBb7yVKR4UImEZNzs4KLSSOUzux4iVRIPZ4UXb8muOiKhDoHwLqqKDsL%2FLJkEA%2FBtHzF%2BpAc7mO%2BhZycinDVZOuYwh%2BYwZkWiPjrO0oBZR7lI8q3zTGf1G2w2WVoDPJN49QKk%2F1DN3D6WQxTYYMN7J8r8GOqUBq9qMjpkzfycnOn%2BWeptAGBktcn32Oc772j57tgQKegVqulIcI2G%2F%2FdBXf%2BSntqQgZKJG2nhS4jvQhcDVPs5O4HEQImnnq0YohVPTmSXoEGl3cxg3MbF%2FGZYYWsfMP1kt%2FgKguRy%2Fpbp8Mgrl6tZOQ%2FJn0DQBnj7EZ%2BmLSgeV8qiSCrRTejgeGCQ3IKWtjQMADJZ2dIhLlD4GcdSVZogcdmI%2FFjVt&X-Amz-Signature=6583f3df73c52c84df9fb52102b1e4abe4de5347634f91d2fe51d52955571d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRJ7V6K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFFB1lzfpohmYvvXtlZ5iRnzo6j%2F4oSzOv4A1v4uFkAiEA7CPWXRSO76UdWtzRpWYFpFYaCjNn0MDkj5Fpna5gLjAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq%2FWhRhGYsEaeigBircA%2BUKXtxkmdORd892Se81Vj0PRJUttxlyVEmmtF%2BxyfcXt0YTlt96FKPKXqsOtAMj5G2F%2B8yz9G3dCBvoDl63QOylidvL%2FdpBiMJi21pgHPcaopkQ3oVPB0bpwZ2KKDI1L8%2FCYB64sx5t35Gr14WE4yJ1K4BqtWPZ8zfz0q3VOtrCbpS5G2AlkQN7%2B66H48DNECPVpaa1RolHXw%2BkGRckB8phsGWNL%2Fe%2FVWHJdm56qPuSU08sTgvfF2ynCEzp3gtrrs4jolvrOV6itlfHt0sPgKaNXqdYGleVaiUgLPdXxpbHjsr7L8Szb9qTve5k1QnqqRw9phHxFQ93YCBleHVX9HjHFOoGGUB7knFIDHfJfIfXctnpDm5%2FgaHydBKvM51fLs6yg4K%2FqdlSF8d9lojkEXIHX5FthxfQI3FmKmfbhdbF8E6v6DV%2BVzKXHUg5q9j8zR40aytC08gHLUjZ7KKjxfN0J4NThyzaO7hxYHwu6AqLPBq0cQ%2BPx%2FJlTWPCDF2Y2cjb2X36ICONFBAZ6YVn8KtO5IJrZ1m1nvyfl8scAqIapzt%2BWFV%2FyxN1Ltrm7lfVx5xRtvQZm%2F1zUiCaV9aM1OsdT5y%2BXP0LKbenNqOyEXOMV4aajfE0Be%2Bg2NbSMJLJ8r8GOqUB8xILt4bMsXNjsXVwi6GLe7cN1Yti35Z3zeYOb753FwZKZmXpY3rVOtEMZ%2FCISpb%2BNY9hPHKVOXLQsB9WmUmPZejF0ENPNKfwbBEuR0WcHznYW9IVLt9g%2Fdm6rcOJMx43g3iu%2FPZqjb9HjuSGKBp76EY2wDgYRrIgQzVlqMSRyHyrsf6Jdr1bjHUy6fEVSEM7EmUh11jtF%2BLdpTXsTCcAo8kvaRuP&X-Amz-Signature=d407dc3e5f3283368ccdacc13378f170e9bc5f75c830c1f89ce503cfde387805&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
