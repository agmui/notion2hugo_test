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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBHU4T2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAc3Hryxi%2B8WX10KXVbAnt03V9Ja0HB32kzcNwiT14RSAiAJUIL3AmLJDYROm4tegzyrg%2FCIEEjeoXw4VIC3X5ukqCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8pIk0wLtqbKnbw3NKtwD4ehDrJyqPFn88euYyrdPcEChnfhoPepOf2JmMOq0bs3xRWPLV%2BDFNR0wQ4kjmBydQmts5E6wAQxpUIi25Vy7wbTQI3lhEzlDaBmKHLXDqMofaQkO9RjzJOG%2BMUh1ZMpEAyR35VuacQg%2BA0EBgaHaUosNFaMXg%2B14nbK5Fnpw6xE19tFUp5h4sjYgrqQvMD0yz43HQSWN752NTxBEK%2BTM3RE7kdmycypACb8lPN3AaGB20OuHAkLGshczuqqBj0%2BSWLxRdv51gmWp5xFMnQXZQn7ev66sZjn0AxX8LWz%2FTi%2F81qOa%2BcKbD1heIT7pYIKDDUnM3Cz9REYjSdxmdhxizJHkYUW2mSUF7kCSdxCqJ5q1xFkNireoU3LrHChIto1LaniBhTwdi6PRCP%2BkYBBTFFf37zWEB0%2FEfAOwVYM%2F3mbYTQVEEUt9%2FuoUMKq%2Bl9MqiHwYwKTnd%2FrQPRl31nHTR9I%2B43B5Mhnoqjy2sHJxoGm9sh3vPGBV9cw3GzUP2LPbVacE7ZqR0W99qtJWjXbextuFDSCYOVFhycUWM8NLoMwWbmDHqXa2Ua1zFdwSaDppccl49kmx%2Be5tm%2B6wmwATlwtSY402zmNsUZyGY8YJbPCVncwELzOS3%2B7a83Iw5bHgvwY6pgG8%2Fb357MrshfIB66wu%2F8TuDj96HUMnZ6GSMuCHwWQg17nI0bU8zTEaADPPnTeDt7A58gpq6xJegApvpqXuJDy2uykRitdaAxoFM2tqQ3ZQKB2%2BSOaC5%2FXj7%2BxmXZ8aFy7vjasQje%2FAjCgHGZgXH8JVBiK82sgQAZ0haTA50AgS9qGR7sOERIBybdJxvdlg1AoFkCLI503a0VSmi6v2It4%2F%2FamheEHR&X-Amz-Signature=9f2b2d2985af3ebc9383b87ad0cafba496af14b18834cbd88c04e24d2b1c03b1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBHU4T2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAc3Hryxi%2B8WX10KXVbAnt03V9Ja0HB32kzcNwiT14RSAiAJUIL3AmLJDYROm4tegzyrg%2FCIEEjeoXw4VIC3X5ukqCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8pIk0wLtqbKnbw3NKtwD4ehDrJyqPFn88euYyrdPcEChnfhoPepOf2JmMOq0bs3xRWPLV%2BDFNR0wQ4kjmBydQmts5E6wAQxpUIi25Vy7wbTQI3lhEzlDaBmKHLXDqMofaQkO9RjzJOG%2BMUh1ZMpEAyR35VuacQg%2BA0EBgaHaUosNFaMXg%2B14nbK5Fnpw6xE19tFUp5h4sjYgrqQvMD0yz43HQSWN752NTxBEK%2BTM3RE7kdmycypACb8lPN3AaGB20OuHAkLGshczuqqBj0%2BSWLxRdv51gmWp5xFMnQXZQn7ev66sZjn0AxX8LWz%2FTi%2F81qOa%2BcKbD1heIT7pYIKDDUnM3Cz9REYjSdxmdhxizJHkYUW2mSUF7kCSdxCqJ5q1xFkNireoU3LrHChIto1LaniBhTwdi6PRCP%2BkYBBTFFf37zWEB0%2FEfAOwVYM%2F3mbYTQVEEUt9%2FuoUMKq%2Bl9MqiHwYwKTnd%2FrQPRl31nHTR9I%2B43B5Mhnoqjy2sHJxoGm9sh3vPGBV9cw3GzUP2LPbVacE7ZqR0W99qtJWjXbextuFDSCYOVFhycUWM8NLoMwWbmDHqXa2Ua1zFdwSaDppccl49kmx%2Be5tm%2B6wmwATlwtSY402zmNsUZyGY8YJbPCVncwELzOS3%2B7a83Iw5bHgvwY6pgG8%2Fb357MrshfIB66wu%2F8TuDj96HUMnZ6GSMuCHwWQg17nI0bU8zTEaADPPnTeDt7A58gpq6xJegApvpqXuJDy2uykRitdaAxoFM2tqQ3ZQKB2%2BSOaC5%2FXj7%2BxmXZ8aFy7vjasQje%2FAjCgHGZgXH8JVBiK82sgQAZ0haTA50AgS9qGR7sOERIBybdJxvdlg1AoFkCLI503a0VSmi6v2It4%2F%2FamheEHR&X-Amz-Signature=27f0d549a2ad6fb3c29f7bdfbf2ea191c2c0fdee8b5d5df2daebbd3eaf159e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
