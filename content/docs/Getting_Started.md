---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZJWULW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zt7sfnzIyVY1NgI0p2ZJHBhLQY5P5QVD9LvE7AgLgwIgAhcaRlbRJne7qnu0SulpoipocpClbZecGhJfe1ljvj4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0HUOEnao9fv6DI6SrcAw6NqxqNkiYsfzzDC7bgQxpRdZT97Jo08q5J8FKtnGJQHVnA8eBAoUVvfM7vYFFF1Fejm34yMU631FaE9jGoXjepgHq25%2FI%2FqgcNhuO2fLtgdqKIPc1%2BI69zsDT7qzzyLAKcSUhgt7uW0%2B9Y5aTWSneYF377bnTdm0Ob%2BFKlpf6otrJTwW%2BEkNEAW0a2Mwy2Yrwz4yQDZBTuM%2FLgVcYNzmvhzq4bpuDrRwpf1tneIn5tKT1yK%2Bh152Itl4c8v2l8S7nHm%2BKwHQPe7Q8AoLpbPIMAG2BvrJsP6gwH1fIpMgip4O29L2ae7EvkwGcpEFx%2BR79bkG3KWPUfo1A8qkh5f6Xk%2B4q%2Bq8t0eXejRmXWMDEoN%2BFTpKTtUQVhE%2B8LFLRAL3H10Cn2oCS5U6PwxQTo%2F88cspWG7gKYRoX6c54Mbb9p%2FOppSV8GEAI6zWo7DOs%2BljmRnIlpJ2za54F01%2FO4RJj6S6rakDvMX8PE310ye4aGshTJs%2FGIBQqIJgHhK8F5e9ZpWJD3z31%2FzezE8pCQXSwOFvxA6i2qu0t9ckz23YyMCvVaBngFxQyIMgxb5D5IRB6ad4R71VQyXPe1ERPEzY1fccICnjUfWfsCZCGXR5Au9%2Fa4Piovqjqj9LP7MLG7y8oGOqUB95NtSB12r%2FUiFnVqtYptoAbjOKPnXPapZIDXJ3hr4jJsZIsY7cjcYvRVMx7nSXruIJ3Z7OVAlMVQOKnsWxfnPkgCmOT64mJxYKW%2B89TMTVwQr8x0a3CSLP44wuMk7FNSwlfDPyDuDPRL7qQxlpdB0nsJSK4QejL7DKVf6LSeG4JSd%2F6dFJNcTzy8yQ0TtAs4rTDOrdvA1Q1gMMW5QN7Gx2jX5AXK&X-Amz-Signature=e63089a048c258b52073dca62d04ffa14463da2cd3cf0c227c90b5124eec2207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZJWULW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zt7sfnzIyVY1NgI0p2ZJHBhLQY5P5QVD9LvE7AgLgwIgAhcaRlbRJne7qnu0SulpoipocpClbZecGhJfe1ljvj4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0HUOEnao9fv6DI6SrcAw6NqxqNkiYsfzzDC7bgQxpRdZT97Jo08q5J8FKtnGJQHVnA8eBAoUVvfM7vYFFF1Fejm34yMU631FaE9jGoXjepgHq25%2FI%2FqgcNhuO2fLtgdqKIPc1%2BI69zsDT7qzzyLAKcSUhgt7uW0%2B9Y5aTWSneYF377bnTdm0Ob%2BFKlpf6otrJTwW%2BEkNEAW0a2Mwy2Yrwz4yQDZBTuM%2FLgVcYNzmvhzq4bpuDrRwpf1tneIn5tKT1yK%2Bh152Itl4c8v2l8S7nHm%2BKwHQPe7Q8AoLpbPIMAG2BvrJsP6gwH1fIpMgip4O29L2ae7EvkwGcpEFx%2BR79bkG3KWPUfo1A8qkh5f6Xk%2B4q%2Bq8t0eXejRmXWMDEoN%2BFTpKTtUQVhE%2B8LFLRAL3H10Cn2oCS5U6PwxQTo%2F88cspWG7gKYRoX6c54Mbb9p%2FOppSV8GEAI6zWo7DOs%2BljmRnIlpJ2za54F01%2FO4RJj6S6rakDvMX8PE310ye4aGshTJs%2FGIBQqIJgHhK8F5e9ZpWJD3z31%2FzezE8pCQXSwOFvxA6i2qu0t9ckz23YyMCvVaBngFxQyIMgxb5D5IRB6ad4R71VQyXPe1ERPEzY1fccICnjUfWfsCZCGXR5Au9%2Fa4Piovqjqj9LP7MLG7y8oGOqUB95NtSB12r%2FUiFnVqtYptoAbjOKPnXPapZIDXJ3hr4jJsZIsY7cjcYvRVMx7nSXruIJ3Z7OVAlMVQOKnsWxfnPkgCmOT64mJxYKW%2B89TMTVwQr8x0a3CSLP44wuMk7FNSwlfDPyDuDPRL7qQxlpdB0nsJSK4QejL7DKVf6LSeG4JSd%2F6dFJNcTzy8yQ0TtAs4rTDOrdvA1Q1gMMW5QN7Gx2jX5AXK&X-Amz-Signature=b74ab673380dbb5f7b33efbe285ac837c71a213e7657d1db803eef3bb8fdbf12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZJWULW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zt7sfnzIyVY1NgI0p2ZJHBhLQY5P5QVD9LvE7AgLgwIgAhcaRlbRJne7qnu0SulpoipocpClbZecGhJfe1ljvj4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0HUOEnao9fv6DI6SrcAw6NqxqNkiYsfzzDC7bgQxpRdZT97Jo08q5J8FKtnGJQHVnA8eBAoUVvfM7vYFFF1Fejm34yMU631FaE9jGoXjepgHq25%2FI%2FqgcNhuO2fLtgdqKIPc1%2BI69zsDT7qzzyLAKcSUhgt7uW0%2B9Y5aTWSneYF377bnTdm0Ob%2BFKlpf6otrJTwW%2BEkNEAW0a2Mwy2Yrwz4yQDZBTuM%2FLgVcYNzmvhzq4bpuDrRwpf1tneIn5tKT1yK%2Bh152Itl4c8v2l8S7nHm%2BKwHQPe7Q8AoLpbPIMAG2BvrJsP6gwH1fIpMgip4O29L2ae7EvkwGcpEFx%2BR79bkG3KWPUfo1A8qkh5f6Xk%2B4q%2Bq8t0eXejRmXWMDEoN%2BFTpKTtUQVhE%2B8LFLRAL3H10Cn2oCS5U6PwxQTo%2F88cspWG7gKYRoX6c54Mbb9p%2FOppSV8GEAI6zWo7DOs%2BljmRnIlpJ2za54F01%2FO4RJj6S6rakDvMX8PE310ye4aGshTJs%2FGIBQqIJgHhK8F5e9ZpWJD3z31%2FzezE8pCQXSwOFvxA6i2qu0t9ckz23YyMCvVaBngFxQyIMgxb5D5IRB6ad4R71VQyXPe1ERPEzY1fccICnjUfWfsCZCGXR5Au9%2Fa4Piovqjqj9LP7MLG7y8oGOqUB95NtSB12r%2FUiFnVqtYptoAbjOKPnXPapZIDXJ3hr4jJsZIsY7cjcYvRVMx7nSXruIJ3Z7OVAlMVQOKnsWxfnPkgCmOT64mJxYKW%2B89TMTVwQr8x0a3CSLP44wuMk7FNSwlfDPyDuDPRL7qQxlpdB0nsJSK4QejL7DKVf6LSeG4JSd%2F6dFJNcTzy8yQ0TtAs4rTDOrdvA1Q1gMMW5QN7Gx2jX5AXK&X-Amz-Signature=88d2b2000c7b3553f392384f96981112a308aece0758aacdc5dc106722bc3f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5TRNVH%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK3crGyEnhhqtK%2B8IbhaVZ9VAZzNpsba0Xt4uovdf%2B7AiEAuVOYoe83IP%2BuapN4e3yNwaMrYLP9D9WhYhpRQeLAsPgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNs%2B1%2FEv2bfUpXzEyrcA7sZHzhJFpbu6udq7axWCjL4Kf7FbkFKrgWi%2Bk0Yc1OutpbPTyr7zPQadQB2g%2BOCs03ktAtUMHuK20lImdaSbQYpO1A7LCX%2B%2FgOXwDuMRyxejTtdomJs%2Bphk6mZnp8jKQGZyCR5Kw70UZTMpsbkVngjpmPJcr1nBRR8BjVaNXepSu7AXclUOvQsKH%2FgXgTho1stJvT1j%2FPC6GfrLFEY9Jhunonvto7Axv1Y70eQDhhlagaj1OIBIYff2SyUg9LgqG7nsP3QSsq1UPcinlZ49fVHTdVrsZjCJCnVpxA1F0QbV8AgMTd5zeDOT7G4BCKoO5V%2BfJRo1d9s%2Fqji%2B3CZiJgOI9PZGy09628MSfPkqzVS5JfjCYObMuLbpFf91xslgW7%2FopbI2sNOa5mAVb0sBiyoHxDPKhhtMM57vwziwT2nLp2LpVPZb3XtkfUAcA7fol0B%2FAScI2Sn7hu3f52IpCs0iqIAWBURslF2gvqCAtxiQH4EmU4EosLfvCsfMx5Uy%2Fi14Ty3UckwYs%2FbuF%2B9MqSb82UTpb3i8fjSO%2BMEsiGk4frC4%2BjBICbdv4EK10wUI0vbSqUIwBLdDvuUopJImA4wlslOOoncYIx8dYFJIpOW%2BjTo5xFCRwHQ598I7MJTZzMoGOqUBD9cATCXPW%2FKU5DwDq1OdnvRnNI7XxoYTx4zFJRwvZDz%2Bf24UKPXKCiwC8DL37EgKwVlKf29pYASNHHtIUB8%2FReqA%2FHxbFyyekzYczQY9ojE6ca6TzByMdwnpIHGGHlap4pDnoc7hbg5uZFmKp3IeODw4u8cBd6giGomNKnReuoJFyhVNgQCv0CaG0PLxNwzAtg3zvPAG0h%2F9ezlDG5ItUwrVSshA&X-Amz-Signature=9d0f5785b1f65934f2ec9c395314918e20ae2cf58eda51830e66e4c1ec366a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QOTRE5S%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDknkQ94ZOBlwkfMhJVznWp4kPB6ED8JtEJ%2FjUvDRNPAiEA61IY1xWRxMXuNYfs%2FKsxyPwF%2FLgxHKC9heU%2F5VrW4xEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLimDoMnel2P29nQLCrcA37nvckl8Zoy7FDHSy%2BrCUNRI2PnUb%2BnYlplQ8OeeRWSGYzTGjY69S7rLbpJCzWNFMoPncJCHd6vLte6wfYqnOBuG2PNx3R2OEX2wDGPk8FVoXA%2FvhKAiIRoAq6PHT%2BDrKYqefn%2F82uHHeilACHpFT4DSQ5gK9KKaIj8dJ20w0MBTSmqV9EEzDum%2B3sIgWsZUOCHTaP4pHCalXAsxlLDeaPKYJhRrm5ApfN64r68gzIFC9YrQarrTHfsSmp896c%2FbxHjEpbc7HDucWpqmA8sbFi3QCDt1jcMTBcSbGhpixIlaMSvdPn4jgKAQVlgXQ0oIPjXmDr2ENzNSuDQsALV%2F9yk9pxi0o1jiZDmVv9vueN0TelAbM2h%2FbzxWpXim8p0yQCgx3IggWyZkxY12RPPynkrn08t19xVB7g6Q7ULcxHLiuaOdXG7OMPFHJqrzfedNFrBpJfYDqZnINi%2FSU1GaZxJxL4sZHV9OoveQ93Maj7aw1J2nlXvPZeLhdRZSzFirW499KcW%2F0%2BPYKc0S63zjNwDIzwnuM1Ij3kRbM2VjnUvcLY6gPINFMi9Q1G2ln9v3PuTyw%2BBGbEWlYIAd4HEQgtTWLJ%2Berke0LCkZ04rKQR2rGTX7bPLzbIycbgAMN2%2By8oGOqUB9DLMev6NM1ZvEbS5zx1Lj1s%2BeLFKUcpC4rL7bMkeOTt0zDuDLxmLMSigDaM%2BCNhPBcLR%2Fq1IDSsdB1qh0xerKZ4ItBGp8pSCJWKF%2BPFJA4DtFnxu4V9x508gEQIpoRVGCQbPnYqLXhpmsBR70CR%2FNiEdeiFPqeAmpXJduK2F3RNNoGSU%2FpMDOWN2bsSkQ42b%2BGOYr3fW5wkmf7F5LbIG4fm928cb&X-Amz-Signature=c6066928a136383f172f22869829ae3c063486484d64f92ed0743e2743caf21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZJWULW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zt7sfnzIyVY1NgI0p2ZJHBhLQY5P5QVD9LvE7AgLgwIgAhcaRlbRJne7qnu0SulpoipocpClbZecGhJfe1ljvj4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0HUOEnao9fv6DI6SrcAw6NqxqNkiYsfzzDC7bgQxpRdZT97Jo08q5J8FKtnGJQHVnA8eBAoUVvfM7vYFFF1Fejm34yMU631FaE9jGoXjepgHq25%2FI%2FqgcNhuO2fLtgdqKIPc1%2BI69zsDT7qzzyLAKcSUhgt7uW0%2B9Y5aTWSneYF377bnTdm0Ob%2BFKlpf6otrJTwW%2BEkNEAW0a2Mwy2Yrwz4yQDZBTuM%2FLgVcYNzmvhzq4bpuDrRwpf1tneIn5tKT1yK%2Bh152Itl4c8v2l8S7nHm%2BKwHQPe7Q8AoLpbPIMAG2BvrJsP6gwH1fIpMgip4O29L2ae7EvkwGcpEFx%2BR79bkG3KWPUfo1A8qkh5f6Xk%2B4q%2Bq8t0eXejRmXWMDEoN%2BFTpKTtUQVhE%2B8LFLRAL3H10Cn2oCS5U6PwxQTo%2F88cspWG7gKYRoX6c54Mbb9p%2FOppSV8GEAI6zWo7DOs%2BljmRnIlpJ2za54F01%2FO4RJj6S6rakDvMX8PE310ye4aGshTJs%2FGIBQqIJgHhK8F5e9ZpWJD3z31%2FzezE8pCQXSwOFvxA6i2qu0t9ckz23YyMCvVaBngFxQyIMgxb5D5IRB6ad4R71VQyXPe1ERPEzY1fccICnjUfWfsCZCGXR5Au9%2Fa4Piovqjqj9LP7MLG7y8oGOqUB95NtSB12r%2FUiFnVqtYptoAbjOKPnXPapZIDXJ3hr4jJsZIsY7cjcYvRVMx7nSXruIJ3Z7OVAlMVQOKnsWxfnPkgCmOT64mJxYKW%2B89TMTVwQr8x0a3CSLP44wuMk7FNSwlfDPyDuDPRL7qQxlpdB0nsJSK4QejL7DKVf6LSeG4JSd%2F6dFJNcTzy8yQ0TtAs4rTDOrdvA1Q1gMMW5QN7Gx2jX5AXK&X-Amz-Signature=3c2d7d6911900dfe06955d1cdd4b7258d71f3ddcd08ffbe83140cdd231a60834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
