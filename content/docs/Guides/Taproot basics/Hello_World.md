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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXL5A5Z3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGBUwBgtMjczfdEnngXN4B%2BqtpvsF4iRlKU8z6%2Bw71pyAiAKD0JIsPqCr3NrrFuC6XLeHhkJs%2BT10p%2BIkrfM9mvdLSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcO0tV1hO%2FJ0uVLzqKtwDVJErB2rdwxDKLRb6GTpQYky1qyRbD76QyDPmL3WwcGeoctWYaNY5%2Fy6bfynL31OKwRNPVJcwveQVUIvSjeh5t1Sl9EzJWxey6aMEk5EXrkEWNsxOb9Rtzwt8bwsYOyCUnzQtJ%2FpfxkDaAsy1Z0L7Vis%2B3O7%2F9sB1W%2BK2AGoP8FPNpTy8FPsp%2BI1AQ5FH%2BoXWclTCWJeJpLUYDkEgV%2BcyuBXv8MOA7%2Bae5UIH%2FBHaUEQp4gEPrCu%2BWYukXzSxZ8h496sKhIqomq969cDC8Xjecwve8H%2B9HqbqR5hFVCoMZ2syZvdESsGIAikxoO2KTyi8KR%2FqSbbgB%2FJNNPppyrhlms9F%2F1bWNsxvHVfB37Z1%2BN8Eq68BY4Nw%2BJ937IH557SBrWBXCYzMAFOKmeiA8i4%2FfR1C8%2F2JMIj8Qtx56tTis7V3%2FEL1vOio00UEmnI0gl%2FvWpHwKBv4hnVjk%2FGRVnNW1m1cdNVc8Fd70xRsaSlF4wsIDVKbnItD5DLY5RPuakK%2FHGx2J7OhleAVrUXoEcXOTg%2B%2BR6o8rQGRecoO2cNM60KpS1PG57%2FexrjrmtIFy3hPQURSyN3ITUoP9RXq1mfjZS77gqbMfyQ%2FpdhS2weoELBMXLFATyKc4p4VF14w9KerwgY6pgH58VQf7NCiamzkDQyRgBemPV3yVYatPfBtqMX87802SkO7bXECyYkq2pAcqgzqcMLjLdyR4CXOlwvUu55P1A9lmXu16nHy1ILcu6grgG48t5Hg3Nu1G2AscAxuVbA2LK4mMgQjBDqobA%2F8DLNj%2FO1V873G9C0nO%2Bdj%2FuIN33NwU6lawSLA0nIbhmKYAS0SRizwqvqKoIt%2F87R7pIT%2BwUl756E3MCAQ&X-Amz-Signature=95511b721be8252e526cda8a9ed62c34bf05913d0d9745527ad5849d8f8ac071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXL5A5Z3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGBUwBgtMjczfdEnngXN4B%2BqtpvsF4iRlKU8z6%2Bw71pyAiAKD0JIsPqCr3NrrFuC6XLeHhkJs%2BT10p%2BIkrfM9mvdLSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcO0tV1hO%2FJ0uVLzqKtwDVJErB2rdwxDKLRb6GTpQYky1qyRbD76QyDPmL3WwcGeoctWYaNY5%2Fy6bfynL31OKwRNPVJcwveQVUIvSjeh5t1Sl9EzJWxey6aMEk5EXrkEWNsxOb9Rtzwt8bwsYOyCUnzQtJ%2FpfxkDaAsy1Z0L7Vis%2B3O7%2F9sB1W%2BK2AGoP8FPNpTy8FPsp%2BI1AQ5FH%2BoXWclTCWJeJpLUYDkEgV%2BcyuBXv8MOA7%2Bae5UIH%2FBHaUEQp4gEPrCu%2BWYukXzSxZ8h496sKhIqomq969cDC8Xjecwve8H%2B9HqbqR5hFVCoMZ2syZvdESsGIAikxoO2KTyi8KR%2FqSbbgB%2FJNNPppyrhlms9F%2F1bWNsxvHVfB37Z1%2BN8Eq68BY4Nw%2BJ937IH557SBrWBXCYzMAFOKmeiA8i4%2FfR1C8%2F2JMIj8Qtx56tTis7V3%2FEL1vOio00UEmnI0gl%2FvWpHwKBv4hnVjk%2FGRVnNW1m1cdNVc8Fd70xRsaSlF4wsIDVKbnItD5DLY5RPuakK%2FHGx2J7OhleAVrUXoEcXOTg%2B%2BR6o8rQGRecoO2cNM60KpS1PG57%2FexrjrmtIFy3hPQURSyN3ITUoP9RXq1mfjZS77gqbMfyQ%2FpdhS2weoELBMXLFATyKc4p4VF14w9KerwgY6pgH58VQf7NCiamzkDQyRgBemPV3yVYatPfBtqMX87802SkO7bXECyYkq2pAcqgzqcMLjLdyR4CXOlwvUu55P1A9lmXu16nHy1ILcu6grgG48t5Hg3Nu1G2AscAxuVbA2LK4mMgQjBDqobA%2F8DLNj%2FO1V873G9C0nO%2Bdj%2FuIN33NwU6lawSLA0nIbhmKYAS0SRizwqvqKoIt%2F87R7pIT%2BwUl756E3MCAQ&X-Amz-Signature=868a9466418b30ff976e5636ba0807f82c2e68fb3a49219ffcd1d52a91d872a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
