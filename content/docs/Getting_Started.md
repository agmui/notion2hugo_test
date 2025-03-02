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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7ADDLT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSWndMNv91ZFVXII56HGnMrls%2BjD40mX7ExsCcqdEiSQIhAJF48KYU258WZqD%2FsWBbiScywHNxdXBA2VVbse4sUgs4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXZv8HuZnoSAq8KDQq3APt9WMHiKhWqH7UOrt6HIGNK8R5F2PF4HmsLF9NPseLT1i0l8Ueq7aWkwwTR0lJzGbaQ%2BA557GPIVexwzUJhQ5VLWgsFfY%2F23k8nnS4bM907Koaq2T66bT5ZftPExlFohCzESVRpJk77jy0MoUAzEjGAsg50DVC%2FCrUkx2anqnYrn3b5IbCQ3fBWR76gsDd2lhtSkhRxKm7xO3ANQGiu5LTRHj7LVir7bm6DUky%2FtzRxj24Z9CVoNfce6MmFjwpk15kq4eNsnpAwrClCS5GIaAmaXdJGEgN1pOOHF%2BSecVhBlBK8xKgi7JCh3Q2cH9aPXYEIGBSSTXrk44HjOa3g2TaXBTXbXupHW9rYhMd0bgceTkfUbpDLaxDduTlNs8GaZFy4Lh7opCL45vkz5tqO2HCdAzdxjV3%2FlQmRAAJkaBgt1W4EuLLj6chLqaBVw593SqIeh5DiWIPMuYDUOJUS9cjh9wkaZZLSJT3%2Fx2cWPKa6Fw%2B5vhv0eCDsZ4v1rKphYlwAog7hzn1cTzQ5y%2Fi5%2B03DLwRP89ogbMqEJTDy3CwG1NmaF7HkqXn8jx4S7xAjoZbxfvNF4XpicNbQEILwbz3PFtCdP%2FdRy5AH9UdbLH%2BEieuMHRm4Xmetkmw6jDf14%2B%2BBjqkAazUxZeUSTSFJNqdFIeTr%2BL6A5kbfJSmrS256tlvDXFi1uqlrTlNvFOrUHLUAR4R450dmiXlBQePcO0dhMlpxj%2FOoNrxZRT9rwyZIkzYHbgG9Sfu2Jw7xmigOWwrTw8jLfjQsKj9CVAi%2BKRN13sCEQu0oM84Kp86%2Bt8LLdaRiQVR%2FcvQHwGeBIKyOysb76fRB%2FINg9bwwlXIcGTUPvjFmvNDXPOk&X-Amz-Signature=71d2bf1672cd0c7df71d8191da9cf296c2539a6cffce42ee8fcf132b9a6b35a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7ADDLT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSWndMNv91ZFVXII56HGnMrls%2BjD40mX7ExsCcqdEiSQIhAJF48KYU258WZqD%2FsWBbiScywHNxdXBA2VVbse4sUgs4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXZv8HuZnoSAq8KDQq3APt9WMHiKhWqH7UOrt6HIGNK8R5F2PF4HmsLF9NPseLT1i0l8Ueq7aWkwwTR0lJzGbaQ%2BA557GPIVexwzUJhQ5VLWgsFfY%2F23k8nnS4bM907Koaq2T66bT5ZftPExlFohCzESVRpJk77jy0MoUAzEjGAsg50DVC%2FCrUkx2anqnYrn3b5IbCQ3fBWR76gsDd2lhtSkhRxKm7xO3ANQGiu5LTRHj7LVir7bm6DUky%2FtzRxj24Z9CVoNfce6MmFjwpk15kq4eNsnpAwrClCS5GIaAmaXdJGEgN1pOOHF%2BSecVhBlBK8xKgi7JCh3Q2cH9aPXYEIGBSSTXrk44HjOa3g2TaXBTXbXupHW9rYhMd0bgceTkfUbpDLaxDduTlNs8GaZFy4Lh7opCL45vkz5tqO2HCdAzdxjV3%2FlQmRAAJkaBgt1W4EuLLj6chLqaBVw593SqIeh5DiWIPMuYDUOJUS9cjh9wkaZZLSJT3%2Fx2cWPKa6Fw%2B5vhv0eCDsZ4v1rKphYlwAog7hzn1cTzQ5y%2Fi5%2B03DLwRP89ogbMqEJTDy3CwG1NmaF7HkqXn8jx4S7xAjoZbxfvNF4XpicNbQEILwbz3PFtCdP%2FdRy5AH9UdbLH%2BEieuMHRm4Xmetkmw6jDf14%2B%2BBjqkAazUxZeUSTSFJNqdFIeTr%2BL6A5kbfJSmrS256tlvDXFi1uqlrTlNvFOrUHLUAR4R450dmiXlBQePcO0dhMlpxj%2FOoNrxZRT9rwyZIkzYHbgG9Sfu2Jw7xmigOWwrTw8jLfjQsKj9CVAi%2BKRN13sCEQu0oM84Kp86%2Bt8LLdaRiQVR%2FcvQHwGeBIKyOysb76fRB%2FINg9bwwlXIcGTUPvjFmvNDXPOk&X-Amz-Signature=9e6acc8df2a00012f79604b4510379ac700061c3cd098dc4057a32b6aba26447&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2WWPY5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDf00imIh2VezmV3eeOofeJ0SKFnvLmp3EAh%2BvOzK6elAIgP1ORayMsjd5%2B6fV75mexOeYZL%2BsUKQXNhRg3AH5mVrQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpvFpZ2xH6gTdbGYSrcA%2BI0hNc13%2F6K%2BYvRkWE5WkCG%2FStIdxHsfRTtembvzDlhOwPma9ZuCefEpWjYPQ35s37WBSjednfO2d0bWOaDNi4y08HXECesrPuXzOvwnKrb3hgfZZwLIU40Upo5XqCZ%2FRxgL6lFeKuPsCoMMHla0bQ1Ayr7iDIq96eFA0PWfFWlp6%2Fj3XarvwGjWG3FH3MaytOhZuzyPJpcsZRopHh9sFq5ReqX6ttYLnCyyxBIX2PJMBDGgR2M8e6jva%2BIaA3wiSgpJbhhXl5URkXPBCwASwRPbPp6Y0FrdBhCTMGuxG8XRzI17XtvgFO5R3wAPRoSQ5lEUf5VfsjpI9P65nNeFT50WqSs2DVKfNGdMpvBxCUPqSpXXBzVeqc1wrajsAgw4duzSJ4KEtebH%2FnGKIdt5lqmoN%2BBLegg7t20erP7RH36OcWn9tIF07DAJ46%2BD7ftsk5FVLNewYJ07wD4MaXVfeuKzgLYXLeEIVODxduPYNZBsJZzLgqmbJNQWT73TSlnN%2F6o%2Bh0eqeM81nOOAE7M8wSmqxsYy%2Bq7V%2FYLQtzQ%2Bot23PQ%2BiOS%2B28aebZ5XPkyCzd6dreCKdFTYYiqGs4hE6PsC06k80Ekj%2Bgn3AiRD65XATNQE0U2YYGti2vKGMJ3Yj74GOqUBu4l%2Ba8J6%2F7OHsaLcJJDUla5DbR5e9jIokV%2Bq2agPbs8BcP6TzjUujc%2Bmem5HJWuZxkz%2FsNUY9LXmwt%2BAVIfg3qm%2Fk0lqhUL6VwKfVKo%2Fc7PdMokPBzyZblEHnzi4HMZz9OuYjO29Kd9k5JZCdsBGNjDdfYr9IMrUYPDvTYoSjxWw%2FwcIbwS3d%2BvTa6G5S0pgHas4evu9Pe%2FF3yrLmNrXRlMqovCT&X-Amz-Signature=d89c72345c017c9c29d23efd08ca313f709c7fd0208c636934267857cd197cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZBLCSM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIArGp7uvPEIv8Rstkx3EadYd412Z01yhrZRA1o0csFohAiBLpArHhp0HgXQqfDmEqT9%2FJdUX2qtAhcujjW6cAO6TxiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrBBYnbgRkoBCQ%2Br3KtwDIbY1h0oIADppT5Z4%2F7bbYYKI05p%2BfoKjHRAfqOh1NMbhZzF0AD7pNrv1EBVxMbAkpBJe8ULbFwcA4BQGQM7bm5%2FwiueBH7MjL%2FFgJoaV47fVZGLBxDVtw5ati%2BAsp%2B2x8%2BaG5r89F1R0l%2FRbaC4mP8DTLi5rp4xRvpKEZ7tU4oNliKpH3BZDiMr4hJGyUxNrFRJWNQlmtmKMNFG1kK30Z5LKnleuerKGFyHWvHbMZSWyRx8uZd2asthfMkl0zc4nE3RvtX373fL%2BZyjNk5osSfXDkrSGw25VI%2BF1OLcXLCJPMpVbOUAtLlC6okHEuVnmaPiTqo%2FtVKxPKvs6T1jx8AayidS6L8m6Q3Xrb%2FSY1sLSEYzJ%2Btk3bv6HRX%2BHBsT0GTU2gtx0AdIEsb%2BZAXOAeOp3UvGTru3m22WWivGmB7ihgyK2%2BB2lVvPUGHxEVl8vKp1HDpzlL3oCSfAJO93q76vNxl7leZQnrJrV5KqbZFgxGAmhmwmwKARKbn6ny5WILhHeowQQmVrGmGbioPOeXL%2BY7UBRz3IXDJZHtbRMYZNkiSVaTQSjicayUPsNYbqaucsIgOcGBMw1hk6wDyp17JG6fZjEh09Cr8jFbZ27ycS620VjZaZ8vOPvypUwn9iPvgY6pgH05yGdVqQ%2FefD4fwgXJsbOuYJWsaxt9hzXJeec8sDg%2BT9GaFHDlNFKtjSf9WXzLLEUk%2FLyu6Ugp3JL8XgXVpqU5FpdJhLPWlzsB00p%2FMUmU3v6deRfPKSdtcV%2FjaDRrSAg01Dd1vqiBzFkLRaVDoczKqfJ9vPB%2FKe5bp%2FuMurIRZ1WH%2FeDKbaa5Ok0s4tUEJ1iiQq74fTlyjM%2FBjeKSsyqBO7ZK1Y8&X-Amz-Signature=d0c3e535f91e69a05b5ea496b731bbb03e0b5953811ce91cf2ed7a874fa253c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7ADDLT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSWndMNv91ZFVXII56HGnMrls%2BjD40mX7ExsCcqdEiSQIhAJF48KYU258WZqD%2FsWBbiScywHNxdXBA2VVbse4sUgs4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXZv8HuZnoSAq8KDQq3APt9WMHiKhWqH7UOrt6HIGNK8R5F2PF4HmsLF9NPseLT1i0l8Ueq7aWkwwTR0lJzGbaQ%2BA557GPIVexwzUJhQ5VLWgsFfY%2F23k8nnS4bM907Koaq2T66bT5ZftPExlFohCzESVRpJk77jy0MoUAzEjGAsg50DVC%2FCrUkx2anqnYrn3b5IbCQ3fBWR76gsDd2lhtSkhRxKm7xO3ANQGiu5LTRHj7LVir7bm6DUky%2FtzRxj24Z9CVoNfce6MmFjwpk15kq4eNsnpAwrClCS5GIaAmaXdJGEgN1pOOHF%2BSecVhBlBK8xKgi7JCh3Q2cH9aPXYEIGBSSTXrk44HjOa3g2TaXBTXbXupHW9rYhMd0bgceTkfUbpDLaxDduTlNs8GaZFy4Lh7opCL45vkz5tqO2HCdAzdxjV3%2FlQmRAAJkaBgt1W4EuLLj6chLqaBVw593SqIeh5DiWIPMuYDUOJUS9cjh9wkaZZLSJT3%2Fx2cWPKa6Fw%2B5vhv0eCDsZ4v1rKphYlwAog7hzn1cTzQ5y%2Fi5%2B03DLwRP89ogbMqEJTDy3CwG1NmaF7HkqXn8jx4S7xAjoZbxfvNF4XpicNbQEILwbz3PFtCdP%2FdRy5AH9UdbLH%2BEieuMHRm4Xmetkmw6jDf14%2B%2BBjqkAazUxZeUSTSFJNqdFIeTr%2BL6A5kbfJSmrS256tlvDXFi1uqlrTlNvFOrUHLUAR4R450dmiXlBQePcO0dhMlpxj%2FOoNrxZRT9rwyZIkzYHbgG9Sfu2Jw7xmigOWwrTw8jLfjQsKj9CVAi%2BKRN13sCEQu0oM84Kp86%2Bt8LLdaRiQVR%2FcvQHwGeBIKyOysb76fRB%2FINg9bwwlXIcGTUPvjFmvNDXPOk&X-Amz-Signature=66c84da30f0f2187e59c0ca6557b00c13fc4a347c85b2981059d28f083573629&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
