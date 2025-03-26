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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZKXVIA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0SH7pIeFX4qjC57mBSyTrivmzzv3EBe58ler7JV68wAiEApUVKIqAGppN87UVPYSzK53SXlSrhQfKypFPQJh4KNb8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCkUAOj2IuV3L%2BqHPSrcA05E4kV3MbGCxGdPLTlxL3rSX6inQifAD0KS%2BYPC%2B1WxsztJ9%2BxXgm1HoyTijjJD75ybrRpUXSJ3C70LwDyQsqnLH%2FzmzXYZu%2BFGo3cmT5q8%2FvwhaO0uk5LNRk8%2Fy8WDxWjwOpM%2BsXsPVSfF%2BcYndFEdzFgkRBpgpTWp%2F2%2BBF3Yq0ppCxFeBHeVfB4efLWZbaqGuC0StuB%2BGtBiOHsIYD4wOWUErDw32Hx2vTzfzAf3EQrsHNZLlLfg%2FmRGV4eitad8OBm%2BOl2dDSm3qL%2F4XdtORXS%2FTypDzH5d6r8Po%2BRXqvcJpl8QQoF3eY5h2joA8D7tV0%2FwOcMm3vpTvbutFnqKu4p6G1ZN%2B90IcEo8mg87bqqmLKoyliAE3%2F9vMlU15prfPIXrF%2Bg9UDv8%2FPq5uWzrLt2PePORYEDeUDxmwPXRt%2Fo9ntYUBISBFjbxDOBZ%2FQxZaGRdA0NfAXBThS73hAXCCdMGdqTYN7ff1Xnn4BYRJDbAPLkA8MDFNpiF9J75uvTJcDX4vD5PHxIaV8GykhuRT6tbznz3QwJf8jYhHC7iOwe9pnq93I1MsA%2F74bg4PiZnCH4CgQ0xdw5Lj28iyb%2Fs6WOOeEQ37RuhpSiM%2FfuIPfK04uIdlLlgLJrdLMOXKjb8GOqUBMCnvzZakZ80MOE0JZIzMREOC3tQdD1EryGOppdm6KyhF4PaoE2jL890yv2wkeIVjXUNeGMe2Mtho6SazvIAfCurwQNqNQusupStjdu%2FTZUFXpmQMmFakmsUSRUZLMXgnE%2BLW53%2FQ7eDzEWgDH%2BZE4dJvxtjUUi94%2BYas3SizwECBUKeBiSQTP4oMrj8lhwa0OigTHLoZrQRo3deWqqbbv4%2Fxu%2FCw&X-Amz-Signature=a7bf958f2d132be4a54a68b531dfa89278a3b74964334bd7f3151f2f080550dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZKXVIA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0SH7pIeFX4qjC57mBSyTrivmzzv3EBe58ler7JV68wAiEApUVKIqAGppN87UVPYSzK53SXlSrhQfKypFPQJh4KNb8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCkUAOj2IuV3L%2BqHPSrcA05E4kV3MbGCxGdPLTlxL3rSX6inQifAD0KS%2BYPC%2B1WxsztJ9%2BxXgm1HoyTijjJD75ybrRpUXSJ3C70LwDyQsqnLH%2FzmzXYZu%2BFGo3cmT5q8%2FvwhaO0uk5LNRk8%2Fy8WDxWjwOpM%2BsXsPVSfF%2BcYndFEdzFgkRBpgpTWp%2F2%2BBF3Yq0ppCxFeBHeVfB4efLWZbaqGuC0StuB%2BGtBiOHsIYD4wOWUErDw32Hx2vTzfzAf3EQrsHNZLlLfg%2FmRGV4eitad8OBm%2BOl2dDSm3qL%2F4XdtORXS%2FTypDzH5d6r8Po%2BRXqvcJpl8QQoF3eY5h2joA8D7tV0%2FwOcMm3vpTvbutFnqKu4p6G1ZN%2B90IcEo8mg87bqqmLKoyliAE3%2F9vMlU15prfPIXrF%2Bg9UDv8%2FPq5uWzrLt2PePORYEDeUDxmwPXRt%2Fo9ntYUBISBFjbxDOBZ%2FQxZaGRdA0NfAXBThS73hAXCCdMGdqTYN7ff1Xnn4BYRJDbAPLkA8MDFNpiF9J75uvTJcDX4vD5PHxIaV8GykhuRT6tbznz3QwJf8jYhHC7iOwe9pnq93I1MsA%2F74bg4PiZnCH4CgQ0xdw5Lj28iyb%2Fs6WOOeEQ37RuhpSiM%2FfuIPfK04uIdlLlgLJrdLMOXKjb8GOqUBMCnvzZakZ80MOE0JZIzMREOC3tQdD1EryGOppdm6KyhF4PaoE2jL890yv2wkeIVjXUNeGMe2Mtho6SazvIAfCurwQNqNQusupStjdu%2FTZUFXpmQMmFakmsUSRUZLMXgnE%2BLW53%2FQ7eDzEWgDH%2BZE4dJvxtjUUi94%2BYas3SizwECBUKeBiSQTP4oMrj8lhwa0OigTHLoZrQRo3deWqqbbv4%2Fxu%2FCw&X-Amz-Signature=208617b09bab464137a1df4a7b0e6d0373d4d4d1fdfea3363e4f2ed1ca28b91d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
