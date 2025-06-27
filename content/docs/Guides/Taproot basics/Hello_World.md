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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7LMXMD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHYovkO%2BXtRJZtcok6Q0gSdljZ4sT6ehOn%2FTCBloxAhvAiAQjWFi8OJSrWQ3tXAfEiGUvaeF2QKg4vlnS7OqtSyujir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMB2NdRjsELtOeboQ7KtwDbg5kq7w7hXMoiMxWsiQc8s1RxcHQzmbkkZV%2FYFM2gfdUrPUKHIsSNc%2BpSMgGm4YZH%2BREVzZZ2vFolC14PenDdGMmq52lWAAC72wYgld%2BprwaoxZ9R%2FSWVZSxwPSszVlmZA6AgX6u64z%2ByawqnnKP0xV3hug%2BmEFbw5NrIgmqko77POkfaUVJ7pm6ml5oXLJcc76uexIeHjzGcFxHRFPvnUrJg9MHIali5hG9n2K%2BhigXXUkCJ9RPVjFH1ChxSCJX5%2FXOEDemRkoYEDhTgd7KebE90gJtL2drXYFsnsQwbD%2FvChQWboD1fRym41l03hNQvVxgAz1HtGTaOxrWRiCHBVMCs%2FfhIXhoEDs2Df1YHuwXsn2ad8%2FHEWyigvFzzm94wbDeuC9K8QgHXprKNJW1QrtdR72C1KLXo7cB9rBlxPk6FWGXdjgn4mgM8FbLV0klAsgh3WvXHN2LMMRIrvzrwiAc9FNl9kd6P%2BEcOJ3ke1wPkvhb8PHNTlXl54sU96SLPfGxQ5BG0iOk5zRVayNzb9TB3Hz%2Bf%2Fpo1YnTBl8YuPclVkguySmQbVFRAbfKn6ZpqYCCuh836OuEvbMw443pSHHBsgEhSgTpRS07dmamwnu3tP%2FrK9ntjAswPN8w08n4wgY6pgGae%2F6THSblAY5to8xzFV6QpQkWoCfGKnFUGFI7B8mdifDfKmTDwNEeDLAujzFjfphYGJpsdKzsDIxypeJuDvN6hRetFvfCxqJ8c5W9wxC5nBlYPJST6%2FuO3j6077p3mhJdbmf2OMDcQU94M%2BJtjOymPD6TN3aRz4vqzhm6YV3V%2B7q0d506gO22NQMGQuzxjrG8Ka42W7rLnUTcLs8i8XLDfkpa%2B5I2&X-Amz-Signature=b01dda69ffd2095d64186f56b8e8f4f5a0b5ad7493ff6f394724567ea887d492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7LMXMD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHYovkO%2BXtRJZtcok6Q0gSdljZ4sT6ehOn%2FTCBloxAhvAiAQjWFi8OJSrWQ3tXAfEiGUvaeF2QKg4vlnS7OqtSyujir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMB2NdRjsELtOeboQ7KtwDbg5kq7w7hXMoiMxWsiQc8s1RxcHQzmbkkZV%2FYFM2gfdUrPUKHIsSNc%2BpSMgGm4YZH%2BREVzZZ2vFolC14PenDdGMmq52lWAAC72wYgld%2BprwaoxZ9R%2FSWVZSxwPSszVlmZA6AgX6u64z%2ByawqnnKP0xV3hug%2BmEFbw5NrIgmqko77POkfaUVJ7pm6ml5oXLJcc76uexIeHjzGcFxHRFPvnUrJg9MHIali5hG9n2K%2BhigXXUkCJ9RPVjFH1ChxSCJX5%2FXOEDemRkoYEDhTgd7KebE90gJtL2drXYFsnsQwbD%2FvChQWboD1fRym41l03hNQvVxgAz1HtGTaOxrWRiCHBVMCs%2FfhIXhoEDs2Df1YHuwXsn2ad8%2FHEWyigvFzzm94wbDeuC9K8QgHXprKNJW1QrtdR72C1KLXo7cB9rBlxPk6FWGXdjgn4mgM8FbLV0klAsgh3WvXHN2LMMRIrvzrwiAc9FNl9kd6P%2BEcOJ3ke1wPkvhb8PHNTlXl54sU96SLPfGxQ5BG0iOk5zRVayNzb9TB3Hz%2Bf%2Fpo1YnTBl8YuPclVkguySmQbVFRAbfKn6ZpqYCCuh836OuEvbMw443pSHHBsgEhSgTpRS07dmamwnu3tP%2FrK9ntjAswPN8w08n4wgY6pgGae%2F6THSblAY5to8xzFV6QpQkWoCfGKnFUGFI7B8mdifDfKmTDwNEeDLAujzFjfphYGJpsdKzsDIxypeJuDvN6hRetFvfCxqJ8c5W9wxC5nBlYPJST6%2FuO3j6077p3mhJdbmf2OMDcQU94M%2BJtjOymPD6TN3aRz4vqzhm6YV3V%2B7q0d506gO22NQMGQuzxjrG8Ka42W7rLnUTcLs8i8XLDfkpa%2B5I2&X-Amz-Signature=9831a9bfd37ce2926124ec87013fe37df137835b1c5206df102208b99940beff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
