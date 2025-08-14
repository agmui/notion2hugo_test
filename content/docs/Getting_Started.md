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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5NSCFB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA5qGeWtsNeJ7IgPAxaL0%2Bow6RC8IlRf3m0QHgIC7EkgIhAOMYmlU0xzoxDiD20ooOvMQpcB2UBN9vy0sw5vC7YHLOKv8DCEQQABoMNjM3NDIzMTgzODA1IgyVN6SpWbOY4V%2F%2FlmEq3ANdPIx09e8XD0xBokek1vUV%2BBeUwJFtaflYHwI7EDnwYI%2F2AqV7n6vPqzGcDXapRWSaokKctbg0tpH24T%2FZLOrRndwEmqdbR56eJNr54VdgrYQZprEwoqm7C68dHcgGadLqtKYxFcvakFA6kB8%2F%2FIUSPSA%2F3m6AuIYwabHQnpCghgj8H1t5oIcG7oHE5yv3dg7yb1pPkqnX%2Fd73lOQ2aFB0W6AS4OV1qccUP8dD%2Fvig8%2B2%2BGOspBjRtiIwrE%2BtM5PLIJ0cDan9H5e90GYHt5Ive9tSBTnYOXYV2NrZ2M3VvswML6hgK6VWz%2Fi0IaQRAb8bmQqokOyYuGv2pKt3%2B3rBKkMIT8kqeSAsTa91%2FRr2ZudwmZAaEZXQMEo%2BSMyzG%2FUtU5W4VN5TVDVdZOacq6fW97LjBMXKZVWJcCMhjpFV00MYuqBg1w%2Bc4gKEFbBLKhtu3JIXpgR0QR6a04oeAitbXJDCmph9DO0GRJgl812da5f%2FPTy8WFjNDAZRWjES%2FHuIh5UtJ8SazS66ox6NEL1bekfAYblZ9oHo66qseTSmzWo3iV0HmLV5NvEjeX1pW6jHVw%2Fbdyj2m3TjaFOE6fiIv6IbYaN5sOIPYCb4o7c9CFVozCofUc6UA2rtIHjD2hPfEBjqkAXhU3WFvETv91nPoxaOB8vjd%2FYfmEyXU9pnibxEHUjAjm8Odxz%2F2vZzw0t6%2Fhs0wh2QyxygbOpbgst%2FfDBR7OiVXdcNK6zUunGnyYMdsw%2FdDivWElaxomA2PF3zNUZ5lfOFTvXM4ge1pce%2BeHLvSsK5Y0GP6cBtgL4J5uZ7Wt5lUMpDQa7dGWF%2F%2FYQ8NMOdXgFUcgkuqf5Nh9E4rbnY6oNXe2Qbi&X-Amz-Signature=9e25b3795d4ea102415df1def61a7aac084969375568d2d2bffea71eae673ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5NSCFB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA5qGeWtsNeJ7IgPAxaL0%2Bow6RC8IlRf3m0QHgIC7EkgIhAOMYmlU0xzoxDiD20ooOvMQpcB2UBN9vy0sw5vC7YHLOKv8DCEQQABoMNjM3NDIzMTgzODA1IgyVN6SpWbOY4V%2F%2FlmEq3ANdPIx09e8XD0xBokek1vUV%2BBeUwJFtaflYHwI7EDnwYI%2F2AqV7n6vPqzGcDXapRWSaokKctbg0tpH24T%2FZLOrRndwEmqdbR56eJNr54VdgrYQZprEwoqm7C68dHcgGadLqtKYxFcvakFA6kB8%2F%2FIUSPSA%2F3m6AuIYwabHQnpCghgj8H1t5oIcG7oHE5yv3dg7yb1pPkqnX%2Fd73lOQ2aFB0W6AS4OV1qccUP8dD%2Fvig8%2B2%2BGOspBjRtiIwrE%2BtM5PLIJ0cDan9H5e90GYHt5Ive9tSBTnYOXYV2NrZ2M3VvswML6hgK6VWz%2Fi0IaQRAb8bmQqokOyYuGv2pKt3%2B3rBKkMIT8kqeSAsTa91%2FRr2ZudwmZAaEZXQMEo%2BSMyzG%2FUtU5W4VN5TVDVdZOacq6fW97LjBMXKZVWJcCMhjpFV00MYuqBg1w%2Bc4gKEFbBLKhtu3JIXpgR0QR6a04oeAitbXJDCmph9DO0GRJgl812da5f%2FPTy8WFjNDAZRWjES%2FHuIh5UtJ8SazS66ox6NEL1bekfAYblZ9oHo66qseTSmzWo3iV0HmLV5NvEjeX1pW6jHVw%2Fbdyj2m3TjaFOE6fiIv6IbYaN5sOIPYCb4o7c9CFVozCofUc6UA2rtIHjD2hPfEBjqkAXhU3WFvETv91nPoxaOB8vjd%2FYfmEyXU9pnibxEHUjAjm8Odxz%2F2vZzw0t6%2Fhs0wh2QyxygbOpbgst%2FfDBR7OiVXdcNK6zUunGnyYMdsw%2FdDivWElaxomA2PF3zNUZ5lfOFTvXM4ge1pce%2BeHLvSsK5Y0GP6cBtgL4J5uZ7Wt5lUMpDQa7dGWF%2F%2FYQ8NMOdXgFUcgkuqf5Nh9E4rbnY6oNXe2Qbi&X-Amz-Signature=7efbe5def99b297e1e7796c49009a1c06bdacf4cfbe2bd2bcd78d7d568d1e118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5NSCFB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA5qGeWtsNeJ7IgPAxaL0%2Bow6RC8IlRf3m0QHgIC7EkgIhAOMYmlU0xzoxDiD20ooOvMQpcB2UBN9vy0sw5vC7YHLOKv8DCEQQABoMNjM3NDIzMTgzODA1IgyVN6SpWbOY4V%2F%2FlmEq3ANdPIx09e8XD0xBokek1vUV%2BBeUwJFtaflYHwI7EDnwYI%2F2AqV7n6vPqzGcDXapRWSaokKctbg0tpH24T%2FZLOrRndwEmqdbR56eJNr54VdgrYQZprEwoqm7C68dHcgGadLqtKYxFcvakFA6kB8%2F%2FIUSPSA%2F3m6AuIYwabHQnpCghgj8H1t5oIcG7oHE5yv3dg7yb1pPkqnX%2Fd73lOQ2aFB0W6AS4OV1qccUP8dD%2Fvig8%2B2%2BGOspBjRtiIwrE%2BtM5PLIJ0cDan9H5e90GYHt5Ive9tSBTnYOXYV2NrZ2M3VvswML6hgK6VWz%2Fi0IaQRAb8bmQqokOyYuGv2pKt3%2B3rBKkMIT8kqeSAsTa91%2FRr2ZudwmZAaEZXQMEo%2BSMyzG%2FUtU5W4VN5TVDVdZOacq6fW97LjBMXKZVWJcCMhjpFV00MYuqBg1w%2Bc4gKEFbBLKhtu3JIXpgR0QR6a04oeAitbXJDCmph9DO0GRJgl812da5f%2FPTy8WFjNDAZRWjES%2FHuIh5UtJ8SazS66ox6NEL1bekfAYblZ9oHo66qseTSmzWo3iV0HmLV5NvEjeX1pW6jHVw%2Fbdyj2m3TjaFOE6fiIv6IbYaN5sOIPYCb4o7c9CFVozCofUc6UA2rtIHjD2hPfEBjqkAXhU3WFvETv91nPoxaOB8vjd%2FYfmEyXU9pnibxEHUjAjm8Odxz%2F2vZzw0t6%2Fhs0wh2QyxygbOpbgst%2FfDBR7OiVXdcNK6zUunGnyYMdsw%2FdDivWElaxomA2PF3zNUZ5lfOFTvXM4ge1pce%2BeHLvSsK5Y0GP6cBtgL4J5uZ7Wt5lUMpDQa7dGWF%2F%2FYQ8NMOdXgFUcgkuqf5Nh9E4rbnY6oNXe2Qbi&X-Amz-Signature=4708d45db0be268e7d21334918128e63d255655c26669f965dad0f01b38922dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644LKTO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi6tNPgQnTM%2F4XnIgNoDDwAlXno6lorwF84WS251K3YAiEA%2BFGZmKk7tHrkFrKv3l4qlrsZLovKWW%2B4RAz4CP8CCKUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGaV1Vk28E7820BF5SrcAzoDlY%2BbeZBYtIkEi8qSnZPQ1abpUIf527hYrxIYi7a8VHMEFLTEsioZ3PvTOmr%2B2wIFBMEo0vVM4aYr%2FPH6P%2BWmPyyKTPcSX0Djlgcnpj%2FSGMkfHhuD65ckifB89Rs%2FPu%2FhDJXr82BFLUAA8uGZIaMVBYeSh6Ft8hJZ8tEtpQ2cPN5oFWOsvZvgRDvswIjJvj9C4syROj%2BIAlQg4vJlWfdk9Ov%2FZc9L5RF9BUJzketQVH9OuKxyNSnWdYI%2Bp%2BG%2F7Nq7kdoHWDJRUhU5zPH5xfRnlKn1Ii2Kq3vTrFPnmw9f9e2xELlXW89NI44EvKXJiypsQ%2FwA5S%2BFZJZUEWSWD4tvgHTakUWWzQ2xSDO2kQqcMxg%2F3%2F765F%2BRKDl%2FZgbFpkb8Q8CE%2B3XlWvJ4B7F5KqtXQ4BVgL7Pt4F%2B1HWX566PYbIv4%2FM52kXbp3vFPi2KThVwR3DtUKD6HlMHtthPlG6YC8zfgwtVnSj3Js%2BIykkF7X2Z5aOez%2F4zYiDzOSo9wXltMxprJ9e2gqhY9RMhuYqZA7pkIfgE7pEo%2B9dcvmMqTHl0gu2Ls4mZHkbrebsNagFT3%2Fq9822Sp8QsC84Toiz2NBpGiE1PauZSOSHvcsCE1JfFfR4qhbvCg0qIMPaE98QGOqUBKVKHDzDCtGQLn0C8nH4TX6MtOdthtlsjnOU%2B2dUxT1OJgfraZsS9TcCO0E56cwPTR1qsKkxI1%2BYVoatdwPyQgLVu6yf16kGuPVTV7FEshr7g19iFm1CLcgwtp16Q1d51sVK9IjCOeyCWxSWUZt%2FtDUocUwtWwfyUtItOVUrcV9Q9jtOvWpZpAWvDrRvMqDrEoR2JV3GdT72OvX1ZjPtetX%2Bs8syv&X-Amz-Signature=138f63eed567579795c9e6de37275e3dfcc01c5b60143c594ef4a29d7fd2a848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667DZDXTE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwI4hWY%2BTm0uZecbGbDvuSxZoR3dr6LmFcT6S7mP1BwIhAK0GMWZbSq9h2A1esj6w6N%2BZMFm6RedWbWNsHZvsw3v0Kv8DCEQQABoMNjM3NDIzMTgzODA1Igzorqg5xNEed5LCBUcq3AOkaey3srlxAYukT7VMnfy8fEvTc4ELJmPc8jFiYjZjbQ%2FU%2FjGe0S2WsjLAuLJ2YmTgoJjY6qDxGo4h4B%2BgqgioYI3eHSvF4fvarHgNMgWi1wO1aPtOQR%2BHSxf5phPqhcshNEU1mMwDeMRRMjPJvEraXLp92pT1RU2J9jeYyfwNwKm8sWMQm7JmLwl8jSaPc%2FWAuMOyhUtQ0gZfjA5cxci76%2BoGU0%2Bdk2NGA9IiEfO9Np3S%2F5sQdRS5CjotvNc9Ref02%2B9gQPmOBtWw5UH2Mrs1oKLixskTkrX%2FkqroRSsbolRJKHLSDQ4f9SkSniLaqMa5sReCdQCkRZhxrA1Xr32tMNE4bndeG8Q%2BOqQwd%2FKPYVFxi19a19tY4VAQCZN7PvrmTSKTavhFjiIFxzGUW4f5KxPJv%2F4IWIRwjZYiJ%2FJ5F%2B5QfxckH10fAA%2FYxC1cJRnf%2Fz%2B16ut4rTcewLLkaDciM%2F6LlLexlFJBDAVjU6aKszbc7q%2Fbit3DNJaRfcKloW2FWiehTv3EH74QlxPoG4Hed88dI8yFt1xeIVTFwnDtzR90PfdY2bDbWccSX8fy0aUfmkemCFJBmsqgSFEEHO3O%2F%2FP020k9dkj0BmFqRAI7a5DIsiDVr6moTZVjODCFhffEBjqkAeZQSl7lqVtVQIGy5RJk1TClKx3dv8U69YPNAboZsoaMz9HsQrqqDKZHZpbo9c7VvusAeRcMWgrWOLhDHM5RyY8PYpHBLl8gM22EnFm5cVTvXHI%2BR3boULZoTB74ClcPObl%2BQja18OgogTDsXtiuCQnjMN%2BC7eVXzPvUNDnfZ8lvI%2FnTjgRzYTzW5jMInRW%2FO2h8Du1oOZbNhDJIAe9%2FdMBRbfGg&X-Amz-Signature=3890e9b7adc4d844f86918e689119aebed83018f784566e7453d4f136b05dbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5NSCFB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA5qGeWtsNeJ7IgPAxaL0%2Bow6RC8IlRf3m0QHgIC7EkgIhAOMYmlU0xzoxDiD20ooOvMQpcB2UBN9vy0sw5vC7YHLOKv8DCEQQABoMNjM3NDIzMTgzODA1IgyVN6SpWbOY4V%2F%2FlmEq3ANdPIx09e8XD0xBokek1vUV%2BBeUwJFtaflYHwI7EDnwYI%2F2AqV7n6vPqzGcDXapRWSaokKctbg0tpH24T%2FZLOrRndwEmqdbR56eJNr54VdgrYQZprEwoqm7C68dHcgGadLqtKYxFcvakFA6kB8%2F%2FIUSPSA%2F3m6AuIYwabHQnpCghgj8H1t5oIcG7oHE5yv3dg7yb1pPkqnX%2Fd73lOQ2aFB0W6AS4OV1qccUP8dD%2Fvig8%2B2%2BGOspBjRtiIwrE%2BtM5PLIJ0cDan9H5e90GYHt5Ive9tSBTnYOXYV2NrZ2M3VvswML6hgK6VWz%2Fi0IaQRAb8bmQqokOyYuGv2pKt3%2B3rBKkMIT8kqeSAsTa91%2FRr2ZudwmZAaEZXQMEo%2BSMyzG%2FUtU5W4VN5TVDVdZOacq6fW97LjBMXKZVWJcCMhjpFV00MYuqBg1w%2Bc4gKEFbBLKhtu3JIXpgR0QR6a04oeAitbXJDCmph9DO0GRJgl812da5f%2FPTy8WFjNDAZRWjES%2FHuIh5UtJ8SazS66ox6NEL1bekfAYblZ9oHo66qseTSmzWo3iV0HmLV5NvEjeX1pW6jHVw%2Fbdyj2m3TjaFOE6fiIv6IbYaN5sOIPYCb4o7c9CFVozCofUc6UA2rtIHjD2hPfEBjqkAXhU3WFvETv91nPoxaOB8vjd%2FYfmEyXU9pnibxEHUjAjm8Odxz%2F2vZzw0t6%2Fhs0wh2QyxygbOpbgst%2FfDBR7OiVXdcNK6zUunGnyYMdsw%2FdDivWElaxomA2PF3zNUZ5lfOFTvXM4ge1pce%2BeHLvSsK5Y0GP6cBtgL4J5uZ7Wt5lUMpDQa7dGWF%2F%2FYQ8NMOdXgFUcgkuqf5Nh9E4rbnY6oNXe2Qbi&X-Amz-Signature=173c16d0ec3266c7367e8349a6ae3c1d2b2dbc2aa60523ff3869f2eceae59b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
