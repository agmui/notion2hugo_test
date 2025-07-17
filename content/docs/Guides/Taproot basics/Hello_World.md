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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGTYFSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIEVgIs8khxdL5H28qqvIX1o1l%2BRFia7pZMNRuM4olvF5AiEAqEppzLgZ4N95O1NUwiyBIzf67O2a2QCCizCAkH2qXP8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPoggDJpjp%2F3aoZMoyrcA1TpYR0vbQBWKKZ%2BPnQU4d3Bc9y0OfzCoCEfDCkBQ8uh4kvX%2FEdcSXn4%2FhbI1jdZX2n5RNGw7u9C6cm7PxrsjEoVGlZi7uLW6FlkBMoE35ZSBOw55txwESjEWsT7SuNvP%2F%2FNslP13wPNE8iYMZdM3Y6EKXwCVfoaDPVUem3t%2FCgS3yiuaW4SBp%2BbedLhpMnTuAB%2FV%2BdMEAFjM2n9r95%2FtmcZ8YZTmr%2FhsPDqvszoWXH6h7isRi9yWjh%2B8akByP7HH5PwobiIyoOllee%2FRsY5mNXBQwShDLVGu%2Fh5NQ7USPh4p%2Fbnwp0xRerFsqDK4XAenKDt817BwSTDWJ0be%2FyDV4YZSmlIvLIT36Atql0pQUVfWQG7jFLlChXoZNWQ2g%2BWPIGY%2FM%2F14jsIheMjUT%2B2WY2aBzCMXIJoVYIjGzAcuyvaaEYopwNt5%2B8jzE4qXyH6Bc%2FhHhyypMoPONFpyM0BnLkoA66Z4xwuXS5eUpE3qpLtqkd9UZvCdK1BbW6pqSiSnkvVszj86wVhAP1LQMuofjI5HmdWdn5qPDB%2F8HwgtXvaHm%2FrSv6wp4z%2F3c5nnrM4gVo6LAyTnLXGq5MtZ1C7I9q2Wu5HRCmaCaG8ZwOialeArdAW8G7tTfW%2F3b96MLj54MMGOqUBbAxzxyJWQog57%2F4AK3%2F4GJoZ5L%2BZPXnckJesJAvcZ%2FjVD4dcnXhOM%2FWF0Fcy6XLm2fIQUNEANoYTC%2FJEWbzBYJLTH7OYHJLRBDQYJJUJWe7TWLS91ugJhEqGQDV%2FL0nl63AdIQ%2BrUSIPBTyCva7AEotsyNSwwArwgCUL4xA9grjFxTm4pwbIV68b89eO7zeEpih16nwjgABDqdy2cESs2PebPGO%2F&X-Amz-Signature=017c0af80bba7de156295bce6e526339db3ffbbfffb2ea5b025ce0d42652866e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGTYFSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIEVgIs8khxdL5H28qqvIX1o1l%2BRFia7pZMNRuM4olvF5AiEAqEppzLgZ4N95O1NUwiyBIzf67O2a2QCCizCAkH2qXP8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPoggDJpjp%2F3aoZMoyrcA1TpYR0vbQBWKKZ%2BPnQU4d3Bc9y0OfzCoCEfDCkBQ8uh4kvX%2FEdcSXn4%2FhbI1jdZX2n5RNGw7u9C6cm7PxrsjEoVGlZi7uLW6FlkBMoE35ZSBOw55txwESjEWsT7SuNvP%2F%2FNslP13wPNE8iYMZdM3Y6EKXwCVfoaDPVUem3t%2FCgS3yiuaW4SBp%2BbedLhpMnTuAB%2FV%2BdMEAFjM2n9r95%2FtmcZ8YZTmr%2FhsPDqvszoWXH6h7isRi9yWjh%2B8akByP7HH5PwobiIyoOllee%2FRsY5mNXBQwShDLVGu%2Fh5NQ7USPh4p%2Fbnwp0xRerFsqDK4XAenKDt817BwSTDWJ0be%2FyDV4YZSmlIvLIT36Atql0pQUVfWQG7jFLlChXoZNWQ2g%2BWPIGY%2FM%2F14jsIheMjUT%2B2WY2aBzCMXIJoVYIjGzAcuyvaaEYopwNt5%2B8jzE4qXyH6Bc%2FhHhyypMoPONFpyM0BnLkoA66Z4xwuXS5eUpE3qpLtqkd9UZvCdK1BbW6pqSiSnkvVszj86wVhAP1LQMuofjI5HmdWdn5qPDB%2F8HwgtXvaHm%2FrSv6wp4z%2F3c5nnrM4gVo6LAyTnLXGq5MtZ1C7I9q2Wu5HRCmaCaG8ZwOialeArdAW8G7tTfW%2F3b96MLj54MMGOqUBbAxzxyJWQog57%2F4AK3%2F4GJoZ5L%2BZPXnckJesJAvcZ%2FjVD4dcnXhOM%2FWF0Fcy6XLm2fIQUNEANoYTC%2FJEWbzBYJLTH7OYHJLRBDQYJJUJWe7TWLS91ugJhEqGQDV%2FL0nl63AdIQ%2BrUSIPBTyCva7AEotsyNSwwArwgCUL4xA9grjFxTm4pwbIV68b89eO7zeEpih16nwjgABDqdy2cESs2PebPGO%2F&X-Amz-Signature=727acc51a587cfdf49d5f435c196507e78f3abf97fed6ee44fbaa3560fc15361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
