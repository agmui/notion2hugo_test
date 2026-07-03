---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH23L5FB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA%2FC%2BM7lQAkVaNM1wda%2BlfJbqVdFSEmtG%2FA9zsGGnhzoAiAO28uhXXPV%2Bj4B81IBHlIsQJ%2BLSgXeUuT6SM6CIRLkoSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMQSZdZ2KqEt5N%2Bi9vKtwDCdDcaodWAMtZ6B%2F%2FUV7AwgSy296PEGftfjw%2BaSEubJ6ChH69eK0JyEhpZE8MlAhv7Q4C%2F226E3qFg5a74FOLqy24kwaAfk%2BKgCBVV%2BZZC3cb7aExVXN1j4OKV7oUA79Aj65tWxqvKK4s4CJxOQmdlF94iPeNnmwQAqAgjAKQW3eByj7ZOJz5woD4a9kkuLsA54A7H%2Bxsf8R3D6eYHeqe4ef3xDM7GiWfBXgoCdzDSZmy67rR2xtzVekD13BEKpEENg24AsntzvFf9m5zcjzf3%2FxilQyGH6EedGv7w6BWUVO5PLblmUH0AAOTFztP7xv84GCt5dX%2BHauJzvsAJm1lB6Qi7tlGfqVX58E8%2FVraPkgARpDWg%2Fojgwc%2BFplWezfOm2rPAd5FcjGW%2Bl4%2FR0JiMoOmgthgs2NidvsHhGJjdzzVFQwRRXaGP2BWXXCHz6aBo6PyCwpvJi83wVI2KR%2FPXLUACCQaFW3V6WiBJE%2FX7vEwTYlrVMrxpCwduZybT24IAdCq%2FPQjJyXu9g8cjRLvjckayQjDcNry3CiVL%2BK6ZyyaurOLSoM8KHnoIg%2FpTlQNskbDC67Z4t9IJqs3yzUftEzEUDb16hwnJXffmYDTW17JgSAi5N4DPJQlYsAwtLyc0gY6pgG9Pqx6%2FpiZ7da4fpVTOg%2FQlfpRUuyf2pEZBaSaqYdfL1P48YB%2BHve3vP08HqFpBXMJg4PaPspwyeXssK%2BQPeFZquWm1U19g1AqL1H4qbRLEmrWVs0TDyieBA5UxkFxS7w%2FXjX4Pi3ClHSFHf33PWjtGXwTDQ6RGyVJQ3UcZYDKZ2TR8jky%2BqnpJ7CnhfOLKIcB3qjd55HZH3unhAUXTF5qgEfZkvMv&X-Amz-Signature=b369d202a4b77414b39e375f829d321a83efc8e79fc7e42ee7e759db25f8060c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH23L5FB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA%2FC%2BM7lQAkVaNM1wda%2BlfJbqVdFSEmtG%2FA9zsGGnhzoAiAO28uhXXPV%2Bj4B81IBHlIsQJ%2BLSgXeUuT6SM6CIRLkoSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMQSZdZ2KqEt5N%2Bi9vKtwDCdDcaodWAMtZ6B%2F%2FUV7AwgSy296PEGftfjw%2BaSEubJ6ChH69eK0JyEhpZE8MlAhv7Q4C%2F226E3qFg5a74FOLqy24kwaAfk%2BKgCBVV%2BZZC3cb7aExVXN1j4OKV7oUA79Aj65tWxqvKK4s4CJxOQmdlF94iPeNnmwQAqAgjAKQW3eByj7ZOJz5woD4a9kkuLsA54A7H%2Bxsf8R3D6eYHeqe4ef3xDM7GiWfBXgoCdzDSZmy67rR2xtzVekD13BEKpEENg24AsntzvFf9m5zcjzf3%2FxilQyGH6EedGv7w6BWUVO5PLblmUH0AAOTFztP7xv84GCt5dX%2BHauJzvsAJm1lB6Qi7tlGfqVX58E8%2FVraPkgARpDWg%2Fojgwc%2BFplWezfOm2rPAd5FcjGW%2Bl4%2FR0JiMoOmgthgs2NidvsHhGJjdzzVFQwRRXaGP2BWXXCHz6aBo6PyCwpvJi83wVI2KR%2FPXLUACCQaFW3V6WiBJE%2FX7vEwTYlrVMrxpCwduZybT24IAdCq%2FPQjJyXu9g8cjRLvjckayQjDcNry3CiVL%2BK6ZyyaurOLSoM8KHnoIg%2FpTlQNskbDC67Z4t9IJqs3yzUftEzEUDb16hwnJXffmYDTW17JgSAi5N4DPJQlYsAwtLyc0gY6pgG9Pqx6%2FpiZ7da4fpVTOg%2FQlfpRUuyf2pEZBaSaqYdfL1P48YB%2BHve3vP08HqFpBXMJg4PaPspwyeXssK%2BQPeFZquWm1U19g1AqL1H4qbRLEmrWVs0TDyieBA5UxkFxS7w%2FXjX4Pi3ClHSFHf33PWjtGXwTDQ6RGyVJQ3UcZYDKZ2TR8jky%2BqnpJ7CnhfOLKIcB3qjd55HZH3unhAUXTF5qgEfZkvMv&X-Amz-Signature=e5c8ed21125fbce2d9ab071e2e706797ceb4d82807f5632c9cbad53590302bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH23L5FB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA%2FC%2BM7lQAkVaNM1wda%2BlfJbqVdFSEmtG%2FA9zsGGnhzoAiAO28uhXXPV%2Bj4B81IBHlIsQJ%2BLSgXeUuT6SM6CIRLkoSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMQSZdZ2KqEt5N%2Bi9vKtwDCdDcaodWAMtZ6B%2F%2FUV7AwgSy296PEGftfjw%2BaSEubJ6ChH69eK0JyEhpZE8MlAhv7Q4C%2F226E3qFg5a74FOLqy24kwaAfk%2BKgCBVV%2BZZC3cb7aExVXN1j4OKV7oUA79Aj65tWxqvKK4s4CJxOQmdlF94iPeNnmwQAqAgjAKQW3eByj7ZOJz5woD4a9kkuLsA54A7H%2Bxsf8R3D6eYHeqe4ef3xDM7GiWfBXgoCdzDSZmy67rR2xtzVekD13BEKpEENg24AsntzvFf9m5zcjzf3%2FxilQyGH6EedGv7w6BWUVO5PLblmUH0AAOTFztP7xv84GCt5dX%2BHauJzvsAJm1lB6Qi7tlGfqVX58E8%2FVraPkgARpDWg%2Fojgwc%2BFplWezfOm2rPAd5FcjGW%2Bl4%2FR0JiMoOmgthgs2NidvsHhGJjdzzVFQwRRXaGP2BWXXCHz6aBo6PyCwpvJi83wVI2KR%2FPXLUACCQaFW3V6WiBJE%2FX7vEwTYlrVMrxpCwduZybT24IAdCq%2FPQjJyXu9g8cjRLvjckayQjDcNry3CiVL%2BK6ZyyaurOLSoM8KHnoIg%2FpTlQNskbDC67Z4t9IJqs3yzUftEzEUDb16hwnJXffmYDTW17JgSAi5N4DPJQlYsAwtLyc0gY6pgG9Pqx6%2FpiZ7da4fpVTOg%2FQlfpRUuyf2pEZBaSaqYdfL1P48YB%2BHve3vP08HqFpBXMJg4PaPspwyeXssK%2BQPeFZquWm1U19g1AqL1H4qbRLEmrWVs0TDyieBA5UxkFxS7w%2FXjX4Pi3ClHSFHf33PWjtGXwTDQ6RGyVJQ3UcZYDKZ2TR8jky%2BqnpJ7CnhfOLKIcB3qjd55HZH3unhAUXTF5qgEfZkvMv&X-Amz-Signature=5b1e304c4df62cb88f4eb15b01b2b9c3805ce25830002abce3c307f20e870901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBSBZFL%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIAT8B67X9H5HnrWUbIBnlQTAz9vb2JN3gj4RPTz7uJRrAiEAgE%2BXcx59RqsvZimHR63v5UQK4ev9a%2FyeIjLxm2tEY9Mq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDN5w6CPRJGKPM4Z37ircAwoPPFsbKaVrV4G7JLDZsZdTzsmGE4WFX%2FlYg%2BNI4iRZtb7lbORj6RnMwrXZkl2wYVRwVLGqJFNva5S8PfHx6l503GttQVMaAwy4IOqeeSZrUMpmEGgprcwkOEfAWC5BBLtmjYCAxMkU8%2FOwNXPrhGFws0yUB%2Fa%2FhHgoA7GxeybQOWSd2Pq%2F5YQPvrdUwUANhMueLX6%2FnnmVPo95HFXpP3f80noO4f02svxcbUbkWFmnMleNYer4Dz9m75qXUAirixpLKw%2BLvXW7Hl%2FNkq207I5V%2FRqNCnnfgveKE0WLeeh1FQJhJmuPB0RjrUUWxCSAb3TkRRf%2FdJ8839PfK0PClGz1L6TADtyoT1C8eCIMy4Xbssk7jyv9ZJCi5OqgNC5WfG0cYL7ofnD3xWfCULveq%2B5E8AfqQFklcDgJ9%2FQnAZRk9e6z%2FUrNIUG5EJ1FYP0N9f%2BwcoomRt2S%2BW4td9dmWU1VLe2ARJ4C9wDLoe4C9lDn%2Flus540O3Wjr57aBNid0iBYZbMY36LzfbuIgl1Ig74w%2FmPWBh6iTO1X9dkoqdVvRWxyFf8sBNf%2FKbCWjnr89D594XL69%2FlB5XBLqH0FtECMatlYKSUSI39ep0ZHiiXIiE2Zpyje8gj5qLRa%2BMI27nNIGOqUB46FMkfuX6UOWdclZIMRBAT3uGUJTJAMp46u3dPtEOJP1pfX6FVCzIJE5P4IhAc0BlixUnW3l7ErNfo7zikcPnP54sbyNq8stVJq%2B3kXJjstIErmwXVe3lt70WCK21UbK88AOc%2BkV1AxV0ZkruJLxohakmlXj5eTnJzeBrbKS5W3TPCQ%2FR%2Fy%2FLoE0pvAP%2F%2FWpHOjvlb3A0y4bw3aRR2X0AvvAWWzD&X-Amz-Signature=3369ba23bef1daf7213665df8cbffee5d2f87dd835def6b15226a00d5dd2d03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNRCDHH%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCKAYatDy1V9MkWF1Jr%2F75DTGFiUdX8Fk%2B0jMHHyL8nJgIgJOzwf5CBthteuFKHT8YYvtZQaw3D6navlQFN2jMQvkIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNaBm4DYLmBJQ6%2BJwyrcAzzvl%2BxQjTSwHckY4cgUe2sg38uPSycbbAozMrAmmUxJx89QiGqLSLcCd4r%2B7qshHrtJkn5YNtlv3O5eOZ%2FQBcZv5Qp9r2J4dqDMI%2BTDnWcgCWXrdlAYYzTSz1yaLgpQ1uo5WVCiMb789RGp4%2BTOJxo9MJ2Pm5nTggSCXo5MSrxqm7v2kn1Y%2FLQegd9%2BwoKZYUuG2J3ADOOSHpGLtJThFTGq5jXManp%2BgRdSeOZ4acVmK17EMsgtRFyj60YUtVU1LzOHSMt%2Bwdn%2BtlTpyVFePvwug3JU11CMWxFPgpwD4D8vRe%2Fimj7ti2IYtdx0Eyi4iFe1xThmkv%2B3Ytd27aBo51WS49dBg0gg9d98vHphNm8kDcbYT53yXszRFcGeoKgFM%2FSZN4goO%2BIFHmS6xa9Om%2B8SZATbG1kR4VOKnWF%2Fo%2B2DDCJtFPHvZNnuBH8AY59ZZYEWyF8CFoEwALZH4DQ%2FuaUxMCyvDfoY2jrGV4uu8mFKchierbWu3Sli7LH8zd42HY9zLLRdOy7AcoamrrtuKPB05Oc%2Bvnx0LRhDi35xnuwdwQf0tjoTt7G2h8Akmv9KdvsFDbmj5PNRaALOcaQNqvlEhXGy1Ay1yC1BEFVI%2Bz8tQcFUPOs8lGl7KVNKMJG5nNIGOqUB9qjcyvFhZ7vhnKVxjy%2F9rud4EeBAkeaw03uCpDM04RDqaRtfp0OisK7XMOnxwzInARRDtjF0oQK133IK4yIJNMfb9Rv5HPHdzInPF%2FTxlgFWfuV7K9Er200PUqnKrHyBeOI2RVyjaO80NGxxc%2BjkbS%2BJIpKL5WWcm5MuuxA1vKm8ErEAd4b5%2BUQmOhTtMkLzATpCNyR5iJskWTM1fSgM4lSE60jF&X-Amz-Signature=23d3cda0a496e394ecaa3cd9c92bdc71879d1b7f2beb00e0c33dbe742b882add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH23L5FB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA%2FC%2BM7lQAkVaNM1wda%2BlfJbqVdFSEmtG%2FA9zsGGnhzoAiAO28uhXXPV%2Bj4B81IBHlIsQJ%2BLSgXeUuT6SM6CIRLkoSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMQSZdZ2KqEt5N%2Bi9vKtwDCdDcaodWAMtZ6B%2F%2FUV7AwgSy296PEGftfjw%2BaSEubJ6ChH69eK0JyEhpZE8MlAhv7Q4C%2F226E3qFg5a74FOLqy24kwaAfk%2BKgCBVV%2BZZC3cb7aExVXN1j4OKV7oUA79Aj65tWxqvKK4s4CJxOQmdlF94iPeNnmwQAqAgjAKQW3eByj7ZOJz5woD4a9kkuLsA54A7H%2Bxsf8R3D6eYHeqe4ef3xDM7GiWfBXgoCdzDSZmy67rR2xtzVekD13BEKpEENg24AsntzvFf9m5zcjzf3%2FxilQyGH6EedGv7w6BWUVO5PLblmUH0AAOTFztP7xv84GCt5dX%2BHauJzvsAJm1lB6Qi7tlGfqVX58E8%2FVraPkgARpDWg%2Fojgwc%2BFplWezfOm2rPAd5FcjGW%2Bl4%2FR0JiMoOmgthgs2NidvsHhGJjdzzVFQwRRXaGP2BWXXCHz6aBo6PyCwpvJi83wVI2KR%2FPXLUACCQaFW3V6WiBJE%2FX7vEwTYlrVMrxpCwduZybT24IAdCq%2FPQjJyXu9g8cjRLvjckayQjDcNry3CiVL%2BK6ZyyaurOLSoM8KHnoIg%2FpTlQNskbDC67Z4t9IJqs3yzUftEzEUDb16hwnJXffmYDTW17JgSAi5N4DPJQlYsAwtLyc0gY6pgG9Pqx6%2FpiZ7da4fpVTOg%2FQlfpRUuyf2pEZBaSaqYdfL1P48YB%2BHve3vP08HqFpBXMJg4PaPspwyeXssK%2BQPeFZquWm1U19g1AqL1H4qbRLEmrWVs0TDyieBA5UxkFxS7w%2FXjX4Pi3ClHSFHf33PWjtGXwTDQ6RGyVJQ3UcZYDKZ2TR8jky%2BqnpJ7CnhfOLKIcB3qjd55HZH3unhAUXTF5qgEfZkvMv&X-Amz-Signature=4b16ee8b754e35a674f42203776a58a322908fe73f958dcb451a36d6fcea39a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
