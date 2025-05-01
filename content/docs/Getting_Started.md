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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTR3BW4I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOeN9YdfGZpx7uTsgKQ541DSW%2BCSVCOHQle8MQNda67gIhAIdlSWH2el72t3FrfnmkHOSTX0sRu98LSNEOq%2FjMExkGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCEXnor1WgnXJDNPAq3AOhgbXVKzpjFAZPJ3%2FL4PsDqoguPy%2BNWYvGrtwPYo7aVDx2%2FTxIsISUQlgzxuzFJB1sQrMqCTYvBCI9Oos3zvRlmpmA8EMzQHLNZ2l9u52wly2dCTq3TKHGpcC%2FSH9uIQR3gS%2FI1mwvU1DGB2NG91UIUN%2Bswzt%2FFHmtqiIx3MrU7pgMRVFVlKUwiLZ8oQocE6Db%2FCjro86gFvOWk5b6rwmFVIPGQkEmPkVXvdA4sscKWZSF2x1a5uCD3WXXEg%2FotqY5mqvprZrJEdHXbDoZtxxqkXkdBVM7HOrkYyYw0NfOnoJVrZTF0TEE1ar07eefeyzvLhBFsT8Bd3vlITMCKMlQFaf2ZUDyvY%2BhRTH593iS0uH7sda8HI9aR%2FxnU%2FYSlpNyObzH1WPPH%2F5oh4rfdakfVio2PuzioO5VcB3ql%2BeKxQj53IhozgmgxMMO7WjYZUqxWXdjcR8gjKO2JKp1AzQXvXFpmQSjrk400J%2F4kjllKT4xwAaFLlMthBj08pY28hSCOAAhgEC8j7FKbZhFq3My9Zns95BtMPJxgAxND8NkrdmMHdCW8GtgnG6%2FvgDh1TRmsm9pbWAVlnlvMaROm%2B%2BlOtty0a9RS050WDM3TiUBI3PGT45%2BO2qs3IgunTDflMzABjqkAaYGNrFgHRnLZ4%2BsPRWXCd57thP7QZQ8VJk4ZUKw1FqL4Az25UG0BH%2B3TfddNmAEC29sDwZFeR5WxKwYjETl5yqbga8rkDpJIXQHwPKe5hR7Tw%2BQVnA055aRg2Z6KPojh%2BxdycSsHV28McVBts3rgyY8JDeer7tmEElh5N1dQcNgmKjZ1NT%2FEkaFY9Yko7E0U3ZNNZbh4qewUTG9UR5K4XubyLK9&X-Amz-Signature=8f8ce87031fa85a50887c20ca4495f1ac3df17a51cb0252338d7e281cfb18f77&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTR3BW4I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOeN9YdfGZpx7uTsgKQ541DSW%2BCSVCOHQle8MQNda67gIhAIdlSWH2el72t3FrfnmkHOSTX0sRu98LSNEOq%2FjMExkGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCEXnor1WgnXJDNPAq3AOhgbXVKzpjFAZPJ3%2FL4PsDqoguPy%2BNWYvGrtwPYo7aVDx2%2FTxIsISUQlgzxuzFJB1sQrMqCTYvBCI9Oos3zvRlmpmA8EMzQHLNZ2l9u52wly2dCTq3TKHGpcC%2FSH9uIQR3gS%2FI1mwvU1DGB2NG91UIUN%2Bswzt%2FFHmtqiIx3MrU7pgMRVFVlKUwiLZ8oQocE6Db%2FCjro86gFvOWk5b6rwmFVIPGQkEmPkVXvdA4sscKWZSF2x1a5uCD3WXXEg%2FotqY5mqvprZrJEdHXbDoZtxxqkXkdBVM7HOrkYyYw0NfOnoJVrZTF0TEE1ar07eefeyzvLhBFsT8Bd3vlITMCKMlQFaf2ZUDyvY%2BhRTH593iS0uH7sda8HI9aR%2FxnU%2FYSlpNyObzH1WPPH%2F5oh4rfdakfVio2PuzioO5VcB3ql%2BeKxQj53IhozgmgxMMO7WjYZUqxWXdjcR8gjKO2JKp1AzQXvXFpmQSjrk400J%2F4kjllKT4xwAaFLlMthBj08pY28hSCOAAhgEC8j7FKbZhFq3My9Zns95BtMPJxgAxND8NkrdmMHdCW8GtgnG6%2FvgDh1TRmsm9pbWAVlnlvMaROm%2B%2BlOtty0a9RS050WDM3TiUBI3PGT45%2BO2qs3IgunTDflMzABjqkAaYGNrFgHRnLZ4%2BsPRWXCd57thP7QZQ8VJk4ZUKw1FqL4Az25UG0BH%2B3TfddNmAEC29sDwZFeR5WxKwYjETl5yqbga8rkDpJIXQHwPKe5hR7Tw%2BQVnA055aRg2Z6KPojh%2BxdycSsHV28McVBts3rgyY8JDeer7tmEElh5N1dQcNgmKjZ1NT%2FEkaFY9Yko7E0U3ZNNZbh4qewUTG9UR5K4XubyLK9&X-Amz-Signature=9eafea1a337bb3aea9641a537ab5c6751e601f62a8be4acc54ad83576a622a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTR3BW4I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOeN9YdfGZpx7uTsgKQ541DSW%2BCSVCOHQle8MQNda67gIhAIdlSWH2el72t3FrfnmkHOSTX0sRu98LSNEOq%2FjMExkGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCEXnor1WgnXJDNPAq3AOhgbXVKzpjFAZPJ3%2FL4PsDqoguPy%2BNWYvGrtwPYo7aVDx2%2FTxIsISUQlgzxuzFJB1sQrMqCTYvBCI9Oos3zvRlmpmA8EMzQHLNZ2l9u52wly2dCTq3TKHGpcC%2FSH9uIQR3gS%2FI1mwvU1DGB2NG91UIUN%2Bswzt%2FFHmtqiIx3MrU7pgMRVFVlKUwiLZ8oQocE6Db%2FCjro86gFvOWk5b6rwmFVIPGQkEmPkVXvdA4sscKWZSF2x1a5uCD3WXXEg%2FotqY5mqvprZrJEdHXbDoZtxxqkXkdBVM7HOrkYyYw0NfOnoJVrZTF0TEE1ar07eefeyzvLhBFsT8Bd3vlITMCKMlQFaf2ZUDyvY%2BhRTH593iS0uH7sda8HI9aR%2FxnU%2FYSlpNyObzH1WPPH%2F5oh4rfdakfVio2PuzioO5VcB3ql%2BeKxQj53IhozgmgxMMO7WjYZUqxWXdjcR8gjKO2JKp1AzQXvXFpmQSjrk400J%2F4kjllKT4xwAaFLlMthBj08pY28hSCOAAhgEC8j7FKbZhFq3My9Zns95BtMPJxgAxND8NkrdmMHdCW8GtgnG6%2FvgDh1TRmsm9pbWAVlnlvMaROm%2B%2BlOtty0a9RS050WDM3TiUBI3PGT45%2BO2qs3IgunTDflMzABjqkAaYGNrFgHRnLZ4%2BsPRWXCd57thP7QZQ8VJk4ZUKw1FqL4Az25UG0BH%2B3TfddNmAEC29sDwZFeR5WxKwYjETl5yqbga8rkDpJIXQHwPKe5hR7Tw%2BQVnA055aRg2Z6KPojh%2BxdycSsHV28McVBts3rgyY8JDeer7tmEElh5N1dQcNgmKjZ1NT%2FEkaFY9Yko7E0U3ZNNZbh4qewUTG9UR5K4XubyLK9&X-Amz-Signature=647534698de3ad967cd135fe93425e88014730307a07d9631b6620d07c3cb5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE3DIDTL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCGeSN3nSMlrTAfX1PCrNMIAmSdMDbMbrzMLth6HxckTwIhAIBYJ9Kq0BXWbG6F%2BRSvU1OamnuQircSd5ADMFSLKDDfKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnpOuvi7PE2UZ3vdwq3AMpxFvFy6RzlggPIuVwll4WkLDhByijhyYPdTquHLb0E6RzTzocACuXsbA4KP6WuR9%2FbjM9e0Q%2BMJHcLNouZ%2BMgl3a4i1fDOBVXpiSL3EzBYJ0DnrwvYe47F0AUXFeo07gupnMHz9trIsdiE5I5xuFgKbp9q4lMhs3m3%2Bsx6oiu5Yh9Nb4RLMGtRBkV%2Bn3%2Fb1bR6IWH%2BH%2FGaPLsOGJMt%2BhRvv792%2BFrwNjcRiFp5HQcMl7iWv7VuqKgsdByG9YggyGAFFGuENQaK7BhPJBQT5DfrlGxAUzdLwok%2B4NikkfTJ7QOSkaZBf6v97Gwv3SzVOjGyWtK%2Fg2CIRpXYMWDgOTFha2ZWN7xlnYSysMomzhGBLmaUgC5%2FcmezfyCLO8o0nd6PlYMGIlcCioDuFD0jvI0PJE5eVb%2FEm4gwrJc2hbFEuMbHi%2Fafone9zmTBJYlKlxWrflTqbVD5n33LWGq97InyoCMdqJmZU7huEJka6EqZ7uc8%2FeM1iqLHqyB8D3xjHlbDomG%2FlzVWwwRr6QJ0Xo3BXD%2BFhGpbCctUOWfqmFcWNViGnF25tFozfSPgjlqi8Kn7dZ4RTXptukujJeY5A86vu2owClH2Xc1uTGiaP8SAOpz4j87j5eS%2B%2BWStDDklMzABjqkAQry%2BPBN0q1iKZp6fKngj2GvnJZA%2BJb%2FONH%2B49qmNUjjvHJtfZ5NYIt0YvbpkSlUNjzy3SVUkVjIdu4Rvfda30clZTrpjWE%2Fs74wBwA5BviNT3pZy%2FkwEFKmiXCXATZZtDlW3SazLQVHmGPZVhNxHtW69lbrp5wEoWbdA8saLk7geCjKwQOpA%2FYcppWxzYKETjNChnND06sNB1KxtVZDLpD4NGJV&X-Amz-Signature=fffdd5c8e009650725c7c8d60ae336fe868ab470b111d335d89d0d05d8d8f24c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GUANTSE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHBWG8OseVVwDf1awrmRO%2FvqdBnclS3ThSy32pj7pJcvAiBjIGaVehLF5ZuAGC5FCxq7u0sAh0VEBcmKy3njjgXvvyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMfd5iPTrf31gKpj0KtwDcyIr6G%2BR5Q0S3zSIlgEzTJv%2Baa%2F7rXVS87oD%2FcfSQqMF%2Fa4j5fsho%2FzKtCuu06K7RdJ73LNHsl0Gw4xbTM%2F0%2BCBlIPnymrXxlxS6evRr%2B3o6VIyZgq3FiX592u8C5xY341DscGj9qklVxnixeXniP34q7hPnljtgC3VKKMNi5xS6aM7n2XBVMitbS83tSicJFgEC2530I5AsMumxm6Y0dL5iCVT2M91UTIztg%2FSOjhpUbOaqopEMujvB9HGt8IBFypzt%2F2A%2B%2FCUbMc%2Bt3Kfs9hfQYSVgSiEVq1MkceNHNmZrO%2B9qCeJze%2BViJA0Bfn14q4fWl17jUn%2Bx6kWBtyumCxDxEt%2Bjt%2B6g2zrWyYQ9TuQculxD9JzH2WRYjdMSkOCGnIru673%2BGetNF5E7jcc6YWdpcjaM9P7gMYIHuf7keznVEQDSMmcPbqgkJ6amYdTnD4SzK33a4gZcF5EJ2Y5U1iAgCTBWhuj9O3mXjDado9I0GxOg9l%2BSWPENMv6sBxIE9sFT16iOcPER2sNLxP%2FWckbiOfrt2DcNaDv1CVgP71jIEgroDSbOr8iZ%2Bqf1nTxzODsF48K34MpBmS1LjioICMsJBnebguTGIr1n1%2BQtX9PBM1pxeNa3K3RihxQw9ZTMwAY6pgGRFoIGfZ5ukhGLv8ZFR31sau8oyEUS%2FjIIMa4BWW2Of2qAfx8giLNEleLhgrr%2FnC%2BcvRcI9ssIJ%2FYyTdjYtrsvUokrxbjXRcPBBIDuAAPHTFBiPISGD4sXegNENMLfg%2FmNSoD73Gj7GigXrPQr3YBRaTEI0DE9jUem%2BdQCMMl8LY8kBanZ6M5lmUQ0Q8bwaIweaxIFoUApXERWNldzWsR%2F1GKwb0N%2B&X-Amz-Signature=68f461a5b00269bd11dfa734f98018a20955b28a2d2275b0229826352260a208&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTR3BW4I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOeN9YdfGZpx7uTsgKQ541DSW%2BCSVCOHQle8MQNda67gIhAIdlSWH2el72t3FrfnmkHOSTX0sRu98LSNEOq%2FjMExkGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCEXnor1WgnXJDNPAq3AOhgbXVKzpjFAZPJ3%2FL4PsDqoguPy%2BNWYvGrtwPYo7aVDx2%2FTxIsISUQlgzxuzFJB1sQrMqCTYvBCI9Oos3zvRlmpmA8EMzQHLNZ2l9u52wly2dCTq3TKHGpcC%2FSH9uIQR3gS%2FI1mwvU1DGB2NG91UIUN%2Bswzt%2FFHmtqiIx3MrU7pgMRVFVlKUwiLZ8oQocE6Db%2FCjro86gFvOWk5b6rwmFVIPGQkEmPkVXvdA4sscKWZSF2x1a5uCD3WXXEg%2FotqY5mqvprZrJEdHXbDoZtxxqkXkdBVM7HOrkYyYw0NfOnoJVrZTF0TEE1ar07eefeyzvLhBFsT8Bd3vlITMCKMlQFaf2ZUDyvY%2BhRTH593iS0uH7sda8HI9aR%2FxnU%2FYSlpNyObzH1WPPH%2F5oh4rfdakfVio2PuzioO5VcB3ql%2BeKxQj53IhozgmgxMMO7WjYZUqxWXdjcR8gjKO2JKp1AzQXvXFpmQSjrk400J%2F4kjllKT4xwAaFLlMthBj08pY28hSCOAAhgEC8j7FKbZhFq3My9Zns95BtMPJxgAxND8NkrdmMHdCW8GtgnG6%2FvgDh1TRmsm9pbWAVlnlvMaROm%2B%2BlOtty0a9RS050WDM3TiUBI3PGT45%2BO2qs3IgunTDflMzABjqkAaYGNrFgHRnLZ4%2BsPRWXCd57thP7QZQ8VJk4ZUKw1FqL4Az25UG0BH%2B3TfddNmAEC29sDwZFeR5WxKwYjETl5yqbga8rkDpJIXQHwPKe5hR7Tw%2BQVnA055aRg2Z6KPojh%2BxdycSsHV28McVBts3rgyY8JDeer7tmEElh5N1dQcNgmKjZ1NT%2FEkaFY9Yko7E0U3ZNNZbh4qewUTG9UR5K4XubyLK9&X-Amz-Signature=3d0cb330072f83521374a0efc73343779b7a4a652b982ff74f531462159ea6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
