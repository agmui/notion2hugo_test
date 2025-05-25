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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUXFBYT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFwXR5dDt4J5H4SI1c51Wv7ql%2FAlEwhG%2FjK4TOSBRkwxAiAFQz%2FSrkbs7SK6nSWdysy1Pr28C4boPRg6wyOTb29pHir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMGK3k9vIYDDmIIpN5KtwDfwHlgq6zHLF%2Bw7tJmot1QhTVUYfVndC4eS6YTWj6g%2FvHz4LnMxWh1tJOui0dNAAQKfqiYFKnvIpJD2wo0Hz%2BsvThtcF6q9IKoUj67UehxmIfNoi3NMJZw0StyQSSjDh9wTcpcMCPaOJp4ExjSfK9kfMd9FsR%2F9U88CC6K5w61iuQsiwKFLWD2XqhSc1jzgnmEKxh7AZvg8LPH%2Bpi7oEryK5trEUpjtFxsBcZkn1ZI7RwYZpKtynRgJEofZ0HV7CN9ZZlwDcaOIUGdPHv72U%2F7rA51TnXY7NNjzqEBsZZN1PRRKLuRNbDuXbC48ZvwFw0J0WiUnqpMsziS%2FVRcL2h3AmnOkHzvFcJ7pds%2F1xOp%2FKZ%2B9tDy2JaoSpAOrlhZ7%2BRHCtk4Gzdl%2FqhBMLgOkso0RqxKUDNDgxLP%2BhKb9xN15v4ofP4QesPztIZGSxJ4BzmbiKrED58FLDMZSJ9WEqvpPzJZ%2B7WwNrs5olzo2550l9f%2FTjB%2FmPpOCh5Z73PlOI9xkHVBN%2F1d5N8kc85B6X7j1uTcurtr%2F2YGTCQQ7PiFzpnzFdmR4SlqQP321lpc6LIEAnJc1JIfbz6XMqPUQWiOPt7Jmzwvpzx8lv3JFQDoJF%2BJpL%2B%2Bw4zl%2B9MqyowysXNwQY6pgEUUSKSTTzrtmDQStdBJ%2FQfj%2FShrbzwikPU%2FhkijZdVfQI2BehXHeEAwqlGaoIF%2B5aZZs3uqpO2TZJDHeIn27vUsWo%2F04KDedJbp1qjG9FPJUym9o8OiJuwkLPg5kJTMQl8paVFY7HQoAKo8qhGDe1240ojXTaoqevaxhZu27rrn8%2FkkGgg0EeJIl90ShguxdEL9GUVxwOYCVT6KaBv3tAQSVddemw1&X-Amz-Signature=32df8d472360640c666ced436791fb84214b6303b3f0be563cb07a82bc26d9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUXFBYT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFwXR5dDt4J5H4SI1c51Wv7ql%2FAlEwhG%2FjK4TOSBRkwxAiAFQz%2FSrkbs7SK6nSWdysy1Pr28C4boPRg6wyOTb29pHir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMGK3k9vIYDDmIIpN5KtwDfwHlgq6zHLF%2Bw7tJmot1QhTVUYfVndC4eS6YTWj6g%2FvHz4LnMxWh1tJOui0dNAAQKfqiYFKnvIpJD2wo0Hz%2BsvThtcF6q9IKoUj67UehxmIfNoi3NMJZw0StyQSSjDh9wTcpcMCPaOJp4ExjSfK9kfMd9FsR%2F9U88CC6K5w61iuQsiwKFLWD2XqhSc1jzgnmEKxh7AZvg8LPH%2Bpi7oEryK5trEUpjtFxsBcZkn1ZI7RwYZpKtynRgJEofZ0HV7CN9ZZlwDcaOIUGdPHv72U%2F7rA51TnXY7NNjzqEBsZZN1PRRKLuRNbDuXbC48ZvwFw0J0WiUnqpMsziS%2FVRcL2h3AmnOkHzvFcJ7pds%2F1xOp%2FKZ%2B9tDy2JaoSpAOrlhZ7%2BRHCtk4Gzdl%2FqhBMLgOkso0RqxKUDNDgxLP%2BhKb9xN15v4ofP4QesPztIZGSxJ4BzmbiKrED58FLDMZSJ9WEqvpPzJZ%2B7WwNrs5olzo2550l9f%2FTjB%2FmPpOCh5Z73PlOI9xkHVBN%2F1d5N8kc85B6X7j1uTcurtr%2F2YGTCQQ7PiFzpnzFdmR4SlqQP321lpc6LIEAnJc1JIfbz6XMqPUQWiOPt7Jmzwvpzx8lv3JFQDoJF%2BJpL%2B%2Bw4zl%2B9MqyowysXNwQY6pgEUUSKSTTzrtmDQStdBJ%2FQfj%2FShrbzwikPU%2FhkijZdVfQI2BehXHeEAwqlGaoIF%2B5aZZs3uqpO2TZJDHeIn27vUsWo%2F04KDedJbp1qjG9FPJUym9o8OiJuwkLPg5kJTMQl8paVFY7HQoAKo8qhGDe1240ojXTaoqevaxhZu27rrn8%2FkkGgg0EeJIl90ShguxdEL9GUVxwOYCVT6KaBv3tAQSVddemw1&X-Amz-Signature=452e4a4213872568de8023496a110283a8ba1b425ff626b008f24ee5e020ede6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUXFBYT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFwXR5dDt4J5H4SI1c51Wv7ql%2FAlEwhG%2FjK4TOSBRkwxAiAFQz%2FSrkbs7SK6nSWdysy1Pr28C4boPRg6wyOTb29pHir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMGK3k9vIYDDmIIpN5KtwDfwHlgq6zHLF%2Bw7tJmot1QhTVUYfVndC4eS6YTWj6g%2FvHz4LnMxWh1tJOui0dNAAQKfqiYFKnvIpJD2wo0Hz%2BsvThtcF6q9IKoUj67UehxmIfNoi3NMJZw0StyQSSjDh9wTcpcMCPaOJp4ExjSfK9kfMd9FsR%2F9U88CC6K5w61iuQsiwKFLWD2XqhSc1jzgnmEKxh7AZvg8LPH%2Bpi7oEryK5trEUpjtFxsBcZkn1ZI7RwYZpKtynRgJEofZ0HV7CN9ZZlwDcaOIUGdPHv72U%2F7rA51TnXY7NNjzqEBsZZN1PRRKLuRNbDuXbC48ZvwFw0J0WiUnqpMsziS%2FVRcL2h3AmnOkHzvFcJ7pds%2F1xOp%2FKZ%2B9tDy2JaoSpAOrlhZ7%2BRHCtk4Gzdl%2FqhBMLgOkso0RqxKUDNDgxLP%2BhKb9xN15v4ofP4QesPztIZGSxJ4BzmbiKrED58FLDMZSJ9WEqvpPzJZ%2B7WwNrs5olzo2550l9f%2FTjB%2FmPpOCh5Z73PlOI9xkHVBN%2F1d5N8kc85B6X7j1uTcurtr%2F2YGTCQQ7PiFzpnzFdmR4SlqQP321lpc6LIEAnJc1JIfbz6XMqPUQWiOPt7Jmzwvpzx8lv3JFQDoJF%2BJpL%2B%2Bw4zl%2B9MqyowysXNwQY6pgEUUSKSTTzrtmDQStdBJ%2FQfj%2FShrbzwikPU%2FhkijZdVfQI2BehXHeEAwqlGaoIF%2B5aZZs3uqpO2TZJDHeIn27vUsWo%2F04KDedJbp1qjG9FPJUym9o8OiJuwkLPg5kJTMQl8paVFY7HQoAKo8qhGDe1240ojXTaoqevaxhZu27rrn8%2FkkGgg0EeJIl90ShguxdEL9GUVxwOYCVT6KaBv3tAQSVddemw1&X-Amz-Signature=907b1f6e015322eeb005e7aa8973daec5e2b10f1643ce39414b4336ebea5f731&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MJULGJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGOb8nkcQClkatt4lizC%2FoSBsdSBWebYTIpMrL1UxK7%2BAiAfdwT%2BX8kuMA7CSibQG74zUOAi4wVLMl1JDZm7y90dRCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMneHcIQqIbn3tmEAUKtwDRXMcfQTYvr62sOlpd4CuleoUb7t2DHVSHHhLUDX0CpvK4WrgBhRlVa25wQFAJZe9XCqZ2FkRF97WCJ7TfOUvOGXfSrIbPoPWgPScl%2Fq53%2B1UwUrDq09QxxXst5KmSPQy3OnxqXE6Kc0dXCBOEWxbGQnnVCdqSqfcY8mrqURg5YX9CT%2BBLDuf1JFTVj8fYnFSuQa8j%2FDxaeouz%2BkeyflQIInI%2BXUGaAGEIfjYvzES2vz%2B60nSbHh1MW9lv%2FYlU7LgXuTjcIaYlWLGw8RBkWDnK0OLeS80rRYcOtKpHGulE0lXN3pRnQ7fCc2etDlRBur%2BWCZfxKy4KRQOaQVO77d6tYvmKS0L%2BAWE6vegGILZ%2F2OFrCa7ng2mYqMHTf4R8clSimCSUWaw6s2ceq1dYXXA3rrhuj6teSDtgZe5OOL0Ld8CizgpElHS7VrOjhKqAe3VUUgmHHlthOT960XBI2%2B88H7RuLrYxz9N%2FJLoAllyykIWPMcBiiPD3p3oCfc8oxJ%2BCJ4Wzgi%2FOLj6Bfb%2F%2FH5Z2xwLAkCRDM%2FQUDOmDjbeyF4g7IkOuKc598aUlGHzbUpu6bugISH0SkxZltYQtatMEYkCD3RCm9k1SVg7zWOV3e0HAshqBbB1qAC%2BD%2BQwwcXNwQY6pgFJVrnNwMTRIt2dOTTBQZRBEtq9wm0KPnY4N8y5EVfN5UZvFgQ22xg68KBHmgK8v2Q9ZpR7ibp3LgBNWt9SeUVcUrSezDnf4jvjfEcpJUykPmSZt%2FHYkLm0ZjUOi5qDzGHTxwli4ddbAYY%2FK9UxAfh74U9IaUHdvZq5Jz5O314aCzlukIsfBM2oBRXvUVqDwY2RC%2FKtsOASZIG2XWviCxHT2qSKclVK&X-Amz-Signature=f1563596cf0f4f8b64141d96425a12ebcf9718253c08ab9605f0663f4790d691&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCKCNCG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDtzThRzT9PjtnM0tbncoduA%2FQa2waRw4Znecvx6lJd%2FgIgabtP3r6fBBQDDg0fQUnjCxzmmUCKHWGr9qG9YLTKER4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDL7yDePyIjXpwunUHircAzoe1eDFCM2STRTuwsUGKYaMai2etPrj1kuU9RNbVbmp4Y%2FPh97RKxtH6xq8z8LVncbFIocWB0SugHplsZkIX3RFawBbg2%2FVDlR%2FrNmljpR5UpyrzO3U%2BKE0wexpqupi0nQgGcyifTJ%2Bi%2BzYuqz%2Bvp3cpNGlzB9bXvla1I84vCGbQF0v0LM%2FL1%2ByyTrqrQ3fbM4uubxsUlcxTfeN6wz0gsfWNCsYs25pOEbQc5KvO0tkGnjeUsztvAawpeAmW7py54LP6fDkDfA%2BNTeaQbOrPU5QGSA5Ve%2FcRUa9VCJ0twqBn1r067iswIJUCpnXoeD5crbmm%2B7rxqVH1LqAM%2B%2BY2V5e%2FL4sbSNTvgEoxMOETHhNUGBe93kDF70WkY4YEEEOopfac0%2FKt6YfobUWaxPqvBNwYy9psY%2BI1JR%2B7wvDkyjoKKRWhoX1xS7A%2BIo81VTWlpQ0cGdME0d04vDJXxLFMOsekTydsaX4zkatjMTiQrmkJ%2FYJ6wqT%2FVFQ7kjlJAMrO6%2BWrsPD29unxBpEMIZdp6bsRJZr7J54a9nZ9Yp3V2GzRPYcTHa%2BJ4SMNu8yswLHhRMdHfwDMWMzEAoocdGsZ%2FYMIq9%2FOvIvOXSFJJA8zFEO7IapYDsbVWT5Qc7eMK3FzcEGOqUB%2Fe0orhkD9be2MJfVRfKbGgqKowHW1tj%2FfMVLZYuZ5637YD%2FBX8rMuGv9lawSXtd9UUcPfFrj0Dw3C0pQFVc%2FWoFSbc0OEu1JcogKz4G2RYR9035caEVCtqKbBzxwfJUP29yWyre95FAyLgbv3kKq%2FAojqL3QLXoRgWSJ2JotKriPFacE%2FZqYBWEzGt5agZU10zNI5x%2BgSyHmC%2B2dUtiAOnq9WNY%2F&X-Amz-Signature=b7b6d01c249892630fb82236acf5196e7a9d15704f09e8430466e7dd57d66abb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUXFBYT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFwXR5dDt4J5H4SI1c51Wv7ql%2FAlEwhG%2FjK4TOSBRkwxAiAFQz%2FSrkbs7SK6nSWdysy1Pr28C4boPRg6wyOTb29pHir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMGK3k9vIYDDmIIpN5KtwDfwHlgq6zHLF%2Bw7tJmot1QhTVUYfVndC4eS6YTWj6g%2FvHz4LnMxWh1tJOui0dNAAQKfqiYFKnvIpJD2wo0Hz%2BsvThtcF6q9IKoUj67UehxmIfNoi3NMJZw0StyQSSjDh9wTcpcMCPaOJp4ExjSfK9kfMd9FsR%2F9U88CC6K5w61iuQsiwKFLWD2XqhSc1jzgnmEKxh7AZvg8LPH%2Bpi7oEryK5trEUpjtFxsBcZkn1ZI7RwYZpKtynRgJEofZ0HV7CN9ZZlwDcaOIUGdPHv72U%2F7rA51TnXY7NNjzqEBsZZN1PRRKLuRNbDuXbC48ZvwFw0J0WiUnqpMsziS%2FVRcL2h3AmnOkHzvFcJ7pds%2F1xOp%2FKZ%2B9tDy2JaoSpAOrlhZ7%2BRHCtk4Gzdl%2FqhBMLgOkso0RqxKUDNDgxLP%2BhKb9xN15v4ofP4QesPztIZGSxJ4BzmbiKrED58FLDMZSJ9WEqvpPzJZ%2B7WwNrs5olzo2550l9f%2FTjB%2FmPpOCh5Z73PlOI9xkHVBN%2F1d5N8kc85B6X7j1uTcurtr%2F2YGTCQQ7PiFzpnzFdmR4SlqQP321lpc6LIEAnJc1JIfbz6XMqPUQWiOPt7Jmzwvpzx8lv3JFQDoJF%2BJpL%2B%2Bw4zl%2B9MqyowysXNwQY6pgEUUSKSTTzrtmDQStdBJ%2FQfj%2FShrbzwikPU%2FhkijZdVfQI2BehXHeEAwqlGaoIF%2B5aZZs3uqpO2TZJDHeIn27vUsWo%2F04KDedJbp1qjG9FPJUym9o8OiJuwkLPg5kJTMQl8paVFY7HQoAKo8qhGDe1240ojXTaoqevaxhZu27rrn8%2FkkGgg0EeJIl90ShguxdEL9GUVxwOYCVT6KaBv3tAQSVddemw1&X-Amz-Signature=c112883b390b42032cb574d293db54092078230fc9d8e11af60a1087782b3101&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
