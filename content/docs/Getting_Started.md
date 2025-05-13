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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VO34MT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC70bfWbiESq9%2ByFDgL7bLwx9CHbM5J%2B%2BjLZOC92asHPAiEAzQzG8X9HONAO4f2sxxIn0XrMI9Xj4M80OVwhTL%2Fhb%2B0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfudsaHj73r9fYrBCrcAyIj7MaqLE0pvXOQ7LK6Dv85wmOcqKrrVSaHM8O%2B4Mp9IJj%2BrQz7sq%2F2vszMNMOIXu3LIZr%2BAOhpB83Thar%2Bx8RYEg0M4OmE9m5VAegkqjwKS2LuaHVJPWSoBWhh6Y88O4JeZ1%2BJI1ZoqVrQT9ajWuPiLuAOvhvIHLPooFJyh%2BrpEHRrq%2BkpteB1XIx8gUodmLB16KRYM3%2BWsbm5fbL5YKPrqt1Cpi1L9QPsM8ZrNQkLvm8Sy%2BI0ZmW1YEGyhqL0OB6sI9Fj4WBnAZO%2FDP5uXNSuODmR0A1f4N6HPHCI9UUYVdcuZHNverMjDNN4mFoeXeoBL7vyIevZymIeVRcqwNCLmecjWT5zQpGTm53CJTxC2J4%2BG1M8UcPX78UIHi5iHlM%2BS8HU3Cw0SOqqY%2B7assmSaDIvlUsryUYXPIZVeOubX1T6mPTR%2FyD%2BwmI5Tbtqr2tu0BD5n3QUsI1uqappZSRVR5b4TuDgdzQyr%2FNq%2FOvNvGVr0S8ht6MmgNfGlzAF6L7XjpfFaKKh2P0Et2sfd8au7Cvomb97APCPbaaRO5vET5c7yT6durrI7BnIDJVRRRaPnToFNjdw11zXv0neiDBGKYNuXFY9IsIrnyHQw9RKfzVWp5QH6HQQ%2FDRLMNPHisEGOqUB0y8Ah0V%2BYMLrept44yDYhFCaNa9ROsSiaGHlap%2BgRdwEREAiPFCFj2n3Lz6K3FpeArCVQEZ8KKXVWGUbrRnf3PycudbkqK9RjwSmL6ESD1qePKeTjvfIBYdglgw2HHEyiaMJNWaW%2B1nXwy5%2Bni%2FlcWxGjmWaZwV%2FADD509XWyN1Pk9E%2FjY8VPa2bgIjjA0PPlIdcI2%2BA8w0nXkjpd8dcw3N1bSMY&X-Amz-Signature=af45e7e0ec52a2c5dad069e7b3a8156b0b560bdb134a84c2aefc129b6200f3db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VO34MT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC70bfWbiESq9%2ByFDgL7bLwx9CHbM5J%2B%2BjLZOC92asHPAiEAzQzG8X9HONAO4f2sxxIn0XrMI9Xj4M80OVwhTL%2Fhb%2B0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfudsaHj73r9fYrBCrcAyIj7MaqLE0pvXOQ7LK6Dv85wmOcqKrrVSaHM8O%2B4Mp9IJj%2BrQz7sq%2F2vszMNMOIXu3LIZr%2BAOhpB83Thar%2Bx8RYEg0M4OmE9m5VAegkqjwKS2LuaHVJPWSoBWhh6Y88O4JeZ1%2BJI1ZoqVrQT9ajWuPiLuAOvhvIHLPooFJyh%2BrpEHRrq%2BkpteB1XIx8gUodmLB16KRYM3%2BWsbm5fbL5YKPrqt1Cpi1L9QPsM8ZrNQkLvm8Sy%2BI0ZmW1YEGyhqL0OB6sI9Fj4WBnAZO%2FDP5uXNSuODmR0A1f4N6HPHCI9UUYVdcuZHNverMjDNN4mFoeXeoBL7vyIevZymIeVRcqwNCLmecjWT5zQpGTm53CJTxC2J4%2BG1M8UcPX78UIHi5iHlM%2BS8HU3Cw0SOqqY%2B7assmSaDIvlUsryUYXPIZVeOubX1T6mPTR%2FyD%2BwmI5Tbtqr2tu0BD5n3QUsI1uqappZSRVR5b4TuDgdzQyr%2FNq%2FOvNvGVr0S8ht6MmgNfGlzAF6L7XjpfFaKKh2P0Et2sfd8au7Cvomb97APCPbaaRO5vET5c7yT6durrI7BnIDJVRRRaPnToFNjdw11zXv0neiDBGKYNuXFY9IsIrnyHQw9RKfzVWp5QH6HQQ%2FDRLMNPHisEGOqUB0y8Ah0V%2BYMLrept44yDYhFCaNa9ROsSiaGHlap%2BgRdwEREAiPFCFj2n3Lz6K3FpeArCVQEZ8KKXVWGUbrRnf3PycudbkqK9RjwSmL6ESD1qePKeTjvfIBYdglgw2HHEyiaMJNWaW%2B1nXwy5%2Bni%2FlcWxGjmWaZwV%2FADD509XWyN1Pk9E%2FjY8VPa2bgIjjA0PPlIdcI2%2BA8w0nXkjpd8dcw3N1bSMY&X-Amz-Signature=fda697825bae02b7825cabd6621ab0b35199097cd3c071691bd878abda9c27a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VO34MT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC70bfWbiESq9%2ByFDgL7bLwx9CHbM5J%2B%2BjLZOC92asHPAiEAzQzG8X9HONAO4f2sxxIn0XrMI9Xj4M80OVwhTL%2Fhb%2B0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfudsaHj73r9fYrBCrcAyIj7MaqLE0pvXOQ7LK6Dv85wmOcqKrrVSaHM8O%2B4Mp9IJj%2BrQz7sq%2F2vszMNMOIXu3LIZr%2BAOhpB83Thar%2Bx8RYEg0M4OmE9m5VAegkqjwKS2LuaHVJPWSoBWhh6Y88O4JeZ1%2BJI1ZoqVrQT9ajWuPiLuAOvhvIHLPooFJyh%2BrpEHRrq%2BkpteB1XIx8gUodmLB16KRYM3%2BWsbm5fbL5YKPrqt1Cpi1L9QPsM8ZrNQkLvm8Sy%2BI0ZmW1YEGyhqL0OB6sI9Fj4WBnAZO%2FDP5uXNSuODmR0A1f4N6HPHCI9UUYVdcuZHNverMjDNN4mFoeXeoBL7vyIevZymIeVRcqwNCLmecjWT5zQpGTm53CJTxC2J4%2BG1M8UcPX78UIHi5iHlM%2BS8HU3Cw0SOqqY%2B7assmSaDIvlUsryUYXPIZVeOubX1T6mPTR%2FyD%2BwmI5Tbtqr2tu0BD5n3QUsI1uqappZSRVR5b4TuDgdzQyr%2FNq%2FOvNvGVr0S8ht6MmgNfGlzAF6L7XjpfFaKKh2P0Et2sfd8au7Cvomb97APCPbaaRO5vET5c7yT6durrI7BnIDJVRRRaPnToFNjdw11zXv0neiDBGKYNuXFY9IsIrnyHQw9RKfzVWp5QH6HQQ%2FDRLMNPHisEGOqUB0y8Ah0V%2BYMLrept44yDYhFCaNa9ROsSiaGHlap%2BgRdwEREAiPFCFj2n3Lz6K3FpeArCVQEZ8KKXVWGUbrRnf3PycudbkqK9RjwSmL6ESD1qePKeTjvfIBYdglgw2HHEyiaMJNWaW%2B1nXwy5%2Bni%2FlcWxGjmWaZwV%2FADD509XWyN1Pk9E%2FjY8VPa2bgIjjA0PPlIdcI2%2BA8w0nXkjpd8dcw3N1bSMY&X-Amz-Signature=05f0b77a54701d171ad530a7819f26e03eb65956dd63c2e0fec36739afd74b83&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUQKF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH0491hdIiLvbe81fwPc%2BiMoyzfRh7EA7ysT07doNWZfAiEA5hZHd%2F3oE0SJXhi0pSV3w9ilQQxW4gMPrDok%2FIz6mP8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZuqbHKY%2B1qdoNOwCrcA7NSekRUrrFxt3%2BAHbBI6KZ3XCS7JAdR6GBZj8bqSpg5G0cfZYlsHR%2FYUIrG%2BsS9za0LunmlmzooWI0nZuf1kkCV75CvNsYBN4nrJJ%2Fj4onPvnGVqk2Lm0hsiorHlHLnRtEu%2Fb0Atrxi6XXTheh8n6TVeeSyeGmM%2BnD3g9qRTP3qP9G74urnEGziiheQUqh3el55btbXKaBSTHwH5DvFSSMSR4SnvoupQycrfcnatxdeDhS29S9%2BYe24pFkdpSuFX4h92tC%2BbUQk2Nm2NGlbEOKtzmUUlo0r3jtVrv%2BcRmoGIhaqOqKDx6WBQLbgaXWIiTu4xRb1kizxW3Vyz7iOYa4rpwiiGaiWdpT80%2FGmWfWrSnqrzl2dyjIhlNvDjRwl4Q1QP2AkfmLfYAjNEoDs431JDH6qgGMCCejQQ374gnZiGuSG4MC7mmWtfSGnoG4ev4HAwHeZ2QUEAMHwYoF4av%2BDCtefHXNvZcA1sY%2FF0CzarL6zcWDj4XNC7dCgUjJPAOzMJALruIE4AMW567o9aI8uwQPiBzfCSunBqZ4IeGzeIr%2BR5LJGtk2m1Th%2BWquPj27jrjZvRVPLWuKHiGZaZ5oUGqphlQEefEShq82oV9i%2BgJNtCy%2FZ%2BTmXkAPbMK%2FIisEGOqUBZ1vLcpSfSBT193BhcNjI7H3nP1tei9Bes1%2FULwXp6SAST0W7EfcEqGXenBp4GZJ3kw44G6UGZsPosmGb13gXkruSgVWDWPmt8FfhsI%2Bofl0cNBbWNIV6%2BRlEmnHh9f80QcVPjWwmYTStnZilPoAu8V5d1A5ZBtjX5AasryZkJmdzS64o6wv1mqTvxFQ8yFtiQPxfHe%2FO%2F2D9zXC1wBcrDr8a8zvn&X-Amz-Signature=4f07a4ebd2de8b101cb8fc3c6ac68a51699b39e09640aec478274a0063bb62a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVBG7D5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEJDVqn0F%2FR%2FTvbRGQ%2Bvf20SqefGPE7MaPpP0lcy9egKAiA2dawUfl9k1suWfJh0GoXTSfVhYpwBvSpE%2B53JseSrnyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEEnPPzYnVL8BuL5%2BKtwDSHGNL7SC7PjMjeM24rNX4mRbjFRDQcotZRHoMVqOeOjdJBmufnLDuhya9RwBiYrP2s%2FpL59Gh1kcnn2z%2FQLc38RyuliAOIHtqSW53b%2BCjjD8ddE%2FArA4SFbUDD2%2FcRS9%2FovZA1q9p%2BUSZwO9M0GOiB69K4KbZ8Hmls9uHpVjvpUFcf%2FU89RAnzWvKZu%2BxMLivsILuOuaZ1wTfHBDuH5u1uNrqnFP9DYfp6DDVxXnJ8ojixd6ftpm3Y4%2BGgeR7GtmhS6OYfEd50tZZwrD1gBmvh0lGUDNwuD12nRDdZtzxLy24Hvq%2FDYn1RRD2XztKhjseMCqD%2FqdDZ79UxgmKqcaWqz0x%2FwSOEvqZPxFF7yzJDsrH6jVEYg32gHgVIFSgv3R8isUqHqWS1xm1Z7krB6BgteDs6azvOHD1iHHsyI%2BoD9VqZGanv6YnniA7luyzFXzdrUhv%2FLByn1rVKN%2BBDv8DIrgnbe43jDHd94iun%2FE9OE2uCUDfT%2FAJYfthAisGArJovZgVkG81u8kUaYgQPc9e1tzCAFFvDBDUCsPImKnX%2Fi7jT4ymT%2FHrDSvs7cC3gIPVh%2BHsB9Te8Ds6Oq2G0mWps5%2B5wN3JCB6VRKzlqVBVH9EWmF4h560qwNHstsw9caKwQY6pgF9H4UYgIkFhxQeyleO2%2BUTnTd3z6GKprc2%2B3zbXOzYZYbF1iIXdTPLTmuKOLbC4LWtVob%2F9xwpkboPOwdEK%2FrT2Na0%2FrAbBXDtIDCTlbgSX4zGPFGOWc2PPvtlxkZQM91ueOERrtYbTQ%2FQT%2FtIxOJJUwo2dwmH%2FcFJshVoSMzEjpvgVO6RVwGDjCITZkInAS72fZ6K%2FSdoe0Q4Uvl7gdHAoGizHUV9&X-Amz-Signature=713a5e359bc56036a5942913fdc344ff88f0fc7374a57d84cf812f60225eec14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VO34MT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC70bfWbiESq9%2ByFDgL7bLwx9CHbM5J%2B%2BjLZOC92asHPAiEAzQzG8X9HONAO4f2sxxIn0XrMI9Xj4M80OVwhTL%2Fhb%2B0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfudsaHj73r9fYrBCrcAyIj7MaqLE0pvXOQ7LK6Dv85wmOcqKrrVSaHM8O%2B4Mp9IJj%2BrQz7sq%2F2vszMNMOIXu3LIZr%2BAOhpB83Thar%2Bx8RYEg0M4OmE9m5VAegkqjwKS2LuaHVJPWSoBWhh6Y88O4JeZ1%2BJI1ZoqVrQT9ajWuPiLuAOvhvIHLPooFJyh%2BrpEHRrq%2BkpteB1XIx8gUodmLB16KRYM3%2BWsbm5fbL5YKPrqt1Cpi1L9QPsM8ZrNQkLvm8Sy%2BI0ZmW1YEGyhqL0OB6sI9Fj4WBnAZO%2FDP5uXNSuODmR0A1f4N6HPHCI9UUYVdcuZHNverMjDNN4mFoeXeoBL7vyIevZymIeVRcqwNCLmecjWT5zQpGTm53CJTxC2J4%2BG1M8UcPX78UIHi5iHlM%2BS8HU3Cw0SOqqY%2B7assmSaDIvlUsryUYXPIZVeOubX1T6mPTR%2FyD%2BwmI5Tbtqr2tu0BD5n3QUsI1uqappZSRVR5b4TuDgdzQyr%2FNq%2FOvNvGVr0S8ht6MmgNfGlzAF6L7XjpfFaKKh2P0Et2sfd8au7Cvomb97APCPbaaRO5vET5c7yT6durrI7BnIDJVRRRaPnToFNjdw11zXv0neiDBGKYNuXFY9IsIrnyHQw9RKfzVWp5QH6HQQ%2FDRLMNPHisEGOqUB0y8Ah0V%2BYMLrept44yDYhFCaNa9ROsSiaGHlap%2BgRdwEREAiPFCFj2n3Lz6K3FpeArCVQEZ8KKXVWGUbrRnf3PycudbkqK9RjwSmL6ESD1qePKeTjvfIBYdglgw2HHEyiaMJNWaW%2B1nXwy5%2Bni%2FlcWxGjmWaZwV%2FADD509XWyN1Pk9E%2FjY8VPa2bgIjjA0PPlIdcI2%2BA8w0nXkjpd8dcw3N1bSMY&X-Amz-Signature=cc054b56a8b1a63272a93845090c21a13e2f2c44ea11fe9b7f003b5b8918e889&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
