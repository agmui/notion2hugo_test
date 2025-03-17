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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3CNNGU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1g3dEp0w9YYqEsDcyhNNOS7rXyYYzgJHesPZYDP4aEAiEAp%2BV6RaOW%2BNG8cnLYRvQIRVkOt9H7f4UoTQp08H%2F4blwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLXdvnVGGPRwNeG2CircA0vKVoFvCCRmHDs%2Fw0zMo5mSOJ2HxctnqbNcFG94QwpoURooM4F%2B0tFpUDx630Gizv6FS7aWV8D%2B9Uxfqh00YC%2FCY8KzujgI2PCzV%2BSFApH6FpC6UoRZv4k%2Byp1bR5dktbVzIH%2Bzq0q7ZbqIvYq2EvzsivzGJxNw9A3hEo3IT%2FgGXfXubg1n4alEI3T24BTKRC%2BrvrHq%2F%2FaBshWP2QnxiRtPyscOrh44P7G7C5xD4gW%2FedTafLoa406OW7cRi91OYstiHCZiZZk1HSfjJpeZoiOJmZdc2J6PnXIwdhc%2BARvqsm66UBR4SmaBdNtw3tjPVkF2qJfDPEaF8jvaHTVr3i0kNEUK%2Bwslkj2g4ruz1S4BGPVFHv4CIqWbnuPHnyKXiVwylpCqhwgrH%2FomyIYaIRi98bIsYei4Geme54NN9IZ20iPEg%2BhQgUmduMMM4C59kRVJWIf9xjsDPrx8S9x1nnqY9tR%2BiuiPc6gBmMN9LFrbUejw8eLLP7FCOQmoXzBAsld3qaVh26%2B7h%2Fmnz9o7dgXM6HKSm71EUJcTbeo7%2FTljG9B6QO78L5JjK1QSNmo%2BUnUW%2Fel4w7TAsCFdfhgdY28t5rUAZz6nGl1247nJKCs8k7bMXgpsKPMZMpk9MIrl4b4GOqUBWPL9dujWE8t%2BvskpPoBf4H37Rj9rJ0yPqWTlEdosab%2BcLggxYo56adFNL0qHQRoyc1u8zm2VOi%2FOIWC6UPSInoW%2FtWpea4Ucx03Gl7yJOtur2h9AQMIRiN8PPgMZs3eO0VHw50LzUG5B%2BrGdutCzPSKT3QaUrzF0Iqi4uXmDwNl146Ilr97DCEcTHkidbfGC4FhlsPEH8OfFYIcGlRGYLYzFHSaX&X-Amz-Signature=a8e87583be3adfd60e750bd0c4b347a9798b066b15b1cb7e5f7708140b17a9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3CNNGU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1g3dEp0w9YYqEsDcyhNNOS7rXyYYzgJHesPZYDP4aEAiEAp%2BV6RaOW%2BNG8cnLYRvQIRVkOt9H7f4UoTQp08H%2F4blwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLXdvnVGGPRwNeG2CircA0vKVoFvCCRmHDs%2Fw0zMo5mSOJ2HxctnqbNcFG94QwpoURooM4F%2B0tFpUDx630Gizv6FS7aWV8D%2B9Uxfqh00YC%2FCY8KzujgI2PCzV%2BSFApH6FpC6UoRZv4k%2Byp1bR5dktbVzIH%2Bzq0q7ZbqIvYq2EvzsivzGJxNw9A3hEo3IT%2FgGXfXubg1n4alEI3T24BTKRC%2BrvrHq%2F%2FaBshWP2QnxiRtPyscOrh44P7G7C5xD4gW%2FedTafLoa406OW7cRi91OYstiHCZiZZk1HSfjJpeZoiOJmZdc2J6PnXIwdhc%2BARvqsm66UBR4SmaBdNtw3tjPVkF2qJfDPEaF8jvaHTVr3i0kNEUK%2Bwslkj2g4ruz1S4BGPVFHv4CIqWbnuPHnyKXiVwylpCqhwgrH%2FomyIYaIRi98bIsYei4Geme54NN9IZ20iPEg%2BhQgUmduMMM4C59kRVJWIf9xjsDPrx8S9x1nnqY9tR%2BiuiPc6gBmMN9LFrbUejw8eLLP7FCOQmoXzBAsld3qaVh26%2B7h%2Fmnz9o7dgXM6HKSm71EUJcTbeo7%2FTljG9B6QO78L5JjK1QSNmo%2BUnUW%2Fel4w7TAsCFdfhgdY28t5rUAZz6nGl1247nJKCs8k7bMXgpsKPMZMpk9MIrl4b4GOqUBWPL9dujWE8t%2BvskpPoBf4H37Rj9rJ0yPqWTlEdosab%2BcLggxYo56adFNL0qHQRoyc1u8zm2VOi%2FOIWC6UPSInoW%2FtWpea4Ucx03Gl7yJOtur2h9AQMIRiN8PPgMZs3eO0VHw50LzUG5B%2BrGdutCzPSKT3QaUrzF0Iqi4uXmDwNl146Ilr97DCEcTHkidbfGC4FhlsPEH8OfFYIcGlRGYLYzFHSaX&X-Amz-Signature=7bf8b5128734527d106cd88054d2d91461489a0f2f28db13a1b5d12fbe1b58ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EVW7NMW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWphfOV9J2v0SF6kGcnG%2FPaloUWX8Blj%2FtgzNkhpNl3QIgJDOzXului6uBdb2z%2B9iBUOWgG5ELP7XTbu4cr%2BgJABQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDF2yWHjTYpONDQ6l6SrcA7Xa4NTGYPtHx0CAfFTiZhm55%2FAh4SbvTV66szKRya344rS5czHj29rfCwiUf%2BVzUqI8w%2Bmk2dZZ7gHB4WfRe%2F5IvUHdX2p6B1sNDX9TQFclqsgwOauyPF7tm59ZpA%2BoZIFDPPBqqD4FhhNX%2FVhyafeFiDJrWgX3c%2FplR4c9z8ossd4Fb4O62odjWx8ab%2Fka6B%2FrFXnP%2BfBpBc0mB6anUMzOtJDIx%2FQG6KRupiRPVX2DwrHuA7UBroUWR%2Bix2YAclj9JEjQrgrbZMqCDMsg5HS6io9zrot5vtpDDbVWV3PL2RjlBGmBuIsIaxCwqVSyX7w%2BAYEdOJlcuXqJ6dUr5SgrSyR8LKaN6B9%2BdTlhByyXkX4iaF5Ae62sBfDorioPVCIlYH77lsg5vh6aYMAa7975GaVCRE6S6oC9xH5oDcHF24zva76KpfijGsCg8LaebHKQM5g9xqkcR293ZRWmile%2BoSCaI%2BB1cf0IF%2BvTDc3EliIomP80ebQJKZa%2B8d4Mk3cuZFgtj%2Bc3PLsTnSmwIoDtmtRABtIX7rKxR6tfPqqvevX%2FUPFiYqoRBnpqCQ2fogh5nVFSWV65ZcC7U%2FtpL1Sy9Iq9nxJAFMav8AuQaaVCQlZEMQVROT0ZxrpQqMIzl4b4GOqUB4QV0Z48NpAmOtvETxAuN6%2BsdqDDn95R6DY7IxQfFVCpg0BC3V9iVAbTbCZ%2Fv5od%2Blhgn5DkFbQFeEUPX4Dt%2BP6tFdEOQPoSHZjvKYf8Vb2blNVnavTO14fqAys8LlHaxsOAPevlluGWknIHlgAVKsxchyhRoQSLFp68BoL3L6kewMBTP8%2BYACEG5NkqSxXkv1VEsnoub%2B01FKDrf6Qitc7cmaNbA&X-Amz-Signature=6fd5e6f049810a0d0ce1848f2cab414dd002bcb89f2fa99a3e472df921d8442b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHHIML3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6DtUIDh%2BVCMnGjd8u73QmKTzYHnR4L9q%2F2%2FF3dfYyNAIhAMbI5RtVpDeRFvhaTTPOnv6lSduwkGFdN96V9%2FsRbm8mKv8DCEwQABoMNjM3NDIzMTgzODA1Igw7X0iEDVJeGtFFspUq3ANBfSdXkufqysiRlMDsA51OY5JqeCARdEfr1vF53pcsSTI8xXXJhizpCXpAZ1w2r0JJ%2FJS%2B7nPWTvBU8QZcSc%2BklTlqmk459ai5DHZE%2FIHDmJTX%2FpWwQ%2FqqzzoIpsFqSKGGh%2Fw3I4Nqvqm3vAvuzTFw23joqWa%2BnieCeZMyBWwytSfuWQzu4kjCLSK3qvvb%2BxdnRZtl7Z3G%2Fez1T6E8iU6pP7PRud9MfKnLy7RyFH3faPRWEq%2BFeKVB9ospI7oQOqNeH5sHnW8pqzjYevW7zQG0bL24p0NlMmW%2FGHpdC%2BOUg5rHFWMZX7Qr5QTLQe8K2lHpAx4628iOc%2Bz36WH533W%2FBjSA06p8oVmZii2jZbQ9ebwIG0eQaxbM1bQEEVmS62hT5E16IMDUGbkSigUSeWpqO%2BcMCS0zHpOSGqWIWdaVSd%2BcKCmnmFjYvNQhqYOykhXIi2BFchFU8flLcS6ZrKHQN3o%2FcuyzR%2BWQ5Q1G1ekS68x9nuiJ1R1m4Mbu0FKBCFZzBAAMduBFCFDjvfQ4vtCxpn0UbPTU0hUCPGWTIgblKuKEM8YuYAqM8YBoOaoS97INb5pEXj4N2LPW%2BPo5EMCCirvuyS5HMs1VPT4CTla9wurbafLSqgRl%2Fw1SVzDz5OG%2BBjqkARm%2BWNEPWCcW%2BkrprawQvG4iSzB%2FgWHyjR2XOkiNeYpRV13ndChSNYxkXL1rJlwTs0gfKvH4WDIkPB7huB2oCnhPL9njXQOTSgCbbu9BJ33Bt6SU5PKb1tjzAelntuzZoquNGxY853VhjkFdAMiOAexT1h%2ByuEozzDyxzDL42hZUzH7zlIrpni%2BcHd5ySMoCjExcVteGlJ2dz%2BHtL11IuGa3eDC6&X-Amz-Signature=3d797898e759fb9e5e1e7b6563d0e5f9d07370b14f56728514fca97116f4baa8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3CNNGU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1g3dEp0w9YYqEsDcyhNNOS7rXyYYzgJHesPZYDP4aEAiEAp%2BV6RaOW%2BNG8cnLYRvQIRVkOt9H7f4UoTQp08H%2F4blwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLXdvnVGGPRwNeG2CircA0vKVoFvCCRmHDs%2Fw0zMo5mSOJ2HxctnqbNcFG94QwpoURooM4F%2B0tFpUDx630Gizv6FS7aWV8D%2B9Uxfqh00YC%2FCY8KzujgI2PCzV%2BSFApH6FpC6UoRZv4k%2Byp1bR5dktbVzIH%2Bzq0q7ZbqIvYq2EvzsivzGJxNw9A3hEo3IT%2FgGXfXubg1n4alEI3T24BTKRC%2BrvrHq%2F%2FaBshWP2QnxiRtPyscOrh44P7G7C5xD4gW%2FedTafLoa406OW7cRi91OYstiHCZiZZk1HSfjJpeZoiOJmZdc2J6PnXIwdhc%2BARvqsm66UBR4SmaBdNtw3tjPVkF2qJfDPEaF8jvaHTVr3i0kNEUK%2Bwslkj2g4ruz1S4BGPVFHv4CIqWbnuPHnyKXiVwylpCqhwgrH%2FomyIYaIRi98bIsYei4Geme54NN9IZ20iPEg%2BhQgUmduMMM4C59kRVJWIf9xjsDPrx8S9x1nnqY9tR%2BiuiPc6gBmMN9LFrbUejw8eLLP7FCOQmoXzBAsld3qaVh26%2B7h%2Fmnz9o7dgXM6HKSm71EUJcTbeo7%2FTljG9B6QO78L5JjK1QSNmo%2BUnUW%2Fel4w7TAsCFdfhgdY28t5rUAZz6nGl1247nJKCs8k7bMXgpsKPMZMpk9MIrl4b4GOqUBWPL9dujWE8t%2BvskpPoBf4H37Rj9rJ0yPqWTlEdosab%2BcLggxYo56adFNL0qHQRoyc1u8zm2VOi%2FOIWC6UPSInoW%2FtWpea4Ucx03Gl7yJOtur2h9AQMIRiN8PPgMZs3eO0VHw50LzUG5B%2BrGdutCzPSKT3QaUrzF0Iqi4uXmDwNl146Ilr97DCEcTHkidbfGC4FhlsPEH8OfFYIcGlRGYLYzFHSaX&X-Amz-Signature=a0f1b52bc167c13c1a09a64bd4b7ad86023334ebdac1698080e1fbc38a76481c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
