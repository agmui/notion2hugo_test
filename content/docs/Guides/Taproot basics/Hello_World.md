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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AL35JJ4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIERsL%2FnkwLtJ7kHUeN63sd1zGWnOwnU25GMgoINw1o1vAiEA4TWNP1Padj3hzpgKvumS5bBJLLKvnE2nFxp10ayfiykq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC7IxTCrQN6nIRrV9yrcA7LymAP9L88bpl7ToZuAK8Q0jIx5CXFBHFHBkH5QTQ9IyqME85GsLhwSVaXz0rsRPRIzN7cm9wIEr9nLqpu6cmt3%2Ffuh9%2BytBHfFti1FtusTRP%2BgmXdzrayT60Rm3tLYzuTfC3itG%2FV%2FIyqoDl6bwnPgYlzYoYwI7BLSBHHGu93VkjebT%2FHB1uc8Vtjq9h8W5moaMPxOuzZQD95mDDXhnr8T9uo%2F9VZZdybssqctdXwuaSbJjF50DWFLT4ySBDt%2BxzoZp5lsRKilFQKPtC3PCauFNkU0UCNTloD%2BydQgCuY9xIWM%2BR85QaUMVyCbOY6mQE2%2B62dWgwDdaKjDPQTp%2BbUptCp%2FgHLwl0cKardu5TGFnx1WkUAKpTynmTnbDReAN4JnZk859%2BwfFD4v4KfNzu%2BHEN21GVsSJ%2F0%2FIGpZkGKhuLCxUek8E2n5x9WRT2XGVAYJBP47A4%2FRqmwHyXJwXy68BvCNls2co13MuDziQaN6Y8yFvEP6hBsXAo31STBnkeTnBOg%2BCGdHVyG5nvfGuLjlyA2wokwpFKEQOSkCTsHIHSnTFtDPz79Lm61VyBWAYRG4oqzIaE5g82BkLU0VzbA7U8Re0ZAG4Wts8oslGDmPkNn1ACEpFBPHSqICMP6sx8QGOqUB6APeu9RiR37%2BVb%2BIVraOIvqj26d%2FDRERqo%2BJhzKUEBZGQRyb9jv0A9oTtPZfL%2FoH1AC0qgUrcqxan%2FztUjxnfhmGl4BfGLct280kmfC3oHPUD5bVh6OwyUguM0w6TEWIlDrJxCT6pah%2FWWQJs4N3HXG0nOVsYzD1Xg8MeCrGm%2BM0BQNF50s2V0DHTt0gdcD4gwb93fm1kjusK%2BFe2DmwqbAMFVdv&X-Amz-Signature=842c396332da525445591a79122bf5675d3ba4f520e6ead7364fed2a081a8281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AL35JJ4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIERsL%2FnkwLtJ7kHUeN63sd1zGWnOwnU25GMgoINw1o1vAiEA4TWNP1Padj3hzpgKvumS5bBJLLKvnE2nFxp10ayfiykq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC7IxTCrQN6nIRrV9yrcA7LymAP9L88bpl7ToZuAK8Q0jIx5CXFBHFHBkH5QTQ9IyqME85GsLhwSVaXz0rsRPRIzN7cm9wIEr9nLqpu6cmt3%2Ffuh9%2BytBHfFti1FtusTRP%2BgmXdzrayT60Rm3tLYzuTfC3itG%2FV%2FIyqoDl6bwnPgYlzYoYwI7BLSBHHGu93VkjebT%2FHB1uc8Vtjq9h8W5moaMPxOuzZQD95mDDXhnr8T9uo%2F9VZZdybssqctdXwuaSbJjF50DWFLT4ySBDt%2BxzoZp5lsRKilFQKPtC3PCauFNkU0UCNTloD%2BydQgCuY9xIWM%2BR85QaUMVyCbOY6mQE2%2B62dWgwDdaKjDPQTp%2BbUptCp%2FgHLwl0cKardu5TGFnx1WkUAKpTynmTnbDReAN4JnZk859%2BwfFD4v4KfNzu%2BHEN21GVsSJ%2F0%2FIGpZkGKhuLCxUek8E2n5x9WRT2XGVAYJBP47A4%2FRqmwHyXJwXy68BvCNls2co13MuDziQaN6Y8yFvEP6hBsXAo31STBnkeTnBOg%2BCGdHVyG5nvfGuLjlyA2wokwpFKEQOSkCTsHIHSnTFtDPz79Lm61VyBWAYRG4oqzIaE5g82BkLU0VzbA7U8Re0ZAG4Wts8oslGDmPkNn1ACEpFBPHSqICMP6sx8QGOqUB6APeu9RiR37%2BVb%2BIVraOIvqj26d%2FDRERqo%2BJhzKUEBZGQRyb9jv0A9oTtPZfL%2FoH1AC0qgUrcqxan%2FztUjxnfhmGl4BfGLct280kmfC3oHPUD5bVh6OwyUguM0w6TEWIlDrJxCT6pah%2FWWQJs4N3HXG0nOVsYzD1Xg8MeCrGm%2BM0BQNF50s2V0DHTt0gdcD4gwb93fm1kjusK%2BFe2DmwqbAMFVdv&X-Amz-Signature=102c48333cc8d3abbf3144a693671a2f0f9f6f9a4222a07b4a3dbde3c9c3c173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
