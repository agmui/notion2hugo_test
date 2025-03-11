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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5CKF4%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCilpUZO9%2F4k8hog%2FDqhML52EtH6d5%2FHB8%2BQoPOfueRYAIgCymNhdhSJD5DJtLVNEBZr0be6WMYKQyVk%2FF66LTsat4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F2IhhtikazoyqaWSrcA0uLA2tA6xmNBnCmVMPNeRq69kVWD7v3g%2F4kfmVNX94RUYQS0i8KOmXtrv7Oxe66G2GPVx1Yd%2FoQTXziwYURH7ElSwN20y8SrpyQ6jgyqOyYZOywMujHfHhPkQNj6AmJ1SNripSYaOprhvBgmYOBhvdj8s7%2B%2Bq5wBtYy3Byj%2B%2B1aWDKd3vXmYIKlqZ7YEuhzQVGvWl6dR9z4gKMb0EhtSSr0BK7qq9EF3u5HhsKIjv%2Ff46A6fPuYmg95veZYV2AwR6i%2Bpmo0bKGyJBnl%2BKreu3RtPJwTQCzfJ04Zm%2Bd7w7646pFzv0UJozaPRnJRO9ixkUA%2FGJN7d%2FBb478nD4dlasvzrBg0HrYT%2BxpzJ%2BxFPlg618%2FLyVeEWXPqnHu8Z4fog5FdI0LPTpcolU4H%2BL1mblZ%2BLXG4jpgFEaCLDT5hAUX8LnNPJavcqj9U5Bxchs%2Fz97F6GBeLmqH2j3pPmz4u78l2qxU43BXIEyMAmc%2F2Bjs36vJfh%2B7753vCK%2FO0xPN3mT%2FjqTNfRHMYNGl6G6qwTIETr4RAL%2FFGXkjqwK8Lyf4crEuUuidiVZyPH7Z8HmENZE70NndqW8AvOzfpH2b4ubv3rxcJpG7BdFZsrWWYOEmrxR1lvHb7rVTSbwedMKyMwb4GOqUBqLVcN6yt8YyyTttzJKkG9hokWog%2FmKN%2FP2zRkzuDwsuIjYYfPLPBzrD0OAaZ7SshBlCwD7Cud8egjL%2FRyFg%2BOmMaC7wldC3EWAz3xyD9H9mhj1Dkyty90MrOp4IkN%2BB5%2BMT6IMClh2KTE0Rt7p%2BYMbg%2F7PZFQ1%2BSIMOCx%2F5BfBXfJ5kdWdovJIGpCCGVh4dh8rmNnCI4qcW9lqy3TFKBsUhpXb77&X-Amz-Signature=5a9e380c629b1af865af1a22458bd5da24d6ad2657f186147450c5015f99add9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5CKF4%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCilpUZO9%2F4k8hog%2FDqhML52EtH6d5%2FHB8%2BQoPOfueRYAIgCymNhdhSJD5DJtLVNEBZr0be6WMYKQyVk%2FF66LTsat4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F2IhhtikazoyqaWSrcA0uLA2tA6xmNBnCmVMPNeRq69kVWD7v3g%2F4kfmVNX94RUYQS0i8KOmXtrv7Oxe66G2GPVx1Yd%2FoQTXziwYURH7ElSwN20y8SrpyQ6jgyqOyYZOywMujHfHhPkQNj6AmJ1SNripSYaOprhvBgmYOBhvdj8s7%2B%2Bq5wBtYy3Byj%2B%2B1aWDKd3vXmYIKlqZ7YEuhzQVGvWl6dR9z4gKMb0EhtSSr0BK7qq9EF3u5HhsKIjv%2Ff46A6fPuYmg95veZYV2AwR6i%2Bpmo0bKGyJBnl%2BKreu3RtPJwTQCzfJ04Zm%2Bd7w7646pFzv0UJozaPRnJRO9ixkUA%2FGJN7d%2FBb478nD4dlasvzrBg0HrYT%2BxpzJ%2BxFPlg618%2FLyVeEWXPqnHu8Z4fog5FdI0LPTpcolU4H%2BL1mblZ%2BLXG4jpgFEaCLDT5hAUX8LnNPJavcqj9U5Bxchs%2Fz97F6GBeLmqH2j3pPmz4u78l2qxU43BXIEyMAmc%2F2Bjs36vJfh%2B7753vCK%2FO0xPN3mT%2FjqTNfRHMYNGl6G6qwTIETr4RAL%2FFGXkjqwK8Lyf4crEuUuidiVZyPH7Z8HmENZE70NndqW8AvOzfpH2b4ubv3rxcJpG7BdFZsrWWYOEmrxR1lvHb7rVTSbwedMKyMwb4GOqUBqLVcN6yt8YyyTttzJKkG9hokWog%2FmKN%2FP2zRkzuDwsuIjYYfPLPBzrD0OAaZ7SshBlCwD7Cud8egjL%2FRyFg%2BOmMaC7wldC3EWAz3xyD9H9mhj1Dkyty90MrOp4IkN%2BB5%2BMT6IMClh2KTE0Rt7p%2BYMbg%2F7PZFQ1%2BSIMOCx%2F5BfBXfJ5kdWdovJIGpCCGVh4dh8rmNnCI4qcW9lqy3TFKBsUhpXb77&X-Amz-Signature=8cac252f0a6af0899f423b1c296b23ee2f66d56248d742e38077e3455f14102a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676XRNCEP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG0Tot7B2sZLFYTYCTP5u69IbL2tHsQTc2XF85EsjCOqAiBbGU9WFzG%2FCCwxCtUgwRL%2ByBAaeug2lCVMC%2FNB26pQzSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMHoq3mwwx%2BGVnVPKtwDVmXEQkdsG2NbA0Yoe1d2vl7MBnvpMdBlWSC9rP6IFdZaXE7C5tLrppOx%2FcheGTeaXTRJXNTYXOyQsC1GQbwWOy6bjLAwZg7%2FmrIeQ6DmYX7FGF1GDV10fxZFjoXTGcMgqNR71Ss%2BHJ0U55iAy3lF8R58065FKi975cB9s2wiLoa4wvPtjp0xVLYpnoGisgC2fy3NZeH6FcN9FQVz6dt%2Fs9LDTv7DT9s356c2aKHetvA8TiXBHrl9Ha8O1mep7UUx7Nx1McDl3f7LIj23iWf9RJ5ldsrdz5dbcbxx4uffBD%2F%2FHE9WcuOFZ4u0aw%2BTTe1YxfY1wTGOaot%2Fu9ng3WOVK%2F8f8KH9wvWwFf5G8B5HRPFs5bd89NkVeQpuRHiVnLTzLMIIalKhkrvjhQdr0A7lsE1pNci7WFTj%2FmU5ZFYVTKz30CEbpzWq2vxnud620T80GowkhJ9AKLTWrAA3GaUdV4yC7eQJh5GbqDHqPLvG14kgMeyP3d1x5NHxMp750ZJOjhWPAgGzWPttary4QdqwqXEaZfQ9TosZs3p7CmwoajQB1Qez7xDDxhS1knGNs9TiAae2z7xsAroXICG%2BptkSkyLNJaRaC%2BC8wZvMtdqUyBVPpcZPNBlacsq61hAw3ozBvgY6pgHunM%2BRw7tdgb9ArYv0k8UaJ5tsfDONdBARq3ij%2BM6pdvQQZnDAxvseOpik4Mtz5YfR9%2FvxG%2FXl%2B4N57EpUuPZws18hk4iY3nHfbhwyV1pMPq5w34ZgbDh1QmGxy53pDjIer7H77jX49Ujzb7p1CSmacwJf60WKQRv3IZfiR%2ByERse2DV2YNeW0RkSwqgR1Dwry9rl%2FODhSlRm0UQMi1mY058n7Lyct&X-Amz-Signature=2fe70cacf83926cde6eb7c685b9077d34361d8b6292645eb2ece7e2638a5b6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CO6MCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGNNyDdQDIRN42eFN5qMR21M1MLDOZD%2BdR%2BkuykldIN7AiA%2Baa1jbbUbE5SlIy1zyon6iz81gK%2Bq2Iizdp0gZStG7yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzOXyWnFMhYT5KNMKtwDSpNd5hju8i8350eTKe61c9OKubGeK%2BkKE2cOfXrUIJhEMrCbxxSY%2Fc%2FyKgqghDBqeArd8Fq%2FrNfMzlPbG2ivpzzZaSQBzLoSU4kYi8ydfYJFpjhnLch46kmrT%2FelfQTNKLMDBslIYlzimxvwzuZcBICRHKZLumN5tWFQBLW8RPoO3AXNKkfkD3deKnVLfU9odHdkE649P%2BRDD2pKYZD4y4%2FTb%2Bf3sDPNnUkiTEAtGyk4SZNEGW0eFd2H35HhmlWaBRRzW3d2YBMg2EENSN7fUDQuFbyzRtoiRegZJx4wVCXmDvfnDehdtVBrscu1a8GLgPjCO%2BPPpZF3Pjrv%2FIHxy9FlJ1UtkpFcyKUMmtBFR9u1nf%2B%2BeE9Wr1q6zPHoaTO6AKTaqA7VuolPZmKEkglnaLwSLpLzxxHwJqwEjO2EeMDUqu%2BrT6HZHUGwnARGg5JE3trD5fjY0%2B9J%2B%2B1k%2B1%2F4KFlLxyOL1WhuVAzke1cBf0g6mRmRjb4rKsPwCNbzUxCB9FeE0TCUNGC5VBrjslKSw2SKwjeVukqJoNA6uBuAXPJ2htKWaJRixoon7HPmZq%2FujFdbXki9NbNcJpsdUI3W6IupOKtMdKVoB4aDRTnwfgQ3gw%2FTguGH07odGjww7ovBvgY6pgEQPlW%2B6KKX1PzkD6o4VBy7q3DPlH3omZzWolEkQ5KVCU9Rxw3ojNmx9ey7%2B%2Br9BgRbIKyUA8b3YZqLvTG1NjPoT3llNMvIz7Al%2BRd1Z4c%2F9p7YsEZgdJrrunEk%2BdsZZh8ozAyjMETKtUkp5c31UTrq1Joi3EtP379IDR2sVChUKasXH0n2yw3xuMND1Qj056ybkY%2FvCbmaUrxEY4CXjj7wXzH87w%2Fc&X-Amz-Signature=862c8845fb294b6a159c323d5f245e374ca00df91b9fb96704992e0dd558f6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5CKF4%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCilpUZO9%2F4k8hog%2FDqhML52EtH6d5%2FHB8%2BQoPOfueRYAIgCymNhdhSJD5DJtLVNEBZr0be6WMYKQyVk%2FF66LTsat4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F2IhhtikazoyqaWSrcA0uLA2tA6xmNBnCmVMPNeRq69kVWD7v3g%2F4kfmVNX94RUYQS0i8KOmXtrv7Oxe66G2GPVx1Yd%2FoQTXziwYURH7ElSwN20y8SrpyQ6jgyqOyYZOywMujHfHhPkQNj6AmJ1SNripSYaOprhvBgmYOBhvdj8s7%2B%2Bq5wBtYy3Byj%2B%2B1aWDKd3vXmYIKlqZ7YEuhzQVGvWl6dR9z4gKMb0EhtSSr0BK7qq9EF3u5HhsKIjv%2Ff46A6fPuYmg95veZYV2AwR6i%2Bpmo0bKGyJBnl%2BKreu3RtPJwTQCzfJ04Zm%2Bd7w7646pFzv0UJozaPRnJRO9ixkUA%2FGJN7d%2FBb478nD4dlasvzrBg0HrYT%2BxpzJ%2BxFPlg618%2FLyVeEWXPqnHu8Z4fog5FdI0LPTpcolU4H%2BL1mblZ%2BLXG4jpgFEaCLDT5hAUX8LnNPJavcqj9U5Bxchs%2Fz97F6GBeLmqH2j3pPmz4u78l2qxU43BXIEyMAmc%2F2Bjs36vJfh%2B7753vCK%2FO0xPN3mT%2FjqTNfRHMYNGl6G6qwTIETr4RAL%2FFGXkjqwK8Lyf4crEuUuidiVZyPH7Z8HmENZE70NndqW8AvOzfpH2b4ubv3rxcJpG7BdFZsrWWYOEmrxR1lvHb7rVTSbwedMKyMwb4GOqUBqLVcN6yt8YyyTttzJKkG9hokWog%2FmKN%2FP2zRkzuDwsuIjYYfPLPBzrD0OAaZ7SshBlCwD7Cud8egjL%2FRyFg%2BOmMaC7wldC3EWAz3xyD9H9mhj1Dkyty90MrOp4IkN%2BB5%2BMT6IMClh2KTE0Rt7p%2BYMbg%2F7PZFQ1%2BSIMOCx%2F5BfBXfJ5kdWdovJIGpCCGVh4dh8rmNnCI4qcW9lqy3TFKBsUhpXb77&X-Amz-Signature=78ca3e236e0f4fe4b797ca8577332a0920124ce476f1447751e9a3090e08c873&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
