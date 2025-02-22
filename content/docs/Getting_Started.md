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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTN57ZS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGM4Zb8%2B%2BT%2FOo1YauIeT3WBXBSCF7Wly4yqAY%2BGMndzAiEAggn%2BrW8Lb2zPVQQdAYbYGdJZJd3ms%2BUr0IuyPwIYnDgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbunXwfzNfLnuRtLSrcA9sshyAMGgHRzQyHn%2Fen%2FgNqvkkJFj3EH89RcyGtwbDMDbtm7OkrnKv6gNf6QiBGfrxG0%2FSa22Qj%2FvhYN260jsInxeDsAZ88HAKBbDv0ADeRBkt4B1x1Cly8bejZwEG2DuIv6fw5QvZqck64YvtD73blW0dbWHMOLxxblvcG4AgDaFtBIDSH0nWYWKcToUdmWatkC%2BiYK3M8IC%2FW1vezBi8ElF54ajafpKAxrwSckzAjfcyJYPevB1SDUSPSt6pUWI0oql2JZYqlyyLdtVOR5Dl9vSUsHHyWJNfqu5TzcyiEorbQTdnp%2BQuE8UB2d9RjCWcyYmsX9Rj6gNQ%2BSSpFMxqFKNnGiWqji9x8%2Fd5T3kcwt%2Fw%2BuekkIxefh39WCU0h5VS0SqFi2o7cg0Drzv4XyaCOd2Oia4K2MJY7fYsAo%2BT9fC57%2FXWRmI0DecseV1ivi2v58FHC%2BJGoyEZM8DuA176FwTAJy5TRX%2BFosXn5WeA4SVmBoJMf2JqB4GfmCfEOem84MEesJE29eZJaWHhhwoO216Ltmg0WG2tC0HdFZj9W8bXNcwJ3MZwDKkrQ5YZpTdGuIJVBhP%2BUxMHVguQCB18G%2FlGjVE5LByMnYOYtBeDkRvVl1Aixwt8ureyQMK7I5b0GOqUB1UCMaXtGMJdP7Ai5OPUlrXI6N0FdAVXosnwLcdFKjsnjiXVLQ3vjicxIhB6ynKj5D3VT%2B4dx3JSmuH%2FCmwT%2BM7bSGwvO7dXZnU19SkcVXwAorQqkX7qw5Jwth7Yssp9yffgbnpb%2FOSjo8yp9bCDRnBaZ8cESJHPWbqUAJaBvOh54jhEjT3VryIFSfIMPz6z6epwppDy2q1xq22r4H9K6tm7cgn0J&X-Amz-Signature=6272bbac9615fcdf2b293de86a7772baed3e2df8add1bfe90e3c821a8cf4f18a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTN57ZS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGM4Zb8%2B%2BT%2FOo1YauIeT3WBXBSCF7Wly4yqAY%2BGMndzAiEAggn%2BrW8Lb2zPVQQdAYbYGdJZJd3ms%2BUr0IuyPwIYnDgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbunXwfzNfLnuRtLSrcA9sshyAMGgHRzQyHn%2Fen%2FgNqvkkJFj3EH89RcyGtwbDMDbtm7OkrnKv6gNf6QiBGfrxG0%2FSa22Qj%2FvhYN260jsInxeDsAZ88HAKBbDv0ADeRBkt4B1x1Cly8bejZwEG2DuIv6fw5QvZqck64YvtD73blW0dbWHMOLxxblvcG4AgDaFtBIDSH0nWYWKcToUdmWatkC%2BiYK3M8IC%2FW1vezBi8ElF54ajafpKAxrwSckzAjfcyJYPevB1SDUSPSt6pUWI0oql2JZYqlyyLdtVOR5Dl9vSUsHHyWJNfqu5TzcyiEorbQTdnp%2BQuE8UB2d9RjCWcyYmsX9Rj6gNQ%2BSSpFMxqFKNnGiWqji9x8%2Fd5T3kcwt%2Fw%2BuekkIxefh39WCU0h5VS0SqFi2o7cg0Drzv4XyaCOd2Oia4K2MJY7fYsAo%2BT9fC57%2FXWRmI0DecseV1ivi2v58FHC%2BJGoyEZM8DuA176FwTAJy5TRX%2BFosXn5WeA4SVmBoJMf2JqB4GfmCfEOem84MEesJE29eZJaWHhhwoO216Ltmg0WG2tC0HdFZj9W8bXNcwJ3MZwDKkrQ5YZpTdGuIJVBhP%2BUxMHVguQCB18G%2FlGjVE5LByMnYOYtBeDkRvVl1Aixwt8ureyQMK7I5b0GOqUB1UCMaXtGMJdP7Ai5OPUlrXI6N0FdAVXosnwLcdFKjsnjiXVLQ3vjicxIhB6ynKj5D3VT%2B4dx3JSmuH%2FCmwT%2BM7bSGwvO7dXZnU19SkcVXwAorQqkX7qw5Jwth7Yssp9yffgbnpb%2FOSjo8yp9bCDRnBaZ8cESJHPWbqUAJaBvOh54jhEjT3VryIFSfIMPz6z6epwppDy2q1xq22r4H9K6tm7cgn0J&X-Amz-Signature=4992f2b0cdbd66828f862afd5398dda87bbbc62baa788f1d0c242bf40e45c401&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DSPA7FJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B4pFLBJnf4ytWP899Neghf7mGK3msLF1eswE1WG0YFAiEAsvxdjSb6vlCvirxQVWDkFy2Ap%2BUcaFwF%2BHdyrHfL77YqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0J14ffBm%2FwlawciyrcA%2FdNDsbyd4BO84QMkZIz%2FeIe4fS2G7H8XZFad2woRyyYHyE8XCW3eUFNmmAmyonRVsoK5Lmv%2B%2FUjL0w3ALNpQea57ZaFXnDlpPEE9gd4DGos9lLWOHRloLl%2Fnyihl0iaGGntv7XJiIBnKSBm0n5qy9SpOd52NdJniOGEYjxorMoRL2G%2BqRM937DW3h2KzheB6PAe%2BOsv5iRMszETuX9MHsriQTLBm5VQ6XD0c4X3IgVeph6VXkRQ0QmtfklzyMbSXr1TUoSz%2FJ%2FETlUD9O3MM6mua3Zvl8qqMCW%2B90G9Koxoii19st8RjiRiM8v8sK4sivXKkqTZ2b9f7boke6zxRI43Yb6awx9H%2FIkYPsT4pUQp5bfDQGE1Pm08FG33%2FwRRwQ0iTxKEVn8kJq8N6Sl%2FzhwN0Ne8FH2ONcEvoGfmDvQUiTgQ4%2F2hRBB9OlZVO0KrByCF1Sl7uZ4Y8Ooa2o2KyOxcAejQtNF33cTPq1SL1ZkI%2Fj%2Bq43VuFHb%2BKy21jd7cM77LuQMF5Ls21yhd9DzJbVHtJ4FFJmyD0ZfnQsiswlCuu9wQ0VjgfTtj%2BQFOv%2Br4wWlJhwPa5RNq%2FQRIwZ9%2BveDwIFqLGBs157lPV8W3mO6fFN%2FAON8REDMW4C0iMIfI5b0GOqUB%2BWrvSjGPVXOTj9t0O3U7uneIH2YpLmZMEuzTlETew37fcQ0tZk9865gy1rOwocYtTOluNweWtYWephjoBfdFnghsnS%2BMjbiUi9%2FvnTaoz0sZLJWoMl3DNlGmSDInNrJk9F9K5CqULeQxzsuBkGVqtL0PR6DkASvRlTPo0LCXD2kF0rN%2F6lfg4%2B7v5azNUwTDLZSoeaJX3q%2FH4mJFItFR0F4jefOX&X-Amz-Signature=2bf4660e568628a0f0208753404c6ce0cc54641d59bfceee4d645ac7b495494b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RNZAQB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDCrwAq2%2BbSc7Nlb5%2BCKl1lBEQ17OWZIprQgQ6AgfFgIhAIdOf%2FgCv9U4Cq7%2F94CuTwXTnXYKLUG%2FD%2Bi9%2FU1hG1xkKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlxSxvRmf3w0pfwdkq3AMlm8%2BGWrdhv0ktTFNxRWNu1Vo2jWPmcWSk3LJvKVSPis3NIqGQW%2FE8JW4IdHcF3kvmbn6Zg27SBguNRnHIMx%2F%2Fs1C%2F%2FM9jJrpFZdsKpkNSsrzfsEVgTgHv7pQ%2BCoP850UQJ04Jw%2F8QHW3hxqZHWaWrhMPk3vHxDsPnLVZbKrwek4rcnvHFUKtQC2z3yByauSxbfHG0EVU4gddp9igYJasbiGbWiSiLiOLy03YmW3ki99BA5rTNZwGpEBKP%2F9z9UhAwJUZtGRATvAGuBHsPAHyWX25IGU6LgkLJ1M2UYK3eYSP81%2B59XX%2FoDttndGnvzs45ngsv6PbPYGIs1aA2kwrPVCrEixL0EG0PHmZphwbhrU2UuztcEaHDl8vHX0qf0QPP8jpcyu2rRkNt6A5LMmA5%2FoN%2BcYTz4CskFeItQNTpEQmQZMa6WdbrCEmVBKPKJQ1ijWSv%2B5DV7ndb32OrjEQJvJHlxu5uOTEtEaI7MV1qNsuB9TazmTj1X%2FkJqAZVO9Rpfv5ssaWpC2c4PDnzWmE3bz3kB6ekr9%2FqkdGaJCxT38KfslYasPLptdcr%2BJ00lURN8CmgxZrCJDxIeV8EJ0QWp2apLwvmUNxNNWkGNCHk7IVNlDcDY2dC5UdTNDD7x%2BW9BjqkAUOyUQkboKO0%2FuHwhsh16F3%2FgUpTwoQA5%2B5oStOeHqPxh1CssMui3tY2v19qlSMmErfy97IKdhBrqZOit4eYh3gICf0paJxFudiXXd4yOntsmFecU9FdMwvQRWNMOFh70pQmA0VWsWoH91oSJa9ZAtblhGFwljvqFmkWJxHRPk2u6cprxS7zBFzbD2VTZ%2BCYOhNGl0u%2FgTUa%2Fheycq6I%2B1RU6XgD&X-Amz-Signature=d8ef38296c662c71b235672ca91432d0ecbbb53dda90178c8b14b7920f6b72f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTN57ZS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGM4Zb8%2B%2BT%2FOo1YauIeT3WBXBSCF7Wly4yqAY%2BGMndzAiEAggn%2BrW8Lb2zPVQQdAYbYGdJZJd3ms%2BUr0IuyPwIYnDgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbunXwfzNfLnuRtLSrcA9sshyAMGgHRzQyHn%2Fen%2FgNqvkkJFj3EH89RcyGtwbDMDbtm7OkrnKv6gNf6QiBGfrxG0%2FSa22Qj%2FvhYN260jsInxeDsAZ88HAKBbDv0ADeRBkt4B1x1Cly8bejZwEG2DuIv6fw5QvZqck64YvtD73blW0dbWHMOLxxblvcG4AgDaFtBIDSH0nWYWKcToUdmWatkC%2BiYK3M8IC%2FW1vezBi8ElF54ajafpKAxrwSckzAjfcyJYPevB1SDUSPSt6pUWI0oql2JZYqlyyLdtVOR5Dl9vSUsHHyWJNfqu5TzcyiEorbQTdnp%2BQuE8UB2d9RjCWcyYmsX9Rj6gNQ%2BSSpFMxqFKNnGiWqji9x8%2Fd5T3kcwt%2Fw%2BuekkIxefh39WCU0h5VS0SqFi2o7cg0Drzv4XyaCOd2Oia4K2MJY7fYsAo%2BT9fC57%2FXWRmI0DecseV1ivi2v58FHC%2BJGoyEZM8DuA176FwTAJy5TRX%2BFosXn5WeA4SVmBoJMf2JqB4GfmCfEOem84MEesJE29eZJaWHhhwoO216Ltmg0WG2tC0HdFZj9W8bXNcwJ3MZwDKkrQ5YZpTdGuIJVBhP%2BUxMHVguQCB18G%2FlGjVE5LByMnYOYtBeDkRvVl1Aixwt8ureyQMK7I5b0GOqUB1UCMaXtGMJdP7Ai5OPUlrXI6N0FdAVXosnwLcdFKjsnjiXVLQ3vjicxIhB6ynKj5D3VT%2B4dx3JSmuH%2FCmwT%2BM7bSGwvO7dXZnU19SkcVXwAorQqkX7qw5Jwth7Yssp9yffgbnpb%2FOSjo8yp9bCDRnBaZ8cESJHPWbqUAJaBvOh54jhEjT3VryIFSfIMPz6z6epwppDy2q1xq22r4H9K6tm7cgn0J&X-Amz-Signature=6fc373303d56b75e603fca7c406325c135a9b2f23e59f8d72260551938f79071&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
