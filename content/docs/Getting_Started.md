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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAUQGLL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5cloVcP4KmI8KGc3d8DzwQNjsJtL%2FR9xBRDJ20TLKwIhAPukDGsRhtm5GO1RUlA9jefG7PMdMzk1tqNketscH1hPKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUhjEYxXBxjGY4%2F4q3APZlM8IPiEN8M2Izq0YUfVZhUJlCNj%2F9BvCWT3jEdTP3TVN1%2BPKpLKUnCNbunhlXwGHT3y11603Q2b0mtQL23T49kfU35BpfCD1ndFftyiXHextqJMm%2Fl26JpMTYssqTPNRqmBIxNbWjZWkRqBatI5%2B0y02pn4y0PuoYyOWtfk%2FllP31%2BNHzTvXImanntoYvIjEqkWmN%2BuvjPMkn4Kgcgi4eYo4PzazZoFDoiRTb5yzdYa69XXqoyhn0CAh%2BLEOrX5IFyDnYBcDw1lFalYxa6x2inMElsahknRUTrlTAmtmBSUahD6mW9XGVCT9bUJDWmY%2BKOCd23SPhBvsFJOQSYKy6Tedi%2BGHUacddmDYlTQelN%2BXj78TOs7wxVJodX370U4pOBVk2D05McboRlZE3rra35pxYTtYPVgUsXpt%2BGHy502Iv5UNtaR%2Bj0e4mhg2en%2Be%2FIxsgZekkmAxbX0BUJotTVXsU5ZY2STKb1Ix6sXoaGHLi68iGL2KsV8biazSH8KhYP0g4ei4xMbsZIgV7h6zf5ybOKi0hlJTm7jidrLekJbaXoduHEeIQv%2FXxx8fkZ%2BaRs393HLTBHT%2BA4K44Rj0LzQH9c%2BKMHqPlqa9oK2x4iVHj4AbL7JZI0IsDzDR0f3CBjqkAdKkH2UmWYEP7xiFyY6AAxYlOtM%2FRGlt5TZSTKb3pYxDcXag2hak1JZ6W2VmtICiUnRXViAbu68p3iyNS4Omi%2FxgyejGJoKXAet6pkEG2ZHYtiWwYoHWFgCmJXkiH98yjNJkVZFimjBNtLc5PfIZOlMdxOkiN0A8jKh5ASD%2BV8ioDo%2Fwg%2B3yVebyUKPP01UGHwVjN4GXAcLb4xnAk3gn0lmtWMSK&X-Amz-Signature=53d3d3d8e5e3080315411b700b3f0712b01c2b55f050894a01b656291d757bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAUQGLL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5cloVcP4KmI8KGc3d8DzwQNjsJtL%2FR9xBRDJ20TLKwIhAPukDGsRhtm5GO1RUlA9jefG7PMdMzk1tqNketscH1hPKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUhjEYxXBxjGY4%2F4q3APZlM8IPiEN8M2Izq0YUfVZhUJlCNj%2F9BvCWT3jEdTP3TVN1%2BPKpLKUnCNbunhlXwGHT3y11603Q2b0mtQL23T49kfU35BpfCD1ndFftyiXHextqJMm%2Fl26JpMTYssqTPNRqmBIxNbWjZWkRqBatI5%2B0y02pn4y0PuoYyOWtfk%2FllP31%2BNHzTvXImanntoYvIjEqkWmN%2BuvjPMkn4Kgcgi4eYo4PzazZoFDoiRTb5yzdYa69XXqoyhn0CAh%2BLEOrX5IFyDnYBcDw1lFalYxa6x2inMElsahknRUTrlTAmtmBSUahD6mW9XGVCT9bUJDWmY%2BKOCd23SPhBvsFJOQSYKy6Tedi%2BGHUacddmDYlTQelN%2BXj78TOs7wxVJodX370U4pOBVk2D05McboRlZE3rra35pxYTtYPVgUsXpt%2BGHy502Iv5UNtaR%2Bj0e4mhg2en%2Be%2FIxsgZekkmAxbX0BUJotTVXsU5ZY2STKb1Ix6sXoaGHLi68iGL2KsV8biazSH8KhYP0g4ei4xMbsZIgV7h6zf5ybOKi0hlJTm7jidrLekJbaXoduHEeIQv%2FXxx8fkZ%2BaRs393HLTBHT%2BA4K44Rj0LzQH9c%2BKMHqPlqa9oK2x4iVHj4AbL7JZI0IsDzDR0f3CBjqkAdKkH2UmWYEP7xiFyY6AAxYlOtM%2FRGlt5TZSTKb3pYxDcXag2hak1JZ6W2VmtICiUnRXViAbu68p3iyNS4Omi%2FxgyejGJoKXAet6pkEG2ZHYtiWwYoHWFgCmJXkiH98yjNJkVZFimjBNtLc5PfIZOlMdxOkiN0A8jKh5ASD%2BV8ioDo%2Fwg%2B3yVebyUKPP01UGHwVjN4GXAcLb4xnAk3gn0lmtWMSK&X-Amz-Signature=cb993418950493abf07fa7009d74f4db1ca0068555d605efe0ae9bd1430919f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAUQGLL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5cloVcP4KmI8KGc3d8DzwQNjsJtL%2FR9xBRDJ20TLKwIhAPukDGsRhtm5GO1RUlA9jefG7PMdMzk1tqNketscH1hPKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUhjEYxXBxjGY4%2F4q3APZlM8IPiEN8M2Izq0YUfVZhUJlCNj%2F9BvCWT3jEdTP3TVN1%2BPKpLKUnCNbunhlXwGHT3y11603Q2b0mtQL23T49kfU35BpfCD1ndFftyiXHextqJMm%2Fl26JpMTYssqTPNRqmBIxNbWjZWkRqBatI5%2B0y02pn4y0PuoYyOWtfk%2FllP31%2BNHzTvXImanntoYvIjEqkWmN%2BuvjPMkn4Kgcgi4eYo4PzazZoFDoiRTb5yzdYa69XXqoyhn0CAh%2BLEOrX5IFyDnYBcDw1lFalYxa6x2inMElsahknRUTrlTAmtmBSUahD6mW9XGVCT9bUJDWmY%2BKOCd23SPhBvsFJOQSYKy6Tedi%2BGHUacddmDYlTQelN%2BXj78TOs7wxVJodX370U4pOBVk2D05McboRlZE3rra35pxYTtYPVgUsXpt%2BGHy502Iv5UNtaR%2Bj0e4mhg2en%2Be%2FIxsgZekkmAxbX0BUJotTVXsU5ZY2STKb1Ix6sXoaGHLi68iGL2KsV8biazSH8KhYP0g4ei4xMbsZIgV7h6zf5ybOKi0hlJTm7jidrLekJbaXoduHEeIQv%2FXxx8fkZ%2BaRs393HLTBHT%2BA4K44Rj0LzQH9c%2BKMHqPlqa9oK2x4iVHj4AbL7JZI0IsDzDR0f3CBjqkAdKkH2UmWYEP7xiFyY6AAxYlOtM%2FRGlt5TZSTKb3pYxDcXag2hak1JZ6W2VmtICiUnRXViAbu68p3iyNS4Omi%2FxgyejGJoKXAet6pkEG2ZHYtiWwYoHWFgCmJXkiH98yjNJkVZFimjBNtLc5PfIZOlMdxOkiN0A8jKh5ASD%2BV8ioDo%2Fwg%2B3yVebyUKPP01UGHwVjN4GXAcLb4xnAk3gn0lmtWMSK&X-Amz-Signature=602ccc15fcccbf2c247fd569193dbadd16f1b642e881d47cd906c87018931ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCRPFIJB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoNftxJRKm6lwPR%2FKqPgEQQwCGyciaq%2Fa6SFC7M03j5AiEAtXQX4Nnb%2BrkoZnIfGFQgGWm0r15giRB1ag9y2Otx1nQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLY9xygZHZNIyryc3SrcA1EXVfBsdE6j5oJCgg3o66Ms72ybPtSKxrOeMbKbFCNAsPHkqDruy5QDoawaLGkopsCY%2FFQ1X7RyvvqXvdtWs%2Frts4tc4CJhgbuckMWfHBo1VP4%2FcWj%2FQ0hcV8n%2B8TF6AI04u3zmVBZQMMclDb9ANsm7En0AS3URwpny13GdZ%2BszsAZZNGLKGSRTyVgJ8tImIhg99i4ljktYe82CDQsK%2FNEZMKqAh%2Fn1DxBmaFhyh9aRFMsyuHXp7ZXT8vrg7ZAg1eQc7%2Fg5pwsNBRQ75I19hIzTakbScf6mhM0d%2BlFguBzArD5PIImTSFGEsXSILzRF8oFdEUJmwDjcNgdYwSWI5gScGkUmM5%2Fozv8CsVslEcUG3R3SMXlyix6mZiXf4esobjMu5nI0igsL97dL1fG77Di78AwF68o8MqxxyCFFXVfgwrNRFmn7i8fBHxjNXZRGLQQlIDNCWieIIQADt2%2B9Uj111VOmuk7HSfU3mb2a%2B43lsAE%2FpcXbOszgEWFOIbbOUHsli7hzaOeZs9vgGTdFnQvOxKKvS2AK8YLIF9IPD5N%2Fuqe7LC%2BMxS17Ve2%2B5dY31djrbVRh6AtbC%2BcTUubjbGBNM65DvRfWAWCXxr0IIS7pplcSlRAWvrYKljYvMKXS%2FcIGOqUBco4tdSfjYU6VD%2BUWgSqaBnlcBLZ0zyEDEb9KqU1IQuOz6wk34jN%2Fe6eVP8YvGTgX%2F8ijXMmlQh6dcZ28SXniNuJZOMulfHHj9OOi0NsF7qSdoOE0XhQGUc0hXSAUg%2F5BfTWiFH2KMfu9CUZMU8p5lgYONP%2BB9ckmHaI%2FzW0HAx2oHfvRIG5xgdv06MnnUQc2lzBrJMp3H7mYscDfq6aSqpspLQsQ&X-Amz-Signature=b8a077b95a0b3cd2198217b40d9543721b77147f74de6a4243c5571c6f5be0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPVTU2C%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwdf6DNN0fFlKIlIUL4Na4Lwsx1ouiEqr6CtB5enVUCAIhAO8REMd0Sdg3YAJQ7o5d%2FJR7AHpC24hLZ8zUJHpMCfcOKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgwwGXOIwwEnlocrUq3AMSPMuMPT5FUjZcuLOXnUBozd4ODX9hZZ4lPmcoqluTOGRj1DYxgLMAEO5NCjOQHlML2%2F9QjXPNuoEDJJ95GVEso4GydR2Y73Y3DPun7Xf0LljuwlALYLyWI0f7MXabhUh%2BCgOS1RBKXiJ2SyXlI9kOqVsf92yOV67XtXmU4Z8xzMdKr3ANCKHYPB7u9hc1%2BeVp45FVI9mpsW3hHxq1L46J9Vo1d5nVMtsi1j0LchdwRz8Fq0UONOW3mLWdtx8Lzrz6HY%2FnIwds0qCFrNrZdCW8%2F21xA37g7ZmcMBctuj8kIZTJK1ST6b%2BEbhUXLpBHHOTL3MSX9GPul79v1WUFbCWRZJHyP15mp%2BGY9YIAwIsti4DZhCrBK1hFwrSf%2FFW%2BCLOtnWtmNqqPhv0dBB%2B6mEbM0QJpMQMC19zMW9Mf6u%2FuKjE2QW6MJZQJsg8a6n%2B5Z585ilbfYjWmt3I8%2BsgWYoidhfRpT%2BgKUVgIxBGjdAtnylOE7EVe3l%2FaGMCrzwicx3DF0D3gW9M7F95Tkk6Ph1rFnYRf09%2BEAEAoQQhw6PxwaJM1tFSM%2B3Womioz9Uf4XzwmWYoRxzpRbW%2Fk%2FUTGKOrSIwWVUkWdXsAG%2BkEnIPHtp50IQEuAH4jvEAHGlzCE0v3CBjqkARDfVcAWdtrEpMiFyZP%2BBH9EX4pckyiio%2FlkHDwSUux3UVBT7%2BBZ5BZ2N%2BqpIhwNvV5bEN%2BSNRvHHMsFIc9oTJCibLMcBVb8SsXgqhiaix00Wt4AHfctwrcgsNpz%2BbajObHAN%2Bt%2BsxJHzFrEEfA0wrsyEs3YXCepWVSVEz2iit6z8GlvrGeVjbLfD79eQnKu0Dc6A9B%2F3MM7dtbKQDkBXr35jxOb&X-Amz-Signature=0d7ec1449ab0f5e01b87401a910fcc5dfc6abdb15fff1e0ac6d89b3546e43666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAUQGLL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5cloVcP4KmI8KGc3d8DzwQNjsJtL%2FR9xBRDJ20TLKwIhAPukDGsRhtm5GO1RUlA9jefG7PMdMzk1tqNketscH1hPKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUhjEYxXBxjGY4%2F4q3APZlM8IPiEN8M2Izq0YUfVZhUJlCNj%2F9BvCWT3jEdTP3TVN1%2BPKpLKUnCNbunhlXwGHT3y11603Q2b0mtQL23T49kfU35BpfCD1ndFftyiXHextqJMm%2Fl26JpMTYssqTPNRqmBIxNbWjZWkRqBatI5%2B0y02pn4y0PuoYyOWtfk%2FllP31%2BNHzTvXImanntoYvIjEqkWmN%2BuvjPMkn4Kgcgi4eYo4PzazZoFDoiRTb5yzdYa69XXqoyhn0CAh%2BLEOrX5IFyDnYBcDw1lFalYxa6x2inMElsahknRUTrlTAmtmBSUahD6mW9XGVCT9bUJDWmY%2BKOCd23SPhBvsFJOQSYKy6Tedi%2BGHUacddmDYlTQelN%2BXj78TOs7wxVJodX370U4pOBVk2D05McboRlZE3rra35pxYTtYPVgUsXpt%2BGHy502Iv5UNtaR%2Bj0e4mhg2en%2Be%2FIxsgZekkmAxbX0BUJotTVXsU5ZY2STKb1Ix6sXoaGHLi68iGL2KsV8biazSH8KhYP0g4ei4xMbsZIgV7h6zf5ybOKi0hlJTm7jidrLekJbaXoduHEeIQv%2FXxx8fkZ%2BaRs393HLTBHT%2BA4K44Rj0LzQH9c%2BKMHqPlqa9oK2x4iVHj4AbL7JZI0IsDzDR0f3CBjqkAdKkH2UmWYEP7xiFyY6AAxYlOtM%2FRGlt5TZSTKb3pYxDcXag2hak1JZ6W2VmtICiUnRXViAbu68p3iyNS4Omi%2FxgyejGJoKXAet6pkEG2ZHYtiWwYoHWFgCmJXkiH98yjNJkVZFimjBNtLc5PfIZOlMdxOkiN0A8jKh5ASD%2BV8ioDo%2Fwg%2B3yVebyUKPP01UGHwVjN4GXAcLb4xnAk3gn0lmtWMSK&X-Amz-Signature=ca561900c312753a91cf52d14411054d5f187165ffc7d5738cbe3a1ea009a7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
