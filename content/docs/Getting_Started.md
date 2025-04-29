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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAGVVDFD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAY2B0Rl2rQSDgDyRvoqjsvgu%2BPBmLOK7KSDuqesyJqAIgBCUHx6J2zwmwyCrvUwVjJa%2FXw%2FcCwzpBGid43YWIvGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5NDkqb755%2BvolhbSrcA2ix9gM8G9UObdNbZISHYGIoXmRTovb5vBcIp%2FAhzr4alWElw2T85GTEhCYBgBbYcW574GvcTmpPIstbfC4mgEqGDlV%2BZPS5AAroOe4hN4rbuB6SJCtMRGQ59gF5oCWncjOieCy5x8KHhy%2FMHZKcgvG0iUcRplvHwWCuOcBi5vC7Rz4VXnw4Lx2dcJ4PRwi9GB%2FuqYSVJ6qSslIMyi33mZYRW1RnFjWUogWTgY7XKtwMi6cIilTLyz%2B9l0LWenzrHMH5leD%2FttakAp2XVqPj34Nxktb73Ni%2BtdjL69Njm9dQX25VpGK7%2F7rKLsd02gJZ1cj8XqwWItfoKqMw75qkqhLy%2FC0wZ9rtDFsvLxiC9EKQCrGD2TxfFO9SXkufZ6AYmcOCSJBkMWVF1Guvr%2BjJJ7GXs9GbENaMyqdKMjWHT%2Bcs%2BWN%2FW7vAP7Oqq6NJ8dP1vyJuFyRpDlwRcPr4zGcsxm4910ba3vPCMndo7HvSCk42I0edDauCyKoHjPCMvnT062pd33kJ26gc%2BRZWpGiCnhDgynhgpEfnmHgEl5KopLnNsilHRLveUigHDPaYlHAs1rSIYSsMuzHePdYiuN%2B8Qhw6XiHXu3F6sSZMtslM8GVVUbdn8vjAyUJ9uA2dMLCkw8AGOqUBramNZWgpmgXRdi82fnFlMOuyKjkkMA4d2UJENvGSl7Uc4tBi2wv4gHjpnMmi34yOi%2BDOXLknSRAVszTXOzdGqn%2BrfBF6GJnhnu1NxZbrYIKovTy1mpxTbb2RX5hc3qyPIJWyP4HK34eOthG781ZAbq%2FwH0vILrwoOElkq6Hjee%2FFhmGa%2BebAlUBSZPfcRp2sa5LYVVXEOqNTbJmLKVxbj7jrQwWZ&X-Amz-Signature=4fa77e1b01851c5af97cb267364ee1c180d9a47e30c91372278e602e80458b62&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAGVVDFD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAY2B0Rl2rQSDgDyRvoqjsvgu%2BPBmLOK7KSDuqesyJqAIgBCUHx6J2zwmwyCrvUwVjJa%2FXw%2FcCwzpBGid43YWIvGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5NDkqb755%2BvolhbSrcA2ix9gM8G9UObdNbZISHYGIoXmRTovb5vBcIp%2FAhzr4alWElw2T85GTEhCYBgBbYcW574GvcTmpPIstbfC4mgEqGDlV%2BZPS5AAroOe4hN4rbuB6SJCtMRGQ59gF5oCWncjOieCy5x8KHhy%2FMHZKcgvG0iUcRplvHwWCuOcBi5vC7Rz4VXnw4Lx2dcJ4PRwi9GB%2FuqYSVJ6qSslIMyi33mZYRW1RnFjWUogWTgY7XKtwMi6cIilTLyz%2B9l0LWenzrHMH5leD%2FttakAp2XVqPj34Nxktb73Ni%2BtdjL69Njm9dQX25VpGK7%2F7rKLsd02gJZ1cj8XqwWItfoKqMw75qkqhLy%2FC0wZ9rtDFsvLxiC9EKQCrGD2TxfFO9SXkufZ6AYmcOCSJBkMWVF1Guvr%2BjJJ7GXs9GbENaMyqdKMjWHT%2Bcs%2BWN%2FW7vAP7Oqq6NJ8dP1vyJuFyRpDlwRcPr4zGcsxm4910ba3vPCMndo7HvSCk42I0edDauCyKoHjPCMvnT062pd33kJ26gc%2BRZWpGiCnhDgynhgpEfnmHgEl5KopLnNsilHRLveUigHDPaYlHAs1rSIYSsMuzHePdYiuN%2B8Qhw6XiHXu3F6sSZMtslM8GVVUbdn8vjAyUJ9uA2dMLCkw8AGOqUBramNZWgpmgXRdi82fnFlMOuyKjkkMA4d2UJENvGSl7Uc4tBi2wv4gHjpnMmi34yOi%2BDOXLknSRAVszTXOzdGqn%2BrfBF6GJnhnu1NxZbrYIKovTy1mpxTbb2RX5hc3qyPIJWyP4HK34eOthG781ZAbq%2FwH0vILrwoOElkq6Hjee%2FFhmGa%2BebAlUBSZPfcRp2sa5LYVVXEOqNTbJmLKVxbj7jrQwWZ&X-Amz-Signature=59ab224d0611ed1a0c98e1708ed1cc5585d24c0bd44b6d2cb79eabbde94abd35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7DB37P%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEjxL%2BndD0A89RBm7LOqsXKe%2FEKyaqDqyt1MuekR%2BzSAiEAkia%2F1lXM587OYq6RW5JCcCm3C9zH%2BUYoyKMXEwtUWKcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLSN3q25ftBkw5ulircA%2B%2F93N%2BqyC4avxCo4uDa%2FmzkuwcBrwDoHd9Kp%2B5ai5MhLG9y7%2Fl%2BQ5MUqpDmYslUmFo66aC1AOZDKfAn2F%2F73LyAnr4WRtBwIAvPB3tjSDU91E2Ge5NUkCkxcxMrk3N0cHWJzAYRffT4Pwf5n%2FlP3epa46fD1Uq58Ed2xxOxiVQcMQJ9yuL9m0Cn6AdyRtchtBhmvkmCiUXnnCc0uTcI8Zuis67jYN5My40Akf5viRSPR64YxyOa3p5%2FjnjwpivpBfjhA4wXShgHuWlq%2BJPUV7LV%2BnkdpVe21Dqmfim6eYl7DDyDi9w6npJD30LEqe%2FaK%2BvuKVlx1TC9eId48ZHK%2FRjeeEhv3KmNfJWKRrbG9UE%2B64iOS8MAAkPls3gE7LlTSCpjWn4SNqMcuhxa6s9U77EinNcFD%2FimP9iRLr7LsTbokVevfw35IerGMcCnmA4%2FuKjvatVbXB8Sob5Bmx4XAsHSk26sQVc%2B%2BTZYsY7axzaqy10f0r3lD3R4GokZdjpku9zCIu7EFyYZTFYxu9i9hhJ26TqCIIiM3R85ETV8llOXtgSXslVVmIdx8EQM6aeJQBtjaGwcrrzNUcHH1Vnj3P24WRkdaqmlDObQjoVVwUPpjuE%2BzhiIXXSNwL6rMPujw8AGOqUB%2BZEDdXymUOr9ivexIku7kP54ueZylMHHAuKIlaGJ76uh4608xgpT7LkwANI%2BttjMt%2BnxflEGAf9G5Gxp%2F23DCld8SUVVtxSGLVcLpH5RsGHXq8RPtAm0oZTEak3QhPorjGOibLsNIL7kMS28jSoE1RehOS9kQRC60N7Q6HICXiYUqeOOP02LBGISqGGnO5sK4CxPvwTJFLWcOd9UT6erLwCsQBGy&X-Amz-Signature=e0a5dbe42a5262805ea04adfba7bf687f46d3bf28c7eb5861268919de8ae99e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2BW4GQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAohdZ68mQ2dotej7X%2Byn5Wn3AOhjxqPQ4fUPLRpCwhAiEAhTx8651HJKR%2BirFZ8bc%2BJC1apEupWo7P7Y28glRQ8uUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCs6i0qoSJqViUQq7SrcA2mFRWDb%2FjrQ0uJWfT1ZrAXXIOLDAWv5i7U5LUPjrcWkwDgIZDawJwpIDY5GXP6Z9BsYP94oOBCIKbK%2B8RuDjHfxWZp8nsoZdjBVjNSsRuvCiqC8PyXkt4y8snb%2BU9BujabPSckEiVo4DMr71eAx4tRbkU6kKkWSvO4TqQJnb%2B7E%2BY7JAwCXbAk4YVFKgwlUU1NP2ZsFXBUy18qFSaAR%2FnMb9JNTn%2BydChM7LK034cLNvvGCGlx2%2F6lhS%2FEWpdCIc%2Bet8KXbJ6pvTa%2B1lAz6B%2BSTKZOkT9ylnT3%2FW8WaPygWQR%2FkfXZf6VO%2BA5Uae86oKupdZ8wf8%2F4y4Gi5Kyi7FnQqohBdl8TpsJ5FgjHS%2FG4DqUdRK9ECx20xxsJfe8xCAjL9m%2F5o1xj7RDsvOgNTvcHg1%2Bvxb0wa4sbpsvqO9yLa8WtrSbYeCj%2FhZSNInEwQ0ykVodxqYJP30Ojj%2FmoGYyDbA%2BI2VxUu%2Bvn8cdvVgR3TCqHkeDBZ6RPn3uKjlGtHINVZvwPGUB4cySVsVJfyg2c0DvmHzkCwt%2F0Ol3T5i6G%2FiwiaGoKgQCl3HeI0Vy5E8ZwozAGxmuHyhKtxTRAkfEez4NYscyGUdgWt6QgEWwDzMqo8hl%2B1XmFF6IF5MPGjw8AGOqUBVLLPLmpvnKtnAnp4QefyP98QjLwXLYjogIHjhQBwJz0w56AYbRBDnhQpdwHDrE10hy9HHdDvYpCNo7EnOOZ1rQutKIwXY8r1NnTnM3iym2gHidAdLgeA%2B%2BrNmqyz0cdsF8YYwMz5k1V5ntaG5hFZRzzYFDcIqulA2%2FNEj1tEoZT3e2H7EXz1zR06YbNVdNFA4XF0Ke%2F84ibMuMYK5LpuHAumq%2Bl6&X-Amz-Signature=07268c992bbb47f17c0ab339320035cf502f630423e2e1c525122d8e9f90167b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAGVVDFD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAY2B0Rl2rQSDgDyRvoqjsvgu%2BPBmLOK7KSDuqesyJqAIgBCUHx6J2zwmwyCrvUwVjJa%2FXw%2FcCwzpBGid43YWIvGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5NDkqb755%2BvolhbSrcA2ix9gM8G9UObdNbZISHYGIoXmRTovb5vBcIp%2FAhzr4alWElw2T85GTEhCYBgBbYcW574GvcTmpPIstbfC4mgEqGDlV%2BZPS5AAroOe4hN4rbuB6SJCtMRGQ59gF5oCWncjOieCy5x8KHhy%2FMHZKcgvG0iUcRplvHwWCuOcBi5vC7Rz4VXnw4Lx2dcJ4PRwi9GB%2FuqYSVJ6qSslIMyi33mZYRW1RnFjWUogWTgY7XKtwMi6cIilTLyz%2B9l0LWenzrHMH5leD%2FttakAp2XVqPj34Nxktb73Ni%2BtdjL69Njm9dQX25VpGK7%2F7rKLsd02gJZ1cj8XqwWItfoKqMw75qkqhLy%2FC0wZ9rtDFsvLxiC9EKQCrGD2TxfFO9SXkufZ6AYmcOCSJBkMWVF1Guvr%2BjJJ7GXs9GbENaMyqdKMjWHT%2Bcs%2BWN%2FW7vAP7Oqq6NJ8dP1vyJuFyRpDlwRcPr4zGcsxm4910ba3vPCMndo7HvSCk42I0edDauCyKoHjPCMvnT062pd33kJ26gc%2BRZWpGiCnhDgynhgpEfnmHgEl5KopLnNsilHRLveUigHDPaYlHAs1rSIYSsMuzHePdYiuN%2B8Qhw6XiHXu3F6sSZMtslM8GVVUbdn8vjAyUJ9uA2dMLCkw8AGOqUBramNZWgpmgXRdi82fnFlMOuyKjkkMA4d2UJENvGSl7Uc4tBi2wv4gHjpnMmi34yOi%2BDOXLknSRAVszTXOzdGqn%2BrfBF6GJnhnu1NxZbrYIKovTy1mpxTbb2RX5hc3qyPIJWyP4HK34eOthG781ZAbq%2FwH0vILrwoOElkq6Hjee%2FFhmGa%2BebAlUBSZPfcRp2sa5LYVVXEOqNTbJmLKVxbj7jrQwWZ&X-Amz-Signature=a23dc357ffaa5028be2de6636fc3122e19e7dffb16a20c6ce23cdac932f7fc87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
