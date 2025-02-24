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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUS3I2X2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBDLcDRT5eBUr%2FK2rq3B6lic9qHXhQzswc8Sy0DOJWugIgf%2Fj6ml0C%2FFf%2B4ZFKyU%2FHBfGLMvLAc%2Fd%2F08bBqGPERrcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDELVlMj06KvU4ul7yyrcA5zKQR%2BVu6qXx1ddDv8kfQBeYfcil8m7aNfwInuvyPVLSdkkz8gdKf5FLrWwIhTR%2F9HG3Dl7JBSBwx3vDgZQo0CFXtasU%2B%2B9MNPycoqacBxi2kq8FFyqTyOgLa3fmRwJHnZhSCXC5lPA2ZMqw53f%2FtdgNkO3WjEkBXqG%2Bv2vUGZZpwb%2BrM85wNz8Xio7jdCuc9Wjqt1y4jWVs08wbN%2B5M%2BhWfSDBx28NbMVjaTnBBkBqzUIhovW%2FIvOfeUm%2BiHpwo8SemNNk9k7B3a5uaEGtuR0fk8UKz5vz%2Bl8m4lNu6vqqdpfGFW%2BMTv%2Bl2L9hbXjqNf%2FpY9ciKbnruBwZIUcUyqCtNF%2Ft7lYorGFkQdrNgzZwocgT9w30oNEW%2FJCpfMMXxBvWEaRHxooVaGNYU94sAvENHTanAyueT2daAr1wnPl8KGyQZOE%2B4KR9ABUlARmHk%2BL7iMxQVEYjdIyXOkmcZHDumnR6urui5cq2H0tY%2BCnsAx%2BR3NR%2BWOTNFE69Nu%2BplGCWSvzSRBmxDAW7EQVmstlIkzFf74GEe5UDjefoJ3WBb9lQt4qwA9BGmwR18aVJUad99C0Hk1xN%2Bqy4wrCdU53xlUplLIYkjOZCSEHGW20c4qFPVAgwtrbfsdtNMJ%2BM8b0GOqUBuDRAAEnuvsc4%2FAOXVrlAF7L%2FrgNesYp0azHDg57jGQedntnDjQx0zaU%2B%2Bdv1HqDNm1cfKCEERje%2BO39NpINcx8FaM0E71OJyw80RLPi2w6o%2BC4h73fk79dV9jhQSWuOBMg54i%2Bk38WaDGvi15G1YsSR%2BfS36lLZLLEerkhe6iWu3ghAUnYtu3fZsY3eCnjfg8ol7MPh4DUXuqLQdGXxK2TE2Vgjy&X-Amz-Signature=fd23cfa4faf177c708f116655cd024d266d7ece4723f172a21ea2d40f6bf21ad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUS3I2X2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBDLcDRT5eBUr%2FK2rq3B6lic9qHXhQzswc8Sy0DOJWugIgf%2Fj6ml0C%2FFf%2B4ZFKyU%2FHBfGLMvLAc%2Fd%2F08bBqGPERrcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDELVlMj06KvU4ul7yyrcA5zKQR%2BVu6qXx1ddDv8kfQBeYfcil8m7aNfwInuvyPVLSdkkz8gdKf5FLrWwIhTR%2F9HG3Dl7JBSBwx3vDgZQo0CFXtasU%2B%2B9MNPycoqacBxi2kq8FFyqTyOgLa3fmRwJHnZhSCXC5lPA2ZMqw53f%2FtdgNkO3WjEkBXqG%2Bv2vUGZZpwb%2BrM85wNz8Xio7jdCuc9Wjqt1y4jWVs08wbN%2B5M%2BhWfSDBx28NbMVjaTnBBkBqzUIhovW%2FIvOfeUm%2BiHpwo8SemNNk9k7B3a5uaEGtuR0fk8UKz5vz%2Bl8m4lNu6vqqdpfGFW%2BMTv%2Bl2L9hbXjqNf%2FpY9ciKbnruBwZIUcUyqCtNF%2Ft7lYorGFkQdrNgzZwocgT9w30oNEW%2FJCpfMMXxBvWEaRHxooVaGNYU94sAvENHTanAyueT2daAr1wnPl8KGyQZOE%2B4KR9ABUlARmHk%2BL7iMxQVEYjdIyXOkmcZHDumnR6urui5cq2H0tY%2BCnsAx%2BR3NR%2BWOTNFE69Nu%2BplGCWSvzSRBmxDAW7EQVmstlIkzFf74GEe5UDjefoJ3WBb9lQt4qwA9BGmwR18aVJUad99C0Hk1xN%2Bqy4wrCdU53xlUplLIYkjOZCSEHGW20c4qFPVAgwtrbfsdtNMJ%2BM8b0GOqUBuDRAAEnuvsc4%2FAOXVrlAF7L%2FrgNesYp0azHDg57jGQedntnDjQx0zaU%2B%2Bdv1HqDNm1cfKCEERje%2BO39NpINcx8FaM0E71OJyw80RLPi2w6o%2BC4h73fk79dV9jhQSWuOBMg54i%2Bk38WaDGvi15G1YsSR%2BfS36lLZLLEerkhe6iWu3ghAUnYtu3fZsY3eCnjfg8ol7MPh4DUXuqLQdGXxK2TE2Vgjy&X-Amz-Signature=05761e606a776f5386481d02571ae6aae873c85ebcc592b843c8d9b8d7293429&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
