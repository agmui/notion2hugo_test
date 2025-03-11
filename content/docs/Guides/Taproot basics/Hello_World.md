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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKOYMM7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICYvr4begFfUu%2BhNLbagodoHUUwDv0FxjSRQGEL8jPt0AiEA6VRmNGdXl3c2Hlg%2BAQqlQRONjTPhTvPP%2F6Zc1A%2FAa1kqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArNUQCvAX0NSHa15CrcAy4K7LI%2FHDFVEjBIW%2FYg9EA18gDOhaA1I7AFt8YneEHOyLOwNzuaba9%2B%2B1UMH0oxQco2Ke5qUvor0qmkq6iKyFOupCKtR1xRGxwA9%2Fx%2Br4aLkianAv5o5TUWh8uEwab%2FVEWSMj772N698Em8iLn6epWAuAKf%2Fif4AfAgYHPABUA9fIaeJ%2BrAVuud4aDnsT4mblCke4lMi%2B1uo%2BOqshMihnN%2BSHRWqtxx7E%2Bpv6kWyldi%2FUdbEBPiaVZWyDCrALOxq6m4BYAojtCkumZKztqvY%2BsRvGIcrV59d%2BTcFfATSGWsDARP87QeafiMB9ffyWXUNCF%2FDsIi1znxLf8W0c0qJxdkX%2F539XWyPeHgnW65irIWTQ8Ef8mNkPPU01Fop3hgmrQgWcj6x8EeeEfydsQ5BQtJV2QY7IDyxbpPXgrflKJ4XoZKGw0fSsL2AsldMUeqf7RxCDQOlrUSa0tM2wiZMEXxOqN9BnJordDaw3Q9pG1YiEn1BNXxZV28u%2BP5Fe2E5oVR5Xqqr2i%2FFm3V79%2Fhjedr7mVVnjm7EmCI13mkQGgz4Ho4%2FmAHI6FIW0vlNFcpkN0yBbYC12aXc7G%2FG%2BaGPvkS2xuCdoZ83N%2FOUQqexuIFQGXQtita38%2B8NmyDMO7ywb4GOqUBBiw49g9smJnsuVfYakn0l385ZtZ6h0PiA2g4XJ41W%2Fhv4jvD0xKGbM8noPiuMyqlYsMY9%2FXeMYm%2F7pjwDQh8mAvkWCqAUvYlCFsVG5C1tdezjgFl7Ho0PVqdJWJKQhw1O1FfLqtZZaq46llv6GMX5nKmnzLdv7jv9S5s3dp0OErSwI2JheKKRXCTRlsSnI9kGmDpFxhpQ5ufBxCtLRF4osz0xYDm&X-Amz-Signature=779ec27ec6d0e0da922b31a4fd2a145f574e46f4a685d35b129aefcc8303b192&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKOYMM7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICYvr4begFfUu%2BhNLbagodoHUUwDv0FxjSRQGEL8jPt0AiEA6VRmNGdXl3c2Hlg%2BAQqlQRONjTPhTvPP%2F6Zc1A%2FAa1kqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArNUQCvAX0NSHa15CrcAy4K7LI%2FHDFVEjBIW%2FYg9EA18gDOhaA1I7AFt8YneEHOyLOwNzuaba9%2B%2B1UMH0oxQco2Ke5qUvor0qmkq6iKyFOupCKtR1xRGxwA9%2Fx%2Br4aLkianAv5o5TUWh8uEwab%2FVEWSMj772N698Em8iLn6epWAuAKf%2Fif4AfAgYHPABUA9fIaeJ%2BrAVuud4aDnsT4mblCke4lMi%2B1uo%2BOqshMihnN%2BSHRWqtxx7E%2Bpv6kWyldi%2FUdbEBPiaVZWyDCrALOxq6m4BYAojtCkumZKztqvY%2BsRvGIcrV59d%2BTcFfATSGWsDARP87QeafiMB9ffyWXUNCF%2FDsIi1znxLf8W0c0qJxdkX%2F539XWyPeHgnW65irIWTQ8Ef8mNkPPU01Fop3hgmrQgWcj6x8EeeEfydsQ5BQtJV2QY7IDyxbpPXgrflKJ4XoZKGw0fSsL2AsldMUeqf7RxCDQOlrUSa0tM2wiZMEXxOqN9BnJordDaw3Q9pG1YiEn1BNXxZV28u%2BP5Fe2E5oVR5Xqqr2i%2FFm3V79%2Fhjedr7mVVnjm7EmCI13mkQGgz4Ho4%2FmAHI6FIW0vlNFcpkN0yBbYC12aXc7G%2FG%2BaGPvkS2xuCdoZ83N%2FOUQqexuIFQGXQtita38%2B8NmyDMO7ywb4GOqUBBiw49g9smJnsuVfYakn0l385ZtZ6h0PiA2g4XJ41W%2Fhv4jvD0xKGbM8noPiuMyqlYsMY9%2FXeMYm%2F7pjwDQh8mAvkWCqAUvYlCFsVG5C1tdezjgFl7Ho0PVqdJWJKQhw1O1FfLqtZZaq46llv6GMX5nKmnzLdv7jv9S5s3dp0OErSwI2JheKKRXCTRlsSnI9kGmDpFxhpQ5ufBxCtLRF4osz0xYDm&X-Amz-Signature=4c474f4d8caef079697bfdd0b42186806f79a97cffdf09eee94f3fe7243d3f26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
