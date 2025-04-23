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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P33BVL7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCXznZiclllHyTRuYlccRf9icNrFWknzptaaRNyi%2BBcsAIgSyZeahntVNEg%2Bg5BvNXacOdYAaNG9lqD6xPJY%2BJLvFAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc%2FCEZFSL3zKtED6CrcAwCQrNoDmgTZig6y28rrZrtC1f8rEnqx%2FSVp2HQxDs4eMAJ6slA8EcVDrnkTm4aUnWZ1MoZ4LeO250imABfKyaVQqnWWSpxpg9TXgW4SoFMSd9V0K6zSUEpQiWfEk%2FVNfoh%2F2ByV9sRML5yl%2BTd6ZOJwbElwvZ7tjNK7rSmYnPNVLno6lQw%2FBr5YWSfVETz5O9o%2BEFpr6cZL6VvMNzRJn2WWiBvZzoQXbV2xZqKxvuyBZPZXi%2BdVGra7fXrP7t8pJaVhIOeXnjDqlMWlWFYQZ6b1CJlylqYIN2H%2BAOzzALoEXDzHu1jZgY3v7Stxo16KPwadT731m%2BGBS9%2Fe6jMEwdOo5yoTPXzf2Ghrrqk5O6pDFYYtpayhgU1Y9RKlksCep%2BJv%2Fl92bVzR3ANURC2UhFDYhGuwTCnvgU4sen4lrIWZ3NkPammIqelulVhrvAq6twL2QcRaMXBrfI6jF8EozFTBwLEOn314XG5xWHYD9txU6iK%2FA%2Fnoy%2BDs0qRiYAz%2FOmnRGm9UE28DkZ%2BTptJAKqV6tQXnfPRaj8PRWJv7XwS4t1B6a%2BDtAr2LxhxU1XZC%2F1lNiL5FWikSvwIu1lp8imwwW0bQ%2FhN%2B0KZUcfN3i85COL4MV%2BNV6r7TnJmIMM%2FNosAGOqUBV36FfGRN8oyqte8v7rimtazu%2FOltiDtzDv%2FUitNtezzSRIBEop5kUPvDvMWp1k6WVIn6DcCQrwygeVT5g5ryIAx09jG4diWCS9Ye8fyb9i5%2F4R%2BSJd%2BBM7kJpQ0WEd1znxw3gROLE9WyQg3mpBLFciV09hVF4UINEx4PVnyiQkdQvzIIJr7XCdRLAqEHLSBZ%2FQt9ZfeA9iNTon408bt%2Bq3DK77Uo&X-Amz-Signature=1b52a5e0e9c17dd5b698645a3ee3552a7d36e23ab3fc6867a4c6b91cbfc55cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P33BVL7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCXznZiclllHyTRuYlccRf9icNrFWknzptaaRNyi%2BBcsAIgSyZeahntVNEg%2Bg5BvNXacOdYAaNG9lqD6xPJY%2BJLvFAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc%2FCEZFSL3zKtED6CrcAwCQrNoDmgTZig6y28rrZrtC1f8rEnqx%2FSVp2HQxDs4eMAJ6slA8EcVDrnkTm4aUnWZ1MoZ4LeO250imABfKyaVQqnWWSpxpg9TXgW4SoFMSd9V0K6zSUEpQiWfEk%2FVNfoh%2F2ByV9sRML5yl%2BTd6ZOJwbElwvZ7tjNK7rSmYnPNVLno6lQw%2FBr5YWSfVETz5O9o%2BEFpr6cZL6VvMNzRJn2WWiBvZzoQXbV2xZqKxvuyBZPZXi%2BdVGra7fXrP7t8pJaVhIOeXnjDqlMWlWFYQZ6b1CJlylqYIN2H%2BAOzzALoEXDzHu1jZgY3v7Stxo16KPwadT731m%2BGBS9%2Fe6jMEwdOo5yoTPXzf2Ghrrqk5O6pDFYYtpayhgU1Y9RKlksCep%2BJv%2Fl92bVzR3ANURC2UhFDYhGuwTCnvgU4sen4lrIWZ3NkPammIqelulVhrvAq6twL2QcRaMXBrfI6jF8EozFTBwLEOn314XG5xWHYD9txU6iK%2FA%2Fnoy%2BDs0qRiYAz%2FOmnRGm9UE28DkZ%2BTptJAKqV6tQXnfPRaj8PRWJv7XwS4t1B6a%2BDtAr2LxhxU1XZC%2F1lNiL5FWikSvwIu1lp8imwwW0bQ%2FhN%2B0KZUcfN3i85COL4MV%2BNV6r7TnJmIMM%2FNosAGOqUBV36FfGRN8oyqte8v7rimtazu%2FOltiDtzDv%2FUitNtezzSRIBEop5kUPvDvMWp1k6WVIn6DcCQrwygeVT5g5ryIAx09jG4diWCS9Ye8fyb9i5%2F4R%2BSJd%2BBM7kJpQ0WEd1znxw3gROLE9WyQg3mpBLFciV09hVF4UINEx4PVnyiQkdQvzIIJr7XCdRLAqEHLSBZ%2FQt9ZfeA9iNTon408bt%2Bq3DK77Uo&X-Amz-Signature=ead2b34902e00120ab91740f9d24a37f886ce0a6a86e7661af24a8b79c9e78e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
