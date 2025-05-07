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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGPOSSN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDHsdR7f%2BGlQ79p4tf6rdBr5E%2FP3VdZED6P6Ttm5zoxAiAmjC%2FAR%2BA2CjSU8VmM0wTuBtXYwP%2Faj2DXL8DRSFn9Hir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNN%2F1Q3gUYYLHl2yQKtwDkmC0UTH5QveQ3Oj1u7j3JJvjNc4HUR09PKFebg%2Ft%2FkPZy%2BMbN3WWYtXtbrnD%2Fdm27zW75AqMVlPWyEqhjSgKbHi1UpZW%2F%2Bp9xMbhiUogYisKd5LI31aSg5NLF7B08FPQJTpNCFpTw3BPxxzLd2dss4VJBpY5lriuvJC9h9NKpwKSO9zRBgoDa%2B9H1owaEBBh4pAa0sYrbbkJEx20qq%2FdGyuWFWGPxAdLf3CIvK4Nd%2BkxxA8EeX94SCV0O%2Fmkta%2BKzbT3JC6lhV7kHZdz6Xlt9A5KoCLNvmjZ%2F6bDyelvsTWd%2Bdtn5Rb6Ntbk4KXMIZGiRAlhigBFFpNeNEBMEtAr5q%2BHPiIhpOqE03tUquJBpfq7aHe8ZxfcebQ9vv75%2FN0fU0ZREJxOodP7ZmkQNnJtvfVbN9QFJmKNZxwhVVRAoJO42cOiv0Bh8D6JgJP4Fsyd9dc5qYjS3klSW1RU01NjD2HenesXqCNW0iIbpVWi4tHd312N3nwIl6XvlUWFML6enYqowVZ%2BUljISiRP6O32oAFT4IsY1%2Bj6GSoddn9v9QE058msUsH7exKivhk4p8IU5nDb3%2FDN9%2BgXnC9fnahSqPIn7qaGz8Ec6m3f6H1zEgIerYAB20i8PPNGn9kw7q7qwAY6pgHyIa3793gqdwLpKd9biJJyqTwTGX8J8EtGpVLltzrQ4CfjiTP1gEIkQ0TISUYSbvcWsN1oY6GOkMnPjhhGz0%2FUHHFUYY3SQY7eherW3LAvARS517%2BE3B4XxsksCezG41k%2Bu8LozTN45kW49tmH90yUC3vvozCGyhJjIueOlPnWB3y8JIspw2wdJUb3ZH1AY%2FldoIBK1W9zoXagfd1iFZPmf0ChBecY&X-Amz-Signature=3d42d4e4a379bb02491564e2143939c6692d2558278281d17617c90b48cce3df&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGPOSSN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDHsdR7f%2BGlQ79p4tf6rdBr5E%2FP3VdZED6P6Ttm5zoxAiAmjC%2FAR%2BA2CjSU8VmM0wTuBtXYwP%2Faj2DXL8DRSFn9Hir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNN%2F1Q3gUYYLHl2yQKtwDkmC0UTH5QveQ3Oj1u7j3JJvjNc4HUR09PKFebg%2Ft%2FkPZy%2BMbN3WWYtXtbrnD%2Fdm27zW75AqMVlPWyEqhjSgKbHi1UpZW%2F%2Bp9xMbhiUogYisKd5LI31aSg5NLF7B08FPQJTpNCFpTw3BPxxzLd2dss4VJBpY5lriuvJC9h9NKpwKSO9zRBgoDa%2B9H1owaEBBh4pAa0sYrbbkJEx20qq%2FdGyuWFWGPxAdLf3CIvK4Nd%2BkxxA8EeX94SCV0O%2Fmkta%2BKzbT3JC6lhV7kHZdz6Xlt9A5KoCLNvmjZ%2F6bDyelvsTWd%2Bdtn5Rb6Ntbk4KXMIZGiRAlhigBFFpNeNEBMEtAr5q%2BHPiIhpOqE03tUquJBpfq7aHe8ZxfcebQ9vv75%2FN0fU0ZREJxOodP7ZmkQNnJtvfVbN9QFJmKNZxwhVVRAoJO42cOiv0Bh8D6JgJP4Fsyd9dc5qYjS3klSW1RU01NjD2HenesXqCNW0iIbpVWi4tHd312N3nwIl6XvlUWFML6enYqowVZ%2BUljISiRP6O32oAFT4IsY1%2Bj6GSoddn9v9QE058msUsH7exKivhk4p8IU5nDb3%2FDN9%2BgXnC9fnahSqPIn7qaGz8Ec6m3f6H1zEgIerYAB20i8PPNGn9kw7q7qwAY6pgHyIa3793gqdwLpKd9biJJyqTwTGX8J8EtGpVLltzrQ4CfjiTP1gEIkQ0TISUYSbvcWsN1oY6GOkMnPjhhGz0%2FUHHFUYY3SQY7eherW3LAvARS517%2BE3B4XxsksCezG41k%2Bu8LozTN45kW49tmH90yUC3vvozCGyhJjIueOlPnWB3y8JIspw2wdJUb3ZH1AY%2FldoIBK1W9zoXagfd1iFZPmf0ChBecY&X-Amz-Signature=4c2a510c2bdde95bf30fdf0cc1deeec48d06516f5e2198e7649321af1d6c8b77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGPOSSN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDHsdR7f%2BGlQ79p4tf6rdBr5E%2FP3VdZED6P6Ttm5zoxAiAmjC%2FAR%2BA2CjSU8VmM0wTuBtXYwP%2Faj2DXL8DRSFn9Hir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNN%2F1Q3gUYYLHl2yQKtwDkmC0UTH5QveQ3Oj1u7j3JJvjNc4HUR09PKFebg%2Ft%2FkPZy%2BMbN3WWYtXtbrnD%2Fdm27zW75AqMVlPWyEqhjSgKbHi1UpZW%2F%2Bp9xMbhiUogYisKd5LI31aSg5NLF7B08FPQJTpNCFpTw3BPxxzLd2dss4VJBpY5lriuvJC9h9NKpwKSO9zRBgoDa%2B9H1owaEBBh4pAa0sYrbbkJEx20qq%2FdGyuWFWGPxAdLf3CIvK4Nd%2BkxxA8EeX94SCV0O%2Fmkta%2BKzbT3JC6lhV7kHZdz6Xlt9A5KoCLNvmjZ%2F6bDyelvsTWd%2Bdtn5Rb6Ntbk4KXMIZGiRAlhigBFFpNeNEBMEtAr5q%2BHPiIhpOqE03tUquJBpfq7aHe8ZxfcebQ9vv75%2FN0fU0ZREJxOodP7ZmkQNnJtvfVbN9QFJmKNZxwhVVRAoJO42cOiv0Bh8D6JgJP4Fsyd9dc5qYjS3klSW1RU01NjD2HenesXqCNW0iIbpVWi4tHd312N3nwIl6XvlUWFML6enYqowVZ%2BUljISiRP6O32oAFT4IsY1%2Bj6GSoddn9v9QE058msUsH7exKivhk4p8IU5nDb3%2FDN9%2BgXnC9fnahSqPIn7qaGz8Ec6m3f6H1zEgIerYAB20i8PPNGn9kw7q7qwAY6pgHyIa3793gqdwLpKd9biJJyqTwTGX8J8EtGpVLltzrQ4CfjiTP1gEIkQ0TISUYSbvcWsN1oY6GOkMnPjhhGz0%2FUHHFUYY3SQY7eherW3LAvARS517%2BE3B4XxsksCezG41k%2Bu8LozTN45kW49tmH90yUC3vvozCGyhJjIueOlPnWB3y8JIspw2wdJUb3ZH1AY%2FldoIBK1W9zoXagfd1iFZPmf0ChBecY&X-Amz-Signature=6d62ba73d09e62336f10cd20f8c64491289ff7ba05766f203769fe1850ee96c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3L7QNC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAySY1m0bULz0NhqJ46Sv9uO79Ig%2FD0B3a5brNYs6R7XAiEA5XEo66X3HybkJsN43Aujx7ON%2B18Xd6%2FokSY7oaAfKsQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCsWxzX0Wm3oA4ZNTircAwwhmT0jZujVwqUFxeUbeg%2BMv3a%2FQ3qT6bQiyKUPG6mGn1V7UjA2gLrnKLaJcPddtjoD5%2FcDyJXHl4V2oihzx0SI0VeMIbSIhG8xBxelz50FP4VLcTezGuFOd08pznrQNaeMmzdEzTXXQguqpQDQS56OhoB%2BAMgnVxLYCAXgDKMD8yaYsdVv%2BvbmvEMFUiEliFTf81tWlhoBFODLD2mua3bXHUWTn4j6EApl5tmv0kZBlHkMUqD7J89O8PhwUZaOBhb%2BtoyEyefnkhCaYN0TZoN1%2BPsIikbHAw7GMXiwmjHyAqlTJJcdjYkA7Jflf0pGrrT85KERWAhwv8O9dBPTmVqFiVqLfNOtcx96Cdc8P6DOKARUd70%2FrxQjarG6LQI7dScGll1XhxErQmqgVii5p5zbPLSwRegU3vd%2BbeBlbzOqwkco8zVvYjN21WTQi6M7DZFTOGtAwuG9d5SvCljkLIDaRsniN4HEHTZMSMSJ7VGCRKkoE8rZmRecuYROytna7Apn%2BVe76OMlF63DWIUpWRDY%2FCoE%2BD%2BAoyAvtdo5wi5yPNdi7ruOSEYosSf4boeObEAAQfleClsZPouEbmnTjzr1iJ0f9H168YKaZkB3K87P94CKyTqttPQqj5PnMLKv6sAGOqUB8TrqTmeBU%2FDQYDm6TRrcKsNLU5890W6bS92YQ%2FmAOt5wOPZ5d4fBnH84ZC05sFn0jXJd9uN%2Fkz60uiv6WL8W83fglRV1s2akyxQMhU%2BqBxbDjRpDICZEnUNvIVAqb60kJnC%2BXSGS2kNaTqezklc7XbrRpTMIE%2F55jMaJO3hxynJ2XVOlW0N95WYnd%2BBtJhq0Miwe2KKh5sTlSOJJSirbI8vVGD9Q&X-Amz-Signature=7c7d768448c09e76b5e25a361660711eadfc27e0d7de8c15e90bd9eea47b7114&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHLZFQ4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FO5v%2B3Rs6TW6CMsabZ2qHKJnrIZMEoU9HynDyPqpvpAiBywx3zMnrq32FLgOvDeAtWrtT%2BeULbWFnogiPZz857sir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMaLHYuDQ702gc6ybKKtwDNtXhOxveaLwRzL7twz7XFL1Kq9noPG3ATnzobRiD5U0%2Bs%2F5kD9JXRdgBf3KcnxzktFpJooeN9wTnpYMBzftlp5RTCkE2rCQ%2FUsyCJ5%2FqtBICev2MtY70QPv7%2Bvask0l%2FGFNAoINhwf2KXPYNcoEb11obayZJNQ59EawfYmyVJOawMH8QxFBongR30TpZ82Zje26FiPZ06TwefHBSLew44seVT993EyCeN8WKRaX5O0zNaoh5hBHc6Z3RkZRJsKZ4nCWOL08nLrg6V33HnQxlPm5zSCIEESS%2BVfmsD8zmaMzF2%2B6I%2BqZxctOt%2BJ9ZlHEDt2j%2BQIZrWhWQFWHEGffmCJ%2BHiXJ7yY%2FTkpid3%2BfWDXDUhsahf2%2BTpEBMELt%2BPcQsA8Nj5HmKxjf5dr%2FC9mpLMbRS1Nb7Y6BSwxUxK9Pq%2BxdGiy6RKrtchgaiLi4ODYymFuLPYIeforpv65A%2F%2B3xJ8EeAGhm81eFvMotgm4lZuuJI4F3k2DiLsXhJiGaMuWCf42VW6GwKUxycB6FnFbhLxNqxtsleNlJql8HAAuHkf%2BXVE2PolUys0ADsRsDF2inJE1c%2FymlyNaHhjcFQiajSUApWmhrSdDIlC2rKjKx%2Bi%2B1w1B%2Frvm%2FqZvWmVbEwp6%2FqwAY6pgHrNYyLIB957TIHXfHfcKtr8Lmsw37QGRmrDqkbZTOaVHqGORDBnXNeujVgetfasa%2FFYfcD3Ozzcgfx%2BuoG0N%2F1jtjWeZkVlsofborVT3iiOJT8W7JGe5oePBZKCEaDNX0%2BiVoJRSgTUB7pXfOi%2FmNEdyntCn2LZfsB1STrvVitJHAm7i1uA4QdpZZcoVYhtRreLjOtSWPMSSloEUQ1WDOtYFfHxFMJ&X-Amz-Signature=d990ebf3cb52360564d1e738f955c3878f911b3cfee1ac135a99e04e83b09ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGPOSSN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDHsdR7f%2BGlQ79p4tf6rdBr5E%2FP3VdZED6P6Ttm5zoxAiAmjC%2FAR%2BA2CjSU8VmM0wTuBtXYwP%2Faj2DXL8DRSFn9Hir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNN%2F1Q3gUYYLHl2yQKtwDkmC0UTH5QveQ3Oj1u7j3JJvjNc4HUR09PKFebg%2Ft%2FkPZy%2BMbN3WWYtXtbrnD%2Fdm27zW75AqMVlPWyEqhjSgKbHi1UpZW%2F%2Bp9xMbhiUogYisKd5LI31aSg5NLF7B08FPQJTpNCFpTw3BPxxzLd2dss4VJBpY5lriuvJC9h9NKpwKSO9zRBgoDa%2B9H1owaEBBh4pAa0sYrbbkJEx20qq%2FdGyuWFWGPxAdLf3CIvK4Nd%2BkxxA8EeX94SCV0O%2Fmkta%2BKzbT3JC6lhV7kHZdz6Xlt9A5KoCLNvmjZ%2F6bDyelvsTWd%2Bdtn5Rb6Ntbk4KXMIZGiRAlhigBFFpNeNEBMEtAr5q%2BHPiIhpOqE03tUquJBpfq7aHe8ZxfcebQ9vv75%2FN0fU0ZREJxOodP7ZmkQNnJtvfVbN9QFJmKNZxwhVVRAoJO42cOiv0Bh8D6JgJP4Fsyd9dc5qYjS3klSW1RU01NjD2HenesXqCNW0iIbpVWi4tHd312N3nwIl6XvlUWFML6enYqowVZ%2BUljISiRP6O32oAFT4IsY1%2Bj6GSoddn9v9QE058msUsH7exKivhk4p8IU5nDb3%2FDN9%2BgXnC9fnahSqPIn7qaGz8Ec6m3f6H1zEgIerYAB20i8PPNGn9kw7q7qwAY6pgHyIa3793gqdwLpKd9biJJyqTwTGX8J8EtGpVLltzrQ4CfjiTP1gEIkQ0TISUYSbvcWsN1oY6GOkMnPjhhGz0%2FUHHFUYY3SQY7eherW3LAvARS517%2BE3B4XxsksCezG41k%2Bu8LozTN45kW49tmH90yUC3vvozCGyhJjIueOlPnWB3y8JIspw2wdJUb3ZH1AY%2FldoIBK1W9zoXagfd1iFZPmf0ChBecY&X-Amz-Signature=7c2aec95baed83d94cc3a5b9fdf3b20b6f4648e1018f5f96183ef43f32ee8b13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
