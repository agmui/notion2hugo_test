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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2X4XQW3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B3sudy6ileaYQ1V474Kh%2BKRZUXAKUtuijGuaxptrEYwIgV4aNIuy7BaTPwW7Hvpp1nlE%2B1vj2ax7M78MYllBfyn0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc02UO8zN%2BHzqkJxircAw6nM2fZ5gRYK3MMs%2FBNiJU4KQFR2PebzEqAhovkf%2F3K4nEH0vjOEDMqr%2BIm%2BKHLEm3zgpDXJGXvWZDV3l2VfQwTvAdxp2fIKh29OIl8Zk7gUcn%2B6vl8RRH4UfLOdMFhOKNAahW%2BcwVtXuUN4enE3PXPoSHDoFrNMwLRnDCD7EmcEORkwP9w%2FpfGZnBldOSyHWZqrJkZK3CeG16oHxsvY2VWuqErxr7TWCWg3dsTarSfw7d%2Fm0UmbDYlFPxDpxyI9KSzulRx5iTWU9438AfGjPAPwmD9EJTAwx%2BETdoXmO4JSLYYpiIWJndKRm6sf%2BafQJM4wgYK4dZL8h7ao4QdIDqBDj3uVkjD1WNL2at2Z%2FG7xDr2UgcMIm4V0fZnrd6%2BW83yHXMCxi%2F4eJV7Lktx95vxYCCYf6hvpJ9z5HaPVaYYaspMjwKxwNfwboQrnP7l%2B7qbYQZ8zUCmspEPhmU8FnxjAiJVbX%2BjsvRpxcaPgiTOVe6qnQwg78UebpfAa0awt%2Fg23ap2vhDij%2BCauAG6u%2FQ1MTUYu1GKOyewtQzHj8dM92VfsY3Am3sN%2BHk974eY0IZkzcGNiWW73u6Jwfgx49f6CW%2FqoVLEX3Vp6gLs83uU0%2FXuIysDO6wX76V7MNvFm74GOqUBB98O64IgYLoLAvL4AhOwYHFVJlImyX4dqvzSyDnsu%2Bq0WRFBq%2F9mr3Zn%2Bu2wCJFLee80QyfdY793lVqj47tRIoQPJRKoYt8u8uf5S7iFfdqNkGR6F2q84lwdf95d%2FhrdGCfb8RMDwT%2B9XSPmXt%2F1oAUCyYWN7V1hvaZgT25ywftTNc%2FZicjn4HA5jSmok1E55q1I76S%2FcEYm44TllAfHB7Ksq0No&X-Amz-Signature=5a22ad20479debcade2b6ebfe532f9d2fdab5ae5bd29778255b309d5330eb347&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2X4XQW3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B3sudy6ileaYQ1V474Kh%2BKRZUXAKUtuijGuaxptrEYwIgV4aNIuy7BaTPwW7Hvpp1nlE%2B1vj2ax7M78MYllBfyn0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc02UO8zN%2BHzqkJxircAw6nM2fZ5gRYK3MMs%2FBNiJU4KQFR2PebzEqAhovkf%2F3K4nEH0vjOEDMqr%2BIm%2BKHLEm3zgpDXJGXvWZDV3l2VfQwTvAdxp2fIKh29OIl8Zk7gUcn%2B6vl8RRH4UfLOdMFhOKNAahW%2BcwVtXuUN4enE3PXPoSHDoFrNMwLRnDCD7EmcEORkwP9w%2FpfGZnBldOSyHWZqrJkZK3CeG16oHxsvY2VWuqErxr7TWCWg3dsTarSfw7d%2Fm0UmbDYlFPxDpxyI9KSzulRx5iTWU9438AfGjPAPwmD9EJTAwx%2BETdoXmO4JSLYYpiIWJndKRm6sf%2BafQJM4wgYK4dZL8h7ao4QdIDqBDj3uVkjD1WNL2at2Z%2FG7xDr2UgcMIm4V0fZnrd6%2BW83yHXMCxi%2F4eJV7Lktx95vxYCCYf6hvpJ9z5HaPVaYYaspMjwKxwNfwboQrnP7l%2B7qbYQZ8zUCmspEPhmU8FnxjAiJVbX%2BjsvRpxcaPgiTOVe6qnQwg78UebpfAa0awt%2Fg23ap2vhDij%2BCauAG6u%2FQ1MTUYu1GKOyewtQzHj8dM92VfsY3Am3sN%2BHk974eY0IZkzcGNiWW73u6Jwfgx49f6CW%2FqoVLEX3Vp6gLs83uU0%2FXuIysDO6wX76V7MNvFm74GOqUBB98O64IgYLoLAvL4AhOwYHFVJlImyX4dqvzSyDnsu%2Bq0WRFBq%2F9mr3Zn%2Bu2wCJFLee80QyfdY793lVqj47tRIoQPJRKoYt8u8uf5S7iFfdqNkGR6F2q84lwdf95d%2FhrdGCfb8RMDwT%2B9XSPmXt%2F1oAUCyYWN7V1hvaZgT25ywftTNc%2FZicjn4HA5jSmok1E55q1I76S%2FcEYm44TllAfHB7Ksq0No&X-Amz-Signature=676ed9c55774d6b731b60540139b1d35d5b38b51f87254aebbfeb8e3993f8ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMJVLEW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdmXiRh%2F7MbUNUsulvcy%2F8B8bSIQMNk6ix9DKeTEUH3gIhAPQEOj9ueVEB6jqpeUTQmF3bEv4%2B1RPPtWllOkZ0ARdIKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1nOXw27uL652FL%2B0q3ANmt4sMqvutvxyXjQQG9LH22BbIbChZnIdTdRaYY5nHSiyVDJ%2F2HPrfpMLGvgtz45QAm8EgUKSh55N0xghquCeA%2BWN9NqPl47xMKv%2FxU%2BL1DKHT%2BwYbMpGVoDTm91U3MZK5FWmArPCMCFRkJtPBPcxrU98hWvYzBwZ1PWhp0jDNB1dRYFYLYFQ%2BUlA8tTJimR0cQVomrq5SPFwuDqHhv0I%2FGBu2rwXNJywGQAm0QSwKKR27StYEr6BtlVTACACqOoDPofxLs9m8tAkow5t5RvcNU3pjatrDYv%2Bfj9dIPbscXcoUIpyoEc31H7SfY43xj%2FCbe%2Bgla0zTe1rKSQfGVa%2Fu8fQuBNatO4suvuVqr7fGm2XHrF2OulvT%2BxsH4WiF5JvoRhKzGWw%2B4IdBiOn2UJFprumcoxsUmdzESYms1wISn2oEzgCohPppZGdWcsrRChsL41frPLkvn93a2XdbODPvq2UJeLailcbEW1BjcPYcVI8javoumRT6qSYyDgTbDJ6IE1pCycWzVqtw6uJXhkPWkgpVsRtYmCTVfb38M4zyXgvaicIVkEoEFOImXRa1j3NRfc5gxYtuXuUUlFzHqWQ3YhXWRQCqnMR8C1slT1zwQZAdgeQzb1V5ehqk1zCbxpu%2BBjqkAckdJeQNrbpRPl7NRUWfBZERt9ZlIU3lPmD436Co5MLt1C0Gtgx7JVrWpWq1%2BKWKvwC%2FRmF8McfUezNaTQCRcM2iPZmeXscoFnHjDfoVphe5GZcf8gNpxKUZELNTNVWNe3g5qZdn3h1ON%2BUl5%2FlItjdZNM32PU2rfnc7b6N5fpFejBcVV3%2BUOUS65gj%2FpRMuFL9jqyBx9rhabhfQCnTXFyCr%2Bk87&X-Amz-Signature=3662225a4072f61109a68525c8ebed84f0e303d958a3f98ce6c79d61c05b01cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW2EUJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD215xph0uqPZD3tRr1biXqU0drTUKv1G6tknyP5vKkWQIhALMmSRzXAB6h9J2cH8IUYrljfFxEXhXwV36%2FBe2w6R8iKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5%2BxRDfGRpvX66QhYq3AOPnpG0YX010hopq4JCfjs3OLTcWrywr4RaXAFpUrFVF5Siog%2BLMPjdw1GjEkJjRF1RIhZ4aW%2FuBFyonBAWli8wvKvMIwPm7%2BEb5sRMgpfUpjuxYbCMd6%2F7cKkP3GYxNKgEsfHncmzonSvqhbKLO%2BdXxtkK8ZAXMxo%2FaWyCBx1cPHoLcDOYO3nSP2MqpTfL9Ckg216WFUMSYYtdSv10PDWgHxOOypx7Sw8Uu9XARXYOKd%2FERpBnLwOozZ8PLjz1IRmVu6Bhdvro9i7MoZNaIyN4wV%2Fz30bh6Q3BGe5t8b0S4i7RsQnlxlgUmpcnVwLwK5GU9kK6vk3B7KLQ7fgKYreFuDGq1700A7X1%2BPT%2BWCfjucfBdWD%2BXwxP9jMt9BsvH6bbo03079bPO1fKkYQSUlUr%2F3msqcF2Lltb8PX27ZBL4R%2FdUApptQQA0kl9a6Rs%2B0qnNwxrN9XSo%2BxxBmEVUkvDjLS7Yjym6NNKC%2FF2Qzg0UPbzJyC9pitnsY99Xkxd%2B%2BdRYNFKMgkJ%2BJh47XaziPUvtLavnzLQqOFP5gUZm7yS6a8QZzU1Vbgz5xhg0QQ6xlqwrPfb61LhjOtuDDi9MdcUqNpEloe%2FNs1dxV7wJ4G22e%2Fb0ywwIFM7FTUWpjCjxpu%2BBjqkAb8ExF%2FtqFYwhayuCQ%2BsZsnECUCXErKhNbCzMoP%2BuET90%2Fh4ZXj7F%2Fn9t4i5JAF8rSuFiaS7DeNfm5vOGEYV3gI2%2FNx%2FAErfBn3wkUeXZ7yr3GE6PcjNr3J60aTOdcvav75QKfcUVCXNIj4DmLWfHju7z%2FalFUzKBtbuq24kPXr%2F4QZOJq%2F2WLULmcpvVTm1VZjo34a4OpUHJ6iB%2FwCrJL89wMIO&X-Amz-Signature=c2dec88ff997ac74221b8fab280657af6e246ec6e6686cfa02a529e62918f290&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2X4XQW3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B3sudy6ileaYQ1V474Kh%2BKRZUXAKUtuijGuaxptrEYwIgV4aNIuy7BaTPwW7Hvpp1nlE%2B1vj2ax7M78MYllBfyn0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc02UO8zN%2BHzqkJxircAw6nM2fZ5gRYK3MMs%2FBNiJU4KQFR2PebzEqAhovkf%2F3K4nEH0vjOEDMqr%2BIm%2BKHLEm3zgpDXJGXvWZDV3l2VfQwTvAdxp2fIKh29OIl8Zk7gUcn%2B6vl8RRH4UfLOdMFhOKNAahW%2BcwVtXuUN4enE3PXPoSHDoFrNMwLRnDCD7EmcEORkwP9w%2FpfGZnBldOSyHWZqrJkZK3CeG16oHxsvY2VWuqErxr7TWCWg3dsTarSfw7d%2Fm0UmbDYlFPxDpxyI9KSzulRx5iTWU9438AfGjPAPwmD9EJTAwx%2BETdoXmO4JSLYYpiIWJndKRm6sf%2BafQJM4wgYK4dZL8h7ao4QdIDqBDj3uVkjD1WNL2at2Z%2FG7xDr2UgcMIm4V0fZnrd6%2BW83yHXMCxi%2F4eJV7Lktx95vxYCCYf6hvpJ9z5HaPVaYYaspMjwKxwNfwboQrnP7l%2B7qbYQZ8zUCmspEPhmU8FnxjAiJVbX%2BjsvRpxcaPgiTOVe6qnQwg78UebpfAa0awt%2Fg23ap2vhDij%2BCauAG6u%2FQ1MTUYu1GKOyewtQzHj8dM92VfsY3Am3sN%2BHk974eY0IZkzcGNiWW73u6Jwfgx49f6CW%2FqoVLEX3Vp6gLs83uU0%2FXuIysDO6wX76V7MNvFm74GOqUBB98O64IgYLoLAvL4AhOwYHFVJlImyX4dqvzSyDnsu%2Bq0WRFBq%2F9mr3Zn%2Bu2wCJFLee80QyfdY793lVqj47tRIoQPJRKoYt8u8uf5S7iFfdqNkGR6F2q84lwdf95d%2FhrdGCfb8RMDwT%2B9XSPmXt%2F1oAUCyYWN7V1hvaZgT25ywftTNc%2FZicjn4HA5jSmok1E55q1I76S%2FcEYm44TllAfHB7Ksq0No&X-Amz-Signature=95852c7208ddd6b48c4c839b108924f1f61638edd2d19925fc78c5adb7663b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
