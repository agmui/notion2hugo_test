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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6SCW6V%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh23RSh03Tp3AuHj6sb4sFqvjr%2FMoGNreEtJmqRF9Q4QIhALa0HdW0D1ywybFBjQILBxjYPn6Umi65FtBOorRHRe7XKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG6642WxgY73Ha8fkq3ANJJaG9FRa6pp5jMVYVtGlAKJRgXBmQbcRjrjQ%2B75uxX3t6V0dhaYFj%2BfXkCw0VxSpMcLUXCSF8H%2BM3kJeNxrnDNji8h0%2FmZSR4PNi1t02DBhahlYoeCWxGv%2BsCuy1uAti3sSbYPkkCS3pduM1t%2BK3pEhVgFHY9Erync20dtDkjHWZLAM31Uy6FDLyKIyw0vqN%2FZbXJDL06%2FJHh9bDN%2FyX8j3KrwEYddIglFAygY9DyfbPVsM9Y1hfwK7kBojAxS0T%2BW8ITsSqOUaX1A4%2FnU9O91cvaIzCrPd%2F967O8ejwzuTrxA1AgmD281arUv%2BEJd0YXwijj7c9uM1LxUPJtissolpArGULPE9x8mKqzq7EFiiZMDktSV8smWg6BH7pMnH0u5CYgwYCcUzBdEpp1ukrE5vb1fVIPw7J3iBuRC%2BSIW2SmozuwfmQbAeq8OkbW3qAm06v%2Fs0Auh7Pl5Z%2Bgos6%2BuQcaAGaZKYe0Sa%2BThjtm2tZf2osAsSor7KayoN%2FrMjrSD61dtnsj33UlBKwivaPNy6YXZ0%2B1oUx7r0SRfFxe23OAEeZ9ztfV%2BMGyhKsbF5DUqdTsQTtxdtLsKiPGe8J1OZeAmkdbwgckCbHZPLNsrMq6WobFzqdUSM7myjCn4u%2B8BjqkAWSAxN0fVGET3529GZUbXnGcFExxCDFWygRxE%2FbcuDwf%2For%2FEPsFiUevd3gAAAJ91K73Bt19pxSjxUlQ%2FMciPs2TQ0wLYYF3bvGrHkpu8%2F1TN7T3eThacWBLr6JGM9ucJkqR%2BdGssIO838qY7BQKZFZ3fUxSuEdflJ9Affotjv1TDjpXqWeDsEDBrnmqOEQo1eBidEWElmEckQI1%2BOPm5rMqKpZT&X-Amz-Signature=378bcf85caa0e6f7f273cf713ba1ea02797bf25ba52a063af6cc0f0bca2f98d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6SCW6V%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh23RSh03Tp3AuHj6sb4sFqvjr%2FMoGNreEtJmqRF9Q4QIhALa0HdW0D1ywybFBjQILBxjYPn6Umi65FtBOorRHRe7XKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG6642WxgY73Ha8fkq3ANJJaG9FRa6pp5jMVYVtGlAKJRgXBmQbcRjrjQ%2B75uxX3t6V0dhaYFj%2BfXkCw0VxSpMcLUXCSF8H%2BM3kJeNxrnDNji8h0%2FmZSR4PNi1t02DBhahlYoeCWxGv%2BsCuy1uAti3sSbYPkkCS3pduM1t%2BK3pEhVgFHY9Erync20dtDkjHWZLAM31Uy6FDLyKIyw0vqN%2FZbXJDL06%2FJHh9bDN%2FyX8j3KrwEYddIglFAygY9DyfbPVsM9Y1hfwK7kBojAxS0T%2BW8ITsSqOUaX1A4%2FnU9O91cvaIzCrPd%2F967O8ejwzuTrxA1AgmD281arUv%2BEJd0YXwijj7c9uM1LxUPJtissolpArGULPE9x8mKqzq7EFiiZMDktSV8smWg6BH7pMnH0u5CYgwYCcUzBdEpp1ukrE5vb1fVIPw7J3iBuRC%2BSIW2SmozuwfmQbAeq8OkbW3qAm06v%2Fs0Auh7Pl5Z%2Bgos6%2BuQcaAGaZKYe0Sa%2BThjtm2tZf2osAsSor7KayoN%2FrMjrSD61dtnsj33UlBKwivaPNy6YXZ0%2B1oUx7r0SRfFxe23OAEeZ9ztfV%2BMGyhKsbF5DUqdTsQTtxdtLsKiPGe8J1OZeAmkdbwgckCbHZPLNsrMq6WobFzqdUSM7myjCn4u%2B8BjqkAWSAxN0fVGET3529GZUbXnGcFExxCDFWygRxE%2FbcuDwf%2For%2FEPsFiUevd3gAAAJ91K73Bt19pxSjxUlQ%2FMciPs2TQ0wLYYF3bvGrHkpu8%2F1TN7T3eThacWBLr6JGM9ucJkqR%2BdGssIO838qY7BQKZFZ3fUxSuEdflJ9Affotjv1TDjpXqWeDsEDBrnmqOEQo1eBidEWElmEckQI1%2BOPm5rMqKpZT&X-Amz-Signature=7b794feb06269cdecb6815c1ae9365a6dca52eadb9029ea472b881ebfb2f50bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2KW5DS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCehAEUqJIyjutI9V7xASG31TdGXx9Hv6PYaHgXZhK6UAIhALqOQOd5mofPVguydUgWzR3z3kSzvVBq%2B00P%2BkY2QFc1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweW1VEPOmeY%2BAYn5Mq3ANtl8QhCczwAnu%2FSRRURm2vBhpN0VljC3rJPjIDgIkgpOelDicNqR%2Be5WSlT6OD2PFYt48v3NuY%2BFAA8uEmjQ6hC3T9fcRfPB4jhdA8Cv36sxPK%2Fnge9QARY4h7ffQ9Amays2wUTTYlg3Kn4o5pHxNEQjKBlQeIZ5LqHXuZbZXC1H8QTk4GJYlsrxJQBdB%2FVtySpY6oBmbZIFYZvR1xZ94s6BZuXRTUS7AVll19ev6u7LLEo6VI5grdmO%2BOAX%2FNwYkoMrynpUqRfLmkcW3JQyONp%2FELzI%2BQp%2Fj5f1IlAFdzDPvdSsKbwYmtHSREeiCyvxFoN3B60BYibTNJ0RtFsJPGrImo3HueyaOkjoiSSySEPBC%2Ff6h%2BML0Sq5qGLxz%2F%2FZo6p18XVqbJfV8zthF0KyUf2xa2nceiqa5coTzWcdyOAnQJbMv4%2B2qTEHBbPfJI3WxPfK7aAcBgklaxrScZE4omFbPN3ttDDMNLG3D5CLdqPOTETxcqUDG9Bk1nmsFxQzRI1N570FpepgKMTvntq44g2hRwI1DUGd9JHwZFjb3YnnGleDQwuCLh9UGEuQFyXD6DC0G94hiUaKZvwapJhhsBk88iuOAIBxSBXMAsnTClKfE8A6NmpHL3jnIP2zD%2B4e%2B8BjqkAT2fNxowswwGkHc97Nq%2F8xpYbYteR9DT4pcO9cU5G%2F5S2coap9kp%2FpWct%2F4kFDy8P2XS4PFocotLz0pkQPprJDVwveY0HTDENy5DWFXruWyIe2imS9fa%2BnNcAG0%2Fx1oQOep8A9WmKlsUDbDSTy0EzbljFgDhxJRVJzx%2BGTiXmq5%2Bv3GA3x6lOcTd6rL6rC%2BG5w8SZd16On3TSlvpmJgymRCReRCc&X-Amz-Signature=086cb4df76a1d00c3f98d95d2966daf10e7201446b939f0f85af6f7186637aad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F63SGSD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZxwMgMg1OuSRQZ3Sbrv6hiVZyO2h8Ad4Aw4ByMDnWGAiAThhz4Sw4jsxOLPPUCKSIB%2BYpOfBIkVp7QBNralsyvhiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRKNIT8efwCuKkO10KtwDtI1Fgdc0LouczpBmmryw6TgZfQ4L4MXChijkK0TaFQ%2FIZEJSuuNFUZkOmUPdqOFaiX7N4JdBT0JqmdCPtpvJsXJpj8ZvQvvoYDXFXizXc9jj9mKJaYY4TITKKTMsimBn9NongNMjbvavqSUUK2UOglvQY5tArBXbLRaeHDPRq3v5B%2B0i6n5%2FUPTU3NDePKHKezwOaNUFCyfG0MyyjKzUGUwgGNUg%2FEYSZVIqGhD6rit6rYMiZxY7diCOU2GYZ%2FopQWIk7sk6psKCAAbIFyyOzxRTGuspyeCaFz3zgzTOzrlQyZZl%2FbzgcN57VjwwZA619uEbLjLf%2FdkzHd3VvblWgmBQMlq5dP41P2C2We8T47Ln%2FB8gtJ7K0As4symKlAHlF7npxaWbngy50rH%2BVX3P%2Bk%2FZGTIZOnicGplHkTRzCr2QlDnF4veCWUUapodx3X3vDgmr8Y9PAi4MOUUehYawNXnSU1uVA1eLm53m%2FH3vJQ1zEDWa1uNiom4tGKrcOvkpdhhZdN0w11%2Foqoz6mWnkfKy8ALr6wvkWko%2FS9mRKwYQyiIWav0Im5%2BTb%2FD78nmLlGYr4HsI5wrUrKDxGH5HqmdCCo6bylkmgSpYYQ%2BCxLOseZ%2F%2BtiK%2B%2BIC5uS0IwvePvvAY6pgGnj1w45bdI7ZybFcFudVFIpWDW24Fg%2BS%2F1NQC8LctKYxgIqppVOzOPRX8cokc8d67GtNn043t5nmm%2BSxiFuBM8sjl%2F%2FGZrMyUQ6Sa5L6T2wewQzDt%2B024CAbgkt%2BsvOt7huSkS%2B%2FL9WcBOoMtvL048yq5kd4P2Utav695h8ej%2FV6rT4gtgTYULIoN1v2iHEus5D9vJVte8vKViMzRrXfgYMPCIKXYM&X-Amz-Signature=f7992b247dfbbb747f12a09aeac013779717e62d0ee7d82cf8238b41c421d5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6SCW6V%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh23RSh03Tp3AuHj6sb4sFqvjr%2FMoGNreEtJmqRF9Q4QIhALa0HdW0D1ywybFBjQILBxjYPn6Umi65FtBOorRHRe7XKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG6642WxgY73Ha8fkq3ANJJaG9FRa6pp5jMVYVtGlAKJRgXBmQbcRjrjQ%2B75uxX3t6V0dhaYFj%2BfXkCw0VxSpMcLUXCSF8H%2BM3kJeNxrnDNji8h0%2FmZSR4PNi1t02DBhahlYoeCWxGv%2BsCuy1uAti3sSbYPkkCS3pduM1t%2BK3pEhVgFHY9Erync20dtDkjHWZLAM31Uy6FDLyKIyw0vqN%2FZbXJDL06%2FJHh9bDN%2FyX8j3KrwEYddIglFAygY9DyfbPVsM9Y1hfwK7kBojAxS0T%2BW8ITsSqOUaX1A4%2FnU9O91cvaIzCrPd%2F967O8ejwzuTrxA1AgmD281arUv%2BEJd0YXwijj7c9uM1LxUPJtissolpArGULPE9x8mKqzq7EFiiZMDktSV8smWg6BH7pMnH0u5CYgwYCcUzBdEpp1ukrE5vb1fVIPw7J3iBuRC%2BSIW2SmozuwfmQbAeq8OkbW3qAm06v%2Fs0Auh7Pl5Z%2Bgos6%2BuQcaAGaZKYe0Sa%2BThjtm2tZf2osAsSor7KayoN%2FrMjrSD61dtnsj33UlBKwivaPNy6YXZ0%2B1oUx7r0SRfFxe23OAEeZ9ztfV%2BMGyhKsbF5DUqdTsQTtxdtLsKiPGe8J1OZeAmkdbwgckCbHZPLNsrMq6WobFzqdUSM7myjCn4u%2B8BjqkAWSAxN0fVGET3529GZUbXnGcFExxCDFWygRxE%2FbcuDwf%2For%2FEPsFiUevd3gAAAJ91K73Bt19pxSjxUlQ%2FMciPs2TQ0wLYYF3bvGrHkpu8%2F1TN7T3eThacWBLr6JGM9ucJkqR%2BdGssIO838qY7BQKZFZ3fUxSuEdflJ9Affotjv1TDjpXqWeDsEDBrnmqOEQo1eBidEWElmEckQI1%2BOPm5rMqKpZT&X-Amz-Signature=615ac6ed9b461d39118da875cb1c8ccc62e1fad8fadeeeaa47500e2e1cd8e986&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
