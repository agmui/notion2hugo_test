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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDN7PCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCNyOsHM8pwjE9E35HZp81CQZRVHHLYpyX4TfTcuD0YAIhAJoErBvrtiuOy0188FzC7wcFKb%2BqQbyXPEqPhoBxYBCAKv8DCF4QABoMNjM3NDIzMTgzODA1IgxA7AjubORxCc3HbDoq3AOmXhVPv3vhQGoddZDsOcMXpCUhxfKNqtx2dzXZFhvrFa%2F3GwIaYVWr%2BrrVyOEiZc1Tl0suddxW4eNgMu2r3M7OisYW8MYdEsVZhN1Lv4WgeA0bqVNfLsLfuQzHLv%2FDZW1V%2BDfZwvwQWlXbB0ir59C12%2BQSZkRaSsD%2BWfIO1Fgrvp9TsRlU3XY44NwvSF8PGQXFaemZpIAYwaVjP0cvE6xHTGNAYpZPp5AzL7ZpaCnK%2FywmS65flq%2BU%2BbY2NNtJ10uZ4BxzTJrg9J1826riOeLxWJblTbAlb7%2FZa5pPg2qPhVZPGppy2aSm1g75hCfT7niuh1MDbV14%2BEtyDoPuakjVpHBnPXeKEMLFeWcRwReGGTW4sMe6xYbYK5k3PkDJTaieCHyHaYu1aXfCDRhxYqi%2FPT%2BlMbd0MUyF%2FAKyxzyTfTDDnUthgt3idM5InPBiyj2xvO102O%2FSSR0ntFlEsU2KoXnEvO8hCChJAlBULjHuYleLHWGOlaCLOG0YXw6uusVnda7e8HvVFM%2FMuUz2mSlD%2BBL3F1Of5Hklymr9CqXR286eXNqxfUTaRU7O5YhgC2uKLNYd54%2FRuPj3CQKIMQoDaom3r%2B%2BkVjeTqPnaSCoC7i5jv5qkev60ymC9YDCMvIvCBjqkATSx8KNMnZEez2n%2F%2FrEU1R6k5Agm8iYraSAXj%2BgrRDSo%2BcVQHOqsIkhHbf%2Blq8OBwobgSTtkJAXRlsZkWdTWYoiTnh2VnT6uDbT1MKW537kxWLN4v4FzdC0qvs5hvpcxfsmJwqcdNCRWzb4lPNinyv%2FqcshzQQQid6u2R6DOQFnA3P3TUHo1uSzazq9TN5%2FxjDBi09DdPQ%2FwJx0bXw9tRyZjj8uw&X-Amz-Signature=253732853e83791ea18a9ec6d6bf8d1e25e95a9eba0a5f9ed7672ffa12b542dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDN7PCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCNyOsHM8pwjE9E35HZp81CQZRVHHLYpyX4TfTcuD0YAIhAJoErBvrtiuOy0188FzC7wcFKb%2BqQbyXPEqPhoBxYBCAKv8DCF4QABoMNjM3NDIzMTgzODA1IgxA7AjubORxCc3HbDoq3AOmXhVPv3vhQGoddZDsOcMXpCUhxfKNqtx2dzXZFhvrFa%2F3GwIaYVWr%2BrrVyOEiZc1Tl0suddxW4eNgMu2r3M7OisYW8MYdEsVZhN1Lv4WgeA0bqVNfLsLfuQzHLv%2FDZW1V%2BDfZwvwQWlXbB0ir59C12%2BQSZkRaSsD%2BWfIO1Fgrvp9TsRlU3XY44NwvSF8PGQXFaemZpIAYwaVjP0cvE6xHTGNAYpZPp5AzL7ZpaCnK%2FywmS65flq%2BU%2BbY2NNtJ10uZ4BxzTJrg9J1826riOeLxWJblTbAlb7%2FZa5pPg2qPhVZPGppy2aSm1g75hCfT7niuh1MDbV14%2BEtyDoPuakjVpHBnPXeKEMLFeWcRwReGGTW4sMe6xYbYK5k3PkDJTaieCHyHaYu1aXfCDRhxYqi%2FPT%2BlMbd0MUyF%2FAKyxzyTfTDDnUthgt3idM5InPBiyj2xvO102O%2FSSR0ntFlEsU2KoXnEvO8hCChJAlBULjHuYleLHWGOlaCLOG0YXw6uusVnda7e8HvVFM%2FMuUz2mSlD%2BBL3F1Of5Hklymr9CqXR286eXNqxfUTaRU7O5YhgC2uKLNYd54%2FRuPj3CQKIMQoDaom3r%2B%2BkVjeTqPnaSCoC7i5jv5qkev60ymC9YDCMvIvCBjqkATSx8KNMnZEez2n%2F%2FrEU1R6k5Agm8iYraSAXj%2BgrRDSo%2BcVQHOqsIkhHbf%2Blq8OBwobgSTtkJAXRlsZkWdTWYoiTnh2VnT6uDbT1MKW537kxWLN4v4FzdC0qvs5hvpcxfsmJwqcdNCRWzb4lPNinyv%2FqcshzQQQid6u2R6DOQFnA3P3TUHo1uSzazq9TN5%2FxjDBi09DdPQ%2FwJx0bXw9tRyZjj8uw&X-Amz-Signature=a48e548c9ddb42fd0148b6f626cdbc8ba33abd21bc7ff01c7425d3bea02583c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDN7PCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCNyOsHM8pwjE9E35HZp81CQZRVHHLYpyX4TfTcuD0YAIhAJoErBvrtiuOy0188FzC7wcFKb%2BqQbyXPEqPhoBxYBCAKv8DCF4QABoMNjM3NDIzMTgzODA1IgxA7AjubORxCc3HbDoq3AOmXhVPv3vhQGoddZDsOcMXpCUhxfKNqtx2dzXZFhvrFa%2F3GwIaYVWr%2BrrVyOEiZc1Tl0suddxW4eNgMu2r3M7OisYW8MYdEsVZhN1Lv4WgeA0bqVNfLsLfuQzHLv%2FDZW1V%2BDfZwvwQWlXbB0ir59C12%2BQSZkRaSsD%2BWfIO1Fgrvp9TsRlU3XY44NwvSF8PGQXFaemZpIAYwaVjP0cvE6xHTGNAYpZPp5AzL7ZpaCnK%2FywmS65flq%2BU%2BbY2NNtJ10uZ4BxzTJrg9J1826riOeLxWJblTbAlb7%2FZa5pPg2qPhVZPGppy2aSm1g75hCfT7niuh1MDbV14%2BEtyDoPuakjVpHBnPXeKEMLFeWcRwReGGTW4sMe6xYbYK5k3PkDJTaieCHyHaYu1aXfCDRhxYqi%2FPT%2BlMbd0MUyF%2FAKyxzyTfTDDnUthgt3idM5InPBiyj2xvO102O%2FSSR0ntFlEsU2KoXnEvO8hCChJAlBULjHuYleLHWGOlaCLOG0YXw6uusVnda7e8HvVFM%2FMuUz2mSlD%2BBL3F1Of5Hklymr9CqXR286eXNqxfUTaRU7O5YhgC2uKLNYd54%2FRuPj3CQKIMQoDaom3r%2B%2BkVjeTqPnaSCoC7i5jv5qkev60ymC9YDCMvIvCBjqkATSx8KNMnZEez2n%2F%2FrEU1R6k5Agm8iYraSAXj%2BgrRDSo%2BcVQHOqsIkhHbf%2Blq8OBwobgSTtkJAXRlsZkWdTWYoiTnh2VnT6uDbT1MKW537kxWLN4v4FzdC0qvs5hvpcxfsmJwqcdNCRWzb4lPNinyv%2FqcshzQQQid6u2R6DOQFnA3P3TUHo1uSzazq9TN5%2FxjDBi09DdPQ%2FwJx0bXw9tRyZjj8uw&X-Amz-Signature=6272e7b1e5b5d0adeb140e4700a4674cac8510130fafcba0ca0f6ee4660e48b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXIVYNM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN82k3sL%2BTx4d%2F0LE1nNWJHUMu%2BCqY77dnR1rzArNGNAIhAPYcGL%2FfRCn82jHY%2BCxgOaKJPYfo916%2Bv5Lk03LblFIxKv8DCF0QABoMNjM3NDIzMTgzODA1IgyRLGYwQBgbdKUJLE0q3ANlzWWWKXH1YoGywA1OH2nH%2BYyRfSjUGc2iYXtLz8Uw%2F%2BoGu88hKXW6syP1%2BpZMQTGnE1WyovKQCWY%2Bk4unV%2FSUqX23DpQFmgLzUMnclgGsWF8XWoB%2BuseOr%2FXR9ijHBKuYWhxO5GYA5%2Ff86Jzzkwo2uXB%2B6p%2BLpGV7fOOzEYDRfybVztb4QYcY3qStIGQxA1YgCWFrnIS3bRfLEDwUDZ7VGrMtXtQ9jRaC62MIQrgVG7R5f%2BJjULKATNYDswQTs1a9o6L6wQLeEvRNbq%2FkFrRfbt%2BPKDPH7wcDzreiQVcW25nz7wYFJVOZuegdQL2eBQx9DJcozf2Cc6xxf3%2Fg5LqvKS4ODOov2tPa7FBOXn75Y0jWs1jcw6J1PCNEpNIfLMQarjIwt7XoRhLtTHD8qnWxkflqaj94PezMUnyViWQczpUxTP1XpWf63I%2BTclbTb7Paym8Il0j37xGxJCZHiH2iv80ft8MN6sUtjjqsdYluri8hononBsNwl7qUmMUQ%2Bverow0ZhmYKTJyjc%2BqRvsP9XGmDPz4u%2FdsVlURi1Xs4wtt37t7bBXNFTW8142mZKE0oVcBLneccRaHWAXD09yKUrpuKhvYUhQUzGwCPGouTPnEdzGKiHGTqic0R2jC3vYvCBjqkASQXYyC7eR9i4%2B2V5Oy69lCq3gWdgkKN1tmlvzZAgrdG6IzSNT5sFO6fAUTRpgUMTB%2BWDl60qyzWlT9sqRCf3IpmgAdaLDnPZpUkkzRJ%2B7TwkfI2RWLfrLctRfrWeOavPL6zNzvh6fCFmjHx5AapP7P6SuhAbZF5ia2wC4dKs4y2G9hxiF1KRT%2BsDlldANwBAIK2VPvTc0FnVGKs5rD04icKDNyS&X-Amz-Signature=e5e27ac9c25c442cb8f583bdd3e6da1c3ad8db4478685d2e0ebb223b30b49831&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633WM7BZX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmuNjyIXBg0wyweGFK6Eo3YUN33MSPictZT7%2FqIrxGcAiBLW98i2QOmipinvUvkahTypniYPkzlYrzrquGaNCaUqSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMySMUrqgliNPToWXIKtwDG3y0MNNMqhtfIn3SL9SZQNTki2YmHwxfRLzCiE0RTXwgYnmmBa7wo7oMx3ufAmnok3rf1yi9bcr7blOyTWKms7b5pvhz2rHHb6CoSyRG7eAXMTzIl7OXqNAYwdF2ZErLcC9DvFD5mdEogONxkZY8qNZnmu6gvqGcMUIoypkelJVGIiaymDJ4pDAPA1qe1S2G3bJIBXPg9GhPrCDQYrCvvlu6P%2FP5H7Up8xJrVXdwiI0DJej0MUZXuO5KCG4BSgNoGamxNgWTBNx7ufwt1yp2%2F0k24zjTsEG5cSEGwVa0yQfKY0%2FD3Y0spacqv%2BSXKVG87k9HeocOjmyDAWWjhNdDoV7GEc6GlDDUaaU4%2FtdbQTUSudBU5ck0sPxiggSdtuyq0tHoBN1PBqDmUyN9jwGpLe6SQKgH4liLjwZDiuMY0wzC0j3MgB9gXUvKy46yyCVn8xEhZp5i5Tj1ETIo%2FtuPpj7ipv15AWnh2WIxgtrFLOxyrMLY%2BXXB0lnu5PY%2BHRdxjeIGs8uVpgm3ZPNV5gx%2BisziDfsu50rYTV%2BwY9NDwDfE2y%2BLExe9yVYe4FiAT8BEA56xZxouFbrqZlu%2BemfqJZ4G5eLDhmqICaKUmQ80q1twltG4NcyHMZkbRhIwxL2LwgY6pgF38bV6LnchJ4Er6ZLIkxXUpqwt2ou8ZFGgvaaIwVbOB70stPkJ4sw7C7oQrBpVBNG3BLP72nd3w2qYtfpUeaXjbEzm1CNFrjnyHt1nCeGn9mbz1RAIRJA2Nxd92KTMExuCfuRGlHudXRCkNNdXYFwh0UEizpCLd86cSvzhf6uyhnUeDaSeivc1Kymu6nE%2B7qcqSJLiI9JAWTGUUIrwVQSeyQ4gP%2FCS&X-Amz-Signature=e5d723b68a69c186eee1295da713924233ca5f43d5b3e030a248a7a7af5e822c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDN7PCS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCNyOsHM8pwjE9E35HZp81CQZRVHHLYpyX4TfTcuD0YAIhAJoErBvrtiuOy0188FzC7wcFKb%2BqQbyXPEqPhoBxYBCAKv8DCF4QABoMNjM3NDIzMTgzODA1IgxA7AjubORxCc3HbDoq3AOmXhVPv3vhQGoddZDsOcMXpCUhxfKNqtx2dzXZFhvrFa%2F3GwIaYVWr%2BrrVyOEiZc1Tl0suddxW4eNgMu2r3M7OisYW8MYdEsVZhN1Lv4WgeA0bqVNfLsLfuQzHLv%2FDZW1V%2BDfZwvwQWlXbB0ir59C12%2BQSZkRaSsD%2BWfIO1Fgrvp9TsRlU3XY44NwvSF8PGQXFaemZpIAYwaVjP0cvE6xHTGNAYpZPp5AzL7ZpaCnK%2FywmS65flq%2BU%2BbY2NNtJ10uZ4BxzTJrg9J1826riOeLxWJblTbAlb7%2FZa5pPg2qPhVZPGppy2aSm1g75hCfT7niuh1MDbV14%2BEtyDoPuakjVpHBnPXeKEMLFeWcRwReGGTW4sMe6xYbYK5k3PkDJTaieCHyHaYu1aXfCDRhxYqi%2FPT%2BlMbd0MUyF%2FAKyxzyTfTDDnUthgt3idM5InPBiyj2xvO102O%2FSSR0ntFlEsU2KoXnEvO8hCChJAlBULjHuYleLHWGOlaCLOG0YXw6uusVnda7e8HvVFM%2FMuUz2mSlD%2BBL3F1Of5Hklymr9CqXR286eXNqxfUTaRU7O5YhgC2uKLNYd54%2FRuPj3CQKIMQoDaom3r%2B%2BkVjeTqPnaSCoC7i5jv5qkev60ymC9YDCMvIvCBjqkATSx8KNMnZEez2n%2F%2FrEU1R6k5Agm8iYraSAXj%2BgrRDSo%2BcVQHOqsIkhHbf%2Blq8OBwobgSTtkJAXRlsZkWdTWYoiTnh2VnT6uDbT1MKW537kxWLN4v4FzdC0qvs5hvpcxfsmJwqcdNCRWzb4lPNinyv%2FqcshzQQQid6u2R6DOQFnA3P3TUHo1uSzazq9TN5%2FxjDBi09DdPQ%2FwJx0bXw9tRyZjj8uw&X-Amz-Signature=0b3d93c67d6b5e3ce14d10962e6de5841ee9f723e837f27a42d421e55fedfeb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
