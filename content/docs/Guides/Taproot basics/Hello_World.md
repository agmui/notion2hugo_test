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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNUTRHR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BWbKEj9BrMTHMHyxaV1myxVnnEWbmQsBNrYjmgQirrAiAEr%2BNZvlOohO1FWqibiWI6KxpOvhvrfVI3VNuNeamrTSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOBPkAICYcxW1CrhJKtwDLJIi1szQNPo%2BOrEC%2BXKR48gIr%2FDSWiGuTXCVWr5WB%2B6eJFUaiWq9ua7QJhbScuYi2jEyA%2BRDxuClztoy65Lqa%2F%2BmDIMkTzxenNq0xkpvKOdsg5tfhOU88hSCMekwdqe5WsdHdRgAa9O8QnPGXCCpEH2IbreEfxjMJwSq8WPKNe8ogBhayKE7poheru7KUUVE8AfTD99ItG2LJoACywgUcdVZQz%2ForLSHMD%2BWAHNs8YptkOkVRNL%2F8My2ykJwr%2F5ckXvTCQnurq90X4m9nBcpGR7WYF3uE4p7MGfrJX%2FfaN%2FF6XK3rboBD0Ay5WraNiJaj2K8YmYpZ%2Ff2juqD4HYSMZJgbuGygVMVIQO5qdOpyyHeSW9ScgmVXY046VSY09rg1tC0TzSPT1Qmgl1wevSLIdM0f7nhf%2Bc8ZjKYI0mC8DgEceX%2BQ6E3a%2FTzVwtauExdQnYTGuYSLcBW0o8%2FMPPov%2BknVZCey9sGgt835R5c%2BBbIII8xbI6C8cBvM0mz0XreQnEjzobBjjpAija%2BO%2F5hnliJCd5zdKp0gJfcPPrrFUK9%2F6vLmECNj5DmuTfoC37qZrJ%2B7gE%2FpoRkbokVdEpgKgop64L%2BRf4C%2BXE3X%2F8o2f%2ByAMHrYRodC61WrjYw9cbxxAY6pgFmExgEfuZFx52hom6A69WKOx7k1xh0GqP%2FQdh8m1ybLRIHeUq0nQZmRw68vj2rNFjFrpNT1aUm8TAWFGsdUXoLvljWmVD9HZ8%2BxDA2aGV9Sk1j1yH%2FpzutKYf%2F9LlXgNcwMp3MVKfWeBKzanylLYIbpkkCLlVvcW79NZuqgYxqNrrba5qIp0BkGPWEI3JYu4nmnd8lDH7gljSomcUVqKjdTNayhotl&X-Amz-Signature=9ff4fb4f419e74c799a6cc3f80d9548542b40788b6345d3e540b006bf3f47dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNUTRHR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BWbKEj9BrMTHMHyxaV1myxVnnEWbmQsBNrYjmgQirrAiAEr%2BNZvlOohO1FWqibiWI6KxpOvhvrfVI3VNuNeamrTSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOBPkAICYcxW1CrhJKtwDLJIi1szQNPo%2BOrEC%2BXKR48gIr%2FDSWiGuTXCVWr5WB%2B6eJFUaiWq9ua7QJhbScuYi2jEyA%2BRDxuClztoy65Lqa%2F%2BmDIMkTzxenNq0xkpvKOdsg5tfhOU88hSCMekwdqe5WsdHdRgAa9O8QnPGXCCpEH2IbreEfxjMJwSq8WPKNe8ogBhayKE7poheru7KUUVE8AfTD99ItG2LJoACywgUcdVZQz%2ForLSHMD%2BWAHNs8YptkOkVRNL%2F8My2ykJwr%2F5ckXvTCQnurq90X4m9nBcpGR7WYF3uE4p7MGfrJX%2FfaN%2FF6XK3rboBD0Ay5WraNiJaj2K8YmYpZ%2Ff2juqD4HYSMZJgbuGygVMVIQO5qdOpyyHeSW9ScgmVXY046VSY09rg1tC0TzSPT1Qmgl1wevSLIdM0f7nhf%2Bc8ZjKYI0mC8DgEceX%2BQ6E3a%2FTzVwtauExdQnYTGuYSLcBW0o8%2FMPPov%2BknVZCey9sGgt835R5c%2BBbIII8xbI6C8cBvM0mz0XreQnEjzobBjjpAija%2BO%2F5hnliJCd5zdKp0gJfcPPrrFUK9%2F6vLmECNj5DmuTfoC37qZrJ%2B7gE%2FpoRkbokVdEpgKgop64L%2BRf4C%2BXE3X%2F8o2f%2ByAMHrYRodC61WrjYw9cbxxAY6pgFmExgEfuZFx52hom6A69WKOx7k1xh0GqP%2FQdh8m1ybLRIHeUq0nQZmRw68vj2rNFjFrpNT1aUm8TAWFGsdUXoLvljWmVD9HZ8%2BxDA2aGV9Sk1j1yH%2FpzutKYf%2F9LlXgNcwMp3MVKfWeBKzanylLYIbpkkCLlVvcW79NZuqgYxqNrrba5qIp0BkGPWEI3JYu4nmnd8lDH7gljSomcUVqKjdTNayhotl&X-Amz-Signature=316d12e04511d509c75062a66f7aefc5b58706473ec4bc4e15d3d3ed47f85cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
