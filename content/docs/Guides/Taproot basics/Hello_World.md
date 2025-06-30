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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJFI37J5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEc2jILQo0ULRsCcMSY1XZRMRRa6HbCv9yRNTf3jodG0AiAOLTzGvuHlb6ujFyK3J4AR3ZD8U%2F2bk9ykxHKpI44JDiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLrTobNN8%2FAtdScyKtwDX%2BNOhpVoZrkCg6iwy5ea1yyO74sTr5LIoZ6nSZHPYR9XfYVWCowybbXqr8LxokLqQlkCFEOcujHGnGWyiI1fQVqmXk4j%2BnDsfoMUgvYGWtrvH0BByNHnhyHdeAt7ux4iLxDJKUMbiJI3qIG%2FYYqLs7hU1UAM5inGEuHKy4y5DKeuEX37%2BEshW6LnbPEDZ2FBskP%2B6szk%2B4k%2B2QFVTHwKmvAyrjkg2CJQOsAnGPVei5zuLMj7DiHeJtVvT6cXEOuDJYbyMXS00HJ9qfu8tgNqq6iu%2BqhNEauCKiZDNvi6PG%2BEFxuu6fcZRh9kSObYSJzGCZNS9uLG46HlUAzd9Ym%2F1z9O0mBbgPyHzrhdmqozc8xUwCnVv06RJLCkA5K3NyTgGNlUK6quRKnmjUCvLQS8vRlWawQy5o44ojxVCHUFwBabLzg1Kr8CQB1n9viH0VUvIaSpZDlx93GqYyITir51LagC2A1CcWSLxkaczK%2BaW%2FYnFaJ56T4sXfxrSabL7JGq5IV6Nz2gBZkX6zBasq5Lf5iz6C1oBjkrkQCL4AZAQcfIVgersU1pSQ0zJHeGLUCpYN%2F502C2fl8XxoZNg8F1jNvjOB4q9f0INp2nptJgHcqMEirGwI7LPmcp0sUw%2Be2HwwY6pgHeuzU91T%2B%2B1IUhmidDB6Y3cVWJOnD%2BtfMkhQnxxfMpxkm9PGfTS5IIj4apLxqWGTWscnN4V2yghwv61MhDovPS9Rq%2FPMFnHqgSojroJyyRnx1dal%2FUBoTqUXwkLBrtTEe0I0oYWVBjh5OygXqMmHtkPrDm0Nn8bNn7jjiFyQbG1zPaQ9kzOKpQePGHkPz%2Bu4qHPiDkkhFs7Q5JdtvicRvZF5gZ8equ&X-Amz-Signature=0fe45c05a2c793ac57e5500408516d182255bf1abbed627469c00fae4a1d3e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJFI37J5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEc2jILQo0ULRsCcMSY1XZRMRRa6HbCv9yRNTf3jodG0AiAOLTzGvuHlb6ujFyK3J4AR3ZD8U%2F2bk9ykxHKpI44JDiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLrTobNN8%2FAtdScyKtwDX%2BNOhpVoZrkCg6iwy5ea1yyO74sTr5LIoZ6nSZHPYR9XfYVWCowybbXqr8LxokLqQlkCFEOcujHGnGWyiI1fQVqmXk4j%2BnDsfoMUgvYGWtrvH0BByNHnhyHdeAt7ux4iLxDJKUMbiJI3qIG%2FYYqLs7hU1UAM5inGEuHKy4y5DKeuEX37%2BEshW6LnbPEDZ2FBskP%2B6szk%2B4k%2B2QFVTHwKmvAyrjkg2CJQOsAnGPVei5zuLMj7DiHeJtVvT6cXEOuDJYbyMXS00HJ9qfu8tgNqq6iu%2BqhNEauCKiZDNvi6PG%2BEFxuu6fcZRh9kSObYSJzGCZNS9uLG46HlUAzd9Ym%2F1z9O0mBbgPyHzrhdmqozc8xUwCnVv06RJLCkA5K3NyTgGNlUK6quRKnmjUCvLQS8vRlWawQy5o44ojxVCHUFwBabLzg1Kr8CQB1n9viH0VUvIaSpZDlx93GqYyITir51LagC2A1CcWSLxkaczK%2BaW%2FYnFaJ56T4sXfxrSabL7JGq5IV6Nz2gBZkX6zBasq5Lf5iz6C1oBjkrkQCL4AZAQcfIVgersU1pSQ0zJHeGLUCpYN%2F502C2fl8XxoZNg8F1jNvjOB4q9f0INp2nptJgHcqMEirGwI7LPmcp0sUw%2Be2HwwY6pgHeuzU91T%2B%2B1IUhmidDB6Y3cVWJOnD%2BtfMkhQnxxfMpxkm9PGfTS5IIj4apLxqWGTWscnN4V2yghwv61MhDovPS9Rq%2FPMFnHqgSojroJyyRnx1dal%2FUBoTqUXwkLBrtTEe0I0oYWVBjh5OygXqMmHtkPrDm0Nn8bNn7jjiFyQbG1zPaQ9kzOKpQePGHkPz%2Bu4qHPiDkkhFs7Q5JdtvicRvZF5gZ8equ&X-Amz-Signature=346d49e1c003f7f2dba7249d39d05d6c4e5536e3df85b9eb17b3f0d838058eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
