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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKNQ2EW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICmTfmTBxDm86wuvqFX9tDCNsKj%2BiHWiy%2BNyE4NMZdvyAiAjV1WXHZa9cJhGoHptjQvRZCiXqvcVJrTJoYqZEeTfMiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDEanEzjAev1WRZFJKtwDmeKGst4%2FLCgdCkzSXprJiyJ%2FhM7tyOEmbXlpaU1xz7VxXBOcDwn4H3FJdHKxEH8jYid5xOVtdvCTGczT4GeIK6lH5EDhSiV3SGZV5FPGopHZcIKK7u10Pcwd9jiBDB%2FCOkuJusPkFiZ09vJufKK0uUbI2nIovkt27FyrvoRzHS0RUOL4sUYXz2T7QO2Z%2Fj%2Bz69%2BtNwnW74TZ5Tpju%2FaGDppNMtV0Okpr2Ixc1f6dObTE%2FR4zFX0wXujlg54jHH%2FB9vN1N%2B8ZCUNeB246A59%2FIyUlb3g6QzU1ui82V8Svf8kyBmKkGO6mMWAXC1Trc57PkYQr4YiGTbbaBjj3G0x1hJIxPvdwd0BQFo8BiUbmXWdkBmZq90pX46Ghxirz%2B4B9I%2BkdDbn4Lvk7LfVTOB7%2FSnUYybG%2BZvyTZoSn30rGGmaVVKh02e7E4ivF8s1odg7mfusELfZiVoHg3LqZx1fWGW9yl4Hn2eCh31EkX6S%2FrLeYZD8Yo3lY0dS0J56Gu4m%2Fs521CIEP4VpilxEXxx4IxQ%2B1mMLZ%2B4GbM%2BNDltCzPeAoWglJxQP0nSFvBzsxB3qQcWtwd%2BQoOy73J%2FyWU7g9IfMUJNn20IwhrN%2Bg3QsjgatfTXQYZre8PYzYT4owjbzmvAY6pgHKTZsGcnVud5fzmsFRXJ7LjnAtkjp1XVvp9WcntjM4qqzYp3PEGT1DlFYwRCkvMFXp%2B0mL%2B0%2By0zbtL9pKu%2BRB5PfqVMmCJxpFBc%2FuukyLjqC2uOyA9hbVYMWwiSxs6NkkzAHLx%2FCfuvP0raJDcpIal7XifTdAN6BcniMzXgjpV5PuDBXE0gpzUeJ8IwJV5peRKieCpIsV555Bmdd%2F5bp6RDAAdiyT&X-Amz-Signature=434f0926f5e9badadb0e066bdd96a7d654596d46df3a3b0d43c5fca3f9d1160a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKNQ2EW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICmTfmTBxDm86wuvqFX9tDCNsKj%2BiHWiy%2BNyE4NMZdvyAiAjV1WXHZa9cJhGoHptjQvRZCiXqvcVJrTJoYqZEeTfMiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDEanEzjAev1WRZFJKtwDmeKGst4%2FLCgdCkzSXprJiyJ%2FhM7tyOEmbXlpaU1xz7VxXBOcDwn4H3FJdHKxEH8jYid5xOVtdvCTGczT4GeIK6lH5EDhSiV3SGZV5FPGopHZcIKK7u10Pcwd9jiBDB%2FCOkuJusPkFiZ09vJufKK0uUbI2nIovkt27FyrvoRzHS0RUOL4sUYXz2T7QO2Z%2Fj%2Bz69%2BtNwnW74TZ5Tpju%2FaGDppNMtV0Okpr2Ixc1f6dObTE%2FR4zFX0wXujlg54jHH%2FB9vN1N%2B8ZCUNeB246A59%2FIyUlb3g6QzU1ui82V8Svf8kyBmKkGO6mMWAXC1Trc57PkYQr4YiGTbbaBjj3G0x1hJIxPvdwd0BQFo8BiUbmXWdkBmZq90pX46Ghxirz%2B4B9I%2BkdDbn4Lvk7LfVTOB7%2FSnUYybG%2BZvyTZoSn30rGGmaVVKh02e7E4ivF8s1odg7mfusELfZiVoHg3LqZx1fWGW9yl4Hn2eCh31EkX6S%2FrLeYZD8Yo3lY0dS0J56Gu4m%2Fs521CIEP4VpilxEXxx4IxQ%2B1mMLZ%2B4GbM%2BNDltCzPeAoWglJxQP0nSFvBzsxB3qQcWtwd%2BQoOy73J%2FyWU7g9IfMUJNn20IwhrN%2Bg3QsjgatfTXQYZre8PYzYT4owjbzmvAY6pgHKTZsGcnVud5fzmsFRXJ7LjnAtkjp1XVvp9WcntjM4qqzYp3PEGT1DlFYwRCkvMFXp%2B0mL%2B0%2By0zbtL9pKu%2BRB5PfqVMmCJxpFBc%2FuukyLjqC2uOyA9hbVYMWwiSxs6NkkzAHLx%2FCfuvP0raJDcpIal7XifTdAN6BcniMzXgjpV5PuDBXE0gpzUeJ8IwJV5peRKieCpIsV555Bmdd%2F5bp6RDAAdiyT&X-Amz-Signature=203a323111d4614d3e7c287318cea981c4b444faf87ba3664ebf02bb2cf34016&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
