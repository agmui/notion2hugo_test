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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLETNYCW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67L%2B6jRl8Z%2B4UiWPNRrIxFq3MYZNoiyb5LsFVHp0bxAiEAseOuJQrRyzoqJJcG%2BJrFyTmGXXq4y9RDTWNdkfUElgoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe2jZTe5mDrlt7vpircA2e81Mu2kCoGY%2BLvApshXrmu0I5W4xOjn5DNDGuomKyYPJ90ad%2BAetJsnOy6Jtiro4dskvg7%2FI26x2AGid0q2W5mdS2j%2BMOP3J6byp28cRiSNlVb3nIWH19S7qb4gcdt6387qwdhObhW6gAQOW9G6VS0UMM5oanattttB7e0qdCEMA4p7hY%2B9nVTagh4Ptalm9MwgP%2B7xFEKmmGBDMmbxj1SG5GDrFlr04Mwd60vJ%2BBRd7PXRBjCjZw0w5ywsbX0Y%2FUzcPuIMNqaa24H94ohmKq4vFX07k4%2BTUgL9H4hQPDnlajx7PzdRPIA3tdvMh6rb6K3OSzC6jvKgbGNRojdm%2FZPF7JCbH6RwWbNuYDQMEyFYEcPGpm4242kFt078zvXs%2BTJZHkm2%2BL%2FO2UnkEG2uaR8ECjsWLtwf00Pw%2B%2BPvxoJGvZu733HbPEL7I6WOy%2Feb%2BzFDmuVFs4qp3IZxRUpRHzxbR4OEHk%2BZgd%2BZwtXrfmqsMXeG8FZTOmQMMjm7LGwvfboqnc1jrkKleOkNJRAZ5QMwDd2O5vQZ76ACVJSfl6hf2FSn%2F%2FAW5IpxC9pVpQzUUqq%2BXdbrQKYxhP5%2FHLjWKKLjRlG7Lzao4deJ%2Bcw%2BA72yI2vuuj51IOU3Eo2MMiy%2BrwGOqUBUZi9oz1ofzR9a8zJ%2B1lGxLaDDFR0uIZyD8VfucT3Vw9K5H%2BQ6kzk67LNeuYYtHz5fwrASf7Fp9lC09teRi8kIcL10gwggr08Xh1kQ7leplIc7QvpQMn0kFlE8ZDgQ7hUEj4phZzpLsb82RmNIBw%2FyKRlgrAjNaZ9OVwZxrxQQFrPP43AHupKOB0sUqFqTcKZvdD63v%2FPsWo%2Fu8LkoM5%2FI69d1Iic&X-Amz-Signature=70e617f31bd864a45ad2d1dd26c78697c289e3943dac094c8077ad94ff558c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLETNYCW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67L%2B6jRl8Z%2B4UiWPNRrIxFq3MYZNoiyb5LsFVHp0bxAiEAseOuJQrRyzoqJJcG%2BJrFyTmGXXq4y9RDTWNdkfUElgoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe2jZTe5mDrlt7vpircA2e81Mu2kCoGY%2BLvApshXrmu0I5W4xOjn5DNDGuomKyYPJ90ad%2BAetJsnOy6Jtiro4dskvg7%2FI26x2AGid0q2W5mdS2j%2BMOP3J6byp28cRiSNlVb3nIWH19S7qb4gcdt6387qwdhObhW6gAQOW9G6VS0UMM5oanattttB7e0qdCEMA4p7hY%2B9nVTagh4Ptalm9MwgP%2B7xFEKmmGBDMmbxj1SG5GDrFlr04Mwd60vJ%2BBRd7PXRBjCjZw0w5ywsbX0Y%2FUzcPuIMNqaa24H94ohmKq4vFX07k4%2BTUgL9H4hQPDnlajx7PzdRPIA3tdvMh6rb6K3OSzC6jvKgbGNRojdm%2FZPF7JCbH6RwWbNuYDQMEyFYEcPGpm4242kFt078zvXs%2BTJZHkm2%2BL%2FO2UnkEG2uaR8ECjsWLtwf00Pw%2B%2BPvxoJGvZu733HbPEL7I6WOy%2Feb%2BzFDmuVFs4qp3IZxRUpRHzxbR4OEHk%2BZgd%2BZwtXrfmqsMXeG8FZTOmQMMjm7LGwvfboqnc1jrkKleOkNJRAZ5QMwDd2O5vQZ76ACVJSfl6hf2FSn%2F%2FAW5IpxC9pVpQzUUqq%2BXdbrQKYxhP5%2FHLjWKKLjRlG7Lzao4deJ%2Bcw%2BA72yI2vuuj51IOU3Eo2MMiy%2BrwGOqUBUZi9oz1ofzR9a8zJ%2B1lGxLaDDFR0uIZyD8VfucT3Vw9K5H%2BQ6kzk67LNeuYYtHz5fwrASf7Fp9lC09teRi8kIcL10gwggr08Xh1kQ7leplIc7QvpQMn0kFlE8ZDgQ7hUEj4phZzpLsb82RmNIBw%2FyKRlgrAjNaZ9OVwZxrxQQFrPP43AHupKOB0sUqFqTcKZvdD63v%2FPsWo%2Fu8LkoM5%2FI69d1Iic&X-Amz-Signature=c124003efb866ba1dc8d81c609291dba225f0634a300dffa480a1aa6c39dd41e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
