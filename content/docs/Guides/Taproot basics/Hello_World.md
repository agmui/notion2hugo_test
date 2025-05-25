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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5M2OFE6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIE4pqFlTp776iIB8GLp%2FHkzeZB1DBHsaf4vvtIsC1ksAAiEA8GhjHP7yYgU43alPlZ%2FoTAw1wvSPav71KZM3uhcR40wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIOXEfQZUbcWxiuWwSrcA1NzNW1bhbUWv5Z9TUVaABU7EJDIZTPfif6NUXbnLROQjfUeWvFctg9cFUua8e2kI519m6IEfheLBLBZfEflVPF5NMo5sw0SWasxNdHKhtfpukiQfxYWD77Ij4EUj6dquLOMMZwWTerkAHb4sd9gTMVmEHsOTo1GbUQTJRmeQJ9OTeLXHC%2FSNVW4nuKs%2BqwisqNUEayloSyKAuHDxaQokShvalBkpY%2B1yImdUZNMeMdj7pe3YFPaEHz%2FYofho1ca78F%2BzGo55wEPOHlXGIVigYSn0KdWQGwaFHs5YRi8y9dqyWNKmgXhMRgpsxYnRRI8kMPMehTrKTy4q%2FvQLIRs8431ENQBaDOXbTVd1kfG6%2BrGXDch%2BP3MVvC4OKFgjCsAEp%2BU4lP62K9nZDXUuxxawvxeUCgME1aNGEH0GHuldZ6tpvors7O91kd3Kc%2Bs1LDMSROQJBgPeMNHkNJT7zmyMGDN8lwH9roQY0Su9AtdAlUHmJIVQIOGuKUZbaOX00qQ0dL3X%2Fr9qTBVlvuizrCV2ufjRjxwIPuPsh4ZthduzAzLxxF1fL7OM%2FBQzhANFc0zwv05urz3VjBR4TA8y%2FA8rXJivC73tgWDK9wOB2QVqm%2FCcqpl2mbnj1R7ax1fMJjey8EGOqUBkCMScTZtWWKlTg0uRJYMZGLz7llot%2F7DnVHMVnVq0DpujYMWq5DAJ%2BEmtNiYgqYIboK%2Bsnmsr0OnIAvsGULvadTfcsrHMqtUfo6tJo053t4niDDmzWULnN6Yku1iyAgL%2F3MaYUgjyw5pQiBfbpsvoI%2B%2Ba1GzFMxPEoLV1tG9Zw5CDkmVIWTu5OpODIM7NpjaFQtK2WW5ApKx9CqXZsJlhTHK3NVp&X-Amz-Signature=36728811da19c69562dc7d47bf2cf70dab237bfebad1e4ddea43ff07ccada16c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5M2OFE6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIE4pqFlTp776iIB8GLp%2FHkzeZB1DBHsaf4vvtIsC1ksAAiEA8GhjHP7yYgU43alPlZ%2FoTAw1wvSPav71KZM3uhcR40wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIOXEfQZUbcWxiuWwSrcA1NzNW1bhbUWv5Z9TUVaABU7EJDIZTPfif6NUXbnLROQjfUeWvFctg9cFUua8e2kI519m6IEfheLBLBZfEflVPF5NMo5sw0SWasxNdHKhtfpukiQfxYWD77Ij4EUj6dquLOMMZwWTerkAHb4sd9gTMVmEHsOTo1GbUQTJRmeQJ9OTeLXHC%2FSNVW4nuKs%2BqwisqNUEayloSyKAuHDxaQokShvalBkpY%2B1yImdUZNMeMdj7pe3YFPaEHz%2FYofho1ca78F%2BzGo55wEPOHlXGIVigYSn0KdWQGwaFHs5YRi8y9dqyWNKmgXhMRgpsxYnRRI8kMPMehTrKTy4q%2FvQLIRs8431ENQBaDOXbTVd1kfG6%2BrGXDch%2BP3MVvC4OKFgjCsAEp%2BU4lP62K9nZDXUuxxawvxeUCgME1aNGEH0GHuldZ6tpvors7O91kd3Kc%2Bs1LDMSROQJBgPeMNHkNJT7zmyMGDN8lwH9roQY0Su9AtdAlUHmJIVQIOGuKUZbaOX00qQ0dL3X%2Fr9qTBVlvuizrCV2ufjRjxwIPuPsh4ZthduzAzLxxF1fL7OM%2FBQzhANFc0zwv05urz3VjBR4TA8y%2FA8rXJivC73tgWDK9wOB2QVqm%2FCcqpl2mbnj1R7ax1fMJjey8EGOqUBkCMScTZtWWKlTg0uRJYMZGLz7llot%2F7DnVHMVnVq0DpujYMWq5DAJ%2BEmtNiYgqYIboK%2Bsnmsr0OnIAvsGULvadTfcsrHMqtUfo6tJo053t4niDDmzWULnN6Yku1iyAgL%2F3MaYUgjyw5pQiBfbpsvoI%2B%2Ba1GzFMxPEoLV1tG9Zw5CDkmVIWTu5OpODIM7NpjaFQtK2WW5ApKx9CqXZsJlhTHK3NVp&X-Amz-Signature=b687cb25c7141e555f72ebfee4e32b815379510854a8afa8615d3b8993e51ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
