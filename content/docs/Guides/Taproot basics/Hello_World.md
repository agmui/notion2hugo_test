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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVW2J6VZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdp8%2B4qnCtzeOE4Fw%2FYILoU%2F9Ie4jvDS3R192ANsK02gIgI%2FFV9LKrUnyzj%2BZ7hUylhIKMIVbSVijUzdnY2ML7f1Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBAmYDJF1m1nO4X%2FkCrcA5j%2Beva9U1bF6RAsX6jonBq8J6319Mt%2BLORW3NqbqjA72lWbDv8H9fO%2BgUsofhumnGuU4CFIXYzijdag2smSZ%2BSDuc%2BH0twMgNSPtZyX0t0RSgpQRESLUe3RUliP5se0vyzEcI6iKD6Amse34ORt%2F5Nvpz2vs424oiSOiOxxxHwlVtFOTZHQCpa16HNCrtRS5Z%2BQO4PGQJcxkb5N78lEZ59znp2n59HuvP0llZRFkthgpEbbvwD8MsM2U3Fn0Q39fKfpdM7kNi3Td3qvhik%2BjlV92DLS5%2F%2BeLXThoxKBX8cFhG290FC1Yn0LDPZDUjAIts1Al1qb9vsrUsj73qnsJb3DdF1pi%2BiH%2B1e9aAVmjsIrdkY48S%2FIMsWAHx2oTNVdMwwA3WbpeW0B9x1s6p7dzqLnbp6wcDTkCv4OTmDIDZWsrqzm3mJ9oSnu5rC6sOWbCs2hqQGx4vq4hPMoqHq42AH9a9yFJHUpHOUM25x4Lr2nd4c3OkSeynN1ezKYt259ld3kOSxumtqdgU6AbBfQIdZKbu26QcWnLIXlm8dN%2F%2BVdDx6%2BIWHwdhHpoi5c2AiAwyVFzowfT3f%2B9Vc9gn4oOB57yn7F4dvHKh7X%2FmkCElew1jgSJk2%2BIq8OTZtzMLi8ocEGOqUBUlqzMCCfsgHfI%2BIlTJvQHfXfZuZLRL%2Bp0vwEhA1JGaFNTZEsRIsuSpNtVF7w1HVhzyIvCQVTljUcPjOAzO%2F1O06aajxOi%2FHn55p%2FWhrYWYYjbu7%2B1PEMF60dMoD3eEl7ESz%2B7RJmbXoGdqIv1u3OW%2Fy6FBc8a01dyO7ZD67J727VBkP27KEViyUBg%2B%2B8TeTvobLnMKvBcvqC9mV1G5JzPqEizx5y&X-Amz-Signature=3354c6b22f6a5abf604ac4daf8330bf36f47f8101a21c88511bd08aa858a28f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVW2J6VZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdp8%2B4qnCtzeOE4Fw%2FYILoU%2F9Ie4jvDS3R192ANsK02gIgI%2FFV9LKrUnyzj%2BZ7hUylhIKMIVbSVijUzdnY2ML7f1Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBAmYDJF1m1nO4X%2FkCrcA5j%2Beva9U1bF6RAsX6jonBq8J6319Mt%2BLORW3NqbqjA72lWbDv8H9fO%2BgUsofhumnGuU4CFIXYzijdag2smSZ%2BSDuc%2BH0twMgNSPtZyX0t0RSgpQRESLUe3RUliP5se0vyzEcI6iKD6Amse34ORt%2F5Nvpz2vs424oiSOiOxxxHwlVtFOTZHQCpa16HNCrtRS5Z%2BQO4PGQJcxkb5N78lEZ59znp2n59HuvP0llZRFkthgpEbbvwD8MsM2U3Fn0Q39fKfpdM7kNi3Td3qvhik%2BjlV92DLS5%2F%2BeLXThoxKBX8cFhG290FC1Yn0LDPZDUjAIts1Al1qb9vsrUsj73qnsJb3DdF1pi%2BiH%2B1e9aAVmjsIrdkY48S%2FIMsWAHx2oTNVdMwwA3WbpeW0B9x1s6p7dzqLnbp6wcDTkCv4OTmDIDZWsrqzm3mJ9oSnu5rC6sOWbCs2hqQGx4vq4hPMoqHq42AH9a9yFJHUpHOUM25x4Lr2nd4c3OkSeynN1ezKYt259ld3kOSxumtqdgU6AbBfQIdZKbu26QcWnLIXlm8dN%2F%2BVdDx6%2BIWHwdhHpoi5c2AiAwyVFzowfT3f%2B9Vc9gn4oOB57yn7F4dvHKh7X%2FmkCElew1jgSJk2%2BIq8OTZtzMLi8ocEGOqUBUlqzMCCfsgHfI%2BIlTJvQHfXfZuZLRL%2Bp0vwEhA1JGaFNTZEsRIsuSpNtVF7w1HVhzyIvCQVTljUcPjOAzO%2F1O06aajxOi%2FHn55p%2FWhrYWYYjbu7%2B1PEMF60dMoD3eEl7ESz%2B7RJmbXoGdqIv1u3OW%2Fy6FBc8a01dyO7ZD67J727VBkP27KEViyUBg%2B%2B8TeTvobLnMKvBcvqC9mV1G5JzPqEizx5y&X-Amz-Signature=71cc2a27858af5b2547449817985cc75c43ee59e24a6c9d628ffbf4d96a313af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
