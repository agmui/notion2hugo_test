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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2LPRKT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDGm2YYrcRmcD8%2FKpEZjw8sS%2FQ6B5wp2qy5zctSrvhivAIgVb6sPKSHrV%2FqW%2FtQv11FL4wvNipt%2BiEiqH%2FQx8mayOIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEVYYQ1PFLHsC04MbyrcA6W2e6hExjYmHH7nmAirqagOSZvovM%2B5nvAQTLAuMHEHhTdaGdi%2B0Ja7hnQGj855woNxAaTGwM7%2F52Z3JR6HD0A0Op94ZfqTJlJepKoFsbfOSisp9HS15TrWd4oYPQlscXeOCAqbI4aAl819QLRiFqq9lOM0SP0GVYPrHCzsvSaSEIP8XHE7FxZDu2hP3VsYBiotcgwZYt6IaIq6qb2WvqLRJL73oO0ycXrV9IuNZM%2FAndQ%2BY6EcJ7iSP65B%2FlFDz3x3JyakDDYmQzzQYKptnSbzyFiVN4kuCog7IZPLsuUvE%2BJZA6GjBTuX%2B1j41ZmijdwENYIZTJcOPTpOTJOAeiTPsokCSz7sAgB5VGzWWMfwVQlQ7FEIDk4GZUqQWJKl%2FvwVAkwafe%2BpiMtNsAwxJMcwP9Z1Ab4GR9b9Cgi0QSUHCo8jvouWmkctnDM%2F1FVPGUO7ufDqWpCVxWbRnyd1i%2BWcOQAAmulzhLupnngF4iRf7HMHqoLrhSrTnmByYtOhWqhv8cpqan8Pi9TArfDxUKzEcwVbesMZGhxhdmREYeT9ivKJF40%2FUb%2BoYSxBpAWqakIkt7FxRZcLp%2FEUAc9tnhC%2FzPoxJOZ9HTOAVapwo0IOLgSQvsTx6DY91K%2FBMI%2FpsMMGOqUBarPa%2BSDPjxvcBse1DVWTh6hT%2F5XG6AXHjd3urYE8j0awDf3iowADu7q6jj%2BPJZ%2FSp3C%2B0bVa68jiG%2B%2F%2Bku6WAegIIMUWgwH3AOHX6zn%2BrzeiQs05y3FaOtJj0cJaZxae1BScEAiSRSgjORAt6nAwuRF5ei5Rk%2Bl%2Fa8%2FXn9PJ6ZaB02%2FJ9C4BLMw%2FYa%2F%2BpqnpRRjb0NV%2BB35Ww%2BJlFnRiV%2FazHZUz&X-Amz-Signature=a3000aa841dd32deed38b012d75b210330284b424874d0a3f225e4821ecbf936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2LPRKT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDGm2YYrcRmcD8%2FKpEZjw8sS%2FQ6B5wp2qy5zctSrvhivAIgVb6sPKSHrV%2FqW%2FtQv11FL4wvNipt%2BiEiqH%2FQx8mayOIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEVYYQ1PFLHsC04MbyrcA6W2e6hExjYmHH7nmAirqagOSZvovM%2B5nvAQTLAuMHEHhTdaGdi%2B0Ja7hnQGj855woNxAaTGwM7%2F52Z3JR6HD0A0Op94ZfqTJlJepKoFsbfOSisp9HS15TrWd4oYPQlscXeOCAqbI4aAl819QLRiFqq9lOM0SP0GVYPrHCzsvSaSEIP8XHE7FxZDu2hP3VsYBiotcgwZYt6IaIq6qb2WvqLRJL73oO0ycXrV9IuNZM%2FAndQ%2BY6EcJ7iSP65B%2FlFDz3x3JyakDDYmQzzQYKptnSbzyFiVN4kuCog7IZPLsuUvE%2BJZA6GjBTuX%2B1j41ZmijdwENYIZTJcOPTpOTJOAeiTPsokCSz7sAgB5VGzWWMfwVQlQ7FEIDk4GZUqQWJKl%2FvwVAkwafe%2BpiMtNsAwxJMcwP9Z1Ab4GR9b9Cgi0QSUHCo8jvouWmkctnDM%2F1FVPGUO7ufDqWpCVxWbRnyd1i%2BWcOQAAmulzhLupnngF4iRf7HMHqoLrhSrTnmByYtOhWqhv8cpqan8Pi9TArfDxUKzEcwVbesMZGhxhdmREYeT9ivKJF40%2FUb%2BoYSxBpAWqakIkt7FxRZcLp%2FEUAc9tnhC%2FzPoxJOZ9HTOAVapwo0IOLgSQvsTx6DY91K%2FBMI%2FpsMMGOqUBarPa%2BSDPjxvcBse1DVWTh6hT%2F5XG6AXHjd3urYE8j0awDf3iowADu7q6jj%2BPJZ%2FSp3C%2B0bVa68jiG%2B%2F%2Bku6WAegIIMUWgwH3AOHX6zn%2BrzeiQs05y3FaOtJj0cJaZxae1BScEAiSRSgjORAt6nAwuRF5ei5Rk%2Bl%2Fa8%2FXn9PJ6ZaB02%2FJ9C4BLMw%2FYa%2F%2BpqnpRRjb0NV%2BB35Ww%2BJlFnRiV%2FazHZUz&X-Amz-Signature=c8fa216f337b5ec54e8d71e5f3c5ad76e78ada42e022e3e2a46eeee8ae1b2dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
