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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXXDAMX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDISYGN%2FCqCG83IgIWuWr7IbTbJoEz%2B2xk3FkYTFu2sywIhAKJtWiM8kb%2BV5LVwdolh07%2BtQrbDEofE6g891COvk9m1KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUm7fWTxb4i12ONEQq3AMds%2BsqW7P99wXvN2yBwV71xAMTOImfjUCfwWmp21Rf6VSyMRyGCe84Seo6qh52Z1%2FlaqPr5wJwRhN3Mdo6wAL234Pq%2FTqkX8VPXSrxzhPmYYLVEZfw2R4%2FldL5os6xnoP6aR7cBh8KDBbuFuQsotFb6gw1Cfmlt5Z2y%2FjXZAJNl4hdDT2gNvHX1sYpmlL%2B%2BX6C4CkX%2BE1WWMY28yOFCBHIAaqUAhSeEdg9wyqG5bSIAGW9UCnwMDvWXAHnUlhYnuwZIIyLnExqaGVq%2BjWsiOifHtp2HW3nA%2Fa9wze1b5hxbblBpYQ9IkzGJO5pWTupVJGIjv0mzrheuAtWn%2Buh0hPkkj0ibf7sV11VA2KWzrV4wOfRLHxnDY%2Fyv5qdCTtxflXjIcAPJ6nclGy6s6dQykQBwiFlHG88bc%2Fki3bOVYQGcYtGHIVV6S1Uizlq0KO1Fs%2FhpA1h6qZ2DX%2F5hPrVNO23QvKDkOFjc1BAQPcjprDjmuFxvaxc844U%2BWZnCM9U%2F%2BtC9F7gAeWMlb56z8mv8ZEqJC5xGGdrJxvleyfKA66%2F07Y1VTAb4N21Z8e8U7az5vIdk%2BncSWkH99soFIQb%2F4kgwP6le9PbgdGZ5F8mcjPa1XUYC8J20j0vqYVa0jCDuO7DBjqkAT3j0pEOlcLFSp%2Fn1dsoozw8IuTrmHMXRTJgWVoexLbnDapIxh9Jpzgg6doj5fRhNkTkpIUTqeCItoPXoifI09H3JIhQs%2F4oMrAYuPf4AtBFL8KCbT7VJdlNSH849Xpx9xdMgAmlRc6wuSBpbxxlfEAfZpdQAP6dWEgQ%2FlwuI9BsDFvwSC8AtTzMTr%2FDkxcA%2BKBEoi6k1xtLIGYfoF%2BNVnyW%2Bi2b&X-Amz-Signature=2043ea2356c15c5e07ac9915a9ff0f8b7c95f9673bfe18f994b58a34acadd8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXXDAMX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDISYGN%2FCqCG83IgIWuWr7IbTbJoEz%2B2xk3FkYTFu2sywIhAKJtWiM8kb%2BV5LVwdolh07%2BtQrbDEofE6g891COvk9m1KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUm7fWTxb4i12ONEQq3AMds%2BsqW7P99wXvN2yBwV71xAMTOImfjUCfwWmp21Rf6VSyMRyGCe84Seo6qh52Z1%2FlaqPr5wJwRhN3Mdo6wAL234Pq%2FTqkX8VPXSrxzhPmYYLVEZfw2R4%2FldL5os6xnoP6aR7cBh8KDBbuFuQsotFb6gw1Cfmlt5Z2y%2FjXZAJNl4hdDT2gNvHX1sYpmlL%2B%2BX6C4CkX%2BE1WWMY28yOFCBHIAaqUAhSeEdg9wyqG5bSIAGW9UCnwMDvWXAHnUlhYnuwZIIyLnExqaGVq%2BjWsiOifHtp2HW3nA%2Fa9wze1b5hxbblBpYQ9IkzGJO5pWTupVJGIjv0mzrheuAtWn%2Buh0hPkkj0ibf7sV11VA2KWzrV4wOfRLHxnDY%2Fyv5qdCTtxflXjIcAPJ6nclGy6s6dQykQBwiFlHG88bc%2Fki3bOVYQGcYtGHIVV6S1Uizlq0KO1Fs%2FhpA1h6qZ2DX%2F5hPrVNO23QvKDkOFjc1BAQPcjprDjmuFxvaxc844U%2BWZnCM9U%2F%2BtC9F7gAeWMlb56z8mv8ZEqJC5xGGdrJxvleyfKA66%2F07Y1VTAb4N21Z8e8U7az5vIdk%2BncSWkH99soFIQb%2F4kgwP6le9PbgdGZ5F8mcjPa1XUYC8J20j0vqYVa0jCDuO7DBjqkAT3j0pEOlcLFSp%2Fn1dsoozw8IuTrmHMXRTJgWVoexLbnDapIxh9Jpzgg6doj5fRhNkTkpIUTqeCItoPXoifI09H3JIhQs%2F4oMrAYuPf4AtBFL8KCbT7VJdlNSH849Xpx9xdMgAmlRc6wuSBpbxxlfEAfZpdQAP6dWEgQ%2FlwuI9BsDFvwSC8AtTzMTr%2FDkxcA%2BKBEoi6k1xtLIGYfoF%2BNVnyW%2Bi2b&X-Amz-Signature=2ed1b855ba82f3015d0bcaa6ddeff8c9cdd285438c436de6f94209c710f2fd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXXDAMX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDISYGN%2FCqCG83IgIWuWr7IbTbJoEz%2B2xk3FkYTFu2sywIhAKJtWiM8kb%2BV5LVwdolh07%2BtQrbDEofE6g891COvk9m1KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUm7fWTxb4i12ONEQq3AMds%2BsqW7P99wXvN2yBwV71xAMTOImfjUCfwWmp21Rf6VSyMRyGCe84Seo6qh52Z1%2FlaqPr5wJwRhN3Mdo6wAL234Pq%2FTqkX8VPXSrxzhPmYYLVEZfw2R4%2FldL5os6xnoP6aR7cBh8KDBbuFuQsotFb6gw1Cfmlt5Z2y%2FjXZAJNl4hdDT2gNvHX1sYpmlL%2B%2BX6C4CkX%2BE1WWMY28yOFCBHIAaqUAhSeEdg9wyqG5bSIAGW9UCnwMDvWXAHnUlhYnuwZIIyLnExqaGVq%2BjWsiOifHtp2HW3nA%2Fa9wze1b5hxbblBpYQ9IkzGJO5pWTupVJGIjv0mzrheuAtWn%2Buh0hPkkj0ibf7sV11VA2KWzrV4wOfRLHxnDY%2Fyv5qdCTtxflXjIcAPJ6nclGy6s6dQykQBwiFlHG88bc%2Fki3bOVYQGcYtGHIVV6S1Uizlq0KO1Fs%2FhpA1h6qZ2DX%2F5hPrVNO23QvKDkOFjc1BAQPcjprDjmuFxvaxc844U%2BWZnCM9U%2F%2BtC9F7gAeWMlb56z8mv8ZEqJC5xGGdrJxvleyfKA66%2F07Y1VTAb4N21Z8e8U7az5vIdk%2BncSWkH99soFIQb%2F4kgwP6le9PbgdGZ5F8mcjPa1XUYC8J20j0vqYVa0jCDuO7DBjqkAT3j0pEOlcLFSp%2Fn1dsoozw8IuTrmHMXRTJgWVoexLbnDapIxh9Jpzgg6doj5fRhNkTkpIUTqeCItoPXoifI09H3JIhQs%2F4oMrAYuPf4AtBFL8KCbT7VJdlNSH849Xpx9xdMgAmlRc6wuSBpbxxlfEAfZpdQAP6dWEgQ%2FlwuI9BsDFvwSC8AtTzMTr%2FDkxcA%2BKBEoi6k1xtLIGYfoF%2BNVnyW%2Bi2b&X-Amz-Signature=bcab1399a78163317759d9c2742ecee95267a069285a983681a78f3339b49a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663JFRVWD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTOmegnBXAWsRpIeiUX8asi7qbPheO0HJPaHAhuCp6dAiEAg2sw5KBJjnTGhTsScu%2FJNQAaXZM7SHA4wNsCFMUNyucqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPu55gs%2BbseonfpSrcA4TW7pHxKQWWKvLf%2BxYtpQcSPCNvOe0HLh3XLHlmicFtTz9x6gRwVz27NzRaUT6mxXioJ0hXdGzqBRF%2BnmoV7HcUeREQoHMpJqMMSB5bTCT0edtZvC6EuTNnlhS8iy3LFxU55BkDeVo7LFMyzOtyrXdeqDtAGIlhCy8unGxStlTgg5AF3yFMXU079YSzvyg5Gm6c7v%2FCtUBWAVMTG2w39J6%2BgduWadZ3gqA0YUwP9mWf8qnM3Lv3L3HOGFRf%2FiuK7YjcNyGSp1CnC2PvP2Eb0iDDkzIIVEps8eRefZI%2BYuBeaFZauSa27PReLrpTvuNpVDvizgNxZ7Jq4fioT%2BQrHyXxTIiGtDbhKFgoBvweV%2Fu%2FTlj8sUKQlLo6UhoFMzYIopHOZjhV5ug6BHSRxLAtsxiTxr4YdM%2B13ywbW3fLWNr8AlNbgoRycQTRWBeGhsJjNhvuEiaFoJbjZpyrS%2FJZA6kpYBmwe50M%2FhrI5jrXe4CbMQ5snFEAM7A%2BbRbtxUvLKfg0oAbnR6u%2BlZKK2nGEz057xwnLZRKpA6tV28eb%2F%2BEicM7Jv3VQsQmiYFkYWaTRaeDToXvpF3BYEggAgxgJqPuswK9CwtdhopaSoqG56bsh6qllhdmDKgUs2H7SMI647sMGOqUBwvQkN3AVKH%2BK3Ij1cFExB1KSM1nxEAWi0fLAIqELfL0UmHqixrgnpJRFqvft6CFWwSOgMnxuec%2B6MVoDoeBY5JwPqE%2BusbJc5CB0Wu%2B8KOm%2FqGq5DgiSPH64NCooyoeNxSLM6detj%2FtqvaOpC%2BOrswhZSfKrEnIIe6lvhvKaREe60xgDmSxmYlAQJ2xCQo94Dcnl86kWbMpP3gs%2FcFKrICLxsHYe&X-Amz-Signature=3d409a60607d7d6ed97712fad4a3b5a49cd34a065602f9e515abb88095d7a44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UARWIAN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBN4lEMx423rGR8bsA1yAgZVOsz5OlA%2Ff42JiyJoMLowIgem5U4nkLwNtN%2FPX6Wg9o6Q9mYOY8Nu3cn%2BlgmzQLGSwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLu5IM0Di6JcNGYpZSrcA0wJpbX9hQuHvZCU%2BoScSg1i3G13sfLzkMOgf3OpgKg0tZjq86x48LyeAp9LN7SEHRAYkomPzE29lNNjFdTxHIVNxWTx2c%2FLoDxpmHL8HMGC2E3lPaObItIrpG%2B7RSVznlytEAFn1Sev7QnuTglwUkWrBnSS%2F7b5n33bh3SWqStdtPbcLSM0nbnkScoGaE%2FgaJbwGAS%2F4C39XqoLKmLRr4LXosHdNYod7anS4GAvrBPWUJr3hXVaK9J%2BG21LHKxddwxisfSdzs5bG7JJmKnhGGC%2FBVC7AURR06ICqPajzUwRdXEzJf9opIN%2BtFy3m%2FJr9qPp1%2B7nJUXHcBbmmOY1wU1nveT1dAXbcV90sbYlGEJ6RX5bySXHuFfiuWDdTHdPAP5Vu0c0RgWO6apR8Qlu7AIBKXjWtu6LoGSIJudhxtXmjxBI2SImv8y6n6S00ojl6kdZoiK5NJYvaOvXibtro1B6t%2F1dOV4vbsid%2BEGsih8V%2F0U%2Bch%2FwoT72UYfKqq0ODBHBcoxreUvlMMhfeZfR4SmgaozJjCq8jNMQmF2AjwwBQyZ6kYMetcw78QPweQqYpL2FFMwz%2BGLnVN4EIRXivaQLB2YxXHegkWlFn85TGkaE8hW45U9qupuwChdUMKG47sMGOqUBdjEubkHNKZf5ipmDw8ZWvZlgphC9%2BDGhe%2FbXtTDZ6SUwGX%2Fb%2FOac38pcablZu8c2Q3N8dtkXiuEjGep%2FxfLN7bN0Ia0bilYgOPhlScOeHeQ8NrgM3LHbl5C8LVIV9%2B%2BRiMJdIMdQWHl2tGq7DGk%2BU3r6HEZhM%2BTJcHkZ61pU71ZAHwISMtMirtDk4L%2F9NVtJ%2FpkhixCbKu%2F9Y5oB0oOhqMBCoC%2FY&X-Amz-Signature=331ba494681f0cbe9d601f6fae43a8ddf6ec53d9325ec6c243d5982fdb438f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXXDAMX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDISYGN%2FCqCG83IgIWuWr7IbTbJoEz%2B2xk3FkYTFu2sywIhAKJtWiM8kb%2BV5LVwdolh07%2BtQrbDEofE6g891COvk9m1KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUm7fWTxb4i12ONEQq3AMds%2BsqW7P99wXvN2yBwV71xAMTOImfjUCfwWmp21Rf6VSyMRyGCe84Seo6qh52Z1%2FlaqPr5wJwRhN3Mdo6wAL234Pq%2FTqkX8VPXSrxzhPmYYLVEZfw2R4%2FldL5os6xnoP6aR7cBh8KDBbuFuQsotFb6gw1Cfmlt5Z2y%2FjXZAJNl4hdDT2gNvHX1sYpmlL%2B%2BX6C4CkX%2BE1WWMY28yOFCBHIAaqUAhSeEdg9wyqG5bSIAGW9UCnwMDvWXAHnUlhYnuwZIIyLnExqaGVq%2BjWsiOifHtp2HW3nA%2Fa9wze1b5hxbblBpYQ9IkzGJO5pWTupVJGIjv0mzrheuAtWn%2Buh0hPkkj0ibf7sV11VA2KWzrV4wOfRLHxnDY%2Fyv5qdCTtxflXjIcAPJ6nclGy6s6dQykQBwiFlHG88bc%2Fki3bOVYQGcYtGHIVV6S1Uizlq0KO1Fs%2FhpA1h6qZ2DX%2F5hPrVNO23QvKDkOFjc1BAQPcjprDjmuFxvaxc844U%2BWZnCM9U%2F%2BtC9F7gAeWMlb56z8mv8ZEqJC5xGGdrJxvleyfKA66%2F07Y1VTAb4N21Z8e8U7az5vIdk%2BncSWkH99soFIQb%2F4kgwP6le9PbgdGZ5F8mcjPa1XUYC8J20j0vqYVa0jCDuO7DBjqkAT3j0pEOlcLFSp%2Fn1dsoozw8IuTrmHMXRTJgWVoexLbnDapIxh9Jpzgg6doj5fRhNkTkpIUTqeCItoPXoifI09H3JIhQs%2F4oMrAYuPf4AtBFL8KCbT7VJdlNSH849Xpx9xdMgAmlRc6wuSBpbxxlfEAfZpdQAP6dWEgQ%2FlwuI9BsDFvwSC8AtTzMTr%2FDkxcA%2BKBEoi6k1xtLIGYfoF%2BNVnyW%2Bi2b&X-Amz-Signature=3573dc9dc4bef0c1994a005fc0f8d556449647fc9866f752e6434b132d17747b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
