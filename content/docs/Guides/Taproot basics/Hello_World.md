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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LOBKX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIC7hS%2FxKf3BPYNpjGAWHFD1UTc7iYQMlfWjgnOpkutT7AiEAl99mkosyfZmDievkSRpMSnajMkdZpEq8rwRqFPawyasq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOcyEskn8rChmbVfpSrcA2M0YOv%2B76dnO0o%2B3WwSq6LochqESpupwXPfRHUB%2F6SQdmYa5fiat6WurQaTjKQLJm7a%2Flf2TLRepxZkoV5icjZvoyM4j5nDOsRVTpBMNq%2BMx2GNNJZ6CWG1Z%2FJ6Qe5tpKD1387s2fhOE6h6%2F9qWrL4Ws2Z8dBRfBC2bsx7TOxJYPQOpgyRzXS8IYHHkJzS0evyeJB812jBwfxFCD3dmWoB%2BHN9PKuCOkBhQhfLjIuGskiowZfmYurWROJz76TxA206NyQ0C9xUbF7QAqsfxPlGe45vmq%2FNvLYmvIpIAubEmZ87B8raZf2Cy9B7iNmKIFTP041Dl63zIXqbe%2FN3jZEIuTmqDtDp%2F20DCN%2BxVDnMeENfyWcjpd1Uw4PsHDq3l1HcYsrWcz23XfMiZW0h%2FfJxG8ikHHxISNYwUlFETvW%2Fl5hJAUX06J5gi227szFg3vUiZYzYciTEM2yG3jjljK78GrntvZLdkSLX3zJgCWJJso9cQ6pPTTb0nWkWGwCnKtF1jx609wp5E4S2bfu97VEAz22GitZvlcEIwRvfAM2yMuQTzpV3WNwMwWj8UVL0oQAlL%2BxXNWc7cmdVWeKWiR2xiffzwzmj%2FH6LB7YmHMNm95hPG4B58hUxnf6gfMJCNjcQGOqUBHnq%2FnJ8B2o8yW%2BL4c4wcVoWWiT8YGPjTO4FttEo1cntw6fC4xewAAQn%2BOxTIi2ZHh2AoDAvc9Ah6328gplx1tofN6INPE96%2BBEHuilCT0qRYj5a%2FZd3SERgLJs4LkCEl%2BfA%2F7ga4rNzGzOL2HKDR56p6JqTJpSveUhN1ip8mXa5hExuxHVBCrmD3Ygyq%2FV7jL7CgoheyVRu74ClbH4T3RN71BtO1&X-Amz-Signature=43b6970668735b29cc7c8f5ca1ac9bd6ef928fce4ccb9f59ee84e751a899f861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LOBKX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIC7hS%2FxKf3BPYNpjGAWHFD1UTc7iYQMlfWjgnOpkutT7AiEAl99mkosyfZmDievkSRpMSnajMkdZpEq8rwRqFPawyasq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOcyEskn8rChmbVfpSrcA2M0YOv%2B76dnO0o%2B3WwSq6LochqESpupwXPfRHUB%2F6SQdmYa5fiat6WurQaTjKQLJm7a%2Flf2TLRepxZkoV5icjZvoyM4j5nDOsRVTpBMNq%2BMx2GNNJZ6CWG1Z%2FJ6Qe5tpKD1387s2fhOE6h6%2F9qWrL4Ws2Z8dBRfBC2bsx7TOxJYPQOpgyRzXS8IYHHkJzS0evyeJB812jBwfxFCD3dmWoB%2BHN9PKuCOkBhQhfLjIuGskiowZfmYurWROJz76TxA206NyQ0C9xUbF7QAqsfxPlGe45vmq%2FNvLYmvIpIAubEmZ87B8raZf2Cy9B7iNmKIFTP041Dl63zIXqbe%2FN3jZEIuTmqDtDp%2F20DCN%2BxVDnMeENfyWcjpd1Uw4PsHDq3l1HcYsrWcz23XfMiZW0h%2FfJxG8ikHHxISNYwUlFETvW%2Fl5hJAUX06J5gi227szFg3vUiZYzYciTEM2yG3jjljK78GrntvZLdkSLX3zJgCWJJso9cQ6pPTTb0nWkWGwCnKtF1jx609wp5E4S2bfu97VEAz22GitZvlcEIwRvfAM2yMuQTzpV3WNwMwWj8UVL0oQAlL%2BxXNWc7cmdVWeKWiR2xiffzwzmj%2FH6LB7YmHMNm95hPG4B58hUxnf6gfMJCNjcQGOqUBHnq%2FnJ8B2o8yW%2BL4c4wcVoWWiT8YGPjTO4FttEo1cntw6fC4xewAAQn%2BOxTIi2ZHh2AoDAvc9Ah6328gplx1tofN6INPE96%2BBEHuilCT0qRYj5a%2FZd3SERgLJs4LkCEl%2BfA%2F7ga4rNzGzOL2HKDR56p6JqTJpSveUhN1ip8mXa5hExuxHVBCrmD3Ygyq%2FV7jL7CgoheyVRu74ClbH4T3RN71BtO1&X-Amz-Signature=6fb9cfeedd7a360de5d85ce676dac35799faa4cdbd69654f1583518ca59be9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
