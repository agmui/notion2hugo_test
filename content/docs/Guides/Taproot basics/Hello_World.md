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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2Q5YS4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BEgv3q%2Fp5e6ENrK8BcYitMCp7jilf%2Bk30EP7Ez9iBVwIhALex57sO5EtgYDJxTVstoNQd7CZ7gXmCcNqPbB7EjMH3KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0pG7eLvSHZENZ6doq3AMD%2Fxf9ZMGv5zxKDjwSJFC%2BBg1%2B5qwjN9zeJxaur%2Bf13lk2ENXs4XDK0Lq6A%2Fvfln4%2FhvIg582uhrUJLgWt9i7rug1OdppvzCQ72vP9WfdEyms7X74hqn4c0NHJFhBXO3e0jfqU6LbTae04LCNHk%2BEX9b4GkpuJ4Xcnp8PYzcYdP8nK5%2BjZE102%2FlrMcoexP0GMV6RFZjhT3d4C1VQPyUUUBr0Mpk6cJKnRg2kvc1WzINdNsI7sDEpQL0fmbREk2%2BYmM0STgJLYxZHsAghxgbbR1rDcjKgADcTADuvKnM9rBhykr0vahfTruHl6S32uNWhFUww%2BPftxlIp2M25QAdC5e%2BySTXZew2cZK74vFRUFtuRNuY68BNTPXqtZQFLTLrPtSPzOSc%2FhqRBIXpduoRsI1N9Xi0EWLpgvkDBNhgWQRi6tJUvQFFUuhZJ8gW%2BDKBwPUBzZf9zJfPx5JQluPAYrVpUZvUiUe9BqvDogbDPnTIfS77ZMji2DtJwZ7fXZwdfUP%2BbjL6i6dpTJqwZULXNek60BoTExIw2N3910KA7%2BX3kOYhg2F0NnqJQjyh56dYA%2BgpShfMIzBo%2B426sYsMJnX5UrWetPCgSbo2FzGPCEOYs92OgbC9IcGyvxLDDT2Za%2BBjqkAUlZ2Bw1YstTky7cOw21Rf69oc32fiFcM%2Bo9Xmavj036eaoiD4plX0QgQbc0x%2ButqsO3uMm2jzGJT5X5oiVaTXrOuIBJfc1OpHmA3mLqHU5eshAitedvCZEkmKTXzHEmm%2Ftr1CRJB%2ByeSu9PzVQkODEUa8%2FtE3iNwO9aVdid4%2FxsrYxG6BLRTSPtMYfhKcBNK2pNie1n9VpS%2BX2iHCgJTeAMytaJ&X-Amz-Signature=1bee8595ed0675ed4609ee6acf4f940e7af259a6f2a42c5737c0fe069f6fc5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2Q5YS4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BEgv3q%2Fp5e6ENrK8BcYitMCp7jilf%2Bk30EP7Ez9iBVwIhALex57sO5EtgYDJxTVstoNQd7CZ7gXmCcNqPbB7EjMH3KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0pG7eLvSHZENZ6doq3AMD%2Fxf9ZMGv5zxKDjwSJFC%2BBg1%2B5qwjN9zeJxaur%2Bf13lk2ENXs4XDK0Lq6A%2Fvfln4%2FhvIg582uhrUJLgWt9i7rug1OdppvzCQ72vP9WfdEyms7X74hqn4c0NHJFhBXO3e0jfqU6LbTae04LCNHk%2BEX9b4GkpuJ4Xcnp8PYzcYdP8nK5%2BjZE102%2FlrMcoexP0GMV6RFZjhT3d4C1VQPyUUUBr0Mpk6cJKnRg2kvc1WzINdNsI7sDEpQL0fmbREk2%2BYmM0STgJLYxZHsAghxgbbR1rDcjKgADcTADuvKnM9rBhykr0vahfTruHl6S32uNWhFUww%2BPftxlIp2M25QAdC5e%2BySTXZew2cZK74vFRUFtuRNuY68BNTPXqtZQFLTLrPtSPzOSc%2FhqRBIXpduoRsI1N9Xi0EWLpgvkDBNhgWQRi6tJUvQFFUuhZJ8gW%2BDKBwPUBzZf9zJfPx5JQluPAYrVpUZvUiUe9BqvDogbDPnTIfS77ZMji2DtJwZ7fXZwdfUP%2BbjL6i6dpTJqwZULXNek60BoTExIw2N3910KA7%2BX3kOYhg2F0NnqJQjyh56dYA%2BgpShfMIzBo%2B426sYsMJnX5UrWetPCgSbo2FzGPCEOYs92OgbC9IcGyvxLDDT2Za%2BBjqkAUlZ2Bw1YstTky7cOw21Rf69oc32fiFcM%2Bo9Xmavj036eaoiD4plX0QgQbc0x%2ButqsO3uMm2jzGJT5X5oiVaTXrOuIBJfc1OpHmA3mLqHU5eshAitedvCZEkmKTXzHEmm%2Ftr1CRJB%2ByeSu9PzVQkODEUa8%2FtE3iNwO9aVdid4%2FxsrYxG6BLRTSPtMYfhKcBNK2pNie1n9VpS%2BX2iHCgJTeAMytaJ&X-Amz-Signature=629edaa1f8a216af0cf0601f7e3724f77845829dcba6fe5ebac48ead2fd8f600&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
