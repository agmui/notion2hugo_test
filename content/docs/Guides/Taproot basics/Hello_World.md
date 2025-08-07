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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNGTCXO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEJ%2BiK3VRhgNAqqTXDVds%2FQAsRxBFIw8qxHJ%2BMh0359dAiBEUiwknUHSpLgf8WNf51InhrSpPlMSGsnpp%2FALSEsZ9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfz5qPekljM90a6f3KtwDT0BW8O0tMMirArpK5Ch0lBb6VBdlnBmrzhz8n6%2BQzk%2Fy%2BHz6d2QHi77BDwEvS2ltlOllpCkQ5BZbjVpFt%2Fcoq%2BfxKpuMstYYd2Hx5Y%2FU3RCdzBGWTiLcSKIYXSfeaeYVcEFWiBzvwJBUVCpT7v58t4rlIfgr%2BlNglu38GB7LtIlfQx3gjQDkg%2FNSDWzWJbUfnLLHtGf8kg9eBEnsPfoUjVBweVRmFgOJVVADuBE9dqznAdzt%2BpeHGeY3g5OG3hsVi3%2Fv4rGXZHqFZ8sdVseZjmjgcCwFPoBBFq0TsQU2M1oWVSTwiWD8Y9LmPOJdJazOHg0JJTE1GSSpWmmseFcwvtjZTNUMiJfGKbJeO%2FTfMPuvOIjIavdmP5%2FKsp4n3Py6Io48WgAW3M00lrbzfaMyVzMZPQ0wO87Z9VN%2FpbIsWaakmbvWTtjCugR780dKDemEupG8ccsV3PwHWe2hw%2F4MPPLB%2FfrgkYKkttA8muLHT6nKgwmlNGEI2uvY4pSQ91kef6JIcLXSo9Uy06m7saG509mE3HxHwaMPv032WpTSilXG1EnbDQxPzb4XtcCQL%2BhJYKqViJfH25YuQyG40v5InlqCs4O%2FkNV77RN5e1PIRGHFY%2BTU%2FNrOLFMt6mcwzPrSxAY6pgGxpvjlj2rn9REPh3i%2BtjkCrGzNTqr41KnBoerb4YEOwKQVA93JlzG1SsoF2y%2BQjOt8laJUGn8wjdKqfDCAQCI8WrOGvUQwbUaiUwpmgxrTv1kL%2FWX49oPint%2B%2Bpz2HJ53N9KBHoCPvHCrMW2GGB0wlmzizoZosa9%2B2RasEJ5NPzdd8B0XPWu2Ji2xcXL6d6BQPOF8%2FOIGqt8QPXUpUcgSEChQ2YBtS&X-Amz-Signature=1e174b634e92bdd78b5a0ca650b25995f61549baa5d53b6e781015c177ba1cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNGTCXO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEJ%2BiK3VRhgNAqqTXDVds%2FQAsRxBFIw8qxHJ%2BMh0359dAiBEUiwknUHSpLgf8WNf51InhrSpPlMSGsnpp%2FALSEsZ9SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfz5qPekljM90a6f3KtwDT0BW8O0tMMirArpK5Ch0lBb6VBdlnBmrzhz8n6%2BQzk%2Fy%2BHz6d2QHi77BDwEvS2ltlOllpCkQ5BZbjVpFt%2Fcoq%2BfxKpuMstYYd2Hx5Y%2FU3RCdzBGWTiLcSKIYXSfeaeYVcEFWiBzvwJBUVCpT7v58t4rlIfgr%2BlNglu38GB7LtIlfQx3gjQDkg%2FNSDWzWJbUfnLLHtGf8kg9eBEnsPfoUjVBweVRmFgOJVVADuBE9dqznAdzt%2BpeHGeY3g5OG3hsVi3%2Fv4rGXZHqFZ8sdVseZjmjgcCwFPoBBFq0TsQU2M1oWVSTwiWD8Y9LmPOJdJazOHg0JJTE1GSSpWmmseFcwvtjZTNUMiJfGKbJeO%2FTfMPuvOIjIavdmP5%2FKsp4n3Py6Io48WgAW3M00lrbzfaMyVzMZPQ0wO87Z9VN%2FpbIsWaakmbvWTtjCugR780dKDemEupG8ccsV3PwHWe2hw%2F4MPPLB%2FfrgkYKkttA8muLHT6nKgwmlNGEI2uvY4pSQ91kef6JIcLXSo9Uy06m7saG509mE3HxHwaMPv032WpTSilXG1EnbDQxPzb4XtcCQL%2BhJYKqViJfH25YuQyG40v5InlqCs4O%2FkNV77RN5e1PIRGHFY%2BTU%2FNrOLFMt6mcwzPrSxAY6pgGxpvjlj2rn9REPh3i%2BtjkCrGzNTqr41KnBoerb4YEOwKQVA93JlzG1SsoF2y%2BQjOt8laJUGn8wjdKqfDCAQCI8WrOGvUQwbUaiUwpmgxrTv1kL%2FWX49oPint%2B%2Bpz2HJ53N9KBHoCPvHCrMW2GGB0wlmzizoZosa9%2B2RasEJ5NPzdd8B0XPWu2Ji2xcXL6d6BQPOF8%2FOIGqt8QPXUpUcgSEChQ2YBtS&X-Amz-Signature=f37e19e397e555fdc474bde9fa0c1f17097cd9dc60ccc0c4ec162fedbe073aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
