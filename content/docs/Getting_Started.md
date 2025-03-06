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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F6SGAD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YQRuU7g1ki%2Fr2ztqyjRaY%2BK6ddVdpn8wHuVvIDwFoQIgF1ogEWUr7iXjvkdpDTj5UUrKOyEnxXocs5c53oHFG5Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDD9y4iJXvPlCSj9gMyrcA36A61F%2B8a7zRoX7JSUCaxRgvNky64yYKlaBHySM4UHtaCeSFExE52UJkBZuiRiixVgL0%2F2TPM4WAG08ab2EyUapoVPX7zqqXeqjiMhyhrzqpZtSO%2FDrlBKl9wtTF1J%2FPbCte0tulhXbSuxBe2cmCx7qgt4O3ZuMXPbr%2Bpuw2W%2BUuQ0vUFR3rZPwoMw3AMckL6%2BdrdU3D0Gv3x2EDLArSkNzfuQBFncSv7uvvYZjBP5Zy%2FFSw75yTjQu5tiqfPAnmp8F7%2BPZ84RPLxDxxHBKAE2GhYtuS9Y4hzhX4EUth0zpZDQJawEs10haWmqxFiyFV9QOlgCclj92WtveyTepp7nmhxvxPm%2F28vzyha48DWjC1l%2BjcXaKZjlXELrxTcIS8eyrUxB3yMNxi1pNLsnyoIPDEHGV3EjTuT1c5xsQihR%2FUlvnP2iT2NdN3bbRauZbQj%2FFXm2YJ1zkzQiTuXwleYqNa%2F3Is6FT5z3euOLl%2FEMyNsnM1USO4S83PMj8%2F7al2c7mbLSyDIpQEEPbUVN7GpSPXabf0AX8vGDXErtQ3tOZDBMSEODDC0WR4mnP6GAaXjyawm4aLMWTAn9gKFzmETsmUWMiS3RJT%2FToc89fuBlllt2FI%2FX3SLKOMSO%2FMIPJqL4GOqUBuTkJhi0iwfZ%2BpDavGf%2FoepFkYUpIdzo10L2kyd8TSPMZKj%2BgdaJEfHJg%2B8pqrI%2FOSlpwOh9KIEJEZjEcmmi8r4ZhDVEToDAXRcHCPhbvz0PoIW61S8KsiWdHKp4maTMZevrP3Rlm1%2BE%2FYgpx4iw2GGoOGPO0EBI1UhzA1FRko2BnqZsaquBT6G3kd0UJLbVhLJx4EICEnHvY5b3L12RjrDMCyj1p&X-Amz-Signature=24b2717dc8d53f86dcbe45c36dd106338e59c949823ceed79d5a6235b39a1dda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F6SGAD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YQRuU7g1ki%2Fr2ztqyjRaY%2BK6ddVdpn8wHuVvIDwFoQIgF1ogEWUr7iXjvkdpDTj5UUrKOyEnxXocs5c53oHFG5Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDD9y4iJXvPlCSj9gMyrcA36A61F%2B8a7zRoX7JSUCaxRgvNky64yYKlaBHySM4UHtaCeSFExE52UJkBZuiRiixVgL0%2F2TPM4WAG08ab2EyUapoVPX7zqqXeqjiMhyhrzqpZtSO%2FDrlBKl9wtTF1J%2FPbCte0tulhXbSuxBe2cmCx7qgt4O3ZuMXPbr%2Bpuw2W%2BUuQ0vUFR3rZPwoMw3AMckL6%2BdrdU3D0Gv3x2EDLArSkNzfuQBFncSv7uvvYZjBP5Zy%2FFSw75yTjQu5tiqfPAnmp8F7%2BPZ84RPLxDxxHBKAE2GhYtuS9Y4hzhX4EUth0zpZDQJawEs10haWmqxFiyFV9QOlgCclj92WtveyTepp7nmhxvxPm%2F28vzyha48DWjC1l%2BjcXaKZjlXELrxTcIS8eyrUxB3yMNxi1pNLsnyoIPDEHGV3EjTuT1c5xsQihR%2FUlvnP2iT2NdN3bbRauZbQj%2FFXm2YJ1zkzQiTuXwleYqNa%2F3Is6FT5z3euOLl%2FEMyNsnM1USO4S83PMj8%2F7al2c7mbLSyDIpQEEPbUVN7GpSPXabf0AX8vGDXErtQ3tOZDBMSEODDC0WR4mnP6GAaXjyawm4aLMWTAn9gKFzmETsmUWMiS3RJT%2FToc89fuBlllt2FI%2FX3SLKOMSO%2FMIPJqL4GOqUBuTkJhi0iwfZ%2BpDavGf%2FoepFkYUpIdzo10L2kyd8TSPMZKj%2BgdaJEfHJg%2B8pqrI%2FOSlpwOh9KIEJEZjEcmmi8r4ZhDVEToDAXRcHCPhbvz0PoIW61S8KsiWdHKp4maTMZevrP3Rlm1%2BE%2FYgpx4iw2GGoOGPO0EBI1UhzA1FRko2BnqZsaquBT6G3kd0UJLbVhLJx4EICEnHvY5b3L12RjrDMCyj1p&X-Amz-Signature=9afe668e220c6840eec30e36043e973ba0f69f3661b44b587132f0c5e066478a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSKMFNC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClRUaGOh%2B469QRug%2FW6%2FSbDS5%2Fef8RV9hHTBWz4Ym3MQIgU0MdUdeedII8b%2FmS8d1L27YLvMDIJlkMrRZN7O9%2FusYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPG8UYDq7SBHn1tmDircA%2FqrtYpFdphqW2kmafQD6Piv7jSZz8pzt98umZh0rq1j027E0P%2FFJZATX1qeCUUvZjUjrgufKhyM1HDcDO2rK2vwknF29ImVOVSEuqqwS%2FKdG85O213%2BdhXgL75389jHZHZCa6V1241aA36HAJbxYYkIjHDp5%2FsLaAtzZV7uwP%2FKM8fr4rkMVsp6wppI0Tl7D8D%2FpST%2BlnAwv8TnUypMTefeiOIvuYniriVOSkvw8mR%2F5AMBsuFHnGOZR3tByGcqY1o4VnaDnjdPNSj8JNJh6eQQyV93KQrRNnWbf65QwDLI7LD2kb9XtqRU%2BEsxqcUIZktlqzBIZciNwwyRXb%2Fev0NdXwy2%2FUELUhtWkJcn8NtN2sNl65ZjNAHeG2%2FpBtiIgjz%2B2fy6vW08Jm%2FPBRV8n%2FF%2BQGEzURWMx1d2%2BDvQi%2FzA%2FSVfAcMbIxSr9h9XY506umgQpkDhFMtFwPEHSc5B6V7y678ZVNoEFg21t1dlWCzn%2FkBLNcdpg9FOt7hh2E0R4Ew6ulbG%2FTPnFE9FKGfHlfTOTNAfM%2FRo6A6rb416ENPVlRvEg9zgOqViYC16BySLeSEsMlYDSRz3JBn8JG5nQ76tvX6ilx%2B90ygSfLm7aJUlMKIAvFqtUxowzgmvMNvIqL4GOqUBBB9GMU9ZawkZdGnXe1FNC6RzX6%2FlXfebelQHii4ZygeyPy3znkl%2BEwOFfMhM7aCfLGJstUofilikjCXGYPUl87WL3jVd%2FwRZeRUiSkC1ocJSzXim6p010LzbSuA10jlfiSrWMquThL29l%2FurJopCRcdF7FsJzadDiBA347KDbv3HACxzbLRh32%2FzKTZvjydAZ%2FZtAgnkgvDh%2Bj4YkupanRx3tEvz&X-Amz-Signature=4fdf2e16bdc07f46bf5b566a14dfd6608367dfb5d8b8f43524f89f4ad1e6ec7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVY5BOVX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ8mRfGMYMuI%2FlU16fa0SFzyeJ0ICP1vFh85KCHqm6AwIgFzBXo6CwIk748YTq143YduR83h6dqd0jO1loxs4si4sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDE6Yc0WLo9WsjaJYuircAyi4UhGRBV36G6K7YPjd5PZMEMOMPyETQhu9nF%2Bn2YGF%2FLl1I2pYO3zct60r1Q2pBk8aSX2Wz6DpMXVWFqnzgXijKfB0zT9l1OBKyvuxWf5wiJmxrKoPrOWw9y1k9213BuE22cOVjG9f3gJyl%2FZkh4TT5efKAFAsacJwSVV12E1ucWUO%2FD4z1bfaKEQFv9qaX%2B9gkns%2Bsz7MC%2BHIPy4tf3NyWDtG65bQ4jjCkz8hUy1ivGnBVlMPdFvBGFpnekIZTgn5bPsqK6fjA0camX%2F5DRqfa3RwEIUxiRHGlMOx3WTFaW1KkmiF852DszpmMiwzfZvUw1d%2BIE%2Fq0rNyauOy8CsOhpwy5V6XKeH8SK1cnBz%2Bxf9jRR0UU20t0ISAkwxuuhvQDKboAfA3pm2x%2BL8RmPL57RZ21BgthVKroFT21duTvE1y41uLp8vDn8jzOsIERJ2%2BuK2%2F6awR9P24SdkoMpIpdK1XSbe2XIxw1n5IzJoUJrlGuQRzvLs5sstx2zYm2sUruXaekHf5zIkXx0zOHJafUhUmCYswc8m%2FztnnBwFUQI3R9nvP7NxdPG3bzedlJ0nRSpUvZFc61gtZfkN82b7e6Fig61s63sBZ993ndTkvl3qvJ0fti3y0CXfyMJ7JqL4GOqUBjKN9qksYLA%2BRJD14XrYBKrKHFqFFgOKcm5psEYWxZuiACWmPRZ6DdIJfL2OCzRi51GbwyGOYHmeKHyQRLsvavO3RfRhSyCkx7qSsFAkUR0LS3kHvOhGHNBQriDIAibIZ7MwVnJ1YM1d8yaAbgZWJxwNSj1GVZv36MofNmMtF1GN%2B0fP9ZBFCGSIvLRGNRK0xtGfhVyDReGtfrZBc%2F9oZgSsxxNj8&X-Amz-Signature=609d470c4f8091f2fb854b6dda4bde419e1d6206579f68121887560a4d966ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F6SGAD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YQRuU7g1ki%2Fr2ztqyjRaY%2BK6ddVdpn8wHuVvIDwFoQIgF1ogEWUr7iXjvkdpDTj5UUrKOyEnxXocs5c53oHFG5Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDD9y4iJXvPlCSj9gMyrcA36A61F%2B8a7zRoX7JSUCaxRgvNky64yYKlaBHySM4UHtaCeSFExE52UJkBZuiRiixVgL0%2F2TPM4WAG08ab2EyUapoVPX7zqqXeqjiMhyhrzqpZtSO%2FDrlBKl9wtTF1J%2FPbCte0tulhXbSuxBe2cmCx7qgt4O3ZuMXPbr%2Bpuw2W%2BUuQ0vUFR3rZPwoMw3AMckL6%2BdrdU3D0Gv3x2EDLArSkNzfuQBFncSv7uvvYZjBP5Zy%2FFSw75yTjQu5tiqfPAnmp8F7%2BPZ84RPLxDxxHBKAE2GhYtuS9Y4hzhX4EUth0zpZDQJawEs10haWmqxFiyFV9QOlgCclj92WtveyTepp7nmhxvxPm%2F28vzyha48DWjC1l%2BjcXaKZjlXELrxTcIS8eyrUxB3yMNxi1pNLsnyoIPDEHGV3EjTuT1c5xsQihR%2FUlvnP2iT2NdN3bbRauZbQj%2FFXm2YJ1zkzQiTuXwleYqNa%2F3Is6FT5z3euOLl%2FEMyNsnM1USO4S83PMj8%2F7al2c7mbLSyDIpQEEPbUVN7GpSPXabf0AX8vGDXErtQ3tOZDBMSEODDC0WR4mnP6GAaXjyawm4aLMWTAn9gKFzmETsmUWMiS3RJT%2FToc89fuBlllt2FI%2FX3SLKOMSO%2FMIPJqL4GOqUBuTkJhi0iwfZ%2BpDavGf%2FoepFkYUpIdzo10L2kyd8TSPMZKj%2BgdaJEfHJg%2B8pqrI%2FOSlpwOh9KIEJEZjEcmmi8r4ZhDVEToDAXRcHCPhbvz0PoIW61S8KsiWdHKp4maTMZevrP3Rlm1%2BE%2FYgpx4iw2GGoOGPO0EBI1UhzA1FRko2BnqZsaquBT6G3kd0UJLbVhLJx4EICEnHvY5b3L12RjrDMCyj1p&X-Amz-Signature=458a9f6c8273f17771e0e105369f1ded34592c142fd777c917bd29c4e8c7b544&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
