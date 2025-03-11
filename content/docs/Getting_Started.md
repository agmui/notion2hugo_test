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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3U6W6R%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYlNkVMiTyg6VozySI4WUM2E6FGGXhwv3CP5DDs6VJ7wIhAIG%2BbQtI2VqUqwK8KVxjjzqfV31UfeAKYyfRrkyfFakGKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcTGwfl2pe9qjZtD0q3AP0vDUesVnPcw%2BOztXnbdLZg%2Byq9O1w8rUdDVtMjAKDNoVZSszmWZG45GiYVYG%2BVeaGcK1wUHNjVFp5tvbUl74dQdXb3Rn2cDtgyHDEDvcqTWiXd46Yzhjfgzdq%2FOOqcUsuzsPGm%2FfsIaAFh8zmPtPRSa7LGQqIuvlzVIKPTVd8PmckIg5Mu7JXyYcblelc5esIEgZVHEVW%2FSYcb14zJp0xus4HdQ8cJb2OvFBnJjz12Jb5LZvbdTYQ8%2BpUQEenLRD8BiYmGYJGtY7J4OV0GKm18UKzZ8dDHhGvx21iYeNpqd4ALfaEOeiGThOF66YAPG8xxr0xckJuRj3U1G37EY6EiXQQhteXH1nH5bNM7qwha1RxkvHK%2FijESCckdRk9jwTUX5HIM4chKAm1qNQKBqwrTc1aSYLJ79JP0z1gqZIN8hLtWMhXMZHHMv9qHxFu4wE3jQZOju23yuJphSEQdn%2FDSmyXyLxHfnYFoVKqqrnRXme8Y3YVp5LRVPNUHa5KROWnNkYD2EXf6LGsDD7M9Y0jryx9AUIaz4xALDQ3xa8T07BUxpbF%2BWt%2BLsCK8fuxE1fWBQj4ge051byxm4tWvbWZaPv0MenmIGjAyF8E5%2BJx0X2OgpBxw9F168BB3jDjz76%2BBjqkAXKC6D2YJuCkBUzXTJNWkF8US65r41MF5QLSzm6nDCM1tDcaWvBV1wgLu878QsEJRQZ679xnTVZBIVJ6N4fvyKWEGJdOm7Tf65WmH%2F7vk0cFJkP3C7BAqxIj0hUN33lTgdRGWYUjQfHVGkEo8XecugVbxkLFYZGaVKULW%2FcDG3m7A0g5L0ZCMSoiXhx8XSYYqbZAYkKCsvi9%2FMUh1ygAPgj47j7V&X-Amz-Signature=d572f7bc1d1d31c3803277f140e8acc8be09c97b3bf16de622a93d0edc80d7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3U6W6R%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYlNkVMiTyg6VozySI4WUM2E6FGGXhwv3CP5DDs6VJ7wIhAIG%2BbQtI2VqUqwK8KVxjjzqfV31UfeAKYyfRrkyfFakGKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcTGwfl2pe9qjZtD0q3AP0vDUesVnPcw%2BOztXnbdLZg%2Byq9O1w8rUdDVtMjAKDNoVZSszmWZG45GiYVYG%2BVeaGcK1wUHNjVFp5tvbUl74dQdXb3Rn2cDtgyHDEDvcqTWiXd46Yzhjfgzdq%2FOOqcUsuzsPGm%2FfsIaAFh8zmPtPRSa7LGQqIuvlzVIKPTVd8PmckIg5Mu7JXyYcblelc5esIEgZVHEVW%2FSYcb14zJp0xus4HdQ8cJb2OvFBnJjz12Jb5LZvbdTYQ8%2BpUQEenLRD8BiYmGYJGtY7J4OV0GKm18UKzZ8dDHhGvx21iYeNpqd4ALfaEOeiGThOF66YAPG8xxr0xckJuRj3U1G37EY6EiXQQhteXH1nH5bNM7qwha1RxkvHK%2FijESCckdRk9jwTUX5HIM4chKAm1qNQKBqwrTc1aSYLJ79JP0z1gqZIN8hLtWMhXMZHHMv9qHxFu4wE3jQZOju23yuJphSEQdn%2FDSmyXyLxHfnYFoVKqqrnRXme8Y3YVp5LRVPNUHa5KROWnNkYD2EXf6LGsDD7M9Y0jryx9AUIaz4xALDQ3xa8T07BUxpbF%2BWt%2BLsCK8fuxE1fWBQj4ge051byxm4tWvbWZaPv0MenmIGjAyF8E5%2BJx0X2OgpBxw9F168BB3jDjz76%2BBjqkAXKC6D2YJuCkBUzXTJNWkF8US65r41MF5QLSzm6nDCM1tDcaWvBV1wgLu878QsEJRQZ679xnTVZBIVJ6N4fvyKWEGJdOm7Tf65WmH%2F7vk0cFJkP3C7BAqxIj0hUN33lTgdRGWYUjQfHVGkEo8XecugVbxkLFYZGaVKULW%2FcDG3m7A0g5L0ZCMSoiXhx8XSYYqbZAYkKCsvi9%2FMUh1ygAPgj47j7V&X-Amz-Signature=04488632efdb0f950a81b73821f304448b5290019f37f244a149c793f7d2865a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUZMIRB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGYOgSIzPPqWIj3zTLFU5UCEYQEnPRnowfaHSA1EHKkMAiAHMhRvcKRGipUVVXC6wPOFGP2MppAkiC651H3Bx8raIyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlldbpTpz3MY5VgpKtwDcGsowdj35kVj1Gj504GgxLI4Br7%2F%2Btis%2FdIh%2FpOIz3oICqN53nQSNfcnYCAft1piHcr7JoVdWB4Onz3gDa3LCcWMqGwevbCSVYh1eVPjocyv6DbLVGbLpqitpg9WxdQwqh2YYl%2BCv0D9uOLZMBb13T62RfLo1P8wIXC5MSd3rmfoVjifZ17y0uUKBnUVJkep3Tld31%2Bit2Ix%2BscNgguyS%2F%2FZgHNAS2Pc97wf8nY7hdolVFMTy5GKD%2B5TNDwIJvV02YKRFUSLK2qQM2ImyMWXHaMYtGb369l1%2B%2B5nQUStQwbQoM%2BFqVfrQnEqYTIlpGhiPEEtmOId1XEOwWrfFH%2BuGBk%2FE0StTQ8GBe2ccNFBFYbhdlQ9ORIqgRxbbvjmIH2MjlaVEeBXC8U8sMUJsuFx18EhWOtavykTYR56VveDeEGukYjijOjnWmEMHkWiDpNotWmQb1OvS1lT8DwEzkeq5RIEPI05U0OLIHyHmG0ap5UMNvIRPFUSOuBFuXAWSLjkwm1PhQ5DqU%2FTFhtxtX%2Fo5U%2BKUIvnzYaRvpEJYUpYzo6SKIPAPtfyKWEdqruIlfvFcNG8p3saoBBZQ8vvlZolw7xbkvsJ1lqM6U3gNkUUIm9zN6%2BnuiNBVoHrzW4w8tC%2BvgY6pgGUhyAiSiUbT31Fn9cjIClOcVet4XpWzZ1yY9bLzoudydQj7WOdpvfk0rE7Awyx6yH4mt0FPQFsvikJuZMfVNMP06Cha3h3JC3q6LfmehA0wy4IbYrf7wUB7TixSr09mcXGqYZ2ec54gQf6uhqPK8La2RZOzaWHMqnp5uIDL%2Bz8J1yaM904HBMFLCk%2B318W29blLtnX4EjPhR24d7AXJ5vQfINymd7j&X-Amz-Signature=39f30e3f6aa468232fa70645afa14f15c0e4ea9ce13a50da24e9aba02b19b2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UN5RLGW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB3Oee97B6NDPRSfgh3i8zBXaczMS%2BozGFYFfjgd%2BWDXAiBUTQflwinqes21Ym6Vt7I974dhQX9dXPKO4MaP7dmTQSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrA4dr%2F2DbeSEm%2F04KtwDhydHwwzqZ6zrZIZ1xKeAIBsnJd4FDSXwj86cGbhJTdk48bsdec7Ryqy6Op%2FdBB%2BfTPFf%2BC0p0wA%2B%2FdyZxJuRsdy5te3MhXlVOpFiBqi07YCqcne9ZVrfujw64ZnqOT8ncCbWy5SxTHKDl6%2BhUgLPoNoELbnhczYr6iBuTJrF9SxyLfM4EJN3IQ9NjJ4lQ0Kd4eBnqwLhJ0quNecte1j6uQM2MDSwpDtSIeABo9%2BC9wLmJXbBe3bKdjKPREkpnTmb4A8eyZAjGxDCL9g8NKL3JLenKMaBYE7kmqadaRFW%2BNPKJ%2Fp1k%2B7q4NH5yP7l15lEW5GdMD94xUhg%2BRNIcGKStFSic9V9MeU3sx1S4b6ccahOJlBNMY7m4TRYi%2BHI%2Fh8peRdc4nJa4BQD2yRAOBuJpnFo3jvu1WHZIh1YForZ2Z1ExCN8eUYcFTjlJwVjFi%2FgVKH18XmThj2cof5tWsec3eJZHakVah3vioR%2Fe2VCyrKXMX4kLqdhVdW4MhySvPkdHplrR5%2BcUDSJSwn87pAOj3wQACYc80aS%2FWmtn7cebzCdHA405RpGVKl1fLvpyCXxCa2tecF8xCNEKo731qPCBAkaPAQpz7XpnPcpxen8GmAzI1sCdr9zN0fTG0switC%2BvgY6pgHX0so8YHlGVw%2B5ZsFfyGUIPo1wc4TddfuZ7A66rkN5aYXtyT5zN31JkIu%2FymJbnOTfURcRo%2ByZ6DqO23CB%2FqHtYGXNw2Vn6IwR1JOSczF6VCind5lwJ%2BdiEZF0rbpksK%2FsXQ4%2B3KivP1sE3Dbn1nesfC4UQlSWvfaMr12WGQdT5L%2FUfN8wyBAJuOuuamLyHPm3RxdzCd%2FeIfuKK2OQ2RWDdMpyfFkH&X-Amz-Signature=c8ef22694cc0f874f3c460a9c2477fa3559de86e69e316d376d05039ccb20853&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3U6W6R%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYlNkVMiTyg6VozySI4WUM2E6FGGXhwv3CP5DDs6VJ7wIhAIG%2BbQtI2VqUqwK8KVxjjzqfV31UfeAKYyfRrkyfFakGKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcTGwfl2pe9qjZtD0q3AP0vDUesVnPcw%2BOztXnbdLZg%2Byq9O1w8rUdDVtMjAKDNoVZSszmWZG45GiYVYG%2BVeaGcK1wUHNjVFp5tvbUl74dQdXb3Rn2cDtgyHDEDvcqTWiXd46Yzhjfgzdq%2FOOqcUsuzsPGm%2FfsIaAFh8zmPtPRSa7LGQqIuvlzVIKPTVd8PmckIg5Mu7JXyYcblelc5esIEgZVHEVW%2FSYcb14zJp0xus4HdQ8cJb2OvFBnJjz12Jb5LZvbdTYQ8%2BpUQEenLRD8BiYmGYJGtY7J4OV0GKm18UKzZ8dDHhGvx21iYeNpqd4ALfaEOeiGThOF66YAPG8xxr0xckJuRj3U1G37EY6EiXQQhteXH1nH5bNM7qwha1RxkvHK%2FijESCckdRk9jwTUX5HIM4chKAm1qNQKBqwrTc1aSYLJ79JP0z1gqZIN8hLtWMhXMZHHMv9qHxFu4wE3jQZOju23yuJphSEQdn%2FDSmyXyLxHfnYFoVKqqrnRXme8Y3YVp5LRVPNUHa5KROWnNkYD2EXf6LGsDD7M9Y0jryx9AUIaz4xALDQ3xa8T07BUxpbF%2BWt%2BLsCK8fuxE1fWBQj4ge051byxm4tWvbWZaPv0MenmIGjAyF8E5%2BJx0X2OgpBxw9F168BB3jDjz76%2BBjqkAXKC6D2YJuCkBUzXTJNWkF8US65r41MF5QLSzm6nDCM1tDcaWvBV1wgLu878QsEJRQZ679xnTVZBIVJ6N4fvyKWEGJdOm7Tf65WmH%2F7vk0cFJkP3C7BAqxIj0hUN33lTgdRGWYUjQfHVGkEo8XecugVbxkLFYZGaVKULW%2FcDG3m7A0g5L0ZCMSoiXhx8XSYYqbZAYkKCsvi9%2FMUh1ygAPgj47j7V&X-Amz-Signature=9aaaf39cf389a628506047c03f4b076ec256fd7e806768db2fc068d3f8f9f0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
