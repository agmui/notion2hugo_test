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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7OWK4G%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcesoSfDWN2jIRVi5P0TF0TBuLPGj%2BDMdM4LuCxbjfpAiEArNU27%2B5v8Hb8FJHrCRDQPmTmoVlb%2B7K4BZgLyx6QXPgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGlFTiJS0Fvc0CZX0SrcA0WjEOGrZp9f4MXUM6KNa0riaTTv78Co2xhPlWdFTbwH1OdeSqDGZdiAht2aYWnapgY4Wbl8Au6xzty23n5J4NtT2f7Zq5idUD5AbfdLCo3gE5xD%2BkTYf%2FG0Rf03xN0XaMzDz2dtI6N3czbACPSz623qgdg5zSVV7NaJSj7sZuL5w4hVHsYbq%2FTEmXDMH6N8nBZ%2F7BujOp0AoUzJWV66LnC7t9hQp6xeFHGxs16FtL%2Btmwiw2hfsiDwJC0LtGUb%2Fm83vEK%2BYs6AW9Aa3QQU2qVMh0MPOrYX716bQBQ3VFZiUGfLlpxYCSsVw450QyucGZwpERkogq69%2Fq5tqI7RR50BJrxsdYazXd9vdZS2i2UfPaB%2BjQSVGIh3Gw8o1Kavz1%2FtexBeL4IgsLcdXqNSCbOj%2FlN5K2RTii9%2BgzQ9BCIUOtqsIVDg%2FMtlQzmI6FbbdCiCO5rqSna%2BOG7ZP%2FOFADC5rY0uKeT7NszBqiM9xqTbSR%2B72ZxhAi4tHwj0aa9gLn2PNs8t5hoLvY%2FTkBzaVv525KneU%2BwdKJjjk3vUILNIMwBiv6qKqoql%2FuuZjdnCJkMy%2FLMYhRwWIoQ0Ac0qrX%2FKGmoVN2pRoNNorVaiA16jKH8kbiQViPanPJszWMKPM4sAGOqUBCSrZNb8xO3cCoiEI%2F89vqTilxkaY%2FUbpgvignPdJT8lqw%2F8MDQ4nayhM%2BpvZv8o%2F7NM9oX8OATjq2jqFh%2B7pc5EdubHLStcOc%2FtOVaoFf1vmfkuJYKcY4ErYNuLYOLdzb8Ia7qVPJFBSURHG0L3Ej3JwtFTni63l6O3Dt9l6JCfXzTSwZDjA9WHvZDozj0JWQ1oF7rh3r6j0KYqkZwlQ65%2Boi2DX&X-Amz-Signature=339909423c695e691787b6a19b86fb843e595ffe1eb5725feed4487d60ae17b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7OWK4G%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcesoSfDWN2jIRVi5P0TF0TBuLPGj%2BDMdM4LuCxbjfpAiEArNU27%2B5v8Hb8FJHrCRDQPmTmoVlb%2B7K4BZgLyx6QXPgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGlFTiJS0Fvc0CZX0SrcA0WjEOGrZp9f4MXUM6KNa0riaTTv78Co2xhPlWdFTbwH1OdeSqDGZdiAht2aYWnapgY4Wbl8Au6xzty23n5J4NtT2f7Zq5idUD5AbfdLCo3gE5xD%2BkTYf%2FG0Rf03xN0XaMzDz2dtI6N3czbACPSz623qgdg5zSVV7NaJSj7sZuL5w4hVHsYbq%2FTEmXDMH6N8nBZ%2F7BujOp0AoUzJWV66LnC7t9hQp6xeFHGxs16FtL%2Btmwiw2hfsiDwJC0LtGUb%2Fm83vEK%2BYs6AW9Aa3QQU2qVMh0MPOrYX716bQBQ3VFZiUGfLlpxYCSsVw450QyucGZwpERkogq69%2Fq5tqI7RR50BJrxsdYazXd9vdZS2i2UfPaB%2BjQSVGIh3Gw8o1Kavz1%2FtexBeL4IgsLcdXqNSCbOj%2FlN5K2RTii9%2BgzQ9BCIUOtqsIVDg%2FMtlQzmI6FbbdCiCO5rqSna%2BOG7ZP%2FOFADC5rY0uKeT7NszBqiM9xqTbSR%2B72ZxhAi4tHwj0aa9gLn2PNs8t5hoLvY%2FTkBzaVv525KneU%2BwdKJjjk3vUILNIMwBiv6qKqoql%2FuuZjdnCJkMy%2FLMYhRwWIoQ0Ac0qrX%2FKGmoVN2pRoNNorVaiA16jKH8kbiQViPanPJszWMKPM4sAGOqUBCSrZNb8xO3cCoiEI%2F89vqTilxkaY%2FUbpgvignPdJT8lqw%2F8MDQ4nayhM%2BpvZv8o%2F7NM9oX8OATjq2jqFh%2B7pc5EdubHLStcOc%2FtOVaoFf1vmfkuJYKcY4ErYNuLYOLdzb8Ia7qVPJFBSURHG0L3Ej3JwtFTni63l6O3Dt9l6JCfXzTSwZDjA9WHvZDozj0JWQ1oF7rh3r6j0KYqkZwlQ65%2Boi2DX&X-Amz-Signature=b06ef0dec29644fe553bf563e95f3103bb0779d8f7f78dddc09a2827faaff237&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
