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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675P54MH3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG7qnmRJZzt1aDU1Y2lKgVVGFYExmwxvKuNCog1HVYxoAiEA68D5GI1p%2FU7RyClCn3XLZASj6FP2QPnT9LjXB95wH2sq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCpXxdD2h7Y%2FHaNqzCrcA%2Bs1EDsnx50Etz%2Bqwu8Cjeq4d2UlFcu9sbo1NUqytuD97YDRHEbXaj7%2BP29el2ve9l2HrwMgeZn4kwC%2FgfFNJxny7EMXyn6aGBD%2BYDvUiYEcONGsSiwnoCAsXjZcNhbTBvolrG7zjvpeymsT8VMq58sKJGiHhAn5FdtcjKOvqh%2BdpOaG7v5uP%2F0gDdXKcLhW6kaVjC5KApRtvksMExDwSSIna8znExEIGhA94lb62cE3x%2BFW0y2Hq%2F6%2BxsjkkE4uwB5Bc6B7fJ%2FORF6uDBmtO7frbf1OThmw0lacCXz5BfTxL%2F91OXhTFPmi187O1K0Mt27awzhz0ot3LFHFlwnrViy8TETk3f3TFcanadVOLYORtCQ7cdCm62PmMplw3NynSAZBfDNa8eEzKR3j%2FTipdHUrKwpzMJC73VlGbUBjlz6ClyCm0jFbK7RN1giRUoprfD%2Fny7%2FzqCmGuGuam1e1aZF8vNDJYrNYvpR7KXs8AjjdlOvOlo%2BqZAohGbm73oRQb4FVhirmjTqDCSJGQc9W%2BiawzhU%2FHl0jodWkzKXTp%2BsmGyJWN5xJOCQoLvYKidFL7ocqrpLpIhygdaw7XxZlncrVX%2FSOkHQn%2BG%2FtmpEO9HSE7lq1LotCqskNXBdDMJ%2BzxsQGOqUBW2o6O6%2B4POZdVIecuyyWtRuKuclv6AhiHOyihCfWBeXZ3LWDl2to%2FtIIn3R8CJl01GWZ%2BCLCJMjnSs9ElgFSUcKsSVhw3cnD%2F8NGwdPl%2FaB9Mp091ShUFzNqbv2Hu37PWI51XkBmEOF6LsLbLhoacaY7odM0l07zNJxUuuGpobDTnZ8VdjLy15DvlbH0jXkK%2BVFjCGc8%2FYBwoq7CVIwdNA5L9C3W&X-Amz-Signature=00476afde23114768a86d84f2eccf1f4f1ac746c7d3195baabe041e886757e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675P54MH3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG7qnmRJZzt1aDU1Y2lKgVVGFYExmwxvKuNCog1HVYxoAiEA68D5GI1p%2FU7RyClCn3XLZASj6FP2QPnT9LjXB95wH2sq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCpXxdD2h7Y%2FHaNqzCrcA%2Bs1EDsnx50Etz%2Bqwu8Cjeq4d2UlFcu9sbo1NUqytuD97YDRHEbXaj7%2BP29el2ve9l2HrwMgeZn4kwC%2FgfFNJxny7EMXyn6aGBD%2BYDvUiYEcONGsSiwnoCAsXjZcNhbTBvolrG7zjvpeymsT8VMq58sKJGiHhAn5FdtcjKOvqh%2BdpOaG7v5uP%2F0gDdXKcLhW6kaVjC5KApRtvksMExDwSSIna8znExEIGhA94lb62cE3x%2BFW0y2Hq%2F6%2BxsjkkE4uwB5Bc6B7fJ%2FORF6uDBmtO7frbf1OThmw0lacCXz5BfTxL%2F91OXhTFPmi187O1K0Mt27awzhz0ot3LFHFlwnrViy8TETk3f3TFcanadVOLYORtCQ7cdCm62PmMplw3NynSAZBfDNa8eEzKR3j%2FTipdHUrKwpzMJC73VlGbUBjlz6ClyCm0jFbK7RN1giRUoprfD%2Fny7%2FzqCmGuGuam1e1aZF8vNDJYrNYvpR7KXs8AjjdlOvOlo%2BqZAohGbm73oRQb4FVhirmjTqDCSJGQc9W%2BiawzhU%2FHl0jodWkzKXTp%2BsmGyJWN5xJOCQoLvYKidFL7ocqrpLpIhygdaw7XxZlncrVX%2FSOkHQn%2BG%2FtmpEO9HSE7lq1LotCqskNXBdDMJ%2BzxsQGOqUBW2o6O6%2B4POZdVIecuyyWtRuKuclv6AhiHOyihCfWBeXZ3LWDl2to%2FtIIn3R8CJl01GWZ%2BCLCJMjnSs9ElgFSUcKsSVhw3cnD%2F8NGwdPl%2FaB9Mp091ShUFzNqbv2Hu37PWI51XkBmEOF6LsLbLhoacaY7odM0l07zNJxUuuGpobDTnZ8VdjLy15DvlbH0jXkK%2BVFjCGc8%2FYBwoq7CVIwdNA5L9C3W&X-Amz-Signature=356be8885471b2c70a7a18f4fef2b6ba81f107f0c15950de6a605dc469f25dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
