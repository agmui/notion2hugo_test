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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETUPPUC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvLk0WiUDL5lX9uIhDxb7m2jEsyfnjYrfBoAJyO%2Bb6SAiEAtUezKx2E7bhAF40bn19pjf0O1Eu7OvQ51e8y6nON5sUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFCj5%2FbisiGbTjs6dircA3B76oCZnbJDeqRYwNi1OX3MBJa0llIn8CrsOkbdq13S4c5BT2IH%2BuP2buBJ5HKfumBxbKmsP4ymp3POa4DJ0NRpEUw32qPqx%2F4g2%2F4wsVQeFSwZXyAYEMsSA89NrYuaqoE7ngmAtSspr%2FPvHYjdcH6KS%2BpXZW4jKtrYTkbjv%2B6YXV7vfo7EkniPxWXmUg69j%2B8lsOVRiZmYkqbzZ0tvHdRORHinX%2F13%2BguIWvTaqWXCuSVpRXWOaEcqMu4vp%2Fennv8jNtFhP%2BUXZlL7gcVo4vcyPyIjUtEF1CUKrEXGO1HVgJKodwk9N%2F7tCWf6y3NgTL3n1T0wENUWP8vENPNU%2FO23c2lfkQjzl7GVkc80alq%2BIt5tW1JhxelLTy1BGYEQDtXuUC12F12pU5OkeHwcMNtHMs4UHmQ09oVVgkEC0kaS2VIj9921wjBXP%2F7IMnixqKqxQqkqR7WZPDwATzRrrGiN%2BjwabWVMWlF9B8blxpQH1rnXu%2F7tDA0C42C%2FrTs9Vu1Du4obJn9wlhnkAMfnPrLiWl5RrJqY%2Foe%2BQTM6gJapt9GF2h%2BckMmhErQ%2BGbOnYIGL0O6CA1tBKWAnDeWEyLf6tIsdGrY1BeT%2FzRlh%2Ffa11219Aqsn43I9PvzdMP7WvsAGOqUBS1o32vGoL8EW8ddZ7ScACAeHmJEXeUycW8iKX62SToUHqUtjJSnzYG%2FFL%2Bw6NHcATWRTz2NYBKxcU9BNhZlMZCRz45d0DYk6BhwXaGQZer8%2FkAtOinU8AYNw0owOwuMw0B%2FalAOvLOG6v2lBhaAwFzJegoJqKP25H2dac5hrfL0K8LZMbNv1lwlkZBbDwv%2FntOAtiH8ccdx6W8%2Br8P1BpfOTTsvc&X-Amz-Signature=2e7677cc84e7ac7c14d173d7fec7432090ff771eb3dcea9612dc857367a96ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETUPPUC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvLk0WiUDL5lX9uIhDxb7m2jEsyfnjYrfBoAJyO%2Bb6SAiEAtUezKx2E7bhAF40bn19pjf0O1Eu7OvQ51e8y6nON5sUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFCj5%2FbisiGbTjs6dircA3B76oCZnbJDeqRYwNi1OX3MBJa0llIn8CrsOkbdq13S4c5BT2IH%2BuP2buBJ5HKfumBxbKmsP4ymp3POa4DJ0NRpEUw32qPqx%2F4g2%2F4wsVQeFSwZXyAYEMsSA89NrYuaqoE7ngmAtSspr%2FPvHYjdcH6KS%2BpXZW4jKtrYTkbjv%2B6YXV7vfo7EkniPxWXmUg69j%2B8lsOVRiZmYkqbzZ0tvHdRORHinX%2F13%2BguIWvTaqWXCuSVpRXWOaEcqMu4vp%2Fennv8jNtFhP%2BUXZlL7gcVo4vcyPyIjUtEF1CUKrEXGO1HVgJKodwk9N%2F7tCWf6y3NgTL3n1T0wENUWP8vENPNU%2FO23c2lfkQjzl7GVkc80alq%2BIt5tW1JhxelLTy1BGYEQDtXuUC12F12pU5OkeHwcMNtHMs4UHmQ09oVVgkEC0kaS2VIj9921wjBXP%2F7IMnixqKqxQqkqR7WZPDwATzRrrGiN%2BjwabWVMWlF9B8blxpQH1rnXu%2F7tDA0C42C%2FrTs9Vu1Du4obJn9wlhnkAMfnPrLiWl5RrJqY%2Foe%2BQTM6gJapt9GF2h%2BckMmhErQ%2BGbOnYIGL0O6CA1tBKWAnDeWEyLf6tIsdGrY1BeT%2FzRlh%2Ffa11219Aqsn43I9PvzdMP7WvsAGOqUBS1o32vGoL8EW8ddZ7ScACAeHmJEXeUycW8iKX62SToUHqUtjJSnzYG%2FFL%2Bw6NHcATWRTz2NYBKxcU9BNhZlMZCRz45d0DYk6BhwXaGQZer8%2FkAtOinU8AYNw0owOwuMw0B%2FalAOvLOG6v2lBhaAwFzJegoJqKP25H2dac5hrfL0K8LZMbNv1lwlkZBbDwv%2FntOAtiH8ccdx6W8%2Br8P1BpfOTTsvc&X-Amz-Signature=671d510bd97863f0f0aba062d2d5628e865293022221bea1912b7b1a3cead79e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAVRMD5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BnnuH%2FA0ltPvzUi5KY0SQVJOjmsbZRIwAOjCLK2RPAiEA3j9%2FXB2eeVcfm8KWKpIkXw94NLoJUavYDwGa8FOjztUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOQiblatWmkprShp6yrcAwOAT66WrvGYGST%2Bl%2BQd%2F1uoWvejfoRlA8%2BLCPc78twNqq4oHsNfFOznoWcxD2FtslPAjaJc6KxEtutfLTbjMkBD7H1Hx%2F%2Fn1PyhTnCyd5v4BGlAgurtfnpJyMdxNTKD2eKF8tUxIZoFzid3M4kXDko%2FJ%2BpXFcCi80t7gZ6%2Fe%2FNe2hFVHxF00oDlhlJGYPghRlM6hMQD%2FThtkDmKUeIC4fvNT4gA%2BVkT0bFdelLbLv%2B6JY5K9RiJGO9QZ%2FD3GTbJSBPzgob%2BZKD5eAeJz6H2t7tfjaPXYVy4knFQykpJ3MdVONidHB30JEjJ92qYAvWZ4%2BDakXfyALaDRd0AXMTfkvfzYpEfmO4TYRfw0s6LFU646%2BtW8mveo78%2FxPGGq2TiSPe1nWsllHyAovwymP21C7i5MRcADUAC2NvabyhxhvNMQcFyMew09GkmF7BdsL2BLy953kvJKT5ADi7SJMRHtGOnM8uQNnD0Vex8TAXqCr2LVsRz1rXs%2FFst9%2FGSHdPgts7h32FIus6F%2BAP6eOV4u1PXy7BziXS33pPxilPNDj3izlfZrTk1wdP7VN0u2E2lwyPmrLGenHXTgKhrgzJleia0R9hFmPLyZgwrFZhqHezn7Z03%2FfXJtPyyZ%2FV4MNPWvsAGOqUBFNe2GkgtlZbBV%2FOypCcSBrCYlnn32FmPQxlmPWARvrsTxGyyEZLAW2S6Igf6BvfgQhITI3JG4Oc8U0Pa9qdpNOMmyzCZqufAgsaeuqeN3g3qnZf8ksrz75R%2Ff3NAchan3AcCRtm%2FJayPKFAKAej%2B48dw4HBxUbdl5%2BbRuBLVrZc6FthzwT06b%2BjlpSOfRW%2FjWeqms62OgpMR0kw2Ew0fPYxlpGvq&X-Amz-Signature=487fb772b24a863404d468ad219d02eba326c407a53006073a633348d136496e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NMBIAD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoRsyzpVzGgKZNIgZoDzzcjvHcmdmrNM2WRVK%2F5A6cAIhAJvF7Y1OvlT8QjQocCdSOZ2diJBwgDgRTA3DmlQJO5jBKv8DCHkQABoMNjM3NDIzMTgzODA1Igz3OV4lRAHTd9fUDcEq3ANXDJavn6UYa9073FdgQaibWUASRGg62QsECx8B0vZqpqVJ7rHYc%2FKAOjTdnt8sul%2FGiCtapJwlU6DvG46G7ebyxObsi77opASON2fiY2XMr97nt6Ju%2B1JoqhiQqya30JLNdj8W0n9maHb%2BdiOj1CGXWm07TcQPucMMDHe%2BX4kgG2scA25m72l9zgJa2wXh48GuR9o8DZIUvK9CYf6a6u%2FAFqkD%2FiCAlA2sIIBr6TPIJQdyhbXJwV2pohwgvHxoPq5tgvVmfw8pYYUE4sSELD9UhV0gcTyzM5UZPqqVSxdaIlTc6ZL%2B4kuS7XRAPhoSvzERelEp2oIUf0KlX4uGuDBbWDrj50JzDXhKemw8BDCQbjZ7XkBaE9cP9yffGDgrfe%2BB6bgOebSvzwqMOzOsAdCKOOZOtsDFnHp6BErYv%2BlU9jKff8p9uuUKFeyhvoGLustnW%2B2QAJUfjhrfNm4lERzh1USec%2BbXHSQiSTUHVMcGLbl1xh6qf9HaCIWogKxDC9Oyyb9sCC5U7THqDEeYGRPBxSSaa7zJUN%2F%2FzTkNwMa86aykzqEjabRQWkV%2BA3cmF9bMEpnlxjKPJbbvjWpaz4aDf%2FGMLg1RkI%2FPXMUYyZ7j%2FNsrVc8P8rqdrRCQujCT177ABjqkAemkltQFNdJzj3Zshc38w6wNQdLLWqh3pNkC2dgYWccuKvJ86iP9FXUT3Jm5qs2u7JB6dggbg%2FxK3dmoMoWaL2tRNpP3U87VhQZplV3KBzDA%2BMys1b2BaYn4nPiG6aSc3smBJ3A0Dgib3EE%2Fc4lW2by6iSG%2B5%2BmQeJjscwJ2Ie7GgW2wwJnFq6nEtqx8iB6Ah6fx7kqfUd2dJY%2F1t4%2B5CS2wGK4S&X-Amz-Signature=700619fa5bb798441ac190aa8e3aa285877270b764674ac6a62660a92d03671a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETUPPUC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvLk0WiUDL5lX9uIhDxb7m2jEsyfnjYrfBoAJyO%2Bb6SAiEAtUezKx2E7bhAF40bn19pjf0O1Eu7OvQ51e8y6nON5sUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFCj5%2FbisiGbTjs6dircA3B76oCZnbJDeqRYwNi1OX3MBJa0llIn8CrsOkbdq13S4c5BT2IH%2BuP2buBJ5HKfumBxbKmsP4ymp3POa4DJ0NRpEUw32qPqx%2F4g2%2F4wsVQeFSwZXyAYEMsSA89NrYuaqoE7ngmAtSspr%2FPvHYjdcH6KS%2BpXZW4jKtrYTkbjv%2B6YXV7vfo7EkniPxWXmUg69j%2B8lsOVRiZmYkqbzZ0tvHdRORHinX%2F13%2BguIWvTaqWXCuSVpRXWOaEcqMu4vp%2Fennv8jNtFhP%2BUXZlL7gcVo4vcyPyIjUtEF1CUKrEXGO1HVgJKodwk9N%2F7tCWf6y3NgTL3n1T0wENUWP8vENPNU%2FO23c2lfkQjzl7GVkc80alq%2BIt5tW1JhxelLTy1BGYEQDtXuUC12F12pU5OkeHwcMNtHMs4UHmQ09oVVgkEC0kaS2VIj9921wjBXP%2F7IMnixqKqxQqkqR7WZPDwATzRrrGiN%2BjwabWVMWlF9B8blxpQH1rnXu%2F7tDA0C42C%2FrTs9Vu1Du4obJn9wlhnkAMfnPrLiWl5RrJqY%2Foe%2BQTM6gJapt9GF2h%2BckMmhErQ%2BGbOnYIGL0O6CA1tBKWAnDeWEyLf6tIsdGrY1BeT%2FzRlh%2Ffa11219Aqsn43I9PvzdMP7WvsAGOqUBS1o32vGoL8EW8ddZ7ScACAeHmJEXeUycW8iKX62SToUHqUtjJSnzYG%2FFL%2Bw6NHcATWRTz2NYBKxcU9BNhZlMZCRz45d0DYk6BhwXaGQZer8%2FkAtOinU8AYNw0owOwuMw0B%2FalAOvLOG6v2lBhaAwFzJegoJqKP25H2dac5hrfL0K8LZMbNv1lwlkZBbDwv%2FntOAtiH8ccdx6W8%2Br8P1BpfOTTsvc&X-Amz-Signature=0dc6afff8d5f3857346d160b249d23a4d96a02c70e7103b8bc78bc1e887899e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
