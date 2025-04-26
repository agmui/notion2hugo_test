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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTKCVTC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT0ko42egm8S9arnsicLHOXtGvq080ckWVvhaDIHnd5AiBL%2F8Qnf5Wqgvh5CTtgyCgl80DQ1QqWctcF1uBbldJr7ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM657GI%2Fk5BTQTD8ieKtwDewOSixaX4MYTxom0VnhipTgwWEugmnqiJaXQZl8U07u4eFUg%2BHfimDvrVbgS1N76pIwfGGaMIIxkt6Ju8uOp2dS6Qa3PuWFaljiFpKf4Vya5f1kqMhO0EGvj7tevet%2FO8%2BtEteWI8pZg3K9s34QNWZTi3cI7UyMezrjB0uyxPh%2F9HWu6fQKxgo1NWQR0Gh1Fer%2BWTyLn3AEheTHWMptOQnISHm58t75MXUyjb1BolF5WUGu%2FRDhuuYsfqq8Aoztgc4xB8HhsI2KvkaXtSijW6E9fGwr5FpIcKS%2BZqBMz8oxlK3frG1YYM3PnXxnDwbTe4wDQLxBZdCTIyF4brUNhPe8j9yqPGtl1EhcVkrMvNLwVfnejXrP7p2Gkq%2BKd%2ByjSsBgZHV83eVoCv8C8eUd7%2FKl8CM6IIjtTCkPBvqBjGFcAVt6SgSu6%2BkW6XG7jTIlOeGUwdp2Bg6%2FKAp9hPl03XPl17LMXY%2FGo9eOJG1WKk%2FvhILYPn9E2FH05%2FPvFBN%2BQEiMdiJqFviJ%2BLOZvbkCa%2F6RdE4JguQuiHEsC514oOLmnO%2BYPiRIjaOs4q2fQIMYjlUMT7My787ZiTcfxA9lLRfOHOvwUq75HneYSTAIgiAcLnuhdUG5LwJtEE8wwvKm0wAY6pgHHL1gjyBAdWBLPIc0Kjob3VcVFvitMvt6LGRbu4rFqkY7uluO36NR%2FWDd%2Bs3%2F0TRR3P1TCgA6o%2BhI8EdXeW67dvL0e7u5vPNop63Mm%2FP0R7wkoIJfKfXynMM2ra%2FDnFhvdOGgpYWdcGXPWwGoLGRZd8OnH21tupKzsDwIg0%2BdnmikLOqMwr2qYMgq34RrvVOsJTnqrgUi%2Bqo9jPjCsO1mh8rblw9V3&X-Amz-Signature=30c1d19904826ba69f8ffd33793db424e043809d51a920de3b6f64de4471fc5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTKCVTC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT0ko42egm8S9arnsicLHOXtGvq080ckWVvhaDIHnd5AiBL%2F8Qnf5Wqgvh5CTtgyCgl80DQ1QqWctcF1uBbldJr7ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM657GI%2Fk5BTQTD8ieKtwDewOSixaX4MYTxom0VnhipTgwWEugmnqiJaXQZl8U07u4eFUg%2BHfimDvrVbgS1N76pIwfGGaMIIxkt6Ju8uOp2dS6Qa3PuWFaljiFpKf4Vya5f1kqMhO0EGvj7tevet%2FO8%2BtEteWI8pZg3K9s34QNWZTi3cI7UyMezrjB0uyxPh%2F9HWu6fQKxgo1NWQR0Gh1Fer%2BWTyLn3AEheTHWMptOQnISHm58t75MXUyjb1BolF5WUGu%2FRDhuuYsfqq8Aoztgc4xB8HhsI2KvkaXtSijW6E9fGwr5FpIcKS%2BZqBMz8oxlK3frG1YYM3PnXxnDwbTe4wDQLxBZdCTIyF4brUNhPe8j9yqPGtl1EhcVkrMvNLwVfnejXrP7p2Gkq%2BKd%2ByjSsBgZHV83eVoCv8C8eUd7%2FKl8CM6IIjtTCkPBvqBjGFcAVt6SgSu6%2BkW6XG7jTIlOeGUwdp2Bg6%2FKAp9hPl03XPl17LMXY%2FGo9eOJG1WKk%2FvhILYPn9E2FH05%2FPvFBN%2BQEiMdiJqFviJ%2BLOZvbkCa%2F6RdE4JguQuiHEsC514oOLmnO%2BYPiRIjaOs4q2fQIMYjlUMT7My787ZiTcfxA9lLRfOHOvwUq75HneYSTAIgiAcLnuhdUG5LwJtEE8wwvKm0wAY6pgHHL1gjyBAdWBLPIc0Kjob3VcVFvitMvt6LGRbu4rFqkY7uluO36NR%2FWDd%2Bs3%2F0TRR3P1TCgA6o%2BhI8EdXeW67dvL0e7u5vPNop63Mm%2FP0R7wkoIJfKfXynMM2ra%2FDnFhvdOGgpYWdcGXPWwGoLGRZd8OnH21tupKzsDwIg0%2BdnmikLOqMwr2qYMgq34RrvVOsJTnqrgUi%2Bqo9jPjCsO1mh8rblw9V3&X-Amz-Signature=740d2bbe63ba24d5e23564331527bb986f0456514f0304329089d8541905c9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZ3XQWH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbkN2nJEo%2ByhgxL1ecOwb7rWTdBYW0%2Fsl%2BBtGkVVYKQIhAITbkN8KHVnTqR4iWhyQbqieSpP4hlEwxohmyMWptjdOKv8DCEoQABoMNjM3NDIzMTgzODA1IgwgqsHQFe7qo0zUMO8q3ANnX7eA5KuqRwX1lbmNpMtQbc5MazIVkxElCAmNI6%2Btz9h4tmomwZ8l%2BkzN%2FiKJut1Kh3rXwfOKSSe3dabpHPB7vV8l%2Fx5E6BXG2Ht8m2jvzcKIKRH%2FCG7fMc2NnFjDTo2%2FH7ceK3izNxyh5QJ5VbEbAoMxiSrw7wWqDF93kdhiWizymriiQXQZz7sZ7HOQzxwSBZ82GAKCzst9VsIgs%2FyaUH4YV5wvJHK0S%2F2JgmOM94eEhFQ725nbs8GVCotb31QsKjvM3ibQLKZMU7GVmvaz7Zry2IScw4O06odF9WjR5a6iMxIZcE537nZ1O8%2FKrx2bhxsQjjwULa%2F%2FmvSkzVVcFNjN96Mu9nNiyuvppFmL2eKk6w7J6HlhM4MRQ69j%2FqcUM%2F%2FO3orleOMxPIorO0jdhZq8EGYPfeHynIz8DHsYzB%2B8ivvheYaER8cbWApuDG%2B%2BhsauKrE5otMWm6zdcWbEmR%2BebgjHs5KFsFXKytj6qFZBZQvID5Z0EUsk0rzppCYKp8tSEylnV5Z2YoSRKxTr77IvoN%2FSyIgBDmuaOMxnJv9N0V3hs4Izay%2BFvTCPzTTrLj1l2W19cHk%2FHQScQin5Q2NfKFyr61WBiG003djIZqDREQ1yUndqA%2FM5RTCoqbTABjqkAVfIGpS3lb5rdKVKhSFwsnu62a5sjUTsBVXBVBUGiae3udf67zn4KLHqzOwoOIpAcYEI5TZIjbzYF7SrOCdHrWsU2PF0VCJAs24Eqy3O45CLZNuZ4EFw4Ej3wUKi5N7ibWSrv%2Fzz8hK5BLDQ%2B6zo6ptoFeF7Xz6I0hiYJOke46sc6XHe7A7WgkLe0lHKAd1wh1UAB1mC6ciDFMr6gajUWg%2FZt%2BHJ&X-Amz-Signature=1e5b088750cc5bd3d8680c7c537cdac4e698a4997894a62f643b25a5e1a1aa3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHSL6XH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN%2Bl4F6jcaVV3W4ysWA1lnpNc1RkKTnONa42e9Cf1wRwIgG%2BCOqXNqs3ThZbcazrkHhD0uHMPp9uHiez%2Fv3nDGKpsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDx%2BU6r2CBM1hwpOTircA2XHrmf2CHsE8EqLhE8h5ZN264%2F%2BcMqa7yyO9iWBMNfnjUIc%2F%2FCExdouZ46TqfZXeArjnchKMkZL%2BI1kYn4DB4HA6wda08rCQ9leY85KT2TjefHs42a%2FZ8MoirxUnn7RbP9pS6nQ5tteFxmZxz%2FZgnY4pMiycSDZWmxrPKU508IgH6NWced00AmWc7MaM8cUvOZdVMPOfjjXtCi8U0TtFjKv%2BpZmpu%2FT%2BGifGSR%2BudBw1xkDQQDI5C%2FUC2Cl0Yi66o8OPGgsAsaKY4A8MoLAngiU8OeidJCxePhLlUB7RcdC%2BaeAtK2tF5hNI%2F7J%2BLb0eWmQz2jSGKMDyEt66%2BYrCdDnJXVgqN7eSe1LqTqoS%2FxbjM318uqfbarBa0VAJzcgHkmYVzvkeCZoZV%2B%2Fsw%2FEeYXKX9CiVX8jl0QMeJu3DEDGfEnjhMX7OSp%2Bxl4gyWb97j5gIZok3P7XTtw05jGqZAfnFag3OEeZwJ9Ym9MOTbNlsrRM6p3RS%2BTN4e6lb0yIiDh84D%2F9hF9VhhJZN%2BO3BhkEhrvhq%2Fq73PIJvUQkbSa7kYbhgrBn7Ggxi9E%2BBrsZvWTj%2FnwWuYr0Z3XXJOcRxepYJw80MN3sL4mE%2FI%2FC4dKbC3FayXvlOjL0Vh6rMMOptMAGOqUBSTIXIFWetepZD3p49dUNIeSvkThe8GH7f2SVNNlsDdBi3438SDU0HRmH2p5awz3n3GZjQBJmME%2FIK5IIX5YNyg4L2GtWPMQUtINHh8Mo2yPTXZcNY4Ga1DTr8otxQeWR91uxlGyYyBiMKeI59p%2BxkgrbVeMr%2FxTwcv2YbjKEFICB1fk4I4%2FxkYw3naW2JIwmBhH5IQAhwI8HqcZXG3%2FbYigsMqqP&X-Amz-Signature=0a154bb99e45435d307ba2eb2fdd839d4171f2f4ee449cf59506e0f6fcff388f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTKCVTC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT0ko42egm8S9arnsicLHOXtGvq080ckWVvhaDIHnd5AiBL%2F8Qnf5Wqgvh5CTtgyCgl80DQ1QqWctcF1uBbldJr7ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM657GI%2Fk5BTQTD8ieKtwDewOSixaX4MYTxom0VnhipTgwWEugmnqiJaXQZl8U07u4eFUg%2BHfimDvrVbgS1N76pIwfGGaMIIxkt6Ju8uOp2dS6Qa3PuWFaljiFpKf4Vya5f1kqMhO0EGvj7tevet%2FO8%2BtEteWI8pZg3K9s34QNWZTi3cI7UyMezrjB0uyxPh%2F9HWu6fQKxgo1NWQR0Gh1Fer%2BWTyLn3AEheTHWMptOQnISHm58t75MXUyjb1BolF5WUGu%2FRDhuuYsfqq8Aoztgc4xB8HhsI2KvkaXtSijW6E9fGwr5FpIcKS%2BZqBMz8oxlK3frG1YYM3PnXxnDwbTe4wDQLxBZdCTIyF4brUNhPe8j9yqPGtl1EhcVkrMvNLwVfnejXrP7p2Gkq%2BKd%2ByjSsBgZHV83eVoCv8C8eUd7%2FKl8CM6IIjtTCkPBvqBjGFcAVt6SgSu6%2BkW6XG7jTIlOeGUwdp2Bg6%2FKAp9hPl03XPl17LMXY%2FGo9eOJG1WKk%2FvhILYPn9E2FH05%2FPvFBN%2BQEiMdiJqFviJ%2BLOZvbkCa%2F6RdE4JguQuiHEsC514oOLmnO%2BYPiRIjaOs4q2fQIMYjlUMT7My787ZiTcfxA9lLRfOHOvwUq75HneYSTAIgiAcLnuhdUG5LwJtEE8wwvKm0wAY6pgHHL1gjyBAdWBLPIc0Kjob3VcVFvitMvt6LGRbu4rFqkY7uluO36NR%2FWDd%2Bs3%2F0TRR3P1TCgA6o%2BhI8EdXeW67dvL0e7u5vPNop63Mm%2FP0R7wkoIJfKfXynMM2ra%2FDnFhvdOGgpYWdcGXPWwGoLGRZd8OnH21tupKzsDwIg0%2BdnmikLOqMwr2qYMgq34RrvVOsJTnqrgUi%2Bqo9jPjCsO1mh8rblw9V3&X-Amz-Signature=0d4e420497aa14bc6c7f634682cb1f68f8f330b2e59db1a939558ddd43e44455&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
