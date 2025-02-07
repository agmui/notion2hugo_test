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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELNZ4IU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDL7qM80XWIbkXav35kbCrTazpvxGK8UmQ79649RcRtNAIhANPOFhTYLi6NnmGlrGvUKxTXTUpHqSWb9FSSnTwk9TAgKv8DCH0QABoMNjM3NDIzMTgzODA1IgyXvgJbj7FaMgV25vwq3AP9VoL%2BoyzjyOyfwn9v%2BYXqgRlhDkQx27SommKP6h%2BnVNfAUO%2FPHRQNe4qUT49bnWOO2JogWl6LFf416y%2BApE6wZuP9AWuZa6DgsEy5zEFhigFLB8bBSiv%2BD82Va0koik8X%2FVQ%2BHO28abVi%2FlIqeoCaApBoQK1zqg8Ecu0bE4eFERGk8odmiLEoCeE44TOfpuMQab4Yv6YOpuKnaFuIWa8rEyrj81gcjlKVYWS8CNrIKeJYQ%2FgUNxAfFJseHyOuTDu7LTrmnV1fLq3YFx5%2BDT9zfBn6fLm8DLVMO25GVXmLiRj1bK0qa9F145KtTcOsByxO6EE6hq%2FzuS9wLwHDbdqfWzv5952nxsywUtTVCb6DgEZLa82RjsDKsdn3XtpmDox4E33jfLT%2FPEBFXSpKUQtmlCapycbyWNQkNTfU%2BOJ13Qf4wSqKow81cxVbROOHStQkL54wzf4n31tm4iwyk3kd8HJfcl4oLjZrJZ9BlfFPoKco8%2FSkVFxskyKRoqRxxEN7ukBMDb6G6hW2Ib48A8DW2EJtzeYYu8wlJ2HFybWxqCypJOGCuEr8gFBnYKisUU4urVDOUkUu4gUfNnXrKFZe6YsIBl%2Fe7UMSwIbJ3ZdiJnftAcp5u8xZY5O6fjCC1Jm9BjqkAYB28%2FFH4EpLj62eZmWAa93HF4Zy1jA3WVicRjx0mEq9husS1CVSL3YF23GAUUU7kEKYTozN84s7z%2BL4dYSj84C%2FC7htnH%2Bz7KsCpR9gSaf6ejbVtlRfjbJYRCmfqgqvSKk8qOACN%2BLq6Ld9hnkaneiWmlkgEAJT70oQP6ICy19EMzaGa2XVkB6G4f2N%2BjC0oztZuy9%2BWQDSZpYauXeA8Yje4%2BLa&X-Amz-Signature=90cbb4b97d8c8114aa6e570263963811af6f3ea08f04b16596c95057b3d05859&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELNZ4IU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDL7qM80XWIbkXav35kbCrTazpvxGK8UmQ79649RcRtNAIhANPOFhTYLi6NnmGlrGvUKxTXTUpHqSWb9FSSnTwk9TAgKv8DCH0QABoMNjM3NDIzMTgzODA1IgyXvgJbj7FaMgV25vwq3AP9VoL%2BoyzjyOyfwn9v%2BYXqgRlhDkQx27SommKP6h%2BnVNfAUO%2FPHRQNe4qUT49bnWOO2JogWl6LFf416y%2BApE6wZuP9AWuZa6DgsEy5zEFhigFLB8bBSiv%2BD82Va0koik8X%2FVQ%2BHO28abVi%2FlIqeoCaApBoQK1zqg8Ecu0bE4eFERGk8odmiLEoCeE44TOfpuMQab4Yv6YOpuKnaFuIWa8rEyrj81gcjlKVYWS8CNrIKeJYQ%2FgUNxAfFJseHyOuTDu7LTrmnV1fLq3YFx5%2BDT9zfBn6fLm8DLVMO25GVXmLiRj1bK0qa9F145KtTcOsByxO6EE6hq%2FzuS9wLwHDbdqfWzv5952nxsywUtTVCb6DgEZLa82RjsDKsdn3XtpmDox4E33jfLT%2FPEBFXSpKUQtmlCapycbyWNQkNTfU%2BOJ13Qf4wSqKow81cxVbROOHStQkL54wzf4n31tm4iwyk3kd8HJfcl4oLjZrJZ9BlfFPoKco8%2FSkVFxskyKRoqRxxEN7ukBMDb6G6hW2Ib48A8DW2EJtzeYYu8wlJ2HFybWxqCypJOGCuEr8gFBnYKisUU4urVDOUkUu4gUfNnXrKFZe6YsIBl%2Fe7UMSwIbJ3ZdiJnftAcp5u8xZY5O6fjCC1Jm9BjqkAYB28%2FFH4EpLj62eZmWAa93HF4Zy1jA3WVicRjx0mEq9husS1CVSL3YF23GAUUU7kEKYTozN84s7z%2BL4dYSj84C%2FC7htnH%2Bz7KsCpR9gSaf6ejbVtlRfjbJYRCmfqgqvSKk8qOACN%2BLq6Ld9hnkaneiWmlkgEAJT70oQP6ICy19EMzaGa2XVkB6G4f2N%2BjC0oztZuy9%2BWQDSZpYauXeA8Yje4%2BLa&X-Amz-Signature=6e0436e01a91e3ece3d7aabe84c65e9931f5b5c467e80a2b0312f735a8f554e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSB7M5WN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDlU%2FsKa75Nog0ZqbAtK%2FrisniEW8nqn2y0UmSnfOp4RQIgNmGY9oUMkn%2Bq%2FTIb3%2FGwz%2BGDvlj3g6GCakI7LXfIwLsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMvwaeFwZikXCd9soyrcA1kVAohsD2JwV2GGKwSs%2BO2WJna3lve%2FBupiPBuCao%2FAIxB8e5zw4PJwveQUACmQUMWwznyGbXhgj7v9gtVOmcrvZGWEASdfGDJ9nxhsf8bVebblXNC8OPCkR9tAmPZdpFBu0sOL3mnBD5dzpF3m534XMR9q2X8wV7s2tutYjELdkkMBvkG48rn3fi8ov6GPw%2F1FM5p7d3fNM3M7afUdm2qggRkJkJhXgwsFmeEnJGX1P4JAj9h5xt%2BUHYPTRqdOnqi%2FlJvbucfVFPkk0DZVPkMaTTfMYD1akMAdaf5s5ycRqz2NJLD9UIgP03UydClLvsV3Q%2BdNJApxUdYFja%2BZq1wusFObFbQfgubAaowpQQMwwDUZAOG50hcPKbKQ3YCf0YNjGktUCJTGqGZgnnEaomFnj4HciyF2%2BNe8f1StnevuRtyow0r4EijkgG6b5FqMqI%2FUlW5utD8S2%2Bezt%2BLc74vykjwRy1D12L9iTCpH6btkoXzdHOTeT3y7D%2F52NNKVNNd2CXyPB3QdqBIt4CE5RhearCNrOcfX%2B24%2FRFXBtthiJNdwqexurDtcIDfgcM8JODUiMlIufqHM2YjW2UnkolfC2OK%2Fibdd19yGsnYP1rurMJpziesHFu%2BlqPpsMM%2FUmb0GOqUBYmNYlp9Vm1VRvgdXniAp%2BkidzdhcD242FfrrlkwUCGm3QUMT66KwsrUeC3Cfkgkvm1t3VGrkMdhg72gzLE8UmvvDRhS%2BqYrrDxwj6ZysB0krTP%2FO8YKhTWgnYMNmjLtnr%2BsWPvYmUgB%2Bg7y%2FOPgyIxc4BiP10mP0WJLPROJOuqj3%2BZszmiFeKEDHgF6iXzqApa3gAb3T68UpSh68xAX1KnXOIkbR&X-Amz-Signature=04d25b5a8b42eebf702440fbf636b571e7bbede76436893d87f0797f087e888d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AXHRBAV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIC2Z5yq0w%2BWgkQPpkF3XPGYBfcN%2Faonqqhwbp%2F%2FmLpZXAiBi5GKacStC8I3X6sgk3DaycB5q87wYga6qjSpG%2F%2BOfWSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzlWKzdZLgW2YK7UsKtwDYqXYVV%2FAuAweZzrFIzDraWEcEpKnxkSk0i%2Fgmz%2FzDZ01cUvKNG%2FXgZ8BKWELyvyrRuFaJ8XAficzx4Jn0lMtXBSemAeXWqJF5Q%2F12BAXN0rRg4vOloAJ4q4t23v5I6am6kWYb5n3nLFbbu4v8HLTrmpbqc2EJJvo6xucaF4Ef3P%2B1jHR5wyUmKeY%2Bk3Lr8kXKwo%2FVuFX%2BDV314ATk3XoLOLVpclw1of11zQpmL53PMvxNFv%2FeoanxZTYSB9IJBq5Gxq4juPOhUBUAP57zzSIo7%2FVvGuHgl5K4rkQfymI5Y6G5ty4wUbSX7pXGvICsg7hBZgNT90Tx6tbkLOJ2W0AbUthWaoE738IhhQKgWp7OXCmhDEThC1vHRTvoVkC6ScD76NYanoeoz0Riv9qfaqRo4SEDPMjNRuEHnYeNsmcjRlNu2O2QY7XqOAwwljoYMO8EvEgm8OH%2BbXi6RAYrUTI%2BOhTn%2FB7QMEikkt%2FV0LmR5faXTjy3dv3%2FO3zwbQQ9pBU0uvo%2FVAi2aFR3OgYfm6RHkAA2sFdGmaz0C3ZqnMYQceG%2FFnlHAxsVXPSCocjQLIjdMh07LH%2BxPQaD0lubEGfa1BWmp%2BEeDBpiLU4EhbXRAObNxwuWVoh9QpV35gwkdSZvQY6pgEVyclimMgpLXb1QQmdCk8kBzrRfc3GNHSic7Z0v036RqEKWuPWMcmKgTnB4LWXe7m%2BubfN7SVI8TDeaWHxiyBn7Vqz8skPZUPENoVv5yk2tR6hFkJCDUvSyuonYmAmGnjKynkRTLP4u9oro%2BgUX60%2FvEa%2BH2PZgn2eo3Tl6kub5nTkcORFjFsSEDLTIql8CZ8XwbygPpjcBlvTTInJ7CzLfXXu0NbZ&X-Amz-Signature=800aade52cdc510989616c017c9316d13cd5c83b774bec6b0b4188c1a1bdb7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELNZ4IU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDL7qM80XWIbkXav35kbCrTazpvxGK8UmQ79649RcRtNAIhANPOFhTYLi6NnmGlrGvUKxTXTUpHqSWb9FSSnTwk9TAgKv8DCH0QABoMNjM3NDIzMTgzODA1IgyXvgJbj7FaMgV25vwq3AP9VoL%2BoyzjyOyfwn9v%2BYXqgRlhDkQx27SommKP6h%2BnVNfAUO%2FPHRQNe4qUT49bnWOO2JogWl6LFf416y%2BApE6wZuP9AWuZa6DgsEy5zEFhigFLB8bBSiv%2BD82Va0koik8X%2FVQ%2BHO28abVi%2FlIqeoCaApBoQK1zqg8Ecu0bE4eFERGk8odmiLEoCeE44TOfpuMQab4Yv6YOpuKnaFuIWa8rEyrj81gcjlKVYWS8CNrIKeJYQ%2FgUNxAfFJseHyOuTDu7LTrmnV1fLq3YFx5%2BDT9zfBn6fLm8DLVMO25GVXmLiRj1bK0qa9F145KtTcOsByxO6EE6hq%2FzuS9wLwHDbdqfWzv5952nxsywUtTVCb6DgEZLa82RjsDKsdn3XtpmDox4E33jfLT%2FPEBFXSpKUQtmlCapycbyWNQkNTfU%2BOJ13Qf4wSqKow81cxVbROOHStQkL54wzf4n31tm4iwyk3kd8HJfcl4oLjZrJZ9BlfFPoKco8%2FSkVFxskyKRoqRxxEN7ukBMDb6G6hW2Ib48A8DW2EJtzeYYu8wlJ2HFybWxqCypJOGCuEr8gFBnYKisUU4urVDOUkUu4gUfNnXrKFZe6YsIBl%2Fe7UMSwIbJ3ZdiJnftAcp5u8xZY5O6fjCC1Jm9BjqkAYB28%2FFH4EpLj62eZmWAa93HF4Zy1jA3WVicRjx0mEq9husS1CVSL3YF23GAUUU7kEKYTozN84s7z%2BL4dYSj84C%2FC7htnH%2Bz7KsCpR9gSaf6ejbVtlRfjbJYRCmfqgqvSKk8qOACN%2BLq6Ld9hnkaneiWmlkgEAJT70oQP6ICy19EMzaGa2XVkB6G4f2N%2BjC0oztZuy9%2BWQDSZpYauXeA8Yje4%2BLa&X-Amz-Signature=a6145edcb867fe9cc52d319dd0d8baa0816d5afb12475bb49b8fe422b69379a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
