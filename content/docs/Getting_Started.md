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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIQCJ7B%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQIlNN8tfeKv2Ve36d7ppXxHNSkfXurUhMmn0YJxMUZQIgL083bAYDkEyoFjBiGiwxFtWUomIifkfNgT5IEan%2FXJEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDM8Gfyekj4jpxvdNTyrcA%2FEKclrkkmauQrODFk%2BOsL%2BAY9nigBvjIiYkk98Bre16rmK2uXoxxCL1nONXglIz5hoeCEdYwgVNqnFNXco4y18xoz1W3ShMdbEkYIiOrTHHl6D7VBMQHUYWGMdCNpx%2BmidEVmYi8ceo%2BE%2F%2FQT74j3s3X2uUBhE6iUKE2q9rTYGEX8tK8eGkZqzyJ2%2B7zHQbr%2FHbbPa7SikWH%2Bl9M6YFapNfrV7TLScDvQlWRmo%2FJFoFqAYlMi9BZ5DnBpYIyl%2FAJ4VnQNHCRQuMsgQEA0Qs7NCzAe7AnGINFPxxzZQp4iM2CEY5nrQO%2BgOj0I%2FzQXj9GGdUlGUeRyxGVLB1CGlqzlJRCOBh4Ks5DL9qnhUMCCCyW60lSQDt4%2FthCQ3opsn7d%2BqaJWo2xDLdswJVM0ZONhh5mexhKreegEPSaW0vSbTb17M7iInPpNidIb%2Fgzz%2BuouNkOabYTrypovtG2iWMkymC4Emz%2B46vzeCGqP7oxFiOziOdLqxyvX4E1i%2B6AzAQ14PSFVJT2T7RCOLzLOnQX8d4K%2F0ytQpsIc%2B02SLxItApncVdOi3FL1SUWAsGRIBhaiXNtmM5yZ9HXt%2BZZ59iEWBWW9%2BC3u1bNpmQq7nOgyJzZCZhPlrXbRWqbapwMOCiwr8GOqUB%2BOPk6YaqTRbtLSrZyN4IJKB%2BAZ%2FFrjr99WnPHcj5jQZp%2BtftHAJqowLktcp1%2F5LqEql%2FBoayflDYBdCJNXPzzQjK0QAH93O%2Bfb7rjIeSHmIGSSR%2F1Li29u22kivQr%2F%2BPNpbBAYO8HHy7PYMAmuOgDSSJSMBr6a0fr%2FVjZGS3A6eaXYYJHhpFD3wY%2BQZTcvIF6Wyt8Id7EV6KPO8y%2FXqdyzD02%2BS%2F&X-Amz-Signature=443faaa847f429b3fe4b3566b72b86b0df24149555c3344920e7ef72c3832430&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIQCJ7B%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQIlNN8tfeKv2Ve36d7ppXxHNSkfXurUhMmn0YJxMUZQIgL083bAYDkEyoFjBiGiwxFtWUomIifkfNgT5IEan%2FXJEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDM8Gfyekj4jpxvdNTyrcA%2FEKclrkkmauQrODFk%2BOsL%2BAY9nigBvjIiYkk98Bre16rmK2uXoxxCL1nONXglIz5hoeCEdYwgVNqnFNXco4y18xoz1W3ShMdbEkYIiOrTHHl6D7VBMQHUYWGMdCNpx%2BmidEVmYi8ceo%2BE%2F%2FQT74j3s3X2uUBhE6iUKE2q9rTYGEX8tK8eGkZqzyJ2%2B7zHQbr%2FHbbPa7SikWH%2Bl9M6YFapNfrV7TLScDvQlWRmo%2FJFoFqAYlMi9BZ5DnBpYIyl%2FAJ4VnQNHCRQuMsgQEA0Qs7NCzAe7AnGINFPxxzZQp4iM2CEY5nrQO%2BgOj0I%2FzQXj9GGdUlGUeRyxGVLB1CGlqzlJRCOBh4Ks5DL9qnhUMCCCyW60lSQDt4%2FthCQ3opsn7d%2BqaJWo2xDLdswJVM0ZONhh5mexhKreegEPSaW0vSbTb17M7iInPpNidIb%2Fgzz%2BuouNkOabYTrypovtG2iWMkymC4Emz%2B46vzeCGqP7oxFiOziOdLqxyvX4E1i%2B6AzAQ14PSFVJT2T7RCOLzLOnQX8d4K%2F0ytQpsIc%2B02SLxItApncVdOi3FL1SUWAsGRIBhaiXNtmM5yZ9HXt%2BZZ59iEWBWW9%2BC3u1bNpmQq7nOgyJzZCZhPlrXbRWqbapwMOCiwr8GOqUB%2BOPk6YaqTRbtLSrZyN4IJKB%2BAZ%2FFrjr99WnPHcj5jQZp%2BtftHAJqowLktcp1%2F5LqEql%2FBoayflDYBdCJNXPzzQjK0QAH93O%2Bfb7rjIeSHmIGSSR%2F1Li29u22kivQr%2F%2BPNpbBAYO8HHy7PYMAmuOgDSSJSMBr6a0fr%2FVjZGS3A6eaXYYJHhpFD3wY%2BQZTcvIF6Wyt8Id7EV6KPO8y%2FXqdyzD02%2BS%2F&X-Amz-Signature=7b462f9c8123fb3cfb641f25ff46f8d7b002f38088710483de8b25280d65a4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCWVQUGB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbKnfMJgQLC7OTMjzN2v0%2BQFJ1T5lQLqyqINZxFD2kIwIgIP3EyuIDpLseCQkxh%2FbKIIcjYaLiRHYABIS%2F1hbfLUMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKgIiz12DEvJLZdyPyrcA%2F3pRLf%2F%2BF8YRqGHH%2FWQradsLjE4jKe1fZr9ilT%2BPv7Fg3mukx3XRYymTUkmMY0hJA8weBESzsM1OmIQkAqeWJ9PYDzNeiuukBP28pliDSKzYFvEan94Slgyzy0LYKdml06SAoTCvgQ%2FA%2FGPhi3e8v6vcvDhNOXSsy58dynX%2BBcLFr8gl7ZODFwJOM2MCCDDAnDaMhMiY5tAFun27lwRd6QhsaEWPGPyRbR6llMDeBLdreeleRI1sz1K9i5afd1mxEIgs9CT%2FBU2IKYpwy1XL3sjRutzvhC%2BJEdYX0uXdp7K52UKww5LnEml5KccQVb05xX0vPr8MQGY5DHMNwfX8HkBsS9qVEQgsiIcUZGkhxIC%2F%2FpGpN8xuKemJ4XDDaxfqb1E%2Bl7LeepSCrn083z2JI3n0F25OXbsB%2BloBiJorSMW1axNM54ywZOdxT4d6ubjOtCUabukFIVE0O9dQxnmC8C%2BLwLaRLDTb6bkiseAVEVhCuUS3Rb9XFOyUcrrTi8stnuImXnQ%2F1JKZnfAP%2BZYqOwj1aFNhmIvYIopzrX2lkh3XCkmY0WVY9Bw5dWIG2espcquELppb0Vegp%2FVn%2F3NDX7ee%2BFIPEIsi%2By70TvC%2BhHprxpXLHFJ2bxIfArYMPKiwr8GOqUBDdUamPqzh3xcICmQDF9GICI1OnDRZNAY0KY%2FX4kdphjE4X16VcCZUwHnLL3AOcLCs5CqvpEHj3uYq1lqYHM2NZBof1uG0P0jAjBtkhZglNVbnRHqLIaBU%2BYdssiHwkInzXLkO3bqYl%2BsDchp6cn9vrx6w1a6EUQxmqZ1e1i5DHXpYrNU9RCwM53q%2Bar%2BaMMxUwxpAthYg83gPCL4rwnBFdU8cvTg&X-Amz-Signature=c9889b9742c35a5b194169c7727bbf80bfe10277092155f37d6a41524d93def0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKTFHC5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE%2BjG6miZ%2BqUDin3FRIkvQ%2BWSFtESYjqd147xpeQaiCAiBG99ARogG9jBjyMXwu9e6CffkJzY%2F4G4h%2BS%2BFuUvK3vyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM9QgV4fxZhXXOYjGkKtwD3VsB0UI2Qe%2B267hEz4OZptk251Bz6FViqzFOgfe2mt7P87e0JIN01qYbp46bZ0o9uNak5MKSrrfex1jk0iaVx2VgHd8DUqFeMHkROGYw20wzSPJ%2BWvMWgQjlzNnT43zb47OgT22yzRMy%2Ftvm8Qb2fAiKgLK%2FIw36yQUiwkQmntYRObXoDFNutEgez5%2FbczelOxkSr9ZeyyLDv8M2aHyjdO3RpBjS41WxuSrAYsCtwScxPEQuhdsNy2of0PG24H4ae2Zkha2tiOFJkr2%2FR%2FORpk24A3YqeGenO%2B2oh6A%2BUdwAZKIVyEi3EXAA9lnw8tyg%2BevUQpgwDIocPCKxDmnx%2FsE3wFhip5E%2FXEnenrkOm3m9DQB8Ist1UXllXthwKJfjKVWkhL8siOcrMlxJJV7eW2vsuuvvddv%2B30saF7oqFRd8kRgC99aJxJzsn3orQsPhbfuKeZzHWg3zbPcaVBronxG7znkwGn4W2buycKGHWV1Pv4F9he%2FghWV6mjKWX15XlIZRriqKDS3suqqZcDJ0qgm6uxc55Jv9wLtk%2BrC2rNHSNi3UeHU9%2B5wZX4fE5wPIrzMNAKsxJnnn%2BvOvJdbq2zLwkRzbMIJJYlz6ikdmUr44VSzUwlNPMYRa%2BZ8w8aLCvwY6pgHY6nbVwRwIZHWFQl91BLzyzk0Us5lzjmAYa75u6dUBONGxmGfuaik4Hgke48FHPVIAxsP%2Bhl8IDLN2xTq7%2BfuEPhlIfnJrVVEf0IqjG%2Bz%2BCkGIIN64MOTMOK3Bmo%2FJE5miz%2F2aOEkVEgxXeeQfsYW%2BZjKJkMzoo%2F7t0lKJU8ztilb7ikc3f8jHsAPBYqiRCv7PKJ3OydbgI0YwcHlnH76NjZy%2BTm%2B6&X-Amz-Signature=46faa587d6b6ed182a671dcd44dc772a42409c2b861c8ce34644d2199a664706&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIQCJ7B%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQIlNN8tfeKv2Ve36d7ppXxHNSkfXurUhMmn0YJxMUZQIgL083bAYDkEyoFjBiGiwxFtWUomIifkfNgT5IEan%2FXJEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDM8Gfyekj4jpxvdNTyrcA%2FEKclrkkmauQrODFk%2BOsL%2BAY9nigBvjIiYkk98Bre16rmK2uXoxxCL1nONXglIz5hoeCEdYwgVNqnFNXco4y18xoz1W3ShMdbEkYIiOrTHHl6D7VBMQHUYWGMdCNpx%2BmidEVmYi8ceo%2BE%2F%2FQT74j3s3X2uUBhE6iUKE2q9rTYGEX8tK8eGkZqzyJ2%2B7zHQbr%2FHbbPa7SikWH%2Bl9M6YFapNfrV7TLScDvQlWRmo%2FJFoFqAYlMi9BZ5DnBpYIyl%2FAJ4VnQNHCRQuMsgQEA0Qs7NCzAe7AnGINFPxxzZQp4iM2CEY5nrQO%2BgOj0I%2FzQXj9GGdUlGUeRyxGVLB1CGlqzlJRCOBh4Ks5DL9qnhUMCCCyW60lSQDt4%2FthCQ3opsn7d%2BqaJWo2xDLdswJVM0ZONhh5mexhKreegEPSaW0vSbTb17M7iInPpNidIb%2Fgzz%2BuouNkOabYTrypovtG2iWMkymC4Emz%2B46vzeCGqP7oxFiOziOdLqxyvX4E1i%2B6AzAQ14PSFVJT2T7RCOLzLOnQX8d4K%2F0ytQpsIc%2B02SLxItApncVdOi3FL1SUWAsGRIBhaiXNtmM5yZ9HXt%2BZZ59iEWBWW9%2BC3u1bNpmQq7nOgyJzZCZhPlrXbRWqbapwMOCiwr8GOqUB%2BOPk6YaqTRbtLSrZyN4IJKB%2BAZ%2FFrjr99WnPHcj5jQZp%2BtftHAJqowLktcp1%2F5LqEql%2FBoayflDYBdCJNXPzzQjK0QAH93O%2Bfb7rjIeSHmIGSSR%2F1Li29u22kivQr%2F%2BPNpbBAYO8HHy7PYMAmuOgDSSJSMBr6a0fr%2FVjZGS3A6eaXYYJHhpFD3wY%2BQZTcvIF6Wyt8Id7EV6KPO8y%2FXqdyzD02%2BS%2F&X-Amz-Signature=d7681fc89a8e84fa611a28bdedc033ef16f212c14b16e9b1530b94197a86f363&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
