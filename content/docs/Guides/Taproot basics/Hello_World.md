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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6I3DZE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDn0fZ6XiZOulow31Xc01K%2F9oml27ibkgWRdsHmqQ%2F1gIgYThmgNOgJfIhrD%2FIu93Hxn4OXPYe6%2BkG%2FKVvdYJ%2FTTIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDoLO%2Fl1cbecb8ZzYircA7GRksgFvS23bWPgc%2F4PSIKTSWujaWnw98be8RGq8077pDcTRG8uTO7kfoqzJLPjRhBvzH%2Fn7Zlnj0Y%2Fqj91XXJPY5jjw10%2BPJmdw2PiunCdrkM%2FNn51vYH5uhVtkwQf8Jk05DIiqcyhyYyRkqFZwFen3T79jExS3tQ3kE%2BBnbQGWE84oBNyUstcvQSup4UEVz7csGvpyZz3bu%2F7bWAokHz8L8YIW%2BmtixruWSe9nHrSdT2jKwDJe%2B3ydO%2BqYHc8K8hlVGjs92fQarbo9sp82hfvuy78mw60D9Q6%2FrCwlwjlU1KrNr5dwwu%2B3p%2FSXz%2BAXiEzrzlyBIbvLfVwiLCvnd7T9%2ByxZfpTM9cr0mc3DUkjn2tuJcC8LaD2e8YJjM4YyuKc4E%2FPlhfReQONjEkQ%2BkJRiqK8vJUXW6NY1XcCaNvLlkgfsxR9uMo3VKe78TQ8WtBeqFd2s%2FGGtmWIIFrzSuknceXMzba6Cg6N%2FAukElHmgs1w7y7f8jWZrqbjIxksHSUWw2AluTuCTKKa4juNW8IMwqrvgklvJUzNOM5UoCLOo18yvKpQNMqgcZ9EFRLW7TpfgApwioiWtX5nSQ51qd4Ilh25n01j5Uscd3kgQEownjTysdKwQP7%2BaR0LMNPSk70GOqUBfZdyuhC2GVJKXUq3Y9YQ%2FvOHMluqRgCPCguC7Qq7LQZMvll6XqyPYNb3EzF0dUCOp2UtGIMKmb%2BkrNCldfSMUQ993LDJ4tL9Violq1KRJUbBTEHiepL7%2FWaxuoe0kdanvuf9%2BefMcU3VewwONr8FID3cGZn5Wxje1%2B1XUQY0CfW3v0AN1qRwk%2F817JOusAB8TMa2K%2BBL9hE4jEzOfeUgNOZxKaC4&X-Amz-Signature=08b51f949b687d585d9cbf9ab611d137d510890c5be2a63daba0c42a8177b72a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6I3DZE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDn0fZ6XiZOulow31Xc01K%2F9oml27ibkgWRdsHmqQ%2F1gIgYThmgNOgJfIhrD%2FIu93Hxn4OXPYe6%2BkG%2FKVvdYJ%2FTTIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDoLO%2Fl1cbecb8ZzYircA7GRksgFvS23bWPgc%2F4PSIKTSWujaWnw98be8RGq8077pDcTRG8uTO7kfoqzJLPjRhBvzH%2Fn7Zlnj0Y%2Fqj91XXJPY5jjw10%2BPJmdw2PiunCdrkM%2FNn51vYH5uhVtkwQf8Jk05DIiqcyhyYyRkqFZwFen3T79jExS3tQ3kE%2BBnbQGWE84oBNyUstcvQSup4UEVz7csGvpyZz3bu%2F7bWAokHz8L8YIW%2BmtixruWSe9nHrSdT2jKwDJe%2B3ydO%2BqYHc8K8hlVGjs92fQarbo9sp82hfvuy78mw60D9Q6%2FrCwlwjlU1KrNr5dwwu%2B3p%2FSXz%2BAXiEzrzlyBIbvLfVwiLCvnd7T9%2ByxZfpTM9cr0mc3DUkjn2tuJcC8LaD2e8YJjM4YyuKc4E%2FPlhfReQONjEkQ%2BkJRiqK8vJUXW6NY1XcCaNvLlkgfsxR9uMo3VKe78TQ8WtBeqFd2s%2FGGtmWIIFrzSuknceXMzba6Cg6N%2FAukElHmgs1w7y7f8jWZrqbjIxksHSUWw2AluTuCTKKa4juNW8IMwqrvgklvJUzNOM5UoCLOo18yvKpQNMqgcZ9EFRLW7TpfgApwioiWtX5nSQ51qd4Ilh25n01j5Uscd3kgQEownjTysdKwQP7%2BaR0LMNPSk70GOqUBfZdyuhC2GVJKXUq3Y9YQ%2FvOHMluqRgCPCguC7Qq7LQZMvll6XqyPYNb3EzF0dUCOp2UtGIMKmb%2BkrNCldfSMUQ993LDJ4tL9Violq1KRJUbBTEHiepL7%2FWaxuoe0kdanvuf9%2BefMcU3VewwONr8FID3cGZn5Wxje1%2B1XUQY0CfW3v0AN1qRwk%2F817JOusAB8TMa2K%2BBL9hE4jEzOfeUgNOZxKaC4&X-Amz-Signature=5620191f9f94b9a3478d9ce54004742434b91ee35b77982a629804a496e29e53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
