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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MOBLMG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC9TcdHZmC4qeiIbqpLKLK9nbWfuQuSVS44eDNcVrRn0AIhAI1K17fH5UBsjEY%2BvFrM7TTJXTuIH8S0CANdqkSFG%2BqjKv8DCDYQABoMNjM3NDIzMTgzODA1IgyW%2BwwlMuZxqp8gH88q3AOAgJ0YFDCNqs%2Bv3BKXqumTMJknbKVD4eQ9QF%2F01iUc%2Fd4Jz%2Fv%2BJtIRegxsv8gkmAA3WxL8i8GZRJyLIaDR8dp9DeOPqqzqKLgag4ezHovHS7OA6FA3gssuugQe2%2Flcx82GYUya5mgKkEvUXu1J%2Fu%2FQB%2BOurspgqNy4qy3zcy0zAvL7e05AArfUqrJy3WRM49QRnHtqBa7NKLWMX1QyLeWMWEEW6bjtc%2B01GPv2e7ukg2OIGP5lxENFhS87VgoQVMS4WIVLRtTo557l%2BYZOyCQoJr%2FGFHQtUPKsu26Vlzmr6Ui6E%2BwySj951m63FEnYGon1c7FsV8SL4hdVcb3ft4MlYr40oJLBhdUKWs2qDOt7Ea4Yr30Vj7yZ05q9WATgon%2BkIpPLYYXSf7XAj48m6Ct9hV6pPQu3Yai%2BgBEFYo%2FRzt2Bu1jYriK6xDfFV2sSeoJrUFAgC%2FGhZOdPzj%2BUCRzuxBxqDuqbkOdOe415FvTwMI2iMEJsEZbq2i59P9e8H34utaexq%2F8xn3zqM2iwiIoIXY2EWPom5kByPYz1jQAxoCoI4XIMhpCNjETrK5qGlW5RBQXb5q8O2oHtKGDxYLbYPf0%2FsA19a3MGt9ggvOib2r7mmgekrmawCkVaJjD60b69BjqkAekW%2FjqrNoBLxwefOJCUzAICblR3MycNcyk%2F9uSrxsfYpsOw9rdkvIstD1aBOgyFHvKLbqisZWfBeqv1Ia9wCqkE1k0tSe8%2FqOWgz8f7JLcJgPB0%2BXOoCMRAsLDf7WZOnvR4dtTUP%2FAqMDraKhuZfHHM%2F2vpkMVbgrUjU4AijRmEIWwqHW225txI2NOQRIzrp6Q6HAyHab7v6yJ1tvrZ7bj%2FJe6V&X-Amz-Signature=ac87041f84ce06e59bc4220164c9adea65eebc65113bc43ce7adc5901805684a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MOBLMG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC9TcdHZmC4qeiIbqpLKLK9nbWfuQuSVS44eDNcVrRn0AIhAI1K17fH5UBsjEY%2BvFrM7TTJXTuIH8S0CANdqkSFG%2BqjKv8DCDYQABoMNjM3NDIzMTgzODA1IgyW%2BwwlMuZxqp8gH88q3AOAgJ0YFDCNqs%2Bv3BKXqumTMJknbKVD4eQ9QF%2F01iUc%2Fd4Jz%2Fv%2BJtIRegxsv8gkmAA3WxL8i8GZRJyLIaDR8dp9DeOPqqzqKLgag4ezHovHS7OA6FA3gssuugQe2%2Flcx82GYUya5mgKkEvUXu1J%2Fu%2FQB%2BOurspgqNy4qy3zcy0zAvL7e05AArfUqrJy3WRM49QRnHtqBa7NKLWMX1QyLeWMWEEW6bjtc%2B01GPv2e7ukg2OIGP5lxENFhS87VgoQVMS4WIVLRtTo557l%2BYZOyCQoJr%2FGFHQtUPKsu26Vlzmr6Ui6E%2BwySj951m63FEnYGon1c7FsV8SL4hdVcb3ft4MlYr40oJLBhdUKWs2qDOt7Ea4Yr30Vj7yZ05q9WATgon%2BkIpPLYYXSf7XAj48m6Ct9hV6pPQu3Yai%2BgBEFYo%2FRzt2Bu1jYriK6xDfFV2sSeoJrUFAgC%2FGhZOdPzj%2BUCRzuxBxqDuqbkOdOe415FvTwMI2iMEJsEZbq2i59P9e8H34utaexq%2F8xn3zqM2iwiIoIXY2EWPom5kByPYz1jQAxoCoI4XIMhpCNjETrK5qGlW5RBQXb5q8O2oHtKGDxYLbYPf0%2FsA19a3MGt9ggvOib2r7mmgekrmawCkVaJjD60b69BjqkAekW%2FjqrNoBLxwefOJCUzAICblR3MycNcyk%2F9uSrxsfYpsOw9rdkvIstD1aBOgyFHvKLbqisZWfBeqv1Ia9wCqkE1k0tSe8%2FqOWgz8f7JLcJgPB0%2BXOoCMRAsLDf7WZOnvR4dtTUP%2FAqMDraKhuZfHHM%2F2vpkMVbgrUjU4AijRmEIWwqHW225txI2NOQRIzrp6Q6HAyHab7v6yJ1tvrZ7bj%2FJe6V&X-Amz-Signature=aae14551b7da740cade8ef2dc9bd2a16bb886dc8fa9b7d15a266daeea4a51245&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
