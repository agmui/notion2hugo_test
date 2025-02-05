---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSX3EVK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCaFjUhfz6%2BJYUmiyxFVHu%2BeZ21%2BOJmMinJaVTL15cgDwIgS44jSxT%2FOHKQPRAMQHrHx22PpkJP%2Fvbf9mfryPTJXGwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDoECxCsht95B4EmOyrcA3np%2FBYSzYieGaDqlEEJNfAecDiCbMEKsllmNrdYiCqaub1FFJMlwhVP7tWKGx0XUeEma0bA9%2BmNM1Ozs6p3Afz5mLXLK%2FnZM4nrHc5Ai3qQ7awHGeMZ4pCW2ZquIMigdOHFYnzB6bldZpiAdrzycxcFqdNJCnS3M5X3mjadYhshhBWud5%2BgpcfnC8qAmBV4Fu9a0X07Bt7yeNyu4p03SWZMXwN2RmDG0smL7%2BuGoA8FIvY3%2FFlCmmYzCKU7Wm7q4SjPiAvCyH6sCOg2PSXcXbPyMcS%2BC90WK0E1%2BOG5luBfFr4oO7RzW4DT%2BgH2opPiDqLKOQ5VphxoI%2BciTS931VDy7FQZSDRd5UQgPwNEbmYIOzGBf0l4g5cqkbxiZgieWHq7i1xzpSwi79KMEXatZnzWFgYBzYjXYfJvGcRZUGCnZ5C8l6VpHEY7f3HSOTZGgKNRxJ60e49kxHi8pAmBnVd77b8%2BPLNPXmHk0SF28dnuJbVqyHyLw1xrqyGdVQWhw%2FG8uYCm8WFgt1lY%2BKKGAkfSJynXhW1zjS7qcWPHw0RVwRxYDc9OpWAniULL1SwDjCcA1Y7lS3GvElnyel2YeZWKKb5KHbLTgzbb5358tlOcpwRlSrNnmJ%2FlTEI5MJ6XjL0GOqUBaWZbs5V4kuoomN3IYYucRRfpGvnDFArwsegbZp2BYTVdvjfS1NyXIh%2BR%2Fu88Rnp%2BYF%2BNzQJskp2Opvctc2Oih7qYuFxTLhGKu1ZiZr6uA3zgjYBExLcyuEVbIJ3GbR20JaV%2FeCypeCZJ6H6LeEgIagjbZRPRpTc7dpkDlovoSbo8TRdaqT90xutw9cz%2BSch9GHSpIPLxV8B1sHvgTXqNANp1XUVu&X-Amz-Signature=71d66ac64c662a0f72c5cf5981c2e6e10563bed56fdd5b79480eb8b69f0afd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSX3EVK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCaFjUhfz6%2BJYUmiyxFVHu%2BeZ21%2BOJmMinJaVTL15cgDwIgS44jSxT%2FOHKQPRAMQHrHx22PpkJP%2Fvbf9mfryPTJXGwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDoECxCsht95B4EmOyrcA3np%2FBYSzYieGaDqlEEJNfAecDiCbMEKsllmNrdYiCqaub1FFJMlwhVP7tWKGx0XUeEma0bA9%2BmNM1Ozs6p3Afz5mLXLK%2FnZM4nrHc5Ai3qQ7awHGeMZ4pCW2ZquIMigdOHFYnzB6bldZpiAdrzycxcFqdNJCnS3M5X3mjadYhshhBWud5%2BgpcfnC8qAmBV4Fu9a0X07Bt7yeNyu4p03SWZMXwN2RmDG0smL7%2BuGoA8FIvY3%2FFlCmmYzCKU7Wm7q4SjPiAvCyH6sCOg2PSXcXbPyMcS%2BC90WK0E1%2BOG5luBfFr4oO7RzW4DT%2BgH2opPiDqLKOQ5VphxoI%2BciTS931VDy7FQZSDRd5UQgPwNEbmYIOzGBf0l4g5cqkbxiZgieWHq7i1xzpSwi79KMEXatZnzWFgYBzYjXYfJvGcRZUGCnZ5C8l6VpHEY7f3HSOTZGgKNRxJ60e49kxHi8pAmBnVd77b8%2BPLNPXmHk0SF28dnuJbVqyHyLw1xrqyGdVQWhw%2FG8uYCm8WFgt1lY%2BKKGAkfSJynXhW1zjS7qcWPHw0RVwRxYDc9OpWAniULL1SwDjCcA1Y7lS3GvElnyel2YeZWKKb5KHbLTgzbb5358tlOcpwRlSrNnmJ%2FlTEI5MJ6XjL0GOqUBaWZbs5V4kuoomN3IYYucRRfpGvnDFArwsegbZp2BYTVdvjfS1NyXIh%2BR%2Fu88Rnp%2BYF%2BNzQJskp2Opvctc2Oih7qYuFxTLhGKu1ZiZr6uA3zgjYBExLcyuEVbIJ3GbR20JaV%2FeCypeCZJ6H6LeEgIagjbZRPRpTc7dpkDlovoSbo8TRdaqT90xutw9cz%2BSch9GHSpIPLxV8B1sHvgTXqNANp1XUVu&X-Amz-Signature=fb26f5c209e7e2f65a63f513f872e731baa960d9d80adf459e820701515edebf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
