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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5XOQXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCUyrKJfFYyukzXA1aw1xPX7QoKfwP9NheStLCL%2Fr29mAIgM%2Fdjlqb1H8Vko60EA%2FItOGBlFBZWuCDrppRbLkvALZgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNLvKekQdhLkoYIiqircA4JCSmTCKdgwQHxljF8i0AUDL2oPCkKO0Ip%2BUwmFsHMN%2FbLMZ%2Bpftf68tSBwrz5pDkACz4%2F7KIit30TTpnYQ1bZeK3mflv%2FWNw4GVh%2FOybBxJ7e%2BEwxuuemxqjiVCLhwjslX9w410wp7J0n2MuwO6XfA0xyYQe9FT7qJiDbvD9fpdTAon%2Be8eb1%2FMQ4YMpP7kFMxvoDEQh6xMx73ZoV5qqr0Xyroklc%2BJU%2FbIjicL6EhXK7KpP%2FoCwk8Fosoeenw60zLu052xRMe4On%2F4MyZiTIkQho3IRkC%2Ff4m%2FO2VFfzKlNDYs%2ByZoVXQlw0aOnECAYEQFwePAhr9sUUtPGTN3PHkLnFMTkHdkEwFFaMZhKrgcnWOCqjUNFWVgYtKMuPHa6QqUj1k1yF3hFbPvPLQ3uzSpYXtEl1BHh5MyTkKZMgrI8sRS%2FAUwgV6weMnKii3H3DR5LewT2bZc49LJZOTu0YviBykr2dWxU8VxyIbh2gATdryEvUrarRGRbSB0gFzc0Y%2Bp5ebbrrvCat%2Fb%2ByuqzDWnFJC31lszdmixx%2BZOGqCFQ0%2FCwknGzq71hpF3daPUaXU6SE8ocL3LObi9in6FfBwAwUEFgktRD0%2FDK5lvVL7zaoa5Bg12Una%2BFylMKP5gMUGOqUBEQLpM9M%2BH9BTLSoIXu31%2FLJb3uvLSyxEBXRXMzLpgD6EfowbbDfwABfmSfYaSeIhFoA4oFZukoKi9oFmoepITWLpVsud%2FRljKeVaSVXOQBB1ur%2FiuA8k6bRukYRyehyKsy15eOuWe5mC03gh3Mu%2BVRIogHyUWwHR%2BHQLRVq3eeQgj%2BVGvbfiacPNwZ%2BezmeiNaY2RxaQL1y4j1DVoWd5Y628axFC&X-Amz-Signature=d825c7020e1e61a1defc786f323d1ad42080924a8b3073dcad4e0c96feec7b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5XOQXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCUyrKJfFYyukzXA1aw1xPX7QoKfwP9NheStLCL%2Fr29mAIgM%2Fdjlqb1H8Vko60EA%2FItOGBlFBZWuCDrppRbLkvALZgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNLvKekQdhLkoYIiqircA4JCSmTCKdgwQHxljF8i0AUDL2oPCkKO0Ip%2BUwmFsHMN%2FbLMZ%2Bpftf68tSBwrz5pDkACz4%2F7KIit30TTpnYQ1bZeK3mflv%2FWNw4GVh%2FOybBxJ7e%2BEwxuuemxqjiVCLhwjslX9w410wp7J0n2MuwO6XfA0xyYQe9FT7qJiDbvD9fpdTAon%2Be8eb1%2FMQ4YMpP7kFMxvoDEQh6xMx73ZoV5qqr0Xyroklc%2BJU%2FbIjicL6EhXK7KpP%2FoCwk8Fosoeenw60zLu052xRMe4On%2F4MyZiTIkQho3IRkC%2Ff4m%2FO2VFfzKlNDYs%2ByZoVXQlw0aOnECAYEQFwePAhr9sUUtPGTN3PHkLnFMTkHdkEwFFaMZhKrgcnWOCqjUNFWVgYtKMuPHa6QqUj1k1yF3hFbPvPLQ3uzSpYXtEl1BHh5MyTkKZMgrI8sRS%2FAUwgV6weMnKii3H3DR5LewT2bZc49LJZOTu0YviBykr2dWxU8VxyIbh2gATdryEvUrarRGRbSB0gFzc0Y%2Bp5ebbrrvCat%2Fb%2ByuqzDWnFJC31lszdmixx%2BZOGqCFQ0%2FCwknGzq71hpF3daPUaXU6SE8ocL3LObi9in6FfBwAwUEFgktRD0%2FDK5lvVL7zaoa5Bg12Una%2BFylMKP5gMUGOqUBEQLpM9M%2BH9BTLSoIXu31%2FLJb3uvLSyxEBXRXMzLpgD6EfowbbDfwABfmSfYaSeIhFoA4oFZukoKi9oFmoepITWLpVsud%2FRljKeVaSVXOQBB1ur%2FiuA8k6bRukYRyehyKsy15eOuWe5mC03gh3Mu%2BVRIogHyUWwHR%2BHQLRVq3eeQgj%2BVGvbfiacPNwZ%2BezmeiNaY2RxaQL1y4j1DVoWd5Y628axFC&X-Amz-Signature=b65e92c5b30ac6b0d567bb5c72779bc3249a90254d3b34c14c6488b4db8310f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
