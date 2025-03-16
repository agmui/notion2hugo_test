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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7ZL4PC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLILLB3sF0PFIR2OWO%2Bzr79G54sRWZEBtiQVKpOgSiJQIhAPEmDmuHupx8P%2B6kxA%2BK1x9K40yIFiTnIXgf5kkoEYotKv8DCDYQABoMNjM3NDIzMTgzODA1IgwZ4EC5e9a6OngjQ8Uq3ANmD7DPxX2U1iCpDDp%2Fs1R12b14XP8DRojfIaHVxBP%2BB3D6jpPs0wMTmrNfYI2J%2B4%2B%2FZWjr0eHFWN9S6AQzBj2RbxIhWcTYiHJakBEbwNnQ%2B2uFzb58Eo69byv8IVrlhXnOI20q%2B0Op5FkcyrR9LNcKA9gt%2F%2FXPgyqtF6Zo2wy38LrquC5u955CXmGo1MjDGxltwKEFONEmmN6Cn%2FH7guqz3FH0Eb2I8Ac6URjMcD5jDx9cJJ3Lg6MJ%2FBnNBUafEoAxjuv%2BWyZJXN0ulw9lLfuVzimz9T1BkTvgFhYSvlHvsQt4urDOJDqDa1Nc%2BZO8yIoOsWn2ECi%2Fouu6bQDU6T1hx6EejYB4txoEIqE5jelW1D%2BnnTCgAra%2BxWiCI3p6jMoYlC5qa%2BzuryIS8hZP7OhtdWyCI4uvD8S8QW9soT%2FRdFt7euStKbuNrZLpERS3Xbj7ayl5ShAxFcCW3EXI%2B9UzWvE1hkhB1MJphmzMmZHWrazIR13TgFmgzmQM61bgwpWTHLcen8z52d7mR91KrwwATfIhR6Jbv2aKvAw3Akgtp%2FropGyorVDbwXyEwYGv%2FYm91rZfIZGhOSXG8QaS99VpAeJCfwgszaeDTfaND0epCTnqAhMdO5pNpNow9DCD%2Fty%2BBjqkAZO%2FxILObXN59P6CAWRWuCIaj2F459YgqQ1bX%2B2DnfJuExKgz7GL8VTzuCVHalWGob7AO3WwtRSTp%2BdMEsmyrxxUepxF1XJpUvJCZEwvmxzc7QTkyd8RqLXvlSnWf1fHFHuNxMRH0AX1kWxGpdbP9yOKt7z25KdH2jOwfxG8L23rUrv4pfcpHUVgu5KyibsqqedVySEIfpBDObgRQeLsS0D%2Bo1M4&X-Amz-Signature=5fdd9a344da860d04aae995e8eef2263c45be05b91774c099ea38977ec03e3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7ZL4PC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLILLB3sF0PFIR2OWO%2Bzr79G54sRWZEBtiQVKpOgSiJQIhAPEmDmuHupx8P%2B6kxA%2BK1x9K40yIFiTnIXgf5kkoEYotKv8DCDYQABoMNjM3NDIzMTgzODA1IgwZ4EC5e9a6OngjQ8Uq3ANmD7DPxX2U1iCpDDp%2Fs1R12b14XP8DRojfIaHVxBP%2BB3D6jpPs0wMTmrNfYI2J%2B4%2B%2FZWjr0eHFWN9S6AQzBj2RbxIhWcTYiHJakBEbwNnQ%2B2uFzb58Eo69byv8IVrlhXnOI20q%2B0Op5FkcyrR9LNcKA9gt%2F%2FXPgyqtF6Zo2wy38LrquC5u955CXmGo1MjDGxltwKEFONEmmN6Cn%2FH7guqz3FH0Eb2I8Ac6URjMcD5jDx9cJJ3Lg6MJ%2FBnNBUafEoAxjuv%2BWyZJXN0ulw9lLfuVzimz9T1BkTvgFhYSvlHvsQt4urDOJDqDa1Nc%2BZO8yIoOsWn2ECi%2Fouu6bQDU6T1hx6EejYB4txoEIqE5jelW1D%2BnnTCgAra%2BxWiCI3p6jMoYlC5qa%2BzuryIS8hZP7OhtdWyCI4uvD8S8QW9soT%2FRdFt7euStKbuNrZLpERS3Xbj7ayl5ShAxFcCW3EXI%2B9UzWvE1hkhB1MJphmzMmZHWrazIR13TgFmgzmQM61bgwpWTHLcen8z52d7mR91KrwwATfIhR6Jbv2aKvAw3Akgtp%2FropGyorVDbwXyEwYGv%2FYm91rZfIZGhOSXG8QaS99VpAeJCfwgszaeDTfaND0epCTnqAhMdO5pNpNow9DCD%2Fty%2BBjqkAZO%2FxILObXN59P6CAWRWuCIaj2F459YgqQ1bX%2B2DnfJuExKgz7GL8VTzuCVHalWGob7AO3WwtRSTp%2BdMEsmyrxxUepxF1XJpUvJCZEwvmxzc7QTkyd8RqLXvlSnWf1fHFHuNxMRH0AX1kWxGpdbP9yOKt7z25KdH2jOwfxG8L23rUrv4pfcpHUVgu5KyibsqqedVySEIfpBDObgRQeLsS0D%2Bo1M4&X-Amz-Signature=9c9c91775a9d59f0f66d80fbc01c86aa537d8d14c91bb8bc87be5fcc1cf7f3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
