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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GWCUDC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCUalxOT6QhkY1sFSXuXJ9DQy3g0vLEANOZRiqSsL4w9wIgKouqTk4mRNtvKOHn3tTVgb7uKy3M%2Fd%2Fmlj3xVChX65Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJWiRqgkIrjUPuKeBSrcAyt6MhGhoKXRsyyrcJS6CJJmzWUBFgxjxXDCI8IrFYVPgHxrf1betmh9DESg1E17Mr0OLdrfvNMVdU6kbUqDIEshpTSD10YlBnSMJ%2Buh9A4jsWbIig3APjo%2B2N1ACDajD7TlqHKsujTMrvmq8mpxmvu1qPrDitQjCBzdGb35Apk9SLJ4AITBRdWQ%2Bz%2BnZeyq%2FST3qpfpPraUdjCM5wEBg6YMXu4kfShDXFW2WEB%2F8e%2Bj56vw8upC5fELtvk0Np2vFZMJGOPSYfP2Vvecx15VoHYicC8Dr%2F47y3ae%2B5SqbzowkW2MsmdUx%2F5muKSp1ZO7T7yY1%2BzQrsEDvmqBeOk5UXa9p28HQh66pSEK4mj98fvoWLG5Y6EorX5RbO6Y%2ByIPIeNMcf%2FThGnJgri4rma4Gq6BkdQdVch%2F%2BM1%2Fznf16WXX6g1ww8UL0RaiDy4dHmtk%2BEm%2BUzwWgxA%2FZ3e6T42dj7lWMQ0iGTdV3DXB1FDGLqBfDLJe4u2a9NcdqpHyFhhO%2BNk8l6BtvqwXwv6%2B7EZeAMujvuzx2sq9KG9wExz0zTZqYiXum02q%2FsMKX331fLy6S6PKix6PkC8d6nx4hqlRKLeZfeEfiuThpfJZr3sM2uUujSPaAjntC2%2FR21W3MN6SssIGOqUBVHD5grl7r8JId%2FA0CpgqsM4bp87fh6WkDyZeF50%2B6Ue05KLyO8DqdD2RzYm%2FfgxP82%2F4YVBLRw%2Fv%2By3P4yefTGH3NM9JW5Wm8TB77RBy%2FqJMZffVrS76ZrFX54AzCp4XBXhT9le06wc2X3id%2BZfdyrATmbqBUURyfxSKGbGXINx%2BiNBLe%2BbhQjK84SFRl1EJvzpF7ulyKr4S9RtubQJluLP8VcBm&X-Amz-Signature=1ce040cf5fef4262ab86dd48b9c771d97874795163cc4da4248bc7a672038c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GWCUDC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCUalxOT6QhkY1sFSXuXJ9DQy3g0vLEANOZRiqSsL4w9wIgKouqTk4mRNtvKOHn3tTVgb7uKy3M%2Fd%2Fmlj3xVChX65Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJWiRqgkIrjUPuKeBSrcAyt6MhGhoKXRsyyrcJS6CJJmzWUBFgxjxXDCI8IrFYVPgHxrf1betmh9DESg1E17Mr0OLdrfvNMVdU6kbUqDIEshpTSD10YlBnSMJ%2Buh9A4jsWbIig3APjo%2B2N1ACDajD7TlqHKsujTMrvmq8mpxmvu1qPrDitQjCBzdGb35Apk9SLJ4AITBRdWQ%2Bz%2BnZeyq%2FST3qpfpPraUdjCM5wEBg6YMXu4kfShDXFW2WEB%2F8e%2Bj56vw8upC5fELtvk0Np2vFZMJGOPSYfP2Vvecx15VoHYicC8Dr%2F47y3ae%2B5SqbzowkW2MsmdUx%2F5muKSp1ZO7T7yY1%2BzQrsEDvmqBeOk5UXa9p28HQh66pSEK4mj98fvoWLG5Y6EorX5RbO6Y%2ByIPIeNMcf%2FThGnJgri4rma4Gq6BkdQdVch%2F%2BM1%2Fznf16WXX6g1ww8UL0RaiDy4dHmtk%2BEm%2BUzwWgxA%2FZ3e6T42dj7lWMQ0iGTdV3DXB1FDGLqBfDLJe4u2a9NcdqpHyFhhO%2BNk8l6BtvqwXwv6%2B7EZeAMujvuzx2sq9KG9wExz0zTZqYiXum02q%2FsMKX331fLy6S6PKix6PkC8d6nx4hqlRKLeZfeEfiuThpfJZr3sM2uUujSPaAjntC2%2FR21W3MN6SssIGOqUBVHD5grl7r8JId%2FA0CpgqsM4bp87fh6WkDyZeF50%2B6Ue05KLyO8DqdD2RzYm%2FfgxP82%2F4YVBLRw%2Fv%2By3P4yefTGH3NM9JW5Wm8TB77RBy%2FqJMZffVrS76ZrFX54AzCp4XBXhT9le06wc2X3id%2BZfdyrATmbqBUURyfxSKGbGXINx%2BiNBLe%2BbhQjK84SFRl1EJvzpF7ulyKr4S9RtubQJluLP8VcBm&X-Amz-Signature=4b622a43b756ed64a7b625c3a56f509cd2cd6eaf8285602ade0a0bbe55780e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GWCUDC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCUalxOT6QhkY1sFSXuXJ9DQy3g0vLEANOZRiqSsL4w9wIgKouqTk4mRNtvKOHn3tTVgb7uKy3M%2Fd%2Fmlj3xVChX65Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJWiRqgkIrjUPuKeBSrcAyt6MhGhoKXRsyyrcJS6CJJmzWUBFgxjxXDCI8IrFYVPgHxrf1betmh9DESg1E17Mr0OLdrfvNMVdU6kbUqDIEshpTSD10YlBnSMJ%2Buh9A4jsWbIig3APjo%2B2N1ACDajD7TlqHKsujTMrvmq8mpxmvu1qPrDitQjCBzdGb35Apk9SLJ4AITBRdWQ%2Bz%2BnZeyq%2FST3qpfpPraUdjCM5wEBg6YMXu4kfShDXFW2WEB%2F8e%2Bj56vw8upC5fELtvk0Np2vFZMJGOPSYfP2Vvecx15VoHYicC8Dr%2F47y3ae%2B5SqbzowkW2MsmdUx%2F5muKSp1ZO7T7yY1%2BzQrsEDvmqBeOk5UXa9p28HQh66pSEK4mj98fvoWLG5Y6EorX5RbO6Y%2ByIPIeNMcf%2FThGnJgri4rma4Gq6BkdQdVch%2F%2BM1%2Fznf16WXX6g1ww8UL0RaiDy4dHmtk%2BEm%2BUzwWgxA%2FZ3e6T42dj7lWMQ0iGTdV3DXB1FDGLqBfDLJe4u2a9NcdqpHyFhhO%2BNk8l6BtvqwXwv6%2B7EZeAMujvuzx2sq9KG9wExz0zTZqYiXum02q%2FsMKX331fLy6S6PKix6PkC8d6nx4hqlRKLeZfeEfiuThpfJZr3sM2uUujSPaAjntC2%2FR21W3MN6SssIGOqUBVHD5grl7r8JId%2FA0CpgqsM4bp87fh6WkDyZeF50%2B6Ue05KLyO8DqdD2RzYm%2FfgxP82%2F4YVBLRw%2Fv%2By3P4yefTGH3NM9JW5Wm8TB77RBy%2FqJMZffVrS76ZrFX54AzCp4XBXhT9le06wc2X3id%2BZfdyrATmbqBUURyfxSKGbGXINx%2BiNBLe%2BbhQjK84SFRl1EJvzpF7ulyKr4S9RtubQJluLP8VcBm&X-Amz-Signature=b071348119a9b1788cb7ad9bd9e6f3624507eb32dd5092f29d732d80958f6ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTE5F2X%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6qXfBD9u6pEpgHM63d%2FIjdIllv7suPMxyGGRzG61zqAiEAtq3pjyz4J2eRq6TC%2FnBAM%2F0fsIIzkwfqAtCI9kCLVZMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEUYxRyAboFbiqQGbyrcA5apLy6PznVh16uLH4R60Uu9x6mTJOb%2Bhm2wQRLtqIx1yrZZCwZdWbn70Y7rTm349cEp5o3G5mgrV35Vrgbb6Bn%2BNpJSQu6Ag2xtUVVGSR4mRp6yYUoSLXtQAri8GQXH37101WKz0nIeO0NtH5Np%2BmQYiFdMA4yqiL%2BKugzg%2FBEgtxyr0MflNRcqp%2BT%2FNvBp%2Fk5yAEOtTdHy3gVKJK%2BGk9RQWVnPHLbboGlVRCYtazq5GDT347To2qsZD1KxglFp9kF9O6r6%2BtJetMI56xazm7xhHKQGG3IuxHGsTme0%2BzEps64fXO4KC5NNnhofT98HsEtmJg70KKFS6xnZy7E%2FQsfNSRcMSST232PC4YUoIskIqjSFDd9edURhTTYKQWH8U5yXtNqN6tdCosGmmjqcECXgVV7%2BpL1HRyXFthA6layzwto8edPC%2FcBd8pC2J1qcMnRY86KJNUXaVCDQNbuNb4jTUBvzO8tx2CIxjmqVJgZP2gtsEX%2BKwEEym%2F9H1OBWUzmz99lBdi1GQ0RngLiWN9OKabk2ca3yZ%2F9nEr6B%2BvvIjB%2B%2FEGGajzJXQwmxluIj5ci4N%2Fu77yP4ftliWv9KHfYQ9vHR4EGW2PoJrQCNLoguogu3t6TcgimMG3vwMLGTssIGOqUBxNbLM517L37%2B0O0nnBR3EdGf6TQOyXmgSjqZo%2Bv%2FKsFJBnEoHDA4u7SvYw%2Fufm6wBWBed9jCn30AFCrSupydUNmIQw55KIHHqe2W2MPnGrQaD%2BVaSK%2FSgnhSp10xMrJ%2BYdHlYmStS6KMeCEo9NRKvYMPgUPcMQfSAUa0GOadriA1dg3GwCi4LGWaxeGfL5MDVO5D0aqmUGgw88A7hRNBsllwyHx%2F&X-Amz-Signature=39d6dc6a5832b44341625222b4b06d5377227b2e01ace2d1d6798f57a24e5451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPILZF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGbFqCig3THnnXo%2FcwdKVxbFldXgKeK0%2BzbhJ%2BO3MYcqAiAmH79W0JwJTWdOKxx%2BPBzPUgG2N1B%2FMv9P22c82%2B9VtSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMPCbotzVPEitlvUvOKtwDUMYZMCvCDC7ONKDKKoxJaNJ%2BU7tFy8rETjYLyqYvnOQGlnuj9belwsuxpKmNjY0h0B67WcL5aV1n8G%2B5D7B0i%2B1jg7Xz5rKi2V%2FjCtVJ%2BsMM0xWuH1Q5fClKHRmv%2B85uiAAg1%2BURDDslTqE1D1il9atbBhtmhpIkD%2BmOq07caNmyY9FsfjgAkZNOz%2BJKytDBCr4n4tJdAv0KfvIUBvyIOfbxich5JdEdu7%2F1rpOPW8tfMhCp%2Fimm4wzP0oh1OsQTyeFZVMcNczdmPUwXPCPd72FXBGvf0r5yXcS4sSwryMIqCagwNpZ9u1VANmcihYWm3dpfUDzouFhDEeMyshe6%2B7Tfon2IueGd0a5ncy0XXAaKk0x6NnUjfd6lzd2RdwwQ2avI6kaeAuxWkKEaV6OziIlGHdCuBiJNy9jlbdXKQ4ES7gY3oquRigurkl4exfKSdfN2ED1KIIcYNSBskAebM%2F8Fn44YI5HWSiFE%2Bln5a5xhX9XWi1FshzitnKxrq%2F5dm%2FNl07tZhr3tF5DR0f41fNUJnbS7X8TwNeijX66pNcry2Qec14rWVDivdGalY%2Bozq%2Bb4EOCHqUZk6cM7fhCxilc2Lsz%2BqqbidcL8Js5Ms747Vq2nhfy0izr91C0w6pKywgY6pgFDV3wjdiXPt6s4zmGGQXpIHNhl2iiAQvzbVjSJZ%2FsBTRXx5n%2F0qh2f4%2FfA08dQvdwbuvPuGhtC0%2FkJR8YK6j6qucxXhGA4KDvZu6a84LjGNbDvkkXaoZVdDsali3ruEK7ZOYnAr3DWwsJY10wireR%2FwoFVbY6G%2F02baYzioG09nCdGHA6lyczZdaXr8LcJIDT9Z2gAnMgk0IEkuOcKaMGu7WYkQUSU&X-Amz-Signature=b08fff5c32ed7bd95c97498ac7a32301f26aec8cffbf3069e139452ce1379655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GWCUDC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCUalxOT6QhkY1sFSXuXJ9DQy3g0vLEANOZRiqSsL4w9wIgKouqTk4mRNtvKOHn3tTVgb7uKy3M%2Fd%2Fmlj3xVChX65Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJWiRqgkIrjUPuKeBSrcAyt6MhGhoKXRsyyrcJS6CJJmzWUBFgxjxXDCI8IrFYVPgHxrf1betmh9DESg1E17Mr0OLdrfvNMVdU6kbUqDIEshpTSD10YlBnSMJ%2Buh9A4jsWbIig3APjo%2B2N1ACDajD7TlqHKsujTMrvmq8mpxmvu1qPrDitQjCBzdGb35Apk9SLJ4AITBRdWQ%2Bz%2BnZeyq%2FST3qpfpPraUdjCM5wEBg6YMXu4kfShDXFW2WEB%2F8e%2Bj56vw8upC5fELtvk0Np2vFZMJGOPSYfP2Vvecx15VoHYicC8Dr%2F47y3ae%2B5SqbzowkW2MsmdUx%2F5muKSp1ZO7T7yY1%2BzQrsEDvmqBeOk5UXa9p28HQh66pSEK4mj98fvoWLG5Y6EorX5RbO6Y%2ByIPIeNMcf%2FThGnJgri4rma4Gq6BkdQdVch%2F%2BM1%2Fznf16WXX6g1ww8UL0RaiDy4dHmtk%2BEm%2BUzwWgxA%2FZ3e6T42dj7lWMQ0iGTdV3DXB1FDGLqBfDLJe4u2a9NcdqpHyFhhO%2BNk8l6BtvqwXwv6%2B7EZeAMujvuzx2sq9KG9wExz0zTZqYiXum02q%2FsMKX331fLy6S6PKix6PkC8d6nx4hqlRKLeZfeEfiuThpfJZr3sM2uUujSPaAjntC2%2FR21W3MN6SssIGOqUBVHD5grl7r8JId%2FA0CpgqsM4bp87fh6WkDyZeF50%2B6Ue05KLyO8DqdD2RzYm%2FfgxP82%2F4YVBLRw%2Fv%2By3P4yefTGH3NM9JW5Wm8TB77RBy%2FqJMZffVrS76ZrFX54AzCp4XBXhT9le06wc2X3id%2BZfdyrATmbqBUURyfxSKGbGXINx%2BiNBLe%2BbhQjK84SFRl1EJvzpF7ulyKr4S9RtubQJluLP8VcBm&X-Amz-Signature=36969d609ad75f5d340b9a6ff6560967849ee41b6bf8bd262bc7b77b85b63461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
