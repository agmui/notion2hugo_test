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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBIR7DY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIETH7NrRoSooehlUKFM7dDIdJDuaRI%2FDXaBer%2BxdR5foAiA0rSkH4plv3uihNF%2FJ4x1ZmuxGEjFJ9B1nEKDHT3mTayr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2BTBWjsYdIpvrXg2KtwDb8qS8Rpmt0FphflJfRio0hYyEmAu95WNhSVZsBXMx17IWL54d3Pw3bGU%2Fb4sX5HVnh15lPAPZswjhPPUGW715EIyG5nPdAGwZGsC8fvmYBNDk3rGMiDtqTZvfCkYp1yqF5LFWJnVZgJQCLDmsrKPNFUi9grzMPrq%2FouRKEine8iK5lJ3B7YTGDOAOIyotrcJDimhgO9xrn%2FiilJAzFE3KMklCt7y4o2u8ekFpLH4L%2B7K2vZ2uaE%2BhDkyUILv44gqaOWFZbv%2BUZUOqPHe%2F0mF0IpzaA3CtLAQgLQEy5rFomDsrl78F0Izuys1sen4K63VvytjlENUWhUG0Go9%2BHNdbDi5G0My%2FrhS16guJ1UZNkCumDR%2B7IZ8EdNOvC4JSvkVpaaIUWqm%2F%2BBgS2f1XHFxm48YlQ%2B3v21sSIkWof1PsKLCDC54NOZlJkQ56RHXbi7ypx14mlZrIzuBF2yqOA3egjWYzhwboYTVyhyLlYNbHYU0uohWPZ9nb%2BCN%2Bp1Dx%2B0iwbIpaMSI0iVdcTl6rBPGJelnSJLyq3z39EGYkShyC5inEeAr%2FGPq47MccYYFvk177uyrCXA3C4F4TfQzE5EHYQJfXSHydWVcN2drSIsUV403Yl1tVPyBOubVOtswxO73vQY6pgEL0uH37ZXOkjA2EW1WFG2LqV2fIp0u7Qf2Ii04Txg%2FmkA9AEiGbRCg2nQKGc20POD8bweGXm%2FnEQCBhDVDOl9XbcPyUkeijxpr5KRZ3VSluwdpDIGgrSGd0BhlIJpIw1LYll0ImjXfuJ7z7R5N%2F4r6BrxnVTJYgLl1ieXqXLQS07vtsNCRMEPzFTHUY7KmY2iA71LIDzqYZg1N8cHfl44ykOwaGZCi&X-Amz-Signature=e929597ce9d36238eeed052c147518e3e3fad4dfe175a241f9ba901c8680463c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBIR7DY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIETH7NrRoSooehlUKFM7dDIdJDuaRI%2FDXaBer%2BxdR5foAiA0rSkH4plv3uihNF%2FJ4x1ZmuxGEjFJ9B1nEKDHT3mTayr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2BTBWjsYdIpvrXg2KtwDb8qS8Rpmt0FphflJfRio0hYyEmAu95WNhSVZsBXMx17IWL54d3Pw3bGU%2Fb4sX5HVnh15lPAPZswjhPPUGW715EIyG5nPdAGwZGsC8fvmYBNDk3rGMiDtqTZvfCkYp1yqF5LFWJnVZgJQCLDmsrKPNFUi9grzMPrq%2FouRKEine8iK5lJ3B7YTGDOAOIyotrcJDimhgO9xrn%2FiilJAzFE3KMklCt7y4o2u8ekFpLH4L%2B7K2vZ2uaE%2BhDkyUILv44gqaOWFZbv%2BUZUOqPHe%2F0mF0IpzaA3CtLAQgLQEy5rFomDsrl78F0Izuys1sen4K63VvytjlENUWhUG0Go9%2BHNdbDi5G0My%2FrhS16guJ1UZNkCumDR%2B7IZ8EdNOvC4JSvkVpaaIUWqm%2F%2BBgS2f1XHFxm48YlQ%2B3v21sSIkWof1PsKLCDC54NOZlJkQ56RHXbi7ypx14mlZrIzuBF2yqOA3egjWYzhwboYTVyhyLlYNbHYU0uohWPZ9nb%2BCN%2Bp1Dx%2B0iwbIpaMSI0iVdcTl6rBPGJelnSJLyq3z39EGYkShyC5inEeAr%2FGPq47MccYYFvk177uyrCXA3C4F4TfQzE5EHYQJfXSHydWVcN2drSIsUV403Yl1tVPyBOubVOtswxO73vQY6pgEL0uH37ZXOkjA2EW1WFG2LqV2fIp0u7Qf2Ii04Txg%2FmkA9AEiGbRCg2nQKGc20POD8bweGXm%2FnEQCBhDVDOl9XbcPyUkeijxpr5KRZ3VSluwdpDIGgrSGd0BhlIJpIw1LYll0ImjXfuJ7z7R5N%2F4r6BrxnVTJYgLl1ieXqXLQS07vtsNCRMEPzFTHUY7KmY2iA71LIDzqYZg1N8cHfl44ykOwaGZCi&X-Amz-Signature=150b71ab3106b446c20b39d00fa445d55bcb4854e0465a07e6b950354905ac60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSRNG6X%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCsN0FAbxneelRW6%2FxXT1LW0v13DNcYrgVGZD15yBclbwIgd2z0Y0d9WmCnbAYZ79XxEsBLXpPs%2BtXa3thI6QzdVd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNFoEigZQ69vKiZd7CrcA9rRogX5t9HQIC7TQyYK2m6YAxTN7hmtF1e5%2BBNKP%2BQ1t7%2B5Cd%2Bz8zpMvvhKhw2%2BNNP43kzPhECxhIYVfuzRhfbi1KGZ4Vccjp7z%2FMkYkgUeaefo7C9%2BAfeSIn89AFjZxsveAgADoEd6%2BxCrue6sYLrm1%2BT1OrHvLUAFJJu8SQscm3l%2FYYuqjlNcKhWyL%2BJ4WfpARgw7H1DSxOHhUJY8fGdX5RXS7%2BuTiewk9SuSW%2BF2SROi3iVvfr04dt%2FkQ2wtDmuvp3H6faNK%2BfLMK%2FEJv5ou6ZfTm2bVIQpUKyjCuM7I4E%2BzQON2dG6IdtiDbLubR3bxlLlMSv0QyOQUyOe61HZbKIduY4AI2CNclhN5V3k9TkouS%2FdYNLkXQ6z6Eu%2Boh4SrSjm0KFlonLj4bd2n41UqymjiW441owQZb90E2mBo%2FUgr9rvEFuzsRZoS96Gj7Gk%2Be7msHYyCiGVp3e%2B%2BtlMzEwQGUGnCI23bsfyBR3U9FWPEerkJPNUrPyXg0CDj9Pzr0ayBfjjX6ZUHy5hjNUkwBkLcHEhMNfJr0NlVoOB5eaa%2B4X38QlyRNbm4v%2B21pLNS5636e1FOy9SQBm1HaFWPsv8QedyP07YmwWAAOfo6S12yxRGTvYCYm9%2BgMIbw970GOqUBO6LUQXV9qrGbFy2vePyUZut66KeOcDHa3ImKF6SCbtGdD%2FrP6qm5UubNNTP%2BkD8jRoST9Duul%2Fw1oQz9Rb8%2Bj6niKDckwGYHbHFKjn%2FMNI%2F0DO2eaGH2xTUqCLnaxQyp3YizbD9vgzizhk4%2F8snGKP9AoLUpi7iDjl260dv8%2BLYpR9cj%2BsfOMdRknYY%2FpTm6liuS7x8sTu5hgExSlg2dvnTfZQt3&X-Amz-Signature=6926f68e4cd87ab32c63d26dc468c07a3ef59da731ed24ebb8a145f7b375723f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY27MFH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC8JjYlF324qrxnJvguikBVPfTG3eeonl%2Fsaqgr93QBOQIhANah8J5wijONwy4tcat9h7Hs%2FCROj4dBMjHQfQ68poGmKv8DCEoQABoMNjM3NDIzMTgzODA1IgypiKBPM3N68d0KBFwq3AOC9XySf5reAgBd%2Bz3pIixr91prDa7SX%2BNgjF7NE9OtOjnCJpiQu03mFTUZvBvRRwhRyAAGEa7r2l8WWor2NA3FHzdXmFNvI59MrP64Y6ixjloAR0qeEKkBCYk3zWet0qWccteJ2I2sdzkFvsIj8A6Na%2BYyxmrVmRdDLdoljOh5ddyKwLQ1ayxG3ObV4SD22MgAUeYpYomDJfMk8h5%2Fr1VGEGE%2FQYqLiHaD1vnZxGaxzpTCMyNS5Urgk869UAqTWiwIbvK1PwbYQiLDUFuwVa%2FTgJnSVOy7ATsWHTa2kntJE7Q6T09SVH3vr600c%2Fkg2UB1RGuX4j3kBPLdIXfrQg7JTTFmJNeoICq9vqoQumu6ltL7tMXm0p%2FBVvdrWP5XG51aRXbS5ibT0d8u7JOyRI1qPBUYrBEr5%2FO9Hm46S2ARj3ySQBcG%2BI%2BA6uOJ4IDGlf2QrRZ%2Btv1znVqK4PEhi4yQDsn3v%2FtGvBv5uKgGU4PMmvh6SKZvEFhTivVVfY1rSwSVaBEERG9d6helL1AOdEHVfAg5fd7TI%2FYWCQS4WeAUnfNxPBc6edJ2U6%2BkfmAjTKyfoy8UnWtE1u%2FLOMCw9XCnqPFNK%2F91zIHzHzI9lQeJ76ieRwB2n2XJ0Hf0jDCJ8Pe9BjqkAaRP03MRPZ9Y2m2NymwtMH%2Ba6xa3s3%2FSFNGoiYATQxBvjRpAqGPAN9BDNck2dRaFmWXNrwJjO3GqyldI0ZKYeR4XBLUkBE9qRGZHd6FTxeB3VffM%2F28RTdq3XPxRnNc%2BuZx5ydScyMf4cA0Gp7t2SiRPSMk6XqKzSb%2FB%2FHjQGRsvXb1%2BGrFIZef6YgQFIuLWhESkbpf6QSDWquzog7URVUuQehfh&X-Amz-Signature=58ba84beebcba6deed7056193004e7d56c36a192f8e4d15c2a2e92a92d5c0b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBIR7DY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIETH7NrRoSooehlUKFM7dDIdJDuaRI%2FDXaBer%2BxdR5foAiA0rSkH4plv3uihNF%2FJ4x1ZmuxGEjFJ9B1nEKDHT3mTayr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMY%2BTBWjsYdIpvrXg2KtwDb8qS8Rpmt0FphflJfRio0hYyEmAu95WNhSVZsBXMx17IWL54d3Pw3bGU%2Fb4sX5HVnh15lPAPZswjhPPUGW715EIyG5nPdAGwZGsC8fvmYBNDk3rGMiDtqTZvfCkYp1yqF5LFWJnVZgJQCLDmsrKPNFUi9grzMPrq%2FouRKEine8iK5lJ3B7YTGDOAOIyotrcJDimhgO9xrn%2FiilJAzFE3KMklCt7y4o2u8ekFpLH4L%2B7K2vZ2uaE%2BhDkyUILv44gqaOWFZbv%2BUZUOqPHe%2F0mF0IpzaA3CtLAQgLQEy5rFomDsrl78F0Izuys1sen4K63VvytjlENUWhUG0Go9%2BHNdbDi5G0My%2FrhS16guJ1UZNkCumDR%2B7IZ8EdNOvC4JSvkVpaaIUWqm%2F%2BBgS2f1XHFxm48YlQ%2B3v21sSIkWof1PsKLCDC54NOZlJkQ56RHXbi7ypx14mlZrIzuBF2yqOA3egjWYzhwboYTVyhyLlYNbHYU0uohWPZ9nb%2BCN%2Bp1Dx%2B0iwbIpaMSI0iVdcTl6rBPGJelnSJLyq3z39EGYkShyC5inEeAr%2FGPq47MccYYFvk177uyrCXA3C4F4TfQzE5EHYQJfXSHydWVcN2drSIsUV403Yl1tVPyBOubVOtswxO73vQY6pgEL0uH37ZXOkjA2EW1WFG2LqV2fIp0u7Qf2Ii04Txg%2FmkA9AEiGbRCg2nQKGc20POD8bweGXm%2FnEQCBhDVDOl9XbcPyUkeijxpr5KRZ3VSluwdpDIGgrSGd0BhlIJpIw1LYll0ImjXfuJ7z7R5N%2F4r6BrxnVTJYgLl1ieXqXLQS07vtsNCRMEPzFTHUY7KmY2iA71LIDzqYZg1N8cHfl44ykOwaGZCi&X-Amz-Signature=59f244d7ed123456df360d29205ff8a18b3650b84398e9c736892b6602487d80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
