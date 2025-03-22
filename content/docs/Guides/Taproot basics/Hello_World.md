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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYL4PCR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEgyw6l%2Ft9%2FKpjAQR7uVFS6NvogJjlxZJ6wNxTR%2B3G%2BCAiEAn%2Ba6BaqzU9OkWE2gfdboPMJ%2B6ErMquX73CA8x%2FmCZAQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvkOtxLQIrYnlMfZircAwXQZCAoaZtNXjw9UrqDTIKFT8hpNKSQBnG18CLE4iKYWY3g064i6CiyFJL4mn1llgVR46sRxJQzuy5fDt19F8gFLvWGw%2BKudIljPAod4CoY5iQQ4%2BY01uBTRCbexCNmRVWCrXDzSlmGeoNW1rquH6Y02ApDV53bvdhhIp4l%2BELLSTuzLRHRToUJY2h4sK9d%2FCt38GJho35PrDHRlqG4yLjOXoCIrTVbFOOxuxgZ53m8z3ShHhrsMA%2BBTe6uxG6gdH28ljuj44gCQidJ5UMMZNCLfXzycwKBzBHAvjPaMNbgBb0kazgUFiEGPw3R%2B4%2FeHVvRKUcTV2AyGmsma0ZVd11%2FgZBTLnsdKp9VmXhHLzgl7cgRjrIyvEt2bfn4BMIO0b7%2BHOAOhf4x0oIAiT4r%2BACZnOrnuRO90oJ75ME2ie7OEcddyNps2rDLxVKow9mUmy8hdWHIGnUzSEKa%2FXv5Aj%2BbEiO9UVoYcW4g%2FpfQJ8MEek3NwWhuG0BnVVMFJN7yOBm3uKFsmZ0MojW838c2QArYbaT3y75HX3j4JXnKgVt4lwcyKxlZos7B5sd3nw2FdS1buhDwE5rFt7t6IZ%2FBS4hHzV8BlfybcC6NbnKOh8cP1ibPjYN7ogFgxCdsMJCu%2Br4GOqUBI02SzA3yXiDRwahTr1SD64%2F2qowE84IezW9xGmhrO084VOXp0KMgDLflzpAB4eC6BqGRnDDj5QBVWIHevM4a80dKpOS2jmyhPAw%2FL5%2BYQti%2Bk%2FvKJRN3OIa%2BqJqMeNDS0FJ14dplLqSJA3%2FXy6o9%2Fi%2BlXqMnemlkXofR8kFRkYdtQnk0BE3bIb36sOxe5S2Ejy0HVetuysLsEZ47Fog%2BXy6NtJs5&X-Amz-Signature=28f8a0dd73ea696f2284c5b22a6e787fec8dc759d2212d54c0bf018b9c84c5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYL4PCR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEgyw6l%2Ft9%2FKpjAQR7uVFS6NvogJjlxZJ6wNxTR%2B3G%2BCAiEAn%2Ba6BaqzU9OkWE2gfdboPMJ%2B6ErMquX73CA8x%2FmCZAQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvkOtxLQIrYnlMfZircAwXQZCAoaZtNXjw9UrqDTIKFT8hpNKSQBnG18CLE4iKYWY3g064i6CiyFJL4mn1llgVR46sRxJQzuy5fDt19F8gFLvWGw%2BKudIljPAod4CoY5iQQ4%2BY01uBTRCbexCNmRVWCrXDzSlmGeoNW1rquH6Y02ApDV53bvdhhIp4l%2BELLSTuzLRHRToUJY2h4sK9d%2FCt38GJho35PrDHRlqG4yLjOXoCIrTVbFOOxuxgZ53m8z3ShHhrsMA%2BBTe6uxG6gdH28ljuj44gCQidJ5UMMZNCLfXzycwKBzBHAvjPaMNbgBb0kazgUFiEGPw3R%2B4%2FeHVvRKUcTV2AyGmsma0ZVd11%2FgZBTLnsdKp9VmXhHLzgl7cgRjrIyvEt2bfn4BMIO0b7%2BHOAOhf4x0oIAiT4r%2BACZnOrnuRO90oJ75ME2ie7OEcddyNps2rDLxVKow9mUmy8hdWHIGnUzSEKa%2FXv5Aj%2BbEiO9UVoYcW4g%2FpfQJ8MEek3NwWhuG0BnVVMFJN7yOBm3uKFsmZ0MojW838c2QArYbaT3y75HX3j4JXnKgVt4lwcyKxlZos7B5sd3nw2FdS1buhDwE5rFt7t6IZ%2FBS4hHzV8BlfybcC6NbnKOh8cP1ibPjYN7ogFgxCdsMJCu%2Br4GOqUBI02SzA3yXiDRwahTr1SD64%2F2qowE84IezW9xGmhrO084VOXp0KMgDLflzpAB4eC6BqGRnDDj5QBVWIHevM4a80dKpOS2jmyhPAw%2FL5%2BYQti%2Bk%2FvKJRN3OIa%2BqJqMeNDS0FJ14dplLqSJA3%2FXy6o9%2Fi%2BlXqMnemlkXofR8kFRkYdtQnk0BE3bIb36sOxe5S2Ejy0HVetuysLsEZ47Fog%2BXy6NtJs5&X-Amz-Signature=c85f0ea2d3538e6d041fac1e33e75f68d8c5d2f9b16ddbb60ca2f8ddfb57b6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
