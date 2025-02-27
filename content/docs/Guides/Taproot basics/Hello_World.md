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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIPKOZS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiAj759OuVvtjbVYvdpxGGFvqWkU4rhSnH7mOHFAwvTwIhAItoCxIHrMSjMYe69y16xZPkPqURYfbfsa8d%2BAoMkdEdKv8DCHwQABoMNjM3NDIzMTgzODA1Igyiz29d6NoxQngZ8agq3ANiGMMC%2BpzKdiog613JRGVqEuenar%2BUWvH8y64fpzGadRWNhoxvTod1F0QKASE3VMDCkR0dWmZLpHKQCWbpHCjeMpziaS1pxSPnB00cTPDofyTBkZVuH4arbcJ8bvmvL4M7owMUZ4kLDfSoKW2fgBxCDebBQWZgNo8Ot0xfOOfYSsQzuGFw1coU%2BCOjf21%2FVs6CzuI6IN3xud1GB5v9%2BwOZq44a4t8txuG%2BM2Bve9rjQxDR9HSfD7lJdPKLIkEGoelCCgo0%2FfzTWZtZ9SkkM8ZDkLEuRQ7dpwiF6NHMLgRMNnPPZVqJX1CBovNaLMPPPmFXByjlBJ1plhbZ%2BMqiAQl6e%2BeRQznOCL9QwUaZHVXz1t5Ml%2F%2BdVNwF6FKJCxaanBr1db06ww6RksJhDiMHfEhH5uNyoTlStc3tuLfwskLth4IrJdHTlgjJ3JLfWKw0qbWZ%2FpsItbPU4weMETpQU7A%2Ba58HAw9EikfegLkRGp6M92fSqsGzqqiNFtztCj0cKCKV0mytmDDVDP3RzdtF%2FpNMQiXpUGwAGYewEwuhPew7CBpQAvyVeCiw4RqEDnIfqn8M1AivLVByAkvmC0ZqpgDXpVGbBSzaWTRY2QKHROoIYiziFWsYwGAXu8ETNzDt8IK%2BBjqkAWPYdD6T6P5MtBUJV0fBPZXiYbnRqmKeOd1eQ6w1p0c9HTMR4uWqvpxer3HQS4YLcn%2F2Ck%2Bb5XPHBswpWfOrp2ryB0AGV3OYhyTvGspkL3vrruATeo5EPmLBlGVp93ykzy%2FUOUBfj9ChLSzFvwT5mfPHGkepsVxbkFerlhUFihJMA6TCE05kfIBTz4RQI4fhyaLxXCJNHOmXXE5BgKZFy3FFAOHi&X-Amz-Signature=10f487a72e64347c7a3284f580aed9d19c067292c35f9eb6f6d64c72c4a10ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIPKOZS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiAj759OuVvtjbVYvdpxGGFvqWkU4rhSnH7mOHFAwvTwIhAItoCxIHrMSjMYe69y16xZPkPqURYfbfsa8d%2BAoMkdEdKv8DCHwQABoMNjM3NDIzMTgzODA1Igyiz29d6NoxQngZ8agq3ANiGMMC%2BpzKdiog613JRGVqEuenar%2BUWvH8y64fpzGadRWNhoxvTod1F0QKASE3VMDCkR0dWmZLpHKQCWbpHCjeMpziaS1pxSPnB00cTPDofyTBkZVuH4arbcJ8bvmvL4M7owMUZ4kLDfSoKW2fgBxCDebBQWZgNo8Ot0xfOOfYSsQzuGFw1coU%2BCOjf21%2FVs6CzuI6IN3xud1GB5v9%2BwOZq44a4t8txuG%2BM2Bve9rjQxDR9HSfD7lJdPKLIkEGoelCCgo0%2FfzTWZtZ9SkkM8ZDkLEuRQ7dpwiF6NHMLgRMNnPPZVqJX1CBovNaLMPPPmFXByjlBJ1plhbZ%2BMqiAQl6e%2BeRQznOCL9QwUaZHVXz1t5Ml%2F%2BdVNwF6FKJCxaanBr1db06ww6RksJhDiMHfEhH5uNyoTlStc3tuLfwskLth4IrJdHTlgjJ3JLfWKw0qbWZ%2FpsItbPU4weMETpQU7A%2Ba58HAw9EikfegLkRGp6M92fSqsGzqqiNFtztCj0cKCKV0mytmDDVDP3RzdtF%2FpNMQiXpUGwAGYewEwuhPew7CBpQAvyVeCiw4RqEDnIfqn8M1AivLVByAkvmC0ZqpgDXpVGbBSzaWTRY2QKHROoIYiziFWsYwGAXu8ETNzDt8IK%2BBjqkAWPYdD6T6P5MtBUJV0fBPZXiYbnRqmKeOd1eQ6w1p0c9HTMR4uWqvpxer3HQS4YLcn%2F2Ck%2Bb5XPHBswpWfOrp2ryB0AGV3OYhyTvGspkL3vrruATeo5EPmLBlGVp93ykzy%2FUOUBfj9ChLSzFvwT5mfPHGkepsVxbkFerlhUFihJMA6TCE05kfIBTz4RQI4fhyaLxXCJNHOmXXE5BgKZFy3FFAOHi&X-Amz-Signature=50cd1f6db07bf41b9ee16eef37e075b42bfb0c89b52e495525844ccdd57a38b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
