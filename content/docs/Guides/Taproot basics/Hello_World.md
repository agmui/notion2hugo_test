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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUG5DDN5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDa6gaeLplaGHRPqk1GhdQ0gOEMxi5CpqZWM%2BjsOB5L1AiEAm0z9Y89eHYPDpR0H4SmTEHyKKUUSRdiYLHegdfr%2BgVIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKKCjWHma%2FhPqrOzQSrcAwUQ9NidXstMlizRc6Y8wZfR%2FMu1zlpLzzBzYXqA0XoYdJ%2BQJ8JlXeO4EvXKixsfmu%2FhHtAFSXJqGALPowybAR3w88%2FJs2ik0%2FD7r9MhZjFxjDHUR1wCRX22xsOjafzW4TIW%2BLjcUTkqkl%2B3Zh1YRC3eOOpdTHDTF3oAnFDbTlBznMqduOwKuIi4R7DH0KAU%2BuXHKRZPLE1xoK3XdzcZioxG8Md2wF8jCZV7p8Wcfezw2XkPT0c0GYvUe%2F%2BxtQNwJah0GiXC3QafLYvo8HP%2Bo%2Bl48T6pLYniJs0RHy7uv%2FHO5qtncXU2DRog4GgWq5aisnofI5ABE0MHbXXsL6COo26yiKDkaUeIIuDQAXqQJ%2BjqDKoy3Ji38%2FKCBhIkPj3Z5Yw6qsZe3HGuDh4AQlltmojcinEFoKjxBU73dlka2RuCktx3S%2FMHXhmYDYqMjKO2R9t8Lf4vHfjIIVa3ORGV9IBLTd0eW0iAH9L3VW2JQgr6hEXRZFy8iIMKR0bpiKMDYA6K9YL2fjlKJw4eIWoMn%2BphmGWFCno8VfjQGM0Cee%2FCj4OxzZCoFFHMTv5md%2F%2BLPM5N0xk%2BJxsIViWOMyvtVZH5eROHyml9iAQQogJUXER%2BNJzQVhtuZixF2eL%2FMLKihL0GOqUBHVzSzkWzfUx9rLQWPkaSYs%2FsNeFG%2F5CgIeoQP5V7xQfFS07fFgXLTGZe3t6FpXIDoK739k0lZT9by88DLlldR51NQEVbHVS6Za4Wez%2Fyz7vyjkbVM9Lwj5i28eFea%2Be%2Fx2sKDSvDHmeOrhFKEnlJQWvNueglsyqRXz48t0otQyjOaen5sDInTqJZa3Wgs93%2BxgViiEFBR%2BHDbiTrSoKYwJEXnavz&X-Amz-Signature=9414aa141688151a8d16fa65a52b8b702c385e7e2ade55ea11e89445328969f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUG5DDN5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDa6gaeLplaGHRPqk1GhdQ0gOEMxi5CpqZWM%2BjsOB5L1AiEAm0z9Y89eHYPDpR0H4SmTEHyKKUUSRdiYLHegdfr%2BgVIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKKCjWHma%2FhPqrOzQSrcAwUQ9NidXstMlizRc6Y8wZfR%2FMu1zlpLzzBzYXqA0XoYdJ%2BQJ8JlXeO4EvXKixsfmu%2FhHtAFSXJqGALPowybAR3w88%2FJs2ik0%2FD7r9MhZjFxjDHUR1wCRX22xsOjafzW4TIW%2BLjcUTkqkl%2B3Zh1YRC3eOOpdTHDTF3oAnFDbTlBznMqduOwKuIi4R7DH0KAU%2BuXHKRZPLE1xoK3XdzcZioxG8Md2wF8jCZV7p8Wcfezw2XkPT0c0GYvUe%2F%2BxtQNwJah0GiXC3QafLYvo8HP%2Bo%2Bl48T6pLYniJs0RHy7uv%2FHO5qtncXU2DRog4GgWq5aisnofI5ABE0MHbXXsL6COo26yiKDkaUeIIuDQAXqQJ%2BjqDKoy3Ji38%2FKCBhIkPj3Z5Yw6qsZe3HGuDh4AQlltmojcinEFoKjxBU73dlka2RuCktx3S%2FMHXhmYDYqMjKO2R9t8Lf4vHfjIIVa3ORGV9IBLTd0eW0iAH9L3VW2JQgr6hEXRZFy8iIMKR0bpiKMDYA6K9YL2fjlKJw4eIWoMn%2BphmGWFCno8VfjQGM0Cee%2FCj4OxzZCoFFHMTv5md%2F%2BLPM5N0xk%2BJxsIViWOMyvtVZH5eROHyml9iAQQogJUXER%2BNJzQVhtuZixF2eL%2FMLKihL0GOqUBHVzSzkWzfUx9rLQWPkaSYs%2FsNeFG%2F5CgIeoQP5V7xQfFS07fFgXLTGZe3t6FpXIDoK739k0lZT9by88DLlldR51NQEVbHVS6Za4Wez%2Fyz7vyjkbVM9Lwj5i28eFea%2Be%2Fx2sKDSvDHmeOrhFKEnlJQWvNueglsyqRXz48t0otQyjOaen5sDInTqJZa3Wgs93%2BxgViiEFBR%2BHDbiTrSoKYwJEXnavz&X-Amz-Signature=1a972109788566fc4fe7e724ecb56729c8a8f741f819dd2c17a67a5244b4b118&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
