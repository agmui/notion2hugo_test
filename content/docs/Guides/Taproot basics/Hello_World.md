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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7OD2BI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICavemDAnsQmxxJNKjee4fAO2ABqGIuvDkYKM9EbgAy5AiEA58wg5MzVz%2B6BXTVdkDTUtkR%2BErnsUBXthozA98BILeAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM1yMlWQDuYzfa5uMyrcA6KL7%2Fvh28MXPdWLXuLcFBWwezZUrHCymxcmmtTPTbrdmbDD%2BLdhMFPHC0GUo1PYukbiFaQWo4jImxl1Bb09elJHY0av8eUcnmiK3fnqjxiV9BeddtLA3BXmtpHErya18RTJAW%2BhnPbfOgBO7dbhVVNwes567C%2FdYVRBlXy4yQbLzHjIvBwiukvOjrA9MHdtG%2BZLzRM%2F4FWoGiphi6puv1GDxVtv2JlSz6Mzw6WNBBWgQiA9tMvlsyw3YCHdgewSaOmZ%2BPjlMorZ%2BTiukPJtw1V20lYNAM%2FERjD0uow9mLeQzUdPFureOyMNMoWSut4wENjw4G0lqef2XMMfyZh1r9%2BqkAISPFJ%2BIK9rrvI1fU%2BMGU1oF7%2BqimRaQdKiWusU8BrGuL2BwhF%2FQHHc2Hnx15v5RkjmeNmDoWF7Xl0hU48as%2F9GmmHiaGyDQvusjoIAFDKAqeYJvOdLBnb53t8CtVI3X0X%2BdhjJLIBRc1X0olUvXyDm3Mxf1h9DRkN6R%2F7kGnh6cJzPZDVTjaumPVq2alIlImj4tb5ufuWsTKZw6LXXgCMry8LWwgRU7DqE0gJ7QNZk13vBU%2BjGST3m09j7ffvDfVzn%2FOZc4b8y5Tz%2Bg37Hi7pfb1Ly1WXjH6hSMNehx70GOqUB%2FAS0BCl0EcIjZ%2FZE8EWKVnx6Ae4GD82cBL0rdlLRCK7IhunELDgVXMg13RyhFlAo4IYqdnEe2G%2FByb8OuvOzgGgj4I2qnsCk9k3vOkXouQlC5Zs5HVG9CIgeRjwbO3t82UejVjVN4fSlkrpn%2B7SEmbLBFBS%2BgmT4Xl4X9u0jUyRjWBUH3rr%2BK%2F9Jy%2F8A4M0ygoxVAMaxVI1SgRQMwANB1CcKG5pI&X-Amz-Signature=54324909817f13f086cd3158a98851c27b338a4c444d7e5f4e07bc0eaf2bbe80&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7OD2BI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICavemDAnsQmxxJNKjee4fAO2ABqGIuvDkYKM9EbgAy5AiEA58wg5MzVz%2B6BXTVdkDTUtkR%2BErnsUBXthozA98BILeAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM1yMlWQDuYzfa5uMyrcA6KL7%2Fvh28MXPdWLXuLcFBWwezZUrHCymxcmmtTPTbrdmbDD%2BLdhMFPHC0GUo1PYukbiFaQWo4jImxl1Bb09elJHY0av8eUcnmiK3fnqjxiV9BeddtLA3BXmtpHErya18RTJAW%2BhnPbfOgBO7dbhVVNwes567C%2FdYVRBlXy4yQbLzHjIvBwiukvOjrA9MHdtG%2BZLzRM%2F4FWoGiphi6puv1GDxVtv2JlSz6Mzw6WNBBWgQiA9tMvlsyw3YCHdgewSaOmZ%2BPjlMorZ%2BTiukPJtw1V20lYNAM%2FERjD0uow9mLeQzUdPFureOyMNMoWSut4wENjw4G0lqef2XMMfyZh1r9%2BqkAISPFJ%2BIK9rrvI1fU%2BMGU1oF7%2BqimRaQdKiWusU8BrGuL2BwhF%2FQHHc2Hnx15v5RkjmeNmDoWF7Xl0hU48as%2F9GmmHiaGyDQvusjoIAFDKAqeYJvOdLBnb53t8CtVI3X0X%2BdhjJLIBRc1X0olUvXyDm3Mxf1h9DRkN6R%2F7kGnh6cJzPZDVTjaumPVq2alIlImj4tb5ufuWsTKZw6LXXgCMry8LWwgRU7DqE0gJ7QNZk13vBU%2BjGST3m09j7ffvDfVzn%2FOZc4b8y5Tz%2Bg37Hi7pfb1Ly1WXjH6hSMNehx70GOqUB%2FAS0BCl0EcIjZ%2FZE8EWKVnx6Ae4GD82cBL0rdlLRCK7IhunELDgVXMg13RyhFlAo4IYqdnEe2G%2FByb8OuvOzgGgj4I2qnsCk9k3vOkXouQlC5Zs5HVG9CIgeRjwbO3t82UejVjVN4fSlkrpn%2B7SEmbLBFBS%2BgmT4Xl4X9u0jUyRjWBUH3rr%2BK%2F9Jy%2F8A4M0ygoxVAMaxVI1SgRQMwANB1CcKG5pI&X-Amz-Signature=442c5c44e8f0e46b47a2c5e5871b3001ff6c714414135c1bc4b08d76fef8376c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
