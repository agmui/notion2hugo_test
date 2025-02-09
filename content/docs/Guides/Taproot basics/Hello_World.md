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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZOEDGW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iy1jJCiHw9ZO2auwZEWhnEnSxttiRklKFhd%2FgK3MUgIgcuJR1jO%2BvsT7DSULZ4epySLqmpGqXLFSUm0%2Bel8YUakqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoL7JvxwGuO9ZlS0SrcA5b3%2BT8Vog4SyGc8eeN7b9ksKuTBZygb7o66w0q6nh69tVa%2B0u9ikc7x2UxmCf4kmx5uSHdAUbWHjypsHUc2lfhveXlKNXyGd1NGOPgTyGHlQF8dLyuIsvZMDC92A7%2FEmePUxWK0U7osOytSwnlYS8ZlSE1XR6jLBEyw1dSf2cro4GgseS7Fs25KKvgQPkgZFa9113knArhDsLTpu8kUdyufYGsH%2BzsK175X1wMwRISrGbPCIRu8Hkp8TH4vzuqwp6to12FWD3LM6a5HDZF6xURZyj8BWU2kugtcO1ZiRgXR1wa5cG2RjVUKOlDkqjgdl%2B%2F6m58%2FgoUMyKCprJK2z4EaE2T0vMSCnVWO8CL62yUip6gQdeBW3e%2BCpenRnuPWJb1jcojzr6lE3W5Y2i1XkjLfwwB131c2VhBxr16KZezpGA7hpBJeBq2tLr9w%2FEn2RwD8%2BLQ7sXLZo9JumUhPdGjcBgxH8JJc2Vd%2FlBi9xn6TTI%2BOlt9zdIKnUBt7bCAipES563tlBjAcJcNkMJLqAJTQHO2tOmhS%2FqQPSO3raG5Y9uk2%2FVkJOOwYY6thMDBnfZIEJCIa41AENoohh0NfgjoxJrGxEKZb9OwTmHgz3iIO0aaNXqTbsb0GqDMuMOC%2BoL0GOqUBVjRIf8SiRwDn%2FC2gN8XA3AAV75JZuBGz9BgKxOW2uRmchRUqZnjLrfGqNznSSJQxmuZQT1W7zlU1q0BI3WHcRPfDqGG6ExU136vGXAtGsFYfN6ennSipA3zD%2BACFdiqDywtzlD5Ai5ZYNG2roxsqId72EnlkYwXVjBqfVUBM%2B97Hq4Su93uBfXywOlrA%2FrhoUBVjUg7%2FRcPKwtX8kNiY%2BAdgHczL&X-Amz-Signature=0c42a719bffd34edce9d480fd20374176e3c77e3c2a8e9f4e537fad23145154a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZOEDGW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iy1jJCiHw9ZO2auwZEWhnEnSxttiRklKFhd%2FgK3MUgIgcuJR1jO%2BvsT7DSULZ4epySLqmpGqXLFSUm0%2Bel8YUakqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoL7JvxwGuO9ZlS0SrcA5b3%2BT8Vog4SyGc8eeN7b9ksKuTBZygb7o66w0q6nh69tVa%2B0u9ikc7x2UxmCf4kmx5uSHdAUbWHjypsHUc2lfhveXlKNXyGd1NGOPgTyGHlQF8dLyuIsvZMDC92A7%2FEmePUxWK0U7osOytSwnlYS8ZlSE1XR6jLBEyw1dSf2cro4GgseS7Fs25KKvgQPkgZFa9113knArhDsLTpu8kUdyufYGsH%2BzsK175X1wMwRISrGbPCIRu8Hkp8TH4vzuqwp6to12FWD3LM6a5HDZF6xURZyj8BWU2kugtcO1ZiRgXR1wa5cG2RjVUKOlDkqjgdl%2B%2F6m58%2FgoUMyKCprJK2z4EaE2T0vMSCnVWO8CL62yUip6gQdeBW3e%2BCpenRnuPWJb1jcojzr6lE3W5Y2i1XkjLfwwB131c2VhBxr16KZezpGA7hpBJeBq2tLr9w%2FEn2RwD8%2BLQ7sXLZo9JumUhPdGjcBgxH8JJc2Vd%2FlBi9xn6TTI%2BOlt9zdIKnUBt7bCAipES563tlBjAcJcNkMJLqAJTQHO2tOmhS%2FqQPSO3raG5Y9uk2%2FVkJOOwYY6thMDBnfZIEJCIa41AENoohh0NfgjoxJrGxEKZb9OwTmHgz3iIO0aaNXqTbsb0GqDMuMOC%2BoL0GOqUBVjRIf8SiRwDn%2FC2gN8XA3AAV75JZuBGz9BgKxOW2uRmchRUqZnjLrfGqNznSSJQxmuZQT1W7zlU1q0BI3WHcRPfDqGG6ExU136vGXAtGsFYfN6ennSipA3zD%2BACFdiqDywtzlD5Ai5ZYNG2roxsqId72EnlkYwXVjBqfVUBM%2B97Hq4Su93uBfXywOlrA%2FrhoUBVjUg7%2FRcPKwtX8kNiY%2BAdgHczL&X-Amz-Signature=11d0d9b6399d08a5b2365dc0faa4fa617e7425e5ae6214c610b2ae3f19292084&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
