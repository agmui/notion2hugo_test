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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVSHWI7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1VHFCPWBVmInAmX8MqyDMutyMGMNa69xRG3jOu9LewIhALL%2FZqWHEbxrT1de7qbes5%2Byt9ebv9K0R3sWTDWbEGYgKv8DCCoQABoMNjM3NDIzMTgzODA1IgxepwDen7vtoCAGT1Uq3APRmzoBUXPvJ3bG0iwadJ3RwStVWOP7LN%2BUgsKozZmssu2r9i0JJkVEU8BCZg9eKTO8SIv7nfhkJBJbvvZobwBQJa7YVRncRmx%2BAuJw8rwBqb3IeA4tVVCo%2Bk7Y%2F4FrDkYDsDMpAcDhn35F2B6dq5WTWGigoxyO912OAzy4ASE1PGlzTWowuDLVn13tHaVksmXwcxZDKCFddBP4FdUN5m0OZpFeVb0Jht2Ug7Gqd%2F3cMMiYpDqb8%2BQxDxrw1%2FoFHdOkOZigCpWazrni%2FagYtgPEHclwhPuPG5sEThr%2FFrxEi06OjLyxmmNLLCmLCOnTcZlkhrrt2j%2F0bUSDB4EaXhHhr2%2B7clVM1zrsf4gzOVNaMMRM7%2FVyz0emsVC2TAAYi3iC8t1KnkS5ItALzb3ftSzVTBKqeI6%2FdtlGu7Rt5osPLeq%2BRp%2BEZD1K26kKEKi9fEbGcvOWlZCFhBx2gdOygElN0pUOaA1nuKqM3DFIezbF%2FXPjkzYiey3dOFkm%2F5oaxQhCslud0QFF120wdkGgmv%2F2FaKArs5%2Fo0QLdd5wIg5PtNymr3fIoKWepSfW7vKcFntrJFqkf70CaxcQzI9OHiO5bvKvqZpaKLpZW%2F7JTtoLtU8hswXqeTkywCDIjDDV5MO%2FBjqkAcYetbhZZKSste%2Ba60PTBxium070H7ctScIH3hn3HocdLU%2FmR7uz8wse1D%2BkblZMV4hWiXdPPOXIgkClud9UvKhCaempUPHQyfNFGgmkfHipWrWn%2FCDf5eExl1Pj7vNOHZHNJVFPnhA0Y%2BrBWkWfim2V9zT4htpikdCoLd3iy1l2GNhD6Qnh%2BJii5VqNQtwtcRWof8bhfLeg3n46lA6QEeVcBCEi&X-Amz-Signature=ab5ad2323b9e203d08ab2d25314fae488d5c2d39b4f1438075101c438f14e36f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVSHWI7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1VHFCPWBVmInAmX8MqyDMutyMGMNa69xRG3jOu9LewIhALL%2FZqWHEbxrT1de7qbes5%2Byt9ebv9K0R3sWTDWbEGYgKv8DCCoQABoMNjM3NDIzMTgzODA1IgxepwDen7vtoCAGT1Uq3APRmzoBUXPvJ3bG0iwadJ3RwStVWOP7LN%2BUgsKozZmssu2r9i0JJkVEU8BCZg9eKTO8SIv7nfhkJBJbvvZobwBQJa7YVRncRmx%2BAuJw8rwBqb3IeA4tVVCo%2Bk7Y%2F4FrDkYDsDMpAcDhn35F2B6dq5WTWGigoxyO912OAzy4ASE1PGlzTWowuDLVn13tHaVksmXwcxZDKCFddBP4FdUN5m0OZpFeVb0Jht2Ug7Gqd%2F3cMMiYpDqb8%2BQxDxrw1%2FoFHdOkOZigCpWazrni%2FagYtgPEHclwhPuPG5sEThr%2FFrxEi06OjLyxmmNLLCmLCOnTcZlkhrrt2j%2F0bUSDB4EaXhHhr2%2B7clVM1zrsf4gzOVNaMMRM7%2FVyz0emsVC2TAAYi3iC8t1KnkS5ItALzb3ftSzVTBKqeI6%2FdtlGu7Rt5osPLeq%2BRp%2BEZD1K26kKEKi9fEbGcvOWlZCFhBx2gdOygElN0pUOaA1nuKqM3DFIezbF%2FXPjkzYiey3dOFkm%2F5oaxQhCslud0QFF120wdkGgmv%2F2FaKArs5%2Fo0QLdd5wIg5PtNymr3fIoKWepSfW7vKcFntrJFqkf70CaxcQzI9OHiO5bvKvqZpaKLpZW%2F7JTtoLtU8hswXqeTkywCDIjDDV5MO%2FBjqkAcYetbhZZKSste%2Ba60PTBxium070H7ctScIH3hn3HocdLU%2FmR7uz8wse1D%2BkblZMV4hWiXdPPOXIgkClud9UvKhCaempUPHQyfNFGgmkfHipWrWn%2FCDf5eExl1Pj7vNOHZHNJVFPnhA0Y%2BrBWkWfim2V9zT4htpikdCoLd3iy1l2GNhD6Qnh%2BJii5VqNQtwtcRWof8bhfLeg3n46lA6QEeVcBCEi&X-Amz-Signature=0a3940fd526f222e5d93d0671eb727203287fd71248ab73f7c1680296fa31397&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
