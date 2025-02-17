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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C22Z5TA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAjwxQGn9X1oyNQfwZQdRAScTmAt5ihE4c8pH%2B7nVergAiEAyK3xpGV07VR0EHCrd%2F2ubK%2F6QfSdayRbNHCLydI2vogq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABDyUfTschcmU3BRircA%2BsVWieqjf54cyGcMnGG5cHzYye0wNzxtrmF4D6uvMi1FCANhc4Y%2BK018oQ4p1y4ofYw4yBNDwBj9XM%2Bl2H8my5A4A87K%2F2N8G01nMUPWkvsbKPA68nPtMNWjIrX8mEnOmo5A7lfR6uW6t4mXEQstNQX4P0pxNc%2FLaiz3Nr7XSnFXqtDpzqVjMe8x7jaQUXSJUNjCvuueQbOFPoxKWFi24sW8HUdQVd1bQ8g0yJIkARsUWiu%2Fm0T1kW%2BPFbNeWTPuCO20u6N3kt%2BFruMRycsSMwpUXpPHUqDqmNV5guWjNyYov0QclGL6mxyEV1E1kz3ieeUAVV4uLGOOuHJyfXRdCyBCyOnDmwa3Pg1G%2FUByVF6Yw9Yi1GZOc1XFXL0AWEpLh3iEN%2ByyOglImbHcHRmC1l1%2B13t4Ng8iG7JZoTccl4O%2FVImbJ%2Fe2pcSXuvykXqOueN3MJW6GIDLGeStBH1awuyfqfGLpauaoBEVlzUmbRKzYz%2BAMFi2id4pz87yYALlVE2Rl2sbxa6O4aSOrFT2cjl1sPuiv45RjPxZ9YeNgrZgc8YDwePdE%2BDhBX5%2BHVqcPdmB%2BGh5%2BVby6lrC3hUn%2BdAijyawupnnUQQRovjyq%2FZsfJf%2Ft%2FBl02ribA2wMI6Byr0GOqUBua9NoNjMIkSCjZKVlr502opgld%2BdteS3zp%2FHRbpdTMO%2FYLKsmNlWBk1qDJep%2Fe0V8%2BUTM8drVlk%2FmaQMIhPtk2p5GE3bZ6kr18Q1tDMwGs8TWopOYrQ0x39ZelUm5YvnmgJOGi3VW9VTK9KQrIRtqY%2BhBC0fYYUdDo19UTppP2wRCyPTgrDC3H%2BHxQ9WRVGR5JwBrO%2FhjGKcfzZSwW4MUXDOFa1h&X-Amz-Signature=afff1a8fc0e64ad1f4d234f61b48719ba79eb96aad2a33b26c0be39e101000f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C22Z5TA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAjwxQGn9X1oyNQfwZQdRAScTmAt5ihE4c8pH%2B7nVergAiEAyK3xpGV07VR0EHCrd%2F2ubK%2F6QfSdayRbNHCLydI2vogq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABDyUfTschcmU3BRircA%2BsVWieqjf54cyGcMnGG5cHzYye0wNzxtrmF4D6uvMi1FCANhc4Y%2BK018oQ4p1y4ofYw4yBNDwBj9XM%2Bl2H8my5A4A87K%2F2N8G01nMUPWkvsbKPA68nPtMNWjIrX8mEnOmo5A7lfR6uW6t4mXEQstNQX4P0pxNc%2FLaiz3Nr7XSnFXqtDpzqVjMe8x7jaQUXSJUNjCvuueQbOFPoxKWFi24sW8HUdQVd1bQ8g0yJIkARsUWiu%2Fm0T1kW%2BPFbNeWTPuCO20u6N3kt%2BFruMRycsSMwpUXpPHUqDqmNV5guWjNyYov0QclGL6mxyEV1E1kz3ieeUAVV4uLGOOuHJyfXRdCyBCyOnDmwa3Pg1G%2FUByVF6Yw9Yi1GZOc1XFXL0AWEpLh3iEN%2ByyOglImbHcHRmC1l1%2B13t4Ng8iG7JZoTccl4O%2FVImbJ%2Fe2pcSXuvykXqOueN3MJW6GIDLGeStBH1awuyfqfGLpauaoBEVlzUmbRKzYz%2BAMFi2id4pz87yYALlVE2Rl2sbxa6O4aSOrFT2cjl1sPuiv45RjPxZ9YeNgrZgc8YDwePdE%2BDhBX5%2BHVqcPdmB%2BGh5%2BVby6lrC3hUn%2BdAijyawupnnUQQRovjyq%2FZsfJf%2Ft%2FBl02ribA2wMI6Byr0GOqUBua9NoNjMIkSCjZKVlr502opgld%2BdteS3zp%2FHRbpdTMO%2FYLKsmNlWBk1qDJep%2Fe0V8%2BUTM8drVlk%2FmaQMIhPtk2p5GE3bZ6kr18Q1tDMwGs8TWopOYrQ0x39ZelUm5YvnmgJOGi3VW9VTK9KQrIRtqY%2BhBC0fYYUdDo19UTppP2wRCyPTgrDC3H%2BHxQ9WRVGR5JwBrO%2FhjGKcfzZSwW4MUXDOFa1h&X-Amz-Signature=c1f6794e615ac2bde68c8b41733e22bfad0301ec49e03bde37a5a4de6caea94f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
