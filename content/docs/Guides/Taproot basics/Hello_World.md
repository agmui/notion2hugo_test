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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4SU4OP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBj47L%2F4ldViUTmL62dUI9QSou%2BzmxHaxFXdKyCRw0dBAiEAsB702PlezxXDmwOovYfQCGfwuyB14g2IuKbbk04anFMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRsGdfHiG1M3iq95yrcA5SGdAjPR6mehsds5tOMarDy4L8XYH14451eSfsc6S9ULuNMdqYqvazKeTYY4t%2FOLMR21K3d6UrfoCrFCBaMqer24%2BPs7r04EOPFRf%2BEqrninA%2BvG9oBlSogy5JLuF61FNU93qO%2FUluVxkNGchljJ%2Be2PDtlKQXzFX2b1vp6utP6cYyvC3Pg%2FWMS0ZexPnuSgHLnKYpvxmvnAMk44J32ybXGo9tH%2FvKrezSjxr%2FKy4QvL%2F%2FkJ2GvtMYnhtYYZXUwo5hNWqp5dtqX0qFiw2lWCOXrcY9dwQghgYls8zKDSwWYde%2FJAdgklqDO5cv3uQlFQZ8oS%2BSz9wlmakcAKbtdZKzk6HzW2eR0Rh%2F%2BEJbd06DVbzC%2BWWMQuBeW2fBv46its4YXFNWa%2Fg%2FzwuJskn29o9mDlw6fO5CGeFBVGKbM%2F9YQsCMUoSopSHlN8mgZWK9s3rU1L3%2Fyi1iZOuAuO6ECTh6v%2B0YXZUfAbq1DH0dXs1E5gXn%2FaFVvnm7tg2qmdo0f1xoZKoPXMeLHFIlvHLsNlB7Hl9GCs7tMC5O9y7ElYdwSx7IRU9NeJ1a354rZMblppK%2BnxEM6Uvhj99da86lp8b4woPeZdJpy69Q20KqdkBHZPmMuTDM%2BL9b04AEDMJKkxsAGOqUBdeJn1KYCyWF%2BekOHHMP5baEh7RZyk50gvadSqd9%2BEAKPdGv77E7E85oslm13v9d0ieQhlISjmvDW4JchiR6GHjuxWOCZewEMpSTW3hPRnel9%2Bn1vqb6I8r6fAD2o76BFnmEpApJMwJ7JDWyCA1GA4n6z8UY82Pl6d8sGVWHN04IOy9y6KHzyY0c0qu%2BFIjOyCJj%2FU1MYmyscho5s74RjK9c%2BGHL2&X-Amz-Signature=154f79c45d9f3ef4994a8ec494c5050e618f52a97757920242ea82941650fcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4SU4OP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBj47L%2F4ldViUTmL62dUI9QSou%2BzmxHaxFXdKyCRw0dBAiEAsB702PlezxXDmwOovYfQCGfwuyB14g2IuKbbk04anFMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRsGdfHiG1M3iq95yrcA5SGdAjPR6mehsds5tOMarDy4L8XYH14451eSfsc6S9ULuNMdqYqvazKeTYY4t%2FOLMR21K3d6UrfoCrFCBaMqer24%2BPs7r04EOPFRf%2BEqrninA%2BvG9oBlSogy5JLuF61FNU93qO%2FUluVxkNGchljJ%2Be2PDtlKQXzFX2b1vp6utP6cYyvC3Pg%2FWMS0ZexPnuSgHLnKYpvxmvnAMk44J32ybXGo9tH%2FvKrezSjxr%2FKy4QvL%2F%2FkJ2GvtMYnhtYYZXUwo5hNWqp5dtqX0qFiw2lWCOXrcY9dwQghgYls8zKDSwWYde%2FJAdgklqDO5cv3uQlFQZ8oS%2BSz9wlmakcAKbtdZKzk6HzW2eR0Rh%2F%2BEJbd06DVbzC%2BWWMQuBeW2fBv46its4YXFNWa%2Fg%2FzwuJskn29o9mDlw6fO5CGeFBVGKbM%2F9YQsCMUoSopSHlN8mgZWK9s3rU1L3%2Fyi1iZOuAuO6ECTh6v%2B0YXZUfAbq1DH0dXs1E5gXn%2FaFVvnm7tg2qmdo0f1xoZKoPXMeLHFIlvHLsNlB7Hl9GCs7tMC5O9y7ElYdwSx7IRU9NeJ1a354rZMblppK%2BnxEM6Uvhj99da86lp8b4woPeZdJpy69Q20KqdkBHZPmMuTDM%2BL9b04AEDMJKkxsAGOqUBdeJn1KYCyWF%2BekOHHMP5baEh7RZyk50gvadSqd9%2BEAKPdGv77E7E85oslm13v9d0ieQhlISjmvDW4JchiR6GHjuxWOCZewEMpSTW3hPRnel9%2Bn1vqb6I8r6fAD2o76BFnmEpApJMwJ7JDWyCA1GA4n6z8UY82Pl6d8sGVWHN04IOy9y6KHzyY0c0qu%2BFIjOyCJj%2FU1MYmyscho5s74RjK9c%2BGHL2&X-Amz-Signature=468095638a6786d83effccff2660d7b9e3a7924b64da28d07308264da9ee303d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
