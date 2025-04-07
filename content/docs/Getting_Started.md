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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3OEL56%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYdn3pbqpaCwBB1Wo%2FG4%2FK6pfHcf6%2FDlp9ug3HSo3aJAiBwoDitx6FX1Q0%2Fn6gUDNHwzweHJ3%2BvS4xCS%2FvNSdE6Pyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0Mh3QYynE0So5Xq%2FKtwDYvKeHx8XEwWcRLIJKSVr5YvLwAZMCkhc5QG974YUz0zcvmxNv1r60Jmh1QiM49%2F6w4a8kkXLUj81JfkUI3iVbeUzOdFnRuilQYWtQt9%2FmWAFjVf0apmV2ghHpT2qnhUpW3SJpWNRS9O6QwdAlrGuCfVYzKJ7goU5P5EDuccjeT9Fscu8FQWC%2FA0uYPaacTHKejXOiSjgIpwea%2BxwGrYm5wFWV9eElznOXUSJ6VV5TkMuduGGieKoZdLPjmmJKE8nWuBOgYXkcIux7Ai0xvwQn%2BbHa0%2Bsx%2FgYEhwZusSGj1DPVI6vx1ZDzQVcv0SKY%2BXaHoRoTyApY0EDuy9tGLdNZetX70PPzCF92%2FG6Lo6w%2BdJ60uBVQx8Vi5W2PEwHGcCeIsEtnYr8HSVWjO2hDlUPnE88Eo95ja%2BL95V68bUSgrG5cgJYIAJVfXu%2B%2Fvq7zGCWqVwNkPW2p3zg44r1DJj%2F4wGplroKehAw%2FgRwOeCBUcwioWj7eD7L20Z9JRW60gZMQASndRpFl41R%2FccvOfNrx45G7XhP%2FA77ZGXEBR22uh5GMkZB8k8d2DtNp%2B3HCgrdc6Pv0L%2B4kVl29Uu5syIDAp9UI8tWGmescCBncRy%2BuBtnMsg996%2BowlzGdsAwkoXRvwY6pgH8FNFf7DlZURA3qceO4fPJXfL166NbYsHTFk12thcsy%2Bq4I%2BZMYvTquMJnKhkGSloorw9e1VH2hWZU5U%2Fm%2BRSKBRTQ8nWeoEhNigaS8N%2BUvpmBNsa6lgbbp8jKJTlVkuYLmA3WceOsFgqvBzzBoIG4z7zvU4FfcP%2F0WHVH%2F2LxzxcqlTfjVsQ%2FvktvRiJWkWAoJVRdOgQbRAFegHUbPhTwlGioyu6A&X-Amz-Signature=cdbbcbf0a9b28230de59d38fe772d2ec27bd984ce8c9028b350a1625ab782b97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3OEL56%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYdn3pbqpaCwBB1Wo%2FG4%2FK6pfHcf6%2FDlp9ug3HSo3aJAiBwoDitx6FX1Q0%2Fn6gUDNHwzweHJ3%2BvS4xCS%2FvNSdE6Pyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0Mh3QYynE0So5Xq%2FKtwDYvKeHx8XEwWcRLIJKSVr5YvLwAZMCkhc5QG974YUz0zcvmxNv1r60Jmh1QiM49%2F6w4a8kkXLUj81JfkUI3iVbeUzOdFnRuilQYWtQt9%2FmWAFjVf0apmV2ghHpT2qnhUpW3SJpWNRS9O6QwdAlrGuCfVYzKJ7goU5P5EDuccjeT9Fscu8FQWC%2FA0uYPaacTHKejXOiSjgIpwea%2BxwGrYm5wFWV9eElznOXUSJ6VV5TkMuduGGieKoZdLPjmmJKE8nWuBOgYXkcIux7Ai0xvwQn%2BbHa0%2Bsx%2FgYEhwZusSGj1DPVI6vx1ZDzQVcv0SKY%2BXaHoRoTyApY0EDuy9tGLdNZetX70PPzCF92%2FG6Lo6w%2BdJ60uBVQx8Vi5W2PEwHGcCeIsEtnYr8HSVWjO2hDlUPnE88Eo95ja%2BL95V68bUSgrG5cgJYIAJVfXu%2B%2Fvq7zGCWqVwNkPW2p3zg44r1DJj%2F4wGplroKehAw%2FgRwOeCBUcwioWj7eD7L20Z9JRW60gZMQASndRpFl41R%2FccvOfNrx45G7XhP%2FA77ZGXEBR22uh5GMkZB8k8d2DtNp%2B3HCgrdc6Pv0L%2B4kVl29Uu5syIDAp9UI8tWGmescCBncRy%2BuBtnMsg996%2BowlzGdsAwkoXRvwY6pgH8FNFf7DlZURA3qceO4fPJXfL166NbYsHTFk12thcsy%2Bq4I%2BZMYvTquMJnKhkGSloorw9e1VH2hWZU5U%2Fm%2BRSKBRTQ8nWeoEhNigaS8N%2BUvpmBNsa6lgbbp8jKJTlVkuYLmA3WceOsFgqvBzzBoIG4z7zvU4FfcP%2F0WHVH%2F2LxzxcqlTfjVsQ%2FvktvRiJWkWAoJVRdOgQbRAFegHUbPhTwlGioyu6A&X-Amz-Signature=fa5d0f7f0b70d17dd46ce51463655caca28f51e73a0e4c3e2151b16053a1ed1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y67ESDH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4fKJhCBkMxIfZCo40jOGiPqncOm5OCPXf%2Bf7xI8U7swIhANfNW7jaRtTI9InIfSNe9umpZMWjzAQR6d5CvCQHoIOKKv8DCGYQABoMNjM3NDIzMTgzODA1Igx0p0DJY%2FKF3XJ17c0q3APFBNiv%2FuvsYnEfwA43ztxUwjWIcbrNfMuUESoHTEmkWDl9l4%2F1rdLfMGaGS5NVUknR54qYv1CniC92Go96AHrcsVNo6Mg%2FmEMXcX5ZG6%2BN3w2LpweE2uLq8rcS6Nvz94wXAVKtOl9N3zSilF9gkJXbM4jygely8W0YHUs%2FhTvoO1W6sY%2Fn5MEkkvjS9o1FF%2Ftr6yXB5xunOM78Sp8UpimAEeJWzPvwYtPUhYitRuByPotZhfCsozCXc8o6WOqV0bCTL3W%2F73tsFafaAOBnsNPmEJGf2aO3fGB9XI1rH3wcAluviRYqWpYY2fSiXLlPGLr841YrPjmUM%2BXuDJcyJShiyb0tw%2FofXbfIAvN3YiC0H7hfq3%2F7EZA07rNmc%2FFd3bWCeL23aBATJvdGr0r0ajwEq5ud%2BG%2BJ8RCaY3eDV3TFDkNghiTnn7bHGT411DBek4k3aix%2BXMqBa7Jhn0SaL1QylXCWEqoukF6TQHDR8ndBUBxTU9g7isa8Zf4eFX4%2BYyI4twsR6XKVIOULBXHYs9uT0%2Bv0RzIzwL6LkH3YAXpdlwDhdY2GdchFSUlFLOsqAoWrnJcR%2Bk3nm6cKamcfUDCw1F%2B30UpA2W5sWScHKkgVumpJlazC8URD%2BUPVojCghNG%2FBjqkAR2ZM9ZCr2o2yTFbUjrp4p61rD1Y%2F%2FcG5GVRfT58gIqTctKKOaHcYZwDf%2Bhok8Oep7aBp%2Fm7TWdxyHu4uI79E7qUGc0R%2Bbfs83njgj7rIQ8kjBgGGmt1kVqz4LmyK%2B98EfQ%2BOwjFEHBWPVTnYRVynAjYMPvsoTsRBEb87dDppNsVz2lWI7lEAzJH1D8fRYgb8jWQdB6XatZDCJ%2BPARLprfT2OlMa&X-Amz-Signature=16a9873c121aa79b78f3b150269974b0895ba9f15e3f12d5f83a6015d8822d86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5OQTXC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJaz7aMqFY6nntfKAf5g98mNqPU8DdChUpAy5nUo3uMAIhAItsR%2Fe0JFWLi2JcpcsoEFTTckU%2BOsm1x3lLsBYSf8L3Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxTbbWBIUqd6SoAJ30q3AMbC3xQlc7XjqnmjArUJHWCgBvSghTNc%2BX72hX4rylUBldt81LBO1tcKLI3mmGLuY4rT45Ai5XZmcvzkwDlqTBu8shAnCSS1YVsbljZ5emMSiM9nPyurK4w9hZMOWZRBy7rPRqsikUj%2B2eYoLUTPvMMvUdgG%2BIZeTasTeI5FtYK7s7RVOJ8Fe0e%2BoSjwsDsDUN3pSB0h64ainIZsm0SaZqcFCmYwxS2IVjkRshd1Hl1IYltl5oGFpOHiW1hT0ezak23Njvu9h53ZTYO3zzauZGDwr36A%2F%2BAHk8ghCGesHDQnzkPJsOomyQ1hLZX74D7y2y5Z0sXIcQIF%2B%2BGamJlFsdFg8uxA8P17pgt8jqc7P2wEW3F1EjYBLlPxsIpKbp6AEXzmgQdRV2e1XvyxSCTrmbC41RTuzn0yzLP5CLfKCRUKMsT4vUjDbvKAcZJ4u9RWGpIPGtwdbsxjBouXUonOzHHvOTvakJxxk2VLriwkhwto8CHtmjwSHOSvmboITRKtXlRB3Wna2kzXttaFtm9Ax%2BE1ICvIlIyavAb7O5mVT%2BQsIlBaL2YSfRz4mNDwW6xmEzCT91AaoP2%2BdvETItIy8Z2CJRI4HFSrL674pzubbH1J3bHsk8Zo4ublo7YxDCahNG%2FBjqkASDvxQm1faa5BmcWIQwk2nXxk3%2BfvEKld9%2FJvprZe%2F5jcw26CZcKf%2FYojxQuEz0iJ446aLVlEWwfJI3mfjEKWB%2BoW51VcB402ITDCfoX2Ulr6GaFJXs3KJg7GEp1eYygvRbCI1KSXulCFeTIPTwKZRqDAsYcA6zW6IPasA4xHrimZX0vosmuN1qGgSDVb%2B01N880fohKBdMeBCMXq0%2BkDlsn2aFG&X-Amz-Signature=22b22ba149082688b70cf0a1575f69aca1fe794648c8ea7da1865152acf122e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3OEL56%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYdn3pbqpaCwBB1Wo%2FG4%2FK6pfHcf6%2FDlp9ug3HSo3aJAiBwoDitx6FX1Q0%2Fn6gUDNHwzweHJ3%2BvS4xCS%2FvNSdE6Pyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0Mh3QYynE0So5Xq%2FKtwDYvKeHx8XEwWcRLIJKSVr5YvLwAZMCkhc5QG974YUz0zcvmxNv1r60Jmh1QiM49%2F6w4a8kkXLUj81JfkUI3iVbeUzOdFnRuilQYWtQt9%2FmWAFjVf0apmV2ghHpT2qnhUpW3SJpWNRS9O6QwdAlrGuCfVYzKJ7goU5P5EDuccjeT9Fscu8FQWC%2FA0uYPaacTHKejXOiSjgIpwea%2BxwGrYm5wFWV9eElznOXUSJ6VV5TkMuduGGieKoZdLPjmmJKE8nWuBOgYXkcIux7Ai0xvwQn%2BbHa0%2Bsx%2FgYEhwZusSGj1DPVI6vx1ZDzQVcv0SKY%2BXaHoRoTyApY0EDuy9tGLdNZetX70PPzCF92%2FG6Lo6w%2BdJ60uBVQx8Vi5W2PEwHGcCeIsEtnYr8HSVWjO2hDlUPnE88Eo95ja%2BL95V68bUSgrG5cgJYIAJVfXu%2B%2Fvq7zGCWqVwNkPW2p3zg44r1DJj%2F4wGplroKehAw%2FgRwOeCBUcwioWj7eD7L20Z9JRW60gZMQASndRpFl41R%2FccvOfNrx45G7XhP%2FA77ZGXEBR22uh5GMkZB8k8d2DtNp%2B3HCgrdc6Pv0L%2B4kVl29Uu5syIDAp9UI8tWGmescCBncRy%2BuBtnMsg996%2BowlzGdsAwkoXRvwY6pgH8FNFf7DlZURA3qceO4fPJXfL166NbYsHTFk12thcsy%2Bq4I%2BZMYvTquMJnKhkGSloorw9e1VH2hWZU5U%2Fm%2BRSKBRTQ8nWeoEhNigaS8N%2BUvpmBNsa6lgbbp8jKJTlVkuYLmA3WceOsFgqvBzzBoIG4z7zvU4FfcP%2F0WHVH%2F2LxzxcqlTfjVsQ%2FvktvRiJWkWAoJVRdOgQbRAFegHUbPhTwlGioyu6A&X-Amz-Signature=fcd1fa9cdd7ef7e91621d4ed2954dc7c632a09bacf425f026358e4cc055e598c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
