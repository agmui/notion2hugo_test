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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3HTTLP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKlMYjdECyVvbilBNT%2B3LWP9mHi7Acltc%2BDDMlVASCQIhAP%2BruCHJrMjjEkjFisyGqK7FvYxtGCTFhRQDJ%2Bmdel%2FhKv8DCFsQABoMNjM3NDIzMTgzODA1IgxgSkz823p45QgDDdgq3AN1mvJTxdcwqdAh%2BgtLnYTbcHIbJCJDzZzxrMWjVjI9vWgSVevWas6ZBm%2F2%2F1YsLCGIm8m4zEMt66j5gjHMTbBpvDIVco3JHwUt8pETjYbuBbqOAuTT79fV6XGH%2BZZWRc6MjbJzdsw56ksqsAwCsRLYT1%2FQZBQVEjK3W5z28tCCIFAa4vTvnAqtX86WGmspAefvJX%2FDroBFnjlI8tRgTeejxCOPmw7WMrkFHnkbFqdoaN%2B5PHVhYuW7AQFd1S1J0laRgWVueJETgS%2FjRDLx7%2BUTYSPMlHqDGhAgDYBHgk4pXI4s9q3yUmQ481E5A6t931uCnd46%2FC7UtWd7HQclshNuKNESnb3CzhOwCg%2Bb7XirS4Cf0RxwXJYSajNEO%2FcBPuWHdqQMUbV6pafJKk1QXCANwVU6jmXcygebqM%2BalblJvP16%2BH2Ia3C5u0K0Gkwm7Yen7nKMhUGi8q8Fw1NlX8uzBw70QX2Gtr4JLZaC%2BUQ59iiVor4vkj9c2RKTZyfWhjHLfkxV2OeOm%2BR3dnyVyW%2FA64tUr7Jr4ktfYem9N3XRyIMwd3oSFmhNKr6KiKOHyzXw5G%2B7lSsnlPlG8Gx9uC5wbnmNrC6V33pP9qNd5MCOeFTYm6Za%2Bi%2FLbf2mPjDHvKHBBjqkASWukMWjr%2BBgt9NU1Vte8bRg9GiaMuv0L6CV9mcc9mp5gidjBQEJ8BHSLiVfGZj26QAq8aBTIN8HdOTdqboJlLbe%2FDKI7Dl19S2i%2B%2F%2B6JE4WXaLRJlZR52ZnZw4qhSUDAolw5%2BhZFwmG2A%2BMqzn63KizLxzG34SArJ9BL9Rfby4Nh4%2FJ71Kx%2FpOjmaty%2BVURsXjTijceHp2Uo703rW53I6K5Y5dI&X-Amz-Signature=50180a4d1bac324bb34c2df3d58a13952e05ff3067df8379b74e0c723f39f2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3HTTLP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuKlMYjdECyVvbilBNT%2B3LWP9mHi7Acltc%2BDDMlVASCQIhAP%2BruCHJrMjjEkjFisyGqK7FvYxtGCTFhRQDJ%2Bmdel%2FhKv8DCFsQABoMNjM3NDIzMTgzODA1IgxgSkz823p45QgDDdgq3AN1mvJTxdcwqdAh%2BgtLnYTbcHIbJCJDzZzxrMWjVjI9vWgSVevWas6ZBm%2F2%2F1YsLCGIm8m4zEMt66j5gjHMTbBpvDIVco3JHwUt8pETjYbuBbqOAuTT79fV6XGH%2BZZWRc6MjbJzdsw56ksqsAwCsRLYT1%2FQZBQVEjK3W5z28tCCIFAa4vTvnAqtX86WGmspAefvJX%2FDroBFnjlI8tRgTeejxCOPmw7WMrkFHnkbFqdoaN%2B5PHVhYuW7AQFd1S1J0laRgWVueJETgS%2FjRDLx7%2BUTYSPMlHqDGhAgDYBHgk4pXI4s9q3yUmQ481E5A6t931uCnd46%2FC7UtWd7HQclshNuKNESnb3CzhOwCg%2Bb7XirS4Cf0RxwXJYSajNEO%2FcBPuWHdqQMUbV6pafJKk1QXCANwVU6jmXcygebqM%2BalblJvP16%2BH2Ia3C5u0K0Gkwm7Yen7nKMhUGi8q8Fw1NlX8uzBw70QX2Gtr4JLZaC%2BUQ59iiVor4vkj9c2RKTZyfWhjHLfkxV2OeOm%2BR3dnyVyW%2FA64tUr7Jr4ktfYem9N3XRyIMwd3oSFmhNKr6KiKOHyzXw5G%2B7lSsnlPlG8Gx9uC5wbnmNrC6V33pP9qNd5MCOeFTYm6Za%2Bi%2FLbf2mPjDHvKHBBjqkASWukMWjr%2BBgt9NU1Vte8bRg9GiaMuv0L6CV9mcc9mp5gidjBQEJ8BHSLiVfGZj26QAq8aBTIN8HdOTdqboJlLbe%2FDKI7Dl19S2i%2B%2F%2B6JE4WXaLRJlZR52ZnZw4qhSUDAolw5%2BhZFwmG2A%2BMqzn63KizLxzG34SArJ9BL9Rfby4Nh4%2FJ71Kx%2FpOjmaty%2BVURsXjTijceHp2Uo703rW53I6K5Y5dI&X-Amz-Signature=330940ef1a41a5ed7855f5053812498406c23212c3fb2d73fe3cc00f4f839c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
