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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWFYRZL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgdvASf4q%2FqjJ0GvB5KkjUihDOjSZ8sByETDzjGeFbwIgHwvk45RcygzmqjenYfllYhf58WniIvknNH6qiMGXiUwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODQRT2HHzKTQhcwbSrcA1Crlwj1BXR8z7I%2F6raUXhPfhBSreuKs6jXwPGfbhxM0nF3enRXoUJ4k4aWbNsqvD3ARAzynfmUQWvaEaC3X0SNzX9OECCfylMfTo2UROOdphHBvgoai4v%2FSY6qVvv7igVHFpijxXubZUdE9C30LiRq4Hh2jI92Ijrv2Wzs%2Bt5fBv%2B7BE6P3DFZfH6PYVcavxiBDNemgwE4otOXHjzfhC%2BNOBt901h%2FaLFq2oeKP43%2Bj5LfLYYs0QKqHDZbXESS5s7nBXiLT33g69AcuRH5BFHEZBPsfMAVT4eZVhc5cZ99YxyYElsvjpmSIpgWroxXTbnXthiqFvCSD2g9elJ8KjAr0OGdt5MDBP3VlRX84BPJtghKxY%2FdTRe4ajBGAPwgkDZmiLTJd0E7Szk9HD9QYRZmFwYBh8V3L7hT74m5pX0nWvKNT7CPmkwCYJAso4mh2%2B%2FrJR06LPBB39R%2Fmxzak4obuoqqwOw5YRx6HTJm4gVfb8vI%2BSYyv%2Fw8dId0gsUBgdSEVlTAsrVJUZkJ1R5NKdeIrQcTY1ZQBvbTL7tVsVPan%2BsQssqZxGyCVjdWeDmideZ7EaRpB6RNHx4HlMeNYlMLHJ8e0Ryt8EyIIgaKTN3UzTp42XsLCr1Ur8rcjMOa9ucMGOqUBhIhP78CJ8EgyfQOKAS66c5PwPkEF9W1kT38U8GOvB4e71w5jPoD7kip5jCmeBCf05mHmqfk0iVZvb0yjfe0sEAECPBraZqk6MuZ1JQFOur8s47GVMFAtb4i%2BwizldLMCay1ur3dynUQRdW6PIA3PKYEb%2Bn3cUNPz7emhcN0CFqV2zmbnSeJHpZ3dkFXAZ3k%2BfM8Ivw6S5EKcCKSg4hwsk81YB89V&X-Amz-Signature=2ac72138e81001302d5ed47d1417ab8c0c83e4784028ce1ad5e2465a495ad6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWFYRZL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgdvASf4q%2FqjJ0GvB5KkjUihDOjSZ8sByETDzjGeFbwIgHwvk45RcygzmqjenYfllYhf58WniIvknNH6qiMGXiUwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODQRT2HHzKTQhcwbSrcA1Crlwj1BXR8z7I%2F6raUXhPfhBSreuKs6jXwPGfbhxM0nF3enRXoUJ4k4aWbNsqvD3ARAzynfmUQWvaEaC3X0SNzX9OECCfylMfTo2UROOdphHBvgoai4v%2FSY6qVvv7igVHFpijxXubZUdE9C30LiRq4Hh2jI92Ijrv2Wzs%2Bt5fBv%2B7BE6P3DFZfH6PYVcavxiBDNemgwE4otOXHjzfhC%2BNOBt901h%2FaLFq2oeKP43%2Bj5LfLYYs0QKqHDZbXESS5s7nBXiLT33g69AcuRH5BFHEZBPsfMAVT4eZVhc5cZ99YxyYElsvjpmSIpgWroxXTbnXthiqFvCSD2g9elJ8KjAr0OGdt5MDBP3VlRX84BPJtghKxY%2FdTRe4ajBGAPwgkDZmiLTJd0E7Szk9HD9QYRZmFwYBh8V3L7hT74m5pX0nWvKNT7CPmkwCYJAso4mh2%2B%2FrJR06LPBB39R%2Fmxzak4obuoqqwOw5YRx6HTJm4gVfb8vI%2BSYyv%2Fw8dId0gsUBgdSEVlTAsrVJUZkJ1R5NKdeIrQcTY1ZQBvbTL7tVsVPan%2BsQssqZxGyCVjdWeDmideZ7EaRpB6RNHx4HlMeNYlMLHJ8e0Ryt8EyIIgaKTN3UzTp42XsLCr1Ur8rcjMOa9ucMGOqUBhIhP78CJ8EgyfQOKAS66c5PwPkEF9W1kT38U8GOvB4e71w5jPoD7kip5jCmeBCf05mHmqfk0iVZvb0yjfe0sEAECPBraZqk6MuZ1JQFOur8s47GVMFAtb4i%2BwizldLMCay1ur3dynUQRdW6PIA3PKYEb%2Bn3cUNPz7emhcN0CFqV2zmbnSeJHpZ3dkFXAZ3k%2BfM8Ivw6S5EKcCKSg4hwsk81YB89V&X-Amz-Signature=9b4d19fe9e1e937c85e75a73d55f13d715dd47ecc8a4af561ddc89ba5338c592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWFYRZL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgdvASf4q%2FqjJ0GvB5KkjUihDOjSZ8sByETDzjGeFbwIgHwvk45RcygzmqjenYfllYhf58WniIvknNH6qiMGXiUwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODQRT2HHzKTQhcwbSrcA1Crlwj1BXR8z7I%2F6raUXhPfhBSreuKs6jXwPGfbhxM0nF3enRXoUJ4k4aWbNsqvD3ARAzynfmUQWvaEaC3X0SNzX9OECCfylMfTo2UROOdphHBvgoai4v%2FSY6qVvv7igVHFpijxXubZUdE9C30LiRq4Hh2jI92Ijrv2Wzs%2Bt5fBv%2B7BE6P3DFZfH6PYVcavxiBDNemgwE4otOXHjzfhC%2BNOBt901h%2FaLFq2oeKP43%2Bj5LfLYYs0QKqHDZbXESS5s7nBXiLT33g69AcuRH5BFHEZBPsfMAVT4eZVhc5cZ99YxyYElsvjpmSIpgWroxXTbnXthiqFvCSD2g9elJ8KjAr0OGdt5MDBP3VlRX84BPJtghKxY%2FdTRe4ajBGAPwgkDZmiLTJd0E7Szk9HD9QYRZmFwYBh8V3L7hT74m5pX0nWvKNT7CPmkwCYJAso4mh2%2B%2FrJR06LPBB39R%2Fmxzak4obuoqqwOw5YRx6HTJm4gVfb8vI%2BSYyv%2Fw8dId0gsUBgdSEVlTAsrVJUZkJ1R5NKdeIrQcTY1ZQBvbTL7tVsVPan%2BsQssqZxGyCVjdWeDmideZ7EaRpB6RNHx4HlMeNYlMLHJ8e0Ryt8EyIIgaKTN3UzTp42XsLCr1Ur8rcjMOa9ucMGOqUBhIhP78CJ8EgyfQOKAS66c5PwPkEF9W1kT38U8GOvB4e71w5jPoD7kip5jCmeBCf05mHmqfk0iVZvb0yjfe0sEAECPBraZqk6MuZ1JQFOur8s47GVMFAtb4i%2BwizldLMCay1ur3dynUQRdW6PIA3PKYEb%2Bn3cUNPz7emhcN0CFqV2zmbnSeJHpZ3dkFXAZ3k%2BfM8Ivw6S5EKcCKSg4hwsk81YB89V&X-Amz-Signature=40232616a886e0f7d6ac5a7bd4798ca2ba527b4c3235bc58b63a45ad693045be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNF2GJWT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Afa3cYI%2BHkBvK%2FLGxmy2ZuB3E%2BvI6nWjQnoRWUX6BAiBaFgtH6HQYidrBpxBsMLpwO9XSaYPrMKHZJZEp6RmJQiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwl9%2FhFTM%2Bs%2Fe8%2FaKtwD%2BqtQJTkoxlC%2FPCeU5JffhTvd1qQSug94pPATR2lpHVEUT1gHVbzXIsGJZeN8spSbbBh3VeefCm4TDrDlrGQCE7DIye2L7nIUrr17hgJeu%2BLTBwNACYoFjF3eyG8u56BpYjK0Em6q%2F6EXOjC8K3nMIDZwtVirhn1iosZARE2QG%2B%2Fy26Bu9ljjh7MIyy0Mc0wjUaBPkOpM%2B8md5TE9gIiEjPV8VSYPvQhJtqg8IfVYnOLtJXQuwA9XY%2Fj%2FlWd9RzfqT1T63Jidsdl%2FMVEXmfwBu0S%2FUcMqWVpDWybWVrZdLAaHhmpnVsEzVRHDpN%2BADpULGS2IhRp0UFOO39qlwaW8dgRbLYINXmc3lh5l7h9m%2BQe57oWIMW%2BdvgLgBltzizmSpH3%2FE912OqVY5N2CCI2P1Lwi2vB5iYptBPsAAlpXmNOGNtjKgWIu9OlmC8nFJnCOBY7kO0w5Am75TpswMc4UaFe2EazvdjMvUlmMCTj1wJWiHmRsdx10uAAoGNoUgwBXi0cJgsbwyRvy2XHR7Ha4MmBYySC3Bd0zsaBRe7YiYY2XuhrWDNVD7gEQ1TTo108PmEQe%2F3AlsOqe9I4XR6CpEFTv1mFGmbtnlcPrcIP3FU%2FjR4EEtj%2FyZVKDwGYwvr25wwY6pgETcdNlEuH%2FiMKyMj7wp2PMvRjzjL4VCithZPMrr4B0jhICyYq9LDDQ2seAc3NgsmuDu5K%2B2V9B9p%2B0hGpN%2BC%2BtRjldjMT1LdHSia9rtbyZDa754AU%2FlNMR111PGiCoJHwRuyy2mt%2FPhB%2BozoT9b2A52ncWobpDoLP2opfFmkM%2Bxytw8BFXxg2s21Qj7YkuvLnNGCeLPjHosXfOSfX1qgDmCeV%2F8woT&X-Amz-Signature=84e9d4a642df42e6ab40299a060863ebf7ece1734e75de2de668041c9e7f98e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKFU6EH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSTy3W0kzj5YhDr9gSGiykeuR6RH0JKx%2BcnfWP63DbQIgKXR5IpJPRoY0hFypaH6G9GXJmQ%2BqxDXxy5lK1p71IgQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsJUAoqYVXjDmFIqSrcAwLiPYXnG8atVRcd4cmg46yWcV%2BU8xEjhUpuMdrSnp5qBUq4Pie9e9E8%2B5uCFAvGYwkjdKgZ%2B1n7d61BVEFiUrNTvOwKy0MCFlLJuIIAj9z8PSbAYU8xSx0%2BjrRlB5JFDOMcZHlf6OnlW9uJW7HbT3V4NIM4%2BrF2c9SU8YUKpgCrI3j3ELNZKyLj2VWjMGw22T%2B3U50E5HzH%2B5Dq4ZhCQEv3bzL4Vy9wzcf7ABuA9zi4e1iPcONV6gXUkoUjxtrNzgUzV8qQy7mYy5ozWkOm0zdD68Rwb5O4mrOOdtWYrjAx%2BcRucHqNWrNv0hIIRsESrkHn%2FB4nYLJOBWnXM7lt%2BnWh7r48J6GIWStSyg2duzNsyyGsmSM0ge9Lt4KBKjcvOmGgtzWHlTvh3XpUzzb%2BEnhkNOeOdOyt4HLtkUrDPfnOe34Z0mvy0bHk7k0iVxeZPTvpnyEnC%2Fizs2WCB8FylMgZSrAzkrpSWgR%2F41Chpv%2FimXNNiahzZ1GCvt0uVqe0kwlOtGUysvvve%2FLaLxNqwc%2BVP%2FPifuSmKn9oVPznbcDSaVrMO%2FBkU6x%2BbYqzI53VG%2BOsY22QsUHnZ4Jsouf0hv8ltStA2957Dq0srUWCQRbN5I%2FzCbwTKTCljsYtMMq9ucMGOqUBSQUrxMv562WkPDjWenVyxGFO5bpKm686Tp%2F%2BkI90adEiUIcT4Hg%2BAiDisyAw%2BNo9rh2jmpx3RrBIYQthRnLYWQp%2BWOPWGoHVONWLFq%2F40JDY%2FTrhn1eahidCC%2B7Nr9SylQVwBN5LtZGoVK04nXTkPWK9nmF2%2BrdOl%2F67shgSG6rcqW9Hk1UArFE1E7UwaffJJxpjUxd2x1NsdHxkqlSss%2B913o1W&X-Amz-Signature=eaa6bcfffaea5f12a1764cef04e9515772446c68e193d4ee207a0f81dde0d357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWFYRZL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgdvASf4q%2FqjJ0GvB5KkjUihDOjSZ8sByETDzjGeFbwIgHwvk45RcygzmqjenYfllYhf58WniIvknNH6qiMGXiUwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODQRT2HHzKTQhcwbSrcA1Crlwj1BXR8z7I%2F6raUXhPfhBSreuKs6jXwPGfbhxM0nF3enRXoUJ4k4aWbNsqvD3ARAzynfmUQWvaEaC3X0SNzX9OECCfylMfTo2UROOdphHBvgoai4v%2FSY6qVvv7igVHFpijxXubZUdE9C30LiRq4Hh2jI92Ijrv2Wzs%2Bt5fBv%2B7BE6P3DFZfH6PYVcavxiBDNemgwE4otOXHjzfhC%2BNOBt901h%2FaLFq2oeKP43%2Bj5LfLYYs0QKqHDZbXESS5s7nBXiLT33g69AcuRH5BFHEZBPsfMAVT4eZVhc5cZ99YxyYElsvjpmSIpgWroxXTbnXthiqFvCSD2g9elJ8KjAr0OGdt5MDBP3VlRX84BPJtghKxY%2FdTRe4ajBGAPwgkDZmiLTJd0E7Szk9HD9QYRZmFwYBh8V3L7hT74m5pX0nWvKNT7CPmkwCYJAso4mh2%2B%2FrJR06LPBB39R%2Fmxzak4obuoqqwOw5YRx6HTJm4gVfb8vI%2BSYyv%2Fw8dId0gsUBgdSEVlTAsrVJUZkJ1R5NKdeIrQcTY1ZQBvbTL7tVsVPan%2BsQssqZxGyCVjdWeDmideZ7EaRpB6RNHx4HlMeNYlMLHJ8e0Ryt8EyIIgaKTN3UzTp42XsLCr1Ur8rcjMOa9ucMGOqUBhIhP78CJ8EgyfQOKAS66c5PwPkEF9W1kT38U8GOvB4e71w5jPoD7kip5jCmeBCf05mHmqfk0iVZvb0yjfe0sEAECPBraZqk6MuZ1JQFOur8s47GVMFAtb4i%2BwizldLMCay1ur3dynUQRdW6PIA3PKYEb%2Bn3cUNPz7emhcN0CFqV2zmbnSeJHpZ3dkFXAZ3k%2BfM8Ivw6S5EKcCKSg4hwsk81YB89V&X-Amz-Signature=d4feda656996226727529caa5f2dd2268fec105784151512e519786497dd58e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
