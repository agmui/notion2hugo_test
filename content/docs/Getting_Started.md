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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5JDZED%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BoV45BmWoO3zoNW6pZ%2BOmvri6A0JjlnvZMVY%2BeATLgIgAJylU9EyHUDhffwLpxfIyZeA%2F190FM%2FwHcKwi4ekrkkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLxat3yFHwi8nH6ogCrcAziUMpRUV0NuJsGrr7yvSkxvN9SBpltIDkCyIwwUaqOrDJIC2wjZwWKsNoAO24U0UHJYJgJqeCTWub186xOBogOGDm%2FJnXfdbc7nr%2FzJzodfAzNsFc3rDakgYVcuHV15gJ3ezOQaa6TAENTc2cl2qVJcAGQC2yw%2FtwlQnH3VAW8%2FsWPuq7LrDlB9CsTkILM72NfS3d0DptTHK%2FDPjwsbw%2Fk05SsrRQMYnknBz%2BfoBwKAcdVrsXjthhf111aFztJTh4sulXlkDASzjpicAzaJWyMGSetTNcaEgngvELnuuBjEj4PvCUha2cEw60gmwvTxNubsqiufXuCX%2BL48Da5hcdqAgq72B2Mw1DjyKcIVMB7CZ3VIlXn%2FfKUfKq4KWNC7sAQwEd6gxgo8X3xaFcE6koOGMjo4RnphMLE4puOkubHcugH2OR%2BCcorBEb6Yc2AncV3JHy2Jd02n6TpwTn4XzPBT4KQQ3xbk%2BUVrlyPIqLPZwVCnNkhjBvyH%2BKPVBShhs5aqL61lalk3P3SQ3PrB8J5DkeeyqmjUR%2FQ%2B2im3L1A6NnF9MD8yuzryydsXX%2FG6dCrWeO0bfXVw9cXkkuwkCocEk%2BEN5T%2BkHn6nwVk6tmLYVXkQNtSvg36faZ6eMKL3%2BsIGOqUBpXXXTy5AKD7UxLvK18PRKusWU3KkEtlUqV8l04BXMJCDQJvj8xaVHVHfO%2FWcgd4yUioCoeNA2zxu%2BtiAHZipnJGjvFdGyEMpyV58niEAWCWE88hIee2OrkuIny7R%2BqSocxGW0PsBJ9WrwmpelrMdldGUlCoo%2FxeGDN4xQ9Ia1C2Tb7efLiFd2S022tC7cKZv%2B8wlDO3EwEMQ%2Fk8ofooRURy1PaYr&X-Amz-Signature=b0898a77002945a58f9d8de59c7ceb0b347d744c1730076cf1bbdef3d6402ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5JDZED%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BoV45BmWoO3zoNW6pZ%2BOmvri6A0JjlnvZMVY%2BeATLgIgAJylU9EyHUDhffwLpxfIyZeA%2F190FM%2FwHcKwi4ekrkkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLxat3yFHwi8nH6ogCrcAziUMpRUV0NuJsGrr7yvSkxvN9SBpltIDkCyIwwUaqOrDJIC2wjZwWKsNoAO24U0UHJYJgJqeCTWub186xOBogOGDm%2FJnXfdbc7nr%2FzJzodfAzNsFc3rDakgYVcuHV15gJ3ezOQaa6TAENTc2cl2qVJcAGQC2yw%2FtwlQnH3VAW8%2FsWPuq7LrDlB9CsTkILM72NfS3d0DptTHK%2FDPjwsbw%2Fk05SsrRQMYnknBz%2BfoBwKAcdVrsXjthhf111aFztJTh4sulXlkDASzjpicAzaJWyMGSetTNcaEgngvELnuuBjEj4PvCUha2cEw60gmwvTxNubsqiufXuCX%2BL48Da5hcdqAgq72B2Mw1DjyKcIVMB7CZ3VIlXn%2FfKUfKq4KWNC7sAQwEd6gxgo8X3xaFcE6koOGMjo4RnphMLE4puOkubHcugH2OR%2BCcorBEb6Yc2AncV3JHy2Jd02n6TpwTn4XzPBT4KQQ3xbk%2BUVrlyPIqLPZwVCnNkhjBvyH%2BKPVBShhs5aqL61lalk3P3SQ3PrB8J5DkeeyqmjUR%2FQ%2B2im3L1A6NnF9MD8yuzryydsXX%2FG6dCrWeO0bfXVw9cXkkuwkCocEk%2BEN5T%2BkHn6nwVk6tmLYVXkQNtSvg36faZ6eMKL3%2BsIGOqUBpXXXTy5AKD7UxLvK18PRKusWU3KkEtlUqV8l04BXMJCDQJvj8xaVHVHfO%2FWcgd4yUioCoeNA2zxu%2BtiAHZipnJGjvFdGyEMpyV58niEAWCWE88hIee2OrkuIny7R%2BqSocxGW0PsBJ9WrwmpelrMdldGUlCoo%2FxeGDN4xQ9Ia1C2Tb7efLiFd2S022tC7cKZv%2B8wlDO3EwEMQ%2Fk8ofooRURy1PaYr&X-Amz-Signature=f32416cdd36ffe6dcaf24df1047e9a824d825d66c77b3865da8ce62e2f04bb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5JDZED%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BoV45BmWoO3zoNW6pZ%2BOmvri6A0JjlnvZMVY%2BeATLgIgAJylU9EyHUDhffwLpxfIyZeA%2F190FM%2FwHcKwi4ekrkkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLxat3yFHwi8nH6ogCrcAziUMpRUV0NuJsGrr7yvSkxvN9SBpltIDkCyIwwUaqOrDJIC2wjZwWKsNoAO24U0UHJYJgJqeCTWub186xOBogOGDm%2FJnXfdbc7nr%2FzJzodfAzNsFc3rDakgYVcuHV15gJ3ezOQaa6TAENTc2cl2qVJcAGQC2yw%2FtwlQnH3VAW8%2FsWPuq7LrDlB9CsTkILM72NfS3d0DptTHK%2FDPjwsbw%2Fk05SsrRQMYnknBz%2BfoBwKAcdVrsXjthhf111aFztJTh4sulXlkDASzjpicAzaJWyMGSetTNcaEgngvELnuuBjEj4PvCUha2cEw60gmwvTxNubsqiufXuCX%2BL48Da5hcdqAgq72B2Mw1DjyKcIVMB7CZ3VIlXn%2FfKUfKq4KWNC7sAQwEd6gxgo8X3xaFcE6koOGMjo4RnphMLE4puOkubHcugH2OR%2BCcorBEb6Yc2AncV3JHy2Jd02n6TpwTn4XzPBT4KQQ3xbk%2BUVrlyPIqLPZwVCnNkhjBvyH%2BKPVBShhs5aqL61lalk3P3SQ3PrB8J5DkeeyqmjUR%2FQ%2B2im3L1A6NnF9MD8yuzryydsXX%2FG6dCrWeO0bfXVw9cXkkuwkCocEk%2BEN5T%2BkHn6nwVk6tmLYVXkQNtSvg36faZ6eMKL3%2BsIGOqUBpXXXTy5AKD7UxLvK18PRKusWU3KkEtlUqV8l04BXMJCDQJvj8xaVHVHfO%2FWcgd4yUioCoeNA2zxu%2BtiAHZipnJGjvFdGyEMpyV58niEAWCWE88hIee2OrkuIny7R%2BqSocxGW0PsBJ9WrwmpelrMdldGUlCoo%2FxeGDN4xQ9Ia1C2Tb7efLiFd2S022tC7cKZv%2B8wlDO3EwEMQ%2Fk8ofooRURy1PaYr&X-Amz-Signature=3c8d4d3792a6c964a688a706416ab9c5cde6ce278a74a651230beb7a80d8cba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3TL6HN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2B3S7b%2FMuWhxkTZrT%2BUlpqf%2BYgMu8edlWFL6N1KC0TIAiBcDdZmYUoRHCE3zmi5XLsFUlqjKDuQ%2BFk%2BR4N1yi5GgSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMNZKH31gmgWIEXqU5KtwDqfs5ODumlO5svzCsh18b%2F%2B5szeTRyOsba4n51Sj49gq%2BWkrAZimpps3UrMWqD3gjMTi44IAM5Sscl0PuO3j0KntI0H3PASXsuAVBYdJaKx8HdGzB9rPCE74GmHWOyEM336l%2FltLwyyC1WRO9WyE22jRJ1q8Dz3N06oS0WNJKbcARw3opsTiSSbIqcGb3ZM7pFLAdmJhVQ4wFaTkfzG24eYQ01mKYicuaQAGL8Yd9xdo5F0a1LHsZ9lk7yq3%2BnUbZAk%2Fb5s3%2BPYirBJXFRvpCwVwMvFUxZZMghCxjRgDlgVwex2lWKt0JmC5j5bR7BCYJxgmXAs%2BeVGs67X0XCuLioYaEh%2FGI0Kj5utHC%2F9Za0hiq2qC4uo24xIS7olfGU7sjNczhmm4gMDCzxgLdCZToB%2BpHvcrf132BSF2f8EOkICmL02RVfF30gip09S%2FtJmsE0vBh2b%2FhgA1KPqt9STa0OJBrUvffW6f1bpn2UpeUErUAxeYRmhHHCk1f3807HDUC2tMYhAUkEPj6USusk%2F25t20Nj0URY6MfCUIc%2Fn3jcTYcDIOKTQT%2BVOmm6BY5OIYk2dNiqAreqwX%2B7aqIiaom%2F2eo48pJn%2BEmJpbHIJk4QDbdZ2UubrQVYs%2B3kYcwqff6wgY6pgHph68K%2FroWiqKz8g1eVsIP2mdrkj%2FKIDFGkiN1y%2BHnyCrGz5309thTLkoPBlVnZLATt20RfXRrl%2BjJg6bzkubFtNDfYPjU0SLsCpmulXdFL9GVw48ZpyQ%2BL5co32bPVQtmZNsDvIOXREcTRePyObxYwkHcY1koaEO7VvKnaplg3j6vDT%2F2Nb9rwLCbEGHq4Wbk%2FVZdSWJPq%2F418ERwfLM%2BM%2FIEPXjB&X-Amz-Signature=44aafe378498ee623dabcc3f046960490dd3c584037244085898f47a3c7070c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJTAW3T%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDG7iErGV1L25x%2BBFYn1Wq%2BTAYJDuC5w0CqSoP2%2BGpSAiAHkiaGmWOU3ge6yfbLXlvD2KNF8YHe1uzWUcum1KMH2yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMjYFMjiTpvpevLYw7KtwDFTiRwVUpDoca7PQq4pV10nNH%2FeO4gGS6udR4HbAn%2FZnpXCQp1XD67MAiVE8vzm4ajDOlmteV30K38EZpLmiAFw%2Fh7Ogwuzw0R3EnO22bz1Zbvi2CmHXl9C7aRlD%2FOPjb%2BOXNscrELhiHdcAXeXt%2BESazL3Pb6MIB6lO4WpherU9HWW0qmJCEWPinye2Rxz%2FYyv8LqtvL%2BhueQk4oyU7iFbJrDuGMRXMVCfen8dJtcmXwC3bqESjyONXvJajMT7KM7%2BcCbapDzYz3%2BuUdLeGuI4WrR%2F%2BuAZQXokrF9CCUeqdO1aQlbo9iwf0R4qQtMb7VMq5538QUou8c3zFIJ%2FBPcFnfdGT7R1hBLzmssuPFzx%2FshR%2F71ekoQBr74esOGw%2F5SRSqnb4QLDLylDrnmg2M4hxKtpU%2BohY501WK0%2BXcUI72i2qHpRFbQsh6mcrKOVXjC4ug%2F48ih%2FkwN2CMDPpHElx8n%2FJUWZOVZjqAGsJsoSltifky3upFo74jqBVO3E4PSpFbE54DGcrSAL%2BT4p4UToCbRvYWeLWUCmCpDt7xPrEGg%2FegvAw5vlUtfHsTrvjNcMH1NizFgTGkVwPJZ8B3sOh3QMeNoQqsoxpkESZGqhR6oXObFrM6w02s4gIw%2Bvb6wgY6pgFzi3rD6DmIls%2F741viPzD538ANGBQ%2B47UlI9BxgwAKUjKx68jwC%2F%2BouSeRpDMb5qA0N1fcbZXKEMWnRwtclfOaIIrxFoKVJOfLuH6Zk0sQwtMRzTvjf4caBfOenId3w81sHMTggzzXcBxUxVaYko%2B%2BkfK63YzAJkJ6Mt6Rorr3KkLxUrsaBdC4SwAWOYV%2BmA5J7Hn7fx9GsenMunFmMAIXWMlm8LWs&X-Amz-Signature=ddaf55c07043e745317a217de7a4284986072a343c0ed6e141f4111a893a2712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5JDZED%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BoV45BmWoO3zoNW6pZ%2BOmvri6A0JjlnvZMVY%2BeATLgIgAJylU9EyHUDhffwLpxfIyZeA%2F190FM%2FwHcKwi4ekrkkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLxat3yFHwi8nH6ogCrcAziUMpRUV0NuJsGrr7yvSkxvN9SBpltIDkCyIwwUaqOrDJIC2wjZwWKsNoAO24U0UHJYJgJqeCTWub186xOBogOGDm%2FJnXfdbc7nr%2FzJzodfAzNsFc3rDakgYVcuHV15gJ3ezOQaa6TAENTc2cl2qVJcAGQC2yw%2FtwlQnH3VAW8%2FsWPuq7LrDlB9CsTkILM72NfS3d0DptTHK%2FDPjwsbw%2Fk05SsrRQMYnknBz%2BfoBwKAcdVrsXjthhf111aFztJTh4sulXlkDASzjpicAzaJWyMGSetTNcaEgngvELnuuBjEj4PvCUha2cEw60gmwvTxNubsqiufXuCX%2BL48Da5hcdqAgq72B2Mw1DjyKcIVMB7CZ3VIlXn%2FfKUfKq4KWNC7sAQwEd6gxgo8X3xaFcE6koOGMjo4RnphMLE4puOkubHcugH2OR%2BCcorBEb6Yc2AncV3JHy2Jd02n6TpwTn4XzPBT4KQQ3xbk%2BUVrlyPIqLPZwVCnNkhjBvyH%2BKPVBShhs5aqL61lalk3P3SQ3PrB8J5DkeeyqmjUR%2FQ%2B2im3L1A6NnF9MD8yuzryydsXX%2FG6dCrWeO0bfXVw9cXkkuwkCocEk%2BEN5T%2BkHn6nwVk6tmLYVXkQNtSvg36faZ6eMKL3%2BsIGOqUBpXXXTy5AKD7UxLvK18PRKusWU3KkEtlUqV8l04BXMJCDQJvj8xaVHVHfO%2FWcgd4yUioCoeNA2zxu%2BtiAHZipnJGjvFdGyEMpyV58niEAWCWE88hIee2OrkuIny7R%2BqSocxGW0PsBJ9WrwmpelrMdldGUlCoo%2FxeGDN4xQ9Ia1C2Tb7efLiFd2S022tC7cKZv%2B8wlDO3EwEMQ%2Fk8ofooRURy1PaYr&X-Amz-Signature=4811ece5dd3d2f612046a460e8ef21a3eee563e937e6b97330cd27533644b3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
