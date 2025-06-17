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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQV5N5BR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1YYPwFO3x1l%2FpsWfp6%2B0M7atxKn9woDkT1RTEhmbY%2FAiBUBQstptdlVQ%2BVjDcvdH7WzskA%2B0OrKAEEtwqu9mf5oyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMVB3cT2BMAqMkZ4SrKtwDbORrh1MV04ARWIFCq1P8yKFDTu3ovEoXK6OCe3oPi7XyX5ztkkaD%2FyIVetvSzDLBMSsugiu6DDJhH1%2BGBMJuLIK2PrSjDWaYEYMC7Klzeaxz%2FDJPT0dyL8mhmy2jXRBB1J4hSO96eKdxbCk%2F9lTojAjfKrckLGO1JZEL%2BKy0Ga364dZjyH6MdFfOBawzKFSZ198CSCi%2BovzkQeOV%2F7z3AkWAmqFPnq%2FVlBiMe4243%2B9eSuUglMNo2GCnNqOj%2F8j%2F2oNUerFPOh6SDfT4OobkHD6S82n8fqAUE0VlHMDWKkQamQgeV93PcW69gItI%2FbiGHH%2FXxeHbx3erFD7x6ntI7rmE3PZQMu24nvxUFaH9XbF9pb6wyWLLKxRa32VdkwO9ucy%2FRCD8AD2h9KaacP9FVqoFdrzd6FItUgQM7djTVOJgTY7Y8LJVVJGvRTY507sCm5X4U8yIIm48Kz3UI5oYbdYpXnXgCqEX0zWV5s9IoERdLgtAxIRn%2FsPUvuXEFVN%2FJnP4tK0cRvZqMcYbc1y0XzNadMhhX%2BR2We6y%2FEV4g2HaDR%2FLGC4aaShaSSEyJ6ZRa9cEowUmKsVyUvd0%2Bv2GvKGh%2FT%2FBtbj0s743rbksNe2NWRZaqWNFuGO7t7Iwq5PEwgY6pgFyZyQK3EJiy0CrYSLs2z3FYVFezsuEdKxahiN9npwAkjJ2mHb16ReV6uRgdG0LuxAGqneAsZp1iSKe6oWfXMlHwjeS472XVrEeL935D1pqy5SphHuWbqqkFbXi31u%2FkkvvItQuIr2Wq6yGVUvV1OIzoLrgxqFCSKUBYbPOYsGM5wUleTP8aMSyLE0vpeirlQ0zlsga7V2t11e2zVQCZxS45L0N68bL&X-Amz-Signature=36d855db6d5af5bec666606a835ed9a77457b371c65e631e7366a790d5bee0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQV5N5BR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1YYPwFO3x1l%2FpsWfp6%2B0M7atxKn9woDkT1RTEhmbY%2FAiBUBQstptdlVQ%2BVjDcvdH7WzskA%2B0OrKAEEtwqu9mf5oyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMVB3cT2BMAqMkZ4SrKtwDbORrh1MV04ARWIFCq1P8yKFDTu3ovEoXK6OCe3oPi7XyX5ztkkaD%2FyIVetvSzDLBMSsugiu6DDJhH1%2BGBMJuLIK2PrSjDWaYEYMC7Klzeaxz%2FDJPT0dyL8mhmy2jXRBB1J4hSO96eKdxbCk%2F9lTojAjfKrckLGO1JZEL%2BKy0Ga364dZjyH6MdFfOBawzKFSZ198CSCi%2BovzkQeOV%2F7z3AkWAmqFPnq%2FVlBiMe4243%2B9eSuUglMNo2GCnNqOj%2F8j%2F2oNUerFPOh6SDfT4OobkHD6S82n8fqAUE0VlHMDWKkQamQgeV93PcW69gItI%2FbiGHH%2FXxeHbx3erFD7x6ntI7rmE3PZQMu24nvxUFaH9XbF9pb6wyWLLKxRa32VdkwO9ucy%2FRCD8AD2h9KaacP9FVqoFdrzd6FItUgQM7djTVOJgTY7Y8LJVVJGvRTY507sCm5X4U8yIIm48Kz3UI5oYbdYpXnXgCqEX0zWV5s9IoERdLgtAxIRn%2FsPUvuXEFVN%2FJnP4tK0cRvZqMcYbc1y0XzNadMhhX%2BR2We6y%2FEV4g2HaDR%2FLGC4aaShaSSEyJ6ZRa9cEowUmKsVyUvd0%2Bv2GvKGh%2FT%2FBtbj0s743rbksNe2NWRZaqWNFuGO7t7Iwq5PEwgY6pgFyZyQK3EJiy0CrYSLs2z3FYVFezsuEdKxahiN9npwAkjJ2mHb16ReV6uRgdG0LuxAGqneAsZp1iSKe6oWfXMlHwjeS472XVrEeL935D1pqy5SphHuWbqqkFbXi31u%2FkkvvItQuIr2Wq6yGVUvV1OIzoLrgxqFCSKUBYbPOYsGM5wUleTP8aMSyLE0vpeirlQ0zlsga7V2t11e2zVQCZxS45L0N68bL&X-Amz-Signature=42104d076ef5c711eeb623ac390d691e5acbd7e63daf71cb12d1349fde5ecc06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
