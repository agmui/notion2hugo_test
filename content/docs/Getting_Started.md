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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVZ2CU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG1LsRtvXUekNOFNLbapt8%2FCust2rBmB0Bn%2FXnbibsayAiEA7VH018AFI9Du71olEgrK1cO1xgfI%2BLj6vOawD%2B8xyuIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FCSM11fvfU5tNkCrcA2V95j2vJ7bCuKCoN31936XLxtreLniicEd%2ByEkLcnos5l3i8U1nG48IC%2BbM%2BQDfwsBky0rhp0MqrncqzLGUIZxRliy1FzOq46tsCHitz0gmyidqt4i7xkiC8RZ6WyQQJ3EXwmNwPiF%2FtLaAqrLA2JvT83RW%2F5ME%2BGom63DzRbgpYWU9PQzJvhCQUjEr2OZgPFyb2%2FGBm%2BIv5804SSsbrK20lmwizBBd%2BaiIVU967Sa%2FbQaBZqShJN6Div46JvVp1QmHi23rw7a0SGGnldCqHSNa7zNUZvZODwhJXjgmyr1IJKfSGWCauJzQwaNn1HnKuf4dtI3mgRTvy%2BdKLyrxB%2Br5MBCavlAF9SCBTlWnKcTJO45R1rJ9JZy049YUPCxIUsGdwX9yKaHwizCWfHs%2B1LISaKS4ZaXwb91KeuCiJztP0pj7Szv4ZHm2w5C8z9%2BwOlPQ%2BEQURe1P%2FikL5xYCUkplL96Za3EeZZx2kmANcDH2OuR0EV%2FigsNan8n7R4Jqm%2ByCNdg%2FDiRcVOECZ2LRc8lSjWFf0lDoXAsphZGwcCNerGWY9Tx8Pnx%2Fy44jsS5ORNOjsvbVqsutgf2evdspwmeLzzwng28jqpV8GH3PRIBpiQ8c8tHnT5P2CX%2F%2FMKCL1cAGOqUBk3V5DKkqHm4ckslzusWgF%2B1Xm%2BU6kXWR1Hyz5Ud0PdtRTE47k%2BFQQfTt1ltKpi2kC6QUICiAYW8I4%2F2JFDu%2BzwSct6gD5y8cwwZwUoOpEidKl5yupcrbAWd9SG6ygeZmhc9EVpCT0E9mujltU%2BdommgN8rXG3bacL2OlH2UXv40wlYCGpEa9X7XgP3jRQ%2BngqryQ8rt2j450X7bRxLLys55pfiFr&X-Amz-Signature=f4c24d7703962a32cf80d2c2bb8e3a276daebb0b05fa2c4b8f7aaa3d9811fb31&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVZ2CU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG1LsRtvXUekNOFNLbapt8%2FCust2rBmB0Bn%2FXnbibsayAiEA7VH018AFI9Du71olEgrK1cO1xgfI%2BLj6vOawD%2B8xyuIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FCSM11fvfU5tNkCrcA2V95j2vJ7bCuKCoN31936XLxtreLniicEd%2ByEkLcnos5l3i8U1nG48IC%2BbM%2BQDfwsBky0rhp0MqrncqzLGUIZxRliy1FzOq46tsCHitz0gmyidqt4i7xkiC8RZ6WyQQJ3EXwmNwPiF%2FtLaAqrLA2JvT83RW%2F5ME%2BGom63DzRbgpYWU9PQzJvhCQUjEr2OZgPFyb2%2FGBm%2BIv5804SSsbrK20lmwizBBd%2BaiIVU967Sa%2FbQaBZqShJN6Div46JvVp1QmHi23rw7a0SGGnldCqHSNa7zNUZvZODwhJXjgmyr1IJKfSGWCauJzQwaNn1HnKuf4dtI3mgRTvy%2BdKLyrxB%2Br5MBCavlAF9SCBTlWnKcTJO45R1rJ9JZy049YUPCxIUsGdwX9yKaHwizCWfHs%2B1LISaKS4ZaXwb91KeuCiJztP0pj7Szv4ZHm2w5C8z9%2BwOlPQ%2BEQURe1P%2FikL5xYCUkplL96Za3EeZZx2kmANcDH2OuR0EV%2FigsNan8n7R4Jqm%2ByCNdg%2FDiRcVOECZ2LRc8lSjWFf0lDoXAsphZGwcCNerGWY9Tx8Pnx%2Fy44jsS5ORNOjsvbVqsutgf2evdspwmeLzzwng28jqpV8GH3PRIBpiQ8c8tHnT5P2CX%2F%2FMKCL1cAGOqUBk3V5DKkqHm4ckslzusWgF%2B1Xm%2BU6kXWR1Hyz5Ud0PdtRTE47k%2BFQQfTt1ltKpi2kC6QUICiAYW8I4%2F2JFDu%2BzwSct6gD5y8cwwZwUoOpEidKl5yupcrbAWd9SG6ygeZmhc9EVpCT0E9mujltU%2BdommgN8rXG3bacL2OlH2UXv40wlYCGpEa9X7XgP3jRQ%2BngqryQ8rt2j450X7bRxLLys55pfiFr&X-Amz-Signature=06b7ce6a7537c5e608a85e135621ee3b3c730cb6a4999b7003d30e448f4f2369&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVZ2CU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG1LsRtvXUekNOFNLbapt8%2FCust2rBmB0Bn%2FXnbibsayAiEA7VH018AFI9Du71olEgrK1cO1xgfI%2BLj6vOawD%2B8xyuIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FCSM11fvfU5tNkCrcA2V95j2vJ7bCuKCoN31936XLxtreLniicEd%2ByEkLcnos5l3i8U1nG48IC%2BbM%2BQDfwsBky0rhp0MqrncqzLGUIZxRliy1FzOq46tsCHitz0gmyidqt4i7xkiC8RZ6WyQQJ3EXwmNwPiF%2FtLaAqrLA2JvT83RW%2F5ME%2BGom63DzRbgpYWU9PQzJvhCQUjEr2OZgPFyb2%2FGBm%2BIv5804SSsbrK20lmwizBBd%2BaiIVU967Sa%2FbQaBZqShJN6Div46JvVp1QmHi23rw7a0SGGnldCqHSNa7zNUZvZODwhJXjgmyr1IJKfSGWCauJzQwaNn1HnKuf4dtI3mgRTvy%2BdKLyrxB%2Br5MBCavlAF9SCBTlWnKcTJO45R1rJ9JZy049YUPCxIUsGdwX9yKaHwizCWfHs%2B1LISaKS4ZaXwb91KeuCiJztP0pj7Szv4ZHm2w5C8z9%2BwOlPQ%2BEQURe1P%2FikL5xYCUkplL96Za3EeZZx2kmANcDH2OuR0EV%2FigsNan8n7R4Jqm%2ByCNdg%2FDiRcVOECZ2LRc8lSjWFf0lDoXAsphZGwcCNerGWY9Tx8Pnx%2Fy44jsS5ORNOjsvbVqsutgf2evdspwmeLzzwng28jqpV8GH3PRIBpiQ8c8tHnT5P2CX%2F%2FMKCL1cAGOqUBk3V5DKkqHm4ckslzusWgF%2B1Xm%2BU6kXWR1Hyz5Ud0PdtRTE47k%2BFQQfTt1ltKpi2kC6QUICiAYW8I4%2F2JFDu%2BzwSct6gD5y8cwwZwUoOpEidKl5yupcrbAWd9SG6ygeZmhc9EVpCT0E9mujltU%2BdommgN8rXG3bacL2OlH2UXv40wlYCGpEa9X7XgP3jRQ%2BngqryQ8rt2j450X7bRxLLys55pfiFr&X-Amz-Signature=a3ec58556aa70f20565c7e1bfad9999dd994633d4777924eef4aeceabab195fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBZS4LHP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDDy%2BITIYAnfD47f4OCwgRFyO2bEAMwNQD5nVYBSZkhlQIhAJ49j9T%2BBVHRcyJqeyZrAvu9plqzsXqL9Y6F2e%2BgheqQKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcItSmwlz9bU3YXmMq3AO81l0YPfCEyPYdVIrCPfMGcVZ7XkyykyBTOwLX4tKWUNXjG09PKNdnF%2BzLhmQPXlgZcCKJjJarRtF9G8fNds9LXRKxGA8u4AZURXoIatsJaRsmK0dRvrwvaEYhm5t3tVJ7nCNfL6FGU5%2F9C5xBLMgURK7ZGu5PRjxGHUDS87rKQQEtijHRV%2BK%2FI7OgKgUPt8rU3ayozHLMA18yMBRZxRrd3nOEPwhZqusUzh5Ve%2FlZm0jxXNU26SqNbS5Npx1Di9JA4Lj1lbA4cEhVTSvTm8afdjDhxpzAmsUZdmyvy9is07%2F0Izq0l0QovDk1uuM%2FBSBoJ3ndIUTlfgLErmR0ycGJ1SRGOxUjYNbbq1UC4gVzA34yqPhoHkhu44izAt%2FL%2FboSlhyZMtPqoo1ZUOD0eDoThr1yEfyC1Y8h7%2FZhOVccFqnvQ9U%2BNiZxWfl02BEfPTU1LNwBFvTxPAqWA3x7CETLQijO%2B%2BThmXjuskPnyZR1%2FjN3IqOLiUlzaJQc%2B1q30z9LgnxJGK186x%2FyTOB7y1YnmWZFPCJ6Xs8BYncp5uifsHWPeLUbWHOVyMVr4LSTzgNEddqJK5QMzGHgUwXr4raS%2FgnYYDEih2ieLJ7Z8%2BsT74cEiTI3PCSWHkHT9TDPg9XABjqkATeEFPfneiJ4WuJP6duM3xJ9B5%2FW9%2BK2CHn%2Bgjx8IYlJdfrM7GEi26m8UI2hKHRVP2MuS%2B842QeBB%2B773TTndLPTs2IIYQAlhg%2FFPH6GMKeibYnBOEENzhp64kF03fEs5%2B53Qv6wkV%2Befj4Mu5qPXw%2F8WEtJbRcmuhiC1EsSWOEhq1XEbDNNPKRbeN7Wx3Yovn%2F9q3fmSez3GeSEN5CqvoFpLGmj&X-Amz-Signature=392ae81068666ac203e908558e9e3f3b776c618827bc9e07241769518f7e3e31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLM56XB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDKK5yJij%2BZVT9CAeFv1EPEbPcV9W6pIneRaiZtplrzcAiBEOByQS7Eb2nahgn0CPYq5KkCaeR244%2FRu4BDF9OXfdSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVBQh7sokNa25nOHKtwDJs9k1nc7ARA5KIesirZBZG7nKTAhHF5WKGCqK8mA99Af5eA12clNKWHvqgI5F5lKMQdpI1xu%2FGHCDbCaBGXbVC0yTQr%2FpRnh76hvbf2IBC2zQKbmWlQuEuGsSIdWeFASv3%2Bv2r%2BxFlQaCVmwx9%2BIlPabgTssSYEKyXc6re9Xxm0T0WcQ0pyDpiBAtYdFUyahmjOEpmLi%2B7tj7vQS0upJ6BeCLWRVAaM5By5j30Ez7s%2BA4o3uF19f8vWgNwsxQynMV%2BT7cdJ00ITZSIHbu9xbLkzhUHaCIRAfhVDbTB7Z1LWex1e367B%2BDCIBW257CxcrOAAObDTFM58FlDFf5grTaZGVDntQDci30MxygJD%2B%2FKseHVt2zlyldoUD0WZAgYaBgMZXplzMsmIUHkH7dLHdtGKpRYrd%2FdWo%2FasPYTmtROuNhLFC4VU1UJanC8Srrq1Sb8jXKRNSWmEun%2F6ND1fJvyC%2FbPrfHXHaNz4Hgkq42EDNbEGn2ElfkSbebIj%2Fr2iXWM%2FRNqfy2QafYOrxcEpdIQGbCo5ufk6GXrCcJQc5xBfBeBynMzT%2F%2FhkAH40zfBDgOiryNJJmJeEz3FIEw8IgXo2lQu%2BEuU5R0yRUCb4qgTkhO8ogdb1uONLQFwEw24rVwAY6pgGZ3BsMPLnoKEQCxKtRLD8AN%2F4loz43SAOGvwAv%2FYQdOnMRAAKJFusb09aYvNiC9LObR0OOthth8gEIDG80i6MSxxT5NLcbGrYWIA0rxzS7abCdVY8x%2F28bZKUHoS%2FNVAJIxi4vvsjNX9c7q2j2GMqW1W8TdQ58WUcRY2nRMWQQV7IVM0rvYTM%2F6EtW%2BcLp9GUAsKMmnIXulXCxwohfW%2FHgs%2BLJ8KMA&X-Amz-Signature=e85d516289f6b4986e756bc54753ffbc7eb4ea0c9931b7d90f3069a2e2fbc60e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVZ2CU3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG1LsRtvXUekNOFNLbapt8%2FCust2rBmB0Bn%2FXnbibsayAiEA7VH018AFI9Du71olEgrK1cO1xgfI%2BLj6vOawD%2B8xyuIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FCSM11fvfU5tNkCrcA2V95j2vJ7bCuKCoN31936XLxtreLniicEd%2ByEkLcnos5l3i8U1nG48IC%2BbM%2BQDfwsBky0rhp0MqrncqzLGUIZxRliy1FzOq46tsCHitz0gmyidqt4i7xkiC8RZ6WyQQJ3EXwmNwPiF%2FtLaAqrLA2JvT83RW%2F5ME%2BGom63DzRbgpYWU9PQzJvhCQUjEr2OZgPFyb2%2FGBm%2BIv5804SSsbrK20lmwizBBd%2BaiIVU967Sa%2FbQaBZqShJN6Div46JvVp1QmHi23rw7a0SGGnldCqHSNa7zNUZvZODwhJXjgmyr1IJKfSGWCauJzQwaNn1HnKuf4dtI3mgRTvy%2BdKLyrxB%2Br5MBCavlAF9SCBTlWnKcTJO45R1rJ9JZy049YUPCxIUsGdwX9yKaHwizCWfHs%2B1LISaKS4ZaXwb91KeuCiJztP0pj7Szv4ZHm2w5C8z9%2BwOlPQ%2BEQURe1P%2FikL5xYCUkplL96Za3EeZZx2kmANcDH2OuR0EV%2FigsNan8n7R4Jqm%2ByCNdg%2FDiRcVOECZ2LRc8lSjWFf0lDoXAsphZGwcCNerGWY9Tx8Pnx%2Fy44jsS5ORNOjsvbVqsutgf2evdspwmeLzzwng28jqpV8GH3PRIBpiQ8c8tHnT5P2CX%2F%2FMKCL1cAGOqUBk3V5DKkqHm4ckslzusWgF%2B1Xm%2BU6kXWR1Hyz5Ud0PdtRTE47k%2BFQQfTt1ltKpi2kC6QUICiAYW8I4%2F2JFDu%2BzwSct6gD5y8cwwZwUoOpEidKl5yupcrbAWd9SG6ygeZmhc9EVpCT0E9mujltU%2BdommgN8rXG3bacL2OlH2UXv40wlYCGpEa9X7XgP3jRQ%2BngqryQ8rt2j450X7bRxLLys55pfiFr&X-Amz-Signature=f94dd9b83438102dbdbd3d7a499295c0a1563242b7c5b540fc00450b2208f02c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
