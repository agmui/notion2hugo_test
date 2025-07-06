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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5TY4MY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHRfgcXm01Ny3%2BO8ThDOU07wAt42L5B0sMZ2yUlmvo4kAiBS%2BahWGoKFkHZmb6mx7NV9txk9pdRx9aBoZD10rmwPiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEbi7scaeLS7UvDA1KtwDHrNjntIzglgaMQNOuMfe1GShH6KLkB5s7Rzkry%2BQF7U%2BWOYnR9ok4ilNVjrLFwqcpc3vS0ijjR%2B8c06otn2sYFEJmd6PSuv5heX6X0CFonAV7fFNY5DtJYDlEFX8eT%2F0dnBU7ugR00T4dAU8hKkHJo%2FU%2F1Uo6dRbf3SUYSzOtVbAVnPHp38LJPB4zteXDy2ZTEpN5po83j9emzKVzEPQCLS5LxXGXYvuAVceNFl9jH%2FFfh2XnxidnfksHTPRJmIw57DaprRpjcPWl3JlGUhoN9PqUQS8Gsl0v%2FPHlbJoVbbydsSD%2B5nYNWJNObFdnD87gxh7qIPYdnYYswpR0AAACj0zBhkmFayorYHhmy9aRFJWnnKg%2FZdqXRiwbyZTh6slj33ElOSFHW%2FeY9SH9pfsPJgxjV2HWhG1SSq%2Fk%2BMLyXyrNF%2FB2%2B19sqbJm6BGgqaTeLOOmQLgeBEddRkCXDwOi31qJJrI1MTHI7S9i5FxmkJDFCais2CfbDlgRDDRDFWp6AyIzN6kuSW9BjcmtKfR2FQE8d1ogIB28cXBfSxoWJ3BR0j2qw0%2FS7B4xc0XY6RMtaRTOez0Aw6tqqypw9OnEb%2FcL%2Bvq83UtETrJwqQP6fOMFTWpjXUMnKw0GxIwk8%2BpwwY6pgH3vvgTYrbvtsF0ZgC4uWdsRJXcziIRgX9y0JzeDekgDYHjIbRkVJQ1%2BehgY2iVOSVZlmIUpF8oOsTrhf4AQIKGwrw7Amqt0lB%2BTAj%2Bi4AxsavoTj%2FjKgnsJ8I8DpHrX6ushQSIlMp0p4wrQdtVrMorczrTLzmxMv4baUHDahJBp%2Bzw6tIFEcwqEuLJOZTi76kuapqFtbaAzwDywBRgTv%2FH2xy5xAuo&X-Amz-Signature=2e092d6abf6e18e45738b72fd975041665e648f9ead4c73b371c4de540daa4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5TY4MY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHRfgcXm01Ny3%2BO8ThDOU07wAt42L5B0sMZ2yUlmvo4kAiBS%2BahWGoKFkHZmb6mx7NV9txk9pdRx9aBoZD10rmwPiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEbi7scaeLS7UvDA1KtwDHrNjntIzglgaMQNOuMfe1GShH6KLkB5s7Rzkry%2BQF7U%2BWOYnR9ok4ilNVjrLFwqcpc3vS0ijjR%2B8c06otn2sYFEJmd6PSuv5heX6X0CFonAV7fFNY5DtJYDlEFX8eT%2F0dnBU7ugR00T4dAU8hKkHJo%2FU%2F1Uo6dRbf3SUYSzOtVbAVnPHp38LJPB4zteXDy2ZTEpN5po83j9emzKVzEPQCLS5LxXGXYvuAVceNFl9jH%2FFfh2XnxidnfksHTPRJmIw57DaprRpjcPWl3JlGUhoN9PqUQS8Gsl0v%2FPHlbJoVbbydsSD%2B5nYNWJNObFdnD87gxh7qIPYdnYYswpR0AAACj0zBhkmFayorYHhmy9aRFJWnnKg%2FZdqXRiwbyZTh6slj33ElOSFHW%2FeY9SH9pfsPJgxjV2HWhG1SSq%2Fk%2BMLyXyrNF%2FB2%2B19sqbJm6BGgqaTeLOOmQLgeBEddRkCXDwOi31qJJrI1MTHI7S9i5FxmkJDFCais2CfbDlgRDDRDFWp6AyIzN6kuSW9BjcmtKfR2FQE8d1ogIB28cXBfSxoWJ3BR0j2qw0%2FS7B4xc0XY6RMtaRTOez0Aw6tqqypw9OnEb%2FcL%2Bvq83UtETrJwqQP6fOMFTWpjXUMnKw0GxIwk8%2BpwwY6pgH3vvgTYrbvtsF0ZgC4uWdsRJXcziIRgX9y0JzeDekgDYHjIbRkVJQ1%2BehgY2iVOSVZlmIUpF8oOsTrhf4AQIKGwrw7Amqt0lB%2BTAj%2Bi4AxsavoTj%2FjKgnsJ8I8DpHrX6ushQSIlMp0p4wrQdtVrMorczrTLzmxMv4baUHDahJBp%2Bzw6tIFEcwqEuLJOZTi76kuapqFtbaAzwDywBRgTv%2FH2xy5xAuo&X-Amz-Signature=91204c6b95358bef0b720919882365604643f5d5e33ea1163a94b5875baf8c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5TY4MY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHRfgcXm01Ny3%2BO8ThDOU07wAt42L5B0sMZ2yUlmvo4kAiBS%2BahWGoKFkHZmb6mx7NV9txk9pdRx9aBoZD10rmwPiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEbi7scaeLS7UvDA1KtwDHrNjntIzglgaMQNOuMfe1GShH6KLkB5s7Rzkry%2BQF7U%2BWOYnR9ok4ilNVjrLFwqcpc3vS0ijjR%2B8c06otn2sYFEJmd6PSuv5heX6X0CFonAV7fFNY5DtJYDlEFX8eT%2F0dnBU7ugR00T4dAU8hKkHJo%2FU%2F1Uo6dRbf3SUYSzOtVbAVnPHp38LJPB4zteXDy2ZTEpN5po83j9emzKVzEPQCLS5LxXGXYvuAVceNFl9jH%2FFfh2XnxidnfksHTPRJmIw57DaprRpjcPWl3JlGUhoN9PqUQS8Gsl0v%2FPHlbJoVbbydsSD%2B5nYNWJNObFdnD87gxh7qIPYdnYYswpR0AAACj0zBhkmFayorYHhmy9aRFJWnnKg%2FZdqXRiwbyZTh6slj33ElOSFHW%2FeY9SH9pfsPJgxjV2HWhG1SSq%2Fk%2BMLyXyrNF%2FB2%2B19sqbJm6BGgqaTeLOOmQLgeBEddRkCXDwOi31qJJrI1MTHI7S9i5FxmkJDFCais2CfbDlgRDDRDFWp6AyIzN6kuSW9BjcmtKfR2FQE8d1ogIB28cXBfSxoWJ3BR0j2qw0%2FS7B4xc0XY6RMtaRTOez0Aw6tqqypw9OnEb%2FcL%2Bvq83UtETrJwqQP6fOMFTWpjXUMnKw0GxIwk8%2BpwwY6pgH3vvgTYrbvtsF0ZgC4uWdsRJXcziIRgX9y0JzeDekgDYHjIbRkVJQ1%2BehgY2iVOSVZlmIUpF8oOsTrhf4AQIKGwrw7Amqt0lB%2BTAj%2Bi4AxsavoTj%2FjKgnsJ8I8DpHrX6ushQSIlMp0p4wrQdtVrMorczrTLzmxMv4baUHDahJBp%2Bzw6tIFEcwqEuLJOZTi76kuapqFtbaAzwDywBRgTv%2FH2xy5xAuo&X-Amz-Signature=31a3bdc9805879a91ddb01d5d61a5ae4e19ce86e8dcf5335ae256549392c96aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTYVCYAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAxxF4ICf1HXi1KLBPXmbx09swthcppbSNWFVfFzO649AiEA%2FGHI%2BDTNTQrkH7wJeRG4z3sLAHKpIplfa5fEptEyfnAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPn44rJfeC9JrF5TWircA3ebjZFV6J2ieidfKBjuv%2B2QYLxJsSPK4MOiZv6pjazakgQi3%2Fc%2BbruMkeb9adpNxG7xUq7Eh3IDT40rb7J7v8QMvahvNnUTHDnnuhUxMknu177%2F9da0u%2FMhxFqpAVUM1wzcA78lobuGv6e%2ByXAf1I6ZjjHEKZJEWqG7C94QUnLDEvcqeTJ2dJ5tb07cKep4YNf%2FUqtd4oEt%2F0OHft42r7ObYdva0%2FB2zJt6hj1f4%2FkupKWLwvrfeB3SJHb%2Fq%2FaQW0F5OUmW84Z%2BEYp8Imi29E8HKOWN%2BfYGdPFd9FAlByCJLbHmxXXXfegSIyGU45qICVZMpEHsnvD8Wn4oGwMSj%2FmBSCtPtRwIfGr2w1mAAu72fmWspmRFWctp%2F0%2FW34qgxbH4G%2Fbqc1x9BjdUio83O60Rymz8OrCPIvpRQVbd0Cou%2BNWzHJMwrKruLPjEekZOZB7jQEQcWTQlYueCtO1gHvEN2QVtepx3ldciLeHXMEHloj1uB4Te%2F7HPUyY0cbgiq%2FgM6V6lHGgxY2P5SCIKRIVZYB2N5lh2rjdJphxJ0Nh3Yv4LCjtE7BJF5YjLo9ffng0RTGTI1vQ4Thg2XHLFo8%2BGp%2FwZns4Sjdson5WRwt0Neytr5qVxgzny%2F1kbMJrbqcMGOqUBGaE%2BacKDGX4Wcfno0QpImr2%2BwJFImz1A0cZFByDhxDG1R9bSfJxIenYF9Flsry0Eap%2BV58CWEG60ZqUuIhwN7DT25XLmLmbXqkZOfc1eYbwy6jM%2FcWmdp5Pis8naDAtRFdEE%2BcY%2FnGPCcDEKWhQFWdRiG6TMWEdry1dRs1I5lHm%2B85WjKDwYNQUoHnHP2GO40OqPA7Tjn2mlDydapxoY4KmWT%2Bal&X-Amz-Signature=36d6c3fc9c3f5c38ab66bbe4bf21bf3aef5a9ee4639369c9f56cd143c6114509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFHJD4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAfpN016QgzAyB2OJiRNcPvi75YE%2FjxTUjTNBwhvWxJAAiEAyfjeF%2BV8hxE%2Besfuo9z9%2BMu6vV2%2FbKdR7Sm4uOiraIoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAlI8SxPvdOEAB8FircAzocDb1mPqJmDMtOhLAxn60uyE0sKz%2FdeqhDloRAUXp%2B9XdrrDg1wTRIePrlZMLIVw2qqDEm4Tg8XYpcJeAPuZem0s5yuZ4JIriqxgGExbY2ihRaY6AuNo6R9svXqtowCF9hIv9WOjzLzWyNL%2BA53D7xZ7sKcqpI8Y9q6adj7%2Ft2xapl5rh9PjJYoEGIMeMU3dbPz0MNTMVflWwZvVBJ7ayLrJRWh8ucwo2e2D4CcGFSgEN9tlBe%2FP7z%2FBgjSW6DVv2npPT%2B%2BcgaP1QKfP92kAkrUkxKngO%2FjN6RaUGAkiuylmAbM50gwPR%2FT2ujcwHym0CxasaD1mJlOXVhI%2Bj86ukf02ugNZ2C3g%2FlliJKCGv3PbF0ZT5kT8PrTOAMlW7cOtsSH7ZB3B5NwHeHqmH2mcvNpYFFlwNma6XuGEqUJkTcO6MYcJQShcONmqKOzw47UlpvPMR6EWjRcabO%2BR%2B%2FlgxBpX20%2BV59SKPtvPe5rmgBLk%2BT11LlvU%2Fbo7JYAloL96FTXjDrtyhO1qrjuobp1l3pOYK5skzGZU5UaFKCEcP7k%2Bip179BuSa4Hvcr1IaTnRnB0jTHu%2B1zsEDVvGvk5Hv0bJy86Z7wZp6MCb2nMKCaKalnQpt5CqbRxXZKMMi0qsMGOqUBTu1gqmuEChq9AeutXdDqxM%2FSP5GAHcTzMXOAeJhC7oy8zY92Srv5ecZ7pbf752dtAfKVRSR2hyhJ7rTmxg59zIx7ozJWU5R9Vf2rvngIdzPn5ptOcQOVpIquE0OmWSUzRyhe%2FtDayW2je4D%2FisTF%2Bb7aw%2FIII1BaCNlGv1WqvpvhEM6vm56uudBJ1Cd1PdlckWiHDPlwbTB1NutnBdkQSpBDmG69&X-Amz-Signature=b49c372cc9dcd5859aadd58697e94cd37609955a5eae7bc1db9f69a0aa1982c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5TY4MY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHRfgcXm01Ny3%2BO8ThDOU07wAt42L5B0sMZ2yUlmvo4kAiBS%2BahWGoKFkHZmb6mx7NV9txk9pdRx9aBoZD10rmwPiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEbi7scaeLS7UvDA1KtwDHrNjntIzglgaMQNOuMfe1GShH6KLkB5s7Rzkry%2BQF7U%2BWOYnR9ok4ilNVjrLFwqcpc3vS0ijjR%2B8c06otn2sYFEJmd6PSuv5heX6X0CFonAV7fFNY5DtJYDlEFX8eT%2F0dnBU7ugR00T4dAU8hKkHJo%2FU%2F1Uo6dRbf3SUYSzOtVbAVnPHp38LJPB4zteXDy2ZTEpN5po83j9emzKVzEPQCLS5LxXGXYvuAVceNFl9jH%2FFfh2XnxidnfksHTPRJmIw57DaprRpjcPWl3JlGUhoN9PqUQS8Gsl0v%2FPHlbJoVbbydsSD%2B5nYNWJNObFdnD87gxh7qIPYdnYYswpR0AAACj0zBhkmFayorYHhmy9aRFJWnnKg%2FZdqXRiwbyZTh6slj33ElOSFHW%2FeY9SH9pfsPJgxjV2HWhG1SSq%2Fk%2BMLyXyrNF%2FB2%2B19sqbJm6BGgqaTeLOOmQLgeBEddRkCXDwOi31qJJrI1MTHI7S9i5FxmkJDFCais2CfbDlgRDDRDFWp6AyIzN6kuSW9BjcmtKfR2FQE8d1ogIB28cXBfSxoWJ3BR0j2qw0%2FS7B4xc0XY6RMtaRTOez0Aw6tqqypw9OnEb%2FcL%2Bvq83UtETrJwqQP6fOMFTWpjXUMnKw0GxIwk8%2BpwwY6pgH3vvgTYrbvtsF0ZgC4uWdsRJXcziIRgX9y0JzeDekgDYHjIbRkVJQ1%2BehgY2iVOSVZlmIUpF8oOsTrhf4AQIKGwrw7Amqt0lB%2BTAj%2Bi4AxsavoTj%2FjKgnsJ8I8DpHrX6ushQSIlMp0p4wrQdtVrMorczrTLzmxMv4baUHDahJBp%2Bzw6tIFEcwqEuLJOZTi76kuapqFtbaAzwDywBRgTv%2FH2xy5xAuo&X-Amz-Signature=f9399a00f1666699f6a14eef2bb55785c3b76b492a4980ab50c196b0df26a701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
