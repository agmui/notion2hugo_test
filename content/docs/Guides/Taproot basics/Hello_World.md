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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTWDWKH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEonoi7WJ73y0i%2Br4CWh%2BhSyTMIYK7rjtAPoofEM8UkzAiEA%2Flbz6WM1jLWcdQ%2BVqLbC6J605zaqArtj9%2Bj688lyXfIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITMeyMNQnkXeKwjCyrcA%2FU1m0YHvVZjvWZGaYY%2F4F%2BfSfbkyrd68wUrpUX47olnTTNGGYVNa4pkGA3zz52uNr7IQxgHkLvelLkeQ%2BXQ2%2Fa9O4uvrWI8EJtTebAx%2BluWmpLC6Rxn06fC1%2FzOk15cNEHITYxOfuLTPksaX%2BRQMUGeYDGTQnrnl7lHEufqPIwBqM27uBI%2FhyBX1UU5DHwapBxD8NaYZNeplBUjPmiYFSUbRiUoFva5x2GSfiHzseYG0GXrncJnfkG7NduHuSvd34YHArIcYhChw5nKwnBmuXPq%2B6kupZMNsnx3JRil5Eysa%2BKu5VhSYAkARP4XKAGTIDfMvuu%2FTbd4OLK8urZQKpGmE9NRZh9DzGRn3h8s8O7X4%2B%2FIOWzUkOPURGIRuoKPvYQyCn%2FLjCMWdyffBImmRH9S6HvqWxx2VRP%2FWxVp9t%2Fy3XhEDJ4qw2uLCduMLNCgo1FtbZKOnfTznWinh85uN%2B%2FW5WhKpxoQVpw4DDU3%2FWp2wJw7xqGqGl8cg5sDBf8MsQ5pwhXWlKe6q8MUSsGXXp%2B%2BT8WOX%2B5sAnIkx3TohinTVVioigip0t6rct%2BZLAuiEBvgNKRFs6mwhqqdgl1T2pQOAdHPrwifI5wyRIuF%2F82IorLS77NI7hyUIP81MM%2BDtsMGOqUBJTopcs6CeeWvAZgetvB82t2wzYx943vcdT1qomoIzdyn4L%2FZ776foQSuLvOOODZg4dqKVceMGaTQ2WEPUFqQmNMu%2FZIUv1hHGTGf0CBu0LG1%2BcCCTi0RZ1v0NGP0ZwTQcQM9M86tzoqSKFXXNwhumaePZ63TnEKCuvAwpxuzL3RFEkMWIH6b0EzgIQhBjW9esXAUv%2FEXRupkE7uxPEg%2Bne9Tp5ZP&X-Amz-Signature=7a10df3d57a5099a48ea17016f45317cd6e2ebddbd9a4abda234222a7dc911c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTWDWKH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEonoi7WJ73y0i%2Br4CWh%2BhSyTMIYK7rjtAPoofEM8UkzAiEA%2Flbz6WM1jLWcdQ%2BVqLbC6J605zaqArtj9%2Bj688lyXfIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITMeyMNQnkXeKwjCyrcA%2FU1m0YHvVZjvWZGaYY%2F4F%2BfSfbkyrd68wUrpUX47olnTTNGGYVNa4pkGA3zz52uNr7IQxgHkLvelLkeQ%2BXQ2%2Fa9O4uvrWI8EJtTebAx%2BluWmpLC6Rxn06fC1%2FzOk15cNEHITYxOfuLTPksaX%2BRQMUGeYDGTQnrnl7lHEufqPIwBqM27uBI%2FhyBX1UU5DHwapBxD8NaYZNeplBUjPmiYFSUbRiUoFva5x2GSfiHzseYG0GXrncJnfkG7NduHuSvd34YHArIcYhChw5nKwnBmuXPq%2B6kupZMNsnx3JRil5Eysa%2BKu5VhSYAkARP4XKAGTIDfMvuu%2FTbd4OLK8urZQKpGmE9NRZh9DzGRn3h8s8O7X4%2B%2FIOWzUkOPURGIRuoKPvYQyCn%2FLjCMWdyffBImmRH9S6HvqWxx2VRP%2FWxVp9t%2Fy3XhEDJ4qw2uLCduMLNCgo1FtbZKOnfTznWinh85uN%2B%2FW5WhKpxoQVpw4DDU3%2FWp2wJw7xqGqGl8cg5sDBf8MsQ5pwhXWlKe6q8MUSsGXXp%2B%2BT8WOX%2B5sAnIkx3TohinTVVioigip0t6rct%2BZLAuiEBvgNKRFs6mwhqqdgl1T2pQOAdHPrwifI5wyRIuF%2F82IorLS77NI7hyUIP81MM%2BDtsMGOqUBJTopcs6CeeWvAZgetvB82t2wzYx943vcdT1qomoIzdyn4L%2FZ776foQSuLvOOODZg4dqKVceMGaTQ2WEPUFqQmNMu%2FZIUv1hHGTGf0CBu0LG1%2BcCCTi0RZ1v0NGP0ZwTQcQM9M86tzoqSKFXXNwhumaePZ63TnEKCuvAwpxuzL3RFEkMWIH6b0EzgIQhBjW9esXAUv%2FEXRupkE7uxPEg%2Bne9Tp5ZP&X-Amz-Signature=267072bb05e3e31c0aa1da7f717f34603af302768783f60b46966291bac31c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
