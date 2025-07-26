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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHLFHAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCuPkSHuriW%2FnjsjP7TYs3jBOFIbDqiluMZ%2F0fVAsoM9gIgId2XSXVLxi1I8OOzWfKoKJm9d1R%2Fru1r%2BtlD3Ai5l3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH9mSo5LLb%2FWF40CFSrcA3dod5TY0gY7AjVMXhZfUURLMB0RP9xr%2BfKcJkhHK3moaZqbDHfdgbwmsqk72YnTVKPYvzWhyI608YtKBNMjeGCa%2BRUwC%2BF6uGLKkpv0Gbga91JRqxHkKJc42whA8D4u1dUpKDpOF%2FnWdHNgBOJR7DkYODjP3ulG5Zh97gd3kMEbTV0yW2V6jXg1SVzpacRt6cy5Gm1KVnl%2FZ%2F48fjjpBWGAC9QmurceUrcX4uaUDFkuSkwSpctfCyTewoyQQuEvk0oNEjfLiA9t8BxNmQovhxdFoo6Q05ZQyPAlLXfK4ZnrQXlwf8zHaDU1T92ZLTCwwNWfeG%2B0wcrd4JX%2BrRwe1clyixGtX8U1bm6rqBvaPnR6GyDNgP7rpUT9oxgmcOHGOSQRatKYDdVtTkAqQ3726zsgQ%2B%2BZg4TSKOu3GKV7oH9vP0%2F%2Ff%2BLTtFwOLBchenujkDEv3sYliEPiNs0ZuIKeJG%2FjPWNuhoL0yRLXC2H4%2BVX2Jq94B%2FKa46tS448T9k1SeQJKgeo6etLZNhcupGF1oOGUi1u6%2FfbSjffElgnjC%2BBbyKTsDoMjzaafdjqGSVyK8fT%2FncrXyJpA4KByH7W54MEtFXg6CLUL3oQSPBnO%2FI1Kt50UWMoD2itey49EMObAk8QGOqUBUJcoiSVjlAwA9RCfnsMIm6zIkudhUPdQT%2FDp537tmBBNZc5oK863HLNfuvtxAS2KGSzp7PT0ePyZiINmJ6sNS8KPppVe0starEDec%2FE0L7TIs0UIGTmKR62YNPKuu%2FS8%2BXpZqOGLlzLiUYURupyTrbzuuZryuEo9YMyVYWZ6qFr4Xdrb1z979GH77bLQO1VdTdMF97W6VY7Qzg4a8vPgocX%2BkBtT&X-Amz-Signature=9a1ab4f9c9679cd7398a20626250db4c95b9803690ef39f8a6474454d65497a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHLFHAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCuPkSHuriW%2FnjsjP7TYs3jBOFIbDqiluMZ%2F0fVAsoM9gIgId2XSXVLxi1I8OOzWfKoKJm9d1R%2Fru1r%2BtlD3Ai5l3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH9mSo5LLb%2FWF40CFSrcA3dod5TY0gY7AjVMXhZfUURLMB0RP9xr%2BfKcJkhHK3moaZqbDHfdgbwmsqk72YnTVKPYvzWhyI608YtKBNMjeGCa%2BRUwC%2BF6uGLKkpv0Gbga91JRqxHkKJc42whA8D4u1dUpKDpOF%2FnWdHNgBOJR7DkYODjP3ulG5Zh97gd3kMEbTV0yW2V6jXg1SVzpacRt6cy5Gm1KVnl%2FZ%2F48fjjpBWGAC9QmurceUrcX4uaUDFkuSkwSpctfCyTewoyQQuEvk0oNEjfLiA9t8BxNmQovhxdFoo6Q05ZQyPAlLXfK4ZnrQXlwf8zHaDU1T92ZLTCwwNWfeG%2B0wcrd4JX%2BrRwe1clyixGtX8U1bm6rqBvaPnR6GyDNgP7rpUT9oxgmcOHGOSQRatKYDdVtTkAqQ3726zsgQ%2B%2BZg4TSKOu3GKV7oH9vP0%2F%2Ff%2BLTtFwOLBchenujkDEv3sYliEPiNs0ZuIKeJG%2FjPWNuhoL0yRLXC2H4%2BVX2Jq94B%2FKa46tS448T9k1SeQJKgeo6etLZNhcupGF1oOGUi1u6%2FfbSjffElgnjC%2BBbyKTsDoMjzaafdjqGSVyK8fT%2FncrXyJpA4KByH7W54MEtFXg6CLUL3oQSPBnO%2FI1Kt50UWMoD2itey49EMObAk8QGOqUBUJcoiSVjlAwA9RCfnsMIm6zIkudhUPdQT%2FDp537tmBBNZc5oK863HLNfuvtxAS2KGSzp7PT0ePyZiINmJ6sNS8KPppVe0starEDec%2FE0L7TIs0UIGTmKR62YNPKuu%2FS8%2BXpZqOGLlzLiUYURupyTrbzuuZryuEo9YMyVYWZ6qFr4Xdrb1z979GH77bLQO1VdTdMF97W6VY7Qzg4a8vPgocX%2BkBtT&X-Amz-Signature=bfbd240a1ced37e011067072ec0769bde21e1e935223957410333cf5d0c67682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
