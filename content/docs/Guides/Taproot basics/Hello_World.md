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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKJYC5G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDj9GBZ2AOXOGvaXLJ3cmSFRxJH4UQVp%2BXZqJnR0ISfsQIgMW%2FMTHLLOsJZpw%2F1IxK4EXOijMFNOAkTKT9GLpwHk4gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyZNo3ny2OJwO1i0SrcA1iIR0b5ZCFB421Nm00PB8xrAe74OZ0ohPVViiU0r2%2FM%2BHth6plmu8Vhr5PvP8fVX6%2B5n179juT5RfepqUnAvUOvXyVQ1DO7RM3xAJ6ONhBjoZb4NW%2F56iiqqamWYZMS5i13tl10l8J0XB5kV8pps1Kr%2FJkLsvyipw2pMNYxnKZMJwbrk6PCF6YYJPD8lf8rOxd8V5ZPV7MuQ0Eqj1oqOITTEvrpFXRDFJfduCBXRvk3gMGEh%2Fjjcqqrjt7nnHIXfL6Do2MdnNtt0UrfNhLSzM2NndhxPFIVRH0PszXLoAW4mN0cs94JtnYOf%2Ff8K3F8d3TqHYMLAP3DUOCY3g77eDgT4kExeTaMwdIogRGsOM%2FU9T%2BGeEmxI9AnbNAT%2B1PAei5ZQttmuIqV3vHVhwAr4EX%2BglTv645%2BzZ3uX0O6lCf4GyYwPphHyrDj1RMkWsUeTF4Q97WYqyKCMIkIgE26AzKEbLI81gIGETXC8XIhVRvVtOl5xeml35s4H5gYEQHNwUK3u3KkFVHnyHU%2BM4tTbNr%2B1olNujshc%2BJFZ66HW763imnADnhLqJiE3pFSlw4gDrrrjCwGDEQdRDJikcEJYSeVblUDWuTiTmHlpcjGj8kvQLPs9T6ypfOAb4NQMOGS4cIGOqUBC9t9JDk7FozuqcTRvDrHpznM7Ii8erOjKWxI5iw7RGIagoqPv9JdVkPvHPPNWZ0UAup9H50YVlOcWHFhDT3ov%2FT5LEWuwhrzEc6qda%2FBT5wNiMSvwS7xyhU3DWwwA6dNjtmvlaMaJNLCnmtUa459v7aOprUYWsmCBcec6Bi8fw%2FV97oxUsrnpS9m3wmgsMGo2yLmhtA7zY9NbF0ccBS1Yk8TTYI4&X-Amz-Signature=8de5a9103b5ef03e0c018d7ff6a9f36a1da6b681fbfaae643ba6749479b57c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKJYC5G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDj9GBZ2AOXOGvaXLJ3cmSFRxJH4UQVp%2BXZqJnR0ISfsQIgMW%2FMTHLLOsJZpw%2F1IxK4EXOijMFNOAkTKT9GLpwHk4gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyZNo3ny2OJwO1i0SrcA1iIR0b5ZCFB421Nm00PB8xrAe74OZ0ohPVViiU0r2%2FM%2BHth6plmu8Vhr5PvP8fVX6%2B5n179juT5RfepqUnAvUOvXyVQ1DO7RM3xAJ6ONhBjoZb4NW%2F56iiqqamWYZMS5i13tl10l8J0XB5kV8pps1Kr%2FJkLsvyipw2pMNYxnKZMJwbrk6PCF6YYJPD8lf8rOxd8V5ZPV7MuQ0Eqj1oqOITTEvrpFXRDFJfduCBXRvk3gMGEh%2Fjjcqqrjt7nnHIXfL6Do2MdnNtt0UrfNhLSzM2NndhxPFIVRH0PszXLoAW4mN0cs94JtnYOf%2Ff8K3F8d3TqHYMLAP3DUOCY3g77eDgT4kExeTaMwdIogRGsOM%2FU9T%2BGeEmxI9AnbNAT%2B1PAei5ZQttmuIqV3vHVhwAr4EX%2BglTv645%2BzZ3uX0O6lCf4GyYwPphHyrDj1RMkWsUeTF4Q97WYqyKCMIkIgE26AzKEbLI81gIGETXC8XIhVRvVtOl5xeml35s4H5gYEQHNwUK3u3KkFVHnyHU%2BM4tTbNr%2B1olNujshc%2BJFZ66HW763imnADnhLqJiE3pFSlw4gDrrrjCwGDEQdRDJikcEJYSeVblUDWuTiTmHlpcjGj8kvQLPs9T6ypfOAb4NQMOGS4cIGOqUBC9t9JDk7FozuqcTRvDrHpznM7Ii8erOjKWxI5iw7RGIagoqPv9JdVkPvHPPNWZ0UAup9H50YVlOcWHFhDT3ov%2FT5LEWuwhrzEc6qda%2FBT5wNiMSvwS7xyhU3DWwwA6dNjtmvlaMaJNLCnmtUa459v7aOprUYWsmCBcec6Bi8fw%2FV97oxUsrnpS9m3wmgsMGo2yLmhtA7zY9NbF0ccBS1Yk8TTYI4&X-Amz-Signature=fdbc3333adb689e08a682226e28fc6411aaad22c1bb91dd1242178d7c268220d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
