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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPTVF5C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsiHpaehxd4Nefw2vfJZHronNaif6MAkcod4I6UzZDAIhAL8kqJlVG%2FPA%2FrCQ6FD1lVinTfmcK6R57dqDBkXcbWriKv8DCCsQABoMNjM3NDIzMTgzODA1Igxod5yDsp3WmgNCDMQq3AN6h3g3JCVRsSfH4%2F%2Fe7c1FA3XYrq23ADzyetezGpyGw6rbta1V8AiRS2JWjXdp8KRYo3puTPE8zV2SbYUwfIOid%2FD7iGBciR4ztVITHnIYYkxml%2FrVSfGgbwV8P4VxxMwH5uRhMKfNvvY1ZXsBFtQsN%2Bbfw%2FUZCWNyT4A1NiFpLeOG6ps19cW6L9fB9ter9k2Wp%2BjM2%2FMpP0PWTMuz2gOCbACQiTwH%2F%2BORH4xCCYvmcKnRbCV2jWzE8K7HgjOcuxqqfdothp9GDCGsSww1n3WomvxxeQvh7qKCVAQgqx23dhuQ54Nl1UM8LUCcW2owWIbdtQPK2lZFrCOLA7vT8bLvpjh28nlZAXY7HdCbks60UYGSv0Y62x3hoUQBetSV6HsiwPqYT68%2FH8O8xNiuC2w6%2BxtkL0ZgRPpZ1jrSTcUT1%2BhtppExEzm8JA22pz8q8uTAx3utDNRg1x9dK14yMfRdeHeqwplBPDyTr%2F%2BwIerPYFAGwS%2BHsAAAN%2BaVIcLvq7uURyJfSraAo90FFmZQP6Br11rYbrycjdBBm%2FKbfGizqL9i1JxRC6DvwP6T0RRktKsMxAYtRMCI7meY41r9zbeNWXh0VLFM2YzmWVdScPUvzfWKB59T0u2WbDBNiTCSl%2BLABjqkAZKFJhWMr5k02akO5OOfmArHiaFVNsjzaeqMMtnbM1hhG7vdW8Eiithl7XVmM%2F1FTM4J3ewWZcZeSL1XNZ3R0lRNwaMfQrAJoIE7D55aNIgblmpye%2B5ef36PvgtZUBkvsqwv0iV7V3lT9v%2Foyfbtlm05utljRKhnLadj%2FhcY6YU8R1GMCppkWNn5OyTTC72VKVjmMIha6GmMs5HjMZlGHREXnI5O&X-Amz-Signature=6c6b86572b2c6bb4940fece3eedc42b8b1ab6847a7a4035073c1031e38c25182&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPTVF5C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsiHpaehxd4Nefw2vfJZHronNaif6MAkcod4I6UzZDAIhAL8kqJlVG%2FPA%2FrCQ6FD1lVinTfmcK6R57dqDBkXcbWriKv8DCCsQABoMNjM3NDIzMTgzODA1Igxod5yDsp3WmgNCDMQq3AN6h3g3JCVRsSfH4%2F%2Fe7c1FA3XYrq23ADzyetezGpyGw6rbta1V8AiRS2JWjXdp8KRYo3puTPE8zV2SbYUwfIOid%2FD7iGBciR4ztVITHnIYYkxml%2FrVSfGgbwV8P4VxxMwH5uRhMKfNvvY1ZXsBFtQsN%2Bbfw%2FUZCWNyT4A1NiFpLeOG6ps19cW6L9fB9ter9k2Wp%2BjM2%2FMpP0PWTMuz2gOCbACQiTwH%2F%2BORH4xCCYvmcKnRbCV2jWzE8K7HgjOcuxqqfdothp9GDCGsSww1n3WomvxxeQvh7qKCVAQgqx23dhuQ54Nl1UM8LUCcW2owWIbdtQPK2lZFrCOLA7vT8bLvpjh28nlZAXY7HdCbks60UYGSv0Y62x3hoUQBetSV6HsiwPqYT68%2FH8O8xNiuC2w6%2BxtkL0ZgRPpZ1jrSTcUT1%2BhtppExEzm8JA22pz8q8uTAx3utDNRg1x9dK14yMfRdeHeqwplBPDyTr%2F%2BwIerPYFAGwS%2BHsAAAN%2BaVIcLvq7uURyJfSraAo90FFmZQP6Br11rYbrycjdBBm%2FKbfGizqL9i1JxRC6DvwP6T0RRktKsMxAYtRMCI7meY41r9zbeNWXh0VLFM2YzmWVdScPUvzfWKB59T0u2WbDBNiTCSl%2BLABjqkAZKFJhWMr5k02akO5OOfmArHiaFVNsjzaeqMMtnbM1hhG7vdW8Eiithl7XVmM%2F1FTM4J3ewWZcZeSL1XNZ3R0lRNwaMfQrAJoIE7D55aNIgblmpye%2B5ef36PvgtZUBkvsqwv0iV7V3lT9v%2Foyfbtlm05utljRKhnLadj%2FhcY6YU8R1GMCppkWNn5OyTTC72VKVjmMIha6GmMs5HjMZlGHREXnI5O&X-Amz-Signature=a4409572e02afcf08703e721ca93eb0c4267dfbc3854601e400dcf2df7c2a60a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
