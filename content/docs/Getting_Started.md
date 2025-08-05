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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLTBCAR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICGPHJucVLq3P7of2zZg3blmE3hPzwVDo7m%2B3L6xUlZeAiBGsIPuQASetUdTmTCgqk%2B3lWJBc%2BtbMN9A4X%2BybGXOUCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMOM%2FC02aVO3a5OkzjKtwDVLFS4HBESiNmF3fw5DeMK2f8Tjt9oql3%2F7pYmui0LDGef4werZ9Giz34PU5t06bJZ%2FaDytle0txKInNh7jTtcBH8QpyEukOmSwNqdTxg7M4W3aRVHWkMioHKOzfLAwusBiPR2b3hwd3%2BkXQfXpIc0HGXX7SnOpqn7f9qdI%2BVsJ5jAqtFuTl2ozQCmySPQXZXysHFgv72AIpPnITvBvAe9WbG%2FnKkWqzPuxTIC4lERia3TmEbZZB2csnY0uGt59iOU6znsFtj7G%2FwzRFp7ESWXouCORnQWb3cfLDwp8d7NnRn4BPIY8Ag8f%2Fj9SE%2FbBLAH1%2B0mf1MkJI4TqT%2Bmo1Sqxddvs3Ba0VT30lBovBai2ZqQ%2B4QGYqcr3LermExXgXv%2FK2%2BKV47GcywRk4ayEdIthZ8QmVOO%2FK8lUkoGMfePidqGiSwM5wlc8aQHNhOmE4%2FBCVe8c%2FuNLsUFL6ichrCSurUwR4OMU55dR%2BVNWzECPvkhVOAvAVexLNuahDvwpYQXfe9dcMEYdTLiU5m3wVq%2BLknU2iC33rvLJfI%2FKnVLqK9cyEntQZ%2BskEt0d%2FiSS%2B4c0bPZ8YI3w9TnPw78JkxctHrhId%2FsR998OT7eAIA81lAzvLmE6kBrWzYB2Iwq4PIxAY6pgHtPk8yDjSwJOe%2B9WNtXeTxaXQyIemmYnNogUN0WOo6eGycdwkNE8aEOknu2OH653eb0i22zdH%2Fgqw1A2vFhV3XL49ExcWDQpS3n%2FOLI8cSfW%2BZdNf4nYNutmN0MALZ18zl5ixTUb6x9cQ1xY1l3bhYivT71UGDtq84CzaWJW0JcCDn2AAaor3Eht1IE8Ib189EQBP7teXyyblIEQAK6SfvY%2FDh1%2FXy&X-Amz-Signature=17e26a0e1420ce53c12e81a47b1b9d8428d36a7112d6e5a6dad98d1415e7d0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLTBCAR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICGPHJucVLq3P7of2zZg3blmE3hPzwVDo7m%2B3L6xUlZeAiBGsIPuQASetUdTmTCgqk%2B3lWJBc%2BtbMN9A4X%2BybGXOUCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMOM%2FC02aVO3a5OkzjKtwDVLFS4HBESiNmF3fw5DeMK2f8Tjt9oql3%2F7pYmui0LDGef4werZ9Giz34PU5t06bJZ%2FaDytle0txKInNh7jTtcBH8QpyEukOmSwNqdTxg7M4W3aRVHWkMioHKOzfLAwusBiPR2b3hwd3%2BkXQfXpIc0HGXX7SnOpqn7f9qdI%2BVsJ5jAqtFuTl2ozQCmySPQXZXysHFgv72AIpPnITvBvAe9WbG%2FnKkWqzPuxTIC4lERia3TmEbZZB2csnY0uGt59iOU6znsFtj7G%2FwzRFp7ESWXouCORnQWb3cfLDwp8d7NnRn4BPIY8Ag8f%2Fj9SE%2FbBLAH1%2B0mf1MkJI4TqT%2Bmo1Sqxddvs3Ba0VT30lBovBai2ZqQ%2B4QGYqcr3LermExXgXv%2FK2%2BKV47GcywRk4ayEdIthZ8QmVOO%2FK8lUkoGMfePidqGiSwM5wlc8aQHNhOmE4%2FBCVe8c%2FuNLsUFL6ichrCSurUwR4OMU55dR%2BVNWzECPvkhVOAvAVexLNuahDvwpYQXfe9dcMEYdTLiU5m3wVq%2BLknU2iC33rvLJfI%2FKnVLqK9cyEntQZ%2BskEt0d%2FiSS%2B4c0bPZ8YI3w9TnPw78JkxctHrhId%2FsR998OT7eAIA81lAzvLmE6kBrWzYB2Iwq4PIxAY6pgHtPk8yDjSwJOe%2B9WNtXeTxaXQyIemmYnNogUN0WOo6eGycdwkNE8aEOknu2OH653eb0i22zdH%2Fgqw1A2vFhV3XL49ExcWDQpS3n%2FOLI8cSfW%2BZdNf4nYNutmN0MALZ18zl5ixTUb6x9cQ1xY1l3bhYivT71UGDtq84CzaWJW0JcCDn2AAaor3Eht1IE8Ib189EQBP7teXyyblIEQAK6SfvY%2FDh1%2FXy&X-Amz-Signature=ec0a467c031c05adf678e534b017ff8f1fbcdb9fba7a70da72a17f0df594c5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLTBCAR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICGPHJucVLq3P7of2zZg3blmE3hPzwVDo7m%2B3L6xUlZeAiBGsIPuQASetUdTmTCgqk%2B3lWJBc%2BtbMN9A4X%2BybGXOUCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMOM%2FC02aVO3a5OkzjKtwDVLFS4HBESiNmF3fw5DeMK2f8Tjt9oql3%2F7pYmui0LDGef4werZ9Giz34PU5t06bJZ%2FaDytle0txKInNh7jTtcBH8QpyEukOmSwNqdTxg7M4W3aRVHWkMioHKOzfLAwusBiPR2b3hwd3%2BkXQfXpIc0HGXX7SnOpqn7f9qdI%2BVsJ5jAqtFuTl2ozQCmySPQXZXysHFgv72AIpPnITvBvAe9WbG%2FnKkWqzPuxTIC4lERia3TmEbZZB2csnY0uGt59iOU6znsFtj7G%2FwzRFp7ESWXouCORnQWb3cfLDwp8d7NnRn4BPIY8Ag8f%2Fj9SE%2FbBLAH1%2B0mf1MkJI4TqT%2Bmo1Sqxddvs3Ba0VT30lBovBai2ZqQ%2B4QGYqcr3LermExXgXv%2FK2%2BKV47GcywRk4ayEdIthZ8QmVOO%2FK8lUkoGMfePidqGiSwM5wlc8aQHNhOmE4%2FBCVe8c%2FuNLsUFL6ichrCSurUwR4OMU55dR%2BVNWzECPvkhVOAvAVexLNuahDvwpYQXfe9dcMEYdTLiU5m3wVq%2BLknU2iC33rvLJfI%2FKnVLqK9cyEntQZ%2BskEt0d%2FiSS%2B4c0bPZ8YI3w9TnPw78JkxctHrhId%2FsR998OT7eAIA81lAzvLmE6kBrWzYB2Iwq4PIxAY6pgHtPk8yDjSwJOe%2B9WNtXeTxaXQyIemmYnNogUN0WOo6eGycdwkNE8aEOknu2OH653eb0i22zdH%2Fgqw1A2vFhV3XL49ExcWDQpS3n%2FOLI8cSfW%2BZdNf4nYNutmN0MALZ18zl5ixTUb6x9cQ1xY1l3bhYivT71UGDtq84CzaWJW0JcCDn2AAaor3Eht1IE8Ib189EQBP7teXyyblIEQAK6SfvY%2FDh1%2FXy&X-Amz-Signature=fdd156de4a2116485ab9dab01d1be9d727f64a28ece2066fa54360cba7e25a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBLFP2HZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC4nB9SNKxF%2FIewDsoqtkpXWNrmdq203mjHzRg8nBnhtAIhALtmn9yvtAoBCQaV7yLANfofqbFhF0OBG0NL0UmkymY0Kv8DCF4QABoMNjM3NDIzMTgzODA1Igw%2FU1mfsYUpPoWeGEAq3ANwc1L0qMMKTsGn%2B7kwVi4Ipj%2BP%2FFrUQSvjBvivHqk%2B8XJYBaXplL5MTZcXIeLZ4Nm3uyqL9lYsI2mdGi7xbTLkJzPmhuWseZo1ZmM8Lt6817USg5enaSd%2BMIT1lr5DDbDmnM7FLEkSe1OAn%2FGQE4yGYbu2XIRr7DIzQ0viyemQ3SnL0Jui9RSVb02ATXJVfbVYGe%2FAdoqWq6JAlbciYYCZF5%2BDMc2dCXJvvHDI2i75Ggsabq8fE0KaxwOMiNML7bYWM54SRL16di7JLJlSAcEb2G8wAJ%2F0w4OuVTY66fwty8nMTEM5byKBhgRkFWIIkdZa7ponLN7m5pkhHoEn2TgjX%2FWBTQvvyQ3ViaayzSbqd%2B8MTAx0%2B3S6VcGf8Pv3MkXY6U%2FMZ%2BzoOKou62VV%2Bt6cWfY9693zQ5nvjEcrlPXqpMkOC9pDfPzvzSy5GM8myXsY7KzEqe0mTJEYpnE%2B1EjWMF3jQjQpmj0B%2FKSqKYV0v7y%2F587PJH1Gk9qkvsyvMhhsf6DzmkNFEiWdQ9w3riRLky3XI4CMTZ4wpayNRf0z02yvxhVWyPgazpY0m4ySSSn1uxv3iU%2F9a%2BP%2Fp%2Bla9Kd%2BxhudaghTTl6CBSiKwnfQ4ZXsLxIg1xusf98HAzCphcjEBjqkAYTV1ymwCZts4BYoVR3I9mQqCAR4gtYYKQBqtpOTeCNd7TPtMoQL%2FXtpBB36wr4i9OpH%2Flt2OsW7p%2BCUMeHbO8Et7VPeh6qhuDDzQVc8A2qPEzvQNDFBGvgW1Aq8oRkjf5TnCeW9yEdnJh6vUp4o%2F77tpvZXfv%2FolE3zNdwJ7KPpimRHiZgMe0GYOEuY1C5MY8BPKXBHbYicH3hoH%2BC4ux1N7qSn&X-Amz-Signature=bb65e20b82edb7904d7ba78109382fd8a2f7be95d46d9b13558a5a235dd131fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXFOAPM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFSoKBURBWo1Rjt87ctIFJ%2B731ywvfA0AIMylRIi7QEiAiBsHDUmzuvnEyQSEa8ru3LsQTQ8FY8MkNQS%2FkmNUN2Buir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM1HsIGOh17K043OIwKtwDIIn%2BpNeiv9u3Yc5hMd3zzlbshQ92UUdSHxA4raF4W08%2BxhrM4zgxdJYPEOGG6T8%2BgFheyZ4R1rATIFiJVhqnq2qIsZKV5DEtHCauIIYB5dy40Rq2P3GDt7lF1cKXklYAgSEILCq%2Fzf%2Fb5nUQNivxTffbkp4ZDwhUq%2F1hRbKuHuBSH5I3lo0GDT1es48SXlFkqskEKEGhiQsqIjY%2BE5%2FAA4053hQw7ySdQ9k6N8xJgCjgyCOKL0K5mOFU2dzbIoBLA2NzhX5JQnOPOlvOvYrIGV3Z5XFoWcjDUFbtLaOc0ukv7hTCd1mCgC32JD%2F5nQY0%2Bxx36TPGizgmEDWLsegAjDFi9H%2BKKEdgs7lvFmssUulAASFGxkr0QGbkkphn57S7q9YH8lVB6ZSuPBA2C3UPBWy0LsjGa8aLbQrJqhdRWjcpbMoJRC7v67IM7maug9QoRVeMo1q3j1RvEzVADw%2B6NqTFl7TK1o6NeLi94tBB%2Bk%2BH3c85upun4ts%2B43%2FkEcWBOqJZCW5I5%2BxWbV5h34blyUy1Hpc%2BpRIg%2FTfs3tBm41bzSAyd9h248hum5ax6d665K%2BMFSuGv9ZJdQRAUteAAHgu%2FgnKgm6dXYAZiURm97EVpsF5woxKmWaxh2PAwrYPIxAY6pgENcA4bEj1a44gc3dHHd%2F32Oc6bJflwevGvh9MihuwaNa%2FQNEi2ix0tdpcC%2BlrmtzxPEIG4qS5yy%2BMU%2FEzz%2FOOfOy%2FT44fbwIkgteQFSkHSypSu6bRvTitd65hbPpq7OK%2F9rJbvQOPsJ2LQVNNUt18XkHuu%2F5kYBZrtKX9QMRfzPNcBsVlwvXEsAmsIPlYZeP2%2BqDm3ApO4FpnHK7dWmbf%2B5HN9UsKW&X-Amz-Signature=a4365f3051b31e8580696ca21cbe39caa559008cd1b12aa7125c924a67120ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLTBCAR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICGPHJucVLq3P7of2zZg3blmE3hPzwVDo7m%2B3L6xUlZeAiBGsIPuQASetUdTmTCgqk%2B3lWJBc%2BtbMN9A4X%2BybGXOUCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMOM%2FC02aVO3a5OkzjKtwDVLFS4HBESiNmF3fw5DeMK2f8Tjt9oql3%2F7pYmui0LDGef4werZ9Giz34PU5t06bJZ%2FaDytle0txKInNh7jTtcBH8QpyEukOmSwNqdTxg7M4W3aRVHWkMioHKOzfLAwusBiPR2b3hwd3%2BkXQfXpIc0HGXX7SnOpqn7f9qdI%2BVsJ5jAqtFuTl2ozQCmySPQXZXysHFgv72AIpPnITvBvAe9WbG%2FnKkWqzPuxTIC4lERia3TmEbZZB2csnY0uGt59iOU6znsFtj7G%2FwzRFp7ESWXouCORnQWb3cfLDwp8d7NnRn4BPIY8Ag8f%2Fj9SE%2FbBLAH1%2B0mf1MkJI4TqT%2Bmo1Sqxddvs3Ba0VT30lBovBai2ZqQ%2B4QGYqcr3LermExXgXv%2FK2%2BKV47GcywRk4ayEdIthZ8QmVOO%2FK8lUkoGMfePidqGiSwM5wlc8aQHNhOmE4%2FBCVe8c%2FuNLsUFL6ichrCSurUwR4OMU55dR%2BVNWzECPvkhVOAvAVexLNuahDvwpYQXfe9dcMEYdTLiU5m3wVq%2BLknU2iC33rvLJfI%2FKnVLqK9cyEntQZ%2BskEt0d%2FiSS%2B4c0bPZ8YI3w9TnPw78JkxctHrhId%2FsR998OT7eAIA81lAzvLmE6kBrWzYB2Iwq4PIxAY6pgHtPk8yDjSwJOe%2B9WNtXeTxaXQyIemmYnNogUN0WOo6eGycdwkNE8aEOknu2OH653eb0i22zdH%2Fgqw1A2vFhV3XL49ExcWDQpS3n%2FOLI8cSfW%2BZdNf4nYNutmN0MALZ18zl5ixTUb6x9cQ1xY1l3bhYivT71UGDtq84CzaWJW0JcCDn2AAaor3Eht1IE8Ib189EQBP7teXyyblIEQAK6SfvY%2FDh1%2FXy&X-Amz-Signature=e83eb51eb8fc3aa4f0ec09afd273ccce5d73ef01e72708308f454bfb1bd2e1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
