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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44LTD5U%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDXyKvFa55ZjenZQImr5vL%2F2pxJGwWdN6LRmkYPH6tAkAiEAyeNEAvP8P7%2FX30KYff3PveyrHn1ZN2uptK3TZ8mVzMoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvQPb8Ov%2FU5Itd1eyrcA4P8%2F715vMhWjFIDZzdmYT1qB%2BQI88dIdMyiOpD1fl7DGOOGN2%2BTyAguT%2BueNc4SecC63C5v4tZVLy9WynE2KwNPAUp%2BBSXi7R69P1FFQZM0DlkKHzceiFMvKCVD%2FPIzXR%2Fpuq7PRcoV8kTkYcYzp5loPYTyJ%2BgqgyxdScn7yAQt6FnZXVi%2FW%2F2wQ7gyoxMIWOYqMYN8ZS7i1w0GcUwe7q%2BJu9%2Bi%2FL0lzsovu6AS%2BJKUVIULQrS8%2BbACzI46trERAiGPIptOgkGs2wToPNRhfEx28022HZo6UbBKZ6NC0lOr9t1yUw3OQ13jdK5ce11a7LVMFOu2c4HViXwHBsi3sjvOnoaFwP1m2r1oNCjrTQKzGR%2FGg1KDpXleqHra6EQkINxjbrIsDGdSuddlwgo0aAaGGU3rQvp26jcN81gtoaWnwFBFfFQyBeHFusufVw48I6RwaobCvNBXtzAmLDJTntbtz5K0o6HyNdaUAL09sekhGjMaQzI1T8vNq97ZcWoJwQBQ6tdJJmxMVeqi6otYJB79TRJGYX1xYL3zmhVb6h%2BhTnO%2FjamEvV6S4GwSrVjSKiTp%2FhODyJbCSnXwnUbjHtQnKUOr2AT%2FALYP%2F8gH1A77rLr2W4NOrRSz%2BODYMKGkksAGOqUBdlvTaumZjuxuCipKtv4l5Jf2eOnX9ztObpitIQoghUypwSQY6k%2BPMmeUjimd70MkC3DcYJKHBHoqsEwU6LdZ%2FTN0lOqIQGVO26Qj4x2uWJrd3dXSQgFM%2B5q%2BOp8gsMPGVwVdCS1iIT3bGrfgCqgS8%2FFjJMxU5Vlb%2BNb%2BwvhdE3E29cxrM0%2Be%2Fsm7snEJ%2FZg%2BwM%2FE0bci%2Fmis8h99xcmjUECOeUlD&X-Amz-Signature=ff5cfcdab49922628f738a18dd73137dc05ea7e9f0a0a01f2dc219b25949e373&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44LTD5U%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDXyKvFa55ZjenZQImr5vL%2F2pxJGwWdN6LRmkYPH6tAkAiEAyeNEAvP8P7%2FX30KYff3PveyrHn1ZN2uptK3TZ8mVzMoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvQPb8Ov%2FU5Itd1eyrcA4P8%2F715vMhWjFIDZzdmYT1qB%2BQI88dIdMyiOpD1fl7DGOOGN2%2BTyAguT%2BueNc4SecC63C5v4tZVLy9WynE2KwNPAUp%2BBSXi7R69P1FFQZM0DlkKHzceiFMvKCVD%2FPIzXR%2Fpuq7PRcoV8kTkYcYzp5loPYTyJ%2BgqgyxdScn7yAQt6FnZXVi%2FW%2F2wQ7gyoxMIWOYqMYN8ZS7i1w0GcUwe7q%2BJu9%2Bi%2FL0lzsovu6AS%2BJKUVIULQrS8%2BbACzI46trERAiGPIptOgkGs2wToPNRhfEx28022HZo6UbBKZ6NC0lOr9t1yUw3OQ13jdK5ce11a7LVMFOu2c4HViXwHBsi3sjvOnoaFwP1m2r1oNCjrTQKzGR%2FGg1KDpXleqHra6EQkINxjbrIsDGdSuddlwgo0aAaGGU3rQvp26jcN81gtoaWnwFBFfFQyBeHFusufVw48I6RwaobCvNBXtzAmLDJTntbtz5K0o6HyNdaUAL09sekhGjMaQzI1T8vNq97ZcWoJwQBQ6tdJJmxMVeqi6otYJB79TRJGYX1xYL3zmhVb6h%2BhTnO%2FjamEvV6S4GwSrVjSKiTp%2FhODyJbCSnXwnUbjHtQnKUOr2AT%2FALYP%2F8gH1A77rLr2W4NOrRSz%2BODYMKGkksAGOqUBdlvTaumZjuxuCipKtv4l5Jf2eOnX9ztObpitIQoghUypwSQY6k%2BPMmeUjimd70MkC3DcYJKHBHoqsEwU6LdZ%2FTN0lOqIQGVO26Qj4x2uWJrd3dXSQgFM%2B5q%2BOp8gsMPGVwVdCS1iIT3bGrfgCqgS8%2FFjJMxU5Vlb%2BNb%2BwvhdE3E29cxrM0%2Be%2Fsm7snEJ%2FZg%2BwM%2FE0bci%2Fmis8h99xcmjUECOeUlD&X-Amz-Signature=994e6c583a5cc7400654449df4b98e4a5bb5e15d506ac9b8fcfed2eca0b6df2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
