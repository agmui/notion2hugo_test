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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXIVRSHS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALexsxqkjanub4wnEcTzxw9bsD8uv5aqe3Phsvw2%2FZ6AiEA2tOKfWhkAVR%2FYdguCazw9itbr8MpQoAJxYb9CtVgCkEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK362lAGk4ZRZpx4MircAz7cYzPulpABJHup7F1ZLwb1eXGAdb%2BLbFum2Bkl4nLTVhdHTgQ3M7WU%2F1s0lkEL9eZOWP%2BRvtAMfQ%2BL0EdcrDYjnctSqOhS%2Fh3XIZOW0NqoLLcX6DCi4HcQVULgahiSIKEv4iRUTClbvhs2AiQYUzJi0eJj4JGgCt%2FY2qNagi0P%2BmQsh4y68JQETDecF%2FQ5nu2MWg%2Fhuu1FX7iZr%2FpEPIravkUnWQxwA9kCICzXBiwOTTBT6wrFDshk9sXJkEZWgG8uPJTgA%2FSJAr3s5j1WFRytpWw9gUg7dDRLSEfAyqabmz4G8%2Fe9Sl499jmTHtJxmVZtXwxI6uZuzskaPdNSc4h1q8tp2i0sJN%2FoCLnn5UWsvkodTVDk6kcvcpp6U0oXIl9lC0O0JXMRQiG1zTzd%2B2RVMTST0Hxv%2BPfukW9cdJ5f4RUm%2BaVCgb1opQpiCs%2Fft28Cr3j9yBEcg%2FX7RvOlKH0i2yYM%2BxP9htOyxJc%2F0BzebTSYcd1EqAMVomoPMlk95o2JmAJQtY1xG723P7l30Oo9ocaQAGm3UtYISV16VtUHqwPsfdfsRioWmpcAKsS757h1%2BynPJEpPNlDPYJEvC%2B0KCwfHBbV4fxyr8O%2F9K2qkpRHfK2poAAvdWLOfMOLLyMMGOqUB%2FuI34YD1gTXRLTIhzHu03bEF2JT2lk8l6C7nHNp3UZ9XDLLX0CT6eh5EsgGetgSXsRIpILsp8yuB3RF472%2BrQNfh9Vv7B8v6vsyjh0%2BSMccfGgjmgS6mqtjReR1WZ1V08a6UZTVR5JCODCDDPanLkKQ%2F78f%2Fiui2icpZ6DsbBPK8STfQWQnqsIsUGfzJGjkjwZ2DpG2FVx0DLE9KCus%2FThPNfcej&X-Amz-Signature=08d6357dba7d1584c64288c0ce57d2b249ecce0d112c239892156ded4592b207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXIVRSHS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALexsxqkjanub4wnEcTzxw9bsD8uv5aqe3Phsvw2%2FZ6AiEA2tOKfWhkAVR%2FYdguCazw9itbr8MpQoAJxYb9CtVgCkEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK362lAGk4ZRZpx4MircAz7cYzPulpABJHup7F1ZLwb1eXGAdb%2BLbFum2Bkl4nLTVhdHTgQ3M7WU%2F1s0lkEL9eZOWP%2BRvtAMfQ%2BL0EdcrDYjnctSqOhS%2Fh3XIZOW0NqoLLcX6DCi4HcQVULgahiSIKEv4iRUTClbvhs2AiQYUzJi0eJj4JGgCt%2FY2qNagi0P%2BmQsh4y68JQETDecF%2FQ5nu2MWg%2Fhuu1FX7iZr%2FpEPIravkUnWQxwA9kCICzXBiwOTTBT6wrFDshk9sXJkEZWgG8uPJTgA%2FSJAr3s5j1WFRytpWw9gUg7dDRLSEfAyqabmz4G8%2Fe9Sl499jmTHtJxmVZtXwxI6uZuzskaPdNSc4h1q8tp2i0sJN%2FoCLnn5UWsvkodTVDk6kcvcpp6U0oXIl9lC0O0JXMRQiG1zTzd%2B2RVMTST0Hxv%2BPfukW9cdJ5f4RUm%2BaVCgb1opQpiCs%2Fft28Cr3j9yBEcg%2FX7RvOlKH0i2yYM%2BxP9htOyxJc%2F0BzebTSYcd1EqAMVomoPMlk95o2JmAJQtY1xG723P7l30Oo9ocaQAGm3UtYISV16VtUHqwPsfdfsRioWmpcAKsS757h1%2BynPJEpPNlDPYJEvC%2B0KCwfHBbV4fxyr8O%2F9K2qkpRHfK2poAAvdWLOfMOLLyMMGOqUB%2FuI34YD1gTXRLTIhzHu03bEF2JT2lk8l6C7nHNp3UZ9XDLLX0CT6eh5EsgGetgSXsRIpILsp8yuB3RF472%2BrQNfh9Vv7B8v6vsyjh0%2BSMccfGgjmgS6mqtjReR1WZ1V08a6UZTVR5JCODCDDPanLkKQ%2F78f%2Fiui2icpZ6DsbBPK8STfQWQnqsIsUGfzJGjkjwZ2DpG2FVx0DLE9KCus%2FThPNfcej&X-Amz-Signature=33e60e1ee8f539e1025d7b1d4ba272a21ea72652b6bdc1468f55b1c2d718e733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXIVRSHS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALexsxqkjanub4wnEcTzxw9bsD8uv5aqe3Phsvw2%2FZ6AiEA2tOKfWhkAVR%2FYdguCazw9itbr8MpQoAJxYb9CtVgCkEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK362lAGk4ZRZpx4MircAz7cYzPulpABJHup7F1ZLwb1eXGAdb%2BLbFum2Bkl4nLTVhdHTgQ3M7WU%2F1s0lkEL9eZOWP%2BRvtAMfQ%2BL0EdcrDYjnctSqOhS%2Fh3XIZOW0NqoLLcX6DCi4HcQVULgahiSIKEv4iRUTClbvhs2AiQYUzJi0eJj4JGgCt%2FY2qNagi0P%2BmQsh4y68JQETDecF%2FQ5nu2MWg%2Fhuu1FX7iZr%2FpEPIravkUnWQxwA9kCICzXBiwOTTBT6wrFDshk9sXJkEZWgG8uPJTgA%2FSJAr3s5j1WFRytpWw9gUg7dDRLSEfAyqabmz4G8%2Fe9Sl499jmTHtJxmVZtXwxI6uZuzskaPdNSc4h1q8tp2i0sJN%2FoCLnn5UWsvkodTVDk6kcvcpp6U0oXIl9lC0O0JXMRQiG1zTzd%2B2RVMTST0Hxv%2BPfukW9cdJ5f4RUm%2BaVCgb1opQpiCs%2Fft28Cr3j9yBEcg%2FX7RvOlKH0i2yYM%2BxP9htOyxJc%2F0BzebTSYcd1EqAMVomoPMlk95o2JmAJQtY1xG723P7l30Oo9ocaQAGm3UtYISV16VtUHqwPsfdfsRioWmpcAKsS757h1%2BynPJEpPNlDPYJEvC%2B0KCwfHBbV4fxyr8O%2F9K2qkpRHfK2poAAvdWLOfMOLLyMMGOqUB%2FuI34YD1gTXRLTIhzHu03bEF2JT2lk8l6C7nHNp3UZ9XDLLX0CT6eh5EsgGetgSXsRIpILsp8yuB3RF472%2BrQNfh9Vv7B8v6vsyjh0%2BSMccfGgjmgS6mqtjReR1WZ1V08a6UZTVR5JCODCDDPanLkKQ%2F78f%2Fiui2icpZ6DsbBPK8STfQWQnqsIsUGfzJGjkjwZ2DpG2FVx0DLE9KCus%2FThPNfcej&X-Amz-Signature=79838497377c5786ef35be3c059fa01621af0bd24d83d337a78f619133ba4347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHUJ5B36%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHnI3MI0DEKvozWny%2FfSfgxq8Oz7Ljldoqy6Kt4eCJ8AiBlz2WViPDCzaJZUirVAxc7OoVCQPIlMp2sH6Y4dV4pEyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxV21u0uD9zzoxHggKtwDKGQUeDoWO%2B7GbLPzfZJIjtzIt4uXN2dnihKUvITWUrUcd9NryHLfVcpmATCj%2F%2BxQQgirv57%2BEcBrtqpll2YozvyK934beYR3U%2Fg0K5kv%2ByJrZFEn4gSPRTBQAbwKiNuqtu%2F7xvMAlj7FMkCA%2FPmjdLhTHuxkGKvSn1Gezv6oR2TefC7f%2BqrAwu9brU8Nf8zb03gn6MGrlqJID8iz8GHPL22PNAqfijZ8n%2Bs3%2BQeNSUoVIk9Rhvb%2FYh17N2GgnCqKLjQqhLGZW59JiO6iinX4D33LvLrv8MNh5mFrAADJYAIlf4KStm0f2tj4%2Fn6DcEBimctHkIWQRDTI4ktPWsU4lm6U%2BNQHX3IdhY0%2FKMk7UsLqkod7te4TEiYNZZi6Guci5sFK%2F6fuqvLJc4tN5sDY11grXPK9b4ymzRwPMPUHBrIdlOuFUPgpti2bYl3d1H8uQyAvxDHz02BfT7wf18H%2FhuFY%2Bch7Hs8%2FffNjfPD3oFIxL5LNbiY23qDZDfeMg2nes616Iutsjj5tX%2FP9okuvcu%2F8ejU3BGFuHBjOLdGxpNjuQ2NFmxboxvBOS%2FegmUfRHtzDdqRtqNEL8uuLVPJpvAoVNj6GRI%2F0wiTv08N3lrQuYi%2FewAItYZTOt1MwnMvIwwY6pgH5krmSxUBlkLLRtBV555PiXCmmQgnzGAI5YNlHX404X7KSqIaKW5d2Lc5fxSFhSyteZBIEHg%2FiYqeiDopSkJMHEzLLoEjiPz74H9NoSv%2FMnXgLxXeb%2BaQeYKYVYdM7BhzXoHPosC0ZclB%2Fy1wnXyYtmNz91XyNkX8uePvdsGwyYiiOUyl8eV75u37S6lOeDyNY75M53w1KjtLre5Hr7%2FVluHiezcvm&X-Amz-Signature=88b647bd2f60303abbb8773961efe6295f9ca95eb901475546f4dbb15d1bc82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ2I5QB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqjFrejey0lfPsKo8vZ66mCp8%2BeC9k1zLjZh56hJfacAiAX%2FZItH1Fp0Xmja3otm%2FaNsq6Jb810FI0uSeRCoo6MZSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOBoPv%2FQZaj38UWi7KtwDw7GzSq4iirCiyf0BAULrePqo69Gx6%2BBp72IyTJFwyy9k3yrfrO9thcdMYgVBisAFHwAO4fKoO%2Bb6HcB1g4lWyfmjojIOcz%2BmpbXd7veN41b3AzkJFacVBvgSAtCOGiEpvuxKWbwFFe9tRD4WuRczFVC4veb7fGxzK6EjBlGt9mza1X%2BCIXOGQkuqxOdfGIe4jpelnwe%2Boq4RIZHV%2B6yaR5QP4S%2BUU5MQHwpCXOMDXJe2rj0SKf3U7DbtqTAodEZU7R7WlQRjMbR3Iu1kqcoLLpNulIBw5KtQLldPLsedxCKBYLjg8hAKTZ3VQZChPCS2UhemqgexLIyuf8Ik%2Biro7SrTqPO5DIfO0t%2F7KAn0jmsdAjCfDqDYUO4%2BEuHChpY53TM2IPlaKMgVsC%2BV566ujSINfDkoliB%2BuHFs7zsvnoAhcfYRO912vUW3PVp%2BrX7%2BpYcGKqLGODvkkkK%2B4d3AuqlPg6CiN76vVitktSgqMtsM4%2F0QdL6MjE5do7qfMvV0jVYI7R4Uw%2F5tGbFw6VI1zgWnH2lE28OQBLmyehqjL4halF%2Fbdzes6qco1tRAd46zXSfBzMic9iL5kDo5M%2BZ9y3D%2BzRsbhHOIUNqjhZZsiL689VLQoJxZADcL8o0wo8vIwwY6pgHpyiYfsZ8UA6m3pD7x7ey7E7mSZxSajNRVRM40WikSBHkqF0bxGsHqI302plnT7RxW%2BYGLzWtOE595uVe25xpXgY4OylvP4cIM6FqnTGdWrRLo%2FUV9HDtviHGcga79kT0dDDT%2BNq%2FE%2Fx1eVDNGm4NyWdX%2FhmggaOAHjGwd%2FesKcwTRqJrD0iJjc3He62fQCmRFZ6D%2BhipAIP8jKzQUYcGu%2FEb5Mkob&X-Amz-Signature=5bba83ee7d7454925ceae23cfabf192a18985a78fb3e239c51bd6cb27b866236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXIVRSHS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALexsxqkjanub4wnEcTzxw9bsD8uv5aqe3Phsvw2%2FZ6AiEA2tOKfWhkAVR%2FYdguCazw9itbr8MpQoAJxYb9CtVgCkEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK362lAGk4ZRZpx4MircAz7cYzPulpABJHup7F1ZLwb1eXGAdb%2BLbFum2Bkl4nLTVhdHTgQ3M7WU%2F1s0lkEL9eZOWP%2BRvtAMfQ%2BL0EdcrDYjnctSqOhS%2Fh3XIZOW0NqoLLcX6DCi4HcQVULgahiSIKEv4iRUTClbvhs2AiQYUzJi0eJj4JGgCt%2FY2qNagi0P%2BmQsh4y68JQETDecF%2FQ5nu2MWg%2Fhuu1FX7iZr%2FpEPIravkUnWQxwA9kCICzXBiwOTTBT6wrFDshk9sXJkEZWgG8uPJTgA%2FSJAr3s5j1WFRytpWw9gUg7dDRLSEfAyqabmz4G8%2Fe9Sl499jmTHtJxmVZtXwxI6uZuzskaPdNSc4h1q8tp2i0sJN%2FoCLnn5UWsvkodTVDk6kcvcpp6U0oXIl9lC0O0JXMRQiG1zTzd%2B2RVMTST0Hxv%2BPfukW9cdJ5f4RUm%2BaVCgb1opQpiCs%2Fft28Cr3j9yBEcg%2FX7RvOlKH0i2yYM%2BxP9htOyxJc%2F0BzebTSYcd1EqAMVomoPMlk95o2JmAJQtY1xG723P7l30Oo9ocaQAGm3UtYISV16VtUHqwPsfdfsRioWmpcAKsS757h1%2BynPJEpPNlDPYJEvC%2B0KCwfHBbV4fxyr8O%2F9K2qkpRHfK2poAAvdWLOfMOLLyMMGOqUB%2FuI34YD1gTXRLTIhzHu03bEF2JT2lk8l6C7nHNp3UZ9XDLLX0CT6eh5EsgGetgSXsRIpILsp8yuB3RF472%2BrQNfh9Vv7B8v6vsyjh0%2BSMccfGgjmgS6mqtjReR1WZ1V08a6UZTVR5JCODCDDPanLkKQ%2F78f%2Fiui2icpZ6DsbBPK8STfQWQnqsIsUGfzJGjkjwZ2DpG2FVx0DLE9KCus%2FThPNfcej&X-Amz-Signature=1b6fe5a9e17dfbc04899bc5b3cae458ce6c48a62c58ff40627289ae575b9a77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
