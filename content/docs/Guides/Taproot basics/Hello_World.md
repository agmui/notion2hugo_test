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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KA2KSE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYIz7y0Aa72MCMlg4vD%2F9h%2FqQGalpJOXF3QW8H82fNcAiBg3%2FWNMLdIrZz2AEMn0bImiUYE2cxrpFLsoTy3MJib1yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ2AJESql%2FPp3PdWiKtwDTFc2JDaEMJrEcFgh0J0wXQi%2FgcWx6bkcSeHGbZTbxGy8lYS0CISsz74wAxtYJ7F2vRMdkXcpRE72%2BhQGTEmG8cSMDOIaA%2BtB6hxfj3OE8xEOqiH4jQMWipLaRqh9QlhyFKzqmtvZ700r40zqi8WPKzxqfrBT%2F3HOFG2NcUTrmMbkmGchJcC3NL1izOryeVsBNJCWhCCP9L5qpdwVIwL6lvFzpsJsYrYIWccz31ppu5yZ%2BeieGLizczhx0X0hUekMXMX%2FZ0h6Gc4%2Bsru2nlKPZPA9gAvNTutjgjiPvIAqRXd4Kj5aGrpiyN7o4CJJmJxFyPEobNbn9UYRTiRAb623CdYc2LTHFZrpBH87DCZO45Tighj2itAGKkMMxygZ5CU2BcRG%2FjIjzVmdn%2BOUVJShv4%2FaRdVLHyESyifXixYbwyf5vH%2FlHJTj2eSX1P3NAsPf8J%2Fw0I2ow3Y4W47gDeQl%2Fc0wCDV3IARA0lJN3UExm9K%2Bx6ZLwvqh4CfvsCJZ0aAJd9eejvSZx5Zia%2FHtSCOW3WfN%2FispLPV8fg6Mz08Wly96pWOa%2BuX%2BED0k8RjzaAs8r7huBpIhzZJaCEgvmrXyBEDps%2FVjQq0HDlsKOuXjpSVMMq%2BJbBEYyT9ToNkwsOipxAY6pgHR%2F33qwKm3mKEbW4%2Fm7NXoNUkM0BIeercH%2BnK2bCs4o11iVyNGYgDvhLN5Hdk%2FiavsvW%2FFpSvyfiTPSIU0WD9Tn%2B7FvBJlzGUW%2F23ud62vlAs4hQXqfO%2BMCypVVGCokNIrkNj9CTL3vlGWzmMWpl1hXjd0z3XhHxiT95kLK6PfFewOV39e2wZx58ylep0PsOEwarLzfKxFRT90vH0rkHCkTY9G4Va6&X-Amz-Signature=c2378414cb98d5fe31ab49597c93bf918fbe67ba306c9dc5f6c56e14c3ddc790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KA2KSE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYIz7y0Aa72MCMlg4vD%2F9h%2FqQGalpJOXF3QW8H82fNcAiBg3%2FWNMLdIrZz2AEMn0bImiUYE2cxrpFLsoTy3MJib1yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ2AJESql%2FPp3PdWiKtwDTFc2JDaEMJrEcFgh0J0wXQi%2FgcWx6bkcSeHGbZTbxGy8lYS0CISsz74wAxtYJ7F2vRMdkXcpRE72%2BhQGTEmG8cSMDOIaA%2BtB6hxfj3OE8xEOqiH4jQMWipLaRqh9QlhyFKzqmtvZ700r40zqi8WPKzxqfrBT%2F3HOFG2NcUTrmMbkmGchJcC3NL1izOryeVsBNJCWhCCP9L5qpdwVIwL6lvFzpsJsYrYIWccz31ppu5yZ%2BeieGLizczhx0X0hUekMXMX%2FZ0h6Gc4%2Bsru2nlKPZPA9gAvNTutjgjiPvIAqRXd4Kj5aGrpiyN7o4CJJmJxFyPEobNbn9UYRTiRAb623CdYc2LTHFZrpBH87DCZO45Tighj2itAGKkMMxygZ5CU2BcRG%2FjIjzVmdn%2BOUVJShv4%2FaRdVLHyESyifXixYbwyf5vH%2FlHJTj2eSX1P3NAsPf8J%2Fw0I2ow3Y4W47gDeQl%2Fc0wCDV3IARA0lJN3UExm9K%2Bx6ZLwvqh4CfvsCJZ0aAJd9eejvSZx5Zia%2FHtSCOW3WfN%2FispLPV8fg6Mz08Wly96pWOa%2BuX%2BED0k8RjzaAs8r7huBpIhzZJaCEgvmrXyBEDps%2FVjQq0HDlsKOuXjpSVMMq%2BJbBEYyT9ToNkwsOipxAY6pgHR%2F33qwKm3mKEbW4%2Fm7NXoNUkM0BIeercH%2BnK2bCs4o11iVyNGYgDvhLN5Hdk%2FiavsvW%2FFpSvyfiTPSIU0WD9Tn%2B7FvBJlzGUW%2F23ud62vlAs4hQXqfO%2BMCypVVGCokNIrkNj9CTL3vlGWzmMWpl1hXjd0z3XhHxiT95kLK6PfFewOV39e2wZx58ylep0PsOEwarLzfKxFRT90vH0rkHCkTY9G4Va6&X-Amz-Signature=f72960f489548282689847b24410067b2072f48c3cfeb711f58137c1f6fe9b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
