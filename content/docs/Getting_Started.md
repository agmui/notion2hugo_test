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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7GHPK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDvkIDNNNnk78wjUcm1jjrLQju8S9qUCsHuQHZSPmb7UAiAemTi3MT1M7u0kEDJpFh1g%2FOxhrSvWWVZOsz%2F4kCs44yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nBB%2BMk5C2TFaqjKKtwDLZeytdr18HYYh7WDHzpHD5O2HJyG3s2hSU0T%2BHcpTu4mEHWMoDxwiX%2BKaVu2yrG5Qy0ACYzl6rPeMc9HlCllWkf8JArv0V%2F0eOA73aXtZiVxCE9GlWpg%2Fha0zWrYLJTUmjGRsSa86O2Li53HhnBCEjpuYfxscjhYPM%2ByB29is7joCwCldByG%2FwnLSlDcNYn1Xf6lfbxg%2BkVAM%2FXFJTRgSRWKb00iRVjWqmfpmJ8Gv76xzQQ95Jr0cfuAvQ%2BokO4w08xiZnFJr2DWvF69Zvo7BK6JkcBWPUIWAdD8IPNtDKW8sim7XJU3zj2KLdtvPfr7mPB%2BOBzIiirveReJ3BmE%2FOjBaVpE8eo%2BLVpxfRD0nQGJJ3FejeAoej0xzauhZvTutnIHB4cWYWkgTHIm78TEkNCaZdp98BHjClJwoEh7pVJKADlwQ6H4o7CgKRugbsKki7ZNDipNqEHlE4E%2FFfMMGBUSRjjk0gnJd3iehGiGJu5uBh2Ya4aX%2BXbe3lMmlfy0%2FsEevfZy%2Fk%2FZdw88sMj%2BYtZzaluQgf80JgWI0oYHcBaUkycSvbceD5vHTn7nM7CrNr7aR2%2FolWW0dNzE4DEfNF1UTvmkkBMmBvBcfNoROk4eOTsX9fu9628NH3Ewn6ao0QY6pgHpUbJdLR2aUfv2ro3Lp5ugmDDpJfJhciozi8n22pPurlhDZus3S0nAbni%2B1i7VoI%2B3lYPEK%2F%2FncRYh0lraDQ6hVqoVTfdHbqR7vnOTjKnYPKbvRq%2BG6YMY%2B5qH1O6k9VnPW2UtztZwcFXzuSGdACNpdIxyJ8vYloPRj%2BbzUwt7NdOjjw%2Fi0x7pMFqRBRnDD1cOAhdXmawBZIJpoSMrEuTDoMEYWm51&X-Amz-Signature=9f03acc4b9429cbbf0df9f1eb834eb26307f61b14bbee1108a9956b0aa2b1df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7GHPK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDvkIDNNNnk78wjUcm1jjrLQju8S9qUCsHuQHZSPmb7UAiAemTi3MT1M7u0kEDJpFh1g%2FOxhrSvWWVZOsz%2F4kCs44yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nBB%2BMk5C2TFaqjKKtwDLZeytdr18HYYh7WDHzpHD5O2HJyG3s2hSU0T%2BHcpTu4mEHWMoDxwiX%2BKaVu2yrG5Qy0ACYzl6rPeMc9HlCllWkf8JArv0V%2F0eOA73aXtZiVxCE9GlWpg%2Fha0zWrYLJTUmjGRsSa86O2Li53HhnBCEjpuYfxscjhYPM%2ByB29is7joCwCldByG%2FwnLSlDcNYn1Xf6lfbxg%2BkVAM%2FXFJTRgSRWKb00iRVjWqmfpmJ8Gv76xzQQ95Jr0cfuAvQ%2BokO4w08xiZnFJr2DWvF69Zvo7BK6JkcBWPUIWAdD8IPNtDKW8sim7XJU3zj2KLdtvPfr7mPB%2BOBzIiirveReJ3BmE%2FOjBaVpE8eo%2BLVpxfRD0nQGJJ3FejeAoej0xzauhZvTutnIHB4cWYWkgTHIm78TEkNCaZdp98BHjClJwoEh7pVJKADlwQ6H4o7CgKRugbsKki7ZNDipNqEHlE4E%2FFfMMGBUSRjjk0gnJd3iehGiGJu5uBh2Ya4aX%2BXbe3lMmlfy0%2FsEevfZy%2Fk%2FZdw88sMj%2BYtZzaluQgf80JgWI0oYHcBaUkycSvbceD5vHTn7nM7CrNr7aR2%2FolWW0dNzE4DEfNF1UTvmkkBMmBvBcfNoROk4eOTsX9fu9628NH3Ewn6ao0QY6pgHpUbJdLR2aUfv2ro3Lp5ugmDDpJfJhciozi8n22pPurlhDZus3S0nAbni%2B1i7VoI%2B3lYPEK%2F%2FncRYh0lraDQ6hVqoVTfdHbqR7vnOTjKnYPKbvRq%2BG6YMY%2B5qH1O6k9VnPW2UtztZwcFXzuSGdACNpdIxyJ8vYloPRj%2BbzUwt7NdOjjw%2Fi0x7pMFqRBRnDD1cOAhdXmawBZIJpoSMrEuTDoMEYWm51&X-Amz-Signature=e7fb6ba6015d462f8be8764f36042612984e45233b463b25f297e638278c6076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7GHPK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDvkIDNNNnk78wjUcm1jjrLQju8S9qUCsHuQHZSPmb7UAiAemTi3MT1M7u0kEDJpFh1g%2FOxhrSvWWVZOsz%2F4kCs44yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nBB%2BMk5C2TFaqjKKtwDLZeytdr18HYYh7WDHzpHD5O2HJyG3s2hSU0T%2BHcpTu4mEHWMoDxwiX%2BKaVu2yrG5Qy0ACYzl6rPeMc9HlCllWkf8JArv0V%2F0eOA73aXtZiVxCE9GlWpg%2Fha0zWrYLJTUmjGRsSa86O2Li53HhnBCEjpuYfxscjhYPM%2ByB29is7joCwCldByG%2FwnLSlDcNYn1Xf6lfbxg%2BkVAM%2FXFJTRgSRWKb00iRVjWqmfpmJ8Gv76xzQQ95Jr0cfuAvQ%2BokO4w08xiZnFJr2DWvF69Zvo7BK6JkcBWPUIWAdD8IPNtDKW8sim7XJU3zj2KLdtvPfr7mPB%2BOBzIiirveReJ3BmE%2FOjBaVpE8eo%2BLVpxfRD0nQGJJ3FejeAoej0xzauhZvTutnIHB4cWYWkgTHIm78TEkNCaZdp98BHjClJwoEh7pVJKADlwQ6H4o7CgKRugbsKki7ZNDipNqEHlE4E%2FFfMMGBUSRjjk0gnJd3iehGiGJu5uBh2Ya4aX%2BXbe3lMmlfy0%2FsEevfZy%2Fk%2FZdw88sMj%2BYtZzaluQgf80JgWI0oYHcBaUkycSvbceD5vHTn7nM7CrNr7aR2%2FolWW0dNzE4DEfNF1UTvmkkBMmBvBcfNoROk4eOTsX9fu9628NH3Ewn6ao0QY6pgHpUbJdLR2aUfv2ro3Lp5ugmDDpJfJhciozi8n22pPurlhDZus3S0nAbni%2B1i7VoI%2B3lYPEK%2F%2FncRYh0lraDQ6hVqoVTfdHbqR7vnOTjKnYPKbvRq%2BG6YMY%2B5qH1O6k9VnPW2UtztZwcFXzuSGdACNpdIxyJ8vYloPRj%2BbzUwt7NdOjjw%2Fi0x7pMFqRBRnDD1cOAhdXmawBZIJpoSMrEuTDoMEYWm51&X-Amz-Signature=26c8c119ee0e43a8a4b0ff902930fbccf1b0b790de33a08d8499a9d3c5d6c773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHOMODC%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIG2707H79cNEznO06tR5niar2vYNPVWNqYwdNrQeCIfoAiBXnZVOCOv5aNrnKG0pkYJguBgQGjkXOCaNhBEa4KEFqSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3NrRv7TEjOjBy3OVKtwDuKXovL64WRrv%2B5KsYMQUwLeeBzXoVD99wuKY4Sql9zSpmwTUKxkUQYsYBY9dOv87O%2FmOQXCeWXi52uRovhuxBXj7N7bs1OLJLvl8qMODGK6llsI9i8m0QBR5RRw7OgHcxUNdBSJi3RJ5D8TSVWXg58wL%2B9YV1WRTDwUExDAiKoPAk7hY8LsjM0jXBzqon9Ak%2FtmUrlf4%2FQl%2FewVBWkWFz7NG8qvzTGY9FyeJIEdh9MICMZ3ICx4UhGSBxzZh2BgBQe84KCd18Bn520hu7NHb6VYQHqIvSIBt8Gk7E7uOR0bDKbTSqI16IkA4pZPpOUQsIF0JnS87K5citPWdu%2Fy0m6TQN3PEK2kkAq6Qsevil2carydCIa0oiOEXy%2FeRkAx6lDdoHP50ZzLK93ZZMwWKbp%2FzPFQQvwBr8s5eqcX0chAU3znC%2BPUTwmoZqsPSIFkG6JACApxYRITFDXhpxxT8G%2FpWgOZWuBkuz4pR7vCJ1WaEC9XXiWou%2FESPK6FQEjWXyqy35sExI3X5%2BL6viHaczrJTjqhSLkvIIjLPmhBAXoDBViXlhUO%2FVWvvFXJeDmnFfEyb1s5mLWbW9k%2FkViDQLgLpuBZI8jYqj%2F5YMeIBIx2nwtNU3Hd%2FGJHfQgMwzaao0QY6pgHmLw9TZIfpkWJcAygwgvbxOEkLVQbOQMmkn1mv0QH7FF7tqJ97AA1PybpOzyPZl3y2ng%2BjuQPwbJbg8hoOGIUSYjJ5jl0fBu%2BBsk9jNbMZwIW3rVN2Kxt75oP%2FXEdrfACe4CRP%2BuamHFkSYFl0N9j2yWM2e4C4ca1NJ8Lk5NfG%2FtVi%2B9ALjKJXwWyt2ajMgCZplLpMSZptgdrbHQMjwOIwUUOgJ6tS&X-Amz-Signature=7dfbccd594094ecf0f6a98937dc56c6445b710637c96fb5d3f93b4858f8271bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3QA4NN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCjNBjBJENbIwWm%2BRmPbbM1v1d6eAvMlZBWpoiiSqvS0AIgSMpAcxHZ%2ByqxubgMk%2FNsrweP8cyZK%2B55XqEN6W9WW8gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMv9UfIWRDZRhISjvSrcA6eztGFYCHZ4xds%2FIyf1pfTiNJTOmoLPYbk7yiKHyPqjRyHkBneDDTMd9Frar0qdLct0YtdCAmLVnbuPS2010nUUk9ZZWiIcjDa4zFeKz%2B3nRV16PlgFhI4rLnndCbk1ORGuhpiEX%2FFsXzBhpdhwc7JCvAvpkz1bWQ94RPZcrTv3h96PdHOguLXyMwzVr6mvXl6y0EcZADXNHJddc7xUwEXZdN0RbfSp%2F5%2FEmaIg8cYTR2QAEuIRYOAvzE1KwD%2FYncu3oOK23kdLKDIgZ%2Bgn8QYcYmTZDlrO%2Bh62iVP6vmI0PFhy%2FuKoRbazlNKveNEuZ5lBQUYjWnsleADhO2bnkKrUeV7tw1gxfKXkqpbW7cE7G5nHmAaJMvPQsYaiystO8x6Tn6Z2cEfrMzCDdkIU2uqkXaal7GytrJ5RaQjK03TYmZdjKnBDmZ7kCbWQ5P%2FysCsr2crjQluD1%2BJu3Y7Z1TvgN8TDzseFdCuR0hBofExA2U4V6gbt9Baij6M9T56EZtkfe9SbY3BYfsfzMNKGC8UgDaH93npG87UYAupWoLf0mmUpU5KfDH778DHnF3%2FAm8V7%2FPXhpvR8p5TbMAHRFXfEFIEVEK5Xl5sNfLRC%2BSyvqa61rwwO81bY%2Bh%2FHMMmmqNEGOqUBB%2BUESv%2FIy79cQsvq%2B2u2WMwSRCSTQ7iW9X3mR7WHadW6xQYkGHbd3KPlntEfBXiZOHHnSrQE8EvLqP%2FKovf3eRH5aov5NW0SuayOZ8PmVBmRdiUTZk8oT%2FsHkpa7i9hCjPqLxWbN0i%2BVST8O0dIxoxqh6zquNLeE%2BZcQwXC3Jcsrmav0oFpz2ncypVr3e5nnB6FAsnjLb2ephDB2GREzwaUKOeEI&X-Amz-Signature=93c72d412cd468c838d3b50be10a331974d0fa00f2396f008db8f9d35797e082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7GHPK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDvkIDNNNnk78wjUcm1jjrLQju8S9qUCsHuQHZSPmb7UAiAemTi3MT1M7u0kEDJpFh1g%2FOxhrSvWWVZOsz%2F4kCs44yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nBB%2BMk5C2TFaqjKKtwDLZeytdr18HYYh7WDHzpHD5O2HJyG3s2hSU0T%2BHcpTu4mEHWMoDxwiX%2BKaVu2yrG5Qy0ACYzl6rPeMc9HlCllWkf8JArv0V%2F0eOA73aXtZiVxCE9GlWpg%2Fha0zWrYLJTUmjGRsSa86O2Li53HhnBCEjpuYfxscjhYPM%2ByB29is7joCwCldByG%2FwnLSlDcNYn1Xf6lfbxg%2BkVAM%2FXFJTRgSRWKb00iRVjWqmfpmJ8Gv76xzQQ95Jr0cfuAvQ%2BokO4w08xiZnFJr2DWvF69Zvo7BK6JkcBWPUIWAdD8IPNtDKW8sim7XJU3zj2KLdtvPfr7mPB%2BOBzIiirveReJ3BmE%2FOjBaVpE8eo%2BLVpxfRD0nQGJJ3FejeAoej0xzauhZvTutnIHB4cWYWkgTHIm78TEkNCaZdp98BHjClJwoEh7pVJKADlwQ6H4o7CgKRugbsKki7ZNDipNqEHlE4E%2FFfMMGBUSRjjk0gnJd3iehGiGJu5uBh2Ya4aX%2BXbe3lMmlfy0%2FsEevfZy%2Fk%2FZdw88sMj%2BYtZzaluQgf80JgWI0oYHcBaUkycSvbceD5vHTn7nM7CrNr7aR2%2FolWW0dNzE4DEfNF1UTvmkkBMmBvBcfNoROk4eOTsX9fu9628NH3Ewn6ao0QY6pgHpUbJdLR2aUfv2ro3Lp5ugmDDpJfJhciozi8n22pPurlhDZus3S0nAbni%2B1i7VoI%2B3lYPEK%2F%2FncRYh0lraDQ6hVqoVTfdHbqR7vnOTjKnYPKbvRq%2BG6YMY%2B5qH1O6k9VnPW2UtztZwcFXzuSGdACNpdIxyJ8vYloPRj%2BbzUwt7NdOjjw%2Fi0x7pMFqRBRnDD1cOAhdXmawBZIJpoSMrEuTDoMEYWm51&X-Amz-Signature=3e6311140e2ec7819cb3116f0ab5fd869ab25e813738bce9daa0cdd404365251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
