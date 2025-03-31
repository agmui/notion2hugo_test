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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSFE3UM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCNl3VBbufP6jUIXVNInG%2BByUI44BsjoQapx%2FDlf%2BryogIhAJm5ei9huN1Ji274oCbIYSWuCgnJWsRJZPQWS79jso0YKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoiCjliyTT%2Bo6Mwlgq3AOzo%2FzOtcElubE9FIbVQARFoT%2FhgjMKy3Dzctkd9PQy%2Fc3yRcAoqk650pllIxmE6xYrFqRa0n9pw6nv8Cdypy2Bf1woaHzIVNkyvctYyZgqWpFTKCF9ReSx%2BNFaXt9zsFNpZDb%2Ffs4nVwClJbSLcEhZ%2FTweB25lD88als87Zq2y7AZFdCE9uzL34ti4NzLb11BWS3TYM6JyiBRXPL2e5Ir0bQlcm4ag4tgM4KwcoOHg5TtevpUO%2FaqduqB%2F57o33ygeJZdM5I6cE1es6ZCCR2mJ48xEpjwiK34XGF9nSNbQ%2FcZSydOemEDNqgEXKsmQpKfi2eVTrn5MORdqzn7ZPJFYYFdiVzIKg78WPTeTohUPnrKJAauQ14zvNSKEqOLntS8Opi3CBmpLtICzoXvZLxA7aZoBBUM0mUkhLcHMo51DPQ%2FXA%2F5u96Hjj0V9erNayWp8etEprWobOnS6bQCN14VAxuAmE5A3K%2FZg6wfROqbhnVSes%2Bw327yffIa9ugxhM9yen0QPEtwHJeRV0HrTD1WY4Vu1yqQTI%2BAk26MwljXUfH9gWkSOlLF8BVqYoBgT35Y3hvbqRHFhbEtmKbhGrV%2BjzyWod%2B8DIyG%2FbI%2B7wFOI81xOpUtJFlBLB0nNkzC5vKe%2FBjqkAWwzfe9%2FkKPeSVLc0%2FoL%2F2TCa5T%2Bvc5QlJ%2FN3g%2BQxETK7CmXcnOgWN1q5IeQS4Z4MDJJwAyLu4GFgXDqJB65q48c6a8yxakjEytS1V7seb3eh4wGQ5SQf5DVM2Cg8i0W2HDG64iNqhpeuiO%2BwRDazHHuddh4s3PQMUP2Xmmuluu9gJQb50Zo6Oq58ebaLkgeftGdxxLn8nn6crIXWZwVLCMmRaVi&X-Amz-Signature=197c5a9d3252e7b995a1da0e40b550f0e9036a6cdca304eb6f5a0f6d1225de36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSFE3UM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCNl3VBbufP6jUIXVNInG%2BByUI44BsjoQapx%2FDlf%2BryogIhAJm5ei9huN1Ji274oCbIYSWuCgnJWsRJZPQWS79jso0YKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoiCjliyTT%2Bo6Mwlgq3AOzo%2FzOtcElubE9FIbVQARFoT%2FhgjMKy3Dzctkd9PQy%2Fc3yRcAoqk650pllIxmE6xYrFqRa0n9pw6nv8Cdypy2Bf1woaHzIVNkyvctYyZgqWpFTKCF9ReSx%2BNFaXt9zsFNpZDb%2Ffs4nVwClJbSLcEhZ%2FTweB25lD88als87Zq2y7AZFdCE9uzL34ti4NzLb11BWS3TYM6JyiBRXPL2e5Ir0bQlcm4ag4tgM4KwcoOHg5TtevpUO%2FaqduqB%2F57o33ygeJZdM5I6cE1es6ZCCR2mJ48xEpjwiK34XGF9nSNbQ%2FcZSydOemEDNqgEXKsmQpKfi2eVTrn5MORdqzn7ZPJFYYFdiVzIKg78WPTeTohUPnrKJAauQ14zvNSKEqOLntS8Opi3CBmpLtICzoXvZLxA7aZoBBUM0mUkhLcHMo51DPQ%2FXA%2F5u96Hjj0V9erNayWp8etEprWobOnS6bQCN14VAxuAmE5A3K%2FZg6wfROqbhnVSes%2Bw327yffIa9ugxhM9yen0QPEtwHJeRV0HrTD1WY4Vu1yqQTI%2BAk26MwljXUfH9gWkSOlLF8BVqYoBgT35Y3hvbqRHFhbEtmKbhGrV%2BjzyWod%2B8DIyG%2FbI%2B7wFOI81xOpUtJFlBLB0nNkzC5vKe%2FBjqkAWwzfe9%2FkKPeSVLc0%2FoL%2F2TCa5T%2Bvc5QlJ%2FN3g%2BQxETK7CmXcnOgWN1q5IeQS4Z4MDJJwAyLu4GFgXDqJB65q48c6a8yxakjEytS1V7seb3eh4wGQ5SQf5DVM2Cg8i0W2HDG64iNqhpeuiO%2BwRDazHHuddh4s3PQMUP2Xmmuluu9gJQb50Zo6Oq58ebaLkgeftGdxxLn8nn6crIXWZwVLCMmRaVi&X-Amz-Signature=43cbdf2578275fcc6dbced5fb288a4f64591a80311b1ee5542ed96a95dfeb08e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUD3HA6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBBNc0MK2TmEqQAJzUKoQh3ALvkIwN6%2BzClPY5zbREa5AiEApwXhHoIL2IUFknLoz2qtFUC8HDNts7bj9YyTbsu%2FLl4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCUOvwkhXxHyEbvnSrcAw%2FFjFibNFxZwZImksayLmg77pyR%2Fq2JXdJ42OhQ60e2TPruL8VY2FVsbdjpoex5yr8ZiMkqzqE5NidNk%2F35%2FuDdrxmdgRicxYUjRJibodRxErBzOHtDiG0uz8ks9fr1sJOUbANuVokFIe%2BmzX7UEmFUcXtv3Lbhf%2Bh1zhtdWBCJveZtHSVo6CpGXzRGdfo1oSXSkCHiusqMQTra%2F9nqPLZ8RUgSkWpsx6MV0WOUJjnsNEfuqF0zoJ6xFHoj8U%2Bqb9RItfg1XEfLfwEu%2Bro7dklBePfdFsTeRmbFtlGQz6ybinKcGTKp41gAXLJowW%2FYxsqCxzGy70oc1O9f5X2YV3NIg6Y2f6n2WS0KygT9uqCNliXzIfjzV4ZYSZpHKVw4chheSMdtsHelQOUvgxh7Bj75wIgYjkQOJS%2FRs%2Fq7TY6VTFapvS9ylnMq%2BU0HJ1EUngEHK%2FihfXxyrYPnKp0RETNMy5nHj7R1w9TvNM7uNWMqXOrO2C%2BTw1tnt0yXhZrjmhEOgYsUQUZKFHbqMtGaKTNXrzyOLTfogBzxTV8MYY3IT2S6IkL%2B1reJ4Qde3LoxqAriLdCfN1YNiW9pJk8qq%2FP7jjJvfCDBSi0Ni3Gg71A5RBE1d0OVyPtQYAyrMPe7p78GOqUBdRZJkGnEHQJjhXzAOrAT6XLrBDL0S9J1GfHPykc5dd7NnTVpq001Yx9Fq36PcKh0wuqfH8njUimA2C9IbT2gaEsI1ve7h%2B64S0HazQtF%2Bzg%2F0b%2BUzrgAmPAZ%2BVbZpP5%2FUtYBHMEk20%2BIDSrDn6Hbw5up6xWPkyU16Ch5B0PmFgQyGoEPpZBNUdfmJ5U5vmGDzDnhiIDKxhsMBrad13B38p5FpiN8&X-Amz-Signature=ee549a9bc16cf470065746fc2b011df86a64c99580e3e095948605e984cc30d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRY5IAW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDSKgQb%2FQKN9m5x7Af3ZheyR89bsVxj%2B4n9iGWBlPj9bwIgIz%2BEXaD%2BJwpQzWOqmmOVFhQSrrFWcwa8eaSr7y66FAgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX%2BfUJwiYcXNEUwZCrcAyLpjwqIjqOhFSvWshVrSKqBExtXN8WjHkTh25%2BRlXdWyYh0q2g3LglY7ObMK8NLTHQaJZmP9n6JmDQY3pYqheC6tuy3r2%2BhgWGLMgX7sriYhciTlkyqFLwUbEn619vt0VOJRdBH3yE9IwLgKJ9iJWeTQ5MFOmS2cmTxQ6O3D2dJrS3pe0DBRfajZJbotX4wlb%2FbmxtRP5U9JuplTxMnprv%2BQboCaJFK8rb3LVD%2BQfhhBeOUgPU6wvDxmcpRxtDmqTB9mnmYnzcqUyxWlUh4J9rupogjv2m0mxFNj3xofdsXQbB1coL%2B1O9qVxDlG1ExLMmNWxRt23VO5fgYidxpM8V5bnsiezUMuthDMpkRJ7cjt9wE14w6HWFmkT6bgNGj4sGapJDLCdpYwOJI9NJFTCTXJXt3F7WDPkjq0Lv8BmT0xc5zjhxgP8%2F67JVl2Bit9Jth5yO2ZCMZ9JqCjInNhqr7rUyPWRY%2BoVQiMoY%2BBrYm7EzKpiFwUuZTKZcC9KhCyWZIBR78inRyEWCz8miZMfzFQJDAk9X9ZE3Bgny5wcC2pS4233OPWx1ywYj30jgq2PhM0wKW8g5R3h9VFv9fvcr3rmJeiH9%2BVS4aPvlfp36VYltKY0Lt%2B8SJQIOGMLa8p78GOqUBptapJD602KvqxDZXlVYRdHJFRq%2B6IBtqhpwFSxst7Pfk3sX5KIgLToOuJjSlaW3uOP0XD9veLh6haMRjzXwOBukDEcvj7g3k3CP1a56QsJ3sIUDFJbOSIAkqxMUX2UyyRTDBF1tMTv3PSYSLCd2MxSJtkzoO9lpXljjBumsaLAtkH5UBe9weXxCu6f1YpndvCktZxzGoKARbTpnKUhaB15y%2Bw%2BGq&X-Amz-Signature=bf3a05decba0cd99da8a396a8925291506762ed4ff575a47ffd6862760408e45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSFE3UM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCNl3VBbufP6jUIXVNInG%2BByUI44BsjoQapx%2FDlf%2BryogIhAJm5ei9huN1Ji274oCbIYSWuCgnJWsRJZPQWS79jso0YKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoiCjliyTT%2Bo6Mwlgq3AOzo%2FzOtcElubE9FIbVQARFoT%2FhgjMKy3Dzctkd9PQy%2Fc3yRcAoqk650pllIxmE6xYrFqRa0n9pw6nv8Cdypy2Bf1woaHzIVNkyvctYyZgqWpFTKCF9ReSx%2BNFaXt9zsFNpZDb%2Ffs4nVwClJbSLcEhZ%2FTweB25lD88als87Zq2y7AZFdCE9uzL34ti4NzLb11BWS3TYM6JyiBRXPL2e5Ir0bQlcm4ag4tgM4KwcoOHg5TtevpUO%2FaqduqB%2F57o33ygeJZdM5I6cE1es6ZCCR2mJ48xEpjwiK34XGF9nSNbQ%2FcZSydOemEDNqgEXKsmQpKfi2eVTrn5MORdqzn7ZPJFYYFdiVzIKg78WPTeTohUPnrKJAauQ14zvNSKEqOLntS8Opi3CBmpLtICzoXvZLxA7aZoBBUM0mUkhLcHMo51DPQ%2FXA%2F5u96Hjj0V9erNayWp8etEprWobOnS6bQCN14VAxuAmE5A3K%2FZg6wfROqbhnVSes%2Bw327yffIa9ugxhM9yen0QPEtwHJeRV0HrTD1WY4Vu1yqQTI%2BAk26MwljXUfH9gWkSOlLF8BVqYoBgT35Y3hvbqRHFhbEtmKbhGrV%2BjzyWod%2B8DIyG%2FbI%2B7wFOI81xOpUtJFlBLB0nNkzC5vKe%2FBjqkAWwzfe9%2FkKPeSVLc0%2FoL%2F2TCa5T%2Bvc5QlJ%2FN3g%2BQxETK7CmXcnOgWN1q5IeQS4Z4MDJJwAyLu4GFgXDqJB65q48c6a8yxakjEytS1V7seb3eh4wGQ5SQf5DVM2Cg8i0W2HDG64iNqhpeuiO%2BwRDazHHuddh4s3PQMUP2Xmmuluu9gJQb50Zo6Oq58ebaLkgeftGdxxLn8nn6crIXWZwVLCMmRaVi&X-Amz-Signature=95a5bf9fa03651d94a861bb322f0d8569c83834f5017c6e39a1237210489acec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
