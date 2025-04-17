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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2EXI3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2W4xZ8OVMH%2Fs4dNk%2B2kwd%2F%2BnhPPBXbMp%2B%2Fk3hxwiPpAiBot768voV3WLDTFDXGPpAv4tygWESGR7wFJ0KR8AgMqSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcrwtOfw46LOVCK8WKtwDHIQ6je82VexwXSHIWDxOLmRARssC3EkzcaTvliUFDUEa4mPDZ5zOnqhFoaaGJQmFbNJRqAxEpG6tREMz3060TbEfHitQtMjhuiMiHADh85zOhwAbL5S%2F9i0kLKDiyw46AmN3DVxYwZv3tBlbR%2Bs%2BjmTpBEKPMgK2PhVBILry%2BwBIUsAGQxHmAOvqnSe2VCRYlHhJMRZEObp4AGFLUVXW%2FtfGNmJlnI8qKZ6KayvXyNF4VBEVLtiJKqcLB2xY3I43d9ZnaQrtIL7Y5OlUxYw9NjXckjBcIrcvsCYdXkXMbDQub8L6YPjedV4VxQ5FLdX7vxp1nIiY4LAt0xQYs32tzpE3%2FVGT8IEruMuEAElmkBWxU4SK0F9gVZsXfleO5StPPvVcUCBMGBtlrUG9zFQGyfwdKZtdCZ%2FzJW25Lrae9HEEPVpFS%2FuNVbJMtprpmAFQe%2FII5Bc2vV9IMJJ2sCBdvalZcU1MMfH%2BCzxxrBe%2B%2F%2BUY6yOEQDRP0%2FTxwRlAeCZJN6UHvwYBabrbfnnEu%2BnGX%2BKZlrLUBOmaBAJXoGs9Hn5AI5lZThwoVA82TVMQta1tFkN1jW%2BcVBq6JaQp0sKDFIRVKkwyDYVQmhYTwwh1xZp%2FU2xn%2ByFK87yon8Uw%2Fq6DwAY6pgEWLgvecBVxMeetY8ZjuwrQ%2B6NpgU4T5hNZpkl37qotCWvBGXe152HKCL4%2Bds969j0rEd7%2FXTCJN%2BM2avjAglwueOcv8osiWpwOzseFP1AtOsuVKuRdyaHZ5x9i%2BiHxnTImhxExPWXMFN0GF7%2FI464AnUnE7za9Mni0EUvKnEmoUDjBdIgDA8t9MVeAPjqBQLEvHBOfUKmc3seVodNMtkNew2d6qZW%2F&X-Amz-Signature=e923abc5f71b924aee3cb6c9609af0220ca37899b5bbab45032046f153db723a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2EXI3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2W4xZ8OVMH%2Fs4dNk%2B2kwd%2F%2BnhPPBXbMp%2B%2Fk3hxwiPpAiBot768voV3WLDTFDXGPpAv4tygWESGR7wFJ0KR8AgMqSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcrwtOfw46LOVCK8WKtwDHIQ6je82VexwXSHIWDxOLmRARssC3EkzcaTvliUFDUEa4mPDZ5zOnqhFoaaGJQmFbNJRqAxEpG6tREMz3060TbEfHitQtMjhuiMiHADh85zOhwAbL5S%2F9i0kLKDiyw46AmN3DVxYwZv3tBlbR%2Bs%2BjmTpBEKPMgK2PhVBILry%2BwBIUsAGQxHmAOvqnSe2VCRYlHhJMRZEObp4AGFLUVXW%2FtfGNmJlnI8qKZ6KayvXyNF4VBEVLtiJKqcLB2xY3I43d9ZnaQrtIL7Y5OlUxYw9NjXckjBcIrcvsCYdXkXMbDQub8L6YPjedV4VxQ5FLdX7vxp1nIiY4LAt0xQYs32tzpE3%2FVGT8IEruMuEAElmkBWxU4SK0F9gVZsXfleO5StPPvVcUCBMGBtlrUG9zFQGyfwdKZtdCZ%2FzJW25Lrae9HEEPVpFS%2FuNVbJMtprpmAFQe%2FII5Bc2vV9IMJJ2sCBdvalZcU1MMfH%2BCzxxrBe%2B%2F%2BUY6yOEQDRP0%2FTxwRlAeCZJN6UHvwYBabrbfnnEu%2BnGX%2BKZlrLUBOmaBAJXoGs9Hn5AI5lZThwoVA82TVMQta1tFkN1jW%2BcVBq6JaQp0sKDFIRVKkwyDYVQmhYTwwh1xZp%2FU2xn%2ByFK87yon8Uw%2Fq6DwAY6pgEWLgvecBVxMeetY8ZjuwrQ%2B6NpgU4T5hNZpkl37qotCWvBGXe152HKCL4%2Bds969j0rEd7%2FXTCJN%2BM2avjAglwueOcv8osiWpwOzseFP1AtOsuVKuRdyaHZ5x9i%2BiHxnTImhxExPWXMFN0GF7%2FI464AnUnE7za9Mni0EUvKnEmoUDjBdIgDA8t9MVeAPjqBQLEvHBOfUKmc3seVodNMtkNew2d6qZW%2F&X-Amz-Signature=bd39fc2b32a828db6ae5b6cda7eb7755c22f20af013c70f11112f0c29fff14d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR35ID45%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8SfoPbW%2BUZM9ONCkuIyUl%2B19KuUDJmtoGznQGSwCzmAiAwYYTD0XoCAq0hL18RzG6MvbHA3O60NAmf%2FX1VweoXUyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMZwVgH%2ByY2SyQBgviKtwDDdJxGPm%2BrrxZ20idn%2BH%2FrnzAXytU4egWMHBjgjcNNzk8sIx6pEfj65AoXFNQKLCn%2B%2F12vIddGMSelecoDYIbfinzpNqPNLW9XLceSs7%2Be%2BsaAP6rdZFJ4%2F56z%2Fu7C3mr6nsdIuHW0rTrKO7f8Zef6wZbaA9lZ5h%2BpvRUZwhJEVhhGOMp2XK3C9CFaEX0672iaM1r8bVvcaQVltbr8v8UE2bn70RbvM%2FCaUJ5LqX1ZZUAkhgyp0Q6c9X8OjxWbYRN%2FGavWIQqdkKJp2zw92dWnZ21A1fu9u5JWcnyruUKWmPA1BN3xsWqagyihzzz5iXeKapJccQ498ncYr9etaW87CMOf1B4Y32QCbfaDEAFfVSEowYhvumYYPLaPNamdr3XsFrBjpraQR%2BDZCWPxKcgrI7Rov4QGVNuDYAdjXzdGbNx5JP1aXtPaYmYYFFTOd%2F%2Fk6LWTqIPMYnTUtLoLNVH1im%2Bpg5C2%2FnmcIIyoFLhXTKBQ3G4O248KCXURZbGRD0e0HghfOGSRMWyoy4Qraj4Va6CIOBh9MppYpO%2FlTPchZhhOpEPEvvWE7HR4YKUJxzIoAUYjA6mdhitC6Eiof%2FbM1e2R8jJvFsIl0wpn90bv2PhIaboGsoa1JJ3Y7EwjK%2BDwAY6pgEsWGAj25uiCx6wrkyH9Rs5U%2BHgRIdl1HaClhLLdSRLCcvUI3%2FAR9FFX3PcQnlNJrz0AAr%2F2rlkr9VF2cwNSNpwdUHKzIt5KLs2Z%2BkmVugEXO38SEyIvg9mxsd9Ox%2BFzf8ABYgYCu5ipV%2BQbP3oHNXcZ3yS%2Bx3UoCKDT8PrsBbwRk%2F37henFg%2BfbricCSPooaGoB1GvbDKV5MRrOTnb89BHWsS%2BFsG7&X-Amz-Signature=7454cfb9f878f6050a4f80e03babb16e4c420f9c07225c92c1af42b47c3349b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFSNMII%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjexivYQ8HTw2jgOgGkM%2BNpbs%2FGKuu96m2FwewxvRB8AiEAj2Om7jqWxFUt84QSA84CqzAF%2Bej3UeCdQpPpiFDIlScq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB3neNlT%2BnEmM5WRYSrcA3hSrdw2ZysHWwn1z1%2Fu5DcGkAhVZ%2By7XA8o6D1SAhYl1kAwo%2F%2FOr%2BLCd6pMoG55y2e%2F8DAVCD00Rp6JihrFgKfo4k5jd0%2Fw28toSl6F2PeDP0tueguP8jkny8R56Byygmrf0%2BnRuHilsG9qFg0M5GSpU1EQia3Z2JwNMEpaCd8cT5kO2Hcqs3uEqnz5a444DW7UkMVOk7jDDTCAzCl4KW4oddEApoOiWE2YJoYys423yPFs9Br7BdGcFzcU1ZPUG90cn%2Fczs61w6UKiP0JPJu2tziBsbhp7rkAyq0cJ4tgAiBhap6gZLf3soESbyFr0UMHhrk1lmMKSAGFdWsg1YthX82Hdzs41M4cSs2hEzyN7PUBB%2BQj2ZFew50%2BrJxk%2FZ9EFPPVXxg5GYMWu2LZkxhm%2BFCHAo3lSKZmrye4gYV1%2FcuG3twH3o35LNCL2IlU%2BU4Y1UgT%2B%2FXJp%2FAVQA6a4ROMq0X7tUYAi%2BLR28OxP9XpKSLJmdn%2BF4AIqoDRpBP41QPT1qWgCAU2F4oakCF5GBdxg2j3HK58alL5l84Ir6EAHj1DmIpWq5ne%2Bb57ExtIOWaptUchwNtBpwCB5%2FhKhUH3Pdm3NZ4ORZAfmMo%2B7ezOUnlgtynpdXY8QnpMFMKqug8AGOqUB%2B%2BK1Hp%2B3n5I94iRZ3rbGM3t7GM5dDGJmBsWMSOmaXiwDm7cBMCgeKprMECkwB%2FpinomPLdHUz84GQRr71EOLY9JQaI94GvhhYreXAnB2KLFzO7DViDKExx5mLMjm3xtWkf7uPmOPG1cfc1OhXjbo9A%2BsfuGjAshUwLJOJE9YETbHe9v1G%2FUrPpagcuauTOFKi3vq5dXVZVAf2hBaJ8WkqQa2w056&X-Amz-Signature=4f4bb4fbdb58706a5ed6024fb087a77da25c1ded0548b544fd516e8aad0c4e09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK2EXI3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2W4xZ8OVMH%2Fs4dNk%2B2kwd%2F%2BnhPPBXbMp%2B%2Fk3hxwiPpAiBot768voV3WLDTFDXGPpAv4tygWESGR7wFJ0KR8AgMqSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcrwtOfw46LOVCK8WKtwDHIQ6je82VexwXSHIWDxOLmRARssC3EkzcaTvliUFDUEa4mPDZ5zOnqhFoaaGJQmFbNJRqAxEpG6tREMz3060TbEfHitQtMjhuiMiHADh85zOhwAbL5S%2F9i0kLKDiyw46AmN3DVxYwZv3tBlbR%2Bs%2BjmTpBEKPMgK2PhVBILry%2BwBIUsAGQxHmAOvqnSe2VCRYlHhJMRZEObp4AGFLUVXW%2FtfGNmJlnI8qKZ6KayvXyNF4VBEVLtiJKqcLB2xY3I43d9ZnaQrtIL7Y5OlUxYw9NjXckjBcIrcvsCYdXkXMbDQub8L6YPjedV4VxQ5FLdX7vxp1nIiY4LAt0xQYs32tzpE3%2FVGT8IEruMuEAElmkBWxU4SK0F9gVZsXfleO5StPPvVcUCBMGBtlrUG9zFQGyfwdKZtdCZ%2FzJW25Lrae9HEEPVpFS%2FuNVbJMtprpmAFQe%2FII5Bc2vV9IMJJ2sCBdvalZcU1MMfH%2BCzxxrBe%2B%2F%2BUY6yOEQDRP0%2FTxwRlAeCZJN6UHvwYBabrbfnnEu%2BnGX%2BKZlrLUBOmaBAJXoGs9Hn5AI5lZThwoVA82TVMQta1tFkN1jW%2BcVBq6JaQp0sKDFIRVKkwyDYVQmhYTwwh1xZp%2FU2xn%2ByFK87yon8Uw%2Fq6DwAY6pgEWLgvecBVxMeetY8ZjuwrQ%2B6NpgU4T5hNZpkl37qotCWvBGXe152HKCL4%2Bds969j0rEd7%2FXTCJN%2BM2avjAglwueOcv8osiWpwOzseFP1AtOsuVKuRdyaHZ5x9i%2BiHxnTImhxExPWXMFN0GF7%2FI464AnUnE7za9Mni0EUvKnEmoUDjBdIgDA8t9MVeAPjqBQLEvHBOfUKmc3seVodNMtkNew2d6qZW%2F&X-Amz-Signature=4e97cc149d846672044517c73e47f1f49f4e2600d4c97d36be6cc965e37f7ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
