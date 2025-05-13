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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZTSV6X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCiQxfZ5trbh4Tg8s%2BDlL2pFPUkQLa4C3nweRVpGhNl9AIgS%2BB%2F7R2dt%2BP3WPqPiM1vcE%2Fkr%2BghtKjAzX9e0jrMN0kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM%2BDWyJrpSZ9qgr4CrcAzAouWi8FAd1Zf%2B6uKe5pudH%2B6wrDhklvPNadDZhYg9QRspwdUXPrPPa7dTVDqcEnSjP%2FgzLJBYZsB0CwzPx1Zv3Hbm6%2BttF39KLUyp0Ndwrf83GEAUnYnmBZynZc%2FyXCnbqEW1RfjoLnksaMGuT0fA6rqRJbtrKGtkDSBOxuyFjmV%2FkDmDPIfw%2BZAlLoH91GBCKdpTdgkLPFA5H1GwPVuTFlh%2BTWAIcKnxK%2Biu%2F9pI0NXfS9BDf%2F6b%2BqkJhyLp5Hg1QA94l9y9r4U3IuKpyDEF%2FNUSweg2mwx0aDe6EBB6j%2FB6p4FjpX8Tmpqfc0QfqDS%2FqZNetupiiC4Ux3rU2f9dU6lMq7yPKDOR2PmaajxJmhB1scxL8nQE2xKfrEL%2FCcdtBpfHDdKnxMorPlAdZjZF2VPLWxk05Hb7dCpl%2FSTivrPmYMYh8ofb8ym%2FoaVNA%2BOUrp3o6A9GqZuiJHfBnme0yu9BPcDCVyFuw8EQ1xO37sEVclBYqYn1zvpCN6NfPZFULkJ3bGhPvIlWSNLKHsOzg2Bl8h0GVqVjZMAyJPM2NoLZCIboQniGR5x308sHmiTAwiNWIleI5n96P4jxW76wLw2xuHMpw9avTA9K6YmnXB%2BLz4HnybaGtQwAJMNXbjcEGOqUBIy3L7uxZwBOrjvnTM%2BhnVQAkPBoscl6YqLab03QbVxgyxBSkj6rOuO%2FwsbXUraWDTmED1m6gRIGJzNDCSa40fmiwGjxujJZLYwUqs877trHtUKBjvsN1nFLPbPpjwW5Y4TI%2Fi%2FEfLX7IWCUnVoS9Usf%2FfN2QnrjOvkXVGRYwEN6Xgm5rsapd%2F%2BEm1f9Aj2lrGOp4PDT6Y9W0x3%2F15wC55JpMnIww&X-Amz-Signature=8be3b2ea9dc7c3a99ea071f3220fc972be492b6edc97f2cc1fe11692296632b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZTSV6X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCiQxfZ5trbh4Tg8s%2BDlL2pFPUkQLa4C3nweRVpGhNl9AIgS%2BB%2F7R2dt%2BP3WPqPiM1vcE%2Fkr%2BghtKjAzX9e0jrMN0kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM%2BDWyJrpSZ9qgr4CrcAzAouWi8FAd1Zf%2B6uKe5pudH%2B6wrDhklvPNadDZhYg9QRspwdUXPrPPa7dTVDqcEnSjP%2FgzLJBYZsB0CwzPx1Zv3Hbm6%2BttF39KLUyp0Ndwrf83GEAUnYnmBZynZc%2FyXCnbqEW1RfjoLnksaMGuT0fA6rqRJbtrKGtkDSBOxuyFjmV%2FkDmDPIfw%2BZAlLoH91GBCKdpTdgkLPFA5H1GwPVuTFlh%2BTWAIcKnxK%2Biu%2F9pI0NXfS9BDf%2F6b%2BqkJhyLp5Hg1QA94l9y9r4U3IuKpyDEF%2FNUSweg2mwx0aDe6EBB6j%2FB6p4FjpX8Tmpqfc0QfqDS%2FqZNetupiiC4Ux3rU2f9dU6lMq7yPKDOR2PmaajxJmhB1scxL8nQE2xKfrEL%2FCcdtBpfHDdKnxMorPlAdZjZF2VPLWxk05Hb7dCpl%2FSTivrPmYMYh8ofb8ym%2FoaVNA%2BOUrp3o6A9GqZuiJHfBnme0yu9BPcDCVyFuw8EQ1xO37sEVclBYqYn1zvpCN6NfPZFULkJ3bGhPvIlWSNLKHsOzg2Bl8h0GVqVjZMAyJPM2NoLZCIboQniGR5x308sHmiTAwiNWIleI5n96P4jxW76wLw2xuHMpw9avTA9K6YmnXB%2BLz4HnybaGtQwAJMNXbjcEGOqUBIy3L7uxZwBOrjvnTM%2BhnVQAkPBoscl6YqLab03QbVxgyxBSkj6rOuO%2FwsbXUraWDTmED1m6gRIGJzNDCSa40fmiwGjxujJZLYwUqs877trHtUKBjvsN1nFLPbPpjwW5Y4TI%2Fi%2FEfLX7IWCUnVoS9Usf%2FfN2QnrjOvkXVGRYwEN6Xgm5rsapd%2F%2BEm1f9Aj2lrGOp4PDT6Y9W0x3%2F15wC55JpMnIww&X-Amz-Signature=67e245ed39ecfbb44b774ceacdc333c673d552253cb618f14735ef0ce38de0d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZTSV6X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCiQxfZ5trbh4Tg8s%2BDlL2pFPUkQLa4C3nweRVpGhNl9AIgS%2BB%2F7R2dt%2BP3WPqPiM1vcE%2Fkr%2BghtKjAzX9e0jrMN0kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM%2BDWyJrpSZ9qgr4CrcAzAouWi8FAd1Zf%2B6uKe5pudH%2B6wrDhklvPNadDZhYg9QRspwdUXPrPPa7dTVDqcEnSjP%2FgzLJBYZsB0CwzPx1Zv3Hbm6%2BttF39KLUyp0Ndwrf83GEAUnYnmBZynZc%2FyXCnbqEW1RfjoLnksaMGuT0fA6rqRJbtrKGtkDSBOxuyFjmV%2FkDmDPIfw%2BZAlLoH91GBCKdpTdgkLPFA5H1GwPVuTFlh%2BTWAIcKnxK%2Biu%2F9pI0NXfS9BDf%2F6b%2BqkJhyLp5Hg1QA94l9y9r4U3IuKpyDEF%2FNUSweg2mwx0aDe6EBB6j%2FB6p4FjpX8Tmpqfc0QfqDS%2FqZNetupiiC4Ux3rU2f9dU6lMq7yPKDOR2PmaajxJmhB1scxL8nQE2xKfrEL%2FCcdtBpfHDdKnxMorPlAdZjZF2VPLWxk05Hb7dCpl%2FSTivrPmYMYh8ofb8ym%2FoaVNA%2BOUrp3o6A9GqZuiJHfBnme0yu9BPcDCVyFuw8EQ1xO37sEVclBYqYn1zvpCN6NfPZFULkJ3bGhPvIlWSNLKHsOzg2Bl8h0GVqVjZMAyJPM2NoLZCIboQniGR5x308sHmiTAwiNWIleI5n96P4jxW76wLw2xuHMpw9avTA9K6YmnXB%2BLz4HnybaGtQwAJMNXbjcEGOqUBIy3L7uxZwBOrjvnTM%2BhnVQAkPBoscl6YqLab03QbVxgyxBSkj6rOuO%2FwsbXUraWDTmED1m6gRIGJzNDCSa40fmiwGjxujJZLYwUqs877trHtUKBjvsN1nFLPbPpjwW5Y4TI%2Fi%2FEfLX7IWCUnVoS9Usf%2FfN2QnrjOvkXVGRYwEN6Xgm5rsapd%2F%2BEm1f9Aj2lrGOp4PDT6Y9W0x3%2F15wC55JpMnIww&X-Amz-Signature=9994c0b5d71020d0bb20e5b122b6e021f469f25926b767a4d8cb4c8d73fdbe8b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYGP2S2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC7mphPhOgWYYV4YkI56ghuiqTurizj%2FkG6SEhtjNqYCQIhALSrozEDCUVyFd7Am03SiUcolIaDnffqN0fteVaPJFNnKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXbqYenHJvWDDcuR0q3AOuVYdT%2FgtZSxCNXuVHwUMVTqzh18ZG9a22WX6bdfzQ878uqWTb86K1y%2FggZGrpUwwtLzfhOiN28JQXO7%2FLQRAFNHee9UKyJCk%2FF3U2jSkRlT94zO5mKm4j%2BAht1kZrW8hh0VQyGJQ8cvYbUbOzp1grLGcCDNo1YpK%2F%2BjGy9q9rYfvaig6p9vDraAhfpPZVF9A1%2Fij6t2KLP9NW3j4Lr%2BhskWqalu8%2FU4B%2Fx4gImquUAxBXbg0KD%2F4FIis6c%2F7ttatgwvlN83QQwyWnuIbtlTFd7fCmTeYMLmnjDoUHl4pcVxqx%2FytbZS32Y9eyC6Bn%2BIEJtR7NDmJPoM61CSab%2F3X07tssZGQSKgyNGN9%2FYNKwxcSRsRBOkAX%2F9W7GRpIOCriOKC21YwOfdHvzay%2FfhBowto9dbAmNTvEFo4gDc7vuuDMQ7cIL1KHwRY2uB2kfwoNpu5FnlMYDNyFjH85rqKyLqtERKpxkA1KTOQ6CSezaGDhATgxjGWpBTRSvmH5avGONE6b1N1Eh0B5Du3P9P48dqN4phsdvMIKRsBXAKvlUUMRbfeIfPabFwnZD0z%2FOp1zA7WKhFHRMESE9iyqwJinrRD5u%2FgYqOKYv497B4u6qnbwTeU2WDHvmBN6Q5DDq243BBjqkATtIMTyTY4i8slwKatWQ2emh31n8LOIokKo73XmkdCSoW9%2Foyv1znuZMNM3uVPyjtM4t2i44GWkvRQspoAYP1WRosoQs%2B0DNT3d5upkdIcrE5n04NIi1e0u5X0sWWMEZ2ERTTAaq6JNexcr9MvxWzP6AxZx50No%2BL8U1ylt39EKZPRVx%2FHIv7fuyX0L9BFwCwsvHDa6RBw%2F7L5oLqhZlAxrhYUmB&X-Amz-Signature=7515ed8440808b9dc86c1d10d2595a27d3362fd0bdc205627752b4c593b9b8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MMXAJA6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBMWEdtukNHVYa4A9CLeSNOCktvRco4sCAEk7hUKiXMfAiBV%2BZbj0RDECJoYVLjW4FbdWGCPckY4Q6tRQPpV3bLUviqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiANnZmdmMPXeGoJTKtwDP%2FEgj8gFeDKsoPRB94PUQ4mUuuyj4dnuyo1B2%2Bq0aLUxxJdIC2069TQ5DJlIKFTGKu9FpXXQlfIplQJqqkzwxVw8aV0AEtIbD%2BCl%2BFs4IMtwcLCwYfFoy1%2BB0wlJObt1YRqDaYPUuISL6HkzIim4nC%2BDCdAOFuvnukbPAk1NyXpEi1P6DGOSvRsEEZW3NCH4OslyYBeqP7QDGlJDLUhNXYwbtCEJUIF3NnxKgUCcj2FeeJh8YCAkwCN01b%2FrUWaeSFxmdf8RZAxMZZ87oCQjkMBkVLsobuovx1iWMUOPIRi4I1Mn7RdSDexbXvyf9nCu4993eY1d6gavKrv7QYznflRE%2BRjP3Qc6VbwsfIJMWGz03x0xkRBRnYFMroYJD72ox22fgIrrnijYC3eWStBiqlSl6Ug%2Fgz4SLB%2BkFstT81fXDRQFKnByvuQa6aWcFO2PpG47dMWqVfLAGJsKz8KPK%2F353kL5fGFfmZsV4bDI3yMyDS2DI2jcfxtz%2B0v7DKuLUkYXas5gOT%2BhK6SHStYxS%2F1%2FFW0okm0aW%2FLZQAt4rBLuFt7XddiuyF5OyVA4DN4jx4he%2F8hd1eeQcK6zU%2FJiLw4Mv%2BxaNQyFeAeLFLKeTBfWx4Tr7Nnm%2Fnj7R0Uw%2BtuNwQY6pgGJ3%2FKFwq8%2BhmfiYYpXjgQYZ0Irq05vmU57Glup8q2VSITtdDMXZUj2Gdb%2F3TIfyYeluSw9u7S3lxBOst4CKtFHsPUJ6qbRj%2B9nhHEhM8EOBUXo%2BLlN8PAkkL43PeF4Jm%2F880eXlJlOq54DDGWtWZ4YByc%2FoTw54GNkR3HOhqaRMC1tjcfAm9J4k9LPkYpVKpR7MCFEKd%2BJOwav8UV0AFmK5xD2tnnj&X-Amz-Signature=134c113295cd64d46d63e5c48ac99cc378187745e255e05b53b073eafa78cf1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZTSV6X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCiQxfZ5trbh4Tg8s%2BDlL2pFPUkQLa4C3nweRVpGhNl9AIgS%2BB%2F7R2dt%2BP3WPqPiM1vcE%2Fkr%2BghtKjAzX9e0jrMN0kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM%2BDWyJrpSZ9qgr4CrcAzAouWi8FAd1Zf%2B6uKe5pudH%2B6wrDhklvPNadDZhYg9QRspwdUXPrPPa7dTVDqcEnSjP%2FgzLJBYZsB0CwzPx1Zv3Hbm6%2BttF39KLUyp0Ndwrf83GEAUnYnmBZynZc%2FyXCnbqEW1RfjoLnksaMGuT0fA6rqRJbtrKGtkDSBOxuyFjmV%2FkDmDPIfw%2BZAlLoH91GBCKdpTdgkLPFA5H1GwPVuTFlh%2BTWAIcKnxK%2Biu%2F9pI0NXfS9BDf%2F6b%2BqkJhyLp5Hg1QA94l9y9r4U3IuKpyDEF%2FNUSweg2mwx0aDe6EBB6j%2FB6p4FjpX8Tmpqfc0QfqDS%2FqZNetupiiC4Ux3rU2f9dU6lMq7yPKDOR2PmaajxJmhB1scxL8nQE2xKfrEL%2FCcdtBpfHDdKnxMorPlAdZjZF2VPLWxk05Hb7dCpl%2FSTivrPmYMYh8ofb8ym%2FoaVNA%2BOUrp3o6A9GqZuiJHfBnme0yu9BPcDCVyFuw8EQ1xO37sEVclBYqYn1zvpCN6NfPZFULkJ3bGhPvIlWSNLKHsOzg2Bl8h0GVqVjZMAyJPM2NoLZCIboQniGR5x308sHmiTAwiNWIleI5n96P4jxW76wLw2xuHMpw9avTA9K6YmnXB%2BLz4HnybaGtQwAJMNXbjcEGOqUBIy3L7uxZwBOrjvnTM%2BhnVQAkPBoscl6YqLab03QbVxgyxBSkj6rOuO%2FwsbXUraWDTmED1m6gRIGJzNDCSa40fmiwGjxujJZLYwUqs877trHtUKBjvsN1nFLPbPpjwW5Y4TI%2Fi%2FEfLX7IWCUnVoS9Usf%2FfN2QnrjOvkXVGRYwEN6Xgm5rsapd%2F%2BEm1f9Aj2lrGOp4PDT6Y9W0x3%2F15wC55JpMnIww&X-Amz-Signature=0aec3298396395a7d5b542c9a6cea1ca6e2c6755ff2dd350f052a6732828beb5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
