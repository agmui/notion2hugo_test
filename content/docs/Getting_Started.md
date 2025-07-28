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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFVNW7V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDzVUf%2F%2FgjpqzZZ3b9TAv8tsBjJYUH2xNERyhB%2B2WuaAIgI2u47jXDfKR3rYHzEkUusxm30ZuclboWntIyJY1%2BSnUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQihjq7nwzHy%2B09qCrcA42JgH7BnpqrcW81niXH1VM4fATMh6S%2F7CgY%2BhqrUqgOgl6htmTJ1O1%2FzJZkNucn2MlF3s2IY6QrUcop3JGCTvrBtq51%2FCVnm5%2FKwpvScglDLZvwhtd8QfH%2FQTKA3%2FzA%2BMoyURw7%2BiKSv16iTjPuEi6AhKVkgxobQZ2O1egi4jS8ICudkVnFcRa7iotI8HNyLcTgd6305P4HB2Nvufbv0%2BaqpJIaAm1Rvv9PmqH3t9h%2FMbA8lptU6f%2FDJf2B6DQww6Q5OSGCRevE6V84zpRdb6Y2%2BtPSLtJ6o94RcG1hhTjkIu19WPOK899%2BlyYfPxAvQt8G%2FAPP4cYW4a%2BP6g4VKcSp4GL%2FSQZXvk%2Bm9xyqRK55pKcE%2B77D%2F84RIoHtSDEcIvPadibr4T16HZ77deIKkYNVsYvx%2BLZHkcFZ3ZucpV609XMpCf2CkrYJZeitUgC07iAW4ce%2B87i9FDKKfEsZLSG5sM27aNL135Bb517zpTWmchCrcDA3He05Q3maqzVIUYyz%2FnAugVPw%2FlryQhQe0acjkqDg82yetxh6uFMtVxmdVPNGI%2By67XJGWbCw3xcP8GWI%2FnORIGruH4jM1r5owN4jiFK%2FxXEm6BMJezMIWQC2ANL%2Baes42lyVXAKuMJuNncQGOqUBktO6rK00r48fnIoWnh9UKC7ucY5VgzWBdh5joXAaaU9gr9evmyLbvXhUhc91hq5YSk5ZUvn%2BKshhPuHsMfnXTUjFttpBeAl8Na1ppsigSbuBQtIH%2FVE2%2BiN5RSXCkfiM67ccMoXpttlHwDPVkJjkj4R4fq5Um0RNWel5qqRMTT7R0BK7OK60LOY4J%2FoPgYgwRLMjmqbDcD1ipxsk45a4bmiM8svw&X-Amz-Signature=be3f856aca893f5c1c78cdc6b0d6e931e2ce19a08bf87ceae9004330b283ed95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFVNW7V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDzVUf%2F%2FgjpqzZZ3b9TAv8tsBjJYUH2xNERyhB%2B2WuaAIgI2u47jXDfKR3rYHzEkUusxm30ZuclboWntIyJY1%2BSnUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQihjq7nwzHy%2B09qCrcA42JgH7BnpqrcW81niXH1VM4fATMh6S%2F7CgY%2BhqrUqgOgl6htmTJ1O1%2FzJZkNucn2MlF3s2IY6QrUcop3JGCTvrBtq51%2FCVnm5%2FKwpvScglDLZvwhtd8QfH%2FQTKA3%2FzA%2BMoyURw7%2BiKSv16iTjPuEi6AhKVkgxobQZ2O1egi4jS8ICudkVnFcRa7iotI8HNyLcTgd6305P4HB2Nvufbv0%2BaqpJIaAm1Rvv9PmqH3t9h%2FMbA8lptU6f%2FDJf2B6DQww6Q5OSGCRevE6V84zpRdb6Y2%2BtPSLtJ6o94RcG1hhTjkIu19WPOK899%2BlyYfPxAvQt8G%2FAPP4cYW4a%2BP6g4VKcSp4GL%2FSQZXvk%2Bm9xyqRK55pKcE%2B77D%2F84RIoHtSDEcIvPadibr4T16HZ77deIKkYNVsYvx%2BLZHkcFZ3ZucpV609XMpCf2CkrYJZeitUgC07iAW4ce%2B87i9FDKKfEsZLSG5sM27aNL135Bb517zpTWmchCrcDA3He05Q3maqzVIUYyz%2FnAugVPw%2FlryQhQe0acjkqDg82yetxh6uFMtVxmdVPNGI%2By67XJGWbCw3xcP8GWI%2FnORIGruH4jM1r5owN4jiFK%2FxXEm6BMJezMIWQC2ANL%2Baes42lyVXAKuMJuNncQGOqUBktO6rK00r48fnIoWnh9UKC7ucY5VgzWBdh5joXAaaU9gr9evmyLbvXhUhc91hq5YSk5ZUvn%2BKshhPuHsMfnXTUjFttpBeAl8Na1ppsigSbuBQtIH%2FVE2%2BiN5RSXCkfiM67ccMoXpttlHwDPVkJjkj4R4fq5Um0RNWel5qqRMTT7R0BK7OK60LOY4J%2FoPgYgwRLMjmqbDcD1ipxsk45a4bmiM8svw&X-Amz-Signature=e478c7531479317bd6ff50d88626bc04f794bc9d528adeb7c5bafbaa9de8c2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFVNW7V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDzVUf%2F%2FgjpqzZZ3b9TAv8tsBjJYUH2xNERyhB%2B2WuaAIgI2u47jXDfKR3rYHzEkUusxm30ZuclboWntIyJY1%2BSnUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQihjq7nwzHy%2B09qCrcA42JgH7BnpqrcW81niXH1VM4fATMh6S%2F7CgY%2BhqrUqgOgl6htmTJ1O1%2FzJZkNucn2MlF3s2IY6QrUcop3JGCTvrBtq51%2FCVnm5%2FKwpvScglDLZvwhtd8QfH%2FQTKA3%2FzA%2BMoyURw7%2BiKSv16iTjPuEi6AhKVkgxobQZ2O1egi4jS8ICudkVnFcRa7iotI8HNyLcTgd6305P4HB2Nvufbv0%2BaqpJIaAm1Rvv9PmqH3t9h%2FMbA8lptU6f%2FDJf2B6DQww6Q5OSGCRevE6V84zpRdb6Y2%2BtPSLtJ6o94RcG1hhTjkIu19WPOK899%2BlyYfPxAvQt8G%2FAPP4cYW4a%2BP6g4VKcSp4GL%2FSQZXvk%2Bm9xyqRK55pKcE%2B77D%2F84RIoHtSDEcIvPadibr4T16HZ77deIKkYNVsYvx%2BLZHkcFZ3ZucpV609XMpCf2CkrYJZeitUgC07iAW4ce%2B87i9FDKKfEsZLSG5sM27aNL135Bb517zpTWmchCrcDA3He05Q3maqzVIUYyz%2FnAugVPw%2FlryQhQe0acjkqDg82yetxh6uFMtVxmdVPNGI%2By67XJGWbCw3xcP8GWI%2FnORIGruH4jM1r5owN4jiFK%2FxXEm6BMJezMIWQC2ANL%2Baes42lyVXAKuMJuNncQGOqUBktO6rK00r48fnIoWnh9UKC7ucY5VgzWBdh5joXAaaU9gr9evmyLbvXhUhc91hq5YSk5ZUvn%2BKshhPuHsMfnXTUjFttpBeAl8Na1ppsigSbuBQtIH%2FVE2%2BiN5RSXCkfiM67ccMoXpttlHwDPVkJjkj4R4fq5Um0RNWel5qqRMTT7R0BK7OK60LOY4J%2FoPgYgwRLMjmqbDcD1ipxsk45a4bmiM8svw&X-Amz-Signature=a19be55d0fc9048cd1b7bde177af85aa32e4954f9560d516cf42aac35f6ae302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PPRJWM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDM85YurKWPg1L%2BZF2DZkrk6g0opWul9gyFgzB5oOfu0AiBUFnsOdID46lZjE7MpQ8RLpkRp0clj9xaNhjE3Z6a0ACqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDtRJsKd3Q7pvWXoKtwDg1tVFLttOikqE%2FYTeJiDgYf5xrL2AIFPSOLdI2vN7VrQs6pg0FiyTfwvZx8FnV5PR3VHhPWdzQ4N2ctaHXfwlQP2GGsRHl3SN7XE5lxClbKJkcJLfXh4f3MbATxWITky7%2FQEQz%2FVPeXj38qAd5F0eCawrscP57TsqYfPik6aoeqAnIA6rxfXuyqoRu5ffejp%2BtvmMiIudRMGYZFJedEO4BPZSm4czZI7yNh%2B8s9kLsE7v4Jyg%2BHOcOabJawAMzYQ81i9GmYFjjmdvcRn%2BbCrhGwniYzwngtNEVS5T3bfDA2zNad7CCan4O3IWxqG4nfAycGh1bv%2F5LMdItAMtZZ8YRlBqzsHFOZ8prhvc4qG%2FNE3U6%2FTD%2BMiZdF02BKWJUJYIcJUPM1BCNsz18WxO8VFgLFy%2BT8KVb18ogbNqpgOA1uvi8GvXXC26pSTHwHQroBwLQ38mqIgwxsfjVMvrc1Hktgy22Ko5czmQvaGrTm0hbBs1gOQmoQi6fsgzeGXFC3x7aQhSW8WE3yvUmKum%2BTGHddFypJf05AOX26gw5hsorwChIOfP55elkft8%2Bg92BQnNfatL3dSRt13MEYd8Sanjwx34JEzkekc%2BKJguWmMs9vbej%2BHL7%2BdMK60vy0wwY2dxAY6pgEtQILtKo00FNA70IRIjtyYF4eCNGb9sd0WHWOdul%2BBvXIH9OBbITT1Hxl6cIEsvhZSRTm837V%2ByACxPQhJ%2BjNcUyXx2V8NfFUm%2BJrfF4Im%2BFJ1%2Bxe62%2B0VCxqMQYTlgzWqx%2B%2Be1pI7ZWC1CSDsOG0YkY32SNYazFq6ZaIKcdlao09jnJZRW4OgT3ppCBeUOj7gOnc0SjX6tGq1GGABN%2F5jq8%2BOhetW&X-Amz-Signature=c915ac5c9051b79f81b66a7225f17d5c109fd5f16bd5096e4e6033438b60bf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IH44B4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFNODgLNhwqQLAenKz8eQewwKNOqbexFcxhPQ3gXO3exAiEAgqvTACst0f4SfpSQJJwMLSvKXULKHDNVZz8ajuVt9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaGu6Ymb6ifNpuySyrcA6bzONR1f6ut9U90efJJJ5w%2BkX7aVC4rChg8cHRikY1CT8nsmtEVLjMgGvJZ%2BWcC6pR3PNQVsPiJUpDCfdN2hWjrnW8fgVOjsPyUn%2FAxD51l33cKeS9otRJZzMGjcGKMIBqhb7zo61j5TOjL6R9W9t%2FNNG9%2BnJfslKCmSjRsTPW3lyL%2Bnor%2BKXm%2F3lC2ff4NSADIin5GQeLao0QvHs0CrQ%2Fq3CPWNETkTcXokwrqcoMPO3TJAX372qrlVIFUL050lsiio3kF6%2BYFwR4pVxE0d909bgP9OM445XgCsRmt7e8vAsze3LlR1fhmU7%2FY9cy2sS0y4jV%2BpEQkp1QBAOOST8jY8UT%2FYPZQWWfl8pmht64rPsazfKEBsKkthgIoeJc6aqMF5LrFnr4LpGfuQms8RZq0bEDSAGXA0ynWkjHchA%2Fs%2BX9eQloOkf1%2Bae6nDDbtH%2FXRe9weP3sjxHQnRWVnNEC9n97tst3Yv1%2FEZ4a%2BZ4mbU7tUaLeJCVH%2BZDejLNs9TPig%2BxpQSxIch%2FFcEp8TzEsNG5KaQoeSKvplR8uPBlBwsly5gBeAZKFkYrSE8brWRkez3o1uIrjbhmoLU2swbpW4yvs0S7KpvcyOAL%2BmDuAJXOnNnT7gRBJBdGmvMP%2BNncQGOqUBdlHLW8qJj6aveh2jfP8OSSJ%2BqpplN901YqQu%2BNPi0erJoPFc%2FrzKeZhF%2BLYX3sZ1x1VrdfwR1WtT8skLd%2FDCF7PuEeCtQuEHfbL%2Fpz2%2FvgDWw83JeSpFlix8reqrn%2FRuF8q4iIASLdZYGg9kvLk0pdqcp8yf3VosKKmNptUA0ghYiBYCeZqJ11evaHkvAPOQ22gjJsLUHCZQk%2FFkWVfGoMeOpJqX&X-Amz-Signature=cfe314b83c9e2e9fbe45d8685701ae1be843aa24be79beb69d4ded982eafe55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFVNW7V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDzVUf%2F%2FgjpqzZZ3b9TAv8tsBjJYUH2xNERyhB%2B2WuaAIgI2u47jXDfKR3rYHzEkUusxm30ZuclboWntIyJY1%2BSnUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQihjq7nwzHy%2B09qCrcA42JgH7BnpqrcW81niXH1VM4fATMh6S%2F7CgY%2BhqrUqgOgl6htmTJ1O1%2FzJZkNucn2MlF3s2IY6QrUcop3JGCTvrBtq51%2FCVnm5%2FKwpvScglDLZvwhtd8QfH%2FQTKA3%2FzA%2BMoyURw7%2BiKSv16iTjPuEi6AhKVkgxobQZ2O1egi4jS8ICudkVnFcRa7iotI8HNyLcTgd6305P4HB2Nvufbv0%2BaqpJIaAm1Rvv9PmqH3t9h%2FMbA8lptU6f%2FDJf2B6DQww6Q5OSGCRevE6V84zpRdb6Y2%2BtPSLtJ6o94RcG1hhTjkIu19WPOK899%2BlyYfPxAvQt8G%2FAPP4cYW4a%2BP6g4VKcSp4GL%2FSQZXvk%2Bm9xyqRK55pKcE%2B77D%2F84RIoHtSDEcIvPadibr4T16HZ77deIKkYNVsYvx%2BLZHkcFZ3ZucpV609XMpCf2CkrYJZeitUgC07iAW4ce%2B87i9FDKKfEsZLSG5sM27aNL135Bb517zpTWmchCrcDA3He05Q3maqzVIUYyz%2FnAugVPw%2FlryQhQe0acjkqDg82yetxh6uFMtVxmdVPNGI%2By67XJGWbCw3xcP8GWI%2FnORIGruH4jM1r5owN4jiFK%2FxXEm6BMJezMIWQC2ANL%2Baes42lyVXAKuMJuNncQGOqUBktO6rK00r48fnIoWnh9UKC7ucY5VgzWBdh5joXAaaU9gr9evmyLbvXhUhc91hq5YSk5ZUvn%2BKshhPuHsMfnXTUjFttpBeAl8Na1ppsigSbuBQtIH%2FVE2%2BiN5RSXCkfiM67ccMoXpttlHwDPVkJjkj4R4fq5Um0RNWel5qqRMTT7R0BK7OK60LOY4J%2FoPgYgwRLMjmqbDcD1ipxsk45a4bmiM8svw&X-Amz-Signature=d6c772dbb4dcd974a8995e7690539422b1294fec538d7a82394a3f0244dfc226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
