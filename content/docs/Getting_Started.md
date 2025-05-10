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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2SSGJO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJk0HuxKFl2U9mvZczJLcgJz3yvIqi%2BiQTLMR4e1vPsAIgTzdvBeskaaTFHTrwBtfB%2FNNPdnIQsCKQZvL0%2FePd1y8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FIx3c1XfXERuxDTSrcAzTlHgXQx1rc7HLf%2BMTcRE8SbaZ%2BvG%2FefOcnRpaKVnILyZLKSL%2BhG8VXlAc7WvM93I9zdFAniUuSlUbAnmZG5VCQEL3rKkIJgtJzxaE%2BLiT9NLdXqkW6H2X3bHGYJ9xmXNb77X88yhxwkycYn%2FBIkEBBlQeCVBq4%2BUtF6x0uUJX0TBwgsESxXVq17kxmAo9NV6bklWL7%2FUX3j5LRF3kxumwzi2ZZ1wEtWUtlVP1FC9h2tvF0Gsi4mQ1zJnvAKTHxOMJq9gfy4fQIwUDdbhXndvvV6Wop5J8v2NTMvOFIfJExntQBFEMuGplal4V4NGnSSoj94eoIB2tRV1wOYL%2BVGL3VMjD0E6QrkZ8Psk8s4GQ7jdgKq%2B4eUZwN12ei%2FFLWaur8yOo3wDsq996JwrMX%2B3GvWFtBs6zq1t%2FMs%2FceCRWkjmb4pgdd59LNn0pkn%2FZ70ds%2BdSs8URo4TmNymc50jLV4rNSJENOzNzd49PS%2BK3aS7gPBXWpSq%2FfSzni1VbnKCXFCl%2Fr5E%2FvMnHnITqqH%2FSYHX09ntRFQxZVik8qu3A3rKsurW3GL6Y1dZsZU0pw9XOgm1a6KKEcpaeJUpJ2yBl8uP1mPcXEVc8JEkz1PwthrH8ty%2F2SnoIsPBrhFMM%2BG%2B8AGOqUBVVD%2FPDCn1%2B9BwlOLym5G1eZSeJMWL%2BD64UqIl%2BM7z97uxhWzfhBVu%2BmK6v7zhHtSvYynNnEdQ29JTQ1kwldP5DPg%2BQgBMeHX1Zy4fcEeQPap8W0MNkCE9VDwm3d%2FnV6PGdfQgBa%2BgccQakMsWhKkS%2FmzjGR3zI5NYU6%2Baf5SfU5iv3BLLRQOl%2FWSB%2BXWESFjpMPcpk3wipsdrABPYzln8y9I%2FJ6o&X-Amz-Signature=167faaaececc5526a969067e70d27f5898e970569d9561d3122e0d9c1fa64918&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2SSGJO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJk0HuxKFl2U9mvZczJLcgJz3yvIqi%2BiQTLMR4e1vPsAIgTzdvBeskaaTFHTrwBtfB%2FNNPdnIQsCKQZvL0%2FePd1y8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FIx3c1XfXERuxDTSrcAzTlHgXQx1rc7HLf%2BMTcRE8SbaZ%2BvG%2FefOcnRpaKVnILyZLKSL%2BhG8VXlAc7WvM93I9zdFAniUuSlUbAnmZG5VCQEL3rKkIJgtJzxaE%2BLiT9NLdXqkW6H2X3bHGYJ9xmXNb77X88yhxwkycYn%2FBIkEBBlQeCVBq4%2BUtF6x0uUJX0TBwgsESxXVq17kxmAo9NV6bklWL7%2FUX3j5LRF3kxumwzi2ZZ1wEtWUtlVP1FC9h2tvF0Gsi4mQ1zJnvAKTHxOMJq9gfy4fQIwUDdbhXndvvV6Wop5J8v2NTMvOFIfJExntQBFEMuGplal4V4NGnSSoj94eoIB2tRV1wOYL%2BVGL3VMjD0E6QrkZ8Psk8s4GQ7jdgKq%2B4eUZwN12ei%2FFLWaur8yOo3wDsq996JwrMX%2B3GvWFtBs6zq1t%2FMs%2FceCRWkjmb4pgdd59LNn0pkn%2FZ70ds%2BdSs8URo4TmNymc50jLV4rNSJENOzNzd49PS%2BK3aS7gPBXWpSq%2FfSzni1VbnKCXFCl%2Fr5E%2FvMnHnITqqH%2FSYHX09ntRFQxZVik8qu3A3rKsurW3GL6Y1dZsZU0pw9XOgm1a6KKEcpaeJUpJ2yBl8uP1mPcXEVc8JEkz1PwthrH8ty%2F2SnoIsPBrhFMM%2BG%2B8AGOqUBVVD%2FPDCn1%2B9BwlOLym5G1eZSeJMWL%2BD64UqIl%2BM7z97uxhWzfhBVu%2BmK6v7zhHtSvYynNnEdQ29JTQ1kwldP5DPg%2BQgBMeHX1Zy4fcEeQPap8W0MNkCE9VDwm3d%2FnV6PGdfQgBa%2BgccQakMsWhKkS%2FmzjGR3zI5NYU6%2Baf5SfU5iv3BLLRQOl%2FWSB%2BXWESFjpMPcpk3wipsdrABPYzln8y9I%2FJ6o&X-Amz-Signature=f37180a9dacda64d7f564100990b9b3da884f90203cb89f9adec02f8b715e50c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2SSGJO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJk0HuxKFl2U9mvZczJLcgJz3yvIqi%2BiQTLMR4e1vPsAIgTzdvBeskaaTFHTrwBtfB%2FNNPdnIQsCKQZvL0%2FePd1y8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FIx3c1XfXERuxDTSrcAzTlHgXQx1rc7HLf%2BMTcRE8SbaZ%2BvG%2FefOcnRpaKVnILyZLKSL%2BhG8VXlAc7WvM93I9zdFAniUuSlUbAnmZG5VCQEL3rKkIJgtJzxaE%2BLiT9NLdXqkW6H2X3bHGYJ9xmXNb77X88yhxwkycYn%2FBIkEBBlQeCVBq4%2BUtF6x0uUJX0TBwgsESxXVq17kxmAo9NV6bklWL7%2FUX3j5LRF3kxumwzi2ZZ1wEtWUtlVP1FC9h2tvF0Gsi4mQ1zJnvAKTHxOMJq9gfy4fQIwUDdbhXndvvV6Wop5J8v2NTMvOFIfJExntQBFEMuGplal4V4NGnSSoj94eoIB2tRV1wOYL%2BVGL3VMjD0E6QrkZ8Psk8s4GQ7jdgKq%2B4eUZwN12ei%2FFLWaur8yOo3wDsq996JwrMX%2B3GvWFtBs6zq1t%2FMs%2FceCRWkjmb4pgdd59LNn0pkn%2FZ70ds%2BdSs8URo4TmNymc50jLV4rNSJENOzNzd49PS%2BK3aS7gPBXWpSq%2FfSzni1VbnKCXFCl%2Fr5E%2FvMnHnITqqH%2FSYHX09ntRFQxZVik8qu3A3rKsurW3GL6Y1dZsZU0pw9XOgm1a6KKEcpaeJUpJ2yBl8uP1mPcXEVc8JEkz1PwthrH8ty%2F2SnoIsPBrhFMM%2BG%2B8AGOqUBVVD%2FPDCn1%2B9BwlOLym5G1eZSeJMWL%2BD64UqIl%2BM7z97uxhWzfhBVu%2BmK6v7zhHtSvYynNnEdQ29JTQ1kwldP5DPg%2BQgBMeHX1Zy4fcEeQPap8W0MNkCE9VDwm3d%2FnV6PGdfQgBa%2BgccQakMsWhKkS%2FmzjGR3zI5NYU6%2Baf5SfU5iv3BLLRQOl%2FWSB%2BXWESFjpMPcpk3wipsdrABPYzln8y9I%2FJ6o&X-Amz-Signature=c18e5e982a9257aa2dfa7610ed362bc5d42f1ff6be940f93cba1148390e141f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2A3IAP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZcFy4pdgSyLRdQ2DMkGvWVX0ogKvXOlxw73dfW1mJdAIhAIJjepdksHdCnsTXZUpS8fA03QSBH3jkFLFGZ4wirHIrKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRLKA5t40Pl5n4QLsq3ANTmWI3MuH4n%2BSbvlNRJRjj8PM1nmcYqIAuM443vHyUaFGszLhrGUslxVmfkmW5oNC1q09GsW8EYS05ySDq3E64%2BlWcJ85MC65Ro9kI72OxMOSZBXIAeXs%2BgLfYSSbC8RY6scF5rm4s1NLE3%2BuIhP1PV9oGrgFTcPjVPLLDQzBSCLrj3re%2BwRosuqrC3HIarrGiIXB3uPGCSytzqZB%2FW9%2B6qC5Pt%2FxfCQVNbt8Qq%2B6K2VsjQ95%2B2%2BoZ%2FsdkNOprTXsRydWfl4G34N5TX9lR%2Bg%2Fsim5QsGy0c3vBN2ydc30XLs3Q%2FdJlBMpROkCF5Cra2dw%2FHTg4xpiMYUTAaJIC1oJ98E1a%2BcxaoZ6C%2Fxnbx5sXiD0RTAzYQD%2B2tH%2FP5USB7fLnswF00ri9mQ0c4wQp7LVR9Fwu1RVPwcGiGyZJ0%2FwUL5EaNgc7mjxEXZtNaX1pfTxBegNVDHbSW35PXYIMhQG%2BnRbJoco4G63ycqcBg05F%2FoUsJgJW6tWrmbqV4mA%2FGtxZoV0al6MfmCwzCmaPDmE4YNN0sSzTKpruKKb7XIyAb5wSHliGGVR4iBdsxWx9x2QU4CxwK92ox4xX%2BcHlSyJ3nkxrXsMerY4TC5Oa08T9OhvcYZiZ9BpnoaLiRjChhvvABjqkAfwV%2Bmo603h7xefW5M1lLUNqu8M4euw4%2FZumkY5SVfPsA9hMhFiTVVkEtte3FyaqP3u1NCkklAIe6t6ui%2F4%2Fyz7y9%2Fq82CfOPDsSXl6M1XZa7g9vo%2B%2BYU8nzsrof1aUhdOGevNof0nVpXTxYtduWfMn67HVVfVjLsUaNNnbDabgguaQUU3rVyT79KDVIA7uKXh%2BPOLQ%2F2%2FEU7JY%2BsCnaz9HziXty&X-Amz-Signature=1a9328ab49ee268551edd968c5407cd24a3848225060dae83ae17a1a5c883f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCEOKA4J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnnxKIT5c4n1tXE7eFOqt6e2mP9NTxiD3M69Diwq65UgIgbeR5LyQyUjPnS2GAY9KdveG7yRDQr04Be8FafN%2FKSSYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnWNsTnE8GgmXyikSrcA3IUzWeHYpwrxtGfaOLPV4I7pvLwmDNt3GWa249IGiBgKV%2FisSlEBkYl1QVMCYRopmwitV18I3X9GnK36QFfA3T7O%2BtUY1Bmtw2%2FROBXDpFg3zPAHT99owbYmyLluLiJov8fLmz9lsCq2VDtQcI4wQ0MCd5A7otN2%2B%2F6sCZHXnyBJPIs6IpHH5CUVw6NiRi0NbH%2BP%2B8h9LJzPuJqkIRDPREqgeat01pPkgrgCvpy%2F24MsIrJ%2BwPCypsByIbo63BjfYWKb6xG65nz4Krhea7oHhp8UGxp4aE5j8Ka5hQbVkcJQo4C4VCpQmqggyeBandybsGod4bWQd6XoJwFF%2B14DKlvciGv7QAZhNUgnj0CYnpP9iTfF6KIQVKIE%2FxPoAViWKIJbkjvyZZlJDgbMT3geAerzfAMfZ3PrQlHnl%2BEEYved95Snezmh70Bb9j80CmEDzo6%2FznNFYB8Al7BSwuknvdW8Rn4UjhwJpwROKrV%2Bzf9%2Bn%2BB7Gu0d303HWxf%2FgTSdyCyJA4SXbGuenpQI%2FvhxIGdAdsziW5FpvaLfwkvMZWt%2B2zClQKFbICnCrxsaSyc4SEyrtZeP%2BPWCnMPTXSRKBPtCeqiKWuZ5GyzbbtKUvVvaKihnooagyOttBSPMJWG%2B8AGOqUBBqLvJRFxBb653EPAkrqMC659OWEUoQ%2BFeLL3moEs14Qb35wOYAi6atQT3%2F6Gj%2FRHl2B4yRZudLpExmPmaU0RJkbkVMvykt58VS1ClRc56b2zjySAnsUkPG7fB3ilNA679iFyaHbmFd5dOvV6VNG3FVcw580Ny1mvSvt5V8NjYpSphHM4KCvluHxX8IjaV%2BIa5Coo8xzaZ%2F5UDNy2ciQYbhhomUmi&X-Amz-Signature=7c9b71afd32343af285ecb07da56443373ea9e7bd884600a92aa2dacd52543f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2SSGJO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJk0HuxKFl2U9mvZczJLcgJz3yvIqi%2BiQTLMR4e1vPsAIgTzdvBeskaaTFHTrwBtfB%2FNNPdnIQsCKQZvL0%2FePd1y8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FIx3c1XfXERuxDTSrcAzTlHgXQx1rc7HLf%2BMTcRE8SbaZ%2BvG%2FefOcnRpaKVnILyZLKSL%2BhG8VXlAc7WvM93I9zdFAniUuSlUbAnmZG5VCQEL3rKkIJgtJzxaE%2BLiT9NLdXqkW6H2X3bHGYJ9xmXNb77X88yhxwkycYn%2FBIkEBBlQeCVBq4%2BUtF6x0uUJX0TBwgsESxXVq17kxmAo9NV6bklWL7%2FUX3j5LRF3kxumwzi2ZZ1wEtWUtlVP1FC9h2tvF0Gsi4mQ1zJnvAKTHxOMJq9gfy4fQIwUDdbhXndvvV6Wop5J8v2NTMvOFIfJExntQBFEMuGplal4V4NGnSSoj94eoIB2tRV1wOYL%2BVGL3VMjD0E6QrkZ8Psk8s4GQ7jdgKq%2B4eUZwN12ei%2FFLWaur8yOo3wDsq996JwrMX%2B3GvWFtBs6zq1t%2FMs%2FceCRWkjmb4pgdd59LNn0pkn%2FZ70ds%2BdSs8URo4TmNymc50jLV4rNSJENOzNzd49PS%2BK3aS7gPBXWpSq%2FfSzni1VbnKCXFCl%2Fr5E%2FvMnHnITqqH%2FSYHX09ntRFQxZVik8qu3A3rKsurW3GL6Y1dZsZU0pw9XOgm1a6KKEcpaeJUpJ2yBl8uP1mPcXEVc8JEkz1PwthrH8ty%2F2SnoIsPBrhFMM%2BG%2B8AGOqUBVVD%2FPDCn1%2B9BwlOLym5G1eZSeJMWL%2BD64UqIl%2BM7z97uxhWzfhBVu%2BmK6v7zhHtSvYynNnEdQ29JTQ1kwldP5DPg%2BQgBMeHX1Zy4fcEeQPap8W0MNkCE9VDwm3d%2FnV6PGdfQgBa%2BgccQakMsWhKkS%2FmzjGR3zI5NYU6%2Baf5SfU5iv3BLLRQOl%2FWSB%2BXWESFjpMPcpk3wipsdrABPYzln8y9I%2FJ6o&X-Amz-Signature=015045c5e45651e0789550ef8072a1b5c88a225c57dd1788423f511c48fd43bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
