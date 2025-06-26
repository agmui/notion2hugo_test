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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BHIH7Z%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCdN9V7%2F5hiFBbBxeOft%2FOB3zPUvHLxfrltdOHBApjEEwIhAJ6CHis%2FyK7CW0QlT1eAu56nWa4OcqkdklXK6wssLwAoKv8DCFUQABoMNjM3NDIzMTgzODA1IgxnCV9im6cbS2VuudYq3ANpgOemIhs95gsmChmcz2HY4llW117lGjsFQIqr0pmJjFvDBHEFZZknx8EwyQIw78FHU7jAH1kmmTJMbl6kjnFirtnqcET7LZAlrPIYOsRyzSzTxw2z4n3jD4fmkPH%2B6pagxJlhI%2BuZQdgu9CzMVu8rXCuBWGoIhg6aOBCY%2BKsoJdvOJYsD3s8fa21WF2PFAVvWYk8x0%2FUn7Xn4Rkx2WBcFefmxvFjMJtg24cf6JHCQ1%2F05CRjdY1ZCYsaGqvQLJ79LvB0TvMFEKfeI%2B37FKXMLtys33hW5EnrxP%2B67ANWJtZHSeNtAyJ6qI0z%2FgiEIxbMcwk1EMZC%2FcfbBr8mcBXG3K15ShQIjl0uN00NMz%2FVnIN%2FyENkwbJKy8A9fCxKZyJYTk2HyTHYXCB97lke%2F8oEOXsWYkdJmNir44Jb%2FHAhFUcNFJneApgHcgNDX742aMp9F%2FizccKX%2B1aBhG6W4QYeoHUK7%2B9ufJVuEh4Td9e6j8yf5yimvB1xOMoWrlypEe%2Fmw%2Fax3IPjeAWkQ83eMUy2UphDUvlTNT8C9dhyFfUIsPVU0kjVWwnKgbrwPIeFbIfZbiDXO3yG97pLmx7qzj0L5F%2FEfLvCMVpwav53%2BH2Oj8shpxp7GIDT3FFsVDjCtifPCBjqkAeMlW8Pjhp15oKGMMUpCRTt0whTdF8%2F%2BXB1V13Ce9C%2F9Lchd7wsfI1x0ZaDi%2Bv6yrVqPnLsyFKJ6uoCCwfnhrwsut%2FRVt%2BP8B1UIJ9MEBYElnjlohAwPcrDm9h9m6jHSWEOiHZkl8X7I0mA41OvWbunj5EZqSNEWyXd2FSWsV19Lrn9BCY65ykRSpgpMgylqI6i9Lig2sfAyzrJBdZzq%2FQVyp6lQ&X-Amz-Signature=fb223ccee03ea2778012921978a2ebbd11302160eee7c0e800c6fdbc3dcd7fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BHIH7Z%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCdN9V7%2F5hiFBbBxeOft%2FOB3zPUvHLxfrltdOHBApjEEwIhAJ6CHis%2FyK7CW0QlT1eAu56nWa4OcqkdklXK6wssLwAoKv8DCFUQABoMNjM3NDIzMTgzODA1IgxnCV9im6cbS2VuudYq3ANpgOemIhs95gsmChmcz2HY4llW117lGjsFQIqr0pmJjFvDBHEFZZknx8EwyQIw78FHU7jAH1kmmTJMbl6kjnFirtnqcET7LZAlrPIYOsRyzSzTxw2z4n3jD4fmkPH%2B6pagxJlhI%2BuZQdgu9CzMVu8rXCuBWGoIhg6aOBCY%2BKsoJdvOJYsD3s8fa21WF2PFAVvWYk8x0%2FUn7Xn4Rkx2WBcFefmxvFjMJtg24cf6JHCQ1%2F05CRjdY1ZCYsaGqvQLJ79LvB0TvMFEKfeI%2B37FKXMLtys33hW5EnrxP%2B67ANWJtZHSeNtAyJ6qI0z%2FgiEIxbMcwk1EMZC%2FcfbBr8mcBXG3K15ShQIjl0uN00NMz%2FVnIN%2FyENkwbJKy8A9fCxKZyJYTk2HyTHYXCB97lke%2F8oEOXsWYkdJmNir44Jb%2FHAhFUcNFJneApgHcgNDX742aMp9F%2FizccKX%2B1aBhG6W4QYeoHUK7%2B9ufJVuEh4Td9e6j8yf5yimvB1xOMoWrlypEe%2Fmw%2Fax3IPjeAWkQ83eMUy2UphDUvlTNT8C9dhyFfUIsPVU0kjVWwnKgbrwPIeFbIfZbiDXO3yG97pLmx7qzj0L5F%2FEfLvCMVpwav53%2BH2Oj8shpxp7GIDT3FFsVDjCtifPCBjqkAeMlW8Pjhp15oKGMMUpCRTt0whTdF8%2F%2BXB1V13Ce9C%2F9Lchd7wsfI1x0ZaDi%2Bv6yrVqPnLsyFKJ6uoCCwfnhrwsut%2FRVt%2BP8B1UIJ9MEBYElnjlohAwPcrDm9h9m6jHSWEOiHZkl8X7I0mA41OvWbunj5EZqSNEWyXd2FSWsV19Lrn9BCY65ykRSpgpMgylqI6i9Lig2sfAyzrJBdZzq%2FQVyp6lQ&X-Amz-Signature=e292760eef8a6b97f7f6faf05c7fb4900baa38553d3291c76e5e4a32c998780d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BHIH7Z%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCdN9V7%2F5hiFBbBxeOft%2FOB3zPUvHLxfrltdOHBApjEEwIhAJ6CHis%2FyK7CW0QlT1eAu56nWa4OcqkdklXK6wssLwAoKv8DCFUQABoMNjM3NDIzMTgzODA1IgxnCV9im6cbS2VuudYq3ANpgOemIhs95gsmChmcz2HY4llW117lGjsFQIqr0pmJjFvDBHEFZZknx8EwyQIw78FHU7jAH1kmmTJMbl6kjnFirtnqcET7LZAlrPIYOsRyzSzTxw2z4n3jD4fmkPH%2B6pagxJlhI%2BuZQdgu9CzMVu8rXCuBWGoIhg6aOBCY%2BKsoJdvOJYsD3s8fa21WF2PFAVvWYk8x0%2FUn7Xn4Rkx2WBcFefmxvFjMJtg24cf6JHCQ1%2F05CRjdY1ZCYsaGqvQLJ79LvB0TvMFEKfeI%2B37FKXMLtys33hW5EnrxP%2B67ANWJtZHSeNtAyJ6qI0z%2FgiEIxbMcwk1EMZC%2FcfbBr8mcBXG3K15ShQIjl0uN00NMz%2FVnIN%2FyENkwbJKy8A9fCxKZyJYTk2HyTHYXCB97lke%2F8oEOXsWYkdJmNir44Jb%2FHAhFUcNFJneApgHcgNDX742aMp9F%2FizccKX%2B1aBhG6W4QYeoHUK7%2B9ufJVuEh4Td9e6j8yf5yimvB1xOMoWrlypEe%2Fmw%2Fax3IPjeAWkQ83eMUy2UphDUvlTNT8C9dhyFfUIsPVU0kjVWwnKgbrwPIeFbIfZbiDXO3yG97pLmx7qzj0L5F%2FEfLvCMVpwav53%2BH2Oj8shpxp7GIDT3FFsVDjCtifPCBjqkAeMlW8Pjhp15oKGMMUpCRTt0whTdF8%2F%2BXB1V13Ce9C%2F9Lchd7wsfI1x0ZaDi%2Bv6yrVqPnLsyFKJ6uoCCwfnhrwsut%2FRVt%2BP8B1UIJ9MEBYElnjlohAwPcrDm9h9m6jHSWEOiHZkl8X7I0mA41OvWbunj5EZqSNEWyXd2FSWsV19Lrn9BCY65ykRSpgpMgylqI6i9Lig2sfAyzrJBdZzq%2FQVyp6lQ&X-Amz-Signature=80d7d78a055034f0c3e21801032f16e390aa41b62c0d6e5c8a8bb021f8c68997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUBUVKL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHV1nOjnzjBVN%2FCKBN%2FxSJLUYueq7ESOlxbA0cy%2FHA4pAiEAltjA2JIj%2BpkEl91nX8JY%2BwhQ%2FTNFR6eA2WwPpvgbmRoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDzYXw5vXFGhwrpvZSrcAxN7PZfjyWmJI7qWS7pakfYBVnIz91f%2BfQPZcqgWn8YVUA6D8f93Hfp4TdewCyRJ9Mws8PLuDcDbXF4JTQBLEYQx9PwE7tYQb0Pegs2NwuSmVslHyMLcIWaVjo1IdpPJUJLe%2FgUqi3BOZnYlnPWYKBHgKn8LmqReVKYP9CcdSu178T6jSCPCS4PB4V0sbbcbfUM4vSW%2FzJz1w2rREHdskjGDzHIeA4aIf86bbhcZIibTz6KLGaFzj5OG9mQYLMRmIt8WIiZNOngPaFrToW25BmqbLY4amqREICnod%2FWdGSuVl0hzPEmyL1iGW4fevgpNtG8MQNPjTl%2Fe9Le0ARAQNJkXYXjhirIoadsaD%2BxKpW6xYnfAIikyOCYKdDAU3hBeQumEUnsGmcA4AQWYGT0YVczGrd3srn%2F%2B0tVc%2BvZw8OXr1dxYKlj9m%2F8m44Pyy96pIwtwwwI3Il%2BOfuCT%2B3zQvtWVMH%2Fv0aIV1gLcebowk6nm0wl6EYh6VRVSEfMZIadtq4vTZJfs3iIi8dYJ77YcvuWmdbmqtwgRDu8uffxFh4hCWcm9Jkr4AC5uLautWCYDkIAswqNY7s98NIIlUKRzXgB2fZPl%2BbqYHZdMWt8sMsPT7gjgP2QsniUBetlnMNuI88IGOqUB4LW0yjWTMoyEzpSzoan2AEOLkr6hPw98yWpfUe0E1lyEpyNbJnO6JOTwD1KtilppNpBmPQugcFzvetUZdS48H9XG8hqrugGinQZx38i0Ue4NI4GDlj6m5KoYcdgO9DhNGJdn%2B5%2BJOWBcOoI971RWSc%2BOCdzEXdu%2F4g6ZNI2sSPY66NGlyIWdn6ss6Lx5V2jiYHZINx6o5c%2BW4aiHcWXsTImULxlr&X-Amz-Signature=98f206f4fb5b5c8fa33768b2d2eb31aeefe4c59e0709780c792ea0ae633c0d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT7KXKOM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBJGaMYz7%2F3M064Zyt3ZJc5kqIbOOrXUFjA7pRwV4ZRuAiBlvAkjRps9TIPUmEFznWhmpl7pltKzYC%2BKGWvnhSQD0yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMke730AsEgEQwtB1TKtwD6SPQvhhm9VQ%2BMx%2B%2FKVV664tkPnVJx2nROniFdCnq2%2FJf9n8Spj6pekGOovkW%2FvZTwnhrNi7dYXWKMwYCsxtqPKjlECpP4RFEiZxE7oAJJ4Wso0d3YWvSP%2F28APobBxwgpcVQWuDBaae9oemLQ1Px7rsFnZbMmTcqw7YrCogD8o8Dr8zIoFcGRLK1Ch5G1Wt2SP1I1rCSZ5QkxviMyk8vp%2F1JZ2P8sjI8B5FdQa%2BeSrZbnBZTSc1m34b9AwpYdfCinzgif0dfOol9UubPeTUIAfzWJ1%2BS%2B9I1LLP1pNALE9MNzZ2jOrh0AIguH4Pven7TEaVdI1D6I2oF65KlbVf%2FBXQdJEs%2Fu%2Bq9Cjx9sYEsnwTPu%2BfHj3YZw5SZiUFoUZEIbKGI44uoqoJbsI3oDlYFmEhQic9dKLZZMWiqBL9qgJE8%2FDOByPM760Io3YXNCHnW%2FvPgM7fdPx8kaefNqCUPsUKCOUtkUmHnuYkBriyHoDL8wx6jI%2B11%2FLcz4ax52xyYWKz5Z%2FLCv7hLNXeR80Yqt73YZTiRXKG7EKB7ezifrWh80mUT6ZLqyGteqLb9v4gQrajrtkvYkyvPn7OiVR%2FW3WH9f1TtOIiqCLrxR4MRJ7QXzEIXznZDXwAhWksw8onzwgY6pgGs1TwhVeTq8Bp2CVWWZesCVoawVrVni03iFZUWtmIRLWJmYBz%2Fi36KZVifQdMtHafbXzXafAx%2FTLhz3LVo1R%2FZ%2FVa5LucqBs340umWsmBuX1IGNT2No%2F3b4q%2BiGrN70hkvqZqHOvzXSAvm4ciOVg0htCylnNelhdPjx9k0irZ1qrd4r%2BuQ9cI4tST64c33xeKndJOlFcoYELN%2Fm37QPoNpFI8EG0yJ&X-Amz-Signature=a78790a7decf3d37139517110a138fadb00a2342494876b43d7ede6a2e19de50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BHIH7Z%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCdN9V7%2F5hiFBbBxeOft%2FOB3zPUvHLxfrltdOHBApjEEwIhAJ6CHis%2FyK7CW0QlT1eAu56nWa4OcqkdklXK6wssLwAoKv8DCFUQABoMNjM3NDIzMTgzODA1IgxnCV9im6cbS2VuudYq3ANpgOemIhs95gsmChmcz2HY4llW117lGjsFQIqr0pmJjFvDBHEFZZknx8EwyQIw78FHU7jAH1kmmTJMbl6kjnFirtnqcET7LZAlrPIYOsRyzSzTxw2z4n3jD4fmkPH%2B6pagxJlhI%2BuZQdgu9CzMVu8rXCuBWGoIhg6aOBCY%2BKsoJdvOJYsD3s8fa21WF2PFAVvWYk8x0%2FUn7Xn4Rkx2WBcFefmxvFjMJtg24cf6JHCQ1%2F05CRjdY1ZCYsaGqvQLJ79LvB0TvMFEKfeI%2B37FKXMLtys33hW5EnrxP%2B67ANWJtZHSeNtAyJ6qI0z%2FgiEIxbMcwk1EMZC%2FcfbBr8mcBXG3K15ShQIjl0uN00NMz%2FVnIN%2FyENkwbJKy8A9fCxKZyJYTk2HyTHYXCB97lke%2F8oEOXsWYkdJmNir44Jb%2FHAhFUcNFJneApgHcgNDX742aMp9F%2FizccKX%2B1aBhG6W4QYeoHUK7%2B9ufJVuEh4Td9e6j8yf5yimvB1xOMoWrlypEe%2Fmw%2Fax3IPjeAWkQ83eMUy2UphDUvlTNT8C9dhyFfUIsPVU0kjVWwnKgbrwPIeFbIfZbiDXO3yG97pLmx7qzj0L5F%2FEfLvCMVpwav53%2BH2Oj8shpxp7GIDT3FFsVDjCtifPCBjqkAeMlW8Pjhp15oKGMMUpCRTt0whTdF8%2F%2BXB1V13Ce9C%2F9Lchd7wsfI1x0ZaDi%2Bv6yrVqPnLsyFKJ6uoCCwfnhrwsut%2FRVt%2BP8B1UIJ9MEBYElnjlohAwPcrDm9h9m6jHSWEOiHZkl8X7I0mA41OvWbunj5EZqSNEWyXd2FSWsV19Lrn9BCY65ykRSpgpMgylqI6i9Lig2sfAyzrJBdZzq%2FQVyp6lQ&X-Amz-Signature=695dbb30c4d5de3203c86a219c3037a144c006d6927a6c9e2b0e54a34f56de3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
