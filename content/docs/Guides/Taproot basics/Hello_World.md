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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4H6CAV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyG4EXVKuPMszZWlLAZhzxj6nyEe2IQEN88Q6FEXPlVQIgchGmlEIjxDna8njh3yHN5S1HzkDAlk74cYeifKZ7z7Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDrIK%2BRW739mYo05sCrcA0rDUSA%2Fc7s3Pd9lq3qpHMFADzvwPu0ckwcULWE3zWSv%2FJAUdx1DvmhO1u6Q0gIvzoJ4nhFzv9ChVlNJw1OeJbplbVYhDPkZy2rkDM6alELDedzlZzZB75etPytborXlgXJHOf72LgFkvOoOEDCTXg2ew7vHW%2FwFWTjvAxSsWVAe1BESvaOnE1S68JzfOwG6KlFYHohekB5zpZ4mvnQpmPyGTy9d5EOXzBh4oBFRHD%2BhFYa%2FmVRNBn0%2BP4szBuJCoai3eIkREP2oZJeaTUenQueyxjl24zqWpnT3GiRIFddGPqQsQqZ%2B6%2BWgdrOeLzoFwqUXJEY4pw824qQkGReDaqdP63zUthrn1onegFp%2BC1igAvZh4Lz9KW12uJ1OdJW0xaghuORDpweu%2BPfjXgD7rOxUnXpVp8nRepSK2uDfkPbRgyFxJnGR7h0b1PL77jVc3tVKRZwKiuuOYmWp3ytyF%2FkulvJVeeYLhRh4a6lMVIw%2B1tPj17o5V5zZJLLVe35p4kVz1WWwFPaxRLiwut0JahmGjqI0WBE1N4lf7qnsm6ct2kc8kEPGA400igYKk%2BcnCoJeN%2BWTU9FGNmlxeZeyLzrH1G8kt5usL%2BtCSyVH9NO9Pi1gNDzjsqs4xeb7MJye8cQGOqUBMGe%2B4%2BbdlV%2FpoYm1pub3jB0ACJWscnkCFxAMtCAZp6ua9purBQvBNLjz%2FuXpDUQuV1djl%2BLe0fGVfPqgI6rIJrBezqWbesEkPyok0rMXjjMXbgrATNUSEv74MCiDSahef4gDMjXs6tTm0qvz%2FVCQha9euUpYr3lI2nN9CFYQq0JYFiXChQj%2FJD0wGtIWYznEbKiEYago%2BrM3t5yDI8jCTKIE1O%2Bx&X-Amz-Signature=2603852c74c062f0fa16daa4ece6d232a063b17aca3ebc7dd5712f7b41e1016a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4H6CAV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyG4EXVKuPMszZWlLAZhzxj6nyEe2IQEN88Q6FEXPlVQIgchGmlEIjxDna8njh3yHN5S1HzkDAlk74cYeifKZ7z7Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDrIK%2BRW739mYo05sCrcA0rDUSA%2Fc7s3Pd9lq3qpHMFADzvwPu0ckwcULWE3zWSv%2FJAUdx1DvmhO1u6Q0gIvzoJ4nhFzv9ChVlNJw1OeJbplbVYhDPkZy2rkDM6alELDedzlZzZB75etPytborXlgXJHOf72LgFkvOoOEDCTXg2ew7vHW%2FwFWTjvAxSsWVAe1BESvaOnE1S68JzfOwG6KlFYHohekB5zpZ4mvnQpmPyGTy9d5EOXzBh4oBFRHD%2BhFYa%2FmVRNBn0%2BP4szBuJCoai3eIkREP2oZJeaTUenQueyxjl24zqWpnT3GiRIFddGPqQsQqZ%2B6%2BWgdrOeLzoFwqUXJEY4pw824qQkGReDaqdP63zUthrn1onegFp%2BC1igAvZh4Lz9KW12uJ1OdJW0xaghuORDpweu%2BPfjXgD7rOxUnXpVp8nRepSK2uDfkPbRgyFxJnGR7h0b1PL77jVc3tVKRZwKiuuOYmWp3ytyF%2FkulvJVeeYLhRh4a6lMVIw%2B1tPj17o5V5zZJLLVe35p4kVz1WWwFPaxRLiwut0JahmGjqI0WBE1N4lf7qnsm6ct2kc8kEPGA400igYKk%2BcnCoJeN%2BWTU9FGNmlxeZeyLzrH1G8kt5usL%2BtCSyVH9NO9Pi1gNDzjsqs4xeb7MJye8cQGOqUBMGe%2B4%2BbdlV%2FpoYm1pub3jB0ACJWscnkCFxAMtCAZp6ua9purBQvBNLjz%2FuXpDUQuV1djl%2BLe0fGVfPqgI6rIJrBezqWbesEkPyok0rMXjjMXbgrATNUSEv74MCiDSahef4gDMjXs6tTm0qvz%2FVCQha9euUpYr3lI2nN9CFYQq0JYFiXChQj%2FJD0wGtIWYznEbKiEYago%2BrM3t5yDI8jCTKIE1O%2Bx&X-Amz-Signature=33a0caf23d89660e127f00bdf048183c107f65ad55469b9198100f2f6ba1178d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
