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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDT7QBBB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSpzXiykATyG2BBTZOqSrdGDBHiOxbbrnGBFQ2p75%2FwIhAPtetXdY07v%2FffuKciff3Yf1yritsFrZW5F7B41mXBp4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR7i5J2WI2ycZy9cgq3AMA82Tss6tfEahMwOao0KCJiKRd0RxC4ZiHPqGH0Pa2gzA2mpqhADUIoNS4nvPvhBlOEPWsof2HK7RdRDQH3jT800UH4xZl4PeGWbD0rrE4MjCft%2FvK0CikRv9xaIDumGkmrslJrHvNxsWNrkOI2mE6tYjtOfV5znTHVJ%2FH06w6GE8qgAJU3ItMnw0e7VRdPOFvMNXb58mrtPgdWW%2FN%2Ft2gZZ5UnvceDfjgp3MtUpo0Odtm8Oy37ZL1hRzJg0mxZTIuOdedToAgaU3OG8iuFJbcXrtNjHpaZmjsTO4JQq7zqO601wIz9oTl3hgSveOXybI0Z9NxxNemnAhTubWn6cV1QcKreUcpxWNBYw3zE85M52dPnVr8lUafggLEFAx78LIjoK7TRrqQVJwxz%2FgAC9XrdzdtXY3fDTJPFblcv0cPWV1310hvkaJmQOGmi5Y5dHN0CBlY0VbMUzQMARDOMWUZzDN%2Fjrg18ShTsCaXNWOMgrBam14EpNOhz%2BJR%2Fgzo%2BmKy4cnbfhUsgypbDgw%2FRxMq2Cmg%2FEMnq%2Fx6HFRjbDiMQXwonCMAe%2BXPFfbl84S50rZctqOPPWYXqPfJyTN82Colg1JNbe8rN2nQEAX8Cjuo3GO0zJIWRhuQrFidNzCc8IS%2FBjqkAXbyZATqv7X%2BHxLAbXFrHrhRGEGq%2FXGR%2Ftqw%2FFQb2QIf%2Fluy7nAnQ%2FvvNbSj56JFTmbcr0QoSkStKojVJLc%2BUWQpjI%2Bz%2F6aqWDRi8vvLDjK5IwiZRJHAVN5DRjPyT4yEDG4ql3ydyW4Chik6%2FhJo1wxAW2kWuqXhe8d8qUOtgOFEop3eHHH01zAX4yaWoqf2n%2Bx7i9aEiyf748shFWw4UPL47g%2Fm&X-Amz-Signature=8f1d858910993e6d2dcf1d52e8afbe8829d2f0c4ee8050744d536cad49ed4043&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDT7QBBB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSpzXiykATyG2BBTZOqSrdGDBHiOxbbrnGBFQ2p75%2FwIhAPtetXdY07v%2FffuKciff3Yf1yritsFrZW5F7B41mXBp4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR7i5J2WI2ycZy9cgq3AMA82Tss6tfEahMwOao0KCJiKRd0RxC4ZiHPqGH0Pa2gzA2mpqhADUIoNS4nvPvhBlOEPWsof2HK7RdRDQH3jT800UH4xZl4PeGWbD0rrE4MjCft%2FvK0CikRv9xaIDumGkmrslJrHvNxsWNrkOI2mE6tYjtOfV5znTHVJ%2FH06w6GE8qgAJU3ItMnw0e7VRdPOFvMNXb58mrtPgdWW%2FN%2Ft2gZZ5UnvceDfjgp3MtUpo0Odtm8Oy37ZL1hRzJg0mxZTIuOdedToAgaU3OG8iuFJbcXrtNjHpaZmjsTO4JQq7zqO601wIz9oTl3hgSveOXybI0Z9NxxNemnAhTubWn6cV1QcKreUcpxWNBYw3zE85M52dPnVr8lUafggLEFAx78LIjoK7TRrqQVJwxz%2FgAC9XrdzdtXY3fDTJPFblcv0cPWV1310hvkaJmQOGmi5Y5dHN0CBlY0VbMUzQMARDOMWUZzDN%2Fjrg18ShTsCaXNWOMgrBam14EpNOhz%2BJR%2Fgzo%2BmKy4cnbfhUsgypbDgw%2FRxMq2Cmg%2FEMnq%2Fx6HFRjbDiMQXwonCMAe%2BXPFfbl84S50rZctqOPPWYXqPfJyTN82Colg1JNbe8rN2nQEAX8Cjuo3GO0zJIWRhuQrFidNzCc8IS%2FBjqkAXbyZATqv7X%2BHxLAbXFrHrhRGEGq%2FXGR%2Ftqw%2FFQb2QIf%2Fluy7nAnQ%2FvvNbSj56JFTmbcr0QoSkStKojVJLc%2BUWQpjI%2Bz%2F6aqWDRi8vvLDjK5IwiZRJHAVN5DRjPyT4yEDG4ql3ydyW4Chik6%2FhJo1wxAW2kWuqXhe8d8qUOtgOFEop3eHHH01zAX4yaWoqf2n%2Bx7i9aEiyf748shFWw4UPL47g%2Fm&X-Amz-Signature=3d5adc1690cb675d74c1f192284982b88786220520fe0cf8f9e6274c16da7d66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
