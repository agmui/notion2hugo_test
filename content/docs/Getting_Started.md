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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7V7ZLSP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNilzYsPo9ual5c4JDzXmC1FJS8F8U8I4rLGXrJvd%2BgIhAJ%2FAdPRlUzuNqeCFa9ecaEZj3TQEYhPm3gpqSEKsYGVlKv8DCCYQABoMNjM3NDIzMTgzODA1IgyF1IIgOU%2FvufPkpUwq3APjv%2Fbfl3ZRSkk3V3%2Baqv%2FaElQKWRnUuSpKk2Tr3TZtVSiVIgdBuqSPaPB8bnIGD9o%2FF18fxYR8oOnG2EWEJQJoxOC4x%2BwLQlghvrCFj%2FBjnZVfALwBD%2B%2FNh1BMTGxjhZSewtmCGQC9mYFuvU6O0dbYo34U2%2B7R8BDTqCOyICGCFUhW9B5qyCKPPgN%2FX2NkCP0YVAbNnARziX83da6ss%2FWO3iSlKcn%2F3mFI2KHRI0AgJ9dBaft1tGtWfkLZFKm5ApeEP1Fd040ppgjU4W5UtW2iZs7PhLrMoQwUX7lmejYctY8iz8tyjslTQmJKk3PFJERkj6NNKfBaTNym%2FZ5Wggn%2BLGewBZy%2BcgUWkIJRssBfBP%2BBxW46Q5u%2FgdTKCsUMJBRSNotkwuv2yJlG933GL8L2A5dTHgTdmWq4WRqZW3AQmHQ6Mk6I5nZRNuomdpFRsbTjMui%2BsQ6ew%2BuRmzf3gZkIOZdITbUKAKRD6hkqnO19WaZMGXybPOluXsxEOXHsMwzwKWxc53XukOJ9TR2E4jEhS7akXZ8IIoRh8DjPOoZOAeBDOfWKw%2BkTyPS6qvSV%2FnuVWyZ1fZFb%2BtWUcNYInjXva9Stg%2FgeS%2BWh%2BdTqS6J%2B2VuAl01IDYzgdp3cfTCY78K%2FBjqkAR1G%2BEwZQeC8X7cFQKo4wJHppBmA%2BQ6X0O2vxy9%2BwR8usLEYuqH%2BHpWtxT6kkBBqqW%2FIxwbKR4kNsAvG9q%2BH3eXZWKpLHIydJhQPJpuGIVXf30NM8fxiJ4B6dahI3yZCklD%2B%2FqTek0cjueCwFGKQ4TqBPnenH7Iii8rw%2FAnURZt%2B%2FjP1VxdTLWgveEu9e5obxppdUIpbVDsjorP4Av7G81OZvJDg&X-Amz-Signature=a9169e83e6e5bf6c181fb74f39bfc16dea1cf1f3108841b683ee238b2b86355d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7V7ZLSP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNilzYsPo9ual5c4JDzXmC1FJS8F8U8I4rLGXrJvd%2BgIhAJ%2FAdPRlUzuNqeCFa9ecaEZj3TQEYhPm3gpqSEKsYGVlKv8DCCYQABoMNjM3NDIzMTgzODA1IgyF1IIgOU%2FvufPkpUwq3APjv%2Fbfl3ZRSkk3V3%2Baqv%2FaElQKWRnUuSpKk2Tr3TZtVSiVIgdBuqSPaPB8bnIGD9o%2FF18fxYR8oOnG2EWEJQJoxOC4x%2BwLQlghvrCFj%2FBjnZVfALwBD%2B%2FNh1BMTGxjhZSewtmCGQC9mYFuvU6O0dbYo34U2%2B7R8BDTqCOyICGCFUhW9B5qyCKPPgN%2FX2NkCP0YVAbNnARziX83da6ss%2FWO3iSlKcn%2F3mFI2KHRI0AgJ9dBaft1tGtWfkLZFKm5ApeEP1Fd040ppgjU4W5UtW2iZs7PhLrMoQwUX7lmejYctY8iz8tyjslTQmJKk3PFJERkj6NNKfBaTNym%2FZ5Wggn%2BLGewBZy%2BcgUWkIJRssBfBP%2BBxW46Q5u%2FgdTKCsUMJBRSNotkwuv2yJlG933GL8L2A5dTHgTdmWq4WRqZW3AQmHQ6Mk6I5nZRNuomdpFRsbTjMui%2BsQ6ew%2BuRmzf3gZkIOZdITbUKAKRD6hkqnO19WaZMGXybPOluXsxEOXHsMwzwKWxc53XukOJ9TR2E4jEhS7akXZ8IIoRh8DjPOoZOAeBDOfWKw%2BkTyPS6qvSV%2FnuVWyZ1fZFb%2BtWUcNYInjXva9Stg%2FgeS%2BWh%2BdTqS6J%2B2VuAl01IDYzgdp3cfTCY78K%2FBjqkAR1G%2BEwZQeC8X7cFQKo4wJHppBmA%2BQ6X0O2vxy9%2BwR8usLEYuqH%2BHpWtxT6kkBBqqW%2FIxwbKR4kNsAvG9q%2BH3eXZWKpLHIydJhQPJpuGIVXf30NM8fxiJ4B6dahI3yZCklD%2B%2FqTek0cjueCwFGKQ4TqBPnenH7Iii8rw%2FAnURZt%2B%2FjP1VxdTLWgveEu9e5obxppdUIpbVDsjorP4Av7G81OZvJDg&X-Amz-Signature=d670fb4a7001ff4fd479be8c5c8e3c8768df2722e5042888b8f42e1600dc0f67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MM3UDX6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEou8UrfVEp7NhSzD46u4aKhtrbQFVlUJtOiuuMPpfVAAiEAiLJsvmnbzUewlWlRgOzlaAv%2F5mMbakO0OFIks2JaxsMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDII%2Bygm0gdsXuXxSnCrcA9DFB8lPkITR4VYu9neQRmZ%2FllgwbUYhHGtsB618kkEUiR1Z5aNhhy7dR7eCg1pIDSJ5b%2BkLPvnbfht3XXYWVpZf8CXHxr7dDP%2FoNMm5oCBal0ves2WP%2Bi72FV374PwggxpHUp9JReQNYayLeRnkwSNCvhHgRUYFEPObI1iQwvaVnNhoLQhyMQS4WHa3cNXwjRmRsVstfYo%2BaZjHS8lLBaaBFbsMBc%2BGTJHDgfleEqQ5td6SPuc7jNfTVZUKlMElxKbqF3KaXZJFv5Fjt9A51ogZDhK7PMHXAL%2FnweSE7hoKY68G08W8rL%2B0AAVEoFOih%2FdlJ3nBQTtg6YCYcf6lCOmoiAbdVibgKvjN6LRfeyXOvZumdnVIysUAhrd14Ex8wn2DKbnrTYqOM5ZlB%2BfrwDIpNlaS6IkWfLXK4YCpG945XvPYgT97QoRd0Jd21eNtHHs0ljAsF8ilGTA0WZqS%2BC6WVAXESkp9s8j76CUbsxgVRhE7KN3tWR4lPYf%2F3HS6HwBBZ2i44TwttoqopzKv6NXFZ4zV1vXDvjnoL6WndYwDS5IbSR8%2BztXTb5Qzbj6TlrrD4Ji%2FPh%2BFxJ%2BWHSFpYzmuBXKNkjIbs1KscSPIo9LOwbO4ArZqdyIjNJjFMJvvwr8GOqUB9DLBIcw4mHoNiAqVHKhv5VqTsapQ82IthXHijh2aDWRQW6E%2F%2FsFZnCAqR8GMuM5HdnNe%2B0zox65d%2BtqeWKtUL8pGB66YLH%2F%2BFdHExdVHG3ZYXI3FB9pwKSKKFG5t4TYhvfUhI6H9rG54F0Nb0P37Jw40l5M47GdtO6Fs2mNgIEQd7EXt409T%2BU1Fu78Ev%2Bvwc6PVaklV%2FozF%2BfeiTFeQTi03DqiE&X-Amz-Signature=04ce2fdaea9072b43ed16b4cbf57da5e5e319f1dcf851f41d3f4623322975eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47O7WFE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQq2CXH07JYNqMehX3yj5huNNqyjhhHSIRma2qDuxFugIgfSfiLUMYB9AiUruz3xQeItjQuSl9zFfe1%2FYsUGjY%2Bv0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOSotRQ%2ByVN%2FkAGQFircA%2BVw%2BOqXD7LE725rUhcQ9zDQr9nikz6uG7DFQbciebQbcOFNWwZTWK0gE3gain4cSsWDQFu3inLohj8egy5g0YCziLIB4AKvz8%2B1RJvJJRbXa9bl0voQRphgNGkoy8qJLcvFAL7hcRHX%2F0CP9sCjxiKFGALFlYwziKcHqYYwWMFcNtZ%2F%2FqE%2B6mDPH75gWz4Bc9cufKyR1gyZ4xi5VM8VX6DWPXyHczQwTqQ1GHyRsbRFDop3udWH01rJnfyqwdgvHNMPaAuqGek5imd0fm%2FtOjiLLTeM1tGBT4rv0OVK%2FRWvfUix8DW%2BqtEV4QrpgSiBU2%2Fc4%2F4%2BVcRiSK69riuj8yNEcvuv0ZuqzJYLDoBANQFujS5i1fTVy425UGwLHSiycpGNV0JuvyiDJe8T%2BpaIQSdvsBYAsgZiL%2BrIblNGIL0mTFxSieBf0DlsRqJg7kJgFTPza%2Faza2NCEp2Ip6iniOTrDyl53s5%2BHRxVFld8pmk5Cxe1G4%2BJYYHlbUNRyvud8ZNaZWIzXzADNe6a9A6MzfV%2FpXPgZSY5%2B%2Bx51ipcEkXucC2fP82sdmZvDvPxRLk0PgJ5bk3wp5o3GYh4LexEuHhISZcZYeTSAEtDlHL7tCDqTkPfkN22t0BIwSeYMKXvwr8GOqUBDyEQGWOjDcZiwoo17AQpsLeFL61llb0xn7fOSkRMFyKT6cQV6uC065kORQjM8Hl5jVL4jUCb2qwJCWCPAAD%2FzaARrvfIBZkYur7gZr2lJ6B3IqKkPopp%2FaVdQ5FocgsXqUCNI5lsF3N25Y69kov3XPwKXBYj8EPbWlJiBqDdyyWyAwbg7souUnMpKtCsOefQwzMgfx6gKYhiFguAsx87kk7TGXc4&X-Amz-Signature=2c5873d28f3be173dfcb978e871f25052dc92e5069d37e480e49941119f30f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7V7ZLSP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNilzYsPo9ual5c4JDzXmC1FJS8F8U8I4rLGXrJvd%2BgIhAJ%2FAdPRlUzuNqeCFa9ecaEZj3TQEYhPm3gpqSEKsYGVlKv8DCCYQABoMNjM3NDIzMTgzODA1IgyF1IIgOU%2FvufPkpUwq3APjv%2Fbfl3ZRSkk3V3%2Baqv%2FaElQKWRnUuSpKk2Tr3TZtVSiVIgdBuqSPaPB8bnIGD9o%2FF18fxYR8oOnG2EWEJQJoxOC4x%2BwLQlghvrCFj%2FBjnZVfALwBD%2B%2FNh1BMTGxjhZSewtmCGQC9mYFuvU6O0dbYo34U2%2B7R8BDTqCOyICGCFUhW9B5qyCKPPgN%2FX2NkCP0YVAbNnARziX83da6ss%2FWO3iSlKcn%2F3mFI2KHRI0AgJ9dBaft1tGtWfkLZFKm5ApeEP1Fd040ppgjU4W5UtW2iZs7PhLrMoQwUX7lmejYctY8iz8tyjslTQmJKk3PFJERkj6NNKfBaTNym%2FZ5Wggn%2BLGewBZy%2BcgUWkIJRssBfBP%2BBxW46Q5u%2FgdTKCsUMJBRSNotkwuv2yJlG933GL8L2A5dTHgTdmWq4WRqZW3AQmHQ6Mk6I5nZRNuomdpFRsbTjMui%2BsQ6ew%2BuRmzf3gZkIOZdITbUKAKRD6hkqnO19WaZMGXybPOluXsxEOXHsMwzwKWxc53XukOJ9TR2E4jEhS7akXZ8IIoRh8DjPOoZOAeBDOfWKw%2BkTyPS6qvSV%2FnuVWyZ1fZFb%2BtWUcNYInjXva9Stg%2FgeS%2BWh%2BdTqS6J%2B2VuAl01IDYzgdp3cfTCY78K%2FBjqkAR1G%2BEwZQeC8X7cFQKo4wJHppBmA%2BQ6X0O2vxy9%2BwR8usLEYuqH%2BHpWtxT6kkBBqqW%2FIxwbKR4kNsAvG9q%2BH3eXZWKpLHIydJhQPJpuGIVXf30NM8fxiJ4B6dahI3yZCklD%2B%2FqTek0cjueCwFGKQ4TqBPnenH7Iii8rw%2FAnURZt%2B%2FjP1VxdTLWgveEu9e5obxppdUIpbVDsjorP4Av7G81OZvJDg&X-Amz-Signature=318c9f350ef7c464041918522cadaba046a0a09561427a0b225b7a74c1f67e76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
