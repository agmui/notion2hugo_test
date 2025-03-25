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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2JXYAQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxOCEeDWZRHW7r5QPPt5RFs6M4w%2Bra8ohxHtg93S%2BhqQIgdmbCJneKR4XTVLvZFmaT4DIOTNSkVvJ2Hdr1DqLXRzAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDlUFRVrFiYGC3JiqSrcA9Ly4ZlP3Fo%2F1NO9vJw%2BvLWxAbPe3y625DxoWOWTvdlEyEFrnD6MinlrHnZrJmb74KMM8Tz3aBap1J%2F2h6oPFHtwDoW2VOkdQQqYsUvAhJxUhzAauOhTvugvQIcfCKuLedeHGMIuI32QVWmwh3BJ9Jjg36qLN4rtqy%2BL6Qk0B1xatuwncpd3md2i5Uh9hli3yA6%2FCsS7b2Flc3mf6NSahyBe9sMvdQHbQrZZ%2FU%2F9GCmPGq2phaeL%2B%2BHI58%2FAqJ0HCpJMc%2Bv0C6J1uJpZF9XW4YkeDi%2BFEGSXubrNaAPDcDWDC3xjSU6elbDx6XNt6MDkVuy6FvxYKsBtSzv6pek%2BNSGnc2bkFxct6l%2F1%2FsMkRUwXQ7sRrZmi7vfuZmBtn2ef%2B6hXQ%2Fq2rrXvyapdOn9zDT0T9JQTEp0m8RFhxneL2whNUGFbl8aVJ1Gzzn%2F9nF%2FoLpHOMxAqB1%2Fyx3KOfSzlafZgzM0xR%2FqH%2FJ1ZCqD6hbhwPa%2BfhbzosCso1iIxK4SYgoYKBheSqCIzm2GUTZ2Pe8QwpCaT6UprOCYTmZvM9p2r2mauycFyilo1%2Bl1IfevruiHZRHQelcRf2%2B9%2FU2Gr5V%2BV5GJQDNYr73Y5qOKt5JY5Hbh0GQNVrIrde7x2MJuFi78GOqUBwN9tJ0zkY5JuLZLY4Io%2Fjs42iSILgj0T8lUJj1EDg3oAS6ZWkEjzfpbJfNnfYr19pzx38FTSqkYMKYmF1tmflXGGyX31cJFo54UuK7LndisdBaEyre%2BJQwfqyZg4Ks0uWtijC3rLgizKVviOFi%2BDTHhpk12L8QyOPK16BqVMlnQtX%2Fghl5mzUb1O0bIS%2FENsEigogTwaAEjW9uZccZpSAn43W9N%2F&X-Amz-Signature=bdf0485fe4ae133b601b4897807a38e4b4a9d4461ac22f8b9c5009b067decd10&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2JXYAQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxOCEeDWZRHW7r5QPPt5RFs6M4w%2Bra8ohxHtg93S%2BhqQIgdmbCJneKR4XTVLvZFmaT4DIOTNSkVvJ2Hdr1DqLXRzAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDlUFRVrFiYGC3JiqSrcA9Ly4ZlP3Fo%2F1NO9vJw%2BvLWxAbPe3y625DxoWOWTvdlEyEFrnD6MinlrHnZrJmb74KMM8Tz3aBap1J%2F2h6oPFHtwDoW2VOkdQQqYsUvAhJxUhzAauOhTvugvQIcfCKuLedeHGMIuI32QVWmwh3BJ9Jjg36qLN4rtqy%2BL6Qk0B1xatuwncpd3md2i5Uh9hli3yA6%2FCsS7b2Flc3mf6NSahyBe9sMvdQHbQrZZ%2FU%2F9GCmPGq2phaeL%2B%2BHI58%2FAqJ0HCpJMc%2Bv0C6J1uJpZF9XW4YkeDi%2BFEGSXubrNaAPDcDWDC3xjSU6elbDx6XNt6MDkVuy6FvxYKsBtSzv6pek%2BNSGnc2bkFxct6l%2F1%2FsMkRUwXQ7sRrZmi7vfuZmBtn2ef%2B6hXQ%2Fq2rrXvyapdOn9zDT0T9JQTEp0m8RFhxneL2whNUGFbl8aVJ1Gzzn%2F9nF%2FoLpHOMxAqB1%2Fyx3KOfSzlafZgzM0xR%2FqH%2FJ1ZCqD6hbhwPa%2BfhbzosCso1iIxK4SYgoYKBheSqCIzm2GUTZ2Pe8QwpCaT6UprOCYTmZvM9p2r2mauycFyilo1%2Bl1IfevruiHZRHQelcRf2%2B9%2FU2Gr5V%2BV5GJQDNYr73Y5qOKt5JY5Hbh0GQNVrIrde7x2MJuFi78GOqUBwN9tJ0zkY5JuLZLY4Io%2Fjs42iSILgj0T8lUJj1EDg3oAS6ZWkEjzfpbJfNnfYr19pzx38FTSqkYMKYmF1tmflXGGyX31cJFo54UuK7LndisdBaEyre%2BJQwfqyZg4Ks0uWtijC3rLgizKVviOFi%2BDTHhpk12L8QyOPK16BqVMlnQtX%2Fghl5mzUb1O0bIS%2FENsEigogTwaAEjW9uZccZpSAn43W9N%2F&X-Amz-Signature=93e489836507ac392fb8ab70175effd3bc2d459092b792e4d72ee6fc918446b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
