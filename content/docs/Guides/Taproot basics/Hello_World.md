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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGICVSVS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCmHHy5%2F3nNMzEl9pK24wwf3vnNIeS78tq29s6w%2F3aYWgIhAJELlAetXhunMVnJW6CaIRG3kwzgTSbd7Llblh7QTPbcKv8DCHIQABoMNjM3NDIzMTgzODA1IgwV7BsKAm%2FpLnejCI0q3AMQ1U24CooePPUQcbu0xIYLVGgEBY8VeYbCWk%2BkHfpSp2oZgkfUl7NCq6e3i1zglzcf8YM7mnlg7Jb3RXu3UeVQepDba6raHYS1QzzuAlVgBqkE9bw8l4Aqp%2FbFnGhM8mwXSyC6GrVX1ZcL0KnGm5GYDdOYVF%2BazFSoojRL01HDhSBfz1CszXg%2BEzpShgLUgnekBVPxC0gQiVafDl%2B6vQsL3sVB2a%2B84Whh4jlDt%2FEeDRNXXCFTHgP%2FJo2vm5NoEbdLhTxBVabKepPgyJnuTqlcg6W3F40NAZKZKddo%2FLoXbLwGFYRNesLvvOvBMr2wC14s4wj%2BokWbmrAM%2BCgau5WaAXlp73h3vMkApt3qJeNXBc4EUdYBKy2Bz0184eFO3WUj0CdnoXXpm5oRdY%2Brg2pWF5BpmAiGTyEy2xDFyHhaQxwYtK6vx2wwCvHwrypHXjqAILuIbtgAnwCEPL5Y%2FIkPM6U93t0%2Fn%2BviBzWmG6ZWq9AkbGrO0b%2Fv3n%2FpXOoirYTwUJSpMhFK6hzGFXB4Zqdq2WF%2B7kVRZYDhTtZxBtfTbgKgi9LB1N9nqnT8NZaJDLuzbdn2HUQ5uoBCASw4kfexA0qjC%2BSlIAdrnRuarM9xEa8YKpmO0pnTN1%2BE0zDZ0YC%2BBjqkAS2emw%2FqYjeXMOQN13PYkKTC3B6IgqCjWmJDCEgfJPP9kD3HUjVP5n6c%2F8f58y5m8Yohg89QVFjpAshtnfHF0u4hknsIU88tFnsndsFse8JqnZLy%2BIqxdFSUHEDbt8FacJ8IVwNrlsCXdpIITxvGHH0JVSKZlz4dpwCJDvHH6bUqMp3ghSXl6bwn%2FusgqRn0JUNA1ETKXO2rrBY%2FvadxQ0ROnNio&X-Amz-Signature=1b1168553ea4e454b17c65a2f5035cdd64ad78956744acaa5fb91c69c8ce1f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGICVSVS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCmHHy5%2F3nNMzEl9pK24wwf3vnNIeS78tq29s6w%2F3aYWgIhAJELlAetXhunMVnJW6CaIRG3kwzgTSbd7Llblh7QTPbcKv8DCHIQABoMNjM3NDIzMTgzODA1IgwV7BsKAm%2FpLnejCI0q3AMQ1U24CooePPUQcbu0xIYLVGgEBY8VeYbCWk%2BkHfpSp2oZgkfUl7NCq6e3i1zglzcf8YM7mnlg7Jb3RXu3UeVQepDba6raHYS1QzzuAlVgBqkE9bw8l4Aqp%2FbFnGhM8mwXSyC6GrVX1ZcL0KnGm5GYDdOYVF%2BazFSoojRL01HDhSBfz1CszXg%2BEzpShgLUgnekBVPxC0gQiVafDl%2B6vQsL3sVB2a%2B84Whh4jlDt%2FEeDRNXXCFTHgP%2FJo2vm5NoEbdLhTxBVabKepPgyJnuTqlcg6W3F40NAZKZKddo%2FLoXbLwGFYRNesLvvOvBMr2wC14s4wj%2BokWbmrAM%2BCgau5WaAXlp73h3vMkApt3qJeNXBc4EUdYBKy2Bz0184eFO3WUj0CdnoXXpm5oRdY%2Brg2pWF5BpmAiGTyEy2xDFyHhaQxwYtK6vx2wwCvHwrypHXjqAILuIbtgAnwCEPL5Y%2FIkPM6U93t0%2Fn%2BviBzWmG6ZWq9AkbGrO0b%2Fv3n%2FpXOoirYTwUJSpMhFK6hzGFXB4Zqdq2WF%2B7kVRZYDhTtZxBtfTbgKgi9LB1N9nqnT8NZaJDLuzbdn2HUQ5uoBCASw4kfexA0qjC%2BSlIAdrnRuarM9xEa8YKpmO0pnTN1%2BE0zDZ0YC%2BBjqkAS2emw%2FqYjeXMOQN13PYkKTC3B6IgqCjWmJDCEgfJPP9kD3HUjVP5n6c%2F8f58y5m8Yohg89QVFjpAshtnfHF0u4hknsIU88tFnsndsFse8JqnZLy%2BIqxdFSUHEDbt8FacJ8IVwNrlsCXdpIITxvGHH0JVSKZlz4dpwCJDvHH6bUqMp3ghSXl6bwn%2FusgqRn0JUNA1ETKXO2rrBY%2FvadxQ0ROnNio&X-Amz-Signature=5217bdb04adb8b05c0babe1b1e606de8e0ff1e47644f6ac1f2369888eccc76d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
