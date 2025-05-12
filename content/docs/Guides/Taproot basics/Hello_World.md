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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSVRFIO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBaBhPUgYNrTrA1qpV8IY1Mpbr0lK9Oc1psFilOnT5rYAiAVKfYWjd%2F4mz4cUeu9%2BzGlvxIk6bTk%2BQzOOOb3xG9x%2FSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoaVp01LF66bb35GdKtwDPBb6Q4I1z0vL4W%2FicYq%2BezZCYo7s6ufQrs9at4Y%2BaaHM15N2vVagt%2FJ3z0zgqw8S9IvANOH3%2FVKID4aIyD5YIOGb6KSGMLgbWChA8kLkmJFh28W19rv9YZ6XgYS2hCDZ%2B6xKmLcErrufJH7G40hutzvL1Ky7ejZuYFRTJvOUFanWIDmSzZB5BTVtCYEArLuCP0grinmuuCsXVbTZxISloIQvakzlNxEDSQNCV1JW%2FooJRCkw8%2F3UfdZGK2I97NFnBHDEN%2F4ehkADOIug0lzisRB%2Bv8aPgjmVtLm5qcf5rmFIaTWLvDwot8vE7BP%2BBRTbDlkhPcO0zTvmXt8c8pXqebM0lk%2B6dt1hUHju25S1AG0OxQwc4%2F1OSspox1S%2FC7suBCCLFsGOzxzKUoKUol1Kis%2F%2FiO9eJ519jZzCopyKnT1H5gjBXzbHU4KgytYig4oo5LKloO66NCby%2BK%2FucSTGkcMbDBhXkLKH8uh%2FO6CxizPiieHJOxKSACPqoKyp%2FPbAtFXbtcKMhOr0fenV0dUws19fJ19P4bjRK4wd1E5K2rq08B3%2FON4KG6xh2EBtJxVSCdAcdVF4HHk5BiMaIU07coLwtMdf4mIgDDsJDWx%2F74McRMsthEbLJHfTGk0w6IOIwQY6pgECG%2FvtruI8M27eGbZHkJtlw3ATkAs2zH7SL01BqB9c45J6H0PaTXakMPTI%2BnUCJ7vOaytbeBq4MgI3A3mpcQau1YrJhUPrX50jQGzmW2pdBJdjdyo%2BQbUgnp9fRe2IyMkrVLyzD0r4UqI5ou5QNwkvRl4QFY4OfeQWLV%2B5n%2BoaDqCEu9Vmc36AzJ4OMPcAtE8s9lez1owtz4GY23T95gObhLyWfqx7&X-Amz-Signature=18976e3f294b003cc09728acf18c295523a4d7d9538a473cd8028217efef43ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSVRFIO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBaBhPUgYNrTrA1qpV8IY1Mpbr0lK9Oc1psFilOnT5rYAiAVKfYWjd%2F4mz4cUeu9%2BzGlvxIk6bTk%2BQzOOOb3xG9x%2FSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoaVp01LF66bb35GdKtwDPBb6Q4I1z0vL4W%2FicYq%2BezZCYo7s6ufQrs9at4Y%2BaaHM15N2vVagt%2FJ3z0zgqw8S9IvANOH3%2FVKID4aIyD5YIOGb6KSGMLgbWChA8kLkmJFh28W19rv9YZ6XgYS2hCDZ%2B6xKmLcErrufJH7G40hutzvL1Ky7ejZuYFRTJvOUFanWIDmSzZB5BTVtCYEArLuCP0grinmuuCsXVbTZxISloIQvakzlNxEDSQNCV1JW%2FooJRCkw8%2F3UfdZGK2I97NFnBHDEN%2F4ehkADOIug0lzisRB%2Bv8aPgjmVtLm5qcf5rmFIaTWLvDwot8vE7BP%2BBRTbDlkhPcO0zTvmXt8c8pXqebM0lk%2B6dt1hUHju25S1AG0OxQwc4%2F1OSspox1S%2FC7suBCCLFsGOzxzKUoKUol1Kis%2F%2FiO9eJ519jZzCopyKnT1H5gjBXzbHU4KgytYig4oo5LKloO66NCby%2BK%2FucSTGkcMbDBhXkLKH8uh%2FO6CxizPiieHJOxKSACPqoKyp%2FPbAtFXbtcKMhOr0fenV0dUws19fJ19P4bjRK4wd1E5K2rq08B3%2FON4KG6xh2EBtJxVSCdAcdVF4HHk5BiMaIU07coLwtMdf4mIgDDsJDWx%2F74McRMsthEbLJHfTGk0w6IOIwQY6pgECG%2FvtruI8M27eGbZHkJtlw3ATkAs2zH7SL01BqB9c45J6H0PaTXakMPTI%2BnUCJ7vOaytbeBq4MgI3A3mpcQau1YrJhUPrX50jQGzmW2pdBJdjdyo%2BQbUgnp9fRe2IyMkrVLyzD0r4UqI5ou5QNwkvRl4QFY4OfeQWLV%2B5n%2BoaDqCEu9Vmc36AzJ4OMPcAtE8s9lez1owtz4GY23T95gObhLyWfqx7&X-Amz-Signature=a2523c8878ed3022305f4ce2fba1e4904122adfcae9012e42c4567c97f8ebaa3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
