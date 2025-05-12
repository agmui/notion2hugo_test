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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDYTNIT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6j999ddcneRztrFP4d%2Bk%2BiscomCHWAicAw%2FA5zeT9DwIhAJMS5XCF2ZA69GEDvKCM4M%2Ff3eTd0ETgNEkgFl%2BxYb96KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3hNwkIISmsmCxneMq3APlJgO%2FRvC869RigfbAe5SZf5ZZVT1VFK4KxxYGu0%2BIjhEbPSJ92Y6IYfjcsSDvjEq%2BdXDXOtV0KixkoptLjL16XAUInZMFU%2BI%2BJLDbUUM2z7ST5XbphC57fjz0p8ttrv2%2BEJ%2BSZa5FoL2scT08Kc1QpmwFyII3kVSJhRBMgjDhLjSfWHbEzFLWWOW0rPopTcr%2BII4P2hnaGlmkEb9mBY0p3Xz8kNpb8ywsNjfn3gEMHAZBDaXTEAHOIT2qAlc9qOnY33wqKYoBmJQZjiH%2FGg0jebPgt%2FWBqlGUD5qZA7vEyvkkqwKl8aQpx%2B364L3FlER6mewYCwDN0PwF090xsSflyekd7G2ZSDVLEQh2EnytVK%2FubLI2STcXgQM%2B%2FQkZzt68Xxs0w7enHR5vvIdMjDg0lj%2FpFSL660nGqeJPsvfsl5Wa8t5YLd2Cms0Og5r80dy%2FXrAAK6Zr8zOKOlGf7xy6diBAJZnFS5TRs%2F1zOtMoKutQ1cA2xAieLxBCdaKLctYbl30sTRmiIvB9LrbDlX6C28J6%2FpvT0M8iSGwQNAIodlasOO7nPSzWB1yVsXskTAFb2gJghKF7wnQOUrxB%2Fy50x%2F0v8E5j7OuZiqHjc5xNUacS36n50HVnhXMcaTCN7IfBBjqkAfd23vjRvePP8h328%2B0bTHKjnzLjXTwt5rrLomSKxajEsk0mRPha2OTKwJrYcLKma4MKYi2nEiSlDcfBH%2Fseg31qBAJaNMBrDETDDXL7yPVBqpUDfjUB%2BSu3RLOuYCWx2okLTkSxK28VoglQs7TOplJTmEeSwFx8r%2FCygsWeDZsG8N8ewnFl21wdprnavmojjHaKbmY6oP2yhA%2BX64WIQe9KB%2BcS&X-Amz-Signature=3e2d59c8def2384278d9f6039318817e8ef451bc78ff1a78bf3d152e6a932478&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDYTNIT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6j999ddcneRztrFP4d%2Bk%2BiscomCHWAicAw%2FA5zeT9DwIhAJMS5XCF2ZA69GEDvKCM4M%2Ff3eTd0ETgNEkgFl%2BxYb96KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3hNwkIISmsmCxneMq3APlJgO%2FRvC869RigfbAe5SZf5ZZVT1VFK4KxxYGu0%2BIjhEbPSJ92Y6IYfjcsSDvjEq%2BdXDXOtV0KixkoptLjL16XAUInZMFU%2BI%2BJLDbUUM2z7ST5XbphC57fjz0p8ttrv2%2BEJ%2BSZa5FoL2scT08Kc1QpmwFyII3kVSJhRBMgjDhLjSfWHbEzFLWWOW0rPopTcr%2BII4P2hnaGlmkEb9mBY0p3Xz8kNpb8ywsNjfn3gEMHAZBDaXTEAHOIT2qAlc9qOnY33wqKYoBmJQZjiH%2FGg0jebPgt%2FWBqlGUD5qZA7vEyvkkqwKl8aQpx%2B364L3FlER6mewYCwDN0PwF090xsSflyekd7G2ZSDVLEQh2EnytVK%2FubLI2STcXgQM%2B%2FQkZzt68Xxs0w7enHR5vvIdMjDg0lj%2FpFSL660nGqeJPsvfsl5Wa8t5YLd2Cms0Og5r80dy%2FXrAAK6Zr8zOKOlGf7xy6diBAJZnFS5TRs%2F1zOtMoKutQ1cA2xAieLxBCdaKLctYbl30sTRmiIvB9LrbDlX6C28J6%2FpvT0M8iSGwQNAIodlasOO7nPSzWB1yVsXskTAFb2gJghKF7wnQOUrxB%2Fy50x%2F0v8E5j7OuZiqHjc5xNUacS36n50HVnhXMcaTCN7IfBBjqkAfd23vjRvePP8h328%2B0bTHKjnzLjXTwt5rrLomSKxajEsk0mRPha2OTKwJrYcLKma4MKYi2nEiSlDcfBH%2Fseg31qBAJaNMBrDETDDXL7yPVBqpUDfjUB%2BSu3RLOuYCWx2okLTkSxK28VoglQs7TOplJTmEeSwFx8r%2FCygsWeDZsG8N8ewnFl21wdprnavmojjHaKbmY6oP2yhA%2BX64WIQe9KB%2BcS&X-Amz-Signature=b296f94a8bd63b031c06abce603aca01fa1bdb478790c9e331b4ef4bd29f519c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDYTNIT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6j999ddcneRztrFP4d%2Bk%2BiscomCHWAicAw%2FA5zeT9DwIhAJMS5XCF2ZA69GEDvKCM4M%2Ff3eTd0ETgNEkgFl%2BxYb96KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3hNwkIISmsmCxneMq3APlJgO%2FRvC869RigfbAe5SZf5ZZVT1VFK4KxxYGu0%2BIjhEbPSJ92Y6IYfjcsSDvjEq%2BdXDXOtV0KixkoptLjL16XAUInZMFU%2BI%2BJLDbUUM2z7ST5XbphC57fjz0p8ttrv2%2BEJ%2BSZa5FoL2scT08Kc1QpmwFyII3kVSJhRBMgjDhLjSfWHbEzFLWWOW0rPopTcr%2BII4P2hnaGlmkEb9mBY0p3Xz8kNpb8ywsNjfn3gEMHAZBDaXTEAHOIT2qAlc9qOnY33wqKYoBmJQZjiH%2FGg0jebPgt%2FWBqlGUD5qZA7vEyvkkqwKl8aQpx%2B364L3FlER6mewYCwDN0PwF090xsSflyekd7G2ZSDVLEQh2EnytVK%2FubLI2STcXgQM%2B%2FQkZzt68Xxs0w7enHR5vvIdMjDg0lj%2FpFSL660nGqeJPsvfsl5Wa8t5YLd2Cms0Og5r80dy%2FXrAAK6Zr8zOKOlGf7xy6diBAJZnFS5TRs%2F1zOtMoKutQ1cA2xAieLxBCdaKLctYbl30sTRmiIvB9LrbDlX6C28J6%2FpvT0M8iSGwQNAIodlasOO7nPSzWB1yVsXskTAFb2gJghKF7wnQOUrxB%2Fy50x%2F0v8E5j7OuZiqHjc5xNUacS36n50HVnhXMcaTCN7IfBBjqkAfd23vjRvePP8h328%2B0bTHKjnzLjXTwt5rrLomSKxajEsk0mRPha2OTKwJrYcLKma4MKYi2nEiSlDcfBH%2Fseg31qBAJaNMBrDETDDXL7yPVBqpUDfjUB%2BSu3RLOuYCWx2okLTkSxK28VoglQs7TOplJTmEeSwFx8r%2FCygsWeDZsG8N8ewnFl21wdprnavmojjHaKbmY6oP2yhA%2BX64WIQe9KB%2BcS&X-Amz-Signature=4edfe7c70eadec48c72b87d637e384f93bd18a829d6a1ea5ea1c3412dd2dea6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKCFMVN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCwCNmn%2FLbDh9IXbyw%2BgxlPXpAwCBfcyDJqDHGSyyLESgIhAN8Tg6pmF0GEDVZHyJAQgItrMossj4YaZPWH%2BnbqyyyRKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCleTGy4nmAXhIUEUq3AN16xUbrNsWO5YA%2F%2F5TasQ2WRXalBIXHwOOUcHGHT8%2B%2FLmgMH96u5FIPQY0gPljc1aKIwV83AddUIrup53JHronNH7Y%2FJnAEscfAij6ascsrR60w3O3WJpLv2OSnZQ6iv8FlJcOe8lce3CMgzr6VLYxYWK4QINMO3csHVkT3wvEgPCqYgfjA8WZtJO3etuy5FUyDip9RGjC3EI9q1ZXJNi%2FaV5wFAMiKMSDEGbCSGtsJEBJs5XzZ5tLWh6KR7IlP%2B1HtJOmuhAGjcTubFXfEUdRf6ccnZw04NQ19HCJ4tC32nhiQhWpkWw68pfYj1%2FgENEsDsjTM2MDz5RfOAHHrCrdoThKcHvmBH7ccFG3YV8dNzkqqFZYROwSVdf2XzhjVuYYmrN9FDH5yon7mBtigFl%2FT0Dc9rwCSdEcNz9wr9jOfiU0dp4yHMixKwyPuMtiJjD%2BffbXiO%2BwMWSXCRan8s2fshcgCDFuJin7KA2ZZna1MEZd7GQDBDcS4LqOGH3WL1RyayF4u9WW5%2FkScBs3ElrTIbBXKklTNXJZ8s6vm6HXo6%2FiJANkf1a1wIyByq68LR7aiQhi7cjojrv3FqBKZwqKDhv1bkVpAYYnDAXVZ8pGKLX4hAeY%2FU6%2BQeoTzTCF7IfBBjqkAeDU7uxZdiXHLmK48DnEwINkwwH0SxyB7VhLSrJtuq4duBW2nFePpKcnCTuHI5093Qiri4RhBiB74haEA7dEGNw6Y6QCvaU6vsquEro6EyDgkxtJ%2Fv2Z20sQItDCx%2BLWx%2BsQYB%2FIzsnVO6CJhe15MO3yGyz%2BwmVi0EtUZU5iseEpt6t7yvd3U3QKYJwDZVSAxYCSwvM9CnG4nw2I1AugjwXe20iz&X-Amz-Signature=3a3a7edfe832b2cec2d6aaa83772be93d156a76b3796b7f5fa6d63104c5b5ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WU7FBG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDKQObn9IXiyLBc9BqWhI7oCqS7%2F400fQeb%2BhCid24RBAIgJX91SjPhICCtK%2F8kJWQ7GesvexN3i5doP1Npy%2BdwJhMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtHzmWjQKbv%2FQ5b7CrcA26rPbpxBMPObaRWVeLJx9DX58fyL5bgwL4%2FSbkIEHUX6aE6%2Fki7cp%2BtwS0NwbYocjG289RaQldbJjVSfWhMEI1djqCKSM5P6rhU%2BowV83a3zniEQmcyuHnZf2D0tEJE7bng9YwK24XD4gHXJihvDHSBawRa2Wh14nGDfap82KGs1KPQBc2BfD%2Bgvil9mbOFaOBuHr7Lvp8BHok0IzLQU3zNCi4rUS9vhVmgG8xbsumThXJ6YEv%2FvuABx845PXBfB039pzKVR0vhynmYr1VcebEc%2B5v6Zw7RVrLzHXS4IH9jy7Lz7INnxOz5T2hmkk4H0OL078IK3%2Br4okbYvt282sDEZwJgz1VXUFJsM4ehnHsulOvruFykjDg6su7KLnkz2hdoC0AW%2FRz1OiitUfQlR5cbktG%2FTRAbXx3IK7zRNvBKM00A%2BD7hT%2F%2BAnC2pvfvkyP2pz8Bfcheugl29m%2BczIA0Ug9Gsa3QRSlFOk%2BoiEL7U5QAYELD%2BBOGHQQz7Ip4hrstd1RbNA%2FeB5xsEJrJcEpK3zshOcA2vODZAhmeQdIBulepAcxQEL1nwrpFzWWpUt8NeOJUWvIXrk11dewCfg%2FW4p%2BSAJK6DXHiCUiQCt7qkYj9FcBgTtF68BCiUMIPsh8EGOqUBbYkqeImuPe3WAAoGFMDd2wzLeSHD%2BBuG7c%2BTK%2Bi4QtNU573gv3B%2B6JRMuR91xHhufUJg0iOEFNvr%2FS0mRNteNQ1ZUClNcuGBHSrtoKHlO38qEEMUUYl811SEdbCsjtHLEHBYz%2BS%2BQBDuGILJ4W%2BtLcLNUJKkfmcIaBeTDzPoSGcKBjN%2FbXBtsDwnnBDyYkTTRYeUlI7B%2FuXwPK9JXlPkkAXLAeG7&X-Amz-Signature=df9da890f4c2dd658de9effc1f7f83fc775facf69705c84940c1eb24358b2930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDYTNIT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6j999ddcneRztrFP4d%2Bk%2BiscomCHWAicAw%2FA5zeT9DwIhAJMS5XCF2ZA69GEDvKCM4M%2Ff3eTd0ETgNEkgFl%2BxYb96KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3hNwkIISmsmCxneMq3APlJgO%2FRvC869RigfbAe5SZf5ZZVT1VFK4KxxYGu0%2BIjhEbPSJ92Y6IYfjcsSDvjEq%2BdXDXOtV0KixkoptLjL16XAUInZMFU%2BI%2BJLDbUUM2z7ST5XbphC57fjz0p8ttrv2%2BEJ%2BSZa5FoL2scT08Kc1QpmwFyII3kVSJhRBMgjDhLjSfWHbEzFLWWOW0rPopTcr%2BII4P2hnaGlmkEb9mBY0p3Xz8kNpb8ywsNjfn3gEMHAZBDaXTEAHOIT2qAlc9qOnY33wqKYoBmJQZjiH%2FGg0jebPgt%2FWBqlGUD5qZA7vEyvkkqwKl8aQpx%2B364L3FlER6mewYCwDN0PwF090xsSflyekd7G2ZSDVLEQh2EnytVK%2FubLI2STcXgQM%2B%2FQkZzt68Xxs0w7enHR5vvIdMjDg0lj%2FpFSL660nGqeJPsvfsl5Wa8t5YLd2Cms0Og5r80dy%2FXrAAK6Zr8zOKOlGf7xy6diBAJZnFS5TRs%2F1zOtMoKutQ1cA2xAieLxBCdaKLctYbl30sTRmiIvB9LrbDlX6C28J6%2FpvT0M8iSGwQNAIodlasOO7nPSzWB1yVsXskTAFb2gJghKF7wnQOUrxB%2Fy50x%2F0v8E5j7OuZiqHjc5xNUacS36n50HVnhXMcaTCN7IfBBjqkAfd23vjRvePP8h328%2B0bTHKjnzLjXTwt5rrLomSKxajEsk0mRPha2OTKwJrYcLKma4MKYi2nEiSlDcfBH%2Fseg31qBAJaNMBrDETDDXL7yPVBqpUDfjUB%2BSu3RLOuYCWx2okLTkSxK28VoglQs7TOplJTmEeSwFx8r%2FCygsWeDZsG8N8ewnFl21wdprnavmojjHaKbmY6oP2yhA%2BX64WIQe9KB%2BcS&X-Amz-Signature=1c87bfb23394a7e9435e450643b09099ce9797d574c375c5be02591a985b0168&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
