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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVV3TKEM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2ApdywPin8vZFoEKkE4Z7hhbUskjz5UKHpfHbfxGEaAIgFByBx02mI9OAJFILED%2FHikyTm8TZaBDhTGfbp8DsaZsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIli28HBNckgqWBsBCrcA5Ti4LFc9wAphAS2N2FeRlPS1PAUCLzO6m8kMaqAYtahT9bJS8zKRFJBom6aCcd%2F1XG%2FLy6OXoz531GJW28mAJxZs%2BJtInKeYPCqIOf%2FrWB%2Fu%2FqPb2BM5OMm9zW1GNubwtx7pv0tbtkQM1fKgyiH%2FseDQ5JFwJREFlycfFzHVi2aWyUE2qKn9X4VWfAORH3JsbhYz5Ed%2BOuxraEGRt%2BEMI5TPKZUuc1L0tI13tT1ZOKemHGQ9u7tQ6BNw6MJGvh7YP0T%2BD3iItxITePGBTHzVwMw0SYId7MMSKneYFp2hTf4FFGXdUKig8C7BmbYr1HlG5qZRWOi0vtj28EUg%2FMHuaSSf2Jh2YpGAQ6Cxra3PA54SOZy6mJmrD%2BAIuGdriWO66SfVuBnmXcj2xMucFv7DMUa4SECnKnCJC15ZEwwgU1tutdKapyEKnSkYq5nOf6wKX2eY1baSOxQC9wkKZ4KmLzOpO4GjEGWZIsU6y2II6mJJhNQS47N%2FYj8Neo1EwtNe7CZwJ1LmaJkWfKkVrUec14gjef1kAkgFRVK09ZZUXj7Wus8hNGqwnt2D2RkkpXc7i6jORLRnPiDJDyRdVk%2Ft8itzeD2%2F0MJ0%2B0SWnaCc%2BQIvo03JaR2trgHewrZMOCO18AGOqUB1VdB3rwLhtVjC2fe4iavlqIQKYYerXYk%2Fyz%2FKUIRdTFwEICyU4Gj1R31lxqcS2wi%2FRmjtHglnlw7SGOBe8U33jUVa9%2Ftf1dHbfFX6dDJfRZrRab4y0XQIKvPBELhUehkL0hrEpyBtI0CgJf%2Fd2CZHu%2F5BGMyICLYegY8Ibrb6Wxy9gK2TTO0qH6jekqs4lM1XE3uPuuCwyOUCtVnAj8hCqOlAVlm&X-Amz-Signature=22123419fc6ba17c8f0d476d605d474c165605bdd6bd9c45c3296c0450106fae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVV3TKEM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2ApdywPin8vZFoEKkE4Z7hhbUskjz5UKHpfHbfxGEaAIgFByBx02mI9OAJFILED%2FHikyTm8TZaBDhTGfbp8DsaZsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIli28HBNckgqWBsBCrcA5Ti4LFc9wAphAS2N2FeRlPS1PAUCLzO6m8kMaqAYtahT9bJS8zKRFJBom6aCcd%2F1XG%2FLy6OXoz531GJW28mAJxZs%2BJtInKeYPCqIOf%2FrWB%2Fu%2FqPb2BM5OMm9zW1GNubwtx7pv0tbtkQM1fKgyiH%2FseDQ5JFwJREFlycfFzHVi2aWyUE2qKn9X4VWfAORH3JsbhYz5Ed%2BOuxraEGRt%2BEMI5TPKZUuc1L0tI13tT1ZOKemHGQ9u7tQ6BNw6MJGvh7YP0T%2BD3iItxITePGBTHzVwMw0SYId7MMSKneYFp2hTf4FFGXdUKig8C7BmbYr1HlG5qZRWOi0vtj28EUg%2FMHuaSSf2Jh2YpGAQ6Cxra3PA54SOZy6mJmrD%2BAIuGdriWO66SfVuBnmXcj2xMucFv7DMUa4SECnKnCJC15ZEwwgU1tutdKapyEKnSkYq5nOf6wKX2eY1baSOxQC9wkKZ4KmLzOpO4GjEGWZIsU6y2II6mJJhNQS47N%2FYj8Neo1EwtNe7CZwJ1LmaJkWfKkVrUec14gjef1kAkgFRVK09ZZUXj7Wus8hNGqwnt2D2RkkpXc7i6jORLRnPiDJDyRdVk%2Ft8itzeD2%2F0MJ0%2B0SWnaCc%2BQIvo03JaR2trgHewrZMOCO18AGOqUB1VdB3rwLhtVjC2fe4iavlqIQKYYerXYk%2Fyz%2FKUIRdTFwEICyU4Gj1R31lxqcS2wi%2FRmjtHglnlw7SGOBe8U33jUVa9%2Ftf1dHbfFX6dDJfRZrRab4y0XQIKvPBELhUehkL0hrEpyBtI0CgJf%2Fd2CZHu%2F5BGMyICLYegY8Ibrb6Wxy9gK2TTO0qH6jekqs4lM1XE3uPuuCwyOUCtVnAj8hCqOlAVlm&X-Amz-Signature=5042d4e12f3db0e09f04a4a74892c97976b6d75893b7fe41821e683dbee4a6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVV3TKEM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2ApdywPin8vZFoEKkE4Z7hhbUskjz5UKHpfHbfxGEaAIgFByBx02mI9OAJFILED%2FHikyTm8TZaBDhTGfbp8DsaZsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIli28HBNckgqWBsBCrcA5Ti4LFc9wAphAS2N2FeRlPS1PAUCLzO6m8kMaqAYtahT9bJS8zKRFJBom6aCcd%2F1XG%2FLy6OXoz531GJW28mAJxZs%2BJtInKeYPCqIOf%2FrWB%2Fu%2FqPb2BM5OMm9zW1GNubwtx7pv0tbtkQM1fKgyiH%2FseDQ5JFwJREFlycfFzHVi2aWyUE2qKn9X4VWfAORH3JsbhYz5Ed%2BOuxraEGRt%2BEMI5TPKZUuc1L0tI13tT1ZOKemHGQ9u7tQ6BNw6MJGvh7YP0T%2BD3iItxITePGBTHzVwMw0SYId7MMSKneYFp2hTf4FFGXdUKig8C7BmbYr1HlG5qZRWOi0vtj28EUg%2FMHuaSSf2Jh2YpGAQ6Cxra3PA54SOZy6mJmrD%2BAIuGdriWO66SfVuBnmXcj2xMucFv7DMUa4SECnKnCJC15ZEwwgU1tutdKapyEKnSkYq5nOf6wKX2eY1baSOxQC9wkKZ4KmLzOpO4GjEGWZIsU6y2II6mJJhNQS47N%2FYj8Neo1EwtNe7CZwJ1LmaJkWfKkVrUec14gjef1kAkgFRVK09ZZUXj7Wus8hNGqwnt2D2RkkpXc7i6jORLRnPiDJDyRdVk%2Ft8itzeD2%2F0MJ0%2B0SWnaCc%2BQIvo03JaR2trgHewrZMOCO18AGOqUB1VdB3rwLhtVjC2fe4iavlqIQKYYerXYk%2Fyz%2FKUIRdTFwEICyU4Gj1R31lxqcS2wi%2FRmjtHglnlw7SGOBe8U33jUVa9%2Ftf1dHbfFX6dDJfRZrRab4y0XQIKvPBELhUehkL0hrEpyBtI0CgJf%2Fd2CZHu%2F5BGMyICLYegY8Ibrb6Wxy9gK2TTO0qH6jekqs4lM1XE3uPuuCwyOUCtVnAj8hCqOlAVlm&X-Amz-Signature=e89aea267a22ff4a92702b3aa1a85f6ee91db7e4b5f0eb3ec5b5cc91288805fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2ALR4Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDe30%2FMjhq%2B7KP5BrRUrMNS46TPQoya1LJSzt3PALWFHgIgWRmseAkYtTOVx%2BwL12GkVOxcDISZIHnH4nUfXWGPFLMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCltSu9egi%2FqZgwrHCrcA8j1m76d1eZq%2BdocnqMgUhaCtciP1SJ4ZaVtdu%2BvoDDD%2FbC08mW8SSr1M1%2BGv4P8UEySDyP%2BjlBcNHjvOLKwQi%2F58Sw0xdHp1eX%2BcWaOwGBGJqKT9cxOp8EnYzLc7rhScPcxIr6oESE7jokyEVV5dCBlC0I%2BEkK97Y9WhkIZH%2FaUTVWW6JNiH2ZctWL%2F55NfQbsYiUJK8SVrtyjJxhTTrmiyodc2sm07Y8DfaXTx2s6WQxxzL0eaOTySUZBcvIRjcD6dnz8f2%2BLbWpqjcULn5rEtsz%2BikZzfX9rih3qluUojDr1AgmgMJF%2Bl10tHCaRqumexNieG%2BIb18I1L7zgj9POdKSOeF99QX98cTHZDEYXXeekjIYNT4ZQWIdi7qZ4GPXssn2PtQm4VhkzWFSRt%2FbT9Rhus3dqiyHaOT4yolkV35yZKqjpKONp3PmPKOT6wVTc31ktXXpXMrAa7QxSXtOU0iErKnx1XDmzpaYOpL2wDrbm9FZrA9jxWRVMsIFvRvvt%2BpZGtbZFdLpIMh9d%2B%2B4B8oP9LINuW8wpyNpwvNrp%2B4fNM5KMrJ8BT9fB8MYu8llkeiWvDMVn01CpJuS06OF7qXaivn%2BR8B29VxFsPnb6c4a%2FtM41E0YsPurzbMPeG1sAGOqUBbDt8S1FWCD6DY4TBtfPFQtSLjwtMuxO%2F3GQ0XxYzBM67zIZjRgp3Pf5b6O5OusVxm8WbVtgEcoZX15Nxp8yRo6%2FBW7CjHIj8Gaas6%2FKDYU66kNSQXIuhmCOwSqV3jsZOvwwAzn8TK%2B5GnRDmuwTH8ktNPg7LoRxf3tFoeeJRV6s%2F9KmOmK9KqyH9LgGi%2FbirGF1Dro2Ic6sDAgyG%2FeQJfCTISFU0&X-Amz-Signature=54f98921bea2494d307e34aa089b842a3c2bcf9bdf0128d4c942d733c068bf21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGSZ6GL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDEExV%2Feh5ldpAiEj%2BTJVZXn2ZKTTG0EdUvD2C6sFPVKAiA2rPhGB8XsCDdOtn4xpxcIAMFnZg%2B58Irs5eiW%2B4rR1yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiUeppWuoydTXESENKtwDD2ggz5rw5QlriKpsi63Rkq0Z%2F2BYpD970ggCGfT5mxSmBnrh%2BJkhPK0pnOjWrleirVZ7LfwgE6HvtKmfLQgpniLRFpTiOP2zGtQJi1RTLLrk923G5VmY4pL9A0gOHFj13E0xYjG4reMqxMen%2FmlxhQ36eZeiFj0shqIGXLXbSVtNYfMrG7lVGvfZcXi4qKPKG0OztF3QiJIWr8ChaL1r3n40Jv21ltBN1Q6VKPvuWrKzceAEWf0aysGp%2F8aPtPdMYVd6VZTvLLRioel0AAK5bRsvnOMuSMk6fEhSIJh%2Bex1Z0sPABwBErBM2DQH25lBFaFhu72cdnquaYpuCPPkU3OC221wYOY0D9Kjt0TY2O4yxTclPdw1L1h4XcyeAikVPxWEjzRCPWqGF9BGn5kABVvohKSEBX%2FaBJuuiSsWJgUmT%2FA8YX4MtqC6fwT8TQJSUCKs%2FfqLwG%2FkOpmWJCV7SIOgiE0lkGYcFzYp8lJ6pm1IHk2n5DG0mvSKU4AHu2pCeHfIJAtVQWf9fWzPcwLtekZ9k%2BYEX1oKXw087I1pMQgq8yUmDJ9trIhfP0wM1F3KgqVMMd69HY5CmTnEQGJrbXPpmcsHCN87Gind3H%2BlIf5mrGVKhnclhz8JPtIQwnpHXwAY6pgGdCrs6zcXa8HZZWJmi24PQbkzyyILTHZv8fNbybQTizeNwUm3yNiS6GgUHAPMaDZluYJvQULoIk0N3y7WtzQo2E2pZDGm9nK%2BWliYmsWpiBEU9JAHfSZBB1R3kr2dH5w7qvdj3GPrRA89SLNp%2BUvj2sNAkjSmcf9n9rGHSQWSvgjsHbfUpitpSSslf25g%2F06Wa4KzLLkczcL9t4sbONsRu%2FOOJAU8O&X-Amz-Signature=9a5eca55e7d8ffc97178d75660041da8afa2b8b27c98a029dd662f89a3b77b08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVV3TKEM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2ApdywPin8vZFoEKkE4Z7hhbUskjz5UKHpfHbfxGEaAIgFByBx02mI9OAJFILED%2FHikyTm8TZaBDhTGfbp8DsaZsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIli28HBNckgqWBsBCrcA5Ti4LFc9wAphAS2N2FeRlPS1PAUCLzO6m8kMaqAYtahT9bJS8zKRFJBom6aCcd%2F1XG%2FLy6OXoz531GJW28mAJxZs%2BJtInKeYPCqIOf%2FrWB%2Fu%2FqPb2BM5OMm9zW1GNubwtx7pv0tbtkQM1fKgyiH%2FseDQ5JFwJREFlycfFzHVi2aWyUE2qKn9X4VWfAORH3JsbhYz5Ed%2BOuxraEGRt%2BEMI5TPKZUuc1L0tI13tT1ZOKemHGQ9u7tQ6BNw6MJGvh7YP0T%2BD3iItxITePGBTHzVwMw0SYId7MMSKneYFp2hTf4FFGXdUKig8C7BmbYr1HlG5qZRWOi0vtj28EUg%2FMHuaSSf2Jh2YpGAQ6Cxra3PA54SOZy6mJmrD%2BAIuGdriWO66SfVuBnmXcj2xMucFv7DMUa4SECnKnCJC15ZEwwgU1tutdKapyEKnSkYq5nOf6wKX2eY1baSOxQC9wkKZ4KmLzOpO4GjEGWZIsU6y2II6mJJhNQS47N%2FYj8Neo1EwtNe7CZwJ1LmaJkWfKkVrUec14gjef1kAkgFRVK09ZZUXj7Wus8hNGqwnt2D2RkkpXc7i6jORLRnPiDJDyRdVk%2Ft8itzeD2%2F0MJ0%2B0SWnaCc%2BQIvo03JaR2trgHewrZMOCO18AGOqUB1VdB3rwLhtVjC2fe4iavlqIQKYYerXYk%2Fyz%2FKUIRdTFwEICyU4Gj1R31lxqcS2wi%2FRmjtHglnlw7SGOBe8U33jUVa9%2Ftf1dHbfFX6dDJfRZrRab4y0XQIKvPBELhUehkL0hrEpyBtI0CgJf%2Fd2CZHu%2F5BGMyICLYegY8Ibrb6Wxy9gK2TTO0qH6jekqs4lM1XE3uPuuCwyOUCtVnAj8hCqOlAVlm&X-Amz-Signature=b40e61e75e461ddf5c4ec2dbf34483c7f675a722dd2a41186fe3736d0e4c2102&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
