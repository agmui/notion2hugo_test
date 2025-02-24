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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YEMAHVG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBwYqALh3NYktWjxQQz245Pfvfx3jYGCS4dRK1Na9mcQIgdCmZpSsNQRsAlPYNBsam75XGAVG%2BnZCcfJz7ZPAAUIEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIz%2FbjoR%2BXyxOxmp2yrcA8NBo9GysYcJp3SftmOEKSNit5ItWOhGzqaYImdnwvtXISXYGeuTzPBWlwWDjF8oAfIZRWW8xv68jh6GjCI2fgx2SA1v2%2F4tKGHk6%2BAutTIcGBkCw9IQ7%2BFmDdi84ItQs0JkXiFqY1r80HuylhyqRW8yT4YXqGEqIYgL7FNxHw69fvGAMxgBCEPk%2F2nf0W2Pw%2BUEx2llVKf1vT0K978FunR%2Fnd%2BQTMlb0oSTNzeMgIb5q9qUJarsr1X8VuPmy4saTyLGwPLDx9LrfO8TXTepEGSnpEmYHNSxwacHmxNSSnkfkE6oNlU%2FuUkSgbL8j6ZCo0ZeEET3iQqgwoUMBkwdLyfgSrA63hUTMJxx%2BQezlY6qUX6NTwYMy8x%2FCWRI5t8cvGMDE8QCEvXsecmxIHjkl16zmQQfF34zLTwgzSurpVMIG8yQRDpBdkJf0bIDeCXknaY9Z%2BGGRsScrns%2BNGmniMyXS8kWHm3e0GrKMHnPM0niJYO9JouJnu9jFmfKHSmMtNqfm%2FIfzNKfmZDBYbneyIN%2FO7s7JzJJ9Ci%2Fqz6XDY%2FUyn%2BqtZ4o62swrJd5Xkp8UUM2%2BFtpNTie4LcRqMlnEM%2BugSlqS6agz%2F0FniZ6u5%2B%2FCYCAXbeluPlnTCH%2BMLq6870GOqUBzSGu0twopex1bJwbgglmNZfdlunWIhmJ9J9gxj7uZseLRzuRXAAK4m8NENxv5cQU7InlVvctX%2BVYeLRuzIFtGx0j8XzVPUAMG8BaPHZwnJeYOEW5jULtb6MauBHljByHkKL%2FoOFgUWEyoE95nf5iAaNfsZqRP%2FLvXIsQXJ3%2BqeRtOp1hEGb3ReDUwuZIFfu71xPpRGplfR2Ojs%2B%2BkPvgS1%2FQTvXF&X-Amz-Signature=1bd0a019c33507c86e61650ff660b21cf47ed72f4041df453eacf3a25dc485b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YEMAHVG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBwYqALh3NYktWjxQQz245Pfvfx3jYGCS4dRK1Na9mcQIgdCmZpSsNQRsAlPYNBsam75XGAVG%2BnZCcfJz7ZPAAUIEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIz%2FbjoR%2BXyxOxmp2yrcA8NBo9GysYcJp3SftmOEKSNit5ItWOhGzqaYImdnwvtXISXYGeuTzPBWlwWDjF8oAfIZRWW8xv68jh6GjCI2fgx2SA1v2%2F4tKGHk6%2BAutTIcGBkCw9IQ7%2BFmDdi84ItQs0JkXiFqY1r80HuylhyqRW8yT4YXqGEqIYgL7FNxHw69fvGAMxgBCEPk%2F2nf0W2Pw%2BUEx2llVKf1vT0K978FunR%2Fnd%2BQTMlb0oSTNzeMgIb5q9qUJarsr1X8VuPmy4saTyLGwPLDx9LrfO8TXTepEGSnpEmYHNSxwacHmxNSSnkfkE6oNlU%2FuUkSgbL8j6ZCo0ZeEET3iQqgwoUMBkwdLyfgSrA63hUTMJxx%2BQezlY6qUX6NTwYMy8x%2FCWRI5t8cvGMDE8QCEvXsecmxIHjkl16zmQQfF34zLTwgzSurpVMIG8yQRDpBdkJf0bIDeCXknaY9Z%2BGGRsScrns%2BNGmniMyXS8kWHm3e0GrKMHnPM0niJYO9JouJnu9jFmfKHSmMtNqfm%2FIfzNKfmZDBYbneyIN%2FO7s7JzJJ9Ci%2Fqz6XDY%2FUyn%2BqtZ4o62swrJd5Xkp8UUM2%2BFtpNTie4LcRqMlnEM%2BugSlqS6agz%2F0FniZ6u5%2B%2FCYCAXbeluPlnTCH%2BMLq6870GOqUBzSGu0twopex1bJwbgglmNZfdlunWIhmJ9J9gxj7uZseLRzuRXAAK4m8NENxv5cQU7InlVvctX%2BVYeLRuzIFtGx0j8XzVPUAMG8BaPHZwnJeYOEW5jULtb6MauBHljByHkKL%2FoOFgUWEyoE95nf5iAaNfsZqRP%2FLvXIsQXJ3%2BqeRtOp1hEGb3ReDUwuZIFfu71xPpRGplfR2Ojs%2B%2BkPvgS1%2FQTvXF&X-Amz-Signature=9182ec679a03ff5723e731386a75aac4af876e5126ec686f576239b36645d123&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S66KEMX7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARxk%2F5O0c2JVjv8t9QZhW0NjuS3pbRUHCBYOZmDHrVUAiA8lNGp9XyuAcIDWWAkYseNP4vGtTMbnjVFOV11UesZ%2Bir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMPZcGnCgzKSj5MlldKtwD2hB6N7ivoRWLWttUhmyVfQn4UB6wyiESIvN2Th7E%2BxcwzRoYeKIm5K5N9GrS%2BMEXcLckPD647S7YhCf0wvwfe6xgwLFMr%2BGC%2BxA%2FlT6rxuMuji6Vti9N1H%2FxVbAY0eKfcotJX3o3T%2BsH4GmoNxh83ZeQEfwoYvz%2B2dn6r7K77Nk9llljfL1ssQkdRWgCYpHr9LAIpu2n%2F8XiZCw4CEVtOdRS%2B1TYm5Oe8XiS1SG%2Bcv4aGbWsqK4DtJ48ZouL4JSW3qV4um61I9sk86mD8XVBjkRt3z8qPxgAOZI6w8t2n5B8uG4coK2SzLQdilP9kVTrOvKmzfsJ8fqY0LymLPtlFXYBv937H0LAg7Igfumsb2%2BplwQDQC3q5aS5WpRKY6rui%2FbekdAC3oT8aQJYnpMadL4BUu808cqD2sCcyE7ZkLvtS78PPRqfaujnWeMHZqapQJObm60UE95ewt4dS2GR9ImCpKCoP72obEQZzDRozMjeIt45mdTEa0cxfDDPLJm4v84R7dlnDKJQR35gBeEfRMAcMEPwxYSE4QGVngHTRXyOFjDb3QkwWzfoXOOy2oOv4WO5L4x%2FpritFxRsPO5Wku17KSB4VsdHsYPc%2F9JLa5rXj8OkitASpMUaw2kwq7rzvQY6pgHscUi8fko3WF7dNE832R177n4P9DYyfHvjnXDPv7geo1JNCYRrJ%2FMSmpGiXGwqZlUrIWgCgIEYFsTGCvNZoy0JluRzVOcvFw67HC6yr1lB7uN34BV45nZwL2WFaoreY8kBiHQ%2BOcOUlChdi5wosaRtt5zCH6hdtrV9OrdB8HOFIgaBA24bWNaH35tOIRyIqtIt95CRiBrZlmO4yJnzHRsy5qCg4tCU&X-Amz-Signature=7e07cb0f93f7f21bc7d6fb35dc13fd2f18825c0283c9bbc80d87022a098c8759&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDSSP22%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWEHA9MDDEnH4UqdqieEsiap80%2F9zfd3i7BDOZ9sJUgwIhAP5ZCkqonCiqf4MNPxQT819PaCVywo3Ucg8qrXJ7AIupKv8DCDYQABoMNjM3NDIzMTgzODA1IgwuK1AXAUB1XI4T8XYq3AMi4xxTDoqCzuZzl%2FtCJMJ89ksWEWkuiR3xB1kZqhzofgFgtox6MVmX63qUjoh5h%2Bv%2BbmJALYhjRtmwYm98scqCcwrS60n7gfi1t%2BOdDGyO68nCw2pCZ5LViYv0N8G6wMefdIkTaiUhEZaeVyEy8oEKfeFC0UCTsF3%2BYfrgWllgAbs%2B6a6KDdsD8oD%2B2JuznFGvk4CB0AZnc7tISVXZ086fYUZ0e2Ij8ahlRen64pVaQdRa%2FlGsc3plvjvSToJH5hIOZ4ZqF4x0alISxprZ%2F900pc6Umxwr%2BIaEO2zKmpdoTLICxHXFYAqvA3tvPntWoS0iIoJwK9lOLIZ6sSrBDxObTnOMGvu1WLV18o7%2FJFzc1kgWWaff9nwrUqLuhgPpg%2Bpc%2Bq4cx6nXkOOvLw3GkMmp%2BFVjDcXlacBF%2Fhgwbo0J2HHOBXCUmhX8mE45J7e2FgOsjRkUVoI9sfh9nGtz2X%2B%2BgazoG572k74G2UgRcaLSJ1R0WETJ%2Fjb%2B3tSeFba%2F3UxmNR3QHg5mxdyMFFYm1XqpctuIZnIGc6vZJHVHYWq4F%2BAwbDBZLB8GzZklqkOVn76vLUP1EniLG5Ar229ITGbf0K35PHY%2FESmAOylYkoGCvXgFKNIFOq4EstU3OTCBuvO9BjqkARu%2B%2FTDWr%2FVD0VxBo1LtNG7e%2FeoLKFwA7R5ZnUrm3ao9%2Ff6O6cPlINS1IFarwHaiE%2Bxo9bu%2FRK1Y0SbIZZqJNmROU7jr9aQ0KZe18yrETGEPO19aRrYHVwRCqFkEFBx3JpgxA9HulXjTquFUsTZN18cQGDKjMBjItt26%2BP4RS45lhiapp8fgLGCdAHIKeES1z4Z4LojURFJLaBBs5XYXRdUGrtyK&X-Amz-Signature=81a8f4217e9cfef7ba8da742e6c198736754e0fb8c1ee63c9f46ec1d27a7caaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YEMAHVG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBwYqALh3NYktWjxQQz245Pfvfx3jYGCS4dRK1Na9mcQIgdCmZpSsNQRsAlPYNBsam75XGAVG%2BnZCcfJz7ZPAAUIEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIz%2FbjoR%2BXyxOxmp2yrcA8NBo9GysYcJp3SftmOEKSNit5ItWOhGzqaYImdnwvtXISXYGeuTzPBWlwWDjF8oAfIZRWW8xv68jh6GjCI2fgx2SA1v2%2F4tKGHk6%2BAutTIcGBkCw9IQ7%2BFmDdi84ItQs0JkXiFqY1r80HuylhyqRW8yT4YXqGEqIYgL7FNxHw69fvGAMxgBCEPk%2F2nf0W2Pw%2BUEx2llVKf1vT0K978FunR%2Fnd%2BQTMlb0oSTNzeMgIb5q9qUJarsr1X8VuPmy4saTyLGwPLDx9LrfO8TXTepEGSnpEmYHNSxwacHmxNSSnkfkE6oNlU%2FuUkSgbL8j6ZCo0ZeEET3iQqgwoUMBkwdLyfgSrA63hUTMJxx%2BQezlY6qUX6NTwYMy8x%2FCWRI5t8cvGMDE8QCEvXsecmxIHjkl16zmQQfF34zLTwgzSurpVMIG8yQRDpBdkJf0bIDeCXknaY9Z%2BGGRsScrns%2BNGmniMyXS8kWHm3e0GrKMHnPM0niJYO9JouJnu9jFmfKHSmMtNqfm%2FIfzNKfmZDBYbneyIN%2FO7s7JzJJ9Ci%2Fqz6XDY%2FUyn%2BqtZ4o62swrJd5Xkp8UUM2%2BFtpNTie4LcRqMlnEM%2BugSlqS6agz%2F0FniZ6u5%2B%2FCYCAXbeluPlnTCH%2BMLq6870GOqUBzSGu0twopex1bJwbgglmNZfdlunWIhmJ9J9gxj7uZseLRzuRXAAK4m8NENxv5cQU7InlVvctX%2BVYeLRuzIFtGx0j8XzVPUAMG8BaPHZwnJeYOEW5jULtb6MauBHljByHkKL%2FoOFgUWEyoE95nf5iAaNfsZqRP%2FLvXIsQXJ3%2BqeRtOp1hEGb3ReDUwuZIFfu71xPpRGplfR2Ojs%2B%2BkPvgS1%2FQTvXF&X-Amz-Signature=97ecff77f1b4ef16e30fcb606b70c6de5426ba12ddc6d5b883056192edd320e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
