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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RSOBKA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgo16x7DAH9ovv95arF13b%2Ftm6NinbO7SXdmaV97T1gIgf2lpFFc%2Bpqs3xwDytkTOkVOVO%2F1P5ysHMbXGjhGcFI8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAI7lY2CIWiNf%2FNvIircA4dP6ffsTRp8fX7CO9TXCJf7xaE0j3l%2BGyHzzZoOxyjRU4Uz2P560JuIrJzGNkdtFmG7A1v4U%2BiwXLb2UPO3ZlAAVkzsoNE%2F4yUpf8Xkl%2BHKCa2EI2jl77PQqIbBNvuvmFUA0zuH7IUrVC0cLQi6b%2FDei52SOIrUMGunpMLLydIkwjuCSglblYEZGLofLGPXVzJMmO8krr24aRrpB4TqKJR4PqQs0AaAAxIS5adMl27t0R%2BTY592lcVAC8eeL23eWD0OGcR6NXIRxO5dZ%2FEUanRSq%2BcVlyTuyANvSjO1aJwbtjcwDKgJoXK60mLtoSca6vS3M5cYI25DQoXgrkNocqR5IL%2FDx06wllrToANDcrccVNUYf4xQn1anYrDGD0zS4KH44JIa1X1Z%2FJ%2F3A%2BXnM0RCHCb0RmWyzHgLEyouND%2Bxn4l5zUOMXnv5z6ZxirjK4k5QQKY%2Bm16dmp6%2B1Q2bPx%2BAMyjFb7ynjUWWztMDyolwc%2F34SrEpUtO%2BVlo1rqvzT%2FIUhhsMeIrEqR6P0QgWr6h%2FbAaWzbFeN4U2%2Fr9wRUaRjx7XS0FN5tPzsEwXGTsYzxsQRNXyyecWGwaeLRU%2F1h3mjm11ykkO5M849RljB2XL2MLMhfAUcc6CmO7GMI7Uw8MGOqUBcO%2BXV%2Fdl6IZPUGtD0SXsN08OutU8xTs00SiyMNZqPE51Mvxe%2FOBmwpDLrNZXIHF%2FfXIPTJrgcSysZqSORptwxYU2wAMJhk4cqod0KIXAWSf5k2xIF1Vh2xVJFmL3bXGlSV%2Blo8ofRM%2Frz7meCF3p%2B56B7cr8pE1yBuI0G%2BlZwhFI%2B5dL8dDVulpP9bmdHU8254kRsKPnw4OdVNTaVJbDf0rAR0%2Bc&X-Amz-Signature=51cda4d76f252e74a91362c709a5a5049056ebded944c2f1968b3c029b1ab8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RSOBKA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgo16x7DAH9ovv95arF13b%2Ftm6NinbO7SXdmaV97T1gIgf2lpFFc%2Bpqs3xwDytkTOkVOVO%2F1P5ysHMbXGjhGcFI8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAI7lY2CIWiNf%2FNvIircA4dP6ffsTRp8fX7CO9TXCJf7xaE0j3l%2BGyHzzZoOxyjRU4Uz2P560JuIrJzGNkdtFmG7A1v4U%2BiwXLb2UPO3ZlAAVkzsoNE%2F4yUpf8Xkl%2BHKCa2EI2jl77PQqIbBNvuvmFUA0zuH7IUrVC0cLQi6b%2FDei52SOIrUMGunpMLLydIkwjuCSglblYEZGLofLGPXVzJMmO8krr24aRrpB4TqKJR4PqQs0AaAAxIS5adMl27t0R%2BTY592lcVAC8eeL23eWD0OGcR6NXIRxO5dZ%2FEUanRSq%2BcVlyTuyANvSjO1aJwbtjcwDKgJoXK60mLtoSca6vS3M5cYI25DQoXgrkNocqR5IL%2FDx06wllrToANDcrccVNUYf4xQn1anYrDGD0zS4KH44JIa1X1Z%2FJ%2F3A%2BXnM0RCHCb0RmWyzHgLEyouND%2Bxn4l5zUOMXnv5z6ZxirjK4k5QQKY%2Bm16dmp6%2B1Q2bPx%2BAMyjFb7ynjUWWztMDyolwc%2F34SrEpUtO%2BVlo1rqvzT%2FIUhhsMeIrEqR6P0QgWr6h%2FbAaWzbFeN4U2%2Fr9wRUaRjx7XS0FN5tPzsEwXGTsYzxsQRNXyyecWGwaeLRU%2F1h3mjm11ykkO5M849RljB2XL2MLMhfAUcc6CmO7GMI7Uw8MGOqUBcO%2BXV%2Fdl6IZPUGtD0SXsN08OutU8xTs00SiyMNZqPE51Mvxe%2FOBmwpDLrNZXIHF%2FfXIPTJrgcSysZqSORptwxYU2wAMJhk4cqod0KIXAWSf5k2xIF1Vh2xVJFmL3bXGlSV%2Blo8ofRM%2Frz7meCF3p%2B56B7cr8pE1yBuI0G%2BlZwhFI%2B5dL8dDVulpP9bmdHU8254kRsKPnw4OdVNTaVJbDf0rAR0%2Bc&X-Amz-Signature=e1edcc764f575d50ed521be7be9a967cc2d75a53f2e850ab3bcff922f67ce2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RSOBKA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgo16x7DAH9ovv95arF13b%2Ftm6NinbO7SXdmaV97T1gIgf2lpFFc%2Bpqs3xwDytkTOkVOVO%2F1P5ysHMbXGjhGcFI8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAI7lY2CIWiNf%2FNvIircA4dP6ffsTRp8fX7CO9TXCJf7xaE0j3l%2BGyHzzZoOxyjRU4Uz2P560JuIrJzGNkdtFmG7A1v4U%2BiwXLb2UPO3ZlAAVkzsoNE%2F4yUpf8Xkl%2BHKCa2EI2jl77PQqIbBNvuvmFUA0zuH7IUrVC0cLQi6b%2FDei52SOIrUMGunpMLLydIkwjuCSglblYEZGLofLGPXVzJMmO8krr24aRrpB4TqKJR4PqQs0AaAAxIS5adMl27t0R%2BTY592lcVAC8eeL23eWD0OGcR6NXIRxO5dZ%2FEUanRSq%2BcVlyTuyANvSjO1aJwbtjcwDKgJoXK60mLtoSca6vS3M5cYI25DQoXgrkNocqR5IL%2FDx06wllrToANDcrccVNUYf4xQn1anYrDGD0zS4KH44JIa1X1Z%2FJ%2F3A%2BXnM0RCHCb0RmWyzHgLEyouND%2Bxn4l5zUOMXnv5z6ZxirjK4k5QQKY%2Bm16dmp6%2B1Q2bPx%2BAMyjFb7ynjUWWztMDyolwc%2F34SrEpUtO%2BVlo1rqvzT%2FIUhhsMeIrEqR6P0QgWr6h%2FbAaWzbFeN4U2%2Fr9wRUaRjx7XS0FN5tPzsEwXGTsYzxsQRNXyyecWGwaeLRU%2F1h3mjm11ykkO5M849RljB2XL2MLMhfAUcc6CmO7GMI7Uw8MGOqUBcO%2BXV%2Fdl6IZPUGtD0SXsN08OutU8xTs00SiyMNZqPE51Mvxe%2FOBmwpDLrNZXIHF%2FfXIPTJrgcSysZqSORptwxYU2wAMJhk4cqod0KIXAWSf5k2xIF1Vh2xVJFmL3bXGlSV%2Blo8ofRM%2Frz7meCF3p%2B56B7cr8pE1yBuI0G%2BlZwhFI%2B5dL8dDVulpP9bmdHU8254kRsKPnw4OdVNTaVJbDf0rAR0%2Bc&X-Amz-Signature=72ed3d0a3a32e023dc65658672a2c757961e59b808064e38b96ae653690018b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FBTRA4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIcHtqE5%2BGlxEBOF%2FMZVoc%2BemgAxFQwr1oFJjGmIS84QIhAJveuI%2BXhsRr0Gm470ZyOxHrIgnnUheqoyl9IwjwVM7WKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUUP55P%2FxgNbm3Hrsq3ANL0LL6UhD3%2FpXtYJtVD%2FkfDXg7oyE%2B0GrzfE6r20l7enPK1yOrjWKwMNq%2BSpjEcRy6M35JMv8BcMOPmRPtFb387Ln2fwCEB%2BbY5qKVOSUXD8KJtS1vdI%2FJD0vd5JCz%2Brtiabi%2FKBeaMC5zqOaiLfPq%2FAD2BN%2B7mEzv6kbtmvwnCD6W5ATTjQ%2BbCwf04xcdorNmD1cs%2FkjWWUQdxN93bZYaYd6yRXuHZf%2BBILh%2BZoN2NzDkI1xciw4lbCbfYOUFjdYOQz9EvJMMYy7OyOJfN0ZhK0SDXL1hph37acN8a9G8mZ5%2FJy%2Bk3QK%2BKKyhHGAFNFD90ZUcJSrg4V9U6MzPFHqG%2BHGLK8WUhozoYTRnzpBPqnQbz9vI%2F499%2B7yV4f0udletKktrwZ11LngKl%2B1kM8QtYjWEQYAulgNCGqYcwS4sbdgByf2IAgd99W2u41Wkfksd3nckfkrlmkeuC63l7whCONrn%2FzkwueX2XVLQcsMq%2FckX%2FDRKNdjw9VMaRRMbZK9cnxljzRZXwwFNlsAPtkaOUwg5vMgHaINGv0XoZUvQrtsY2%2FCHeYzL4sIRhIxnpU2CvbanNZgus0FuyUsZAUrzbZf08H%2FsuwfkxUhbyU9uXzOZMdMFYqduqCXHAjC01MPDBjqkAbX%2Fy2DVlUBdw81xwtZv1K5ao2e8erPbU3L54BwXBbewk1z78Pt0Dq%2BP8FNK5I2dgnBeiK15HTbQ6tRUkQlSfn4AG31eA2ehaCMOK2vpSxgXv6GUjEJjzxFyBZXlHI5vLRNF5t6x0E8Q9JvZJC7tgyOc%2ByoiMbPn2%2BGFWRR19NrFnlDbeaKtC5DxasyfAo1cyze%2BJuBLcgDVoKhp9%2BJeMtwEF3Nu&X-Amz-Signature=78f6e59c67aae8fb749d885e015434ef06bdaf25a6778ba1205fdb026ca87c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4B2GA7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6y3nKNcKcLjM0hXGDalP6FSkb7i3DLoJeJ6Ef7vW4KAiEAymy1L62tTF3P2vFMLkTybTrSIeJcWVrWMgBWBRhpFeMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOcR%2BBRRKhohrwJ6CrcA8r91agAQ7g2af3juvt8HkUpCxeSZiypo02OXn36syYnZiun53fLdEX0L6SKOpbJd4dBDuLJqQ58I3cRhEKaz6Bslx2h0I76nvHmcADRnGuQIw5RZeq4cHSh4EWaqfQ7ctH9J2UdnxOtDe2isIWFR2yhYrMsw8Ub2dehXTDo0SoYl5nBg843Xhch1lJjjpljZiU9kM3YQ%2FwUlFkZJS5P4pqDVacPhwCLp6%2BYhmCpgHZsIcZz2BUld2LSUUtBderW7HCazHIEv3yVDeJRW9WrUYWcuPpMn62Sal%2FFqD9HsbKqxAjlms%2FzI%2BXHzUa4Ln2XdE77YB61hHF%2Fso%2FY143Xp8tnE20h2NJ3Xi0MbTO4Rm12rY1g3B3sq4VWOUzgUPFgMRpYdyVJZAkE7hd%2BsWrSUAH2%2Fs5Z3M6dvQcwA885%2B8i5kzZGKuQ0%2Fbj3Hu3wI2LbxdP3powqYuzBjAaPCXUXks6vk4vp91oWrL9LZAe%2BItoeb1fjfRcqf4foSRiunQwmmQpWp9qlLKEE1XIvlWRAhtkA6Biv8DZc5tMyr7L%2FYtwWzd2YxLzBSQAbcmM%2FN2rl7lmUzmeOE%2BFdqHlVGMfMOiQc9xV2dOu0QmEC67oSjgzQ1vrQC8xSaVRylgwVMPTUw8MGOqUB8GvQZuAvecwFwyiJpdpfN4gYklQqCIZn5SRq3Xt%2FQt5kMBcWPMi4%2BRMFAiPQHruPj8Sn929uEjr24WHuosiAtydnDfVEP60iBagBDvYgnzX%2FpvHAXAf4PhvfREi8yWoqSN1tTgnMk%2BWV9MogqqKVTjFu2l7ky6XiM290L4ddqg%2FZfWeHGYObLlmC4FX%2BotlCySJiRRjh1voTcYvNvt5Vzz2jwOAB&X-Amz-Signature=d6eedfa5b1edc517a1fc7f12f503ce3d1d02b7d9d5b5c8b774064c167e4ff3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RSOBKA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgo16x7DAH9ovv95arF13b%2Ftm6NinbO7SXdmaV97T1gIgf2lpFFc%2Bpqs3xwDytkTOkVOVO%2F1P5ysHMbXGjhGcFI8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAI7lY2CIWiNf%2FNvIircA4dP6ffsTRp8fX7CO9TXCJf7xaE0j3l%2BGyHzzZoOxyjRU4Uz2P560JuIrJzGNkdtFmG7A1v4U%2BiwXLb2UPO3ZlAAVkzsoNE%2F4yUpf8Xkl%2BHKCa2EI2jl77PQqIbBNvuvmFUA0zuH7IUrVC0cLQi6b%2FDei52SOIrUMGunpMLLydIkwjuCSglblYEZGLofLGPXVzJMmO8krr24aRrpB4TqKJR4PqQs0AaAAxIS5adMl27t0R%2BTY592lcVAC8eeL23eWD0OGcR6NXIRxO5dZ%2FEUanRSq%2BcVlyTuyANvSjO1aJwbtjcwDKgJoXK60mLtoSca6vS3M5cYI25DQoXgrkNocqR5IL%2FDx06wllrToANDcrccVNUYf4xQn1anYrDGD0zS4KH44JIa1X1Z%2FJ%2F3A%2BXnM0RCHCb0RmWyzHgLEyouND%2Bxn4l5zUOMXnv5z6ZxirjK4k5QQKY%2Bm16dmp6%2B1Q2bPx%2BAMyjFb7ynjUWWztMDyolwc%2F34SrEpUtO%2BVlo1rqvzT%2FIUhhsMeIrEqR6P0QgWr6h%2FbAaWzbFeN4U2%2Fr9wRUaRjx7XS0FN5tPzsEwXGTsYzxsQRNXyyecWGwaeLRU%2F1h3mjm11ykkO5M849RljB2XL2MLMhfAUcc6CmO7GMI7Uw8MGOqUBcO%2BXV%2Fdl6IZPUGtD0SXsN08OutU8xTs00SiyMNZqPE51Mvxe%2FOBmwpDLrNZXIHF%2FfXIPTJrgcSysZqSORptwxYU2wAMJhk4cqod0KIXAWSf5k2xIF1Vh2xVJFmL3bXGlSV%2Blo8ofRM%2Frz7meCF3p%2B56B7cr8pE1yBuI0G%2BlZwhFI%2B5dL8dDVulpP9bmdHU8254kRsKPnw4OdVNTaVJbDf0rAR0%2Bc&X-Amz-Signature=0eca882a51007260d341b15eb870b9c41311146f5f5143b8a490c4d144a0bf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
