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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5PXWNC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAeo42KlTl9coC5Pyc7u2nbFxnsKwxzr3BwP5Ej6%2BnrxAiEAqzhCRkxtESH89kfBCSSmI8%2FH1ttyG8UTxFRxrVpa3Z8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHGpoJNFGD1W8VpXpyrcAx3Q3mMwCoNWZ0ALnb3MDerF9VZRdRmE9Ar%2FMhOZekI3HSR190LzwIE5j1VwGUcVhT6Ti0ceKxZHQ%2Bimnb0zUIpmwNJDMlmjAjIfwCujrw1tnOjp5uXsngBsCMN9Ql33g5UODK5QxE%2BGWqXLfR6WSCYEvMl5mNk%2BzWm9sGPmUXeW3nuoEjdZxkH0meyu2%2BBbVsk8FJKsgaPeXfFAM9%2BUP3iL9Nid54qyPYQwc1QazWEyHeuOvhMEB%2FliZRxxMAXVzUiXB5gwabZl1Y8weU8HWHLYJvxedFztTHvJ0HZA94osh%2F9D%2FroR4z%2BWGiPJyi0j5B5RswJ9SwDi27c4xVcv3IruozEY6odQcsM9siU3gCo70eXknp1CCVYDT7uuMIEOoSVcVtZNABptZhhJCrNBVMKwLseeUUO7n0HSXnfvPtmGq8AsxFNBaOUhSMtuOzUBczZBCJGwAD%2BI5Mz9gReFwK%2FQp2Sh4XjuMNdJl5XC6NPADnUXAS9do4dM3rdlv%2FPMZ2LcHiqFhiyPOiLsl6Lr5OTx5iud%2Bbl%2BUKK3LvqNkRZM5cMCVbggPpI9Y6sTdmpV8HvHOabeMeGSmkV4Zku8%2BeH23nzYeysQmZBWlr0eI7Z9vo%2FpnGED2dPGVJnjMKiXscIGOqUBSv9oIWrEZjBR9u7XMi%2FsVfSJozYzoFTZLy23tZYgCB5TiogVjC3h9CHr0wPa0CxbnTLLFxGhXLGZGKDh7ieJPBvyGDthI1cMJIdhurdBe%2B0eYwn03QDgTmdTQ603YyxTracOo9heYarS%2B4X2FevsFvrOoOFdDfUFLCk4aeDimcR66hCSt%2BxlrGWnVKf43fBLD4olWCXgSUvRK3bWyQIcY1BsHGT5&X-Amz-Signature=89c77ee909cd47a66b363618e1f81b6ca9574c28d5f4d0f90f0aebc5ef99563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5PXWNC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAeo42KlTl9coC5Pyc7u2nbFxnsKwxzr3BwP5Ej6%2BnrxAiEAqzhCRkxtESH89kfBCSSmI8%2FH1ttyG8UTxFRxrVpa3Z8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHGpoJNFGD1W8VpXpyrcAx3Q3mMwCoNWZ0ALnb3MDerF9VZRdRmE9Ar%2FMhOZekI3HSR190LzwIE5j1VwGUcVhT6Ti0ceKxZHQ%2Bimnb0zUIpmwNJDMlmjAjIfwCujrw1tnOjp5uXsngBsCMN9Ql33g5UODK5QxE%2BGWqXLfR6WSCYEvMl5mNk%2BzWm9sGPmUXeW3nuoEjdZxkH0meyu2%2BBbVsk8FJKsgaPeXfFAM9%2BUP3iL9Nid54qyPYQwc1QazWEyHeuOvhMEB%2FliZRxxMAXVzUiXB5gwabZl1Y8weU8HWHLYJvxedFztTHvJ0HZA94osh%2F9D%2FroR4z%2BWGiPJyi0j5B5RswJ9SwDi27c4xVcv3IruozEY6odQcsM9siU3gCo70eXknp1CCVYDT7uuMIEOoSVcVtZNABptZhhJCrNBVMKwLseeUUO7n0HSXnfvPtmGq8AsxFNBaOUhSMtuOzUBczZBCJGwAD%2BI5Mz9gReFwK%2FQp2Sh4XjuMNdJl5XC6NPADnUXAS9do4dM3rdlv%2FPMZ2LcHiqFhiyPOiLsl6Lr5OTx5iud%2Bbl%2BUKK3LvqNkRZM5cMCVbggPpI9Y6sTdmpV8HvHOabeMeGSmkV4Zku8%2BeH23nzYeysQmZBWlr0eI7Z9vo%2FpnGED2dPGVJnjMKiXscIGOqUBSv9oIWrEZjBR9u7XMi%2FsVfSJozYzoFTZLy23tZYgCB5TiogVjC3h9CHr0wPa0CxbnTLLFxGhXLGZGKDh7ieJPBvyGDthI1cMJIdhurdBe%2B0eYwn03QDgTmdTQ603YyxTracOo9heYarS%2B4X2FevsFvrOoOFdDfUFLCk4aeDimcR66hCSt%2BxlrGWnVKf43fBLD4olWCXgSUvRK3bWyQIcY1BsHGT5&X-Amz-Signature=5abe20347112da86ab8b799de8b8fd3bee47c7c49b5b48fd1d7084e5803990f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5PXWNC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAeo42KlTl9coC5Pyc7u2nbFxnsKwxzr3BwP5Ej6%2BnrxAiEAqzhCRkxtESH89kfBCSSmI8%2FH1ttyG8UTxFRxrVpa3Z8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHGpoJNFGD1W8VpXpyrcAx3Q3mMwCoNWZ0ALnb3MDerF9VZRdRmE9Ar%2FMhOZekI3HSR190LzwIE5j1VwGUcVhT6Ti0ceKxZHQ%2Bimnb0zUIpmwNJDMlmjAjIfwCujrw1tnOjp5uXsngBsCMN9Ql33g5UODK5QxE%2BGWqXLfR6WSCYEvMl5mNk%2BzWm9sGPmUXeW3nuoEjdZxkH0meyu2%2BBbVsk8FJKsgaPeXfFAM9%2BUP3iL9Nid54qyPYQwc1QazWEyHeuOvhMEB%2FliZRxxMAXVzUiXB5gwabZl1Y8weU8HWHLYJvxedFztTHvJ0HZA94osh%2F9D%2FroR4z%2BWGiPJyi0j5B5RswJ9SwDi27c4xVcv3IruozEY6odQcsM9siU3gCo70eXknp1CCVYDT7uuMIEOoSVcVtZNABptZhhJCrNBVMKwLseeUUO7n0HSXnfvPtmGq8AsxFNBaOUhSMtuOzUBczZBCJGwAD%2BI5Mz9gReFwK%2FQp2Sh4XjuMNdJl5XC6NPADnUXAS9do4dM3rdlv%2FPMZ2LcHiqFhiyPOiLsl6Lr5OTx5iud%2Bbl%2BUKK3LvqNkRZM5cMCVbggPpI9Y6sTdmpV8HvHOabeMeGSmkV4Zku8%2BeH23nzYeysQmZBWlr0eI7Z9vo%2FpnGED2dPGVJnjMKiXscIGOqUBSv9oIWrEZjBR9u7XMi%2FsVfSJozYzoFTZLy23tZYgCB5TiogVjC3h9CHr0wPa0CxbnTLLFxGhXLGZGKDh7ieJPBvyGDthI1cMJIdhurdBe%2B0eYwn03QDgTmdTQ603YyxTracOo9heYarS%2B4X2FevsFvrOoOFdDfUFLCk4aeDimcR66hCSt%2BxlrGWnVKf43fBLD4olWCXgSUvRK3bWyQIcY1BsHGT5&X-Amz-Signature=be1b7b24f6199265a9df412e2e2a7e32294b8a2f5be9202dfdfa2f34342c5b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QGFBKW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDUnmUesGxe9MdrTsh98rDNA4oWTs6ZMzFoVmBUo%2FlW7QIhAO53jUc4iqCg9j3whOW6uQEeRGHwjKcx6SeCUjKEMGPyKv8DCBkQABoMNjM3NDIzMTgzODA1Igy4egDuUrZA40aGWloq3ANkMM37Q5uooWin%2BbIlJJAJSzsEO0bcsYscRsptYv5MB%2BWKG7vKU%2B7clisQGx5kLdLtSeIi%2FWvS5uycZbi%2Fcef0xPb87QULCONJ9fZoQVDVa8gkvfSWPRnRH1nzaGgX9lrfW4LXC3qwZaR0ob14qSx%2BeLzLacDBm0SDGXyk4sjh3GIWuU9rfeJYHh84uLl4ubZIkndwu7qoTunxYCP1tuc3wgGzY0uJLKeKzuFvLU24Vyo2EDGNghZ0PCY2aIDH8QOR7Li%2BFd6CQk2RhXes8sCmyW2NdaQof6C%2F9dZff5ee6nPcrclE2EbWwTd6hL2kN%2FmvCLu9wNkYIg9jhnz8FRSYoFCKOHOm7RumHaqogzxvfD4tEpdaSr0mw2TvG6TfGhiROuuXtBv18%2FRc4IOC3Dw1kZ8JxQxCRbtMb7jvqrX3YzYIoFjIxugtsKzNjbEueAfql9dNrg9jfgFv4S0iYrPsxFxaWVDMOMC2wgylZIehWzNo74%2FVzAxBVrdmA4lRiYvssGkTBzQoxUFzC%2FtrDrlG8s7uv0RON6SJCpMoVyVjnoDobbkHN0EadV%2BQuQvToXQfdunQJotrix6HWbf6e47qcMoE%2FfmLfe%2FzmWEY16qhqlOGc9OXzwRDqQPpSjDml7HCBjqkAflAcv1LhMPuEcYK9Nl3ulrdwolzama4qaUE8tvOerQqLw04eBCE8oORpT%2FofM%2BWi7aN3MKqmWTTPyup63KYXaACww879WIfvaEMN%2BYncocWIyTyyQbU2mfgjwEYHJ8FDhMrkyFxItSo%2Fi494aWK8pj5OQhyuw84irPEqhSZk5CngIG%2BpjOgPc3va19w4B5YgN78f3qywbDsowwpLNP2LRsLD0Ru&X-Amz-Signature=e71f6c579d6b741e6a7cec5146ffca55981915d2106988e68b1b658bfb9bb555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCXI2UM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEnwCrnDsAHwuB9p2WwI8UAfVMKsWevpYSNi9bqwB1%2BbAiB%2FD4FBlGyFIvFS4HtO8107wJvwLuXrtMlI4JwQatm%2BMSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMc0KWAd42GMhaeqraKtwDkl3EHPqLIUPoWgqF6YB28iJL8hTJ7P%2FgnOp2kxkbWC4%2FK4MSOMI%2B%2BgH3UXSceVy5wUvU9bMY7sq1Kik6S%2FYUACxXCgaU6ep71NOHJS9eWGMYt8TBdmeXr5mMwO%2F8ZMJ6nANOf%2BC3WJYkpLa0BQYLHwEUXH7ZPXNj16TQZX8kGG4QymzpcYs4pe9Bu5Bazjeo%2FNYX2EtQTtl1HUrC2EV37GtfM0brLimZXvkCfxpKbOEMbPp2YJDqrlK27i9S3yD3NALXr8Zkc7Kjdk1Zc5QkmU5ZpwvtcpxibGURibaQVuBHOdkRCahPb%2FgZg%2FLRe2wd3ZVOB3hPGFNUV%2BrE%2BIXZo4%2B69U8tLWgYxAcTn1KInlCPGD0hJR%2FKteCFWcC6TBKGagkrxSTX2WOuIf6P%2BX2VWm2ZsGwPqKBFX3mYiQimQYgcPgsjHnwbFea3VAFvLZTpcMKn76nVvtkO91w7It5P%2Bai9O1KEF%2BNuOa3UxMbdCu9oT4cNiX0XyXuIqmRVGYubnphaUEQSBJk0ShY1BmNXdcXVjrZ7FIFE2VVV%2FBsoxJ9qFsLyCGREP8uQWUxWLJ7G9Du5qvel0w6MjyJ9qsU93X7E1aLz8wnmu%2F4WpbnuXmt6EfWf5wV4EktN%2FLgw3ZaxwgY6pgFljnWEnR1MvlbCqPaOudjnza4xy7Sm9jncCh8PpRBEzBdl5md%2FxGOfts2mUDOD4uegn5HHD%2F1rby0XIpsMYNEqq0fK5diAcds7aTrFCRXHi5dO676SMl%2BmVL4NxgFsG0PyYi7j7HuV05N8LaT3UG4bfH1G0TF2P%2FnnrZ9lBXb67I40sGU7Axlp%2B%2B7Xd%2BT0BsXM7iUKXY48JCJuZcCu%2BcVfKJ9hpnGt&X-Amz-Signature=8d62ac843d0932bb21d477031e39b048a5f3ab5addea10323ab1596a0134b0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5PXWNC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAeo42KlTl9coC5Pyc7u2nbFxnsKwxzr3BwP5Ej6%2BnrxAiEAqzhCRkxtESH89kfBCSSmI8%2FH1ttyG8UTxFRxrVpa3Z8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHGpoJNFGD1W8VpXpyrcAx3Q3mMwCoNWZ0ALnb3MDerF9VZRdRmE9Ar%2FMhOZekI3HSR190LzwIE5j1VwGUcVhT6Ti0ceKxZHQ%2Bimnb0zUIpmwNJDMlmjAjIfwCujrw1tnOjp5uXsngBsCMN9Ql33g5UODK5QxE%2BGWqXLfR6WSCYEvMl5mNk%2BzWm9sGPmUXeW3nuoEjdZxkH0meyu2%2BBbVsk8FJKsgaPeXfFAM9%2BUP3iL9Nid54qyPYQwc1QazWEyHeuOvhMEB%2FliZRxxMAXVzUiXB5gwabZl1Y8weU8HWHLYJvxedFztTHvJ0HZA94osh%2F9D%2FroR4z%2BWGiPJyi0j5B5RswJ9SwDi27c4xVcv3IruozEY6odQcsM9siU3gCo70eXknp1CCVYDT7uuMIEOoSVcVtZNABptZhhJCrNBVMKwLseeUUO7n0HSXnfvPtmGq8AsxFNBaOUhSMtuOzUBczZBCJGwAD%2BI5Mz9gReFwK%2FQp2Sh4XjuMNdJl5XC6NPADnUXAS9do4dM3rdlv%2FPMZ2LcHiqFhiyPOiLsl6Lr5OTx5iud%2Bbl%2BUKK3LvqNkRZM5cMCVbggPpI9Y6sTdmpV8HvHOabeMeGSmkV4Zku8%2BeH23nzYeysQmZBWlr0eI7Z9vo%2FpnGED2dPGVJnjMKiXscIGOqUBSv9oIWrEZjBR9u7XMi%2FsVfSJozYzoFTZLy23tZYgCB5TiogVjC3h9CHr0wPa0CxbnTLLFxGhXLGZGKDh7ieJPBvyGDthI1cMJIdhurdBe%2B0eYwn03QDgTmdTQ603YyxTracOo9heYarS%2B4X2FevsFvrOoOFdDfUFLCk4aeDimcR66hCSt%2BxlrGWnVKf43fBLD4olWCXgSUvRK3bWyQIcY1BsHGT5&X-Amz-Signature=bedb13dc680d25ebc4fcd8582d05c91364d6434de217ad58b59d204b96e1a3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
