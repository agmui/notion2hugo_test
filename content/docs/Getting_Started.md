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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRMMIFV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6SmoN%2FtpR%2BXe9ei54FMubVt%2Faa5pjpU3maDH7bZhqWAiAgj8ylMZnVT7KnZnN8rF6qG4NDagauFkNIDdZRI4axnCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMveXgARd1faozTAE5KtwDHXwFr%2BRBZV8TAyxGCWLRC11B9FroPe9TleGx09xUu8iy%2FR8pHykZ%2FSh6JorWOYfGg8wbPe4lbNxLdo2r6pj4cHoFKU933FD88U5CEThSxY5re4XQbS8K%2BOpNwSgghaATvcO%2FCmAR7g8BFvMMJlAtiX0VLcos%2F%2FgHyas%2B7ZO506k8jPnGRcr1mFz%2BGwKgr%2FnJdg3hu3gZpkIavPG0UkCAw0DI4JfaAxp8UYbRDz668itZXroRyYlgds7SuHB0UZogIv13PXjQdP5MiNPw68BPxiDVslrDm%2FxDCE2OXh%2BGhT%2FLARdGcy8w9oBgM5wNAOr5QSmznaX0tqsVriyfyWKm3aJb4aV1QW3UAyY%2Fe8gimHY4XxOtfWcYy9GSarqkXUgAyAird9TVntX%2FZ%2BFz9AB08UCAtByJwsljq09awN7BF71ODlVt6lk2Nr6CArgOqINIoC1cR1FDARppf07bpCeJhCWDhmKgqXTrEYdFHf3bh9skLXMOczwSTJEPa5Lb9vFe4NjjIFpB82pRnJXC4zc6nDBHaVcEUYPZCne9saKB15BEQ2EmdaKux9%2FclPcGKGgfUQnm7BKNV3P4hw2xMVXIMzO3%2BGAApKExafXp%2FZ29Q5%2F7JyX1wQhs%2F6f8nfQwpe%2BYwgY6pgFvbpqj0SOqJSu58a6Jzj1nemDJD2TPB5uMKTH%2B7a2CndyOrd9gdoOlNbvZuqFRnQharhUH%2FzJ0lFdodZPwqvtZ6UObUWOy9Pxs8hi2ZZUZJzpjFgEXfp95s%2Bqag0IhTtxQiT29fp5xfsRMdoXO5aPl55fDh%2FzSj32kPZE%2Be6bA18WdqyJv%2FQOr%2FtZQAJhPLibBcf71EhBydF07ir93kryPWcIfiI26&X-Amz-Signature=6abd3d72d09feb9793f0b4c7bdfa735051eb6e8e83408d0a0b874bc663070161&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRMMIFV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6SmoN%2FtpR%2BXe9ei54FMubVt%2Faa5pjpU3maDH7bZhqWAiAgj8ylMZnVT7KnZnN8rF6qG4NDagauFkNIDdZRI4axnCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMveXgARd1faozTAE5KtwDHXwFr%2BRBZV8TAyxGCWLRC11B9FroPe9TleGx09xUu8iy%2FR8pHykZ%2FSh6JorWOYfGg8wbPe4lbNxLdo2r6pj4cHoFKU933FD88U5CEThSxY5re4XQbS8K%2BOpNwSgghaATvcO%2FCmAR7g8BFvMMJlAtiX0VLcos%2F%2FgHyas%2B7ZO506k8jPnGRcr1mFz%2BGwKgr%2FnJdg3hu3gZpkIavPG0UkCAw0DI4JfaAxp8UYbRDz668itZXroRyYlgds7SuHB0UZogIv13PXjQdP5MiNPw68BPxiDVslrDm%2FxDCE2OXh%2BGhT%2FLARdGcy8w9oBgM5wNAOr5QSmznaX0tqsVriyfyWKm3aJb4aV1QW3UAyY%2Fe8gimHY4XxOtfWcYy9GSarqkXUgAyAird9TVntX%2FZ%2BFz9AB08UCAtByJwsljq09awN7BF71ODlVt6lk2Nr6CArgOqINIoC1cR1FDARppf07bpCeJhCWDhmKgqXTrEYdFHf3bh9skLXMOczwSTJEPa5Lb9vFe4NjjIFpB82pRnJXC4zc6nDBHaVcEUYPZCne9saKB15BEQ2EmdaKux9%2FclPcGKGgfUQnm7BKNV3P4hw2xMVXIMzO3%2BGAApKExafXp%2FZ29Q5%2F7JyX1wQhs%2F6f8nfQwpe%2BYwgY6pgFvbpqj0SOqJSu58a6Jzj1nemDJD2TPB5uMKTH%2B7a2CndyOrd9gdoOlNbvZuqFRnQharhUH%2FzJ0lFdodZPwqvtZ6UObUWOy9Pxs8hi2ZZUZJzpjFgEXfp95s%2Bqag0IhTtxQiT29fp5xfsRMdoXO5aPl55fDh%2FzSj32kPZE%2Be6bA18WdqyJv%2FQOr%2FtZQAJhPLibBcf71EhBydF07ir93kryPWcIfiI26&X-Amz-Signature=bbc1746d17bd46f8968b57c8dd749b2933342e8249449ba91cc30c1f5c94b167&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRMMIFV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6SmoN%2FtpR%2BXe9ei54FMubVt%2Faa5pjpU3maDH7bZhqWAiAgj8ylMZnVT7KnZnN8rF6qG4NDagauFkNIDdZRI4axnCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMveXgARd1faozTAE5KtwDHXwFr%2BRBZV8TAyxGCWLRC11B9FroPe9TleGx09xUu8iy%2FR8pHykZ%2FSh6JorWOYfGg8wbPe4lbNxLdo2r6pj4cHoFKU933FD88U5CEThSxY5re4XQbS8K%2BOpNwSgghaATvcO%2FCmAR7g8BFvMMJlAtiX0VLcos%2F%2FgHyas%2B7ZO506k8jPnGRcr1mFz%2BGwKgr%2FnJdg3hu3gZpkIavPG0UkCAw0DI4JfaAxp8UYbRDz668itZXroRyYlgds7SuHB0UZogIv13PXjQdP5MiNPw68BPxiDVslrDm%2FxDCE2OXh%2BGhT%2FLARdGcy8w9oBgM5wNAOr5QSmznaX0tqsVriyfyWKm3aJb4aV1QW3UAyY%2Fe8gimHY4XxOtfWcYy9GSarqkXUgAyAird9TVntX%2FZ%2BFz9AB08UCAtByJwsljq09awN7BF71ODlVt6lk2Nr6CArgOqINIoC1cR1FDARppf07bpCeJhCWDhmKgqXTrEYdFHf3bh9skLXMOczwSTJEPa5Lb9vFe4NjjIFpB82pRnJXC4zc6nDBHaVcEUYPZCne9saKB15BEQ2EmdaKux9%2FclPcGKGgfUQnm7BKNV3P4hw2xMVXIMzO3%2BGAApKExafXp%2FZ29Q5%2F7JyX1wQhs%2F6f8nfQwpe%2BYwgY6pgFvbpqj0SOqJSu58a6Jzj1nemDJD2TPB5uMKTH%2B7a2CndyOrd9gdoOlNbvZuqFRnQharhUH%2FzJ0lFdodZPwqvtZ6UObUWOy9Pxs8hi2ZZUZJzpjFgEXfp95s%2Bqag0IhTtxQiT29fp5xfsRMdoXO5aPl55fDh%2FzSj32kPZE%2Be6bA18WdqyJv%2FQOr%2FtZQAJhPLibBcf71EhBydF07ir93kryPWcIfiI26&X-Amz-Signature=a2f0cd11d7bedcdc4d3a9b776b32c8d21833440462688bb6cf05beb2f990fad8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CM4MCFE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSibW1gYH6zfFniIFW6LsuY8ubEwMgJ3DGqiFn7LGqiAiEAuZM7%2FZOE%2B8jVPHy1TOJNEzzUVJ8nUVnhRd09RFg141QqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN5FzlRIc7iZA1BQyrcAzrP9ZUl6fuC39IPGZp%2FMs4k29tlitTsjKY6oyxS8puJyULVS4qa3b6Qlr4K23s%2BSEXuufAFL04Qr%2FOQGZcIOZiIl54QnM6fYBtOv4B1gkZbAmY7MTlDCjMVLbrbE2CgXURkrpLRhh4VkXCLD3rijvAj8jO28bp7cDL7lSbE7tz0I3nckkQgqKfyiD%2BU68l3SAfN64XIh7qaYL%2FYl%2B0zNyvTkR0T8ie1w3CiMqKsL3iOhdW2YGQtNLT%2By6xnllyNHjC0OTixVRB3AuxvIE9GSRZ84Is9g90oXrD7OI1s0cEpyshclCtilNfTAxC4iatnHP%2B7lpeS6%2FR0ah3ES5oZC3s15nY%2BUwJBfzBX4soiTToInd%2FpamX3ck7TJWjhw%2Fqe28x2GzOXfjpO3h7NRvmCsLgYytxEoOsh9MIGDsOnyvdh3436GGlnGlzfcayMnEoJT7lo2L54lMEfh01pxNwXXt4pXXCL7Oorr%2Bf%2BQqi8vUIuxNdc%2FjSL%2FQuNIbn5zzrm%2BZkT570%2BCsG9IqBR6QnqsaTgLzRvb8Hn99STwFuUve9MGXAddo7hPhnwq3MBbh1l81tD8aWN%2Bx29iRRuegdlal78P5dSqaUwPqS6foc%2FHryI6P9I1GBegMQ%2F43NEMPftmMIGOqUBvmdCG3DRhiQhEaRGkg27tmCXW9EvSelBxftY2SXVPwmcG7zY4%2Bw%2BkNQAe%2F6IsPXPeDp7rP49zu%2FgzoZd7RkoFWi9XUWXazs%2BOp4Kiz3%2FwKUJ7bOfC81n%2FEjH2yzGcKhlqISchj6%2Brl2F%2BWGJ1WUsvlGqcE1W5mxUgbvKOAcYgFYzH2NTXsIhRTcy%2BXkGzyeVaLwZSCqBGqJfDtvzwORFja4F8Ghq&X-Amz-Signature=064f210daa084f8dec8d3f07e0a3d8b790db07a3f370cd1002286b8299f7e83c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B743ZK2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWfL9OY6hPe%2BTzAWxE%2Brn3YBgJjZEnXdNqG2ba7TKXcAiEAlbZKDGcjp1w20qO8WCKqnyy8u%2FEvDEiiRpRv0jeBK7IqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnYd8XabsCnyB0PlSrcA3P%2FY3mZtDwCycLbbNRQzh89XjlxhA%2FxtTLdq2jXtBvN4jKX1EFCF4SSBqpzUCG6EO5nCkRJVKeNHK19jnux6%2FaNLa5vquTkMU9hMJT0QLhrGf3hIwcP3gfiEqzunrMkY5%2BQsHSs54vMpazYocsPT92Bqmnu9oX88GOg6tPmgzbxhozEDMlm8Iq4Ln8AS%2BXBKc%2F8U8cG03FkDZaxqkP7UaL6uM48CDBfJp7dE4Zpf%2FOtDlz21YKA6PqMzGV5aPITIzwEg3Xzbv9H90XkmYy%2FyfseeKPna1QqsV%2BHIv91rRLgAMT%2FSqbaAM0XEGxYf%2BrePc0zxsRAWG55jclRgpUKfJ8qgu2cr4FXXoB1Hw5K8kpOfl1aAn3LZgSdh9AA536%2FpZYhHH9vVkKvnUMv6UvDuQEvKKpyNiNDpnMy6hlsJ0YhVYB4W1XkYLH28VWgGWsRHtyTx6ZE%2BuktqQI4F5fhYyXR53y%2BydVPNAIPxNG68JnPAvj2lQyHIo%2BYT4z%2BSC4z4vHDZBjlPIEVjWv0UzAo1T%2ByLK86I%2FKHOegf%2BcINDkfllix2dD56Pg%2BqS3cnTIo3j5w7%2Fb2l4FOW%2FoRoPh6EeFfr86oQ%2BCpPbomdYe9AustpbvqxkJ9tMQc72ks1MKLvmMIGOqUBrIXlz8i1n07Mhw%2BWeJ1qi%2FibBc2rosaH2y7LQrKbHQi4jr86svzAoJ%2FGCRpy%2FtA1cqppZfLd%2BHFblamJWtIjxSoApV1VQj8wlFUHoS4FGNRJEWRm201ejdLSxxkffMKzI9eUzxwRibefevBZpuM%2FXrFyCB6IIgo1CtD3bWD83sV1Zpx%2BZzNuw3YsvuR0CBA4Sa9V%2BtS4foHuOhGk1PPf%2BJWAFw6S&X-Amz-Signature=e7422a02d9aa88c866b2ca63ecae23f79f232e1ac280ea600c266cac8e63fa7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRMMIFV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6SmoN%2FtpR%2BXe9ei54FMubVt%2Faa5pjpU3maDH7bZhqWAiAgj8ylMZnVT7KnZnN8rF6qG4NDagauFkNIDdZRI4axnCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMveXgARd1faozTAE5KtwDHXwFr%2BRBZV8TAyxGCWLRC11B9FroPe9TleGx09xUu8iy%2FR8pHykZ%2FSh6JorWOYfGg8wbPe4lbNxLdo2r6pj4cHoFKU933FD88U5CEThSxY5re4XQbS8K%2BOpNwSgghaATvcO%2FCmAR7g8BFvMMJlAtiX0VLcos%2F%2FgHyas%2B7ZO506k8jPnGRcr1mFz%2BGwKgr%2FnJdg3hu3gZpkIavPG0UkCAw0DI4JfaAxp8UYbRDz668itZXroRyYlgds7SuHB0UZogIv13PXjQdP5MiNPw68BPxiDVslrDm%2FxDCE2OXh%2BGhT%2FLARdGcy8w9oBgM5wNAOr5QSmznaX0tqsVriyfyWKm3aJb4aV1QW3UAyY%2Fe8gimHY4XxOtfWcYy9GSarqkXUgAyAird9TVntX%2FZ%2BFz9AB08UCAtByJwsljq09awN7BF71ODlVt6lk2Nr6CArgOqINIoC1cR1FDARppf07bpCeJhCWDhmKgqXTrEYdFHf3bh9skLXMOczwSTJEPa5Lb9vFe4NjjIFpB82pRnJXC4zc6nDBHaVcEUYPZCne9saKB15BEQ2EmdaKux9%2FclPcGKGgfUQnm7BKNV3P4hw2xMVXIMzO3%2BGAApKExafXp%2FZ29Q5%2F7JyX1wQhs%2F6f8nfQwpe%2BYwgY6pgFvbpqj0SOqJSu58a6Jzj1nemDJD2TPB5uMKTH%2B7a2CndyOrd9gdoOlNbvZuqFRnQharhUH%2FzJ0lFdodZPwqvtZ6UObUWOy9Pxs8hi2ZZUZJzpjFgEXfp95s%2Bqag0IhTtxQiT29fp5xfsRMdoXO5aPl55fDh%2FzSj32kPZE%2Be6bA18WdqyJv%2FQOr%2FtZQAJhPLibBcf71EhBydF07ir93kryPWcIfiI26&X-Amz-Signature=1cc832a4a19777418a51df3ec0e4a8e23372f460b50c4bd818671bcb939ba394&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
