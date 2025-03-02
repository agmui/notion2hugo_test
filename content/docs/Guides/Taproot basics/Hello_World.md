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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBKQ2VX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCjl1fIIvsDMqqKhDfdHNNsc3upBw%2BZqFC04ns%2BXQehAIhAIRXHeTXcschQrEzDexWIaG%2B7dDSLo4X6q2cUs6bZsxFKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWe7eKHpUkMVBxTXMq3ANZ25YrHCWNOS1%2FL0x7j%2FHHqV%2BOphdg5%2B4KbaUblEbpbRGWzAXEafkQ%2BP%2FIfOSYnXJQoQI0nAHTLdTruSgugo17Siz%2BESqpm8SxohkTpsTs1JwEFk%2F2wi6M%2FVC8ioetJJWlfbpLaf6pxw7zu%2FbtvGg2%2FI7czNf4%2B%2BFpcWgRBgNOj%2BJb4ttSnvk6Xrdlv85XP1a8C0XJRqJfuV%2B%2BE3o9YkD%2FHQRYyHMGFBNOKus2%2FjCl0x1YAlwdCoiqPGAG6kMwzTmrCRjfatrr%2F%2BubsZOygb0I4Mgb8im0flVGfYMBAX9LJfbz3yD9vV4GtcbKzVwgAP7uYYEdHqlUD%2BL9rj3oNO6B0L1yblFjiPnK2DApqDzwsMoQx29Q3YV4WRwGMXxrvl8Eh6XJX9%2Fwj1rEUullWFnzeLEwJ%2FjmkgioVDpy0LRonf9J8IhJMoTKamMZkYFtOHo%2FPal02iw6hbpyOsQLwlm4FTLdMra30mfBaJ8wWqtEXRAZLRFeOVN4otliCuH2k1IGEgBp%2FkcyFEit7Pi%2B7BOHf9FshFbNHJWKnwzYk6vepZkLF%2FB9tpQV84sp8oIjd6X6T5IbLjBm810z5EJt2NR6xh%2FgbNqUwDkTVga9wfs%2BxXwIMSTZMQ%2BuKxNAwjCG%2FZC%2BBjqkAWSxsddyndTizprDKZTerAutTyb%2FMLKKMqEAcGRMUCy13xQsMYVUGnr4RH5TiazZT%2BMUaO%2BZ%2BH%2FjbuUgA7GNBTHNd9q4tnBXILrGSzOYuVL1vBWNuXDK0Mtb9VA4sGIHhINIjrj3UimLrcSmBcII1CSF0ppW2m0bc4%2F4N%2B5RzeyAdSbdnWCsdGtidH8LynkTi0ZQStswmfRa6eAVFPEDfYUzykPk&X-Amz-Signature=7851468e5b22a078b540542f548ba34065b73e8f22c948402feac4e245814157&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBKQ2VX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCjl1fIIvsDMqqKhDfdHNNsc3upBw%2BZqFC04ns%2BXQehAIhAIRXHeTXcschQrEzDexWIaG%2B7dDSLo4X6q2cUs6bZsxFKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWe7eKHpUkMVBxTXMq3ANZ25YrHCWNOS1%2FL0x7j%2FHHqV%2BOphdg5%2B4KbaUblEbpbRGWzAXEafkQ%2BP%2FIfOSYnXJQoQI0nAHTLdTruSgugo17Siz%2BESqpm8SxohkTpsTs1JwEFk%2F2wi6M%2FVC8ioetJJWlfbpLaf6pxw7zu%2FbtvGg2%2FI7czNf4%2B%2BFpcWgRBgNOj%2BJb4ttSnvk6Xrdlv85XP1a8C0XJRqJfuV%2B%2BE3o9YkD%2FHQRYyHMGFBNOKus2%2FjCl0x1YAlwdCoiqPGAG6kMwzTmrCRjfatrr%2F%2BubsZOygb0I4Mgb8im0flVGfYMBAX9LJfbz3yD9vV4GtcbKzVwgAP7uYYEdHqlUD%2BL9rj3oNO6B0L1yblFjiPnK2DApqDzwsMoQx29Q3YV4WRwGMXxrvl8Eh6XJX9%2Fwj1rEUullWFnzeLEwJ%2FjmkgioVDpy0LRonf9J8IhJMoTKamMZkYFtOHo%2FPal02iw6hbpyOsQLwlm4FTLdMra30mfBaJ8wWqtEXRAZLRFeOVN4otliCuH2k1IGEgBp%2FkcyFEit7Pi%2B7BOHf9FshFbNHJWKnwzYk6vepZkLF%2FB9tpQV84sp8oIjd6X6T5IbLjBm810z5EJt2NR6xh%2FgbNqUwDkTVga9wfs%2BxXwIMSTZMQ%2BuKxNAwjCG%2FZC%2BBjqkAWSxsddyndTizprDKZTerAutTyb%2FMLKKMqEAcGRMUCy13xQsMYVUGnr4RH5TiazZT%2BMUaO%2BZ%2BH%2FjbuUgA7GNBTHNd9q4tnBXILrGSzOYuVL1vBWNuXDK0Mtb9VA4sGIHhINIjrj3UimLrcSmBcII1CSF0ppW2m0bc4%2F4N%2B5RzeyAdSbdnWCsdGtidH8LynkTi0ZQStswmfRa6eAVFPEDfYUzykPk&X-Amz-Signature=8b2690bb0ab1d07691b8bfd9e8bd460ad9f5d21f6a122ce363920a3a5edc130a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
