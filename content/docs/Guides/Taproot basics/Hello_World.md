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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZY4MP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4ryJ53raTGkRLvVXXBWUhX201k8rRnnO7xXVZVyEO5AiEA8QYuxRvq0OEeQDem4EjDOFCG%2F93oPQVxkUv%2BlOriqPcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGKZC7btxbuxM1KjSrcA7ZxFnD9duwPKGZfLvFyY2PNDyursT4jhTdrg%2FMzNcvDqK4VVFDpD4KYLl7UCY1yeurrYk5tDGZuJVWFDU5%2Bnsw9ZQkJWNp5oxqxKc1dP%2BKwKzqKd4kJyK6770PeIP7yb%2FI7rqcheg46AxR%2FO%2BFIN1J4V24%2FL0cg%2Bhw%2BYFtvehi8XOih%2FJaG90Jibv553VQfXfDSAclyVt%2BHUXBzyGWoZ5g19O1t0ZXaRBLjz95txaefNYcnjo%2Brh2JgB4%2ByHllyZnvUwu4hUvkq1WlfLYPpndOu4Ol8QjPSH0xQwkrpGzKoC%2B87HQ6lggrk3pi2Meyr6P%2FcN87lwKYyB53IRw0Q4NG3lWQm31jEu7xtgmU2JP1AXv6iG7Popce9SKuLO0zvkMl7tdrzkVBbFVsaF9lBU2bZCeYdZiI1hOAngeoWIwmLf%2B%2F%2FGd3MZMPIfaAeriK3leGNXbQb8%2FZ48s%2FLIbjrTgValsXYLDWB8HoHcIXkKV7H2oy67dYjl4mrPlz4McYBnJ9K9%2BdjtaTtR9cuBFhCEDxIHc%2FmkVJ%2F3r%2FxjBTcuK5pOp%2B0mFuTlqOJRvNJbIItdp2b%2Fl9BFz3dsPVPgoGQtdRdzVPrqmLcNyQFOpZASHQQDXjK23zX6PhdlBh0MNS10cIGOqUBaIdkMbrXuDQ1DytBUY%2FHyMr6mOVkPd3lb3jZGH3AZBWIiURkig717anNkDPNFQ3Bl4HihRVEuyHWdDvnH1vYNQw%2BtXC7IXILK2XRIdC4eTU5Nc8fbGDMCvR%2FaqcM%2BDEiT5jZ%2FxkTJjYH%2Fgt1NlsA96y3bJ4jlHzMGqT%2F5sZSaDyxSBRhTTl7Zxzjug6d%2B7WTeN%2BMKBzf96%2BE2iHwJHGF5DgEZn6C&X-Amz-Signature=f6b366d3bbc048f65ec1f32d48c5fa7e573953ae379472e3d90b983350c2bb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZY4MP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4ryJ53raTGkRLvVXXBWUhX201k8rRnnO7xXVZVyEO5AiEA8QYuxRvq0OEeQDem4EjDOFCG%2F93oPQVxkUv%2BlOriqPcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGKZC7btxbuxM1KjSrcA7ZxFnD9duwPKGZfLvFyY2PNDyursT4jhTdrg%2FMzNcvDqK4VVFDpD4KYLl7UCY1yeurrYk5tDGZuJVWFDU5%2Bnsw9ZQkJWNp5oxqxKc1dP%2BKwKzqKd4kJyK6770PeIP7yb%2FI7rqcheg46AxR%2FO%2BFIN1J4V24%2FL0cg%2Bhw%2BYFtvehi8XOih%2FJaG90Jibv553VQfXfDSAclyVt%2BHUXBzyGWoZ5g19O1t0ZXaRBLjz95txaefNYcnjo%2Brh2JgB4%2ByHllyZnvUwu4hUvkq1WlfLYPpndOu4Ol8QjPSH0xQwkrpGzKoC%2B87HQ6lggrk3pi2Meyr6P%2FcN87lwKYyB53IRw0Q4NG3lWQm31jEu7xtgmU2JP1AXv6iG7Popce9SKuLO0zvkMl7tdrzkVBbFVsaF9lBU2bZCeYdZiI1hOAngeoWIwmLf%2B%2F%2FGd3MZMPIfaAeriK3leGNXbQb8%2FZ48s%2FLIbjrTgValsXYLDWB8HoHcIXkKV7H2oy67dYjl4mrPlz4McYBnJ9K9%2BdjtaTtR9cuBFhCEDxIHc%2FmkVJ%2F3r%2FxjBTcuK5pOp%2B0mFuTlqOJRvNJbIItdp2b%2Fl9BFz3dsPVPgoGQtdRdzVPrqmLcNyQFOpZASHQQDXjK23zX6PhdlBh0MNS10cIGOqUBaIdkMbrXuDQ1DytBUY%2FHyMr6mOVkPd3lb3jZGH3AZBWIiURkig717anNkDPNFQ3Bl4HihRVEuyHWdDvnH1vYNQw%2BtXC7IXILK2XRIdC4eTU5Nc8fbGDMCvR%2FaqcM%2BDEiT5jZ%2FxkTJjYH%2Fgt1NlsA96y3bJ4jlHzMGqT%2F5sZSaDyxSBRhTTl7Zxzjug6d%2B7WTeN%2BMKBzf96%2BE2iHwJHGF5DgEZn6C&X-Amz-Signature=0fff713c7831d639452c0d3293a82535514c0f08222e8844f30db8e0bbcdbad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
