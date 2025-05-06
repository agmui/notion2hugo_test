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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGXUCYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfYzqdm316YM336yVB4QOMVyz5tD3GvjC9WWZAH5u8AIhANOCL1MY9bnkvb0ACLxoFF4pKxgoeLYVy3KcpKitEvliKv8DCEwQABoMNjM3NDIzMTgzODA1Igzs2JnPvrksJP%2BfsiYq3APyfCIag%2Bwxki9bsLoz5pm6HxNURnP3hDUYalcJtehkrpOimwgEKzH4qfgB0XlYYNZbSJ%2BUwlMs6Qx844H39Px%2BQ%2B68bHJaCAoaRQ%2BxPMR%2F0Bocgv8wkpnlbkM3EmGI94qkBB%2Frnrp71NjZU6KjsmECXX1R92BBp8TNeAQ2yiPcvUIM0ziSg2Q8DYOoPkFAZyiRHL321OI6cOCl2Xn7rbtU9nK3ELXtrpfDRCpvC6wdRQh9TnGXhAb%2FjE0%2F5kdUg0xEXjPWypT4gTuIUKGzayOjVbe%2BdOseyeLDS%2BLbI7Xfmwix%2FBRnXVz%2BvLCRqLfyXDozx%2BAfmQpfAUsxSWWlRR1hIbhd71PdxEVKa%2FtbcHmBVzynocaA4aIwFNeSZmKgUn%2FgyM8Z8xHTEz1wnDK%2BzicqkDIYVmdoJenzVPyixRhipf7nfTgA5zm%2BOBqNIde60Z4JSx9uQclEdFl%2Fe0OaDh76bqvuZ%2BRrEIzKLBUh8a%2F5C0HX0bYRs1sVULq0v5K%2FteDSPf75zcwml9KoeIb3FuEFCVTGzhSZCYEydPO52nscfEf25YqXConHEvXsUfJntPFSbTmpn73EZ%2F5mJo1TiPluegPWxTtSbTumdVSwPGw70atYJVKj9YfjOZ08eDDQtOnABjqkATR2Qm5RyVrZuqi8LUVR8X9EzSl9GqSFekuum3RqJH6myzy7hQR84lMchgDcf%2B6UnnBmoelq0StMoc%2BR86ub3XOrfnJhA%2BVhgeGWYzWP8eqoYxu0Nqqxssji5O%2Ff02UbCX2ypjxl1PfFQc9lIp98xYZ9BiuG3d1nCvUYjs%2F3pfdZ6FiwjkVnUoNz5EZwbc8pCst4Th%2F%2FYMDPatN2T8N%2B2gN3W13t&X-Amz-Signature=701613f6b20730e226edc924877286121d505dee83012571afe6f7453a52084f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGXUCYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfYzqdm316YM336yVB4QOMVyz5tD3GvjC9WWZAH5u8AIhANOCL1MY9bnkvb0ACLxoFF4pKxgoeLYVy3KcpKitEvliKv8DCEwQABoMNjM3NDIzMTgzODA1Igzs2JnPvrksJP%2BfsiYq3APyfCIag%2Bwxki9bsLoz5pm6HxNURnP3hDUYalcJtehkrpOimwgEKzH4qfgB0XlYYNZbSJ%2BUwlMs6Qx844H39Px%2BQ%2B68bHJaCAoaRQ%2BxPMR%2F0Bocgv8wkpnlbkM3EmGI94qkBB%2Frnrp71NjZU6KjsmECXX1R92BBp8TNeAQ2yiPcvUIM0ziSg2Q8DYOoPkFAZyiRHL321OI6cOCl2Xn7rbtU9nK3ELXtrpfDRCpvC6wdRQh9TnGXhAb%2FjE0%2F5kdUg0xEXjPWypT4gTuIUKGzayOjVbe%2BdOseyeLDS%2BLbI7Xfmwix%2FBRnXVz%2BvLCRqLfyXDozx%2BAfmQpfAUsxSWWlRR1hIbhd71PdxEVKa%2FtbcHmBVzynocaA4aIwFNeSZmKgUn%2FgyM8Z8xHTEz1wnDK%2BzicqkDIYVmdoJenzVPyixRhipf7nfTgA5zm%2BOBqNIde60Z4JSx9uQclEdFl%2Fe0OaDh76bqvuZ%2BRrEIzKLBUh8a%2F5C0HX0bYRs1sVULq0v5K%2FteDSPf75zcwml9KoeIb3FuEFCVTGzhSZCYEydPO52nscfEf25YqXConHEvXsUfJntPFSbTmpn73EZ%2F5mJo1TiPluegPWxTtSbTumdVSwPGw70atYJVKj9YfjOZ08eDDQtOnABjqkATR2Qm5RyVrZuqi8LUVR8X9EzSl9GqSFekuum3RqJH6myzy7hQR84lMchgDcf%2B6UnnBmoelq0StMoc%2BR86ub3XOrfnJhA%2BVhgeGWYzWP8eqoYxu0Nqqxssji5O%2Ff02UbCX2ypjxl1PfFQc9lIp98xYZ9BiuG3d1nCvUYjs%2F3pfdZ6FiwjkVnUoNz5EZwbc8pCst4Th%2F%2FYMDPatN2T8N%2B2gN3W13t&X-Amz-Signature=3488cad6aa8943bcf7175cc40e3b2a135d16ceb987024d6ba0ef764670fb6f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGXUCYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfYzqdm316YM336yVB4QOMVyz5tD3GvjC9WWZAH5u8AIhANOCL1MY9bnkvb0ACLxoFF4pKxgoeLYVy3KcpKitEvliKv8DCEwQABoMNjM3NDIzMTgzODA1Igzs2JnPvrksJP%2BfsiYq3APyfCIag%2Bwxki9bsLoz5pm6HxNURnP3hDUYalcJtehkrpOimwgEKzH4qfgB0XlYYNZbSJ%2BUwlMs6Qx844H39Px%2BQ%2B68bHJaCAoaRQ%2BxPMR%2F0Bocgv8wkpnlbkM3EmGI94qkBB%2Frnrp71NjZU6KjsmECXX1R92BBp8TNeAQ2yiPcvUIM0ziSg2Q8DYOoPkFAZyiRHL321OI6cOCl2Xn7rbtU9nK3ELXtrpfDRCpvC6wdRQh9TnGXhAb%2FjE0%2F5kdUg0xEXjPWypT4gTuIUKGzayOjVbe%2BdOseyeLDS%2BLbI7Xfmwix%2FBRnXVz%2BvLCRqLfyXDozx%2BAfmQpfAUsxSWWlRR1hIbhd71PdxEVKa%2FtbcHmBVzynocaA4aIwFNeSZmKgUn%2FgyM8Z8xHTEz1wnDK%2BzicqkDIYVmdoJenzVPyixRhipf7nfTgA5zm%2BOBqNIde60Z4JSx9uQclEdFl%2Fe0OaDh76bqvuZ%2BRrEIzKLBUh8a%2F5C0HX0bYRs1sVULq0v5K%2FteDSPf75zcwml9KoeIb3FuEFCVTGzhSZCYEydPO52nscfEf25YqXConHEvXsUfJntPFSbTmpn73EZ%2F5mJo1TiPluegPWxTtSbTumdVSwPGw70atYJVKj9YfjOZ08eDDQtOnABjqkATR2Qm5RyVrZuqi8LUVR8X9EzSl9GqSFekuum3RqJH6myzy7hQR84lMchgDcf%2B6UnnBmoelq0StMoc%2BR86ub3XOrfnJhA%2BVhgeGWYzWP8eqoYxu0Nqqxssji5O%2Ff02UbCX2ypjxl1PfFQc9lIp98xYZ9BiuG3d1nCvUYjs%2F3pfdZ6FiwjkVnUoNz5EZwbc8pCst4Th%2F%2FYMDPatN2T8N%2B2gN3W13t&X-Amz-Signature=6cdfd45cbbe5ef1933cb2fd963fa1f408bc72a6988b9f8d8a4db17f5a6b58634&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SK6PB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2BU8F1KOOz3J%2BDg9KyfxPJiUSk06HJJG2zjXihjp%2FugIhAOEVhDmLsEwAKxR6EhKnD7AL8uDKNBY8c9u%2BZjK9G98jKv8DCEwQABoMNjM3NDIzMTgzODA1Igy3%2B53nltXCCuDG%2FSMq3AMM9ULlGNdkqGzlRtdCo1vxk0%2Fmt7Mvhb0vYM0a9teyd1ulWelyGnolgZeNvKJMutGSkWX8GYVUxwkFbqBO4dmaLzG%2FF8yVMpSwTrPvOW1dO9TTOlX4HN9WfbGEiaSu9SB7vpW9THXj3jVNvFEa9frYiMPQogkDcsHWCVyO0PFruDV8wdr0tf5Djm8ImDmpsLnS%2B5GIX3WjYGjtxYl%2ByvQ6IFke2HGVgaymRoiDSV5WNgBFNmA9re%2Bh5rutQdLrxT0vwi0BD0rIhFsDRvHtJS2eXdCnhlMJ8%2BZgBAGeqtxWhcPzrZhTAQMvcFfkXaEO3jGbcnLMmx4lGBmJFj0VvRdunvsij73fkfYHsaKKPrrhzYurWr4eKZlILHRajYhqXwpWASh%2BkFr15fCEQPR7MTaamHoLXioRjI%2BU84ZUczL01XQn87cR1SELCOMhn3bsKIWcYreQ4YX1RgmIO2MW6bMTVrkvKYeD7wCzytOHWKAeC87Gvv7CrfKILJWQCVXAP86DBG10E4NdPM8jkop0bwCDlxy%2BA3W1M%2FjX2gcCixRFXeuCRnwwpWf%2F6I4SXgBrauL3JilkfFfuKG6HA0wICUhgVBhhiKbmj1UIY6NXWPX%2B%2Bsbb9zKAigB6iM6xXjDms%2BnABjqkAWgZXyQIvhD3%2BHQyGTQotxBaSwW4LqMFadD6ERiD10meBvNQzqGFA1%2FCIl9f%2B1v42NskU8qHXl7pb9rpUT4NfA%2B%2Fx%2FuUwGe0nLPveT%2BlOY59r41Bc23TMHuYIM2Qs2DVy5jYfIZzDd5oSTHgowVGrIdzR%2FDl%2FJ4GNOl2LxxB3%2Bd2m38u%2BX5S%2Fb5S1r%2Bm4jSCAtk0FHmFC0vKjSTDSK6NheOkEc0a&X-Amz-Signature=53b3625c68d4eac37ab125e823a7fb6eed2757c4f33fe1a1c69d5d8d71c01a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRR4TAZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz%2B7WHfLZ%2F%2F1Bra5uPIVP%2BjOA7d0kvy%2BGfq6NqD8hQMAiEA6%2BrhdcNFs3YbGncgc9KPj%2F8LDS3tv2GbXHk7TNGE%2BPEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGdSYgUM8NjqGgJ3DyrcA2dMr753l4agPOlCso2GqF4bJClcs9E29y0HvCyF5YCwH4zRd7p8wZEbA72DKa2fJtr1FGISajq866NjdqGvfDtB4D5wBUxC4l2kYAAPxBJ%2BIxsniZYl8HaqJ0pB5zpkEOn6ak3mZIxtIei%2BRnSSrCUDniiHgbvApQ3%2FhR1nnog4QW6QaArKecZE641isszw1xxEJqVkftvGyo%2FclseBBZXAmqroWvqoVO1ADPNObMYX8iG6QNsIT6PWc7V4%2B39xcOj5U5O1OfzTComPKUxaI0jmxc564QTP%2FfhstyvScS%2BnumDJGwV22AWwACQMnmNwn1AAxTUc%2BXvGZCYiPVtXTM%2F3359uEYmu79NNg6LK9Ev3scpKxh0%2BXheB0JkqQiRi7uIpWNnt82%2BrYLtu8r58l22yef96xPodqIEUka9PZKNp8PrkLbaILMo%2BAqig%2FyN2YCi7fpOcHEsq7jqFHhUcObHIQBY%2FZ4Mac2GS93%2FESE%2BO8o7fTzCXoMfpR3zJQuVC1dUF1%2B7csT3UQSMNsvqMpYnp6CZfrQNlKXKmjius1zn3ktrMncjTgTl3ojIT4nDoUvc4FL9x6nQnZ3j7hh%2FLsmznGiDII7dhbt5yEUysPm2WqWMERCnt02ytHpoAMOaz6cAGOqUBgNRjTLtcNjr7GARGqHHU2NFTj61c%2B943S4R2j2MZczVhzcVwkj%2FL8K%2FpBPgWIRGPz7PTUnuYz7Ab8J8muEJxQmHOjAFDpQ02He3dlBsc28RXaA3voDVdrQroDvmwin2x659%2FZ48F6XMv69J39OBF7H774wWxnIudR%2F7G6LG1eRS%2BPN8CBu2T26yfQUHt8AICjpB3IQ57%2F8MWvc8WMmvD0WAQmEkp&X-Amz-Signature=af4f174c8e9c554a0d9d30a9fcdac1da50632352d265f1ec0dc49ea21c10a572&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGXUCYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfYzqdm316YM336yVB4QOMVyz5tD3GvjC9WWZAH5u8AIhANOCL1MY9bnkvb0ACLxoFF4pKxgoeLYVy3KcpKitEvliKv8DCEwQABoMNjM3NDIzMTgzODA1Igzs2JnPvrksJP%2BfsiYq3APyfCIag%2Bwxki9bsLoz5pm6HxNURnP3hDUYalcJtehkrpOimwgEKzH4qfgB0XlYYNZbSJ%2BUwlMs6Qx844H39Px%2BQ%2B68bHJaCAoaRQ%2BxPMR%2F0Bocgv8wkpnlbkM3EmGI94qkBB%2Frnrp71NjZU6KjsmECXX1R92BBp8TNeAQ2yiPcvUIM0ziSg2Q8DYOoPkFAZyiRHL321OI6cOCl2Xn7rbtU9nK3ELXtrpfDRCpvC6wdRQh9TnGXhAb%2FjE0%2F5kdUg0xEXjPWypT4gTuIUKGzayOjVbe%2BdOseyeLDS%2BLbI7Xfmwix%2FBRnXVz%2BvLCRqLfyXDozx%2BAfmQpfAUsxSWWlRR1hIbhd71PdxEVKa%2FtbcHmBVzynocaA4aIwFNeSZmKgUn%2FgyM8Z8xHTEz1wnDK%2BzicqkDIYVmdoJenzVPyixRhipf7nfTgA5zm%2BOBqNIde60Z4JSx9uQclEdFl%2Fe0OaDh76bqvuZ%2BRrEIzKLBUh8a%2F5C0HX0bYRs1sVULq0v5K%2FteDSPf75zcwml9KoeIb3FuEFCVTGzhSZCYEydPO52nscfEf25YqXConHEvXsUfJntPFSbTmpn73EZ%2F5mJo1TiPluegPWxTtSbTumdVSwPGw70atYJVKj9YfjOZ08eDDQtOnABjqkATR2Qm5RyVrZuqi8LUVR8X9EzSl9GqSFekuum3RqJH6myzy7hQR84lMchgDcf%2B6UnnBmoelq0StMoc%2BR86ub3XOrfnJhA%2BVhgeGWYzWP8eqoYxu0Nqqxssji5O%2Ff02UbCX2ypjxl1PfFQc9lIp98xYZ9BiuG3d1nCvUYjs%2F3pfdZ6FiwjkVnUoNz5EZwbc8pCst4Th%2F%2FYMDPatN2T8N%2B2gN3W13t&X-Amz-Signature=50f3ab47c601532e61c6cc82619ea3413d21de4e5461500445de44d19681952f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
