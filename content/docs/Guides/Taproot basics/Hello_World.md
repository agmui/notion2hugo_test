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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ7D3WTW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDixd6GC8x3i5Hc1rEUBL%2F6kW5pZQMvPMZzXLkecudVawIgAcoPbU7WAMpGaIK1eTjNv8J6dYpFtOZQ%2B3wDh0ryhQgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnwIWh29LWUqoKXoircAweZij1%2F7b15NN7KQr%2FGMo5SO2Ld3hwXhwO7RG7oNs%2FO4n62WLXgRnZrvchXguG0d%2B3XbNS1i%2ByB6RTrgV%2BlpziU6aPgoJWd1VXh65b96qZx17i7ovp6%2BBsBy95FTLOxouusQ9SzC0Hr8I3gR%2FTifrTbyo%2F25UJtLIqL1Ptg77pq8M65qXWnMaRVlXbE%2BnSfrjZiJrpZrnWU5EJ215do7ArwjzoRIDv1sUCLCT1SJj%2BHS6%2BtzOqE8MXqDEv4SyDrQCRB0sp2loXd4XPV9QkxbA7EPjtSzNpeiAgkCLZz8L2lcUcmxc7ATcjLUAWyAMIKzHyxeO%2Bbk8mcTef%2B0btl8Pz6WxEivqk85cD47G5WW1nl1K3FpAUe6LAMwL%2FDpwDuLXWwTIuAJeiHl%2F2m6Gnm4MsSKbzj7bO%2BXi%2Bq3DdnnQ%2BzrqwNZt97MKc3x6lD6%2FWj4B%2B4Tq9aolwtE9gIx1pRHhfr30WyAnupi5uXWaX00iEABq7ukZ%2FrxH6L%2Fo1crFMMt1i5XYhP58csjC%2BdV6U%2BnCZXbfg31g0ipv7xk8Aup1n0%2BYAE%2F65PkfslJHfw8BsdIBPQqSn6NollZMR4GvuITyEL9a4OBz8w7Hf0iONlc2osldu0ylB4kJ6%2BEuD8MLLYpr8GOqUBKtlxDWSGeONqiFcdPEwGeDFCUuwckL0KsSs0dc7okbIs3QPXVeWuy563c%2B1RNM6M3%2BD4t7QXpMF6i2BfZ02lioYFFOeKPfFJguRlkL3Ndg5Wy6zG1wWPvCgmLbhNPyihj8XTYPay3KKFtvIk%2FS%2FJDOHaQtuwN3%2Bie%2BmjlmI2kYQMlUGgzUjqsnpgmkqr2AQE%2FZopB7j77ezNYxYPegSCo8pSFPvm&X-Amz-Signature=ecfaffe21fae0b9f14166467baa4277de6e6a9e89a82235a44318b63fff5223e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ7D3WTW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDixd6GC8x3i5Hc1rEUBL%2F6kW5pZQMvPMZzXLkecudVawIgAcoPbU7WAMpGaIK1eTjNv8J6dYpFtOZQ%2B3wDh0ryhQgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnwIWh29LWUqoKXoircAweZij1%2F7b15NN7KQr%2FGMo5SO2Ld3hwXhwO7RG7oNs%2FO4n62WLXgRnZrvchXguG0d%2B3XbNS1i%2ByB6RTrgV%2BlpziU6aPgoJWd1VXh65b96qZx17i7ovp6%2BBsBy95FTLOxouusQ9SzC0Hr8I3gR%2FTifrTbyo%2F25UJtLIqL1Ptg77pq8M65qXWnMaRVlXbE%2BnSfrjZiJrpZrnWU5EJ215do7ArwjzoRIDv1sUCLCT1SJj%2BHS6%2BtzOqE8MXqDEv4SyDrQCRB0sp2loXd4XPV9QkxbA7EPjtSzNpeiAgkCLZz8L2lcUcmxc7ATcjLUAWyAMIKzHyxeO%2Bbk8mcTef%2B0btl8Pz6WxEivqk85cD47G5WW1nl1K3FpAUe6LAMwL%2FDpwDuLXWwTIuAJeiHl%2F2m6Gnm4MsSKbzj7bO%2BXi%2Bq3DdnnQ%2BzrqwNZt97MKc3x6lD6%2FWj4B%2B4Tq9aolwtE9gIx1pRHhfr30WyAnupi5uXWaX00iEABq7ukZ%2FrxH6L%2Fo1crFMMt1i5XYhP58csjC%2BdV6U%2BnCZXbfg31g0ipv7xk8Aup1n0%2BYAE%2F65PkfslJHfw8BsdIBPQqSn6NollZMR4GvuITyEL9a4OBz8w7Hf0iONlc2osldu0ylB4kJ6%2BEuD8MLLYpr8GOqUBKtlxDWSGeONqiFcdPEwGeDFCUuwckL0KsSs0dc7okbIs3QPXVeWuy563c%2B1RNM6M3%2BD4t7QXpMF6i2BfZ02lioYFFOeKPfFJguRlkL3Ndg5Wy6zG1wWPvCgmLbhNPyihj8XTYPay3KKFtvIk%2FS%2FJDOHaQtuwN3%2Bie%2BmjlmI2kYQMlUGgzUjqsnpgmkqr2AQE%2FZopB7j77ezNYxYPegSCo8pSFPvm&X-Amz-Signature=37b7f95013193a0fc522e33f963e5e22097ab829972b0b3bd2be1302f940a397&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
