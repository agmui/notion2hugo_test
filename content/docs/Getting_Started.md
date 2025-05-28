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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRULMO4X%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXfokavRvh9o6SjNXvAb%2BgP94q2QD9a5M5Y1e5rlEOQIgAb2vX0V%2FwOPx3KV85qVhBEqAGJvWIjgk1m3OyCAnD5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB7ApiT3McIfLtqc2CrcAwDEkxCd0GWW4dzDag3EFZTAMzqjBFq%2Fy8LCE1Q1jFKWrZDK3kH%2F1Wf9Or6IodMHaqjiY4NqwEjyhyLbzMhT2WrqSEVP3QZxCHf37ujQK03cr8s6E6iU6I6l2SoY74peB9djitEnxyLsEVnTfqQZZJgxU496TkWfhXzFWte2Hn%2FKVjPyKrToNVK%2BT3UFDw%2FHiMTgrg%2Bwei16yvjmyLWnukRbay8Fkzj1pj8hwnFFCip7e8qvAHszuPHb4dAjKE%2F7nFz%2BvAf%2BlT%2B%2Fk9KbL3cW57B4tCT%2BnIzHe1SBZoCiJX6D7Qb%2BEzpf92q24lXueBoQGaxc5kajUa3INk8MmEURBOScgDXWmliQBsn9iXIMkjeRJf6MqM4RZcvTc2F6fRVaZIkoAF3cdIwzJlY0dI%2BejuaUwgwphCgZBxgzRJjLs0Peid3nldxvtDeawvVkeZAEFBlKc0bg8SrR%2FSvK3BeHQp4YMo5UZ0VIwipJT7aedfoV%2BP0cR0gcxZkBHHkX1eXA19QZXbNIZVSXcWT%2BZ72QaUCQWWhcXxNFs%2BCh0Dl1xAaJK6e3ksB%2FeV5UbGhtzlOd9ObVgu3%2Bn%2F9RHnPtT1UJkWQp%2Fz9afd5jyg3HXtMFF7MzIWA1%2Fi4dyQzlp7pfMOuX2sEGOqUBWnWbh0qw068FxpptPqphZ3hulTfe6lJpP3SniqvLhothFLm7r2QdKhG0GUtIYC5RWHJYsBklRCXAZsI8HyP%2Fr0UQ4ytPySEFfnILhPuWJFj0KYzLkfnHg9lCRx0QDoT9B8HGDS0u00AzT2QNOVGyOEZt2y3BhCBPufHO52nyjGdZr%2FvyPyhJ1Hlr3xI15Lsl91Lg2cxw5Z0VSabQ5gZHpydpvZpp&X-Amz-Signature=ece9a8f94dbf8c2ad9274cd55abb72ccab88c7b015cad55196628461a7bd6a51&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRULMO4X%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXfokavRvh9o6SjNXvAb%2BgP94q2QD9a5M5Y1e5rlEOQIgAb2vX0V%2FwOPx3KV85qVhBEqAGJvWIjgk1m3OyCAnD5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB7ApiT3McIfLtqc2CrcAwDEkxCd0GWW4dzDag3EFZTAMzqjBFq%2Fy8LCE1Q1jFKWrZDK3kH%2F1Wf9Or6IodMHaqjiY4NqwEjyhyLbzMhT2WrqSEVP3QZxCHf37ujQK03cr8s6E6iU6I6l2SoY74peB9djitEnxyLsEVnTfqQZZJgxU496TkWfhXzFWte2Hn%2FKVjPyKrToNVK%2BT3UFDw%2FHiMTgrg%2Bwei16yvjmyLWnukRbay8Fkzj1pj8hwnFFCip7e8qvAHszuPHb4dAjKE%2F7nFz%2BvAf%2BlT%2B%2Fk9KbL3cW57B4tCT%2BnIzHe1SBZoCiJX6D7Qb%2BEzpf92q24lXueBoQGaxc5kajUa3INk8MmEURBOScgDXWmliQBsn9iXIMkjeRJf6MqM4RZcvTc2F6fRVaZIkoAF3cdIwzJlY0dI%2BejuaUwgwphCgZBxgzRJjLs0Peid3nldxvtDeawvVkeZAEFBlKc0bg8SrR%2FSvK3BeHQp4YMo5UZ0VIwipJT7aedfoV%2BP0cR0gcxZkBHHkX1eXA19QZXbNIZVSXcWT%2BZ72QaUCQWWhcXxNFs%2BCh0Dl1xAaJK6e3ksB%2FeV5UbGhtzlOd9ObVgu3%2Bn%2F9RHnPtT1UJkWQp%2Fz9afd5jyg3HXtMFF7MzIWA1%2Fi4dyQzlp7pfMOuX2sEGOqUBWnWbh0qw068FxpptPqphZ3hulTfe6lJpP3SniqvLhothFLm7r2QdKhG0GUtIYC5RWHJYsBklRCXAZsI8HyP%2Fr0UQ4ytPySEFfnILhPuWJFj0KYzLkfnHg9lCRx0QDoT9B8HGDS0u00AzT2QNOVGyOEZt2y3BhCBPufHO52nyjGdZr%2FvyPyhJ1Hlr3xI15Lsl91Lg2cxw5Z0VSabQ5gZHpydpvZpp&X-Amz-Signature=37db2609d799ede2e621391975071f8a2edd8511ccc8057831bd1d9721ba7b04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRULMO4X%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXfokavRvh9o6SjNXvAb%2BgP94q2QD9a5M5Y1e5rlEOQIgAb2vX0V%2FwOPx3KV85qVhBEqAGJvWIjgk1m3OyCAnD5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB7ApiT3McIfLtqc2CrcAwDEkxCd0GWW4dzDag3EFZTAMzqjBFq%2Fy8LCE1Q1jFKWrZDK3kH%2F1Wf9Or6IodMHaqjiY4NqwEjyhyLbzMhT2WrqSEVP3QZxCHf37ujQK03cr8s6E6iU6I6l2SoY74peB9djitEnxyLsEVnTfqQZZJgxU496TkWfhXzFWte2Hn%2FKVjPyKrToNVK%2BT3UFDw%2FHiMTgrg%2Bwei16yvjmyLWnukRbay8Fkzj1pj8hwnFFCip7e8qvAHszuPHb4dAjKE%2F7nFz%2BvAf%2BlT%2B%2Fk9KbL3cW57B4tCT%2BnIzHe1SBZoCiJX6D7Qb%2BEzpf92q24lXueBoQGaxc5kajUa3INk8MmEURBOScgDXWmliQBsn9iXIMkjeRJf6MqM4RZcvTc2F6fRVaZIkoAF3cdIwzJlY0dI%2BejuaUwgwphCgZBxgzRJjLs0Peid3nldxvtDeawvVkeZAEFBlKc0bg8SrR%2FSvK3BeHQp4YMo5UZ0VIwipJT7aedfoV%2BP0cR0gcxZkBHHkX1eXA19QZXbNIZVSXcWT%2BZ72QaUCQWWhcXxNFs%2BCh0Dl1xAaJK6e3ksB%2FeV5UbGhtzlOd9ObVgu3%2Bn%2F9RHnPtT1UJkWQp%2Fz9afd5jyg3HXtMFF7MzIWA1%2Fi4dyQzlp7pfMOuX2sEGOqUBWnWbh0qw068FxpptPqphZ3hulTfe6lJpP3SniqvLhothFLm7r2QdKhG0GUtIYC5RWHJYsBklRCXAZsI8HyP%2Fr0UQ4ytPySEFfnILhPuWJFj0KYzLkfnHg9lCRx0QDoT9B8HGDS0u00AzT2QNOVGyOEZt2y3BhCBPufHO52nyjGdZr%2FvyPyhJ1Hlr3xI15Lsl91Lg2cxw5Z0VSabQ5gZHpydpvZpp&X-Amz-Signature=8ecb990f9a79e28558bace4eaebb5383c12586d03a2fe6ba6de15de603890a79&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6FZ7AJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BisY7O%2FsfOZQQzKo43QiNF4u%2FZNM1IX3ugezdA%2Fl6lAiEA%2BYw8DkUKBI6HvviLRH%2Fr2lIzZw%2BlloBV9LT4eP6A5kIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEL9FReu%2BNhOJXR6oyrcAywyqhndyTq79z8jLUwqxL0gwoJpIsWfUG422Jc9g9EfdqtiElHsxZaZDY0GLInMPj%2B5Ms%2BNWZxo6GQ5MpRB5CQIAGaNdUYwQwFrvW6Rp39mh%2FFVY9xMs%2FWyD5GaPgDofe3igsUZKzjNcO3qawWJ9%2FYKhdTSqfcBWS52sxMvfjURQbAA4TYNXy50I3TDqihbJSNAAoj2Qk%2BzskK%2BP%2BiKNF78t1SHXLz20HjPWzzsU3m9QFqGtcv3WGx5wHhqHKZSrEjr8ATlXyIvbVr%2BQZqUk9QR63Pqgn0JPG%2BDLyLrjAfod2%2BYTif5Uufdb%2B%2FMvdBcYicRXEXgqztuxtJsQyHMB7mH4qqQoV9FCCC%2BF1cZdxfm85zfjXHWHN5Ogve4W8xOncPvNMBEwLdvHWWfwzl%2F%2F6E4wVbGId%2Fd50cPqs3sX4rWfADvH1NcCyXpJ7E8VmtMpIXXB26T9VVWsrfHUIkSJbL%2Fo2U%2F2wv1o5Knv2zJWrjIexqvNCgY%2Bz8gKHEGO31KhPkH%2BfXHoViMRXCxAoLvdMXu2W1BYZeCjs2Ml34UgpND6rm1MXZ5NYYWh6%2FTL%2FiLj5kKOnpX12WOQiIizWE89bZgxrkludUl0fnFoq4AC4isdh6cteQIVysIJHTbMJuY2sEGOqUBRAgd7oPMYluRugb9fkuVoBfiFYlVxY18KfqxPfn%2BKaYbM1pIm0C1PRDeewvOOO8zOLkfQNKnN27SXcw5rodWf8SBCR%2BG88GhmvgREqHSPPCGHvQQf6awPRP9WCd%2BPNfZ34ban%2BQMDuJiPboLTgv5EFijjKBE0TRIfuDzEkwfQcjzLhCtSVw6K2CmrK3S%2Bp%2BCwICrg27WnCcZrNKS7yqvTAy29jzw&X-Amz-Signature=6ebe7afc8363b9144eb7c7e56c2b7fc39ca7e4d5232d040917ae633c807dc224&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQVKKM4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6BrdMqWzzVdkIwa3IU%2FbAjmqpMfHvNkizKpzEFUmczAIhAIJ8zoFOyWxZREuZecuKpLgZHMqkEMqEiAo1Bujf%2BPm2Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwpZ1ncpS3z9j68s80q3AP8YMH1Dlh8TFyrCtdrymyC95UI%2BRzsCWfIyEkszxR1t%2BQJMHRtB8488NIjsSL7ImW9wXXQUQsi1aH%2FnJTMFHjzuM02cph6U%2FYr76ZGyHR%2BVz8bdDvDcLX3t5XNdQVxz1rbOeSaWpWqSnDTiEN54raMuv4%2BIrKJgLQP1wrvz%2FXjrrxghLoEndEU6yDAxLTQ90%2BmRWLou1H2RtwJlctp5BW0yb5T%2FwqMtEy%2F64QEeoxVHXI5ddbG57Nn3U4zXtzEdcU7QjvB%2F8mc0%2BEIOpvqCpB%2Ba5S7vmJyCqu%2Fc4Fd4I5K9ZFMD%2BTgN%2BMBxaGL%2F8qm58VA3KCP40n1uz3vara%2Fi8I8dxHozBALPZRksQldfF92ieiDUQQtjeJTT6ttuJeitqluGkvapSgH%2B3TIpgTRTHnoCstDydPh0leWgWK0U4g78KznSMzxupIBi3cO1Z9Ytz4EepW6xy0kd0cIJfSRSIJNrIP7ijtAkAvsTOfLD4i9rcN1wlDuqiV%2FZUHhSrAKjioIB1Q4yx6%2BJ6i%2FPELj31muC6OtefYUsB1MJhsbRySNXxv%2BT%2Bzzegv0xLhpnEbddADCaoW9AjzykOoZHwSdbZ8BVvRc58vk6jz%2FlWAXIBL0avgiT1EbLzhwl1n3ojDVl9rBBjqkAXe9RGzR28d30QZ79b7pTRzpDQzH46WXYcb%2Bl%2FvLfMobg9CSNAHBwcXcnYvq6MDBBWwR6%2FqIqSAxaTTk%2BiSuc8vHxGi4crfGPGwW8qY3fJk6dFp5vhfWkfSTtxzvymkQkS1Z8t9UiWVqNtUuKBjWdWHGsIEYQ%2BjtVmB8y46uqFzNgXrYsEfxsSj1cgLyORFcVpws7rugEvhas1eN29rMW4d6SESJ&X-Amz-Signature=8cb97dc3531a7e24fc505bdd052513e40a9a70252fe1eba014c87099900b144e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRULMO4X%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXfokavRvh9o6SjNXvAb%2BgP94q2QD9a5M5Y1e5rlEOQIgAb2vX0V%2FwOPx3KV85qVhBEqAGJvWIjgk1m3OyCAnD5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB7ApiT3McIfLtqc2CrcAwDEkxCd0GWW4dzDag3EFZTAMzqjBFq%2Fy8LCE1Q1jFKWrZDK3kH%2F1Wf9Or6IodMHaqjiY4NqwEjyhyLbzMhT2WrqSEVP3QZxCHf37ujQK03cr8s6E6iU6I6l2SoY74peB9djitEnxyLsEVnTfqQZZJgxU496TkWfhXzFWte2Hn%2FKVjPyKrToNVK%2BT3UFDw%2FHiMTgrg%2Bwei16yvjmyLWnukRbay8Fkzj1pj8hwnFFCip7e8qvAHszuPHb4dAjKE%2F7nFz%2BvAf%2BlT%2B%2Fk9KbL3cW57B4tCT%2BnIzHe1SBZoCiJX6D7Qb%2BEzpf92q24lXueBoQGaxc5kajUa3INk8MmEURBOScgDXWmliQBsn9iXIMkjeRJf6MqM4RZcvTc2F6fRVaZIkoAF3cdIwzJlY0dI%2BejuaUwgwphCgZBxgzRJjLs0Peid3nldxvtDeawvVkeZAEFBlKc0bg8SrR%2FSvK3BeHQp4YMo5UZ0VIwipJT7aedfoV%2BP0cR0gcxZkBHHkX1eXA19QZXbNIZVSXcWT%2BZ72QaUCQWWhcXxNFs%2BCh0Dl1xAaJK6e3ksB%2FeV5UbGhtzlOd9ObVgu3%2Bn%2F9RHnPtT1UJkWQp%2Fz9afd5jyg3HXtMFF7MzIWA1%2Fi4dyQzlp7pfMOuX2sEGOqUBWnWbh0qw068FxpptPqphZ3hulTfe6lJpP3SniqvLhothFLm7r2QdKhG0GUtIYC5RWHJYsBklRCXAZsI8HyP%2Fr0UQ4ytPySEFfnILhPuWJFj0KYzLkfnHg9lCRx0QDoT9B8HGDS0u00AzT2QNOVGyOEZt2y3BhCBPufHO52nyjGdZr%2FvyPyhJ1Hlr3xI15Lsl91Lg2cxw5Z0VSabQ5gZHpydpvZpp&X-Amz-Signature=04011d22c40deb25ac2dba6c49991f21c2659571b64286da8c4e6341008626f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
