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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCKGEE4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBhGCZ%2BN1LrVo5c0nZPFOQ7G9e6X%2FJ%2BQlfPhWu4R2q8AIgEKlrSeUDexXM3tHtveawT5zRrwGQRDtU6EHm4BTFqBgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJMwDyaw6VCVUWtCrcA31wrET%2BbB3TxCzJTRhYR3HhdXvy4Dti3ZXEpxTLYrYlZ42RUfgiRIfoImw%2BT7IcM1%2BiTwfHKoiioLiKdbfP9MYiQ4mzJXpX3B93cyqBxkXoodNzd9SkHsyW4hBlM4IHuAegdnWvsbTOQJzdjtw8Kgm1CFnA%2F9F%2BGDPqRf3LGmvQQkNaf16AlExsAZ3F8LT20adr47eZ1xu1iUy2FXpnbK4kNHC3bv4oTpU6BR1RcOF5GXQq2xadKohO310Sv7bnRK%2BZpme0DgLmm8yZzPk4qSGwlxsvR5xqIb2z2Cw3%2BvPhkLeExZVX9O1SlsYJ93o9Csx4QkLCG8hNaYYrXCGJchobdEAYs2Zrh4YE9N%2Fux7nkMWOWZ628HmEnEByFl9XM5whk%2BeuRFh9YuhCDsATiMmN%2BxCCxJ7SWg%2BEByDYC2yRbxZJx4vwu7bVmfP5AYOoJlYw1tgkT6f0%2FI0svpX91ZilAwFkSua32gZ3wxZFXSO7V%2FzH1pbzFxfL9RLJprzphCu2Cahu%2FPXRsL4hjWkdT%2F6BNxs%2FfY601HoV3Le%2FOCdU6BRSmtjstm4poby0kc6Vw6JTAjmbwWOLzxfmgMeYQ8gh2yyv%2B%2B8tUEAm2VTSE05WvaFNxw7plVo5GjDheMPqtrsEGOqUBrJso%2FvXJ%2Bj1QueV%2BJcNtT%2FnsgiPNEVkdg5aEb02Jm4eIQL4yjBGh%2BgYWkd9pbrFLHxta0GT2VzCsi%2B535l9wsEoysR4n0Czh6L2WssCJOJjDAP4y6ha9boRnOzODHZve94PkzYcUaz0QgNpakArIqoBYISmfkem4jFLQ3AFWPSNKTb5BzCFltN1VQMrMNEBvEFv3Rm1jq6Iz1%2ByWj5KHhF2N8cgf&X-Amz-Signature=de8cc0f82dc3f84a498d489871051a92a79c13bb928fbaeeb9f41c6fdeb5e757&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCKGEE4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBhGCZ%2BN1LrVo5c0nZPFOQ7G9e6X%2FJ%2BQlfPhWu4R2q8AIgEKlrSeUDexXM3tHtveawT5zRrwGQRDtU6EHm4BTFqBgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYJMwDyaw6VCVUWtCrcA31wrET%2BbB3TxCzJTRhYR3HhdXvy4Dti3ZXEpxTLYrYlZ42RUfgiRIfoImw%2BT7IcM1%2BiTwfHKoiioLiKdbfP9MYiQ4mzJXpX3B93cyqBxkXoodNzd9SkHsyW4hBlM4IHuAegdnWvsbTOQJzdjtw8Kgm1CFnA%2F9F%2BGDPqRf3LGmvQQkNaf16AlExsAZ3F8LT20adr47eZ1xu1iUy2FXpnbK4kNHC3bv4oTpU6BR1RcOF5GXQq2xadKohO310Sv7bnRK%2BZpme0DgLmm8yZzPk4qSGwlxsvR5xqIb2z2Cw3%2BvPhkLeExZVX9O1SlsYJ93o9Csx4QkLCG8hNaYYrXCGJchobdEAYs2Zrh4YE9N%2Fux7nkMWOWZ628HmEnEByFl9XM5whk%2BeuRFh9YuhCDsATiMmN%2BxCCxJ7SWg%2BEByDYC2yRbxZJx4vwu7bVmfP5AYOoJlYw1tgkT6f0%2FI0svpX91ZilAwFkSua32gZ3wxZFXSO7V%2FzH1pbzFxfL9RLJprzphCu2Cahu%2FPXRsL4hjWkdT%2F6BNxs%2FfY601HoV3Le%2FOCdU6BRSmtjstm4poby0kc6Vw6JTAjmbwWOLzxfmgMeYQ8gh2yyv%2B%2B8tUEAm2VTSE05WvaFNxw7plVo5GjDheMPqtrsEGOqUBrJso%2FvXJ%2Bj1QueV%2BJcNtT%2FnsgiPNEVkdg5aEb02Jm4eIQL4yjBGh%2BgYWkd9pbrFLHxta0GT2VzCsi%2B535l9wsEoysR4n0Czh6L2WssCJOJjDAP4y6ha9boRnOzODHZve94PkzYcUaz0QgNpakArIqoBYISmfkem4jFLQ3AFWPSNKTb5BzCFltN1VQMrMNEBvEFv3Rm1jq6Iz1%2ByWj5KHhF2N8cgf&X-Amz-Signature=1bcae3d04107b09afa045a1622f61544339fd984c31d2e053f87448696f6cedb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
