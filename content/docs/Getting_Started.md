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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDWRJBK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB41wbZ%2FZgprXRnCzbijpPie9aM1wVg9AOsbsEufKFCsAiBfR1HCJvD8ol0kBXHk7zWAH3c9x34qcQPY728h94eobSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4%2FLVfEjpXHzLKougKtwDUu8XQVklXUAwL8lrfqZt6510BcIGlOhunnL7xZaezI8anyPdcv1qz1fLmy1Yu35cCp53aJAyTfXOdpX%2B4kpRXY67zPaKzBtiLSf1HHJTPnU91diWsoNXREKHmTkFbWTBzzINrLd3c1y88u3usWMog%2BXvOKe3Oh0lAF6VBBcCcLDdHSxSyyLbd%2FojECOf7wqYgg%2BwlnZMOxD30Li0rswsMHfYBwETKiE7z5TF%2Bampguer8W01mzoawJH6YHRRnSZLPwnJ2cVA53RYs6%2BejHkytJu5Ctaa11oFllBS4FbQL7OfECEywxMLrj4pFOSawByM4xn%2FRdRLklvZzZGk%2BuNZbdjiFvMbf6V0wgRpRoylQRDyGWnIyIUkKLcV%2FGbgUmcvGBzzPFk%2BuhmqBDuggwuNvAasn69frPdVsukU%2B0u5IEGdi7A43KklrUM37%2Bp5jjzZoupgjImBOQg78Y4fzhG6HMFzQOqDug3OcuVJDDqUC1eYXQY%2BhmAAQpt%2B2UzwAeaeuPe1Pv5IG7GfzbYAkTHOcIhW94U03JSawpesvkCNh7kZjtVmKkg%2FH%2FgEJuHtI1A9SQPqllXxnmYnlgc7sSwDcH8h5b%2FV5BbwJdOsQLfpS6B%2FFA3lYfwmXP9Y6NgwkJSKwAY6pgF5iJKQH7D2aqHFqT4sFzSVLRu4Fe7bD4FWUn3%2BMf3RPkXYGPZ616gO5zcbOTI9S1XK%2Bxn40wnzfhR2PBQNrBPTCNh6ua2P4oNpvrHlFxfYfPsclx6PG%2BJdb5nNyhDTdkGQmwSvefQsGsCdlo0XZc%2BesPPdoYMQvhhlSFZHy%2FgbNRBqXlXJQUfZqEKpsCO7QDn2dDQUL9XkSpqw%2FGaV%2FISVx0DK%2BVQP&X-Amz-Signature=5a83def3924e8593da1fe160d9f30f301e0e2cd341bbbd295d5bdf6d4cbd66b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDWRJBK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB41wbZ%2FZgprXRnCzbijpPie9aM1wVg9AOsbsEufKFCsAiBfR1HCJvD8ol0kBXHk7zWAH3c9x34qcQPY728h94eobSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4%2FLVfEjpXHzLKougKtwDUu8XQVklXUAwL8lrfqZt6510BcIGlOhunnL7xZaezI8anyPdcv1qz1fLmy1Yu35cCp53aJAyTfXOdpX%2B4kpRXY67zPaKzBtiLSf1HHJTPnU91diWsoNXREKHmTkFbWTBzzINrLd3c1y88u3usWMog%2BXvOKe3Oh0lAF6VBBcCcLDdHSxSyyLbd%2FojECOf7wqYgg%2BwlnZMOxD30Li0rswsMHfYBwETKiE7z5TF%2Bampguer8W01mzoawJH6YHRRnSZLPwnJ2cVA53RYs6%2BejHkytJu5Ctaa11oFllBS4FbQL7OfECEywxMLrj4pFOSawByM4xn%2FRdRLklvZzZGk%2BuNZbdjiFvMbf6V0wgRpRoylQRDyGWnIyIUkKLcV%2FGbgUmcvGBzzPFk%2BuhmqBDuggwuNvAasn69frPdVsukU%2B0u5IEGdi7A43KklrUM37%2Bp5jjzZoupgjImBOQg78Y4fzhG6HMFzQOqDug3OcuVJDDqUC1eYXQY%2BhmAAQpt%2B2UzwAeaeuPe1Pv5IG7GfzbYAkTHOcIhW94U03JSawpesvkCNh7kZjtVmKkg%2FH%2FgEJuHtI1A9SQPqllXxnmYnlgc7sSwDcH8h5b%2FV5BbwJdOsQLfpS6B%2FFA3lYfwmXP9Y6NgwkJSKwAY6pgF5iJKQH7D2aqHFqT4sFzSVLRu4Fe7bD4FWUn3%2BMf3RPkXYGPZ616gO5zcbOTI9S1XK%2Bxn40wnzfhR2PBQNrBPTCNh6ua2P4oNpvrHlFxfYfPsclx6PG%2BJdb5nNyhDTdkGQmwSvefQsGsCdlo0XZc%2BesPPdoYMQvhhlSFZHy%2FgbNRBqXlXJQUfZqEKpsCO7QDn2dDQUL9XkSpqw%2FGaV%2FISVx0DK%2BVQP&X-Amz-Signature=b65fff7b118fdc0c215b38e87e3d6706681722927b1112f2fde3accd69a1a7a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXGQ7ZM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPHYf7QwqY9ODl4njdVsP2RXvlfaEdpauzedAs7EOhAIgW7kOlpsnUM1pl0KKl%2BBTDEOBNJZGns7kxLRpXvPE6qEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHo29qnqFLIYWj%2Bu1yrcA0mXUEneZhlVTjKkxePGQUuCEyBRrc2Ykkdohta1m4MjaPEWxpH9%2Fpp%2FUKtZuJwUsfPHeQ7fowHPr4gg7gw27da0GQ9r8YInGjRgXKVjpNxTKBe60zIQ%2BaiwWdagRMMufTJK27Ft5yukzVOrsDPJmBlM5iKb7uiZCu5Pt2h%2Bre6rdWjENzBcW7iP36AWRp%2But66Jye6XIIYSIbt2s1Anp8%2BwFry7Hx%2BbMQgXFLk%2FzDUYA8DokIbRKZPybdzfKRIXF9Gg0S8b8ZlxHYuNcScflQiy0FzKj%2B%2Fb0OtmnwyDeKaGpNZzxTwCajdAlUYLEs3Wp%2BaiPp%2Bi6UOJTmKeLMXsZSAXzVDRZ3zvL%2FtvmnAiEANb5bCkNghgx%2FygqNTeOyT66SyzFALYtSFJGpWINhxpnVOfi%2BOdOJDzTKeWV2HJm9xIiXzFfC6eowHaG9CkXWsFyaVMS8ssBj12%2FAEUVELEY3QJXWDhoohddznxaAlsqjyFOwHg%2FHqtowKZ%2BvBPTWFChldXSIQ5%2BkzVHXhknQQYIWdRJvUHdujyl3KLfIfhXf5Y7dlLGKqYOn3%2B%2BaV6AJUiKXj%2BzSd6r9g2nE2nN6kX%2F2w7o5gBQSJcQ%2Fqs7pBNgzhREOLtm5X1sXCns4o5MJaUisAGOqUBDfw8wezJ6U%2FOpTbYHcUh63Sjn5SRqiX0g%2F6eVaCZY2YtBmORbTU7rERD2J2mhHMe8qqHB%2FQe7X3GCH8YTdPpSUfDmrOqVUB1ZiYd1hR%2B7G%2B5ED0%2B1CNb4Es%2Fgwc06JJlNubILQiuWyY0YwO4PypdyH6lHJr2tLqJo4RofCm9WtkBD%2BejHBvDt3xq%2BtGrX8Ivq9DMoJcFVHY9wrtXqPfDwL2W640C&X-Amz-Signature=f2d1221407c639cadf4209e3c6b6998db092e844ce73aa6479fac560d83797ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DRKMIH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUq0CbSuBZHsUNRLMNwmaP3ef5xgjecBVyni51RCnTbgIgb9GS4JnmbbsKl3EuCzh1TJed6jk4PuxUp7E%2Fw%2FgyNd8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD9WuhSdkw3fVRtmpircA8x98hgF%2B1cUkv3CIr9oeutxFNG3Q7WIBX1o8tNciVep6YEiUTjL7023I4dyWKMGA45Qo3tdDft8AOBu42j8j9ekF%2BR%2BRoHCfzDxtO8ho8Db8626bGnu3YlpVKjiKV8P9%2BL4bejw4w52Ir4PA5DQAl7sSbMBQwjUP8Yi5wJmiwQGW1y1S4Wvy%2BNdsJkkRANvoFsKcv0ZaXFYmblZDYHdVb7GHQdt16BccjmKTKsp6OdBTPraS9qUD40SGwm%2BoPC5JGrTBQLQmo7xv6wrN029dDNL%2B6QLtjcTsn9Oil1ugPgnt3fnuyTO643i6ac1pz4Nh%2B%2F9EzyD6Z89L9AYpJ30ZJkVeWLUvy1Zlc4qjwIXNGbeh4DTbMTZOQE8QZFKfvXvPb10U6k3RfMUaWiJqHWUyec%2FqLESE0OH8h6NPxidarUWqRm2hktThAKumOPK4aqmx%2FLEhp%2Bm%2BYD6TJTlJR%2FrEUbzVJmsf0mfjvpXlxF4B9KcP5jJ1rbrZPHF8yTjyn9k6Wu3ho9oWH6R06WSdum7UT4aJBdYMPfNnndw26OyQiCGMaEALUSxA2iBr3CORlNzhEiOUxhaEn6CFt8GWARogCuxtwlcmevLrH6G6xUHMlXPhxbbL9tZdArvm0XTMPGTisAGOqUBM3GgCVDE05%2BjgXPIXzc%2FsxhwHrgSn1jzqzwxE%2Bo34KebbgZPWBu76KvTv4C7%2BEr%2F0cquiRxJDGoO8GC%2B9XqVkwkuXbc6ADaIWO9CL%2ByvGlsEa%2B34bw79HWdLTWnkbPFJjng28ZPnAGc5vmlhB7%2F63QLQTcRLMhQ3GnYG0JKCGgXN%2FFrpg%2BWXQYwnW8%2Fo9SJFAxrZnrIyRhnqQMGDrwZgVh6mPcvm&X-Amz-Signature=3acc092655e6373035690d4d3f937609863a7b6e7269ab9a464f8dd66d4ea2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDWRJBK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB41wbZ%2FZgprXRnCzbijpPie9aM1wVg9AOsbsEufKFCsAiBfR1HCJvD8ol0kBXHk7zWAH3c9x34qcQPY728h94eobSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4%2FLVfEjpXHzLKougKtwDUu8XQVklXUAwL8lrfqZt6510BcIGlOhunnL7xZaezI8anyPdcv1qz1fLmy1Yu35cCp53aJAyTfXOdpX%2B4kpRXY67zPaKzBtiLSf1HHJTPnU91diWsoNXREKHmTkFbWTBzzINrLd3c1y88u3usWMog%2BXvOKe3Oh0lAF6VBBcCcLDdHSxSyyLbd%2FojECOf7wqYgg%2BwlnZMOxD30Li0rswsMHfYBwETKiE7z5TF%2Bampguer8W01mzoawJH6YHRRnSZLPwnJ2cVA53RYs6%2BejHkytJu5Ctaa11oFllBS4FbQL7OfECEywxMLrj4pFOSawByM4xn%2FRdRLklvZzZGk%2BuNZbdjiFvMbf6V0wgRpRoylQRDyGWnIyIUkKLcV%2FGbgUmcvGBzzPFk%2BuhmqBDuggwuNvAasn69frPdVsukU%2B0u5IEGdi7A43KklrUM37%2Bp5jjzZoupgjImBOQg78Y4fzhG6HMFzQOqDug3OcuVJDDqUC1eYXQY%2BhmAAQpt%2B2UzwAeaeuPe1Pv5IG7GfzbYAkTHOcIhW94U03JSawpesvkCNh7kZjtVmKkg%2FH%2FgEJuHtI1A9SQPqllXxnmYnlgc7sSwDcH8h5b%2FV5BbwJdOsQLfpS6B%2FFA3lYfwmXP9Y6NgwkJSKwAY6pgF5iJKQH7D2aqHFqT4sFzSVLRu4Fe7bD4FWUn3%2BMf3RPkXYGPZ616gO5zcbOTI9S1XK%2Bxn40wnzfhR2PBQNrBPTCNh6ua2P4oNpvrHlFxfYfPsclx6PG%2BJdb5nNyhDTdkGQmwSvefQsGsCdlo0XZc%2BesPPdoYMQvhhlSFZHy%2FgbNRBqXlXJQUfZqEKpsCO7QDn2dDQUL9XkSpqw%2FGaV%2FISVx0DK%2BVQP&X-Amz-Signature=15e6795d186b389a31b2088d4c667b426f02b28f1786205e0080ab4cd6eb99d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
