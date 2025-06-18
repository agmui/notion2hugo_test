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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTJW7IW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr18maqHiFhoEX52ux%2FnZiK4VgofvUtlQeW9qevbbGnQIgVADPiN9IfbsyGp7BPxprzK5S%2FDPXM85w8P9C%2BzAInBEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt2PTsGzu%2FJVCjfrCrcAxtiETIc2%2BY%2BowmPIfQMQyA8kgFL%2BBoT90Z8HDiUDr433FUGDHHYzeWaFe09BZBdzo5GWOuJ56aZlgDI4jSyo7O5yT08BWGWBdHvTrerqnuQPQXqjXgaoCnTv6oX%2B7HaWpb%2F7hiaKGOveZ9WHJiK55VgpfOgYbsyNZr40bdIDkFz6sYIB1DEkDSkry89Xqwz4Na4%2BEGxstfQVkdSpp3FftPlmGwc%2BJUeKjtgBcY6Hm5c1ND3%2FR2u2RgRmgQvrm4yp1Z6wTtG5SHyFR9MmxOrfh%2Bx80Pjn5vbSQFKXyoXiDo%2BgsQW5D5MPHmJ0IwCRAuBDYP5Cl2aB7kcOQF%2F1PrquPmOYOK9LnyxiCRbiNunTY7tXbJ4YxWXYnaX0xN4ZLGXKqq3K26hiMenBByQvX6rWVD0DK3B9RqE%2BnqxiLQw4q7CeqtgI3GT3n78wU1XxpK1yrVS8lewsgr2AlE%2BkAKMzZ3dgZ4rL5aN3jcq47%2F7PvuliXK5gd3SNb0p%2FkMn7HS%2FRCODwIuQoiGfXwJZ%2BUrnNiSKuGD8jrdaR6E%2BrGv0161IrniCoG4QXKmk6zRBDDtCmqIHVAZBtu%2FZSlyDP3GSxcYqjLJ0lcOe44kU8W79rt7qSiYXqkxUIAwmd7fRMOK2ysIGOqUBhuZOKUrai%2Fs7iHgkp8vmjLZvsCcsd6sXbzr207VyvqWDVrqgfZyli%2Foco8l8cDg%2B3OuryxM93ffbk0sRTsoLW%2F1olxVKHDqXDR6BNl0R3K0Of49qa1cdG56hHJQhj%2Biio9JlOvz16aCuFFZLD8NVCx7Z1nvRgKNv0g3TsGMTxEeWCSSxpxXmCFEJMse4YIuFET11mvvWf2Xj9KV%2Bw%2Bx5UCzznA6g&X-Amz-Signature=afd6a6c615daf80871ddafdb45d4700afb6870b829baa1b46e1cfbb0432e7185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTJW7IW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr18maqHiFhoEX52ux%2FnZiK4VgofvUtlQeW9qevbbGnQIgVADPiN9IfbsyGp7BPxprzK5S%2FDPXM85w8P9C%2BzAInBEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt2PTsGzu%2FJVCjfrCrcAxtiETIc2%2BY%2BowmPIfQMQyA8kgFL%2BBoT90Z8HDiUDr433FUGDHHYzeWaFe09BZBdzo5GWOuJ56aZlgDI4jSyo7O5yT08BWGWBdHvTrerqnuQPQXqjXgaoCnTv6oX%2B7HaWpb%2F7hiaKGOveZ9WHJiK55VgpfOgYbsyNZr40bdIDkFz6sYIB1DEkDSkry89Xqwz4Na4%2BEGxstfQVkdSpp3FftPlmGwc%2BJUeKjtgBcY6Hm5c1ND3%2FR2u2RgRmgQvrm4yp1Z6wTtG5SHyFR9MmxOrfh%2Bx80Pjn5vbSQFKXyoXiDo%2BgsQW5D5MPHmJ0IwCRAuBDYP5Cl2aB7kcOQF%2F1PrquPmOYOK9LnyxiCRbiNunTY7tXbJ4YxWXYnaX0xN4ZLGXKqq3K26hiMenBByQvX6rWVD0DK3B9RqE%2BnqxiLQw4q7CeqtgI3GT3n78wU1XxpK1yrVS8lewsgr2AlE%2BkAKMzZ3dgZ4rL5aN3jcq47%2F7PvuliXK5gd3SNb0p%2FkMn7HS%2FRCODwIuQoiGfXwJZ%2BUrnNiSKuGD8jrdaR6E%2BrGv0161IrniCoG4QXKmk6zRBDDtCmqIHVAZBtu%2FZSlyDP3GSxcYqjLJ0lcOe44kU8W79rt7qSiYXqkxUIAwmd7fRMOK2ysIGOqUBhuZOKUrai%2Fs7iHgkp8vmjLZvsCcsd6sXbzr207VyvqWDVrqgfZyli%2Foco8l8cDg%2B3OuryxM93ffbk0sRTsoLW%2F1olxVKHDqXDR6BNl0R3K0Of49qa1cdG56hHJQhj%2Biio9JlOvz16aCuFFZLD8NVCx7Z1nvRgKNv0g3TsGMTxEeWCSSxpxXmCFEJMse4YIuFET11mvvWf2Xj9KV%2Bw%2Bx5UCzznA6g&X-Amz-Signature=00ca250befed5dd8a1e908e0c5e5af9742933fd3327726f4db9fd60b5e175a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
