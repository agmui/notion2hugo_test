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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKJPGKS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD108uZjDGHxTipGI5vJPhR9ciOiffepwEngIwteYb0UwIhAKBblJ7ryk%2B50QQ3K9Llya92CXdiSeD2oSiJ6piIT27NKv8DCF0QABoMNjM3NDIzMTgzODA1Igy4XCXDe2GtiYNr74oq3AOOo20DngY%2Bh%2B1Wx4hFEUss%2FMi1hJx16T6%2Fky8kqjnt9oJjV9UUgfCj2d33WvVr7UhHmIAmNWO6D0VIKydmgWEw0EGzN8JZpi0fD%2FYxSDagaPoOgk3cTlh2xDYiHg9xphQ2f%2BKrrptb8yBUGQoie8V47wcVyE7BfL2GVar527IHADW5rYMerXMfoAa%2FAMEDuH1RGVqFXJVmPmAMJ8tSzcl%2B9A4w8D7XQc4QZlsCt08RoFLJiPqvAt%2FrWS%2BEYzt2cSIJI8NaSORlVsfzeMRy%2BiFfzcbzzmejrirU2ZH%2FCYVQOlcFBFc6n1hsgy28B0lvQLESiMZYidsF1IbL9WDtMhN3oC%2FJ15nuL8eNsn6V15NHhxcKM3%2BsHnDnJNe%2B9fYKE5uFWShoS3YjHknC9x%2FGRuNFQn4dk5llfq7aGg45pXmMdxQ%2BpRUHJIBdzk8KX9VrrMwwZtD7KWPxUtDfcu4H84TWmmsN3Y4SGI11bOGzK4HleatupLgEksXyzZL1%2FeGGluYUV7vsmxkq482xnlGQiJSJZO4niAfLWtOIvT4ztqkscQH06Mktgr7xZ0GzErESjU6YIZf8dD%2FcdFbJkxtG0Ch42XAGK6XprhgckLH62DcypJSasxqTIqY29zXvHjDSxJK9BjqkAePpqv8wsddc35fF9uj3Mz%2Bt07KbxHsR4bifxMLhdOSzQM%2Bl9V2IObwboeX290UMPtPZvpnjWTjBHLdz5H7za%2FbLLqTeBDfokpHeL6qHlv5gH6tZ5mm%2B3M9sGi%2B1YFPirV3PyEcLD3ZTBapXkUUnZbSpG%2F9xDwvEzUUoUnTW47o729CXOpkEvC5jqohKRYQu4rplyWevgV3BkQq7HcafwWjS7j3J&X-Amz-Signature=46e89ad3f23fc978a91ac08cf764c12b4d0747f3ebb27d46c3f9b2285bfd128f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKJPGKS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD108uZjDGHxTipGI5vJPhR9ciOiffepwEngIwteYb0UwIhAKBblJ7ryk%2B50QQ3K9Llya92CXdiSeD2oSiJ6piIT27NKv8DCF0QABoMNjM3NDIzMTgzODA1Igy4XCXDe2GtiYNr74oq3AOOo20DngY%2Bh%2B1Wx4hFEUss%2FMi1hJx16T6%2Fky8kqjnt9oJjV9UUgfCj2d33WvVr7UhHmIAmNWO6D0VIKydmgWEw0EGzN8JZpi0fD%2FYxSDagaPoOgk3cTlh2xDYiHg9xphQ2f%2BKrrptb8yBUGQoie8V47wcVyE7BfL2GVar527IHADW5rYMerXMfoAa%2FAMEDuH1RGVqFXJVmPmAMJ8tSzcl%2B9A4w8D7XQc4QZlsCt08RoFLJiPqvAt%2FrWS%2BEYzt2cSIJI8NaSORlVsfzeMRy%2BiFfzcbzzmejrirU2ZH%2FCYVQOlcFBFc6n1hsgy28B0lvQLESiMZYidsF1IbL9WDtMhN3oC%2FJ15nuL8eNsn6V15NHhxcKM3%2BsHnDnJNe%2B9fYKE5uFWShoS3YjHknC9x%2FGRuNFQn4dk5llfq7aGg45pXmMdxQ%2BpRUHJIBdzk8KX9VrrMwwZtD7KWPxUtDfcu4H84TWmmsN3Y4SGI11bOGzK4HleatupLgEksXyzZL1%2FeGGluYUV7vsmxkq482xnlGQiJSJZO4niAfLWtOIvT4ztqkscQH06Mktgr7xZ0GzErESjU6YIZf8dD%2FcdFbJkxtG0Ch42XAGK6XprhgckLH62DcypJSasxqTIqY29zXvHjDSxJK9BjqkAePpqv8wsddc35fF9uj3Mz%2Bt07KbxHsR4bifxMLhdOSzQM%2Bl9V2IObwboeX290UMPtPZvpnjWTjBHLdz5H7za%2FbLLqTeBDfokpHeL6qHlv5gH6tZ5mm%2B3M9sGi%2B1YFPirV3PyEcLD3ZTBapXkUUnZbSpG%2F9xDwvEzUUoUnTW47o729CXOpkEvC5jqohKRYQu4rplyWevgV3BkQq7HcafwWjS7j3J&X-Amz-Signature=e687d989cd783d143bfb31ab3c6aab6eb3ed21831501d0bd0a32cbab4101ee9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCZFWJ4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7nLfaJuzYM33req3VtB45i%2Bn7czt3dMbWc3rMpC9EDwIgXDDXIp9ANLfzp2kP7UNSMgE02igsUNi4bHDeh0erKrYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNcIjijCGDKctI2bSCrcA5%2BnGNVbvDrXTNEchhT8WGYGyhDZXpUujj1SWKMfQTvZrg6rsynfBYWIhuXaWNsxLuybLvrd0D21M1SQUXDER%2BV5PuYwpNk0OLAP7aSn8j4loaDbS8062hoFc%2BEOeuOFxmW3PH4JvTs562m7tYemGTI048rsG%2FyNwOcRrTL6BEw7bxFY0BYq2Yd%2FK4xl65hLffc0MUqqz%2BZ56KiIzqW3dtrvzvwSr6h9Hbvfiv8MWOkAdoikrYuyS2QFd%2Bve9Cp%2F6kvqXyB%2FDw5whGCCe2FqpoKve8QlK6JK3l1TCbp0bCsOIEsXwq7J39NYbFBCUkb%2BATTzVjETkc4xPtyruYpqORmT%2BL50RXfQxqsifXjh5vQDPTf7gdlCDJD5g8mignqu3e29%2FjXoaB9s8ncNlfTIdqGmmKqUsfWL9yw4uutGGf1CTHKhLN99q9OqasbwxnF%2Bz7K5Zrao4BQm2HcYE2ihy%2FXLvFEfmmyR1l62DJr%2B6ikhmpmNsh21bxylLABs5%2BRpVYaCYiALzwjDzPzRJ%2F0MHMAdPsTO5xlJAkpaQuxbpmJzkyOVo3QDjB8Tlraf5DJjeknocO5vhAyf7CBY8lDA7K6PslCWhk9SF6gEB5%2Fx47clx%2FA2Nu%2Bg9CbHuyaxMOXEkr0GOqUBtq9kTA%2Fj%2BGp5xw9ltOQbH87D9GgbeUsD6o7sMmcdhO6bZtuCJbSAz7AB4zGNO9aM1jVT6C4f43HBCgbINfdoIcgWnk9PnNcA1YtNPgy9pCCsii9guB8HjV8F1IXFnoy8tzVAXhobgZ7x%2FTTvalYCRczaG1aScTVuxngTP2PlGOkAefg%2BJffYgT0%2FBh3MC52XG%2BPA%2BUZj7LwSROSlSLQjgvkwxqIP&X-Amz-Signature=ad6765529aa96ce7349e71b1bde65769f8cf0402f5fd34e65397da873638f377&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UL36BK5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDbDaomKT%2BYruBXoFp4LJhHRTaR%2FRChFnOJpyK%2FJwVS8AIgUJlzeWk8nLYVTuzwIH4lov1Jj3thfCOHRhAfDnJJsZcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIMtXkQN0h19UCKbSCrcAw4ZX0CnWFPQTx10Z3bX%2FLUx%2BqO4kbfakPQjetMK7Bq%2B6crd1c25K6xDZl%2B12iVtfU0e4jDAOttM41vqAClld4yMer19ZmL9xH5guFif2cjpx47xs4etxjPl6AdBxMwZVwo63pTg0tEnoUSIK0PjVoYX4x81lit18ynu8T6p3980YjGsfVDwzX4iCU52D3B8IM1QL1%2FBOTDN3IK3YJfhO%2FiEGlBZ17fruxOLip89KVBwud5jvhf1cDq85jTqPx3gw2C4uFNyr1kAvcuhWJOZsLjiNKE0I4wcEVQ7xy5h6TgSKLeZjT34lSPlRvsqt2NLpp%2B49i55seE4t%2FZMaSHT9xG3ECRC5FqC6thCVNTuMuh3OLORC%2B20PMjbj5geT6Lgdi2hNriO%2BT0Y3MU2zNQS0LgSHfANMWkrQaPNDQx%2FWpgmr4y63lbZYb6fySuUwuijID8TpPfiKPtEKT3A%2FuBJwuWus2%2Bxi4vE026dSJplY1W9ioZJcQ9EeFNo68hhneLmiM8Tjz0indrRUKhBqehSXr2TYwl8W8cDXULdvZt6ScL%2F30P3%2Fb36892Z47Pzgf0f2lmLL5exFr0lFX%2B6U4lVGF9RyOfiIUxCVCE%2B78qw%2BEujkeWWAAlv4gYaZDzDMLHFkr0GOqUBWqT1x1hEcuVYxSajOwWxQdAqmifCkfhE8vRmVTRunIz6Z46fRIh08MQxRDIFLvlEgiHwq2wiZmcmz0J94QIUOlxmqPvdW61uQUSW9RFd3qkXM8q6xeshwT7bXGznCe73qtZxRR%2FwkLr0NbSnsUJ0tgJYWRtFt%2BYK%2BGDrri0CzYA61Xp4a%2BRe4IFW5wA0POH2LmfulArvD1M7E%2FGb6Qcs9ELbOHU7&X-Amz-Signature=c3e0dc39704d7980d9f042419cf2f398bf3727daa7d205c8f2fe841e83035012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKJPGKS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD108uZjDGHxTipGI5vJPhR9ciOiffepwEngIwteYb0UwIhAKBblJ7ryk%2B50QQ3K9Llya92CXdiSeD2oSiJ6piIT27NKv8DCF0QABoMNjM3NDIzMTgzODA1Igy4XCXDe2GtiYNr74oq3AOOo20DngY%2Bh%2B1Wx4hFEUss%2FMi1hJx16T6%2Fky8kqjnt9oJjV9UUgfCj2d33WvVr7UhHmIAmNWO6D0VIKydmgWEw0EGzN8JZpi0fD%2FYxSDagaPoOgk3cTlh2xDYiHg9xphQ2f%2BKrrptb8yBUGQoie8V47wcVyE7BfL2GVar527IHADW5rYMerXMfoAa%2FAMEDuH1RGVqFXJVmPmAMJ8tSzcl%2B9A4w8D7XQc4QZlsCt08RoFLJiPqvAt%2FrWS%2BEYzt2cSIJI8NaSORlVsfzeMRy%2BiFfzcbzzmejrirU2ZH%2FCYVQOlcFBFc6n1hsgy28B0lvQLESiMZYidsF1IbL9WDtMhN3oC%2FJ15nuL8eNsn6V15NHhxcKM3%2BsHnDnJNe%2B9fYKE5uFWShoS3YjHknC9x%2FGRuNFQn4dk5llfq7aGg45pXmMdxQ%2BpRUHJIBdzk8KX9VrrMwwZtD7KWPxUtDfcu4H84TWmmsN3Y4SGI11bOGzK4HleatupLgEksXyzZL1%2FeGGluYUV7vsmxkq482xnlGQiJSJZO4niAfLWtOIvT4ztqkscQH06Mktgr7xZ0GzErESjU6YIZf8dD%2FcdFbJkxtG0Ch42XAGK6XprhgckLH62DcypJSasxqTIqY29zXvHjDSxJK9BjqkAePpqv8wsddc35fF9uj3Mz%2Bt07KbxHsR4bifxMLhdOSzQM%2Bl9V2IObwboeX290UMPtPZvpnjWTjBHLdz5H7za%2FbLLqTeBDfokpHeL6qHlv5gH6tZ5mm%2B3M9sGi%2B1YFPirV3PyEcLD3ZTBapXkUUnZbSpG%2F9xDwvEzUUoUnTW47o729CXOpkEvC5jqohKRYQu4rplyWevgV3BkQq7HcafwWjS7j3J&X-Amz-Signature=78c2ea77db0c0c6a752deb971e0f2313b6c4187d778f83c6c9db043b16b6abbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
