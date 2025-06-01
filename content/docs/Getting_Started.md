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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HVERFU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCbp6DQsXhu51Ifew10HUGg8gABN1Hqo0e0gUNeLMQflgIhAKFfmbpXyoilTwdZvgsjUkS82lY0FprsiynL4pVp6r5bKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj7EuoTnl2pFZnShQq3AOtIN6tH%2F1qQjVZ1f6BwExTH94CDizikV6TJ6yb0SEO4X0X68B%2FaoC02GKLoUqurOOqEeHOT0buIiyrHIv7Bgx9aVHiLmPknRPTOvubzNyIgmiME2cZKgTPPhU0WWZxWx99uZcr5d0w9fCcEkzkR9JIncVESpVM%2B1KF9DOz0ohgTSOa7WHFBCXSec%2FOtdihuDjjQA1f78DWLVddc2l4BDWzAq4lWeOgHhr7H7uKQHXorokKRBwtsjkkOdcHjz4%2FLT4ytwjrCSri%2FPmfcgGRqJgJbTLp6kO3HZlABlOqjMVqT3wrqfT0V178ljkZlAQ9wGS0%2BbiQBwVnBAhMovGbMVYQPfsXKSPlj4HoBO73eCfPTsuP2JxgWcdzaNVSFU8S%2B4FtzqoQPGV85q3Pw2YHMfOipXgLZJbKqEsa8kRFzdz4lJ6yBtuonKXiyZfKaMqmsW5tOvWm6gbcU0RzHbLnhsM%2BHC1hYbjWDBBERYy2e9TMkuwSIFg8EOFr8sj0CZp17C3BAc84SS9gA6Bb15BKGbzSNvgVnkxGFH6a3YDeWebWwkHoeYKyvnnkCQSxuLy9D80auysE%2BSKWpAm7WJqMsqu9KwLgKkdi%2FBgQr3kHKwwC6a9wz9t5FYG29kmhxTCNpu%2FBBjqkAQyXAxoontWnVzl%2Fjmp88N0%2BQyhXLIpnhngcLVJqA2MXiy65XxX1JF7LzLQ8grPRkiI%2BlhEcHt5lfKAeY24A9c66LGItf8o5jkg1fiCIIFofaR54JLM%2Frv8Djw%2BdepNFj74iH3MZiZ6T7ntALJ3fHhwaYWLMBTs0x7pni1%2FJcmSim3j53Ew%2FDfqfc3jeusGG5AeVZ0Ow2BOBlAsA8OhQF4wIqd%2FQ&X-Amz-Signature=5a2c98b0d9077623f45ae3df9db3c07cf5990ac35b0a96b7f9a234a30e958d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HVERFU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCbp6DQsXhu51Ifew10HUGg8gABN1Hqo0e0gUNeLMQflgIhAKFfmbpXyoilTwdZvgsjUkS82lY0FprsiynL4pVp6r5bKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj7EuoTnl2pFZnShQq3AOtIN6tH%2F1qQjVZ1f6BwExTH94CDizikV6TJ6yb0SEO4X0X68B%2FaoC02GKLoUqurOOqEeHOT0buIiyrHIv7Bgx9aVHiLmPknRPTOvubzNyIgmiME2cZKgTPPhU0WWZxWx99uZcr5d0w9fCcEkzkR9JIncVESpVM%2B1KF9DOz0ohgTSOa7WHFBCXSec%2FOtdihuDjjQA1f78DWLVddc2l4BDWzAq4lWeOgHhr7H7uKQHXorokKRBwtsjkkOdcHjz4%2FLT4ytwjrCSri%2FPmfcgGRqJgJbTLp6kO3HZlABlOqjMVqT3wrqfT0V178ljkZlAQ9wGS0%2BbiQBwVnBAhMovGbMVYQPfsXKSPlj4HoBO73eCfPTsuP2JxgWcdzaNVSFU8S%2B4FtzqoQPGV85q3Pw2YHMfOipXgLZJbKqEsa8kRFzdz4lJ6yBtuonKXiyZfKaMqmsW5tOvWm6gbcU0RzHbLnhsM%2BHC1hYbjWDBBERYy2e9TMkuwSIFg8EOFr8sj0CZp17C3BAc84SS9gA6Bb15BKGbzSNvgVnkxGFH6a3YDeWebWwkHoeYKyvnnkCQSxuLy9D80auysE%2BSKWpAm7WJqMsqu9KwLgKkdi%2FBgQr3kHKwwC6a9wz9t5FYG29kmhxTCNpu%2FBBjqkAQyXAxoontWnVzl%2Fjmp88N0%2BQyhXLIpnhngcLVJqA2MXiy65XxX1JF7LzLQ8grPRkiI%2BlhEcHt5lfKAeY24A9c66LGItf8o5jkg1fiCIIFofaR54JLM%2Frv8Djw%2BdepNFj74iH3MZiZ6T7ntALJ3fHhwaYWLMBTs0x7pni1%2FJcmSim3j53Ew%2FDfqfc3jeusGG5AeVZ0Ow2BOBlAsA8OhQF4wIqd%2FQ&X-Amz-Signature=51640ad46b4b23dae14d66576602521d53c2e797de717e5471f607b8768fe477&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HVERFU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCbp6DQsXhu51Ifew10HUGg8gABN1Hqo0e0gUNeLMQflgIhAKFfmbpXyoilTwdZvgsjUkS82lY0FprsiynL4pVp6r5bKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj7EuoTnl2pFZnShQq3AOtIN6tH%2F1qQjVZ1f6BwExTH94CDizikV6TJ6yb0SEO4X0X68B%2FaoC02GKLoUqurOOqEeHOT0buIiyrHIv7Bgx9aVHiLmPknRPTOvubzNyIgmiME2cZKgTPPhU0WWZxWx99uZcr5d0w9fCcEkzkR9JIncVESpVM%2B1KF9DOz0ohgTSOa7WHFBCXSec%2FOtdihuDjjQA1f78DWLVddc2l4BDWzAq4lWeOgHhr7H7uKQHXorokKRBwtsjkkOdcHjz4%2FLT4ytwjrCSri%2FPmfcgGRqJgJbTLp6kO3HZlABlOqjMVqT3wrqfT0V178ljkZlAQ9wGS0%2BbiQBwVnBAhMovGbMVYQPfsXKSPlj4HoBO73eCfPTsuP2JxgWcdzaNVSFU8S%2B4FtzqoQPGV85q3Pw2YHMfOipXgLZJbKqEsa8kRFzdz4lJ6yBtuonKXiyZfKaMqmsW5tOvWm6gbcU0RzHbLnhsM%2BHC1hYbjWDBBERYy2e9TMkuwSIFg8EOFr8sj0CZp17C3BAc84SS9gA6Bb15BKGbzSNvgVnkxGFH6a3YDeWebWwkHoeYKyvnnkCQSxuLy9D80auysE%2BSKWpAm7WJqMsqu9KwLgKkdi%2FBgQr3kHKwwC6a9wz9t5FYG29kmhxTCNpu%2FBBjqkAQyXAxoontWnVzl%2Fjmp88N0%2BQyhXLIpnhngcLVJqA2MXiy65XxX1JF7LzLQ8grPRkiI%2BlhEcHt5lfKAeY24A9c66LGItf8o5jkg1fiCIIFofaR54JLM%2Frv8Djw%2BdepNFj74iH3MZiZ6T7ntALJ3fHhwaYWLMBTs0x7pni1%2FJcmSim3j53Ew%2FDfqfc3jeusGG5AeVZ0Ow2BOBlAsA8OhQF4wIqd%2FQ&X-Amz-Signature=df66f819ec8c1f9abcd6005de538b048a3d00d66be78e04463817efaaa025ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROTBZMN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICQpcgYEFyrG9NMeC3DWR9aH6cjLBh7L5BEfx4MOrM7HAiEAlHk8%2Ffr27QBWkYvxVOIc%2Ffv8O64GMy1W6wdHiZrAyDIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAidntp%2Bv8BF3Ei8oCrcA6xn3lAy9Mx93TkAgJrNAe%2FDpQ24gnPC6HDHQWmyI87InWGOJGf2sRmujFySESCXAAQ6AObSQZ1nzSd%2FvVI0RxVZ0%2Fhg3qRHitu3SaC1oK3JvhWt4E7l3ejiCEXzCyoZsoBooeSfLkVHQGdNvfOOEg%2BWONe%2F64fhUWJrBFSt6XR%2B1Ube3ioVqWxDMt7%2FZw2DK19y1yYLJJBKKmX06N%2BCwbm3OWySLplFsCXENn5zdyinJSITCLdbl4qhVxSyGhdL110R6so8T%2BzIzn9vkVgp7EAz4v5PqVd%2FRfp4tZhXlNhZEtDQIunnfQut9lkMsU3gA08PYU%2F9BS2OnyfKKuoRc3NyuKrgWd3qd2qxLDLzP4tICrpsCzJmb5Y8x0jV08fVb7Y3jpknP0HilJVcW%2BNsXp2%2BmHl%2BjL%2F02Oo4Arnnqq%2BQ8AR0Ga9n6OqGAhFfmb%2BfKng2PGUQbM0tGPeal%2BndlUNv8ufgjKyIZ6auolmtWdSOSbg83aFOLAYjn%2FGuVJX7dqArZr6YD%2Fy%2Fkw70fD9D5YjMHEYbZGk1UsalbJumAZ4DnG6nUcMqMvbYL9FGwD4vcRDm8WSfb6SIQObr7TaRdvkxwimU0IpzC8Lgw07zD9bKP5bM%2FanNgWCzp24CMIiA78EGOqUBz05rMwtHs57FIjMAM8FfezfAVIZiWUBFPtR%2FuyjMK%2FL9YMBrPUlkLWV3VetZv3T2LeRBKoudgeEv%2FfVEGY6TSr7E0yi6AGCvpxxKW3DkbF5K1ZnGsmNseG9SApspTs%2BquAGRuaD9D2FRADlfZ%2B0iSwl4b2HpsQoKgRcrNOLpglFNbVlVG47OhsjhufEgzq0uu80%2FvDRhl778SgIcvvkt2CyUqCfB&X-Amz-Signature=bf1e8c2547d3d71a15efe2ba4e428c53a4a919bb358af7a1d977ae6b43124901&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZNA6DV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAUOK7GfMTIcAD8Vz6mCp77GMlwK%2F6n5MuCQKfXd%2B%2BQUAiEAsmzFJlMzVdNI866vBEP3GKPNFl%2B9gfGWWezw5JRqxDcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPekYo38Lrfjjig85SrcA0huq66xtsaYwSeXBhRyj%2BaBtayPlHbtESAFoFWsk%2B5h%2BpglxHsyjbDur6AOBag0xzqjgQyyo0Z0g5XSc8Twws%2BSVniuPKSSdxdyZTZKgUsbGPEXDgS83SXhVMSu4YqBOKaE11wsN7ND%2FO6uftEo%2B7JLVsSe5u%2FgSCTz%2BgKX7%2FGgYQl7wI3wiq9ZD01jRtlsIVW2vaKRtzAqIgB9ELs%2BVeBMgRW68jAM%2B7LWh83yI4Z4NuH%2B1IIx2I1UFRgxCV4Sz82PZ64RsaDjo3Di8R5rayizvLcbi%2FIkHVHl%2FRvnOnTT6rTTVvJE6pDbNi59tW8VgCnggPprE7zFYJYgblDoWy2kHNqRxSA3k6M49ntKPbWY9SJ2oOGAw9w03N0IVvx26%2FAdElbz12gzhZjfrbpv2nAi2QL30LKLPERWyE%2BYPJqHUPwM7ydhJmkNA%2F%2FUZ4qvFLfMq6jPZzXepww9FzLnGgk9OU8mmuDwRT6PKzBVpQpfQpxeKeN0zDd4%2BziaKt%2F559qqgcXyuLjSASKcbSq5SHUCSUJ0YHRdu3YvZKUD84jOj%2FEO1pD4AawP%2FNcMpV%2FLZeCP3H47jm9cwe5xbvMey0JVhV0SUTth%2FhccTysNmUtx21IG8g7iWSHyoCW0MLbo7sEGOqUBsdL%2BMV1LBLoqGw6lHmtYveVelgUaboflXugPK8gyUp3vsGsXSTcEIkJtIblXJD5RYyFVFgIJnxqLbjUhe7p%2FIE8X0y0GMg4Az8iOM%2Fpqy52Ju2BOxgyZhIDZsXyaaxJqx71KabT3yeGeTh86x2Ip5VTkMo7zbEC1pZVxEr2sBdu%2BEHH0av7MbXfG5iq2%2BAntZx66r%2FgBMMTR1iAGmnB3LGaMfJzc&X-Amz-Signature=bb6b0b4c43f161411d0ef5386109dea86a27134a03a9c526ef6dc37aa8e54161&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HVERFU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCbp6DQsXhu51Ifew10HUGg8gABN1Hqo0e0gUNeLMQflgIhAKFfmbpXyoilTwdZvgsjUkS82lY0FprsiynL4pVp6r5bKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj7EuoTnl2pFZnShQq3AOtIN6tH%2F1qQjVZ1f6BwExTH94CDizikV6TJ6yb0SEO4X0X68B%2FaoC02GKLoUqurOOqEeHOT0buIiyrHIv7Bgx9aVHiLmPknRPTOvubzNyIgmiME2cZKgTPPhU0WWZxWx99uZcr5d0w9fCcEkzkR9JIncVESpVM%2B1KF9DOz0ohgTSOa7WHFBCXSec%2FOtdihuDjjQA1f78DWLVddc2l4BDWzAq4lWeOgHhr7H7uKQHXorokKRBwtsjkkOdcHjz4%2FLT4ytwjrCSri%2FPmfcgGRqJgJbTLp6kO3HZlABlOqjMVqT3wrqfT0V178ljkZlAQ9wGS0%2BbiQBwVnBAhMovGbMVYQPfsXKSPlj4HoBO73eCfPTsuP2JxgWcdzaNVSFU8S%2B4FtzqoQPGV85q3Pw2YHMfOipXgLZJbKqEsa8kRFzdz4lJ6yBtuonKXiyZfKaMqmsW5tOvWm6gbcU0RzHbLnhsM%2BHC1hYbjWDBBERYy2e9TMkuwSIFg8EOFr8sj0CZp17C3BAc84SS9gA6Bb15BKGbzSNvgVnkxGFH6a3YDeWebWwkHoeYKyvnnkCQSxuLy9D80auysE%2BSKWpAm7WJqMsqu9KwLgKkdi%2FBgQr3kHKwwC6a9wz9t5FYG29kmhxTCNpu%2FBBjqkAQyXAxoontWnVzl%2Fjmp88N0%2BQyhXLIpnhngcLVJqA2MXiy65XxX1JF7LzLQ8grPRkiI%2BlhEcHt5lfKAeY24A9c66LGItf8o5jkg1fiCIIFofaR54JLM%2Frv8Djw%2BdepNFj74iH3MZiZ6T7ntALJ3fHhwaYWLMBTs0x7pni1%2FJcmSim3j53Ew%2FDfqfc3jeusGG5AeVZ0Ow2BOBlAsA8OhQF4wIqd%2FQ&X-Amz-Signature=fad73da678cd5c1407cf41fb9246c286e9649430cd37db2242bc1cec8fbbd045&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
