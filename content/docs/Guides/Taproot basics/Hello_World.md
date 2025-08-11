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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBY6BNH6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlyWAB5%2BuIsPXxS6YKk8HkbqCVqquuAdf%2BwgQCnEkD6AIgMeVBP%2FAiJVkE7oIHIR4bpJvLEQWI00et%2FRxmWMbOt7MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8nIiU6WJ30W1tqSyrcA%2BDq4erjZ8rc1pNJLivejpYjllEtyHHPPvi3t2ulpeB8C8FoZhWEjE5NsCigvf1tTj8OloRg7UlVMcFwP7RaO%2BD9htfHXwvLgAiYU2VjY40BoUvFMPzGYevX8n7c%2BikoMYEMPw25IDBaYqZzV3lSbQfdLLGBu1glwzyKQNaHIi5TGGQq7iUjHbI2nNRb2UmQV6tdhMRmr0s7W3iiDxUCv%2FKH9XDnEg9lW6bbpKRsQIwsIeF%2F2AnYrYSHE9MWr3r56SI6iA8L1vb7vNWGVsW7WwK7LHbKOFjW3NWAjPgUYY3RzlZJHwbvmDg%2BzvN%2BGvFjtXRVEFU3CIRJSZJQp7Se3rLRTmtSFmKt8Tyr4bDpi9EHlPpvJQyKYx1IFzfSkg8G5ULFORFX8ECiMn%2FJ6qB2la8PwY24%2Bj7Hmc8fB%2FR3aUCF7KzKWa1wMlJLqp0xGCc5V7LOgmtnTvdaVgMDtI3t0rEObGd9H0a%2B17P1nGhBZHObKRxiADiPBo52ABxYDMpKYrdVZzD12E8eKL8q2insP1ckTXBYCdbd4LLotEc5NxELqzd9wGnVWETpce4O2zJ8BcJEke2qyZw6%2FOtfAJkWtzG1IjbDbfglNHeXTn%2BID9mW93fV9lIZkwznLX1YMICs5sQGOqUBTd4fNkMfcRsywlL1xqnlGzoPMBjROxojjx1QiyFfonx7t80COW755b8vEP17XOzK98kf3PvvjJ4zlgE4GLnponGbpbBUs0%2FY2Qx0jrdDKJS%2FcnVCpJ4QPk0C6oVi%2F6EW2iEl5CL5SiR5KDXCgmT4qooHq4oU%2Bdtfhaj9HBRlCLhl9eU4p7gxZMDZVXyL7HdMw2Y%2FtRGChWdi8CbGfvb%2FNRHhfQm1&X-Amz-Signature=9a89c05b0d65eadfd35920aac1087d0c208958da026a3e01eea8468d66c2ce21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBY6BNH6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlyWAB5%2BuIsPXxS6YKk8HkbqCVqquuAdf%2BwgQCnEkD6AIgMeVBP%2FAiJVkE7oIHIR4bpJvLEQWI00et%2FRxmWMbOt7MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8nIiU6WJ30W1tqSyrcA%2BDq4erjZ8rc1pNJLivejpYjllEtyHHPPvi3t2ulpeB8C8FoZhWEjE5NsCigvf1tTj8OloRg7UlVMcFwP7RaO%2BD9htfHXwvLgAiYU2VjY40BoUvFMPzGYevX8n7c%2BikoMYEMPw25IDBaYqZzV3lSbQfdLLGBu1glwzyKQNaHIi5TGGQq7iUjHbI2nNRb2UmQV6tdhMRmr0s7W3iiDxUCv%2FKH9XDnEg9lW6bbpKRsQIwsIeF%2F2AnYrYSHE9MWr3r56SI6iA8L1vb7vNWGVsW7WwK7LHbKOFjW3NWAjPgUYY3RzlZJHwbvmDg%2BzvN%2BGvFjtXRVEFU3CIRJSZJQp7Se3rLRTmtSFmKt8Tyr4bDpi9EHlPpvJQyKYx1IFzfSkg8G5ULFORFX8ECiMn%2FJ6qB2la8PwY24%2Bj7Hmc8fB%2FR3aUCF7KzKWa1wMlJLqp0xGCc5V7LOgmtnTvdaVgMDtI3t0rEObGd9H0a%2B17P1nGhBZHObKRxiADiPBo52ABxYDMpKYrdVZzD12E8eKL8q2insP1ckTXBYCdbd4LLotEc5NxELqzd9wGnVWETpce4O2zJ8BcJEke2qyZw6%2FOtfAJkWtzG1IjbDbfglNHeXTn%2BID9mW93fV9lIZkwznLX1YMICs5sQGOqUBTd4fNkMfcRsywlL1xqnlGzoPMBjROxojjx1QiyFfonx7t80COW755b8vEP17XOzK98kf3PvvjJ4zlgE4GLnponGbpbBUs0%2FY2Qx0jrdDKJS%2FcnVCpJ4QPk0C6oVi%2F6EW2iEl5CL5SiR5KDXCgmT4qooHq4oU%2Bdtfhaj9HBRlCLhl9eU4p7gxZMDZVXyL7HdMw2Y%2FtRGChWdi8CbGfvb%2FNRHhfQm1&X-Amz-Signature=4402e667309433c8a5caf8362213436c316ad2b49284d50c30a904e30da6327d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
