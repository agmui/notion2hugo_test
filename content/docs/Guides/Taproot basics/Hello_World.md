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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NC3BQOP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH8ND37j7tzyymYYg%2Fjkwc5OZ6jxURQ4wSCsjopQpgVgAiEAy5KERMOxabnMKY9L0gXECvwAqYxceZCwlj0ZuH%2BB3cUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDzhw%2FCI3qJ8O%2BoM1yrcA%2B3xss0VKDm4Q0Q%2FnIs0SvQjoI0smU3nlufaFYTsvBFDpAa1qCcpDWM%2BwtPLOMuhPhNeR7Invs8i9eeWj4IAUaEMRT9G70RJv49ZeT%2Fh3IxL6L6iJO1ngroTTOG%2FrQribUrQ46qxRz0pYNSjh7%2BWQWPvhY9VcNrMuBHMAjh93Dwl41%2BBMXh2ppQy%2B%2BIXpdNfLZk6klQBQIRBZK6QHS03eF7MYm037BBtaX1FSQeowT6ABQadWNjvx40mmdk08Ip%2FDrQ%2BQsrWcyfddPSUMWHY9RmVQ4EVtYOHjUW9Pe9uAHPaaLxihrFvq92RXva7Tep3xBUy8DzLljH8oPE%2B9Bpu6gnNmi0bYAZymJ3bhCHddWcMZgo4pj1a1fIs8wPk%2BPX8CfHg%2F1Fje9LEprteyzKbqfMca2eU4wkzzivJ6gZzzBw4kirZXyARTvkNxVIImjTaW3i8nzmw5209RO3uL%2BdvluZ68pfYmUUBXw3oikxxyQQrkqk5Ag1nJ%2Bh3p73%2BioaELpsXf94ISiPs3wXL%2BLT5b29mtdyYLrP%2B0IpN5mv0AdjYVRvXdG8iPmhowt%2BFtudqsSWRNh7jwBh%2FtLEeK0pAmzzT08UMiym2%2FFipRQ7i5lzE%2Bs1fD4VI7x2SY4zEMOSez8EGOqUBTkNogVBXIRhjkOivG4Rn6aqBylTRfXeD64mEi8rt7meuqWaDwBVXvaB2CArZs1%2BvmUXaa7Y2RXJNRvVOayBgt5ijvbXRJGXnXFVd0BW9J8WovBTwfigR1R4kBY0mWFYz%2B%2BwkidPqoXX54a8sfin0bHo0f1EzR0EhcJTawL5pCiVQmuaX%2FZqXMCXlk5yaH%2BVMRwgJ%2FsC6YvkVnCsvsDVVKiGwkP8c&X-Amz-Signature=ad10fa6716fb90684416515cfbab5eab603df4f31f30649106fcbb11c2842ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NC3BQOP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH8ND37j7tzyymYYg%2Fjkwc5OZ6jxURQ4wSCsjopQpgVgAiEAy5KERMOxabnMKY9L0gXECvwAqYxceZCwlj0ZuH%2BB3cUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDzhw%2FCI3qJ8O%2BoM1yrcA%2B3xss0VKDm4Q0Q%2FnIs0SvQjoI0smU3nlufaFYTsvBFDpAa1qCcpDWM%2BwtPLOMuhPhNeR7Invs8i9eeWj4IAUaEMRT9G70RJv49ZeT%2Fh3IxL6L6iJO1ngroTTOG%2FrQribUrQ46qxRz0pYNSjh7%2BWQWPvhY9VcNrMuBHMAjh93Dwl41%2BBMXh2ppQy%2B%2BIXpdNfLZk6klQBQIRBZK6QHS03eF7MYm037BBtaX1FSQeowT6ABQadWNjvx40mmdk08Ip%2FDrQ%2BQsrWcyfddPSUMWHY9RmVQ4EVtYOHjUW9Pe9uAHPaaLxihrFvq92RXva7Tep3xBUy8DzLljH8oPE%2B9Bpu6gnNmi0bYAZymJ3bhCHddWcMZgo4pj1a1fIs8wPk%2BPX8CfHg%2F1Fje9LEprteyzKbqfMca2eU4wkzzivJ6gZzzBw4kirZXyARTvkNxVIImjTaW3i8nzmw5209RO3uL%2BdvluZ68pfYmUUBXw3oikxxyQQrkqk5Ag1nJ%2Bh3p73%2BioaELpsXf94ISiPs3wXL%2BLT5b29mtdyYLrP%2B0IpN5mv0AdjYVRvXdG8iPmhowt%2BFtudqsSWRNh7jwBh%2FtLEeK0pAmzzT08UMiym2%2FFipRQ7i5lzE%2Bs1fD4VI7x2SY4zEMOSez8EGOqUBTkNogVBXIRhjkOivG4Rn6aqBylTRfXeD64mEi8rt7meuqWaDwBVXvaB2CArZs1%2BvmUXaa7Y2RXJNRvVOayBgt5ijvbXRJGXnXFVd0BW9J8WovBTwfigR1R4kBY0mWFYz%2B%2BwkidPqoXX54a8sfin0bHo0f1EzR0EhcJTawL5pCiVQmuaX%2FZqXMCXlk5yaH%2BVMRwgJ%2FsC6YvkVnCsvsDVVKiGwkP8c&X-Amz-Signature=87dff8eb5b92c5a468c03fbe407b2692b88d2252e85c818b1e629662d10dbe5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
