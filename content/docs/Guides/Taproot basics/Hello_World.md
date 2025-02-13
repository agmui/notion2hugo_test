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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSL2UAQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0pc6oC%2F6sFJ72sPDHOQ4O7xIMIfZ9HMwwEqgoZKSkGgIgbCpnoz1OfxxsNXNQYY6mxGLrduATR%2FyJ28P0T448RmEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKB0XbiauNHQC0MtvSrcA6%2Fj5CpR0882Akgq7kETvIwV6ixa8fhhoytMXlI155xXGQOq%2FYB9aW5bQhZnlfAYGgGHF4B4e1Mi7czNDV3Gjo6yiaZHvvH1xiXrCn51SYkKnOeCDoyGIzjXaZiFOUat3nfGYCG7%2FT0ub2KbEfAP2aIlRybT5VlX1Y33tHFsZgwwImSy6Brrq5OfALX39ou04zbpWvrrtXEPH%2BndHA0lsxC9%2Bhjti6qCbpmW71EMy4q6oxQR1BX2osxqaRqKqjIFsR9Q%2F%2FW0YgyjJUQB2NMIfbnxTIBI0gfVdqI0kAg0hT0ls%2BI1QG%2BHvIq%2FVFOhaeaO%2BWL%2BVNBsx%2B8Vb6t3VDMLF2RDKLgRx%2FKBeF3gjPRvovztt7wRREJLBEhjGaWyQFV74CzQHU9LYOorQ%2B7NnhaZDIM2wXp3DgINuBBg44Gff6KyPIkRVZFC3sSGkUKcPzdfWYEF9fCCAak7L15V1v0Ke0Tn2ZdYLRWAXcDWZxNW2IrQKwidfvBC%2BpWkkDqlps5Jy3DIIQjWI3zHpowlZfuK6E0V2F8YRTpF5H%2FRBt7CopIL3YM7hI1PgdZxpwcYTJtr3FRpnqA8k55ApMjJJTdwZL1zMCEpWzPQPa9ACky6RCbCX9GzK1CvdCEcyldRMKvet70GOqUBftucEto5UCxqyponrM15ShfTy7251MPNsUXFr%2FOsKe6YX%2BezJmOTU7BA0fE36h2LSKZQIFKyMHREDgfw9lJDyEwAqxNcrJFdXO6%2Bpk6eKWjbr1VQ9lYVwMuvE5z12a8ckbEjkZWJ9pSzB%2FoVLtmKpEiXR76VpEwE65MP6F5ZNpyVCP8Tv4B1SnSWip72TUPpSI6mYQw6Z3cP%2BcXBDANZOZzl4nKD&X-Amz-Signature=30bec264d36afe1eea9449c6f4a1f90d2cdf52a52b759624fcba2ff9582b637c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSL2UAQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0pc6oC%2F6sFJ72sPDHOQ4O7xIMIfZ9HMwwEqgoZKSkGgIgbCpnoz1OfxxsNXNQYY6mxGLrduATR%2FyJ28P0T448RmEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKB0XbiauNHQC0MtvSrcA6%2Fj5CpR0882Akgq7kETvIwV6ixa8fhhoytMXlI155xXGQOq%2FYB9aW5bQhZnlfAYGgGHF4B4e1Mi7czNDV3Gjo6yiaZHvvH1xiXrCn51SYkKnOeCDoyGIzjXaZiFOUat3nfGYCG7%2FT0ub2KbEfAP2aIlRybT5VlX1Y33tHFsZgwwImSy6Brrq5OfALX39ou04zbpWvrrtXEPH%2BndHA0lsxC9%2Bhjti6qCbpmW71EMy4q6oxQR1BX2osxqaRqKqjIFsR9Q%2F%2FW0YgyjJUQB2NMIfbnxTIBI0gfVdqI0kAg0hT0ls%2BI1QG%2BHvIq%2FVFOhaeaO%2BWL%2BVNBsx%2B8Vb6t3VDMLF2RDKLgRx%2FKBeF3gjPRvovztt7wRREJLBEhjGaWyQFV74CzQHU9LYOorQ%2B7NnhaZDIM2wXp3DgINuBBg44Gff6KyPIkRVZFC3sSGkUKcPzdfWYEF9fCCAak7L15V1v0Ke0Tn2ZdYLRWAXcDWZxNW2IrQKwidfvBC%2BpWkkDqlps5Jy3DIIQjWI3zHpowlZfuK6E0V2F8YRTpF5H%2FRBt7CopIL3YM7hI1PgdZxpwcYTJtr3FRpnqA8k55ApMjJJTdwZL1zMCEpWzPQPa9ACky6RCbCX9GzK1CvdCEcyldRMKvet70GOqUBftucEto5UCxqyponrM15ShfTy7251MPNsUXFr%2FOsKe6YX%2BezJmOTU7BA0fE36h2LSKZQIFKyMHREDgfw9lJDyEwAqxNcrJFdXO6%2Bpk6eKWjbr1VQ9lYVwMuvE5z12a8ckbEjkZWJ9pSzB%2FoVLtmKpEiXR76VpEwE65MP6F5ZNpyVCP8Tv4B1SnSWip72TUPpSI6mYQw6Z3cP%2BcXBDANZOZzl4nKD&X-Amz-Signature=52e24405b84c7c7d2a57743b240753775f64a37491eb89391837b6c31dc005fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
