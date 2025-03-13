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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYWPUNN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjLU2Cz6vS6kyDCqCVJkixMO%2BJMBATrUr7N3uM%2FEMcSAiEAr6c18cfBHn5A8jbTjoLZjbGzGwjkMhwOO%2B7CjIHCOY0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7gSFRIFwdOBD6d4yrcA71uLZ%2FLV6gfdlENK3lDStiMiAyieuW%2FZpk4clTDYLduG9%2BEM3XTgHeEsav0Gt5SUgf1fDl5f54hvvxUpD6pDM8LiJRRCZiM5BDC4LEst6cCurND%2BiwVo4Mpq%2B%2BwvhlZZ3cc1yZwAnwedPGnaueEEbJsCAdNfbQt4xkNFWmT9lIxIK556WpkhfO3hM2Zw%2BNXwOcZrQNB33f6vuXWTgrg47EtDov3TFrvv%2BDJjUMmIIe2JaYCz9uLFFUM2XY3WZIpu14W4wvM%2BEmb5FK%2BWqF%2BRBbsxuUCmHtRI0TWusSGG1YGmb5qigpPK52ZRIMAEEhEDZPir%2BuwmR59on3dSTnwoqbjvluI106M%2F2uv0O5JUIBijoFMlqKEp0IJSBg7d94VBwO9TMmfXPlHMz9lhAg8Vv%2FSv%2BUBORk2uPErAdq4UoTFFD6or%2BCf3lHw5%2BqwdiXFakPmRmRxLKpZ6DkHp0qi%2BvfhC3ZEb1tPCblMiBwjkyh0KfSsu3vFW2IryZb16NtaHowUQiRWUgvFAM8AUwzSmJ5v7%2FdVBz2bw8wVyUWJ%2FugDRlITjdA2W2J5n40KCI%2BRre3gWll%2F1q6ddO7TUVFrrUAYzaSKV1cPH%2BuaexdI4%2FZbR3OPETkc9z20U9p2MMrAyL4GOqUBAqQZ6Au96wKiwwiv9Na4XOO8CoEiG0fsNKu2Na8sajpDW0ko4%2BwlU3qmxgXnTqmnNTW9dgqyQtIHs0jpnCB1%2BzZTWdc7qpNznBjvYsONT%2Fh6NMIHuwz2%2FOCUiCzeTx%2BULX5Q90fIt3srj74Mh3Gh1ijbZsOL88DIqAa%2BJ3gGZaz8QfDymOrJP40XcS74ldDdqtifGoHyBiHVIiDJnU5j8e%2FoJbKf&X-Amz-Signature=d36188b17418ed2621fa5c25cf4e193e44d997f798b2338ef0123aea14107ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYWPUNN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjLU2Cz6vS6kyDCqCVJkixMO%2BJMBATrUr7N3uM%2FEMcSAiEAr6c18cfBHn5A8jbTjoLZjbGzGwjkMhwOO%2B7CjIHCOY0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7gSFRIFwdOBD6d4yrcA71uLZ%2FLV6gfdlENK3lDStiMiAyieuW%2FZpk4clTDYLduG9%2BEM3XTgHeEsav0Gt5SUgf1fDl5f54hvvxUpD6pDM8LiJRRCZiM5BDC4LEst6cCurND%2BiwVo4Mpq%2B%2BwvhlZZ3cc1yZwAnwedPGnaueEEbJsCAdNfbQt4xkNFWmT9lIxIK556WpkhfO3hM2Zw%2BNXwOcZrQNB33f6vuXWTgrg47EtDov3TFrvv%2BDJjUMmIIe2JaYCz9uLFFUM2XY3WZIpu14W4wvM%2BEmb5FK%2BWqF%2BRBbsxuUCmHtRI0TWusSGG1YGmb5qigpPK52ZRIMAEEhEDZPir%2BuwmR59on3dSTnwoqbjvluI106M%2F2uv0O5JUIBijoFMlqKEp0IJSBg7d94VBwO9TMmfXPlHMz9lhAg8Vv%2FSv%2BUBORk2uPErAdq4UoTFFD6or%2BCf3lHw5%2BqwdiXFakPmRmRxLKpZ6DkHp0qi%2BvfhC3ZEb1tPCblMiBwjkyh0KfSsu3vFW2IryZb16NtaHowUQiRWUgvFAM8AUwzSmJ5v7%2FdVBz2bw8wVyUWJ%2FugDRlITjdA2W2J5n40KCI%2BRre3gWll%2F1q6ddO7TUVFrrUAYzaSKV1cPH%2BuaexdI4%2FZbR3OPETkc9z20U9p2MMrAyL4GOqUBAqQZ6Au96wKiwwiv9Na4XOO8CoEiG0fsNKu2Na8sajpDW0ko4%2BwlU3qmxgXnTqmnNTW9dgqyQtIHs0jpnCB1%2BzZTWdc7qpNznBjvYsONT%2Fh6NMIHuwz2%2FOCUiCzeTx%2BULX5Q90fIt3srj74Mh3Gh1ijbZsOL88DIqAa%2BJ3gGZaz8QfDymOrJP40XcS74ldDdqtifGoHyBiHVIiDJnU5j8e%2FoJbKf&X-Amz-Signature=cd63c75c8e01dd8237ac1f8cba4f9b2c147d605496258f600290dd085b5148e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPA5RZS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEAVneStqGe7jwYqkW%2Bqv95Uk9rUSFNw1FCBnRJFp2yAiBPlr5XGgMRkBtVcNYA8YarLMlFmnAiM2nRclEjBRbNZyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZHKR9LCeKlZdKVZlKtwD4uMVFBPqEWjDSQlurQ4uy93U8VOPRyL0RbVOnAEoCTfBCqdz99edmrEyq4rykKf%2FM2ViwqdPxEvdC9iXoACyCA%2F9SaviWQZ0lVJ5lc2givymWGg9MZ5gpPeb7Ukl2JJ7v1qWsoFA%2BwOHizt9wndEOTbEKgMIrmBNEKg0jctc3HKQj9Twaj2F65Lh2oSAMCAE1o9Yx4lm1zbtzQu8WddDVd8s2KJfT6UiknE94xsKGGUG%2BdnE2kO04bref0wimXMmX3LBjRLd9nCBS4xTZj4XlvqP9wGUIeexJOKM2dP7TBv04KrWfm%2Fxgc0fbfkoVhYm7mFqLkfquPdE3MtxagV8KexIaB0G6HNyyMui48%2BRkJSsJPHpeFlokc3xWmKCB7mpNdGg6RkgD6IzBACoWYZyj3PtgFcDHOBe0%2FxLIz6UQCxke8BKh2bTO4dhpPi3WHb5t8iqHmYAYUM9n4zQiOZ7qPEBWB2zmCOXzlCU%2FAxjXVKYNthP%2B8tuNTtt8jVyRFO7ZZWTG7QC28CRLHEt1WEJWEm419xAZVqbJJ8FaI8UDwjecKl37JyAOVCF8Q3RUsDoXouN4%2FvaVlQbEIuM%2FaFAPzSCOlrNcIH2rEGVG09z9zs%2By9ULfg4fd7P1Qlsws8DIvgY6pgFCiWbUMUcJnazzfLXGJFVznNf6t9yR5sA9o6ljw4MWEOJwvsNYST4Mzof0PK%2BX0lPOMDQd2O4XIlfG%2BTpqOnQMPzee4%2FZ1dHfTEVxXleH8zi0WDNDjuLperDJrBTgBwfMtui5TUrwQTnrPQGZjTvPZUIGcs%2BhWrQBDgru%2BD7gHxeuG8TGsULiOpfKDX%2BiYMex4BaN1Hyj%2FE1i%2FqXg8%2FN7JLk%2FhUDLp&X-Amz-Signature=3748fd080c8571686af3ec72720b45eb52266f9b59706532fd27bcfa2475ee86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOMLQZP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvl7oVc5g1pkuGx%2BHJQYKh98BBhpznGEnXTxWoI6LWKQIgZB%2FT3cot73931GEis5%2F1zvYEr6BJiNcRm%2FHYZO3keDYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkcZnBzyB%2BNGde7aSrcA8ZxNxG0dz39o2fjR9Xy0RQXOkmvKhxf1lOk60SKWtm8v%2B%2BmfUg5eQUMaxbHKKtq0T7cwO6AeJmHy0%2BEQTEvE4R32MhZX4XDmikxGN%2FbvFSmkUdNALBpv0O5BAgThzDPqHOtlpC63KfRW9u7fPcBGgy8RbIqR4Rdy0mvKtqrjxPIBNrzYMzlz3Ekfv27oWs2ZU0jceILikonQbTyKQ0su9BEddTWcbmuQ8b%2Bmdgiyd4X7acn8EjdIb0O7VrjWFaO4ylWQ85%2FZfcZ4JecCsPdhi6UvXtE9m6oGQj1wNM6cZ9F68jSr3NR3b7GSLGpdOWHctVwq1uUA%2F%2BI4ZzrB1mSu%2B%2FEz2%2FCSkoRFxRJkCarrW3haDDc1fCbBsL2FqJxSxVzSMKaM6wGHPSC6p2CLO%2F0QyHhtLn%2FYE7UtI97hJhrhvHrz0HXPMERvaTMvnild6uki%2BMExt6asJ%2FWNwJTFA%2BVJfwk8btKRHykCYsooknAz9UQlGFWyk8MZ2z8dfBnNBbh0ahAW%2BjjSmEbNgR%2BU592d0w9xY%2F2x73YxQkiKRNyDkwU72ekwbni7Y4b77LkaeBqDBfA2J8gYGpn%2FbJUtrsReQIhIe6LILlY82HpF1sl1L0wsL5%2BH6J89CaoM1FEMKzAyL4GOqUBmMSvyNjK6tnkEGajz9NJQm7g%2BsFqeCs8VdMJv5Yn57GI9D8ODw4I4QliOx3i3G1nDp7KH62PDtDJG6C5WDjvvbxcdZcSPv8uhY2szEykj5uU2OXsHGzL48cjjdiqmxpwBT%2FUG2quPOAEDkZIq1MnE26U2qX%2BI%2BLWF0xL%2F48l7HzORFBk%2BBj8leo5pr7YSdlIYpWqVEZdeXao3Z9YjeL5L7RXUJPH&X-Amz-Signature=cb2d2fcb84197ad2ca16f15198ad93328aeae71197e81d9596356f4b8afda10a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYWPUNN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjLU2Cz6vS6kyDCqCVJkixMO%2BJMBATrUr7N3uM%2FEMcSAiEAr6c18cfBHn5A8jbTjoLZjbGzGwjkMhwOO%2B7CjIHCOY0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7gSFRIFwdOBD6d4yrcA71uLZ%2FLV6gfdlENK3lDStiMiAyieuW%2FZpk4clTDYLduG9%2BEM3XTgHeEsav0Gt5SUgf1fDl5f54hvvxUpD6pDM8LiJRRCZiM5BDC4LEst6cCurND%2BiwVo4Mpq%2B%2BwvhlZZ3cc1yZwAnwedPGnaueEEbJsCAdNfbQt4xkNFWmT9lIxIK556WpkhfO3hM2Zw%2BNXwOcZrQNB33f6vuXWTgrg47EtDov3TFrvv%2BDJjUMmIIe2JaYCz9uLFFUM2XY3WZIpu14W4wvM%2BEmb5FK%2BWqF%2BRBbsxuUCmHtRI0TWusSGG1YGmb5qigpPK52ZRIMAEEhEDZPir%2BuwmR59on3dSTnwoqbjvluI106M%2F2uv0O5JUIBijoFMlqKEp0IJSBg7d94VBwO9TMmfXPlHMz9lhAg8Vv%2FSv%2BUBORk2uPErAdq4UoTFFD6or%2BCf3lHw5%2BqwdiXFakPmRmRxLKpZ6DkHp0qi%2BvfhC3ZEb1tPCblMiBwjkyh0KfSsu3vFW2IryZb16NtaHowUQiRWUgvFAM8AUwzSmJ5v7%2FdVBz2bw8wVyUWJ%2FugDRlITjdA2W2J5n40KCI%2BRre3gWll%2F1q6ddO7TUVFrrUAYzaSKV1cPH%2BuaexdI4%2FZbR3OPETkc9z20U9p2MMrAyL4GOqUBAqQZ6Au96wKiwwiv9Na4XOO8CoEiG0fsNKu2Na8sajpDW0ko4%2BwlU3qmxgXnTqmnNTW9dgqyQtIHs0jpnCB1%2BzZTWdc7qpNznBjvYsONT%2Fh6NMIHuwz2%2FOCUiCzeTx%2BULX5Q90fIt3srj74Mh3Gh1ijbZsOL88DIqAa%2BJ3gGZaz8QfDymOrJP40XcS74ldDdqtifGoHyBiHVIiDJnU5j8e%2FoJbKf&X-Amz-Signature=7317dfa909d10e21b22d2ac76e439c8c57360c5e183492fe595401e608f71ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
