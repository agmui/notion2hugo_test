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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQZQP7O%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIECB7vQSTtGHIU%2B3PZranuZk6lYN6dPythLG%2BBWxiTHAAiBzGdWhUTtWo9gbBmLcxicWe3W%2B%2FAOI15DtQ7Zgik9XUyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM5vV8mbVMy8boPEiwKtwDD8yoXaGdLCyXXzo8PEkL6YRrArl4sTnX07pELO2QKw%2FbqHLU4%2B3QW2GwF6EZRwyO6NcXnosEQYBPNyyGUIn8ImIaydz9lr9G5zwJNIovYPqZNQLHCyGjPyp05u%2FQUkyN4BOzYLf6PbPwFTjbWOneoBv4mNDs7R1l9Q01I5S2puCLlOtlC7nnSCN2sF8TMKOYDuBUY7xfJhRKOsmiKpqGPEwAi7QcRd%2FQ59%2BA4tP7dwT2%2BcjGLv4xq30iYQAnipqX14blYpFmR9EhGfK4xL0gV1FlcV8a3NXKPkYY52nJwcATSHMH1ISpU5EdENKR%2BaVi3KR%2FRkNU%2F7vuNyCgIc1jICxXRoutluAheLq0oJgbZtg%2Bt7u9w3%2F1jGZnlbIc6mOdhliLvn5QPCS%2BZCOspb4jNvGcVSxtIwndU%2Bl0%2BDLrk5bRdrsl6lnEGctOlgWyLkZJtNEqJELWL4xOrIjDSG%2FUZI7ImW1x1OqTTSFMBHe6lqCHKYkVbMHmTmqzM8ZDlbV6Vm08deGRg4dobbaweGztOfIJdJYen6hXRQjNfOWnD%2F%2FYD4ljmfSzqCYzvKknYSVQV6Dl8Ts9436z7e6apca8O0Of%2BqCKuwnEVqnqnu%2Fe%2FJ0Ch9H4sziLk9Pe3BIwuZ7PwQY6pgHuGDc3R%2Bf7KdMx4Ly0i2JgfN8uKTOFpp%2BVkJ0lR49HzM4phi6v5O6%2BAzOmXx0vQviyk%2BvK4lnh4BG5qpkLG30RRL%2BZJ7nvjloRWS3Pk4YRW4gUByxp3t1c0MNbt4rgArqXH8Q3iWIyNVmqqDOTC4OvE%2F1umsUhP75yp1velimewraLo4QmtNVDRY2Fh83vB%2F29z7Mc1qwbNi6VWUeHf9QLpC8I1SAg&X-Amz-Signature=097347e9303887121f263991cb410498f2d82a7f470f79f62631532847e61033&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQZQP7O%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIECB7vQSTtGHIU%2B3PZranuZk6lYN6dPythLG%2BBWxiTHAAiBzGdWhUTtWo9gbBmLcxicWe3W%2B%2FAOI15DtQ7Zgik9XUyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM5vV8mbVMy8boPEiwKtwDD8yoXaGdLCyXXzo8PEkL6YRrArl4sTnX07pELO2QKw%2FbqHLU4%2B3QW2GwF6EZRwyO6NcXnosEQYBPNyyGUIn8ImIaydz9lr9G5zwJNIovYPqZNQLHCyGjPyp05u%2FQUkyN4BOzYLf6PbPwFTjbWOneoBv4mNDs7R1l9Q01I5S2puCLlOtlC7nnSCN2sF8TMKOYDuBUY7xfJhRKOsmiKpqGPEwAi7QcRd%2FQ59%2BA4tP7dwT2%2BcjGLv4xq30iYQAnipqX14blYpFmR9EhGfK4xL0gV1FlcV8a3NXKPkYY52nJwcATSHMH1ISpU5EdENKR%2BaVi3KR%2FRkNU%2F7vuNyCgIc1jICxXRoutluAheLq0oJgbZtg%2Bt7u9w3%2F1jGZnlbIc6mOdhliLvn5QPCS%2BZCOspb4jNvGcVSxtIwndU%2Bl0%2BDLrk5bRdrsl6lnEGctOlgWyLkZJtNEqJELWL4xOrIjDSG%2FUZI7ImW1x1OqTTSFMBHe6lqCHKYkVbMHmTmqzM8ZDlbV6Vm08deGRg4dobbaweGztOfIJdJYen6hXRQjNfOWnD%2F%2FYD4ljmfSzqCYzvKknYSVQV6Dl8Ts9436z7e6apca8O0Of%2BqCKuwnEVqnqnu%2Fe%2FJ0Ch9H4sziLk9Pe3BIwuZ7PwQY6pgHuGDc3R%2Bf7KdMx4Ly0i2JgfN8uKTOFpp%2BVkJ0lR49HzM4phi6v5O6%2BAzOmXx0vQviyk%2BvK4lnh4BG5qpkLG30RRL%2BZJ7nvjloRWS3Pk4YRW4gUByxp3t1c0MNbt4rgArqXH8Q3iWIyNVmqqDOTC4OvE%2F1umsUhP75yp1velimewraLo4QmtNVDRY2Fh83vB%2F29z7Mc1qwbNi6VWUeHf9QLpC8I1SAg&X-Amz-Signature=83a7fca3936b3fa9c8e0bce1e0bb20fa0a4ff8f09b23ca6977491aee9f2b58c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
