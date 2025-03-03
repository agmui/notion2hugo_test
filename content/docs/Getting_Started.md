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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OH6L3JN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp7CI8cLJpOo9vo05%2FW9sZD5NXowOVgXDOGeGNmZeXAiEA2tmjJo23ZwuWFKOdAXH%2FaoEig2OdAL8hbrB0b%2BSh5PEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGFNfsuB9s9SgfiRircA6KdiflQFMl9S%2FPL0FwvuY9Fhx%2Fo2LtqQDb4D0hEPox1tmOnz1faI72cSKUrn6kH6D3aG2kGxWUEVeWuEMjuX4tcN39Ob%2FSGw0el2LF5RX2rIF5YZldrfqtjqL6jF8y0dxMRHK%2FYUA88BZ9Q1hAa%2FzG%2BobZvx835LG7d3d5f49Zyt6TtcQD32JpwqyFDqBC75FhqP5adljYi%2FpTFGTOr5Sla4qdMRBH%2BkUPC0UcEv7UDcEizhNtDCbLrFGaPZUKK7VJvQBOd5aZD71k3rQoWs0UKosDvd920HX3P5VU0yv36tASh4hQuTahw5V90NR3WKqXJ1bCFzoaVmx7tlB09FRA6cRwdstDjOHt%2FACkQhZutljUVLw%2Bz1axjUlmS6%2FRknTIMeiG9QfUiQiCRuU3qrogCdH8bk6rx1PhrvBy9dSn5vC1eIYvAH7x%2FMreL3buHbm8X3Kjd2sARt2LKkdgLnyb%2BDZG6DQ1wpiuuub4m2OsAJKWmDSuyeZdbMNQVEzNcMNxB0%2B%2BCB6jsbupg5JFZzQYSJhpD1RkR4G1XDu4AXXAN6MSzD1a1cbCC80jYRJlqTZ91A9vy4BPQJ490yngGGppu0QQTE%2FN902AYmgGL3wWiO9KXP4V1KrwnsG4yML3ZlL4GOqUBj1R00Uzipv1h94faBDXb2w34fIFMTKXD2Bq%2Fp6fcVZI33qO%2BS6mqZgmCneLPKLlfKzQFaT4HL9fJZcLFUddls9S93xWZan6WnqcGnNcX4Kj0E2JtEdzhlHkfBOy4UPzP2206ArUXeVEEkX%2Fe%2F3LRUkyzwwgsZe6v8%2BmmE0zekjeHCeofmXFaOmTfyEpQNa4OiUrIkMT0U5z43r6BYnE18Guj90pI&X-Amz-Signature=5a3dc022edca4a4f7df1ee16055498b23dbd8ac2901607d38b8d686cc9b5b5fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OH6L3JN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp7CI8cLJpOo9vo05%2FW9sZD5NXowOVgXDOGeGNmZeXAiEA2tmjJo23ZwuWFKOdAXH%2FaoEig2OdAL8hbrB0b%2BSh5PEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGFNfsuB9s9SgfiRircA6KdiflQFMl9S%2FPL0FwvuY9Fhx%2Fo2LtqQDb4D0hEPox1tmOnz1faI72cSKUrn6kH6D3aG2kGxWUEVeWuEMjuX4tcN39Ob%2FSGw0el2LF5RX2rIF5YZldrfqtjqL6jF8y0dxMRHK%2FYUA88BZ9Q1hAa%2FzG%2BobZvx835LG7d3d5f49Zyt6TtcQD32JpwqyFDqBC75FhqP5adljYi%2FpTFGTOr5Sla4qdMRBH%2BkUPC0UcEv7UDcEizhNtDCbLrFGaPZUKK7VJvQBOd5aZD71k3rQoWs0UKosDvd920HX3P5VU0yv36tASh4hQuTahw5V90NR3WKqXJ1bCFzoaVmx7tlB09FRA6cRwdstDjOHt%2FACkQhZutljUVLw%2Bz1axjUlmS6%2FRknTIMeiG9QfUiQiCRuU3qrogCdH8bk6rx1PhrvBy9dSn5vC1eIYvAH7x%2FMreL3buHbm8X3Kjd2sARt2LKkdgLnyb%2BDZG6DQ1wpiuuub4m2OsAJKWmDSuyeZdbMNQVEzNcMNxB0%2B%2BCB6jsbupg5JFZzQYSJhpD1RkR4G1XDu4AXXAN6MSzD1a1cbCC80jYRJlqTZ91A9vy4BPQJ490yngGGppu0QQTE%2FN902AYmgGL3wWiO9KXP4V1KrwnsG4yML3ZlL4GOqUBj1R00Uzipv1h94faBDXb2w34fIFMTKXD2Bq%2Fp6fcVZI33qO%2BS6mqZgmCneLPKLlfKzQFaT4HL9fJZcLFUddls9S93xWZan6WnqcGnNcX4Kj0E2JtEdzhlHkfBOy4UPzP2206ArUXeVEEkX%2Fe%2F3LRUkyzwwgsZe6v8%2BmmE0zekjeHCeofmXFaOmTfyEpQNa4OiUrIkMT0U5z43r6BYnE18Guj90pI&X-Amz-Signature=21992441d6b019b786295d57b8d3fc2dbac022f86afa69b0d373ffcb52a2f2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEQYXGO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHFyT7c0G1B1W8dNMgidc4%2FY3YBP4kBecs5cVVqiKoqAiBxiinA1jMD31zC1PYekh8At0srWGk%2BiVla%2BpgFqO18ySqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpb3Xc%2FWx48WoduynKtwDf2qk8gjjsZUYts7x0VMfSm1iaIQl0AgKbMePLeDAH3yviEaOzQwpgHhclsKZOHPfkr0HuqpYElwfCb7SVCNpSV036LqLgNpe27an8splj6VUxmixiRg1YQc2CQ9qt0tQLodNR9RDTqQMiwTHzg4qkelo8cfefowBVGfw4CIwaBugC%2FNwaZY9dEokaN4nB0ybd%2BtT8SnWDvjj0Yoe9T8ST%2Fuc4tDeir3K4Uuwo9Z9zSl3X04YnWA92nh26isZwykofmGY26P09czetNsxNg6wbmQ%2FdRtpSCF5Q7t5Dl7z1AwXaQ06wC1o1C56ERYFA8v2NIMbaVcMqhEOD8s%2FeDfw4Rf0IqfHPgMra%2BKmd%2BmVOMnfxVwBVvvfpeiihCV9Sp8TaVqtsyNKXukr0lo%2Fn9dal90iMBESdiPalySjSnTm9AcLn9pGt3Ial8w6z4WpR7xGm1BIvwY%2FZ4zddE%2BZalmvb4tR3MeuVOvn%2BV1atF%2Fts1MPT3N9J4xBv8u0HbqoDO20XJ%2F7%2FFWT6jrY6WLRx80PKNPp2OCAVHrhIZSlhx%2Fh2bfgXvWpZNow%2FZNdb8bKPQcxyIYI5SIKj628ay8vwzYZQPTyz0qVZUsukmIsoPgD3UWp44hBqT6HCvarDrcwmtmUvgY6pgHe3XvvfNxQ2bh8jCZ6fgtOTeNw6JEYSho99liZadyO%2FE3Xzuu5fVyUPZHz4jDcNRVaIzHg4Tm7z4cVjWIvilzZTCc%2B%2BGl9q0MNXww7h4epMccAKzeweRe%2FvkqvtIGVjYLrkP51ZQqk%2BFgPZHTQjuzlRRWBL3BErGJTa566o89M6ckZ1kX3%2Ff4Cq9DJs990sjnITkjIGO4mPHF%2FNU80kLLMy1dgonSw&X-Amz-Signature=21f01748d01d5741052fa962628160c27e93cd6bbf0e29b0798b797857141a63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473FNDZR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXayMzJqQbQ7cBpZVO7m5bPPlmR5omF8En4tU6DZXdOAiEA5WDZ%2Fp6QLwBAb%2Fv6gj5sLhQQmreeRan2HQfo4JDdWkkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRGICSQY5tPSruchSrcA%2FSFHiKHykxWTq%2BUDql9sX6ebJQkOjLAHrX7sOYKKHM9BUhh7hF8xke4zxqrsf4JpeTR1rHsBh3C%2FkRHSBY9tA1SMl3V0Yp%2BYJulsCPV%2BfMXFqVb0kly03Dx03WRlGSz1v5OQm7zReAjDiBEciaGFsNW0tkq67LCku%2FF2bNJCjCRcolfyBlPTHG%2BuBFoLRaYKYHzOVMuSYDEKUVbyUej0dahO0qh17yh8Gdk9sJWb65B%2BvoJ6wnaNAqXY6c7hMeIlTo%2FzEZmCfuFvgnJWdmGAUZUBMyMCdT1MB1zEioqzlo5pMYsruh9x4stqv%2Ff3iLfasU6bNEM9mEscjBQTssySwITinrp1JIng1p9E1TiwerMqYYHsCuy%2Fa59XfOWmn2ZHbrKzLOBeIDdaqY4ZDdmMnTtlsk7oweqKvSg1r8LjLIEqft%2BrBkJofhm08NNPdwgEcAXiib2H%2BRXsfzUI19RM6qm%2B0I1lTpK%2BL%2F2%2BjqX3zXRH7nL9mYzTab12oXTu8wfc7VIa3nuQFHAKOqaEKgSNuMd9gp9FRSIarz2O6fZDQwepfhbCGL4KdeFM0%2BxxgcNZ3QDWZv%2BlF3Z7d0KgwnijY7MrMxpSv%2FpI8%2FXUXQ92k9VL5BbvK9Mzp0i5mt6MIfZlL4GOqUB5WDQWNjuln%2BtL8uVjal1Pd8sHiZvI3SynNm6epAxK5gSwIDcApwhSKhcGQ5R%2FDstIA%2BXlJwUCh9Agn3Q6khsPv4iGPfqjcgZaNGAyO77530Iq%2BTsoCIfy4%2B30yVH2%2FA1uvJJcOGUnc0HVTMKaiyqB0D253KQZIHre0MFHeOzJaXC4QnoL4SKUJoLduSiiR3DGRDoWMb8Rsjlp9cgvpMGaoA4%2Be9b&X-Amz-Signature=ce154691e138ee27e1c09e4ef881baf5d17d0915b4feb3cf696c67eeda398dab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OH6L3JN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtp7CI8cLJpOo9vo05%2FW9sZD5NXowOVgXDOGeGNmZeXAiEA2tmjJo23ZwuWFKOdAXH%2FaoEig2OdAL8hbrB0b%2BSh5PEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGFNfsuB9s9SgfiRircA6KdiflQFMl9S%2FPL0FwvuY9Fhx%2Fo2LtqQDb4D0hEPox1tmOnz1faI72cSKUrn6kH6D3aG2kGxWUEVeWuEMjuX4tcN39Ob%2FSGw0el2LF5RX2rIF5YZldrfqtjqL6jF8y0dxMRHK%2FYUA88BZ9Q1hAa%2FzG%2BobZvx835LG7d3d5f49Zyt6TtcQD32JpwqyFDqBC75FhqP5adljYi%2FpTFGTOr5Sla4qdMRBH%2BkUPC0UcEv7UDcEizhNtDCbLrFGaPZUKK7VJvQBOd5aZD71k3rQoWs0UKosDvd920HX3P5VU0yv36tASh4hQuTahw5V90NR3WKqXJ1bCFzoaVmx7tlB09FRA6cRwdstDjOHt%2FACkQhZutljUVLw%2Bz1axjUlmS6%2FRknTIMeiG9QfUiQiCRuU3qrogCdH8bk6rx1PhrvBy9dSn5vC1eIYvAH7x%2FMreL3buHbm8X3Kjd2sARt2LKkdgLnyb%2BDZG6DQ1wpiuuub4m2OsAJKWmDSuyeZdbMNQVEzNcMNxB0%2B%2BCB6jsbupg5JFZzQYSJhpD1RkR4G1XDu4AXXAN6MSzD1a1cbCC80jYRJlqTZ91A9vy4BPQJ490yngGGppu0QQTE%2FN902AYmgGL3wWiO9KXP4V1KrwnsG4yML3ZlL4GOqUBj1R00Uzipv1h94faBDXb2w34fIFMTKXD2Bq%2Fp6fcVZI33qO%2BS6mqZgmCneLPKLlfKzQFaT4HL9fJZcLFUddls9S93xWZan6WnqcGnNcX4Kj0E2JtEdzhlHkfBOy4UPzP2206ArUXeVEEkX%2Fe%2F3LRUkyzwwgsZe6v8%2BmmE0zekjeHCeofmXFaOmTfyEpQNa4OiUrIkMT0U5z43r6BYnE18Guj90pI&X-Amz-Signature=6b29da01b6132f03c3f28d0474a366ad83bdfe8c3b247341f61fe59d9d6af8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
