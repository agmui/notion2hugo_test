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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY3INUS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEmixnrUnlZFix%2Bc8SLmbveL%2FTdb6MrTJ33UAGqEvcMnAiB9ShJoJtY8OIoRE35cDaZ9%2FQmcZZPbTXSi0AP1gVDUdCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMp3TBTxd4pVs2u%2FlqKtwDaRuDwQ1ntxsDVbQtX9x0Mb3fxEjX30JZHKADN7QgiU0FF6Nf45kDIgFvLS7E%2F61OdhXCQmXfpwEeYIKU4gBEvdWTJYH5ZXyk7%2FWv5rqkBSqeKOMpgTYm5lryDJaLLWV6rOVQMZ7u9voCGxiKc2NmoJVLEmAVrqptPuZ9Zh0o9DOwEAo1FAe7TBZ2KWiiUZ1ICY4UMhUr8Hx0yV32ypCoCvv3WuGNP86J%2FkSMx3a6YUpJQTSgB8qoRcVd%2BIhAG%2BSc4Vj6OhoMo6JxxgoJlZqh7HDtepcADnGxmt6heUo3XLbMnA6OnIWJD6LOLI7T2K7dwKgWZtn3NSrZhG5k2iLr7GDzlcJjHTOOlcsmH2Jj3MzLTMvwbjTapbvlx4BJxywuP6s%2BnWnY5hCTIrIDDucNdwEDxKjTNNhuhqHrbLVQtV%2BM99v26bCGlU%2F2cFID1ofDYpqmsrcIQBu4PCKjhag8mYM2khPhjlWihXxZ25MO7BmWeNLqdzNzy5bxuv6WJ1Dn69I%2B7qLc7sm7dfrnJ%2FKJCFeJPIZuqU87f2C89MIR%2F9XiKQ%2F2IUl2W5FCUcZ1F74jUvHWNUS57K%2FTXiof959k53Fd1lJ5Thg7KCKP%2BXC9yqgn83LB2IE2HyxwPlYwxeGYvQY6pgFH7yKgsf7tvECyVXCMGVbPVTiQ5YWI2pCkmESdkYvYto0Zfdqnaw%2FaP02MRNc4gr4Jqh1Ip0v25DUB3Iipvoy0EkxEyLF0cTN4JJy1mbZfDDGvFUdpXuR5LWbxHFqFINAxMOtazx2I4R7cZ0M2hiBxFbU5g4pHp7s5l56IGikbj48uIQUg2IpK%2BaI4vksLs66fJTpTLGEBBtLuibhi2ittl%2B%2BzL9Re&X-Amz-Signature=11afa0b78ce15c4f040da21682242f6d5055c5c4d298824c20050a37a35fb346&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY3INUS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEmixnrUnlZFix%2Bc8SLmbveL%2FTdb6MrTJ33UAGqEvcMnAiB9ShJoJtY8OIoRE35cDaZ9%2FQmcZZPbTXSi0AP1gVDUdCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMp3TBTxd4pVs2u%2FlqKtwDaRuDwQ1ntxsDVbQtX9x0Mb3fxEjX30JZHKADN7QgiU0FF6Nf45kDIgFvLS7E%2F61OdhXCQmXfpwEeYIKU4gBEvdWTJYH5ZXyk7%2FWv5rqkBSqeKOMpgTYm5lryDJaLLWV6rOVQMZ7u9voCGxiKc2NmoJVLEmAVrqptPuZ9Zh0o9DOwEAo1FAe7TBZ2KWiiUZ1ICY4UMhUr8Hx0yV32ypCoCvv3WuGNP86J%2FkSMx3a6YUpJQTSgB8qoRcVd%2BIhAG%2BSc4Vj6OhoMo6JxxgoJlZqh7HDtepcADnGxmt6heUo3XLbMnA6OnIWJD6LOLI7T2K7dwKgWZtn3NSrZhG5k2iLr7GDzlcJjHTOOlcsmH2Jj3MzLTMvwbjTapbvlx4BJxywuP6s%2BnWnY5hCTIrIDDucNdwEDxKjTNNhuhqHrbLVQtV%2BM99v26bCGlU%2F2cFID1ofDYpqmsrcIQBu4PCKjhag8mYM2khPhjlWihXxZ25MO7BmWeNLqdzNzy5bxuv6WJ1Dn69I%2B7qLc7sm7dfrnJ%2FKJCFeJPIZuqU87f2C89MIR%2F9XiKQ%2F2IUl2W5FCUcZ1F74jUvHWNUS57K%2FTXiof959k53Fd1lJ5Thg7KCKP%2BXC9yqgn83LB2IE2HyxwPlYwxeGYvQY6pgFH7yKgsf7tvECyVXCMGVbPVTiQ5YWI2pCkmESdkYvYto0Zfdqnaw%2FaP02MRNc4gr4Jqh1Ip0v25DUB3Iipvoy0EkxEyLF0cTN4JJy1mbZfDDGvFUdpXuR5LWbxHFqFINAxMOtazx2I4R7cZ0M2hiBxFbU5g4pHp7s5l56IGikbj48uIQUg2IpK%2BaI4vksLs66fJTpTLGEBBtLuibhi2ittl%2B%2BzL9Re&X-Amz-Signature=43250d81edcb87aa243ed1fac3c55ef0d9d8fa5f2a674469a70004473f0a8157&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES4LCGP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFupHjtOIP7l2gD4NHzjuFYg7nc6WZv4i9uwSn23Sb7YAiEAxAtBWX1EWW6l44LOkCIrzBE%2F2a5LtyhUeEyJSVMWtQ8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGPjALF3faaMhD4ydCrcAzdmTfckOUBDMAUGEebVY8eZLap8YuBHRpVL1PyEvWj256fFD%2FLjOWHol7I67ENlQmox9WkTLbMf1IHViwRqq0%2B1v7Xl9iiBcTeKDxviyQYnIHo9WJoiLO2YktqGgmYTN4S%2FMRuBU1fQKzRfv%2Bj3wU5Z6taebXG0RwsxPBO3x31jTO03NUKMJbwZRPd7FofMXJG1kdPdLLy6iFfFrqjAqoaQdtNgOaxHtNbBfnhoqs1ZEAshmfytAHWXQyDvUmvAT50gKbfK6RVNXYhI4RgN888UfYSatc8MSBqSozm6D4nM%2Fd0nlwMEBGD%2F1fBOS7e2yDEMFXAmMShUcx19fP7ASN%2BtsDh7l3yU%2ByH%2BIEKxjunbsG1r3LAShTo8c0xR%2BYxyIYRs3IWem%2FTAl6zogrYno7rXimZy6tSbWLGL%2Finfa6d7cjWeL287NzCB%2FGqZEPoXDd6sH9woAZUolsuQAV2oR2xXfBbyJHaKocvTDp79DFtl2ZrQXlhWJBk1OJ%2BjJkugUkzVslimNN2HyAdVi8d0DQd8UstaSt%2B7BgGep3xwIejbPaMRErC%2Fy0AqZ2NyEsjQ0WpcjQjkNEBmBVIvud7ptJxnCV0uXlx5MwkTvXtwEbfaG5Ep9tY6FIvFj1yiMJLimL0GOqUB5X1X5Jg4SfO1VqSOknyYa%2FrA%2Fvy%2FVo5MSxs2HiMQHw%2F%2FNBcGxvkCCtchffnbnx0MbQ3or5ww%2BS1Y3FQRLqSd%2BKNs%2B6g54JBeiIni4OjrKjQb1ar3BI7kp31ktN2%2FIakoXhB9fQN1UAC7yW6RNLKRkgMpvmk6Susdz2O1zMXb4jdcGvcRCQzyn7uYYl%2B8wcjTach3JwdzWOsGvlMnMttFhMKwF04o&X-Amz-Signature=2bbba1eaafebd1a2ff6eee057b9e4446e93a52adf876930582febc54b3943fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLMOW67%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGwne3YBmZlQgTh9EDycH9TcMMpGTEz3Yuy2MWHSKavcAiEA%2Fl%2FpteChim2H9iBaT75%2FyWTyINLHO1BQmLa%2BTER7z%2FUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEgJwPL4ZE2qSFUAECrcAzd2z8tAtAwQ%2Fu9gvG7GiaDarnB0aU5ZIcQIgV%2FkNyrSdwRxuGjgkGuGZhQ%2BGsrlJuA1CmsxjtOD1WsdJUNu1MAhsmqoVL%2B00fvxal2r9SZH7ASxjo%2BJcBZLgAptiz%2BDF%2BvdSG6WNTHnS0AcPRAEfgcyHo4fl5V6ZhxxAoVKYHYCJM%2F8bssRaijYBtTvLJ4Ilsqg0Vy7laXj18IlKvY%2F1Ctatn1w81%2B5D3HOks0%2BJ9ckkYEYWwxUHVlxshZHvIcM9y%2F51cbK09eMLt4INez6KxRpnMdcCM8rHwq2Yr7FY7IzJZKqh9CtHOKlrKuxh6qEvoFkEwDzOQnBqe4c8owBIe3LC8Uu3Wkp42rm8cRCniOaA6H9iNt1x2IJY%2BCevYUSEpScfQYns0%2FmmKxN%2FuydbhXKrpRtz4wHKqDY5q6BGR3bNLmSdeCmJnFy6rpSf36DcDZIB85BaxVuaPRLw%2FxhiaALSAxOtCzKeJmzHILRKYOzdf3MhyC7ooc5p4Nq7O6WIHLSR9Wc1Z00f1w%2FJ5I8sJwB0K0Gz0cukfpsdTNf9wuloBpYkCYco59mzqvkEJtAmV5T%2FpqYT9gETSOUD1zLV3A%2BBIC4hcX%2BJ54Asqe%2BDBsrI2v%2Bwbbqx0i542%2BwMJzhmL0GOqUBrzzsPfMBVmfINF5aIFGDybBIKO1BhJSAR%2BtgaG1BXzT%2FjXpt3RsvDj71lXCiGDJSiY4JL1FIltuqyBZhF%2BsOxsaL5DIXF6bWJfNjIsc0WfVVCpjPkIi689oFiucKx7VcG%2FkejiYOfLUiX2J1gTgx8HA8grmThfWvgaNHIiwjl7Vg3apHWQZdufdrETdh60ZMcC4WQustDoDr%2B2UugJYVWa4vb4v1&X-Amz-Signature=596e0dbfab6631d663d4cf4aee08fe1a79c48df9b9898bcd74ace5b91809589a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY3INUS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEmixnrUnlZFix%2Bc8SLmbveL%2FTdb6MrTJ33UAGqEvcMnAiB9ShJoJtY8OIoRE35cDaZ9%2FQmcZZPbTXSi0AP1gVDUdCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMp3TBTxd4pVs2u%2FlqKtwDaRuDwQ1ntxsDVbQtX9x0Mb3fxEjX30JZHKADN7QgiU0FF6Nf45kDIgFvLS7E%2F61OdhXCQmXfpwEeYIKU4gBEvdWTJYH5ZXyk7%2FWv5rqkBSqeKOMpgTYm5lryDJaLLWV6rOVQMZ7u9voCGxiKc2NmoJVLEmAVrqptPuZ9Zh0o9DOwEAo1FAe7TBZ2KWiiUZ1ICY4UMhUr8Hx0yV32ypCoCvv3WuGNP86J%2FkSMx3a6YUpJQTSgB8qoRcVd%2BIhAG%2BSc4Vj6OhoMo6JxxgoJlZqh7HDtepcADnGxmt6heUo3XLbMnA6OnIWJD6LOLI7T2K7dwKgWZtn3NSrZhG5k2iLr7GDzlcJjHTOOlcsmH2Jj3MzLTMvwbjTapbvlx4BJxywuP6s%2BnWnY5hCTIrIDDucNdwEDxKjTNNhuhqHrbLVQtV%2BM99v26bCGlU%2F2cFID1ofDYpqmsrcIQBu4PCKjhag8mYM2khPhjlWihXxZ25MO7BmWeNLqdzNzy5bxuv6WJ1Dn69I%2B7qLc7sm7dfrnJ%2FKJCFeJPIZuqU87f2C89MIR%2F9XiKQ%2F2IUl2W5FCUcZ1F74jUvHWNUS57K%2FTXiof959k53Fd1lJ5Thg7KCKP%2BXC9yqgn83LB2IE2HyxwPlYwxeGYvQY6pgFH7yKgsf7tvECyVXCMGVbPVTiQ5YWI2pCkmESdkYvYto0Zfdqnaw%2FaP02MRNc4gr4Jqh1Ip0v25DUB3Iipvoy0EkxEyLF0cTN4JJy1mbZfDDGvFUdpXuR5LWbxHFqFINAxMOtazx2I4R7cZ0M2hiBxFbU5g4pHp7s5l56IGikbj48uIQUg2IpK%2BaI4vksLs66fJTpTLGEBBtLuibhi2ittl%2B%2BzL9Re&X-Amz-Signature=1bb549cfe88d337679e1b225b531fb6f653553374d61f221602d78df07a4c388&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
