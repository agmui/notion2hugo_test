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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKP2643%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7tuWpxk9MqstcVt4OpvS8IKpvm5gjLxcuH5BZIEngLAiEAwyBJhMiB5AbHkAPaiW3eMrmfyjBUXeuadrLF5zhSe%2F4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWSbe2dusqT8gyGNSrcA%2BsbWa2u4%2BhECuuq30pgRQwhwR3U5q%2FH6MUegBm%2BwWiMAswGZ0cOv2ZUqcw4evagOAsn%2FzEu0SLT5XmCKNOVXqMelEhAQ6eYQvg2pZSD1uqmXZCUImfAHmnt%2Fx3rmBb47glpppUXqEsUwvjD9DJqQPR48CfXq%2FGf7%2Bi7lfgNVPrLSMblffEfHs1QlvJvsnLd%2B6wsLLjZOw9Vk3j60B6T%2FzhZ%2BKlbEWE1uzv6pIE4uQcDNIXbf7ivZDfIRy8PLj7hoSrOFTX40P5xDmMLwTQEZxt1hfUG1kAPdo%2Fwm15aoRXdFJVEP%2BC%2F3tH6yyqSwS%2FDEY2fhoIpyjJvx4JtoU4JZnUoWA%2BsAuS6xkvZACy3fOMk1GJP4DjRV5BbcmaXY6U0vLB5Pj2wtsshLaFSfbj290WVpOpOA8uKMgZZAhSZ0RPi%2FOOA01ktlBi3o5DkzErdUN%2FTwENK1zjuQMdjpOBvDXyIkCBVHynAsAghb0PQ8STgTvXah7LsMMdJM3OHYjgK3KSZZupK8f%2Bc860DkMCIa6Mvua671XLyZM1g0zJM3OTVyrgyLz6Eqswi5vggfvzjcYo2%2B4wyRcTVRC9466YPF7%2FEzfe1zoaNXaEPUYJTJeLqk%2FkA%2BdC4DExn8MJ3MM3NjMMGOqUBIhj2HIq7cbeYjcgt64Dg7geVzGr34EY6gD6sGJasl7ZiU4pKHdPaOhNhresJhnaE6Gn%2BEz7l%2BOE7zROXuYgf3mld4Bm7RNPc6K08IdLl65pm2MHNqL3deDIrhL6ZXw4QBk6mocw4ynR6caQqk8m84rdkpdkRYZTebklLHleOkiKMh93fIixU8LKN8nVp5knVNDU2%2F6H6eLV8iqjrUW2doBQjIiDY&X-Amz-Signature=85d6614b4f1907bdae3e472c1eaee54be2895921e5ab83196c455312f9f1d2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKP2643%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7tuWpxk9MqstcVt4OpvS8IKpvm5gjLxcuH5BZIEngLAiEAwyBJhMiB5AbHkAPaiW3eMrmfyjBUXeuadrLF5zhSe%2F4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWSbe2dusqT8gyGNSrcA%2BsbWa2u4%2BhECuuq30pgRQwhwR3U5q%2FH6MUegBm%2BwWiMAswGZ0cOv2ZUqcw4evagOAsn%2FzEu0SLT5XmCKNOVXqMelEhAQ6eYQvg2pZSD1uqmXZCUImfAHmnt%2Fx3rmBb47glpppUXqEsUwvjD9DJqQPR48CfXq%2FGf7%2Bi7lfgNVPrLSMblffEfHs1QlvJvsnLd%2B6wsLLjZOw9Vk3j60B6T%2FzhZ%2BKlbEWE1uzv6pIE4uQcDNIXbf7ivZDfIRy8PLj7hoSrOFTX40P5xDmMLwTQEZxt1hfUG1kAPdo%2Fwm15aoRXdFJVEP%2BC%2F3tH6yyqSwS%2FDEY2fhoIpyjJvx4JtoU4JZnUoWA%2BsAuS6xkvZACy3fOMk1GJP4DjRV5BbcmaXY6U0vLB5Pj2wtsshLaFSfbj290WVpOpOA8uKMgZZAhSZ0RPi%2FOOA01ktlBi3o5DkzErdUN%2FTwENK1zjuQMdjpOBvDXyIkCBVHynAsAghb0PQ8STgTvXah7LsMMdJM3OHYjgK3KSZZupK8f%2Bc860DkMCIa6Mvua671XLyZM1g0zJM3OTVyrgyLz6Eqswi5vggfvzjcYo2%2B4wyRcTVRC9466YPF7%2FEzfe1zoaNXaEPUYJTJeLqk%2FkA%2BdC4DExn8MJ3MM3NjMMGOqUBIhj2HIq7cbeYjcgt64Dg7geVzGr34EY6gD6sGJasl7ZiU4pKHdPaOhNhresJhnaE6Gn%2BEz7l%2BOE7zROXuYgf3mld4Bm7RNPc6K08IdLl65pm2MHNqL3deDIrhL6ZXw4QBk6mocw4ynR6caQqk8m84rdkpdkRYZTebklLHleOkiKMh93fIixU8LKN8nVp5knVNDU2%2F6H6eLV8iqjrUW2doBQjIiDY&X-Amz-Signature=1b5ac0f0a03e20e408586d206b6cc631d5bfe3424a47d440ba942cc131d42018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKP2643%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7tuWpxk9MqstcVt4OpvS8IKpvm5gjLxcuH5BZIEngLAiEAwyBJhMiB5AbHkAPaiW3eMrmfyjBUXeuadrLF5zhSe%2F4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWSbe2dusqT8gyGNSrcA%2BsbWa2u4%2BhECuuq30pgRQwhwR3U5q%2FH6MUegBm%2BwWiMAswGZ0cOv2ZUqcw4evagOAsn%2FzEu0SLT5XmCKNOVXqMelEhAQ6eYQvg2pZSD1uqmXZCUImfAHmnt%2Fx3rmBb47glpppUXqEsUwvjD9DJqQPR48CfXq%2FGf7%2Bi7lfgNVPrLSMblffEfHs1QlvJvsnLd%2B6wsLLjZOw9Vk3j60B6T%2FzhZ%2BKlbEWE1uzv6pIE4uQcDNIXbf7ivZDfIRy8PLj7hoSrOFTX40P5xDmMLwTQEZxt1hfUG1kAPdo%2Fwm15aoRXdFJVEP%2BC%2F3tH6yyqSwS%2FDEY2fhoIpyjJvx4JtoU4JZnUoWA%2BsAuS6xkvZACy3fOMk1GJP4DjRV5BbcmaXY6U0vLB5Pj2wtsshLaFSfbj290WVpOpOA8uKMgZZAhSZ0RPi%2FOOA01ktlBi3o5DkzErdUN%2FTwENK1zjuQMdjpOBvDXyIkCBVHynAsAghb0PQ8STgTvXah7LsMMdJM3OHYjgK3KSZZupK8f%2Bc860DkMCIa6Mvua671XLyZM1g0zJM3OTVyrgyLz6Eqswi5vggfvzjcYo2%2B4wyRcTVRC9466YPF7%2FEzfe1zoaNXaEPUYJTJeLqk%2FkA%2BdC4DExn8MJ3MM3NjMMGOqUBIhj2HIq7cbeYjcgt64Dg7geVzGr34EY6gD6sGJasl7ZiU4pKHdPaOhNhresJhnaE6Gn%2BEz7l%2BOE7zROXuYgf3mld4Bm7RNPc6K08IdLl65pm2MHNqL3deDIrhL6ZXw4QBk6mocw4ynR6caQqk8m84rdkpdkRYZTebklLHleOkiKMh93fIixU8LKN8nVp5knVNDU2%2F6H6eLV8iqjrUW2doBQjIiDY&X-Amz-Signature=d661aeb12fd5d79054127d014ece8c787b994e1a4eeea9a9cab41bd11e6bb37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVSPI6FV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh%2BFx7DPx73N79BmTWg4axGKReTfJF6RhaKt1vy0QkGAiAzu6%2FryIzjOjYNMjcNlsCHU2LUOYyKw8Jjo%2FncsuUa1yqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAvZ%2BVUshmND1AOCKtwDMBM82qqfItaoltCtmuwEmEE2fwDWiQpkfUEidfMFASkofbVxL1uRCmi3cNbnzMDxNYkfy8HhlrbGnXxa%2BPoNnVCRbqltX3mtdhK1HmR%2Bbk4Wt%2Bam0GG9ENOfgN3hl8Xjy3Y2Zx8MvlQfitND9Td90WZ9oSGHZXSzCHcuDOzvkNaUQqiPWL4eA1MrQliInHVL665Bx%2BYZ0DyV%2FLPzY%2BiACahi%2BNZIfXRtA6N13RTiDRTL7KGQSRfdXEd8qAvb5PYliVqyyujjqPAQgIDHxqdgUOXchWbzwB%2Fqvm57coDG%2FtNSrs5CtjzfgZfYwPJGL%2B%2FKEaTfzvp8brI983wWbGb4yjKQVbU5vXzyvEGmSbICN30mc8GlGEO2BXiZogJfwxbr2%2F6N%2BeIe33%2BbaGnDGjW9k0GYb9vwJO1yzp9yYq%2FLd%2BlNks9FcYCvO6vfE1I6%2B52DFFv5c1gJi025W2GtsGvnStKDzotqSu%2B1rxD4Gyithiw%2BUhEIMG9n99KNslhXLl0IsyRje4cNJPXEmqhNfVbbidoirMleCwNdrhaKUN5BJNwhW2k3lg397l803fscNi52qiL0QwSyOF2c1O7nnfhxV4WPyrUo5pRIWIADAuMatcZR0GcPWV%2BvotXzm3owlM2MwwY6pgEbAQaEiKt6jeLsOw8VYSllGqVaBADqOvEZUgJ%2Ba%2FB7MbCm%2BeEuewo%2BmfXsVAYxwKa9QoDtTzXdNgTc83Hu7mfYeSpeA3SF7A1tU5PrRlMQOe6eatTfV6TGOg%2B829t7X8tZKf7IcdVvWTHB3g%2FI6Chc2Z2T98V%2BvVNPQiAHnDYv2BBdNc6Wb48BeC%2BqzTGt2A6g4z%2F3mM44gVwOEP%2B7VpDaHH4YunSP&X-Amz-Signature=60812d8918602f81bf38a9b81fa35eb24c48e8381cad72fa75cb21186898b66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKL6SMBG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYN3WrD9SkIM1XYp%2FgTzVSv%2FUOCN55GeMUHw0VgEZFxAIgKF1Or3C7ozerovSNtKR1wwF%2FXMLUFVWwdYE2UbX4cmwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME0VjsdBmFDTWvuiircAxnEtSxIXiBsikHHaJfgysF7TZdpF0oE%2FqUzNLIfvRAgdglAC%2F%2Fq7NLKjs39FoNuFCikbMza2XBoaMUqXq3PLD6xCg%2B9VGridzK0kYgvmfLeDR7%2BApxJA4iuVrGTnRjGvkTPt503%2BX06gQfVlJouG0SHIYxlOkpEUc4GI0VRQbNFbuIGWlO8SzdLZZxDhCNJLdLGUkyyW%2BuuDUlX1rEoLPUBIX%2Ba13ZfMk%2FiKeQCRN9SeDxRcEuRr4EAj64xh5xqTxRZz%2FQmXDGxHT08Smht0gZLrAGSSpMGlCQVrrRD%2FT5Or3S4kCi5rbWqW44oiz%2FmuboIWm5ynYJ5G6xYu4GmgWlVAEFaoT4%2FIOpXYpzrdWz8JXb22lntWDH%2BYo6V6d1hynM41xu0igNI1b%2FJmRHn0cRhgpVq%2Bxnzju0pI7%2BJNN3HoSkR9AxSC%2B0i%2F63ngs6zBVIUwXh6koSJ5yXO4%2Fd5g9tIoAvnPUEftEwjmSsbKGPR%2BrvhzP15o3kL8KI56AlZIz13WfE2AAtyPO4jXV7rKW%2Fu9aNKiwciVDij%2BRXlWRyv%2FyVHciDK%2FTzE1dm1iQ8oERojo33VnTNURVJrmAZkCxMgxMKKfqPyJzVLCMzTA8Q%2BV%2F%2FDPRV9Srt6k5wVMK7MjMMGOqUBqxsKQfxZo61MZuzLvUrh%2BPxhj6HI9Z87kVBh8G03j8nNU2BpfbtstESRKeHpRCMVH4Mb%2BMcyPcIjCHbvl%2B3X904eDM99iOSMGqMzHw86e9RB7fQsnYG%2BysfjeHKJNczCk23glnobT3oFv%2BOB3bGJaFTzYPy6IQk6600hlSPfJXcugEvNXZ69J2vWZdOybBt8b3OYo5L8XLo3k7MPW8xtdmINmUJm&X-Amz-Signature=ca9dde6d0e6d0d017cc43bddbfdba4a54542a53788fe42358199040a4c4ba850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKP2643%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7tuWpxk9MqstcVt4OpvS8IKpvm5gjLxcuH5BZIEngLAiEAwyBJhMiB5AbHkAPaiW3eMrmfyjBUXeuadrLF5zhSe%2F4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWSbe2dusqT8gyGNSrcA%2BsbWa2u4%2BhECuuq30pgRQwhwR3U5q%2FH6MUegBm%2BwWiMAswGZ0cOv2ZUqcw4evagOAsn%2FzEu0SLT5XmCKNOVXqMelEhAQ6eYQvg2pZSD1uqmXZCUImfAHmnt%2Fx3rmBb47glpppUXqEsUwvjD9DJqQPR48CfXq%2FGf7%2Bi7lfgNVPrLSMblffEfHs1QlvJvsnLd%2B6wsLLjZOw9Vk3j60B6T%2FzhZ%2BKlbEWE1uzv6pIE4uQcDNIXbf7ivZDfIRy8PLj7hoSrOFTX40P5xDmMLwTQEZxt1hfUG1kAPdo%2Fwm15aoRXdFJVEP%2BC%2F3tH6yyqSwS%2FDEY2fhoIpyjJvx4JtoU4JZnUoWA%2BsAuS6xkvZACy3fOMk1GJP4DjRV5BbcmaXY6U0vLB5Pj2wtsshLaFSfbj290WVpOpOA8uKMgZZAhSZ0RPi%2FOOA01ktlBi3o5DkzErdUN%2FTwENK1zjuQMdjpOBvDXyIkCBVHynAsAghb0PQ8STgTvXah7LsMMdJM3OHYjgK3KSZZupK8f%2Bc860DkMCIa6Mvua671XLyZM1g0zJM3OTVyrgyLz6Eqswi5vggfvzjcYo2%2B4wyRcTVRC9466YPF7%2FEzfe1zoaNXaEPUYJTJeLqk%2FkA%2BdC4DExn8MJ3MM3NjMMGOqUBIhj2HIq7cbeYjcgt64Dg7geVzGr34EY6gD6sGJasl7ZiU4pKHdPaOhNhresJhnaE6Gn%2BEz7l%2BOE7zROXuYgf3mld4Bm7RNPc6K08IdLl65pm2MHNqL3deDIrhL6ZXw4QBk6mocw4ynR6caQqk8m84rdkpdkRYZTebklLHleOkiKMh93fIixU8LKN8nVp5knVNDU2%2F6H6eLV8iqjrUW2doBQjIiDY&X-Amz-Signature=29023bf3b14672d1ec8a855677dad8dd646db9adfc375f202757d0faf4a4ef60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
