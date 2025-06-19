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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN6OELE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi5pWllZwjiH%2FyDirmBj%2BRRjY8bcF37AdkxWeR8Lwa9AiA1L6OZPBf7wXAZ%2B7%2BF2KDVZuV1lE43UCr8bDytrEWFBSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3cVdiirkGDjRYxxfKtwDG5dEyytHgT%2Fh6rB6tSNPApWJGBF54DUPpkOk7qpzQQ27XEzBRmtgOakd9l5P3xXQIkRNdnSTD%2F2ZuSfYluCmdrpmWE0p8cEPq9pZmnTLcs179P1Gdwb%2BJHKvVT%2Br3MMGjqhYAYO3YygN%2FLOnm310T%2FsG2GyoVOxrGH%2B74ovL5piDPtpoHLBNvOf3Pto848lyS17wrWTbyi923QPy%2FHbeJSJ4%2FhjnUV0xP5uJkKqY0b%2Fbm1UEhQgX2aka7Et6D1L99WgWDBAkT30l%2BZGIA97SelV4tGdWkZPWIIJbqxwMPzvLGgYWWkN9or5AAoIr09jT0P7gk0iWqoIAahPxViy5KeDyfYywOjnLSK33YRMFECYvJJETL2Pmk5f3f3tjTNOrsgHpLr0Dff7j6pK%2Bjnu%2FuGBxQHkohlfNazQnFPu%2FZgpFXO20ka3x7Ckr9WqkgSz1Ser0cP6m6KcGNbSrC6pSppxX17ZdWWWmJQfaJVJFOWxNoyCqZCd3q2kfQFrB0G5ZkIQMmdFSNxO0NPU17kPgzS508bPsPj5TrsNxm4Pm%2FHKbt6nlWgPBteVAiy3HHb%2FYEsx1Z8GE%2F4896NMFpOSk%2BZQryMu6jtCTNmGDpuHwVQHrp3Y6DJssSbsHOlswuInQwgY6pgFQDuDGUbrLBO92LLL1V2SWkhL79CtQoGm7wMPhohqM%2F8xCHuGT8qRTkJrk%2FEIRj6T1DHu97kDpzv3h0oBixOKocj3uteyhIYlh4mhzz38%2FTsVO8PjKjdNv5hnXVIWXvFJ0XayGzwqWszuXFmxecdTRLy2m%2FzxJMCXu9dheiZfZiwFkh1xZuXAtuz3cQOY%2BbTAP5b0XPk6mASA%2FWjIKZyy93oNWMN0h&X-Amz-Signature=2bf743acbb0656edc139ca8d15309773861baee727464eb37ac1ebe64a5c274c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN6OELE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi5pWllZwjiH%2FyDirmBj%2BRRjY8bcF37AdkxWeR8Lwa9AiA1L6OZPBf7wXAZ%2B7%2BF2KDVZuV1lE43UCr8bDytrEWFBSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3cVdiirkGDjRYxxfKtwDG5dEyytHgT%2Fh6rB6tSNPApWJGBF54DUPpkOk7qpzQQ27XEzBRmtgOakd9l5P3xXQIkRNdnSTD%2F2ZuSfYluCmdrpmWE0p8cEPq9pZmnTLcs179P1Gdwb%2BJHKvVT%2Br3MMGjqhYAYO3YygN%2FLOnm310T%2FsG2GyoVOxrGH%2B74ovL5piDPtpoHLBNvOf3Pto848lyS17wrWTbyi923QPy%2FHbeJSJ4%2FhjnUV0xP5uJkKqY0b%2Fbm1UEhQgX2aka7Et6D1L99WgWDBAkT30l%2BZGIA97SelV4tGdWkZPWIIJbqxwMPzvLGgYWWkN9or5AAoIr09jT0P7gk0iWqoIAahPxViy5KeDyfYywOjnLSK33YRMFECYvJJETL2Pmk5f3f3tjTNOrsgHpLr0Dff7j6pK%2Bjnu%2FuGBxQHkohlfNazQnFPu%2FZgpFXO20ka3x7Ckr9WqkgSz1Ser0cP6m6KcGNbSrC6pSppxX17ZdWWWmJQfaJVJFOWxNoyCqZCd3q2kfQFrB0G5ZkIQMmdFSNxO0NPU17kPgzS508bPsPj5TrsNxm4Pm%2FHKbt6nlWgPBteVAiy3HHb%2FYEsx1Z8GE%2F4896NMFpOSk%2BZQryMu6jtCTNmGDpuHwVQHrp3Y6DJssSbsHOlswuInQwgY6pgFQDuDGUbrLBO92LLL1V2SWkhL79CtQoGm7wMPhohqM%2F8xCHuGT8qRTkJrk%2FEIRj6T1DHu97kDpzv3h0oBixOKocj3uteyhIYlh4mhzz38%2FTsVO8PjKjdNv5hnXVIWXvFJ0XayGzwqWszuXFmxecdTRLy2m%2FzxJMCXu9dheiZfZiwFkh1xZuXAtuz3cQOY%2BbTAP5b0XPk6mASA%2FWjIKZyy93oNWMN0h&X-Amz-Signature=704cf2f46d178efbcb400b15f80dec0d65548190d8acbc81134f30aa107aee29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
