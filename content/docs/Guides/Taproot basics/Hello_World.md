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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBAQMEIY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDVb4Jb9YXzRit6p0Kwp8FcgJsP5ozn2RcQ1Bb%2Fo7vEbAiAsAqJn%2F9RDjX%2FJ0b2wFzQA9x9aaImKpvzm3%2BZ6R0rlIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMaaU%2FjANiAGzIIyLaKtwD6Yg8Wk3LLHj24Y3cgCSoky1K7TgjJtlsOGcvhRGwhAfTjPGbo%2FVZjvZboc%2Br2JG%2BkwktTj7CrHXTVekUX3w%2B%2F%2Fq9b4LgDo3yrrqzQR9xvoGarGcihIfoqHQcwSUjKf4vBCHbCq1b0hlA%2F1cBX1rStUui772T2NMql5ppb6tt%2BpcRk8ObK4PZObNdk6B0a6gEz%2FNBdcXmqawtgDm3uBOA4IDsPU3OA%2BK9hzDenAAoJOsqX86iyPBbjWM0v72fTPd4G%2FPCDv61bIv%2BGFhyEjMR7JGgr2xXNLgLJAAdxb6KjHe7l27KR6pzvWm1sLZWAKveluuFB1pHLN1rLN6IQnCuZnw6NgL2tPAh0ECj3k4smT0%2FiapzzMurwoVKz8VRDSjE5IQSTVq8iqABFJoeA8WNNs0xtuH2Yivdy5eMfXu0vy7qc9pEvQFDuYXBCndQ6uojXWMHS4QqyiLGu9Kdnpc3GlRaPVtUFHGBz%2BtxIOQ%2BTxXHsmy916iJ%2BWmqhfWO%2BYJLW3l1nJYC7agDOeqPT5KN5%2FcbsjIzRO0pfSHLYL4huTPkejMuVfzr2rCFGR4BXf0mAuRPL%2BJ4LOohwyQMRyKQiqWsxYGgNokYFTOxXBRgvD2pI1U1defeHPa03xsw5bjCwgY6pgEPlTcSJNCdCZ%2B8elfiUOqmI3Pl0NYwOS19CXrZ0GcqOCsrFXe8ow73xqmrX5O%2FjWEcxIictvO5OKVR3HTvfWH0kPgQ%2Bd3zbRFVFaoHlE%2BixKvXGJopfi8tQuqbpEi1F3JFmF4suSuhsi3JI8ihO1V7BhDZrWKz3SRQ9eAdiAzqIalQ9mOSihQkZwZkPAzjobdSuv6hhtu4wRe51e9b%2Bzi8HvElIJ23&X-Amz-Signature=19b89e50c4df3da54fcc0b9066c10f6ce5e1e30a68a5d6749d5445da7bb9decd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBAQMEIY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDVb4Jb9YXzRit6p0Kwp8FcgJsP5ozn2RcQ1Bb%2Fo7vEbAiAsAqJn%2F9RDjX%2FJ0b2wFzQA9x9aaImKpvzm3%2BZ6R0rlIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMaaU%2FjANiAGzIIyLaKtwD6Yg8Wk3LLHj24Y3cgCSoky1K7TgjJtlsOGcvhRGwhAfTjPGbo%2FVZjvZboc%2Br2JG%2BkwktTj7CrHXTVekUX3w%2B%2F%2Fq9b4LgDo3yrrqzQR9xvoGarGcihIfoqHQcwSUjKf4vBCHbCq1b0hlA%2F1cBX1rStUui772T2NMql5ppb6tt%2BpcRk8ObK4PZObNdk6B0a6gEz%2FNBdcXmqawtgDm3uBOA4IDsPU3OA%2BK9hzDenAAoJOsqX86iyPBbjWM0v72fTPd4G%2FPCDv61bIv%2BGFhyEjMR7JGgr2xXNLgLJAAdxb6KjHe7l27KR6pzvWm1sLZWAKveluuFB1pHLN1rLN6IQnCuZnw6NgL2tPAh0ECj3k4smT0%2FiapzzMurwoVKz8VRDSjE5IQSTVq8iqABFJoeA8WNNs0xtuH2Yivdy5eMfXu0vy7qc9pEvQFDuYXBCndQ6uojXWMHS4QqyiLGu9Kdnpc3GlRaPVtUFHGBz%2BtxIOQ%2BTxXHsmy916iJ%2BWmqhfWO%2BYJLW3l1nJYC7agDOeqPT5KN5%2FcbsjIzRO0pfSHLYL4huTPkejMuVfzr2rCFGR4BXf0mAuRPL%2BJ4LOohwyQMRyKQiqWsxYGgNokYFTOxXBRgvD2pI1U1defeHPa03xsw5bjCwgY6pgEPlTcSJNCdCZ%2B8elfiUOqmI3Pl0NYwOS19CXrZ0GcqOCsrFXe8ow73xqmrX5O%2FjWEcxIictvO5OKVR3HTvfWH0kPgQ%2Bd3zbRFVFaoHlE%2BixKvXGJopfi8tQuqbpEi1F3JFmF4suSuhsi3JI8ihO1V7BhDZrWKz3SRQ9eAdiAzqIalQ9mOSihQkZwZkPAzjobdSuv6hhtu4wRe51e9b%2Bzi8HvElIJ23&X-Amz-Signature=b1a0241fb520cc7c4783da33f6bb7e4cfd1002bdecfa0fe555515a017852b52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
