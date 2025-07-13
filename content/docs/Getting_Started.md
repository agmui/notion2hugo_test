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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37IGGZS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYkelNc7D8H1SWX0T1sORfdcK9yxprpvES8K%2BQWcUpGAiEAgnWejK%2B5Obtwq92Ekmo0Wxfud%2B3amPVwHvbMThXuKOoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDFUsvIICuhNZLG5YZyrcA9zciC1wNdxiLwbSjIYTQ1134o9AZn1n%2FBE3kGqbVumyaKOEW%2FNcq7bvug4CwgqeDVZZBBr%2BrZzyksvE%2B1Ol11Vd4dTZOHmFYlWvrLHUcEKaOW3xLqfHbnF%2FPVWLccYuGV5CNFplwxi%2BNDX5GsVuZ8VtMuip0mGmYg65LzJcRaaybTwUXILhoE0m8dWJoIqvVk5QCcUH7DH1XuFRBdVh9JeOFmRsqv8GQ8CBM%2FrK9eaET12dMzg7D9C9NbpUwTSdMd6QwEPfaYjljzYb%2FwjCb2Cqj7NdCqXsqRaxFZQJQUbZfaa4CaNmYJiuU97FdU0QGV2KFOfDcBPvoa1wUUz5UajRrzrE4wtNxSFwrb%2FX%2Br87DiEHkkXA%2FYPxuQq5Bz8STRS7GSlX5g0%2Fq1oW6CRUoEfMNnrwAA1L8A%2BuXS7fGvOhKTt97AFfPZ%2B6pQ26cS%2F4InrSHfhgU%2B8zIHnthhO1%2B2XUEUV8xuOMNW6Vtrd76Jj7pz3YxiYTMIR81grv9t3ai6cL9taXcK%2FXrWtPKnpO5Dpkk%2BLlSXgLFCBrzmLxH70op6e7NjGA0G97fU0U12PR5rQfOSF2B8kihrl2LqgFvc2a2z0jztX4TCauta7u1xo4M%2FKu9AeBciVcHvKaMI2Wz8MGOqUBWGrmFAoZZIiazw439hSc1QivtPjTZQDfoJ9NSkgDjgmA6c%2BYcsnsKt2SbikaZHxOT%2FzbbgsvAYbebMWW%2BLu79wY4xzdnFPblao%2F2KVNMcxFaCu5EepiPFz4Pk4VT3z%2FScTwvPITjFvOoE3Psj01DROUv%2BUJJa1rUIpNNP%2FdLT7s1uDBcbLJrYWONQFpfI4vqWiMOpRjMQegwqggGEYIfJ8DOl%2FeG&X-Amz-Signature=1b0c0713bca4cf35dfba2b251d333850d531ee39ce8c0697fb7586a49ac72a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37IGGZS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYkelNc7D8H1SWX0T1sORfdcK9yxprpvES8K%2BQWcUpGAiEAgnWejK%2B5Obtwq92Ekmo0Wxfud%2B3amPVwHvbMThXuKOoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDFUsvIICuhNZLG5YZyrcA9zciC1wNdxiLwbSjIYTQ1134o9AZn1n%2FBE3kGqbVumyaKOEW%2FNcq7bvug4CwgqeDVZZBBr%2BrZzyksvE%2B1Ol11Vd4dTZOHmFYlWvrLHUcEKaOW3xLqfHbnF%2FPVWLccYuGV5CNFplwxi%2BNDX5GsVuZ8VtMuip0mGmYg65LzJcRaaybTwUXILhoE0m8dWJoIqvVk5QCcUH7DH1XuFRBdVh9JeOFmRsqv8GQ8CBM%2FrK9eaET12dMzg7D9C9NbpUwTSdMd6QwEPfaYjljzYb%2FwjCb2Cqj7NdCqXsqRaxFZQJQUbZfaa4CaNmYJiuU97FdU0QGV2KFOfDcBPvoa1wUUz5UajRrzrE4wtNxSFwrb%2FX%2Br87DiEHkkXA%2FYPxuQq5Bz8STRS7GSlX5g0%2Fq1oW6CRUoEfMNnrwAA1L8A%2BuXS7fGvOhKTt97AFfPZ%2B6pQ26cS%2F4InrSHfhgU%2B8zIHnthhO1%2B2XUEUV8xuOMNW6Vtrd76Jj7pz3YxiYTMIR81grv9t3ai6cL9taXcK%2FXrWtPKnpO5Dpkk%2BLlSXgLFCBrzmLxH70op6e7NjGA0G97fU0U12PR5rQfOSF2B8kihrl2LqgFvc2a2z0jztX4TCauta7u1xo4M%2FKu9AeBciVcHvKaMI2Wz8MGOqUBWGrmFAoZZIiazw439hSc1QivtPjTZQDfoJ9NSkgDjgmA6c%2BYcsnsKt2SbikaZHxOT%2FzbbgsvAYbebMWW%2BLu79wY4xzdnFPblao%2F2KVNMcxFaCu5EepiPFz4Pk4VT3z%2FScTwvPITjFvOoE3Psj01DROUv%2BUJJa1rUIpNNP%2FdLT7s1uDBcbLJrYWONQFpfI4vqWiMOpRjMQegwqggGEYIfJ8DOl%2FeG&X-Amz-Signature=6bc1157eb6223ed41790f184802f060d9a14af1ac68b41b36531dc93dc238238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37IGGZS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYkelNc7D8H1SWX0T1sORfdcK9yxprpvES8K%2BQWcUpGAiEAgnWejK%2B5Obtwq92Ekmo0Wxfud%2B3amPVwHvbMThXuKOoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDFUsvIICuhNZLG5YZyrcA9zciC1wNdxiLwbSjIYTQ1134o9AZn1n%2FBE3kGqbVumyaKOEW%2FNcq7bvug4CwgqeDVZZBBr%2BrZzyksvE%2B1Ol11Vd4dTZOHmFYlWvrLHUcEKaOW3xLqfHbnF%2FPVWLccYuGV5CNFplwxi%2BNDX5GsVuZ8VtMuip0mGmYg65LzJcRaaybTwUXILhoE0m8dWJoIqvVk5QCcUH7DH1XuFRBdVh9JeOFmRsqv8GQ8CBM%2FrK9eaET12dMzg7D9C9NbpUwTSdMd6QwEPfaYjljzYb%2FwjCb2Cqj7NdCqXsqRaxFZQJQUbZfaa4CaNmYJiuU97FdU0QGV2KFOfDcBPvoa1wUUz5UajRrzrE4wtNxSFwrb%2FX%2Br87DiEHkkXA%2FYPxuQq5Bz8STRS7GSlX5g0%2Fq1oW6CRUoEfMNnrwAA1L8A%2BuXS7fGvOhKTt97AFfPZ%2B6pQ26cS%2F4InrSHfhgU%2B8zIHnthhO1%2B2XUEUV8xuOMNW6Vtrd76Jj7pz3YxiYTMIR81grv9t3ai6cL9taXcK%2FXrWtPKnpO5Dpkk%2BLlSXgLFCBrzmLxH70op6e7NjGA0G97fU0U12PR5rQfOSF2B8kihrl2LqgFvc2a2z0jztX4TCauta7u1xo4M%2FKu9AeBciVcHvKaMI2Wz8MGOqUBWGrmFAoZZIiazw439hSc1QivtPjTZQDfoJ9NSkgDjgmA6c%2BYcsnsKt2SbikaZHxOT%2FzbbgsvAYbebMWW%2BLu79wY4xzdnFPblao%2F2KVNMcxFaCu5EepiPFz4Pk4VT3z%2FScTwvPITjFvOoE3Psj01DROUv%2BUJJa1rUIpNNP%2FdLT7s1uDBcbLJrYWONQFpfI4vqWiMOpRjMQegwqggGEYIfJ8DOl%2FeG&X-Amz-Signature=46ff8a0e52481f7762d583ebcc404a565788f9956a6fd3c722616c92e92228bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42PWBN4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBhZPSjWXmTHA2u2MJyGcGYNk9ZaJEqMBGlzhVXgLPFQIhAIV0Ipr880jqeYV5UKuOvWHSkbd0ENNCxSADZJ1NobwaKv8DCBgQABoMNjM3NDIzMTgzODA1IgxnL2h47Vms0g74kcYq3AOs7h57ye7e8YGq3XsiKCAzLq%2BBYY%2Fddawgwyr5N35YzsuD8lpDVLKw39ZhBbs3hVQrqJ2Qd%2BD4AIJKY%2ByGlrC2Fe0Zsh1z6RimwId7vkTF%2FgpftKr6IvtcvJdCILrjJaLMNcjWxNE%2BRSXglf9xJRF11AM92q1OUihop4eTHdW9LG47JPMQxTUeaKycFwlIA5nPspS4GJPrEQFXqmrMmPdPH6HkqTqvovnA%2BQYTKXoJkpOZhTJEou9WzGWxHYUMZVra%2FtG4z5utLnX2yPVX1UUPgKMWVFDuSktyzw8x%2BvK6uS230YB7Mc%2BWM2k5XOi1fY0M8%2Bz8aJT7ZjpTMFkyO%2FehBHaz%2BuFoP7It%2FgrrYry1kwI5PWq8bLDYHaR%2FzUAsJRZECgPIjeKPoBTTGcnyGZuS3mxD3anckBYL5VTN%2BV9ZAT0xYghiiw%2BNTooXKl9VTY00tTGlc8y1wHecZkmcqhGpWu7A%2Bs6JvPerrCKCYS5p03xokEc%2BPi2H7UX21dfxxaVtn9uXU26YTd6P%2BJPt0EUOOfpSbtK2Uo8UBbDOBakf62OUaLEMqd%2BfWJEUNK52QrWPa3nhz9t%2F%2FEuYFWgqANRDrxMVNE%2FsoP%2FNwQJR%2FLb5FSCmpALt%2B%2BMOV9udejCSls%2FDBjqkAauigFoDs6U06GIdgRxf34bwVCbMwsEFQ5OdezGjY%2BCDerR4NpdW3%2FrKkbHnZsJ%2B2VFblp75%2BUKc5vzzLpkDNx1cjLcSeeRH%2FofHKycXN5ZfTQOO1t9%2FUBxxrwuZpkkhn1nizP98UYUxjNdJb%2BbJ82eFb4GLdzeZcnVRAraCcy6noquwW01HCBjVTECHOuWnPbiwejmLCIMUxCZi8Ms5MKDqEeSG&X-Amz-Signature=06732dd53b321558a6e34121ac9d95821cfd46ecd4ebe13180fb36bc3a0d1226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NIJYGJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCohrMOcEmnAh5UkKJz0NVu4cs8Lq31ZGRRzRmRhs2dSgIgBsMMkeI4qd26ikeSmmsU1fXKk02Lc9XaBedm4Br%2F1foq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGdHWKW5FzinQ7XDGyrcA%2FTf9PJgO20KdiGQP3MHJ7cSA2yjbCieCWbCvY520NKiM4u2quIBBzMvaxJqQLHUq%2BUlLQCSQXQLI5IbgqrObqmDRC7uYh7aedEIImoZLo6RmSX6dj0WHmkrQJU7zdYTrh6SIy0AFRktTH%2FmSJTAbwj9eonEgHEqTulvE6eCtxdZUMhX0ywbaRdnN1UT6JQQaKcaf9FLoiLtE%2BGwM9iPdXqh2OkDluD9wF%2FUYhIKZeyLYXmzkPJyfTPtpT4cm2JbX8lQtkiX7FijuK%2BDEE80a92XZO7NVgOiqH4rnkUgJOqjvjzeJJSky2DR3%2BYah62tZJ8uKoWWyYnQTMH6D4mcU11LsCb4aXt%2BvxSFNJqC%2BYbU1YbjVzPHjYW%2F2JzEKmbZpMoG3bXoxgn3LKdAE5DKiOBETuN7xE8nYuA%2BbmNw8Xw5lJqTXsxkRyLmv88SJP2vEQzAwjG7RMBq%2F%2BLUWueUYzDu%2BRT1LpegnRsDWxEdkmid9TH5Kznoyn2nvDUGZLEpHJu%2FxvK2YSJP8Cm2WNUwaRz%2BN%2FAaAIccdGCpFW%2FFDyr2SAjdCqlgcwKYbI0fyiF8kBjZjzZOjiBhMH%2Bu3%2FBBy5SXnzCe2hmBpfi1ILtO7WUgbg7XObWjfxNtfnOXMImWz8MGOqUBTTYs5lOaGyGLOq0rGV1aoH5m2C32eAiuvfs%2FmtbISZNBSPrcofpZq8Og2uj6RDqLByA1JJDxpisiPNxc47Fy%2B9JL8tFfyVzLqccH0UxeQF2pPYXVw%2BC3Fe9Fxxo7spEA8tWm82YPUyZASsmuRTDqv9nM5Ta0nVu7IcPKO4w09RfK%2FU5w%2Fr%2FOwxpcmvHZPc%2BW7SVG1cMEAFYaUQAT48kajZOQgGb4&X-Amz-Signature=08fcc18f5f48a44a0414ccb87be2dc75a29877672f4fecca62b6131cdf572036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37IGGZS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYkelNc7D8H1SWX0T1sORfdcK9yxprpvES8K%2BQWcUpGAiEAgnWejK%2B5Obtwq92Ekmo0Wxfud%2B3amPVwHvbMThXuKOoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDFUsvIICuhNZLG5YZyrcA9zciC1wNdxiLwbSjIYTQ1134o9AZn1n%2FBE3kGqbVumyaKOEW%2FNcq7bvug4CwgqeDVZZBBr%2BrZzyksvE%2B1Ol11Vd4dTZOHmFYlWvrLHUcEKaOW3xLqfHbnF%2FPVWLccYuGV5CNFplwxi%2BNDX5GsVuZ8VtMuip0mGmYg65LzJcRaaybTwUXILhoE0m8dWJoIqvVk5QCcUH7DH1XuFRBdVh9JeOFmRsqv8GQ8CBM%2FrK9eaET12dMzg7D9C9NbpUwTSdMd6QwEPfaYjljzYb%2FwjCb2Cqj7NdCqXsqRaxFZQJQUbZfaa4CaNmYJiuU97FdU0QGV2KFOfDcBPvoa1wUUz5UajRrzrE4wtNxSFwrb%2FX%2Br87DiEHkkXA%2FYPxuQq5Bz8STRS7GSlX5g0%2Fq1oW6CRUoEfMNnrwAA1L8A%2BuXS7fGvOhKTt97AFfPZ%2B6pQ26cS%2F4InrSHfhgU%2B8zIHnthhO1%2B2XUEUV8xuOMNW6Vtrd76Jj7pz3YxiYTMIR81grv9t3ai6cL9taXcK%2FXrWtPKnpO5Dpkk%2BLlSXgLFCBrzmLxH70op6e7NjGA0G97fU0U12PR5rQfOSF2B8kihrl2LqgFvc2a2z0jztX4TCauta7u1xo4M%2FKu9AeBciVcHvKaMI2Wz8MGOqUBWGrmFAoZZIiazw439hSc1QivtPjTZQDfoJ9NSkgDjgmA6c%2BYcsnsKt2SbikaZHxOT%2FzbbgsvAYbebMWW%2BLu79wY4xzdnFPblao%2F2KVNMcxFaCu5EepiPFz4Pk4VT3z%2FScTwvPITjFvOoE3Psj01DROUv%2BUJJa1rUIpNNP%2FdLT7s1uDBcbLJrYWONQFpfI4vqWiMOpRjMQegwqggGEYIfJ8DOl%2FeG&X-Amz-Signature=f43ec6d761aec792ed835acdb4db7e633b451475e50cdc75a1467f52b4b54a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
