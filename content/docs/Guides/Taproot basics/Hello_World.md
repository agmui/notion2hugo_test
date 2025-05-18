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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVBJXVC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZRkTkfLUQlVBf0jxqaosv780Tn94%2B2CR6Bs5DXC%2FJyAIgLezZoihkyzBjbWPxZMaX3wcY0PkVjqarMNhLuEkkqHoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDK9nvxzUWklteJ5IHCrcA5qA%2FEyjZuGYBisbUJLFFP5jMcn%2B%2BnK1WUmStWkZTmRPpwgVrK%2FnV0Ep2XBVTyZ1JDleXRtjI3ZWaLCcvI3Nnd1FSfbagXBVhTZsprKktWl0Q59qIS7vDR82WeEs4FYWM0GSfGrwbDZ4cOhIuoEfGX0qKC2xikqP2rxWYcI41qPn36Jna085vZE%2BruBnAZgVgOnHA9hp60zFhSnCPXYWCVylapbgB0J7iU6OyLxaRfnMBCWBhC8LhC6rFHRQFuwWec3fNVX1Px5LAY9F%2BpIwFFQgidf3bSDLE48zM6%2FiiIEnGThJkfwwGNXiuomteG6UPx3t8N9yHgoDzMpB%2ByQ%2FxZlabfKwC7S%2F7AHYxf7QGYzLOGel84%2F%2B4sAJYe2yrgh5jVMJ1XbmwedYxwD2n4gipiN8AaCBQR9zsQaa0SLgRpcq1vVnavGgfP4Be6wbf%2BuFx0jTABTQgO1tHoBhQPUYgED9nj4pQVMU9AV25Lfc9QNqFmhJzczCWYAdcTBeyLwtBvQNFLcwO%2Ff4IU3%2B7lEAo04gc4KyEY2k2fpk2ffXbWDPaQjHxZmerKsOM42Apnj6Cei%2FzoC9f8poM6u2Lm%2B%2BNryibMS%2FGKrBd8Rg99g8hym5IEk3mpesghZhaxHzMNrmpcEGOqUB45Z7W4jj1fEen3M3SFblc3Kugt1Cg4IULRoJqHoGZWxOMGSMw2P3GHCIiI9dyDJNsOTODFQp4JXgAKYtKoskm%2Ba7ddOxIOEtbxSPpWEA2JcxzBmqHbhcVA9%2BI8FT7A79TbTTi9QXVMkdCWvwQJtdcKuJoiUxFnNB9qbmSNzpKWkXHbxUDNZIHkEXf5LqU4raACR7Nug4Rjyu6TTAyFgh7t%2B9Xbx8&X-Amz-Signature=52109e144a5b737b71142bbc37b35aa8e9597e91f0024e0a37a17330157582bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVBJXVC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZRkTkfLUQlVBf0jxqaosv780Tn94%2B2CR6Bs5DXC%2FJyAIgLezZoihkyzBjbWPxZMaX3wcY0PkVjqarMNhLuEkkqHoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDK9nvxzUWklteJ5IHCrcA5qA%2FEyjZuGYBisbUJLFFP5jMcn%2B%2BnK1WUmStWkZTmRPpwgVrK%2FnV0Ep2XBVTyZ1JDleXRtjI3ZWaLCcvI3Nnd1FSfbagXBVhTZsprKktWl0Q59qIS7vDR82WeEs4FYWM0GSfGrwbDZ4cOhIuoEfGX0qKC2xikqP2rxWYcI41qPn36Jna085vZE%2BruBnAZgVgOnHA9hp60zFhSnCPXYWCVylapbgB0J7iU6OyLxaRfnMBCWBhC8LhC6rFHRQFuwWec3fNVX1Px5LAY9F%2BpIwFFQgidf3bSDLE48zM6%2FiiIEnGThJkfwwGNXiuomteG6UPx3t8N9yHgoDzMpB%2ByQ%2FxZlabfKwC7S%2F7AHYxf7QGYzLOGel84%2F%2B4sAJYe2yrgh5jVMJ1XbmwedYxwD2n4gipiN8AaCBQR9zsQaa0SLgRpcq1vVnavGgfP4Be6wbf%2BuFx0jTABTQgO1tHoBhQPUYgED9nj4pQVMU9AV25Lfc9QNqFmhJzczCWYAdcTBeyLwtBvQNFLcwO%2Ff4IU3%2B7lEAo04gc4KyEY2k2fpk2ffXbWDPaQjHxZmerKsOM42Apnj6Cei%2FzoC9f8poM6u2Lm%2B%2BNryibMS%2FGKrBd8Rg99g8hym5IEk3mpesghZhaxHzMNrmpcEGOqUB45Z7W4jj1fEen3M3SFblc3Kugt1Cg4IULRoJqHoGZWxOMGSMw2P3GHCIiI9dyDJNsOTODFQp4JXgAKYtKoskm%2Ba7ddOxIOEtbxSPpWEA2JcxzBmqHbhcVA9%2BI8FT7A79TbTTi9QXVMkdCWvwQJtdcKuJoiUxFnNB9qbmSNzpKWkXHbxUDNZIHkEXf5LqU4raACR7Nug4Rjyu6TTAyFgh7t%2B9Xbx8&X-Amz-Signature=7ad3bcddeed38e48ce8faf3b2060f760fb8458d442e6934c29bb7b3d64e49138&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
