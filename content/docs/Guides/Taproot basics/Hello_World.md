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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z726I3WE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGWv7QsIw4J%2Bm7SqcgLVB8C0SmduRJ9CiS0AaLR1VB0HAiEA6WE8eK7qq7G%2FAnb3GT%2BQfxaBXAQp8RLyUukTbGLzalMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAbgOqu8HEQKVyJSVSrcAwYkON%2BvYdycz34Flrtj4OzowzLn1Um7ypBpIK1fAuN2Q2GtK4jS2t1wVfJpctCwl5txT1hkiMaEWX5qnN%2FomJUGNRr%2Fz5mozg7rpbQ%2B41Y2KOeiWPzku%2FQyfjjQQNf2s6G%2BNRVir94OUF4TaGhs98uuH5eqyn30nXLlpALynetVjx7DzfQ6Xq%2BO8gjClDYDWgcVzL5Fpns8bsX4lgRboKdiu5a%2F5XYJk8GI3HuqmCSlOQIyyb%2BNZWJwePM38yM95HUofkB5AoEt0pqjsbiLjwSzZXAwUciF3plD7q3wADkfZnqsJru9V%2BjEWkayHi88OTkUy3B%2Fep7U7%2BsHSSULHIDXr%2Fx1F1oAbbbC%2FWu1Knv7CALoZOeCrFWWSZBi4uJW2bF%2FqaJWSAbEapLpKeXij7Od9XNjlzpzmiiRt%2F0cdz4zOjEbndAlzv0su3zuB%2FtCx%2BU2jbXbn7hsCdy%2F306PB7R1F0Jr4lbeG7RUTkXDWoYrjO1iDk0Ssp9dno3x3RXlzPVwe6vCuffjUtQUogNdl30a%2BX7bVGPIxqloc2suoNfvVsfN7Y5RLyFIc9cT9yDglGVf1DeXqgjtxdZA1uVPojqSXjEHm01NYu1Vy4S4iLhJlNiIeautkiLpBufwMIjykMQGOqUBv5bWgeLOwWQU6x4gSsd0xUeft8lGS8sOGvhHYykP%2B1mZPVRmLd2vmLaCCcAYJtAuqkeVqZaQGyPbiWrpGBW5%2FaZYTxBWd1m5fFZJggXYVpc0yc7bj1zqX7fPnPf5GZDUiCzAzqUkUJcD2megc%2BzMQjLRqY%2B5nyIsSvNyym%2BHycCpHKkxOu3y4AdA3bHg5gFWhLK7c4NVt%2FMw%2FCd292aNPf66SJcw&X-Amz-Signature=e3418aacc0f608ef64d5ef0232f8ef81ae0faedec1cb14ee3ef5d1c7a97c9d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z726I3WE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGWv7QsIw4J%2Bm7SqcgLVB8C0SmduRJ9CiS0AaLR1VB0HAiEA6WE8eK7qq7G%2FAnb3GT%2BQfxaBXAQp8RLyUukTbGLzalMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAbgOqu8HEQKVyJSVSrcAwYkON%2BvYdycz34Flrtj4OzowzLn1Um7ypBpIK1fAuN2Q2GtK4jS2t1wVfJpctCwl5txT1hkiMaEWX5qnN%2FomJUGNRr%2Fz5mozg7rpbQ%2B41Y2KOeiWPzku%2FQyfjjQQNf2s6G%2BNRVir94OUF4TaGhs98uuH5eqyn30nXLlpALynetVjx7DzfQ6Xq%2BO8gjClDYDWgcVzL5Fpns8bsX4lgRboKdiu5a%2F5XYJk8GI3HuqmCSlOQIyyb%2BNZWJwePM38yM95HUofkB5AoEt0pqjsbiLjwSzZXAwUciF3plD7q3wADkfZnqsJru9V%2BjEWkayHi88OTkUy3B%2Fep7U7%2BsHSSULHIDXr%2Fx1F1oAbbbC%2FWu1Knv7CALoZOeCrFWWSZBi4uJW2bF%2FqaJWSAbEapLpKeXij7Od9XNjlzpzmiiRt%2F0cdz4zOjEbndAlzv0su3zuB%2FtCx%2BU2jbXbn7hsCdy%2F306PB7R1F0Jr4lbeG7RUTkXDWoYrjO1iDk0Ssp9dno3x3RXlzPVwe6vCuffjUtQUogNdl30a%2BX7bVGPIxqloc2suoNfvVsfN7Y5RLyFIc9cT9yDglGVf1DeXqgjtxdZA1uVPojqSXjEHm01NYu1Vy4S4iLhJlNiIeautkiLpBufwMIjykMQGOqUBv5bWgeLOwWQU6x4gSsd0xUeft8lGS8sOGvhHYykP%2B1mZPVRmLd2vmLaCCcAYJtAuqkeVqZaQGyPbiWrpGBW5%2FaZYTxBWd1m5fFZJggXYVpc0yc7bj1zqX7fPnPf5GZDUiCzAzqUkUJcD2megc%2BzMQjLRqY%2B5nyIsSvNyym%2BHycCpHKkxOu3y4AdA3bHg5gFWhLK7c4NVt%2FMw%2FCd292aNPf66SJcw&X-Amz-Signature=04e8301a716bb13358fa470f81d8115bb4716ecabd06c397d03f3a031d6e0414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
