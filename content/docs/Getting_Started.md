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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGDIG3X%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWVMOh9MbAibuWmM8Eib94DQWbg2YuMLtrsiONXIIuRAIhAMnmstQ%2F2vF%2FiPlqewvdwWDgJ98SZE3nl5iOx1CF54TFKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPmcjbkjhkhY0sPp4q3ANgJxXITPg2AraKR6bLMDP%2FvQT2OXp97pUHsDhltZb00NbYkkj0c2KrI3H5WUPaxRPjIp5T9JXb9DXMHmrm%2FaMsT5xC51ayq0uCIuunYCrfTZp%2FRmalR7bO%2Fcnt06dmDqVCUOL61iGVIjGTJGOQyN1tXpsRAmBzjESo5pr2WX9QfHPI0AZ3cRG05mLlZt6EnYNKgjVYyoZYXZp4w1TX3aW6y0SwCWBTUUGdrgm9qd2Sb9ZVAgJgkFJG3ByfK5Ek4COA9akGUQcH8Ug0xhzwF65fHvax0RDwHyAwW1fcxd3XQayubaxEhTIwVW1RPuOAF8eOje1EeW6vSU6kndcZXfZ%2BX2LecBsx94ooLdKJSWqakEW%2FeBaCss9NcxaoHldI9HFCd5gW0LXHRlWot%2B0JcFGaBUjrWYJj1KjWgo0YBakZvWSlqwdSn05suFsL02e6MTXLInoIE2xbd8%2FfDF6jejlp7np0%2BD1AiwegNTMjMJn2MTlrY8aF9xkVv7Vi73qi8DPy7amWBgu905QHlXAB54n%2Bn3zhHAf9Uwkhff6lFJnV%2FPra2fTzMlHPFDcgBk4T%2F%2BKldxSzcui1WYCFdVpHYDjvGJo5vUJv8ldjhzsVrOuuQf%2FRSl9uGEIrpT0BLTCW1cy%2BBjqkAXN%2FLHNZIAV%2B8SrgyPU1ctcqjmref1Yj2ztvKv1%2B0viGy2ZV7VlfYG0aw8RtMSuzCUwh3TKSBew58nwaa%2FmFPaTfAbmkKtNg20BFuL7BkFp%2B%2FyknlEzQx0BPm3dSTPpT9yQsPIgFNx6PeJLFtxJGCzilLJG%2BDCAiB2VqMclvmYFk245Idq4BI9lN8N0QDAJO6fveG61xcMxJPCqp6BCiwQ%2Fjag%2B9&X-Amz-Signature=865f303fa5bb48af37abf2c725bb9b1a33eacc1993b61e060c6436313690a6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGDIG3X%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWVMOh9MbAibuWmM8Eib94DQWbg2YuMLtrsiONXIIuRAIhAMnmstQ%2F2vF%2FiPlqewvdwWDgJ98SZE3nl5iOx1CF54TFKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPmcjbkjhkhY0sPp4q3ANgJxXITPg2AraKR6bLMDP%2FvQT2OXp97pUHsDhltZb00NbYkkj0c2KrI3H5WUPaxRPjIp5T9JXb9DXMHmrm%2FaMsT5xC51ayq0uCIuunYCrfTZp%2FRmalR7bO%2Fcnt06dmDqVCUOL61iGVIjGTJGOQyN1tXpsRAmBzjESo5pr2WX9QfHPI0AZ3cRG05mLlZt6EnYNKgjVYyoZYXZp4w1TX3aW6y0SwCWBTUUGdrgm9qd2Sb9ZVAgJgkFJG3ByfK5Ek4COA9akGUQcH8Ug0xhzwF65fHvax0RDwHyAwW1fcxd3XQayubaxEhTIwVW1RPuOAF8eOje1EeW6vSU6kndcZXfZ%2BX2LecBsx94ooLdKJSWqakEW%2FeBaCss9NcxaoHldI9HFCd5gW0LXHRlWot%2B0JcFGaBUjrWYJj1KjWgo0YBakZvWSlqwdSn05suFsL02e6MTXLInoIE2xbd8%2FfDF6jejlp7np0%2BD1AiwegNTMjMJn2MTlrY8aF9xkVv7Vi73qi8DPy7amWBgu905QHlXAB54n%2Bn3zhHAf9Uwkhff6lFJnV%2FPra2fTzMlHPFDcgBk4T%2F%2BKldxSzcui1WYCFdVpHYDjvGJo5vUJv8ldjhzsVrOuuQf%2FRSl9uGEIrpT0BLTCW1cy%2BBjqkAXN%2FLHNZIAV%2B8SrgyPU1ctcqjmref1Yj2ztvKv1%2B0viGy2ZV7VlfYG0aw8RtMSuzCUwh3TKSBew58nwaa%2FmFPaTfAbmkKtNg20BFuL7BkFp%2B%2FyknlEzQx0BPm3dSTPpT9yQsPIgFNx6PeJLFtxJGCzilLJG%2BDCAiB2VqMclvmYFk245Idq4BI9lN8N0QDAJO6fveG61xcMxJPCqp6BCiwQ%2Fjag%2B9&X-Amz-Signature=afefd4dc4e1c3df35c5c183d86b7f80064dad9c8402d219585053acaa3fd5fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHC74LLS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRqyx%2FhW3%2BMefRvbp%2F1dobKbPZC9PgOab%2BcCrERQtBjAiA2yw%2B0QhAApahzOaTcYkKGYz3%2FLJ3c%2F4kbQmxPvX0%2BSyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIjmcI3ZQj5FDBjMKKtwDCfLRUVbMs8AxA0bOaOoL5dzsOoaXPN8POfWFOeiwhJNZUvefO820UY%2FAVbjHkOv8noWbwCqTqbY139HK4ZGrXdz1ZR633cKeLr9FjqNgKaSNxPauyXpfCLRXGN1l2DC9%2BKRe2hz7LTl%2BJ1homNqRlVjv0ZX9RmbvdosPj1z2g0FJPLA4X0ujch7K%2BjpmcFo7KuEG%2FS37L%2FEiJVRfUYN1CnNimV%2BgcSAeg1zZv2Q9VucV6GiC%2BSD0nWDrWWmNh97nF47ABJmk%2Bk%2BBcMTAEn9w06NC6htIUjnAHvSLCcPmfduOMqmB1nudhSkflfMpiij%2FtUc9uL%2Fb2ZMdU4J0Tc%2BOIXfSVHu2JP6hVN2pDHjVg6v5%2FRFD6o0PJbobJAolv%2Bd%2BsQqFREE8zZZ8NhXLQEIfoet4uZna0chq98h5C0NFQ%2BXwHjQNcS460Q1%2Bkt8OLxVK8VdrIzDJW8vWX2X5mRlKG%2BQ9yfwNtWaDe9gwKqpI5ROMEXbPvmdsnU%2FXCIdiD7%2BUmrjnK8e5f8FA9xSbtA67nQ0IzgjGm1vmWqlP%2FADpOvFNkhojbKIajSZuP0eZifMIb0KTvZ%2BfhMl2bqQqRmjCpTqDmWxfOwD5EVkMirbDKyLkZbvU8iefZiJDhzgwsNXMvgY6pgHn1cV%2FhfJrRrETlHlG%2B8KwG1hntbHX2Ebth5fgTKJJQEYAs6umublmDPI%2FzCet29vabaEOxoGzcrHZtzhvvcOCsQb%2FnWcCWJgzAkB0wKShtXngaHHiWuejGqmp2v1aM3uHP1EXeLLM9G1597%2F1bwaPJvpHz%2BYdkHPJxhvswxTlfKjilfKEePXv1nQZxEwPw673a1Olc9qGsK40%2Ftu75MrKHvhq5vGc&X-Amz-Signature=62b00e700476fbbc6d709e4bebc85022996b8c1bf60e5cd718e7b5485488d75a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4Y5TB7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJIYZ59aUXqcDH0GmJreolUUB%2FeEeoIb8Wk%2B5ylFs4AiEAowU24V9Fb8Qg2otv6Jb39ha%2BpUj%2BYrfRbThdGd5hSIwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy%2BhzcM39LXzfZXbyrcAw5qj8wG4x1kihyseH%2FvkZ945%2Bfo4syYXAf7IHZfBSkXxx5Gtd7Tm05ov1yifFEN3ocCKM0UbKsM%2Fgx7HO0rF4azt2s11f2zfUiXpdx8%2BogczXDPqH9ocukOLV%2FpOTxZ47pbMvjZHRDl1JcF53yUM%2BhMjcowXaldQxFYvjJqpiA7Hd4ZUIFYpF71Gv4IequiwDNMphEC89bRShSoXPzmi0gh6YhylnHfVQCA9c1xlQoK6nqKPnxvKRfmoBiE9zpiY71jY2gt%2BGtguXVU7AyOoqncBtrGb3sqeeC56M3KRXBii0WIBXwqdQ1ubpX5YtiRXazApTqkhOe8PtdXKjUjNJzHW%2FRXa9QoCMF9J6ZvQzhkWud%2BmMHtiDfyBd2pXKwc161I44bPHCXOmm%2Bpg44jozZLJjSFs2yuksqY9p2aGsehIPTtkavZYAflNcznx%2BLKqEakr7ufD2BDZUiKrPri%2FHOHsZvynMzC2ztgk%2F9ZyC2jFpWOzx14UEDlgrqGZ6H7OknPdDDB3eFrd3rz3JlwP0KH842s6NR0BVPnHV8uGRbXNNg%2Fy5ird5wNpc4YOyVMFDSF4pGIMKovxIWJVPmmo5RxUMYZAhTNdQG0h7n1CULQER%2BbTBYdsLZhn6RrMOXUzL4GOqUBS1XnLycblFmLrlOgzJfLJIWHwo5AHJJOxBio3BRuIXtj4%2FH3SPdqSBzSW6iEC5YZ61uOc%2FYz7w7kli%2FAw%2Bv6B8bxgUeY2CVufpjhvGzLQwQvjKgAZ1J62ZzAHoKDqUU8u16tNfcOXXbCynmB9%2FkV0%2FhOcHE6xBwFQ5ZET9YbxtZlGhEUYoBLtvKkbDUJuK0bS%2FZEwym5zBTauu65kuwVOsQxA%2F9b&X-Amz-Signature=ca953ac0ddb336d7be4a715b0c385f4f6fb998a086120c8bab6d68cf9fe05d94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGDIG3X%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWVMOh9MbAibuWmM8Eib94DQWbg2YuMLtrsiONXIIuRAIhAMnmstQ%2F2vF%2FiPlqewvdwWDgJ98SZE3nl5iOx1CF54TFKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPmcjbkjhkhY0sPp4q3ANgJxXITPg2AraKR6bLMDP%2FvQT2OXp97pUHsDhltZb00NbYkkj0c2KrI3H5WUPaxRPjIp5T9JXb9DXMHmrm%2FaMsT5xC51ayq0uCIuunYCrfTZp%2FRmalR7bO%2Fcnt06dmDqVCUOL61iGVIjGTJGOQyN1tXpsRAmBzjESo5pr2WX9QfHPI0AZ3cRG05mLlZt6EnYNKgjVYyoZYXZp4w1TX3aW6y0SwCWBTUUGdrgm9qd2Sb9ZVAgJgkFJG3ByfK5Ek4COA9akGUQcH8Ug0xhzwF65fHvax0RDwHyAwW1fcxd3XQayubaxEhTIwVW1RPuOAF8eOje1EeW6vSU6kndcZXfZ%2BX2LecBsx94ooLdKJSWqakEW%2FeBaCss9NcxaoHldI9HFCd5gW0LXHRlWot%2B0JcFGaBUjrWYJj1KjWgo0YBakZvWSlqwdSn05suFsL02e6MTXLInoIE2xbd8%2FfDF6jejlp7np0%2BD1AiwegNTMjMJn2MTlrY8aF9xkVv7Vi73qi8DPy7amWBgu905QHlXAB54n%2Bn3zhHAf9Uwkhff6lFJnV%2FPra2fTzMlHPFDcgBk4T%2F%2BKldxSzcui1WYCFdVpHYDjvGJo5vUJv8ldjhzsVrOuuQf%2FRSl9uGEIrpT0BLTCW1cy%2BBjqkAXN%2FLHNZIAV%2B8SrgyPU1ctcqjmref1Yj2ztvKv1%2B0viGy2ZV7VlfYG0aw8RtMSuzCUwh3TKSBew58nwaa%2FmFPaTfAbmkKtNg20BFuL7BkFp%2B%2FyknlEzQx0BPm3dSTPpT9yQsPIgFNx6PeJLFtxJGCzilLJG%2BDCAiB2VqMclvmYFk245Idq4BI9lN8N0QDAJO6fveG61xcMxJPCqp6BCiwQ%2Fjag%2B9&X-Amz-Signature=4e43f1e1a5f9df07a5f6e13ad4ba7599a3707fd31607a23620fd72e39a82d3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
