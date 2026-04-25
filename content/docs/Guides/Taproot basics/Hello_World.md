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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTTMN3L%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfVwmteQLwrTONNLky7ADRT7ssZdIVDh8NOkWKEtsqAiEA8kHXLa%2Fr2OiAGjVgfOXV5eKyypbYtEmpXnsl%2B2Usnc0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiAOi4yCivFm9IVBSrcAxG5ka2AWAlE8frfPt1aJoddrxNZmgCIufXPfJUEa7AhcrphNUiuqtxAkOyCSpc3aCS%2FJ4LQbm2OVAwUJGeBrXE1Zxhx6%2F8WEDij3nr3%2BpeJzHY9Aig4EhLj269%2FH0bAo4BvRxANOcRDmVmm4pHbjF9oZf4dVWVbByczgGwNi%2BGF%2FbznTAJISIWKmi8Ec1EZRT6NwXJ14NHu5Gnqd1GFLif7s9bac9hW855vWTFO37LFe0SkDQ7TwYj9HATHoOgJLEGdGfEReeBehN4G3p2O%2FTYxyXbucD47z2MB%2FLMABtM%2B9O8elgRYzIDdoZ7WTLMmrJnH7wew2y9dffQyZJWNkIWA6aYDeqLHAUgxrVjW9XD279uUIXFfOgj8mcETHlrlhOgEqK3Fdf8cuwjyBbzkO8GFNjlGt%2Ft4%2F8SkvpRKk9TSqxWXmJlEm6BgcfXl5GjrjwB4b5OHt4buk1WbuMLUHjBWRNy%2B2FDipM6LR%2BMLQfo1s8pSDYtlrnsY13ibM9mZ0eOBpdyCJuZR%2F%2FTuCqfqzwaw1BbxWRe4wrLg6UqJW8XLJwiF9XLpcimcdVR%2FL34ZPrfr%2BommNiQ3tDtV1diy5UohTwBbFIrLyW6yYH0NsI8N3nT9NsIkbNlOuxAGMJS6sM8GOqUB4Z4LNAqC8jp9hv%2FRlrS%2FU0pFFaPc9qlWutXNp%2BPp%2B3vuAidMFXmhXafGUA4k3qmuGYcVA2JoHecghqZzg36qb8bt9f%2FgO3yrD6N6HC3P9oXw931kh3dFuqwKTmCAiis68WVEpqRVyfEHs8A6adwzMaqkiglDl8KU0iuNgV1aJ36VDT2LS%2Bpn9J1WpBCyRpxxGR0WwRuRDtxYtuBJB8XlqW%2Bmc%2BJe&X-Amz-Signature=a6500bbb3492b01b8a314ec24e2e57e692e463dcc9b1b591befab02f714a60b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTTMN3L%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfVwmteQLwrTONNLky7ADRT7ssZdIVDh8NOkWKEtsqAiEA8kHXLa%2Fr2OiAGjVgfOXV5eKyypbYtEmpXnsl%2B2Usnc0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiAOi4yCivFm9IVBSrcAxG5ka2AWAlE8frfPt1aJoddrxNZmgCIufXPfJUEa7AhcrphNUiuqtxAkOyCSpc3aCS%2FJ4LQbm2OVAwUJGeBrXE1Zxhx6%2F8WEDij3nr3%2BpeJzHY9Aig4EhLj269%2FH0bAo4BvRxANOcRDmVmm4pHbjF9oZf4dVWVbByczgGwNi%2BGF%2FbznTAJISIWKmi8Ec1EZRT6NwXJ14NHu5Gnqd1GFLif7s9bac9hW855vWTFO37LFe0SkDQ7TwYj9HATHoOgJLEGdGfEReeBehN4G3p2O%2FTYxyXbucD47z2MB%2FLMABtM%2B9O8elgRYzIDdoZ7WTLMmrJnH7wew2y9dffQyZJWNkIWA6aYDeqLHAUgxrVjW9XD279uUIXFfOgj8mcETHlrlhOgEqK3Fdf8cuwjyBbzkO8GFNjlGt%2Ft4%2F8SkvpRKk9TSqxWXmJlEm6BgcfXl5GjrjwB4b5OHt4buk1WbuMLUHjBWRNy%2B2FDipM6LR%2BMLQfo1s8pSDYtlrnsY13ibM9mZ0eOBpdyCJuZR%2F%2FTuCqfqzwaw1BbxWRe4wrLg6UqJW8XLJwiF9XLpcimcdVR%2FL34ZPrfr%2BommNiQ3tDtV1diy5UohTwBbFIrLyW6yYH0NsI8N3nT9NsIkbNlOuxAGMJS6sM8GOqUB4Z4LNAqC8jp9hv%2FRlrS%2FU0pFFaPc9qlWutXNp%2BPp%2B3vuAidMFXmhXafGUA4k3qmuGYcVA2JoHecghqZzg36qb8bt9f%2FgO3yrD6N6HC3P9oXw931kh3dFuqwKTmCAiis68WVEpqRVyfEHs8A6adwzMaqkiglDl8KU0iuNgV1aJ36VDT2LS%2Bpn9J1WpBCyRpxxGR0WwRuRDtxYtuBJB8XlqW%2Bmc%2BJe&X-Amz-Signature=b052355ec96458c2d693e60c740ca72391100c47d67e3fd292c94e08398f2582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
