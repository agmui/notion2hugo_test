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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY77Q3TQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu2kbMDBpiKC%2BjAdvlNnu16v0XKfcvr25N5ILFltEnhAiEAwfQThiea44zdIWxoEsE%2F7Ti4A6xFoFYEaWCMfGZ1gKAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBQFkoWuoWN8YvKKdyrcA6mr7RII%2FgCuRGbOo5lDXZrz1ahvzwVXRA59dRj6TEEe78LureXvsHMwwGd0D2Ie7clxAg4VFzTR%2F7bg9Jiq47VHhxu3aCyzvHlfEJ367ObPgAOQjbfzZEA1z2OnQWbnLgpJOWuWWgyvvGhunW7Yr76aGaLUltCG%2FJOFroXyF9n7Ialtn4NnFOuIROTSKhmD5T%2B91FK8z8H4hSacXSkpzGZSjtRI%2B5VIqSEHoH6b2TcBBzKypKHUXZawEzU4wcNJxlcYBAFDSgwXFg8O1TuIZ3dpozg79QU7sXICTTNN5HNZRGK%2BpFDQdAJvLApgkf4uhMM3E85LKH%2BDWBYDkR1tH263x0PiTQG8eaZUgJpx8mTxmCWx8C3VRaqmb7nSULqsAVIODkSQxI%2FXXvEm6sxM8TF91w9z9EjwePvRAQV%2FdwE6MB7hs7lamiMZiLoalwDrPc%2BXs5hZ%2FS3im2uo4%2FrlU46MouqL9WQer275gCanoMXrAlH1aqLqaipozNZrb%2FzSSMJncPCGrtlKH1b0uPrf3htslb53mg2dOiUxfyNfRkzcDJvuFnSW6JTj7wQBbBe2KVo5sT42FGoMhxL52BUtTGFmjaIIijjaIdFed%2FPPOh91pByH%2FwTpQELLiXh2MJbsr8AGOqUBdi4uFcJGHLBUItB56Ls%2BTLlethbd7NyrmOjik9EAEI5C4Q61gmpQI1NMOn5vBvvsQ07OLiqLMa18s5BMWfsyDuc%2FE2ElWsKSA5kLDj7iM1A%2FD2lXljAWohzDR4HQQQNhbt247jPZKD5QgtHnex4Isqf7t9bbmdAWaqwHLOG5ILKwnn3G0F%2B48WmQvn5YLiyikhTKuCARyMRbyw02k3n9GWbfdCOz&X-Amz-Signature=c223835490671eb76292ba8534f0af95c8c1b5a2f4be031406cd57f6e3289baa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY77Q3TQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu2kbMDBpiKC%2BjAdvlNnu16v0XKfcvr25N5ILFltEnhAiEAwfQThiea44zdIWxoEsE%2F7Ti4A6xFoFYEaWCMfGZ1gKAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBQFkoWuoWN8YvKKdyrcA6mr7RII%2FgCuRGbOo5lDXZrz1ahvzwVXRA59dRj6TEEe78LureXvsHMwwGd0D2Ie7clxAg4VFzTR%2F7bg9Jiq47VHhxu3aCyzvHlfEJ367ObPgAOQjbfzZEA1z2OnQWbnLgpJOWuWWgyvvGhunW7Yr76aGaLUltCG%2FJOFroXyF9n7Ialtn4NnFOuIROTSKhmD5T%2B91FK8z8H4hSacXSkpzGZSjtRI%2B5VIqSEHoH6b2TcBBzKypKHUXZawEzU4wcNJxlcYBAFDSgwXFg8O1TuIZ3dpozg79QU7sXICTTNN5HNZRGK%2BpFDQdAJvLApgkf4uhMM3E85LKH%2BDWBYDkR1tH263x0PiTQG8eaZUgJpx8mTxmCWx8C3VRaqmb7nSULqsAVIODkSQxI%2FXXvEm6sxM8TF91w9z9EjwePvRAQV%2FdwE6MB7hs7lamiMZiLoalwDrPc%2BXs5hZ%2FS3im2uo4%2FrlU46MouqL9WQer275gCanoMXrAlH1aqLqaipozNZrb%2FzSSMJncPCGrtlKH1b0uPrf3htslb53mg2dOiUxfyNfRkzcDJvuFnSW6JTj7wQBbBe2KVo5sT42FGoMhxL52BUtTGFmjaIIijjaIdFed%2FPPOh91pByH%2FwTpQELLiXh2MJbsr8AGOqUBdi4uFcJGHLBUItB56Ls%2BTLlethbd7NyrmOjik9EAEI5C4Q61gmpQI1NMOn5vBvvsQ07OLiqLMa18s5BMWfsyDuc%2FE2ElWsKSA5kLDj7iM1A%2FD2lXljAWohzDR4HQQQNhbt247jPZKD5QgtHnex4Isqf7t9bbmdAWaqwHLOG5ILKwnn3G0F%2B48WmQvn5YLiyikhTKuCARyMRbyw02k3n9GWbfdCOz&X-Amz-Signature=8b8038da9909abe91f60a00943245d5dc25f4d15fec28bec8d3295c71485cfba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSA2GWT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7m0Oq1EvJVg%2F21m26r9Z5xk%2FA9UQkBA%2FXrdYY2HbVwwIgPa8pvAj%2Fo9fjkSlto9pb5aXAMIuVkh7VRRaD%2FrzOWVYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLKMbHhu5P5BGRsOxircA7tg6e5YGfxk1OvOCkcd9Ij3AoakXDoF%2FdHElV%2BhZvDYG1QN45bxeNgQWsJw2HuMyHkmHzfRqBOEGqsNAJw85pmU9c%2B9grzOeMjBb5e040zkwtH6OEJEho5mc%2BJi5Xu%2F7by6RbZetQpNTnsRDhMlmcxiDh%2FzDM1Rxv6n4iNrWjqsHh8cCvYjVUo5AHizNwq2q%2FI5zXkzdMASTiSMmTbliUzCDEZXqOBT9cpqHI9JFnL6sJeDCtbvGYmEDBqhIXKQ2%2BCn1VpLbFTE4IEvmXEz6WGr7Fb%2BxZH6OZWFaogdTQ7SzsH%2BqtBEl4yVSK55XGHBgjBG%2FSJ5SXuhHf0JA%2FqHwxGR2XIZhQGTmEvNtdcoee1LCCW8ilBKFtcgGpge0asKQPg5upmyo9fyg9n0VPCWBNCWvwz3DNLsQrVtkTCd%2FzSzxXGa%2BexkPcwcKLhTWUl4%2B240YAa3vLeyAk1SWofXWlg%2B2Kibfn8rTbCQFZBTj56n%2FAYTs16HLqgCdBNkhUFAFrdYh7agJJoT36R39CC9wXQGwfQX57jeKW%2BsSxrt%2BWWhEdBBkwdeteBt2SHBlL4bHWSN1%2Fyug8kEF3ZV4vl4%2FeMbehJNnUPclbzNdUAzYxG64Aepgp0sS758MgK8MJbsr8AGOqUBChdAYJeIlYcPFbQXyBU5YKTx7azIoITdPys0LMcW%2FDfLc7XO636UA3cgQIoCAjZzcpB0BTpu0%2B30JW1MgNtK055U4vJz7QuILNGTnycE%2FfpT5tiutSDRFq3rJPwPwzEM3thnuFqXkvCpe0FAeY3q8JprVyX8q6n%2FMVoNNlq%2Fofr5j1nrz6MEgg0L%2BuINar%2BNyCzZ3H20PqV5q4nFymBscj8SnT3J&X-Amz-Signature=83d439869cc73e918391f22464d094aa6d6888769198030128ff2489d1cf1aba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKXNGU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBX%2BITbxQe0RxzxcKB9QuNZsbFPQ3bBBvpsZ1v%2BKQ4gIgNjyeE2VQF12L9H9zTMuc84W8zxrn7b1LF6xyUSE6KBYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDClmHAnFpiyBsNk4BCrcA3vhy%2FJowzjsDSyiQwu3EXSeiF2xKXo7QpYkBBgvfSmmHIzMfpIc778qmRNMiKuR9bp5o9E0VAGo5V%2BBvdUpbuUByfGTDjfCiYKU%2FbUu%2BkfJtA2u85guSqRmgKpS3Lt8b2teNvjuj1m4%2BGf77Yi1VMn1xyRJP8dI5O%2B7BJryFrJxnPs1x1Co6gq79cL5RJxhOoR8KdfMDZ2%2FCaL57dJcSBBeMhtaA9PUqLOwWXxjsTRlAsQYXmTGL7dTjqMKy9KvImfFkrkmE1CAOe0Edjf9RXDGAES0rawObG7qpZIqPGySSHUG2x8pwwhGpI%2FqxFZNLy7wovlc7rsLn%2BLzw%2F9vpewJSCyVNPtlc0k%2BI5rDnMwdjC1g0J3znDBAY1LQa%2B%2Fr6z9K%2BBRwrRKQPHCtfxxEsOJ1uC%2B2VFvxGU8WnmOL2lNxGf3kGNhTM79Isz6zRTm3oEvo67hEKT%2F5eelEAKfg%2BQ1qkI4g7IFfUwF9Xlj2lBF5Myv6pnuxpg%2BSsJuwizahxxYYkNbPUcjAOzNKjyEuo3E7zVl8sy47rZtNzJTzGNgtQTi4Y0w9N9%2BqZWi38ZhGtOH2iuFhW4trvgBEPK%2ButCKSjqZIfnTn7eZXE%2FS%2Fq5jjEYkXVgwasciqGwEIMN3rr8AGOqUBDkLny3%2FPSbMeXvl3CxUfaR4NHGRWFdkHNuQNB%2FsgtHRsw2miTAb2oZz5KwkverrYqZ11%2B46A0JbTbyTTzxgBMlchC4KOr6apVxJMVYxY1CY9Epw%2BnEqYIlrsqaSkp8gIiW32BryymGgmo6FNbj699y7P%2BwNSFjkw%2B9BSEcGPsdefU2H7mCOeyYTuZx2%2FA9FBIL4g%2BsuFHojZNtuAclnbPMlavFnf&X-Amz-Signature=e311f5841d448bfec0d4cf041d9b14ade83be76e8076199d5840c2af1d4d7b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY77Q3TQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu2kbMDBpiKC%2BjAdvlNnu16v0XKfcvr25N5ILFltEnhAiEAwfQThiea44zdIWxoEsE%2F7Ti4A6xFoFYEaWCMfGZ1gKAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBQFkoWuoWN8YvKKdyrcA6mr7RII%2FgCuRGbOo5lDXZrz1ahvzwVXRA59dRj6TEEe78LureXvsHMwwGd0D2Ie7clxAg4VFzTR%2F7bg9Jiq47VHhxu3aCyzvHlfEJ367ObPgAOQjbfzZEA1z2OnQWbnLgpJOWuWWgyvvGhunW7Yr76aGaLUltCG%2FJOFroXyF9n7Ialtn4NnFOuIROTSKhmD5T%2B91FK8z8H4hSacXSkpzGZSjtRI%2B5VIqSEHoH6b2TcBBzKypKHUXZawEzU4wcNJxlcYBAFDSgwXFg8O1TuIZ3dpozg79QU7sXICTTNN5HNZRGK%2BpFDQdAJvLApgkf4uhMM3E85LKH%2BDWBYDkR1tH263x0PiTQG8eaZUgJpx8mTxmCWx8C3VRaqmb7nSULqsAVIODkSQxI%2FXXvEm6sxM8TF91w9z9EjwePvRAQV%2FdwE6MB7hs7lamiMZiLoalwDrPc%2BXs5hZ%2FS3im2uo4%2FrlU46MouqL9WQer275gCanoMXrAlH1aqLqaipozNZrb%2FzSSMJncPCGrtlKH1b0uPrf3htslb53mg2dOiUxfyNfRkzcDJvuFnSW6JTj7wQBbBe2KVo5sT42FGoMhxL52BUtTGFmjaIIijjaIdFed%2FPPOh91pByH%2FwTpQELLiXh2MJbsr8AGOqUBdi4uFcJGHLBUItB56Ls%2BTLlethbd7NyrmOjik9EAEI5C4Q61gmpQI1NMOn5vBvvsQ07OLiqLMa18s5BMWfsyDuc%2FE2ElWsKSA5kLDj7iM1A%2FD2lXljAWohzDR4HQQQNhbt247jPZKD5QgtHnex4Isqf7t9bbmdAWaqwHLOG5ILKwnn3G0F%2B48WmQvn5YLiyikhTKuCARyMRbyw02k3n9GWbfdCOz&X-Amz-Signature=ec2160c72e5116f2b46987febcf68760149b8559d1ee6e48946f51c4dd5b232c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
