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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTSI7U7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD5WbvH4waZIZu07PZhQzm5wtNd38rOUxzAj3Lyk7MBXAIgSFT%2F3Lk3r1OBhSa%2FxxVAZVRhmKp4FD7speAo7XuQ7pcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4LKW2U7HCe2p0ROyrcA4lMe3cey25CQhwkRh4OVu4bqAOvZ7DuMJlPeXav2m5y3JmdFjGeOjBYEZEwu2u1YC8T4PlybCxDcTVCYtTtcRIv95It570d5mSoMaGJH1e2ctVXsjJ6Wk2Nu%2BUKUwLlRuiuHSW21k%2Fza5Ban1n%2F6ELCoPC1%2B3wUq2RCSMhcw2vwaERICD%2BpqU4WLQk%2BZmks7AjwWRXDCr7A32mb2eaVMDG7iWjsGxA4BqfGQvm0cvI22BbVHjyupy05MJYs6w%2FXU6t6qYInCFIlz3mkYNd3s007gDVpvxAfE0TRTWDzG2WE6Yj3%2BWLXD8LshSCOKeM1KdWtA7Y4XCFjafzMddklc%2BLkqLDhOf9Z96uDAf0AuTWl80im8Uu6h0VBRqg1GZJGldS9FLXh3cE3k31jL97%2FuNs9aLYTqgn6svx7sbYJkWOaDlfsgBizqhyh5blF6oWGdF0ZlzJMlHy41na4sVZCg3K9q4tcM17SMSc7RTU2uAaArK8w4faf1G4qzUY%2FlGMQJa7HQ990O1LSxT74MpBECGKc9B7iYfjK%2FxKDBW8z9MSUhZfSwMjbbPahQhS0ENO86DQSEoLyCRkVHEjTbyH1FDT1NIiJruY22GggBLvNGHwHbldUYj1le71m3QkGMKeVjL4GOqUBcwSZFZZ39tbA1BUj2lg7IXtDNwAHc3cazT0B%2FYZBetT2dx3q8j5kvt73z81mgN1ERqPn6R2kx6AB0nCN8D4GUr5rlNvCT8ehRx%2F5oVQZaWaV5N5klcLaS1RDK89GURhdkLcV6w%2FFJ6Gtdh1h5ONajEHpuqFTtYIcoleXCifAFQ%2F6ZBicu%2BZ9cxnabu3iAQP5C6yhaf%2FBW2VJABVNmrhbqOj2lCES&X-Amz-Signature=c664b78f723f2f591558d4ee58fdcfaea18fd321ee05d2d8731c93173050ac24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTSI7U7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD5WbvH4waZIZu07PZhQzm5wtNd38rOUxzAj3Lyk7MBXAIgSFT%2F3Lk3r1OBhSa%2FxxVAZVRhmKp4FD7speAo7XuQ7pcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4LKW2U7HCe2p0ROyrcA4lMe3cey25CQhwkRh4OVu4bqAOvZ7DuMJlPeXav2m5y3JmdFjGeOjBYEZEwu2u1YC8T4PlybCxDcTVCYtTtcRIv95It570d5mSoMaGJH1e2ctVXsjJ6Wk2Nu%2BUKUwLlRuiuHSW21k%2Fza5Ban1n%2F6ELCoPC1%2B3wUq2RCSMhcw2vwaERICD%2BpqU4WLQk%2BZmks7AjwWRXDCr7A32mb2eaVMDG7iWjsGxA4BqfGQvm0cvI22BbVHjyupy05MJYs6w%2FXU6t6qYInCFIlz3mkYNd3s007gDVpvxAfE0TRTWDzG2WE6Yj3%2BWLXD8LshSCOKeM1KdWtA7Y4XCFjafzMddklc%2BLkqLDhOf9Z96uDAf0AuTWl80im8Uu6h0VBRqg1GZJGldS9FLXh3cE3k31jL97%2FuNs9aLYTqgn6svx7sbYJkWOaDlfsgBizqhyh5blF6oWGdF0ZlzJMlHy41na4sVZCg3K9q4tcM17SMSc7RTU2uAaArK8w4faf1G4qzUY%2FlGMQJa7HQ990O1LSxT74MpBECGKc9B7iYfjK%2FxKDBW8z9MSUhZfSwMjbbPahQhS0ENO86DQSEoLyCRkVHEjTbyH1FDT1NIiJruY22GggBLvNGHwHbldUYj1le71m3QkGMKeVjL4GOqUBcwSZFZZ39tbA1BUj2lg7IXtDNwAHc3cazT0B%2FYZBetT2dx3q8j5kvt73z81mgN1ERqPn6R2kx6AB0nCN8D4GUr5rlNvCT8ehRx%2F5oVQZaWaV5N5klcLaS1RDK89GURhdkLcV6w%2FFJ6Gtdh1h5ONajEHpuqFTtYIcoleXCifAFQ%2F6ZBicu%2BZ9cxnabu3iAQP5C6yhaf%2FBW2VJABVNmrhbqOj2lCES&X-Amz-Signature=eb2e8253e82d80776f764613647bd14bed5a01ed87241fbe283ca60367b821b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVOHZ3C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGncA1WWBwmoNjQ%2BrUyJCBJZp3DnXY6h9%2BtAScdO0G51AiEArioZeiIe68czdI8Mtqpq7xhNXWCFZ0i3qfOPj%2BkZCNwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BzKQV%2BQ83DFNmpfCrcA68JVoT3ZnTiJAzSGnBG86VYzpxrHo%2FLAo2JvZpPfp7N6czTM3Wborgw7XD1XbPlR%2B7X4pFfnSDB8JsHSFVcZ6oA1uJ7mBE6%2F28TFbGhIgylIuWYAvNsnOX1y90vUzhmxXBlzSDQaBMnqKwFWwkToiVRX9N8fAMoe3Uk0cOVJLqF6bfZydOh%2BxwCSVk8TBldZAr2%2FbvTCIvn26LFwXRVdJ9aRg1jWpvPQoqFWuJKFM7u3fOMvQwoGCrA6ih1SD2H1cWb94z%2FjriHGgG7dbT44IJHILHPM6KHafqvXt2tBO7CIvsfJU5nKhyQsOQWUA0T69MXkAUj%2BZC7EHn%2F%2F2RxYRsBmhyN3yad29vgRiI9V4QZw%2BftaSI8QiObeGAh%2FlnevmAbefFldl8rHhVtVQ%2BLRTDqlWhTBRFo7DPj6PPq28BgDBaBEh36UVvHEprKLlHnd1X0PlmYSlR2bCrXvAMmcitOK%2B10bCXxpEQqexg662qUov64YuywiULaS8UTNXmX5uBRshZqG3eae1KWoXFUBrPbBs5TKyHpXzUFyIgWXU7n6BiHpCnSaZYx2QJ%2BW8EZaEjvT1W8CgGmAe6sdTRnwNQYXKrV026MPPa5xVS%2FMSJk1uT5S1V9i6E38JifMP%2BUjL4GOqUBRhfXVC8JSNzhFrIwM63m5tdCR2GwmSxIkGJYXvXZ%2B87zwO8xSjlNdLy7aV6xJoULvyMsX8zu0M0%2BZ2ZNBuHmXvgnsxNw3lotr1yw%2FKITBJz6%2FfmY7PRK0MjOk%2FiqDLaGs%2Fw2F7CiUbPk70d7mXX78Fc%2Ft0meC8yqwVi0Cw%2FH4MCe%2BmNVq93KtgdFkEu0Az8yny%2FXAYo511k7WFnjxK37X%2FXyWJU8&X-Amz-Signature=8a942c248c1be308d5ec700c0247e2ccda5c97bd987708ca7f69c472084aba51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOV7OFK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEv7zpgrgTAzo00xY%2BCTJS%2F4%2Flekvy9ooNThcXQOORriAiEA%2BerIXLDbTwyT0RKxLXtLSrIE0swysSITnuHtME35QGUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7MXAEDVDQ2sT5CcCrcAz1cq7Nnh94lM%2FnvOrAt1c5j0Tj%2BbcWka1clhbqP5oDwyhxyYWY2ta6LkbnWSEG8BCsJBgMH7UocJTuq%2BfrKSZGSHHTlVveDbVBGdEKrQQTFH4WjnIkdjR8EVKQHyq93CavNcI%2BAkHW7SMfu7%2FDT4NoAq7j88Ef0YlzjKCvwBsHgYPOFiPVvFi4dBQqg3YD0SpGZxn4%2FoxUJEswjqOUoeKs2OIiDvnBVhblG%2FajJ7gwWKdpBWnsRY1rA%2FLZ57R913%2Bu2GhL1XJcPxk8mYXKKUd71TYiR1IEzgN66RnwRJPKx0hZ7meFJxUuu5Ih9%2F4XBtU1f0zKtuIhLwXKFdnG%2BpQqEF2nebONyaeOm05pWCYXiKF8OKgX33r%2FGbrqrHvtKm0mds6IkRSZLK5KDGd2veAqNe7M1n5Yi4KfSpgk2GHC34C9YrVAxXqgw1fdKEPkepOE9YxU82pFay%2BUiwXAjt2yMQYigXhAGX9szUNAeFC5zmDgvC8WeDUH8RUR0Yz109PKzMXHjmCqPjbQOhipSUbEh%2FMiyzjZ%2FXjOKveQYmnk50C3r3MuuaACbTMsiTmpS91Erk6eYMcW1E5rKZtamzr4hHa5YFwE5xCvcNhycxx3hdKG4ws%2FXi%2FQKXdiQMIiVjL4GOqUBVKRR8ulmC2b4gtb0sjk6%2FmT7pTDXtlsiyaaxTSZpX7QykgB3BZue4Gi5jwFvwIhENwDt37YB1THNuIkbmx8%2F%2BE7%2FnX5asWue%2BBxnR%2B02UuArbM9k1Cz6JE9VP%2BCCmpzfTDubgb19HkVm%2BQn4J9q2eGEP9A5r2Sk6pAQH%2B%2BQ%2BBfWTx7cecPfn3M6vv1dJULIr0aXRJZQK7q2pkJ2eaaRJpg3J9x%2Ft&X-Amz-Signature=bc8977b27a6a20d956dfd6af870c98a0eca712e927c65c517a52a9818b06398a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTSI7U7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD5WbvH4waZIZu07PZhQzm5wtNd38rOUxzAj3Lyk7MBXAIgSFT%2F3Lk3r1OBhSa%2FxxVAZVRhmKp4FD7speAo7XuQ7pcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4LKW2U7HCe2p0ROyrcA4lMe3cey25CQhwkRh4OVu4bqAOvZ7DuMJlPeXav2m5y3JmdFjGeOjBYEZEwu2u1YC8T4PlybCxDcTVCYtTtcRIv95It570d5mSoMaGJH1e2ctVXsjJ6Wk2Nu%2BUKUwLlRuiuHSW21k%2Fza5Ban1n%2F6ELCoPC1%2B3wUq2RCSMhcw2vwaERICD%2BpqU4WLQk%2BZmks7AjwWRXDCr7A32mb2eaVMDG7iWjsGxA4BqfGQvm0cvI22BbVHjyupy05MJYs6w%2FXU6t6qYInCFIlz3mkYNd3s007gDVpvxAfE0TRTWDzG2WE6Yj3%2BWLXD8LshSCOKeM1KdWtA7Y4XCFjafzMddklc%2BLkqLDhOf9Z96uDAf0AuTWl80im8Uu6h0VBRqg1GZJGldS9FLXh3cE3k31jL97%2FuNs9aLYTqgn6svx7sbYJkWOaDlfsgBizqhyh5blF6oWGdF0ZlzJMlHy41na4sVZCg3K9q4tcM17SMSc7RTU2uAaArK8w4faf1G4qzUY%2FlGMQJa7HQ990O1LSxT74MpBECGKc9B7iYfjK%2FxKDBW8z9MSUhZfSwMjbbPahQhS0ENO86DQSEoLyCRkVHEjTbyH1FDT1NIiJruY22GggBLvNGHwHbldUYj1le71m3QkGMKeVjL4GOqUBcwSZFZZ39tbA1BUj2lg7IXtDNwAHc3cazT0B%2FYZBetT2dx3q8j5kvt73z81mgN1ERqPn6R2kx6AB0nCN8D4GUr5rlNvCT8ehRx%2F5oVQZaWaV5N5klcLaS1RDK89GURhdkLcV6w%2FFJ6Gtdh1h5ONajEHpuqFTtYIcoleXCifAFQ%2F6ZBicu%2BZ9cxnabu3iAQP5C6yhaf%2FBW2VJABVNmrhbqOj2lCES&X-Amz-Signature=e86a4e20894be57a2105e0e9c4a89b7c00645d85862c42efa057bde735157d94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
