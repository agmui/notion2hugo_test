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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IA7KVV6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGgDdcekaGJeNksVryB8navBI%2BaVe%2BCGhqBQA66Vdpd4AiEA2PhHj8qjvo15LfxYL3pQvgryQWUTbJlRNZCfiO0Hcycq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLJW2U6cuGAip7L%2BgSrcA9m3y%2FUcCc%2B%2BXAFg2e6yvidDOdpmneUCmX0KYQJ6kZUMMsDK7Yz004R8gaVK4vUx3Bz9LnzWA3CpY1DC3N6myH3aaASgwINrW4mFTW4TeK3KPdJUE42nr5Jh1PmJrYXjSJCRSQf%2B17dShzJgy0bfeCn1Q9cI6AwStxvqmLKeMQ9Hps1PKSaorZPDiRMDjoiuu%2FXw7%2BKQx03kufbvtP3w2m8X6IXGGwGuN%2FCDCDDMmyRh2Oq5CnSVRvfUo4jxze4Es7eZqCINSPxPhg8%2F49KT8azthzHPGWtaJfFXRsGDIbMVqnqIW80nB59lvPmHYG0wHnURtAwkK9eXdElV2g5H25x4DjTdRG%2BZt5hsCBTYWWeVqOcNUwzxA2YMl%2BF3xPygmWJg%2FiFyUqKrO9mcBlpV9kg3m3EcKfcw492B2%2FHcMN0G%2FRpbMATyhaRMlMmNrop0suoLMd4MTBA1IPOZ%2BGWGR1d7KiVGKI7y51XB519wVGhitWuH8qQsvFjcGBmENFVwTNqstVcXl3ONbwxM3Wl1Yt8l4uxnmrvdK7Nz7Rc9bBgAKBFjFQ2oT8%2Bdpn9lvCWdCWf4agdRK%2FCC2ap1w4ngMgq8fg0VIQMxieNTCUkP84L2evfYxYdENARtxbTcMJCMjb0GOqUBQlQ1voiWplSaLWHcbxYscaRFu3G7Y0YPAU3Kzm2snZDbR3sCfjQSJfHxaIcKOZXotEW64RM%2FnBdFysc1xuFKlyT3x3e0QcOmGI6tExoFAfWH4w%2FR%2FVKJqCxKv4a5SlnnIhJocImK6Ua%2FXGIuVNoYCjowVWAL5Tz7FP1HlvCsgA8%2FJQnMN%2BMPZUCkBT1Ey7hiG%2BgcyweY0ZUevN4gSTZ4pOrhWY81&X-Amz-Signature=5c7d15e011373e637b7f7acc822bd2b640493b12face6643dd4d9a5c4cf47e82&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IA7KVV6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGgDdcekaGJeNksVryB8navBI%2BaVe%2BCGhqBQA66Vdpd4AiEA2PhHj8qjvo15LfxYL3pQvgryQWUTbJlRNZCfiO0Hcycq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLJW2U6cuGAip7L%2BgSrcA9m3y%2FUcCc%2B%2BXAFg2e6yvidDOdpmneUCmX0KYQJ6kZUMMsDK7Yz004R8gaVK4vUx3Bz9LnzWA3CpY1DC3N6myH3aaASgwINrW4mFTW4TeK3KPdJUE42nr5Jh1PmJrYXjSJCRSQf%2B17dShzJgy0bfeCn1Q9cI6AwStxvqmLKeMQ9Hps1PKSaorZPDiRMDjoiuu%2FXw7%2BKQx03kufbvtP3w2m8X6IXGGwGuN%2FCDCDDMmyRh2Oq5CnSVRvfUo4jxze4Es7eZqCINSPxPhg8%2F49KT8azthzHPGWtaJfFXRsGDIbMVqnqIW80nB59lvPmHYG0wHnURtAwkK9eXdElV2g5H25x4DjTdRG%2BZt5hsCBTYWWeVqOcNUwzxA2YMl%2BF3xPygmWJg%2FiFyUqKrO9mcBlpV9kg3m3EcKfcw492B2%2FHcMN0G%2FRpbMATyhaRMlMmNrop0suoLMd4MTBA1IPOZ%2BGWGR1d7KiVGKI7y51XB519wVGhitWuH8qQsvFjcGBmENFVwTNqstVcXl3ONbwxM3Wl1Yt8l4uxnmrvdK7Nz7Rc9bBgAKBFjFQ2oT8%2Bdpn9lvCWdCWf4agdRK%2FCC2ap1w4ngMgq8fg0VIQMxieNTCUkP84L2evfYxYdENARtxbTcMJCMjb0GOqUBQlQ1voiWplSaLWHcbxYscaRFu3G7Y0YPAU3Kzm2snZDbR3sCfjQSJfHxaIcKOZXotEW64RM%2FnBdFysc1xuFKlyT3x3e0QcOmGI6tExoFAfWH4w%2FR%2FVKJqCxKv4a5SlnnIhJocImK6Ua%2FXGIuVNoYCjowVWAL5Tz7FP1HlvCsgA8%2FJQnMN%2BMPZUCkBT1Ey7hiG%2BgcyweY0ZUevN4gSTZ4pOrhWY81&X-Amz-Signature=05f78add8137fbfb96e0db8afdeddc2273ca840b3c12db78f1489a999e2e7c58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
