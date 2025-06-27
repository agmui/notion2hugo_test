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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4DEG3G%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGeqPGSOyZP5yAu5466nSPwxqAyZNpjUeFKOCle%2BT6KAAiB99pJyC1QtVLV9qLNUjauGEH58Fs6zd7d3LjBZKVg7Sir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMAHUiWZioVETHb75CKtwDuORGPT9RpFzIn9E48uVH13xQZzPsapH5a%2FOPMfjhwf4FmPGmRwRK3haCsFu6gF99ido1vrI6Q9GcwzqloS4gwIs1x2xZbDk1PSwbZ6Sly3rjc0j6Y9Wpie8asBTz8zve1qL4Ze4n5bLrJmrysmL6RSc7fptCQveGtBptk1bmw1TQLB1WwzGf8MA%2BTdMQwbqRJ3iffrlpjY0ja4GqXIXff7mOQkRmcaWfH4I1zVIdi6xLgE%2FrqCvjawJo0NvZYnVxmZfRtSV2JZoXBfToGldUlJhKIz80Sr%2FrBKEovMvyWL%2FQk7JmnopRKOjwZXMWzKVvHffy2pQYY7fojZ1R1mze1R45RMTR%2B8VwvOeSLi9kR%2FoqY17k9XMPlz5Mq0JCIzVNlbuttt9wbhlERUEQzL5UHUc9woizOls8Np1dY4TC%2Fk2mAIt%2FjgCY6wM%2BA2Se%2Fb2qzUxD64nWVxKQideOf1CJ87zPc3ckMemhv4323gKT3KxEMw2OZlmlVuje6dJjJ57Mb6dku82KBff5MzneIO5oLzZ81JDUnJc6gQCE2RVZ38KBce3w9o2n%2BBs7Qgt1Enx73lBrMoUYupjSQrgPI5vi4tSVkb%2F21yWDTBIKDmwwbBP1z4uXktsChYCr40Qwv6b6wgY6pgFYL0FuMuCKCmA%2FE6dBDT0nhy3XGyH6V45w%2F1W7VtRIGEy7SdcJkdpNn52VsUYhlbkyTkuouikwz3PcmVSDIL16Fqa%2FWX4dxdzcHIboLKXAMAHZCxEY2heeNG42eBhlpl8aO4DybROmrQVU3tA9oRbkTbAZ8VwS8S3wTMfiEwV141SKd39lpYCXoXBkugdle7dBsBfQ4rA%2FMbux7g4bc%2BLW9%2F8e4Ddh&X-Amz-Signature=6cd67dfd8bd2458eadc5efe48af830f749c199a1883812169de28f22070c2133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4DEG3G%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGeqPGSOyZP5yAu5466nSPwxqAyZNpjUeFKOCle%2BT6KAAiB99pJyC1QtVLV9qLNUjauGEH58Fs6zd7d3LjBZKVg7Sir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMAHUiWZioVETHb75CKtwDuORGPT9RpFzIn9E48uVH13xQZzPsapH5a%2FOPMfjhwf4FmPGmRwRK3haCsFu6gF99ido1vrI6Q9GcwzqloS4gwIs1x2xZbDk1PSwbZ6Sly3rjc0j6Y9Wpie8asBTz8zve1qL4Ze4n5bLrJmrysmL6RSc7fptCQveGtBptk1bmw1TQLB1WwzGf8MA%2BTdMQwbqRJ3iffrlpjY0ja4GqXIXff7mOQkRmcaWfH4I1zVIdi6xLgE%2FrqCvjawJo0NvZYnVxmZfRtSV2JZoXBfToGldUlJhKIz80Sr%2FrBKEovMvyWL%2FQk7JmnopRKOjwZXMWzKVvHffy2pQYY7fojZ1R1mze1R45RMTR%2B8VwvOeSLi9kR%2FoqY17k9XMPlz5Mq0JCIzVNlbuttt9wbhlERUEQzL5UHUc9woizOls8Np1dY4TC%2Fk2mAIt%2FjgCY6wM%2BA2Se%2Fb2qzUxD64nWVxKQideOf1CJ87zPc3ckMemhv4323gKT3KxEMw2OZlmlVuje6dJjJ57Mb6dku82KBff5MzneIO5oLzZ81JDUnJc6gQCE2RVZ38KBce3w9o2n%2BBs7Qgt1Enx73lBrMoUYupjSQrgPI5vi4tSVkb%2F21yWDTBIKDmwwbBP1z4uXktsChYCr40Qwv6b6wgY6pgFYL0FuMuCKCmA%2FE6dBDT0nhy3XGyH6V45w%2F1W7VtRIGEy7SdcJkdpNn52VsUYhlbkyTkuouikwz3PcmVSDIL16Fqa%2FWX4dxdzcHIboLKXAMAHZCxEY2heeNG42eBhlpl8aO4DybROmrQVU3tA9oRbkTbAZ8VwS8S3wTMfiEwV141SKd39lpYCXoXBkugdle7dBsBfQ4rA%2FMbux7g4bc%2BLW9%2F8e4Ddh&X-Amz-Signature=ab457aef3337b60579883176199d483a4dc56435e9490218295930139350f123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4DEG3G%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGeqPGSOyZP5yAu5466nSPwxqAyZNpjUeFKOCle%2BT6KAAiB99pJyC1QtVLV9qLNUjauGEH58Fs6zd7d3LjBZKVg7Sir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMAHUiWZioVETHb75CKtwDuORGPT9RpFzIn9E48uVH13xQZzPsapH5a%2FOPMfjhwf4FmPGmRwRK3haCsFu6gF99ido1vrI6Q9GcwzqloS4gwIs1x2xZbDk1PSwbZ6Sly3rjc0j6Y9Wpie8asBTz8zve1qL4Ze4n5bLrJmrysmL6RSc7fptCQveGtBptk1bmw1TQLB1WwzGf8MA%2BTdMQwbqRJ3iffrlpjY0ja4GqXIXff7mOQkRmcaWfH4I1zVIdi6xLgE%2FrqCvjawJo0NvZYnVxmZfRtSV2JZoXBfToGldUlJhKIz80Sr%2FrBKEovMvyWL%2FQk7JmnopRKOjwZXMWzKVvHffy2pQYY7fojZ1R1mze1R45RMTR%2B8VwvOeSLi9kR%2FoqY17k9XMPlz5Mq0JCIzVNlbuttt9wbhlERUEQzL5UHUc9woizOls8Np1dY4TC%2Fk2mAIt%2FjgCY6wM%2BA2Se%2Fb2qzUxD64nWVxKQideOf1CJ87zPc3ckMemhv4323gKT3KxEMw2OZlmlVuje6dJjJ57Mb6dku82KBff5MzneIO5oLzZ81JDUnJc6gQCE2RVZ38KBce3w9o2n%2BBs7Qgt1Enx73lBrMoUYupjSQrgPI5vi4tSVkb%2F21yWDTBIKDmwwbBP1z4uXktsChYCr40Qwv6b6wgY6pgFYL0FuMuCKCmA%2FE6dBDT0nhy3XGyH6V45w%2F1W7VtRIGEy7SdcJkdpNn52VsUYhlbkyTkuouikwz3PcmVSDIL16Fqa%2FWX4dxdzcHIboLKXAMAHZCxEY2heeNG42eBhlpl8aO4DybROmrQVU3tA9oRbkTbAZ8VwS8S3wTMfiEwV141SKd39lpYCXoXBkugdle7dBsBfQ4rA%2FMbux7g4bc%2BLW9%2F8e4Ddh&X-Amz-Signature=de5f67970069684834eaec7f0f33a6a2ecbd119a459b03bf2b511beb5feaae05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HMYE6Z%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCnErbPGlY92l2Z%2Fc%2BoQuB%2FDUXRP9eHfH8frCdGBsGhagIhAM9r8NEJfMTGbc7OAWRKij04ViqabZMgOuEFs5RlUry%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igydoav8fYyMGZqInMcq3APAfqqm35CARHAiq3%2BBiz0QwtCFCjAx4%2FBS6Xv72s2E7BhE1%2BwtPGnuzdEEsy%2FoUUaEKz1MuTVPU8ZnZcdLvO6GPTzC9YGM%2BjK4iE4ffOLkhe%2Fs67wNDcg82P361vWNYCjAuObgvlRnV9XU%2FzvRGukuI1e5OfpmIWIQ3N6vbVhayB4P%2BCXWVpMftxVAL8NhysnB74gF%2B%2FVFXYA0lnea4NlBj5OxcO%2BjiXheuo717fpjdBs5vI2jdIeunAGvf0ibA5PrD7D4s3kE86zV1qb1d65PA3Mjz%2BP1%2FUymLLLBMoSv25rlBkj1TkqQsK3UWo62QgIfputWUDwZ1mHigcoN%2BtkZYd5jRWr5WuW%2BLwyJDXHnCtidxSJZMgNojjiAE%2Fw4BdL4%2Fkto%2F0BXV9RKyYChOpYkkaEYjBX%2BlpWbscgpKtZe%2BaNuzPZ0fUURjEEVXgMRgFJBL2XJLfA%2BXLuOrb91MRQUxTL4UnFRUUT5QmQtfYGx4JLzpnGsAQCdw7Ww%2F1hXY0DC6N4L2qDJCXMlPMEhe0NFLCqugCgQjvWe3mUwR7s4QsHGoSIPbPf0XYFDQjJrOHj0FnKHV7LLZ7gisiNAOCBs%2BTml7kRpN%2FMXBP5AZWgilOJBqVCru6OI0SFjNjDgpvrCBjqkAb%2BGMKy04IVjRlPZn9eW65sLV8N84v2PLezU50Ag8y55KlqFk0WRVnaL3mhENDsKFcFEdmWQQ%2BrvAod43x4rNEjC5uQVqVBfZNmrBjnXyXBZz9DdyrBpz%2BK01Y95lxIzn3CWOc2oDFj%2FR5gzRhojXtdr4alsa4QFRQublhchPnCLJwwUqDQMfgNVC0hLR%2BNb%2BRcC3EjSDj4ybeNdEgh%2BJ0aSWX3s&X-Amz-Signature=a4ed0cd49137efe42e99a2c674da3c8c33002139d965aca7498e16f4d3d75b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUHMKXE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGcDwfS%2B2ReExzCRchI8spyuRlDCM3n1Dna96gXZwUQrAiEApiAyJtV03eBvrrT5MteqohWh2VDV%2FAif94q6dI60ezwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGE5ubFDc17rgic8TCrcAyTD7pQJB5BxVjhOVcW0%2BhbOCnlbLiKiNviOs5Mjq1NM8fbcCP%2FR%2BCx8cm%2FAAiw9873pY6u2WMhlBm4mSoL8aqKOUnxx%2FGllTn%2BXo4zfZT0YkY06RpzkCMnk4oRiJD96RFyfM00YJXxzvqcDBGRzow2mjKJfp5zp50Kp3k4p%2Fu4lUi0sXkjhsaGMpavAfZCRaxAh0N1FKgdP%2Fq6aUY9cjj65rdjpIvoo4qvABkkQtug2vcrJ1E52PmC1e7xhKY6%2F%2BCbQxw3agr%2Fki7vEI4MgjtGYdruRD3e6%2FAiu8SMvho14oIm36SHS38QHmoVQrrrzkSACAkM0wzzilHWsvFwake131PaxSyu2cdqvovMff4XT%2FOYdQMgl92ZCIZfcOh%2FxCpBRDj60vA71B4YpIjYqql6511sRFcHz8lGNv2JdtQiX1svngKDK4Db0X7ziouW%2BvkaaAqDaRy0vzm9pj0RZLKmTl9ueh8hFHPlFa1FZWUPWEHQcdhU8ykVQswMM3n1yzOnd0evNCzMxFWuzw9kGoLP54PBuGYlmXqL%2BZcJNm2ZUrC7e0x01CISSv5i1UP7aZCbo%2FHAaKqc%2FKougkXEJtcUXtSCrKxpYkCXiBGF7emc%2FEDBoax68oZ1GjHUsMOWl%2BsIGOqUBfcy0LiaPR%2BKYS8kaIHRVPhMpBIPg1WfMzC56G07TibJxmoX6TxNr1GPLzuyp3gec%2F0X38MHpA79gszLpf1B9nBxr0DmB7R0EvODo%2FkGEE%2BQBtJLXW2loL9Q%2FbVXyPaUkqOhp7dL8B2d%2FQIK9whdrEk%2BKyoXy69MxJgjX0WjakHpEzgCDa8q7l3zrFtUth4QZjw9D6gbY4XM%2FUOsF2CQgrS5%2Fw9nX&X-Amz-Signature=a4ce8e079db5df83c2d41d3041821103be8ae366aac7c792b0451effe370b4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4DEG3G%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGeqPGSOyZP5yAu5466nSPwxqAyZNpjUeFKOCle%2BT6KAAiB99pJyC1QtVLV9qLNUjauGEH58Fs6zd7d3LjBZKVg7Sir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMAHUiWZioVETHb75CKtwDuORGPT9RpFzIn9E48uVH13xQZzPsapH5a%2FOPMfjhwf4FmPGmRwRK3haCsFu6gF99ido1vrI6Q9GcwzqloS4gwIs1x2xZbDk1PSwbZ6Sly3rjc0j6Y9Wpie8asBTz8zve1qL4Ze4n5bLrJmrysmL6RSc7fptCQveGtBptk1bmw1TQLB1WwzGf8MA%2BTdMQwbqRJ3iffrlpjY0ja4GqXIXff7mOQkRmcaWfH4I1zVIdi6xLgE%2FrqCvjawJo0NvZYnVxmZfRtSV2JZoXBfToGldUlJhKIz80Sr%2FrBKEovMvyWL%2FQk7JmnopRKOjwZXMWzKVvHffy2pQYY7fojZ1R1mze1R45RMTR%2B8VwvOeSLi9kR%2FoqY17k9XMPlz5Mq0JCIzVNlbuttt9wbhlERUEQzL5UHUc9woizOls8Np1dY4TC%2Fk2mAIt%2FjgCY6wM%2BA2Se%2Fb2qzUxD64nWVxKQideOf1CJ87zPc3ckMemhv4323gKT3KxEMw2OZlmlVuje6dJjJ57Mb6dku82KBff5MzneIO5oLzZ81JDUnJc6gQCE2RVZ38KBce3w9o2n%2BBs7Qgt1Enx73lBrMoUYupjSQrgPI5vi4tSVkb%2F21yWDTBIKDmwwbBP1z4uXktsChYCr40Qwv6b6wgY6pgFYL0FuMuCKCmA%2FE6dBDT0nhy3XGyH6V45w%2F1W7VtRIGEy7SdcJkdpNn52VsUYhlbkyTkuouikwz3PcmVSDIL16Fqa%2FWX4dxdzcHIboLKXAMAHZCxEY2heeNG42eBhlpl8aO4DybROmrQVU3tA9oRbkTbAZ8VwS8S3wTMfiEwV141SKd39lpYCXoXBkugdle7dBsBfQ4rA%2FMbux7g4bc%2BLW9%2F8e4Ddh&X-Amz-Signature=b747db7cbad66f74bad3d11cfc1dd9c60d1beb72ca6183310c5489f4fcceb0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
