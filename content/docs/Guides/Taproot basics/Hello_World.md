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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YOLD7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn3%2BcjCbvucNk3GdjCAROpBEq0nL9OF5DH0LyC2OFDiQIgfYhDXiSdJHDQLkpixKKK6576Vk4owxXVaEG2OyCN4w4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiImZpJlFsS7n%2BWOCrcA3G4QLdp1oYdJLObhp1qc1GLE%2FJwklHsrdyizpq5DzCf6XnmqX5wGDb3F32jEqs%2FMRlmda0hXJVVVtR85x%2BjEF4kKqQF3M3ELuUFU7P9bDUsyQpmEnSfWIO69Ycm05X1I4HX2vZASwiGNH5e1tvB7nhe2aYMyzLCOMJK1fkVxbe3hPkbKVg8Y8lEB90aNIl8Hcc7L3x7qK%2BwkSg38bQt0WRQSkdFguwKxh261Yi4a0a09iRm%2BSr4F%2B2uHqXAfK%2BKFU1M%2BXtNiIF%2BLYXACdkkiIXkyhyrTESjGBjrXEtPN0YJzjHBzqC9l32lXDAcq52GOMC1zzESGjhgnF3ffGsLJpPKrUzX4q5QbbLuYh3HUbttMFZ3sBqmDemvkTvgwpc1rS5NLe0gokYAs1P81GMz3JvoHX1nHpcwtz5woYLASWBFKoZOofaIxg7jZ7XMctiTYT2gvrk37i%2FNbpblSOH7PndsI1SvX0%2BjTTamjI1A%2FRPZiQ45QO0IBTPvxqJnyoe7DeQwQbISohTNPpQybcrkwQABzQhai0ZSdS6hFYGh8j9YwGzXr6t%2FJ1bkmdplU59%2F%2BwOR8nZtn8c850CR%2FwwwBBPxYT%2Bo7G%2BWyQct%2FvGvMiBsqNX3AdJziQMzxstRMKq6pcIGOqUBKFmQrucWzdvkvsb92LuZWjSMAos8dEZJHjTg4qgxsyTRCkW%2BhRl5x0pEfpuXE7rshQx0mdOwSPEof0ALayKjzThUqZU%2FVqi%2BMi28MhVIyE%2FHSw6kT6JXL9mwcBnFghErZQV%2BVXyNb%2Bjb%2BuKnXco4x9cAcRenBHzS2dp7vZED9mXG5s2%2BIhntHHnWbg%2BcJZned1YJsPEZx%2FdSMzIsExhlCTWoDh8r&X-Amz-Signature=76fcd0ea318532cc5d7330a20ec23f0e2e2479ea25c5ec78dca8785ebd980cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YOLD7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn3%2BcjCbvucNk3GdjCAROpBEq0nL9OF5DH0LyC2OFDiQIgfYhDXiSdJHDQLkpixKKK6576Vk4owxXVaEG2OyCN4w4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiImZpJlFsS7n%2BWOCrcA3G4QLdp1oYdJLObhp1qc1GLE%2FJwklHsrdyizpq5DzCf6XnmqX5wGDb3F32jEqs%2FMRlmda0hXJVVVtR85x%2BjEF4kKqQF3M3ELuUFU7P9bDUsyQpmEnSfWIO69Ycm05X1I4HX2vZASwiGNH5e1tvB7nhe2aYMyzLCOMJK1fkVxbe3hPkbKVg8Y8lEB90aNIl8Hcc7L3x7qK%2BwkSg38bQt0WRQSkdFguwKxh261Yi4a0a09iRm%2BSr4F%2B2uHqXAfK%2BKFU1M%2BXtNiIF%2BLYXACdkkiIXkyhyrTESjGBjrXEtPN0YJzjHBzqC9l32lXDAcq52GOMC1zzESGjhgnF3ffGsLJpPKrUzX4q5QbbLuYh3HUbttMFZ3sBqmDemvkTvgwpc1rS5NLe0gokYAs1P81GMz3JvoHX1nHpcwtz5woYLASWBFKoZOofaIxg7jZ7XMctiTYT2gvrk37i%2FNbpblSOH7PndsI1SvX0%2BjTTamjI1A%2FRPZiQ45QO0IBTPvxqJnyoe7DeQwQbISohTNPpQybcrkwQABzQhai0ZSdS6hFYGh8j9YwGzXr6t%2FJ1bkmdplU59%2F%2BwOR8nZtn8c850CR%2FwwwBBPxYT%2Bo7G%2BWyQct%2FvGvMiBsqNX3AdJziQMzxstRMKq6pcIGOqUBKFmQrucWzdvkvsb92LuZWjSMAos8dEZJHjTg4qgxsyTRCkW%2BhRl5x0pEfpuXE7rshQx0mdOwSPEof0ALayKjzThUqZU%2FVqi%2BMi28MhVIyE%2FHSw6kT6JXL9mwcBnFghErZQV%2BVXyNb%2Bjb%2BuKnXco4x9cAcRenBHzS2dp7vZED9mXG5s2%2BIhntHHnWbg%2BcJZned1YJsPEZx%2FdSMzIsExhlCTWoDh8r&X-Amz-Signature=6cf2ae2f890ec532469a4e59d87702f7288192f7c5931ef454e8412a260f2b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
