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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THUVCDE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FTF15sx%2F5rCpK6nZHtgzutCGh%2BmPzdF%2BBlWM7KEjG4gIgbi8E1W%2Btx3gqRc%2B5EVg0wBcE4Pho9uGyZD7tFg1HJMsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFASXLH%2BrpYnrdoQSrcA7q5c6uJn6wT5HwVYOoYBryBQVZH5UbNeXSbZ84UIQy1NOyLrlWZzh598jOFpMPBt0xqThOGLz90ROzZRunkHwxtoy9KxbDMzCXVF6T8z4mv7urfspI%2BciZw8CSwX4H0C%2BTmrpGdr9uNl2yTJCjC1%2Fa2X1OD06VhtfnOtBBb43Phg4O5pNGAF%2B0Ch0Ll9jmPc%2F5jWyX9xrVYDRKFR%2FRAGvyztxozMYTqv0l9P7PaDO4ITgLsU0%2FOUs1SYQb4UKmgSLpVpKGW%2FBArgsk7wy4%2B7ZXTF0%2FtP2PwoLVz3YahRn3uBv5BSFyJgk1%2FbwQx%2FSf9%2BJp2cyT9EjxI8dq%2B8htb3MnUqWz4B5eBD6NfwirMZUXdAeZKM5I4rSqtyDsDAo%2FCSQo1AGrd4HqJahc1LG9cu2BxjAnSHLy4jyr8H87zKYPN0wVTD1RZbVl%2Btr6v9LKTrDLQ6ZT2J3U0oyUt3ehQ%2BzFqVdqJZFawXw6dUuSBq2kvr28HZGsVoSGNg%2BDB1dPU8Sp3ek9eHWHn1GWxzXlIOO8l6SgOK53gN075LYeqtQ2cQK%2B0M38uA8PPxCFizkDnrrkmIoevl%2Fbb5dB%2BMil8DDaoJZb%2FjULHK5Sjo6ebftxnY4of4Eod9dQW0JEKMJL6pb0GOqUB0%2FnBUwkMDQfiOHnxqh%2BlRp8H75CEbjHyZ%2FsGrzB6TXlndFE6BzjBBqLCCXN07Ees0KexY6nmkMSFIw%2FHGNKeymgD4feUfiE8uz8gSZAvNx1dwW4jaKjT5939FF8dLQV5J2mX4xb0cJrWFFC5oAqgfQYD5RKVeJaHpvJSRogQ%2FOuQhq6DULE3EX%2BrHSfJ1NzpSVOvROqBHTs27yKBMCw%2FfXSzjjVT&X-Amz-Signature=ca1a368291e43dcb5a839f0aae3f692ca9c34edf17db5c2ee830b386ab91b3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THUVCDE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FTF15sx%2F5rCpK6nZHtgzutCGh%2BmPzdF%2BBlWM7KEjG4gIgbi8E1W%2Btx3gqRc%2B5EVg0wBcE4Pho9uGyZD7tFg1HJMsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFASXLH%2BrpYnrdoQSrcA7q5c6uJn6wT5HwVYOoYBryBQVZH5UbNeXSbZ84UIQy1NOyLrlWZzh598jOFpMPBt0xqThOGLz90ROzZRunkHwxtoy9KxbDMzCXVF6T8z4mv7urfspI%2BciZw8CSwX4H0C%2BTmrpGdr9uNl2yTJCjC1%2Fa2X1OD06VhtfnOtBBb43Phg4O5pNGAF%2B0Ch0Ll9jmPc%2F5jWyX9xrVYDRKFR%2FRAGvyztxozMYTqv0l9P7PaDO4ITgLsU0%2FOUs1SYQb4UKmgSLpVpKGW%2FBArgsk7wy4%2B7ZXTF0%2FtP2PwoLVz3YahRn3uBv5BSFyJgk1%2FbwQx%2FSf9%2BJp2cyT9EjxI8dq%2B8htb3MnUqWz4B5eBD6NfwirMZUXdAeZKM5I4rSqtyDsDAo%2FCSQo1AGrd4HqJahc1LG9cu2BxjAnSHLy4jyr8H87zKYPN0wVTD1RZbVl%2Btr6v9LKTrDLQ6ZT2J3U0oyUt3ehQ%2BzFqVdqJZFawXw6dUuSBq2kvr28HZGsVoSGNg%2BDB1dPU8Sp3ek9eHWHn1GWxzXlIOO8l6SgOK53gN075LYeqtQ2cQK%2B0M38uA8PPxCFizkDnrrkmIoevl%2Fbb5dB%2BMil8DDaoJZb%2FjULHK5Sjo6ebftxnY4of4Eod9dQW0JEKMJL6pb0GOqUB0%2FnBUwkMDQfiOHnxqh%2BlRp8H75CEbjHyZ%2FsGrzB6TXlndFE6BzjBBqLCCXN07Ees0KexY6nmkMSFIw%2FHGNKeymgD4feUfiE8uz8gSZAvNx1dwW4jaKjT5939FF8dLQV5J2mX4xb0cJrWFFC5oAqgfQYD5RKVeJaHpvJSRogQ%2FOuQhq6DULE3EX%2BrHSfJ1NzpSVOvROqBHTs27yKBMCw%2FfXSzjjVT&X-Amz-Signature=71d0de1866bafbc66592bfdaddbda003aef485c9f79d3ead2d7ea443c31265cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBMCFPW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYOmQhVvPVCsRJPR5cOsHVgg%2FrkEkYdhylvZO8IXVudwIgMSyFv%2BvDKjyQjDp9S0btCRfRy1Ltis1j5o%2FdZZ9ZjGoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAGZOKMmizLaWXfuyrcAwN9hi6uv6YbQ5B38Kq7cmUFVnwB%2BjUtoWK40e7X1T3Vo2a8WJ7zpFbG5hJz%2FYQGcnIQpTiMODJ2xum4RCG59SHZMgWX0NwGPEYBKn5S2yERrA3UtYFOACKjtiLlP6rFbU9mTjyg68nVRW6gb9fTvNDkheTSbikzIQ7Ep0GeTOGJZqf7H7v7UGqC7vS718mK4ns0ZmjJ6qHjbZa7crIgwA%2BOnHkPkZCCJ%2BM%2BiirGiEQb6GdjojBXIwqN%2BjT%2BCBB7RFXj%2FQgyCd596LZYw738eYedksksY3uT6%2FKUfLSfxdw8JoD%2ByzB8nE%2B7t4xaSr1sgZJhxefkwA7HD6ChJxBoNGLVFNgJ7%2Fx%2Fyx4sS2AS%2BFC80LqOC4UBwttR5QVeMY15c0AUEJeT3Tz0SmGOZr7dAsXHcI6cWTi%2BPJsqxNQiDdOrm4REwl5bcKEVZrnysafXxbzl79Cne0FTWSrDWqxnKUskBTf15CqXyRnu5d6hcYUKLQH3j0TfuiiAWc7f8hi2ek0KpTXSa7LwrpTMdeDzqxC2ft0TCDrjLW8MgMphSn1w8xvZIpCAHav9Ttj%2BFEkqwTbyKeXXrL42vQMh5s1j4xEOmqItaA9SN3cFsvSWJgQ74jIZz7FLtgKnECDgMPb5pb0GOqUBWxT5%2FNGdMsBkXzlWjAO0HnrgxggU92SLCfAGY5vCG1GuC25UQUHRghYDahU0kd2PO%2B7Pq9LtyQIv%2B%2FgOFzAhDo22NN8uO%2FC0j740rpb5cFIiBcZJi5mY0TRBAh95L6gAwB21VnMMWsbRNHPBiTlj7yY9uxl2AavD8tAmpf4dJk9ORCJW1vgD%2BG%2FuCDIteZ1KRxKB5108fm38sx4SMQWrsmE6j7Xx&X-Amz-Signature=b4391f7fed0defcad18e7e7449e247d70bcf0ed3aaf4b5552d9f76b997800010&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPJDYXY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGm9vbZslZS7z9ih6nYc3pD32vhLYEQpAia4Rwyj%2B4slAiEAiphswvJLzZxWrXo%2BwfMFIXXnAIFgAAN1Fm6ttiwtw4MqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmEoa3BbbMWLurOUCrcAxpaDCb9ljL0x5y5qixV%2BFQ767t5C5FJy7lHt3jsQn%2FQiCAFm7svwl0aEFzlDeCw7%2FxTEMZHvAKmhkgnPynPgtqEyJpD4iUbFhZ0JmXmGXFWzE%2F4kni95X783W2VIbS7OC6ViF6N%2B2utyi4yv8kQCgnljHDlJ0%2FSDG5L224yrwD7WmhULLF9mYdDD44iNPnHnuBYSXJYaqFlXiMWQhENYW0kFm%2Bk4PKOMTeBiEgtbyDqngiZlWTG7zKzHmcS6fbEz50HP6fHkND%2BtPkkjThIXj4c5akDkAkQPVdfzEuse%2FvjzHfhqoPt%2BSvNqsFkRw0zzeRzuPXH27Kg3JCIBfjjJ7BjUu2brJeg8tSsytzo0bggKAyVBIldp2efc%2FDLimCvZmR4zTXrw1%2FSl%2BEKJIEax7hSFqTmeRG8vW5C%2By%2FocZwFBjMFIbwWwC2gyLvfOz%2BijA93T%2FEsVTohzNRDRiG8wdICihHZXUJR31FGaNKNEJu09rJ1DkyoksjPcqforJ1Zm457iPRThvzBzeEjXRLsxJBOPmC0qf5sORz5gE1a%2FgRjmHzAK%2BAYaZcea5n5sixPJ6%2B%2FvJhM%2FN%2FnYF3lr28P3ep5MlEhG5PWIA%2F33lVspMFSNOXCwD2fFpOPA%2BabMIb6pb0GOqUB6kjSDtr%2FdvQRAl4mJbkgfjxwn1cMMIxHPMyIg9XCr2yMqEmoyQ1pOgHJGO0JQ1232X6AFr3oVmmTCHZchHseioB2GXfA%2F9z%2BTwqAXhht6g4WOtbfhWNoqCumaHATHZ5ZD5FXgryUQhk4Y9OXQfZp%2BX6d0Q46x%2FoYHhLGQLgBI1EQiCikeYx4qOM%2Fixf6NhV531ZMmVjtfooblxJWnnx0TqesjSF%2F&X-Amz-Signature=c21088011c26919cda6f704a7c551ff002fec28b95213d38c2f8f6d1e2d403ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THUVCDE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FTF15sx%2F5rCpK6nZHtgzutCGh%2BmPzdF%2BBlWM7KEjG4gIgbi8E1W%2Btx3gqRc%2B5EVg0wBcE4Pho9uGyZD7tFg1HJMsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFASXLH%2BrpYnrdoQSrcA7q5c6uJn6wT5HwVYOoYBryBQVZH5UbNeXSbZ84UIQy1NOyLrlWZzh598jOFpMPBt0xqThOGLz90ROzZRunkHwxtoy9KxbDMzCXVF6T8z4mv7urfspI%2BciZw8CSwX4H0C%2BTmrpGdr9uNl2yTJCjC1%2Fa2X1OD06VhtfnOtBBb43Phg4O5pNGAF%2B0Ch0Ll9jmPc%2F5jWyX9xrVYDRKFR%2FRAGvyztxozMYTqv0l9P7PaDO4ITgLsU0%2FOUs1SYQb4UKmgSLpVpKGW%2FBArgsk7wy4%2B7ZXTF0%2FtP2PwoLVz3YahRn3uBv5BSFyJgk1%2FbwQx%2FSf9%2BJp2cyT9EjxI8dq%2B8htb3MnUqWz4B5eBD6NfwirMZUXdAeZKM5I4rSqtyDsDAo%2FCSQo1AGrd4HqJahc1LG9cu2BxjAnSHLy4jyr8H87zKYPN0wVTD1RZbVl%2Btr6v9LKTrDLQ6ZT2J3U0oyUt3ehQ%2BzFqVdqJZFawXw6dUuSBq2kvr28HZGsVoSGNg%2BDB1dPU8Sp3ek9eHWHn1GWxzXlIOO8l6SgOK53gN075LYeqtQ2cQK%2B0M38uA8PPxCFizkDnrrkmIoevl%2Fbb5dB%2BMil8DDaoJZb%2FjULHK5Sjo6ebftxnY4of4Eod9dQW0JEKMJL6pb0GOqUB0%2FnBUwkMDQfiOHnxqh%2BlRp8H75CEbjHyZ%2FsGrzB6TXlndFE6BzjBBqLCCXN07Ees0KexY6nmkMSFIw%2FHGNKeymgD4feUfiE8uz8gSZAvNx1dwW4jaKjT5939FF8dLQV5J2mX4xb0cJrWFFC5oAqgfQYD5RKVeJaHpvJSRogQ%2FOuQhq6DULE3EX%2BrHSfJ1NzpSVOvROqBHTs27yKBMCw%2FfXSzjjVT&X-Amz-Signature=3ea2270b3e7d4b1db0bc9851ba96c60d730a01bb928f433d168383edc4fb7956&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
