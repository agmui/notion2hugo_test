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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHZUV62%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCf5Ure%2BH9tdlJxuAnU65J19q4bLs7Nqj5rDkp%2F6U2W8wIgD67QxH5Sr39hUYaR6wydcef3yOBMT2RztrNbYQkSKxAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDATkoZaYpwEWehwroSrcAw4kY8GhHEFRWVJe0Gvq31SzpEiNh6ykLxaeSqB8LkME8x8Fn52AZLCD7CXgx35Gx%2FHyYeUnPivvD%2Brf5rrLG636jYj3qKXOKZf%2BOdHLNyDZ%2FQDfnIxk8zR3ijj%2BHQ74QI6nvKp0vAbSsNOdy9d4WE%2BZIIILmL0RfDXXLvRbmgzmP2d0EqpPEVnws3pmVOjo8Q3%2FNUQm79jUehd5GiNjheBsJ29CjfbScCJm6bxFm0y0buqnF6WD%2B%2FqCna7WwzahpZ%2F3XiNbs1QN9XWEOUWslScoQxEP1ewiwwcUSUhIA8HBPCvrAdSNVSl0SnDLckrEFxR0RDhsAugy3wICmAiifeymfCzDK6%2FiHXvZ5UyWQiHij%2FGFtybX5mjyE4BSEgy79uMfkHHAkUCfoZkWnwwdKToWE6aofyBGjsZlDcve%2Bd%2F8LVP16fkNindRzDfDEVt6nt9Uc5m6anHMjoPCgZvGx4KVkQzFNypVDnubAQ7eW8VA2SswvAHg55jvVZYg3d0g67E5B4eqwvwQu2odTxb9pH9%2FhGQDWqRkPsc4%2B81b769RkLs1IMlYrp8wNVYvd%2B9o5smaee0S9HVqPTdTAaLFsgLHbiXFwq6juQ8liGMWoydfjrPps08h7NZ0GJiyMN6WgsUGOqUBA9bO4Ij3hUQTon53ZuAtsUaTSeOJLv9INbnF83%2BY6wxsam5M7oz0bQjeo3zzgzXvrLqImTlcI2V9ZpYG6yK1Iv3h554M2vD7vEAomELDFz%2F4q7nhZ15Ykc73KJFvbzYXMseC%2BOY6dsUdNC5biKhjm30NOqGjBCKHpNa%2BBJ6dybQ0ibNnjtQ2h3i%2F77kLAme%2FIEmJ9QeQDSVDpba1PUVBCEoObu2q&X-Amz-Signature=4f4026bd9997fa537b40a61cfd8619720e2796ed495a358b17b3bcec714692e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHZUV62%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCf5Ure%2BH9tdlJxuAnU65J19q4bLs7Nqj5rDkp%2F6U2W8wIgD67QxH5Sr39hUYaR6wydcef3yOBMT2RztrNbYQkSKxAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDATkoZaYpwEWehwroSrcAw4kY8GhHEFRWVJe0Gvq31SzpEiNh6ykLxaeSqB8LkME8x8Fn52AZLCD7CXgx35Gx%2FHyYeUnPivvD%2Brf5rrLG636jYj3qKXOKZf%2BOdHLNyDZ%2FQDfnIxk8zR3ijj%2BHQ74QI6nvKp0vAbSsNOdy9d4WE%2BZIIILmL0RfDXXLvRbmgzmP2d0EqpPEVnws3pmVOjo8Q3%2FNUQm79jUehd5GiNjheBsJ29CjfbScCJm6bxFm0y0buqnF6WD%2B%2FqCna7WwzahpZ%2F3XiNbs1QN9XWEOUWslScoQxEP1ewiwwcUSUhIA8HBPCvrAdSNVSl0SnDLckrEFxR0RDhsAugy3wICmAiifeymfCzDK6%2FiHXvZ5UyWQiHij%2FGFtybX5mjyE4BSEgy79uMfkHHAkUCfoZkWnwwdKToWE6aofyBGjsZlDcve%2Bd%2F8LVP16fkNindRzDfDEVt6nt9Uc5m6anHMjoPCgZvGx4KVkQzFNypVDnubAQ7eW8VA2SswvAHg55jvVZYg3d0g67E5B4eqwvwQu2odTxb9pH9%2FhGQDWqRkPsc4%2B81b769RkLs1IMlYrp8wNVYvd%2B9o5smaee0S9HVqPTdTAaLFsgLHbiXFwq6juQ8liGMWoydfjrPps08h7NZ0GJiyMN6WgsUGOqUBA9bO4Ij3hUQTon53ZuAtsUaTSeOJLv9INbnF83%2BY6wxsam5M7oz0bQjeo3zzgzXvrLqImTlcI2V9ZpYG6yK1Iv3h554M2vD7vEAomELDFz%2F4q7nhZ15Ykc73KJFvbzYXMseC%2BOY6dsUdNC5biKhjm30NOqGjBCKHpNa%2BBJ6dybQ0ibNnjtQ2h3i%2F77kLAme%2FIEmJ9QeQDSVDpba1PUVBCEoObu2q&X-Amz-Signature=aefaa50908e2a97ea9ff4bfbcad293f2948558376bbfa5349d1309bfc207bf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHZUV62%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCf5Ure%2BH9tdlJxuAnU65J19q4bLs7Nqj5rDkp%2F6U2W8wIgD67QxH5Sr39hUYaR6wydcef3yOBMT2RztrNbYQkSKxAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDATkoZaYpwEWehwroSrcAw4kY8GhHEFRWVJe0Gvq31SzpEiNh6ykLxaeSqB8LkME8x8Fn52AZLCD7CXgx35Gx%2FHyYeUnPivvD%2Brf5rrLG636jYj3qKXOKZf%2BOdHLNyDZ%2FQDfnIxk8zR3ijj%2BHQ74QI6nvKp0vAbSsNOdy9d4WE%2BZIIILmL0RfDXXLvRbmgzmP2d0EqpPEVnws3pmVOjo8Q3%2FNUQm79jUehd5GiNjheBsJ29CjfbScCJm6bxFm0y0buqnF6WD%2B%2FqCna7WwzahpZ%2F3XiNbs1QN9XWEOUWslScoQxEP1ewiwwcUSUhIA8HBPCvrAdSNVSl0SnDLckrEFxR0RDhsAugy3wICmAiifeymfCzDK6%2FiHXvZ5UyWQiHij%2FGFtybX5mjyE4BSEgy79uMfkHHAkUCfoZkWnwwdKToWE6aofyBGjsZlDcve%2Bd%2F8LVP16fkNindRzDfDEVt6nt9Uc5m6anHMjoPCgZvGx4KVkQzFNypVDnubAQ7eW8VA2SswvAHg55jvVZYg3d0g67E5B4eqwvwQu2odTxb9pH9%2FhGQDWqRkPsc4%2B81b769RkLs1IMlYrp8wNVYvd%2B9o5smaee0S9HVqPTdTAaLFsgLHbiXFwq6juQ8liGMWoydfjrPps08h7NZ0GJiyMN6WgsUGOqUBA9bO4Ij3hUQTon53ZuAtsUaTSeOJLv9INbnF83%2BY6wxsam5M7oz0bQjeo3zzgzXvrLqImTlcI2V9ZpYG6yK1Iv3h554M2vD7vEAomELDFz%2F4q7nhZ15Ykc73KJFvbzYXMseC%2BOY6dsUdNC5biKhjm30NOqGjBCKHpNa%2BBJ6dybQ0ibNnjtQ2h3i%2F77kLAme%2FIEmJ9QeQDSVDpba1PUVBCEoObu2q&X-Amz-Signature=6bd85791de8b3e0a89f83a39dd01fdff0113054e84eb717cf241b2b495e46f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FPAHDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCZZceJvccU%2B9z7XMp%2FlfQJ8XyY9sTKmfKr03nmbHAfSwIhAM7JKOAITDerKBvk1tuniZmi7mC7PP4Y2LOYOjgs%2FnBUKv8DCHcQABoMNjM3NDIzMTgzODA1IgxCg%2B9nhRMKltAW97Yq3AME6ts%2FpwepqHam0%2FjBV%2F%2BpdjahsUA0%2BQPbomzdC%2Fdop3VZJ0VQO1H%2F%2Bli%2FokJZm4e%2FF6GQXqj6ro116eyDikxCnOzotwWxbiJLeP%2Fmw5lco1qHsU0HoBGGNjGcnAsyB0dm0lNRWFQ%2Fywyhh%2BKZt6qwyBOyCmNii1nvgaqrhf8OrpPhzzHmw1Z25ceTcWcvIlgikbdkVeipjMKNhaX%2Fvj9f8Uh2KAjPvfsePskN3yIZck4HRdcZiDXYHe07Up97agnQgEbwbf7EUT4TBYzI4a74MdV8Yywxt%2FvNIgVd%2FmW8W6hKK98Ynbo8aaV1ULrRSzoRvhUn4jb%2B4MZRvnV3Axv1ICdIazMiaOh8Vh1QN%2Bn%2FlsOBeC5KJJP%2B8s9vkLFmABwYDz8%2FKnyPG%2FEX7Oq982DZgehMS9v7mnX2A5xuV0mOBCzFu3h6GBRZwZslJZC4SB7bsUva5gTRJjkMWfiOeKqz0Co4fCYPc0WUbVr3%2F7j2DF0qY2ZP5mEz0LdRsk%2FUHR%2FtDjeYyF%2Fwxr%2BkYXls%2FuoLJiEHOg%2BDV44LKOdNOIdv7Ycl4hZD27a1pNNSsKovSXGKkAxB6TptUJGb5C43RiMTOPbL1awB0ANvI%2BL2NUJ6uPUhUxv9LZsp5rrojjCEkoLFBjqkAd23tnzVwy3cX64Afxb7SlLKuHUnhoACsY1sYijSufer%2FIkvTUoKW79MwHfn8UcSgj6Wku2ovnomjvrPAks0ENwW5104Nhi5TcVmEaCcgXeBMMnGjo4vy0zf44e6pPQiz3dNhdRAB3ZHl9BR4LZIFv3Q4fifJkre7DVt6u9kTRyIbnYkoWkNEqwUPWHK7lCO%2FPyi8tdRGRjBrMY6VNtzp%2FkZkqOh&X-Amz-Signature=6a23f7cc5433a09d11c3acec6363be3c297aea1e944a85ab434c32441f50a4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=8b2a95bde65bab38bf5e08dca19656e02dd9387659088a2ab760dd86b5f475ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHZUV62%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCf5Ure%2BH9tdlJxuAnU65J19q4bLs7Nqj5rDkp%2F6U2W8wIgD67QxH5Sr39hUYaR6wydcef3yOBMT2RztrNbYQkSKxAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDATkoZaYpwEWehwroSrcAw4kY8GhHEFRWVJe0Gvq31SzpEiNh6ykLxaeSqB8LkME8x8Fn52AZLCD7CXgx35Gx%2FHyYeUnPivvD%2Brf5rrLG636jYj3qKXOKZf%2BOdHLNyDZ%2FQDfnIxk8zR3ijj%2BHQ74QI6nvKp0vAbSsNOdy9d4WE%2BZIIILmL0RfDXXLvRbmgzmP2d0EqpPEVnws3pmVOjo8Q3%2FNUQm79jUehd5GiNjheBsJ29CjfbScCJm6bxFm0y0buqnF6WD%2B%2FqCna7WwzahpZ%2F3XiNbs1QN9XWEOUWslScoQxEP1ewiwwcUSUhIA8HBPCvrAdSNVSl0SnDLckrEFxR0RDhsAugy3wICmAiifeymfCzDK6%2FiHXvZ5UyWQiHij%2FGFtybX5mjyE4BSEgy79uMfkHHAkUCfoZkWnwwdKToWE6aofyBGjsZlDcve%2Bd%2F8LVP16fkNindRzDfDEVt6nt9Uc5m6anHMjoPCgZvGx4KVkQzFNypVDnubAQ7eW8VA2SswvAHg55jvVZYg3d0g67E5B4eqwvwQu2odTxb9pH9%2FhGQDWqRkPsc4%2B81b769RkLs1IMlYrp8wNVYvd%2B9o5smaee0S9HVqPTdTAaLFsgLHbiXFwq6juQ8liGMWoydfjrPps08h7NZ0GJiyMN6WgsUGOqUBA9bO4Ij3hUQTon53ZuAtsUaTSeOJLv9INbnF83%2BY6wxsam5M7oz0bQjeo3zzgzXvrLqImTlcI2V9ZpYG6yK1Iv3h554M2vD7vEAomELDFz%2F4q7nhZ15Ykc73KJFvbzYXMseC%2BOY6dsUdNC5biKhjm30NOqGjBCKHpNa%2BBJ6dybQ0ibNnjtQ2h3i%2F77kLAme%2FIEmJ9QeQDSVDpba1PUVBCEoObu2q&X-Amz-Signature=669032845735b395bed8208b373395d3e52f3e617e11746a3ccedf724aeb287a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
