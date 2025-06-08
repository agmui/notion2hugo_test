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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNC4LUWD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4txxamIqQFNMBJEf8baOsGslOR5OMI9q8RFPxi61dQIgLBMCIdxcptJrIcziKpHMEAfhrIxA9jhBz0lZRpXIu%2FQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE1dJYIliL9VWIbNyrcAwiWdtnD9GdE%2Blk2cTP6FOvfWRpwZL4Zd8hjhKlXJYFkgHLvOnVE8IlIu%2B62IGeHwjZlXidEPhfDW%2FfYvVByEzuX0Uyvb3X5fqrY5NJb27M4TlWpprkI2JFxtzzHhrI0dgvV%2FCdlKdaSRV1eNRh%2FcINOVv2NykoYZPDq9cJJHVsC1h75CXDCB31NhGyGatBjGK%2F4f2zefQ72Yo4iLrv33Yp8MQuObYR0UzSg6p9%2B%2FyYsZPYN1uFyy%2FGFwTN1FUZCrnbus943JjSZMyGiBGbT%2BnkD1dI0%2B3IYgthcCenlbc2iX7JUaoNnhMVeV26Fv6Hw8yPmu6bb9jgqKbt0IS9kD0dThqfN%2FeUfrhy6VczRLfqr712WMf3Of3avGiiWMsfs41v9me2s7Z9TI3U27l5LpFUJh6pL3AJ7y%2F8vAUz3J308nv1sjxQbaYtbgAOlArFBRhLSV8Q7aPbk50V41JW1sKtaLSEBCF0mO9ocEafdtTuVrhEG0CCxUoTZ3c9swXIoik8QtAQ4ZCboD%2BfqpJrj3bvxQuSOXKIoD5gm04LFOjoTDirnrCe4DA8JAe4KoE%2FIjFV2T0gZggDT7uW%2FdolCl9w5m6zuh3LG1XitXfYZcRvoLnZSrkGPQWeEYkCvMOqck8IGOqUBzzvzFn7eGMH5JCN7AyxStwNO5P9YSJ2N4jtT%2FP0eASN%2BO9cwkyVf%2B6%2Fx63aRbAbvqLv7SxTJfBgN%2FRBX3y0RMMtvPv7s24PW%2FUiv6xeXEBPHwrYUdQh4Wf2O%2Blfv7jwzv5a%2F6WICY3RUtm1UxnriLR8wS0xmKwplIRj8XTVgPp8wcNkGGnBQhCQAVbhD6oMwsuO2kXOYJADLnGRbiMUmcqZWYDjG&X-Amz-Signature=8488b2fdd1bbb5276fee2b5122ec4bc87e34608041f3111ad8e0fdadb3dad108&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNC4LUWD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4txxamIqQFNMBJEf8baOsGslOR5OMI9q8RFPxi61dQIgLBMCIdxcptJrIcziKpHMEAfhrIxA9jhBz0lZRpXIu%2FQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE1dJYIliL9VWIbNyrcAwiWdtnD9GdE%2Blk2cTP6FOvfWRpwZL4Zd8hjhKlXJYFkgHLvOnVE8IlIu%2B62IGeHwjZlXidEPhfDW%2FfYvVByEzuX0Uyvb3X5fqrY5NJb27M4TlWpprkI2JFxtzzHhrI0dgvV%2FCdlKdaSRV1eNRh%2FcINOVv2NykoYZPDq9cJJHVsC1h75CXDCB31NhGyGatBjGK%2F4f2zefQ72Yo4iLrv33Yp8MQuObYR0UzSg6p9%2B%2FyYsZPYN1uFyy%2FGFwTN1FUZCrnbus943JjSZMyGiBGbT%2BnkD1dI0%2B3IYgthcCenlbc2iX7JUaoNnhMVeV26Fv6Hw8yPmu6bb9jgqKbt0IS9kD0dThqfN%2FeUfrhy6VczRLfqr712WMf3Of3avGiiWMsfs41v9me2s7Z9TI3U27l5LpFUJh6pL3AJ7y%2F8vAUz3J308nv1sjxQbaYtbgAOlArFBRhLSV8Q7aPbk50V41JW1sKtaLSEBCF0mO9ocEafdtTuVrhEG0CCxUoTZ3c9swXIoik8QtAQ4ZCboD%2BfqpJrj3bvxQuSOXKIoD5gm04LFOjoTDirnrCe4DA8JAe4KoE%2FIjFV2T0gZggDT7uW%2FdolCl9w5m6zuh3LG1XitXfYZcRvoLnZSrkGPQWeEYkCvMOqck8IGOqUBzzvzFn7eGMH5JCN7AyxStwNO5P9YSJ2N4jtT%2FP0eASN%2BO9cwkyVf%2B6%2Fx63aRbAbvqLv7SxTJfBgN%2FRBX3y0RMMtvPv7s24PW%2FUiv6xeXEBPHwrYUdQh4Wf2O%2Blfv7jwzv5a%2F6WICY3RUtm1UxnriLR8wS0xmKwplIRj8XTVgPp8wcNkGGnBQhCQAVbhD6oMwsuO2kXOYJADLnGRbiMUmcqZWYDjG&X-Amz-Signature=6c5f4092b30ac870e86b0a3a29b22faef3913fa1f7367c04aa71b3fbde6903e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNC4LUWD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4txxamIqQFNMBJEf8baOsGslOR5OMI9q8RFPxi61dQIgLBMCIdxcptJrIcziKpHMEAfhrIxA9jhBz0lZRpXIu%2FQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE1dJYIliL9VWIbNyrcAwiWdtnD9GdE%2Blk2cTP6FOvfWRpwZL4Zd8hjhKlXJYFkgHLvOnVE8IlIu%2B62IGeHwjZlXidEPhfDW%2FfYvVByEzuX0Uyvb3X5fqrY5NJb27M4TlWpprkI2JFxtzzHhrI0dgvV%2FCdlKdaSRV1eNRh%2FcINOVv2NykoYZPDq9cJJHVsC1h75CXDCB31NhGyGatBjGK%2F4f2zefQ72Yo4iLrv33Yp8MQuObYR0UzSg6p9%2B%2FyYsZPYN1uFyy%2FGFwTN1FUZCrnbus943JjSZMyGiBGbT%2BnkD1dI0%2B3IYgthcCenlbc2iX7JUaoNnhMVeV26Fv6Hw8yPmu6bb9jgqKbt0IS9kD0dThqfN%2FeUfrhy6VczRLfqr712WMf3Of3avGiiWMsfs41v9me2s7Z9TI3U27l5LpFUJh6pL3AJ7y%2F8vAUz3J308nv1sjxQbaYtbgAOlArFBRhLSV8Q7aPbk50V41JW1sKtaLSEBCF0mO9ocEafdtTuVrhEG0CCxUoTZ3c9swXIoik8QtAQ4ZCboD%2BfqpJrj3bvxQuSOXKIoD5gm04LFOjoTDirnrCe4DA8JAe4KoE%2FIjFV2T0gZggDT7uW%2FdolCl9w5m6zuh3LG1XitXfYZcRvoLnZSrkGPQWeEYkCvMOqck8IGOqUBzzvzFn7eGMH5JCN7AyxStwNO5P9YSJ2N4jtT%2FP0eASN%2BO9cwkyVf%2B6%2Fx63aRbAbvqLv7SxTJfBgN%2FRBX3y0RMMtvPv7s24PW%2FUiv6xeXEBPHwrYUdQh4Wf2O%2Blfv7jwzv5a%2F6WICY3RUtm1UxnriLR8wS0xmKwplIRj8XTVgPp8wcNkGGnBQhCQAVbhD6oMwsuO2kXOYJADLnGRbiMUmcqZWYDjG&X-Amz-Signature=e871b05fce268f152581d7ef9b4c21dfabc54bdced7e3d9b94678af03effd7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLTHEND%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWaFHQN8mHu%2FFhSKOYAHZ1TTctj4KAKuKzPEiPjx6wbAiEA3Ts%2FTnmw1yizrHvgL9V%2Fy1GQhOE6TuQJI9AGUSwDbhEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4aIpRJYvA42%2B9XmSrcA%2BvCyILZOPi6hpZDqyh29eHebw%2FBVZFhuarZTXMce0CDK%2Bi10PTgBZ1HxndfiLQjEYi2NYBT4%2Bi%2BVd1vsrcJIZ33MPe0BRFrr7l5a0Wvx9bpZaO5yOQjiKf2HEjSpFUaPONB9RGYafYKWVzJeUXSj%2FbaPgXv3uGZ0kZjEHWQKqqiM90Woxcpl3oGjXPZ4%2BxcTlUXnEmQsFRgC1IXLzkP3bqu1SWJqhs5BS%2B53i5S%2BsBoAosYGSovA1P1GB47t1R6jWtMoLH0zvhEcxvblbEkqC8%2Fp3Bgn9hOthh5O8Im64laz%2F7mkZ21T%2FVqT3s8bXUPnhP2Z4U88kiGdl8ncFjZn8aRnkxNky3tTnKsTf7ce2thtIXEOOlBpuXf%2B9lNMvDU3b35az1j9jXyqSTDlnvvrB8gyt1oRPy%2BOIAtL8sucjxxNnzH6ROeTLRoq4wEVjQyKiKlA58bQL3zbSvPqNhi3Gxxu%2FzKpZ8K9J%2B7BatnH%2BoO3kvSbFcyi%2F5uGPJTRaSOrvl8GpeLE65%2Fl6hZWtUNvITNj3LP55eVVe4KYkHNPV7DTepaTcH4mAvnRbZKY1kcg3NzRU2YwCzpot7k3NQZcBpg8IvJ%2F4aF8KNY1n63%2FtnkVrRuglf3UyVAhQ1aMIedk8IGOqUBd9Nf75RuCJahxnEWQ2lkxDCOU00Qo%2Bc7IBTp0u%2FF4L4d8tZfR08RYWIwnjODsYvOvvbGqDaYZLF4jb%2FSslSqRW7Mh3rXgY4Foa5PIDIwjeL5%2FijOHv9sY8Wt1wppKaVd69liBgYrxxEBmoEr20SseJmtaJkSpoBaVw66bb7wYjNo7jq8MXRLuILmFaY7bsiAql6K3y7MdbFLFQtO9wJ5R61bJRQF&X-Amz-Signature=9daa7479bc90bfb915df53c2e89d47b7d327993755e08a785b0c37716dd083f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYC3XZPB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8dwF1lS%2Fv%2Bmn4jV19HtXNyZG67Kqkau4ZtJS2boiFPAiAT1RpeL3%2BFoHvpDBVxQcgG0Yc4UV1vLRkxYJXI1OUbsCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2Z2d0Q%2FTNDAR8qeKtwDi4hCsoTiN5zF3E70qSs7qVxAZgkTbTkmI35jND1wKVhdzMpa%2BK7F%2Bv21UCE96AeYOBu3ILHJi9WmifFvVjQvyKR9v0537c7cTynrt5Q0X3KLtyx4PbVf8ZW3vzDSIHVfQqXkDJFez6DwKDflRZ6PAKK3vBku7gcDbnHQ0oNfvzWu9HEku80WD%2FDOVn1RMETzhPCibmADSlD8SKGTPT4KtU%2FaNXsPRg8yfBdOLNPr2%2BgPx4yK6m%2BTPjyxFMaRYw6HeFvHyNB%2B2usInQOuaNnGRQk4gmyR%2FS3s9bwpIdwj%2FTKGDtzkQksKSDtJ8Gs1n5%2FmOXMpr1g%2Fz5x57Evk0J5qfcFynBEhr1Fps72wOO6FVbHAPUpuE5sXz8CyZYy3%2FdiGYIEjYnm6umlyrr65HaQgjFI6bHmCGhP0kY2XcYljzw3U30n9sQ%2BrPnx89OtgdbyQgfbcgYYPqHeu5wsB0tfTiFOuNNLLrAxU9ftQb0NT%2B408UGwYC8FuMEtH%2F%2BN9l7mt9e5zKjCxucj0%2FcrI%2FV85Zm5mnHYN0culDXMK9C6%2F6DgYYf1BQRYxrD2DjvT%2Be1o3e4M3x0UsVBv7PWKGWQ5pRU9CHVNAPWR5daw65aGxUG%2BBprs3Ljcy08O%2BSGEw%2Ba2TwgY6pgFXkeT9fxJ8Egs%2BCN4J6fcEzJ3CzbOj%2F7P4RaA8FgD9t4hz16TpbK5fC%2BBncl1VYaW%2BlxXvV1f7A%2FUZ%2BIn1UjH7hqYMuqBlVw7eegLuhfgM4dsZV3PUw%2FPrxmyhpmwKz0%2Fz3TKUJZO0EIjGL12Wnfj%2BDydrXhKTpeKYCbQyP0VQOQS1GWFDHn1KNCLCMappbjyGlMiO%2FJGmJG7HsaUlIHAHat7%2FL70Q&X-Amz-Signature=6cd275d586835f9c797ac538295b415fb36c1b9e12de51acea652a3e6a1194f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNC4LUWD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4txxamIqQFNMBJEf8baOsGslOR5OMI9q8RFPxi61dQIgLBMCIdxcptJrIcziKpHMEAfhrIxA9jhBz0lZRpXIu%2FQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE1dJYIliL9VWIbNyrcAwiWdtnD9GdE%2Blk2cTP6FOvfWRpwZL4Zd8hjhKlXJYFkgHLvOnVE8IlIu%2B62IGeHwjZlXidEPhfDW%2FfYvVByEzuX0Uyvb3X5fqrY5NJb27M4TlWpprkI2JFxtzzHhrI0dgvV%2FCdlKdaSRV1eNRh%2FcINOVv2NykoYZPDq9cJJHVsC1h75CXDCB31NhGyGatBjGK%2F4f2zefQ72Yo4iLrv33Yp8MQuObYR0UzSg6p9%2B%2FyYsZPYN1uFyy%2FGFwTN1FUZCrnbus943JjSZMyGiBGbT%2BnkD1dI0%2B3IYgthcCenlbc2iX7JUaoNnhMVeV26Fv6Hw8yPmu6bb9jgqKbt0IS9kD0dThqfN%2FeUfrhy6VczRLfqr712WMf3Of3avGiiWMsfs41v9me2s7Z9TI3U27l5LpFUJh6pL3AJ7y%2F8vAUz3J308nv1sjxQbaYtbgAOlArFBRhLSV8Q7aPbk50V41JW1sKtaLSEBCF0mO9ocEafdtTuVrhEG0CCxUoTZ3c9swXIoik8QtAQ4ZCboD%2BfqpJrj3bvxQuSOXKIoD5gm04LFOjoTDirnrCe4DA8JAe4KoE%2FIjFV2T0gZggDT7uW%2FdolCl9w5m6zuh3LG1XitXfYZcRvoLnZSrkGPQWeEYkCvMOqck8IGOqUBzzvzFn7eGMH5JCN7AyxStwNO5P9YSJ2N4jtT%2FP0eASN%2BO9cwkyVf%2B6%2Fx63aRbAbvqLv7SxTJfBgN%2FRBX3y0RMMtvPv7s24PW%2FUiv6xeXEBPHwrYUdQh4Wf2O%2Blfv7jwzv5a%2F6WICY3RUtm1UxnriLR8wS0xmKwplIRj8XTVgPp8wcNkGGnBQhCQAVbhD6oMwsuO2kXOYJADLnGRbiMUmcqZWYDjG&X-Amz-Signature=0ba24b75031c07cf4a21cebc30473efd5a26cd1f591f5ab6c0a1b4198729f813&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
