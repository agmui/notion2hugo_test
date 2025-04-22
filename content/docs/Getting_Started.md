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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HGCAQJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGvCPkP1Cs8EW9B%2BLgy3%2FvTu71oSnhHu%2B71EkLXbfGdbAiBMkTT57vmxitKYMUrZshEUec0Uxo631eG%2FrCnZhqFgYiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzitLhSZEnbJdPTr7KtwDLLN41EXwL%2BcRNC95Hv1Szd2gi%2Bx5RqTz4fLzrJ9B8pL8NsAX00ktY7P%2FdVf3SQynhiDENEAUWFsL7mDOwpuD%2B571m%2B34rEb%2BejEZeCBTqECY0fbAe%2BP1fW0B%2FxN6WDI3M7H5eEw9j4kr4fczu1tsXqrUN7GZQVoULfAO8Qw0mrCW8TpAwgMAiQv24Qomv9CJvK2Hlt%2BMJeJPtuZ2YNpVqRJX7PJ9d8Qk31wHrUQaB4JRGZEGNZ0hZeTCeADlDHjSBnf4YA2ynZVG5%2Ffie44KFKAS7x8xs0aD%2Ft3NUHdvaKpmxovvHgFEUA1RYjJJ4%2FfT4g9%2F9ozknV30a1kWpLhUP0ARWG%2BHKkIOS2RoTIdO2%2FJGriJxBBRPo2gsNJHOzgvovFZD03bF9KZ%2FUfA8nN0WR4rBQqkQtHSkrb5lPxsdXkthl%2FCNetFMTeWcyeioOg%2F1FFM3cS20Oee2WJ%2FEj5LE1ARHvz9ip5dwfYZ9%2F4X6iJgAsYRncjQdGQpI8xtbbVbhhpf%2BPOQHUZMmipFXB9XdELPqfFagm95zXpqf6nAdv74G6pv5m1PZNS6K9Bt%2F2TTvIprx%2FM3Q2oQo%2B%2F2UMYX8vq0GwfmbzeBiStmHj0ecfsN6FYjdOnl7DelNPuUwgOCewAY6pgHK4vcx1TXhRcO7fiA9an1Hp%2B5J3eC8XgDbRjpDEnZvhxvQbsu8r0m7duDZlOF0htG8%2B4uDf9RwIaeCkFp4Q7gf6jimp6TakTMxnLeKR9t5y06kV5bYO%2FLCG19Kof3MZf0CSvUCqP5aVmTPCI1x5eAyZ48KB3LTgMAWHT%2F7ejvVZGOH2xKSjpYvmoS2LwcJdzkHO2yS58Rpw%2FtY64tlbvFnQbKxHXQ7&X-Amz-Signature=eb56def17032c17ba5181de11ac2f3cfd9dc5c00c38cb7f56a8e1bb96df99b63&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HGCAQJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGvCPkP1Cs8EW9B%2BLgy3%2FvTu71oSnhHu%2B71EkLXbfGdbAiBMkTT57vmxitKYMUrZshEUec0Uxo631eG%2FrCnZhqFgYiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzitLhSZEnbJdPTr7KtwDLLN41EXwL%2BcRNC95Hv1Szd2gi%2Bx5RqTz4fLzrJ9B8pL8NsAX00ktY7P%2FdVf3SQynhiDENEAUWFsL7mDOwpuD%2B571m%2B34rEb%2BejEZeCBTqECY0fbAe%2BP1fW0B%2FxN6WDI3M7H5eEw9j4kr4fczu1tsXqrUN7GZQVoULfAO8Qw0mrCW8TpAwgMAiQv24Qomv9CJvK2Hlt%2BMJeJPtuZ2YNpVqRJX7PJ9d8Qk31wHrUQaB4JRGZEGNZ0hZeTCeADlDHjSBnf4YA2ynZVG5%2Ffie44KFKAS7x8xs0aD%2Ft3NUHdvaKpmxovvHgFEUA1RYjJJ4%2FfT4g9%2F9ozknV30a1kWpLhUP0ARWG%2BHKkIOS2RoTIdO2%2FJGriJxBBRPo2gsNJHOzgvovFZD03bF9KZ%2FUfA8nN0WR4rBQqkQtHSkrb5lPxsdXkthl%2FCNetFMTeWcyeioOg%2F1FFM3cS20Oee2WJ%2FEj5LE1ARHvz9ip5dwfYZ9%2F4X6iJgAsYRncjQdGQpI8xtbbVbhhpf%2BPOQHUZMmipFXB9XdELPqfFagm95zXpqf6nAdv74G6pv5m1PZNS6K9Bt%2F2TTvIprx%2FM3Q2oQo%2B%2F2UMYX8vq0GwfmbzeBiStmHj0ecfsN6FYjdOnl7DelNPuUwgOCewAY6pgHK4vcx1TXhRcO7fiA9an1Hp%2B5J3eC8XgDbRjpDEnZvhxvQbsu8r0m7duDZlOF0htG8%2B4uDf9RwIaeCkFp4Q7gf6jimp6TakTMxnLeKR9t5y06kV5bYO%2FLCG19Kof3MZf0CSvUCqP5aVmTPCI1x5eAyZ48KB3LTgMAWHT%2F7ejvVZGOH2xKSjpYvmoS2LwcJdzkHO2yS58Rpw%2FtY64tlbvFnQbKxHXQ7&X-Amz-Signature=c76bdb92eff94606dfe85114564adb69b60b6530105e573a351d4c05717d2091&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMV4LRPN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD49P3hV51wqD8DZorIYjA0oAzGw1IS5wsJBRq9JX5R4AIhAPj4qXewTkQa0%2FxoHWHrwCQKzrlvgplt5LkZKTdwCdDMKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3EICRr1u52YoUCI0q3ANnRp1%2BlKZLQ4fbr4ElLciaWmxIWEGpygxVG7FjTEpLxYvGTrUgVYPNZqhhU34Ft1omLDZSmBPdyffbdzcmUP5ckuYY89mYHwb5E%2FbMVh2m5TJtX17LcN8uk8cxYKyBxsnr3IqCoaBpmKcjzOyZXxvpXwpbUs2wRjFLFrOGCsMsAPxr0ZQ0ItLsN3mBaEBakTAdsIaaNHP0DsgJ6gxAaAOvRwO2VETN%2FiXiRVOff%2F2cLalinzYGB6nccMcVr0ibWSo%2FgsnA431XSIgqnsD0Cy1jXAXBfIKfTbI6i3DweG%2BYf5DkUFlWHbjzHGovZdzutuQZERYzR%2BoVDzqUyBrzi%2Fl21lShKiQxsXi0Hntz%2FJslG8XXDmH8ok6iXxrIWZll7nvsHAQwgQUBRKnjeQIBA1RT02%2Btw4LoqAcAubJ%2B7QrSCDumGVv%2Fz7TpLc743eqbPNYlWUsC5FqUyQdnOprWJEaMlO31jPNesjLuanIU7RMyuzJ%2FgwihcYOzw1ICLF9ejbuZz72w%2FQEO5H5BVtCJt3%2BOGTtSzX81rUQzGq29C01JPWk7w68O9xL%2FyaTFMZ%2BZiyym2WBIuklgUz1Vkarkf3uZSjuPfgi5n18gk8NHiOy3vtRWqevVwzd%2F8IDoZTDq357ABjqkAUIbg9uoxadQcjG13QPacb99sEa3KEF7Vbmo%2F9UrR4621kk7h6orKLXJIo5a9b%2FCJGUlR3L0waI8vjckwSsx3gBPeRS7WnlY6VOyemAoKvhWkNXdOU6sbbpANnYi8T6CA1e%2BbyoxqKwi25zzEzFrXG4hWCrca88dCdgg2ztXdo8QHYbP3gMR4pzAA3LIBMAg2OgkKzmNxtdFftdiE4GUr5zaUTOd&X-Amz-Signature=09623f95278ff35320737dde262713734c0fe581efcc6e8701ecb982b0f0dabb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PKGEU2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAL9hSfLhWaA355x5D95%2BCiRdodYFK7DDTHTf%2BFWUnlfAiBsIBD98fhe1pp%2B%2Bdnr00hjG7gbduaplVpfycpPmty9zCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjafy1ejFBlNvI8d7KtwDQb8tG%2BiEyIhnwrK%2FAZRXKAt4G5vI%2FSHtZxL24OJKYZBRtYEPxff1Yzh9HLF6iJUUiy%2FddZ418lBBR%2FbYodgkFpQbT9awQvnr2uWk5TapdaxkvhiT3yLYN4HgkEtH5tpIFWxWWE2AJ%2FQQDhK4nDOxcWT9IoO6E0hZWhQrPr9zWLGpZwvG7%2BcQwZVLOq80o8YD5cFMeqCoxKTDWP21yONhmo%2B6oOVUyBA%2F1SHMVTXVa6H7PaAH2ZFIZsLwgdB%2FEVqDOOoSX9zDLA%2FdyOWpJWvkXKOwLK%2F4eVU9m%2BxPcqeurv%2Bc2%2BS6yEMcnU5BV3GoUuylFHAh%2F%2B94D%2BgTsexKnyOfz8oe77ZTRkRgK1url6eymvV57f6%2BhL5pZg7Oe5en9ykWz7lU8EbPhXl%2FMvpg8WcNDgPTBA%2BoDhaVVMFoKLrrrVPahjRBwu4ynPLREaKi3NvvftZv2gUYmlaC3j3DatMD70b4FmootWPcRxWimiJnWIUpKvi0Nsp2btrzsR7EpbMsZBiujwf1rpVTmkzFRhCYMMrYmKyzIr6e%2F78OISLH8%2B6Bz74DrKA0GG%2BisKDATRNskuqeoPs2ckGVz8BMBYsFYoLMftpd4P5JGD1HWP7bRYNMjg8vDxZIzka7IUQw29%2BewAY6pgHxsdJSbSV8v2Ckw%2FuV91kDWLShyJnDTgEwOKo%2FIJMlv%2B4rgyf5n4KhX%2BoFtomkXt0VToJ1Iris%2Bm%2FmBXrNoTTtmilWkIbZd14J0texLChso8DR28n39HuHSs75WazLWLucoXA9ULzGCu2aIceK%2FaPDkmuBbWfTA51RNPHnncyIv6FeKApE%2BIybh3R9ndXurUhML9RYZxe4dXh%2Bc4r%2BIJ2yhPR%2BYNb2&X-Amz-Signature=7209b3337e6319bcc5eca7c9ae1c00df310fe1207f8d2b2b6f01bf6ba14cfe67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HGCAQJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGvCPkP1Cs8EW9B%2BLgy3%2FvTu71oSnhHu%2B71EkLXbfGdbAiBMkTT57vmxitKYMUrZshEUec0Uxo631eG%2FrCnZhqFgYiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzitLhSZEnbJdPTr7KtwDLLN41EXwL%2BcRNC95Hv1Szd2gi%2Bx5RqTz4fLzrJ9B8pL8NsAX00ktY7P%2FdVf3SQynhiDENEAUWFsL7mDOwpuD%2B571m%2B34rEb%2BejEZeCBTqECY0fbAe%2BP1fW0B%2FxN6WDI3M7H5eEw9j4kr4fczu1tsXqrUN7GZQVoULfAO8Qw0mrCW8TpAwgMAiQv24Qomv9CJvK2Hlt%2BMJeJPtuZ2YNpVqRJX7PJ9d8Qk31wHrUQaB4JRGZEGNZ0hZeTCeADlDHjSBnf4YA2ynZVG5%2Ffie44KFKAS7x8xs0aD%2Ft3NUHdvaKpmxovvHgFEUA1RYjJJ4%2FfT4g9%2F9ozknV30a1kWpLhUP0ARWG%2BHKkIOS2RoTIdO2%2FJGriJxBBRPo2gsNJHOzgvovFZD03bF9KZ%2FUfA8nN0WR4rBQqkQtHSkrb5lPxsdXkthl%2FCNetFMTeWcyeioOg%2F1FFM3cS20Oee2WJ%2FEj5LE1ARHvz9ip5dwfYZ9%2F4X6iJgAsYRncjQdGQpI8xtbbVbhhpf%2BPOQHUZMmipFXB9XdELPqfFagm95zXpqf6nAdv74G6pv5m1PZNS6K9Bt%2F2TTvIprx%2FM3Q2oQo%2B%2F2UMYX8vq0GwfmbzeBiStmHj0ecfsN6FYjdOnl7DelNPuUwgOCewAY6pgHK4vcx1TXhRcO7fiA9an1Hp%2B5J3eC8XgDbRjpDEnZvhxvQbsu8r0m7duDZlOF0htG8%2B4uDf9RwIaeCkFp4Q7gf6jimp6TakTMxnLeKR9t5y06kV5bYO%2FLCG19Kof3MZf0CSvUCqP5aVmTPCI1x5eAyZ48KB3LTgMAWHT%2F7ejvVZGOH2xKSjpYvmoS2LwcJdzkHO2yS58Rpw%2FtY64tlbvFnQbKxHXQ7&X-Amz-Signature=fd6eba7c6c61ca418f827ca71fc80ff42c12db497f6cea5f6d85f422be6ab73e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
