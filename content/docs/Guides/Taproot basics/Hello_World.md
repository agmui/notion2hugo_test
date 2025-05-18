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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YO5BRTX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9o2B%2BvOEciLa3cmqkbQARHPpVRo0UMcFBZYI3B%2FspgAiBaxvOFuR4VrxXON3uIAm12wDdNrR6y4idvPV9aYUc7rSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOOJUlmdQ9GgM8ch6KtwDd6xuLqHU%2BDBrM8n%2FKPVfhkkjbUyPqa%2BvaHbEufcng%2FdNXzZTBUZTQ%2BI7H6Q0pB7bGuKeSycZsFrwSOCy7t6wSZQixf%2BSiBvlP2GMHEAU1XANAdw3lznthOWFC%2FIbdr2yPlKh9GUDve1izeh3Ul3P%2FrlDrqrUc31DdY2CgkEowNt2IcR780nArw7yAl7FJIPzm9aYho45f8APwEPcVj%2BMICOKtdW9wNfqqtPtCK%2Bh%2FI%2BSTJoRLE1lZCS40JieOsBszL2M0CLol7NX39CoUqrhR8bqSat9M1DXbnguXLj7S1h2vQXAogU5rgajJY%2FNYXJBU%2Ft0pLysu4f0Lb0Tc0ojB634QKXkpdedWY6BMGFjaN41j1E2F6qXnKCzRpwvjdG%2BD2hP0ujXoJO6gY%2BjAZ%2BjtO%2FVYsIHDqL09SlvNzcMCtkJoBUrRGa9X7A3G4bdIpjhf6f3EYARDhwBGVwsqHy24g%2F8Z3rinW7PM2o2SiospcbTu0M8wZz3QODQ2ZhRMC%2BBsf%2FHPts4bX3oJ7UI3rdzwiEczjy7Wt%2BGJ3slQSr5OVlJPqHWzez8M%2BgdGgfhvuX0i9cKGJ%2F2hmkwI11AjCdJhJyC3nNx2NNpQC1KeoGJvgm6DwRPKbWsyV0Mg40wguimwQY6pgE0M8EQ%2BQOSIGmHpvvmrEE9%2B%2BJ0pNrcVSZuTJ0dLhTtwV9MHIko%2BtwXZKI2oAjR2dPstkyhDiR27f86ZnwI%2FqzYYXwNimu%2Fz3%2ByVxvQ3DeHl6xbg1ytOARIaClSKhbXDmVMkwxTQKoKHwduGgMkQBEYAhEjrTqra1cvZrpf0x5NGAJ3EufMKShnmwWJ9yTc7GXNTr8KAUKhz8U3GJrZ96MqsHad16Vo&X-Amz-Signature=243e01e16da4ca5fef557683c5f1009fbe0aebfa82b214ebb35f5c43beccae2f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YO5BRTX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9o2B%2BvOEciLa3cmqkbQARHPpVRo0UMcFBZYI3B%2FspgAiBaxvOFuR4VrxXON3uIAm12wDdNrR6y4idvPV9aYUc7rSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOOJUlmdQ9GgM8ch6KtwDd6xuLqHU%2BDBrM8n%2FKPVfhkkjbUyPqa%2BvaHbEufcng%2FdNXzZTBUZTQ%2BI7H6Q0pB7bGuKeSycZsFrwSOCy7t6wSZQixf%2BSiBvlP2GMHEAU1XANAdw3lznthOWFC%2FIbdr2yPlKh9GUDve1izeh3Ul3P%2FrlDrqrUc31DdY2CgkEowNt2IcR780nArw7yAl7FJIPzm9aYho45f8APwEPcVj%2BMICOKtdW9wNfqqtPtCK%2Bh%2FI%2BSTJoRLE1lZCS40JieOsBszL2M0CLol7NX39CoUqrhR8bqSat9M1DXbnguXLj7S1h2vQXAogU5rgajJY%2FNYXJBU%2Ft0pLysu4f0Lb0Tc0ojB634QKXkpdedWY6BMGFjaN41j1E2F6qXnKCzRpwvjdG%2BD2hP0ujXoJO6gY%2BjAZ%2BjtO%2FVYsIHDqL09SlvNzcMCtkJoBUrRGa9X7A3G4bdIpjhf6f3EYARDhwBGVwsqHy24g%2F8Z3rinW7PM2o2SiospcbTu0M8wZz3QODQ2ZhRMC%2BBsf%2FHPts4bX3oJ7UI3rdzwiEczjy7Wt%2BGJ3slQSr5OVlJPqHWzez8M%2BgdGgfhvuX0i9cKGJ%2F2hmkwI11AjCdJhJyC3nNx2NNpQC1KeoGJvgm6DwRPKbWsyV0Mg40wguimwQY6pgE0M8EQ%2BQOSIGmHpvvmrEE9%2B%2BJ0pNrcVSZuTJ0dLhTtwV9MHIko%2BtwXZKI2oAjR2dPstkyhDiR27f86ZnwI%2FqzYYXwNimu%2Fz3%2ByVxvQ3DeHl6xbg1ytOARIaClSKhbXDmVMkwxTQKoKHwduGgMkQBEYAhEjrTqra1cvZrpf0x5NGAJ3EufMKShnmwWJ9yTc7GXNTr8KAUKhz8U3GJrZ96MqsHad16Vo&X-Amz-Signature=89c2fe1a90bf76ad4d2b5e0c7555f9355a25ca2190e632c96a2b72b68c69d148&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
