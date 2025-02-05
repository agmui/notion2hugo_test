---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G44I6R4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDnpFS2wdWc%2FBK9B33exxStAeQHrb5WgT8FUsuoHRb5AAIhANHQcx3WOz1ZP9xfGuSkC0x46tuaX9x8CpO0O2H3xbSqKv8DCDkQABoMNjM3NDIzMTgzODA1IgxY5U2M1pNBHM%2BS3e0q3AN4LzgAS3UA7n8H2JKbcd03Ja%2BVw%2F4O4iSQkZZKI7LW3mSs4o4UKC6J%2BbC4ji79fGYLeJOtTWFyyJTTmRorOVbYytX%2FezlEApC%2B5LXhmITLyr%2BQY1cDBt%2Bo5%2F0t4eEGB0Ai9KkmhKhVp221khygxfoB5rFzpgcx3B9P5YgYVWDe1lOO4rMkKYqKbHJBxxuhyBaHboVzRu2WAdLN6%2FG2IPd6YvrHDeqdPCEbWMgn%2Bz5PRRbdmBDqPHPKVt7UU%2FdtwhEhbhbTggbI98vEyuMLRrkXRRxQNYaXUjkJzkAaNPcnD1VBPHSVu6dkSeNeWxDNtx%2BpRwB0eZPUrgPnQlORM6e086%2F2sIUUlt97ec%2Fhkay2hKnCEBhovQ58EUVCehgqqbYRPAGEfNDxfnCCrGC%2Fozou4kFr%2BGvYvsD%2F7xtHURNmSBREYugnJy6vkJC%2BE87guoiQU7fge8utTzPOi0G2GZzWvVhYkczKUO2tf3P724wBHf%2Fbk2wcGWVNI92cqH8egMStowYBRUDM38SZ%2BhPjSEhPKXeudjQP%2FLi4ZQ97ZvP18JenVcyv5QwtJVtrvsriVftYDAbcuyM4Th1dXpIiQGk3jDnPzEno7NP9IoF4ZOloj08PzDcxy9OLCrCyuTC%2Fz4q9BjqkARdN8NkqCMXbeR%2F2dJWO9NcKnb0shxi1Sq7K0rMMgCisYZYB27EBcJ0GH2R3gZL56%2BRDyFIl9Wf2KCw4abSC5NZyJ4DSiNwQyghpzfXoS39UtI29Xiu0u%2F9Ahl4VFqW0OzSsyZdi4bIX27cflaDhZs1bC5fJM5kCovfYk7kCmVRFcSau0TUByVaaasfEFOvMjdcVrbpIRy794cgQahEXO2E9D2gd&X-Amz-Signature=cb5752a191b078f53a2cd89c523dbeb3bd023a234b4b88fc3f6c7ad9b89a051e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G44I6R4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDnpFS2wdWc%2FBK9B33exxStAeQHrb5WgT8FUsuoHRb5AAIhANHQcx3WOz1ZP9xfGuSkC0x46tuaX9x8CpO0O2H3xbSqKv8DCDkQABoMNjM3NDIzMTgzODA1IgxY5U2M1pNBHM%2BS3e0q3AN4LzgAS3UA7n8H2JKbcd03Ja%2BVw%2F4O4iSQkZZKI7LW3mSs4o4UKC6J%2BbC4ji79fGYLeJOtTWFyyJTTmRorOVbYytX%2FezlEApC%2B5LXhmITLyr%2BQY1cDBt%2Bo5%2F0t4eEGB0Ai9KkmhKhVp221khygxfoB5rFzpgcx3B9P5YgYVWDe1lOO4rMkKYqKbHJBxxuhyBaHboVzRu2WAdLN6%2FG2IPd6YvrHDeqdPCEbWMgn%2Bz5PRRbdmBDqPHPKVt7UU%2FdtwhEhbhbTggbI98vEyuMLRrkXRRxQNYaXUjkJzkAaNPcnD1VBPHSVu6dkSeNeWxDNtx%2BpRwB0eZPUrgPnQlORM6e086%2F2sIUUlt97ec%2Fhkay2hKnCEBhovQ58EUVCehgqqbYRPAGEfNDxfnCCrGC%2Fozou4kFr%2BGvYvsD%2F7xtHURNmSBREYugnJy6vkJC%2BE87guoiQU7fge8utTzPOi0G2GZzWvVhYkczKUO2tf3P724wBHf%2Fbk2wcGWVNI92cqH8egMStowYBRUDM38SZ%2BhPjSEhPKXeudjQP%2FLi4ZQ97ZvP18JenVcyv5QwtJVtrvsriVftYDAbcuyM4Th1dXpIiQGk3jDnPzEno7NP9IoF4ZOloj08PzDcxy9OLCrCyuTC%2Fz4q9BjqkARdN8NkqCMXbeR%2F2dJWO9NcKnb0shxi1Sq7K0rMMgCisYZYB27EBcJ0GH2R3gZL56%2BRDyFIl9Wf2KCw4abSC5NZyJ4DSiNwQyghpzfXoS39UtI29Xiu0u%2F9Ahl4VFqW0OzSsyZdi4bIX27cflaDhZs1bC5fJM5kCovfYk7kCmVRFcSau0TUByVaaasfEFOvMjdcVrbpIRy794cgQahEXO2E9D2gd&X-Amz-Signature=c1ad4fadb683c54e5fdde2a98850a1589aa7343f173f3e8e3eeed87f4e935f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
