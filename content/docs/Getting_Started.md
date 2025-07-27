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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASUJ4AT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDeksrSxgPZ9vrxzpNsZVj9IuJB6VGcKM5ma0f0nmxD5QIhAN%2Ffo7FaU4PbmKxUdE8c93k8BlA8uqV31zLw35PqoejSKv8DCG0QABoMNjM3NDIzMTgzODA1IgxT%2FP55SQRDjQvhoLwq3AO4NmpCxWGpPfp2w3f1RVyFoS7xcIJMKF%2BifW1dhhqNfTpDuEpAAciQ9A6KD2YlRJoNCuV7goerG4EEYw8K1fZAGVxWCO4GifnY75LGnLu0ZzH%2FY5Mdo6sa5SmAuSvH9akw0GVHXxFjm7YBgiJACQ%2FMDGAHAUBiyE9Ow%2Fncmg4pG%2BPQ%2BH9FyJqfRxzlrbGn5xYT3DXjCaFYHC3ps5AdQZab%2FZiJ%2FxHPrRY41VUzoz3CBl2OdXpXxs1vo7kANs6jvvOC2%2FzwBc%2FdVXcEB5sXef%2FdzvQGL5q8kOF08l4OWQv%2B%2BE6DXIIjoTDDhAe2e8aEEyuyttDzIlsGskJSqMXrtpDIu5g%2BTe9bwAX5Vcv8RgvwRoAjl8Ac9B155PlhMwL5wcUued4XvDJTqqytTrcSLYgXasaR4OiTMkMUC36JyRkGK9fRlObYoglc1zQUrdwd2I07sN8Ybghdst3UVKgaYdV8gV%2BK300fNV%2BNwipH%2BOuQ2TLNVI4SLhXOWLbUWMfGEuAzHp%2F1Fubx0ZL1yRyfWOsg8tGVVzWHXZ%2FrcYscnFwe1OCSeuXly3dFJhkHKnrrL%2B%2FqiqnJb%2BGaZDIJ%2BP2cwjjZDWtGNWgdsv7gnLpP4SL9JEnHrSQO4%2BLqx%2FxzNTDpupbEBjqkAbpO4ZziO0icMnXpYVjh0tk53pFFsXL2jsUa%2FdRF1kcnQSqb0EsSrGXgalBArWixe5aWqMu84pnn8d6JGfT42zE3uNfG%2FDeHfji695MtvUlNcnfCVvimAkbumrFcpu1RGr%2FjftyDLS8rpWqbPxr3yA2NbNomVtJlLKD28dgB9XO6h%2F5%2FMUatzeCftWBaaJZ6GQ3MTJ5itNHp00xlA6sZPbCoBKbl&X-Amz-Signature=0d4fb313b69ce8b6f23af89724496b24e3a9c25f5a09b5bbd57a78ebea9ed868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASUJ4AT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDeksrSxgPZ9vrxzpNsZVj9IuJB6VGcKM5ma0f0nmxD5QIhAN%2Ffo7FaU4PbmKxUdE8c93k8BlA8uqV31zLw35PqoejSKv8DCG0QABoMNjM3NDIzMTgzODA1IgxT%2FP55SQRDjQvhoLwq3AO4NmpCxWGpPfp2w3f1RVyFoS7xcIJMKF%2BifW1dhhqNfTpDuEpAAciQ9A6KD2YlRJoNCuV7goerG4EEYw8K1fZAGVxWCO4GifnY75LGnLu0ZzH%2FY5Mdo6sa5SmAuSvH9akw0GVHXxFjm7YBgiJACQ%2FMDGAHAUBiyE9Ow%2Fncmg4pG%2BPQ%2BH9FyJqfRxzlrbGn5xYT3DXjCaFYHC3ps5AdQZab%2FZiJ%2FxHPrRY41VUzoz3CBl2OdXpXxs1vo7kANs6jvvOC2%2FzwBc%2FdVXcEB5sXef%2FdzvQGL5q8kOF08l4OWQv%2B%2BE6DXIIjoTDDhAe2e8aEEyuyttDzIlsGskJSqMXrtpDIu5g%2BTe9bwAX5Vcv8RgvwRoAjl8Ac9B155PlhMwL5wcUued4XvDJTqqytTrcSLYgXasaR4OiTMkMUC36JyRkGK9fRlObYoglc1zQUrdwd2I07sN8Ybghdst3UVKgaYdV8gV%2BK300fNV%2BNwipH%2BOuQ2TLNVI4SLhXOWLbUWMfGEuAzHp%2F1Fubx0ZL1yRyfWOsg8tGVVzWHXZ%2FrcYscnFwe1OCSeuXly3dFJhkHKnrrL%2B%2FqiqnJb%2BGaZDIJ%2BP2cwjjZDWtGNWgdsv7gnLpP4SL9JEnHrSQO4%2BLqx%2FxzNTDpupbEBjqkAbpO4ZziO0icMnXpYVjh0tk53pFFsXL2jsUa%2FdRF1kcnQSqb0EsSrGXgalBArWixe5aWqMu84pnn8d6JGfT42zE3uNfG%2FDeHfji695MtvUlNcnfCVvimAkbumrFcpu1RGr%2FjftyDLS8rpWqbPxr3yA2NbNomVtJlLKD28dgB9XO6h%2F5%2FMUatzeCftWBaaJZ6GQ3MTJ5itNHp00xlA6sZPbCoBKbl&X-Amz-Signature=db7b1b1301fdedbb94a09b479c354007a7455663462de439f286867cd6814dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASUJ4AT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDeksrSxgPZ9vrxzpNsZVj9IuJB6VGcKM5ma0f0nmxD5QIhAN%2Ffo7FaU4PbmKxUdE8c93k8BlA8uqV31zLw35PqoejSKv8DCG0QABoMNjM3NDIzMTgzODA1IgxT%2FP55SQRDjQvhoLwq3AO4NmpCxWGpPfp2w3f1RVyFoS7xcIJMKF%2BifW1dhhqNfTpDuEpAAciQ9A6KD2YlRJoNCuV7goerG4EEYw8K1fZAGVxWCO4GifnY75LGnLu0ZzH%2FY5Mdo6sa5SmAuSvH9akw0GVHXxFjm7YBgiJACQ%2FMDGAHAUBiyE9Ow%2Fncmg4pG%2BPQ%2BH9FyJqfRxzlrbGn5xYT3DXjCaFYHC3ps5AdQZab%2FZiJ%2FxHPrRY41VUzoz3CBl2OdXpXxs1vo7kANs6jvvOC2%2FzwBc%2FdVXcEB5sXef%2FdzvQGL5q8kOF08l4OWQv%2B%2BE6DXIIjoTDDhAe2e8aEEyuyttDzIlsGskJSqMXrtpDIu5g%2BTe9bwAX5Vcv8RgvwRoAjl8Ac9B155PlhMwL5wcUued4XvDJTqqytTrcSLYgXasaR4OiTMkMUC36JyRkGK9fRlObYoglc1zQUrdwd2I07sN8Ybghdst3UVKgaYdV8gV%2BK300fNV%2BNwipH%2BOuQ2TLNVI4SLhXOWLbUWMfGEuAzHp%2F1Fubx0ZL1yRyfWOsg8tGVVzWHXZ%2FrcYscnFwe1OCSeuXly3dFJhkHKnrrL%2B%2FqiqnJb%2BGaZDIJ%2BP2cwjjZDWtGNWgdsv7gnLpP4SL9JEnHrSQO4%2BLqx%2FxzNTDpupbEBjqkAbpO4ZziO0icMnXpYVjh0tk53pFFsXL2jsUa%2FdRF1kcnQSqb0EsSrGXgalBArWixe5aWqMu84pnn8d6JGfT42zE3uNfG%2FDeHfji695MtvUlNcnfCVvimAkbumrFcpu1RGr%2FjftyDLS8rpWqbPxr3yA2NbNomVtJlLKD28dgB9XO6h%2F5%2FMUatzeCftWBaaJZ6GQ3MTJ5itNHp00xlA6sZPbCoBKbl&X-Amz-Signature=01e79eed8b2fb64871c9ed13ea17b19ca56eb8dfc6cccd34c274cbd0479a2aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIN4ULX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFjpNUp%2FLCf4jwUbTTbnWOx4%2FMq1SKHnl70kQVKCrA7wAiEAmGDCbuVEMzyUNnxfZmqbLnlyVdLlo02f%2BNqtqUPwLRcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJZRe8Yu3u92edOVBCrcA5DY%2FaR8Bjd0VYjWnxDqjmG%2F1%2B9tLJsA1DDNdM5BuwHGgREsqCIGbehi2SpX9qK26RNYqsFBM8MuC7OlKxLjyT6bKHPglHY9u9kAafaxdH%2FwUFgb1i7ZboAzhfAbNqs3dHUueBFJCA59yAWDwzHx64DuyIOmd1PaUy3i579SrqwGiR9o04m2O6sDhLhqUSSIvOOV07jEne%2FthvfR%2B1vALVsnhMxBxGfbZwN8ij%2Fosyr903K5WcisiAuh30fgX2raQy9S8JrasedboVcp65Qmaw67ngZ4%2FUag8xjbTrQzVuEpIRakuIfu5sbNL06YqxblAH9BE956MvB79X%2BEn8OmKSJA9wf82z7W3h7e1JA8syQ0mSIPs9j%2Bh7O47dwmSSiUikn8JDSIjHQ9Um8YRaTSHV7WDQ2cxpf58hMCNAjdGw%2BtWEBB1i%2F0%2BoTb1e1heDTDE0qWBcFpCANDtOD37tw9qvoQHXEVdauD9qxbDQrdv2frfC45py4rnLuC%2FRWnp9%2FTlZcFWQtsN0WJzzwpw8x4Tz5EfK95f4hTjccEXJt1tzL654Y44AbVze%2BmkD7NQLV%2Bi6jGxPm1jrwGe07PoPmsvc3ROQt%2FpQMqtYwA1cB4mlUaV4w%2FT40yLfcdzRnkMOG6lsQGOqUBD3xtUEi7WL1Z3XiCGxoJnNza0bUrBlLK4AwxYegl7qsoi%2Bi0Cu%2FLIh9VsVK64M8wbGfxXxY1j3zB4gwaDOyei225FsI%2BWCKGCWi1Z8RpmpEbAVgdmX43WBs0ZC5g75KxDXc4XWZ1tUm1IekSuBvVlMnlCVrY13%2FbiGPGCDurdIAimoFOeQ83G4HGSDEjMSS4jPoGcvXfwJtJREoVYbghBUjJa1Ix&X-Amz-Signature=2269e4ae227806b1994043bca20a39b935f7b29408cadf0466ce2b98c867edc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHABLQV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDTZbK147JPGJ54LiuKnfdiptLIpD%2FgoA%2B4yFnyfC2eBwIgCqrKrZMUkIYRm2rvS%2BlE00rt4QsU1nmUoCNXSKBfQPkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCTlwT1SQDwvyqmE2SrcA%2FBafHlnS5qSm0ngAeR43uPNpZ8PxXqbFGK%2F8Tntf82q%2B7xLXTjcTGli0hzGCVw3vk0RBeaXoOyAVu6WUISYoBW45ytmiCdM689Iaf2mxBbOmg3K23vQCAi2AVmuxLpst0bZEPUZ4g8P2BbDO2K8bwtxRrMk8JHIxXY6rmki1u4uezhuq07abcY2p3GODrgFS9Ih0shA0YzQSB5uQBsCa1281Gu6N8babnSpMjxlDixsm%2FsJ%2FJDZCD4W8m3hqLcluFlU07b6lXhIL1GsN5bg%2Bf2%2B%2B8mcxsKHnbFYj230RDBG1pJ1Z%2FgKCYweUPhOenjKOzZ1m63w5ncKsbyMAy3iC22WfCG8b4hvDeTchWLl0zvQOzqxz9WvYGPv02kr%2BuzGtlpMu4PxqDhc7Dyb4IJdozwAGZKT0FS2VH6eNG8v7%2BbaJfI95Dhe8au9u%2B1aSzglvCXJcP6urcw1%2BAsNMUHnu9Gxe3tux3MKdI4mgM5wV2wAYtfqiYvsuL3RJgg2nkrwE0ZKhLi1gyjSei1TsDtH23PZ0CV9jJ791mV1gaDJVmH81taaWS2za69LqxzkYqGoAt4nJI8Jur9Bg6Ak7kppAO9QM13blFQmQj8sdWmFaRDH7mjdm8Lp%2BEOjgFQIMMS6lsQGOqUBdY3O1A7teDjjG2CbEBghKIltYu0TAOwVWVPfZT14eCvmVZcT265aArAHFQ93KKLqV4MRy4%2BrSB8r9zOJ45HsADfRDPXVBN507q5%2F%2FcBzq5n4BgDDx54yoaZyKCIE6j1%2B0iwrttaqJwOPlsQoyL4%2BUa7iupw4EYjmzEgqo1rungZdIWcaHWlb61LFXUUVFIglNgd0DjMj0ILVQqm0EQLmJMPH71kT&X-Amz-Signature=ee3d31c7b02c4458f8c0389678db0b6fb91893639ef9b3b7af30c439f50b0df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASUJ4AT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDeksrSxgPZ9vrxzpNsZVj9IuJB6VGcKM5ma0f0nmxD5QIhAN%2Ffo7FaU4PbmKxUdE8c93k8BlA8uqV31zLw35PqoejSKv8DCG0QABoMNjM3NDIzMTgzODA1IgxT%2FP55SQRDjQvhoLwq3AO4NmpCxWGpPfp2w3f1RVyFoS7xcIJMKF%2BifW1dhhqNfTpDuEpAAciQ9A6KD2YlRJoNCuV7goerG4EEYw8K1fZAGVxWCO4GifnY75LGnLu0ZzH%2FY5Mdo6sa5SmAuSvH9akw0GVHXxFjm7YBgiJACQ%2FMDGAHAUBiyE9Ow%2Fncmg4pG%2BPQ%2BH9FyJqfRxzlrbGn5xYT3DXjCaFYHC3ps5AdQZab%2FZiJ%2FxHPrRY41VUzoz3CBl2OdXpXxs1vo7kANs6jvvOC2%2FzwBc%2FdVXcEB5sXef%2FdzvQGL5q8kOF08l4OWQv%2B%2BE6DXIIjoTDDhAe2e8aEEyuyttDzIlsGskJSqMXrtpDIu5g%2BTe9bwAX5Vcv8RgvwRoAjl8Ac9B155PlhMwL5wcUued4XvDJTqqytTrcSLYgXasaR4OiTMkMUC36JyRkGK9fRlObYoglc1zQUrdwd2I07sN8Ybghdst3UVKgaYdV8gV%2BK300fNV%2BNwipH%2BOuQ2TLNVI4SLhXOWLbUWMfGEuAzHp%2F1Fubx0ZL1yRyfWOsg8tGVVzWHXZ%2FrcYscnFwe1OCSeuXly3dFJhkHKnrrL%2B%2FqiqnJb%2BGaZDIJ%2BP2cwjjZDWtGNWgdsv7gnLpP4SL9JEnHrSQO4%2BLqx%2FxzNTDpupbEBjqkAbpO4ZziO0icMnXpYVjh0tk53pFFsXL2jsUa%2FdRF1kcnQSqb0EsSrGXgalBArWixe5aWqMu84pnn8d6JGfT42zE3uNfG%2FDeHfji695MtvUlNcnfCVvimAkbumrFcpu1RGr%2FjftyDLS8rpWqbPxr3yA2NbNomVtJlLKD28dgB9XO6h%2F5%2FMUatzeCftWBaaJZ6GQ3MTJ5itNHp00xlA6sZPbCoBKbl&X-Amz-Signature=04b7e6e5abfffcb4b7233c237f5f2bd62200a8cca6c4e3c59575f5ed9fd680b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
