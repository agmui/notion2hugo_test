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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V5F7GP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFDmhUW83sI7tvm1DA0t%2FbSwWoPp3%2Bsy916kfiz27StQAiBqYXMmEiec23XrZtH%2FFd8zv57i8irLsSQsWbmQUS443Sr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMacVKsti9CPXlS7TkKtwDARrz2u%2Fk9wNoQL%2By7qo%2FEUWX2WFiCRTij4gRpm7Mf8BdKZndtJLP5mKsH%2FMgOKBlb4hBsttK9Sr5VB4X%2Bd7LZBQ1AcVhzbQtKfw36QNYqNXCHIyraGzjyJvuPZ9bA2%2BXYYGi%2F2yok1p3T6MF1FnKN9ktUmG5hJnwVl8A5K8cVDrBWPNW0zrgWyEARhyRpcV6LnDlXVLlTs477dsfNLUt9uRxtQZkm54cHIRNBWSamlvqK8Tz3VGoVgHEysNs%2BO%2B2a6sgbBsTXTGEBDaVrxOHx8Fc66qyRmXt9X3KdqIGEpydYgDLBwjk8npiIXjBeG4xMKVRoJw%2FBFyDTss7RzYdf%2FiMWL7iPfPMyrbOa7oraaori1hePnflqr6uJNH%2FC%2B8Iy4tX%2FhQO5AMw%2Bp6fQuOHMAsFei3HLO7v94dwq03YDvsGjtYEf8u6UAImL8w7kqUG%2BS5vtKvat60RWaAoGC8OqYof%2FWxdsB%2Frfx6SBa7STi1b2pAwO8cYmh3%2FluC2XZFgIBHf5Q8PIPrcFqAUKypx99dZ2RECupPUmkrePUqZ2gouzprZuYZyu3jF2erMoqnSal%2FHjdVZpS3BixlAMreneJN%2BciTiLyZ7Bo0SLCG0%2B%2BPgLD61tTU25lcMxpYwvY%2BswwY6pgGyLew%2BKXeWfxUJSBdZg%2FWXFqk%2FX6ykCuPHWyxQaMPsqnw%2Fk73fP0e5jaVoH4M1AgUYKhCuD7YWLQGL5%2Fe6ZBBJDDiwgnF1%2B5Ne6t5DikBDJeBlo7kbp%2F6qsYAmxSpzbsjQgmYKIbkfTeOKMsFuq2PO2PLxp7GQ9SSX%2BJ5ttQOlKSyTnKbvYc%2B8xju5uS6UdGUQC7vf555rRXWbBHoGiJxQcxHqxsVr&X-Amz-Signature=c609fe4a5d2f3e78fba28573fd542e856e7d9f6329ed74dda40d2bf714ab664f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V5F7GP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFDmhUW83sI7tvm1DA0t%2FbSwWoPp3%2Bsy916kfiz27StQAiBqYXMmEiec23XrZtH%2FFd8zv57i8irLsSQsWbmQUS443Sr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMacVKsti9CPXlS7TkKtwDARrz2u%2Fk9wNoQL%2By7qo%2FEUWX2WFiCRTij4gRpm7Mf8BdKZndtJLP5mKsH%2FMgOKBlb4hBsttK9Sr5VB4X%2Bd7LZBQ1AcVhzbQtKfw36QNYqNXCHIyraGzjyJvuPZ9bA2%2BXYYGi%2F2yok1p3T6MF1FnKN9ktUmG5hJnwVl8A5K8cVDrBWPNW0zrgWyEARhyRpcV6LnDlXVLlTs477dsfNLUt9uRxtQZkm54cHIRNBWSamlvqK8Tz3VGoVgHEysNs%2BO%2B2a6sgbBsTXTGEBDaVrxOHx8Fc66qyRmXt9X3KdqIGEpydYgDLBwjk8npiIXjBeG4xMKVRoJw%2FBFyDTss7RzYdf%2FiMWL7iPfPMyrbOa7oraaori1hePnflqr6uJNH%2FC%2B8Iy4tX%2FhQO5AMw%2Bp6fQuOHMAsFei3HLO7v94dwq03YDvsGjtYEf8u6UAImL8w7kqUG%2BS5vtKvat60RWaAoGC8OqYof%2FWxdsB%2Frfx6SBa7STi1b2pAwO8cYmh3%2FluC2XZFgIBHf5Q8PIPrcFqAUKypx99dZ2RECupPUmkrePUqZ2gouzprZuYZyu3jF2erMoqnSal%2FHjdVZpS3BixlAMreneJN%2BciTiLyZ7Bo0SLCG0%2B%2BPgLD61tTU25lcMxpYwvY%2BswwY6pgGyLew%2BKXeWfxUJSBdZg%2FWXFqk%2FX6ykCuPHWyxQaMPsqnw%2Fk73fP0e5jaVoH4M1AgUYKhCuD7YWLQGL5%2Fe6ZBBJDDiwgnF1%2B5Ne6t5DikBDJeBlo7kbp%2F6qsYAmxSpzbsjQgmYKIbkfTeOKMsFuq2PO2PLxp7GQ9SSX%2BJ5ttQOlKSyTnKbvYc%2B8xju5uS6UdGUQC7vf555rRXWbBHoGiJxQcxHqxsVr&X-Amz-Signature=afa52b822d6e2f4ac100129e18b307a339f5952bdca85ab0edf52cd683466c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
