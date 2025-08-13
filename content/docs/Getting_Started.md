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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZILWOAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42iaFNRG5UGipVSoT%2Bj1sHSCDBUJgAq0cSdcrezerPAiBAxMtST1w%2FXUsdZS1tL8QMoO3nWUU%2Bu7ODoh7Qh6EvgSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMmeC%2F7YlbJHw76fjyKtwDf85m70dKUpmQnd%2B5IyFreFaIEVrAvdi06WJJfJKh7EF7MVUalw0ZFQOCFkkc07tPlwTWwbIBCk8sRS2u6tHzr%2BkA1d8Dv7y1rJfkB5TEMcjvD6W9SOY%2Fbxj455euk6lqOHlPvhSVI8simTjqbDkjwbF7O7vE4q%2F6bZonl4sxk%2BkRBPSNFQ9NwkdSmQmMlFtY7Li1hX5JRf50bW7OlDDHt1KlR3L%2FDuEN9HuwBdsKcJJSvSxcVy36VpFwCONweEuiFkdaakWcQwNzdoFtOrzl5p9yIARWuwMRnvQY%2BKYpkuI8wJBCKdIjoQQM7ML%2BL%2Bjopf4Pv58g9r2Hre5f4XHdJe61aDLqaCC7bc3qfjZb2I3L6gwaLZXnq7L%2FdGfEY67iz2fUWKYtxCIc2SCPdB%2Bg0JRv22l995swNm%2FThLqnsCgfhU6sPybcCgNjqd27Vi7aH6iYh3Y0W3Evr5PcXVJSN8pSrjdGSY7XpELMsLF6PCWoOH2oNA5%2F5fWBEOZAabZ5pGkdlIg468CfzNfkWepZlFGfv6LAEWOi8NKdcaxve7qv9Ye2J54cgpnggFBl1v3zsqFYIlymN94N0CCBQlCS5QXzoxqIvQBAAhmA33t6Eew2LuyA%2B4h2hUKSTZIwoavwxAY6pgE3UsJAGqZFqXspt7uJrOqjlE9kdJuIyhtCTC9z9WHIqwDHPSswmCL3WVL6hqApowMrm75vJk6uys%2B5odCUv5eXbUGZZeA6TgyQslJ9Orcv%2BQYUfmVEN4SXfjcrzTc25aS%2F6oRMylY0OatrqvonNNUYo9QlxQDLanrL74Cak8xDIFTvXj3neK9lg%2Bs3QSS6qPgxQVWlAPZDpT%2BDcVc4R5fIzymDKPWz&X-Amz-Signature=a9bd803df805f804e4b7b2e786dc192d5646196e0010e3c50eaff85a5f744b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZILWOAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42iaFNRG5UGipVSoT%2Bj1sHSCDBUJgAq0cSdcrezerPAiBAxMtST1w%2FXUsdZS1tL8QMoO3nWUU%2Bu7ODoh7Qh6EvgSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMmeC%2F7YlbJHw76fjyKtwDf85m70dKUpmQnd%2B5IyFreFaIEVrAvdi06WJJfJKh7EF7MVUalw0ZFQOCFkkc07tPlwTWwbIBCk8sRS2u6tHzr%2BkA1d8Dv7y1rJfkB5TEMcjvD6W9SOY%2Fbxj455euk6lqOHlPvhSVI8simTjqbDkjwbF7O7vE4q%2F6bZonl4sxk%2BkRBPSNFQ9NwkdSmQmMlFtY7Li1hX5JRf50bW7OlDDHt1KlR3L%2FDuEN9HuwBdsKcJJSvSxcVy36VpFwCONweEuiFkdaakWcQwNzdoFtOrzl5p9yIARWuwMRnvQY%2BKYpkuI8wJBCKdIjoQQM7ML%2BL%2Bjopf4Pv58g9r2Hre5f4XHdJe61aDLqaCC7bc3qfjZb2I3L6gwaLZXnq7L%2FdGfEY67iz2fUWKYtxCIc2SCPdB%2Bg0JRv22l995swNm%2FThLqnsCgfhU6sPybcCgNjqd27Vi7aH6iYh3Y0W3Evr5PcXVJSN8pSrjdGSY7XpELMsLF6PCWoOH2oNA5%2F5fWBEOZAabZ5pGkdlIg468CfzNfkWepZlFGfv6LAEWOi8NKdcaxve7qv9Ye2J54cgpnggFBl1v3zsqFYIlymN94N0CCBQlCS5QXzoxqIvQBAAhmA33t6Eew2LuyA%2B4h2hUKSTZIwoavwxAY6pgE3UsJAGqZFqXspt7uJrOqjlE9kdJuIyhtCTC9z9WHIqwDHPSswmCL3WVL6hqApowMrm75vJk6uys%2B5odCUv5eXbUGZZeA6TgyQslJ9Orcv%2BQYUfmVEN4SXfjcrzTc25aS%2F6oRMylY0OatrqvonNNUYo9QlxQDLanrL74Cak8xDIFTvXj3neK9lg%2Bs3QSS6qPgxQVWlAPZDpT%2BDcVc4R5fIzymDKPWz&X-Amz-Signature=bddc248c65d543fb2e115eb5018d168e7976873c6306ff2d64006cda60f22238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZILWOAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42iaFNRG5UGipVSoT%2Bj1sHSCDBUJgAq0cSdcrezerPAiBAxMtST1w%2FXUsdZS1tL8QMoO3nWUU%2Bu7ODoh7Qh6EvgSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMmeC%2F7YlbJHw76fjyKtwDf85m70dKUpmQnd%2B5IyFreFaIEVrAvdi06WJJfJKh7EF7MVUalw0ZFQOCFkkc07tPlwTWwbIBCk8sRS2u6tHzr%2BkA1d8Dv7y1rJfkB5TEMcjvD6W9SOY%2Fbxj455euk6lqOHlPvhSVI8simTjqbDkjwbF7O7vE4q%2F6bZonl4sxk%2BkRBPSNFQ9NwkdSmQmMlFtY7Li1hX5JRf50bW7OlDDHt1KlR3L%2FDuEN9HuwBdsKcJJSvSxcVy36VpFwCONweEuiFkdaakWcQwNzdoFtOrzl5p9yIARWuwMRnvQY%2BKYpkuI8wJBCKdIjoQQM7ML%2BL%2Bjopf4Pv58g9r2Hre5f4XHdJe61aDLqaCC7bc3qfjZb2I3L6gwaLZXnq7L%2FdGfEY67iz2fUWKYtxCIc2SCPdB%2Bg0JRv22l995swNm%2FThLqnsCgfhU6sPybcCgNjqd27Vi7aH6iYh3Y0W3Evr5PcXVJSN8pSrjdGSY7XpELMsLF6PCWoOH2oNA5%2F5fWBEOZAabZ5pGkdlIg468CfzNfkWepZlFGfv6LAEWOi8NKdcaxve7qv9Ye2J54cgpnggFBl1v3zsqFYIlymN94N0CCBQlCS5QXzoxqIvQBAAhmA33t6Eew2LuyA%2B4h2hUKSTZIwoavwxAY6pgE3UsJAGqZFqXspt7uJrOqjlE9kdJuIyhtCTC9z9WHIqwDHPSswmCL3WVL6hqApowMrm75vJk6uys%2B5odCUv5eXbUGZZeA6TgyQslJ9Orcv%2BQYUfmVEN4SXfjcrzTc25aS%2F6oRMylY0OatrqvonNNUYo9QlxQDLanrL74Cak8xDIFTvXj3neK9lg%2Bs3QSS6qPgxQVWlAPZDpT%2BDcVc4R5fIzymDKPWz&X-Amz-Signature=7cd2133066bc6f85aade236abf2aa64c717d751d63c776be246a04ce4048b018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VF6TTVV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjC3vdDPFHlVNPNEvCUDjQsma%2FEVAXeAAmzndeGr9dWQIhAI9SOrkCr0sCRJaRMxjYp1MhScYgzPNmZUnYx%2BlTvbUeKv8DCCYQABoMNjM3NDIzMTgzODA1Igwkyy0soFYc8kn7%2BWAq3AMQsYjmKqPc4eEXKIFh%2F%2F0bEuMa9KZEFttxevkCckLepA1K5BUTXS3yMF9wSNN3Y%2F1mbguyzdo4iu%2Fwoo425bc2uvKve8AkJPsKnR1jH6idla7Y%2F3wR5Ze3OQBplww7POlazcSRQWgVPClHuBGHfJz184hQPjQkyg1K%2FRzFs7lqMaBfy1MyCCptfJQ8Uw0577xeoYtBcRUjFaF%2FfsqIkM0UZR1xfBVxA%2BY3n%2FUKgYg7VfWa7v5MX%2FMKeRmWKzf1xS9b6FwrQ7DtD3Q5lzBwYhH3TCn1eKZCVJ7WoH87aQBZ7cv4OPnKmeMG%2BO%2BRHWFebU8ywTS%2FK0D3F%2BsmpOF8%2BR%2BmGMDy6gWQK2sNTH%2BbBJgY1ztat5BLA17W1W7lUUoL91CD2k7itTaV573ker%2BiUlv5%2B7S69fL4QCPOFDNEWcT9G3LXLEi4xAbvZpR2WB4xewx%2Bo%2FllfplKYF7hxyrbTj9VWVgLfdCQZsK4VoVf6ERvzW7rY%2BtsYFiJVXMcwrzuDUBqxdnnpLNDE6gbgKjABWwwdnZO%2FXT5Q0D%2FV9dGZ5EzKh8t2N4dWh0m%2BHve5i2ncxHAUJDqizGGTbjexzmUQTgalT1Q%2FNsyCsZ2gxKspFAdxZ3JWEa6L2EpVwmqczC%2Fq%2FDEBjqkAX7HInCeOtPEcxIl1J9isYJM5mRxLcAHyiY8f480BUcBdmHDR4kA8IS9V09R8Zb9WYzOgPXRp5SMMT5eHR2dNKTg7XFeuC%2FQuoRUeCGhXRfrOjfkPIIoLf4j%2BdzS8%2BrYtl0SZdkIFFQZIKIuJ20o16KjIDnMb7n%2BbOz%2B4Lj5dQW9PiOgE8yxg%2FetA7JEfJ33zoeoQlVMEKvwwBMrpEk2P6nRv0ds&X-Amz-Signature=38d13559bdcd08e6dcd7ce2aace4e8648967641877255a898183bc067267ee75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIX6J26%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKjBERpHi7gx2F4yArXpc8CftVzcDbtgkI7dY06q9uZAiEAnrXJI%2Bp%2FesJXkrblvbz33XC5iaqU5otVQRLtn9h27bUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBRSfMyC5wywwuYT1CrcAyEPVZgbU8it%2BVDikHNbxKonUCj8K3r28ktTWNoPeC0cx2apN0g6srQzZEfqrsmsvAO%2FS4rW5%2FaumhxhKgWE3qCO9Xd8iUYTTjAZgVvwahLX0QbTIpmHds%2BPyNnE6fSU%2BKZ20SoqXzopVLcBiu9DLtJxftzDukjeACeIk708fZMyQXrsaa31yu%2BSNiBDv%2BhQ3gNdO13KnBFwhX%2BqUTlCXVVFT7pco3Iph4YfOUerHhGHYKhTemT63y6rV92x4lytj%2Fgqr%2BNO%2BPFa1nbiMxNfY4exxoQYhqP2Sktohzyj7i45ve8EU%2Fs9g%2FfCkJnn6IHD9YAMv7Qx%2FiMJBFgmMkOvUaRaRs7h3R8TgSNwdSvv5d7kf0iWIUUg7HgzFYo0lEGJhYhvcTMW4FvYXsxzOekfuglD3hrUMe%2By8lBi5f%2BUXgAZyvbCMjAPTlQ22EFCD3qlRgHpggDr9uC0Rwrw0Dl1PEq41f2yodaWNmvsPnvZoKQh4Uk22HvW9e%2FCNRm%2BVUDxyUi1CCsD%2BRaefZHBHm%2BuiWFb3J2mGcaY59ZOsLfdqH9E2eiKr4PwHPXy9FVzkrWqErg%2FJ8IKYwjH%2F1pxUqqgL9MFONq%2FTQ3WoKuwcNKiNXoK%2F27NKaCFzlEJxNKxMLGr8MQGOqUBj57JxRYiQH80dwoxqnnN%2BXzi7vUWXyje36Q931XfwjzwzOAkJJ5pvYBgx9AhJlYpJOzd6i2bdJiebOWB7eomUZTcwRYdTtIqukuqrVGzw%2FHESKvH%2FXr7px24%2B3ukqgoOhaRk4M%2BsvncOg2p7xbaSJGtD%2BM%2BuK42mm2701pr0s3Cmzd5uPlWFjASvOxHgebXmXU9exf1%2FwG0HcgR3NnL%2FdQaJ6n7E&X-Amz-Signature=fc8f2734cef103d83a42523614fc7e86304ece637d536293541d24a349f76263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZILWOAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42iaFNRG5UGipVSoT%2Bj1sHSCDBUJgAq0cSdcrezerPAiBAxMtST1w%2FXUsdZS1tL8QMoO3nWUU%2Bu7ODoh7Qh6EvgSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMmeC%2F7YlbJHw76fjyKtwDf85m70dKUpmQnd%2B5IyFreFaIEVrAvdi06WJJfJKh7EF7MVUalw0ZFQOCFkkc07tPlwTWwbIBCk8sRS2u6tHzr%2BkA1d8Dv7y1rJfkB5TEMcjvD6W9SOY%2Fbxj455euk6lqOHlPvhSVI8simTjqbDkjwbF7O7vE4q%2F6bZonl4sxk%2BkRBPSNFQ9NwkdSmQmMlFtY7Li1hX5JRf50bW7OlDDHt1KlR3L%2FDuEN9HuwBdsKcJJSvSxcVy36VpFwCONweEuiFkdaakWcQwNzdoFtOrzl5p9yIARWuwMRnvQY%2BKYpkuI8wJBCKdIjoQQM7ML%2BL%2Bjopf4Pv58g9r2Hre5f4XHdJe61aDLqaCC7bc3qfjZb2I3L6gwaLZXnq7L%2FdGfEY67iz2fUWKYtxCIc2SCPdB%2Bg0JRv22l995swNm%2FThLqnsCgfhU6sPybcCgNjqd27Vi7aH6iYh3Y0W3Evr5PcXVJSN8pSrjdGSY7XpELMsLF6PCWoOH2oNA5%2F5fWBEOZAabZ5pGkdlIg468CfzNfkWepZlFGfv6LAEWOi8NKdcaxve7qv9Ye2J54cgpnggFBl1v3zsqFYIlymN94N0CCBQlCS5QXzoxqIvQBAAhmA33t6Eew2LuyA%2B4h2hUKSTZIwoavwxAY6pgE3UsJAGqZFqXspt7uJrOqjlE9kdJuIyhtCTC9z9WHIqwDHPSswmCL3WVL6hqApowMrm75vJk6uys%2B5odCUv5eXbUGZZeA6TgyQslJ9Orcv%2BQYUfmVEN4SXfjcrzTc25aS%2F6oRMylY0OatrqvonNNUYo9QlxQDLanrL74Cak8xDIFTvXj3neK9lg%2Bs3QSS6qPgxQVWlAPZDpT%2BDcVc4R5fIzymDKPWz&X-Amz-Signature=d4f9d63d20f69bfcba9be24289691831aeb6a9e9165d943afccf75f47d615cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
