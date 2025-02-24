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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCODBC2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8GG79NuihOf0f7PPfIEVaS03zU5%2FOG%2FyO1%2BAhRb2PkAiBS%2B%2F96seKMJadEsfdG9%2FRSXrnAFo9Ox3FfFjs7EdphqCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQfoB6OhwGEFfUXkYKtwDJD%2FYMz6fahp85wDGs8tdETaL12cDtAJAmc9X4RiykEATniAV2JhfHRHLdLXfszfOnV52tZ4VEWh6pB1y%2B4h2v7jS9bwEpBteMxRZaHm0mCmtyVdGN%2F%2BhzoLHro2j%2FwtY%2B2uELZepE5KcQu5JzqxvS8wjc1uWa9NW82RBtX9Fl0WAUQAOzQjd%2FOviH080mWV0u9M0u9JMJ9gWgKa%2BIvWcKGj483Afn8cOiMZJentGYWfRfH4MmuBJMYIRQY2jJu7JRgaiWn7ah%2FHHaV25jQmC1EZi4wA80CUJ3xm8vtqI%2BF0NI93gWuWetfamcjpwcA6%2BCgZsk%2BjnqHKQLELZDw4jFQ3esoE0SFgxDiafI%2F%2BSQI%2BqjanQ5XIAoeHab%2BxKKYkjw9stq8ddK68vczoo9%2BFeDSu%2FPCvFQz9hOWR%2FG94INMOps%2FkV7xxIOUcldWu5E%2FhXJKZB5%2BIWu3b2LdsqdLZLz6F1s6B2xJ8mcLA1r9agUI8N20DpHMyrdCUlRHX0hlHjSX6cS56DQcRG5WitEBpSbfepFGtkd%2F5uJD41nozdtHXIO0GCuFcnr8OloNIzI0b3czy7eJJfLJ6Jmxl7cLI58dTzyeQnPTpAcXiseENO9Qg6C6KCEnIKVjnUShsw2ZPwvQY6pgGgcbWzrQOprQyVEAV60i30%2B5OlMD7xKigNY5h9RiK9P%2BRKBLl9Xak4k99xg%2FRsRNQ4ZdQig%2FfDWNcH3tEKr4aog%2Fdr63NwAusOZ7wF69pfyEETz3KvaGrJOSFkLqnVL3g04WS1WRjFRXMVMGgbucscz3VB2zttHVGsfxfMIit7XVmFZ1eiQmovPpplIsuxrlbPVJPUOi83weZy4c5abThPWRHvSGIH&X-Amz-Signature=41e80af21dd8f50e0fa340c4a2cb8d6574bd8f51d64b1006d73eb6a85bec7cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCODBC2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8GG79NuihOf0f7PPfIEVaS03zU5%2FOG%2FyO1%2BAhRb2PkAiBS%2B%2F96seKMJadEsfdG9%2FRSXrnAFo9Ox3FfFjs7EdphqCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQfoB6OhwGEFfUXkYKtwDJD%2FYMz6fahp85wDGs8tdETaL12cDtAJAmc9X4RiykEATniAV2JhfHRHLdLXfszfOnV52tZ4VEWh6pB1y%2B4h2v7jS9bwEpBteMxRZaHm0mCmtyVdGN%2F%2BhzoLHro2j%2FwtY%2B2uELZepE5KcQu5JzqxvS8wjc1uWa9NW82RBtX9Fl0WAUQAOzQjd%2FOviH080mWV0u9M0u9JMJ9gWgKa%2BIvWcKGj483Afn8cOiMZJentGYWfRfH4MmuBJMYIRQY2jJu7JRgaiWn7ah%2FHHaV25jQmC1EZi4wA80CUJ3xm8vtqI%2BF0NI93gWuWetfamcjpwcA6%2BCgZsk%2BjnqHKQLELZDw4jFQ3esoE0SFgxDiafI%2F%2BSQI%2BqjanQ5XIAoeHab%2BxKKYkjw9stq8ddK68vczoo9%2BFeDSu%2FPCvFQz9hOWR%2FG94INMOps%2FkV7xxIOUcldWu5E%2FhXJKZB5%2BIWu3b2LdsqdLZLz6F1s6B2xJ8mcLA1r9agUI8N20DpHMyrdCUlRHX0hlHjSX6cS56DQcRG5WitEBpSbfepFGtkd%2F5uJD41nozdtHXIO0GCuFcnr8OloNIzI0b3czy7eJJfLJ6Jmxl7cLI58dTzyeQnPTpAcXiseENO9Qg6C6KCEnIKVjnUShsw2ZPwvQY6pgGgcbWzrQOprQyVEAV60i30%2B5OlMD7xKigNY5h9RiK9P%2BRKBLl9Xak4k99xg%2FRsRNQ4ZdQig%2FfDWNcH3tEKr4aog%2Fdr63NwAusOZ7wF69pfyEETz3KvaGrJOSFkLqnVL3g04WS1WRjFRXMVMGgbucscz3VB2zttHVGsfxfMIit7XVmFZ1eiQmovPpplIsuxrlbPVJPUOi83weZy4c5abThPWRHvSGIH&X-Amz-Signature=68c16647eaa75f9c49997f220c417fa0e7bf4665a91d80533d9cab4db70b9425&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
