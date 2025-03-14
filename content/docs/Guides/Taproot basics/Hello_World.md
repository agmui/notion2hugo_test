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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644X2FR3Y%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2BW65SbvIVoRygMmmurstKbD2N7Kin4cZpyKkUatEtwIgddTiC1gLKLNGYxgh88iwbuEuYcJmBLXL8GNC1m0HiKQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5JXl87w2kmsEKMOSrcA7x6pi5EsV9oein%2BOiTsSlbse33KFI2GpSqsCYQN4Aq6w76Crj98ZZHxIjLuh30b0MvRVq8Ow%2F30x%2BAuNQu2MZfoOWXXgnEWH3uLD9wPF8%2FBhIWMBbEl%2BKg0qA4WZlcLtRvzmAPNcguqkPJvhp1GBjzMid0WEdbTaUHejKsFR96iyiF%2FeS9Ds8ed623r8Hq8TyrbpVvHGUkTHJIYdM5EDLVLTMSABQ7FaAtFayJ3BymFsPIlROnfmtVrFrsbI292on7Ez1ITc8d1D4xed%2FEhDfmk6%2BQxvneKAG%2Fb7Lerfjrdy9mWZv6goiHkMblg%2FFktk41UJSqUOPWzKW5aNw3kUT1K399gBrOgJ3DEsNheoxpdZlQNzqV%2FW48WphvSf6keIgxkBxGAa8ghoeHC3FSY1NS6sy8Ak7ccwgiBCflQPYZNOSV4HYyYm5%2Bftum7IENktd2z%2BdO1HTcxtbY5IkjTGtyIrB%2BGaUsljhTr4Wy65FwybfPekQ5DzPH47O8LLcwwL7Pggi%2B3%2B0alH3ZkE4jl1nuHzNWzhGQQm%2Bd%2FwxqjVEPAxkKfFgGfDBuu56puWcgYrdlecfIWNmkyhU9gCXXAT0w5cwBrke97YFSHJwNUPcd5b8qH3qHFBssx5LIzMJXA0b4GOqUBuH2s4Dvyv9evSgkI%2Fd4wtIfPNwNYvlrj6aAF%2FHIH%2Bxhd8QCU%2BIAMzE8leD8EqX%2FXOjy6cWIMChnzIHvqImP1riJToxOr2WBQrmp7oSVQiIGyCp8b11soN1h4YFxvJ%2BXAV5ysqUf9hzDjEjjX6JMt0BZ0N7GlIEdjovVLsSJL5mcyhSBo4XaCuM4kUDzp0TdaUDMECOxzlxhchOqc9OMz%2BbsPZPsA&X-Amz-Signature=573612cf1ae8b1e9558ce9f0e0f6d1268b68082e61da250af6d2ba486901a6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644X2FR3Y%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2BW65SbvIVoRygMmmurstKbD2N7Kin4cZpyKkUatEtwIgddTiC1gLKLNGYxgh88iwbuEuYcJmBLXL8GNC1m0HiKQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5JXl87w2kmsEKMOSrcA7x6pi5EsV9oein%2BOiTsSlbse33KFI2GpSqsCYQN4Aq6w76Crj98ZZHxIjLuh30b0MvRVq8Ow%2F30x%2BAuNQu2MZfoOWXXgnEWH3uLD9wPF8%2FBhIWMBbEl%2BKg0qA4WZlcLtRvzmAPNcguqkPJvhp1GBjzMid0WEdbTaUHejKsFR96iyiF%2FeS9Ds8ed623r8Hq8TyrbpVvHGUkTHJIYdM5EDLVLTMSABQ7FaAtFayJ3BymFsPIlROnfmtVrFrsbI292on7Ez1ITc8d1D4xed%2FEhDfmk6%2BQxvneKAG%2Fb7Lerfjrdy9mWZv6goiHkMblg%2FFktk41UJSqUOPWzKW5aNw3kUT1K399gBrOgJ3DEsNheoxpdZlQNzqV%2FW48WphvSf6keIgxkBxGAa8ghoeHC3FSY1NS6sy8Ak7ccwgiBCflQPYZNOSV4HYyYm5%2Bftum7IENktd2z%2BdO1HTcxtbY5IkjTGtyIrB%2BGaUsljhTr4Wy65FwybfPekQ5DzPH47O8LLcwwL7Pggi%2B3%2B0alH3ZkE4jl1nuHzNWzhGQQm%2Bd%2FwxqjVEPAxkKfFgGfDBuu56puWcgYrdlecfIWNmkyhU9gCXXAT0w5cwBrke97YFSHJwNUPcd5b8qH3qHFBssx5LIzMJXA0b4GOqUBuH2s4Dvyv9evSgkI%2Fd4wtIfPNwNYvlrj6aAF%2FHIH%2Bxhd8QCU%2BIAMzE8leD8EqX%2FXOjy6cWIMChnzIHvqImP1riJToxOr2WBQrmp7oSVQiIGyCp8b11soN1h4YFxvJ%2BXAV5ysqUf9hzDjEjjX6JMt0BZ0N7GlIEdjovVLsSJL5mcyhSBo4XaCuM4kUDzp0TdaUDMECOxzlxhchOqc9OMz%2BbsPZPsA&X-Amz-Signature=e0ef138ba5e7c5d5c1285d99b18745a06db5a3da6a22e68f9d8f2ef7ba87198d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
