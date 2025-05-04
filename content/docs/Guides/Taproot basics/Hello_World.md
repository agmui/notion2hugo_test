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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53TF4UG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFyT8OA6Ntp6%2BFzCRl9O%2FORg%2FbXlf3PgSmd6fSczkGsNAiEA1b0fpSj9Ni5mqQUfKkmrOMMBYAeZTTti2s1kiuZvgaIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDG6mo8rK15rCTFkFnSrcA64LO2HuU8zMMJGrJ%2B4wOYdet5f57Z1xBVa2wNmNa%2F7yixDif7sZ7CIQQpH8lEYphqDz9c%2BVSvPiH0dmjE3mO8vFz1VzYjnEarieK202N50fTwKu3%2B6zrbNG%2Fuzp%2FIO8n%2Bw4dxuK5zk1ADPKqDFR5q4TM0MKSZkpO%2FoTiYkNsGRL8XmSREnO4Aq0%2FMCMXtoRNqDFZaKe5k15hoJL6l6zZxaa5TPvG3xaopmBkZ%2FeuXyXKCi9qQc7F9eCbGx9lqX8ZsJ5QFdCId4ijeco7aRUhHyJx0Bz4waeuqgmEOMCzfcV9oyRrVb4Trzd%2BYd5LzF9rvuUMygQInKVYLwNVlJ0egWaoBeavjRZ8zEdToFQBJV8RoiGT%2FckqGqcMUgkRju8OU2bOKTURpMwMFUwx%2Fa%2Bh7ka%2BBtlyJHUmg%2BDy%2BV9ZX9nO4B8t7SG2o%2FFy5kAspoNr89%2B%2Fxu8obLsQPcy%2FJyy7jaRlposj1aTP1y8XyM1l6D73muGUlWcdCBeMdoYGEv%2F%2F01HIgeZwZKTe5yaAN5HrWE98HeNK7OOC4ks16THQE18MkYInq239w9co2AUGU8ysPDwHa0z3V%2FlJs52Ys3tDBsZmJCg4A5WQMTrW6SlOGCyrrGiVW2JRUoV5GwEML%2BR3cAGOqUB5FNdOSfZ%2BYeWfhJmWwm2a2LzJcqKK4xQtcGdxry76EP%2FLJrVGIID5HHivS4bhYAgEKEkKQxjWq0iewAKKGlObtCasz2HXR%2BlVvUqTO8mtkBGnQexlMpzENgKXYgPKFIW7fC1H3yNrfKA9K0geLeX%2FPTO%2Bgimkh3cb%2Fd4npRoP60KLADvV8IPLjcSRbu%2BB%2B7MHwoD4q%2Fr6A96ms0SdOp5b%2B7RP5f4&X-Amz-Signature=103fce8e43b886c9e097b81da0523bf4a1ba6e4522bf5a0b3400a337c7455907&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53TF4UG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFyT8OA6Ntp6%2BFzCRl9O%2FORg%2FbXlf3PgSmd6fSczkGsNAiEA1b0fpSj9Ni5mqQUfKkmrOMMBYAeZTTti2s1kiuZvgaIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDG6mo8rK15rCTFkFnSrcA64LO2HuU8zMMJGrJ%2B4wOYdet5f57Z1xBVa2wNmNa%2F7yixDif7sZ7CIQQpH8lEYphqDz9c%2BVSvPiH0dmjE3mO8vFz1VzYjnEarieK202N50fTwKu3%2B6zrbNG%2Fuzp%2FIO8n%2Bw4dxuK5zk1ADPKqDFR5q4TM0MKSZkpO%2FoTiYkNsGRL8XmSREnO4Aq0%2FMCMXtoRNqDFZaKe5k15hoJL6l6zZxaa5TPvG3xaopmBkZ%2FeuXyXKCi9qQc7F9eCbGx9lqX8ZsJ5QFdCId4ijeco7aRUhHyJx0Bz4waeuqgmEOMCzfcV9oyRrVb4Trzd%2BYd5LzF9rvuUMygQInKVYLwNVlJ0egWaoBeavjRZ8zEdToFQBJV8RoiGT%2FckqGqcMUgkRju8OU2bOKTURpMwMFUwx%2Fa%2Bh7ka%2BBtlyJHUmg%2BDy%2BV9ZX9nO4B8t7SG2o%2FFy5kAspoNr89%2B%2Fxu8obLsQPcy%2FJyy7jaRlposj1aTP1y8XyM1l6D73muGUlWcdCBeMdoYGEv%2F%2F01HIgeZwZKTe5yaAN5HrWE98HeNK7OOC4ks16THQE18MkYInq239w9co2AUGU8ysPDwHa0z3V%2FlJs52Ys3tDBsZmJCg4A5WQMTrW6SlOGCyrrGiVW2JRUoV5GwEML%2BR3cAGOqUB5FNdOSfZ%2BYeWfhJmWwm2a2LzJcqKK4xQtcGdxry76EP%2FLJrVGIID5HHivS4bhYAgEKEkKQxjWq0iewAKKGlObtCasz2HXR%2BlVvUqTO8mtkBGnQexlMpzENgKXYgPKFIW7fC1H3yNrfKA9K0geLeX%2FPTO%2Bgimkh3cb%2Fd4npRoP60KLADvV8IPLjcSRbu%2BB%2B7MHwoD4q%2Fr6A96ms0SdOp5b%2B7RP5f4&X-Amz-Signature=4c059e176a384618ec6bf57d710700580fa0f1b4e7ded0ac651cb87fbbc94ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
