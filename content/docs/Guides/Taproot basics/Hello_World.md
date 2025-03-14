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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLPXF4V%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8HDh9P5M3l5yzT1lYP2xZ6mlVhcVjQywhnmuUtLyddAiEAyy%2FyruB8bEJ4UebqQqyt4IrbGV6Zs%2FnpHPLlk%2FHDF1sqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAigjvIdjJY7VG9JlyrcA0Cdu6Qwwn2qMu%2BtXeUzLE3%2ByOAIvrUhdpV7kCYZyPCsCc1wG9y35y3fRtCCZXq54sMSZohbwC4naSSI95Ftb57vDkxoX%2FvxngBu7x5UOgZ3NBw0bWmlBjIxYJ7LRhqu4Uw749SqDiFS3uut4wVqWohIVooQYwH8%2BBSGyDaBNzG5xX79UCW9okT6SC025Bj32fBoc%2FwZT5zmHKv43n6xcqGjaAsW6u9hJrZmLMTg%2BLX2fEd2LK2f4GDb43b%2FRqS%2Fql5QxvkGtaB0eac7YFW0ejs%2Bw9L6tYlw%2FbY%2FzFsVUCRWGr8mkQltQ4OU4AAp%2F1lMD%2FozzBccdAOWP0cA18wyiRKF93BUPLMbJlgkBXLi2yjlEXHidnRlQHzBhXhG%2F3mAwwLtq0JgzP8VHYm3DSUICOiQc%2FtJk9UoP%2Bvs09Aa3IfM09VI%2F9NajxrHYPpmllPjO%2BbYuMjnmV%2FkQHfB%2BO5xyvzLRhOzrgUeyQtskUAWV37ZSO5EQpzoR%2FopI%2BlQqThNKYpEGv%2FDgzPMa33wDIGd5cdxz2Oi2YxopME69sqHg3bD9t6KVmxLChj4u%2FyUebiFWiMr4FDqeoAvZLQ3s8spRZfI4AsTtllz3aeBUcYjBCH%2BHdJbYiXujyQNyrjUMJLA0b4GOqUBHkWiqnU2JSjWwv82AeHeR6%2FbRaJXKr67QycQD6y0HyhgfedEWTCNLJepiF7oULLHKWohQW0taaW6Bk4vyOwV3x9i7jOM%2Bfi8ZpyhCCrNHUm4X7nbzMEDMyPwJcc50ZiwOAnIGaKiI0KoJLDq57Yldq1aONAnM0eTDSOL6%2BT9kxlYAT9Ed7EwjY8FpK2n4LK3K8KOgP42Hv5CYEbxklenzz70i9BG&X-Amz-Signature=b1aab0dc8339213c6e6cd86e7bc42e41f754296ad5eddbf0ae4e3faff26ebfb1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLPXF4V%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8HDh9P5M3l5yzT1lYP2xZ6mlVhcVjQywhnmuUtLyddAiEAyy%2FyruB8bEJ4UebqQqyt4IrbGV6Zs%2FnpHPLlk%2FHDF1sqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAigjvIdjJY7VG9JlyrcA0Cdu6Qwwn2qMu%2BtXeUzLE3%2ByOAIvrUhdpV7kCYZyPCsCc1wG9y35y3fRtCCZXq54sMSZohbwC4naSSI95Ftb57vDkxoX%2FvxngBu7x5UOgZ3NBw0bWmlBjIxYJ7LRhqu4Uw749SqDiFS3uut4wVqWohIVooQYwH8%2BBSGyDaBNzG5xX79UCW9okT6SC025Bj32fBoc%2FwZT5zmHKv43n6xcqGjaAsW6u9hJrZmLMTg%2BLX2fEd2LK2f4GDb43b%2FRqS%2Fql5QxvkGtaB0eac7YFW0ejs%2Bw9L6tYlw%2FbY%2FzFsVUCRWGr8mkQltQ4OU4AAp%2F1lMD%2FozzBccdAOWP0cA18wyiRKF93BUPLMbJlgkBXLi2yjlEXHidnRlQHzBhXhG%2F3mAwwLtq0JgzP8VHYm3DSUICOiQc%2FtJk9UoP%2Bvs09Aa3IfM09VI%2F9NajxrHYPpmllPjO%2BbYuMjnmV%2FkQHfB%2BO5xyvzLRhOzrgUeyQtskUAWV37ZSO5EQpzoR%2FopI%2BlQqThNKYpEGv%2FDgzPMa33wDIGd5cdxz2Oi2YxopME69sqHg3bD9t6KVmxLChj4u%2FyUebiFWiMr4FDqeoAvZLQ3s8spRZfI4AsTtllz3aeBUcYjBCH%2BHdJbYiXujyQNyrjUMJLA0b4GOqUBHkWiqnU2JSjWwv82AeHeR6%2FbRaJXKr67QycQD6y0HyhgfedEWTCNLJepiF7oULLHKWohQW0taaW6Bk4vyOwV3x9i7jOM%2Bfi8ZpyhCCrNHUm4X7nbzMEDMyPwJcc50ZiwOAnIGaKiI0KoJLDq57Yldq1aONAnM0eTDSOL6%2BT9kxlYAT9Ed7EwjY8FpK2n4LK3K8KOgP42Hv5CYEbxklenzz70i9BG&X-Amz-Signature=3ff3a3e5e3e1760b14f036fd197f4f1211270e45cd1eb685b1fb53c6696d28e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
