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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6KPNWS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEUurlxjsHedB1z%2B0hYVMs2tzwl42L69A0RwXw7u2CtPAiEAmSypsgDWfpXWOJJlMI3vOn0jmXI705fxcqTaW8NMErsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8vHyKWVjrnZ8O%2FircA3YGC7v07qGBrrUd5yh%2FPv3DOw5l6%2BLGVEw2bPG%2Fl4LuaUJrZxTG%2FirXiMQWdW9W%2Br%2BBEg2XTiKxcpA14Nrq4rHUEwOX14KzBcLPCffalPNU%2FXo29FPNt5cZKUt1H224xkVw2eS%2FJEzUhZQQsGILOV3aI4ol5v8gbUZwcBgiJTmV7%2F%2FRdM6fAWBp9O8Frl3DUk1iSrjPjcGcimWcLuWdRt1qwBb5soZCXxqukZkZB3Gzkl52ObU%2F%2BXrHRD%2Bmweq75Q4ZmZhDh7G%2FP7%2FJqGzhmG%2BHPsaFFQ7C0M6xOYvr5Ior8xi4PlSArj%2BLf9g2v4BAHgldxLrDDGivE93ewm9pO%2BMQdd%2BnND7xVynJe5bXFUS6%2Bet2PV3RYigzpUkFZeBT9z%2BxEiAaQpzFJ8MEUXNqr9A8LpFJrPrytLqHxlHhi0gDssRTex7tVQepI5%2F50u1pchxShHzazyUd5d%2BpASYsC3TccIwBMWra7V%2FD0xbeK2UqnyFREbpWgrMDtxrurMk4mC6D3b7bz7A%2FE7SWk0QoWbaExi%2Feygt0ylEsGT%2Bpa02qQC12w8yhdwvluvPR3Z3g0fCDDcq098IwAvAHtT3sIKqH4mZE08cwTAoAz0KKJpMTnH5ZRSjRIobZVOneMISopb8GOqUBtVOM1bjs8%2F52hqkuANcfS2eun8rSNhFjRsdvXB5Xx%2FMQMD7BF00mX%2BF6QqwN9gipmlU5F6BBENm1rClfvpSLstzgi29XtcKagOWcMOUK5jLsUVMIITnk1G0kiU%2BUAPFTYThrGkNtvqdYgF%2BIxoQmLykVWfkVq3tW1m8Mp330j2P32GozYtQeY4v8u3WTkTAU2dpBxdP5re9Q6HYw2ldVSt7DELT%2B&X-Amz-Signature=5a2c57caaaad9b51a5559ec865631d25dc8f9c508ee798ffe65ac49ac8fe4c69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6KPNWS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEUurlxjsHedB1z%2B0hYVMs2tzwl42L69A0RwXw7u2CtPAiEAmSypsgDWfpXWOJJlMI3vOn0jmXI705fxcqTaW8NMErsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8vHyKWVjrnZ8O%2FircA3YGC7v07qGBrrUd5yh%2FPv3DOw5l6%2BLGVEw2bPG%2Fl4LuaUJrZxTG%2FirXiMQWdW9W%2Br%2BBEg2XTiKxcpA14Nrq4rHUEwOX14KzBcLPCffalPNU%2FXo29FPNt5cZKUt1H224xkVw2eS%2FJEzUhZQQsGILOV3aI4ol5v8gbUZwcBgiJTmV7%2F%2FRdM6fAWBp9O8Frl3DUk1iSrjPjcGcimWcLuWdRt1qwBb5soZCXxqukZkZB3Gzkl52ObU%2F%2BXrHRD%2Bmweq75Q4ZmZhDh7G%2FP7%2FJqGzhmG%2BHPsaFFQ7C0M6xOYvr5Ior8xi4PlSArj%2BLf9g2v4BAHgldxLrDDGivE93ewm9pO%2BMQdd%2BnND7xVynJe5bXFUS6%2Bet2PV3RYigzpUkFZeBT9z%2BxEiAaQpzFJ8MEUXNqr9A8LpFJrPrytLqHxlHhi0gDssRTex7tVQepI5%2F50u1pchxShHzazyUd5d%2BpASYsC3TccIwBMWra7V%2FD0xbeK2UqnyFREbpWgrMDtxrurMk4mC6D3b7bz7A%2FE7SWk0QoWbaExi%2Feygt0ylEsGT%2Bpa02qQC12w8yhdwvluvPR3Z3g0fCDDcq098IwAvAHtT3sIKqH4mZE08cwTAoAz0KKJpMTnH5ZRSjRIobZVOneMISopb8GOqUBtVOM1bjs8%2F52hqkuANcfS2eun8rSNhFjRsdvXB5Xx%2FMQMD7BF00mX%2BF6QqwN9gipmlU5F6BBENm1rClfvpSLstzgi29XtcKagOWcMOUK5jLsUVMIITnk1G0kiU%2BUAPFTYThrGkNtvqdYgF%2BIxoQmLykVWfkVq3tW1m8Mp330j2P32GozYtQeY4v8u3WTkTAU2dpBxdP5re9Q6HYw2ldVSt7DELT%2B&X-Amz-Signature=2876a81341f09bd9bb9a765f10efcad1252f2f9213d14ce121e3af721684659f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3DXFC%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGZViLkO%2FV9DAz5YG7ISUIJwgTbuamzj1N1L1ekt5D0wAiEAkCjeg4O53lDPEbdVfG5tOgK7X%2FYBESVTv4osxSkQoyUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ZmZaWe0bwQT%2BCxCrcA%2BuTxJExO3JadKj4hwRCEMhzEXNs%2BMCihTmp1DPgW1aVO8rZ0pczexTSG9fGbJvFBllU1A76smZgs8bw9f0OthlLK4KbvcsQZMu51Txog8Bq%2ByrXsCRUrFBUIV5HvLg%2FFcgcZR7pp%2FXUJxhdip0odkdsvR6iF4mxDBUAAx5PaobTkTKv6Vb1XDl92Z2k%2FdbG%2BMsYb2vAGjhsWecCenKSTmpcSAg%2B%2BAMlD%2BLzPE0acogMwiTUa%2Fqodw75d0JRyNrau7xXytOWMk93nQb9cyA00EjGN6ORoTFgf2aoS%2F9TN7dV2pQ1EFUVfmKdaiaCC1RMDPypdE%2BpWlaKehng5MmI3ebdSky0BYFDRtLTtSyIuDeKKsTRubE8A2Fhi7lcPkBXdxHTucAmk6nVGuI1MYGR6s1KMPNiCFWIooP6Lc%2F5NIeS23YWrw9J%2BgCsr%2BbKngINBqmpOZLxi6R%2BDG6BDMUcM9yp%2FvYriLihNatBkdk5E8qZLckoAowCey9UeoKInb3j%2FSt0gB5WwxM2aXlSj0Wd6E%2B%2FnXSe2386m%2BVKrwV2usXk4XJJiYuabtbN6RWvkDAvpyXwaLTCuTd62v3has%2BtYRWbicXD8xZE9wObyBJL0UC5GspHpmnPSvF4VLAvMPanpb8GOqUBxqdWLGSchDNgVWhpom30uU4DUc5%2F0gfNkxSaAxINe%2BNQRQKAs9RsVbC024PbByPItta2nRGWTJGDFzDoVq1bQ2kCY8akrILkRS9f7IHJhkxDgNgJ%2BQ9sF7DWUXf%2BqAtO0GfWjGdFZWHewstuNkkS%2BRm5c58yRrJjqWWlfxahcVaLCtJXoV7Wbey7MfnZFDP%2FlbQx4Ug4%2BdweSKZ3yJGNl0zcP6oa&X-Amz-Signature=cfd375fd1ded2076a3d5667b68af3910a0fa1488861bdda4220d898fe72ac5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHXJ4SF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDtYx%2FiWfUagx1nKI7LRVrYnSZDh9t0vIyIU0aZyH7VMwIhANaTXe3go6kWejZeaQvyaha4Tt8sjzOtUUy1cTW%2BjIonKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWPi2DPWZUno1OzWEq3AO87zCQtVP9JT2eFPxzmZuKwOAIxtg%2F8XGXvqn%2FMP2ePAllj4pvO9fn7oOoTFx513XP7Pmi4vTViKJZevwh1IABNDQ9xkPivYAOMp7PLfClBSwwpwtcS7d%2FsnxPiGPTdlLHApHNWjIFj%2FrZwz6vd22H9odihEWHNYe%2Bn%2B7ddNduToeF7z8xn%2FMa%2Fi3mwLqUPCHU8gVxaztoN94DkM8J%2BvpssQuwpEfryJOBJ0gY8EbSwcggXEugqxFPwngIShglaMH9O1u6uMLGT%2FnJ27RRy9YV9SGx3Fo0sgWNzvqrioOUaBpVSy68XNGvG1fNVvFbnvVtx61NEbwI4i64d0s5Y8yPUWmSpfXgp%2BoGPtIbZDkiaPwXO6JY8tLkM5AKCzVXQFPStZblpGD6mg%2FKeXTiWlCvxTKdgIHb0U1ai9kkvX9R5taE0nbo3G34%2FCXH1a6KmTJSzTA8Wen5dqzTl43t1eyoC0FLcgkl9HG5Ddw6ufvQI1lrROzT0NXWTZMTxKRR%2BQLpNjaI2NYUK3UxeGoC%2BsKu1SloiatBK0ZpR51MgO%2BFk1Gqe%2FUSYVq3m5FdclZp62vGSPbhuS2m8LTucFITD2Im0FxX83lHddaCXhUxwUU64los70HrHHSQpWXVEjCGqKW%2FBjqkAUEOWJjkVGmvfZe7tCOfmxw46A2VabxeFVRrYjp25FP1wU5ENd1lC0dcepLBag0A6kFu1X2T0iGBLfpYInTi%2BKsqCGm6NgD%2FPDMHqArTX1AtN1b2nNQg2k9wLzadBM0aPZfsW7cAfmAatuFd08XT0kKUFz4RUcny4cdzGg0G9YovTkcY2RK82PRv0h0yVn6VOnyT6EK6oMEu%2Bpqlh%2FpNQuJOVzVG&X-Amz-Signature=321cc140399e791fcb710513216d1040b8fb935760ac3f3163478ec29061dfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6KPNWS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEUurlxjsHedB1z%2B0hYVMs2tzwl42L69A0RwXw7u2CtPAiEAmSypsgDWfpXWOJJlMI3vOn0jmXI705fxcqTaW8NMErsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8vHyKWVjrnZ8O%2FircA3YGC7v07qGBrrUd5yh%2FPv3DOw5l6%2BLGVEw2bPG%2Fl4LuaUJrZxTG%2FirXiMQWdW9W%2Br%2BBEg2XTiKxcpA14Nrq4rHUEwOX14KzBcLPCffalPNU%2FXo29FPNt5cZKUt1H224xkVw2eS%2FJEzUhZQQsGILOV3aI4ol5v8gbUZwcBgiJTmV7%2F%2FRdM6fAWBp9O8Frl3DUk1iSrjPjcGcimWcLuWdRt1qwBb5soZCXxqukZkZB3Gzkl52ObU%2F%2BXrHRD%2Bmweq75Q4ZmZhDh7G%2FP7%2FJqGzhmG%2BHPsaFFQ7C0M6xOYvr5Ior8xi4PlSArj%2BLf9g2v4BAHgldxLrDDGivE93ewm9pO%2BMQdd%2BnND7xVynJe5bXFUS6%2Bet2PV3RYigzpUkFZeBT9z%2BxEiAaQpzFJ8MEUXNqr9A8LpFJrPrytLqHxlHhi0gDssRTex7tVQepI5%2F50u1pchxShHzazyUd5d%2BpASYsC3TccIwBMWra7V%2FD0xbeK2UqnyFREbpWgrMDtxrurMk4mC6D3b7bz7A%2FE7SWk0QoWbaExi%2Feygt0ylEsGT%2Bpa02qQC12w8yhdwvluvPR3Z3g0fCDDcq098IwAvAHtT3sIKqH4mZE08cwTAoAz0KKJpMTnH5ZRSjRIobZVOneMISopb8GOqUBtVOM1bjs8%2F52hqkuANcfS2eun8rSNhFjRsdvXB5Xx%2FMQMD7BF00mX%2BF6QqwN9gipmlU5F6BBENm1rClfvpSLstzgi29XtcKagOWcMOUK5jLsUVMIITnk1G0kiU%2BUAPFTYThrGkNtvqdYgF%2BIxoQmLykVWfkVq3tW1m8Mp330j2P32GozYtQeY4v8u3WTkTAU2dpBxdP5re9Q6HYw2ldVSt7DELT%2B&X-Amz-Signature=4164b8812e509750140598baab7ec1ce101c14e479a1e34e9f291c2565e5241b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
