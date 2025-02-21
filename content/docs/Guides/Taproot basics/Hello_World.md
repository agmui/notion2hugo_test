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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FX5COR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtXWKfkW6NGzVrDDdBRIFrAsiz0Wi%2F1%2FtFxLSfxKS%2B9gIhAKia0VHEbX3fOb908iYgZ5pg%2FU5TWQpP39NXt5EUWus2KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzon5VEmM2FgHpcjWcq3ANS2aflS%2F0tvL2sXTFykS9GurvFHeNVDlt6QfZdfJDEO%2FV%2F2HZXyim70jtbbHMdrKkBeYQRIQldvxeb5Eo0cnZIHBI2hCtmNm%2Fyp4VbqeHgJMbQb3kFzbkZM6JzSLpV7kLjw2dr4hCp2eN7%2F3s79drvSVB5q5gpxGgTTOmplFlwEUxzCzb29os4SsS67g%2BNMu0B6X7Deerke61JumxUD6L7LbloxF5DdSh3Kt4UlCmZZnVYBiimlNZsPlOcQy8uxPQs%2BTL9eI%2FWnzSfnAlOX4ibdjwFzZV9JzE7JOe9h1%2BE602N6gk4mDNQtqauBo4XU9Mk0fYXeTmAbA%2Fz4wshsCKuoF2kBQXlHehxrMB9QGy5JMeWucvRQuD7IWNPfV1PcZHFrL%2FtlU7QGVD5KEpaQKCH8f1zXq21zqPTPr0M0gbv1PM6YY0n%2FI%2F1jVo4gYL3nn2ct5flOOEoN31kDL7ZUnMefU74VqdZQo254Mcllavp2B7apVwDWK%2B%2FYecqD3bO5Ar6jlVaFAwG5QaMvWS9%2Bxeq5BQkfyWXZPCkcrUHr%2BT3t4acYAK0sLamL0WzYm8XtM%2Bamu%2BVx%2FKxaZcAtkpVdB9%2Bi3tiQLVRkyXhgU54AwXdANdOQ76CJFLwAlaFhTDPu%2BO9BjqkAdNfm97KtnqzbnDMGYN9Gtx4sWix7Nbms3S%2BW4XYXPdzS19zoa41btR2iixEXtCDXri1v9Nq%2F5CFn2ZyhyZtzflZYnhGOBcQ3TrgK8fmFXGpostSuKFbg4A%2FskQDVvfojfnaTLCT03qPEmS5tqJZH9VFTKs%2FWiUKQo%2BKigNmZvCrTLfKVuNFYTnFNWdZaLAjU4EZZhTRjYJC37CmTLQsbJU9VeE%2F&X-Amz-Signature=9686ca1a74dadc31de184e05a54fa46bdb0a0c1f16c2dc973e4e55576914457f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FX5COR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtXWKfkW6NGzVrDDdBRIFrAsiz0Wi%2F1%2FtFxLSfxKS%2B9gIhAKia0VHEbX3fOb908iYgZ5pg%2FU5TWQpP39NXt5EUWus2KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzon5VEmM2FgHpcjWcq3ANS2aflS%2F0tvL2sXTFykS9GurvFHeNVDlt6QfZdfJDEO%2FV%2F2HZXyim70jtbbHMdrKkBeYQRIQldvxeb5Eo0cnZIHBI2hCtmNm%2Fyp4VbqeHgJMbQb3kFzbkZM6JzSLpV7kLjw2dr4hCp2eN7%2F3s79drvSVB5q5gpxGgTTOmplFlwEUxzCzb29os4SsS67g%2BNMu0B6X7Deerke61JumxUD6L7LbloxF5DdSh3Kt4UlCmZZnVYBiimlNZsPlOcQy8uxPQs%2BTL9eI%2FWnzSfnAlOX4ibdjwFzZV9JzE7JOe9h1%2BE602N6gk4mDNQtqauBo4XU9Mk0fYXeTmAbA%2Fz4wshsCKuoF2kBQXlHehxrMB9QGy5JMeWucvRQuD7IWNPfV1PcZHFrL%2FtlU7QGVD5KEpaQKCH8f1zXq21zqPTPr0M0gbv1PM6YY0n%2FI%2F1jVo4gYL3nn2ct5flOOEoN31kDL7ZUnMefU74VqdZQo254Mcllavp2B7apVwDWK%2B%2FYecqD3bO5Ar6jlVaFAwG5QaMvWS9%2Bxeq5BQkfyWXZPCkcrUHr%2BT3t4acYAK0sLamL0WzYm8XtM%2Bamu%2BVx%2FKxaZcAtkpVdB9%2Bi3tiQLVRkyXhgU54AwXdANdOQ76CJFLwAlaFhTDPu%2BO9BjqkAdNfm97KtnqzbnDMGYN9Gtx4sWix7Nbms3S%2BW4XYXPdzS19zoa41btR2iixEXtCDXri1v9Nq%2F5CFn2ZyhyZtzflZYnhGOBcQ3TrgK8fmFXGpostSuKFbg4A%2FskQDVvfojfnaTLCT03qPEmS5tqJZH9VFTKs%2FWiUKQo%2BKigNmZvCrTLfKVuNFYTnFNWdZaLAjU4EZZhTRjYJC37CmTLQsbJU9VeE%2F&X-Amz-Signature=de49502f3d5b4707b320207b4839b825d12323960521f16963718d7f547742e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
