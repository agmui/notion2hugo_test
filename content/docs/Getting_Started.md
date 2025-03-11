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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2MW3JL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEwL0VZkDMbYtSIimQG3Gs50mn1%2BM7RVWe7dnPCxahe4AiBzVhEHCqyhL%2B%2BSUTg3sw5L4ksk6HgPsJXD5HcOHD74wyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKNfdbIz3m7nxP6nKtwDB7n20sQo9BsBUy1p3xBpNOOthMmp%2F0VoEa3dUY8I63wxgYaCj8%2FW6FlhjkaT%2F2ySRfZjBD25A3ZUjhf9w7viUasRGALmlCAmGR82SndiuzPnGyfg5YVsDb1sLTvDckUt%2B4BinHdutCgy1ohB4idluF4ohKMsmCS3r9bIahjp0m8VeD1BT4LXVr1i3x1%2B%2B0vbteWLM65I3SvLkIqqXOtU9kToSASSiA33rOER%2FAjgYXcwrm%2B6IYr%2Frt1HENsOY%2FCfe25w9FNpi9NcGfXGT%2B5xklDE%2FfhX4R2rM2LTwNMuHGez2qcPOhLZZX6Tt00TnUHx%2FQJpuvVEV%2B8%2BhqKppILrrx1W5cfFVx06HTbshZdEAlVt6BdNokZbTygmRgr6knswMDXNDHQi2%2Fit1se6Cm0C8VwySthRGQesV9q2gq6OhCeKxu%2F9obm%2Fg0l%2FHM4To1WASaz4mtNZTY5wRIGEEUJ1KjIpyHVZ4gBVEcJDr9bjZ5BLJRoBYZPBHtkUeEImdm0yqsvmfHFA4%2F52vDYCMfR4xhmZC%2Bn40Yd9AR%2FrQ9ukyII%2BJISsKxuZBc7pUGWc30yZkfJ48Qj8hpAKiUaCmEEHtoMwPyX78j4VTrKvGQRk7NnWLkNECfXEflcjjZ4wu9LCvgY6pgFAh8mwlVosZRg%2FU%2BoIAHe9cyKE7ZZXT3QEEd61ChvyuCih0C80Zy4Dksb9ef2rvL2bJjveFioCBPjy9B8m3Bc65EIy%2FdH2mjpGWk7grRqVTg3JjOdLvBzY8TdTpJjv9rTKa9niGirp4NIG8dpz8lN8UiNwDP4mbmgmfsG62tB3JMRsoH%2FrEB933yT9RAdztV0tYca6K%2BVrCR18lqu9oC6JC3IO3iBb&X-Amz-Signature=800977d6e0ca76ab2fcc28914a9c32658ce18d3646c449cffeabcdce561d1e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2MW3JL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEwL0VZkDMbYtSIimQG3Gs50mn1%2BM7RVWe7dnPCxahe4AiBzVhEHCqyhL%2B%2BSUTg3sw5L4ksk6HgPsJXD5HcOHD74wyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKNfdbIz3m7nxP6nKtwDB7n20sQo9BsBUy1p3xBpNOOthMmp%2F0VoEa3dUY8I63wxgYaCj8%2FW6FlhjkaT%2F2ySRfZjBD25A3ZUjhf9w7viUasRGALmlCAmGR82SndiuzPnGyfg5YVsDb1sLTvDckUt%2B4BinHdutCgy1ohB4idluF4ohKMsmCS3r9bIahjp0m8VeD1BT4LXVr1i3x1%2B%2B0vbteWLM65I3SvLkIqqXOtU9kToSASSiA33rOER%2FAjgYXcwrm%2B6IYr%2Frt1HENsOY%2FCfe25w9FNpi9NcGfXGT%2B5xklDE%2FfhX4R2rM2LTwNMuHGez2qcPOhLZZX6Tt00TnUHx%2FQJpuvVEV%2B8%2BhqKppILrrx1W5cfFVx06HTbshZdEAlVt6BdNokZbTygmRgr6knswMDXNDHQi2%2Fit1se6Cm0C8VwySthRGQesV9q2gq6OhCeKxu%2F9obm%2Fg0l%2FHM4To1WASaz4mtNZTY5wRIGEEUJ1KjIpyHVZ4gBVEcJDr9bjZ5BLJRoBYZPBHtkUeEImdm0yqsvmfHFA4%2F52vDYCMfR4xhmZC%2Bn40Yd9AR%2FrQ9ukyII%2BJISsKxuZBc7pUGWc30yZkfJ48Qj8hpAKiUaCmEEHtoMwPyX78j4VTrKvGQRk7NnWLkNECfXEflcjjZ4wu9LCvgY6pgFAh8mwlVosZRg%2FU%2BoIAHe9cyKE7ZZXT3QEEd61ChvyuCih0C80Zy4Dksb9ef2rvL2bJjveFioCBPjy9B8m3Bc65EIy%2FdH2mjpGWk7grRqVTg3JjOdLvBzY8TdTpJjv9rTKa9niGirp4NIG8dpz8lN8UiNwDP4mbmgmfsG62tB3JMRsoH%2FrEB933yT9RAdztV0tYca6K%2BVrCR18lqu9oC6JC3IO3iBb&X-Amz-Signature=29bb56492da54d83c37f59863ce976a387c81756ce78d4083145bea2da2aa20b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6LW56HZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFbHhHOHAkCX4hrd8PyPJdYaRG%2BHe5HquOUuY%2FQYUgCeAiEAwPZxpXgnlBDZERY%2F8%2BE7N%2FFn5tmQh%2B%2Fysn4WcWt81R0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG07mbDFlho8%2BW8ePCrcAyqzS13NsxG4GtsClZ9xvtZ1M5yo8qATbr3zurpHhU9tiN8LeULnWyUhjPYqv8RvhUyljew%2BOPtzD9cSlaeDNAi0r%2FWe2d9Myg9Sya6j8Won8bsm76hGViD%2FjPyWxdUKvtBY%2Blcxr7J3PK%2B2Hz8BbpNBFlfqVWaZuFcu1cTSRw8esduYB%2B1vvZJvm5AE1%2BoJoJEpc0M5R7b2WAmkU6wdkev%2FMVHR8yRSvcG1paOxL3mehGaMTYhGd%2FzAGCBSwGi9cxpNK1DgO211lzCElPT9UEOctQHV9JCD3j5vxquDFuHRXBAQpnHIS9I8s66yKO7%2FFxavQKadkbdaJA7qWrCWIn48KTd5kYbyyyE1bQsRvlBppNmUhLpjfOC%2BkxxMKmfpZHGK1v5%2F7%2FWKe5KHn30QbBoyeoGraQtnJsTB37Cejbz4h67KxQW%2FRJqc3cPEJEoZIYaf8fZANvagN%2FVHayO9Z0UKMLRshkUYG4o2eTsNfWtjBi%2Bnb4IQBp1Mi27J82XroZZI6jfXF0JdNeUiEzpkKNPyuohgSV2YQBtu3cjK7vk3MsAGfKHcgI4jb3P8GpuJ5n5S9dtSHiKGWAM%2F8XeLhXAjomj3sw6ERp0LChHoLw%2FyJuw8a4ojmVqAXKzLMMvSwr4GOqUBFQ2t1Uf7Oe%2BxJbP5s3ZQu1JbgD%2FH4fNOXBI1c5KRxiJG2a%2Fp7bdSxRVIaTwSCDgtkdl2syBeX12tt3t%2BE3xB9ZVY%2FJOSq3kpZpOSKZ8BaFyaQansK1OCd3lBcJyn1ANWLfG%2BpNvF9thmnOoyYItPNfAa5nWVX3Og3TMgR3OKm8SEkTRcS6M%2FuJSu8j54MHFcqmisy36x0O5pT5ggjNwJT123QfTC&X-Amz-Signature=9858ba09dd30215fb873c7c79f775be2cee35e916b14d7d91264caf2c62791d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSVPKVA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDnyAVpFPH3ltkCBOi6ey9ouSRj9fcGEKzeyA2X33fu5AiEAhayQm%2BaMMnc%2Beno9OHcmfPsV1a0zLr0rc1BRDU9Z9tEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkntLP%2FrHfAPHLnJCrcA6FQDXy9Lg%2B0EHu%2BZuYdCtYnY%2Bxwk1ldAeTbwkMBB1nkyUbEOvkt40jB5Z3yfj9k%2BBIhljLsNfn%2B4NpTvMcF3vKg4rxUjQE0qizrBbehNUvureWfzWqYcd01Br6SZ%2BGWlM11tzvfGNXBqS68l5oJ5GDPU%2BdOVyMXr7M5Ih3zB3uduxg%2B1xOOENDH6F3eppIKxG1bbjCOPskVAWHiV7Fh6T%2BXxTrd6Xv5agnes9zT4VpYQMftVNkFILp%2FLWtOgl4dm6m%2BO%2BKq5olbIVf0thRsXLfbpWRrvFiQfS6ydJ6tX0VBsp8MT4C0oM5MJdNFkzNHMK86O6CEW5uNv9zMplUckPRse1fxKOdJsAlSi7B5i0fEbOTcGWgqFmStumOf%2FQlA7mTvksLs9qMxTu8ByL4Ja8jXHzzDc8hWzWZ0G2ldUTqqLprd5cvDr%2FlMwdM4NhES9OhDO00Vj9XMTG98sUlIhkiwerd1Z%2FSlvj1HzBHFv90w1I9bi%2FMOOzYyGfdnLVGlY%2FXAC0Ufr35qJ6ndnR82aB670wolOALyNJY%2B%2BAAvAVI66F0YyMNHu9Ah2hMDbjaQR5AXydB6h7opU9IjsGsvyTplASEXTrJTPWSvKRJ9ykqv217GYBGEACp0J8w7MKbSwr4GOqUBnhVIJxb4MeEd4LamoZlX4gYYxAS7TgCIV89H0vDlmwbuqOJ7Lx25TY0UdVC65ve9SMZotka5qoumocnaXac2Wkm%2FAFbb74O56IZmSyWvRCrK0WW9I7VmvhuUP7i3T%2BXxSBCTXL92GyCz8zaBobug6G%2BSXre5sRZKhAi7p2ay6qfyej8bp58kfcSUehZ8YWfMnOYIvNJ4KtQ2JTex0U3nnbX8PcSJ&X-Amz-Signature=f2a6bc2cc72cb36ef34095716b6146dbca78d450b2319e2f021b75fa923e3d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2MW3JL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEwL0VZkDMbYtSIimQG3Gs50mn1%2BM7RVWe7dnPCxahe4AiBzVhEHCqyhL%2B%2BSUTg3sw5L4ksk6HgPsJXD5HcOHD74wyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKNfdbIz3m7nxP6nKtwDB7n20sQo9BsBUy1p3xBpNOOthMmp%2F0VoEa3dUY8I63wxgYaCj8%2FW6FlhjkaT%2F2ySRfZjBD25A3ZUjhf9w7viUasRGALmlCAmGR82SndiuzPnGyfg5YVsDb1sLTvDckUt%2B4BinHdutCgy1ohB4idluF4ohKMsmCS3r9bIahjp0m8VeD1BT4LXVr1i3x1%2B%2B0vbteWLM65I3SvLkIqqXOtU9kToSASSiA33rOER%2FAjgYXcwrm%2B6IYr%2Frt1HENsOY%2FCfe25w9FNpi9NcGfXGT%2B5xklDE%2FfhX4R2rM2LTwNMuHGez2qcPOhLZZX6Tt00TnUHx%2FQJpuvVEV%2B8%2BhqKppILrrx1W5cfFVx06HTbshZdEAlVt6BdNokZbTygmRgr6knswMDXNDHQi2%2Fit1se6Cm0C8VwySthRGQesV9q2gq6OhCeKxu%2F9obm%2Fg0l%2FHM4To1WASaz4mtNZTY5wRIGEEUJ1KjIpyHVZ4gBVEcJDr9bjZ5BLJRoBYZPBHtkUeEImdm0yqsvmfHFA4%2F52vDYCMfR4xhmZC%2Bn40Yd9AR%2FrQ9ukyII%2BJISsKxuZBc7pUGWc30yZkfJ48Qj8hpAKiUaCmEEHtoMwPyX78j4VTrKvGQRk7NnWLkNECfXEflcjjZ4wu9LCvgY6pgFAh8mwlVosZRg%2FU%2BoIAHe9cyKE7ZZXT3QEEd61ChvyuCih0C80Zy4Dksb9ef2rvL2bJjveFioCBPjy9B8m3Bc65EIy%2FdH2mjpGWk7grRqVTg3JjOdLvBzY8TdTpJjv9rTKa9niGirp4NIG8dpz8lN8UiNwDP4mbmgmfsG62tB3JMRsoH%2FrEB933yT9RAdztV0tYca6K%2BVrCR18lqu9oC6JC3IO3iBb&X-Amz-Signature=3042427dfa7072073c0b3258e61db526be240a0124efa09df3db2ddea55dae5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
