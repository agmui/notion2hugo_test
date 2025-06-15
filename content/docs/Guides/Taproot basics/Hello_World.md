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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AWIOI6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDVzAl5Air5RexNKamNXKpqLwd3xYAOImd%2B7wM1dek5vgIgP7Y9FyXGFL59bgF%2F%2BGlPMGlDDtBwq7oziDGtauGseCMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHDn9vdRZ89D%2BdpaBCrcA%2BTDnrIDxTIwvnrBz0WlcbMOhql9hiRIFj4g7IVN8KY8IS%2BxwZelSH1HiWRI56aK8It0ZUw8l9CMPG32cY5eopd%2BG%2FI1%2BeHjcUWRhvSFgVwqbu3KEZob7a1g1oStn0XAoVQsaban4BydeOKOmpMq0Cl9YRYNF3H9uxmvKNH33mQp%2B276RNqTQ3Q6L%2FD9sIsJfERSFOjCh9UaPTgJh9tOeVN%2FKYudBBXRMLqwwR6DNI6Vyfc%2FdyHczcz6GDC7DUvneBcoK4rfa3L2BfPnrrmzAPEelIIIDRqBgWSeJavigReZ10JW87d1BTa4yGrwXWIEe%2FrjI49V%2BLIdtvBgIDYYvKifSu5H4ALKbmmHyYW8eT%2FADjfV8U5jeW1vROuGud6KOGxQDXQk74gRjyG%2FPiIIuxbGuZMqKhAGHPMS4bEax7%2Fh8J8t8d83StVTTB6FjULyMUdAEbO10aGBaD2SO%2BQMBnQn48GGaOG%2BCtC6nM5EIsGDHnW0IYr1azfgxtuG%2FTLS6Eg3jm9ax9%2Bnlc3cVLw7hS8oCTHzEEc%2FW6CgxXH3aUlkxYwSoAUycoG2MuECVexgMXu4bI8u1JEYozjqORE3ds%2BCHlRAgc5Lzvg0wUgivNadWa96SCylV%2F%2BeWBW1MKuEvMIGOqUBtyJ%2BYEAbfzgsKhijpea8aRCUdX09qr5nu7yIUPyxj%2BWTKHOkgaTsGSgedNXNiJDHQkri%2Bfai6gKgt2HYhN3en%2BK6NHjD3XBokX3nciEMxgDPtjfDLsWJbEldQF0dvSovkIpXoXVg5Ka8qEiRSYRFAY%2FNO3m2BLoftDR24lno5ff9tKZc9ZlVc6JnMIqGICmQttFvTdZm3s7eBu7T1YIVtOmhSt%2BS&X-Amz-Signature=3bcb6ab0a6fcd124459e09889d6272eb735e95f2720b591c5ffaab01839c8d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AWIOI6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDVzAl5Air5RexNKamNXKpqLwd3xYAOImd%2B7wM1dek5vgIgP7Y9FyXGFL59bgF%2F%2BGlPMGlDDtBwq7oziDGtauGseCMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHDn9vdRZ89D%2BdpaBCrcA%2BTDnrIDxTIwvnrBz0WlcbMOhql9hiRIFj4g7IVN8KY8IS%2BxwZelSH1HiWRI56aK8It0ZUw8l9CMPG32cY5eopd%2BG%2FI1%2BeHjcUWRhvSFgVwqbu3KEZob7a1g1oStn0XAoVQsaban4BydeOKOmpMq0Cl9YRYNF3H9uxmvKNH33mQp%2B276RNqTQ3Q6L%2FD9sIsJfERSFOjCh9UaPTgJh9tOeVN%2FKYudBBXRMLqwwR6DNI6Vyfc%2FdyHczcz6GDC7DUvneBcoK4rfa3L2BfPnrrmzAPEelIIIDRqBgWSeJavigReZ10JW87d1BTa4yGrwXWIEe%2FrjI49V%2BLIdtvBgIDYYvKifSu5H4ALKbmmHyYW8eT%2FADjfV8U5jeW1vROuGud6KOGxQDXQk74gRjyG%2FPiIIuxbGuZMqKhAGHPMS4bEax7%2Fh8J8t8d83StVTTB6FjULyMUdAEbO10aGBaD2SO%2BQMBnQn48GGaOG%2BCtC6nM5EIsGDHnW0IYr1azfgxtuG%2FTLS6Eg3jm9ax9%2Bnlc3cVLw7hS8oCTHzEEc%2FW6CgxXH3aUlkxYwSoAUycoG2MuECVexgMXu4bI8u1JEYozjqORE3ds%2BCHlRAgc5Lzvg0wUgivNadWa96SCylV%2F%2BeWBW1MKuEvMIGOqUBtyJ%2BYEAbfzgsKhijpea8aRCUdX09qr5nu7yIUPyxj%2BWTKHOkgaTsGSgedNXNiJDHQkri%2Bfai6gKgt2HYhN3en%2BK6NHjD3XBokX3nciEMxgDPtjfDLsWJbEldQF0dvSovkIpXoXVg5Ka8qEiRSYRFAY%2FNO3m2BLoftDR24lno5ff9tKZc9ZlVc6JnMIqGICmQttFvTdZm3s7eBu7T1YIVtOmhSt%2BS&X-Amz-Signature=cc765128826178f295e94193e5697f273d570a0bb06c72a1e70ecdb9593d2012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
