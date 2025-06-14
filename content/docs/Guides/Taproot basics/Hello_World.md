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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFXPWKB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD%2B94THQk3WPS6ROwZSNsB6YmB7yIkACRd%2FfRtF0OARfAIgT%2BuYIe9k%2BHqWFG9gMPSFM7BdEOTpFCx9w%2Fqn1qj6BUoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKzOOgbuVu7kYoFyiSrcA3JiH4kLiNdvauQNdB4TudptRQMjgVsv340ogYHkMmohzmYIyElf90I1Wqq2tJzbh4rdsYExGepxTKlqpXl1QBE1v2RqNkArU9CWN4VU%2B46BJvwfNLoDVKCExSiq7pzQPUD4gy6wb%2FVM6vJF6JpfNIQUewMKtA%2FG%2FRkVhtHDpSK8azjOwKgCsRF00BLJmwvnE943QO0tS9wVlQyuI7YQ3ngR3mzMZdPnNvc188DrLfd0fkUPnunCtCJsYkPBSuHTGu7qdaX1EAw47ZEj5BDwz72HnKC7bRjE1Ap2EQbn8BOrvxQ%2FZ4rwkpz%2BeB0GDWMuK7e7zg02XsdPCtfS5W25FlvjmnrX8g4lxJsSaZk60e1hTvo8bVc9%2FYYiCm9lcGfsnlUuAEb%2Fk9ElN%2FhImldbmZ8ChYCPyoyOjTIzP7nFKlA1oDUBc%2FcTTkoIL3tccwgzc0eRfSTUl%2FphIknYVtaAMMScmLRSfafjBwUJGXE6fBU4jYupowmhZlfOsccRgX9ZigKe3LBRwL4O6yWAj%2BL2vNTjHY1o7vOwVR5piycntvEL%2Fud5C32IdX0Wnfk2Qw9ZobeGNbhMazgOVzGhiVkhv7gVpGbyhb2qV7KQHjnOIY6TB7%2FpXfqNGGws5n3pMJykt8IGOqUBtcwHqe%2FO01zpUnjW3o2gzLTvI5bO4O7qSmpsSMYMZYe8e4lMu%2FZcXaMvZDgKF3tN52j81Tw9RJqlrCJTvCmZn9EsraUtDF2%2FQ%2F7nW99IYeyOTnf0CdnlEGfwOhI90jBmFL31dd2AYV4XLcqFGyhufzWp8khVaVSrdxLqgkvmF1bfBlQqDmPX5Zz7T8pliTlCaUokMXH1asy%2FrwdRU0bu3NIzNG6R&X-Amz-Signature=9ec1c97488fc5f30af52af056b52f3574043b1df287ff552be147ae8f80b1a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFXPWKB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD%2B94THQk3WPS6ROwZSNsB6YmB7yIkACRd%2FfRtF0OARfAIgT%2BuYIe9k%2BHqWFG9gMPSFM7BdEOTpFCx9w%2Fqn1qj6BUoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKzOOgbuVu7kYoFyiSrcA3JiH4kLiNdvauQNdB4TudptRQMjgVsv340ogYHkMmohzmYIyElf90I1Wqq2tJzbh4rdsYExGepxTKlqpXl1QBE1v2RqNkArU9CWN4VU%2B46BJvwfNLoDVKCExSiq7pzQPUD4gy6wb%2FVM6vJF6JpfNIQUewMKtA%2FG%2FRkVhtHDpSK8azjOwKgCsRF00BLJmwvnE943QO0tS9wVlQyuI7YQ3ngR3mzMZdPnNvc188DrLfd0fkUPnunCtCJsYkPBSuHTGu7qdaX1EAw47ZEj5BDwz72HnKC7bRjE1Ap2EQbn8BOrvxQ%2FZ4rwkpz%2BeB0GDWMuK7e7zg02XsdPCtfS5W25FlvjmnrX8g4lxJsSaZk60e1hTvo8bVc9%2FYYiCm9lcGfsnlUuAEb%2Fk9ElN%2FhImldbmZ8ChYCPyoyOjTIzP7nFKlA1oDUBc%2FcTTkoIL3tccwgzc0eRfSTUl%2FphIknYVtaAMMScmLRSfafjBwUJGXE6fBU4jYupowmhZlfOsccRgX9ZigKe3LBRwL4O6yWAj%2BL2vNTjHY1o7vOwVR5piycntvEL%2Fud5C32IdX0Wnfk2Qw9ZobeGNbhMazgOVzGhiVkhv7gVpGbyhb2qV7KQHjnOIY6TB7%2FpXfqNGGws5n3pMJykt8IGOqUBtcwHqe%2FO01zpUnjW3o2gzLTvI5bO4O7qSmpsSMYMZYe8e4lMu%2FZcXaMvZDgKF3tN52j81Tw9RJqlrCJTvCmZn9EsraUtDF2%2FQ%2F7nW99IYeyOTnf0CdnlEGfwOhI90jBmFL31dd2AYV4XLcqFGyhufzWp8khVaVSrdxLqgkvmF1bfBlQqDmPX5Zz7T8pliTlCaUokMXH1asy%2FrwdRU0bu3NIzNG6R&X-Amz-Signature=34423c014615bb1b1f31dd35fa68d4d344d9a27e71473cbb6f1e4514a88a1e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
