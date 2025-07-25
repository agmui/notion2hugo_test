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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7C7VEX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDkqvpYnZgiA1nhbuIsiyeSSQfH5O9GXT40UHLBj47dHgIhAMDMhD8LNSVxxleNqQldYpBelhVDgE%2FDC3YW69VKwwotKv8DCEUQABoMNjM3NDIzMTgzODA1Igwce5g4Offj1zZUtIEq3ANSiC0Rnllm4B%2FebsYOSmI67w8xh28o0qLzbUjMB9brewI8sc0JV%2FML0Tvhqmw%2FGuvUmM05swXeEcNRmdPSEC4SfYXYKhwSVwbpgbmO9wjlFlhVR%2F0cNM%2Bb4auEFmnPGCDQZpaDmIvS7aVSSzStz6JTUKc7bdTfO8VqPu9U0iZ84AxJ6m%2FtmLZCLegqD7R3l8C26fUAjqRoAJOUdmEqzdG%2BzqDaFDGRHpSTy7GJ7B9KagJWTu2VrG2U1dtLDo%2BmnSKL7XjdZMYpI2dLbP7%2FO28KWNoPDDLYVMXqOdoIQBAqZL35%2Fl2dUBSD398dr2C9ZgMJQMdt%2F24MmF6WcI8O5mU4DYFYzvmBCwWWpoZLPxy%2FnmJhD8LBsy3ub5p4tvfRLIDhYCDW492epWujpi75qpwP624qUEVFFOsCd6O%2BgchimfWK%2F9KIiJexeTm5D8qkQNlr56NRA32JnC4Jc4HvZZh4m3wZwKD9RV2dOiQl471cmOpi5nPjbybpsHENsdpRcfzpzXqqdijLg5h9CrTlpu3Xvzv0S4VM%2F4pGiI87dhG0b8qYEKTWHH6tGplOeHUP4yvv0vY4N7wwAowdlt8dLTp4us5uIQRdkzSRdKa2KKmc%2BZJHJG4%2BfhyCWhWoJTCH4o3EBjqkAVfeoDuEWEiaKLuxswg7eGoqoe08bHPBicDftb9z3j7zV6FYPoSVYkJzgIk%2FXU0bs40tD1ekhgJZRgxGUzWm1xTrJK94u1TP2rcK21J7o0V%2Bpu4oi%2B%2BYP%2BQdO9c6NXtci76D3xJGnl9xOOV%2FS40hYe2UCIY%2FllPhzxWMbVPhC49U%2FTYnqXLPDvgbkQL%2B7QNekdP%2F3okShxxX%2FT3j5x8xl7aivssb&X-Amz-Signature=59c68033de5440df66a3f6c447aeeb3986ad30c414e6d05b9c53f648b086981c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7C7VEX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDkqvpYnZgiA1nhbuIsiyeSSQfH5O9GXT40UHLBj47dHgIhAMDMhD8LNSVxxleNqQldYpBelhVDgE%2FDC3YW69VKwwotKv8DCEUQABoMNjM3NDIzMTgzODA1Igwce5g4Offj1zZUtIEq3ANSiC0Rnllm4B%2FebsYOSmI67w8xh28o0qLzbUjMB9brewI8sc0JV%2FML0Tvhqmw%2FGuvUmM05swXeEcNRmdPSEC4SfYXYKhwSVwbpgbmO9wjlFlhVR%2F0cNM%2Bb4auEFmnPGCDQZpaDmIvS7aVSSzStz6JTUKc7bdTfO8VqPu9U0iZ84AxJ6m%2FtmLZCLegqD7R3l8C26fUAjqRoAJOUdmEqzdG%2BzqDaFDGRHpSTy7GJ7B9KagJWTu2VrG2U1dtLDo%2BmnSKL7XjdZMYpI2dLbP7%2FO28KWNoPDDLYVMXqOdoIQBAqZL35%2Fl2dUBSD398dr2C9ZgMJQMdt%2F24MmF6WcI8O5mU4DYFYzvmBCwWWpoZLPxy%2FnmJhD8LBsy3ub5p4tvfRLIDhYCDW492epWujpi75qpwP624qUEVFFOsCd6O%2BgchimfWK%2F9KIiJexeTm5D8qkQNlr56NRA32JnC4Jc4HvZZh4m3wZwKD9RV2dOiQl471cmOpi5nPjbybpsHENsdpRcfzpzXqqdijLg5h9CrTlpu3Xvzv0S4VM%2F4pGiI87dhG0b8qYEKTWHH6tGplOeHUP4yvv0vY4N7wwAowdlt8dLTp4us5uIQRdkzSRdKa2KKmc%2BZJHJG4%2BfhyCWhWoJTCH4o3EBjqkAVfeoDuEWEiaKLuxswg7eGoqoe08bHPBicDftb9z3j7zV6FYPoSVYkJzgIk%2FXU0bs40tD1ekhgJZRgxGUzWm1xTrJK94u1TP2rcK21J7o0V%2Bpu4oi%2B%2BYP%2BQdO9c6NXtci76D3xJGnl9xOOV%2FS40hYe2UCIY%2FllPhzxWMbVPhC49U%2FTYnqXLPDvgbkQL%2B7QNekdP%2F3okShxxX%2FT3j5x8xl7aivssb&X-Amz-Signature=9d695369a091cb33a48397d645b3b8f610bbf49ee864ef22cf51c02bc7faeb18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
