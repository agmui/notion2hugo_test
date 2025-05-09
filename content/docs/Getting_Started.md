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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSURZAST%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5oQotV5G5BfXF5djW%2FGHBRfM72ShnTf%2BXi%2BVXwwwdbAiAqzKhwmcd1sd0A%2F4N12Cl4MBQpzHa30GyumiGU0mXNmCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcsBCDOJkceYS9K3BKtwDZzV9V%2F%2BHi0Ct40QMkzmMM6lj1vIjPODEvO099DRYCG3kq8Dd9IGC7VbQqtkYYklNp5nTEzQCJyU2nmJrFyQX4nTtVhhS9KCcLJNBpoAiXp6%2FfxrMrmHza6cEpt7%2BCIoEqoQCeypK%2F46HKNV4fcgRVmsm%2Bp2T2G2GeJ0BJPQpBM38wwZlKPkgUMQO8i%2B6sdi76czh8GQfezZhjaAxftXtY1ruvDIdcSqxPuz2OcBSx93z%2BR6uSuhjNXOaFdte2faWZwWzXleYhXEWXPScnbLSUCqjr7MwG7R15iObLqjgRDQdiiLhbvQRPenyhFo%2Bilk8uYac64wE8BXJHHXtcEGe1EC3cANwSTCbOI6nUhTyue6S7coih92%2Fvf%2BVddVKGT2%2F6VdzlzszzSNanh19VWwZsbfKZylVpB2G7rqwuj8ffWQkifF3zOs6eznpfh0OUkUId3hPTs81%2FXzMdUEMPvzrVUbV%2B7UBwDm7GuY0qJdfx6GJOy5cqliRrMsvmIA8jlwm8Apee2y9gHBZylM%2BDH4pjq3ST4PGQ5OMBwYA1%2BE99%2BBSadG5%2BvKee85Kv4gbTd%2FljmJ%2B%2BfGOoAjRHBoMxPs2cSooeXroX1ZyvgCwuvHALCLu2mWMxsEaQGKhO0kwluT1wAY6pgHpHMqPwrknABApN1WWVBtfA8R6FcyA485fQQNcWKAgddco%2BaF4SLE3zvgleNM48fZ2s3n6z62TERXLWVSfnoIAJa%2BFWUSES45OOS8KtSsFIOH9KL3aXXoLtINUKh1wx%2B6YEWb3ep6%2FPitAFF%2FzcJIZY%2BeeU3D8WG2%2BMtgFa%2Fg%2FCetnL9VbLpqG%2BRxkPQMVIM9pfkGpWTtA3TDk7GcBK4kqfUBhD8ed&X-Amz-Signature=305ddcba9c486d8e7445540cf77abf6c0c2e9de1c8a425f3d908b9d1b987f687&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSURZAST%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5oQotV5G5BfXF5djW%2FGHBRfM72ShnTf%2BXi%2BVXwwwdbAiAqzKhwmcd1sd0A%2F4N12Cl4MBQpzHa30GyumiGU0mXNmCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcsBCDOJkceYS9K3BKtwDZzV9V%2F%2BHi0Ct40QMkzmMM6lj1vIjPODEvO099DRYCG3kq8Dd9IGC7VbQqtkYYklNp5nTEzQCJyU2nmJrFyQX4nTtVhhS9KCcLJNBpoAiXp6%2FfxrMrmHza6cEpt7%2BCIoEqoQCeypK%2F46HKNV4fcgRVmsm%2Bp2T2G2GeJ0BJPQpBM38wwZlKPkgUMQO8i%2B6sdi76czh8GQfezZhjaAxftXtY1ruvDIdcSqxPuz2OcBSx93z%2BR6uSuhjNXOaFdte2faWZwWzXleYhXEWXPScnbLSUCqjr7MwG7R15iObLqjgRDQdiiLhbvQRPenyhFo%2Bilk8uYac64wE8BXJHHXtcEGe1EC3cANwSTCbOI6nUhTyue6S7coih92%2Fvf%2BVddVKGT2%2F6VdzlzszzSNanh19VWwZsbfKZylVpB2G7rqwuj8ffWQkifF3zOs6eznpfh0OUkUId3hPTs81%2FXzMdUEMPvzrVUbV%2B7UBwDm7GuY0qJdfx6GJOy5cqliRrMsvmIA8jlwm8Apee2y9gHBZylM%2BDH4pjq3ST4PGQ5OMBwYA1%2BE99%2BBSadG5%2BvKee85Kv4gbTd%2FljmJ%2B%2BfGOoAjRHBoMxPs2cSooeXroX1ZyvgCwuvHALCLu2mWMxsEaQGKhO0kwluT1wAY6pgHpHMqPwrknABApN1WWVBtfA8R6FcyA485fQQNcWKAgddco%2BaF4SLE3zvgleNM48fZ2s3n6z62TERXLWVSfnoIAJa%2BFWUSES45OOS8KtSsFIOH9KL3aXXoLtINUKh1wx%2B6YEWb3ep6%2FPitAFF%2FzcJIZY%2BeeU3D8WG2%2BMtgFa%2Fg%2FCetnL9VbLpqG%2BRxkPQMVIM9pfkGpWTtA3TDk7GcBK4kqfUBhD8ed&X-Amz-Signature=5213411bdffe64cc56b00a2a0fdbba8501b19c93bc79fbe2ee3159ccdcb1e663&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSURZAST%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5oQotV5G5BfXF5djW%2FGHBRfM72ShnTf%2BXi%2BVXwwwdbAiAqzKhwmcd1sd0A%2F4N12Cl4MBQpzHa30GyumiGU0mXNmCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcsBCDOJkceYS9K3BKtwDZzV9V%2F%2BHi0Ct40QMkzmMM6lj1vIjPODEvO099DRYCG3kq8Dd9IGC7VbQqtkYYklNp5nTEzQCJyU2nmJrFyQX4nTtVhhS9KCcLJNBpoAiXp6%2FfxrMrmHza6cEpt7%2BCIoEqoQCeypK%2F46HKNV4fcgRVmsm%2Bp2T2G2GeJ0BJPQpBM38wwZlKPkgUMQO8i%2B6sdi76czh8GQfezZhjaAxftXtY1ruvDIdcSqxPuz2OcBSx93z%2BR6uSuhjNXOaFdte2faWZwWzXleYhXEWXPScnbLSUCqjr7MwG7R15iObLqjgRDQdiiLhbvQRPenyhFo%2Bilk8uYac64wE8BXJHHXtcEGe1EC3cANwSTCbOI6nUhTyue6S7coih92%2Fvf%2BVddVKGT2%2F6VdzlzszzSNanh19VWwZsbfKZylVpB2G7rqwuj8ffWQkifF3zOs6eznpfh0OUkUId3hPTs81%2FXzMdUEMPvzrVUbV%2B7UBwDm7GuY0qJdfx6GJOy5cqliRrMsvmIA8jlwm8Apee2y9gHBZylM%2BDH4pjq3ST4PGQ5OMBwYA1%2BE99%2BBSadG5%2BvKee85Kv4gbTd%2FljmJ%2B%2BfGOoAjRHBoMxPs2cSooeXroX1ZyvgCwuvHALCLu2mWMxsEaQGKhO0kwluT1wAY6pgHpHMqPwrknABApN1WWVBtfA8R6FcyA485fQQNcWKAgddco%2BaF4SLE3zvgleNM48fZ2s3n6z62TERXLWVSfnoIAJa%2BFWUSES45OOS8KtSsFIOH9KL3aXXoLtINUKh1wx%2B6YEWb3ep6%2FPitAFF%2FzcJIZY%2BeeU3D8WG2%2BMtgFa%2Fg%2FCetnL9VbLpqG%2BRxkPQMVIM9pfkGpWTtA3TDk7GcBK4kqfUBhD8ed&X-Amz-Signature=e3a61dc792df6cc96d6444d22db3fdcfdffe16baefbc0510d23d328622df564e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKI7Q3H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYSdzkzmbE9vEkl5ekKyyxszFJr1H57B3nBXnbz%2BHpFAiEAzV4iCoknQCbEQfmM8QhoapVR1kUJDfAa8cbuYTJ6TZMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQ3%2BPWGwfRgjI0tlircA%2Fzy%2BwexKOvC%2BxNCGEL3baGPrs0baOWD2ORnk%2F6ZveLToAI87iac%2B0hw1Q6NE7NC1lk5IMLMhcdCuCA7voitL3q%2F6g%2BGBb5VI72WU3OiZSHPQiCIZH9dIFpk0%2F1sgZC7HlJ5R1vPQ1K7b4ZsT3gYJB67DKFcWsG63%2BLx0j6agE9WQmEGFC2kf4xeNPuBZ5P1eWu%2BNGRZ4xc0envdJhb6tyl%2BDvaJtHB5UCNcCTvAL%2FOQppDEp8pP4bUv7QRyzWm8M14U6rou9O%2FqW6Ik73WbssMDRf%2BmyS8nlvuqYsxKyyLdcGzhAiRTBqAOaGJjRLRNDbh8WU7EfRGBMVT2f2LD30Wzj76RwD1Fu5U9x9U2KqXg80Gox3PT7Df40ZsljyW3KqgQNvy9SNRROaD%2FUC8%2BeFg8aT2i8OkIIslVC0Pxb2VmHSmjSH1qefwxgUXVAo9qXRxix2CyNZ6Oav2kHnLPjJmsMWDb6TmmlcLfWkkxhllkoDGX17959IvlzeMpAtwR9rGVEOQISSooSzgbXeqQu%2BmjJZ5hARrSJcUXHiCaXcYfbynnXTrjhuFfZiXN52gQVJQxz3nM7qVCW%2FLTT%2FwF7YMtm%2BlfNyygFGsVFjQfS9RGfaVc5GIARSUuNKOvMPLk9cAGOqUBqmuggGlNVpGsToLyOljhcjYCGFnkYxbShxi3WDZDpdFNOfu8BuHL7msc3IBbXiTVUDKPG5uv9IYipmAHZX2A9iPWXlADbcFcXvFNzL81dk%2B2a8Y7JijWKYyYHIYY2jnnFmELjBEQxHbsjyurgDuZJ%2BTMv%2BDAfoekplj8E8yP7yMY6x%2Byzsb2jR%2FCL4TBooQUsn8J7nbVIy0ifE%2FUY3YmAnh5%2FWFH&X-Amz-Signature=a808b572de6e58a84a4d50e364fd8b8366032b64601bf982fb365e5ea2ea153f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6ZZU6G%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSOu%2FRIyogRX%2FAr6vwYBgxRqeCridCCz68zGyf444ZBAiEA14fwyUox7QqpQ2hKPHdv3TPZceqiWWow0lVznfbrayEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg8mH8oQ7bAQkTgqSrcA5UdrUJiYQ2ciMw%2BiWgSzvOaHutvtmcONoiq0NfxsHcushwkDM6Cbf3u6bByGKfgRbBX3BEeUhcVYiraQdu8tu7IyFFwY%2FxYdDvXwJf3rhPIOMCIfAIXg8msu2eLYFiT116VuWQvhUeHqS3NhkDPMRv7gbnAUaR5fcdESSi6ZkZUdDnxRAE5QKqg5cUtvOPGRnUqMZUSYixMw7aC87K%2BXcwpSyQae44lheztOTTZQVOAgt9ybAAoq%2BGZwUGYm%2FGsRA%2BmnauIBpHDKfcYxTrrRbSi7uhNNTVR7SteJ7xZMH0luQakLD%2FhTSlyWTFXSGRFsqRnfcQ57o3224sXXIz3oxVnYHyp%2F0cYaoLP8GOK7C64YZZOSoPbLSKy2I%2FKaJx%2FfKK3THoBrrc%2BW18Ov%2F%2B52o6Nw%2F06aQeUFkQBT%2Bae2kKcYMcuhR92aM5eOlCge%2Fuo4v9bf7PgrhZGjNFTM2xtoa%2B2tPh6zQ1HXCsuIdFvCuuOtbCXYtMliKP2MwseRE520tRfCQHdx4kGeBzCHbKSNvWeQdtdFyyRmiNBIxTRQ2lKDsnIIw0ccc7UDgeOl4VL6nQxbghjOhC184lBpFpQP7zL31vjScpALpN%2FLMyNnDm%2FzUjVkERau%2FDSMjKQMInk9cAGOqUBgH33mj3rSzw8U4AHND%2BmrFD5VUfqR9u6gkFVbsYgdSMODocWItnp8JcSwaVQFDZvPAejkIkIDouc%2BOOhpDaxihm9ybxnhtybZf3Xc4hfLbudSM%2FM6dneKUEIGdk%2BytznntNH7%2FtrAyp2d8MjkoSrk4GhjoagxRotjB66rgmCp8cd9p3BipOVlgYNlqmPC8J49hJgahhvoC%2BrFLcidViuW9WtigGY&X-Amz-Signature=f70dd29b5b8c9fce61beb175ac107a02ce31157db123ff7f6a092332df3d5c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSURZAST%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5oQotV5G5BfXF5djW%2FGHBRfM72ShnTf%2BXi%2BVXwwwdbAiAqzKhwmcd1sd0A%2F4N12Cl4MBQpzHa30GyumiGU0mXNmCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcsBCDOJkceYS9K3BKtwDZzV9V%2F%2BHi0Ct40QMkzmMM6lj1vIjPODEvO099DRYCG3kq8Dd9IGC7VbQqtkYYklNp5nTEzQCJyU2nmJrFyQX4nTtVhhS9KCcLJNBpoAiXp6%2FfxrMrmHza6cEpt7%2BCIoEqoQCeypK%2F46HKNV4fcgRVmsm%2Bp2T2G2GeJ0BJPQpBM38wwZlKPkgUMQO8i%2B6sdi76czh8GQfezZhjaAxftXtY1ruvDIdcSqxPuz2OcBSx93z%2BR6uSuhjNXOaFdte2faWZwWzXleYhXEWXPScnbLSUCqjr7MwG7R15iObLqjgRDQdiiLhbvQRPenyhFo%2Bilk8uYac64wE8BXJHHXtcEGe1EC3cANwSTCbOI6nUhTyue6S7coih92%2Fvf%2BVddVKGT2%2F6VdzlzszzSNanh19VWwZsbfKZylVpB2G7rqwuj8ffWQkifF3zOs6eznpfh0OUkUId3hPTs81%2FXzMdUEMPvzrVUbV%2B7UBwDm7GuY0qJdfx6GJOy5cqliRrMsvmIA8jlwm8Apee2y9gHBZylM%2BDH4pjq3ST4PGQ5OMBwYA1%2BE99%2BBSadG5%2BvKee85Kv4gbTd%2FljmJ%2B%2BfGOoAjRHBoMxPs2cSooeXroX1ZyvgCwuvHALCLu2mWMxsEaQGKhO0kwluT1wAY6pgHpHMqPwrknABApN1WWVBtfA8R6FcyA485fQQNcWKAgddco%2BaF4SLE3zvgleNM48fZ2s3n6z62TERXLWVSfnoIAJa%2BFWUSES45OOS8KtSsFIOH9KL3aXXoLtINUKh1wx%2B6YEWb3ep6%2FPitAFF%2FzcJIZY%2BeeU3D8WG2%2BMtgFa%2Fg%2FCetnL9VbLpqG%2BRxkPQMVIM9pfkGpWTtA3TDk7GcBK4kqfUBhD8ed&X-Amz-Signature=9c987f6ec3a637ff590bcbfdd5ff2618801e94c57b12bdb3158c487f5d95f160&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
