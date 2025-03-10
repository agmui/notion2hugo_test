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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCYHMW6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFJh1IwWOs%2Bb1%2FTb0mJVDjjOxXKTMSlXO0QSrlXda979AiEA5D2V0X5G4P6M%2Fpz3jn%2FndLs13Y5yavjvkz2GzYml1y8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFluahNHpbp85vavyrcA0eWB8P%2B1A8PZCAJ1Q0tyEvGFfHwMfwD6yU%2B5SHZIYUe2BVYK4EqXmCvVfuyG2JF9haQvKuOo4uEsTetkS8dLFxVDFvJswLFLoyOJE%2FpsMzFILrlChloVeyxfg7QtRTBGo%2FHngZ7BiSnoOnuJOLD3tE1q9FGiLfRxvxK2UDJnC9zVDdDQphir4bYoWUZ9EHetARHaxTW6VCiVu7BsBdXVfcEDIIK4Dd%2FEAK%2F9Yw%2BRQGUWDn%2FKUhNiGGf0MJ0GL2KShCq7HDhGVp7tdiRzRjWET4BUD7T7YvK0WK4GFv29iHY2YDgs9DOsXrC0hAzVBNfp0v3ZJEUk0PxzgegUoi0iiysTqyQKRAuaO4K52WjThT31SinsiwZY33Ok4lkiszNk1POvgaS%2F%2FTVaPwABH4le2xFhf5fTlzVTux3pgMXOmdt1Yh4rfXFdda6W9u%2BUtmq4WJbCJcX0M5y4Nz2t%2FdQaQYSrzXDDq1z8f1aRobl190R9%2FRPrSE2q6kABxzgQvaMrzzXnRnfnYSXsSPT9opOPKPG2GXnwXzviqUQIlOgAyCjmElDl%2B4KmNfmwb%2BsKOLWvTejVr84OVwHes8CP6h3bRQuGAua6zo11tF7dfw0zBhQx%2FpQk5CPuLct8SkZMIP6uL4GOqUBqbPPu7sUNVEHZ%2FZ7tQEpcsfa8vP3IdVMpB%2BQ6H3k711giZ%2BwJNRpxxfMgzWaApeDd80ue3%2FoAer3W9GY1B68ljyCBslJUL7rDvXvCVsCxN9XMfjiuI9tyy2mib%2BA5WrJdCZoUz485XvbHVdm79Ntv2%2BzLbfnWCmS8%2FartMYXKCeTvzSznWk6%2FldbY0pGF%2BkaS9iUXWNGZcKH2LDCqP2Ot4vG%2F6LB&X-Amz-Signature=b80a8ceb1bbc9fb00f50c4a9a4ed4d89a08a1ee41dbea6de8d89a7452b1e1fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCYHMW6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFJh1IwWOs%2Bb1%2FTb0mJVDjjOxXKTMSlXO0QSrlXda979AiEA5D2V0X5G4P6M%2Fpz3jn%2FndLs13Y5yavjvkz2GzYml1y8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFluahNHpbp85vavyrcA0eWB8P%2B1A8PZCAJ1Q0tyEvGFfHwMfwD6yU%2B5SHZIYUe2BVYK4EqXmCvVfuyG2JF9haQvKuOo4uEsTetkS8dLFxVDFvJswLFLoyOJE%2FpsMzFILrlChloVeyxfg7QtRTBGo%2FHngZ7BiSnoOnuJOLD3tE1q9FGiLfRxvxK2UDJnC9zVDdDQphir4bYoWUZ9EHetARHaxTW6VCiVu7BsBdXVfcEDIIK4Dd%2FEAK%2F9Yw%2BRQGUWDn%2FKUhNiGGf0MJ0GL2KShCq7HDhGVp7tdiRzRjWET4BUD7T7YvK0WK4GFv29iHY2YDgs9DOsXrC0hAzVBNfp0v3ZJEUk0PxzgegUoi0iiysTqyQKRAuaO4K52WjThT31SinsiwZY33Ok4lkiszNk1POvgaS%2F%2FTVaPwABH4le2xFhf5fTlzVTux3pgMXOmdt1Yh4rfXFdda6W9u%2BUtmq4WJbCJcX0M5y4Nz2t%2FdQaQYSrzXDDq1z8f1aRobl190R9%2FRPrSE2q6kABxzgQvaMrzzXnRnfnYSXsSPT9opOPKPG2GXnwXzviqUQIlOgAyCjmElDl%2B4KmNfmwb%2BsKOLWvTejVr84OVwHes8CP6h3bRQuGAua6zo11tF7dfw0zBhQx%2FpQk5CPuLct8SkZMIP6uL4GOqUBqbPPu7sUNVEHZ%2FZ7tQEpcsfa8vP3IdVMpB%2BQ6H3k711giZ%2BwJNRpxxfMgzWaApeDd80ue3%2FoAer3W9GY1B68ljyCBslJUL7rDvXvCVsCxN9XMfjiuI9tyy2mib%2BA5WrJdCZoUz485XvbHVdm79Ntv2%2BzLbfnWCmS8%2FartMYXKCeTvzSznWk6%2FldbY0pGF%2BkaS9iUXWNGZcKH2LDCqP2Ot4vG%2F6LB&X-Amz-Signature=7c0710aea76012458b9894ea8ccdf0b6c208124ddec0e3b2555e0f9548dfb146&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
