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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JB65LKO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGA3sn%2F41CvPpsfkPsdgaOc%2BgrI1uZDW2CF1FvXHO7ZcAiEAwXx%2FodVj7yf2rH0BV9ExDML%2FgXK5XWIUkiJB32pUzycq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLeAgArhsRyOWntJeircA7uwjuc%2BPlBixXXja3S2aG5sIc3ptF5z0NYIxsqPf4eMKlQgnUnDz%2FvpUkrLMGYYgycab0%2FlyUox4wDo8ZGQDRUPTyBDbu6K8uGp%2BC4%2FZlOMmODRKh9tcSJc%2F1AIJR7TbiOU15zrbTwlYCIbT0LUqTHxBWANi2oQONkqw6p2cQjkXQka7yPlKqUolYNDTQNY1BzwU65kNGY2Xk%2FLMBiNipZETYQ9DDVn0eAHGYQi2%2B1CzMseQiVD%2FINgyV06lKPL%2BEY1rmrXFVmWHvzMiDWkUQi0veHW0%2BVAIrKWkxGGJ9i2nZRWwiPu7KUPoA3ws0rf%2Fg%2FQ03bCXBregGu0fmQZWs2C3CL%2FZQcyzYTw9wdoaSpDqmBlUR7sD7p%2Fr3dWnrC8OxKo5Mupk7toPAmeeG3jxFiIkL9qCBzvj70n0kmr4l3PwxL8t6Q%2FhJ6nIGiM9TP%2BRz99KQo8kXhQWLTLKqybU0OjY49z8ixaUOV%2FttIYClZcJ0KNdokVgZf5X7MTmFTpbBuvJb2pUkf6iAchzNCzKo6lXbicvRgMvNPho75mM38zZUrLgkT9YO8gq3EoGDJII5ZGDiCoQ70eNda%2F7qnVD54HVCJhRVOZ01I%2B6o7HFuZPQf7su7L0Dz03exCpMN79xb0GOqUBuVhNPZT5Mjazko0jpd1HXnYkyNR3d9Ex6S0vuT7aTgrJyYkEL7K5kJpU9%2FRFA4aEFRRTUsL6tS9QS377bWWijOfIHG%2Bzu1FDW%2Fc1Xl%2FBZcS4q%2BCHShC%2FgCpGzn7sIFT0D0VK0zlQT8ESxg63b%2FCEXujxE97jEt7wNeQRKlkbfe2NprxvndqjmkdoLL%2BSmOAUvokX573NMa2xqyGTW7uMwzpDqfpi&X-Amz-Signature=183c7465643a3e7e4bd39752581b939e7e340dd2726b592d0e125587fa9bbe8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JB65LKO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGA3sn%2F41CvPpsfkPsdgaOc%2BgrI1uZDW2CF1FvXHO7ZcAiEAwXx%2FodVj7yf2rH0BV9ExDML%2FgXK5XWIUkiJB32pUzycq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLeAgArhsRyOWntJeircA7uwjuc%2BPlBixXXja3S2aG5sIc3ptF5z0NYIxsqPf4eMKlQgnUnDz%2FvpUkrLMGYYgycab0%2FlyUox4wDo8ZGQDRUPTyBDbu6K8uGp%2BC4%2FZlOMmODRKh9tcSJc%2F1AIJR7TbiOU15zrbTwlYCIbT0LUqTHxBWANi2oQONkqw6p2cQjkXQka7yPlKqUolYNDTQNY1BzwU65kNGY2Xk%2FLMBiNipZETYQ9DDVn0eAHGYQi2%2B1CzMseQiVD%2FINgyV06lKPL%2BEY1rmrXFVmWHvzMiDWkUQi0veHW0%2BVAIrKWkxGGJ9i2nZRWwiPu7KUPoA3ws0rf%2Fg%2FQ03bCXBregGu0fmQZWs2C3CL%2FZQcyzYTw9wdoaSpDqmBlUR7sD7p%2Fr3dWnrC8OxKo5Mupk7toPAmeeG3jxFiIkL9qCBzvj70n0kmr4l3PwxL8t6Q%2FhJ6nIGiM9TP%2BRz99KQo8kXhQWLTLKqybU0OjY49z8ixaUOV%2FttIYClZcJ0KNdokVgZf5X7MTmFTpbBuvJb2pUkf6iAchzNCzKo6lXbicvRgMvNPho75mM38zZUrLgkT9YO8gq3EoGDJII5ZGDiCoQ70eNda%2F7qnVD54HVCJhRVOZ01I%2B6o7HFuZPQf7su7L0Dz03exCpMN79xb0GOqUBuVhNPZT5Mjazko0jpd1HXnYkyNR3d9Ex6S0vuT7aTgrJyYkEL7K5kJpU9%2FRFA4aEFRRTUsL6tS9QS377bWWijOfIHG%2Bzu1FDW%2Fc1Xl%2FBZcS4q%2BCHShC%2FgCpGzn7sIFT0D0VK0zlQT8ESxg63b%2FCEXujxE97jEt7wNeQRKlkbfe2NprxvndqjmkdoLL%2BSmOAUvokX573NMa2xqyGTW7uMwzpDqfpi&X-Amz-Signature=26f1cf23ec4720065efd3a9f8a75a1a6765635041b8296ca393d410f0f573a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO7BWRU7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIER5UuCyl5gTuFuZ5nRjJki8Lu6hMsHVPi%2FYPNOOjFbFAiEA2D3cYyAOuVYwBYvWwIaTqiP4vnzNBBZRVDFFwLBTfCoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFpbovdguLfXE12onCrcAxAspS6NgAQrxFS0EgEce4y%2ByrDuLzsB2VBTsDQeKdMqBgpc6162LCwEd72tQKllFGKNFG79%2FbkXgsuqdNuPAJRcrD%2Fahivz2ZGOH%2FPTgTeUQfF%2FzFOsHu7Fb87IeReyBuuU6Sd8JRuQIBm%2BkRESTasFI6yJJUQvJXKc8G7XFnfbSIeffWKbTtv8FNj4NAmNFp%2BmJHfqNpBc%2FOmGogAXfid0vhxl1DunpNbmpRtIaxpTZs9PUyVoM9EE64y%2BsfR5U1UvkcscqZRI9lWFoJRrCA2OmgysFEzV3E5pbTsqxpFbAqakM8npYejMQLyoQpV%2B7BSlfV1x2KQKQ2Wqiy%2BA9oih9FSCRC7MXH7Zcjg%2BeL7YyFvRhJXDEY%2FmxNGqO4UBTHOB49cMd9ek3KE8NIjSykk3yKP4C9X7URJ%2B1ARXmE%2F1N13wgN2kYBRT6Nci4i0Dwc4YbmkhLzHV6pmKz0X%2F312sUXiZ%2B5m8FA869P0krjY4A59RbKYNTEHQhjRrW9Z6dsuj4bHVpyxVQ%2B9GktljylB7ezEA06sBqZNLWduysliKyzncSbKhpeDgt2tn1y3O8Sn37hkqL%2B5r5iJ8923%2FbTPm3Vt%2BqGPlZeDv2MgSNZdajW%2F3MYAWOX2wY%2BX1MN39xb0GOqUBmcNuGgsFBF8RjdBpJhVVdFSB50MOPdQjAUqhBdzfqgguTZCgLixYc9aMtMhQ7IYP%2F5BLZvHXlL4QO%2BNFhH0T2Rw4HDp%2FJXbrG7adYZ%2FDHS%2BGHdsnXy1jzCA3s16f7agzOmQMxXucAc8Weiva5N1e8QYuyRxHn03rlxyx%2Bkc%2Bd0X%2FKna%2F%2B2CvENhRCmiscLTHMHIwnZb2B%2FOszuNsqNl9DRqQ0Qwn&X-Amz-Signature=bc51d26022df44cdfce694e7ee50d14d4d7ad9845642eecf16c686cb7543c7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462A75V5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBUEWP58D5o3WAay7QLee4LmZ8lKH0K5pQw6rVU0F4jTAiEAuuX6zX7iFK9s9RMBAJHm%2Fj3jXnaSHSjUHrMA4jTtgGMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOBZ%2F912XiZbIeTeQSrcA54j0e8PDsfX7KKlk8LL%2ByW1FtrKphPPhI28Rj4AD6t9%2BtMWY4tLoLfQZP9B3LMVW2UJ0qJk0mo%2Fzpzj1TJvaGwOyUTdKiIYhvuNJHfML4POr%2BsQEdEHRB4RFM4LoYuanq1vt90Dj4cYl2xvxki27fIL1AvfV2L5ydBPXa7AXfmI73YyZJ07hTI2fIeRIa7%2B7eOQVoVn7cli2b1HzbggRp9JEvUBosULXABiDYIDNcOKcL9GKuKoGv%2FF2F5B3VX6D9JfSi0kNAxgCt1caFMvp3cnkRytuPmDSRHDvIrj8v6qa0Rqo5cx28dVrhLaR%2BnTkJoVFIZTzA91T6SbU6yqO5bOqK4xrXOHQkNHrVXAFZDDTmn00ujr8OEXUebW89nrU5DGjl8A0BkVZ6FDv7yw9xxDZQ6d%2BKgxYRcwUp2cpLHoux9yYbvrsOiDbnDictJ0O3sImB3SMxeKBSoZJRv2EPxg5HFBjtbBK%2FyQBG8IMhiQdxY%2Bam%2F53%2FI3iAXX2dE5b76qnHIy8MY89xJa%2FjhJjskcp88d4u3MlMZn0OLlnaLi%2FidHgHorqGU6X2qskTlvTgq44K6LlSt%2BGOUloFOBfITZs0AOC70OS3a7TrJD%2BY2nJD0UO0Kq1Ke01BIWMLz%2Bxb0GOqUBq2UokKb2MI00iRMXXgZcv%2BM2viGT%2BTXcjnDCiWzW8G6AVZ3nWTrtDmhRMzG6XqMbidBCF4PkMIQsoSMOMke2bp2URZ%2BvKZ3g0m4CqB2LH5sqLk2g%2FHauoLkF23RxWlUzXzrei1hik5EVWn6e7ve10SO2yQSCkjQlrOcqBSeL0KQeLFWhvTTq%2BH9axswMOCKHQk8LtSOFriInMYXqdq3hIH4qh1qU&X-Amz-Signature=203f2b6df127c6b0996db620678f54d3dc89b7cd8e9d6db88d572e5b90eb535a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JB65LKO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGA3sn%2F41CvPpsfkPsdgaOc%2BgrI1uZDW2CF1FvXHO7ZcAiEAwXx%2FodVj7yf2rH0BV9ExDML%2FgXK5XWIUkiJB32pUzycq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLeAgArhsRyOWntJeircA7uwjuc%2BPlBixXXja3S2aG5sIc3ptF5z0NYIxsqPf4eMKlQgnUnDz%2FvpUkrLMGYYgycab0%2FlyUox4wDo8ZGQDRUPTyBDbu6K8uGp%2BC4%2FZlOMmODRKh9tcSJc%2F1AIJR7TbiOU15zrbTwlYCIbT0LUqTHxBWANi2oQONkqw6p2cQjkXQka7yPlKqUolYNDTQNY1BzwU65kNGY2Xk%2FLMBiNipZETYQ9DDVn0eAHGYQi2%2B1CzMseQiVD%2FINgyV06lKPL%2BEY1rmrXFVmWHvzMiDWkUQi0veHW0%2BVAIrKWkxGGJ9i2nZRWwiPu7KUPoA3ws0rf%2Fg%2FQ03bCXBregGu0fmQZWs2C3CL%2FZQcyzYTw9wdoaSpDqmBlUR7sD7p%2Fr3dWnrC8OxKo5Mupk7toPAmeeG3jxFiIkL9qCBzvj70n0kmr4l3PwxL8t6Q%2FhJ6nIGiM9TP%2BRz99KQo8kXhQWLTLKqybU0OjY49z8ixaUOV%2FttIYClZcJ0KNdokVgZf5X7MTmFTpbBuvJb2pUkf6iAchzNCzKo6lXbicvRgMvNPho75mM38zZUrLgkT9YO8gq3EoGDJII5ZGDiCoQ70eNda%2F7qnVD54HVCJhRVOZ01I%2B6o7HFuZPQf7su7L0Dz03exCpMN79xb0GOqUBuVhNPZT5Mjazko0jpd1HXnYkyNR3d9Ex6S0vuT7aTgrJyYkEL7K5kJpU9%2FRFA4aEFRRTUsL6tS9QS377bWWijOfIHG%2Bzu1FDW%2Fc1Xl%2FBZcS4q%2BCHShC%2FgCpGzn7sIFT0D0VK0zlQT8ESxg63b%2FCEXujxE97jEt7wNeQRKlkbfe2NprxvndqjmkdoLL%2BSmOAUvokX573NMa2xqyGTW7uMwzpDqfpi&X-Amz-Signature=c52fe6a9a5a92ab38c8b78d07be9ffaa3b9d231b44d7f2c235493f51a201fd7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
