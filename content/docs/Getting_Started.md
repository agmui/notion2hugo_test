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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7D4NZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBAoSftjGugtWI9uWfcnZeVDD%2FQOOn9Ege%2BZ5xa4JMf6AiAmQRLDyk2l71HVwOfjxkUMmjO%2BHYslvda9fjsRBBYL3Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM3e90Rxl7e6s3qZpaKtwDyPjIWFghie6rTTAGxL3m%2FHJ2DT52Ue4NzeVpTOWSGWc25c%2Bfzd1xUGubAo6JTk8t7zAIiP2qg%2BRLrJSX91cWtf0Wt69yRI3K3UIfUXTXF1yJ94NYEVVKXDVNQqk3Qvs%2FFnRFY78woWy7C%2FR1SWbh4Iy51A4kq2m8phCSxEvFtkM3ogHem7Z1cqnxf3c52we4v4mf6Wz36F5BDCAhH6YiQ46IaWtJZC0%2FAZF5%2Bmm8KOUgVxRx4KsOp84dqjstwo4viLxMGtipQmCsBWN1rBrTDzd48HnR%2FSanA7H3tI4A%2FLinwiW1CYzHHOwEeNt9xj6tUJ8yPIfDkyrY8gsQbgTypUfDuOtmg7KdpFoJVtwcGlake7FtXVPr2803q8nD1evizeEl%2F2RhPd%2Bl0P1G2rHUcO9JsNT7WgLzjtP8Io8IZYqrG%2Bbs7QfasmGuK4eM7bDV0F02az3naTXms0oEojTbRFmw6%2FJDjDRRnJ8fhdA%2BCuGaeForXHDkcwql5f8TwaF9aEI0gUy54kssKXyvsuphS15Pmu589F3EihT0%2Fp6iI6IZGdhU%2FD4sBfAgK3VPM75W%2BEkRQGnbFhZ0nFxiDEW8S198K%2B%2BAzogWXjzY3%2BiW6G1ucjrVKqR64RdW%2BYQwqNSJxAY6pgH%2BSZ7EqrmvLi33wM4zxAvyr89ptmo%2FRxczz3fWk8vJxddlvGIxKxGBnncK%2BzfmV2vVsLmC3c9Sm99L8SMVwtMuVqdMuMWSFxN9hXdlM4z8pXGaokJ4ipLilefX0KxwxCekEatsMg1K5R8smHR5Q7P885fFNLGzoIP%2BdUm%2Bf5fCOhWGAbHL0sMGrnaS9JOjq4q1zYiIBrWsOff11WwEg2AH%2BPa31f9y&X-Amz-Signature=3564bea873167b10131dba4bb7f95110e822b39413b9ab9126c345aebee740fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7D4NZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBAoSftjGugtWI9uWfcnZeVDD%2FQOOn9Ege%2BZ5xa4JMf6AiAmQRLDyk2l71HVwOfjxkUMmjO%2BHYslvda9fjsRBBYL3Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM3e90Rxl7e6s3qZpaKtwDyPjIWFghie6rTTAGxL3m%2FHJ2DT52Ue4NzeVpTOWSGWc25c%2Bfzd1xUGubAo6JTk8t7zAIiP2qg%2BRLrJSX91cWtf0Wt69yRI3K3UIfUXTXF1yJ94NYEVVKXDVNQqk3Qvs%2FFnRFY78woWy7C%2FR1SWbh4Iy51A4kq2m8phCSxEvFtkM3ogHem7Z1cqnxf3c52we4v4mf6Wz36F5BDCAhH6YiQ46IaWtJZC0%2FAZF5%2Bmm8KOUgVxRx4KsOp84dqjstwo4viLxMGtipQmCsBWN1rBrTDzd48HnR%2FSanA7H3tI4A%2FLinwiW1CYzHHOwEeNt9xj6tUJ8yPIfDkyrY8gsQbgTypUfDuOtmg7KdpFoJVtwcGlake7FtXVPr2803q8nD1evizeEl%2F2RhPd%2Bl0P1G2rHUcO9JsNT7WgLzjtP8Io8IZYqrG%2Bbs7QfasmGuK4eM7bDV0F02az3naTXms0oEojTbRFmw6%2FJDjDRRnJ8fhdA%2BCuGaeForXHDkcwql5f8TwaF9aEI0gUy54kssKXyvsuphS15Pmu589F3EihT0%2Fp6iI6IZGdhU%2FD4sBfAgK3VPM75W%2BEkRQGnbFhZ0nFxiDEW8S198K%2B%2BAzogWXjzY3%2BiW6G1ucjrVKqR64RdW%2BYQwqNSJxAY6pgH%2BSZ7EqrmvLi33wM4zxAvyr89ptmo%2FRxczz3fWk8vJxddlvGIxKxGBnncK%2BzfmV2vVsLmC3c9Sm99L8SMVwtMuVqdMuMWSFxN9hXdlM4z8pXGaokJ4ipLilefX0KxwxCekEatsMg1K5R8smHR5Q7P885fFNLGzoIP%2BdUm%2Bf5fCOhWGAbHL0sMGrnaS9JOjq4q1zYiIBrWsOff11WwEg2AH%2BPa31f9y&X-Amz-Signature=c756e4445035c233c736c7b5569b2e97d59d9770a23ccce70d12b2fb6b348832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7D4NZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBAoSftjGugtWI9uWfcnZeVDD%2FQOOn9Ege%2BZ5xa4JMf6AiAmQRLDyk2l71HVwOfjxkUMmjO%2BHYslvda9fjsRBBYL3Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM3e90Rxl7e6s3qZpaKtwDyPjIWFghie6rTTAGxL3m%2FHJ2DT52Ue4NzeVpTOWSGWc25c%2Bfzd1xUGubAo6JTk8t7zAIiP2qg%2BRLrJSX91cWtf0Wt69yRI3K3UIfUXTXF1yJ94NYEVVKXDVNQqk3Qvs%2FFnRFY78woWy7C%2FR1SWbh4Iy51A4kq2m8phCSxEvFtkM3ogHem7Z1cqnxf3c52we4v4mf6Wz36F5BDCAhH6YiQ46IaWtJZC0%2FAZF5%2Bmm8KOUgVxRx4KsOp84dqjstwo4viLxMGtipQmCsBWN1rBrTDzd48HnR%2FSanA7H3tI4A%2FLinwiW1CYzHHOwEeNt9xj6tUJ8yPIfDkyrY8gsQbgTypUfDuOtmg7KdpFoJVtwcGlake7FtXVPr2803q8nD1evizeEl%2F2RhPd%2Bl0P1G2rHUcO9JsNT7WgLzjtP8Io8IZYqrG%2Bbs7QfasmGuK4eM7bDV0F02az3naTXms0oEojTbRFmw6%2FJDjDRRnJ8fhdA%2BCuGaeForXHDkcwql5f8TwaF9aEI0gUy54kssKXyvsuphS15Pmu589F3EihT0%2Fp6iI6IZGdhU%2FD4sBfAgK3VPM75W%2BEkRQGnbFhZ0nFxiDEW8S198K%2B%2BAzogWXjzY3%2BiW6G1ucjrVKqR64RdW%2BYQwqNSJxAY6pgH%2BSZ7EqrmvLi33wM4zxAvyr89ptmo%2FRxczz3fWk8vJxddlvGIxKxGBnncK%2BzfmV2vVsLmC3c9Sm99L8SMVwtMuVqdMuMWSFxN9hXdlM4z8pXGaokJ4ipLilefX0KxwxCekEatsMg1K5R8smHR5Q7P885fFNLGzoIP%2BdUm%2Bf5fCOhWGAbHL0sMGrnaS9JOjq4q1zYiIBrWsOff11WwEg2AH%2BPa31f9y&X-Amz-Signature=c25914a0ac5fb9e20ca454a5495d8b62618cde8d9a904a98227cec647be570fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QD54B2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCceLc5yCk1Yb5hkCxfTGomkbrwL8KCHCshfodTlpY83gIhAKuERy3%2BOhy0y4WAo26T3hA3vSQwrHUtEihevuOEAHpUKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJAkcR6dCbH6tQDm4q3APz5mBmmWhQaEcX0xPriWCTkKuRqByUOg1XEp7ClOxRdjE%2F2jbkO16UkZdkC73QM7Al6Xbm2nm3exr4%2BdNJ80SIWmU4aKAuNvAXoCOd2YFSVkgXwqpJlEAS%2BoxyejVzevv1MBli29heCUkh5J4lEFLQcLr9iEYdDssDvu0E0tJiVsZMtZyuf3ro9zwd9z0Gxc7awemBZ33kueM%2F13UyisYur2YzY1EDSQQG%2F2xFQPuLIiUexztuT%2BJJCobKGKlhakNY85bFFUCsW9rhgL2O2zv8GqHy%2FKUqMocUtWbu38QjfAZYegPO3y9YJTQy%2FDkqenbCnfNrYvhxtFMolCog0dJ20i7ftgLjfKQs%2B425fo04CO1Y1KsEemoW7dsTvpcc5D%2FlYFnWn3hI0AZqnKC1Am0C9CSsyzi4XkIQG%2FA3g4ipnYAapqsndo0wrJEtsZCOn4qW76sbnCQNPKyutTolUrH7wTMH%2BER8mWTdWl0L3CMWHiICWC0GoTnA6k70yoBkIdKrh7yMu%2FDybQhbEYwFPKV4rBIoZ8UQprwucdb0bGzxTk7WNqOO8GEciXpLJTwUjoXmOYycvBXz7N5YwVFkgThTl6Pw1lX%2BI3lw12JxhKaksV3CQ%2FJDcRB9KYmXnzCp1InEBjqkASsPYxc3Xb0XkTAX25E4xTPYVAIiq2cQ%2FUSVMvHHEeZfzhh1GK2xJ32VE8IVHk20JSVHX3jk7CuDTX559K4vmnX0%2Bfetb5FC%2B%2BOpKYOELp%2B0Grp5FeeURySbhX1fmUEIv6fcoB0DNxjapIsg4X3hNJ1yAR1ns3k5kKm3cfGpRXkhlS5TULCL95Ks8qIZdyKitZadCm6mTompmbxAcb%2Fne7%2Bvf9Bv&X-Amz-Signature=b0edadc2dd386e1c4d47705e37ac6edbc49c4087c7bc8ab2743b7abe6aa7f598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHZHFEB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBN2eH2snaJDYfSn9bvKCceJFFQUzVNwpNFTS0r%2BGKzFAiEAr4JNuA0iPY3is7%2FI%2Bc24FzeJDtrpFWNaNIlh7KFuz6Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKGIjgSO1vQzXQwmryrcA5N%2FE4zvgcom82zFuEuo4mk1e%2F2YdHxaUoB5dPejHSeNuoxbymXMsZdArXGvMPCXJRMUybaUUjRmaDCiLfsFdNQ2PG12KPNMSEtArWp4mlj8MjfpnoqZJW%2Bw%2FanKzNgGs3bR9Mfq0KdfbD1687Iy39rCf6xixBdt82%2FBLLjAc%2BlT2QMdXZT56CfW9%2BAsbgN5S0YxuoWXwBHWpuc4AhD%2B%2F3BGYOfrr4ySn8g6ski3AHtXl5dXAqSS55C77JCwCDNr3daKxbNYJmxf8pBoUj9lnk%2F%2B94dSjmqOPK0Hi1BTIEnf4JnGJpB%2BM8cxnxAk29QRxXLTX2nz7q1kyiEI6gIGtS5mfNrwAQFvAzSfgHLpAq7bFf4kR3OPdhXZJsjJ7kJnuNPSr3wTZ2vGEhP2pNrevsKZjXGdp4tp%2FC67BOq3%2FnXi11TEuK3g4UlB8Ts5PXJ3IJrmWAhX%2BaNCpR5kvcdMPGBbjorh1zPqFZWe3aJh1nrHR90DFUf9F614bw5o5YXasohZyNA2IIDJLIPKszn2%2BBsaIC%2BmOtQH8hmLDzaOLRXWXQvPvgAv3QcC617e4kJVWJl4VmsR8BPe7PIt3js%2FB63LLAbkXNRKcgmYfFMDEA1iYGRv9nB8UHPn7MInMNfTicQGOqUBbsD6MgfTY9193rjinxdmeQlLIYlxwdH%2BZgTQV2tnov1%2FDLQikSChPYLeYmQkSf7Ui1aUHujvOHAbb0VWCLkMbQkriZE1cAvuw4EoZ6K0Mf1PNmZ%2BVbKWLV7CnIfSaLAKITgRg6tx2QqcgBSHXDLFibeinqMgtkhn6%2BQOcizP9P8z%2FfmLgkkRM9yYICfKb7h6IrIO2nkpRpQzLx8xkP%2FO%2BlVACxo6&X-Amz-Signature=1231f549cea641cdcc47f99fc0e55c71a02e3fc00e195b8fbef9787255b85c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7D4NZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBAoSftjGugtWI9uWfcnZeVDD%2FQOOn9Ege%2BZ5xa4JMf6AiAmQRLDyk2l71HVwOfjxkUMmjO%2BHYslvda9fjsRBBYL3Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM3e90Rxl7e6s3qZpaKtwDyPjIWFghie6rTTAGxL3m%2FHJ2DT52Ue4NzeVpTOWSGWc25c%2Bfzd1xUGubAo6JTk8t7zAIiP2qg%2BRLrJSX91cWtf0Wt69yRI3K3UIfUXTXF1yJ94NYEVVKXDVNQqk3Qvs%2FFnRFY78woWy7C%2FR1SWbh4Iy51A4kq2m8phCSxEvFtkM3ogHem7Z1cqnxf3c52we4v4mf6Wz36F5BDCAhH6YiQ46IaWtJZC0%2FAZF5%2Bmm8KOUgVxRx4KsOp84dqjstwo4viLxMGtipQmCsBWN1rBrTDzd48HnR%2FSanA7H3tI4A%2FLinwiW1CYzHHOwEeNt9xj6tUJ8yPIfDkyrY8gsQbgTypUfDuOtmg7KdpFoJVtwcGlake7FtXVPr2803q8nD1evizeEl%2F2RhPd%2Bl0P1G2rHUcO9JsNT7WgLzjtP8Io8IZYqrG%2Bbs7QfasmGuK4eM7bDV0F02az3naTXms0oEojTbRFmw6%2FJDjDRRnJ8fhdA%2BCuGaeForXHDkcwql5f8TwaF9aEI0gUy54kssKXyvsuphS15Pmu589F3EihT0%2Fp6iI6IZGdhU%2FD4sBfAgK3VPM75W%2BEkRQGnbFhZ0nFxiDEW8S198K%2B%2BAzogWXjzY3%2BiW6G1ucjrVKqR64RdW%2BYQwqNSJxAY6pgH%2BSZ7EqrmvLi33wM4zxAvyr89ptmo%2FRxczz3fWk8vJxddlvGIxKxGBnncK%2BzfmV2vVsLmC3c9Sm99L8SMVwtMuVqdMuMWSFxN9hXdlM4z8pXGaokJ4ipLilefX0KxwxCekEatsMg1K5R8smHR5Q7P885fFNLGzoIP%2BdUm%2Bf5fCOhWGAbHL0sMGrnaS9JOjq4q1zYiIBrWsOff11WwEg2AH%2BPa31f9y&X-Amz-Signature=a9e76c7eb9b680fb91b00fa1b9d915810e79b9745774329a621678ac457fbae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
