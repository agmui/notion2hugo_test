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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IMANQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqkbwoRKztCQEDLG506K2585Kkl%2FL07jQWOp0gA8CwEgIgJzfSCZfHKX6cjsGscc90zrr%2B7nzZVkLcIne7S2S%2BS3gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOJqWo6rE2buW3brNyrcAxkycUsqn7y%2FAf6epIiQZfmDnYQK4ChSK%2FVrRGAFLtFQichj8n9bwNG6mOwFOFW3cNDGW6PcXsuf7lMkbjFRvmeEYiHqpU%2FIuNOaiPBkXvyOea3n7ITOeesuWlOq42b5J3FGeaC1j%2FS476xq%2BfU%2BKHqKDmQdF9BOq2qglNQq3hI6eKPm%2Bn0ba8bv8h3EuhBhx5Td91WB4Eowd9B7iMCAYSsHdt8KBIWMNe42d2EnAJMPtv2%2B70UNGebIUdP6RYtJrWQwIoeKjl0VBaJUGhih%2B5mZjae9Eh2almmsdTBETHNdL33DU3aeF44oDWeact8R10HljSiJasUAE1FGN6AA%2FPhsA5FpEMvEFTg9CxwYK7wx73m4bG29zVVm6yGJ5SbgBi9weGg4OFojRcxwqBLib%2FpGGtnAxPFlaDD%2BKaMpeZ55L5R%2BCUWZ%2B8cml9NOwtlpvfa4Y0ZuKudJdquI7y4CTny%2FzmfpX%2BKBc7JQfXN9T59TERO2MzdnLWvcV05r3YTVqcF4qhe71dd%2ByMFZA%2BPavwXBBE5R3fEHH%2FHotfx%2F0%2BjxWbuQx4rN%2FRu0cLXW%2BqjEGeZqwtpL4m2fVcC7soB%2FQzmdxlniqOJ%2FchhP3AoRirGvGUXGzB80MZXdNanxMKS%2Bi8IGOqUBOyq%2BIU8wikpaDorDC1veBHeouRE6%2F6kcFjFqnxf5B0bp9%2BwvPuSWtolvdyZr3GgSgj0HgEQBmKYWbLYotSm9s%2BV4xmV1U%2BbXgIwGVTEModOJAkw%2FC%2F6f4lRr3ruPArHHehGsx9oyd1ltnrzwn6HKegRzIvqh6Nqy7rWaLsTWbM3Z1PCeV1hDrRBe%2Fc03OpiaqWStrMxzV%2FDIkkD2CrCClE0pG7BD&X-Amz-Signature=bc37a7733b8eb1dc70b5c3a62265c727896fc4468860fe9673117017dcc0c154&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IMANQ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqkbwoRKztCQEDLG506K2585Kkl%2FL07jQWOp0gA8CwEgIgJzfSCZfHKX6cjsGscc90zrr%2B7nzZVkLcIne7S2S%2BS3gq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOJqWo6rE2buW3brNyrcAxkycUsqn7y%2FAf6epIiQZfmDnYQK4ChSK%2FVrRGAFLtFQichj8n9bwNG6mOwFOFW3cNDGW6PcXsuf7lMkbjFRvmeEYiHqpU%2FIuNOaiPBkXvyOea3n7ITOeesuWlOq42b5J3FGeaC1j%2FS476xq%2BfU%2BKHqKDmQdF9BOq2qglNQq3hI6eKPm%2Bn0ba8bv8h3EuhBhx5Td91WB4Eowd9B7iMCAYSsHdt8KBIWMNe42d2EnAJMPtv2%2B70UNGebIUdP6RYtJrWQwIoeKjl0VBaJUGhih%2B5mZjae9Eh2almmsdTBETHNdL33DU3aeF44oDWeact8R10HljSiJasUAE1FGN6AA%2FPhsA5FpEMvEFTg9CxwYK7wx73m4bG29zVVm6yGJ5SbgBi9weGg4OFojRcxwqBLib%2FpGGtnAxPFlaDD%2BKaMpeZ55L5R%2BCUWZ%2B8cml9NOwtlpvfa4Y0ZuKudJdquI7y4CTny%2FzmfpX%2BKBc7JQfXN9T59TERO2MzdnLWvcV05r3YTVqcF4qhe71dd%2ByMFZA%2BPavwXBBE5R3fEHH%2FHotfx%2F0%2BjxWbuQx4rN%2FRu0cLXW%2BqjEGeZqwtpL4m2fVcC7soB%2FQzmdxlniqOJ%2FchhP3AoRirGvGUXGzB80MZXdNanxMKS%2Bi8IGOqUBOyq%2BIU8wikpaDorDC1veBHeouRE6%2F6kcFjFqnxf5B0bp9%2BwvPuSWtolvdyZr3GgSgj0HgEQBmKYWbLYotSm9s%2BV4xmV1U%2BbXgIwGVTEModOJAkw%2FC%2F6f4lRr3ruPArHHehGsx9oyd1ltnrzwn6HKegRzIvqh6Nqy7rWaLsTWbM3Z1PCeV1hDrRBe%2Fc03OpiaqWStrMxzV%2FDIkkD2CrCClE0pG7BD&X-Amz-Signature=e68af83b352d57f255674036be82e40c0e98f4087c3effe928ef22a6af4cc2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
