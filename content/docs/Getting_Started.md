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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6LLAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPauc89o3Nl%2FRiuJEAbCP2KjBMuhKwBbEcNzJKth0%2BUgIhAMvkR8pWLBD0kybagEPUF00PwlefIyDtCmeZSdlrDxiNKv8DCDUQABoMNjM3NDIzMTgzODA1Igwa2aeOpyKvo6qK%2B%2Bwq3AO4QRmQkLxpt4T3bDhJu%2BEmOWwfNLgXr84xKZiNMS6nm5mV6gyUqTfkMr7CMz2uisWdulPdaN8hrm15V8eq2LOLMacE4KXK%2B%2BTJwpAIkbvvEQ828hs%2BuxxDIsJj6amJfEsaHLhjZPlK0szZgmzjogtuX4EFuaAYOHHPmwY4z6jOUQUYusRtLBF6zyn0wxWqawdlpp11SMjuWZsei7wWWOUCVNvNk69d2%2Bke%2BquXC2C%2B6kaYd7bmkz3SyHc1tbHXXg4h9%2FM8V1t8bjaQI2XbhNRa6BtXj3aZpaBpIMm%2FeG3L3E5j4YG6e0457%2Ba4rLhByTVNYeoYj1%2FKUGhpwaq7I0GjkRwxd4KEudm%2BIazWWEU3cITLKhd0glHDKhvyAMQDrCVXAiOj%2B20jhesCBJBOQH%2BHAfkdBW7RtpIFZaDKjjXdca%2F1sJioTyBQisJYaqF%2FSaZE3fQjsPxQ%2FJpZXTDx9f58k6R8HLaMZKqyiyiMvLqk9ZqBLrr%2Fv%2FGaEtPhhAbeDdNm3zSpevDjCn3Rc3GaJFxYjsINDo%2FOOZNNoH%2F1PimeAzOyY73sUK%2B%2F1kxXhAGYGx2yByyjh8wIBr2KkxgwEJ%2B8sM0DaIcsZQgWkuPzfUEQXjSDxOKnv52savmqXTCD3Ny%2BBjqkARNGgMCbFVjo1kMbG6vyGWDt81Igni4EBt4wHhM2%2FtIebXVRduMdE23DXcJ0PnPqgMoZeO44ZMKbE06z79hmbxpRODdR5wTZCJtJqWkd0cCeF76oi8BRqLU361uDKNBVvG03UDFDrTnSrjvhF%2BDnT6WeC%2FjawHmO5ZWL8jJSpC3Rl%2FsB1yelY3V6urZUfuJN5ELNywyFQwR4h7BE1%2FqA6V%2FReZLP&X-Amz-Signature=654df6a8c1c985759e9cd495733254c639bc29ce63ad5c204cca5923f6ec51f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6LLAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPauc89o3Nl%2FRiuJEAbCP2KjBMuhKwBbEcNzJKth0%2BUgIhAMvkR8pWLBD0kybagEPUF00PwlefIyDtCmeZSdlrDxiNKv8DCDUQABoMNjM3NDIzMTgzODA1Igwa2aeOpyKvo6qK%2B%2Bwq3AO4QRmQkLxpt4T3bDhJu%2BEmOWwfNLgXr84xKZiNMS6nm5mV6gyUqTfkMr7CMz2uisWdulPdaN8hrm15V8eq2LOLMacE4KXK%2B%2BTJwpAIkbvvEQ828hs%2BuxxDIsJj6amJfEsaHLhjZPlK0szZgmzjogtuX4EFuaAYOHHPmwY4z6jOUQUYusRtLBF6zyn0wxWqawdlpp11SMjuWZsei7wWWOUCVNvNk69d2%2Bke%2BquXC2C%2B6kaYd7bmkz3SyHc1tbHXXg4h9%2FM8V1t8bjaQI2XbhNRa6BtXj3aZpaBpIMm%2FeG3L3E5j4YG6e0457%2Ba4rLhByTVNYeoYj1%2FKUGhpwaq7I0GjkRwxd4KEudm%2BIazWWEU3cITLKhd0glHDKhvyAMQDrCVXAiOj%2B20jhesCBJBOQH%2BHAfkdBW7RtpIFZaDKjjXdca%2F1sJioTyBQisJYaqF%2FSaZE3fQjsPxQ%2FJpZXTDx9f58k6R8HLaMZKqyiyiMvLqk9ZqBLrr%2Fv%2FGaEtPhhAbeDdNm3zSpevDjCn3Rc3GaJFxYjsINDo%2FOOZNNoH%2F1PimeAzOyY73sUK%2B%2F1kxXhAGYGx2yByyjh8wIBr2KkxgwEJ%2B8sM0DaIcsZQgWkuPzfUEQXjSDxOKnv52savmqXTCD3Ny%2BBjqkARNGgMCbFVjo1kMbG6vyGWDt81Igni4EBt4wHhM2%2FtIebXVRduMdE23DXcJ0PnPqgMoZeO44ZMKbE06z79hmbxpRODdR5wTZCJtJqWkd0cCeF76oi8BRqLU361uDKNBVvG03UDFDrTnSrjvhF%2BDnT6WeC%2FjawHmO5ZWL8jJSpC3Rl%2FsB1yelY3V6urZUfuJN5ELNywyFQwR4h7BE1%2FqA6V%2FReZLP&X-Amz-Signature=fb8c0780b327ec8a125f2a22ac41444961d67eac6304a1cb6dc0149e0ce8eb22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6AHKAM4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC14GbEy4hoVAyA87RzuknVLVLFMMS06ND6iZEU8AD46gIgRF8uHD8o1kyWc%2FA0PSjQMXUtgbYUlohZsLT5EB5SP2Yq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCWyZ%2BbJY9eZjS5LrCrcA%2FfKgo6HFeVH%2BAR1i1f6codGyFeF9rIMVHIPUDL0ijKhz5%2FIHN6MKVM6AbNStGZ460QKYuUcL0Hc0dQ%2Bsew2chZHO9KesNBm2uPl6TEnXMSUynQ7QVc6HJbM4U95T8SMGBEXZR7dSUia%2F4p%2FiuneAI0lXWB6eorm352KfP0qnClDnHkvwYddHHy0Mj3j5%2BqwfTFvxhH63NWL9F0UHGi6rN6070jyz%2FDTrQiv3Vcv3WWSIl5Fn%2FspMRDOyU097c%2Bvja%2B3z4mC5aeShPzSS%2F3Xo0BaHYCpBCzV6a9gHbRZ1zgA1RTEkkvP%2B19qcMlyjmFXC0Hh%2ByuJgd2su4YHwyEXYvx0v9s6KI6lF3pXp48hHQ66Mhbhob8r0ouArWaYigt91%2FuVWD19hy8FQTlZNuk92eH85yhRHsAYwQlBMLyWtw0D6rI0D7wc8T9BaCmAmsrn%2BRm5otc2vw4vQu0iUCkxbQnrUZhGC0DUG%2BGJN%2BWXuExcqFjeEVHVc9PrXA%2BY9iwHnGfP%2BbEz9Dhd02j2F6s1xgQMYUITOc6ygmR0RSIAjSfMFaGzqthe9YnyGi%2F%2BzJhsmTtBoVvxbA2ioCvQBwRlOjXTA0UTLhi2SsrbL7a4SDpfT3MyR5k%2B4r0TXV7HMK3c3L4GOqUB8ztsxhIxwyRhqg7gJ92f%2B4STXmtY3ypSILnw5QxzbMwbIeWyVviPDxzjgHfVCfIaX%2BPJ2TwKcRopdDMSvJuHQ1mN%2BJXhWjGQI6Lle17zCyeCeBq8zELOVBYSHg7Ui1okvwlnvVISy3NDGZJTVNpa8dKcyUfwG2bjArv5wb%2B2kOhn%2FNa6ee71JSAcuhpYA4T3kEuPiO6%2Fwl0syRyHlmjjalIgA9yT&X-Amz-Signature=498ff5af1a75dec354d909b1fde36784074580a9bcb1f52e88908bbd45837d36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=90e6bd75d2e52b760555b2789d5cac825dc6e2e3bede46dd90563d053096e649&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC6LLAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPauc89o3Nl%2FRiuJEAbCP2KjBMuhKwBbEcNzJKth0%2BUgIhAMvkR8pWLBD0kybagEPUF00PwlefIyDtCmeZSdlrDxiNKv8DCDUQABoMNjM3NDIzMTgzODA1Igwa2aeOpyKvo6qK%2B%2Bwq3AO4QRmQkLxpt4T3bDhJu%2BEmOWwfNLgXr84xKZiNMS6nm5mV6gyUqTfkMr7CMz2uisWdulPdaN8hrm15V8eq2LOLMacE4KXK%2B%2BTJwpAIkbvvEQ828hs%2BuxxDIsJj6amJfEsaHLhjZPlK0szZgmzjogtuX4EFuaAYOHHPmwY4z6jOUQUYusRtLBF6zyn0wxWqawdlpp11SMjuWZsei7wWWOUCVNvNk69d2%2Bke%2BquXC2C%2B6kaYd7bmkz3SyHc1tbHXXg4h9%2FM8V1t8bjaQI2XbhNRa6BtXj3aZpaBpIMm%2FeG3L3E5j4YG6e0457%2Ba4rLhByTVNYeoYj1%2FKUGhpwaq7I0GjkRwxd4KEudm%2BIazWWEU3cITLKhd0glHDKhvyAMQDrCVXAiOj%2B20jhesCBJBOQH%2BHAfkdBW7RtpIFZaDKjjXdca%2F1sJioTyBQisJYaqF%2FSaZE3fQjsPxQ%2FJpZXTDx9f58k6R8HLaMZKqyiyiMvLqk9ZqBLrr%2Fv%2FGaEtPhhAbeDdNm3zSpevDjCn3Rc3GaJFxYjsINDo%2FOOZNNoH%2F1PimeAzOyY73sUK%2B%2F1kxXhAGYGx2yByyjh8wIBr2KkxgwEJ%2B8sM0DaIcsZQgWkuPzfUEQXjSDxOKnv52savmqXTCD3Ny%2BBjqkARNGgMCbFVjo1kMbG6vyGWDt81Igni4EBt4wHhM2%2FtIebXVRduMdE23DXcJ0PnPqgMoZeO44ZMKbE06z79hmbxpRODdR5wTZCJtJqWkd0cCeF76oi8BRqLU361uDKNBVvG03UDFDrTnSrjvhF%2BDnT6WeC%2FjawHmO5ZWL8jJSpC3Rl%2FsB1yelY3V6urZUfuJN5ELNywyFQwR4h7BE1%2FqA6V%2FReZLP&X-Amz-Signature=bbcc1fcd355bd49628a6dda22b0294e9905335868aefd9c6fd7fcb967583f9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
