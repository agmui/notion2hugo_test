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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OTXMN5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDef2%2FxwpUOaRgYWknXNC5aTVVF2901C3RuZpHh2MXeBAIgalQdAqTQ37OmgXBiHzAj6cbdjSkqjymw7QsRjlFeMj8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOtIodzrJGTI6g0yiCrcA0B1KnhnSvXChC46CD%2F8bHvSrr3weK06OdF8N%2BoSXB94FfKAxQuxus9d3sbuBDJy2wSYRwU8ev2nKeHb0oKm5LU%2BHeYSV6TiIyRt8yJ%2F3d1aMCk4PBHaH5gR%2Fz2xJJMNy%2F1jCHjpzwyyhS5XlpLUIU60ecI12h4UqwCLYk9AKd0sDE7iptTIw19QFbhSt4SIQuLf0ms5jsALFAfNi9o1O8qatfysndwZkZc9e2HFkpvXiv2vYwPaopWgUqA03c5croRU2J9kPnYgNrs%2FzypFrPuZSEEvzD0ER9yrAd7lsfFT4V5wwSJofPBwf92W8%2F0oYrLg0wD8UvFELg8iMW68aD48pLrTE2qec2LgOMDCmUXPAbLPxX30QubM3xTulwFamqXLEf0wBPAslijPUsGVC0iRG%2BD%2FDoDntnfdkwIr4KRJcj%2Bhe1gnPupXX8wi2ajoLyPYs4VQQJVyu9B%2BXIy2%2FzOTROIaaMw8%2Bkit7VWWXG1t5y8d3NYElVgdCA7wkN%2Fe1i7VrytFKv309KwHSHz1UQgUVakmxyg28Tn4RWCOOeyU1QEUdTc7BvX%2Fcud%2Fpz5ffzc3EPFetrRzqXgxfrK9V3foglNJVvwc7jbWtABoMss%2B2P1eWCzMwS6cSx8vMNTVksEGOqUBKTIentoE7CPwv3kjdYNqu%2BkuIRm9PUXMsjkxxSpn5H0YHeaVb1Zb3bRPDvtKwP4wM%2FV0Bi3lsydwpZ5mF94k42Gam284E6qOuZlwCnmfztEWdGJHCJEqsrcXtHEes1VRbzGKcrObUqTzLN5sjxcXg6Dh%2FPFBkZy1bJqc5RfhPV6IntukqMgEEBVnI05oR4iyb4Fp%2BYU%2BUEfMLqQhjs9yELfDqDlE&X-Amz-Signature=e3f819a82d2087dc37479e62b3f1c05e2a7ee80da60b2ce2653b16a56595f3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OTXMN5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDef2%2FxwpUOaRgYWknXNC5aTVVF2901C3RuZpHh2MXeBAIgalQdAqTQ37OmgXBiHzAj6cbdjSkqjymw7QsRjlFeMj8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOtIodzrJGTI6g0yiCrcA0B1KnhnSvXChC46CD%2F8bHvSrr3weK06OdF8N%2BoSXB94FfKAxQuxus9d3sbuBDJy2wSYRwU8ev2nKeHb0oKm5LU%2BHeYSV6TiIyRt8yJ%2F3d1aMCk4PBHaH5gR%2Fz2xJJMNy%2F1jCHjpzwyyhS5XlpLUIU60ecI12h4UqwCLYk9AKd0sDE7iptTIw19QFbhSt4SIQuLf0ms5jsALFAfNi9o1O8qatfysndwZkZc9e2HFkpvXiv2vYwPaopWgUqA03c5croRU2J9kPnYgNrs%2FzypFrPuZSEEvzD0ER9yrAd7lsfFT4V5wwSJofPBwf92W8%2F0oYrLg0wD8UvFELg8iMW68aD48pLrTE2qec2LgOMDCmUXPAbLPxX30QubM3xTulwFamqXLEf0wBPAslijPUsGVC0iRG%2BD%2FDoDntnfdkwIr4KRJcj%2Bhe1gnPupXX8wi2ajoLyPYs4VQQJVyu9B%2BXIy2%2FzOTROIaaMw8%2Bkit7VWWXG1t5y8d3NYElVgdCA7wkN%2Fe1i7VrytFKv309KwHSHz1UQgUVakmxyg28Tn4RWCOOeyU1QEUdTc7BvX%2Fcud%2Fpz5ffzc3EPFetrRzqXgxfrK9V3foglNJVvwc7jbWtABoMss%2B2P1eWCzMwS6cSx8vMNTVksEGOqUBKTIentoE7CPwv3kjdYNqu%2BkuIRm9PUXMsjkxxSpn5H0YHeaVb1Zb3bRPDvtKwP4wM%2FV0Bi3lsydwpZ5mF94k42Gam284E6qOuZlwCnmfztEWdGJHCJEqsrcXtHEes1VRbzGKcrObUqTzLN5sjxcXg6Dh%2FPFBkZy1bJqc5RfhPV6IntukqMgEEBVnI05oR4iyb4Fp%2BYU%2BUEfMLqQhjs9yELfDqDlE&X-Amz-Signature=542df08ee0c34814f1870d85224ffbcfc28834cb8a43922e9c30cf9e6e7bdb68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OTXMN5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDef2%2FxwpUOaRgYWknXNC5aTVVF2901C3RuZpHh2MXeBAIgalQdAqTQ37OmgXBiHzAj6cbdjSkqjymw7QsRjlFeMj8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOtIodzrJGTI6g0yiCrcA0B1KnhnSvXChC46CD%2F8bHvSrr3weK06OdF8N%2BoSXB94FfKAxQuxus9d3sbuBDJy2wSYRwU8ev2nKeHb0oKm5LU%2BHeYSV6TiIyRt8yJ%2F3d1aMCk4PBHaH5gR%2Fz2xJJMNy%2F1jCHjpzwyyhS5XlpLUIU60ecI12h4UqwCLYk9AKd0sDE7iptTIw19QFbhSt4SIQuLf0ms5jsALFAfNi9o1O8qatfysndwZkZc9e2HFkpvXiv2vYwPaopWgUqA03c5croRU2J9kPnYgNrs%2FzypFrPuZSEEvzD0ER9yrAd7lsfFT4V5wwSJofPBwf92W8%2F0oYrLg0wD8UvFELg8iMW68aD48pLrTE2qec2LgOMDCmUXPAbLPxX30QubM3xTulwFamqXLEf0wBPAslijPUsGVC0iRG%2BD%2FDoDntnfdkwIr4KRJcj%2Bhe1gnPupXX8wi2ajoLyPYs4VQQJVyu9B%2BXIy2%2FzOTROIaaMw8%2Bkit7VWWXG1t5y8d3NYElVgdCA7wkN%2Fe1i7VrytFKv309KwHSHz1UQgUVakmxyg28Tn4RWCOOeyU1QEUdTc7BvX%2Fcud%2Fpz5ffzc3EPFetrRzqXgxfrK9V3foglNJVvwc7jbWtABoMss%2B2P1eWCzMwS6cSx8vMNTVksEGOqUBKTIentoE7CPwv3kjdYNqu%2BkuIRm9PUXMsjkxxSpn5H0YHeaVb1Zb3bRPDvtKwP4wM%2FV0Bi3lsydwpZ5mF94k42Gam284E6qOuZlwCnmfztEWdGJHCJEqsrcXtHEes1VRbzGKcrObUqTzLN5sjxcXg6Dh%2FPFBkZy1bJqc5RfhPV6IntukqMgEEBVnI05oR4iyb4Fp%2BYU%2BUEfMLqQhjs9yELfDqDlE&X-Amz-Signature=289d71b9f7306a01fa9c56dfccb92b08f4999db952829aabf6a889d3cc2f94f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJVVUKK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIE8QAjV7hAvXDi2kxQcO8JtrHcgeiobZTX8doHj%2BKiItAiAduPXT2hbx6nYV2qJpOyH6I%2FCPWF%2BX7TBFrGwq2Oyiair%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM4d6GZFUEswxsyjSpKtwDYAUj8%2Fkcay6NINRWWDOcfPPDxViKPMLDCxS8m1RoWRAiWKVp%2BXXARvzHmXUYdkzk6GTX9wGPqhXv8l0ENyP21DQNYtzhygULzbys5LGDBjqJK6aWHPfBKe%2FeztofcQW2JIqYsSmq1DQD6VHs4bsEPAPQnTA%2BMhNczDywms8BqhQGL1aV%2BUvBrOPMNofVMFBAnBtvHmcGHu6DvogAkDu95PHZ4F6c20jzmFgedM69l0XCkqlDfgcL3jHDZvhVPu7qeag6J7DSDuw5SWVALF480e3AwU8a%2BE6zpCXgvJzBqc8ICiHObP%2FifvY5wt6TbeRVYx1ylwcpG9hJ964HlOrZp13cisuW76YmXgIOIJ0olynzyVBtepT9U33Nc4Rd3m8IQSjdzFdF%2Bl7rvwjw4aTZDDI3qAyJkdS9%2Fz7olqgglCV1baTY04MYQXdeByU8EcZFYns1bILh%2BNk3Kx9emGTi8Y%2F1muwJ1WAngvXBgrtqzc8A9AHSzmeQu5lGXjTOHblj1%2FstjvgSZwwN24DLs7I9nGxlbZyqBjBdC4iKFl55x%2BbN74542k265GuYf4xw44HukUzlMDP8exBxsHUqpzkmf3FP4d%2B3ekrOJkYL5SsHKNG7why93MkDN8AOv7Uw0dWSwQY6pgEk5AVs3YBp1tkInZn6CgCru7EnEbgZ1gOEV6%2FFrGXLKVuIq1OlFfm5VwCcbNsOrfPp%2B8yv1PMV%2FDeErStAg4GQlvVDu7PIbcUPmJwHzZie6edKzRyycODA2MyjoCrPYwcPUmojCKRu1IpEzPNlI8kABLq3%2FttAB7Tuz5Hdnz1qv6kc8i9zbgf0fvIvTf4I9%2F%2BimlwnurzyZzDMeu9tNVe6o6k8zu%2Bp&X-Amz-Signature=2e6cbb100a239faf139a32db79411ecfdc0c1be5ac5cba849951bad2c326d724&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YD63R2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc4KokvrNS3n4lrvCYwPO4B%2BNXmntp0u4Wx9sJTjtFrAiEA8y3foydwmFnpkkXEPPbJJLL0BbNnSmtho0%2FVAca7Qncq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDPzXVMNxNQqgzGI13CrcA%2BR6hdo7geI3ImdHNUP6an6q65ENNpimnNl060Oxra4sqiNE3Y%2ByoP4GjyBuSh3blBaDsVwfgxqh5rTLk%2FjBRBYEaCumPcIRW53mrse79lmGyWZtpQ%2FqwizisSb76nVjnAKJUyyGa8CtpibEw4Mhq41nKsT5UFB6CRG6ZBQ8uxByyBJZkFFSuKk7Jcmnr9DiFglKOoHI1B9v98kLVrxeJYaEMc%2Bqcd2y6FlJrXJ7FMENdXm%2BSPWR2tZiZyOQztq6Zj1rYPLeAY6bjLpyhb2etPs2wTFkq%2B6GJGMjCxJOPk%2BGnNDgzdJTbpgcZnAL%2FLWQcVHkkxhXH8ZaEbwFobb5BQtmcn12rT9ZRZ%2FGlCrZDd5AwRsK3IicvNgCxWec4eVR2rLLChfE6rMquyIy56nVL3Hj%2Bh1kRT7zxIf9OdUPlwvBf4Y8bbadmzlaa9YNQJ%2FsoQA717PjlizTaqYhYn11Krj9DZ4WccyNtTbCSfvPYvmOpbjaRKwDSVEQF0k6eugDbsXfSr6orUGYwKLbDtgaWCKz2gIpoOO6Rdevzq%2FCl7BhijUM0RTvbRBsmVtB7slsIuhgx4kh13QDoJ3VMmKSuOIDeAR57oYk%2BG%2BjU9AobmjGWW5OGPDnDU0j6UnnMPfVksEGOqUBEXorsSdBrG6xRh0iVLP%2FsnW%2F4PaTmTshISyEA%2BDFhYt53iDgbHO52g5WEVHVWYEd4sbp1rQGxkLb5yq0UIWkA2Zq1MLQo7P6T7sqK2StPxow5iT%2BcDSs%2FsgA6IuHdd8i%2BWSZRymJBqUajgT14%2Fo3aMnQaecX%2ByzEEO5GIgHElepTMzcyK1%2FRqIS%2FWi6jYj162TOQc%2FY86l01wRLlDP99hwk1gXdC&X-Amz-Signature=74ea818645b00859910a0adf7d751aeb4a8be648a7e429560e38f0e35c6159bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OTXMN5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDef2%2FxwpUOaRgYWknXNC5aTVVF2901C3RuZpHh2MXeBAIgalQdAqTQ37OmgXBiHzAj6cbdjSkqjymw7QsRjlFeMj8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOtIodzrJGTI6g0yiCrcA0B1KnhnSvXChC46CD%2F8bHvSrr3weK06OdF8N%2BoSXB94FfKAxQuxus9d3sbuBDJy2wSYRwU8ev2nKeHb0oKm5LU%2BHeYSV6TiIyRt8yJ%2F3d1aMCk4PBHaH5gR%2Fz2xJJMNy%2F1jCHjpzwyyhS5XlpLUIU60ecI12h4UqwCLYk9AKd0sDE7iptTIw19QFbhSt4SIQuLf0ms5jsALFAfNi9o1O8qatfysndwZkZc9e2HFkpvXiv2vYwPaopWgUqA03c5croRU2J9kPnYgNrs%2FzypFrPuZSEEvzD0ER9yrAd7lsfFT4V5wwSJofPBwf92W8%2F0oYrLg0wD8UvFELg8iMW68aD48pLrTE2qec2LgOMDCmUXPAbLPxX30QubM3xTulwFamqXLEf0wBPAslijPUsGVC0iRG%2BD%2FDoDntnfdkwIr4KRJcj%2Bhe1gnPupXX8wi2ajoLyPYs4VQQJVyu9B%2BXIy2%2FzOTROIaaMw8%2Bkit7VWWXG1t5y8d3NYElVgdCA7wkN%2Fe1i7VrytFKv309KwHSHz1UQgUVakmxyg28Tn4RWCOOeyU1QEUdTc7BvX%2Fcud%2Fpz5ffzc3EPFetrRzqXgxfrK9V3foglNJVvwc7jbWtABoMss%2B2P1eWCzMwS6cSx8vMNTVksEGOqUBKTIentoE7CPwv3kjdYNqu%2BkuIRm9PUXMsjkxxSpn5H0YHeaVb1Zb3bRPDvtKwP4wM%2FV0Bi3lsydwpZ5mF94k42Gam284E6qOuZlwCnmfztEWdGJHCJEqsrcXtHEes1VRbzGKcrObUqTzLN5sjxcXg6Dh%2FPFBkZy1bJqc5RfhPV6IntukqMgEEBVnI05oR4iyb4Fp%2BYU%2BUEfMLqQhjs9yELfDqDlE&X-Amz-Signature=d239840d26decbd98265aae32d8d11903418c5ed0bcbecfc59da5e7258283d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
