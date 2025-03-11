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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3NLNEKA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD3Yl5qx2Qj0P7QItb0ZVgfKnMzql32rcH2PtGrkCkb9wIhAKW0vCrqWVPD%2BG%2FAPgWzE4R5eIfPrEy9vCjzUaTiFUrIKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzP5%2FETWyz7amVlqIq3AOxkewmh7TFaudbb2WsvzohXPliuQwfqKpJfRSWE1Zfx8ZU6XYhfCce0P1mAkBTpPj8kru6rk%2FDEgrOEVCITqYtTx6wwuCeyIzgcWYfGKtRU%2BjkoBBPULhXK0HrYHkRaRlvExr3NCeSO7VMiezRYeVO3tml%2F%2B%2FFTjD2RPnzp0gWEV58%2FqgkvFn%2FJqN2YmXaAWOTXaRK97GtCuo1eHKu4RiiheaeAjL9Y1y1clYJlzJQgd0f0RgCmrLXduMZ6tUS7BaE4CWdtT9P%2Bufr%2BCWt1G8FhshCnW54nn%2Foz77FEINrf4cIUZ1TXX3L8Pwh1L0VKf%2Fg7vWRFPdQffLdDTOHY0RaRM4OoHkQ%2FB2Pkn1QzPSB4gYtPlpzBV0bYH9BqQ4WEBTrOo%2BnVaYMDpegubSSijachORIZx%2FCenkF8eRC4YfcBrATMDrj1ef%2BsOhTcIhDeVNfWZniC7eMI7ZMpc8PhcpqTwEXWGNBwe7b9PCE%2BgDo0MgrnAnYFSVauriwAR7qAJfoz9S1A0LmRrb7bpOzszY8HBoMHwWoDweqwSKIwkQn1CASqha%2Bk7BC9VAzr1rIbMBaDtMDUtdEF8hA6nf1kVaPmpK71xAQNMI72mjdhCf17isst6zhZNVJmAyKcDC98sK%2BBjqkARrVTiXxSFnNUvl4BUpa5Nh2pl37QdRlx4xrMPEwhy1zf0mMu1yTLwQDRDKioAfkSV7W7QgfYx5FVV2G1wEpfrvSrCUZHNRGyux8AnKeSjxr9TEX%2BCcqsIyomvpQTFkdfxwKUhu%2FvVOgaLejzo4Z3U09sX3yWR1qmLGGWUrM0XL7bLqJja%2Frzdbl%2Bl9SztBSoEJMfe4ifxhPVIRMKZRECfX2%2B3h1&X-Amz-Signature=f0b92f66650ba6d99ba6b902a7cb2613aab13335b4c688c46d63b3d212dea850&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3NLNEKA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD3Yl5qx2Qj0P7QItb0ZVgfKnMzql32rcH2PtGrkCkb9wIhAKW0vCrqWVPD%2BG%2FAPgWzE4R5eIfPrEy9vCjzUaTiFUrIKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzP5%2FETWyz7amVlqIq3AOxkewmh7TFaudbb2WsvzohXPliuQwfqKpJfRSWE1Zfx8ZU6XYhfCce0P1mAkBTpPj8kru6rk%2FDEgrOEVCITqYtTx6wwuCeyIzgcWYfGKtRU%2BjkoBBPULhXK0HrYHkRaRlvExr3NCeSO7VMiezRYeVO3tml%2F%2B%2FFTjD2RPnzp0gWEV58%2FqgkvFn%2FJqN2YmXaAWOTXaRK97GtCuo1eHKu4RiiheaeAjL9Y1y1clYJlzJQgd0f0RgCmrLXduMZ6tUS7BaE4CWdtT9P%2Bufr%2BCWt1G8FhshCnW54nn%2Foz77FEINrf4cIUZ1TXX3L8Pwh1L0VKf%2Fg7vWRFPdQffLdDTOHY0RaRM4OoHkQ%2FB2Pkn1QzPSB4gYtPlpzBV0bYH9BqQ4WEBTrOo%2BnVaYMDpegubSSijachORIZx%2FCenkF8eRC4YfcBrATMDrj1ef%2BsOhTcIhDeVNfWZniC7eMI7ZMpc8PhcpqTwEXWGNBwe7b9PCE%2BgDo0MgrnAnYFSVauriwAR7qAJfoz9S1A0LmRrb7bpOzszY8HBoMHwWoDweqwSKIwkQn1CASqha%2Bk7BC9VAzr1rIbMBaDtMDUtdEF8hA6nf1kVaPmpK71xAQNMI72mjdhCf17isst6zhZNVJmAyKcDC98sK%2BBjqkARrVTiXxSFnNUvl4BUpa5Nh2pl37QdRlx4xrMPEwhy1zf0mMu1yTLwQDRDKioAfkSV7W7QgfYx5FVV2G1wEpfrvSrCUZHNRGyux8AnKeSjxr9TEX%2BCcqsIyomvpQTFkdfxwKUhu%2FvVOgaLejzo4Z3U09sX3yWR1qmLGGWUrM0XL7bLqJja%2Frzdbl%2Bl9SztBSoEJMfe4ifxhPVIRMKZRECfX2%2B3h1&X-Amz-Signature=ea3cd6193871daefb9ae9f02b74e6c97e994129aeb5be65fd5bc764ec6f55266&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
