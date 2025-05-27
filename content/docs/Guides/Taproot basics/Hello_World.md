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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D5BXEEY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgI0SPuPkQo2DfxAqenQ3%2BS9%2BXG5HXJY%2BAOJtiu15GSAiEA%2B1AcyRE1wJZJYoBSxZuTik1bycvcGRIE8AGKEiz4xk8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCeVN5Z%2BY8qilkeKQircAwRPrHkosACqZV3ROBpa0B%2Bpc0%2FSxs6uGA%2BQKX%2Btw8zeygT%2BV%2Bv0%2B5sSMK4vREGajHHMbWs9QTg%2F9%2FlQFjLRFc0L1DI0%2BjKiJR06QjaSzDHUIElswzyObDNoQ7H5ZbdA%2BeoylLvtedCBu5N54xawdOft9kSed6rBx5LO0%2FH87sKuJRKmZOjYt%2F0OLv%2BLtni50hK9g7BxWRsnlPHhcdusRW3e2DFKw%2FNqSTBQn%2Fhv4AsyDwnazUYURz8Z%2BCRVv5uQ2EER4B9S0A7aFXQbK8V3e79J%2B4KwOl7pCYZrA7lm2fa9rqXyQwHb5uysYujLjezP%2F4V7kbZ%2Beh9ytFH%2F9asmbZBSzSPu21a1ByuGLin8fbT1c8Atiup002gcpRJsWgNkSp2UvprQDtM3USmlog%2BKk%2FP9968oeKIx3rOzBkivJZFnIWj36HjQC9Og8t0SVVbCe%2Bi4zV0pVQAdsMpnZnKayLgXEEZzspN4ZYom%2Bp1kCnw4TtLJkn2UBnCSA9yqvvDspBo%2BmfT9Ce0L5UfsLhDJn8wJw7d6LSXisE%2BydwfbEWyloDuRl9TVwf%2BH4w8KsTEItm36OHZcMXORz7TmQxBD2d20Bdsx5yF7ubmMEhsrt75vM9L2i6SYT5NXhz7JMM6B1sEGOqUBBOUMBndbUZwQ%2B2c%2B3B3jRPb6%2B1QsA36WnMhm6GahsM7UMEnLxuYBxlbBK8IGE7qAL394kg7Ye9wI%2Bf0Vzq4BxtCM5A3Ap4E%2BsDw1FjEPukEn%2BhK3w0a0Hv4eqLt85Gt03AZMrh1XErTDV7v861Et%2BoGEP%2FmoonkvnqbcrjZWtwS7UMnntzkSLRvEkXRH%2BoXz1FR17vJj3PEUkjOZJQLjrUZoLMsN&X-Amz-Signature=037a4e20d7f32f0dc637a4053db134fdd0101bd16832e1010985480f54352bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D5BXEEY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgI0SPuPkQo2DfxAqenQ3%2BS9%2BXG5HXJY%2BAOJtiu15GSAiEA%2B1AcyRE1wJZJYoBSxZuTik1bycvcGRIE8AGKEiz4xk8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCeVN5Z%2BY8qilkeKQircAwRPrHkosACqZV3ROBpa0B%2Bpc0%2FSxs6uGA%2BQKX%2Btw8zeygT%2BV%2Bv0%2B5sSMK4vREGajHHMbWs9QTg%2F9%2FlQFjLRFc0L1DI0%2BjKiJR06QjaSzDHUIElswzyObDNoQ7H5ZbdA%2BeoylLvtedCBu5N54xawdOft9kSed6rBx5LO0%2FH87sKuJRKmZOjYt%2F0OLv%2BLtni50hK9g7BxWRsnlPHhcdusRW3e2DFKw%2FNqSTBQn%2Fhv4AsyDwnazUYURz8Z%2BCRVv5uQ2EER4B9S0A7aFXQbK8V3e79J%2B4KwOl7pCYZrA7lm2fa9rqXyQwHb5uysYujLjezP%2F4V7kbZ%2Beh9ytFH%2F9asmbZBSzSPu21a1ByuGLin8fbT1c8Atiup002gcpRJsWgNkSp2UvprQDtM3USmlog%2BKk%2FP9968oeKIx3rOzBkivJZFnIWj36HjQC9Og8t0SVVbCe%2Bi4zV0pVQAdsMpnZnKayLgXEEZzspN4ZYom%2Bp1kCnw4TtLJkn2UBnCSA9yqvvDspBo%2BmfT9Ce0L5UfsLhDJn8wJw7d6LSXisE%2BydwfbEWyloDuRl9TVwf%2BH4w8KsTEItm36OHZcMXORz7TmQxBD2d20Bdsx5yF7ubmMEhsrt75vM9L2i6SYT5NXhz7JMM6B1sEGOqUBBOUMBndbUZwQ%2B2c%2B3B3jRPb6%2B1QsA36WnMhm6GahsM7UMEnLxuYBxlbBK8IGE7qAL394kg7Ye9wI%2Bf0Vzq4BxtCM5A3Ap4E%2BsDw1FjEPukEn%2BhK3w0a0Hv4eqLt85Gt03AZMrh1XErTDV7v861Et%2BoGEP%2FmoonkvnqbcrjZWtwS7UMnntzkSLRvEkXRH%2BoXz1FR17vJj3PEUkjOZJQLjrUZoLMsN&X-Amz-Signature=e3d8de31428dc6feba8bfe43e45cda9ac94674999e5cfc6152674798546a965b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
