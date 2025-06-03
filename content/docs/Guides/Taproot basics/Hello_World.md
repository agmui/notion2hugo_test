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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW3PQYM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGfRspYPqo7m%2BRUwcpDLo2pFUGJpDha3PH5AhYJ9xnXkAiBytIvZUxwDHcoT%2BfQJeZHPjoUqQ2opglVfII6g8WzOeyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMi4CrqvcXJ1YqO88rKtwDHkCkTJ6G%2BQrUujv4xtHq1ScqEJFbh6nW7ll5qT9CLDe7UeMv8H3MUlRU5ZRfq%2Fggj%2FWn8S5Tl4TPM936DKaB5xmulxWVy3sTAJvDEps%2BdbsL4seBjWb45iWeUEPX5UKEJZJvLtM1AZx1jmHrEXpao7O09srrxyWrWmw9wIhwIDs684n7mWgx5DdEDk183qFzllj4A%2FOLk2yPlTITzj304Qz5s9mJSY5IiZdfiV%2B8Z4Prf%2F2s%2F1dtcbNpnt%2FEgEtIFSCyArQRhkHGn1sdQnYNiFUhFgU13Gf0%2Fpys311nI6r%2BIAvozbeK4d%2BzsVNCc3xK1QWXkrPusrsqEnx4LBL85SVffowr4rgYa212D9tbVRC%2FPoeDpWnONwxY4zenq5qG5ru2b8JHojK1Y1B8lLRKvmnLT4c5q6ZA46%2FaQ5ny%2FmGLuMzXY2N5jPAwhl66VHgPUuKVvj8tLyNmlJFjqtXO23VudD6yrd8%2BhWAALnMqjPm5WEO3r3wi2M5n30CrilOdCTvcI0fv9jqJlZ5TByBsN6KWh81L0kRCkRJxqKM2kXGaWMxEExwnaQlWeEWKJtemnRBV%2F2LCJrpEytxv18L06LIx3XbEsJYqP8e7p6zaOAat8bf6dxuvMwSplnAwkKD8wQY6pgHkSDE5%2Bs%2B%2FG%2B7ofhJaG7bqShj1p9wUAIeAW6aQCcPqkE80x6HNIGL6ycIWNFGufS8%2BDEvlWF6Sy4MWvoi5883keJ5Refwa8%2Bx%2FZkB%2FJnCSinyPbHwLsVNcKJorkuMy1z66tsdh9XZY53oDMvutq3mOGP8FhAkhiWcKFgiA4W3ueSk0rsIdlWuM%2FVhuOK0jScUNcLJZGHF81ZsctS9KlANKdY38cEF%2F&X-Amz-Signature=6e63d13f0aa839442facf8ccab53b68a1c8e146f565402225a91d4f0277dc5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW3PQYM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGfRspYPqo7m%2BRUwcpDLo2pFUGJpDha3PH5AhYJ9xnXkAiBytIvZUxwDHcoT%2BfQJeZHPjoUqQ2opglVfII6g8WzOeyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMi4CrqvcXJ1YqO88rKtwDHkCkTJ6G%2BQrUujv4xtHq1ScqEJFbh6nW7ll5qT9CLDe7UeMv8H3MUlRU5ZRfq%2Fggj%2FWn8S5Tl4TPM936DKaB5xmulxWVy3sTAJvDEps%2BdbsL4seBjWb45iWeUEPX5UKEJZJvLtM1AZx1jmHrEXpao7O09srrxyWrWmw9wIhwIDs684n7mWgx5DdEDk183qFzllj4A%2FOLk2yPlTITzj304Qz5s9mJSY5IiZdfiV%2B8Z4Prf%2F2s%2F1dtcbNpnt%2FEgEtIFSCyArQRhkHGn1sdQnYNiFUhFgU13Gf0%2Fpys311nI6r%2BIAvozbeK4d%2BzsVNCc3xK1QWXkrPusrsqEnx4LBL85SVffowr4rgYa212D9tbVRC%2FPoeDpWnONwxY4zenq5qG5ru2b8JHojK1Y1B8lLRKvmnLT4c5q6ZA46%2FaQ5ny%2FmGLuMzXY2N5jPAwhl66VHgPUuKVvj8tLyNmlJFjqtXO23VudD6yrd8%2BhWAALnMqjPm5WEO3r3wi2M5n30CrilOdCTvcI0fv9jqJlZ5TByBsN6KWh81L0kRCkRJxqKM2kXGaWMxEExwnaQlWeEWKJtemnRBV%2F2LCJrpEytxv18L06LIx3XbEsJYqP8e7p6zaOAat8bf6dxuvMwSplnAwkKD8wQY6pgHkSDE5%2Bs%2B%2FG%2B7ofhJaG7bqShj1p9wUAIeAW6aQCcPqkE80x6HNIGL6ycIWNFGufS8%2BDEvlWF6Sy4MWvoi5883keJ5Refwa8%2Bx%2FZkB%2FJnCSinyPbHwLsVNcKJorkuMy1z66tsdh9XZY53oDMvutq3mOGP8FhAkhiWcKFgiA4W3ueSk0rsIdlWuM%2FVhuOK0jScUNcLJZGHF81ZsctS9KlANKdY38cEF%2F&X-Amz-Signature=689f27a339848dfe2d11fdbed7676f1ecba901d7479bb8ad6908c7a61208b4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
