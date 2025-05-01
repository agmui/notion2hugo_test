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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORSS2GS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFytaSPTazMz3djGjmvabfBid6dQS8rGtT5hMQvpUtsQAiAqTr%2B8BGueis9gaRskVK8fI2g7Kbqo4CD4llLhb%2BsqcCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0XkHh5N4KeNic4KKtwDj4UhIWLZgMKwt4EA4xjCi1yZmqZSK65Yd7gWYpZfGu6WLr%2Fr6b7YAMclBDE5I4YDN5yeBOdex%2BDO8tRZOypVISSsZzblQwnHmWxXbZdt%2FCnKy5w6zUF6jw%2Ba4YvefesZF2z4kXXB%2Be59QIWIe4ln5H2yLn%2FYlMt2i2jbpkkHR4iHobxZpcCqtw%2BKltG9ocPDmtB5aTxOpaU5xsiL7lQJxMalZxT98nB%2FTHoy3pOqPgxWhJAyrAfrExckJg6GNLTCFZAJiinxnQ6CUG3f5QaY%2BAjrmLv%2BWWhfm5VubXnVYTOHiwo%2BcDcHtODhzmiNCXX8HNn%2BHX3W0eyOmpq0hVn0wUadZTfCGtZmmZxHOHXo8nC4ov%2BRnPavuC4tAuu7ZQg%2B7aLfsZMMF%2BXzSjBQXswMIynd2clkJo9rx3qRvO%2BuODR7UICYdZ6vHvV5VQwXAjsH28vnCjlzrbUe7Nk7uEVbSuC6urv8oCtTSqQxdtZ2bkueL7NPyJA7tD4ptmnZ7KfHf74ghZ2lqfco6W4n9tSUF5ATJGAtn7DiZEUOzn7ZEi4FAsd2e1FNq68Gh%2B1A%2BUHHUUGfN8%2BfheJLX01QqVBY%2Bh53Mrx3zxjyjILABuipJqNNqniHYnrfK%2BNHppUww5HPwAY6pgENSz9eTtWS3xbb6aofTlSd09DYzQ46k9a07hx1H3MIOEfXQPx0DAJPVhjb%2Fv3%2ByGMEu8tZb9hhbldb39p9%2FV5%2BMbv6gfZ3FdwGIXdjmheuIKTXsapUm6ebeND%2BtpWvDG4wE4rauqOnihiXvyI7UE8sOiocEtFMpr3uZWui9QvFpnT7fBK10vPbUKDTtef7FYrxVfCZVYlTXjvpCczBOE5ZIkJUaJ4N&X-Amz-Signature=c6b1b2dbe9c4eec5553d882180b369c60e5bc7808c6e8a940ada73d2f06aef97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORSS2GS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFytaSPTazMz3djGjmvabfBid6dQS8rGtT5hMQvpUtsQAiAqTr%2B8BGueis9gaRskVK8fI2g7Kbqo4CD4llLhb%2BsqcCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0XkHh5N4KeNic4KKtwDj4UhIWLZgMKwt4EA4xjCi1yZmqZSK65Yd7gWYpZfGu6WLr%2Fr6b7YAMclBDE5I4YDN5yeBOdex%2BDO8tRZOypVISSsZzblQwnHmWxXbZdt%2FCnKy5w6zUF6jw%2Ba4YvefesZF2z4kXXB%2Be59QIWIe4ln5H2yLn%2FYlMt2i2jbpkkHR4iHobxZpcCqtw%2BKltG9ocPDmtB5aTxOpaU5xsiL7lQJxMalZxT98nB%2FTHoy3pOqPgxWhJAyrAfrExckJg6GNLTCFZAJiinxnQ6CUG3f5QaY%2BAjrmLv%2BWWhfm5VubXnVYTOHiwo%2BcDcHtODhzmiNCXX8HNn%2BHX3W0eyOmpq0hVn0wUadZTfCGtZmmZxHOHXo8nC4ov%2BRnPavuC4tAuu7ZQg%2B7aLfsZMMF%2BXzSjBQXswMIynd2clkJo9rx3qRvO%2BuODR7UICYdZ6vHvV5VQwXAjsH28vnCjlzrbUe7Nk7uEVbSuC6urv8oCtTSqQxdtZ2bkueL7NPyJA7tD4ptmnZ7KfHf74ghZ2lqfco6W4n9tSUF5ATJGAtn7DiZEUOzn7ZEi4FAsd2e1FNq68Gh%2B1A%2BUHHUUGfN8%2BfheJLX01QqVBY%2Bh53Mrx3zxjyjILABuipJqNNqniHYnrfK%2BNHppUww5HPwAY6pgENSz9eTtWS3xbb6aofTlSd09DYzQ46k9a07hx1H3MIOEfXQPx0DAJPVhjb%2Fv3%2ByGMEu8tZb9hhbldb39p9%2FV5%2BMbv6gfZ3FdwGIXdjmheuIKTXsapUm6ebeND%2BtpWvDG4wE4rauqOnihiXvyI7UE8sOiocEtFMpr3uZWui9QvFpnT7fBK10vPbUKDTtef7FYrxVfCZVYlTXjvpCczBOE5ZIkJUaJ4N&X-Amz-Signature=8838a81ef7e0f481bc0509fa985add203c391326bcfc62da359fad8042407d52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORSS2GS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFytaSPTazMz3djGjmvabfBid6dQS8rGtT5hMQvpUtsQAiAqTr%2B8BGueis9gaRskVK8fI2g7Kbqo4CD4llLhb%2BsqcCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0XkHh5N4KeNic4KKtwDj4UhIWLZgMKwt4EA4xjCi1yZmqZSK65Yd7gWYpZfGu6WLr%2Fr6b7YAMclBDE5I4YDN5yeBOdex%2BDO8tRZOypVISSsZzblQwnHmWxXbZdt%2FCnKy5w6zUF6jw%2Ba4YvefesZF2z4kXXB%2Be59QIWIe4ln5H2yLn%2FYlMt2i2jbpkkHR4iHobxZpcCqtw%2BKltG9ocPDmtB5aTxOpaU5xsiL7lQJxMalZxT98nB%2FTHoy3pOqPgxWhJAyrAfrExckJg6GNLTCFZAJiinxnQ6CUG3f5QaY%2BAjrmLv%2BWWhfm5VubXnVYTOHiwo%2BcDcHtODhzmiNCXX8HNn%2BHX3W0eyOmpq0hVn0wUadZTfCGtZmmZxHOHXo8nC4ov%2BRnPavuC4tAuu7ZQg%2B7aLfsZMMF%2BXzSjBQXswMIynd2clkJo9rx3qRvO%2BuODR7UICYdZ6vHvV5VQwXAjsH28vnCjlzrbUe7Nk7uEVbSuC6urv8oCtTSqQxdtZ2bkueL7NPyJA7tD4ptmnZ7KfHf74ghZ2lqfco6W4n9tSUF5ATJGAtn7DiZEUOzn7ZEi4FAsd2e1FNq68Gh%2B1A%2BUHHUUGfN8%2BfheJLX01QqVBY%2Bh53Mrx3zxjyjILABuipJqNNqniHYnrfK%2BNHppUww5HPwAY6pgENSz9eTtWS3xbb6aofTlSd09DYzQ46k9a07hx1H3MIOEfXQPx0DAJPVhjb%2Fv3%2ByGMEu8tZb9hhbldb39p9%2FV5%2BMbv6gfZ3FdwGIXdjmheuIKTXsapUm6ebeND%2BtpWvDG4wE4rauqOnihiXvyI7UE8sOiocEtFMpr3uZWui9QvFpnT7fBK10vPbUKDTtef7FYrxVfCZVYlTXjvpCczBOE5ZIkJUaJ4N&X-Amz-Signature=5de9a4f97bd2abbab43092caab59d3087321fea48b9c42f8b75c92adc3b3749c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VL7WRIO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDU4MCLF1xmGMk7cnG6Q5mXIvT0NrGSQlkE9fBmnYdkNgIgHrTExTPLa82mms4SYKzk9YtLLrrVt7VqPI%2FqzT37tNoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT8Fit8NLegyW2A6ircAyXVhmFWy9oX04G7OjXcPZNlyIJ7qdDbnSHswovq5nr0qFP2tiS8SpENvF4S6CfPmyZ3aNnBp%2FrJlPhUy6ZPLb8W6UktMLqDcquT0yF6PjSkKPtqX3qzLcZNazijE2%2FmXwVFsH%2BEhB0frr3MO%2FKsLgOhSFcdOSJn8hjDJvHlexWuvwjJkH75TxB%2BkojVeAvrukFryPumHwvYQotbtavMeZZxdIXVjxGY%2FyfCTwUGVLBJ2wDHxkuv8ARgeqmsbp2HoYADy4CSxdlJXSndGv0oZehTt2WQo3eky%2Bw09BH26SiiMGrcGuXN5mbh2m8%2BRLZoyTBdFNSH5GjvG6V%2FviPvK9ZgbIt%2Biusj7owW6zz4ESDZXRXaxGu%2FQ67DW7yvx7S2ZI27NlRemRVjd%2BcxNKdf1CFu7IL3NqWSRJt8AKI0%2FoeXQKlltQpWGrgNNTv%2BBMXWcvE4CsLXrYKBWTwVXw3PfqoVCRyghZJQbA6MA%2Fp1xYnO3d3XFYp5yJL22M99t7GcYfRPRZRUZy33tEOOPxksf8dEHcK1v6hWm%2FMhCDdO%2FG0f3LdijS8AQi76yJuOhlOJOAqg0hVXQZteeadOqgyv8%2BuVEUwCMRILVgrqxBZncZZNscGAqcAeDQw7ZjFWMLyRz8AGOqUBQ8tsTHKOQxEG4ld3RvEvQtW5kjkf63HXwcaA88bsTtmLr7BRC8CZD491wzdHL1MjwqqX3hx7bCIeRIAChpgJfuYtUhxfdtOgjofEDgpHh%2BatO5Mx9RUadmWATojsB5hqRrKPG2CRk12cdVXWgpt8xUx%2FfTdJYPePaQ0TTHlVaFOQTx%2Fa3S%2Bt2C8tRLu3YDcJxKfVLVwuAUCrKcaN8uv%2F3FsdQTTd&X-Amz-Signature=91255bbb937ff4d8205a3433431c87d83a31d9e64508a41e7c92db0c646e067c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIONTRJ5%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC%2By5nyNyoJCqj0yuUDGYOi6yl%2Bz2BI4shrNlLM93ei4gIgV4Kd6oQTkeiM8FxU8wCLju3SjCshyW6G85Hi%2BOUkxDgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BUItEfo1aQ%2FZyD2SrcA%2FTWuVlGtNp4njx36xU%2BqiQ90%2B%2F11MzIX8Rr8cluXCE78ioZ1DlqZSpjwdthnVSsubc4C9pkunwKYhMhU4ovS0mQECpUIE%2BNutga4ktb7JwAsZh%2BV80x8HTJi%2Fo7BRKwyI8Y13Nusnq1PRMpZYAjFLXabACjyWg9NKpa%2BmwkhohmpFygwiYRltdR12svKJ%2BlKNIlRVBaaGnBcmuvMvJkPUBAmjQB9MPOFGFghrP3JWo7bIife04%2BkuwbkBg3dPoX1XOw0C2FpJvc08aLNZk9i6nEzsrG4FECWIZNyJ5b7si7pJ78uH5HuDwFF%2BVnWSZK8CDVnNMST0Di0ZFyz5CdaUaYvP2WVhpb7A23h2ec6ULC34W2JXPgWVTAab%2BUKhWKtdWCXoUZT5aUpo%2Fshd%2F4%2BS4hc7jvtRKw0XZUv6ZZZmu%2B4LSwNcLHwGG%2B%2FpRexllTdVYgH%2BaFFw%2Fo3lUNt6BnrmdMjvF%2FkjoyUFKJlWfbp4Ff3wZtna0jfwTUaiVVUULZJyxbYTrELlOOBEHpqp%2FBH9LOi9XgDcco7j%2F7WeqRPV72ZK5je%2Fg9OGHEOkzx2FSd0PgW57eSjqzNpTzABky9TFYqrnQKMkEmxOEQUiuQPCl%2FkNVMYHlv9NyToiwoMNSRz8AGOqUB1J2D1W1XgaAVyUGbaQgvj%2B6l7Y1kg%2FTXpmkrNftLAdb9eFkzBFbJ8CUNBig30m8u00eNfi4I43qhARkCoaW8CPfpydE5gtaXF7HBLnq70bGuRz5a8OJR9K8699JBsupuB1tZoeCFhp4dFbY0mj%2FRV%2B01u%2FR1P9x6hnrWXeX3%2Fu6cdVp2SdoraWzDhYY877F4mc%2BEfrfB%2FWVVwEJ4rJuWaZCK3Y%2F5&X-Amz-Signature=f5b60c0d772c146b768aee3f212be34ad3235937789486f705225410ae909b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORSS2GS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFytaSPTazMz3djGjmvabfBid6dQS8rGtT5hMQvpUtsQAiAqTr%2B8BGueis9gaRskVK8fI2g7Kbqo4CD4llLhb%2BsqcCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0XkHh5N4KeNic4KKtwDj4UhIWLZgMKwt4EA4xjCi1yZmqZSK65Yd7gWYpZfGu6WLr%2Fr6b7YAMclBDE5I4YDN5yeBOdex%2BDO8tRZOypVISSsZzblQwnHmWxXbZdt%2FCnKy5w6zUF6jw%2Ba4YvefesZF2z4kXXB%2Be59QIWIe4ln5H2yLn%2FYlMt2i2jbpkkHR4iHobxZpcCqtw%2BKltG9ocPDmtB5aTxOpaU5xsiL7lQJxMalZxT98nB%2FTHoy3pOqPgxWhJAyrAfrExckJg6GNLTCFZAJiinxnQ6CUG3f5QaY%2BAjrmLv%2BWWhfm5VubXnVYTOHiwo%2BcDcHtODhzmiNCXX8HNn%2BHX3W0eyOmpq0hVn0wUadZTfCGtZmmZxHOHXo8nC4ov%2BRnPavuC4tAuu7ZQg%2B7aLfsZMMF%2BXzSjBQXswMIynd2clkJo9rx3qRvO%2BuODR7UICYdZ6vHvV5VQwXAjsH28vnCjlzrbUe7Nk7uEVbSuC6urv8oCtTSqQxdtZ2bkueL7NPyJA7tD4ptmnZ7KfHf74ghZ2lqfco6W4n9tSUF5ATJGAtn7DiZEUOzn7ZEi4FAsd2e1FNq68Gh%2B1A%2BUHHUUGfN8%2BfheJLX01QqVBY%2Bh53Mrx3zxjyjILABuipJqNNqniHYnrfK%2BNHppUww5HPwAY6pgENSz9eTtWS3xbb6aofTlSd09DYzQ46k9a07hx1H3MIOEfXQPx0DAJPVhjb%2Fv3%2ByGMEu8tZb9hhbldb39p9%2FV5%2BMbv6gfZ3FdwGIXdjmheuIKTXsapUm6ebeND%2BtpWvDG4wE4rauqOnihiXvyI7UE8sOiocEtFMpr3uZWui9QvFpnT7fBK10vPbUKDTtef7FYrxVfCZVYlTXjvpCczBOE5ZIkJUaJ4N&X-Amz-Signature=26f306c9cceea55386ce77cf18b4facedcec7865b54d4d5cedf21ac392e0cbc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
