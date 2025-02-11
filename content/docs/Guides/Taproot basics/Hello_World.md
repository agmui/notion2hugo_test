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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJA2CAQV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp0%2Fqw6AVDW6dr1KUxXAEvwZ25hcMESUdsUw7ifliHZAIgYn%2BSQZkQfnYJtwTzrajhyoiRtdSqPGYftzGGSEvwk6AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYE8C%2B%2BwY7l0LhFaCrcA3m7%2BJE3l5E1VbOtYHo%2FAO4LWcIcJP2o9EZubrjLSa11BpIPdSzykbsZIkS12rZrRaO%2FIsB3if7u%2FC5tB9oqN7efJD3FcHukPfnY4sT3ohuSRoeOBEfFcAJx1X5vKlmyixfP5HwMkFqZH7%2F6hYkgABglestf%2B9oTRk4e4kvdPYlfXSe5DVIpWKdHVXRsxX4ZZ24Mmf%2BBfWhpCAX9gc4aqZSXWRskJVHLC1PRPfblcpgBEIcXVXBoflFNzghKBHluOsEdnv48CgRY2XR0SYLacbMg1zjyrvNeqx5tAdzhoWUZEjQP3c2Lh421RmSwocVzunq3LSwMoyG5EMn5l9yPX1E4g5zEQ2zgwW2qsWjIol9KlGfiFhr%2F9RzoRUZGAJ2rtgCyyyQEllsRGKU8ZLFRHPaDPPQk%2FlfEIVxopEttdEO0ei04S4USo5I9JnR%2BwVqe0nuZ4s2f%2BCrzPtIvq7NcIumWwEsGjmHJyoG1INet79fnAxiVZzT%2Bw9%2FdEoYwt2OT80DG%2FimjeI%2Fr2PGxJnzfceFmzmBsTnbNLmEzmjarxfelbG%2F%2B%2BTSTg8iviC5JnRRL2pL8InSOgRqGvMCfopjxbl6shkSsd7HXOeXtmH2oplSnC12w1qwYxZIqk6lxMICurr0GOqUBnefky1TmY%2FuTB1Wc35IPc3zW8lDm%2FQPTDsXFc0xdP%2FFzad92RRmMd%2BTKBnaEFWAInvT3jhStzdt4KP49%2BB3SZvl83Yco46R3QSmdOqygrgqgNlC6Ywud5HzkF%2FAVDY%2BYVYY60YpInLscvkwToXYmh2wyeGto8Vd4fYpw7lBVdycTIH%2BvMcKNQ4X%2BpmKxOfh9cQwt1PytAPgV2Qty4tnSbVQ0M2Xv&X-Amz-Signature=e7def09117d8f5965ed125dbc6bbf19e2b7f5e9b013c6a760772a5a116519e47&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJA2CAQV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp0%2Fqw6AVDW6dr1KUxXAEvwZ25hcMESUdsUw7ifliHZAIgYn%2BSQZkQfnYJtwTzrajhyoiRtdSqPGYftzGGSEvwk6AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYE8C%2B%2BwY7l0LhFaCrcA3m7%2BJE3l5E1VbOtYHo%2FAO4LWcIcJP2o9EZubrjLSa11BpIPdSzykbsZIkS12rZrRaO%2FIsB3if7u%2FC5tB9oqN7efJD3FcHukPfnY4sT3ohuSRoeOBEfFcAJx1X5vKlmyixfP5HwMkFqZH7%2F6hYkgABglestf%2B9oTRk4e4kvdPYlfXSe5DVIpWKdHVXRsxX4ZZ24Mmf%2BBfWhpCAX9gc4aqZSXWRskJVHLC1PRPfblcpgBEIcXVXBoflFNzghKBHluOsEdnv48CgRY2XR0SYLacbMg1zjyrvNeqx5tAdzhoWUZEjQP3c2Lh421RmSwocVzunq3LSwMoyG5EMn5l9yPX1E4g5zEQ2zgwW2qsWjIol9KlGfiFhr%2F9RzoRUZGAJ2rtgCyyyQEllsRGKU8ZLFRHPaDPPQk%2FlfEIVxopEttdEO0ei04S4USo5I9JnR%2BwVqe0nuZ4s2f%2BCrzPtIvq7NcIumWwEsGjmHJyoG1INet79fnAxiVZzT%2Bw9%2FdEoYwt2OT80DG%2FimjeI%2Fr2PGxJnzfceFmzmBsTnbNLmEzmjarxfelbG%2F%2B%2BTSTg8iviC5JnRRL2pL8InSOgRqGvMCfopjxbl6shkSsd7HXOeXtmH2oplSnC12w1qwYxZIqk6lxMICurr0GOqUBnefky1TmY%2FuTB1Wc35IPc3zW8lDm%2FQPTDsXFc0xdP%2FFzad92RRmMd%2BTKBnaEFWAInvT3jhStzdt4KP49%2BB3SZvl83Yco46R3QSmdOqygrgqgNlC6Ywud5HzkF%2FAVDY%2BYVYY60YpInLscvkwToXYmh2wyeGto8Vd4fYpw7lBVdycTIH%2BvMcKNQ4X%2BpmKxOfh9cQwt1PytAPgV2Qty4tnSbVQ0M2Xv&X-Amz-Signature=ea1cf7654701035ad0fc19de0cf9889da59f3fac312c2a438351e8f8bce9bf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
