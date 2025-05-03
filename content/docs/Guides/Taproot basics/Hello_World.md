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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QCQH4W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDUznLv1rPjvict5xJckIvtGBxDbqNuiL1PQCcDVVtKvAiEA%2FStUZ%2FZ2%2BXwBNXJHTOwquXOlbq872K1KufmrikRL27QqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCofANYWLfH1zyjSUSrcA0GSsGM7e4VzyzUlWi%2B%2BtUlVd7GYP7DWAhNBIk%2F4N1UklHJ6xLiWgP%2BqERNsc4GlEsGsyewSZOidazjZwphP9s1pfflpmCRNgiCKbNMxkurVULAMtv2gMi7CyIQ%2B%2FkOmWLBKNqOP5a1H3JmRPHkAXCULCJ7r8WP6HMPG9dm4kGiTh7IHeykVbMKmgDNIWADIG7RQckYHCn41IiJCOSdtPRGJ6DpQLfY3mRfNOg0H0IbZ16AJhHMcDcnd%2BJGX9bdY67S%2BjewIH6iQjg0wWWyZ0o3EeJOk1fV9qTFRYPuXAI0ZELNcS9B1R6s4DouU%2FC%2FBnTzAwPxMMmvEqfDcgT1JIkObsvdNSItUU5dNfDLlsUwsRsgBqXp88PJAN%2BttcIn0SiWfg%2F92s4O048jgL2btP0Q%2F7n%2F%2BLuU1yLBm8QmjAmU3th3lZonXEy4Of6Xg9Jl1cgWXYrUEka4Bu8w9nZGXLI7vGHR0I%2Bb%2F0bFvUIJYhCrs4xaSHZSDNIVDUftIKsGzQdjg6F7ZrvcMw3zUzJmUqei3CkVilyr%2BhmUGTteBo7JrL3N%2BTJB0jx9pWvsZT4LxJLbYtdi6Lxpdg3Tr40aiMtcx2iN4c%2FXrvmQpaxeQ5LQ2XICIXaT0x%2BSa9R3mML2618AGOqUBUhYB0RwBl3NChsuTnyrnNesChCyY0%2Be7QaWGVJhy5LCP%2FamQ5A%2Fcg%2FQvBwvkJm2blAGABpN7FhNTIPG8%2FifMjqBQajGJmDDwgIBTcNps5RO7cmjP8Xcwuxop5ievnahD9gC1cvtGXXHLwrLRCLNex124FpPXpsm%2Bkgc7cFfyTR2ewBvUhR6jQ3ZWJLZmnrBFwJxAD1MiYWgLY3ovB5RJGqtrwhs9&X-Amz-Signature=7d3514df40e701d1631b564e09332075e3c2c140c8c383ab541ff44008c5f0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QCQH4W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDUznLv1rPjvict5xJckIvtGBxDbqNuiL1PQCcDVVtKvAiEA%2FStUZ%2FZ2%2BXwBNXJHTOwquXOlbq872K1KufmrikRL27QqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCofANYWLfH1zyjSUSrcA0GSsGM7e4VzyzUlWi%2B%2BtUlVd7GYP7DWAhNBIk%2F4N1UklHJ6xLiWgP%2BqERNsc4GlEsGsyewSZOidazjZwphP9s1pfflpmCRNgiCKbNMxkurVULAMtv2gMi7CyIQ%2B%2FkOmWLBKNqOP5a1H3JmRPHkAXCULCJ7r8WP6HMPG9dm4kGiTh7IHeykVbMKmgDNIWADIG7RQckYHCn41IiJCOSdtPRGJ6DpQLfY3mRfNOg0H0IbZ16AJhHMcDcnd%2BJGX9bdY67S%2BjewIH6iQjg0wWWyZ0o3EeJOk1fV9qTFRYPuXAI0ZELNcS9B1R6s4DouU%2FC%2FBnTzAwPxMMmvEqfDcgT1JIkObsvdNSItUU5dNfDLlsUwsRsgBqXp88PJAN%2BttcIn0SiWfg%2F92s4O048jgL2btP0Q%2F7n%2F%2BLuU1yLBm8QmjAmU3th3lZonXEy4Of6Xg9Jl1cgWXYrUEka4Bu8w9nZGXLI7vGHR0I%2Bb%2F0bFvUIJYhCrs4xaSHZSDNIVDUftIKsGzQdjg6F7ZrvcMw3zUzJmUqei3CkVilyr%2BhmUGTteBo7JrL3N%2BTJB0jx9pWvsZT4LxJLbYtdi6Lxpdg3Tr40aiMtcx2iN4c%2FXrvmQpaxeQ5LQ2XICIXaT0x%2BSa9R3mML2618AGOqUBUhYB0RwBl3NChsuTnyrnNesChCyY0%2Be7QaWGVJhy5LCP%2FamQ5A%2Fcg%2FQvBwvkJm2blAGABpN7FhNTIPG8%2FifMjqBQajGJmDDwgIBTcNps5RO7cmjP8Xcwuxop5ievnahD9gC1cvtGXXHLwrLRCLNex124FpPXpsm%2Bkgc7cFfyTR2ewBvUhR6jQ3ZWJLZmnrBFwJxAD1MiYWgLY3ovB5RJGqtrwhs9&X-Amz-Signature=9ea340e3c0fdd499699d0c476639cec7fb44479d09eb44ae8d6b46861b646a25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
