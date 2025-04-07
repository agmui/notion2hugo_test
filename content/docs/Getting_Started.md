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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSLJOAB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAb65kAEJG5s1msshYbHHYU21WeiGIawH1daI%2BJCpLcwIhAPghWcBUsbdVFfCdTMifMMRf%2BG%2FzPfjscle7g3qV%2B8lgKv8DCFoQABoMNjM3NDIzMTgzODA1IgzNxiT1E%2FqhTPq%2BcaQq3APoP25uXzsfo3CfI7hyW1XVn%2Fn0kqkYeaDg85M3gDeX%2FuXeaUq12bMIV4n%2FBW%2BDCKRj0TC8Iip0mbEvTpojSikrkFT%2FxdouJTUBgsx%2FMVRnH24mG%2FeZCt%2FzPgVqlgeBz2XMHtt%2FZr0ESbzjAQ%2FKElRDWBBmzNice8UZhOn7YvZaKK5cTDGCiw5APRBNTxc3hiQAPzyBFRDSpdIuM%2FVqV9iw%2FNUEcNoABteNufTaWDV6yX2Xho%2FBE3qN%2FsIi08Xjrw9%2FSRikqga%2Fc6ve4a%2BGSgfIPp%2BzxQRPHvN0VtMy3pYslT0pkaKTy6INxRxNIeM8O%2F%2FftQ93A32IKxQCBEgQ5W1FBxopeIe%2BLsAPuDorvhind%2FZxUJMO4%2FM2mVbacTPVHQr33sMaiKLM8rH9V%2Feopmu556WnLerbZ3%2BvNnzfTb6YbGmc%2F%2BSqr1g%2FaJbJM21j0tJEwUc0LNwk8d6vi%2BDvPbOySD16UmEQH39IphJdOhKzESx7%2Fzppel63quCZs0rYp%2BnmnAM%2F%2FgllpvhqUiBltzlAeRNHmzXCBhATWxclD66%2FEHcEgj0bwh6zXV8VRySQZ%2BR2YGsKHldu3DIdPArH97gk1X1XEM1%2BtjejlS3UJz76yonr18g%2Bw9jQZlR3hTDpoM6%2FBjqkASaKcx4u0uyBnzfjueTVdnK0YtS%2FbbdNobPXm9HeUBae1LclnycD8TXjQWrYw0qo6Zx1JhuXpPnqLNQAzyH4pe4TNkRtoGHBwdzKDOG%2BU8BsdlKloMpLjezU%2BTG5UpGQrUeJkbg9XanoEUmCDLI2nWHu7LbtqJsYFCr9dUuUVQ4TyvPKyDHl5EnLYBPD%2Bgck9AzCvTjX9AfSTtepOBt0qFa8Ie%2Fz&X-Amz-Signature=378f15d361895fe8466f61fb868d363abe3f8a41ec82b3bd788ae151d4c4e027&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSLJOAB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAb65kAEJG5s1msshYbHHYU21WeiGIawH1daI%2BJCpLcwIhAPghWcBUsbdVFfCdTMifMMRf%2BG%2FzPfjscle7g3qV%2B8lgKv8DCFoQABoMNjM3NDIzMTgzODA1IgzNxiT1E%2FqhTPq%2BcaQq3APoP25uXzsfo3CfI7hyW1XVn%2Fn0kqkYeaDg85M3gDeX%2FuXeaUq12bMIV4n%2FBW%2BDCKRj0TC8Iip0mbEvTpojSikrkFT%2FxdouJTUBgsx%2FMVRnH24mG%2FeZCt%2FzPgVqlgeBz2XMHtt%2FZr0ESbzjAQ%2FKElRDWBBmzNice8UZhOn7YvZaKK5cTDGCiw5APRBNTxc3hiQAPzyBFRDSpdIuM%2FVqV9iw%2FNUEcNoABteNufTaWDV6yX2Xho%2FBE3qN%2FsIi08Xjrw9%2FSRikqga%2Fc6ve4a%2BGSgfIPp%2BzxQRPHvN0VtMy3pYslT0pkaKTy6INxRxNIeM8O%2F%2FftQ93A32IKxQCBEgQ5W1FBxopeIe%2BLsAPuDorvhind%2FZxUJMO4%2FM2mVbacTPVHQr33sMaiKLM8rH9V%2Feopmu556WnLerbZ3%2BvNnzfTb6YbGmc%2F%2BSqr1g%2FaJbJM21j0tJEwUc0LNwk8d6vi%2BDvPbOySD16UmEQH39IphJdOhKzESx7%2Fzppel63quCZs0rYp%2BnmnAM%2F%2FgllpvhqUiBltzlAeRNHmzXCBhATWxclD66%2FEHcEgj0bwh6zXV8VRySQZ%2BR2YGsKHldu3DIdPArH97gk1X1XEM1%2BtjejlS3UJz76yonr18g%2Bw9jQZlR3hTDpoM6%2FBjqkASaKcx4u0uyBnzfjueTVdnK0YtS%2FbbdNobPXm9HeUBae1LclnycD8TXjQWrYw0qo6Zx1JhuXpPnqLNQAzyH4pe4TNkRtoGHBwdzKDOG%2BU8BsdlKloMpLjezU%2BTG5UpGQrUeJkbg9XanoEUmCDLI2nWHu7LbtqJsYFCr9dUuUVQ4TyvPKyDHl5EnLYBPD%2Bgck9AzCvTjX9AfSTtepOBt0qFa8Ie%2Fz&X-Amz-Signature=817c8a7de8dfccfb538136f6ecf673878ee6030ee9caa2641b58da7bc50d7c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEP76IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3dzLvflaZYTmWedX7wUjZ8uDVOUMtcH23C2R74dL73AiBbT8AtkQs%2BZOq0nJSyaMmiXNsZtQ3nRGlkKlelLVf1FSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM6CpI4yGFdWpuL%2Fp%2BKtwDukrKv9zDndvEEoX8tEUmoIVNesWdAhR0XDuwzaiwxJAdCUA%2BMnkbHAkfLfRjNEW2Gi%2B3wqpiAl1Y1%2BHTHwf%2FQixZXTBxQ9IWdZgr1o9xMs0TSLoo5pB%2BmETmF088X3H5Tv2fN6KiQ4zohHX%2BmX7C9qz%2BRNjJcNSw3yRydI%2FBPi2uOMqvjUcWwjvNX60bo9nmwtm9Qn3vUst5woRc7mDpA5SxHQ77wgOOM19iT%2FnIB%2BbnVywmRbMUlV0mOYn%2FxB%2FTh5J%2FCtpxKyuv%2FYdG1vm2qiFi2L8VjbZuSVmS35ReAPC287HAHDPdmgxAhSVbZp4XKUoIhzla8twM9thC5NWlY0QpD8c%2FnYIFPZd0X7oo6ncZKUCkd3qJ57m7g2OW0Pj%2B2scQnMDDOMxmrzSKHfIGgliKmxOtIG744Q%2FI8fgPEktlrtSa0DY7nbNE%2B8JlkEQPtnL43rAw1sE6%2FNOYAoLZ8khOd0TF9Th6B8F0MF%2BHVnhhX5oywn2o3BSOh9WDM2dTn2WiHuB63aUs6cuLzBxugz1S7KzQVxaMwmEHnBNjxImgp%2BAHl9TrQisAJlhzE1kgvdgE1M8OvzOAMqQcvPEcnCfh6ZkNiO7fZqDZyeVl7aZMcglN0WUhEixQ%2BJ0w%2BaHOvwY6pgGLi64UQLHDlerCSie3zGjquaLSQXU1ql7W9fWuGnErS1e7mi3f42Q0LaPd9EvZs0mKt2etNwaNjdnKUpfgOuP9%2F48eQBGZhJgCeYn9Qqa6a0z4oa%2F99zeG4%2Bx%2BD9TTjnrN2iFPSy0YZ42zhDUrGfrL7FQihwasRySOybRSCT1y8njlmEZrO5VoqHzy1VR7hF43VYZvtrZIXBa8oz56g0gMUl%2FAO8qy&X-Amz-Signature=e0765adb271a212638e75bd0cbd64216f19f0a17f7e7d7ccdb0791e141a3b3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKW44NM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB14BaBLQ%2F2kdMSN1YObdv%2BccLTyBFxQaAEWg7eGiV4mAiA1urbc0XtJ%2FTP8NgBNgYYDuJOsTUm9pLrclxOKdIcaMir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWdTM2Xr7HZMN%2BDmqKtwDUx3TnmNvCzCxzeanR5sq%2B%2FGqtjGc17Qvq3aF0chdZvLDI6azbAM4gMRPf76bSn%2FSpc6m1TioYE3N9npLFfI9NzBXPYgoCQYwh%2Bpsu1Fa4%2BqwLVpB1Fe4ta3ezh2gh6XU5NY3A9lGg96vWk%2BaQreE5LUglwq%2BceFld7FV7vDB%2FNH1e3dCgRje2DRVrnWWu8toL1Y337kqWGKBeuiH0tkBMCB429STnAPCpizmHrMGCYfgntAKpq2Q7W2rGXiPbks9HA30KkFz9ZMOunxv%2Bw882Ss15kl3Ng63yhLu9iDAnPZ2RRVtvq9fvlOmL68VFAPacPhWRXt%2FylluQzNB9X3OiY%2FKjGuJiP4vKmLAGBoBX%2F3Dk3X5FQknxxcJ5UT64ulxNDkDyS5MOJWXRzcgh0wgRjP7Jv6Q3IM6nF3oTw%2FDU3Qlt8q2z7orSlWLf7sZPx7tRrOXsg45Ih6fT5KJ7%2B1UL%2BLEbAP14mHPa7VoMSOVtkfuxoxXBqp2mQ6P7MrGvpfUHhyaKwWKLUCqBRuEX3YHaGphBNVTEVLkLWYnUL3nS55WzP8lOXM4gqTJnGaGqC8VjNvMpvWF08IXfd%2BINY9Ziu%2FZukySQ1%2Baar1iGAZnHBCKi1itrTjmwTiBLVgwgqHOvwY6pgGQQMExh1cP4WYa6sIjkSG63tZVu0xEi1np8mLduO92jEaM7rfHgCR0jz1InoEz1mB2x%2BvgEJPnjU4Ms4ZLGPXmj3YgRlLmYdHbDKX8cFsXnizakgH7NZtUhksYpoMdyYEontIa2hyE1Y0EzJJ59yso9ahmI4XijoW8GJeJ7tjcDzBgs0Wde53Z%2F6NqKBWouixI18uEBVQT9ZIS63bhU2NT6hYXLHCD&X-Amz-Signature=1764586683b160128ac39a67522c2bad89aba38c180004d0acbcaf65ec95d902&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSLJOAB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAb65kAEJG5s1msshYbHHYU21WeiGIawH1daI%2BJCpLcwIhAPghWcBUsbdVFfCdTMifMMRf%2BG%2FzPfjscle7g3qV%2B8lgKv8DCFoQABoMNjM3NDIzMTgzODA1IgzNxiT1E%2FqhTPq%2BcaQq3APoP25uXzsfo3CfI7hyW1XVn%2Fn0kqkYeaDg85M3gDeX%2FuXeaUq12bMIV4n%2FBW%2BDCKRj0TC8Iip0mbEvTpojSikrkFT%2FxdouJTUBgsx%2FMVRnH24mG%2FeZCt%2FzPgVqlgeBz2XMHtt%2FZr0ESbzjAQ%2FKElRDWBBmzNice8UZhOn7YvZaKK5cTDGCiw5APRBNTxc3hiQAPzyBFRDSpdIuM%2FVqV9iw%2FNUEcNoABteNufTaWDV6yX2Xho%2FBE3qN%2FsIi08Xjrw9%2FSRikqga%2Fc6ve4a%2BGSgfIPp%2BzxQRPHvN0VtMy3pYslT0pkaKTy6INxRxNIeM8O%2F%2FftQ93A32IKxQCBEgQ5W1FBxopeIe%2BLsAPuDorvhind%2FZxUJMO4%2FM2mVbacTPVHQr33sMaiKLM8rH9V%2Feopmu556WnLerbZ3%2BvNnzfTb6YbGmc%2F%2BSqr1g%2FaJbJM21j0tJEwUc0LNwk8d6vi%2BDvPbOySD16UmEQH39IphJdOhKzESx7%2Fzppel63quCZs0rYp%2BnmnAM%2F%2FgllpvhqUiBltzlAeRNHmzXCBhATWxclD66%2FEHcEgj0bwh6zXV8VRySQZ%2BR2YGsKHldu3DIdPArH97gk1X1XEM1%2BtjejlS3UJz76yonr18g%2Bw9jQZlR3hTDpoM6%2FBjqkASaKcx4u0uyBnzfjueTVdnK0YtS%2FbbdNobPXm9HeUBae1LclnycD8TXjQWrYw0qo6Zx1JhuXpPnqLNQAzyH4pe4TNkRtoGHBwdzKDOG%2BU8BsdlKloMpLjezU%2BTG5UpGQrUeJkbg9XanoEUmCDLI2nWHu7LbtqJsYFCr9dUuUVQ4TyvPKyDHl5EnLYBPD%2Bgck9AzCvTjX9AfSTtepOBt0qFa8Ie%2Fz&X-Amz-Signature=f1fca209c44aa6a7644c2038c52fa20fe011e57c7d85d696ab44ee9f67841490&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
