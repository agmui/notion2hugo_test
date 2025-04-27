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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Z6ZZ2S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8c3ZpX3CaABHSJZQAMf3uredhK0fdascASxCvsH0obAiEAgIpXukYxUL3GyeB%2FZLjDtV9SwAyD1%2BxxEldCe%2FtK8f0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKmTa7SOSzYk1UPC3SrcA2YZHGG3f5LV3k%2BUBQGuarWzYf48TCmXrRiqw2a7wslR0EZoAN0G4u9a%2FNNmzkgLA%2FLt%2FogTzaXJe8zkRg7NIuBLBNK2hE5bR7IN85VmTqfba4LWaDr3k6fyhzu4rjOl7RZWcXuLXydsCMvRbjp7OWqheqXPFP2HA%2F4FQdyziw4Ghe5IxpBvj5z3L91vgpdwBaPxyfTo4XGSRUzk5HPLJ3sFWubOA9RBjCniOdDPv%2BBk05WlA6S1VC1mreLeBY8WaTIaG10S0cNRm2ZTIXSQaBOn8P37278wx7TQIohIosXB9dIqo3r98ROmJowwvL2QKPx33i3G6yTJRQxLyt6qZgu61SW0n1rfUc0ccbbv6ZCmOLcCsUC8k6yTsMv8QYhCPqq2y7hQ6MDWfmnBNJOtx0yxzKoWityffz5sO5g1q9mM2NIZ%2FtK7zpR57pS2%2FiWmknCdKNzqzwvHidKKP4rgo0Kb3HR6Oo7Z1R144d72j2eeaf%2FL44yYcmYt74aSGaIov%2B0CAvyoY%2BLkpVmpffJTWDOeYVBBpQAbxs25iZJCFamqmdFGIQgYXfOHAiGOlzDTHh7um%2FpNVf8yMvemHGOSV46fYpreS78E0WnHl74uMrhbYNfpYGGt84rfuC30MP6KusAGOqUBFMZrd%2BKsnsG0aWgBQH1dul9XRf0LkO4G%2F6aSM%2FNux%2BZGLZjHVCGn7E3AZJxfAzxvUJyuhDJpVNTqAehj5ZD307qRX73WylRuW7G64vIax6ccxTT3BDWxxWIVG%2BDNNYMkBX8SXYurz1IyiBsguVLqm0LYqAYx0dlMgQh3yooNKOmt1pXi0b1ZH9z3pGpe7qqy1d4XUdoO8cU6JX4SP%2F82tpMIgPwr&X-Amz-Signature=3b84ad18c55f726182ae86856105a83e368e9548af626291c9926366d2266a39&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Z6ZZ2S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8c3ZpX3CaABHSJZQAMf3uredhK0fdascASxCvsH0obAiEAgIpXukYxUL3GyeB%2FZLjDtV9SwAyD1%2BxxEldCe%2FtK8f0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKmTa7SOSzYk1UPC3SrcA2YZHGG3f5LV3k%2BUBQGuarWzYf48TCmXrRiqw2a7wslR0EZoAN0G4u9a%2FNNmzkgLA%2FLt%2FogTzaXJe8zkRg7NIuBLBNK2hE5bR7IN85VmTqfba4LWaDr3k6fyhzu4rjOl7RZWcXuLXydsCMvRbjp7OWqheqXPFP2HA%2F4FQdyziw4Ghe5IxpBvj5z3L91vgpdwBaPxyfTo4XGSRUzk5HPLJ3sFWubOA9RBjCniOdDPv%2BBk05WlA6S1VC1mreLeBY8WaTIaG10S0cNRm2ZTIXSQaBOn8P37278wx7TQIohIosXB9dIqo3r98ROmJowwvL2QKPx33i3G6yTJRQxLyt6qZgu61SW0n1rfUc0ccbbv6ZCmOLcCsUC8k6yTsMv8QYhCPqq2y7hQ6MDWfmnBNJOtx0yxzKoWityffz5sO5g1q9mM2NIZ%2FtK7zpR57pS2%2FiWmknCdKNzqzwvHidKKP4rgo0Kb3HR6Oo7Z1R144d72j2eeaf%2FL44yYcmYt74aSGaIov%2B0CAvyoY%2BLkpVmpffJTWDOeYVBBpQAbxs25iZJCFamqmdFGIQgYXfOHAiGOlzDTHh7um%2FpNVf8yMvemHGOSV46fYpreS78E0WnHl74uMrhbYNfpYGGt84rfuC30MP6KusAGOqUBFMZrd%2BKsnsG0aWgBQH1dul9XRf0LkO4G%2F6aSM%2FNux%2BZGLZjHVCGn7E3AZJxfAzxvUJyuhDJpVNTqAehj5ZD307qRX73WylRuW7G64vIax6ccxTT3BDWxxWIVG%2BDNNYMkBX8SXYurz1IyiBsguVLqm0LYqAYx0dlMgQh3yooNKOmt1pXi0b1ZH9z3pGpe7qqy1d4XUdoO8cU6JX4SP%2F82tpMIgPwr&X-Amz-Signature=e68ef6c9681bb20a43333696e52b22e0595e8cd5b03b2ccd6df3495be3d050f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
