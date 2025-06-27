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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EQUYCG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIANit%2FnAC959TAtp3NjWXQimHROQiYB2lGumQ0tZ0N0JAiACCn9B1076p5H0Q7o%2FeE3hcO2RXDbF5Jq6NlSQp5g6hyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMQVCqWM7Lm%2FqLB7pmKtwDCaSNRSwr%2BwTsbaeu8BPsk5wn9Q3lh910gaw8wNlnGvVJNaXQQARWlcRO2z7cURJUqg2rqirYZDZIoCFlpd3%2Brm1mQDHzMW2xs0wFSHNw9A1EE5tZXZ%2FEuWmfXK3ySPgnxM0iNQOvFCnEuyQMqrzZ%2BHFWF9RPBBYvqwUr5yJRet33tAa6dPqxSqjtuP%2B%2F9jEdN62Anyx%2FJiCTdjkfhpu5zo3xxgMmNVI3%2Bpv6dZCHhIbx62lklcgtqS2ExqpegkS0Yxs9vDMiw5L9PkajtUzOfzvmrSE1Sjq%2BufmTU7o6Irn7mqph9fZa6rHHD6SGbbmENklWXW9COZmazaXzn2gVbgBwflZpkatg1naKJ4PWF%2F%2BceYlfXjn%2B0X8Skx74CqqkYnUcg%2FCUpI%2B5XMDX18CW5Iyccwels%2FYPuj0kcTFfGkjNIpgzZ7Yiyml%2F9Vt3rnsa3Dr4aLk0U%2FuD4L9tPp2EQls3IRsT3aDV5DCf7DgIvJ3q8mryCbJyggJSPfs5fYy0IlssIyKOOsyIWpKZMIe7qAlQT%2BW568sPzE3BciSzgdPis%2BVy55GK5BhF92izcWbpotfdAKQglMabcYB4t7NQWuAmZRs8HWBgNY0MvmLfSVl7yfVfYgE1dVyWLa0woPb3wgY6pgFKxBsbyfqOllNbr%2BEMyOdfzN0N3dXeKpRjMik0RStwQo%2BLcJWD%2BGmzGEbNX5TXjh7oT%2BXTkkrSNoEVJ3HA6fHZ2S1S%2BB1woUdbcklMiX7o4W9azor%2FqbbeO2PVpiCzv20DsNyFz2yrwVJarCZ%2FHZltPzhqsFdNIgd7zkhyk9s8lu4LjyXIIsOVTQncmxEBh87iBL6jUF9yqNXK0Nm6zyvJw%2BLR4iX6&X-Amz-Signature=06588401f5ee1e785b92a56c21c3c3d14729072a9495030268176c284780bf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EQUYCG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIANit%2FnAC959TAtp3NjWXQimHROQiYB2lGumQ0tZ0N0JAiACCn9B1076p5H0Q7o%2FeE3hcO2RXDbF5Jq6NlSQp5g6hyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMQVCqWM7Lm%2FqLB7pmKtwDCaSNRSwr%2BwTsbaeu8BPsk5wn9Q3lh910gaw8wNlnGvVJNaXQQARWlcRO2z7cURJUqg2rqirYZDZIoCFlpd3%2Brm1mQDHzMW2xs0wFSHNw9A1EE5tZXZ%2FEuWmfXK3ySPgnxM0iNQOvFCnEuyQMqrzZ%2BHFWF9RPBBYvqwUr5yJRet33tAa6dPqxSqjtuP%2B%2F9jEdN62Anyx%2FJiCTdjkfhpu5zo3xxgMmNVI3%2Bpv6dZCHhIbx62lklcgtqS2ExqpegkS0Yxs9vDMiw5L9PkajtUzOfzvmrSE1Sjq%2BufmTU7o6Irn7mqph9fZa6rHHD6SGbbmENklWXW9COZmazaXzn2gVbgBwflZpkatg1naKJ4PWF%2F%2BceYlfXjn%2B0X8Skx74CqqkYnUcg%2FCUpI%2B5XMDX18CW5Iyccwels%2FYPuj0kcTFfGkjNIpgzZ7Yiyml%2F9Vt3rnsa3Dr4aLk0U%2FuD4L9tPp2EQls3IRsT3aDV5DCf7DgIvJ3q8mryCbJyggJSPfs5fYy0IlssIyKOOsyIWpKZMIe7qAlQT%2BW568sPzE3BciSzgdPis%2BVy55GK5BhF92izcWbpotfdAKQglMabcYB4t7NQWuAmZRs8HWBgNY0MvmLfSVl7yfVfYgE1dVyWLa0woPb3wgY6pgFKxBsbyfqOllNbr%2BEMyOdfzN0N3dXeKpRjMik0RStwQo%2BLcJWD%2BGmzGEbNX5TXjh7oT%2BXTkkrSNoEVJ3HA6fHZ2S1S%2BB1woUdbcklMiX7o4W9azor%2FqbbeO2PVpiCzv20DsNyFz2yrwVJarCZ%2FHZltPzhqsFdNIgd7zkhyk9s8lu4LjyXIIsOVTQncmxEBh87iBL6jUF9yqNXK0Nm6zyvJw%2BLR4iX6&X-Amz-Signature=8789a615bf6403497996d2cb0e8e7409f94865e94f5463b7d81d34aa4f77e4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EQUYCG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIANit%2FnAC959TAtp3NjWXQimHROQiYB2lGumQ0tZ0N0JAiACCn9B1076p5H0Q7o%2FeE3hcO2RXDbF5Jq6NlSQp5g6hyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMQVCqWM7Lm%2FqLB7pmKtwDCaSNRSwr%2BwTsbaeu8BPsk5wn9Q3lh910gaw8wNlnGvVJNaXQQARWlcRO2z7cURJUqg2rqirYZDZIoCFlpd3%2Brm1mQDHzMW2xs0wFSHNw9A1EE5tZXZ%2FEuWmfXK3ySPgnxM0iNQOvFCnEuyQMqrzZ%2BHFWF9RPBBYvqwUr5yJRet33tAa6dPqxSqjtuP%2B%2F9jEdN62Anyx%2FJiCTdjkfhpu5zo3xxgMmNVI3%2Bpv6dZCHhIbx62lklcgtqS2ExqpegkS0Yxs9vDMiw5L9PkajtUzOfzvmrSE1Sjq%2BufmTU7o6Irn7mqph9fZa6rHHD6SGbbmENklWXW9COZmazaXzn2gVbgBwflZpkatg1naKJ4PWF%2F%2BceYlfXjn%2B0X8Skx74CqqkYnUcg%2FCUpI%2B5XMDX18CW5Iyccwels%2FYPuj0kcTFfGkjNIpgzZ7Yiyml%2F9Vt3rnsa3Dr4aLk0U%2FuD4L9tPp2EQls3IRsT3aDV5DCf7DgIvJ3q8mryCbJyggJSPfs5fYy0IlssIyKOOsyIWpKZMIe7qAlQT%2BW568sPzE3BciSzgdPis%2BVy55GK5BhF92izcWbpotfdAKQglMabcYB4t7NQWuAmZRs8HWBgNY0MvmLfSVl7yfVfYgE1dVyWLa0woPb3wgY6pgFKxBsbyfqOllNbr%2BEMyOdfzN0N3dXeKpRjMik0RStwQo%2BLcJWD%2BGmzGEbNX5TXjh7oT%2BXTkkrSNoEVJ3HA6fHZ2S1S%2BB1woUdbcklMiX7o4W9azor%2FqbbeO2PVpiCzv20DsNyFz2yrwVJarCZ%2FHZltPzhqsFdNIgd7zkhyk9s8lu4LjyXIIsOVTQncmxEBh87iBL6jUF9yqNXK0Nm6zyvJw%2BLR4iX6&X-Amz-Signature=bab0b5d0cca66997bef878f9a98e49b6c9857998d078ea2dd5ccaea0718b020f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYBJ3BD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICgvK%2FUtljZIq%2B4QV8PEjuK4LaCTUZhCgso0uRU0g3AAAiEAvfJwHBlUFZs7xMLlzFvHEjhkJTq85IK6icVYNm8REOIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAlL8xhfM1vFVQDoqircA31TZLuHVEeUK5aTqDkCkDhZzrZ26WSnw2TsTGFR8w%2B%2FPMn7GHzJ9jPOjyu8zUENtyVwE3gX02zz80jt4NbWoODi4hmEg9jmmcmXqj2eCfw835GyzbjOnWXFQuW4%2F038IBTQA62zi8Q2JWCMMMOs9YjfbwuV7Kv7m6L%2F%2FIQ3IortdM0Kmj6Yw9HVNfU6e6bEUdwsqCZPfYIumYdpAk9%2BZ%2BdlkhC1RlnWd%2FFI6ObNu714ZvhQJq%2FUrIC8jaWobYPg4cKdF7OZqi77NySvf3U%2FghrTpkhjgpZo%2Fx1vpXmIpQsRVpBtJgO0AfcgtoXdXLePEvVA3RvqWc1BqHPvdYd6PGvtfjhwrNSiq5ig4z91gYwVgVeSeHElga7LGOA4674AET2pYUrvTpUPxBuTPfYhvLO%2FXLKJozTuvHxzEP9NrhhU3G7FT%2BJ7aEjEnm0E26O1WCf%2FypTeXUOTjdEkHqDRpqb0FzCUyO8f%2FpGdcoECjgBseJQ4sbD7zjACmcl4p%2FsHrf9wBeTlwipedued9%2FMslgxthYY5BlAaqHXfHuKRM9bink828qoGjuUrRlFFJi9z47Ilp3IZIsPNCR%2Bv%2FENI8AN%2BlWaCkccJaccTlTDLscAkocW1am6N%2B1JMnke4MP7098IGOqUB1pb4bZOXMig2Pyyd9EiJwFlxenZrBbh53I67TgU3qto1clwGNVm06UQ8ZHluqtBfGfMLkYPzFll3zhbN22Y0K0YZo4wMRNXKBVyVWG2r49J1gPQHgzzqNyS9IiuuoYhQrcUnuI2GH1eP3tRSS951%2BsL5i52K7j6NDKQgv0slNcK%2BSWiMH5ln1SadslifpLTvda57kVSgCgPwXBhfQw8%2BM47BDB8r&X-Amz-Signature=35db48160addd6fb15dc164f656e590325f7bc6453214df06a0fbc6ca10b3e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KJEFBAX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDJ63q%2F85AdJlaQro59NdRgzcY939c8N4Y81P5Y%2BQdpigIhAKyQRxx8QuE109QJ%2BJADEWxM%2FWkv3Cai4Aqwk3A3gOA6Kv8DCGsQABoMNjM3NDIzMTgzODA1IgzI%2BCtqg1Vx%2BsGLEJIq3APkw4HPuFc1AjYiGCs8NUQL0PhaLTg2NLjKlVvtXpOrtxZwz25A%2FLwb2YMHiubzLEIP2y%2BI8UkPpMaw3NtvAWQMnA3N1ijXbuTD48qJ6thUQrk6PohxT7j8aHcBC%2B0ZRuYac1sxc4kmbsgzKvBEWje8ZJhGDddPZIkrMvMjXvyB0GOa1M%2B25d2XEqJvhEnrfMKyk7pHiFhmA%2FCfSfETOiL96Fteea6%2BiR%2BTaS%2FEU1OgiFO8BeRNlhl5mHqWIK62Djxu9%2FA8V0cI3lA7bCF%2Bw4B7PYBs3S41HnCPFCMG4NqecxhImcDNDeDgWbXQQABWtrq%2BIOyAnappUdRRfMESJirkG8kNXtGnGZULE5%2BggAsIxwMEb9QfAztf4jS22gwf2gK0TXBBm6D0XlXYXDyep4jL1Av9jRkczghgH8J7lPBVY53%2FUaE3QLkoawmts4%2B%2FiY4sr9anjdSOYA4aiVumoPr4%2FVr0qO1o52BwtSUtnwtRzhn1kOYawMHaljM43zjrT%2FSfLvm9X85EUgKnEy7vpoO7utxEaOc31kzsvhCkjvWBV8cHZebR39K8vbYDI%2FsyksIN%2Fc6AxyoZHSWL%2FlfZ%2BLcWDh%2ByQ8EW0PyJia2pvdlt6elzdPReWB8YTuWkNjD%2B9ffCBjqkAZ%2F93KH9Oi%2FnMJ8az80dl9yTfugoWMRDIk1Bsc6QRTSxbJprRC%2FngNA3imPibZrOMkznhRzjZaSXZbusFRsTSbp9Ij0cuLMAuGCr6BBGqn5UJ8t1vb%2FSVVBEnuQzIkqdIgACWksKiO4DupbeCsORcjpSvpZ52abgf%2BaGLgyWfuNkyLzKeOD7lHicw9jTIWl3mIK1Bg5ytuEVJu64n%2FuhNSOtNYRo&X-Amz-Signature=0e1f5e8193a1f5ff2274be36f97cc57eaaed76830368588bc6627310a4c3e89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EQUYCG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIANit%2FnAC959TAtp3NjWXQimHROQiYB2lGumQ0tZ0N0JAiACCn9B1076p5H0Q7o%2FeE3hcO2RXDbF5Jq6NlSQp5g6hyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMQVCqWM7Lm%2FqLB7pmKtwDCaSNRSwr%2BwTsbaeu8BPsk5wn9Q3lh910gaw8wNlnGvVJNaXQQARWlcRO2z7cURJUqg2rqirYZDZIoCFlpd3%2Brm1mQDHzMW2xs0wFSHNw9A1EE5tZXZ%2FEuWmfXK3ySPgnxM0iNQOvFCnEuyQMqrzZ%2BHFWF9RPBBYvqwUr5yJRet33tAa6dPqxSqjtuP%2B%2F9jEdN62Anyx%2FJiCTdjkfhpu5zo3xxgMmNVI3%2Bpv6dZCHhIbx62lklcgtqS2ExqpegkS0Yxs9vDMiw5L9PkajtUzOfzvmrSE1Sjq%2BufmTU7o6Irn7mqph9fZa6rHHD6SGbbmENklWXW9COZmazaXzn2gVbgBwflZpkatg1naKJ4PWF%2F%2BceYlfXjn%2B0X8Skx74CqqkYnUcg%2FCUpI%2B5XMDX18CW5Iyccwels%2FYPuj0kcTFfGkjNIpgzZ7Yiyml%2F9Vt3rnsa3Dr4aLk0U%2FuD4L9tPp2EQls3IRsT3aDV5DCf7DgIvJ3q8mryCbJyggJSPfs5fYy0IlssIyKOOsyIWpKZMIe7qAlQT%2BW568sPzE3BciSzgdPis%2BVy55GK5BhF92izcWbpotfdAKQglMabcYB4t7NQWuAmZRs8HWBgNY0MvmLfSVl7yfVfYgE1dVyWLa0woPb3wgY6pgFKxBsbyfqOllNbr%2BEMyOdfzN0N3dXeKpRjMik0RStwQo%2BLcJWD%2BGmzGEbNX5TXjh7oT%2BXTkkrSNoEVJ3HA6fHZ2S1S%2BB1woUdbcklMiX7o4W9azor%2FqbbeO2PVpiCzv20DsNyFz2yrwVJarCZ%2FHZltPzhqsFdNIgd7zkhyk9s8lu4LjyXIIsOVTQncmxEBh87iBL6jUF9yqNXK0Nm6zyvJw%2BLR4iX6&X-Amz-Signature=eb55aeacac124ccd0eefef05fb807b2d708dfa4b5c546fd477bec185d97a7d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
