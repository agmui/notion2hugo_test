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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLYDBBM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXFiJihiVWZIFFRvUrIZKjMxn2uk6upxOUAsdMjViLVgIgDg%2F0CGWg8dNLk4QVy7GyINrvj254HpxI6kUfa7mZlsUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFT5R4Fd4o09Qx4nOSrcA9nXKIq%2B9y9PPhz380G9Ako2VGp%2BTCrs0I1kOZII2HhQMA2qO8GD92uv2vKyiiTv3HK%2Bu8J8aNzVnOZhqLG2XGzQWSYYgn2%2FBdltFyr82O67m6avG02zm19gUM8phMlo3SPR2kjr7Gdgb5n39iEoi58Ll3mYyPgcepIsprkiI0IrmBS12lBfT4ybHsNPSKt92GL06%2BzsxIubbT69mZZfWwHcUzLXmALkmja%2F3aa45YK5%2BwfVWWeLATZizdd56fpaPp6AAMS8xIOKUj0qjMwcZw5cYV5a3XlxcN0tbL1RWIVGzosiS1ALhp2OrKq3Dfoen5fJp2qjqkHAlX9EBPoRM%2BwvsuG%2FdDRvLQcHrn99a9k1ZFpidcDwi8Tl4Gkh0CHNqn9WFHjINgt7Ye7LboJi6NQn9DLccoWJ6eSHDGb60lu303LTMbg6y4T%2B%2FWGaMUfpihf2ERFOmmmK1HEmcbVY7bou%2B1IJyJP7jtFJddAKKfppWvzUuR7xkpculM2W6yFG5p7VvyV%2BKNEi32yJuLWt0nyNlJnbSycPvUztU2ril72tZ1%2B8n7FyWoPPHVnCPf5tbvebch4srlhiD2Ia41Pijnaky0Tp%2BTJl7R5G3t80YMBBWKfGCmnQNrfE5LdmMKmr1sEGOqUBJU82Rk7Ajta4aPZA0%2B5XfL1CkR%2BtMXaKA4GxK2qZP8nqrBAZGsmM0PupwYxSrDTM3NQDVtA7wf4BamnC2hx6JiqSpcfe5Y7zeAG2Ee9XAkmSSmvCIOSHpYsIu7SmuvaOmOHSnFUBf1TXrguT4eBB43Fo6WzgBeFmkqiJI7X61asq7OxgibZaXsAVmXiwhxvvhpYfP7YiAYxAefgGRn02QsaIh8B4&X-Amz-Signature=487fd434272a4fe83cf40af2996acf886ca4ef9e45c877892b9012f9093fae58&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLYDBBM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXFiJihiVWZIFFRvUrIZKjMxn2uk6upxOUAsdMjViLVgIgDg%2F0CGWg8dNLk4QVy7GyINrvj254HpxI6kUfa7mZlsUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFT5R4Fd4o09Qx4nOSrcA9nXKIq%2B9y9PPhz380G9Ako2VGp%2BTCrs0I1kOZII2HhQMA2qO8GD92uv2vKyiiTv3HK%2Bu8J8aNzVnOZhqLG2XGzQWSYYgn2%2FBdltFyr82O67m6avG02zm19gUM8phMlo3SPR2kjr7Gdgb5n39iEoi58Ll3mYyPgcepIsprkiI0IrmBS12lBfT4ybHsNPSKt92GL06%2BzsxIubbT69mZZfWwHcUzLXmALkmja%2F3aa45YK5%2BwfVWWeLATZizdd56fpaPp6AAMS8xIOKUj0qjMwcZw5cYV5a3XlxcN0tbL1RWIVGzosiS1ALhp2OrKq3Dfoen5fJp2qjqkHAlX9EBPoRM%2BwvsuG%2FdDRvLQcHrn99a9k1ZFpidcDwi8Tl4Gkh0CHNqn9WFHjINgt7Ye7LboJi6NQn9DLccoWJ6eSHDGb60lu303LTMbg6y4T%2B%2FWGaMUfpihf2ERFOmmmK1HEmcbVY7bou%2B1IJyJP7jtFJddAKKfppWvzUuR7xkpculM2W6yFG5p7VvyV%2BKNEi32yJuLWt0nyNlJnbSycPvUztU2ril72tZ1%2B8n7FyWoPPHVnCPf5tbvebch4srlhiD2Ia41Pijnaky0Tp%2BTJl7R5G3t80YMBBWKfGCmnQNrfE5LdmMKmr1sEGOqUBJU82Rk7Ajta4aPZA0%2B5XfL1CkR%2BtMXaKA4GxK2qZP8nqrBAZGsmM0PupwYxSrDTM3NQDVtA7wf4BamnC2hx6JiqSpcfe5Y7zeAG2Ee9XAkmSSmvCIOSHpYsIu7SmuvaOmOHSnFUBf1TXrguT4eBB43Fo6WzgBeFmkqiJI7X61asq7OxgibZaXsAVmXiwhxvvhpYfP7YiAYxAefgGRn02QsaIh8B4&X-Amz-Signature=6c56a3f161a5744a800cabfd44fe45427e84f06268b5a5e82dc52e58d49315c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
