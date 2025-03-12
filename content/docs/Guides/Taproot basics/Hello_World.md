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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLE7IWUD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCitw1LOZw3cJUo0%2BrdFaQ4bLo1rwkvuradF%2Fvgx5TSbQIgYveNqkNULG1x13WYLbzJxyEUDYZIx2bLGXTmt66BAmEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMjGjtC9MpEuhW6vircA0sKPhiB1FCzMkXOJ8%2BmPJORTl9lC%2FJPD6VfdxkqBWMnPJdigBbuknqvKjHxp%2B0HvtemqBR9L3AYceA4dNElW6RulpwpWY%2BVkDSP9CTkKqK8R0zzk6bLSfMyl3rt31yXdG4yWSnaddxhkcP2BPcOngZ8bDvKdxvuQKvdpbGdKzy8gfimIgaABk%2FctWepwd70geHmtm6c5wbAHHwwjePItrydcnPpM9cjGtjnwc0HO5bZlX%2FW%2BnyBPXF7ekaC5ltlUveKQ1%2FoE3khZGqUzbHhQsad1m5OgXAGzCDM0P2g6%2Bx%2F6HUoM1c9Z2Hnw1d20K52Ai%2FDT%2Fnw2B27GCprqgATqVh%2BcUdEQBW%2FXs5AyRYob%2F60Dhya9lVB3p0VJHVAtb7StvzZn2N%2FLEkogcDwQ2tbV9ktGxTnAuaFLGTCY7TDLe2wd%2B31AdkdJpVDFA0b%2FLgmoh7TsihLg69E%2B4MZUx%2BrnxX1qq2BDvbz91FZjOqgvwP4x3d5%2BBLJzRVzM8Xkxjt02%2FZWMEYmExDjaJybdZDSGYEWJlvt6I1ub9FJ3GkK3WFppL%2FgNgIvormKVKG1PIrCOw1vGTbufOhFRRDzhY1xDKcbij0S3AQlzxOf%2F5zt30KTOqrIQtINufd7jLGLMKeEyL4GOqUBY%2Be%2F8q0YgzaIETVA7gODDDoiNCdO1iRjgZaYP%2F9zh9E%2Fcq6yycqacMHsYV%2FOPvTb%2BqFP45HTK%2BRTGtHyehQdQuqa2waceBVlOowicpoSNXSCnhSKxDpfL3Iag1HuLgpWMzvGceNfFhS2R7vWt%2FNpNErcJtZ6cfv6Ssm8AaRVRM5ilFcBT05VtLKL086YTtp7PtgdIGDe9dpBZyycozY1zEUYWAID&X-Amz-Signature=799d8c03b2827fa9be7499bdb2dba87594290f1fe5aedcbc12bf01c6142fe8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLE7IWUD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCitw1LOZw3cJUo0%2BrdFaQ4bLo1rwkvuradF%2Fvgx5TSbQIgYveNqkNULG1x13WYLbzJxyEUDYZIx2bLGXTmt66BAmEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMjGjtC9MpEuhW6vircA0sKPhiB1FCzMkXOJ8%2BmPJORTl9lC%2FJPD6VfdxkqBWMnPJdigBbuknqvKjHxp%2B0HvtemqBR9L3AYceA4dNElW6RulpwpWY%2BVkDSP9CTkKqK8R0zzk6bLSfMyl3rt31yXdG4yWSnaddxhkcP2BPcOngZ8bDvKdxvuQKvdpbGdKzy8gfimIgaABk%2FctWepwd70geHmtm6c5wbAHHwwjePItrydcnPpM9cjGtjnwc0HO5bZlX%2FW%2BnyBPXF7ekaC5ltlUveKQ1%2FoE3khZGqUzbHhQsad1m5OgXAGzCDM0P2g6%2Bx%2F6HUoM1c9Z2Hnw1d20K52Ai%2FDT%2Fnw2B27GCprqgATqVh%2BcUdEQBW%2FXs5AyRYob%2F60Dhya9lVB3p0VJHVAtb7StvzZn2N%2FLEkogcDwQ2tbV9ktGxTnAuaFLGTCY7TDLe2wd%2B31AdkdJpVDFA0b%2FLgmoh7TsihLg69E%2B4MZUx%2BrnxX1qq2BDvbz91FZjOqgvwP4x3d5%2BBLJzRVzM8Xkxjt02%2FZWMEYmExDjaJybdZDSGYEWJlvt6I1ub9FJ3GkK3WFppL%2FgNgIvormKVKG1PIrCOw1vGTbufOhFRRDzhY1xDKcbij0S3AQlzxOf%2F5zt30KTOqrIQtINufd7jLGLMKeEyL4GOqUBY%2Be%2F8q0YgzaIETVA7gODDDoiNCdO1iRjgZaYP%2F9zh9E%2Fcq6yycqacMHsYV%2FOPvTb%2BqFP45HTK%2BRTGtHyehQdQuqa2waceBVlOowicpoSNXSCnhSKxDpfL3Iag1HuLgpWMzvGceNfFhS2R7vWt%2FNpNErcJtZ6cfv6Ssm8AaRVRM5ilFcBT05VtLKL086YTtp7PtgdIGDe9dpBZyycozY1zEUYWAID&X-Amz-Signature=089b6dd585bbcf33dab490befc4c593be9a2b7512f3fdae97a5addc6d85f1210&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
