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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Q26OU7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FqEX565VzcZ5DLB5R2su96buE5OYjMpvFXmJSXeGuAIgECbYlTcYEo7C%2FW8QomAKqqVmzQ%2BEXuXkKGULz%2F683%2BAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDPgK5trmqCABsZDg5yrcAy7YVgCYd5iV0qq1gkG%2Fkdt18sB%2BErGD%2F%2F68OIgy4IFu4nRZXULvUM7idNDUkc6pZmIga9RWgABd2b4Jsni%2F%2F8hbjy5x0hkNrD6%2BgpWso0LkUeqEWdryGHI3LeUq7N8i4TP1Wt8e9thWatwDMRmbVYFY5oozdhsxYCfE8qwBOcZK2tofA%2FYon2LHfsfeNWOP5pnQ%2FwjaPetfNyJunw0VmLRsmCmg3tPvgJfjgxjkdAd73QC1NvOeB93oxqqIYD5K4NyQdZFzLTgsiBwr7aaY1nqSgcggHErvqdoTD3eZfcO7BK%2F1PKecTDF9CqYcjL0BkzaPUJgF1myjQc8lWukl1vmvfEXVY5o%2BmwXsUtLg51S6FJhS2EqHOWsOtaQz%2B3FhTWhAy5j91P6glnbEkTV4u8%2FdhqvG%2BtCS4AYtpekeN68z256sBwE9zkAmq%2BDgEdxa3J5qidjWnaBQEidGsR9qggyr5meccfGuEBzGe4v%2BEX30QrdhpgbendCW8z1lZJYIiVoPCfq%2BrMRJl1fgo2UK3x41U%2B%2FWeO3qwtviAd2kHqpi1lO5iso2pU%2BYlzlar24qNqjKoVBY6HwmhNFAwYldjNfHf87enyqTygZe6NCDwJugo3J7piWxG4aCcnpoMOShwb8GOqUB85PMPMnd3GKmNM65jbkqrIjUG4a2aZv0p3XhL38qoBUwelfKW2TKKZFrfZNA0uIzkSfF%2FnhTSu28wsAoZ9z3iAL7aByKycS8UHhPdUjWe5din0Ss1T%2FKmnT%2FXg3lhRrLGqAaY5mAHq03mqLpSmVeKnyGI%2BTEdvH3ewzRtViHrfqii9mpY5mraS3OIHPXRLpwWzPIMjllRPsW%2Bnf%2Fjy67ZlOHUGIk&X-Amz-Signature=50f9c71f66f5cbc325bf20f90a7a8de2ad27475b4e125b688c347b040ed84e97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Q26OU7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FqEX565VzcZ5DLB5R2su96buE5OYjMpvFXmJSXeGuAIgECbYlTcYEo7C%2FW8QomAKqqVmzQ%2BEXuXkKGULz%2F683%2BAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDPgK5trmqCABsZDg5yrcAy7YVgCYd5iV0qq1gkG%2Fkdt18sB%2BErGD%2F%2F68OIgy4IFu4nRZXULvUM7idNDUkc6pZmIga9RWgABd2b4Jsni%2F%2F8hbjy5x0hkNrD6%2BgpWso0LkUeqEWdryGHI3LeUq7N8i4TP1Wt8e9thWatwDMRmbVYFY5oozdhsxYCfE8qwBOcZK2tofA%2FYon2LHfsfeNWOP5pnQ%2FwjaPetfNyJunw0VmLRsmCmg3tPvgJfjgxjkdAd73QC1NvOeB93oxqqIYD5K4NyQdZFzLTgsiBwr7aaY1nqSgcggHErvqdoTD3eZfcO7BK%2F1PKecTDF9CqYcjL0BkzaPUJgF1myjQc8lWukl1vmvfEXVY5o%2BmwXsUtLg51S6FJhS2EqHOWsOtaQz%2B3FhTWhAy5j91P6glnbEkTV4u8%2FdhqvG%2BtCS4AYtpekeN68z256sBwE9zkAmq%2BDgEdxa3J5qidjWnaBQEidGsR9qggyr5meccfGuEBzGe4v%2BEX30QrdhpgbendCW8z1lZJYIiVoPCfq%2BrMRJl1fgo2UK3x41U%2B%2FWeO3qwtviAd2kHqpi1lO5iso2pU%2BYlzlar24qNqjKoVBY6HwmhNFAwYldjNfHf87enyqTygZe6NCDwJugo3J7piWxG4aCcnpoMOShwb8GOqUB85PMPMnd3GKmNM65jbkqrIjUG4a2aZv0p3XhL38qoBUwelfKW2TKKZFrfZNA0uIzkSfF%2FnhTSu28wsAoZ9z3iAL7aByKycS8UHhPdUjWe5din0Ss1T%2FKmnT%2FXg3lhRrLGqAaY5mAHq03mqLpSmVeKnyGI%2BTEdvH3ewzRtViHrfqii9mpY5mraS3OIHPXRLpwWzPIMjllRPsW%2Bnf%2Fjy67ZlOHUGIk&X-Amz-Signature=8a7c3c13467981985d786f0a16e8896386a41c6b3a48b01c3ed241afcbc08ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHNNWY3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjCyIm6aRbfjTimrwvlJhHpoWCHnsmIWZng9yFos31AIhAIO4fB9qweLYNJTtHNQruWg%2BvB7quH5qNMwVwCCs2NCMKv8DCB8QABoMNjM3NDIzMTgzODA1Igzfi%2B35UopA%2FrXE1jYq3AMfXytoTWI7J73yed1AamIU1lbqKeOFn7TJ%2F%2F%2BD9qBF%2BRhT6Q1%2BKS8vtOpT9KOjbNwafy%2B1iT0eypSVfJWYBjIJKmrvcQYI8Bx3dRyyU%2FyY2p4ud%2B9jfqmnzXrk0HwCbnscpc9GLdmag9pgy889XODm9aLqMS7WOeTy7lXvM%2B38B2qN4MjrlQSlCz35emGo6fGIzQuZ%2FUNIjNg7y3uPWmhgKs0gFs2LMKrmb479Prd0fn2D0cuECtmExOm%2FOGFIcWx5c%2Bsr85QS36%2BAz%2B%2BkaO78Kjj2gXV47pVS2ZbM7jLDzDh%2FKqtWnc%2Fjh8Vtne6K0b%2FAxuTewxo78gqeY5B0Ctkj9fJf%2BcI3P031n%2FhhUTV839X9m6V90W7t3cESblITvaSb5WJUj1g8LNBkE7EObDEwtuciKoq5InxQQvoWe3JHO3dT%2FzdBElZRiGRzz%2FgYvaXefWbm6xCkq%2BFQ%2FGbpF6Pf77YaVGGzPbRdRgPw26Zohq1lF9xh9%2FBPZQ%2Fmxzwcf1EGeJ%2F0j5xjCpKwFqN1P5uOt%2FrD0GUuLWuH2Nz6xQnY%2FUA4WEd1ioNrR%2FUZ7aSPJXGDp%2FOElk5Ms%2ByZ%2Bcf3T0bGjp%2BKwRaKzYSgg8mTp0b%2BCd%2BjvOXrSNXEMWOF%2BDDAocG%2FBjqkAa2dpvMuunikqNQJxe%2F7VRhstqFduAqIjZaXyunTCDj9VA1UygmF1pGesIVrFiA6h6%2BN3tiKghpW8hKRbwnJKiTDYfOZ3lrAXCBo6MTjKgrpMQUGocGqXCj1A1cMwuTrUKWKh%2F6aP4J%2Bga2bmGqDMg8sfhbetW7UydMzH%2B5VsxScM5%2BitXkCGc2uH67n2TpuRthrIX%2Fvt%2FilT2ETUGVjEIC2Vf3S&X-Amz-Signature=f6d9c83bd44c80b811b49598a7ec6f1efeb2390038341a3f33c3d000591fe952&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT557YZI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKgOsK8HjJxGlE6nM0HeMlGSKtaikE59OetS6wFt5KJAiBJOxQV2LlnVfqsNp0qHRCiFdML4vB9SDTxzMOZt7B0zir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMhijXmSuScotV1PUUKtwDY1tGNzlSFdAcKfeRCNCR4%2BUGve8Ag821T2pPDvPqeFKBWLj1MxxVmpe0xMGZegl2g02dt7x%2B7Ye%2BwcHfx4U%2Bs8qvcleLOhkDsWmxXNrypZ6dTPICAQjnYKarMVjZYtou%2FHOYJzYe5q7Hw%2FkyPYvw7UQi5PAguSWkri3iby3BSbbGPbZ1yX7jl4zheB3RL3MwZ27ByFaiNDVpNYc6%2F5d3e7FdFNfLotQTOj7KvBeZY6wJIrOsgTHZvxG%2BLwsqE4OSXh9MNZbnKE%2BpCDUc4MjsgPAIEu9rI2DxyzvlaP582s8LpavqIuKNAl20XGQ7LW3g%2FlK566MHrs6PyVZjpHiAdaQNDlelOwsoiofl%2FfSXxdp6QvuMK0fxlKVewqDglfDtt6p1pQOSbuGYjDFjzdFE7odrRUn0iWOHtPlytTEj8CHU5IAUkLr6XhGWz%2FEuDSHnjN8yRQKG65%2FoJPHvBMiRQlVt9OJK%2BWMaI00Gys%2FaZzidm7RyFIhcl9LRzefSwlbI4ORNqX4smDy4nuG9sl8MLPBB3D7OH9xM8uRY3kcHR7iheL%2BjZp16MubXvG8LQT1%2F7hHE5njWj8Xgj%2FqzCHC4GpPwjTvjBUqfwl%2BDV0nsGWVrFD5Pet5RBKF3Ugowp6HBvwY6pgH7k7gCx4Ytpmzwk4sUY0LkREymah4ox2WsMyRqR4Qnr8oP%2FBR1jxnTCwCkV3f4LexH%2BuG8WTa7bAz16UOAWAP%2FYtZUN0FMP7W5RFSNnMF0UtaUOcw10zWG7%2FlScKIPSYCVA5OnCzfHo7qF4aPxK9M%2FmRF29fOUY1RqvtdceyKWfdo0Bb%2B5ghpJ2Esb4CI1fSpZy5MC%2Fck6WBX2yauDeYrmP3%2BIBHcY&X-Amz-Signature=4937f054489451e84e71d5be91d711bb882561f5570ff34d6c0f7303e611c290&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Q26OU7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1FqEX565VzcZ5DLB5R2su96buE5OYjMpvFXmJSXeGuAIgECbYlTcYEo7C%2FW8QomAKqqVmzQ%2BEXuXkKGULz%2F683%2BAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDPgK5trmqCABsZDg5yrcAy7YVgCYd5iV0qq1gkG%2Fkdt18sB%2BErGD%2F%2F68OIgy4IFu4nRZXULvUM7idNDUkc6pZmIga9RWgABd2b4Jsni%2F%2F8hbjy5x0hkNrD6%2BgpWso0LkUeqEWdryGHI3LeUq7N8i4TP1Wt8e9thWatwDMRmbVYFY5oozdhsxYCfE8qwBOcZK2tofA%2FYon2LHfsfeNWOP5pnQ%2FwjaPetfNyJunw0VmLRsmCmg3tPvgJfjgxjkdAd73QC1NvOeB93oxqqIYD5K4NyQdZFzLTgsiBwr7aaY1nqSgcggHErvqdoTD3eZfcO7BK%2F1PKecTDF9CqYcjL0BkzaPUJgF1myjQc8lWukl1vmvfEXVY5o%2BmwXsUtLg51S6FJhS2EqHOWsOtaQz%2B3FhTWhAy5j91P6glnbEkTV4u8%2FdhqvG%2BtCS4AYtpekeN68z256sBwE9zkAmq%2BDgEdxa3J5qidjWnaBQEidGsR9qggyr5meccfGuEBzGe4v%2BEX30QrdhpgbendCW8z1lZJYIiVoPCfq%2BrMRJl1fgo2UK3x41U%2B%2FWeO3qwtviAd2kHqpi1lO5iso2pU%2BYlzlar24qNqjKoVBY6HwmhNFAwYldjNfHf87enyqTygZe6NCDwJugo3J7piWxG4aCcnpoMOShwb8GOqUB85PMPMnd3GKmNM65jbkqrIjUG4a2aZv0p3XhL38qoBUwelfKW2TKKZFrfZNA0uIzkSfF%2FnhTSu28wsAoZ9z3iAL7aByKycS8UHhPdUjWe5din0Ss1T%2FKmnT%2FXg3lhRrLGqAaY5mAHq03mqLpSmVeKnyGI%2BTEdvH3ewzRtViHrfqii9mpY5mraS3OIHPXRLpwWzPIMjllRPsW%2Bnf%2Fjy67ZlOHUGIk&X-Amz-Signature=bdf8130090eae54227eb196d4e0983e73c724446953b613dedb8de81d7703b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
