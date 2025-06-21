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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3W6O6W%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJSaERbjZfktd%2FYlHXFHGj%2BbXYx9BbfwjxwgqS0XC2IAIgVlpKPYxiYX73iLsdfSE%2FpW4GYnEpgQTOcAR7EDGG3XgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiGj87aR6u4LnPDzyrcA430B3L5dxBaYkqMZHBZ%2B1jI4qn5yY4EOJi%2BZFtHzSxsFd%2Frh1882rYJZXR1DpNzvm11TRowwRtygMfgzJuCWcsV9SRwrfiFHw8EIS7E75SF4UZHnZm31MY8ILsfYzi%2BoDvtQQqR9hwi8h%2B4WRMWRDAjYPCh8Su6LSQKUnZ1vol3SVCUASRZn%2Bce%2F3WeG2jNwEqyV3O5c5pIWMB8Rkl5koa4hPE1w4AYNUlG5dFGbeXCMvbztLidtNmKQn%2F7eysqoQ0L18IdwuSnrDurMS7pWcrdewDW5dNZkaYeM279zeyde%2FBcnY5b%2BBdgfxNMG%2B5rYjLKipFA5tD98vVgqo7HD4uuBCZ8zLOnskJGIabTymoSBoa8TSXsSRFMLeQn2HzLd1kLMmSBqvkbO%2Bj7qmtmxVoswEMuMHUEhHOdn40s83QP5ZcCk8wnVHLBzWe581k7r3kesSpCZ8Q52x1OHJ3ZiJ%2FWHjRzH0swrQLusu8uo8sBxDVfl1zL5YTlyuS1Ap3zUfUlXacAu5uhUvyG2nJ3v8hbQzeXy%2BK44Nse9zcYCLJkuZuO4m%2FW8ZEIL7QzuMQrHdBHyddnceHMjuq9xKw6dMy2enpwI3tNcZsDSj8V4q14IN7GV6bGc%2FMppsF%2BMJav2MIGOqUBiemj3NiED68x%2FT4C3Rg8eWQYioLQHkeXiNndXK8d0YEDtHbhB75jk5p8CUHc7zpEPKM28agRKthfUstJhvJ1bE2emm8fSuQhlWWXDUYPRDg%2BueQUowDJ3wjxQSSwaNkC%2FoLiWJYHX8qkLOhiA3%2F7SMEBwNBrRqfuRCKRteYNrKvpY4uGIAVIEbId72d7BpOXylwZH2Oo4lG5DOl%2FgffxZqhgXbTU&X-Amz-Signature=3abe26e7299ffc4cd927c985bb38aaf5cf20e3f051bc532a3fdd5b909ffd1192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3W6O6W%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJSaERbjZfktd%2FYlHXFHGj%2BbXYx9BbfwjxwgqS0XC2IAIgVlpKPYxiYX73iLsdfSE%2FpW4GYnEpgQTOcAR7EDGG3XgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiGj87aR6u4LnPDzyrcA430B3L5dxBaYkqMZHBZ%2B1jI4qn5yY4EOJi%2BZFtHzSxsFd%2Frh1882rYJZXR1DpNzvm11TRowwRtygMfgzJuCWcsV9SRwrfiFHw8EIS7E75SF4UZHnZm31MY8ILsfYzi%2BoDvtQQqR9hwi8h%2B4WRMWRDAjYPCh8Su6LSQKUnZ1vol3SVCUASRZn%2Bce%2F3WeG2jNwEqyV3O5c5pIWMB8Rkl5koa4hPE1w4AYNUlG5dFGbeXCMvbztLidtNmKQn%2F7eysqoQ0L18IdwuSnrDurMS7pWcrdewDW5dNZkaYeM279zeyde%2FBcnY5b%2BBdgfxNMG%2B5rYjLKipFA5tD98vVgqo7HD4uuBCZ8zLOnskJGIabTymoSBoa8TSXsSRFMLeQn2HzLd1kLMmSBqvkbO%2Bj7qmtmxVoswEMuMHUEhHOdn40s83QP5ZcCk8wnVHLBzWe581k7r3kesSpCZ8Q52x1OHJ3ZiJ%2FWHjRzH0swrQLusu8uo8sBxDVfl1zL5YTlyuS1Ap3zUfUlXacAu5uhUvyG2nJ3v8hbQzeXy%2BK44Nse9zcYCLJkuZuO4m%2FW8ZEIL7QzuMQrHdBHyddnceHMjuq9xKw6dMy2enpwI3tNcZsDSj8V4q14IN7GV6bGc%2FMppsF%2BMJav2MIGOqUBiemj3NiED68x%2FT4C3Rg8eWQYioLQHkeXiNndXK8d0YEDtHbhB75jk5p8CUHc7zpEPKM28agRKthfUstJhvJ1bE2emm8fSuQhlWWXDUYPRDg%2BueQUowDJ3wjxQSSwaNkC%2FoLiWJYHX8qkLOhiA3%2F7SMEBwNBrRqfuRCKRteYNrKvpY4uGIAVIEbId72d7BpOXylwZH2Oo4lG5DOl%2FgffxZqhgXbTU&X-Amz-Signature=d05fe58eb58571d8b6d6ecbede1e14f48a235de28e2edcaa1ed1368845051841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3W6O6W%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJSaERbjZfktd%2FYlHXFHGj%2BbXYx9BbfwjxwgqS0XC2IAIgVlpKPYxiYX73iLsdfSE%2FpW4GYnEpgQTOcAR7EDGG3XgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiGj87aR6u4LnPDzyrcA430B3L5dxBaYkqMZHBZ%2B1jI4qn5yY4EOJi%2BZFtHzSxsFd%2Frh1882rYJZXR1DpNzvm11TRowwRtygMfgzJuCWcsV9SRwrfiFHw8EIS7E75SF4UZHnZm31MY8ILsfYzi%2BoDvtQQqR9hwi8h%2B4WRMWRDAjYPCh8Su6LSQKUnZ1vol3SVCUASRZn%2Bce%2F3WeG2jNwEqyV3O5c5pIWMB8Rkl5koa4hPE1w4AYNUlG5dFGbeXCMvbztLidtNmKQn%2F7eysqoQ0L18IdwuSnrDurMS7pWcrdewDW5dNZkaYeM279zeyde%2FBcnY5b%2BBdgfxNMG%2B5rYjLKipFA5tD98vVgqo7HD4uuBCZ8zLOnskJGIabTymoSBoa8TSXsSRFMLeQn2HzLd1kLMmSBqvkbO%2Bj7qmtmxVoswEMuMHUEhHOdn40s83QP5ZcCk8wnVHLBzWe581k7r3kesSpCZ8Q52x1OHJ3ZiJ%2FWHjRzH0swrQLusu8uo8sBxDVfl1zL5YTlyuS1Ap3zUfUlXacAu5uhUvyG2nJ3v8hbQzeXy%2BK44Nse9zcYCLJkuZuO4m%2FW8ZEIL7QzuMQrHdBHyddnceHMjuq9xKw6dMy2enpwI3tNcZsDSj8V4q14IN7GV6bGc%2FMppsF%2BMJav2MIGOqUBiemj3NiED68x%2FT4C3Rg8eWQYioLQHkeXiNndXK8d0YEDtHbhB75jk5p8CUHc7zpEPKM28agRKthfUstJhvJ1bE2emm8fSuQhlWWXDUYPRDg%2BueQUowDJ3wjxQSSwaNkC%2FoLiWJYHX8qkLOhiA3%2F7SMEBwNBrRqfuRCKRteYNrKvpY4uGIAVIEbId72d7BpOXylwZH2Oo4lG5DOl%2FgffxZqhgXbTU&X-Amz-Signature=2d4bf7d8fa595b498fea5a717a88f796ba236019e9260e42290cf7fb3d24dee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IU63HID%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCJVA1JlFf8LbJ5Nl5ZCEJ3kS4Rib%2Bfp5uXQUqK30E6AiBXRGTwWkNKiHai35aLB0sdMFDbX3efT4%2BzjbdntqIjySqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F8hKobGJcDSP6sakKtwDY40%2FpHWTZGz3BEQcR5pPN2g5C07U49PhtCRnmM72Ts52CfALWmcmS7u9POvp3vXV7Tz0Sh6QoN%2Fy6ZW%2FfYo3wJ7JnfEenL6rRuJDlT1uGa3aO7k%2Ffzsepf9jPv9Fg14HJDK6vWeXZA4X95z7IsuoBdeTZICEQIlkPnOaWELA5mPB2yV1MMUGALDzx12NfdUN2GJVRanUY0akrXgyMFINSSdJXC6E6NK87Bt8mvTq8xdNibwjQaCbZHmrlZ5zQ6R%2BAbWszMYHWRugPLKNUrpdZ4zy7O1LbfJPK9cfBb9t9QfL6BGKz%2BzmC6BmyHi8W9wTC9xAJlFBKv0d5uYEmwBHcUeMVdkZy2jRKJfxuynrhyppdCM2N8ocpsCLPTHoJoHU4r57aX4Pc6v9Lj11YI6dAN37DxmAPhoZlRU%2BkCxYZKgEALmWS3oPEK1S1OgEv6coU%2FZ%2FcI0t9OUSSTB7mvFKxCit5Ii%2BW9%2BnDOQVwtGnlRrhjS3Xx4WT7uevEg6feNSdKc5spjRMT8x41py8r4MoymglN8pdwvWyHHV%2BrIehfE9tAexxNlcy%2BM06gOGS5aOQS2ZAaKM1zwnqUxtHKqb%2F3C4MpAdgEujkcGZUidO5qayJr4y5%2F9J6DfRFYJgwo6%2FYwgY6pgGYOK9bExmofewjGHZMPyapK%2Fk647x5y0%2BJOO396%2F8dFoBmrR2FKpaz4ja%2B2zgLFgn49bR9v1EN4obBvKjt4j4kwI55pUolbHU6KzOJ1CPFZfIUj%2F%2Fy7%2FgQkWD7AjiZHd9SaZB6dEplm47uMh%2FeyI2EkknNToP6CT6q5xMBt%2BrjC7lwaE42eITbKlfZM%2Fg1KVVxUs%2FCSB2%2FY4dSal6rIvyPdMDPqz2s&X-Amz-Signature=c2ca36dae820b5e4d56228b47c54b80d3b46a84436fb614db0bb037be6c74e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJ3TULU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUXJdYd0ofwws1VNs98gev0zP4qJap5QzBngxPKEzphAiB7yyqYM%2FH%2BCLEE55wkVgrfARCGfpw%2F%2FEkJF9nCOujOMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJhNjii67dE1RgK%2BPKtwDOv8XS912esTqF0UI7khdsPEMwEvjSAO9MDWlvZHYyUofZ2vScA2YXdqL1cWBw15oTxQSgsBFcddkrI57isxInu5UacnchM2Cvbcl8yMYoKMg5GWpWgZ9Foglk%2BFO7sCU7nfft04mYZGTfc%2BZUiO9uHuDHqfKAwdheWVvLjmeBW%2F4AM%2BtDvp0JARp8p%2FedMgZFT7CQPHJtPFVVrDs2Mk%2BpPkmDtYqKF2vksscBPk941E%2FXFTS4Fg%2FluftV6AXENYAwskfn1Pamz%2FAmcNUh5k9SA7xIKJUzzEAhrqPSy47rjQpO%2BFoQtS6%2B3%2BnCMJ92FUXb1cwK%2B1DH1leaHEyLjYuKH1MBibEKaTOZTIVfMMTyd9PmKZv4JQPpbXjOZhUiPa%2Br9%2Fp5ZlT63lgUB%2F3lq%2FSz%2BtU71OqE4wX4htv47XWxV2dYZ%2BYlF2BaH52f%2BrSEA%2Bq7U6qAirlHgIy4aaHtAd3nxh1avHiNtFd4BfO9pQI4N35jBrGXQWki%2B7qbXVlpJ%2BCuzgFjdnphgrL0k7JWLDLlaK4GUQMBYDxebe1HYxvrm8TKMfv%2B2GdYYwCwE%2FiHVUkGuAZheT9ilekYChwZjK9GcdRxVEp%2FDc343dHPLWk6K0B4TKKj4qjKyM9Hn8wuMLYwgY6pgG0bLSCzixsoO%2F9oxtgOghkpMAJKishIbT3cqH2Qg9xTrGUdnXIj6ba7GSjcTCHCkCvzzfkCDt3v%2BJYxHk7g6lhGIt5cApZTDbFrpl1wzweXBju9vOSg9NJv0nq9UVYaA0ymoZc2UHGMDD%2BT2YLaUaZkCKblWAMcFlCEauwLdGdZUc7Ht3k%2BZMN279i%2BTfxLSUA3wvnibyJDE7t8Dih4J2it3%2FG0CFw&X-Amz-Signature=13231e4e9e7aa86e30648acf025d94e8ae8ca42928f13082fda5c417b98c66d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3W6O6W%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJSaERbjZfktd%2FYlHXFHGj%2BbXYx9BbfwjxwgqS0XC2IAIgVlpKPYxiYX73iLsdfSE%2FpW4GYnEpgQTOcAR7EDGG3XgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiGj87aR6u4LnPDzyrcA430B3L5dxBaYkqMZHBZ%2B1jI4qn5yY4EOJi%2BZFtHzSxsFd%2Frh1882rYJZXR1DpNzvm11TRowwRtygMfgzJuCWcsV9SRwrfiFHw8EIS7E75SF4UZHnZm31MY8ILsfYzi%2BoDvtQQqR9hwi8h%2B4WRMWRDAjYPCh8Su6LSQKUnZ1vol3SVCUASRZn%2Bce%2F3WeG2jNwEqyV3O5c5pIWMB8Rkl5koa4hPE1w4AYNUlG5dFGbeXCMvbztLidtNmKQn%2F7eysqoQ0L18IdwuSnrDurMS7pWcrdewDW5dNZkaYeM279zeyde%2FBcnY5b%2BBdgfxNMG%2B5rYjLKipFA5tD98vVgqo7HD4uuBCZ8zLOnskJGIabTymoSBoa8TSXsSRFMLeQn2HzLd1kLMmSBqvkbO%2Bj7qmtmxVoswEMuMHUEhHOdn40s83QP5ZcCk8wnVHLBzWe581k7r3kesSpCZ8Q52x1OHJ3ZiJ%2FWHjRzH0swrQLusu8uo8sBxDVfl1zL5YTlyuS1Ap3zUfUlXacAu5uhUvyG2nJ3v8hbQzeXy%2BK44Nse9zcYCLJkuZuO4m%2FW8ZEIL7QzuMQrHdBHyddnceHMjuq9xKw6dMy2enpwI3tNcZsDSj8V4q14IN7GV6bGc%2FMppsF%2BMJav2MIGOqUBiemj3NiED68x%2FT4C3Rg8eWQYioLQHkeXiNndXK8d0YEDtHbhB75jk5p8CUHc7zpEPKM28agRKthfUstJhvJ1bE2emm8fSuQhlWWXDUYPRDg%2BueQUowDJ3wjxQSSwaNkC%2FoLiWJYHX8qkLOhiA3%2F7SMEBwNBrRqfuRCKRteYNrKvpY4uGIAVIEbId72d7BpOXylwZH2Oo4lG5DOl%2FgffxZqhgXbTU&X-Amz-Signature=97b661c4a31ac5acf3e812e12fc8a72e17a6961b3289cf52d59f6badbad73ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
