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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELQM2CW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDe82Nh7fvxHpEt5Ah9AuIKqpc0C64%2Bde7VRTYjkX4a3wIgdADfNZef9IZtim50M415GvJON7qXFNmBS%2FN6ftoTzuEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKcX95%2Fx9EK4XefyaSrcA74WsvYEd8ibEll6Huh%2FfvbnonYgwNV%2F4Sxt183ghfV7OJke1YfA%2BLecmgBxp0qtOk1OdWv%2BvlTGj7hw0Y2Csp4ErtaF%2BJCT1mDKkwWV2%2FcsDsqJFsi1Wlt%2F%2FUG2oXGN%2F%2BroWeTbYXABvOEB3oOvcEINHAAi6xA3e9ziOsz7Ow0kok%2FOT%2B6N5Nk2ZUD432qSCPo31apqUrqSKqbprE%2BtodCKzXcYCMjiLsbbr%2FKIQbqciX22EYSmoJNhj2FUwkgQUAjymn9NNiiuYeLj%2FclUMYWcJM8gKhhULwiRCTyZ%2BCnEPFmLwX1vRJl8E0JesXA754RPHBpdjxlOH7eNbtDOw2f9FR3fcBU9QFjAmpbWQ%2BjF2YdRLGl96kDnw89x3tfGhfC3wLcPBUJ4WqNKbG5%2FkGtJ3nG1MLycf%2Bh30dcSESboNY1Y4pNXwbRH0%2BNXVhHZTMZ6gyy%2F9NFWEXw6%2FJvjYvgw4%2Fl25gq7WKtD94XN099WGDIgTeriVpCOfBfHqkn1uXXP2fipE%2BhqeINFyZ7Z0fgq6x9P%2Ftj%2Fd5cpb8IM7rvMTnBhzBq2hX4yHb36lxlRSzr07%2FuioAPzqGMmAWCaDUso9OvZYhE1GOqryjZT22XMVPxZvQLmx2ircnKeMJS5lL0GOqUBwR0x9qhf8ON41140j3rzuYOwvJRT7kSjOfSaglMv2NUOL0Vt7U7aFekBoWaM8EaV6xlIkuQ7GjEbq3AhvXHasFVw%2FI06M2BPJ18vJYnWhn8vhnjn66rhUA2y5VeHziWn1rLAIpMlWo4XuDdV%2FxTW5YuF0zf39gJo%2FHBOPgZpaQJhYNdCnBsP1Mw%2F4rptQYfqHx1%2Fn0f11LjJXaiM15fy66XT3RN5&X-Amz-Signature=1e60f80a188d2d6ff327c1e0e1bf019f0095eeacd9152df1ba6fae28cf192696&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELQM2CW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDe82Nh7fvxHpEt5Ah9AuIKqpc0C64%2Bde7VRTYjkX4a3wIgdADfNZef9IZtim50M415GvJON7qXFNmBS%2FN6ftoTzuEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKcX95%2Fx9EK4XefyaSrcA74WsvYEd8ibEll6Huh%2FfvbnonYgwNV%2F4Sxt183ghfV7OJke1YfA%2BLecmgBxp0qtOk1OdWv%2BvlTGj7hw0Y2Csp4ErtaF%2BJCT1mDKkwWV2%2FcsDsqJFsi1Wlt%2F%2FUG2oXGN%2F%2BroWeTbYXABvOEB3oOvcEINHAAi6xA3e9ziOsz7Ow0kok%2FOT%2B6N5Nk2ZUD432qSCPo31apqUrqSKqbprE%2BtodCKzXcYCMjiLsbbr%2FKIQbqciX22EYSmoJNhj2FUwkgQUAjymn9NNiiuYeLj%2FclUMYWcJM8gKhhULwiRCTyZ%2BCnEPFmLwX1vRJl8E0JesXA754RPHBpdjxlOH7eNbtDOw2f9FR3fcBU9QFjAmpbWQ%2BjF2YdRLGl96kDnw89x3tfGhfC3wLcPBUJ4WqNKbG5%2FkGtJ3nG1MLycf%2Bh30dcSESboNY1Y4pNXwbRH0%2BNXVhHZTMZ6gyy%2F9NFWEXw6%2FJvjYvgw4%2Fl25gq7WKtD94XN099WGDIgTeriVpCOfBfHqkn1uXXP2fipE%2BhqeINFyZ7Z0fgq6x9P%2Ftj%2Fd5cpb8IM7rvMTnBhzBq2hX4yHb36lxlRSzr07%2FuioAPzqGMmAWCaDUso9OvZYhE1GOqryjZT22XMVPxZvQLmx2ircnKeMJS5lL0GOqUBwR0x9qhf8ON41140j3rzuYOwvJRT7kSjOfSaglMv2NUOL0Vt7U7aFekBoWaM8EaV6xlIkuQ7GjEbq3AhvXHasFVw%2FI06M2BPJ18vJYnWhn8vhnjn66rhUA2y5VeHziWn1rLAIpMlWo4XuDdV%2FxTW5YuF0zf39gJo%2FHBOPgZpaQJhYNdCnBsP1Mw%2F4rptQYfqHx1%2Fn0f11LjJXaiM15fy66XT3RN5&X-Amz-Signature=827330d1b75816ae9a771af03ba07d54b128db47543797795ef9bc685d6e9545&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
