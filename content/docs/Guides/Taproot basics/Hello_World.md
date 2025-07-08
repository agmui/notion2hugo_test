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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6RH5JN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICCMB8r%2B0fUoydPX5zgfsWTabZVHwMJ%2BDRKtiTnbocPYAiACSnk3uauza0IBoq6yulplyWtC%2B9ve1H%2FyC50oopyS7iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbKgdGITmSblL74vgKtwDELdRV%2FmfQahdssB4tCRlafQY9sFLR0lmcrY%2FnMPCHNdP0%2BCu%2BlYUD2dIxecFwWYigkHdvmibyS7YxNoHr9CrRMTVQyveque0AgMJBRGhYbTEGrcAp1xXha6ubmNL25hH%2BJGfOOvLAsV28FvHRczkMM8PwSk4YO6jbv23mn9w4MkCmGMeBApuGqWQkejLDgL9fZudWWbWKIoR0zegc%2BExBg5QCBq76%2FE0JWOnTWhpOMO9dqD1IULnJd%2Bc%2F848ijoEMG8kTXp%2BkXyl%2Bqsdk4RhMOE63XPLvO4qfGqOC9c9Cz3%2B26RemrE2KXiKmMPs%2B4lUQqwtn4bhWrdJnXndlxc5bvi%2FrMW%2BhoQoR9Sv3w3W1%2F8eWdYHKBa%2B9lJBx26bHJ%2FYSafJ8AolUWHV2jf6q5P7r20dlJ0elqxsI8u8H%2BUVI75mldigIEp%2FAg3ld4pxE0j%2FvI4%2FqEVyo9S6ll7gl%2FqcUs8iMmDQaxuBwEBxcUUJrZ4xHI70Rv%2FC8yrxMj%2BiUVhDoHER3tFRLtvbeumSirSjJS4m8mt4tY5%2FzhRmm%2BtN3nJZg61dPPq7UFv3SaTKQeYtxsYcAn4RDQSqYHdI4aDjfmQRAJHcK8feAuX512g%2B1CJuX6s%2BK5BsX%2FwKDH0w3oSywwY6pgGF3S%2BeBfpnJ8oOwRPd0QGAvp5Y2yKczf3pqJOhJCWdVryp6QgJOEuAB3Pl6CyzRh7fhQt6pq%2BgStMF%2F%2Fvpf%2FMtYbnt%2FwPOcV30%2F%2FkHfxYfCpGwVyrzm8bCm%2BVGaMesI%2BsgIHhnYqNZCbC0jRKmmV8UOdsqDtI9aPRQvZsX%2BdbyDAeXAOtxZL0NUWKuWRgzCzom78h8P8GAATObSNDlV8cUUy6OEDEf&X-Amz-Signature=59e02b04d739e91d401a81299c7a80715a394331ca61ec9c9fa2f7553dcfc99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6RH5JN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICCMB8r%2B0fUoydPX5zgfsWTabZVHwMJ%2BDRKtiTnbocPYAiACSnk3uauza0IBoq6yulplyWtC%2B9ve1H%2FyC50oopyS7iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbKgdGITmSblL74vgKtwDELdRV%2FmfQahdssB4tCRlafQY9sFLR0lmcrY%2FnMPCHNdP0%2BCu%2BlYUD2dIxecFwWYigkHdvmibyS7YxNoHr9CrRMTVQyveque0AgMJBRGhYbTEGrcAp1xXha6ubmNL25hH%2BJGfOOvLAsV28FvHRczkMM8PwSk4YO6jbv23mn9w4MkCmGMeBApuGqWQkejLDgL9fZudWWbWKIoR0zegc%2BExBg5QCBq76%2FE0JWOnTWhpOMO9dqD1IULnJd%2Bc%2F848ijoEMG8kTXp%2BkXyl%2Bqsdk4RhMOE63XPLvO4qfGqOC9c9Cz3%2B26RemrE2KXiKmMPs%2B4lUQqwtn4bhWrdJnXndlxc5bvi%2FrMW%2BhoQoR9Sv3w3W1%2F8eWdYHKBa%2B9lJBx26bHJ%2FYSafJ8AolUWHV2jf6q5P7r20dlJ0elqxsI8u8H%2BUVI75mldigIEp%2FAg3ld4pxE0j%2FvI4%2FqEVyo9S6ll7gl%2FqcUs8iMmDQaxuBwEBxcUUJrZ4xHI70Rv%2FC8yrxMj%2BiUVhDoHER3tFRLtvbeumSirSjJS4m8mt4tY5%2FzhRmm%2BtN3nJZg61dPPq7UFv3SaTKQeYtxsYcAn4RDQSqYHdI4aDjfmQRAJHcK8feAuX512g%2B1CJuX6s%2BK5BsX%2FwKDH0w3oSywwY6pgGF3S%2BeBfpnJ8oOwRPd0QGAvp5Y2yKczf3pqJOhJCWdVryp6QgJOEuAB3Pl6CyzRh7fhQt6pq%2BgStMF%2F%2Fvpf%2FMtYbnt%2FwPOcV30%2F%2FkHfxYfCpGwVyrzm8bCm%2BVGaMesI%2BsgIHhnYqNZCbC0jRKmmV8UOdsqDtI9aPRQvZsX%2BdbyDAeXAOtxZL0NUWKuWRgzCzom78h8P8GAATObSNDlV8cUUy6OEDEf&X-Amz-Signature=668bb320ec33fd0f033601cbeb428febfbf82908b96af6b1a92d7e310d4714ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
