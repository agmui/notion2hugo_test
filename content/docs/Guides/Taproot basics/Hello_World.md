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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HC5IVJS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDFgnU4f5%2FkCWCjhYbyMhd%2FofdJSYRwOvNwjOS1I3tqXwIgaPpvtMyVulQsZ2kiCbtS1oHQsl43t0O2pl0hO1R01lEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83rUKx9shUVVVOjyrcAw8rZYnRcAeIMDCJqp5NaSywgpf2O9ti9B9P9zVazNFSJKj6t0j%2FdN9%2F9QrwthwvuqX1h19pPTqrcwhV3%2B%2FGQKf0rxsmqA%2FK7AoxcVthfU6FxeqENvY1SAFOmH2O2z0tEK8j%2Fumku9YbJSuFrdGXYPpu93xQoH%2B3k0GknfInqvnzQaKJB1Jyo98ZHE8VQeBtPWiwwKOAtF81KJvUSsnBEucP%2BsPwG5CrPubzEI62gWO%2FyWJG5UUX46klKgGsYGiHQDKQ2l7xzf%2BZWI6ET8k9lLkFrm14WbR1OZpu%2Fj4vDYcsdf%2FuCyTsc1Ufd4mMHsS%2BgFSNs7rW0%2BASRiLnOT%2B6%2Bj864exmGSeHsmFzOVY7SXnCEwT3oGvEdzL7xyD4a9d360DeBZ%2BG1lb91bh0rGysGh6J%2FKGa26SxewFjnA9Ou55WKJ97JgNBoGCKEPyu9esPOwdD1vWsBMXCGTNTHdSAbWmDaZDeyEETFfT0NsBIQZHrKbhvmbF7p%2BvwW%2BSajSigALDbCmuJK9JNm9XwVNQHhhX3UcbWxfh%2FV88Slg1n2K3%2BApb8l4vJ45nllQEDZWQWKCgp4yH0xn9JpMGtoWNNZXbyx6d0SGv1ArGRL5e0UlzY5DprrCEV5y%2FLsqcOMI3Iur4GOqUBT8MY9R10T%2Bw57lI2g2wrb7THTOFY80vNHr%2FccHA4K5c5Fr4kC1rNO0H2%2FSlzMNCc%2FkT7iNlAjvp1II%2F%2B6B9JaVmv0H%2Fo%2Fc8lPXaFc16v7Y3Q49M5hrgWdmvHpByhZNbJQVATV0kLQBFsYZq2wGwSHgsgsv6hlzSanYziabXjCdilFmr7u2ZgHK%2BCaDY8g%2BjoplW%2Bw0jfvSKiyt8QNrXEy1uIz%2FPs&X-Amz-Signature=d8525f66a7197b44b2617b28049d32825d4ca21aad50a51ebfad370022403b89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HC5IVJS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDFgnU4f5%2FkCWCjhYbyMhd%2FofdJSYRwOvNwjOS1I3tqXwIgaPpvtMyVulQsZ2kiCbtS1oHQsl43t0O2pl0hO1R01lEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83rUKx9shUVVVOjyrcAw8rZYnRcAeIMDCJqp5NaSywgpf2O9ti9B9P9zVazNFSJKj6t0j%2FdN9%2F9QrwthwvuqX1h19pPTqrcwhV3%2B%2FGQKf0rxsmqA%2FK7AoxcVthfU6FxeqENvY1SAFOmH2O2z0tEK8j%2Fumku9YbJSuFrdGXYPpu93xQoH%2B3k0GknfInqvnzQaKJB1Jyo98ZHE8VQeBtPWiwwKOAtF81KJvUSsnBEucP%2BsPwG5CrPubzEI62gWO%2FyWJG5UUX46klKgGsYGiHQDKQ2l7xzf%2BZWI6ET8k9lLkFrm14WbR1OZpu%2Fj4vDYcsdf%2FuCyTsc1Ufd4mMHsS%2BgFSNs7rW0%2BASRiLnOT%2B6%2Bj864exmGSeHsmFzOVY7SXnCEwT3oGvEdzL7xyD4a9d360DeBZ%2BG1lb91bh0rGysGh6J%2FKGa26SxewFjnA9Ou55WKJ97JgNBoGCKEPyu9esPOwdD1vWsBMXCGTNTHdSAbWmDaZDeyEETFfT0NsBIQZHrKbhvmbF7p%2BvwW%2BSajSigALDbCmuJK9JNm9XwVNQHhhX3UcbWxfh%2FV88Slg1n2K3%2BApb8l4vJ45nllQEDZWQWKCgp4yH0xn9JpMGtoWNNZXbyx6d0SGv1ArGRL5e0UlzY5DprrCEV5y%2FLsqcOMI3Iur4GOqUBT8MY9R10T%2Bw57lI2g2wrb7THTOFY80vNHr%2FccHA4K5c5Fr4kC1rNO0H2%2FSlzMNCc%2FkT7iNlAjvp1II%2F%2B6B9JaVmv0H%2Fo%2Fc8lPXaFc16v7Y3Q49M5hrgWdmvHpByhZNbJQVATV0kLQBFsYZq2wGwSHgsgsv6hlzSanYziabXjCdilFmr7u2ZgHK%2BCaDY8g%2BjoplW%2Bw0jfvSKiyt8QNrXEy1uIz%2FPs&X-Amz-Signature=4528946dea6ef7af68acf3c6b4031b0363d05e948b623a1860b9ad570e011f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
