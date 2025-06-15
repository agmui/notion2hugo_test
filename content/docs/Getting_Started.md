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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXJA2X5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFmNZC%2FUU9yzGSrAuSmIgSAAKSNZqPZLHwoFjENX7dx2AiEA7LY7fQ8n49GceBJTieLW8I%2F0RAWgRxxvfbT4vZb2PuYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLXUbMI2xJmz2hhQFSrcAwnq4l5RHijnauJJbNGDtpVNhnAALP6t6NZzLqsaMTbQNwxMZW9P2jIHqTajA1ZK1wA%2BYMmw%2B2FXnI%2BQFLtSxWJmnP8X%2BBmCbtld9dwYCKCPLfE8w6cKYnvkkfJrk2sQU3l4tfoDWrqqZW8ngmbPV%2FPOBlAffCxtunveGZ9oGOvzeiZWCLIKZ45wuNewc3qAgyMmh50u8whm8SmCR%2FHfWtHDrEnXHmxyWr4uXY9FjxghKSHRWDnqCdGX2M7GVJa1AEJoz4dVyynHys5nnLTrFPK4dTltv7bHF2UGexTVAnXsoWNxrt4eS4vc4%2FZABSvgDHgOYiJtf%2FCx%2Btvc2hmY1oFOd7hlzhC5P237bJRvBnNyzGw5yJt%2FvFb7bykxrKAHfJBjTYQ%2B3qZJZpIL6bVbFa9B%2BXooetAH2pTQpIhalIHPt1Y6XzR5dPjxx6kn%2B2ECW1uYBTVuYsbUtF7Xc3bhYr506P9wxE2gE0YJ%2FcYTfckPrtGlbm0Xs8%2FaxtXsOnoRlaZQAFDfyZBL6R2nl1KHigtHKQoyE1g%2FHGHr3QpbFVNrmUOkvAF3xXnJ26NyxgG5qDyLHo6vIHTgAYkwSr2tIe%2FkE%2B%2B6nP8YOc2ME6d6hcNDlmEUCpHZrMlwcQ4VMNjOvMIGOqUBbSV6U4RfLBxpOehWi9Z11mq6PiyNo2LW737AN9r7KHlj0wIMReBhtAJon9%2FDOyYGgP0PniV52TO%2F1Z%2Bcf1ITCUPxXDQ3VYxbAmB4Tp8caNfyXvkmSNd6GqdjHm0NGUjmLqEMob34hHp4fRhH%2BfG6tJblRDen7tnYVy5d3DScAzSLtutIyYUU2az1yuBNjBv5WteghwdEzdZEvzyJTO2tacjuxivR&X-Amz-Signature=9ace4426aac7b5b0801b6d73eb0bc399f3abdb7d7e5bc63ba4a8eaac758fbfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXJA2X5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFmNZC%2FUU9yzGSrAuSmIgSAAKSNZqPZLHwoFjENX7dx2AiEA7LY7fQ8n49GceBJTieLW8I%2F0RAWgRxxvfbT4vZb2PuYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLXUbMI2xJmz2hhQFSrcAwnq4l5RHijnauJJbNGDtpVNhnAALP6t6NZzLqsaMTbQNwxMZW9P2jIHqTajA1ZK1wA%2BYMmw%2B2FXnI%2BQFLtSxWJmnP8X%2BBmCbtld9dwYCKCPLfE8w6cKYnvkkfJrk2sQU3l4tfoDWrqqZW8ngmbPV%2FPOBlAffCxtunveGZ9oGOvzeiZWCLIKZ45wuNewc3qAgyMmh50u8whm8SmCR%2FHfWtHDrEnXHmxyWr4uXY9FjxghKSHRWDnqCdGX2M7GVJa1AEJoz4dVyynHys5nnLTrFPK4dTltv7bHF2UGexTVAnXsoWNxrt4eS4vc4%2FZABSvgDHgOYiJtf%2FCx%2Btvc2hmY1oFOd7hlzhC5P237bJRvBnNyzGw5yJt%2FvFb7bykxrKAHfJBjTYQ%2B3qZJZpIL6bVbFa9B%2BXooetAH2pTQpIhalIHPt1Y6XzR5dPjxx6kn%2B2ECW1uYBTVuYsbUtF7Xc3bhYr506P9wxE2gE0YJ%2FcYTfckPrtGlbm0Xs8%2FaxtXsOnoRlaZQAFDfyZBL6R2nl1KHigtHKQoyE1g%2FHGHr3QpbFVNrmUOkvAF3xXnJ26NyxgG5qDyLHo6vIHTgAYkwSr2tIe%2FkE%2B%2B6nP8YOc2ME6d6hcNDlmEUCpHZrMlwcQ4VMNjOvMIGOqUBbSV6U4RfLBxpOehWi9Z11mq6PiyNo2LW737AN9r7KHlj0wIMReBhtAJon9%2FDOyYGgP0PniV52TO%2F1Z%2Bcf1ITCUPxXDQ3VYxbAmB4Tp8caNfyXvkmSNd6GqdjHm0NGUjmLqEMob34hHp4fRhH%2BfG6tJblRDen7tnYVy5d3DScAzSLtutIyYUU2az1yuBNjBv5WteghwdEzdZEvzyJTO2tacjuxivR&X-Amz-Signature=c2d7d53188776ae252edcafe6c5b6b206d4fd4824bf3738d330e23ef35abbdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXJA2X5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFmNZC%2FUU9yzGSrAuSmIgSAAKSNZqPZLHwoFjENX7dx2AiEA7LY7fQ8n49GceBJTieLW8I%2F0RAWgRxxvfbT4vZb2PuYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLXUbMI2xJmz2hhQFSrcAwnq4l5RHijnauJJbNGDtpVNhnAALP6t6NZzLqsaMTbQNwxMZW9P2jIHqTajA1ZK1wA%2BYMmw%2B2FXnI%2BQFLtSxWJmnP8X%2BBmCbtld9dwYCKCPLfE8w6cKYnvkkfJrk2sQU3l4tfoDWrqqZW8ngmbPV%2FPOBlAffCxtunveGZ9oGOvzeiZWCLIKZ45wuNewc3qAgyMmh50u8whm8SmCR%2FHfWtHDrEnXHmxyWr4uXY9FjxghKSHRWDnqCdGX2M7GVJa1AEJoz4dVyynHys5nnLTrFPK4dTltv7bHF2UGexTVAnXsoWNxrt4eS4vc4%2FZABSvgDHgOYiJtf%2FCx%2Btvc2hmY1oFOd7hlzhC5P237bJRvBnNyzGw5yJt%2FvFb7bykxrKAHfJBjTYQ%2B3qZJZpIL6bVbFa9B%2BXooetAH2pTQpIhalIHPt1Y6XzR5dPjxx6kn%2B2ECW1uYBTVuYsbUtF7Xc3bhYr506P9wxE2gE0YJ%2FcYTfckPrtGlbm0Xs8%2FaxtXsOnoRlaZQAFDfyZBL6R2nl1KHigtHKQoyE1g%2FHGHr3QpbFVNrmUOkvAF3xXnJ26NyxgG5qDyLHo6vIHTgAYkwSr2tIe%2FkE%2B%2B6nP8YOc2ME6d6hcNDlmEUCpHZrMlwcQ4VMNjOvMIGOqUBbSV6U4RfLBxpOehWi9Z11mq6PiyNo2LW737AN9r7KHlj0wIMReBhtAJon9%2FDOyYGgP0PniV52TO%2F1Z%2Bcf1ITCUPxXDQ3VYxbAmB4Tp8caNfyXvkmSNd6GqdjHm0NGUjmLqEMob34hHp4fRhH%2BfG6tJblRDen7tnYVy5d3DScAzSLtutIyYUU2az1yuBNjBv5WteghwdEzdZEvzyJTO2tacjuxivR&X-Amz-Signature=5b52b1fa5453b45902a20ce38c3accd1865109945a2a84fd07012451b00c91b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632POBPXP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFgUs%2Bs3Zkf1A3rN%2Fk4Ttv0naEy82vM%2FIz%2Bx8jrZvaFhAiEAzqpXubZfjJVTTBMXNKeTZ8M%2BKWzywrtQzpXZ%2BBdARAcq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF72MUJQJ1gQa%2Fs00SrcA0JQOjaJNwVgw03HTChBIaMfO7QBT3FiBGWn11BbITk4JzprWVPAX7B5vQvoj%2BSkG5TPJSuEIhN6YviLdNz31MARKUEL9X0GhPOrcVf%2BVnYgmnzI2vFSw7U43RzfHGs2%2FoIQzX9OODtttoHzlTMLJ%2F1xuFQ1bSHjr0jYOgdoNvjolaSoS6LODVs4CTK5fQGfkzM99tRbB10j%2BFyWxxlIeCvEl9Us5ak%2BjT4xQIpU8xvMEmJsJwAivU2Ls5uzKKp8I%2F%2FIfWurzbp6izLIYmto4FOfLCMpqu8kNzoqLdEB8z4NdGLP6YIlTafVxMYxvBQFXRlxqZyMfu2jTHKV59DT7CMgKyYbDSzI3OtNhOr0Bk0qbdGCBxK2iCz1fGsFN7oyRe87JB8ZpDFZqui3xJE84ldG7gsxukewBou5SkM6aT%2Ftf77%2FIj%2FkJ7qCr3nxj%2FN%2BDJ2BqoxX48b5oDP0HAyR4u7OpOgpbdOJegibFJF6QVfLmVJD%2BUtwNlirkGNuIOJhgEbltBSW%2F99rxVRmRO%2FbteD5mKHh4NjmpE6uBSystyK4oRPfDRQQuZ3QcwqA48MX14PfWyu2wFtSeIviGws86O7DJJFL0%2F0ipXSOJHVXuehEGAL6AnhcNfwlQEbNMM3OvMIGOqUBpkUzxm93xyrJW24CKz%2FmTg43tmf8RfOO9sImCbVFSM4bX7hN1hCENyHEro4m96xIwpk2DRh5fn7D3xvO43npCw26RK1swU60M50iHnN3Z0qoagE3mEdo2pt19r9d676ZYzhlnBImAmqbnJR8LW1DwY82uY8BQy6ZCwEwGhX7ZVCb3Oet1qJFZlizUItauRtEXLPxyn2Ug6Zzyo7MGwIl1H%2BqjGQA&X-Amz-Signature=8726117d44b64ff77e3c151ef85c8ff2816b59e869585890ba57f2f0a0e3268c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632G3Q4VV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDZfHVeXqP1yznzQNS6ELNEMmhdWfyNO%2BqP4EKsJvpvPgIhAKGA4gspBnCjKMI4Vcog15oujsatG%2BpizKD0Wh8r%2FI5BKv8DCE0QABoMNjM3NDIzMTgzODA1Igw5RimpJVczsCgHa3Qq3AONS%2FvfoBOH0r4h75o2KHU28RtvjOC7MfBDaYKicIb732qxxI7AgdWjbFRR6qW9PlDBBJGKOtSDvSQJHcvlst0wu%2B94EOsV1Kqtw4ugTGV5hKRdMlalYONDmDrtjAu2ZgvyIPhpQ8aOWO9LP68nWaNDvctu2VGYSmaq2pCp6vod9uetv6CwC22dK4vXsHODwo7LfHJIZNb77kBj1c0yIn3v0vdUfeHb4jQTZmVVXgPXvPntyHv5hRHrBxd%2F%2BkMYkFmUDdviQAKW5Iv7J61uUlmRgWHt4Yfiybv24J3XXIfiagyjSlMYFTY2MpszCcEM%2Fra%2BPmGwNatvJ6Fhw0QdTcYQJRz2n5eBOHi2nsrXkUEWSzTfH44%2FjDa29xixoGkppvrk8qSUMRjf%2FscjZhKRdLM86LhAmd03Inp4q5tBJs2VNPYQ%2BbTC4N27DKSnsW24FjSY7or17MSJ9Vxh9q5gL7HAT6vRlWDcO2w%2FOlCsvvSRqB4McL9JnLxZmMvspOYND3P9l6G049nNfoDMxobdUQIXgYeniCvlbCF%2BpUXr%2Bk%2B0wTuzLLNGaO8KIti%2B3Q3phAqujGhaxrLtbSvbkS8aUElUGw%2BXHDDoiMQ%2B%2B6GqnzbLDSqsUIo13oQlsnnE4TDgzrzCBjqkAcBvNX%2BQt0JAhO5bGpCb9HOhrRqzaDo9GPD15%2FbkVTUbaiM3mMFxIf3txSlQMEzyXuoJk1LqMqsT%2B2Cuul%2FtLixOPHDGkCboU08y2NK2p68fNI9SZtXkpyR5r%2B3yYMffeNGi3TPk%2Bw6kZIzIkyIWT0JhguOkvnnDs5cyYKlfSoey5fhaIHqYhBBBMD8dU8k%2Bn6K4l0gNNVv5wSnOKEd%2BwaFrXe58&X-Amz-Signature=891b7af5185475b8f89582da3728afffac42baa56f71e9fc33edb5777a073201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXJA2X5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFmNZC%2FUU9yzGSrAuSmIgSAAKSNZqPZLHwoFjENX7dx2AiEA7LY7fQ8n49GceBJTieLW8I%2F0RAWgRxxvfbT4vZb2PuYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLXUbMI2xJmz2hhQFSrcAwnq4l5RHijnauJJbNGDtpVNhnAALP6t6NZzLqsaMTbQNwxMZW9P2jIHqTajA1ZK1wA%2BYMmw%2B2FXnI%2BQFLtSxWJmnP8X%2BBmCbtld9dwYCKCPLfE8w6cKYnvkkfJrk2sQU3l4tfoDWrqqZW8ngmbPV%2FPOBlAffCxtunveGZ9oGOvzeiZWCLIKZ45wuNewc3qAgyMmh50u8whm8SmCR%2FHfWtHDrEnXHmxyWr4uXY9FjxghKSHRWDnqCdGX2M7GVJa1AEJoz4dVyynHys5nnLTrFPK4dTltv7bHF2UGexTVAnXsoWNxrt4eS4vc4%2FZABSvgDHgOYiJtf%2FCx%2Btvc2hmY1oFOd7hlzhC5P237bJRvBnNyzGw5yJt%2FvFb7bykxrKAHfJBjTYQ%2B3qZJZpIL6bVbFa9B%2BXooetAH2pTQpIhalIHPt1Y6XzR5dPjxx6kn%2B2ECW1uYBTVuYsbUtF7Xc3bhYr506P9wxE2gE0YJ%2FcYTfckPrtGlbm0Xs8%2FaxtXsOnoRlaZQAFDfyZBL6R2nl1KHigtHKQoyE1g%2FHGHr3QpbFVNrmUOkvAF3xXnJ26NyxgG5qDyLHo6vIHTgAYkwSr2tIe%2FkE%2B%2B6nP8YOc2ME6d6hcNDlmEUCpHZrMlwcQ4VMNjOvMIGOqUBbSV6U4RfLBxpOehWi9Z11mq6PiyNo2LW737AN9r7KHlj0wIMReBhtAJon9%2FDOyYGgP0PniV52TO%2F1Z%2Bcf1ITCUPxXDQ3VYxbAmB4Tp8caNfyXvkmSNd6GqdjHm0NGUjmLqEMob34hHp4fRhH%2BfG6tJblRDen7tnYVy5d3DScAzSLtutIyYUU2az1yuBNjBv5WteghwdEzdZEvzyJTO2tacjuxivR&X-Amz-Signature=5e5ed08601e862b84b9d82ceb5fa7390aff34298b9788b2b247d15d0b9047cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
