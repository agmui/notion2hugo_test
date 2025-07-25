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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422SKWF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIETh1bLqz7vYcBWKZIL4yoU%2BTmEjaMiMemAC%2FN%2FvdL9MAiAj%2Fv2ALDVhaKRtkMNr%2FrWCZCt4MJU2uJEUcfeXexXBcSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIME%2B7z9TTOeYHzsCO%2BKtwDEkHFgov77BHtFDgphz5sF9xymc0JBpQD5ohJL0uysx9O7eDf2HMaz573FgCQnTj97VvytCweHeC%2BHRDUYKiOjao4pEBqCwcmGUKbH64K2k%2FiiROnyTIuxCSv8DJ1wgbe5tUAXzhcX1Mbhvf0FsC%2F0BHA3FgPwPELzOxmrD3hpezCXTw5wnb6epOtYPDhnrIvXKhdPpF5O9cg%2F3qSef%2FEHBjk0YyoG6AdYMTeaEolRXkouCKj2wa2IxFW9awUTiVNp4g0iGstRBIN0gaLadj8MRP1L4nz4FOSLtGpcqVq%2BTpn66hV7b6SVZRhqumlipLcuRMsYwSdU6U56G7qhV%2BgIGhKWiKoLdpxlaZ190qYds%2BElR8YfBpYvslpdTimPcKlkB49d%2FeP2Rr8dX4UcA9VKjk8t%2BBDcipylLs%2FG1KkKTAQ0QoPJUVSpBvmfQkMkNPwztD0pZeCQl0Gp%2FvJjK22LPzk1fZJ0Au6KNFBHIP%2B3lYoX%2B%2BehbqPrZUjFmvF3CXrSzb41EDkKwbHtAB5y7VMGCQuTElyU%2FIASTEodXhJoOFfTKovN89uMKkxIMzVh8lTBESa%2FNJ2CWWCQikbDTF21Vk%2Fg8SOguqmBpcyLdzadw8SZAAH3dQ%2F8t223f0w1ryNxAY6pgFnZSC1h3tXrt%2BqIhraFpF9u8iE76IytWiDLrwqWCHAefThAl9edmwhqLSWl6hKObjAtg8ExSMbWpCGGjeoK7EP0kQ2ZjxyEd4dmw3VGsadShFzp0e5y5hy6Viz93CPL2gojAxVUIO0%2FSdrDSsw6NBwARz6K5EFTjCgNIt9u5aQDghnD7U1iXNJCuvoseoGAH0UgRLQeYAFifJ%2BEazU1bJl0E3%2BS4TI&X-Amz-Signature=83bb03d2beeca25045fb338c224f9ba2ebcb8f9b74342d1b0dc5821fcafa125e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U422SKWF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIETh1bLqz7vYcBWKZIL4yoU%2BTmEjaMiMemAC%2FN%2FvdL9MAiAj%2Fv2ALDVhaKRtkMNr%2FrWCZCt4MJU2uJEUcfeXexXBcSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIME%2B7z9TTOeYHzsCO%2BKtwDEkHFgov77BHtFDgphz5sF9xymc0JBpQD5ohJL0uysx9O7eDf2HMaz573FgCQnTj97VvytCweHeC%2BHRDUYKiOjao4pEBqCwcmGUKbH64K2k%2FiiROnyTIuxCSv8DJ1wgbe5tUAXzhcX1Mbhvf0FsC%2F0BHA3FgPwPELzOxmrD3hpezCXTw5wnb6epOtYPDhnrIvXKhdPpF5O9cg%2F3qSef%2FEHBjk0YyoG6AdYMTeaEolRXkouCKj2wa2IxFW9awUTiVNp4g0iGstRBIN0gaLadj8MRP1L4nz4FOSLtGpcqVq%2BTpn66hV7b6SVZRhqumlipLcuRMsYwSdU6U56G7qhV%2BgIGhKWiKoLdpxlaZ190qYds%2BElR8YfBpYvslpdTimPcKlkB49d%2FeP2Rr8dX4UcA9VKjk8t%2BBDcipylLs%2FG1KkKTAQ0QoPJUVSpBvmfQkMkNPwztD0pZeCQl0Gp%2FvJjK22LPzk1fZJ0Au6KNFBHIP%2B3lYoX%2B%2BehbqPrZUjFmvF3CXrSzb41EDkKwbHtAB5y7VMGCQuTElyU%2FIASTEodXhJoOFfTKovN89uMKkxIMzVh8lTBESa%2FNJ2CWWCQikbDTF21Vk%2Fg8SOguqmBpcyLdzadw8SZAAH3dQ%2F8t223f0w1ryNxAY6pgFnZSC1h3tXrt%2BqIhraFpF9u8iE76IytWiDLrwqWCHAefThAl9edmwhqLSWl6hKObjAtg8ExSMbWpCGGjeoK7EP0kQ2ZjxyEd4dmw3VGsadShFzp0e5y5hy6Viz93CPL2gojAxVUIO0%2FSdrDSsw6NBwARz6K5EFTjCgNIt9u5aQDghnD7U1iXNJCuvoseoGAH0UgRLQeYAFifJ%2BEazU1bJl0E3%2BS4TI&X-Amz-Signature=1520963b1075dcb3034e7273e8ce2e7e8d0b2c73812f366f41a356df0c3803fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
