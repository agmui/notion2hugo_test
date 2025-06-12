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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X72RZIM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICP005UAsGnlhjjR%2BEf2uzodxfZGsxHxPJjZxqPs2%2FdUAiEA0kBmfdWkGNA8knYoAxvbh3QE5Q9g0yNXzRGzw0I57mAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc6GKu5y0RGhJ2pdCrcAwv7j0CvghmvwMpXgJdmjS1ePdR1VE6bgLlydnoeFBzJp7LWJqwv2RsoQz7%2FddQxq5NkUq8pz7ij7YJfOG3Rpq8ywtO1wzDWA99moHDzh1%2Bup1O9U8unaQ9AxkszEdBywTeZ8jjU0me%2FAMddDnjoNwGmkUAjD9hiKpOa23sO8l8zMp%2FvWsVxO%2BBZyRnEo7QBwYgAo9PJPcpir5SQlvrk%2BGrhGg0Sh%2FQWyJ1dRJ8BM3o4gwsKvpG1haipi5GuMwxWhePNpOaIk3iQoVnKjaR6RpVMelwWw8gtBFLkfRjYTefeUtzuHQ%2F6Ys9rt3Ez1PC83gVJaDkdFfBCQvNOTLs21dclnYPb7KzDg0IqZNd87L6%2FyZryZnQgbkntzK%2FFq8mhZ3GVzxD5eV5KNBb3DiUdkNf14uPmaYfP4NzfvVuP%2Fxal2SajSpPE7Xuhr1BdpHodZYm2Wg0fsaT4UIkvd0xKqyS2d%2BKAeSL1bmRHa8dBzRrmy%2BN%2BNZsHumy%2Bf%2FWB1cdV5Uw2HAW7LxKcDzDj0RN09VevegVhOlT6ER3FPVtugg%2B%2FFA63ZEfzTAVlH0tPOljKs7lPR2%2F%2FUSnekzgp9ctsSnP2cwzuVUA4AGMEFRtVKsxbu4ehtgodycHH04IqML2RrMIGOqUBTgLpmaSdhzO3VF1nXn73a18UVHX0SR%2F3CbC67D4aLFADs5SPmp98TJQu4WlLyhp6RYxivA9cOkNlbTDVE2WW%2BlQ1pP2Wq5gqXSKMQM18BOdMdSD6KRTPi2VliZSfJ9IhVochQlFGlAopEqKmKSwlRU1ehKRP8EuybbC1M%2BrreKEqCaTiqsa30APxsYp%2B5hMFu0WlhJ8Cin4mhv0htYWcLyXq42XY&X-Amz-Signature=60e9da711054c20d817035c6b547b08860498b4d2792db8e36d8cd4fd608a1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X72RZIM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICP005UAsGnlhjjR%2BEf2uzodxfZGsxHxPJjZxqPs2%2FdUAiEA0kBmfdWkGNA8knYoAxvbh3QE5Q9g0yNXzRGzw0I57mAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc6GKu5y0RGhJ2pdCrcAwv7j0CvghmvwMpXgJdmjS1ePdR1VE6bgLlydnoeFBzJp7LWJqwv2RsoQz7%2FddQxq5NkUq8pz7ij7YJfOG3Rpq8ywtO1wzDWA99moHDzh1%2Bup1O9U8unaQ9AxkszEdBywTeZ8jjU0me%2FAMddDnjoNwGmkUAjD9hiKpOa23sO8l8zMp%2FvWsVxO%2BBZyRnEo7QBwYgAo9PJPcpir5SQlvrk%2BGrhGg0Sh%2FQWyJ1dRJ8BM3o4gwsKvpG1haipi5GuMwxWhePNpOaIk3iQoVnKjaR6RpVMelwWw8gtBFLkfRjYTefeUtzuHQ%2F6Ys9rt3Ez1PC83gVJaDkdFfBCQvNOTLs21dclnYPb7KzDg0IqZNd87L6%2FyZryZnQgbkntzK%2FFq8mhZ3GVzxD5eV5KNBb3DiUdkNf14uPmaYfP4NzfvVuP%2Fxal2SajSpPE7Xuhr1BdpHodZYm2Wg0fsaT4UIkvd0xKqyS2d%2BKAeSL1bmRHa8dBzRrmy%2BN%2BNZsHumy%2Bf%2FWB1cdV5Uw2HAW7LxKcDzDj0RN09VevegVhOlT6ER3FPVtugg%2B%2FFA63ZEfzTAVlH0tPOljKs7lPR2%2F%2FUSnekzgp9ctsSnP2cwzuVUA4AGMEFRtVKsxbu4ehtgodycHH04IqML2RrMIGOqUBTgLpmaSdhzO3VF1nXn73a18UVHX0SR%2F3CbC67D4aLFADs5SPmp98TJQu4WlLyhp6RYxivA9cOkNlbTDVE2WW%2BlQ1pP2Wq5gqXSKMQM18BOdMdSD6KRTPi2VliZSfJ9IhVochQlFGlAopEqKmKSwlRU1ehKRP8EuybbC1M%2BrreKEqCaTiqsa30APxsYp%2B5hMFu0WlhJ8Cin4mhv0htYWcLyXq42XY&X-Amz-Signature=0dd2090dfcb2fcaa24224a474b57d3ef96fbacec6f2e6fe42c0d880e58acb949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X72RZIM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICP005UAsGnlhjjR%2BEf2uzodxfZGsxHxPJjZxqPs2%2FdUAiEA0kBmfdWkGNA8knYoAxvbh3QE5Q9g0yNXzRGzw0I57mAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc6GKu5y0RGhJ2pdCrcAwv7j0CvghmvwMpXgJdmjS1ePdR1VE6bgLlydnoeFBzJp7LWJqwv2RsoQz7%2FddQxq5NkUq8pz7ij7YJfOG3Rpq8ywtO1wzDWA99moHDzh1%2Bup1O9U8unaQ9AxkszEdBywTeZ8jjU0me%2FAMddDnjoNwGmkUAjD9hiKpOa23sO8l8zMp%2FvWsVxO%2BBZyRnEo7QBwYgAo9PJPcpir5SQlvrk%2BGrhGg0Sh%2FQWyJ1dRJ8BM3o4gwsKvpG1haipi5GuMwxWhePNpOaIk3iQoVnKjaR6RpVMelwWw8gtBFLkfRjYTefeUtzuHQ%2F6Ys9rt3Ez1PC83gVJaDkdFfBCQvNOTLs21dclnYPb7KzDg0IqZNd87L6%2FyZryZnQgbkntzK%2FFq8mhZ3GVzxD5eV5KNBb3DiUdkNf14uPmaYfP4NzfvVuP%2Fxal2SajSpPE7Xuhr1BdpHodZYm2Wg0fsaT4UIkvd0xKqyS2d%2BKAeSL1bmRHa8dBzRrmy%2BN%2BNZsHumy%2Bf%2FWB1cdV5Uw2HAW7LxKcDzDj0RN09VevegVhOlT6ER3FPVtugg%2B%2FFA63ZEfzTAVlH0tPOljKs7lPR2%2F%2FUSnekzgp9ctsSnP2cwzuVUA4AGMEFRtVKsxbu4ehtgodycHH04IqML2RrMIGOqUBTgLpmaSdhzO3VF1nXn73a18UVHX0SR%2F3CbC67D4aLFADs5SPmp98TJQu4WlLyhp6RYxivA9cOkNlbTDVE2WW%2BlQ1pP2Wq5gqXSKMQM18BOdMdSD6KRTPi2VliZSfJ9IhVochQlFGlAopEqKmKSwlRU1ehKRP8EuybbC1M%2BrreKEqCaTiqsa30APxsYp%2B5hMFu0WlhJ8Cin4mhv0htYWcLyXq42XY&X-Amz-Signature=171c821847d4e84f09bc7d034736a56ab868408296aef709a30de4c57e86a033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJ75ZW2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBUO5lsbKi8q4bz3jK%2FXiQ1CdDLPhamv8cnCZenPlG5OAiEAoMgQRxu4CU8CBrMgpDz7wknZwNNhadxUxbUozcUv0SQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHiIPzVImb9h8dMhSrcAzTpmYOqpv3j3BmsGSZK8pAQVRVkeJ1zsIVGXdi1Rd%2ByE%2FZPEUKwoe8z2FIc19RkCjcEJkikKJ2HmlZQUK1PEU5T5GG9SvZMdVeDjYbdIgYH7RqW2EcmZ%2BOCIFx3HzBK3BEOEg0xnmyODVzU38iZn69XTZU7kb%2BN8ikiMX%2BQxHFyly26M1O4OAFh%2FToolVTSsUVKCmaQPQIj6DMk10tcAZ3KBoLcWprK7TlJgOZzNVOO%2FrzNi%2Bf%2FP3f8ypeC9sqWSpQuJ7%2FWWf67Rkx1Gvcmc3p1dU96zx2lprfc1CYzN5hYMTekFdTt4OnKRJkAZGqo3RwPNPNq0D1zhH4MCdL518mVkxfGwhiS%2FTaqT99d3y1YwMd09EE53DV6UgiJ%2BzXnSOdZjl8g516HMX4l1m2e3HzNLsc15EFRvRoEdfmtvqsML6wbIYKG5BA8FbYMztxBgLPOBkZqpvmod00R9kr%2FDtMJRmlo8iTGz0VrXd55R5%2Fpo%2BmZxb7KtaoxelFhw%2FBBHPN1utKIdVHRxeChNdA8jIeJV9Z5mt9ObjvQ2t%2FPoEQlgn9ZB2R7Vd1b24mKpKnDJ6IT98q7W2UunGCddvZj4nu8hzyF0QOttHQqUDT%2FKkRvxnr26WM3jtsf6kvlMICQrMIGOqUBC%2FCjszpRlZtjTjTPQP8ykrdtpQOhtFoQrHWxslgGmRZAjadnPwMCJ9euxjm6I4%2FH9n2CX5QTEoMjJFZaMqbx7ryudP9sTwJytAIjYpzmlurN1f%2BpP86q5Gk%2FAGqueeyHQiU9ndK4doocfKO0iaEh5LR4YFnsxW5yp48wxEOJQUCkc5yyL6BmgSg%2FN79Nl8%2BTt7VT0fT7EriSynssNof5sc9cLWaU&X-Amz-Signature=9fa7f5dd790cc9b7f7134ccc388e761647a0af910360c7f267edb2262e589816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUGLRM2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGF4HotYZqd3KMmrUJIYjY%2BBZnUKWcqkjDShVrzQm8xQAiAeNV%2BhyqO%2BT0LmMkIlh8JC3NWF8%2FN5MtR0Qor5FFMR3yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRhL9GwjBHPEgqrGpKtwDYDLyoQloiwbCZL%2FrAX3E8mVcnSIZeM5h%2Fie%2BuiMZLRoP0UtrEB0PVinKKZbmq2TKUfVux6VoewjLPAlVG3aqhuhhDtZfAagJJP3O6EECGrMhXQFu%2BmgUxrMwqUs6uIYdESYNI%2B0cdKZ83WO7V6t2WKQY0Uaa0BqxggW6sPjTneEiaEQdne6MCTffCAtxyUqv98Y57OUWiN2g3cp6%2B5MYE8WRZ3srjkLhpS1lWMGNJeMqsehHePpF26sDJTOT%2FoOge%2FtzBFd5T2i6N%2BYJml%2BvdS5I%2F9DeUSS9jRdtPQpkdrrcUm9dOZ0xw168%2FgooanASK2B%2FmSw3uvCtzfmMdQtqz%2F3BfxedFBcZJd2FuAVc%2BjzU17HJsOtAf8p160LzoazLzngTHJrpHDZpAFrSRbcZE1pmQ5I281yoYgaP6BDdfrS6LxnXH1ie8wJrWDkzqsfpKEJwnx6dEy3mX1WSqWK7KILzXRlTODTojENcoxe1bYMpBj%2BXbyshXpUtixQoZf1QoVB8ZTsDHmvVQ5fnG0SH4nPlNWxv7hNqt1jGCwU2dD44QMeM6nJSYG58jen6bAv8T3t7mNNaFap2vG3c95pxjQG6Q7Zrq1nGsG2zK6tMIzuiZOXn65buj6cr%2FHsw7JCswgY6pgFYt2%2FGw93sr%2FJevrWuxHv8mQeR4wH9YyNHTn%2F35PaT5EoaBEZjsJBlDECW7ILVwZN0qoED%2FE8yBw2%2BoItUxcxFCkuzCQaF43C37%2B%2F4sCWS4ycwlhrlS28S3iO3pbku5oVIqwVKzGy59NjS3Sq6fvBzDK1tE13RMQ2Qej1sDAwFkwETN%2B9z23PypHlHg8YGINY8KTOdCxv7W0PG3SEZnMVp9wEOA52P&X-Amz-Signature=82b9317e2820c8726875115939ecfcbc6b2433329154f469b52ee3cd9ea25506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X72RZIM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICP005UAsGnlhjjR%2BEf2uzodxfZGsxHxPJjZxqPs2%2FdUAiEA0kBmfdWkGNA8knYoAxvbh3QE5Q9g0yNXzRGzw0I57mAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc6GKu5y0RGhJ2pdCrcAwv7j0CvghmvwMpXgJdmjS1ePdR1VE6bgLlydnoeFBzJp7LWJqwv2RsoQz7%2FddQxq5NkUq8pz7ij7YJfOG3Rpq8ywtO1wzDWA99moHDzh1%2Bup1O9U8unaQ9AxkszEdBywTeZ8jjU0me%2FAMddDnjoNwGmkUAjD9hiKpOa23sO8l8zMp%2FvWsVxO%2BBZyRnEo7QBwYgAo9PJPcpir5SQlvrk%2BGrhGg0Sh%2FQWyJ1dRJ8BM3o4gwsKvpG1haipi5GuMwxWhePNpOaIk3iQoVnKjaR6RpVMelwWw8gtBFLkfRjYTefeUtzuHQ%2F6Ys9rt3Ez1PC83gVJaDkdFfBCQvNOTLs21dclnYPb7KzDg0IqZNd87L6%2FyZryZnQgbkntzK%2FFq8mhZ3GVzxD5eV5KNBb3DiUdkNf14uPmaYfP4NzfvVuP%2Fxal2SajSpPE7Xuhr1BdpHodZYm2Wg0fsaT4UIkvd0xKqyS2d%2BKAeSL1bmRHa8dBzRrmy%2BN%2BNZsHumy%2Bf%2FWB1cdV5Uw2HAW7LxKcDzDj0RN09VevegVhOlT6ER3FPVtugg%2B%2FFA63ZEfzTAVlH0tPOljKs7lPR2%2F%2FUSnekzgp9ctsSnP2cwzuVUA4AGMEFRtVKsxbu4ehtgodycHH04IqML2RrMIGOqUBTgLpmaSdhzO3VF1nXn73a18UVHX0SR%2F3CbC67D4aLFADs5SPmp98TJQu4WlLyhp6RYxivA9cOkNlbTDVE2WW%2BlQ1pP2Wq5gqXSKMQM18BOdMdSD6KRTPi2VliZSfJ9IhVochQlFGlAopEqKmKSwlRU1ehKRP8EuybbC1M%2BrreKEqCaTiqsa30APxsYp%2B5hMFu0WlhJ8Cin4mhv0htYWcLyXq42XY&X-Amz-Signature=2a71621590aa2dd72af08422a8fe17d8b0b0a1a49c4bebfcd858a83d91fcb696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
