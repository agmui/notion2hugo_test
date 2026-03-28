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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGHCQWN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBhSo%2FZMQnfmfMHgW2ydICjG8UW79yayx%2BND4hgRIDIFAiBCk60CzkjRgiW%2Fjo2Vm1nYSbwUZgTsMp0Hy4tmwyIsdCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn3qTfAoobPb1H30GKtwDUhGQvEbY2qbApMkpfbVhfYIISPbRyYbet3YHFMW%2Fnf13nLaL2MT8TutG3ahR0eSXMLWb6rtmGbfGHZZ3bNEMQd9wokD3Lw922Ab49yLZQ3nfFd60q2ktm60UgA99NBk7A3rRWPKzwXyvSzVAkt7%2FlbQ1txhaE4%2F5Eq%2BkYs2KpKNjrQ6ClzkdVKSSaiVb2ih9axHzg6TyZAf%2FeQBc3Y5NYQ8wFbZu12bkb7pDOs8dnCVEIudod0F5t%2BUnn%2BUlgXUTm5Ur97iiORTKHEX57soUn0CuLc7giTn0cgR2cRIUf1Wh5dY%2F9PcO2xwSOnV5SoPrqO6BrJNZzCg77t17qW%2F9IbQnFwGZeSPk%2FShhF3EFohgr3Ao9v0Pv19%2FPkRs4PYoTSPJBl%2FA9gMD%2BXGXjk%2FV8tWVGe1t%2BQ1Va0CMGubQgYnGylImNvAJRULhfTp7xahzDwn4y7ZoXyBF4Gu%2BvlJgOnF9WAFWK0dHrBMhQX6sdTVp65VTcGucZTGS7XT3US8LNpHiGOJKqFY4Avac7CWJ6StcGCGsUZbut%2FBJCOdN5sKmAfAoxn5gsHmt4rqJh6VYDNQTTermFVePbQWEb3KAFUNfcq7dKvU0boDO5Ij9t%2B7ewzTzUZeFTzVXn99Awze2czgY6pgG64tdXwtY8d2L%2BwpxP%2FLAdmcdNPSqyCwJr49d5XY3qBdGcLEZjZZtrp9bIvRXjLfM6dcfAkUXzj7L16XEVsLKbPFbU22xoyJoiskMWzMmj%2B7VcIhzQW4gAc%2FSW18NMgH%2Fw76pbRIY%2F9kPQ4y0bmVrp79YG1Sy1lyP31T5CxRIJG1T3uiL9u5vhdLGK68kcCbah6Qx0Z%2BP1qDdDJ0sniXtMesZZXpYR&X-Amz-Signature=104f5725fb875da42cffc42f543c9e667a220b839107dcc58fef197ac2b37818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGHCQWN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBhSo%2FZMQnfmfMHgW2ydICjG8UW79yayx%2BND4hgRIDIFAiBCk60CzkjRgiW%2Fjo2Vm1nYSbwUZgTsMp0Hy4tmwyIsdCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn3qTfAoobPb1H30GKtwDUhGQvEbY2qbApMkpfbVhfYIISPbRyYbet3YHFMW%2Fnf13nLaL2MT8TutG3ahR0eSXMLWb6rtmGbfGHZZ3bNEMQd9wokD3Lw922Ab49yLZQ3nfFd60q2ktm60UgA99NBk7A3rRWPKzwXyvSzVAkt7%2FlbQ1txhaE4%2F5Eq%2BkYs2KpKNjrQ6ClzkdVKSSaiVb2ih9axHzg6TyZAf%2FeQBc3Y5NYQ8wFbZu12bkb7pDOs8dnCVEIudod0F5t%2BUnn%2BUlgXUTm5Ur97iiORTKHEX57soUn0CuLc7giTn0cgR2cRIUf1Wh5dY%2F9PcO2xwSOnV5SoPrqO6BrJNZzCg77t17qW%2F9IbQnFwGZeSPk%2FShhF3EFohgr3Ao9v0Pv19%2FPkRs4PYoTSPJBl%2FA9gMD%2BXGXjk%2FV8tWVGe1t%2BQ1Va0CMGubQgYnGylImNvAJRULhfTp7xahzDwn4y7ZoXyBF4Gu%2BvlJgOnF9WAFWK0dHrBMhQX6sdTVp65VTcGucZTGS7XT3US8LNpHiGOJKqFY4Avac7CWJ6StcGCGsUZbut%2FBJCOdN5sKmAfAoxn5gsHmt4rqJh6VYDNQTTermFVePbQWEb3KAFUNfcq7dKvU0boDO5Ij9t%2B7ewzTzUZeFTzVXn99Awze2czgY6pgG64tdXwtY8d2L%2BwpxP%2FLAdmcdNPSqyCwJr49d5XY3qBdGcLEZjZZtrp9bIvRXjLfM6dcfAkUXzj7L16XEVsLKbPFbU22xoyJoiskMWzMmj%2B7VcIhzQW4gAc%2FSW18NMgH%2Fw76pbRIY%2F9kPQ4y0bmVrp79YG1Sy1lyP31T5CxRIJG1T3uiL9u5vhdLGK68kcCbah6Qx0Z%2BP1qDdDJ0sniXtMesZZXpYR&X-Amz-Signature=5ec834edbf87336d02fac3595ae3c95b11ec4f80e256d57d7b3a87684f759d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
