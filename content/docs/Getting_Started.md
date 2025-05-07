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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVWKQO4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgJ%2FyesODTl9bFh68kUOPNvBux68F%2FTRRqpWbwmH9h7AiEAhuW2wGIafPLmVANRZ92VdagXhBvaotb5jXgo7JiMVSkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIUzTOJAmbVqNAhjQyrcA4i4%2FBABTCEXLulg%2BxMRn7JbUX9nocsE9tPi2ddny%2BddmhHfG3HaDzeb4T3LVTFRavFHDsaNNploPV4S4hXdS1SEzBxIzHfvTj2SYB07JFpHB1DKtHiKNvNALxWo0di13P8Wr1kqPzJv%2B46kc%2BwBNhWSsPR0h6PKUga1zXrhOIbIRRCS%2BFH2ZsGwpW9%2BZlHUn3FGyGWLuVm5WhdtSwvJTFdNh8sqwaOY39819LrQ%2FGMHTpOzgVCv3V5k60jbgeYYvg6JWI%2FWWiiWAmD4fRI7qJfQEx%2B3OnQX0BLhBuTTgkfw%2BEwjwaHgky%2FJXymOmCqwo6VN8bBueLoRRtgV9oHqa1JwnSqjxf8KlDrR9fP6U3g5V1Y7wiGw2E0VcYheHRY1tnl5nGqE%2ByXBAvl3k0HvfWMQO3FdCeHJghjwLrug93%2FUBzDK3in6JEjzLt%2FBdhWcugg%2BSFVS99EJ2t5jIr0hMpC62aU4K3Kd4%2B3t1VNDgBe2Ch7nkBdoAWhuwzUA%2BxbcRvuVc12vzyOrJGKzhn9THc0UjQXtCBEPw9dltoCBFRDVVf8hPQDxj9pkaXA7Qq4iquy00zwll4wK31y4ondtiSubYkkwCpTN5WjdTUuldi5lIG5LlZS6Tk76CsbAMObp7MAGOqUBOZT7bK6srWFU9vmxrLfs7jmh%2FqYA724SihFbIeQg6vyMOhv71zi0s7r3qdgFXFWk5yPBUSGf4cn%2BqEo1VJUANDzgvoE45RmbvI0xNGM8wqQSDVDud9AJuOqpqhoUPv2a7QWmXXhubM5V8KtVxjO7TAkOXnkU%2Bue%2FvF2q8kCd9LeWfQFDFTczF5fAeWrczyz%2FDbvLUQrF3JId4lhQQl2C6yCfDSBh&X-Amz-Signature=214d1495f06788cee818237ff721363b937eec257d4f3f173166c0a5408f08cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVWKQO4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgJ%2FyesODTl9bFh68kUOPNvBux68F%2FTRRqpWbwmH9h7AiEAhuW2wGIafPLmVANRZ92VdagXhBvaotb5jXgo7JiMVSkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIUzTOJAmbVqNAhjQyrcA4i4%2FBABTCEXLulg%2BxMRn7JbUX9nocsE9tPi2ddny%2BddmhHfG3HaDzeb4T3LVTFRavFHDsaNNploPV4S4hXdS1SEzBxIzHfvTj2SYB07JFpHB1DKtHiKNvNALxWo0di13P8Wr1kqPzJv%2B46kc%2BwBNhWSsPR0h6PKUga1zXrhOIbIRRCS%2BFH2ZsGwpW9%2BZlHUn3FGyGWLuVm5WhdtSwvJTFdNh8sqwaOY39819LrQ%2FGMHTpOzgVCv3V5k60jbgeYYvg6JWI%2FWWiiWAmD4fRI7qJfQEx%2B3OnQX0BLhBuTTgkfw%2BEwjwaHgky%2FJXymOmCqwo6VN8bBueLoRRtgV9oHqa1JwnSqjxf8KlDrR9fP6U3g5V1Y7wiGw2E0VcYheHRY1tnl5nGqE%2ByXBAvl3k0HvfWMQO3FdCeHJghjwLrug93%2FUBzDK3in6JEjzLt%2FBdhWcugg%2BSFVS99EJ2t5jIr0hMpC62aU4K3Kd4%2B3t1VNDgBe2Ch7nkBdoAWhuwzUA%2BxbcRvuVc12vzyOrJGKzhn9THc0UjQXtCBEPw9dltoCBFRDVVf8hPQDxj9pkaXA7Qq4iquy00zwll4wK31y4ondtiSubYkkwCpTN5WjdTUuldi5lIG5LlZS6Tk76CsbAMObp7MAGOqUBOZT7bK6srWFU9vmxrLfs7jmh%2FqYA724SihFbIeQg6vyMOhv71zi0s7r3qdgFXFWk5yPBUSGf4cn%2BqEo1VJUANDzgvoE45RmbvI0xNGM8wqQSDVDud9AJuOqpqhoUPv2a7QWmXXhubM5V8KtVxjO7TAkOXnkU%2Bue%2FvF2q8kCd9LeWfQFDFTczF5fAeWrczyz%2FDbvLUQrF3JId4lhQQl2C6yCfDSBh&X-Amz-Signature=1db610493194095350ab3763e14d518c3f80f03d8cff073f9b7e7abc55e9d71f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVWKQO4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgJ%2FyesODTl9bFh68kUOPNvBux68F%2FTRRqpWbwmH9h7AiEAhuW2wGIafPLmVANRZ92VdagXhBvaotb5jXgo7JiMVSkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIUzTOJAmbVqNAhjQyrcA4i4%2FBABTCEXLulg%2BxMRn7JbUX9nocsE9tPi2ddny%2BddmhHfG3HaDzeb4T3LVTFRavFHDsaNNploPV4S4hXdS1SEzBxIzHfvTj2SYB07JFpHB1DKtHiKNvNALxWo0di13P8Wr1kqPzJv%2B46kc%2BwBNhWSsPR0h6PKUga1zXrhOIbIRRCS%2BFH2ZsGwpW9%2BZlHUn3FGyGWLuVm5WhdtSwvJTFdNh8sqwaOY39819LrQ%2FGMHTpOzgVCv3V5k60jbgeYYvg6JWI%2FWWiiWAmD4fRI7qJfQEx%2B3OnQX0BLhBuTTgkfw%2BEwjwaHgky%2FJXymOmCqwo6VN8bBueLoRRtgV9oHqa1JwnSqjxf8KlDrR9fP6U3g5V1Y7wiGw2E0VcYheHRY1tnl5nGqE%2ByXBAvl3k0HvfWMQO3FdCeHJghjwLrug93%2FUBzDK3in6JEjzLt%2FBdhWcugg%2BSFVS99EJ2t5jIr0hMpC62aU4K3Kd4%2B3t1VNDgBe2Ch7nkBdoAWhuwzUA%2BxbcRvuVc12vzyOrJGKzhn9THc0UjQXtCBEPw9dltoCBFRDVVf8hPQDxj9pkaXA7Qq4iquy00zwll4wK31y4ondtiSubYkkwCpTN5WjdTUuldi5lIG5LlZS6Tk76CsbAMObp7MAGOqUBOZT7bK6srWFU9vmxrLfs7jmh%2FqYA724SihFbIeQg6vyMOhv71zi0s7r3qdgFXFWk5yPBUSGf4cn%2BqEo1VJUANDzgvoE45RmbvI0xNGM8wqQSDVDud9AJuOqpqhoUPv2a7QWmXXhubM5V8KtVxjO7TAkOXnkU%2Bue%2FvF2q8kCd9LeWfQFDFTczF5fAeWrczyz%2FDbvLUQrF3JId4lhQQl2C6yCfDSBh&X-Amz-Signature=b1f9e225f1fc4325878f51c330c93afe6e240b03d2525821290bcea69774c63d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY2I5MNS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO%2F%2BUjmcZkBF1JqQfa7RGwGO2ALHOCHQlkoitM1KFzKAIgXsotabalevs0VvJ4oLOAGhZnfm%2Bc6yQ8vclew%2Fdjrz8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPXiGBOiKn8Q21Kd3SrcA6Jnzvu0YzavSG5es5DVEUbq3F2fH2EveRujWBihCHHnQxs7fXIpKfQGB9OebVZrRYb9be%2BMlzlF%2BQpkVOyi8kDOjxDR5c3KIx5dBpR9kXbajKRbDnrfy4mP3Tb4V9R30Y%2F8%2BQlCscIlYKQrfBHoGJY5ffUepBVhsSRIl%2BcnVSKIOzDyVmBxS67rD%2BUHWJaDIjPg6hur1eyI2wHFHMSvI%2BSGBfWE%2FFsE49reKyreVAVQfcD4AJB%2FLzn0ZA49OdqCSqBm%2BZtQeXAK20pfSp%2FLqVLBMBjk20Psk%2BHpfWGQhfEvxECRUwN%2B7FcIB9b%2BTc1b74Dmm8dU0l3jUKHMR%2BcERTRgiQZxri9ChVn7KOi4DRCi49ar9ZijYZZ8mJq9ojFCDIKRk56afLLScJe5RNTUclORV0KBYDhbhVJqed%2FCnl99JHzxZdPWy1PCzE%2FnC8kf36PatLO2PIGtzzXezRCKv7MjlKfSpy1kxDijBdrPwxweJ8BCrGIf9mRp4NM9%2B97ofUw4cPkzS5jHdh8KgcKkpOpCEf%2B1sghkOk7dbGfBRCZfujcm9aEE3RW9FEJUYKVqG%2BobSy9HRh8I8n%2Bh%2FqWM%2FZa66WYY4MecMcBlz%2BUmaPzWLu9U3D9mwjI22COLMOvs7MAGOqUBJZyTWffdpDWOttwtTBkLI%2F4w%2FSNCCzlIjFRmZ%2Ft4SF5oUUIrx%2BKp2HUtAuQ%2Fy%2FzY5pgX%2FlVr8%2BTHqm50F56VhTB3%2Bnbs%2B6JR%2BLx9qAuk407CB4C8UP1cX2IkDuj2gjv72AoWofP1x8tS0Jafpm6Z%2FC8Y5FHqy3anbJ5pDrvBePOpsBPQd9KkgFc7extmqUAj3zCJYJ%2FUJQCVyOlHUe6Bj1MhbPdG&X-Amz-Signature=e172749a35ba6c8db69dec5355df0e3af529066b7de8757c0f8273df5471c980&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XWOI6C%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVBSSWVQzWIj6CyGoTgM6TMAalXpPgcsg1Gac0UK3CiAiEAzln3nB%2FGSqZedLC16lsP83b3QTGZfUDccR9MeRDExYUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNgcJ6V4rMJNg0D2ZCrcA3MeRoBlNwqEt74i0BX6RQ%2Fb2qv7tqDqtAkLrxA5DjDBzaiByi9W9TatOHs36Z4HlEoHA%2FlmLs8wuPauRkuV4whqqHpzTJLIRzMWEKNaU4hCvXiFo6RaPXw1bzgQ4k4PnDIEreoVU9BudjOEX07nZS5JNbm62GTYS5JE0BxK0s5fUJPQZHcdXiSNXE0bpPfl26xoERtVcorZhj%2B4HURq1sMQPJBtDi7c23Rdz49EKA%2BXrh336xhnx1YOV3LhXckNBvkVdULaisSPmulUCeA5jWeFGozbWWRs1ccHKbcC2wMy0baAOhADExLmLy8reJ6ggOHeiH%2BY9uTvNqYApOZdG%2Fy1C4Ks05C9NaZXGEN3PqT0LRqJymbGX8qfnIsZa9NjvPfbwZdD2cmG1P0LqrKU%2BzyQ%2Bc6uWq8Q240kX4jm9CkjBUc14T5jf0vgKzbuHfrJ5fGp7RzbbUQE22%2FTGDNMeTDHFRiY288DuPaNKhKpELUXD7GI5lrOvbcFBVKi2E%2Fr7JKIUVaos9IAPiTbKVRdIhwbgQ5KTZDDZISNDCFDhrgguCyXYPoqZcs%2BPD5tYyue180pQyHr1wCQvYbrZpiih4PZKxa%2BHHpwzpH147effy7XBP%2BjCLskTaYIoSTBML%2Fp7MAGOqUB%2FZfdzRgjxaox2yp0QnAbH44%2Fsx9INEuFDRNoHSUzySzFeVkQtSL4W4nnseNXKmEQtwSYSkPM2MTEi93NwPSKaLJgZUvVahcL7mdjCV2K9dJpdcFe5j1t2EwcteTX%2F261iFLyoXh6bptXhzcHaj59%2BznqXwfW78%2BK8NPDg7ygcLn5FB15bQ1jFJarjUAylg3LAKteKkebMBdkTbbLfZf1M4qmqohV&X-Amz-Signature=7f0b455fcb28a69920cbd4bd1bbc47eb2ae18a80a0349686a0fb205e09932ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVWKQO4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgJ%2FyesODTl9bFh68kUOPNvBux68F%2FTRRqpWbwmH9h7AiEAhuW2wGIafPLmVANRZ92VdagXhBvaotb5jXgo7JiMVSkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIUzTOJAmbVqNAhjQyrcA4i4%2FBABTCEXLulg%2BxMRn7JbUX9nocsE9tPi2ddny%2BddmhHfG3HaDzeb4T3LVTFRavFHDsaNNploPV4S4hXdS1SEzBxIzHfvTj2SYB07JFpHB1DKtHiKNvNALxWo0di13P8Wr1kqPzJv%2B46kc%2BwBNhWSsPR0h6PKUga1zXrhOIbIRRCS%2BFH2ZsGwpW9%2BZlHUn3FGyGWLuVm5WhdtSwvJTFdNh8sqwaOY39819LrQ%2FGMHTpOzgVCv3V5k60jbgeYYvg6JWI%2FWWiiWAmD4fRI7qJfQEx%2B3OnQX0BLhBuTTgkfw%2BEwjwaHgky%2FJXymOmCqwo6VN8bBueLoRRtgV9oHqa1JwnSqjxf8KlDrR9fP6U3g5V1Y7wiGw2E0VcYheHRY1tnl5nGqE%2ByXBAvl3k0HvfWMQO3FdCeHJghjwLrug93%2FUBzDK3in6JEjzLt%2FBdhWcugg%2BSFVS99EJ2t5jIr0hMpC62aU4K3Kd4%2B3t1VNDgBe2Ch7nkBdoAWhuwzUA%2BxbcRvuVc12vzyOrJGKzhn9THc0UjQXtCBEPw9dltoCBFRDVVf8hPQDxj9pkaXA7Qq4iquy00zwll4wK31y4ondtiSubYkkwCpTN5WjdTUuldi5lIG5LlZS6Tk76CsbAMObp7MAGOqUBOZT7bK6srWFU9vmxrLfs7jmh%2FqYA724SihFbIeQg6vyMOhv71zi0s7r3qdgFXFWk5yPBUSGf4cn%2BqEo1VJUANDzgvoE45RmbvI0xNGM8wqQSDVDud9AJuOqpqhoUPv2a7QWmXXhubM5V8KtVxjO7TAkOXnkU%2Bue%2FvF2q8kCd9LeWfQFDFTczF5fAeWrczyz%2FDbvLUQrF3JId4lhQQl2C6yCfDSBh&X-Amz-Signature=7aa903c0e565f210fc5dbc68ed1ee2287c9a082e83c69eddc1c16a9311446b26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
