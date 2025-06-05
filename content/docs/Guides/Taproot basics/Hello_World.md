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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM3LBJT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIE9vr8SgCBWso1qbyzdrFL2LIzPDvQgDY0%2BTC0OBsU3PAiBUv88oVJRdRJmbgWLl%2BGbf2nVU1ze1%2BNdyV%2Bld8Vgi7yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMxrDtLHHTdv64ix4yKtwDSV38G9hnKpUFh0%2F7qpzTvMANAJ5W3Xoth9JqouzHJXQ3Rfpm3xDHTfP08%2BTsFhYEckSTki%2F56JOjuTQMLbAiy6cnGLXbSm%2BpJjK8spdgxJS4RzOdyM9WjAHyrBiE%2FP5vN4RNqWpCGEvYip%2F4nQYPHFwdnE8nsk60nqjVNelWcGdkcd7s38c5q%2BHSK9GW9mCEWpjzlnIu6h3LnBkwcZ%2BDSsLfuyKnegIwzq8vY3z7iYtxLTTH8hLud5C8POyO7N7OWdJPTM%2BRQ0Gf1aEevq%2FEa6ZBYqxctUka48SuFQQMB5yxNmHHQVL3BQ8nz%2FO22bNhn9x6RMUydQKvZuWuGlbPy97BtphGlk6kgyvufGS9bmVZHdGqrbF%2BM7m670KuzRSL938yDphjVtAl7VXVSbDurgcVG8EMKKydx34vvtvmzOomYcaLWGjgq2neavXumLJoH6uXnaPFcKuo4%2FqqGSMcSt67kIOfqOKsTqZRc1uI%2FEm%2FRgnIZxTx%2Fdni0bX2oyoSXQencwZu58VyJqHnRdQ1YURwTfVgyRguGi2xpbOf7SRUrrMV6hszL2JOohajnRO30GPrsQSxC0qCFhu0YGg06ikU%2BSGfz%2BTwhiMptHhynJhcceCd4x7f0kLKBmowpa6FwgY6pgHO0t3NF2klXjIjeW%2F3Too9J%2B5OtkSvZwQAtXpgnYUIQ61whIvJY8SjgTvHwKwUqUutVnWZksniiGjBZ77ubGTDQx6WaM5Dh4fXFiHrv37hfVPc09BQY8fpxhzSUvlOsJIyIIWbHu4ispLd6y2hfx%2FseBDVH5CHvOlVi8cwBHjJM3B0JFtExTmBffW7QzeueYy%2BODbHY3GM39nXUgeh3NEcZsAF1bWK&X-Amz-Signature=c5b2a78a1dd5b9b9cf95b54c15f9e46711c5a0eab0cb3618e772c5c22c203208&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM3LBJT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIE9vr8SgCBWso1qbyzdrFL2LIzPDvQgDY0%2BTC0OBsU3PAiBUv88oVJRdRJmbgWLl%2BGbf2nVU1ze1%2BNdyV%2Bld8Vgi7yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMxrDtLHHTdv64ix4yKtwDSV38G9hnKpUFh0%2F7qpzTvMANAJ5W3Xoth9JqouzHJXQ3Rfpm3xDHTfP08%2BTsFhYEckSTki%2F56JOjuTQMLbAiy6cnGLXbSm%2BpJjK8spdgxJS4RzOdyM9WjAHyrBiE%2FP5vN4RNqWpCGEvYip%2F4nQYPHFwdnE8nsk60nqjVNelWcGdkcd7s38c5q%2BHSK9GW9mCEWpjzlnIu6h3LnBkwcZ%2BDSsLfuyKnegIwzq8vY3z7iYtxLTTH8hLud5C8POyO7N7OWdJPTM%2BRQ0Gf1aEevq%2FEa6ZBYqxctUka48SuFQQMB5yxNmHHQVL3BQ8nz%2FO22bNhn9x6RMUydQKvZuWuGlbPy97BtphGlk6kgyvufGS9bmVZHdGqrbF%2BM7m670KuzRSL938yDphjVtAl7VXVSbDurgcVG8EMKKydx34vvtvmzOomYcaLWGjgq2neavXumLJoH6uXnaPFcKuo4%2FqqGSMcSt67kIOfqOKsTqZRc1uI%2FEm%2FRgnIZxTx%2Fdni0bX2oyoSXQencwZu58VyJqHnRdQ1YURwTfVgyRguGi2xpbOf7SRUrrMV6hszL2JOohajnRO30GPrsQSxC0qCFhu0YGg06ikU%2BSGfz%2BTwhiMptHhynJhcceCd4x7f0kLKBmowpa6FwgY6pgHO0t3NF2klXjIjeW%2F3Too9J%2B5OtkSvZwQAtXpgnYUIQ61whIvJY8SjgTvHwKwUqUutVnWZksniiGjBZ77ubGTDQx6WaM5Dh4fXFiHrv37hfVPc09BQY8fpxhzSUvlOsJIyIIWbHu4ispLd6y2hfx%2FseBDVH5CHvOlVi8cwBHjJM3B0JFtExTmBffW7QzeueYy%2BODbHY3GM39nXUgeh3NEcZsAF1bWK&X-Amz-Signature=eed055c23dda0dbf56aa3ead7926078cf329c6d65de68f24c817a546330be4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
