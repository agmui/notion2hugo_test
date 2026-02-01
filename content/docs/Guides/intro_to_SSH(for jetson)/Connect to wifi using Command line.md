---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJ6UCY6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6TPtLsTojjerTXovNRStxJ41wH7yq9tezLW3bA%2B1hMAiEAkIDiFbJUJGyEBp8%2BguUNxjbDNiQsz3YVu3nJ7lp9MfUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZJBd%2FQvbPXXCvDtSrcA3dXs1ffMZXb9Ty53Nj4HML%2B5OBgMjJgTiqe8Z6fZ6D8oUDrtxHayEVFDy6VtZ0Qam0wMuNA2iTAKDMf99WwJQtxr46zkCcfKR1aNfcaCV48fxdm97amyhLJcOr1aTc9%2B%2BnleFKmAH6dtuZmRWng%2BxsRIiHs59ApdsAq9Vz9rrgM7ks%2BGPBHaE%2BRB0xO0ouroqnfTwtUZuD18Q6jjvudQJsUpx%2FjDrgfw5DTHuehaIFgmegPFufK4EFYn9%2FGKk3nnWsjpOi8uEoyMeRb4XyBTt28sKKFO%2FwHQuk2VoP6r2mkM4zewVJiMdqowg%2Ftsbd4wajK3sXPjEhOcAhBWZD0ZWu8Vm76i%2Fs4GYYLWYkG6dw8U5Qxi37WrWK5MLz77ixD%2BeIKQzKzwY%2BZgY9Ml4eNuRNHKbP4mhsjL4oulDe9rrs%2BfDFx8DHHmfabgBKtBb8f1F2JqEWIOD1IdJSumAGBRl8Kn97WsEpFIYSu1SOkRVfAtjCZZK7mKYfr%2FjjU5um6FOYa4FlWnvxl%2BnvsiqHDTkOOXuD9qn7%2BKYnWOsMoF5XR9E9N1VnMekVKp3zWrSarEeNodTcMMYxcfV%2BLvJtrK%2FSNyAZHvG24cU1l893%2BaktGJrlJutkMXV%2BVFUCCMLfy%2BcsGOqUBSVILCVenq6Z1EVnz5h5VlUUge4L2aHA3p2po2PmV7te%2Fodhf2YseAkISOI9yim5N6JiAVFataDWHscO3jIKMwvVXtOEKkrG9g2E4SFuOG7g%2F94UAU6If%2FCMXftfyOueJajtm2s4pQEkvH9G6Uo%2BdWB%2FEXzONovOyt7TPhOu3soXvEPt2AXRCxx4rWR6xfac404D836X5ZsJn2y2Zf1fnkM0%2FSrEt&X-Amz-Signature=73298bc007ca24a2345941cf4f701ad359c096d00f64ca3329c13d285e02a51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
