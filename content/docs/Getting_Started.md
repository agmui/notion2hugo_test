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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4XDWBJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnNOk2zuXjFqUmoP7LRrukpbAASNQ4WXmXb9VoJchusAiEAos7ZNr60tzuwE%2FQrlpbJHOkbWBOC%2B4sIqXzent76uvwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD90UTDuodxEFp8O2ircA83d5o52yxVvhLuS1%2BqZp2093B6TtNasRsaBmmqkbInTVaExlaPsxTUe2aHYI0e1NSSXtwHZEqSYXugwUW%2B1wXyhG1CO5Gy%2BOGYxXsubmUSZZjDJvGcTVBpBi2ZOaNUOFpaUJdF52WMRW2%2B5yL2U2ZyUSHPnYouDWvozzaWL0s9z95SCrTkjZ4zQiCbNpaNCUvj293oYSnDhgzqpmfD%2FCR5m6cSJ%2BN6cYzQXfV72TWTi5EpcSKJXLSDEq2LK7Vi7VJJTNvECX46M%2F1mfkf88TD8y56BYBRw74d4vXm1Jjr1RXWzC445AnUJzLBT2tIxXej40kXOnVABqS1ci5%2F7sZ4uAKokaAOfIMyh8jLsGByY0NXwiR%2BQK3n7pNyKZsrxqYoOrp4PF%2F9EM6%2BiyIld4oIxUs2qgFGKqELPZpHsnzrgBwP0ZsZC526iQIl29P9jts59tjTc45nWDJskFOZPu1Kiz4f2RmqzkD2gJZZvkPsMvLWoXefJcs9ajxx8mhIr7LFNB00ND%2FjujE6ckeHJ5ol9%2FWgJoBQOO4Tzjz7mVAhbBUrfPp%2FNKxNpWC%2FpA5QShEbQAyNguIvJlRcTYAvRyoUfAs9N0xdHkJt%2BXvtrZU3tvnfB8NqEf%2FVDzxDZ5MJS0tsMGOqUBCWPymdi2J5RgnLY7aSUk7BmQGSR1pRjBKx380tDiEfN5vpP%2BCP%2BT1ZsWeq1WuqZJvo1ZTdzEI%2BUv%2FOIGjuTxf3Ea%2Bztehl0r5DqEFDo%2FTM%2BmDPtGQIcSEvJlXS5WZfV4desORE7hZAlzTIj8X7iQkYICre%2BmHzuB9wommBm1buQ48gHPG3RbAW%2FHgHvSIKZBk53AiCFVjUTtn4Pf0vN61Wxgoq8P&X-Amz-Signature=b40b0a1b111c1f05fee429e643f9d4647e9453f55357e05e7ab1143ee546ab0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4XDWBJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnNOk2zuXjFqUmoP7LRrukpbAASNQ4WXmXb9VoJchusAiEAos7ZNr60tzuwE%2FQrlpbJHOkbWBOC%2B4sIqXzent76uvwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD90UTDuodxEFp8O2ircA83d5o52yxVvhLuS1%2BqZp2093B6TtNasRsaBmmqkbInTVaExlaPsxTUe2aHYI0e1NSSXtwHZEqSYXugwUW%2B1wXyhG1CO5Gy%2BOGYxXsubmUSZZjDJvGcTVBpBi2ZOaNUOFpaUJdF52WMRW2%2B5yL2U2ZyUSHPnYouDWvozzaWL0s9z95SCrTkjZ4zQiCbNpaNCUvj293oYSnDhgzqpmfD%2FCR5m6cSJ%2BN6cYzQXfV72TWTi5EpcSKJXLSDEq2LK7Vi7VJJTNvECX46M%2F1mfkf88TD8y56BYBRw74d4vXm1Jjr1RXWzC445AnUJzLBT2tIxXej40kXOnVABqS1ci5%2F7sZ4uAKokaAOfIMyh8jLsGByY0NXwiR%2BQK3n7pNyKZsrxqYoOrp4PF%2F9EM6%2BiyIld4oIxUs2qgFGKqELPZpHsnzrgBwP0ZsZC526iQIl29P9jts59tjTc45nWDJskFOZPu1Kiz4f2RmqzkD2gJZZvkPsMvLWoXefJcs9ajxx8mhIr7LFNB00ND%2FjujE6ckeHJ5ol9%2FWgJoBQOO4Tzjz7mVAhbBUrfPp%2FNKxNpWC%2FpA5QShEbQAyNguIvJlRcTYAvRyoUfAs9N0xdHkJt%2BXvtrZU3tvnfB8NqEf%2FVDzxDZ5MJS0tsMGOqUBCWPymdi2J5RgnLY7aSUk7BmQGSR1pRjBKx380tDiEfN5vpP%2BCP%2BT1ZsWeq1WuqZJvo1ZTdzEI%2BUv%2FOIGjuTxf3Ea%2Bztehl0r5DqEFDo%2FTM%2BmDPtGQIcSEvJlXS5WZfV4desORE7hZAlzTIj8X7iQkYICre%2BmHzuB9wommBm1buQ48gHPG3RbAW%2FHgHvSIKZBk53AiCFVjUTtn4Pf0vN61Wxgoq8P&X-Amz-Signature=7e3e9afed915a0f918f4e41379c39ed8131abd2733e02525579b921fc306458b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4XDWBJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnNOk2zuXjFqUmoP7LRrukpbAASNQ4WXmXb9VoJchusAiEAos7ZNr60tzuwE%2FQrlpbJHOkbWBOC%2B4sIqXzent76uvwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD90UTDuodxEFp8O2ircA83d5o52yxVvhLuS1%2BqZp2093B6TtNasRsaBmmqkbInTVaExlaPsxTUe2aHYI0e1NSSXtwHZEqSYXugwUW%2B1wXyhG1CO5Gy%2BOGYxXsubmUSZZjDJvGcTVBpBi2ZOaNUOFpaUJdF52WMRW2%2B5yL2U2ZyUSHPnYouDWvozzaWL0s9z95SCrTkjZ4zQiCbNpaNCUvj293oYSnDhgzqpmfD%2FCR5m6cSJ%2BN6cYzQXfV72TWTi5EpcSKJXLSDEq2LK7Vi7VJJTNvECX46M%2F1mfkf88TD8y56BYBRw74d4vXm1Jjr1RXWzC445AnUJzLBT2tIxXej40kXOnVABqS1ci5%2F7sZ4uAKokaAOfIMyh8jLsGByY0NXwiR%2BQK3n7pNyKZsrxqYoOrp4PF%2F9EM6%2BiyIld4oIxUs2qgFGKqELPZpHsnzrgBwP0ZsZC526iQIl29P9jts59tjTc45nWDJskFOZPu1Kiz4f2RmqzkD2gJZZvkPsMvLWoXefJcs9ajxx8mhIr7LFNB00ND%2FjujE6ckeHJ5ol9%2FWgJoBQOO4Tzjz7mVAhbBUrfPp%2FNKxNpWC%2FpA5QShEbQAyNguIvJlRcTYAvRyoUfAs9N0xdHkJt%2BXvtrZU3tvnfB8NqEf%2FVDzxDZ5MJS0tsMGOqUBCWPymdi2J5RgnLY7aSUk7BmQGSR1pRjBKx380tDiEfN5vpP%2BCP%2BT1ZsWeq1WuqZJvo1ZTdzEI%2BUv%2FOIGjuTxf3Ea%2Bztehl0r5DqEFDo%2FTM%2BmDPtGQIcSEvJlXS5WZfV4desORE7hZAlzTIj8X7iQkYICre%2BmHzuB9wommBm1buQ48gHPG3RbAW%2FHgHvSIKZBk53AiCFVjUTtn4Pf0vN61Wxgoq8P&X-Amz-Signature=7743bb04179873978cb814ba782c4ff418b28c853e6c168a6b0de81ae5ed430a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJMBEMLD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdOtI2cWh6w212k0n118Tes24gyFc%2BS40X5kHpLJBV8wIgRJm9%2BNAuCBjZyFvLePFki4%2FzBru6ngJW59UDVbbfowAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKdVUXxUyvjhDzwkSrcA5v0dEcqP5wehZ6XzSO4jGTBAKAFv4h1iOnn1yxCIg43f6FVJMxp3uZdLyb%2F%2FLqraO3vlJfRKlDpqQj7OFmdGjPWj41pcZRg6CBhumCsxo9sF%2BSgak%2F2W62ssn7qBoMAA1ZtRIareQKxU5Mss12CXPbU7CpjAM5SiKMnNcFGWi%2FbGQO42htE%2FlrdVu4rF0lb%2FAUxEH7KsWW1tqcmtw5Jt0MqAanfT04hmq4IEnJicB6GogtWQh3Jzi7HatTy0s4TQAqD99TGRqKxR8mbUWv9gPWtjZkIEsLGJsKJdFjWx7jsMBAX%2Bm4Ea41HPj%2FagqEbFThuo%2Fc47R7SKcv6GOZXFwu3QvZHtblrPzDzUlpuekDeXHrG7tpUY86EwejW%2Bf%2BOHA2uH3GhpqTcdE%2FA693y85O2kCQJtaEEbHmgCuV1m4SUdPKEqsZclXEDGtICOQsiv7iJWN9RcAvZJBPN%2Fu7k6IWZwLw98a5r%2FD9DXEIck65%2B9%2B7WX1XZUmSNnE3SoND7fg50NzCDE%2FJzmMxKHUf3Pw5Ub67IL0GI1eMqVLFqMkQGIWl6FRxnMio9qgiWlpSyGgPX6iQf5Ovf8qx%2F%2FbS%2B8Y7CD8UgkyJavtV1QUE31xOS0hc%2B3Yj%2FZcdgcfBqMMvKt8MGOqUBWB4RUK08fPJVhd1t7%2FffyztaYQvCsfAOrtO4Yw3dgRPLn%2BhY3WuiCQKOr2RMw3NctLbq8OOnzAD9Q2sXjzNAYLhWZUeae5UNbAxMnjrdBk2B%2FKn3MqWfBtXuD4ej0JmEkAfi3n8teWUTt%2BszyqHCKWSjI3e21j12UbBgRscD4axpjUcxTZ%2BLMEuKtVg8ZzpClnI%2FCRh4I2%2BOaRnwuS6Pg9xEPzZH&X-Amz-Signature=1b8e57915f90cbf2ee1be26564ba9a124ed500b63215f50c276381178c545278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYAZYXWT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiueJniRXVAP8EXJI%2FcMrStYZb3RBKZjKtH8E%2Fs%2BaDUQIgMD5lvyFbDFZF64vy8Ii5nCHd9it4hx7HUAe3L0M%2BstcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEBKCwmJQsT49dBwyrcA8ITdni6axUMbeTw%2BCZzSzPx48aL4uBZUCvhQIz5hAM0kTYPMc%2FuwzI0FOKSx%2FPN5tWSWybQBWy%2FD5owLwOAvYGEgd5cT%2BQJKOEZENuCaZ%2FiB4OOfobd5UPah05MOMvltx1OVnE2yWpWB5t5rLEVlyJWLDG92lA2inUJggZt%2BCQpolnq%2FMGq8I56YwQ8lg%2Bf9afTaMDjtYLItn%2BgG1bxesDsuSQ4AdkDxccFyAXFASwavBwcbzL84LpSVSdZzFuGj%2FGxMNttE0TPUb0AH%2BLxpv8jbMctmBsvHk%2F1W96wkicgSZbm0R1SOrWpr2R%2FhPAeRT82hZKgU7ulW9E8ikDI8Qm0CciLvcgq8tf%2BKV6qJIfwTYOKEj6AMT4S1YWea7GwmcJ9EWxFt1Xc7g%2F0BYPnSibtyE3JjcyV1iZYF9RcvMWuutXC3l7YfZCCMIkxLUt7yrJyWw%2F5ThN8SKRjdFuUkIz9fc0NFDkOtDXYpiz4egM0oKuuwirIvBS3XAkQnXc2gbkka4bBzJRMMbTKBFwJDT9wfAaKgX4yqXmnGPJ79tVEM18oDBKgyNHMOjVSumJjLQkVLlhG1t2%2BKiP%2B5AZOHQCvsOwrOXpi3Uoi8FL5%2Fmul8MPN2ZdKQ8jeUrxHMLLKt8MGOqUBNIgX4t8JEcVvFqNaIMrDUpXfiJlGo54%2FWmwbP901izb7URcqh5pVkAl1jL4aQlxZpbaTj3OJnaYP9gIbQ8xDlbZp8pjN43kJCjyHdQK0%2B%2FoGh6IleFS3f%2FqhJzFZzmQWPIRfBkIW0db6F%2FZ3cSj%2FnNKr2jp6kl6o7Pd7aMQTNAb7j%2BYVoC6pEyynLs5jJvO6C3FUn9akXn1BQ1fpJLxTYbso76nm&X-Amz-Signature=5515b6d2e52ed283279cd46d43423c2c67c31da8340e04b382bc78e31d642ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4XDWBJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnNOk2zuXjFqUmoP7LRrukpbAASNQ4WXmXb9VoJchusAiEAos7ZNr60tzuwE%2FQrlpbJHOkbWBOC%2B4sIqXzent76uvwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD90UTDuodxEFp8O2ircA83d5o52yxVvhLuS1%2BqZp2093B6TtNasRsaBmmqkbInTVaExlaPsxTUe2aHYI0e1NSSXtwHZEqSYXugwUW%2B1wXyhG1CO5Gy%2BOGYxXsubmUSZZjDJvGcTVBpBi2ZOaNUOFpaUJdF52WMRW2%2B5yL2U2ZyUSHPnYouDWvozzaWL0s9z95SCrTkjZ4zQiCbNpaNCUvj293oYSnDhgzqpmfD%2FCR5m6cSJ%2BN6cYzQXfV72TWTi5EpcSKJXLSDEq2LK7Vi7VJJTNvECX46M%2F1mfkf88TD8y56BYBRw74d4vXm1Jjr1RXWzC445AnUJzLBT2tIxXej40kXOnVABqS1ci5%2F7sZ4uAKokaAOfIMyh8jLsGByY0NXwiR%2BQK3n7pNyKZsrxqYoOrp4PF%2F9EM6%2BiyIld4oIxUs2qgFGKqELPZpHsnzrgBwP0ZsZC526iQIl29P9jts59tjTc45nWDJskFOZPu1Kiz4f2RmqzkD2gJZZvkPsMvLWoXefJcs9ajxx8mhIr7LFNB00ND%2FjujE6ckeHJ5ol9%2FWgJoBQOO4Tzjz7mVAhbBUrfPp%2FNKxNpWC%2FpA5QShEbQAyNguIvJlRcTYAvRyoUfAs9N0xdHkJt%2BXvtrZU3tvnfB8NqEf%2FVDzxDZ5MJS0tsMGOqUBCWPymdi2J5RgnLY7aSUk7BmQGSR1pRjBKx380tDiEfN5vpP%2BCP%2BT1ZsWeq1WuqZJvo1ZTdzEI%2BUv%2FOIGjuTxf3Ea%2Bztehl0r5DqEFDo%2FTM%2BmDPtGQIcSEvJlXS5WZfV4desORE7hZAlzTIj8X7iQkYICre%2BmHzuB9wommBm1buQ48gHPG3RbAW%2FHgHvSIKZBk53AiCFVjUTtn4Pf0vN61Wxgoq8P&X-Amz-Signature=f9c190afdbfbda1baa9b62a7a6c241d0e353d001a48aa68a50e9831871742cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
