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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQWVG5G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCff9STFtvN8Fs9ss6utl3r2wCKrIG3K3cOp%2FeKfmQu9QIge1dUbUVjB4ASI%2BnpDLoF0xhLmCTYKvX%2FY6ah6e8tljwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcqZZfMD2qbkyNBASrcA9511ywoPzLEYi7kk7TY5mESjEXci4to%2BMouCJkViha0t3uJkTrE56KoZqyWXwvK2fTqY7%2Bq94Z76zTiKDc4BEjk32He6xARpai7efX8EWVijj2bAxNJWpBBl7itGQJzMWf6pnQe7dGjcL9XlhOP1sXbKNBy4RA5Vx7SwAo%2FCqi0RgsFNyduEhtLYWiVH9EvMqlZkPpKmDrdg%2FfMkNBLk7Pin25H%2B%2FpSffpQJ0SwF5lz4FGtHTbNpc67w8eVD26AJYmwU%2FMIRGYsUSgCbYKx%2BMHdFw8Dl2g3OE2azyq5NFeAFnokjRcffR3pq0vnqSTrFLET%2FHjSO%2FZDgQRMkokIRakQTrpxw10Sp%2BHyDFpEJXXovM1U25YA26Zf%2BfDX6WY0moBBxYBrMvF1vy3m28ANV4zZZlPy0X7qQ1Q0A%2FDjSg0yfhzqn6MZp5Kf%2FV%2BS9%2Bc0Sof7%2FlmlhyrEO1Z2d2xy%2FVTABmNatdOIydmcujj75dCB2cw9iiDX1RRjwIl0r3yf6QgBS1hDRvkyMAF%2FPqyBXITG6hfwK9UU2f2%2F5xb%2FTly98i%2BsKly5FD8SJnBc0OWPAAh1HuzpMHrp2QVthdVZLgO7K1%2F4SIOHaFPdR8gb7cfGU224iphYQJfs2vQcMPmpjsEGOqUBzLAL9NCOLHLA2%2FJqH7o7rtemhxRz4yKYdyokp3mT4GJOXjo67dWEnehp5H1%2BtEl8br6DzEN9EtOXZy7MAb3akp15X26uM96mAOm49DRyOEqSEo%2Bx%2BR8WHMEybk27yfWNfaWf2GiJvmMIrXkdPJOnSPsOW1J2rmkcwYQbfqwouHlKFFkElSUSFym3Ktn6vloFYkfo6JXeJ7F%2BUlNevBGh5%2BeZX6hy&X-Amz-Signature=04acb55727f736ed03e0bc7a443a20a077c40fb16ff82548835712a134f4c753&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQWVG5G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCff9STFtvN8Fs9ss6utl3r2wCKrIG3K3cOp%2FeKfmQu9QIge1dUbUVjB4ASI%2BnpDLoF0xhLmCTYKvX%2FY6ah6e8tljwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcqZZfMD2qbkyNBASrcA9511ywoPzLEYi7kk7TY5mESjEXci4to%2BMouCJkViha0t3uJkTrE56KoZqyWXwvK2fTqY7%2Bq94Z76zTiKDc4BEjk32He6xARpai7efX8EWVijj2bAxNJWpBBl7itGQJzMWf6pnQe7dGjcL9XlhOP1sXbKNBy4RA5Vx7SwAo%2FCqi0RgsFNyduEhtLYWiVH9EvMqlZkPpKmDrdg%2FfMkNBLk7Pin25H%2B%2FpSffpQJ0SwF5lz4FGtHTbNpc67w8eVD26AJYmwU%2FMIRGYsUSgCbYKx%2BMHdFw8Dl2g3OE2azyq5NFeAFnokjRcffR3pq0vnqSTrFLET%2FHjSO%2FZDgQRMkokIRakQTrpxw10Sp%2BHyDFpEJXXovM1U25YA26Zf%2BfDX6WY0moBBxYBrMvF1vy3m28ANV4zZZlPy0X7qQ1Q0A%2FDjSg0yfhzqn6MZp5Kf%2FV%2BS9%2Bc0Sof7%2FlmlhyrEO1Z2d2xy%2FVTABmNatdOIydmcujj75dCB2cw9iiDX1RRjwIl0r3yf6QgBS1hDRvkyMAF%2FPqyBXITG6hfwK9UU2f2%2F5xb%2FTly98i%2BsKly5FD8SJnBc0OWPAAh1HuzpMHrp2QVthdVZLgO7K1%2F4SIOHaFPdR8gb7cfGU224iphYQJfs2vQcMPmpjsEGOqUBzLAL9NCOLHLA2%2FJqH7o7rtemhxRz4yKYdyokp3mT4GJOXjo67dWEnehp5H1%2BtEl8br6DzEN9EtOXZy7MAb3akp15X26uM96mAOm49DRyOEqSEo%2Bx%2BR8WHMEybk27yfWNfaWf2GiJvmMIrXkdPJOnSPsOW1J2rmkcwYQbfqwouHlKFFkElSUSFym3Ktn6vloFYkfo6JXeJ7F%2BUlNevBGh5%2BeZX6hy&X-Amz-Signature=361e0b92996a3c08357e8d519205a73f976c4fcf06ac6efc69019b99323ba369&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
