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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVE7XAB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCKbtmp7pC%2FFOAV8Lk7kcBUs4RcNAukLMjVXAE7KT8bJwIgYLH6EH7L7CTCantJzSqx8yOETwJmbODAK5Mroij%2BaA8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEraCmdxSrv86LgZeircAwT%2FfGqH%2Ba4x9rI9y0nLHaQMWbCLaxnCcRCXfdD8kxy%2F1380NVJFfra1RsKCOP40sZmRwyCgciSdlp46rpnLi%2B9lJYEWlIbxWvMJuz1rBUgUF4BkGfRVhoEeIMdGOgqTnBL4%2F6vG5e9lZQjp3gO2Q93lWOCDII8pdA5FaUIUFfCsr%2BMG91yCdc0Tid7w0RQor70kDzOs4wkNbfnBL4putpzEO3FpgN97bwMGtYK24kvepflUTLWURmqliGbyB9zJP3CEdv4SkFLlW3zPbql%2Bu%2FODcoYp1BLrXLiMmTV5vXATBjQBVcALL%2F2H24xQkXl0M4z8cIVKnfb0NosrK65WH6DQ5P6aOQJnR618EIprnoAYpyHMrcAQXYC6O0XUT8cwxSYpr5lcm1z5ymMpY92cdWnGgHHWZ7ChSYu4A6FrOyuITCJcPtWvisDOX%2FT7ho1jgkM84Xrx6sBHLT77V1hXb9e5ecgFyq4%2FA0mecloZaDEBHReIgUDQiNsqhUxpnyI9Gl2YwNY%2F3%2BIEPpaE3Prjpej92fZXoZMvZ4ah7s9GhUw3hdv%2BFI5nlsLjpApOh6woqXGr4BrTw4hO4sDG2JcE9FXBYcA4IzQafmDqMdgKtQUIrgQjRZ1DFuhocy6GMPy8%2Bb0GOqUB20PrQNOIRVvcDOuWBqVybtr9TZ6SOYlgs65gmV6BUltF9FA6oQBnlvW2YsIiTA1IM81pZAJjhS0Oka%2BfBIVN%2FeS9YGAhKd8vkdyKB65QXsANl2FSRu8qKsOOdRi0F9kqDmO%2F1ZQ2440N9Ip1fLAQehrJRQtUm4coqXB0QS1LuG06yQ8hcYhQg8iVd9MmFRHHWiqUkQfSUxAHDQOMSewqceQfS5Rn&X-Amz-Signature=6ca5301ec76b3cc483ff99a3c516a4cf518479d023f6b2dedbab5d68bf1cc053&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVE7XAB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCKbtmp7pC%2FFOAV8Lk7kcBUs4RcNAukLMjVXAE7KT8bJwIgYLH6EH7L7CTCantJzSqx8yOETwJmbODAK5Mroij%2BaA8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEraCmdxSrv86LgZeircAwT%2FfGqH%2Ba4x9rI9y0nLHaQMWbCLaxnCcRCXfdD8kxy%2F1380NVJFfra1RsKCOP40sZmRwyCgciSdlp46rpnLi%2B9lJYEWlIbxWvMJuz1rBUgUF4BkGfRVhoEeIMdGOgqTnBL4%2F6vG5e9lZQjp3gO2Q93lWOCDII8pdA5FaUIUFfCsr%2BMG91yCdc0Tid7w0RQor70kDzOs4wkNbfnBL4putpzEO3FpgN97bwMGtYK24kvepflUTLWURmqliGbyB9zJP3CEdv4SkFLlW3zPbql%2Bu%2FODcoYp1BLrXLiMmTV5vXATBjQBVcALL%2F2H24xQkXl0M4z8cIVKnfb0NosrK65WH6DQ5P6aOQJnR618EIprnoAYpyHMrcAQXYC6O0XUT8cwxSYpr5lcm1z5ymMpY92cdWnGgHHWZ7ChSYu4A6FrOyuITCJcPtWvisDOX%2FT7ho1jgkM84Xrx6sBHLT77V1hXb9e5ecgFyq4%2FA0mecloZaDEBHReIgUDQiNsqhUxpnyI9Gl2YwNY%2F3%2BIEPpaE3Prjpej92fZXoZMvZ4ah7s9GhUw3hdv%2BFI5nlsLjpApOh6woqXGr4BrTw4hO4sDG2JcE9FXBYcA4IzQafmDqMdgKtQUIrgQjRZ1DFuhocy6GMPy8%2Bb0GOqUB20PrQNOIRVvcDOuWBqVybtr9TZ6SOYlgs65gmV6BUltF9FA6oQBnlvW2YsIiTA1IM81pZAJjhS0Oka%2BfBIVN%2FeS9YGAhKd8vkdyKB65QXsANl2FSRu8qKsOOdRi0F9kqDmO%2F1ZQ2440N9Ip1fLAQehrJRQtUm4coqXB0QS1LuG06yQ8hcYhQg8iVd9MmFRHHWiqUkQfSUxAHDQOMSewqceQfS5Rn&X-Amz-Signature=5f6018a134b0ef0b3a2381f741334b33dc81f54aaeee6c0a6d00842ce972f1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEJO2U4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDfKx9Dsgcqa7LS4C2WkQSF1TSR6XPHua8CtKRvdBXxGgIgc80xK7%2BVqozGVqw8Cm6nz4AUTw34QN%2By0eqYbMK7DzQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWyul6jVCu8VjfhzircA3II00nHY2l9Fp3PjSqe1jYDKcIbh8kUVx57dFc%2Fz4Agn4QHT28q1Fno6GWR3yOT%2BJW3ljl74hl3EKmcYXcertFpk%2BYhRTMlHI4DsSlCMIuZcNx3XJrYf23Y8bX7VgCFZKIqi%2BKLeJpDG71AGVZyOQ9W%2BZzXH11w0O0vo4prSJSNiAmRc6v1WNLxC5N5MrfOZxf5fBt%2F%2Bg%2FxlI25OEO4%2F8cqHACyc3RncW35CDgYjFSpDHYvZx3YhrISfaOIvWdODnfPwDFygkeDAa5jFg93k5GY261320ySFvs7gKxPepFGnHK0r3U5UhibonGNVwxJgaFR642BGAmtY0cxNP6%2Fj6w9l5ZqEwbDsca67544C2OCqwkJxXuibH76bhYaTQ4PwtDaKRwl3m79b%2Fpl7%2BS3TnzZ40z7GwW6wCRM%2FXViekdXl3VfeBKJBrN%2FAphGex5TCo2zLcwaBEwDzQm6NagxSHhqYPQqjcZXNXXNPLMYVXgrNFhPziFSF%2Bd5uMRKE4L21t6qNG%2BqjmIfwL0zuyngWrE0W53mCdhPHOljwuJ%2FdYAV5rEy8TKa%2FQAyvxgulcL%2FnqVVGmhNY7SWp3vLsvCAzwijGv7LkIMprzLAgbUk0Qwk%2B91kfPkNpmtqvFqPMM%2B8%2Bb0GOqUBs8pxzzCPcfL4Au1KqLQfQIa1mh5DZjvjTMact%2Bjku5vidMZNUvik0P5m90SkQFrG%2FcN9NcrFcWw8BVYiE5ghENHMrAUpd3qaNQXFqs9dmZdyq2RUii4RVse7hNQxHluUAmj1O%2FzFEy%2F4TEOm%2BxGzDAEq5x9xUsCplMv7ISk16XgjTHX5GFAvF89TQCIXC5XLFDeysqsp7%2FEK2iS6yKMN%2FLDj7gyt&X-Amz-Signature=de8499265f4d1d21c5292f18ed318e56968d76a732adaee5aac00a3c44c5b340&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMPCO3B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDEQnmzoSiZc4NuC5U85WQoezssV%2Fkf%2BWKamYfhifrmogIgaOtsiPP9TRsFLnec0KgkXGmtn%2BI4SseJvkxM%2FZzPYRcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBVMrJXABt2t3NtNfircA9%2FLWcPjdsYEy2izf1gTdoltK3CRqntGzNkEJ8rU4NOWTkfzOgBV5EuW9xalQH5Jqv%2Bi%2BJ4RBlnOOfjvcEWym2fZlGH6cza12%2BEZwqwX1ySCCrUtDFDYCVS2bICZ6DhwRpq23w3oSQU%2BzM6rxKBO8Rfh5ecaQvsWY3QIDPgsdXhaQrjS98JyCMBpa08Ylv%2BWe1RpSrtAOj1PjqEL8FTOopd%2BZRjJnmNoQwd0EDq1DeXiPH18wGEubIUT3gjXk5ZWpLk0A3nYzsnqwb6Q5uLDoFq4c5fc%2BI1UZYKa%2BAkJuvG9ujwpoHwhk4TCKVLy9D7sQhMcqL9sB25IisIYtUsNxBRVb%2BYPPL9Dc%2BIcmiWicPNqoZSI7A77dXHA8WPREfA4aZjI%2BW8VF%2F2mNLe9JKPULbc9%2B57N%2FU1z3qoIaK3rVJBmj09u3cDNJnbiI8Ki4v3m9hc4Kt5aukEZsjEv3%2F0vBuuLtFsaTlSkc5KgUfF8qtRToAs5NuYVhoZB%2F7J7GH8kTB8TYnl2v0cgl%2FXuaKbHkO4ftnHzUivGCkj9x1eJnJfVlFDjp0dnfdFqxwPewAJxjYYmBe3MAumYxHuio8DHZJbWNFVEDoyviBCwq4zb1zUU1fCKQujXBd8lbGrYMN28%2Bb0GOqUBcjgdsP%2BlelCCgCp24Kh0beOsG2oMLbuNQf%2BRwk5mZDwTIQz3LcTD4gwALsI6yzD3TWyL5FIrqJY6K8DdpcUe8OT%2BKG%2FxaruCnBSJY%2FW6res%2F7LDIJrffpUKYIVfWtAJCIPueg4x5dEHWU1jJCw28OJudIFiKghSjNu3%2BIa4s%2FAjWxg742CWhIboF3Z62c%2Fs9YT1XqAicxux7HITdXiH0UNvTGHpr&X-Amz-Signature=61ecbc9ccd862d710be223cd865de08e5868d2fbd059c6237194839fd2a6903f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVE7XAB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCKbtmp7pC%2FFOAV8Lk7kcBUs4RcNAukLMjVXAE7KT8bJwIgYLH6EH7L7CTCantJzSqx8yOETwJmbODAK5Mroij%2BaA8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEraCmdxSrv86LgZeircAwT%2FfGqH%2Ba4x9rI9y0nLHaQMWbCLaxnCcRCXfdD8kxy%2F1380NVJFfra1RsKCOP40sZmRwyCgciSdlp46rpnLi%2B9lJYEWlIbxWvMJuz1rBUgUF4BkGfRVhoEeIMdGOgqTnBL4%2F6vG5e9lZQjp3gO2Q93lWOCDII8pdA5FaUIUFfCsr%2BMG91yCdc0Tid7w0RQor70kDzOs4wkNbfnBL4putpzEO3FpgN97bwMGtYK24kvepflUTLWURmqliGbyB9zJP3CEdv4SkFLlW3zPbql%2Bu%2FODcoYp1BLrXLiMmTV5vXATBjQBVcALL%2F2H24xQkXl0M4z8cIVKnfb0NosrK65WH6DQ5P6aOQJnR618EIprnoAYpyHMrcAQXYC6O0XUT8cwxSYpr5lcm1z5ymMpY92cdWnGgHHWZ7ChSYu4A6FrOyuITCJcPtWvisDOX%2FT7ho1jgkM84Xrx6sBHLT77V1hXb9e5ecgFyq4%2FA0mecloZaDEBHReIgUDQiNsqhUxpnyI9Gl2YwNY%2F3%2BIEPpaE3Prjpej92fZXoZMvZ4ah7s9GhUw3hdv%2BFI5nlsLjpApOh6woqXGr4BrTw4hO4sDG2JcE9FXBYcA4IzQafmDqMdgKtQUIrgQjRZ1DFuhocy6GMPy8%2Bb0GOqUB20PrQNOIRVvcDOuWBqVybtr9TZ6SOYlgs65gmV6BUltF9FA6oQBnlvW2YsIiTA1IM81pZAJjhS0Oka%2BfBIVN%2FeS9YGAhKd8vkdyKB65QXsANl2FSRu8qKsOOdRi0F9kqDmO%2F1ZQ2440N9Ip1fLAQehrJRQtUm4coqXB0QS1LuG06yQ8hcYhQg8iVd9MmFRHHWiqUkQfSUxAHDQOMSewqceQfS5Rn&X-Amz-Signature=25b6aee2f572d00f686986274b9b5c8782c0aeb9229c7b0c066d6bbde2961caa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
