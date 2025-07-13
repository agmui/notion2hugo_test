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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE22AWIU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIC4qIVjByxkJGONknfLsQD8UV8MNPHRMSHyalNRCEpC4AiEAnrC4zQgurcwwgq6AAQlDCRd%2FWINksLrb5vAVi6%2BCzmQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAQUdB4UBJZQzBf1mircA4aqnlU8%2Fqgi1KfUuYQI3q3ridC37%2FKbdwZOUygfz1UceFqptWXCTya%2Bx%2BFpkXCzcYzLxAjaHi%2BIO7eZwZO7owuoYI%2Bls%2Bq0lYowd5jpFZjpROQbgcuKPjq0H8FCbSiGklYNtN6ejunx%2FMG8ZTOZBHArXKV4UUQsEqz%2BwzUbBtLer1UPqdth9MxIkceN5QMH5%2BatLXPKHfNesJcsVNNKx5LlDW1UdcMgf%2FghoUuddP75jTRDWo0RtVzG8Kpw9lG%2BUzYuww2gHxKz5Ukcvz33VAC9USJ85S%2FpYd84WQl9eNtUeuS305sRyJKUnQCLejUJWh48faSW2vKZ828nC46y%2Bh3VKxb9dTPl2FYhqlJjF3yyMpf%2B1BAj5k6JOXU5Ly%2FvJkHg9RcNrXcxVAkmcalXOVfvv2Gk0M6yYWdLRJ2S1XCoIRY3vtLSM1DGnA64hSL1F0KF%2BdQdAHH%2BL8bLXHHODdcFuV5uX5Rp8aInN%2F6Nyz4F7jm0mUqknwXPOjPOZbLyvvx4LL5ETDQEIm7OJzFKSC4exBgkkhrzJ22QaiA2QQ%2Fnc3askdOxD%2Fxh3xcwVjNlWE8%2BRTfUFOe%2F2p7KZVueUHrOMzX23gkv6WyHtYRQebz8AEh6cX9fa2A9FfjbMMSP0MMGOqUB51lCyqSqSnCRaIM5FoK2UO5jAJeROw6AezNlhZNGdavWc84dDBVz6Qe937XZVkznFQswfD9T03hh2aqYkg6xvcbvs1nHg9iOvuyzKQydpgWvtUu4H1FojRCyAwcNAbIm3qpPTZB6kImxAJVQvZn3DpxUVMKTNCQm6Exy4uoG0ph%2FOhUMiN%2BhvF%2B%2FJ1F9HjOin%2BR9O0C%2FJ8VWtjqxWrh4GNRilBdn&X-Amz-Signature=76ed4744bbc1ec69ed35ae6772631f742f6450676c16c39a128e3e8becd7625e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE22AWIU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIC4qIVjByxkJGONknfLsQD8UV8MNPHRMSHyalNRCEpC4AiEAnrC4zQgurcwwgq6AAQlDCRd%2FWINksLrb5vAVi6%2BCzmQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAQUdB4UBJZQzBf1mircA4aqnlU8%2Fqgi1KfUuYQI3q3ridC37%2FKbdwZOUygfz1UceFqptWXCTya%2Bx%2BFpkXCzcYzLxAjaHi%2BIO7eZwZO7owuoYI%2Bls%2Bq0lYowd5jpFZjpROQbgcuKPjq0H8FCbSiGklYNtN6ejunx%2FMG8ZTOZBHArXKV4UUQsEqz%2BwzUbBtLer1UPqdth9MxIkceN5QMH5%2BatLXPKHfNesJcsVNNKx5LlDW1UdcMgf%2FghoUuddP75jTRDWo0RtVzG8Kpw9lG%2BUzYuww2gHxKz5Ukcvz33VAC9USJ85S%2FpYd84WQl9eNtUeuS305sRyJKUnQCLejUJWh48faSW2vKZ828nC46y%2Bh3VKxb9dTPl2FYhqlJjF3yyMpf%2B1BAj5k6JOXU5Ly%2FvJkHg9RcNrXcxVAkmcalXOVfvv2Gk0M6yYWdLRJ2S1XCoIRY3vtLSM1DGnA64hSL1F0KF%2BdQdAHH%2BL8bLXHHODdcFuV5uX5Rp8aInN%2F6Nyz4F7jm0mUqknwXPOjPOZbLyvvx4LL5ETDQEIm7OJzFKSC4exBgkkhrzJ22QaiA2QQ%2Fnc3askdOxD%2Fxh3xcwVjNlWE8%2BRTfUFOe%2F2p7KZVueUHrOMzX23gkv6WyHtYRQebz8AEh6cX9fa2A9FfjbMMSP0MMGOqUB51lCyqSqSnCRaIM5FoK2UO5jAJeROw6AezNlhZNGdavWc84dDBVz6Qe937XZVkznFQswfD9T03hh2aqYkg6xvcbvs1nHg9iOvuyzKQydpgWvtUu4H1FojRCyAwcNAbIm3qpPTZB6kImxAJVQvZn3DpxUVMKTNCQm6Exy4uoG0ph%2FOhUMiN%2BhvF%2B%2FJ1F9HjOin%2BR9O0C%2FJ8VWtjqxWrh4GNRilBdn&X-Amz-Signature=6dd53a43e07b922dccbe4f980d96c008ed6dd92eac68483927ab48af6c6fbb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
