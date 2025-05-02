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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAGX4XI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDu8FIIMxqQftkHagF1p%2FttkDddHG9wvKI%2FUhupsJTV0wIgQGN2sEELMalGN6tAcV0V%2FppIJwRJWVwdF4mGQ%2F1tUI8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM%2Boy9FVwaagu0bpSrcA5pJ9joc0vRHRXyOHYGuBTq4dJZ62IrqFWGbKLomXVz27hNAhJHpvG6NBCu%2B8aoNC99BRwF1xLUA6AdeJ4MLxnrvUrVc9TCcsEM2MfdfvGLxGqzJcoXPHIPUAA7a1ipdXyhnnt%2F%2FOS1bOweEzSDUkaGfQfkWVn1s%2FJ%2BIr8gLor6fsMU3TtoQK3Avzjey%2BIHbOWGaBV8hl17%2B4woc5sw9ZShuOM4CQ%2BrXHV7ktbnVgv6xf3jsOPNfOA6wPVoHuwlZVVHnBZ3Aekoid5PauEjUynQsBdM7BjkvdVZIMpZocaK0DkJZ8idXuXMeAZcrmH7DKr00%2FI7fXYYyuOTfw0CBaZnH0sZhs8FlVX%2B1o6BW%2B7E6TpTaRbNKhNnwaFdKxEYo8%2BQe4zeHKDLtS8q%2F7y%2BPA7MSaE4pW55T7YzW2FCuUIkZ3BmVcURG%2BOW1q4%2B6oEtbA7QLqh%2BTQinwM5B1n4evW7WTzN6qSH67jwsvSwFlivXN21GNFhYgL0yMkA%2BRiAmzaNQlUtEWAt5EV7JT6xWKEFb1g9%2BO7m726MAX8Z%2BrA92R%2Bgkstd6wfiZA5EGzcvaDCSDU3FtdC2ENCEPi622121nMInefNXeqi%2FsAajSlJICxnPWD2sjHcCOcMyXFMJqp0sAGOqUBF3ndD%2B0zypBFXMjHyXEsOGW1OLlUgwOAFSMtX06h4Da7MfASiBSXcZ2RIt19wm%2FvAF5H51BiyWJ2sywHQH9WzycGfuNzAZsg%2BMuoCfwCwSqQvelZeC19%2FQmGtI6%2BvjvUIF2k15yZ3CBvofj2boVhDy2VNAxXYcVYGDub89M6idKizFXxSXGcD3oHg8OS9j4PRGUhndER7T5B577cA8J7T4Utx2L6&X-Amz-Signature=06cd45e7c49d8a8187ea8f5603aabb476d3eaa8f1b80ac513e4b5b0f345b2424&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAGX4XI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDu8FIIMxqQftkHagF1p%2FttkDddHG9wvKI%2FUhupsJTV0wIgQGN2sEELMalGN6tAcV0V%2FppIJwRJWVwdF4mGQ%2F1tUI8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM%2Boy9FVwaagu0bpSrcA5pJ9joc0vRHRXyOHYGuBTq4dJZ62IrqFWGbKLomXVz27hNAhJHpvG6NBCu%2B8aoNC99BRwF1xLUA6AdeJ4MLxnrvUrVc9TCcsEM2MfdfvGLxGqzJcoXPHIPUAA7a1ipdXyhnnt%2F%2FOS1bOweEzSDUkaGfQfkWVn1s%2FJ%2BIr8gLor6fsMU3TtoQK3Avzjey%2BIHbOWGaBV8hl17%2B4woc5sw9ZShuOM4CQ%2BrXHV7ktbnVgv6xf3jsOPNfOA6wPVoHuwlZVVHnBZ3Aekoid5PauEjUynQsBdM7BjkvdVZIMpZocaK0DkJZ8idXuXMeAZcrmH7DKr00%2FI7fXYYyuOTfw0CBaZnH0sZhs8FlVX%2B1o6BW%2B7E6TpTaRbNKhNnwaFdKxEYo8%2BQe4zeHKDLtS8q%2F7y%2BPA7MSaE4pW55T7YzW2FCuUIkZ3BmVcURG%2BOW1q4%2B6oEtbA7QLqh%2BTQinwM5B1n4evW7WTzN6qSH67jwsvSwFlivXN21GNFhYgL0yMkA%2BRiAmzaNQlUtEWAt5EV7JT6xWKEFb1g9%2BO7m726MAX8Z%2BrA92R%2Bgkstd6wfiZA5EGzcvaDCSDU3FtdC2ENCEPi622121nMInefNXeqi%2FsAajSlJICxnPWD2sjHcCOcMyXFMJqp0sAGOqUBF3ndD%2B0zypBFXMjHyXEsOGW1OLlUgwOAFSMtX06h4Da7MfASiBSXcZ2RIt19wm%2FvAF5H51BiyWJ2sywHQH9WzycGfuNzAZsg%2BMuoCfwCwSqQvelZeC19%2FQmGtI6%2BvjvUIF2k15yZ3CBvofj2boVhDy2VNAxXYcVYGDub89M6idKizFXxSXGcD3oHg8OS9j4PRGUhndER7T5B577cA8J7T4Utx2L6&X-Amz-Signature=97f2f1991e5c0d2314554077f3b05f2a678ae06fb9bc1e12a89436950f0ca63d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
