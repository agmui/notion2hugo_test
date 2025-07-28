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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642JEF75Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDxDgPAx1auuZgLOobzdy9kOSd0XOqLehf898M51Q4lkQIgBXllo8YoeYfTvx%2BvMcjAxf8BeHfjoHaSQVfd1KP9jaQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjTEjbPkMMp4E0xPSrcA0n0WeyPbqthy8jOcJnJCpaGOyY1wYThTy1ENSuDuGPkVHQtlDQmyvnj9gtsCvlP576TKs2EUe42OrFBSKM3BIFe9Rga4CsH1xBi0%2FBXMIby7xofGxVJAmsdm2AzwI4%2FWigBWKdDSgjmQmjDp18YrvYRviUte3yXQ7RsQSzlAB3nT3WGI8V4cghUtPBoQU56lH5QOkMKWzrnjZ7XSFYpKHfUiJjxxhXp5%2F6k7ZOXnzRZzWG8MSwTJNb452vQYEBToOYp0FTtrELJkQy557HIljtpOTRrCjPMfG7Notbf%2FQxEZcSN%2B0VzqGoxqInxG59BsslRNlIZ9TA1IGDhe5qGO6BWWqXJEPRjeLV9L631pWTqoc%2F0YxDhjtXs5muoeIHbpdcE7sVg%2FSvaTyUhbY04CUxLxVIICECNhM5uvuyYTmRhPvQiKuPzpUrU%2FBeMIhjGnt4mpAq6agWOWUVDHEjueDcUHJl22XCRcXSigd6Ki%2F98pxaCGQYc5ltrB0wC6eGM3H93ltw47vKSor0BW3wmLr7ocJJGzb2dveEwMC67a7x1G%2B%2F0XAyy4kDCDXBauUUhFHLsixYB2TR0023xx8T4612vtgNHZ7dbcRUa8iSbm5HbdQxaf9C9YzwLJfToML6NncQGOqUB3fVfgxmoS8KTXZ9nJ1nn0CSj1qMPZaNvR1QN9xXvJ79xpHC%2F2CrSpOSDPEX5zwZlfR6gw5aH12VeZla%2B%2BYOCzf7skN9hViTLWHkI4Yxy14H8I8LhvlnM%2F3lYmPyNR4ToFg3kZGsV%2FdOg%2F2YqksX%2FHLD6xQiepQxZ5fwdvnOV70xqqziPYoCH%2BPgrztcvlrcpd3lYkgxgTKD4feRWEql3m6E9E1TT&X-Amz-Signature=a64d7c1d01a5a8299191481e88a32f285b65e6f49335f4f4402aefaf7fd02b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642JEF75Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDxDgPAx1auuZgLOobzdy9kOSd0XOqLehf898M51Q4lkQIgBXllo8YoeYfTvx%2BvMcjAxf8BeHfjoHaSQVfd1KP9jaQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjTEjbPkMMp4E0xPSrcA0n0WeyPbqthy8jOcJnJCpaGOyY1wYThTy1ENSuDuGPkVHQtlDQmyvnj9gtsCvlP576TKs2EUe42OrFBSKM3BIFe9Rga4CsH1xBi0%2FBXMIby7xofGxVJAmsdm2AzwI4%2FWigBWKdDSgjmQmjDp18YrvYRviUte3yXQ7RsQSzlAB3nT3WGI8V4cghUtPBoQU56lH5QOkMKWzrnjZ7XSFYpKHfUiJjxxhXp5%2F6k7ZOXnzRZzWG8MSwTJNb452vQYEBToOYp0FTtrELJkQy557HIljtpOTRrCjPMfG7Notbf%2FQxEZcSN%2B0VzqGoxqInxG59BsslRNlIZ9TA1IGDhe5qGO6BWWqXJEPRjeLV9L631pWTqoc%2F0YxDhjtXs5muoeIHbpdcE7sVg%2FSvaTyUhbY04CUxLxVIICECNhM5uvuyYTmRhPvQiKuPzpUrU%2FBeMIhjGnt4mpAq6agWOWUVDHEjueDcUHJl22XCRcXSigd6Ki%2F98pxaCGQYc5ltrB0wC6eGM3H93ltw47vKSor0BW3wmLr7ocJJGzb2dveEwMC67a7x1G%2B%2F0XAyy4kDCDXBauUUhFHLsixYB2TR0023xx8T4612vtgNHZ7dbcRUa8iSbm5HbdQxaf9C9YzwLJfToML6NncQGOqUB3fVfgxmoS8KTXZ9nJ1nn0CSj1qMPZaNvR1QN9xXvJ79xpHC%2F2CrSpOSDPEX5zwZlfR6gw5aH12VeZla%2B%2BYOCzf7skN9hViTLWHkI4Yxy14H8I8LhvlnM%2F3lYmPyNR4ToFg3kZGsV%2FdOg%2F2YqksX%2FHLD6xQiepQxZ5fwdvnOV70xqqziPYoCH%2BPgrztcvlrcpd3lYkgxgTKD4feRWEql3m6E9E1TT&X-Amz-Signature=448e27d1db2b596000424277d3eea80d83988c343fe5c078418fa91140099b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
