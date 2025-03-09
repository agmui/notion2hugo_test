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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM3YMBX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDxWJ68%2FSRwoyh8zv0sh7iKB%2FBxBX591F2E06L4YQ5RywIgYoZg%2Fd5ruZs1BFbHzdt%2FACVWpS%2FtvroZRqwK5N1qV6Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDApTyAVRxDyBiOzMQCrcA%2FFqrkvWX4bSeh%2FWWK7cjtM3HUTpK4MOph0ueFZz6WGKS0vscBhxOWMqnS99EzVIoynRzwMEbdSKLhArEk6u4s57nNigBUBAMkq6%2BZsBG%2BcvEEKghADkehVVkyTI7qe8t1ifltfssamox6aLUt4LxFbF6zo%2BK8hfcUHOoEuqM2CWA3HLyAIVfIgRKATN%2F5AHJJnNZTTVwSze36s4jgKCbT2HSHQRDDEGK9rv0gtaf54QKv4%2BB%2BX9aYrrHOcvP9MqeQbicmLQLQUPeSem0Y%2FtcN6omiU0aLMjnF824beRieciN4Zf5Z5x9pmSbjtaqjEf60RbN%2FyL84tMJWPV91W%2BoyCxx4p2phqMojZcXK0yRKqnHPCLfIhCxM65gPr13WrAmMXb0bEGXMoy5hHGpyCnH9IkBZnDJxObwIMPKGBUUITRzCIRbz6RxN%2FaGFS9JQMvv3Q%2B7kccC4B5EjwpePeF2vv%2BCC%2B0CodD%2B0FJQsFya%2BrIBRXVjicZljm6a5g0gnadnrXd6tEtLn7cWVD7OUxdbzaVSoslQUPYvRLRvbh5FjMRDEa0FnyaVImfOIx5hAOOpbh5b2dLDJt7K7NNz%2BpMr%2BuHm%2FC1VkQDk594uBHGmwqRQWZdgt5DUpeTuw3pMKzrtL4GOqUB8sJLROxLZ8gO4GBP0SfQxMNNRY%2FPDw7oz2HvmDLGaKpvuj%2BTXq9l9Qd%2BHQ7kmZNK5hN8O81rrkV32pGIL9o1Ctl1549Bfw0T9dkEkHVlNwnA%2B5hXTKL1ALQ2pYpTvS%2BN1rzPmrMaJUFVX%2FsT5O37jkuDy8ckAIKpBUNJ%2FX8awKORYG4PLBWwfmKLUzKv2xXYwHPBeA2S%2FYLHxB%2BoZzVs%2B1suSqLJ&X-Amz-Signature=ed697a740f776b2cc33ae39c374a23ab3b6b930e9fa9b6770c7723ef44d083ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM3YMBX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDxWJ68%2FSRwoyh8zv0sh7iKB%2FBxBX591F2E06L4YQ5RywIgYoZg%2Fd5ruZs1BFbHzdt%2FACVWpS%2FtvroZRqwK5N1qV6Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDApTyAVRxDyBiOzMQCrcA%2FFqrkvWX4bSeh%2FWWK7cjtM3HUTpK4MOph0ueFZz6WGKS0vscBhxOWMqnS99EzVIoynRzwMEbdSKLhArEk6u4s57nNigBUBAMkq6%2BZsBG%2BcvEEKghADkehVVkyTI7qe8t1ifltfssamox6aLUt4LxFbF6zo%2BK8hfcUHOoEuqM2CWA3HLyAIVfIgRKATN%2F5AHJJnNZTTVwSze36s4jgKCbT2HSHQRDDEGK9rv0gtaf54QKv4%2BB%2BX9aYrrHOcvP9MqeQbicmLQLQUPeSem0Y%2FtcN6omiU0aLMjnF824beRieciN4Zf5Z5x9pmSbjtaqjEf60RbN%2FyL84tMJWPV91W%2BoyCxx4p2phqMojZcXK0yRKqnHPCLfIhCxM65gPr13WrAmMXb0bEGXMoy5hHGpyCnH9IkBZnDJxObwIMPKGBUUITRzCIRbz6RxN%2FaGFS9JQMvv3Q%2B7kccC4B5EjwpePeF2vv%2BCC%2B0CodD%2B0FJQsFya%2BrIBRXVjicZljm6a5g0gnadnrXd6tEtLn7cWVD7OUxdbzaVSoslQUPYvRLRvbh5FjMRDEa0FnyaVImfOIx5hAOOpbh5b2dLDJt7K7NNz%2BpMr%2BuHm%2FC1VkQDk594uBHGmwqRQWZdgt5DUpeTuw3pMKzrtL4GOqUB8sJLROxLZ8gO4GBP0SfQxMNNRY%2FPDw7oz2HvmDLGaKpvuj%2BTXq9l9Qd%2BHQ7kmZNK5hN8O81rrkV32pGIL9o1Ctl1549Bfw0T9dkEkHVlNwnA%2B5hXTKL1ALQ2pYpTvS%2BN1rzPmrMaJUFVX%2FsT5O37jkuDy8ckAIKpBUNJ%2FX8awKORYG4PLBWwfmKLUzKv2xXYwHPBeA2S%2FYLHxB%2BoZzVs%2B1suSqLJ&X-Amz-Signature=07b21182f6d658e689aa56f516f092a9d213a78ddcca58ea03abd0349ce95928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYAMIGQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbtH654qeXOtHVKIypgTTAKwsebFIg4UJGu0I1WjrwJwIhANOEagUvjAC20cQR2BzfY3um%2BnWT0dPq6PJeD%2FFRbEzOKv8DCHAQABoMNjM3NDIzMTgzODA1Igz6k64H8ocn8neQwdwq3APtaSwcDQ9st7z3cbKtlfBFMgRr3kn2DRmv3scKEfDdXk1Lq8DgCSio2FUFuT52k2bej2yaPAl2l7YoI5DX6A%2FfZ90B4H2juo90CEH0XrZUq5aCJCUA9Av%2BK%2Bjkf%2B6UOlzqQb1xdnuV2mbxD6YxcHDdvRqLAzq30lr%2Fji5xwq0cdDKeIr0gm8jjeicL%2F%2FDIgxl6vvaNdXvLVWdNFp%2BiV9zC5E9rUBOJQaXZc9%2FyrRmc5al3O3n09fr7QtN80KXHDE%2FwbZzlbShW41jv5sC8%2BAuVK0BdJ%2BjqORRVdcqORZt4DfGfFLB%2B7FQ8hV1t%2B47RAhk2i%2Fxv9FkbOYYEjwIdxYDaMihythoDhm94I3XHEYL20quU48tvwub22VzPhpU738praHYFYevGjy8dV3poHh4d6sDwIuvBCwPdHwZnxK5WyJEdklorvn3%2BpBoxJfj8HXGVEeHf1AE75tFHRPimS10QWJTiR7CiB2tFiyaOlEN7EnC%2Fc6f4wBf8rTgds4suFpmF%2F8THGTqY%2FmEIhcqwPmcEVlnYKsc2FN5CvmDLq3nLpqBVHgvgyDfrF9Z%2FTHgWTawPKeLsRgQyEGc%2F4T1FJpfGIZfQ94o8q%2F8dMqQkotCBetn4ckyFGmvTyr0J%2FTCf67S%2BBjqkAXWIm2qDGK5f%2BL%2BQdDF9Nw5nKzyO64iCjatYzmoegBbPKiZ9sQIae7YVlBxqzRsX8DAwJzYy1YcqoIosmbpvquycbiOtb9cpt6U64EWjRnoXTg%2F%2BhtmaaPQ2bV7cJ0mzZV3KgFzxUk%2BvUQzwSdD2%2FiZqGG%2FXY1N9gqzgZHn%2BvYq7%2FHb%2FOUN4HNO1ZMRws4EcC0aizx7j3vFN07IKVAdA0hbdh9RL&X-Amz-Signature=27af98cbe9a5a8a678b3e6c0f596fe2feb9c343995fa42443602d0bdc522664a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUHIJYE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDr0J30Hb23FBwAsktopjL%2FUknlVh0q3uG9G%2F7EiOEYkQIhAIY9j52NeG8SBJvWTzYBUocr%2BVjbC7P%2BdEv3lIxXGSL9Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwGA9q%2BxfoQIc1BVtgq3ANwYMZrDZYKpZBmQ6v1IYzsi8VVRyCjbyts9FRC8h4%2FIxg1gacT65pna8qU1wI4k%2BhziR07h8TPskQ0%2FGVBJKI0D47Xa1zr36Ag7UUVaV6Olsd7bdgD5NhYLKmxFO1ssw8pNJajlskP7lvlb%2FqGRx5fg7iZUKzqoK7kGa%2FWfit%2BjJZ2R2iZajsxYjaJ3xIiCcT6kQG5ZpTBYdrA1ZjQqNdFJeocWo9UxU%2B21OP7oVMUSwRDXIi7nbsuvQiGNLUaxnOxs2HN0O5B8gwCdKrGZo4AIb1ft0mHxRLdNH%2FFSIhlEjS1oQqiNKLUXZath7JXiq3wTG6xAUBhv%2F3IpPDxnorWhElaXUFWWwIBJTKtyGDe93YOsWrhJ4ILc9cp1Nv%2FGAOD3yWfeLJ6itDMFUoq4MXsyCnUPe40HARPWcT3bPF%2BawRrK4yQvN7wjgZuwZ%2FJRblmO5M7DPhWGjqPwGq3IcrD%2B5%2FguhQd9jju57F0Twei%2BtGRlp25cYv2vxqsLzAL1bPyvo28WewG6xwlsFlkW41MPjwK9GmHzshqn7HbILD5HtEwptfIkWggkmE2woXIPfr8Y6%2BUNxzp0MBd5Ja2wbJp37fzqkO%2BugwEGWWCZ%2FqqRbLXdeiypXSeQz6qxDDy67S%2BBjqkAWR%2BAOXI%2FNBaw1J7%2BvJIvpT8%2FG52wayz%2F4O0wK3476Ohu%2BnM4E3AGC6JNkaB8hfx7VTm777DqKEPx22bTx1IM4whg1R7yJ07hKaLBJuaSrzvc%2BqldJheGKNJASJ02K9ErcRSCAoPGOLIigJ0PdEZRsMkTYGtXDxjjHnLtE3BTpxB0ycRiSHAzMUQi0EPQqdcqoY7d2Drwy9jzxjJcOlI8QlF6BXn&X-Amz-Signature=31d84c1e8819ab11361622cfb97936903c8c1c89e7f1bce93d64ad0b480aba04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM3YMBX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDxWJ68%2FSRwoyh8zv0sh7iKB%2FBxBX591F2E06L4YQ5RywIgYoZg%2Fd5ruZs1BFbHzdt%2FACVWpS%2FtvroZRqwK5N1qV6Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDApTyAVRxDyBiOzMQCrcA%2FFqrkvWX4bSeh%2FWWK7cjtM3HUTpK4MOph0ueFZz6WGKS0vscBhxOWMqnS99EzVIoynRzwMEbdSKLhArEk6u4s57nNigBUBAMkq6%2BZsBG%2BcvEEKghADkehVVkyTI7qe8t1ifltfssamox6aLUt4LxFbF6zo%2BK8hfcUHOoEuqM2CWA3HLyAIVfIgRKATN%2F5AHJJnNZTTVwSze36s4jgKCbT2HSHQRDDEGK9rv0gtaf54QKv4%2BB%2BX9aYrrHOcvP9MqeQbicmLQLQUPeSem0Y%2FtcN6omiU0aLMjnF824beRieciN4Zf5Z5x9pmSbjtaqjEf60RbN%2FyL84tMJWPV91W%2BoyCxx4p2phqMojZcXK0yRKqnHPCLfIhCxM65gPr13WrAmMXb0bEGXMoy5hHGpyCnH9IkBZnDJxObwIMPKGBUUITRzCIRbz6RxN%2FaGFS9JQMvv3Q%2B7kccC4B5EjwpePeF2vv%2BCC%2B0CodD%2B0FJQsFya%2BrIBRXVjicZljm6a5g0gnadnrXd6tEtLn7cWVD7OUxdbzaVSoslQUPYvRLRvbh5FjMRDEa0FnyaVImfOIx5hAOOpbh5b2dLDJt7K7NNz%2BpMr%2BuHm%2FC1VkQDk594uBHGmwqRQWZdgt5DUpeTuw3pMKzrtL4GOqUB8sJLROxLZ8gO4GBP0SfQxMNNRY%2FPDw7oz2HvmDLGaKpvuj%2BTXq9l9Qd%2BHQ7kmZNK5hN8O81rrkV32pGIL9o1Ctl1549Bfw0T9dkEkHVlNwnA%2B5hXTKL1ALQ2pYpTvS%2BN1rzPmrMaJUFVX%2FsT5O37jkuDy8ckAIKpBUNJ%2FX8awKORYG4PLBWwfmKLUzKv2xXYwHPBeA2S%2FYLHxB%2BoZzVs%2B1suSqLJ&X-Amz-Signature=09b28b70adc6e9c4ce02c1ef3c3adff33e5d996f78a8a6fa621551c45d6ba892&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
