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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGZ3MTC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDx%2BXjQZZucsG9EjLk3Iz6z1QUXpDG%2FwblcSW83W62cKAiAf0PL85qNzqMyRWjehHRWGyaCupAS275wV4iQxyB0qaCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNNBa8IAYynWzPRTDKtwDLWpIUtZzdswpkZfDdBs9a3WzuY88w%2BTDlraPBCbeqsdib%2FCEAQHlDH0dvatKU6TLfiPIK6eED4TH%2Bvfii30C%2F66u9f2wFdWhfBswsv8SjsKSOGxuSOpHKPMqERmgrD3SkYpWWECaJycjBP0ZioY0y7KCdmAYRFwmVwfWhRh88MUYwojPev7PCRrdrv8BD8uroR6I3j7jQeMk4a%2BG0POwOzlH3af%2B%2BcZs0O5DExrHFLAghZhY2Z2%2BrvJcPd1pbcSUjYkczreGbbOjiD%2F1BJC91o9FdsD%2BWx6Gz7%2BVOjYX2h57ZptTZbl788XcxyrEBc1S3D0FWuC4SgKl4O5HU5o1faHGADJPkyZE0yTIAFMu9bpZcR%2FLESsOYXymbv6rNSCqjMuaBD5Yj5Zla878zUfupNJQU7lec2rlrp1pgO9pUulNC4v7ifUXKWIbijX16P9poUdk878NfowhOMhttqCsjCQRYVF5xAOzEcyuSNvEKkaW%2B0rpRWgHMZ21Dfuv0OV1X8fQxH6VaXX3N12vnJAAMa3UIlaVf1sogyHKKc6KCbQiB3p2g1WtJ4vkvxQYjxAP2%2FhZkwI9eAP2%2BYIISn6jM7MBSuleYLl0cSYNiSB%2BeEXfkOfbbpYPP9Rw5LcwgvuWvQY6pgHkbppPfGCX3RWwGM%2BPQvPpsf2jwx%2BiMJhQhnguLLdJWzz0qEEaGODPnBPEdRGW4obmT8sR%2FsI%2FgELL%2BTEgPajwwqdm1gHXexGE1cBWm5%2FqVpYEKhH%2FkKcmBwJ%2B4t7hVEmFG%2BB3OAPdN%2B%2BvWbiQuCeN3ReAPgfYKaFBZrjsHCYkZCGPeugnTlGI64cv2ruBTz6YZ9uzPzJcI6Ipe%2BZeL5zkKeaDHzfm&X-Amz-Signature=c4d506a7ea9cf1ef64728f300119d6efe5b93b458dcb0b6c3f81258cbc43cf29&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGZ3MTC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDx%2BXjQZZucsG9EjLk3Iz6z1QUXpDG%2FwblcSW83W62cKAiAf0PL85qNzqMyRWjehHRWGyaCupAS275wV4iQxyB0qaCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNNBa8IAYynWzPRTDKtwDLWpIUtZzdswpkZfDdBs9a3WzuY88w%2BTDlraPBCbeqsdib%2FCEAQHlDH0dvatKU6TLfiPIK6eED4TH%2Bvfii30C%2F66u9f2wFdWhfBswsv8SjsKSOGxuSOpHKPMqERmgrD3SkYpWWECaJycjBP0ZioY0y7KCdmAYRFwmVwfWhRh88MUYwojPev7PCRrdrv8BD8uroR6I3j7jQeMk4a%2BG0POwOzlH3af%2B%2BcZs0O5DExrHFLAghZhY2Z2%2BrvJcPd1pbcSUjYkczreGbbOjiD%2F1BJC91o9FdsD%2BWx6Gz7%2BVOjYX2h57ZptTZbl788XcxyrEBc1S3D0FWuC4SgKl4O5HU5o1faHGADJPkyZE0yTIAFMu9bpZcR%2FLESsOYXymbv6rNSCqjMuaBD5Yj5Zla878zUfupNJQU7lec2rlrp1pgO9pUulNC4v7ifUXKWIbijX16P9poUdk878NfowhOMhttqCsjCQRYVF5xAOzEcyuSNvEKkaW%2B0rpRWgHMZ21Dfuv0OV1X8fQxH6VaXX3N12vnJAAMa3UIlaVf1sogyHKKc6KCbQiB3p2g1WtJ4vkvxQYjxAP2%2FhZkwI9eAP2%2BYIISn6jM7MBSuleYLl0cSYNiSB%2BeEXfkOfbbpYPP9Rw5LcwgvuWvQY6pgHkbppPfGCX3RWwGM%2BPQvPpsf2jwx%2BiMJhQhnguLLdJWzz0qEEaGODPnBPEdRGW4obmT8sR%2FsI%2FgELL%2BTEgPajwwqdm1gHXexGE1cBWm5%2FqVpYEKhH%2FkKcmBwJ%2B4t7hVEmFG%2BB3OAPdN%2B%2BvWbiQuCeN3ReAPgfYKaFBZrjsHCYkZCGPeugnTlGI64cv2ruBTz6YZ9uzPzJcI6Ipe%2BZeL5zkKeaDHzfm&X-Amz-Signature=132337e41f11e9fbcdd452bbe46a22819959ba0f14daeaf7bd7951b9920c3bda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YALX5ZH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDzahYLg%2BoifhvWfNY0TblRjLTQTEHjh01xXYuYOWtBJQIgEME8UWKeQf694JzByzyq1Qcgk1sfrseAZUJ%2FcaRjTHIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNrkyFu9Zm2rNA9G4yrcAyuRimLCY3LLVm90I7O4QDnZWCbzzvyRxH4ZrzXxpIATkr%2BWesM8%2FZ%2B2U4KLBgUK%2BpPvEY7ANbMMqdFFp50ebX2wOXSZwgnxNs1JoC9jTa3SryvWiNSFzaEpBKy6xCosPXcrqWA%2F9uPcTgjJxIN04r%2BC6M0K1MlOfBdCPrZGI1ICgMDPmsRAKnPWaiGJhVowLMnTnjsAZ9vgFleeHMLUswUDABRpYnLViApDlDq6hlzhWJDsKKhgiC2sfoKCua5wsFghlIh%2FMM9bUt8YRAkwKMgpYb5ZigwKGt5BzVlJpK%2BsPVgEc302%2Fwvb0n4Uy5NxXkHLYaPQJb%2F%2B6c9lJDGoI6CO4qaEDhSYBSFHJupjVAhqCnwKH98eEFCTeI0ONIedlIpxokOqKjxeePyWdiQb9cZALpsbBrPWbnDtrcRSGacedprtwnmrw%2FkQbYT%2BRIediSENA00LByWKVS6TOpf8zFustJCHzJbs2nGx1tQfS9AhHo0HdVS5z75LAzpDUEqWABv1PzKjBWAfAAYnWNqeSDxKuSdzkLMwfesz7wnMQm5HuuGm7tPJQ6Go8Pfay%2FI3PGFHtOkmshaU1gLsOr4pXwBiVI6pI9QbXtCxPsz%2FJHPPfDMZuhYUPYeSPZX4MNb6lr0GOqUBJua%2FKopDp96NnKh8LVXsIFt8JH%2B0qf%2FAbv6jYO4j5iQf6Zvxq6TXP5MFB4KLV1Z4lPUfBKlxI3DWQWpenMwVCAiPONaes8WDp1x6ae2hBn9jz6QGjUOIhBLJXpRRB5KtsXlVsq4ynkP6LbfezSJiI7neSR8oPOpGsHk1a7w6Qc3E1CRsHdSRycaSDhYd%2Fmr4FMX0f7DChC7sMEYOSYE%2Br8B%2FJhae&X-Amz-Signature=abab4e544ab0f3c644197771a567328f3dc5233a8135ecbf81117fa9e5d46baf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBJKFD2G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE%2Be471oPQQpMh8KmwblyqQdhXxPWwdog%2Foun%2F3DY%2BEqAiEAvui3T2qUs0GnBN4%2FeASLRyPEI3tplnidl86A8ixrJOkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLRNa%2FdbELsbK9UIrCrcA3dH3hC%2BLMupWEiddkGIv5WMOq3sI5bXxF6TTFwzQhK3moyz6pv1lVXL9Nhem%2FqW%2Fwvwv%2BUQ0WJfvc8IAL9Bi9ZX%2BtL7TGIahItFKMIT6eLLmH52I70ZZm9KmsJhWk1%2FSiVsQGo9pizT0quc35%2F7tNVGEp5yAvWiDYNc%2BadnPMxi6L%2Bj%2BDHppqcFWlsTSm5olRE8ugktt%2B0AK%2BScaeA3ktbbtPqbeEIf%2BCL6aBmtYbNzTSNk%2FdUO4fz18Owr2c%2Fn9t4XOS0RG7jqv1qYaEEoddJYcViQLBCcvzXp9Y5qJkpaeaSH9Pu4a4k2adGSvmP90cdeqyJLTZeh5TRpEuWzan3O2N0gSVGkRDK9NZYX%2BjgH07zCOeWVc%2FRJkcyb%2B4ekT%2FHOch4KbQ1WarrIVQnCbepxD09%2BcimDqyrVWuyNfgUVtYc50b5Hn81%2BOitQ8lYgaqJ1U%2FZkZpp3ez5YSehwJj23uV%2FRBDd%2F9ndYxyLaQRJIUeXOBh9PJ2EyFLHA%2B%2BhSlnZBYdOATLcVLs1vLEvzKbaQfpYrcC8U3RwcL4SeJjD%2BKR4Z4iqipLwif3GDawz78Qib%2FfPyggHv641Exst9aKctLCJZTZyqfPfrxVkHgBE5FZP4UXE76xHaTizIMOP6lr0GOqUBPnV9tNK4F2896apt0T5rU%2BActg%2FTaW%2BJlHIUm1%2F0ummVpZNQLA2ZFPP91Uy%2BONZ6KSk2FlNh47m3Ci39nIM3PLuTchQ4iaNwTVLAV36hCwYJazVGoQZs%2Bn%2BjVhjidgdVGZsQwJtVPhNp0S0oxfXGu2zzOaPAVyPtG1rYQIikn8cxsuTyU88XU%2FI9IBwBMbFnhryQIWlQuolXuJFcHsQ%2BXVtI%2BO2P&X-Amz-Signature=04d3e0292cf56697b682809c4f75c1c63eeb3574dcace78ad227c70d4fe9e4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGZ3MTC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDx%2BXjQZZucsG9EjLk3Iz6z1QUXpDG%2FwblcSW83W62cKAiAf0PL85qNzqMyRWjehHRWGyaCupAS275wV4iQxyB0qaCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNNBa8IAYynWzPRTDKtwDLWpIUtZzdswpkZfDdBs9a3WzuY88w%2BTDlraPBCbeqsdib%2FCEAQHlDH0dvatKU6TLfiPIK6eED4TH%2Bvfii30C%2F66u9f2wFdWhfBswsv8SjsKSOGxuSOpHKPMqERmgrD3SkYpWWECaJycjBP0ZioY0y7KCdmAYRFwmVwfWhRh88MUYwojPev7PCRrdrv8BD8uroR6I3j7jQeMk4a%2BG0POwOzlH3af%2B%2BcZs0O5DExrHFLAghZhY2Z2%2BrvJcPd1pbcSUjYkczreGbbOjiD%2F1BJC91o9FdsD%2BWx6Gz7%2BVOjYX2h57ZptTZbl788XcxyrEBc1S3D0FWuC4SgKl4O5HU5o1faHGADJPkyZE0yTIAFMu9bpZcR%2FLESsOYXymbv6rNSCqjMuaBD5Yj5Zla878zUfupNJQU7lec2rlrp1pgO9pUulNC4v7ifUXKWIbijX16P9poUdk878NfowhOMhttqCsjCQRYVF5xAOzEcyuSNvEKkaW%2B0rpRWgHMZ21Dfuv0OV1X8fQxH6VaXX3N12vnJAAMa3UIlaVf1sogyHKKc6KCbQiB3p2g1WtJ4vkvxQYjxAP2%2FhZkwI9eAP2%2BYIISn6jM7MBSuleYLl0cSYNiSB%2BeEXfkOfbbpYPP9Rw5LcwgvuWvQY6pgHkbppPfGCX3RWwGM%2BPQvPpsf2jwx%2BiMJhQhnguLLdJWzz0qEEaGODPnBPEdRGW4obmT8sR%2FsI%2FgELL%2BTEgPajwwqdm1gHXexGE1cBWm5%2FqVpYEKhH%2FkKcmBwJ%2B4t7hVEmFG%2BB3OAPdN%2B%2BvWbiQuCeN3ReAPgfYKaFBZrjsHCYkZCGPeugnTlGI64cv2ruBTz6YZ9uzPzJcI6Ipe%2BZeL5zkKeaDHzfm&X-Amz-Signature=0d0612ad082a4d00e02a564c311517467acfdde5f6e7f31ebef0cc85c4d4b180&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
