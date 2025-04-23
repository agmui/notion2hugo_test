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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV22QPQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDNh8VSq7aqH%2FZNgdJt%2Fywi%2BbCuNBazysV6G94Js0%2FdYAIgXFl6ucf12qqYYgpcARA659A%2FFwh2Jlz4TJzuqhiP6vMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnRl4kvgjz8eIa4PSrcA90lqs13XUic4KBrKpdPIyPM96uIIj%2FH1WuL%2FaGQXFoOvCq5Wdx04jg3pzNR2TiKtVBFGmSEOB58yZnQ5W9FN55KVRKNfLAXJC1AoMHlcDjkOo%2FEmYlWBAaoZruAGl2VlKrpfQLvUkRYlV9o2e3N5sTA63ri4Lypr7jxLX222stHHAhF8gTfKXI6WnebeGYN2j3f5%2BWE8or3w2xQevUhgkPFKvwIuIDvjltwsxCYbArfoKvnPG%2FqOVy4FoD6%2BBDJJxBCQ4li7tQIeMwiXmyTZ92cQGJK%2F6bz%2B3k80xDGfxmTUw7rLtBDZWMSmNF41CRdmxBfzH2LfTCjsLc%2F6snuZMQndm3abCKUJeTb9ldUbFNmqjZbKWwKDAUxnNz081sKNDZEEYe89T0CRAJxPOzcNza7P10rhltiU76GBTv3q%2FexT%2FZVHlWpxwEpa%2B9gXqFIspRNjj4Q3j4O%2FW60MkERMQk%2Bwf%2FTuuZYiiLA51rjOjeZFjqaXo9UhW2ZS2fX6KrJjV0RkwxZVhim5jYEqddwPFuowmctsj8X7%2Bv7qCaarMTARnzjHWTmwDJPN3r3fa83Ixri0QhiGC0s3NkcdRhWrI%2Bchlip5s3xDM3r30MC2ERu%2FWMTJXFG3Tl4HJ7HMKyIpMAGOqUB7v47bFkA%2FKfJvz%2FtsxOzzQHftTOockK6C%2FNgtDuJkJP0MIE38sANMGybckkzUxSYdNX7s6ifeKkXYIqahKxKdd37tQ7mC6RpPk0RwGja1oiLS0PfE4JK%2BKy29KwJu%2FT8SOhgmKZ5yCBq9i2GLFK3vfFgCyK1RKn5%2FqtXYHHoiaAcEelxvBVCTE3LT9OHYODU8rjmfjWbeSIimtSBs%2FIVyAeCbVbm&X-Amz-Signature=a1ef19c8c4979cc9fcb0e13462326a106937e33889d086f8bf9d848c5736e812&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV22QPQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDNh8VSq7aqH%2FZNgdJt%2Fywi%2BbCuNBazysV6G94Js0%2FdYAIgXFl6ucf12qqYYgpcARA659A%2FFwh2Jlz4TJzuqhiP6vMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnRl4kvgjz8eIa4PSrcA90lqs13XUic4KBrKpdPIyPM96uIIj%2FH1WuL%2FaGQXFoOvCq5Wdx04jg3pzNR2TiKtVBFGmSEOB58yZnQ5W9FN55KVRKNfLAXJC1AoMHlcDjkOo%2FEmYlWBAaoZruAGl2VlKrpfQLvUkRYlV9o2e3N5sTA63ri4Lypr7jxLX222stHHAhF8gTfKXI6WnebeGYN2j3f5%2BWE8or3w2xQevUhgkPFKvwIuIDvjltwsxCYbArfoKvnPG%2FqOVy4FoD6%2BBDJJxBCQ4li7tQIeMwiXmyTZ92cQGJK%2F6bz%2B3k80xDGfxmTUw7rLtBDZWMSmNF41CRdmxBfzH2LfTCjsLc%2F6snuZMQndm3abCKUJeTb9ldUbFNmqjZbKWwKDAUxnNz081sKNDZEEYe89T0CRAJxPOzcNza7P10rhltiU76GBTv3q%2FexT%2FZVHlWpxwEpa%2B9gXqFIspRNjj4Q3j4O%2FW60MkERMQk%2Bwf%2FTuuZYiiLA51rjOjeZFjqaXo9UhW2ZS2fX6KrJjV0RkwxZVhim5jYEqddwPFuowmctsj8X7%2Bv7qCaarMTARnzjHWTmwDJPN3r3fa83Ixri0QhiGC0s3NkcdRhWrI%2Bchlip5s3xDM3r30MC2ERu%2FWMTJXFG3Tl4HJ7HMKyIpMAGOqUB7v47bFkA%2FKfJvz%2FtsxOzzQHftTOockK6C%2FNgtDuJkJP0MIE38sANMGybckkzUxSYdNX7s6ifeKkXYIqahKxKdd37tQ7mC6RpPk0RwGja1oiLS0PfE4JK%2BKy29KwJu%2FT8SOhgmKZ5yCBq9i2GLFK3vfFgCyK1RKn5%2FqtXYHHoiaAcEelxvBVCTE3LT9OHYODU8rjmfjWbeSIimtSBs%2FIVyAeCbVbm&X-Amz-Signature=d0c6d12723e2d72b491d3a616e8b965fe1d14bfa7643d6edc5eb39b6d380d410&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654GKFWHC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICkwitmq%2BbM5T7DApAxrcsLIKkjK56OtJzY2so7%2FeEg7AiBCtoKS6jeO5RAIx581WZ6Mnz6Ovi0f5PDlYq6qZroSWyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZlaV4zXi7uy9wMelKtwDwbnHZ2uSOPCIgcS0wn3UlmsP%2BQqUPnU23h4QuWL%2BB0HsJYMyV2Caxu3A7LMw2EobExpIpscqNG1ax1HXmSj50jX39m8OporFVCx%2F7I%2FalV5mFfV3UmJZL0rDuDomceM7h5EiTs%2B%2BEXiQHfJVOlEAadfA%2F6aE90UWVZZxcC9DoYf4XQ7Vr%2FcbF7Dkh%2Bwe28tv%2FzrQ961u1hmb411E5CHE8fATzGSur7Rq3skdKJbpfpwGgizWsir0Or%2B6ulj%2B2d18Mkm4yD98uhBLn9CWhNUlKbst0ZISfPicSeTbk9j2JbZaunyZLnuogADODv9aZXXTflYggHuEZAia%2FnN8qHzrzBpgJfnA1JKqmhhL0%2FwmZTA4xgrZ1shgKkYfFMT81M8uLln2azMI0BroXKJu3aBAXdJG4oz7w58vZmd3I9CFTfxMQOsFay1wrdzzH81MoCOLfGiklQcLcL4eeJ2Lh%2Fk0BQ8yQG%2BmOC4600nqfTcbtd35TDS8fc%2B5gzJk9YrGdQo2TA8Fvzq71opsMasNjq1U%2BruLfWTW7q6rWP82kILDFnB980fIS%2BHr56FZJp0bCrYtP%2Ff8o23a8LyJttQYUAr5kE5zI%2FwJrXs69r3TmcPJCxiNW9kyN4ZvUBHPW54wj6GkwAY6pgGtEIQeQQ3Ldp2GBjzUTkhExclajPcNF1KOzfGcwLAsUFrU4OfgOzmhHA8mzFtVeKioSvofOEqGMUYN5Yk1mLpHgJwJfMHlDnjHibnkdTyUH%2BwQc3XUgNaAlvZVFfCNou8rJhbPOcv6bvKXwGKsqgxb7Jmd%2Flr6qqYbD3uX8Jzu2o%2B%2FRfLRy6jg8s4qsZrDSBBSZVLWAfQTxpAHc5NELbWqa6YJDreP&X-Amz-Signature=13a619c41cf8344ca9c99123ef2348b3feace3455ac418520165ab5482aaa419&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LQCJZX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDnuG1BCiFSbvxLfGZg0VG5skVv1svHG6afQuAPS6tJQgIhAJgyk1qv1kWDiC%2BpFCr518pJOMxaKJotkfHLAOAYDwj8KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj9dDomeMEKHJJEQ8q3ANqttKc%2BwEY8m%2BUsUNhFf%2BQ5wIEVKvxj4x5KHK%2B01CU2meKmhT4VZj0rcFWF34pLXTLZiCb1Mv2nG8jaoZq4ydm3pF3Sf4kHadx8pdMjz4tjZHgP2BKV5KYgFtC%2FxHh1cSrdYQFKt%2B0A8Khtw4q2E1l7TcLY6MG%2FIN3DqcTTTpGiwqEgDVc2xkEIozzvEbnIOcr9Lij6Y%2BkwKV3RJPEyzfdxdmgXawhPsOOUf70kLZVlv7%2F56FjT7Mb4qUcd5XteE%2BA%2FtIJ7LFnD4Rp0Hdel1ZSe6iSrnVju3X80H6A9Lz0Z%2Ff0VtD9hrAKIiyZZsrTOpnoJtSQSF%2BC5JC3sHRCWkRLZfTTtBRtoPmKZd7SMqlbIAcQm19tOvs5Sn0wANY5ooLUxRh0PmdRLObY4PFF1tt4W9Rg3ffOT5deNXKLMEcpuov9SzUkMFTRpWvCcYYNWFyA1tD0aS%2Fb6uCHKrxDNf8JWc%2BXxk%2FFEjte3JgYIxGCgngDQhjtCzwT%2FimY9fnBYq0ncei6gDcLgS8T6jImwoA7bVYxms%2Bmg8zyKeNygq31Ouf2qYZjU20TsikBozRw2pC9jPkfaoE7NNhMnPyY0rb1chg9ZmQeoVmqEJ7lkJO3BS6%2BSp1e8Mmz7XlrETCSh6TABjqkAQ8nhVK7slKM8gjhbYvKuh3CzBs6mX51iya5q37zpANKiyrhRRSzyw0GRnKovDnUHvIlUR1XAj9Ewlyg%2BYh%2FKamwvRiIYY9mHyQ7vIUBHrRQpsTaC9awLpPD9fhcN2wA3kfgTg1A4OTw9jeeoP1h4QG7Rxy%2Bus4vTPRsHfsOgVupWCXWpvKBtJhj5BljQFRHr2GZLF75z1v8f7mUD5UBKoPeYU11&X-Amz-Signature=86a5914d0695915e02f7000129c327db88b48e73853285ba8dd93abede5240f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV22QPQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDNh8VSq7aqH%2FZNgdJt%2Fywi%2BbCuNBazysV6G94Js0%2FdYAIgXFl6ucf12qqYYgpcARA659A%2FFwh2Jlz4TJzuqhiP6vMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnRl4kvgjz8eIa4PSrcA90lqs13XUic4KBrKpdPIyPM96uIIj%2FH1WuL%2FaGQXFoOvCq5Wdx04jg3pzNR2TiKtVBFGmSEOB58yZnQ5W9FN55KVRKNfLAXJC1AoMHlcDjkOo%2FEmYlWBAaoZruAGl2VlKrpfQLvUkRYlV9o2e3N5sTA63ri4Lypr7jxLX222stHHAhF8gTfKXI6WnebeGYN2j3f5%2BWE8or3w2xQevUhgkPFKvwIuIDvjltwsxCYbArfoKvnPG%2FqOVy4FoD6%2BBDJJxBCQ4li7tQIeMwiXmyTZ92cQGJK%2F6bz%2B3k80xDGfxmTUw7rLtBDZWMSmNF41CRdmxBfzH2LfTCjsLc%2F6snuZMQndm3abCKUJeTb9ldUbFNmqjZbKWwKDAUxnNz081sKNDZEEYe89T0CRAJxPOzcNza7P10rhltiU76GBTv3q%2FexT%2FZVHlWpxwEpa%2B9gXqFIspRNjj4Q3j4O%2FW60MkERMQk%2Bwf%2FTuuZYiiLA51rjOjeZFjqaXo9UhW2ZS2fX6KrJjV0RkwxZVhim5jYEqddwPFuowmctsj8X7%2Bv7qCaarMTARnzjHWTmwDJPN3r3fa83Ixri0QhiGC0s3NkcdRhWrI%2Bchlip5s3xDM3r30MC2ERu%2FWMTJXFG3Tl4HJ7HMKyIpMAGOqUB7v47bFkA%2FKfJvz%2FtsxOzzQHftTOockK6C%2FNgtDuJkJP0MIE38sANMGybckkzUxSYdNX7s6ifeKkXYIqahKxKdd37tQ7mC6RpPk0RwGja1oiLS0PfE4JK%2BKy29KwJu%2FT8SOhgmKZ5yCBq9i2GLFK3vfFgCyK1RKn5%2FqtXYHHoiaAcEelxvBVCTE3LT9OHYODU8rjmfjWbeSIimtSBs%2FIVyAeCbVbm&X-Amz-Signature=48289b3bb07df953037474ec087bd7413465fe238825770bb104ec5b082491b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
