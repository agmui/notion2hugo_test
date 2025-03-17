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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QMT77N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGW%2FWkREWMEAjyHdxgcYQOb4FEOi6RZenA%2FBB8AJo%2FRwIhAK1Q4tFCR64GI%2BT%2BVmc5icHwqD3aX4BZvtPi752tOSJ%2BKv8DCD4QABoMNjM3NDIzMTgzODA1IgwS3ydWn8TjnS%2BBMWkq3AMTibAy01JDfhcjl1VcnlbIPyxWN%2FwXyADH0bGMlSwiEayaS434PZTQJe97ueX5B2jbMLhG3ow1tpKJowjlFU3%2FlRG1q8br6QavjdkHCs3gYyN6GPriIn9Q3j%2FpEFcatrNSgB8Q%2FZSBNpBKNz7tmRc6oZk805ds%2FqDkkNhMSPMONVldBGW8vChfsvJnQEItTLD%2BkhvcIT1AOVUAHMVqHeR2P272YQBFvaAdHR3xbH0Noo9760brdkqe9v6vP6kQZcBb%2Fg91Wz8O34KcehGXXTLf21kfhI%2FF8r%2FL%2B5SQa0olS2kJWdUVMIxPXLkv%2BMiBw%2FGoisPGgcOsAsew5k%2Fv%2BMbYtei6PTmjyuqArMUAkvVUcdDdJ827be5OrnvQi%2FR2rX%2BqsmM7aTLxnLOCLpXuDw6wq7k64K1epJndLNXTIAl1%2FAgAocSLsIJCuXZC%2BH5hpZLsvdM24tz7lgsFyt0b0zVWf3zdRdquW2zt%2FYZ2K%2Fo01InpDZOROvnUX0KCdw35EFIxj4hDEzKUdHxGoCEeHw65sBWo8zmHrV5vSEW2bl9qKMxo0MtozaQKaOYZoAoMGa5IvwGpbeG0l%2FYn7TjgEy29qHG3BuVulwZKtB%2Fkker9NMJJ%2FkAa53%2B0ZcnBJTCP296%2BBjqkAdEwLbE9xmvJNmj9KX0c5mjDvcOS%2ByWX2ey33IXb6BXeGW7w%2BX9kaqltXjQKGMP4HSEV13xtLqCknPNoklah4JwQ4L8S075B3YA9TBP%2FW93QJX28VCd6Ug1Teq6YYrIJzoCb0JHgdIy%2FSFhe2j%2F0K6tcTgF9TrPBldY7PvMxJWzEHCpaPt%2Fym4tNpX3uQPPtfa%2FHsuFP9mfgHVUc6vYNOJ3n9uy3&X-Amz-Signature=2cd2ab088f9da86243570feb90ec1f7f9441504faab99b2041d5dffc01c6f8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QMT77N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGW%2FWkREWMEAjyHdxgcYQOb4FEOi6RZenA%2FBB8AJo%2FRwIhAK1Q4tFCR64GI%2BT%2BVmc5icHwqD3aX4BZvtPi752tOSJ%2BKv8DCD4QABoMNjM3NDIzMTgzODA1IgwS3ydWn8TjnS%2BBMWkq3AMTibAy01JDfhcjl1VcnlbIPyxWN%2FwXyADH0bGMlSwiEayaS434PZTQJe97ueX5B2jbMLhG3ow1tpKJowjlFU3%2FlRG1q8br6QavjdkHCs3gYyN6GPriIn9Q3j%2FpEFcatrNSgB8Q%2FZSBNpBKNz7tmRc6oZk805ds%2FqDkkNhMSPMONVldBGW8vChfsvJnQEItTLD%2BkhvcIT1AOVUAHMVqHeR2P272YQBFvaAdHR3xbH0Noo9760brdkqe9v6vP6kQZcBb%2Fg91Wz8O34KcehGXXTLf21kfhI%2FF8r%2FL%2B5SQa0olS2kJWdUVMIxPXLkv%2BMiBw%2FGoisPGgcOsAsew5k%2Fv%2BMbYtei6PTmjyuqArMUAkvVUcdDdJ827be5OrnvQi%2FR2rX%2BqsmM7aTLxnLOCLpXuDw6wq7k64K1epJndLNXTIAl1%2FAgAocSLsIJCuXZC%2BH5hpZLsvdM24tz7lgsFyt0b0zVWf3zdRdquW2zt%2FYZ2K%2Fo01InpDZOROvnUX0KCdw35EFIxj4hDEzKUdHxGoCEeHw65sBWo8zmHrV5vSEW2bl9qKMxo0MtozaQKaOYZoAoMGa5IvwGpbeG0l%2FYn7TjgEy29qHG3BuVulwZKtB%2Fkker9NMJJ%2FkAa53%2B0ZcnBJTCP296%2BBjqkAdEwLbE9xmvJNmj9KX0c5mjDvcOS%2ByWX2ey33IXb6BXeGW7w%2BX9kaqltXjQKGMP4HSEV13xtLqCknPNoklah4JwQ4L8S075B3YA9TBP%2FW93QJX28VCd6Ug1Teq6YYrIJzoCb0JHgdIy%2FSFhe2j%2F0K6tcTgF9TrPBldY7PvMxJWzEHCpaPt%2Fym4tNpX3uQPPtfa%2FHsuFP9mfgHVUc6vYNOJ3n9uy3&X-Amz-Signature=3a408619aae37ace77778e12a4f2a399fe7eb73b149ecabc6e982a590ec41b13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
