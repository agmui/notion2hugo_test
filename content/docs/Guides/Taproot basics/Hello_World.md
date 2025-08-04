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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZ43ZOS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE9not0FN5NUL4uG7PTmKs1OJ%2FUm8PjlZjm17OEF7bzwAiEA7ekMMF7vpaPJ8LTD%2BsiOxKEi5aecz0Wl12fIQkNtjowq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFoH9PnDZDMhRA66zCrcA8TxWDNqcDkNnsxyejdkL1e9BOnvZj%2FisbWOaRl72ULVmPy9eolGz6LfoF0M0P8XJQtU5Rr8cw2oZLtkaoHoMDpduVg%2BRx%2BiT25PeDbTA4t7cqUDpMeHXI5L7eqsYmCLBi7qAFx5EMbqtMyjKHOcHkBo6WH2ZW11mG7wsWtegh17jn3ec0plji66t4smCzZETG5xqfdkPn0Y02Y7%2Bo6qfe33uBSu3Fc99UmEGASug63o1A3ycpY75YP5l9Q6C9BHw4xc6s2R74TYstw7J2BaFXfYm3htTxLZCTldBecuz%2BYRTtNLit%2BN6VJXsx2ahjjLL5ln%2FXPTnGRilE6I5HpnPa1eoZs%2Bc5ojdlLuk7rMmlCSogHYCaC58fWoIInIn%2B0yc3WLOvdv1Vq5NhlHl8VUbo0I3oDKCtO0Eu%2B0vNfC2SsJ%2BdAr1n7jeYqt65x1eiFBRBC2N65EtbK54PoGE1SDoZtSpV0r%2B%2FOUTc5VHLHGtRlO8jKpaWz9omvXl9Io2nNMZ%2FS%2FoIQ814jO036A44E3oC3CqpPF7imYAl6Hi7Sqmo0wHbR3FBacBtfL6FxiKVY9eXa5ao1OWmunAVKpI9JHGTLbaIJDKN7wSpX1fab8NM9MFEvsEeJsIH4TyaTdMIH0xMQGOqUBTjJ9RGOtJzdTQeHXEj46Opw6OAXn9%2F9rHTDkfyonPF5kO9XHgNUFew4YqoU9dvvOfQQBf0cVYBVsDyvclDoHcjIbzd0Xps01oe2vOVQquNQfH3mVTDiwgCGJFsTpByW2hR4BiXnzs8vuPeEez6dMEK%2ByIhKTZQIiv3XZG7oAZnxMGeWKnbaZ4daArrxFLXyEI4GyzLA6Sh8FpQ01Qc34U7tBXH5p&X-Amz-Signature=6eaaac2c0c3d0042ab35f1ea74b495655b58dde3b077ac1174ce8c4bdca7c546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZ43ZOS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE9not0FN5NUL4uG7PTmKs1OJ%2FUm8PjlZjm17OEF7bzwAiEA7ekMMF7vpaPJ8LTD%2BsiOxKEi5aecz0Wl12fIQkNtjowq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFoH9PnDZDMhRA66zCrcA8TxWDNqcDkNnsxyejdkL1e9BOnvZj%2FisbWOaRl72ULVmPy9eolGz6LfoF0M0P8XJQtU5Rr8cw2oZLtkaoHoMDpduVg%2BRx%2BiT25PeDbTA4t7cqUDpMeHXI5L7eqsYmCLBi7qAFx5EMbqtMyjKHOcHkBo6WH2ZW11mG7wsWtegh17jn3ec0plji66t4smCzZETG5xqfdkPn0Y02Y7%2Bo6qfe33uBSu3Fc99UmEGASug63o1A3ycpY75YP5l9Q6C9BHw4xc6s2R74TYstw7J2BaFXfYm3htTxLZCTldBecuz%2BYRTtNLit%2BN6VJXsx2ahjjLL5ln%2FXPTnGRilE6I5HpnPa1eoZs%2Bc5ojdlLuk7rMmlCSogHYCaC58fWoIInIn%2B0yc3WLOvdv1Vq5NhlHl8VUbo0I3oDKCtO0Eu%2B0vNfC2SsJ%2BdAr1n7jeYqt65x1eiFBRBC2N65EtbK54PoGE1SDoZtSpV0r%2B%2FOUTc5VHLHGtRlO8jKpaWz9omvXl9Io2nNMZ%2FS%2FoIQ814jO036A44E3oC3CqpPF7imYAl6Hi7Sqmo0wHbR3FBacBtfL6FxiKVY9eXa5ao1OWmunAVKpI9JHGTLbaIJDKN7wSpX1fab8NM9MFEvsEeJsIH4TyaTdMIH0xMQGOqUBTjJ9RGOtJzdTQeHXEj46Opw6OAXn9%2F9rHTDkfyonPF5kO9XHgNUFew4YqoU9dvvOfQQBf0cVYBVsDyvclDoHcjIbzd0Xps01oe2vOVQquNQfH3mVTDiwgCGJFsTpByW2hR4BiXnzs8vuPeEez6dMEK%2ByIhKTZQIiv3XZG7oAZnxMGeWKnbaZ4daArrxFLXyEI4GyzLA6Sh8FpQ01Qc34U7tBXH5p&X-Amz-Signature=38be8a6013f8ef032a72a3e31ddfc99ad56fba6fbde8a5cb5cb6571dfbc386fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
