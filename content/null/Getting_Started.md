---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECNW6S3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC5%2F7bGeefAhPrPP9%2FzucTmrl5ShdHlDzd7rfsdt5QDzQIgFAv%2FyVlb0Y8w0FLVPJoyDiYYnP5Ns6HNQ6kRTWyGEVoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNpVcVkJqtUpZC97JSrcAzW9pZieL6Ymjdrrhxp5kLQjpIYwX48GawLkLUeBnmvpIUhMWt9vgB7ZCeIHPvOTTsDDEH65J7zKCni5LLzYhIthwPNqM%2BhoEJw1vR4yPwmkyIKGCcpqkfPq9%2Fvq65ArT6kzd8giKeAEvqrsQCLZd5tdl%2BwviOI9%2F1TCM9g3LdWgXfG3h3QNlLT8TXLCzU8AOVIspqxypvDvjh87jWL1xsH5jY0Ln6WeexFrPDn4uOHcc6f9BSbXMTo%2BCBpLdstoOKj%2Bt8mNp7oMnD0GzYIuyN9JDynbSk7g6vmx99QJtsrYZU2Ga0XmAy8N7SY3xIZSi3sv9%2BMSyHfKQADeW9WUv9t5NoEzkOljZVUk8RpNLMv8pJ0iJ59J6aFBgAYdIKQqqW5%2FzowmHyYgk0Fv4uWC8rcBk%2FD%2FWP8rJyfbtkd3vNLxGRRtW91qmTh4NSzGgg0DpnbsvKMu8TtnaiHRGzeZ0U%2Beo4wV8GwQrg7EDeeChmwM9PgWBdOlG5pJz7q3KGWKYw%2Fal5PR2xZ2UdgSBRAYdrtcvhq%2FWG5QkCM74Tc6kQeZ9egVY1uDMIAoXINBm9xoUJaDoZWzakwgtRZR14YA%2Fi92%2F0ssmtvAGEsjoIqwvuqtWzGJXfSgueIQh2NwML7Pir0GOqUBrqwWPuDdCU74IXR8mJSNBh7%2Biw64EsmQOoujsBPbV5qlT2txW4jyzXQrKlNwNNsztZ%2F7p2ciZMcD0kMZRy%2FzERNP4w%2BxJLdWepsmTzw71FrvweXAoY9VWmUfP7jXN05jpQeQXMoQCwfBTGWtI0YzGLlYK0JSzUelxlqoZ7p7DDv33wAedzsnNp%2FjFr1t9Ql7SxXZdj0xw4VWxaOzeUT6sboyEcJy&X-Amz-Signature=ce2883930352a90c397498d94b2c37a73c776fad6b7dae1188d364e91e3a38a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECNW6S3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC5%2F7bGeefAhPrPP9%2FzucTmrl5ShdHlDzd7rfsdt5QDzQIgFAv%2FyVlb0Y8w0FLVPJoyDiYYnP5Ns6HNQ6kRTWyGEVoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNpVcVkJqtUpZC97JSrcAzW9pZieL6Ymjdrrhxp5kLQjpIYwX48GawLkLUeBnmvpIUhMWt9vgB7ZCeIHPvOTTsDDEH65J7zKCni5LLzYhIthwPNqM%2BhoEJw1vR4yPwmkyIKGCcpqkfPq9%2Fvq65ArT6kzd8giKeAEvqrsQCLZd5tdl%2BwviOI9%2F1TCM9g3LdWgXfG3h3QNlLT8TXLCzU8AOVIspqxypvDvjh87jWL1xsH5jY0Ln6WeexFrPDn4uOHcc6f9BSbXMTo%2BCBpLdstoOKj%2Bt8mNp7oMnD0GzYIuyN9JDynbSk7g6vmx99QJtsrYZU2Ga0XmAy8N7SY3xIZSi3sv9%2BMSyHfKQADeW9WUv9t5NoEzkOljZVUk8RpNLMv8pJ0iJ59J6aFBgAYdIKQqqW5%2FzowmHyYgk0Fv4uWC8rcBk%2FD%2FWP8rJyfbtkd3vNLxGRRtW91qmTh4NSzGgg0DpnbsvKMu8TtnaiHRGzeZ0U%2Beo4wV8GwQrg7EDeeChmwM9PgWBdOlG5pJz7q3KGWKYw%2Fal5PR2xZ2UdgSBRAYdrtcvhq%2FWG5QkCM74Tc6kQeZ9egVY1uDMIAoXINBm9xoUJaDoZWzakwgtRZR14YA%2Fi92%2F0ssmtvAGEsjoIqwvuqtWzGJXfSgueIQh2NwML7Pir0GOqUBrqwWPuDdCU74IXR8mJSNBh7%2Biw64EsmQOoujsBPbV5qlT2txW4jyzXQrKlNwNNsztZ%2F7p2ciZMcD0kMZRy%2FzERNP4w%2BxJLdWepsmTzw71FrvweXAoY9VWmUfP7jXN05jpQeQXMoQCwfBTGWtI0YzGLlYK0JSzUelxlqoZ7p7DDv33wAedzsnNp%2FjFr1t9Ql7SxXZdj0xw4VWxaOzeUT6sboyEcJy&X-Amz-Signature=4b9107c95f615471c32afa3c905ee05d83005e34e6316542784536ac122a635d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DAALFH3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDgqosN%2Fjd%2FzhWReG0SxH1cSbHX%2FkPjHPIxc9Y48K92LAiB5SXmc7Txb1NEAUKwI9lEbw%2BdCGVJ2n3Ku0PN%2BSxic7Cr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQSJVrpYWaYPDCkvJKtwDflETyHxalbwTkhxBqpkvH42UkQGdBRZLvoZJxZSavS6NWO79HTWrbmch8Q5Xr8o%2BiYXSS7a4V9F6%2FhJx5HqEfccTSULEag%2Fai2yNwgGqDOy3UK7XKAeGTBu0mJH0C6Na85YQHtD20RHeEsIC7CUku9%2Bi9M0UHlRhdtB27Hq2TSu%2FnkCfgv7vkxIRFMnUA4aUX4sPT%2F5RbysE3gqAax0xQy1Z3Q6zURUO%2Bta5YoxK0BeWr62Xc4x5F7oABwolJZ8qXxZjVsYq%2FjXsJfXVI5u2tWoBr4%2FMtk1Kvf3G8CcRpZqM8bWSPmjqDgy1wql%2Fj4hmCazzccb%2BYNyEvbv9mUjSGSwt83Cide1CXU1Zwown5VA08un%2FHdq1HDP%2B4qr5AQH3sLqWDF7F8iqD5FmrDyk8DisplNGJv71oHCmJiWM7MPaZOH9RGInwPifCREF8FEYS5KE4EWqs1cS0lMQ5IwZ%2BoxwT1gq9eWsqnk7i1acqPQX26ff0r5WJe8Xr60V847MCc1HcHpWMGBiHk4MSDznFKhNO0u5k5ZWUuEyeAbHBGgVMuBa8GuX9FIcFBOLRdP%2FCqNv9ulQ3d8QuPYbfnh062V0VoniZTQqwAaZAC343rGfT6x9eGW0v9U6QMrgw%2F86KvQY6pgH5T20RbFeS%2FXbJsaCt%2FHp5R4qqLuQFT147qJuIlkC6TIGB%2FxHT83q4nisdeZmgTNpnwoEo7tvcdiQxAnHiwTEDq6BCu%2BfntSGKjCq4T6YQuIBWcp7qiBQkQXCKTKk33dy%2BlgDbSqzv6%2FxLAEnfhvBcqCjwc%2FtexVHa1dXJfZLR9ePApgloHRxsQ2aGDsDo%2BXj8hFOOFgKjhIC%2ByRcJyQlUPxA5mQl8&X-Amz-Signature=e8a16fae9d347c7529695ea3cfbf94f7f1523d6680da6e75e833ca9827ce7640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFT3ED45%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCOEUYEfd1zZ%2FFzGTz8szGUzNF6VASteL4Bwpuh9x6bzQIgRY487YBF%2FijzoDFRXKxRXQAGrE3FDZW4BXezaH4%2F%2Bgwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBRHf6D0wi4JCYm%2BDCrcA63q8i6EeUJRtmDa5RL%2B0ahQpIDI9W4CPL%2FhKHMSvPrevaY4dT%2BbRUyP5Ifu5Y1It1em8hVRAHJMHKIqFMdu9qi8tKo92f8Z2mIMzmUb9DTrp6mqpPt4EmT7KoztGbl%2F4M7OoLpNa6hIWSEl8Q7SK58cKq42%2BNVBSeB5xAHkyWPt173reXM%2FaxBpFX3eN90snkn2QB5wiS66VF1MnDA2%2BgbQdY5sv6HDVLBKjYBsUc%2B9aUgMIJJdO8Vl6Gzbt4zb8o0Z0SFA8jgPHfLAM3hfxLCyV1SUYM7m03pt%2FGgCWiTIUASisYahFCmMQcLpdqVmGyUhUfVFve0cypkvnqiCydykHJIuCgI5x2kSaIiv53xTeU5KtGhiSq7i4WhkrdyXHf%2Bwb5qPuKOY%2FY6ETDzSUeDJ5Xkcc3KFkjeHY4XA3HW5JeKrvGGRDVarbPFZqVH7KrnLzdNjKKDLnOpILoBbnrXoCJk5fR%2Fr1gmxuWGeG0myuQrpehTvB37aYT2WouUUQPXntQt%2By%2Bk7Xww%2BdPhs0Op87x4aDdtCSGfI5n5KTLGCJvfIiLcTrHeOb9d1jtl2vpNBqosVcanLoNR16mDuQrcZ5dE8uedpAF7I0GH9ASscLxJ3Xm0BNDwiei0wMKzPir0GOqUBZnTba504hCdKbKE3Q8MRY115Ydc8RoDjvQpXoAy6mlmZNZZbt47uzzG3xbveOLz15Wgev9youluDGcyLWsGLJ6xa0LWkqQhmw8RoTvf3igeF5v5D4CK%2B8aZK8rWJhuWF3fE6mvVYfNjJMdVYDXqvfKV7udlzsHZS30yU040OmZXDM9Q%2FIL%2FLD9uiUiCc%2FOoyd6nLnTGQ%2FzlSd1F8swV4KBnU8c98&X-Amz-Signature=ba960f4d630abd505bd238a278959f9fee5561bb27a5f1238dd003693799dd12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECNW6S3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC5%2F7bGeefAhPrPP9%2FzucTmrl5ShdHlDzd7rfsdt5QDzQIgFAv%2FyVlb0Y8w0FLVPJoyDiYYnP5Ns6HNQ6kRTWyGEVoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNpVcVkJqtUpZC97JSrcAzW9pZieL6Ymjdrrhxp5kLQjpIYwX48GawLkLUeBnmvpIUhMWt9vgB7ZCeIHPvOTTsDDEH65J7zKCni5LLzYhIthwPNqM%2BhoEJw1vR4yPwmkyIKGCcpqkfPq9%2Fvq65ArT6kzd8giKeAEvqrsQCLZd5tdl%2BwviOI9%2F1TCM9g3LdWgXfG3h3QNlLT8TXLCzU8AOVIspqxypvDvjh87jWL1xsH5jY0Ln6WeexFrPDn4uOHcc6f9BSbXMTo%2BCBpLdstoOKj%2Bt8mNp7oMnD0GzYIuyN9JDynbSk7g6vmx99QJtsrYZU2Ga0XmAy8N7SY3xIZSi3sv9%2BMSyHfKQADeW9WUv9t5NoEzkOljZVUk8RpNLMv8pJ0iJ59J6aFBgAYdIKQqqW5%2FzowmHyYgk0Fv4uWC8rcBk%2FD%2FWP8rJyfbtkd3vNLxGRRtW91qmTh4NSzGgg0DpnbsvKMu8TtnaiHRGzeZ0U%2Beo4wV8GwQrg7EDeeChmwM9PgWBdOlG5pJz7q3KGWKYw%2Fal5PR2xZ2UdgSBRAYdrtcvhq%2FWG5QkCM74Tc6kQeZ9egVY1uDMIAoXINBm9xoUJaDoZWzakwgtRZR14YA%2Fi92%2F0ssmtvAGEsjoIqwvuqtWzGJXfSgueIQh2NwML7Pir0GOqUBrqwWPuDdCU74IXR8mJSNBh7%2Biw64EsmQOoujsBPbV5qlT2txW4jyzXQrKlNwNNsztZ%2F7p2ciZMcD0kMZRy%2FzERNP4w%2BxJLdWepsmTzw71FrvweXAoY9VWmUfP7jXN05jpQeQXMoQCwfBTGWtI0YzGLlYK0JSzUelxlqoZ7p7DDv33wAedzsnNp%2FjFr1t9Ql7SxXZdj0xw4VWxaOzeUT6sboyEcJy&X-Amz-Signature=cdabffd5bbd1f3e6e4556e9ad3e4a542e76988f3bee144efb180bf8f32f9518e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
