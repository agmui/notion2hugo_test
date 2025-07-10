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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ4TKEO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmpllNDKgN%2BhELTf%2BMlvSm%2FVaN6S55N%2FZpkatC6Z7jQIgPkHLYrEZYVgjzrDWawosmqRPefSg4q9Loiq4JgjXuvwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl8%2FqPcODVPJHfsSSrcA2p0AuahQmi0oNlZbUxppHCg9ZcSY86Q%2FvYI1Jn5KFyeoIsFFHbCPUzGtFiulTn75J2kGDF7z6hvAcL2pl06%2BpjTMzI1AXQnFM%2BXdiS%2FfQKgfKWXmmw2i2laYeCpb16H9TupoJczMCs8smWQo1f72wg7cAo9lEYUvI9gSfml798jI97qX5FGbOKfuylP8PXH7lIqhHDKMGZrrgJUBDjGRRaS0fSkulNRz96RFYw4VWd3bK65Bick8CafEnvqnSMCXexXZtKAs3A7WyXG8qXNaeMsMv15sMWih7haCvx8k8mmbPGECei7Xeycy%2F4OwXJlkUINXcspaCb1NMjat%2B5J4Pnmsm5Ia84yx7RlKUgr5uLNkN79YodQXkkmNIj4esZ%2BliwYtP8mZE8njgELZF%2FwDWXSJdtcl6F4Sk2BxnnR0wN7tOQ9AbPrJvHBeNtrN%2BRNM%2Fl06gjn5VthWne%2By1Gy23HMNVydOomg%2Fi3smcyHJbQf7Ua5zjMZceveG%2F48euDOpj%2B2A8%2FhcObUtQDQ3r3xjJp9eU15ENJj%2B5nuTBZdsSHchM6C1nYw6Vm5EfwWT4pIXUaxMXYs7fZn6Z%2BsFg%2FJxTO5czSjmAAM0dIe3DDe8AvY0xPvooosOye82GzpMODQvMMGOqUBbTJk7dakLKbrb8aA0vVYzyOHmma0V70SwQuKLK%2BuV5mo0HX9F5al2PlOsPcLoLEgf3zRrhKwf4LerQMg3bP5wLT8y7vVTH%2BroRB1DKc9I5v%2FWh%2BuO21sY4inJwjaI6WGiiP25dJijuEFHyT0laoKNr0AI0hCj8dT0wCIk%2BNFCLxX3N3gW2qy1Jmlggqq9O42OTMbYgTH5M3Rbcrh6Ps3ztIJb4sJ&X-Amz-Signature=22462f238490006212e4178b8b2649c11ae95a04753f31b7c78ce4f759d65e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ4TKEO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmpllNDKgN%2BhELTf%2BMlvSm%2FVaN6S55N%2FZpkatC6Z7jQIgPkHLYrEZYVgjzrDWawosmqRPefSg4q9Loiq4JgjXuvwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl8%2FqPcODVPJHfsSSrcA2p0AuahQmi0oNlZbUxppHCg9ZcSY86Q%2FvYI1Jn5KFyeoIsFFHbCPUzGtFiulTn75J2kGDF7z6hvAcL2pl06%2BpjTMzI1AXQnFM%2BXdiS%2FfQKgfKWXmmw2i2laYeCpb16H9TupoJczMCs8smWQo1f72wg7cAo9lEYUvI9gSfml798jI97qX5FGbOKfuylP8PXH7lIqhHDKMGZrrgJUBDjGRRaS0fSkulNRz96RFYw4VWd3bK65Bick8CafEnvqnSMCXexXZtKAs3A7WyXG8qXNaeMsMv15sMWih7haCvx8k8mmbPGECei7Xeycy%2F4OwXJlkUINXcspaCb1NMjat%2B5J4Pnmsm5Ia84yx7RlKUgr5uLNkN79YodQXkkmNIj4esZ%2BliwYtP8mZE8njgELZF%2FwDWXSJdtcl6F4Sk2BxnnR0wN7tOQ9AbPrJvHBeNtrN%2BRNM%2Fl06gjn5VthWne%2By1Gy23HMNVydOomg%2Fi3smcyHJbQf7Ua5zjMZceveG%2F48euDOpj%2B2A8%2FhcObUtQDQ3r3xjJp9eU15ENJj%2B5nuTBZdsSHchM6C1nYw6Vm5EfwWT4pIXUaxMXYs7fZn6Z%2BsFg%2FJxTO5czSjmAAM0dIe3DDe8AvY0xPvooosOye82GzpMODQvMMGOqUBbTJk7dakLKbrb8aA0vVYzyOHmma0V70SwQuKLK%2BuV5mo0HX9F5al2PlOsPcLoLEgf3zRrhKwf4LerQMg3bP5wLT8y7vVTH%2BroRB1DKc9I5v%2FWh%2BuO21sY4inJwjaI6WGiiP25dJijuEFHyT0laoKNr0AI0hCj8dT0wCIk%2BNFCLxX3N3gW2qy1Jmlggqq9O42OTMbYgTH5M3Rbcrh6Ps3ztIJb4sJ&X-Amz-Signature=05574ce3e5db39e0b108286cd7f14d1f7924ee7ef82c6a7d1214815ef2b1f47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ4TKEO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmpllNDKgN%2BhELTf%2BMlvSm%2FVaN6S55N%2FZpkatC6Z7jQIgPkHLYrEZYVgjzrDWawosmqRPefSg4q9Loiq4JgjXuvwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl8%2FqPcODVPJHfsSSrcA2p0AuahQmi0oNlZbUxppHCg9ZcSY86Q%2FvYI1Jn5KFyeoIsFFHbCPUzGtFiulTn75J2kGDF7z6hvAcL2pl06%2BpjTMzI1AXQnFM%2BXdiS%2FfQKgfKWXmmw2i2laYeCpb16H9TupoJczMCs8smWQo1f72wg7cAo9lEYUvI9gSfml798jI97qX5FGbOKfuylP8PXH7lIqhHDKMGZrrgJUBDjGRRaS0fSkulNRz96RFYw4VWd3bK65Bick8CafEnvqnSMCXexXZtKAs3A7WyXG8qXNaeMsMv15sMWih7haCvx8k8mmbPGECei7Xeycy%2F4OwXJlkUINXcspaCb1NMjat%2B5J4Pnmsm5Ia84yx7RlKUgr5uLNkN79YodQXkkmNIj4esZ%2BliwYtP8mZE8njgELZF%2FwDWXSJdtcl6F4Sk2BxnnR0wN7tOQ9AbPrJvHBeNtrN%2BRNM%2Fl06gjn5VthWne%2By1Gy23HMNVydOomg%2Fi3smcyHJbQf7Ua5zjMZceveG%2F48euDOpj%2B2A8%2FhcObUtQDQ3r3xjJp9eU15ENJj%2B5nuTBZdsSHchM6C1nYw6Vm5EfwWT4pIXUaxMXYs7fZn6Z%2BsFg%2FJxTO5czSjmAAM0dIe3DDe8AvY0xPvooosOye82GzpMODQvMMGOqUBbTJk7dakLKbrb8aA0vVYzyOHmma0V70SwQuKLK%2BuV5mo0HX9F5al2PlOsPcLoLEgf3zRrhKwf4LerQMg3bP5wLT8y7vVTH%2BroRB1DKc9I5v%2FWh%2BuO21sY4inJwjaI6WGiiP25dJijuEFHyT0laoKNr0AI0hCj8dT0wCIk%2BNFCLxX3N3gW2qy1Jmlggqq9O42OTMbYgTH5M3Rbcrh6Ps3ztIJb4sJ&X-Amz-Signature=2c4b96c8cefb551589a3fbcb186de2006f57f001b5628dd67b78ac7033f0d71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKS753LG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEuAw47aswpgbwQz0PC8B44ZdBznTp%2BF1d%2Boq%2BvOFkPAiAxPb%2FxYPwaTBb6yGahOcLOrPvuYr%2FVXP2CvGXWg99U4yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3UEV7BzERxAdwGGnKtwDdFfK3qxlxXs%2FistpkXpBEycosXwhTdtaEjDpzUePAve1NVZNNPErYEqkqHCRlqcY6YwcoZShK3%2FlnwIojxhgd5QHV7mdUEZnnlMN4onFdoRQ9KzyH4cAudqA3sJeKYBxk%2FUynA7uMtmmFh0%2BFM7keVYDWr5IBZsAlXOhfNP34EKxf9ohT0Z6nsGSmmuawGOfsSKlROXn6P5rXbJjJ3lJGhHBhGsvJZxP%2Bh0dmkGZc42ghyyyygQ2ud5Kc2mHZjegXWPl7fcb1uiWfTHWSvzXJChaVjhdor694IdMJ9aIX1fMBPSgq0pdKqa92rS%2Fz8MrNyYELIZZ3U5zlWacaiaJHTEjZZO%2BJNnGb1rraC9aynyOai%2FyOFXc%2FWOT3qV11j8I0qBILUp5vBYVFIbawNqbLhRi4VWBVxhYHFzy9ACDWxuZQgj77gKhnaHKaNwou8%2Fax2U%2Bdr1Nk2E%2BOsWMRnjhtTVLd4SHCQitlY6ZXy%2BLUkg6rPEE4Q7dz%2BnCXpBxazEw8lhAIoUrUdxMij9PSATB3LzL0HpjHR%2BfMT7E1AOAW121ik6E8kUtTYIJyQRCWk0hz%2BEHsx51k7SrYk5GN38Oydc6s9b5NZIRo8vUzQNx2DNWf0%2FO0bTfnTJZuQ0w29C8wwY6pgG7p3%2F5%2BpXC4Q3yyXjRzKcCQhd6cZwxe550Bdmh383oRmhbGXg3U3fNcryOCNXHvvL%2FLRjBPk817q2TUFAZ8Anh67TTw6k%2Bsdsil7ZbSrojriLfPRyLdDp2zJvajT2RfvA04KYesmJeNsfd4hAZ6w0uQuyCF0dHHNGx1YJw32YZY0cRc7klluNVhb0kcT2J6MvGT3cLvG7iS2s2LYdaBvNqZQQmKEo%2F&X-Amz-Signature=776f02f600a9594d53f80286e19196a47581560bb37b8e8bde8e86b2776e73de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDTEHAZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FVGA6xYCQKjHnaYormEGiBdt6V6XeqGlXL20olpmRWwIgPPTnhE%2F0Niqku1YYodvh8kG75nxOnWDGE09Voifx%2BSgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuzy7TbqNy4EoygZSrcA%2Fcnu%2FTzhBcmHabWxZjYRRrdpRRz3Awg9qB4nIspirHQnBUWmJXTSmraJ0N7vJtBQGcXbvETBSye8%2FtXw1yISSfftwwnTfRR7XhH5hRZ0RZEeQCU7vsFTYEk2oLpVsrUdJq1DwVobEdvHyLWQXuSYu7SOxwg4ccJm3OpdVBUKhLrulvzJNkiTy39%2FTzowntsyNaqqJ2oe54dNnym5MBSbtu9wlEBbXSwlr%2FtgI6twV3eQJoYmIX7UnxYmgpBlfUwmnKou21E%2BjNoWq3Qjxkoo8UbpnGuxKaFmcosEkJG8BI6b%2B9Qsvsg00FXI0wI3G%2Fl2zKHw1S1Wa3dpOZ01Y91lX%2Brca8KC53MNBTRtGW%2B7BA4XABdhPe7gfDB%2Fk9D7d2kiqWZCLQYUQUSJw7aGzTBgieldtQ5Q5Eg%2FTLx4kK4w%2FkXf4NrNP6Ur53vPoc2yFmrib7nHPa7jU1pXdH3n74L4oa6g2i%2Fc5ylTOE25vHEsnUWBcYRRmelmWnp%2B5ubmwHY0mvSZKucgy62qZcA7mEhjB9zwfWV6iFa8vvd%2Bg12lG1lBVqtu3I1nT2XSLTsP0D4Y8WQ%2B5KxgLoKJRYCBEC0tKVl5qlxUcroEwui2w3MeyjxhfxIwdVs6YzRFEsrMNnQvMMGOqUB0kfd1ENi1oM7Mik5XdeFDvEKKuaoNr%2B3kG27X3sFlmK4vleSXO9F6MPhddRaxxfWMIG%2Fg9gNVZmTvQ8wN0TQs9D0%2F44P8VMza7Bt5mNzwYQXKeMY3t3VVeCsQHEutCTt3AvCNyUweDJbC7FF8J2je1RozL2GMt8VvA9viDvAL%2FEFybohd5yErvZ0j1KBAJ99EKk8%2B0seRlFKT4c5TiKDutkHXW9b&X-Amz-Signature=e485662d478ee08fb2af60a585b6307f2f50160fedca492db21bce8d5802bc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ4TKEO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmpllNDKgN%2BhELTf%2BMlvSm%2FVaN6S55N%2FZpkatC6Z7jQIgPkHLYrEZYVgjzrDWawosmqRPefSg4q9Loiq4JgjXuvwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl8%2FqPcODVPJHfsSSrcA2p0AuahQmi0oNlZbUxppHCg9ZcSY86Q%2FvYI1Jn5KFyeoIsFFHbCPUzGtFiulTn75J2kGDF7z6hvAcL2pl06%2BpjTMzI1AXQnFM%2BXdiS%2FfQKgfKWXmmw2i2laYeCpb16H9TupoJczMCs8smWQo1f72wg7cAo9lEYUvI9gSfml798jI97qX5FGbOKfuylP8PXH7lIqhHDKMGZrrgJUBDjGRRaS0fSkulNRz96RFYw4VWd3bK65Bick8CafEnvqnSMCXexXZtKAs3A7WyXG8qXNaeMsMv15sMWih7haCvx8k8mmbPGECei7Xeycy%2F4OwXJlkUINXcspaCb1NMjat%2B5J4Pnmsm5Ia84yx7RlKUgr5uLNkN79YodQXkkmNIj4esZ%2BliwYtP8mZE8njgELZF%2FwDWXSJdtcl6F4Sk2BxnnR0wN7tOQ9AbPrJvHBeNtrN%2BRNM%2Fl06gjn5VthWne%2By1Gy23HMNVydOomg%2Fi3smcyHJbQf7Ua5zjMZceveG%2F48euDOpj%2B2A8%2FhcObUtQDQ3r3xjJp9eU15ENJj%2B5nuTBZdsSHchM6C1nYw6Vm5EfwWT4pIXUaxMXYs7fZn6Z%2BsFg%2FJxTO5czSjmAAM0dIe3DDe8AvY0xPvooosOye82GzpMODQvMMGOqUBbTJk7dakLKbrb8aA0vVYzyOHmma0V70SwQuKLK%2BuV5mo0HX9F5al2PlOsPcLoLEgf3zRrhKwf4LerQMg3bP5wLT8y7vVTH%2BroRB1DKc9I5v%2FWh%2BuO21sY4inJwjaI6WGiiP25dJijuEFHyT0laoKNr0AI0hCj8dT0wCIk%2BNFCLxX3N3gW2qy1Jmlggqq9O42OTMbYgTH5M3Rbcrh6Ps3ztIJb4sJ&X-Amz-Signature=b9308f53f8af10c0513a6b4ebb36603694305888938a8eccb5948a3dd8dd660d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
