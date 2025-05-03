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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GTMRET%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAmsRwRkvf%2BuunDlQOcA73sACq2wS0qOMue7s6pZ0ZQeAiAdI8ivg9k8TAMl37EPgHHLblJGoEfGO9DbvWn9L5zdMCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2B9Xmu7np7WIsnCMKtwDcCROJpuo%2Boxw%2F5xSSwSuG4ZG0i36HG8BFIa6xCONSvbb0Mr4MzG%2FpI0N0xbkn4oW6A1DiUVHMQHmco3eohIkwKTOWmsjZx3McwIfxl7IE%2FxR8bD1Kxg1b42fTHjUakdtO7kRfbThGTTC48%2B6%2By9WaheRbq%2BxCRFI76U9ji39ndn7q%2FCitHVl%2B1RKQfopjKM0TRSgF0RfiVoEVvokMGGM0kdTLprhpHNDTm53KYbe9eOzx2umLyFZVYalsFRy7qOmYMLv9Av5yguZYNrgKl8i8jS1g3u2ShwW0uSCy4WeQyUw9TQO8fr0ucE6OZrn6blTLfAy8CzQvovvon8ORXtaiNa9xSQdhIr%2Bn6scRXLOeI1FtrkPL6hPztkCdC4UHppjQ0g03XiF1lV%2BvGLzj4Iq37vgdXvZUIKHj9VIwE8%2BCbLFMTr7REKy7oJAso7n6POJ70nG3mwNAT6wLQ%2F7DzamYmq5F5VZCZ2lnzlwkuj8fVIQJNpqDxYSpHVGdgZrY4hZiNf4jvBODblelKgdZgKutoV4XY5z%2Fw6BBqxs9%2BheRDqaGPSQfaMOlCQ37rdWeQtuyDh2uHxzxq2iMTMoSSEMyWNgyCqmzhTBSfSNU0924s4w0QnGyrEkRxUBwMkwy6rZwAY6pgFHlQYqROxqYdlFA0%2Fsz1elIH297hv5vMd3eSVY3bD2LjAvQUdnlPNhm%2FRbtt4vqtTKSMKVRJ8xENBShKiILE3vW7%2Fd5ddADc80NJRiXcDIhWtnbvogRg8bUo5UYicZDV25qH6JUUEVuV2ARBxbH2h8bpDOlaJEhzb81%2FEDSIm0HQVhs%2BSp%2FtYPauJpFXAU3wquA2qmFDVjZOa6bfawj6aKmPdUSnAf&X-Amz-Signature=03e978ea76eeb1ed81e48f9758dffb213c6be9210e4e3e1738948d0384a90fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GTMRET%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAmsRwRkvf%2BuunDlQOcA73sACq2wS0qOMue7s6pZ0ZQeAiAdI8ivg9k8TAMl37EPgHHLblJGoEfGO9DbvWn9L5zdMCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2B9Xmu7np7WIsnCMKtwDcCROJpuo%2Boxw%2F5xSSwSuG4ZG0i36HG8BFIa6xCONSvbb0Mr4MzG%2FpI0N0xbkn4oW6A1DiUVHMQHmco3eohIkwKTOWmsjZx3McwIfxl7IE%2FxR8bD1Kxg1b42fTHjUakdtO7kRfbThGTTC48%2B6%2By9WaheRbq%2BxCRFI76U9ji39ndn7q%2FCitHVl%2B1RKQfopjKM0TRSgF0RfiVoEVvokMGGM0kdTLprhpHNDTm53KYbe9eOzx2umLyFZVYalsFRy7qOmYMLv9Av5yguZYNrgKl8i8jS1g3u2ShwW0uSCy4WeQyUw9TQO8fr0ucE6OZrn6blTLfAy8CzQvovvon8ORXtaiNa9xSQdhIr%2Bn6scRXLOeI1FtrkPL6hPztkCdC4UHppjQ0g03XiF1lV%2BvGLzj4Iq37vgdXvZUIKHj9VIwE8%2BCbLFMTr7REKy7oJAso7n6POJ70nG3mwNAT6wLQ%2F7DzamYmq5F5VZCZ2lnzlwkuj8fVIQJNpqDxYSpHVGdgZrY4hZiNf4jvBODblelKgdZgKutoV4XY5z%2Fw6BBqxs9%2BheRDqaGPSQfaMOlCQ37rdWeQtuyDh2uHxzxq2iMTMoSSEMyWNgyCqmzhTBSfSNU0924s4w0QnGyrEkRxUBwMkwy6rZwAY6pgFHlQYqROxqYdlFA0%2Fsz1elIH297hv5vMd3eSVY3bD2LjAvQUdnlPNhm%2FRbtt4vqtTKSMKVRJ8xENBShKiILE3vW7%2Fd5ddADc80NJRiXcDIhWtnbvogRg8bUo5UYicZDV25qH6JUUEVuV2ARBxbH2h8bpDOlaJEhzb81%2FEDSIm0HQVhs%2BSp%2FtYPauJpFXAU3wquA2qmFDVjZOa6bfawj6aKmPdUSnAf&X-Amz-Signature=e5b4e8d362de3d8a62989b68e910cbc2f7cdefc2b783eff55a6c2cdf99a32189&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
