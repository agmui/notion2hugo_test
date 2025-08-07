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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUQXSLZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD0fxJx8eoJiITvve%2FmppaTL7rf0OZzUMGs3fEgHnpHMAIgVTRuZ5fW%2Bd0MU7YeazHF8xGuckEEzgj7RdIP%2F45oUmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2FrMTphoRORX8jfCrcA3eu7Y1dEDQoaZ%2FpuZy7g8qv91tCOp8tVM%2F4PWL8k2kwMgtUcQ6oVnQCDavS93PYK7e361kF%2Bau5TSO9Rd2yvGamBdHL3Dtc7il%2FO2TcvD%2B4P7seLbEnx98kXmNuvtyy%2F0EgEQtO%2FMkjY7vUWns68sko7axLa8l%2BaCwLYkm56uubcXx2oV1%2BfuS17BGIFzoau%2B9hTBiciSitseClXPYu2XFXvb5vrKz2gjywaqVj4jjk2WlLF2D8Ku5YrbBulROTKM3hnxWxf3E8GeR7G%2FHNRZywlfJbmyi1%2BZgbByz26KrOkSjRMQu78bSeBBqZp%2BURdKb0%2FuHKIuIwH74qumOb2m3UPAVpJZ3FMsFgjoLcWjaBGHl7hGYBX4CdePTkJp5Fz2gEUm%2FSpdAj48PUgRleXLSQOilwZkiYw%2FrZVs9KHMUWcXJFrtlW7JFTgatfBZTlKWsJbKk0u72a7z%2FhiNisjSE0EvaEe6Q%2FoJLkZY6%2FA%2F%2FLqWroSNkmzJdqHG5mqTmFhEz%2FjmEvPqXoM4UXsJBaeVfJLbxlK6GG3YjZFQo%2BwSP9AqrKnpxCEWqeWDmpoj2INx5H6UfuCf9VdkysmLeEmqCwyxj7v6GNFYmwXvyEYRMFF5EKbL1kj3mra3ZWMOXt08QGOqUB0gJlv0ntkvIQbfMBNTYLolDGv0H3pD3oe0CFUOpWaO1FYeBKkzLLtLg2kcuITxg19tCerOiyngTPqXbHCScWcYlK7Hr4HNpdvgPGGv3V8oL1dGRJvxm%2Fx8p5AheVTSEzFvtv0%2B%2Ba4yYG4DQp%2FWWOgFyVaa4xtYsPPIHq0yDvBcqRAJwPedDQrijJHdjI0OCS444nvQVsoxqQslgf1JoFZNAghfJO&X-Amz-Signature=5ca62bc488c3b9462a882a686be486d9100d83de4f3f416d1073d9cdaa913cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUQXSLZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD0fxJx8eoJiITvve%2FmppaTL7rf0OZzUMGs3fEgHnpHMAIgVTRuZ5fW%2Bd0MU7YeazHF8xGuckEEzgj7RdIP%2F45oUmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2FrMTphoRORX8jfCrcA3eu7Y1dEDQoaZ%2FpuZy7g8qv91tCOp8tVM%2F4PWL8k2kwMgtUcQ6oVnQCDavS93PYK7e361kF%2Bau5TSO9Rd2yvGamBdHL3Dtc7il%2FO2TcvD%2B4P7seLbEnx98kXmNuvtyy%2F0EgEQtO%2FMkjY7vUWns68sko7axLa8l%2BaCwLYkm56uubcXx2oV1%2BfuS17BGIFzoau%2B9hTBiciSitseClXPYu2XFXvb5vrKz2gjywaqVj4jjk2WlLF2D8Ku5YrbBulROTKM3hnxWxf3E8GeR7G%2FHNRZywlfJbmyi1%2BZgbByz26KrOkSjRMQu78bSeBBqZp%2BURdKb0%2FuHKIuIwH74qumOb2m3UPAVpJZ3FMsFgjoLcWjaBGHl7hGYBX4CdePTkJp5Fz2gEUm%2FSpdAj48PUgRleXLSQOilwZkiYw%2FrZVs9KHMUWcXJFrtlW7JFTgatfBZTlKWsJbKk0u72a7z%2FhiNisjSE0EvaEe6Q%2FoJLkZY6%2FA%2F%2FLqWroSNkmzJdqHG5mqTmFhEz%2FjmEvPqXoM4UXsJBaeVfJLbxlK6GG3YjZFQo%2BwSP9AqrKnpxCEWqeWDmpoj2INx5H6UfuCf9VdkysmLeEmqCwyxj7v6GNFYmwXvyEYRMFF5EKbL1kj3mra3ZWMOXt08QGOqUB0gJlv0ntkvIQbfMBNTYLolDGv0H3pD3oe0CFUOpWaO1FYeBKkzLLtLg2kcuITxg19tCerOiyngTPqXbHCScWcYlK7Hr4HNpdvgPGGv3V8oL1dGRJvxm%2Fx8p5AheVTSEzFvtv0%2B%2Ba4yYG4DQp%2FWWOgFyVaa4xtYsPPIHq0yDvBcqRAJwPedDQrijJHdjI0OCS444nvQVsoxqQslgf1JoFZNAghfJO&X-Amz-Signature=00ce1a150cb0da7fd59b3d8bf1456c2fdad1d3afaa18062cdad0bec340a82977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUQXSLZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD0fxJx8eoJiITvve%2FmppaTL7rf0OZzUMGs3fEgHnpHMAIgVTRuZ5fW%2Bd0MU7YeazHF8xGuckEEzgj7RdIP%2F45oUmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2FrMTphoRORX8jfCrcA3eu7Y1dEDQoaZ%2FpuZy7g8qv91tCOp8tVM%2F4PWL8k2kwMgtUcQ6oVnQCDavS93PYK7e361kF%2Bau5TSO9Rd2yvGamBdHL3Dtc7il%2FO2TcvD%2B4P7seLbEnx98kXmNuvtyy%2F0EgEQtO%2FMkjY7vUWns68sko7axLa8l%2BaCwLYkm56uubcXx2oV1%2BfuS17BGIFzoau%2B9hTBiciSitseClXPYu2XFXvb5vrKz2gjywaqVj4jjk2WlLF2D8Ku5YrbBulROTKM3hnxWxf3E8GeR7G%2FHNRZywlfJbmyi1%2BZgbByz26KrOkSjRMQu78bSeBBqZp%2BURdKb0%2FuHKIuIwH74qumOb2m3UPAVpJZ3FMsFgjoLcWjaBGHl7hGYBX4CdePTkJp5Fz2gEUm%2FSpdAj48PUgRleXLSQOilwZkiYw%2FrZVs9KHMUWcXJFrtlW7JFTgatfBZTlKWsJbKk0u72a7z%2FhiNisjSE0EvaEe6Q%2FoJLkZY6%2FA%2F%2FLqWroSNkmzJdqHG5mqTmFhEz%2FjmEvPqXoM4UXsJBaeVfJLbxlK6GG3YjZFQo%2BwSP9AqrKnpxCEWqeWDmpoj2INx5H6UfuCf9VdkysmLeEmqCwyxj7v6GNFYmwXvyEYRMFF5EKbL1kj3mra3ZWMOXt08QGOqUB0gJlv0ntkvIQbfMBNTYLolDGv0H3pD3oe0CFUOpWaO1FYeBKkzLLtLg2kcuITxg19tCerOiyngTPqXbHCScWcYlK7Hr4HNpdvgPGGv3V8oL1dGRJvxm%2Fx8p5AheVTSEzFvtv0%2B%2Ba4yYG4DQp%2FWWOgFyVaa4xtYsPPIHq0yDvBcqRAJwPedDQrijJHdjI0OCS444nvQVsoxqQslgf1JoFZNAghfJO&X-Amz-Signature=54939667fcea4045370fe932d2587983e26bbc07ad023be7ee565c17ce098534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPCBPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCTVZ0ttVhVbJEsN9lP%2Bo8yTZNp83a3RIrbyOLHrQeODwIgNZVvGKgMIkm5cKic0UFvrj%2FsP3MXPaoVX5FkkIek22UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh8QZrjcU2rbttJ7ircA6dYPGWCMrljAHBWk9QIoZ%2Fv5Mb8Yr%2FA8WEacT7Et40ksBJ9Bk4zUAPEUqXKs6AgfxVGOdj7AAptOJr6iLXQ5e5yONRkH2Nq4O1uOn%2FAd7tY92EK1DAt31BzXI33WvuBHacjLJrbe%2B3%2F6885XG%2FHbA5CePBN6mv7Q4LDgfcbYQ%2FaTZCzBN4ALFaxJTuY6X1AbyV7oPQu0KUWVsPjjcPd5Rp3UggrkjAN5W7CpGI6dupEADVpk2VhmC3cRfD91B1dS%2BY9exoWutYlCXiHlykXerb4ROauGeUX88NIq3APcZo0LDHZG08tUYReBi8WCWGlvp%2Bn%2FEIqwPO3NI7rcB5FQh22SxfP3Gkmv2h3KLO9SlJAOz%2F9enh4C9LcqUOgk%2Fb5U7auGVfO8CNzRddJ3IMO6F8dBl0FOkoYZknMtWyycA8OKwxrtusM4NL0KFmU1k2ANTOVBfRIRnc2OpYFqekG%2FBidAaOLC8MkdqzGqRUdl5nvS0X8plS1oBWDFr%2BntHTtEABGNO8sYp5FeHzWpcV7dKdJOlr%2B2KNvygY%2BZ9pSdaglr0t9iCgADWEbGfC61ATHhi%2BEY6ppKliSFLl7WG1d7AA%2BBSACotB6HYmjp2%2Bos03EAW69YXpgOZxB%2B%2FhxMNXt08QGOqUBv034emsoSX8uor5xI5P8jRKZMT5gT2mJDDTIj7e%2Finr6fQkOCW9q20TOFj01Tntc9J9D5pb%2FH6ep9WIHtI73y3QiEk3sKng9mGQHqkw1vJaid1NaWE1555tbCsbG2IxxNE7BYWF4uzFlASGIluCkByM3qlpYCwSA5ibpn2QFVNCjaXfYY8%2FKiNuuxOlCzDTquJxMABgjM54anLBISoBZof3gxmxp&X-Amz-Signature=9cda9250fa7cd00b9c4ecc2eb5f7423b7b2b7a2f26f0a74d6b571d24d8779369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKRLEGA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICzam4CMNqHre8vJJ6MmSPNaFAR1Tu6xFIvCIhfiPqCuAiBhxGELtVH9ljpmyO3hvvG8d3ieRvExlAZ7WoYwPdduEiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzSp03eRXJIRvpJLSKtwDstdgIEqP3ZU4Jd3l2hiiYe6PTC1hSLBCV7dM17ZkEi10LOoJSHXZbtbSGPtcZrwu1dpttvSsw1J666DQ9VmpANTn6Q69BuqZVoOeY39ZoHpJgXHqeeequA9xS0ub1dkFDSXO9GqjxCdKzhYcEqEeZEuOCplFqJ0Ch3YRbYxLYYWMht%2BSxpetwjjleWWbUED23Kt6Yy6qZvdcrY%2Fw0HdJ38Oy5qncI1i9gASUlPjcY053zDhyOwT1qdBTjxQJd2%2Bc04JDq7zQHTc1SnWpzoCFXcwllu1afIj5HBrNXgKwChy5RVu%2BzRZ1PUwCK9sPofXN%2BEFS5EzsYrNcbt7%2B88dz9QCSYtljlYJzNS66fiRG72O%2FnI6JzMyh3iouEGGbH7kQNFAygep5XxCv02GAU4pMZxuyG9sFyinvI0S%2BN70myIpUGBoMmMAhlffutpR9Vp2qWpt%2BRjDMCe3QuYpn2Y1wf0%2FSCl38aTTUi4gkl5wNpJ%2BlHXW7xezh1cdyZjO37mdL2gTwBGF7EUUvEZucknlgoERjqtiphaZYT4UNfJEWR5gpjcpozeTWzUsx3Cr9wFfC%2B3oLZAi6Wj0PsHAe0UgvXNNvh8NQydmpyiCzhlDOMhssU2QR5fubeofhXugw4e3TxAY6pgG2VbpMd7idDWgz%2FZ5QZ8jtm%2BKXMiRJ79nz1F%2B3vNSBoszKdcTglUv5wm18rNwrmKCBUqstNkpJTfiTDN8RxfNIwrjzhg2%2FvHZaKW5SXmgYChNOe1GSQ6Rl8gzEX%2Ftw%2Buvds2SqHGyynKHPdUMWdN2LnPx4jTQEaOUrEFtDFfhprmpM%2FXRQPzhkoIRDVuLLCPbjA10If7QmCwWfUhNxRbhw%2FUE1EDJN&X-Amz-Signature=e7f852bf596be8f0942ddc8c9102e1a1aab9c184068cdc9e5d1e87635d62d32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUQXSLZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD0fxJx8eoJiITvve%2FmppaTL7rf0OZzUMGs3fEgHnpHMAIgVTRuZ5fW%2Bd0MU7YeazHF8xGuckEEzgj7RdIP%2F45oUmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2FrMTphoRORX8jfCrcA3eu7Y1dEDQoaZ%2FpuZy7g8qv91tCOp8tVM%2F4PWL8k2kwMgtUcQ6oVnQCDavS93PYK7e361kF%2Bau5TSO9Rd2yvGamBdHL3Dtc7il%2FO2TcvD%2B4P7seLbEnx98kXmNuvtyy%2F0EgEQtO%2FMkjY7vUWns68sko7axLa8l%2BaCwLYkm56uubcXx2oV1%2BfuS17BGIFzoau%2B9hTBiciSitseClXPYu2XFXvb5vrKz2gjywaqVj4jjk2WlLF2D8Ku5YrbBulROTKM3hnxWxf3E8GeR7G%2FHNRZywlfJbmyi1%2BZgbByz26KrOkSjRMQu78bSeBBqZp%2BURdKb0%2FuHKIuIwH74qumOb2m3UPAVpJZ3FMsFgjoLcWjaBGHl7hGYBX4CdePTkJp5Fz2gEUm%2FSpdAj48PUgRleXLSQOilwZkiYw%2FrZVs9KHMUWcXJFrtlW7JFTgatfBZTlKWsJbKk0u72a7z%2FhiNisjSE0EvaEe6Q%2FoJLkZY6%2FA%2F%2FLqWroSNkmzJdqHG5mqTmFhEz%2FjmEvPqXoM4UXsJBaeVfJLbxlK6GG3YjZFQo%2BwSP9AqrKnpxCEWqeWDmpoj2INx5H6UfuCf9VdkysmLeEmqCwyxj7v6GNFYmwXvyEYRMFF5EKbL1kj3mra3ZWMOXt08QGOqUB0gJlv0ntkvIQbfMBNTYLolDGv0H3pD3oe0CFUOpWaO1FYeBKkzLLtLg2kcuITxg19tCerOiyngTPqXbHCScWcYlK7Hr4HNpdvgPGGv3V8oL1dGRJvxm%2Fx8p5AheVTSEzFvtv0%2B%2Ba4yYG4DQp%2FWWOgFyVaa4xtYsPPIHq0yDvBcqRAJwPedDQrijJHdjI0OCS444nvQVsoxqQslgf1JoFZNAghfJO&X-Amz-Signature=241b5ef1957baabae0a434f920235611c3b590618e0396ff074fe8dcbf5368ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
