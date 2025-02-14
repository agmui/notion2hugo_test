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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2URWIW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDSm2wxkGFPZGAXnCjqw4%2Bau9Has9aQPw8i0O%2B%2FmrXtNQIgNDRX5sUrloYajhITYnViBHRQOplmxu1qaKcczDW8Lf0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIFcqKKkqE4BcbfbNircAxK3wLWJosX4nZO62E%2Bj6S9t5sPVgfkzLv4ep4pYFDm2VV26iJBIOl5l2VXEgzaBIlEjwaKMbydSQmNWGRMHHvp8rirhTUxrVYWaAwrqcIXI7fybziLq1%2Fqy9U6kUS73rtkatucZYRpFeEpN1yZMr3A4fePdt4OgOEDyNSK1cryAZXuqzAprLX42WoyBUUtV6Ay3e04L%2B4uITzTTliJQh8CM9ba4CdJb6bPvEs%2BmEwMtQzXTwiF6ng5DFuG5mz7BGRlA%2B9TWampA9DJzrYQZiu4vWyRVEx4CzJJ0vxt23zvIeKbaLeFyIs5u9vE0B8etqMUhYLRzag%2BfQn%2BK9qNVujA212fqGnWRZbkj6qmFat%2FHYhvAA%2BXgnwBWKAlB%2FeKqrxRWMOk%2Fz%2F1Ta2huLZwkgR4BWphfsgdfeDyHWvXZr73tGNrx9X98sbJcvu8kqV%2B7a5DVVmWDhrQgLtR6dGx07hlIg%2BHeWb357vQ42S6w1eMbA4EgrwdgowtWnxgajJ9YL6cQf%2FaaMvQd%2FO5qTPmWjKEennODd4n3QwOxFdvwQJvwU2ie5snm%2BaYcadqoSMLq3AO33XJimW0UX%2BbvvMd69RI0W5qX%2FCvEjgESlQ8N0hebPJApdSum4DBQfxHlMLi2vr0GOqUB2SwdFlJi56o%2BNkzNv3Rkld8O1h%2BSPuhk73k0WASGNHyKRlfu5YzB6JJ8yt6KI828hOzI1Mv6f2lCpMVfRY5KVa%2FO6UeAri%2BInPKFLRU6AewJ0Sd8xZ7X9hn3vCeDxQfAyTcd%2FF5asPz%2BgYoEB%2BPJq1tzewCw%2BV7CYGW6oXCBbJwMhSgrKnt8YYyQ%2Be6mXR9g8Ynynx9MFfOtUuIK66NlR76iwYMT&X-Amz-Signature=a45cf36c5caa91ba93a622548d1ff7d9e51f57887b328199b85ed093191987df&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2URWIW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDSm2wxkGFPZGAXnCjqw4%2Bau9Has9aQPw8i0O%2B%2FmrXtNQIgNDRX5sUrloYajhITYnViBHRQOplmxu1qaKcczDW8Lf0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIFcqKKkqE4BcbfbNircAxK3wLWJosX4nZO62E%2Bj6S9t5sPVgfkzLv4ep4pYFDm2VV26iJBIOl5l2VXEgzaBIlEjwaKMbydSQmNWGRMHHvp8rirhTUxrVYWaAwrqcIXI7fybziLq1%2Fqy9U6kUS73rtkatucZYRpFeEpN1yZMr3A4fePdt4OgOEDyNSK1cryAZXuqzAprLX42WoyBUUtV6Ay3e04L%2B4uITzTTliJQh8CM9ba4CdJb6bPvEs%2BmEwMtQzXTwiF6ng5DFuG5mz7BGRlA%2B9TWampA9DJzrYQZiu4vWyRVEx4CzJJ0vxt23zvIeKbaLeFyIs5u9vE0B8etqMUhYLRzag%2BfQn%2BK9qNVujA212fqGnWRZbkj6qmFat%2FHYhvAA%2BXgnwBWKAlB%2FeKqrxRWMOk%2Fz%2F1Ta2huLZwkgR4BWphfsgdfeDyHWvXZr73tGNrx9X98sbJcvu8kqV%2B7a5DVVmWDhrQgLtR6dGx07hlIg%2BHeWb357vQ42S6w1eMbA4EgrwdgowtWnxgajJ9YL6cQf%2FaaMvQd%2FO5qTPmWjKEennODd4n3QwOxFdvwQJvwU2ie5snm%2BaYcadqoSMLq3AO33XJimW0UX%2BbvvMd69RI0W5qX%2FCvEjgESlQ8N0hebPJApdSum4DBQfxHlMLi2vr0GOqUB2SwdFlJi56o%2BNkzNv3Rkld8O1h%2BSPuhk73k0WASGNHyKRlfu5YzB6JJ8yt6KI828hOzI1Mv6f2lCpMVfRY5KVa%2FO6UeAri%2BInPKFLRU6AewJ0Sd8xZ7X9hn3vCeDxQfAyTcd%2FF5asPz%2BgYoEB%2BPJq1tzewCw%2BV7CYGW6oXCBbJwMhSgrKnt8YYyQ%2Be6mXR9g8Ynynx9MFfOtUuIK66NlR76iwYMT&X-Amz-Signature=0cc65da0f4ea3a0e0df3c3d0f2a551826a9491c907b9dea904a82fe4001deb27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEFI6M7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICfcYzI9GiS9%2BQJn2pGKYMQukrSUzGXlC5DecdROY03RAiEAq4TirvCL1RCDm3fijzliRLhJE%2BBJSxfYgh%2B0J14UlIkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDH2xDMvsXlmyJVVXtyrcA3gz%2FAPFw7ua8bEYQvxmpEMhC6D4BiNVJrMA%2BcWKFpJPy0eOpkSjNCU5s8J%2BOU8%2F1pLedo1tSNQT8W6E32HPZK2R37k9r1Vt7czlfzdkNsS%2B1lzvcIBzfQfQQKcB%2FtJIB1MRBsi%2F3BnNf0qwaeau%2FkxhJ7dctN4KNkHTS0b3vupp1MYG%2Fpm4%2BEw%2FPwbpPluffD8YkFXevztjLU5OF0B7P%2BcPtEDT3M%2BM0Q0RR6Rjke1f76vl79gyCt7z3RKrJ%2BdxJstFJ6Mf8%2BALY%2FynU%2FJdd%2F1nHz1%2FRlxoSiJw7iwoi5wddqj5pkSvTHPHL%2BujZOofNWPrT2iRtTdQx1sDYwbC6nObWA%2BK%2FP4DggraarOtX1%2BPj%2Fkh4rzn2zWBt415gM1v8j2YrgRWypjw4nPG9l2eViVIabfAk%2B04w44aXTTaTBmV%2FD4BSS9Iv%2FqEfiVWFv5bx4oEZ2f0CxYyGuvrqIS%2FnBoIgd3e%2BLWgIYMPO0PKbiQywfzMRdaE%2Fv6fufBX9roWasBWjS%2FWhB6xGEzLis7uCbk8d3G9%2FVueDBTLBVjrrwtGTsdJpv8SwJ6oWKOjtOW4gfbNvI3Rvk2uVQplQ5drnvKXhYTpnd4%2FTzqVXuxmpGioI9adNhMarCp3Lqo5MIG2vr0GOqUBIyxSpLdD6b83o%2BTj51ht1jQMMKmKDSDBtiZFWFz2vL9wyYXxsEQv9Tk2dRgREcrc1zvGQQK0KmYslV7V%2FVYr8tsiHIXI3%2By426ziCPz1NMHypUrETN2hkcv9%2BFsbW2fY6WK6X4bfJ%2BrJ1uBzhoJCMgNlkWe0%2Btge38ZTWtkuyid1r0ep8xmhW5E%2Fpxg2tFWvU7gjSGIOP86vyikRCucN6ZrSgak9&X-Amz-Signature=960ae0ba6fedea413ac81aae3dc2126d52d94bd9d51fd00c34ca345a35cef64b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JNQHBM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIE%2FmGLG5Hygjh%2FKt1MHJtSpT26t2PAIzn2RN0U0SmiHjAiEA966nsCOEQG6TXwqkKG7xPuZ6tQf%2FsnOTflo2nEb7mO4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJLFFsHHyu1MkcXIESrcA04bvKkVPwX%2BDE3UvoadOV5pYcK5lzP3yEJlhsSkOMEA%2Ft6hMJgD5qj9pp0YT8hjQwaglDe%2BrdeaAgE7C2v4S7LNDjKy3NmejWTipjCSpe90%2FYCAgQzNuL0p5Uu1LxbawICv2A51B4Jr5lUleu8LNWhoHn0abo9l3Kq4mnMlDBPsV9S35FKeoZ2uEV6AqP%2BZ5luzmEkncMpQg1UfWEHaB%2Fs2OPP2iy9oWe3VmtdhsZd2w4%2BMfdVGoybJvEG%2FLvcISkMt9mwcnDX%2BVNACqYEXZpiwTrMysOoiJhHjpIq86GH76tYn3hDJ7%2B0vCCUrXPkleqgZIBbCCjK39fy%2FRY%2BYpYeSUKiIGBpj6S%2B1FmVL7q7YA6oenZeNJLVXhB%2Bcy2Q8D6o5oGw0HrUm%2FfdLOZ0xy1kqsnW%2BuaL2%2BDxxCLSZviv1Nnd7LdPkPWdC0aE14IDHah0b1im%2FTUBFJ3KPcQWsNs0%2Bvu8ylx%2BoUpZYKj9DNQ2AEDSiANG%2BeavubT3WSTvHgyHGEv%2FM1N1gOdVi5rs3ks0rK8k93x7vmvdS0fB%2BIsHnxiZ4CcT5C1kSK1OmUgWUlB07rPm04EiUv%2FfQ4Cqq3rgzlgu%2FTr%2FzmWnPQrJX7GUiWvyLnzz%2Fh84pHUR3MLi2vr0GOqUB%2FcFTjy6Xp9GbgMETU6EX8QU3tlBROieFhQGbDS8ZvkqnYdfG20t32bBeMR3SiFAeTSCAhng9lapD9aYgZaE3p%2FmEyN7FiFOPzxSd125ywKPhzg%2BJHU51cDJX%2Bx9Wv3X%2BGtHm3%2BwSRaA6n5OBW38UBPWBsBFjhZR1zn7u%2FCa6DZO13cdpM2OSytgqYSFwBNcAvoMR61Fj%2Bm0knQfCflOqAX%2BRxVg1&X-Amz-Signature=76ef2d2334838b185a51882a393e1013c63597d73ac9aea6c889d642d2179442&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2URWIW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDSm2wxkGFPZGAXnCjqw4%2Bau9Has9aQPw8i0O%2B%2FmrXtNQIgNDRX5sUrloYajhITYnViBHRQOplmxu1qaKcczDW8Lf0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIFcqKKkqE4BcbfbNircAxK3wLWJosX4nZO62E%2Bj6S9t5sPVgfkzLv4ep4pYFDm2VV26iJBIOl5l2VXEgzaBIlEjwaKMbydSQmNWGRMHHvp8rirhTUxrVYWaAwrqcIXI7fybziLq1%2Fqy9U6kUS73rtkatucZYRpFeEpN1yZMr3A4fePdt4OgOEDyNSK1cryAZXuqzAprLX42WoyBUUtV6Ay3e04L%2B4uITzTTliJQh8CM9ba4CdJb6bPvEs%2BmEwMtQzXTwiF6ng5DFuG5mz7BGRlA%2B9TWampA9DJzrYQZiu4vWyRVEx4CzJJ0vxt23zvIeKbaLeFyIs5u9vE0B8etqMUhYLRzag%2BfQn%2BK9qNVujA212fqGnWRZbkj6qmFat%2FHYhvAA%2BXgnwBWKAlB%2FeKqrxRWMOk%2Fz%2F1Ta2huLZwkgR4BWphfsgdfeDyHWvXZr73tGNrx9X98sbJcvu8kqV%2B7a5DVVmWDhrQgLtR6dGx07hlIg%2BHeWb357vQ42S6w1eMbA4EgrwdgowtWnxgajJ9YL6cQf%2FaaMvQd%2FO5qTPmWjKEennODd4n3QwOxFdvwQJvwU2ie5snm%2BaYcadqoSMLq3AO33XJimW0UX%2BbvvMd69RI0W5qX%2FCvEjgESlQ8N0hebPJApdSum4DBQfxHlMLi2vr0GOqUB2SwdFlJi56o%2BNkzNv3Rkld8O1h%2BSPuhk73k0WASGNHyKRlfu5YzB6JJ8yt6KI828hOzI1Mv6f2lCpMVfRY5KVa%2FO6UeAri%2BInPKFLRU6AewJ0Sd8xZ7X9hn3vCeDxQfAyTcd%2FF5asPz%2BgYoEB%2BPJq1tzewCw%2BV7CYGW6oXCBbJwMhSgrKnt8YYyQ%2Be6mXR9g8Ynynx9MFfOtUuIK66NlR76iwYMT&X-Amz-Signature=af153c8a291b2a27de9a4db52c5541b18d26659145341d8dc148b499492dc3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
