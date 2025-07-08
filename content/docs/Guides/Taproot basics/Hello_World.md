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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJFI4CT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1dUVolWsgmkxrBxV3Dl7APa6crG7%2B0NIyKVERy4SB5AiEArBKttDMdAEMK%2BGY90kTTeTa3CEdeOpvrXjNbSNweexkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrj7iVXUmLSRVexXCrcA0wqegAZpKzJOHwBxNQ6wvY0pej5j%2Fw5oStuK4a6k3uBbO8TBH4ELnDGYjkDHpiqIDbYLyecEwwAGR7NhmLin1q5Tm6karxDiMVQ6P5i%2BQaLAyciFwhOCk%2BLeFRKijkj92G%2F0m6L5tEj5BsE3YaC1%2FMySsagQLy95Dz2VVu2eQ3e56a4yWWi8KYFsTdHJLJe4WhQyP0rbw8GmHS8fLS7aTS0Isa6DMH%2FL2LCPpXsr%2BilG3GXip0seaOl%2F%2B1wgyQWEVjK4cGsISiT64WITOiIixHqX8DvYHCbOgQ%2Bga0D4ncKZ%2BKlKC%2FB9zV3BsD18qISfJgeoBnFqxO2M5uRFXBdEsQpychnzU4KBTIx44Wh9rKe%2FnZphGbDW2XgqGcmPrmW6qbOzG4MnbrJSNOyn7LjSX8VSN6TDC4eHKYkKceSZaud64BoS2IBvhFNjbTu121znisFgzrrchg9NddS8%2BiJUKoHd4Zr3YMYjDSNqldPPKPYSYFmnToL%2BXXQorADHr0BD%2BHVzC2HVbClo6atFsGCQroW5X8KOHhIQ0DhkZHbmjkEY%2FOUmdj8LliUL%2FzeFkRL0rpFfp7WNq1jQ%2BImLg43jqb0Ufv5MwEWstOQOzg85geeBh%2F0GUWwyRDKjNkNMP3Hs8MGOqUBIudSLjhgxw6rTgwtzbX8EYfa9UkxH4XkT54JyEmOgRyzPY4IbwExPIOLN0PjCePaXaXfWu6VjjgFPEXKFH%2B8yjJa6BG%2BZRgdicYpMLuDnTVjza54OVU18MmBoQVuit68DhDPQtfVnE3i%2BRQ6FX0KuBUyKrKX0z2ByGPpoPphbfQUzWTS32ZazqTvFxbDo%2FpT%2BwjOmM61%2F0mfEwRs9VByQQWw2zAK&X-Amz-Signature=c3ba92388c8f2a1758bd9121d03dfcb7bd520951022b0ec91001f31257a06824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJFI4CT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1dUVolWsgmkxrBxV3Dl7APa6crG7%2B0NIyKVERy4SB5AiEArBKttDMdAEMK%2BGY90kTTeTa3CEdeOpvrXjNbSNweexkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrj7iVXUmLSRVexXCrcA0wqegAZpKzJOHwBxNQ6wvY0pej5j%2Fw5oStuK4a6k3uBbO8TBH4ELnDGYjkDHpiqIDbYLyecEwwAGR7NhmLin1q5Tm6karxDiMVQ6P5i%2BQaLAyciFwhOCk%2BLeFRKijkj92G%2F0m6L5tEj5BsE3YaC1%2FMySsagQLy95Dz2VVu2eQ3e56a4yWWi8KYFsTdHJLJe4WhQyP0rbw8GmHS8fLS7aTS0Isa6DMH%2FL2LCPpXsr%2BilG3GXip0seaOl%2F%2B1wgyQWEVjK4cGsISiT64WITOiIixHqX8DvYHCbOgQ%2Bga0D4ncKZ%2BKlKC%2FB9zV3BsD18qISfJgeoBnFqxO2M5uRFXBdEsQpychnzU4KBTIx44Wh9rKe%2FnZphGbDW2XgqGcmPrmW6qbOzG4MnbrJSNOyn7LjSX8VSN6TDC4eHKYkKceSZaud64BoS2IBvhFNjbTu121znisFgzrrchg9NddS8%2BiJUKoHd4Zr3YMYjDSNqldPPKPYSYFmnToL%2BXXQorADHr0BD%2BHVzC2HVbClo6atFsGCQroW5X8KOHhIQ0DhkZHbmjkEY%2FOUmdj8LliUL%2FzeFkRL0rpFfp7WNq1jQ%2BImLg43jqb0Ufv5MwEWstOQOzg85geeBh%2F0GUWwyRDKjNkNMP3Hs8MGOqUBIudSLjhgxw6rTgwtzbX8EYfa9UkxH4XkT54JyEmOgRyzPY4IbwExPIOLN0PjCePaXaXfWu6VjjgFPEXKFH%2B8yjJa6BG%2BZRgdicYpMLuDnTVjza54OVU18MmBoQVuit68DhDPQtfVnE3i%2BRQ6FX0KuBUyKrKX0z2ByGPpoPphbfQUzWTS32ZazqTvFxbDo%2FpT%2BwjOmM61%2F0mfEwRs9VByQQWw2zAK&X-Amz-Signature=2f7671cb8fea245489a525eb6336c624a9519c5980ef509d2f7bb6a701b2c4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
