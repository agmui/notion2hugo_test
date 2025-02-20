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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XOCWKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6dfa6q4F%2BJ5cIxqs7PKE9s0wIrsr9riteLe5gjnuLrAiEAzWmZSiWZLod7hbZb7nmkNpyODhxQCIgFgzCD9WUt9wAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5593ee5NNc582NaSrcA%2FAluCZZKg3fegZVEa6vzEGXK62wGF3uLBRCoi5P4mAC%2Fpd%2BLb5LUOzScJ6jSR5otmCP6m3wqh9YcNxIQiNhqy7J1kUqJP1ZVH5u4e%2FordqV4xxSbXDKMjzxnvDwOLNss8EQivX1OL18pgpa00yHGUiw6h1QRmPRCs8dcpsm0CJBo7Gl%2BK7ruCMu5DORSWSzNLV8REajxhnEh5hW10Ds276lwB77KfplJSbSf%2B1res7PkPJ5KMYSmfMOPG%2FN3sNqCSkr0yNX4FL4YIJqq4z5uiLlEHc5y4pdUaK%2BtWkVL8gvVEGZzHt%2BXZ0TBC0WkmM%2BXYLusSUtlyddgeXfDFYqDbzoKyQymVGTP5FjYm0Y%2FuSWqjV83ThwhfJ3u74oeJwvrGIctv39gfjC2hlBwZWAfdWD21zt2JVAYKlCTI%2BMugIqbskTNLwLDPSY58yVJ81MdXiE4JLn6BoDkYaUQkvuIKjQ2dkumbD66AAQcceJXvC%2FU4N8kdCKcVArwtwGeMsg0JlJ%2Fmvhz3YHNr115TWF5hGa7gTmSA3eBYCZc51eTpbzQo%2BVBQP4ZX1W9cbFznLXovavnUHl80I8wz1lvKlz7hwpLEpTquvIEmkPtER870NHurhHQF0c4rPbItuXMI%2BQ3L0GOqUBqvk49nzAr3FONnwh8DKdDvoS%2Bm3zUZDRVq6tiP7AG%2FkNi9togVSVma6HfLH8pYtraBV5rVZ%2Bqw%2BPoPdk7m9EOWgW%2BbubgGO4omLyqUPgUakE%2FBAjeQEryEuaNXLS5J3ykzx0xbC1SFGteGpzLbcWjKu%2Fn2bOCt0%2BIGbD3ID%2BULaKA2v6j8NEcqgf46212%2BVpRjUxyViAU09ZEnl63T1Os2GVO6q9&X-Amz-Signature=92613a7dd3b467d8d7216b4a768cf3becefa6a3f1ef583d57dbce3fb08521e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XOCWKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6dfa6q4F%2BJ5cIxqs7PKE9s0wIrsr9riteLe5gjnuLrAiEAzWmZSiWZLod7hbZb7nmkNpyODhxQCIgFgzCD9WUt9wAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5593ee5NNc582NaSrcA%2FAluCZZKg3fegZVEa6vzEGXK62wGF3uLBRCoi5P4mAC%2Fpd%2BLb5LUOzScJ6jSR5otmCP6m3wqh9YcNxIQiNhqy7J1kUqJP1ZVH5u4e%2FordqV4xxSbXDKMjzxnvDwOLNss8EQivX1OL18pgpa00yHGUiw6h1QRmPRCs8dcpsm0CJBo7Gl%2BK7ruCMu5DORSWSzNLV8REajxhnEh5hW10Ds276lwB77KfplJSbSf%2B1res7PkPJ5KMYSmfMOPG%2FN3sNqCSkr0yNX4FL4YIJqq4z5uiLlEHc5y4pdUaK%2BtWkVL8gvVEGZzHt%2BXZ0TBC0WkmM%2BXYLusSUtlyddgeXfDFYqDbzoKyQymVGTP5FjYm0Y%2FuSWqjV83ThwhfJ3u74oeJwvrGIctv39gfjC2hlBwZWAfdWD21zt2JVAYKlCTI%2BMugIqbskTNLwLDPSY58yVJ81MdXiE4JLn6BoDkYaUQkvuIKjQ2dkumbD66AAQcceJXvC%2FU4N8kdCKcVArwtwGeMsg0JlJ%2Fmvhz3YHNr115TWF5hGa7gTmSA3eBYCZc51eTpbzQo%2BVBQP4ZX1W9cbFznLXovavnUHl80I8wz1lvKlz7hwpLEpTquvIEmkPtER870NHurhHQF0c4rPbItuXMI%2BQ3L0GOqUBqvk49nzAr3FONnwh8DKdDvoS%2Bm3zUZDRVq6tiP7AG%2FkNi9togVSVma6HfLH8pYtraBV5rVZ%2Bqw%2BPoPdk7m9EOWgW%2BbubgGO4omLyqUPgUakE%2FBAjeQEryEuaNXLS5J3ykzx0xbC1SFGteGpzLbcWjKu%2Fn2bOCt0%2BIGbD3ID%2BULaKA2v6j8NEcqgf46212%2BVpRjUxyViAU09ZEnl63T1Os2GVO6q9&X-Amz-Signature=4ae74131c4cfdb8e39a089efea53385ed5e35c3de779763712bce8b05483e4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBMMKNI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5fTUBndDyRVOXhPOm5o3VefF6UNKyHfBHZ8PDFkDF3AiEAiPBhIlh14lJ3GLHnZyM4jvTz7IB6hW4p%2B7BuYC0FtksqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3IDG3EvLL8F5CNXSrcA3c9As00Vm%2FmHEWIW%2F0y5K4rbpcQ8PVuMCJ%2BnS4%2FMqDZsCGCV1BOPwXmY3GgqVtNJhIq3qCmtRzLUVblYjGw3nS0EiswaldLcyz9L0rdpn1oV3MFf%2BkhgY%2BPGSNq86zBjGx5UUn8FpLhr2pflYRxXAM7pC1UZATylMRmyuqXXgeqEgqYO%2Fnl8OMPljOcp7GSg3gERamozFtjCrHbzGr1Ai3hu3J9mRrBVjy9noJUq48cZwaNHyHoN3tZ6izIjcBefNjDTALoB8VZTP%2FF1EJR2Y7r437veRGz1%2BiX9ZOIjOIlL4E9A8pgQrB0gshvttvc48hUpdjxiS%2BGPlIlMFZWIdCxNDFxG5nShEfavi5H6AyEFMU3Zm3oj631zKHuwxl5AmlWiu4n6UGwnQHb3Hf3fGzagvUh6DBeB2VycpX4%2FAQHqYQ%2Bv4%2B2Ddj0AvO4pIgwJLSc01EhdflA1cyT%2FCKRctwlcJ3jHA8w1y95G166u%2Bcn0GX%2FCpFVzU4Yy%2Bf4zD6%2FH4LT8QrU8c53m%2BIYE4yt3wzh11XSpQGUhNoiUdKzPVoSaSmpyOArVArHB2BhG3GVDvjigqzmKiojrVysMDO5bKH447B23m0fhjrG6Q0A1zHXIbCRXSrE6udq%2BzVXMLuR3L0GOqUBz8qu6w2vPzMbGWjxjyH7FP6oKx99Ajs6SnXKqGNNPpNXXzuVXzR8EzC%2F3gv3OnZrMtKp1m6Uq41U3chgGKxDJbuuVOBbSIH%2B21TTnFGhObS%2FRfkLyjfeEY6vD5DUH3TsfgKZS%2FHaNdFhSY6w7KhhhA6dodrU%2F0eDdTl8in17Q8OtUv1HS5ZH%2FYPJHk6bOX6z0AAJp2BzTPsjV0QiLHo5OH1kwkTv&X-Amz-Signature=65336fcb37f7f08b492b71a32a4f17a7b389ed334b12c984fc0e9805afd73f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITD5VYZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNCdtCjUi1e1Rbz3q01l%2F7GmcJqTqzNKxQtyHB5tiNggIhAIi1m%2FrOSO1IDE1BsuENPolvRWsqb00fKhNDQvJ7N8cGKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPYHovPfU3IhwzA1Mq3APgSI0NMKe42pT5U3Rl%2BT22%2F8gK4mSGyDq5Lf1s6VtlRADluFdRafQZbD6USeQnxvKmwEppAK69rUixywtu8YxVY%2BuFvDnCdBO74EXn9JzVDW6sp8KLPoWJjqIwnsvGVdEhnTuSFb9g2q67Vz6s9Xgghsj4kYPahnZfi69uwdcaNXbRT9%2Bb4B0i1xOqo9wk9crpOthF69iXpKtOqglxO2lFNPpVQZfAZ8t%2BRmDRkKkFQnw6OSEG3LPf%2B9HLGev5TXU%2F6VslNA5EkwFJLz13zh4wv1GdRDJsDK3QwP1UlPPnXut2YB1foaNMgjhtU8UwZ5AzvkfKsyW1mCckfeiA7973cT89L%2B%2BqHTQcIYr%2Br5YFHUMWFOeLpqPcG7qrwxQ1Z5Onosmd99LtoqHj8qkj%2FzH4isuvIEWvajOyXCS%2FVruDKXt8EMHZ0sdjTR2iZ5eaKE%2B6iWrE3nPEDBei3Nw%2FkxY0K7lsUnBJgw389LVUkhmYqyjlBxxp5COUYAMuJuP86thZvW9dUACLTYToRdp%2BEPbdWgdRQfZkVe%2FdXmV5zvPKRuqRuKQTGp5tK317C%2FulbKqeuXYMHI%2FkxsfKSmt4lqZSFw%2BlNMSeVZPIWca3RLaM4u9DP7BkdCk3dkE44zDRkdy9BjqkAfdVnvcIXGStHrCbh9NIINPncHtWFGcoz%2Fc7wPDRY2bEMuWfCAIJJsay%2FLzD54fFCXbtHBq1b6dMYu4vr4s6u5r0jEt3iNu8I%2F9HBdJ7zM1eoaxV6YVct3modJBTL%2FiFsSWvnJ1%2FVbnp3kAEPi1n9TIWP8mg4cjnpsOy%2Fj%2B1veKeXhiEh8qGUQznFGInki1t3mRcqN0Yrbxn5EekypE7ekCQynCY&X-Amz-Signature=5923e7c6e1a3bb00967ebccab8da7991dfd4840b250a3fcf7af1d28a8ac5cd50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XOCWKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6dfa6q4F%2BJ5cIxqs7PKE9s0wIrsr9riteLe5gjnuLrAiEAzWmZSiWZLod7hbZb7nmkNpyODhxQCIgFgzCD9WUt9wAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5593ee5NNc582NaSrcA%2FAluCZZKg3fegZVEa6vzEGXK62wGF3uLBRCoi5P4mAC%2Fpd%2BLb5LUOzScJ6jSR5otmCP6m3wqh9YcNxIQiNhqy7J1kUqJP1ZVH5u4e%2FordqV4xxSbXDKMjzxnvDwOLNss8EQivX1OL18pgpa00yHGUiw6h1QRmPRCs8dcpsm0CJBo7Gl%2BK7ruCMu5DORSWSzNLV8REajxhnEh5hW10Ds276lwB77KfplJSbSf%2B1res7PkPJ5KMYSmfMOPG%2FN3sNqCSkr0yNX4FL4YIJqq4z5uiLlEHc5y4pdUaK%2BtWkVL8gvVEGZzHt%2BXZ0TBC0WkmM%2BXYLusSUtlyddgeXfDFYqDbzoKyQymVGTP5FjYm0Y%2FuSWqjV83ThwhfJ3u74oeJwvrGIctv39gfjC2hlBwZWAfdWD21zt2JVAYKlCTI%2BMugIqbskTNLwLDPSY58yVJ81MdXiE4JLn6BoDkYaUQkvuIKjQ2dkumbD66AAQcceJXvC%2FU4N8kdCKcVArwtwGeMsg0JlJ%2Fmvhz3YHNr115TWF5hGa7gTmSA3eBYCZc51eTpbzQo%2BVBQP4ZX1W9cbFznLXovavnUHl80I8wz1lvKlz7hwpLEpTquvIEmkPtER870NHurhHQF0c4rPbItuXMI%2BQ3L0GOqUBqvk49nzAr3FONnwh8DKdDvoS%2Bm3zUZDRVq6tiP7AG%2FkNi9togVSVma6HfLH8pYtraBV5rVZ%2Bqw%2BPoPdk7m9EOWgW%2BbubgGO4omLyqUPgUakE%2FBAjeQEryEuaNXLS5J3ykzx0xbC1SFGteGpzLbcWjKu%2Fn2bOCt0%2BIGbD3ID%2BULaKA2v6j8NEcqgf46212%2BVpRjUxyViAU09ZEnl63T1Os2GVO6q9&X-Amz-Signature=84324027a2be1ed05163991c67d6270af330b35f508c4e109e639975944835f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
