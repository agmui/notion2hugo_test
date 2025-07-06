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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2SBIAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG%2BereMC6UGguNONREBhmlY76gnlT2bF%2BAMlzLARju1PAiEAjB%2FZFp5ePhO6axxhYY2VvicCalDLVa6scov9TN6HxMAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNK%2FAH0o14uSVS%2F0QircA%2BHYB8wC4%2FR1hm4iAycODn26jFQplz%2FsI6UIySnrcd03A30gceVb%2Fw%2FZIHJfqTu1WKc1leuABeLqPfBYRbxmMOujZEQx%2F8vWevCx6EXy36hlaKCi2fJste5Ne4jx9UqabeH8PTaWHGAVmrKTaL3XcCXgTE90h%2BTh9CAzzEFnu86ghfISpSFo7wuHJqgP7QTTiObDc49lfPZAy6J9PO%2BgVlg%2B6s7eO6kDvf9ukkd6%2FJ5M7O1HtQzTDyUxPkDRLa4nFVI0i7Ga3cCwgWv1QcyttIyxLjS9FcFrDBHkVx2X6nBLxJ9UiNXZ78M4YTsNRMyqdrZ3AfG3nuH%2B02tDa6utzHvrZ9g3KG44JF%2FC01RVtvGgfnKBqQOvKJ4ahce%2Btr6qRiLPCybOiILejg9%2FTf98o%2FiKPlxWvS5JY3cAgnG9GDoE6H79oR7RFwHQpNnY60nYIIF5crJ7jNQz0RqaZbffVlZyi%2FVzBx42EK%2FW9s5Nh1jwCslDXH%2Frz4Zu0gkggZZdQ6PYvTzvIfYwopUMwzXVtVyauN3pKQOy1R1WyxBUpHyxHyaMfa0toDdqi6wmYb%2BwJmNvQ65Nl%2BDUgGajrMlcFa%2F49Vi%2BvqeUDADCvzO2CeeYNdgEn2YHG%2By5gjHyMNmvqMMGOqUBoNphFKYmXhAR%2BqDgVrRsL%2B8YZXzLDu%2FLh715G%2FCeltBI9RWS91DplXvpAGsg5VDjp%2F0v3vKDUmAOOAZrCYizLbpgW%2FIE6xUaw7Jx0eVUXZuoJsFkyZP7y6rZbYYkC4%2BkJkd9NcEGmyP7nvQm6gKFRzB5SMVAcQxPsor%2FJNOqQrDLj2oZSc9HxEH8ZqaSQqiLzjhFDXkAPplLehR%2B7IVki67TRlqq&X-Amz-Signature=8b1f2b0b279b9d97f7fa8b79207b6054f8314a1d01906a25889c9dc6e572f687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2SBIAQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG%2BereMC6UGguNONREBhmlY76gnlT2bF%2BAMlzLARju1PAiEAjB%2FZFp5ePhO6axxhYY2VvicCalDLVa6scov9TN6HxMAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNK%2FAH0o14uSVS%2F0QircA%2BHYB8wC4%2FR1hm4iAycODn26jFQplz%2FsI6UIySnrcd03A30gceVb%2Fw%2FZIHJfqTu1WKc1leuABeLqPfBYRbxmMOujZEQx%2F8vWevCx6EXy36hlaKCi2fJste5Ne4jx9UqabeH8PTaWHGAVmrKTaL3XcCXgTE90h%2BTh9CAzzEFnu86ghfISpSFo7wuHJqgP7QTTiObDc49lfPZAy6J9PO%2BgVlg%2B6s7eO6kDvf9ukkd6%2FJ5M7O1HtQzTDyUxPkDRLa4nFVI0i7Ga3cCwgWv1QcyttIyxLjS9FcFrDBHkVx2X6nBLxJ9UiNXZ78M4YTsNRMyqdrZ3AfG3nuH%2B02tDa6utzHvrZ9g3KG44JF%2FC01RVtvGgfnKBqQOvKJ4ahce%2Btr6qRiLPCybOiILejg9%2FTf98o%2FiKPlxWvS5JY3cAgnG9GDoE6H79oR7RFwHQpNnY60nYIIF5crJ7jNQz0RqaZbffVlZyi%2FVzBx42EK%2FW9s5Nh1jwCslDXH%2Frz4Zu0gkggZZdQ6PYvTzvIfYwopUMwzXVtVyauN3pKQOy1R1WyxBUpHyxHyaMfa0toDdqi6wmYb%2BwJmNvQ65Nl%2BDUgGajrMlcFa%2F49Vi%2BvqeUDADCvzO2CeeYNdgEn2YHG%2By5gjHyMNmvqMMGOqUBoNphFKYmXhAR%2BqDgVrRsL%2B8YZXzLDu%2FLh715G%2FCeltBI9RWS91DplXvpAGsg5VDjp%2F0v3vKDUmAOOAZrCYizLbpgW%2FIE6xUaw7Jx0eVUXZuoJsFkyZP7y6rZbYYkC4%2BkJkd9NcEGmyP7nvQm6gKFRzB5SMVAcQxPsor%2FJNOqQrDLj2oZSc9HxEH8ZqaSQqiLzjhFDXkAPplLehR%2B7IVki67TRlqq&X-Amz-Signature=d2137d957391ecfce4c16d8c98c3a3c05b38962af6c2c6f7c7e9e4fda4697f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
