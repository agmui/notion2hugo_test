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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWYBWA4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB78l638ivJzFpOMb0AG6OpgLpr4pn9sQ%2BOQ7vDeCnuAiEA07fj7yDTGY0ystA6R26s2pXGApedHu2BTSGs9emdsAsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwH3bX4417XjVl4ICrcA9tiDwJVPIwmR8y0C0PAzx4YM06XwfyT4N6D4gP2OEcf7TmdH%2Bd0hn6ecLpwBMjvkxiLi9j8cSTMkOaUJL8gk8NMx1Bqk6y7smhLIrV1%2BmTj8cOOLpL1uHSvGLzshCLTCRFDxPjjAeDQ3XeEyPoc3Jhe04htGA2Ne75zrwB6%2F2fdlAsnne9OGJjSGmtzVd%2B4sl4W9Alt03S%2F6ftlg%2FUNDTHYwuh%2F%2F3xipIKEpz31yByjfMORoHmGWcKMs4XSGmCLNVT6i4iMb82XLTH%2FE2RsZWw%2Bpt4lFMV0lmIvsfnxyA1S2Ue6ZaCdEv9uCTr1Mez%2BoespOpyikX%2FQuZz21G%2BXc%2B3k6Q%2FZBAuYUlCZ7MnrJVSSL2CcCKFtdGCaXmmY9nO4T4fcwoGf5s4ZLJCPTgSezg%2FwTieKpBIIEgqpqc5tJ7Tann8XrRHuOBZiyFOzK35bDZdFyt6ebN0oq4%2B%2Ff1s55m1FRZGibVpJYZPNWN%2FbXwYZUnDqHJSeF62hxAPeKj7OWLinMsd8JFUGVg%2Bj%2BWvxWO3gFEhvYJtXeIgUYkY1MSMNfN3HRTpTKNvLDx8swvUUZDn6vAQbScr6ur%2FpxBv2MbW4chNE68hFCSb2605%2FYBbyCIpkSUneVpxxyORvMIfI5b0GOqUB1w5XCSQBo%2FQN91UrRbUpjK8ov4wSInLwiAm4ljgQqKHztzYGh9%2BKEkW65L6Rf7LIyPR5578towtwWM1R1lXb2cNbqXJNg255ou49dl6wUpyJ4xLmbli0yeXwa%2Bb431h0W2o4GMHrpT5VCIVjGkZv%2BbdbMPvvXuiYbsdjLcD1oSLp1SKchsrF8%2B68yt4thKMPi3aCmqkH24BZYnhGBxWVv%2B9MyiVa&X-Amz-Signature=8e4aed91772810e38c4c4fe3560f212187cea1260dfa815021b1b6bc5fa305d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWYBWA4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB78l638ivJzFpOMb0AG6OpgLpr4pn9sQ%2BOQ7vDeCnuAiEA07fj7yDTGY0ystA6R26s2pXGApedHu2BTSGs9emdsAsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwH3bX4417XjVl4ICrcA9tiDwJVPIwmR8y0C0PAzx4YM06XwfyT4N6D4gP2OEcf7TmdH%2Bd0hn6ecLpwBMjvkxiLi9j8cSTMkOaUJL8gk8NMx1Bqk6y7smhLIrV1%2BmTj8cOOLpL1uHSvGLzshCLTCRFDxPjjAeDQ3XeEyPoc3Jhe04htGA2Ne75zrwB6%2F2fdlAsnne9OGJjSGmtzVd%2B4sl4W9Alt03S%2F6ftlg%2FUNDTHYwuh%2F%2F3xipIKEpz31yByjfMORoHmGWcKMs4XSGmCLNVT6i4iMb82XLTH%2FE2RsZWw%2Bpt4lFMV0lmIvsfnxyA1S2Ue6ZaCdEv9uCTr1Mez%2BoespOpyikX%2FQuZz21G%2BXc%2B3k6Q%2FZBAuYUlCZ7MnrJVSSL2CcCKFtdGCaXmmY9nO4T4fcwoGf5s4ZLJCPTgSezg%2FwTieKpBIIEgqpqc5tJ7Tann8XrRHuOBZiyFOzK35bDZdFyt6ebN0oq4%2B%2Ff1s55m1FRZGibVpJYZPNWN%2FbXwYZUnDqHJSeF62hxAPeKj7OWLinMsd8JFUGVg%2Bj%2BWvxWO3gFEhvYJtXeIgUYkY1MSMNfN3HRTpTKNvLDx8swvUUZDn6vAQbScr6ur%2FpxBv2MbW4chNE68hFCSb2605%2FYBbyCIpkSUneVpxxyORvMIfI5b0GOqUB1w5XCSQBo%2FQN91UrRbUpjK8ov4wSInLwiAm4ljgQqKHztzYGh9%2BKEkW65L6Rf7LIyPR5578towtwWM1R1lXb2cNbqXJNg255ou49dl6wUpyJ4xLmbli0yeXwa%2Bb431h0W2o4GMHrpT5VCIVjGkZv%2BbdbMPvvXuiYbsdjLcD1oSLp1SKchsrF8%2B68yt4thKMPi3aCmqkH24BZYnhGBxWVv%2B9MyiVa&X-Amz-Signature=a2b9d4d8b51084e73e88fabbcd3f062bd050fcc5d5b36468ac72b7368a4d72af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
