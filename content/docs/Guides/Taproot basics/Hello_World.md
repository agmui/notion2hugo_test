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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGIXFOH%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUbjl%2B%2B9tWUWjscUBl%2F9rOUqByqYqRLVufOEwIHVyJPAiEAxhvTChTTEAYP0DHGCfdNg5Vi%2FO36RcV0hEovX4ocn88qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRIRqQRrFwgIId3rircA1qNXtyq0Um1odsoY0MCQr9hDbMTkQiqF5vFvcGt5p1pNLCajNtEnk8sfEdVBV8cowwJxSA53nwuBAdV2o9aWP%2FUx8achHP3LWlwygt6wILlv86TwILnu9yUhXAdZNtSrDL1jOtnpJVyAKsZ5ksHwbLzGHSFCHZlquL2%2FVppD7CiFKHRlfA9tUK2OXZmhcfhizUwLenqpTgwuRe8kFd34snDBXxq2I08cK%2BK4fwPkS6gpNojIxpBfqD6kgj2EPy9BKMLf9YRppho06OL%2FDaaYG0Tkks0u8s0aSLpxw4sxkw2fAnLJJa5wRq3e5EjAluK4vq23FBhvebdzZjvMMd%2BCvOtHQ9VEo%2B8P7r6VbiCCpkMNSGA8ULDEbw2Bp1D%2FNLVVzUvxwNOlKuXVsQBIN89XJ34KhDB%2B5qnGptsgYjvLXXFlPf6miv8KybK%2BDhrgFN5xCFzrGYXJrQOMpCmWpIjIdoiO6wgxaXps0UImC43LszXODbeOeXb6JR%2Buq9Zq6aMfjqGOFeaBVO6PSlrI41PrRomklbYOswq2HY83Dj9JxnDYXHkXPBSK4BShr1kyNl0gh0wVu1lqelBOoYR2CqikAQTwAuIhi%2FuCaDqUsspzdLo9PpF%2BMQ5WkYTEbO%2BMPOgyMIGOqUBKFi8STO7GWY7LnF%2BTL5t%2Bzq7uq5JFtSdjCQg74Yc%2FbnUSwLjrkgJTMck4%2FUYkAWSC0QdtHTEqeWhbomQgp99yvidN65JOT3KzryTVUk%2FdxC0s0I4pueOYQ80sMBttUAsXYO7ui%2Bw3mwqqG%2FlyQiMJsV503BWxxfEMTqjCmQcYT4UoL9PlyawOkpC%2BW%2FBXNw9o7VThjt1AKLV8C6BvuPfeS43oEzI&X-Amz-Signature=2f59ccee6926c9ec0f3eaa47a9d2d17f3b289f4afe9d76f31dbb3861ff2f0180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGIXFOH%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUbjl%2B%2B9tWUWjscUBl%2F9rOUqByqYqRLVufOEwIHVyJPAiEAxhvTChTTEAYP0DHGCfdNg5Vi%2FO36RcV0hEovX4ocn88qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRIRqQRrFwgIId3rircA1qNXtyq0Um1odsoY0MCQr9hDbMTkQiqF5vFvcGt5p1pNLCajNtEnk8sfEdVBV8cowwJxSA53nwuBAdV2o9aWP%2FUx8achHP3LWlwygt6wILlv86TwILnu9yUhXAdZNtSrDL1jOtnpJVyAKsZ5ksHwbLzGHSFCHZlquL2%2FVppD7CiFKHRlfA9tUK2OXZmhcfhizUwLenqpTgwuRe8kFd34snDBXxq2I08cK%2BK4fwPkS6gpNojIxpBfqD6kgj2EPy9BKMLf9YRppho06OL%2FDaaYG0Tkks0u8s0aSLpxw4sxkw2fAnLJJa5wRq3e5EjAluK4vq23FBhvebdzZjvMMd%2BCvOtHQ9VEo%2B8P7r6VbiCCpkMNSGA8ULDEbw2Bp1D%2FNLVVzUvxwNOlKuXVsQBIN89XJ34KhDB%2B5qnGptsgYjvLXXFlPf6miv8KybK%2BDhrgFN5xCFzrGYXJrQOMpCmWpIjIdoiO6wgxaXps0UImC43LszXODbeOeXb6JR%2Buq9Zq6aMfjqGOFeaBVO6PSlrI41PrRomklbYOswq2HY83Dj9JxnDYXHkXPBSK4BShr1kyNl0gh0wVu1lqelBOoYR2CqikAQTwAuIhi%2FuCaDqUsspzdLo9PpF%2BMQ5WkYTEbO%2BMPOgyMIGOqUBKFi8STO7GWY7LnF%2BTL5t%2Bzq7uq5JFtSdjCQg74Yc%2FbnUSwLjrkgJTMck4%2FUYkAWSC0QdtHTEqeWhbomQgp99yvidN65JOT3KzryTVUk%2FdxC0s0I4pueOYQ80sMBttUAsXYO7ui%2Bw3mwqqG%2FlyQiMJsV503BWxxfEMTqjCmQcYT4UoL9PlyawOkpC%2BW%2FBXNw9o7VThjt1AKLV8C6BvuPfeS43oEzI&X-Amz-Signature=9e9360fcc214025e2af562f8d12915ae2eca34af59e428794f3be9151a5f48b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
