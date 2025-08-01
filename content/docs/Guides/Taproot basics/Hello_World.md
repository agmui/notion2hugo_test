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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRO7PWL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHmwAJFgsjz1dZVHnhHox%2BjK0g4KnrBU27n4mJJIDtvAiALZequHm6lAdbtqt3H3%2BSNQw%2B4gpGT4R4fZj2zyV4E%2FyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfng4TEu98KTiV7JKtwDHdmFZtwIbM744iFgrbumqsJKWXAKS%2Bm4WzlYBLM1LusqmF1lw0eSzg%2Bv17EhKjfK7uSO4EPx6o1TFAjMY83eVU0lT4iXsODdFvhsFzF%2FtoZkpGhwMb%2BcqiwQNwqs600B2HzElx5we6o0%2FfV7zrFwXrdlb3Ply4rtQESnOOXqgtZTnRq9oz2t%2BIvasG1BwoJoptOYiQ4Go66dRXwkZKvhAQDfmaQUUu%2B9nmBZ%2BStV0Lkthrb7kvwz3656qfdVHzVtV5yuayfOPb7INQ31Mcybdp0yWfrlk0vdjVidOpr8Jn8dD1SZgOCTXINFxGzXZEog9D967OhQlkKJlvaGSNl2jDcu0o7e2V8fu3doxPcQSkC%2BbQuYBBWU9Loab7w2tFS8Crl76kom2duTpMK1Jetordyo1yukJr8TXME4VU2BD%2BoNg3sP3%2FN217e0r97q%2FH13P0EBvKCU04qg7BtgrAYMU212S1T2vb%2BdAz4ZB6xa6i%2FtLevwA6CyAlF1H3azhnph9Ldls%2Bx%2BuS783Ay4EmYYfArXnQ%2BXPDb59q%2BMfsCzbDUEBVEl8BThVJZ%2B5uV24WRcahQgjGPUv%2FWDr6WbPVTP1vEq7HDWKEXN8RbKR2%2BHX2mNy%2BWmUuBvIGWhdL0w4e20xAY6pgEUpIJ5b1mQl6K3EoydvblW1owYL9VpkmT0MGY5CkTvII6fL0IlME0clNEnaBbpMGAQ8YQVGqvqxf2VrMNnJWnSXNjUvAGBDoTGJLSI9IQymq4b%2Bl60p3KzLDIkHgg4HDhLgrm8OkGzRBOEdfHB30A0IJMV7RPdtqKacA%2FSojN70NloZ%2FJu2TlGlLCHQenY4jJ2JM1887zzqGkCCo3qY5BlnycmJ1Ss&X-Amz-Signature=e4e1dba4ca4bded050f8c2cf99edbe79a1829e8cc821f74cb630b7f5d9a8bd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRO7PWL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHmwAJFgsjz1dZVHnhHox%2BjK0g4KnrBU27n4mJJIDtvAiALZequHm6lAdbtqt3H3%2BSNQw%2B4gpGT4R4fZj2zyV4E%2FyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfng4TEu98KTiV7JKtwDHdmFZtwIbM744iFgrbumqsJKWXAKS%2Bm4WzlYBLM1LusqmF1lw0eSzg%2Bv17EhKjfK7uSO4EPx6o1TFAjMY83eVU0lT4iXsODdFvhsFzF%2FtoZkpGhwMb%2BcqiwQNwqs600B2HzElx5we6o0%2FfV7zrFwXrdlb3Ply4rtQESnOOXqgtZTnRq9oz2t%2BIvasG1BwoJoptOYiQ4Go66dRXwkZKvhAQDfmaQUUu%2B9nmBZ%2BStV0Lkthrb7kvwz3656qfdVHzVtV5yuayfOPb7INQ31Mcybdp0yWfrlk0vdjVidOpr8Jn8dD1SZgOCTXINFxGzXZEog9D967OhQlkKJlvaGSNl2jDcu0o7e2V8fu3doxPcQSkC%2BbQuYBBWU9Loab7w2tFS8Crl76kom2duTpMK1Jetordyo1yukJr8TXME4VU2BD%2BoNg3sP3%2FN217e0r97q%2FH13P0EBvKCU04qg7BtgrAYMU212S1T2vb%2BdAz4ZB6xa6i%2FtLevwA6CyAlF1H3azhnph9Ldls%2Bx%2BuS783Ay4EmYYfArXnQ%2BXPDb59q%2BMfsCzbDUEBVEl8BThVJZ%2B5uV24WRcahQgjGPUv%2FWDr6WbPVTP1vEq7HDWKEXN8RbKR2%2BHX2mNy%2BWmUuBvIGWhdL0w4e20xAY6pgEUpIJ5b1mQl6K3EoydvblW1owYL9VpkmT0MGY5CkTvII6fL0IlME0clNEnaBbpMGAQ8YQVGqvqxf2VrMNnJWnSXNjUvAGBDoTGJLSI9IQymq4b%2Bl60p3KzLDIkHgg4HDhLgrm8OkGzRBOEdfHB30A0IJMV7RPdtqKacA%2FSojN70NloZ%2FJu2TlGlLCHQenY4jJ2JM1887zzqGkCCo3qY5BlnycmJ1Ss&X-Amz-Signature=5d99f744a5dd74e9f64701cf6cedb48a4e62bfb88ef097985b74e7122701e354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
