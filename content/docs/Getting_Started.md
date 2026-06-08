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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEPSSYH%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuVuhPzqOdE077ClFXRn%2B7yMlAYcrlHx%2B6rr6kkOLn7AIgG22rFEiHiQ93wJz%2FChSktTG4P69J8uOAKvJ97pe0qGUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLoOYPECPLd3kv41CrcA%2F3f2qrQMnaBOtJccs8EWq5A1hm1z5KqKEF6TaOLnX96Tm1LOkYJwT8pJay4u4OSPb22JgZ7%2FMhk5BKP1aghyGfSh2WvyGxkL1t5OX0E0%2B1Ytf9jq2%2BOK1LP%2Bdp34NCW1%2Fs65KG2rqhh%2FsJBs5Tz3pQQ%2FK5%2Fki%2F%2FmV6edGJWab1DYuAdNeSnZQiz%2FGlWHeyxy6nEjl66hvZBDSeoK4khi2RmEvSpwFJOt7N%2F%2BEe7olNcZlNmetKoe5uvRx%2FzHrxmehRh%2B%2FdNbN4TnS%2FoDnqV%2FD9%2FFgD9eFD9kMfH2WkgKgMFJPZJMW0oyqjC7tSIG0KYXEnrRsRJ3y05AF4U34tqKnOS4l5%2FIuPhb0YHUUuJMc6UhOELpmVa3XDBXpL4s6qsfjXllhUXsjI4ikNgUyBvlQN%2FXJFp6SQYlqp40vjkJdAcm%2B5EsEPAn8cnDrxT1zABBjrZT02CSztl1UnmOCWZajWvaJ2Uwy4a4qfacOmDr39Hs5XyM4JhJSHAdm1aetBEqpt2eL58o5Iv7sb9ONRuM6wirhZsWR%2BUozpCT2db9cdyT%2FvfJ1EQFNjFybEhxWdFbvsrZ2pwS6l%2BxJji22NOk9YCtslRzKwKqJEQNLZzafvx5xyeBscwWt57nzQvMJPAmNEGOqUBOIXPkbNzihWjmgxfX3a9ZdNyIB5ZDPAeZE9HsHSi%2FHPe6Gjhu2f2AjiDu1SxnXWdIFFSqwMiwLGcfNQqwtyEKq%2BGRlIMWly152XkbM8ME%2BNYX78BY%2F2cC%2FZvC7d1yXOTsRzS%2BJQRpH9m7Ms650tLNMD8MCtnSLGcXz0oAuckHpQADTAVxR2MOP1xf9iuW6YgbIk%2B6heQ54ReJ%2BfAxOsqCq7K3EEC&X-Amz-Signature=96e855b41a1896777bf655d3471cced30ecc3767eb781c74a9877cfd724d9f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEPSSYH%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuVuhPzqOdE077ClFXRn%2B7yMlAYcrlHx%2B6rr6kkOLn7AIgG22rFEiHiQ93wJz%2FChSktTG4P69J8uOAKvJ97pe0qGUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLoOYPECPLd3kv41CrcA%2F3f2qrQMnaBOtJccs8EWq5A1hm1z5KqKEF6TaOLnX96Tm1LOkYJwT8pJay4u4OSPb22JgZ7%2FMhk5BKP1aghyGfSh2WvyGxkL1t5OX0E0%2B1Ytf9jq2%2BOK1LP%2Bdp34NCW1%2Fs65KG2rqhh%2FsJBs5Tz3pQQ%2FK5%2Fki%2F%2FmV6edGJWab1DYuAdNeSnZQiz%2FGlWHeyxy6nEjl66hvZBDSeoK4khi2RmEvSpwFJOt7N%2F%2BEe7olNcZlNmetKoe5uvRx%2FzHrxmehRh%2B%2FdNbN4TnS%2FoDnqV%2FD9%2FFgD9eFD9kMfH2WkgKgMFJPZJMW0oyqjC7tSIG0KYXEnrRsRJ3y05AF4U34tqKnOS4l5%2FIuPhb0YHUUuJMc6UhOELpmVa3XDBXpL4s6qsfjXllhUXsjI4ikNgUyBvlQN%2FXJFp6SQYlqp40vjkJdAcm%2B5EsEPAn8cnDrxT1zABBjrZT02CSztl1UnmOCWZajWvaJ2Uwy4a4qfacOmDr39Hs5XyM4JhJSHAdm1aetBEqpt2eL58o5Iv7sb9ONRuM6wirhZsWR%2BUozpCT2db9cdyT%2FvfJ1EQFNjFybEhxWdFbvsrZ2pwS6l%2BxJji22NOk9YCtslRzKwKqJEQNLZzafvx5xyeBscwWt57nzQvMJPAmNEGOqUBOIXPkbNzihWjmgxfX3a9ZdNyIB5ZDPAeZE9HsHSi%2FHPe6Gjhu2f2AjiDu1SxnXWdIFFSqwMiwLGcfNQqwtyEKq%2BGRlIMWly152XkbM8ME%2BNYX78BY%2F2cC%2FZvC7d1yXOTsRzS%2BJQRpH9m7Ms650tLNMD8MCtnSLGcXz0oAuckHpQADTAVxR2MOP1xf9iuW6YgbIk%2B6heQ54ReJ%2BfAxOsqCq7K3EEC&X-Amz-Signature=12c0523576902f6db03df0834987eb55245bd007b197429debbd1867b3972403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEPSSYH%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuVuhPzqOdE077ClFXRn%2B7yMlAYcrlHx%2B6rr6kkOLn7AIgG22rFEiHiQ93wJz%2FChSktTG4P69J8uOAKvJ97pe0qGUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLoOYPECPLd3kv41CrcA%2F3f2qrQMnaBOtJccs8EWq5A1hm1z5KqKEF6TaOLnX96Tm1LOkYJwT8pJay4u4OSPb22JgZ7%2FMhk5BKP1aghyGfSh2WvyGxkL1t5OX0E0%2B1Ytf9jq2%2BOK1LP%2Bdp34NCW1%2Fs65KG2rqhh%2FsJBs5Tz3pQQ%2FK5%2Fki%2F%2FmV6edGJWab1DYuAdNeSnZQiz%2FGlWHeyxy6nEjl66hvZBDSeoK4khi2RmEvSpwFJOt7N%2F%2BEe7olNcZlNmetKoe5uvRx%2FzHrxmehRh%2B%2FdNbN4TnS%2FoDnqV%2FD9%2FFgD9eFD9kMfH2WkgKgMFJPZJMW0oyqjC7tSIG0KYXEnrRsRJ3y05AF4U34tqKnOS4l5%2FIuPhb0YHUUuJMc6UhOELpmVa3XDBXpL4s6qsfjXllhUXsjI4ikNgUyBvlQN%2FXJFp6SQYlqp40vjkJdAcm%2B5EsEPAn8cnDrxT1zABBjrZT02CSztl1UnmOCWZajWvaJ2Uwy4a4qfacOmDr39Hs5XyM4JhJSHAdm1aetBEqpt2eL58o5Iv7sb9ONRuM6wirhZsWR%2BUozpCT2db9cdyT%2FvfJ1EQFNjFybEhxWdFbvsrZ2pwS6l%2BxJji22NOk9YCtslRzKwKqJEQNLZzafvx5xyeBscwWt57nzQvMJPAmNEGOqUBOIXPkbNzihWjmgxfX3a9ZdNyIB5ZDPAeZE9HsHSi%2FHPe6Gjhu2f2AjiDu1SxnXWdIFFSqwMiwLGcfNQqwtyEKq%2BGRlIMWly152XkbM8ME%2BNYX78BY%2F2cC%2FZvC7d1yXOTsRzS%2BJQRpH9m7Ms650tLNMD8MCtnSLGcXz0oAuckHpQADTAVxR2MOP1xf9iuW6YgbIk%2B6heQ54ReJ%2BfAxOsqCq7K3EEC&X-Amz-Signature=5052f3ebc3faae346f6db614cc22dbc3ba13f408f85733170f6d091b5c304265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPSKDFW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBshmtxh%2FDQGD1M129nwDStabL%2BUQfKIuz9CX2bXapdgIhAMv0JFjnpEpsJLlTs7%2F52IoVnyA0uUyhu5rMV8Yat7Y%2FKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiTH751KLVQARGslgq3AOXeOM3yWo3KBQdpVPsAC2cbWf0UtqSoFUotDl13FpQlH6%2F6svrUAcT%2FomYo4F6GEjZ%2FDty7EsdZPe6tQNiKPx0RF7fyeCBlv48OMycwQnzrVv6xMUkHof1bH9tuyi1Xgbz0kSf8mDfa9IBNID8vTcpijizSJEZ7gxRbyCW4VKMmQ1c5MzLj6Yiu4R6Xrn3fWOt1iuJLUDJkcHTSKJK%2BKxUiQcLzTUYISGt%2FEtstkaCGeSxWpW%2FGMAm1huPhrTLKdTptBamDMsX1KtNgjHFtj9GwjzM1LlyH0VHMqbv4B0zDcWLnkUft7zMN8GqTly2RSIUGQCIB4bc5nZTQfcx%2BsstzBbREypxuEBb1qZiHV7tXJVqa%2BL3bR9C3%2FguGlEu9UpQNGR9kPUkyHxsI2cRgSPjZWhhFRTFVcFa0cYWt%2BPTjHsyR8ibUpe6e7G0b%2FfhhL1VEc65ZERMq6ei84pql6cznfYl1Xnj4y83n%2FeEDNOUSgFiw0RLA95zyk7dSbA%2FGy5AAm%2FJ3kiTNjLaZbvkZA4nB8JOlLWddjT6%2B8L1vCRtOaJ6WxOzWuiNC6OJFW%2BbDPS%2Bm5ocm7KU%2BC2Ce8H22OrokE6%2F6jCnBsAcKlEwdHVIPkK9pjmONiEuNcdQkTCfv5jRBjqkAT95DNP6X1Sa58d69D%2FZ84ghMqAY3HFN%2BRWu%2Fy8UMaO3xlfc4vlm054wb6N68RCRPBjp%2FBdelreBMagNFp%2BVaYzdrJUqrsvoiMPZsJVzQvBq5yAE87Efp71w%2B0BSaHST27F%2BCFoqLU0tqfSBkZaMHfmE4WkUtvVsfh5j5Zpaq879yK6qKhasLBmLmF4jwH5qZy0ZpgxNPDfkCKSR3gLImq4JYn5H&X-Amz-Signature=453f0b65fc03c0d23221a227451be8ef5ef166d909e59b7f984e831e19408561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL3RRO6%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfJaNO0l8ZQ6aGnREMcgXsEXIikiU5c%2F2fddV2xCqsOAiEAnXglpPn%2FNOiec50ggnedXQ49bhocZ%2Fz9LWvrLyQO%2BpsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqxGPydM0dvp0abLSrcAxZf%2BzRcyLkWgmAHdIOGfvOi1reG4m586dQRC%2FcLs0MiwGcBcNkQ6cr2HJvUobNXavEBiRFMVMJGwR7B1osBevKtWSS2R%2BV6oxbKgzneklDqkSIAoYwd%2BdPRBAoO70etTzTkTsKs%2BKp%2BBK9k4U8jqBB0X3RU5VQzgsMqPEieGHOlcJLRfGbzPIVL7ontIVVbfAT6%2F8yJcDf8JSBOqT4HYZFI3DyxtqRp%2FDS5knfDzSwKdM%2FSsmkUhOsp3Hn0Fg3jAPiyg%2F5mqNp8eIT2U1it4LD0llF6tI6uVycb6T5KY2jRiJWDAbAjV0xxjVRbuPXPmkTBL8ySfVpaeStq%2BSJZPxul8LYe11FIKAOWrvGZfNQ5TZPCxYs4KenENf6W4%2BKN7YG0EOQkHVea29Gh%2F0O%2FCcKd6QyM89K23C%2FRvZb2xD0zutnrl6tsmC%2Bjh4bZjId4IjhFoD68GPucAzNYb3RNgDtjLcyPeVvB2UeJjqQGoZCMFZy1EyqSPoKgZg%2FBxv2Fma1XASIoV1mcswgIvUuKPC5DGW2cVjFKYPGC4BlRbrBZUmtYheQKRqyYPAJkOSChD71%2FneiYgxlNpDzQstsnvT6nWJwaeXgAvVCEq0pQIPbdFPKtTZL26Pcm1FcsMPXAmNEGOqUBTShvrV%2BnSoWngsmt1LQA0ZMbAeWluofzomJUBGQc3Cht650AzUpJYHl3p6asHt35OwXNTvwRNCS4KkCgT%2FI7jOKcHpNyY%2FsJIJbZTZMFHC8q1mrb12bi6Uc86lKImTtnta2Bd0HrWecOwIoEEeGu4lSNXA0uNcThOJr7tlQz9hXIQJZ028RTnw2iIHQ8mFL%2FO7FgOA%2FEfUz5svaibAj%2FOcFnVLR0&X-Amz-Signature=19b8068949923723d12a1b1bc09709b58183f2e9fb6d281c65f73fc5a1860f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEPSSYH%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuVuhPzqOdE077ClFXRn%2B7yMlAYcrlHx%2B6rr6kkOLn7AIgG22rFEiHiQ93wJz%2FChSktTG4P69J8uOAKvJ97pe0qGUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLoOYPECPLd3kv41CrcA%2F3f2qrQMnaBOtJccs8EWq5A1hm1z5KqKEF6TaOLnX96Tm1LOkYJwT8pJay4u4OSPb22JgZ7%2FMhk5BKP1aghyGfSh2WvyGxkL1t5OX0E0%2B1Ytf9jq2%2BOK1LP%2Bdp34NCW1%2Fs65KG2rqhh%2FsJBs5Tz3pQQ%2FK5%2Fki%2F%2FmV6edGJWab1DYuAdNeSnZQiz%2FGlWHeyxy6nEjl66hvZBDSeoK4khi2RmEvSpwFJOt7N%2F%2BEe7olNcZlNmetKoe5uvRx%2FzHrxmehRh%2B%2FdNbN4TnS%2FoDnqV%2FD9%2FFgD9eFD9kMfH2WkgKgMFJPZJMW0oyqjC7tSIG0KYXEnrRsRJ3y05AF4U34tqKnOS4l5%2FIuPhb0YHUUuJMc6UhOELpmVa3XDBXpL4s6qsfjXllhUXsjI4ikNgUyBvlQN%2FXJFp6SQYlqp40vjkJdAcm%2B5EsEPAn8cnDrxT1zABBjrZT02CSztl1UnmOCWZajWvaJ2Uwy4a4qfacOmDr39Hs5XyM4JhJSHAdm1aetBEqpt2eL58o5Iv7sb9ONRuM6wirhZsWR%2BUozpCT2db9cdyT%2FvfJ1EQFNjFybEhxWdFbvsrZ2pwS6l%2BxJji22NOk9YCtslRzKwKqJEQNLZzafvx5xyeBscwWt57nzQvMJPAmNEGOqUBOIXPkbNzihWjmgxfX3a9ZdNyIB5ZDPAeZE9HsHSi%2FHPe6Gjhu2f2AjiDu1SxnXWdIFFSqwMiwLGcfNQqwtyEKq%2BGRlIMWly152XkbM8ME%2BNYX78BY%2F2cC%2FZvC7d1yXOTsRzS%2BJQRpH9m7Ms650tLNMD8MCtnSLGcXz0oAuckHpQADTAVxR2MOP1xf9iuW6YgbIk%2B6heQ54ReJ%2BfAxOsqCq7K3EEC&X-Amz-Signature=a29e3287ef347445a3b61ead72b0a68863c33c0e413dd810065850dc85506a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
