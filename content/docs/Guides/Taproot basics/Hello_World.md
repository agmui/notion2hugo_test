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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWMTEBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2F3m7%2F8ERrGtY2sXoKOTsWhcXfiCitvLGNYHXOGOwoAiEAj3e6FrRQNKebgomzmGiRZokw9uKIjBcQyMg1J81Lr2gq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPjMsm5bgZtKuFOe%2BircA02Ue1%2FpLAeqMWNHJVOeuz8g9XOexQmV9z8E%2FiTupsxHBILL8Qg1pAiZ54f4QEnKql5tHiXjQ3mDFtR0tbUfMTIj%2BQHUpszlHu88DRPaXXljDTfwMLl5XrKcpUo5bhgVgMvImwthXaZUcI8jAMiLfIeexZEWgMUzG99%2B%2Fg0%2FrwyBclXIpQhxSWTGi%2FY8cqA%2BlHjWkzNqgAwSZl9Z03B4FWo8v6LArAvQjc8IY%2BioypceHl6vOHaqi%2BGx3cAWjeVyKP07ifXIOfqlHnFt6GPkhguDU4At06Mumj8xQz0dw5ksFZCokZCkVbOb7jlOtDa1QMCdWbUoyQFNInCn%2Fd3HLaubmconUl%2Fz45tH5YbdmfsZ7hQdY6WfN%2ByztpujBdWhM%2B04ntI3Y75LWfDTvuIHM%2FhkkKZjRCoh4JjEOixNLC%2Bw2iohTXCIS%2BQGigskgr7W%2B%2FM7QoWPM4qbCSsFJdmpXtXcoMgYGFEsWEj8Ysm%2BVWtRRs5LTCHcOCMcg%2FIIgehp%2BtUv6qJ49v8AQBctq%2B2fmPiSXCTuzxwKxTHMYAhDrLsOm3quyGWyhlaWrbPh8Ksj%2B1IEWwEgabZ9tQ27hC9bxFEN21qlvokONAzsa%2Bt%2FufbB7sCZ0F3PANmfaGKyMPL88r0GOqUBZMD1Q08BWqMCtib4EyzdytdSv1gpjsB5%2Ft3EAj7wG8L5Nw3%2BaOCxarw5WBJ7ib0gdsN3eq%2B%2ByEB1FiKT9TAp21ohvNSh%2FrovRJXnBWuBRrlspXDK0aPkHUt50Fl2hJ5vceY4IG1yThWMT7y6roTOpI5xePwCav0lT10nl6vhxFsD3ktXVI1GLeCwwg1d3rSPmuyF229DzMuTSR5ESyndd0FmYyV1&X-Amz-Signature=11b157087da04ab7b150ea4d8c4c678a0100c7162d3e45093e206249e21cad08&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWMTEBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2F3m7%2F8ERrGtY2sXoKOTsWhcXfiCitvLGNYHXOGOwoAiEAj3e6FrRQNKebgomzmGiRZokw9uKIjBcQyMg1J81Lr2gq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPjMsm5bgZtKuFOe%2BircA02Ue1%2FpLAeqMWNHJVOeuz8g9XOexQmV9z8E%2FiTupsxHBILL8Qg1pAiZ54f4QEnKql5tHiXjQ3mDFtR0tbUfMTIj%2BQHUpszlHu88DRPaXXljDTfwMLl5XrKcpUo5bhgVgMvImwthXaZUcI8jAMiLfIeexZEWgMUzG99%2B%2Fg0%2FrwyBclXIpQhxSWTGi%2FY8cqA%2BlHjWkzNqgAwSZl9Z03B4FWo8v6LArAvQjc8IY%2BioypceHl6vOHaqi%2BGx3cAWjeVyKP07ifXIOfqlHnFt6GPkhguDU4At06Mumj8xQz0dw5ksFZCokZCkVbOb7jlOtDa1QMCdWbUoyQFNInCn%2Fd3HLaubmconUl%2Fz45tH5YbdmfsZ7hQdY6WfN%2ByztpujBdWhM%2B04ntI3Y75LWfDTvuIHM%2FhkkKZjRCoh4JjEOixNLC%2Bw2iohTXCIS%2BQGigskgr7W%2B%2FM7QoWPM4qbCSsFJdmpXtXcoMgYGFEsWEj8Ysm%2BVWtRRs5LTCHcOCMcg%2FIIgehp%2BtUv6qJ49v8AQBctq%2B2fmPiSXCTuzxwKxTHMYAhDrLsOm3quyGWyhlaWrbPh8Ksj%2B1IEWwEgabZ9tQ27hC9bxFEN21qlvokONAzsa%2Bt%2FufbB7sCZ0F3PANmfaGKyMPL88r0GOqUBZMD1Q08BWqMCtib4EyzdytdSv1gpjsB5%2Ft3EAj7wG8L5Nw3%2BaOCxarw5WBJ7ib0gdsN3eq%2B%2ByEB1FiKT9TAp21ohvNSh%2FrovRJXnBWuBRrlspXDK0aPkHUt50Fl2hJ5vceY4IG1yThWMT7y6roTOpI5xePwCav0lT10nl6vhxFsD3ktXVI1GLeCwwg1d3rSPmuyF229DzMuTSR5ESyndd0FmYyV1&X-Amz-Signature=7d776b6872ae7a845bd829afcc78e35c608517c508b8dc93a8daf88973ebb839&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
