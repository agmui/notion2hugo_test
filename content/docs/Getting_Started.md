---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3MVXMQ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn5Hvtw663QqJ2d39%2Fj%2BWbajipjRPIuDsLOqB52WURNQIgHJZGq9tsvvaWnrFM0zZmFihU0qLFT37PjEn0%2BPcPRYYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbikxbnxDXuhGqVYCrcA8TSzRym%2BVBpDE966cgvrvld7Sby9tck9RT3Fz6EoYYU78zGJlq%2F%2BdJ5exVcx16rZhTKI0i95doMhlru4253X5iz67MEHKVRyanp1hrLgqqyq3kVKlGzUvT7TcF4q49GbQNpC1FanZDWJlxB55KVrch8go4%2BmmDWm%2BoItTud%2FRa0NFtaSGFVbdUNrEV7slMNtJa%2BRki80ROSnlfuXbKC13lfS9nt%2Ffz8WOpVaSXxw95eqrZ4ruqf6%2Bv8mqXbpGr94ZUTgS53cYXUC0FV3Dq3MTDtMSJ82fMssLGQii9YM4YtsVdLMt22EtQHNTMSD%2Fj306Th4t3WypeuMu1gIC6mwzmmlv84nxdi4cKmcyRy8tCIF4CJYQTbajXatu2PWZ3ZMqf3jJmBjsJdM8iqWAgJ5zTkBxLpmtu1YsgyIC0K31CEFEe%2F%2FfjZeMN4oj2hvvo%2BVHpCGxQHK78eO%2Fkwt4yJ9NJ5X5du2vbONyeOSjUReqRwTFq4UYpuEqB9Yz2hfa%2FUdiqOfOWFRXI53wtVyrv61HRicrB23oCCKANGXzBKiBv3nVyPLxNVaeUN%2FuxMSdMg7dSY9gVP10%2Bb5fBIUk0OTaoJEwckv2bt8cjtFIHUbMKg%2FjrUgBOGMenlPtZoMIv8p8kGOqUBaUYvIJ5LlykhvO9dR19gmLxw9U6Ewg5xpU1g10zeEYkl190rTJqof5GzquzJmB%2FmUtO4GHaC92d633gTnsmhlChNK9ip345vRNouCoUtTCLO6F%2BZQV%2BGeKptlywFLDDUgMJE%2BIXJcl7Qx%2BjrMpsKNKMRTCTRbJDV5d7C3frOoNPCTet99X3JblSKkh9WrvgmtnTydjp9l3z5RcdhYORlyoTAi%2BmY&X-Amz-Signature=b3e0c57def4bf728c4b3cc198c9b453f29fc6afa07ee607f68ba41b94d24787b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3MVXMQ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn5Hvtw663QqJ2d39%2Fj%2BWbajipjRPIuDsLOqB52WURNQIgHJZGq9tsvvaWnrFM0zZmFihU0qLFT37PjEn0%2BPcPRYYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbikxbnxDXuhGqVYCrcA8TSzRym%2BVBpDE966cgvrvld7Sby9tck9RT3Fz6EoYYU78zGJlq%2F%2BdJ5exVcx16rZhTKI0i95doMhlru4253X5iz67MEHKVRyanp1hrLgqqyq3kVKlGzUvT7TcF4q49GbQNpC1FanZDWJlxB55KVrch8go4%2BmmDWm%2BoItTud%2FRa0NFtaSGFVbdUNrEV7slMNtJa%2BRki80ROSnlfuXbKC13lfS9nt%2Ffz8WOpVaSXxw95eqrZ4ruqf6%2Bv8mqXbpGr94ZUTgS53cYXUC0FV3Dq3MTDtMSJ82fMssLGQii9YM4YtsVdLMt22EtQHNTMSD%2Fj306Th4t3WypeuMu1gIC6mwzmmlv84nxdi4cKmcyRy8tCIF4CJYQTbajXatu2PWZ3ZMqf3jJmBjsJdM8iqWAgJ5zTkBxLpmtu1YsgyIC0K31CEFEe%2F%2FfjZeMN4oj2hvvo%2BVHpCGxQHK78eO%2Fkwt4yJ9NJ5X5du2vbONyeOSjUReqRwTFq4UYpuEqB9Yz2hfa%2FUdiqOfOWFRXI53wtVyrv61HRicrB23oCCKANGXzBKiBv3nVyPLxNVaeUN%2FuxMSdMg7dSY9gVP10%2Bb5fBIUk0OTaoJEwckv2bt8cjtFIHUbMKg%2FjrUgBOGMenlPtZoMIv8p8kGOqUBaUYvIJ5LlykhvO9dR19gmLxw9U6Ewg5xpU1g10zeEYkl190rTJqof5GzquzJmB%2FmUtO4GHaC92d633gTnsmhlChNK9ip345vRNouCoUtTCLO6F%2BZQV%2BGeKptlywFLDDUgMJE%2BIXJcl7Qx%2BjrMpsKNKMRTCTRbJDV5d7C3frOoNPCTet99X3JblSKkh9WrvgmtnTydjp9l3z5RcdhYORlyoTAi%2BmY&X-Amz-Signature=d0219bb696de7d89b6c6d12e2a2ec41df90c411ed8d20f9c7f64cc501947d016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3MVXMQ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn5Hvtw663QqJ2d39%2Fj%2BWbajipjRPIuDsLOqB52WURNQIgHJZGq9tsvvaWnrFM0zZmFihU0qLFT37PjEn0%2BPcPRYYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbikxbnxDXuhGqVYCrcA8TSzRym%2BVBpDE966cgvrvld7Sby9tck9RT3Fz6EoYYU78zGJlq%2F%2BdJ5exVcx16rZhTKI0i95doMhlru4253X5iz67MEHKVRyanp1hrLgqqyq3kVKlGzUvT7TcF4q49GbQNpC1FanZDWJlxB55KVrch8go4%2BmmDWm%2BoItTud%2FRa0NFtaSGFVbdUNrEV7slMNtJa%2BRki80ROSnlfuXbKC13lfS9nt%2Ffz8WOpVaSXxw95eqrZ4ruqf6%2Bv8mqXbpGr94ZUTgS53cYXUC0FV3Dq3MTDtMSJ82fMssLGQii9YM4YtsVdLMt22EtQHNTMSD%2Fj306Th4t3WypeuMu1gIC6mwzmmlv84nxdi4cKmcyRy8tCIF4CJYQTbajXatu2PWZ3ZMqf3jJmBjsJdM8iqWAgJ5zTkBxLpmtu1YsgyIC0K31CEFEe%2F%2FfjZeMN4oj2hvvo%2BVHpCGxQHK78eO%2Fkwt4yJ9NJ5X5du2vbONyeOSjUReqRwTFq4UYpuEqB9Yz2hfa%2FUdiqOfOWFRXI53wtVyrv61HRicrB23oCCKANGXzBKiBv3nVyPLxNVaeUN%2FuxMSdMg7dSY9gVP10%2Bb5fBIUk0OTaoJEwckv2bt8cjtFIHUbMKg%2FjrUgBOGMenlPtZoMIv8p8kGOqUBaUYvIJ5LlykhvO9dR19gmLxw9U6Ewg5xpU1g10zeEYkl190rTJqof5GzquzJmB%2FmUtO4GHaC92d633gTnsmhlChNK9ip345vRNouCoUtTCLO6F%2BZQV%2BGeKptlywFLDDUgMJE%2BIXJcl7Qx%2BjrMpsKNKMRTCTRbJDV5d7C3frOoNPCTet99X3JblSKkh9WrvgmtnTydjp9l3z5RcdhYORlyoTAi%2BmY&X-Amz-Signature=785e7fae12e9d25f560a8b6d165a5d93f3d1e4d71e13782b4b08706bff096e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657DJNWHC%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7kX3XhPc1AsIfmCDcDzHsO1lsBqqNNC8%2FNit%2FAUVVwAiEA5eDFBk3nqkU89nLfRjkrBD724iceBW9LMSpr%2BndHZ8UqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FnkY93jFcvmzpn7yrcA%2BMl%2B7um1SdrKTkbJZ8vzXJtWAi4zjTIkmgVmgRucFktL2e%2BLQYw%2F2OIXhQROub7QTH%2Bb7AQveR6FSndssqPsByLqHaAteNbJUFv%2FMwXyp5axxIYhbBZkd864kNZ1q0anaBEpcoLkqnA98Tqvfk%2FNXmO%2FmQWZkFU%2FNugCYSYuxhLJ0Xpp1wYidxW7L4VTTo5QbhLeTfNlbka8ZXynoBEKxsdF0fsphYWpZNWlmZn%2BCybpfzoEiCQGPxJ1r5mQCyyqcJTp4x3%2Frkq%2Bk1U0IHFraccPySA%2FMnVt7h0hDm9caOINgDymrJBML847klo6g%2BMgUuhxrVkSVXNEzdohUYmR8fJwvY%2FdPH2PWAv%2FSyrB2oIg8UaN4tnRYT6z7UjGgl2lKwa7eFVRiQRdhU1LUk5ACTgtt4OGpahRKp6dk3dGozYN0jMQEFAInTXV2Uc7SmfdSBDLNJj1F3WtXuAD5CGS8HwuGJZ3s8jRNO6MPoqV1qL%2F7CO6%2FiTK0ccxuj1RdFVGIXBM2osfdyF2KWE1c%2B%2FM6e6YmRThpy0eenfNt%2FWMxg2b2YWlylkdox13odn%2FuymQAaSZSo4v59Wx7sXwNpA1iU1ATIttk9Ja0eAowyXMoPl%2FRBiuVOX1fS2zWDiMO%2F%2Bp8kGOqUBCWqfWS2IB7mEIOl6YQNxGSY3CyDsQoIitbQdlUuHffakI%2FBdD5sZxoSgKW%2FZeVnqrWSQpV3wT5YJXxLnigrng5vXy%2Bo3KAVOnlc5w9HOoFqHnTLVTZYMJst%2BrvBMtRxgIi1UdDNhzG%2BifT0Mom9ZThgStm3%2Fikn6LQvTBxlus3oKc41%2F1msgaArzQqYii%2Fc77abIOZ0sdAqHfy0U6npVValFE%2BnX&X-Amz-Signature=f457a40d7d4b783dd114abe5a8c52e9c292fed34e59671f0ef663fabd729ef2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUQ2D27%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7xZbIXRaKqfO7RCV2Azvi6yIXFMsLnF3mSkdf9hppYAiEA4YwBTh5ZdBxm6ujurBaDCcGFLTj8Irmnc3tDGMC6PSQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ3uSKXDZf3aW88bCrcA2okqGya7Z146Hzro0NP8342L0Exdw1VXsOVLfH9QeTNqZIXH8ANScs%2BFB3dzQSahKY%2Fhj55qsmjo5udLfO0CxTAcoHIYgBAmZ9oD0%2BsDkVUiO9Ai6m65xkyGj4aQM3jenKnOp3x4XXd0Hr6tgbM5uHP1DSJjOBuB6JNZyxSE4DqKkwvFE6oizOX9GlLg62kmHe7yI%2F2EZQpjXdBTJCdeurqKN91TvkfZ7LJAaM6eBKCalYhA5oxvaoxHnz7kcBk8z5M8xddUaH%2B3ueloRBtzdFp1yOwywEm4G0Lng0m2%2BN%2FY21kdkuhTW9j%2FzLeGOyrNfrZUd8kwdCL4jfaMsfFRmW7W2Ytk82YRvXpUPWW0RgrGmBhxP%2BgdPBO54BWZba%2FCM4EsLLiv7aRxjKiFX9lCh1tV5498fCGc4dVeOCnzQC%2BmtlKTb1HfrMvlVTN%2BC0cQnVPBQnYeSlpAXZdEypK3a19fd62zkpCGQwtWLjllKTxdBoCNC7vJg0OYs0zEDb0wdIikc4ylI089ICjFaeXQMUnBQIAMo9JRxpij9kAR5D5WDkT%2FeH9%2FRwdiTQ2U8DBAVbrn5zlWGm3RxGgkM8anFC%2FbmOXjMvlPaQukNlgZ8%2BUesSHAMNBxPMvY4KTMOT4p8kGOqUBPYXcik40lAWd004K%2FEJcKPjj8PgljmTjN%2F4qADxKFAULnVGh0o226XJmuK%2BN5Zsr3TIQic41sFQhSY%2FtX7U4VceaqX1CjiX3VePw%2F6EwAFlLR8PcwDBnzdk39cJ8xC6tmsZI6TeLc%2BPDRbfYgwUNtrqKbvDJ7aVNbEtwRDcaJABfhlnbOxoOB61FTrmlDoelvtHNFdEsP8T5PcHDvevs7QhQfE1t&X-Amz-Signature=948510e92b3779750bed20b6857dd44a1d520dae4a5f138507f4c5679bbba8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3MVXMQ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn5Hvtw663QqJ2d39%2Fj%2BWbajipjRPIuDsLOqB52WURNQIgHJZGq9tsvvaWnrFM0zZmFihU0qLFT37PjEn0%2BPcPRYYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbikxbnxDXuhGqVYCrcA8TSzRym%2BVBpDE966cgvrvld7Sby9tck9RT3Fz6EoYYU78zGJlq%2F%2BdJ5exVcx16rZhTKI0i95doMhlru4253X5iz67MEHKVRyanp1hrLgqqyq3kVKlGzUvT7TcF4q49GbQNpC1FanZDWJlxB55KVrch8go4%2BmmDWm%2BoItTud%2FRa0NFtaSGFVbdUNrEV7slMNtJa%2BRki80ROSnlfuXbKC13lfS9nt%2Ffz8WOpVaSXxw95eqrZ4ruqf6%2Bv8mqXbpGr94ZUTgS53cYXUC0FV3Dq3MTDtMSJ82fMssLGQii9YM4YtsVdLMt22EtQHNTMSD%2Fj306Th4t3WypeuMu1gIC6mwzmmlv84nxdi4cKmcyRy8tCIF4CJYQTbajXatu2PWZ3ZMqf3jJmBjsJdM8iqWAgJ5zTkBxLpmtu1YsgyIC0K31CEFEe%2F%2FfjZeMN4oj2hvvo%2BVHpCGxQHK78eO%2Fkwt4yJ9NJ5X5du2vbONyeOSjUReqRwTFq4UYpuEqB9Yz2hfa%2FUdiqOfOWFRXI53wtVyrv61HRicrB23oCCKANGXzBKiBv3nVyPLxNVaeUN%2FuxMSdMg7dSY9gVP10%2Bb5fBIUk0OTaoJEwckv2bt8cjtFIHUbMKg%2FjrUgBOGMenlPtZoMIv8p8kGOqUBaUYvIJ5LlykhvO9dR19gmLxw9U6Ewg5xpU1g10zeEYkl190rTJqof5GzquzJmB%2FmUtO4GHaC92d633gTnsmhlChNK9ip345vRNouCoUtTCLO6F%2BZQV%2BGeKptlywFLDDUgMJE%2BIXJcl7Qx%2BjrMpsKNKMRTCTRbJDV5d7C3frOoNPCTet99X3JblSKkh9WrvgmtnTydjp9l3z5RcdhYORlyoTAi%2BmY&X-Amz-Signature=bb1688c943254402206ca1b69f198bc28dbad07197f9cdeb8dd4cb3c4a3e67fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
