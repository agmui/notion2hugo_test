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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUX54QM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkisP5C3yEnV%2Bo0648g%2BhJO%2FQ81YYsc2bEuMsIa0eBPAiEA65TgSd0que2wlsQpG20jScBOpAt4xg9qeC%2FuR07ZWUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeGFq7V8wUWJmyn2CrcA9jijNz1d56rfuK6N09%2F9FRixBZUUhIcK5ocH03x1K9bg8UMX%2FLIzbvcWi%2BLp%2BxEqkX%2FIRxIhx1q2YKjybWZm%2Bjg7xxx8%2Fmrr4CpuutICCJPJi05jX8nY%2BVQUMiaLNAYAH3FOm6E%2BVpSEK1COUp%2FW3kg3QbU%2FilIDc3BsAyvKfZGLG7cc4Z25PFKP%2BRTe0lca0NhwdotQshpQj0MVT5au6mZaWKQDsHptvCDanOEegJBfLRhgCW97U8SWYQoovFSCVvlTjQWvV0Me85uGJtOBp%2BUwV3fjmzY7hh6iLwWYGzOl5pvLQM4%2FO0wS76iIulO4y82yxEa6lhp3OmtypME45u4tt9m%2FM0yHBoMcxZCMdktUgAo7NBwoHjT8ATP4fzE8HIPKieJNEuU%2ByI8fSGAijsSBNq12U8XmkmbnBYmxilzLS2OosHHt2JN0kSeXA%2Bsjj6j6aF30%2FvR3A8uP5hgwRhDNVtRFL4fztyfP%2F8B1L6NcZLd%2BYAi2FdfAZgKpKuPgZKLzQtav3dyqxzSRzACoU5F6jDOhhD2cnxfTsV4pLejV%2BneMlK6eoe0EgUoGktyuhnQ5hv5tlUKewfC8rDBU9kLOZE%2BpUVuZ%2F1C0PlctqzbVsGVQe8bkgjQFEDMMI%2BXub8GOqUBAw8zQlz8HTJOgvLKCcX9apjT%2Fp8Vvr6IBIj2W3XWhikN226D7lH%2FNllUfr7%2B10fapfPpIkGhnS30R72sVNmTYhTzbLZjxtBaBlCIcFuKs9hpLnS%2FDq3iKoy6Rv%2B5ZV1rq3RIDY2VUc%2BPpK3oyz8Ll0cJQZozDKgDj%2BMhyKUjrOW8WKom%2FgFItrvbyBZ3Bdk2DCRLSBA8H7%2BlS0Wsld6BLe%2BFy81x&X-Amz-Signature=f61f42a517cb10575b087c2ea8dc15c0e5058f77b165b15e2c190bd1aa37a3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUX54QM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkisP5C3yEnV%2Bo0648g%2BhJO%2FQ81YYsc2bEuMsIa0eBPAiEA65TgSd0que2wlsQpG20jScBOpAt4xg9qeC%2FuR07ZWUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeGFq7V8wUWJmyn2CrcA9jijNz1d56rfuK6N09%2F9FRixBZUUhIcK5ocH03x1K9bg8UMX%2FLIzbvcWi%2BLp%2BxEqkX%2FIRxIhx1q2YKjybWZm%2Bjg7xxx8%2Fmrr4CpuutICCJPJi05jX8nY%2BVQUMiaLNAYAH3FOm6E%2BVpSEK1COUp%2FW3kg3QbU%2FilIDc3BsAyvKfZGLG7cc4Z25PFKP%2BRTe0lca0NhwdotQshpQj0MVT5au6mZaWKQDsHptvCDanOEegJBfLRhgCW97U8SWYQoovFSCVvlTjQWvV0Me85uGJtOBp%2BUwV3fjmzY7hh6iLwWYGzOl5pvLQM4%2FO0wS76iIulO4y82yxEa6lhp3OmtypME45u4tt9m%2FM0yHBoMcxZCMdktUgAo7NBwoHjT8ATP4fzE8HIPKieJNEuU%2ByI8fSGAijsSBNq12U8XmkmbnBYmxilzLS2OosHHt2JN0kSeXA%2Bsjj6j6aF30%2FvR3A8uP5hgwRhDNVtRFL4fztyfP%2F8B1L6NcZLd%2BYAi2FdfAZgKpKuPgZKLzQtav3dyqxzSRzACoU5F6jDOhhD2cnxfTsV4pLejV%2BneMlK6eoe0EgUoGktyuhnQ5hv5tlUKewfC8rDBU9kLOZE%2BpUVuZ%2F1C0PlctqzbVsGVQe8bkgjQFEDMMI%2BXub8GOqUBAw8zQlz8HTJOgvLKCcX9apjT%2Fp8Vvr6IBIj2W3XWhikN226D7lH%2FNllUfr7%2B10fapfPpIkGhnS30R72sVNmTYhTzbLZjxtBaBlCIcFuKs9hpLnS%2FDq3iKoy6Rv%2B5ZV1rq3RIDY2VUc%2BPpK3oyz8Ll0cJQZozDKgDj%2BMhyKUjrOW8WKom%2FgFItrvbyBZ3Bdk2DCRLSBA8H7%2BlS0Wsld6BLe%2BFy81x&X-Amz-Signature=668b692a5ed269baf41ea7dad1c82aaaf2a4240f8933f1b6f4fb6546e95f2258&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
