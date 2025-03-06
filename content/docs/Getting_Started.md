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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2T6QNQ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7%2FehSHgRZkHslLwJJQIqj22Mq11mkSmU44Hvbh8tHgIgViCwbgSEz4ZmwZV%2FFXfkbZfOPT94Ys1%2Bhyq3JtC3ZgYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBN4tzr7%2B2Os1h8kVyrcAwUDAXc1zNF7r6i5KDtRILiiVvvkr8nGPpPJj1y%2Fw0m1%2F%2B6BXsCDk%2BUH5yuz%2BBSBD13QUC32lToiPTJwfvV5lQ27c0aCWkLa69OLdr08dheaJc1Kt4DId9i96WlmJ2dDgE7iBhN0U5jLantH6vGY3GbPqTCUKO0VVIk9c%2BbkxEJUmsRQUsfnn5KN9lEkHJHYoLvb13Eib2NUvKHO%2BoJRrCpdMmoUyyAH5SaL%2F5r4vlnpcqpBlft1GPdU9hDmH%2B780zvRDivXIHHrlKoTBoV6aAxqpkbYYG9PN2ihFANVJnS9H1r53VcmbbpzPSZALfw%2FR3mncvrrDHwawGHp8BHDpRj0cWzrTS%2FAk9K%2B10eNi8cK5uE4p3JmumD1w9rLbb3XGCSyO%2Fi6zO8s0XO70Ck5jx96w6tAUk550%2Fys%2BKJpIFM4P9kjlfZU9Ob%2BQORIN4ZzPJeXbfrTe5j0J15IEgqCkxtdvrfDNXRVvP1XRN6K3XtXZeti7Y7kSAyQaGBPwhWFqhEi0JbL61iTkNEmz2OwFwCVFlQlVRyTNIVGzZseyPxDbB7EL0KZ2JET18s7XYZ5%2FS3xV%2BitHN2V5R6pjqJlGuEwtRHPYLPihMvSWBcmjX8SbkSq2fBvu9pYVUk%2BMNiQp74GOqUB6TFl0qy0AO9r8UMrNIIHaKyUB2jiP3JSjzNlBKpUTLlMRLZ3VO%2F2VkU3R1tTQOkNtWG%2Fup0C79HsFo0NX4E8uSG1IcT9qS6twplMZqw58Mz4K99dXT2KmZC2IMP0ykqAFjZRZ9KWbAOIEKf7K%2BmNysmM5RRjrK8F6qNhaslus07HfSpi3mU62FvthV%2BO%2FvFkLqBduIA86vpxWYoGrvUxR%2Bwr6dUD&X-Amz-Signature=7ba018adc425b71292b3e9f80dba7cb48f73602d494b0711819c8928bb6b7720&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2T6QNQ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7%2FehSHgRZkHslLwJJQIqj22Mq11mkSmU44Hvbh8tHgIgViCwbgSEz4ZmwZV%2FFXfkbZfOPT94Ys1%2Bhyq3JtC3ZgYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBN4tzr7%2B2Os1h8kVyrcAwUDAXc1zNF7r6i5KDtRILiiVvvkr8nGPpPJj1y%2Fw0m1%2F%2B6BXsCDk%2BUH5yuz%2BBSBD13QUC32lToiPTJwfvV5lQ27c0aCWkLa69OLdr08dheaJc1Kt4DId9i96WlmJ2dDgE7iBhN0U5jLantH6vGY3GbPqTCUKO0VVIk9c%2BbkxEJUmsRQUsfnn5KN9lEkHJHYoLvb13Eib2NUvKHO%2BoJRrCpdMmoUyyAH5SaL%2F5r4vlnpcqpBlft1GPdU9hDmH%2B780zvRDivXIHHrlKoTBoV6aAxqpkbYYG9PN2ihFANVJnS9H1r53VcmbbpzPSZALfw%2FR3mncvrrDHwawGHp8BHDpRj0cWzrTS%2FAk9K%2B10eNi8cK5uE4p3JmumD1w9rLbb3XGCSyO%2Fi6zO8s0XO70Ck5jx96w6tAUk550%2Fys%2BKJpIFM4P9kjlfZU9Ob%2BQORIN4ZzPJeXbfrTe5j0J15IEgqCkxtdvrfDNXRVvP1XRN6K3XtXZeti7Y7kSAyQaGBPwhWFqhEi0JbL61iTkNEmz2OwFwCVFlQlVRyTNIVGzZseyPxDbB7EL0KZ2JET18s7XYZ5%2FS3xV%2BitHN2V5R6pjqJlGuEwtRHPYLPihMvSWBcmjX8SbkSq2fBvu9pYVUk%2BMNiQp74GOqUB6TFl0qy0AO9r8UMrNIIHaKyUB2jiP3JSjzNlBKpUTLlMRLZ3VO%2F2VkU3R1tTQOkNtWG%2Fup0C79HsFo0NX4E8uSG1IcT9qS6twplMZqw58Mz4K99dXT2KmZC2IMP0ykqAFjZRZ9KWbAOIEKf7K%2BmNysmM5RRjrK8F6qNhaslus07HfSpi3mU62FvthV%2BO%2FvFkLqBduIA86vpxWYoGrvUxR%2Bwr6dUD&X-Amz-Signature=f3bc37c4c62ced50f5accc12217ea86c9c050d666f632b0ed22371cbdd1080c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC32WY4E%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7c9MbFcg87c4Hobq%2FpzxTm8S7fKSCI0XaBsPd8svB3AiEA1zV4ehL9SBUhC3kkZz5jwsNiq2K4d3uBhJtQSoUjlIYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMgMLvh%2F%2BLU%2Fi2j1HircAy0QJukl%2BLWBuTqHkW1eKMFvEmuu3%2FJi%2BwzArfh3lV7psGO2APdOneWkVcdmq77od6KGvlfgEygnCflkkyM4LeV0dNazMBPY4iZi1eUDe01k88gYGZk%2BBZg8BX6emUhoNHNZpoEY65H2gx3iBhm117%2F9LYUF6h6AB4hWW4CjtGHNWDHQ5O3rV4XFmTW6nBgZGKFJ6fNDV4R4XuV0wmtTlFX7UV%2FyJkxeHTxVK9KadgcbwM5A9v7ihujhMguqiyO56iEznSGw9jX1OpYJk2bRAJQcely2D1d5LpdrXq1IFCsZr0QhcGA53ZeN8zAzpBJkNv5zswMeJ4dGwsdXOMOvSkZL7gIyTaVAN0VQs%2Fr%2FmnwCCyqvliuArs0MVyefxcshJINIm6FWJtzhm5F7ZOCDnGrI3eGzTrS1%2BNNEtLsR6R0P1Z7%2BW%2BzIPkH2suJm99BF2Zu4UWf4Iff5o51Oym%2FEBGDelwSRuvB7lhTnkeaLw3Mb2%2Fi8NdeZHVc8O4G0OthyuxA6z3Zevu2oGQLz%2BTwGiSbaiHzWQcWN8lkCEtMdoVWqHYMUyoQVJcGum2WFy112Pi3VW6AhUawn%2BdTTy3Lnkda%2FRDDzXlo7g2AJrO0oPYb7CyhJXz3xwOqO%2FSq%2BMLSQp74GOqUBPPl6qCnxg%2BE3Tp6xUPqbXSKFAePeQu5QL0YXs5RKcCFjXYcQ6qhKpOO88chc41fT82A5oDcOCMRaqSsqHKHR5gzyxz2JLYUA1E%2BqkauG1DGwnE0TVKsVN9mHGxdeIon%2FAbgwWI3LwRlO02sr66kFXJBAwsjPjtKqxuoUEkYYXb6RrTncY37DgfgGB8clq4WwG5srZUMDeTI%2Fh1j1lVIDwe%2BjpHm%2B&X-Amz-Signature=9d92c048f2900adc35e402d64b58f3e2481173c556b5ce9bcb7b9597438356ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSMQ6OX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBFCVh53cR387qDDI5ow0civtzGmz7gxC4Ynv0xsNI%2BAiAVUpZQvI8DWAko40TujqwzyJcTy7730DLTyi5oJP2pUCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMwMhv0uGdZ6JRBFrJKtwDngkzKwP%2B3lIs2DaOYzBKT4wBbh5g4175h6SaqMXo1tVOt7nsC%2BC833zoToNQS%2BIzSRCQ1EovG7f0BGzQTscTQ6AWElMbCbbEoI%2BfNwtWWNL6FQQ%2B5x4IXTYt7gup7MOfk8HB2BXO4pSHCoSEEHNtanaxHrlGIOPdk0RmsX313z1V4a8DlKxDwfeg%2B4ON7OOB3gFh0tCTSaBE3BQD9IZl7bWaBnvHQk8Jrw2exgCHbPqh%2FbDYFIYOfH8aYAGHHrKiCzhHwhX1Ol1W%2FbMAaRkCgsImasYoaeGnMk3u%2FrKqJmJ0iFYkma%2Bqq2da0OKCLvOuIkD2Rjd1Y8JnqPlkigc7eDCu0QjUAYW8z2%2Bl8z4Ma5fVljQk04wCqHBg1R35Mu2iB5P0Rli%2FChPjsZASyGhqWIn8MU%2BnPMwyDwnSVgyAzT9cw2nHMMqVv%2BcogRs0swmQGgitmf0CXAFp%2FkZGO9B6h3MiFxlIqdFl3Sk4envaOXtElrONiCtHt0N9vFjE24zQNbupH4g0FS1GAUQMbJLYGd9oDmP7PStvzHcP74L3fUHukHCay5%2F8TBveQNwQf7UoBxzyWMnXQKBogSe60lFidC%2FU%2BJ3JheLNP630MkZ1gYskyOqIUJaupxdsLYAw2JCnvgY6pgGb4uIe41WuQVwb64ocZgMeKVZQIt6nYG1NqI%2F4Bo%2BBJZKoQLfSB1YkIVzCeFnqxZsHPTTSHaa6YGJkjb12RXt5FAa7soSbpO3vN%2BuD6dWUbwTl1qeUqiKiOKMJUaSnz7ihqsVl%2B2vxxMyCdKJ8CRRbjLZsiCTWgqmTzbiteRyVg6d3nFKOpE5T5dlM02mi4%2FKYi0tuXkimljCiDtrX0U9ecc9Og4XO&X-Amz-Signature=fa41e65a6830459ad8f988dec579ec8f0daf7874bbd0666d05bda4f200e333ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2T6QNQ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7%2FehSHgRZkHslLwJJQIqj22Mq11mkSmU44Hvbh8tHgIgViCwbgSEz4ZmwZV%2FFXfkbZfOPT94Ys1%2Bhyq3JtC3ZgYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBN4tzr7%2B2Os1h8kVyrcAwUDAXc1zNF7r6i5KDtRILiiVvvkr8nGPpPJj1y%2Fw0m1%2F%2B6BXsCDk%2BUH5yuz%2BBSBD13QUC32lToiPTJwfvV5lQ27c0aCWkLa69OLdr08dheaJc1Kt4DId9i96WlmJ2dDgE7iBhN0U5jLantH6vGY3GbPqTCUKO0VVIk9c%2BbkxEJUmsRQUsfnn5KN9lEkHJHYoLvb13Eib2NUvKHO%2BoJRrCpdMmoUyyAH5SaL%2F5r4vlnpcqpBlft1GPdU9hDmH%2B780zvRDivXIHHrlKoTBoV6aAxqpkbYYG9PN2ihFANVJnS9H1r53VcmbbpzPSZALfw%2FR3mncvrrDHwawGHp8BHDpRj0cWzrTS%2FAk9K%2B10eNi8cK5uE4p3JmumD1w9rLbb3XGCSyO%2Fi6zO8s0XO70Ck5jx96w6tAUk550%2Fys%2BKJpIFM4P9kjlfZU9Ob%2BQORIN4ZzPJeXbfrTe5j0J15IEgqCkxtdvrfDNXRVvP1XRN6K3XtXZeti7Y7kSAyQaGBPwhWFqhEi0JbL61iTkNEmz2OwFwCVFlQlVRyTNIVGzZseyPxDbB7EL0KZ2JET18s7XYZ5%2FS3xV%2BitHN2V5R6pjqJlGuEwtRHPYLPihMvSWBcmjX8SbkSq2fBvu9pYVUk%2BMNiQp74GOqUB6TFl0qy0AO9r8UMrNIIHaKyUB2jiP3JSjzNlBKpUTLlMRLZ3VO%2F2VkU3R1tTQOkNtWG%2Fup0C79HsFo0NX4E8uSG1IcT9qS6twplMZqw58Mz4K99dXT2KmZC2IMP0ykqAFjZRZ9KWbAOIEKf7K%2BmNysmM5RRjrK8F6qNhaslus07HfSpi3mU62FvthV%2BO%2FvFkLqBduIA86vpxWYoGrvUxR%2Bwr6dUD&X-Amz-Signature=21731f080b4fa5c89d564e8f0138d3d9638911566d37cc2bb5ccd40292ffddea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
