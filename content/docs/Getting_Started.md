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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN43HAD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH5UTs%2FpmqRzJtaFvvh7%2FJwoJM%2BRntkxJwdwVTvQ8BgwIgBeHrIMoItyGmu%2Bsl%2F3%2Bn2xi2syriRvCF%2Byw5P7%2BLqCcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRT9%2Fu8D8QNqgbUKyrcA5DzmvdqyiLq8JktCsQDZkK8S8yYJDLAG9soQIN4yHyYOQk20kVkCRu6fOzUhRByQAWiHMgjefkc6GrXBYPj1n%2BDYL4pMuNLCdrHR3sAKEkrRVtlEs1foChiM3EjxhuWE%2FbwUmo4UROSW0LeOJ84OVgWJyDHbzveJlzsPz03L010P84sgn03rs3hSL9eSKvcHA9oCF9aUUUyHqekC8RzP%2FyBf4ck29h8oRA8MnajKJTpa3VDCclTPmXGaIwYLJZBfVOASjXPghdfyIJTpvsjDOYArhuzIzzkDuhO1vuX3dXEqisHApOQ7i4rPflHtEHD965PqpQ%2FTaoy16q2sbvNGmLX7WeYwrWoM4zGQ11PWkTG8K5ayl0yDX8KRsNNjGHIyc7I6sHColb22c%2FffhDFPaiboc9vw%2FXBB%2B8ILj24zvvAavjf3IpC57ETAgdWh%2FKKpBB%2BAfrQB50%2FRHYOmNfVFlbkKqrLZ%2BQRDwXUqoxnDpmKjC5koLhQJsYCXR53feIzUTftOGUbUhWine4a%2BGpuDyy6CaO%2FG0k%2BplngIdCbxJMtVb2FZzav6HzEWiT5xdlIH2468R0hXD4NRzLzU3UOhCr7MTmFrOV1ilmH41AOxMFz2JQt7BgkOc1tXBVdMNnPx8MGOqUBYzdLoEPcpzWGm21VecUDjugwsW13hTv9gsq7oQ%2FKC33O9APmnwGNdKfvJ2G2MXwKSe8PXdgewNHJqzQQ0Oa5ieODJYfe8aofQzrTsKHNy8pLsP67MYqQUxM44YO5nGLkwBcWyYnTuof3dcrpmLi6BwgcNkZg5r9XwdP5NjEB6344hufMSJ265LhiC8j5KUDpl85pk0CHTj6hq9XKUSOj2RetBZPv&X-Amz-Signature=86670a1a32af78059f2b89bb1b09c897ee8612fcae69866a9a3a7b788198ea3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN43HAD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH5UTs%2FpmqRzJtaFvvh7%2FJwoJM%2BRntkxJwdwVTvQ8BgwIgBeHrIMoItyGmu%2Bsl%2F3%2Bn2xi2syriRvCF%2Byw5P7%2BLqCcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRT9%2Fu8D8QNqgbUKyrcA5DzmvdqyiLq8JktCsQDZkK8S8yYJDLAG9soQIN4yHyYOQk20kVkCRu6fOzUhRByQAWiHMgjefkc6GrXBYPj1n%2BDYL4pMuNLCdrHR3sAKEkrRVtlEs1foChiM3EjxhuWE%2FbwUmo4UROSW0LeOJ84OVgWJyDHbzveJlzsPz03L010P84sgn03rs3hSL9eSKvcHA9oCF9aUUUyHqekC8RzP%2FyBf4ck29h8oRA8MnajKJTpa3VDCclTPmXGaIwYLJZBfVOASjXPghdfyIJTpvsjDOYArhuzIzzkDuhO1vuX3dXEqisHApOQ7i4rPflHtEHD965PqpQ%2FTaoy16q2sbvNGmLX7WeYwrWoM4zGQ11PWkTG8K5ayl0yDX8KRsNNjGHIyc7I6sHColb22c%2FffhDFPaiboc9vw%2FXBB%2B8ILj24zvvAavjf3IpC57ETAgdWh%2FKKpBB%2BAfrQB50%2FRHYOmNfVFlbkKqrLZ%2BQRDwXUqoxnDpmKjC5koLhQJsYCXR53feIzUTftOGUbUhWine4a%2BGpuDyy6CaO%2FG0k%2BplngIdCbxJMtVb2FZzav6HzEWiT5xdlIH2468R0hXD4NRzLzU3UOhCr7MTmFrOV1ilmH41AOxMFz2JQt7BgkOc1tXBVdMNnPx8MGOqUBYzdLoEPcpzWGm21VecUDjugwsW13hTv9gsq7oQ%2FKC33O9APmnwGNdKfvJ2G2MXwKSe8PXdgewNHJqzQQ0Oa5ieODJYfe8aofQzrTsKHNy8pLsP67MYqQUxM44YO5nGLkwBcWyYnTuof3dcrpmLi6BwgcNkZg5r9XwdP5NjEB6344hufMSJ265LhiC8j5KUDpl85pk0CHTj6hq9XKUSOj2RetBZPv&X-Amz-Signature=e7e422eb0544fb97e86cab7e015df30736871ab317571a57c885f3e8e9f1b391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN43HAD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH5UTs%2FpmqRzJtaFvvh7%2FJwoJM%2BRntkxJwdwVTvQ8BgwIgBeHrIMoItyGmu%2Bsl%2F3%2Bn2xi2syriRvCF%2Byw5P7%2BLqCcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRT9%2Fu8D8QNqgbUKyrcA5DzmvdqyiLq8JktCsQDZkK8S8yYJDLAG9soQIN4yHyYOQk20kVkCRu6fOzUhRByQAWiHMgjefkc6GrXBYPj1n%2BDYL4pMuNLCdrHR3sAKEkrRVtlEs1foChiM3EjxhuWE%2FbwUmo4UROSW0LeOJ84OVgWJyDHbzveJlzsPz03L010P84sgn03rs3hSL9eSKvcHA9oCF9aUUUyHqekC8RzP%2FyBf4ck29h8oRA8MnajKJTpa3VDCclTPmXGaIwYLJZBfVOASjXPghdfyIJTpvsjDOYArhuzIzzkDuhO1vuX3dXEqisHApOQ7i4rPflHtEHD965PqpQ%2FTaoy16q2sbvNGmLX7WeYwrWoM4zGQ11PWkTG8K5ayl0yDX8KRsNNjGHIyc7I6sHColb22c%2FffhDFPaiboc9vw%2FXBB%2B8ILj24zvvAavjf3IpC57ETAgdWh%2FKKpBB%2BAfrQB50%2FRHYOmNfVFlbkKqrLZ%2BQRDwXUqoxnDpmKjC5koLhQJsYCXR53feIzUTftOGUbUhWine4a%2BGpuDyy6CaO%2FG0k%2BplngIdCbxJMtVb2FZzav6HzEWiT5xdlIH2468R0hXD4NRzLzU3UOhCr7MTmFrOV1ilmH41AOxMFz2JQt7BgkOc1tXBVdMNnPx8MGOqUBYzdLoEPcpzWGm21VecUDjugwsW13hTv9gsq7oQ%2FKC33O9APmnwGNdKfvJ2G2MXwKSe8PXdgewNHJqzQQ0Oa5ieODJYfe8aofQzrTsKHNy8pLsP67MYqQUxM44YO5nGLkwBcWyYnTuof3dcrpmLi6BwgcNkZg5r9XwdP5NjEB6344hufMSJ265LhiC8j5KUDpl85pk0CHTj6hq9XKUSOj2RetBZPv&X-Amz-Signature=c44ae9e56d9e1c5c65ef86912c1dbbb08ffd4fcbb4f74dc13aaf5926e0965694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2GECIE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDozxtIbWnw3LebB%2BVnOCvvT38pMV2OR2PyuEDfMU93MwIgaAIOHKv76ttwZ%2BS1MY%2FMfJl%2BFlHqvkWHixFQ2%2Bh1qFYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQIwGvy%2B7QAZAq0dircAxK0GWYwaOgmhFbstVB8fpxk0koVAcJXz1fo4TqHQ6gdJT5xRnpi9BA42uXOs%2F2Rwzz6AO0ObDgnxDV4cdToYr4PVb6ZpAFL9xhwRWx4hudNTdeky8KIETq2quTBP1ltgZrz%2FynJ4%2BBGBD4DQdSVa0OdqMHsu%2FEWwW9R6zhNWJco7CkA2uLTwxpeoE1lOFjzlLDd96wBn9wHhMxJx687wthpHRE%2FiqCR24iGrWtnp3sPg1m%2FVvbvTmQ327HFSR9rmKc8lWkJvDTIUJznxjbPVtuszppyCmN845k6endTi8qFWXf24IwN3sQ5RvC0EK8vuwOf3uZaYPlKVdVRV6uwipmgg3JqfoIJI%2Fkfh1eTynQYSFZtR0jiEaB9NjsY8wNd5NDiOri2%2BXu7JsM6EO4El8QQ9l9gWthmdRXmcaYg3Bcp0r5bi4CBiQ8RQnWhlOa9xxf1H1cOxL5Q2FJN%2F7vyv%2BcKPnWy5uaVe2D2Id7Eu90K6pykqenyvR6rGaagqhpphzL0ZnjmXBJpyccw9oz3w%2BmZecyIVDSz5wmRWkWG0JY6xgSWc48pOqscSoh5n7f%2BWNFyMYI0kYt0ZPqPUcFUaulhRlHb7xZXyh6fJVg28tD5ciaIkgou9ul4AXjUMJvQx8MGOqUBIuiZz8VcpA5a%2FYL1DYFJGZX08OJdfkWKwqfjAB%2Bi7iBITYHplVkkaDPHyU7JDfbVl4d2i29qqpyOpw1v9PdjvvgNtbhEZQr4r5s18m%2FdHunoE3b4OcdjQ1iRSrYf6aRf48n12bHaL1fViv9%2Bfz9UrBxQOrzqsRDYH6nmR%2BUCHPYF0akU%2Fr0kbTJutLQjZ%2Fx5Niy3eOCfuj1Cdf0yBR1Nn%2FsfYAwa&X-Amz-Signature=b64e5baa876ae08d4b44ad26b12050c7bb58592e53aaa168fddc0ad990f8dc95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHBIB76%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7x6T3a4aKdA9EZ4oFWB7lTa2GWzGIAcn%2BQuDCpZ4a9AiAq3yBQItQRCzdcr%2Ber4uoeGo2T5fuHc62cykNXiKB29SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFn0nduRtD9tnE8iGKtwD0w6cXJ2si8kqjOq3WS0a1D1G7YgakwMFqc%2FpNcEQ4rO1hQZwZrXMgFsH5kplSIGKmlZLFnwMl1nVdtp%2BJyr1LLhN3ZTsosEXkm5PKotE98oLyabpdGJ0J89o6Y8ReJy%2FO4qBOB%2Fw%2Brv5Gg1Ss2AKxg%2Bkx2tG9QUmaAGdzJwCId3gjZ3WPjWanVDqrasmZ583BuUZS7zd1y5KgnYvUiM6PAFaclUpta4EyM4N5gmRW1XmZ7KYHZhKsGORidx2FVoCOsoftYH6lx2MIUSWGJls0nZzj3up%2BLJo3RtIFiQ4hAGoqi6t6Ck%2FlOaaOUclCSDdM%2FCxVmQa2tLShcFX0xXqRNQXrMWola%2BGDl4hUT1irSQ%2BVqn2WnRSyr7Hrf8OXoPabz8s%2BNpeOCBh0SJI2VVuyR0FYBWqgPZRJDyQqsQHULfGSVWfy3jzGxWFdU3M8YTSAJ66ZAshR1GhwMV0TYVNr%2FSkqDRrFDTOeRz7rmQSrdeTKqJUs3t0pSSz5Ec07Bq2iaQfBOkyF97yrpRtYRPq6ueD%2BRR%2BgZmp3pyRi2zB%2BuehnF8sOQlfCDfmhvV1akPYiIq%2B3Sal1s3UsCtlA1Cd%2Ffgw4FWcyOjMXU052ileqvSZwA3rGcCb0nugcVUwuc%2FHwwY6pgHMQY%2B7sEI3iSLc%2BSWD5GZVS9SCOsmvuMFVsXJ0azBBn5IKxHuiv6amQcL5jujCoj3Z%2BZdeYSvVsGNvbYRmJqJvMue7%2B63QVNQQnbrkdyV5fsfCI5QBAFzTlrTu0pLp2AZf5k%2F9UDU%2BzI4w%2Fb4ljDBqOFBeHYUa43XKj1w%2B68KDq%2F%2F3kZ%2BcYl%2FfA2%2FMEzv2vitq%2FkZ6rVwBKxxi49VoPh8VFGSXAWTZ&X-Amz-Signature=881310d9f1cf6c4795667968bf379cded148bd14267988af646b5579ac68d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN43HAD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH5UTs%2FpmqRzJtaFvvh7%2FJwoJM%2BRntkxJwdwVTvQ8BgwIgBeHrIMoItyGmu%2Bsl%2F3%2Bn2xi2syriRvCF%2Byw5P7%2BLqCcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRT9%2Fu8D8QNqgbUKyrcA5DzmvdqyiLq8JktCsQDZkK8S8yYJDLAG9soQIN4yHyYOQk20kVkCRu6fOzUhRByQAWiHMgjefkc6GrXBYPj1n%2BDYL4pMuNLCdrHR3sAKEkrRVtlEs1foChiM3EjxhuWE%2FbwUmo4UROSW0LeOJ84OVgWJyDHbzveJlzsPz03L010P84sgn03rs3hSL9eSKvcHA9oCF9aUUUyHqekC8RzP%2FyBf4ck29h8oRA8MnajKJTpa3VDCclTPmXGaIwYLJZBfVOASjXPghdfyIJTpvsjDOYArhuzIzzkDuhO1vuX3dXEqisHApOQ7i4rPflHtEHD965PqpQ%2FTaoy16q2sbvNGmLX7WeYwrWoM4zGQ11PWkTG8K5ayl0yDX8KRsNNjGHIyc7I6sHColb22c%2FffhDFPaiboc9vw%2FXBB%2B8ILj24zvvAavjf3IpC57ETAgdWh%2FKKpBB%2BAfrQB50%2FRHYOmNfVFlbkKqrLZ%2BQRDwXUqoxnDpmKjC5koLhQJsYCXR53feIzUTftOGUbUhWine4a%2BGpuDyy6CaO%2FG0k%2BplngIdCbxJMtVb2FZzav6HzEWiT5xdlIH2468R0hXD4NRzLzU3UOhCr7MTmFrOV1ilmH41AOxMFz2JQt7BgkOc1tXBVdMNnPx8MGOqUBYzdLoEPcpzWGm21VecUDjugwsW13hTv9gsq7oQ%2FKC33O9APmnwGNdKfvJ2G2MXwKSe8PXdgewNHJqzQQ0Oa5ieODJYfe8aofQzrTsKHNy8pLsP67MYqQUxM44YO5nGLkwBcWyYnTuof3dcrpmLi6BwgcNkZg5r9XwdP5NjEB6344hufMSJ265LhiC8j5KUDpl85pk0CHTj6hq9XKUSOj2RetBZPv&X-Amz-Signature=f08458591343f6671e8bc9eb2af7338bceeb7f6f55e4b824767bca771e562f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
