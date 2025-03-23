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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MC2KVO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICR44AFMOR1r8uAdtC2Yp%2FaZIE%2BqJlwG2jE8JmLjAZohAiEAtYlkXGIjhzgEKOuFp8V9fr1ajod5OOQxM1%2F9lw9iYs0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDmLdM2rf9IlU6PgCrcA7ADN9ne%2FR952NoJO60Jv2OhyLwUV7H2F%2BVW2Vgki6OJ55j%2FYOa7EHT2kzWOMHQSKVCzMtbKUl%2BLkuOs%2FKuBqpV4jJy8jaKJO2sjN7mrmm5j%2BOoD2j6L0wH2fPhFfe6yASczNbQB2fgc%2BQZwdF0rFTJ1KhhJIfA1QJI%2BBsRT70yYtZTAXKr9L%2ButgT12Zb7r6QeNTDqau9GgswD%2FCCuZIYcwYYDG%2BRf9Lhp0HEvSTplBMP2BE%2Br5hlIMObiAlh35AntujGWLaKdI%2B5348n83ilsX8oybMHW57iSaPf%2BW6BLBUWzWXMyIZ0Z047nwIfXgjdj8zyeKmBk5vdSP%2BlvxxIrYQcErBFKgHKqBxUWq6XhF3L9znTWOwxA0y%2B8jYYIHHDyc%2FuQpuYlxsC85sz14KkybppbtHZJXbTxlj1WOzNOzefAP2Wp9IcviYacWAU8xq7hbpsEz%2Bo8fW3yyelk%2B7xm%2By5LDEp6xOuwmlTfSg2%2BLqqEvDCafL4LvMs5grK703NPes9tZq63ZRWz6kwhoMNNvIR8OVF9lN0tegV%2FkNMDWRWR6u%2Fvc6RRpPbae9SBIconw4O%2Bw1OcmhbTCuisTGTBUP1ptu4uWF5SBKtjXr%2BdSj2E1htc2K1nsOU9GMIO2%2FL4GOqUBicUaN9pG2ycUiSh5gZYYIWV0A36KAk9BYgvXDKTFF65DYJsd24bjHR30y9C9dfh35SFp%2Bm1q9dCg4MHqyiPEwYcsNptgedEGPTrSStj2PZv%2BzkykVxpXvQ%2Bmcvkqixz0d35bftGn9bDvxJEFafW0bkXJMhWutIYIdhJvjfdGficlE4h9ViCyQ22i5%2FfPRDDfvME8NcReoOPcNKstGqflXT22tit3&X-Amz-Signature=c3473bf1aeb87fae4da0f8beb6c8c0cba5a1e4148f2a0d1b8b59257d820063e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MC2KVO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICR44AFMOR1r8uAdtC2Yp%2FaZIE%2BqJlwG2jE8JmLjAZohAiEAtYlkXGIjhzgEKOuFp8V9fr1ajod5OOQxM1%2F9lw9iYs0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDmLdM2rf9IlU6PgCrcA7ADN9ne%2FR952NoJO60Jv2OhyLwUV7H2F%2BVW2Vgki6OJ55j%2FYOa7EHT2kzWOMHQSKVCzMtbKUl%2BLkuOs%2FKuBqpV4jJy8jaKJO2sjN7mrmm5j%2BOoD2j6L0wH2fPhFfe6yASczNbQB2fgc%2BQZwdF0rFTJ1KhhJIfA1QJI%2BBsRT70yYtZTAXKr9L%2ButgT12Zb7r6QeNTDqau9GgswD%2FCCuZIYcwYYDG%2BRf9Lhp0HEvSTplBMP2BE%2Br5hlIMObiAlh35AntujGWLaKdI%2B5348n83ilsX8oybMHW57iSaPf%2BW6BLBUWzWXMyIZ0Z047nwIfXgjdj8zyeKmBk5vdSP%2BlvxxIrYQcErBFKgHKqBxUWq6XhF3L9znTWOwxA0y%2B8jYYIHHDyc%2FuQpuYlxsC85sz14KkybppbtHZJXbTxlj1WOzNOzefAP2Wp9IcviYacWAU8xq7hbpsEz%2Bo8fW3yyelk%2B7xm%2By5LDEp6xOuwmlTfSg2%2BLqqEvDCafL4LvMs5grK703NPes9tZq63ZRWz6kwhoMNNvIR8OVF9lN0tegV%2FkNMDWRWR6u%2Fvc6RRpPbae9SBIconw4O%2Bw1OcmhbTCuisTGTBUP1ptu4uWF5SBKtjXr%2BdSj2E1htc2K1nsOU9GMIO2%2FL4GOqUBicUaN9pG2ycUiSh5gZYYIWV0A36KAk9BYgvXDKTFF65DYJsd24bjHR30y9C9dfh35SFp%2Bm1q9dCg4MHqyiPEwYcsNptgedEGPTrSStj2PZv%2BzkykVxpXvQ%2Bmcvkqixz0d35bftGn9bDvxJEFafW0bkXJMhWutIYIdhJvjfdGficlE4h9ViCyQ22i5%2FfPRDDfvME8NcReoOPcNKstGqflXT22tit3&X-Amz-Signature=ea45c9e657645edb53e17e21b140681b1282587806c5ac828456706c874f797c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
