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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZQAQ5I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOAAnw1lf4miBNFqpT34HLMKI9QZwRqrdRP3SHP5kNEgIhAO4si%2BN%2Fwse5%2FfEZ7LvPMpO8l02W38Th0fqzNak%2F924OKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKMaVNncl%2Bmkt9N0Aq3APsgWnB4a8ntrVH6%2FYkDtfoVCXA%2FLBCMGChfn0jISWg9GF5sKt8coClMPd2zWkKBsmaMrGmDcMS%2FzGTjdMzNmKRWB85Q10MyVcBBBrvh3BOxprjAkIEgIJGDS54sAz1aFVqJBc3R6UNyxAHbMpHN3IRlDaDkWF3Vf%2BiUk9ipCjJ8f9A5GhF3ani81Wz6dqcNJv%2FW%2FQpyQegYl%2BEYALybeAfgUjl8BHG30gHAsBr%2BrtudNf5KONXsqubRNLlt6cN4skqNRYb53IOEXT9OvMc9%2BxWvzOOie25ROh8yYagAyGWFwJA8ovNwpDX71z5bKrziCbHR4oATM8uMpmbPOXm1PayLd%2BGMY1J0uTol2ggWpOPOjAljRuxuYqZ4aMhSkkR74O%2BQa3okZW%2FeBN%2FWxA%2B9%2FLpWxjpljHvokCpfMoEznqU1vwsI44dwrjPi2cJTDjvdq8YK6NiBBjy054iamJXRx1xOd%2BUM2bdw4qdJwjGwwCVGc0Nr0fzZ149K7HBFMU4W65%2F8%2BTRG5ipMZX%2F5u3l1sjX6E%2B1jNGgY%2BNE5GZ49Bsuh5NcNP4EJxLPTAKBr5cKm3Aec7fv4F44UxnkpOO0wxuVTHQyIPl2rXkFiDUWPrDE7tKzui0HxHwQ3egwBjDRjra9BjqkAS7Cwzy1v3Ebu07goFU4W1XNU%2BoF2S2cw%2BogSvQGzoXmAwyxigqn2H4MsUar9jwN47sbcIuzgePEgV1nFSSRK4Cpiv3sQNhIY8p%2FgFyeV945Qvo%2FvcUh4VxLJ59V37nhOhAcZ%2FuaPz3iwzoBIhoEzPWkDt%2BgnsTFqyd5OXkXsGsfoY3PKNV6pUO4pC4wroBrbJUejOV%2B8TE4RNBpBGvVfdd8QKnR&X-Amz-Signature=9df9d9a32d5486221e8fc4cd35b5d67e07d8f3ee78a098b49fc46213cc645af3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZQAQ5I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOAAnw1lf4miBNFqpT34HLMKI9QZwRqrdRP3SHP5kNEgIhAO4si%2BN%2Fwse5%2FfEZ7LvPMpO8l02W38Th0fqzNak%2F924OKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKMaVNncl%2Bmkt9N0Aq3APsgWnB4a8ntrVH6%2FYkDtfoVCXA%2FLBCMGChfn0jISWg9GF5sKt8coClMPd2zWkKBsmaMrGmDcMS%2FzGTjdMzNmKRWB85Q10MyVcBBBrvh3BOxprjAkIEgIJGDS54sAz1aFVqJBc3R6UNyxAHbMpHN3IRlDaDkWF3Vf%2BiUk9ipCjJ8f9A5GhF3ani81Wz6dqcNJv%2FW%2FQpyQegYl%2BEYALybeAfgUjl8BHG30gHAsBr%2BrtudNf5KONXsqubRNLlt6cN4skqNRYb53IOEXT9OvMc9%2BxWvzOOie25ROh8yYagAyGWFwJA8ovNwpDX71z5bKrziCbHR4oATM8uMpmbPOXm1PayLd%2BGMY1J0uTol2ggWpOPOjAljRuxuYqZ4aMhSkkR74O%2BQa3okZW%2FeBN%2FWxA%2B9%2FLpWxjpljHvokCpfMoEznqU1vwsI44dwrjPi2cJTDjvdq8YK6NiBBjy054iamJXRx1xOd%2BUM2bdw4qdJwjGwwCVGc0Nr0fzZ149K7HBFMU4W65%2F8%2BTRG5ipMZX%2F5u3l1sjX6E%2B1jNGgY%2BNE5GZ49Bsuh5NcNP4EJxLPTAKBr5cKm3Aec7fv4F44UxnkpOO0wxuVTHQyIPl2rXkFiDUWPrDE7tKzui0HxHwQ3egwBjDRjra9BjqkAS7Cwzy1v3Ebu07goFU4W1XNU%2BoF2S2cw%2BogSvQGzoXmAwyxigqn2H4MsUar9jwN47sbcIuzgePEgV1nFSSRK4Cpiv3sQNhIY8p%2FgFyeV945Qvo%2FvcUh4VxLJ59V37nhOhAcZ%2FuaPz3iwzoBIhoEzPWkDt%2BgnsTFqyd5OXkXsGsfoY3PKNV6pUO4pC4wroBrbJUejOV%2B8TE4RNBpBGvVfdd8QKnR&X-Amz-Signature=9f50f8080ab1687a55ed57869e8cffb5cc67edd7101d5ee24289a8189114efe6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q44IG7O%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnhqw3Xcx9loVsmcbPkxgE4Wi2covFbDLPDnTkKSp4wIgKTXZWFf63hX4xtaVOqqSEMeYAYJpOfUhq04oCNWSiPYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBKcRDoqJd9JAyebSrcA5yir3R%2BVBjIvMLbEVc3wP5hwLJutPmwSSquP1D6qlgxVQnTdxhHBZxg5vpv1VXwMgOzjNEJBmq%2Fi1F9CT6hKg%2FGEoVUhIoVTJH63j6mao25PL5X2ENIl%2FDUkPo5ZgHSbAoK5TXJTydpWHviJSRfyO2criQOVD4rWsuBy5ysQ9jKfk3rxmNzJZfrYo%2Bk1jY%2F7SnnvKEJBPl89sphH6iibQ0H6%2Fgz9hXTfjg1vrKkLj4pz8Lr2K4AtFH5wiOSp8qYZeeubXEx%2FJVdQr%2BGREXTnIbIrmX5SXMKmJzX%2F0DRtmPnpqTtUG8djN7%2BRmg0fw8FiDRWkktMJsLea5rFn1OBZSzgI4FqFPn26IfvfyoYcE%2F9F6BuXkaB2qGPW9t%2Byq2B6jnwW54b4muw4Q4gLBVVXW5lBlwGKACc16F6a3l5NlYnanISlq3R8rf%2B9EbFOT%2FJrPYzItdYnHmx5tyvlfErTZkLn5EYUCtbDiene5INUAe5PhKpkU%2FaqHlQ3Ey%2F08vcvEhrwtILCRiq7TZwwzzx4VtjRNAq%2F%2FvEsApLqE8MVd4uA6cnQFByGahR5Ft79LqBA4WB4AOAmNbbfFlp%2BKxhCkinjpsuyenHFPj2QP%2Bm0LNOOsKZoMsYj1c3ub2hMJ%2BQtr0GOqUBJMzznsuK2KvLMQZ3gPnXdssKMuZ0fj2ramS5HQ%2Fo3sjnWSjlvAAfZ1Dv4f7icmtc1PGl7vajnXJlNKVFs3YeBx%2FO29dTA82grVaiKcui%2F3YqbkX90bv5cfzdMZrHnyUZKrbRQB0%2B0XjwDDGk1LK03TOtU1Xj5hnJTMB90gib6LTTyEn2CDrZj8eWbvwOS%2FoEtnfvFSF1tcI5wvz4MudFfWCe9FdD&X-Amz-Signature=2b9d1e9b4f7592adb6733479170484e6a04e6ade9845a3664d01a84393b2bb61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZVZJ2H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAupgLQj%2FHNL11E%2BmXA%2FI8pVF0Vj9QZRuCYdx3ELeO0qAiBtStJZ5ZV%2F53wxnqscMUD95YRBy8vtBBE54m9I7OP2NSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdQ%2B3j%2FyQQQMM1JdKtwDSNtrQhpgOAB0hfbU1js2j400F7G69f07w2fgrR36KAog6FAGfqFhGqEPTtEgyHO7ZgkALSD8cqWDvzodhbqFI%2B%2FO88nPrqqEJId2BYhkssj5u2Pc%2FAdy7XYC09YSqutSgvqh8UienH5JrBF9fwTV6%2Bl1SjckBYIOjoj4e9nWCIJGU92dpnmuSBAhyWxrj1R6mxanjLV1rj%2F1jtPrgC0mUlDqg9wOD3ffViYK8vUm3eCc5d%2FSuUgnGWz9w0lw6IzzXxF7rtkm5SPrw8AqkdxmlVjcFIOU4tVY2RvHuowyf66PP85sHK88w42%2FZu4KkggfNLs4YXvVjbVRdqE3VKnshrLLtpokPwEtv%2FChHwJ8lrB2fYgHPlq3yxfq916ZuudaCJQXJUaZ%2B6aws7Iiiihg4cGW%2BGml1lc29I92kLgBwOWSgGljzXlttaoinVm2LtsnvjxlFH6YeRW1urnvcfDjaeGiu2eNMH5dPzuiA%2FpqJjIwdMukTLfiKzzlkK1S5DjdezLI7gG9pvkU3Y0EphxGuql5d%2FgqsFjjplTaBahUW2Y4VOsTVYqi0uDbM8wiL9ScLCbJhDsMY2LBmMCRSDefXFBfmx4O9v9wPf2nubsnRM18gvZd8KgxssGbdmAwiY%2B2vQY6pgFSBTLoMfiwoTiPGbCVvK5xWHbdXRBTEt00MT%2Fxmd70aU%2BC7y0LcMWYEu7ndscLJ5yNZHDQRxKJC9KUqjalxu%2Faec3J4ug0X6II%2BB2a0Ydr0m0Tt5bj%2FJcDepGDiSSa2QoqO%2BdsnSk4P%2BQH4Jv54Yejsfs5oEMDUIbkqJBNGo3kU6sSBdEAr3f9DwZetWf4jb2mdApVt5ybnmL6QrHz0IN%2Br9H3BxJa&X-Amz-Signature=e0add09ee79a8e62bb1bfb9d8acdfcfb2737f8020fcc7a81775ea5ff48b426e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZQAQ5I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOAAnw1lf4miBNFqpT34HLMKI9QZwRqrdRP3SHP5kNEgIhAO4si%2BN%2Fwse5%2FfEZ7LvPMpO8l02W38Th0fqzNak%2F924OKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKMaVNncl%2Bmkt9N0Aq3APsgWnB4a8ntrVH6%2FYkDtfoVCXA%2FLBCMGChfn0jISWg9GF5sKt8coClMPd2zWkKBsmaMrGmDcMS%2FzGTjdMzNmKRWB85Q10MyVcBBBrvh3BOxprjAkIEgIJGDS54sAz1aFVqJBc3R6UNyxAHbMpHN3IRlDaDkWF3Vf%2BiUk9ipCjJ8f9A5GhF3ani81Wz6dqcNJv%2FW%2FQpyQegYl%2BEYALybeAfgUjl8BHG30gHAsBr%2BrtudNf5KONXsqubRNLlt6cN4skqNRYb53IOEXT9OvMc9%2BxWvzOOie25ROh8yYagAyGWFwJA8ovNwpDX71z5bKrziCbHR4oATM8uMpmbPOXm1PayLd%2BGMY1J0uTol2ggWpOPOjAljRuxuYqZ4aMhSkkR74O%2BQa3okZW%2FeBN%2FWxA%2B9%2FLpWxjpljHvokCpfMoEznqU1vwsI44dwrjPi2cJTDjvdq8YK6NiBBjy054iamJXRx1xOd%2BUM2bdw4qdJwjGwwCVGc0Nr0fzZ149K7HBFMU4W65%2F8%2BTRG5ipMZX%2F5u3l1sjX6E%2B1jNGgY%2BNE5GZ49Bsuh5NcNP4EJxLPTAKBr5cKm3Aec7fv4F44UxnkpOO0wxuVTHQyIPl2rXkFiDUWPrDE7tKzui0HxHwQ3egwBjDRjra9BjqkAS7Cwzy1v3Ebu07goFU4W1XNU%2BoF2S2cw%2BogSvQGzoXmAwyxigqn2H4MsUar9jwN47sbcIuzgePEgV1nFSSRK4Cpiv3sQNhIY8p%2FgFyeV945Qvo%2FvcUh4VxLJ59V37nhOhAcZ%2FuaPz3iwzoBIhoEzPWkDt%2BgnsTFqyd5OXkXsGsfoY3PKNV6pUO4pC4wroBrbJUejOV%2B8TE4RNBpBGvVfdd8QKnR&X-Amz-Signature=abe54f6bba2f4f96e0123f576608bfa198620c5226543b774267c777e31e924c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
