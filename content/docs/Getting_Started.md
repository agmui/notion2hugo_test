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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN32JLJD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnJFEwlHHFSKE5HGsTYxWMhg6rITriKEsqgPpC4P3tjAiA0cjcJjZ%2BGa5u8nL9LLp4tA07jmJsJobuNqYx4WXBzMSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNWZ%2Fe8B%2Fvp2umxjKtwDrPSGKffb%2FQPlFfqDDk3%2B%2FjaXncXPXEYcmQo0Tbu4GgAzoBEPAIZksr5juezf6aM11j5HBWshIduWLmwXQqgEVsVZJxmxqvtucY69d%2BtIj%2FxvU107fPYj3AmuqjV94LdnFU3PzQ089Eg%2FKkJx5mn7L1KB%2Fa8qaNx3YU8BW6mVd5wG%2FaDAUW8iFH2LwMPiLUj21JvipoRn%2FC8LLjTgMiJg0Y6jgJFp%2Fbrsz6SOwiBDbViqOP3iKHksO0GUm%2Fv4l%2B3vTysUVXsNecghn%2FVoC52sgPlki70ZRWXXbIKLqm4W8MLEpDWPi8LQy%2B%2F4GGw8CTecFUu7C8pnyNKbkyAlA1hEu7p8uFgmmNyBA5hiI6HyJl9%2BrxvJPQPBQ6EdPpeHGmOjCExv5EXopIeq51JZwljC6gdSpndNlR0FloboGpx1tGnPYB6yzt%2Bho2gvwwsbeHv2v5siLLw0DWSuFw5v%2BNMYbWfY1pytGgp1QenxK2tOol2IpLvMdRZXgKxeG%2F4z5qlTZemTC%2Fzr7rDwMJKe3COzuYYY%2B9I1JV4Fy2AicpPh%2F0tlYi5am3SBUPYG55ZswcgS8Tw4Hxxel242dZLIfQQLtf%2FtH0YdNvcVSF6gMyVo6e6VmOOuTicUzFvYohEwybOiwgY6pgGrQIbtGQWeKr%2BRJ8w2HA8b1UXAOc7t%2BIxllXNNmM8TJK5haS15ik0d6MWP1vKBDzZPTN5jof0HDWgJzE%2BNxdmOPw7gzdy7%2BzfeK%2F9D0d9BPTl%2BkbzXWE6IMj2mUyQdLcWdXDqWmLFzs%2BkjBuBMr72iRlC1iR9aFON7EoB8Q8oMVVip3Jy7ZiWd%2FseOWbG%2B4gfIVl%2FjUCKP0gb%2F1RGUrKlxaZqFDnsQ&X-Amz-Signature=b2295eb35f4698c0350145e504fdfbcf60a8a31421ccf34fb086b7145029c301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN32JLJD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnJFEwlHHFSKE5HGsTYxWMhg6rITriKEsqgPpC4P3tjAiA0cjcJjZ%2BGa5u8nL9LLp4tA07jmJsJobuNqYx4WXBzMSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNWZ%2Fe8B%2Fvp2umxjKtwDrPSGKffb%2FQPlFfqDDk3%2B%2FjaXncXPXEYcmQo0Tbu4GgAzoBEPAIZksr5juezf6aM11j5HBWshIduWLmwXQqgEVsVZJxmxqvtucY69d%2BtIj%2FxvU107fPYj3AmuqjV94LdnFU3PzQ089Eg%2FKkJx5mn7L1KB%2Fa8qaNx3YU8BW6mVd5wG%2FaDAUW8iFH2LwMPiLUj21JvipoRn%2FC8LLjTgMiJg0Y6jgJFp%2Fbrsz6SOwiBDbViqOP3iKHksO0GUm%2Fv4l%2B3vTysUVXsNecghn%2FVoC52sgPlki70ZRWXXbIKLqm4W8MLEpDWPi8LQy%2B%2F4GGw8CTecFUu7C8pnyNKbkyAlA1hEu7p8uFgmmNyBA5hiI6HyJl9%2BrxvJPQPBQ6EdPpeHGmOjCExv5EXopIeq51JZwljC6gdSpndNlR0FloboGpx1tGnPYB6yzt%2Bho2gvwwsbeHv2v5siLLw0DWSuFw5v%2BNMYbWfY1pytGgp1QenxK2tOol2IpLvMdRZXgKxeG%2F4z5qlTZemTC%2Fzr7rDwMJKe3COzuYYY%2B9I1JV4Fy2AicpPh%2F0tlYi5am3SBUPYG55ZswcgS8Tw4Hxxel242dZLIfQQLtf%2FtH0YdNvcVSF6gMyVo6e6VmOOuTicUzFvYohEwybOiwgY6pgGrQIbtGQWeKr%2BRJ8w2HA8b1UXAOc7t%2BIxllXNNmM8TJK5haS15ik0d6MWP1vKBDzZPTN5jof0HDWgJzE%2BNxdmOPw7gzdy7%2BzfeK%2F9D0d9BPTl%2BkbzXWE6IMj2mUyQdLcWdXDqWmLFzs%2BkjBuBMr72iRlC1iR9aFON7EoB8Q8oMVVip3Jy7ZiWd%2FseOWbG%2B4gfIVl%2FjUCKP0gb%2F1RGUrKlxaZqFDnsQ&X-Amz-Signature=71617ff2cbc061a1966e3098ee7b60aebc6ff7263892719668a1d2a04cd1acd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN32JLJD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnJFEwlHHFSKE5HGsTYxWMhg6rITriKEsqgPpC4P3tjAiA0cjcJjZ%2BGa5u8nL9LLp4tA07jmJsJobuNqYx4WXBzMSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNWZ%2Fe8B%2Fvp2umxjKtwDrPSGKffb%2FQPlFfqDDk3%2B%2FjaXncXPXEYcmQo0Tbu4GgAzoBEPAIZksr5juezf6aM11j5HBWshIduWLmwXQqgEVsVZJxmxqvtucY69d%2BtIj%2FxvU107fPYj3AmuqjV94LdnFU3PzQ089Eg%2FKkJx5mn7L1KB%2Fa8qaNx3YU8BW6mVd5wG%2FaDAUW8iFH2LwMPiLUj21JvipoRn%2FC8LLjTgMiJg0Y6jgJFp%2Fbrsz6SOwiBDbViqOP3iKHksO0GUm%2Fv4l%2B3vTysUVXsNecghn%2FVoC52sgPlki70ZRWXXbIKLqm4W8MLEpDWPi8LQy%2B%2F4GGw8CTecFUu7C8pnyNKbkyAlA1hEu7p8uFgmmNyBA5hiI6HyJl9%2BrxvJPQPBQ6EdPpeHGmOjCExv5EXopIeq51JZwljC6gdSpndNlR0FloboGpx1tGnPYB6yzt%2Bho2gvwwsbeHv2v5siLLw0DWSuFw5v%2BNMYbWfY1pytGgp1QenxK2tOol2IpLvMdRZXgKxeG%2F4z5qlTZemTC%2Fzr7rDwMJKe3COzuYYY%2B9I1JV4Fy2AicpPh%2F0tlYi5am3SBUPYG55ZswcgS8Tw4Hxxel242dZLIfQQLtf%2FtH0YdNvcVSF6gMyVo6e6VmOOuTicUzFvYohEwybOiwgY6pgGrQIbtGQWeKr%2BRJ8w2HA8b1UXAOc7t%2BIxllXNNmM8TJK5haS15ik0d6MWP1vKBDzZPTN5jof0HDWgJzE%2BNxdmOPw7gzdy7%2BzfeK%2F9D0d9BPTl%2BkbzXWE6IMj2mUyQdLcWdXDqWmLFzs%2BkjBuBMr72iRlC1iR9aFON7EoB8Q8oMVVip3Jy7ZiWd%2FseOWbG%2B4gfIVl%2FjUCKP0gb%2F1RGUrKlxaZqFDnsQ&X-Amz-Signature=b7879f78b0fabd278466b165250046bfc54b39f13d4af62e0aadf69e0ecda6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3FL7FA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUxY0HVXXC1BzpPD%2FuaFuHtGuOzSBz%2Ba648XNB15MZ%2FAiEAmvx5NLHRj1TJSk6USWquaIufXD9dr3jIBmgvDf2Y%2BvYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxsm%2F%2F00BbZBnVTYCrcAzWz95kFu6ajK0eEvFIM7U9h1eumnHbhso99lCIuCKVxSJjA5gi7CIrUyxPr95A8rs2ahBgABUdxGtu7HGGxAXa8y%2FaKrOdgGKA27nLcpOU%2FYcOUNmect1ADZQnSv603JUhnjGbYx%2BGQVK%2FGsQXI5WiVMKGMWXEBlRmz2uIRccYSnx%2BpLmvz7%2BU2Xzq6BWWaodoN9iiaRLz0w0NfYHDLyz%2B%2FP9Ylmc69k8%2FHivQjIo%2FUfftuFUae3cUTGyCaR3UEEm6ijf3j4HZjNk0dwp0yK%2BWhoSh0BsgQmValhc7TU51Z9suLMMUbGoraoxyXiYz2YRHkOv6yjmGHEM7Nfx722yIiGaoZ0yClspqcSqtH7bC5hiLPFQ9CxCdbUWppYmkao8%2B4xxsHXlcDUaJkyjQWKHqXslQUKQgvG4nOcmivsky%2FP8G8iw7RbF7c7mykGEMrq9aPwIVdHIIcPwWFsud5gH85Fie4MnQB1TdGiQ0UXzRTqcysUFM7KE9erXbTba0MNk3M1SxCwHtIQ8KQf05DCLymWMRJl0hpWxhuvCW%2BMxDoZZwALMCTShECMn1%2Fi3%2FOEt1Q6Y%2F6HPEfmVXAxZ8nlrKW59VfcEoLpn2SNcbdk8KcmVCf9CO8VHST9RanMK%2BzosIGOqUBZAXZkP15rvee7QxVCKYVCK4jCXv0zhWd52aOdcVNPKx3FknZ0kMLwWXXqpq6NjSGgmqOe9yG0kVPcaFqSusghbEau%2Fun9U5BfE1hDEI3KeaLsZzNEr%2BrAchoczi0%2FiDzbvkG7yyUl6MzwrLcJV5yaOBq9Mh75M65BzT7Zz88gOQmibkP4JwH1OSxV4uloMkmeGxyIodMML3F8ZonW0m5csDfdQxM&X-Amz-Signature=9c6ab21f762ae12d285027c62bf369a49df0e6bdc3a20fabf9c014c0f139073e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGRDVGY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2RtNQe1JIriBLeQSEyq0FM7dkVC3swrDNQ5eiI6tG4AiEAv4QTXwxi69o4zUwJk2zJyO6XBwm9knzI2XKsn6XsZtcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETiHDB%2BOwIeP0WjPCrcA9tzRdG%2FgScKzZl%2F44g8IAy3FPTLoekRl408k2Ou8mbuA3Fz2%2Bwvgri41XXQsXVYF%2BcA4vlQRWRVPuAN%2F588qPwSzGKijZ3B60bKucuaVB8mJYrrbu66fjLbcq2NfxRSilhnZ2PciWcwF1lIH8ip917CrxMEpXAWdZ5lxTa0Wu6MYxCnWBs7Y6Z%2BtDfnTzQaqroedN%2FhsAKryIpCXDVnVXX%2FnSN3vQqIN9FEqekDt0cql%2BmW68Kam7fXy3Ooo830aP0xQAKAa02Krl5hf0faKmiyntKr0gk72NE7lfMa9dWoL7ln1MvbMzvHB858YNRL4gHNjanA8RSdyVMaTJkxH%2BbhBrXU%2F2UeWY2HNuFdSJgzh5M91gnOribFjVHXABR3WyYyO6PpIVK38hO8VhOuYJJpx%2B1j8%2BsrBsklyPySLaHesbBIT36OvWqD7BxZ7KtE8apgfpzBI22NZYQ1xRoI%2B2UR2Dk7hRuk%2Fq6M5lEKCNz6REGeviLu2tq1Ca%2Fo1Xdg7Ge%2BWBkoArD9MhsxRLpYV3s4Yx6aqx3X%2FNc9ACnqyEL41cmQZn7r2WzTYzXKbwRhMXLUA5%2FovIwYlFpilL7jbQJC9OZ%2Fqbd3bAkuE5k0F28B%2FbK6LSmcrVOx7qxqMNGzosIGOqUB2D7tWMI7q8P4RuY58uZEuJpyiR8t5AwaZYdNE0i%2F5%2FYq5QvrnAlfJOQCWqIMah2gwpLuQqdUMdemCZsmYAKJghhr7QcMZB4yURQt6gAzOTGSsXL5CIu8hxrwfv%2FjUhrPbM6%2F5HL4vcMczPm69HK63qoGvzpyW1%2BavfBvKkKttdxQ7bpYHEPUnULykxT4yTDX22Vbwb72dIoRMCXrm7259Jmcmo1c&X-Amz-Signature=a224926af1522bb6c46c3c8463e7a757222c6b4ca008ee12ed7d6a902153bb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN32JLJD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnJFEwlHHFSKE5HGsTYxWMhg6rITriKEsqgPpC4P3tjAiA0cjcJjZ%2BGa5u8nL9LLp4tA07jmJsJobuNqYx4WXBzMSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNWZ%2Fe8B%2Fvp2umxjKtwDrPSGKffb%2FQPlFfqDDk3%2B%2FjaXncXPXEYcmQo0Tbu4GgAzoBEPAIZksr5juezf6aM11j5HBWshIduWLmwXQqgEVsVZJxmxqvtucY69d%2BtIj%2FxvU107fPYj3AmuqjV94LdnFU3PzQ089Eg%2FKkJx5mn7L1KB%2Fa8qaNx3YU8BW6mVd5wG%2FaDAUW8iFH2LwMPiLUj21JvipoRn%2FC8LLjTgMiJg0Y6jgJFp%2Fbrsz6SOwiBDbViqOP3iKHksO0GUm%2Fv4l%2B3vTysUVXsNecghn%2FVoC52sgPlki70ZRWXXbIKLqm4W8MLEpDWPi8LQy%2B%2F4GGw8CTecFUu7C8pnyNKbkyAlA1hEu7p8uFgmmNyBA5hiI6HyJl9%2BrxvJPQPBQ6EdPpeHGmOjCExv5EXopIeq51JZwljC6gdSpndNlR0FloboGpx1tGnPYB6yzt%2Bho2gvwwsbeHv2v5siLLw0DWSuFw5v%2BNMYbWfY1pytGgp1QenxK2tOol2IpLvMdRZXgKxeG%2F4z5qlTZemTC%2Fzr7rDwMJKe3COzuYYY%2B9I1JV4Fy2AicpPh%2F0tlYi5am3SBUPYG55ZswcgS8Tw4Hxxel242dZLIfQQLtf%2FtH0YdNvcVSF6gMyVo6e6VmOOuTicUzFvYohEwybOiwgY6pgGrQIbtGQWeKr%2BRJ8w2HA8b1UXAOc7t%2BIxllXNNmM8TJK5haS15ik0d6MWP1vKBDzZPTN5jof0HDWgJzE%2BNxdmOPw7gzdy7%2BzfeK%2F9D0d9BPTl%2BkbzXWE6IMj2mUyQdLcWdXDqWmLFzs%2BkjBuBMr72iRlC1iR9aFON7EoB8Q8oMVVip3Jy7ZiWd%2FseOWbG%2B4gfIVl%2FjUCKP0gb%2F1RGUrKlxaZqFDnsQ&X-Amz-Signature=09244704dfc1ce4b266165ab2bf734b0b3983f74b3dc08be7591141cae1399c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
