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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QORGJPTF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7XsEI2Fh5NtF23U7vtjXjiw5dUt3cwcYg67omGN4m5AiBOzApxJQMQEFlNznv8nRyxu1GY%2BwIEBlsjioNsgHwoJyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPYzzxA7Biz0IHtYkKtwDeet7c9tlmiUhVcfYMuLM%2BXgIZOx%2BgQcDX4jWHmSxyClJO5gdCxYrFzT%2FT%2FqHv4PnBISWZCmLgTyom%2BJUE8yYKF4vNEUvVZnB21BaRD6KYPskKXW7rhXBszHa9XLfRAMP8Z0krz1jFvoad41sgohGZUx94A5skjNbxUylYGPTkSCRCyD3NYxPJGsQOpYtCJ3rbztHdLS%2BVeTdcBNmRNTC6WW9Srbxb%2F%2FoTm3R%2F%2FIHITaRwQWdT%2F%2BgQi91oZZ4eEuo1b0cLGJmfZZPdGMGDZZHYkHQIaySCtUqsU%2FfpsfUiW12ZWMxOPXc1owA949i29VjErv%2BLI8D6muJDVMlCLReJp07c3R0t1AbwjIa1okFy8WfRwAaejizQaWfqWMK4RcM5x%2BebFbJQJGhlj6AuWRZtQ%2FnEDEN84wOnHPWHZa1DOUn%2Biu9K%2BpaH3Gksfrm9%2FXmdf5KsXEIg7F2Oe%2BJe5XEQFc4RVxNBXLtm7knxAsJDRGm0wtX6OnaIQG7PrLhiXh4mRoV7yyV1WU7bXkFqCwMHK%2BlZYkDA5OYOZa5uMFlY2ozojrn7sKzOApbivfs5FcW3ymFxK%2FxawZ0nSs5pJ3W1u%2FCj8m6%2BhkzPJ54N%2FVKKhDwlM%2BXZvZnWsUVOe4wktHPvwY6pgFw211A7prsYNqxEtJNfuij6GbXtHX501JTCQb%2F%2FK6AQEStT4TQ40zl6bm1u4NaGTiD60zTuB2vb63TyL7NouybYDmtp02JCvVbPLgoke9irg%2B1t8xxlnqq3Kfq0aHSevdsKl0F6HgzQI30VL5nL%2Fc7iBGjRMQ74hun886wcCdK6EHcNlmRBoBS9zPicOQGvGhDhe5U0NJVILl73DWWFes6qULwAe6E&X-Amz-Signature=92451a0c66df2ca9138460765e5a006fa6b68e0218c2bc809bebb2db6782edc1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QORGJPTF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7XsEI2Fh5NtF23U7vtjXjiw5dUt3cwcYg67omGN4m5AiBOzApxJQMQEFlNznv8nRyxu1GY%2BwIEBlsjioNsgHwoJyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPYzzxA7Biz0IHtYkKtwDeet7c9tlmiUhVcfYMuLM%2BXgIZOx%2BgQcDX4jWHmSxyClJO5gdCxYrFzT%2FT%2FqHv4PnBISWZCmLgTyom%2BJUE8yYKF4vNEUvVZnB21BaRD6KYPskKXW7rhXBszHa9XLfRAMP8Z0krz1jFvoad41sgohGZUx94A5skjNbxUylYGPTkSCRCyD3NYxPJGsQOpYtCJ3rbztHdLS%2BVeTdcBNmRNTC6WW9Srbxb%2F%2FoTm3R%2F%2FIHITaRwQWdT%2F%2BgQi91oZZ4eEuo1b0cLGJmfZZPdGMGDZZHYkHQIaySCtUqsU%2FfpsfUiW12ZWMxOPXc1owA949i29VjErv%2BLI8D6muJDVMlCLReJp07c3R0t1AbwjIa1okFy8WfRwAaejizQaWfqWMK4RcM5x%2BebFbJQJGhlj6AuWRZtQ%2FnEDEN84wOnHPWHZa1DOUn%2Biu9K%2BpaH3Gksfrm9%2FXmdf5KsXEIg7F2Oe%2BJe5XEQFc4RVxNBXLtm7knxAsJDRGm0wtX6OnaIQG7PrLhiXh4mRoV7yyV1WU7bXkFqCwMHK%2BlZYkDA5OYOZa5uMFlY2ozojrn7sKzOApbivfs5FcW3ymFxK%2FxawZ0nSs5pJ3W1u%2FCj8m6%2BhkzPJ54N%2FVKKhDwlM%2BXZvZnWsUVOe4wktHPvwY6pgFw211A7prsYNqxEtJNfuij6GbXtHX501JTCQb%2F%2FK6AQEStT4TQ40zl6bm1u4NaGTiD60zTuB2vb63TyL7NouybYDmtp02JCvVbPLgoke9irg%2B1t8xxlnqq3Kfq0aHSevdsKl0F6HgzQI30VL5nL%2Fc7iBGjRMQ74hun886wcCdK6EHcNlmRBoBS9zPicOQGvGhDhe5U0NJVILl73DWWFes6qULwAe6E&X-Amz-Signature=9f44a82c46ef87698d4e6a43f190ead7425f1cea96766d3caa331d57589dbe63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
