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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7QPIXR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCR3x%2FPRxlfObxVi6Y6wxtXgPQ2aoKGOgL%2FuL5zfeNCDQIhAN7OefhdSCtMRwTw91zBse3t3hwlymUztBGPK9beXqj6KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6J9oO9oshmV%2FM6KQq3ANQSL8uREJkJ6EvWIyIPEa%2Fq02Raf5Dbk82RT3QXL3WCGbzWxNDjKGlfT1ljvzMfqPO9SO0D07N1BiNbmoxdUmzDIGn2qz7V5d28zQOxbHMUXoLcKd1FaDxJWsPoeNkNBcVmLJZSn9VP%2FE%2BjRRtjqxgGNEvis1aIPrqn7UtrqWChDose6MgzOX2spGHtluifoDO2hOSGEJDULvI5euKGedr%2FHRj8v%2BH672tLAfCpeIMSnww8Ox%2BkYmE%2FTlufxTEfVVLWEEJWkMyou24ro6faPhFp7umhny6D0pgGlsCna1C64za2FHvbOePYCB3xBPuHvpX2CreA%2FPKzjnnHe3748%2F%2FaIzzmc5HDkXpPmP0YXUgK7TfKeRm3q%2BLGGhjltm78INZKmJERaNz0LUWDZ9W74wfkdETP2uw7xjWPbxNSx18T6xnGfRh0s22PcfmKSnENhRaBkgMGdvRfg26lQKx5CwVDfEHP5PSojMZ3fZ0NWxeDWNkjqSszKomKkbK8wvx%2Bv%2BXwQFBHQn0S%2FeLqcVFQxxW6AuBChQO62Syed%2B3d5zWyEGc0Z7IjAJfTy9g6nsU%2BRvbGbxhMMLeZ1ddIkaamonqOHyUgQM0jqpujXV4ftL2JZX1nkiVb0Vm%2FsfOsTCl29a9BjqkARpfB0B84qglES4LWMWQTCT%2FYPjR%2B76R%2F8y6zVQrQQ%2FJvkmeA8AAVxwkIAAiREDU%2BnQH5BK37%2BCxP%2FG7YIm%2FYvBpuevWiqdtK2C5Ad6kikvOa0ITZ6VfmjesoA327rRDQ14e8ukvF9ydsCONaffOwYxzBGafhId4eQ5utDHtu6ri%2FKTwazP9Pch5JOsafH0OG4qT%2Bys2bZ2188f40GKK94IQto9G&X-Amz-Signature=ef1199b07489c048068de0b40b7d7439df8d8f3732b2c06999840687f57edd90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7QPIXR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCR3x%2FPRxlfObxVi6Y6wxtXgPQ2aoKGOgL%2FuL5zfeNCDQIhAN7OefhdSCtMRwTw91zBse3t3hwlymUztBGPK9beXqj6KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6J9oO9oshmV%2FM6KQq3ANQSL8uREJkJ6EvWIyIPEa%2Fq02Raf5Dbk82RT3QXL3WCGbzWxNDjKGlfT1ljvzMfqPO9SO0D07N1BiNbmoxdUmzDIGn2qz7V5d28zQOxbHMUXoLcKd1FaDxJWsPoeNkNBcVmLJZSn9VP%2FE%2BjRRtjqxgGNEvis1aIPrqn7UtrqWChDose6MgzOX2spGHtluifoDO2hOSGEJDULvI5euKGedr%2FHRj8v%2BH672tLAfCpeIMSnww8Ox%2BkYmE%2FTlufxTEfVVLWEEJWkMyou24ro6faPhFp7umhny6D0pgGlsCna1C64za2FHvbOePYCB3xBPuHvpX2CreA%2FPKzjnnHe3748%2F%2FaIzzmc5HDkXpPmP0YXUgK7TfKeRm3q%2BLGGhjltm78INZKmJERaNz0LUWDZ9W74wfkdETP2uw7xjWPbxNSx18T6xnGfRh0s22PcfmKSnENhRaBkgMGdvRfg26lQKx5CwVDfEHP5PSojMZ3fZ0NWxeDWNkjqSszKomKkbK8wvx%2Bv%2BXwQFBHQn0S%2FeLqcVFQxxW6AuBChQO62Syed%2B3d5zWyEGc0Z7IjAJfTy9g6nsU%2BRvbGbxhMMLeZ1ddIkaamonqOHyUgQM0jqpujXV4ftL2JZX1nkiVb0Vm%2FsfOsTCl29a9BjqkARpfB0B84qglES4LWMWQTCT%2FYPjR%2B76R%2F8y6zVQrQQ%2FJvkmeA8AAVxwkIAAiREDU%2BnQH5BK37%2BCxP%2FG7YIm%2FYvBpuevWiqdtK2C5Ad6kikvOa0ITZ6VfmjesoA327rRDQ14e8ukvF9ydsCONaffOwYxzBGafhId4eQ5utDHtu6ri%2FKTwazP9Pch5JOsafH0OG4qT%2Bys2bZ2188f40GKK94IQto9G&X-Amz-Signature=8ecf0d098d030ebcae8fa8925719e693f3cc1a817586aac12a4c0156ed784f70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
