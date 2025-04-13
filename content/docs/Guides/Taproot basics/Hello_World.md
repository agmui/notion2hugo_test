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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65HHY7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZrftPGeitrRiRt%2F4qfKgkcp163Ra8b4p%2F8Z09%2ByRP9AiEAyonj6S9D8ooL6JwIkQxIr7NTR3b%2BxMdMETMN4EP%2BfW4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcLbsPeBcLI5qwwLCrcA82vYlkRUpO%2FoT8h2QUerG%2FuM1x4ewivAmXQotf2LoJLX2GVTjLWlWgZVSI7A76pWr2ACn8DoEfZIPVZG7E4WZrOGBX7ciE5I%2BMwOZzNJz52ycf7A5KAH5sXgGJoNyP%2FvAvYhUaQRRy2xfa1fU1Eaxt8RPbHL7qY%2FxXxWXx5RoQiJJlRf9qXs3LQOIlx%2BwHEI3xOukTr8jhXtiiX2JO81mEbnJNtFmGs1YiX6qdI7ke21YccUCv12W8cr6qOdG6XPxuzEd7MKbBeWf8m9KRH6wFKEw32Vp%2FvwcaiFaPN0Bubzxmrlk5mArWFZhFeae0EttL8i8gq0gDCTiEB4134P4npUZ8L91vgVbmt4%2FalMeffrDckMPuU0eIA6pRvheX3mhPik30KTHLqLTJOro4kXG7NA9700l3LI7bh0LiG0dd%2Ba57pk6t%2BYoJMv1ZWFTrMB1IAll%2BR2sK0VBUjh38Dg4UwwszUBVGvxP0cc0RDvvddXONIMshPQPNAAa%2BtWQgqfsfUmepd2yeuA4sh1UyP7gTFfx%2BB4DBtvSBr948zcO9QSyd8RoA3i8P72uHMNWK%2F8if5Y5vYB3yE0FY4pZs7rszS0Pl46SnE94EhAOVflpMk5jAAkd6r%2BoLVpbccMLmw8L8GOqUBGi8G3JmHqPfPtDUL0j7ReBsG6uZ6eFPQD9Z9ItzEJLZa%2BGQmBwLhnnOyz0zEewFBnQVKN4lBNtjo4BgUxOPOkH3xUraosFlstHXHCScOYSTKLjEIPafVIkRU%2B5sMTz%2BhC4I7tZIGPEIq019MAZR7fchSrMYqA7on%2FEHuZOCd4i71IJfSvlGBHR0pmWBAAP8QahWoUzP2aOftJ%2FBtVKI5XAveQePR&X-Amz-Signature=cc0b15795c5d39b85e625b69df97483cf9dc3810a030996e6546fe3656725226&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65HHY7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBZrftPGeitrRiRt%2F4qfKgkcp163Ra8b4p%2F8Z09%2ByRP9AiEAyonj6S9D8ooL6JwIkQxIr7NTR3b%2BxMdMETMN4EP%2BfW4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcLbsPeBcLI5qwwLCrcA82vYlkRUpO%2FoT8h2QUerG%2FuM1x4ewivAmXQotf2LoJLX2GVTjLWlWgZVSI7A76pWr2ACn8DoEfZIPVZG7E4WZrOGBX7ciE5I%2BMwOZzNJz52ycf7A5KAH5sXgGJoNyP%2FvAvYhUaQRRy2xfa1fU1Eaxt8RPbHL7qY%2FxXxWXx5RoQiJJlRf9qXs3LQOIlx%2BwHEI3xOukTr8jhXtiiX2JO81mEbnJNtFmGs1YiX6qdI7ke21YccUCv12W8cr6qOdG6XPxuzEd7MKbBeWf8m9KRH6wFKEw32Vp%2FvwcaiFaPN0Bubzxmrlk5mArWFZhFeae0EttL8i8gq0gDCTiEB4134P4npUZ8L91vgVbmt4%2FalMeffrDckMPuU0eIA6pRvheX3mhPik30KTHLqLTJOro4kXG7NA9700l3LI7bh0LiG0dd%2Ba57pk6t%2BYoJMv1ZWFTrMB1IAll%2BR2sK0VBUjh38Dg4UwwszUBVGvxP0cc0RDvvddXONIMshPQPNAAa%2BtWQgqfsfUmepd2yeuA4sh1UyP7gTFfx%2BB4DBtvSBr948zcO9QSyd8RoA3i8P72uHMNWK%2F8if5Y5vYB3yE0FY4pZs7rszS0Pl46SnE94EhAOVflpMk5jAAkd6r%2BoLVpbccMLmw8L8GOqUBGi8G3JmHqPfPtDUL0j7ReBsG6uZ6eFPQD9Z9ItzEJLZa%2BGQmBwLhnnOyz0zEewFBnQVKN4lBNtjo4BgUxOPOkH3xUraosFlstHXHCScOYSTKLjEIPafVIkRU%2B5sMTz%2BhC4I7tZIGPEIq019MAZR7fchSrMYqA7on%2FEHuZOCd4i71IJfSvlGBHR0pmWBAAP8QahWoUzP2aOftJ%2FBtVKI5XAveQePR&X-Amz-Signature=e4a134c9c96551e59afa3f9f2d6d94433677fd8bf0878f0d85ae73149b1e330a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
