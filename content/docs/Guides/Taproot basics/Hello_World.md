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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHIDDOU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC11OB11%2FzxJlCHG%2BRJWJVkWcFjLSx0vJa0Im7t9zRCkAiEAlBpQF%2BBTyjmXzHroV%2F5hotysMGSuOhlehRRHq73TIxAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlON3izmXyk%2Bn8X%2FircA12TS%2Fqmz97TWYAkCK6fLS%2FJCCrHnqZRZaCBy1SdI8cn1LOoPJ3gT5D3O3VtGh0OOL9aOvAcw5kMJMpnv7id1jNsEI88wqzNW33V6M92xu0xFzzy2Kei7DaK1QHyAhMfVNIq%2BHqAD2TX1MxSXHckLwm4M%2BnC1SwbGfks4cCIUs3hAsZylUGtiT5KugHREML%2FOOVvtGjd825aKH9umFNdSdjATtHBgWgEbWBplxRKC5od7b3Z7qqdl%2BW2EDeW3NdCIBhD%2B4i2UpQKgbBLdQgqhbGNVlqPjG6KsS3BXOzV%2BM05y305UTLqNFFWKkSOe9U%2BgqqlADjoOPfDjtPWdhalDsXktgrCz19vSz4lk1gO3ZGNZbZG1o%2FJkZSs6Nk0EZMm%2B1HAtHYi0BkVXCFCm%2BJzHYQqVrvVa085lRizcbP0b%2F90B1I0nwgnNPAMuc%2Fw0C9%2FNdLgc0W788z9FDs4UeQjpnkmbaFojk223n2ywnm7WMJlFGOHR6%2BlQu1KzycWATIL%2BeHLDvJIZoGDrgYk5SwccbztLqGjMgc50LIsZU5AjT%2FLeCVQW3u6RR4q3OlQ6S5jO2HbJYLOti9b8PQQfyJnZ9tAcFlqz3y34ppX4qDm049cFF7tdlIx9gs2WXyKML7LjcMGOqUBcTW3zyZjx7N6HqWyKefBn0bH6jshDgEhJlQHYAJOS9w2q8jC0544yEecJhhVWPb785TVjU0UVCaAzx5DYMQoRx0qqHLhz618b6KsoMwVMg8nxhsyNSI2YQJKHfo2xhM6D9Ul1bvk0RrLoM%2BppRZBuhm%2BQwntKY2PYuF58dFvbgZws4PRuOOC1iyUudKHxXeYnxmddWLpbDtNmV1tyri5NA07F%2FFo&X-Amz-Signature=4b38cf63d100651f2dbf7159a24cfc4ca1ead5f5c782f5188c24cdcb80f27f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHIDDOU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC11OB11%2FzxJlCHG%2BRJWJVkWcFjLSx0vJa0Im7t9zRCkAiEAlBpQF%2BBTyjmXzHroV%2F5hotysMGSuOhlehRRHq73TIxAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlON3izmXyk%2Bn8X%2FircA12TS%2Fqmz97TWYAkCK6fLS%2FJCCrHnqZRZaCBy1SdI8cn1LOoPJ3gT5D3O3VtGh0OOL9aOvAcw5kMJMpnv7id1jNsEI88wqzNW33V6M92xu0xFzzy2Kei7DaK1QHyAhMfVNIq%2BHqAD2TX1MxSXHckLwm4M%2BnC1SwbGfks4cCIUs3hAsZylUGtiT5KugHREML%2FOOVvtGjd825aKH9umFNdSdjATtHBgWgEbWBplxRKC5od7b3Z7qqdl%2BW2EDeW3NdCIBhD%2B4i2UpQKgbBLdQgqhbGNVlqPjG6KsS3BXOzV%2BM05y305UTLqNFFWKkSOe9U%2BgqqlADjoOPfDjtPWdhalDsXktgrCz19vSz4lk1gO3ZGNZbZG1o%2FJkZSs6Nk0EZMm%2B1HAtHYi0BkVXCFCm%2BJzHYQqVrvVa085lRizcbP0b%2F90B1I0nwgnNPAMuc%2Fw0C9%2FNdLgc0W788z9FDs4UeQjpnkmbaFojk223n2ywnm7WMJlFGOHR6%2BlQu1KzycWATIL%2BeHLDvJIZoGDrgYk5SwccbztLqGjMgc50LIsZU5AjT%2FLeCVQW3u6RR4q3OlQ6S5jO2HbJYLOti9b8PQQfyJnZ9tAcFlqz3y34ppX4qDm049cFF7tdlIx9gs2WXyKML7LjcMGOqUBcTW3zyZjx7N6HqWyKefBn0bH6jshDgEhJlQHYAJOS9w2q8jC0544yEecJhhVWPb785TVjU0UVCaAzx5DYMQoRx0qqHLhz618b6KsoMwVMg8nxhsyNSI2YQJKHfo2xhM6D9Ul1bvk0RrLoM%2BppRZBuhm%2BQwntKY2PYuF58dFvbgZws4PRuOOC1iyUudKHxXeYnxmddWLpbDtNmV1tyri5NA07F%2FFo&X-Amz-Signature=6fc26309cef5b3254802bf1750782e21f755c02e591528fbcd20debbc84baefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
