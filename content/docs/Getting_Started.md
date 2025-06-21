---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4XG6HE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipWhcXmyGnvelZZ0n3sOmsKYgKAUe%2F8%2BiX1FpsRCC4wIgHNP%2BFPQZcTT4Z9Ne0Yq3marQMqTyMauKeSeOKD2lqfMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfP3i3A1KKP2x%2BzKyrcA1vB6cuKJJA065RJOaDdvMxzJ4XZyaf39nvnlWsTNcZcwuCW4R9hH41sHWGJSUOZf7U3rGIiAJEi9UoY7PkDsdF5eL1DS%2BSJW35FBB9vq02FBpxPOZn3efJgL1PHoe8f4r9Mk7RSamlQMNXVOsUOBG5AbeeihSC9CrCxlDKfYKWc33zQ1Nf7htgJR4tRA5p39%2F7fvVFvYUKuKYu%2FNmEUsl5tq5is%2BFCx%2FmKZSRXMgHrqkpAMCtOexqbcqqMf7Kn9AGxgxxO%2FjOFcpnNQm8OAhInXrzH3KkgeOPc8JgOqaCD3pH4Veb%2FLaGnEipIActJNQpO9xQTo84vnuw2hpTDu%2BY%2FSlfrxJRKae7SRkB6LUBAGeANWbpNX3P6uo5bkosaUBEvNC9WUZdDFZnxigXixPJe2R2Kmy8ILdEAVllTNjBfRGKcw%2F4Es%2FqE3P%2ByP8DaLX%2Fw0ajoWCoU7S1SWeS5wbmE%2Bbu3DDB%2FGhyR2SG3%2BxEt%2Fuf%2Bf2YEbqt4TN73NNbqSO%2FGJFSCTUo95KVS3Q%2B5AHGGcWVqRGlUmzjVJ5YW7Y9GY8hws0NxfZMorAoL9NOiMgeNRS4Rn8UWjs01EDO%2FqpfErILjIvitJJHKPMcIVxpXvgRo%2Bh581CpMRM7nsMJmv2MIGOqUBvlJvXkKsalgZW1X63R5KVRthcHRpOCXP9RLQm%2BK4IP8QlU4UPiLjXCISQSO9%2B7B%2F1XWfxWJUu7fyNTuWRDXr%2B%2FR9hHp%2FJKS8xig%2FCUTAWQqbJQygFCATN4WqGchzz3biy71a1F5GdzMQd1pDPI69lyRH4rgKQMCqgMuErw423mNLKvC4eSeK0pwI8gr5dzIftNxLhBayFIRdxqcWE5Y53O%2B0ib5J&X-Amz-Signature=a4a32f28c7dd954d2e7a4277704ad0ac8281e26d6b03962d27f50a001c77aa39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4XG6HE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipWhcXmyGnvelZZ0n3sOmsKYgKAUe%2F8%2BiX1FpsRCC4wIgHNP%2BFPQZcTT4Z9Ne0Yq3marQMqTyMauKeSeOKD2lqfMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfP3i3A1KKP2x%2BzKyrcA1vB6cuKJJA065RJOaDdvMxzJ4XZyaf39nvnlWsTNcZcwuCW4R9hH41sHWGJSUOZf7U3rGIiAJEi9UoY7PkDsdF5eL1DS%2BSJW35FBB9vq02FBpxPOZn3efJgL1PHoe8f4r9Mk7RSamlQMNXVOsUOBG5AbeeihSC9CrCxlDKfYKWc33zQ1Nf7htgJR4tRA5p39%2F7fvVFvYUKuKYu%2FNmEUsl5tq5is%2BFCx%2FmKZSRXMgHrqkpAMCtOexqbcqqMf7Kn9AGxgxxO%2FjOFcpnNQm8OAhInXrzH3KkgeOPc8JgOqaCD3pH4Veb%2FLaGnEipIActJNQpO9xQTo84vnuw2hpTDu%2BY%2FSlfrxJRKae7SRkB6LUBAGeANWbpNX3P6uo5bkosaUBEvNC9WUZdDFZnxigXixPJe2R2Kmy8ILdEAVllTNjBfRGKcw%2F4Es%2FqE3P%2ByP8DaLX%2Fw0ajoWCoU7S1SWeS5wbmE%2Bbu3DDB%2FGhyR2SG3%2BxEt%2Fuf%2Bf2YEbqt4TN73NNbqSO%2FGJFSCTUo95KVS3Q%2B5AHGGcWVqRGlUmzjVJ5YW7Y9GY8hws0NxfZMorAoL9NOiMgeNRS4Rn8UWjs01EDO%2FqpfErILjIvitJJHKPMcIVxpXvgRo%2Bh581CpMRM7nsMJmv2MIGOqUBvlJvXkKsalgZW1X63R5KVRthcHRpOCXP9RLQm%2BK4IP8QlU4UPiLjXCISQSO9%2B7B%2F1XWfxWJUu7fyNTuWRDXr%2B%2FR9hHp%2FJKS8xig%2FCUTAWQqbJQygFCATN4WqGchzz3biy71a1F5GdzMQd1pDPI69lyRH4rgKQMCqgMuErw423mNLKvC4eSeK0pwI8gr5dzIftNxLhBayFIRdxqcWE5Y53O%2B0ib5J&X-Amz-Signature=e1cd4ee1809df1426aa304a016bebb4db77eccb3029c42325d525de54ad77607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4XG6HE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipWhcXmyGnvelZZ0n3sOmsKYgKAUe%2F8%2BiX1FpsRCC4wIgHNP%2BFPQZcTT4Z9Ne0Yq3marQMqTyMauKeSeOKD2lqfMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfP3i3A1KKP2x%2BzKyrcA1vB6cuKJJA065RJOaDdvMxzJ4XZyaf39nvnlWsTNcZcwuCW4R9hH41sHWGJSUOZf7U3rGIiAJEi9UoY7PkDsdF5eL1DS%2BSJW35FBB9vq02FBpxPOZn3efJgL1PHoe8f4r9Mk7RSamlQMNXVOsUOBG5AbeeihSC9CrCxlDKfYKWc33zQ1Nf7htgJR4tRA5p39%2F7fvVFvYUKuKYu%2FNmEUsl5tq5is%2BFCx%2FmKZSRXMgHrqkpAMCtOexqbcqqMf7Kn9AGxgxxO%2FjOFcpnNQm8OAhInXrzH3KkgeOPc8JgOqaCD3pH4Veb%2FLaGnEipIActJNQpO9xQTo84vnuw2hpTDu%2BY%2FSlfrxJRKae7SRkB6LUBAGeANWbpNX3P6uo5bkosaUBEvNC9WUZdDFZnxigXixPJe2R2Kmy8ILdEAVllTNjBfRGKcw%2F4Es%2FqE3P%2ByP8DaLX%2Fw0ajoWCoU7S1SWeS5wbmE%2Bbu3DDB%2FGhyR2SG3%2BxEt%2Fuf%2Bf2YEbqt4TN73NNbqSO%2FGJFSCTUo95KVS3Q%2B5AHGGcWVqRGlUmzjVJ5YW7Y9GY8hws0NxfZMorAoL9NOiMgeNRS4Rn8UWjs01EDO%2FqpfErILjIvitJJHKPMcIVxpXvgRo%2Bh581CpMRM7nsMJmv2MIGOqUBvlJvXkKsalgZW1X63R5KVRthcHRpOCXP9RLQm%2BK4IP8QlU4UPiLjXCISQSO9%2B7B%2F1XWfxWJUu7fyNTuWRDXr%2B%2FR9hHp%2FJKS8xig%2FCUTAWQqbJQygFCATN4WqGchzz3biy71a1F5GdzMQd1pDPI69lyRH4rgKQMCqgMuErw423mNLKvC4eSeK0pwI8gr5dzIftNxLhBayFIRdxqcWE5Y53O%2B0ib5J&X-Amz-Signature=2c1ad07425636427198d62c1a774a0a6a7e4099384a5253f05b4eae261e42209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRGXNFV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7ivv771IzCB2nVyGimb%2BnTzbbt22RV8zqusIeA9e2WAiEA7wSesGC22Jazp4Ppc5ECkOHkMdM%2FlNGXGbRa1HJvMMQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX0CHW6klD0hQi%2FHyrcAwPm9cJeAF%2Fqnyl%2BsgtPrAztNbIOO7URzLq3MqwaCU0fRnTbuZLsHdm7ymQtHV5FroPgkbrJUGRQlsBps5%2B8JrDcVkuRn7kyXRCw2KzhAeQJsTwLmzSD92wTpY8xxdV3DM2v2U1RszSgh%2BKgyvOrHzg6artqndMWSCEO2CSrTYQ738rAGoPzyFFMwxQrdI4l%2Bnv5JohewyaziXhvbi7ctzLObRN7l5YVb1wQtKg090nVak3D3brEI0RCg03FyjevpRverEERTGCUkMb6X%2FN0d6Cl3r49CqtD2qfJUo6Z7ftRriPPoW572pSXW%2FiwDLbAtf5pzE8RsGANbtLMMtJYAPhoBSWBsN2reNMNb%2BLmzsnN4vDDqrVDR8qfFbZBuOPrZAizKfYksM5YlQusUoN9QzbUiMY8tD6t00XgoXXG2YaWPfJErBP0GQEX3FTI3sIDDDhYawlbyahsaDkn%2Bb%2FFEbXVYErpLRLZC8eXU8AsXbysyfwxkh2qN3r4QK%2F5gJyQ438XEv3VqfFvAvA1d8psH8zLn2NsGb3mMtZvXy7qa9We%2BCVQJXiP0PS1uBTNL4KiD3SsSp2nAGNTc5XyxqnGCJzM3OYQxJQw8rrhw4Qxr3GVA%2B5RFPPliwuBX7KVMM6v2MIGOqUBVpUvHdVpVbbBgLEk1nFMVHnw5%2FO%2B1E7%2Bz1%2Fqd4Bbd3cgiHmE259KPle6LjzNDklpteYlOCSDZhDke2I%2B%2Fwba3Ey1F%2FJvHplBj1Wl11ajQTtEwNLAjpXfi%2BjVaC32Yr%2FXg3e3Sb9I8n%2FsoBTzko12YBgeLMpzLAE9wuBhEYlvWt8iQVQCMeAOmxFgDAeZb4AXsN8yAl%2FttOBDEtxSGLvSUaNaj6Lk&X-Amz-Signature=3554acc49be8105498e60f23ccfc3f69239377c27db53d6127c8cb2672e8239a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX4PGOQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEK4qS8fcyGKYEbPk64%2BZOPFE%2BA3OIxpUZpz8Tcxzx9wIgTGua8vTlPsCBtZGUEWtoJcXKEWi01Rzvs7EzyvL3dpMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADrMc1ighG9ey3tVSrcA1woN%2F6A9gMQnOJ5HuqsDD0HNVRuwEXgKci%2F6T2z2Z9zs99kQu5r4seZHfTUmHubHXJVoLF891NZiDgw1jgtr8lqFKF417ngl4rJm5w3M8rpUxLCy5gdBHXe8yWHgeJIWAde50FKS7F2Yu3lrpyg9g0H2jxrdmtTSq7ObDy9Qs4xu80%2FL%2F0RxbwpTebl5PLRPpK3k8B%2FDVNxlyY2ngQ0K4kRe7CjPMNZDG2bd5FzIgY%2B86JO9OaPvnLmNQ7Gnt%2FsLYWLM%2B0m%2BJ1oAdf44YVpSWXOTFCkJLhMfOEPU4uMe6B9q8e57KJ1VrxdYsqB6UGpMxuaZuTwaZ7Cwu%2BcFniwNP5PHXv7hYqXgaZwPQ%2BCxGwkihBhGKg%2BDhKszr7gIzZf0gGVhTNh%2FRb3n0Eu1e02p6ZUgOjLaTTAjypVxYSaSUO4ATlTJ9tBtpppGOL3WJ7Ry4x%2B%2BLXcx30ByNsAmDDZ1M7VrPrcGYI%2FkG8thaYLuOsrSGd4P0JR9hMtqD1UkQcmF1QuqQdEl86XeSgnLUtR69ZowIzOkN30UURWzMaCnMUFpI88FXdFZUPYxAEHOJaHfyD6VWDTBjbEj11pTC%2Fofc5faPCYThwwhvbvKKyZeYzjTWyKXKhvNLiSUN2PMIyw2MIGOqUBnbXYLNQ%2BxWaTLXZ8qovOG9LRSS1XT8YgM4laFjc8XogANkB3Ss4VoAPiLJMF29l5sUQrQFRykqA1K8IOPmuk3RszvgmKWpcUAFpTHsAiX0i2A3%2BjYq665Lx4KXYh%2FaAizfz31xD%2F65NEWjiPBufx%2Bo5LgixBoQy7te5%2FTnWlyVcFH7P6%2FvHogCxpcZuQeEbVCIOov9brPpPiJ661wIGQmXIcg%2F3P&X-Amz-Signature=a3fa7712a30329bb57e3738a5a5a20132430c9572fe951c010c3818d69333257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4XG6HE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipWhcXmyGnvelZZ0n3sOmsKYgKAUe%2F8%2BiX1FpsRCC4wIgHNP%2BFPQZcTT4Z9Ne0Yq3marQMqTyMauKeSeOKD2lqfMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfP3i3A1KKP2x%2BzKyrcA1vB6cuKJJA065RJOaDdvMxzJ4XZyaf39nvnlWsTNcZcwuCW4R9hH41sHWGJSUOZf7U3rGIiAJEi9UoY7PkDsdF5eL1DS%2BSJW35FBB9vq02FBpxPOZn3efJgL1PHoe8f4r9Mk7RSamlQMNXVOsUOBG5AbeeihSC9CrCxlDKfYKWc33zQ1Nf7htgJR4tRA5p39%2F7fvVFvYUKuKYu%2FNmEUsl5tq5is%2BFCx%2FmKZSRXMgHrqkpAMCtOexqbcqqMf7Kn9AGxgxxO%2FjOFcpnNQm8OAhInXrzH3KkgeOPc8JgOqaCD3pH4Veb%2FLaGnEipIActJNQpO9xQTo84vnuw2hpTDu%2BY%2FSlfrxJRKae7SRkB6LUBAGeANWbpNX3P6uo5bkosaUBEvNC9WUZdDFZnxigXixPJe2R2Kmy8ILdEAVllTNjBfRGKcw%2F4Es%2FqE3P%2ByP8DaLX%2Fw0ajoWCoU7S1SWeS5wbmE%2Bbu3DDB%2FGhyR2SG3%2BxEt%2Fuf%2Bf2YEbqt4TN73NNbqSO%2FGJFSCTUo95KVS3Q%2B5AHGGcWVqRGlUmzjVJ5YW7Y9GY8hws0NxfZMorAoL9NOiMgeNRS4Rn8UWjs01EDO%2FqpfErILjIvitJJHKPMcIVxpXvgRo%2Bh581CpMRM7nsMJmv2MIGOqUBvlJvXkKsalgZW1X63R5KVRthcHRpOCXP9RLQm%2BK4IP8QlU4UPiLjXCISQSO9%2B7B%2F1XWfxWJUu7fyNTuWRDXr%2B%2FR9hHp%2FJKS8xig%2FCUTAWQqbJQygFCATN4WqGchzz3biy71a1F5GdzMQd1pDPI69lyRH4rgKQMCqgMuErw423mNLKvC4eSeK0pwI8gr5dzIftNxLhBayFIRdxqcWE5Y53O%2B0ib5J&X-Amz-Signature=211707227dac9132b56f21b0e798c8eaefb1703ccff09d59dde12b194b7740e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
