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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYI6P3HX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD%2BBNywSBua0FQ2hQEG6KShKgsBhzbFYwORKYkIhlrWFQIgWh5pgg6EBJOynTa12ni0TS%2BNmaEoRh1kkavfGE8Nty0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHm%2Be5t1GwTIUxadTCrcA%2BQvsPlTgw2dF8Zgz2l3UspA6QuLFbReO3sa5O%2BvyFJt9r6w0uqGRyMWZKibBwOE7%2BXv6XOFTCB4m%2FqgRiINq0fn4ClecW7nOnM6fH2TB8NLhWBw6ur7czrHk1Xk0MPfnyPJkkgDdUXoAmauXdwQEPAryUq3ihERJOQdlZ8b9dZDHWk26sbHmNhovWPPMXqpa8a6Ww%2BotGILyQsUfvcKIhWc5A6ScDX4prNn50rZYH8mTuaFbY05AV2DJrDeGMC8XeZ%2BrWKolFKYB4Z1L8SDyPc3EZwC8UnxichoTy0jR4tXAaVBUxhEeyy4%2F5zCc59lNcrQh8Jl6QTrT1yZHyeGqHoa0TVakc65XsXoL2SGHSNEaaoBtxec1CUo%2FEGbBvZEqxzv3JDOgF004jkR%2BasFjyUYmR01iBDre%2BagkUYIfJOfbploflgJFjgkm7NfFsGcExqe23WQMfwEQkfciuihYzf%2FqpgTHmdKHUL631Pe4DSChIVPu7I9p9iYTQDFyviI%2BMdbHVbJgaXQjd6bBvxpXVaUv0pJCKLJehlwzp4qAQsnS634A4u5QX3Vn3giCwBPs%2Bg3mM1UfkCPzbZFUYPECV9ixzRLuU7ZUBbGdtTRoiQxiafuPVGNdF5%2FhoJ%2FMP%2FLu8IGOqUBOMbShcjWAEav%2F4HNIPtxA3OBzgpwEbOaLIh7%2B5TdP5RMuVpEz4hmjtyUT3477aRgIT5kdp%2BM9L%2BDfXWgVAu5joHK8M0mA3nb4VsxhcckTlpQ4%2B5%2BxvNsgYXNsIxebANxfKAPWYIuaGo9j8cx0zj7u8Vvsn92rI2xwCNLCJVoG%2F4tTFLCbA1T6iKtJjIapnPtGNQgJ2Aa%2FXlRh4Fk5K7yLu6AdquO&X-Amz-Signature=f7a02df80e61141416364a3a4d5351f520fbd4ae8fa8471eb4f5c9b39aa6c008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYI6P3HX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD%2BBNywSBua0FQ2hQEG6KShKgsBhzbFYwORKYkIhlrWFQIgWh5pgg6EBJOynTa12ni0TS%2BNmaEoRh1kkavfGE8Nty0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHm%2Be5t1GwTIUxadTCrcA%2BQvsPlTgw2dF8Zgz2l3UspA6QuLFbReO3sa5O%2BvyFJt9r6w0uqGRyMWZKibBwOE7%2BXv6XOFTCB4m%2FqgRiINq0fn4ClecW7nOnM6fH2TB8NLhWBw6ur7czrHk1Xk0MPfnyPJkkgDdUXoAmauXdwQEPAryUq3ihERJOQdlZ8b9dZDHWk26sbHmNhovWPPMXqpa8a6Ww%2BotGILyQsUfvcKIhWc5A6ScDX4prNn50rZYH8mTuaFbY05AV2DJrDeGMC8XeZ%2BrWKolFKYB4Z1L8SDyPc3EZwC8UnxichoTy0jR4tXAaVBUxhEeyy4%2F5zCc59lNcrQh8Jl6QTrT1yZHyeGqHoa0TVakc65XsXoL2SGHSNEaaoBtxec1CUo%2FEGbBvZEqxzv3JDOgF004jkR%2BasFjyUYmR01iBDre%2BagkUYIfJOfbploflgJFjgkm7NfFsGcExqe23WQMfwEQkfciuihYzf%2FqpgTHmdKHUL631Pe4DSChIVPu7I9p9iYTQDFyviI%2BMdbHVbJgaXQjd6bBvxpXVaUv0pJCKLJehlwzp4qAQsnS634A4u5QX3Vn3giCwBPs%2Bg3mM1UfkCPzbZFUYPECV9ixzRLuU7ZUBbGdtTRoiQxiafuPVGNdF5%2FhoJ%2FMP%2FLu8IGOqUBOMbShcjWAEav%2F4HNIPtxA3OBzgpwEbOaLIh7%2B5TdP5RMuVpEz4hmjtyUT3477aRgIT5kdp%2BM9L%2BDfXWgVAu5joHK8M0mA3nb4VsxhcckTlpQ4%2B5%2BxvNsgYXNsIxebANxfKAPWYIuaGo9j8cx0zj7u8Vvsn92rI2xwCNLCJVoG%2F4tTFLCbA1T6iKtJjIapnPtGNQgJ2Aa%2FXlRh4Fk5K7yLu6AdquO&X-Amz-Signature=6a43cc6661b08592e2e6c5058593be6a14f999d7aae8c45f9ac3996ae9bd4ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
