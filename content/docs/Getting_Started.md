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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKMVZT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBppLqxYX%2F3KKiHt67fgiAfPYSV2fGRhInmT3g6AxqOIAiBP8ylGl61VDcmHAR7nPxKvcZhZNe7BTzVmXEGXp9%2F4ESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5Q1Xazf7bQ11iQd%2FKtwD1x8h36%2FRxzzAfldoCGdiZpVasKBwelyACNPpQMebK8ovK%2FSv%2Fgutz5fO8%2FJk0FWNDJxt3SZrhS2tVevFcpCNfFiCRFBlciYCagtEbWA41AqYd9wPSWYgLy7nLFEJYH4JMyw4p2aS0PH0OLTQlc3hlpvwDPOao0J4gqk4iGetsHC9WlMB%2F86ZPuICSs20AvQmQjQQb%2BK0Ajdq7NkBwZU6nWc0%2FLZhahWhGRX9fkNzo5gtLgBxw3dUiacCJuNM6b%2BVxcqZfJsJYR8Ko1deM5x9JV4%2BUAK0rmMEbAYbC9bW%2FmH9q7jLs%2F8GU%2FoYaMbknmugpICipXoSHFm6IA%2B2vOmeW7MQtn0774RKwPlbpjhjg5tz5mBWLaD2DrFQ6WhZJf8p6q8kfKMTXKXj9DuHqGqjNqj1UKOvWKn8%2BDf5OVEQzbdWe%2BkXxmA8QEmdjZPT9956hb7qGDKJLEIIeSvaoyp5jV50%2FFfyJRH3SMiNR9tH9fgYahgvCItvqRk5UjNK%2F2b7KWMIMwR9RWedmUkOsXBHrNkSUWp1Dkmmn9tl2MC0x%2BPQsDSRVtfG1ZcIGYOHanSefFxeCv%2B2u6UtWWAo6yckxsoCVHAWVlYIfWvSGZuonOxHZfGg9R2HwrNk%2BykwxPClwwY6pgEB1tSTvrJr0q6T%2F2kLMCyQl8U3jmpTPdNQSV3Fyej4W7J9XOE%2BwNYhVpXmInT1eLRSowRXnXiIg2QbE5fLSvjn6ltVZCu4smho2KMl4590zUxxGzM2JZqrwxjdCpHDin%2FXTaw1jkRlw9r16j9LhM8O19U4MvAWlyHX86C1zHf%2Bx1g6LZeXbCD0H%2FbtGAM%2FdTjhheuFaTRw%2FDLNsJfacol6TP0zPEcb&X-Amz-Signature=f575a91a0d53be53267badb30daa97135b2b334ea2519926211511e7a9d9fa51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKMVZT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBppLqxYX%2F3KKiHt67fgiAfPYSV2fGRhInmT3g6AxqOIAiBP8ylGl61VDcmHAR7nPxKvcZhZNe7BTzVmXEGXp9%2F4ESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5Q1Xazf7bQ11iQd%2FKtwD1x8h36%2FRxzzAfldoCGdiZpVasKBwelyACNPpQMebK8ovK%2FSv%2Fgutz5fO8%2FJk0FWNDJxt3SZrhS2tVevFcpCNfFiCRFBlciYCagtEbWA41AqYd9wPSWYgLy7nLFEJYH4JMyw4p2aS0PH0OLTQlc3hlpvwDPOao0J4gqk4iGetsHC9WlMB%2F86ZPuICSs20AvQmQjQQb%2BK0Ajdq7NkBwZU6nWc0%2FLZhahWhGRX9fkNzo5gtLgBxw3dUiacCJuNM6b%2BVxcqZfJsJYR8Ko1deM5x9JV4%2BUAK0rmMEbAYbC9bW%2FmH9q7jLs%2F8GU%2FoYaMbknmugpICipXoSHFm6IA%2B2vOmeW7MQtn0774RKwPlbpjhjg5tz5mBWLaD2DrFQ6WhZJf8p6q8kfKMTXKXj9DuHqGqjNqj1UKOvWKn8%2BDf5OVEQzbdWe%2BkXxmA8QEmdjZPT9956hb7qGDKJLEIIeSvaoyp5jV50%2FFfyJRH3SMiNR9tH9fgYahgvCItvqRk5UjNK%2F2b7KWMIMwR9RWedmUkOsXBHrNkSUWp1Dkmmn9tl2MC0x%2BPQsDSRVtfG1ZcIGYOHanSefFxeCv%2B2u6UtWWAo6yckxsoCVHAWVlYIfWvSGZuonOxHZfGg9R2HwrNk%2BykwxPClwwY6pgEB1tSTvrJr0q6T%2F2kLMCyQl8U3jmpTPdNQSV3Fyej4W7J9XOE%2BwNYhVpXmInT1eLRSowRXnXiIg2QbE5fLSvjn6ltVZCu4smho2KMl4590zUxxGzM2JZqrwxjdCpHDin%2FXTaw1jkRlw9r16j9LhM8O19U4MvAWlyHX86C1zHf%2Bx1g6LZeXbCD0H%2FbtGAM%2FdTjhheuFaTRw%2FDLNsJfacol6TP0zPEcb&X-Amz-Signature=9b954ef35beb981db24a5cb54a74712beec79184fd85f439c7abc267b4e04f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKMVZT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBppLqxYX%2F3KKiHt67fgiAfPYSV2fGRhInmT3g6AxqOIAiBP8ylGl61VDcmHAR7nPxKvcZhZNe7BTzVmXEGXp9%2F4ESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5Q1Xazf7bQ11iQd%2FKtwD1x8h36%2FRxzzAfldoCGdiZpVasKBwelyACNPpQMebK8ovK%2FSv%2Fgutz5fO8%2FJk0FWNDJxt3SZrhS2tVevFcpCNfFiCRFBlciYCagtEbWA41AqYd9wPSWYgLy7nLFEJYH4JMyw4p2aS0PH0OLTQlc3hlpvwDPOao0J4gqk4iGetsHC9WlMB%2F86ZPuICSs20AvQmQjQQb%2BK0Ajdq7NkBwZU6nWc0%2FLZhahWhGRX9fkNzo5gtLgBxw3dUiacCJuNM6b%2BVxcqZfJsJYR8Ko1deM5x9JV4%2BUAK0rmMEbAYbC9bW%2FmH9q7jLs%2F8GU%2FoYaMbknmugpICipXoSHFm6IA%2B2vOmeW7MQtn0774RKwPlbpjhjg5tz5mBWLaD2DrFQ6WhZJf8p6q8kfKMTXKXj9DuHqGqjNqj1UKOvWKn8%2BDf5OVEQzbdWe%2BkXxmA8QEmdjZPT9956hb7qGDKJLEIIeSvaoyp5jV50%2FFfyJRH3SMiNR9tH9fgYahgvCItvqRk5UjNK%2F2b7KWMIMwR9RWedmUkOsXBHrNkSUWp1Dkmmn9tl2MC0x%2BPQsDSRVtfG1ZcIGYOHanSefFxeCv%2B2u6UtWWAo6yckxsoCVHAWVlYIfWvSGZuonOxHZfGg9R2HwrNk%2BykwxPClwwY6pgEB1tSTvrJr0q6T%2F2kLMCyQl8U3jmpTPdNQSV3Fyej4W7J9XOE%2BwNYhVpXmInT1eLRSowRXnXiIg2QbE5fLSvjn6ltVZCu4smho2KMl4590zUxxGzM2JZqrwxjdCpHDin%2FXTaw1jkRlw9r16j9LhM8O19U4MvAWlyHX86C1zHf%2Bx1g6LZeXbCD0H%2FbtGAM%2FdTjhheuFaTRw%2FDLNsJfacol6TP0zPEcb&X-Amz-Signature=0218cff7036aea9df8a32f3fa4dee56e45be8af6c04bebcdd2802ce96be46dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQTOKQDA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCYjZhjiC3AxA3UuBE0zDF%2BJMQKwbYrYO4TJ0%2FBm9uxAwIhAIEkHbLKi0%2FQXJbVI2F8%2Fm4Q9LfHXYS43wjoScP4SzKiKv8DCE0QABoMNjM3NDIzMTgzODA1Igxm%2FNRHIAA6SUibxIAq3AM1Q8IRd3GyRct%2BqfHkB1p4C6a9haTu29C74tQzV6Q2AoS%2Bx1qc8aVChOhrfyOhQCoTKBMwlCHHWCreQLWNBss6vBi2uA7x1I1IxT7sOtlgWuapJU9ik0IqtiUlxqhl7xdkh2OUYo5piVnzk8qK%2FTWEK%2BYU4r4je3vslfjDA0idvcd2mzgXOtXy8ixHhFIZcLJf%2Bq8C2LrurHEcOMC2jxNkFIAKXe8l%2FqAKJ4xVQl14lkW5ta8RVHhHE2MKzIBt8QTEqDYp4Cdn43b7shHd%2FbFuSKJsyPgwcR73OPObodM%2FWkJcgBFdFPazVqEErYqXkQMTuRxXY1%2F6KOFbaVNZMOT8rfcJH2PAOzLEW2bl75%2FNN80C4G%2BZ5nwgNIwCs5Gg1v%2B%2FHAEi00%2FTZcfkxj1Uf54GN9BgU24i1xnlKrzzRtOWYlq6x1ONwVHrC59%2Br5c11xAMRGF1HZW0I5%2BSzZZUZZO4bPT5uKD67TXCKlenmNzHs0CvAQl4zNFfpnwNgEG1HJ32H6biW9v4aivMQA2%2FWxxiOF3f7mUYad2mjVn9WQf8kJkwLu97dRdJzWtz7hKpgfREb7E8bTiqCkkaZgGS%2BZsbQRAC%2FrtULyfqXAJUtI24nDyn8VModRHIgukyPzCO%2FaXDBjqkAfkPOOI2njm164hcMKQqdD7HPVI2sgtlaTTUGR9z%2B6XF7068D5HawtEYa%2Bd5i6OXxkOQAEP0fwRJ3N4HuuqjvpEzvvyr5Va6YfjE64M2VRtlYxFU5lIj02eYScygvQWLO%2B%2Ff1q4H%2Bh2Dn75qFw4JPNubYsJTDaZRa3xzYsoR1YLw5vlIvdUnD9EzdpvbDJdiKokLkDBQUZuwMyA8JkWRN1ApU6XM&X-Amz-Signature=ce06349dca006fb6069af3cf832c8ae113bbf891171bd6c4c1c1270b47da7c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6IHNA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDT1JTZlNMsYDnWcTtUYIY0V2q53KCSKHk1hfAXIpbpvgIhALNC99RvdmFOpDZqscuUuCZHnVlj07Uh0exRHMTSvZieKv8DCEwQABoMNjM3NDIzMTgzODA1IgySQRF7nrpn6vyNsp8q3AOyRi8eJDdgbn3KAsGltzTh8pe30QCJvXs7Wb54jWeQayPrx5fvcv6qwXeM5PK6yio2Fl8fqVS6t7MQgh4qyCl7h3JP%2BoUN2FFcnfITMtOF4se0dCncMCGMCU%2BF4pxVS3vfGquWiGNONRoz7CJuiXMA7uU4GFs3e2gjdxcCNCjA8%2BCSKL%2FaH2dAyDxkNI9T6OTyh6sPQNNVBjG%2FDIRYaMxUIbaeTMW2csDKjVI9jx1KY%2Btk6Bnx30gB%2FIFZ9ATwZ6ELnEm7L%2FvhKAIm58ZMT%2FxTS8q6k9KO%2Fd2vMqB5MlJs5dgo9Z3g3bwFXxuNkMDJz3vdOWJO4uFlLAuCx0K9TgX33zV1%2FKl6XkfgNQRR1It%2B6gTFd1F1MNSi5bJTeclvzjU%2FZ5RmIqdKJcgjVEpHuwQaiRsExknewNIUhd7cjf6CaiOz5Vx5FMg5DJba7PvGuiZo0ZhQLGGF22DfEWeiWuVK2L%2FfT0Jr3pxbBsQvV24uyhsoEmdedPnHNG2CKuyrHMS442ujdESkqmfbqm5W448IDeor9qUQNjN%2FXZoNYjjCPbNrcK4060lZBtHEVYMc7PSiTEGGgUZbC9lz1IZhK9TQ3oK4e2RCP2E3hUuwfcjclzIGI5mEov%2F%2B1dT6hTD59aXDBjqkAcrm3TVsgLEW%2B2mf7fitXCB51hCVAMjUBvkLXHRmy6UHbnqzRnLvL%2B16zyA0HI3klAmnDnG%2B9gra%2B15WXP8BchF6XsOXi50XjgJ%2BMAryopC6b1isUMbIYtm94YyKU4dO7CaVpFEX5mH77PrlPuJmYb7ssr6bxCB4JayGAkE9Adzq%2BgBT6%2FDJC1AQkq0hfBr9Qj23DbaYh2FQ3hw45X%2Bi6QQTasEc&X-Amz-Signature=073e808de74ab1b8c24e911af0b8f7622f4721dcb9c3727c47d4c4b354ce7a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKMVZT5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBppLqxYX%2F3KKiHt67fgiAfPYSV2fGRhInmT3g6AxqOIAiBP8ylGl61VDcmHAR7nPxKvcZhZNe7BTzVmXEGXp9%2F4ESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5Q1Xazf7bQ11iQd%2FKtwD1x8h36%2FRxzzAfldoCGdiZpVasKBwelyACNPpQMebK8ovK%2FSv%2Fgutz5fO8%2FJk0FWNDJxt3SZrhS2tVevFcpCNfFiCRFBlciYCagtEbWA41AqYd9wPSWYgLy7nLFEJYH4JMyw4p2aS0PH0OLTQlc3hlpvwDPOao0J4gqk4iGetsHC9WlMB%2F86ZPuICSs20AvQmQjQQb%2BK0Ajdq7NkBwZU6nWc0%2FLZhahWhGRX9fkNzo5gtLgBxw3dUiacCJuNM6b%2BVxcqZfJsJYR8Ko1deM5x9JV4%2BUAK0rmMEbAYbC9bW%2FmH9q7jLs%2F8GU%2FoYaMbknmugpICipXoSHFm6IA%2B2vOmeW7MQtn0774RKwPlbpjhjg5tz5mBWLaD2DrFQ6WhZJf8p6q8kfKMTXKXj9DuHqGqjNqj1UKOvWKn8%2BDf5OVEQzbdWe%2BkXxmA8QEmdjZPT9956hb7qGDKJLEIIeSvaoyp5jV50%2FFfyJRH3SMiNR9tH9fgYahgvCItvqRk5UjNK%2F2b7KWMIMwR9RWedmUkOsXBHrNkSUWp1Dkmmn9tl2MC0x%2BPQsDSRVtfG1ZcIGYOHanSefFxeCv%2B2u6UtWWAo6yckxsoCVHAWVlYIfWvSGZuonOxHZfGg9R2HwrNk%2BykwxPClwwY6pgEB1tSTvrJr0q6T%2F2kLMCyQl8U3jmpTPdNQSV3Fyej4W7J9XOE%2BwNYhVpXmInT1eLRSowRXnXiIg2QbE5fLSvjn6ltVZCu4smho2KMl4590zUxxGzM2JZqrwxjdCpHDin%2FXTaw1jkRlw9r16j9LhM8O19U4MvAWlyHX86C1zHf%2Bx1g6LZeXbCD0H%2FbtGAM%2FdTjhheuFaTRw%2FDLNsJfacol6TP0zPEcb&X-Amz-Signature=0d448b07540bd452a981ef8c9eab5e6ac03ce47e5f03c664fe92f352c706cb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
