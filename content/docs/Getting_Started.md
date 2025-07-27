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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDMULNL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICB6CcJiP2oKB3byQONC%2FA%2BpPwVnnT%2BoAD2mqHh6s7YlAiAHZxw3POh6BRlsFd4NR7W5OmGqp64byxccTXKIPdb77Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh9MIYalDKQpebvD3KtwDpTcEotKcXdVHDPjeKezRwfjFnsLKwvc%2FNI%2BWdnAAv2KCqtmpwUocAYeJHtB07p3BWZN%2BvBpd6u6UMfjJBJWd49dNgsNyO5YTlV7VpfeKQlYUFTaIPGWcEANqd%2BmABOBvuQ%2B1snNUWEwrDtNOtL3ONOuz18OOtqZwjeaFlGeHLvCFp%2B9krPiVF5FJNRR0vfxyOO6uMNE%2FzmemlnizZe60%2BPwKZW9ST5VYnl4NPcSbAgsWkIGx6hQnBi29%2BSjDZKzBVquLjIz5TFZJICG%2F98eLOOhHayYh%2BAU%2BA%2FzvjS9SkHcsNmb8sKX5WOLUT1gaEW4OCnNeYy96xdHm3sKlGnei9hA5bLJVVb7wyKCMusIWupxDVfLprWaa0K48f8yALmCU5f94Rpvk4zX57eaoHnuyxmvoGeNbDogAXQcw1MzjoBB%2FY5LFeop8GGr2a4NsL4FRkjz1z%2BGyn%2FAsN9vXM7PtB%2BSe0ZKV62Ou8f9d%2FCRdWkNa0WDYAiHmmn24P2%2Bo4eCCqLbgwN3dFQBVJV%2FoFXLQ3vCE5C7pAg6it8U86d3t9q%2BJLsoGRPv9DIKtw2RLHj3ckPfWnpMJkTcHTQYFtCpp1iddxwcEAPE%2FhCmZrgmqkmTocnsFu%2B0u%2FQuz8q4wq9SXxAY6pgEbtY7q%2FDM7%2FVYTUYoGKkNdX346bw5KlVH5StTQwE8yW7ENH49l0DGSl3HmAlatJPgHa%2BZSAOq%2F9dRhtXqDUbf3ny1fHqJpLiwUJ40DLVTYMgnVaZj18ZeVeEWUL6sjXQUuSyVAmwPsXSbjUbVvQFkIbcng5pb0H61f8zDzw2Da0lHQOdIe5hDymz05JVN0FZwJDNhFAeXDg8BNyM%2B4jB4E3%2F164BIR&X-Amz-Signature=e3387eed84b4fafabc1b494aa838fd74c5972324701b953e57b3cf7fe782baf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDMULNL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICB6CcJiP2oKB3byQONC%2FA%2BpPwVnnT%2BoAD2mqHh6s7YlAiAHZxw3POh6BRlsFd4NR7W5OmGqp64byxccTXKIPdb77Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh9MIYalDKQpebvD3KtwDpTcEotKcXdVHDPjeKezRwfjFnsLKwvc%2FNI%2BWdnAAv2KCqtmpwUocAYeJHtB07p3BWZN%2BvBpd6u6UMfjJBJWd49dNgsNyO5YTlV7VpfeKQlYUFTaIPGWcEANqd%2BmABOBvuQ%2B1snNUWEwrDtNOtL3ONOuz18OOtqZwjeaFlGeHLvCFp%2B9krPiVF5FJNRR0vfxyOO6uMNE%2FzmemlnizZe60%2BPwKZW9ST5VYnl4NPcSbAgsWkIGx6hQnBi29%2BSjDZKzBVquLjIz5TFZJICG%2F98eLOOhHayYh%2BAU%2BA%2FzvjS9SkHcsNmb8sKX5WOLUT1gaEW4OCnNeYy96xdHm3sKlGnei9hA5bLJVVb7wyKCMusIWupxDVfLprWaa0K48f8yALmCU5f94Rpvk4zX57eaoHnuyxmvoGeNbDogAXQcw1MzjoBB%2FY5LFeop8GGr2a4NsL4FRkjz1z%2BGyn%2FAsN9vXM7PtB%2BSe0ZKV62Ou8f9d%2FCRdWkNa0WDYAiHmmn24P2%2Bo4eCCqLbgwN3dFQBVJV%2FoFXLQ3vCE5C7pAg6it8U86d3t9q%2BJLsoGRPv9DIKtw2RLHj3ckPfWnpMJkTcHTQYFtCpp1iddxwcEAPE%2FhCmZrgmqkmTocnsFu%2B0u%2FQuz8q4wq9SXxAY6pgEbtY7q%2FDM7%2FVYTUYoGKkNdX346bw5KlVH5StTQwE8yW7ENH49l0DGSl3HmAlatJPgHa%2BZSAOq%2F9dRhtXqDUbf3ny1fHqJpLiwUJ40DLVTYMgnVaZj18ZeVeEWUL6sjXQUuSyVAmwPsXSbjUbVvQFkIbcng5pb0H61f8zDzw2Da0lHQOdIe5hDymz05JVN0FZwJDNhFAeXDg8BNyM%2B4jB4E3%2F164BIR&X-Amz-Signature=616a2f6b2d5fb3f7504f927ddfd37c9a67a57a57074e873ff21df3d8e6d438aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDMULNL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICB6CcJiP2oKB3byQONC%2FA%2BpPwVnnT%2BoAD2mqHh6s7YlAiAHZxw3POh6BRlsFd4NR7W5OmGqp64byxccTXKIPdb77Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh9MIYalDKQpebvD3KtwDpTcEotKcXdVHDPjeKezRwfjFnsLKwvc%2FNI%2BWdnAAv2KCqtmpwUocAYeJHtB07p3BWZN%2BvBpd6u6UMfjJBJWd49dNgsNyO5YTlV7VpfeKQlYUFTaIPGWcEANqd%2BmABOBvuQ%2B1snNUWEwrDtNOtL3ONOuz18OOtqZwjeaFlGeHLvCFp%2B9krPiVF5FJNRR0vfxyOO6uMNE%2FzmemlnizZe60%2BPwKZW9ST5VYnl4NPcSbAgsWkIGx6hQnBi29%2BSjDZKzBVquLjIz5TFZJICG%2F98eLOOhHayYh%2BAU%2BA%2FzvjS9SkHcsNmb8sKX5WOLUT1gaEW4OCnNeYy96xdHm3sKlGnei9hA5bLJVVb7wyKCMusIWupxDVfLprWaa0K48f8yALmCU5f94Rpvk4zX57eaoHnuyxmvoGeNbDogAXQcw1MzjoBB%2FY5LFeop8GGr2a4NsL4FRkjz1z%2BGyn%2FAsN9vXM7PtB%2BSe0ZKV62Ou8f9d%2FCRdWkNa0WDYAiHmmn24P2%2Bo4eCCqLbgwN3dFQBVJV%2FoFXLQ3vCE5C7pAg6it8U86d3t9q%2BJLsoGRPv9DIKtw2RLHj3ckPfWnpMJkTcHTQYFtCpp1iddxwcEAPE%2FhCmZrgmqkmTocnsFu%2B0u%2FQuz8q4wq9SXxAY6pgEbtY7q%2FDM7%2FVYTUYoGKkNdX346bw5KlVH5StTQwE8yW7ENH49l0DGSl3HmAlatJPgHa%2BZSAOq%2F9dRhtXqDUbf3ny1fHqJpLiwUJ40DLVTYMgnVaZj18ZeVeEWUL6sjXQUuSyVAmwPsXSbjUbVvQFkIbcng5pb0H61f8zDzw2Da0lHQOdIe5hDymz05JVN0FZwJDNhFAeXDg8BNyM%2B4jB4E3%2F164BIR&X-Amz-Signature=77f39042df28374ed0bc95ade57d94301eff6bc738130c56f285e1454766570c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7NDS4W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIC8C2lfzJn3vLirM6%2FAuTTaAE%2Fi1NdJExreHTkBtlzC9AiEA9FCvSSr1dqih8OGyQXJpK0G3c8LgJBItPa1bILkjd5Qq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHKf%2FLvxcThyVvJizCrcA4Ex43QIEqAal3%2FSFQ2lcRcJJ2A0K6OThKxlwOj6TsoPRqu5Hrv56NuCfK1ay24auFUsQRWiVbKoO65UhT6ZNZe%2BEmrGOBvc4pv7wSAnCLJiRx5EsXwahnMMd68UOgZr15gp7kO8En%2BxBqd3vwv2EBsVbBOW5zu2%2FavkzBFjCEfoSesPw64EO0d1kumzBNINJt0KAdt66jocBCxNmvujDUjJ9GMtKsRs2Ph6SXTFNWC9abYEGRhmyLRQljrZWO0%2FCWdJLOOQTYRdCbuAvbKN4GckoxBjsDwZyzow4lsf%2FZTeTHHMEVIL9RpvyXyvFkNkjz07sdsvfHlqh%2FQ07oktk3dhlG4kiZReZtCOx2C4jLqOdUm7AbF2z1vAlxJ%2FtS%2F72P16cI4xjOfAKvgaN6hG6WqRV4R5yG8fdPSJQ3%2FogrMSyQqHqU9rE8N%2BidgQAKdtLP4Ct1eh2OnIKfigx4YebI0ieRU8WBLYkQzKXWKL4e5v0ucV1baSX8QSS%2BJa2PDY6OXsp1B1%2F8Y2ZQ%2BpoB3EStdJWQzKMh6h4sTBjuchjthdIp5fJ1y1C5DEm5FwOmnObIHJaWOPhFaEJgCULbjdEIvsh032EPMS4LvEDYm2Hqky6M3K7js%2FyTwQ59eBMLXYl8QGOqUBFDX0Z2nIFD8KI2dBQCJQfjjXQejsXjp2IT6cNRE9UzQdoyER9FHyQNGMsqjTdDlzBWxU5MkHmEQ9jC7ZlvVTHfQ2Xt8pfJSTFIEg%2FmxpRDjWAan%2Fx6%2F6fPHiurYQYYp8Nn%2B9kcdsV13q8paolVO4TDvuqBqnT3SN9UFJYxPSEstEQTGUUaHc0rURwkODFwGWft6G4iBsWW%2BCel4NlfdO6oUjKtaW&X-Amz-Signature=1024bb6b61e1c66bbc73531785c1c1763ed872a767b75757fff8e32a1859b73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUQXRIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDBOztmt8vN%2FKKvfMXksjSbd75XGEfg%2F%2FOo4%2FKuLKoC2AiEAxoVoe3txHqrG0LIdxs1fxvw%2Fusg3mXH369WE7chWDv8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNyOFyp2QjCQxj4fLyrcA%2B6B%2BYwGNYDz10zqj5rxIzLbK9FFJ7arUXL6w3sQ%2BVU0lpom97%2FYfWq1OzfD79UWNlEeLdcYtPYZOn4UNezN4EKsYKfpKPz3WnRKIH69%2B2mXK1kjzmsd7BGCsufUCA4RwQMHe8JBa%2FrlSne1oruvV21ohUL%2F%2BqoS%2F4j0fznr3yglOf%2BAvhEsgSIeVBMLtritHjAs%2BiDE5yIxELgv4wEItUtJvTRB0H%2FYxXAIRiSLVxKeMUTDuUhmm9iWUMSmBsRgS9AJP%2BUm4AQf%2FWtZENedBhH5rgeaUiCNXMEAwCh%2F%2FBogkcbyLLCkdR%2BJwIoLEdeo42T7VaOQ82GKPd9WXaGtyBTcauZKHNWroFA49sy6IsUI37bD2TW3ZHSsS%2FCO6s%2BUlf6Inig%2FSZ4t%2BA3gXRh%2FzbrDrM4n58lfAygaf24c0Uhx2wfxn8T91cO3T4wfrrLRgPs5M%2F92%2B2KUAPvlml%2BfvTcTUivNC2gesphF1q0mDMW%2Bw9iiMuXbK5UTdu2UMc3Un8%2Be3gr%2FsVP5dLFRTFGJcsg5xTRrT8p6yDTKxxjuxzc%2BVfbyWOcvpxmD%2FtRZSAhnf0MZtomXLuBZSA2A%2F65QTOCVV%2BnIrCC9H%2Bxh0NcyqSpaA0i53kt3%2BJqIYhP5MPbbl8QGOqUBk5QMHI7E2nBN5eM0%2FjUvbyzUc3SCGDOipZ03Jn1FpJT8HsUfo7tIyAEqBfupwjYFFGKfiO%2F3gi50xGIzZSchtfiaq35QjNw0mimoec2wKTC37k4UtiF3JkGctk7ipqqeRQo%2B%2FrNKZi4rV4M6VlPKYaRfvFYim4cWxYVNk%2BoLvwYQzSb2ofAGxDPBcO2pczsIm4ayqP%2F4ZeYjhYYLbd9kH%2Fs73WR%2F&X-Amz-Signature=9ba09ebea21973f0a82ff7bcb3ad365441e61729204f391d88a6fad12bed9786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDMULNL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICB6CcJiP2oKB3byQONC%2FA%2BpPwVnnT%2BoAD2mqHh6s7YlAiAHZxw3POh6BRlsFd4NR7W5OmGqp64byxccTXKIPdb77Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh9MIYalDKQpebvD3KtwDpTcEotKcXdVHDPjeKezRwfjFnsLKwvc%2FNI%2BWdnAAv2KCqtmpwUocAYeJHtB07p3BWZN%2BvBpd6u6UMfjJBJWd49dNgsNyO5YTlV7VpfeKQlYUFTaIPGWcEANqd%2BmABOBvuQ%2B1snNUWEwrDtNOtL3ONOuz18OOtqZwjeaFlGeHLvCFp%2B9krPiVF5FJNRR0vfxyOO6uMNE%2FzmemlnizZe60%2BPwKZW9ST5VYnl4NPcSbAgsWkIGx6hQnBi29%2BSjDZKzBVquLjIz5TFZJICG%2F98eLOOhHayYh%2BAU%2BA%2FzvjS9SkHcsNmb8sKX5WOLUT1gaEW4OCnNeYy96xdHm3sKlGnei9hA5bLJVVb7wyKCMusIWupxDVfLprWaa0K48f8yALmCU5f94Rpvk4zX57eaoHnuyxmvoGeNbDogAXQcw1MzjoBB%2FY5LFeop8GGr2a4NsL4FRkjz1z%2BGyn%2FAsN9vXM7PtB%2BSe0ZKV62Ou8f9d%2FCRdWkNa0WDYAiHmmn24P2%2Bo4eCCqLbgwN3dFQBVJV%2FoFXLQ3vCE5C7pAg6it8U86d3t9q%2BJLsoGRPv9DIKtw2RLHj3ckPfWnpMJkTcHTQYFtCpp1iddxwcEAPE%2FhCmZrgmqkmTocnsFu%2B0u%2FQuz8q4wq9SXxAY6pgEbtY7q%2FDM7%2FVYTUYoGKkNdX346bw5KlVH5StTQwE8yW7ENH49l0DGSl3HmAlatJPgHa%2BZSAOq%2F9dRhtXqDUbf3ny1fHqJpLiwUJ40DLVTYMgnVaZj18ZeVeEWUL6sjXQUuSyVAmwPsXSbjUbVvQFkIbcng5pb0H61f8zDzw2Da0lHQOdIe5hDymz05JVN0FZwJDNhFAeXDg8BNyM%2B4jB4E3%2F164BIR&X-Amz-Signature=5423ba2bd694f9a05b30cd4a16464660259b59beff79008e3823bc40ad859030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
