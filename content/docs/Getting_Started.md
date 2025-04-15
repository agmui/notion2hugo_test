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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MQOQU6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwMr%2BoTuaudJN1Khj6GoWrfmmO8EPogVOw4Jp4Ol9oUAiEAt86yDzOVXZgQn4raHr6v%2F%2FiuSAOqWK6psIA8c5ELkVwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHksMJPurMBg40g%2BnSrcA%2BzWS1BnPYFtscoCj0WSXBzyow%2BifDHvzYh4tMbub5H4DueBsbM%2BWCuqbhDRVw7ZASb3QCBmK6DrNefp97cv3I7wGnCasZnKhmt2GJHGC%2FI0XOR45dmt3rDvwA1BelLt8cLz3m8WijNxRJ0X3fJbju4MI66kH0aAr6LqZpRnFbwgM5LrQRQ%2BBOQGUmv4pGD0cggYqPnG7IWCHE%2B16cdAlsoVc4ZicK2WGZnbzxOIZkZhPCfTWPfxLnT0Vcyb1lN%2FDoIt4e40J%2FCOc%2BlfO5RAOytU8X0T5et2Xn0laR5n8fsxahVdsu5peUMHWGhldmqQGDUTSXGDdFoLdXzf9MyRI2Y1vS47cR6vZ5Zn18zEM5qRGLuoseXLP1AvDYVzf%2B%2FKGcaZnKR8JomPboBHVMlrkPfxTgSur4Y0LbW06EH1ucthIKBVGyMLnQP60iGRCXwtABNyXnFpZs%2FhsRb0gSg50Uk087Nx64Y1X86G15YdVyxdvIq6get08nOU090vCk8rjaL6rnfYO5qDrqW3Ur5fRXIid%2Bzxrk5z%2FXuQfST0e6OnegH8UMe1gszLSwMiTAFFuz6PhN%2FJdbqiNVtC2SSMr52aNbjYMzHiwlxprHgxSLDt8hVdkdB1vLo%2BkG8cMJHC%2Bb8GOqUBtfg3McRsh73rFZELtiQayjhPHg3wmCDcJWklE%2BZzsL7J5VYCl%2FczNWk3G%2F5LIyRlUnurNSR8J2Z%2BFo7oZi9cxZd4b%2BAVsIXMZAWIL2iZJCUNno%2BSo2QWO24HcRLfEgvDz0YHyQUYv6DkT9sgtWT1alAVRgvLfX%2FBoN1%2BCgzQYXmsWwAZMSHW5QZyUuK6MHjTgEJv4ntWxr%2FQxe%2F9CxDe1mLem3qS&X-Amz-Signature=e447c5b3ed9594b23606fe946bdcf1d7fc9f3e4cd99b99668ad27967b4513068&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MQOQU6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwMr%2BoTuaudJN1Khj6GoWrfmmO8EPogVOw4Jp4Ol9oUAiEAt86yDzOVXZgQn4raHr6v%2F%2FiuSAOqWK6psIA8c5ELkVwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHksMJPurMBg40g%2BnSrcA%2BzWS1BnPYFtscoCj0WSXBzyow%2BifDHvzYh4tMbub5H4DueBsbM%2BWCuqbhDRVw7ZASb3QCBmK6DrNefp97cv3I7wGnCasZnKhmt2GJHGC%2FI0XOR45dmt3rDvwA1BelLt8cLz3m8WijNxRJ0X3fJbju4MI66kH0aAr6LqZpRnFbwgM5LrQRQ%2BBOQGUmv4pGD0cggYqPnG7IWCHE%2B16cdAlsoVc4ZicK2WGZnbzxOIZkZhPCfTWPfxLnT0Vcyb1lN%2FDoIt4e40J%2FCOc%2BlfO5RAOytU8X0T5et2Xn0laR5n8fsxahVdsu5peUMHWGhldmqQGDUTSXGDdFoLdXzf9MyRI2Y1vS47cR6vZ5Zn18zEM5qRGLuoseXLP1AvDYVzf%2B%2FKGcaZnKR8JomPboBHVMlrkPfxTgSur4Y0LbW06EH1ucthIKBVGyMLnQP60iGRCXwtABNyXnFpZs%2FhsRb0gSg50Uk087Nx64Y1X86G15YdVyxdvIq6get08nOU090vCk8rjaL6rnfYO5qDrqW3Ur5fRXIid%2Bzxrk5z%2FXuQfST0e6OnegH8UMe1gszLSwMiTAFFuz6PhN%2FJdbqiNVtC2SSMr52aNbjYMzHiwlxprHgxSLDt8hVdkdB1vLo%2BkG8cMJHC%2Bb8GOqUBtfg3McRsh73rFZELtiQayjhPHg3wmCDcJWklE%2BZzsL7J5VYCl%2FczNWk3G%2F5LIyRlUnurNSR8J2Z%2BFo7oZi9cxZd4b%2BAVsIXMZAWIL2iZJCUNno%2BSo2QWO24HcRLfEgvDz0YHyQUYv6DkT9sgtWT1alAVRgvLfX%2FBoN1%2BCgzQYXmsWwAZMSHW5QZyUuK6MHjTgEJv4ntWxr%2FQxe%2F9CxDe1mLem3qS&X-Amz-Signature=acc521f25890fcd90aa0802e088e981011681a2e2876ca4ac3f389967c223f44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4H35C3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOi5GSOjMB%2BJT%2FPVuxzLSyYi%2FXvA%2BPtlWBQURVM97WBAiBq9DrrpdXVbA4WXoeqA%2F3DLQ3NEu850A8S8F%2BIQJOsMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbNiIqAQgo5rWHtnBKtwDYCYnQUPcmXiYuXoZXH4Q9lTcbWFGh%2Fmo5gepPYTjTQRBRRuBHknQuNTuaL80Ogfdl%2FVmWSqv6LYJDleZ2%2Bp7kWbTdR1OzhDVzJ1v9UT7fKclp1C3VVmOzlsAXFXuj2uahSMXmWUEk6bM%2Fsk0Ra1DKc6GHPvliS54T0C7Gk%2B6lzRd0esFK8wTlvwODVX1d5nwJo%2B1d34l9yQxZjVW5Cx0LYn%2BMonyBafWSLpJ4sHzPqJxbKC9Gq07XVC%2Bt8pcBPWTFwtaOT1MU7agGMhYJmSHn4QmP9tQ1iHSqojFbd9TZtQIUBZm7b25ppEdT8aJ3304dNnKNurMlOwoYNgIXDfV%2FX6iCCUTZKTJDtXZE%2B8lElxhLydEO1ftDzxZ8Wir%2BNZS1JFL3rrJWo%2FrzjS734DNVQCZEA9%2FZ%2BMjfCBQIKjf8HlntnFJsyMlOoGwLt1zozwL5mM%2FPmZF495gj7D6qP6BcrunOw3bKpowmKQGnzKdeJo3nLp3bWnfBVyOUpAH9UflgLDZ%2F8E5luE8BBWpUwMEhq6d6ePgsp2RjocgKqdbQjbbEmPpmDqEFzqsg3hE2QSkJw3GHlNYHoTvAXJaEDpFNMOhpctFhAfUrSNpxZ6QLz7xT83yJdGtMVIrtWww3MH5vwY6pgEk103u0wlhlK227Z2C1RprNmz97mELNkRTTKOK7%2BH8BLScennwFmdibjh1qAB50Y7Z9a1GVO7CVlQ27hIDDgQEs27cWC5Bo9ZBD3x%2FVilxM6A6DUa6KIGoYzIJww3uN05Tafa1IYW4rOKt1TeK8UMN7OYl9L8GZN7kemJYOVzjW%2B%2FQLxRINBlh0qFyJJ4a5LXjINy%2B6v42Z5pPSQRPBNOo7aRtZg7C&X-Amz-Signature=67ebfc2d5f6cad3c44f8a2b7ca46773bda67bffa68f2f760271c498634923645&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QYQUUR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjxH02UFbKDmNGji%2FS06JEEcebWPgbMXJVjSiI1UGeFgIgYQTZI7tmXSk5hjhoRAhmqAjyVgLPXXPZdy7w15Z08woq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLG3Dd8q4clCvYRqKircA81MsvzK2ShoXrFfwd%2F9ep123AkJOpkSHrUHQSNVh3Qq5rV8RJSRKoJXUWBxEJ7V5og%2BxvmYiJvcPJedweYN%2BbBhwUnHmD5Xwma50fjaLgRCGE%2BjtKs0QOVApREUVRBExUecSvqjdo4xgiCQIRl9FdV2c7%2B5xalV5ja9fY4eduHBahLrCzkDqWGW0y7uVP0EeI4BDW3bGNlr32QYiluSdM%2FivY6PZuPhbxvw5QuGWtNFacVTxM%2F9%2BO8iATsByZC6j8RMKbbtWWKg22b5%2FHFW7bG629ZuInfyMWyNVzdu4OPFB85XR6iNSYULWSVu02SpL40gCqHXKZuYiOm84LEOfqSLMoDvVTsPfN5JrPSY98qxG50E%2FXtTHtYAYwJGA0nyEmMhv%2FBHYs9K0YPq4WTQJikYf5sq2v8GqvwWgtDhOp9IpsXGAdjEXH%2F8g0w%2FhOim9LAsS20d0UASah4l6FGZLxaE%2BmSg7RNgiirONbqEg%2Bm0vZvnEkJHMFBZrIGnfx9EH5LVT74NUehcd6GBxiPQX3jcHHio5bql0FEi3kNd%2BdFHtYi1h8f69YQIfDZd3Rcqm0T57pMfKrYdXi9w7GcvaCpBjrzXM9RJ%2Fb2Ixj1MssEEIBL1vKX7W1iaiLByMM%2FC%2Bb8GOqUBdRGnyhAcbpHTiYW%2BlRrOahq9KF%2FaH%2BH1e9W7mTyl8ZBcfQCt8JfCIrZBKAVaHm0aByhlAfQvjZKZfKZQyHRfdf01sMz%2BePB%2FzIfnGfGJmwC2N5RXqhLYYqxGaR8GUbqJlwWgpxg%2BZEqmUjMaGq%2Bp%2BMwgaJSHUmZTiSWxVzVRlxsjBWSftFer9FltMhaPUu4LmZL3CR8r4RO5sc0x3Zzn7ljOlnpT&X-Amz-Signature=40976d26efd87649edbdf37e92e7a3b5239aaee46075917278b1d2f19dafa222&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MQOQU6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwMr%2BoTuaudJN1Khj6GoWrfmmO8EPogVOw4Jp4Ol9oUAiEAt86yDzOVXZgQn4raHr6v%2F%2FiuSAOqWK6psIA8c5ELkVwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHksMJPurMBg40g%2BnSrcA%2BzWS1BnPYFtscoCj0WSXBzyow%2BifDHvzYh4tMbub5H4DueBsbM%2BWCuqbhDRVw7ZASb3QCBmK6DrNefp97cv3I7wGnCasZnKhmt2GJHGC%2FI0XOR45dmt3rDvwA1BelLt8cLz3m8WijNxRJ0X3fJbju4MI66kH0aAr6LqZpRnFbwgM5LrQRQ%2BBOQGUmv4pGD0cggYqPnG7IWCHE%2B16cdAlsoVc4ZicK2WGZnbzxOIZkZhPCfTWPfxLnT0Vcyb1lN%2FDoIt4e40J%2FCOc%2BlfO5RAOytU8X0T5et2Xn0laR5n8fsxahVdsu5peUMHWGhldmqQGDUTSXGDdFoLdXzf9MyRI2Y1vS47cR6vZ5Zn18zEM5qRGLuoseXLP1AvDYVzf%2B%2FKGcaZnKR8JomPboBHVMlrkPfxTgSur4Y0LbW06EH1ucthIKBVGyMLnQP60iGRCXwtABNyXnFpZs%2FhsRb0gSg50Uk087Nx64Y1X86G15YdVyxdvIq6get08nOU090vCk8rjaL6rnfYO5qDrqW3Ur5fRXIid%2Bzxrk5z%2FXuQfST0e6OnegH8UMe1gszLSwMiTAFFuz6PhN%2FJdbqiNVtC2SSMr52aNbjYMzHiwlxprHgxSLDt8hVdkdB1vLo%2BkG8cMJHC%2Bb8GOqUBtfg3McRsh73rFZELtiQayjhPHg3wmCDcJWklE%2BZzsL7J5VYCl%2FczNWk3G%2F5LIyRlUnurNSR8J2Z%2BFo7oZi9cxZd4b%2BAVsIXMZAWIL2iZJCUNno%2BSo2QWO24HcRLfEgvDz0YHyQUYv6DkT9sgtWT1alAVRgvLfX%2FBoN1%2BCgzQYXmsWwAZMSHW5QZyUuK6MHjTgEJv4ntWxr%2FQxe%2F9CxDe1mLem3qS&X-Amz-Signature=3ea0c6d6f67de0030b9a8638cb1435c09d1602afd7f763c50d180c059b8ebf35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
