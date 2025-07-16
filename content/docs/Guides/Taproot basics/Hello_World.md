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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3OODGI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC5Nwl6k9484rRpIpeEOaljR9nihmGlkLjy34fRlPqYCgIhAKc8wdbHAJs1uf1ZfhosK77HDWnukPWxcoxxQi8MjxkFKv8DCFwQABoMNjM3NDIzMTgzODA1IgwxMUz1U3%2B5o9pKbXIq3AObwrS84HstUAecU8XsAmeGgy4kIeZ1zUlIpXmYLhSJUcrDAJdu4AP7VLlmSaSEH2EP0MNOczMuBZpL2G6nxXTS2aLCusCQJW%2FiuVMsTgrFDBgQbjnDoXnWT9dtGlfq6IaW3NdVw%2Fdojd%2BpJj97LHeHabU8yvHZTKCP%2BDUitM1nFmPNiu3QzioB21YCkKpR6EZpfSEVSKUiyeRFrK7xC10IlmjphnRILzRySD4PSHjuNtIgVrZjt5EStV13lsum8Cs4px%2Bqxwi%2FBKMUDxmEaliRwHwWCzkVWJazFCrMYZWaZN6z89lAvLaGTfLl3kBhusUT25Pl26m7HlkGuEF46iH0w3PDh8gsmXz%2BVhWpYg9JM2BbDHB1iQRf3RiXrvLKXPjeqcWHo1P2jkEbRh%2BK6jWkNG4WdUY2RhJlYxhQCk8TBfDLoUiNiipxBW%2F786GpmpV10p6R8MaFZZIsu2%2FcFW7MpR82ozZg5ZdsJqgKhcyQgsdhMkRdImceUiLWoi%2F0cuGVkUCdhv%2FRHtHb8ak1MW2nNE%2B%2Bv6jUY8An7LkkLZBBihF%2FQcfMWQ%2F34HUVg%2FxuOLuTQiq6%2BZM%2FcBNGUfnH%2BWwkCm86CtfLmZ%2BTQXgyj5xqzkPKQfjYdF6CcHIsTjDdk97DBjqkAQHozm8H%2Ba%2BHxEjm6pE0zG3KqQRUXR1DgD81FJdKw1zFBAZAD8YfB2GnAJ%2FKpeX376ApgwAJyzcuQ%2BIOOkH7ulfoHLYHWAo1ktIQ0v7kwk%2FSmCGpX%2F2AjXbA24ZWofgG4DWGNbPYbCfXRj5DvAD4rheGq5hE9VWErMySOStQZtMLpgxE4FSP9RgUGvy4Cca3i8%2BSHAY7k9SUd%2F65B9V2K4GvygKQ&X-Amz-Signature=6542190dd1c9d63d5c7f0476d30843f65a10da3b4d1f75526839255ae44ea8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3OODGI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC5Nwl6k9484rRpIpeEOaljR9nihmGlkLjy34fRlPqYCgIhAKc8wdbHAJs1uf1ZfhosK77HDWnukPWxcoxxQi8MjxkFKv8DCFwQABoMNjM3NDIzMTgzODA1IgwxMUz1U3%2B5o9pKbXIq3AObwrS84HstUAecU8XsAmeGgy4kIeZ1zUlIpXmYLhSJUcrDAJdu4AP7VLlmSaSEH2EP0MNOczMuBZpL2G6nxXTS2aLCusCQJW%2FiuVMsTgrFDBgQbjnDoXnWT9dtGlfq6IaW3NdVw%2Fdojd%2BpJj97LHeHabU8yvHZTKCP%2BDUitM1nFmPNiu3QzioB21YCkKpR6EZpfSEVSKUiyeRFrK7xC10IlmjphnRILzRySD4PSHjuNtIgVrZjt5EStV13lsum8Cs4px%2Bqxwi%2FBKMUDxmEaliRwHwWCzkVWJazFCrMYZWaZN6z89lAvLaGTfLl3kBhusUT25Pl26m7HlkGuEF46iH0w3PDh8gsmXz%2BVhWpYg9JM2BbDHB1iQRf3RiXrvLKXPjeqcWHo1P2jkEbRh%2BK6jWkNG4WdUY2RhJlYxhQCk8TBfDLoUiNiipxBW%2F786GpmpV10p6R8MaFZZIsu2%2FcFW7MpR82ozZg5ZdsJqgKhcyQgsdhMkRdImceUiLWoi%2F0cuGVkUCdhv%2FRHtHb8ak1MW2nNE%2B%2Bv6jUY8An7LkkLZBBihF%2FQcfMWQ%2F34HUVg%2FxuOLuTQiq6%2BZM%2FcBNGUfnH%2BWwkCm86CtfLmZ%2BTQXgyj5xqzkPKQfjYdF6CcHIsTjDdk97DBjqkAQHozm8H%2Ba%2BHxEjm6pE0zG3KqQRUXR1DgD81FJdKw1zFBAZAD8YfB2GnAJ%2FKpeX376ApgwAJyzcuQ%2BIOOkH7ulfoHLYHWAo1ktIQ0v7kwk%2FSmCGpX%2F2AjXbA24ZWofgG4DWGNbPYbCfXRj5DvAD4rheGq5hE9VWErMySOStQZtMLpgxE4FSP9RgUGvy4Cca3i8%2BSHAY7k9SUd%2F65B9V2K4GvygKQ&X-Amz-Signature=47aee6ba35ac7134729293befd4263c92015de3add8293f2033e24bb75cf67d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
