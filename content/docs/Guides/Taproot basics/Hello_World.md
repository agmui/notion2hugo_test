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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4CYHYM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCenrq05Pf%2FAcbeBeHroDW7OE1a216KDUY7bVkHP9WOMgIgC5qJyGnjX2SHv5%2BL9cZwiuAEVtRijwGguyypWZ5ShRMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOM6VefQ%2FikattHsOyrcA0LAWtkEibm8UcYSXuWd70%2BZGecDp52PqKn91PPuBU8uEHBlkbGTtG5XDE15UG432QjQdHA3Ph9w8rON81IjW7HSO8kWQm40gANyTMb3a7ULnMxZAngmSQg0DYBxo3LgWYDKoEY4vPi9dLwcisFuOjmNw%2FSOpIdBS5qyRi3Ru6S72eLp%2BcMv2bR%2Bo5B0O0LQX92UwfCfd2rboy1fV99Ub30YIRG9R1KxrRjkJom7zVb4ZXtjTMT%2FpMZklkXE5zsk3ryZHdy5blKBJok7PzNV6gWfRvDXzBeH0HCLA5FzjA4q0%2FnBAi8mmjHdsd%2Fl25898HoqVPSZziNBQKf0kCZ7o27Z2zOh5OTqPaai%2FdHxVu1MxGy7Cx1v57ZYoBHrlnWvTMAYlc%2BptuRn6kpDAVrvW0XQh%2Fcr1%2BpqbTrzEBYiNXIFHQOpg3h%2FbzbZUvLTCESjnj7uRp87Yq97Y1vMtv%2F9Q6BUBYPINkgEUeT%2Bn9myt0J3LGUuTHldjkhR%2BHsYjhx4UIHYvU8cYVkz0qMObDLAywKg2kNgdexbPWjZuX%2FpMg%2B1x6du%2F9%2BhOh0kgSe2BPAb1ty%2BtADxkTiguVm7unTuD2CRFSRqnYC5yjZ1fv54y1odWNsAHacsWgvnv%2FegMIXk28EGOqUBHM%2BBePsz%2FuwcXraTqVz6Y3vUuupnQtAfs2KLh2E%2Bj0WB9lyCaAYKfEN28JAR0nj%2Fz6uPVeuJZUImGA6ljhWyd3Gs1fH4mhRyuaj1p0tIIbfO13OF4YX1LuNVjiiMBXLzUhqpW6NY7Cdy0vTy0%2FhPONxOVC71tzcXZ0waC4TzYF2Jl64p4ZD4Os79ONhp5nEnBC1SvXv8lx%2Fu64Cbt9FHfbqi%2BCcK&X-Amz-Signature=65b2c225e1780c5d9395e56ce6b04f24f52ff775033213d70366d79e0c41cae0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4CYHYM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCenrq05Pf%2FAcbeBeHroDW7OE1a216KDUY7bVkHP9WOMgIgC5qJyGnjX2SHv5%2BL9cZwiuAEVtRijwGguyypWZ5ShRMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOM6VefQ%2FikattHsOyrcA0LAWtkEibm8UcYSXuWd70%2BZGecDp52PqKn91PPuBU8uEHBlkbGTtG5XDE15UG432QjQdHA3Ph9w8rON81IjW7HSO8kWQm40gANyTMb3a7ULnMxZAngmSQg0DYBxo3LgWYDKoEY4vPi9dLwcisFuOjmNw%2FSOpIdBS5qyRi3Ru6S72eLp%2BcMv2bR%2Bo5B0O0LQX92UwfCfd2rboy1fV99Ub30YIRG9R1KxrRjkJom7zVb4ZXtjTMT%2FpMZklkXE5zsk3ryZHdy5blKBJok7PzNV6gWfRvDXzBeH0HCLA5FzjA4q0%2FnBAi8mmjHdsd%2Fl25898HoqVPSZziNBQKf0kCZ7o27Z2zOh5OTqPaai%2FdHxVu1MxGy7Cx1v57ZYoBHrlnWvTMAYlc%2BptuRn6kpDAVrvW0XQh%2Fcr1%2BpqbTrzEBYiNXIFHQOpg3h%2FbzbZUvLTCESjnj7uRp87Yq97Y1vMtv%2F9Q6BUBYPINkgEUeT%2Bn9myt0J3LGUuTHldjkhR%2BHsYjhx4UIHYvU8cYVkz0qMObDLAywKg2kNgdexbPWjZuX%2FpMg%2B1x6du%2F9%2BhOh0kgSe2BPAb1ty%2BtADxkTiguVm7unTuD2CRFSRqnYC5yjZ1fv54y1odWNsAHacsWgvnv%2FegMIXk28EGOqUBHM%2BBePsz%2FuwcXraTqVz6Y3vUuupnQtAfs2KLh2E%2Bj0WB9lyCaAYKfEN28JAR0nj%2Fz6uPVeuJZUImGA6ljhWyd3Gs1fH4mhRyuaj1p0tIIbfO13OF4YX1LuNVjiiMBXLzUhqpW6NY7Cdy0vTy0%2FhPONxOVC71tzcXZ0waC4TzYF2Jl64p4ZD4Os79ONhp5nEnBC1SvXv8lx%2Fu64Cbt9FHfbqi%2BCcK&X-Amz-Signature=0ed26c45782613fd2a5761301fda5d1d37f8172613e31de7b730f8c43576d429&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
