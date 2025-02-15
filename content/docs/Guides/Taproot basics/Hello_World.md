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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLK22GEW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD0nh4wsuGcReAaC018aruQNtmhlZJ9%2FzqlZC%2B6cs52cwIgSOD3s1XrLD6fbIdsNvk9sgwm2GS35qOSWya%2FMGoWFeoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCbdpX1XeiOt3Lr3nircA%2FSquncCfvQhqZ6AloGhuM4HXcIweUTXVfnfABu%2F7Y%2B6wjZB2rp4w5rkpF4IyBNTESr%2B7Dz6f5v3xXeXmDsdaziMs9vctlWCpO2XDQ9%2F0G9OrHP5Ar3EOxn%2FUyM4CPpWuSTGdCszaLhjiaEYzGMdhg3B25%2Fy7HFsZeVBUev6AoCFLgS9UsgnBAbQ4xa%2B6EhbeOU3UXGaJVwqicg6klFN%2B6INRW1IW5GZqlEy%2FW%2Bcuza2AQfVdXJGsM8LaFjtYItaQ7HmKfHN2pTEkQdWSpuutjv2l5swVMMDPeldr%2BHBk67hOqyiT%2B787KmYi4LZH0XyZ5afNpfapNwqlKFS2gp%2FcgrWZLOXfY9o%2B%2FPeyK80oBkWfyjTGA9bN1MrugZ6k7myJrtFUsJTVx9Atpk0rdPm%2FCcPOKV0HcFoxJUFL9miYuRWBUIMyI4bs%2F7H1pgjt8cEor6beEKgLCuhHrJtdS1T2kqEosmEwdNhSvzl9k%2FO09Wzixu%2BuJxkpC%2Fgx47hTPgNRmHXT%2B0qbZuALigcnRDv3d1L2Z1EL4PndUPHurvUEpU8tzrM24I13uNjVUDrwxOKIOjO6SPyas1WUz%2FNij92j7EFEj4QA8p4POctGg6RVk7gWnLtjDLQ%2F5RC6ok5MLiEwb0GOqUBHb%2BLns9nqWB%2BPMPiL78Pw6GE41YMlZhAU6qsK6UX7%2F6HPKx1SXO0l%2FYhn36R6rvYICbqeyt%2B92tNmwvcTU3VWFcfTA6yiNjCCkSaedfWkwc0n0e3krxVR5aBfa6Vo9TDeISYsNWBb4cJaiJHGIJm5ObPTDQYsMGRxtzZVXusLGwLnXvIG3M48ZiA%2BbtyjhXnUDWsmF9PbOkquQFhs5MDWtciK%2BeS&X-Amz-Signature=3bf59a33d4b44f0a5cfa2ed63ca462f1eb2e1e55c05674ebfd08130d68a9b728&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLK22GEW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD0nh4wsuGcReAaC018aruQNtmhlZJ9%2FzqlZC%2B6cs52cwIgSOD3s1XrLD6fbIdsNvk9sgwm2GS35qOSWya%2FMGoWFeoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCbdpX1XeiOt3Lr3nircA%2FSquncCfvQhqZ6AloGhuM4HXcIweUTXVfnfABu%2F7Y%2B6wjZB2rp4w5rkpF4IyBNTESr%2B7Dz6f5v3xXeXmDsdaziMs9vctlWCpO2XDQ9%2F0G9OrHP5Ar3EOxn%2FUyM4CPpWuSTGdCszaLhjiaEYzGMdhg3B25%2Fy7HFsZeVBUev6AoCFLgS9UsgnBAbQ4xa%2B6EhbeOU3UXGaJVwqicg6klFN%2B6INRW1IW5GZqlEy%2FW%2Bcuza2AQfVdXJGsM8LaFjtYItaQ7HmKfHN2pTEkQdWSpuutjv2l5swVMMDPeldr%2BHBk67hOqyiT%2B787KmYi4LZH0XyZ5afNpfapNwqlKFS2gp%2FcgrWZLOXfY9o%2B%2FPeyK80oBkWfyjTGA9bN1MrugZ6k7myJrtFUsJTVx9Atpk0rdPm%2FCcPOKV0HcFoxJUFL9miYuRWBUIMyI4bs%2F7H1pgjt8cEor6beEKgLCuhHrJtdS1T2kqEosmEwdNhSvzl9k%2FO09Wzixu%2BuJxkpC%2Fgx47hTPgNRmHXT%2B0qbZuALigcnRDv3d1L2Z1EL4PndUPHurvUEpU8tzrM24I13uNjVUDrwxOKIOjO6SPyas1WUz%2FNij92j7EFEj4QA8p4POctGg6RVk7gWnLtjDLQ%2F5RC6ok5MLiEwb0GOqUBHb%2BLns9nqWB%2BPMPiL78Pw6GE41YMlZhAU6qsK6UX7%2F6HPKx1SXO0l%2FYhn36R6rvYICbqeyt%2B92tNmwvcTU3VWFcfTA6yiNjCCkSaedfWkwc0n0e3krxVR5aBfa6Vo9TDeISYsNWBb4cJaiJHGIJm5ObPTDQYsMGRxtzZVXusLGwLnXvIG3M48ZiA%2BbtyjhXnUDWsmF9PbOkquQFhs5MDWtciK%2BeS&X-Amz-Signature=f96d1992f58d500100a2db1838fd217ee1b0717c91324e30b4aa2b047588c7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
