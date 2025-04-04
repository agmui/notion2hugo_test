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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XNPYAG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETSRdWxue6f54LnZV0zEKcfKPfcgCjdWI%2FB5Sni9kohAiEAhS%2F4rL25DXxWrTrQlz59TgvLRlT6qtvrb586D56zz9Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNA58nNJYO18zkogaCrcAydPR3YaEu3WOMwoPY5QkokF3i759Hc0vc1Ly8OBXVTaU0L1%2BYZ5wCtyvexJWpIil36X5i%2F4QEszp32o4z7mIKQCb4Rlq5xNLFESjuiWAgNQuLyHosFbRIse1Ij990ku5a3kr7yzfLdhS3SMzfl%2BrgXVU6VD4%2FbVVEEfe1wugbVoc3CG0E70eEQoPE2lJ%2FAx5ra%2FIdpE4WZ3K5nA5UcMFEZG8aGBIezGMPd49Lo%2B1KDsUzNaV7wrx9VhXuPVirMU5ikjkfth2g54Q094uvLXv1LABuLSPUPi42pBNqmknnYX9t45mGjRUiYi7VKCTryYfl0QOC6SO%2F88ugMGG3llT0U%2Bf8XQD3t64mStFSjR271gmf%2BZcmkoZulJnvANlaRk005SAhpQTdGUlKeWiAdVxAOc8FRlYIa8SGofHKqBChfJUnCifP4CcpY2hHYGAOqgLYzsUDBgFehAK4UV01setSKshp6mMAnEX9RaYN9FVia4B33tJebTkYTfhoS4OVFxkbn%2BPJSerRnSrYr%2BkN7jSkY8V%2FTldVzApCCCwzX1GGBf1NgQ%2Bz998%2B8RophHY3DhD09hjWxrXTs7a49q9sVOqFfPD%2B5bTjfZzFCxXKb8sEq5FIDOGlUlxy%2F1n1PfMOiIwb8GOqUBtLt6Y2gfrJ%2BaWPszpDyfUJVeasOn%2Fg8O52VpHHtoanZQTstTpb3Fnyr9nOiuMAlNi3dHg5JXt4GCrDwzx1%2Ff7JQWWxOMxsb2Sm9mdbOsA1Sw2adqCn0Y%2F%2FdT0s1%2BpLIjksPjYuQXFUB%2FY%2FFbfHnP3%2BQuwGL8N5bw7Qn%2BLM2y0Dyu50lTkhPA958iflB0b6FALxgk9iEHi8HV71X%2FIM1tT2%2BDt6iF&X-Amz-Signature=11091a8a80ba09a18bff007931843266f44e09a2bebbe0f765172fdaa7906a51&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XNPYAG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETSRdWxue6f54LnZV0zEKcfKPfcgCjdWI%2FB5Sni9kohAiEAhS%2F4rL25DXxWrTrQlz59TgvLRlT6qtvrb586D56zz9Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNA58nNJYO18zkogaCrcAydPR3YaEu3WOMwoPY5QkokF3i759Hc0vc1Ly8OBXVTaU0L1%2BYZ5wCtyvexJWpIil36X5i%2F4QEszp32o4z7mIKQCb4Rlq5xNLFESjuiWAgNQuLyHosFbRIse1Ij990ku5a3kr7yzfLdhS3SMzfl%2BrgXVU6VD4%2FbVVEEfe1wugbVoc3CG0E70eEQoPE2lJ%2FAx5ra%2FIdpE4WZ3K5nA5UcMFEZG8aGBIezGMPd49Lo%2B1KDsUzNaV7wrx9VhXuPVirMU5ikjkfth2g54Q094uvLXv1LABuLSPUPi42pBNqmknnYX9t45mGjRUiYi7VKCTryYfl0QOC6SO%2F88ugMGG3llT0U%2Bf8XQD3t64mStFSjR271gmf%2BZcmkoZulJnvANlaRk005SAhpQTdGUlKeWiAdVxAOc8FRlYIa8SGofHKqBChfJUnCifP4CcpY2hHYGAOqgLYzsUDBgFehAK4UV01setSKshp6mMAnEX9RaYN9FVia4B33tJebTkYTfhoS4OVFxkbn%2BPJSerRnSrYr%2BkN7jSkY8V%2FTldVzApCCCwzX1GGBf1NgQ%2Bz998%2B8RophHY3DhD09hjWxrXTs7a49q9sVOqFfPD%2B5bTjfZzFCxXKb8sEq5FIDOGlUlxy%2F1n1PfMOiIwb8GOqUBtLt6Y2gfrJ%2BaWPszpDyfUJVeasOn%2Fg8O52VpHHtoanZQTstTpb3Fnyr9nOiuMAlNi3dHg5JXt4GCrDwzx1%2Ff7JQWWxOMxsb2Sm9mdbOsA1Sw2adqCn0Y%2F%2FdT0s1%2BpLIjksPjYuQXFUB%2FY%2FFbfHnP3%2BQuwGL8N5bw7Qn%2BLM2y0Dyu50lTkhPA958iflB0b6FALxgk9iEHi8HV71X%2FIM1tT2%2BDt6iF&X-Amz-Signature=861201e4b10b25be1af2a7f1067d503c85d35d1e0ffc05a127643d737dc35dce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUKTQGU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDagFsZjZ7eHJaoQZ2R7dovYgClP5yCmRgNpmy7%2BJI68AIgdLku1l6TzbOTDluUTn3PSWWTGqaoIEM0fs1yfpKDLqcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAhGZ1W6xUep%2FG9VNSrcA3unzG2M7Qo4LNzIi8iMwsNiMiUboF41G5dBiHQSiCVWgNteL%2BZ7Cxf06hj86gY8ej3g%2FEGOl0NnkE9vB1%2BRssm5mvqvfFmVuMWtEtA7UVxUFuzqC0SGZ114Qd7upeIWek04iLOvMLOPtS2rLPxbK1wJvakIk7L3tO8ZcvD%2BJTF%2FkGCFxGkUKTcMxK2g86X7nGEbHGJ5NYWefp6TUyX0lXkvLw%2FqBDUNWbJeEbCxoJBf4AlGlZCtaehm1qNtu%2B4H%2BfSfUcPTyQy6KTlJNe%2BxPItdr2Iu2FLDNb79I3YUb13Y3zsyw%2Fz%2Fsr8o5mf6PsEdO1UgOrukytSqJpa3DP0UE3aZxIot6WF7b14P%2BnGm3EsVSlydDUHIgR6Y6NQMz4r00krfpNvp1iyyFUEdpjFkkzcimn0Mqu%2B4ve%2FQ3fUeC%2Buu033eVAZxAy0B3GFBkx0i%2F%2BpzLZVi%2BqvlEFO13KK5EK%2Br%2F4LZq07iXyTtFE0CndH3LqerWQUNXu6dM6xwvvQJVwQdEY%2B%2FsNVJOJsWAkrNykL9nbgXT6f%2BYjCkMewvesypCvSb375wIxEGGeulrbcdH8aJ8ZcX1oXhawHqUnacd04udtEXTaoz%2BYWA8%2BmdDbobL6GMZC20QAJCk6LgMJ6Iwb8GOqUB9jB7VUGcaJCnsvAuOY%2FC9Rwp9LLvDqURaYEHMAyW3%2F%2Fww0PTxr%2FKmaVSH2b06H8I9Gf5p%2BvtB0GTdgfy%2B0fKADY2qlHda4Q7VYmxH%2Fq%2FfMXUUgprNVB9SZXbEu24qtyRCSpV4B9AOGBtpAKz%2FzS6gnQOSBv61K9soKDWFg%2BIpvqdWYqQtP2xhbriizOuOVxQFCbxe0WuO9XyoxkTRp0%2Brh0cyvqi&X-Amz-Signature=0a8f3d70d860643a7048e2cf337d38a9fccad041a316814421a0a413c673cf62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6CL2EL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZZUV7Sj6SBl2pEW15p2foow8HryBcpAQXF%2BmeiVYEAAiAmTT06WnsRmt2IZzqTOqRVkUrjSzRBingAvHVE%2BlQDwyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2FmmrXLifR%2Fdl%2BhVxKtwDwvJW0CBrqMNa3SIR32nOe3uS0AkgZbHHdNDWdF%2B%2BRTG8nT9gtwsAN9KRTAsbPR2OWTPfpqVQVXCQF12leIaGA9rCSgcnPusMZwBKYMEYQ7HuMq4Q8CmJ3JFLS9dozJ4catPznmwgNlLEwSoacHxIrs%2BprQ6xY%2FltpZZ2vZ6zfYQ%2B%2FsiMp0xk8m4LqXaR4XaTgEtID6G6mc75VYpC5zJXJTZswKbiiJShSJkyABaz0UY1VcAUfnDZ0l4ehmcUlb8Eg6NRvQKRpN6HMkdOW8wpQPHmop5HW1zJHw92M73RCPw2%2BRjSjI%2BGXE%2BaEl3xziilIaHObzdKnE0M0xw6vZ%2FzoG8ERd5n3kytFq90YFgvK4XItpDJx2udGYkHWtqRMsIHWCIjhHpZQA2RIpGiKYIQP3uSMEZTeWwENYpK0Jb46EcR5%2BiZrGvv%2Fv3xHJzrHhsiyC0HOBAWIk883cDH1HYzidyxezCfVzoau1mujvlIp%2FD1FKczK%2B6CvgmQEa%2FZra%2Btf%2BMXlVmMJwRzNLr0bTKxtxlIO8nO0%2FNBKmANUAQvklBxfckq5RhPz6974VCyV3rlfCAlB5a4ytJjMvAM0UMBedTY8oT2OVfeR8XEJ05rTi488QtrEoAJizNuXicw5YjBvwY6pgGfC3ZnvGcQdjr4pj3%2FL%2Bk4QBPiSsQzw2Tu38NbK6neUlytVMlqhGFv47bDdh6QcVV%2F1o3TdbyXOo896MCVuoC4rtkIT%2F0Bb6l%2FtvldY4hecjoSzVfYxC9dXzcVGqROi8p0fhg4OIS3%2BHbf4HuLGBn5DqXmtzv4r7AazNWB80dm6wJ7NOT79r0ICY2uGfZUUTSBniJyjjEExCe6%2F2v8Mp6DOLLnjlch&X-Amz-Signature=860e70f31b6c4a09f110f0e78c31137dd650e640a7be429368cd2889ff1547b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XNPYAG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETSRdWxue6f54LnZV0zEKcfKPfcgCjdWI%2FB5Sni9kohAiEAhS%2F4rL25DXxWrTrQlz59TgvLRlT6qtvrb586D56zz9Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNA58nNJYO18zkogaCrcAydPR3YaEu3WOMwoPY5QkokF3i759Hc0vc1Ly8OBXVTaU0L1%2BYZ5wCtyvexJWpIil36X5i%2F4QEszp32o4z7mIKQCb4Rlq5xNLFESjuiWAgNQuLyHosFbRIse1Ij990ku5a3kr7yzfLdhS3SMzfl%2BrgXVU6VD4%2FbVVEEfe1wugbVoc3CG0E70eEQoPE2lJ%2FAx5ra%2FIdpE4WZ3K5nA5UcMFEZG8aGBIezGMPd49Lo%2B1KDsUzNaV7wrx9VhXuPVirMU5ikjkfth2g54Q094uvLXv1LABuLSPUPi42pBNqmknnYX9t45mGjRUiYi7VKCTryYfl0QOC6SO%2F88ugMGG3llT0U%2Bf8XQD3t64mStFSjR271gmf%2BZcmkoZulJnvANlaRk005SAhpQTdGUlKeWiAdVxAOc8FRlYIa8SGofHKqBChfJUnCifP4CcpY2hHYGAOqgLYzsUDBgFehAK4UV01setSKshp6mMAnEX9RaYN9FVia4B33tJebTkYTfhoS4OVFxkbn%2BPJSerRnSrYr%2BkN7jSkY8V%2FTldVzApCCCwzX1GGBf1NgQ%2Bz998%2B8RophHY3DhD09hjWxrXTs7a49q9sVOqFfPD%2B5bTjfZzFCxXKb8sEq5FIDOGlUlxy%2F1n1PfMOiIwb8GOqUBtLt6Y2gfrJ%2BaWPszpDyfUJVeasOn%2Fg8O52VpHHtoanZQTstTpb3Fnyr9nOiuMAlNi3dHg5JXt4GCrDwzx1%2Ff7JQWWxOMxsb2Sm9mdbOsA1Sw2adqCn0Y%2F%2FdT0s1%2BpLIjksPjYuQXFUB%2FY%2FFbfHnP3%2BQuwGL8N5bw7Qn%2BLM2y0Dyu50lTkhPA958iflB0b6FALxgk9iEHi8HV71X%2FIM1tT2%2BDt6iF&X-Amz-Signature=e8a0743ac70c13a4c87c54e4eab5fa45e039320ec4a693378236db262a66e4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
