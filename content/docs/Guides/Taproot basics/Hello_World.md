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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ND3EQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICERKwwVgI8527JWF%2FJSwxSI2HbCsJub5V4zSrk6wpkuAiB8oUSHlm8zZiy0KfBxkGEliyqXdLr5jhomC%2BeUs%2FimBSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2FNYJAJ5Sve9ZaM9mKtwDIb6uJVnHpwqK2BNjmH1u%2BjXygjE6Kc5k4MmTTuuOh03l1yuNYOuT25P1pqey33fjATN%2BLOVaK8MxFslYkFdbMiGkMHY1zdBD%2BV8fM%2FPibm%2FGXLFOyDcWyoP2tFwFCneVFOFkCnj9iJ9Ijme0NoWLBBPgUDbz5VcRFn0%2FfvlENp9O%2B7W7nFPj%2BhHoTvSpx9JWALzXMWCPV%2BMo0tJhbazQ6F7Qs3Z%2BTjdHqWM52tnCEhKYgHLnHvkLwpkVBwxGKVSc0leBLprO02%2FQe2s1e7Q%2FZbJvIcfSwwIT5JNWfnUPROuHKZuHk16yN7Fa%2BkYTWHzYKXOzivTDPIjQxDWGb73qOEHNIBAujwYzhap%2BYv82O7%2BbJCVZdInlLfIuDvTFeDYbd%2BOYtZ%2FcjDwRznDewzqJQ%2BdYsg9ooQaj3%2Fx2xF3Z%2Bmnsa80vH0I1a1jpoOFe70CZLKdaj9cDfLV%2BnkcmyV%2BoSfUGplgYAIkh%2FYttYwteoLaHpTnLapMtW6kAq7QzE2lJy%2F7P9b2vNB%2Fi6L4j5bzkoocbWcjMM6Fy7XmRGn%2B1wpitHrQ%2FR0ID5f%2FEwRAQ9mXe75ZO4BwMpdxyspFSPsIqnq3q2POMwQ2vUnstwgNa9kp3SXwDqeDMZ%2Bo%2BcDcwqta%2BwAY6pgGxcGW0SYzJqkbxR%2BziDPhbsg1fayPgA0w83MQ4OmYaXeW%2BX9Rtsa0oMWuJU5sXxZ5XvefwR9QcTYUkCGy5EmzQFr9if8DPgNiTlvUPeFkkMUeyOSVLGPDNKkC2jH%2B5mHwE2LXtQH3YRweP89xdEvkk4%2FnKMNjquF7Tpe6BJ5mmavIZWcDcULKGzgdzHgSZSPL6vCoxKjx754IaX2NGP%2Bb%2BjRR%2FqvIC&X-Amz-Signature=7ff2356733be231fa45f21fe3a0a8cca754c48e4cb14ec54dc39952e4e58a33f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ND3EQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICERKwwVgI8527JWF%2FJSwxSI2HbCsJub5V4zSrk6wpkuAiB8oUSHlm8zZiy0KfBxkGEliyqXdLr5jhomC%2BeUs%2FimBSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2FNYJAJ5Sve9ZaM9mKtwDIb6uJVnHpwqK2BNjmH1u%2BjXygjE6Kc5k4MmTTuuOh03l1yuNYOuT25P1pqey33fjATN%2BLOVaK8MxFslYkFdbMiGkMHY1zdBD%2BV8fM%2FPibm%2FGXLFOyDcWyoP2tFwFCneVFOFkCnj9iJ9Ijme0NoWLBBPgUDbz5VcRFn0%2FfvlENp9O%2B7W7nFPj%2BhHoTvSpx9JWALzXMWCPV%2BMo0tJhbazQ6F7Qs3Z%2BTjdHqWM52tnCEhKYgHLnHvkLwpkVBwxGKVSc0leBLprO02%2FQe2s1e7Q%2FZbJvIcfSwwIT5JNWfnUPROuHKZuHk16yN7Fa%2BkYTWHzYKXOzivTDPIjQxDWGb73qOEHNIBAujwYzhap%2BYv82O7%2BbJCVZdInlLfIuDvTFeDYbd%2BOYtZ%2FcjDwRznDewzqJQ%2BdYsg9ooQaj3%2Fx2xF3Z%2Bmnsa80vH0I1a1jpoOFe70CZLKdaj9cDfLV%2BnkcmyV%2BoSfUGplgYAIkh%2FYttYwteoLaHpTnLapMtW6kAq7QzE2lJy%2F7P9b2vNB%2Fi6L4j5bzkoocbWcjMM6Fy7XmRGn%2B1wpitHrQ%2FR0ID5f%2FEwRAQ9mXe75ZO4BwMpdxyspFSPsIqnq3q2POMwQ2vUnstwgNa9kp3SXwDqeDMZ%2Bo%2BcDcwqta%2BwAY6pgGxcGW0SYzJqkbxR%2BziDPhbsg1fayPgA0w83MQ4OmYaXeW%2BX9Rtsa0oMWuJU5sXxZ5XvefwR9QcTYUkCGy5EmzQFr9if8DPgNiTlvUPeFkkMUeyOSVLGPDNKkC2jH%2B5mHwE2LXtQH3YRweP89xdEvkk4%2FnKMNjquF7Tpe6BJ5mmavIZWcDcULKGzgdzHgSZSPL6vCoxKjx754IaX2NGP%2Bb%2BjRR%2FqvIC&X-Amz-Signature=728b77a540b59b39ada3b502c86541f8a21573b0797e99306307a31a0a6dd9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
