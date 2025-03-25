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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWRSOK3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2qOowwKgfstybE9%2BSZWSp8MDoR05dJ33yLewLxY%2FmAiAZxWeX2oR19ooN4qBxsDZVoVFWCNlJGmPSxatHLnApKyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMizNvAF68OZKvLKWaKtwD3aC%2FCULnuUFD%2F7Q6So3M3BzqHwdhsCsKt1QPXPJmb7588EaUHBQ03rhq3rn3elRPFpNlfJTGTyk0%2BzJ7n943mHADIe1bZ1Q8KHT6Z6abaQWblQnGngNRH4qxsaVfY1u2r1Hj1JwbYnlpaITNIUWanlHP%2BtKs0evRDPCrHjm6EdgvITuvUXwJJcCeFVIh61wLSDVIU3fm31HrRMJN2YyUxPrcDcN2ScsSjD4rNRy8UrE5oF%2BX1pQKMlxD3jp6wF3GjW57cTIx9Ju%2BQ4jxvvTHsDxGUAfyjIrZRirFytp8RLIEWytghM0gcNeqclpLk5bhsRect%2BxN46b275VFw%2BpV79%2BgR2Zy2y2Y8qMBxHxQh7zB8%2FC2xzcW4wBGk9ZuyOEO2DDCof0EGnuGugiYjW%2F5Ot8XEURSsXK5L1BcnwDgPhsm1032jJcdZOr4gST3BwtOLQ5soVCwKGqRtBsivLSc8iPL1Kq6qJjGNY7yUOJO8NO8C2lrnNxoW3d5nX%2F2vpyJBAkhkppEmC2FOPk5a0UmEqmXUtzKQauePOzD6VrQbAfqvYQEbfyuX5G0dLJWQVvVDvXZaSP%2Bsrc7nqOl2sMou%2B2rRR%2Bd7gwuXMEm5zMKsuDct4HJ1ufpI4%2FRP9Qw2MaKvwY6pgEIRiOwI5CAcpqBTjv4OxOTP1ZZIgw5Bt9rnqGkbHL3PO0V2PYVlnpx3Mqnw%2FzFzcJ55v097%2FEgbk4kRr4Oygl2inoFMD2m4VVAF6atwZvhxGQ87cgn9BoUUIna7%2FEZMh9RxM8cK2kBlLIFZiUQroijHfnQquN%2B1cu4wqTaw3Q3yVSLl8ivDPkrxLU6HuqXOArxlVleEDPJerUc9PWrnf2ttYNNImI6&X-Amz-Signature=c0952bea2333f16e85639e5a535f7c11b84058de3100a639dc2297ae7045355c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWRSOK3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2qOowwKgfstybE9%2BSZWSp8MDoR05dJ33yLewLxY%2FmAiAZxWeX2oR19ooN4qBxsDZVoVFWCNlJGmPSxatHLnApKyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMizNvAF68OZKvLKWaKtwD3aC%2FCULnuUFD%2F7Q6So3M3BzqHwdhsCsKt1QPXPJmb7588EaUHBQ03rhq3rn3elRPFpNlfJTGTyk0%2BzJ7n943mHADIe1bZ1Q8KHT6Z6abaQWblQnGngNRH4qxsaVfY1u2r1Hj1JwbYnlpaITNIUWanlHP%2BtKs0evRDPCrHjm6EdgvITuvUXwJJcCeFVIh61wLSDVIU3fm31HrRMJN2YyUxPrcDcN2ScsSjD4rNRy8UrE5oF%2BX1pQKMlxD3jp6wF3GjW57cTIx9Ju%2BQ4jxvvTHsDxGUAfyjIrZRirFytp8RLIEWytghM0gcNeqclpLk5bhsRect%2BxN46b275VFw%2BpV79%2BgR2Zy2y2Y8qMBxHxQh7zB8%2FC2xzcW4wBGk9ZuyOEO2DDCof0EGnuGugiYjW%2F5Ot8XEURSsXK5L1BcnwDgPhsm1032jJcdZOr4gST3BwtOLQ5soVCwKGqRtBsivLSc8iPL1Kq6qJjGNY7yUOJO8NO8C2lrnNxoW3d5nX%2F2vpyJBAkhkppEmC2FOPk5a0UmEqmXUtzKQauePOzD6VrQbAfqvYQEbfyuX5G0dLJWQVvVDvXZaSP%2Bsrc7nqOl2sMou%2B2rRR%2Bd7gwuXMEm5zMKsuDct4HJ1ufpI4%2FRP9Qw2MaKvwY6pgEIRiOwI5CAcpqBTjv4OxOTP1ZZIgw5Bt9rnqGkbHL3PO0V2PYVlnpx3Mqnw%2FzFzcJ55v097%2FEgbk4kRr4Oygl2inoFMD2m4VVAF6atwZvhxGQ87cgn9BoUUIna7%2FEZMh9RxM8cK2kBlLIFZiUQroijHfnQquN%2B1cu4wqTaw3Q3yVSLl8ivDPkrxLU6HuqXOArxlVleEDPJerUc9PWrnf2ttYNNImI6&X-Amz-Signature=f6125829b4a88516ff84496f78b21bd3a109f316bfb7d8e274b424be9970e1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUMIYPJ7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVOj8dxj4sIwfQW0c8hkYmRqwOfAsofMKAaK%2B40%2B%2Ff3QIgB%2F3G%2Fqy1x717p7gQz7ZKfpiAwjeoa4bhxolkZcOFMi4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNG5qBfMbmkWNKF1cyrcA8H2ebicrHKP%2FBy64FaaoULFfYHW61QKbVOuAFPsfwJej%2FtiGQ%2BWtA3zgk8PRTLLHal%2F%2FZlV8e3wfFpydbyeJvRYzAIPfDCRGFohoXBMsDhlcJaVRdub0b8a1oODGANWCS0m1GGsM%2FQFAQQ0IsmQ9W2yjvK7nPXskoRRvAi6ea0zezEVXj4lwL7Ibc%2B41UahqxSghm1TgtYlWtxdeAvpP7S30ohVVcdpJZlTc3ip6XJCoMQVSTFYlJJGvvqDD83m3aB9EFw08unkL9EgyS5MGpRB6dD9Fp7QODZ2SZHjk6E5pNrOZXICMbMiCmDHhRG596KeEFTvjn5AP2T8NvKuJ5KwzpzxO8zWAHn687HSq5aw4yDj5rJhMla5R7T2fS7myVcO%2Bz3yhEygG6sLSsQoWRpVidMBe74W4RpnTpm9HBbIH6tDGgQhHv41R6RCGe3bbHm2%2B70oCLbveXfrmtoea3OleQiXudJPvJgmO7q0XsKUdbD4w0YcmYAXmuHy%2BYPXWdqd8m2Np4K%2FFm%2BLuattFrgwtyxeYjvZaU8qG4uZJ8gFCmcOJvEzI5Q5ql7MbfqBMO5k5WqsQQGtdoOc01eoiaDQTyh6P9OBGE3bYXU5XsigTsclT9fK0jBuCq4PMIjGir8GOqUBcGSPu0kC%2FzxJzZaA5a1iZ%2BieXhsxD2gAOQor3NM5XFXDhq%2FlTw7y%2BJV%2BCLs81HA0OoEE%2FhR3Fm6iBJ78FdQsNFd%2BTyHEwrMS1JKeT60wHDl%2FVcYvGTdFbSSa68hygvZdcinwoi4LFhMVPa%2BWWc%2FCgsbW%2BZlKMhv5NtPjFqJ30gsBSl4DhM311pYmwb6S7fcpTDiqla9tw8HafXyZxqaAewVnNbLV&X-Amz-Signature=cae982d4f3e838e414c3485ffaf32a7e18abe09e20a67411b0a5ee0c7cea6809&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQFTFDO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ2KJufNPqNky%2BIBa4%2FK1Tnc%2F7wqN2W7UhxZVdkGzu4QIgWrmXLcR9hkxEDvgJUm4rIM7NZEHirt6ZVdAx%2FrzQNiAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMn40dJcUZ%2FzxNzTJyrcAymsk9sJbWnUGCoYysP6Kvuhc0a%2BCEj5TQ2ffLe2wn2bZ49bB3wxdJGvN2t0YUw8pdUvKWlLC1mSVmULOf2kdyfjvAinOGoebwi89MsptzCRVcX5GpJNshoTqt%2FCVGjSjwXjmH7Vz0dCgUyPGGXf2nH%2FT%2Bl2IcEmy2hToc2bJZ5sin7OQMOlgQP%2F4acdCxE2yCTRZxM03jbw%2BvXzv%2B29UC%2FzcBLrPQBzK%2FZ%2B4Aspmuvnc6fGoguskNgouVRkCXWoVIIIhviKcCQCnc1Fj69bbw8SdJ64wR%2B4wEA56CPZRtcBTEgdZkQNZ4EPIBlIsGaAlIdXJAa2jCNdm7Ui26zoL50lZCC4u171kj4LTA7viq19Gbbkrm5uc5KXvbw0tBsu9VB2WQFeJp8NGAgo5iHOzJ2eMgNOWKEHGCpxPFFin%2BSaZvP55YNtltyyrwg3LYLF%2Bg0lsSPl%2FqhYpLjRNHuQv8339LcD0fly3QwQDRxQZGgbjFqIJUmLj3EgTmC3ckMOea6iGlL%2BMpRy9m%2FoJa13ucZCpTSQm%2BHI47MvzQrgsZgXz68BXRQqB6jeTmpxRDMqPjh%2FUsVz6e5cueY9bLEPmkczC%2BYtxsFuM2SUPk7U%2Fu7U7OtLDn5KNbyQCxklMPLFir8GOqUBTwnSrp0g0S0goh9tQQdpJT9dkGBr2luKTSm4npRZ28yR8FThmdu4APkJu2UAsxJktQ6yqRcPapz09JMBWAWBDGKdu0OoufPMsiFfJxbDtvZSokwW1HxeRf1Tl0hOnGzwNWkYzrIWN4ZVYrS%2Bdhn1rbzhOM3A5lyDK5pctPG87wvDNTJSyOy%2BEMkNkZvHDUzX5H1yOFoyyQCXXSHgVlI4605bfuPA&X-Amz-Signature=e063f18e159e4d545620a12630eeb655d02a7ad5ab63eca57186916858cd9b92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWRSOK3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2qOowwKgfstybE9%2BSZWSp8MDoR05dJ33yLewLxY%2FmAiAZxWeX2oR19ooN4qBxsDZVoVFWCNlJGmPSxatHLnApKyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMizNvAF68OZKvLKWaKtwD3aC%2FCULnuUFD%2F7Q6So3M3BzqHwdhsCsKt1QPXPJmb7588EaUHBQ03rhq3rn3elRPFpNlfJTGTyk0%2BzJ7n943mHADIe1bZ1Q8KHT6Z6abaQWblQnGngNRH4qxsaVfY1u2r1Hj1JwbYnlpaITNIUWanlHP%2BtKs0evRDPCrHjm6EdgvITuvUXwJJcCeFVIh61wLSDVIU3fm31HrRMJN2YyUxPrcDcN2ScsSjD4rNRy8UrE5oF%2BX1pQKMlxD3jp6wF3GjW57cTIx9Ju%2BQ4jxvvTHsDxGUAfyjIrZRirFytp8RLIEWytghM0gcNeqclpLk5bhsRect%2BxN46b275VFw%2BpV79%2BgR2Zy2y2Y8qMBxHxQh7zB8%2FC2xzcW4wBGk9ZuyOEO2DDCof0EGnuGugiYjW%2F5Ot8XEURSsXK5L1BcnwDgPhsm1032jJcdZOr4gST3BwtOLQ5soVCwKGqRtBsivLSc8iPL1Kq6qJjGNY7yUOJO8NO8C2lrnNxoW3d5nX%2F2vpyJBAkhkppEmC2FOPk5a0UmEqmXUtzKQauePOzD6VrQbAfqvYQEbfyuX5G0dLJWQVvVDvXZaSP%2Bsrc7nqOl2sMou%2B2rRR%2Bd7gwuXMEm5zMKsuDct4HJ1ufpI4%2FRP9Qw2MaKvwY6pgEIRiOwI5CAcpqBTjv4OxOTP1ZZIgw5Bt9rnqGkbHL3PO0V2PYVlnpx3Mqnw%2FzFzcJ55v097%2FEgbk4kRr4Oygl2inoFMD2m4VVAF6atwZvhxGQ87cgn9BoUUIna7%2FEZMh9RxM8cK2kBlLIFZiUQroijHfnQquN%2B1cu4wqTaw3Q3yVSLl8ivDPkrxLU6HuqXOArxlVleEDPJerUc9PWrnf2ttYNNImI6&X-Amz-Signature=b183b81c65a9e93d8a3114c86801a150f38771641a71986970f58808072e7493&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
