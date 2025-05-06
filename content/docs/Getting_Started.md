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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHLQXJPW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKaczE6xfns62XFTziK%2BbzwMUURchc4YL7aMENYSiVCAiEAgOELs9wEFFTMO%2B6TABcxYz6fBsJ1siuICxbGixlkUNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIx%2F4rQ4JXx1PhhktyrcAysWrSkhOxIcyjcVHFBCtOCWxN5wa4y684r8z0k3sGmwckya3rNsnJNpyhbywctXsOG2zDPmDgV46VlNmHqJLm5gYbJMwyEaugpZiJBjrmZBNU7brXKnBzsGu9SUMwwAKPCLaWbHBbFnA8qsOQT8l3v%2BDZngQMujaN%2FHi3J2iFRyiitwlCFjC71oYdT4EtSk2PIegKHe2yw6F4ImeNwaqL9XK4%2FBdzezgHj3oXuEgAzZtBYFLcipHq59LOkTkq%2FoxNJlIAH5SJ1Sii2rMzej%2Bsy0YpfinHTdoTOw1QmKLfulXEBYzSeb1pIZckcpipCN5VJIZA1M35f9wIDA86WmSGlhhLdlNUqwltrb70g%2FZjQGChfS5Y5pdGAPcXDWjNvUcsXQkB%2BiInCnNfunC0PI%2FGBhV5agq2XWCy4zj7BNYoVmEgb4tQ%2FVsy17iR2IODy%2FB8%2BD9vQ3JJ0sl6H3tOFCdsIUUcYHstjsyNdZlwxZjOHZ5yBkWD1%2BNnJ089YPXvXHbAyXFRke0cDUBnOC1%2F%2BqhUNtO4Xr2%2BLlnYQ1R2RFWRTBqRn3q98AWKjOPGaGGwXGI8ISeRDjKTWsIikQYsYmi0MARMebC6Nkxb8FUbCy5YzXk6MJ0sI6%2FiBedcWVMJyW6sAGOqUBDIVe%2FXdpUe7%2B%2BumkgM1MCpA%2F177YKH52aeVCTxASksRyE9pf8OwlzqMex6VFPlgpy3JWAAT30xWSfNOdCQCCgxTfeGqwHaQ4AvlG3MOGqcVH8r8R6iSy%2Fd9Lo3We8u6KvkRDuSMem6JMvix30kF1Nwa9vSW4e9mEYpunITurieLJ5DdKYbAzz7zeroq78HSiU5xb9JRdrWzcWHmLxZiXTV%2F4Mb9D&X-Amz-Signature=9a0232c613a2e9e98c94878d3844bbbbdd149190dc38618d78bf2d60ea45126b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHLQXJPW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKaczE6xfns62XFTziK%2BbzwMUURchc4YL7aMENYSiVCAiEAgOELs9wEFFTMO%2B6TABcxYz6fBsJ1siuICxbGixlkUNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIx%2F4rQ4JXx1PhhktyrcAysWrSkhOxIcyjcVHFBCtOCWxN5wa4y684r8z0k3sGmwckya3rNsnJNpyhbywctXsOG2zDPmDgV46VlNmHqJLm5gYbJMwyEaugpZiJBjrmZBNU7brXKnBzsGu9SUMwwAKPCLaWbHBbFnA8qsOQT8l3v%2BDZngQMujaN%2FHi3J2iFRyiitwlCFjC71oYdT4EtSk2PIegKHe2yw6F4ImeNwaqL9XK4%2FBdzezgHj3oXuEgAzZtBYFLcipHq59LOkTkq%2FoxNJlIAH5SJ1Sii2rMzej%2Bsy0YpfinHTdoTOw1QmKLfulXEBYzSeb1pIZckcpipCN5VJIZA1M35f9wIDA86WmSGlhhLdlNUqwltrb70g%2FZjQGChfS5Y5pdGAPcXDWjNvUcsXQkB%2BiInCnNfunC0PI%2FGBhV5agq2XWCy4zj7BNYoVmEgb4tQ%2FVsy17iR2IODy%2FB8%2BD9vQ3JJ0sl6H3tOFCdsIUUcYHstjsyNdZlwxZjOHZ5yBkWD1%2BNnJ089YPXvXHbAyXFRke0cDUBnOC1%2F%2BqhUNtO4Xr2%2BLlnYQ1R2RFWRTBqRn3q98AWKjOPGaGGwXGI8ISeRDjKTWsIikQYsYmi0MARMebC6Nkxb8FUbCy5YzXk6MJ0sI6%2FiBedcWVMJyW6sAGOqUBDIVe%2FXdpUe7%2B%2BumkgM1MCpA%2F177YKH52aeVCTxASksRyE9pf8OwlzqMex6VFPlgpy3JWAAT30xWSfNOdCQCCgxTfeGqwHaQ4AvlG3MOGqcVH8r8R6iSy%2Fd9Lo3We8u6KvkRDuSMem6JMvix30kF1Nwa9vSW4e9mEYpunITurieLJ5DdKYbAzz7zeroq78HSiU5xb9JRdrWzcWHmLxZiXTV%2F4Mb9D&X-Amz-Signature=4df1d1fe5425f1156f83cf5df29327d205c961b11f4679decfc6176da99f7533&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHLQXJPW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKaczE6xfns62XFTziK%2BbzwMUURchc4YL7aMENYSiVCAiEAgOELs9wEFFTMO%2B6TABcxYz6fBsJ1siuICxbGixlkUNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIx%2F4rQ4JXx1PhhktyrcAysWrSkhOxIcyjcVHFBCtOCWxN5wa4y684r8z0k3sGmwckya3rNsnJNpyhbywctXsOG2zDPmDgV46VlNmHqJLm5gYbJMwyEaugpZiJBjrmZBNU7brXKnBzsGu9SUMwwAKPCLaWbHBbFnA8qsOQT8l3v%2BDZngQMujaN%2FHi3J2iFRyiitwlCFjC71oYdT4EtSk2PIegKHe2yw6F4ImeNwaqL9XK4%2FBdzezgHj3oXuEgAzZtBYFLcipHq59LOkTkq%2FoxNJlIAH5SJ1Sii2rMzej%2Bsy0YpfinHTdoTOw1QmKLfulXEBYzSeb1pIZckcpipCN5VJIZA1M35f9wIDA86WmSGlhhLdlNUqwltrb70g%2FZjQGChfS5Y5pdGAPcXDWjNvUcsXQkB%2BiInCnNfunC0PI%2FGBhV5agq2XWCy4zj7BNYoVmEgb4tQ%2FVsy17iR2IODy%2FB8%2BD9vQ3JJ0sl6H3tOFCdsIUUcYHstjsyNdZlwxZjOHZ5yBkWD1%2BNnJ089YPXvXHbAyXFRke0cDUBnOC1%2F%2BqhUNtO4Xr2%2BLlnYQ1R2RFWRTBqRn3q98AWKjOPGaGGwXGI8ISeRDjKTWsIikQYsYmi0MARMebC6Nkxb8FUbCy5YzXk6MJ0sI6%2FiBedcWVMJyW6sAGOqUBDIVe%2FXdpUe7%2B%2BumkgM1MCpA%2F177YKH52aeVCTxASksRyE9pf8OwlzqMex6VFPlgpy3JWAAT30xWSfNOdCQCCgxTfeGqwHaQ4AvlG3MOGqcVH8r8R6iSy%2Fd9Lo3We8u6KvkRDuSMem6JMvix30kF1Nwa9vSW4e9mEYpunITurieLJ5DdKYbAzz7zeroq78HSiU5xb9JRdrWzcWHmLxZiXTV%2F4Mb9D&X-Amz-Signature=c1c76cc2e742fd02e5e32c249e7245dfed097fe7ed15c7d82e78eacc7786f867&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBLMNFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHp3XGHGgJYZOylJrYL9rJH0P7H1q0fe%2BToDqNIMlFAiEAvGSfnnPk5gadO7%2FUgXQZNG1tonzZQur3N7fHG6K8Xzoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKN7U7ArZCXWop5yqCrcA%2FAj%2FwrZGS50jJ2R234WRngZL5VQ9hBe4Blsuw61Y7b%2BYN6f4I39JnQHnhyNCKnXkxSb8QiPZ4MJLbpBHJpTqc7HaslqEVlTUB27ino2hJU%2BGDWo%2FTPvmTYpv4A3NVdDLUul2dGwdcMAQd8XlZeKJrmgilUcFu7wnViDywpgiYxRXcSYbvLHjCo9Vg6IrddthF0R5exutpebI2CrYuCTnCVYUCHqF%2BfaFaeiQlI59gLdxyJz1CYupcGN%2Bk7rDeM94YEvBEQ6odF5aPWwh%2BrwejNM5cb04nL%2BxCD8Bk%2BIjRDFg5FTMz45aHokSC3FOcrhzjCCDKj2Udn3QTf8BOgvF0P7IdkXI%2BB2s14d%2F6UWzk75f1fKGnFGEdbKQ3UjZwjxsxIT%2BluUXT6M2MnsdrLZRGI19fJQUOMSinmg3RGUqxYesUPcLCQHT3CqLVvXBaK%2FEkHXawGhbaYtXlCpAWl2EuPJ1gyb2jp4ii6xgDJ7fom%2FJsMR81RvzVhyhzOZL2YQblMWhaZSZ4vzyYYKptZg%2FaTZYlcBRaiaMUUDlbtd2vgFmFXm%2FpMgw%2BzJmmukd9rsdi%2BM%2FNHlxRcCN1Nm%2B83OTVv6gvFeNCydFIFnHwKMT%2F2qK4rWUfc0XwxN0foRMK6W6sAGOqUBv95TU%2FSW8S%2FDZvuTqshIaOpUQf0Pzm%2BCaQptUJEUlSDwQ6jlS0%2BQMre5ImJJtOSDFQYQ9v4Yv2i%2FdzlGuanPJx2hZ9KdsTVyK8Rh%2B%2BivCMz6VMplKVOuEJRB1Ieg2fBb5AgVqGx8XDtCpH1bdg5RoJHi5Rf5YGzM0dHm1pLDB%2F8s29I6x8IGVQthlypXHHdA7PFWNYCOBuFOKcY1alNCVP66LuX3&X-Amz-Signature=4307689c818caa047fa44dd213b7e8a255757ec06976f6854954a1fca1d53276&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRACZ3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUIwRhRLLwf9rQEE2LdyFaBTPvCauSa95tBsubtBH7AIgS3W0J2Q%2BXF5zzWX%2BO7UnwvOb8ONzaWJSEdBAP3KGQbkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOaX4T9Pa2i1YlHIGyrcA6WD4GIhdMVMZ6SP8xeb%2FCU45OaW4c%2BoqrLumk79JMaeswKuSDtVOXpBvLCq9YL0vVP6UxzXUpMAYhUb%2FFnRIMJUORKrpSe3Vpn0rYmJeFN4uGtJYsimmY%2BZaTyiE79SmlE0P4VN90KYpkfJuoLAtQwbYNqMZKUsl9GqoxqPyk8nOUb3u7rPAfBPQGCzBHrHf8VJsSgvcgfuzqIKL%2BWKnUnhU2tDPScdv6lNdFephj2rrxNBwfxywGaalSmvofKpTIr7wrOZ4rOE9b%2BaCW0c9mUsMz17LYaoBdRiBGejj6kjgBXvlekZX746LVGBO26Z7V4swjeySnj2XnxyLg8tWzDwAEmlaN%2BBq9LTuUf%2B4GWThloSSg2l0TeYkXzNB%2FsJrUC85UbW8ufTIHNX0bWeqaiskTiM2CYA6At1fPoAsuzSm4WvbKAEZ9vjfYUwbrN3tIbskdiRpSYg%2BxyEDkOYsaw6Yk4zrcOGyXNbRcBjdNgHfbBl2zOGQ69Ks6gHsSy8Jb%2FiD5Obvafq4Igt4HLa8ucE8h4XKCgRPc7tVmEMsyGXDykiNJ2%2BV%2Bp6mxX4lR8wQdjrYfPpdjxytyJHOPnYBWQQ99Cbo4wCZG4HJf0rZqLyKNtZickEUy6gJcMuMPCV6sAGOqUBcPkKdccJOutzfMK6x3Ma5ZvrVHtvvPEnGQ5AblrJlCSxnre6dyyeMCZBwVyLQvtivLlv4k%2B6eFHm5iVt9t%2BcfKM%2BX56jJIVTTSzXOUSfgodYyXsRtKVMiL%2Fe0dgWLp3%2FwCkgfi%2BKsMv4hCr%2B2v2wdMZSnmDHqrFBjRs8wasB7P1u15aBecHgJRju1q%2FUSyYKZCeWgAMDGIZBq%2BjjaPE7gnlbNlOI&X-Amz-Signature=89bcd37a809a06c043b7469de84d946c8a7fcfc0b1f01d3120300fe3472aa308&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHLQXJPW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKaczE6xfns62XFTziK%2BbzwMUURchc4YL7aMENYSiVCAiEAgOELs9wEFFTMO%2B6TABcxYz6fBsJ1siuICxbGixlkUNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIx%2F4rQ4JXx1PhhktyrcAysWrSkhOxIcyjcVHFBCtOCWxN5wa4y684r8z0k3sGmwckya3rNsnJNpyhbywctXsOG2zDPmDgV46VlNmHqJLm5gYbJMwyEaugpZiJBjrmZBNU7brXKnBzsGu9SUMwwAKPCLaWbHBbFnA8qsOQT8l3v%2BDZngQMujaN%2FHi3J2iFRyiitwlCFjC71oYdT4EtSk2PIegKHe2yw6F4ImeNwaqL9XK4%2FBdzezgHj3oXuEgAzZtBYFLcipHq59LOkTkq%2FoxNJlIAH5SJ1Sii2rMzej%2Bsy0YpfinHTdoTOw1QmKLfulXEBYzSeb1pIZckcpipCN5VJIZA1M35f9wIDA86WmSGlhhLdlNUqwltrb70g%2FZjQGChfS5Y5pdGAPcXDWjNvUcsXQkB%2BiInCnNfunC0PI%2FGBhV5agq2XWCy4zj7BNYoVmEgb4tQ%2FVsy17iR2IODy%2FB8%2BD9vQ3JJ0sl6H3tOFCdsIUUcYHstjsyNdZlwxZjOHZ5yBkWD1%2BNnJ089YPXvXHbAyXFRke0cDUBnOC1%2F%2BqhUNtO4Xr2%2BLlnYQ1R2RFWRTBqRn3q98AWKjOPGaGGwXGI8ISeRDjKTWsIikQYsYmi0MARMebC6Nkxb8FUbCy5YzXk6MJ0sI6%2FiBedcWVMJyW6sAGOqUBDIVe%2FXdpUe7%2B%2BumkgM1MCpA%2F177YKH52aeVCTxASksRyE9pf8OwlzqMex6VFPlgpy3JWAAT30xWSfNOdCQCCgxTfeGqwHaQ4AvlG3MOGqcVH8r8R6iSy%2Fd9Lo3We8u6KvkRDuSMem6JMvix30kF1Nwa9vSW4e9mEYpunITurieLJ5DdKYbAzz7zeroq78HSiU5xb9JRdrWzcWHmLxZiXTV%2F4Mb9D&X-Amz-Signature=54bb2b21349f69414bdac0b17965b0247d41855067639af6dbff632ddfb65a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
