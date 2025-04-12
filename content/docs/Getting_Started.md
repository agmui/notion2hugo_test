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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNWGRAN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDZ6ZAvcJYhkqTiN9GxLP3EEfz18jVw94nMO84Pn38ESQIgRCBLLFohpYDHrUoXjroMp2fYkHE8q9G%2FPBXoljoXrRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGF0%2BO0pnqjfBloqyrcA2QklCMRtMZ9BI9O%2FxR6rN8kaX%2BHzCcxmOtND%2FJwZfoKCnRVx0cn2wMDHomb9bzBzqui3kIKO1p%2FdUUsv8pl4sv3a1dddZZTuoZASlWhEQZb2TwbORZ4cMTcgpfeafCANzYdaKTD44Ju8zV3CrzHL%2BKZMM%2F%2FiG20evyv3SlG6qjGD8dOhxgVVSWVyJKN1iQgI4GWmGXky9nL9oWTq4rftssD1G4nkC7xvHgQHcrMNP7W2zgluY3TTY4aXH2%2BHdlq1w8VXkcPG%2Bm7d0c3wHeLEHmMnZ4ukJpMJSWrtwLlA%2BRV0sfc9dt9QVUHcT7PZ8FewJ3YqXDQtOYAJ9cNsfmrre4g4RALz4cRWBNbjw2l5MnBHgPnBk7DO1Myu98rnkSDp%2Fmtq79Dqsc4xEiLimWNBX4dfd2CV4g45kK33ukJFwf7jCxG1zCjavly643GCSZp98pC1iJ9987IRlPa58RFT5%2BK5m%2BGZ0cP7u9pL89ONro0X1wMntePYPTiBKQ1bEUklMAEeo39WSslf5GbA5F9Qd%2F9Z9sRtLU%2FSBLIHCheJ8Jiz86B%2Bd1BEwywMC4cDyRPrrFddBYtCFztVAAV%2BwVtp2wv60N5v7aA4kAXGhjVlFuzSpgD%2Fr%2BiD%2FBkQ53DMKj76b8GOqUB2Qh2OoxFtSWvWqun0tnKFmbaqzZeqZjzdVxL8ZdrK9XbDvNkCjxmknhONbFXVcTHrYec2DF1V6tpjPTJiv6bQPlQ4QvfWN3a0JiZoWoZfTg0iHpgoDU817I5YqRdJih4%2BNIdT%2FwxC2kRiXX52PAJ1npPiieYOAi1E%2BWaoNGrIf5bitkepomw50DWfGUmr%2FDlfPSFLS7UMb2X5I9T5u5E%2B9KEMOQV&X-Amz-Signature=4b49ab76030ef636919799c9200430289e16060c81fa1bb4f692f7f8c82711a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNWGRAN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDZ6ZAvcJYhkqTiN9GxLP3EEfz18jVw94nMO84Pn38ESQIgRCBLLFohpYDHrUoXjroMp2fYkHE8q9G%2FPBXoljoXrRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGF0%2BO0pnqjfBloqyrcA2QklCMRtMZ9BI9O%2FxR6rN8kaX%2BHzCcxmOtND%2FJwZfoKCnRVx0cn2wMDHomb9bzBzqui3kIKO1p%2FdUUsv8pl4sv3a1dddZZTuoZASlWhEQZb2TwbORZ4cMTcgpfeafCANzYdaKTD44Ju8zV3CrzHL%2BKZMM%2F%2FiG20evyv3SlG6qjGD8dOhxgVVSWVyJKN1iQgI4GWmGXky9nL9oWTq4rftssD1G4nkC7xvHgQHcrMNP7W2zgluY3TTY4aXH2%2BHdlq1w8VXkcPG%2Bm7d0c3wHeLEHmMnZ4ukJpMJSWrtwLlA%2BRV0sfc9dt9QVUHcT7PZ8FewJ3YqXDQtOYAJ9cNsfmrre4g4RALz4cRWBNbjw2l5MnBHgPnBk7DO1Myu98rnkSDp%2Fmtq79Dqsc4xEiLimWNBX4dfd2CV4g45kK33ukJFwf7jCxG1zCjavly643GCSZp98pC1iJ9987IRlPa58RFT5%2BK5m%2BGZ0cP7u9pL89ONro0X1wMntePYPTiBKQ1bEUklMAEeo39WSslf5GbA5F9Qd%2F9Z9sRtLU%2FSBLIHCheJ8Jiz86B%2Bd1BEwywMC4cDyRPrrFddBYtCFztVAAV%2BwVtp2wv60N5v7aA4kAXGhjVlFuzSpgD%2Fr%2BiD%2FBkQ53DMKj76b8GOqUB2Qh2OoxFtSWvWqun0tnKFmbaqzZeqZjzdVxL8ZdrK9XbDvNkCjxmknhONbFXVcTHrYec2DF1V6tpjPTJiv6bQPlQ4QvfWN3a0JiZoWoZfTg0iHpgoDU817I5YqRdJih4%2BNIdT%2FwxC2kRiXX52PAJ1npPiieYOAi1E%2BWaoNGrIf5bitkepomw50DWfGUmr%2FDlfPSFLS7UMb2X5I9T5u5E%2B9KEMOQV&X-Amz-Signature=b050b155e8fb214e49b8bf5e8662470986d0f28b792200316ca16289593c42e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLJBUB2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCjmB8ofB5xwGcU%2BeaDyawcVPUd3AYHn9rYY4fmwaFIvwIgQkd8plPoKRNtr4JQ00rcfq%2BY4bACtTi8ooNJyDcHBWIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHD7dl7rkIDpE1%2BqyrcA9BoSz%2Bv7ilc%2BSAkMChwyygwL54sfHKz2fiAQFIDyGJrVmu83pMEZTrVTFrfKvrQf0AAwnCDYtN1tGzHU9p0U2yJGQMTosYu31huVBi%2BtlOsdduboG1Sq5RmNopElBS9pLGvtWsLr2twmqvz0NcOi74yTH%2BazA%2FRdH%2FWw4Hvj4JgSA8wxBePMb61CYcPHimuqC2a1i3brIHmf8AwdZzG8tjrLgpTTuc69g3uxB3d6f4Y7IRH6kXWY9CFahtjfnKQ7BQVoKMfpmlPiw%2FNWmDk%2BXGmthqhVIxjgjE1Y9cDoOE0A4N7J6%2BDf6njWBCr4IVwG5w%2BKzNMYJejUXBvaPcmoJOm85RgCOmtpV37iC6%2B%2FVEbL1%2F2PH%2B5Hg60ef6y1m3XnbK3H8hnJDvWApMsYPJ3e0KzmXaR%2FpWXO%2Fhiooqj%2B%2Fu1Q%2FEKfbX4BJC5hcQkymCwePogR5DzT4kJMWBPpteahUJ9xMoJBnH9h7p3plnSQQu%2FGp2phV9bbuBcTnvGgsBd7%2FqhZcneCeJgoV98a71%2FHwgIVMhMcU6ZkWcWx32MonGbw2O1pXa73s5UnHqNfnwh%2F%2ByStz%2BsqRXJ%2B6TgPqgGn4We4G9QwS%2F3CPcbX9W%2FMN5EvBpuBkquoZxuubs%2BMOz66b8GOqUBS2dZRH85CxC6E5l%2BrR6K4Kq5SvbH898w%2FAMcScybxJ%2BrZfBhb254vbuj09AQmBOATmrGEM%2BHYbZmglGjpc9mRZ9ILs5676bHYxQPzamIoWoFszmkpGtP%2FCr90l%2FZRRnBaF%2FF9Bb4nw49VNBYO8YeAWOQ3CA9VPALBT%2FtA10ilrhWEDjtsIjU0jaaKFWRx7ahC%2FLKPMrw68nQjNUzOLoTxEvF%2FY%2Fv&X-Amz-Signature=8340023d9dcd7b958746b4ad02f5dd24b954e05dc17711b4e3cd690d0e53db29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHCJI2G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEONbDgtoKog08P69HNPnAsTaKxMKsROLysKPvF7deEEAiEA7ltaeUfEQRDsuDzJtD8zjTPu8MFUtOmhnLfJLfVkDfAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbWbXTlbeog%2BHhV6SrcA%2FWvurrode89A%2FFGSm76w5p4P3JvYpZj7YqREFa6e7DsaUqFR3f86wF7p9wg0b7Rrg3UnJcXre9b2OuXjzuNow0A3BrJHm2rawJ7aqivOAqlV1k6tZ%2FZnBtu7NSyUq8%2F9lXt79x9C9oaEzd6sH6dnTikKp6J6jkkTEZU0SsjQeFZRk3qU9WfJeeoy31w%2FXKaIskEH83HpqXgHfl7F6ilKKjagRpvDnYB%2FyTIwlIub2L%2BNVyckQxQ9U76CPgOS%2FQcU636a8MpP4JJpT4jXfP7NE4UIo1LgV3%2Bzw3bqQPzJsdqSEeb92lKrAbmwxzMptn8eahhQ8teI0Dsnw7aa%2FROYLPu6ScOIidkNb6g1LDJiDmY0A5b5uGlfnuPZL80NQYQy6WccHBmMjYs%2Frxg5oxVQg7EPfQehKo%2FVKVJtkST58bUtcppxo4052s4HeBMySH3aCyVEyYkgzO0Th8GUNUhhaNXE6ivQKi1UB9j7QXKzsBs975NosBAFrYs3Zt4WdkuYE0cZzeXdrlz%2BDZBCeEymIR2%2FQhpcrzvI7yI8USxBGDgT63zD4bIZdNl3BmRAo0PslAvmShnozMj%2BWAgfCD%2Ft1AFU9nyJ%2BfmD6%2Fjmx18qnZqtKIvdcp1O3h4IVBIMLP76b8GOqUBd4enABeQeGKe%2FHq9MQUJH2F%2BsGDFmJ1Cnsr4tfk47BrpC9aGpQNjDyi1qEviWEtKHwqkHaf9UgPhvh3P6Gnyh8%2BqCsdCH749U%2FctOrCDNT3TZDLIbTa6H7Az6aynD5bPcHQRQJY%2BPp3oJxaplhD4VCrZ%2Fh2hkFuv%2FRf8cN7hBitCrWZUW61ck9O2c5i5%2F09yJfUyJT2Qg7hupoByWpTdkSeSg1tD&X-Amz-Signature=7f24797558ff3ea49ed489e506ae1e0907e43abc319f9a5c6b763bb71b67563a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNWGRAN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDZ6ZAvcJYhkqTiN9GxLP3EEfz18jVw94nMO84Pn38ESQIgRCBLLFohpYDHrUoXjroMp2fYkHE8q9G%2FPBXoljoXrRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGF0%2BO0pnqjfBloqyrcA2QklCMRtMZ9BI9O%2FxR6rN8kaX%2BHzCcxmOtND%2FJwZfoKCnRVx0cn2wMDHomb9bzBzqui3kIKO1p%2FdUUsv8pl4sv3a1dddZZTuoZASlWhEQZb2TwbORZ4cMTcgpfeafCANzYdaKTD44Ju8zV3CrzHL%2BKZMM%2F%2FiG20evyv3SlG6qjGD8dOhxgVVSWVyJKN1iQgI4GWmGXky9nL9oWTq4rftssD1G4nkC7xvHgQHcrMNP7W2zgluY3TTY4aXH2%2BHdlq1w8VXkcPG%2Bm7d0c3wHeLEHmMnZ4ukJpMJSWrtwLlA%2BRV0sfc9dt9QVUHcT7PZ8FewJ3YqXDQtOYAJ9cNsfmrre4g4RALz4cRWBNbjw2l5MnBHgPnBk7DO1Myu98rnkSDp%2Fmtq79Dqsc4xEiLimWNBX4dfd2CV4g45kK33ukJFwf7jCxG1zCjavly643GCSZp98pC1iJ9987IRlPa58RFT5%2BK5m%2BGZ0cP7u9pL89ONro0X1wMntePYPTiBKQ1bEUklMAEeo39WSslf5GbA5F9Qd%2F9Z9sRtLU%2FSBLIHCheJ8Jiz86B%2Bd1BEwywMC4cDyRPrrFddBYtCFztVAAV%2BwVtp2wv60N5v7aA4kAXGhjVlFuzSpgD%2Fr%2BiD%2FBkQ53DMKj76b8GOqUB2Qh2OoxFtSWvWqun0tnKFmbaqzZeqZjzdVxL8ZdrK9XbDvNkCjxmknhONbFXVcTHrYec2DF1V6tpjPTJiv6bQPlQ4QvfWN3a0JiZoWoZfTg0iHpgoDU817I5YqRdJih4%2BNIdT%2FwxC2kRiXX52PAJ1npPiieYOAi1E%2BWaoNGrIf5bitkepomw50DWfGUmr%2FDlfPSFLS7UMb2X5I9T5u5E%2B9KEMOQV&X-Amz-Signature=46089915521c587f27c12032fcbeaedee9de523eb1cda1f7a200f33514acb96a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
