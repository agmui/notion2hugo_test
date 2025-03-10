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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJ5EHWD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2Fjq1AJh0JIFrnceLl2uFyKqFt4iXTqSNt%2BkC9YBcplAIgR5M7dyjIXj1UBA3cojVRDFr7nS0Vga0T1o9zjOkEahMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxKCzVSYUQRcxH9yyrcA4kDi47xGCGBXot%2B6nJfCHk8l4kGf06Ikj4XcEeEmIcrurSBcZL3wsdXdeMTOseKv8ebTSlCWnYaLu886%2B0Iq82Oor%2BmmwZ0SntsBrPx7Qn9zUOcHsQ8dbZZJDCc6oIbjdDKRHysfZ%2B6Zr1tCOSzTmb3bZGkljudLXdksJQoG47xBpQYsUPZ731cqTFK%2BcVG%2FI4vf%2F9bawuE6BFkw%2F8rHJ%2FpBcXTMoS%2FY9j1904%2F9y1N1%2F2iNL%2FYTeOY1Qxg9WAzQ%2Fo5mJchxekwDiPFQtmQuB4fPBI2TkdfO6BZJSTIvVcMzYaIB%2BvighKOhpMFhU%2B4S9NzAvByqHbt4QTBRBhh%2BWnTz%2F0lQrP0P%2FIw8BJhh7RCcD%2Btx0%2FH7AT8RZdNWiJFNxeHTxzLR%2FUJyOIQyYE4K4dUl54nEiRdiWUh18xsOeUmaspaUeazPBc1BVsBZT3Q7vVlWlnQSeKpv3TjQFIyFlSqhuzpzmo80c98O0UZUWIdwcwXVLHgLs16kfMsY6%2F1wJOzWHbv5s5UJ4KgpRqMm%2F2N%2B7M1krhXvv3Q0cCoUnEvw4FuDuePB5cCfNuwvaAvH0plK4iTrgjGwYmh7VulJtxOGRrfQJ9YAe3%2Fsp2vmaEj4HvC3ZWt6luy4ikWML3Lvb4GOqUBU0RIRZSlP463A8408kIPprRv3fC6%2FoYCnGzpK5hSdcerlXAhekjTGFS5%2Fm04Pn0LYPUd98RVWtVQgdZs454yb8HVVnxTcFlI4Fih4zFlU5wspNT2ZI8%2F4%2B9qQ7CNmVM91b%2FA8a0%2BtyP44PtI%2FugbgLoA4Ga%2FI7zpqyvE9niMhua921G4CTkMMKf7eYESac0KF49mTPnbuMy4kHfjWrKOKd4xgaKa&X-Amz-Signature=6c9d60c7e678f8102fba2c19112507ef60beae2accafae249d094ab0de6f49db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJ5EHWD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2Fjq1AJh0JIFrnceLl2uFyKqFt4iXTqSNt%2BkC9YBcplAIgR5M7dyjIXj1UBA3cojVRDFr7nS0Vga0T1o9zjOkEahMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxKCzVSYUQRcxH9yyrcA4kDi47xGCGBXot%2B6nJfCHk8l4kGf06Ikj4XcEeEmIcrurSBcZL3wsdXdeMTOseKv8ebTSlCWnYaLu886%2B0Iq82Oor%2BmmwZ0SntsBrPx7Qn9zUOcHsQ8dbZZJDCc6oIbjdDKRHysfZ%2B6Zr1tCOSzTmb3bZGkljudLXdksJQoG47xBpQYsUPZ731cqTFK%2BcVG%2FI4vf%2F9bawuE6BFkw%2F8rHJ%2FpBcXTMoS%2FY9j1904%2F9y1N1%2F2iNL%2FYTeOY1Qxg9WAzQ%2Fo5mJchxekwDiPFQtmQuB4fPBI2TkdfO6BZJSTIvVcMzYaIB%2BvighKOhpMFhU%2B4S9NzAvByqHbt4QTBRBhh%2BWnTz%2F0lQrP0P%2FIw8BJhh7RCcD%2Btx0%2FH7AT8RZdNWiJFNxeHTxzLR%2FUJyOIQyYE4K4dUl54nEiRdiWUh18xsOeUmaspaUeazPBc1BVsBZT3Q7vVlWlnQSeKpv3TjQFIyFlSqhuzpzmo80c98O0UZUWIdwcwXVLHgLs16kfMsY6%2F1wJOzWHbv5s5UJ4KgpRqMm%2F2N%2B7M1krhXvv3Q0cCoUnEvw4FuDuePB5cCfNuwvaAvH0plK4iTrgjGwYmh7VulJtxOGRrfQJ9YAe3%2Fsp2vmaEj4HvC3ZWt6luy4ikWML3Lvb4GOqUBU0RIRZSlP463A8408kIPprRv3fC6%2FoYCnGzpK5hSdcerlXAhekjTGFS5%2Fm04Pn0LYPUd98RVWtVQgdZs454yb8HVVnxTcFlI4Fih4zFlU5wspNT2ZI8%2F4%2B9qQ7CNmVM91b%2FA8a0%2BtyP44PtI%2FugbgLoA4Ga%2FI7zpqyvE9niMhua921G4CTkMMKf7eYESac0KF49mTPnbuMy4kHfjWrKOKd4xgaKa&X-Amz-Signature=4fdfa7f7b4ef00575eb06f3db41e40e86b3ccddea010fa7627e31fb6076c568c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
