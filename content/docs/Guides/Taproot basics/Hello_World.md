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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJ7N3GB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTjzOQ5dwpazlo5kQqsSQwaluapqfibAxsP5RWckr4SAiBiWWHWsQMj3rXHCr9mknM%2FdsJL9mpi1quUP8iCJo19iCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSag571AXLoSbQGOSKtwDBWQd2tF8%2BLe4qiUDRKZPvfiozY7xrpLtEN0xt%2BW2WcSAoM%2FslZ6C40gwYH8H80rCCG7c073BkX6p8yjqHvLH7BSwx3cAmNYbD155JSlvWy4JWKlkF4Bb87VLntIjD6mzE%2BBxtrUHb8RCdFcySu%2FAXwViVGlYQWAo3FJYI9gAO4ZtUhH8bhdOVkXKNCPiyomFX7tSz64XEiyAKSJq8HMx1UKWjLCyGOhigkC1%2Fe9dwDq4A5vkhQc43sESF9A1JRSIcetbGDK1m7jtaJYvUUcANqOsaCi4UcF7mB9upUE%2FntxSZm4lTyXDte0WYyW2k0OQN%2F8vDfmF1f1AXw6yenLEj3WyjemmsK%2B9y8Aa87dO0xmIJyHYh6MZSjjR0oi4yXptg5M8%2FZ9uIFqhQeFl25WCDaj2U8WQZnwQRgucZm1hCDz9cdi%2B3VwnMd2WDZ3iwc9QWEuklxq8ODfF4cNxPtW9aTBckPR4e7GgBDx3Aozmh59jrb0c9jodn8E6Z%2BbqMl4oBjCRPqiXGaMORR1r7oIS8Cl3yuEL1NIfylzTYPBGMlwXQbmccI6Ai3Vwrb1Xti4X2rRZwtWVJywEITIMkijh1A4mRxO9Zs%2FIlIlJiqGVVyIPUNigxv0Qr4Y3V2EwjqbZvgY6pgHxQ%2F0gjzFTfkBvZxikh%2BJ61Ty63FGE9TMmkBai%2B%2BBvM0V%2FElIo8PsA1tEAKU8TyDdJfsDvuwo3juq9U0w%2F2rzf%2FlvPRdNW7kmRBSqblKDpm4kQ53iRv%2FlaMAG1rfqK9YRXVMo%2BwtWEoLiIzF8FC4Masy9N1W7rNndq64w6sSWZflCyjanG9Xv5MlBhhDRpLpwmFaV%2F3M4UM%2FZyKSleHD5n%2FRsyL6s9&X-Amz-Signature=4e826adfc85c5cfdccc5234ce5f23605468e36dfee6b363d85ae138575b79ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJ7N3GB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTjzOQ5dwpazlo5kQqsSQwaluapqfibAxsP5RWckr4SAiBiWWHWsQMj3rXHCr9mknM%2FdsJL9mpi1quUP8iCJo19iCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSag571AXLoSbQGOSKtwDBWQd2tF8%2BLe4qiUDRKZPvfiozY7xrpLtEN0xt%2BW2WcSAoM%2FslZ6C40gwYH8H80rCCG7c073BkX6p8yjqHvLH7BSwx3cAmNYbD155JSlvWy4JWKlkF4Bb87VLntIjD6mzE%2BBxtrUHb8RCdFcySu%2FAXwViVGlYQWAo3FJYI9gAO4ZtUhH8bhdOVkXKNCPiyomFX7tSz64XEiyAKSJq8HMx1UKWjLCyGOhigkC1%2Fe9dwDq4A5vkhQc43sESF9A1JRSIcetbGDK1m7jtaJYvUUcANqOsaCi4UcF7mB9upUE%2FntxSZm4lTyXDte0WYyW2k0OQN%2F8vDfmF1f1AXw6yenLEj3WyjemmsK%2B9y8Aa87dO0xmIJyHYh6MZSjjR0oi4yXptg5M8%2FZ9uIFqhQeFl25WCDaj2U8WQZnwQRgucZm1hCDz9cdi%2B3VwnMd2WDZ3iwc9QWEuklxq8ODfF4cNxPtW9aTBckPR4e7GgBDx3Aozmh59jrb0c9jodn8E6Z%2BbqMl4oBjCRPqiXGaMORR1r7oIS8Cl3yuEL1NIfylzTYPBGMlwXQbmccI6Ai3Vwrb1Xti4X2rRZwtWVJywEITIMkijh1A4mRxO9Zs%2FIlIlJiqGVVyIPUNigxv0Qr4Y3V2EwjqbZvgY6pgHxQ%2F0gjzFTfkBvZxikh%2BJ61Ty63FGE9TMmkBai%2B%2BBvM0V%2FElIo8PsA1tEAKU8TyDdJfsDvuwo3juq9U0w%2F2rzf%2FlvPRdNW7kmRBSqblKDpm4kQ53iRv%2FlaMAG1rfqK9YRXVMo%2BwtWEoLiIzF8FC4Masy9N1W7rNndq64w6sSWZflCyjanG9Xv5MlBhhDRpLpwmFaV%2F3M4UM%2FZyKSleHD5n%2FRsyL6s9&X-Amz-Signature=8b74e3669cb138e7ce2f6ab831d365f92cd7072a79c7c9df024c47b68d458c56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
