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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTXMEBZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCUh5hVcVQSauzCBU%2Bf3K9PTUshGl0tF8IvLNLAIGPP6wIhAMm5XAWqr0AJtwGK3bYFm8TU%2F2fOMGpymUzOFCvpjTrDKv8DCGgQABoMNjM3NDIzMTgzODA1Igz4RbdNkuT%2FjLVoIpAq3APVxvZv7uwo47KE9ayVqy5WrXszb1beqo3wrcUYQHCngQD8HcbG6MCOHFkLy8xS2dlMfhGpufFN%2BlZuaLIOe9PF%2FgGg6cKRVq3liUauX%2BRsSbh%2BqOf1pvNnnT%2BFxnr7SBwZlJbmulG4PjR6%2Fb0U4s4GwBo4w8T3slLrEiOzg2pdGT3SfdBcVcw3emqwQZHlgSUzl0OoyMr%2FAPMN7O3tLo%2Btv9r5nf9jmH6WaBKICo33jW1BkmeqGgaVQaMZvXohxmUPAn%2BOWnV7Hr8%2BPwJKDFIABWKXw0%2BjGh7pmiDT3UT0K8985he6tRycTOieCNogzrisLSA7dd%2FYvkbqPsRb3ClTIGm4OS5nWawPYH1AsrrzmxCcWBvlUb98lK%2FWD9O3Ax57TpfkPZvjlJCXOf6A5CCwkDb3I8SXmA3TExB6N5l3EjxJZKSJZfTRy6ZYdtGjsEUvWZXtxaxgF0GVUrqcli0k4LqRlU6YP2Pc%2BCZmFDq9DzToNqXV5J2FvibCj4VZX7rqMA5Mc1czKSSYkABwUWkPEiVcWySaW0SIHxSeEM6pv11TSbu21%2Bo1VT%2FzMSKlQUSrVAyxwbVnsiqk4%2B9omoS12kTZIVsy42TMm48G1qkalIbxdtR0Bae1OwzR8TD%2F3py%2FBjqkAaZdxhfitmQPewv0TR4QnTrhhqn4v21l%2BXV%2B%2BOl8nIs0XJVL3Tc1nVZ2T3jmDa8zqdQs2%2Bmm7%2BA%2FazaoxJiJ70Ped%2B6hJbMvMq%2BK3QWQqCcG0I1GcJjmTQR73wtdOUtjfyDIMSopzs01l0V3FoQJ4pnFgC7PkQy%2B6o0KO1LOaF2sTwwd4cS6sDkWkBCTavRHbo42w%2B5hH3vrfXtcl%2BmPn0eqaIaq&X-Amz-Signature=bd0e1e4a3bb74737d33f7a5d410f03cc95d4dd695d66cc78c5891aede5fe9033&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTXMEBZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCUh5hVcVQSauzCBU%2Bf3K9PTUshGl0tF8IvLNLAIGPP6wIhAMm5XAWqr0AJtwGK3bYFm8TU%2F2fOMGpymUzOFCvpjTrDKv8DCGgQABoMNjM3NDIzMTgzODA1Igz4RbdNkuT%2FjLVoIpAq3APVxvZv7uwo47KE9ayVqy5WrXszb1beqo3wrcUYQHCngQD8HcbG6MCOHFkLy8xS2dlMfhGpufFN%2BlZuaLIOe9PF%2FgGg6cKRVq3liUauX%2BRsSbh%2BqOf1pvNnnT%2BFxnr7SBwZlJbmulG4PjR6%2Fb0U4s4GwBo4w8T3slLrEiOzg2pdGT3SfdBcVcw3emqwQZHlgSUzl0OoyMr%2FAPMN7O3tLo%2Btv9r5nf9jmH6WaBKICo33jW1BkmeqGgaVQaMZvXohxmUPAn%2BOWnV7Hr8%2BPwJKDFIABWKXw0%2BjGh7pmiDT3UT0K8985he6tRycTOieCNogzrisLSA7dd%2FYvkbqPsRb3ClTIGm4OS5nWawPYH1AsrrzmxCcWBvlUb98lK%2FWD9O3Ax57TpfkPZvjlJCXOf6A5CCwkDb3I8SXmA3TExB6N5l3EjxJZKSJZfTRy6ZYdtGjsEUvWZXtxaxgF0GVUrqcli0k4LqRlU6YP2Pc%2BCZmFDq9DzToNqXV5J2FvibCj4VZX7rqMA5Mc1czKSSYkABwUWkPEiVcWySaW0SIHxSeEM6pv11TSbu21%2Bo1VT%2FzMSKlQUSrVAyxwbVnsiqk4%2B9omoS12kTZIVsy42TMm48G1qkalIbxdtR0Bae1OwzR8TD%2F3py%2FBjqkAaZdxhfitmQPewv0TR4QnTrhhqn4v21l%2BXV%2B%2BOl8nIs0XJVL3Tc1nVZ2T3jmDa8zqdQs2%2Bmm7%2BA%2FazaoxJiJ70Ped%2B6hJbMvMq%2BK3QWQqCcG0I1GcJjmTQR73wtdOUtjfyDIMSopzs01l0V3FoQJ4pnFgC7PkQy%2B6o0KO1LOaF2sTwwd4cS6sDkWkBCTavRHbo42w%2B5hH3vrfXtcl%2BmPn0eqaIaq&X-Amz-Signature=85868134455c566c50a07f76f90b14a849cac06e787bb37be93d02215a64169b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
