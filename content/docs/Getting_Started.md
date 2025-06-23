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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEXRNA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD5DyW%2BhL9vxn4OZOYJzwxrheM4TKfbrAxgB2gVKSWG%2FQIgUmQUAFgV%2BJ9mgVq6LAn1BS1LgFqXlUyCuxQKLLRgiA8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCGegN9%2Fgkdh8uWN%2FyrcA2wXrEo3IFMYywoEofLgUO6Kfh901As0G2lrogOOBi9m64y5VcwZv5aukbci2DeWmGfKS0eGC%2BA78K5gBoHyNx3bdU4qWEquhjeJiZ5rJQ31x0dsUld1WAyrz5iCfh70dViy37aAK4J3mcxcc8T1681P1RmEmdXb5%2FlZxYbHtS1sfZ%2FEU61Z%2BH9jDPKncw%2BOQ%2FH2QGl02l0ynnzh84Rp5upIAlxBFPVnDb%2BYEQ2teDL7W%2FGxHjv4SXOy2Upz%2BWsIBNcHXikw6Sb5fi9VVfre9Rss2It7yBgjj8RFOuUgu9%2Bcz7D3rGDvCtpL3zs950QMFI%2B%2FkFdsN3nsHFAdmPhEAdxq34OXI%2FoItuzIRrEjzmosmN9ETWK532M9aHq8acfBUL9pRNji15tKaa8xvCErN5op71G1zqYYV45m0cQCUgfXmRsGYweu6%2BLDXL7KvJwUQ1bqF%2BcZmUIoIEuI%2Fe8MltuPivxbbdxql%2FWOylNirMBr4ZH%2BT5K8k2AEAQJq%2FQ2OOx3%2BmPdx6%2Bu8LZcQ5Ogfj2YTP2TCWoxMuZcmTtj32p3Cvuh3wgGTj2BabMu5jh3fnic0C1aVegWjKjWTk4wmp161GswFg3aq%2FR7SNU8i1XPiBkEM6V7H4knYmPc8MJCz58IGOqUBDMtjrx127ip4JaKkIVNp4PmJACyCaEkRGwrqbaADOJJrYzz4zlYFLWUSBoHev0EQGLhbsX%2BcvWJlR3htgg0DcT3cKGhWiQ0012Ve%2BJBoudOMw1x%2B949bZzU68CQ5NsC%2FZjWY%2BE%2Fhuo%2B46a6KnlaYroaAdf%2Bp86gA%2Bq2tXi7dxurKYejxaTKCodEw9mz5dKoGKkRTLlOS2MM7eUFtAJMcZraP4Xw8&X-Amz-Signature=1e17494faa6a062fed3aefebc89ac1d28e1e516faf48d2475b177e732db10759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEXRNA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD5DyW%2BhL9vxn4OZOYJzwxrheM4TKfbrAxgB2gVKSWG%2FQIgUmQUAFgV%2BJ9mgVq6LAn1BS1LgFqXlUyCuxQKLLRgiA8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCGegN9%2Fgkdh8uWN%2FyrcA2wXrEo3IFMYywoEofLgUO6Kfh901As0G2lrogOOBi9m64y5VcwZv5aukbci2DeWmGfKS0eGC%2BA78K5gBoHyNx3bdU4qWEquhjeJiZ5rJQ31x0dsUld1WAyrz5iCfh70dViy37aAK4J3mcxcc8T1681P1RmEmdXb5%2FlZxYbHtS1sfZ%2FEU61Z%2BH9jDPKncw%2BOQ%2FH2QGl02l0ynnzh84Rp5upIAlxBFPVnDb%2BYEQ2teDL7W%2FGxHjv4SXOy2Upz%2BWsIBNcHXikw6Sb5fi9VVfre9Rss2It7yBgjj8RFOuUgu9%2Bcz7D3rGDvCtpL3zs950QMFI%2B%2FkFdsN3nsHFAdmPhEAdxq34OXI%2FoItuzIRrEjzmosmN9ETWK532M9aHq8acfBUL9pRNji15tKaa8xvCErN5op71G1zqYYV45m0cQCUgfXmRsGYweu6%2BLDXL7KvJwUQ1bqF%2BcZmUIoIEuI%2Fe8MltuPivxbbdxql%2FWOylNirMBr4ZH%2BT5K8k2AEAQJq%2FQ2OOx3%2BmPdx6%2Bu8LZcQ5Ogfj2YTP2TCWoxMuZcmTtj32p3Cvuh3wgGTj2BabMu5jh3fnic0C1aVegWjKjWTk4wmp161GswFg3aq%2FR7SNU8i1XPiBkEM6V7H4knYmPc8MJCz58IGOqUBDMtjrx127ip4JaKkIVNp4PmJACyCaEkRGwrqbaADOJJrYzz4zlYFLWUSBoHev0EQGLhbsX%2BcvWJlR3htgg0DcT3cKGhWiQ0012Ve%2BJBoudOMw1x%2B949bZzU68CQ5NsC%2FZjWY%2BE%2Fhuo%2B46a6KnlaYroaAdf%2Bp86gA%2Bq2tXi7dxurKYejxaTKCodEw9mz5dKoGKkRTLlOS2MM7eUFtAJMcZraP4Xw8&X-Amz-Signature=ec4e06f161fcbcb2a60205b28897e531845562e09d4dd95fc5760c0d6f91b03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEXRNA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD5DyW%2BhL9vxn4OZOYJzwxrheM4TKfbrAxgB2gVKSWG%2FQIgUmQUAFgV%2BJ9mgVq6LAn1BS1LgFqXlUyCuxQKLLRgiA8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCGegN9%2Fgkdh8uWN%2FyrcA2wXrEo3IFMYywoEofLgUO6Kfh901As0G2lrogOOBi9m64y5VcwZv5aukbci2DeWmGfKS0eGC%2BA78K5gBoHyNx3bdU4qWEquhjeJiZ5rJQ31x0dsUld1WAyrz5iCfh70dViy37aAK4J3mcxcc8T1681P1RmEmdXb5%2FlZxYbHtS1sfZ%2FEU61Z%2BH9jDPKncw%2BOQ%2FH2QGl02l0ynnzh84Rp5upIAlxBFPVnDb%2BYEQ2teDL7W%2FGxHjv4SXOy2Upz%2BWsIBNcHXikw6Sb5fi9VVfre9Rss2It7yBgjj8RFOuUgu9%2Bcz7D3rGDvCtpL3zs950QMFI%2B%2FkFdsN3nsHFAdmPhEAdxq34OXI%2FoItuzIRrEjzmosmN9ETWK532M9aHq8acfBUL9pRNji15tKaa8xvCErN5op71G1zqYYV45m0cQCUgfXmRsGYweu6%2BLDXL7KvJwUQ1bqF%2BcZmUIoIEuI%2Fe8MltuPivxbbdxql%2FWOylNirMBr4ZH%2BT5K8k2AEAQJq%2FQ2OOx3%2BmPdx6%2Bu8LZcQ5Ogfj2YTP2TCWoxMuZcmTtj32p3Cvuh3wgGTj2BabMu5jh3fnic0C1aVegWjKjWTk4wmp161GswFg3aq%2FR7SNU8i1XPiBkEM6V7H4knYmPc8MJCz58IGOqUBDMtjrx127ip4JaKkIVNp4PmJACyCaEkRGwrqbaADOJJrYzz4zlYFLWUSBoHev0EQGLhbsX%2BcvWJlR3htgg0DcT3cKGhWiQ0012Ve%2BJBoudOMw1x%2B949bZzU68CQ5NsC%2FZjWY%2BE%2Fhuo%2B46a6KnlaYroaAdf%2Bp86gA%2Bq2tXi7dxurKYejxaTKCodEw9mz5dKoGKkRTLlOS2MM7eUFtAJMcZraP4Xw8&X-Amz-Signature=dcacb3d47bfc2f2c0d09cfb922db15960485a3e5a1d2043489bd9b897a217070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKV4HBCR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDRjfaVPzjxdQRCBHi7VmksH7C96U6Ke5%2BmlMAFqfhmEgIgIHN9o49DpB%2FA3pJJSuiNg%2FxS0W4N5Mh3FWChiBRVBUUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNIe1G3H%2Buq2RytIzyrcA3rnmp4aqV5AUlMi56ZHC8wGpf88jz9GqgHZsHAjq%2FbWw3cQmrQeaksuXi%2BjKLJDJdbgvxOd7gfMdEjSax2hJQmsT66u0CfriEv8CC6pnM702Qh47Hv5SAszi%2BfHsv6BLuNBSQJUh6z0taG6%2FdMJtmOVhbaJeZi56Sbn%2B3wkMFVN5xqKKv%2BJ8ExrdckrYA877NwPnJ7owjFBf3hjGNtgLyPZQ%2F%2FR9%2BPFSgirRkrWM%2FdrF4kc3YcpHr2kZp%2FHeFpPe1R%2BHzVtBgLCo4VmhUhhjuBvCqahtjWEzjqIMpy9R%2FqjpW5bXOJ3XxU0D4z5psLoP1BEtj3onNQvFG4f2MQJtIpLNjixs%2FKe1xt0pE9O6De6cWfM1aeaKFFuQE516xMLeV9xIG218gnPCb%2FdpOliAdKfGnPSlJBXUXewWCq71b0IXer71ryi5o5z9Gnmvt4fvXmqOMY%2BXrxhk%2BEkTcZ2nPFi3FXN8siM6CLlcWR7YopH3Kmod%2B5L26gJHxWjceQb3zaZNSinEiyiANuLKlWIEq%2FRMU1r5OhGJvuIbs4pj8fYWEA1wiT92I12yjbbhBYrQwq2MMQFP18SSw4pa0YRls8K3ZMTWqLf4sJvfrPpb%2BodHAAMmIIXW8gSGjxQMJmz58IGOqUBjbUgYvGG%2Fk5PqfkBnTmA%2Bu4ABBRv%2B1kEYzp5IAwKUCfWfXwswuvexT8%2BlJ0%2F%2B39C3S%2FJPz5r9f%2BLQESCPGRH8xH0m57exLS46bk8RuKnfsLPmQVM%2FQGM5o4kP0JP7JkIB%2F5fwyPqmPdc10AUFoW%2Fug9fcMp5NGRRZuZqWib9B5BX2cFHdVTRh%2F2sKYy7NZaTv86uqi3c9vuKp8c5BfaHleWcIukD&X-Amz-Signature=f7682b219ef00b8f00d7d5b4c511740425f52e84c9df2cfad1127f0db4c25e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBMUTKL2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIEGdyaiG1vVLipW3svfFmMiY%2F47pb5s8U%2FbzUBUv9hmUAiAg0skMhKPMHrBuYnY4IFviCAcL%2BGcre8uVkwMq9qGw8yr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMnkQrbkbjwKUWiRtcKtwDlud4s9bOE9Vp1IgKPBYHh1bVPsi%2FEeuTWIPvzQJahc%2FvGkO0JpIEK%2B%2Fk3%2FAWBCbhOTaWNc3tMwWeOteelouSrGLK8jGFsleSb5Xbjw3WCzOWN%2BTQAacuVnhVEhFis1wtmpokBOOxTZwyIYys9qsUgNvV2Ig4EGkQ4IMb2NP%2BLj0srn2jyaU%2B1vCJmUI%2BBMMnv0iHijas6RSMtExyiaQ7IUZSyd2g%2FgOEhpUaf7lIrVvfYUAEu5fKk35GDm855BmbWixfW1L8qnaZVC%2FqhTrRpSrRi8iQ9y906SkghyH1C%2BHSiQ57fTT0MXjoOKVOXWOvOvscBfTHzHMY8qoSxh%2BJdtY8FO%2F4s1kuzu7xWgWt14lq8HwkCT0EziV%2FaxBK2LARSxJEUNU1wDbDi1ZS62SlfdlPImNt6GVNuSGaEd2%2BobLGzolkre%2BIAn8IpzjX4scYFqER5vwQFUPsKJOFfZ%2Bz0ylVNsznZiSnUvYZJQPEnoOocWLKuDPWMBwZhwldOt7ZOl9Ofk%2Bm%2FNV%2F2CnF0L4tGkHu59Y67Z80EhcEhf7YcVVNocrB6Ewt%2FLmWdKtth6ZgN5T8o9hI68ch8%2BHRyyCsoQv5BtO9TuhsNltbtAPmySdTHoGZr%2FZ8roZrLfgwi7PnwgY6pgFr0EgQ1JbEm9Wk6jTsuHxx0yiWdHolTdxtrTRouqtO6J5257Or29hjHR8bb69djJEiHmccGwnRVmdJ2f3yTbYy5S7NvENsTvhWs1gHgYgMWxwyJWAp1xiHWOb7E%2FX38ui1FrQQnRVEQB8E4gANwUl3gPAbKnf5m3Rn35KPMPod9Kqc3of2Bw2QVjlf2InLbCNY25AcVYXMMpvCDdAh7C34IHHyto3d&X-Amz-Signature=ab639a0ff5af5d37470707fdb3aef25b734d758690d8c958872b837a3c6fda98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEXRNA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD5DyW%2BhL9vxn4OZOYJzwxrheM4TKfbrAxgB2gVKSWG%2FQIgUmQUAFgV%2BJ9mgVq6LAn1BS1LgFqXlUyCuxQKLLRgiA8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCGegN9%2Fgkdh8uWN%2FyrcA2wXrEo3IFMYywoEofLgUO6Kfh901As0G2lrogOOBi9m64y5VcwZv5aukbci2DeWmGfKS0eGC%2BA78K5gBoHyNx3bdU4qWEquhjeJiZ5rJQ31x0dsUld1WAyrz5iCfh70dViy37aAK4J3mcxcc8T1681P1RmEmdXb5%2FlZxYbHtS1sfZ%2FEU61Z%2BH9jDPKncw%2BOQ%2FH2QGl02l0ynnzh84Rp5upIAlxBFPVnDb%2BYEQ2teDL7W%2FGxHjv4SXOy2Upz%2BWsIBNcHXikw6Sb5fi9VVfre9Rss2It7yBgjj8RFOuUgu9%2Bcz7D3rGDvCtpL3zs950QMFI%2B%2FkFdsN3nsHFAdmPhEAdxq34OXI%2FoItuzIRrEjzmosmN9ETWK532M9aHq8acfBUL9pRNji15tKaa8xvCErN5op71G1zqYYV45m0cQCUgfXmRsGYweu6%2BLDXL7KvJwUQ1bqF%2BcZmUIoIEuI%2Fe8MltuPivxbbdxql%2FWOylNirMBr4ZH%2BT5K8k2AEAQJq%2FQ2OOx3%2BmPdx6%2Bu8LZcQ5Ogfj2YTP2TCWoxMuZcmTtj32p3Cvuh3wgGTj2BabMu5jh3fnic0C1aVegWjKjWTk4wmp161GswFg3aq%2FR7SNU8i1XPiBkEM6V7H4knYmPc8MJCz58IGOqUBDMtjrx127ip4JaKkIVNp4PmJACyCaEkRGwrqbaADOJJrYzz4zlYFLWUSBoHev0EQGLhbsX%2BcvWJlR3htgg0DcT3cKGhWiQ0012Ve%2BJBoudOMw1x%2B949bZzU68CQ5NsC%2FZjWY%2BE%2Fhuo%2B46a6KnlaYroaAdf%2Bp86gA%2Bq2tXi7dxurKYejxaTKCodEw9mz5dKoGKkRTLlOS2MM7eUFtAJMcZraP4Xw8&X-Amz-Signature=87765fdbc7ac295adcbda3a0728bcff0b0ecdb4c6c45903651c04516b7c12a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
