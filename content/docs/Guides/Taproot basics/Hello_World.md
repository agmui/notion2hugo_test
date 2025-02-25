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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPY6SNL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDobmX%2Fhm%2FDB3PflXWwmsvcwyduBy3RvtmyFdFKcVmilQIhAJX%2FrM%2BSm%2BGfMVAdpdLB53hoer%2FPiFFbE4E1AzUMqtASKv8DCEcQABoMNjM3NDIzMTgzODA1Igx1aXxApzHG8pZtk5Mq3AM14o4NZZ0Hti854EyNhy5PDI7UOxFMRysDP3%2BYyuQ7r5w8zmjCKQBibTXcz7zQETu92iuL%2BhTGP4VL%2BU4R6bNc46j6RSs07lN6xnrpSUCaLNA4LjHbQCSmdnfVkjwuORKqAZsPFYXogOdml78%2Fx5md%2BZbX%2BYr1IWmTM6b1F3s0IG8I3oaxi%2FuG64RMoIGavMrfMj6ADRohnhEDi1g2%2FjFizxTiHJzH5%2BxuHdgnspvN9ZIWGU08d5WLOjaugfUMtVvmYDouSSB1B3vPFkZf1skvq6J3mqGerzIhoxZpN7cxIzxzp%2BI%2B%2BdfG1fvOTSimzgetcVUga6Rui7EF5qC2T4utAviYTBr4LEqtyO2qLXdV1nUKLih68%2BL4VMryryiUhKm8SePOJ6Ksa4Y90r4Kj9fo2aF3ktCzw%2FUPcXnAme2uSJFUEkMQ%2BI7o%2Fg1W8KjJ5EswwOwSGvd%2BcsCV7EvgQs3YZwt0jmK4CDXmQey09D%2FowET8xdujtw0IkdRC2wl%2BrlkxKMUieu3yYzHSox9iqfqq5QZ2nWrKOjGuOXCabF7he2Roy5N0ZeSwQOxHkliZim0RkDg%2FHvbK4esxPlZ8eiRQR94c3yPcnzuGzEAMrKichBMH34Wsf3UR5NL1eDDFl%2Fe9BjqkAZUR9miW61HD9qCATJXiR0AHthqHYLSfZ1%2Fx8PcnwM2VWDDVQLOy6bO0bQ2sMUW4SqeaMj0EnwfhCgmto50UI8sWbHF%2BNBzgskXrRYXoMiGdF7%2FWHRGIscsQKnb4lH6Udy5SeueYIAiIQyuAUsjbvCuMjIafsUVRHLrALEB38Rh5pRRPiz3hV1XTP3EGsbA9ZCw5wFoPuSUxMWs9MOnl4%2FpjvtKl&X-Amz-Signature=87317c0f7e4d524fcac5d68d426d61cf6338c78d201c6b529faaf8778237e1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPY6SNL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDobmX%2Fhm%2FDB3PflXWwmsvcwyduBy3RvtmyFdFKcVmilQIhAJX%2FrM%2BSm%2BGfMVAdpdLB53hoer%2FPiFFbE4E1AzUMqtASKv8DCEcQABoMNjM3NDIzMTgzODA1Igx1aXxApzHG8pZtk5Mq3AM14o4NZZ0Hti854EyNhy5PDI7UOxFMRysDP3%2BYyuQ7r5w8zmjCKQBibTXcz7zQETu92iuL%2BhTGP4VL%2BU4R6bNc46j6RSs07lN6xnrpSUCaLNA4LjHbQCSmdnfVkjwuORKqAZsPFYXogOdml78%2Fx5md%2BZbX%2BYr1IWmTM6b1F3s0IG8I3oaxi%2FuG64RMoIGavMrfMj6ADRohnhEDi1g2%2FjFizxTiHJzH5%2BxuHdgnspvN9ZIWGU08d5WLOjaugfUMtVvmYDouSSB1B3vPFkZf1skvq6J3mqGerzIhoxZpN7cxIzxzp%2BI%2B%2BdfG1fvOTSimzgetcVUga6Rui7EF5qC2T4utAviYTBr4LEqtyO2qLXdV1nUKLih68%2BL4VMryryiUhKm8SePOJ6Ksa4Y90r4Kj9fo2aF3ktCzw%2FUPcXnAme2uSJFUEkMQ%2BI7o%2Fg1W8KjJ5EswwOwSGvd%2BcsCV7EvgQs3YZwt0jmK4CDXmQey09D%2FowET8xdujtw0IkdRC2wl%2BrlkxKMUieu3yYzHSox9iqfqq5QZ2nWrKOjGuOXCabF7he2Roy5N0ZeSwQOxHkliZim0RkDg%2FHvbK4esxPlZ8eiRQR94c3yPcnzuGzEAMrKichBMH34Wsf3UR5NL1eDDFl%2Fe9BjqkAZUR9miW61HD9qCATJXiR0AHthqHYLSfZ1%2Fx8PcnwM2VWDDVQLOy6bO0bQ2sMUW4SqeaMj0EnwfhCgmto50UI8sWbHF%2BNBzgskXrRYXoMiGdF7%2FWHRGIscsQKnb4lH6Udy5SeueYIAiIQyuAUsjbvCuMjIafsUVRHLrALEB38Rh5pRRPiz3hV1XTP3EGsbA9ZCw5wFoPuSUxMWs9MOnl4%2FpjvtKl&X-Amz-Signature=e07430ca06bc11f65188afd73efb6615a7ef798458d2ce58e3fe6dd0cba02b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
