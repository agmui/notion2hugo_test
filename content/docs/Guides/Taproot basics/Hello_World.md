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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYDSIFD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvzdsTKQ5DNVzMTLeAcg5uXvKffH4xX%2Bj4oWtHhnH05AiAQdR2%2FUeTlMi%2F4ftB8dRGash8hsStQn3tRLtDiuyvPjCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMX8bFINz6d4acM3sbKtwDL6UBL82QjAor6tKnsPeAgMw4InEuL6MFf5Jae0UGzp1HlJ48qSktFGQVSFnR5tu5xO1zVVEW6Gmsf5caQ7U4xk4s5uobKq0zN4Go1LGtx8ZkG7DPe36O0JUvk32IzSJGtVoci1TCiP7OyugCWov0YjsCec7%2B%2BeofgoZ06u8rWHycsI24BOql6yCYh4pdiu2SJer%2Bqade7mra6fHbw%2B4W%2BEA3z7GkzIRcp7a0RPuLHFMdjktXBhSgc4XfWJhw3Lqyd%2FiTZtPoJ8j5%2FrwXN3uK1pGEMTOn1MM5xI4Yw6CeJzPUgEwUsCjI1lvmzoKDMfBa03FT5wsGPxNY6glhKFlQUGbhlF0DZOylhnumTKa1bZO%2FF66kt0rfwEfDoUU%2FrkvzPWTAi3XNELG0bL1%2FemU3Nt8YDnEBkYasFD8B8hBAvwWswbAMMVI0ipqkVBchKhL4xjxe59TKol8j%2FqmmoLcZoK70AtlvQrYVA4E545tpGr6E000UjIlQGUeCfglVC5e10RryBIGorW%2BjVpHjqS06HEGSvtJHRHezfJmuNDfsJr3l8Oaiy7AKhxZs7ycKOwsMzrrygkrkQVbI1gZNjeAaV3Y2UH%2FT9AfldsdB08Nl6iE9DfNd1rsP11pDoNEwjcmKwAY6pgE93fC%2B8dhRRuu%2FmJGrSKz8QkTPLTNEB6DHlz4OVMu%2FgWTHHkHouveb2wWJ8ujnwHPVhf8V1Xd92WdBVs4so8htvTM%2B37kM9nbZvKdVo94o0EX4HPBZyCGLZZLwHv4lN1Dplw5UJI96h9m%2BIQ8aubkkt1i8ItCNkfer95TCxpj1u5tUOe2n4r%2BD6o4BsrdmFJakgPFT2hiz90wnip7s9tFJDkofugEK&X-Amz-Signature=b4593dafacb374876afa3835c5cf0c0aa447e70c9bcd561c040f936b2bc2e6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYDSIFD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvzdsTKQ5DNVzMTLeAcg5uXvKffH4xX%2Bj4oWtHhnH05AiAQdR2%2FUeTlMi%2F4ftB8dRGash8hsStQn3tRLtDiuyvPjCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMX8bFINz6d4acM3sbKtwDL6UBL82QjAor6tKnsPeAgMw4InEuL6MFf5Jae0UGzp1HlJ48qSktFGQVSFnR5tu5xO1zVVEW6Gmsf5caQ7U4xk4s5uobKq0zN4Go1LGtx8ZkG7DPe36O0JUvk32IzSJGtVoci1TCiP7OyugCWov0YjsCec7%2B%2BeofgoZ06u8rWHycsI24BOql6yCYh4pdiu2SJer%2Bqade7mra6fHbw%2B4W%2BEA3z7GkzIRcp7a0RPuLHFMdjktXBhSgc4XfWJhw3Lqyd%2FiTZtPoJ8j5%2FrwXN3uK1pGEMTOn1MM5xI4Yw6CeJzPUgEwUsCjI1lvmzoKDMfBa03FT5wsGPxNY6glhKFlQUGbhlF0DZOylhnumTKa1bZO%2FF66kt0rfwEfDoUU%2FrkvzPWTAi3XNELG0bL1%2FemU3Nt8YDnEBkYasFD8B8hBAvwWswbAMMVI0ipqkVBchKhL4xjxe59TKol8j%2FqmmoLcZoK70AtlvQrYVA4E545tpGr6E000UjIlQGUeCfglVC5e10RryBIGorW%2BjVpHjqS06HEGSvtJHRHezfJmuNDfsJr3l8Oaiy7AKhxZs7ycKOwsMzrrygkrkQVbI1gZNjeAaV3Y2UH%2FT9AfldsdB08Nl6iE9DfNd1rsP11pDoNEwjcmKwAY6pgE93fC%2B8dhRRuu%2FmJGrSKz8QkTPLTNEB6DHlz4OVMu%2FgWTHHkHouveb2wWJ8ujnwHPVhf8V1Xd92WdBVs4so8htvTM%2B37kM9nbZvKdVo94o0EX4HPBZyCGLZZLwHv4lN1Dplw5UJI96h9m%2BIQ8aubkkt1i8ItCNkfer95TCxpj1u5tUOe2n4r%2BD6o4BsrdmFJakgPFT2hiz90wnip7s9tFJDkofugEK&X-Amz-Signature=ced9a7989dfa29a5d4233ce64ce447274ac5482acd7eccdbc43bfcba18a45745&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
