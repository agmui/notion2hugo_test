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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=169165923caa487e5f9a161205a38c6cfb664c16cee7afda78e9021d644837da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=900cc9a04272f0885a48417a01aa2ef521e697225348de3a2caf50a5e62e9837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=7b1582f0fdbbeb380bea25caef2650b6ffd291036c348f50eb8ef2bae2732443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NSNU4P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC3YGNbyfGOvGv%2F9CAXaxbyTyKqFduwtrmVsm583X3pIwIhANSVUtEQd%2FFi0ChIAVdTgbyKFHDYvSxG2mWVeCs67MmyKv8DCHcQABoMNjM3NDIzMTgzODA1IgyG9yU2bmLRhQ2am20q3AMi9KG%2FW77TG1ixXiN%2F6dedNLqpYQg136hlkaP6B9jSMir%2FQWgYHXInMzdpq0WU%2FtQaBxlYnywJwEqTwo%2BkSh5Ng33%2BSeC6g60CIZvVb76ewp1zF%2BACnCl3X5KuUAcqths3LO%2Fhb2g4N0ZCy5UylyMyOi6%2BZ4DbPDV9ljjqEwbgHCbatzItCjM4J%2BbeZNHu7TdtJ3bqHQV9rh87MNrcwQjGgHZnu2tKAd80JXIFep5onwCyGjzfM640qlzMgE%2FJtEkVttvlmiMKu%2BFa4n7lTUKaW9zurxW%2FSggHCmoeVCMvAYXBF6GbloHOZ9j1lyWyvf381f4xp0IIV4JPlr5yvJK%2Bh5VU%2B9YJKbiGoxwD0glvRYJZQQe7dP%2BqjgxX0YBWxhGkIbBSTApH6AzlWLhvSwjzTBWLsGDfy6R8YSIy8kR%2BINVqQfnAXEgZbW5UejxjgYx5bqxihF%2BqaPWL58R8qg8YIgZZdZJucUSPNYjKTpaUMcDuAupkxmqkVXutgtXFUZ4FP8lI84kYtPUvdS39WoM%2BvE2hGwDA36BnW0TfYPD4h9BXXEYZ57thJ5Qvzcvuh1nombw9JuQx2tjetftUlU3fS%2F7HhsD%2BBI2Uu24rAIb%2FnVBj%2FNiwZ5BvkSZWNDCdmILFBjqkAbtKjNvmzf8lqlsN3tQpr1f4aRRMNwYQioVZBf%2Ft0KFDYawic2C%2BPSTLpKYlgpMPmTi2dYudWnSVrrZ0iJsMVR%2FJGaADsnoccgeb51cBQJRCAbkK12nMEGgRPtW2%2FGEWT8GP6W%2BsRACwhWPTyHWRnqqTbXMEeJGriGgLb9rOSSQASsLNRO8zZaiGwKpOQodOaj76AKByzFrTvkQCFCL%2BER%2FN%2BU6L&X-Amz-Signature=b94cf7cd9d83a90e5815484bd26d19bf2c6a223367d9628784c9f35cbcd584b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXAVRT3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCHUGdSjGDEi4GQitqy7PuSSJeOpZx%2Fd9TNoxBbfGV4hQIgP66ae9q17azs3ahVF1d8L1QSvQxRMepEGfIsHmej70Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDLnd8i4vDivsOJgyCrcA32Ynp%2FXIwTssMZSOCEJ8XhOeL5zSu8QsUHP8ATexR0Jc8n9X51jG4q1GVgBCsyeYV%2F8yaJRA7CEYQAhAvtM%2Fw37S7RZDWkux56bB4%2FUYNMZZgizrXQEaqYtNPjhd2QUdB1TFtb2hPhat%2FruvoP5PFbuKh%2FjbvpPnnBbCbho%2B6w2UsZnN%2FNk7Gk6%2FUmlyGRiPOV88kmOkWpbX2v8VdumIxj1i5pdtnsrfQTaf5B08bRrE2v%2FG9LMFZpQmbyXXvD3JRvyHSnpoZxkNnBiyYBb08GB4F6sNlJ3Ya%2B4IBTCjMcvRFqWoZHCORMlhY6zyzD3hsFFdY3PfaWO6mxsLHbZj92GQ8H2kMULheru7HgBnssuAc2Q25q%2BvRzcjLf6jrkw%2FZbW9MwqTcA0a2CZrIfTWRdh6YzYYJdC1OJhZcSAxQsEfJlddH5FLOCzMqACwga4NKKRCCacKKDJH%2BfzWTzjER%2B59498iEigp41A%2B5NIikHdi8OCi9OFrQuX3hVVB2Trn%2BlHIJ1PDyGzcmus7WE52PUBznYiz8l%2Fjb7pgZ1GBeukdQdE0R%2FiX5hsPEUIlopkfeshMWmAyT8WNFTpRBS8r7Ks3ZRtoQT4bzr9qD%2FQUl7A2XwzbPSQEQseASLNMJKYgsUGOqUBzlZ%2BdpeX97Isp1BfaFgmxsERVEfCwLuqeKh55qFE3e73%2BqqvK4H3Ec9z7BTx65YcMnrBqYGDzyGLi%2Fgx4GQBbTspFnlZHPtD8if%2BKm0Sobn1DE3PCgVgmxVjaz78U04nWLJpTdEy67dZiTtzF2MOO9H6uwOVzqUbcuBQ2AOrjUVBc8qCct%2Fr1M3nkIkeaPj2aBBcyOwBtQXq25nN036pkyHnLe3%2F&X-Amz-Signature=6670fa71da93c85248cb1eac5d05befa1ec55eb79d44f8e9b07700924f162173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=e3a88cdf4b836dabf8d36108f071aebcc23ee7a23a66728b1e56e4ce964b1abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
