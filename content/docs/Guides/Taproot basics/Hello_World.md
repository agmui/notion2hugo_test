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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OV3RR5W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP7xdub68JzRZElm%2FoJnXkRgXIXt0F67wqcPo22fY5dAiEAvKdbj7ea5MWUdpPvq3VQdYBhw8KwB1e7igf6NgwzmhYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKowNTQeeHPIhS7gTCrcA7lsljN9e9Lo6R5eAzLwzhjrMeQ41yl9jVE6EDOYkJSyjpCMeeUa3ZKRNRPxd6D3dXbgcHKDphmStyXTXGt%2B4aWoq5r1YC5bTjOtNb%2FhYD9nvavBYH5P7BOeuAJ6R%2BrwMVarKUYsb4Qo4Xo2Bc6EWB8ktDSDJo1mJJdgT3vhq6g0rzQxNElFHnfWk1ZArNZeruojJLhHINdUAOyynZYU7l9U6mP%2FF%2Fo9bNluyvQU179pTYdsEtiCH%2F7Nj5XPnpaq%2F%2FcR7AE0vMHatY9LgIA6oeP9ReLySWm8fdDdkCByc%2F0aa0muEfJVY9I3CSBczpsLDf8%2BJPO3BfkZZg4Ak6YPkyNdnWguWE7Vkzk8tv7LGp%2FFsKA1EOroO7%2B1Jdd0d04lshErcTl9xWJ0AcE8YUbK4qv5XbDiVFyxhwcSetHxleUtWtHpt78XVgcJVR0CeBy4tvYw%2BOszovMXCOovywuN3Y8bLZF%2B%2BJxwLChwCDAfQI4nL1%2B4rWVB7TtO2xKYaOEs1FH4TOgVIq5BJAI%2FEYWfBbDlSdSLpIRboTq97Ri6ZtoQzn0KM%2BQRtGEiWhSPQJLDxs1h3lIyjuuBeTwCVCpRrJrk22iuq7PyGwTsFdz15aWWmyp1aX4Fq%2BuIQF%2BEMP3F3MEGOqUBMNyVhqYO0%2FE2P61hbMZllaIs2soLkjvTYtEFiYD651q1uvD92UnD6kMzn67j88j%2FcFCiX4oaYkeZs0plLujFZfqUah56HZ7b9GTUAZqlAvohVRCXMVvK8zB0VJmpHKiJ6nCjLurkOqTrThWUcuRKXZIxP4ZjGBa1dlPZCVMsQR3sFm%2F32O4SqFke8D3FjShbMTYI210GNLu7EToOgCJrOr861XBN&X-Amz-Signature=e8d62b9a057658dbfe161ef738ab5c2ab2f3be1d8b0d2da5ce4bdf9523349567&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OV3RR5W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP7xdub68JzRZElm%2FoJnXkRgXIXt0F67wqcPo22fY5dAiEAvKdbj7ea5MWUdpPvq3VQdYBhw8KwB1e7igf6NgwzmhYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKowNTQeeHPIhS7gTCrcA7lsljN9e9Lo6R5eAzLwzhjrMeQ41yl9jVE6EDOYkJSyjpCMeeUa3ZKRNRPxd6D3dXbgcHKDphmStyXTXGt%2B4aWoq5r1YC5bTjOtNb%2FhYD9nvavBYH5P7BOeuAJ6R%2BrwMVarKUYsb4Qo4Xo2Bc6EWB8ktDSDJo1mJJdgT3vhq6g0rzQxNElFHnfWk1ZArNZeruojJLhHINdUAOyynZYU7l9U6mP%2FF%2Fo9bNluyvQU179pTYdsEtiCH%2F7Nj5XPnpaq%2F%2FcR7AE0vMHatY9LgIA6oeP9ReLySWm8fdDdkCByc%2F0aa0muEfJVY9I3CSBczpsLDf8%2BJPO3BfkZZg4Ak6YPkyNdnWguWE7Vkzk8tv7LGp%2FFsKA1EOroO7%2B1Jdd0d04lshErcTl9xWJ0AcE8YUbK4qv5XbDiVFyxhwcSetHxleUtWtHpt78XVgcJVR0CeBy4tvYw%2BOszovMXCOovywuN3Y8bLZF%2B%2BJxwLChwCDAfQI4nL1%2B4rWVB7TtO2xKYaOEs1FH4TOgVIq5BJAI%2FEYWfBbDlSdSLpIRboTq97Ri6ZtoQzn0KM%2BQRtGEiWhSPQJLDxs1h3lIyjuuBeTwCVCpRrJrk22iuq7PyGwTsFdz15aWWmyp1aX4Fq%2BuIQF%2BEMP3F3MEGOqUBMNyVhqYO0%2FE2P61hbMZllaIs2soLkjvTYtEFiYD651q1uvD92UnD6kMzn67j88j%2FcFCiX4oaYkeZs0plLujFZfqUah56HZ7b9GTUAZqlAvohVRCXMVvK8zB0VJmpHKiJ6nCjLurkOqTrThWUcuRKXZIxP4ZjGBa1dlPZCVMsQR3sFm%2F32O4SqFke8D3FjShbMTYI210GNLu7EToOgCJrOr861XBN&X-Amz-Signature=29b64f63df647b795085982110128a671a5a8d2f0316a58c66bfed280d644529&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
