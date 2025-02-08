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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INU23V7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBrfEuwSKVNy9R1bN7r1BsQEcDKs%2FcR%2FIPKPxi%2B3V%2B4fAiEA3bwfJrFRzeJN%2F87%2BXO94x%2FwlVVhsqs4d6rsoFUxcrE0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT5ftIw4UGQ0BvQfircAxlzYLF8ByZZg6X1%2FwoAzmj7H7sCVOd4NUd2WuFFB%2BqSOK8eH7BVZgu%2Bn%2Fgh1Mma20c9L7Lrm6yN5lx0ZTCT65d15yHLGqGTOpdqvvbqYx0dnx6OKjthAxdcB2pjgAkoxz3NGMLb5UiDbnAdvQYgoAmD6h6Hxq60OQjsbkVisOrwM9cbFeBCOPp6ba00BII%2BVzFD5yHFbTwhcScGoRNRYislNCKsCiB8AmGgXQcqHJ8hdUUYsWmZVtohNDKPCIKvwSkRElak%2B2CjHuXjL%2FQNt3IrB7Ev%2F8rqxabsCOjTlKRTqXQ1qGDRpTGOR2RwL4dwS0FlXfCP5MoMvoFOb8c%2FHk4KYP05oj9Sug7dFYc0zShaI%2B7s9T5lXRrFA%2FPsFJcGi6WDS3UMF3UZUow2QZGlcqP%2FuDoQPtSNRjKglBCq2dTxSkxWcndkemOZqSMiU%2Bq%2FqdICWknyZdP2pqm8PjxRAOqyeLBALKRsRnzwrLzYeLq7R%2ByDFys%2BmTrMmHozARY5Cu9RUYgB%2BGmTM%2FMlpJTjEZrIHeLYNkHXC2gISHDGLCbO%2FaFW%2BbVjdCfK1CHSkGVZH%2FWcXUISg8jXHQyXQth7w40GuyiqRL5S1E7uq3KJhFmqCw9CHuwdo7EIi2qLMPSYn70GOqUBHTgwkuxcu7AcryD3AHo%2F55X0Tvh6VpNoHG6BClEMjUfrFqQJkTUzIEEI0O8v0Zl21e3la9gTFvWHhVpy1r%2Fs2RLa2yFKbZwvNMhacIl6yuA5F8D5VZCBWo19knZXHg7h1XuNS6B1uwAdowx4LHfzhNlrVWmcKjmGM07S8nCQr%2BU1KXua1cygOFY0wXRnelwu4PBmX%2FjdL2ywlademHM0QmGVGnVx&X-Amz-Signature=2487134bddaa00cacaf4aa49020226f6d2368579e8cc0496291c2cee58a36f76&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INU23V7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBrfEuwSKVNy9R1bN7r1BsQEcDKs%2FcR%2FIPKPxi%2B3V%2B4fAiEA3bwfJrFRzeJN%2F87%2BXO94x%2FwlVVhsqs4d6rsoFUxcrE0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT5ftIw4UGQ0BvQfircAxlzYLF8ByZZg6X1%2FwoAzmj7H7sCVOd4NUd2WuFFB%2BqSOK8eH7BVZgu%2Bn%2Fgh1Mma20c9L7Lrm6yN5lx0ZTCT65d15yHLGqGTOpdqvvbqYx0dnx6OKjthAxdcB2pjgAkoxz3NGMLb5UiDbnAdvQYgoAmD6h6Hxq60OQjsbkVisOrwM9cbFeBCOPp6ba00BII%2BVzFD5yHFbTwhcScGoRNRYislNCKsCiB8AmGgXQcqHJ8hdUUYsWmZVtohNDKPCIKvwSkRElak%2B2CjHuXjL%2FQNt3IrB7Ev%2F8rqxabsCOjTlKRTqXQ1qGDRpTGOR2RwL4dwS0FlXfCP5MoMvoFOb8c%2FHk4KYP05oj9Sug7dFYc0zShaI%2B7s9T5lXRrFA%2FPsFJcGi6WDS3UMF3UZUow2QZGlcqP%2FuDoQPtSNRjKglBCq2dTxSkxWcndkemOZqSMiU%2Bq%2FqdICWknyZdP2pqm8PjxRAOqyeLBALKRsRnzwrLzYeLq7R%2ByDFys%2BmTrMmHozARY5Cu9RUYgB%2BGmTM%2FMlpJTjEZrIHeLYNkHXC2gISHDGLCbO%2FaFW%2BbVjdCfK1CHSkGVZH%2FWcXUISg8jXHQyXQth7w40GuyiqRL5S1E7uq3KJhFmqCw9CHuwdo7EIi2qLMPSYn70GOqUBHTgwkuxcu7AcryD3AHo%2F55X0Tvh6VpNoHG6BClEMjUfrFqQJkTUzIEEI0O8v0Zl21e3la9gTFvWHhVpy1r%2Fs2RLa2yFKbZwvNMhacIl6yuA5F8D5VZCBWo19knZXHg7h1XuNS6B1uwAdowx4LHfzhNlrVWmcKjmGM07S8nCQr%2BU1KXua1cygOFY0wXRnelwu4PBmX%2FjdL2ywlademHM0QmGVGnVx&X-Amz-Signature=c1bbb9595fee36dde217f183d029c5ba4d9fbb1b589f5d9763dec0898ee6b27f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5ETZ6F%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFJRB9GMOTaaSb9x6klAxh3JNQA83BZ4xjJkdLzgChxwAiEA0naR0bWpyvMJwT4q%2FR7oBvYTjYVV83bjn4NiCqmkJ8AqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWT6LeT4YSGJACyESrcA3%2FiD42lurj59lZDTXCZCTUvDYUglk9t1s3Olunidw4fY06SN8rCpsln1LE4VuixiD0fbiJLX64y2V7g8CUEWyK3aoZQcblbE8VJoA%2Fct7xEGoFXCcetj5BfCj1%2BI6LJ3Zp5O1dtzUHKlzrZeeEy730N29qEqgyiziH4VRedN8lceN4ENT03mtR4pOZxJUph4zb%2BXRKzDyjnekYlKOLoIxMh%2BZX8V0vZlNNtjGmpivvQSI0OseFfUbylAeFFQBwio0Jza2k4HZ%2BWAXJVqg%2FWruLjE8lTLKEBbWT9VjDSYdnJ4KMrsNphOJWdsHNODEvNOTWW6FURg%2Fm9sIp%2FrZ0NHeIRO8aLt5VdZ7FLApcLzK56WNuXg7CsSGE2%2FKD6TtlVk88ShVP8nPy0%2FjNiMRZQWnf0cIePw4xAM16EUi8cC8lostf7v3EUAA0G4amXUSm1Vv764hiaszTlm%2F85undBwpL3iXdowS%2BoxzXFPJfQGtSSDLjHwuJEMczI%2BCXQ9Uoeyy5UjM8uO7CwRiy0dM%2FX3KZXJfOkhz1gYqBjU3y0Fzccs9hvftCxrWEjc%2BMWR71deQvXga5RytVewwSTTDCEBcam9PcEugmy34QBu3u67Oe4dp%2B2V88eYLM8qZJfMKKYn70GOqUBwJKOpIDCBoT80OceFCb9HxkRqfXkNDz2AUBXrqkCu1mUkFkUSmP3ZF%2Fabw%2BJvuy9VS85cKHXDIYrESfzmtoOhdx7ZTLaeOdJJNq0eBkF7nqWWnA%2FP2w7N0iS8LQraSdN1GXEwPEy7j9MMNHJflI8QaQneS3ciYOH92vq%2FC1Sw%2FqdYgJQ8t3KBbVsWiYvAWQ8MD%2FBm2pStFZf2L6nbY2i0zzGgamq&X-Amz-Signature=599b0cb20eee1b5ce46c4c49e662e50ade214b8e55825c9702f48771225b25f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFVBWVX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbJDcYFHLEIsL%2Bk4EiDG8JMiJu%2BdDUSCwERYgAR8nHCAIgPYlGamRXaoAOAvMDDEuDElsiNxiI8kcNgEgW4f9XHKUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6PMPRP0suu1iZKkircA%2BIbLgciqkfIMzph7RAIAv8mXv8g4s7%2FUmFxrFGniQhs%2Fd9sbx0Rhjg0j3wgOWidkOmmn38jFQ6W8DG%2FTnzM7Py0s6cKOHDZg1s4u%2F5jvBN79kL0xMUAx4gQUcWYb2q4MkOJJtaBlTdLOPStEbr%2B8l4a82r%2Fj8LeXhlne8Y7Ryl%2FM43C2dvx73fDCDv9oWJTldbq13CRDiHwl7Y5AfsW%2BcVu4dCunA%2F6Xsdq7ytHpSyIZO4f3r4QrNpWYNaKZ4qEMgzwoZamEe3TPrXlmBJoH7qHSX2vm1xjTnE5vTmrBE4vqeiNST5BLVA%2F2V21pEpRDk135ldE80Iq3Bqc5vh%2FwfGpUrhQcQd0dWXeAgEM7IUTv0PvdJyQxbzYwObgITht%2FpgQWAIs6ObX7xwloW3%2FRLl6PRt248C9Lw0iAuu8dwdkj7CD%2B5kQQfIBHvuZ2XBgIcezin8EBdfJz9aJRC1fKZcdWL8hZGtQKDkcAyWZaCMtBFGqhYmLoGTE9sb7bKMnqxZ3zqjrjCPQ%2FBuwX595zPBAVXkksuA7XCUAhHSvmv3ayjyRBBIeBoPtdmfivTIWtzxG7Yd3UJQ0kXaek4dDImxYB0jPnFzCosnl2y%2BbXrPFwykx6S3SpIRQjbg%2BMKmYn70GOqUBIUpdapGPqG7rj%2BHG1PCAf0RMchQqHxZplM2dtsZx9sGQHPKSAlNmtC4luheVJlgox83Yrrcqs71eLtTzOac%2BB9XpcxdSsNBfvTN6O7%2FaPxDDI2A15A3vlEKrdB764DTM7bV9ERgFSfJrp%2FjuaAlGKjV5ZlmrPrDXIqzAeLNU8tNdSuqBiDw9ok2QXmx3LXkpanrjbIMPdADXi7Bvycrac47pSjHA&X-Amz-Signature=fe72c4e9d2d7effc8831a387ebb5d73f78f32e16a3235a8089761ae05eab1a27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INU23V7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBrfEuwSKVNy9R1bN7r1BsQEcDKs%2FcR%2FIPKPxi%2B3V%2B4fAiEA3bwfJrFRzeJN%2F87%2BXO94x%2FwlVVhsqs4d6rsoFUxcrE0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT5ftIw4UGQ0BvQfircAxlzYLF8ByZZg6X1%2FwoAzmj7H7sCVOd4NUd2WuFFB%2BqSOK8eH7BVZgu%2Bn%2Fgh1Mma20c9L7Lrm6yN5lx0ZTCT65d15yHLGqGTOpdqvvbqYx0dnx6OKjthAxdcB2pjgAkoxz3NGMLb5UiDbnAdvQYgoAmD6h6Hxq60OQjsbkVisOrwM9cbFeBCOPp6ba00BII%2BVzFD5yHFbTwhcScGoRNRYislNCKsCiB8AmGgXQcqHJ8hdUUYsWmZVtohNDKPCIKvwSkRElak%2B2CjHuXjL%2FQNt3IrB7Ev%2F8rqxabsCOjTlKRTqXQ1qGDRpTGOR2RwL4dwS0FlXfCP5MoMvoFOb8c%2FHk4KYP05oj9Sug7dFYc0zShaI%2B7s9T5lXRrFA%2FPsFJcGi6WDS3UMF3UZUow2QZGlcqP%2FuDoQPtSNRjKglBCq2dTxSkxWcndkemOZqSMiU%2Bq%2FqdICWknyZdP2pqm8PjxRAOqyeLBALKRsRnzwrLzYeLq7R%2ByDFys%2BmTrMmHozARY5Cu9RUYgB%2BGmTM%2FMlpJTjEZrIHeLYNkHXC2gISHDGLCbO%2FaFW%2BbVjdCfK1CHSkGVZH%2FWcXUISg8jXHQyXQth7w40GuyiqRL5S1E7uq3KJhFmqCw9CHuwdo7EIi2qLMPSYn70GOqUBHTgwkuxcu7AcryD3AHo%2F55X0Tvh6VpNoHG6BClEMjUfrFqQJkTUzIEEI0O8v0Zl21e3la9gTFvWHhVpy1r%2Fs2RLa2yFKbZwvNMhacIl6yuA5F8D5VZCBWo19knZXHg7h1XuNS6B1uwAdowx4LHfzhNlrVWmcKjmGM07S8nCQr%2BU1KXua1cygOFY0wXRnelwu4PBmX%2FjdL2ywlademHM0QmGVGnVx&X-Amz-Signature=5f2161c08434c59a0c54ad9cfd86e8599983ca6ed097bec8e92e5e9738a693e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
