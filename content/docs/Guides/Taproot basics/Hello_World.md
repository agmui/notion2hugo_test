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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE26LQG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBG%2F7IsFquYalclZtO13XYToBPON1iZgjDyt0zU%2BWKbwIhAIFZHw7we8zZc%2BCUo3k8lvZefOLUF5denYtDz%2B3r7yceKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMKBL%2FKTWQgnLIOD8q3AM33OuOKyLUXPur4Od3ciavblUZYRWkwK1c0%2Bt14IYNs%2FjhIPILbaS2ZWD%2FXUAoRvc8AruhYqEvq%2Fp79u6bRx6XTwqVfJEietIcyIUpcEe6fQDfC9AHDmwACimuRLhniEwN2uPsgDaHPSn8ymsehbM95Fg3EuicHHagfFzuhQzqAn61tfXo7LgONxg0Xai4TKrCXZgUFNSc1QI4ig93%2FgmUiEMPACaDLRsy5F7aCZX9DBhaTecJ%2FwyPlywrCD%2FZ%2BeqRwrQjr01qig9AMoHWsA8g1%2FJ6Yag2M78LGDJWGhNzr6gjljA4WfrDwCOD9%2Bnlhnvr4bPfWPEbBxMTCkXGGsdKRyGAnxEyPv6nGez2lkDxSCY7PzJjV%2FRRn5yCJbdkwlps7oxR4c0QQCMgmmwq3eST4ON3A%2FWEEGyBd6bIFdjqlYJbvhf0sTvyJhMxx6XaPodMheYxqd6paaeyw%2FqDxNnr1ibB2RyedTgzNYr8metxzx64TyoW3DEmLedsgepQBk5DZG1wbopadmbD8lZSRkOLrICyMGF8vZ7xghSaEEJFhFJz5DDK6sSYp3dHEvdhbMZExnUJiu6%2FGrPmSg8YFBUdFeeMWYrkuFrgNY4QZD%2BOC2u9UkfVj5ul80dsNjDD7pjCBjqkAWMozBZGDdO4EujVghtOpnbxs4CWFtLWwpNSGEM%2BnRqIvJH5m5ijSspwdbY5aOEGakG%2BwpDK2Xm8SFgiI9TPCI3GxZObR7Jappu6lbsqAZhqK1fZyyvaFtjIqZKrSuEOcKtfvDoJ1OQACYja94rFV1oe0gO5CbsPT0tXRZGV9Q7D%2FhePTDLNZEi46t8IVfyy5XPbKxkpnNHstVoEo76vo%2BuNw5GT&X-Amz-Signature=cbeb651e51df751f9bb252faa19195d34cadf1a1d4fb7041a4539cf0d702177b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE26LQG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBG%2F7IsFquYalclZtO13XYToBPON1iZgjDyt0zU%2BWKbwIhAIFZHw7we8zZc%2BCUo3k8lvZefOLUF5denYtDz%2B3r7yceKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMKBL%2FKTWQgnLIOD8q3AM33OuOKyLUXPur4Od3ciavblUZYRWkwK1c0%2Bt14IYNs%2FjhIPILbaS2ZWD%2FXUAoRvc8AruhYqEvq%2Fp79u6bRx6XTwqVfJEietIcyIUpcEe6fQDfC9AHDmwACimuRLhniEwN2uPsgDaHPSn8ymsehbM95Fg3EuicHHagfFzuhQzqAn61tfXo7LgONxg0Xai4TKrCXZgUFNSc1QI4ig93%2FgmUiEMPACaDLRsy5F7aCZX9DBhaTecJ%2FwyPlywrCD%2FZ%2BeqRwrQjr01qig9AMoHWsA8g1%2FJ6Yag2M78LGDJWGhNzr6gjljA4WfrDwCOD9%2Bnlhnvr4bPfWPEbBxMTCkXGGsdKRyGAnxEyPv6nGez2lkDxSCY7PzJjV%2FRRn5yCJbdkwlps7oxR4c0QQCMgmmwq3eST4ON3A%2FWEEGyBd6bIFdjqlYJbvhf0sTvyJhMxx6XaPodMheYxqd6paaeyw%2FqDxNnr1ibB2RyedTgzNYr8metxzx64TyoW3DEmLedsgepQBk5DZG1wbopadmbD8lZSRkOLrICyMGF8vZ7xghSaEEJFhFJz5DDK6sSYp3dHEvdhbMZExnUJiu6%2FGrPmSg8YFBUdFeeMWYrkuFrgNY4QZD%2BOC2u9UkfVj5ul80dsNjDD7pjCBjqkAWMozBZGDdO4EujVghtOpnbxs4CWFtLWwpNSGEM%2BnRqIvJH5m5ijSspwdbY5aOEGakG%2BwpDK2Xm8SFgiI9TPCI3GxZObR7Jappu6lbsqAZhqK1fZyyvaFtjIqZKrSuEOcKtfvDoJ1OQACYja94rFV1oe0gO5CbsPT0tXRZGV9Q7D%2FhePTDLNZEi46t8IVfyy5XPbKxkpnNHstVoEo76vo%2BuNw5GT&X-Amz-Signature=1dffe2d34413871ec598ba5a6858fc9bf8ac2c3405426b5d51baa339eab0ed06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
