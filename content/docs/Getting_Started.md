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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTO7TG5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxO9fHFidSDYyeaC2YGauc68G7pAryRAsgxySA%2B8FbgIgNSmfZIMc0Ldhaa01nbanR%2BE7PKit1T%2BGGYmaY29bajwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfsJektJdyr21d4XyrcA8aYjrLKgxio98buaWI0aDsDJk3quX9%2Fp%2FyT2WQ9eecxzd5wcWI07WZha67LeoqguPNBHT0rlnZF3e1rfMtKQft2mUAuJouB4SB6LJyWsWR14SSfUAq38mSi%2FRC5yGaK86kBGFRIKXfJz9%2FsYkvJeFSi8EcZ5YhIghuhFLuJHgfxlB%2Fo9FG3AaQHHepxTukxLfvkcrVFxR%2Fez9k4IkMKH%2B8imWSh1VPf6qTiNwH3531G07NGJ9fsh5t0RhapsPUeCJ0GputczWPPwfANsbCtXHVZe5XXwJTnFrXEcava%2BaskrJUYqhdjkrI%2F2Z4ipauDErIc2iDyCiZ7nxcuzhRq2cnJ5Ch%2B6Vsl4qbyeJqJNQrZfsu1wRUMq67xYjYlDmVNA8er%2FfVk1aM3eCwOPj38aLKQP5IwwKfwJL1u%2FoGvjyNMWXyRJlcy0m0d%2Be%2BnA5vUlIPA7j62evc5Z2%2BbQMcw9Q2mU3JHJuruoZ1%2FZWyogLK60fGyhj%2BJFzFIYDDE21IFGcTcA7roBvwOB6fB2jlv8ZSUBIsZ8zHBrB0tmXeONwx%2FchL6x7k5qAvhSmI8Tc53y8K8yZ%2BuJgMqxXsF%2BuhriiRIrP%2F%2FRXk9hryR5cyXTGYK8fFn2cJdPYZaxVGVMOry%2BrwGOqUB8EjiCMV4zqp4dl0Pxm%2BCPQDT1tMlyoMgPdM1P2y76v1FliCAAvwjeuK8H1WLOSe0XxSMl6HfJ43uioGSJooBM%2FOse%2BvZOH%2Fd1u2%2Bg6YPCId6dBwFPeferVU1VyI%2FUsKngxkbgphg0g1o6v3p4eiPanBGvJU4aen87myGSPtv%2F%2FQsdwO5g%2F096DKSPy7sDVhE1ENhj3D4%2F01Suybev4LmEuXqVnU5&X-Amz-Signature=73382d6c87d15149ed1ba0a440d0739ee5312e19c02398ec1a4e61bb65b4d1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTO7TG5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxO9fHFidSDYyeaC2YGauc68G7pAryRAsgxySA%2B8FbgIgNSmfZIMc0Ldhaa01nbanR%2BE7PKit1T%2BGGYmaY29bajwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfsJektJdyr21d4XyrcA8aYjrLKgxio98buaWI0aDsDJk3quX9%2Fp%2FyT2WQ9eecxzd5wcWI07WZha67LeoqguPNBHT0rlnZF3e1rfMtKQft2mUAuJouB4SB6LJyWsWR14SSfUAq38mSi%2FRC5yGaK86kBGFRIKXfJz9%2FsYkvJeFSi8EcZ5YhIghuhFLuJHgfxlB%2Fo9FG3AaQHHepxTukxLfvkcrVFxR%2Fez9k4IkMKH%2B8imWSh1VPf6qTiNwH3531G07NGJ9fsh5t0RhapsPUeCJ0GputczWPPwfANsbCtXHVZe5XXwJTnFrXEcava%2BaskrJUYqhdjkrI%2F2Z4ipauDErIc2iDyCiZ7nxcuzhRq2cnJ5Ch%2B6Vsl4qbyeJqJNQrZfsu1wRUMq67xYjYlDmVNA8er%2FfVk1aM3eCwOPj38aLKQP5IwwKfwJL1u%2FoGvjyNMWXyRJlcy0m0d%2Be%2BnA5vUlIPA7j62evc5Z2%2BbQMcw9Q2mU3JHJuruoZ1%2FZWyogLK60fGyhj%2BJFzFIYDDE21IFGcTcA7roBvwOB6fB2jlv8ZSUBIsZ8zHBrB0tmXeONwx%2FchL6x7k5qAvhSmI8Tc53y8K8yZ%2BuJgMqxXsF%2BuhriiRIrP%2F%2FRXk9hryR5cyXTGYK8fFn2cJdPYZaxVGVMOry%2BrwGOqUB8EjiCMV4zqp4dl0Pxm%2BCPQDT1tMlyoMgPdM1P2y76v1FliCAAvwjeuK8H1WLOSe0XxSMl6HfJ43uioGSJooBM%2FOse%2BvZOH%2Fd1u2%2Bg6YPCId6dBwFPeferVU1VyI%2FUsKngxkbgphg0g1o6v3p4eiPanBGvJU4aen87myGSPtv%2F%2FQsdwO5g%2F096DKSPy7sDVhE1ENhj3D4%2F01Suybev4LmEuXqVnU5&X-Amz-Signature=94a844b62e44f2e611b6ba4dab6aadb024a3e1d8d66eb946ceca6b9966de3649&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJSDWWLU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgc4MVg6tDu1Zgu%2B8DjdoqfIxHmA2FTeLgwjh0flJQFAiBFTgkpO3jtoqoG5tNijLbSsB87O%2F8rP6DlbavduPG%2FOiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ht6V2nT3PKUcMjTKtwDxGdTI8gO8%2BrvQkXvgJGViGGnVtMUs1vHMP5LN3RkrlG2CulH8F8TLLxm5%2FJrbaUmNz1z7zE%2FPfDgHpHUrCtoCOyD8k6nwq8J1zrGiMvEhetxMfsjzsELL6uXOMGi7eWhk92PtCh1bVNfSpIFyWjj87gxM7txljiBmeDTTWJzGKvAT4mCxgGc4uxJih8jo1tWMNxVbokfYsYL0txfUm3gKDaOMaN5k06FSLXJ5O1FguP%2FWhzH140lGcXQf4Fk5m9SowFPHMzFscsK%2BKKcUqpKgmyNdWArJ5J56qAC7mLPYSsRSaWi0Vl3OeIhyWZMSFyZjTdeEJWjGgwp8ox2LIJ3Jv5e86Fb2qu%2F8TTZm88brr%2BT6c6J2Ry6Tifr41qkb3LZ7CSqPepD8c56XbiX7ectUdcmrNum%2BIZ0FPoxUhbk1ZMxHdDokh%2FjR%2Fh%2FqpBQWy%2B4Mx1ErFM65tpR3pOvkO6ve59dPw%2BRLhfMfkH5tWVV6YF913hc59hfwYLMVYVAXIInmqe0jWPgTIu4Hzq1AQu%2F3kL9UcCRSqRDLKa2jwHOV%2FIM4uktxqyvXq2dajblOEwOfzoxzgz7qrE6ZZrSCsGNGUiYuqFFN1NHdQfyVXFn6uccOi7%2Bd3%2Fv3MoHiIswkPP6vAY6pgEX%2FvdG3VHlQLD1DfMzCK68RVfZHMnfbu0cp97hrsYx%2Bvd7ZtPfZ3eU1JF%2Floj5m%2FBsBVgroeQHGHJs%2FMBdrXHrQdoZwj79oAhTNapJTnNtuuec7P9TDocBRWEV1wlBVsiLmOTz7XtvgzXMtNppMWO7A%2Bwf6tbFGh%2FV7vh2On4p6HfvHBTnUmgquULZsXHttVG0pR%2FaaGS0UokN2m5WoFkoUnTGCCxZ&X-Amz-Signature=0b36b4c56e2eb44b822f506d9ac44683564c23e569e04f0697ba09503bc013cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSQGEKI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7%2FaweaExG%2Fo1izTg5XoSJ4jcnXUusTyXhILnZ4CTQ%2FAIhAKef4CM5rrGFoQIr7CQND2qvN15rHRtzofQpXchMLkrQKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMTGOlbfHY03Pkgscq3ANZ7RPCPtjgzP038mI%2FDeSh%2Fm%2BBj2figW06K3nw%2FslEzhgOUeiziVqnCro%2BgOjAs7Z5gGVcDwpSYt%2BUbBZ2MSPtDbjIJGDOtusJ5ujC07E1k%2FpGfhZV%2Bh%2FatbEkEfkPbCN0aOQS4GvaEQzAszbjajzFAahXIX3PvTjA%2FSOdhEfTnXnAMQqClhOwGrGSTJJYN0GqY3HYk9QakNO7I8yF8CJ4wQfyo8tqnSLW2tojW%2FV7lz8zM65z%2B%2FOXK1mQPDX0QezA%2BAUThltrr4aJPP4rVCu1JjYke9CqMH3lLnAbX%2BTdGSQRMzrRYFWxKdbEP6GLIXYW0K%2BeYIsomqozvW2bJyXzAbqCbualhfMBdpttEXeWfduzUaf%2Fo7VREvJhi%2FX0Ax8LPFlsni9Pbbm7VSrlfDwgB1pkuOOvBygUJQ1JUdXthIS%2BEiSL0x2RBsg0Md4JRpbUSBgi4vFss26JkXLSavCmSxEp3t4klKZyfZf06I2JBoYpS8Qz2SJxKpif4dTwFFWfVxcjILe%2FQjrwaxg14umL5bWg%2BhUuo%2FmNFlLjufYYgu5GU4g6wcv3dYBtJ8Fzq56NG52T5gDbrZMYbl%2BWZmv5dnFzhA5SGnrrYnwDDKpAhKgRizgZJYVrC17f3DDw8vq8BjqkAS8j5FENe6rdUxgKm3xeHNQcjBLZHmq0s9xpdGYJ68ifv1xjgvWkwHDESFet7Lk8sRU3i6M2w9bnb0nWhpWhcfeCa2mq5xTCqMGyjnBskTqHLH0JxZG7LPUSoAOrFaj6tvWvYDZi%2BJsJ7T91E6Vzf%2FK%2BrDxPwB8runNpS53PzQmoseUknsWrRu9KT2fJuYOuqrb5CQxaxlWy87t%2Fn9InqIee0fDh&X-Amz-Signature=b84eb4ef404b0787c75a3194cf263751a43bfff41492d964aeefebc00eb0fafb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTO7TG5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxO9fHFidSDYyeaC2YGauc68G7pAryRAsgxySA%2B8FbgIgNSmfZIMc0Ldhaa01nbanR%2BE7PKit1T%2BGGYmaY29bajwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfsJektJdyr21d4XyrcA8aYjrLKgxio98buaWI0aDsDJk3quX9%2Fp%2FyT2WQ9eecxzd5wcWI07WZha67LeoqguPNBHT0rlnZF3e1rfMtKQft2mUAuJouB4SB6LJyWsWR14SSfUAq38mSi%2FRC5yGaK86kBGFRIKXfJz9%2FsYkvJeFSi8EcZ5YhIghuhFLuJHgfxlB%2Fo9FG3AaQHHepxTukxLfvkcrVFxR%2Fez9k4IkMKH%2B8imWSh1VPf6qTiNwH3531G07NGJ9fsh5t0RhapsPUeCJ0GputczWPPwfANsbCtXHVZe5XXwJTnFrXEcava%2BaskrJUYqhdjkrI%2F2Z4ipauDErIc2iDyCiZ7nxcuzhRq2cnJ5Ch%2B6Vsl4qbyeJqJNQrZfsu1wRUMq67xYjYlDmVNA8er%2FfVk1aM3eCwOPj38aLKQP5IwwKfwJL1u%2FoGvjyNMWXyRJlcy0m0d%2Be%2BnA5vUlIPA7j62evc5Z2%2BbQMcw9Q2mU3JHJuruoZ1%2FZWyogLK60fGyhj%2BJFzFIYDDE21IFGcTcA7roBvwOB6fB2jlv8ZSUBIsZ8zHBrB0tmXeONwx%2FchL6x7k5qAvhSmI8Tc53y8K8yZ%2BuJgMqxXsF%2BuhriiRIrP%2F%2FRXk9hryR5cyXTGYK8fFn2cJdPYZaxVGVMOry%2BrwGOqUB8EjiCMV4zqp4dl0Pxm%2BCPQDT1tMlyoMgPdM1P2y76v1FliCAAvwjeuK8H1WLOSe0XxSMl6HfJ43uioGSJooBM%2FOse%2BvZOH%2Fd1u2%2Bg6YPCId6dBwFPeferVU1VyI%2FUsKngxkbgphg0g1o6v3p4eiPanBGvJU4aen87myGSPtv%2F%2FQsdwO5g%2F096DKSPy7sDVhE1ENhj3D4%2F01Suybev4LmEuXqVnU5&X-Amz-Signature=eeb28c9bf6adf9e0114e3d2746fbff3be70847f0993f85236dc51bbe19ef7a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
