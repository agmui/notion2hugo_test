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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQJYJ74%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB5kOPMN99o81MWAqdZpaUl%2BdQlWB5uLCyAEzba1YknLAiEA%2Ftu%2BcTGnb50FFv7vG3%2BliByL8voChof%2F381WPIui6Jwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEfKAsBR%2FWKAqnkv4yrcA0LCLaNACrxh9zcyJoAeCjtBfCzk9U6O3xp6ce6Epr6UbCBuo04ZN%2BLCFMWbyQXBZHzrYRb8kRPJt7Y4SA%2B0T%2F3waLnpb8g31a5abmUhjBwdZQX9i3Z%2FVfn2HPoSZMXDbm7fEYS1YUF4BHpNENFTTgNrSbaSlIsUaLRAJzj10kvMMuibimJmaBhR9%2BcG8uvFGqV98mU5kgP7wPx3JkkucCaZal9xvWAUXuQ8FIYbiSObsSdrFJ2gISkZw9Y6uiLca5pkParvyxxI5e5afdRv43DkRnpoCUnCsxlxX4uQY5AbjxyqwsVmNq8R36Pr9haV4uPQ47ADUt0N2hS4Dq5h9nizYl00zYYArdqPrUHJJlWxBXHRVlnnMUzBBcQa43t3XfoVEGQmL0SckDGC2hn5mq0txkGQiybsCDBhqd7t8vRsYpb745LtOOJBgyjwqUqb0BEOmqWU57DcdmrstNwlJQNJJHuhEV6zrvMxFczGlqt85dXLkxGVwWaIN%2FL3G0tRjfA7Vqrlkt3P%2BKLToPu65XMl%2Bka8fgY5Eepj8Q9L%2FKKpfbHKQflYqlBQgd5ruhMs2Fvy1KI%2Fys%2B7yMVmfBYKvD%2FwNRYjEo8O47Wk%2BNWSUXzIBpIUz6%2FShzkHn8bEMJOblb0GOqUBUAPJVWWTiV0oiX5UuiQhEEc112gzoMY04f%2FJkn46Wvqx456hXqozvOk3P%2Fov96Zb%2BR9C%2FO18RpBSA8M0oNjVU%2F26jPwelzwpkerfGPI1TMtJOgiN%2Fo2%2B5SzVXtKH1qlQwHjK05%2BE0j93GJnpRL3nj9y%2BwWhViUccSa8ukRB3emSHaMxsUyhaQyzGp1nEiFYsbm4aVOnZkMfGT5638%2FQucyUgmMSh&X-Amz-Signature=138ca1fb0a7fa3bb59808d558753a24862170a9e2a06e58eaf9525cd854b1812&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQJYJ74%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB5kOPMN99o81MWAqdZpaUl%2BdQlWB5uLCyAEzba1YknLAiEA%2Ftu%2BcTGnb50FFv7vG3%2BliByL8voChof%2F381WPIui6Jwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEfKAsBR%2FWKAqnkv4yrcA0LCLaNACrxh9zcyJoAeCjtBfCzk9U6O3xp6ce6Epr6UbCBuo04ZN%2BLCFMWbyQXBZHzrYRb8kRPJt7Y4SA%2B0T%2F3waLnpb8g31a5abmUhjBwdZQX9i3Z%2FVfn2HPoSZMXDbm7fEYS1YUF4BHpNENFTTgNrSbaSlIsUaLRAJzj10kvMMuibimJmaBhR9%2BcG8uvFGqV98mU5kgP7wPx3JkkucCaZal9xvWAUXuQ8FIYbiSObsSdrFJ2gISkZw9Y6uiLca5pkParvyxxI5e5afdRv43DkRnpoCUnCsxlxX4uQY5AbjxyqwsVmNq8R36Pr9haV4uPQ47ADUt0N2hS4Dq5h9nizYl00zYYArdqPrUHJJlWxBXHRVlnnMUzBBcQa43t3XfoVEGQmL0SckDGC2hn5mq0txkGQiybsCDBhqd7t8vRsYpb745LtOOJBgyjwqUqb0BEOmqWU57DcdmrstNwlJQNJJHuhEV6zrvMxFczGlqt85dXLkxGVwWaIN%2FL3G0tRjfA7Vqrlkt3P%2BKLToPu65XMl%2Bka8fgY5Eepj8Q9L%2FKKpfbHKQflYqlBQgd5ruhMs2Fvy1KI%2Fys%2B7yMVmfBYKvD%2FwNRYjEo8O47Wk%2BNWSUXzIBpIUz6%2FShzkHn8bEMJOblb0GOqUBUAPJVWWTiV0oiX5UuiQhEEc112gzoMY04f%2FJkn46Wvqx456hXqozvOk3P%2Fov96Zb%2BR9C%2FO18RpBSA8M0oNjVU%2F26jPwelzwpkerfGPI1TMtJOgiN%2Fo2%2B5SzVXtKH1qlQwHjK05%2BE0j93GJnpRL3nj9y%2BwWhViUccSa8ukRB3emSHaMxsUyhaQyzGp1nEiFYsbm4aVOnZkMfGT5638%2FQucyUgmMSh&X-Amz-Signature=5868db05c798eb3c466e687bb76beb09c15f5a2e6dc476f6ec5136410dd0c950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEYF75R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD81ibgNULyfTzcC6uPUBzAmkO9590ArqYI6QnIfH88YQIhALUwDbZWBFq8axu6ynex1Sr6cD5m1oGGRxZO1bd9AyYLKv8DCGkQABoMNjM3NDIzMTgzODA1IgzglBrUErsboVu4uloq3ANe%2F5ARds%2FSHoZCCiQaAt6TQtt9nk%2BvH58bGNJMm846T0fDWhZ5yw%2BuUH0Ndslz6G9752C9vwenA7RXnvjQxyF7RAu1iyKr88FdjG5E5u7uPSKqRX96tPS4a9pfMlhLQHBojkaU4s0eSh2lJE%2BCQv71UqYMR3cIJXNbjkeRlwNSwdcfB3HlcJRP7qZ0Say53YYIqohWKbcKtNOAqmWmhyT2dMWtXHTPyI6nW%2BNI1vOdRYPK1Uf83nUfEUyuKyXaAHjujzJ%2FHmDkYr%2FTFwTKbmAejx1ZLRGjtRPomJZH%2FZ1PHj8gyLfT%2Fj3jdBzR9X%2Fn4LfQlXDm3pvfCJw%2F%2B6ziNEU7kuhn%2BXgA3G3Wf0U0x80iWxvZeVikzVgAxgeRF%2FEFOfPgDc%2BW3OoK46oPBhxX%2FX%2BsrW8KHl3ua657AQOCM%2BHlp2%2BntQ2sMGhb2b7PYzx6S3L%2Boh2Qg1d4tyYe9LDbGj9n3vA2vKYOm26dvO2XV4BsQiLH9xdvlE0PSKI67cqxitz6fYSd%2BbtHoI7pVClyFmoLx0q8gAM7OqwfbQ%2BjdvKkgmbrtrGrGE3qCPBg8ueolHq1vDPsY8i%2FQMxM8t5tiNkD5Ltyfl3WJBnEY6VuXiORwdwF21oDv3nkfBx3GDCpm5W9BjqkAZkk6g5stmjZsv4h%2FBPo4E0atsTkY8VVwnidDhvlJjgqNSe8GHyNVIJjXfvINp%2BLkdz%2FZg3k1D2EDEkZkeIIUv4LfR1bCZshagg%2FYwkAhRNBGcUWMyuN2d0F141R3cqshkeOduVccshviPnUygD4G2t3ABBvRv7jXcwMk2OcmVxj%2FC0swQVnJTHZhG8NIjmoIIPrzbiZOmn6RU70pN2%2BGU7tkjju&X-Amz-Signature=4c4ea37b172f11ce595b7e4f0842f72fc7d141e3839a029abfb02e682e85c53b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCSBNW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB8Hq9IkvaiPyCAcKek17L5ctUsmqhWxF4rxUo5Q3o4EAiEAn8GGsr%2FLfleIWYxFLBWB7ck5jrLwTxBXZx7zW8x33aIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCkPw%2FuHBPHAEP1SIyrcA0C993oPSfH3E%2BTyExji6AIAojEV2j4HhEgSf5X5D8xWRKkktwtUxfxX7UODYhDAtuWEQjt0Fy3ZZyw0od%2BaYxyK37mCnNVTlOugnCJ4nh87zjjuuak8e6zJ2cfYwGJTHR8A8PerVGdMKG99XUufIAjNrGGfQ1iDTKTuU8fFyH7q%2FcNoZQaExOHZijmO8w07i3GTAvI2LVdg%2Bm0FUAkJc2aF4jhv31QKIWIw8PK4Kh85kIU36LjZ8JaJw%2BQ%2BH%2FrW8wojXb%2FsUmJGHyPi3euRpHwdqqn49VGjMTDnJDtZPMDm1%2Bl7S1EDfR5Tk2DjFCunPSLptVMCpRlhTIiAKuKNzP6q%2BPLcTGq45W2yBhuG8I%2B%2B2GGLZdRg7j0C%2BJde8LopcY%2BoV1%2FWPL0ib1LI7d1Zdb9IluyyX%2FwcFqexdwqtKClORYZ%2F3d2pHoQ%2BO41rcr%2FiujgNEzMywiwbo6diRM6XXLhx8f8w2BnqmAuAy%2BXcSe7ebaBZc0KE0pSEWvFxjT5tYBPtfD%2B7gPnQW%2BxkJvlYX1dKv9Cjr6NP90ixS3SPGRJfjd1P2X4cJDhma%2Fq8WXAFBLOmC%2FflglkdRcEF6kCMk3hjQX6jXR%2FacKz9pDTmRe3pc1wdgM9oul9VaWqHMNWblb0GOqUBO54uVC1w1kw%2FQfGQ5fDnY4nrNWg7YgDbxm0z4bfZehm0UN4xn11hW%2BmV2q0K9QidJo8YzualJH3PcsfZ7627HLwtAN83T9RUwCDazVD09HrNJw9bIDXR02NTJWiNjSa8%2BUV0J4DkOtdGQ%2F%2FcVwOT0Swvhg8Cid7oL1P1M4sys0wB5qXm7l3YimraogUYEqBa5kfhPn%2FSNWc0FslHGZ%2F9pdR9i3RL&X-Amz-Signature=a29490ffed51c5b824c85aec1bbaad943218843c4ba9493fdff93a60efcb10ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQJYJ74%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB5kOPMN99o81MWAqdZpaUl%2BdQlWB5uLCyAEzba1YknLAiEA%2Ftu%2BcTGnb50FFv7vG3%2BliByL8voChof%2F381WPIui6Jwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEfKAsBR%2FWKAqnkv4yrcA0LCLaNACrxh9zcyJoAeCjtBfCzk9U6O3xp6ce6Epr6UbCBuo04ZN%2BLCFMWbyQXBZHzrYRb8kRPJt7Y4SA%2B0T%2F3waLnpb8g31a5abmUhjBwdZQX9i3Z%2FVfn2HPoSZMXDbm7fEYS1YUF4BHpNENFTTgNrSbaSlIsUaLRAJzj10kvMMuibimJmaBhR9%2BcG8uvFGqV98mU5kgP7wPx3JkkucCaZal9xvWAUXuQ8FIYbiSObsSdrFJ2gISkZw9Y6uiLca5pkParvyxxI5e5afdRv43DkRnpoCUnCsxlxX4uQY5AbjxyqwsVmNq8R36Pr9haV4uPQ47ADUt0N2hS4Dq5h9nizYl00zYYArdqPrUHJJlWxBXHRVlnnMUzBBcQa43t3XfoVEGQmL0SckDGC2hn5mq0txkGQiybsCDBhqd7t8vRsYpb745LtOOJBgyjwqUqb0BEOmqWU57DcdmrstNwlJQNJJHuhEV6zrvMxFczGlqt85dXLkxGVwWaIN%2FL3G0tRjfA7Vqrlkt3P%2BKLToPu65XMl%2Bka8fgY5Eepj8Q9L%2FKKpfbHKQflYqlBQgd5ruhMs2Fvy1KI%2Fys%2B7yMVmfBYKvD%2FwNRYjEo8O47Wk%2BNWSUXzIBpIUz6%2FShzkHn8bEMJOblb0GOqUBUAPJVWWTiV0oiX5UuiQhEEc112gzoMY04f%2FJkn46Wvqx456hXqozvOk3P%2Fov96Zb%2BR9C%2FO18RpBSA8M0oNjVU%2F26jPwelzwpkerfGPI1TMtJOgiN%2Fo2%2B5SzVXtKH1qlQwHjK05%2BE0j93GJnpRL3nj9y%2BwWhViUccSa8ukRB3emSHaMxsUyhaQyzGp1nEiFYsbm4aVOnZkMfGT5638%2FQucyUgmMSh&X-Amz-Signature=a5b49f599970f464daef668c196d7b01eed59bfdc76df39c4bc3bec067fc5bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
