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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDJE3JN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIATS129V8EJsYKP0DM82txD79jh88oRFF34hcMon0HCAAiAiIpsIFSR92zXgQPGMuRT8Y82Wt7cS%2B5I51Xd0fH%2BNJiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc4DD9jVzCxOaLZX4KtwDnwOw8iVitShdMMFcuOotD2iNCmRnFfeHwCjSyhwoRbR2Q1sH%2FOfpafcWybJFTGNMYywL1r2SycrV0FFiGCWFBnI2gb041uiRsiOhdqiNA0hUbUe4NxBGlFN2pAIrd3yS%2F9iWZnV9P75%2BJR96489msdorcFR1Cmx5bZ8Qc6le6K6bRqHLH80WmyvSwf8ZB6YxNKFo2b1GiOomGHfxTMrvMSmNPc0GELUo6ABbMxRq5GJrgIElF49kZjL0hGfX86R20vQw3jccy%2B%2FLK%2FTQDCfPRcPExApL4L59TcqOn0ENJ7N6SA0MTvxv4tZuuncyP%2BSO%2F04b8XIY4oJbb5nd4fbMFBVxhAYmPLR1Zx1WSOOCEM74ZtYTMcS7fkzjy4KhOex3wdXJXGDpfmuoP9i0MAnt2cJNS44DWQj%2F%2FSoEgMGNywYCFJhJn8CvjvOwZG%2BtI1TfNQmi%2FsyEVADN3J3%2BIMAYUmAz9uZEIbAAiIp36%2BBCZx%2Bn51q1seX3wOfe8ridb%2BhZ1ZkWWlc8Bai9eU68Xh2SRZ3c3LSZPvSw4shh6C37qKCXfgusNvleKMzbwCkWmhN1UTlzr6B4DP6BC9hRyn3Z75pOvvowUhEHuJB76mumJoLnpMX81W042qWMZ%2F4wyam7vgY6pgH18H%2BqzlcDd4JWJj3dRgEoRg3xZR%2Bn1g7o1HJmm9RLdC8L28a9tFm%2B%2F1ONNYz5wDGzDmO9fw8WM3fhKQRqLoJ0bSyNFe4uv%2FKI5Xh%2B63p%2FA%2Fg4jttT2G81L8vQRxtGpSJxOTxtLyHRTbkhpGIE6Tw3Oqy6T7i5V%2FYXJYdys3mzxofmJwuv2nVbkHAqWavC2b06UNep5B3N1VhhjzGLCogf2ULOgtkr&X-Amz-Signature=4cb13e2c9da6670fc292a3a563a887f06a4ff15ab81c97a2137c36931e0867b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDJE3JN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIATS129V8EJsYKP0DM82txD79jh88oRFF34hcMon0HCAAiAiIpsIFSR92zXgQPGMuRT8Y82Wt7cS%2B5I51Xd0fH%2BNJiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc4DD9jVzCxOaLZX4KtwDnwOw8iVitShdMMFcuOotD2iNCmRnFfeHwCjSyhwoRbR2Q1sH%2FOfpafcWybJFTGNMYywL1r2SycrV0FFiGCWFBnI2gb041uiRsiOhdqiNA0hUbUe4NxBGlFN2pAIrd3yS%2F9iWZnV9P75%2BJR96489msdorcFR1Cmx5bZ8Qc6le6K6bRqHLH80WmyvSwf8ZB6YxNKFo2b1GiOomGHfxTMrvMSmNPc0GELUo6ABbMxRq5GJrgIElF49kZjL0hGfX86R20vQw3jccy%2B%2FLK%2FTQDCfPRcPExApL4L59TcqOn0ENJ7N6SA0MTvxv4tZuuncyP%2BSO%2F04b8XIY4oJbb5nd4fbMFBVxhAYmPLR1Zx1WSOOCEM74ZtYTMcS7fkzjy4KhOex3wdXJXGDpfmuoP9i0MAnt2cJNS44DWQj%2F%2FSoEgMGNywYCFJhJn8CvjvOwZG%2BtI1TfNQmi%2FsyEVADN3J3%2BIMAYUmAz9uZEIbAAiIp36%2BBCZx%2Bn51q1seX3wOfe8ridb%2BhZ1ZkWWlc8Bai9eU68Xh2SRZ3c3LSZPvSw4shh6C37qKCXfgusNvleKMzbwCkWmhN1UTlzr6B4DP6BC9hRyn3Z75pOvvowUhEHuJB76mumJoLnpMX81W042qWMZ%2F4wyam7vgY6pgH18H%2BqzlcDd4JWJj3dRgEoRg3xZR%2Bn1g7o1HJmm9RLdC8L28a9tFm%2B%2F1ONNYz5wDGzDmO9fw8WM3fhKQRqLoJ0bSyNFe4uv%2FKI5Xh%2B63p%2FA%2Fg4jttT2G81L8vQRxtGpSJxOTxtLyHRTbkhpGIE6Tw3Oqy6T7i5V%2FYXJYdys3mzxofmJwuv2nVbkHAqWavC2b06UNep5B3N1VhhjzGLCogf2ULOgtkr&X-Amz-Signature=feb8e37338105f76c5f92432bd981ccde2c9a55a5284b48f1b38c83c2eeca9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBODMG2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDXHXt%2Fi%2FGcooU%2BlHBDUrQCOlwDJwy3YPCD8BZlnR%2BaRQIgU8DFF7FTvTKDJxZmQHJ5QoCYo%2BlVRhNzlIjmcmfx6hkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2sck5WF9fV4T7lkyrcA8tFF6Xk1H%2FLcOFB1yzALEbB952mJopBcG%2FxGQ3qmfr112xNgo5waQRWUF%2B8GVsWQYGLPuHC6WFJSjWoZ6LKw05e9RHObrqLCb2SBOsmVjKLRfC4F8b0McjdFcnLsKaSW95LJCFOygpzw7N7sexzPmXZ0QrjVFtF4QufWRD9feNfPApS7TUMZ5ukzXSmOxQgodLyuq8E5GNcj%2BjR7meHwwD4%2BUHvPJfG0e15OzXwN%2BwzRDHLgfBzPeGipYDfSc6ymB5wFbq%2BtvMz7Eu7dFcRa8vpwQIb4MIflMD%2FubYqtTouYzX5a%2Bp8XuOF%2Bg2PBwerK22%2F8SX3WjL0LXPbdKplSJHBH%2BSniSiQi%2BOfxierXHVgeN31ZyD5VhxhqT7o8sIjGREMGzlq%2BtUI0zapP7%2B5ePw6oDueeTNK5%2BMxmB2KBYPnLsCjH5RFg9hx6FC92vP8DW7BJTnUKXwNW2GD72Tbvmfns7%2FVKjY6SsoWsx7XAI63ObUQEUQBZO8%2BRtpxYpFXJzIJ%2FCMuhCGEBDB%2F3S8ol9Lr3CUKt3hv3m4dZu%2B3yhkmFSRCnHTYeIjhTo6p4pbay6UstEicVnzr7jk0DDwh0EA50waATCC342xwD4zQhSZZyjKh%2Fd97Oyz9P317MMOpu74GOqUBk3V%2FP5YKVFe3xkDd4FhWHw9zMhw5lbXEBa2QYCk0IxCqRqUl3IvGzb8UFhejRImVrf0uRsBSP%2BBdazJV%2Fk3%2BHqciiNCdplMnU30yvGUVWyhr%2BqieVsrbkt0hzh%2B%2BRxwF8jq8voum%2BkyEXIF1Mfs%2FncBSgUawXWFeypIHKEHHu60S0wvZOhvCLN6PhrJMo4vptCINi%2Fn2WCvCg9M3QxJQ9CQH8eTo&X-Amz-Signature=ac9465314dbdfd5b251d7c3c06fa0719f740dbd79137246e293c9b005f768d61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SVJRE7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCy%2BtZGPdP9b%2F1e9dNAsTV7WtiQSGLGgGtJN6NuPj0vtgIhAKvgi3exvThZxYo4ydVyKLu2RqGqYwfpp2qrKFvMBVJuKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcIn0hZs5kC1ogUSAq3APJdZmdP7LndA0zd7SftHWM4tgfddq0Uj4JBktW9Cy%2BRSdyP300FZP6dYTh2iutstiLTmqbT9jq9Td5BzJf66t4bujqPmJ%2FGuab9cJd4BTn09v88xrB5FlCnimFS7Ty%2BQp8x3ZrH%2BRo4oIELz268Jhyd36miailB5TWU5XdLrilACmqUw5fDtHJynSM7%2B0PqyUuS9y%2BW3lpkvGNndw78BUTDSqCFjTu6BOS9I%2BGqJvMg18obpgqzNVK4tCNS8FlzFAIZyQCo0xmKnENRWCQBdIs8UXMkFui%2BZOCel8Nlkmh5xMpIqTxEoR8FJ1YKupiEzHDBlD4Gnwz8uBUBlBudj4QB20VGd%2B63U7zfUIvHc9bv38NIoil0lqhnbVErjq%2FPt4K0cpyShRefSN%2F112NplpbIahklwrMsYgnZkU26oFGTiFE0NCUlzR70%2F6NU%2FOmqf2H276NI2BKZ12FjxTvfRvHwM3e%2FaVW52S47KUfPREmLOJF4ns9UNCdopB6lv%2BG1Kx6S%2BhJZvBlrKxgEQN9iOHZKHCGrbMVcFuKSrCHLj1IUh4WKrS7xr8TPW6eCNoiRTGFsadyXg9rpcXVkG1nzml8USfcHTFIeL6DVmyKrz1qsDuRm1Z9EVqhUfeJeTD6qbu%2BBjqkAWaSJ1jwbZhZFtw7mKe6RhxJYlT6Y9UHEunUz%2BK9W1xM1l7iLQHX5Ezdty%2F2xSb%2FKMqW0TGAiGRDBmwQiulp1MvnzZ2maYCW9jaBr7t5EGKpWnuPJKd%2Fzy4vu9rzvKFKbcnPbsZNvMJOd%2FyIU7K8rIIGu7xZ4Lufrr1nb3z0VYHjSUJ2FSlB9i47xaVNU4hzuy85htXPvVRRHeuZUHiy3KSFyhkf&X-Amz-Signature=583ab7c2b0e9c58bfc2d25a7013153d564b351b297de8c9536a88d8444096a33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDJE3JN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIATS129V8EJsYKP0DM82txD79jh88oRFF34hcMon0HCAAiAiIpsIFSR92zXgQPGMuRT8Y82Wt7cS%2B5I51Xd0fH%2BNJiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc4DD9jVzCxOaLZX4KtwDnwOw8iVitShdMMFcuOotD2iNCmRnFfeHwCjSyhwoRbR2Q1sH%2FOfpafcWybJFTGNMYywL1r2SycrV0FFiGCWFBnI2gb041uiRsiOhdqiNA0hUbUe4NxBGlFN2pAIrd3yS%2F9iWZnV9P75%2BJR96489msdorcFR1Cmx5bZ8Qc6le6K6bRqHLH80WmyvSwf8ZB6YxNKFo2b1GiOomGHfxTMrvMSmNPc0GELUo6ABbMxRq5GJrgIElF49kZjL0hGfX86R20vQw3jccy%2B%2FLK%2FTQDCfPRcPExApL4L59TcqOn0ENJ7N6SA0MTvxv4tZuuncyP%2BSO%2F04b8XIY4oJbb5nd4fbMFBVxhAYmPLR1Zx1WSOOCEM74ZtYTMcS7fkzjy4KhOex3wdXJXGDpfmuoP9i0MAnt2cJNS44DWQj%2F%2FSoEgMGNywYCFJhJn8CvjvOwZG%2BtI1TfNQmi%2FsyEVADN3J3%2BIMAYUmAz9uZEIbAAiIp36%2BBCZx%2Bn51q1seX3wOfe8ridb%2BhZ1ZkWWlc8Bai9eU68Xh2SRZ3c3LSZPvSw4shh6C37qKCXfgusNvleKMzbwCkWmhN1UTlzr6B4DP6BC9hRyn3Z75pOvvowUhEHuJB76mumJoLnpMX81W042qWMZ%2F4wyam7vgY6pgH18H%2BqzlcDd4JWJj3dRgEoRg3xZR%2Bn1g7o1HJmm9RLdC8L28a9tFm%2B%2F1ONNYz5wDGzDmO9fw8WM3fhKQRqLoJ0bSyNFe4uv%2FKI5Xh%2B63p%2FA%2Fg4jttT2G81L8vQRxtGpSJxOTxtLyHRTbkhpGIE6Tw3Oqy6T7i5V%2FYXJYdys3mzxofmJwuv2nVbkHAqWavC2b06UNep5B3N1VhhjzGLCogf2ULOgtkr&X-Amz-Signature=f10da2eedce7cc0984c36e8cd88392d37328f10056c2fbca24477aec701f10a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
