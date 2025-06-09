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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4J6NAV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp005lzn0fUxBvm9sNGw6OXpXmGK4eNMsnZlUvA3y6NgIhAOZJ8ZldHAe9p4pfpAg4RILz2yBxugtiD149JEl8OA64KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy75ivzWxF%2FRoj6hPUq3AMf8FfSuh9i07A3iBL7hqEqSgdh5tB8FpljtPm5hqmNThT27yZrTlUxeq8%2BsO8%2BdQmHMGnoEl6TJD4QRNI0HBw5GgdPfgknnG6RXBszCqmwgNsU1E1S%2BREjHIEDAqgkUqW7wVLqewD1I3yNs98gcgQWZFB66PCfgW32YyAmRY4v7K37iD5wshlveld4H1%2BCCiW%2F3weWshs09feOI4krk2BXYL7XanocJr29mErTqJz3N%2BW5L1dAYkhIqdV8MyGlv2XjzEXcRz4mjQR2mjycewwgYvo5WmvlWa3Xcfw1NYZVYjndcgxUYV8bUtScmDKV9%2BgSUB8JzpMrFVUZsh3sij9TVfSzsINHXMwvFH1A84%2FxC9rd%2FAxYgliTZaoacM24iqVX1VFCnuTpMGDPnr7JLpm%2F3ZWsp9777UxLiaxpMc13cfQl%2BzsG2um79%2FlHO5IdKz4kvu190VKEiUmPKP5qQFYqZZ8iT6aMOageSw0HQmFKy%2FLhBuAL6HHwFd6oeQoJ2sAnoJkzfhFZGiAID%2FD6xrrT7ojmUBy%2FI6YKtuyMmknNKpnFtiXGhfL8km2YwHt9Js9x8OxOsdCq3bJjdOC9qA5v36VrjVHEnh3qLD99UZhx%2FdyybmqSc1NkDicLpTDt%2BJzCBjqkAYK3R04VSz6A%2FNNxzsEeL77rbYQpdlwnXRfq0VJ%2BSjSKDGUJ%2BmKDzrI59TOmkX5KI9u8EVf42e2kRMWR4czAmpgNLIUMkLpyWawlIcmtPRwENCpei33W%2BcY%2B%2Blhsq0FjOK0SWFDTZr8X8Soi%2FIqznfS4la%2FR8ESO4Y0376FeYQ%2Fzfee8%2BilepKBdzlqQISf4wsjNatrAaqST8aOi%2BdhQHyz%2Brfft&X-Amz-Signature=755879f280217cbded6be18d6dfb264b93711542569f184e5d40add2f41aca2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4J6NAV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp005lzn0fUxBvm9sNGw6OXpXmGK4eNMsnZlUvA3y6NgIhAOZJ8ZldHAe9p4pfpAg4RILz2yBxugtiD149JEl8OA64KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy75ivzWxF%2FRoj6hPUq3AMf8FfSuh9i07A3iBL7hqEqSgdh5tB8FpljtPm5hqmNThT27yZrTlUxeq8%2BsO8%2BdQmHMGnoEl6TJD4QRNI0HBw5GgdPfgknnG6RXBszCqmwgNsU1E1S%2BREjHIEDAqgkUqW7wVLqewD1I3yNs98gcgQWZFB66PCfgW32YyAmRY4v7K37iD5wshlveld4H1%2BCCiW%2F3weWshs09feOI4krk2BXYL7XanocJr29mErTqJz3N%2BW5L1dAYkhIqdV8MyGlv2XjzEXcRz4mjQR2mjycewwgYvo5WmvlWa3Xcfw1NYZVYjndcgxUYV8bUtScmDKV9%2BgSUB8JzpMrFVUZsh3sij9TVfSzsINHXMwvFH1A84%2FxC9rd%2FAxYgliTZaoacM24iqVX1VFCnuTpMGDPnr7JLpm%2F3ZWsp9777UxLiaxpMc13cfQl%2BzsG2um79%2FlHO5IdKz4kvu190VKEiUmPKP5qQFYqZZ8iT6aMOageSw0HQmFKy%2FLhBuAL6HHwFd6oeQoJ2sAnoJkzfhFZGiAID%2FD6xrrT7ojmUBy%2FI6YKtuyMmknNKpnFtiXGhfL8km2YwHt9Js9x8OxOsdCq3bJjdOC9qA5v36VrjVHEnh3qLD99UZhx%2FdyybmqSc1NkDicLpTDt%2BJzCBjqkAYK3R04VSz6A%2FNNxzsEeL77rbYQpdlwnXRfq0VJ%2BSjSKDGUJ%2BmKDzrI59TOmkX5KI9u8EVf42e2kRMWR4czAmpgNLIUMkLpyWawlIcmtPRwENCpei33W%2BcY%2B%2Blhsq0FjOK0SWFDTZr8X8Soi%2FIqznfS4la%2FR8ESO4Y0376FeYQ%2Fzfee8%2BilepKBdzlqQISf4wsjNatrAaqST8aOi%2BdhQHyz%2Brfft&X-Amz-Signature=ed23a06cb8d724d2f266cf91de65aae4c74902c5f234833f90a1298ef2c69ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4J6NAV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp005lzn0fUxBvm9sNGw6OXpXmGK4eNMsnZlUvA3y6NgIhAOZJ8ZldHAe9p4pfpAg4RILz2yBxugtiD149JEl8OA64KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy75ivzWxF%2FRoj6hPUq3AMf8FfSuh9i07A3iBL7hqEqSgdh5tB8FpljtPm5hqmNThT27yZrTlUxeq8%2BsO8%2BdQmHMGnoEl6TJD4QRNI0HBw5GgdPfgknnG6RXBszCqmwgNsU1E1S%2BREjHIEDAqgkUqW7wVLqewD1I3yNs98gcgQWZFB66PCfgW32YyAmRY4v7K37iD5wshlveld4H1%2BCCiW%2F3weWshs09feOI4krk2BXYL7XanocJr29mErTqJz3N%2BW5L1dAYkhIqdV8MyGlv2XjzEXcRz4mjQR2mjycewwgYvo5WmvlWa3Xcfw1NYZVYjndcgxUYV8bUtScmDKV9%2BgSUB8JzpMrFVUZsh3sij9TVfSzsINHXMwvFH1A84%2FxC9rd%2FAxYgliTZaoacM24iqVX1VFCnuTpMGDPnr7JLpm%2F3ZWsp9777UxLiaxpMc13cfQl%2BzsG2um79%2FlHO5IdKz4kvu190VKEiUmPKP5qQFYqZZ8iT6aMOageSw0HQmFKy%2FLhBuAL6HHwFd6oeQoJ2sAnoJkzfhFZGiAID%2FD6xrrT7ojmUBy%2FI6YKtuyMmknNKpnFtiXGhfL8km2YwHt9Js9x8OxOsdCq3bJjdOC9qA5v36VrjVHEnh3qLD99UZhx%2FdyybmqSc1NkDicLpTDt%2BJzCBjqkAYK3R04VSz6A%2FNNxzsEeL77rbYQpdlwnXRfq0VJ%2BSjSKDGUJ%2BmKDzrI59TOmkX5KI9u8EVf42e2kRMWR4czAmpgNLIUMkLpyWawlIcmtPRwENCpei33W%2BcY%2B%2Blhsq0FjOK0SWFDTZr8X8Soi%2FIqznfS4la%2FR8ESO4Y0376FeYQ%2Fzfee8%2BilepKBdzlqQISf4wsjNatrAaqST8aOi%2BdhQHyz%2Brfft&X-Amz-Signature=7f87f4446793aa32ae3cc1e69a14d2f52b0bd000cbc4cbd648262931e01bdbfd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKF7KKX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBou7onV4uOwl0d43X%2BP4Ly4DRLE12cAvF3YCKsc9L%2BQAiEAsJQkkrIwcoafKRFL0IRI8Y3SVfFEDzz%2Bg%2Bmutv9oy28qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsoQNyhqRoPK6U6%2FircAz7IdkOJZyrxkWUI7EdNIrJaLoLA7q%2Bo1cmajypKHw6Pnkg8%2B%2BnwIXjKVPm%2BJzOAQGQdulsPdSmDESGvhOI8ffeI4i49e6myhoSuPJevqx9sk3EKPbDnjvbGj%2BGyoZ8pQ037hbv5rIi%2B58%2FO6Y7YveuWvX%2F5KpUfSjChy4SUmTue3Vk1JDAHAw3ekid4zA8xZ8P6tOFq3z3Gbz1WqUFFNQnApEMsUq6xBtDVheBIFRF8Fy1Q46q6mjsoDjXAe9Er9H%2FFw3Takz%2B2MAv0ZLmJDJcBIrbgiy%2FPg9kJ2R5d7u9DhsP%2F90PyBCnVX%2FincWwSedSrI5AyeQ8QYNNZHU480GtH2dNeyHIaOosuZ%2BuBwSjdIM40xc8RqG%2B79cKgna9nKkJZfMdP2R1GRa%2FweK5qHjJ8xfF3trySzPw1ySimTq5SJNgI1T3abPM0D8oVQQ%2FLIAnrdt75l%2Bsv2q98EeEJ4y9WYJB1B%2FmUq85sIgS%2F6t8Tt8dK7VH4lP35P%2FVdZ5%2FFEmK3P0TahxoY4y2cKy2smBroWtbGkhjWVjAdZFgvbugPXwkRQ5kK7jg89EtC%2FZ1VA1LmCFoN%2BEmdQPTSfGBInRiRuQscp%2FiDWSGsXecbqsD5e0pVLsfkCGKdx820MIyVncIGOqUBuzkVucDF7uyCbmtc1OHp2q7QLAvX%2Bx7FRd%2BTZTems6zozV4pAr8sUh9WPvfA6Zq03uztc9MAMTNHakXH%2Bxo4GKW3MlMN7k2FKydu6op97YhhNOm%2F2AZH98%2Fdj%2BALQO35g%2B7kMi0bce%2FURVfp3M2dUA9%2F17hr%2FUDXtxGqTqFcownmuFvk2lFbAy6DtvgPclfxmkq9Z1wNanQqOi0R1%2F%2F7VaPPO%2B%2Bs&X-Amz-Signature=c254b220ceb781aee3c0b256bd6907190881c94be4ce4d969a44ccc7413c430e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P2OLAO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFOrn2cWZbvKqBq3jFGMRPCZNF%2FpKKcsI2Ce13nrpkWAiEA4g8I44QWCvbhnflgJ9%2FqdStgz3vm6GBkaY3DhKIePK4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A55ctSaKYqbEANSrcA7R6WK5QUBvhRjzA9q5IpjIrthKjiCrAOyBpup%2BD4lQF7TurgcPij5WVzU6OMFTfDpeU8JMYCWd5kAeXMV4NE8BAiVIIxRtZuh8CNKUEJU7QIUth2RSFxwmaD6wmhoLj4gBrsSEjY44oDA9X%2B0S6RjS4aQWF9gJnAn9f8Xn3y8Fi4TBPdwVbDo1E9X7Slqzk7Q3FA4o5Ot5G13W8dYGQrDP8ht5ZqfczQFKkEf%2B6o2ESYWrjTYysgjlqVl6q3pRM5D7xkxns4CW6cmifDkewjfh%2FrQS0J4JDnZdWCHcoBB9QZiet2kTGlNhoPrAbjkcimBRrQDW0aBnFcwXtl60jWSN9ysPnbYkV8aHT80kB%2BApJbPqaardNb%2Bkjo6ESgcjrLJm%2Blq1qkr%2B7qBR3aL2uYJUWM2RiLIr5TcSyorRzkZXGqZe46eXI4XaIr49jUAsQsaTSwYg25F2Or%2BfnELL25MLPG62LJbcUgrwY%2FfpOFAZOrMMUKUprLjyLqNpIGAPZ65UaEjmTmXUOWEy%2FQZGfo1sGTwbA2N31%2B%2FHuiJ72YLtIGuclz8dCvg3nnvOj5Iftr%2B6Zy9VjICt%2FwsGdlRFr6B7flE1AF1JTlWmD%2FeAni5UkWV3ztpI9tF67oOG9MPD4nMIGOqUBnOI0sdQ8dOsEES54rI4BYGO5JjLANMeGXS0XPYNf53untcZpbLPFLLj3nTI4uLXloBg0YkYHLB3hrfZPdpw4zrlz%2BtugIiaNp85iTcUjYz3Wlj8VXGueEWSH1jdrxzo%2BBd1CKRiq314PA4QrfEyi67fZl6dnBgvhMFVmZ5EtNDc%2BTOmKHZvl7aj1ddiKfJTl0kGF1Vgnku5JYWUK%2Bfo2%2BVOkmQTS&X-Amz-Signature=62c6f04e160918c86670e3fc57ebe909bb9063e24655bf3d4023dd8a93da4bad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4J6NAV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp005lzn0fUxBvm9sNGw6OXpXmGK4eNMsnZlUvA3y6NgIhAOZJ8ZldHAe9p4pfpAg4RILz2yBxugtiD149JEl8OA64KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy75ivzWxF%2FRoj6hPUq3AMf8FfSuh9i07A3iBL7hqEqSgdh5tB8FpljtPm5hqmNThT27yZrTlUxeq8%2BsO8%2BdQmHMGnoEl6TJD4QRNI0HBw5GgdPfgknnG6RXBszCqmwgNsU1E1S%2BREjHIEDAqgkUqW7wVLqewD1I3yNs98gcgQWZFB66PCfgW32YyAmRY4v7K37iD5wshlveld4H1%2BCCiW%2F3weWshs09feOI4krk2BXYL7XanocJr29mErTqJz3N%2BW5L1dAYkhIqdV8MyGlv2XjzEXcRz4mjQR2mjycewwgYvo5WmvlWa3Xcfw1NYZVYjndcgxUYV8bUtScmDKV9%2BgSUB8JzpMrFVUZsh3sij9TVfSzsINHXMwvFH1A84%2FxC9rd%2FAxYgliTZaoacM24iqVX1VFCnuTpMGDPnr7JLpm%2F3ZWsp9777UxLiaxpMc13cfQl%2BzsG2um79%2FlHO5IdKz4kvu190VKEiUmPKP5qQFYqZZ8iT6aMOageSw0HQmFKy%2FLhBuAL6HHwFd6oeQoJ2sAnoJkzfhFZGiAID%2FD6xrrT7ojmUBy%2FI6YKtuyMmknNKpnFtiXGhfL8km2YwHt9Js9x8OxOsdCq3bJjdOC9qA5v36VrjVHEnh3qLD99UZhx%2FdyybmqSc1NkDicLpTDt%2BJzCBjqkAYK3R04VSz6A%2FNNxzsEeL77rbYQpdlwnXRfq0VJ%2BSjSKDGUJ%2BmKDzrI59TOmkX5KI9u8EVf42e2kRMWR4czAmpgNLIUMkLpyWawlIcmtPRwENCpei33W%2BcY%2B%2Blhsq0FjOK0SWFDTZr8X8Soi%2FIqznfS4la%2FR8ESO4Y0376FeYQ%2Fzfee8%2BilepKBdzlqQISf4wsjNatrAaqST8aOi%2BdhQHyz%2Brfft&X-Amz-Signature=d627c19f86cbcad71e4aee429afb43a0118d7863ef84e094a4aeb43336259a37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
