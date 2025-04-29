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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KTEPGS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD49ZAqQekWDQSGvD7c8jeaJwZeikn%2BUSpzSEerIxD4qAIgcLZpHreDMENHB%2BEh%2BrygvvKATYfP5TshSI79KRobsD4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjvuDr6xJuKdnruuCrcA%2F%2BZE26zZIflOBPHNrZJi5ywXkJ%2FMqjZUSjcdw20Zvnt2S576aa31gdcLA6FapzLQXdD1YVJD6bMGRMrnADCA9c2RWRjQBeNiGfXzxiBb9zSWsC%2BppL9eS5QITmhQpGYG%2Falt8UkOQaGd82oGUIDV8SULMx2qSdjQQ0yogUg1vroPGd0w2U14XWVS18o0voV9DzC86Rw%2FZY2SIDjIT1jIVWvxlMfdzH0gbwtOkG%2FtFzcfYK8f3vVO9O2nvsn3dKxskXCsuhCbvmo7tNU3lk%2BSWNxwdoSfQY%2FB3lhatc5Y5bF6lSZ6EvhJs7u6z3ZAd3T5zwwNLTvgQ4ySpW2ezBe6hzuwrqRjHcf3RMs6aiX3g2WaMgStfgTiJok94AT86k7BY3ADVV1w%2BwEekpXM6d%2FnC%2BVQQ0421mY%2BmT5BHmtcme4aIeeioGh8u2yqVYyxRPWXc8tCl6mRkwghJUrZKalaKH4I%2BhRFiqzFLFaKjcg8P0UpgreP14x2Ca%2FZPUJwPT1aljN5MnLWx2%2B5YPf1%2F0NI%2B9cvD%2Bro%2FVeCuvmgFDvhU%2FEJNJJrGFmMbBd%2FPwUFtv%2B4BpiY0qKj7hanoMT9IqHWyKWuFCXeH6ENk3%2BfCF5fNewwZA6bV6Cylv202B0MJa%2FwMAGOqUBW6N2Q5lLaySH%2BS7wV5EZELO7pQ9y4xg3%2BSFfP4S5wKTuR6kkUrftR7g7PNTzODXd0PFtbQNSdLgJxaN3TvopWcJY59QK5kpXFQJkuTfcSlybarFyZlUDGu0HToVuNh8sN6BFI3bXvYJ1ppXU5%2BH3k1lFgbhK8OIiCJJ%2FqEYVC66YE7qZqr0Cq%2FxyZYu%2FtHggPlwa%2BSMHVWdEZSyj%2BY4JaUOEhBPH&X-Amz-Signature=7035fac48c5c05b973193e3767b7aa65626ea2f2aba30fc691daf05226996f36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KTEPGS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD49ZAqQekWDQSGvD7c8jeaJwZeikn%2BUSpzSEerIxD4qAIgcLZpHreDMENHB%2BEh%2BrygvvKATYfP5TshSI79KRobsD4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjvuDr6xJuKdnruuCrcA%2F%2BZE26zZIflOBPHNrZJi5ywXkJ%2FMqjZUSjcdw20Zvnt2S576aa31gdcLA6FapzLQXdD1YVJD6bMGRMrnADCA9c2RWRjQBeNiGfXzxiBb9zSWsC%2BppL9eS5QITmhQpGYG%2Falt8UkOQaGd82oGUIDV8SULMx2qSdjQQ0yogUg1vroPGd0w2U14XWVS18o0voV9DzC86Rw%2FZY2SIDjIT1jIVWvxlMfdzH0gbwtOkG%2FtFzcfYK8f3vVO9O2nvsn3dKxskXCsuhCbvmo7tNU3lk%2BSWNxwdoSfQY%2FB3lhatc5Y5bF6lSZ6EvhJs7u6z3ZAd3T5zwwNLTvgQ4ySpW2ezBe6hzuwrqRjHcf3RMs6aiX3g2WaMgStfgTiJok94AT86k7BY3ADVV1w%2BwEekpXM6d%2FnC%2BVQQ0421mY%2BmT5BHmtcme4aIeeioGh8u2yqVYyxRPWXc8tCl6mRkwghJUrZKalaKH4I%2BhRFiqzFLFaKjcg8P0UpgreP14x2Ca%2FZPUJwPT1aljN5MnLWx2%2B5YPf1%2F0NI%2B9cvD%2Bro%2FVeCuvmgFDvhU%2FEJNJJrGFmMbBd%2FPwUFtv%2B4BpiY0qKj7hanoMT9IqHWyKWuFCXeH6ENk3%2BfCF5fNewwZA6bV6Cylv202B0MJa%2FwMAGOqUBW6N2Q5lLaySH%2BS7wV5EZELO7pQ9y4xg3%2BSFfP4S5wKTuR6kkUrftR7g7PNTzODXd0PFtbQNSdLgJxaN3TvopWcJY59QK5kpXFQJkuTfcSlybarFyZlUDGu0HToVuNh8sN6BFI3bXvYJ1ppXU5%2BH3k1lFgbhK8OIiCJJ%2FqEYVC66YE7qZqr0Cq%2FxyZYu%2FtHggPlwa%2BSMHVWdEZSyj%2BY4JaUOEhBPH&X-Amz-Signature=54f9e554c90c50291f510826ecf1001e36906a897dbc06db60f090751fe80b60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AFAGK2R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkY5nFBfTDYy0ksNUuQVzoAWyoG14V3lY%2BZdTHdRJEOAiAKeFhdoiP4ubfbnG3lNq0zUcu6NLQCicIYFxg8CqrxfyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXNOaTQkH%2BbXzNuXbKtwDVG%2BYVPR17xAVdjJdXll14nQCPDtlzRsbWpgX31lrMbbBUJNUkT%2BZPUuGSPsBaTxmgE%2FiQty%2BWxLNKg4buTBXWrE6sbtcXEb4EfyVHflgQPsua9FRl96p7LeUFUnrLvszeEeO6%2F3gt1LQuz%2BP10%2BqOzKGHh7q%2F985C4G5Gv%2BpN%2FGZd7ZVAhN5jCjYPuAugpQGhpq1hABwLKov4kEAuLhouDAzSLPgxCXejKIGt92MZMacAyNbjuxdbqPU3FQUZQaxnK%2BQXsb6%2BwPWtpVWD%2FmBShz1qWCSKNlk92H3S1YcRgQNgpz17EdmKkr%2Fgolha%2FO2WQsBfUXTw5KpC%2Flu3WwWR8WQci0euDeEbvjcQUokBU0hajt0AKgh2EjVsTJFmmm16HBfXu14OgcfzNeZluS8gP4zCuNdmls2hOywCpQM4tapWB5zkIkII4ioTUVd51nBixtJsTgw%2Fr8LsV%2FUkniibrqiQ9b0XquvBSKEPcwhv%2BDB44yXuMz6H6PkxP6E4qlu0ITluW1FPU5kpO2ntxDil%2B6Tjfw9Aw%2FRAZJv%2F9ArPdhaUMuzBtD0xxeUu4GtBnyFyb2g%2B8ITGRDJA9v59ie13vn1a8Z9TYsAAjAE2jzctOP9EvpaTwooa3o6tK4wjL%2FAwAY6pgFT%2BH35uykYk5rdfSzbE75CDzR2DwuMENAoZN1oWnYAnYOfUVYpV15nj8T%2BVzcy55M%2FInJY8IGOcxeX4%2BHISlu4711cdowCL%2BORM3CvR5l2OFa0JmrpBzmMSsHe9lumSGKQw89SGTD70MIVAsdiKO%2F5LDqTt2Rxr7ECzWv1kNf61KVkHtbsfO%2Fj2WZCTyvjM1O1pqP1bFiadm8zL%2FQKdjN4wXzD26VV&X-Amz-Signature=ae97d1f601281b9b67d804fc6b21df69e61d4024f6d19d626848bd1a98d6908b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGO2S6L%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFvjLvMuy2SGaNlV%2F9ck%2BtEjDyk2sCn4s6zwHIDjwD5AIhAIm4AAcdq05VHVniw3YkTVskyph%2FJQ1SQwt2DRMnGS5uKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp72mHIygmuQWGzBsq3AOIpsXAj8NeISeXnXjpXixUlJ3oXGPSMXtvonUDI9uVHsiEkJ4ukgg1Jx2BH8Y0yNGotRKNjlqmrMfkwIUiu5ZU3fSj6v%2FnN2nuNP5viHXgygcOJEqAIRsGJB%2BGDptuAhW3UWfi7ew7bDT7aQcQbOEEUFm6CjAgUj9tablQep2YDDRrhkVlggU2UTgypxEmCwf1DkQ4yRDpuO6J803brDdqsNJiuI11g0J1ISX9WKyOA9H%2B8oLHc6A1afe%2BB142guPIAF2NxBVQ0yARcGIfsob56DhLKM9tmgQadlkKJVr6Av%2BxlhyoqyRxTvVMztIqVgqq7myZ6oICOSSYL7Kz%2Bgy3o12mSAvxUDWVe%2Fv60Dnpe3kvCJRKwA61AQeDBPgRFnEm6qKl257dst5%2B3%2BVUVYsO16E3ov0Kp1Z6eaR%2B4J4CiSfBmo1Xrm%2B2OpfvBcbkMvrcqRVoDa1qEvWSMTSDjcwq75ZaC9JZ965LZYNwsKZM7DUJ9fMgr%2FflThkzqH1u9aRgh9u4PjO6f1szbba3y%2FiZp7djjpRaDz8lx1CpbT1SODgx2749aGbfFdGL7KIKj4GCkGkqSpwf6M2CQPBkRUOwGAmuJrJZESdle88lQ8GI%2BnNpmA484p5nbPfgOTCEv8DABjqkAarACWPBPKK1WotR%2B9LMQteY%2FO3NyHiGiuf3LT90Gi8QOQpJ68FsUSBWK%2FDawMqxO713RCRzb32oSe%2FvNxYGXnezAUlNrXXYxhJsWZfZxHBYVYx2DLWZ6CBbVHXOCEm8%2BENGAMgqxiNNmz1aFdXszDX5Q%2FQ3rEMzG1iBKEFX1n%2BD2anC64f91naWynOhWKaNDD6k5%2FAFrfVlY1sWrdqwtS76aE9O&X-Amz-Signature=97279ccd2918b2b5917a065eee655e2d19cd6001536d61bf7c01917a92f192f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KTEPGS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD49ZAqQekWDQSGvD7c8jeaJwZeikn%2BUSpzSEerIxD4qAIgcLZpHreDMENHB%2BEh%2BrygvvKATYfP5TshSI79KRobsD4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjvuDr6xJuKdnruuCrcA%2F%2BZE26zZIflOBPHNrZJi5ywXkJ%2FMqjZUSjcdw20Zvnt2S576aa31gdcLA6FapzLQXdD1YVJD6bMGRMrnADCA9c2RWRjQBeNiGfXzxiBb9zSWsC%2BppL9eS5QITmhQpGYG%2Falt8UkOQaGd82oGUIDV8SULMx2qSdjQQ0yogUg1vroPGd0w2U14XWVS18o0voV9DzC86Rw%2FZY2SIDjIT1jIVWvxlMfdzH0gbwtOkG%2FtFzcfYK8f3vVO9O2nvsn3dKxskXCsuhCbvmo7tNU3lk%2BSWNxwdoSfQY%2FB3lhatc5Y5bF6lSZ6EvhJs7u6z3ZAd3T5zwwNLTvgQ4ySpW2ezBe6hzuwrqRjHcf3RMs6aiX3g2WaMgStfgTiJok94AT86k7BY3ADVV1w%2BwEekpXM6d%2FnC%2BVQQ0421mY%2BmT5BHmtcme4aIeeioGh8u2yqVYyxRPWXc8tCl6mRkwghJUrZKalaKH4I%2BhRFiqzFLFaKjcg8P0UpgreP14x2Ca%2FZPUJwPT1aljN5MnLWx2%2B5YPf1%2F0NI%2B9cvD%2Bro%2FVeCuvmgFDvhU%2FEJNJJrGFmMbBd%2FPwUFtv%2B4BpiY0qKj7hanoMT9IqHWyKWuFCXeH6ENk3%2BfCF5fNewwZA6bV6Cylv202B0MJa%2FwMAGOqUBW6N2Q5lLaySH%2BS7wV5EZELO7pQ9y4xg3%2BSFfP4S5wKTuR6kkUrftR7g7PNTzODXd0PFtbQNSdLgJxaN3TvopWcJY59QK5kpXFQJkuTfcSlybarFyZlUDGu0HToVuNh8sN6BFI3bXvYJ1ppXU5%2BH3k1lFgbhK8OIiCJJ%2FqEYVC66YE7qZqr0Cq%2FxyZYu%2FtHggPlwa%2BSMHVWdEZSyj%2BY4JaUOEhBPH&X-Amz-Signature=40e434ab256c404755acc2737ff5b707ae5dbfb01524a71c13f9a005e65e6bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
