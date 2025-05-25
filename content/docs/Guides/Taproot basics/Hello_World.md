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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQWY2J3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCLUHYjxu%2BgOkYIeDidZnUFBlhERQ8mNil%2BXtwzqAQjDgIhAKBV1YX1UvDRNi%2BAsCxgUqXUdqQvs%2BmNjbzPB9CEDqSWKv8DCCQQABoMNjM3NDIzMTgzODA1Igw17lVKaMkqbD4SpCMq3AMTa21U8SKcXbEZ3f09iwMBhm57uHY8%2BEXfOuO6dBCyC9zG%2FXhVMHQx2LFgRLJ7miZLo7NHpO5HyaA9QPOEQT%2BYTSTG2wHJY4uQkS7EZx7OdAPlLbWrfPK4h6v0yjLL0Z0j7fr5NjjrhXzo0eCEiWV%2B6Sj3Uk1gfqS3ByM0gFC8DpamHrtlC4q7QHiUIiivMX8ZOVlZXt4pF8FUg1hB5RI8FeQ1PIh1HXyfIWnIzO3BvEQhHZi57XNQnPikfOmImp6ysIDZVlK17dIsveHFXiRINcN6Oqon1vmpCyMV8VUEe1j1cEon9iCuMjV5S94Vzff3nXMhvxgObrJhrJVYbcegwOyNbxi3R2uT6JZcg495c9zMJwRlAjHoUmf3ToLot2stjy4297HkpMa1SLO0i1WeCP1P1YwDn1oU9t7TE0FsDUvhHGHA3wSfP%2FmklUpSEx3IwsxBAWSdVU%2Fbn%2FHlHEjK57cg48b7Y6wJrHpXkRXN86bNtqTSYMRJjpbd%2Fa2DOgOy0w%2FId%2F%2F1bP3PGGiv1KJBSx7gZrEIRYrG%2BJDZRVZoc9ExO%2BVXlSwScRPRiZdNJ5j8VGtfbavpSSSfXKCRdyWUqiwQxVK03wsTI2qWDmnRA1aY1MHdUnEJ6HS1rzDTmMrBBjqkAdpzVKH%2FXl2Wa4YduATdJmHe2BoDdlB2jd49PnMmPIjALZHNuXgcGXm3FuUYIvwMTTSLAlVoke3pESdaNXcjMOVt03IXcPtum%2BtULWODbGVSaRaUq9rdvs5OD312Fd0lT6yuyi%2BEfAdrlv2DOGqfXfIeqI34WQ5C2TziKcUCNlqO2cI%2BNAvuKsfmjwaG%2BjSHua7YP3RZz3mHEncwVI5tXDn7rf3g&X-Amz-Signature=098ceefe5c6968d6194d39c9113d3ee065a49134d817f15b6af25688b9ca2bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQWY2J3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCLUHYjxu%2BgOkYIeDidZnUFBlhERQ8mNil%2BXtwzqAQjDgIhAKBV1YX1UvDRNi%2BAsCxgUqXUdqQvs%2BmNjbzPB9CEDqSWKv8DCCQQABoMNjM3NDIzMTgzODA1Igw17lVKaMkqbD4SpCMq3AMTa21U8SKcXbEZ3f09iwMBhm57uHY8%2BEXfOuO6dBCyC9zG%2FXhVMHQx2LFgRLJ7miZLo7NHpO5HyaA9QPOEQT%2BYTSTG2wHJY4uQkS7EZx7OdAPlLbWrfPK4h6v0yjLL0Z0j7fr5NjjrhXzo0eCEiWV%2B6Sj3Uk1gfqS3ByM0gFC8DpamHrtlC4q7QHiUIiivMX8ZOVlZXt4pF8FUg1hB5RI8FeQ1PIh1HXyfIWnIzO3BvEQhHZi57XNQnPikfOmImp6ysIDZVlK17dIsveHFXiRINcN6Oqon1vmpCyMV8VUEe1j1cEon9iCuMjV5S94Vzff3nXMhvxgObrJhrJVYbcegwOyNbxi3R2uT6JZcg495c9zMJwRlAjHoUmf3ToLot2stjy4297HkpMa1SLO0i1WeCP1P1YwDn1oU9t7TE0FsDUvhHGHA3wSfP%2FmklUpSEx3IwsxBAWSdVU%2Fbn%2FHlHEjK57cg48b7Y6wJrHpXkRXN86bNtqTSYMRJjpbd%2Fa2DOgOy0w%2FId%2F%2F1bP3PGGiv1KJBSx7gZrEIRYrG%2BJDZRVZoc9ExO%2BVXlSwScRPRiZdNJ5j8VGtfbavpSSSfXKCRdyWUqiwQxVK03wsTI2qWDmnRA1aY1MHdUnEJ6HS1rzDTmMrBBjqkAdpzVKH%2FXl2Wa4YduATdJmHe2BoDdlB2jd49PnMmPIjALZHNuXgcGXm3FuUYIvwMTTSLAlVoke3pESdaNXcjMOVt03IXcPtum%2BtULWODbGVSaRaUq9rdvs5OD312Fd0lT6yuyi%2BEfAdrlv2DOGqfXfIeqI34WQ5C2TziKcUCNlqO2cI%2BNAvuKsfmjwaG%2BjSHua7YP3RZz3mHEncwVI5tXDn7rf3g&X-Amz-Signature=b6325f85e0c3eea0d2549d3336dc078086b887d1dfe5bf99f1970cec90e28583&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
