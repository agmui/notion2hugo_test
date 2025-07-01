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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG22V5S%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVXWXplT3i%2B7zVMg8%2BeLn2xB6XfpNvK9pSJ1NwTeuCXAiA8u%2BYAILPgPd463GNj%2B9c8kI7jZz%2FMBHHL9qKoQsqTViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6BrGd2thxxd0qrTKtwDa25fxy4zqPesOBRLkZL%2BqC2PoUO3XzyTayDDDqNawk6zil%2FUE8cJ6tmy0nm%2FGsVXmAVsnlAiwLhpuhLQuJsvpjtesLOrBiWJUF%2Bj3qO%2BAtRcK6%2BU7icPUOh56E89Svfr4UcMBzcEFB2Aco1sLbRBnbcHXAoZabMUX3l%2Fb9%2FT%2FEDhZRNxKNDyFHreSGjbAFHBp%2BWJD%2B4VPatXsrm9T2FuumjE49WwruB7OnLQOE%2Fy2G6DgeW%2B3JbsPl7ZllNCl%2BA%2Bki9lMO7VRSKV8Q0%2Bmw9KWLVLgWf4X48cm42sQNXHSLPOlV8EovypNO5aoPya0imqhCViJdheIP4aI6vA6DGto3ypme73RcEuAWvCmhG%2F9E8iCOkqbaAQgFidP%2FOAI6pXq5el9I6ENPRf4CNWUyQMkm66rbh0W97vthurDGv0%2Bj1Fic5MiC98l0FIidYbmFEZ4nzUY1Bd9AW3ZXsOjzy6TSUa9%2FMi8%2BcTdxsD86JbSxN%2Fw%2BpfOeDewQq%2B6vBwHq9LYFW6zJ%2BLuuMnQaFboZNrBgerSlEp98xva3AeIZ%2B2Dt2oJh2s2XfqDrduaJBtzaoJs1EGm1xIzNFp8Tyxbvftr5LJjVVmtIwuem0XeUNm6JO6g8Uc0VeSOV1ARWowx8uNwwY6pgFyfXn4qtNc7PwlEbTOYr%2BErAlpZSxh7v3XFYtXuiLr%2FR5nxLE723c2fESQiS4pJqEk8O84YMykfW9bowTkCzU%2BrpiiFsaxgFFOzWg%2ByCj3pQ6o3MA7VDZJ10GvVrlpK%2B6nsrQDIDAfguglSzONQj6j3z5u92rdov0iFiFZ2Ybl%2Bva%2BNTHq8X5pADy4fgJUyrQlqh0ySgnkw9dFEu3wNtCB%2BFphekl6&X-Amz-Signature=271063cb77994e41d5cbe2511e617d65444f7a7c17791922fd7d9e0e0cbdf81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG22V5S%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVXWXplT3i%2B7zVMg8%2BeLn2xB6XfpNvK9pSJ1NwTeuCXAiA8u%2BYAILPgPd463GNj%2B9c8kI7jZz%2FMBHHL9qKoQsqTViqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6BrGd2thxxd0qrTKtwDa25fxy4zqPesOBRLkZL%2BqC2PoUO3XzyTayDDDqNawk6zil%2FUE8cJ6tmy0nm%2FGsVXmAVsnlAiwLhpuhLQuJsvpjtesLOrBiWJUF%2Bj3qO%2BAtRcK6%2BU7icPUOh56E89Svfr4UcMBzcEFB2Aco1sLbRBnbcHXAoZabMUX3l%2Fb9%2FT%2FEDhZRNxKNDyFHreSGjbAFHBp%2BWJD%2B4VPatXsrm9T2FuumjE49WwruB7OnLQOE%2Fy2G6DgeW%2B3JbsPl7ZllNCl%2BA%2Bki9lMO7VRSKV8Q0%2Bmw9KWLVLgWf4X48cm42sQNXHSLPOlV8EovypNO5aoPya0imqhCViJdheIP4aI6vA6DGto3ypme73RcEuAWvCmhG%2F9E8iCOkqbaAQgFidP%2FOAI6pXq5el9I6ENPRf4CNWUyQMkm66rbh0W97vthurDGv0%2Bj1Fic5MiC98l0FIidYbmFEZ4nzUY1Bd9AW3ZXsOjzy6TSUa9%2FMi8%2BcTdxsD86JbSxN%2Fw%2BpfOeDewQq%2B6vBwHq9LYFW6zJ%2BLuuMnQaFboZNrBgerSlEp98xva3AeIZ%2B2Dt2oJh2s2XfqDrduaJBtzaoJs1EGm1xIzNFp8Tyxbvftr5LJjVVmtIwuem0XeUNm6JO6g8Uc0VeSOV1ARWowx8uNwwY6pgFyfXn4qtNc7PwlEbTOYr%2BErAlpZSxh7v3XFYtXuiLr%2FR5nxLE723c2fESQiS4pJqEk8O84YMykfW9bowTkCzU%2BrpiiFsaxgFFOzWg%2ByCj3pQ6o3MA7VDZJ10GvVrlpK%2B6nsrQDIDAfguglSzONQj6j3z5u92rdov0iFiFZ2Ybl%2Bva%2BNTHq8X5pADy4fgJUyrQlqh0ySgnkw9dFEu3wNtCB%2BFphekl6&X-Amz-Signature=41d3f78b3ca4a865a8b691abca0437832ea30bbf67ff118b78e838cfcbb277a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
