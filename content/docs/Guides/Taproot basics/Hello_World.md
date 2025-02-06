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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53LIGMA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIA57I2wU2GWFwZZCD4lV4ghE75tnclMHl5%2BkAkPISe3OAiEAzPXJG1hJBRQP%2Bg2Ley%2F5aH42zszx9sLO5%2Fy%2FdzzmMkEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDENsi2rgXEqrNvarzCrcA8H0LQzEclprMIuI7OF9AZ9QvQOFNhBRd53ctJ%2FU5rC4j752oyfFJWrkbDvDPT6FcUNdy36WjdP0uhBYM%2BiO6omUpDXsGby%2FtQ3dq8cYXaSWYaoBcUwiv%2BUOfjJ59FA0P1Y01984hG4sMuW6eSIxqP1Axm9Oz5gzX9VeujKCZ4JWaSXNY%2Bk4V4GMUWIWyXgyw93vRCGOq2NlD8p5sJBegUTGpC%2BGtNNa0TUbs0vFtYzulP9Nb4U1Pci2V8ZRY90kCghiJaOPLXzFZSQsl%2BIblUEFx6GZuPArtwL9Sk8i0a%2FoVPFPJO7aDzQVSLrM26fxUk47pTaMXIkG8RHj%2BWpj8hzLaAABeMKg8F40C%2FIehwOjrRsV5EJXkCEIY4UeVj3rGUiS6gqZlRIokIsOvu38bV8AyM%2F8yhECbMEse6YDCfZge1r7br8YKiLT8weXEnd4oiuRzqhVNJ%2Fg7ioMQVztudehkMiKqrv%2FAQM7kPyhnXPs6T0y%2FUnJAy%2B5t7Onr3x5awjIHTGV%2F9%2BegfiFreTFOyDLkFDqJR0UGANTrt5wQiHheWWZiPnO0Nb4k9hg0TIOkI3AGIuPNja6AAlQfPOh406k24jDex9XQPSNJ7r4nZ7Cie7uwr%2BYgDi8U6gnMNSek70GOqUBuxRxWmt4GU0KDYrsLia9EtJYN81kqpn2i7msTOFX5CwTPOlPFd2xJLcZnOW4qF2N%2BP2MnnRMWGaCu4u9W4E6ApIzb4XNfL1I%2FT0IB76tU8QR7nnCYbadcRhduMBgmmyb67lArSL3LwVk5ikJGKc7wdDUepS4StkFLU4pwUM1UsHnuvLVloyXHWygIHtYae1WF5ERqa3pju7QzfUEcXiIah0RSIjt&X-Amz-Signature=a3550d7d549c74ed896e857dd38e429d108cab91865c9864819f29b9e8a03411&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53LIGMA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIA57I2wU2GWFwZZCD4lV4ghE75tnclMHl5%2BkAkPISe3OAiEAzPXJG1hJBRQP%2Bg2Ley%2F5aH42zszx9sLO5%2Fy%2FdzzmMkEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDENsi2rgXEqrNvarzCrcA8H0LQzEclprMIuI7OF9AZ9QvQOFNhBRd53ctJ%2FU5rC4j752oyfFJWrkbDvDPT6FcUNdy36WjdP0uhBYM%2BiO6omUpDXsGby%2FtQ3dq8cYXaSWYaoBcUwiv%2BUOfjJ59FA0P1Y01984hG4sMuW6eSIxqP1Axm9Oz5gzX9VeujKCZ4JWaSXNY%2Bk4V4GMUWIWyXgyw93vRCGOq2NlD8p5sJBegUTGpC%2BGtNNa0TUbs0vFtYzulP9Nb4U1Pci2V8ZRY90kCghiJaOPLXzFZSQsl%2BIblUEFx6GZuPArtwL9Sk8i0a%2FoVPFPJO7aDzQVSLrM26fxUk47pTaMXIkG8RHj%2BWpj8hzLaAABeMKg8F40C%2FIehwOjrRsV5EJXkCEIY4UeVj3rGUiS6gqZlRIokIsOvu38bV8AyM%2F8yhECbMEse6YDCfZge1r7br8YKiLT8weXEnd4oiuRzqhVNJ%2Fg7ioMQVztudehkMiKqrv%2FAQM7kPyhnXPs6T0y%2FUnJAy%2B5t7Onr3x5awjIHTGV%2F9%2BegfiFreTFOyDLkFDqJR0UGANTrt5wQiHheWWZiPnO0Nb4k9hg0TIOkI3AGIuPNja6AAlQfPOh406k24jDex9XQPSNJ7r4nZ7Cie7uwr%2BYgDi8U6gnMNSek70GOqUBuxRxWmt4GU0KDYrsLia9EtJYN81kqpn2i7msTOFX5CwTPOlPFd2xJLcZnOW4qF2N%2BP2MnnRMWGaCu4u9W4E6ApIzb4XNfL1I%2FT0IB76tU8QR7nnCYbadcRhduMBgmmyb67lArSL3LwVk5ikJGKc7wdDUepS4StkFLU4pwUM1UsHnuvLVloyXHWygIHtYae1WF5ERqa3pju7QzfUEcXiIah0RSIjt&X-Amz-Signature=160b94f914d9fe41a46af97b23bcfefd9717bfdb05d0e3496154c08df72cd077&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
