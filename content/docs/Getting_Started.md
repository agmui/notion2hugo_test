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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBWVN2E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5V6RIdbKXur4KaYFTlK9QkZHpk9zihvY5U44ULyM1tAIgH%2FfpocKNcSvM16K97GkEMemgf6RoJuZ%2FcG%2BqAAuvTv4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAofSLbvTw03Uv1AircA35UAfftMNlnV3kQENGndUOv8kF45clQJSRobCbeBrgoMm2DhQUwHt0qenV3j25pbbS4Oo%2BTWsWUMAetjLjoTnYPJMwiitKCbEVfxyIsrQvabxbhz7OVadzhuXtsDZ6HbNApNsV8y8fQx%2FXmMWR5E1ymWLO99Gux11qNPO9khJO58VeDLmAnE50CUSxkDmDm4QhJ3Gds7s2z36nRnhANEgl9YFasY9llLEKpY7rITtq4zRdjYwhEVhUx0R%2Fugw6Pu0kgYcLjwEHlmG5AGRHWZZTRo7YlWsRpASU6cWWJatvBHiRTwSwvSpkVLIDMk%2BP3CTc5YdQjUmWaX3u5MwZLtQsySHVUYbrt7y%2FZcNULwAGBlZWAv%2B0mu1TMawYTrAuR8ZEOEPAeMX%2F77UbXuqvL%2FJEuKNeqW3OarlD5CY%2BV4SMv2X3CI8C54nLGR4IzQ2ozVgq8X%2FQBwFr8AWtJDwmhBUMUw7K%2B%2FG7mt9FztvryZI832Sl4s4lVlNEw8C7lCFiK98lKm%2ByY3nULprJPal1JjHTnIBGMyuoJmqQh1BS694J0UXFVEwDKcBJ5iY5DjYpZhmgIWnLt9zqIUmIdfQXkKQQpBr3NwISGXHTaEnXHHbMe%2B9u94WaW%2F6kFSWh1MIaO%2BMMGOqUBK%2BPKf0Rx4S5LCMPhJ5lFAPWHKeRV67nRB5RZaSktVcAQT8Uecpk0M14Dr9E8vSQgbtwVcVvaTd8kr5y581bK%2FEUZkP68AMjFxz6%2Fqpb%2BUrzfc1G7rvdVfO8LpiBRBy1Q7uxHV%2BWsZFl2TlttBcVngaKw44Q1taZyUEZoz%2BzSRVGU4AaNslrB9BueQIKtNgyiYwyF5fmq7ONMca8wT4IU5SuWWPnv&X-Amz-Signature=14dea7a468fdc3365a62a4d6fc6cc0f438f2aa95c64f1c03a84761c7c576beb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBWVN2E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5V6RIdbKXur4KaYFTlK9QkZHpk9zihvY5U44ULyM1tAIgH%2FfpocKNcSvM16K97GkEMemgf6RoJuZ%2FcG%2BqAAuvTv4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAofSLbvTw03Uv1AircA35UAfftMNlnV3kQENGndUOv8kF45clQJSRobCbeBrgoMm2DhQUwHt0qenV3j25pbbS4Oo%2BTWsWUMAetjLjoTnYPJMwiitKCbEVfxyIsrQvabxbhz7OVadzhuXtsDZ6HbNApNsV8y8fQx%2FXmMWR5E1ymWLO99Gux11qNPO9khJO58VeDLmAnE50CUSxkDmDm4QhJ3Gds7s2z36nRnhANEgl9YFasY9llLEKpY7rITtq4zRdjYwhEVhUx0R%2Fugw6Pu0kgYcLjwEHlmG5AGRHWZZTRo7YlWsRpASU6cWWJatvBHiRTwSwvSpkVLIDMk%2BP3CTc5YdQjUmWaX3u5MwZLtQsySHVUYbrt7y%2FZcNULwAGBlZWAv%2B0mu1TMawYTrAuR8ZEOEPAeMX%2F77UbXuqvL%2FJEuKNeqW3OarlD5CY%2BV4SMv2X3CI8C54nLGR4IzQ2ozVgq8X%2FQBwFr8AWtJDwmhBUMUw7K%2B%2FG7mt9FztvryZI832Sl4s4lVlNEw8C7lCFiK98lKm%2ByY3nULprJPal1JjHTnIBGMyuoJmqQh1BS694J0UXFVEwDKcBJ5iY5DjYpZhmgIWnLt9zqIUmIdfQXkKQQpBr3NwISGXHTaEnXHHbMe%2B9u94WaW%2F6kFSWh1MIaO%2BMMGOqUBK%2BPKf0Rx4S5LCMPhJ5lFAPWHKeRV67nRB5RZaSktVcAQT8Uecpk0M14Dr9E8vSQgbtwVcVvaTd8kr5y581bK%2FEUZkP68AMjFxz6%2Fqpb%2BUrzfc1G7rvdVfO8LpiBRBy1Q7uxHV%2BWsZFl2TlttBcVngaKw44Q1taZyUEZoz%2BzSRVGU4AaNslrB9BueQIKtNgyiYwyF5fmq7ONMca8wT4IU5SuWWPnv&X-Amz-Signature=b2d091e6f2319f92bc4978c919e800b90d33097f3c4f54782166905a68956564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBWVN2E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5V6RIdbKXur4KaYFTlK9QkZHpk9zihvY5U44ULyM1tAIgH%2FfpocKNcSvM16K97GkEMemgf6RoJuZ%2FcG%2BqAAuvTv4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAofSLbvTw03Uv1AircA35UAfftMNlnV3kQENGndUOv8kF45clQJSRobCbeBrgoMm2DhQUwHt0qenV3j25pbbS4Oo%2BTWsWUMAetjLjoTnYPJMwiitKCbEVfxyIsrQvabxbhz7OVadzhuXtsDZ6HbNApNsV8y8fQx%2FXmMWR5E1ymWLO99Gux11qNPO9khJO58VeDLmAnE50CUSxkDmDm4QhJ3Gds7s2z36nRnhANEgl9YFasY9llLEKpY7rITtq4zRdjYwhEVhUx0R%2Fugw6Pu0kgYcLjwEHlmG5AGRHWZZTRo7YlWsRpASU6cWWJatvBHiRTwSwvSpkVLIDMk%2BP3CTc5YdQjUmWaX3u5MwZLtQsySHVUYbrt7y%2FZcNULwAGBlZWAv%2B0mu1TMawYTrAuR8ZEOEPAeMX%2F77UbXuqvL%2FJEuKNeqW3OarlD5CY%2BV4SMv2X3CI8C54nLGR4IzQ2ozVgq8X%2FQBwFr8AWtJDwmhBUMUw7K%2B%2FG7mt9FztvryZI832Sl4s4lVlNEw8C7lCFiK98lKm%2ByY3nULprJPal1JjHTnIBGMyuoJmqQh1BS694J0UXFVEwDKcBJ5iY5DjYpZhmgIWnLt9zqIUmIdfQXkKQQpBr3NwISGXHTaEnXHHbMe%2B9u94WaW%2F6kFSWh1MIaO%2BMMGOqUBK%2BPKf0Rx4S5LCMPhJ5lFAPWHKeRV67nRB5RZaSktVcAQT8Uecpk0M14Dr9E8vSQgbtwVcVvaTd8kr5y581bK%2FEUZkP68AMjFxz6%2Fqpb%2BUrzfc1G7rvdVfO8LpiBRBy1Q7uxHV%2BWsZFl2TlttBcVngaKw44Q1taZyUEZoz%2BzSRVGU4AaNslrB9BueQIKtNgyiYwyF5fmq7ONMca8wT4IU5SuWWPnv&X-Amz-Signature=791bf69a38742b81b8f96608e0dcc8f60cda083e3fefea83f0ba1ace25747a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3XEH5T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyItGOmMtBxsTprSa3CXtabSummiAiW2oTGEeR9hAE6AiEA4%2FpHCmSTeYvvmVUjV23VFdEOOVjxhlgMQF5QczYB%2BZYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGJo4NZ7b16J6u50SrcA55Z8OpCF78JRW9uorm4GuVyyX43cTB5R7%2BB4M5jYkgCNj3fXn55wEvdrq6gtlZVxyeVA6YyIZXSMpT6G3da%2F4Y2Ms96RtqcQ5ZDihILAwovXcDRct8wvnEmPeohQf5sH7DoLWvfHmPHVmf%2B7XibsBdiv6yHzy250KApy67U03zHQbO8oCrY%2FFkxKbtnEnKfwh%2BhsE8V9my1zsvG0d8L7te5rOdOWXnYYL5BkmrSrgx0lLH5b1oPe5w9W0p1Qbc8jbUCCReqWHdzl1CAjqF6XKD7LTFyUdBxq1w5n2e4EfzIEWdGwVUlXYeOq8ve90ETjusmysydP%2FK8ccV9FCV3fmqpUD1E01%2BGpVAxBisb5J7i5YS82lOt2ElG6oICKXQ2t9YHRR%2BJsvR0HFkp9lfnxTgAD3ZeQ9tPaN5GxRg5Q8thMRAaEAmokBYk0nukWza4uOc5oEVhL2j%2BLtbi3BG0C1jnhE2xjmAIiQXxBMcB0H54do1J31zK5i%2Bc7z%2BRZv3hTELsWuNO0GL8Fp%2FiROOv2ITQpd7eNLkzrU%2Fac29G%2B3aRgCVjbNn8GEMHr1PAHH3GjSJAkorJQoz0x2QKmGxBLUmu7UgXz7T5qfKpTSKypVHPbt4duxlq5puRAOSnMNeO%2BMMGOqUB45RneTc3hX8fb6fR%2F0cMZhcHMQVRu9IP7PUuqNHKuD5sAjwG6KQAhepkHAkDNd2mu7Y%2Fu%2FVSB%2BdopcYdukdVDdxD9nQbeQhgPmRnS1j9amMt4Jvx4qAA%2FtOu0MLt1GTK4T2jN3tJB0ur9IyeA7NKNs03AJD64qjqE3KNLHXEGCUzo3FEctMWgfmEyHjdvEXGC4Q4oQ3BlwKnfyj1T%2BdwL0WVFBkP&X-Amz-Signature=5ccb6f4b042d59615d62791acc6e0c323de0d70f42a7c9cb43122e81c4264858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUV2ELE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP4GkiuzBreApDy96DdiGlAgEupZibgvt7vdY5sCRe1AiEAq3mOF9Kj%2B8Cu5Q91wo9pZ%2FdHbhS9ioL9bOAj7UvRHtIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4eUmL3l8TXL9uHQSrcA6NIRFkceHFTyjeivMahYR076GCjqyegIS1tTP%2FFvpmjHzXW2ApVgpser6%2B8v7PTzbgyNrV56Tl1b9DP5wrOvKAQUXaDq1bZ%2F38CvMxqaG6dxr41t5V9JC1bLOUkLtfHPusrhwQzUIeMWaN4iTym25ABAGJSpuVDyYqFPFkBAT%2FrkxA66Y5jSjWBQl%2FC3CWAetwHjJZ9BNvVkp94iTMH69MOd4CkasOrpCkCcrNVuBDEVN1ZzA%2B2rENeMjJ1c4Nzx2D1bcXsFfQxL4n0dGVqh375xn1dEnS9A9xhI8ZzQQxhx8%2BSvSoEFE8hPuwUHpJCMarWbPSnDxoGSYZVbudxmwdk1OOJhXBuNYQREN3qkl0P8AI8lY%2BNggjUhM7ITQ0iOftXfFdoEHL5%2BSvlzE%2BjBUL1JEv1zHj%2B9BPqgQVQX0JpGvO%2FEsjPkxbXkO%2FZlWflWrAPf7TusPXGXaIjQKM9z3FeZJD9hG%2FQV6IlGI1W%2FAfV5Wc2TbQCUREde4uYwIYAJL21Z5kI5SMErmGe6SU7MdzBZ4FLCpkeZxXGzwaNzMlUFXibMcT6xvPYK082NhUvd2p33XVkoFWRjF7Quy1Ar6U96K%2BN3dsBkjtIBouKttKfFcwrMzlyBHrjYJwdMOyO%2BMMGOqUBnaVoE5va39R9iVY7an5R%2ByqkZX6jimnFuGgItPneac5zwDOS7cfga1Nwo6IqLwwje0kwRc4nXQDwxK94G6CAdMieJj8VHmzdihj4J2yBz9XNNheWnqwLvzt6gK2CFyHaYnIbV9eKy2JM5ztOa%2Fk0IrZy0Vx9WMagiTJ%2Fv91yHKeIWmZro26tlOO5hfBbJZ%2BtOIDQ3PqLDrwp7x4uJbistZ9V625p&X-Amz-Signature=34cff707d7322e2f24734db66edd13f124ff654f8f57378c7341e8dd59c34f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBWVN2E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5V6RIdbKXur4KaYFTlK9QkZHpk9zihvY5U44ULyM1tAIgH%2FfpocKNcSvM16K97GkEMemgf6RoJuZ%2FcG%2BqAAuvTv4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAofSLbvTw03Uv1AircA35UAfftMNlnV3kQENGndUOv8kF45clQJSRobCbeBrgoMm2DhQUwHt0qenV3j25pbbS4Oo%2BTWsWUMAetjLjoTnYPJMwiitKCbEVfxyIsrQvabxbhz7OVadzhuXtsDZ6HbNApNsV8y8fQx%2FXmMWR5E1ymWLO99Gux11qNPO9khJO58VeDLmAnE50CUSxkDmDm4QhJ3Gds7s2z36nRnhANEgl9YFasY9llLEKpY7rITtq4zRdjYwhEVhUx0R%2Fugw6Pu0kgYcLjwEHlmG5AGRHWZZTRo7YlWsRpASU6cWWJatvBHiRTwSwvSpkVLIDMk%2BP3CTc5YdQjUmWaX3u5MwZLtQsySHVUYbrt7y%2FZcNULwAGBlZWAv%2B0mu1TMawYTrAuR8ZEOEPAeMX%2F77UbXuqvL%2FJEuKNeqW3OarlD5CY%2BV4SMv2X3CI8C54nLGR4IzQ2ozVgq8X%2FQBwFr8AWtJDwmhBUMUw7K%2B%2FG7mt9FztvryZI832Sl4s4lVlNEw8C7lCFiK98lKm%2ByY3nULprJPal1JjHTnIBGMyuoJmqQh1BS694J0UXFVEwDKcBJ5iY5DjYpZhmgIWnLt9zqIUmIdfQXkKQQpBr3NwISGXHTaEnXHHbMe%2B9u94WaW%2F6kFSWh1MIaO%2BMMGOqUBK%2BPKf0Rx4S5LCMPhJ5lFAPWHKeRV67nRB5RZaSktVcAQT8Uecpk0M14Dr9E8vSQgbtwVcVvaTd8kr5y581bK%2FEUZkP68AMjFxz6%2Fqpb%2BUrzfc1G7rvdVfO8LpiBRBy1Q7uxHV%2BWsZFl2TlttBcVngaKw44Q1taZyUEZoz%2BzSRVGU4AaNslrB9BueQIKtNgyiYwyF5fmq7ONMca8wT4IU5SuWWPnv&X-Amz-Signature=e71db454a362b189ee467d8ff254857b551727984921b739763807c80a0299eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
