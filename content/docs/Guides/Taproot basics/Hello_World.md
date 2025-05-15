---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6XCOEG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH1umSzKtxDV2Y57d1Cf9H3FLyEZFVSw%2FOd%2BeHiBiGOuAiEAmcV7yeyzJ%2F4LLWhNRn99yqTvtgNYUrMWq85xYvvcvcAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGdbOZ1Q8gUO7B%2FZBSrcA4X0CP%2BhEajNabffXmApkqzWFruAQA4tbjLcltCSNt8QRc1s3riejuaotBSgKRQk6EqC8T4aqtAD7ZpeyoUOMNw3e%2BkNKZpB2mCrTkkr71mgAKPANz2a9rAisvoA1I4Qmf%2F0I2xkLInZNiSyYniDpwF2npkuN2d8Nlo%2BIBGWXhgRJ3iZD9tFgFzNrcQAOHdfJ2Zd7fhi3b4NGAWCzCREmePF2E2Hot0F2Y%2FPRFSwJg5FMpPelXm5cv6Xe%2FNv8x7n4Yf4%2BsgM4VXjdQ63sXOCq5Urdw6tUu66YN0hLAjDRigqENhcq%2FqVl46ta7J%2BzOuRwcaCf01cZ7qq4YT%2B2IXt%2FkMK5b3h9HJkHtzyYtPhVixTuPo16QNLUojpDhxQIoUDz1TMMxH6TMn0je%2FrMISuSYPhwTQusWFSkoO1NVsa5qE2rVg8SnCkD3K477CY7dbxBSVeESB3Mou8y76XNpfwURY%2B7tTI8T6TVDld6J2fNaMgraDgrZCzJkx5j2ApYqnLG18DH2GVv%2Fppy8wWEhttaEVrq7f1%2FiDr1OfLSSX5QTTyl2z7YEuQmSsSmWfuoBeuUMwWih0A7gI%2FpJ5eqi7yTV8qE574YrXx%2Bap5phTl%2B9wKG%2FwtaZ2FtLXx1sefMLT7mMEGOqUB%2FD%2FSKCKpg6kfiiUI314Y0F9ankF93OcKdeB7NnZaf1Xpk%2FcD0o66f9BPNt5Fyz%2BYlaNQOyjOgDAMC3WUTC0agZ8pxlWHmN8rrgcFReWubKNouPfbVTe6X%2FgZBv9a9RJnO%2BAc28ZB1HbWnwNJkM4pnmSIi%2FGwF9nViolug9eWBAtO3yuP4HfhyAnDuJnp%2B830VGLrzMOGcIb7jsgT8N2ttscnmq7h&X-Amz-Signature=a8c64e38a78266fbd4286cf5dd37ae308530b1257e378c255348b4b412d664f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6XCOEG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH1umSzKtxDV2Y57d1Cf9H3FLyEZFVSw%2FOd%2BeHiBiGOuAiEAmcV7yeyzJ%2F4LLWhNRn99yqTvtgNYUrMWq85xYvvcvcAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGdbOZ1Q8gUO7B%2FZBSrcA4X0CP%2BhEajNabffXmApkqzWFruAQA4tbjLcltCSNt8QRc1s3riejuaotBSgKRQk6EqC8T4aqtAD7ZpeyoUOMNw3e%2BkNKZpB2mCrTkkr71mgAKPANz2a9rAisvoA1I4Qmf%2F0I2xkLInZNiSyYniDpwF2npkuN2d8Nlo%2BIBGWXhgRJ3iZD9tFgFzNrcQAOHdfJ2Zd7fhi3b4NGAWCzCREmePF2E2Hot0F2Y%2FPRFSwJg5FMpPelXm5cv6Xe%2FNv8x7n4Yf4%2BsgM4VXjdQ63sXOCq5Urdw6tUu66YN0hLAjDRigqENhcq%2FqVl46ta7J%2BzOuRwcaCf01cZ7qq4YT%2B2IXt%2FkMK5b3h9HJkHtzyYtPhVixTuPo16QNLUojpDhxQIoUDz1TMMxH6TMn0je%2FrMISuSYPhwTQusWFSkoO1NVsa5qE2rVg8SnCkD3K477CY7dbxBSVeESB3Mou8y76XNpfwURY%2B7tTI8T6TVDld6J2fNaMgraDgrZCzJkx5j2ApYqnLG18DH2GVv%2Fppy8wWEhttaEVrq7f1%2FiDr1OfLSSX5QTTyl2z7YEuQmSsSmWfuoBeuUMwWih0A7gI%2FpJ5eqi7yTV8qE574YrXx%2Bap5phTl%2B9wKG%2FwtaZ2FtLXx1sefMLT7mMEGOqUB%2FD%2FSKCKpg6kfiiUI314Y0F9ankF93OcKdeB7NnZaf1Xpk%2FcD0o66f9BPNt5Fyz%2BYlaNQOyjOgDAMC3WUTC0agZ8pxlWHmN8rrgcFReWubKNouPfbVTe6X%2FgZBv9a9RJnO%2BAc28ZB1HbWnwNJkM4pnmSIi%2FGwF9nViolug9eWBAtO3yuP4HfhyAnDuJnp%2B830VGLrzMOGcIb7jsgT8N2ttscnmq7h&X-Amz-Signature=63fc08ac6dfed2b74e8b81a3466be43f1e8200ec5aa605a716563739b64d208d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
