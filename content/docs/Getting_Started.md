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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5WFKKT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDS8Ia2cw%2FGcKRisMUtVkPIrIzGeqyv%2B%2FA3qT7Y8oib4AiEA%2FY4RX6AxW%2FbqLwzKREMQrG48BH1Gh%2BfHhJ48ot0JEjcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO2TPGmn2vPto4m%2FSrcAxVlqx%2FK3wfrsp2ExAosRgn8heY13g15Ct4JTk%2BITrGFJS0%2FVjX%2BPaMlMw3zsm7nyGPstMVuNB92DqZueukyi2ZnWIBHiVeOklSPqlKKa9uU0mk83Y8AInLF1VdE%2B43FDUUuJQTTG1RA%2BziWei%2FEUQeUXPM7jIpM%2FzECtg%2F6HbGNnfK4yiSqNmy%2FHeWbguqUYVvWvJpyeVtUclAxPlAFuX%2FWV5pj4u9xI992eLne5uug6N0lfDg1%2BT%2Fgl%2FD4fKr2WljwKaAgHoq6H1HtjP7CKkxwxO7eBFC8kCHQfm28wiEabEdQ3n4ma7jb30ZmU5fpF5SUGlXAUyn5XmAsYDQdElNhwPBuIMCK4EzsZaHD1qbt7p8ODiUkEs58iG0t3GCFtyHVh3%2FYHNHvN3VQZmF5eM0CSVGMM6f6OJTToy6WyFOx%2BB%2B0hMQmbBL7jLD3n3YLaH6QwSyAOoiv5HBuUyLAk70ZcScoTyy6IMS%2FZD2%2FWWoWfDynL2sR8BHKiS%2BYl1BAoZu6qCvZjoDona3jIPmDk7ozBeS5E1CWxq%2FvJAMKCNtD%2FU%2BiIL3mLwZsPGLQrMwV9pqMe66mgExxMrAwDa4fm7txIHB6sGzkAvalY7vUfVZ6ydvmq3BmAoCt7jlNMInl08AGOqUBHWIuMWxfLh01KhvK0dyus4OL0ed%2BvGRCpIjRi5u2tb3r2vMud7RIbOf8LDNERK16TQyY7wKgodXj2h7lre4UnjW9jedS5v9uaFC6Fv%2F7Glq1ryzWt2lA9pHlVbrRVmDQ1V1ZaI2fxAJgQE7yQn%2FHNrbmidP6Himjv%2Brf0Hhz3qQM4TdLoGPadcSEbb%2B2mSgXRaAbYrzziN0702mDEvx3gWB8JSqS&X-Amz-Signature=c39e5107f48358b7964350617af908b2385f12f95821fcfafcb26add87c430ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5WFKKT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDS8Ia2cw%2FGcKRisMUtVkPIrIzGeqyv%2B%2FA3qT7Y8oib4AiEA%2FY4RX6AxW%2FbqLwzKREMQrG48BH1Gh%2BfHhJ48ot0JEjcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO2TPGmn2vPto4m%2FSrcAxVlqx%2FK3wfrsp2ExAosRgn8heY13g15Ct4JTk%2BITrGFJS0%2FVjX%2BPaMlMw3zsm7nyGPstMVuNB92DqZueukyi2ZnWIBHiVeOklSPqlKKa9uU0mk83Y8AInLF1VdE%2B43FDUUuJQTTG1RA%2BziWei%2FEUQeUXPM7jIpM%2FzECtg%2F6HbGNnfK4yiSqNmy%2FHeWbguqUYVvWvJpyeVtUclAxPlAFuX%2FWV5pj4u9xI992eLne5uug6N0lfDg1%2BT%2Fgl%2FD4fKr2WljwKaAgHoq6H1HtjP7CKkxwxO7eBFC8kCHQfm28wiEabEdQ3n4ma7jb30ZmU5fpF5SUGlXAUyn5XmAsYDQdElNhwPBuIMCK4EzsZaHD1qbt7p8ODiUkEs58iG0t3GCFtyHVh3%2FYHNHvN3VQZmF5eM0CSVGMM6f6OJTToy6WyFOx%2BB%2B0hMQmbBL7jLD3n3YLaH6QwSyAOoiv5HBuUyLAk70ZcScoTyy6IMS%2FZD2%2FWWoWfDynL2sR8BHKiS%2BYl1BAoZu6qCvZjoDona3jIPmDk7ozBeS5E1CWxq%2FvJAMKCNtD%2FU%2BiIL3mLwZsPGLQrMwV9pqMe66mgExxMrAwDa4fm7txIHB6sGzkAvalY7vUfVZ6ydvmq3BmAoCt7jlNMInl08AGOqUBHWIuMWxfLh01KhvK0dyus4OL0ed%2BvGRCpIjRi5u2tb3r2vMud7RIbOf8LDNERK16TQyY7wKgodXj2h7lre4UnjW9jedS5v9uaFC6Fv%2F7Glq1ryzWt2lA9pHlVbrRVmDQ1V1ZaI2fxAJgQE7yQn%2FHNrbmidP6Himjv%2Brf0Hhz3qQM4TdLoGPadcSEbb%2B2mSgXRaAbYrzziN0702mDEvx3gWB8JSqS&X-Amz-Signature=090e1cdbac420a4b2c323ac422176df382d417a9e10677e5c2ed3cf65201bd31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5WFKKT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDS8Ia2cw%2FGcKRisMUtVkPIrIzGeqyv%2B%2FA3qT7Y8oib4AiEA%2FY4RX6AxW%2FbqLwzKREMQrG48BH1Gh%2BfHhJ48ot0JEjcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO2TPGmn2vPto4m%2FSrcAxVlqx%2FK3wfrsp2ExAosRgn8heY13g15Ct4JTk%2BITrGFJS0%2FVjX%2BPaMlMw3zsm7nyGPstMVuNB92DqZueukyi2ZnWIBHiVeOklSPqlKKa9uU0mk83Y8AInLF1VdE%2B43FDUUuJQTTG1RA%2BziWei%2FEUQeUXPM7jIpM%2FzECtg%2F6HbGNnfK4yiSqNmy%2FHeWbguqUYVvWvJpyeVtUclAxPlAFuX%2FWV5pj4u9xI992eLne5uug6N0lfDg1%2BT%2Fgl%2FD4fKr2WljwKaAgHoq6H1HtjP7CKkxwxO7eBFC8kCHQfm28wiEabEdQ3n4ma7jb30ZmU5fpF5SUGlXAUyn5XmAsYDQdElNhwPBuIMCK4EzsZaHD1qbt7p8ODiUkEs58iG0t3GCFtyHVh3%2FYHNHvN3VQZmF5eM0CSVGMM6f6OJTToy6WyFOx%2BB%2B0hMQmbBL7jLD3n3YLaH6QwSyAOoiv5HBuUyLAk70ZcScoTyy6IMS%2FZD2%2FWWoWfDynL2sR8BHKiS%2BYl1BAoZu6qCvZjoDona3jIPmDk7ozBeS5E1CWxq%2FvJAMKCNtD%2FU%2BiIL3mLwZsPGLQrMwV9pqMe66mgExxMrAwDa4fm7txIHB6sGzkAvalY7vUfVZ6ydvmq3BmAoCt7jlNMInl08AGOqUBHWIuMWxfLh01KhvK0dyus4OL0ed%2BvGRCpIjRi5u2tb3r2vMud7RIbOf8LDNERK16TQyY7wKgodXj2h7lre4UnjW9jedS5v9uaFC6Fv%2F7Glq1ryzWt2lA9pHlVbrRVmDQ1V1ZaI2fxAJgQE7yQn%2FHNrbmidP6Himjv%2Brf0Hhz3qQM4TdLoGPadcSEbb%2B2mSgXRaAbYrzziN0702mDEvx3gWB8JSqS&X-Amz-Signature=2d568d7b82cb93824c0ccbded31d65f5d2f1206684abadc4396bb0cf18ff4f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIEEAX7%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC5ZpJhaX8a3Lh7jyJ4%2BdTMSiq5vrPo9k8yVUO5yT53KwIgOlRjFjrnEW5QkfMaeINqzf7iiUjDTnzqopk2440Q2AsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdBTzFPS%2Fb8tgUGxCrcAwN6l5S6eWKfF0BmR8yGNxu5FK%2FZdmORZJ9w2TNE47PM%2FDZfeXw3jyddzM3ILa6BnXsASIVNtr%2BtYRXV%2FGKb4OVBCih8BrpsYqx8gtrpLCGWkN%2B4DbGEM2X8qAc3Ri%2BqPpVnJAbLvhEGIEez2240orN3%2FDu4VHYaTyQHuEPEPq3kWR%2B173JpIhiJnv5N67vKOJmd3wdiFKPDsXxLPd9N4VEaKkEACibBRYLGKL%2BDUY5Y7ouEuDHqx8JTPgNiGfOh8Jb6dFHoyzDMrBxHzdjPW1yW5su7SAfavz8cSfvkI6FzF3v2bL09jhJ2A1rBOQsPYbeXkOY7fpAAVF%2B%2F%2FR%2FkT2GI5XtwFTZA3KOxx6FaXX5qO7jhMhS7bxjLtikDmWIx6GiHj93YKOLdsdFKoJsE%2BZAX%2BCFaysEO2Y4Bu5mtLc0A5ZZw7tiV3J%2FJbj01acEXP3mhlqvcyekZHesVZnWuIr3g25UO0gZEl1m8iA%2FgCtMnzaNRHIwvpfYDcm2uIaMAk8o4BboQWs7gzQVcxLZC8c%2BDp7kKk183SqDnjLOXZkEMDdQgePfryVVd3a4rx89XON6H7C6q8gDeVgK%2FdAYmABOiDK2dk9Tlb3GCc9H1SqIoIrZFMA5y2ofR9ODJMInl08AGOqUBpgtzmYlgKlha2D3O4Qu5odpNlgaYnZLbUOW%2Fn4yDyIqYxBN1dgYuJE6B8h56MoJ%2FsyhgAzE6vfx58a69asZXVw2n5dEvbjiq2DQDWWysSC4Gsg471TxlNkupYbtGEF1pY1FSiJPXC3QG7xo%2FOYDQwcBUc1RW2fc3LmPUQzmPrE6P9Z%2B7adWWCay5a4Aimy77kJsB5mXyK8UiuUsGGAkhYolgsT3v&X-Amz-Signature=071486650728678b07d88d020783c22ed9c0de0f09b9bc71ed8416855ff60527&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4VC3AR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDNpX5LTkqNd0Ii%2F3ZbJDiLS2q8X7FHtnQmGuv%2FiAfVcwIhANpx9qsrks7xINfnCsnxqyDhIrPW6s7w2CQs%2FeRW5YAJKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP%2B%2BuFF72Rj1Eax3Eq3APWTMP9t3bwcoe0Vbq9WZmR61BziHns9B4kGM6%2FMBiCRIsGL%2Fq7gwnSGMko81Re3ZxDZXldfpHHANSTx2yajJA%2BidvwrcOmZm4mw%2FcFL6uk4wGjsPLHLRSVab5VSggQOm7Tt%2BXjJVzVfRB6wKo6eUvLbUUEQoxhnnNvK57IdHpIUXoahzLCq2pXfd0TzJZsVZGzEH%2BTZLLLTvDRdCCLfe%2FOasGJokEno0gszGTb1a1VGDQLbpyQbspNGErc%2B4Mf2KIpegyxYZhHvp4dF7bYWD6CeHA8V1JvYfvqhK5X7Knylj51tMRj8xf37NabiPIFwEDHZ0yZ526Rn3jR%2FIZSrQwMZTnyDNSag1XHYGZEzy4v2GU01pdR12%2FG0RewpI2N4CQk1D4m9Z2%2FAThUkstd3CF%2BtgnAntSyqpTNGT%2FYpQOs144WyCliNHgbKNSPeLJWDtwZMbCpDIBH0jhgbxz2nkCbMuqViLFAtoKDOC01eAvj%2F1OqG%2B9VctOpx7SrrUXQ2mJtzWrkz%2FMP1yr4i0cUks9LKu9Ffv16iAN9KX%2BPNv4PKYNqbM8%2BFnSvWP7niQZ7O%2BYpYSopCc0HyjWGzM47ahjkzaSUEYQQ9lamR2RUx0%2BD32x7R0%2Bzj2ZDh3BkCDDe5NPABjqkAQdlUqyhYGaqiAu4VCbRYMtJ7WIaioKe6EFSjNGefOl0%2FnXwB9U8X5RTPwGvhaBRxQcLeFyiFgOMzTxQvhakoA4I8RjA5yU%2FmhU6kLxN5TO6Mw5VPJmAcIYQgj4SCTjnPfD7mdtvzCYmHvoDYKMZ0eia48cLR2BSb3VX4E4bTcdH33XjRMYOGc7CULWJTU9arKpkUVIpDmnEcU42m9LMTea8FY09&X-Amz-Signature=6fccb1423223493670cb954e0dbaf92c8a4a25539c7d98d856125b0995aebed4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5WFKKT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDS8Ia2cw%2FGcKRisMUtVkPIrIzGeqyv%2B%2FA3qT7Y8oib4AiEA%2FY4RX6AxW%2FbqLwzKREMQrG48BH1Gh%2BfHhJ48ot0JEjcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO2TPGmn2vPto4m%2FSrcAxVlqx%2FK3wfrsp2ExAosRgn8heY13g15Ct4JTk%2BITrGFJS0%2FVjX%2BPaMlMw3zsm7nyGPstMVuNB92DqZueukyi2ZnWIBHiVeOklSPqlKKa9uU0mk83Y8AInLF1VdE%2B43FDUUuJQTTG1RA%2BziWei%2FEUQeUXPM7jIpM%2FzECtg%2F6HbGNnfK4yiSqNmy%2FHeWbguqUYVvWvJpyeVtUclAxPlAFuX%2FWV5pj4u9xI992eLne5uug6N0lfDg1%2BT%2Fgl%2FD4fKr2WljwKaAgHoq6H1HtjP7CKkxwxO7eBFC8kCHQfm28wiEabEdQ3n4ma7jb30ZmU5fpF5SUGlXAUyn5XmAsYDQdElNhwPBuIMCK4EzsZaHD1qbt7p8ODiUkEs58iG0t3GCFtyHVh3%2FYHNHvN3VQZmF5eM0CSVGMM6f6OJTToy6WyFOx%2BB%2B0hMQmbBL7jLD3n3YLaH6QwSyAOoiv5HBuUyLAk70ZcScoTyy6IMS%2FZD2%2FWWoWfDynL2sR8BHKiS%2BYl1BAoZu6qCvZjoDona3jIPmDk7ozBeS5E1CWxq%2FvJAMKCNtD%2FU%2BiIL3mLwZsPGLQrMwV9pqMe66mgExxMrAwDa4fm7txIHB6sGzkAvalY7vUfVZ6ydvmq3BmAoCt7jlNMInl08AGOqUBHWIuMWxfLh01KhvK0dyus4OL0ed%2BvGRCpIjRi5u2tb3r2vMud7RIbOf8LDNERK16TQyY7wKgodXj2h7lre4UnjW9jedS5v9uaFC6Fv%2F7Glq1ryzWt2lA9pHlVbrRVmDQ1V1ZaI2fxAJgQE7yQn%2FHNrbmidP6Himjv%2Brf0Hhz3qQM4TdLoGPadcSEbb%2B2mSgXRaAbYrzziN0702mDEvx3gWB8JSqS&X-Amz-Signature=d347c1bfa2f77145961d27f41abd2119c6463155a64be040202701fdf3970c58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
