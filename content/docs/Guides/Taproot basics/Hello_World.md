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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6AGB6F%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHhTnTjlHRBX4x07MnvN7xicXrZH6dnST4Eakxon3z1DAiBDcdr%2FnBKWsiVIZKJOtplDQV9HoSoUsuX0GaaH0cnHlSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMGwpd%2FCIO6QXqGzxUKtwDf1nmEUA7uNmNSVodSDQ9LGchSTUv5i47VqBZ%2FJBc4N2S5VnmbPHb9OFArNHT0%2B1mvoaw40OqIwTcerQgyFFtItz3RqEG2xlXOcIIsA2xAy0zI04Ooamj4pxXuQY7ixVyGNXB9vMY5GFBsbe49BzCY69Vqc6D%2FGR94gMDqYdW5Uu90svPluRDgU1ci974VxTVcd%2BQ1%2FCD49QdqVU8YwvJ2AQBzYRJgizg%2FdLOPs0YWbbeborPHz%2ByMKkLKoJtXVQegFsDUYeH02oFyWqFD8RE%2Bsz9tN8drrr%2BCv3TkIIhtU%2Fy15vYs0ks2Ifqw3%2F0JKVKU%2B4lrVuX%2BYXa29CIxFUHzeLT51KUHEEZlRHOqebfSBZE2OHW0X%2BjfauWXh0ITSr8aJFAuU2VXGcSygBiqb5s79ZaFnd4NhroO0cV8WZ0jxzesh3D7VDh5EqZTpWNe3vb94HXhNZL8cTtWcZnFb%2BWqFZRKKv%2BWy1GOvjy9LFGXf%2FjlJGv05M1yF%2BQtkAfUo1mpmPFr8pdbmMiUeOjYWUiBPt%2Be2TlUPmSDr28XHCV9KAuEcCu4eiMnwIoHTpPisDa%2Bjp07Q%2B6TtTrkrQLlCchtk3S4jjZTPt159ONp1XjBPgDEKp%2F8zXNzhmCk%2Bsw2c%2BkwwY6pgHcKm20tAvVFU6c7KxQc237G3wW%2BjyANcW7a7y0VyMDmEVMSfTbXHbf8kFyI9tl6r972TLjhw3tkYwgO0RzYsaMVTzwekDP8NY%2FRhB9twtOJ3u6kBXSUfCDZLM5siwVU3JdFN8CjUNC%2FbrpzC1Ln5HpVoCCrABVDQdqPWrNMGIgYwe4D6EHCSrZc6uo5%2BVCfLsMX6137yb9xnP19bRL6%2FCjIk%2FHCyQc&X-Amz-Signature=478ef207733b8a854f1f2dc9a71948fee5dca6e577d33ed28288982ffd5d8125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6AGB6F%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHhTnTjlHRBX4x07MnvN7xicXrZH6dnST4Eakxon3z1DAiBDcdr%2FnBKWsiVIZKJOtplDQV9HoSoUsuX0GaaH0cnHlSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMGwpd%2FCIO6QXqGzxUKtwDf1nmEUA7uNmNSVodSDQ9LGchSTUv5i47VqBZ%2FJBc4N2S5VnmbPHb9OFArNHT0%2B1mvoaw40OqIwTcerQgyFFtItz3RqEG2xlXOcIIsA2xAy0zI04Ooamj4pxXuQY7ixVyGNXB9vMY5GFBsbe49BzCY69Vqc6D%2FGR94gMDqYdW5Uu90svPluRDgU1ci974VxTVcd%2BQ1%2FCD49QdqVU8YwvJ2AQBzYRJgizg%2FdLOPs0YWbbeborPHz%2ByMKkLKoJtXVQegFsDUYeH02oFyWqFD8RE%2Bsz9tN8drrr%2BCv3TkIIhtU%2Fy15vYs0ks2Ifqw3%2F0JKVKU%2B4lrVuX%2BYXa29CIxFUHzeLT51KUHEEZlRHOqebfSBZE2OHW0X%2BjfauWXh0ITSr8aJFAuU2VXGcSygBiqb5s79ZaFnd4NhroO0cV8WZ0jxzesh3D7VDh5EqZTpWNe3vb94HXhNZL8cTtWcZnFb%2BWqFZRKKv%2BWy1GOvjy9LFGXf%2FjlJGv05M1yF%2BQtkAfUo1mpmPFr8pdbmMiUeOjYWUiBPt%2Be2TlUPmSDr28XHCV9KAuEcCu4eiMnwIoHTpPisDa%2Bjp07Q%2B6TtTrkrQLlCchtk3S4jjZTPt159ONp1XjBPgDEKp%2F8zXNzhmCk%2Bsw2c%2BkwwY6pgHcKm20tAvVFU6c7KxQc237G3wW%2BjyANcW7a7y0VyMDmEVMSfTbXHbf8kFyI9tl6r972TLjhw3tkYwgO0RzYsaMVTzwekDP8NY%2FRhB9twtOJ3u6kBXSUfCDZLM5siwVU3JdFN8CjUNC%2FbrpzC1Ln5HpVoCCrABVDQdqPWrNMGIgYwe4D6EHCSrZc6uo5%2BVCfLsMX6137yb9xnP19bRL6%2FCjIk%2FHCyQc&X-Amz-Signature=8d4b135ab882eb89af1f2819c4ff910386d0f10f7f491549feca2318dea3d31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
