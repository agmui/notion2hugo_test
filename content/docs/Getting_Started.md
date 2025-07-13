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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCE3DVS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4NGy1Vy8CuvA4fgyPBEdj6bvYeBaR3gw5mMEqrJVjaAIgOrrx%2BzUgC0Q%2Bq888LeI8JcqeyedWjiEkOd3bO5q1%2FzYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDgXrxXPS5v1tFA71yrcA4jd%2Bs51alb0ib6xg2VA8zCaxHeJkCzVvahieNJzaqLjtvCA1hKXe3%2FPLWVnN9eB0ehP4Tdw%2FVBBO62YZnlDcbqL6B6l03tPacGSfr0FF660TS6xztHRJbnfCb2Mss%2BvAh5QeKXBvjb1pyohJsonfP9fCwWIMP%2FpSe7qUbsEYJHBKS%2FJ9HyW03ll92kVnq3I2mFAjd7swHf5D4%2B2wlGQ4EBHg4u2MikJi0Dkq%2Fos7W3bbMUOrRiHnl%2F4SyndLRTHPRw6foikM2fHkHaXb8UuDViBKoKWjsJjLPwokk044c0SBh05AF4z6UjVj4VoOEw9W%2F4y8qJYON3sB4yza8RD9ccPPFrdFfqrg%2B5aMUUXI12xyXMEsfJT1hbo8wDnPUI0uOK8EMK8qUcwkHhs0pkBebAIy%2Fkyy6%2F7EHG6aPYjZtG5wjh6AlWuWjehpwujPNfqwLPkwUW9pX25ZFyhFKuyzW9LlqKhXjUnhemptf7%2FyXYJKtfkrAS9ysjucbEO1QNOKsoGxuBpBEcKzeuhBiGH9qRMkclF0QpajbE4JMcm4LIEMABbfI%2FqNePzPEd7pzCI9M7V3R%2F3M8iQoiquBUdHrn42zWR38WTyqt8BZZ1P6QTfWwO8iZxzc7%2BtLdtWMOyjzcMGOqUBDvjCbHJ2q5S92AGULzKWT2sDRRtkDWq2Jp3zzAXQkh4yDcTm%2BNocwKVX3P9AUJPcV34uKOlP0uqgXeJ8B7uryl5EH22mEe0taTjP4yX9pVoWXCSLercqFe2sy18peRbuddCVfvc%2BHB6RkWLq5ZK%2FpdEbMQp5Gx3AFbiAKssag5pGZMrPXHp8sIv2gPkTS8AJwSg1MScRQxF5FPC%2Bvw4VufN7LN%2BT&X-Amz-Signature=a9d395dc926f8940007abc45da249aaac9090a2aa64940c76631b49e0dca1c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCE3DVS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4NGy1Vy8CuvA4fgyPBEdj6bvYeBaR3gw5mMEqrJVjaAIgOrrx%2BzUgC0Q%2Bq888LeI8JcqeyedWjiEkOd3bO5q1%2FzYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDgXrxXPS5v1tFA71yrcA4jd%2Bs51alb0ib6xg2VA8zCaxHeJkCzVvahieNJzaqLjtvCA1hKXe3%2FPLWVnN9eB0ehP4Tdw%2FVBBO62YZnlDcbqL6B6l03tPacGSfr0FF660TS6xztHRJbnfCb2Mss%2BvAh5QeKXBvjb1pyohJsonfP9fCwWIMP%2FpSe7qUbsEYJHBKS%2FJ9HyW03ll92kVnq3I2mFAjd7swHf5D4%2B2wlGQ4EBHg4u2MikJi0Dkq%2Fos7W3bbMUOrRiHnl%2F4SyndLRTHPRw6foikM2fHkHaXb8UuDViBKoKWjsJjLPwokk044c0SBh05AF4z6UjVj4VoOEw9W%2F4y8qJYON3sB4yza8RD9ccPPFrdFfqrg%2B5aMUUXI12xyXMEsfJT1hbo8wDnPUI0uOK8EMK8qUcwkHhs0pkBebAIy%2Fkyy6%2F7EHG6aPYjZtG5wjh6AlWuWjehpwujPNfqwLPkwUW9pX25ZFyhFKuyzW9LlqKhXjUnhemptf7%2FyXYJKtfkrAS9ysjucbEO1QNOKsoGxuBpBEcKzeuhBiGH9qRMkclF0QpajbE4JMcm4LIEMABbfI%2FqNePzPEd7pzCI9M7V3R%2F3M8iQoiquBUdHrn42zWR38WTyqt8BZZ1P6QTfWwO8iZxzc7%2BtLdtWMOyjzcMGOqUBDvjCbHJ2q5S92AGULzKWT2sDRRtkDWq2Jp3zzAXQkh4yDcTm%2BNocwKVX3P9AUJPcV34uKOlP0uqgXeJ8B7uryl5EH22mEe0taTjP4yX9pVoWXCSLercqFe2sy18peRbuddCVfvc%2BHB6RkWLq5ZK%2FpdEbMQp5Gx3AFbiAKssag5pGZMrPXHp8sIv2gPkTS8AJwSg1MScRQxF5FPC%2Bvw4VufN7LN%2BT&X-Amz-Signature=ebda01f6136197ddd87498bf1842314337122f6826ffca6f839e50afc0f46c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCE3DVS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4NGy1Vy8CuvA4fgyPBEdj6bvYeBaR3gw5mMEqrJVjaAIgOrrx%2BzUgC0Q%2Bq888LeI8JcqeyedWjiEkOd3bO5q1%2FzYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDgXrxXPS5v1tFA71yrcA4jd%2Bs51alb0ib6xg2VA8zCaxHeJkCzVvahieNJzaqLjtvCA1hKXe3%2FPLWVnN9eB0ehP4Tdw%2FVBBO62YZnlDcbqL6B6l03tPacGSfr0FF660TS6xztHRJbnfCb2Mss%2BvAh5QeKXBvjb1pyohJsonfP9fCwWIMP%2FpSe7qUbsEYJHBKS%2FJ9HyW03ll92kVnq3I2mFAjd7swHf5D4%2B2wlGQ4EBHg4u2MikJi0Dkq%2Fos7W3bbMUOrRiHnl%2F4SyndLRTHPRw6foikM2fHkHaXb8UuDViBKoKWjsJjLPwokk044c0SBh05AF4z6UjVj4VoOEw9W%2F4y8qJYON3sB4yza8RD9ccPPFrdFfqrg%2B5aMUUXI12xyXMEsfJT1hbo8wDnPUI0uOK8EMK8qUcwkHhs0pkBebAIy%2Fkyy6%2F7EHG6aPYjZtG5wjh6AlWuWjehpwujPNfqwLPkwUW9pX25ZFyhFKuyzW9LlqKhXjUnhemptf7%2FyXYJKtfkrAS9ysjucbEO1QNOKsoGxuBpBEcKzeuhBiGH9qRMkclF0QpajbE4JMcm4LIEMABbfI%2FqNePzPEd7pzCI9M7V3R%2F3M8iQoiquBUdHrn42zWR38WTyqt8BZZ1P6QTfWwO8iZxzc7%2BtLdtWMOyjzcMGOqUBDvjCbHJ2q5S92AGULzKWT2sDRRtkDWq2Jp3zzAXQkh4yDcTm%2BNocwKVX3P9AUJPcV34uKOlP0uqgXeJ8B7uryl5EH22mEe0taTjP4yX9pVoWXCSLercqFe2sy18peRbuddCVfvc%2BHB6RkWLq5ZK%2FpdEbMQp5Gx3AFbiAKssag5pGZMrPXHp8sIv2gPkTS8AJwSg1MScRQxF5FPC%2Bvw4VufN7LN%2BT&X-Amz-Signature=df330455c61f12567135f14c45fbbfc8b86b4ad63a1de4e7e84272c68a609f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTVJXD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoGnvXx8yqXPo2o5qvxwYiLdJeXMMSn1ScV7DasbyMAIhALlzGlsppsq2pfUnZo3CN08T4coe5HNTBbyeGsVxdzy9Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwHp0IMsuGFczTQR90q3AOxZMffIY88C9enwhcCQrpFQuUvI34BeehHDm%2FWTU80bF2tMbNJcUft%2BM3rv%2BMXaeqM39eKS5TeSXT1KEPSwLK%2BaARaikDhQUEuzsSVICwsqzmL8Urt8dT2p5YKprnJSlPbQerwccRk6paLeUEvGsPIdN6ImnHAtUV%2FPR9JEKX%2BGN3cLHT%2Fucru9zg6nrqT7NG5khruqt1RoW%2FkWQrxrnE9DkS65bqPv%2B3OIhFaA71fvuaQvuwwdcIhbgSe7IOwpNXB%2Fc8Z2JsGYY1NKpHdBEqEzrrawpO8xvzWvT6%2FKbkiymvmOTgTaYN9smdgDU2tJTtE1JTtzE%2FmIZBbL4a3cdVidT7Jd9k6mGPV%2FzzZOhqaD5APMaqJLZuOYsFB4t7McGQy1MHWeGsa41s5%2FfyeoUhjWAWja9a2bz6FBYPBBQtn%2BD8EaLKUi6Ep8QphYcONQLSvRcW00zK7Boj%2FXfXDjlel%2BiJsSaFu3C5R0Digk96JVW8SFtSjXZCFl7hqu06kFqc4U3Ic8O38UJWl13U22z%2FAFLDGkPqSSxcN79df%2BN4gc9Dn4zQU6K%2FiZ3koxGcO7zX%2FLwyqUZwL66hOqfB4YZUMonBcFiBPwyqzmBwkQ3NJ02K2ehGqZ6f8nKMf7DCepM3DBjqkAUPOxstp76c0fhqVdusyzDGzEC%2BcySkf%2FNkHCUXRQCpZ4EkZPFSI2bkpWDrL3RW9hzfXGHkoJuk5SQnD4KgDHYdlBRuZok0d4VX%2BpkvaURbLutZIm0uWmI0zuPqo6EVBpr12vPvhHXe%2B3JewM8KDkFsvHUZAc%2Fos8js7cmKEapsBQkIGW1BhsALcF%2BZicKxkWlLQUhrX%2FnbxWe7QImEpaDY0WqE0&X-Amz-Signature=ae96ac8625caf9a2aefa60573fc5cd58ab9b3401a7099f3768530d9cb667e5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6ZE6CZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6TvpOZVLtZFSe6cme%2BrgkD7O63ZQ9%2FoBBJYrg6VJnFQIhAOA9O9EyH%2FUsF5p1%2FeZ98vQvJHxWhsBUVJYOwJ2KvjPqKv8DCBAQABoMNjM3NDIzMTgzODA1IgyQX806Gg1y74YrV6gq3ANBLZM1OEL4yuQ5hjhcyuvhey6MPviWJSr%2BiknLa82xnidVQ7u98B%2BuFy8KSHm1UmeCz6sct8gW97sHBaLQIL%2FOfgjJCM9ANePxxJGpn5834vYccYIAMkyqTKD2vQSvJsX03mqt7FtfBSB1ON7JyQleOBTBaxUsaQjTLdMFK1jmHcCL7YnwynvPe538Ib7m%2FIGBlnedP44xc4zjX3gzVO6Smp%2FstLl9YOcw60Z998hAhMBnGU9yD0mujMpPUxl49UJyUQppur33aXgV4rXJQol7foMzuncKOjzuHsfwV%2BPpZPepAXFoFQKYys05pY78%2B8pohC7lCAzOiFwe%2FtRTgtxqP%2Ba9QFmwMqOR98TBq%2F%2Fm3jZw0MP7yD3nVOdF3H%2BsYzTlVqLw82sowkSFN%2BkBl%2BXrln83msQX87J4eqHiQdI1g4I%2FWnykWSGQmQ1vnV0aIJ7IRpl%2FKxsahpVe3fzTK28cVJpNo430Ry2FZRBAYEV4ojNwBkFigY3TCZfN2jPWKa939c%2BocgxRWdeZQ1n88qnhYo7jlOGz7TlEwWIDVO9gvyPy5EdNAl21JiqK3KH8VvCh52ajz7iKFQvC437zHskavcD8Am8%2BfS1h%2Bbd5dWHIsWc1nePkVNGg%2FkXTfTDXpM3DBjqkAel22yKI%2BzhGQHOjLssQNNlzbLGQv6xOB5BUZRk%2B2WXjiZNEfAopIhWI91%2FtbFWO1%2FmrJn8rxeLvklrvMY28cjbZFn3JuYBAVVJ7vEP%2Bc5xuXbKCmbHZ0VxkO4BvqluTriph%2BCRGRenf6m4jFCcUVW%2BecrcXRTpfJLrvmnzMOcWe83UF3eMSp0Ebkwak%2FO3vgdGFEM1Xy52CRV2mIUYoS4kOayv7&X-Amz-Signature=1bf002d3c44bea95461680a012432c1b9ca11c94bab37745c99d82f918770aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCE3DVS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4NGy1Vy8CuvA4fgyPBEdj6bvYeBaR3gw5mMEqrJVjaAIgOrrx%2BzUgC0Q%2Bq888LeI8JcqeyedWjiEkOd3bO5q1%2FzYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDgXrxXPS5v1tFA71yrcA4jd%2Bs51alb0ib6xg2VA8zCaxHeJkCzVvahieNJzaqLjtvCA1hKXe3%2FPLWVnN9eB0ehP4Tdw%2FVBBO62YZnlDcbqL6B6l03tPacGSfr0FF660TS6xztHRJbnfCb2Mss%2BvAh5QeKXBvjb1pyohJsonfP9fCwWIMP%2FpSe7qUbsEYJHBKS%2FJ9HyW03ll92kVnq3I2mFAjd7swHf5D4%2B2wlGQ4EBHg4u2MikJi0Dkq%2Fos7W3bbMUOrRiHnl%2F4SyndLRTHPRw6foikM2fHkHaXb8UuDViBKoKWjsJjLPwokk044c0SBh05AF4z6UjVj4VoOEw9W%2F4y8qJYON3sB4yza8RD9ccPPFrdFfqrg%2B5aMUUXI12xyXMEsfJT1hbo8wDnPUI0uOK8EMK8qUcwkHhs0pkBebAIy%2Fkyy6%2F7EHG6aPYjZtG5wjh6AlWuWjehpwujPNfqwLPkwUW9pX25ZFyhFKuyzW9LlqKhXjUnhemptf7%2FyXYJKtfkrAS9ysjucbEO1QNOKsoGxuBpBEcKzeuhBiGH9qRMkclF0QpajbE4JMcm4LIEMABbfI%2FqNePzPEd7pzCI9M7V3R%2F3M8iQoiquBUdHrn42zWR38WTyqt8BZZ1P6QTfWwO8iZxzc7%2BtLdtWMOyjzcMGOqUBDvjCbHJ2q5S92AGULzKWT2sDRRtkDWq2Jp3zzAXQkh4yDcTm%2BNocwKVX3P9AUJPcV34uKOlP0uqgXeJ8B7uryl5EH22mEe0taTjP4yX9pVoWXCSLercqFe2sy18peRbuddCVfvc%2BHB6RkWLq5ZK%2FpdEbMQp5Gx3AFbiAKssag5pGZMrPXHp8sIv2gPkTS8AJwSg1MScRQxF5FPC%2Bvw4VufN7LN%2BT&X-Amz-Signature=6c03fbd0e7bf09dd3f026c2fe1f80fc96e94c464b92c44e3bbc84fa89726c765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
