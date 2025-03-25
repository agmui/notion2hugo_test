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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6OJZOS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvN3JIFmYSy383FtYYK6dvdCx3RLtJ6iyK0Dzw6GpKRAiAhJ8hbHoJ2KflVKOY%2BwdNv93nOakai10Gf4wIsmuNUxCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjEfC1nP8b3iytKmRKtwDi8odC4PtMJKRkWyGi1gSJvJeziSMlQ%2B0wuhi%2FAwLZeVO68Fi0EKiicx9K9XUoexn9i10104W%2F3t8Xg6Jg8UmD4d%2Fd7VNmXTMmBGi51b5Z6PQLPkf3e7rO6FiyIeVtYhtF3SGBuOTE%2Fem4ZL3hE6yXYOXYS%2BX8Z4T2b4c4cnjEwB5VucURmNgLSstcoO9TNRgeTiekxMBmPtw2le%2FeEuT63Na6t8AL3eScDsKuMKAT5lFLpPZ2jM5AvksfzijGcNZ6BJpDQTnyAEvGGq4FAOU02WKxB2TLhqagxEd6G3caY728KRiV4gjbRx8znmV5W2IdRpZ2CQvWBepBEv2Xk6pQ%2B2CngDskx3da%2BBAuY8aMnY49DaXVSefXrbh5MIZfrorpxKYvAuxS%2FfNeNaP8qgsO7sJOfXA6%2BvziZOr0EEE1DanPbjb4FKEJxzMAQ2%2Fpe5T3xfonb5F64ZCngQBKbjAOBFi1hrjpL00CBTp0xHw%2FRm698Lqms23t8ppoSEOY569G5gO6pxqByA6kVDTLksm9OVGhcST4kEMPESHXc6q7eLRvuJ3%2BRHAv%2BlfKHdNXOOcnrlKwvOPd1SCIczJApAEJ%2BrVElDJJoJt1TSb6WRiL%2BUD6khlcROCD%2F3XUFgwl%2BSLvwY6pgFOcZQ%2Fjsn5Byp1VoJdBxtKoVkDaOj6WiXR2MYR%2Fw5581xlNMzo%2BPUnetkOyuOGmpiEEyfc6h7%2FLOtW5o0QdosrUS4EZehWuJX2MN%2FmaaYzbLu%2BJ2gB8P6doFOLBH6dwWZMrL0FE7IhVmBzgAUkYaFwFZPd0lIatww6%2B8DftX1ez8pPHhwIeMlUoiRIMHTKxdkKiNoTooX98eAJZBF1oy%2FW3DO0EIFj&X-Amz-Signature=a8211fecf71f870248ceb46e32e26de399cf4c3f5e049481e99b554bd62a5b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6OJZOS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvN3JIFmYSy383FtYYK6dvdCx3RLtJ6iyK0Dzw6GpKRAiAhJ8hbHoJ2KflVKOY%2BwdNv93nOakai10Gf4wIsmuNUxCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjEfC1nP8b3iytKmRKtwDi8odC4PtMJKRkWyGi1gSJvJeziSMlQ%2B0wuhi%2FAwLZeVO68Fi0EKiicx9K9XUoexn9i10104W%2F3t8Xg6Jg8UmD4d%2Fd7VNmXTMmBGi51b5Z6PQLPkf3e7rO6FiyIeVtYhtF3SGBuOTE%2Fem4ZL3hE6yXYOXYS%2BX8Z4T2b4c4cnjEwB5VucURmNgLSstcoO9TNRgeTiekxMBmPtw2le%2FeEuT63Na6t8AL3eScDsKuMKAT5lFLpPZ2jM5AvksfzijGcNZ6BJpDQTnyAEvGGq4FAOU02WKxB2TLhqagxEd6G3caY728KRiV4gjbRx8znmV5W2IdRpZ2CQvWBepBEv2Xk6pQ%2B2CngDskx3da%2BBAuY8aMnY49DaXVSefXrbh5MIZfrorpxKYvAuxS%2FfNeNaP8qgsO7sJOfXA6%2BvziZOr0EEE1DanPbjb4FKEJxzMAQ2%2Fpe5T3xfonb5F64ZCngQBKbjAOBFi1hrjpL00CBTp0xHw%2FRm698Lqms23t8ppoSEOY569G5gO6pxqByA6kVDTLksm9OVGhcST4kEMPESHXc6q7eLRvuJ3%2BRHAv%2BlfKHdNXOOcnrlKwvOPd1SCIczJApAEJ%2BrVElDJJoJt1TSb6WRiL%2BUD6khlcROCD%2F3XUFgwl%2BSLvwY6pgFOcZQ%2Fjsn5Byp1VoJdBxtKoVkDaOj6WiXR2MYR%2Fw5581xlNMzo%2BPUnetkOyuOGmpiEEyfc6h7%2FLOtW5o0QdosrUS4EZehWuJX2MN%2FmaaYzbLu%2BJ2gB8P6doFOLBH6dwWZMrL0FE7IhVmBzgAUkYaFwFZPd0lIatww6%2B8DftX1ez8pPHhwIeMlUoiRIMHTKxdkKiNoTooX98eAJZBF1oy%2FW3DO0EIFj&X-Amz-Signature=b346110a2d8417bae183bbb4a6bbb3a0feeeaba4fca2e521220ff04a58521f69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
