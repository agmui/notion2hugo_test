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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3YJD22%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmy5eKYqLDL0wUIgCf0S5CzxiDKOmNLyD4D4v28F9INQIgfLYVyUupe0lIz4BQqozFNkloJDRjyfMQ8AZLDqp8kSIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAJHYCqc9BIZCzO23CrcAyvD5FEpyplxWBf77prlGTgD1brvsOq%2FAICflo7oRuQCKua%2F3hqf5KfJAyJATBByaH4Ifaae3Hk%2BQdqumG67%2BpiJTuQu4Qu8QWlz1oDHPRPypYjtVmviUzuK18%2BmjW79KTJ2IkHm1w30B0KMJlMU5YW59FRIsb4q2GtZboBhKLP3hegiaKrm8W3NsCfhRIbXqf0XWxdwMFOk4P2gIEwpskISbnoqnKNjJjeSzods0lThPpf1cIWryevusiesWeJX3xK%2FjVy4ZDPmk2im5h9utgUKBSJlBk%2F6%2BKV4vKhukLQWpLejiWUNrdv7%2BX6KV%2BrC7fZFakbsUSbIl2fczyLUY0GrrVY5Xab5Bs6shLWcUjGC%2FyMALYlI%2B%2B4w6f3jN6RKSXPOZky%2BReSHNh9i1cN%2BOLQh%2F%2BH4QrYpel9SZ9sxndyDUEDin9EztIA%2Fddxk7hnmQvChGSj3h%2BWneYVuaMCKWwDXJso8FdOSA9Kfl3740KAtQFkrqn1aOBgpb3j0YHXYMCiHsmQz2c3u8OrqKTeLms9BGSyLH70wj9Ph9D7K25kOIb8%2BouhXXoKoQAn7r9KAjR6gtxZ3C5Cbcw%2F6yOeT%2BcXUPzxglLrUB5qUGfDCOQBQlv%2FFcyuo5zU8uKsJMNWezb8GOqUBd%2FjnNLZOZxgNiHE7GEuT2C0fmhOQSqyByu0%2FEwMzaPQU5%2FENbocUzyPIDPxoI0AnGgWx9nBgq%2FukegF2mB1rvniMkyVm3PXUx9JKDO7RESa33TfhrGlChcaSIFIW%2BnFkfrrrdhIneBubQyAnIr%2FuJXzeUQ1fsgdoW0inUn8Lwvre%2FllVksI7dq93JlZZ3QaiAPqKMsUzIG2FkmZNa1y24tmx475D&X-Amz-Signature=98daf25c990105cf723f10b63f39a6b58205684dace6e19ed0e5508a3b54156a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3YJD22%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmy5eKYqLDL0wUIgCf0S5CzxiDKOmNLyD4D4v28F9INQIgfLYVyUupe0lIz4BQqozFNkloJDRjyfMQ8AZLDqp8kSIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAJHYCqc9BIZCzO23CrcAyvD5FEpyplxWBf77prlGTgD1brvsOq%2FAICflo7oRuQCKua%2F3hqf5KfJAyJATBByaH4Ifaae3Hk%2BQdqumG67%2BpiJTuQu4Qu8QWlz1oDHPRPypYjtVmviUzuK18%2BmjW79KTJ2IkHm1w30B0KMJlMU5YW59FRIsb4q2GtZboBhKLP3hegiaKrm8W3NsCfhRIbXqf0XWxdwMFOk4P2gIEwpskISbnoqnKNjJjeSzods0lThPpf1cIWryevusiesWeJX3xK%2FjVy4ZDPmk2im5h9utgUKBSJlBk%2F6%2BKV4vKhukLQWpLejiWUNrdv7%2BX6KV%2BrC7fZFakbsUSbIl2fczyLUY0GrrVY5Xab5Bs6shLWcUjGC%2FyMALYlI%2B%2B4w6f3jN6RKSXPOZky%2BReSHNh9i1cN%2BOLQh%2F%2BH4QrYpel9SZ9sxndyDUEDin9EztIA%2Fddxk7hnmQvChGSj3h%2BWneYVuaMCKWwDXJso8FdOSA9Kfl3740KAtQFkrqn1aOBgpb3j0YHXYMCiHsmQz2c3u8OrqKTeLms9BGSyLH70wj9Ph9D7K25kOIb8%2BouhXXoKoQAn7r9KAjR6gtxZ3C5Cbcw%2F6yOeT%2BcXUPzxglLrUB5qUGfDCOQBQlv%2FFcyuo5zU8uKsJMNWezb8GOqUBd%2FjnNLZOZxgNiHE7GEuT2C0fmhOQSqyByu0%2FEwMzaPQU5%2FENbocUzyPIDPxoI0AnGgWx9nBgq%2FukegF2mB1rvniMkyVm3PXUx9JKDO7RESa33TfhrGlChcaSIFIW%2BnFkfrrrdhIneBubQyAnIr%2FuJXzeUQ1fsgdoW0inUn8Lwvre%2FllVksI7dq93JlZZ3QaiAPqKMsUzIG2FkmZNa1y24tmx475D&X-Amz-Signature=8afa8dd4587f6489101218f93596270c05a618990c1d60d451d0da0e95324e06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
