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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBQL6M5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH3smEZxkH8ecIedX7uQKxs%2Bzts5FWpPhNsMmZWi2FGXAiBqaHKDosGdv3ZKYKnT7iN478piEprnLu6bdqvaCKK6BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbsqRTXLqtRBA4rqKtwDlHJ7VepEgaoScpJEZ6%2BbhgAQxwiJ2o%2BCstYZgiQdRDGckqglH0jtf%2FcOQpOQkquRluUopAui04%2FLD1G0mwDKf0d4SlDCkhLFeKZA6WYSLslbpbvvCF5Nm83VSRoysDqqlTXlWuA%2F9HLotnNV4pP6X1TMrX2g0b43ZmJQeQ%2BIXYN3CGVUOs8N6ODnhmXnDoBckCo41NoTx7ZaL9ZqHzWQ9uKcP1y8seyX2XDLzSBW%2FCiOkKOdNarcun3BV0LUpSKApV4CJQignEa4939hf2fgj%2F%2B7lu7MlfvFJimGO6ElyEBZhu6QrdvI60OruLaPWH%2FJkhJvkLY9%2Bs5U%2FTDimd9oRJsllaf35T55NQFTHlOn8rQ9r0qN3hvHP97tDhFle7y7OrmSaUk7Fuo3dtFInWGXg%2FWV1iMR16cHQ8tK85I1Mh%2BicbjT%2F20FKAnWRrVnKF%2B6AzDrZ2rkyKC4vc7C%2Fo%2BbONT8mG%2FU1wXYyWpTMDCifz9QGoH7geg6JllJj4xM%2BIJFPE89nOSi6uB6M6Il%2FuJ9Jee%2FfP6f016t7A0KV%2FBKOESZdfkvfIglTNOrhpFh2%2BcfSJUOXdhzMLeJvGkHV0hzKPCio0INUpRqO5%2F3YGFSMWc7nXZ354%2BCULnOfK4ww9XmvwY6pgGLhige4tHJj4kgD%2Fj2GJC%2F3XNUevefxF%2FijYIStkgvpXQMp7%2B9c9J9GiwpTrfms4dPi0nVYJKFfI6xTndNG9zoHk58FTD0yNflu7pGMY2zOxBBezuM0TsJYcWkXgh0jYuaDbG7REbvefTIlm3trHz71vN00pLksMH7pxfzbxfybPWX8BuNepymbDsQpOZHKzFtYGFLlqC%2FTSbrmoGOhPnRZpJutVhp&X-Amz-Signature=1866ebd173eef4922789f47f3ae19f48ab75caa3930df1d89c8797fda87d1821&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBQL6M5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH3smEZxkH8ecIedX7uQKxs%2Bzts5FWpPhNsMmZWi2FGXAiBqaHKDosGdv3ZKYKnT7iN478piEprnLu6bdqvaCKK6BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbsqRTXLqtRBA4rqKtwDlHJ7VepEgaoScpJEZ6%2BbhgAQxwiJ2o%2BCstYZgiQdRDGckqglH0jtf%2FcOQpOQkquRluUopAui04%2FLD1G0mwDKf0d4SlDCkhLFeKZA6WYSLslbpbvvCF5Nm83VSRoysDqqlTXlWuA%2F9HLotnNV4pP6X1TMrX2g0b43ZmJQeQ%2BIXYN3CGVUOs8N6ODnhmXnDoBckCo41NoTx7ZaL9ZqHzWQ9uKcP1y8seyX2XDLzSBW%2FCiOkKOdNarcun3BV0LUpSKApV4CJQignEa4939hf2fgj%2F%2B7lu7MlfvFJimGO6ElyEBZhu6QrdvI60OruLaPWH%2FJkhJvkLY9%2Bs5U%2FTDimd9oRJsllaf35T55NQFTHlOn8rQ9r0qN3hvHP97tDhFle7y7OrmSaUk7Fuo3dtFInWGXg%2FWV1iMR16cHQ8tK85I1Mh%2BicbjT%2F20FKAnWRrVnKF%2B6AzDrZ2rkyKC4vc7C%2Fo%2BbONT8mG%2FU1wXYyWpTMDCifz9QGoH7geg6JllJj4xM%2BIJFPE89nOSi6uB6M6Il%2FuJ9Jee%2FfP6f016t7A0KV%2FBKOESZdfkvfIglTNOrhpFh2%2BcfSJUOXdhzMLeJvGkHV0hzKPCio0INUpRqO5%2F3YGFSMWc7nXZ354%2BCULnOfK4ww9XmvwY6pgGLhige4tHJj4kgD%2Fj2GJC%2F3XNUevefxF%2FijYIStkgvpXQMp7%2B9c9J9GiwpTrfms4dPi0nVYJKFfI6xTndNG9zoHk58FTD0yNflu7pGMY2zOxBBezuM0TsJYcWkXgh0jYuaDbG7REbvefTIlm3trHz71vN00pLksMH7pxfzbxfybPWX8BuNepymbDsQpOZHKzFtYGFLlqC%2FTSbrmoGOhPnRZpJutVhp&X-Amz-Signature=07b1c2c5c581df3fa37f176de4b2a786c84d72fb6aea84196ef15d128fd97824&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBEKUE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI2mEVv8Tzpp19bORFtD2%2BSXAQWOtJdO%2Fu1foNab%2BLZQIhAJ0XTLO7em7GBZvXvlcu6lmDmgMux96vC%2FPaxoWekpn6KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWZ27Yui7C6fA9Q7cq3AO19h7WiLet0KVBoahDPLQK22K%2B7pyTZsMRISl2nWIXjDQe4%2BEsYQtiWh2DIqGRQ3%2FSlL2cZfk%2FXgiknbIItrxqcr5sBReT0%2FOwjjLyClDH7VCcFRRao0kLu%2Bkdz%2FNBPsuvZgbAdMl%2BIyhTfpV9cJ2uVoPJ6OFkzHXMHW6i1TM2hda%2FhHerAmf0LnCRcv7tRrjcK8RFEstYrYk4RWJlZT4Lu6%2BRaEq0Na5L9b3EE7y7B0RZxptiLWyM054YINyYkCfL5UJ6YgNN56CYUmniWJiCLR84AoeAOgmWx5YtJQgDk3wDnjD%2FGjxjL9mSDqdf8BrrL37sIRp0T1DHMiqCvTPHMpLqnFvoqK4jxjKXiUxI5aBNF6PlOlvDNH7LbapGNFIswrnlMwFvDsKNb2Hh0yEH5vAW0Z06OsHr%2FPtfkZZ8KqhvZIKrdFu6YyMQ1J9ASqcnOiRs9bNCh1Kvh47KNwS5ex4g7YVs3DeWNN1gK77SuMjh4LqmhqMrZ3fOkDu2uGDgFRzXeu8gB4VBxJtBNVO%2F59W4BqaSBRrZ0I5O2TSIlcC6gMnxOGH%2BIpSKmdP%2BefdXzg1WF%2Bc177h5J5GKSgbPUNODTYlZTJYQNuYtHduIPtwa4YLuK8YPfgUGezDF1ea%2FBjqkAYL%2BGxZdof%2B3WHnHvKBw7YYN%2BGY8QsTOuI%2FbXJxZcRVENWBulrXFVhqcQ61575hS8F98z0ggxrhuQ1gDNXxd9wOXpK5jVl6xv5sj5oory6dqIGzO8goo8vYjXfKoldREpR%2BgBbrP3wcW8DZhgg4q%2BHbpK9c2LOlio3X%2FMteC6EIZOloUxKYnr18s%2Fa05AFrtstc45nxLpQ69NjKORr153si28UWY&X-Amz-Signature=31c7bdbca53c0c392feeed46a80899cd338df0ca063425a1f8e287d7c76868a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAB7ATN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAhY67U7zhr8Qy1m0msNw90a%2BWcPVVtikKEHpTOxISJXAiEAo9jlexiswuw9OUE9xpQ2lbVJ10nomi7lE9T0bo1BNcUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtG79ZzcGjNxDFMuCrcA4vDBY8ooTEnHl7vyD5DoQpt1srtMzbR6c08tRfvO29mnrXk%2BXPhk4H0WJUzeOL6%2BotPRM%2FxVuqa9T3TBTFRFwpVUdX4Cqeu49a%2FXYIixcPltamefLWvvCuehEnsaYuWO4ByX8EEsII4aHGqB7hvPjEBkexxTo%2FV75PS4SHpzA%2B93xRG83laM3zGwZgfVhZaSyYPtCJfOa2I%2FwzMFz5Ew6e%2F8oQDVPDG6lbRvwetqCsnFFVoD2qzw3VMjyvBTLmVsdvtDz%2FtKj05aiC7cl85cSKyTMBoDS0Yeoi5liNFBmnOByRKvKJ7ve%2BLHoC9MNVJl%2FDeh03WrY8Rz6xrGQy99Qsw%2BhVNlluJIkilw8Ft85jVK%2FQPXFF5shHLyi9rppEErQ3KFj54ZLFGnXV7BWWE%2FrX7sQgTNcPwK8he%2BvuNsz5PzWRMrcaAodB13xZsWuEtLlO%2FqyYiUAuMmwPJaPHLQUHYcCRTJxHYFiVSrGPJZarbMz%2BD%2F5jQzM4jIqiYtCRxtqTYX5yAsBdrxf1RurtbPyJOwSpB4iNgLvcfIv5xGycEI0sIv97InYTgOUelUEPPPj7i94gAQ5ltwIkxGxBN2GGNR3VCqCfDRvAPVZrVWac1%2ByrcNEr6jRhcBLlAMITW5r8GOqUBUOcTgFz1DcW35RQ3u56jK9JCCQyPkrRM0OvpzRn9y2HO0LEabV8CaaoIB8XHjcoqtDFDTi8EQJRl5GF%2BiopTzQ8ZlSoCPdRK1cfb8jvzVN%2FMwbCO38KXp52BsnNQJw1NGiTtF2HQKhcPo2xRNORO7vxx%2BVwkMX9QHISP4T8D4uxSIRT33uLSig%2FwnW7QDvAahA0qmCV328gXNfGl5%2B2aIBv8JNEK&X-Amz-Signature=9d6faa6796d9ee3506030d95bfc7553b88b05e63bcad836f2beb02562f9a939d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBQL6M5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH3smEZxkH8ecIedX7uQKxs%2Bzts5FWpPhNsMmZWi2FGXAiBqaHKDosGdv3ZKYKnT7iN478piEprnLu6bdqvaCKK6BSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbsqRTXLqtRBA4rqKtwDlHJ7VepEgaoScpJEZ6%2BbhgAQxwiJ2o%2BCstYZgiQdRDGckqglH0jtf%2FcOQpOQkquRluUopAui04%2FLD1G0mwDKf0d4SlDCkhLFeKZA6WYSLslbpbvvCF5Nm83VSRoysDqqlTXlWuA%2F9HLotnNV4pP6X1TMrX2g0b43ZmJQeQ%2BIXYN3CGVUOs8N6ODnhmXnDoBckCo41NoTx7ZaL9ZqHzWQ9uKcP1y8seyX2XDLzSBW%2FCiOkKOdNarcun3BV0LUpSKApV4CJQignEa4939hf2fgj%2F%2B7lu7MlfvFJimGO6ElyEBZhu6QrdvI60OruLaPWH%2FJkhJvkLY9%2Bs5U%2FTDimd9oRJsllaf35T55NQFTHlOn8rQ9r0qN3hvHP97tDhFle7y7OrmSaUk7Fuo3dtFInWGXg%2FWV1iMR16cHQ8tK85I1Mh%2BicbjT%2F20FKAnWRrVnKF%2B6AzDrZ2rkyKC4vc7C%2Fo%2BbONT8mG%2FU1wXYyWpTMDCifz9QGoH7geg6JllJj4xM%2BIJFPE89nOSi6uB6M6Il%2FuJ9Jee%2FfP6f016t7A0KV%2FBKOESZdfkvfIglTNOrhpFh2%2BcfSJUOXdhzMLeJvGkHV0hzKPCio0INUpRqO5%2F3YGFSMWc7nXZ354%2BCULnOfK4ww9XmvwY6pgGLhige4tHJj4kgD%2Fj2GJC%2F3XNUevefxF%2FijYIStkgvpXQMp7%2B9c9J9GiwpTrfms4dPi0nVYJKFfI6xTndNG9zoHk58FTD0yNflu7pGMY2zOxBBezuM0TsJYcWkXgh0jYuaDbG7REbvefTIlm3trHz71vN00pLksMH7pxfzbxfybPWX8BuNepymbDsQpOZHKzFtYGFLlqC%2FTSbrmoGOhPnRZpJutVhp&X-Amz-Signature=60fb500553aec2f8746c54b7427fa263ecddbafdcb1cbf1b5259e714513c5d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
