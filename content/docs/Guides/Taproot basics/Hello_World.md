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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNN5YAY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAkmCyw162%2FVdyVsD%2BTVHMVDwKyk1CzlHgo%2BSH0ApPgIgDorxeYXUIhB91oRDZFN2SYcR%2B9tFjS28McDu%2BMyB1yUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDL8MRWMk6rUct11nkyrcA2g2kdhWuxSk0aJDmKIIYVBceea2A3KN9KdhoDmIqmTJW7HIKRYm7vijMVUc2uJfvDs9RoxIMPXxhyPO3CJL2qy2gKE%2BEhOFhm3p6k0Dp1nSzjze3A7si4W1VjRXneeAR6Li5lywYGX9PHOFzPneqOcdwPLdX7AHW49x6Nz5fciX4cxdhdGLS0h3zLBrsqxCCWyv8Kq5f4XHaLxzdbGRh5%2Bri4Ay%2F1LC4gzU0NTyDczRCv8E4enBJHwVgVPG5%2BKjcXdACyccCU3TC31S4kZwDWZte9SmhFhXRp9jJTQlQMiIzbiPkLPioZpKNROtrQbyjCYCBm5bsnCEljVdXno8bAIDGd298dAeQvif51HxSlkEvAo%2BOy3Arb575Z54zE6N%2Bs6wlp9cFMu%2BmbxlwQH593k1CJ69Ry7ST4GTKwlb0AJH3lYTX6isuovPA9D3MJPoYPQlbyo0eYpSUI3sc51K8KQnns6B9Eitu%2FpERcGFfITHw804JbERTdke13tgW%2B3b37pt0SAIYj7kDuwGkORlSyVxeI5E%2FQhodfBVGQ8ZBVnwObThhFKrUqdCyRSiujkmf%2F0zx0teVoWJ%2F%2Fcq%2F%2F0ldACebtzge9sWNZ842HHJ2RLNMEJ1AMfbtURa%2B%2BN0MMjGo74GOqUBiGh6VjZcUo81FuZWIbkD4ctx81DhSAeSsa12SD%2B8yRLzMWW5Df6qsytLvGBV8Vt2u%2BWK9dRpbgnQ3Fw%2B60UCTF8%2BR37%2BIXfsmJsDIeSxiIBZENvLjFnhmcMHgb74z9W8Wt0OK3hBjOmbmon3D%2F5EtiyxzwHuYrFwOtCEdpd4%2BSX1VOVh53So6GvLMNGwBCBrfBzMToUPIPQ5zff02FVp2vrpPCMZ&X-Amz-Signature=adcd9c086507ddedd71239332f26e720dbf04eafa7d7a541143b662e006cc230&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNN5YAY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAkmCyw162%2FVdyVsD%2BTVHMVDwKyk1CzlHgo%2BSH0ApPgIgDorxeYXUIhB91oRDZFN2SYcR%2B9tFjS28McDu%2BMyB1yUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDL8MRWMk6rUct11nkyrcA2g2kdhWuxSk0aJDmKIIYVBceea2A3KN9KdhoDmIqmTJW7HIKRYm7vijMVUc2uJfvDs9RoxIMPXxhyPO3CJL2qy2gKE%2BEhOFhm3p6k0Dp1nSzjze3A7si4W1VjRXneeAR6Li5lywYGX9PHOFzPneqOcdwPLdX7AHW49x6Nz5fciX4cxdhdGLS0h3zLBrsqxCCWyv8Kq5f4XHaLxzdbGRh5%2Bri4Ay%2F1LC4gzU0NTyDczRCv8E4enBJHwVgVPG5%2BKjcXdACyccCU3TC31S4kZwDWZte9SmhFhXRp9jJTQlQMiIzbiPkLPioZpKNROtrQbyjCYCBm5bsnCEljVdXno8bAIDGd298dAeQvif51HxSlkEvAo%2BOy3Arb575Z54zE6N%2Bs6wlp9cFMu%2BmbxlwQH593k1CJ69Ry7ST4GTKwlb0AJH3lYTX6isuovPA9D3MJPoYPQlbyo0eYpSUI3sc51K8KQnns6B9Eitu%2FpERcGFfITHw804JbERTdke13tgW%2B3b37pt0SAIYj7kDuwGkORlSyVxeI5E%2FQhodfBVGQ8ZBVnwObThhFKrUqdCyRSiujkmf%2F0zx0teVoWJ%2F%2Fcq%2F%2F0ldACebtzge9sWNZ842HHJ2RLNMEJ1AMfbtURa%2B%2BN0MMjGo74GOqUBiGh6VjZcUo81FuZWIbkD4ctx81DhSAeSsa12SD%2B8yRLzMWW5Df6qsytLvGBV8Vt2u%2BWK9dRpbgnQ3Fw%2B60UCTF8%2BR37%2BIXfsmJsDIeSxiIBZENvLjFnhmcMHgb74z9W8Wt0OK3hBjOmbmon3D%2F5EtiyxzwHuYrFwOtCEdpd4%2BSX1VOVh53So6GvLMNGwBCBrfBzMToUPIPQ5zff02FVp2vrpPCMZ&X-Amz-Signature=c1a41b97c447452c6e03b01525540197b7f0bc39ae66c45a4265517671d5e355&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
