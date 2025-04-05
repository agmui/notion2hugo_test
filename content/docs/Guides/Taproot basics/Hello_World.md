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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJXJKET%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRuK9tOCzFFxSQM5eMCBSfplwcj5cgzzERLNMq%2BYYEtAiEAo6pWwSGeDK1wbvAzMvAWarYgxGAKuPmqGPlpO1vqL%2BEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDO1s1QBS9ZiOlfdmOircA2517qDYmRwE3U7ozBTnj1kmTm%2F4HtlDVUQNiwcihhMfMIQvbGNhScsXzw6EWXGSJ9jVztUO0FtLAqLSrDc49K5YhBETgie%2BSCAdiT5MzL9C7%2ByWbNErF6EzzwzI5CD9S7RuDz3ABDiErrMOEIztJbtdhzK5kKjbX%2F3WqUQ1kE8oU6NOYYqTE6s6MjV5RItWUfSTVi6uwjIdEARRYX%2FLx9vBOgaVjRCwfap7WVXfg4WydBK09boj%2F1CB1cg99XL6Y9WCBM3cmYg3sccyN071%2Ba0oEWkuAELfjTCwhnqAQaQehmZS7EHSgb956Ee76KWtv1HaT31ZVyfbMK0AE06r8FoEIRn11h00Q2JnNReNaHPF2w0QRu%2BLS1OjMphvXtEsd8B19lsDFmtCBBttSPMrUe7oMAW1EZp8iFw2BNHDqqQKCLfZ82q5uznjMf2KPQuw4%2BqiWg%2B9s9Eh7u3A%2F3Dpc9CGfAu%2FXq0Ft%2Fmifad0yRjOgCIuU04LNIWLu6ozczd6%2Bb2Md%2BxJiOV8xByiRmB8BxOLmHNEvWRAbSnHtXHM9oZXv0B2T%2F%2BZ%2FNEf4up%2FE6HvUAGPRgcngUqlTVIYRHbTQaUCJ5jysB%2FPSV48dAS1E2miveqRAhTXSPHCfCiqMLzkw78GOqUBWUGz2iWqG7ffLevDz7ixEKvP2r2meAO7pAOJ0NYj5ZmAQq5Pi2sr7gpR2ivbbI8Bd7dFJ51K8XvDYKl9wKbUIXtB79oZBuI%2B4GisCix35vduZuGLfjTPSb7daIIET7SVPpU%2Ftx9wXU8IKGPSAodfIrdPgiRuSoBxO6yIom1Sblz88fliWW5vZBUVfc0q8OxxLg1GpVjnbDKTrCvkChlAayOGs3zw&X-Amz-Signature=98f8597042d484ba6d3a8d409ec96c015858ba8bd39a5fb9018624649b289cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJXJKET%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRuK9tOCzFFxSQM5eMCBSfplwcj5cgzzERLNMq%2BYYEtAiEAo6pWwSGeDK1wbvAzMvAWarYgxGAKuPmqGPlpO1vqL%2BEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDO1s1QBS9ZiOlfdmOircA2517qDYmRwE3U7ozBTnj1kmTm%2F4HtlDVUQNiwcihhMfMIQvbGNhScsXzw6EWXGSJ9jVztUO0FtLAqLSrDc49K5YhBETgie%2BSCAdiT5MzL9C7%2ByWbNErF6EzzwzI5CD9S7RuDz3ABDiErrMOEIztJbtdhzK5kKjbX%2F3WqUQ1kE8oU6NOYYqTE6s6MjV5RItWUfSTVi6uwjIdEARRYX%2FLx9vBOgaVjRCwfap7WVXfg4WydBK09boj%2F1CB1cg99XL6Y9WCBM3cmYg3sccyN071%2Ba0oEWkuAELfjTCwhnqAQaQehmZS7EHSgb956Ee76KWtv1HaT31ZVyfbMK0AE06r8FoEIRn11h00Q2JnNReNaHPF2w0QRu%2BLS1OjMphvXtEsd8B19lsDFmtCBBttSPMrUe7oMAW1EZp8iFw2BNHDqqQKCLfZ82q5uznjMf2KPQuw4%2BqiWg%2B9s9Eh7u3A%2F3Dpc9CGfAu%2FXq0Ft%2Fmifad0yRjOgCIuU04LNIWLu6ozczd6%2Bb2Md%2BxJiOV8xByiRmB8BxOLmHNEvWRAbSnHtXHM9oZXv0B2T%2F%2BZ%2FNEf4up%2FE6HvUAGPRgcngUqlTVIYRHbTQaUCJ5jysB%2FPSV48dAS1E2miveqRAhTXSPHCfCiqMLzkw78GOqUBWUGz2iWqG7ffLevDz7ixEKvP2r2meAO7pAOJ0NYj5ZmAQq5Pi2sr7gpR2ivbbI8Bd7dFJ51K8XvDYKl9wKbUIXtB79oZBuI%2B4GisCix35vduZuGLfjTPSb7daIIET7SVPpU%2Ftx9wXU8IKGPSAodfIrdPgiRuSoBxO6yIom1Sblz88fliWW5vZBUVfc0q8OxxLg1GpVjnbDKTrCvkChlAayOGs3zw&X-Amz-Signature=1ea673944033c512c73e3d6a68dc60a75cda5238ab80fed8ee31a187fc3ca3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
