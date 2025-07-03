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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBPP2E4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDep9kxi8KN0IaM4YFD5GVPTDfkJH5ruCXdClZ%2FKkKGPQIhAJuu%2BTiyJDcrhrgNLU1pIiJcnCAsTDhJ%2FZ26HPZ45y0DKv8DCBgQABoMNjM3NDIzMTgzODA1IgyGww0tJuR9cDs7tAMq3AMglTlVfl4Z0cid49WnuWkxY%2FJsuKhcmSGXtlXb5gLp1qAXtYvJ0nZraYZeNr6XPIB%2FGFQ5M7ecIbzxOvB3gSW%2BWBBNf0dnQ16rQtimMYaDmOqupNUNTCCdhl4zMAJ68htPv6Ll95E10xs%2BrP0%2BzQq63eLzu8VhwGCIrimkU%2FCdrMbptpyIGyv8p3GdHU1Noc9dr0fqM5mkoFgnOjfnxR6Xqv49n3ZgD0IGJBjua3S%2BAZkvlUq4dwHfRKKaDSOwtGhg0zlmAx5ApH%2BmX5ZkdjEYd%2BwRYI5KTKY0lfdbtrqn2mrr3k5n%2BuEaNvnMjuKMzL2SrM%2Bh3h%2F2UqjEHNFAm92KQltui9%2BFGiVVOLX5DMgkHgOM11ax99ST55VppaRoMeCKfUq28pxz6QqeYrnBuM7%2BXkW9tf2ipE%2F6zrMF9Wk1AGr0o2JJW%2FQB3pSjMtEKkvHfpoAYJtchtGGdlNgSlZWFScIRmi0vRLV1YX%2FOI%2Fw4230WHtyJz09HIzVilFDJYnNwI7pLMyuwSoIGub00PYEMPhCEVzYz8Zqa0q8tbqZ4cC1LM7NSaNVYy0ziX71NV349xMnMQgksInM2YKSU%2FCy5%2FKTYAM%2FpLpgXK0xgiavP9KfPFeIIzQhQmIJLHzDxuJrDBjqkAe%2BVldYU0VH4u%2FINE61PVxY6OGcO47HJAdmky0Hov%2BJnnfVfVrq9x4M8CHAsXOPviICM1LbL1XF48guppJ7A45bqkspLERH%2FIEfVZJmvuTuvnjXJurhCc1dJmhok27u8Afh0jgqZmTqjfL0YTeTAn5OGmsaYOVAvKh68Rev5MaA8t8wl7uCa2yz3sErJcEDQLpAa1yUXip4Ws7Sngb3Ghg8XNy%2Fa&X-Amz-Signature=d420619a908c5ba07cf015db8bafd4f33d7f7cdabcfb90427edc8c32e0db908f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBPP2E4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDep9kxi8KN0IaM4YFD5GVPTDfkJH5ruCXdClZ%2FKkKGPQIhAJuu%2BTiyJDcrhrgNLU1pIiJcnCAsTDhJ%2FZ26HPZ45y0DKv8DCBgQABoMNjM3NDIzMTgzODA1IgyGww0tJuR9cDs7tAMq3AMglTlVfl4Z0cid49WnuWkxY%2FJsuKhcmSGXtlXb5gLp1qAXtYvJ0nZraYZeNr6XPIB%2FGFQ5M7ecIbzxOvB3gSW%2BWBBNf0dnQ16rQtimMYaDmOqupNUNTCCdhl4zMAJ68htPv6Ll95E10xs%2BrP0%2BzQq63eLzu8VhwGCIrimkU%2FCdrMbptpyIGyv8p3GdHU1Noc9dr0fqM5mkoFgnOjfnxR6Xqv49n3ZgD0IGJBjua3S%2BAZkvlUq4dwHfRKKaDSOwtGhg0zlmAx5ApH%2BmX5ZkdjEYd%2BwRYI5KTKY0lfdbtrqn2mrr3k5n%2BuEaNvnMjuKMzL2SrM%2Bh3h%2F2UqjEHNFAm92KQltui9%2BFGiVVOLX5DMgkHgOM11ax99ST55VppaRoMeCKfUq28pxz6QqeYrnBuM7%2BXkW9tf2ipE%2F6zrMF9Wk1AGr0o2JJW%2FQB3pSjMtEKkvHfpoAYJtchtGGdlNgSlZWFScIRmi0vRLV1YX%2FOI%2Fw4230WHtyJz09HIzVilFDJYnNwI7pLMyuwSoIGub00PYEMPhCEVzYz8Zqa0q8tbqZ4cC1LM7NSaNVYy0ziX71NV349xMnMQgksInM2YKSU%2FCy5%2FKTYAM%2FpLpgXK0xgiavP9KfPFeIIzQhQmIJLHzDxuJrDBjqkAe%2BVldYU0VH4u%2FINE61PVxY6OGcO47HJAdmky0Hov%2BJnnfVfVrq9x4M8CHAsXOPviICM1LbL1XF48guppJ7A45bqkspLERH%2FIEfVZJmvuTuvnjXJurhCc1dJmhok27u8Afh0jgqZmTqjfL0YTeTAn5OGmsaYOVAvKh68Rev5MaA8t8wl7uCa2yz3sErJcEDQLpAa1yUXip4Ws7Sngb3Ghg8XNy%2Fa&X-Amz-Signature=e19c82d7066d6c7c7923163afcbe7e5fbc416c1290f789ce0e6e531fe5f13b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBPP2E4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDep9kxi8KN0IaM4YFD5GVPTDfkJH5ruCXdClZ%2FKkKGPQIhAJuu%2BTiyJDcrhrgNLU1pIiJcnCAsTDhJ%2FZ26HPZ45y0DKv8DCBgQABoMNjM3NDIzMTgzODA1IgyGww0tJuR9cDs7tAMq3AMglTlVfl4Z0cid49WnuWkxY%2FJsuKhcmSGXtlXb5gLp1qAXtYvJ0nZraYZeNr6XPIB%2FGFQ5M7ecIbzxOvB3gSW%2BWBBNf0dnQ16rQtimMYaDmOqupNUNTCCdhl4zMAJ68htPv6Ll95E10xs%2BrP0%2BzQq63eLzu8VhwGCIrimkU%2FCdrMbptpyIGyv8p3GdHU1Noc9dr0fqM5mkoFgnOjfnxR6Xqv49n3ZgD0IGJBjua3S%2BAZkvlUq4dwHfRKKaDSOwtGhg0zlmAx5ApH%2BmX5ZkdjEYd%2BwRYI5KTKY0lfdbtrqn2mrr3k5n%2BuEaNvnMjuKMzL2SrM%2Bh3h%2F2UqjEHNFAm92KQltui9%2BFGiVVOLX5DMgkHgOM11ax99ST55VppaRoMeCKfUq28pxz6QqeYrnBuM7%2BXkW9tf2ipE%2F6zrMF9Wk1AGr0o2JJW%2FQB3pSjMtEKkvHfpoAYJtchtGGdlNgSlZWFScIRmi0vRLV1YX%2FOI%2Fw4230WHtyJz09HIzVilFDJYnNwI7pLMyuwSoIGub00PYEMPhCEVzYz8Zqa0q8tbqZ4cC1LM7NSaNVYy0ziX71NV349xMnMQgksInM2YKSU%2FCy5%2FKTYAM%2FpLpgXK0xgiavP9KfPFeIIzQhQmIJLHzDxuJrDBjqkAe%2BVldYU0VH4u%2FINE61PVxY6OGcO47HJAdmky0Hov%2BJnnfVfVrq9x4M8CHAsXOPviICM1LbL1XF48guppJ7A45bqkspLERH%2FIEfVZJmvuTuvnjXJurhCc1dJmhok27u8Afh0jgqZmTqjfL0YTeTAn5OGmsaYOVAvKh68Rev5MaA8t8wl7uCa2yz3sErJcEDQLpAa1yUXip4Ws7Sngb3Ghg8XNy%2Fa&X-Amz-Signature=a37f3f4400a128a01a6c73eb0bfb4551a83a9ebe871c53e77def2cc4e78338e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W2G3ZZN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF9Vf%2FYEYLFusx%2FfcKYJAij1vp1KxkQ8Onqc7s8S%2BdM6AiBjkWsF4uqMfCq6Svqfnpvrw8PEz2bsX47k%2BuJCSCM1Hir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM6QdIX%2FeTltn%2FyhTMKtwDwhQhERtI%2BMnYuby33ilUHAxJN8k%2BDwSv9oqHmuoM%2B6oDv3WJZZmtCzezjGxk2UQIuWgNukEZbBQ%2FdvWWIVONFHOxBgPJw1acur9eG9ldnol1M1Vl0OSiv9ilo54PGlnPwshyu7P9jKsGcXZs2mJx%2BhNjtRsVphb43T04znvTp5tzdlyIK3H%2BGT8NIaNnJjmTAs3AQ8DNhD%2FZJ9hAMqNMq3IHnJzc7V%2BZG758UxmISPEh08Loa%2BCP5mhmtxTfbBuReYaAN%2FVwpw5TewcdfMD0xQQfT8BXjVVcPpNWJNe0HA6tYfuMSP2%2FJ1Gk%2Bwp4S9udSGYn5rJTHYYiCFzoQV4HgPGDZTWO%2BBhig0L2gzPdTixmJQZHyn%2BA7PwgHCPNZ%2FFymsu0T09uzdgy2vZwJ8zl7tvtEb99NM6%2F5T1o0cJVvkJc63uuLk8cpXXV5kRmGMs72Xvo3wqc1typq3NNt9%2FMemdBsSr1uVrX2ffyR2B7ppFttkpNjVFdTrdqdK62Al%2BG0oBTNI6B6HHjfl68HsX9vlCxeOeYOIGBrEe6UYCKLSAAKLO0IfrbsDcHmz0rK3yKlVw6R0bp2qK2UXvFJuyb9EBvW7ACTZTjt1%2BGeZeIchwp4AvcVqquYKevlsEw4o2awwY6pgEBAmfgQLLE4OBTHC7EYvQSyNelkAOH1q1lVg05jQaOmTEZ1lmpLTfW4Eh7s00sueRtFqxrgO0iaoGpkR%2Bbjv7a6vkEgvonlQPyXtlEjEh2VEDN4afYdrl5fnbCiUL57Sx9Vo2oLRxk3EsqgM%2BXPymuI1%2FhglA5BpCWgX%2FiTP5eKJx%2FE64CS7oz0PSUEkF7L8AFAQZvEfODbWhU0HiAawIGmyfZj40u&X-Amz-Signature=b3f9fd4ad851b9bd711836bf501e51d8afd9b5539d12107f64aebe259ba8e8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJGFGWY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHmJ377vhsh6a2qvfOfSRzyofDpKleQ%2BTL0cZTUOQXGyAiAkirg8uQzQok8oJ41JiwwMm5t565dHwBE%2Bot79SOtnICr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMeCDiReQ7T%2F02cwznKtwDc1FuvFxqA3v4fH8Z7ZE4CpwYcK%2Bg28E18KBZYJd6T9aa51jYx%2FbohnYv0DVGFxJkNWIe0ieOPU%2FGa52X6qL4UT8atu5mOQPvPDxgrhwf691gFrUArkUlr7tf%2BO%2Bm%2B2koPK3R4yHIEHfvOf%2Fv7FKiR9uJmwp5Cm7P%2BZTwZUE4dRFwPR5%2F4r7WUggEdHFnvWPnmhtnQ1LgTCjXb75SdjXpP5mFgCcYsDKoRNWdRxKSkc7RNeXtSj34pIBNS5ph7GYOzuznZmfh39fMEKph4yPhEbb8HnQF8zRDoq18a%2FP2uMU1gCTjO4W%2FPdnZP2Ix55VqNDrW3mN71zo0ImuHWDkHXSzI%2FPOOqFITwWK0n3gnKJMLlDlBF6HvYUa4HOWBJk425tMrmjKWanGq4oAkXrL2Aw6ZiWY7uLGWngDTYHcQfOK0%2BX%2FJQ%2F0YkU7GAVVKwlKA4b1AMFR5VlOcTduP7lVGY6Uh0Zu%2FMpcmIQJl0dU3zbIYDZt7ijIosXrnvWU9x2C17gdYtMSKYPlgRdvQTAL%2BBXeLMFkh0ckbRvx1N3AohEuyOtIbRZxp5MObmklTXcIbNJPLEosVIKItCbThDnNnWNg1tTZg%2FjK7CRexE1W9IqSRzy7G3I4h0PZ8cG0w8biawwY6pgE8FSBgAAaCAdc4PyDsSmK2EVIhW4tLXxKnd7s0J8dOgfcDHXrm5O5tq1SQzskn0ZMHQmKNIveTwcnl1tUcwBXBJTraKBupHzogNPEd44THDqUSiqyvDySwnF2kqPdSS0CdKKTaLTqQ%2BwDbr4wr5HK23a056moZevUELSnHp0lzgmmqkeiF8cRrCiGSUxLoBPHp295NwuRj%2FNeykFxbMoh%2BNKNiE9o9&X-Amz-Signature=9fb233573e361459643af2231777b08697d927236ca9c61e1147896a03cc2ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBPP2E4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDep9kxi8KN0IaM4YFD5GVPTDfkJH5ruCXdClZ%2FKkKGPQIhAJuu%2BTiyJDcrhrgNLU1pIiJcnCAsTDhJ%2FZ26HPZ45y0DKv8DCBgQABoMNjM3NDIzMTgzODA1IgyGww0tJuR9cDs7tAMq3AMglTlVfl4Z0cid49WnuWkxY%2FJsuKhcmSGXtlXb5gLp1qAXtYvJ0nZraYZeNr6XPIB%2FGFQ5M7ecIbzxOvB3gSW%2BWBBNf0dnQ16rQtimMYaDmOqupNUNTCCdhl4zMAJ68htPv6Ll95E10xs%2BrP0%2BzQq63eLzu8VhwGCIrimkU%2FCdrMbptpyIGyv8p3GdHU1Noc9dr0fqM5mkoFgnOjfnxR6Xqv49n3ZgD0IGJBjua3S%2BAZkvlUq4dwHfRKKaDSOwtGhg0zlmAx5ApH%2BmX5ZkdjEYd%2BwRYI5KTKY0lfdbtrqn2mrr3k5n%2BuEaNvnMjuKMzL2SrM%2Bh3h%2F2UqjEHNFAm92KQltui9%2BFGiVVOLX5DMgkHgOM11ax99ST55VppaRoMeCKfUq28pxz6QqeYrnBuM7%2BXkW9tf2ipE%2F6zrMF9Wk1AGr0o2JJW%2FQB3pSjMtEKkvHfpoAYJtchtGGdlNgSlZWFScIRmi0vRLV1YX%2FOI%2Fw4230WHtyJz09HIzVilFDJYnNwI7pLMyuwSoIGub00PYEMPhCEVzYz8Zqa0q8tbqZ4cC1LM7NSaNVYy0ziX71NV349xMnMQgksInM2YKSU%2FCy5%2FKTYAM%2FpLpgXK0xgiavP9KfPFeIIzQhQmIJLHzDxuJrDBjqkAe%2BVldYU0VH4u%2FINE61PVxY6OGcO47HJAdmky0Hov%2BJnnfVfVrq9x4M8CHAsXOPviICM1LbL1XF48guppJ7A45bqkspLERH%2FIEfVZJmvuTuvnjXJurhCc1dJmhok27u8Afh0jgqZmTqjfL0YTeTAn5OGmsaYOVAvKh68Rev5MaA8t8wl7uCa2yz3sErJcEDQLpAa1yUXip4Ws7Sngb3Ghg8XNy%2Fa&X-Amz-Signature=1b64c07a6f072546ae993a0f786caf3f590c65b130a8057e753d06ab4378415b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
