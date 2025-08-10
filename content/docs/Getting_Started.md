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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN45BV3Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mg0eh%2FE6aAPOeplzre5QrZiZqQeDpB3ItwC%2F2bxxNgIhAJ1yBtIwrwUTiSaa%2F0HNbMhyySNdmgOjrfVjWRXB0xLhKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbaApUpxtp3bPKjvsq3APQg6qSfp1VVBlKHkDfffHYoU9Bai2i5l98LhvUdMpDxj%2FKIYdfuAYxD25WBiuZFVH%2FbiWcd4sI9GJKm%2BYaOYmhekjUNzjlw%2BWg57PTErOaAKFdNtEtUDSHS8E4OCTi%2Fg5cx4GZIVIVKxosMblW9QqY4ZOlGNPFlutCNzq4piN%2F07bdZ4WrDUhMrmU4kP0U0GVrP5j0YeTjRuETTLBU2bmf0FsVY8fzLHN3dB%2BViv%2FcuXEcQsiBKS8pIBkaQZeGiWUH3L6tzt1%2BX7y8Uz6JYCFp%2FhjC2ed4ulMn5teADL1CQjqU9btQsQtNOaSNUrW2dWz%2Fi0VhWWp1fOcdD2R2hv%2FnrDDFScvAJlGZerjBGQEaAxRaYd%2Fe1tciEf1OvDgXhyajq%2FE9Y9OqaFqrupjI%2BLhb46ipPTITxEdBghNlGsSOcK9%2FapBbMMCwz%2Fvn%2F8Gd6JGT5u%2B4opZbXUEnbejT9TEvytBgjioGYkk6cXBf%2BYgPZnCrIXT%2Fh1TpWAqnE90fCSgm%2B8E%2FYSX%2FgQGUGQmEbmsH0I2LY5mi5T74VIK1yCnTmIzyURozQ5HXGzr9py0KL%2FnAUxVfvHZfMo4i3HL%2F2zSKCrK%2F2765Fbv4odMZFpJtkFw1tsPakPPPqbWMbTDs9eDEBjqkAaoAq4LQ0voaJl9o61mU3c5SxE2lUZB19tquR0%2BL4CVVnRLXzyEajWvScDspebP5Lw1YQDQy6kLPoaLpiTQZE2Rw7PTSKcOcLX2ZRD0liMxOOfATZDKzpFjNkZXNC7DkjmRDK2RgZYU7pUnVjWcDIrJX%2BheesJXdWGDSnAEM9YMTZOFrwjEzZpnW0szFoWEWragG%2Ft11ebNt%2FhVhqmpzB2vR0a9x&X-Amz-Signature=4b0cf17af8595dde8d87cfb8ebe5cb2ccc7c4e67eeebf46d973656ba5ca0e426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN45BV3Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mg0eh%2FE6aAPOeplzre5QrZiZqQeDpB3ItwC%2F2bxxNgIhAJ1yBtIwrwUTiSaa%2F0HNbMhyySNdmgOjrfVjWRXB0xLhKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbaApUpxtp3bPKjvsq3APQg6qSfp1VVBlKHkDfffHYoU9Bai2i5l98LhvUdMpDxj%2FKIYdfuAYxD25WBiuZFVH%2FbiWcd4sI9GJKm%2BYaOYmhekjUNzjlw%2BWg57PTErOaAKFdNtEtUDSHS8E4OCTi%2Fg5cx4GZIVIVKxosMblW9QqY4ZOlGNPFlutCNzq4piN%2F07bdZ4WrDUhMrmU4kP0U0GVrP5j0YeTjRuETTLBU2bmf0FsVY8fzLHN3dB%2BViv%2FcuXEcQsiBKS8pIBkaQZeGiWUH3L6tzt1%2BX7y8Uz6JYCFp%2FhjC2ed4ulMn5teADL1CQjqU9btQsQtNOaSNUrW2dWz%2Fi0VhWWp1fOcdD2R2hv%2FnrDDFScvAJlGZerjBGQEaAxRaYd%2Fe1tciEf1OvDgXhyajq%2FE9Y9OqaFqrupjI%2BLhb46ipPTITxEdBghNlGsSOcK9%2FapBbMMCwz%2Fvn%2F8Gd6JGT5u%2B4opZbXUEnbejT9TEvytBgjioGYkk6cXBf%2BYgPZnCrIXT%2Fh1TpWAqnE90fCSgm%2B8E%2FYSX%2FgQGUGQmEbmsH0I2LY5mi5T74VIK1yCnTmIzyURozQ5HXGzr9py0KL%2FnAUxVfvHZfMo4i3HL%2F2zSKCrK%2F2765Fbv4odMZFpJtkFw1tsPakPPPqbWMbTDs9eDEBjqkAaoAq4LQ0voaJl9o61mU3c5SxE2lUZB19tquR0%2BL4CVVnRLXzyEajWvScDspebP5Lw1YQDQy6kLPoaLpiTQZE2Rw7PTSKcOcLX2ZRD0liMxOOfATZDKzpFjNkZXNC7DkjmRDK2RgZYU7pUnVjWcDIrJX%2BheesJXdWGDSnAEM9YMTZOFrwjEzZpnW0szFoWEWragG%2Ft11ebNt%2FhVhqmpzB2vR0a9x&X-Amz-Signature=a35849b4d7772fcc00a358f8d0bd32656fe6c098839bcb367ae171ceb475c1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN45BV3Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mg0eh%2FE6aAPOeplzre5QrZiZqQeDpB3ItwC%2F2bxxNgIhAJ1yBtIwrwUTiSaa%2F0HNbMhyySNdmgOjrfVjWRXB0xLhKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbaApUpxtp3bPKjvsq3APQg6qSfp1VVBlKHkDfffHYoU9Bai2i5l98LhvUdMpDxj%2FKIYdfuAYxD25WBiuZFVH%2FbiWcd4sI9GJKm%2BYaOYmhekjUNzjlw%2BWg57PTErOaAKFdNtEtUDSHS8E4OCTi%2Fg5cx4GZIVIVKxosMblW9QqY4ZOlGNPFlutCNzq4piN%2F07bdZ4WrDUhMrmU4kP0U0GVrP5j0YeTjRuETTLBU2bmf0FsVY8fzLHN3dB%2BViv%2FcuXEcQsiBKS8pIBkaQZeGiWUH3L6tzt1%2BX7y8Uz6JYCFp%2FhjC2ed4ulMn5teADL1CQjqU9btQsQtNOaSNUrW2dWz%2Fi0VhWWp1fOcdD2R2hv%2FnrDDFScvAJlGZerjBGQEaAxRaYd%2Fe1tciEf1OvDgXhyajq%2FE9Y9OqaFqrupjI%2BLhb46ipPTITxEdBghNlGsSOcK9%2FapBbMMCwz%2Fvn%2F8Gd6JGT5u%2B4opZbXUEnbejT9TEvytBgjioGYkk6cXBf%2BYgPZnCrIXT%2Fh1TpWAqnE90fCSgm%2B8E%2FYSX%2FgQGUGQmEbmsH0I2LY5mi5T74VIK1yCnTmIzyURozQ5HXGzr9py0KL%2FnAUxVfvHZfMo4i3HL%2F2zSKCrK%2F2765Fbv4odMZFpJtkFw1tsPakPPPqbWMbTDs9eDEBjqkAaoAq4LQ0voaJl9o61mU3c5SxE2lUZB19tquR0%2BL4CVVnRLXzyEajWvScDspebP5Lw1YQDQy6kLPoaLpiTQZE2Rw7PTSKcOcLX2ZRD0liMxOOfATZDKzpFjNkZXNC7DkjmRDK2RgZYU7pUnVjWcDIrJX%2BheesJXdWGDSnAEM9YMTZOFrwjEzZpnW0szFoWEWragG%2Ft11ebNt%2FhVhqmpzB2vR0a9x&X-Amz-Signature=fdd742988b2e9a31f25b219148cce3022717b8550c611c2785d284af9471f56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X74Q7CH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJS7bAZ3iOsz489UJ2jyF6v0B8HpRcSDG%2BAznk63uxQAIgPYqIpyfeHh2Z2OwOdT24jeCsl0dSvqyaqLZ8jAgGQ78qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFETrT1oVlFSedBBPircA9KZQnJuVArMy5aypHMq2sQBQgxx7yH6o29PhjICbTr%2FlxXrtQ2w3MNfnIKrCAeyVYZE9gKRQsUab12GWLFPyqBb0ZiEEBX8dBol4l4wA7KIOdGoCG%2BXHfvKV7MrczPpk%2BUJTQSFE6o8%2B5sIfgtYX9NDM9Z0P8NKxQ1%2Bz753%2FjKMLrC05S6%2B6sAoV0Ghld1jzaPZ%2FLLH%2FdGHEYhpIN5wMdAgTyeVx9YbHrY7nr8e4vpnxj73dSyQEz%2F6QNOdqK3TFCPs7doJQwtzqI2DOHzcdct3XldcSBeAWzdU%2Bz1%2FA%2BSo20z%2Fmk2KUFrHD3SIsfSE7QevKm8iU3nLt0IT5yNxIudMeWz5mhGcOkWbaiCWRizGJegPepzwbLUDw8R%2Fq8Mk4WmAJ%2FAa8Z55uTPf2z7D5cqtJHc6WEYK0Y3gpqQeMhvX0bUkhtcUvF%2B%2FVhx4s5Uw03nhyU1qeJ3Y7XVYXonaeE240YtwyjMVyIzKdyfUATeS%2Fqf18y5H1eLJvzfWx0NuxrR8eR2FlsDK%2F8%2FX%2BDIqVLnqEc%2B4w6ssJ8H6jej6FF%2BdpCwPttzX8JVfEDPsAom5JsvSqwZzpNvg%2B6DW4SBQ2sZX0zMV7yg9rSTG2Ux0A3HS1nl%2FPDp2%2FBkvFss4MIj14MQGOqUB%2FbHyv0Uo4T%2BmOiOl6JX8URWpWIzKUrBOcgt9aMrY64Jr6EM4qJZwxlcgvO0oN4eJ3k8Ylkt%2FD2bc8xnYnAzRz8eQVPRVzVz4bDrJ%2Bc0x3VNj3KGlvG2F7Wf5mFDz6MKznNKIqfsWjadqJHOnefDBhwvMuz90ysB9QnuaUpbwHBf8%2B6lVvaV6TnH0BaPu6aERFCx9zqXYoO3WgXRypjZm6S73AXbr&X-Amz-Signature=2d91c20690be74f4ddc5bbd1e7595328390ccb3ed3d9c0b127e829975d850f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHDKBD53%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUScmKKz6HqTcaRj0Kmws3YV%2Bsn3QM8WvOlwyJrRwtRAiB18wkDLsUoIzYvGeS4otlXeRYWi1iTUxe269uIXv595yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzOy7dhajGw5V%2FGf%2BKtwDsiM5SFh5LVyp74aVdsNSTB4U655eBKKXUF1%2FChJnUbSdMBVyI3FfLxvRqk%2B0o3YrXm5pGpp9MamOdubi6RJ8aSievlnxA2tOM5SSynSmm0rAaxMQqKKrQtCg4k5nakkAisMTm6fiQpCyfMb4GXaXvteMH2F772urdJ4bp%2BxSPBuKlhDMrE%2BRvDE47kzqPXmwzLc8V1LK4D7P0qywojVxUCgqcFil0bAMXK9Yo9O0jdadC%2BkS0zrdSz2MPdcZyvn01ea26Pi0xZfwixqdi3rlouu3BI82ddPyVMd225uGqWZOj4PVEklR1GlzagVrt9IfZLstGr2QFYXNp9OWC%2FTeejA1X2xH6039Ryq6ca8M%2BWlg3%2FaqefAfo08IFjQFFICqZWtkYeibk7kZFdYjdF1ODyH1UxUKwdlInQqkRUNEISolxfE0XymX8fVpyUz0GjDfOfTZUPYC0n6swg631BSqKzmB%2FoS%2FIBBs%2Fq%2BuSjlURbH3cdeXGBZn15YvYC3Q%2F9oZvhyJMptzItzXtE%2Fw2cmt7nR58p%2FLs6naq1SRNLNkDZKxrsJ%2Few4fJ6Xm58BK3%2BF1pJskiHR%2BhPgd1F%2B15nvqZzBK9DIfqsOc5wPBVdJkKVMtOhBE9j3Z7npOIdow7%2FTgxAY6pgFUfUcXTyxRlQCqDBqRMWFlWL%2FU2IpVfj3Mre3GGn9hf5CBj7VNXmFi93oM05pj9wtiGTo0SJw5hsFG7l2Smg%2Fu1C54kzb8VK54OagQUyjABEIau%2FTUzxlqzEs2w7gyBLwPK7ThuFii%2F2qk3mc%2Fv9QpxkL8%2BwBK9cbXh9a6UYn4UNDj%2F4mDuYfDTBbQnfcn2T%2B3OVWJF00OwzDYiSh5PqKBqP6A1ydD&X-Amz-Signature=82943d314c99501f4dca0ff68fb789c0e068ff3077913e5483523c879dc5541b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN45BV3Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mg0eh%2FE6aAPOeplzre5QrZiZqQeDpB3ItwC%2F2bxxNgIhAJ1yBtIwrwUTiSaa%2F0HNbMhyySNdmgOjrfVjWRXB0xLhKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbaApUpxtp3bPKjvsq3APQg6qSfp1VVBlKHkDfffHYoU9Bai2i5l98LhvUdMpDxj%2FKIYdfuAYxD25WBiuZFVH%2FbiWcd4sI9GJKm%2BYaOYmhekjUNzjlw%2BWg57PTErOaAKFdNtEtUDSHS8E4OCTi%2Fg5cx4GZIVIVKxosMblW9QqY4ZOlGNPFlutCNzq4piN%2F07bdZ4WrDUhMrmU4kP0U0GVrP5j0YeTjRuETTLBU2bmf0FsVY8fzLHN3dB%2BViv%2FcuXEcQsiBKS8pIBkaQZeGiWUH3L6tzt1%2BX7y8Uz6JYCFp%2FhjC2ed4ulMn5teADL1CQjqU9btQsQtNOaSNUrW2dWz%2Fi0VhWWp1fOcdD2R2hv%2FnrDDFScvAJlGZerjBGQEaAxRaYd%2Fe1tciEf1OvDgXhyajq%2FE9Y9OqaFqrupjI%2BLhb46ipPTITxEdBghNlGsSOcK9%2FapBbMMCwz%2Fvn%2F8Gd6JGT5u%2B4opZbXUEnbejT9TEvytBgjioGYkk6cXBf%2BYgPZnCrIXT%2Fh1TpWAqnE90fCSgm%2B8E%2FYSX%2FgQGUGQmEbmsH0I2LY5mi5T74VIK1yCnTmIzyURozQ5HXGzr9py0KL%2FnAUxVfvHZfMo4i3HL%2F2zSKCrK%2F2765Fbv4odMZFpJtkFw1tsPakPPPqbWMbTDs9eDEBjqkAaoAq4LQ0voaJl9o61mU3c5SxE2lUZB19tquR0%2BL4CVVnRLXzyEajWvScDspebP5Lw1YQDQy6kLPoaLpiTQZE2Rw7PTSKcOcLX2ZRD0liMxOOfATZDKzpFjNkZXNC7DkjmRDK2RgZYU7pUnVjWcDIrJX%2BheesJXdWGDSnAEM9YMTZOFrwjEzZpnW0szFoWEWragG%2Ft11ebNt%2FhVhqmpzB2vR0a9x&X-Amz-Signature=261643328d0c0c79a378873cf66c042ecff83b128d4da4610e3b93997d5accd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
