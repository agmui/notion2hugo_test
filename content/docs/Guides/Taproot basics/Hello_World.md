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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDZCP2U%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp6VzxMALZdXPDr4o%2FkL1UnyxCDXRflt6pddzrUQg4bQIgLRBv8scUbdTpuuYAHuEKTTpUaQaXkAyAl1PNBZfsi3gqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5BV6S9S7MXplvlcCrcA%2FQ6eN10exV99pXMNJGtp50QETw3KxkugswcEHuIn7Gal26EFLdRLnt3TBwGisd%2F87YCf2daB7xhAp3vvGdHmoILp10Vg09uVt%2FvLx7N9qZAGXU%2FWEjR5mYtuEU4UBZNgcoebnCxgd65QXrO8WDOXyLUIMU9X5b2AslDwneMZO8xktLqDOvwYEndx458mBwhyAd9RG18D%2F4fyRqF6vHyWG95YNzQpk1bRRrJR8mPITvhb%2BPAy0swXt6uPxVmttI5gVjwvA6LKQpE1XIoMm%2FHZ3pZdav%2F%2Fc1KQvxMiEQy3i%2F%2FrbTo9JTc7s8%2F39Ey9jQDRD3kV98sAtsxyz2GhNGuRtHYKJPf2TVXfy%2FGPd0ZAV%2FWYEfgo8%2B4GougeGdjZd5y2W14w6sqtkqZSPZkdDk1iweZCHAXHmOFnlbYdzTtkFaY9EGuuZH9K6veJW4nASlh1PU54RxiypHkCWbMmXMKcXttQwxRi9UOH0lbW%2BiOZLtL2V%2B7cLmdQWuqp1X3AGaQ0b2mSVlY%2BlJH3y2OWhUtrIMS85VSCnOXMbuUHhCWJGW%2FpREe9kybkSXgT2h8OnoBZcB8WpDsOefywaj2c1mAjFPKJsbaA5Udyd0x%2BqbyAs1yqfnWquR0kSeOMCMpMKey6r0GOqUB5DM%2B8YeH6oXZsIoKPm6pRGVHZngXa5%2FqFkHOWiUQOt1HvqG7zDgnXMTWRNhgzq5%2BKCBV%2FebxWbTNN0RT%2BTa2G7%2BOa4gij0TjFIYAT0dnvoIPWgSog8tzIFWcMqRNHP%2FgRu2ikik%2Fyr7PZ07Kg6fgEXJCh1P0IMhQt16NTeSnyZvK7atCdOnxV8GDpEb%2B0YbFhBzlFsmUPNBpUbYGpTlXN4gDO7qB&X-Amz-Signature=dc5c7e30adfdebf86e8f812828a523c6e12ce8025c0288455fa06ae5015672b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDZCP2U%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp6VzxMALZdXPDr4o%2FkL1UnyxCDXRflt6pddzrUQg4bQIgLRBv8scUbdTpuuYAHuEKTTpUaQaXkAyAl1PNBZfsi3gqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5BV6S9S7MXplvlcCrcA%2FQ6eN10exV99pXMNJGtp50QETw3KxkugswcEHuIn7Gal26EFLdRLnt3TBwGisd%2F87YCf2daB7xhAp3vvGdHmoILp10Vg09uVt%2FvLx7N9qZAGXU%2FWEjR5mYtuEU4UBZNgcoebnCxgd65QXrO8WDOXyLUIMU9X5b2AslDwneMZO8xktLqDOvwYEndx458mBwhyAd9RG18D%2F4fyRqF6vHyWG95YNzQpk1bRRrJR8mPITvhb%2BPAy0swXt6uPxVmttI5gVjwvA6LKQpE1XIoMm%2FHZ3pZdav%2F%2Fc1KQvxMiEQy3i%2F%2FrbTo9JTc7s8%2F39Ey9jQDRD3kV98sAtsxyz2GhNGuRtHYKJPf2TVXfy%2FGPd0ZAV%2FWYEfgo8%2B4GougeGdjZd5y2W14w6sqtkqZSPZkdDk1iweZCHAXHmOFnlbYdzTtkFaY9EGuuZH9K6veJW4nASlh1PU54RxiypHkCWbMmXMKcXttQwxRi9UOH0lbW%2BiOZLtL2V%2B7cLmdQWuqp1X3AGaQ0b2mSVlY%2BlJH3y2OWhUtrIMS85VSCnOXMbuUHhCWJGW%2FpREe9kybkSXgT2h8OnoBZcB8WpDsOefywaj2c1mAjFPKJsbaA5Udyd0x%2BqbyAs1yqfnWquR0kSeOMCMpMKey6r0GOqUB5DM%2B8YeH6oXZsIoKPm6pRGVHZngXa5%2FqFkHOWiUQOt1HvqG7zDgnXMTWRNhgzq5%2BKCBV%2FebxWbTNN0RT%2BTa2G7%2BOa4gij0TjFIYAT0dnvoIPWgSog8tzIFWcMqRNHP%2FgRu2ikik%2Fyr7PZ07Kg6fgEXJCh1P0IMhQt16NTeSnyZvK7atCdOnxV8GDpEb%2B0YbFhBzlFsmUPNBpUbYGpTlXN4gDO7qB&X-Amz-Signature=5b11294917111bacdce9af32ba0a52f77e4f0db86a99659fb17d864325dde892&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
