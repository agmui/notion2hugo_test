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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSRPEBS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6j1yks5EusMmxQ%2FfNdT7T4covXWO02pk3%2B5kG6R8ztAiAm8FeG85WuLp5E%2Fl2leJy1TCp4HRApifTby2TP%2BNGQ8iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCK5cu7Bc5FfKztpKtwDcXZLuBaSfiIOy074GssYTGn%2F6fiAgaNx8BN7rh5jNzRF49zHG5PRUqX3AIIopsDd2EtQLjL%2F%2FCc5YBEoy4jYzo0L4HSOt8fdCReoodh7BbVoqPmCcrgUTwGsWSKRoyiyye011dgVVwQ1Lt7a1KS3gtON77Mk9YnuyHLOOdZiqHZ0H3sD5HCiAwRZDlmH1Q%2FUSiKu1c0mDHNpyAGa35M9cfgq1IcJKzJ3EceoL%2BaZM1KrZeA%2BpdtDfWW%2F%2BdbdQPqfA0iGKwOHqPiEKNW2B7mehJQFjoi2gAN2DJXkrgeKrnF1qTGb2gWThnL6HaKvaokwKjLM0T9J21g6zA2B8eIZqGzOTho3I%2BwUlDokgCLnHBXoCP9wfE3r3zuT3v6RrDV4vM00eOkdOqme1tADiN%2BMWM7e8LPtnQxCb0mkOddcdxSaNfODRKBp3wo86y9KcmDBe608hXzrFB%2BHeA1HcFFFPB1MfelZ5j6UuY5dRlDfryzzHiMALv2jXLme1mNBxnvLtS74ZrwHhHefXlDUL44HKU0emG%2Fmyf5Slp2SrwJDbzFIYhbcVM%2BWPy%2B2kWVyiewsmE244Ua6AKKIGLGDRAN%2FMwtsFlauwNyk8z11zO7wOdjRHPteixM51zcaS38w4Jy7vwY6pgFiBGT4JEG7X6vRo25bY%2FIRPpuiqZSs6u4jhkcCu%2FdWAlgmS4vgwibedSbXojhlAOQ6l8D4q2MnyC581PmGoNQGm%2B%2BKIpfYgcRnnxO2wYAE4Ra3AbSYNRnrGU8MF9I17XCZ7Pv%2FlHFGiMjJzqNtWV2g7bglUgm3%2FY44hWpCXq3hRVso%2BKbTUxvVn4ZloGB88kQdpv9jZLgoPW8ti9mcp4qs5ahiq7xK&X-Amz-Signature=2386150624e132312d7b89086ac8d171e38934bd4ba0c472a3a1035308548e01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSRPEBS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6j1yks5EusMmxQ%2FfNdT7T4covXWO02pk3%2B5kG6R8ztAiAm8FeG85WuLp5E%2Fl2leJy1TCp4HRApifTby2TP%2BNGQ8iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCK5cu7Bc5FfKztpKtwDcXZLuBaSfiIOy074GssYTGn%2F6fiAgaNx8BN7rh5jNzRF49zHG5PRUqX3AIIopsDd2EtQLjL%2F%2FCc5YBEoy4jYzo0L4HSOt8fdCReoodh7BbVoqPmCcrgUTwGsWSKRoyiyye011dgVVwQ1Lt7a1KS3gtON77Mk9YnuyHLOOdZiqHZ0H3sD5HCiAwRZDlmH1Q%2FUSiKu1c0mDHNpyAGa35M9cfgq1IcJKzJ3EceoL%2BaZM1KrZeA%2BpdtDfWW%2F%2BdbdQPqfA0iGKwOHqPiEKNW2B7mehJQFjoi2gAN2DJXkrgeKrnF1qTGb2gWThnL6HaKvaokwKjLM0T9J21g6zA2B8eIZqGzOTho3I%2BwUlDokgCLnHBXoCP9wfE3r3zuT3v6RrDV4vM00eOkdOqme1tADiN%2BMWM7e8LPtnQxCb0mkOddcdxSaNfODRKBp3wo86y9KcmDBe608hXzrFB%2BHeA1HcFFFPB1MfelZ5j6UuY5dRlDfryzzHiMALv2jXLme1mNBxnvLtS74ZrwHhHefXlDUL44HKU0emG%2Fmyf5Slp2SrwJDbzFIYhbcVM%2BWPy%2B2kWVyiewsmE244Ua6AKKIGLGDRAN%2FMwtsFlauwNyk8z11zO7wOdjRHPteixM51zcaS38w4Jy7vwY6pgFiBGT4JEG7X6vRo25bY%2FIRPpuiqZSs6u4jhkcCu%2FdWAlgmS4vgwibedSbXojhlAOQ6l8D4q2MnyC581PmGoNQGm%2B%2BKIpfYgcRnnxO2wYAE4Ra3AbSYNRnrGU8MF9I17XCZ7Pv%2FlHFGiMjJzqNtWV2g7bglUgm3%2FY44hWpCXq3hRVso%2BKbTUxvVn4ZloGB88kQdpv9jZLgoPW8ti9mcp4qs5ahiq7xK&X-Amz-Signature=5b0d1e6f42f4a3dd1324cf093e56fe4b4b4a859931704cefdf18cc3eac14e43b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBPCSE2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoudAw5GK%2FiMkFNWN5%2BNbTZw1gP89HOnjvUrnctKObDAiEAmbqQ7ZCyt8n0PuOIM9rYgeFI%2F0aq5v8aH4xZ3S9bkbYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl6ZZseWVCPL8rA%2FSrcA4SCjc%2BrMOnhCyYgMAIz4hiSAhunZMVpDf8hU%2B9v4k8PuBwudY7BPVIwdgkDuDvEnAdAzc9E49oj4pVKbcJlQmy74W5%2FGXr5BLAWudZxVIlKIjOcKsgokVJMM1NUd52v0rUU90pZpGMyWhBfaK1%2BFFfbumsrs2eFuWj6MA1MSz0VaoMzBO6nPxcZd7Tgbz9APZf451CVvs4YheGJEv11DBClH4ZOUfqzxhOe3Ujsv2Twj%2F0%2B2s4vMuUrwJ4v6cpX5rBu1XIe3H4HnD63SrEmKacY0%2B03G5i7nVprWEM4i6VsnZelxkF9nliYp6StyoDOY%2FKjz2F0%2BZbXTbPdmHKrYPosbtBRkLBbsLlYBWC4CDnag3gVtcNd%2BaJgh%2F2TmkU%2BjZToEAw6gnOISu0rPv7aGfhkIYXzMPwHoFFv%2FWsZZTH0PKmb%2BIfl0n0tPpS5q0Lz9wBtzF7WSlVZUtjZW2GZSok%2F5hGMSorO9fcJRLYqS57TKWGmY%2FwtsxFAs0xvHHZlRa5i8KSj1gO5myUbMsdwIc2f0vCBJC%2B914yZxPrFXrNidt1aEGgEEbx0EpjfsbygTmC8A8p2Hpr0nm02RuIBa6XTwYv1aQtOApsNhGab37KFrRrzWj34BvRGQOp7MKqeu78GOqUB6qOFU6Q5BLK6sP15%2Bw2Z0osTDlMEmln49kPB%2FIQLcVmDUMouAPv6iwmprjLTAuB1VoXAA91tLn9B7VdfBkW6GZqZ87xKTklQjAp9WT5Y7QHnsSUfBh6sKWpoD2lRsDs75WoJLjtAydB2OzZjACPc5YWV5Oik8e25syzNb39SQjcQJoXA%2B%2Fb7JRSNR7kZOMYS1CZh5YqxCNfB97JGZy4dZise3ZBm&X-Amz-Signature=f1101ad62a3d3d14f44caf66a499726b224b2397b945dd1d951bed153979c156&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGF7JAGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXjntwF7OdRVEVYLw7K%2BGbTFKSD1K2mFrAHmdPGUW%2FdAiBe65TxKQR%2FJhp5%2Bk8dU6w1cueDHB6hI2b2Ul2vwFV0SCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHNVeuwoQsWExUGSTKtwD%2BTrdAehj%2F9FLLUVoYpM5pVp1Mpzd%2FyjvMHC%2FyeiXU7iqxYkKtC%2FFAoZEY3JIQyIoZ%2Bdk%2FY%2FHU3skSsr%2FXw2cy63FWXviPd3wnFdi0Q542JiZwop8WnN%2BxWDQXH1H4P3i6gz5LCcBXIpXU09TgOqoctyoh46TfjNTZBInyCRg59QigJitdh9JoBYZzVlWs5%2FQAgY%2BNXEJpGNeSMc5GatKbr0u7iUQekmMn%2BpT9RSE7VeLzeJfnplQeHzeSTpaL%2BsE3Rg1qccFDsqPqQL1qwE2EzUqR9afzBLaxw%2FNUdy4gwSjyF%2Fw%2B%2BC%2FMmn9YuH0gqEvj0Fl4FHYzPcRa8ur2fJ5uiJ0Idab053Qyru3EGHOOmI11Z%2FBGhYXeSOcPvO7UIfgsNmSOgLWm33gADFnVH1SA%2FD0gGxNy8i8a6FcTZtE5pAlE8fr9ZtyQum%2FJueB9%2FTr983qB1DA4JnkHU%2BrLEcLfLH1U%2FMoFUqssO1Y%2FIPAeDtuVHXwyOmRhuxyFrj1GZfM76e2keuYnTI4Zsx4Se2Wl2po0cICn2QpZsGQyYOTXlbo8foHcQjG5NY%2BggjadYDxRSVWnE3pScIjBaLISMkpjdWPKeYL4%2BfjmHm0ca%2BiBTH%2BRbMzCyFS35Ion8Uw4p27vwY6pgG0%2FVWQ3AvopAuvyp2olMRwf3fj2TTjSuaJf6xGgZZCA12YBJ3ZQJLIjTcKgKJni7jkQJHjI56pUkoLDp8%2FnVqQAmdRmkNwgicdkTf74sjAZ%2B2kGmo%2Bwal%2Fn6DSbnBTSpELyd%2BKnkY5lE%2FvqLvoMrE5%2FchnfA4Vq5PAqJpcvchgDpYtKW%2B5SWahUoyqV%2FMNrw%2BdJAWQldo61vXnHHSE%2FCfSm45%2FCMY3&X-Amz-Signature=3ddc36a64e48a989f4b8a2da60d1645d4be4b48b9d123e70f9bd730a5fe0e375&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSRPEBS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6j1yks5EusMmxQ%2FfNdT7T4covXWO02pk3%2B5kG6R8ztAiAm8FeG85WuLp5E%2Fl2leJy1TCp4HRApifTby2TP%2BNGQ8iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWCK5cu7Bc5FfKztpKtwDcXZLuBaSfiIOy074GssYTGn%2F6fiAgaNx8BN7rh5jNzRF49zHG5PRUqX3AIIopsDd2EtQLjL%2F%2FCc5YBEoy4jYzo0L4HSOt8fdCReoodh7BbVoqPmCcrgUTwGsWSKRoyiyye011dgVVwQ1Lt7a1KS3gtON77Mk9YnuyHLOOdZiqHZ0H3sD5HCiAwRZDlmH1Q%2FUSiKu1c0mDHNpyAGa35M9cfgq1IcJKzJ3EceoL%2BaZM1KrZeA%2BpdtDfWW%2F%2BdbdQPqfA0iGKwOHqPiEKNW2B7mehJQFjoi2gAN2DJXkrgeKrnF1qTGb2gWThnL6HaKvaokwKjLM0T9J21g6zA2B8eIZqGzOTho3I%2BwUlDokgCLnHBXoCP9wfE3r3zuT3v6RrDV4vM00eOkdOqme1tADiN%2BMWM7e8LPtnQxCb0mkOddcdxSaNfODRKBp3wo86y9KcmDBe608hXzrFB%2BHeA1HcFFFPB1MfelZ5j6UuY5dRlDfryzzHiMALv2jXLme1mNBxnvLtS74ZrwHhHefXlDUL44HKU0emG%2Fmyf5Slp2SrwJDbzFIYhbcVM%2BWPy%2B2kWVyiewsmE244Ua6AKKIGLGDRAN%2FMwtsFlauwNyk8z11zO7wOdjRHPteixM51zcaS38w4Jy7vwY6pgFiBGT4JEG7X6vRo25bY%2FIRPpuiqZSs6u4jhkcCu%2FdWAlgmS4vgwibedSbXojhlAOQ6l8D4q2MnyC581PmGoNQGm%2B%2BKIpfYgcRnnxO2wYAE4Ra3AbSYNRnrGU8MF9I17XCZ7Pv%2FlHFGiMjJzqNtWV2g7bglUgm3%2FY44hWpCXq3hRVso%2BKbTUxvVn4ZloGB88kQdpv9jZLgoPW8ti9mcp4qs5ahiq7xK&X-Amz-Signature=bd451e9b27969dad749d789ebed5a997923f8c1b183f509181ba6f80d8b2dcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
