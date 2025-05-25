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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645R3OSQE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCkxmrmU2GqKbf6NXtTgCL2It3yUc45G4FjZ8xRMkeTfwIhAJRMg5foEpboJTypNE%2FkkeJgp436Y%2F5WG4%2Fs3lMtPGdAKv8DCCQQABoMNjM3NDIzMTgzODA1IgyKw7U07ZxwinB9VPcq3ANKo0JUDtpXachB94tcg%2BvdpvlHNPzOFKz2VTRto0tuYXN0SzjebUGR30ZO0Q2d9O5sO9ur8ndnQ7FxRNgYR%2Fovaw0bzTq4mE3ijprh1y1FXr2rrAsoq827R1cniGeAX8WOsiwOrtZkz84Lb%2FenUvMJmmAAXdVm7nyuB%2FwStV2YS2hML%2FDbfZssv%2B6cbpEQqs%2FZUYN%2Fp4eFhx1gIxTcoZMlzbvelgDQNvHwSe%2F05iz%2FmY5y%2B0p5UaJuvUvqQsXJqurxGWjGyXe2MyzpEF84MjudTCM%2BUOUGnsC%2B%2Bu4OL5tWOQ45hJstKIOHpS2JKOw2seVYh%2FCg%2FaliN29qUXxQilLR1ocv%2FGSsmrE8nIrDlG7UyOx8r49YrPM1flHcK3RzPN6zf5b2Tcbs5Q6DdiO%2Fc3hVJKU2HBBGbnTpwKw%2BbjO%2Bi%2FDPYAUXr7pewwbvxbc4T1JfjInkoHdGHlvgqQv47%2F6LZ72Zke2tg3v9JDnT9hdcH%2BOL%2F9bT9gMzewEadUvCtwqCiS%2FMjk0oaL1xHG5%2BGaBxKOercLU%2FpSnGTVH1HfESijxmgJTWt3RXKdllQx8BHOJ%2FRzWQnp5N%2B6WyJhvM0Y%2FHkIaubEnjevU8V71YzgJXMIuqvpMQAyDrmMGwhDCemMrBBjqkAZ8BaYqxgqwql1Cjh53wZQifVijDQ9NYM%2FrwNOp9BZ0fMsOTqdWf%2BiqFGXlz58o4IJkuX4dnU5X2Vzw%2FIW3TwvwEAVyPLuYTRjDg6by7tB4BF7lFkmIQhZdjmqyc5Rxgi0LKVH0lBUPqGRBIKW3MzTC3j5sg%2FMQlWlMIY6RD%2BGtVMPC%2BX2TF%2FUiYOxq1fcYuXeDaqOzBHg1sVQ2DPso%2FSAhn1Kyl&X-Amz-Signature=fde66cb59b741505d21acf63fa16ed391df39731859e6ca8339c482e636d7842&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645R3OSQE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCkxmrmU2GqKbf6NXtTgCL2It3yUc45G4FjZ8xRMkeTfwIhAJRMg5foEpboJTypNE%2FkkeJgp436Y%2F5WG4%2Fs3lMtPGdAKv8DCCQQABoMNjM3NDIzMTgzODA1IgyKw7U07ZxwinB9VPcq3ANKo0JUDtpXachB94tcg%2BvdpvlHNPzOFKz2VTRto0tuYXN0SzjebUGR30ZO0Q2d9O5sO9ur8ndnQ7FxRNgYR%2Fovaw0bzTq4mE3ijprh1y1FXr2rrAsoq827R1cniGeAX8WOsiwOrtZkz84Lb%2FenUvMJmmAAXdVm7nyuB%2FwStV2YS2hML%2FDbfZssv%2B6cbpEQqs%2FZUYN%2Fp4eFhx1gIxTcoZMlzbvelgDQNvHwSe%2F05iz%2FmY5y%2B0p5UaJuvUvqQsXJqurxGWjGyXe2MyzpEF84MjudTCM%2BUOUGnsC%2B%2Bu4OL5tWOQ45hJstKIOHpS2JKOw2seVYh%2FCg%2FaliN29qUXxQilLR1ocv%2FGSsmrE8nIrDlG7UyOx8r49YrPM1flHcK3RzPN6zf5b2Tcbs5Q6DdiO%2Fc3hVJKU2HBBGbnTpwKw%2BbjO%2Bi%2FDPYAUXr7pewwbvxbc4T1JfjInkoHdGHlvgqQv47%2F6LZ72Zke2tg3v9JDnT9hdcH%2BOL%2F9bT9gMzewEadUvCtwqCiS%2FMjk0oaL1xHG5%2BGaBxKOercLU%2FpSnGTVH1HfESijxmgJTWt3RXKdllQx8BHOJ%2FRzWQnp5N%2B6WyJhvM0Y%2FHkIaubEnjevU8V71YzgJXMIuqvpMQAyDrmMGwhDCemMrBBjqkAZ8BaYqxgqwql1Cjh53wZQifVijDQ9NYM%2FrwNOp9BZ0fMsOTqdWf%2BiqFGXlz58o4IJkuX4dnU5X2Vzw%2FIW3TwvwEAVyPLuYTRjDg6by7tB4BF7lFkmIQhZdjmqyc5Rxgi0LKVH0lBUPqGRBIKW3MzTC3j5sg%2FMQlWlMIY6RD%2BGtVMPC%2BX2TF%2FUiYOxq1fcYuXeDaqOzBHg1sVQ2DPso%2FSAhn1Kyl&X-Amz-Signature=95d6f47b4edb8f75fcf9196a839b84be3ef310cc32be4a7627225574b48d5d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
