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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HCPUQ7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXQ%2BukPrBu7oWD2ntfX3IOj57%2F1z7Bthf%2F9nBUj6LwhAiEAztTqCyubJVLOzbFnyhWXnYKh02S267T3Qa%2BB1lX2vhMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPdIrZLyTJHss56OiyrcAwZoxDU1Mwb%2FT9wR4RMWCvBgdscvE2RKovjSZG6jMYws5LHeci6Ib%2B%2BsAPrxqCAALI1LF5Tcj4HNdsz9qBJ0htGTFdxiCzEfWeIGe%2B4Pbtmau8sdiBCmMz%2FHHvvMQTs2EAJe1AD0v6%2Fr4nNmyXWxEDO8wNSK5OraHLvr50pfalZhbMUSVBqD5accP4ChE%2FnwXUaGOagshN5MXr6%2BNYb0oGX0hBrEHoi7a3BbZI6zU5htP%2Fvap%2BKCd97K7k5ydRpW9684ePBNwg9yXYiuqHuSZP8fWsqX798kufun5sUyvY5VgFMyqUAdtBw8lPizpbHA3Li5jICFUiqLEKuhBkn6R2%2F2b%2BgRTQyTkqTVhQJe1Tz0Mhqy1iUrmvaBDmuhCgICaAn0RC9xiyuDKy%2Bj178111PPbORvsy7RxFPo3uYkH1d%2BGEoXjeK%2Fu%2Fp5aQlNoXS4y%2FarRKeP%2B5phWgHMBpQSG9brAJR5L2%2B5fo5bH7KcMRZ4PxHHSVvLoQlvZweuegSWtOxA8fRcmlx4hghXX8Elnt%2Bt%2B1ZWgSBbcUZRtXaGAWZTMlVsiVBKkiKHYwX3yryujkxKGfZdy1yPCtCz9ljozVMPUAo5ynUGOl0Jv35JXkeTPaxU6W3Ue6wTurS6MLSR68AGOqUBZ04SadGswJAI38KeNh3qxkgppT5tBx7JrWQRMcSqLMfGfwq%2BpEOCGQ77jmUG%2BELJ0cg%2BOPiQsfo0OCTed%2Fqd7JxvT1lH1R1Wm8JzF4a%2BTcyLXWNPJGTBcieXpc%2BAW9vgTuvXVPhRKP4h%2Bgj4a4V7LOPV%2BNfpyhOEDzXqIHdulp9bckEni0X%2FraW2bDsg4neHF6xly%2FUVen%2BR7osfyqTzoXc8JCKc&X-Amz-Signature=29b05fa323b05d9fcf743ac291c30e94c55b299a0cafe664ea5b5d3b67f72c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HCPUQ7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXQ%2BukPrBu7oWD2ntfX3IOj57%2F1z7Bthf%2F9nBUj6LwhAiEAztTqCyubJVLOzbFnyhWXnYKh02S267T3Qa%2BB1lX2vhMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPdIrZLyTJHss56OiyrcAwZoxDU1Mwb%2FT9wR4RMWCvBgdscvE2RKovjSZG6jMYws5LHeci6Ib%2B%2BsAPrxqCAALI1LF5Tcj4HNdsz9qBJ0htGTFdxiCzEfWeIGe%2B4Pbtmau8sdiBCmMz%2FHHvvMQTs2EAJe1AD0v6%2Fr4nNmyXWxEDO8wNSK5OraHLvr50pfalZhbMUSVBqD5accP4ChE%2FnwXUaGOagshN5MXr6%2BNYb0oGX0hBrEHoi7a3BbZI6zU5htP%2Fvap%2BKCd97K7k5ydRpW9684ePBNwg9yXYiuqHuSZP8fWsqX798kufun5sUyvY5VgFMyqUAdtBw8lPizpbHA3Li5jICFUiqLEKuhBkn6R2%2F2b%2BgRTQyTkqTVhQJe1Tz0Mhqy1iUrmvaBDmuhCgICaAn0RC9xiyuDKy%2Bj178111PPbORvsy7RxFPo3uYkH1d%2BGEoXjeK%2Fu%2Fp5aQlNoXS4y%2FarRKeP%2B5phWgHMBpQSG9brAJR5L2%2B5fo5bH7KcMRZ4PxHHSVvLoQlvZweuegSWtOxA8fRcmlx4hghXX8Elnt%2Bt%2B1ZWgSBbcUZRtXaGAWZTMlVsiVBKkiKHYwX3yryujkxKGfZdy1yPCtCz9ljozVMPUAo5ynUGOl0Jv35JXkeTPaxU6W3Ue6wTurS6MLSR68AGOqUBZ04SadGswJAI38KeNh3qxkgppT5tBx7JrWQRMcSqLMfGfwq%2BpEOCGQ77jmUG%2BELJ0cg%2BOPiQsfo0OCTed%2Fqd7JxvT1lH1R1Wm8JzF4a%2BTcyLXWNPJGTBcieXpc%2BAW9vgTuvXVPhRKP4h%2Bgj4a4V7LOPV%2BNfpyhOEDzXqIHdulp9bckEni0X%2FraW2bDsg4neHF6xly%2FUVen%2BR7osfyqTzoXc8JCKc&X-Amz-Signature=c964c21a48e5ce0a52d039a0c43a606f02ae0608ccde36b73a752eef8cab7816&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
