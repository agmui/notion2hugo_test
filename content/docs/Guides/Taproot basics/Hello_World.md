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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSGX3S%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2bRtOEaosWfozwb5ISmC5izCIfg3hgcgNUhrXSl6K%2BQIgKlJiSMlS212vvLH2bjZKWkyOr88a%2BhOpJbud9V0sXIUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfcwVNVXyZN%2FOzypyrcA9SAmjhaJWX4sTqvy2x0up1D9XouW%2FlW%2BnfJQxajYyile1f%2F%2BQXx7ShPNEj4yebmm4%2BAkBFHRcGczhTX2lvyAgoR7AEAv9bx874MzUYUENF%2BmHFiey%2F3lYLhCJ9YqT8QG0U3DkJuEamEnY5bEjvktFoq1Tv1M%2Bek%2Bzli1NbhMIWGpx2JLIl59rsoKnxstpZBvcDBi%2B8WEvCVltOoo8EMOxBuxNEwsNELUTfAmsZMp%2B%2FrgRTo%2B%2BIT5ctmVQ8LzKW4Z3DFwMgFm57Vh9fNHuHrnVZuXyqZXujzzk68MnLJBUGialJO9M0UmHBu52cbsrz7MoLi%2BER1efwgmekVrtZT8iX6cNYTnmNbhU9PA3DFn1crvWY89Zo5wtnXNsDpw2sGulKghtjg4Mz1FXIMkvbFjaywhAhQDBsWe9ZiQmHqb9wHj6ZIpJMCNY3UHZLFK7wvjUnQqnsqq0BzVf1Upqnk8tGBGpKHK4FOu63XTEOttl09NqpIINxti8IwQCc9o8trSGSqSUE5WeBd11T4iO24DtnoS5F5EHbfnYKqdKWvN9N90q3Qa2rhdfrBZzDioNh0VmdxDqAHT%2BwUwVZKCHuzZ31kGG7D4m8so7QYohGLWKKIldQ4plWoaRE2d44zMNWtpMQGOqUBcNADd8EgQjuFImoMlGfSymh5aJfXMmmhqKtML6IRecJiBYKKyaV%2FXdzYI7QcozzoYpafP1nW5LcIUXZBQ0tE10bj%2FaTzbGH1i2K5Tbz8ZdHReGZkJMAonjH7gWvGkwNo1uIBI2l16WZ1y2B2qFNFnsxn3fAdjE42zJ5EetRO0f47ZRBTaV1GDYPJZ6%2FpfXHE1Y5s21PoNB%2Fk2K5s36Bh6Xf%2Bebbl&X-Amz-Signature=e3f2611653579c8a3e0d7c52669813ff9f19303c3c3174b6c9c9776f00a0e2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GSGX3S%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2bRtOEaosWfozwb5ISmC5izCIfg3hgcgNUhrXSl6K%2BQIgKlJiSMlS212vvLH2bjZKWkyOr88a%2BhOpJbud9V0sXIUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfcwVNVXyZN%2FOzypyrcA9SAmjhaJWX4sTqvy2x0up1D9XouW%2FlW%2BnfJQxajYyile1f%2F%2BQXx7ShPNEj4yebmm4%2BAkBFHRcGczhTX2lvyAgoR7AEAv9bx874MzUYUENF%2BmHFiey%2F3lYLhCJ9YqT8QG0U3DkJuEamEnY5bEjvktFoq1Tv1M%2Bek%2Bzli1NbhMIWGpx2JLIl59rsoKnxstpZBvcDBi%2B8WEvCVltOoo8EMOxBuxNEwsNELUTfAmsZMp%2B%2FrgRTo%2B%2BIT5ctmVQ8LzKW4Z3DFwMgFm57Vh9fNHuHrnVZuXyqZXujzzk68MnLJBUGialJO9M0UmHBu52cbsrz7MoLi%2BER1efwgmekVrtZT8iX6cNYTnmNbhU9PA3DFn1crvWY89Zo5wtnXNsDpw2sGulKghtjg4Mz1FXIMkvbFjaywhAhQDBsWe9ZiQmHqb9wHj6ZIpJMCNY3UHZLFK7wvjUnQqnsqq0BzVf1Upqnk8tGBGpKHK4FOu63XTEOttl09NqpIINxti8IwQCc9o8trSGSqSUE5WeBd11T4iO24DtnoS5F5EHbfnYKqdKWvN9N90q3Qa2rhdfrBZzDioNh0VmdxDqAHT%2BwUwVZKCHuzZ31kGG7D4m8so7QYohGLWKKIldQ4plWoaRE2d44zMNWtpMQGOqUBcNADd8EgQjuFImoMlGfSymh5aJfXMmmhqKtML6IRecJiBYKKyaV%2FXdzYI7QcozzoYpafP1nW5LcIUXZBQ0tE10bj%2FaTzbGH1i2K5Tbz8ZdHReGZkJMAonjH7gWvGkwNo1uIBI2l16WZ1y2B2qFNFnsxn3fAdjE42zJ5EetRO0f47ZRBTaV1GDYPJZ6%2FpfXHE1Y5s21PoNB%2Fk2K5s36Bh6Xf%2Bebbl&X-Amz-Signature=ef8f00bc2e1958e035e559e00813534afb9c7522d841a5fb0322ec990ecef655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
