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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVDXKGM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatIq%2FFbC%2BLETtwppJ309aNYg8eVm4zjZXwstwJlfwvwIgMnK2KMrafn3I%2B4mZOjYK15dqYl9ev3rrUWIsxMoBOJEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaO4%2BejKAritsLKRyrcA%2BmsBGfKiVe0Cr2gDZv03rSuqwroHbluXLw%2BTtFk9yRKZk2LSpjfShIrKK%2FvOMuzictQUC59seHTSMYaJna1kmLxOM%2FqHtx22w6HJzSN9xP9o%2BRRoTFRF7okNgDMlbgHcEZxuUP9fiOlR%2BPH%2F9e2oSUtuS1J449dSGNoTul%2FZZWkoZKDZSKmfZjA%2BbMLse5Lr86r2mZOfL5Q6HTE1SbY3jbEZvvWIBrH4PTGC5xArxyFugQJ59%2BNIRvUD4huqc0EwJppn107CunCEskI95LWBgUoo%2FAqzc3rWx5sY8NRO1k5xT1rgjckIddg%2Bux1RJxY5WfseBWw2orfbLZ8klk8fI0mRiQu1OPFkI5BEnn9mNtzcxgIl5SN7%2BoQVS%2F6UBgptvLzku1G0Y44xkxGd0bztNM%2BVsEIAcEkPL9ejRTURn0YlczyLrZEBk%2Fq6yRM6Cpno4epGAICZFNFlFo06Aqq8KCozARVVvSCyoJcp1IfpoOGgphXc4GCS2wfXhDnGXCb%2Bq4WTrevF61tat%2BxPDqV19SLHAqq7tiSoZrxnsjUsMVbGqf9fG2K4EMMUsewsiclAcKIY7PtR8cd9aOBtn%2Fvk2W9roma4sXy7UFW%2FzSFR%2FU%2BRUr6EVNAE2vtiyglMOLcpMQGOqUBRLE991lh6pwI2J1bKvnkoEZLc03kuOk82Z4eO0ZwdAEd08dr9ssd1MoUBQpIlfKQX91faeWGLb9K4nq4Mz5Z%2By8un0QBtd%2B%2FavFO%2BiI9t5mQWg0kwU9Pjp2MgkEMVc2s%2FKzeeZ%2BzbVXP2FO4GUufKnxoEKSnfi2mMaRHexvJyLOHdAzaDC48Q41vPbkUdbry%2BVz4fWCXue%2F44uhbZHhf99DxLAvZ&X-Amz-Signature=88be03913bc6fdb0504df1c101e457a1bfa7a4f5ddb4f33a3c2fe90d8408f128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVDXKGM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatIq%2FFbC%2BLETtwppJ309aNYg8eVm4zjZXwstwJlfwvwIgMnK2KMrafn3I%2B4mZOjYK15dqYl9ev3rrUWIsxMoBOJEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaO4%2BejKAritsLKRyrcA%2BmsBGfKiVe0Cr2gDZv03rSuqwroHbluXLw%2BTtFk9yRKZk2LSpjfShIrKK%2FvOMuzictQUC59seHTSMYaJna1kmLxOM%2FqHtx22w6HJzSN9xP9o%2BRRoTFRF7okNgDMlbgHcEZxuUP9fiOlR%2BPH%2F9e2oSUtuS1J449dSGNoTul%2FZZWkoZKDZSKmfZjA%2BbMLse5Lr86r2mZOfL5Q6HTE1SbY3jbEZvvWIBrH4PTGC5xArxyFugQJ59%2BNIRvUD4huqc0EwJppn107CunCEskI95LWBgUoo%2FAqzc3rWx5sY8NRO1k5xT1rgjckIddg%2Bux1RJxY5WfseBWw2orfbLZ8klk8fI0mRiQu1OPFkI5BEnn9mNtzcxgIl5SN7%2BoQVS%2F6UBgptvLzku1G0Y44xkxGd0bztNM%2BVsEIAcEkPL9ejRTURn0YlczyLrZEBk%2Fq6yRM6Cpno4epGAICZFNFlFo06Aqq8KCozARVVvSCyoJcp1IfpoOGgphXc4GCS2wfXhDnGXCb%2Bq4WTrevF61tat%2BxPDqV19SLHAqq7tiSoZrxnsjUsMVbGqf9fG2K4EMMUsewsiclAcKIY7PtR8cd9aOBtn%2Fvk2W9roma4sXy7UFW%2FzSFR%2FU%2BRUr6EVNAE2vtiyglMOLcpMQGOqUBRLE991lh6pwI2J1bKvnkoEZLc03kuOk82Z4eO0ZwdAEd08dr9ssd1MoUBQpIlfKQX91faeWGLb9K4nq4Mz5Z%2By8un0QBtd%2B%2FavFO%2BiI9t5mQWg0kwU9Pjp2MgkEMVc2s%2FKzeeZ%2BzbVXP2FO4GUufKnxoEKSnfi2mMaRHexvJyLOHdAzaDC48Q41vPbkUdbry%2BVz4fWCXue%2F44uhbZHhf99DxLAvZ&X-Amz-Signature=53bed548531c090a0521d57b28ec03cb915c4a9e28449d7c857cab5dfac9b8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
