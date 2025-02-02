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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5ITORH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk4fIg1%2BaC%2FTidrOJIsI0MIK6aPLNV1szQ0L8jYtZKuAiEA2hmvaTfbrsuUqjU86ozbgqvP%2BWMOSqJtR%2F4jwdKAdLwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlrZogkupWKP3YBdSrcAxI9N4I4L8WnsW6KQULKxyPOPUmyNuRCZcjlbSPQQn3RDGTwErTHcPZ5aHxc3E10Jw4gIkXH%2Bd94L%2F%2BXQEYGgWKwgpBSTX5kWRQIkQyzRKD2Uh3s22FME6EE%2FUHDiMah3ZMCr5FKxc8whhyoqPucY1196b1zieemHZ0OM4%2BDMePYTMgzSweFwQboM7Hjx4YBovqThRgnqkTUgrL%2BP9bMPYsu0VV0UOGZdJEI9ojv5f9rm4kcC9c0EJYTBHF7PJBRjumTlnD8jqqHVqd9kij5tLKWkEPcxtWua6nku67zKpOtIPrW8LjnMIltR0VuzIDTnugAaJoUDqYdR2MR57NLpl8A2hfvC%2BT1L7%2B%2Bzl375ecaOFc7dfzeRSXdAOso17w%2BbB2ayY5W4u3Uv%2BpXFq8u2VhUV7u2KWk%2Fd3PnrKZgxiqjQkma7uHwW701uFSLPenigU%2BmJOsC1lpVrr4oSOVLHR0qC2JNwqmw8X4aZnJb1Tb7XOduja2IeKJWEEnUscp2hYsH5A%2BQTNK8dHqhYa7xpKvmTO4eSoUFGe0xydVFYVSAa4lukqdrNQnwUGfkUoFAmghdpW8M0f3tWCyCn3xnF4F5VAzZTRxwr6TKxJEYpE3Q4G%2BDiXYDCtNG%2F0p%2FMK3z%2BrwGOqUBf966ND3Qa4BT9tTaFXhYppy2pna%2F7AV65Wm7lN2GUE79gCDTdm14LdJVVj5IC8hTUF1%2BnDkr77peiUxGo5Wp5DWsyjopwwCIA33xjP25jgVyI671VCw%2BNNyZ2pLIMUZZqSacD4DQaCU4LdfBZhAix1RoGyVHNi8tR%2BLC86wRvWDPtTIVHI7Vw2j0C%2FqDBTaP6nRXCxn0Y0MDcSj5zrXV8b7kXjK4&X-Amz-Signature=38bacee43474f7c8f0fc5b3600a58a571a1d5708857ee862c2eff40a13b3aded&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5ITORH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk4fIg1%2BaC%2FTidrOJIsI0MIK6aPLNV1szQ0L8jYtZKuAiEA2hmvaTfbrsuUqjU86ozbgqvP%2BWMOSqJtR%2F4jwdKAdLwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlrZogkupWKP3YBdSrcAxI9N4I4L8WnsW6KQULKxyPOPUmyNuRCZcjlbSPQQn3RDGTwErTHcPZ5aHxc3E10Jw4gIkXH%2Bd94L%2F%2BXQEYGgWKwgpBSTX5kWRQIkQyzRKD2Uh3s22FME6EE%2FUHDiMah3ZMCr5FKxc8whhyoqPucY1196b1zieemHZ0OM4%2BDMePYTMgzSweFwQboM7Hjx4YBovqThRgnqkTUgrL%2BP9bMPYsu0VV0UOGZdJEI9ojv5f9rm4kcC9c0EJYTBHF7PJBRjumTlnD8jqqHVqd9kij5tLKWkEPcxtWua6nku67zKpOtIPrW8LjnMIltR0VuzIDTnugAaJoUDqYdR2MR57NLpl8A2hfvC%2BT1L7%2B%2Bzl375ecaOFc7dfzeRSXdAOso17w%2BbB2ayY5W4u3Uv%2BpXFq8u2VhUV7u2KWk%2Fd3PnrKZgxiqjQkma7uHwW701uFSLPenigU%2BmJOsC1lpVrr4oSOVLHR0qC2JNwqmw8X4aZnJb1Tb7XOduja2IeKJWEEnUscp2hYsH5A%2BQTNK8dHqhYa7xpKvmTO4eSoUFGe0xydVFYVSAa4lukqdrNQnwUGfkUoFAmghdpW8M0f3tWCyCn3xnF4F5VAzZTRxwr6TKxJEYpE3Q4G%2BDiXYDCtNG%2F0p%2FMK3z%2BrwGOqUBf966ND3Qa4BT9tTaFXhYppy2pna%2F7AV65Wm7lN2GUE79gCDTdm14LdJVVj5IC8hTUF1%2BnDkr77peiUxGo5Wp5DWsyjopwwCIA33xjP25jgVyI671VCw%2BNNyZ2pLIMUZZqSacD4DQaCU4LdfBZhAix1RoGyVHNi8tR%2BLC86wRvWDPtTIVHI7Vw2j0C%2FqDBTaP6nRXCxn0Y0MDcSj5zrXV8b7kXjK4&X-Amz-Signature=7a9f6abd8437b715a367e96fe4e1b6d44073495060a44d1515fd858729cbaf2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
