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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7QJS4EP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRQSQmqNjWRWCz%2Fr3959B542RJ3pV%2FpC4V5pVtfil6JAiEA%2Bi9ErD3KDJo7CIlGvajvup2ggysPCzAVNfTM1y%2FG6x0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM3erbXZrTmBfsQjaSrcAzgFN68WNEPrOk%2F8c7puPYS91GcanWItvxSm1mybYld9RLHNzkU5plSzxIgowNEIUfVvzp1FTciXO%2BFJw2eHDHfpsqa%2FjBF1AQUYNoqZMY6gF%2Fe%2FABsRfwc563L8TmDA2PtkX7wSpBrh3N7t2CPZHaCTCXqDIdHVD9fY7RIrBLlr27Ha06qNlV0lQ1KvEXxawZPhyWvQRXfyKnTRL4czCQ607iF4qmiL9jc7LDzQiTOUyhNtoV8wbjSCsFz73USram%2Ff7vHAL5EQFpaKYqTgLN08S34BIwuYYnpcdNKCOuBdftIZtVHtbJ5tV0TP0TWH%2FBb5LtkERVsfo4YOjR11szHNLJxLPKRttI3ktUCIE1sXi4HGSYpG24mXpOwFFeXqPE%2BKl88%2BWHiNnuoXSohHWZFohcq%2BcGjsPoU8O%2FJFutlPxqq41yn9%2B14ssvYk698p9NasWqbGHOxSwlT4xF5OdUXrUHMLRAlBLEbBgMEpeQPMGAjOPkDG7Di8czjJeNi0nvhnbSqL1ANL8qv4DdXgCY0Zy7vGwaNEP7ASH2aBIVYoUocTIjH%2FIJdqtCGVN98VI9x2qh%2Bn%2BuT5Dj2KdIUb%2BhkGJEjiGVFaUYrOE%2BPQsMhQkuYKDO5AJEMKJT4iMOOC9r8GOqUBJE5VYbfT9i9VF0E8p47gpRLz4cnAwW37Uuu1rMNXMgGn80JWstfXWIGI9PU0lWYz%2BD3kde4c0Hl%2BGdArgO7VRg%2B7%2Biz%2BE6Tctcjd3bWosrpnHw1j8JK7OzYseHcKX%2FORZZxJ3koi0TBG6CdPzxd22qYuqNo%2F9UmNwYjOiL0BJ%2FQla24cTY6GsOIax87EeIPBiy5BrJ6FTlyDm%2FpfuNgBTSGJakz0&X-Amz-Signature=0be9721f3eac8c1c9bf30a9311c473c61f780c1433b58bd4a2d88831661563c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7QJS4EP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRQSQmqNjWRWCz%2Fr3959B542RJ3pV%2FpC4V5pVtfil6JAiEA%2Bi9ErD3KDJo7CIlGvajvup2ggysPCzAVNfTM1y%2FG6x0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM3erbXZrTmBfsQjaSrcAzgFN68WNEPrOk%2F8c7puPYS91GcanWItvxSm1mybYld9RLHNzkU5plSzxIgowNEIUfVvzp1FTciXO%2BFJw2eHDHfpsqa%2FjBF1AQUYNoqZMY6gF%2Fe%2FABsRfwc563L8TmDA2PtkX7wSpBrh3N7t2CPZHaCTCXqDIdHVD9fY7RIrBLlr27Ha06qNlV0lQ1KvEXxawZPhyWvQRXfyKnTRL4czCQ607iF4qmiL9jc7LDzQiTOUyhNtoV8wbjSCsFz73USram%2Ff7vHAL5EQFpaKYqTgLN08S34BIwuYYnpcdNKCOuBdftIZtVHtbJ5tV0TP0TWH%2FBb5LtkERVsfo4YOjR11szHNLJxLPKRttI3ktUCIE1sXi4HGSYpG24mXpOwFFeXqPE%2BKl88%2BWHiNnuoXSohHWZFohcq%2BcGjsPoU8O%2FJFutlPxqq41yn9%2B14ssvYk698p9NasWqbGHOxSwlT4xF5OdUXrUHMLRAlBLEbBgMEpeQPMGAjOPkDG7Di8czjJeNi0nvhnbSqL1ANL8qv4DdXgCY0Zy7vGwaNEP7ASH2aBIVYoUocTIjH%2FIJdqtCGVN98VI9x2qh%2Bn%2BuT5Dj2KdIUb%2BhkGJEjiGVFaUYrOE%2BPQsMhQkuYKDO5AJEMKJT4iMOOC9r8GOqUBJE5VYbfT9i9VF0E8p47gpRLz4cnAwW37Uuu1rMNXMgGn80JWstfXWIGI9PU0lWYz%2BD3kde4c0Hl%2BGdArgO7VRg%2B7%2Biz%2BE6Tctcjd3bWosrpnHw1j8JK7OzYseHcKX%2FORZZxJ3koi0TBG6CdPzxd22qYuqNo%2F9UmNwYjOiL0BJ%2FQla24cTY6GsOIax87EeIPBiy5BrJ6FTlyDm%2FpfuNgBTSGJakz0&X-Amz-Signature=6f6d893e3e1435e4a5494680e823bfe64a2ab11c23a9a51705430cd187136575&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRDPBN4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUGbUYbU3R3AYt8k1b53FNmrYMJrNc7uDNlezNkSU%2F5AiBAeAKRcgZss1KxrDlLBzp6jM9Yd9%2BLskpBi4IXiGwe%2Byr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMu9kP9L7b0QhTW6BQKtwDmn2M4WwwdzzaZ%2FieBlUyjEBd%2FikYsD5fv2RnYPt0UdvWjOuMECV%2BevqblARzLTArzM8COaoFxcZZpuvHvoJlCZBlX6faIKAHViwuP%2FYE9b2FF%2BcUpog%2B29GxS228mDnBIdEo3KOOsgxLdYw79KO9F0oYZEAJZHjI3hk7zxnoo8tuj1xMDE7qIA3SRxFpm7jJ0QCd4qsQf3DxulVRMVGYMdwQPZu%2Bqhcd%2FIPxLjTJsVCj61Dk74PavtTvrzydNgVKPA8iLVliS0tQATH0UrpXP8LLUI27TvObneMAoRTrCbcZKkxcYpwP6KFj%2BIgBoIgH7IV1%2BsyUeFVX0cr%2BE2LwTNyZ5%2BpwYx08TG%2BM%2BSaWdBmAsIYFTydSyp8wI68tqjnyL6iE7tpqXxKPPbZKfsYG8ZQ6LUPwTS06%2BCZActDgcDYPh3jXuqzp1YrWvxYrc%2FZ82HTvViMb6tkkEYUExAYDTvpi00cB8Ocj7BiOWpDIAzTsHJgceM0G%2Bvv%2FIOzAXjH%2BZGsi%2BS4CXoUOUVEUEPDXNlBknuf1a57WiDR0MxWLyyesgahr3kaBm219GMQzV06T09wCtYRIk96sMur857r7%2Bc3WVTpvD92eExPzB7Tnl4YjV5rdzqSvChWmG8Uw0YL2vwY6pgE0psl8%2BM1O%2F3U2eJHoqEoq43d6u9Nh4SP1dObDjjfi1bJHaXI7lJDP747wwkV4T96Re0LljhodL%2BB3y5jXfMtyS2CcUrb0UDJy16DG4tLTbjeb3lfKmDXF%2FaMiW1qS3Y%2B4LrVhFEN3peEksXEantiGuROjmCKxrd81KvrmwdKrGV%2FISQiFTck4QZA9%2Fdo%2Bk5FZRP%2F0Ek6edM%2FrJ3EbCiij%2BjsZVUnN&X-Amz-Signature=d6f1520afc08b8b05e53db4c1985c1556a4c82827052e47d5aff13c0fd7b7f48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQQJGKK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2SU4D%2F%2B3L652nOJTk0nZ25QGwxBbYJVZDjpuMGVWKSAiEA%2FvdCKODvCR8aowpMx17kYioz24FR7cNOwhXoC8zXq5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIBBiMmMtzNS2MczKSrcAwGvVQPyEyxmqmeVpmXw0DKIGuRtiD%2BGKWo8pTCkxxXsWtMLV0iw3db3vGxajECLsBXNokFlVlhTNCW1F1V2dg14paarWG6%2F49lqCMwGdDJQaxRpFXl2X%2B9y%2BG%2BrLJl5j%2FJiReINgNy6x5h8ES5464epXRQP91PQtgbus2rkouDkZSMoFfyUqAQjzgrewJKUbR4F%2FekZiyXPFGDhUyXrkDsqxZlwBs4HIEir0YONYxprHmP5DrauPQTKiA03TT7PYElkZVxbld%2BwhdWDEkNIIPXEAZfyCPEO5Q2%2Fl6LnPXBHL%2FbrE6Zbjh%2F5r7jq7SleJYO3zi5p4dEg9Yi2QVYOwfCXktA7w5ZmlLqqpK1ywCuF1rwl2lFFMfKNBYb4d3K7Vxo4z29bwKC6i%2FsDdnX7fxpfNFbrBsEE6FZz%2FNUoLSQclcgr2DAQT%2BJt7OnzHkMLcXoUGn0u2djObjX5%2Fn01h2CCXRXu7aW1gek6m%2F%2BgURStghHA0sQsHUr5%2FLlDgiynM%2BOec3z%2BHKhcMV4lqoPknP9ATwKIgQTdRXly89emchUj7ovcnLrGkyygklIo8jXxzYp6RkjMJ4sUnw4nxMtUc2k6dGmUukrSK8YC3Qk5Q9Fux8yB05WKWzpErL%2FbMMeD9r8GOqUBRaSTVw5T%2BT%2FBN8aQ8vGmGtSrkWAFURCqoRlwIjPd%2FWF3CwpbTBPe2G%2Bx%2F9J50JVBlXkQsFo3A8omNPw7K3TGDqtV%2FmWGLLqp673%2F81zIsu7%2FuCs6FvNQw72Nm2DhAhu78vlzg4W9LFJzHVRlc7vWE8Mgd90gVzzgBnNXwGCa6dWxnmAWVq%2Fmf6d2ZExrsh3o8BU86lEb4R4yS5KK7%2Bg8QyCr6XBG&X-Amz-Signature=869112bb50a8511b2c39f13c0f3cfc314f8210b481eb5e1c76d2e69047a55d70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7QJS4EP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRQSQmqNjWRWCz%2Fr3959B542RJ3pV%2FpC4V5pVtfil6JAiEA%2Bi9ErD3KDJo7CIlGvajvup2ggysPCzAVNfTM1y%2FG6x0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM3erbXZrTmBfsQjaSrcAzgFN68WNEPrOk%2F8c7puPYS91GcanWItvxSm1mybYld9RLHNzkU5plSzxIgowNEIUfVvzp1FTciXO%2BFJw2eHDHfpsqa%2FjBF1AQUYNoqZMY6gF%2Fe%2FABsRfwc563L8TmDA2PtkX7wSpBrh3N7t2CPZHaCTCXqDIdHVD9fY7RIrBLlr27Ha06qNlV0lQ1KvEXxawZPhyWvQRXfyKnTRL4czCQ607iF4qmiL9jc7LDzQiTOUyhNtoV8wbjSCsFz73USram%2Ff7vHAL5EQFpaKYqTgLN08S34BIwuYYnpcdNKCOuBdftIZtVHtbJ5tV0TP0TWH%2FBb5LtkERVsfo4YOjR11szHNLJxLPKRttI3ktUCIE1sXi4HGSYpG24mXpOwFFeXqPE%2BKl88%2BWHiNnuoXSohHWZFohcq%2BcGjsPoU8O%2FJFutlPxqq41yn9%2B14ssvYk698p9NasWqbGHOxSwlT4xF5OdUXrUHMLRAlBLEbBgMEpeQPMGAjOPkDG7Di8czjJeNi0nvhnbSqL1ANL8qv4DdXgCY0Zy7vGwaNEP7ASH2aBIVYoUocTIjH%2FIJdqtCGVN98VI9x2qh%2Bn%2BuT5Dj2KdIUb%2BhkGJEjiGVFaUYrOE%2BPQsMhQkuYKDO5AJEMKJT4iMOOC9r8GOqUBJE5VYbfT9i9VF0E8p47gpRLz4cnAwW37Uuu1rMNXMgGn80JWstfXWIGI9PU0lWYz%2BD3kde4c0Hl%2BGdArgO7VRg%2B7%2Biz%2BE6Tctcjd3bWosrpnHw1j8JK7OzYseHcKX%2FORZZxJ3koi0TBG6CdPzxd22qYuqNo%2F9UmNwYjOiL0BJ%2FQla24cTY6GsOIax87EeIPBiy5BrJ6FTlyDm%2FpfuNgBTSGJakz0&X-Amz-Signature=a00a3840ce52004474c201aeeeca47b1e0d731513206d1a3460baa62b125a397&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
