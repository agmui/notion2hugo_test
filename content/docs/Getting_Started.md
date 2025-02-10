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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGXNNQN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI97QxZcpKcDh%2BKn%2FhK7PsdGvBXDMe0SG3iPbFiWoEoAiEAyySfwxlVJDsu6U6hhU75oc41r%2FJ3zzsyaDXQkFYLYHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7yT0dVtKlfU0VYQircA%2BL82V5tPLdfvOThTHlMkqRy43FMptLa291dt4PeOz6xxNcb8W17uz4BO1VfS8Rq4IfKTrHGFtW2ZBKmmMz8keZWeQVMv5yRuu191K6JLJW58BwPwKD6rkCpUkZ6b06f5%2Bo%2BGL9Gnjww%2FKtIIcoslVWz9zwGNWX0bsx8iI5FbcjWgcl0F8Wdb1yOEICOzMnzwzvii9n%2FH9thVhMYAYprJr4%2FUJodstDNdBwamsDgUTTISpnjlbqqNFmoFbWjCGitwZwFarWCx5XE2C4KDV4QfDL%2FH1wEAvZ1d1GbEx1FdpSeFZ%2B9ruTk5W0AbcjB1P%2FRlmj553BfHY3uJwoiYdD%2BZJWy1avdVFFcoIdRltx4r1kDq5WPyuZOjPIag%2FXs7plEeD%2BRf75Sj3OInd8WT8ST%2FU10jQpED09zJg8mOk0vfs6vh%2BWkEGZuUJRWNUpo16cbHwhrZBBHVX%2BwJlsUD%2BdNWoU%2BGC%2FCMntSqfsKeBm3NKWnRGgJDSVV0ReOGgVdJ6ccwkQNVlWdZz7Jd9d%2F5zSVdId5D4OZI83RT8pOj5KngkzW24bNIK3m%2BofHB%2ByQwKoW1jh5eT91Ze65kaYQz2tSk525ABsrXGVYajCkmrWsMYJIZJ0diefZwRvI9318MIqup70GOqUB7ETWSqiqFYuLj1rMcOTJBm3TfiY6l4LUbJ30nvD%2B1W8SIVI3q%2F0anQw%2FPLgC%2F2FivxGxuTkPRaInUaChOObK7DfdwJV%2Fw824sCgBF0MiVvLWVl6Db0aKclqn1wkxXo7PVkzUT%2Bn8hVAQws5SjUbC6y82uuKca3LfqfjsXAMp5q82KsfvwZLNCTRwSkTpC3gIxowF%2Bizki96OkjJJb661YGjuMBUy&X-Amz-Signature=ba87a68da3dc4d4d62746a5ab27ae1c50115ae88ec957349efa673422af163cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGXNNQN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI97QxZcpKcDh%2BKn%2FhK7PsdGvBXDMe0SG3iPbFiWoEoAiEAyySfwxlVJDsu6U6hhU75oc41r%2FJ3zzsyaDXQkFYLYHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7yT0dVtKlfU0VYQircA%2BL82V5tPLdfvOThTHlMkqRy43FMptLa291dt4PeOz6xxNcb8W17uz4BO1VfS8Rq4IfKTrHGFtW2ZBKmmMz8keZWeQVMv5yRuu191K6JLJW58BwPwKD6rkCpUkZ6b06f5%2Bo%2BGL9Gnjww%2FKtIIcoslVWz9zwGNWX0bsx8iI5FbcjWgcl0F8Wdb1yOEICOzMnzwzvii9n%2FH9thVhMYAYprJr4%2FUJodstDNdBwamsDgUTTISpnjlbqqNFmoFbWjCGitwZwFarWCx5XE2C4KDV4QfDL%2FH1wEAvZ1d1GbEx1FdpSeFZ%2B9ruTk5W0AbcjB1P%2FRlmj553BfHY3uJwoiYdD%2BZJWy1avdVFFcoIdRltx4r1kDq5WPyuZOjPIag%2FXs7plEeD%2BRf75Sj3OInd8WT8ST%2FU10jQpED09zJg8mOk0vfs6vh%2BWkEGZuUJRWNUpo16cbHwhrZBBHVX%2BwJlsUD%2BdNWoU%2BGC%2FCMntSqfsKeBm3NKWnRGgJDSVV0ReOGgVdJ6ccwkQNVlWdZz7Jd9d%2F5zSVdId5D4OZI83RT8pOj5KngkzW24bNIK3m%2BofHB%2ByQwKoW1jh5eT91Ze65kaYQz2tSk525ABsrXGVYajCkmrWsMYJIZJ0diefZwRvI9318MIqup70GOqUB7ETWSqiqFYuLj1rMcOTJBm3TfiY6l4LUbJ30nvD%2B1W8SIVI3q%2F0anQw%2FPLgC%2F2FivxGxuTkPRaInUaChOObK7DfdwJV%2Fw824sCgBF0MiVvLWVl6Db0aKclqn1wkxXo7PVkzUT%2Bn8hVAQws5SjUbC6y82uuKca3LfqfjsXAMp5q82KsfvwZLNCTRwSkTpC3gIxowF%2Bizki96OkjJJb661YGjuMBUy&X-Amz-Signature=7afc5659577319b61e7b05ed11beefc7442701abeb4173a85821cddf22cb5afa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PS3LLPM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgvuQqqrwO%2FHS7ddXgtt3xnA2wnEeD7JY7%2Bad%2FV8dmvAIgXTBP9lejQRRzKzRH8VcRGravoO7%2Bdmc8jZNLzxLkI98qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2u7CFdxjIMB5HcUSrcA0Y%2BX7a8eMeamU%2Fsi1Gc415oUUU5BrHcwS%2Bsc%2FoPtM8rBd5GcOE%2FZsZJXe7uKk2viRg3L60XnAVWD8%2FEoEb2HXLGOGWKLcYeUR5DoMXKB4FuPMgOOIkdfO8zjzdLVt%2FZIVWwMs6rLp9fBttHgaA%2BxKptULcBfEK10Gothhhy6t3b7FrOs%2FpoGkzL4oEWZiN9rqNyc9zHz5x0PK9NGOW3pg1JOgCOrMQ2aJGiOSkKKJLpiHEB9yvv%2F2E2tIlUJ7T%2F4oorP%2BTuN8R3pKbynUpoHTGLYaPVBdAigeiMmxBrDNhu1qdqS95k6SEh4Z6azLBWIMMUk6kTcvQ8668YnFz3MuYuuiVCSnXL0C01ozINW1uzULEcqkCOfFLHCZq6HUFIny8zZLHeKLm2aKtVRHBEQNJ%2BZ993Udn0FmGhY4GH89JgYCDPbVoabykhoXY6mOJVfeThvmlbFveNNs5WHn9AHI96mIiOhkpXzXFisUSHioXDspPz70ueahVS9Xwbf5wzQHODVOYvg3HxHOiN%2FS95g9qaPCLpeEb8tXPui8ZDuGeIz0jTyeaI9wuxDFIoo3eFIuxm2aJIU8roDlKUbQEL5q3JYNQYAjMem4v3tpJTsO45cO0PjrHKQvuygZSPMJWup70GOqUBs3SCD93m3uXzBP2nKOrXo%2Bq80f0ASDChbJ%2BlZcsPqOAqroKdXXAg2nI%2BiYNWNi9OmuQ429JREg5pWpsXW%2B2d%2Fbhq5CLpYbcHnvIMM39d52wm6NSPv8Pd2S%2FCwbuX9qckBk2g%2FvG9x56P9GFPp50g0brZK9XVgGB7%2FNflkCnmNadxFyLlcjiSMtv2fs2U8wGPd67pKjNWfcN%2BRuppECcj7be6NahD&X-Amz-Signature=65430daa45e7da333b291d917d710da4dffe6bdc369c714c73424a7e8b39ac75&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPYVMXS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUEzy1A9CZiH09s6Lkmq5D7RunG0wdNUnK12jmVXv%2BiQIhAPWpy4bwKOUWlkzQ52GynsZLaisFWSpu76RqYpBxtXHKKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyijkdu1X8srInvqmoq3AMgG9qbVYKQhMfCZJAMMhoV5bcdUwcFfbVzTBECUm9a7zpJ9W5z6lI6Ss%2BX0%2B%2FWH04QphuMtkIG3cV8%2FZMxE0X8Ld5F5eTrEzO4ZE%2BgXi0jlPeSBS10gE62a5rBK%2BgFLXGZQLydVRZqr4o4MvGyWS3i3wxlvO7xAd6rdFg9Tbn2o9smqM6qYUhsdt2Ub6NsRwXYtx2hQjAOTRBoesDnTPRuR%2FPASCAHi9MNzUF%2BgOEaZcTJoNrMpv0HQzK%2BSBr9NTqSUbgreL2gjIvKdga23ZLWMBDtwge27xfCihLA%2Fg5EmkqXQuV0wTRssm8cpO1ieO54koZMJO75ZMX2uRy9Z8G%2F45HmcI5bscawkVrj9r%2BaaM2LXzKleZsv0J8OOoq7UfgIkwcYzGeGJUJcOS9t9RoKTspTbKPQFz%2FUBcdTgn4VfQSRfn2LaRh8qAp0b1DxktDCtRaHSNxLt19zd6EsAXZF5dv%2FB03h09aHbYNuoTMsXue6f5%2Bw4%2Bppt0dcp1UNlQ0Yra%2BeD9Aj5IW%2BAaBryeZZ3auXj7gPNTM63LdFN8dEE70P%2FvdsKIYMufTD2lcLCrkeAfu8cHmn95Ra68hLIAMNAo4HjsLc%2Fj7fILix3GoVaLuCKJ7zydUiuXit5zCerqe9BjqkAYpBX1zBEUEJSi8RXQxTte7QOcfk60lkCJgXHBNmWh%2B8g8j04OBozEVb54aXcoAKUP%2F1mlyfFvRV%2Bk4bdk9rBV9DGNF7iNNt2NHajUbnvC%2FV9V0xFadMJzPa2OXbTS%2BRsuA5dbzCWX9B2VRo8%2FtY2QGIyUbSlgScHgTqfEU27%2FMfN8TzKtCFvJidwthLiLPTelt4OEXoSyZue6iupDnsNDMcOQjl&X-Amz-Signature=c4b2d8bc4062da73b4d2ff4cc4749655ed990313d97951ea07cde0dcb05585d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGXNNQN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI97QxZcpKcDh%2BKn%2FhK7PsdGvBXDMe0SG3iPbFiWoEoAiEAyySfwxlVJDsu6U6hhU75oc41r%2FJ3zzsyaDXQkFYLYHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7yT0dVtKlfU0VYQircA%2BL82V5tPLdfvOThTHlMkqRy43FMptLa291dt4PeOz6xxNcb8W17uz4BO1VfS8Rq4IfKTrHGFtW2ZBKmmMz8keZWeQVMv5yRuu191K6JLJW58BwPwKD6rkCpUkZ6b06f5%2Bo%2BGL9Gnjww%2FKtIIcoslVWz9zwGNWX0bsx8iI5FbcjWgcl0F8Wdb1yOEICOzMnzwzvii9n%2FH9thVhMYAYprJr4%2FUJodstDNdBwamsDgUTTISpnjlbqqNFmoFbWjCGitwZwFarWCx5XE2C4KDV4QfDL%2FH1wEAvZ1d1GbEx1FdpSeFZ%2B9ruTk5W0AbcjB1P%2FRlmj553BfHY3uJwoiYdD%2BZJWy1avdVFFcoIdRltx4r1kDq5WPyuZOjPIag%2FXs7plEeD%2BRf75Sj3OInd8WT8ST%2FU10jQpED09zJg8mOk0vfs6vh%2BWkEGZuUJRWNUpo16cbHwhrZBBHVX%2BwJlsUD%2BdNWoU%2BGC%2FCMntSqfsKeBm3NKWnRGgJDSVV0ReOGgVdJ6ccwkQNVlWdZz7Jd9d%2F5zSVdId5D4OZI83RT8pOj5KngkzW24bNIK3m%2BofHB%2ByQwKoW1jh5eT91Ze65kaYQz2tSk525ABsrXGVYajCkmrWsMYJIZJ0diefZwRvI9318MIqup70GOqUB7ETWSqiqFYuLj1rMcOTJBm3TfiY6l4LUbJ30nvD%2B1W8SIVI3q%2F0anQw%2FPLgC%2F2FivxGxuTkPRaInUaChOObK7DfdwJV%2Fw824sCgBF0MiVvLWVl6Db0aKclqn1wkxXo7PVkzUT%2Bn8hVAQws5SjUbC6y82uuKca3LfqfjsXAMp5q82KsfvwZLNCTRwSkTpC3gIxowF%2Bizki96OkjJJb661YGjuMBUy&X-Amz-Signature=999794348526d24fbc1ecd82f72cf3c1bbe4a6855604613314782f04632242f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
