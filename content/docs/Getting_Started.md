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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCIXCPW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIANBuFV9EJwNJTVhGQUkGAnU2SvcOCXbCp%2BBe%2B3Udm67AiEAjzCGPIWGKDFWmMdlZwhR48DBxrACtiX7N3mduxOVOG8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb9yKdmVgCD9DG8AircA1Gj11ZKTRwVSYewykq%2Fx6QIBEaeLGeCdqyJg3fShKeURmqvo1sjeru7%2Fpg6rhrJwX7Kt%2B6haeOXSlJe7SJLcdhQveuFZAM4MMUQtAggPcC5crzPovWjIbPW2TNkrt%2BxTZrCWzGQTWMnscKlMtbWiMAlAzfOowfN8Xbh0XApr50VfxGFUAJk0wbl%2BCZ1SJw4FbR5i%2Fgn3Atye3qNFtxgIMD9UuvDLgsfS%2B84jtL3czLt7eNXhLBceCUe%2FKG35zlPAwsQiy72ZJd4AjZ1fHUdLoiWoUWQ7bpxSHl83DuyZUxVfxGs9Ufdfn6s%2Btblj4UahBNIs3nntvuyupZt8CNKdW4Ndxix2vS4jfJC8OpZl4OJu3tK23Kq4Kjq4Wi7U22kF1RmAyFNmTGuq7wfAKz21oRwIzgxTinXKV48Q5%2BXMuAQQRhOW29VtXDeQEO7leCDZN%2BnjO1X8ke748PKFtxN5nWNX%2FNfg2GipcjDHZoP8GpQmSjbBqcQpO6kaKbx%2BmJNfiiO5RGrkC7lRuBcIKAxk94XKoFmxeNH4Sa5zYYPQXrIXHXg1bpCWzvtopHnFFG%2BkXTorHKXgFsAIa7wrGKxUHMa%2Bvmc%2FqlK8qj5lW2h%2BcMk0t7atGxqSsF6zHpzMLO2r78GOqUBUI6H7%2BVQWUAL%2Fs38yuvnrQ%2B1wIABX77fnTCCrFtW5tWv%2BkPFebXeB%2FMA6owH%2FnWUBUwz%2BrdqukCs917EyAPcne%2Bjh7JpPN8Rl6gNgSX9w5Bf0TW%2F1Pi4u1MNeZLwV8I%2Bw0fq3YwPgwEGfI7Khf9Gv2K2LsDAWgQJIoTN3Ehm4U5B6p8INZsuRHQ5qZJwB1vUHlbuWYbtZCHlUs%2BdXWondlZZK6JB&X-Amz-Signature=36f178c025a925361ee6e4ce7ee0111514257bebd2668c0dc9d961340749e73d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCIXCPW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIANBuFV9EJwNJTVhGQUkGAnU2SvcOCXbCp%2BBe%2B3Udm67AiEAjzCGPIWGKDFWmMdlZwhR48DBxrACtiX7N3mduxOVOG8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb9yKdmVgCD9DG8AircA1Gj11ZKTRwVSYewykq%2Fx6QIBEaeLGeCdqyJg3fShKeURmqvo1sjeru7%2Fpg6rhrJwX7Kt%2B6haeOXSlJe7SJLcdhQveuFZAM4MMUQtAggPcC5crzPovWjIbPW2TNkrt%2BxTZrCWzGQTWMnscKlMtbWiMAlAzfOowfN8Xbh0XApr50VfxGFUAJk0wbl%2BCZ1SJw4FbR5i%2Fgn3Atye3qNFtxgIMD9UuvDLgsfS%2B84jtL3czLt7eNXhLBceCUe%2FKG35zlPAwsQiy72ZJd4AjZ1fHUdLoiWoUWQ7bpxSHl83DuyZUxVfxGs9Ufdfn6s%2Btblj4UahBNIs3nntvuyupZt8CNKdW4Ndxix2vS4jfJC8OpZl4OJu3tK23Kq4Kjq4Wi7U22kF1RmAyFNmTGuq7wfAKz21oRwIzgxTinXKV48Q5%2BXMuAQQRhOW29VtXDeQEO7leCDZN%2BnjO1X8ke748PKFtxN5nWNX%2FNfg2GipcjDHZoP8GpQmSjbBqcQpO6kaKbx%2BmJNfiiO5RGrkC7lRuBcIKAxk94XKoFmxeNH4Sa5zYYPQXrIXHXg1bpCWzvtopHnFFG%2BkXTorHKXgFsAIa7wrGKxUHMa%2Bvmc%2FqlK8qj5lW2h%2BcMk0t7atGxqSsF6zHpzMLO2r78GOqUBUI6H7%2BVQWUAL%2Fs38yuvnrQ%2B1wIABX77fnTCCrFtW5tWv%2BkPFebXeB%2FMA6owH%2FnWUBUwz%2BrdqukCs917EyAPcne%2Bjh7JpPN8Rl6gNgSX9w5Bf0TW%2F1Pi4u1MNeZLwV8I%2Bw0fq3YwPgwEGfI7Khf9Gv2K2LsDAWgQJIoTN3Ehm4U5B6p8INZsuRHQ5qZJwB1vUHlbuWYbtZCHlUs%2BdXWondlZZK6JB&X-Amz-Signature=63ed2baff8b771afe48e57ce880ca344fa66081c956792eb97c040a69566b05e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIPOQ4R%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDuV8qO1hl8VPffd4VljQYSNkJAJBc6zj4GNgm5PutStAIhAKeAFkfzAWDGPyzVabwoZ8eNA2DI43iQxRQDduVgl0JxKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBLnpbfI25HSaU01Iq3API8EKkekv7joXopSEJ0qVROWgDcD%2BxQlLgA7ok%2BgDmj%2FHGhbZsG56PMo4TIesGjKqospElyKI00W3%2BeMvgdiTHORuqs48PB1ZkU7QnzBfgfi9WlyKDgCIj6yjf0jSoNg46m6Zn0lNTul3fmtFWDfBijD8YJM98c1cW4euF6yFyUh4xw5TbAw3fFB2OXm0YdIG%2BO9GM5mn8fcycyDhnTbIu%2FXrakzytDPSq2P78BgfiBkjT1VRPaqmzWJo%2FmhjhFRNYQDJcEKqhZHuTkEOC%2Bc8Tpds2knWaVZUyEzDolhQwkUXrSp13cUHET1IdWZszbWgiSQhRYK8yin8TO4%2BcEAR4u3K4u3zTePKs2J7hYp7DOQkSPCgnKAdxQeZvDAmqrpvT1XpRQgV4%2BcGXJ6cy2GwlAQEStpNFE58VBsQQokS%2FkC7ShusnTrXiUvPtQRirqj%2FskcdhRRYiud5O6K59Fmi3EgqoOQy85sByMHRRRUIiZ9SzQfATS6uKbmZXzhij7GHNeX4ke0xTj2mC%2Fatop3lzlqxr%2B6eGoQ%2BBI4ZnLofNFB1zLe2B%2FQqEitheREs5otQ5mlBQyvFe5QpoDFY8Q61RiMpOTfXkEhPM4l5D1HvcxDC78T7zK4hwY9Js4zCIt6%2B%2FBjqkAT7vwq%2Fg54VMuyr7Q7%2Bzr09wQNmiPDCM45zcl%2Fw0X4l%2BhaUB28%2FbGWFyHdytvKVYycW%2BzIAaz4dWYBWob8joolkqjH2uaod5uo3onE7v2jAIbRv1OAgdCzn3gY7Lin3ddK6zYPNXKQS05NNqJxCCc%2FQkDCbpgNuZcPhLBYo8YjIDHynCPsq0lfDrlSPbIyTN%2BX%2BVOWEt705tD879ZPFH67A346kc&X-Amz-Signature=80e5cbfcec0e50e133ea1b15b490a72dbf9d20e4bebdc1e2085ab39ea2355765&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SKA5S6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDy7HLARWKp5ZUAd98WXLv8GpoeXVzvuNq9adC3jWTceQIgZ7UNiPqRaNAqKsqqIZ1aqIsAHE39H%2BpwP15%2FvlTqvpMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNremVzXiDcK%2FjqWmSrcA%2FOJQ%2BVElWaRCATZi8F%2BybGKAP0ZD4UZI7Iqtryu7gMdZhPmwJOgzcAHVmqA1xhu7%2BpHPICfTSAuU6EB7S7X7SlZUjERD2X0cs1Q5e3yjK3CzUcEnPFDW3swNUxIDEAtfgI6ZKnR3diJFIv11g8wVyZMf%2BUkAoak88bS9d%2BPfJObk0OZhKy6uvp0Edx0pLkcTyj1zWxYQ1yo%2FBOGpQ9mP9%2FNQXlCw%2FNkK%2FMcT%2F0ARIDyBmyw9rgNhANx6U02jXAepJspkRyQVRNUfW2qU9NG481q96x5osQES%2BVHuGZhDnMGKxewAEfGMk4c%2BKYl3ergQTFB4NjatLRmosel3gP20zEt43rg%2Fcs3fubkcAlZHZ3mLaVcp4jVNUAubBynJTMqGixrdq8qGzrGlgK0E4MrF4tjErpbZ002rmpC71Dhj5nJ0C9Ts74g4vzhIUBC2aTNizZx6SjEXuv1RlqE72nGHvs1yljpoxitYy5Arc9jULa8fftH%2F1tzX4ZwAkHPHl0sd%2B%2FRDu1ZQlG0TJVL2%2FI7R3GmjTqmKmIAa6EfvLP%2BrsPAQOoFQviNhoznTyrSph%2FwW7X0P%2BQeB50JLDp12wmLkEp7wITPAbFVmYBJ8OgcpfjROOW%2FlBcb7rpFwgLsMIm2r78GOqUB95oOO5Y94ygky1qHEFiAi0AAfzqFsBaw2QyNeC%2BQUBFkBPzx5446ax7%2BaPNNyLMP13iqpWmn8P7UTFY%2BR7wf2vPA059%2BZUxOQiZLFkWM15QlX7wTKZkkotNQeZx1hmoxUg2B1B5uMm0yyuJJ5upXpUv1f4M%2BSswvotkShxIhxEHpfSU84DTCyOODyvY0qGAuA1KKkNAv8ZFN2RM90IH2DIbK25bk&X-Amz-Signature=27d4f515c3b6ec1b4bca5f41150dd3fec326d2259eb7e1bffd229d17edd0d9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCIXCPW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIANBuFV9EJwNJTVhGQUkGAnU2SvcOCXbCp%2BBe%2B3Udm67AiEAjzCGPIWGKDFWmMdlZwhR48DBxrACtiX7N3mduxOVOG8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb9yKdmVgCD9DG8AircA1Gj11ZKTRwVSYewykq%2Fx6QIBEaeLGeCdqyJg3fShKeURmqvo1sjeru7%2Fpg6rhrJwX7Kt%2B6haeOXSlJe7SJLcdhQveuFZAM4MMUQtAggPcC5crzPovWjIbPW2TNkrt%2BxTZrCWzGQTWMnscKlMtbWiMAlAzfOowfN8Xbh0XApr50VfxGFUAJk0wbl%2BCZ1SJw4FbR5i%2Fgn3Atye3qNFtxgIMD9UuvDLgsfS%2B84jtL3czLt7eNXhLBceCUe%2FKG35zlPAwsQiy72ZJd4AjZ1fHUdLoiWoUWQ7bpxSHl83DuyZUxVfxGs9Ufdfn6s%2Btblj4UahBNIs3nntvuyupZt8CNKdW4Ndxix2vS4jfJC8OpZl4OJu3tK23Kq4Kjq4Wi7U22kF1RmAyFNmTGuq7wfAKz21oRwIzgxTinXKV48Q5%2BXMuAQQRhOW29VtXDeQEO7leCDZN%2BnjO1X8ke748PKFtxN5nWNX%2FNfg2GipcjDHZoP8GpQmSjbBqcQpO6kaKbx%2BmJNfiiO5RGrkC7lRuBcIKAxk94XKoFmxeNH4Sa5zYYPQXrIXHXg1bpCWzvtopHnFFG%2BkXTorHKXgFsAIa7wrGKxUHMa%2Bvmc%2FqlK8qj5lW2h%2BcMk0t7atGxqSsF6zHpzMLO2r78GOqUBUI6H7%2BVQWUAL%2Fs38yuvnrQ%2B1wIABX77fnTCCrFtW5tWv%2BkPFebXeB%2FMA6owH%2FnWUBUwz%2BrdqukCs917EyAPcne%2Bjh7JpPN8Rl6gNgSX9w5Bf0TW%2F1Pi4u1MNeZLwV8I%2Bw0fq3YwPgwEGfI7Khf9Gv2K2LsDAWgQJIoTN3Ehm4U5B6p8INZsuRHQ5qZJwB1vUHlbuWYbtZCHlUs%2BdXWondlZZK6JB&X-Amz-Signature=686ae43cc82747d22a172eca576034cfe4d5ec2d028b228b1ab4be599f722f75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
