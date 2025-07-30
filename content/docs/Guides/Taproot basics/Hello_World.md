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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUBVB4L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu4zjsBhponzpl%2BTfgNcsLLAgGo3G5Dme3Xw54iI87%2FAiEA6jTdRP7PmDXMSmF9aFWJGy%2FiFSsPM4JHSBlvC%2BDrm0UqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzQYrnEwN7ZdvvnOyrcAzyxAVBOZV4mWoJTkP8aHcTctmGFDaf8M66Dpu9aCuSEWUSMjC2paCWCpuL5kn3y%2Fduf%2BUJBBzVk%2F6PSXcgBNniyZ44Cq8jMjTATnct5q51k0OubAOClz2mzYmXYx07GtFWoaQ3B9FE%2FV%2BVxpdpqrs8lRvskY7uUJ7DK9vrGpjJaGbFxUPcFd3J%2F8XPtVbMgu89yny6LGETZ18GGzX2ThqQTa6Nq6sYTA30uXKB6wwcXm86QKrJPZJS%2BCkIMdW%2FyFDuzkEATii4RVy4jvBDPSCAlXBiPlJnn%2BiuXMsQ71HKa55mqaYTLN4eBEVtk8RAFjyNi7XiEu%2F0clKB597CmrOwTzpUfnraWuQwzfjW0EZV1UAbFCafyXYJMUetymsUMbpEN2p2ZweIu29xuQ7h7QbshZ7iQBwt3KGcu6RvOP1eDmzJBiCoiUgG7%2BrvoFeNUN431f7iySnsdVcoL6dR9IdTvQi6Iix8f3DHQnq08McyTN923Dg%2Byo3pnmlN45DL8%2FjeXTZT5EkUSReS6WLvsDNHZR0J1qLl0QuUrFUyI2%2Fl%2FdjWvJMcS7bviTUQEymNPdNtnKkpwrge1%2B%2B6gSQQMMxUHLuVibY5VOrptZX29s5hBiJ%2BxH8q22cQE3phrMPzypcQGOqUB43ZaV%2BGVh7KARVCeck2DdTX%2BvsIFPBO84oDB8jk9%2Bbo%2FoKT6OBqQtFbouxFxEpi6d0Lh8BKHk566Wn9e7wMGs4G8V1yXx43ybCRk33Dijk4qz4%2BfWHgxQYI3xOtJtSYTcNCnbYKbjV%2BXPOzfeIm7f4N9rUYPFXJ1M2IhaSrjbgArUqJmIUBWlX5ArZfb%2FuB0n0fREr4gzItFIjxj1t%2BjfGtCVcUe&X-Amz-Signature=15d60797f13127a04c65dfb197928c857b5545d046ec17b22587e811f190e648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUBVB4L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu4zjsBhponzpl%2BTfgNcsLLAgGo3G5Dme3Xw54iI87%2FAiEA6jTdRP7PmDXMSmF9aFWJGy%2FiFSsPM4JHSBlvC%2BDrm0UqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzQYrnEwN7ZdvvnOyrcAzyxAVBOZV4mWoJTkP8aHcTctmGFDaf8M66Dpu9aCuSEWUSMjC2paCWCpuL5kn3y%2Fduf%2BUJBBzVk%2F6PSXcgBNniyZ44Cq8jMjTATnct5q51k0OubAOClz2mzYmXYx07GtFWoaQ3B9FE%2FV%2BVxpdpqrs8lRvskY7uUJ7DK9vrGpjJaGbFxUPcFd3J%2F8XPtVbMgu89yny6LGETZ18GGzX2ThqQTa6Nq6sYTA30uXKB6wwcXm86QKrJPZJS%2BCkIMdW%2FyFDuzkEATii4RVy4jvBDPSCAlXBiPlJnn%2BiuXMsQ71HKa55mqaYTLN4eBEVtk8RAFjyNi7XiEu%2F0clKB597CmrOwTzpUfnraWuQwzfjW0EZV1UAbFCafyXYJMUetymsUMbpEN2p2ZweIu29xuQ7h7QbshZ7iQBwt3KGcu6RvOP1eDmzJBiCoiUgG7%2BrvoFeNUN431f7iySnsdVcoL6dR9IdTvQi6Iix8f3DHQnq08McyTN923Dg%2Byo3pnmlN45DL8%2FjeXTZT5EkUSReS6WLvsDNHZR0J1qLl0QuUrFUyI2%2Fl%2FdjWvJMcS7bviTUQEymNPdNtnKkpwrge1%2B%2B6gSQQMMxUHLuVibY5VOrptZX29s5hBiJ%2BxH8q22cQE3phrMPzypcQGOqUB43ZaV%2BGVh7KARVCeck2DdTX%2BvsIFPBO84oDB8jk9%2Bbo%2FoKT6OBqQtFbouxFxEpi6d0Lh8BKHk566Wn9e7wMGs4G8V1yXx43ybCRk33Dijk4qz4%2BfWHgxQYI3xOtJtSYTcNCnbYKbjV%2BXPOzfeIm7f4N9rUYPFXJ1M2IhaSrjbgArUqJmIUBWlX5ArZfb%2FuB0n0fREr4gzItFIjxj1t%2BjfGtCVcUe&X-Amz-Signature=c2b5ec1669811897fc9d5c353252b0153bd267cc33deb9eccb62fe6861720db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
