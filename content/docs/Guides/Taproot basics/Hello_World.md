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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSFJ27K%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeCYk%2FL%2FkkPipD81HkKO6VaYJjQFyIONqMFMRqHYDm%2BAiEA4oZmGdmNDX0oS9JSH9iQt5uaPHkSQsyFlObcStV6Fv8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRWPXxEiATnHQF2SrcAwIzciwAd%2FUaKv5%2FKFc0AR1PCyKjB9wQcbKwcVH6iGiVxlPe%2FSVoLuj%2F4wWPVJgv2Ni9WL9OvO%2FcCOayJyI0Dc6iAMafIrvgzTgyWAHrXWxbGjv1%2BmabEldD5%2BcIImd0FkjYHeDi6QUFU7WjX%2FB4MKmepXO8ssqU03CbvzqUmLoL%2Fu%2Bwm1jx2XJWyPDdgyMC9GYGj1YcCB5QU34ysx7JUWFdRhMUR9ctlYKDKmcyBASiLf%2Frz%2FQ5ayFVlLGB26dTrO1%2FvUDwYyL3ExQ9oBlHdvcRedCo1jf02RvCCnL5qN7OP9WJJdPE5Y3Cknu%2FdkUA33S1WkIx3Zh2izLzb7o7XS4i9ihc09pKM8nfo1o3MA5IND75sePN3SxBuGD55uZNk3oiSJYoLsXitf0Ax62%2BkheyTG3247wcPcTMz%2Feu2Z%2BZGsPKa5zI9Rt7aLFUgtGtEWQI6Lz4tLF2VFWxvuxKdnWgCp6%2BCjWECMM9t09yDoZTB9DAY6YYru74DCmmvFVwbr7e7adv9NAsDqAhqDW%2BSYnuaYZifyXv5SIdoouCXezmJ%2FB5AhKzJa7Ield4Ao9Ttee%2Bsd%2B%2Fjj5K1LB0LM3Zlqjdm9Dg%2BhcE2xYMmTPTrHwJcs2EmyW4YPWzIlL1MIre3MIGOqUB1zibgrEjMuBunr3Lo9UKu5ajAgQEO99aKLkV9%2By67MnCDOCdFawWB1xMw%2B8j1ArNABVrZvBDHXrKZruQ8kcTeZB%2BbZL4xiMEDIRYSWV%2FMZT3Kp9fDH36daX4HqH%2B95j3%2FzSboJJ9bThi98UcTnhVfCqEssUNUajRLbrqIlXQdnf5iZYnj28AAbECyi0xgZD2jrSHQTRzbWetkqU0Xbs6WHfpUTKy&X-Amz-Signature=6357fa43974b9668ec9d9c932ebc23aeef0b4786b542256435e5abe5632306db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSFJ27K%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeCYk%2FL%2FkkPipD81HkKO6VaYJjQFyIONqMFMRqHYDm%2BAiEA4oZmGdmNDX0oS9JSH9iQt5uaPHkSQsyFlObcStV6Fv8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRWPXxEiATnHQF2SrcAwIzciwAd%2FUaKv5%2FKFc0AR1PCyKjB9wQcbKwcVH6iGiVxlPe%2FSVoLuj%2F4wWPVJgv2Ni9WL9OvO%2FcCOayJyI0Dc6iAMafIrvgzTgyWAHrXWxbGjv1%2BmabEldD5%2BcIImd0FkjYHeDi6QUFU7WjX%2FB4MKmepXO8ssqU03CbvzqUmLoL%2Fu%2Bwm1jx2XJWyPDdgyMC9GYGj1YcCB5QU34ysx7JUWFdRhMUR9ctlYKDKmcyBASiLf%2Frz%2FQ5ayFVlLGB26dTrO1%2FvUDwYyL3ExQ9oBlHdvcRedCo1jf02RvCCnL5qN7OP9WJJdPE5Y3Cknu%2FdkUA33S1WkIx3Zh2izLzb7o7XS4i9ihc09pKM8nfo1o3MA5IND75sePN3SxBuGD55uZNk3oiSJYoLsXitf0Ax62%2BkheyTG3247wcPcTMz%2Feu2Z%2BZGsPKa5zI9Rt7aLFUgtGtEWQI6Lz4tLF2VFWxvuxKdnWgCp6%2BCjWECMM9t09yDoZTB9DAY6YYru74DCmmvFVwbr7e7adv9NAsDqAhqDW%2BSYnuaYZifyXv5SIdoouCXezmJ%2FB5AhKzJa7Ield4Ao9Ttee%2Bsd%2B%2Fjj5K1LB0LM3Zlqjdm9Dg%2BhcE2xYMmTPTrHwJcs2EmyW4YPWzIlL1MIre3MIGOqUB1zibgrEjMuBunr3Lo9UKu5ajAgQEO99aKLkV9%2By67MnCDOCdFawWB1xMw%2B8j1ArNABVrZvBDHXrKZruQ8kcTeZB%2BbZL4xiMEDIRYSWV%2FMZT3Kp9fDH36daX4HqH%2B95j3%2FzSboJJ9bThi98UcTnhVfCqEssUNUajRLbrqIlXQdnf5iZYnj28AAbECyi0xgZD2jrSHQTRzbWetkqU0Xbs6WHfpUTKy&X-Amz-Signature=e76cf9e4ecafc60a1f7408bd9a4305a3ae0feeaa9b717a684d455aed7c80d320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
