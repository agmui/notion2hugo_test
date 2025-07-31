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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFAIKVC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDteu7So63%2By0VWUZei%2FVduuMMjJgDTg3b0VPeKyXqQMAIhAPVvCGXerbpQvkW6qUUhz2EW2V4LbL77NBhbfXKuzidvKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1qoPZtnJERHMIffsq3ANl0IuLFDUsHKdttgYING6%2FL5fUUamNzF%2FsRAZOyKoUmWk9dcJbhTFrlaaBuNhEmRg40fp0wjzspzeyKDA05fTvrsGW64az8qMDzAwwPLnH0YdjFtMre1Mq0EgGDOPk1PFJiA%2FE0iLY7MoKXB%2BkH%2FgXmchnLMNL5%2BtBUHKH4cVzrsvqMGTSZvKnfL%2BuXHPA3xFDx5rmHPpmsxPk4bqlfCVVWtPQudgwGnIonrDV8eFub62%2B1X2pislpfI72INj4VtqmPC3VU9dHWiyyATJeH0Y1kZAXJ7dEPUkWhtKwtvmdiEjXkuKfenhjU1n5BnTMsL1cK9d6mHvf9IzjsvDvWem941AEpkDJCl7KSbJfoNT9pJbApe0xsYSOXeziy1RcArad%2FDLV8JZWVST388ciSNmAuSvT16O81V3r6GY5A%2F1cwZdFFs8NWQOqYCbm0W2ic1IIp0DmM%2FHehT%2BjV2v7NW44fdrbsWjj%2BWIX5NuTn7zcQsAelKGNUhsUGATEfr0u211J1BaD0esXlUmXdnw6Z%2BV0ekwxKtb52N6MhORIcZ5jgdWWIam%2B0JXG3Fc4uo2REjzrHqyG1bRV54Lbz9Z0i8AU1EosGVW3zTpw9UrwsXdhklADs6lSfm9Z34p6XDCkmqzEBjqkAS5gB7lLHJt1h3jh6HqyaC2TZEMtXtfNDtbGPh%2F7W%2FVf6cPyDsp7b0FUSfVNllaYkZeU7Bd5FLreHnsw5XA%2BSSrMFHRiXjY8Lbo1CpumGIpYi9xPMTqQmzXY0ARr9M04lSMgiKkMx7QDelDe94JAPcU4SeQ4Av8q7Rhjf5LX5EqBQKvtpZJ33a84Qb3iBNCfSPFZz9kXK81UAGkeglVKtVBzCGk4&X-Amz-Signature=96798b7cb8ac13e025bc5aa5f96ca0a26516ee18e91f3c20ec7b34a390214a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFAIKVC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDteu7So63%2By0VWUZei%2FVduuMMjJgDTg3b0VPeKyXqQMAIhAPVvCGXerbpQvkW6qUUhz2EW2V4LbL77NBhbfXKuzidvKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1qoPZtnJERHMIffsq3ANl0IuLFDUsHKdttgYING6%2FL5fUUamNzF%2FsRAZOyKoUmWk9dcJbhTFrlaaBuNhEmRg40fp0wjzspzeyKDA05fTvrsGW64az8qMDzAwwPLnH0YdjFtMre1Mq0EgGDOPk1PFJiA%2FE0iLY7MoKXB%2BkH%2FgXmchnLMNL5%2BtBUHKH4cVzrsvqMGTSZvKnfL%2BuXHPA3xFDx5rmHPpmsxPk4bqlfCVVWtPQudgwGnIonrDV8eFub62%2B1X2pislpfI72INj4VtqmPC3VU9dHWiyyATJeH0Y1kZAXJ7dEPUkWhtKwtvmdiEjXkuKfenhjU1n5BnTMsL1cK9d6mHvf9IzjsvDvWem941AEpkDJCl7KSbJfoNT9pJbApe0xsYSOXeziy1RcArad%2FDLV8JZWVST388ciSNmAuSvT16O81V3r6GY5A%2F1cwZdFFs8NWQOqYCbm0W2ic1IIp0DmM%2FHehT%2BjV2v7NW44fdrbsWjj%2BWIX5NuTn7zcQsAelKGNUhsUGATEfr0u211J1BaD0esXlUmXdnw6Z%2BV0ekwxKtb52N6MhORIcZ5jgdWWIam%2B0JXG3Fc4uo2REjzrHqyG1bRV54Lbz9Z0i8AU1EosGVW3zTpw9UrwsXdhklADs6lSfm9Z34p6XDCkmqzEBjqkAS5gB7lLHJt1h3jh6HqyaC2TZEMtXtfNDtbGPh%2F7W%2FVf6cPyDsp7b0FUSfVNllaYkZeU7Bd5FLreHnsw5XA%2BSSrMFHRiXjY8Lbo1CpumGIpYi9xPMTqQmzXY0ARr9M04lSMgiKkMx7QDelDe94JAPcU4SeQ4Av8q7Rhjf5LX5EqBQKvtpZJ33a84Qb3iBNCfSPFZz9kXK81UAGkeglVKtVBzCGk4&X-Amz-Signature=5a42020a6c28c6569cc5a13fc9821a3132667565938f9f1fe4a1b533eb57bf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFAIKVC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDteu7So63%2By0VWUZei%2FVduuMMjJgDTg3b0VPeKyXqQMAIhAPVvCGXerbpQvkW6qUUhz2EW2V4LbL77NBhbfXKuzidvKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1qoPZtnJERHMIffsq3ANl0IuLFDUsHKdttgYING6%2FL5fUUamNzF%2FsRAZOyKoUmWk9dcJbhTFrlaaBuNhEmRg40fp0wjzspzeyKDA05fTvrsGW64az8qMDzAwwPLnH0YdjFtMre1Mq0EgGDOPk1PFJiA%2FE0iLY7MoKXB%2BkH%2FgXmchnLMNL5%2BtBUHKH4cVzrsvqMGTSZvKnfL%2BuXHPA3xFDx5rmHPpmsxPk4bqlfCVVWtPQudgwGnIonrDV8eFub62%2B1X2pislpfI72INj4VtqmPC3VU9dHWiyyATJeH0Y1kZAXJ7dEPUkWhtKwtvmdiEjXkuKfenhjU1n5BnTMsL1cK9d6mHvf9IzjsvDvWem941AEpkDJCl7KSbJfoNT9pJbApe0xsYSOXeziy1RcArad%2FDLV8JZWVST388ciSNmAuSvT16O81V3r6GY5A%2F1cwZdFFs8NWQOqYCbm0W2ic1IIp0DmM%2FHehT%2BjV2v7NW44fdrbsWjj%2BWIX5NuTn7zcQsAelKGNUhsUGATEfr0u211J1BaD0esXlUmXdnw6Z%2BV0ekwxKtb52N6MhORIcZ5jgdWWIam%2B0JXG3Fc4uo2REjzrHqyG1bRV54Lbz9Z0i8AU1EosGVW3zTpw9UrwsXdhklADs6lSfm9Z34p6XDCkmqzEBjqkAS5gB7lLHJt1h3jh6HqyaC2TZEMtXtfNDtbGPh%2F7W%2FVf6cPyDsp7b0FUSfVNllaYkZeU7Bd5FLreHnsw5XA%2BSSrMFHRiXjY8Lbo1CpumGIpYi9xPMTqQmzXY0ARr9M04lSMgiKkMx7QDelDe94JAPcU4SeQ4Av8q7Rhjf5LX5EqBQKvtpZJ33a84Qb3iBNCfSPFZz9kXK81UAGkeglVKtVBzCGk4&X-Amz-Signature=223d045f2b9a3424168136f9446276ca7ffa3a344b63e80a38697af69c3bc1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6CR57%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzzrzCcORTTjeIepsI7qHdx7vW9jEFKrivbDR7UihPXAiBhIO0NsN2tleb2Zc6E28SKXaphkJixU%2Bl%2Fb3fkUNBmWyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf6oRg8r%2Bv5dgXyKVKtwDHXY4chT5GPZR0y8AoydTOTaO%2F0W%2BfemZgpwsWhF%2FvZZwJ5TRN2%2FoUINSf3DFQIrjNiYUtNXKYQFhHhFAWRuSqKAX%2B1EqUKDe5Jw6n9Qad6yT88L4cMf0yglU6JIeumHijuilZE3GWPc7oKfsAe%2F9JI47GQSSKjcWWHrirGjBvMh6mlkgoeJ11DZY9Po5Y25ScOklhSDd18OHFccfWn8sEAk%2BrbVxRtlCeZsElCfBvdOBHJA1TezfxHmrtwCXL03Ehu5tElYYxBenBOY539Z%2Ftx66%2Fee8JvlbDRz2f4WL3cSG6503hgNxLUWwDteaoksDql55wE%2BUm9FCHbNaAGjTYrWFuCYkeIjyNqam171L5JhBVsY3R6FMAxqZhGhAOCeudU9nln728bg6ri%2B6X2ikTqEvP7bkFW%2Ft6O50f%2B4M1hhVIQkDMtSdftDPA48p0lQwgsbZpOe7HnUrY%2FSjZPwQRMnJv7fA4kQeWka%2FEv3Hx3Bpo63bnrfjv2D3RY0KQmPNEqj3ifDmnNvMXyh4DrdrY0hH32a%2Bpcx4t%2FChEJgcr%2FNmFsaIMVbh0jIeDWwicn0S2uM94xygvqLCNNFyYIXLW%2B7%2BNzEOl39mY8n9m6dL8tBY15RZafbcqn5z8iAw4eOsxAY6pgGVBpEnISwNuT5uWc9qFpRdTyZpCDihafj%2ByrTvVkvuf0nJ9tSKjo%2FPtZQGS1FA%2BmwatEf2y45SyBcR2hNQXYEFV3RVxuRDKH%2BH0L1Y4cmC6qQE2Wa0LCBUuo3wgHlEsiBYUvo5Ff0y12YCAQqoy0UzhKVViCaPtbsiY%2FDtzg85QWcb0voktP6wltEUowAuXpPl5g6S%2BeLBnB3nDuodhva4LfM%2BcNOf&X-Amz-Signature=4aa7a75e2e9ec76f0679ac43749bd4cd4285ab1f36ee2ffea2f8d87876500b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFCCBB7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpxWi%2BJUd1qsj0m6mgSFpOkaZt53xj%2FDhPCONVxYOcMAiAI2e4VqJzLWT%2BcWgXfSrp5zsO2gVG0TX1a8zT8t3xUHiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6g8VY1FFNxktlA6KtwDKYY%2BX83Whw%2FfE8IbEoI3BrSEqRnp8xRgFU5d3H2xD06axRZedKMiIAOcJa%2BtrhGmDThayXd8TxZuA9fc%2BnswIIafWj3oOIDQ4oW9I0X7eoh9UKVyDF4lEnLhQ0KV333osm4tVNVFVVuWpHztSfkh015lXWFx3ox15%2BtZ45NScE3z%2FCE%2FVqFKqiv7tL6CtNmBOIWMVciTCXQK6WLDOdFVm%2BdiSZrxLLSSHPgpk%2BHFF7jfiDIPYkyGaYLkmMtZb7p9dunPezKy7AEpka4m85raRT8PXPANK7DpjknLiuc4S634e%2BygDDQtasf5wrWX7drqFIpxwSV78J77yyH8CuM1PcvSKmGxDS5e3YLvmTDNJYtuXOMqs%2FCpMhTm3Lh31cwW5%2Ftmm%2ByNAhOlsniMEAAQM8%2FHXV%2FlMphMu5wj3GWI3P%2FCp3cFkFSHFKUWd0IASfgyFI0W1ci2IAo97jgSH1Z%2Bw0U0aPlqL4qDDnCChIBf3T%2BR%2FCelcnbK%2FtiXy2uR4ixUboU8Nz9uVyocBynClfctyLCv9XJGy5%2F0bDiOTMpAz7I3llTelWi3DyAAYLan0ZeGKUHkWrqWaDFmd6wWYj87zKs9SnQY%2F%2FsC8yehqlV54xrarAlITr6cuDWu7kEwxpqsxAY6pgHgkmmL80KIOcmBB3iJe70%2Fq5Mtu0a4%2B9MwDwdtmnNhDz9EhwTGPVYDlJVYkNwG9wfXYbYTWW4kXocLht3pzjDQ%2FSScncV3KsT4reVGo7UdLhgitmDABeOUoH6DKB1YMbL0IEUPks5zpBzY7P%2FM9y6pSYkK2dCw4SBCbEbP182Ybv9648cBaiRVEfVCQccwdMOQ3HO4N9aqRvfPlnHO0EJPm91P7x9J&X-Amz-Signature=a107e29ce112d2b2b46b2a3a5f95d84be8535fea7b0ae285ac5c90d1fc65b135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFAIKVC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDteu7So63%2By0VWUZei%2FVduuMMjJgDTg3b0VPeKyXqQMAIhAPVvCGXerbpQvkW6qUUhz2EW2V4LbL77NBhbfXKuzidvKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1qoPZtnJERHMIffsq3ANl0IuLFDUsHKdttgYING6%2FL5fUUamNzF%2FsRAZOyKoUmWk9dcJbhTFrlaaBuNhEmRg40fp0wjzspzeyKDA05fTvrsGW64az8qMDzAwwPLnH0YdjFtMre1Mq0EgGDOPk1PFJiA%2FE0iLY7MoKXB%2BkH%2FgXmchnLMNL5%2BtBUHKH4cVzrsvqMGTSZvKnfL%2BuXHPA3xFDx5rmHPpmsxPk4bqlfCVVWtPQudgwGnIonrDV8eFub62%2B1X2pislpfI72INj4VtqmPC3VU9dHWiyyATJeH0Y1kZAXJ7dEPUkWhtKwtvmdiEjXkuKfenhjU1n5BnTMsL1cK9d6mHvf9IzjsvDvWem941AEpkDJCl7KSbJfoNT9pJbApe0xsYSOXeziy1RcArad%2FDLV8JZWVST388ciSNmAuSvT16O81V3r6GY5A%2F1cwZdFFs8NWQOqYCbm0W2ic1IIp0DmM%2FHehT%2BjV2v7NW44fdrbsWjj%2BWIX5NuTn7zcQsAelKGNUhsUGATEfr0u211J1BaD0esXlUmXdnw6Z%2BV0ekwxKtb52N6MhORIcZ5jgdWWIam%2B0JXG3Fc4uo2REjzrHqyG1bRV54Lbz9Z0i8AU1EosGVW3zTpw9UrwsXdhklADs6lSfm9Z34p6XDCkmqzEBjqkAS5gB7lLHJt1h3jh6HqyaC2TZEMtXtfNDtbGPh%2F7W%2FVf6cPyDsp7b0FUSfVNllaYkZeU7Bd5FLreHnsw5XA%2BSSrMFHRiXjY8Lbo1CpumGIpYi9xPMTqQmzXY0ARr9M04lSMgiKkMx7QDelDe94JAPcU4SeQ4Av8q7Rhjf5LX5EqBQKvtpZJ33a84Qb3iBNCfSPFZz9kXK81UAGkeglVKtVBzCGk4&X-Amz-Signature=683484cc44099b6fb1a83d8af0ff05d86f1d99d83b039521abe39670a5014f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
