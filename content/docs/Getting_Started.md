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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKF3M6V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEKfvHpar3PDvQRUXsU8%2FjQWEd08NQQiyRY5X%2FlridKvAiBMaMOX%2FC7KQUPMrFCEOYVtxnUO2xJYc59q4EYkERB%2FMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM6E7lTI5dNMlOvPFDKtwDND2gm%2BYDiI53DBl%2BUbnlcbic0X3OuTlJum99b9J59Lfo2I8vaX%2FKoRHtifA8ogRqWVgYBy9bXT2Ij6%2BKfidvaNAc%2BgUR7p2qSWXqisXTjFwutpj1CKP6%2F0%2BIjwqiVJ0UkmgE3VJzCwaZ7D72vvNz0Eih4LEh8iPew9Cup0QahwVk3s0hDiNFEgDiyB%2BdWeWSHsQeVgAdaX9E0NBayO%2BgeMVGTBpp846CCNtdcQNT36wBxhzYeWgFcvCNG4vEuq%2BPP3IkhPB7TrbnVnBnDQlDNITfnwSute06kOdfG%2F9Ktqb7RfgQzKBzhZ60gWFOsTZlteNSNcHDfBLcPmblDU0hzY6zkzxfkQSCn8jt7qujwHkQlEPvmKKNbjW9bsYr%2FXO0s7vjCY%2FgF7Z%2B7DN9f2lQbSwbM6jFV6t%2F300Jnf9919Bru8%2FG%2F7iV0Ir%2B5HYrtKQc0PPuaKXhGPWRKq0%2FZOOI7Fg%2FCGs0vPk7wd4TTdnsA0VoBC3SOfpSOKkEiYntE6jN5jqx90cwwgHUFM4L7KE9RGl9ImTqbYlV2RDE8qcnnATf1Mbyzu4vPAbGMHuVbd7uXdpHDAwK6RA69aGaQVqyHoUqqBlFxzqErDg5JTo4XaBjB4FP8BF2NrmEPKMw8PqSxAY6pgE8%2BE5JANnDHoqJieMyd1UxLTZV8g4LBEd%2BBvZPuCV84ElEoN8LFxravqVWh4sT2I%2BfSScBrFjmKvFfLnmBtnCxnUq3Ts6W9bXPskdXvZV%2B5TgdLITgwzNAytv0EL9qtSrSnL3DOspLfxZU%2FCljXhroz2p6QsajwBco5upGBlTBJCBI7Vvx8Sh1zIaDxMqRRZnHk4wm8YgAm%2BuMWaF99aEBXHd4SDi5&X-Amz-Signature=1cc25407f224ced5341f3dc126adcd60e0a0681e35c200165362f6d0bff79e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKF3M6V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEKfvHpar3PDvQRUXsU8%2FjQWEd08NQQiyRY5X%2FlridKvAiBMaMOX%2FC7KQUPMrFCEOYVtxnUO2xJYc59q4EYkERB%2FMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM6E7lTI5dNMlOvPFDKtwDND2gm%2BYDiI53DBl%2BUbnlcbic0X3OuTlJum99b9J59Lfo2I8vaX%2FKoRHtifA8ogRqWVgYBy9bXT2Ij6%2BKfidvaNAc%2BgUR7p2qSWXqisXTjFwutpj1CKP6%2F0%2BIjwqiVJ0UkmgE3VJzCwaZ7D72vvNz0Eih4LEh8iPew9Cup0QahwVk3s0hDiNFEgDiyB%2BdWeWSHsQeVgAdaX9E0NBayO%2BgeMVGTBpp846CCNtdcQNT36wBxhzYeWgFcvCNG4vEuq%2BPP3IkhPB7TrbnVnBnDQlDNITfnwSute06kOdfG%2F9Ktqb7RfgQzKBzhZ60gWFOsTZlteNSNcHDfBLcPmblDU0hzY6zkzxfkQSCn8jt7qujwHkQlEPvmKKNbjW9bsYr%2FXO0s7vjCY%2FgF7Z%2B7DN9f2lQbSwbM6jFV6t%2F300Jnf9919Bru8%2FG%2F7iV0Ir%2B5HYrtKQc0PPuaKXhGPWRKq0%2FZOOI7Fg%2FCGs0vPk7wd4TTdnsA0VoBC3SOfpSOKkEiYntE6jN5jqx90cwwgHUFM4L7KE9RGl9ImTqbYlV2RDE8qcnnATf1Mbyzu4vPAbGMHuVbd7uXdpHDAwK6RA69aGaQVqyHoUqqBlFxzqErDg5JTo4XaBjB4FP8BF2NrmEPKMw8PqSxAY6pgE8%2BE5JANnDHoqJieMyd1UxLTZV8g4LBEd%2BBvZPuCV84ElEoN8LFxravqVWh4sT2I%2BfSScBrFjmKvFfLnmBtnCxnUq3Ts6W9bXPskdXvZV%2B5TgdLITgwzNAytv0EL9qtSrSnL3DOspLfxZU%2FCljXhroz2p6QsajwBco5upGBlTBJCBI7Vvx8Sh1zIaDxMqRRZnHk4wm8YgAm%2BuMWaF99aEBXHd4SDi5&X-Amz-Signature=f88822fb36f0feb0b36f426313ddb029a83904982360f8410a19f5e55495e98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKF3M6V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEKfvHpar3PDvQRUXsU8%2FjQWEd08NQQiyRY5X%2FlridKvAiBMaMOX%2FC7KQUPMrFCEOYVtxnUO2xJYc59q4EYkERB%2FMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM6E7lTI5dNMlOvPFDKtwDND2gm%2BYDiI53DBl%2BUbnlcbic0X3OuTlJum99b9J59Lfo2I8vaX%2FKoRHtifA8ogRqWVgYBy9bXT2Ij6%2BKfidvaNAc%2BgUR7p2qSWXqisXTjFwutpj1CKP6%2F0%2BIjwqiVJ0UkmgE3VJzCwaZ7D72vvNz0Eih4LEh8iPew9Cup0QahwVk3s0hDiNFEgDiyB%2BdWeWSHsQeVgAdaX9E0NBayO%2BgeMVGTBpp846CCNtdcQNT36wBxhzYeWgFcvCNG4vEuq%2BPP3IkhPB7TrbnVnBnDQlDNITfnwSute06kOdfG%2F9Ktqb7RfgQzKBzhZ60gWFOsTZlteNSNcHDfBLcPmblDU0hzY6zkzxfkQSCn8jt7qujwHkQlEPvmKKNbjW9bsYr%2FXO0s7vjCY%2FgF7Z%2B7DN9f2lQbSwbM6jFV6t%2F300Jnf9919Bru8%2FG%2F7iV0Ir%2B5HYrtKQc0PPuaKXhGPWRKq0%2FZOOI7Fg%2FCGs0vPk7wd4TTdnsA0VoBC3SOfpSOKkEiYntE6jN5jqx90cwwgHUFM4L7KE9RGl9ImTqbYlV2RDE8qcnnATf1Mbyzu4vPAbGMHuVbd7uXdpHDAwK6RA69aGaQVqyHoUqqBlFxzqErDg5JTo4XaBjB4FP8BF2NrmEPKMw8PqSxAY6pgE8%2BE5JANnDHoqJieMyd1UxLTZV8g4LBEd%2BBvZPuCV84ElEoN8LFxravqVWh4sT2I%2BfSScBrFjmKvFfLnmBtnCxnUq3Ts6W9bXPskdXvZV%2B5TgdLITgwzNAytv0EL9qtSrSnL3DOspLfxZU%2FCljXhroz2p6QsajwBco5upGBlTBJCBI7Vvx8Sh1zIaDxMqRRZnHk4wm8YgAm%2BuMWaF99aEBXHd4SDi5&X-Amz-Signature=d3da0a586d6bf004c8dd13595cfa385a0501d1198e8882cf243a968bf72a1f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFR7D344%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAdFgczkq2MyrKhGNyTqtCNNcwYeSCXVXPgXBCu4HfQaAiEAz8Hn%2BvPeoeQkD4n1EurXp7a1RShBK%2FJezIZBTrsDPGUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLUSAfqe99EykUG5rSrcA8W34vEjBzLQ64o4F%2FCrysz6zd5qVGY2AR5Dy12hnFfeMed68uKNfB8I7wwMbN41ylsTVqFQuaxIKmfzKgex5vDrAEkldh3kM72%2BpvldFIauE3YTP15MSKAkw5Y6dGmzV5cuQcDHpg%2FwBApl5EC21bi1ZVyhQSILst0zJgCKE4Q0sNC6gSqfrDI%2BRk5T1T0ggAqclR1k%2BIvzuZy6WcLS%2B%2BlLA7Ez967Q%2FmFVYpNiWhfb9UjPA3H%2BZyxqoESvZg3mk91xgWLyUHpuvo7r0EZVaRAh8b5RkYXVhTrdjWrLiqVjHH7170nYQfouDK6wAL%2BuqIKWc%2BUiSIMEn6Wp0vFxyIu6JQWaNjskR4x2or0tSs3sytWyhYIKBO9xmKZ2GykJyrpImUBAcGmYsMML1V6lfzDR1395kwC6%2FPPCnKvCWJTY8cQHv4NBP2PDP%2B7nlr9zRwklRL1y%2Fr9AFSV8RqOmZSipzRWCI2rKmqlAFXD8208plgqDcAzWYPjW%2B7fDo4SaxxESYTKdFHNGxzUwTonMG3H7xUy15XHtJQBChqBu%2Bov8B5ygBbXA2eawrU08VfmJFcYcEqp%2BD93aDGmgu9hiZTMVDk445ZlurPlwEKkBwsyHz3aO1JAa%2F%2B6QF1QkMNT5ksQGOqUBXv2bGDnGX2RnPqBTd4%2ByM1nJDrKJg1DDbr2sNTKwOh%2F8%2BGqf%2Frr6fr8iItw9yTov1WxjKugbnGQ6G1uu2eKaywcgsnf6X8vKfmbztQsgPIN9X%2FJ8qnU377aqFVOf1j5pDxWQ67tFbmUzvTg%2Fuj9C%2FopZaNz5eqn6p9UbBKuIHhltaxLNkF438c9szHM5ZFaWI3t9hFAiaqcrIwbDnllOmVE%2Bi%2FCF&X-Amz-Signature=8261b1ade182c91f4d7b854ed12e2dd52c322b0f45ce250ec59828af52adf2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZ6XHJC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICpymuHkKelB0vIVnT8OxnQYy4AsXqS0N%2BX7luJWmZETAiAL%2FEnZl%2FK4llW%2F3aQNStw4NnVqTSoUEyjs%2BWQa9VYdEir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMVZbRZnwC5Mxh7KmeKtwD2Oi7xkYL7xGAef81aHqgFY0%2BgxqU5opYntYLw%2B1zQm%2Bnn2QwWNFh3LYZ0Xuwpdj1jrf7M4liBiraXGg9KJECjp%2FwDkNsp5mP3zAuwraBneFu4O2wIo2Cy0Jo9SAS2%2BfgimGxbXmtFzmFH0G5SGzgyXyTUbcnsCh7l2GnfHc0OPQ8LwojCxRYBqApI4L%2BEPPE%2Fcvy8TUkibpdNlbT8Wcz6Er8ttSi7hcMbzju2%2BPWyb3Qz8gQsUNFXAanj%2BMNvRSmqHh9ZmiILppZ3GcKC6qb2BuNBIPXhvy5M1qkh8lQWiQgLbno2Rn8MUIMkUy1t8onwhLpgc95rYbxEF6Y2WW4NX6EMU5W4Jkh9t%2BsGYWnwXRSk%2FKLR2xjSHMOP7uY7hPmbjqAiobWEhJmBNzs3jpOo3Q5Saybic%2F2abDZahdmiRf5tUYg7pozkbx4QYo70UF%2Bz6E1FJ2gmTYL9n5JhEnAS0n6mJZbFJjlQ5v73Ajr4JZC9ZhMZNQJAXGEPyazhrqGWLy8C2rKUze%2BBAWoPXyV6S4NcTZSoNY%2FhXq62sAAdqEdPTzrFaJeNll9JeaNHyDDKGVen6FCMMSfRyVoYiybx9mrjQ4vtWzlE61tmPCp4z6PcDI3itWgyusFA1owrPqSxAY6pgEIbRLsTk1Dax0Gi%2ByH7sQGf0Ro9LgKF4xIx2mVbAUjYkyPvHNS3aM2dmYEb09ZUlnv7vA%2FF1IkB4sbKdDgUFp52L%2Be5FYLEaDHPKkgbUDRPtOHCYcQQkiIW320veyDihcg7xqIc8mDCs1%2BHd21O1Z%2FiCTH0AsTc08b0wn%2FgdyHkePvYA7M%2B3%2FT3wORLNg7uYfqSVy6krekqOAfBFue7%2FPhSh7yjiE4&X-Amz-Signature=d2abcee6d06df93299a7c76078e602300056a553b5bfc10d455fc852fa02c397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKF3M6V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEKfvHpar3PDvQRUXsU8%2FjQWEd08NQQiyRY5X%2FlridKvAiBMaMOX%2FC7KQUPMrFCEOYVtxnUO2xJYc59q4EYkERB%2FMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM6E7lTI5dNMlOvPFDKtwDND2gm%2BYDiI53DBl%2BUbnlcbic0X3OuTlJum99b9J59Lfo2I8vaX%2FKoRHtifA8ogRqWVgYBy9bXT2Ij6%2BKfidvaNAc%2BgUR7p2qSWXqisXTjFwutpj1CKP6%2F0%2BIjwqiVJ0UkmgE3VJzCwaZ7D72vvNz0Eih4LEh8iPew9Cup0QahwVk3s0hDiNFEgDiyB%2BdWeWSHsQeVgAdaX9E0NBayO%2BgeMVGTBpp846CCNtdcQNT36wBxhzYeWgFcvCNG4vEuq%2BPP3IkhPB7TrbnVnBnDQlDNITfnwSute06kOdfG%2F9Ktqb7RfgQzKBzhZ60gWFOsTZlteNSNcHDfBLcPmblDU0hzY6zkzxfkQSCn8jt7qujwHkQlEPvmKKNbjW9bsYr%2FXO0s7vjCY%2FgF7Z%2B7DN9f2lQbSwbM6jFV6t%2F300Jnf9919Bru8%2FG%2F7iV0Ir%2B5HYrtKQc0PPuaKXhGPWRKq0%2FZOOI7Fg%2FCGs0vPk7wd4TTdnsA0VoBC3SOfpSOKkEiYntE6jN5jqx90cwwgHUFM4L7KE9RGl9ImTqbYlV2RDE8qcnnATf1Mbyzu4vPAbGMHuVbd7uXdpHDAwK6RA69aGaQVqyHoUqqBlFxzqErDg5JTo4XaBjB4FP8BF2NrmEPKMw8PqSxAY6pgE8%2BE5JANnDHoqJieMyd1UxLTZV8g4LBEd%2BBvZPuCV84ElEoN8LFxravqVWh4sT2I%2BfSScBrFjmKvFfLnmBtnCxnUq3Ts6W9bXPskdXvZV%2B5TgdLITgwzNAytv0EL9qtSrSnL3DOspLfxZU%2FCljXhroz2p6QsajwBco5upGBlTBJCBI7Vvx8Sh1zIaDxMqRRZnHk4wm8YgAm%2BuMWaF99aEBXHd4SDi5&X-Amz-Signature=c8a1b74bb2f882d1bd1eb56de248d56e1459bd2124bae3bfd2647013aeabb8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
