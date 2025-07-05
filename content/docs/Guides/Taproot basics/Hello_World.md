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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRTGCG3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICQZu11hGeRnSYxHrGYy65ZnwEjekjq4p%2FmC%2BFsIQ%2BKXAiAvSMKkrwrzxhb0%2Bvn2BUHmbR7Gw%2BJeFvMwY6sSQcyszSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZL7PU9T44ri7mAQUKtwD8mUfKPuDyRDvwJpv1scs5OPIAVcII1H7woElODYVl4d18VGkh%2Fnxn6ZnX%2FmMgoNpB6F0Z24jBWw5FqcL1xtW4j6HvPG1I9Ohaj0x49JtEZ1I5K%2F2XCoVahJZ1DZtvTPRwM43vBqCv4aE42VR9%2FM6lluL2EGZk68GvZgxv2aszd32Q8fJs1jw7GxOliCsnhNHQ1dSgI3WVxndG5FYhNXmoSaekS%2BT8T2JODZbs%2BExPYox5y0947FyN%2B1fno6sWv62n0RpkeWD6gygDSjJn0jmLiWa7hiShby9kUXqyFGhf8Kac7d82dq7CeBx%2BURk2zhfNrc39RW9lsptoj%2F7zFbfjRtSUuHwOjpBeb%2FpjWepOFX8lsLuVWH57Qn%2FHBI5HZeZR1YWDrAqBKVZe0p%2Fk89uk5DW5sifTAVw7l3q3ijyJumexk3eGWLs3ZfDhnKtk55B47FITmJ4Hm4GYVCDvOVUI6lwE1CzUN%2FAOaCnA02ofZgW1vGHI261y41ofsB%2Fm3F93fMOGQ2JmZ28HrN7kQHew0E6FfdguQVRhs3GBum8M9I7XwKg8hu9YJm%2FUp1AXNYianKtPsBQToQRcbMVbScqwffl1ciCAUymZDSXpg6vgwLuWvYVQ1mZJMoK24Awud2kwwY6pgHL2%2F3c0agJfHuixUXs9IK3bxEcqjqiKsvx4nVL1zFpkZRkXMtqgXzR0fV5ptfOp%2FfC89jKgNEg53ufB81tLCnBNBHInPBqXjzjys83rMok%2B%2BnLQg7eJel1oEPldNTYmj%2BQxEJZgJPSICxhsCbojYkhqPtLWoOSJaQvX7pS9bVPRSII7vtkfrbB%2Bz1DTKsARaz9G1Y8GhhX48a1B9svcRyXHVXAtgqp&X-Amz-Signature=5e3009d3991c7568876bb44efd5b16d356d1db5e64fd30c3e886a7ba2480cad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRTGCG3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICQZu11hGeRnSYxHrGYy65ZnwEjekjq4p%2FmC%2BFsIQ%2BKXAiAvSMKkrwrzxhb0%2Bvn2BUHmbR7Gw%2BJeFvMwY6sSQcyszSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZL7PU9T44ri7mAQUKtwD8mUfKPuDyRDvwJpv1scs5OPIAVcII1H7woElODYVl4d18VGkh%2Fnxn6ZnX%2FmMgoNpB6F0Z24jBWw5FqcL1xtW4j6HvPG1I9Ohaj0x49JtEZ1I5K%2F2XCoVahJZ1DZtvTPRwM43vBqCv4aE42VR9%2FM6lluL2EGZk68GvZgxv2aszd32Q8fJs1jw7GxOliCsnhNHQ1dSgI3WVxndG5FYhNXmoSaekS%2BT8T2JODZbs%2BExPYox5y0947FyN%2B1fno6sWv62n0RpkeWD6gygDSjJn0jmLiWa7hiShby9kUXqyFGhf8Kac7d82dq7CeBx%2BURk2zhfNrc39RW9lsptoj%2F7zFbfjRtSUuHwOjpBeb%2FpjWepOFX8lsLuVWH57Qn%2FHBI5HZeZR1YWDrAqBKVZe0p%2Fk89uk5DW5sifTAVw7l3q3ijyJumexk3eGWLs3ZfDhnKtk55B47FITmJ4Hm4GYVCDvOVUI6lwE1CzUN%2FAOaCnA02ofZgW1vGHI261y41ofsB%2Fm3F93fMOGQ2JmZ28HrN7kQHew0E6FfdguQVRhs3GBum8M9I7XwKg8hu9YJm%2FUp1AXNYianKtPsBQToQRcbMVbScqwffl1ciCAUymZDSXpg6vgwLuWvYVQ1mZJMoK24Awud2kwwY6pgHL2%2F3c0agJfHuixUXs9IK3bxEcqjqiKsvx4nVL1zFpkZRkXMtqgXzR0fV5ptfOp%2FfC89jKgNEg53ufB81tLCnBNBHInPBqXjzjys83rMok%2B%2BnLQg7eJel1oEPldNTYmj%2BQxEJZgJPSICxhsCbojYkhqPtLWoOSJaQvX7pS9bVPRSII7vtkfrbB%2Bz1DTKsARaz9G1Y8GhhX48a1B9svcRyXHVXAtgqp&X-Amz-Signature=a5546189c2daf92cf48c94c51e0e3e74372abf2a8da9b687409823a3edaf6231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
