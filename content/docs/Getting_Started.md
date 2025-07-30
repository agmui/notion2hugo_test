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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEI5P7KV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8JeAP2I8N%2FifuqAd8u30BIS6fVJIuQmV6hwjPYFOlaAiEAy7CInl0uA95OODxcBS%2FtLQ7aW%2BRGkOson6oxzaDAHsUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4%2F3DdHMQ2xiVEUkircA7cFZNORTghaJ%2FPuD%2BUU%2ByxK%2FDdw23yI1wqDBmLLgRLH9qCrsXxpCsKC0bFkXDbwghDp4Gd3fPaiaccW6zmso43p8UbPDG05CchZ4anYZRGF2zaWVUuCVNaSANNcxrQ%2FOAOBfLRAJxb72c5G10qkIw3ZBV5ja4SZ9rTzC8mZtfCNmvljnV4BT0JRt%2B70RiluLB3w80qdAfdj0a4avqcDwrNnbVuky5GFBCAMbisLcdbpji0pNaHoua%2FB7Ry7z0Rtis2Cx7CaX7px8v74vxpElIh6nPCXnZOzZVCWvLzgE%2BV1sFC2AtwJcPkSkeibpdxEwSFKTV7prpkkZcG3g9UTdrNy24N0pSoHrpPj6RfEMVFyIEGYHiy2llglZ6R5rj6WK5C3GlBIYV52dYrrMlmFQykHrbmQFwzskEVp2FfPT1iJRG5FKJ9%2BksrhrSRkwvcFNSdMwQEnoh3Csq1rT%2BkZYDz4XoUZ4tIZ8VwKEgw4A3zq53rWD0Adq92kWqkKiXsaAQRIfKZAAjIyAYN6QTQ5NeewNxXovfLFn%2FAngVcBr2LO%2FIJx3SLrSAf6ptynFP%2FoS55hH8mlgKQ90OsGKhJQEFSoTUI1FEZ%2BlyWrMD4oHtuOUcMmczMIORiFoTIpMPehqMQGOqUBwolw%2BajIaKJLPcd%2FcZVBwsbxWQM9NV%2B3RX0rXPN%2F5Nng%2BpnCkB4oMFh28qmPZ2ipfqYYTLJGMs3w7O2XjDVlIDVEVegtjlbWzRyJbHHOAq3jKlNG8B%2FmwocAvlI8g93MjTTIZXQXOLaVFtN%2F1%2Be7zmq29haUflyNfCwtvNd%2BGHcnQAQWDlciZsbg5TyCHjPh7CbiLvXI2%2BdZPU0wjv7XcGfPN%2FMp&X-Amz-Signature=7991c806c094b60bf5ac06d08586a9a64bd6404748e446148ae1dfd1d5321af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEI5P7KV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8JeAP2I8N%2FifuqAd8u30BIS6fVJIuQmV6hwjPYFOlaAiEAy7CInl0uA95OODxcBS%2FtLQ7aW%2BRGkOson6oxzaDAHsUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4%2F3DdHMQ2xiVEUkircA7cFZNORTghaJ%2FPuD%2BUU%2ByxK%2FDdw23yI1wqDBmLLgRLH9qCrsXxpCsKC0bFkXDbwghDp4Gd3fPaiaccW6zmso43p8UbPDG05CchZ4anYZRGF2zaWVUuCVNaSANNcxrQ%2FOAOBfLRAJxb72c5G10qkIw3ZBV5ja4SZ9rTzC8mZtfCNmvljnV4BT0JRt%2B70RiluLB3w80qdAfdj0a4avqcDwrNnbVuky5GFBCAMbisLcdbpji0pNaHoua%2FB7Ry7z0Rtis2Cx7CaX7px8v74vxpElIh6nPCXnZOzZVCWvLzgE%2BV1sFC2AtwJcPkSkeibpdxEwSFKTV7prpkkZcG3g9UTdrNy24N0pSoHrpPj6RfEMVFyIEGYHiy2llglZ6R5rj6WK5C3GlBIYV52dYrrMlmFQykHrbmQFwzskEVp2FfPT1iJRG5FKJ9%2BksrhrSRkwvcFNSdMwQEnoh3Csq1rT%2BkZYDz4XoUZ4tIZ8VwKEgw4A3zq53rWD0Adq92kWqkKiXsaAQRIfKZAAjIyAYN6QTQ5NeewNxXovfLFn%2FAngVcBr2LO%2FIJx3SLrSAf6ptynFP%2FoS55hH8mlgKQ90OsGKhJQEFSoTUI1FEZ%2BlyWrMD4oHtuOUcMmczMIORiFoTIpMPehqMQGOqUBwolw%2BajIaKJLPcd%2FcZVBwsbxWQM9NV%2B3RX0rXPN%2F5Nng%2BpnCkB4oMFh28qmPZ2ipfqYYTLJGMs3w7O2XjDVlIDVEVegtjlbWzRyJbHHOAq3jKlNG8B%2FmwocAvlI8g93MjTTIZXQXOLaVFtN%2F1%2Be7zmq29haUflyNfCwtvNd%2BGHcnQAQWDlciZsbg5TyCHjPh7CbiLvXI2%2BdZPU0wjv7XcGfPN%2FMp&X-Amz-Signature=bd432beddea5d94b607428bee6b891ade48bb9a78d9e8f23960e9a288cc21f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEI5P7KV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8JeAP2I8N%2FifuqAd8u30BIS6fVJIuQmV6hwjPYFOlaAiEAy7CInl0uA95OODxcBS%2FtLQ7aW%2BRGkOson6oxzaDAHsUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4%2F3DdHMQ2xiVEUkircA7cFZNORTghaJ%2FPuD%2BUU%2ByxK%2FDdw23yI1wqDBmLLgRLH9qCrsXxpCsKC0bFkXDbwghDp4Gd3fPaiaccW6zmso43p8UbPDG05CchZ4anYZRGF2zaWVUuCVNaSANNcxrQ%2FOAOBfLRAJxb72c5G10qkIw3ZBV5ja4SZ9rTzC8mZtfCNmvljnV4BT0JRt%2B70RiluLB3w80qdAfdj0a4avqcDwrNnbVuky5GFBCAMbisLcdbpji0pNaHoua%2FB7Ry7z0Rtis2Cx7CaX7px8v74vxpElIh6nPCXnZOzZVCWvLzgE%2BV1sFC2AtwJcPkSkeibpdxEwSFKTV7prpkkZcG3g9UTdrNy24N0pSoHrpPj6RfEMVFyIEGYHiy2llglZ6R5rj6WK5C3GlBIYV52dYrrMlmFQykHrbmQFwzskEVp2FfPT1iJRG5FKJ9%2BksrhrSRkwvcFNSdMwQEnoh3Csq1rT%2BkZYDz4XoUZ4tIZ8VwKEgw4A3zq53rWD0Adq92kWqkKiXsaAQRIfKZAAjIyAYN6QTQ5NeewNxXovfLFn%2FAngVcBr2LO%2FIJx3SLrSAf6ptynFP%2FoS55hH8mlgKQ90OsGKhJQEFSoTUI1FEZ%2BlyWrMD4oHtuOUcMmczMIORiFoTIpMPehqMQGOqUBwolw%2BajIaKJLPcd%2FcZVBwsbxWQM9NV%2B3RX0rXPN%2F5Nng%2BpnCkB4oMFh28qmPZ2ipfqYYTLJGMs3w7O2XjDVlIDVEVegtjlbWzRyJbHHOAq3jKlNG8B%2FmwocAvlI8g93MjTTIZXQXOLaVFtN%2F1%2Be7zmq29haUflyNfCwtvNd%2BGHcnQAQWDlciZsbg5TyCHjPh7CbiLvXI2%2BdZPU0wjv7XcGfPN%2FMp&X-Amz-Signature=89f2fe25b378d7f1ef70341ba858bc7855966796dc9a2d5fd303aedf7e2d0d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAB6VMZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjDzuKyd1ySiVVx%2BEYjziMeNCoXsFdExkoj2J6XsPPdAIgUVJ9hXkmw6f5k46kCCPyOc6rgxTCcZO4f%2FwB7MXMkqkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGME9N%2FJrtaxU6fk6CrcA49t4c3AZRZCRYqy07%2FzCSjYzS5bMZQn3p0kEwqTOq4TQTWSM5zTTAb640n4woeV8RBPy7F3%2F2tmtKQMWafKTmZ38fmhbQJ5gkOOxGHViWf42UynTusmesC8Rr10MGSc191JvmjxM%2BLSW%2BPJojpdXtZ5QeRvC5gsh4noJXkiGH%2BBt4j5kXzpzwGOdXu60XH3dHFP%2BfmjLfMXgAgw6NajFVfbB03VUB8EnpVdUk75HZW2H0YwsoKQM7UCKrCRr5pq2rAhgsYZemgWPvixOmI2h9tsC1V6gwW8cc94JTZiZ9BJvDIaTp0e0ZF%2BMMt%2Bn8g%2FJC64qzb5Jt7iyuZvP8S13ncH5xaa2S6Lkt0%2FLbgfB7ctkCe%2Fqn6qIB%2BDKwmWQuGiZlJBPNXazEzEtXqEbtSj7uCUjNLPDu7GrM38W8nxNkXDY4wYcK2dJUQZEWn99YHeSDd2JjAoh2n2Iy8IXjpCfWhH5JlzHXqdTd%2Fs0KSBlfODgV5UABO1yJiD3hGb8%2FapqYm%2F%2Fhcw9MFpdVdEyMtrF%2FDYS1xAY3vz%2BhvFlU99fjrjTqEnggsXwlZ2ZsxnJx3VSLnJqlGFOT4MARcETjsvkw56%2BoCw5sYwJbXs8V%2Bq%2BB7IuQInBkejc3vU41s7MLWjqMQGOqUBzwhXc4Bqzmd1V%2FZnFr0Gj0rWEjCz4hTa02%2F30xjB21P7d%2FM5Ojz%2B7JSFoWIZVSzZMy%2FmvmPYPnCybGAV6Nd3%2BgVr%2BTnEfyFxn3fX8AKT8KJjoEP7e%2Bkle%2B3K3XXqyPRRwAIXa%2F1HK69SjBxD2E80KvjUGei58mJBYgqssWNHa9boJb9Z7YgXnqVg1mdPiWpJ4wBAMNHDhsMpSr%2BOUbiAbjahIWCn&X-Amz-Signature=deb42e9f4aa8a84197af8701f8096c7d372a05db250c2c17501adca63e970046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3AJZFD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYDPqf%2F%2FRfLcGXlhtehIt1JBA6YnlTg5mUbkmb7IcRUAiEAtsfji0Zro6VMkhx%2FtpqJ0kQot%2BOZ%2B%2Fmmr3NnaztONX4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDMoTSdrEQstYclrCrcA6G%2FVTIIu2Exe8VsMjCSmck28MIuGPfV7ECUKc4PlAGdf6kc9ToO26hIif8J8znI0vq3uYrfJtsTedc57J7Cwqs%2FMFXkxZFpo66MkpDktobqctrvuS6mPWZJ%2BHXKAxYdMxCY7deU7ku3SXwsNUmQdopKXSaR0YbOc3CWIc0siFtvtyEcQAAi%2FQe2eXStRb%2B0eoKmTKHQD2EtEOVHI0hroNrqplbwYk%2F29gwklEMJIMfTe6XQBVsY5urcbJsZPpXLkITlKK5cDKiJy25RKv7FycBjsfD2%2FgYsMsT18sFap9kfhxUxSjDr%2F9rbExVKv%2BO7pfiMxneNIgtbtfsMq%2BUs6XIC%2FnEkDFpVMvrz%2FSatjetyggjak2ntnB1oGtyyjO4qSAWDPH58XPOQ4rND17CfK35O975O31BybUGxRIeTYmIKJDH%2FivtdarLvEDGtBnj3BiQlSDC4JEOn1ZaXrP8NI%2BVGIHV6bYlei9K96IAFAcl68qDm22gie4gXTsJkf4KBfjIZ61sMw74f9i1xhsXp1OzrYCBvxprI7bTJovLukBzEgx%2FbWKIW6GpAbvmdQjKYU1a7CP3%2FsfGMpGUhENQ7R1TK7gWFrOLcl2VkTDbkySqaUXqbI1gDO4nXQBnrMKqiqMQGOqUBk9TN7EQYvhoaVyRjZimSvI2UuU%2Fp%2BlBbDUpteCrDcGt9gG2T1GQfDCFQLS8t5wXglTS6kwgqjW5SBQd7UvKk1pNyFcrcagwrbuBrejE8etywubONAhLU2BRXsCi6ouu6WClHF95XmK57qnDpmYclD%2B0NOwHDTAIP9Y0WO%2FxRKDK0pUaq6MpfiA0uOHhrD4j7ZrTFo82suQoy5zk9GLOQzjq2h2wZ&X-Amz-Signature=84e341e9857209cd6c20f12127250a877a1f352f131428e29fe55418943d8725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEI5P7KV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8JeAP2I8N%2FifuqAd8u30BIS6fVJIuQmV6hwjPYFOlaAiEAy7CInl0uA95OODxcBS%2FtLQ7aW%2BRGkOson6oxzaDAHsUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4%2F3DdHMQ2xiVEUkircA7cFZNORTghaJ%2FPuD%2BUU%2ByxK%2FDdw23yI1wqDBmLLgRLH9qCrsXxpCsKC0bFkXDbwghDp4Gd3fPaiaccW6zmso43p8UbPDG05CchZ4anYZRGF2zaWVUuCVNaSANNcxrQ%2FOAOBfLRAJxb72c5G10qkIw3ZBV5ja4SZ9rTzC8mZtfCNmvljnV4BT0JRt%2B70RiluLB3w80qdAfdj0a4avqcDwrNnbVuky5GFBCAMbisLcdbpji0pNaHoua%2FB7Ry7z0Rtis2Cx7CaX7px8v74vxpElIh6nPCXnZOzZVCWvLzgE%2BV1sFC2AtwJcPkSkeibpdxEwSFKTV7prpkkZcG3g9UTdrNy24N0pSoHrpPj6RfEMVFyIEGYHiy2llglZ6R5rj6WK5C3GlBIYV52dYrrMlmFQykHrbmQFwzskEVp2FfPT1iJRG5FKJ9%2BksrhrSRkwvcFNSdMwQEnoh3Csq1rT%2BkZYDz4XoUZ4tIZ8VwKEgw4A3zq53rWD0Adq92kWqkKiXsaAQRIfKZAAjIyAYN6QTQ5NeewNxXovfLFn%2FAngVcBr2LO%2FIJx3SLrSAf6ptynFP%2FoS55hH8mlgKQ90OsGKhJQEFSoTUI1FEZ%2BlyWrMD4oHtuOUcMmczMIORiFoTIpMPehqMQGOqUBwolw%2BajIaKJLPcd%2FcZVBwsbxWQM9NV%2B3RX0rXPN%2F5Nng%2BpnCkB4oMFh28qmPZ2ipfqYYTLJGMs3w7O2XjDVlIDVEVegtjlbWzRyJbHHOAq3jKlNG8B%2FmwocAvlI8g93MjTTIZXQXOLaVFtN%2F1%2Be7zmq29haUflyNfCwtvNd%2BGHcnQAQWDlciZsbg5TyCHjPh7CbiLvXI2%2BdZPU0wjv7XcGfPN%2FMp&X-Amz-Signature=186eece22933c881c0c987191e202f2aa336f09e258d4ddd99f8a04fff6de6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
