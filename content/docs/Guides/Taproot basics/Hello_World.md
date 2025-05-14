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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YNBEUJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDS2qAQYtGV0UB%2BibTp7OdG6xihtng8L1AgVUROyF4L9AiBrQ9RIKPLw776XFQQeB9J7DuZ5AMWo1VM0Me3OJEiUxyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM0MCxd92uHuuhUyqlKtwDr6XVLv5ranlaQYHy009NGqqDHbYKCVpI9JPH511ND5dPS9mw6B9HStqU%2ByqgwOQVkfxK97aCjUSdEh5IZMLDwIpWBbAKsAI7sVLvxbfdPDmw8DHAxTkka4UKT%2BpX1WRBcB5AcmmaI4HO5PfeQo%2FcmkeYKPIkTB0Grp7OhEAUvrN5d5%2FGC0NrdI8TKFOOxO9TtUeWKjkXsfeRNvM8BI4HozK2yrVk0UIhT3bapEX34oPQbCsIh%2Fo6wY1%2BASE6j%2FEvhEAkSCp3Wg4wDhOj6fhP0GFojfoNUDIMyRaIlZA9EDqW89YT53H3E4XkqCx%2BZeEZTPEURpQ778WzDkyZctovYLJFrRcGVOvlzyX%2FNpWWfcveNBPdWXYWE9mEtmxTxDxBo0JKCqPvje49tFuCk29UrqO5GVBgIBgSJw%2B2Ed2bwdw2d1uPLqQnop71H3bWL%2FEwEfeB8dcuduk%2FWmwQgB0lo30CR%2B%2Fudu4v9zoO5lGJkGjKF9ocGuPL%2F26NtdzdlsRsW8vFCU39%2By5MmAyJGzH6YaZQDDPPLEyDHzH00ijRrYymBSEuMLnmi%2Fi9DFt7ehN7%2BJfeUR41ikzqcUap7VG1xKfaz88PuPcgUO50JJ%2FTmYNC4Oj7OocPBO%2FQKiUwn7qUwQY6pgH2SuZm85NPQclj5EafACj8RPjhmmfzChBbXn6A7ljZ9VgJii6uZSEH9b4HOmWxBDwwBXS99t5Kf3KIOGk4jqCxt3vyF1EFs7I0ZO%2FwmG6VTF7SVkOERj8Cng5IcE5fhxvsRhbRPONgpX4QloWHe3U5MkIyFoSlEWx18N%2FDJDM36qfhT4AQOJybeONjdhJFKJYzjDweLw83mU6IGqlGimG4cw8koPha&X-Amz-Signature=a24a2f42d658a475d5467021b61430a662bffbf873bf33c063189076e1e47a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YNBEUJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDS2qAQYtGV0UB%2BibTp7OdG6xihtng8L1AgVUROyF4L9AiBrQ9RIKPLw776XFQQeB9J7DuZ5AMWo1VM0Me3OJEiUxyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM0MCxd92uHuuhUyqlKtwDr6XVLv5ranlaQYHy009NGqqDHbYKCVpI9JPH511ND5dPS9mw6B9HStqU%2ByqgwOQVkfxK97aCjUSdEh5IZMLDwIpWBbAKsAI7sVLvxbfdPDmw8DHAxTkka4UKT%2BpX1WRBcB5AcmmaI4HO5PfeQo%2FcmkeYKPIkTB0Grp7OhEAUvrN5d5%2FGC0NrdI8TKFOOxO9TtUeWKjkXsfeRNvM8BI4HozK2yrVk0UIhT3bapEX34oPQbCsIh%2Fo6wY1%2BASE6j%2FEvhEAkSCp3Wg4wDhOj6fhP0GFojfoNUDIMyRaIlZA9EDqW89YT53H3E4XkqCx%2BZeEZTPEURpQ778WzDkyZctovYLJFrRcGVOvlzyX%2FNpWWfcveNBPdWXYWE9mEtmxTxDxBo0JKCqPvje49tFuCk29UrqO5GVBgIBgSJw%2B2Ed2bwdw2d1uPLqQnop71H3bWL%2FEwEfeB8dcuduk%2FWmwQgB0lo30CR%2B%2Fudu4v9zoO5lGJkGjKF9ocGuPL%2F26NtdzdlsRsW8vFCU39%2By5MmAyJGzH6YaZQDDPPLEyDHzH00ijRrYymBSEuMLnmi%2Fi9DFt7ehN7%2BJfeUR41ikzqcUap7VG1xKfaz88PuPcgUO50JJ%2FTmYNC4Oj7OocPBO%2FQKiUwn7qUwQY6pgH2SuZm85NPQclj5EafACj8RPjhmmfzChBbXn6A7ljZ9VgJii6uZSEH9b4HOmWxBDwwBXS99t5Kf3KIOGk4jqCxt3vyF1EFs7I0ZO%2FwmG6VTF7SVkOERj8Cng5IcE5fhxvsRhbRPONgpX4QloWHe3U5MkIyFoSlEWx18N%2FDJDM36qfhT4AQOJybeONjdhJFKJYzjDweLw83mU6IGqlGimG4cw8koPha&X-Amz-Signature=c15650241b59cdaa274c3886080551ed4f60f6d775de849afb59d730809d464a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
