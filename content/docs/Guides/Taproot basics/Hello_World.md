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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWKI5HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlN1DWuaGAEbW5WXXvPYG4p79bmTuz1eVxyYdisMCXFgIgcDqrwvPxOiZZX0sjzTdtRIv%2BSlBeFDNFZ6Kn7%2FQXNBUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOV%2Fcw4BnHvYIBQWOSrcAxYOxHUI%2B8hGjeu5KdiZ%2F1W%2F0lQjbvfD3xZSMmGnK9GL3L52pmCfAaKCIQ%2FNmCc%2FTdZ9oTWzQIPT7m1SjCLoisV%2Bc9HjFnrXPhg%2BCwMgfYtvQj4ibzz2QwKRo%2BbpvSEtJgJFAnAa0%2FSH%2FF1Mp264AS%2F3STtAwU5Htfv1PpTU4ra3gIWTSdupZNY3akEBVZlH61qsNFWIzOu40CYuTud%2BH6dnqPg%2FGQ00x1vprRhPzvS2ji9fWCa8WAReD5L2CZdCrf9jW9pgFUjtSSDSEWdL2CB1xdj8RifmNAMyMTVrGmCQ8OnjT%2FTm3B60FntUf%2BPJoZI9Oq3x0qZDxthyzI8b%2FLaU7C2mWjERx780DSsJWyGcUXUE44ZS9mZ3ThCyYjyWtZmwp54LZCo9KSnHu8iYoWV7zMtLpUBFQL0i90dBH86IRNO1O07z2G34zWLDayh7oswivbe%2BB3x4JqJ%2BDxzWqQJMe9oonFKXHO9T4L3vg%2BArN8viFoH4DVb1HdFmHhIig%2B95LuO48QeUFzNpDHn3j6IvougNMJNwQNxouslitbrZOApqp1Pl3j87vG7d%2BImfVW6VfrvE8R%2BTHWgBERKN3glCOib29FEgefeSfkSCRUdsbyq5wP0cxMAwqZBvMOiRjcIGOqUBSNKCtzGcRHQxdanRg1Up7BwLBiHTEfM8T1UxLZRLn5eP1UtOhFshexIFg23qGS9Swl0UuiR%2BHzdPd%2B%2Fza4%2BCGJ60%2FYj0TjGCI7dV%2BDWJoz5A42%2FlvoJ218GrrJpxKU%2FYrJ%2BbFvb3aYs60gCCucWUeOgPRVLB%2BASAApSyK0josAhCBSihnAYmMC2uLBpX%2BTqnQSDRPwQAbX%2B%2BqLGtFRzj63BmYDbX&X-Amz-Signature=3e1e2b41a18e8e765aff8e066e92eedfb775636948a6045b7bbc662755430cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWKI5HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlN1DWuaGAEbW5WXXvPYG4p79bmTuz1eVxyYdisMCXFgIgcDqrwvPxOiZZX0sjzTdtRIv%2BSlBeFDNFZ6Kn7%2FQXNBUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOV%2Fcw4BnHvYIBQWOSrcAxYOxHUI%2B8hGjeu5KdiZ%2F1W%2F0lQjbvfD3xZSMmGnK9GL3L52pmCfAaKCIQ%2FNmCc%2FTdZ9oTWzQIPT7m1SjCLoisV%2Bc9HjFnrXPhg%2BCwMgfYtvQj4ibzz2QwKRo%2BbpvSEtJgJFAnAa0%2FSH%2FF1Mp264AS%2F3STtAwU5Htfv1PpTU4ra3gIWTSdupZNY3akEBVZlH61qsNFWIzOu40CYuTud%2BH6dnqPg%2FGQ00x1vprRhPzvS2ji9fWCa8WAReD5L2CZdCrf9jW9pgFUjtSSDSEWdL2CB1xdj8RifmNAMyMTVrGmCQ8OnjT%2FTm3B60FntUf%2BPJoZI9Oq3x0qZDxthyzI8b%2FLaU7C2mWjERx780DSsJWyGcUXUE44ZS9mZ3ThCyYjyWtZmwp54LZCo9KSnHu8iYoWV7zMtLpUBFQL0i90dBH86IRNO1O07z2G34zWLDayh7oswivbe%2BB3x4JqJ%2BDxzWqQJMe9oonFKXHO9T4L3vg%2BArN8viFoH4DVb1HdFmHhIig%2B95LuO48QeUFzNpDHn3j6IvougNMJNwQNxouslitbrZOApqp1Pl3j87vG7d%2BImfVW6VfrvE8R%2BTHWgBERKN3glCOib29FEgefeSfkSCRUdsbyq5wP0cxMAwqZBvMOiRjcIGOqUBSNKCtzGcRHQxdanRg1Up7BwLBiHTEfM8T1UxLZRLn5eP1UtOhFshexIFg23qGS9Swl0UuiR%2BHzdPd%2B%2Fza4%2BCGJ60%2FYj0TjGCI7dV%2BDWJoz5A42%2FlvoJ218GrrJpxKU%2FYrJ%2BbFvb3aYs60gCCucWUeOgPRVLB%2BASAApSyK0josAhCBSihnAYmMC2uLBpX%2BTqnQSDRPwQAbX%2B%2BqLGtFRzj63BmYDbX&X-Amz-Signature=91727c35dbbba65e6e21eac8a73f4833718e1270a45b9081c82d576f8db4c983&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
