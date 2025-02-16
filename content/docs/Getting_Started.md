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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CG3JGI7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCVSeNuBjuag1dcJRgGdQur9RKERxjKzR3n4bWZvZf3GwIhAKlI2O60%2BU93s6ti4b1Ick7XV93cRn82eY9tn5zqAmu1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igyr9iAhQFjEKXUBP9Mq3APqx94%2FttokkbbC933LWsuJ5Dst9WbZuhdkRu%2BeL7ehnfBK39WzJyMy77WNCNC2lCaFFIIkEqvUgQV%2BgmmwqhZAs%2Bxwo9JLXpZHhpk26ewm1pdF8AzA12nUfklcrx3sQfoCLC1qApgLavFG9kj2M1o9OFEaP3uT4h07X7XUd%2BUAt60EjbrVNykGckwWnbnLhr3l7WILIn1n8bQiR2h4JNPYOQHx0CZ1jJ0Aop%2FvihL89cZ4avwew4MsHAZQuxfM7WkiibKHL8sEYc1T2A%2BNGW3vq87hLKTemzd3Ty2xiqXilRHK0AQIrTDgupxTHCxPVdogEwqMRwWifZkKtP7LV8kUj%2BAaM8NCW4IGjTzqf%2FTVO2x4KXNjf6%2F2LQdeNaFhNVSJRc%2BlRTMgyFnNOq8knVPS5JGz4RcZPrpfWwgMGBtcQLBJ%2B%2BHHnfVC5jQACchIv5m5s7UW%2BrWV3yyiliqzXvL7MGZCI3KlBrV%2BGnsxu8sC7KA1L1lSP6osC1ZCbZc3JLVEQJEkSxRgDtzBpuo3I%2F1ia3VwcvpIdTgxtOJU03T0ZQFOUQA3xLJOlFbyiwKRZBUXqlpNPsEY0OtkUNcYyd8kS68%2FleNotPFQm3d%2BWhRwZI2mvp9foA%2FtCfnhyjC6%2FsW9BjqkAdvS29kgygi0DTXSWmYvDubip6AkkaGCe1JrMKwsCDFg512SUpH4BzO9KMwyG6ISJxPDk98uBH2o4in%2FbZcUzwhMWJhmYzPsKEQq25ZBRr3eOcyDofRrjvxJ9FmS70R%2B92ddp4tqiAq9lwnNJXEsPVeV4rShPv5sKr4ZG%2F5rl2JawEvxyBDoFJx0Wj40n4tEDKOE9eU76T4m3o714mE9WcaHi%2BBG&X-Amz-Signature=3a51b37ed7d56b79f3f7a6b4810bbc2638b7c42d60192f51e45d58657b42be39&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CG3JGI7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCVSeNuBjuag1dcJRgGdQur9RKERxjKzR3n4bWZvZf3GwIhAKlI2O60%2BU93s6ti4b1Ick7XV93cRn82eY9tn5zqAmu1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igyr9iAhQFjEKXUBP9Mq3APqx94%2FttokkbbC933LWsuJ5Dst9WbZuhdkRu%2BeL7ehnfBK39WzJyMy77WNCNC2lCaFFIIkEqvUgQV%2BgmmwqhZAs%2Bxwo9JLXpZHhpk26ewm1pdF8AzA12nUfklcrx3sQfoCLC1qApgLavFG9kj2M1o9OFEaP3uT4h07X7XUd%2BUAt60EjbrVNykGckwWnbnLhr3l7WILIn1n8bQiR2h4JNPYOQHx0CZ1jJ0Aop%2FvihL89cZ4avwew4MsHAZQuxfM7WkiibKHL8sEYc1T2A%2BNGW3vq87hLKTemzd3Ty2xiqXilRHK0AQIrTDgupxTHCxPVdogEwqMRwWifZkKtP7LV8kUj%2BAaM8NCW4IGjTzqf%2FTVO2x4KXNjf6%2F2LQdeNaFhNVSJRc%2BlRTMgyFnNOq8knVPS5JGz4RcZPrpfWwgMGBtcQLBJ%2B%2BHHnfVC5jQACchIv5m5s7UW%2BrWV3yyiliqzXvL7MGZCI3KlBrV%2BGnsxu8sC7KA1L1lSP6osC1ZCbZc3JLVEQJEkSxRgDtzBpuo3I%2F1ia3VwcvpIdTgxtOJU03T0ZQFOUQA3xLJOlFbyiwKRZBUXqlpNPsEY0OtkUNcYyd8kS68%2FleNotPFQm3d%2BWhRwZI2mvp9foA%2FtCfnhyjC6%2FsW9BjqkAdvS29kgygi0DTXSWmYvDubip6AkkaGCe1JrMKwsCDFg512SUpH4BzO9KMwyG6ISJxPDk98uBH2o4in%2FbZcUzwhMWJhmYzPsKEQq25ZBRr3eOcyDofRrjvxJ9FmS70R%2B92ddp4tqiAq9lwnNJXEsPVeV4rShPv5sKr4ZG%2F5rl2JawEvxyBDoFJx0Wj40n4tEDKOE9eU76T4m3o714mE9WcaHi%2BBG&X-Amz-Signature=631bc8d3ff831a19c06537f266e919300575b952f79cda807ca9fee13dc25121&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623SWP32J%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDSPPka0IE5QGT9hdxMNvfRUjzhuRvhpwNbZ%2BDbqD6U6wIgYJTNMKjsj5Rn2SObSf6leqN2hRnyw9AAJ%2F7Tvgbhd1wq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHyKe3djwc%2FfG0UVoyrcA%2Bb8iWqBoAXnSsrWsQbMza70ax%2FNtSs8AghT5Q0Ar6YstCmFzA3De6%2BmIPtafJLY7DSrMRk1alnc4KRBlRYkku%2BpedaMcAJ2ggHBDjFWsyYcrBP7xN4Q89bCyMHBcJQgNyG6LMkNrLAf1uDEEt4%2Fsal1KLNKMaWNgBWoGfjOoHQkzxzBFDx1k2AcEWB1AbttjsWyfuQzCxeyma9ffRTunoptxyXSoNBpRFl3BksWN6bRKD0%2Beetvplw06cqNlQFZ4yvzPUTE4h9ilFJpb8niNNFDv92SpbiZ%2BwcZ1qyShL6Q0lkRklgK0Zn7EgAt%2F4mMVbtOzgE%2BsINDX0mLAToMJzokswHhh2lObIwdBBucblpqKz%2F5vv14oqCJo0J3ZEmXxsOUH2mg0jy5agYPbXm%2BMwCP1EmdbK7oPEfUbQexO1Y4QJRWDLyWjVh23pqxVTot26lpKiqnoZgJVsTn7cf15zSmwXv0QPpidfN15tX2uf4eHFnIdo%2BNg3uHI8d74cBqaZZyrZ8J0fum82n5jw8FCDm8DMjbdY%2BnobGfDr1FgEFkeBkiGIRxy1ZZ%2B6taotkCqDDWS3q%2FNyj2bZEUEPM7rLahT5zCism4bqRiM1ue8Cje0BVIo%2BHkZKf8eBgbMJ7%2Bxb0GOqUBOrySVWqfxyWz4qP7cJuF41jJHiEqJB17ng50AqSeBI0JOnonJ0c1X9S%2F8zVTzDN3DwRryyITbrUDYx9ZntCfQC09%2FwijRpZwAXrmqOiiiNybd%2FmSQASSLfJD70lOAGE94gNV0Beg1ty98UIR%2BoImALJgWT7wZeo2Fba0KstMmMoTCCi1dsoepcB6qSDVRcHaqrUtedn0f9d4PEkLuhUyj%2FGh%2FmgR&X-Amz-Signature=6083ecc688f597bfb6d6bba79c12560cd9cecc96fe15aec31abfa72e8d8d7a00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSIZQZP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEjb5ocvL3vf6LXq4ZD6xcE0%2BWtccPOtVXIXiLpFAWMJAiBv3%2BwmcVBpAXQ94MEkMLp8j9UE%2BVx8DcBtCj3F4%2BxdTCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMnYQtah92tK59KZeYKtwDvYe65XhWNb8WBWAxY035eSpSaZg6N3bWAM132dq%2BYhFjZsPw6bVx6hYd1vjVefDM67EXFFl%2F5neNo3xnXYA6AQd0mEmBEqn4ZfSOMR4i411IFfokXXMwuC1tLwEKFn7%2B7n4jmUsV8tiR5kTMSRKXk%2FmxbPoyXJRcly5e4IwrhFdlvyh9nP3OdNCPIw3trX%2FsmcXocJlpgt%2BzOhUVaKX4m0NjgMUINsFlVF54uNZr%2FZ7J49ElBYFBe9TL15llLIVgvF9SV83fDybxBvi%2FF0oV%2FkGW1I38e80jNmNeOy3FJi3CNxPjdPE9Aj5bSu0%2BzdSdLEfLlxjFMyCEtOY6QqRgUSTGHLoQhQZQXy3wmwlmeO74ZlQq2Jck2rmypdKi0qWhTV0JiMMl5ZO2ndXngUcM%2Fu4p95YW4RS%2BbET3g1hs94PGmctylGpUpqPxbyZPyrlTIAO18HaYfxSTk9qW96WD0CaGLi0nWfkv3%2FpPt4%2BO2OFiZWyP7blSpBUhGTUqN6Pup44fDgdeM1gzHnobHpLhwqRr1uic7BF6Ow4IlzgDivGSZQgFjL%2B7zi%2BAh4vsV6HDWq43bK3xSL9ocoEAVyKpKV%2BeBeGud6yzA4myu9KzVd5csJgb5yF50o%2FjN5kwjf7FvQY6pgHzm6rkGntHH4vqaHK2DvxHfkJCpSaZ4Uix4v44qBAvYydUncwGBaMt5iKSQGDz3biCCNsXB7lm8sXiAiNw1%2FCxa6QoKAqk9vRVBfgaoM0rXo8HsAjvf5bW2uv26kNzV7FzfDogJgq8iOxV2HYY2EEwsXrMM8EDv8OZiSN7bz132PWcAx2KuH51nPgbs53pF5DgRyOFgefsxZxsioqTdazsVMe2vsr%2F&X-Amz-Signature=400ded071affe19d2ff70bfd3a63906b0d23cefd2817ec2ed95c9906c13e6398&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CG3JGI7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCVSeNuBjuag1dcJRgGdQur9RKERxjKzR3n4bWZvZf3GwIhAKlI2O60%2BU93s6ti4b1Ick7XV93cRn82eY9tn5zqAmu1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igyr9iAhQFjEKXUBP9Mq3APqx94%2FttokkbbC933LWsuJ5Dst9WbZuhdkRu%2BeL7ehnfBK39WzJyMy77WNCNC2lCaFFIIkEqvUgQV%2BgmmwqhZAs%2Bxwo9JLXpZHhpk26ewm1pdF8AzA12nUfklcrx3sQfoCLC1qApgLavFG9kj2M1o9OFEaP3uT4h07X7XUd%2BUAt60EjbrVNykGckwWnbnLhr3l7WILIn1n8bQiR2h4JNPYOQHx0CZ1jJ0Aop%2FvihL89cZ4avwew4MsHAZQuxfM7WkiibKHL8sEYc1T2A%2BNGW3vq87hLKTemzd3Ty2xiqXilRHK0AQIrTDgupxTHCxPVdogEwqMRwWifZkKtP7LV8kUj%2BAaM8NCW4IGjTzqf%2FTVO2x4KXNjf6%2F2LQdeNaFhNVSJRc%2BlRTMgyFnNOq8knVPS5JGz4RcZPrpfWwgMGBtcQLBJ%2B%2BHHnfVC5jQACchIv5m5s7UW%2BrWV3yyiliqzXvL7MGZCI3KlBrV%2BGnsxu8sC7KA1L1lSP6osC1ZCbZc3JLVEQJEkSxRgDtzBpuo3I%2F1ia3VwcvpIdTgxtOJU03T0ZQFOUQA3xLJOlFbyiwKRZBUXqlpNPsEY0OtkUNcYyd8kS68%2FleNotPFQm3d%2BWhRwZI2mvp9foA%2FtCfnhyjC6%2FsW9BjqkAdvS29kgygi0DTXSWmYvDubip6AkkaGCe1JrMKwsCDFg512SUpH4BzO9KMwyG6ISJxPDk98uBH2o4in%2FbZcUzwhMWJhmYzPsKEQq25ZBRr3eOcyDofRrjvxJ9FmS70R%2B92ddp4tqiAq9lwnNJXEsPVeV4rShPv5sKr4ZG%2F5rl2JawEvxyBDoFJx0Wj40n4tEDKOE9eU76T4m3o714mE9WcaHi%2BBG&X-Amz-Signature=10e68353180665acc66b41432afa9e8be56907de35b5b5babbc29c14b7b6fb47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
