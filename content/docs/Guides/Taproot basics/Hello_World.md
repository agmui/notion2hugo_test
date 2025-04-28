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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3FY7BW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcEIuKtlY0wYfb3U5SyIOrB5%2B3Lpe8czExPK5X0IDO9gIgUFbwF90yIeIk1tFetbc7fR7bD2YtghyjML0gou30qekq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD3UXC3S5T9eZgy5oircAzZBbNmJN0rQWxxbIxtw9P2OgqsTYZJzlPGejTVJsA8LUfJlEsMKihbtixokBNtuz58MQ1u9vkY8sQbgWRSvIEyMFxy7cXarZwdzp1cQeflgKDwUQc9Agmn8EWcnKNl%2Fv%2BP2It37lihRwqwlPSp89hbonTzHkOV%2BNcFOyKfgcWQNK2pTOOQFCIoA92a496%2BPseQ5JzzUQGBc93c6hoGNZ4InqhzYEEOMKSo99ROAlfvoBj2j8%2Bc2kTgPA%2BH3%2Brp3jZXRgrP98n4J3dPgWqBWCO%2BR%2FZ2BWX7TxXjLyjt9vUbukZ0gZmSUv1Cnq7whYjj4PlGdRcGHY4S5JBU6zNZ30X5Pql7Z%2FaI4ayz3TPsEjGMAShlUZZqu7EkGHTvkaC%2BAZf8Nn7x169Yku17CkIDkzOqfRfETa4wYR0ZNUqkKia%2FvYARFen%2FcBQ%2BT557NbdbRLNthH7Iivd9od0PNWFMgUWW0RQ3NpfDa1MbQkYbBmpcjPF3pYrPMH54yJ0Hqaxv5UDrDMWHViFyUrTbTVnUmjlBxHe%2BKva67YzS2tamk%2BoIgH2FjV3rUt4AuIWg1kWrUpn2f%2BM9bjB6BwJGl5NaBRKEonwRZSs8Ma%2BnqY0VzJWnQKu1fLTI7HrueAeSPMNvIvcAGOqUB9gl%2BDbXFrX2xvNJldSYJsnkK38VwevWyGKbq7vRPU5hw2Eroco9k%2BhcSqT2Y3pb2ijFuCCWku7RLe%2B1Ak1z%2F569VfB85qjS%2B1MorXGHZpXxZaE%2B8o9VdkVsNOExzJf42sENynxeaVSL5tHkpB95MiZnhT9QncvkdsHzrbooZjPHCERAr41c7SodEkyEgllnaJPqRYuNqF1jOMFCQhwU96mCqh94F&X-Amz-Signature=c55cab460cb9988ab0ae46e180b71a1903e683155962864e7a47b96f350f5c91&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3FY7BW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcEIuKtlY0wYfb3U5SyIOrB5%2B3Lpe8czExPK5X0IDO9gIgUFbwF90yIeIk1tFetbc7fR7bD2YtghyjML0gou30qekq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD3UXC3S5T9eZgy5oircAzZBbNmJN0rQWxxbIxtw9P2OgqsTYZJzlPGejTVJsA8LUfJlEsMKihbtixokBNtuz58MQ1u9vkY8sQbgWRSvIEyMFxy7cXarZwdzp1cQeflgKDwUQc9Agmn8EWcnKNl%2Fv%2BP2It37lihRwqwlPSp89hbonTzHkOV%2BNcFOyKfgcWQNK2pTOOQFCIoA92a496%2BPseQ5JzzUQGBc93c6hoGNZ4InqhzYEEOMKSo99ROAlfvoBj2j8%2Bc2kTgPA%2BH3%2Brp3jZXRgrP98n4J3dPgWqBWCO%2BR%2FZ2BWX7TxXjLyjt9vUbukZ0gZmSUv1Cnq7whYjj4PlGdRcGHY4S5JBU6zNZ30X5Pql7Z%2FaI4ayz3TPsEjGMAShlUZZqu7EkGHTvkaC%2BAZf8Nn7x169Yku17CkIDkzOqfRfETa4wYR0ZNUqkKia%2FvYARFen%2FcBQ%2BT557NbdbRLNthH7Iivd9od0PNWFMgUWW0RQ3NpfDa1MbQkYbBmpcjPF3pYrPMH54yJ0Hqaxv5UDrDMWHViFyUrTbTVnUmjlBxHe%2BKva67YzS2tamk%2BoIgH2FjV3rUt4AuIWg1kWrUpn2f%2BM9bjB6BwJGl5NaBRKEonwRZSs8Ma%2BnqY0VzJWnQKu1fLTI7HrueAeSPMNvIvcAGOqUB9gl%2BDbXFrX2xvNJldSYJsnkK38VwevWyGKbq7vRPU5hw2Eroco9k%2BhcSqT2Y3pb2ijFuCCWku7RLe%2B1Ak1z%2F569VfB85qjS%2B1MorXGHZpXxZaE%2B8o9VdkVsNOExzJf42sENynxeaVSL5tHkpB95MiZnhT9QncvkdsHzrbooZjPHCERAr41c7SodEkyEgllnaJPqRYuNqF1jOMFCQhwU96mCqh94F&X-Amz-Signature=31b8519c5ba1de907d0634644b0e438adeeb5a88af1360647e28b076bc686b97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
