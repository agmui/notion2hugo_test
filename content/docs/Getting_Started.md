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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VHZAH7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhPtSp7Wf1xO6FjtLG%2BNve4vSF%2BZp5AwFTfHOx55hX6AiEAwxHKlTimlop%2FpaRg3PA8YhVqdRSK5zt9gniLQPDr61YqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRnzYYIljQPtxjEyrcA58BeOVU3GPmW%2F3Nze1ttdKdEjmXgU9IFdwSAXOOF2frnjpgqcRVmdK3pFgTfS60xgsM%2FhLUkkMGPtALdBhMf%2BULV2MXxvzTJdhDp75CIow82i7TJnBofncwbn%2FMw1xcg5bbRMltwld7bQudgqJyMRl3UN2Fzd6KInIvRxAmnyQoyBIsV0IUpU9g9iQHI6gtu6d6ZyamPQAqWAIu8Rci7BgVaCwLrgBK3EOWTD5Eg13h3ZHxKtREXRYbt%2B1hgd3sP0JgEaBq5J18t%2F%2Fy9lozJ%2FEZDAEmkuYdnrQrkp0YlF9n8Lx98%2FktoKQZhntuEis4gBBoJEM4ZEvEYtxiF1stwtEu1oqs%2Fv0KYKc%2FtwoNryz9mZNwp%2BY9WjwaiXGQFR89VNJlFqxv39MW0h%2FOOUiHZKeJ6lFQImwyKfzSD12dq20mPhNsGT9hkKoGZ9OJeeI2YvrlAdq0beXrZ8mHbA0xhmYNLd0Ez1ydXz140r26yGTNAUHO%2Bd4s%2Ftw%2B1pYY0b%2BT%2FKzUHF7NqGgQhP3MKkMY5fgg%2FXydRDkdSDHXfAyeG2uJCUqjIVtsXxtzPycXK75JrNm3SfB8ZhKh%2BRzzfPxjUi%2FsroVBmNY%2BH2eMhRbb%2BIKt5Fbz%2BDUdv112mK%2BHMKKgqsQGOqUB5zouprvwAzH3hUP%2BohxhN4MorWLqQrTOXHp1rIH44osv4pjfarh%2FRxxhXAL%2BoQ9wzXLWbxl4hwYAD3LDoDwTYUbs1XjEWpFrz%2F2934Frz4Awc8nRszWq3olkIBQBhN1hI4cdklDNfO%2FA0TvwA4Jto1zNVBIZtrCcyRqryjVjdDuVO61JGSZkKpTQi%2F7ho4U%2BRkYSDmT9chJmqJ%2FyaW8OiCw4enqj&X-Amz-Signature=fac1d583da449d72b06fdd857b94463b3e9362bc42271dc78e60aa95f46195c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VHZAH7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhPtSp7Wf1xO6FjtLG%2BNve4vSF%2BZp5AwFTfHOx55hX6AiEAwxHKlTimlop%2FpaRg3PA8YhVqdRSK5zt9gniLQPDr61YqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRnzYYIljQPtxjEyrcA58BeOVU3GPmW%2F3Nze1ttdKdEjmXgU9IFdwSAXOOF2frnjpgqcRVmdK3pFgTfS60xgsM%2FhLUkkMGPtALdBhMf%2BULV2MXxvzTJdhDp75CIow82i7TJnBofncwbn%2FMw1xcg5bbRMltwld7bQudgqJyMRl3UN2Fzd6KInIvRxAmnyQoyBIsV0IUpU9g9iQHI6gtu6d6ZyamPQAqWAIu8Rci7BgVaCwLrgBK3EOWTD5Eg13h3ZHxKtREXRYbt%2B1hgd3sP0JgEaBq5J18t%2F%2Fy9lozJ%2FEZDAEmkuYdnrQrkp0YlF9n8Lx98%2FktoKQZhntuEis4gBBoJEM4ZEvEYtxiF1stwtEu1oqs%2Fv0KYKc%2FtwoNryz9mZNwp%2BY9WjwaiXGQFR89VNJlFqxv39MW0h%2FOOUiHZKeJ6lFQImwyKfzSD12dq20mPhNsGT9hkKoGZ9OJeeI2YvrlAdq0beXrZ8mHbA0xhmYNLd0Ez1ydXz140r26yGTNAUHO%2Bd4s%2Ftw%2B1pYY0b%2BT%2FKzUHF7NqGgQhP3MKkMY5fgg%2FXydRDkdSDHXfAyeG2uJCUqjIVtsXxtzPycXK75JrNm3SfB8ZhKh%2BRzzfPxjUi%2FsroVBmNY%2BH2eMhRbb%2BIKt5Fbz%2BDUdv112mK%2BHMKKgqsQGOqUB5zouprvwAzH3hUP%2BohxhN4MorWLqQrTOXHp1rIH44osv4pjfarh%2FRxxhXAL%2BoQ9wzXLWbxl4hwYAD3LDoDwTYUbs1XjEWpFrz%2F2934Frz4Awc8nRszWq3olkIBQBhN1hI4cdklDNfO%2FA0TvwA4Jto1zNVBIZtrCcyRqryjVjdDuVO61JGSZkKpTQi%2F7ho4U%2BRkYSDmT9chJmqJ%2FyaW8OiCw4enqj&X-Amz-Signature=acbec70cf2c6f231b74e6ec397fcc4f379884b5a538610af02d511fe1786d12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VHZAH7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhPtSp7Wf1xO6FjtLG%2BNve4vSF%2BZp5AwFTfHOx55hX6AiEAwxHKlTimlop%2FpaRg3PA8YhVqdRSK5zt9gniLQPDr61YqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRnzYYIljQPtxjEyrcA58BeOVU3GPmW%2F3Nze1ttdKdEjmXgU9IFdwSAXOOF2frnjpgqcRVmdK3pFgTfS60xgsM%2FhLUkkMGPtALdBhMf%2BULV2MXxvzTJdhDp75CIow82i7TJnBofncwbn%2FMw1xcg5bbRMltwld7bQudgqJyMRl3UN2Fzd6KInIvRxAmnyQoyBIsV0IUpU9g9iQHI6gtu6d6ZyamPQAqWAIu8Rci7BgVaCwLrgBK3EOWTD5Eg13h3ZHxKtREXRYbt%2B1hgd3sP0JgEaBq5J18t%2F%2Fy9lozJ%2FEZDAEmkuYdnrQrkp0YlF9n8Lx98%2FktoKQZhntuEis4gBBoJEM4ZEvEYtxiF1stwtEu1oqs%2Fv0KYKc%2FtwoNryz9mZNwp%2BY9WjwaiXGQFR89VNJlFqxv39MW0h%2FOOUiHZKeJ6lFQImwyKfzSD12dq20mPhNsGT9hkKoGZ9OJeeI2YvrlAdq0beXrZ8mHbA0xhmYNLd0Ez1ydXz140r26yGTNAUHO%2Bd4s%2Ftw%2B1pYY0b%2BT%2FKzUHF7NqGgQhP3MKkMY5fgg%2FXydRDkdSDHXfAyeG2uJCUqjIVtsXxtzPycXK75JrNm3SfB8ZhKh%2BRzzfPxjUi%2FsroVBmNY%2BH2eMhRbb%2BIKt5Fbz%2BDUdv112mK%2BHMKKgqsQGOqUB5zouprvwAzH3hUP%2BohxhN4MorWLqQrTOXHp1rIH44osv4pjfarh%2FRxxhXAL%2BoQ9wzXLWbxl4hwYAD3LDoDwTYUbs1XjEWpFrz%2F2934Frz4Awc8nRszWq3olkIBQBhN1hI4cdklDNfO%2FA0TvwA4Jto1zNVBIZtrCcyRqryjVjdDuVO61JGSZkKpTQi%2F7ho4U%2BRkYSDmT9chJmqJ%2FyaW8OiCw4enqj&X-Amz-Signature=dbdc68683f1a4c39e517fab3fceeed2bc0490bb17d68e0884367d4d738665940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTROEEC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEdKkJkkf57AbiE4yRCcoDKXiS17tgUH4xONxXswhLoQIgUtGbPHoKfBW9EfMhgSP4zqNiAa6P9ILaeWU0Nd4oTOYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAaaXzvY%2BIcxZ6ZKyrcAzATcZeZlcmjRn1WAYqfJv0chHB1%2FjbLHoNRy0UUZxvBTIv7JatiLjvULrKNRcdXiqAnQrOEzNOfZpESPpnFwA4dUNqf%2Fma3MquOutc3YD6JbdGQWGfIQHYcLTAEtuhtyxaWLVl7V%2Bv53%2BaoGNgsOGz94qyAj8qFLFeQ4dDA6YrZtJvIyJ42IvqIYNvhldp6iCG221bIHoqJysZqKR%2B0ltJtDaoKsv%2BP0YXXg2KZzXDm%2FTI7Zihzi2CUkFqv5X28kch1xSRTwEDhuRC1oYfke4jhf%2FfyIrWxk4HK6AEgtxYCzCQc82fLVUSlrMCOMAIiSbYCrcIWfDNQKuxbabCu61hINKi1HvB5IzyhR9Xg5%2FdseqY6w85XUWyJDxeucSivhEWsNxIfueG09DaUACNAca%2Fr%2Frz%2BQOqjPsT37fNuZHdBdDQwnFUTEpENCSsQv0clw3m5ur6rCwe9fX7Px2EGaNjO%2F%2Fx%2BrLL4q0E8E0pOCl36xAUpcaSs6cudZmX%2Bdvh0GqOhvTiVLyaYltZUcZ1XIxsdQg18gm5gM2ua71TWUaGOXg8CmI8qnU0gV4SO0HbLpfFsxiz%2FWnQNR7U%2B0ubke7EhvyYb5H0umPV79JzGzX4LV5ZQWZlv7UgAynw7MKWlqsQGOqUBoobn%2FhdidVcq9xOkeidOmymWENJgBpfLQ%2F%2Fvl9dT68s56UYd2ktHqouFewBrTItTd%2BoHBWoamgq2DYtxIhsNd%2BIcqh26AXRwHD4bUDXdja22SdYzcUh7hd8y64Z96Xba69MIrnzNEa4kwY85K%2B60TiHuGrvMc4sqja4g0IPrgtKoiwXwmlVDmd0gqwQoGZ%2BzBEsCF4U6IBYY1J9SjDFRwzGU%2Bj0v&X-Amz-Signature=4ce4c9b40dac10abcaf9debf7e03e88267401494a7c252ac8fb6930532c7c4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQIY4M7U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlnhFp1IM%2BGe9xMQEmhzhTvVMGVV7far%2FlvxCtC1HfpwIhAOKlCXN8Fo2awUCYWOcyObplgTg%2B2d%2FXu5d6BToIUmooKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BmJe9hgZuKrvadEkq3ANUBF3zHzF%2FkRH543Zn6NAQRDde5vLhM%2FQrELH8Sbx0ahNYKWGGcn256F09m9GJPAV9Klzd6%2B2LkVdx3qa8n%2FPFp4lmM2K3sfK6D38R75VOZDN%2BtVS1GmfZ%2FKWIYFaTw83Cksibw%2BBW2dpsaXeZcyfmuPBDJbOiVNO2waHNSJAVVjmXy6o4%2BDxC91c%2FybdfhFKe6DvbRMdkTD%2BmS0e%2Fh%2FMOliXKg3ttGPYgtxH7dx1BtF5xNGeMFb1rg2ZON45gLMUieEhKANI7sJ8lGTJfgMD0R6ZHEXSFiTAGKLe3AYDgRPKq4dM1aLTNnxmMFoDniy6BjiGPrymOwaLOWMQ%2B2ZF0HAgZQQdimWwPvSmuG%2B%2B%2FzXsKQtiTd1S%2FHsDStm%2B4%2Bri5K5GhxdtdhJPFfmUFV0IcaRvg%2FlX41wQNkoaOAj%2FzVRZEvCT5pSyvdK8ZjWBaYATV04CbRPLfT1GGWWPPAxLyaaiv%2BXrpXPLpPDcqJQNwpUBXFmviS%2BqbPLF8NCR94pYbmGmojPbUQzyAqbaPg0Fv%2BzL4lu4ZVT%2FrBlaVHKZQV8xeEdC%2BXJ1ifUkCe3RGrYG2Bwfxc%2By4lUoDC4Et2pX9Edzw%2B2r%2BolmmOoajhq6AaxrB5haC%2FDnIVdsV8TDnoqrEBjqkAQlCYkM1lQp01fyqTG6r6oGPixrW7DMsgdUhaxFEm0n3hIHyMd61nL%2FFLqptoHtZTPg7QgZM%2FG5gG6i%2B8C4mfcizp4Wzemq6j6jDT%2FmNaPR1M3gnYWA2diru6GsiXJZ3B488CgxB5ZaZ6148EPZyrFcrrFiUNIib9F5FcGzMyVmwCPpcqClnsLPED8brDV9jwDARgeicjz16BSRDiVHeuNrpHWPp&X-Amz-Signature=94e47412a575667e8aabed7a1534be840337c99ccc469db3547a7704d10ecd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VHZAH7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhPtSp7Wf1xO6FjtLG%2BNve4vSF%2BZp5AwFTfHOx55hX6AiEAwxHKlTimlop%2FpaRg3PA8YhVqdRSK5zt9gniLQPDr61YqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRnzYYIljQPtxjEyrcA58BeOVU3GPmW%2F3Nze1ttdKdEjmXgU9IFdwSAXOOF2frnjpgqcRVmdK3pFgTfS60xgsM%2FhLUkkMGPtALdBhMf%2BULV2MXxvzTJdhDp75CIow82i7TJnBofncwbn%2FMw1xcg5bbRMltwld7bQudgqJyMRl3UN2Fzd6KInIvRxAmnyQoyBIsV0IUpU9g9iQHI6gtu6d6ZyamPQAqWAIu8Rci7BgVaCwLrgBK3EOWTD5Eg13h3ZHxKtREXRYbt%2B1hgd3sP0JgEaBq5J18t%2F%2Fy9lozJ%2FEZDAEmkuYdnrQrkp0YlF9n8Lx98%2FktoKQZhntuEis4gBBoJEM4ZEvEYtxiF1stwtEu1oqs%2Fv0KYKc%2FtwoNryz9mZNwp%2BY9WjwaiXGQFR89VNJlFqxv39MW0h%2FOOUiHZKeJ6lFQImwyKfzSD12dq20mPhNsGT9hkKoGZ9OJeeI2YvrlAdq0beXrZ8mHbA0xhmYNLd0Ez1ydXz140r26yGTNAUHO%2Bd4s%2Ftw%2B1pYY0b%2BT%2FKzUHF7NqGgQhP3MKkMY5fgg%2FXydRDkdSDHXfAyeG2uJCUqjIVtsXxtzPycXK75JrNm3SfB8ZhKh%2BRzzfPxjUi%2FsroVBmNY%2BH2eMhRbb%2BIKt5Fbz%2BDUdv112mK%2BHMKKgqsQGOqUB5zouprvwAzH3hUP%2BohxhN4MorWLqQrTOXHp1rIH44osv4pjfarh%2FRxxhXAL%2BoQ9wzXLWbxl4hwYAD3LDoDwTYUbs1XjEWpFrz%2F2934Frz4Awc8nRszWq3olkIBQBhN1hI4cdklDNfO%2FA0TvwA4Jto1zNVBIZtrCcyRqryjVjdDuVO61JGSZkKpTQi%2F7ho4U%2BRkYSDmT9chJmqJ%2FyaW8OiCw4enqj&X-Amz-Signature=a0f429a492d9313f2f52eb64b268865727b04ea9aecc84c42ddd18d089edf521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
