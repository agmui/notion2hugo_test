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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQV5R4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEhhlgS9ccC3R6Gn4qTKIJw6NA7OxZcWkEme8%2FAE0UItAiB4LcOD4psTXsYH0kniz%2BVm34wvWzd%2F4QIg4iVs41NSxiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9z19KFhwQeSlqT3HKtwDUuhlLHZtBbty33SYvoAxcQWhwX6kQB8LaQIWU%2BcG7xlbwmwzUUNRz%2FsJKWQLY1ztzs6JMPuK6NeEjpqPHVIYn%2BHjuL0KCEcPJVwDYU8PiNdAjj77gUE3php4zmnaqSijrFKFvWhxgsEmH%2BAzoTCBm306LKbBkKmLnDrNatRgiHSDW5lfCYEWl%2BFasOWVT1UnVlDoUZqgHsYeg%2B1HjuepEVzNUXsvTxc4mcA7NDgrzp5JVhTmkUXjYyznbKt2ZFeE%2BjXDnoIE%2Ff0HMWNIUs7AZlGpRv2TnbzykEAZQYjRIi8I%2FZSyXRhzXyNKbyK5RxSGEfgtJ0hGOnUtL13iMsdj4anrc2SpDi9cVlKs5dSTHm2N1DFdxQEMLzZRkzyyskXraK3KphiSMuk160zsFdh%2BuBUgYsPUI%2FBgWPuGjLAFuij1nmWpTXEeudlAJhHnpwPVXBCP%2BGEsJrnpjl5m6gqoDQMV69L216jRFf2gyTUg8ba3R0P0u%2BqrQ0A5Z0lib0iuHIKuRr98XB8ErSGsIiw%2B3D9wupxHrej8jaWfdKVznJN0rqFeLds0poj15zR8paSszx9KRMnR0R5NVAEZuf4cEsDDykKqkH%2FetPMD4m%2BQzh1%2BqpboisbPVeHKp8UwrMTbxAY6pgG5LLj4cON4%2BKYbvgz%2FBztxJAZqQcdLX0o8Lxk4Hv1%2FddX1mNmCTzLhbnPHB5JIXV4rocb5q8TBTILrDK%2B%2BEyCufMhdWkInRHld5WyYK9XWCz2EqsD%2BV3801j9%2B2DfYlPwzRIv2DF8lDVsfzRpUDVjqv30qKmqkEZa9HYLWC6Ps8L5DMd024FP4m0t6s88FlXbHyD5f%2FIq%2B%2BBMySlos9DGfhf7H20Al&X-Amz-Signature=df717fe6810f1b15478d6cae9b4790535724376d629ca1baf361a3add5018283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQV5R4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEhhlgS9ccC3R6Gn4qTKIJw6NA7OxZcWkEme8%2FAE0UItAiB4LcOD4psTXsYH0kniz%2BVm34wvWzd%2F4QIg4iVs41NSxiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9z19KFhwQeSlqT3HKtwDUuhlLHZtBbty33SYvoAxcQWhwX6kQB8LaQIWU%2BcG7xlbwmwzUUNRz%2FsJKWQLY1ztzs6JMPuK6NeEjpqPHVIYn%2BHjuL0KCEcPJVwDYU8PiNdAjj77gUE3php4zmnaqSijrFKFvWhxgsEmH%2BAzoTCBm306LKbBkKmLnDrNatRgiHSDW5lfCYEWl%2BFasOWVT1UnVlDoUZqgHsYeg%2B1HjuepEVzNUXsvTxc4mcA7NDgrzp5JVhTmkUXjYyznbKt2ZFeE%2BjXDnoIE%2Ff0HMWNIUs7AZlGpRv2TnbzykEAZQYjRIi8I%2FZSyXRhzXyNKbyK5RxSGEfgtJ0hGOnUtL13iMsdj4anrc2SpDi9cVlKs5dSTHm2N1DFdxQEMLzZRkzyyskXraK3KphiSMuk160zsFdh%2BuBUgYsPUI%2FBgWPuGjLAFuij1nmWpTXEeudlAJhHnpwPVXBCP%2BGEsJrnpjl5m6gqoDQMV69L216jRFf2gyTUg8ba3R0P0u%2BqrQ0A5Z0lib0iuHIKuRr98XB8ErSGsIiw%2B3D9wupxHrej8jaWfdKVznJN0rqFeLds0poj15zR8paSszx9KRMnR0R5NVAEZuf4cEsDDykKqkH%2FetPMD4m%2BQzh1%2BqpboisbPVeHKp8UwrMTbxAY6pgG5LLj4cON4%2BKYbvgz%2FBztxJAZqQcdLX0o8Lxk4Hv1%2FddX1mNmCTzLhbnPHB5JIXV4rocb5q8TBTILrDK%2B%2BEyCufMhdWkInRHld5WyYK9XWCz2EqsD%2BV3801j9%2B2DfYlPwzRIv2DF8lDVsfzRpUDVjqv30qKmqkEZa9HYLWC6Ps8L5DMd024FP4m0t6s88FlXbHyD5f%2FIq%2B%2BBMySlos9DGfhf7H20Al&X-Amz-Signature=7d366cb2fff32ae6aa64aed728e26d44ccee5a25b27dea126942f8c6d7d053e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
