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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQ7N5L3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnB4%2FkHkAnKivTFvyA5XcKqAdbVHlkgaSv6xIxEoZ88AiB1qp3lQ%2BPNyB9ZGosABr0zG4HG6Gf9AF2UtD2nfAGDfSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VG%2FeWPvpBVztujTKtwDbUNfLQ%2BtuID2NuyqE1GfF5MHaeJ66ZHSoHsTAH%2BvbDDd6pt8NGyRIS4i2gYyn8U38z1PORNfKPzdI73cDUq52BCX5t1y%2BKAVjkHXCXx%2FRsWuL6rZ2xpqTGGro9axqs6Elizz57iV97qmZlAhxl8ok1lSdkYmv5F0O69Wm5Gj8uhj4Fv6UEoBw%2Fm9l8zG%2BE%2BqWdgNcEEaGOii1ypn2RheV7HTb%2BuplWgS2Xhe%2B%2F9jrdXm17wk262AiLb0KD4VO2vnKo%2BOlyVZGAr2qLIeWYSrOefDTKM1HkNuwj0eYP4Qs%2Btq1pFqj6tu2Cv5Peo6TY9%2FTCKUFI1Z%2FeVxGOHYMXITJV%2FnyP%2FqNoLfIOArq5lFCzGYG1C4flkVNRtRducv8ENltYoUaDmI%2Fe9lRRFTTTlg%2BZYDv8VbbNjwziB1tTbByhLKwBtVgO1GkDYZVm5CQXxmNN5DAkZ1RhN1bSLxCHC53iVgShJtG4JtL%2BoD86kwyuWmKxKY3UYDzRpZpxHEjKAD04izq%2FKacgJthEDLgG9TkidgFJi5HdwSnoau2jqA5jJPwUkdKz2kdh4IY5y7P6TWilveoxi%2BQcQWEn1oeRvKRns4bcRK0ovabihm8D6598RYT1fP%2Bdtskvws0DUw6vuMwAY6pgGD1l7wOU%2B9YRoKtmSdN0rrBbEuoBIY%2F0sT38iBOqOyIO4fb8FbxUebhsVaXQzSSWvqF8U4HrRBL3nmtisgdESgQMfyexzlacIBBvRoBLAfLbNqywik%2FNheDjy%2BsELOq1XDEf9qoO7%2BDr03JNu4HA2trrrFDBbSQ6Vqa0dFAu5w7k7GEQuybAWiP8OdbzlTrCoyPySLAIrB%2BYM6SBwoNDV%2B43Csc4mg&X-Amz-Signature=5c65353e73fbc79a44c0c3cb554fd5f81042d5c4e15e81d5267c6964baad0f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQ7N5L3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnB4%2FkHkAnKivTFvyA5XcKqAdbVHlkgaSv6xIxEoZ88AiB1qp3lQ%2BPNyB9ZGosABr0zG4HG6Gf9AF2UtD2nfAGDfSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VG%2FeWPvpBVztujTKtwDbUNfLQ%2BtuID2NuyqE1GfF5MHaeJ66ZHSoHsTAH%2BvbDDd6pt8NGyRIS4i2gYyn8U38z1PORNfKPzdI73cDUq52BCX5t1y%2BKAVjkHXCXx%2FRsWuL6rZ2xpqTGGro9axqs6Elizz57iV97qmZlAhxl8ok1lSdkYmv5F0O69Wm5Gj8uhj4Fv6UEoBw%2Fm9l8zG%2BE%2BqWdgNcEEaGOii1ypn2RheV7HTb%2BuplWgS2Xhe%2B%2F9jrdXm17wk262AiLb0KD4VO2vnKo%2BOlyVZGAr2qLIeWYSrOefDTKM1HkNuwj0eYP4Qs%2Btq1pFqj6tu2Cv5Peo6TY9%2FTCKUFI1Z%2FeVxGOHYMXITJV%2FnyP%2FqNoLfIOArq5lFCzGYG1C4flkVNRtRducv8ENltYoUaDmI%2Fe9lRRFTTTlg%2BZYDv8VbbNjwziB1tTbByhLKwBtVgO1GkDYZVm5CQXxmNN5DAkZ1RhN1bSLxCHC53iVgShJtG4JtL%2BoD86kwyuWmKxKY3UYDzRpZpxHEjKAD04izq%2FKacgJthEDLgG9TkidgFJi5HdwSnoau2jqA5jJPwUkdKz2kdh4IY5y7P6TWilveoxi%2BQcQWEn1oeRvKRns4bcRK0ovabihm8D6598RYT1fP%2Bdtskvws0DUw6vuMwAY6pgGD1l7wOU%2B9YRoKtmSdN0rrBbEuoBIY%2F0sT38iBOqOyIO4fb8FbxUebhsVaXQzSSWvqF8U4HrRBL3nmtisgdESgQMfyexzlacIBBvRoBLAfLbNqywik%2FNheDjy%2BsELOq1XDEf9qoO7%2BDr03JNu4HA2trrrFDBbSQ6Vqa0dFAu5w7k7GEQuybAWiP8OdbzlTrCoyPySLAIrB%2BYM6SBwoNDV%2B43Csc4mg&X-Amz-Signature=0f47f5a1ca2f73fe105d15f4448a9817fcf7e2fe4c10e26c86f0c2a8bfc14dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLAAWDZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9LbfS78m2y2jlNZ1iOVqNGSqhPN%2FXMExrZ%2BUfEcdEOAiAsJBwyky1rYr54GDtjOFMqagGQSaSvrMoJvQzF7xaaqyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWv%2FHDLn5WyV7uDNqKtwD7vUJ8visBm3nTFRVS7G1CpVzi2%2F3gP9v%2B1I6w7%2FTdP2XA7eVHbcrUG%2BexXXqLP1bh%2BWZ3zpGviUQt4R17kodMH9b5PUAo0S9DHK9ucQaz3svqoYkT9Bs3b2jKTWK%2BDXOqNnK%2FcSKx26rr8g7OdgMXb0BZu0yfTad%2FaC2MO%2FK0KEwWChHew%2FBdS5Kl%2BP9HF8wIzm6EbfNSJluKoiVwDu2PkhoD88pvcnrxObQyvXIlfGAeJ1mlKgBqCR%2Fe85Fn8YU%2Bg%2B74PTnlfJjPpJljPTLp%2BZihS1LMQWJc0iPcavF77z0rLL5LTFv9Aizm5xxJWAAgg8Du9HmIWVGuUoK%2BYDxdCMWIFMlwA7jMZQcgnBZWGjKGDxRra6Dx%2Fs1biJUnXz5YTDesmjZHS8lHJEmV2VA5pOj3rzmZqE6cj115xtU8fu5Slu%2FmQJvfUlo8PcabfJcR2iS7H02OzSWF66YbekErmOEkHaS1yHXqR3YyLkzj7zzivNKFqVyIr%2FJkF8teJby1ARodhl9Pilqah6CnlefXpMW4mQ4zeCIHhjRh%2F%2Bq5J0XXGNg0IHB0voJMQ1bCUa6S%2BguzQVa9rImSv9FOPV7eOS3nMtuQlB5XRUowD1EfBAjkVC1JFaJjv3u9MMw%2FvyMwAY6pgEAWc9RCZ117Rl5b8plwK7MAnYG52LkXCvqxZUmtIpP8PWJcev6rVAMNNldSuvuhTxlVQBbbs7oe23tzij%2BZ%2FUU7gEznb9G7gIwe3oiAODDL4eu66QSL%2FIuPfMmHC7w8EGl%2B3pYtxqVJb8DOOUvN2mYnblW0QPzNfQ2xoHfiRPRn4gCZHfHC6msUqZYJvKpeWaNJHW%2FKPnXRIu4i2kvjOhk8YXFQonP&X-Amz-Signature=57fc5bf27443fa77abb2adc8dff87520e796cdd858120a748e5734af43370fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WZY2JE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0GiqivinAgAcHpzJ8p9p%2FiTbTl0vO35eqzQI6MiZLagIgZ0OF0%2F%2BzGtZcKKx62UGDeynBwkDP4MH1y8cmtmpregEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGd9qCvuBTUuD9elCrcAxVKNP7oEuU2UOR3qhCUM5MvOS962%2F93TQCiQnUoUGpJphbOErAUUWoY1ku3UjipFfNuBlV6gLs7q9g%2F9a8Z1EE2bsNSmeY8C%2FNscBz3uukVOnhae%2BWVlpoow7hU%2Bjgo%2F1CkecBYVnfD4IiqmqeWxEHXXfdqWwZzYJsxz4EfNazv9r4lZU3V401OcnoQa9Cty1oG2kf0%2FHKAFrIZARpf3GVswN3N9GfCNfvxSrdMHkE11yYZzggMcfgPMNan7SB8Z4crHy69RRX87%2BPJk4G8%2By3Dfw39QQlNAA5%2BseCozmLKJ7EKR13nxg5gcWuOHtPs%2B%2F2ErlKkz360YooMtJo9TUS2kxSxK55vYvrCu%2FGtodWg7bNWFqRRJtHmIpDJ90n4jXHottxnyJAdDzRv0DtgGlL%2Bz3qJBwlV7sq%2F1AqcvRt9RW%2Fs3uAr2VuU4orgTcwer0gi33e60NqUE8P3%2BtFAgXjNbPHCJfLOhq8Grak9Kr2TajN9PoyLAwZvuN93H4zEac6DbOMGIOyO1uT4yCMOlGqC45AFSqphT1Y6V6M0iHXMzF%2BV7kBYfS5Ff6WMlJZt0GwyXC1mBw4CA05xHG%2Fu0It9lwmmqtI%2Bi7H3EL2WkH%2Bk4ikVrVLjTm4aNVnXMIb8jMAGOqUB1qvcI7lYUgRpxB8QyFz0lq5aey8CFBquNaZUlMW1rK8H3mbBHqJwZMVGT5dWto3FAJiGFUqysMwK%2Fmx1HfHGqlUlsISo5M9aWp14qlSNhgpV18a2%2BwSEPuVL7kr4WlCvn%2BWT2C%2BEdp%2BXnNuTVK%2BEgyQAeI4raHi06w0AoX9MdAzR1rfCu6Z3%2BEPYCgWz7h3oDk8U2L6s6vDc94dsBUc0niah76Tq&X-Amz-Signature=cba9e66e0f1f0473098f9eb2f23fc9b24ec3076729bc2b737c734586ac3e0118&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQ7N5L3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnB4%2FkHkAnKivTFvyA5XcKqAdbVHlkgaSv6xIxEoZ88AiB1qp3lQ%2BPNyB9ZGosABr0zG4HG6Gf9AF2UtD2nfAGDfSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VG%2FeWPvpBVztujTKtwDbUNfLQ%2BtuID2NuyqE1GfF5MHaeJ66ZHSoHsTAH%2BvbDDd6pt8NGyRIS4i2gYyn8U38z1PORNfKPzdI73cDUq52BCX5t1y%2BKAVjkHXCXx%2FRsWuL6rZ2xpqTGGro9axqs6Elizz57iV97qmZlAhxl8ok1lSdkYmv5F0O69Wm5Gj8uhj4Fv6UEoBw%2Fm9l8zG%2BE%2BqWdgNcEEaGOii1ypn2RheV7HTb%2BuplWgS2Xhe%2B%2F9jrdXm17wk262AiLb0KD4VO2vnKo%2BOlyVZGAr2qLIeWYSrOefDTKM1HkNuwj0eYP4Qs%2Btq1pFqj6tu2Cv5Peo6TY9%2FTCKUFI1Z%2FeVxGOHYMXITJV%2FnyP%2FqNoLfIOArq5lFCzGYG1C4flkVNRtRducv8ENltYoUaDmI%2Fe9lRRFTTTlg%2BZYDv8VbbNjwziB1tTbByhLKwBtVgO1GkDYZVm5CQXxmNN5DAkZ1RhN1bSLxCHC53iVgShJtG4JtL%2BoD86kwyuWmKxKY3UYDzRpZpxHEjKAD04izq%2FKacgJthEDLgG9TkidgFJi5HdwSnoau2jqA5jJPwUkdKz2kdh4IY5y7P6TWilveoxi%2BQcQWEn1oeRvKRns4bcRK0ovabihm8D6598RYT1fP%2Bdtskvws0DUw6vuMwAY6pgGD1l7wOU%2B9YRoKtmSdN0rrBbEuoBIY%2F0sT38iBOqOyIO4fb8FbxUebhsVaXQzSSWvqF8U4HrRBL3nmtisgdESgQMfyexzlacIBBvRoBLAfLbNqywik%2FNheDjy%2BsELOq1XDEf9qoO7%2BDr03JNu4HA2trrrFDBbSQ6Vqa0dFAu5w7k7GEQuybAWiP8OdbzlTrCoyPySLAIrB%2BYM6SBwoNDV%2B43Csc4mg&X-Amz-Signature=4caac056bbc66f87877c275a43cce32fea9e3d6a060d0b782084beabf9addfae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
