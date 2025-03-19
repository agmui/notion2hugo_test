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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE55YNOY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCkQ0u9B9q0weosgg82cDPI758FLWhZG%2BFxXZGgdIkPwAIgKwSYZaV8BbSe5zydD52O03KWtp3%2FWGtyjy9DR%2B55IJMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMSE%2B0rmB9SEmrUj2yrcA4T8BLEYwOdoMKHnaUoqzz6hxqRPvzYU3a1itIq4Lqbn%2BtYXN29QaKx7Y1wJVehH811dy%2FoEWnbABkQCIB1V2CJ9i6s4w5S4l%2FrzshpFsS17webhs5YjmHebA6zCa5MFlXbRrLWezb1ApQDX1KRr%2Bm9vFpErIm%2F2rRA7j%2BbBQ71%2Bgo9yEkquG8mRGkvz%2FNO9%2F5R1amIo1n45VBplHHJZTs7WVRlxIcKm4Y2GYd2CneDri%2FgoJw239zZFlAfbbgXJUgq0%2FvYV0VJkWBQdhz8uGd3jzzg0AYP%2FJm%2Fwk5ckuJxWTbGIH4dXK6O2Jc2lBpi%2BLn%2BeJ5bF1pW2e0zyG2XWlh9MEryezoCeJQ4Iwqh1nwOPBVwlrQAagmwlwbsu767YhgujGyY8Fpe8ijrqhU43FdvZrBMqGH5H5%2Fonqhvm23O%2BmtDSQxI59AqhzSgYmK4NW2j0%2BQhu6SFVsB4t8Ki%2ByH9sMTFf%2FjXbAbPTb8fTJkTLG5U5T3Ix62oaSLUp1eZ2A5E1192gWtv6kiggXngpthLJtl9lEDS96hq%2Fi6LFXQSNU1WUdPtTuUTa3SbmseAOETyPpVgYXg4sOB1NfiDBrrVGqX%2BFs1kCEGbGI764Biys9f2dbcWPi0OJAQqyMOb%2B6L4GOqUBMh94%2BnMjEQSYZK39quw2O%2FuvWpebJZCTiW30x6f0%2F9Yhdi4hgboKEdVaH%2B%2FvSLbNPkIclh433FWbf8iKQtmZCl9SKSU%2FR9W5rrRhq3SRQfI2QTWy92oaxz%2FdvY3uEqXX6JfvfSDu%2BGDNxyZRFpPB3sDU8tSnFmjfjjzCq9gwaI3%2BHtJIGlBbP8Jz%2Bgds%2FNwG7o6ElvdemKBIge4rYIXuZLE5I94e&X-Amz-Signature=a68653d68489e6cfb474c8ee81cf07228247adf6d37aec8471f52f0afba22dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE55YNOY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCkQ0u9B9q0weosgg82cDPI758FLWhZG%2BFxXZGgdIkPwAIgKwSYZaV8BbSe5zydD52O03KWtp3%2FWGtyjy9DR%2B55IJMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMSE%2B0rmB9SEmrUj2yrcA4T8BLEYwOdoMKHnaUoqzz6hxqRPvzYU3a1itIq4Lqbn%2BtYXN29QaKx7Y1wJVehH811dy%2FoEWnbABkQCIB1V2CJ9i6s4w5S4l%2FrzshpFsS17webhs5YjmHebA6zCa5MFlXbRrLWezb1ApQDX1KRr%2Bm9vFpErIm%2F2rRA7j%2BbBQ71%2Bgo9yEkquG8mRGkvz%2FNO9%2F5R1amIo1n45VBplHHJZTs7WVRlxIcKm4Y2GYd2CneDri%2FgoJw239zZFlAfbbgXJUgq0%2FvYV0VJkWBQdhz8uGd3jzzg0AYP%2FJm%2Fwk5ckuJxWTbGIH4dXK6O2Jc2lBpi%2BLn%2BeJ5bF1pW2e0zyG2XWlh9MEryezoCeJQ4Iwqh1nwOPBVwlrQAagmwlwbsu767YhgujGyY8Fpe8ijrqhU43FdvZrBMqGH5H5%2Fonqhvm23O%2BmtDSQxI59AqhzSgYmK4NW2j0%2BQhu6SFVsB4t8Ki%2ByH9sMTFf%2FjXbAbPTb8fTJkTLG5U5T3Ix62oaSLUp1eZ2A5E1192gWtv6kiggXngpthLJtl9lEDS96hq%2Fi6LFXQSNU1WUdPtTuUTa3SbmseAOETyPpVgYXg4sOB1NfiDBrrVGqX%2BFs1kCEGbGI764Biys9f2dbcWPi0OJAQqyMOb%2B6L4GOqUBMh94%2BnMjEQSYZK39quw2O%2FuvWpebJZCTiW30x6f0%2F9Yhdi4hgboKEdVaH%2B%2FvSLbNPkIclh433FWbf8iKQtmZCl9SKSU%2FR9W5rrRhq3SRQfI2QTWy92oaxz%2FdvY3uEqXX6JfvfSDu%2BGDNxyZRFpPB3sDU8tSnFmjfjjzCq9gwaI3%2BHtJIGlBbP8Jz%2Bgds%2FNwG7o6ElvdemKBIge4rYIXuZLE5I94e&X-Amz-Signature=369006ccae5b671292f12489656550895fa5b090abae11f267020de733accb30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
