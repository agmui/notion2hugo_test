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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SLJTGP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIQC9yd6FKXhS%2Frkouk0dF7cN3ZUqsXNrJidJPT6CZ6LR7gIffYpead4ESzmRioojtyssTvzwaT34h%2FnZK2ew9MF9MSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM7Xn3lvPxeJcCnmzWKtwD6vQ3AeRxW4s7tnIbslMy5zosOEnBpgvXppOADQTQ1PSDDWOBS3igCp%2BCQhGsjX349PRf9ARDeUUv5QFBxk18ybYr6XYIURtVe04G0y%2BOYAQzR2k9AwWh4JjUUQvYP0Jd0WGd1bK5mLNM1JYN90JDiKFDQJawgdTjrEBV0xeeGf0b5vPRpGxWrhp9YDgADwNQ2N%2BBG110UD%2Fh0Zr9jFl1Fh6AAQD7TRWGR9R50rI1UrupvrvZG52BrIsVc%2B37vdhVKTIM8sD5mGHhWZ9r0eYgR0G6sQf0JRVSb2VCFxO0hBugKqxZOosQgzxoAV1DMmX5X2ulxOd4%2FAFucFPKmQ%2BNuZikNejEm0W6BxB3hkV3tmVVocLU3C3iWNddiMFxfG3TNOtls2boMkDJkz9EXSBPn0Dz4w1puD9%2F4hUZduFY1fk9Z1BpQD4EdPPyD5Ssnix24LYB5IoKeJXmkz04wdNfljUIU8NKhn4ZM4tHIudI4OPUZiuA9MFmu2v%2BSRUF0u49qwPZz58LiJelzWG8jT7O6O5lJ2gOyBHzL4nUQIBPeWIQGSPYkPCxrljwb1J8XiOR4RWQjGKu8RmVepMPC2FHrpGm3RmgU7nZ%2FsenruPw0l3piKZ46eyEoH0k8fUwor2uvgY6pgExkPTp0WgOukCyIPz1dcM953lSQdoKyJ2qOjPlA0APl2hQeY8vF5XxqmcDUVQZiiq6D8w5EiMP5JASdfeFBW78TGLaJDAjCTy9gPGCh9ommDg5hONIz7TfI1gX6eUYMnGbCMD9UWpytZhnJYFlVRofB%2B9nLaL5kUyh3NSt3OhUfec7FATmLfdjaR%2Fd9B3TqjnaD79QZonDXCFtcF5O06fzlhQgLcMd&X-Amz-Signature=7051fe1455ad6293d3dc715fa1a4554f344e285910dda6d3cd653fabff9ce6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SLJTGP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIQC9yd6FKXhS%2Frkouk0dF7cN3ZUqsXNrJidJPT6CZ6LR7gIffYpead4ESzmRioojtyssTvzwaT34h%2FnZK2ew9MF9MSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM7Xn3lvPxeJcCnmzWKtwD6vQ3AeRxW4s7tnIbslMy5zosOEnBpgvXppOADQTQ1PSDDWOBS3igCp%2BCQhGsjX349PRf9ARDeUUv5QFBxk18ybYr6XYIURtVe04G0y%2BOYAQzR2k9AwWh4JjUUQvYP0Jd0WGd1bK5mLNM1JYN90JDiKFDQJawgdTjrEBV0xeeGf0b5vPRpGxWrhp9YDgADwNQ2N%2BBG110UD%2Fh0Zr9jFl1Fh6AAQD7TRWGR9R50rI1UrupvrvZG52BrIsVc%2B37vdhVKTIM8sD5mGHhWZ9r0eYgR0G6sQf0JRVSb2VCFxO0hBugKqxZOosQgzxoAV1DMmX5X2ulxOd4%2FAFucFPKmQ%2BNuZikNejEm0W6BxB3hkV3tmVVocLU3C3iWNddiMFxfG3TNOtls2boMkDJkz9EXSBPn0Dz4w1puD9%2F4hUZduFY1fk9Z1BpQD4EdPPyD5Ssnix24LYB5IoKeJXmkz04wdNfljUIU8NKhn4ZM4tHIudI4OPUZiuA9MFmu2v%2BSRUF0u49qwPZz58LiJelzWG8jT7O6O5lJ2gOyBHzL4nUQIBPeWIQGSPYkPCxrljwb1J8XiOR4RWQjGKu8RmVepMPC2FHrpGm3RmgU7nZ%2FsenruPw0l3piKZ46eyEoH0k8fUwor2uvgY6pgExkPTp0WgOukCyIPz1dcM953lSQdoKyJ2qOjPlA0APl2hQeY8vF5XxqmcDUVQZiiq6D8w5EiMP5JASdfeFBW78TGLaJDAjCTy9gPGCh9ommDg5hONIz7TfI1gX6eUYMnGbCMD9UWpytZhnJYFlVRofB%2B9nLaL5kUyh3NSt3OhUfec7FATmLfdjaR%2Fd9B3TqjnaD79QZonDXCFtcF5O06fzlhQgLcMd&X-Amz-Signature=fa882f9d6bfb93c95bc46a96821842a94e49197f1cfeef84af29efe5b7a4c097&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
