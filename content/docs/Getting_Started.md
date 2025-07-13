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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMLJF4X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2vV6y0%2FBUHbFrUDdwDOlGdvGUhnhs13iSitJhIE0ZAIgQXZJovJRgyL4Ka8eG3A2ZT4tuL%2BT83vXRFX7pQ00Xdoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD895DCgsT1%2B68g8SircA9oY33YGSKEO%2FCvnfhn8iGshaMihTJtdq4FmpNpSt1swl26M%2FKj1Q9M1ajCfpjfykKNFvdpaL6nFpayWT0eRA3M%2BMovw9vs10g%2FNljgX6RtTZuj5xW9OTkSemrPtVg54i3sIq%2Fs%2FaT3UPeDKedoTCFdiayuXwHt3ZeaeEnH0TUdi038euqvX%2FmbUiICjvBUzZrxOc9nMLIlq%2B4TIfMZ60uEkfSGHuO9gMdzJkr6QdI9mLr5cpLLfkILXvKYhs93%2Bppla1%2B3%2Fq%2F2jkksGgctfKN6luLMN32j50JLB%2FHwVIT3%2BavDL8PtTO%2FJmZ4dDWyOmL0spJmC6pbSI0uwkogV5CZN9DEeI85VHn4IihFsMbchd5D2tbl%2FzNJbqk440abZA2AlRF573m9RJGboeEJlHnl11%2FgrngOHsezd7GZoipjI8JmmNdlW%2FQ9YZAgASYG6LZ%2BUGFUead4Hln6b6kqjnEiQTV4jieYiHxQvGWY4iWEKyF7vDjfRVXFurvGESJr35kE8VD9kFRo1aazdGaChEhEyKdl%2FWG13QhqE2EMvZwWZXT8k9KM2zfwpGgzoSz6Kde7zDa0LndFI5Kawj43OnMzrzQG%2FchLkqxoPmMMoFd6ZBAjittWDXFbo7476bMMikzcMGOqUB0D5Q7%2BzNnBxL7mfp7nlv6mioz6Mi%2BPqk4ZMW%2BNd6cpe3ylx%2FmCYBAH%2BhtnGlMJ150Zhf6896fhM4UtSkH1bqT1JyZW7%2B0HmdkVq5WlAJ%2BKkDWUMUQm0PskHcGK5DTrhZdeavDd6iuwu6tfT5qcl7k2737Mv4s%2Fkz2TBhS8bbwwKVTA9cfjiIMFmkUBWp1bs87OdWmkfomi%2FrFl1rqb7qLN4n8DWg&X-Amz-Signature=8acc1b5dc3c3c4c9eca9b78afced8f1b0d09a610262bd3a279ecacfab1302e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMLJF4X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2vV6y0%2FBUHbFrUDdwDOlGdvGUhnhs13iSitJhIE0ZAIgQXZJovJRgyL4Ka8eG3A2ZT4tuL%2BT83vXRFX7pQ00Xdoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD895DCgsT1%2B68g8SircA9oY33YGSKEO%2FCvnfhn8iGshaMihTJtdq4FmpNpSt1swl26M%2FKj1Q9M1ajCfpjfykKNFvdpaL6nFpayWT0eRA3M%2BMovw9vs10g%2FNljgX6RtTZuj5xW9OTkSemrPtVg54i3sIq%2Fs%2FaT3UPeDKedoTCFdiayuXwHt3ZeaeEnH0TUdi038euqvX%2FmbUiICjvBUzZrxOc9nMLIlq%2B4TIfMZ60uEkfSGHuO9gMdzJkr6QdI9mLr5cpLLfkILXvKYhs93%2Bppla1%2B3%2Fq%2F2jkksGgctfKN6luLMN32j50JLB%2FHwVIT3%2BavDL8PtTO%2FJmZ4dDWyOmL0spJmC6pbSI0uwkogV5CZN9DEeI85VHn4IihFsMbchd5D2tbl%2FzNJbqk440abZA2AlRF573m9RJGboeEJlHnl11%2FgrngOHsezd7GZoipjI8JmmNdlW%2FQ9YZAgASYG6LZ%2BUGFUead4Hln6b6kqjnEiQTV4jieYiHxQvGWY4iWEKyF7vDjfRVXFurvGESJr35kE8VD9kFRo1aazdGaChEhEyKdl%2FWG13QhqE2EMvZwWZXT8k9KM2zfwpGgzoSz6Kde7zDa0LndFI5Kawj43OnMzrzQG%2FchLkqxoPmMMoFd6ZBAjittWDXFbo7476bMMikzcMGOqUB0D5Q7%2BzNnBxL7mfp7nlv6mioz6Mi%2BPqk4ZMW%2BNd6cpe3ylx%2FmCYBAH%2BhtnGlMJ150Zhf6896fhM4UtSkH1bqT1JyZW7%2B0HmdkVq5WlAJ%2BKkDWUMUQm0PskHcGK5DTrhZdeavDd6iuwu6tfT5qcl7k2737Mv4s%2Fkz2TBhS8bbwwKVTA9cfjiIMFmkUBWp1bs87OdWmkfomi%2FrFl1rqb7qLN4n8DWg&X-Amz-Signature=c4d2c931c315cacef8557cb3949a82dfd33303621b8b7d48818dc66941782246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMLJF4X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2vV6y0%2FBUHbFrUDdwDOlGdvGUhnhs13iSitJhIE0ZAIgQXZJovJRgyL4Ka8eG3A2ZT4tuL%2BT83vXRFX7pQ00Xdoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD895DCgsT1%2B68g8SircA9oY33YGSKEO%2FCvnfhn8iGshaMihTJtdq4FmpNpSt1swl26M%2FKj1Q9M1ajCfpjfykKNFvdpaL6nFpayWT0eRA3M%2BMovw9vs10g%2FNljgX6RtTZuj5xW9OTkSemrPtVg54i3sIq%2Fs%2FaT3UPeDKedoTCFdiayuXwHt3ZeaeEnH0TUdi038euqvX%2FmbUiICjvBUzZrxOc9nMLIlq%2B4TIfMZ60uEkfSGHuO9gMdzJkr6QdI9mLr5cpLLfkILXvKYhs93%2Bppla1%2B3%2Fq%2F2jkksGgctfKN6luLMN32j50JLB%2FHwVIT3%2BavDL8PtTO%2FJmZ4dDWyOmL0spJmC6pbSI0uwkogV5CZN9DEeI85VHn4IihFsMbchd5D2tbl%2FzNJbqk440abZA2AlRF573m9RJGboeEJlHnl11%2FgrngOHsezd7GZoipjI8JmmNdlW%2FQ9YZAgASYG6LZ%2BUGFUead4Hln6b6kqjnEiQTV4jieYiHxQvGWY4iWEKyF7vDjfRVXFurvGESJr35kE8VD9kFRo1aazdGaChEhEyKdl%2FWG13QhqE2EMvZwWZXT8k9KM2zfwpGgzoSz6Kde7zDa0LndFI5Kawj43OnMzrzQG%2FchLkqxoPmMMoFd6ZBAjittWDXFbo7476bMMikzcMGOqUB0D5Q7%2BzNnBxL7mfp7nlv6mioz6Mi%2BPqk4ZMW%2BNd6cpe3ylx%2FmCYBAH%2BhtnGlMJ150Zhf6896fhM4UtSkH1bqT1JyZW7%2B0HmdkVq5WlAJ%2BKkDWUMUQm0PskHcGK5DTrhZdeavDd6iuwu6tfT5qcl7k2737Mv4s%2Fkz2TBhS8bbwwKVTA9cfjiIMFmkUBWp1bs87OdWmkfomi%2FrFl1rqb7qLN4n8DWg&X-Amz-Signature=ea00626bfdcf2dfb05b6d6aa278b0b927f1b8944cc9616178354a2a8e185fd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6RMU2P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJNck9VZ6X1oLGjne23X43YMVo80g7TkRoSpgoqpCdAIhALbijZS0vaaS1OVe5hH1zPIBQLf%2B%2BhhEQjCHjvXCCACeKv8DCBAQABoMNjM3NDIzMTgzODA1IgwC83EXkDBoCd%2FWI58q3AOroT9Yj%2FD0T5%2B0ahwfrxc68ow5x%2B3hLTSAEP9OlqL4l2kKAGcq4VTUz9H3ZpjYBvsp%2BUrRvqXoFlYStZH3maPgs1kb8BCoG%2Bp8NSfHKTBw%2B1kLMRDj67ByWkYhzA%2BE1qhMSU8k5s9O4GGv7F114ZWe8K98MhwNsElLfmpdRLUF7F6vIQCVXNlmeEwRFK7bgHmNmOnBs0vQ3o2vGmRpAVRSIAIFIIk3u5taSFZt6NfeLZhKFctU4dq1cBjNHWc8dGVCQD4cdgnOVLZJRNZzE%2FNGXAtD3JrohCx0ZIZrF%2FIkydlnupY1Rz0iOjPmzqIUrB5tdbpkcItCnnyK1Dsb18Tt1mgQFyBn%2F0cz7LCoxDbVi3Wu%2FSgKxcoaBs3HQfURgL3kMffDoeRXoLX9Pgg0w1uI5rCCUP3nv1ySTwuj2%2BAzjnPhKcM2uonAYwTbTCk8c0oLSvolXS9wLuOIQ0w9XDxd6xeIhkBVK%2F1PrCr6VVaRthczZTO521cJubRieW4Y%2Fo4kFwgR32548Hkc8gmJIsd%2B%2BJsFSxhuiv2pwmrEd%2FISHOwLueNa5pkTMNAGlkjjGHtzmBeFnPtXjWDcwiw5FtGmv%2BADcqOQLdxhavzOaOwwRqyrOnDXsUhIR9C74zDapM3DBjqkARPRnQlBHOpDrMEij4ymLxiqfYFVNmNzPwbNIYatPG6MCvLL%2B65KaVfzN9ec9ru939PPoUm6pwQgE2bTKSp0g2Stit8MY0BFr41xoeqHsCLJtURsuZb0oNbtRjukZPQfA7C93WEq24RWUHHC1ivftirVfcJuUN9xF50%2BV57F19A1XQxah11ux4D2qhZWUWZC5Qx5xhZ796MFwmPlBNlosx2QNMMM&X-Amz-Signature=6cd0fb02815b89ede3c9fb19ed9b5ba9f7455693d7a4c80167971c6b322a8f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIYUPRNN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GVYl8hphh2Ec2TDYQniaXLLTAlpaxozgUFGAv%2BFNwAIhAOV22vrwt%2FssDFWw7G9CdEL9YgaMNvWuZIGA0RuvUNswKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzWxskcIL1gyXNH9Aq3APG3OKEYcC%2Bh7cm%2Bqb7GRqIsb3sxDrAA6HCcC40hZpWjDr3wHndgm7wbQJkTLuORULFViZ9Wm06%2ByCVU7KvlaqyxwAQY%2B0OfOYv9QQieUYq5QW3Vv9KKJHFQGjv%2FQldRKjhwRteGaxq9%2BBj0ePCGzLP98XsGguC4bxTMkt%2FD%2B2zC%2BBqzahBqIe8RI4xGyofLzaki2WJo3BbD7tI4MW68fhf0%2F7T7%2B8U2oOUsOqrHisYGVHR%2FNaYwe0NUxzLj4ZNv1nwd3EFhwvJSi4XUeJulUbfvDQzi5uzayMIakJWHe0sB06p9Ut%2FKjrqe%2FebG9755rdjoZIp6499gSkEIwQoDife8YCVeiZE2ws3CUGRIJehThkX60qnt%2BxA21grLEggZFgpa6hn6BzOLF1%2FnkKikN67Vwcr%2FCIZj3L63sWS4LURedZqm9ZEQGU5W9cJVglvuhdNfLwh4hTgJlpzn5KmV7xUS7HS9cbmR%2BJ4%2B1DnRdnWCxiLZ3GLe5ywh3uI0P3OC6XU6bE7KnHR25VLmAornAburFzPhHtxWRo70RQBsGMk%2BX8jdrdCxOG%2Bz6q8GGSP0v04KrcLD0fCMFpdesWb%2F1KieUCxYj1AKvNKpXfbEqGfKFVvfEH6FwEQi552WDDwo83DBjqkAY8jq%2BV0VtIvR4Ya7KZAf9kOb9h%2Bk%2FqOxyzyTSPb5mXLA1XGxgQxm4eUKNkgf15iHyqkIBZAN5VFfbrDISuvWH2YNiMTApxugYn6Y8HLGGr4GYVNl5HuZODoXC4qR8RhlXdQB878tlFcqxRxfIyKVmDqXAAJkYa4keLZzuzB9oeZiC8CCFRVRLOkicDcjXtxZGYdEm2k%2BS7Ld%2BcTqsB3v4VvlM%2B%2B&X-Amz-Signature=6c26681e922f1b7a201fb1f104bf35624fadf2d564cc47602ad0a6fcf3401f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMLJF4X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2vV6y0%2FBUHbFrUDdwDOlGdvGUhnhs13iSitJhIE0ZAIgQXZJovJRgyL4Ka8eG3A2ZT4tuL%2BT83vXRFX7pQ00Xdoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD895DCgsT1%2B68g8SircA9oY33YGSKEO%2FCvnfhn8iGshaMihTJtdq4FmpNpSt1swl26M%2FKj1Q9M1ajCfpjfykKNFvdpaL6nFpayWT0eRA3M%2BMovw9vs10g%2FNljgX6RtTZuj5xW9OTkSemrPtVg54i3sIq%2Fs%2FaT3UPeDKedoTCFdiayuXwHt3ZeaeEnH0TUdi038euqvX%2FmbUiICjvBUzZrxOc9nMLIlq%2B4TIfMZ60uEkfSGHuO9gMdzJkr6QdI9mLr5cpLLfkILXvKYhs93%2Bppla1%2B3%2Fq%2F2jkksGgctfKN6luLMN32j50JLB%2FHwVIT3%2BavDL8PtTO%2FJmZ4dDWyOmL0spJmC6pbSI0uwkogV5CZN9DEeI85VHn4IihFsMbchd5D2tbl%2FzNJbqk440abZA2AlRF573m9RJGboeEJlHnl11%2FgrngOHsezd7GZoipjI8JmmNdlW%2FQ9YZAgASYG6LZ%2BUGFUead4Hln6b6kqjnEiQTV4jieYiHxQvGWY4iWEKyF7vDjfRVXFurvGESJr35kE8VD9kFRo1aazdGaChEhEyKdl%2FWG13QhqE2EMvZwWZXT8k9KM2zfwpGgzoSz6Kde7zDa0LndFI5Kawj43OnMzrzQG%2FchLkqxoPmMMoFd6ZBAjittWDXFbo7476bMMikzcMGOqUB0D5Q7%2BzNnBxL7mfp7nlv6mioz6Mi%2BPqk4ZMW%2BNd6cpe3ylx%2FmCYBAH%2BhtnGlMJ150Zhf6896fhM4UtSkH1bqT1JyZW7%2B0HmdkVq5WlAJ%2BKkDWUMUQm0PskHcGK5DTrhZdeavDd6iuwu6tfT5qcl7k2737Mv4s%2Fkz2TBhS8bbwwKVTA9cfjiIMFmkUBWp1bs87OdWmkfomi%2FrFl1rqb7qLN4n8DWg&X-Amz-Signature=de7a68386606368c7c2d4ecc8eb633b26195dea5c521a004cbeca38048e8b7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
