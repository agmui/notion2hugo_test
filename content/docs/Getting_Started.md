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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKI4SYG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDc15Iqvv44MKEjK6Z3QGhWnU4fPiE5N68BiDg5DoDNAIhAJKyKxLmN582XBg3TiKpin32FFJHmCUu5kwa3n0RMhaMKv8DCFoQABoMNjM3NDIzMTgzODA1IgwYdUSuvsEJ%2BX2vTt8q3AM3tIur6oFlxktgRtx2N8wzPQ5NLM%2FqzLCVa60K6QnSA0Uf5LRfp7jEAPgDWR6eSWMYNAaVFnCha9a%2FO2tHlnZqnYcueMuv3%2BTLZiqCWZ6MCtMaP1lkjHbIgXhzy7rnQQFLAWHb%2Bctzgzj5qKNv0cnEbeofSLw1%2FpBK5x8R93XAQNjNkBFNqy2ylbv6IM1wTPYbe84qXwSUekPCt2V9Vby2dkMORz5xYH280AVVwN2stp324pPvISSiF%2BNlns4MvnjLet3IfIpEwitV5G9tunI5O0F3skBbUxZX1dI5rBEeOKPMd7atNW%2BBFj91MVFBQINaXrAfA4R6%2B7gIvbh6u03pRSIzxCRr7Y8CHPNLvxAhELGOxqj4ftvg9CxO78P28X6d%2FW%2BhcoBmmSnWmblhDC2rWzdLsdYxaoo0TYBVNh%2Fjmu5FwxaaT%2FWs%2BcTVtd%2F2tldT%2FlvAcLBsr27ofaVqMOdmsw%2B96KMeT2wbyPEF0nby4zrpg3Ha32c5VB8RM9unS5Jyw5AcuBQs992z%2Fr2iEq7qfRMyJSl1acjKPIKOP1AGZBPNZfnBUX9XMZRTFTBO3rQkDFTuwvn0fT3LEZA1gmyrEYZ2R1WvJ1mf4Ua3Y3DVZYxNbBtZ3M61om5BqTDXgdbBBjqkAflVWmqH2YbSv3TJw%2FCyD%2FoZVwSq7huDIh%2B02UFl3k0rYRjshqZ1Q3NCCh%2F7IcVN50r02Ugi80D2QzsCKSuIjOg7g2HrOAMxk3wSGSy2dBdkjvNjFCAomVzkOgZE9b%2FtXG9tkP5ts3vg7Iz0hZN5CjHuv5Z3lhfNV6%2Bl%2Bn4lPJU1RRqb%2FR6oLLEztCeTia7Qt4GETgciUG5F4wXHsBzhkksz9Fr7&X-Amz-Signature=db30fc7189215f43312888d128b6b87abbdcc625dcbfb23e1250f025baf07c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKI4SYG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDc15Iqvv44MKEjK6Z3QGhWnU4fPiE5N68BiDg5DoDNAIhAJKyKxLmN582XBg3TiKpin32FFJHmCUu5kwa3n0RMhaMKv8DCFoQABoMNjM3NDIzMTgzODA1IgwYdUSuvsEJ%2BX2vTt8q3AM3tIur6oFlxktgRtx2N8wzPQ5NLM%2FqzLCVa60K6QnSA0Uf5LRfp7jEAPgDWR6eSWMYNAaVFnCha9a%2FO2tHlnZqnYcueMuv3%2BTLZiqCWZ6MCtMaP1lkjHbIgXhzy7rnQQFLAWHb%2Bctzgzj5qKNv0cnEbeofSLw1%2FpBK5x8R93XAQNjNkBFNqy2ylbv6IM1wTPYbe84qXwSUekPCt2V9Vby2dkMORz5xYH280AVVwN2stp324pPvISSiF%2BNlns4MvnjLet3IfIpEwitV5G9tunI5O0F3skBbUxZX1dI5rBEeOKPMd7atNW%2BBFj91MVFBQINaXrAfA4R6%2B7gIvbh6u03pRSIzxCRr7Y8CHPNLvxAhELGOxqj4ftvg9CxO78P28X6d%2FW%2BhcoBmmSnWmblhDC2rWzdLsdYxaoo0TYBVNh%2Fjmu5FwxaaT%2FWs%2BcTVtd%2F2tldT%2FlvAcLBsr27ofaVqMOdmsw%2B96KMeT2wbyPEF0nby4zrpg3Ha32c5VB8RM9unS5Jyw5AcuBQs992z%2Fr2iEq7qfRMyJSl1acjKPIKOP1AGZBPNZfnBUX9XMZRTFTBO3rQkDFTuwvn0fT3LEZA1gmyrEYZ2R1WvJ1mf4Ua3Y3DVZYxNbBtZ3M61om5BqTDXgdbBBjqkAflVWmqH2YbSv3TJw%2FCyD%2FoZVwSq7huDIh%2B02UFl3k0rYRjshqZ1Q3NCCh%2F7IcVN50r02Ugi80D2QzsCKSuIjOg7g2HrOAMxk3wSGSy2dBdkjvNjFCAomVzkOgZE9b%2FtXG9tkP5ts3vg7Iz0hZN5CjHuv5Z3lhfNV6%2Bl%2Bn4lPJU1RRqb%2FR6oLLEztCeTia7Qt4GETgciUG5F4wXHsBzhkksz9Fr7&X-Amz-Signature=aace017f9072aa0c2b2dfd88647c05b71a53bac6a7d70e30d3582733fef43df5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKI4SYG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDc15Iqvv44MKEjK6Z3QGhWnU4fPiE5N68BiDg5DoDNAIhAJKyKxLmN582XBg3TiKpin32FFJHmCUu5kwa3n0RMhaMKv8DCFoQABoMNjM3NDIzMTgzODA1IgwYdUSuvsEJ%2BX2vTt8q3AM3tIur6oFlxktgRtx2N8wzPQ5NLM%2FqzLCVa60K6QnSA0Uf5LRfp7jEAPgDWR6eSWMYNAaVFnCha9a%2FO2tHlnZqnYcueMuv3%2BTLZiqCWZ6MCtMaP1lkjHbIgXhzy7rnQQFLAWHb%2Bctzgzj5qKNv0cnEbeofSLw1%2FpBK5x8R93XAQNjNkBFNqy2ylbv6IM1wTPYbe84qXwSUekPCt2V9Vby2dkMORz5xYH280AVVwN2stp324pPvISSiF%2BNlns4MvnjLet3IfIpEwitV5G9tunI5O0F3skBbUxZX1dI5rBEeOKPMd7atNW%2BBFj91MVFBQINaXrAfA4R6%2B7gIvbh6u03pRSIzxCRr7Y8CHPNLvxAhELGOxqj4ftvg9CxO78P28X6d%2FW%2BhcoBmmSnWmblhDC2rWzdLsdYxaoo0TYBVNh%2Fjmu5FwxaaT%2FWs%2BcTVtd%2F2tldT%2FlvAcLBsr27ofaVqMOdmsw%2B96KMeT2wbyPEF0nby4zrpg3Ha32c5VB8RM9unS5Jyw5AcuBQs992z%2Fr2iEq7qfRMyJSl1acjKPIKOP1AGZBPNZfnBUX9XMZRTFTBO3rQkDFTuwvn0fT3LEZA1gmyrEYZ2R1WvJ1mf4Ua3Y3DVZYxNbBtZ3M61om5BqTDXgdbBBjqkAflVWmqH2YbSv3TJw%2FCyD%2FoZVwSq7huDIh%2B02UFl3k0rYRjshqZ1Q3NCCh%2F7IcVN50r02Ugi80D2QzsCKSuIjOg7g2HrOAMxk3wSGSy2dBdkjvNjFCAomVzkOgZE9b%2FtXG9tkP5ts3vg7Iz0hZN5CjHuv5Z3lhfNV6%2Bl%2Bn4lPJU1RRqb%2FR6oLLEztCeTia7Qt4GETgciUG5F4wXHsBzhkksz9Fr7&X-Amz-Signature=bd3b371d09c09cf0bdede4eafe9f315294683d8a3e1b626f25a7f4859ec5fe3b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ4IJANF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJq2KAT7Bq7R%2FkqTM7FXvZ0eBRDzTIGVquyLObFi2lwIhAKr3lOU6QBuIZT2%2F3LzfsndJyG%2BumNTRxnrvBdthDvynKv8DCFoQABoMNjM3NDIzMTgzODA1IgwMnddku40nFbPIaw0q3AN1ukYAwLwNhy%2BnPVS%2BO7t5LWFvwdC38xBTT%2FqIa1PPkn087m%2FW37fGSlnPJKxy%2BFhvozhJmH9dG%2FuL1dOFb3lYbwh5w1GzMj%2BR7LNUZQibUeSe%2BlOTAj5h%2FVMkA3%2FNU29i7BOXGxMl%2FjwKYXwRER6Re7ZZoI%2Ft620JUjG2qFzQEkLNEvIqZy%2BUvvqbz5AfWylIBWD4FBeig2d2EjgZ10S5c6hjpnzfOFSNdOXzogV2jBNqBpdcBGBiaimLyH8uYN4QR6mIqbxE0L5T6w4KIZ4ZtUYi5zmAQGBwLpgxdWm6CU3fmqQ%2B6wRXSONm1L4NFh0fKtzR8%2F6V0XimsjLPzRg19PKPHRKNLSGnWQWAsQ9ZViUDLpAEVlTdANquowtW0pMgjSK45lBvlHvUKPljd0IMNZ8ZMbbRU0%2FEyn0GIKdVG%2BbVsNuGBVEZlY20WiW82eZ6XyBOoZSa3zMdZgAcDnbLCwggVJZjXqSgGt6P%2FN2bzK1UQzvwHiUgYxhfOkDpuvbGmiP9Ds0igSpqd5eSgZrHP7LV9ysLhpFlyDDjLUOU6qC5SmdIylf8eNKL7%2FukFsTkjkAHX9H3ZLJSyFVwOIhnm5svhFKjSvNp6r6%2Byu5pWwzKe1uEA9fFGukwZDCigdbBBjqkAYU1i8cQjhRCqrjQNe6S%2BWsEZ0iF8u8DDzPExAYUxmY8jIZdxdlv33zKoF%2FAysG0%2BmbBMQyWgK1PiXcVPH9BkV2lb3sy0jQLdKQksSZ8NNojfg62%2FBtbDx7F%2FPw9sDzCZVY288ljNJjYE67J5K%2B2z1gc3cJOjQKdhnp8zKGvaxfcIOhwakiGWF7KB6VZwiHJEIZG5ndVZKwFL3fPbRwowN46VuQp&X-Amz-Signature=a18e4def2b0d81992217dbaaea0f50d6452f984122f76e2fcfa50071a61c9e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUHX3CI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7k%2B9FdTq9hsCcHZVV3VyAXYjiUJuPRXdemRL0qG3L8AiAE%2F2GF6CUwxuEQ63RRf7ViTA81qSbrN%2Bq%2FwCKuDkRsVyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMvnl%2BLg77MJKFmcVsKtwDy8FcBW3gO2kAj9oZNHh92n4fCS1xzI1X0snknjghckLTSno6fB1qNl%2ButCkQnSenlvHw5t43ylux17qYYD1DQCjXno%2F7liE4u9xIM4KuJsA4OGX3SIrW9XTGPfBKWHhd7mz9pxqPcJE5RoDdzpUmKMozb1%2FVMkt8Uuud358FGzf7BC0n02qHg9L7RMGa3j8xWRrh6N5VdicD%2BDlYoTRg4SeDRIHg8MDxlngfTtU%2B7%2FNTf22HfPxCkNXdTz0MEeSrAwPVc1gFKP52Fi3RYUbZyr4rfSAWlxDtoFyb5Q1k3IJqQIrikfRQCzvIGqGznIGwY5MAlLZZUL23zq%2F9RX64%2FAqy26CZ5hVU%2F7SoaCv6AtEwUTIQtT9CmEsJUavbHwY58fX2%2BjcO3nGY964AgUFIBC7nCL8V6w3yMsi4h6FwLKTo3%2F1h7oJALYokEc6LTdaXLzqUO3XqfEmteSZaWQT11QZC6M9IJOME1ZlV8sYICDyYLeD1YP2FiU9cl2zEdt%2BZ5dNUMMywQ7pmnqRWCHSY%2F8JDZeq3GNV4aYZzGR8yx6DhY%2BRgCpZW2IpHwfi2soDq7dkyTdb8tXh58fHzz2KbSUh%2FZdPseQJXmd2OWZVTFBrIpCAvLRonkv3HzFUw1YHWwQY6pgHcxj%2FTSq5i65I8FOKxr8xNAI3PhByscv1ujA7COsgrvVXpL4tvnM7wM8ba45ZIRYZGEZYBZc5BTyYUYSDW%2FsSdvhBlQxhggi65I%2FQAdnntL96Euj%2Fn6I%2B4gKsqIkeVC%2BWv5eig6gWB7mqPDHy%2FJhIw56QdahRF3P3nsgW3mNvn7wfzvT1swPsIPgs3NIGDi4i2prCoBrJAn7axJJrpWMQyYuvz6JGx&X-Amz-Signature=ede5e094aa1f211981e22cd70d090f291b4de9b8c68d0865d982ac112e6e9264&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKI4SYG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDc15Iqvv44MKEjK6Z3QGhWnU4fPiE5N68BiDg5DoDNAIhAJKyKxLmN582XBg3TiKpin32FFJHmCUu5kwa3n0RMhaMKv8DCFoQABoMNjM3NDIzMTgzODA1IgwYdUSuvsEJ%2BX2vTt8q3AM3tIur6oFlxktgRtx2N8wzPQ5NLM%2FqzLCVa60K6QnSA0Uf5LRfp7jEAPgDWR6eSWMYNAaVFnCha9a%2FO2tHlnZqnYcueMuv3%2BTLZiqCWZ6MCtMaP1lkjHbIgXhzy7rnQQFLAWHb%2Bctzgzj5qKNv0cnEbeofSLw1%2FpBK5x8R93XAQNjNkBFNqy2ylbv6IM1wTPYbe84qXwSUekPCt2V9Vby2dkMORz5xYH280AVVwN2stp324pPvISSiF%2BNlns4MvnjLet3IfIpEwitV5G9tunI5O0F3skBbUxZX1dI5rBEeOKPMd7atNW%2BBFj91MVFBQINaXrAfA4R6%2B7gIvbh6u03pRSIzxCRr7Y8CHPNLvxAhELGOxqj4ftvg9CxO78P28X6d%2FW%2BhcoBmmSnWmblhDC2rWzdLsdYxaoo0TYBVNh%2Fjmu5FwxaaT%2FWs%2BcTVtd%2F2tldT%2FlvAcLBsr27ofaVqMOdmsw%2B96KMeT2wbyPEF0nby4zrpg3Ha32c5VB8RM9unS5Jyw5AcuBQs992z%2Fr2iEq7qfRMyJSl1acjKPIKOP1AGZBPNZfnBUX9XMZRTFTBO3rQkDFTuwvn0fT3LEZA1gmyrEYZ2R1WvJ1mf4Ua3Y3DVZYxNbBtZ3M61om5BqTDXgdbBBjqkAflVWmqH2YbSv3TJw%2FCyD%2FoZVwSq7huDIh%2B02UFl3k0rYRjshqZ1Q3NCCh%2F7IcVN50r02Ugi80D2QzsCKSuIjOg7g2HrOAMxk3wSGSy2dBdkjvNjFCAomVzkOgZE9b%2FtXG9tkP5ts3vg7Iz0hZN5CjHuv5Z3lhfNV6%2Bl%2Bn4lPJU1RRqb%2FR6oLLEztCeTia7Qt4GETgciUG5F4wXHsBzhkksz9Fr7&X-Amz-Signature=1260e7d710bcbbc9fe9955dfb719f499183735d70ea6cedc561663fdfcb911a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
