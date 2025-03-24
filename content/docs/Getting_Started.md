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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=3d08efe95f535a510eea5aecf8965e06ebc84acbd5fd1810369852f565d3258d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=d398274e18004e541de9100972f63700d81d3221cc12f8a219e31ee4cd331c44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5EFYBB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWveUMDZqrkkb438DjW4gYT9aQDh2A2JHo1V41baAHGwIgA8ZhMJpkPRbd4sSlb3jzukYjaleEKd2C4Go9Fp%2B4%2B%2FAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlSUSFF3Yi5G2ZDJSrcA0WFxlbWKT2kkCCfgvMV9qcEXsb%2FO0dpbqlp1ZMi4o9LtawQOx5yPKCypMxQxvc2WagTQ6Tlvnjxp4ThpfDUFdLLjbehdaSg9%2BNa5RPjUNmhONlDT9GqEdDOnYNPAPTLqLHQXyAxM5CdjNIbkDfHIxGtUv5ijUa%2Bx7L%2BlzSoyplKrQ1vG8Gor8o9MkY4O6NK37y2d0reVL1NV%2FKt3IihvmMN7hq4vbPDviF7X3qUngLuv%2Bscdpn9%2FLtoIW1zPf1%2FbDMv0gLLORLb7lz%2BYG2f%2Bz%2FM4mXr%2FnPqBIE9PEQOuqQ0WPRq9G%2FPR8F0lpofVNkdgIgOMomeuJbaniJc%2FI%2Bd57YWLhADEQDSugp15LCHPVuZi0hKarfR3pUdKUrNWil2hJuICPUHcP2inNh85SDPY1zJMaJC6hVA8Oddfo0I7Qk0M1TMq%2BQBo1WL1APLAqjF7vWoFDCDwuUa8au1luYyS7kj2BFCTZVcBqAjEW4xBddK7yGVC%2B61dwlJoepBHn%2BLtTZzJiHorBLc4z6sV%2FDhGwvgGcVuVS6E%2B0N5zb0RivjOa7FRR8zCrvKIEdL05cC6%2FS4AM6YCWp%2FMX%2FbndQ8SE3rXh%2F5pBjSA2vh2mylYTRyuy%2BSWYgr8kHwzr4agMLixh78GOqUBAdK%2BKvgnxjQn8VF5ng2H2i7UJoAOL8EaT0kuT5KahCftLNlbWRCrduOfGqUdgzqBdOsczKj9peghHnVdZgNgX2uh80pr6O0ehAoNrEMnPh9ZBtztzm%2BdRnqPa9pDbbdoNTLfF%2FQk%2BY%2BGiORAqYu0RljzgCZXF4xzSEhfQbf3Lxuzy3e%2BYD4vUTk0uxudBkJUE7o8PIhUpNJQX0pTqvI1jpK6g%2Fg5&X-Amz-Signature=948eed81e8268c887213dd33e1e195b74892993a8bf0942bfa96d42aa11ae620&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWGYWRZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZAS9gK%2FzQ%2F5kQ0vo0v3u73o4084vH3Qk3F7BjK%2BMlwIhAPsAYsozH5rmmZGBcMnM7%2BRe0F3xtLPgJjbSfsmW3fy0KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FrD08%2Bi863EdPbtUq3AO6kpQNAv8pTM%2BeXEWvJ%2FAVUOv0nvhGYLlmzclXpW05MeoIuAsglp%2FYQ99bgSgksDsm5J75d0pVG7d0EbuURhelgvIuAh3Tqd%2Fc2dzrnsV3StDjeJCkJAeCUFDDFcLCQLMXEOkOJNvT1yHCqpXn0HNMVhmT2wVGPPdv8IuUyr6%2BRkQB8W3qDpcwY6yv1eBRYRZ%2BrvTfPlfSGA0vZ3OwVfBHOb8%2BZFeI%2FiEX7ULPd%2BLkF6Re325yskvWxqv9KWz6Bb%2Fn5DlfslGIzd4RtDF9OIhuFAUjbZfZoq85xV1M5ULvCpTUFhVS2YmLLC0c%2BvmjNZHHSceBWNaGEtjP%2FZ1l%2FU7FC3OW3%2FzzX2BqLr3lB71w4XxWcdpR8XsvPKlt%2BXGD1QGA%2BSkx5ZkehdDXpCUluEyBkf1IkP3Mx4sxqQfiYxrDsKIcyjJU%2Bq1phT5dqq5NgXwawLT0B7aUJ6Vs3rw92MNUX7QA0nN7oa9hLpk8cpMRLY6zhC5NNVYD2nS7UO5H80Q9xENpvkfP5UoLYFP8WXIMz8wzHMVvhJATJ2eynKLiE5Fy7sbOeQYWUZRkF9rRRAZvfAK7ddwyOU64NsFWll%2BTySQksqYtQAvg%2BiRoOAMOsQQu0v9t9nGnLrQ4jjCKsoe%2FBjqkAZRiaUQMXR3UOgFzdAJD0BJY%2B753mW55KyWLEHpSbqn8ilNdUgDxRpooEWyd7WieNpEqZmHT9DfINrHa8lR1h33fksVtCrISXuCJgtfeW%2Fby5wB7OogqfS%2BFyWXLMNNVEYdUcxMvutrid55oRnxot%2BhLoE%2BEKYa1b4R6564rGu1NoxjmKKJjUvOVM%2F2TDRXNXFe1m2eS8X3BCuRwdvcOCHDJvVwS&X-Amz-Signature=9c3bc3c180165c84f00758449fd92f0efe43ca9574bb02dad3d75ade28740cec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=2cb655f73adb37ca72df536f87639379c08797f84a9c7f1439ce262a998ea4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
