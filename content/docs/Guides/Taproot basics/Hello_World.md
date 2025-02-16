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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HC7FQUM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCGQE2fus7h5iizvIklrIWyCWyM6dy0zeeq4c7EWNDBQwIgOXqTk9sXc9j3lTZdRwGaUTMs42K1V%2BVyOrmwHOJG34gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGYROnpkafybYOQphSrcA%2Fgf%2B1BCtGgYf9xOzky9dY6%2F42Z0WyzRWraPlyj9%2FKavWgzYo13LD%2FTIJUTLcOYo61BGj4roieV1MBJ469Lg6RRyagd7YxdWl3RcTOWn2B6Ch41%2BDV7k4pcdvIEvr9%2FOmtTzZYrGuL0QmP6SUWsDroJLaoLCg4lIOavoyFBFUI0mjJssISWsKPTLaft8nPwIQEhzeDe7nSMLXMndYjD40u91efJ5PMma8d1jJXmMytPNAmRXWpM4J8uR4QK3es5cq0xnZ%2FhZn2HawxY%2Ft75RYL0DeB%2BY81PywFTUET9XsVfBukb5aBs0P%2BB6149YvhFS5Mi4xR3fn6CaNo9wjNFPKNr7uyMUu3E2etit4Iwme%2Fk0g%2FGkMbdRymUKF0VJuGkjVG39FwiLm377TQbdMX0zECNF%2FYqblHybW5x6hguysTr6OZYf6yTE3Bfi6ASH%2BT1A%2FI5Cr0wWdFitutExoA3fL%2BrVcq4RZzpDALbpdS36NcLRBwLgabZEXrgTFIriBUVncuaMLnebrwmYiWj%2FY7hfGpznvuYWblcMxlZqtuHtE31r3mAxw4qxqY%2F4AZjBqSfB8t1usIdwsxCMSjC3kRlyyWZk7KM1oP67ckzmAhzDiEo2Q6qRK9Xv9%2BowqZkmMMz9xb0GOqUBEXoXqffM4PcfNolAAgBfcvNhnVttinJgv8ZbIFtVkOQSLloXbVRDnNV%2BWw17AynOQ3v5VGmbgF66sC4WtwuKOIomH%2FsmaDaZVGYNkdpgLgyWASAoJbkb3hLaucYUWywVL65YMYEUq5OcUHon22Gjnnt0jtmpIo1cJWvWsZdtmXrxyxvnlALUNs%2FvwrnOfRYL6GHmucw1CUTMbBzvAUr9NIpDVob1&X-Amz-Signature=c22816d8aacd79f409365b8f380052a5231a4946cc18f03e29cc501f9ba426b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HC7FQUM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCGQE2fus7h5iizvIklrIWyCWyM6dy0zeeq4c7EWNDBQwIgOXqTk9sXc9j3lTZdRwGaUTMs42K1V%2BVyOrmwHOJG34gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGYROnpkafybYOQphSrcA%2Fgf%2B1BCtGgYf9xOzky9dY6%2F42Z0WyzRWraPlyj9%2FKavWgzYo13LD%2FTIJUTLcOYo61BGj4roieV1MBJ469Lg6RRyagd7YxdWl3RcTOWn2B6Ch41%2BDV7k4pcdvIEvr9%2FOmtTzZYrGuL0QmP6SUWsDroJLaoLCg4lIOavoyFBFUI0mjJssISWsKPTLaft8nPwIQEhzeDe7nSMLXMndYjD40u91efJ5PMma8d1jJXmMytPNAmRXWpM4J8uR4QK3es5cq0xnZ%2FhZn2HawxY%2Ft75RYL0DeB%2BY81PywFTUET9XsVfBukb5aBs0P%2BB6149YvhFS5Mi4xR3fn6CaNo9wjNFPKNr7uyMUu3E2etit4Iwme%2Fk0g%2FGkMbdRymUKF0VJuGkjVG39FwiLm377TQbdMX0zECNF%2FYqblHybW5x6hguysTr6OZYf6yTE3Bfi6ASH%2BT1A%2FI5Cr0wWdFitutExoA3fL%2BrVcq4RZzpDALbpdS36NcLRBwLgabZEXrgTFIriBUVncuaMLnebrwmYiWj%2FY7hfGpznvuYWblcMxlZqtuHtE31r3mAxw4qxqY%2F4AZjBqSfB8t1usIdwsxCMSjC3kRlyyWZk7KM1oP67ckzmAhzDiEo2Q6qRK9Xv9%2BowqZkmMMz9xb0GOqUBEXoXqffM4PcfNolAAgBfcvNhnVttinJgv8ZbIFtVkOQSLloXbVRDnNV%2BWw17AynOQ3v5VGmbgF66sC4WtwuKOIomH%2FsmaDaZVGYNkdpgLgyWASAoJbkb3hLaucYUWywVL65YMYEUq5OcUHon22Gjnnt0jtmpIo1cJWvWsZdtmXrxyxvnlALUNs%2FvwrnOfRYL6GHmucw1CUTMbBzvAUr9NIpDVob1&X-Amz-Signature=285229eae23fc49190d83781d3ff3b2b77644db65983a100322d778792b15da9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
