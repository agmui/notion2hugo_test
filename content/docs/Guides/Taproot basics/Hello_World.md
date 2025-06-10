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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677F5FKJ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FHZNfXVbtSe7DmHHFmM5i77yOqMghPkGs7UNWZ7%2FccAiA15Ghs0DWlCxFm6oyBJktBfeO7y08C8nmdJX3ohmzrFyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQRh2706zcgJ9M8iKtwDvrTuCXmhddHELDw%2BA1URXjr16WOcyqNfJ6AmO%2F6Q7%2ByOnmNA1Ezib%2FpBwLRAPzhB8XIFRbdd%2FENP3%2FsTry6P3IQ%2FPWdj%2FYm0leGRcw7aMTEzVc4tRJm%2Bf0iNJla%2BgqlUJBlKQOrB8NAl%2BUN9B30nnw9Q81aVhJbKFvKI7UtWqjVsk2HnjdoLwFnHC2DYrL4q1RrWhXEPiQmnZ70%2FUTpuLzI1ZS0cKH0pRr8EG9yoVspZZHqLwt7Z1n5Ux7qYTfiSqX5q5M5G2WXHY5Ncm4bRUSCfYM0HB3bAE64T18h70t5njbyYLVcTCRKWGnJOWrC%2BMVHG%2FHNG%2BoP58WjByWnZ1H6H%2BIjR1CgBW%2BYYAz50R2HrKyZElWFM5%2Fi0yxk2Td1%2BUQPXV%2BBOntrKANaAgppUMu0dSALLX%2BDb4vEB2TwjQNZCpJ0DcodQo67XSiHNCa0uPK0ZLpQF5wMA2xhu9prgP0JO2oPWHMCpv%2B7GHLBC6QYnAHzhY%2FShnfKnpefh7J86lHzg2xP1X4wCvclVMcpqKeuj2L9oMYNXDHmiDPNqERGkaoGEEbOtLLmXFOmlzlG7BNpe5A9Isnkhy%2BEPOMJp5z%2FuiMyRH93l78RD0A%2Fy6L6FRhEVLPcIoGpz8ZgwjrSfwgY6pgEI9fZ1ixSjsRVIaKiJytnhP84WfIKv6GZvSGB4qHruMRvj8zZKwJJEAiwqcleqi3T7DwxFNArNCDEVxro1nIFws01xurRQa7DiU7o4iTgmQ9vbcv7XlX03E2XVodX1O1jBNdyQ4SbYkeXxJs4QZA2NaODSFYg9BJhXcrEkoVmW%2BwgiloSjEAYBi0wDNjDmMYIlt%2BIXA5nqxQ8qxGU2lU%2B0CpfeY4ni&X-Amz-Signature=2ad7f671d6cbc15eab748872bc385025f591e634f6add09bba4117a93b2bdd47&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677F5FKJ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FHZNfXVbtSe7DmHHFmM5i77yOqMghPkGs7UNWZ7%2FccAiA15Ghs0DWlCxFm6oyBJktBfeO7y08C8nmdJX3ohmzrFyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIQRh2706zcgJ9M8iKtwDvrTuCXmhddHELDw%2BA1URXjr16WOcyqNfJ6AmO%2F6Q7%2ByOnmNA1Ezib%2FpBwLRAPzhB8XIFRbdd%2FENP3%2FsTry6P3IQ%2FPWdj%2FYm0leGRcw7aMTEzVc4tRJm%2Bf0iNJla%2BgqlUJBlKQOrB8NAl%2BUN9B30nnw9Q81aVhJbKFvKI7UtWqjVsk2HnjdoLwFnHC2DYrL4q1RrWhXEPiQmnZ70%2FUTpuLzI1ZS0cKH0pRr8EG9yoVspZZHqLwt7Z1n5Ux7qYTfiSqX5q5M5G2WXHY5Ncm4bRUSCfYM0HB3bAE64T18h70t5njbyYLVcTCRKWGnJOWrC%2BMVHG%2FHNG%2BoP58WjByWnZ1H6H%2BIjR1CgBW%2BYYAz50R2HrKyZElWFM5%2Fi0yxk2Td1%2BUQPXV%2BBOntrKANaAgppUMu0dSALLX%2BDb4vEB2TwjQNZCpJ0DcodQo67XSiHNCa0uPK0ZLpQF5wMA2xhu9prgP0JO2oPWHMCpv%2B7GHLBC6QYnAHzhY%2FShnfKnpefh7J86lHzg2xP1X4wCvclVMcpqKeuj2L9oMYNXDHmiDPNqERGkaoGEEbOtLLmXFOmlzlG7BNpe5A9Isnkhy%2BEPOMJp5z%2FuiMyRH93l78RD0A%2Fy6L6FRhEVLPcIoGpz8ZgwjrSfwgY6pgEI9fZ1ixSjsRVIaKiJytnhP84WfIKv6GZvSGB4qHruMRvj8zZKwJJEAiwqcleqi3T7DwxFNArNCDEVxro1nIFws01xurRQa7DiU7o4iTgmQ9vbcv7XlX03E2XVodX1O1jBNdyQ4SbYkeXxJs4QZA2NaODSFYg9BJhXcrEkoVmW%2BwgiloSjEAYBi0wDNjDmMYIlt%2BIXA5nqxQ8qxGU2lU%2B0CpfeY4ni&X-Amz-Signature=a159c89a04c751f75c9280d36ea0f509624c38d5fb01894b29c37680dd7217a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
