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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IIMIZV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCrIfsnPPP59blKndmPpm4IrIWmYj5xud%2FxFs6bql%2FFjgIhAJa4u9ct1k7DpN5Xz2ymYv74FzLbcfwWBRDc57BP8MKkKv8DCCsQABoMNjM3NDIzMTgzODA1IgztC4jt80bcExfp7Ewq3AMrtRgo6SrrJyrPUED1VU0FWJ8lZkrpN22btjiU%2FTNUxgul0C3Swjc96gBhu%2Fd%2FOKijJIL1LedhS4z3bNIoFPIDjWP%2FRzNVggwGbrgfBm6DnN68%2FLVvgB0ZvisGEHUXEwvFpoa1RrdbQ4SdctzrxS8vLYkAZ4A1%2FwwIX5S%2FVFmE0VKUJAzfSEwQ1ketLsa7wusfRaiwlNTcZ5ZD4x637IDZxwQlvbGJLzBFH9dbzmbdLXKyyCvp93XP6mth%2FySneXtQ0iY624%2FaprovcKgUSuOs0IZQPwRiuhkBW0cMbJoKVEv%2FwKSA0MFQSSKFCt3wxsyr8PIPENvYJ1gSpGHcy6xMuTaBUT4enZBD8%2FprtoQNZqEi3H9HehYzk5668PskvhcpvbF4Euj2q2E1s%2BMaDfwG7XsHmea9Qk9RoId6X2ncpPoYPVRXIhn%2BP4B7lPXOqN%2BWamJ7ysE83qTqVXFI2%2FQZyVfhsxdYzenJKePrsXuohvTT7ifHop6748L1gCGx3nyMwoPMYtyre1m7W9AUSMXihti5Cuc2TarcAhi0oOvy6UZHx4jNH15W3ojuzd2OPif44xYLJFyJnAJvOxvejVdSBdWQ6NM%2FztdEGZXyDJBtkrArkQoTy6s8AtE%2FdzC9sby9BjqkASUbvRAH3mIbhk4KTwzr5G7w%2FbSihIZw1mXB2mmNPN9gJD%2BpwZwagDklUFuSquse56fzyoDh0wO7njn0QGIuRiIWt1Una3OfGHt%2FhU6Pv5WL9kOXFJqX%2B%2Fn5i1YOTXTYuxjU7pFlplGq3381%2FzJqoGrmVPp1AP424EP1wbZFAr5bJLDgUTM58NxXfHkzafptt7y4vQ8bkEuHtJ12DIz8ZnaGkS18&X-Amz-Signature=371857ef6fd6a95c811d7c97abb8aa6b093a6af781a53b2c518f1ae7a8f30044&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IIMIZV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCrIfsnPPP59blKndmPpm4IrIWmYj5xud%2FxFs6bql%2FFjgIhAJa4u9ct1k7DpN5Xz2ymYv74FzLbcfwWBRDc57BP8MKkKv8DCCsQABoMNjM3NDIzMTgzODA1IgztC4jt80bcExfp7Ewq3AMrtRgo6SrrJyrPUED1VU0FWJ8lZkrpN22btjiU%2FTNUxgul0C3Swjc96gBhu%2Fd%2FOKijJIL1LedhS4z3bNIoFPIDjWP%2FRzNVggwGbrgfBm6DnN68%2FLVvgB0ZvisGEHUXEwvFpoa1RrdbQ4SdctzrxS8vLYkAZ4A1%2FwwIX5S%2FVFmE0VKUJAzfSEwQ1ketLsa7wusfRaiwlNTcZ5ZD4x637IDZxwQlvbGJLzBFH9dbzmbdLXKyyCvp93XP6mth%2FySneXtQ0iY624%2FaprovcKgUSuOs0IZQPwRiuhkBW0cMbJoKVEv%2FwKSA0MFQSSKFCt3wxsyr8PIPENvYJ1gSpGHcy6xMuTaBUT4enZBD8%2FprtoQNZqEi3H9HehYzk5668PskvhcpvbF4Euj2q2E1s%2BMaDfwG7XsHmea9Qk9RoId6X2ncpPoYPVRXIhn%2BP4B7lPXOqN%2BWamJ7ysE83qTqVXFI2%2FQZyVfhsxdYzenJKePrsXuohvTT7ifHop6748L1gCGx3nyMwoPMYtyre1m7W9AUSMXihti5Cuc2TarcAhi0oOvy6UZHx4jNH15W3ojuzd2OPif44xYLJFyJnAJvOxvejVdSBdWQ6NM%2FztdEGZXyDJBtkrArkQoTy6s8AtE%2FdzC9sby9BjqkASUbvRAH3mIbhk4KTwzr5G7w%2FbSihIZw1mXB2mmNPN9gJD%2BpwZwagDklUFuSquse56fzyoDh0wO7njn0QGIuRiIWt1Una3OfGHt%2FhU6Pv5WL9kOXFJqX%2B%2Fn5i1YOTXTYuxjU7pFlplGq3381%2FzJqoGrmVPp1AP424EP1wbZFAr5bJLDgUTM58NxXfHkzafptt7y4vQ8bkEuHtJ12DIz8ZnaGkS18&X-Amz-Signature=65a3ca0ead99400085bc888316952ff0c572cce3304025eb2274c57a33e37298&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLQPYT7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAswAjz8gGHCW%2F0MTXvruu7PHQbtGFzsXPaG28VUeZDTAiAI8xKHaK7cTEz2WY5ntK%2Bt%2BfS8NMZoX0ns43tjkgLFwCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMUSmb188xhIlclpcIKtwDkTmyeaBcg2E0lamGdHVc9I4EGbGoR0kmXbfkaLRZrPhMmamG9aUdRe%2Bhg4rDURba5DC2CZUIqBRwBn95L2dVnGugy%2BrutAv5F7UcciGAdGJzQdki73hlQUT7FM2cozhLWHsAcdkuSLB%2FtjGp%2FctfS4PMQB1OIdcZw%2B98OBCp1eG4ppf29SHka%2B4m%2Bx0lGHPmRnKOCKkc53jfNpfesbn%2FLslNTinNuKyQ4GSlq6LriQQu9IbnF4TkXXL%2BPygskPLb3NM1kbIL%2Fv0XIQfpuwP9e0PtQ9HflAna6a1lA6ShbASIUA11gI7B2HlwFdyUKBxEGFd4sMRudcDch1u4bfVNNCocmhC5GTjLjS33MkUgQZctNrptB57TNxa%2FmiHElJqkskK71EFIzsvGNT2sbkUMCw91YacdwY5iK48LM9kLRlV%2B4bXTHA%2BvbxgOtKTuVezqM2HV%2BafhLOFjXuBEFeX9jTICq1xcDQ86M7NbLzKkcMrkv13g8oWI0m0c9CiwN5yZqq9Q4ccp2OsG05Pqk83FQbvjHZ8FKsgA5lcPGBdyuUrhO3YN%2FPEvjN%2BB9JZKO%2FV7oGojojNrU4WG%2Bf95rcqk4jiL1HFjYEZtDKb1DBSI2sF6uZB5VaKc6alasOAwx7G8vQY6pgHNGXDPuczzE9ePoc5HUMjn8%2BmyOCWkRv8gBGCVaEetMnzMg2rfTXvzIvwKZvByR6kaxWLK4ACvf2lMbqYlHUThTFgQ4Zxf9GrhV9w2xyzLClJyOor69BYW6PlEYuPaJ4kQS27moCMTyX1nBl%2FwRpqqzMAEPdnJkx1gX8eMGVGW%2FR%2BHkq5hmSq02q%2FmPTyLpkPVNJmj0kB%2BqnQ6T7XMNM6bOi6be0ik&X-Amz-Signature=891e0e1d3db721b08bfcee9c1e923238f32b36b6eabc992e8eb57ed8dfc3d2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663COXVXVM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCnK3NpLCn26DjEBtLkHUJAiHptCxr0diPLWbpnJnnDpAIgPnHxuqeLRhKPicFgDsM1G%2BNFapfxTRXvg3oOaB8wuJ0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAh7mMrOlu9Wn6ZeGircA%2Fn3nHSbrzPxE1AZ4kiOAZaGbqxvLSUQa9O3smrjQMrsdYVY80v7mvLLi4JhFZsLLT0w5MErVbPY04jdPA5Jd52NwyqErU52tuEJGUDtpFtS%2BLE1E9onbOebmNNsZGZA2d1%2B9w%2BI9moWETXNsZwN3ZtMOUvAifxx7TvMNL1Rb5jEynn49XASmNoWfn%2ByJAvYp3ocjOTFADghQaoqVq6nv23D2T2vcyWOUP9u1RX42UstYMGkGWcKjM%2B7kUqQxa0XrY%2FFS%2BLcrbvflBgsH%2B8z5cER8AQT1hC3t2357zAge1tAHLLcGXCtTgbtfEdaz7%2BX1ezVttMjDachvVkDQUTAEXWNXG6yPNL8j7L0W8q%2BYb62m1q5zyJDdk22Amoq4PgPWoDVdtsuxeB3gpHG5MhbKbCedr8iR%2BBXi48C95cjdOR4NtTrL%2B6fJaXJeEFRvZJNR%2F%2FmCl6xG4EYyfQ83oqvl%2BtbUiYtJbI25yBjAEntVTTGsSBCKaHJ770MLwyd3Uh7h4WHqQ%2B8El15q2HKY1FyFj3qeR1WJcDgIrTccM2usJGkjOL%2BkixsOCqPz3m4k6ar6RXobIvia0IPfI9m2atHoCL0NQt9cHbzxbfrgDsejAeXKViLh2fW09cPn7GtMOaxvL0GOqUBVldu0zT3BEuCY25zpZzsgXj35kmB8HV27dKw1qUjlOCYHplVWMFK%2BLvu082LS7q%2Fs5%2Bv%2FPwlqQOfmhcPhMXhWR9MEbaQPGQ2VrAYjmk2PZEm2uGASVmJRixQQ0dFIGHtgQcrVYNrRANivEIiG%2BtaDxAFZBD8DMmBy4EF6W6ft%2Feat%2FDdcc%2FJlqu8vcsI3TyyADFFl4TrDZceRhFwqsd6u9PEpZK0&X-Amz-Signature=38d30e289320853c15dafca7f8a2166f22c79e5388015f7eb43ee1aeae6c7431&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IIMIZV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCrIfsnPPP59blKndmPpm4IrIWmYj5xud%2FxFs6bql%2FFjgIhAJa4u9ct1k7DpN5Xz2ymYv74FzLbcfwWBRDc57BP8MKkKv8DCCsQABoMNjM3NDIzMTgzODA1IgztC4jt80bcExfp7Ewq3AMrtRgo6SrrJyrPUED1VU0FWJ8lZkrpN22btjiU%2FTNUxgul0C3Swjc96gBhu%2Fd%2FOKijJIL1LedhS4z3bNIoFPIDjWP%2FRzNVggwGbrgfBm6DnN68%2FLVvgB0ZvisGEHUXEwvFpoa1RrdbQ4SdctzrxS8vLYkAZ4A1%2FwwIX5S%2FVFmE0VKUJAzfSEwQ1ketLsa7wusfRaiwlNTcZ5ZD4x637IDZxwQlvbGJLzBFH9dbzmbdLXKyyCvp93XP6mth%2FySneXtQ0iY624%2FaprovcKgUSuOs0IZQPwRiuhkBW0cMbJoKVEv%2FwKSA0MFQSSKFCt3wxsyr8PIPENvYJ1gSpGHcy6xMuTaBUT4enZBD8%2FprtoQNZqEi3H9HehYzk5668PskvhcpvbF4Euj2q2E1s%2BMaDfwG7XsHmea9Qk9RoId6X2ncpPoYPVRXIhn%2BP4B7lPXOqN%2BWamJ7ysE83qTqVXFI2%2FQZyVfhsxdYzenJKePrsXuohvTT7ifHop6748L1gCGx3nyMwoPMYtyre1m7W9AUSMXihti5Cuc2TarcAhi0oOvy6UZHx4jNH15W3ojuzd2OPif44xYLJFyJnAJvOxvejVdSBdWQ6NM%2FztdEGZXyDJBtkrArkQoTy6s8AtE%2FdzC9sby9BjqkASUbvRAH3mIbhk4KTwzr5G7w%2FbSihIZw1mXB2mmNPN9gJD%2BpwZwagDklUFuSquse56fzyoDh0wO7njn0QGIuRiIWt1Una3OfGHt%2FhU6Pv5WL9kOXFJqX%2B%2Fn5i1YOTXTYuxjU7pFlplGq3381%2FzJqoGrmVPp1AP424EP1wbZFAr5bJLDgUTM58NxXfHkzafptt7y4vQ8bkEuHtJ12DIz8ZnaGkS18&X-Amz-Signature=3f87c7d227d79eec2d16304ac7df6c41a675c4f40c2bbfea3d6ff226947828ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
