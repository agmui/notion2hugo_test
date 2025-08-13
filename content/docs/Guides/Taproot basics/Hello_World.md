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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2HRVYX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj51%2FexRiZYa5aohJzpphS%2BIRxvXcq08SUwSiakN5SbAiEAxC7%2Fpf3CdcFN2ZaDAMrfYZ7qeNLx2Cwd1F7KsXYlx1Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGKnc2ZaWXjTNnn4FyrcA1%2F%2BgkYJihwUPKs1tPp4stvRAe8fpGhjr96chFrmXZNHOxAn93mf5OJgPgTw9fO1DIQ5CtO0DMOROX%2FS5i7BI%2FIXhppxDmTmX5jfvdacn6bW2JcxqbVyL%2BsxBeiWOs1gzPQjJfhFuobQhCUkPIEAlK%2FVEh%2FUurtyA0sNcTw7E%2BfVefdCxvdMvJjLfXWA2BnlmfIJ2UFN47DUT6u%2BH%2FtAh4yoomn0Tnn7zE3472NsPIELbBoNpzyN878Xud1oAvzu6D%2BnFmbZQp3pqGBmf36FKs3cQjBd5vj2Qkm83qRZ7mcdYiLT5LoJPkzcbD2OxWS0vbj8Y%2BQ6BtTbdroYFyAH73DILEXLum2BY0CK53Z1YXpQI98HhatSXt2sVvMqGP0uEgsO4wuMLYpsdAFWl5j9Y9F6SyeWCtiYT4NuiBL4HFh26y9HVmcaxeEDZ9C32gE67xNooYyzkm4GSE11WbX%2B%2BaauWPD4eMVo6S5ww1otbjFaIT0uxlpGZCYA9z54TBfb7CVFYjDB5K6qCqUrSfPHNoFkCUtcnVGlBapl73vLXwwNlFa3BdVZEgF8y%2BdszHHCDUYTZxi%2FTT6cws7040%2Ba0Yg6MOAr%2B%2Bzil8Dvte3Yh1HoH0jUv7g5JXMrEd2wMNSP9MQGOqUBg%2FqR1Xq7NCSgAjYBzyvkskQ1IcxJlx6CYx3493%2FqnC0A4C7sMWtCStaTynZaOI6bWblaFnXn80KU07DERM%2B%2BDE2PpwO67I3YjbKFMyxgLkzHgZsqwJKCqWK84%2FEexPkFMvXqi0RC3qu2C62vqFBoqeITpyesm7FMN%2BzlouRuDyWkMjPESjZ%2FUWvz%2BQeNyiAf8j%2BRVLlUMHOcHQIMbc56nhiambdy&X-Amz-Signature=f1e29162f1480a84458956e59f1d027defb974f7c40aed9b32ebc405494b7a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2HRVYX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj51%2FexRiZYa5aohJzpphS%2BIRxvXcq08SUwSiakN5SbAiEAxC7%2Fpf3CdcFN2ZaDAMrfYZ7qeNLx2Cwd1F7KsXYlx1Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGKnc2ZaWXjTNnn4FyrcA1%2F%2BgkYJihwUPKs1tPp4stvRAe8fpGhjr96chFrmXZNHOxAn93mf5OJgPgTw9fO1DIQ5CtO0DMOROX%2FS5i7BI%2FIXhppxDmTmX5jfvdacn6bW2JcxqbVyL%2BsxBeiWOs1gzPQjJfhFuobQhCUkPIEAlK%2FVEh%2FUurtyA0sNcTw7E%2BfVefdCxvdMvJjLfXWA2BnlmfIJ2UFN47DUT6u%2BH%2FtAh4yoomn0Tnn7zE3472NsPIELbBoNpzyN878Xud1oAvzu6D%2BnFmbZQp3pqGBmf36FKs3cQjBd5vj2Qkm83qRZ7mcdYiLT5LoJPkzcbD2OxWS0vbj8Y%2BQ6BtTbdroYFyAH73DILEXLum2BY0CK53Z1YXpQI98HhatSXt2sVvMqGP0uEgsO4wuMLYpsdAFWl5j9Y9F6SyeWCtiYT4NuiBL4HFh26y9HVmcaxeEDZ9C32gE67xNooYyzkm4GSE11WbX%2B%2BaauWPD4eMVo6S5ww1otbjFaIT0uxlpGZCYA9z54TBfb7CVFYjDB5K6qCqUrSfPHNoFkCUtcnVGlBapl73vLXwwNlFa3BdVZEgF8y%2BdszHHCDUYTZxi%2FTT6cws7040%2Ba0Yg6MOAr%2B%2Bzil8Dvte3Yh1HoH0jUv7g5JXMrEd2wMNSP9MQGOqUBg%2FqR1Xq7NCSgAjYBzyvkskQ1IcxJlx6CYx3493%2FqnC0A4C7sMWtCStaTynZaOI6bWblaFnXn80KU07DERM%2B%2BDE2PpwO67I3YjbKFMyxgLkzHgZsqwJKCqWK84%2FEexPkFMvXqi0RC3qu2C62vqFBoqeITpyesm7FMN%2BzlouRuDyWkMjPESjZ%2FUWvz%2BQeNyiAf8j%2BRVLlUMHOcHQIMbc56nhiambdy&X-Amz-Signature=5d932f46c4252ee037fe262f6ead745f6fa62aef01def0eba26c39b27048aabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
