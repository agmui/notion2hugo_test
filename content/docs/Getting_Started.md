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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DULRZI5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTnJMlTwKOXk7sFQZJzatbKJzWJ86psuiVUVxZJHpHFgIhAPDO3bMmK2PyDI31%2FNtYcJA2WVCmqpVOjbeG92ZpV0xMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw41QHLImK572Wgm0Iq3AN%2BQMadoCvclSbtuih5w1fNGdnzZx6m4AW9P5HMa5Ok1U%2Bvyx%2F%2BOh%2BOTMXag5CKHgXJ1cYTTYgi%2FYYujoNm0BKbXfR277PiXXDfVAndHY2cLokStM%2BIkT7daZ%2Boj2Vj7DU0ZavGdBTQo0XDQzQX%2FhjKaxjMIboMSyMT0cy8fLyAGGnICkmz61ofgeVBPDzO13vlVjVzMl2RVGo6Aw59drXnrQAvYgsGae1%2BR9MqXZ0eChwDnvKXdSn5wKAQ48vZCLROWGbxA6B1QF9A6lg%2BJrjxtcrkBxB062jchV%2FI27ARsNrJOfc7zPHIZS1PS6F8s714PIm7xHTjuOXbM6BevarObCm5Brg73S6bPU6Pwur2hueA4AVeTK%2BZTqARlVbxfDHvRH1k1x0CGuHY7uqwjDAG9BseNcGP2CD9sRA4RU42evi4vsiIvbtO5dfSi4M%2BTbGRgRFQCKRaoPdPyqB8%2F7X5Xwk7AxzIuAn4KLk7EbiHCqtR%2BLPdBDtpXZDaIzcY3RvMs4B5luijYNTcuYzGVL3lN0zQ4daYm%2BScfhsAP0fhUXGEuRhAzBuXmNfQI8FL11oWExiilZgN5CGZbEdA1m3Y%2BZvN8Ha5F6AVInzeDEeDvQCklDo8bkPGpX13KTCsr5jDBjqkAYvyc4pGCoaemHyRdTtM%2Fhm7cssL8R1YW7XiJWSYhIjAasIr1SHtJinP6CY2zegOPuGQaFSLC8ijfgsas7OODyyxS3ytCIZ5NUb89fTS82e0YXYJjK4hySy4IXOxmse7RVS3UqDeatglA3oSP%2F4m5fQ6GQiHJckNi6LoUiG1EX1K35SBpWHNd1%2BVhGia%2Fvhg2VXceLvHg4Q9LcV4qGR0tubb1LXo&X-Amz-Signature=600c1a3c8768cb5dde99f9fedfd4a1c949bcd8d1fa5d7c88d2b3fd6aef388c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DULRZI5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTnJMlTwKOXk7sFQZJzatbKJzWJ86psuiVUVxZJHpHFgIhAPDO3bMmK2PyDI31%2FNtYcJA2WVCmqpVOjbeG92ZpV0xMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw41QHLImK572Wgm0Iq3AN%2BQMadoCvclSbtuih5w1fNGdnzZx6m4AW9P5HMa5Ok1U%2Bvyx%2F%2BOh%2BOTMXag5CKHgXJ1cYTTYgi%2FYYujoNm0BKbXfR277PiXXDfVAndHY2cLokStM%2BIkT7daZ%2Boj2Vj7DU0ZavGdBTQo0XDQzQX%2FhjKaxjMIboMSyMT0cy8fLyAGGnICkmz61ofgeVBPDzO13vlVjVzMl2RVGo6Aw59drXnrQAvYgsGae1%2BR9MqXZ0eChwDnvKXdSn5wKAQ48vZCLROWGbxA6B1QF9A6lg%2BJrjxtcrkBxB062jchV%2FI27ARsNrJOfc7zPHIZS1PS6F8s714PIm7xHTjuOXbM6BevarObCm5Brg73S6bPU6Pwur2hueA4AVeTK%2BZTqARlVbxfDHvRH1k1x0CGuHY7uqwjDAG9BseNcGP2CD9sRA4RU42evi4vsiIvbtO5dfSi4M%2BTbGRgRFQCKRaoPdPyqB8%2F7X5Xwk7AxzIuAn4KLk7EbiHCqtR%2BLPdBDtpXZDaIzcY3RvMs4B5luijYNTcuYzGVL3lN0zQ4daYm%2BScfhsAP0fhUXGEuRhAzBuXmNfQI8FL11oWExiilZgN5CGZbEdA1m3Y%2BZvN8Ha5F6AVInzeDEeDvQCklDo8bkPGpX13KTCsr5jDBjqkAYvyc4pGCoaemHyRdTtM%2Fhm7cssL8R1YW7XiJWSYhIjAasIr1SHtJinP6CY2zegOPuGQaFSLC8ijfgsas7OODyyxS3ytCIZ5NUb89fTS82e0YXYJjK4hySy4IXOxmse7RVS3UqDeatglA3oSP%2F4m5fQ6GQiHJckNi6LoUiG1EX1K35SBpWHNd1%2BVhGia%2Fvhg2VXceLvHg4Q9LcV4qGR0tubb1LXo&X-Amz-Signature=19823fd248eb1d84be8feedd72b219de52787d4c8bdfe85c188870e671f8a959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DULRZI5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTnJMlTwKOXk7sFQZJzatbKJzWJ86psuiVUVxZJHpHFgIhAPDO3bMmK2PyDI31%2FNtYcJA2WVCmqpVOjbeG92ZpV0xMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw41QHLImK572Wgm0Iq3AN%2BQMadoCvclSbtuih5w1fNGdnzZx6m4AW9P5HMa5Ok1U%2Bvyx%2F%2BOh%2BOTMXag5CKHgXJ1cYTTYgi%2FYYujoNm0BKbXfR277PiXXDfVAndHY2cLokStM%2BIkT7daZ%2Boj2Vj7DU0ZavGdBTQo0XDQzQX%2FhjKaxjMIboMSyMT0cy8fLyAGGnICkmz61ofgeVBPDzO13vlVjVzMl2RVGo6Aw59drXnrQAvYgsGae1%2BR9MqXZ0eChwDnvKXdSn5wKAQ48vZCLROWGbxA6B1QF9A6lg%2BJrjxtcrkBxB062jchV%2FI27ARsNrJOfc7zPHIZS1PS6F8s714PIm7xHTjuOXbM6BevarObCm5Brg73S6bPU6Pwur2hueA4AVeTK%2BZTqARlVbxfDHvRH1k1x0CGuHY7uqwjDAG9BseNcGP2CD9sRA4RU42evi4vsiIvbtO5dfSi4M%2BTbGRgRFQCKRaoPdPyqB8%2F7X5Xwk7AxzIuAn4KLk7EbiHCqtR%2BLPdBDtpXZDaIzcY3RvMs4B5luijYNTcuYzGVL3lN0zQ4daYm%2BScfhsAP0fhUXGEuRhAzBuXmNfQI8FL11oWExiilZgN5CGZbEdA1m3Y%2BZvN8Ha5F6AVInzeDEeDvQCklDo8bkPGpX13KTCsr5jDBjqkAYvyc4pGCoaemHyRdTtM%2Fhm7cssL8R1YW7XiJWSYhIjAasIr1SHtJinP6CY2zegOPuGQaFSLC8ijfgsas7OODyyxS3ytCIZ5NUb89fTS82e0YXYJjK4hySy4IXOxmse7RVS3UqDeatglA3oSP%2F4m5fQ6GQiHJckNi6LoUiG1EX1K35SBpWHNd1%2BVhGia%2Fvhg2VXceLvHg4Q9LcV4qGR0tubb1LXo&X-Amz-Signature=5a610b7cf86c1100f9de10dccdd338679eace47603b81c9b31c8d604105ef25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2QQVQZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFQSW6ONbMvns2tlQKWJgY7lWRF4L2d38O56DSpJYnn%2FAiEAw3leJMey5YISG6mL9lkDOz3AHcL8UhyC56LefsoRnxUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuZn3duIF4H6RYJNircA8VDzryy8Pb33ERvfavhuK0MoOdDucrQchRBAL0ogDKSmBUdk0u5zvf858TPwCx%2FGztCVtM3oasc%2B0pbuWFNleoajKNSxOXKVNqga2oCLJRFnRoSheB7D6DNhuqN2mhFJBYZuMQFj5LoCbvUPcWlMF6U3z3hF48auTJrXJQkA9fxD%2F%2BQfgbjr5O5iu5mpTRlE3TyJdVKaGppT%2FPnzuRinMlX7XV6CIv14pdPTZ7yl2h36ipfMzUPu1W3YJfIGXDI0TTfLBR6E8G8NqXEWtRRryQ2DY0EvRSEkLtw%2BrALhtmeYcSw0vCocxa205QlTNIXMejpN6Muam2uAhdYwn3HMvcVvrC7%2FHAJWvk7EflU5URtLzlToJhzDo4IRU3ioeijvNewIoyl0%2BV7uhRVJry1zVuUiXZcdnzQCnxz6%2BiDzHRHaKGe9DyYOK9sl5h3lj4pgSsdsyvwiTlLGdylg7UK6nUblDOaDnQvTkgOfPeWUR8aWxcelD0m2rJzeLnTosgivO2qUVxdRhbHqGlLAj9JLJ08%2FSjh4nwwFKsk67kquPJ4nr0nhrcqrOrx6IbKAw6oxoEtDw14rJYDVWKq7F0MTWVYA0QDAlLBzFGmsQvsPyF8XU41zKwns4MqkaCuMLCvmMMGOqUB8lQwvOlEecyu8QFq0Plx9bqQAkiRdxRfHA52zwrDpD7dA7GUF4nND098H915ezbIzO1NUHP51LgMBTilHWcHOUYGMJzbWKBkAyuQBiCofA01sD0%2BhPgzbhBxEd3eU%2BByULMFHZclTLNUpFARk4wn9ydPr55sUrMrSJa2Ay7BaZ5Il6avEDCbM2x2IDo8J1NHpNSG9qEGpITt2DYoRSlRTjGOe1Bz&X-Amz-Signature=5fb6ec4b684b0c336b6d7fb9f508ef2e2a6507731a5295e07e4f366852e3a1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URXDO32%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAXJTFKQlQ0oNihdcI9WvPPWA%2BBAHEQVyDIsMkfol5sXAiBqA8zxi%2FXy%2FT8DMhCUCZTeDQni4Xj4QK6hUk7J%2FT7owCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfpf5j3PEoWGZX2rKtwDEb4CSmY22URO0%2FU7li%2FqSAG0iaq5qHbGZ7HMF4%2B%2FOKoQD7hg64Vgf56EWti5MDftyxRyd%2F8XzP0TLr%2FaR62F%2F2iEvvHz8a5jjzof3%2BdaInlenk9Td32pHj%2BSR4wmJuzFEI2dbR7PEDR5THUP8%2FcP4LLadNXAXVQ6HXBFvtG6rooMJiM3Y2a87kJwXLJFwFZkAermDQYIhy8FSfRuIWCj2GtV9Zc7UNBex29SxKTZuIDMrknU1cSc3Z5OphmYgD2vVcBSvXkJtgBVvT4dO2Qnfmo%2FNqvm%2F8pQlmS3xST5PJa6ScP9AULZjIbgcM34iaTWM3WM2w0J5orWJnjn%2BS5wnBldXJ9Iq38NMkWf2HCYjDPHlvyIg11WwMeo%2Bim3Jt6u9GANi2gMRdWDisP%2FhNyN10YWZ6lQacibBUGqpgd4FnAhMQxKnSiEQfvODs8ZmoMutnOgfBIWbn%2B2vznfpmmeYKbL5UkgYeeNT5ADoRHovpj5QF2zd2Q642LM%2BYOnada9kNdK1CSamFRh2G8brZ8rOiSjHhKWy9z%2FFhfCaxJtaS2nuI4AeuXowhn202HqD8KfjM%2FMPHvmkleZfz2xGyAty309%2FhtLhh3YLpRp7eE7Fo3N1frCK5cnM7hAwnIwj6%2BYwwY6pgE2h720iLItv5Ysas0tm%2F24uhCYiZ%2FucwW1mR%2F80hS6LLuqrAMhGvt3Bho6BlhXgN5hZbO0KIc8VS40LgrrsAZmnbAKJHnAgXZWsxmd%2FO%2BlbrQKXnOZfXhdUmj0sdKQ3cPgZkzl0H8WKX%2BOm%2Be69aw5x20u3RWwg9Tf85HKhULq0EC86GrRiFP9RaP9C5TwHmUl9PTk817%2B4hLxYmXK4%2BzzIRkAthhg&X-Amz-Signature=22674a729d30b92b5045e87986bec5188a4e59220eb6bc4194baf8e8e67471d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DULRZI5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTnJMlTwKOXk7sFQZJzatbKJzWJ86psuiVUVxZJHpHFgIhAPDO3bMmK2PyDI31%2FNtYcJA2WVCmqpVOjbeG92ZpV0xMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw41QHLImK572Wgm0Iq3AN%2BQMadoCvclSbtuih5w1fNGdnzZx6m4AW9P5HMa5Ok1U%2Bvyx%2F%2BOh%2BOTMXag5CKHgXJ1cYTTYgi%2FYYujoNm0BKbXfR277PiXXDfVAndHY2cLokStM%2BIkT7daZ%2Boj2Vj7DU0ZavGdBTQo0XDQzQX%2FhjKaxjMIboMSyMT0cy8fLyAGGnICkmz61ofgeVBPDzO13vlVjVzMl2RVGo6Aw59drXnrQAvYgsGae1%2BR9MqXZ0eChwDnvKXdSn5wKAQ48vZCLROWGbxA6B1QF9A6lg%2BJrjxtcrkBxB062jchV%2FI27ARsNrJOfc7zPHIZS1PS6F8s714PIm7xHTjuOXbM6BevarObCm5Brg73S6bPU6Pwur2hueA4AVeTK%2BZTqARlVbxfDHvRH1k1x0CGuHY7uqwjDAG9BseNcGP2CD9sRA4RU42evi4vsiIvbtO5dfSi4M%2BTbGRgRFQCKRaoPdPyqB8%2F7X5Xwk7AxzIuAn4KLk7EbiHCqtR%2BLPdBDtpXZDaIzcY3RvMs4B5luijYNTcuYzGVL3lN0zQ4daYm%2BScfhsAP0fhUXGEuRhAzBuXmNfQI8FL11oWExiilZgN5CGZbEdA1m3Y%2BZvN8Ha5F6AVInzeDEeDvQCklDo8bkPGpX13KTCsr5jDBjqkAYvyc4pGCoaemHyRdTtM%2Fhm7cssL8R1YW7XiJWSYhIjAasIr1SHtJinP6CY2zegOPuGQaFSLC8ijfgsas7OODyyxS3ytCIZ5NUb89fTS82e0YXYJjK4hySy4IXOxmse7RVS3UqDeatglA3oSP%2F4m5fQ6GQiHJckNi6LoUiG1EX1K35SBpWHNd1%2BVhGia%2Fvhg2VXceLvHg4Q9LcV4qGR0tubb1LXo&X-Amz-Signature=e1bd019b5342d455edd78becf6c0509f95088bf18405e3701ad1b76628d5d433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
