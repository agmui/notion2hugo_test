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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334KGIDY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRHJdH8RU4fcEXTaLAc00360gSDvDlacJz4ndQFN4UDAiEAohKNBvIJvgJaSehNLm5AmIUCm1H3njAurcLyHvw0HOIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJljARlsrypArBDYrSrcAwTk1O5YnB8RbDLX3Odf8zXpEZsJ3mljjsOr0uNoV2EtlyCGia68Pf1%2FZTsPUJWZ6xoj12%2Bpa2Kf8kPzFogAM1sLdFuzfXxc8QIVc%2BqG0e6ZS5FChVZn8GNqIpmsr%2BoyXwvxF9FSfv8NDgPVTBibB4qIF1QGb5NyJ8EcdoClj%2FwpH2%2BE4awN%2BvdlWBG8Rf1PkV8WMQL8xMpEWwW9PPrBffzKA%2FhEmpuKP391BnxaPoBLlbiXGIHiGW%2B3gqkHoK9Mx%2FeFvKD3HaAmnW6HqhoRcnpjuIMtFvt3f5vEcABVYRjODTiA6PF6XWczZvmLc6dief715OAujrA03UCxfHqIRoLuXk8U2KBodh5DOIrU3Aryfq0%2FzHOqWL11qMiWATsmvbBTx0gYSAU1jY41yIx3wfWGRssVO29EAa%2FS8BWvCwhfInzPeS%2BC1fNddR2X74LAcBgPYNWepCTY7AzquQ%2FHPNWxNwWG%2B4wmoKzP3ApLI5NytSjGk1iLLwIzD3iNU8j21NW8anyqgBlO8AGJLZmlJQwbRR%2BCwUq3rlR3hYjclgpEOoSQhAVqkMDiHW6PS3%2B5dvfzfAso8FKB4JLxB2rE6n5%2F1j06BvZrVEzxUw%2F2yqrpWsGJjJ1Kw%2BVwxnMaMJnsh8MGOqUBpzaIQC5mSrpdYEq9wI9j5UTMoMrOsr8O4WWFiHAzwhqEvw%2BL2zLVYF0DmcJkxNFDj%2F7LDZFK4wBWZOf6BVKKzTKcjMjrQUlgXu%2FVtS6mycI0X1N5JlmLQ5wekPLZdeal%2Bd8cAYxe6S30gfUP0%2FmBjUAEfJVyqQTP0CiXkYf7peuLIBhvJvKQIOa2xypUibTe%2Fzi9J27ABuzY8xUVNgathc2acvXq&X-Amz-Signature=a2099f451fb97ebf188433e39a6296ff66f332a2d7ccd8c21cf3c5f737efdc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334KGIDY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRHJdH8RU4fcEXTaLAc00360gSDvDlacJz4ndQFN4UDAiEAohKNBvIJvgJaSehNLm5AmIUCm1H3njAurcLyHvw0HOIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJljARlsrypArBDYrSrcAwTk1O5YnB8RbDLX3Odf8zXpEZsJ3mljjsOr0uNoV2EtlyCGia68Pf1%2FZTsPUJWZ6xoj12%2Bpa2Kf8kPzFogAM1sLdFuzfXxc8QIVc%2BqG0e6ZS5FChVZn8GNqIpmsr%2BoyXwvxF9FSfv8NDgPVTBibB4qIF1QGb5NyJ8EcdoClj%2FwpH2%2BE4awN%2BvdlWBG8Rf1PkV8WMQL8xMpEWwW9PPrBffzKA%2FhEmpuKP391BnxaPoBLlbiXGIHiGW%2B3gqkHoK9Mx%2FeFvKD3HaAmnW6HqhoRcnpjuIMtFvt3f5vEcABVYRjODTiA6PF6XWczZvmLc6dief715OAujrA03UCxfHqIRoLuXk8U2KBodh5DOIrU3Aryfq0%2FzHOqWL11qMiWATsmvbBTx0gYSAU1jY41yIx3wfWGRssVO29EAa%2FS8BWvCwhfInzPeS%2BC1fNddR2X74LAcBgPYNWepCTY7AzquQ%2FHPNWxNwWG%2B4wmoKzP3ApLI5NytSjGk1iLLwIzD3iNU8j21NW8anyqgBlO8AGJLZmlJQwbRR%2BCwUq3rlR3hYjclgpEOoSQhAVqkMDiHW6PS3%2B5dvfzfAso8FKB4JLxB2rE6n5%2F1j06BvZrVEzxUw%2F2yqrpWsGJjJ1Kw%2BVwxnMaMJnsh8MGOqUBpzaIQC5mSrpdYEq9wI9j5UTMoMrOsr8O4WWFiHAzwhqEvw%2BL2zLVYF0DmcJkxNFDj%2F7LDZFK4wBWZOf6BVKKzTKcjMjrQUlgXu%2FVtS6mycI0X1N5JlmLQ5wekPLZdeal%2Bd8cAYxe6S30gfUP0%2FmBjUAEfJVyqQTP0CiXkYf7peuLIBhvJvKQIOa2xypUibTe%2Fzi9J27ABuzY8xUVNgathc2acvXq&X-Amz-Signature=77ab82e4c860c96039573529b409b9116f82102491f8440210120e8974b1ca0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334KGIDY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRHJdH8RU4fcEXTaLAc00360gSDvDlacJz4ndQFN4UDAiEAohKNBvIJvgJaSehNLm5AmIUCm1H3njAurcLyHvw0HOIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJljARlsrypArBDYrSrcAwTk1O5YnB8RbDLX3Odf8zXpEZsJ3mljjsOr0uNoV2EtlyCGia68Pf1%2FZTsPUJWZ6xoj12%2Bpa2Kf8kPzFogAM1sLdFuzfXxc8QIVc%2BqG0e6ZS5FChVZn8GNqIpmsr%2BoyXwvxF9FSfv8NDgPVTBibB4qIF1QGb5NyJ8EcdoClj%2FwpH2%2BE4awN%2BvdlWBG8Rf1PkV8WMQL8xMpEWwW9PPrBffzKA%2FhEmpuKP391BnxaPoBLlbiXGIHiGW%2B3gqkHoK9Mx%2FeFvKD3HaAmnW6HqhoRcnpjuIMtFvt3f5vEcABVYRjODTiA6PF6XWczZvmLc6dief715OAujrA03UCxfHqIRoLuXk8U2KBodh5DOIrU3Aryfq0%2FzHOqWL11qMiWATsmvbBTx0gYSAU1jY41yIx3wfWGRssVO29EAa%2FS8BWvCwhfInzPeS%2BC1fNddR2X74LAcBgPYNWepCTY7AzquQ%2FHPNWxNwWG%2B4wmoKzP3ApLI5NytSjGk1iLLwIzD3iNU8j21NW8anyqgBlO8AGJLZmlJQwbRR%2BCwUq3rlR3hYjclgpEOoSQhAVqkMDiHW6PS3%2B5dvfzfAso8FKB4JLxB2rE6n5%2F1j06BvZrVEzxUw%2F2yqrpWsGJjJ1Kw%2BVwxnMaMJnsh8MGOqUBpzaIQC5mSrpdYEq9wI9j5UTMoMrOsr8O4WWFiHAzwhqEvw%2BL2zLVYF0DmcJkxNFDj%2F7LDZFK4wBWZOf6BVKKzTKcjMjrQUlgXu%2FVtS6mycI0X1N5JlmLQ5wekPLZdeal%2Bd8cAYxe6S30gfUP0%2FmBjUAEfJVyqQTP0CiXkYf7peuLIBhvJvKQIOa2xypUibTe%2Fzi9J27ABuzY8xUVNgathc2acvXq&X-Amz-Signature=b1e1b1ecdffe638e66245d977daf455d49fb67fc79ecb5e732c1b8fcc59d709a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWCPVNY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB6tq6AYBNMpFz1z2j7v4yoX%2BeyrV5bHWtvaRh4wm8XQIga3xPdLsY97xi8fXp%2FuaUAbXELuzfywIFQOgGjYyyYlAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO%2FRJPhu0J2YICoTyrcA2rd4%2FmcltckqEtuoK7i0cAzoRmslOz59aJh5a4zmu7%2FfZWR9Mcr9iXZXK8hK%2BpPE4dGjWL0JpguuBz4KUPFd2wjAMhKXL418rreCfMPPryjekVXuHIZHZlbAQwl%2FaNiQLsTKPAYlnElfqUU2wZFwqa2PI9VomIxLu2vC1YzZS1BOqZgkURM5gS5wwYrIl8VN48MpnTdattsSOn5VItfHBHo%2BSC0PAeyvvw6lQBMPhqqQT6Ran6FCVkfXErndlrno01ZfbrOCFvdimScUcAO0EeIIvyp%2FGo1PFd%2FcpjUsQ7bLTBIr4IJiBtdatJNz0kwUmcWl3ZK82MDW%2B3XdE%2BeuWRhr6JxB2VPF2%2FOIRl9cFXxNfQBPQxfELu1IdnOeKLSYCjsTMb3ZyY8i8%2B1QvxhIBsq9BdGvk9TFgfM8y%2FImDJXmjJDMIsG9XiVC0UGgh7HejuPQO%2FrFo8ZaMt5%2BeYUSc87KRGyEuHDemd8ZpafT4IeugGWIrRIzOB%2FbYKuKAOMHFd0sjIuaM3bBAWcJmO6%2F0pHBvYukYwdfVfyPzHWN%2FdCDFxTazC%2FdMRFBNWKY0hpYYEzQwrWp09cXIshEXXL%2FDEdcuhn6qIvigWq%2Fh5vxC89jX74UpOZ7p7V%2BhrnMPvwh8MGOqUBvuCliqctQYtZOXQRyIStGFRVWJyfil3Ij2NKkYd0XA8m8SuEyr6V8RN7GRxHbkKuVfOTxZG2jy20G31wzWKdaAirB4iAJCcJfkoIT7ld4%2BfDUGjx3jwcmdW3CjVF4%2FjtOmLoINsbgYpPQ4AHmEgijb28PbCXdWFFppMDTRRb2bCe0BQUSEtsYuKyihXg98%2FRy13m0vGCIUIusNKTGra5eUaVKQiv&X-Amz-Signature=9e91e633ae579a7315e962e3d527569caee8b96f2d02faf4878807140a35b7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZ2G4EH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDinVW6nnVD%2FiinsfccGnhEov0iPeVgC6ovegcxjJqRTAiEA1JC7DDsyiGu%2Bt6rRtViKEHEDL2W8HvR9bWtFeF2BovUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKhqeB78NwvGn5mWircA5ZUWwKYwl0aF9e7ia0Swgx8csuIidKOK%2Bas9JSAPv8srj5AyfwRvYlqqr5H6nBEUbMCc28kEQZZzrpFh9VIHyY9nssxklTeaVVtdNHssOUt5DApPiaiXuuyOFtkSxQ%2Fv6XnfpDItxfEyDbtWlPDP8gYFSz6wuMIuNoC%2Fj0wJ2RDaOdoVFIpoXsFalaX9wOb5TVXUUNJBTJf%2Bdco4FrX8kk1arpwXeC8g3acAQgI%2BuPOK6y9LnCDgB1fVLo5xo2OE8VkGM8Rco5Jg99eXkuY2mwfuXM4XCyDMjk8VmzzkSslKrzJtvpl%2FbqsvV1CvsuwXhnhRJFIGJ9K93dbb8SOPOpeEZsTabZDenDeqrUQezL8KZbgAHq1qfeBtZdywe3Nydn9KQKZFkaemZUwJXHewN4QZPbXGIn7sjU1t2HqGvy47FypCaGOWXwAy6f6vWm1Ai%2FLM%2FWYDmTAqPJo7X%2BcWDcfEKWnk3fHh378HpiFrzMKK0jxG0Frg9p7P68iXtTLRThpoyabDIQVc4uxYN5Z6ssoePx%2FjFR0oFtRboaSLqOlmEoDxn1hZSoTD2sw05k1Uk0k6Ddx1j7JD4uxQghCmTzclp9VWgpwRg9KK05oQ45TWaLljpYdIpUkbZYsMNDFh8MGOqUBeh%2BpExUI3GU%2FlySla%2F3H3XTTUfxY%2Fk5AhdrrRbmRF1EnbN0h74bg%2BASHaYaPY90jsP4tot%2F2wgURX4K715ftyF%2Bn%2BtTn5B%2B5Z7lu5YSku1DwEAs2mxPEwwmlQm2greP%2BNgN51ZdQZyxAsqO7uf4cy4zdpe1rYVvpLptcSOO0i62GtydgPOyK6PNMtFqZHZglzY3Hr2ptv2G1M57DQonHjHcD%2F6C%2F&X-Amz-Signature=9e9a05fc386f4373bec71ee9b39bf35503d1e46e5e46c0d55ee81e65aacd6fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334KGIDY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRHJdH8RU4fcEXTaLAc00360gSDvDlacJz4ndQFN4UDAiEAohKNBvIJvgJaSehNLm5AmIUCm1H3njAurcLyHvw0HOIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJljARlsrypArBDYrSrcAwTk1O5YnB8RbDLX3Odf8zXpEZsJ3mljjsOr0uNoV2EtlyCGia68Pf1%2FZTsPUJWZ6xoj12%2Bpa2Kf8kPzFogAM1sLdFuzfXxc8QIVc%2BqG0e6ZS5FChVZn8GNqIpmsr%2BoyXwvxF9FSfv8NDgPVTBibB4qIF1QGb5NyJ8EcdoClj%2FwpH2%2BE4awN%2BvdlWBG8Rf1PkV8WMQL8xMpEWwW9PPrBffzKA%2FhEmpuKP391BnxaPoBLlbiXGIHiGW%2B3gqkHoK9Mx%2FeFvKD3HaAmnW6HqhoRcnpjuIMtFvt3f5vEcABVYRjODTiA6PF6XWczZvmLc6dief715OAujrA03UCxfHqIRoLuXk8U2KBodh5DOIrU3Aryfq0%2FzHOqWL11qMiWATsmvbBTx0gYSAU1jY41yIx3wfWGRssVO29EAa%2FS8BWvCwhfInzPeS%2BC1fNddR2X74LAcBgPYNWepCTY7AzquQ%2FHPNWxNwWG%2B4wmoKzP3ApLI5NytSjGk1iLLwIzD3iNU8j21NW8anyqgBlO8AGJLZmlJQwbRR%2BCwUq3rlR3hYjclgpEOoSQhAVqkMDiHW6PS3%2B5dvfzfAso8FKB4JLxB2rE6n5%2F1j06BvZrVEzxUw%2F2yqrpWsGJjJ1Kw%2BVwxnMaMJnsh8MGOqUBpzaIQC5mSrpdYEq9wI9j5UTMoMrOsr8O4WWFiHAzwhqEvw%2BL2zLVYF0DmcJkxNFDj%2F7LDZFK4wBWZOf6BVKKzTKcjMjrQUlgXu%2FVtS6mycI0X1N5JlmLQ5wekPLZdeal%2Bd8cAYxe6S30gfUP0%2FmBjUAEfJVyqQTP0CiXkYf7peuLIBhvJvKQIOa2xypUibTe%2Fzi9J27ABuzY8xUVNgathc2acvXq&X-Amz-Signature=4bcbac82ece92bfa72dd052054d958417e3514f738eba0eb29304c489ae79542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
